import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Code2, 
  BookOpen, 
  HelpCircle,
  TrendingUp,
  AlertCircle,
  Key
} from 'lucide-react';
import { CourseQuiz, QuizAttemptResult, QuizQuestion } from '../../types/quiz';
import { QuizService } from '../../services/quizService';

interface CourseQuizModalProps {
  isOpen: boolean;
  quiz: CourseQuiz | null;
  onClose: () => void;
  onViewCertificate?: (trackId: string) => void;
  initialMode?: 'quiz' | 'answer_key';
}

export const CourseQuizModal: React.FC<CourseQuizModalProps> = ({
  isOpen,
  quiz,
  onClose,
  onViewCertificate,
  initialMode = 'quiz'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<QuizAttemptResult | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [showReview, setShowReview] = useState(false);
  const [isAnswerKeyMode, setIsAnswerKeyMode] = useState<boolean>(initialMode === 'answer_key');
  const timerRef = useRef<any>(null);

  // Initialize or reset quiz on open
  useEffect(() => {
    if (isOpen && quiz) {
      setCurrentIndex(0);
      setUserAnswers({});
      setIsSubmitted(false);
      setResult(null);
      setShowReview(false);
      setIsAnswerKeyMode(initialMode === 'answer_key');

      const limit = (initialMode === 'answer_key') ? 0 : (quiz.timeLimitSeconds || 0);
      setTimeRemaining(limit);

      if (limit > 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          setTimeRemaining((prev) => {
            if (prev <= 1) {
              clearInterval(timerRef.current);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, quiz, initialMode]);

  // Auto-submit if countdown reaches 0
  useEffect(() => {
    if (isOpen && quiz && quiz.timeLimitSeconds && timeRemaining === 0 && !isSubmitted) {
      handleFinalSubmit();
    }
  }, [timeRemaining, isSubmitted, isOpen, quiz]);

  if (!isOpen || !quiz) return null;

  const currentQ: QuizQuestion = quiz.questions[currentIndex];
  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(userAnswers).length;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleFinalSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = (quiz.timeLimitSeconds || 0) > 0 
      ? (quiz.timeLimitSeconds || 0) - timeRemaining 
      : 0;
    
    const evalResult = QuizService.submitQuiz(quiz, userAnswers, timeSpent);
    setResult(evalResult);
    setIsSubmitted(true);

    if (evalResult.passed) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    }
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setResult(null);
    setShowReview(false);
    setTimeRemaining(quiz.timeLimitSeconds || 0);

    if ((quiz.timeLimitSeconds || 0) > 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => (prev <= 1 ? 0 : prev - 1));
      }, 1000);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col font-sans my-auto max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 md:px-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                quiz.kind === 'final_exam'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
              }`}>
                {quiz.kind === 'final_exam' ? '🏆 Final Certification Exam' : '⚡ Module Checkpoint Quiz'}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Passing: {quiz.passingScorePercent}%
              </span>
            </div>
            <h2 className="text-sm md:text-base font-bold text-white truncate">
              {quiz.title}
            </h2>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Mode Switcher: Practice vs Answer Key */}
            <button
              onClick={() => {
                if (!isAnswerKeyMode) {
                  if (timerRef.current) clearInterval(timerRef.current);
                }
                setIsAnswerKeyMode(!isAnswerKeyMode);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5 border transition ${
                isAnswerKeyMode
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title="Toggle between taking the quiz and viewing the full answer key"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{isAnswerKeyMode ? 'Answer Key Active' : 'View Answers Key'}</span>
              <span className="sm:hidden">{isAnswerKeyMode ? 'Key' : 'Answers'}</span>
            </button>

            {/* Timer (if applicable, not in answer key mode, and not submitted) */}
            {(quiz.timeLimitSeconds || 0) > 0 && !isSubmitted && !isAnswerKeyMode && (
              <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-mono text-xs font-bold border transition ${
                timeRemaining < 120 
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse' 
                  : 'bg-slate-800 text-slate-200 border-slate-700'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(timeRemaining)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Close Assessment"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar (when answering questions) */}
        {!isSubmitted && (
          <div className="w-full bg-slate-800 h-1.5">
            <div 
              className={`h-full transition-all duration-300 ${
                quiz.kind === 'final_exam'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                  : 'bg-gradient-to-r from-indigo-500 to-cyan-400'
              }`}
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 md:p-8 overflow-y-auto space-y-6 flex-1">
          {/* ========================================================= */}
          {/* STATE 1: ACTIVE QUIZ QUESTIONS */}
          {/* ========================================================= */}
          {!isSubmitted && (
            <div className="space-y-6">
              {/* Question Navigation Chips */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">
                  Question <strong className="text-white font-mono">{currentIndex + 1}</strong> of <strong className="text-white font-mono">{totalQuestions}</strong>
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {answeredCount}/{totalQuestions} Answered
                </span>
              </div>

              {/* Question Prompt */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-indigo-300 border border-slate-700 uppercase tracking-wider">
                    {currentQ.type.replace(/_/g, ' ')}
                  </span>
                  {currentQ.skillCategory && (
                    <span className="text-xs text-slate-400 font-mono">
                      • {currentQ.skillCategory}
                    </span>
                  )}
                </div>

                <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                  {currentQ.prompt}
                </h3>

                {/* Optional Code Snippet */}
                {currentQ.codeSnippet && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto shadow-inner leading-relaxed">
                    <pre>
                      <code>{currentQ.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Option Choices */}
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = userAnswers[currentQ.id] === oIdx;
                  const isCorrect = oIdx === currentQ.correctOptionIndex;
                  const letter = String.fromCharCode(65 + oIdx); // A, B, C, D

                  return (
                    <button
                      key={oIdx}
                      onClick={() => !isAnswerKeyMode && handleSelectOption(oIdx)}
                      className={`p-3.5 rounded-xl border text-left transition flex items-start space-x-3 text-xs md:text-sm font-medium ${
                        isAnswerKeyMode && isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-200 shadow-md shadow-emerald-950/30 font-semibold'
                          : isSelected
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10'
                          : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600 text-slate-300'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 transition ${
                        isAnswerKeyMode && isCorrect
                          ? 'bg-emerald-500 text-slate-950 shadow'
                          : isSelected 
                          ? 'bg-indigo-500 text-white shadow' 
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {letter}
                      </span>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <span className="leading-relaxed">{opt}</span>
                        {isAnswerKeyMode && isCorrect && (
                          <span className="ml-2 inline-flex items-center text-[10px] font-mono font-bold text-emerald-400 uppercase">
                            ✓ Correct Answer
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Answer Key Explanation Box */}
              {isAnswerKeyMode && (
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200 space-y-1.5 leading-relaxed shadow-lg">
                  <div className="flex items-center space-x-1.5 font-bold text-indigo-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Verified Solution & Technical Rationale:</span>
                  </div>
                  <p className="text-slate-200 pl-5 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  {currentQ.skillCategory && (
                    <div className="pl-5 pt-0.5 text-[11px] font-mono text-slate-400">
                      Tested Skill: <strong className="text-amber-300">{currentQ.skillCategory}</strong>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* STATE 2: RESULTS SCREEN ("KNOWLEDGE DOCTOR") */}
          {/* ========================================================= */}
          {isSubmitted && result && !showReview && (
            <div className="space-y-6 text-center">
              {/* Score Circular Badge */}
              <div className="relative inline-flex items-center justify-center">
                <div className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center shadow-2xl ${
                  result.passed 
                    ? 'border-emerald-500/80 bg-emerald-950/30 shadow-emerald-500/20' 
                    : 'border-rose-500/80 bg-rose-950/30 shadow-rose-500/20'
                }`}>
                  <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
                    {result.scorePercent}%
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    {result.score} / {result.totalQuestions} Correct
                  </span>
                </div>
              </div>

              {/* Status Header */}
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    result.passed 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}>
                    {result.passed ? `🏆 Passed • ${result.grade}` : '⚠️ Review Required'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {result.passed 
                    ? (result.grade === 'Distinction' ? 'Exceptional Performance!' : 'Assessment Successfully Completed!') 
                    : 'Keep Practicing to Unlock Credential'}
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  {result.passed 
                    ? `Congratulations! You scored ${result.scorePercent}% and earned +${quiz.xpReward} XP.` 
                    : `You scored ${result.scorePercent}%. A score of ${quiz.passingScorePercent}% is required to pass.`}
                </p>
              </div>

              {/* Stamped Certificate Callout (For Final Exam) */}
              {quiz.kind === 'final_exam' && result.passed && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Official Exam Score Stamped on Certificate
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Score of <strong>{result.scorePercent}% ({result.grade})</strong> is now officially stamped on your public verification page.
                      </p>
                    </div>
                  </div>

                  {onViewCertificate && (
                    <button
                      onClick={() => {
                        onClose();
                        onViewCertificate(quiz.trackId);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs shrink-0 shadow-md transition"
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              )}

              {/* Knowledge Doctor: Skill Breakdown */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Knowledge Doctor: Topic Strengths & Weaknesses</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {Object.entries(result.skillsBreakdown).map(([skill, data], idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 truncate">{skill}</span>
                        <span className={`font-mono text-xs font-bold ${
                          data.percent >= 80 ? 'text-emerald-400' : data.percent >= 50 ? 'text-amber-400' : 'text-rose-400'
                        }`}>
                          {data.percent}% ({data.correct}/{data.total})
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            data.percent >= 80 ? 'bg-emerald-500' : data.percent >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                          }`}
                          style={{ width: `${data.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STATE 3: DETAILED REVIEW OF ALL QUESTIONS */}
          {/* ========================================================= */}
          {isSubmitted && result && showReview && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Question-by-Question Explanations ({result.score}/{result.totalQuestions})</span>
                </h3>
                <button
                  onClick={() => setShowReview(false)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  Back to Score Summary
                </button>
              </div>

              <div className="space-y-4">
                {quiz.questions.map((q, idx) => {
                  const userChoice = result.userAnswers[q.id];
                  const isCorrect = userChoice === q.correctOptionIndex;

                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl border space-y-3 ${
                        isCorrect 
                          ? 'bg-slate-900/60 border-emerald-500/30' 
                          : 'bg-slate-900/60 border-rose-500/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                          <span className="text-xs font-bold text-slate-300">
                            Question {idx + 1}
                          </span>
                          {q.skillCategory && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                              {q.skillCategory}
                            </span>
                          )}
                        </div>

                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                          isCorrect 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>

                      <p className="text-xs md:text-sm font-bold text-white">
                        {q.prompt}
                      </p>

                      {q.codeSnippet && (
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                          <pre><code>{q.codeSnippet}</code></pre>
                        </div>
                      )}

                      {/* Options breakdown */}
                      <div className="space-y-1.5 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const isUserPicked = userChoice === oIdx;
                          const isRightAnswer = q.correctOptionIndex === oIdx;

                          let badgeClass = 'border-slate-800 bg-slate-950/40 text-slate-400';
                          if (isRightAnswer) badgeClass = 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300 font-semibold';
                          else if (isUserPicked) badgeClass = 'border-rose-500/50 bg-rose-950/30 text-rose-300 line-through';

                          return (
                            <div key={oIdx} className={`p-2 rounded-lg border flex items-center justify-between text-xs ${badgeClass}`}>
                              <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                              {isRightAnswer && <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Correct Answer</span>}
                              {isUserPicked && !isRightAnswer && <span className="text-[10px] uppercase tracking-wider text-rose-400 font-bold">Your Choice</span>}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200/90 leading-relaxed space-y-1">
                        <span className="font-bold text-indigo-300 block text-[10px] uppercase tracking-wider">
                          Explanation:
                        </span>
                        <p>{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          {!isSubmitted ? (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold flex items-center space-x-1 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-2">
                {currentIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-indigo-600/20 transition"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : isAnswerKeyMode ? (
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center space-x-1.5 border border-slate-700 transition"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Done Reviewing</span>
                  </button>
                ) : (
                  <button
                    onClick={handleFinalSubmit}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-emerald-500/20 transition"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Submit Assessment</span>
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleRetake}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 border border-slate-700 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>

                {!showReview && (
                  <button
                    onClick={() => setShowReview(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold flex items-center space-x-1.5 border border-slate-700 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Review Explanations</span>
                  </button>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition"
              >
                Back to Course
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
