import { AdminSession, AdminAuditLog } from '../types/auth';

const ADMIN_MASTER_KEY_STORAGE = 'devforge_admin_master_key_v1';
const ADMIN_SESSION_STORAGE = 'devforge_admin_session_v1';
const ADMIN_FAILED_ATTEMPTS_STORAGE = 'devforge_admin_failed_attempts_v1';
const ADMIN_AUDIT_LOGS_STORAGE = 'devforge_admin_audit_logs_v1';

// Default Master Key (Can be changed by Admin in Security Settings)
const DEFAULT_MASTER_KEY = 'DEVFORGE_ADMIN_2026';

// Security constraints
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes
const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour

interface FailedAttemptRecord {
  attempts: number;
  lockoutUntil: number | null;
}

export class AdminSecurityService {
  /**
   * Get configured Master Key (or default)
   */
  static getMasterKey(): string {
    try {
      return localStorage.getItem(ADMIN_MASTER_KEY_STORAGE) || DEFAULT_MASTER_KEY;
    } catch {
      return DEFAULT_MASTER_KEY;
    }
  }

  /**
   * Update Master Key (with security audit)
   */
  static setMasterKey(oldKey: string, newKey: string, adminEmail: string): { success: boolean; error?: string } {
    if (oldKey !== this.getMasterKey()) {
      this.recordFailedAttempt();
      this.logAudit({
        adminEmail,
        action: 'failed_auth',
        details: 'Failed attempt to update Master Key (incorrect old key).'
      });
      return { success: false, error: 'Current Master Key is incorrect.' };
    }

    if (!newKey || newKey.length < 8) {
      return { success: false, error: 'New Master Key must be at least 8 characters long.' };
    }

    localStorage.setItem(ADMIN_MASTER_KEY_STORAGE, newKey);
    this.logAudit({
      adminEmail,
      action: 'change_master_key',
      details: 'Admin Master Key was successfully changed.'
    });

    return { success: true };
  }

  /**
   * Verify rate limit / lockout status
   */
  static getLockoutStatus(): { isLocked: boolean; remainingSeconds: number } {
    try {
      const data = localStorage.getItem(ADMIN_FAILED_ATTEMPTS_STORAGE);
      if (!data) return { isLocked: false, remainingSeconds: 0 };

      const record: FailedAttemptRecord = JSON.parse(data);
      if (record.lockoutUntil && Date.now() < record.lockoutUntil) {
        const remainingSeconds = Math.ceil((record.lockoutUntil - Date.now()) / 1000);
        return { isLocked: true, remainingSeconds };
      }

      // If lockout expired, reset
      if (record.lockoutUntil && Date.now() >= record.lockoutUntil) {
        localStorage.removeItem(ADMIN_FAILED_ATTEMPTS_STORAGE);
      }

      return { isLocked: false, remainingSeconds: 0 };
    } catch {
      return { isLocked: false, remainingSeconds: 0 };
    }
  }

  private static recordFailedAttempt(): number {
    try {
      const data = localStorage.getItem(ADMIN_FAILED_ATTEMPTS_STORAGE);
      let record: FailedAttemptRecord = data ? JSON.parse(data) : { attempts: 0, lockoutUntil: null };

      record.attempts += 1;
      if (record.attempts >= MAX_FAILED_ATTEMPTS) {
        record.lockoutUntil = Date.now() + LOCKOUT_DURATION_MS;
      }

      localStorage.setItem(ADMIN_FAILED_ATTEMPTS_STORAGE, JSON.stringify(record));
      return record.attempts;
    } catch {
      return 1;
    }
  }

  private static clearFailedAttempts() {
    localStorage.removeItem(ADMIN_FAILED_ATTEMPTS_STORAGE);
  }

