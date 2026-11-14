import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  AlertCircle, 
  Presentation, 
  Download, 
  Sparkles,
  Layers,
  Printer
} from 'lucide-react';
import { LessonMedia, Lesson } from '../../types';
import { YouTubePlayer } from '../video/YouTubePlayer';
import { 
  extractGoogleSlidesEmbedUrl, 
  getGoogleSlidesExternalUrl, 
  resolveMediaSlot, 
  formatFileSize 
} from '../../utils/slides';
import { SlideStorageService } from '../../services/slideStorageService';
import { resolveLessonVideo, printLessonPdf } from '../../utils/lessonResources';
import { InteractiveSlideDeck } from './InteractiveSlideDeck';

interface LectureMediaViewerProps {
  media?: LessonMedia;
  legacyVideoUrl?: string;
  lesson?: Lesson;
  lessonTitle?: string;
  trackTitle?: string;
  activeTab?: 'slides' | 'video';
  onJumpToEditor?: () => void;
  className?: string;
  autoPlay?: boolean;
}

export const LectureMediaViewer: React.FC<LectureMediaViewerProps> = ({
  media,
  legacyVideoUrl,
  lesson,
  lessonTitle = 'Topic Lecture',
  trackTitle = 'DevForge Course',
  activeTab = 'slides',
  onJumpToEditor,
  className = '',
  autoPlay = false
}) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loadingBlob, setLoadingBlob] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { type: configuredType, media: activeMedia } = resolveMediaSlot(media, legacyVideoUrl);

  // If user explicitly picked a tab ('slides' or 'video'), prioritize that; otherwise use configured
  const effectiveType = activeTab || (configuredType !== 'none' ? configuredType : 'slides');

  // Load local slide deck from IndexedDB if uploaded PDF
  useEffect(() => {
    let isSubscribed = true;

    if (effectiveType === 'slides' && activeMedia.slidesSourceType === 'pdf_upload' && activeMedia.slidesFileBlobId) {
      setLoadingBlob(true);
      SlideStorageService.getSlideBlobUrl(activeMedia.slidesFileBlobId)
        .then(url => {
          if (isSubscribed) {
            setBlobUrl(url);
            setLoadingBlob(false);
          }
        })
        .catch(err => {
          console.error('Failed to load slide blob:', err);
          if (isSubscribed) setLoadingBlob(false);
        });
    } else {
      setBlobUrl(null);
    }

    return () => {
      isSubscribed = false;
    };
  }, [effectiveType, activeMedia.slidesSourceType, activeMedia.slidesFileBlobId]);

  // Handle Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // 1. VIDEO TAB: YouTube Player
  if (effectiveType === 'video') {
    const resolved = lesson 
      ? resolveLessonVideo(lesson)
      : { 
          url: activeMedia.videoUrl || legacyVideoUrl || '', 
          title: activeMedia.videoTitle || `${lessonTitle} - Video Walkthrough`, 
          watchUrl: activeMedia.videoUrl || legacyVideoUrl || '' 
        };

    return (
      <div className={className}>
        <YouTubePlayer
          url={resolved.url}
          title={resolved.title}
          autoPlay={autoPlay}
        />
      </div>
    );
  }

  // 2. SLIDES TAB: Check if external Google Slides or PDF upload exists
  const isGoogleSlides = activeMedia.slidesSourceType === 'google_slides' || (!activeMedia.slidesSourceType && !!activeMedia.slidesUrl);
  const embedUrl = isGoogleSlides ? extractGoogleSlidesEmbedUrl(activeMedia.slidesUrl) : null;
  const externalUrl = isGoogleSlides ? getGoogleSlidesExternalUrl(activeMedia.slidesUrl) : null;
  const directPdfUrl = activeMedia.slidesSourceType === 'pdf_url' ? activeMedia.slidesUrl : blobUrl;

  const hasExternalSlideDeck = Boolean((isGoogleSlides && embedUrl) || (!isGoogleSlides && directPdfUrl));

  // If no external slide deck exists, render the built-in Interactive Slide Deck
  if (!hasExternalSlideDeck && lesson) {
    return (
      <InteractiveSlideDeck
        lesson={lesson}
        trackTitle={trackTitle}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onJumpToEditor={onJumpToEditor}
        className={className}
      />
    );
  }

  // If external slide deck is available
  return (
    <div 
      ref={containerRef}
      className={`rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-black flex flex-col' : ''
      } ${className}`}
    >
      {/* Slides Top Navigation Bar */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2.5 min-w-0">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1.5 ${
            isGoogleSlides 
              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
          }`}>
            <Presentation className="w-3 h-3" />
            <span>{isGoogleSlides ? 'Google Slides Deck' : 'Presentation Deck'}</span>
          </span>

          <span className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-md">
            {activeMedia.slidesTitle || activeMedia.slidesFileName || lessonTitle}
          </span>

          {activeMedia.slidesFileSize && (
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
              ({formatFileSize(activeMedia.slidesFileSize)})
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          {/* Print / Download PDF */}
          {lesson && (
            <button
              type="button"
              onClick={() => printLessonPdf(lesson, trackTitle)}
              className="px-2.5 py-1 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-1 transition border border-slate-700"
              title="Download printable PDF study sheet"
            >
              <Printer className="w-3 h-3 text-indigo-400" />
              <span>PDF Sheet</span>
            </button>
          )}

          {/* External Link or Download */}
          {isGoogleSlides && externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-1 transition border border-transparent hover:border-slate-700"
              title="Open full presentation in Google Slides"
            >
              <span>Open in Slides</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {!isGoogleSlides && directPdfUrl && (
            <a
              href={directPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={activeMedia.slidesFileName || `${lessonTitle}-slides.pdf`}
              className="px-2.5 py-1 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-1 transition border border-transparent hover:border-slate-700"
              title="Open in new window or download file"
            >
              <Download className="w-3 h-3" />
              <span>Download / Open</span>
            </a>
          )}

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Present in Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Slide Deck Presentation Area */}
      <div className={`relative w-full bg-slate-950 ${isFullscreen ? 'flex-1' : 'aspect-video'}`}>
        {/* Scenario A: Google Slides */}
        {isGoogleSlides && embedUrl && (
          <iframe
            src={embedUrl}
            title={activeMedia.slidesTitle || lessonTitle}
            className="absolute inset-0 w-full h-full border-0 bg-slate-950"
            allowFullScreen
            loading="lazy"
          />
        )}

        {/* Scenario B: PDF / Uploaded Slide Deck */}
        {!isGoogleSlides && directPdfUrl && (
          <iframe
            src={`${directPdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title={activeMedia.slidesTitle || lessonTitle}
            className="absolute inset-0 w-full h-full border-0 bg-slate-900"
            loading="lazy"
          />
        )}

        {/* Scenario C: Loading Local Deck */}
        {loadingBlob && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-slate-950">
            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-slate-400">Loading slide presentation...</p>
          </div>
        )}

        {/* Scenario D: Fallback */}
        {!embedUrl && !directPdfUrl && !loadingBlob && (
          lesson ? (
            <InteractiveSlideDeck
              lesson={lesson}
              trackTitle={trackTitle}
              isFullscreen={isFullscreen}
              onToggleFullscreen={toggleFullscreen}
              onJumpToEditor={onJumpToEditor}
              className="w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-2 bg-slate-950">
              <AlertCircle className="w-8 h-8 text-amber-400" />
              <h4 className="text-sm font-bold text-white">Slide Deck Preview</h4>
              <p className="text-xs text-slate-400 max-w-sm">
                Paste a Google Slides URL or upload a presentation deck above to preview.
              </p>
            </div>
          )
        )}
      </div>

      {/* Presentation Footer Hint */}
      {!isFullscreen && (
        <div className="px-4 py-1.5 bg-slate-950 border-t border-slate-900 text-[10px] text-slate-500 flex items-center justify-between font-mono">
          <span className="flex items-center space-x-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            <span>Click inside slides & press <kbd className="text-slate-400">⬅️ ➡️</kbd> or <kbd className="text-slate-400">Space</kbd> to navigate</span>
          </span>
          <span className="hidden sm:inline">Self-Paced Visual Learning</span>
        </div>
      )}
    </div>
  );
};
