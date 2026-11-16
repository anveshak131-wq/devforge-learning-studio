import { checkRateLimit, createRateLimitResponse } from '../_rateLimiter';

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

    // Rate limiting: max 5 payment verification attempts per 10 minutes per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'payment_verify',
      maxRequests: 5,
      windowSeconds: 600,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(
        rateLimit,
        'Payment verification rate limit exceeded. Please wait a few minutes before trying again.'
      );
    }
    const body = (await request.json().catch(() => null)) as any;

    if (!body || (!body.trackId && !body.projectId)) {
      return JSON_RESPONSE({ success: false, error: 'Missing trackId or projectId in payment payload.' }, 400);
    }

    const { trackId, projectId, paymentId, orderId, signature, email, amountInr } = body;

    // 1. Mandatory Payment ID check: Must be a non-empty string starting with 'pay_'
    if (!paymentId || typeof paymentId !== 'string' || !paymentId.trim().startsWith('pay_')) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Payment verification rejected: A genuine Razorpay payment ID (starting with "pay_") is required.' 
      }, 400);
    }

    const cleanPaymentId = paymentId.trim();

    // 2. Mandatory Server Secret Check: Cannot proceed without secret configured
    const keySecret = env.RAZORPAY_KEY_SECRET;
    if (!keySecret || typeof keySecret !== 'string' || !keySecret.trim()) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Server payment configuration error: RAZORPAY_KEY_SECRET is not configured on Cloudflare.' 
      }, 500);
    }

    // 3. Replay Protection: Ensure payment ID has not already been redeemed
    if (env && env.DEVFORGE_KV) {
      const existingPayment = await env.DEVFORGE_KV.get(`payment:${cleanPaymentId}`, { type: 'json' }).catch(() => null);
      if (existingPayment) {
        return JSON_RESPONSE({ 
          success: false, 
          error: 'This payment transaction ID has already been redeemed and cannot be reused.' 
        }, 400);
      }
    }

    // 4. Two-Tier Verification: Cryptographic HMAC Signature OR Direct Razorpay API Check
    let isVerified = false;
    let verifiedAmountInr = amountInr || 0;

    // Tier A: If orderId & signature are present, compute HMAC SHA-256
    if (orderId && signature && typeof orderId === 'string' && typeof signature === 'string') {
      try {
        const encoder = new TextEncoder();
        const keyData = encoder.encode(keySecret.trim());
        const message = encoder.encode(`${orderId.trim()}|${cleanPaymentId}`);

        const cryptoKey = await crypto.subtle.importKey(
          'raw',
          keyData,
          { name: 'HMAC', hash: 'SHA-256' },
          false,
          ['sign']
        );

        const signatureBuffer = await crypto.subtle.sign('HMAC', cryptoKey, message);
        const computedHex = Array.from(new Uint8Array(signatureBuffer))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');

        if (computedHex.toLowerCase() === signature.trim().toLowerCase()) {
          isVerified = true;
        } else {
          return JSON_RESPONSE({ 
            success: false, 
            error: 'Invalid Razorpay payment signature. Tampering detected.' 
          }, 400);
        }
      } catch (err: any) {
        return JSON_RESPONSE({ success: false, error: 'Signature verification failure: ' + err?.message }, 400);
      }
    }

    // Tier B: If not verified via HMAC, verify directly against Razorpay's official API
    if (!isVerified) {
      try {
        const keyId = env.RAZORPAY_KEY_ID || 'rzp_live_U0kHC7jXJDBq6g';
        const basicAuth = 'Basic ' + btoa(`${keyId}:${keySecret.trim()}`);

        const rzpRes = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(cleanPaymentId)}`, {
          headers: {
            Authorization: basicAuth,
            'User-Agent': 'DevForge-Payment-Verifier/1.0',
          },
        });

        if (!rzpRes.ok) {
          const errData: any = await rzpRes.json().catch(() => null);
          return JSON_RESPONSE({ 
            success: false, 
            error: errData?.error?.description || 'Razorpay rejected payment ID verification.' 
          }, 400);
        }

        const rzpData: any = await rzpRes.json();
        if (rzpData.status !== 'captured' && rzpData.status !== 'authorized') {
          return JSON_RESPONSE({ 
            success: false, 
            error: `Payment is unconfirmed. Current status: ${rzpData.status}` 
          }, 400);
        }

        verifiedAmountInr = (rzpData.amount || 0) / 100;
        isVerified = true;
      } catch (err: any) {
        return JSON_RESPONSE({ 
          success: false, 
          error: 'Failed to communicate with Razorpay verification API: ' + (err?.message || 'Network error') 
        }, 500);
      }
    }

    if (!isVerified) {
      return JSON_RESPONSE({ success: false, error: 'Payment verification failed.' }, 400);
    }

    // 5. Resolve User from session cookie or email
    let user: any = null;
    let sessionToken: string | null = null;

    const cookieHeader = request.headers.get('Cookie') || '';
    const cookieMatch = cookieHeader.match(/df_session=([^;]+)/);
    if (cookieMatch) {
      sessionToken = cookieMatch[1];
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({ success: false, error: 'Storage service unavailable.' }, 500);
    }

    if (sessionToken) {
      user = await env.DEVFORGE_KV.get(`session:${sessionToken}`, { type: 'json' }).catch(() => null);
    }

    const cleanEmail = email ? String(email).trim().toLowerCase() : (user?.email || '');
    if (!user && cleanEmail) {
      user = await env.DEVFORGE_KV.get(`user:email:${cleanEmail}`, { type: 'json' }).catch(() => null);
    }

    // If user record doesn't exist yet, instantiate new student profile
    if (!user && cleanEmail) {
      user = {
        id: 'usr_' + Math.random().toString(36).substring(2, 10),
        email: cleanEmail,
        fullName: cleanEmail.split('@')[0],
        role: 'student',
        avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanEmail)}`,
        createdAt: new Date().toISOString(),
        earnedCertificateIds: [],
        purchasedCourses: [],
        purchasedProjects: [],
      };
    }

    if (!user) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Unable to link verified payment to a student account. Please ensure you are logged in.' 
      }, 400);
    }

    // 6. Grant Course / Project Access
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
    if (user.githubId) {
      writes.push(env.DEVFORGE_KV.put(`user:github:${user.githubId}`, JSON.stringify(user)));
    }
    if (sessionToken) {
      writes.push(
        env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(user), {
          expirationTtl: 60 * 60 * 24 * 30, // 30-day session
        })
      );
    }

    // Record immutable payment receipt in KV
    const paymentRecord = {
      paymentId: cleanPaymentId,
      orderId: orderId || '',
      trackId: trackId || '',
      projectId: projectId || '',
      userEmail: user.email,
      amountInr: verifiedAmountInr || 199,
      timestamp: new Date().toISOString(),
      status: 'captured',
    };
    writes.push(env.DEVFORGE_KV.put(`payment:${cleanPaymentId}`, JSON.stringify(paymentRecord)));

    await Promise.all(writes);

    return JSON_RESPONSE({
      success: true,
      purchasedCourses: user.purchasedCourses,
      purchasedProjects: user.purchasedProjects,
      message: 'Payment verified and access granted successfully!',
    });
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message || 'Payment verification failure' }, 500);
  }
};