  /**
   * Authenticate Admin using Master Key
   */
  static async verifyAdminKey(key: string, adminEmail: string): Promise<{ success: boolean; session?: AdminSession; error?: string }> {
    const lockout = this.getLockoutStatus();
    if (lockout.isLocked) {
      return {
        success: false,
        error: `Too many failed attempts. Admin portal is locked for security. Try again in ${lockout.remainingSeconds} seconds.`
      };
    }

    const expectedKey = this.getMasterKey();
    if (key.trim() !== expectedKey) {
      const count = this.recordFailedAttempt();
      this.logAudit({
        adminEmail: adminEmail || 'unknown_intruder',
        action: 'failed_auth',
        details: `Invalid Master Key entered (Attempt ${count}/${MAX_FAILED_ATTEMPTS}).`
      });

      const remaining = MAX_FAILED_ATTEMPTS - count;
      if (remaining <= 0) {
        return {
          success: false,
          error: `Account locked out for 15 minutes due to multiple failed security challenges.`
        };
      }
      return {
        success: false,
        error: `Invalid Admin Master Key. ${remaining} attempts remaining before system lockout.`
      };
    }

    // Success: Clear failed attempts and generate cryptographically signed session
    this.clearFailedAttempts();

    const tokenBytes = new Uint8Array(24);
    crypto.getRandomValues(tokenBytes);
    const token = Array.from(tokenBytes).map(b => b.toString(16).padStart(2, '0')).join('');

    const session: AdminSession = {
      token: `adm_sec_${token}`,
      adminEmail: adminEmail || 'admin@devforge.academy',
      authenticatedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + SESSION_DURATION_MS).toISOString()
    };

    localStorage.setItem(ADMIN_SESSION_STORAGE, JSON.stringify(session));

    this.logAudit({
      adminEmail: session.adminEmail,
      action: 'admin_login',
      details: 'Administrator successfully completed security challenge and acquired session token.'
    });

    return { success: true, session };
  }

  /**
   * Check if active admin session is valid & not expired
   */
  static getActiveSession(): AdminSession | null {
    try {
      const data = localStorage.getItem(ADMIN_SESSION_STORAGE);
      if (!data) return null;

      const session: AdminSession = JSON.parse(data);
      if (new Date(session.expiresAt).getTime() < Date.now()) {
        // Expired
        this.destroySession();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  }

  /**
   * Destroy active admin session (Manual Lock / Sign Out)
   */
  static destroySession() {
    const current = this.getActiveSession();
    if (current) {
      this.logAudit({
        adminEmail: current.adminEmail,
        action: 'admin_login',
        details: 'Admin session was safely terminated (locked).'
      });
    }
    localStorage.removeItem(ADMIN_SESSION_STORAGE);
  }

  /**
   * Extend active admin session upon user activity
   */
  static touchSession() {
    const session = this.getActiveSession();
    if (session) {
      session.expiresAt = new Date(Date.now() + SESSION_DURATION_MS).toISOString();
      localStorage.setItem(ADMIN_SESSION_STORAGE, JSON.stringify(session));
    }
  }

  /**
   * Security Audit Log methods
   */
  static logAudit(entry: Omit<AdminAuditLog, 'id' | 'timestamp'>) {
    try {
      const current = this.getAuditLogs();
      const newEntry: AdminAuditLog = {
        ...entry,
        id: 'aud_' + Math.random().toString(36).substring(2, 10),
        timestamp: new Date().toISOString()
      };
      // Keep last 200 logs
      const updated = [newEntry, ...current].slice(0, 200);
      localStorage.setItem(ADMIN_AUDIT_LOGS_STORAGE, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to write audit log', e);
    }
  }

  static getAuditLogs(): AdminAuditLog[] {
    try {
      const data = localStorage.getItem(ADMIN_AUDIT_LOGS_STORAGE);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static clearAuditLogs(adminEmail: string) {
    localStorage.removeItem(ADMIN_AUDIT_LOGS_STORAGE);
    this.logAudit({
      adminEmail,
      action: 'admin_login',
      details: 'Audit logs cleared by Super Administrator.'
    });
  }
}
