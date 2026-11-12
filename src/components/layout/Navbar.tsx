import React, { useState } from 'react';
import { 
  Code2, 
  Flame, 
  BookOpen, 
  Layers, 
  Sparkles, 
  FileCode2,
  GitFork,
  Brain,
  Award,
  User as UserIcon,
  LogOut,
  ChevronDown,
  LogIn,
  Compass
} from 'lucide-react';
import { UserStats } from '../../types';
import { User as UserType } from '../../types/auth';
import { ProgressStorage } from '../../services/progressStorage';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, payload?: any) => void;
  userStats: UserStats;
  currentUser: UserType | null;
  onOpenFlashcards: () => void;
  onOpenPlacementQuiz: () => void;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  userStats,
  currentUser,
  onOpenFlashcards,
  onOpenPlacementQuiz,
  onOpenAuth,
  onLogout
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const levelInfo = ProgressStorage.getLevelInfo(userStats.xp);

  return (
    <header className="h-14 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none">
      {/* Brand & Main Navigation */}
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
            <p className="text-[10px] text-slate-400 -mt-0.5 hidden sm:block">Learn to Code with Ease</p>
          </div>
        </button>

        {/* Core Navigation Tabs (Simple & Frictionless) */}
        <nav className="hidden md:flex items-center space-x-1">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              currentView === 'dashboard'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          <button
            onClick={() => onNavigate('tracks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
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
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              currentView === 'projects' || currentView === 'project-milestone'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Projects</span>
          </button>

          <button
            onClick={() => onNavigate('playground')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              currentView === 'playground'
                ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Playground</span>
          </button>

          <button
            onClick={() => onNavigate('vault')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              currentView === 'vault'
                ? 'bg-slate-800 text-amber-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Certificates</span>
          </button>

          {/* Extra Study Tools Dropdown */}
          <div className="relative">
            <button
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 flex items-center space-x-1 transition"
            >
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tools</span>
              <ChevronDown className="w-3 h-3 ml-0.5" />
            </button>

            {toolsDropdownOpen && (
              <div 
                className="absolute left-0 mt-1.5 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-1 z-50 text-xs"
                onMouseLeave={() => setToolsDropdownOpen(false)}
              >
                <button
                  onClick={() => { setToolsDropdownOpen(false); onNavigate('roadmap'); }}
                  className="w-full px-3.5 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-2"
                >
                  <GitFork className="w-4 h-4 text-cyan-400" />
                  <span>Skill Tree Roadmap</span>
                </button>
                <button
                  onClick={() => { setToolsDropdownOpen(false); onOpenFlashcards(); }}
                  className="w-full px-3.5 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-2"
                >
                  <Brain className="w-4 h-4 text-indigo-400" />
                  <span>Recall Flashcards</span>
                </button>
                <button
                  onClick={() => { setToolsDropdownOpen(false); onOpenPlacementQuiz(); }}
                  className="w-full px-3.5 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Placement Quiz</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Right: Metrics & Account */}
      <div className="flex items-center space-x-2.5">
        {/* Streak */}
        <div 
          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium"
          title="Daily Learning Streak"
        >
          <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>{userStats.streakDays}d Streak</span>
        </div>

        {/* Level and XP */}
        <div 
          onClick={() => onNavigate('dashboard')}
          className="cursor-pointer hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/40 transition group"
          title={`${userStats.xp} XP total. Next rank at ${levelInfo.nextLevelXp} XP`}
        >
          <div className="w-5 h-5 rounded bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-300">
            L{levelInfo.level}
          </div>
          <div>
            <div className="flex items-center justify-between text-[10px] leading-tight space-x-1.5">
              <span className="font-semibold text-slate-200 group-hover:text-indigo-300 transition truncate max-w-[80px]">
                {levelInfo.title.split(' ')[0]}
              </span>
              <span className="text-amber-400 font-mono font-medium">{userStats.xp} XP</span>
            </div>
            <div className="w-16 h-1 bg-slate-700 rounded-full mt-0.5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                style={{ width: `${levelInfo.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* User Account / Sign In */}
        {currentUser ? (
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center space-x-2 p-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition"
            >
              <img
                src={currentUser.avatarUrl}
                alt={currentUser.fullName}
                className="w-6 h-6 rounded-md bg-slate-950"
              />
              <span className="text-xs font-semibold text-white hidden md:inline truncate max-w-[100px]">
                {currentUser.fullName.split(' ')[0]}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-1.5 z-50 text-xs">
                <div className="px-3.5 py-2 border-b border-slate-800">
                  <p className="font-bold text-white truncate">{currentUser.fullName}</p>
                  <p className="text-[10px] text-slate-400 truncate">{currentUser.email}</p>
                </div>
                <button
                  onClick={() => { setProfileDropdownOpen(false); onNavigate('vault'); }}
                  className="w-full px-3.5 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-2"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>My Certificates</span>
                </button>
                <button
                  onClick={() => { setProfileDropdownOpen(false); onLogout(); }}
                  className="w-full px-3.5 py-2 text-left text-rose-300 hover:bg-rose-950/30 flex items-center space-x-2 border-t border-slate-800"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
};
