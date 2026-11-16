export interface StudentSubscription {
  id: string;
  type: 'course_pass' | 'retake_pass' | 'vip_grant';
  trackId: string; // 'python' | 'sql' | 'all'
  trackTitle: string;
  amountInr: number;
  paymentId?: string;
  orderId?: string;
  purchasedAt: string;
  status: 'active' | 'expired' | 'refunded';
  expiresAt?: string;
}

export interface StudentExamRecord {
  trackId: string;
  trackTitle: string;
  bestScore: number | null;
  bestGrade: string | null;
  attemptsCount: number;
  maxAttempts: number;
  cooldownEndsAt: string | null;
  isRetakePassActive: boolean;
  retakeExpiresAt?: string;
  history: Array<{
    attemptNumber: number;
    completedAt: string;
    scorePercent: number;
    grade: string;
    focusViolations: number;
    durationMinutes: number;
    integrityStatus: 'clean' | 'flagged';
  }>;
}

export interface StudentCertificateRecord {
  credentialId: string;
  trackId: string;
  trackTitle: string;
  recipientName: string;
  scorePercent: number;
  distinctionTier: 'Distinction' | 'Honors' | 'Standard';
  issuedAt: string;
  verificationUrl: string;
}

export interface LearnerRecord {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string;
  role: 'student' | 'admin';
  provider: 'google' | 'local' | 'admin';
  joinedAt: string;
  lastActiveAt: string;
  
  // Enrolled courses & subscriptions
  purchasedCourses: string[]; // e.g. ['python', 'sql']
  subscriptions: StudentSubscription[];
  hasPromoAccess: boolean;
  promoNote?: string;
  ltvInr: number; // Lifetime Value in INR

  // Gamification & Progress
  xp: number;
  streakDays: number;
  tierName: 'Foundations' | 'Practitioner' | 'Specialist' | 'Master';
  completedLessonsCount: Record<string, number>; // { python: 64, sql: 20 }
  totalLessonsCount: Record<string, number>; // { python: 150, sql: 160 }
  lastLessonVisited?: {
    trackId: string;
    lessonId: string;
    lessonTitle: string;
    visitedAt: string;
  };

  // Exam & Quiz Records
  examRecords: Record<string, StudentExamRecord>;

  // Credentials
  certificates: StudentCertificateRecord[];

  // Proctoring & Integrity Telemetry
  proctoringTelemetry: {
    totalViolations: number;
    speedrunAnomalies: number;
    integrityRating: 'Clean' | 'Warning' | 'High Risk';
  };
}
