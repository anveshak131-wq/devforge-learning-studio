import { Badge } from '../types';

export const ALL_BADGES: Badge[] = [
  {
    id: 'badge-welcome',
    title: 'First Step',
    description: 'Enrolled in DevForge and initialized your developer workstation.',
    icon: 'Sparkles',
    color: 'from-amber-400 to-orange-500',
    condition: () => true
  },
  {
    id: 'badge-first-code',
    title: 'Code Initiator',
    description: 'Successfully completed your first coding lesson.',
    icon: 'Terminal',
    color: 'from-emerald-400 to-teal-500',
    condition: (stats) => stats.completedLessonIds.length >= 1
  },
  {
    id: 'badge-sql-apprentice',
    title: 'Query Architect',
    description: 'Mastered SQL joins and aggregate analytics.',
    icon: 'Database',
    color: 'from-blue-500 to-indigo-600',
    condition: (stats) => stats.completedLessonIds.some(id => id.startsWith('sql-'))
  },
  {
    id: 'badge-typescript-hero',
    title: 'Type Safety Guardian',
    description: 'Conquered advanced TypeScript generics and discriminated unions.',
    icon: 'ShieldCheck',
    color: 'from-indigo-500 to-purple-600',
    condition: (stats) => stats.completedLessonIds.some(id => id.startsWith('ts-'))
  },
  {
    id: 'badge-project-builder',
    title: 'Project Builder',
    description: 'Completed your first guided full-scale software project.',
    icon: 'Hammer',
    color: 'from-pink-500 to-rose-600',
    condition: (stats) => stats.completedProjectIds.length >= 1 || stats.completedMilestoneIds.length >= 2
  },
  {
    id: 'badge-polyglot',
    title: 'Polyglot Engineer',
    description: 'Wrote code across JavaScript, SQL, and TypeScript.',
    icon: 'Cpu',
    color: 'from-purple-500 to-pink-500',
    condition: (stats) => {
      const hasJs = stats.completedLessonIds.some(id => id.startsWith('js-'));
      const hasSql = stats.completedLessonIds.some(id => id.startsWith('sql-'));
      const hasTs = stats.completedLessonIds.some(id => id.startsWith('ts-'));
      return hasJs && hasSql && hasTs;
    }
  }
];
