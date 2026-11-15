import { Env } from './_auth';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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
 * Public endpoint: verifies and retrieves an authentic credential by ID from Cloudflare KV
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
 * Persists an issued certificate to Cloudflare KV for permanent public verification
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

    const body = await request.json().catch(() => null);
    const cert = body?.certificate;

    if (!cert || !cert.credentialId || !cert.trackTitle || !cert.userName) {
      return JSON_RESPONSE({
        success: false,
        error: 'Invalid certificate payload. Required: credentialId, trackTitle, userName.',
      }, 400);
    }

    const cleanCredId = String(cert.credentialId).trim().toUpperCase();

    // Store under primary credential ID (e.g. certificate:DF-PY-2026-X8K2)
    await env.DEVFORGE_KV.put(`certificate:${cleanCredId}`, JSON.stringify(cert));

    // Also index under cert.id if provided
    if (cert.id && typeof cert.id === 'string') {
      await env.DEVFORGE_KV.put(`certificate:${cert.id.trim()}`, JSON.stringify(cert));
    }

    return JSON_RESPONSE({
      success: true,
      credentialId: cleanCredId,
      message: 'Certificate successfully registered to public verification registry.',
    });
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: 'Failed to persist certificate: ' + (err?.message || 'Internal error'),
    }, 500);
  }
};
