import { Track } from '../../types';
import { pythonModule1Lessons } from './python/module1_basics';
import { pythonModule2Lessons } from './python/module2_operators';
import { pythonModule3Lessons } from './python/module3_strings';
import { pythonModule4Lessons } from './python/module4_control_flow';
import { pythonModule5Lessons } from './python/module5_loops';
import { pythonModule6Lessons } from './python/module6_functions';
import { pythonModule7Lessons } from './python/module7_arrays';
import { pythonModule8Lessons } from './python/module8_dictionaries';
import { pythonModule9Lessons } from './python/module9_sets_tuples';
import { pythonModule10Lessons } from './python/module10_comprehensions';
import { pythonModule11Lessons } from './python/module11_classes';
import { pythonModule12Lessons } from './python/module12_capstones';

export const PYTHON_TRACK: Track = {
  id: 'python',
  title: 'Python: Beginner to Pro (110 Topics)',
  slug: 'python',
  language: 'python',
  icon: 'Terminal',
  color: 'from-emerald-400 to-teal-500',
  tagline: "The world's most popular language for beginners, data science, and AI — made easy with simple steps.",
  description: 'A complete 110-lesson roadmap through Python: syntax, operators, string methods, control flow, loops, functions, lists, dictionaries, tuples, sets, comprehensions, OOP classes, and real-world capstones.',
  lessons: [
    ...pythonModule1Lessons,
    ...pythonModule2Lessons,
    ...pythonModule3Lessons,
    ...pythonModule4Lessons,
    ...pythonModule5Lessons,
    ...pythonModule6Lessons,
    ...pythonModule7Lessons,
    ...pythonModule8Lessons,
    ...pythonModule9Lessons,
    ...pythonModule10Lessons,
    ...pythonModule11Lessons,
    ...pythonModule12Lessons,
  ],
};
