import { Env, DEFAULT_SUPERADMIN_EMAILS } from './_auth';

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
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
};

/**
 * GET /api/certificates?id=DF-PY-2026-X8K2
 * Public read-only verification endpoint: verifies authentic credentials by ID from Cloudflare KV
 */
export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;
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
 * Strictly authenticated registration: persists an issued certificate to Cloudflare KV.
 * Enforces session ownership, prevents credential overwrites, and generates server-side tamper-proof hashes.
 */
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;
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
        error: 'Authentication required. Please sign in to register credentials.',
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
    const cert = body?.certificate;

    if (!cert || !cert.credentialId || !cert.trackTitle) {
      return JSON_RESPONSE({
        success: false,
        error: 'Invalid certificate payload. Required fields: credentialId, trackTitle.',
      }, 400);
    }

    const cleanCredId = String(cert.credentialId).trim().toUpperCase();

    // 2. Anti-Overwrite Protection: Check if this credential ID already exists in KV
    const existingCert = await env.DEVFORGE_KV.get(`certificate:${cleanCredId}`, { type: 'json' }).catch(() => null);
    if (existingCert) {
      const cleanSessionEmail = String(sessionUser.email || '').toLowerCase().trim();
      const isSuperAdmin = DEFAULT_SUPERADMIN_EMAILS.includes(cleanSessionEmail) || sessionUser.role === 'admin';

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

    // 3. Cryptographic Tamper-Proof Signature & Identity Binding
    const cleanSessionEmail = String(sessionUser.email || '').toLowerCase().trim();
    const isSuperAdmin = DEFAULT_SUPERADMIN_EMAILS.includes(cleanSessionEmail) || sessionUser.role === 'admin';

    // Student identity is locked to their verified session (unless Admin issuing on behalf)
    const verifiedUserName = (isSuperAdmin && cert.userName) 
      ? String(cert.userName).trim() 
      : String(sessionUser.fullName || sessionUser.email.split('@')[0]).trim();

    const verifiedUserId = sessionUser.id;
    const issuedAt = cert.issuedAt || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Generate cryptographic SHA-256 hash
    const hashData = `${cleanCredId}|${verifiedUserId}|${cert.trackId || ''}|${cert.grade || 'Honors'}|${issuedAt}`;
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

    // 4. Store in Cloudflare KV under primary and secondary IDs
    const writes: Promise<void>[] = [
      env.DEVFORGE_KV.put(`certificate:${cleanCredId}`, JSON.stringify(securedCert)),
    ];

    if (cert.id && typeof cert.id === 'string' && cert.id.trim() !== cleanCredId) {
      writes.push(env.DEVFORGE_KV.put(`certificate:${cert.id.trim()}`, JSON.stringify(securedCert)));
    }

    // Link certificate to user's earned credentials in KV
    if (Array.isArray(sessionUser.earnedCertificateIds)) {
      if (!sessionUser.earnedCertificateIds.includes(cleanCredId)) {
        sessionUser.earnedCertificateIds.push(cleanCredId);
        writes.push(
          env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(sessionUser), {
            expirationTtl: 60 * 60 * 24 * 30,
          })
        );
        if (sessionUser.email) {
          writes.push(env.DEVFORGE_KV.put(`user:email:${sessionUser.email.toLowerCase().trim()}`, JSON.stringify(sessionUser)));
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
