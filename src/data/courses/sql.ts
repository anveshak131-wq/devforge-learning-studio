import { Track } from '../../types';
import { sqlModule1Lessons } from './sql/module1_basics';
import { sqlModule2Lessons } from './sql/module2_filtering';
import { sqlModule3Lessons } from './sql/module3_patterns';
import { sqlModule4Lessons } from './sql/module4_sorting';
import { sqlModule5Lessons } from './sql/module5_aggregates';
import { sqlModule6Lessons } from './sql/module6_joins';
import { sqlModule7Lessons } from './sql/module7_subqueries';
import { sqlModule8Lessons } from './sql/module8_ctes';
import { sqlModule9Lessons } from './sql/module9_strings';
import { sqlModule10Lessons } from './sql/module10_dates';
import { sqlModule11Lessons } from './sql/module11_dml';
import { sqlModule12Lessons } from './sql/module12_ddl';
import { sqlModule13Lessons } from './sql/module13_window_functions';
import { sqlModule14Lessons } from './sql/module14_capstones';
import { sqlModule15Lessons } from './sql/module15_security_perf';

export const SQL_TRACK: Track = {
  id: 'sql',
  title: 'SQL: Beginner to Pro (150 Topics)',
  slug: 'sql',
  language: 'sql',
  icon: 'Database',
  color: 'from-cyan-400 to-blue-500',
  tagline: 'Master database querying, filtering, multi-table JOINs, subqueries, CTEs, and window functions across 150 lessons.',
  description: 'Master SQL using a real in-browser SQLite database. Learn SELECT, WHERE filters, ORDER BY, aggregate statistics, multi-table JOINs, CTEs, DML, DDL, window functions, and business intelligence analytics.',
  lessons: [
    ...sqlModule1Lessons,
    ...sqlModule2Lessons,
    ...sqlModule3Lessons,
    ...sqlModule4Lessons,
    ...sqlModule5Lessons,
    ...sqlModule6Lessons,
    ...sqlModule7Lessons,
    ...sqlModule8Lessons,
    ...sqlModule9Lessons,
    ...sqlModule10Lessons,
    ...sqlModule11Lessons,
    ...sqlModule12Lessons,
    ...sqlModule13Lessons,
    ...sqlModule14Lessons,
    ...sqlModule15Lessons,
  ],
};
