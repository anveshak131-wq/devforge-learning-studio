import { Track } from '../../types';
import { MODULE_1_LESSONS } from './javascript/module1_basics';
import { MODULE_2_LESSONS } from './javascript/module2_operators';
import { MODULE_3_LESSONS } from './javascript/module3_strings';
import { MODULE_4_LESSONS } from './javascript/module4_control_flow';
import { MODULE_5_LESSONS } from './javascript/module5_loops';
import { MODULE_6_LESSONS } from './javascript/module6_functions';
import { MODULE_7_LESSONS } from './javascript/module7_arrays';
import { MODULE_8_LESSONS } from './javascript/module8_advanced_arrays';
import { module9Lessons } from './javascript/module9_objects';
import { module10Lessons } from './javascript/module10_classes';
import { module11Lessons } from './javascript/module11_errors_collections';
import { module12Lessons } from './javascript/module12_async';
import { module13Lessons } from './javascript/module13_capstones';

export const JAVASCRIPT_TRACK: Track = {
  id: 'javascript',
  title: 'JavaScript: Beginner to Pro (150 Topics)',
  slug: 'javascript',
  language: 'javascript',
  icon: 'Zap',
  color: 'from-amber-400 to-yellow-500',
  tagline: 'Master modern JavaScript from absolute basics to advanced architecture across 150 comprehensive lessons.',
  description: 'A complete 150-lesson journey through JavaScript: syntax, operators, string methods, control flow, loops, functions, arrays, objects, OOP classes, error handling, modern collections, async/await, and real-world capstone projects.',
  lessons: [
    ...MODULE_1_LESSONS,
    ...MODULE_2_LESSONS,
    ...MODULE_3_LESSONS,
    ...MODULE_4_LESSONS,
    ...MODULE_5_LESSONS,
    ...MODULE_6_LESSONS,
    ...MODULE_7_LESSONS,
    ...MODULE_8_LESSONS,
    ...module9Lessons,
    ...module10Lessons,
    ...module11Lessons,
    ...module12Lessons,
    ...module13Lessons,
  ],
};
