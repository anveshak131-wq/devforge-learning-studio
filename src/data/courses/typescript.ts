import { Track } from '../../types';
import { tsModule1Lessons } from './typescript/module1_primitives';
import { tsModule2Lessons } from './typescript/module2_arrays_tuples';
import { tsModule3Lessons } from './typescript/module3_objects_interfaces';
import { tsModule4Lessons } from './typescript/module4_functions';
import { tsModule5Lessons } from './typescript/module5_unions_intersections';
import { tsModule6Lessons } from './typescript/module6_enums_constants';
import { tsModule7Lessons } from './typescript/module7_generics_basics';
import { tsModule8Lessons } from './typescript/module8_generic_constraints';
import { tsModule9Lessons } from './typescript/module9_narrowing_guards';
import { tsModule10Lessons } from './typescript/module10_utility_types';
import { tsModule11Lessons } from './typescript/module11_advanced_types';
import { tsModule12Lessons } from './typescript/module12_classes_oop';
import { tsModule13Lessons } from './typescript/module13_modules_namespaces';
import { tsModule14Lessons } from './typescript/module14_capstones';

export const TYPESCRIPT_TRACK: Track = {
  id: 'typescript',
  title: 'TypeScript: Beginner to Pro (150 Topics)',
  slug: 'typescript',
  language: 'typescript',
  icon: 'ShieldCheck',
  color: 'from-indigo-400 to-cyan-500',
  tagline: 'Write safer, scalable JavaScript with static type checking across 150 comprehensive lessons.',
  description: 'Master TypeScript from scratch to enterprise-grade architectures: primitive types, interfaces, generics, narrowing, utility types, template literals, and design patterns.',
  lessons: [
    ...tsModule1Lessons,
    ...tsModule2Lessons,
    ...tsModule3Lessons,
    ...tsModule4Lessons,
    ...tsModule5Lessons,
    ...tsModule6Lessons,
    ...tsModule7Lessons,
    ...tsModule8Lessons,
    ...tsModule9Lessons,
    ...tsModule10Lessons,
    ...tsModule11Lessons,
    ...tsModule12Lessons,
    ...tsModule13Lessons,
    ...tsModule14Lessons,
  ],
};
