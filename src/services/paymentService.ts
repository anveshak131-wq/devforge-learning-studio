import { Track, GuidedProject } from '../types';
import { User, PaymentReceipt } from '../types/auth';
import { AuthService } from './authService';
import confetti from 'canvas-confetti';

const PURCHASED_COURSES_STORAGE = 'devforge_purchased_courses_v1';
const PURCHASED_PROJECTS_STORAGE = 'devforge_purchased_projects_v1';
const PAYMENT_RECEIPTS_STORAGE = 'devforge_payment_receipts_v1';

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
   * Save official payment receipt to local persistent storage & user profile
   */
  static recordLocalReceipt(receipt: PaymentReceipt) {
    try {
      const stored: PaymentReceipt[] = JSON.parse(localStorage.getItem(PAYMENT_RECEIPTS_STORAGE) || '[]');
      const filtered = stored.filter(r => r.paymentId !== receipt.paymentId && r.receiptNumber !== receipt.receiptNumber);
      filtered.unshift(receipt);
      localStorage.setItem(PAYMENT_RECEIPTS_STORAGE, JSON.stringify(filtered));

      const user = AuthService.getCurrentUser();
      if (user) {
        user.paymentReceipts = Array.isArray(user.paymentReceipts) ? user.paymentReceipts : [];
        if (!user.paymentReceipts.some(r => r.paymentId === receipt.paymentId)) {
          user.paymentReceipts.unshift(receipt);
          localStorage.setItem('devforge_auth_session_v1', JSON.stringify(user));
        }
      }
    } catch {}
  }

  /**
   * Get all payment receipts for current user
   */
  static getLocalReceipts(): PaymentReceipt[] {
    try {
      const user = AuthService.getCurrentUser();
      const userReceipts = Array.isArray(user?.paymentReceipts) ? user!.paymentReceipts : [];
      const stored: PaymentReceipt[] = JSON.parse(localStorage.getItem(PAYMENT_RECEIPTS_STORAGE) || '[]');
      
      const mergedMap = new Map<string, PaymentReceipt>();
      [...userReceipts, ...stored].forEach(r => {
        if (r && r.paymentId) mergedMap.set(r.paymentId, r);
      });
      return Array.from(mergedMap.values()).sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    } catch {
      return [];
    }
  }

  /**
   * Open Razorpay Checkout Modal
   */
  static async openCheckout(options: {
    track: Track;
    currentUser: User | null;
    onSuccess: (paymentId: string, receipt?: PaymentReceipt) => void;
    onError: (err: string) => void;
  }) {
    const { track, currentUser, onSuccess, onError } = options;

    if (typeof window === 'undefined') return;

    if (!currentUser || !currentUser.email) {
      onError('Authentication required: Please sign in or create an account before unlocking this course.');
      return;
    }

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
          onError('Payment window closed.');
        },
      },
      handler: async (response: any) => {
        try {
          const paymentId = response.razorpay_payment_id;
          if (!paymentId || !String(paymentId).startsWith('pay_')) {
            onError('Invalid or unconfirmed payment ID from gateway.');
            return;
          }
          const orderId = response.razorpay_order_id || '';
          const signature = response.razorpay_signature || '';

          // Call backend verification & record in Cloudflare Edge KV
          const verifyRes = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              trackId: track.id,
              paymentId,
              orderId,
              signature,
              email: currentUser?.email || '',
              amountInr: (track as any).priceInr || this.COURSE_PRICE_INR,
            }),
          });

          const data = await verifyRes.json().catch(() => ({}));
          if (!verifyRes.ok || !data.success) {
            onError(data.error || 'Server rejected payment verification.');
            return;
          }

          // Record purchase locally only after authoritative backend confirmation
          PaymentService.recordLocalPurchase(track.id);

          const price = (track as any).priceInr || this.COURSE_PRICE_INR;
          const receipt: PaymentReceipt = data.receipt || {
            receiptNumber: `DF-RCP-${new Date().getFullYear()}-${paymentId.slice(-8).toUpperCase()}`,
            paymentId,
            orderId: orderId || null,
            userId: currentUser?.id || null,
            userEmail: currentUser?.email || '',
            userName: currentUser?.fullName || '',
            itemType: 'course',
            itemId: track.id,
            itemTitle: `${track.title} — Lifetime Course Pass`,
            amountInr: price,
            currency: 'INR',
            paymentMethod: 'ONLINE',
            timestamp: new Date().toISOString(),
            status: 'captured',
            verificationHash: `df_rcp_${paymentId.slice(-16)}`,
            issuer: 'DevForge Academy of Software Engineering',
          };

          // Record receipt locally
          PaymentService.recordLocalReceipt(receipt);

          // Trigger confetti
          try {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 },
            });
          } catch {}

          // Automatically broadcast receipt event so receipt modal displays
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('devforge:view_receipt', { detail: receipt }));
          }

          onSuccess(paymentId, receipt);
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
    onSuccess: (paymentId: string, receipt?: PaymentReceipt) => void;
    onError: (err: string) => void;
  }) {
    const { trackId, currentUser, onSuccess, onError } = options;

    if (typeof window === 'undefined') return;

    if (!currentUser || !currentUser.email) {
      onError('Authentication required: Please sign in before purchasing a re-examination pass.');
      return;
    }

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
        try {
          const paymentId = response.razorpay_payment_id;
          if (!paymentId || !String(paymentId).startsWith('pay_')) {
            onError('Invalid or unconfirmed payment ID from gateway.');
            return;
          }
          const orderId = response.razorpay_order_id || '';
          const signature = response.razorpay_signature || '';

          const verifyRes = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              trackId: 'retake',
              isRetake: true,
              paymentId,
              orderId,
              signature,
              email: currentUser?.email || '',
              amountInr: 49,
            }),
          });

          const data = await verifyRes.json().catch(() => ({}));
          if (!verifyRes.ok || !data.success) {
            onError(data.error || 'Server rejected retake pass payment verification.');
            return;
          }

          const receipt: PaymentReceipt = data.receipt || {
            receiptNumber: `DF-RCP-${new Date().getFullYear()}-${paymentId.slice(-8).toUpperCase()}`,
            paymentId,
            orderId: orderId || null,
            userId: currentUser?.id || null,
            userEmail: currentUser?.email || '',
            userName: currentUser?.fullName || '',
            itemType: 'retake',
            itemId: 'retake',
            itemTitle: 'Proctored Certification Re-examination Pass (72-Hour Instant Retake)',
            amountInr: 49,
            currency: 'INR',
            paymentMethod: 'ONLINE',
            timestamp: new Date().toISOString(),
            status: 'captured',
            verificationHash: `df_rcp_${paymentId.slice(-16)}`,
            issuer: 'DevForge Academy of Software Engineering',
          };

          PaymentService.recordLocalReceipt(receipt);

          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('devforge:view_receipt', { detail: receipt }));
          }

          onSuccess(paymentId, receipt);
        } catch (err: any) {
          onError(err?.message || 'Network error verifying re-exam payment.');
        }
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

    // Dedicated SuperAdmins (support.privatetoolbox@gmail.com & anveshkoganti54@gmail.com) have unconditional access to all projects
    if (user && AuthService.isSuperAdmin(user)) {
      return true;
    }

    // Admins have full access
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
    onSuccess: (paymentId: string, receipt?: PaymentReceipt) => void;
    onError: (err: string) => void;
  }) {
    const { project, currentUser, onSuccess, onError } = options;
    if (typeof window === 'undefined') return;

    if (!currentUser || !currentUser.email) {
      onError('Authentication required: Please sign in or create an account before unlocking this guided project.');
      return;
    }

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
        try {
          const paymentId = response.razorpay_payment_id;
          if (!paymentId || !String(paymentId).startsWith('pay_')) {
            onError('Invalid or unconfirmed payment ID from gateway.');
            return;
          }
          const orderId = response.razorpay_order_id || '';
          const signature = response.razorpay_signature || '';

          const verifyRes = await fetch('/api/payment/verify', {
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

          const data = await verifyRes.json().catch(() => ({}));
          if (!verifyRes.ok || !data.success) {
            onError(data.error || 'Server rejected project payment verification.');
            return;
          }

          this.recordLocalProjectPurchase(project.id);
          try {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 },
            });
          } catch {}
          const receipt: PaymentReceipt = data.receipt || {
            receiptNumber: `DF-RCP-${new Date().getFullYear()}-${paymentId.slice(-8).toUpperCase()}`,
            paymentId,
            orderId: orderId || null,
            userId: currentUser?.id || null,
            userEmail: currentUser?.email || '',
            userName: currentUser?.fullName || '',
            itemType: 'project',
            itemId: project.id,
            itemTitle: `Guided Portfolio Project Pass (${project.title})`,
            amountInr: priceInr,
            currency: 'INR',
            paymentMethod: 'ONLINE',
            timestamp: new Date().toISOString(),
            status: 'captured',
            verificationHash: `df_rcp_${paymentId.slice(-16)}`,
            issuer: 'DevForge Academy of Software Engineering',
          };

          PaymentService.recordLocalReceipt(receipt);

          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('devforge:view_receipt', { detail: receipt }));
          }

          onSuccess(paymentId, receipt);
        } catch (err: any) {
          onError(err?.message || 'Payment processing failed');
        }
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
    onSuccess: (paymentId: string, receipt?: PaymentReceipt) => void;
    onError: (err: string) => void;
  }) {
    const { currentUser, onSuccess, onError } = options;
    if (typeof window === 'undefined') return;

    if (!currentUser || !currentUser.email) {
      onError('Authentication required: Please sign in or create an account before unlocking the All-Projects Portfolio Pass.');
      return;
    }

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
        try {
          const paymentId = response.razorpay_payment_id;
          if (!paymentId || !String(paymentId).startsWith('pay_')) {
            onError('Invalid or unconfirmed payment ID from gateway.');
            return;
          }
          const orderId = response.razorpay_order_id || '';
          const signature = response.razorpay_signature || '';

          const verifyRes = await fetch('/api/payment/verify', {
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

          const data = await verifyRes.json().catch(() => ({}));
          if (!verifyRes.ok || !data.success) {
            onError(data.error || 'Server rejected bundle pass payment verification.');
            return;
          }

          this.recordLocalProjectPurchase('all');
          try {
            confetti({
              particleCount: 150,
              spread: 90,
              origin: { y: 0.6 },
            });
          } catch {}
          const receipt: PaymentReceipt = data.receipt || {
            receiptNumber: `DF-RCP-${new Date().getFullYear()}-${paymentId.slice(-8).toUpperCase()}`,
            paymentId,
            orderId: orderId || null,
            userId: currentUser?.id || null,
            userEmail: currentUser?.email || '',
            userName: currentUser?.fullName || '',
            itemType: 'bundle',
            itemId: 'all',
            itemTitle: 'All-Projects Portfolio Pass (Lifetime Bundle)',
            amountInr: this.ALL_PROJECTS_BUNDLE_PRICE_INR,
            currency: 'INR',
            paymentMethod: 'ONLINE',
            timestamp: new Date().toISOString(),
            status: 'captured',
            verificationHash: `df_rcp_${paymentId.slice(-16)}`,
            issuer: 'DevForge Academy of Software Engineering',
          };

          PaymentService.recordLocalReceipt(receipt);

          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('devforge:view_receipt', { detail: receipt }));
          }

          onSuccess(paymentId, receipt);
        } catch (err: any) {
          onError(err?.message || 'Payment processing failed');
        }
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
