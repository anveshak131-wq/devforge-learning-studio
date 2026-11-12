import React from 'react';
import { 
  Code2, 
  Flame, 
  BookOpen, 
  Layers, 
  Sparkles, 
  FileCode2,
  GitFork,
  Brain,
  HelpCircle
} from 'lucide-react';
import { UserStats } from '../../types';
import { ProgressStorage } from '../../services/progressStorage';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, payload?: any) => void;
  userStats: UserStats;
  onOpenFlashcards: () => void;
  onOpenPlacementQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  userStats,
  onOpenFlashcards,
  onOpenPlacementQuiz
}) => {
  const levelInfo = ProgressStorage.getLevelInfo(userStats.xp);

  return (
    <header className="h-14 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none">
      {/* Brand & Nav */}
      <div className="flex items-center space-x-6">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center space-x-2.5 group text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-base text-white tracking-tight">DevForge</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Academy
              </span>
            </div>
            <p className="text-[10px] text-slate-400 -mt-0.5 hidden sm:block">Zero to Masterclass</p>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center space-x-1">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
              currentView === 'dashboard'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => onNavigate('roadmap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
              currentView === 'roadmap'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GitFork className="w-3.5 h-3.5 text-cyan-400" />
            <span>Skill Tree</span>
          </button>

          <button
            onClick={() => onNavigate('tracks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
              currentView === 'tracks' || currentView === 'lesson'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Courses</span>
          </button>

          <button
            onClick={() => onNavigate('projects')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
              currentView === 'projects' || currentView === 'project-milestone'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Guided Projects</span>
          </button>

          <button
            onClick={() => onNavigate('playground')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
              currentView === 'playground'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Playground</span>
          </button>
        </nav>
      </div>

      {/* User Progression Metrics & Utilities */}
      <div className="flex items-center space-x-2.5">
        {/* Flashcards Spaced Repetition Button */}
        <button
          onClick={onOpenFlashcards}
          className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium transition"
          title="Daily Concept Recall Flashcards"
        >
          <Brain className="w-3.5 h-3.5 text-indigo-400" />
          <span>Recall</span>
        </button>

        {/* Diagnostic Placement Quiz CTA */}
        <button
          onClick={onOpenPlacementQuiz}
          className="hidden md:flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition"
          title="Test Your Level (Placement Diagnostic)"
        >
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Placement Test</span>
        </button>

        {/* Streak */}
        <div 
          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium"
          title="Daily Learning Streak"
        >
          <Flame className="w-3.5 h-3.5 fill-amber-500/80 text-amber-500" />
          <span>{userStats.streakDays}d Streak</span>
        </div>

        {/* Level and XP */}
        <div 
          onClick={() => onNavigate('dashboard')}
          className="cursor-pointer hidden sm:flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/40 transition group"
          title={`${userStats.xp} XP total. Next rank at ${levelInfo.nextLevelXp} XP`}
        >
          <div className="w-6 h-6 rounded-md bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[11px] font-bold text-indigo-300">
            L{levelInfo.level}
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] leading-tight space-x-2">
              <span className="font-semibold text-slate-200 group-hover:text-indigo-300 transition">
                {levelInfo.title}
              </span>
              <span className="text-amber-400 font-mono font-medium">{userStats.xp} XP</span>
            </div>
            <div className="w-20 h-1.5 bg-slate-700 rounded-full mt-0.5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${levelInfo.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cheatsheet button */}
        <button
          onClick={() => onNavigate('cheatsheet')}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          title="Quick Syntax Reference"
        >
          <BookOpen className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </header>
  );
};
