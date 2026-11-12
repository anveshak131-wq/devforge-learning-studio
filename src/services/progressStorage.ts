import { UserStats, TierLevel } from '../types';

const STORAGE_KEY = 'devforge_user_stats_v1';

const DEFAULT_STATS: UserStats = {
  xp: 0,
  completedLessonIds: [],
  completedMilestoneIds: [],
  completedProjectIds: [],
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  savedCode: {},
  unlockedBadgeIds: ['badge-welcome'],
  diagnosedTier: 1,
  reviewedFlashcardIds: []
};

export class ProgressStorage {
  static getStats(): UserStats {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        this.saveStats(DEFAULT_STATS);
        return DEFAULT_STATS;
      }
      const parsed: UserStats = JSON.parse(data);
      if (!parsed.reviewedFlashcardIds) parsed.reviewedFlashcardIds = [];
      this.updateStreakIfNeeded(parsed);
      return parsed;
    } catch {
      return DEFAULT_STATS;
    }
  }

  static saveStats(stats: UserStats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (err) {
      console.warn('Could not save user stats to localStorage', err);
    }
  }

  private static updateStreakIfNeeded(stats: UserStats) {
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastActiveDate === today) return;

    const last = new Date(stats.lastActiveDate);
    const curr = new Date(today);
    const diffTime = Math.abs(curr.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      stats.streakDays += 1;
    } else if (diffDays > 1) {
      stats.streakDays = 1;
    }
    stats.lastActiveDate = today;
    this.saveStats(stats);
  }

  static markLessonComplete(lessonId: string, xpReward: number): UserStats {
    const stats = this.getStats();
    if (!stats.completedLessonIds.includes(lessonId)) {
      stats.completedLessonIds.push(lessonId);
      stats.xp += xpReward;
      this.saveStats(stats);
    }
    return stats;
  }

  static markMilestoneComplete(milestoneId: string, xpReward: number): UserStats {
    const stats = this.getStats();
    if (!stats.completedMilestoneIds.includes(milestoneId)) {
      stats.completedMilestoneIds.push(milestoneId);
      stats.xp += xpReward;
      this.saveStats(stats);
    }
    return stats;
  }

  static markProjectComplete(projectId: string, xpReward: number): UserStats {
    const stats = this.getStats();
    if (!stats.completedProjectIds.includes(projectId)) {
      stats.completedProjectIds.push(projectId);
      stats.xp += xpReward;
      this.saveStats(stats);
    }
    return stats;
  }

  static saveCode(id: string, code: string) {
    const stats = this.getStats();
    stats.savedCode[id] = code;
    this.saveStats(stats);
  }

  static getSavedCode(id: string, fallback: string): string {
    const stats = this.getStats();
    return stats.savedCode[id] !== undefined ? stats.savedCode[id] : fallback;
  }

  static markFlashcardReviewed(cardId: string): UserStats {
    const stats = this.getStats();
    if (!stats.reviewedFlashcardIds.includes(cardId)) {
      stats.reviewedFlashcardIds.push(cardId);
      stats.xp += 15;
      this.saveStats(stats);
    }
    return stats;
  }

  static setDiagnosedTier(tier: TierLevel): UserStats {
    const stats = this.getStats();
    stats.diagnosedTier = tier;
    this.saveStats(stats);
    return stats;
  }

  static resetProgress(): UserStats {
    localStorage.removeItem(STORAGE_KEY);
    return DEFAULT_STATS;
  }

  static getLevelInfo(xp: number): { level: number; title: string; nextLevelXp: number; progressPercent: number } {
    const levels = [
      { level: 1, title: 'Novice Developer', minXp: 0, maxXp: 200 },
      { level: 2, title: 'Apprentice Coder', minXp: 200, maxXp: 600 },
      { level: 3, title: 'Skilled Engineer', minXp: 600, maxXp: 1200 },
      { level: 4, title: 'Senior Architect', minXp: 1200, maxXp: 2200 },
      { level: 5, title: 'Staff Systems Engineer', minXp: 2200, maxXp: 3800 },
      { level: 6, title: 'Polyglot Principal Master', minXp: 3800, maxXp: 7500 }
    ];

    const current = levels.find(l => xp >= l.minXp && xp < l.maxXp) || levels[levels.length - 1];
    const range = current.maxXp - current.minXp;
    const currentProgress = xp - current.minXp;
    const progressPercent = Math.min(100, Math.max(0, Math.round((currentProgress / range) * 100)));

    return {
      level: current.level,
      title: current.title,
      nextLevelXp: current.maxXp,
      progressPercent
    };
  }
}
