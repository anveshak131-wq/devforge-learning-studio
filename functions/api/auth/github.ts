import { Env, DEFAULT_SUPERADMIN_EMAILS } from '../_auth';
import { checkRateLimit, createRateLimitResponse } from '../_rateLimiter';

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

/**
 * GET /api/auth/github
 * Generates authorization URL with a cryptographically secure random `state` nonce
 * and sets an ephemeral `df_oauth_state` HttpOnly cookie to prevent OAuth Login CSRF.
 */
export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  const clientId = env.GITHUB_CLIENT_ID || 'Ov23lioBtxwLMBx435Zp';

  // 1. Generate cryptographically secure random state (32 hex characters)
  const stateBytes = new Uint8Array(16);
  crypto.getRandomValues(stateBytes);
  const state = Array.from(stateBytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  const url = new URL(request.url);
  const redirectUri = `${url.origin}/api/auth/github/callback`;
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user,user:email&state=${state}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  // 2. Set ephemeral state cookie: HttpOnly; SameSite=Lax; Max-Age=600 (10 minutes)
  const isProd = !request.url.includes('localhost');
  const cookieFlags = [
    `df_oauth_state=${state}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=600',
  ];
  if (isProd) {
    cookieFlags.push('Secure');
  }

  return JSON_RESPONSE(
    {
      success: true,
      clientId,
      authUrl,
      state,
    },
    200,
    {
      'Set-Cookie': cookieFlags.join('; '),
    }
  );
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 15 GitHub token exchange attempts per 5 minutes per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'auth_github',
      maxRequests: 15,
      windowSeconds: 300,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(
        rateLimit,
        'Too many GitHub authentication attempts. Please wait a few minutes before trying again.'
      );
    }
    const body = (await request.json().catch(() => null)) as any;
    const { code, state: returnedState, redirectUri } = body || {};

    if (!code || typeof code !== 'string') {
      return JSON_RESPONSE({ success: false, error: 'Missing GitHub authorization code' }, 400);
    }

    // CSRF State validation if provided
    const cookieHeader = request.headers.get('Cookie') || '';
    const stateMatch = cookieHeader.match(/df_oauth_state=([^;]+)/);
    const expectedState = stateMatch ? stateMatch[1] : null;

    if (expectedState && returnedState && expectedState !== returnedState) {
      return JSON_RESPONSE({ success: false, error: 'OAuth state nonce mismatch. Possible CSRF attack detected.' }, 403);
    }

    const clientId = env.GITHUB_CLIENT_ID || 'Ov23lioBtxwLMBx435Zp';
    const clientSecret = env.GITHUB_CLIENT_SECRET || '';

    // 1. Exchange code for access token with GitHub
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'DevForge-Learning-Studio',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenRes.ok) {
      return JSON_RESPONSE({ success: false, error: 'Failed to communicate with GitHub token service' }, 400);
    }

    const tokenData: any = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return JSON_RESPONSE(
        {
          success: false,
          error: tokenData.error_description || tokenData.error || 'GitHub code exchange failed',
        },
        400
      );
    }

    // 2. Fetch User Profile from GitHub API
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'User-Agent': 'DevForge-Learning-Studio',
      },
    });

    if (!userRes.ok) {
      return JSON_RESPONSE({ success: false, error: 'Failed to retrieve GitHub profile' }, 400);
    }

    const ghUser: any = await userRes.json();
    let email = ghUser.email;

    // 3. If email is private, fetch from /user/emails
    if (!email) {
      try {
        const emailsRes = await fetch('https://api.github.com/user/emails', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
            'User-Agent': 'DevForge-Learning-Studio',
          },
        });
        if (emailsRes.ok) {
          const emails: any[] = await emailsRes.json();
          const primaryEmail =
            emails.find((e) => e.primary && e.verified) || emails.find((e) => e.verified) || emails[0];
          if (primaryEmail) {
            email = primaryEmail.email;
          }
        }
      } catch (err) {
        console.warn('Could not fetch secondary emails from GitHub:', err);
      }
    }

    if (!email) {
      email = `${ghUser.login}@users.noreply.github.com`;
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(ghUser.name || ghUser.login || cleanEmail.split('@')[0]).trim();
    const avatarUrl = ghUser.avatar_url || `https://avatars.githubusercontent.com/u/${ghUser.id}?v=4`;

    let user: any = null;
    let sessionToken = 'df_sess_' + crypto.randomUUID().replace(/-/g, '');

    // 4. Persist to Cloudflare KV if available
    if (env && env.DEVFORGE_KV) {
      try {
        const [byGithub, byEmail, customAdmins] = await Promise.all([
          env.DEVFORGE_KV.get(`user:github:${ghUser.id}`, { type: 'json' }).catch(() => null),
          env.DEVFORGE_KV.get(`user:email:${cleanEmail}`, { type: 'json' }).catch(() => null),
          env.DEVFORGE_KV.get('devforge_admin_whitelist_v1', { type: 'json' }).catch(() => []),
        ]);

        const existingUser = byGithub || byEmail;
        const envAdmins = env.ADMIN_EMAILS
          ? env.ADMIN_EMAILS.split(',').map((e: string) => e.trim().toLowerCase())
          : [];

        const isWhitelisted =
          DEFAULT_SUPERADMIN_EMAILS.includes(cleanEmail) ||
          envAdmins.includes(cleanEmail) ||
          (Array.isArray(customAdmins) &&
            customAdmins.map((e: string) => String(e).toLowerCase().trim()).includes(cleanEmail));

        const role = isWhitelisted ? 'admin' : (existingUser?.role || 'student');

        user = {
          id: existingUser?.id || `usr_gh_${ghUser.id}`,
          email: cleanEmail,
          fullName: cleanName,
          role,
          avatarUrl,
          createdAt: existingUser?.createdAt || new Date().toISOString(),
          earnedCertificateIds: Array.isArray(existingUser?.earnedCertificateIds)
            ? existingUser.earnedCertificateIds
            : [],
          githubId: String(ghUser.id),
          githubUsername: ghUser.login,
          purchasedCourses: Array.isArray(existingUser?.purchasedCourses)
            ? existingUser.purchasedCourses
            : [],
          purchasedProjects: Array.isArray(existingUser?.purchasedProjects)
            ? existingUser.purchasedProjects
            : [],
          provider: 'github',
          hasPromoAccess: existingUser?.hasPromoAccess === true,
        };

        await Promise.all([
          env.DEVFORGE_KV.put(`user:github:${ghUser.id}`, JSON.stringify(user)),
          env.DEVFORGE_KV.put(`user:email:${cleanEmail}`, JSON.stringify(user)),
          env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(user), {
            expirationTtl: 60 * 60 * 24 * 30, // 30-day session
          }),
        ]);
      } catch (err: any) {
        console.warn('KV persistence warning:', err);
      }
    }

    if (!user) {
      user = {
        id: `usr_gh_${ghUser.id}`,
        email: cleanEmail,
        fullName: cleanName,
        role: DEFAULT_SUPERADMIN_EMAILS.includes(cleanEmail) ? 'admin' : 'student',
        avatarUrl,
        createdAt: new Date().toISOString(),
        earnedCertificateIds: [],
        githubId: String(ghUser.id),
        githubUsername: ghUser.login,
        purchasedCourses: [],
        purchasedProjects: [],
        provider: 'github',
      };
    }

    const isProd = !request.url.includes('localhost');
    const cookieFlags = [
      `df_session=${sessionToken}`,
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      `Max-Age=${60 * 60 * 24 * 30}`,
    ];
    if (isProd) {
      cookieFlags.push('Secure');
    }

    return JSON_RESPONSE(
      {
        success: true,
        user,
      },
      200,
      {
        'Set-Cookie': cookieFlags.join('; '),
      }
    );
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message || 'GitHub OAuth failed' }, 500);
  }
};
