import { getCorsHeaders } from '../_rateLimiter';

interface Env {
  DEVFORGE_KV?: {
    delete: (key: string) => Promise<void>;
  };
}

const JSON_RESPONSE = (data: any, status = 200, extraHeaders: Record<string, string> = {}, request?: Request) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...getCorsHeaders(request),
      ...extraHeaders,
    },
  });

export const onRequestOptions = async (context: { request: Request }) => {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(context?.request),
  });
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
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

    if (token && env && env.DEVFORGE_KV) {
      await env.DEVFORGE_KV.delete(`session:${token}`).catch(() => {});
    }

    // Clear HttpOnly cookie
    const clearCookieHeader = 'df_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0';

    return JSON_RESPONSE(
      { success: true, message: 'Logged out successfully' },
      200,
      { 'Set-Cookie': clearCookieHeader },
      request
    );
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500, {}, context.request);
  }
};
