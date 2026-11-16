export type QuizQuestionType = 
  | 'output_prediction' 
  | 'spot_the_bug' 
  | 'fill_in_blank' 
  | 'conceptual';

export interface QuizQuestion {
  id: string;
  trackId?: string;
  type: QuizQuestionType;
  prompt: string;
  codeSnippet?: string;
  codeLanguage?: string;
  options: string[]; // Typically 4 choices
  correctOptionIndex: number; // 0-based index
  explanation: string;
  skillCategory?: string; // e.g. "Control Flow", "Joins", "OOP"
  domain?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export type QuizKind = 'module_checkpoint' | 'final_exam';

export interface CourseQuiz {
  id: string;
  trackId: string;
  title: string;
  subtitle?: string;
  kind: QuizKind;
  moduleCategory?: string; // Matches Lesson.category for module checkpoints
  moduleIndex?: number;
  timeLimitSeconds?: number; // Countdown timer (0 or undefined for untimed)
  passingScorePercent: number; // e.g. 70 (%)
  questions: QuizQuestion[];
  xpReward: number;
}

export interface QuizAttemptResult {
  quizId: string;
  trackId: string;
  quizTitle: string;
  kind: QuizKind;
  completedAt: string;
  score: number;
  totalQuestions: number;
  scorePercent: number;
  passed: boolean;
  timeTakenSeconds: number;
  userAnswers: Record<string, number>; // questionId -> selectedOptionIndex
  grade: 'Distinction' | 'High Honors' | 'Honors' | 'Needs Review';
  skillsBreakdown: Record<string, { correct: number; total: number; percent: number }>;
  integrityStatus?: 'clean' | 'flagged';
  focusViolations?: number;
  attemptNumber?: number;
  isWarmupMock?: boolean;
}

export interface RetakePass {
  purchasedAt: string;
  expiresAt: string; // 72 hours from purchase
  used: boolean;
  paymentId?: string;
}

export interface TrackExamStatus {
  trackId: string;
  attemptsCount: number; // 0 to 3
  maxAttempts: number; // default 3
  bestScore: number | null;
  bestGrade: string | null;
  lastAttemptAt: string | null;
  cooldownEndsAt: string | null; // 6 hours from last attempt
  activeRetakePass: RetakePass | null;
  history: Array<{
    attemptNumber: number;
    scorePercent: number;
    grade: string;
    completedAt: string;
    focusViolations: number;
    integrityStatus: 'clean' | 'flagged';
  }>;
}

export interface CandidateTranscript {
  candidateName: string;
  candidateEmail: string;
  serialNumber: string;
  trackId: string;
  trackTitle: string;
  attemptNumber: number;
  completedAt: string;
  scorePercent: number;
  grade: string;
  integrityStatus: 'clean' | 'flagged';
  focusViolations: number;
  domainBreakdown: Array<{
    domain: string;
    correct: number;
    total: number;
    percent: number;
    status: 'Mastered' | 'Proficient' | 'Needs Review';
  }>;
  verificationUrl: string;
}
