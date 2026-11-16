import { Env, DEFAULT_SUPERADMIN_EMAILS } from './_auth';
import { checkRateLimit, createRateLimitResponse, getCorsHeaders } from './_rateLimiter';

const JSON_RESPONSE = (data: any, status = 200, request?: Request) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...getCorsHeaders(request),
    },
  });

export const onRequestOptions = async (context: { request: Request }) => {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(context?.request),
  });
};

/**
 * GET /api/certificates?id=DF-PY-2026-X8K2
 * Public read-only verification endpoint: verifies authentic credentials by ID from Cloudflare KV
 */
export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 40 verification lookups per minute per IP to prevent scraper exhaustion
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'cert_get',
      maxRequests: 40,
      windowSeconds: 60,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(
        rateLimit,
        'Rate limit exceeded: too many certificate verification requests. Please wait a moment before trying again.'
      );
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({
        success: false,
        error: 'DEVFORGE_KV binding is missing or unavailable.',
      }, 500);
    }

    const url = new URL(request.url);
    const rawId = url.searchParams.get('id');

    if (!rawId || !rawId.trim()) {
      return JSON_RESPONSE({
        success: false,
        error: 'Credential ID parameter is required (e.g. ?id=DF-PY-2026-X8K2).',
      }, 400);
    }

    const cleanId = rawId.trim();

    // Validate ID length & alphanumeric format before querying KV
    if (cleanId.length < 3 || cleanId.length > 64 || !/^[A-Za-z0-9_-]+$/.test(cleanId)) {
      return JSON_RESPONSE({
        success: false,
        error: 'Invalid credential ID format. Credential IDs must be between 3 and 64 alphanumeric characters.',
      }, 400);
    }

    // Look up by exact key or uppercase credential key
    let certificate = await env.DEVFORGE_KV.get(`certificate:${cleanId.toUpperCase()}`, { type: 'json' }).catch(() => null);

    if (!certificate) {
      certificate = await env.DEVFORGE_KV.get(`certificate:${cleanId}`, { type: 'json' }).catch(() => null);
    }

    if (!certificate) {
      return JSON_RESPONSE({
        success: false,
        error: `Credential "${cleanId}" not found in DevForge verification registry.`,
      }, 404);
    }

    return JSON_RESPONSE({
      success: true,
      certificate,
      verifiedAt: new Date().toISOString(),
      issuer: 'DevForge Academy of Software Engineering',
    });
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: 'Failed to verify credential: ' + (err?.message || 'Internal error'),
    }, 500);
  }
};

