import { User, Certificate } from '../types/auth';
import { Language } from '../types';

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
  /**
   * Get all registered users from storage
   */
  private static getUsers(): Record<string, { user: User; passwordHash: string }> {
    try {
      const data = localStorage.getItem(USERS_KEY);
      return data ? JSON.parse(data) : {};
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
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  /**
   * Register a new user
   */
  static async register(email: string, password: string, fullName: string): Promise<{ success: boolean; user?: User; error?: string }> {
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

    const passwordHash = await hashPassword(password);
    const newUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 10),
      email: cleanEmail,
      fullName: cleanName,
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
   * Log out
   */
  static logout() {
    localStorage.removeItem(SESSION_KEY);
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
    skillsVerified: string[]
  ): Certificate {
    const currentUser = this.getCurrentUser();
    const userName = currentUser ? currentUser.fullName : 'Distinguished Graduate';
    const userId = currentUser ? currentUser.id : 'guest_' + Date.now();

    const credentialId = generateCredentialId(language);
    const newCert: Certificate = {
      id: 'cert_' + Math.random().toString(36).substring(2, 10),
      credentialId,
      userId,
      userName,
      trackId,
      trackTitle,
      language,
      issuedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      grade: 'Distinction',
      skillsVerified,
      verificationHash: 'v_hash_' + Math.random().toString(36).substring(2, 12)
    };

    // Save to certificates storage
    const allCerts = this.getAllCertificates();
    allCerts.push(newCert);
    localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(allCerts));

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
}
