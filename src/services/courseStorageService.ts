import { Track, Lesson } from '../types';
import { ALL_TRACKS } from '../data/courses';
import { AdminSecurityService } from './adminSecurityService';

const CUSTOM_LESSONS_STORAGE = 'devforge_custom_lessons_v1';
const NEW_LESSONS_STORAGE = 'devforge_new_lessons_v1';
const DELETED_LESSONS_STORAGE = 'devforge_deleted_lessons_v1';

type Listener = () => void;

export class CourseStorageService {
  private static listeners: Set<Listener> = new Set();

  /**
   * Subscribe to curriculum changes
   */
  static subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private static notify() {
    this.listeners.forEach(fn => {
      try {
        fn();
      } catch (err) {
        console.error('Curriculum subscriber error:', err);
      }
    });
  }

  /**
   * Get all customized lesson overrides
   */
  private static getCustomLessons(): Record<string, Lesson> {
    try {
      const data = localStorage.getItem(CUSTOM_LESSONS_STORAGE);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  /**
   * Get newly added admin lessons (grouped by trackId)
   */
  private static getNewLessons(): Record<string, Lesson[]> {
    try {
      const data = localStorage.getItem(NEW_LESSONS_STORAGE);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  /**
   * Get deleted lesson IDs
   */
  private static getDeletedLessonIds(): string[] {
    try {
      const data = localStorage.getItem(DELETED_LESSONS_STORAGE);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  /**
   * Returns all tracks with admin overrides merged in
   */
  static getTracks(): Track[] {
    const customLessons = this.getCustomLessons();
    const newLessonsMap = this.getNewLessons();
    const deletedIds = new Set(this.getDeletedLessonIds());

    return ALL_TRACKS.map(baseTrack => {
      // Clone base track lessons
      let lessons = baseTrack.lessons
        .filter(l => !deletedIds.has(l.id))
        .map(baseLesson => {
          if (customLessons[baseLesson.id]) {
            const custom = customLessons[baseLesson.id];
            // If custom override has stale pre-filled initialCode === solutionCode,
            // but baseLesson has a clean scaffold, discard the stale pre-filled initialCode
            if (
              custom.initialCode &&
              custom.solutionCode &&
              custom.initialCode.trim() === custom.solutionCode.trim() &&
              baseLesson.initialCode.trim() !== baseLesson.solutionCode.trim()
            ) {
              return { ...baseLesson, ...custom, initialCode: baseLesson.initialCode };
            }
            return { ...baseLesson, ...custom };
          }
          return baseLesson;
        });

      // Append any newly added lessons for this track
      const addedForTrack = newLessonsMap[baseTrack.id] || [];
      const nonDeletedAdded = addedForTrack.filter(l => !deletedIds.has(l.id));

      return {
        ...baseTrack,
        lessons: [...lessons, ...nonDeletedAdded]
      };
    });
  }

  /**
   * Find a track by slug or ID
   */
  static getTrackBySlug(slug: string): Track | undefined {
    return this.getTracks().find(t => t.slug === slug || t.id === slug);
  }

  /**
   * Find a lesson by ID across all tracks
   */
  static getLessonById(lessonId: string): { track: Track; lesson: Lesson } | null {
    const tracks = this.getTracks();
    for (const track of tracks) {
      const lesson = track.lessons.find(l => l.id === lessonId);
      if (lesson) return { track, lesson };
    }
    return null;
  }

  /**
   * Save / Update a lesson
   */
  static saveLesson(trackId: string, updatedLesson: Lesson, adminEmail: string = 'admin'): boolean {
    try {
      const customLessons = this.getCustomLessons();
      const newLessonsMap = this.getNewLessons();

      // Check if this was a newly added lesson
      if (newLessonsMap[trackId]?.some(l => l.id === updatedLesson.id)) {
        newLessonsMap[trackId] = newLessonsMap[trackId].map(l => 
          l.id === updatedLesson.id ? updatedLesson : l
        );
        localStorage.setItem(NEW_LESSONS_STORAGE, JSON.stringify(newLessonsMap));
      } else {
        // Standard existing lesson override
        customLessons[updatedLesson.id] = updatedLesson;
        localStorage.setItem(CUSTOM_LESSONS_STORAGE, JSON.stringify(customLessons));
      }

      const auditAction = updatedLesson.media?.type === 'slides' 
        ? 'update_slides' 
        : (updatedLesson.media?.type === 'video' || updatedLesson.videoUrl) 
        ? 'update_video' 
        : 'update_lesson';

      AdminSecurityService.logAudit({
        adminEmail,
        action: auditAction,
        details: `Saved changes to lesson "${updatedLesson.title}" (Track: ${trackId}).`,
        trackId,
        lessonId: updatedLesson.id
      });

      this.notify();
      return true;
    } catch (err) {
      console.error('Failed to save lesson:', err);
      return false;
    }
  }

  /**
   * Create and add a new topic to a track
   */
  static addLesson(trackId: string, newLesson: Lesson, adminEmail: string = 'admin'): boolean {
    try {
      const newLessonsMap = this.getNewLessons();
      if (!newLessonsMap[trackId]) {
        newLessonsMap[trackId] = [];
      }

      newLessonsMap[trackId].push(newLesson);
      localStorage.setItem(NEW_LESSONS_STORAGE, JSON.stringify(newLessonsMap));

      AdminSecurityService.logAudit({
        adminEmail,
        action: 'create_lesson',
        details: `Created new topic "${newLesson.title}" in track "${trackId}".`,
        trackId,
        lessonId: newLesson.id
      });

      this.notify();
      return true;
    } catch (err) {
      console.error('Failed to add lesson:', err);
      return false;
    }
  }

  /**
   * Delete a lesson from a track
   */
  static deleteLesson(trackId: string, lessonId: string, adminEmail: string = 'admin'): boolean {
    try {
      const deletedIds = this.getDeletedLessonIds();
      if (!deletedIds.includes(lessonId)) {
        deletedIds.push(lessonId);
        localStorage.setItem(DELETED_LESSONS_STORAGE, JSON.stringify(deletedIds));
      }

      // Also clean up from custom overrides if present
      const customLessons = this.getCustomLessons();
      if (customLessons[lessonId]) {
        delete customLessons[lessonId];
        localStorage.setItem(CUSTOM_LESSONS_STORAGE, JSON.stringify(customLessons));
      }

      AdminSecurityService.logAudit({
        adminEmail,
        action: 'delete_lesson',
        details: `Deleted lesson ID "${lessonId}" from track "${trackId}".`,
        trackId,
        lessonId
      });

      this.notify();
      return true;
    } catch (err) {
      console.error('Failed to delete lesson:', err);
      return false;
    }
  }

  /**
   * Revert a single lesson back to factory default
   */
  static resetLesson(trackId: string, lessonId: string, adminEmail: string = 'admin'): boolean {
    try {
      const customLessons = this.getCustomLessons();
      if (customLessons[lessonId]) {
        delete customLessons[lessonId];
        localStorage.setItem(CUSTOM_LESSONS_STORAGE, JSON.stringify(customLessons));
      }

      const deletedIds = this.getDeletedLessonIds();
      const updatedDeleted = deletedIds.filter(id => id !== lessonId);
      localStorage.setItem(DELETED_LESSONS_STORAGE, JSON.stringify(updatedDeleted));

      AdminSecurityService.logAudit({
        adminEmail,
        action: 'reset_lesson',
        details: `Reverted lesson ID "${lessonId}" to factory default.`,
        trackId,
        lessonId
      });

      this.notify();
      return true;
    } catch (err) {
      console.error('Failed to reset lesson:', err);
      return false;
    }
  }

  /**
   * Reset all customizations across the platform back to factory default
   */
  static resetAll(adminEmail: string = 'admin'): boolean {
    try {
      localStorage.removeItem(CUSTOM_LESSONS_STORAGE);
      localStorage.removeItem(NEW_LESSONS_STORAGE);
      localStorage.removeItem(DELETED_LESSONS_STORAGE);

      AdminSecurityService.logAudit({
        adminEmail,
        action: 'reset_track',
        details: `Reset all tracks and lessons to original platform defaults.`
      });

      this.notify();
      return true;
    } catch (err) {
      console.error('Failed to reset all:', err);
      return false;
    }
  }

  /**
   * Check if a lesson has custom modifications
   */
  static isLessonModified(lessonId: string): boolean {
    const custom = this.getCustomLessons();
    return !!custom[lessonId];
  }

  /**
   * Total custom lessons count
   */
  static getStats(): { modifiedCount: number; newCount: number; videoCount: number; slidesCount: number } {
    const customLessons = this.getCustomLessons();
    const newLessonsMap = this.getNewLessons();
    
    let newCount = 0;
    Object.values(newLessonsMap).forEach(list => newCount += list.length);

    let videoCount = 0;
    let slidesCount = 0;
    const allTracks = this.getTracks();
    allTracks.forEach(t => {
      t.lessons.forEach(l => {
        if (l.media?.type === 'slides') slidesCount++;
        else if (l.media?.type === 'video' || l.videoUrl) videoCount++;
      });
    });

    return {
      modifiedCount: Object.keys(customLessons).length,
      newCount,
      videoCount,
      slidesCount
    };
  }

  /**
   * Export all customizations as JSON
   */
  static exportCurriculum(): string {
    const payload = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      customLessons: this.getCustomLessons(),
      newLessons: this.getNewLessons(),
      deletedLessonIds: this.getDeletedLessonIds()
    };
    return JSON.stringify(payload, null, 2);
  }

  /**
   * Import customizations from JSON
   */
  static importCurriculum(jsonString: string, adminEmail: string = 'admin'): { success: boolean; error?: string } {
    try {
      const data = JSON.parse(jsonString);
      if (!data || typeof data !== 'object') {
        return { success: false, error: 'Invalid curriculum JSON format.' };
      }

      if (data.customLessons) {
        localStorage.setItem(CUSTOM_LESSONS_STORAGE, JSON.stringify(data.customLessons));
      }
      if (data.newLessons) {
        localStorage.setItem(NEW_LESSONS_STORAGE, JSON.stringify(data.newLessons));
      }
      if (data.deletedLessonIds) {
        localStorage.setItem(DELETED_LESSONS_STORAGE, JSON.stringify(data.deletedLessonIds));
      }

      AdminSecurityService.logAudit({
        adminEmail,
        action: 'update_lesson',
        details: `Imported external curriculum backup package.`
      });

      this.notify();
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Failed to parse JSON backup.' };
    }
  }
}
