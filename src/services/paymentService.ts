import { Track } from '../types';
import { User } from '../types/auth';
import { AuthService } from './authService';
import confetti from 'canvas-confetti';

const PURCHASED_COURSES_STORAGE = 'devforge_purchased_courses_v1';

export class PaymentService {
  static readonly COURSE_PRICE_INR = 199;
  static readonly COURSE_PRICE_PAISE = 19900; // 199 * 100

  /**
   * Check if a course track is purchased or unlocked for user
   */
  static isCoursePurchased(trackId: string, currentUser?: User | null): boolean {
    const user = currentUser !== undefined ? currentUser : AuthService.getCurrentUser();
    
    // SuperAdmins & Admins have full access to all curriculum tracks
    if (user && AuthService.isAuthorizedAdmin(user)) {
      return true;
    }

    // Promotional Free Access (VIP Grant / Scholarship)
    if (user && user.hasPromoAccess === true) {
      return true;
    }

    // Check user's purchasedCourses list (synced from Cloudflare KV)
    if (user && Array.isArray(user.purchasedCourses) && (user.purchasedCourses.includes(trackId) || user.purchasedCourses.includes('all') || user.purchasedCourses.includes('*'))) {
      return true;
    }

    // Check local fallback storage (guest / offline cache)
    try {
      const stored = JSON.parse(localStorage.getItem(PURCHASED_COURSES_STORAGE) || '[]');
      if (Array.isArray(stored) && stored.includes(trackId)) {
        return true;
      }
    } catch {}

    return false;
  }

  /**
   * Save purchased course to local cache
   */
  static recordLocalPurchase(trackId: string) {
    try {
      const stored = JSON.parse(localStorage.getItem(PURCHASED_COURSES_STORAGE) || '[]');
      const updated = Array.from(new Set([...stored, trackId]));
      localStorage.setItem(PURCHASED_COURSES_STORAGE, JSON.stringify(updated));

      const user = AuthService.getCurrentUser();
      if (user) {
        user.purchasedCourses = Array.from(new Set([...(user.purchasedCourses || []), trackId]));
        localStorage.setItem('devforge_auth_session_v1', JSON.stringify(user));
      }
    } catch {}
  }

  /**
   * Open Razorpay Checkout Modal
   */
  static async openCheckout(options: {
    track: Track;
    currentUser: User | null;
    onSuccess: (paymentId: string) => void;
    onError: (err: string) => void;
  }) {
    const { track, currentUser, onSuccess, onError } = options;

    if (typeof window === 'undefined') return;

    let razorpayKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID;

    // Dynamically fetch Razorpay Key ID from Cloudflare Edge if not baked into client build
    if (!razorpayKey) {
      try {
        const configRes = await fetch('/api/payment/config');
        if (configRes.ok) {
          const configData = await configRes.json();
          if (configData.keyId) {
            razorpayKey = configData.keyId;
          }
        }
      } catch {}
    }

    if (!razorpayKey) {
      razorpayKey = 'rzp_live_U0kHC7jXJDBq6g';
    }

    if (!(window as any).Razorpay) {
      onError('Razorpay checkout SDK failed to load. Please refresh and check your internet connection.');
      return;
    }

    const rzpOptions = {
      key: razorpayKey,
      amount: this.COURSE_PRICE_PAISE,
      currency: 'INR',
      name: 'DevForge Learning Studio',
      description: `${track.title} — Lifetime Course Pass (150 Topics)`,
      image: 'https://devforge-65f.pages.dev/favicon.ico',
      prefill: {
        name: currentUser?.fullName || '',
        email: currentUser?.email || '',
        contact: '',
      },
      notes: {
        trackId: track.id,
        trackTitle: track.title,
        platform: 'DevForge Learning Studio',
      },
      theme: {
        color: '#4f46e5', // DevForge Indigo
      },
      modal: {
        ondismiss: function () {
          console.log('Razorpay checkout dismissed by learner');
        },
      },
      handler: async (response: any) => {
        try {
          const paymentId = response.razorpay_payment_id || `pay_sim_${Date.now()}`;
          const orderId = response.razorpay_order_id || '';
          const signature = response.razorpay_signature || '';

          // Call backend verification & record in Cloudflare Edge KV
          try {
            await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({
                trackId: track.id,
                paymentId,
                orderId,
                signature,
                email: currentUser?.email || '',
              }),
            });
          } catch (e) {
            console.warn('Backend payment verify notice:', e);
          }

          // Record purchase locally
          PaymentService.recordLocalPurchase(track.id);

          // Trigger confetti
          try {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 },
            });
          } catch {}

          onSuccess(paymentId);
        } catch (err: any) {
          onError(err?.message || 'Payment processing failed');
        }
      },
    };

    try {
      const rzp = new (window as any).Razorpay(rzpOptions);
      rzp.on('payment.failed', function (res: any) {
        onError(res?.error?.description || 'Payment was declined or cancelled.');
      });
      rzp.open();
    } catch (e: any) {
      onError(e?.message || 'Failed to initialize payment gateway.');
    }
  }
}
