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
  Play, 
  Layers, 
  Code2, 
  Hammer,
  Clock,
  TrendingUp
} from 'lucide-react';
import { UserStats, Track, GuidedProject } from '../../types';
import { ALL_TRACKS } from '../../data/courses';
import { ALL_PROJECTS } from '../../data/projects';
import { ALL_BADGES } from '../../data/badges';
import { ProgressStorage } from '../../services/progressStorage';

interface DashboardViewProps {
  userStats: UserStats;
  onNavigate: (view: string, payload?: any) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ userStats, onNavigate }) => {
  const levelInfo = ProgressStorage.getLevelInfo(userStats.xp);

  // Calculate overall stats
  let totalLessons = 0;
  ALL_TRACKS.forEach(t => totalLessons += t.lessons.length);
  const completedLessonsCount = userStats.completedLessonIds.length;
  const progressPercent = Math.round((completedLessonsCount / Math.max(1, totalLessons)) * 100);

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
      {/* Hero Progression Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 md:p-8 overflow-hidden shadow-2xl">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                Level {levelInfo.level} Developer
              </span>
              <span className="flex items-center space-x-1 text-xs text-amber-400 font-medium">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{userStats.streakDays} Day Streak</span>
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Welcome to DevForge Studio
            </h1>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Master JavaScript, SQL, TypeScript, and Python through hands-on coding challenges and real-world projects.
            </p>
          </div>

          {/* XP & Level progress card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 min-w-[240px] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Rank Progress</span>
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
              {levelInfo.nextLevelXp - userStats.xp} XP until next rank
            </p>
          </div>
        </div>

        {/* Next Lesson Callout */}
        {nextRecommended && (
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                  Recommended Next Step
                </span>
                <h4 className="text-sm font-bold text-white">
                  {nextRecommended.lesson.title} ({nextRecommended.track.title})
                </h4>
              </div>
            </div>

            <button
              onClick={() => onNavigate('lesson', { trackSlug: nextRecommended!.track.slug, lessonId: nextRecommended!.lesson.id })}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition shrink-0"
            >
              <span>Continue Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Language Tracks Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Interactive Language Tracks</h2>
            <p className="text-xs text-slate-400">Curated curricula with in-browser sandboxes and automated assertions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_TRACKS.map(track => {
            const completedInTrack = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
            const trackPercent = Math.round((completedInTrack / track.lessons.length) * 100);

            return (
              <div
                key={track.id}
                onClick={() => onNavigate('lesson', { trackSlug: track.slug, lessonId: track.lessons[0].id })}
                className="group cursor-pointer rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 p-5 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${track.color} p-[1px]`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        {track.language === 'javascript' && <Zap className="w-5 h-5 text-amber-400" />}
                        {track.language === 'sql' && <Database className="w-5 h-5 text-cyan-400" />}
                        {track.language === 'typescript' && <ShieldCheck className="w-5 h-5 text-indigo-400" />}
                        {track.language === 'python' && <Terminal className="w-5 h-5 text-emerald-400" />}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {completedInTrack}/{track.lessons.length} Done
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

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Mastery</span>
                    <span className="font-semibold text-slate-200">{trackPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${track.color} transition-all duration-500`}
                      style={{ width: `${trackPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guided Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Guided Real-World Projects</h2>
            <p className="text-xs text-slate-400">Step-by-step milestones to construct production-ready applications</p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ALL_PROJECTS.map(project => {
            const completedCount = project.milestones.filter(m => userStats.completedMilestoneIds.includes(m.id)).length;
            const isCompleted = userStats.completedProjectIds.includes(project.id);

            return (
              <div
                key={project.id}
                onClick={() => onNavigate('project-milestone', { projectId: project.id })}
                className="group cursor-pointer rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 p-5 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-800 text-indigo-400 border border-slate-700">
                        {project.language}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400">
                        {project.difficulty}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center space-x-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>+{project.xpReward} XP</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-base group-hover:text-indigo-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.skillsLearned.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{project.estimatedHours}h Est.</span>
                  </span>

                  <span className="font-medium text-indigo-400 flex items-center space-x-1 group-hover:translate-x-0.5 transition">
                    <span>{isCompleted ? 'Review Project' : 'Build Project'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges / Achievements Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Achievements & Skill Badges</h2>
            <p className="text-xs text-slate-400">Earn badges as you write queries, type-safe structures, and build apps</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ALL_BADGES.map(badge => {
            const unlocked = badge.condition(userStats);
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-xl border flex flex-col items-center text-center space-y-2 transition ${
                  unlocked
                    ? 'bg-slate-900/80 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-950/40 border-slate-800/60 opacity-40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${unlocked ? badge.color : 'from-slate-800 to-slate-900'} p-[1px]`}>
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                    <Award className={`w-5 h-5 ${unlocked ? 'text-amber-400' : 'text-slate-600'}`} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">{badge.title}</h4>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
