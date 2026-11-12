import { UserStats } from '../types';

const STORAGE_KEY = 'devforge_user_stats_v1';

const DEFAULT_STATS: UserStats = {
  xp: 0,
  completedLessonIds: [],
  completedMilestoneIds: [],
  completedProjectIds: [],
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  savedCode: {},
  unlockedBadgeIds: ['badge-welcome']
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

  static resetProgress(): UserStats {
    localStorage.removeItem(STORAGE_KEY);
    return DEFAULT_STATS;
  }

  static getLevelInfo(xp: number): { level: number; title: string; nextLevelXp: number; progressPercent: number } {
    const levels = [
      { level: 1, title: 'Novice Developer', minXp: 0, maxXp: 150 },
      { level: 2, title: 'Apprentice Coder', minXp: 150, maxXp: 400 },
      { level: 3, title: 'Skilled Engineer', minXp: 400, maxXp: 800 },
      { level: 4, title: 'Fullstack Specialist', minXp: 800, maxXp: 1500 },
      { level: 5, title: 'Software Architect', minXp: 1500, maxXp: 3000 },
      { level: 6, title: 'Code Polyglot Master', minXp: 3000, maxXp: 6000 }
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
