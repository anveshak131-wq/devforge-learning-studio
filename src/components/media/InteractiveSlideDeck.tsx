import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Printer, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Lightbulb, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { Lesson } from '../../types';
import { printLessonPdf } from '../../utils/lessonResources';

interface InteractiveSlideDeckProps {
  lesson: Lesson;
  trackTitle?: string;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onJumpToEditor?: () => void;
  className?: string;
}

export const InteractiveSlideDeck: React.FC<InteractiveSlideDeckProps> = ({
  lesson,
  trackTitle = 'DevForge Course',
  isFullscreen = false,
  onToggleFullscreen,
  onJumpToEditor,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const cleanExplanation = lesson.explanationMarkdown
    .replace(/^###\s+.*$/m, '')
    .trim();

  return (
    <div className={`relative flex flex-col bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl select-none ${className}`}>
      {/* Slide Deck Top Header */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2.5">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1.5">
            <Layers className="w-3 h-3" />
            <span>Interactive Slide Deck</span>
          </span>
          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
            Slide {currentSlide + 1} of {totalSlides}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Download PDF button */}
          <button
            type="button"
            onClick={() => printLessonPdf(lesson, trackTitle)}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-[11px] font-semibold flex items-center space-x-1.5 transition border border-slate-700"
            title="Download lesson as printable PDF study sheet"
          >
            <Printer className="w-3 h-3 text-indigo-400" />
            <span>PDF Guide</span>
          </button>

          {/* Fullscreen toggle */}
          {onToggleFullscreen && (
            <button
              type="button"
              onClick={onToggleFullscreen}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title={isFullscreen ? 'Exit Fullscreen' : 'Present in Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div className="relative flex-1 p-6 sm:p-10 flex flex-col justify-center min-h-[340px] bg-gradient-to-br from-slate-950 via-slate-900/60 to-slate-950 overflow-y-auto">
        {/* SLIDE 1: Title & Overview */}
        {currentSlide === 0 && (
          <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[11px] font-bold">
                {lesson.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] font-semibold">
                Tier: {lesson.tierName || 'Foundations'}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                +{lesson.xp} XP
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {lesson.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lesson.description}
            </p>

            {lesson.concepts && lesson.concepts.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Key Concepts in This Lesson
                </span>
                <div className="flex flex-wrap gap-2">
                  {lesson.concepts.map((concept, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-cyan-300"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SLIDE 2: Real-World Analogy */}
        {currentSlide === 1 && (
          <div className="space-y-5 max-w-2xl mx-auto animate-in fade-in duration-200">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Mental Model &amp; Intuition</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              How to think about this concept:
            </h3>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-900 border border-indigo-500/40 shadow-xl space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase text-indigo-400 tracking-wider">
                Real-Life Analogy
              </div>
              <p className="text-base sm:text-lg text-indigo-100 font-medium italic leading-relaxed">
                "{lesson.analogy || 'A foundational building block that computers execute step-by-step from top to bottom.'}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <div className="font-bold text-white flex items-center space-x-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>Why this matters in software engineering:</span>
              </div>
              <p>
                Every complex software system is built by combining these fundamental operations. Master the mental model first, and the code syntax follows effortlessly.
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 3: Syntax Blueprint */}
        {currentSlide === 2 && (
          <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-200">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Syntax Blueprint</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Rules of the Language
            </h3>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-slate-300">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Language Rulebook</div>
              <p className="leading-relaxed font-sans text-xs text-slate-300">
                {cleanExplanation.slice(0, 300)}
                {cleanExplanation.length > 300 ? '...' : ''}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="font-bold text-white">Pro Tip:</span>
              <p>
                Pay attention to quote matching, casing, and indentation. Computers execute precisely what you write!
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 4: Worked Example */}
        {currentSlide === 3 && (
          <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-200">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Worked Example</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {lesson.workedExample?.title || 'Hands-On Code Walkthrough'}
            </h3>

            {lesson.workedExample && (
              <div className="space-y-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto shadow-inner">
                  <pre><code>{lesson.workedExample.code}</code></pre>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-slate-200">Execution Breakdown:</div>
                  <p className="text-slate-400 leading-relaxed">{lesson.workedExample.explanation}</p>
                </div>

                {lesson.workedExample.expectedOutput && (
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-500 font-mono">Console Output:</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyan-300 text-[11px]">
                      {lesson.workedExample.expectedOutput}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* SLIDE 5: Mission Challenge */}
        {currentSlide === 4 && (
          <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-200">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Your Mission Challenge</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Ready to write code? Here are your targets:
            </h3>

            <div className="space-y-2">
              {lesson.testCases.map((tc, idx) => (
                <div 
                  key={tc.id || idx}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3 text-xs text-slate-200"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <div className="font-semibold">{tc.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {onJumpToEditor && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onJumpToEditor}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition transform hover:scale-[1.01]"
                >
                  <span>Open Code Editor &amp; Start Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Slide Navigation Footer Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Slide Indicator Dots */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'w-6 bg-amber-400' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              title={`Jump to Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
