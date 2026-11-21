import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Play, 
  Search, 
  BookOpen,
  Award,
  Sparkles,
  Layers,
  ChevronRight,
  Key,
  ShieldCheck
} from 'lucide-react';
import { Track, UserStats } from '../../types';
import { CourseStorageService } from '../../services/courseStorageService';
import { LanguageIcon } from '../common/LanguageIcon';
import { ExamBankModal } from '../quiz/ExamBankModal';

interface TracksCatalogViewProps {
  userStats: UserStats;
  onSelectLesson: (trackSlug: string, lessonId: string) => void;
  onSelectTrack: (trackSlug: string) => void;
  onOpenPlacementQuiz: () => void;
}

export const TracksCatalogView: React.FC<TracksCatalogViewProps> = ({
  userStats,
  onSelectLesson,
  onSelectTrack,
  onOpenPlacementQuiz,
}) => {
  const [tracks, setTracks] = useState<Track[]>(() => CourseStorageService.getTracks());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExamBankOpen, setIsExamBankOpen] = useState<boolean>(false);

  useEffect(() => {
    return CourseStorageService.subscribe(() => {
      setTracks(CourseStorageService.getTracks());
    });
  }, []);

  const totalAllLessons = tracks.reduce((sum, t) => sum + t.lessons.length, 0);

  // Groupings for intuitive category filtering
  const categories = [
    { id: 'all', label: 'All Tracks', count: tracks.length },
    { id: 'web', label: 'Web & Frontend', languages: ['javascript', 'typescript', 'react', 'html', 'css', 'nodejs'] },
    { id: 'data', label: 'Data Science & AI', languages: ['python', 'r', 'sql'] },
    { id: 'systems', label: 'Systems & Cloud', languages: ['cpp', 'java', 'golang', 'rust', 'cloud', 'docker', 'bash'] },
    { id: 'cs', label: 'Computer Science & Security', languages: ['dsa', 'git', 'python'] },
  ];

  const filteredTracks = tracks.filter(t => {
    // Category filter
    if (selectedCategory !== 'all') {
      const cat = categories.find(c => c.id === selectedCategory);
      if (cat?.languages && !cat.languages.includes(t.language) && !cat.languages.includes(t.id)) {
        return false;
      }
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchTagline = t.tagline.toLowerCase().includes(q);
      const matchDesc = t.description?.toLowerCase().includes(q);
      const matchLang = t.language.toLowerCase().includes(q);
      return matchTitle || matchTagline || matchDesc || matchLang;
    }

    return true;
  });

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-8 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Banner */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Interactive Career Curriculum
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
                {totalAllLessons}+ In-Depth Topics Across {tracks.length} Dedicated Courses
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Select any course to explore its dedicated syllabus, progression tiers, and interactive coding playground. Each course awards a verified mastery certificate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            <button
              onClick={() => setIsExamBankOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-purple-500/20 hover:from-amber-500/30 hover:via-indigo-500/30 hover:to-purple-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center space-x-2 transition shadow-lg cursor-pointer"
              title="Explore all 300 certification exam questions with verified answers"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>300-Question Exam Bank & Answers</span>
            </button>

            <button
              onClick={onOpenPlacementQuiz}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-indigo-500/30 text-indigo-300 text-xs font-semibold flex items-center space-x-2 transition shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Diagnostic Placement Quiz</span>
            </button>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full scrollbar-thin scrollbar-thumb-slate-800">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Global Search across courses */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={`Search ${tracks.length} courses (e.g., Python, SQL, Modern C++, Kubernetes, R, Docker, React, DSA)...`}
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

      {/* Course Grid: 20 Dedicated Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map(track => {
          const completedCount = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
          const progressPercent = Math.round((completedCount / track.lessons.length) * 100);
          const isDone = completedCount === track.lessons.length && track.lessons.length > 0;
          const nextLesson = track.lessons.find(l => !userStats.completedLessonIds.includes(l.id)) || track.lessons[0];

          return (
            <div
              key={track.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-indigo-500/5 group"
            >
              {/* Card Top Banner */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${track.color} p-[1px] shadow-lg group-hover:scale-105 transition transform`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                      <LanguageIcon language={track.language} className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 flex-wrap gap-y-1 justify-end">
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] font-bold font-mono">
                      ₹199 Pass
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {track.lessons.length} Topics
                    </span>
                    {isDone && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h2 
                    onClick={() => onSelectTrack(track.slug)}
                    className="text-lg font-bold text-white group-hover:text-indigo-300 transition cursor-pointer"
                  >
                    {track.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {track.description || track.tagline}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-indigo-400 font-bold">{completedCount} / {track.lessons.length} ({progressPercent}%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${track.color}`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectTrack(track.slug)}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition flex items-center space-x-1 group/link"
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>View Syllabus</span>
                  <ChevronRight className="w-3 h-3 transition transform group-hover/link:translate-x-0.5" />
                </button>

                <button
                  onClick={() => onSelectLesson(track.slug, nextLesson.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>{completedCount > 0 ? 'Resume' : 'Start'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 300-Question Exam Bank & Answers Modal */}
      <ExamBankModal
        isOpen={isExamBankOpen}
        onClose={() => setIsExamBankOpen(false)}
      />
    </div>
  );
};
