/**
 * Utility functions for YouTube video extraction and validation
 */

/**
 * Extracts 11-character YouTube video ID from various YouTube URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - https://m.youtube.com/watch?v=VIDEO_ID
 * - Direct 11-char ID
 */
export function extractYoutubeId(input: string | null | undefined): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  // If input contains URL protocol or domain slash/dot, require valid YouTube domain match
  if (trimmed.includes('/') || trimmed.includes('.')) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const match = trimmed.match(regex);
    return match ? match[1] : null;
  }

  // Direct 11-character alphanumeric / dash / underscore ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
}

/**
 * Generates privacy-enhanced embed URL for iframe streaming
 */
export function getYoutubeEmbedUrl(input: string | null | undefined): string | null {
  const id = extractYoutubeId(input);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
}

/**
 * Generates canonical YouTube watch URL for external viewing
 */
export function getYoutubeWatchUrl(input: string | null | undefined): string | null {
  const id = extractYoutubeId(input);
  if (!id) return null;
  return `https://www.youtube.com/watch?v=${id}`;
}

/**
 * Returns high-quality thumbnail image URL
 */
export function getYoutubeThumbnail(input: string | null | undefined): string | null {
  const id = extractYoutubeId(input);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/**
 * Validates whether string is a valid YouTube URL or ID
 */
export function isValidYoutubeUrl(input: string | null | undefined): boolean {
  return extractYoutubeId(input) !== null;
}
