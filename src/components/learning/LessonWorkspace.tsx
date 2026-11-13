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
  Menu,
  X,
  Circle,
  RotateCcw,
  HelpCircle,
  Terminal,
  ExternalLink,
  Search,
  ChevronDown
} from 'lucide-react';
import { Lesson, Track, ExecutionResult, TestResultItem, UserStats } from '../../types';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { CodeExecutor } from '../../services/codeExecutor';
import { TestRunner } from '../../services/testRunner';
import { SqlSession, TableSchema } from '../../services/sqlEngine';
import { ProgressStorage } from '../../services/progressStorage';
import { YouTubePlayer } from '../video/YouTubePlayer';
import { AuthService } from '../../services/authService';

interface LessonWorkspaceProps {
  track: Track;
  lesson: Lesson;
  onNavigateLesson: (lessonId: string) => void;
  onBackToTracks: () => void;
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
  onClaimCertificate?: (track: Track) => void;
  onOpenAdmin?: (trackSlug: string, lessonId: string) => void;
}

export const LessonWorkspace: React.FC<LessonWorkspaceProps> = ({
  track,
  lesson,
  onNavigateLesson,
  onBackToTracks,
  userStats,
  onStatsUpdate,
  onClaimCertificate,
  onOpenAdmin
}) => {
  // Course Outline Sidebar Drawer state
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);
  const [drawerSearch, setDrawerSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => ({
    [lesson.category]: true
  }));

  // Auto-expand current category when lesson changes
  useEffect(() => {
    if (lesson?.category) {
      setExpandedCategories(prev => ({ ...prev, [lesson.category]: true }));
    }
  }, [lesson.id, lesson.category]);

  // Code & Execution state
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

  const getReadySqlSession = async (): Promise<SqlSession | undefined> => {
    if (lesson.language !== 'sql') return undefined;
    if (!sqlSessionRef.current) {
      sqlSessionRef.current = new SqlSession();
    }
    await sqlSessionRef.current.ensureReady(lesson.initSqlSchema);
    setSchemas(sqlSessionRef.current.getSchema());
    return sqlSessionRef.current;
  };

  // Pre-initialize SQL Session if SQL lesson
  useEffect(() => {
    let active = true;
    if (lesson.language === 'sql') {
      getReadySqlSession().then((session) => {
        if (active && session) {
          setSchemas(session.getSchema());
        }
      }).catch(err => {
        console.error('Failed to pre-init SQL session:', err);
      });
    }

    return () => {
      active = false;
    };
  }, [lesson.id, lesson.language, lesson.initSqlSchema]);

  // When lesson changes, reset state
  useEffect(() => {
    setCode(ProgressStorage.getSavedCode(lesson.id, lesson.initialCode));
    setExecutionResult(null);
    setTestResults(null);
    setUnlockedHints(0);
    setShowSolutionConfirm(false);
    setIsOutlineOpen(false);
  }, [lesson.id]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    ProgressStorage.saveCode(lesson.id, newCode);
  };

  const handleRun = async () => {
    setIsRunning(true);
    try {
      const session = await getReadySqlSession();
      const res = await CodeExecutor.executeCode(
        code, 
        lesson.language, 
        session
      );
      setExecutionResult(res);
      if (session) {
        setSchemas(session.getSchema());
      }
    } finally {
      setIsRunning(false);
    }
  };

  // Run the Worked Example (or any additional example) in the console
  const handleRunWorkedExample = async (targetCode?: string) => {
    const codeToRun = targetCode || lesson.workedExample?.code;
    if (!codeToRun) return;
    setIsRunning(true);
    try {
      const session = await getReadySqlSession();
      const res = await CodeExecutor.executeCode(
        codeToRun,
        lesson.language,
        session
      );
      setExecutionResult(res);
    } finally {
      setIsRunning(false);
    }
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      const session = await getReadySqlSession();
      const exec = await CodeExecutor.executeCode(
        code, 
        lesson.language, 
        session
      );
      setExecutionResult(exec);

      const tests = await TestRunner.runTests(
        code, 
        lesson.language, 
        lesson.testCases, 
        session
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
  const completedInTrack = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
  const progressPercent = Math.round((completedInTrack / track.lessons.length) * 100);
  const allTestsPassed = testResults && testResults.length > 0 && testResults.every(t => t.passed);

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans relative">
      {/* Sub-header / Wayfinding bar */}
      <div className="h-12 border-b border-slate-800 bg-slate-900/90 backdrop-blur px-4 flex items-center justify-between text-xs select-none z-20">
        {/* Left: Outline Drawer Toggle + Breadcrumb */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsOutlineOpen(!isOutlineOpen)}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 text-xs font-semibold transition"
            title="Open Course Table of Contents"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>Curriculum ({completedInTrack}/{track.lessons.length})</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-slate-400">
            <button 
              onClick={onBackToTracks}
              className="hover:text-slate-200 transition font-medium"
            >
              {track.title}
            </button>
            <span>/</span>
            <span className="text-white font-semibold truncate max-w-xs">{lesson.title}</span>
          </div>

          {isCompleted && (
            <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
              <CheckCircle2 className="w-3 h-3" />
              <span>Passed</span>
            </span>
          )}
        </div>

        {/* Right: Progress indicator & Prev/Next buttons */}
        <div className="flex items-center space-x-2.5">
          <div className="hidden md:flex items-center space-x-2 text-slate-400">
            <span className="text-[11px] font-mono">{progressPercent}% Completed</span>
            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${track.color}`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => prevLesson && onNavigateLesson(prevLesson.id)}
              disabled={!prevLesson}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 text-xs font-medium flex items-center space-x-1 transition"
              title="Previous Lesson"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <span className="px-2 text-slate-400 font-mono text-[11px]">
              {currentIndex + 1} of {track.lessons.length}
            </span>

            <button
              onClick={() => nextLesson && onNavigateLesson(nextLesson.id)}
              disabled={!nextLesson}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 text-xs font-medium flex items-center space-x-1 transition"
              title="Next Lesson"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Course Outline Drawer */}
      {isOutlineOpen && (
        <div className="absolute inset-y-0 left-0 w-88 max-w-[90vw] sm:w-96 bg-slate-900 border-r border-slate-800 z-30 shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-white">{track.title}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{completedInTrack} of {track.lessons.length} lessons completed</p>
            </div>
            <button
              onClick={() => setIsOutlineOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search box for 100-150 lessons */}
          <div className="p-3 border-b border-slate-800/80 bg-slate-950/40">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={drawerSearch}
                onChange={e => setDrawerSearch(e.target.value)}
                placeholder={`Search ${track.lessons.length} topics...`}
                className="w-full bg-slate-900 text-xs text-white placeholder-slate-500 rounded-lg pl-8 pr-3 py-1.5 border border-slate-700/80 focus:outline-none focus:border-indigo-500"
              />
              {drawerSearch && (
                <button
                  onClick={() => setDrawerSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {drawerSearch.trim() ? (
              <div className="space-y-1">
                {track.lessons
                  .filter(l => 
                    l.title.toLowerCase().includes(drawerSearch.toLowerCase()) ||
                    l.description.toLowerCase().includes(drawerSearch.toLowerCase()) ||
                    (l.concepts && l.concepts.some(c => c.toLowerCase().includes(drawerSearch.toLowerCase())))
                  )
                  .map((l) => {
                    const isCurrent = l.id === lesson.id;
                    const isDone = userStats.completedLessonIds.includes(l.id);
                    return (
                      <button
                        key={l.id}
                        onClick={() => {
                          onNavigateLesson(l.id);
                          setIsOutlineOpen(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition ${
                          isCurrent
                            ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-semibold'
                            : isDone
                            ? 'bg-slate-950/40 text-slate-300 hover:bg-slate-800/60'
                            : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 truncate mr-2">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className={`w-4 h-4 shrink-0 ${isCurrent ? 'text-indigo-400' : 'text-slate-600'}`} />
                          )}
                          <span className="truncate">{l.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 shrink-0">+{l.xp} XP</span>
                      </button>
                    );
                  })}
              </div>
            ) : (
              Object.entries(
                track.lessons.reduce((acc, l) => {
                  const cat = l.category || 'General';
                  if (!acc[cat]) acc[cat] = [];
                  acc[cat].push(l);
                  return acc;
                }, {} as Record<string, Lesson[]>)
              ).map(([categoryName, catLessons]) => {
                const isExpanded = expandedCategories[categoryName] ?? true;
                const completedInCat = catLessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
                const isCatDone = completedInCat === catLessons.length;
                const hasActive = catLessons.some(l => l.id === lesson.id);

                return (
                  <div key={categoryName} className="rounded-xl border border-slate-800/80 bg-slate-950/40 overflow-hidden">
                    <button
                      onClick={() => setExpandedCategories(prev => ({ ...prev, [categoryName]: !isExpanded }))}
                      className="w-full p-2.5 bg-slate-900/80 hover:bg-slate-800/60 text-left flex items-center justify-between transition"
                    >
                      <div className="flex items-center space-x-2 truncate mr-2">
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                        <span className={`text-xs font-bold truncate ${hasActive ? 'text-indigo-300' : 'text-slate-200'}`}>
                          {categoryName}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                        isCatDone 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {completedInCat}/{catLessons.length}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="p-1.5 space-y-1">
                        {catLessons.map((l) => {
                          const isCurrent = l.id === lesson.id;
                          const isDone = userStats.completedLessonIds.includes(l.id);
                          return (
                            <button
                              key={l.id}
                              onClick={() => {
                                onNavigateLesson(l.id);
                                setIsOutlineOpen(false);
                              }}
                              className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between transition ${
                                isCurrent
                                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-semibold'
                                  : isDone
                                  ? 'text-slate-300 hover:bg-slate-800/50'
                                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center space-x-2 truncate mr-2">
                                {isDone ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                ) : (
                                  <Circle className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-indigo-400' : 'text-slate-600'}`} />
                                )}
                                <span className="truncate">{l.title}</span>
                              </div>
                              <span className="text-[10px] font-mono text-slate-500 shrink-0">+{l.xp} XP</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <div className="p-3 border-t border-slate-800 bg-slate-950/60">
            <button
              onClick={() => {
                setIsOutlineOpen(false);
                onBackToTracks();
              }}
              className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium text-center transition"
            >
              ← Back to All Courses
            </button>
          </div>
        </div>
      )}

      {/* Main Workspace Split: Left Guide (5 cols) & Right Editor (7 cols) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* ========================================================= */}
        {/* LEFT COLUMN: THE GUIDE (Concept + Example + Task + Hints) */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 h-full overflow-y-auto border-r border-slate-800 p-5 space-y-6 bg-slate-900/40">
          {/* Header Title & Badges */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Lesson {currentIndex + 1} of {track.lessons.length}
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {lesson.category}
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 flex items-center space-x-1">
                  <Award className="w-3 h-3" />
                  <span>+{lesson.xp} XP</span>
                </span>
              </div>

              {AuthService.isAdmin() && AuthService.isAdminSessionActive() && onOpenAdmin && (
                <button
                  onClick={() => onOpenAdmin(track.slug, lesson.id)}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-[11px] font-semibold flex items-center space-x-1 transition shadow-sm"
                  title="Open this lesson in the Admin Portal"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Admin Edit</span>
                </button>
              )}
            </div>

            <h1 className="text-xl font-extrabold text-white tracking-tight">{lesson.title}</h1>
            <p className="text-xs text-slate-300 leading-relaxed">{lesson.description}</p>
          </div>

          {/* YouTube Video Player (Embedded course lecture if added by admin) */}
          {lesson.videoUrl && (
            <YouTubePlayer
              url={lesson.videoUrl}
              title={`${lesson.title} - Video Lecture`}
              className="mt-2"
            />
          )}

          {/* Real-World Analogy */}
          {lesson.analogy && (
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 space-y-1">
              <div className="flex items-center space-x-1.5 text-indigo-300 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Real-Life Analogy</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{lesson.analogy}"
              </p>
            </div>
          )}

          {/* Step-by-Step Concept Explanation */}
          <div className="prose prose-invert prose-xs max-w-none text-slate-300 space-y-3 leading-relaxed">
            {lesson.explanationMarkdown.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={pIdx} className="text-sm font-bold text-white mt-3 pb-1 border-b border-slate-800">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const codeBlock = lines.slice(1, -1).join('\n');
                return (
                  <pre key={pIdx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs overflow-x-auto">
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

          {/* Worked Example with "Run Example" button */}
          {lesson.workedExample && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-300 flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>{lesson.workedExample.title}</span>
                </span>
                <button
                  onClick={() => handleRunWorkedExample()}
                  className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold flex items-center space-x-1 shadow transition"
                  title="Run this example in the console"
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
                  How it works:
                </span>
                <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {lesson.workedExample.explanation}
                </p>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center space-x-2">
                <span className="font-semibold text-slate-500">Output:</span>
                <code className="text-amber-300 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                  {lesson.workedExample.expectedOutput}
                </code>
              </div>
            </div>
          )}

          {/* Additional Worked Examples (Added by Admins) */}
          {lesson.additionalExamples && lesson.additionalExamples.length > 0 && (
            <div className="space-y-3">
              {lesson.additionalExamples.map((ex, exIdx) => (
                <div key={exIdx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300 flex items-center space-x-1.5">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span>{ex.title || `Worked Example ${exIdx + 2}`}</span>
                    </span>
                    <button
                      onClick={() => handleRunWorkedExample(ex.code)}
                      className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold flex items-center space-x-1 shadow transition"
                      title="Run this example in the console"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Run Example</span>
                    </button>
                  </div>

                  <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto">
                    <code>{ex.code}</code>
                  </pre>

                  {ex.explanation && (
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        How it works:
                      </span>
                      <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                        {ex.explanation}
                      </p>
                    </div>
                  )}

                  {ex.expectedOutput && (
                    <div className="text-[11px] text-slate-400 flex items-center space-x-2">
                      <span className="font-semibold text-slate-500">Output:</span>
                      <code className="text-amber-300 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                        {ex.expectedOutput}
                      </code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Common Mistakes */}
          {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
              <span className="text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>Common Gotchas to Avoid</span>
              </span>
              <ul className="space-y-1 text-xs text-amber-200/90 leading-relaxed">
                {lesson.commonMistakes.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start space-x-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ========================================= */}
          {/* YOUR MISSION (The Practice Checklist)     */}
          {/* ========================================= */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/40 space-y-3 shadow-lg">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>🎯 Your Mission Checklist</span>
            </h4>
            
            <div className="space-y-2 text-xs text-slate-200">
              {lesson.exerciseSteps ? (
                lesson.exerciseSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start space-x-2.5">
                    <span className="w-4 h-4 rounded-full bg-indigo-600 text-white font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-300 leading-relaxed">
                  Write your solution in the code editor on the right and click "Check Answer"!
                </p>
              )}
            </div>
          </div>

          {/* Hints Accordion */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
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
                  Unlock Hint {unlockedHints + 1}
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
          <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
            <span>Completely stuck?</span>
            {showSolutionConfirm ? (
              <div className="flex items-center space-x-2">
                <span className="text-rose-400">Reveal solution into editor?</span>
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

          {/* Next Lesson Celebration Banner */}
          {allTestsPassed && nextLesson && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/40 space-y-2.5 shadow-xl animate-in fade-in duration-300">
              <div className="flex items-center space-x-2 text-emerald-300 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Awesome work! You passed this lesson!</span>
              </div>
              <p className="text-xs text-slate-300">
                You earned <strong>+{lesson.xp} XP</strong>. Ready for the next topic?
              </p>
              <button
                onClick={() => onNavigateLesson(nextLesson.id)}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30 transition"
              >
                <span>Continue to {nextLesson.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Full Course Finished: Certificate Claim Banner */}
          {allTestsPassed && !nextLesson && onClaimCertificate && (
            <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950 via-slate-900 to-yellow-950 border border-amber-500/50 space-y-3 shadow-2xl animate-in fade-in duration-300">
              <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Course Completed! You Earned a Verified Certificate!</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You have solved every lesson and test in <strong>{track.title}</strong>! Claim your personalized, cryptographically signed Certificate of Mastery.
              </p>
              <button
                onClick={() => onClaimCertificate(track)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30 transition"
              >
                <Award className="w-4 h-4" />
                <span>Claim & Download Certificate</span>
              </button>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: CODE EDITOR & OUTPUT CONSOLE                */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 h-full flex flex-col overflow-hidden p-3 gap-3 bg-slate-950">
          {/* Top: Monaco Code Editor */}
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

          {/* Bottom: Console & Test Runner Output */}
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
