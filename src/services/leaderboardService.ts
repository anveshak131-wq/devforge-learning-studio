import {
  LeaderboardEntry,
  LeaderboardPeriod,
  LeaderboardTrackFilter,
  LeagueTier,
  UserRankStanding,
} from '../types/leaderboard';
import { AuthService } from './authService';
import { ProgressStorage } from './progressStorage';
import { ExamEngine } from './examEngine';
import { StudentCRMService } from './studentCRMService';

const PRIVACY_KEY = 'devforge_leaderboard_privacy_v1';

export class LeaderboardService {
  // Grounded XP Economy Constants
  static readonly LESSON_XP = 15;
  static readonly CHECKPOINT_PASS_XP = 25;
  static readonly CHECKPOINT_PERFECT_XP = 35;
  static readonly MILESTONE_PROJECT_XP = 50;
  static readonly EXAM_PASS_XP = 50;
  static readonly EXAM_HONORS_XP = 75;
  static readonly EXAM_DISTINCTION_XP = 100;
  static readonly STREAK_7D_XP = 15;
  static readonly STREAK_30D_XP = 50;

  /**
   * Determine league tier based on grounded XP scale
   */
  static getTier(xp: number): { tier: LeagueTier; color: string } {
    if (xp >= 2500) {
      return { tier: 'Master', color: 'from-amber-400 via-rose-500 to-indigo-500' };
    }
    if (xp >= 1500) {
      return { tier: 'Specialist', color: 'from-indigo-400 to-cyan-400' };
    }
    if (xp >= 500) {
      return { tier: 'Practitioner', color: 'from-cyan-400 to-emerald-400' };
    }
    return { tier: 'Foundations', color: 'from-slate-400 to-slate-200' };
  }

  /**
   * Get user's public display preference (Real name vs Anonymous handle)
   */
  static isAnonymous(): boolean {
    try {
      return localStorage.getItem(PRIVACY_KEY) === 'anonymous';
    } catch {
      return false;
    }
  }

  static setAnonymous(anonymous: boolean) {
    try {
      localStorage.setItem(PRIVACY_KEY, anonymous ? 'anonymous' : 'public');
    } catch {}
  }

