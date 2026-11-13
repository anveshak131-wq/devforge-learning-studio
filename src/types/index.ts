export type Language = 
  | 'javascript' 
  | 'typescript' 
  | 'sql' 
  | 'python' 
  | 'html'
  | 'css'
  | 'react'
  | 'nodejs'
  | 'git'
  | 'dsa'
  | 'docker'
  | 'bash'
  | 'golang'
  | 'rust';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type TierLevel = 1 | 2 | 3 | 4 | 5;

export interface TestCase {
  id: string;
  description: string;
  testFn: string; // JavaScript expression or verification code evaluated against user output/scope
  expectedMessage?: string;
}

export interface WorkedExampleItem {
  title: string;
  code: string;
  explanation: string;
  expectedOutput: string;
}

export type LectureMediaType = 'none' | 'slides' | 'video';

export type SlidesSourceType = 'google_slides' | 'pdf_upload' | 'pdf_url' | 'office_pptx';

export interface LessonMedia {
  type: LectureMediaType; // 'none' | 'slides' | 'video'
  // Slide presentation properties
  slidesSourceType?: SlidesSourceType;
  slidesUrl?: string; // Google Slides embed URL or public PDF/PPT URL
  slidesRawInput?: string; // Original URL or iframe pasted by admin
  slidesTitle?: string;
  slidesFileBlobId?: string; // IndexedDB storage key for uploaded PDF / slide files
  slidesFileName?: string;
  slidesFileSize?: number;
  // Video properties
  videoUrl?: string; // YouTube watch URL or ID
  videoTitle?: string;
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  language: Language;
  category: string;
  difficulty: Difficulty;
  tier: TierLevel; // 1: Foundations, 2: Core, 3: Intermediate, 4: Advanced, 5: Masterclass
  tierName: 'Foundations' | 'Core' | 'Intermediate' | 'Advanced' | 'Masterclass';
  estimatedMinutes: number;
  xp: number;
  description: string;
  concepts: string[];
  explanationMarkdown: string;
  analogy?: string; // Real-world intuitive analogy for beginners
  media?: LessonMedia; // Multi-modal lecture media slot (slides deck, video, or none)
  videoUrl?: string; // Legacy YouTube or video lecture URL (for backward compatibility)
  workedExample?: WorkedExampleItem;
  additionalExamples?: WorkedExampleItem[]; // Extra worked examples added by admin
  commonMistakes?: string[];
  exerciseSteps?: string[];
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
  tier?: TierLevel;
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
  diagnosedTier?: TierLevel;
  reviewedFlashcardIds: string[];
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

export interface Flashcard {
  id: string;
  language: Language;
  tier: TierLevel;
  category: string;
  question: string;
  codeSnippet?: string;
  answerExplanation: string;
  codeAnswer?: string;
}

export interface QuizQuestion {
  id: string;
  language: Language;
  title: string;
  scenario: string;
  codeSnippet?: string;
  options: { label: string; text: string; indicatesTier: TierLevel }[];
  correctIndex: number;
  explanation: string;
}
