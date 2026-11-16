import { LearnerRecord, StudentSubscription, StudentExamRecord, StudentCertificateRecord } from '../types/crm';
import { AuthService } from './authService';
import { ExamEngine } from './examEngine';
import { ProgressStorage } from './progressStorage';

const CRM_STUDENTS_STORAGE_KEY = 'devforge_crm_learners_v1';

// Initial realistic learner cohort seed to ensure the CRM has rich data to inspect and manage
const SEED_LEARNERS: LearnerRecord[] = [
  {
    id: 'lrn_aarav_sharma',
    email: 'aarav.sharma@gmail.com',
    fullName: 'Aarav Sharma',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    role: 'student',
    provider: 'google',
    joinedAt: '2026-10-12T14:20:00Z',
    lastActiveAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    purchasedCourses: ['python', 'sql'],
    hasPromoAccess: false,
    ltvInr: 447, // 199 + 199 + 49
    subscriptions: [
      {
        id: 'sub_py_1',
        type: 'course_pass',
        trackId: 'python',
        trackTitle: 'Python: Beginner to Pro (150 Topics)',
        amountInr: 199,
        paymentId: 'pay_P199_py_aarav',
        purchasedAt: '2026-10-12T14:22:00Z',
        status: 'active',
      },
      {
        id: 'sub_sql_1',
        type: 'course_pass',
        trackId: 'sql',
        trackTitle: 'SQL: Beginner to Pro (160 Topics)',
        amountInr: 199,
        paymentId: 'pay_P199_sql_aarav',
        purchasedAt: '2026-10-28T09:15:00Z',
        status: 'active',
      },
      {
        id: 'sub_retake_1',
        type: 'retake_pass',
        trackId: 'python',
        trackTitle: 'Python Retake Exam Pass',
        amountInr: 49,
        paymentId: 'pay_P49_retake_aarav',
        purchasedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        status: 'active',
        expiresAt: new Date(Date.now() + 60 * 60 * 1000 * 60).toISOString(),
      },
    ],
    xp: 3450,
    streakDays: 14,
    tierName: 'Master',
    completedLessonsCount: { python: 148, sql: 112 },
    totalLessonsCount: { python: 150, sql: 160 },
    lastLessonVisited: {
      trackId: 'python',
      lessonId: 'py-148-enterprise-analytics',
      lessonTitle: '148. Enterprise Analytics & Intelligence Engine',
      visitedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    },
    examRecords: {
      python: {
        trackId: 'python',
        trackTitle: 'Python Certification Exam',
        bestScore: 95,
        bestGrade: 'Distinction (Gold Seal)',
        attemptsCount: 2,
        maxAttempts: 3,
        cooldownEndsAt: null,
        isRetakePassActive: true,
        history: [
          {
            attemptNumber: 1,
            completedAt: '2026-11-02T16:30:00Z',
            scorePercent: 70,
            grade: 'Honors (Silver Seal)',
            focusViolations: 0,
            durationMinutes: 21,
            integrityStatus: 'clean',
          },
          {
            attemptNumber: 2,
            completedAt: '2026-11-10T11:45:00Z',
            scorePercent: 95,
            grade: 'Distinction (Gold Seal)',
            focusViolations: 0,
            durationMinutes: 19,
            integrityStatus: 'clean',
          },
        ],
      },
      sql: {
        trackId: 'sql',
        trackTitle: 'SQL Certification Exam',
        bestScore: 85,
        bestGrade: 'Honors (Silver Seal)',
        attemptsCount: 1,
        maxAttempts: 3,
        cooldownEndsAt: null,
        isRetakePassActive: false,
        history: [
          {
            attemptNumber: 1,
            completedAt: '2026-11-12T18:10:00Z',
            scorePercent: 85,
            grade: 'Honors (Silver Seal)',
            focusViolations: 1,
            durationMinutes: 23,
            integrityStatus: 'clean',
          },
        ],
      },
    },
    certificates: [
      {
        credentialId: 'DF-PY-2026-A8K9',
        trackId: 'python',
        trackTitle: 'Python: Beginner to Pro',
        recipientName: 'Aarav Sharma',
        scorePercent: 95,
        distinctionTier: 'Distinction',
        issuedAt: '2026-11-10T11:46:00Z',
        verificationUrl: '/verify/DF-PY-2026-A8K9',
      },
      {
        credentialId: 'DF-SQL-2026-X4L1',
        trackId: 'sql',
        trackTitle: 'SQL: Beginner to Pro',
        recipientName: 'Aarav Sharma',
        scorePercent: 85,
        distinctionTier: 'Honors',
        issuedAt: '2026-11-12T18:11:00Z',
        verificationUrl: '/verify/DF-SQL-2026-X4L1',
      },
    ],
    proctoringTelemetry: {
      totalViolations: 1,
      speedrunAnomalies: 0,
      integrityRating: 'Clean',
    },
  },
  {
    id: 'lrn_priya_patel',
    email: 'priya.patel.tech@gmail.com',
    fullName: 'Priya Patel',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    role: 'student',
    provider: 'google',
    joinedAt: '2026-10-18T11:00:00Z',
    lastActiveAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    purchasedCourses: ['python'],
    hasPromoAccess: false,
    ltvInr: 199,
    subscriptions: [
      {
        id: 'sub_py_priya',
        type: 'course_pass',
        trackId: 'python',
        trackTitle: 'Python: Beginner to Pro (150 Topics)',
        amountInr: 199,
        paymentId: 'pay_P199_py_priya',
        purchasedAt: '2026-10-18T11:05:00Z',
        status: 'active',
      },
    ],
    xp: 2180,
    streakDays: 8,
    tierName: 'Practitioner',
    completedLessonsCount: { python: 84 },
    totalLessonsCount: { python: 150 },
    lastLessonVisited: {
      trackId: 'python',
      lessonId: 'py-84-dict-comprehension',
      lessonTitle: '84. Dictionary Comprehensions',
      visitedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    },
    examRecords: {
      python: {
        trackId: 'python',
        trackTitle: 'Python Certification Exam',
        bestScore: 65,
        bestGrade: 'Needs Retake',
        attemptsCount: 1,
        maxAttempts: 3,
        cooldownEndsAt: new Date(Date.now() + 3.5 * 60 * 60 * 1000).toISOString(), // Cooldown active!
        isRetakePassActive: false,
        history: [
          {
            attemptNumber: 1,
            completedAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
            scorePercent: 65,
            grade: 'Needs Retake',
            focusViolations: 0,
            durationMinutes: 24,
            integrityStatus: 'clean',
          },
        ],
      },
    },
    certificates: [],
    proctoringTelemetry: {
      totalViolations: 0,
      speedrunAnomalies: 0,
      integrityRating: 'Clean',
    },
  },
  {
    id: 'lrn_vikram_singh',
    email: 'vikram.singh99@outlook.com',
    fullName: 'Vikram Singh',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    role: 'student',
    provider: 'local',
    joinedAt: '2026-10-25T08:30:00Z',
    lastActiveAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(), // >7 days (At-Risk!)
    purchasedCourses: ['sql'],
    hasPromoAccess: false,
    ltvInr: 199,
    subscriptions: [
      {
        id: 'sub_sql_vikram',
        type: 'course_pass',
        trackId: 'sql',
        trackTitle: 'SQL: Beginner to Pro (160 Topics)',
        amountInr: 199,
        paymentId: 'pay_P199_sql_vikram',
        purchasedAt: '2026-10-25T08:35:00Z',
        status: 'active',
      },
    ],
    xp: 940,
    streakDays: 0,
    tierName: 'Foundations',
    completedLessonsCount: { sql: 38 },
    totalLessonsCount: { sql: 160 },
    lastLessonVisited: {
      trackId: 'sql',
      lessonId: 'sql-38-multi-column-sorting',
      lessonTitle: '38. Multi-Column Sorting',
      visitedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    },
    examRecords: {},
    certificates: [],
    proctoringTelemetry: {
      totalViolations: 0,
      speedrunAnomalies: 0,
      integrityRating: 'Clean',
    },
  },
  {
    id: 'lrn_ananya_reddy',
    email: 'ananya.reddy@stanford.edu',
    fullName: 'Ananya Reddy',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'student',
    provider: 'google',
    joinedAt: '2026-11-01T15:10:00Z',
    lastActiveAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    purchasedCourses: ['all'],
    hasPromoAccess: true,
    promoNote: 'Stanford Hackathon 1st Place Winner - Free Lifetime Access',
    ltvInr: 0, // VIP Scholarship
    subscriptions: [
      {
        id: 'sub_vip_ananya',
        type: 'vip_grant',
        trackId: 'all',
        trackTitle: 'All-Access VIP Lifetime Access (Scholarship)',
        amountInr: 0,
        purchasedAt: '2026-11-01T15:15:00Z',
        status: 'active',
      },
    ],
    xp: 4120,
    streakDays: 16,
    tierName: 'Master',
    completedLessonsCount: { python: 150, sql: 140 },
    totalLessonsCount: { python: 150, sql: 160 },
    lastLessonVisited: {
      trackId: 'sql',
      lessonId: 'sql-140-lead-lag-window',
      lessonTitle: '140. Inspecting Subsequent Rows with LEAD()',
      visitedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
    examRecords: {
      python: {
        trackId: 'python',
        trackTitle: 'Python Certification Exam',
        bestScore: 100,
        bestGrade: 'Distinction (Gold Seal)',
        attemptsCount: 1,
        maxAttempts: 3,
        cooldownEndsAt: null,
        isRetakePassActive: false,
        history: [
          {
            attemptNumber: 1,
            completedAt: '2026-11-08T14:20:00Z',
            scorePercent: 100,
            grade: 'Distinction (Gold Seal)',
            focusViolations: 0,
            durationMinutes: 16,
            integrityStatus: 'clean',
          },
        ],
      },
    },
    certificates: [
      {
        credentialId: 'DF-PY-2026-P001',
        trackId: 'python',
        trackTitle: 'Python: Beginner to Pro',
        recipientName: 'Ananya Reddy',
        scorePercent: 100,
        distinctionTier: 'Distinction',
        issuedAt: '2026-11-08T14:21:00Z',
        verificationUrl: '/verify/DF-PY-2026-P001',
      },
    ],
    proctoringTelemetry: {
      totalViolations: 0,
      speedrunAnomalies: 0,
      integrityRating: 'Clean',
    },
  },
  {
    id: 'lrn_rohan_deshmukh',
    email: 'rohan.deshmukh@gmail.com',
    fullName: 'Rohan Deshmukh',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    role: 'student',
    provider: 'google',
    joinedAt: '2026-10-30T10:00:00Z',
    lastActiveAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    purchasedCourses: ['python'],
    hasPromoAccess: false,
    ltvInr: 199,
    subscriptions: [
      {
        id: 'sub_py_rohan',
        type: 'course_pass',
        trackId: 'python',
        trackTitle: 'Python: Beginner to Pro (150 Topics)',
        amountInr: 199,
        paymentId: 'pay_P199_py_rohan',
        purchasedAt: '2026-10-30T10:05:00Z',
        status: 'active',
      },
    ],
    xp: 1540,
    streakDays: 4,
    tierName: 'Practitioner',
    completedLessonsCount: { python: 58 },
    totalLessonsCount: { python: 150 },
    lastLessonVisited: {
      trackId: 'python',
      lessonId: 'py-58-lambda-functions',
      lessonTitle: '58. Anonymous One-Liners with lambda',
      visitedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    examRecords: {
      python: {
        trackId: 'python',
        trackTitle: 'Python Certification Exam',
        bestScore: 50,
        bestGrade: 'Needs Retake',
        attemptsCount: 1,
        maxAttempts: 3,
        cooldownEndsAt: null,
        isRetakePassActive: false,
        history: [
          {
            attemptNumber: 1,
            completedAt: '2026-11-14T19:00:00Z',
            scorePercent: 50,
            grade: 'Needs Retake',
            focusViolations: 4, // Proctor violation!
            durationMinutes: 4, // Very fast!
            integrityStatus: 'flagged',
          },
        ],
      },
    },
    certificates: [],
    proctoringTelemetry: {
      totalViolations: 4,
      speedrunAnomalies: 1,
      integrityRating: 'Warning',
    },
  },
];

export class StudentCRMService {
  /**
   * Get all learners (merges real authenticated users + cohort records)
   */
  static getLearners(): LearnerRecord[] {
    try {
      let stored: LearnerRecord[] = [];
      const raw = localStorage.getItem(CRM_STUDENTS_STORAGE_KEY);
      if (raw) {
        stored = JSON.parse(raw);
      } else {
        stored = [...SEED_LEARNERS];
        this.saveLearners(stored);
      }

      // Check current logged-in user in session
      const currentUser = AuthService.getCurrentUser();
      if (currentUser && currentUser.role === 'student') {
        const stats = ProgressStorage.getStats();
        const examStatuses = ExamEngine.getAllStatuses();

        const existsIdx = stored.findIndex((l) => l.email.toLowerCase() === currentUser.email.toLowerCase());
        const myRecord: LearnerRecord = {
          id: currentUser.id || `lrn_${currentUser.email.replace(/[^a-z0-9]/gi, '_')}`,
          email: currentUser.email,
          fullName: currentUser.fullName || currentUser.email.split('@')[0],
          avatarUrl: currentUser.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(currentUser.fullName)}`,
          role: 'student',
          provider: currentUser.provider || (currentUser.googleId ? 'google' : 'local'),
          joinedAt: currentUser.createdAt || new Date().toISOString(),
          lastActiveAt: new Date().toISOString(),
          purchasedCourses: currentUser.purchasedCourses || ['python'],
          hasPromoAccess: currentUser.hasPromoAccess || false,
          promoNote: currentUser.promoNote,
          ltvInr: currentUser.hasPromoAccess ? 0 : (currentUser.purchasedCourses?.length || 1) * 199,
          subscriptions: (currentUser.purchasedCourses || ['python']).map((t) => ({
            id: `sub_${t}_${currentUser.id}`,
            type: 'course_pass',
            trackId: t,
            trackTitle: t === 'python' ? 'Python: Beginner to Pro (150 Topics)' : 'SQL: Beginner to Pro (160 Topics)',
            amountInr: 199,
            purchasedAt: currentUser.createdAt || new Date().toISOString(),
            status: 'active',
          })),
          xp: stats.xp || 320,
          streakDays: stats.streakDays || 1,
          tierName: stats.xp > 3000 ? 'Master' : stats.xp > 1500 ? 'Practitioner' : 'Foundations',
          completedLessonsCount: {
            python: stats.completedLessonIds.filter((id) => id.startsWith('py-')).length || 12,
            sql: stats.completedLessonIds.filter((id) => id.startsWith('sql-')).length || 0,
          },
          totalLessonsCount: { python: 150, sql: 160 },
          examRecords: Object.entries(examStatuses).reduce((acc, [k, v]) => {
            acc[k] = {
              trackId: k,
              trackTitle: `${k.toUpperCase()} Certification Exam`,
              bestScore: v.bestScore,
              bestGrade: v.bestGrade,
              attemptsCount: v.attemptsCount,
              maxAttempts: v.maxAttempts,
              cooldownEndsAt: v.cooldownEndsAt,
              isRetakePassActive: Boolean(v.activeRetakePass && !v.activeRetakePass.used),
              history: v.history.map((h) => ({
                attemptNumber: h.attemptNumber,
                completedAt: h.completedAt || new Date().toISOString(),
                scorePercent: h.scorePercent,
                grade: h.grade,
                focusViolations: h.focusViolations,
                durationMinutes: 20,
                integrityStatus: h.integrityStatus,
              })),
            };
            return acc;
          }, {} as Record<string, StudentExamRecord>),
          certificates: [],
          proctoringTelemetry: {
            totalViolations: 0,
            speedrunAnomalies: 0,
            integrityRating: 'Clean',
          },
        };

        if (existsIdx >= 0) {
          stored[existsIdx] = { ...stored[existsIdx], ...myRecord };
        } else {
          stored.unshift(myRecord);
        }
        this.saveLearners(stored);
      }

      return stored;
    } catch {
      return [...SEED_LEARNERS];
    }
  }

  static saveLearners(learners: LearnerRecord[]) {
    try {
      localStorage.setItem(CRM_STUDENTS_STORAGE_KEY, JSON.stringify(learners));
    } catch (err) {
      console.warn('Could not persist CRM learners', err);
    }
  }

  /**
   * Grant an emergency re-attempt voucher to a student
   * (Resets cooldown, adds voucher, clears exam locks WITHOUT touching historical scores)
   */
  static grantEmergencyVoucher(studentEmail: string, trackId: string): boolean {
    const learners = this.getLearners();
    const idx = learners.findIndex((l) => l.email.toLowerCase() === studentEmail.toLowerCase());
    if (idx === -1) return false;

    const student = learners[idx];
    const examRec = student.examRecords[trackId] || {
      trackId,
      trackTitle: `${trackId.toUpperCase()} Certification Exam`,
      bestScore: null,
      bestGrade: null,
      attemptsCount: 0,
      maxAttempts: 3,
      cooldownEndsAt: null,
      isRetakePassActive: true,
      history: [],
    };

    // Reset cooldown and grant pass
    examRec.cooldownEndsAt = null;
    examRec.attemptsCount = Math.max(0, examRec.attemptsCount - 1);
    examRec.isRetakePassActive = true;
    examRec.retakeExpiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString();

    student.examRecords[trackId] = examRec;

    // Add subscription entry
    student.subscriptions.unshift({
      id: `sub_retake_admin_${Date.now()}`,
      type: 'retake_pass',
      trackId,
      trackTitle: `${trackId.toUpperCase()} Emergency Re-Attempt Voucher (Admin Grant)`,
      amountInr: 0,
      purchasedAt: new Date().toISOString(),
      status: 'active',
      expiresAt: examRec.retakeExpiresAt,
    });

    learners[idx] = student;
    this.saveLearners(learners);
    return true;
  }

  /**
   * Grant a complimentary curriculum track to a student
   */
  static grantTrackAccess(studentEmail: string, trackId: string): boolean {
    const learners = this.getLearners();
    const idx = learners.findIndex((l) => l.email.toLowerCase() === studentEmail.toLowerCase());
    if (idx === -1) return false;

    const student = learners[idx];
    if (!student.purchasedCourses.includes(trackId)) {
      student.purchasedCourses.push(trackId);
    }

    student.subscriptions.unshift({
      id: `sub_${trackId}_admin_${Date.now()}`,
      type: 'course_pass',
      trackId,
      trackTitle: `${trackId.toUpperCase()} Course Lifetime Pass (Admin Grant)`,
      amountInr: 0,
      purchasedAt: new Date().toISOString(),
      status: 'active',
    });

    learners[idx] = student;
    this.saveLearners(learners);
    return true;
  }

  /**
   * Export learners directory to CSV format
   */
  static exportLearnersCSV(learners: LearnerRecord[]): void {
    const headers = [
      'Full Name',
      'Email',
      'Auth Provider',
      'Enrolled Courses',
      'VIP Access',
      'Total XP',
      'Streak Days',
      'Tier',
      'Python Lessons Done',
      'SQL Lessons Done',
      'Highest Python Score',
      'Highest SQL Score',
      'Certificates Count',
      'Lifetime Value (INR)',
      'Joined Date',
      'Last Active',
    ];

    const rows = learners.map((l) => {
      const pyDone = l.completedLessonsCount?.python || 0;
      const sqlDone = l.completedLessonsCount?.sql || 0;
      const pyScore = l.examRecords?.python?.bestScore !== undefined && l.examRecords?.python?.bestScore !== null ? `${l.examRecords.python.bestScore}%` : 'N/A';
      const sqlScore = l.examRecords?.sql?.bestScore !== undefined && l.examRecords?.sql?.bestScore !== null ? `${l.examRecords.sql.bestScore}%` : 'N/A';

      return [
        `"${l.fullName.replace(/"/g, '""')}"`,
        `"${l.email}"`,
        `"${l.provider}"`,
        `"${(l.purchasedCourses || []).join(', ')}"`,
        l.hasPromoAccess ? 'YES' : 'NO',
        l.xp,
        l.streakDays,
        `"${l.tierName}"`,
        pyDone,
        sqlDone,
        `"${pyScore}"`,
        `"${sqlScore}"`,
        l.certificates.length,
        l.ltvInr,
        `"${new Date(l.joinedAt).toLocaleDateString()}"`,
        `"${new Date(l.lastActiveAt).toLocaleDateString()}"`,
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `devforge_students_crm_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
