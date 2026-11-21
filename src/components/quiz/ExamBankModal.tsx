import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Search,
  Filter,
  CheckCircle2,
  Award,
  ShieldCheck,
  BookOpen,
  Key,
  Copy,
  Check,
  Sparkles,
  Code2,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';
import { QuizQuestion } from '../../types/quiz';
import { PYTHON_EXAM_BANK } from '../../data/quizzes/examBankPython';
import { SQL_EXAM_BANK } from '../../data/quizzes/examBankSql';

interface ExamBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: 'all' | 'python' | 'sql';
}

const ITEMS_PER_PAGE = 20;

export const ExamBankModal: React.FC<ExamBankModalProps> = ({
  isOpen,
  onClose,
  initialTrack = 'all',
}) => {
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'python' | 'sql'>(initialTrack);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showAllAnswers, setShowAllAnswers] = useState(true);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync initial track when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedTrack(initialTrack);
      setCurrentPage(1);
    }
  }, [isOpen, initialTrack]);

  // Combine full 300 question pool
  const allQuestions = useMemo(() => {
    return [...PYTHON_EXAM_BANK, ...SQL_EXAM_BANK];
  }, []);

  // Filtered pool based on controls
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      // Track filter
      if (selectedTrack !== 'all' && q.trackId !== selectedTrack) {
        return false;
      }

      // Domain filter
      if (selectedDomain !== 'all' && q.domain !== selectedDomain) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const qLower = searchQuery.toLowerCase();
        const matchPrompt = q.prompt.toLowerCase().includes(qLower);
        const matchCode = q.codeSnippet?.toLowerCase().includes(qLower);
        const matchExpl = q.explanation.toLowerCase().includes(qLower);
        const matchSkill = q.skillCategory?.toLowerCase().includes(qLower);
        const matchOptions = q.options.some((opt) => opt.toLowerCase().includes(qLower));

        if (!matchPrompt && !matchCode && !matchExpl && !matchSkill && !matchOptions) {
          return false;
        }
      }

      return true;
    });
  }, [allQuestions, selectedTrack, selectedDomain, selectedDifficulty, searchQuery]);

  // Available domains for current track
  const availableDomains = useMemo(() => {
    const pool = selectedTrack === 'all'
      ? allQuestions
      : allQuestions.filter((q) => q.trackId === selectedTrack);
    const domainSet = new Set<string>();
    pool.forEach((q) => {
      if (q.domain) domainSet.add(q.domain);
    });
    return Array.from(domainSet);
  }, [allQuestions, selectedTrack]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE));
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredQuestions.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredQuestions, currentPage]);

  const handleCopyQuestion = (q: QuizQuestion, index: number) => {
    const text = [
      `Question #${index + 1} (${q.id}) [${q.trackId?.toUpperCase() || ''}]`,
      q.prompt,
      q.codeSnippet ? `\nCode:\n${q.codeSnippet}` : '',
      '\nOptions:',
      ...q.options.map((opt, idx) => `  ${String.fromCharCode(65 + idx)}) ${opt}${idx === q.correctOptionIndex ? ' [CORRECT]' : ''}`),
      `\nCorrect Answer: ${String.fromCharCode(65 + q.correctOptionIndex)}) ${q.options[q.correctOptionIndex]}`,
      `Explanation: ${q.explanation}`,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleQuestionReveal = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-indigo-500/30 shadow-2xl overflow-hidden font-sans">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-amber-950/40 flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-start space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  300-Question Master Certification Exam Bank
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  VERIFIED ANSWERS & EXPLANATIONS
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Explore the complete verified question bank powering DevForge proctored examinations across Python (150 questions) and SQL (150 questions).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-700 shrink-0"
            title="Close Exam Bank"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="p-4 bg-slate-950/80 border-b border-slate-800 space-y-3 shrink-0">
          {/* Top row: Track segmented tabs + Answer Visibility Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Track Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => {
                  setSelectedTrack('all');
                  setSelectedDomain('all');
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  selectedTrack === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌐 All Tracks (300)
              </button>
              <button
                onClick={() => {
                  setSelectedTrack('python');
                  setSelectedDomain('all');
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  selectedTrack === 'python'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🐍 Python (150)
              </button>
              <button
                onClick={() => {
                  setSelectedTrack('sql');
                  setSelectedDomain('all');
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  selectedTrack === 'sql'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🐬 SQL (150)
              </button>
            </div>

            {/* Answer Visibility Mode Toggle */}
            <button
              onClick={() => setShowAllAnswers(!showAllAnswers)}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center space-x-2 transition ${
                showAllAnswers
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {showAllAnswers ? <Eye className="w-3.5 h-3.5 text-amber-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{showAllAnswers ? 'Answers & Keys Revealed' : 'Answers Hidden (Self-Test)'}</span>
            </button>
          </div>

          {/* Bottom row: Search input + Domain + Difficulty filters */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
            {/* Search Input */}
            <div className="relative sm:col-span-6">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by topic, syntax, code keyword, or explanation..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition font-sans"
              />
            </div>

            {/* Domain Dropdown */}
            <div className="sm:col-span-4">
              <select
                value={selectedDomain}
                onChange={(e) => {
                  setSelectedDomain(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
              >
                <option value="all">All Domains ({availableDomains.length})</option>
                {availableDomains.map((dom) => (
                  <option key={dom} value={dom}>
                    {dom}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Dropdown */}
            <div className="sm:col-span-2">
              <select
                value={selectedDifficulty}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
              >
                <option value="all">Difficulty (All)</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Questions Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-950/50">
          {filteredQuestions.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-slate-400">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              <p className="text-sm font-semibold text-white">No questions matched your search criteria.</p>
              <p className="text-xs">Try clearing the search query or selecting "All Domains".</p>
            </div>
          ) : (
            paginatedQuestions.map((q, pageIdx) => {
              const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + pageIdx;
              const isAnswerRevealed = showAllAnswers || Boolean(revealedIds[q.id]);

              return (
                <div
                  key={q.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-4 shadow-lg hover:border-slate-700 transition"
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono font-bold text-xs text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        #{globalIndex + 1}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {q.id}
                      </span>

                      {/* Track badge */}
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                        q.trackId === 'python'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      }`}>
                        {q.trackId}
                      </span>

                      {/* Difficulty */}
                      {q.difficulty && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          q.difficulty === 'hard'
                            ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                            : q.difficulty === 'medium'
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {q.difficulty}
                        </span>
                      )}

                      {/* Domain */}
                      {q.domain && (
                        <span className="text-[11px] text-slate-400 font-mono">
                          • {q.domain}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      {!showAllAnswers && (
                        <button
                          onClick={() => toggleQuestionReveal(q.id)}
                          className="text-xs text-amber-400 hover:text-amber-300 underline font-medium flex items-center space-x-1"
                        >
                          <Key className="w-3 h-3" />
                          <span>{isAnswerRevealed ? 'Hide Answer' : 'Show Answer'}</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleCopyQuestion(q, globalIndex)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center space-x-1 border border-slate-700 transition"
                        title="Copy question and answer key to clipboard"
                      >
                        {copiedId === q.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="space-y-2.5">
                    <h3 className="text-sm md:text-base font-bold text-white leading-relaxed">
                      {q.prompt}
                    </h3>

                    {/* Optional Code Snippet */}
                    {q.codeSnippet && (
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
                        <pre><code>{q.codeSnippet}</code></pre>
                      </div>
                    )}
                  </div>

                  {/* Options (A, B, C, D) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === q.correctOptionIndex;
                      const letter = String.fromCharCode(65 + oIdx);

                      return (
                        <div
                          key={oIdx}
                          className={`p-3 rounded-xl border flex items-start space-x-2.5 text-xs transition ${
                            isAnswerRevealed && isCorrect
                              ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-200 font-semibold shadow-md shadow-emerald-900/20'
                              : 'bg-slate-950/50 border-slate-800 text-slate-300'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-md text-[11px] font-mono font-bold flex items-center justify-center shrink-0 ${
                            isAnswerRevealed && isCorrect
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {letter}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="leading-relaxed break-words">{opt}</span>
                            {isAnswerRevealed && isCorrect && (
                              <span className="ml-2 inline-flex items-center text-[10px] font-mono font-bold text-emerald-400 uppercase">
                                ✓ Correct Answer
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Key Box */}
                  {isAnswerRevealed && (
                    <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200 space-y-1.5 leading-relaxed">
                      <div className="flex items-center space-x-1.5 font-bold text-indigo-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Verified Answer Key & Technical Rationale:</span>
                      </div>
                      <p className="text-slate-200 pl-5">
                        {q.explanation}
                      </p>
                      {q.skillCategory && (
                        <div className="pl-5 pt-0.5 text-[11px] font-mono text-slate-400">
                          Tested Skill: <strong className="text-amber-300">{q.skillCategory}</strong>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer with Pagination */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-slate-400 font-mono text-[11px]">
            Showing <strong className="text-white">{filteredQuestions.length}</strong> Questions in Exam Bank
          </div>

          {totalPages > 1 && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold flex items-center space-x-1 border border-slate-700 transition"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              <span className="px-3 py-1 font-mono text-slate-300 text-xs">
                Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold flex items-center space-x-1 border border-slate-700 transition"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
          >
            Close Exam Bank
          </button>
        </div>

      </div>
    </div>
  );
};
