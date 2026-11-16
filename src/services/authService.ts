import { User, Certificate, UserRole, PromoGrant } from '../types/auth';
import { Language } from '../types';
import { AdminSecurityService } from './adminSecurityService';

const USERS_KEY = 'devforge_auth_users_v1';
const SESSION_KEY = 'devforge_auth_session_v1';
const CERTIFICATES_KEY = 'devforge_certificates_v1';

// Helper for SHA-256 password hashing via Web Crypto API
async function hashPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password + '_devforge_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function generateCredentialId(language: string): string {
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  const year = new Date().getFullYear();
  return `DF-${language.substring(0, 2).toUpperCase()}-${year}-${randomPart}`;
}

export class AuthService {
  static readonly SUPERADMIN_EMAILS = [
    'support.privatetoolbox@gmail.com',
    'anveshkoganti54@gmail.com',
  ];

  static isSuperAdminEmail(email?: string | null): boolean {
    if (!email) return false;
    const clean = email.trim().toLowerCase();
    return this.SUPERADMIN_EMAILS.includes(clean);
  }

  static isAuthorizedAdmin(user?: User | null): boolean {
    const target = user !== undefined ? user : this.getCurrentUser();
    if (!target) return false;
    if (this.isSuperAdminEmail(target.email)) return true;
    return target.role === 'admin';
  }

