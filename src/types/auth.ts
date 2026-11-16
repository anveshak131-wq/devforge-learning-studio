import { Language, TierLevel } from './index';

export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  earnedCertificateIds: string[];
  googleId?: string;
  githubId?: string;
  githubUsername?: string;
  purchasedCourses?: string[];
  purchasedProjects?: string[];
  provider?: 'google' | 'github' | 'local' | 'admin';
  hasPromoAccess?: boolean;
  promoNote?: string;
  activeRetakePass?: any;
  examStatus?: Record<string, any>;
  paymentReceipts?: PaymentReceipt[];
}

export interface PaymentReceipt {
  receiptNumber: string;
  paymentId: string;
  orderId?: string | null;
  userId?: string | null;
  userEmail: string;
  userName: string;
  itemType: 'course' | 'project' | 'bundle' | 'retake';
  itemId: string;
  itemTitle: string;
  amountInr: number;
  currency: 'INR';
  paymentMethod: string;
  timestamp: string;
  status: 'captured';
  verificationHash: string;
  issuer?: string;
}

export interface PromoGrant {
  email: string;
  grantedAt: string;
  grantedBy: string;
  note?: string;
}

export interface AdminSession {
  token: string;
  adminEmail: string;
  authenticatedAt: string;
  expiresAt: string;
}

export interface AdminAuditLog {
  id: string;
  timestamp: string;
  adminEmail: string;
  action: 
    | 'create_lesson'
    | 'update_lesson'
    | 'delete_lesson'
    | 'update_video'
    | 'update_slides'
    | 'update_media'
    | 'add_example'
    | 'reset_lesson'
    | 'reset_track'
    | 'admin_login'
    | 'failed_auth'
    | 'change_master_key';
  details: string;
  trackId?: string;
  lessonId?: string;
}

export interface Certificate {
  id: string;
  credentialId: string;
  userId: string;
  userName: string;
  trackId: string;
  trackTitle: string;
  language: Language;
  issuedAt: string;
  grade: 'Distinction' | 'High Honors' | 'Honors';
  skillsVerified: string[];
  verificationHash: string;
  examScore?: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
