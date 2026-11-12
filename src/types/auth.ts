import { Language, TierLevel } from './index';

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  createdAt: string;
  earnedCertificateIds: string[];
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
