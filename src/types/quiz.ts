export type QuizQuestionType = 
  | 'output_prediction' 
  | 'spot_the_bug' 
  | 'fill_in_blank' 
  | 'conceptual';

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  prompt: string;
  codeSnippet?: string;
  codeLanguage?: string;
  options: string[]; // Typically 4 choices
  correctOptionIndex: number; // 0-based index
  explanation: string;
  skillCategory?: string; // e.g. "Control Flow", "Joins", "OOP"
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
}
