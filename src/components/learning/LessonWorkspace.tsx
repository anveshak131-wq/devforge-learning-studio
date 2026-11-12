import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  Eye, 
  Sparkles, 
  Award,
  ArrowRight,
  Database,
  BookOpen
} from 'lucide-react';
import { Lesson, Track, ExecutionResult, TestResultItem, UserStats } from '../../types';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { CodeExecutor } from '../../services/codeExecutor';
import { TestRunner } from '../../services/testRunner';
import { SqlSession, TableSchema } from '../../services/sqlEngine';
import { ProgressStorage } from '../../services/progressStorage';

interface LessonWorkspaceProps {
  track: Track;
  lesson: Lesson;
  onNavigateLesson: (lessonId: string) => void;
  onBackToTracks: () => void;
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
}

export const LessonWorkspace: React.FC<LessonWorkspaceProps> = ({
  track,
  lesson,
  onNavigateLesson,
  onBackToTracks,
  userStats,
  onStatsUpdate
}) => {
  // Code state (retrieved from localStorage or lesson.initialCode)
  const [code, setCode] = useState<string>(() => 
    ProgressStorage.getSavedCode(lesson.id, lesson.initialCode)
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [testResults, setTestResults] = useState<TestResultItem[] | null>(null);
  const [unlockedHints, setUnlockedHints] = useState<number>(0);
  const [showSolutionConfirm, setShowSolutionConfirm] = useState(false);
  const [schemas, setSchemas] = useState<TableSchema[]>([]);
  
  const sqlSessionRef = useRef<SqlSession | null>(null);

  // Initialize SQL Session if SQL lesson
  useEffect(() => {
    let active = true;
    if (lesson.language === 'sql') {
      const session = new SqlSession();
      session.init(lesson.initSqlSchema).then(() => {
        if (active) {
          sqlSessionRef.current = session;
          setSchemas(session.getSchema());
        }
      }).catch(err => {
        console.error('Failed to init SQL session for lesson:', err);
      });
    }

    return () => {
      active = false;
      if (sqlSessionRef.current) {
        sqlSessionRef.current.close();
        sqlSessionRef.current = null;
      }
    };
  }, [lesson.id, lesson.language, lesson.initSqlSchema]);

  // When lesson changes, reset or load saved code
  useEffect(() => {
    setCode(ProgressStorage.getSavedCode(lesson.id, lesson.initialCode));
    setExecutionResult(null);
    setTestResults(null);
    setUnlockedHints(0);
    setShowSolutionConfirm(false);
  }, [lesson.id]);

  // Save code changes to localStorage
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    ProgressStorage.saveCode(lesson.id, newCode);
  };

  // Run Code
  const handleRun = async () => {
    setIsRunning(true);
    try {
      const res = await CodeExecutor.executeCode(
        code, 
        lesson.language, 
        sqlSessionRef.current || undefined
      );
      setExecutionResult(res);
      if (sqlSessionRef.current) {
        setSchemas(sqlSessionRef.current.getSchema());
      }
    } finally {
      setIsRunning(false);
    }
  };

  // Run Automated Tests / Verify Solution
  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      // Execute code first
      const exec = await CodeExecutor.executeCode(
        code, 
        lesson.language, 
        sqlSessionRef.current || undefined
      );
      setExecutionResult(exec);

      // Run tests
      const tests = await TestRunner.runTests(
        code, 
        lesson.language, 
        lesson.testCases, 
        sqlSessionRef.current || undefined
      );
      setTestResults(tests);

      const allPassed = tests.length > 0 && tests.every(t => t.passed);
      if (allPassed) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });

        // Mark completed and award XP
        const nextStats = ProgressStorage.markLessonComplete(lesson.id, lesson.xp);
        onStatsUpdate(nextStats);
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const handleReset = () => {
    setCode(lesson.initialCode);
    ProgressStorage.saveCode(lesson.id, lesson.initialCode);
    setExecutionResult(null);
    setTestResults(null);
  };

  const handleShowSolution = () => {
    setCode(lesson.solutionCode);
    ProgressStorage.saveCode(lesson.id, lesson.solutionCode);
    setShowSolutionConfirm(false);
  };

  const currentIndex = track.lessons.findIndex(l => l.id === lesson.id);
  const nextLesson = track.lessons[currentIndex + 1];
  const prevLesson = track.lessons[currentIndex - 1];
  const isCompleted = userStats.completedLessonIds.includes(lesson.id);

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950">
      {/* Sub-header / Breadcrumbs bar */}
      <div className="h-11 border-b border-slate-800 bg-slate-900/60 px-4 flex items-center justify-between text-xs select-none">
        <div className="flex items-center space-x-2 text-slate-400">
          <button 
            onClick={onBackToTracks}
            className="hover:text-slate-200 transition font-medium"
          >
            {track.title}
          </button>
          <span>/</span>
          <span className="text-slate-200 font-semibold truncate max-w-xs">{lesson.title}</span>
          {isCompleted && (
            <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
              <CheckCircle2 className="w-3 h-3" />
              <span>Completed</span>
            </span>
          )}
        </div>

        {/* Navigation Prev/Next */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => prevLesson && onNavigateLesson(prevLesson.id)}
            disabled={!prevLesson}
            className="p-1.5 rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition"
            title="Previous Lesson"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <span className="text-slate-500 font-mono text-[11px]">
            {currentIndex + 1} / {track.lessons.length}
          </span>

          <button
            onClick={() => nextLesson && onNavigateLesson(nextLesson.id)}
            disabled={!nextLesson}
            className="p-1.5 rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition"
            title="Next Lesson"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Workspace Split (Left: Instructions / Theory, Right: Editor + Output) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Lesson Instructions & Theory (5 cols) */}
        <div className="lg:col-span-5 h-full overflow-y-auto border-r border-slate-800 p-5 space-y-5 bg-slate-900/40">
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              {lesson.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
              {lesson.difficulty}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>+{lesson.xp} XP</span>
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">{lesson.title}</h1>
            <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{lesson.description}</p>
          </div>

          {/* Key Concepts */}
          <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Key Concepts</span>
            </h4>
            <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
              {lesson.concepts.map((concept, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explanation Markdown content */}
          <div className="prose prose-invert prose-xs max-w-none text-slate-300 space-y-3 leading-relaxed">
            {lesson.explanationMarkdown.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={pIdx} className="text-base font-bold text-white mt-4 pb-1 border-b border-slate-800">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={pIdx} className="text-sm font-semibold text-indigo-300 mt-3">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const codeBlock = lines.slice(1, -1).join('\n');
                return (
                  <pre key={pIdx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-[11px] overflow-x-auto">
                    <code>{codeBlock}</code>
                  </pre>
                );
              }
              return (
                <p key={pIdx} className="text-xs text-slate-300">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Hints Section */}
          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Need a Hint? ({unlockedHints}/{lesson.hints.length})</span>
              </span>

              {unlockedHints < lesson.hints.length && (
                <button
                  onClick={() => setUnlockedHints(h => h + 1)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 underline font-medium"
                >
                  Unlock Next Hint
                </button>
              )}
            </div>

            {unlockedHints > 0 && (
              <div className="space-y-1.5">
                {lesson.hints.slice(0, unlockedHints).map((hint, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed"
                  >
                    <strong>Hint {hIdx + 1}:</strong> {hint}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solution toggle / Reveal */}
          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <span>Stuck completely?</span>
            {showSolutionConfirm ? (
              <div className="flex items-center space-x-2">
                <span className="text-rose-400">Replace code with solution?</span>
                <button
                  onClick={handleShowSolution}
                  className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-medium"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowSolutionConfirm(false)}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSolutionConfirm(true)}
                className="hover:text-slate-300 transition underline"
              >
                Reveal Official Solution
              </button>
            )}
          </div>

          {/* Next Lesson Floating Banner if passed */}
          {testResults && testResults.length > 0 && testResults.every(t => t.passed) && nextLesson && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-500/40 space-y-2.5">
              <div className="flex items-center space-x-2 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Lesson Completed! Ready for the next challenge?</span>
              </div>
              <button
                onClick={() => onNavigateLesson(nextLesson.id)}
                className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-indigo-600/30 transition"
              >
                <span>Continue to {nextLesson.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Split Monaco Editor (top) and Output Panel (bottom) (7 cols) */}
        <div className="lg:col-span-7 h-full flex flex-col overflow-hidden p-3 gap-3 bg-slate-950">
          {/* Top: Editor */}
          <div className="flex-1 min-h-[300px]">
            <CodeEditor
              code={code}
              onChange={handleCodeChange}
              language={lesson.language}
              onRun={handleRun}
              onVerify={handleVerify}
              onReset={handleReset}
              isRunning={isRunning}
              isVerifying={isVerifying}
              hasTests={lesson.testCases.length > 0}
            />
          </div>

          {/* Bottom: Execution & Verification Output */}
          <div className="h-[260px] min-h-[220px]">
            <OutputPanel
              language={lesson.language}
              executionResult={executionResult}
              testResults={testResults}
              onClearConsole={() => setExecutionResult(null)}
              schemas={schemas}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