  /**
   * Get all whitelisted admin emails (syncs with Cloudflare Edge KV)
   */
  static async getAdminWhitelist(): Promise<string[]> {
    try {
      const res = await fetch('/api/admin/whitelist', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.admins)) {
          return data.admins;
        }
      }
    } catch {}
    return [...this.SUPERADMIN_EMAILS];
  }

  /**
   * Add a new admin email (SuperAdmin self-service)
   */
  static async addAdminEmail(email: string): Promise<{ success: boolean; admins?: string[]; error?: string }> {
    try {
      const res = await fetch('/api/admin/whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, action: 'add' }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          return { success: true, admins: data.admins };
        }
        return { success: false, error: data.error };
      }
      const data = await res.json().catch(() => ({}));
      return { success: false, error: data.error || 'Failed to add admin' };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  /**
   * Remove an admin email
   */
  static async removeAdminEmail(email: string): Promise<{ success: boolean; admins?: string[]; error?: string }> {
    try {
      const res = await fetch('/api/admin/whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, action: 'remove' }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          return { success: true, admins: data.admins };
        }
        return { success: false, error: data.error };
      }
      const data = await res.json().catch(() => ({}));
      return { success: false, error: data.error || 'Failed to remove admin' };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  /**
   * Get all promotional free accounts (syncs with Cloudflare Edge KV)
   */
  static async getPromoUsers(): Promise<PromoGrant[]> {
    try {
      const res = await fetch('/api/admin/promos', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.promos)) {
          return data.promos;
        }
      }
    } catch {}
    return [];
  }

  /**
   * Grant promotional free access by email or batch emails
   */
  static async grantPromoAccess(
    rawEmails: string,
    note?: string
  ): Promise<{ success: boolean; promos?: PromoGrant[]; error?: string; message?: string }> {
    try {
      const res = await fetch('/api/admin/promos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ rawEmails, note, action: 'add' }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        return { success: true, promos: data.promos, message: data.message };
      }
      return { success: false, error: data.error || 'Failed to grant promotional access' };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  /**
   * Revoke promotional free access
   */
  static async revokePromoAccess(
    email: string
  ): Promise<{ success: boolean; promos?: PromoGrant[]; error?: string; message?: string }> {
    try {
      const res = await fetch('/api/admin/promos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, action: 'remove' }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        return { success: true, promos: data.promos, message: data.message };
      }
      return { success: false, error: data.error || 'Failed to revoke promotional access' };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  /**
   * Check if a user has promotional free lifetime access
   */
  static hasPromoAccess(user?: User | null): boolean {
    const u = user !== undefined ? user : this.getCurrentUser();
    if (!u) return false;
    return (
      u.hasPromoAccess === true ||
      (Array.isArray(u.purchasedCourses) && (u.purchasedCourses.includes('all') || u.purchasedCourses.includes('*')))
    );
  }

  /**
   * Get all registered users from storage
   */
  private static getUsers(): Record<string, { user: User; passwordHash: string }> {
    try {
      const data = localStorage.getItem(USERS_KEY);
      const parsed = data ? JSON.parse(data) : {};
      return parsed;
    } catch {
      return {};
    }
  }

  private static saveUsers(users: Record<string, { user: User; passwordHash: string }>) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to save users', e);
    }
  }

  /**
   * Get currently logged-in user
   */
  static getCurrentUser(): User | null {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      if (!data) return null;
      const user: User = JSON.parse(data);
      if (!user.role) user.role = this.isSuperAdminEmail(user.email) ? 'admin' : 'student';
      return user;
    } catch {
      return null;
    }
  }

  /**
   * Check if current user is admin
   */
  static isAdmin(user?: User | null): boolean {
    const target = user !== undefined ? user : this.getCurrentUser();
    return !!target && (target.role === 'admin' || this.isSuperAdminEmail(target.email));
  }

  /**
   * Check if an admin security session is active
   */
  static isAdminSessionActive(): boolean {
    const session = AdminSecurityService.getActiveSession();
    return !!session;
  }

  /**
   * Register a new user
   */
  static async register(
    email: string, 
    password: string, 
    fullName: string
  ): Promise<{ success: boolean; user?: User; error?: string }> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = fullName.trim();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }
    if (!password || password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }
    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Please enter your full name for your certificates.' };
    }

    const users = this.getUsers();
    if (users[cleanEmail]) {
      return { success: false, error: 'An account with this email already exists. Please log in.' };
    }

    const role: UserRole = this.isSuperAdminEmail(cleanEmail) ? 'admin' : 'student';

    const passwordHash = await hashPassword(password);
    const newUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 10),
      email: cleanEmail,
      fullName: cleanName,
      role,
      avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
      createdAt: new Date().toISOString(),
      earnedCertificateIds: []
    };

    users[cleanEmail] = { user: newUser, passwordHash };
    this.saveUsers(users);

    // Save active session
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    return { success: true, user: newUser };
  }

  /**
   * Log in existing user
   */
  static async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    const cleanEmail = email.trim().toLowerCase();
    const users = this.getUsers();
    const record = users[cleanEmail];

    if (!record) {
      return { success: false, error: 'No account found with this email. Please sign up.' };
    }

    const hash = await hashPassword(password);
    if (record.passwordHash !== hash) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify(record.user));
    return { success: true, user: record.user };
  }

  /**
   * Update role for a user (Super Admin action)
   */
  static setUserRole(email: string, role: UserRole): boolean {
    const users = this.getUsers();
    if (users[email]) {
      users[email].user.role = role;
      this.saveUsers(users);

      const current = this.getCurrentUser();
      if (current && current.email === email) {
        current.role = role;
        localStorage.setItem(SESSION_KEY, JSON.stringify(current));
      }
      return true;
    }
    return false;
  }

  /**
   * Get all registered users (for Admin User Management tab)
   */
  static getAllUsersList(): User[] {
    const users = this.getUsers();
    return Object.values(users).map(u => u.user);
  }

  /**
   * Parse a Google JWT credential client-side (safe fallback)
   */
  private static parseJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch {
      return null;
    }
  }

  /**
   * Log in or Register via Google OAuth ID token
   */
  static async loginWithGoogle(credential: string): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      // 1. Try serverless Cloudflare Pages endpoint first
      try {
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ credential }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.user) {
            const user: User = data.user;
            localStorage.setItem(SESSION_KEY, JSON.stringify(user));
            // Also sync in local users map
            const users = this.getUsers();
            users[user.email] = { user, passwordHash: 'google_oauth_managed' };
            this.saveUsers(users);
            return { success: true, user };
          }
        }
      } catch (networkErr) {
        console.warn('Backend /api/auth/google unreachable or in local dev preview, falling back to client JWT parser:', networkErr);
      }

      // 2. Client-side fallback if /api/auth/google is not available (e.g. pure local Vite preview)
      const payload = this.parseJwt(credential);
      if (!payload || !payload.email) {
        return { success: false, error: 'Could not decode Google token' };
      }

      const cleanEmail = payload.email.trim().toLowerCase();
      const cleanName = payload.name || cleanEmail.split('@')[0];
      const avatarUrl = payload.picture || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`;

      const users = this.getUsers();
      let user: User;
      const isSuperAdmin = this.isSuperAdminEmail(cleanEmail);

      if (users[cleanEmail]) {
        user = {
          ...users[cleanEmail].user,
          fullName: cleanName,
          avatarUrl,
          googleId: payload.sub,
          role: isSuperAdmin ? 'admin' : users[cleanEmail].user.role,
          provider: 'google',
        };
      } else {
        user = {
          id: 'usr_g_' + (payload.sub ? payload.sub.slice(-8) : Math.random().toString(36).substring(2, 8)),
          googleId: payload.sub,
          email: cleanEmail,
          fullName: cleanName,
          role: isSuperAdmin ? 'admin' : 'student',
          avatarUrl,
          createdAt: new Date().toISOString(),
          earnedCertificateIds: [],
          purchasedCourses: [],
          provider: 'google',
        };
      }

      users[cleanEmail] = { user, passwordHash: 'google_oauth_managed' };
      this.saveUsers(users);
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
      return { success: true, user };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Google sign-in failed' };
    }
  }

  /**
   * Sync active session with Cloudflare Edge on startup
   */
  static async syncServerSession(): Promise<User | null> {
    try {
      const res = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          localStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
          return data.user;
        } else {
          // If server indicates session is invalid/expired, purge local cache
          const local = this.getCurrentUser();
          if (local && (local.role === 'admin' || local.provider === 'google')) {
            localStorage.removeItem(SESSION_KEY);
            AdminSecurityService.destroySession();
            return null;
          }
        }
      }
    } catch {
      // Ignore network errors on local offline
    }
    return this.getCurrentUser();
  }

  /**
   * Log out
   */
  static logout() {
    localStorage.removeItem(SESSION_KEY);
    AdminSecurityService.destroySession();
    try {
      fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      }).catch(() => {});
    } catch {
      // Ignore network errors
    }
  }

  /**
   * Update User Profile (e.g. display name for certificate)
   */
  static updateProfile(fullName: string): User | null {
    const current = this.getCurrentUser();
    if (!current) return null;

    current.fullName = fullName.trim();
    localStorage.setItem(SESSION_KEY, JSON.stringify(current));

    const users = this.getUsers();
    if (users[current.email]) {
      users[current.email].user.fullName = current.fullName;
      this.saveUsers(users);
    }

    return current;
  }

  /**
   * Issue a Certificate for completing a track
   */
  static issueCertificate(
    trackId: string,
    trackTitle: string,
    language: Language,
    skillsVerified: string[],
    examScore?: number
  ): Certificate {
    const currentUser = this.getCurrentUser();
    const userName = currentUser ? currentUser.fullName : 'Distinguished Graduate';
    const userId = currentUser ? currentUser.id : 'guest_' + Date.now();

    const credentialId = generateCredentialId(language);
    const grade = (examScore !== undefined && examScore >= 90)
      ? 'Distinction'
      : (examScore !== undefined && examScore >= 80)
      ? 'High Honors'
      : 'Honors';

    const newCert: Certificate = {
      id: 'cert_' + Math.random().toString(36).substring(2, 10),
      credentialId,
      userId,
      userName,
      trackId,
      trackTitle,
      language,
      issuedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      grade,
      skillsVerified,
      verificationHash: 'v_hash_' + Math.random().toString(36).substring(2, 12),
      examScore
    };

    // Save to certificates storage
    const allCerts = this.getAllCertificates();
    allCerts.push(newCert);
    localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(allCerts));

    // Asynchronously push to Cloudflare KV for permanent public verification
    this.syncCertificateToCloud(newCert);

    // Link to user if logged in
    if (currentUser) {
      if (!currentUser.earnedCertificateIds.includes(newCert.id)) {
        currentUser.earnedCertificateIds.push(newCert.id);
        localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
        
        const users = this.getUsers();
        if (users[currentUser.email]) {
          users[currentUser.email].user.earnedCertificateIds.push(newCert.id);
          this.saveUsers(users);
        }
      }
    }

    return newCert;
  }

  /**
   * Get all certificates or certificates for current user
   */
  static getAllCertificates(): Certificate[] {
    try {
      const data = localStorage.getItem(CERTIFICATES_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static getUserCertificates(): Certificate[] {
    const user = this.getCurrentUser();
    const all = this.getAllCertificates();
    if (!user) return [];
    return all.filter(c => c.userId === user.id || user.earnedCertificateIds.includes(c.id));
  }

  /**
   * Update or stamp an exam score onto an existing certificate
   */
  static attachExamScoreToCertificate(trackId: string, examScore: number): Certificate | null {
    const all = this.getAllCertificates();
    const cleanTrack = trackId.toLowerCase();
    const index = all.findIndex(c => c.trackId.toLowerCase() === cleanTrack || c.trackTitle.toLowerCase().includes(cleanTrack));
    if (index === -1) return null;

    const cert = all[index];
    cert.examScore = examScore;
    cert.grade = examScore >= 90 ? 'Distinction' : examScore >= 80 ? 'High Honors' : 'Honors';

    all[index] = cert;
    localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(all));
    this.syncCertificateToCloud(cert);
    return cert;
  }

  /**
   * Get public verification URL for a given credential ID
   */
  static getPublicVerificationUrl(credentialId: string): string {
    const origin = typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://devforge-65f.pages.dev';
    return `${origin}/verify/${encodeURIComponent(credentialId.trim().toUpperCase())}`;
  }

  /**
   * Build 1-Click LinkedIn "Add Certification" Pre-fill URL
   */
  static buildLinkedInCertUrl(cert: Certificate): string {
    let issueYear = new Date().getFullYear();
    let issueMonth = new Date().getMonth() + 1;

    if (cert.issuedAt) {
      const parsed = new Date(cert.issuedAt);
      if (!isNaN(parsed.getTime())) {
        issueYear = parsed.getFullYear();
        issueMonth = parsed.getMonth() + 1;
      }
    }

    const certUrl = this.getPublicVerificationUrl(cert.credentialId);
    const certName = `${cert.trackTitle} - Professional Mastery`;
    const orgName = 'DevForge Learning Studio';

    const params = new URLSearchParams({
      startTask: 'CERTIFICATION_NAME',
      name: certName,
      organizationName: orgName,
      issueYear: String(issueYear),
      issueMonth: String(issueMonth),
      certId: cert.credentialId,
      certUrl: certUrl,
    });

    return `https://www.linkedin.com/profile/add?${params.toString()}`;
  }

  /**
   * Build 1-Click LinkedIn "Share to Feed" URL
   */
  static buildLinkedInShareUrl(cert: Certificate): string {
    const certUrl = this.getPublicVerificationUrl(cert.credentialId);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certUrl)}`;
  }

  /**
   * Synchronize an issued certificate to Cloudflare KV for public verification
   */
  static async syncCertificateToCloud(cert: Certificate): Promise<boolean> {
    try {
      const res = await fetch('/api/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificate: cert }),
      });
      return res.ok;
    } catch (err) {
      console.warn('Could not sync certificate to Cloudflare KV:', err);
      return false;
    }
  }

  /**
   * Synchronize all local certificates to Cloudflare KV
   */
  static async syncAllLocalCertificatesToCloud(): Promise<void> {
    const all = this.getAllCertificates();
    if (!all.length) return;
    for (const cert of all) {
      await this.syncCertificateToCloud(cert).catch(() => {});
    }
  }

  /**
   * Fetch and verify certificate from Cloudflare KV (with local cache fallback)
   */
  static async fetchCertificateFromCloud(credentialId: string): Promise<Certificate | null> {
    const cleanId = credentialId.trim();
    if (!cleanId) return null;

    // Check local storage first
    const local = this.getAllCertificates().find(
      c => c.credentialId.toUpperCase() === cleanId.toUpperCase() || c.id === cleanId
    );

    try {
      const res = await fetch(`/api/certificates?id=${encodeURIComponent(cleanId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.certificate) {
          return data.certificate;
        }
      }
    } catch (err) {
      console.warn('Network lookup for certificate failed, using local fallback:', err);
    }

    return local || null;
  }
}
