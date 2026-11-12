import { Track } from '../../types';
import { JAVASCRIPT_TRACK } from './javascript';
import { SQL_TRACK } from './sql';
import { TYPESCRIPT_TRACK } from './typescript';
import { PYTHON_TRACK } from './python';

export const ALL_TRACKS: Track[] = [
  JAVASCRIPT_TRACK,
  SQL_TRACK,
  TYPESCRIPT_TRACK,
  PYTHON_TRACK
];

export function getTrackBySlug(slug: string): Track | undefined {
  return ALL_TRACKS.find(t => t.slug === slug || t.id === slug);
}

export function getLessonById(lessonId: string) {
  for (const track of ALL_TRACKS) {
    const found = track.lessons.find(l => l.id === lessonId);
    if (found) return { track, lesson: found };
  }
  return null;
}
