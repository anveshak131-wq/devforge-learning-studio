import { LessonMedia, LectureMediaType } from '../types';

/**
 * Utility functions for Google Slides & Presentation Slide Decks
 */

/**
 * Extracts and formats a responsive embed URL from any Google Slides link or iframe snippet.
 * Supports:
 * - https://docs.google.com/presentation/d/PRESENTATION_ID/edit...
 * - https://docs.google.com/presentation/d/PRESENTATION_ID/present...
 * - https://docs.google.com/presentation/d/PRESENTATION_ID/pub...
 * - https://docs.google.com/presentation/d/PRESENTATION_ID/embed...
 * - https://docs.google.com/presentation/d/e/PUBLISHED_ID/pub...
 * - https://docs.google.com/presentation/d/e/PUBLISHED_ID/embed...
 * - <iframe src="https://docs.google.com/presentation/d/..." ...></iframe>
 * - Raw 20-60 char Google Slides presentation ID
 */
export function extractGoogleSlidesEmbedUrl(input: string | null | undefined): string | null {
  if (!input) return null;
  let trimmed = input.trim();
  if (!trimmed) return null;

  // If user pasted an iframe snippet, extract the src attribute
  const iframeMatch = trimmed.match(/<iframe.*?src=["'](.*?)["'].*?>/i);
  if (iframeMatch && iframeMatch[1]) {
    trimmed = iframeMatch[1].trim();
  }

  // Published presentation format: /presentation/d/e/{publishedId}/...
  const publishedMatch = trimmed.match(/docs\.google\.com\/presentation\/d\/e\/([a-zA-Z0-9_-]+)/i);
  if (publishedMatch && publishedMatch[1]) {
    return `https://docs.google.com/presentation/d/e/${publishedMatch[1]}/embed?start=false&loop=false&delayms=3000`;
  }

  // Standard presentation format: /presentation/d/{presentationId}/...
  const standardMatch = trimmed.match(/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)/i);
  if (standardMatch && standardMatch[1]) {
    return `https://docs.google.com/presentation/d/${standardMatch[1]}/embed?start=false&loop=false&delayms=3000`;
  }

  // Google Drive preview link for uploaded PPT / PDF
  const driveMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  // If user passed just the presentation ID (alphanumeric with dashes/underscores)
  if (/^[a-zA-Z0-9_-]{20,60}$/.test(trimmed)) {
    return `https://docs.google.com/presentation/d/${trimmed}/embed?start=false&loop=false&delayms=3000`;
  }

  return null;
}

/**
 * Check if the input is a recognizable Google Slides link or ID
 */
export function isValidGoogleSlidesUrl(input: string | null | undefined): boolean {
  return extractGoogleSlidesEmbedUrl(input) !== null;
}

/**
 * Resolves any presentation / slide deck input (Google Slides, Drive preview, Office PPT, or direct web URL)
 * into a valid iframe embed URL.
 */
export function resolveSlidesEmbedUrl(input: string | null | undefined): string | null {
  if (!input) return null;
  let trimmed = input.trim();
  if (!trimmed) return null;

  // 1. Google Slides (standard edit/present/embed/pub, or Drive preview)
  const googleEmbed = extractGoogleSlidesEmbedUrl(trimmed);
  if (googleEmbed) return googleEmbed;

  // 2. Extracted src from raw iframe tag
  const iframeMatch = trimmed.match(/<iframe.*?src=["'](.*?)["'].*?>/i);
  if (iframeMatch && iframeMatch[1]) {
    return iframeMatch[1].trim();
  }

  // 3. Microsoft Office PowerPoint online viewer (for public .pptx / .ppt files)
  if (/\.(pptx|ppt)($|\?)/i.test(trimmed)) {
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(trimmed)}`;
  }

  // 4. Any direct valid HTTP / HTTPS embed link (e.g. Canva presentation, Pitch, Slideshare)
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return null;
}

/**
 * Extracts canonical presentation view URL for "Open in Google Slides" external link
 */
export function getGoogleSlidesExternalUrl(input: string | null | undefined): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  const publishedMatch = trimmed.match(/docs\.google\.com\/presentation\/d\/e\/([a-zA-Z0-9_-]+)/i);
  if (publishedMatch) {
    return `https://docs.google.com/presentation/d/e/${publishedMatch[1]}/pub?start=false&loop=false&delayms=3000`;
  }

  const standardMatch = trimmed.match(/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)/i);
  if (standardMatch) {
    return `https://docs.google.com/presentation/d/${standardMatch[1]}/present`;
  }

  const driveMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/view`;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return null;
}

/**
 * Format raw byte size to human readable (KB, MB)
 */
export function formatFileSize(bytes?: number): string {
  if (!bytes || bytes <= 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Resolves active media slot with 100% backward compatibility for legacy `videoUrl`
 */
export function resolveMediaSlot(
  media?: LessonMedia, 
  legacyVideoUrl?: string
): { type: LectureMediaType; media: LessonMedia } {
  if (media && media.type) {
    // If explicitly set to 'none', respect it
    if (media.type === 'none') {
      return { type: 'none', media };
    }
    return { type: media.type, media };
  }

  // Fallback to legacy videoUrl if media is unset
  if (legacyVideoUrl && legacyVideoUrl.trim()) {
    const legacyMedia: LessonMedia = {
      type: 'video',
      videoUrl: legacyVideoUrl.trim()
    };
    return { type: 'video', media: legacyMedia };
  }

  return {
    type: 'none',
    media: { type: 'none' }
  };
}

/**
 * Status of admin-uploaded media for a lesson.
 * Strictly reflects ONLY what the admin actually uploaded or configured.
 * Zero random fallbacks.
 */
export interface LessonMediaStatus {
  hasMedia: boolean;
  hasSlides: boolean;
  hasPdf: boolean;
  hasVideo: boolean;
  slidesUrl?: string;
  slidesTitle?: string;
  slidesSourceType?: string;
  slidesFileBlobId?: string;
  slidesFileName?: string;
  slidesFileSize?: number;
  videoUrl?: string;
  videoTitle?: string;
  pdfUrl?: string;
}

/**
 * Analyzes admin-configured media for a lesson.
 * Returns true flags strictly if media was uploaded / linked by the admin.
 */
export function getLessonMediaStatus(
  media?: LessonMedia, 
  legacyVideoUrl?: string
): LessonMediaStatus {
  const { type, media: activeMedia } = resolveMediaSlot(media, legacyVideoUrl);

  if (type === 'none') {
    return {
      hasMedia: false,
      hasSlides: false,
      hasPdf: false,
      hasVideo: false
    };
  }

  let hasSlides = false;
  let hasPdf = false;
  let hasVideo = false;

  // 1. Video Check: strictly admin provided video URL
  const rawVideo = (activeMedia.videoUrl || legacyVideoUrl || '').trim();
  if (rawVideo && (type === 'video' || legacyVideoUrl)) {
    hasVideo = true;
  }

  // 2. Slides & PDF Check: strictly admin uploaded or configured
  let pdfUrl: string | undefined = undefined;
  if (type === 'slides') {
    if (activeMedia.slidesSourceType === 'pdf_upload' && activeMedia.slidesFileBlobId) {
      hasPdf = true;
    } else if (activeMedia.slidesSourceType === 'pdf_url' && activeMedia.slidesUrl?.trim()) {
      hasPdf = true;
      pdfUrl = activeMedia.slidesUrl.trim();
    } else if (activeMedia.slidesUrl && /\.pdf($|\?)/i.test(activeMedia.slidesUrl.trim())) {
      hasPdf = true;
      pdfUrl = activeMedia.slidesUrl.trim();
    } else if (activeMedia.slidesUrl?.trim() || activeMedia.slidesRawInput?.trim()) {
      hasSlides = true;
    }
  }

  const hasMedia = hasSlides || hasPdf || hasVideo;

  return {
    hasMedia,
    hasSlides,
    hasPdf,
    hasVideo,
    slidesUrl: activeMedia.slidesUrl || activeMedia.slidesRawInput,
    slidesTitle: activeMedia.slidesTitle,
    slidesSourceType: activeMedia.slidesSourceType,
    slidesFileBlobId: activeMedia.slidesFileBlobId,
    slidesFileName: activeMedia.slidesFileName,
    slidesFileSize: activeMedia.slidesFileSize,
    videoUrl: hasVideo ? rawVideo : undefined,
    videoTitle: activeMedia.videoTitle,
    pdfUrl
  };
}

/**
 * Curated public demo slide decks for instant 1-click testing in Admin Studio
 */
export const SAMPLE_SLIDE_DECKS = [
  {
    title: 'JavaScript: Modern Architecture & Core Engines',
    topic: 'javascript',
    url: 'https://docs.google.com/presentation/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/embed?start=false&loop=false&delayms=3000',
    description: 'HTML5 presentation deck exploring JS runtime, call stack, and memory.'
  },
  {
    title: 'SQL Relational Algebra & Query Optimization',
    topic: 'sql',
    url: 'https://docs.google.com/presentation/d/1V3F9j82T13k1UeE_DemoPresentationRelationalDB/embed?start=false&loop=false&delayms=3000',
    description: 'Visual diagrams of INNER, LEFT, and FULL OUTER joins.'
  },
  {
    title: 'Web Dev & CSS Box Model Fundamentals',
    topic: 'css',
    url: 'https://docs.google.com/presentation/d/1U4E_DemoPresentationCssBoxModelWebDesign/embed?start=false&loop=false&delayms=3000',
    description: 'Step-by-step layout breakdown for margin, border, padding, and content.'
  }
];
