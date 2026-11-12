import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, RotateCcw, Brain, Eye, ChevronRight } from 'lucide-react';
import { ALL_FLASHCARDS } from '../../data/flashcards';
import { Flashcard, UserStats } from '../../types';
import { ProgressStorage } from '../../services/progressStorage';

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStatsUpdate: (stats: UserStats) => void;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  isOpen,
  onClose,
  onStatsUpdate
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  if (!isOpen) return null;

  const card = ALL_FLASHCARDS[currentIndex];

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = (mastered: boolean) => {
    if (mastered) {
      const updated = ProgressStorage.markFlashcardReviewed(card.id);
      onStatsUpdate(updated);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    setIsRevealed(false);
    setCurrentIndex((currentIndex + 1) % ALL_FLASHCARDS.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-base">Concept Recall & Spaced Repetition</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1 font-sans">
          {/* Card Meta */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-indigo-400 uppercase font-bold tracking-wider">
              {card.language} • {card.category}
            </span>
            <span className="text-slate-500 font-mono">
              Card {currentIndex + 1} of {ALL_FLASHCARDS.length}
            </span>
          </div>

          {/* Question */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white leading-snug">{card.question}</h4>
            {card.codeSnippet && (
              <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs overflow-x-auto">
                <code>{card.codeSnippet}</code>
              </pre>
            )}
          </div>

          {/* Reveal button or Revealed Answer */}
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Reveal Explanation & Code Answer</span>
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/40 space-y-3">
              <div className="flex items-center space-x-1.5 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Concept Breakdown</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {card.answerExplanation}
              </p>
              {card.codeAnswer && (
                <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto">
                  <code>{card.codeAnswer}</code>
                </pre>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {isRevealed && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => handleNext(false)}
              className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              Review Again Later
            </button>
            <button
              onClick={() => handleNext(true)}
              className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-600/30 transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>I Knew This (+15 XP)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
