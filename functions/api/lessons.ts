import { Env, verifyAdminSession } from './_auth';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
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

export const onRequestGet = async (context: { env: Env }) => {
  try {
    const { env } = context;
    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({
        success: false,
        error: 'DEVFORGE_KV binding is missing or unavailable.',
      }, 500);
    }

    const [customLessons, newLessons, deletedLessons] = await Promise.all([
      env.DEVFORGE_KV.get('devforge_custom_lessons_v1', { type: 'json' }).catch(() => null),
      env.DEVFORGE_KV.get('devforge_new_lessons_v1', { type: 'json' }).catch(() => null),
      env.DEVFORGE_KV.get('devforge_deleted_lessons_v1', { type: 'json' }).catch(() => null),
    ]);

    return JSON_RESPONSE({
      success: true,
      customLessons: customLessons || {},
      newLessons: newLessons || {},
      deletedLessons: deletedLessons || [],
      updatedAt: Date.now(),
    });
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: err?.message || 'Failed to fetch lessons from Cloudflare KV',
    }, 500);
  }
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Strict SuperAdmin Authentication Check
    const auth = await verifyAdminSession(request, env);
    if (!auth.authorized) {
      return JSON_RESPONSE({
        success: false,
        error: auth.error || 'Unauthorized: Valid SuperAdmin session required to alter curriculum data.',
      }, 401);
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({
        success: false,
        error: 'DEVFORGE_KV binding is missing or unavailable.',
      }, 500);
    }

    const body = await request.json().catch(() => null) as any;
    if (!body) {
      return JSON_RESPONSE({ success: false, error: 'Invalid JSON payload' }, 400);
    }

    // 1. Batch Sync mode (sync full admin state)
    if (body.sync === true || body.batch === true) {
      const existingCustom = (await env.DEVFORGE_KV.get('devforge_custom_lessons_v1', { type: 'json' }).catch(() => null)) || {};
      const existingNew = (await env.DEVFORGE_KV.get('devforge_new_lessons_v1', { type: 'json' }).catch(() => null)) || {};
      const existingDeleted = (await env.DEVFORGE_KV.get('devforge_deleted_lessons_v1', { type: 'json' }).catch(() => null)) || [];

      const mergedCustom = { ...existingCustom, ...(body.customLessons || {}) };
      const mergedNew = { ...existingNew, ...(body.newLessons || {}) };
      const mergedDeleted = Array.isArray(body.deletedLessons) ? body.deletedLessons : existingDeleted;

      await Promise.all([
        env.DEVFORGE_KV.put('devforge_custom_lessons_v1', JSON.stringify(mergedCustom)),
        env.DEVFORGE_KV.put('devforge_new_lessons_v1', JSON.stringify(mergedNew)),
        env.DEVFORGE_KV.put('devforge_deleted_lessons_v1', JSON.stringify(mergedDeleted)),
      ]);

      return JSON_RESPONSE({
        success: true,
        message: 'Successfully synchronized curriculum to Cloudflare KV',
        customCount: Object.keys(mergedCustom).length,
      });
    }

    // 2. Single Lesson Save mode
    if (body.lesson && body.lesson.id) {
      const lesson = body.lesson;
      const trackId = body.trackId || 'python';

      const [customLessons, newLessons] = await Promise.all([
        env.DEVFORGE_KV.get('devforge_custom_lessons_v1', { type: 'json' }).catch(() => null),
        env.DEVFORGE_KV.get('devforge_new_lessons_v1', { type: 'json' }).catch(() => null),
      ]);

      const currentCustom = customLessons || {};
      const currentNew = newLessons || {};

      if (currentNew[trackId]?.some((l: any) => l.id === lesson.id)) {
        currentNew[trackId] = currentNew[trackId].map((l: any) =>
          l.id === lesson.id ? lesson : l
        );
        await env.DEVFORGE_KV.put('devforge_new_lessons_v1', JSON.stringify(currentNew));
      } else {
        currentCustom[lesson.id] = lesson;
        await env.DEVFORGE_KV.put('devforge_custom_lessons_v1', JSON.stringify(currentCustom));
      }

      return JSON_RESPONSE({
        success: true,
        savedId: lesson.id,
        title: lesson.title,
      });
    }

    return JSON_RESPONSE({ success: false, error: 'Unrecognized payload structure' }, 400);
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: err?.message || 'Failed to save lesson to Cloudflare KV',
    }, 500);
  }
};

export const onRequestDelete = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Strict SuperAdmin Authentication Check
    const auth = await verifyAdminSession(request, env);
    if (!auth.authorized) {
      return JSON_RESPONSE({
        success: false,
        error: auth.error || 'Unauthorized: Valid SuperAdmin session required to delete curriculum data.',
      }, 401);
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({
        success: false,
        error: 'DEVFORGE_KV binding is missing or unavailable.',
      }, 500);
    }

    const url = new URL(request.url);
    const lessonId = url.searchParams.get('id');

    if (!lessonId) {
      return JSON_RESPONSE({ success: false, error: 'Missing lesson id' }, 400);
    }

    const [customLessons, deletedLessons] = await Promise.all([
      env.DEVFORGE_KV.get('devforge_custom_lessons_v1', { type: 'json' }).catch(() => null),
      env.DEVFORGE_KV.get('devforge_deleted_lessons_v1', { type: 'json' }).catch(() => null),
    ]);

    const currentCustom = customLessons || {};
    delete currentCustom[lessonId];

    const currentDeleted = deletedLessons || [];
    if (!currentDeleted.includes(lessonId)) {
      currentDeleted.push(lessonId);
    }

    await Promise.all([
      env.DEVFORGE_KV.put('devforge_custom_lessons_v1', JSON.stringify(currentCustom)),
      env.DEVFORGE_KV.put('devforge_deleted_lessons_v1', JSON.stringify(currentDeleted)),
    ]);

    return JSON_RESPONSE({ success: true, deletedId: lessonId });
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: err?.message || 'Failed to delete lesson from Cloudflare KV',
    }, 500);
  }
};
