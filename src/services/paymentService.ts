import { Track, GuidedProject } from '../types';
import { User } from '../types/auth';
import { AuthService } from './authService';
import confetti from 'canvas-confetti';

const PURCHASED_COURSES_STORAGE = 'devforge_purchased_courses_v1';
const PURCHASED_PROJECTS_STORAGE = 'devforge_purchased_projects_v1';

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

  /**
   * Open Razorpay Checkout Modal for ₹49 Certification Retake
   */
  static async openRetakeCheckout(options: {
    trackId: string;
    currentUser: User | null;
    onSuccess: (paymentId: string) => void;
    onError: (err: string) => void;
  }) {
    const { trackId, currentUser, onSuccess, onError } = options;

    if (typeof window === 'undefined') return;

    let razorpayKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID;

    if (!razorpayKey) {
      try {
        const configRes = await fetch('/api/payment/config');
        if (configRes.ok) {
          const configData = await configRes.json();
          if (configData.keyId) razorpayKey = configData.keyId;
        }
      } catch {}
    }

    if (!razorpayKey) {
      razorpayKey = 'rzp_live_U0kHC7jXJDBq6g';
    }

    if (!(window as any).Razorpay) {
      onError('Razorpay checkout SDK failed to load. Please refresh.');
      return;
    }

    const rzpOptions = {
      key: razorpayKey,
      amount: 4900, // ₹49
      currency: 'INR',
      name: 'DevForge Learning Studio',
      description: `${trackId.toUpperCase()} Certification Re-Exam Pass`,
      image: 'https://devforge-65f.pages.dev/favicon.ico',
      prefill: {
        name: currentUser?.fullName || '',
        email: currentUser?.email || '',
        contact: '',
      },
      notes: {
        trackId,
        type: 're_exam_retake',
        platform: 'DevForge Learning Studio',
      },
      theme: {
        color: '#4f46e5',
      },
      handler: async (response: any) => {
        const paymentId = response.razorpay_payment_id || `pay_retake_${Date.now()}`;
        onSuccess(paymentId);
      },
      modal: {
        ondismiss: function () {
          onError('Payment window closed.');
        },
      },
    };

    try {
      const rzp = new (window as any).Razorpay(rzpOptions);
      rzp.on('payment.failed', function (resp: any) {
        onError(resp?.error?.description || 'Payment was declined or cancelled.');
      });
      rzp.open();
    } catch (err: any) {
      onError(err?.message || 'Failed to initialize payment gateway.');
    }
  }

  static readonly ALL_PROJECTS_BUNDLE_PRICE_INR = 249;

  /**
   * Determine project price based on tier & config:
   * Tier 2/3 = ₹99, Tier 4 = ₹149
   */
  static getProjectPrice(project: GuidedProject): number {
    if (project.priceInr) return project.priceInr;
    return project.tier && project.tier >= 4 ? 149 : 99;
  }

  /**
   * Check if a project is purchased or unlocked for user
   */
  static isProjectPurchased(projectId: string, currentUser?: User | null): boolean {
    const user = currentUser !== undefined ? currentUser : AuthService.getCurrentUser();

    // SuperAdmins & Admins have full access
    if (user && AuthService.isAuthorizedAdmin(user)) {
      return true;
    }

    // Promotional Free Access (VIP Grant / Scholarship)
    if (user && user.hasPromoAccess === true) {
      return true;
    }

    // Check user's purchasedProjects list
    if (
      user &&
      Array.isArray(user.purchasedProjects) &&
      (user.purchasedProjects.includes(projectId) ||
        user.purchasedProjects.includes('all') ||
        user.purchasedProjects.includes('*'))
    ) {
      return true;
    }

    // Check local fallback storage
    try {
      const stored = JSON.parse(localStorage.getItem(PURCHASED_PROJECTS_STORAGE) || '[]');
      if (
        Array.isArray(stored) &&
        (stored.includes(projectId) || stored.includes('all') || stored.includes('*'))
      ) {
        return true;
      }
    } catch {}

    return false;
  }

  /**
   * Save purchased project to local cache
   */
  static recordLocalProjectPurchase(projectId: string) {
    try {
      const stored = JSON.parse(localStorage.getItem(PURCHASED_PROJECTS_STORAGE) || '[]');
      const updated = Array.from(new Set([...stored, projectId]));
      localStorage.setItem(PURCHASED_PROJECTS_STORAGE, JSON.stringify(updated));

      const user = AuthService.getCurrentUser();
      if (user) {
        user.purchasedProjects = Array.from(new Set([...(user.purchasedProjects || []), projectId]));
        localStorage.setItem('devforge_auth_session_v1', JSON.stringify(user));
      }
    } catch {}
  }

  /**
   * Open Razorpay Checkout for an individual guided project (₹99 or ₹149)
   */
  static async openProjectCheckout(options: {
    project: GuidedProject;
    currentUser: User | null;
    onSuccess: (paymentId: string) => void;
    onError: (err: string) => void;
  }) {
    const { project, currentUser, onSuccess, onError } = options;
    if (typeof window === 'undefined') return;

    const priceInr = this.getProjectPrice(project);
    const amountPaise = priceInr * 100;

    let razorpayKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      try {
        const configRes = await fetch('/api/payment/config');
        if (configRes.ok) {
          const configData = await configRes.json();
          if (configData.keyId) razorpayKey = configData.keyId;
        }
      } catch {}
    }
    if (!razorpayKey) {
      razorpayKey = 'rzp_live_U0kHC7jXJDBq6g';
    }

    if (!(window as any).Razorpay) {
      onError('Razorpay checkout SDK failed to load. Please refresh.');
      return;
    }

    const rzpOptions = {
      key: razorpayKey,
      amount: amountPaise,
      currency: 'INR',
      name: 'DevForge Learning Studio',
      description: `Guided Project: ${project.title}`,
      image: 'https://devforge-65f.pages.dev/favicon.ico',
      prefill: {
        name: currentUser?.fullName || '',
        email: currentUser?.email || '',
        contact: '',
      },
      notes: {
        projectId: project.id,
        projectSlug: project.slug,
        type: 'guided_project',
        priceInr: String(priceInr),
        platform: 'DevForge Learning Studio',
      },
      theme: {
        color: '#4f46e5',
      },
      handler: async (response: any) => {
        const paymentId = response.razorpay_payment_id || `pay_proj_${Date.now()}`;
        const orderId = response.razorpay_order_id || '';
        const signature = response.razorpay_signature || '';

        try {
          await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              projectId: project.id,
              paymentId,
              orderId,
              signature,
              email: currentUser?.email || '',
              amountInr: priceInr,
            }),
          });
        } catch (e) {
          console.warn('Backend payment verify notice:', e);
        }

        this.recordLocalProjectPurchase(project.id);
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch {}
        onSuccess(paymentId);
      },
      modal: {
        ondismiss: function () {
          onError('Payment window closed.');
        },
      },
    };

    try {
      const rzp = new (window as any).Razorpay(rzpOptions);
      rzp.on('payment.failed', function (resp: any) {
        onError(resp?.error?.description || 'Payment was declined or cancelled.');
      });
      rzp.open();
    } catch (err: any) {
      onError(err?.message || 'Failed to initialize payment gateway.');
    }
  }

  /**
   * Open Razorpay Checkout for the All-Projects Portfolio Pass (₹249 bundle)
   */
  static async openAllProjectsBundleCheckout(options: {
    currentUser: User | null;
    onSuccess: (paymentId: string) => void;
    onError: (err: string) => void;
  }) {
    const { currentUser, onSuccess, onError } = options;
    if (typeof window === 'undefined') return;

    const amountPaise = this.ALL_PROJECTS_BUNDLE_PRICE_INR * 100; // 24900

    let razorpayKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      try {
        const configRes = await fetch('/api/payment/config');
        if (configRes.ok) {
          const configData = await configRes.json();
          if (configData.keyId) razorpayKey = configData.keyId;
        }
      } catch {}
    }
    if (!razorpayKey) {
      razorpayKey = 'rzp_live_U0kHC7jXJDBq6g';
    }

    if (!(window as any).Razorpay) {
      onError('Razorpay checkout SDK failed to load. Please refresh.');
      return;
    }

    const rzpOptions = {
      key: razorpayKey,
      amount: amountPaise,
      currency: 'INR',
      name: 'DevForge Learning Studio',
      description: 'All-Projects Portfolio Pass (Full Bundle)',
      image: 'https://devforge-65f.pages.dev/favicon.ico',
      prefill: {
        name: currentUser?.fullName || '',
        email: currentUser?.email || '',
        contact: '',
      },
      notes: {
        type: 'all_projects_bundle',
        priceInr: '249',
        platform: 'DevForge Learning Studio',
      },
      theme: {
        color: '#4f46e5',
      },
      handler: async (response: any) => {
        const paymentId = response.razorpay_payment_id || `pay_bundle_${Date.now()}`;
        const orderId = response.razorpay_order_id || '';
        const signature = response.razorpay_signature || '';

        try {
          await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              projectId: 'all',
              paymentId,
              orderId,
              signature,
              email: currentUser?.email || '',
              amountInr: this.ALL_PROJECTS_BUNDLE_PRICE_INR,
            }),
          });
        } catch (e) {
          console.warn('Backend payment verify notice:', e);
        }

        this.recordLocalProjectPurchase('all');
        try {
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 },
          });
        } catch {}
        onSuccess(paymentId);
      },
      modal: {
        ondismiss: function () {
          onError('Payment window closed.');
        },
      },
    };

    try {
      const rzp = new (window as any).Razorpay(rzpOptions);
      rzp.on('payment.failed', function (resp: any) {
        onError(resp?.error?.description || 'Payment was declined or cancelled.');
      });
      rzp.open();
    } catch (err: any) {
      onError(err?.message || 'Failed to initialize payment gateway.');
    }
  }
}
