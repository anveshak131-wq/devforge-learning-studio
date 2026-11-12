import { GuidedProject } from '../../types';
import { KANBAN_PROJECT } from './kanbanProject';
import { REDUX_PROJECT } from './reduxProject';
import { ECOMMERCE_SQL_PROJECT } from './ecommerceSqlProject';
import { WEATHER_PROJECT } from './weatherProject';

export const ALL_PROJECTS: GuidedProject[] = [
  KANBAN_PROJECT,
  REDUX_PROJECT,
  ECOMMERCE_SQL_PROJECT,
  WEATHER_PROJECT
];

export function getProjectBySlug(slug: string): GuidedProject | undefined {
  return ALL_PROJECTS.find(p => p.slug === slug || p.id === slug);
}
