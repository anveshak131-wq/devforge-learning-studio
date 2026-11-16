import React, { useState, useMemo } from 'react';
import {
  Award,
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Lock,
  Plus,
  Edit3,
  Download,
  RefreshCw,
  Clock,
  User,
  FileText,
  ChevronDown,
  ChevronUp,
  X,
  Save,
  Check,
  Eye,
  Zap,
  HelpCircle
} from 'lucide-react';
import { QuizQuestion, TrackExamStatus } from '../../types/quiz';
import { PYTHON_EXAM_BANK } from '../../data/quizzes/examBankPython';
import { SQL_EXAM_BANK } from '../../data/quizzes/examBankSql';
import { ExamEngine } from '../../services/examEngine';

interface AdminExamStudioTabProps {
  onShowToast: (text: string, type?: 'success' | 'error' | 'info') => void;
}

export const AdminExamStudioTab: React.FC<AdminExamStudioTabProps> = ({ onShowToast }) => {
  // Sub-tabs: 'questions' | 'submissions'
  const [subTab, setSubTab] = useState<'questions' | 'submissions'>('questions');

  // Track Selector: 'python' | 'sql'
  const [selectedTrack, setSelectedTrack] = useState<'python' | 'sql'>('python');

  // Local mutable question pools (allows live admin edits)
  const [pythonPool, setPythonPool] = useState<QuizQuestion[]>(() => [...PYTHON_EXAM_BANK]);
  const [sqlPool, setSqlPool] = useState<QuizQuestion[]>(() => [...SQL_EXAM_BANK]);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Question editing / creation modal
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  // Submissions state
  const [allExamStatuses, setAllExamStatuses] = useState<Record<string, TrackExamStatus>>(() =>
    ExamEngine.getAllStatuses()
  );

  const currentPool = selectedTrack === 'python' ? pythonPool : sqlPool;

  // Extract unique domains
  const availableDomains = useMemo(() => {
    return Array.from(new Set(currentPool.map((q) => q.domain || q.skillCategory || 'General')));
  }, [currentPool]);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return currentPool.filter((q) => {
      // Domain filter
      if (selectedDomain !== 'all') {
        const domain = q.domain || q.skillCategory || 'General';
        if (domain !== selectedDomain) return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const term = searchQuery.toLowerCase();
        const inPrompt = q.prompt.toLowerCase().includes(term);
        const inCode = q.codeSnippet?.toLowerCase().includes(term);
        const inExplanation = q.explanation.toLowerCase().includes(term);
        const inId = q.id.toLowerCase().includes(term);
        const inOptions = q.options.some((opt) => opt.toLowerCase().includes(term));
        return inPrompt || inCode || inExplanation || inId || inOptions;
      }

      return true;
    });
  }, [currentPool, selectedDomain, selectedDifficulty, searchQuery]);

  // Toggle explanation accordion
  const toggleExplanation = (id: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Save question edit
  const handleSaveQuestion = (updated: QuizQuestion) => {
    if (selectedTrack === 'python') {
      if (isCreatingNew) {
        setPythonPool((prev) => [updated, ...prev]);
        onShowToast(`Added new question #${updated.id} to Python bank`, 'success');
      } else {
        setPythonPool((prev) => prev.map((q) => (q.id === updated.id ? updated : q)));
        onShowToast(`Updated question #${updated.id} successfully`, 'success');
      }
    } else {
      if (isCreatingNew) {
        setSqlPool((prev) => [updated, ...prev]);
        onShowToast(`Added new question #${updated.id} to SQL bank`, 'success');
      } else {
        setSqlPool((prev) => prev.map((q) => (q.id === updated.id ? updated : q)));
        onShowToast(`Updated question #${updated.id} successfully`, 'success');
      }
    }

    setEditingQuestion(null);
    setIsCreatingNew(false);
  };

  // Open Add Question Form
  const handleOpenAddQuestion = () => {
    const newId = `${selectedTrack === 'python' ? 'py' : 'sql'}-eb-${currentPool.length + 1}`;
    setEditingQuestion({
      id: newId,
      trackId: selectedTrack,
      domain: availableDomains[0] || 'Core Principles',
      difficulty: 'medium',
      type: 'output_prediction',
      prompt: '',
      codeSnippet: '',
      codeLanguage: selectedTrack,
      options: ['', '', '', ''],
      correctOptionIndex: 0,
      explanation: '',
    });
    setIsCreatingNew(true);
  };

  // Export full Master Answer Key
  const handleExportAnswerKey = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentPool, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `devforge_${selectedTrack}_master_answer_key.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    onShowToast(`Exported ${currentPool.length} questions for ${selectedTrack.toUpperCase()}`, 'info');
  };

  // Emergency Student Support: Reset Cooldown & Grant Re-Attempt Voucher
  const handleGrantEmergencyRetake = (trackKey: string) => {
    if (
      !confirm(
        `Are you sure you want to reset the study cooldown and grant an emergency re-attempt voucher for ${trackKey.toUpperCase()}?\n\nNote: Student scores are strictly immutable and cannot be manually altered. The student must sit for the proctored test to earn their score.`
      )
    ) {
      return;
    }

    const currentStatus = ExamEngine.getTrackExamStatus(trackKey);
    // Reset cooldown to now, decrement attempt count if > 0 so they can re-attempt
    currentStatus.cooldownEndsAt = null;
    currentStatus.attemptsCount = Math.max(0, currentStatus.attemptsCount - 1);
    
    // Activate 72h pass
    currentStatus.activeRetakePass = {
      purchasedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString(),
      used: false,
      paymentId: 'admin_emergency_voucher',
    };

    const all = ExamEngine.getAllStatuses();
    all[trackKey] = currentStatus;
    try {
      localStorage.setItem('devforge_exam_status_v2', JSON.stringify(all));
      setAllExamStatuses({ ...all });
      onShowToast(`Granted emergency re-attempt voucher for ${trackKey.toUpperCase()}`, 'success');
    } catch {
      onShowToast('Could not save reset voucher', 'error');
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 font-sans text-slate-200 overflow-hidden">
      
      {/* Top Banner: Academic Integrity & Score Immutability Guarantee */}
      <div className="px-6 py-3 bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-950 border-b border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white flex items-center space-x-2">
              <span>Admin Exam Management Studio</span>
              <span className="px-2 py-0.2 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Master Answer Key Access
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              🔒 <strong>Immutable Score Standard:</strong> Student test scores are mathematically calculated and strictly read-only. Admins cannot manually fabricate or inflate scores.
            </p>
          </div>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
          <button
            onClick={() => setSubTab('questions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition ${
              subTab === 'questions'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Question Bank & Answers ({pythonPool.length + sqlPool.length})</span>
          </button>

          <button
            onClick={() => setSubTab('submissions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition ${
              subTab === 'submissions'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Candidate Audits & Support</span>
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* SUB-TAB 1: MASTER QUESTION BANK & ANSWER KEYS */}
      {/* ================================================================= */}
      {subTab === 'questions' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Controls Bar */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/40 space-y-3 shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              {/* Track Selector Tabs */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setSelectedTrack('python');
                    setSelectedDomain('all');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition border ${
                    selectedTrack === 'python'
                      ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span>🐍 Python Master Pool</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                    {pythonPool.length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setSelectedTrack('sql');
                    setSelectedDomain('all');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition border ${
                    selectedTrack === 'sql'
                      ? 'bg-cyan-600/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span>🐬 SQL Master Pool</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
                    {sqlPool.length}
                  </span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleExportAnswerKey}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                  title="Export full answer key as JSON"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Answer Key</span>
                </button>

                <button
                  onClick={handleOpenAddQuestion}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm shadow-indigo-600/30"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Question #{currentPool.length + 1}</span>
                </button>
              </div>

            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              {/* Search input */}
              <div className="relative flex-1 w-full">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedTrack.toUpperCase()} questions, code snippets, or explanations...`}
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Domain Filter */}
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full md:w-64 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
              >
                <option value="all">All Domains ({currentPool.length})</option>
                {availableDomains.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full md:w-36 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Questions Grid / List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>
                Showing <strong className="text-white">{filteredQuestions.length}</strong> of{' '}
                <strong className="text-white">{currentPool.length}</strong> questions in bank
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                ✅ Correct Answers Revealed for Admins
              </span>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <Search className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">No questions match your filter</h4>
                  <p className="text-xs text-slate-400">Try clearing your search query or selecting "All Domains".</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredQuestions.map((q, idx) => {
                  const isExpOpen = expandedExplanations[q.id];

                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 hover:border-slate-700 transition"
                    >
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                        <div className="flex items-center space-x-2">
                          <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-slate-800 text-indigo-300 border border-slate-700">
                            #{idx + 1} • {q.id}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800/80 text-slate-300">
                            {q.domain || q.skillCategory || 'General'}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                              q.difficulty === 'easy'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : q.difficulty === 'hard'
                                ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}
                          >
                            {q.difficulty || 'medium'}
                          </span>
                        </div>

                        {/* Edit Button */}
                        <button
                          onClick={() => {
                            setEditingQuestion({ ...q });
                            setIsCreatingNew(false);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Edit</span>
                        </button>
                      </div>

                      {/* Question Prompt */}
                      <h4 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                        {q.prompt}
                      </h4>

                      {/* Code Snippet (if any) */}
                      {q.codeSnippet && (
                        <div className="rounded-xl bg-slate-950 border border-slate-800/80 p-3.5 font-mono text-xs text-indigo-200 overflow-x-auto">
                          <pre>
                            <code>{q.codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                      {/* 4 Choices with Correct Answer Marked in Green */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt, optIdx) => {
                          const isCorrect = optIdx === q.correctOptionIndex;
                          const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                          return (
                            <div
                              key={optIdx}
                              className={`p-3 rounded-xl border flex items-start space-x-2.5 transition ${
                                isCorrect
                                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-200 shadow-sm'
                                  : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                                  isCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {letter}
                              </span>

                              <div className="flex-1 font-mono text-xs break-all">
                                <span>{opt}</span>
                                {isCorrect && (
                                  <span className="ml-2 inline-flex items-center space-x-1 text-[10px] font-sans font-bold text-emerald-400 uppercase tracking-wider">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Correct Answer</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Admin Explanation Accordion */}
                      {q.explanation && (
                        <div className="pt-1">
                          <button
                            onClick={() => toggleExplanation(q.id)}
                            className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 font-semibold transition"
                          >
                            <span>{isExpOpen ? 'Hide Technical Explanation' : 'View Technical Explanation'}</span>
                            {isExpOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          {isExpOpen && (
                            <div className="mt-2 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
                              <div className="font-semibold text-indigo-300 text-[11px] uppercase font-mono">
                                In-Depth Concept Rationale:
                              </div>
                              <p>{q.explanation}</p>
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

      {/* ================================================================= */}
      {/* SUB-TAB 2: CANDIDATE SUBMISSIONS & SUPPORT AUDIT */}
      {/* ================================================================= */}
      {subTab === 'submissions' && (
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Candidate Certification Audits & Emergency Reset Vouchers
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Review candidate exam records and grant emergency re-attempt vouchers for genuine hardware/internet disconnects.
            </p>
          </div>

          {/* Track Exam Statuses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['python', 'sql'].map((trackKey) => {
              const status = allExamStatuses[trackKey] || ExamEngine.getTrackExamStatus(trackKey);
              const isCooldownActive =
                status.cooldownEndsAt && new Date(status.cooldownEndsAt).getTime() > Date.now();

              return (
                <div
                  key={trackKey}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{trackKey === 'python' ? '🐍' : '🐬'}</span>
                      <h4 className="font-bold text-white uppercase text-sm">
                        {trackKey} Exam Registry
                      </h4>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300">
                      Attempts: {status.attemptsCount} / {status.maxAttempts}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div>
                      <div className="text-slate-500 text-[10px] uppercase font-mono">Highest Verified Score</div>
                      <div className="font-mono font-bold text-emerald-400 text-sm">
                        {status.bestScore !== null ? `${status.bestScore}%` : 'No attempts'}
                      </div>
                      <div className="text-[10px] text-slate-400">{status.bestGrade || 'Score is Immutable 🔒'}</div>
                    </div>

                    <div>
                      <div className="text-slate-500 text-[10px] uppercase font-mono">Cooldown Status</div>
                      <div className="font-bold text-white">
                        {isCooldownActive ? '⏳ 6h Cooldown Active' : '✅ Ready for Attempt'}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {isCooldownActive ? 'Blocks immediate retakes' : 'No wait time active'}
                      </div>
                    </div>
                  </div>

                  {/* History Log */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                      Attempt History ({status.history.length})
                    </div>
                    {status.history.length === 0 ? (
                      <p className="text-xs text-slate-500 italic">No attempts logged yet for this course.</p>
                    ) : (
                      <div className="space-y-1.5 text-xs font-mono">
                        {status.history.map((h, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between"
                          >
                            <div>
                              <span className="text-white font-bold">Attempt #{h.attemptNumber}:</span>{' '}
                              <span className="text-emerald-400 font-bold">{h.scorePercent}%</span>{' '}
                              <span className="text-slate-400">({h.grade})</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[10px]">
                              <span
                                className={`px-2 py-0.5 rounded ${
                                  h.integrityStatus === 'clean'
                                    ? 'bg-emerald-500/10 text-emerald-400'
                                    : 'bg-rose-500/10 text-rose-400'
                                }`}
                              >
                                {h.integrityStatus === 'clean' ? '0 Flags' : `${h.focusViolations} Violations`}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Emergency Support Reset Action */}
                  <div className="pt-2 border-t border-slate-800">
                    <button
                      onClick={() => handleGrantEmergencyRetake(trackKey)}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition border border-slate-700"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Grant Emergency Re-Attempt Voucher / Reset Cooldown</span>
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-1">
                      Resets cooldown and unlocks an exam slot. Learner must still sit for test honestly.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ================================================================= */}
      {/* EDIT / CREATE QUESTION MODAL */}
      {/* ================================================================= */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <Edit3 className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">
                  {isCreatingNew ? 'Add New Exam Question' : `Edit Question #${editingQuestion.id}`}
                </h3>
              </div>

              <button
                onClick={() => setEditingQuestion(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 text-xs">
              
              {/* Domain & Difficulty */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Knowledge Domain:</label>
                  <input
                    type="text"
                    value={editingQuestion.domain || ''}
                    onChange={(e) =>
                      setEditingQuestion({ ...editingQuestion, domain: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Difficulty:</label>
                  <select
                    value={editingQuestion.difficulty || 'medium'}
                    onChange={(e) =>
                      setEditingQuestion({
                        ...editingQuestion,
                        difficulty: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Prompt */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Question Prompt:</label>
                <textarea
                  rows={2}
                  value={editingQuestion.prompt}
                  onChange={(e) =>
                    setEditingQuestion({ ...editingQuestion, prompt: e.target.value })
                  }
                  placeholder="e.g. What is the output of the following code?"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
                />
              </div>

              {/* Code Snippet */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Code Snippet (Optional):</label>
                <textarea
                  rows={4}
                  value={editingQuestion.codeSnippet || ''}
                  onChange={(e) =>
                    setEditingQuestion({ ...editingQuestion, codeSnippet: e.target.value })
                  }
                  placeholder="Type code snippet here..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-indigo-200 font-mono text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* 4 Options & Correct Answer Radio */}
              <div className="space-y-2">
                <label className="font-semibold text-slate-300">
                  Options (Select radio button for the Correct Answer):
                </label>

                {editingQuestion.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isChecked = optIdx === editingQuestion.correctOptionIndex;

                  return (
                    <div
                      key={optIdx}
                      className={`flex items-center space-x-2 p-2 rounded-xl border ${
                        isChecked
                          ? 'bg-emerald-500/10 border-emerald-500/40'
                          : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="correctOption"
                        checked={isChecked}
                        onChange={() =>
                          setEditingQuestion({
                            ...editingQuestion,
                            correctOptionIndex: optIdx,
                          })
                        }
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="font-mono font-bold text-xs text-slate-400 w-5">
                        {letter}.
                      </span>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => {
                          const newOpts = [...editingQuestion.options];
                          newOpts[optIdx] = e.target.value;
                          setEditingQuestion({ ...editingQuestion, options: newOpts });
                        }}
                        placeholder={`Option ${letter}`}
                        className="flex-1 bg-transparent text-white text-xs focus:outline-none font-mono"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Technical Explanation:</label>
                <textarea
                  rows={2}
                  value={editingQuestion.explanation}
                  onChange={(e) =>
                    setEditingQuestion({ ...editingQuestion, explanation: e.target.value })
                  }
                  placeholder="Explain why the selected option is correct..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
                />
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-3">
              <button
                onClick={() => setEditingQuestion(null)}
                className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition"
              >
                Cancel
              </button>

              <button
                onClick={() => handleSaveQuestion(editingQuestion)}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm shadow-emerald-600/30"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Question</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
