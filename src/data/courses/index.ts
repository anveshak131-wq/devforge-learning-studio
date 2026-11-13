import { Track } from '../../types';
import { JAVASCRIPT_TRACK } from './javascript';
import { SQL_TRACK } from './sql';
import { TYPESCRIPT_TRACK } from './typescript';
import { PYTHON_TRACK } from './python';
import { HTML_TRACK } from './html';
import { CSS_TRACK } from './css';
import { REACT_TRACK } from './react';
import { NODEJS_TRACK } from './nodejs';
import { GIT_TRACK } from './git';
import { DSA_TRACK } from './dsa';
import { DOCKER_TRACK } from './docker';
import { BASH_TRACK } from './bash';
import { GOLANG_TRACK } from './golang';
import { RUST_TRACK } from './rust';

export const ALL_TRACKS: Track[] = [
  JAVASCRIPT_TRACK,
  PYTHON_TRACK,
  TYPESCRIPT_TRACK,
  SQL_TRACK,
  REACT_TRACK,
  NODEJS_TRACK,
  HTML_TRACK,
  CSS_TRACK,
  DSA_TRACK,
  GIT_TRACK,
  DOCKER_TRACK,
  BASH_TRACK,
  GOLANG_TRACK,
  RUST_TRACK,
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
