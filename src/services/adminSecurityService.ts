import { AdminSession, AdminAuditLog } from '../types/auth';

const ADMIN_SESSION_STORAGE = 'devforge_admin_session_v1';
const ADMIN_AUDIT_LOGS_STORAGE = 'devforge_admin_audit_logs_v1';

const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export class AdminSecurityService {
  /**
   * Check if an input is a common/decoy admin path that should be blocked with 404
   */
  static isDecoyAdminPath(input: string): boolean {
    const lower = input.trim().toLowerCase();
    const decoyList = ['admin', '#admin', '/admin', '?admin', 'wp-admin', 'administrator', 'backend', 'login/admin', 'cpanel'];
    return decoyList.some(d => lower.includes(d));
  }

  /**
   * Create & save active Google OAuth Admin session
   */
  static createGoogleAdminSession(adminEmail: string): AdminSession {
    const tokenBytes = new Uint8Array(24);
    crypto.getRandomValues(tokenBytes);
    const token = Array.from(tokenBytes).map(b => b.toString(16).padStart(2, '0')).join('');

    const session: AdminSession = {
      token: `adm_g_${token}`,
      adminEmail,
      authenticatedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + SESSION_DURATION_MS).toISOString(),
    };

    this.saveActiveSession(session);
    return session;
  }

  /**
   * Save active session
   */
  static saveActiveSession(session: AdminSession) {
    try {
      localStorage.setItem(ADMIN_SESSION_STORAGE, JSON.stringify(session));
      this.logAudit({
        adminEmail: session.adminEmail,
        action: 'admin_login',
        details: 'Verified Google SuperAdmin session established.'
      });
    } catch {}
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
        this.destroySession();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  }

  /**
   * Destroy active admin session (Sign Out / Exit Studio)
   */
  static destroySession() {
    try {
      const current = this.getActiveSession();
      if (current) {
        this.logAudit({
          adminEmail: current.adminEmail,
          action: 'admin_login',
          details: 'Admin session closed.'
        });
      }
      localStorage.removeItem(ADMIN_SESSION_STORAGE);
    } catch {}
  }

  /**
   * Extend active admin session upon user activity
   */
  static touchSession() {
    const session = this.getActiveSession();
    if (session) {
      session.expiresAt = new Date(Date.now() + SESSION_DURATION_MS).toISOString();
      try {
        localStorage.setItem(ADMIN_SESSION_STORAGE, JSON.stringify(session));
      } catch {}
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
    try {
      localStorage.removeItem(ADMIN_AUDIT_LOGS_STORAGE);
      this.logAudit({
        adminEmail,
        action: 'admin_login',
        details: 'Audit logs cleared by Super Administrator.'
      });
    } catch {}
  }
}
