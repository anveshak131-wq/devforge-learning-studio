import React, { useState, useMemo } from 'react';
import {
  Trophy,
  Award,
  Flame,
  Zap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  User,
  Sparkles,
  Crown,
  Eye,
  EyeOff,
  Filter,
  CheckCircle2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { LeaderboardPeriod, LeaderboardTrackFilter } from '../../types/leaderboard';
import { LeaderboardService } from '../../services/leaderboardService';

interface LeaderboardViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ onNavigate }) => {
  const [period, setPeriod] = useState<LeaderboardPeriod>('all_time');
  const [trackFilter, setTrackFilter] = useState<LeaderboardTrackFilter>('all');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(() => LeaderboardService.isAnonymous());

  // Current entries
  const entries = useMemo(() => {
    return LeaderboardService.getLeaderboard(period, trackFilter);
  }, [period, trackFilter, isAnonymous]);

  // Standing of current user
  const userStanding = useMemo(() => {
    return LeaderboardService.getCurrentUserStanding(period, trackFilter);
  }, [period, trackFilter, isAnonymous, entries]);

  const top1 = entries[0];
  const top2 = entries[1];
  const top3 = entries[2];
  const restEntries = entries.slice(3);

  const togglePrivacy = () => {
    const next = !isAnonymous;
    setIsAnonymous(next);
    LeaderboardService.setAnonymous(next);
  };

