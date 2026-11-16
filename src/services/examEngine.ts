import { 
  QuizQuestion, 
  QuizAttemptResult, 
  TrackExamStatus, 
  RetakePass, 
  CandidateTranscript 
} from '../types/quiz';
import { PYTHON_EXAM_BANK } from '../data/quizzes/examBankPython';
import { SQL_EXAM_BANK } from '../data/quizzes/examBankSql';
import { AuthService } from './authService';
import { ProgressStorage } from './progressStorage';

const EXAM_STATUS_KEY = 'devforge_exam_status_v2';
const COOLDOWN_HOURS = 6;
const RETAKE_PASS_HOURS = 72;
export const MAX_EXAM_ATTEMPTS = 3;
export const RETAKE_FEE_INR = 49;

/**
 * Fisher-Yates (Knuth) Shuffle Algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export class ExamEngine {
  /**
   * Get complete pool for a track
   */
  static getBank(trackId: string): QuizQuestion[] {
    if (trackId === 'python') return PYTHON_EXAM_BANK;
    if (trackId === 'sql') return SQL_EXAM_BANK;
    return [];
  }

  /**
   * Stratified Domain Sampling & Fisher-Yates Option Shuffling
   * Generates a 20-question randomized proctored exam (or 5-question warmup mock)
   */
  static generateDynamicExam(
    trackId: 'python' | 'sql',
    isWarmupMock = false
  ): {
    questions: QuizQuestion[];
    secretAnswers: Record<string, number>; // questionId -> original/shuffled correct index
    timeLimitSeconds: number;
    title: string;
    subtitle: string;
  } {
    const bank = this.getBank(trackId);
    let selectedQuestions: QuizQuestion[] = [];

    if (trackId === 'python') {
      const d1 = bank.filter((q) => q.domain === 'Syntax, Types & Operators');
      const d2 = bank.filter((q) => q.domain === 'Control Flow, Loops & Conditionals');
      const d3 = bank.filter((q) => q.domain === 'Functions, Scope, Lambdas & Recursion');
      const d4 = bank.filter((q) => q.domain === 'Data Structures, Comprehensions & Slicing');

      if (isWarmupMock) {
        // 5 questions total for warm-up mock
        selectedQuestions = [
          ...shuffleArray(d1).slice(0, 1),
          ...shuffleArray(d2).slice(0, 1),
          ...shuffleArray(d3).slice(0, 1),
          ...shuffleArray(d4).slice(0, 2),
        ];
      } else {
        // 20 questions: 5 from each of the 4 domains
        selectedQuestions = [
          ...shuffleArray(d1).slice(0, 5),
          ...shuffleArray(d2).slice(0, 5),
          ...shuffleArray(d3).slice(0, 5),
          ...shuffleArray(d4).slice(0, 5),
        ];
      }
    } else if (trackId === 'sql') {
      const d1 = bank.filter((q) => q.domain === 'Foundations, DDL/DML & Filtering');
      const d2 = bank.filter((q) => q.domain === 'Aggregations, GROUP BY & Analytical Clauses');
      const d3 = bank.filter((q) => q.domain === 'Multi-Table JOINs, Subqueries & Set Operations');

      if (isWarmupMock) {
        // 5 questions total for warm-up mock
        selectedQuestions = [
          ...shuffleArray(d1).slice(0, 2),
          ...shuffleArray(d2).slice(0, 2),
          ...shuffleArray(d3).slice(0, 1),
        ];
      } else {
        // 20 questions: 6 from D1, 7 from D2, 7 from D3
        selectedQuestions = [
          ...shuffleArray(d1).slice(0, 6),
          ...shuffleArray(d2).slice(0, 7),
          ...shuffleArray(d3).slice(0, 7),
        ];
      }
    }

    // Shuffle the overall presentation order
    selectedQuestions = shuffleArray(selectedQuestions);

    // Shuffle options (A, B, C, D) for each question without desyncing correct answer
    const finalQuestions: QuizQuestion[] = [];
    const secretAnswers: Record<string, number> = {};

    selectedQuestions.forEach((q, idx) => {
      const correctOptionText = q.options[q.correctOptionIndex];
      const shuffledOptions = shuffleArray(q.options);
      const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

      // Security: Strip correct answer index and explanation from question payload so candidates cannot inspect answer keys in DevTools
      const dynamicQuestion: QuizQuestion = {
        ...q,
        id: `exam-${trackId}-${idx + 1}-${q.id}`,
        options: shuffledOptions,
        correctOptionIndex: -1,
        explanation: '',
      };

      secretAnswers[dynamicQuestion.id] = newCorrectIndex;
      finalQuestions.push(dynamicQuestion);
    });

    const isPy = trackId === 'python';
    return {
      questions: finalQuestions,
      secretAnswers,
      timeLimitSeconds: isWarmupMock ? 180 : 1500, // 3 mins vs 25 mins
      title: isWarmupMock 
        ? `${isPy ? 'Python' : 'SQL'} Warm-Up Mock Test` 
        : `${isPy ? 'Python' : 'SQL'} Official Certification Exam`,
      subtitle: isWarmupMock
        ? '5 Sample Questions • 3 Minutes • Zero-stress interface practice'
        : '20 Proctored Questions • 25 Minutes • Passing Mark: 70%',
    };
  }

  /**
   * Get all exam statuses from localStorage
   */
  static getAllStatuses(): Record<string, TrackExamStatus> {
    try {
      const raw = localStorage.getItem(EXAM_STATUS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  /**
   * Get exam status for a specific track
   */
  static getTrackExamStatus(trackId: string): TrackExamStatus {
    const all = this.getAllStatuses();
    const currentUser = AuthService.getCurrentUser();
    const userExamStatus = currentUser?.examStatus?.[trackId];

    if (all[trackId]) {
      // If user profile has higher recorded attempt count or active cooldown, sync to latest
      if (userExamStatus && (userExamStatus.attemptsCount || 0) > (all[trackId].attemptsCount || 0)) {
        all[trackId] = userExamStatus;
        try {
          localStorage.setItem(EXAM_STATUS_KEY, JSON.stringify(all));
        } catch {}
      }
      // If server profile holds an active paid retake pass, hydrate it
      if (currentUser?.activeRetakePass && !all[trackId].activeRetakePass) {
        all[trackId].activeRetakePass = currentUser.activeRetakePass;
      }
      return all[trackId];
    }

    // Hydrate from user profile if localStorage was cleared
    if (userExamStatus) {
      all[trackId] = userExamStatus;
      try {
        localStorage.setItem(EXAM_STATUS_KEY, JSON.stringify(all));
      } catch {}
      return userExamStatus;
    }

    return {
      trackId,
      attemptsCount: 0,
      maxAttempts: MAX_EXAM_ATTEMPTS,
      bestScore: null,
      bestGrade: null,
      lastAttemptAt: null,
      cooldownEndsAt: null,
      activeRetakePass: currentUser?.activeRetakePass || null,
      history: [],
    };
  }

  /**
   * Check eligibility to start an exam attempt
   */
  static checkEligibility(trackId: string): {
    canStart: boolean;
    reason: 'ready' | 'needs_payment' | 'cooldown_active' | 'max_attempts_reached';
    remainingCooldownSeconds?: number;
    remainingPassSeconds?: number;
    currentAttemptNumber: number;
    bestScore: number | null;
    bestGrade: string | null;
  } {
    const status = this.getTrackExamStatus(trackId);
    const now = Date.now();

    // 1. Max attempts reached
    if (status.attemptsCount >= MAX_EXAM_ATTEMPTS) {
      return {
        canStart: false,
        reason: 'max_attempts_reached',
        currentAttemptNumber: status.attemptsCount,
        bestScore: status.bestScore,
        bestGrade: status.bestGrade,
      };
    }

    // 2. Cooldown check
    if (status.cooldownEndsAt) {
      const cooldownTime = new Date(status.cooldownEndsAt).getTime();
      if (now < cooldownTime) {
        const remainingSec = Math.ceil((cooldownTime - now) / 1000);
        return {
          canStart: false,
          reason: 'cooldown_active',
          remainingCooldownSeconds: remainingSec,
          currentAttemptNumber: status.attemptsCount + 1,
          bestScore: status.bestScore,
          bestGrade: status.bestGrade,
        };
      }
    }

    // 3. First attempt is FREE
    if (status.attemptsCount === 0) {
      return {
        canStart: true,
        reason: 'ready',
        currentAttemptNumber: 1,
        bestScore: status.bestScore,
        bestGrade: status.bestGrade,
      };
    }

    // 4. Subsequent attempts require an active ₹49 retake pass
    if (status.activeRetakePass && !status.activeRetakePass.used) {
      const passExpiresTime = new Date(status.activeRetakePass.expiresAt).getTime();
      if (now < passExpiresTime) {
        const remainingPassSec = Math.ceil((passExpiresTime - now) / 1000);
        return {
          canStart: true,
          reason: 'ready',
          remainingPassSeconds: remainingPassSec,
          currentAttemptNumber: status.attemptsCount + 1,
          bestScore: status.bestScore,
          bestGrade: status.bestGrade,
        };
      }
    }

    // Retake pass needed
    return {
      canStart: false,
      reason: 'needs_payment',
      currentAttemptNumber: status.attemptsCount + 1,
      bestScore: status.bestScore,
      bestGrade: status.bestGrade,
    };
  }

  /**
   * Activate a paid ₹49 re-examination pass (72h validity)
   */
  static activateRetakePass(trackId: string, paymentId?: string): RetakePass {
    const all = this.getAllStatuses();
    const current = this.getTrackExamStatus(trackId);

    const now = new Date();
    const expires = new Date(now.getTime() + RETAKE_PASS_HOURS * 60 * 60 * 1000);

    const pass: RetakePass = {
      purchasedAt: now.toISOString(),
      expiresAt: expires.toISOString(),
      used: false,
      paymentId: paymentId || `pay_retake_${Date.now()}`,
    };

    current.activeRetakePass = pass;
    all[trackId] = current;

    try {
      localStorage.setItem(EXAM_STATUS_KEY, JSON.stringify(all));
    } catch (e) {
      console.warn('Could not save retake pass:', e);
    }

    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      currentUser.activeRetakePass = pass;
      currentUser.examStatus = currentUser.examStatus || {};
      currentUser.examStatus[trackId] = current;
      try {
        localStorage.setItem('devforge_auth_session_v1', JSON.stringify(currentUser));
      } catch {}
    }

    return pass;
  }

  /**
   * Submit and evaluate a proctored exam attempt
   */
  static submitProctoredExam(params: {
    trackId: 'python' | 'sql';
    questions: QuizQuestion[];
    userAnswers: Record<string, number>;
    secretAnswers: Record<string, number>;
    timeTakenSeconds: number;
    focusViolations: number;
    candidateName: string;
    isWarmupMock?: boolean;
  }): {
    result: QuizAttemptResult;
    transcript?: CandidateTranscript;
  } {
    const {
      trackId,
      questions,
      userAnswers,
      secretAnswers,
      timeTakenSeconds,
      focusViolations,
      candidateName,
      isWarmupMock = false,
    } = params;

    let correctCount = 0;
    const domainStats: Record<string, { correct: number; total: number }> = {};

    questions.forEach((q) => {
      const domain = q.domain || q.skillCategory || 'Core Principles';
      if (!domainStats[domain]) {
        domainStats[domain] = { correct: 0, total: 0 };
      }
      domainStats[domain].total += 1;

      const userChoice = userAnswers[q.id];
      const correctChoice = secretAnswers[q.id] ?? q.correctOptionIndex;

      if (userChoice !== undefined && userChoice === correctChoice) {
        correctCount += 1;
        domainStats[domain].correct += 1;
      }
    });

    const totalQuestions = questions.length;
    const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const integrityStatus: 'clean' | 'flagged' = focusViolations >= 3 ? 'flagged' : 'clean';
    const passed = scorePercent >= 70 && integrityStatus === 'clean';

    let grade: 'Distinction' | 'High Honors' | 'Honors' | 'Needs Review' = 'Needs Review';
    if (integrityStatus === 'flagged') {
      grade = 'Needs Review';
    } else if (scorePercent >= 90) {
      grade = 'Distinction';
    } else if (scorePercent >= 80) {
      grade = 'High Honors';
    } else if (scorePercent >= 70) {
      grade = 'Honors';
    }

    const skillsBreakdown: Record<string, { correct: number; total: number; percent: number }> = {};
    Object.entries(domainStats).forEach(([domain, stats]) => {
      skillsBreakdown[domain] = {
        correct: stats.correct,
        total: stats.total,
        percent: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      };
    });

    // Attempt tracking (ignored if warm-up mock)
    const currentStatus = this.getTrackExamStatus(trackId);
    let attemptNum = isWarmupMock ? 0 : currentStatus.attemptsCount + 1;

    const result: QuizAttemptResult = {
      quizId: isWarmupMock ? `${trackId}-warmup-mock` : `${trackId}-final-exam`,
      trackId,
      quizTitle: isWarmupMock
        ? `${trackId.toUpperCase()} Warm-Up Mock Test`
        : `${trackId.toUpperCase()} Official Certification Exam`,
      kind: 'final_exam',
      completedAt: new Date().toISOString(),
      score: correctCount,
      totalQuestions,
      scorePercent,
      passed,
      timeTakenSeconds,
      userAnswers,
      grade,
      skillsBreakdown,
      integrityStatus,
      focusViolations,
      attemptNumber: attemptNum,
      isWarmupMock,
    };

    if (!isWarmupMock) {
      // 1. Update Highest Score Guarantee
      const previousBest = currentStatus.bestScore || 0;
      const newBest = Math.max(previousBest, scorePercent);
      currentStatus.bestScore = newBest;

      if (scorePercent >= previousBest) {
        currentStatus.bestGrade = grade;
      }

      // 2. Increment attempt counter & start 6h cooldown
      currentStatus.attemptsCount = attemptNum;
      currentStatus.lastAttemptAt = new Date().toISOString();
      currentStatus.cooldownEndsAt = new Date(Date.now() + COOLDOWN_HOURS * 60 * 60 * 1000).toISOString();

      // 3. Mark active retake pass as used
      if (currentStatus.activeRetakePass) {
        currentStatus.activeRetakePass.used = true;
      }

      // 4. Record attempt in history
      currentStatus.history.push({
        attemptNumber: attemptNum,
        scorePercent,
        grade,
        completedAt: new Date().toISOString(),
        focusViolations,
        integrityStatus,
      });

      // Save to localStorage
      const allStatuses = this.getAllStatuses();
      allStatuses[trackId] = currentStatus;
      try {
        localStorage.setItem(EXAM_STATUS_KEY, JSON.stringify(allStatuses));
      } catch (err) {
        console.warn('Could not save exam status:', err);
      }

      // Sync attempt record to user profile so incognito/cleared localStorage does not bypass cooldown
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        currentUser.examStatus = currentUser.examStatus || {};
        currentUser.examStatus[trackId] = currentStatus;
        if (currentStatus.activeRetakePass?.used) {
          currentUser.activeRetakePass = undefined;
        }
        try {
          localStorage.setItem('devforge_auth_session_v1', JSON.stringify(currentUser));
        } catch {}
      }

      // 5. Award XP and stamp highest verified score on certificate
      if (passed) {
        const xp = scorePercent >= 90 ? 500 : scorePercent >= 80 ? 350 : 250;
        ProgressStorage.addXp(xp);
        AuthService.attachExamScoreToCertificate(trackId, newBest);
      }
    }

    // Build Candidate Transcript for printing/downloading
    const user = AuthService.getCurrentUser();
    const cleanUser = user?.fullName || candidateName || 'Candidate';
    const email = user?.email || 'learner@devforge.academy';
    const serial = `DF-${trackId.toUpperCase().slice(0, 2)}-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const transcript: CandidateTranscript = {
      candidateName: cleanUser,
      candidateEmail: email,
      serialNumber: serial,
      trackId,
      trackTitle: trackId === 'python' ? 'Python Core & Modern Engineering' : 'SQL Database Systems & Data Modeling',
      attemptNumber: attemptNum,
      completedAt: new Date().toISOString(),
      scorePercent,
      grade,
      integrityStatus,
      focusViolations,
      domainBreakdown: Object.entries(skillsBreakdown).map(([domain, data]) => ({
        domain,
        correct: data.correct,
        total: data.total,
        percent: data.percent,
        status: data.percent >= 90 ? 'Mastered' : data.percent >= 70 ? 'Proficient' : 'Needs Review',
      })),
      verificationUrl: `https://devforge-65f.pages.dev/verify/${serial}`,
    };

    return { result, transcript };
  }
}
