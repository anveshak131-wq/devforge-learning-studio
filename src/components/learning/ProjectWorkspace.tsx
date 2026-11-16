import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  Lightbulb, 
  Layers, 
  ArrowRight,
  Hammer,
  Lock,
  ShieldCheck,
  Zap,
  AlertCircle,
  FolderGit2
} from 'lucide-react';
import { GuidedProject, ProjectMilestone, ExecutionResult, TestResultItem, UserStats } from '../../types';
import { User as UserType } from '../../types/auth';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { CodeExecutor } from '../../services/codeExecutor';
import { TestRunner } from '../../services/testRunner';
import { SqlSession, TableSchema } from '../../services/sqlEngine';
import { ProgressStorage } from '../../services/progressStorage';
import { PaymentService } from '../../services/paymentService';
import { ExportRepoModal } from '../modals/ExportRepoModal';

interface ProjectWorkspaceProps {
  project: GuidedProject;
  currentUser?: UserType | null;
  onBackToProjects: () => void;
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
}

export const ProjectWorkspace: React.FC<ProjectWorkspaceProps> = ({
  project,
  currentUser,
  onBackToProjects,
  userStats,
  onStatsUpdate
}) => {
  const [purchaseVersion, setPurchaseVersion] = useState(0);
  const isPurchased = PaymentService.isProjectPurchased(project.id, currentUser);
  const projectPrice = PaymentService.getProjectPrice(project);

  const [purchasingType, setPurchasingType] = useState<'project' | 'bundle' | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Helper: milestone unlocked check
  // Milestone 0 (Milestone 1) is unlocked once purchased.
  // Subsequent milestones require completion of previous milestone.
  const isMilestoneUnlocked = (idx: number) => {
    if (!isPurchased) return false;
    if (idx === 0) return true;
    const prevMilestone = project.milestones[idx - 1];
    return userStats.completedMilestoneIds.includes(prevMilestone.id);
  };

  const isMilestoneCompleted = (mId: string) => userStats.completedMilestoneIds.includes(mId);

  // Default to step 0 or the first incomplete milestone
  const [currentStepIndex, setCurrentStepIndex] = useState(() => {
    const firstIncomplete = project.milestones.findIndex(m => !userStats.completedMilestoneIds.includes(m.id));
    return firstIncomplete >= 0 ? firstIncomplete : 0;
  });

  const milestone = project.milestones[currentStepIndex] || project.milestones[0];

  // Code state per milestone
  const [code, setCode] = useState<string>(() => 
    ProgressStorage.getSavedCode(milestone.id, milestone.starterCode)
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [testResults, setTestResults] = useState<TestResultItem[] | null>(null);
  const [unlockedHints, setUnlockedHints] = useState<number>(0);
  const [schemas, setSchemas] = useState<TableSchema[]>([]);
  const [gatingNotice, setGatingNotice] = useState<string | null>(null);
  
  const sqlSessionRef = useRef<SqlSession | null>(null);

  const getReadySqlSession = async (): Promise<SqlSession | undefined> => {
    if (project.language !== 'sql') return undefined;
    if (!sqlSessionRef.current) {
      sqlSessionRef.current = new SqlSession();
    }
    await sqlSessionRef.current.ensureReady(project.initSqlSchema);
    setSchemas(sqlSessionRef.current.getSchema());
    return sqlSessionRef.current;
  };

  // Initialize SQL if project uses SQL
  useEffect(() => {
    let active = true;
    if (project.language === 'sql') {
      getReadySqlSession().then((session) => {
        if (active && session) {
          setSchemas(session.getSchema());
        }
      });
    }

    return () => {
      active = false;
    };
  }, [project.id, project.language, project.initSqlSchema]);

  // When step changes, load code
  useEffect(() => {
    if (milestone) {
      setCode(ProgressStorage.getSavedCode(milestone.id, milestone.starterCode));
      setExecutionResult(null);
      setTestResults(null);
      setUnlockedHints(0);
      setGatingNotice(null);
    }
  }, [milestone?.id]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    ProgressStorage.saveCode(milestone.id, newCode);
  };

  const handleRun = async () => {
    setIsRunning(true);
    try {
      const session = await getReadySqlSession();
      const res = await CodeExecutor.executeCode(
        code,
        project.language,
        session
      );
      setExecutionResult(res);
      if (session) {
        setSchemas(session.getSchema());
      }
    } catch (err: any) {
      setExecutionResult({
        success: false,
        logs: [{ type: 'error', args: [err.message || 'Execution error'], timestamp: Date.now() }],
        error: err.message || 'Execution error',
        executionTimeMs: 0
      });
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
        project.language,
        session
      );
      setExecutionResult(exec);

      const tests = await TestRunner.runTests(
        code,
        project.language,
        milestone.testCases,
        session
      );
      setTestResults(tests);

      const allPassed = tests.length > 0 && tests.every(t => t.passed);
      if (allPassed) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });

        // Award grounded milestone XP (+50 XP)
        let updated = ProgressStorage.markMilestoneComplete(milestone.id, 50);

        // Check if this was the final milestone of the project!
        const allMilestonesDone = project.milestones.every(m => 
          m.id === milestone.id || updated.completedMilestoneIds.includes(m.id)
        );

        if (allMilestonesDone) {
          updated = ProgressStorage.markProjectComplete(project.id, project.xpReward);
        }

        onStatsUpdate(updated);
      }
    } catch (err: any) {
      setExecutionResult({
        success: false,
        logs: [{ type: 'error', args: [err.message || 'Verification error'], timestamp: Date.now() }],
        error: err.message || 'Verification error',
        executionTimeMs: 0
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleUnlockSingle = () => {
    setPaymentError(null);
    setPurchasingType('project');
    PaymentService.openProjectCheckout({
      project,
      currentUser: currentUser || null,
      onSuccess: () => {
        setPurchasingType(null);
        setPurchaseVersion(v => v + 1);
      },
      onError: (err) => {
        setPurchasingType(null);
        setPaymentError(err);
      }
    });
  };

  const handleUnlockBundle = () => {
    setPaymentError(null);
    setPurchasingType('bundle');
    PaymentService.openAllProjectsBundleCheckout({
      currentUser: currentUser || null,
      onSuccess: () => {
        setPurchasingType(null);
        setPurchaseVersion(v => v + 1);
      },
      onError: (err) => {
        setPurchasingType(null);
        setPaymentError(err);
      }
    });
  };

  // ================= PAYWALL BARRIER VIEW =================
  if (!isPurchased) {
    return (
      <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 font-sans p-6 md:p-12 items-center justify-center">
        {paymentError && (
          <div className="max-w-2xl w-full mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{paymentError}</span>
            </div>
            <button
              onClick={() => setPaymentError(null)}
              className="text-rose-400 hover:text-rose-200 underline text-xs font-semibold ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="max-w-3xl w-full rounded-2xl bg-slate-900/80 border border-indigo-500/30 p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToProjects}
              className="text-xs text-slate-400 hover:text-white transition flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Projects Catalog</span>
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              Paywalled Guided Project
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-800 text-indigo-400 border border-slate-700">
                {project.language}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">
                {project.difficulty}
              </span>
              <span className="text-xs font-mono font-bold text-amber-400 flex items-center space-x-1">
                <Award className="w-3.5 h-3.5" />
                <span>+{project.xpReward} XP</span>
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Sequential Progression Rules */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Curriculum & Milestone Progression</span>
            </h4>
            <div className="space-y-2">
              {project.milestones.map((m, idx) => (
                <div key={m.id} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono flex items-center justify-center text-slate-300">
                      {idx + 1}
                    </span>
                    <span className="text-slate-200 font-medium">{m.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {idx === 0 ? '🟢 Unlocks Immediately upon purchase' : `🔒 Unlocks after Milestone ${idx}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Option */}
          <div className="pt-2">
            <div className="p-6 rounded-xl bg-slate-950/80 border border-indigo-500/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-indigo-400 uppercase font-bold tracking-wider">
                  Course Project Lifetime Access
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl font-black text-white font-mono">₹{projectPrice}</span>
                  <span className="text-xs text-slate-400">One-Time Fee • Lifetime Pass</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Unlocks {project.title} immediately. Milestone 1 will be ready to code with automated unit test grading.
                </p>
              </div>

              <button
                onClick={handleUnlockSingle}
                disabled={purchasingType === 'project'}
                className="w-full md:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition active:scale-95 disabled:opacity-50 shrink-0"
              >
                <Lock className="w-4 h-4 text-indigo-200" />
                <span>{purchasingType === 'project' ? 'Opening Gateway...' : `Unlock Project — ₹${projectPrice}`}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================= ACTIVE WORKSPACE VIEW =================
  const nextMilestone = project.milestones[currentStepIndex + 1];
  const isCurrentStepUnlocked = isMilestoneUnlocked(currentStepIndex);

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Gating Toast Notice */}
      {gatingNotice && (
        <div className="px-4 py-2 bg-amber-950/80 border-b border-amber-500/30 text-amber-200 text-xs flex items-center justify-between animate-fadeIn">
          <div className="flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{gatingNotice}</span>
          </div>
          <button
            onClick={() => setGatingNotice(null)}
            className="text-amber-400 hover:text-amber-200 text-xs underline font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Sub-header & Milestones Stepper Bar */}
      <div className="border-b border-slate-800 bg-slate-900/80 px-4 py-2 flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToProjects}
            className="text-xs text-slate-400 hover:text-white transition flex items-center space-x-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </button>
          <span className="text-slate-600">/</span>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white text-sm">{project.title}</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
              +{project.xpReward} XP
            </span>
          </div>
        </div>

        {/* Milestone Steps Bar with Sequential Gating */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {project.milestones.map((m, idx) => {
            const completed = isMilestoneCompleted(m.id);
            const isCurrent = idx === currentStepIndex;
            const unlocked = isMilestoneUnlocked(idx);

            return (
              <button
                key={m.id}
                onClick={() => {
                  if (!unlocked) {
                    setGatingNotice(`Milestone ${idx + 1} is locked. You must complete and pass Milestone ${idx} first.`);
                    return;
                  }
                  setGatingNotice(null);
                  setCurrentStepIndex(idx);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : completed
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                    : unlocked
                    ? 'bg-slate-800/80 text-slate-300 hover:text-white'
                    : 'bg-slate-900/40 text-slate-600 border border-slate-800/60 cursor-not-allowed opacity-60'
                }`}
                title={unlocked ? (completed ? 'Milestone Completed' : `Milestone ${idx + 1}`) : `Locked — Complete Milestone ${idx} first`}
              >
                {completed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : unlocked ? (
                  <span className="font-mono text-[10px] w-3.5 text-center">{idx + 1}</span>
                ) : (
                  <Lock className="w-3 h-3 text-slate-500" />
                )}
                <span className="hidden md:inline">Milestone {idx + 1}</span>
              </button>
            );
          })}

          <div className="flex items-center pl-2 border-l border-slate-800">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1.5 border border-slate-700/80 transition shadow-sm"
              title="Export as GitHub repository with tests and README"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Export Repo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Milestone instructions (5 cols) */}
        <div className="lg:col-span-5 h-full overflow-y-auto border-r border-slate-800 p-5 space-y-5 bg-slate-900/40">
          {!isCurrentStepUnlocked ? (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-center space-y-4 my-8">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Milestone {currentStepIndex + 1} is Locked</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                DevForge uses sequential engineering milestones. You must successfully pass all automated unit tests for Milestone {currentStepIndex} to unlock this step.
              </p>
              <button
                onClick={() => setCurrentStepIndex(currentStepIndex - 1 >= 0 ? currentStepIndex - 1 : 0)}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition"
              >
                Back to Milestone {currentStepIndex}
              </button>
            </div>
          ) : (
            <>
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  <Hammer className="w-3.5 h-3.5" />
                  <span>Step {milestone.stepNumber} of {project.milestones.length}</span>
                </div>
                <h2 className="text-xl font-extrabold text-white mt-1">{milestone.title}</h2>
              </div>

              {/* Project Goals Checklist */}
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Project Architecture
                </h4>
                <div className="grid grid-cols-1 gap-1 text-xs text-slate-300">
                  {project.whatYouWillBuild.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Instructions Markdown */}
              <div className="prose prose-invert prose-xs max-w-none text-slate-300 space-y-3 leading-relaxed">
                {milestone.instructionMarkdown.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="text-base font-bold text-white mt-3 pb-1 border-b border-slate-800">
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

              {/* Hints Accordion */}
              {milestone.hints && milestone.hints.length > 0 && (
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>Hints ({unlockedHints}/{milestone.hints.length})</span>
                    </span>
                    {unlockedHints < milestone.hints.length && (
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
                      {milestone.hints.slice(0, unlockedHints).map((hint, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs"
                        >
                          <strong>Hint {hIdx + 1}:</strong> {hint}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Next Milestone Banner when tests pass */}
              {testResults && testResults.length > 0 && testResults.every(t => t.passed) && (
                nextMilestone ? (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 space-y-2">
                    <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Milestone {milestone.stepNumber} Verified & Passed! +50 XP Awarded</span>
                    </div>
                    <p className="text-[11px] text-emerald-200/80">
                      Milestone {milestone.stepNumber + 1} has been unlocked for your workspace.
                    </p>
                    <button
                      onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                      className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-600/30 transition"
                    >
                      <span>Advance to Milestone {milestone.stepNumber + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/60 to-indigo-950/60 border border-amber-500/40 space-y-2 text-center">
                    <div className="flex items-center justify-center space-x-2 text-amber-300 text-sm font-bold">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>Project Fully Completed! 🏆</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      You passed all milestones and earned the verified project badge!
                    </p>
                    <div className="flex flex-col gap-2 pt-1">
                      <button
                        onClick={() => setIsExportModalOpen(true)}
                        className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition active:scale-95"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-indigo-200" />
                        <span>Export to GitHub Repository</span>
                      </button>
                      <button
                        onClick={onBackToProjects}
                        className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition"
                      >
                        <span>Back to Projects Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )
              )}
            </>
          )}
        </div>

        {/* Right Column: Editor + Output (7 cols) */}
        <div className="lg:col-span-7 h-full flex flex-col overflow-hidden p-3 gap-3 bg-slate-950">
          <div className="flex-1 min-h-[300px]">
            <CodeEditor
              code={code}
              onChange={handleCodeChange}
              language={project.language}
              onRun={handleRun}
              onVerify={handleVerify}
              onReset={() => handleCodeChange(milestone.starterCode)}
              isRunning={isRunning}
              isVerifying={isVerifying}
              hasTests={milestone.testCases.length > 0}
            />
          </div>

          <div className="h-[260px] min-h-[220px]">
            <OutputPanel
              language={project.language}
              executionResult={executionResult}
              testResults={testResults}
              onClearConsole={() => setExecutionResult(null)}
              schemas={schemas}
            />
          </div>
        </div>
      </div>

      {/* Export to GitHub Repository Modal */}
      <ExportRepoModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        project={project}
        userCode={code}
      />
    </div>
  );
};