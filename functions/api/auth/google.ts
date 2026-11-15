interface Env {
  DEVFORGE_KV?: {
    get: (key: string, options?: { type?: 'text' | 'json' | 'arrayBuffer' | 'stream' }) => Promise<any>;
    put: (key: string, value: string | ArrayBuffer | ReadableStream, options?: any) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
  GOOGLE_CLIENT_ID?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
    let body: any = null;

    try {
      body = await request.json();
    } catch {
      return JSON_RESPONSE({ success: false, error: 'Invalid JSON request body' }, 400);
    }

    const { credential } = body || {};
    if (!credential || typeof credential !== 'string') {
      return JSON_RESPONSE({ success: false, error: 'Missing Google credential token' }, 400);
    }

    // Verify token with Google's official tokeninfo endpoint
    const googleVerifyRes = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`
    );

    if (!googleVerifyRes.ok) {
      const errText = await googleVerifyRes.text();
      return JSON_RESPONSE(
        { success: false, error: 'Google verification failed: ' + (errText || 'Invalid token') },
        401
      );
    }

    const googlePayload: any = await googleVerifyRes.json();
    const { sub, email, email_verified, name, picture, aud } = googlePayload;

    const EXPECTED_CLIENT_ID = '645430880987-cluo72d1jufag51hatsfaq5fo6q2pc0s.apps.googleusercontent.com';
    if (aud && aud !== EXPECTED_CLIENT_ID && env?.GOOGLE_CLIENT_ID && aud !== env.GOOGLE_CLIENT_ID) {
      return JSON_RESPONSE(
        { success: false, error: 'Google token audience mismatch' },
        401
      );
    }

    if (!email || (email_verified !== 'true' && email_verified !== true)) {
      return JSON_RESPONSE(
        { success: false, error: 'Google account email is not verified or unavailable.' },
        401
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(name || cleanEmail.split('@')[0]).trim();
    const avatarUrl = picture || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`;

    let user: any = null;
    let sessionToken = 'df_sess_' + crypto.randomUUID().replace(/-/g, '');

    // Persist to Cloudflare KV if available
    if (env && env.DEVFORGE_KV) {
      try {
        // Check existing user by google sub or email
        const [byGoogle, byEmail] = await Promise.all([
          env.DEVFORGE_KV.get(`user:google:${sub}`, { type: 'json' }).catch(() => null),
          env.DEVFORGE_KV.get(`user:email:${cleanEmail}`, { type: 'json' }).catch(() => null),
        ]);

        const existing = byGoogle || byEmail;

        if (existing) {
          user = {
            ...existing,
            googleId: sub,
            email: cleanEmail,
            fullName: cleanName || existing.fullName,
            avatarUrl: avatarUrl || existing.avatarUrl,
            purchasedCourses: existing.purchasedCourses || [],
            earnedCertificateIds: existing.earnedCertificateIds || [],
            role: existing.role || (cleanEmail.includes('admin@devforge') ? 'admin' : 'student'),
            provider: 'google',
            lastLoginAt: new Date().toISOString(),
          };
        } else {
          user = {
            id: 'usr_g_' + sub.slice(-8) + Math.random().toString(36).substring(2, 6),
            googleId: sub,
            email: cleanEmail,
            fullName: cleanName,
            role: cleanEmail.includes('admin@devforge') ? 'admin' : 'student',
            avatarUrl,
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            earnedCertificateIds: [],
            purchasedCourses: [],
            provider: 'google',
          };
        }

        // Save updated user record
        await Promise.all([
          env.DEVFORGE_KV.put(`user:google:${sub}`, JSON.stringify(user)),
          env.DEVFORGE_KV.put(`user:email:${cleanEmail}`, JSON.stringify(user)),
          env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(user), {
            expirationTtl: 60 * 60 * 24 * 30, // 30-day session
          }),
        ]);
      } catch (kvErr) {
        console.error('KV error during Google auth:', kvErr);
      }
    }

    // Fallback user object if KV is not configured
    if (!user) {
      user = {
        id: 'usr_g_' + sub.slice(-8),
        googleId: sub,
        email: cleanEmail,
        fullName: cleanName,
        role: cleanEmail.includes('admin@devforge') ? 'admin' : 'student',
        avatarUrl,
        createdAt: new Date().toISOString(),
        earnedCertificateIds: [],
        purchasedCourses: [],
        provider: 'google',
      };
    }

    // Set secure HttpOnly session cookie
    const cookieHeader = [
      `df_session=${sessionToken}`,
      'Path=/',
      'HttpOnly',
      'Secure',
      'SameSite=Lax',
      'Max-Age=2592000', // 30 days
    ].join('; ');

    return JSON_RESPONSE(
      {
        success: true,
        user,
        sessionToken,
      },
      200,
      { 'Set-Cookie': cookieHeader }
    );
  } catch (err: any) {
    return JSON_RESPONSE(
      {
        success: false,
        error: err?.message || 'Internal server error processing Google sign-in',
      },
      500
    );
  }
};
