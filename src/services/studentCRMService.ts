import { LearnerRecord, StudentSubscription, StudentExamRecord, StudentCertificateRecord } from '../types/crm';
import { AuthService } from './authService';
import { ExamEngine } from './examEngine';
import { ProgressStorage } from './progressStorage';

const CRM_STUDENTS_STORAGE_KEY = 'devforge_crm_learners_v2';

// 100% genuine registered students only - no mock or fake users

export class StudentCRMService {
  static isDemoHidden(): boolean {
    return true; // Strictly hide and disallow simulated demo profiles
  }

  static setHideDemo(hide: boolean) {
    try {
      localStorage.setItem('devforge_hide_demo_learners_v1', hide ? 'true' : 'false');
    } catch {}
  }

  static purgeDemoLearners(): LearnerRecord[] {
    try {
      localStorage.removeItem('devforge_crm_learners_v1');
    } catch {}
    this.setHideDemo(true);
    const all = this.getLearners();
    const clean = all.filter((l) => !l.isDemo && !l.id?.startsWith('lrn_aarav') && !l.id?.startsWith('lrn_ananya') && !l.id?.startsWith('lrn_priya') && !l.id?.startsWith('lrn_rohan'));
    this.saveLearners(clean);
    return clean;
  }

  static restoreDemoLearners(): LearnerRecord[] {
    return this.getLearners();
  }

  /**
   * Get all genuine learners (merges real authenticated users + registered cohort records)
   */
  static getLearners(): LearnerRecord[] {
    try {
      // Clean up legacy mock data storage
      try {
        if (localStorage.getItem('devforge_crm_learners_v1')) {
          localStorage.removeItem('devforge_crm_learners_v1');
        }
      } catch {}

      let stored: LearnerRecord[] = [];
      const raw = localStorage.getItem(CRM_STUDENTS_STORAGE_KEY);

      if (raw) {
        stored = JSON.parse(raw);
        // Strictly filter out any demo or fake seed profiles
        stored = stored.filter((l) => !l.isDemo && !l.id?.startsWith('lrn_aarav') && !l.id?.startsWith('lrn_ananya') && !l.id?.startsWith('lrn_priya') && !l.id?.startsWith('lrn_rohan') && !['Aarav Sharma', 'Ananya Reddy', 'Priya Patel', 'Rohan Deshmukh'].includes(l.fullName));
      } else {
        stored = [];
        this.saveLearners(stored);
      }

      // Check current logged-in user in session
      const currentUser = AuthService.getCurrentUser();
      if (currentUser && currentUser.role === 'student') {
        const stats = ProgressStorage.getStats();
        const examStatuses = ExamEngine.getAllStatuses();

        const existsIdx = stored.findIndex((l) => l.email.toLowerCase() === currentUser.email.toLowerCase());
        const realXp = typeof stats.xp === 'number' ? stats.xp : 0;
        const pyDone = stats.completedLessonIds.filter((id) => id.startsWith('py-')).length;
        const sqlDone = stats.completedLessonIds.filter((id) => id.startsWith('sql-')).length;

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
          xp: realXp,
          streakDays: stats.streakDays || 1,
          tierName: realXp >= 2500 ? 'Master' : realXp >= 1500 ? 'Specialist' : realXp >= 500 ? 'Practitioner' : 'Foundations',
          completedLessonsCount: {
            python: pyDone,
            sql: sqlDone,
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
      return [];
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
