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
  Film
} from 'lucide-react';
import { LessonMedia, Lesson } from '../../types';
import { YouTubePlayer } from '../video/YouTubePlayer';
import { 
  resolveSlidesEmbedUrl, 
  getGoogleSlidesExternalUrl, 
  resolveMediaSlot, 
  formatFileSize 
} from '../../utils/slides';
import { SlideStorageService } from '../../services/slideStorageService';

interface LectureMediaViewerProps {
  media?: LessonMedia;
  legacyVideoUrl?: string;
  lesson?: Lesson;
  lessonTitle?: string;
  trackTitle?: string;
  activeTab?: 'slides' | 'video' | 'pdf';
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
  className = '',
  autoPlay = false
}) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loadingBlob, setLoadingBlob] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { type: configuredType, media: activeMedia } = resolveMediaSlot(media, legacyVideoUrl);

  const effectiveType = activeTab || (configuredType !== 'none' ? configuredType : 'slides');

  // Load local slide deck from IndexedDB if uploaded PDF
  useEffect(() => {
    let isSubscribed = true;

    if (
      (effectiveType === 'slides' || effectiveType === 'pdf') && 
      activeMedia.slidesSourceType === 'pdf_upload' && 
      activeMedia.slidesFileBlobId
    ) {
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

  // ==========================================
  // 1. VIDEO TAB: Strictly Admin-Uploaded Video
  // ==========================================
  if (effectiveType === 'video') {
    const rawVideoUrl = (activeMedia.videoUrl || legacyVideoUrl || '').trim();

    if (!rawVideoUrl) {
      return (
        <div className={`p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 ${className}`}>
          <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
          <h4 className="text-sm font-bold text-white">No Video Lecture Attached</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            The course instructor has not uploaded a video walkthrough for this topic yet.
          </p>
        </div>
      );
    }

    return (
      <div className={className}>
        <YouTubePlayer
          url={rawVideoUrl}
          title={activeMedia.videoTitle || `${lessonTitle} - Video Walkthrough`}
          autoPlay={autoPlay}
        />
      </div>
    );
  }

  // ==========================================
  // 2. PDF TAB: Strictly Admin-Uploaded PDF
  // ==========================================
  if (effectiveType === 'pdf') {
    const directPdfUrl = activeMedia.slidesSourceType === 'pdf_url' ? activeMedia.slidesUrl : blobUrl;

    if (loadingBlob) {
      return (
        <div className={`rounded-2xl bg-slate-950 border border-slate-800 p-12 flex flex-col items-center justify-center space-y-2 ${className}`}>
          <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-400">Loading PDF document...</p>
        </div>
      );
    }

    if (!directPdfUrl) {
      return (
        <div className={`p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 ${className}`}>
          <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
          <h4 className="text-sm font-bold text-white">No PDF Document Attached</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            The course instructor has not uploaded a PDF for this topic yet.
          </p>
        </div>
      );
    }

    return (
      <div 
        ref={containerRef}
        className={`rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl transition-all ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-black flex flex-col' : ''
        } ${className}`}
      >
        <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2.5 min-w-0">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileText className="w-3 h-3" />
              <span>PDF Document</span>
            </span>
            <span className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-md">
              {activeMedia.slidesFileName || activeMedia.slidesTitle || lessonTitle}
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <a
              href={directPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={activeMedia.slidesFileName || `${lessonTitle}.pdf`}
              className="px-2.5 py-1 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-1 transition border border-transparent hover:border-slate-700"
              title="Open or Download PDF"
            >
              <Download className="w-3 h-3" />
              <span>Download / Open</span>
            </a>

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

        <div className={`relative w-full bg-slate-950 ${isFullscreen ? 'flex-1' : 'aspect-video'}`}>
          <iframe
            src={`${directPdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title={activeMedia.slidesTitle || lessonTitle}
            className="absolute inset-0 w-full h-full border-0 bg-slate-900"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. SLIDES TAB: Strictly Admin-Uploaded Google Slides or PPT Presentation
  // =========================================================================
  const rawInput = activeMedia.slidesUrl || activeMedia.slidesRawInput;
  const embedUrl = resolveSlidesEmbedUrl(rawInput);
  const externalUrl = getGoogleSlidesExternalUrl(rawInput) || rawInput;
  const isGoogleSlides = Boolean(rawInput && /docs\.google\.com\/presentation/i.test(rawInput));

  if (!embedUrl) {
    return (
      <div className={`p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 ${className}`}>
        <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
        <h4 className="text-sm font-bold text-white">Slide Deck Not Configured</h4>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          No presentation link has been configured for this topic yet.
        </p>
      </div>
    );
  }

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
          {/* External Link */}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg text-[11px] text-slate-300 hover:text-white hover:bg-slate-800 flex items-center space-x-1 transition border border-transparent hover:border-slate-700"
              title={isGoogleSlides ? 'Open presentation in Google Slides' : 'Open in new tab'}
            >
              <span>{isGoogleSlides ? 'Open in Slides' : 'Open Link'}</span>
              <ExternalLink className="w-3 h-3" />
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
        <iframe
          src={embedUrl}
          title={activeMedia.slidesTitle || lessonTitle}
          className="absolute inset-0 w-full h-full border-0 bg-slate-950"
          allowFullScreen
          loading="lazy"
        />
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
