import { Env, verifyAdminSession } from '../_auth';
import { checkRateLimit, createRateLimitResponse, getCorsHeaders } from '../_rateLimiter';

const JSON_RESPONSE = (data: any, status = 200, request?: Request) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...getCorsHeaders(request),
    },
  });

export const onRequestOptions = async (context: { request: Request }) => {
  return new Response(null, { status: 204, headers: getCorsHeaders(context?.request) });
};

export interface PromoGrantItem {
  email: string;
  grantedAt: string;
  grantedBy: string;
  note?: string;
}

/**
 * GET /api/admin/promos
 * List all users granted promotional free access
 */
export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 30 promo list queries per minute per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'admin_promos_get',
      maxRequests: 30,
      windowSeconds: 60,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(rateLimit, 'Rate limit exceeded: too many promo requests.');
    }

    // Strict SuperAdmin Session Verification
    const auth = await verifyAdminSession(request, env);
    if (!auth.authorized) {
      return JSON_RESPONSE({ success: false, error: auth.error || 'Unauthorized' }, 401);
    }

    let promos: PromoGrantItem[] = [];
    if (env && env.DEVFORGE_KV) {
      promos = (await env.DEVFORGE_KV.get('devforge_promo_access_v1', { type: 'json' }).catch(() => [])) || [];
    }

    return JSON_RESPONSE({ success: true, promos });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};

/**
 * POST /api/admin/promos
 * Grant or revoke promotional free access by email
 */
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 15 promo grant/revoke requests per minute per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'admin_promos_post',
      maxRequests: 15,
      windowSeconds: 60,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(rateLimit, 'Rate limit exceeded: too many promo updates.');
    }

    // Strict SuperAdmin Session Verification
    const auth = await verifyAdminSession(request, env);
    if (!auth.authorized) {
      return JSON_RESPONSE({ success: false, error: auth.error || 'Unauthorized' }, 401);
    }

    let body: any = null;
    try {
      body = await request.json();
    } catch {
      return JSON_RESPONSE({ success: false, error: 'Invalid JSON body' }, 400);
    }

    const { email, rawEmails, note, action } = body || {};

    // Collect all candidate emails
    let targetEmails: string[] = [];
    if (typeof email === 'string' && email.trim()) {
      targetEmails.push(email.trim());
    }
    if (typeof rawEmails === 'string' && rawEmails.trim()) {
      const parts = rawEmails.split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
      targetEmails.push(...parts);
    } else if (Array.isArray(rawEmails)) {
      targetEmails.push(...rawEmails.map(s => String(s).trim()).filter(Boolean));
    }

    // Filter valid emails
    targetEmails = Array.from(new Set(
      targetEmails
        .map(e => e.toLowerCase())
        .filter(e => e.includes('@') && e.includes('.'))
    ));

    if (targetEmails.length === 0) {
      return JSON_RESPONSE({ success: false, error: 'Please provide at least one valid email address.' }, 400);
    }

    let currentPromos: PromoGrantItem[] = [];
    if (env && env.DEVFORGE_KV) {
      currentPromos = (await env.DEVFORGE_KV.get('devforge_promo_access_v1', { type: 'json' }).catch(() => [])) || [];
    }

    let updatedList = [...currentPromos];

    if (action === 'remove') {
      const toRemove = new Set(targetEmails);
      updatedList = updatedList.filter(item => !toRemove.has(item.email.toLowerCase()));

      // Update active user records in KV if existing
      if (env && env.DEVFORGE_KV) {
        for (const e of targetEmails) {
          const existingUser = await env.DEVFORGE_KV.get(`user:email:${e}`, { type: 'json' }).catch(() => null);
          if (existingUser) {
            existingUser.hasPromoAccess = false;
            existingUser.purchasedCourses = (existingUser.purchasedCourses || []).filter((c: string) => c !== 'all' && c !== '*');
            await env.DEVFORGE_KV.put(`user:email:${e}`, JSON.stringify(existingUser));
          }
        }
      }
    } else {
      // Add promo grants
      const existingEmailSet = new Set(updatedList.map(i => i.email.toLowerCase()));
      const adminEmail = auth.user?.email || 'admin@devforge';
      const cleanNote = note?.trim() || 'Promotional Free Access';

      for (const e of targetEmails) {
        if (!existingEmailSet.has(e)) {
          updatedList.unshift({
            email: e,
            grantedAt: new Date().toISOString(),
            grantedBy: adminEmail,
            note: cleanNote,
          });
        }

        // If the user already registered in Cloudflare KV, immediately unlock their account
        if (env && env.DEVFORGE_KV) {
          const existingUser = await env.DEVFORGE_KV.get(`user:email:${e}`, { type: 'json' }).catch(() => null);
          if (existingUser) {
            existingUser.hasPromoAccess = true;
            existingUser.promoNote = cleanNote;
            existingUser.purchasedCourses = Array.from(new Set([...(existingUser.purchasedCourses || []), 'all']));
            await env.DEVFORGE_KV.put(`user:email:${e}`, JSON.stringify(existingUser));
          }
        }
      }
    }

    // Persist updated promo list
    if (env && env.DEVFORGE_KV) {
      await env.DEVFORGE_KV.put('devforge_promo_access_v1', JSON.stringify(updatedList));
    }

    const message = action === 'remove'
      ? `Revoked promotional access for ${targetEmails.length} account(s).`
      : `Granted promotional lifetime access to ${targetEmails.length} account(s).`;

    return JSON_RESPONSE({
      success: true,
      promos: updatedList,
      message,
    });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};
