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
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
