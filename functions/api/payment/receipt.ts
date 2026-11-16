import { checkRateLimit, createRateLimitResponse, getCorsHeaders } from '../_rateLimiter';

interface Env {
  DEVFORGE_KV?: any;
  RAZORPAY_KEY_ID?: string;
  RAZORPAY_KEY_SECRET?: string;
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

/**
 * GET /api/payment/receipt?id=pay_... or ?number=DF-RCP-2026-...
 * Public verification & download endpoint for official DevForge payment receipts.
 */
export const onRequestGet = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;

    // Rate limiting: 60 receipt views per minute per IP
    const rateLimit = checkRateLimit(request, {
      keyPrefix: 'payment_receipt_get',
      maxRequests: 60,
      windowSeconds: 60,
    });
    if (!rateLimit.allowed) {
      return createRateLimitResponse(rateLimit, 'Rate limit exceeded: too many receipt requests.', request);
    }

    const url = new URL(request.url);
    const rawId = url.searchParams.get('id') || url.searchParams.get('number');

    if (!rawId || !rawId.trim()) {
      return JSON_RESPONSE({
        success: false,
        error: 'Receipt identifier parameter is required (e.g. ?id=pay_... or ?number=DF-RCP-2026-...).',
      }, 400, request);
    }

    const cleanId = rawId.trim();

    // Validate ID format (alphanumeric, underscores, hyphens, length 3-64)
    if (!/^[A-Za-z0-9_-]{3,64}$/.test(cleanId)) {
      return JSON_RESPONSE({
        success: false,
        error: 'Invalid receipt identifier format. Must match /^[A-Za-z0-9_-]{3,64}$/.',
      }, 400, request);
    }

    if (!env || !env.DEVFORGE_KV) {
      return JSON_RESPONSE({ success: false, error: 'Database service unavailable.' }, 500, request);
    }

    // 1. Look up in KV (by paymentId or receiptNumber)
    let receipt: any = await env.DEVFORGE_KV.get(`payment:${cleanId}`, { type: 'json' }).catch(() => null);
    if (!receipt) {
      receipt = await env.DEVFORGE_KV.get(`receipt:${cleanId.toUpperCase()}`, { type: 'json' }).catch(() => null);
    }
    if (!receipt && cleanId.startsWith('pay_')) {
      receipt = await env.DEVFORGE_KV.get(`receipt:${cleanId}`, { type: 'json' }).catch(() => null);
    }

    // 2. If found in KV, return it
    if (receipt) {
      return JSON_RESPONSE({
        success: true,
        receipt,
        verifiedAt: new Date().toISOString(),
        issuer: 'DevForge Academy of Software Engineering',
      }, 200, request);
    }

    // 3. If not found in KV but is a legitimate 'pay_' ID, verify against Razorpay live ledger
    if (cleanId.startsWith('pay_') && env.RAZORPAY_KEY_SECRET) {
      try {
        const keyId = env.RAZORPAY_KEY_ID || 'rzp_live_U0kHC7jXJDBq6g';
        const basicAuth = 'Basic ' + btoa(`${keyId}:${env.RAZORPAY_KEY_SECRET.trim()}`);
        const rzpRes = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(cleanId)}`, {
          headers: {
            Authorization: basicAuth,
            'User-Agent': 'DevForge-Receipt-Verifier/1.0',
          },
        });

        if (rzpRes.ok) {
          const rzpData: any = await rzpRes.json();
          if (rzpData.status === 'captured' || rzpData.status === 'authorized') {
            const year = new Date().getFullYear();
            const shortCode = cleanId.replace(/^pay_/, '').slice(0, 8).toUpperCase();
            const receiptNumber = `DF-RCP-${year}-${shortCode}`;

            const amountInr = (rzpData.amount || 0) / 100;
            const trackTitle = rzpData.notes?.trackTitle || rzpData.description || 'DevForge Curriculum Pass';

            const sealData = `${receiptNumber}|${cleanId}|${rzpData.email || ''}|${amountInr}|${rzpData.created_at || Date.now()}`;
            const encoder = new TextEncoder();
            const sealBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(sealData));
            const sealHex = Array.from(new Uint8Array(sealBuffer))
              .map(b => b.toString(16).padStart(2, '0'))
              .join('')
              .substring(0, 24);

            const liveReceipt = {
              receiptNumber,
              paymentId: cleanId,
              orderId: rzpData.order_id || null,
              userId: null,
              userEmail: rzpData.email || '',
              userName: rzpData.notes?.name || 'DevForge Student',
              itemType: rzpData.notes?.type || 'course',
              itemId: rzpData.notes?.trackId || 'course',
              itemTitle: trackTitle,
              amountInr,
              currency: 'INR',
              paymentMethod: rzpData.method ? String(rzpData.method).toUpperCase() : 'ONLINE',
              timestamp: new Date(rzpData.created_at ? rzpData.created_at * 1000 : Date.now()).toISOString(),
              status: 'captured',
              verificationHash: `df_rcp_${sealHex}`,
              issuer: 'DevForge Academy of Software Engineering',
            };

            // Cache in KV for future instant lookups
            await env.DEVFORGE_KV.put(`payment:${cleanId}`, JSON.stringify(liveReceipt)).catch(() => {});
            await env.DEVFORGE_KV.put(`receipt:${receiptNumber}`, JSON.stringify(liveReceipt)).catch(() => {});

            return JSON_RESPONSE({
              success: true,
              receipt: liveReceipt,
              verifiedAt: new Date().toISOString(),
              issuer: 'DevForge Academy of Software Engineering',
            }, 200, request);
          }
        }
      } catch {}
    }

    return JSON_RESPONSE({
      success: false,
      error: `Payment receipt for "${cleanId}" not found in DevForge verification registry.`,
    }, 404, request);
  } catch (err: any) {
    return JSON_RESPONSE({
      success: false,
      error: 'Receipt retrieval error: ' + (err?.message || 'Internal server error'),
    }, 500, context?.request);
  }
};
