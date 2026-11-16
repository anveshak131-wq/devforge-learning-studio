import { Env, verifyAdminSession, DEFAULT_SUPERADMIN_EMAILS } from '../_auth';
import { checkRateLimit, createRateLimitResponse } from '../_rateLimiter';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
  'Cache-Control': 'no-cache, no-store, must-revalidate',
};

const JSON_RESPONSE = (data: any, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });

export const onRequestOptions = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Strict SuperAdmin Session Verification
    const auth = await verifyAdminSession(request, env);
    if (!auth.authorized) {
      return JSON_RESPONSE({ success: false, error: auth.error || 'Unauthorized' }, 401);
    }

    let customAdmins: string[] = [];
    if (env && env.DEVFORGE_KV) {
      customAdmins = (await env.DEVFORGE_KV.get('devforge_admin_whitelist_v1', { type: 'json' }).catch(() => [])) || [];
    }

    const merged = Array.from(new Set([...DEFAULT_SUPERADMIN_EMAILS, ...customAdmins]));
    return JSON_RESPONSE({ success: true, admins: merged });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 10 whitelist mutations per minute per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'admin_whitelist_post',
      maxRequests: 10,
      windowSeconds: 60,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(rateLimit, 'Admin action rate limit exceeded. Please wait a moment.');
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

    const { email, action } = body || {};
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return JSON_RESPONSE({ success: false, error: 'Invalid email address' }, 400);
    }

    const cleanEmail = email.trim().toLowerCase();
    let customAdmins: string[] = [];

    if (env && env.DEVFORGE_KV) {
      customAdmins = (await env.DEVFORGE_KV.get('devforge_admin_whitelist_v1', { type: 'json' }).catch(() => [])) || [];
    }

    let updatedList = [...customAdmins];

    if (action === 'remove') {
      if (DEFAULT_SUPERADMIN_EMAILS.includes(cleanEmail)) {
        return JSON_RESPONSE({ success: false, error: 'Cannot remove primary SuperAdmin account' }, 400);
      }
      updatedList = updatedList.filter(e => e.toLowerCase() !== cleanEmail);
    } else {
      if (!updatedList.includes(cleanEmail)) {
        updatedList.push(cleanEmail);
      }
    }

    if (env && env.DEVFORGE_KV) {
      await env.DEVFORGE_KV.put('devforge_admin_whitelist_v1', JSON.stringify(updatedList));
    }

    const merged = Array.from(new Set([...DEFAULT_SUPERADMIN_EMAILS, ...updatedList]));
    return JSON_RESPONSE({ success: true, admins: merged, message: 'Admin list updated successfully.' });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};