  /**
   * Fetch current leaderboard entries based on period and track.
   * STRICT: ONLY real, genuine users are returned. Fake / mock / demo users are 100% excluded.
   */
  static getLeaderboard(
    period: LeaderboardPeriod = 'all_time',
    trackFilter: LeaderboardTrackFilter = 'all',
    serverLeaders: LeaderboardEntry[] = []
  ): LeaderboardEntry[] {
    const learners = StudentCRMService.getLearners();
    const currentUser = AuthService.getCurrentUser();
    const userStats = ProgressStorage.getStats();
    const examStatuses = ExamEngine.getAllStatuses();

    // Find highest exam score and distinction for current user
    let myBestExam: number | null = null;
    let myDistinction: 'Gold' | 'Silver' | null = null;
    Object.values(examStatuses).forEach((status) => {
      if (status.bestScore !== null && (myBestExam === null || status.bestScore > myBestExam)) {
        myBestExam = status.bestScore;
        if (status.bestScore >= 90) myDistinction = 'Gold';
        else if (status.bestScore >= 70) myDistinction = 'Silver';
      }
    });

    const isAnon = this.isAnonymous();
    const myName = currentUser
      ? isAnon
        ? `Developer #${currentUser.id ? currentUser.id.slice(-4) : '942'}`
        : currentUser.fullName || currentUser.email.split('@')[0]
      : 'You (Guest)';

    const myAvatar = currentUser?.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(myName)}`;
    const myTotalLessons = userStats.completedLessonIds.length;
    const myXp = typeof userStats.xp === 'number' ? userStats.xp : 0;

    // Build current user entry with genuine, non-inflated data
    const { tier: myTier, color: myTierColor } = this.getTier(myXp);
    const myEntry: LeaderboardEntry = {
      rank: 1,
      userId: currentUser?.id || 'current_user',
      fullName: myName,
      avatarUrl: myAvatar,
      email: currentUser?.email,
      totalXp: myXp,
      weeklyXp: myXp,
      streakDays: userStats.streakDays || 1,
      tierName: myTier,
      tierColor: myTierColor,
      completedLessonsCount: myTotalLessons,
      bestExamScore: myBestExam,
      distinctionBadge: myDistinction,
      isCurrentUser: true,
      isDemo: false,
    };

    const entries: LeaderboardEntry[] = [];
    const seenUserIds = new Set<string>();
    if (currentUser?.id) seenUserIds.add(currentUser.id);
    if (currentUser?.email) seenUserIds.add(currentUser.email.toLowerCase());

    // 1. Add genuine remote learners from Cloudflare KV (/api/leaderboard)
    if (Array.isArray(serverLeaders) && serverLeaders.length > 0) {
      serverLeaders.forEach((sl) => {
        if (!sl || sl.isDemo) return;
        if (seenUserIds.has(sl.userId) || (sl.email && seenUserIds.has(sl.email.toLowerCase()))) return;
        if (['Aarav Sharma', 'Ananya Reddy', 'Priya Patel', 'Rohan Deshmukh'].includes(sl.fullName)) return;

        seenUserIds.add(sl.userId);
        if (sl.email) seenUserIds.add(sl.email.toLowerCase());
        entries.push(sl);
      });
    }

    // 2. Add genuine local registered learners (strictly excluding any demo/mock profiles)
    learners
      .filter((l) => {
        // Zero-tolerance filter for fake/demo profiles
        if (l.isDemo) return false;
        if (l.id && (
          l.id.startsWith('lrn_aarav') ||
          l.id.startsWith('lrn_ananya') ||
          l.id.startsWith('lrn_priya') ||
          l.id.startsWith('lrn_rohan') ||
          l.id.startsWith('lrn_vikram') ||
          l.id.startsWith('lrn_meera') ||
          l.id.startsWith('lrn_kabir')
        )) {
          return false;
        }
        if (['Aarav Sharma', 'Ananya Reddy', 'Priya Patel', 'Rohan Deshmukh', 'Vikram Singh', 'Meera Nair', 'Kabir Mehta'].includes(l.fullName)) {
          return false;
        }
        if (seenUserIds.has(l.id) || (l.email && seenUserIds.has(l.email.toLowerCase()))) {
          return false;
        }
        if (trackFilter === 'python') {
          return l.purchasedCourses.includes('python') || l.hasPromoAccess;
        }
        if (trackFilter === 'sql') {
          return l.purchasedCourses.includes('sql') || l.hasPromoAccess;
        }
        return true;
      })
      .forEach((l) => {
        const { tier, color } = this.getTier(l.xp);
        let bestScore: number | null = null;
        let badge: 'Gold' | 'Silver' | null = null;

        if (l.examRecords) {
          Object.values(l.examRecords).forEach((ex) => {
            if (ex.bestScore !== null && (bestScore === null || ex.bestScore > bestScore)) {
              bestScore = ex.bestScore;
              if (ex.bestScore >= 90) badge = 'Gold';
              else if (ex.bestScore >= 70) badge = 'Silver';
            }
          });
        }

        const pyDone = l.completedLessonsCount?.python || 0;
        const sqlDone = l.completedLessonsCount?.sql || 0;
        const totalLessons = trackFilter === 'python' ? pyDone : trackFilter === 'sql' ? sqlDone : pyDone + sqlDone;

        seenUserIds.add(l.id);
        if (l.email) seenUserIds.add(l.email.toLowerCase());

        entries.push({
          rank: 0,
          userId: l.id,
          fullName: l.fullName,
          avatarUrl: l.avatarUrl,
          email: l.email,
          totalXp: l.xp,
          weeklyXp: l.xp,
          streakDays: l.streakDays,
          tierName: tier,
          tierColor: color,
          completedLessonsCount: totalLessons,
          bestExamScore: bestScore,
          distinctionBadge: badge,
          isCurrentUser: false,
          isDemo: false,
        });
      });

    // Add current user
    entries.push(myEntry);

    // Sort by period
    entries.sort((a, b) => {
      const scoreA = period === 'weekly' ? a.weeklyXp : a.totalXp;
      const scoreB = period === 'weekly' ? b.weeklyXp : b.totalXp;
      if (scoreB !== scoreA) return scoreB - scoreA;
      return b.completedLessonsCount - a.completedLessonsCount;
    });

    // Assign sequential ranks
    entries.forEach((item, index) => {
      item.rank = index + 1;
    });

    return entries;
  }

  /**
   * Fetch genuine global learners recorded in Cloudflare KV
   */
  static async fetchServerLeaders(): Promise<LeaderboardEntry[]> {
    try {
      const res = await fetch('/api/leaderboard');
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.leaders)) {
          return data.leaders
            .filter((l: any) => !l.isDemo && !['Aarav Sharma', 'Ananya Reddy', 'Priya Patel', 'Rohan Deshmukh'].includes(l.fullName))
            .map((l: any) => {
              const { tier, color } = LeaderboardService.getTier(l.xp || 0);
              return {
                rank: 0,
                userId: l.userId || `server_${l.fullName}`,
                fullName: l.fullName || 'Anonymous Developer',
                avatarUrl: l.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(l.fullName || 'user')}`,
                email: l.email,
                totalXp: l.xp || 0,
                weeklyXp: l.weeklyXp || l.xp || 0,
                streakDays: l.streakDays || 1,
                tierName: tier,
                tierColor: color,
                completedLessonsCount: l.completedLessonsCount || 0,
                bestExamScore: l.bestExamScore || null,
                distinctionBadge: l.distinctionBadge || null,
                isCurrentUser: false,
                isDemo: false,
              };
            });
        }
      }
    } catch {
      // Offline fallback: returns empty list
    }
    return [];
  }

  /**
   * Get relative rank and standing of the current user
   */
  static getCurrentUserStanding(
    period: LeaderboardPeriod = 'all_time',
    trackFilter: LeaderboardTrackFilter = 'all',
    serverLeaders: LeaderboardEntry[] = []
  ): UserRankStanding | null {
    const list = this.getLeaderboard(period, trackFilter, serverLeaders);
    const userIdx = list.findIndex((e) => e.isCurrentUser);
    if (userIdx === -1) return null;

    const entry = list[userIdx];
    const prevEntry = userIdx > 0 ? list[userIdx - 1] : null;

    const scoreField = period === 'weekly' ? 'weeklyXp' : 'totalXp';
    const xpToNext = prevEntry ? Math.max(1, prevEntry[scoreField] - entry[scoreField] + 1) : 0;

    return {
      rank: entry.rank,
      totalParticipants: list.length,
      entry,
      xpToNextRank: xpToNext,
      nextRankUser: prevEntry ? prevEntry.fullName : undefined,
    };
  }

  /**
   * Award exam completion XP (Grounded scale: +50 pass, +75 honors, +100 gold distinction)
   */
  static awardExamXp(scorePercent: number): { xpAwarded: number; distinctionTier: 'Gold' | 'Silver' | 'Standard' } {
    let xp = this.EXAM_PASS_XP;
    let tier: 'Gold' | 'Silver' | 'Standard' = 'Standard';

    if (scorePercent >= 90) {
      xp = this.EXAM_DISTINCTION_XP;
      tier = 'Gold';
    } else if (scorePercent >= 70) {
      xp = this.EXAM_HONORS_XP;
      tier = 'Silver';
    }

    ProgressStorage.addXp(xp);
    return { xpAwarded: xp, distinctionTier: tier };
  }
}
