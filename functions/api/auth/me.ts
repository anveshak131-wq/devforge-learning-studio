import { Env, DEFAULT_SUPERADMIN_EMAILS } from '../_auth';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Extract session token from cookie or Authorization header
    let token: string | null = null;
    const cookieHeader = request.headers.get('Cookie') || '';
    const cookieMatch = cookieHeader.match(/df_session=([^;]+)/);
    if (cookieMatch) {
      token = cookieMatch[1];
    } else {
      const authHeader = request.headers.get('Authorization') || '';
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7).trim();
      }
    }

    if (!token) {
      return JSON_RESPONSE({ success: false, user: null });
    }

    if (env && env.DEVFORGE_KV) {
      const sessionUser = await env.DEVFORGE_KV.get(`session:${token}`, { type: 'json' }).catch(() => null);
      if (sessionUser && sessionUser.email) {
        const cleanEmail = String(sessionUser.email).trim().toLowerCase();
        const customAdmins = (await env.DEVFORGE_KV.get('devforge_admin_whitelist_v1', { type: 'json' }).catch(() => [])) || [];
        const envAdmins = env.ADMIN_EMAILS
          ? env.ADMIN_EMAILS.split(',').map((e: string) => e.trim().toLowerCase())
          : [];

        const isWhitelisted =
          DEFAULT_SUPERADMIN_EMAILS.includes(cleanEmail) ||
          envAdmins.includes(cleanEmail) ||
          (Array.isArray(customAdmins) &&
            customAdmins.map((e: string) => String(e).toLowerCase().trim()).includes(cleanEmail));

        const updatedRole = isWhitelisted ? 'admin' : (sessionUser.role === 'admin' ? 'student' : sessionUser.role);
        const resolvedUser = {
          ...sessionUser,
          role: updatedRole,
        };

        return JSON_RESPONSE({
          success: true,
          user: resolvedUser,
        });
      }
    }

    return JSON_RESPONSE({ success: false, user: null });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message, user: null }, 500);
  }
};
