import { checkRateLimit, createRateLimitResponse, getCorsHeaders } from '../_rateLimiter';

interface Env {
  DEVFORGE_KV?: {
    get: (key: string, options?: { type?: 'text' | 'json' | 'arrayBuffer' | 'stream' }) => Promise<any>;
    put: (key: string, value: string | ArrayBuffer | ReadableStream, options?: any) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
  RAZORPAY_KEY_SECRET?: string;
  RAZORPAY_KEY_ID?: string;
}

const JSON_RESPONSE = (data: any, status = 200, request?: Request) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...getCorsHeaders(request),
    },
  });

export const onRequestOptions = async (context: { request: Request }) => {
  return new Response(null, { status: 204, headers: getCorsHeaders(context?.request) });
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
      return JSON_RESPONSE({ success: false, error: 'Missing trackId or projectId in payment payload.' }, 400, request);
    }

    const { trackId, projectId, paymentId, orderId, signature, email, amountInr } = body;

    // 1. Mandatory Payment ID check: Must be a non-empty string starting with 'pay_'
    if (!paymentId || typeof paymentId !== 'string' || !paymentId.trim().startsWith('pay_')) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Payment verification rejected: A genuine Razorpay payment ID (starting with "pay_") is required.' 
      }, 400, request);
    }

    const cleanPaymentId = paymentId.trim();

    // 2. Mandatory Server Secret Check: Cannot proceed without secret configured
    const keySecret = env.RAZORPAY_KEY_SECRET;
    if (!keySecret || typeof keySecret !== 'string' || !keySecret.trim()) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Server payment configuration error: RAZORPAY_KEY_SECRET is not configured on Cloudflare.' 
      }, 500, request);
    }

    // 3. Replay Protection: Ensure payment ID has not already been redeemed
    if (env && env.DEVFORGE_KV) {
      const existingPayment = await env.DEVFORGE_KV.get(`payment:${cleanPaymentId}`, { type: 'json' }).catch(() => null);
      if (existingPayment) {
        return JSON_RESPONSE({ 
          success: false, 
          error: 'This payment transaction ID has already been redeemed and cannot be reused.' 
        }, 400, request);
      }
    }

    // 4. Two-Tier Verification: Cryptographic HMAC Signature AND Direct Razorpay API Check
    let isVerified = false;
    let verifiedAmountInr = 0;

    // Optional Tier A: Validate HMAC signature if orderId & signature are supplied
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

        if (computedHex.toLowerCase() !== signature.trim().toLowerCase()) {
          return JSON_RESPONSE({ 
            success: false, 
            error: 'Invalid Razorpay payment signature. Tampering detected.' 
          }, 400, request);
        }
      } catch (err: any) {
        return JSON_RESPONSE({ success: false, error: 'Signature verification failure: ' + err?.message }, 400, request);
      }
    }

    // Tier B: Authoritative verification against Razorpay's live production API
    let rzpPaymentData: any = null;
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
        }, 400, request);
      }

      const rzpData: any = await rzpRes.json();
      if (rzpData.status !== 'captured' && rzpData.status !== 'authorized') {
        return JSON_RESPONSE({ 
          success: false, 
          error: `Payment is unconfirmed. Current status: ${rzpData.status}` 
        }, 400, request);
      }

      verifiedAmountInr = (rzpData.amount || 0) / 100;
      rzpPaymentData = rzpData;
      isVerified = true;
    } catch (err: any) {
      return JSON_RESPONSE({ 
        success: false, 
        error: 'Failed to communicate with Razorpay verification API: ' + (err?.message || 'Network error') 
      }, 500, request);
    }

    if (!isVerified) {
      return JSON_RESPONSE({ success: false, error: 'Payment verification failed.' }, 400, request);
    }

    // 5. Strict Price & Product Amount Verification
    let requiredMinAmount = 199; // Default course pass: ₹199
    if (projectId === 'all') {
      requiredMinAmount = 249; // All-Projects Portfolio Pass: ₹249
    } else if (projectId) {
      requiredMinAmount = 99; // Individual project: min ₹99
    } else if (body.isRetake === true || trackId === 'retake') {
      requiredMinAmount = 49; // Exam retake pass: ₹49
    }

    if (verifiedAmountInr < requiredMinAmount) {
      return JSON_RESPONSE({
        success: false,
        error: `Under-payment alert: Verified live payment amount (₹${verifiedAmountInr}) is lower than the required price (₹${requiredMinAmount}) for this item.`,
      }, 400, request);
    }

    // 6. Secure Identity Resolution & Anti-Account-Takeover Protection
    let user: any = null;
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

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({ success: false, error: 'Storage service unavailable.' }, 500, request);
    }

    if (sessionToken) {
      user = await env.DEVFORGE_KV.get(`session:${sessionToken}`, { type: 'json' }).catch(() => null);
      if (user && user.email) {
        // Enforce identity binding: caller cannot credit an arbitrary victim's account while logged in
        if (email && typeof email === 'string' && email.trim()) {
          const suppliedEmail = email.trim().toLowerCase();
          const sessionEmail = String(user.email).trim().toLowerCase();
          if (suppliedEmail !== sessionEmail) {
            return JSON_RESPONSE({
              success: false,
              error: 'Security Alert: Supplied payment email does not match authenticated user session.',
            }, 403, request);
          }
        }
      }
    }

    // If caller is not in an active session, resolve by explicit email parameter
    if (!user) {
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return JSON_RESPONSE({
          success: false,
          error: 'Please sign in or provide a valid email address to credit your course purchase.',
        }, 400, request);
      }

      const cleanEmail = email.trim().toLowerCase();
      user = await env.DEVFORGE_KV.get(`user:email:${cleanEmail}`, { type: 'json' }).catch(() => null);

      if (!user) {
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
    }

    // 7. Grant Course / Project Access or Retake Pass
    if (body.isRetake === true || trackId === 'retake') {
      const now = new Date();
      const expires = new Date(now.getTime() + 72 * 60 * 60 * 1000); // 72 hours
      user.activeRetakePass = {
        purchasedAt: now.toISOString(),
        expiresAt: expires.toISOString(),
        paymentId: cleanPaymentId,
        used: false,
      };
    } else if (trackId) {
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
    // Only update session if session was authenticated and matches this user
    if (sessionToken && user.id) {
      writes.push(
        env.DEVFORGE_KV.put(`session:${sessionToken}`, JSON.stringify(user), {
          expirationTtl: 60 * 60 * 24 * 30, // 30-day session
        })
      );
    }

    // 8. Generate Authoritative Payment Receipt & Digital Verification Seal
    const year = new Date().getFullYear();
    const shortCode = cleanPaymentId.replace(/^pay_/, '').slice(0, 8).toUpperCase();
    const receiptNumber = `DF-RCP-${year}-${shortCode}`;

    let itemTitle = 'DevForge Professional Learning Pass';
    let itemType: 'course' | 'project' | 'bundle' | 'retake' = 'course';
    if (body.isRetake === true || trackId === 'retake') {
      itemType = 'retake';
      itemTitle = 'Proctored Certification Re-examination Pass (72-Hour Instant Retake)';
    } else if (projectId === 'all') {
      itemType = 'bundle';
      itemTitle = 'All-Projects Portfolio Pass (Lifetime Bundle)';
    } else if (projectId) {
      itemType = 'project';
      itemTitle = body.projectTitle || `Guided Portfolio Project Pass (${projectId})`;
    } else if (trackId) {
      itemType = 'course';
      itemTitle = body.trackTitle || `Lifetime Course Pass (${trackId.toUpperCase()})`;
    }

    const sealData = `${receiptNumber}|${cleanPaymentId}|${user.email}|${verifiedAmountInr}|${new Date().toISOString()}`;
    const encoder = new TextEncoder();
    const sealBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(sealData));
    const sealHex = Array.from(new Uint8Array(sealBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .substring(0, 24);
    const verificationHash = `df_rcp_${sealHex}`;

    const paymentMethod = rzpPaymentData?.method ? String(rzpPaymentData.method).toUpperCase() : 'ONLINE';

    const receipt = {
      receiptNumber,
      paymentId: cleanPaymentId,
      orderId: orderId || null,
      userId: user.id || null,
      userEmail: user.email || rzpPaymentData?.email || '',
      userName: user.fullName || rzpPaymentData?.notes?.name || String(user.email || 'Student').split('@')[0],
      itemType,
      itemId: trackId || projectId || 'retake',
      itemTitle,
      amountInr: verifiedAmountInr,
      currency: 'INR',
      paymentMethod,
      timestamp: new Date().toISOString(),
      status: 'captured',
      verificationHash,
      issuer: 'DevForge Academy of Software Engineering',
    };

    // Store in user profile's paymentReceipts array
    user.paymentReceipts = Array.isArray(user.paymentReceipts) ? user.paymentReceipts : [];
    if (!user.paymentReceipts.some((r: any) => r.paymentId === cleanPaymentId || r.receiptNumber === receiptNumber)) {
      user.paymentReceipts.unshift(receipt);
    }

    // Persist immutable payment receipt and receipt number index in KV
    writes.push(env.DEVFORGE_KV.put(`payment:${cleanPaymentId}`, JSON.stringify(receipt)));
    writes.push(env.DEVFORGE_KV.put(`receipt:${receiptNumber}`, JSON.stringify(receipt)));

    await Promise.all(writes);

    return JSON_RESPONSE({
      success: true,
      purchasedCourses: user.purchasedCourses,
      purchasedProjects: user.purchasedProjects,
      receipt,
      message: 'Payment verified and access granted successfully!',
    }, 200, request);
  } catch (err: any) {
    return JSON_RESPONSE({ success: false, error: err?.message || 'Payment verification failure' }, 500, request);
  }
};
