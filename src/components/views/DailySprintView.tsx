import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Flame, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  ShieldAlert, 
  Trophy, 
  ChevronRight, 
  Clock, 
  Code2, 
  Check
} from 'lucide-react';
import { DAILY_SPRINT_POOL, getDailySprintForDate, DailySprint } from '../../data/dailySprints';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { TestRunner } from '../../services/testRunner';
import { ProgressStorage } from '../../services/progressStorage';
import { UserStats, TestResultItem, ExecutionResult } from '../../types';

interface DailySprintViewProps {
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
  onNavigate: (view: string, payload?: any) => void;
}

export const DailySprintView: React.FC<DailySprintViewProps> = ({
  userStats,
  onStatsUpdate,
  onNavigate
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedSprint, setSelectedSprint] = useState<DailySprint>(() => getDailySprintForDate(todayStr));
  const [code, setCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<TestResultItem[] | null>(null);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [hasSolvedToday, setHasSolvedToday] = useState<boolean>(false);
  const [showArchive, setShowArchive] = useState<boolean>(false);

  const completedDates = userStats.completedDailySprintDates || [];
  const isTodayCompleted = completedDates.includes(todayStr);

  useEffect(() => {
    const saved = ProgressStorage.getSavedCode(`sprint_${selectedSprint.id}`, selectedSprint.starterCode);
    setCode(saved);
    setTestResults(null);
    setExecutionResult(null);
    setHasSolvedToday(completedDates.includes(todayStr));
  }, [selectedSprint.id]);

  const handleRunTests = async () => {
    setIsRunning(true);
    try {
      ProgressStorage.saveCode(`sprint_${selectedSprint.id}`, code);
      const results = await TestRunner.runTests(code, selectedSprint.language, selectedSprint.testCases);
      setTestResults(results);

      const allPassed = results.length > 0 && results.every(r => r.passed);
      if (allPassed) {
        setHasSolvedToday(true);
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 }
        });
        const updated = ProgressStorage.markDailySprintComplete(todayStr, selectedSprint.xpReward);
        onStatsUpdate(updated);
      }
    } catch (err: any) {
      setExecutionResult({
        success: false,
        logs: [],
        error: err?.message || 'Error running daily sprint tests',
        executionTimeMs: 0
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleToggleStreakFreeze = () => {
    const updated = ProgressStorage.toggleStreakFreeze();
    onStatsUpdate(updated);
  };

  // Generate current month days for heatmap calendar
  const now = new Date();
  const currentMonthName = now.toLocaleString('default', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const currentDayNum = now.getDate();

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Top Header Bar */}
      <div className="h-14 border-b border-slate-800 bg-slate-900/90 px-4 flex items-center justify-between select-none">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-white">Daily Code Sprint</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                5-Min Daily Challenge
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Solve one bite-sized coding challenge every day to preserve your streak and earn bonus XP.
            </p>
          </div>
        </div>

        {/* Streak & Power-ups */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggleStreakFreeze}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium border transition ${
              userStats.streakFreezeActive
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title="Streak Freeze protects your streak if you miss a single day"
          >
            <ShieldCheck className={`w-3.5 h-3.5 ${userStats.streakFreezeActive ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span>Streak Freeze: {userStats.streakFreezeActive ? 'Active 🛡️' : 'Equip (Free)'}</span>
          </button>

          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{userStats.streakDays} Day Streak</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Challenge Card, Right Editor */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Calendar & Daily Task (5 cols) */}
        <div className="lg:col-span-5 border-r border-slate-800 bg-slate-900/40 flex flex-col overflow-y-auto p-4 space-y-4">
          {/* Streak Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 p-4 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400">
                  {currentMonthName}
                </span>
                <h3 className="text-base font-extrabold text-white flex items-center space-x-2">
                  <span>Daily Habit Heatmap</span>
                  {isTodayCompleted && (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Today Solved ✓
                    </span>
                  )}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Total Solved</span>
                <p className="text-base font-bold text-amber-400 font-mono">
                  {completedDates.length} Sprints
                </p>
              </div>
            </div>

            {/* Heatmap Mini Calendar */}
            <div className="pt-2">
              <div className="grid grid-cols-7 gap-1 text-center">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-slate-500 uppercase">
                    {day}
                  </span>
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                  const isDone = completedDates.includes(dateStr);
                  const isCurrentDay = dayNum === currentDayNum;

                  return (
                    <div
                      key={dayNum}
                      className={`h-7 rounded-md flex items-center justify-center text-[10px] font-mono font-medium transition ${
                        isDone
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/30'
                          : isCurrentDay
                          ? 'border border-amber-400 text-white bg-amber-500/10'
                          : 'bg-slate-800/50 text-slate-400'
                      }`}
                      title={dateStr}
                    >
                      {isDone ? '🔥' : dayNum}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Today's Challenge Spec */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase">
                  {selectedSprint.language}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                  {selectedSprint.category}
                </span>
              </div>
              <span className="text-amber-400 font-mono font-bold text-xs">
                +{selectedSprint.xpReward} XP
              </span>
            </div>

            <h2 className="text-lg font-bold text-white leading-tight">
              {selectedSprint.title}
            </h2>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
              <p>{selectedSprint.prompt}</p>
            </div>
          </div>

          {/* Solved celebration notification */}
          {hasSolvedToday && (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs space-y-1 animate-fadeIn">
              <div className="flex items-center space-x-2 font-bold text-emerald-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Daily Sprint Completed!</span>
              </div>
              <p>You earned +{selectedSprint.xpReward} XP and your learning streak is preserved for today!</p>
            </div>
          )}

          {/* Sprint Pool Archive Button */}
          <div className="pt-2">
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 font-medium transition"
            >
              <span>{showArchive ? 'Hide Sprint Archive' : 'Browse Past Daily Sprints (Practice Mode)'}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showArchive ? 'rotate-90' : ''}`} />
            </button>

            {showArchive && (
              <div className="mt-2 space-y-1.5 pt-1">
                {DAILY_SPRINT_POOL.map((sprint, idx) => (
                  <button
                    key={sprint.id}
                    onClick={() => setSelectedSprint(sprint)}
                    className={`w-full p-2.5 rounded-lg text-left text-xs border flex items-center justify-between transition ${
                      sprint.id === selectedSprint.id
                        ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-medium truncate">{sprint.title}</span>
                    <span className="text-[10px] text-slate-500 uppercase font-mono">{sprint.language}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Code Editor & Test Results (7 cols) */}
        <div className="lg:col-span-7 flex flex-col overflow-hidden bg-slate-950 p-3 space-y-3">
          {/* Action Bar */}
          <div className="h-10 bg-slate-900 border border-slate-800 rounded-xl px-3 flex items-center justify-between select-none">
            <span className="text-xs font-mono text-slate-400 flex items-center space-x-1.5">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>solution.{selectedSprint.language === 'python' ? 'py' : 'js'}</span>
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setCode(selectedSprint.starterCode);
                  setTestResults(null);
                  setExecutionResult(null);
                }}
                className="px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center space-x-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="px-4 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-amber-500/30 transition"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>{isRunning ? 'Verifying Sprint...' : 'Submit Daily Sprint'}</span>
              </button>
            </div>
          </div>

          {/* Monaco Code Editor */}
          <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden border border-slate-800">
            <CodeEditor
              code={code}
              onChange={setCode}
              language={selectedSprint.language}
              onRun={handleRunTests}
              isRunning={isRunning}
            />
          </div>

          {/* Bottom Output & Test Runner Status */}
          <div className="h-44 rounded-xl overflow-hidden border border-slate-800">
            <OutputPanel
              language={selectedSprint.language}
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
