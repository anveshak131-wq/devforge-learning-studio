import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Bug, 
  GitPullRequest, 
  GitMerge, 
  CheckCircle2, 
  XCircle, 
  Play, 
  RotateCcw, 
  HelpCircle, 
  AlertTriangle, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { ALL_BUG_CHALLENGES, BugChallenge } from '../../data/bugChallenges';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { TestRunner } from '../../services/testRunner';
import { ProgressStorage } from '../../services/progressStorage';
import { UserStats, TestResultItem, ExecutionResult } from '../../types';

interface BugHunterViewProps {
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
  onBackToDashboard: () => void;
}

export const BugHunterView: React.FC<BugHunterViewProps> = ({
  userStats,
  onStatsUpdate,
  onBackToDashboard
}) => {
  const [selectedBugId, setSelectedBugId] = useState<string>(ALL_BUG_CHALLENGES[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [code, setCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<TestResultItem[] | null>(null);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [successBanner, setSuccessBanner] = useState<boolean>(false);

  const activeBug = ALL_BUG_CHALLENGES.find(b => b.id === selectedBugId) || ALL_BUG_CHALLENGES[0];
  const completedBugIds = userStats.completedBugIds || [];
  const isCompleted = completedBugIds.includes(activeBug.id);

  // Initialize or switch code when active bug changes
  useEffect(() => {
    const saved = ProgressStorage.getSavedCode(`bug_${activeBug.id}`, activeBug.initialBrokenCode);
    setCode(saved);
    setTestResults(null);
    setExecutionResult(null);
    setShowHint(false);
    setSuccessBanner(isCompleted);
  }, [activeBug.id]);

  const filteredBugs = selectedCategory === 'All' 
    ? ALL_BUG_CHALLENGES 
    : ALL_BUG_CHALLENGES.filter(b => b.category === selectedCategory);

  const categories = ['All', 'Frontend', 'Backend', 'Security', 'Core'];

  const handleRunTests = async () => {
    setIsRunning(true);
    setSuccessBanner(false);

    try {
      ProgressStorage.saveCode(`bug_${activeBug.id}`, code);
      const results = await TestRunner.runTests(code, activeBug.language, activeBug.testCases);
      setTestResults(results);

      const allPassed = results.length > 0 && results.every(r => r.passed);

      if (allPassed) {
        setSuccessBanner(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        const updated = ProgressStorage.markBugComplete(activeBug.id, activeBug.xpReward);
        onStatsUpdate(updated);
      }
    } catch (err: any) {
      setExecutionResult({
        success: false,
        logs: [],
        error: err?.message || 'Error executing tests',
        executionTimeMs: 0
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleResetCode = () => {
    if (confirm('Reset to the initial broken Pull Request code?')) {
      setCode(activeBug.initialBrokenCode);
      ProgressStorage.saveCode(`bug_${activeBug.id}`, activeBug.initialBrokenCode);
      setTestResults(null);
      setExecutionResult(null);
      setSuccessBanner(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Top Header Bar */}
      <div className="h-14 border-b border-slate-800 bg-slate-900/90 px-4 flex items-center justify-between select-none">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
            <Bug className="w-4 h-4 text-rose-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-white">Bug Hunter Arena</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                PR Debugging Simulator
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Diagnose and patch real-world production defects, race conditions, and security leaks.
            </p>
          </div>
        </div>

        {/* Solved Counter */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">
              <strong className="text-white">{completedBugIds.length}</strong> / {ALL_BUG_CHALLENGES.length} Bugs Patched
            </span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Arena */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Bug List & Navigation (3 cols) */}
        <div className="lg:col-span-3 border-r border-slate-800 bg-slate-900/50 flex flex-col overflow-hidden">
          {/* Category Filter */}
          <div className="p-3 border-b border-slate-800 flex items-center space-x-1.5 overflow-x-auto text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bug List Items */}
          <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
            {filteredBugs.map(bug => {
              const bugSolved = completedBugIds.includes(bug.id);
              const isSelected = bug.id === activeBug.id;

              return (
                <div
                  key={bug.id}
                  onClick={() => setSelectedBugId(bug.id)}
                  className={`cursor-pointer p-3 rounded-xl border transition group ${
                    isSelected
                      ? 'bg-rose-950/40 border-rose-500/50 shadow-md shadow-rose-950/40'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono text-slate-400 flex items-center space-x-1">
                      <GitPullRequest className="w-3 h-3 text-rose-400" />
                      <span>PR #{bug.prNumber}</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                      {bug.category}
                    </span>
                  </div>

                  <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-rose-200' : 'text-slate-200 group-hover:text-white'}`}>
                    {bug.title}
                  </h4>

                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-amber-400 font-mono font-medium">+{bug.xpReward} XP</span>
                    {bugSolved ? (
                      <span className="flex items-center space-x-1 text-emerald-400 font-semibold text-[10px]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Fixed & Merged</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 text-rose-400 font-semibold text-[10px]">
                        <XCircle className="w-3 h-3" />
                        <span>Failing CI</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Column: PR Details & Incident Report (4 cols) */}
        <div className="lg:col-span-4 border-r border-slate-800 bg-slate-950 flex flex-col overflow-y-auto p-4 space-y-4">
          {/* PR Header */}
          <div className="space-y-2 pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                isCompleted 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}>
                {isCompleted ? <GitMerge className="w-3 h-3" /> : <GitPullRequest className="w-3 h-3" />}
                <span>{isCompleted ? 'PR Merged' : `PR #${activeBug.prNumber} Open`}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">branch: {activeBug.branch}</span>
            </div>

            <h2 className="text-lg font-bold text-white leading-tight">
              {activeBug.title}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              {activeBug.tagline}
            </p>
          </div>

          {/* Success Banner */}
          {successBanner && (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs space-y-1 animate-fadeIn">
              <div className="flex items-center space-x-2 font-bold text-emerald-300 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pull Request Merged Successfully!</span>
              </div>
              <p>All automated diagnostic test cases passed cleanly. +{activeBug.xpReward} XP awarded!</p>
            </div>
          )}

          {/* Incident Report */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Production Incident Ticket</span>
            </h3>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
              {activeBug.reportedIssue}
            </div>
          </div>

          {/* Observed Symptoms */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Observed Symptoms & Regression Logs
            </h3>
            <ul className="space-y-1.5">
              {activeBug.symptoms.map((sym, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <span>{sym}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hint Dropdown */}
          <div className="pt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 font-medium transition"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? 'Hide Diagnostic Hint' : 'Need a Hint? (Architecture Clue)'}</span>
            </button>
            {showHint && (
              <div className="mt-2 p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
                {activeBug.hint}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Code Editor & Test Results (5 cols) */}
        <div className="lg:col-span-5 flex flex-col overflow-hidden bg-slate-950 p-3 space-y-3">
          {/* Action Bar */}
          <div className="h-10 bg-slate-900 border border-slate-800 rounded-xl px-3 flex items-center justify-between select-none">
            <span className="text-xs font-mono text-slate-400 flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5 text-rose-400" />
              <span>patch_{activeBug.id}.{activeBug.language === 'python' ? 'py' : 'js'}</span>
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleResetCode}
                className="px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center space-x-1"
                title="Reset to broken starter code"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset PR</span>
              </button>

              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="px-3.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-rose-600/30 transition"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{isRunning ? 'Running CI Tests...' : 'Run CI Checks'}</span>
              </button>
            </div>
          </div>

          {/* Monaco Code Editor */}
          <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden border border-slate-800">
            <CodeEditor
              code={code}
              onChange={setCode}
              language={activeBug.language}
              onRun={handleRunTests}
              onReset={handleResetCode}
              isRunning={isRunning}
            />
          </div>

          {/* Bottom Output & Test Runner Status */}
          <div className="h-44 rounded-xl overflow-hidden border border-slate-800">
            <OutputPanel
              language={activeBug.language}
              executionResult={executionResult}
              testResults={testResults}
              onClearConsole={() => {
                setExecutionResult(null);
                setTestResults(null);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
