import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Sparkles, Award, ArrowRight, Brain, RotateCcw } from 'lucide-react';
import { PLACEMENT_QUESTIONS } from '../../data/placementQuiz';
import { TierLevel, UserStats } from '../../types';
import { ProgressStorage } from '../../services/progressStorage';

interface PlacementQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTierSelected: (tier: TierLevel) => void;
}

export const PlacementQuizModal: React.FC<PlacementQuizModalProps> = ({
  isOpen,
  onClose,
  onTierSelected
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [recommendedTier, setRecommendedTier] = useState<TierLevel>(1);

  if (!isOpen) return null;

  const currentQ = PLACEMENT_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updated);

    if (currentQuestionIndex < PLACEMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate recommended tier
      const chosenTiers = updated.map((ansIdx, qIdx) => 
        PLACEMENT_QUESTIONS[qIdx].options[ansIdx].indicatesTier
      );
      const avgTier = Math.round(chosenTiers.reduce((a, b) => a + b, 0) / chosenTiers.length);
      const finalTier: TierLevel = avgTier <= 1 ? 1 : avgTier <= 3 ? 3 : 5;

      setRecommendedTier(finalTier);
      setQuizFinished(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      ProgressStorage.setDiagnosedTier(finalTier);
    }
  };

  const handleApplyTier = () => {
    onTierSelected(recommendedTier);
    onClose();
  };

  const tierLabels: Record<TierLevel, { title: string; desc: string; color: string }> = {
    1: {
      title: 'Tier 1: Foundations (Zero-to-One)',
      desc: 'Start with programming primitives, variables, template strings, and introductory SQL/Python.',
      color: 'from-emerald-500 to-teal-500'
    },
    2: {
      title: 'Tier 2: Core Concepts',
      desc: 'Build confidence with loops, conditionals, object modeling, and data transformations.',
      color: 'from-blue-500 to-cyan-500'
    },
    3: {
      title: 'Tier 3: Intermediate Mastery',
      desc: 'Dive into functional array pipelines, asynchronous promises, relational joins, and TypeScript generics.',
      color: 'from-indigo-500 to-purple-500'
    },
    4: {
      title: 'Tier 4: Advanced Architecture',
      desc: 'Conquer closures, event loop internals, SQL CTEs, and discriminated union state machines.',
      color: 'from-purple-500 to-pink-500'
    },
    5: {
      title: 'Tier 5: Masterclass & Internals',
      desc: 'Master JavaScript Proxies, SQL Window Functions, Python Decorators, and TypeScript infer type gymnastics.',
      color: 'from-amber-400 to-rose-500'
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-base">Skill Level Diagnostic Placement</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {!quizFinished ? (
            <>
              {/* Stepper info */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Question {currentQuestionIndex + 1} of {PLACEMENT_QUESTIONS.length}</span>
                <span className="font-mono text-indigo-400 uppercase font-semibold">{currentQ.language}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / PLACEMENT_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question title & scenario */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-white leading-snug">{currentQ.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  {currentQ.scenario}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-indigo-950/30 hover:border-indigo-500/50 text-left transition flex items-center space-x-3 group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white flex items-center justify-center text-xs font-mono font-bold transition shrink-0">
                      {opt.label}
                    </span>
                    <span className="text-xs text-slate-200 group-hover:text-white leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className="text-center space-y-5 py-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px] mx-auto shadow-xl shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Placement Diagnostic Complete
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  Your Recommended Level:
                </h3>
              </div>

              <div className={`p-4 rounded-xl bg-gradient-to-r ${tierLabels[recommendedTier].color} text-white space-y-1 shadow-lg`}>
                <h4 className="text-base font-bold">{tierLabels[recommendedTier].title}</h4>
                <p className="text-xs opacity-90">{tierLabels[recommendedTier].desc}</p>
              </div>

              <p className="text-xs text-slate-400 max-w-md mx-auto">
                We have tailored the course roadmap to match your experience. You can switch between beginner, intermediate, and expert lessons at any time.
              </p>

              <button
                onClick={handleApplyTier}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition"
              >
                <span>Jump to {tierLabels[recommendedTier].title.split(':')[0]} Lessons</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
