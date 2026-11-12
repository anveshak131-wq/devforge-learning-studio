export type Language = 'javascript' | 'typescript' | 'sql' | 'python' | 'html';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface TestCase {
  id: string;
  description: string;
  testFn: string; // JavaScript expression or verification code evaluated against user output/scope
  expectedMessage?: string;
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  language: Language;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  xp: number;
  description: string;
  concepts: string[];
  explanationMarkdown: string;
  initialCode: string;
  solutionCode: string;
  hints: string[];
  testCases: TestCase[];
  initSqlSchema?: string; // Optional SQL schema setup for SQL lessons
}

export interface Track {
  id: string;
  title: string;
  slug: string;
  language: Language;
  icon: string;
  color: string;
  tagline: string;
  description: string;
  lessons: Lesson[];
}

export interface ProjectMilestone {
  id: string;
  stepNumber: number;
  title: string;
  instructionMarkdown: string;
  starterCode: string;
  solutionCode: string;
  hints: string[];
  testCases: TestCase[];
}

export interface GuidedProject {
  id: string;
  title: string;
  slug: string;
  language: Language;
  secondaryLanguages?: Language[];
  difficulty: Difficulty;
  estimatedHours: number;
  xpReward: number;
  tagline: string;
  description: string;
  previewType: 'console' | 'table' | 'dom' | 'interactive';
  whatYouWillBuild: string[];
  skillsLearned: string[];
  milestones: ProjectMilestone[];
  initSqlSchema?: string;
}

export interface ConsoleOutputMessage {
  type: 'log' | 'error' | 'warn' | 'info' | 'table';
  args: any[];
  timestamp: number;
}

export interface TestResultItem {
  id: string;
  description: string;
  passed: boolean;
  actual?: any;
  expected?: any;
  error?: string;
}

export interface ExecutionResult {
  success: boolean;
  logs: ConsoleOutputMessage[];
  returnValue?: any;
  error?: string;
  executionTimeMs: number;
  sqlResults?: {
    columns: string[];
    values: any[][];
  }[];
  transpiledCode?: string;
}

export interface UserStats {
  xp: number;
  completedLessonIds: string[];
  completedMilestoneIds: string[];
  completedProjectIds: string[];
  streakDays: number;
  lastActiveDate: string;
  savedCode: Record<string, string>; // keyed by lessonId or milestoneId
  unlockedBadgeIds: string[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  unlockedAt?: string;
  condition: (stats: UserStats) => boolean;
}
