import React, { useState } from 'react';
import { Play, ExternalLink, Video, AlertCircle } from 'lucide-react';
import { getYoutubeEmbedUrl, getYoutubeWatchUrl, isValidYoutubeUrl } from '../../utils/youtube';

interface YouTubePlayerProps {
  url?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  url,
  title = 'Course Video Lecture',
  className = '',
  autoPlay = false
}) => {
  const [hasStarted, setHasStarted] = useState(autoPlay);

  if (!url) return null;

  const embedUrl = getYoutubeEmbedUrl(url);
  const watchUrl = getYoutubeWatchUrl(url);

  if (!embedUrl || !isValidYoutubeUrl(url)) {
    return (
      <div className={`p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center space-x-2.5 ${className}`}>
        <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
        <div>
          <span className="font-semibold">Invalid Video URL: </span>
          <span>Admins can paste any valid YouTube watch URL, youtu.be link, or video ID.</span>
        </div>
      </div>
    );
  }

  const finalSrc = autoPlay || hasStarted ? `${embedUrl}&autoplay=1` : embedUrl;

  return (
    <div className={`rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl ${className}`}>
      {/* Video Top Bar */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1">
            <Video className="w-3 h-3" />
            <span>Video Lecture</span>
          </span>
          <span className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-md">
            {title}
          </span>
        </div>

        {watchUrl && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-400 hover:text-white flex items-center space-x-1 transition"
          >
            <span>Open on YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Video Responsive Embed */}
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={finalSrc}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};
