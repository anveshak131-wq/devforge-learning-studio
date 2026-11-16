/**
 * Edge In-Memory Rate Limiting for Cloudflare Pages Functions
 *
 * Implements a zero-KV-cost, high-performance sliding window rate limiter at Cloudflare's Edge.
 * Intercepts abusive spam, script loops, and brute-force bots before any Cloudflare KV operations
 * or external APIs (Google, GitHub, Razorpay) are called.
 */

export interface RateLimitConfig {
  /** Unique namespace for the endpoint or action (e.g. 'cert_issue', 'leaderboard', 'auth') */
  keyPrefix: string;
  /** Maximum allowed requests within the time window */
  maxRequests: number;
  /** Duration of the sliding window in seconds */
  windowSeconds: number;
  /** Optional custom identifier (e.g. verified user ID or session token) instead of IP */
  customIdentifier?: string;
}

export interface RateLimitResult {
  /** Whether the request is allowed to proceed */
  allowed: boolean;
  /** Maximum allowed requests in the window */
  limit: number;
  /** Remaining allowed requests in the current window */
  remaining: number;
  /** Seconds until the rate limit window resets */
  resetSeconds: number;
  /** The identified IP or client key */
  identifier: string;
  /** Rate limit HTTP response headers */
  headers: Record<string, string>;
}

interface RateLimitRecord {
  timestamps: number[];
  expiresAt: number;
}

// In-memory sliding-window store held in warm Cloudflare isolate memory
const rateLimitStore = new Map<string, RateLimitRecord>();

// Maximum stored records before triggering garbage collection
const MAX_STORE_SIZE = 3000;

/**
 * Periodically prunes expired records to keep memory footprint under 200 KB
 */
function pruneStore(now: number) {
  if (rateLimitStore.size <= MAX_STORE_SIZE) return;

  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.expiresAt) {
      rateLimitStore.delete(key);
    }
  }

  // If still above threshold, evict the oldest 500 entries
  if (rateLimitStore.size > MAX_STORE_SIZE) {
    let evicted = 0;
    for (const key of rateLimitStore.keys()) {
      rateLimitStore.delete(key);
      evicted++;
      if (evicted >= 500) break;
    }
  }
}

/**
 * Safely extracts the client IP address from Cloudflare's trusted headers
 */
export function getClientIp(request: Request): string {
  // CF-Connecting-IP is provided and verified by Cloudflare Edge proxy
  const cfIp = request.headers.get('cf-connecting-ip');
  if (cfIp && cfIp.trim()) return cfIp.trim();

  // Fallbacks for local development / testing
  const xRealIp = request.headers.get('x-real-ip');
  if (xRealIp && xRealIp.trim()) return xRealIp.trim();

  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor && xForwardedFor.trim()) {
    return xForwardedFor.split(',')[0].trim();
  }

  return '127.0.0.1';
}

/**
 * Checks and records a request against the sliding window rate limit
 */
export function checkRateLimit(request: Request, config: RateLimitConfig): RateLimitResult {
  const now = Date.now();
  pruneStore(now);

  const identifier = config.customIdentifier?.trim() || getClientIp(request);
  const storageKey = `${config.keyPrefix}:${identifier}`;
  const windowMs = config.windowSeconds * 1000;

  let record = rateLimitStore.get(storageKey);
  if (!record) {
    record = { timestamps: [], expiresAt: now + windowMs };
  }

  // Filter out timestamps older than the sliding window
  const windowThreshold = now - windowMs;
  record.timestamps = record.timestamps.filter((ts) => ts > windowThreshold);

  // Check if limit exceeded
  if (record.timestamps.length >= config.maxRequests) {
    const oldestInWindow = record.timestamps[0];
    const resetSeconds = Math.max(1, Math.ceil((oldestInWindow + windowMs - now) / 1000));
    const resetEpoch = Math.floor(now / 1000) + resetSeconds;

    const headers: Record<string, string> = {
      'X-RateLimit-Limit': String(config.maxRequests),
      'X-RateLimit-Remaining': '0',
      'X-RateLimit-Reset': String(resetEpoch),
      'Retry-After': String(resetSeconds),
    };

    return {
      allowed: false,
      limit: config.maxRequests,
      remaining: 0,
      resetSeconds,
      identifier,
      headers,
    };
  }

  // Allow request and record current timestamp
  record.timestamps.push(now);
  record.expiresAt = now + windowMs;
  rateLimitStore.set(storageKey, record);

  const remaining = Math.max(0, config.maxRequests - record.timestamps.length);
  const resetEpoch = Math.floor((now + windowMs) / 1000);

  const headers: Record<string, string> = {
    'X-RateLimit-Limit': String(config.maxRequests),
    'X-RateLimit-Remaining': String(remaining),
    'X-RateLimit-Reset': String(resetEpoch),
  };

  return {
    allowed: true,
    limit: config.maxRequests,
    remaining,
    resetSeconds: config.windowSeconds,
    identifier,
    headers,
  };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
  'Cache-Control': 'no-cache, no-store, must-revalidate',
};

/**
 * Generates a standard HTTP 429 Too Many Requests response with appropriate headers
 */
export function createRateLimitResponse(
  result: RateLimitResult,
  customMessage?: string
): Response {
  return new Response(
    JSON.stringify({
      success: false,
      error:
        customMessage ||
        `Rate limit exceeded: too many requests. Please wait ${result.resetSeconds} second(s) before trying again.`,
      retryAfter: result.resetSeconds,
    }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        ...result.headers,
        ...CORS_HEADERS,
      },
    }
  );
}
