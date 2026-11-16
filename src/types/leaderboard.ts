export type LeaderboardPeriod = 'all_time' | 'weekly';
export type LeaderboardTrackFilter = 'all' | 'python' | 'sql';

export type LeagueTier = 'Foundations' | 'Practitioner' | 'Specialist' | 'Master';

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  fullName: string;
  avatarUrl: string;
  email?: string;
  totalXp: number;
  weeklyXp: number;
  streakDays: number;
  tierName: LeagueTier;
  tierColor: string;
  completedLessonsCount: number;
  bestExamScore: number | null;
  distinctionBadge: 'Gold' | 'Silver' | null;
  isCurrentUser: boolean;
  isDemo?: boolean;
}

export interface UserRankStanding {
  rank: number;
  totalParticipants: number;
  entry: LeaderboardEntry;
  xpToNextRank: number;
  nextRankUser?: string;
}

export interface LeaderboardStats {
  totalLearners: number;
  averageXp: number;
  topScore: number;
  weeklyActiveCount: number;
}
