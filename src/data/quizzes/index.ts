import { CourseQuiz } from '../../types/quiz';
import { PYTHON_QUIZZES } from './pythonQuizzes';
import { SQL_QUIZZES } from './sqlQuizzes';

export const ALL_QUIZZES: CourseQuiz[] = [
  ...PYTHON_QUIZZES,
  ...SQL_QUIZZES
];

export function getQuizzesForTrack(trackId: string): CourseQuiz[] {
  const cleanId = trackId.toLowerCase();
  return ALL_QUIZZES.filter(q => q.trackId.toLowerCase() === cleanId);
}

export function getQuizById(quizId: string): CourseQuiz | undefined {
  return ALL_QUIZZES.find(q => q.id === quizId);
}

export function getFinalExamForTrack(trackId: string): CourseQuiz | undefined {
  const cleanId = trackId.toLowerCase();
  return ALL_QUIZZES.find(q => q.trackId.toLowerCase() === cleanId && q.kind === 'final_exam');
}

export function getModuleCheckpointQuiz(trackId: string, moduleCategory: string): CourseQuiz | undefined {
  const cleanId = trackId.toLowerCase();
  // Exact or partial category match (e.g. "Module 1")
  return ALL_QUIZZES.find(q => {
    if (q.trackId.toLowerCase() !== cleanId || q.kind !== 'module_checkpoint') return false;
    if (q.moduleCategory && q.moduleCategory.toLowerCase() === moduleCategory.toLowerCase()) return true;
    // Check if both start with e.g. "Module 1:"
    const qModMatch = q.moduleCategory?.match(/Module\s*(\d+)/i);
    const catModMatch = moduleCategory.match(/Module\s*(\d+)/i);
    if (qModMatch && catModMatch && qModMatch[1] === catModMatch[1]) return true;
    return false;
  });
}