  return (
    <div className="min-h-full flex flex-col bg-slate-950 font-sans text-slate-200 pb-28">
      
      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-indigo-950/40 via-slate-900/60 to-slate-950 pt-10 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>DevForge Global Leaderboard</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Global Developer Rankings
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Every point is earned by writing code. Advance through league tiers by completing daily lessons (+15 XP), passing quizzes (+25 XP), and earning Gold Distinctions (+100 XP).
            </p>
          </div>

          {/* Period & Track Filter Segmented Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            {/* Period Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setPeriod('all_time')}
                className={`px-4 py-2 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  period === 'all_time'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Crown className="w-3.5 h-3.5" />
                <span>All-Time Hall of Fame</span>
              </button>

              <button
                onClick={() => setPeriod('weekly')}
                className={`px-4 py-2 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  period === 'weekly'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Weekly Sprint (Mon-Sun)</span>
              </button>
            </div>

            {/* Track Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setTrackFilter('all')}
                className={`px-3.5 py-2 rounded-lg font-bold transition ${
                  trackFilter === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌐 Global All Tracks
              </button>

              <button
                onClick={() => setTrackFilter('python')}
                className={`px-3.5 py-2 rounded-lg font-bold transition ${
                  trackFilter === 'python'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🐍 Python Masters
              </button>

              <button
                onClick={() => setTrackFilter('sql')}
                className={`px-3.5 py-2 rounded-lg font-bold transition ${
                  trackFilter === 'sql'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🐬 SQL Architects
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full mt-8 space-y-8">
        
        {/* ================================================================= */}
        {/* TOP 3 PODIUM */}
        {/* ================================================================= */}
        {entries.length >= 3 && (
          <div className="pt-8 pb-4">
            <div className="flex items-end justify-center gap-2 sm:gap-6 max-w-2xl mx-auto">
              
              {/* RANK 2: SILVER */}
              {top2 && (
                <div className="flex-1 flex flex-col items-center">
                  <div className="relative mb-3 flex flex-col items-center">
                    <span className="text-xl mb-1">🥈</span>
                    <img
                      src={top2.avatarUrl}
                      alt={top2.fullName}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-slate-400 object-cover shadow-xl bg-slate-900"
                    />
                    <span className="absolute -bottom-2 bg-slate-400 text-slate-950 text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full shadow-md">
                      #2
                    </span>
                  </div>

                  <div className="text-center space-y-0.5 max-w-[140px]">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {top2.fullName}
                    </h4>
                    <div className="text-[11px] font-mono font-bold text-slate-300">
                      {(period === 'weekly' ? top2.weeklyXp : top2.totalXp).toLocaleString()} XP
                    </div>
                    {top2.distinctionBadge && (
                      <span className="text-[10px] text-slate-400 block font-mono">
                        {top2.distinctionBadge} Seal 🥈
                      </span>
                    )}
                  </div>

                  {/* 2nd Place Pedestal Block */}
                  <div className="w-full h-24 sm:h-28 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/80 rounded-t-2xl border-t-2 border-slate-400/80 mt-4 flex items-center justify-center shadow-lg">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-500/40">2</span>
                  </div>
                </div>
              )}

              {/* RANK 1: GOLD CHAMPION */}
              {top1 && (
                <div className="flex-1 flex flex-col items-center -mt-6">
                  <div className="relative mb-3 flex flex-col items-center">
                    <span className="text-2xl mb-1 animate-bounce">👑</span>
                    <img
                      src={top1.avatarUrl}
                      alt={top1.fullName}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-amber-400 object-cover shadow-2xl shadow-amber-500/20 bg-slate-900 ring-4 ring-amber-400/20"
                    />
                    <span className="absolute -bottom-2 bg-amber-400 text-slate-950 text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                      #1
                    </span>
                  </div>

                  <div className="text-center space-y-0.5 max-w-[150px]">
                    <h4 className="text-sm sm:text-base font-extrabold text-amber-300 truncate">
                      {top1.fullName}
                    </h4>
                    <div className="text-xs sm:text-sm font-mono font-extrabold text-amber-400">
                      {(period === 'weekly' ? top1.weeklyXp : top1.totalXp).toLocaleString()} XP
                    </div>
                    {top1.distinctionBadge && (
                      <span className="text-[10px] text-amber-300/80 block font-mono font-bold">
                        🥇 Gold Distinction
                      </span>
                    )}
                  </div>

                  {/* 1st Place Pedestal Block */}
                  <div className="w-full h-32 sm:h-36 bg-gradient-to-t from-amber-950/40 via-amber-900/30 to-slate-800 rounded-t-2xl border-t-2 border-amber-400 mt-4 flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-transparent pointer-events-none" />
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-amber-400/40">1</span>
                  </div>
                </div>
              )}

              {/* RANK 3: BRONZE */}
              {top3 && (
                <div className="flex-1 flex flex-col items-center">
                  <div className="relative mb-3 flex flex-col items-center">
                    <span className="text-xl mb-1">🥉</span>
                    <img
                      src={top3.avatarUrl}
                      alt={top3.fullName}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-amber-700/80 object-cover shadow-xl bg-slate-900"
                    />
                    <span className="absolute -bottom-2 bg-amber-700 text-white text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full shadow-md">
                      #3
                    </span>
                  </div>

                  <div className="text-center space-y-0.5 max-w-[140px]">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {top3.fullName}
                    </h4>
                    <div className="text-[11px] font-mono font-bold text-amber-600">
                      {(period === 'weekly' ? top3.weeklyXp : top3.totalXp).toLocaleString()} XP
                    </div>
                    {top3.distinctionBadge && (
                      <span className="text-[10px] text-slate-400 block font-mono">
                        {top3.distinctionBadge} Seal
                      </span>
                    )}
                  </div>

                  {/* 3rd Place Pedestal Block */}
                  <div className="w-full h-20 sm:h-24 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/80 rounded-t-2xl border-t-2 border-amber-700/80 mt-4 flex items-center justify-center shadow-lg">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-500/40">3</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* LEAGUE TIERS OVERVIEW BAR */}
        {/* ================================================================= */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-white">Grounded League Tiers:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              🥉 Foundations (0–500 XP)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
              🥈 Practitioner (501–1,500 XP)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
              🥇 Specialist (1,501–2,500 XP)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-300 border border-amber-800/40 font-bold">
              💎 Master (2,501+ XP)
            </span>
          </div>

          {/* Privacy Toggle */}
          <button
            onClick={togglePrivacy}
            className="text-[11px] text-slate-400 hover:text-white flex items-center space-x-1.5 transition underline font-mono"
            title="Toggle between showing your real name or anonymous developer handle"
          >
            {isAnonymous ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isAnonymous ? 'Privacy: Anonymous Handle' : 'Privacy: Public Name'}</span>
          </button>
        </div>

        {/* ================================================================= */}
        {/* RANKS 4+ TABLE */}
        {/* ================================================================= */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 w-16 text-center">Rank</th>
                  <th className="py-3 px-4">Developer</th>
                  <th className="py-3 px-4">League Tier</th>
                  <th className="py-3 px-4">Lessons Done</th>
                  <th className="py-3 px-4">Streak</th>
                  <th className="py-3 px-4">Distinction</th>
                  <th className="py-3 px-4 text-right">Total XP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {entries.map((entry) => {
                  const score = period === 'weekly' ? entry.weeklyXp : entry.totalXp;

                  return (
                    <tr
                      key={entry.userId}
                      className={`transition ${
                        entry.isCurrentUser
                          ? 'bg-indigo-950/40 border-l-4 border-l-indigo-500 font-semibold'
                          : 'hover:bg-slate-800/30'
                      }`}
                    >
                      {/* Rank */}
                      <td className="py-3.5 px-4 font-mono font-bold text-center">
                        {entry.rank === 1 ? (
                          <span className="text-amber-400 font-extrabold">🥇 1</span>
                        ) : entry.rank === 2 ? (
                          <span className="text-slate-300 font-extrabold">🥈 2</span>
                        ) : entry.rank === 3 ? (
                          <span className="text-amber-600 font-extrabold">🥉 3</span>
                        ) : (
                          <span className="text-slate-500">#{entry.rank}</span>
                        )}
                      </td>

                      {/* Developer Profile */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={entry.avatarUrl}
                            alt={entry.fullName}
                            className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 object-cover shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-bold text-white flex items-center space-x-1.5 truncate">
                              <span>{entry.fullName}</span>
                              {entry.isCurrentUser && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                                  YOU
                                </span>
                              )}
                              {entry.isDemo && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                  🧪 TEST
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* League Tier */}
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          entry.tierName === 'Master'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : entry.tierName === 'Specialist'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : entry.tierName === 'Practitioner'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}>
                          {entry.tierName}
                        </span>
                      </td>

                      {/* Completed Lessons */}
                      <td className="py-3.5 px-4 font-mono text-slate-300">
                        {entry.completedLessonsCount} Topics
                      </td>

                      {/* Streak */}
                      <td className="py-3.5 px-4 font-mono">
                        <div className="flex items-center space-x-1 text-rose-400">
                          <Flame className="w-3.5 h-3.5" />
                          <span>{entry.streakDays}d</span>
                        </div>
                      </td>

                      {/* Distinction Badge */}
                      <td className="py-3.5 px-4">
                        {entry.distinctionBadge === 'Gold' ? (
                          <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            <span>🥇 Gold Distinction</span>
                          </span>
                        ) : entry.distinctionBadge === 'Silver' ? (
                          <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                            <span>🥈 Honors</span>
                          </span>
                        ) : (
                          <span className="text-slate-600 text-[10px] font-mono">—</span>
                        )}
                      </td>

                      {/* Total XP */}
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-white text-sm">
                        {score.toLocaleString()} XP
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ================================================================= */}
      {/* STICKY FOOTER: YOUR CURRENT STANDING & NEXT LESSON GRIND */}
      {/* ================================================================= */}
      {userStanding && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-indigo-500/30 p-3 sm:p-4 shadow-2xl">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Left: Your Avatar & Rank Info */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={userStanding.entry.avatarUrl}
                  alt={userStanding.entry.fullName}
                  className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover bg-slate-800"
                />
                <span className="absolute -bottom-1 -right-1 bg-indigo-600 text-white text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full border border-slate-900">
                  #{userStanding.rank}
                </span>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white">{userStanding.entry.fullName}</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {userStanding.entry.tierName} League
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {userStanding.xpToNextRank > 0 ? (
                    <span>
                      Only <strong className="text-amber-400 font-mono">+{userStanding.xpToNextRank} XP</strong> needed to overtake{' '}
                      <strong className="text-white">{userStanding.nextRankUser || 'the next rank'}</strong>!
                    </span>
                  ) : (
                    <span className="text-emerald-400 font-semibold">🎉 You are in 1st Place Champion standing!</span>
                  )}
                </p>
              </div>
            </div>

            {/* Right: Grind XP Button */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-mono font-bold text-white">
                  {(period === 'weekly' ? userStanding.entry.weeklyXp : userStanding.entry.totalXp).toLocaleString()} XP
                </div>
                <div className="text-[10px] text-slate-400">
                  {userStanding.entry.streakDays} Day Streak 🔥
                </div>
              </div>

              <button
                onClick={() => onNavigate('tracks')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-indigo-500/20 transition shrink-0"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Grind Next Lesson (+15 XP)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
