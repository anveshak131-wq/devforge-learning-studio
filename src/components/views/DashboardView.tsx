import React from 'react';
import { 
  Zap, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Flame, 
  CheckCircle2, 
  Layers, 
  Clock, 
  BookOpen, 
  Play,
  FileCode2
} from 'lucide-react';
import { UserStats, Track } from '../../types';
import { ALL_TRACKS } from '../../data/courses';
import { ALL_PROJECTS } from '../../data/projects';
import { ProgressStorage } from '../../services/progressStorage';
import { LanguageIcon } from '../common/LanguageIcon';

interface DashboardViewProps {
  userStats: UserStats;
  onNavigate: (view: string, payload?: any) => void;
  onOpenPlacementQuiz: () => void;
  onOpenFlashcards: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userStats,
  onNavigate,
  onOpenPlacementQuiz,
  onOpenFlashcards
}) => {
  const levelInfo = ProgressStorage.getLevelInfo(userStats.xp);

  let totalLessons = 0;
  ALL_TRACKS.forEach(t => totalLessons += t.lessons.length);
  const completedLessonsCount = userStats.completedLessonIds.length;

  // Find next recommended lesson (first uncompleted)
  let nextRecommended: { track: Track; lesson: any } | null = null;
  for (const t of ALL_TRACKS) {
    for (const l of t.lessons) {
      if (!userStats.completedLessonIds.includes(l.id)) {
        nextRecommended = { track: t, lesson: l };
        break;
      }
    }
    if (nextRecommended) break;
  }

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-8 font-sans">
      {/* Friendly Hero Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 md:p-8 overflow-hidden shadow-2xl">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                Level {levelInfo.level} Developer
              </span>
              <span className="flex items-center space-x-1 text-xs text-amber-400 font-medium">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{userStats.streakDays} Day Streak</span>
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Learn Programming with Ease
            </h1>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Step-by-step interactive courses in JavaScript, Python, SQL, and TypeScript. We explain each concept with simple everyday analogies before you write code.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={() => onNavigate('tracks')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Courses</span>
              </button>
              
              <button
                onClick={() => onNavigate('projects')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Build Projects</span>
              </button>

              <button
                onClick={() => onNavigate('vault')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certificates</span>
              </button>
            </div>
          </div>

          {/* XP Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 min-w-[240px] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Your Progress</span>
              <span className="text-amber-400 font-mono font-bold">{userStats.xp} XP</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-white">{levelInfo.title}</span>
                <span className="text-slate-500">{levelInfo.progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-700"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                />
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              {completedLessonsCount} of {totalLessons} lessons completed
            </p>
          </div>
        </div>

        {/* Continue Learning Callout */}
        {nextRecommended && (
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 text-indigo-400 fill-indigo-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                  Pick Up Where You Left Off ({nextRecommended.track.title})
                </span>
                <h4 className="text-sm font-bold text-white">
                  {nextRecommended.lesson.title}
                </h4>
              </div>
            </div>

            <button
              onClick={() => onNavigate('lesson', { trackSlug: nextRecommended!.track.slug, lessonId: nextRecommended!.lesson.id })}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition shrink-0"
            >
              <span>Resume Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 4 Core Language Tracks (1-Click Start) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">Choose What to Learn</h2>
            <p className="text-xs text-slate-400">All courses include interactive code execution, guided exercises, and verifiable certificates.</p>
          </div>
          <button
            onClick={() => onNavigate('tracks')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_TRACKS.map(track => {
            const completedInTrack = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
            const trackPercent = Math.round((completedInTrack / track.lessons.length) * 100);
            const targetLesson = track.lessons.find(l => !userStats.completedLessonIds.includes(l.id)) || track.lessons[0];

            return (
              <div
                key={track.id}
                onClick={() => onNavigate('lesson', { trackSlug: track.slug, lessonId: targetLesson.id })}
                className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 p-5 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${track.color} p-[1px]`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <LanguageIcon language={track.language} className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {completedInTrack}/{track.lessons.length} Lessons
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-indigo-400 transition">
                      {track.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Progress</span>
                    <span className="font-semibold text-slate-200">{trackPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${track.color} transition-all duration-500`}
                      style={{ width: `${trackPercent}%` }}
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                    <span>{completedInTrack > 0 ? 'Continue Lesson' : 'Start from Lesson 1'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real Projects Teaser */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Hands-On Portfolio Projects</h3>
            <p className="text-xs text-slate-400">Put your skills to work by building real-world applications milestone by milestone.</p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_PROJECTS.map(proj => (
            <div
              key={proj.id}
              onClick={() => onNavigate('project-milestone', { projectId: proj.slug })}
              className="cursor-pointer p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group space-y-2.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                  {proj.difficulty}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">{proj.estimatedHours}h</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                {proj.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {proj.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
