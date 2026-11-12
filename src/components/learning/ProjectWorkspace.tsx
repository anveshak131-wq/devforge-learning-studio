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
  Hammer
} from 'lucide-react';
import { GuidedProject, ProjectMilestone, ExecutionResult, TestResultItem, UserStats } from '../../types';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { CodeExecutor } from '../../services/codeExecutor';
import { TestRunner } from '../../services/testRunner';
import { SqlSession, TableSchema } from '../../services/sqlEngine';
import { ProgressStorage } from '../../services/progressStorage';

interface ProjectWorkspaceProps {
  project: GuidedProject;
  onBackToProjects: () => void;
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
}

export const ProjectWorkspace: React.FC<ProjectWorkspaceProps> = ({
  project,
  onBackToProjects,
  userStats,
  onStatsUpdate
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const milestone = project.milestones[currentStepIndex];

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
    setCode(ProgressStorage.getSavedCode(milestone.id, milestone.starterCode));
    setExecutionResult(null);
    setTestResults(null);
    setUnlockedHints(0);
  }, [milestone.id]);

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
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });

        // Award milestone XP
        let updated = ProgressStorage.markMilestoneComplete(milestone.id, 75);

        // Check if this was the final milestone of the project!
        const allMilestonesDone = project.milestones.every(m => 
          m.id === milestone.id || updated.completedMilestoneIds.includes(m.id)
        );

        if (allMilestonesDone) {
          updated = ProgressStorage.markProjectComplete(project.id, project.xpReward);
        }

        onStatsUpdate(updated);
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const isMilestoneCompleted = (mId: string) => userStats.completedMilestoneIds.includes(mId);
  const nextMilestone = project.milestones[currentStepIndex + 1];

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Sub-header & Milestones stepper bar */}
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

        {/* Milestone Steps Bar */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {project.milestones.map((m, idx) => {
            const completed = isMilestoneCompleted(m.id);
            const isCurrent = idx === currentStepIndex;

            return (
              <button
                key={m.id}
                onClick={() => setCurrentStepIndex(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : completed
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                {completed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="font-mono text-[10px] w-3.5 text-center">{idx + 1}</span>
                )}
                <span className="hidden md:inline">Milestone {idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Milestone instructions (5 cols) */}
        <div className="lg:col-span-5 h-full overflow-y-auto border-r border-slate-800 p-5 space-y-5 bg-slate-900/40">
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
          {testResults && testResults.every(t => t.passed) && nextMilestone && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Milestone {milestone.stepNumber} Completed!</span>
              </div>
              <button
                onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-600/30 transition"
              >
                <span>Advance to Milestone {milestone.stepNumber + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
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
    </div>
  );
};
