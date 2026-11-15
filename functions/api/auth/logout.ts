interface Env {
  DEVFORGE_KV?: {
    delete: (key: string) => Promise<void>;
  };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
  'Cache-Control': 'no-cache, no-store, must-revalidate',
};

const JSON_RESPONSE = (data: any, status = 200, extraHeaders: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Extract session token from cookie
    const cookieHeader = request.headers.get('Cookie') || '';
    const cookieMatch = cookieHeader.match(/df_session=([^;]+)/);
    if (cookieMatch && env && env.DEVFORGE_KV) {
      const token = cookieMatch[1];
      await env.DEVFORGE_KV.delete(`session:${token}`).catch(() => {});
    }

    // Clear HttpOnly cookie
    const clearCookieHeader = 'df_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0';

    return JSON_RESPONSE(
      { success: true, message: 'Logged out successfully' },
      200,
      { 'Set-Cookie': clearCookieHeader }
    );
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};
