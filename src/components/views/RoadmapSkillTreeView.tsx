import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Brain 
} from 'lucide-react';
import { ALL_TRACKS } from '../../data/courses';
import { UserStats, TierLevel, Language } from '../../types';
import { LanguageIcon } from '../common/LanguageIcon';

interface RoadmapSkillTreeViewProps {
  userStats: UserStats;
  onSelectLesson: (trackSlug: string, lessonId: string) => void;
  onOpenPlacementQuiz: () => void;
}

export const RoadmapSkillTreeView: React.FC<RoadmapSkillTreeViewProps> = ({
  userStats,
  onSelectLesson,
  onOpenPlacementQuiz
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript');

  const track = ALL_TRACKS.find(t => t.language === selectedLanguage) || ALL_TRACKS[0];

  const tiers: { level: TierLevel; name: string; description: string; badgeColor: string }[] = [
    {
      level: 1,
      name: 'Tier 1: Foundations (Zero-to-One)',
      description: 'Absolute beginner fundamentals: syntax, data types, environment setup, and basic operations.',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
    },
    {
      level: 2,
      name: 'Tier 2: Core Language Concepts',
      description: 'Control flow, core functions, data structures, and idiomatic conventions.',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20'
    },
    {
      level: 3,
      name: 'Tier 3: Intermediate Mastery',
      description: 'Advanced collections, modules, error handling paradigms, and functional pipelines.',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
    },
    {
      level: 4,
      name: 'Tier 4: Advanced Architecture',
      description: 'Asynchronous workflows, memory safety, interfaces/traits, and system design patterns.',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20'
    },
    {
      level: 5,
      name: 'Tier 5: Masterclass & Systems Capstone',
      description: 'Production deployment, concurrency orchestration, high-performance optimizations, and real-world microservices.',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    }
  ];

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-8 font-sans">
      {/* Top Banner with Diagnostic placement CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              Interactive Skill Tree & Roadmap
            </span>
            <span className="text-xs text-slate-400">Beginner to Staff Engineer</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white">Engineering Mastery Tree</h1>
          <p className="text-xs text-slate-300 max-w-xl">
            A structured visual roadmap across 14 industry tracks. Start at your current skill tier or test your level with the diagnostic quiz.
          </p>
        </div>

        <button
          onClick={onOpenPlacementQuiz}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition shrink-0"
        >
          <Brain className="w-4 h-4 text-cyan-200" />
          <span>Take Placement Quiz</span>
        </button>
      </div>

      {/* Language Switcher Bar */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-4 overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-slate-800">
        {ALL_TRACKS.map(t => {
          const isSelected = selectedLanguage === t.language;
          const shortName = t.title.split(':')[0].replace(/\(.*?\)/g, '').trim();
          return (
            <button
              key={t.id}
              onClick={() => setSelectedLanguage(t.language)}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider flex items-center space-x-2 shrink-0 transition ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <LanguageIcon language={t.language} className="w-3.5 h-3.5" />
              <span>{shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Visual Roadmap Flow */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {tiers.map((tier, tIdx) => {
          const lessonsInTier = track.lessons.filter(l => l.tier === tier.level);
          const completedInTier = lessonsInTier.filter(l => userStats.completedLessonIds.includes(l.id)).length;

          return (
            <div key={tier.level} className="relative">
              {/* Vertical connector line */}
              {tIdx < tiers.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-800 -mb-6 z-0" />
              )}

              <div className="relative z-10 rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-4 shadow-xl">
                {/* Tier Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-base text-indigo-400 shrink-0">
                      T{tier.level}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base font-bold text-white">{tier.name}</h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${tier.badgeColor}`}>
                          Level {tier.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{tier.description}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 self-end sm:self-center">
                    {completedInTier}/{lessonsInTier.length} Completed
                  </span>
                </div>

                {/* Lessons in this tier */}
                <div className="grid grid-cols-1 gap-2.5 pt-2 max-h-96 overflow-y-auto pr-1">
                  {lessonsInTier.map((lesson) => {
                    const isDone = userStats.completedLessonIds.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => onSelectLesson(track.slug, lesson.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between space-x-3 ${
                          isDone
                            ? 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/60'
                            : 'bg-slate-950/70 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/60'
                        }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                          )}
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-slate-200 hover:text-indigo-300 transition truncate block">
                              {lesson.title}
                            </span>
                            <p className="text-[11px] text-slate-400 line-clamp-1">{lesson.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 shrink-0">
                          <span className="text-[11px] font-mono text-amber-400">+{lesson.xp} XP</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
