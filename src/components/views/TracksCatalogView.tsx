import React, { useState } from 'react';
import { 
  Zap, 
  Database, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Clock, 
  Award,
  Filter,
  Brain
} from 'lucide-react';
import { Track, UserStats, TierLevel } from '../../types';
import { ALL_TRACKS } from '../../data/courses';

interface TracksCatalogViewProps {
  userStats: UserStats;
  onSelectLesson: (trackSlug: string, lessonId: string) => void;
  onOpenPlacementQuiz: () => void;
}

export const TracksCatalogView: React.FC<TracksCatalogViewProps> = ({
  userStats,
  onSelectLesson,
  onOpenPlacementQuiz
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredTracks = ALL_TRACKS.filter(t => {
    if (selectedLanguage !== 'all' && t.language !== selectedLanguage) return false;
    return true;
  });

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-6 font-sans">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Comprehensive Course Tracks
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Zero to Masterclass: Choose your language and skill tier from absolute beginner to senior architect.
          </p>
        </div>

        <button
          onClick={onOpenPlacementQuiz}
          className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-1.5 transition self-start md:self-auto"
        >
          <Brain className="w-3.5 h-3.5 text-cyan-400" />
          <span>Diagnostic Placement</span>
        </button>
      </div>

      {/* Dual Filter Bars (Language & Tier) */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-4 justify-between">
        {/* Language filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
          <span className="text-xs text-slate-400 font-semibold mr-1">Language:</span>
          {['all', 'javascript', 'sql', 'typescript', 'python'].map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider font-mono transition ${
                selectedLanguage === lang
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Tier filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
          <span className="text-xs text-slate-400 font-semibold mr-1">Tier:</span>
          {[
            { id: 'all', label: 'All Tiers' },
            { id: '1', label: 'T1: Foundations' },
            { id: '2', label: 'T2: Core' },
            { id: '3', label: 'T3: Intermediate' },
            { id: '4', label: 'T4: Advanced' },
            { id: '5', label: 'T5: Masterclass' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTier(t.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedTier === t.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tracks List */}
      <div className="space-y-8">
        {filteredTracks.map(track => {
          const visibleLessons = track.lessons.filter(l => 
            selectedTier === 'all' || String(l.tier) === selectedTier
          );

          if (visibleLessons.length === 0) return null;

          const completedCount = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;

          return (
            <div key={track.id} className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
              {/* Track Title Banner */}
              <div className="p-5 border-b border-slate-800/80 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${track.color} p-[1px]`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                      {track.language === 'javascript' && <Zap className="w-5 h-5 text-amber-400" />}
                      {track.language === 'sql' && <Database className="w-5 h-5 text-cyan-400" />}
                      {track.language === 'typescript' && <ShieldCheck className="w-5 h-5 text-indigo-400" />}
                      {track.language === 'python' && <Terminal className="w-5 h-5 text-emerald-400" />}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{track.title}</h2>
                    <p className="text-xs text-slate-400">{track.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-indigo-400">
                    {completedCount} / {track.lessons.length} Completed
                  </span>
                  <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${track.color}`}
                      style={{ width: `${(completedCount / track.lessons.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lesson Items Grid */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {visibleLessons.map((lesson, idx) => {
                  const isDone = userStats.completedLessonIds.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => onSelectLesson(track.slug, lesson.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition flex items-start justify-between space-x-3 ${
                        isDone
                          ? 'bg-slate-950/40 border-emerald-500/30 hover:border-emerald-500/60'
                          : 'bg-slate-950/80 border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-0.5">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-bold border border-slate-700">
                              T{lesson.tier}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                              {lesson.tierName}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-white mt-1 hover:text-indigo-300 transition">
                            {lesson.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                            {lesson.description}
                          </p>
                          <div className="flex items-center space-x-3 mt-2 text-[11px] text-slate-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{lesson.estimatedMinutes}m</span>
                            </span>
                            <span className="text-amber-400 font-mono">+{lesson.xp} XP</span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 self-center">
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
