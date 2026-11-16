import { CourseQuiz, QuizAttemptResult, QuizQuestion } from '../types/quiz';
import { ALL_QUIZZES, getQuizzesForTrack, getQuizById, getFinalExamForTrack, getModuleCheckpointQuiz } from '../data/quizzes';
import { ProgressStorage } from './progressStorage';
import { AuthService } from './authService';

const ATTEMPTS_STORAGE_KEY = 'devforge_quiz_attempts_v1';

export class QuizService {
  /**
   * Get all registered quizzes for a track (Python, SQL)
   */
  static getQuizzes(trackId: string): CourseQuiz[] {
    return getQuizzesForTrack(trackId);
  }

  static getQuiz(quizId: string): CourseQuiz | undefined {
    return getQuizById(quizId);
  }

  static getFinalExam(trackId: string): CourseQuiz | undefined {
    return getFinalExamForTrack(trackId);
  }

  static getModuleCheckpoint(trackId: string, moduleCategory: string): CourseQuiz | undefined {
    return getModuleCheckpointQuiz(trackId, moduleCategory);
  }

  /**
   * Get all stored quiz attempts from localStorage
   */
  static getAllAttempts(): Record<string, QuizAttemptResult> {
    try {
      const data = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  /**
   * Get best attempt for a specific quiz
   */
  static getBestAttempt(quizId: string): QuizAttemptResult | null {
    const attempts = this.getAllAttempts();
    return attempts[quizId] || null;
  }

  /**
   * Submit and record a quiz attempt
   */
  static submitQuiz(
    quiz: CourseQuiz,
    userAnswers: Record<string, number>,
    timeTakenSeconds: number
  ): QuizAttemptResult {
    let correctCount = 0;
    const skillsMap: Record<string, { correct: number; total: number }> = {};

    quiz.questions.forEach((q) => {
      const skill = q.skillCategory || 'General Knowledge';
      if (!skillsMap[skill]) {
        skillsMap[skill] = { correct: 0, total: 0 };
      }
      skillsMap[skill].total += 1;

      const userChoice = userAnswers[q.id];
      if (userChoice === q.correctOptionIndex) {
        correctCount += 1;
        skillsMap[skill].correct += 1;
      }
    });

    const totalQuestions = quiz.questions.length;
    const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const passed = scorePercent >= quiz.passingScorePercent;

    let grade: 'Distinction' | 'High Honors' | 'Honors' | 'Needs Review' = 'Needs Review';
    if (scorePercent >= 90) grade = 'Distinction';
    else if (scorePercent >= 80) grade = 'High Honors';
    else if (scorePercent >= 70) grade = 'Honors';

    const skillsBreakdown: Record<string, { correct: number; total: number; percent: number }> = {};
    Object.entries(skillsMap).forEach(([skill, data]) => {
      skillsBreakdown[skill] = {
        correct: data.correct,
        total: data.total,
        percent: Math.round((data.correct / data.total) * 100),
      };
    });

    const result: QuizAttemptResult = {
      quizId: quiz.id,
      trackId: quiz.trackId,
      quizTitle: quiz.title,
      kind: quiz.kind,
      completedAt: new Date().toISOString(),
      score: correctCount,
      totalQuestions,
      scorePercent,
      passed,
      timeTakenSeconds,
      userAnswers,
      grade,
      skillsBreakdown,
    };

    // Save if first attempt or better score
    const attempts = this.getAllAttempts();
    const existing = attempts[quiz.id];
    if (!existing || result.scorePercent >= existing.scorePercent) {
      attempts[quiz.id] = result;
      try {
        localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(attempts));
      } catch (err) {
        console.warn('Could not save quiz attempt:', err);
      }
    }

    // Award XP if passed
    if (passed) {
      ProgressStorage.addXp(quiz.xpReward);
    }

    // If this was the Final Certification Exam, stamp official score on Certificate
    if (quiz.kind === 'final_exam' && passed) {
      AuthService.attachExamScoreToCertificate(quiz.trackId, scorePercent);
    }

    return result;
  }

  /**
   * Get summary of quiz completion for a course track
   */
  static getTrackQuizProgress(trackId: string): {
    totalQuizzes: number;
    completedCount: number;
    passedCount: number;
    averageScore: number;
    finalExamScore: number | null;
    hasPassedFinalExam: boolean;
  } {
    const quizzes = this.getQuizzes(trackId);
    const attempts = this.getAllAttempts();

    let completedCount = 0;
    let passedCount = 0;
    let scoreSum = 0;
    let finalExamScore: number | null = null;
    let hasPassedFinalExam = false;

    quizzes.forEach((q) => {
      const att = attempts[q.id];
      if (att) {
        completedCount++;
        if (att.passed) passedCount++;
        scoreSum += att.scorePercent;
        if (q.kind === 'final_exam') {
          finalExamScore = att.scorePercent;
          hasPassedFinalExam = att.passed;
        }
      }
    });

    const averageScore = completedCount > 0 ? Math.round(scoreSum / completedCount) : 0;

    return {
      totalQuizzes: quizzes.length,
      completedCount,
      passedCount,
      averageScore,
      finalExamScore,
      hasPassedFinalExam,
    };
  }
}
