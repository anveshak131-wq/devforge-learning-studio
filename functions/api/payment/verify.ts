interface Env {
  DEVFORGE_KV?: {
    get: (key: string, options?: { type?: 'text' | 'json' | 'arrayBuffer' | 'stream' }) => Promise<any>;
    put: (key: string, value: string | ArrayBuffer | ReadableStream, options?: any) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
  RAZORPAY_KEY_SECRET?: string;
  RAZORPAY_KEY_ID?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;
    const body = (await request.json().catch(() => null)) as any;

    if (!body || (!body.trackId && !body.projectId)) {
      return JSON_RESPONSE({ success: false, error: 'Missing trackId or projectId' }, 400);
    }

    const { trackId, projectId, paymentId, orderId, signature, email, amountInr } = body;

    // 1. Verify Razorpay Signature if secret is configured
    if (env.RAZORPAY_KEY_SECRET && orderId && signature) {
      const encoder = new TextEncoder();
      const keyData = encoder.encode(env.RAZORPAY_KEY_SECRET);
      const message = encoder.encode(`${orderId}|${paymentId}`);

      const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['verify']
      );

      // Convert hex signature to ArrayBuffer
      const signatureBytes = new Uint8Array(
        signature.match(/.{1,2}/g)?.map((byte: string) => parseInt(byte, 16)) || []
      );

      const isValid = await crypto.subtle.verify('HMAC', cryptoKey, signatureBytes, message);
      if (!isValid) {
        return JSON_RESPONSE({ success: false, error: 'Invalid Razorpay payment signature' }, 400);
      }
    }

    // 2. Resolve User from session cookie or email
    let user: any = null;
    let sessionToken: string | null = null;

    const cookieHeader = request.headers.get('Cookie') || '';
    const cookieMatch = cookieHeader.match(/df_session=([^;]+)/);
    if (cookieMatch) {
      sessionToken = cookieMatch[1];
    }

    if (env && env.DEVFORGE_KV) {
      if (sessionToken) {
        user = await env.DEVFORGE_KV.get(`session:${sessionToken}`, { type: 'json' }).catch(() => null);
      }

      if (!user && email) {
        const cleanEmail = String(email).trim().toLowerCase();
        user = await env.DEVFORGE_KV.get(`user:email:${cleanEmail}`, { type: 'json' }).catch(() => null);
      }

      // 3. Update User's Purchased Courses / Projects
      if (user) {
        if (trackId) {
          const currentCourses = Array.isArray(user.purchasedCourses) ? user.purchasedCourses : [];
          if (!currentCourses.includes(trackId)) {
            user.purchasedCourses = [...currentCourses, trackId];
          }
        }

        if (projectId) {
          const currentProjects = Array.isArray(user.purchasedProjects) ? user.purchasedProjects : [];
          if (projectId === 'all') {
            user.purchasedProjects = Array.from(new Set([...currentProjects, 'all', '*']));
          } else if (!currentProjects.includes(projectId)) {
            user.purchasedProjects = [...currentProjects, projectId];
          }
        }

        const writes: Promise<void>[] = [];
        if (user.email) {
          writes.push(env.DEVFORGE_KV.put(`user:email:${user.email}`, JSON.stringify(user)));
        }
        if (user.googleId) {
          writes.push(env.DEVFORGE_KV.put(`user:google:${user.googleId}`, JSON.stringify(user)));
        }
        if (sessionToken) {
          writes.push(
            env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(user), {
              expirationTtl: 60 * 60 * 24 * 30, // 30-day session
            })
          );
        }

        // Record payment log for financial audit / refund lookup
        const paymentRecord = {
          paymentId: paymentId || `pay_${Date.now()}`,
          orderId: orderId || '',
          trackId: trackId || '',
          projectId: projectId || '',
          userEmail: user.email,
          amountInr: amountInr || (projectId === 'all' ? 249 : projectId ? 99 : 199),
          timestamp: new Date().toISOString(),
          status: 'captured',
        };
        writes.push(env.DEVFORGE_KV.put(`payment:${paymentRecord.paymentId}`, JSON.stringify(paymentRecord)));

        await Promise.all(writes);

        return JSON_RESPONSE({
          success: true,
          purchasedCourses: user.purchasedCourses,
          purchasedProjects: user.purchasedProjects,
          message: 'Access granted successfully!',
        });
      }
    }

    return JSON_RESPONSE({
      success: true,
      purchasedCourses: trackId ? [trackId] : [],
      purchasedProjects: projectId ? [projectId] : [],
      message: 'Purchase acknowledged.',
    });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message || 'Verification failure' }, 500);
  }
};
