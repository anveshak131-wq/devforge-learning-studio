import { checkRateLimit, createRateLimitResponse, getCorsHeaders } from '../_rateLimiter';

interface Env {
  RAZORPAY_KEY_ID?: string;
}

export const onRequestOptions = async (context: { request: Request }) => {
  return new Response(null, { status: 204, headers: getCorsHeaders(context?.request) });
};

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  // Rate limiting: max 60 config requests per minute per IP
  const rateLimit = checkRateLimit(request, {
    keyPrefix: 'payment_config_get',
    maxRequests: 60,
    windowSeconds: 60,
  });
  if (!rateLimit.allowed) {
    return createRateLimitResponse(rateLimit, 'Rate limit exceeded: too many payment config requests.', request);
  }

  const keyId = env?.RAZORPAY_KEY_ID || 'rzp_live_U0kHC7jXJDBq6g';

  return new Response(
    JSON.stringify({
      success: true,
      keyId,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...getCorsHeaders(request),
      },
    }
  );
};
