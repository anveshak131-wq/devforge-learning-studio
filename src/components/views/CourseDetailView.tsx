import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Award, 
  Sparkles, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  BookOpen, 
  Layers, 
  ExternalLink, 
  ShieldCheck,
  Zap,
  TrendingUp,
  FileCode2,
  Lock
} from 'lucide-react';
import { Track, UserStats, Lesson, TierLevel } from '../../types';
import { User } from '../../types/auth';
import { PaymentService } from '../../services/paymentService';
import { LanguageIcon } from '../common/LanguageIcon';
import { TRACK_OFFICIAL_DOCS } from '../../utils/lessonResources';
import { CourseQuiz } from '../../types/quiz';
import { QuizService } from '../../services/quizService';
import { CourseQuizModal } from '../quiz/CourseQuizModal';
import { ProctoredExamModal } from '../quiz/ProctoredExamModal';
import { ExamEngine } from '../../services/examEngine';

interface CourseDetailViewProps {
  track: Track;
  userStats: UserStats;
  onSelectLesson: (trackSlug: string, lessonId: string) => void;
  onBackToTracks: () => void;
  onClaimCertificate?: (track: Track) => void;
  onViewCertificate?: (trackId: string) => void;
  currentUser?: User | null;
  onOpenAuth?: () => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  track,
  userStats,
  onSelectLesson,
  onBackToTracks,
  onClaimCertificate,
  onViewCertificate,
  currentUser = null,
  onOpenAuth = () => {}
}) => {
  const [coursePurchased, setCoursePurchased] = useState(() => PaymentService.isCoursePurchased(track.id, currentUser));
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<CourseQuiz | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [quizRefreshKey, setQuizRefreshKey] = useState(0);

  useEffect(() => {
    setCoursePurchased(PaymentService.isCoursePurchased(track.id, currentUser));
  }, [track.id, currentUser]);

  const handleUnlockCourse = () => {
    setCheckoutLoading(true);
    PaymentService.openCheckout({
      track,
      currentUser: currentUser || null,
      onSuccess: () => {
        setCheckoutLoading(false);
        setCoursePurchased(true);
      },
      onError: (err) => {
        setCheckoutLoading(false);
        alert(err);
      }
    });
  };
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const completedCount = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
  const progressPercent = Math.round((completedCount / track.lessons.length) * 100);
  const isCompleted = completedCount === track.lessons.length && track.lessons.length > 0;
  const nextLesson = track.lessons.find(l => !userStats.completedLessonIds.includes(l.id)) || track.lessons[0];
  const officialDocs = TRACK_OFFICIAL_DOCS[track.language];

  // Course Quizzes & Certification Exams (Python, SQL)
  const [isProctoredModalOpen, setIsProctoredModalOpen] = useState(false);
  const trackQuizzes = QuizService.getQuizzes(track.id);
  const finalExam = QuizService.getFinalExam(track.id);
  const quizProgress = QuizService.getTrackQuizProgress(track.id);
  const examStatus = ExamEngine.getTrackExamStatus(track.id);

  const handleOpenQuiz = (quizToOpen: CourseQuiz) => {
    setActiveQuiz(quizToOpen);
    setIsQuizModalOpen(true);
  };

  // Group lessons by category (Module)
  const moduleGroups = track.lessons.reduce((acc, lesson) => {
    const cat = lesson.category || 'Core';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(lesson);
    return acc;
  }, {} as Record<string, Lesson[]>);

  const moduleEntries = Object.entries(moduleGroups);

  const toggleModule = (moduleKey: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleKey]: prev[moduleKey] === undefined ? false : !prev[moduleKey]
    }));
  };

  const isModuleOpen = (moduleKey: string, defaultOpen: boolean) => {
    if (searchQuery.trim() || selectedTier !== 'all') return true; // auto-expand on search or tier filter
    if (expandedModules[moduleKey] !== undefined) return expandedModules[moduleKey];
    return defaultOpen;
  };

  // Filter lessons based on search and tier
  const filterLesson = (lesson: Lesson) => {
    if (selectedTier !== 'all' && lesson.tier !== selectedTier) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = lesson.title.toLowerCase().includes(q);
      const matchDesc = lesson.description?.toLowerCase().includes(q);
      const matchConcept = lesson.concepts?.some(c => c.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchConcept;
    }
    return true;
  };

  const tierStats = [
    { tier: 1, name: 'Tier 1: Foundations', badge: 'Beginner' },
    { tier: 2, name: 'Tier 2: Core', badge: 'Beginner' },
    { tier: 3, name: 'Tier 3: Intermediate', badge: 'Intermediate' },
    { tier: 4, name: 'Tier 4: Advanced', badge: 'Advanced' },
    { tier: 5, name: 'Tier 5: Masterclass', badge: 'Expert' },
  ];

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur sticky top-0 z-20 px-6 py-3 flex items-center justify-between">
        <button
          onClick={onBackToTracks}
          className="text-xs font-semibold text-slate-400 hover:text-white transition flex items-center space-x-1.5 group"
        >
          <ArrowLeft className="w-4 h-4 transition transform group-hover:-translate-x-0.5" />
          <span>All Courses</span>
          <span className="text-slate-600">/</span>
          <span className="text-indigo-400">{track.title}</span>
        </button>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-slate-400">
            {completedCount} / {track.lessons.length} Completed ({progressPercent}%)
          </span>
          {officialDocs && (
            <a
              href={officialDocs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-300 transition flex items-center space-x-1"
              title="Official Documentation"
            >
              <span>{officialDocs.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Course Header Card */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${track.color} p-[1px] shrink-0 shadow-lg`}>
                <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                  <LanguageIcon language={track.language} className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {track.language.toUpperCase()} TRACK
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300">
                    {track.lessons.length} Interactive Topics
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {coursePurchased ? 'Full Course Unlocked' : '₹199 Lifetime Pass (Topics 1–3 Free)'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    +{track.lessons.length * 20} XP Total
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Verified Certificate Included</span>
                  </span>
                </div>

                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  {track.title}
                </h1>
                <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                  {track.description || track.tagline}
                </p>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              {!coursePurchased && (
                <button
                  onClick={handleUnlockCourse}
                  disabled={checkoutLoading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30 transition transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>{checkoutLoading ? 'Opening Checkout...' : 'Unlock Full Course — ₹199'}</span>
                </button>
              )}

              <button
                onClick={() => onSelectLesson(track.slug, nextLesson.id)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{completedCount > 0 ? `Resume at Lesson ${track.lessons.findIndex(l => l.id === nextLesson.id) + 1}` : 'Start from Lesson 1'}</span>
              </button>

              {isCompleted && onClaimCertificate && (
                <button
                  onClick={() => onClaimCertificate(track)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30 transition transform hover:scale-[1.02]"
                >
                  <Award className="w-4 h-4" />
                  <span>Claim Certificate</span>
                </button>
              )}
            </div>
          </div>

          {/* Progress Bar & Curriculum Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-400 font-medium">Your Progress</span>
                  <span className="font-mono font-bold text-indigo-400">{progressPercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500" 
                    style={{ width: `${progressPercent}%` }} 
                  />
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Mastery Standard</p>
                <p className="text-xs font-bold text-slate-200 mt-0.5">5 Progression Tiers</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Interactive Execution</p>
                <p className="text-xs font-bold text-slate-200 mt-0.5">Instant Automated Test Suite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tier Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto max-w-full pb-1 scrollbar-thin scrollbar-thumb-slate-800">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition shrink-0 ${
                selectedTier === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Topics ({track.lessons.length})
            </button>
            {tierStats.map(t => {
              const countInTier = track.lessons.filter(l => l.tier === t.tier).length;
              const isSelected = selectedTier === t.tier;
              return (
                <button
                  key={t.tier}
                  onClick={() => setSelectedTier(t.tier)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition shrink-0 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {t.name} ({countInTier})
                </button>
              );
            })}
          </div>

          {/* Topic Search within this course */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search in ${track.title.split(':')[0]}...`}
              className="w-full bg-slate-900 text-xs text-white placeholder-slate-500 rounded-xl pl-9 pr-8 py-2 border border-slate-800 focus:outline-none focus:border-indigo-500 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Course Assessments & Final Certification Exam (Python & SQL) */}
        {finalExam && (
          <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 p-5 md:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wider">
                    🏆 Proctored Certification Exam
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    300-Question Exam Bank
                  </span>
                  {examStatus.bestScore !== null ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Best Score: {examStatus.bestScore}% ({examStatus.bestGrade || 'Passed'})
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">
                      20 Questions • 25 Mins • 1st Attempt Free
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white">
                  {finalExam.title}
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  {finalExam.subtitle || 'Pass with 70%+ to unlock and stamp your official assessment score onto your verified certificate.'}
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] text-slate-400 font-mono">
                  <span>Attempts: {examStatus.attemptsCount} / {examStatus.maxAttempts}</span>
                  <span>•</span>
                  <span>Checkpoints: {quizProgress.completedCount}/{Math.max(1, trackQuizzes.length - 1)} Completed</span>
                  {quizProgress.averageScore > 0 && <span>• Checkpoint Avg: {quizProgress.averageScore}%</span>}
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={() => {
                  if (track.id === 'python' || track.id === 'sql') {
                    setIsProctoredModalOpen(true);
                  } else {
                    handleOpenQuiz(finalExam);
                  }
                }}
                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 transition cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>{examStatus.attemptsCount > 0 ? 'Open Certification Exam' : 'Start Final Exam'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Modules & Lessons Syllabus Accordion */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Course Syllabus & Learning Path</span>
            </h2>
            <span className="text-xs text-slate-400">
              {moduleEntries.length} Modules • {track.lessons.length} Total Topics
            </span>
          </div>

          <div className="space-y-3">
            {moduleEntries.map(([moduleName, moduleLessons], modIdx) => {
              const moduleKey = `${track.id}-${moduleName}`;
              const filteredModuleLessons = moduleLessons.filter(filterLesson);
              if (filteredModuleLessons.length === 0 && (searchQuery || selectedTier !== 'all')) {
                return null;
              }

              const modCompleted = moduleLessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
              const isModAllCompleted = modCompleted === moduleLessons.length;
              const isOpen = isModuleOpen(moduleKey, modIdx === 0 || modIdx === 1);

              return (
                <div
                  key={moduleKey}
                  className="rounded-xl bg-slate-900/60 border border-slate-800/80 overflow-hidden shadow-lg transition"
                >
                  {/* Module Header Bar */}
                  <button
                    onClick={() => toggleModule(moduleKey)}
                    className="w-full px-5 py-3.5 bg-slate-900/90 hover:bg-slate-850 flex items-center justify-between text-left transition select-none"
                  >
                    <div className="flex items-center space-x-3">
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4 text-indigo-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-bold text-white">{moduleName}</h3>
                          {isModAllCompleted && (
                            <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              Completed
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {moduleLessons.length} topics • Module {modIdx + 1} of {moduleEntries.length}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-mono text-slate-400">
                        {modCompleted} / {moduleLessons.length} Done
                      </span>
                    </div>
                  </button>

                  {/* Lessons List inside this Module */}
                  {isOpen && (
                    <div className="divide-y divide-slate-800/50 bg-slate-950/60">
                      {filteredModuleLessons.map((lesson) => {
                        const isLessonDone = userStats.completedLessonIds.includes(lesson.id);
                        const isNext = lesson.id === nextLesson.id;
                        const lessonIdx = track.lessons.findIndex(l => l.id === lesson.id);
                        const isFree = lessonIdx < 3;

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => onSelectLesson(track.slug, lesson.id)}
                            className={`px-5 py-3 flex items-center justify-between hover:bg-slate-900/80 cursor-pointer transition group ${
                              isNext ? 'bg-indigo-950/20 border-l-2 border-indigo-500' : ''
                            }`}
                          >
                            <div className="flex items-start space-x-3.5 min-w-0 pr-4">
                              <div className="mt-0.5 shrink-0">
                                {isLessonDone ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                ) : !isFree && !coursePurchased ? (
                                  <Lock className="w-4 h-4 text-amber-400" />
                                ) : isNext ? (
                                  <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center animate-pulse">
                                    <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                                  </div>
                                ) : (
                                  <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition" />
                                )}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center space-x-2">
                                  <span className={`text-xs font-semibold truncate ${
                                    isLessonDone ? 'text-slate-300' : isNext ? 'text-white font-bold' : 'text-slate-200'
                                  }`}>
                                    {lesson.title}
                                  </span>
                                  {isFree ? (
                                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                      Free Preview
                                    </span>
                                  ) : !coursePurchased ? (
                                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center space-x-0.5">
                                      <Lock className="w-2.5 h-2.5" />
                                      <span>₹199</span>
                                    </span>
                                  ) : null}
                                  {lesson.tierName && (
                                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono text-slate-400 bg-slate-800">
                                      {lesson.tierName}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 truncate mt-0.5 max-w-xl">
                                  {lesson.description}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3 shrink-0 text-xs text-slate-500">
                              <span className="flex items-center space-x-1 font-mono text-[11px]">
                                <Clock className="w-3 h-3 text-slate-500" />
                                <span>{lesson.estimatedMinutes || 4}m</span>
                              </span>
                              <span className="font-mono text-[11px] text-indigo-400">
                                +{lesson.xp || 20} XP
                              </span>
                              <button
                                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition ${
                                  isNext
                                    ? 'bg-indigo-600 text-white'
                                    : !isFree && !coursePurchased && !isLessonDone
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    : 'bg-slate-800 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white'
                                }`}
                              >
                                <span>
                                  {isLessonDone
                                    ? 'Review'
                                    : !isFree && !coursePurchased
                                    ? 'Unlock'
                                    : isNext
                                    ? 'Continue'
                                    : 'Start'}
                                </span>
                                <Play className="w-2.5 h-2.5 fill-current" />
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {/* Module Checkpoint Quiz (if available for Python / SQL) */}
                      {(() => {
                        const modQuiz = QuizService.getModuleCheckpoint(track.id, moduleName);
                        if (!modQuiz) return null;
                        const best = QuizService.getBestAttempt(modQuiz.id);

                        return (
                          <div className="px-5 py-3.5 bg-slate-900/50 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs font-bold text-white">{modQuiz.title}</span>
                                  {best && (
                                    <span className={`px-2 py-0.2 rounded text-[10px] font-bold ${
                                      best.passed 
                                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                    }`}>
                                      {best.passed ? `Score: ${best.scorePercent}%` : `${best.scorePercent}% (Review)`}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400">
                                  {modQuiz.questions.length} questions • Test syntax, tricky bugs & output prediction (+{modQuiz.xpReward} XP)
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => handleOpenQuiz(modQuiz)}
                              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shrink-0 transition flex items-center space-x-1.5 shadow-sm"
                            >
                              <span>{best ? 'Retake Checkpoint' : 'Take Checkpoint'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Course Quiz Modal (Module Checkpoints) */}
      <CourseQuizModal
        isOpen={isQuizModalOpen}
        quiz={activeQuiz}
        onClose={() => {
          setIsQuizModalOpen(false);
          setQuizRefreshKey((k) => k + 1);
        }}
        onViewCertificate={onViewCertificate}
      />

      {/* Proctored 300-Question Final Certification Exam */}
      {(track.id === 'python' || track.id === 'sql') && (
        <ProctoredExamModal
          isOpen={isProctoredModalOpen}
          trackId={track.id as 'python' | 'sql'}
          courseTitle={track.title}
          onClose={() => {
            setIsProctoredModalOpen(false);
            setQuizRefreshKey((k) => k + 1);
          }}
          onViewCertificate={() => onViewCertificate?.(track.id)}
        />
      )}
    </div>
  );
};
