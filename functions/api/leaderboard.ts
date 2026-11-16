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
 * Returns top global learners from Edge KV
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
 * Submits user XP update to Edge KV
 */
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;
    const body = (await request.json().catch(() => null)) as any;

    if (!body || !body.userId || body.xp === undefined) {
      return JSON_RESPONSE({ success: false, error: 'Missing userId or xp' }, 400);
    }

    if (env && env.DEVFORGE_KV) {
      const existingLeaders: any[] =
        (await env.DEVFORGE_KV.get('devforge_global_leaderboard_v1', { type: 'json' }).catch(() => [])) || [];

      const filtered = existingLeaders.filter((e) => e.userId !== body.userId);
      filtered.push({
        userId: body.userId,
        fullName: body.fullName || 'Developer',
        xp: body.xp,
        streakDays: body.streakDays || 1,
        tierName: body.tierName || 'Foundations',
        updatedAt: new Date().toISOString(),
      });

      // Sort descending by XP and keep top 100
      filtered.sort((a, b) => b.xp - a.xp);
      const top100 = filtered.slice(0, 100);

      await env.DEVFORGE_KV.put('devforge_global_leaderboard_v1', JSON.stringify(top100));
    }

    return JSON_RESPONSE({ success: true, message: 'Leaderboard updated' });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message }, 500);
  }
};
