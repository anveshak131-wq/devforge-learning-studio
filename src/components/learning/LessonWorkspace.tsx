import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  Sparkles, 
  Award, 
  ArrowRight,
  BookOpen,
  Code2,
  Play,
  AlertTriangle,
  HelpCircle,
  Eye,
  Check
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
  onClaimCertificate?: (track: Track) => void;
}

export const LessonWorkspace: React.FC<LessonWorkspaceProps> = ({
  track,
  lesson,
  onNavigateLesson,
  onBackToTracks,
  userStats,
  onStatsUpdate,
  onClaimCertificate
}) => {
  // Two-stage learning mode: 'concept' (Learn first) vs 'exercise' (Practice)
  const [activeStage, setActiveStage] = useState<'concept' | 'exercise'>('concept');

  // Code state
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

  // When lesson changes, reset stage to concept first (Teach first then exercise!)
  useEffect(() => {
    setActiveStage('concept');
    setCode(ProgressStorage.getSavedCode(lesson.id, lesson.initialCode));
    setExecutionResult(null);
    setTestResults(null);
    setUnlockedHints(0);
    setShowSolutionConfirm(false);
  }, [lesson.id]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    ProgressStorage.saveCode(lesson.id, newCode);
  };

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

  // Run Worked Example in the console
  const handleRunWorkedExample = async () => {
    if (!lesson.workedExample) return;
    setIsRunning(true);
    try {
      const res = await CodeExecutor.executeCode(
        lesson.workedExample.code,
        lesson.language,
        sqlSessionRef.current || undefined
      );
      setExecutionResult(res);
    } finally {
      setIsRunning(false);
    }
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      const exec = await CodeExecutor.executeCode(
        code, 
        lesson.language, 
        sqlSessionRef.current || undefined
      );
      setExecutionResult(exec);

      const tests = await TestRunner.runTests(
        code, 
        lesson.language, 
        lesson.testCases, 
        sqlSessionRef.current || undefined
      );
      setTestResults(tests);

      const allPassed = tests.length > 0 && tests.every(t => t.passed);
      if (allPassed) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });

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
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
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

        {/* 2-Stage Learning Stepper Toggle */}
        <div className="flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
          <button
            onClick={() => setActiveStage('concept')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition ${
              activeStage === 'concept'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Learn Concept</span>
          </button>

          <button
            onClick={() => setActiveStage('exercise')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition ${
              activeStage === 'exercise'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>2. Practice Exercise</span>
          </button>
        </div>

        {/* Navigation Prev/Next */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => prevLesson && onNavigateLesson(prevLesson.id)}
            disabled={!prevLesson}
            className="p-1.5 rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 transition"
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
            className="p-1.5 rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 transition"
            title="Next Lesson"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Workspace Split */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 h-full overflow-y-auto border-r border-slate-800 p-5 space-y-5 bg-slate-900/40">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Tier {lesson.tier} • {lesson.tierName}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
              {lesson.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>+{lesson.xp} XP</span>
            </span>
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">{lesson.title}</h1>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{lesson.description}</p>
          </div>

          {/* ========================================= */}
          {/* STAGE 1: LEARN CONCEPT & WORKED EXAMPLE   */}
          {/* ========================================= */}
          {activeStage === 'concept' ? (
            <div className="space-y-5">
              {/* Intuitive Real-World Analogy */}
              {lesson.analogy && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-500/30 space-y-1.5">
                  <div className="flex items-center space-x-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Real-World Intuition</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed italic">
                    "{lesson.analogy}"
                  </p>
                </div>
              )}

              {/* Core Concept Markdown */}
              <div className="prose prose-invert prose-xs max-w-none text-slate-300 space-y-3 leading-relaxed">
                {lesson.explanationMarkdown.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="text-sm font-bold text-white mt-4 pb-1 border-b border-slate-800">
                        {paragraph.replace('### ', '')}
                      </h3>
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

              {/* Fully Solved Worked Example */}
              {lesson.workedExample && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300 flex items-center space-x-1.5">
                      <BookOpen className="w-4 h-4 text-indigo-400" />
                      <span>{lesson.workedExample.title}</span>
                    </span>
                    <button
                      onClick={handleRunWorkedExample}
                      className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold flex items-center space-x-1 shadow transition"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Run Example</span>
                    </button>
                  </div>

                  <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto">
                    <code>{lesson.workedExample.code}</code>
                  </pre>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Line-by-Line Breakdown:
                    </span>
                    <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {lesson.workedExample.explanation}
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center space-x-2">
                    <span className="font-semibold text-slate-500">Output:</span>
                    <code className="text-amber-300 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {lesson.workedExample.expectedOutput}
                    </code>
                  </div>
                </div>
              )}

              {/* Common Pitfalls / Gotchas to Avoid */}
              {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <span className="text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Common Gotchas to Avoid</span>
                  </span>
                  <ul className="space-y-1 text-xs text-amber-200/90 leading-relaxed">
                    {lesson.commonMistakes.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start space-x-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Big CTA to advance to Exercise */}
              <div className="pt-2">
                <button
                  onClick={() => setActiveStage('exercise')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30 transition"
                >
                  <span>I Understand! Take Me to Practice Exercise (2/2)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* ========================================= */
            /* STAGE 2: PRACTICE CHALLENGE & EXERCISE    */
            /* ========================================= */
            <div className="space-y-5">
              {/* Back to Concept link */}
              <button
                onClick={() => setActiveStage('concept')}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline font-medium flex items-center space-x-1"
              >
                <span>← Review Concept & Worked Example</span>
              </button>

              {/* Step-by-Step Goals Checklist */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Your Step-by-Step Mission</span>
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {lesson.exerciseSteps ? (
                    lesson.exerciseSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-2">
                        <span className="w-4 h-4 rounded-full bg-slate-800 text-indigo-300 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Complete the function in the code editor to satisfy all unit tests.
                    </p>
                  )}
                </div>
              </div>

              {/* Hints Accordion */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Hints ({unlockedHints}/{lesson.hints.length})</span>
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

              {/* Solution Reveal */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                <span>Completely stuck?</span>
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
                    Reveal Solution
                  </button>
                )}
              </div>

              {/* Next Lesson Floating Banner if passed */}
              {testResults && testResults.length > 0 && testResults.every(t => t.passed) && nextLesson && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-500/40 space-y-2.5">
                  <div className="flex items-center space-x-2 text-indigo-300 text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Exercise Solved! Advance to Next Topic</span>
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

              {/* Full Course Completed - Certificate Claim Banner */}
              {testResults && testResults.length > 0 && testResults.every(t => t.passed) && !nextLesson && onClaimCertificate && (
                <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-yellow-950/70 border border-amber-500/50 space-y-3 shadow-xl">
                  <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span>Full Course Completed! You earned a Verified Certificate!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    You have passed all lessons and unit tests in <strong>{track.title}</strong>. Claim and download your personalized, cryptographically verified Certificate of Professional Mastery.
                  </p>
                  <button
                    onClick={() => onClaimCertificate(track)}
                    className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30 transition"
                  >
                    <Award className="w-4 h-4" />
                    <span>Claim & Download Certificate</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Split Monaco Editor & Execution Output (7 cols) */}
        <div className="lg:col-span-7 h-full flex flex-col overflow-hidden p-3 gap-3 bg-slate-950">
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
