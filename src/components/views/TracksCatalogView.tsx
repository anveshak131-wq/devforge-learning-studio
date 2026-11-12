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
  Play,
  Search,
  ChevronDown,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { Track, UserStats, Lesson } from '../../types';
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleModule = (moduleKey: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleKey]: prev[moduleKey] === undefined ? false : !prev[moduleKey]
    }));
  };

  const isModuleOpen = (moduleKey: string, defaultOpen: boolean) => {
    if (searchQuery.trim()) return true; // auto-expand on search
    if (expandedModules[moduleKey] !== undefined) return expandedModules[moduleKey];
    return defaultOpen;
  };

  const totalAllLessons = ALL_TRACKS.reduce((sum, t) => sum + t.lessons.length, 0);

  const filteredTracks = ALL_TRACKS.filter(t => {
    if (selectedLanguage !== 'all' && t.language !== selectedLanguage) return false;
    return true;
  });

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-8 font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Interactive Programming Curriculum
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
              {totalAllLessons}+ In-Depth Topics
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            From absolute beginner to expert level. Each topic features real-world analogies, run-ready worked examples, interactive practice with instant verification, and certification.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shrink-0">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'javascript', label: 'JavaScript (150)' },
            { id: 'python', label: 'Python (110)' },
            { id: 'sql', label: 'SQL' },
            { id: 'typescript', label: 'TypeScript' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedLanguage(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedLanguage === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Global Search across 260+ topics */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={`Search across ${totalAllLessons} interactive topics (e.g., loops, classes, async/await, dictionaries, arrays, joins)...`}
          className="w-full bg-slate-900/90 text-sm text-white placeholder-slate-500 rounded-xl pl-10 pr-10 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500 shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-sm"
          >
            ✕
          </button>
        )}
      </div>

      {/* Tracks List */}
      <div className="space-y-10">
        {filteredTracks.map(track => {
          const completedCount = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
          const nextLesson = track.lessons.find(l => !userStats.completedLessonIds.includes(l.id)) || track.lessons[0];

          // Group track lessons into modules
          const moduleGroups = track.lessons.reduce((acc, lesson) => {
            const cat = lesson.category || 'Core';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(lesson);
            return acc;
          }, {} as Record<string, Lesson[]>);

          const moduleEntries = Object.entries(moduleGroups);

          return (
            <div key={track.id} className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
              {/* Track Title Banner */}
              <div className="p-6 border-b border-slate-800/80 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${track.color} p-[1px]`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                      {track.language === 'javascript' && <Zap className="w-6 h-6 text-amber-400" />}
                      {track.language === 'sql' && <Database className="w-6 h-6 text-cyan-400" />}
                      {track.language === 'typescript' && <ShieldCheck className="w-6 h-6 text-indigo-400" />}
                      {track.language === 'python' && <Terminal className="w-6 h-6 text-emerald-400" />}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xl font-bold text-white">{track.title}</h2>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono">
                        {track.lessons.length} Lessons
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{track.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-xs font-mono text-indigo-400 font-semibold">
                      {completedCount} / {track.lessons.length} Completed
                    </span>
                    <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden mt-1.5">
                      <div
                        className={`h-full bg-gradient-to-r ${track.color}`}
                        style={{ width: `${(completedCount / track.lessons.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectLesson(track.slug, nextLesson.id)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{completedCount > 0 ? 'Resume Course' : 'Start from Lesson 1'}</span>
                  </button>
                </div>
              </div>

              {/* Module Accordions */}
              <div className="p-4 space-y-3 bg-slate-950/40">
                {moduleEntries.map(([moduleName, moduleLessons], modIdx) => {
                  const moduleKey = `${track.id}-${moduleName}`;
                  // Filter lessons if searching
                  const matchingLessons = searchQuery.trim()
                    ? moduleLessons.filter(l => 
                        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        l.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (l.concepts && l.concepts.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
                      )
                    : moduleLessons;

                  if (searchQuery.trim() && matchingLessons.length === 0) {
                    return null;
                  }

                  // Default open first 2 modules or modules with uncompleted work
                  const hasActive = moduleLessons.some(l => l.id === nextLesson.id);
                  const isDefaultOpen = modIdx < 2 || hasActive;
                  const isOpen = isModuleOpen(moduleKey, isDefaultOpen);

                  const moduleCompletedCount = moduleLessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
                  const isModuleFinished = moduleCompletedCount === moduleLessons.length;
                  const totalModuleXp = moduleLessons.reduce((sum, l) => sum + l.xp, 0);

                  return (
                    <div 
                      key={moduleKey}
                      className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden transition"
                    >
                      {/* Module Header Bar */}
                      <button
                        onClick={() => toggleModule(moduleKey)}
                        className="w-full p-3.5 bg-slate-900/80 hover:bg-slate-800/60 flex items-center justify-between text-left transition"
                      >
                        <div className="flex items-center space-x-3">
                          {isOpen ? (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold text-white">{moduleName}</span>
                            <span className="text-xs text-slate-400 font-normal">
                              ({matchingLessons.length} {matchingLessons.length === 1 ? 'topic' : 'topics'})
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-mono text-amber-400/90 hidden sm:inline">
                            +{totalModuleXp} XP
                          </span>
                          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold ${
                            isModuleFinished
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {moduleCompletedCount} / {moduleLessons.length} Done
                          </span>
                        </div>
                      </button>

                      {/* Module Lessons Grid */}
                      {isOpen && (
                        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2.5 border-t border-slate-800/60 bg-slate-950/30">
                          {matchingLessons.map(lesson => {
                            const isDone = userStats.completedLessonIds.includes(lesson.id);
                            return (
                              <div
                                key={lesson.id}
                                onClick={() => onSelectLesson(track.slug, lesson.id)}
                                className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start justify-between space-x-3 group ${
                                  isDone
                                    ? 'bg-slate-950/40 border-emerald-500/30 hover:border-emerald-500/60'
                                    : 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-800/60'
                                }`}
                              >
                                <div className="flex items-start space-x-3 min-w-0">
                                  <div className="mt-0.5 shrink-0">
                                    {isDone ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                      <Circle className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition" />
                                    )}
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition truncate">
                                      {lesson.title}
                                    </h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                      {lesson.description}
                                    </p>
                                    <div className="flex items-center space-x-3 mt-1.5 text-[10px] text-slate-500">
                                      <span className="flex items-center space-x-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{lesson.estimatedMinutes}m</span>
                                      </span>
                                      <span className="text-amber-400 font-mono">+{lesson.xp} XP</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="shrink-0 self-center">
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
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
