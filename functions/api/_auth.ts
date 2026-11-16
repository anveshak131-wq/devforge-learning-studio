export interface Env {
  DEVFORGE_KV?: {
    get: (key: string, options?: { type?: 'text' | 'json' | 'arrayBuffer' | 'stream' }) => Promise<any>;
    put: (key: string, value: string | ArrayBuffer | ReadableStream, options?: any) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
  ADMIN_EMAILS?: string;
  GOOGLE_CLIENT_ID?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
}

export const DEFAULT_SUPERADMIN_EMAILS = [
  'support.privatetoolbox@gmail.com',
  'anveshkoganti54@gmail.com',
];

export async function verifyAdminSession(
  request: Request,
  env: Env
): Promise<{ authorized: boolean; user?: any; error?: string }> {
  if (!env || !env.DEVFORGE_KV) {
    return { authorized: false, error: 'Database service unavailable' };
  }

  // Extract session token from HttpOnly Cookie or Bearer header
  let token: string | null = null;
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(/df_session=([^;]+)/);
  if (match) {
    token = match[1];
  } else {
    const authHeader = request.headers.get('Authorization') || '';
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    }
  }

  if (!token) {
    return { authorized: false, error: 'Missing authentication credentials. SuperAdmin session required.' };
  }

  // Fetch active session from KV
  const user = await env.DEVFORGE_KV.get(`session:${token}`, { type: 'json' }).catch(() => null);
  if (!user || !user.email) {
    return { authorized: false, error: 'Session expired or invalid. Please sign in again with Google.' };
  }

  const cleanEmail = String(user.email).trim().toLowerCase();

  // Verify against whitelist
  const customAdmins = (await env.DEVFORGE_KV.get('devforge_admin_whitelist_v1', { type: 'json' }).catch(() => [])) || [];
  const envAdmins = env.ADMIN_EMAILS
    ? env.ADMIN_EMAILS.split(',').map((e: string) => e.trim().toLowerCase())
    : [];

  const isWhitelisted =
    DEFAULT_SUPERADMIN_EMAILS.includes(cleanEmail) ||
    envAdmins.includes(cleanEmail) ||
    (Array.isArray(customAdmins) &&
      customAdmins.map((e: string) => String(e).toLowerCase().trim()).includes(cleanEmail));

  if (user.role === 'admin' && isWhitelisted) {
    return { authorized: true, user };
  }

  return { authorized: false, user, error: 'Access denied: caller is not an authorized SuperAdmin.' };
}
