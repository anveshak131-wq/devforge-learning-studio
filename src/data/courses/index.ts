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
import { R_TRACK } from './r';
import { PYTHON_DS_TRACK } from './python_ds';
import { PYTHON_NETWORK_TRACK } from './python_network';
import { JAVA_TRACK } from './java';
import { CPP_TRACK } from './cpp';
import { CLOUD_K8S_TRACK } from './cloud_k8s';

export const ALL_TRACKS: Track[] = [
  PYTHON_TRACK,
  PYTHON_DS_TRACK,
  PYTHON_NETWORK_TRACK,
  JAVASCRIPT_TRACK,
  TYPESCRIPT_TRACK,
  SQL_TRACK,
  JAVA_TRACK,
  CPP_TRACK,
  R_TRACK,
  CLOUD_K8S_TRACK,
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

export {
  PYTHON_TRACK,
  PYTHON_DS_TRACK,
  PYTHON_NETWORK_TRACK,
  JAVASCRIPT_TRACK,
  TYPESCRIPT_TRACK,
  SQL_TRACK,
  JAVA_TRACK,
  CPP_TRACK,
  R_TRACK,
  CLOUD_K8S_TRACK,
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
};

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