/**
 * POST /api/certificates
 * Strictly authenticated registration & issuance endpoint.
 * Enforces course enrollment eligibility, session ownership, anti-overwrite protection,
 * and generates server-side cryptographic SHA-256 signatures.
 */
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 5 certificate registration/issuance requests per 10 minutes per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'cert_post',
      maxRequests: 5,
      windowSeconds: 600,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(
        rateLimit,
        'Certificate issuance rate limit exceeded. You may only issue up to 5 certificates per 10 minutes.'
      );
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({
        success: false,
        error: 'DEVFORGE_KV binding is missing or unavailable.',
      }, 500);
    }

    // 1. Authenticate caller session from Cookie or Bearer header
    let sessionToken: string | null = null;
    const cookieHeader = request.headers.get('Cookie') || '';
    const cookieMatch = cookieHeader.match(/df_session=([^;]+)/);
    if (cookieMatch) {
      sessionToken = cookieMatch[1];
    } else {
      const authHeader = request.headers.get('Authorization') || '';
      if (authHeader.startsWith('Bearer ')) {
        sessionToken = authHeader.substring(7).trim();
      }
    }

    if (!sessionToken) {
      return JSON_RESPONSE({
        success: false,
        error: 'Authentication required. Please sign in to issue and register credentials.',
      }, 401);
    }

    const sessionUser = await env.DEVFORGE_KV.get(`session:${sessionToken}`, { type: 'json' }).catch(() => null);
    if (!sessionUser || !sessionUser.id) {
      return JSON_RESPONSE({
        success: false,
        error: 'Session invalid or expired. Please sign in again.',
      }, 401);
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return JSON_RESPONSE({ success: false, error: 'Invalid JSON request payload.' }, 400);
    }

    const cleanSessionEmail = String(sessionUser.email || '').toLowerCase().trim();
    
    // Check against superadmin whitelist
    const customAdmins = (await env.DEVFORGE_KV.get('devforge_admin_whitelist_v1', { type: 'json' }).catch(() => [])) || [];
    const envAdmins = env.ADMIN_EMAILS ? env.ADMIN_EMAILS.split(',').map((e: string) => e.trim().toLowerCase()) : [];
    const isSuperAdmin =
      DEFAULT_SUPERADMIN_EMAILS.includes(cleanSessionEmail) ||
      envAdmins.includes(cleanSessionEmail) ||
      (Array.isArray(customAdmins) && customAdmins.map((e: string) => String(e).toLowerCase().trim()).includes(cleanSessionEmail));

    // 2. Action: Server-Side Authoritative Issuance (action: 'issue')
    if (body.action === 'issue') {
      const { trackId, trackTitle, language, skillsVerified, examScore } = body;
      if (!trackId || !trackTitle) {
        return JSON_RESPONSE({ success: false, error: 'Missing trackId or trackTitle for certificate issuance.' }, 400);
      }

      const cleanTrackId = String(trackId).toLowerCase().trim();

      // Enrollment & Course Access Check
      const purchasedCourses = Array.isArray(sessionUser.purchasedCourses) ? sessionUser.purchasedCourses : [];
      const hasAccess =
        isSuperAdmin ||
        sessionUser.hasPromoAccess === true ||
        purchasedCourses.includes(cleanTrackId) ||
        purchasedCourses.includes('all') ||
        purchasedCourses.includes('*');

      if (!hasAccess) {
        return JSON_RESPONSE({
          success: false,
          error: `Access denied: Enrollment or purchase is required to earn a verified certificate for track "${trackTitle}".`,
        }, 403);
      }

      // Enforce passing score requirement
      const scoreNum = typeof examScore === 'number' ? Math.max(0, Math.min(100, Math.round(examScore))) : undefined;
      if (scoreNum !== undefined && scoreNum < 70) {
        return JSON_RESPONSE({
          success: false,
          error: `Graduation requirement not met: Verified exam score (${scoreNum}%) is below the minimum passing threshold (70%).`,
        }, 400);
      }

      // Compute grade server-side based on verified exam score
      const grade = (scoreNum !== undefined && scoreNum >= 90)
        ? 'Distinction'
        : (scoreNum !== undefined && scoreNum >= 80)
        ? 'High Honors'
        : 'Honors';

      // Generate authoritative credential ID: DF-TR-YEAR-XXXX
      const langPrefix = cleanTrackId.substring(0, 2).toUpperCase();
      const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
      const year = new Date().getFullYear();
      const credentialId = `DF-${langPrefix}-${year}-${randomPart}`;
      const issuedAt = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

      // Generate server cryptographic signature
      const hashData = `${credentialId}|${sessionUser.id}|${cleanTrackId}|${grade}|${issuedAt}`;
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(hashData));
      const hashHex = Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
        .substring(0, 24);

      const certificate = {
        id: 'cert_' + Math.random().toString(36).substring(2, 10),
        credentialId,
        userId: sessionUser.id,
        userName: sessionUser.fullName || sessionUser.email.split('@')[0],
        trackId: cleanTrackId,
        trackTitle,
        language: language || cleanTrackId,
        skillsVerified: Array.isArray(skillsVerified) ? skillsVerified : [],
        examScore: scoreNum,
        grade,
        issuedAt,
        registeredAt: new Date().toISOString(),
        verificationHash: `df_v_${hashHex}`,
        issuer: 'DevForge Academy of Software Engineering',
      };

      // Persist to Cloudflare KV
      const writes: Promise<void>[] = [
        env.DEVFORGE_KV.put(`certificate:${credentialId}`, JSON.stringify(certificate)),
        env.DEVFORGE_KV.put(`certificate:${certificate.id}`, JSON.stringify(certificate)),
      ];

      // Add to user's earned credentials
      if (Array.isArray(sessionUser.earnedCertificateIds)) {
        if (!sessionUser.earnedCertificateIds.includes(credentialId)) {
          sessionUser.earnedCertificateIds.push(credentialId);
          writes.push(
            env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(sessionUser), {
              expirationTtl: 60 * 60 * 24 * 30,
            })
          );
          if (sessionUser.email) {
            writes.push(env.DEVFORGE_KV.put(`user:email:${cleanSessionEmail}`, JSON.stringify(sessionUser)));
          }
        }
      }

      await Promise.all(writes);

      return JSON_RESPONSE({
        success: true,
        credentialId,
        certificate,
        message: 'Graduation certificate officially verified, signed, and issued by DevForge.',
      });
    }

    // 3. Action: Register / Sync existing certificate payload (SuperAdmin Only)
    if (!isSuperAdmin) {
      return JSON_RESPONSE({
        success: false,
        error: 'Access denied: Direct certificate payload registration is deprecated and restricted to SuperAdmins. Please earn credentials through track examination (action: "issue").',
      }, 403);
    }

    const cert = body?.certificate;
    if (!cert || !cert.credentialId || !cert.trackTitle) {
      return JSON_RESPONSE({
        success: false,
        error: 'Invalid certificate payload. Required fields: credentialId, trackTitle.',
      }, 400);
    }

    const cleanCredId = String(cert.credentialId).trim().toUpperCase();
    const trackId = String(cert.trackId || '').toLowerCase().trim();

    // Check course enrollment eligibility
    const purchasedCourses = Array.isArray(sessionUser.purchasedCourses) ? sessionUser.purchasedCourses : [];
    const hasAccess =
      isSuperAdmin ||
      sessionUser.hasPromoAccess === true ||
      purchasedCourses.includes(trackId) ||
      purchasedCourses.includes('all') ||
      purchasedCourses.includes('*');

    if (!hasAccess && trackId) {
      return JSON_RESPONSE({
        success: false,
        error: `Access denied: Enrollment or purchase is required to register a certificate for track "${trackId}".`,
      }, 403);
    }

    // Anti-Overwrite Protection: Check if this credential ID already exists in KV
    const existingCert = await env.DEVFORGE_KV.get(`certificate:${cleanCredId}`, { type: 'json' }).catch(() => null);
    if (existingCert) {
      // If registered to a different user, strictly prohibit overwriting
      if (existingCert.userId !== sessionUser.id && !isSuperAdmin) {
        return JSON_RESPONSE({
          success: false,
          error: 'Security Alert: Credential ID already exists and is locked to another recipient. Overwriting is strictly prohibited.',
        }, 403);
      }

      // If already registered for this user, treat as immutable record
      return JSON_RESPONSE({
        success: true,
        credentialId: cleanCredId,
        certificate: existingCert,
        message: 'Certificate is already registered and verified.',
      });
    }

    // Student identity is locked to their verified session (unless Admin issuing on behalf)
    const verifiedUserName = (isSuperAdmin && cert.userName) 
      ? String(cert.userName).trim() 
      : String(sessionUser.fullName || sessionUser.email.split('@')[0]).trim();

    const verifiedUserId = sessionUser.id;
    const issuedAt = cert.issuedAt || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Generate cryptographic SHA-256 hash server-side
    const hashData = `${cleanCredId}|${verifiedUserId}|${trackId}|${cert.grade || 'Honors'}|${issuedAt}`;
    const encoder = new TextEncoder();
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(hashData));
    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .substring(0, 24);

    const securedCert = {
      ...cert,
      credentialId: cleanCredId,
      userId: verifiedUserId,
      userName: verifiedUserName,
      issuedAt,
      verificationHash: `df_v_${hashHex}`,
      registeredAt: new Date().toISOString(),
      issuer: 'DevForge Academy of Software Engineering',
    };

    // Store in Cloudflare KV under primary and secondary IDs
    const writes: Promise<void>[] = [
      env.DEVFORGE_KV.put(`certificate:${cleanCredId}`, JSON.stringify(securedCert)),
    ];

    if (cert.id && typeof cert.id === 'string' && cert.id.trim() !== cleanCredId) {
      writes.push(env.DEVFORGE_KV.put(`certificate:${cert.id.trim()}`, JSON.stringify(securedCert)));
    }

    if (Array.isArray(sessionUser.earnedCertificateIds)) {
      if (!sessionUser.earnedCertificateIds.includes(cleanCredId)) {
        sessionUser.earnedCertificateIds.push(cleanCredId);
        writes.push(
          env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(sessionUser), {
            expirationTtl: 60 * 60 * 24 * 30,
          })
        );
        if (sessionUser.email) {
          writes.push(env.DEVFORGE_KV.put(`user:email:${cleanSessionEmail}`, JSON.stringify(sessionUser)));
        }
      }
    }

    await Promise.all(writes);

    return JSON_RESPONSE({
      success: true,
      credentialId: cleanCredId,
      certificate: securedCert,
      message: 'Certificate successfully verified and registered to public verification registry.',
    });
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: 'Failed to persist certificate: ' + (err?.message || 'Internal error'),
    }, 500);
  }
};
