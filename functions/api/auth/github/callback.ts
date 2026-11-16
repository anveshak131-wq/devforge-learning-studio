import { Env, DEFAULT_SUPERADMIN_EMAILS } from '../../_auth';

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const returnedState = url.searchParams.get('state');
  const error = url.searchParams.get('error');

  if (error || !code) {
    return Response.redirect(
      `${url.origin}/?auth_error=${encodeURIComponent(error || 'GitHub authentication was cancelled')}`,
      302
    );
  }

  // 1. Strict CSRF Verification: Check returned state against ephemeral HttpOnly state cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const stateMatch = cookieHeader.match(/df_oauth_state=([^;]+)/);
  const expectedState = stateMatch ? stateMatch[1] : null;

  if (!expectedState || !returnedState || expectedState !== returnedState) {
    console.warn('OAuth CSRF state mismatch:', { expectedState, returnedState });
    return Response.redirect(
      `${url.origin}/?auth_error=${encodeURIComponent('Security verification failed: OAuth state mismatch or expired. Please try signing in again.')}`,
      302
    );
  }

  try {
    const clientId = env.GITHUB_CLIENT_ID || 'Ov23lioBtxwLMBx435Zp';
    const clientSecret = env.GITHUB_CLIENT_SECRET || '';

    // 2. Exchange code for access token with GitHub
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
      }),
    });

    const tokenData: any = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return Response.redirect(
        `${url.origin}/?auth_error=${encodeURIComponent(tokenData.error_description || 'Failed to exchange authorization token')}`,
        302
      );
    }

    // 3. Fetch User Profile
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'User-Agent': 'DevForge-Learning-Studio',
      },
    });

    const ghUser: any = await userRes.json();
    let email = ghUser.email;

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
          if (primaryEmail) email = primaryEmail.email;
        }
      } catch (e) {
        console.warn('Email fetch error:', e);
      }
    }

    if (!email) {
      email = `${ghUser.login}@users.noreply.github.com`;
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(ghUser.name || ghUser.login || cleanEmail.split('@')[0]).trim();
    const avatarUrl = ghUser.avatar_url || `https://avatars.githubusercontent.com/u/${ghUser.id}?v=4`;

    const sessionToken = 'df_sess_' + crypto.randomUUID().replace(/-/g, '');

    // 4. Persist to Cloudflare KV
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

        const user = {
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
            expirationTtl: 60 * 60 * 24 * 30,
          }),
        ]);
      } catch (e) {
        console.warn('KV callback warning:', e);
      }
    }

    const isProd = !request.url.includes('localhost');
    const sessionCookieFlags = [
      `df_session=${sessionToken}`,
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      `Max-Age=${60 * 60 * 24 * 30}`,
    ];
    if (isProd) {
      sessionCookieFlags.push('Secure');
    }

    // Clear the ephemeral state cookie now that verification succeeded
    const clearStateCookie =
      'df_oauth_state=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' + (isProd ? '; Secure' : '');

    const responseHeaders = new Headers();
    responseHeaders.set('Location', `${url.origin}/?auth_success=github`);
    responseHeaders.append('Set-Cookie', sessionCookieFlags.join('; '));
    responseHeaders.append('Set-Cookie', clearStateCookie);

    return new Response(null, {
      status: 302,
      headers: responseHeaders,
    });
  } catch (err: any) {
    return Response.redirect(`${url.origin}/?auth_error=${encodeURIComponent(err?.message || 'OAuth error')}`, 302);
  }
};
