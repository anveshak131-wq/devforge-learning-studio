import { checkRateLimit, createRateLimitResponse } from './_rateLimiter';

interface Env {
  DEVFORGE_KV?: {
    get: (key: string, options?: { type?: 'text' | 'json' | 'arrayBuffer' | 'stream' }) => Promise<any>;
    put: (key: string, value: string | ArrayBuffer | ReadableStream, options?: any) => Promise<void>;
  };
}

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
 * GET /api/leaderboard
 * Public read-only: returns top global learners from Edge KV
 */
export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { env } = context;
    let leaders: any[] = [];

    if (env && env.DEVFORGE_KV) {
      leaders = (await env.DEVFORGE_KV.get('devforge_global_leaderboard_v1', { type: 'json' }).catch(() => [])) || [];
    }

    return JSON_RESPONSE({
      success: true,
      leaders,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};

/**
 * POST /api/leaderboard
 * Submits user XP update to Edge KV with strict authentication, identity binding, and sanity bounds
 */
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: max 15 leaderboard updates per 60 seconds per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'leaderboard_post',
      maxRequests: 15,
      windowSeconds: 60,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(
        rateLimit,
        'Leaderboard update rate limit exceeded. You can only update leaderboard rankings up to 15 times per minute.'
      );
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
        error: 'Authentication required. Please sign in to submit rankings to the global leaderboard.',
      }, 401);
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({ success: false, error: 'Database service unavailable.' }, 500);
    }

    const sessionUser = await env.DEVFORGE_KV.get(`session:${sessionToken}`, { type: 'json' }).catch(() => null);
    if (!sessionUser || !sessionUser.id) {
      return JSON_RESPONSE({
        success: false,
        error: 'Session invalid or expired. Please sign in again.',
      }, 401);
    }

    const body = (await request.json().catch(() => null)) as any;
    if (!body || body.xp === undefined) {
      return JSON_RESPONSE({ success: false, error: 'Missing xp value in request body.' }, 400);
    }

    // 2. Strict XP Validation & Bounds Check (Max platform XP is 25,000)
    const rawXp = Number(body.xp);
    if (isNaN(rawXp) || !Number.isFinite(rawXp) || rawXp < 0) {
      return JSON_RESPONSE({ success: false, error: 'Invalid XP value: must be a positive number.' }, 400);
    }

    if (rawXp > 25000) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Security alert: XP value exceeds maximum legitimate threshold (25,000 XP).' 
      }, 400);
    }

    const cleanXp = Math.floor(rawXp);

    // 3. Streak Days Validation
    let cleanStreak = Number(body.streakDays || 1);
    if (isNaN(cleanStreak) || cleanStreak < 1) cleanStreak = 1;
    if (cleanStreak > 365) cleanStreak = 365;

    // 4. Identity Binding: Identity is locked to the verified session
    const verifiedUserId = sessionUser.id;
    const verifiedName = String(sessionUser.fullName || sessionUser.email.split('@')[0])
      .replace(/[<>'"]/g, '') // Sanitize any HTML entities
      .trim()
      .substring(0, 50);

    const verifiedAvatar = sessionUser.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(verifiedName)}`;

    // Calculate tier from ground-truth XP
    let tierName = 'Foundations';
    if (cleanXp >= 2500) tierName = 'Master';
    else if (cleanXp >= 1500) tierName = 'Specialist';
    else if (cleanXp >= 500) tierName = 'Practitioner';

    // 5. Update Leaderboard in Cloudflare KV
    const existingLeaders: any[] =
      (await env.DEVFORGE_KV.get('devforge_global_leaderboard_v1', { type: 'json' }).catch(() => [])) || [];

    // Check if user already had a recorded entry
    const existingEntry = existingLeaders.find((e) => e.userId === verifiedUserId);

    // Anti-Griefing: Do not allow a lower XP to overwrite a higher previously recorded XP
    const finalXp = existingEntry ? Math.max(existingEntry.xp, cleanXp) : cleanXp;
    const finalStreak = existingEntry ? Math.max(existingEntry.streakDays, cleanStreak) : cleanStreak;

    const filtered = existingLeaders.filter((e) => e.userId !== verifiedUserId);
    filtered.push({
      userId: verifiedUserId,
      fullName: verifiedName,
      avatarUrl: verifiedAvatar,
      xp: finalXp,
      streakDays: finalStreak,
      tierName,
      updatedAt: new Date().toISOString(),
    });

    // Sort descending by XP and keep top 100
    filtered.sort((a, b) => b.xp - a.xp);
    const top100 = filtered.slice(0, 100);

    await env.DEVFORGE_KV.put('devforge_global_leaderboard_v1', JSON.stringify(top100));

    return JSON_RESPONSE({
      success: true,
      message: 'Leaderboard updated successfully.',
      currentRank: top100.findIndex(e => e.userId === verifiedUserId) + 1,
      xp: finalXp,
    });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message || 'Leaderboard update error' }, 500);
  }
};
