import { Env, DEFAULT_SUPERADMIN_EMAILS } from '../../_auth';

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error || !code) {
    return Response.redirect(`${url.origin}/?auth_error=${encodeURIComponent(error || 'GitHub authentication was cancelled')}`, 302);
  }

  try {
    const clientId = env.GITHUB_CLIENT_ID || 'Ov23liN7J6dFz45xW10k';
    const clientSecret = env.GITHUB_CLIENT_SECRET || '';

    // 1. Exchange code for access token
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
      return Response.redirect(`${url.origin}/?auth_error=${encodeURIComponent(tokenData.error_description || 'Failed to exchange token')}`, 302);
    }

    // 2. Fetch User Profile
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
          const primaryEmail = emails.find((e) => e.primary && e.verified) || emails.find((e) => e.verified) || emails[0];
          if (primaryEmail) email = primaryEmail.email;
        }
      } catch {}
    }

    if (!email) {
      email = `${ghUser.login}@users.noreply.github.com`;
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(ghUser.name || ghUser.login || cleanEmail.split('@')[0]).trim();
    const avatarUrl = ghUser.avatar_url || `https://avatars.githubusercontent.com/u/${ghUser.id}?v=4`;

    const sessionToken = 'df_sess_' + crypto.randomUUID().replace(/-/g, '');

    // Persist to Cloudflare KV
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

    return new Response(null, {
      status: 302,
      headers: {
        Location: `${url.origin}/?auth_success=github`,
        'Set-Cookie': cookieFlags.join('; '),
      },
    });
  } catch (err: any) {
    return Response.redirect(`${url.origin}/?auth_error=${encodeURIComponent(err?.message || 'OAuth error')}`, 302);
  }
};
