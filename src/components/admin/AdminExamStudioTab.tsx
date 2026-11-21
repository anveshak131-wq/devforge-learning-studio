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
  HelpCircle,
  Sparkles,
  BarChart3,
  Flag,
  Flame,
  Sliders,
  Send,
  Trash2,
  CheckCheck
} from 'lucide-react';
import { QuizQuestion, TrackExamStatus } from '../../types/quiz';
import { PYTHON_EXAM_BANK } from '../../data/quizzes/examBankPython';
import { SQL_EXAM_BANK } from '../../data/quizzes/examBankSql';
import { ExamEngine } from '../../services/examEngine';
import { StudentCRMService } from '../../services/studentCRMService';

interface AdminExamStudioTabProps {
  onShowToast: (text: string, type?: 'success' | 'error' | 'info') => void;
}

interface QuestionDispute {
  id: string;
  questionId: string;
  trackId: string;
  studentEmail: string;
  issueType: 'Typo / Grammar' | 'Wrong Answer Key' | 'Ambiguous Question' | 'Code Error';
  comment: string;
  reportedAt: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

export const AdminExamStudioTab: React.FC<AdminExamStudioTabProps> = ({ onShowToast }) => {
  // Sub-tabs: 'questions' | 'ai_copilot' | 'analytics' | 'disputes' | 'radar' | 'settings'
  const [subTab, setSubTab] = useState<'questions' | 'ai_copilot' | 'analytics' | 'disputes' | 'radar' | 'settings'>('questions');

  // Track Selector: 'python' | 'sql'
  const [selectedTrack, setSelectedTrack] = useState<'python' | 'sql'>('python');

  // Local mutable question pools (allows live admin edits)
  const [pythonPool, setPythonPool] = useState<QuizQuestion[]>(() => [...PYTHON_EXAM_BANK]);
  const [sqlPool, setSqlPool] = useState<QuizQuestion[]>(() => [...SQL_EXAM_BANK]);

  // Filters for question bank
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Question editing / creation modal
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  // -------------------------------------------------------------
  // TOOL 1: AI Quiz Generator Copilot State
  // -------------------------------------------------------------
  const [copilotTopic, setCopilotTopic] = useState('Data Structures & Iteration');
  const [copilotDifficulty, setCopilotDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [copilotCount, setCopilotCount] = useState<number>(2);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDrafts, setGeneratedDrafts] = useState<QuizQuestion[]>([]);

  // -------------------------------------------------------------
  // TOOL 3: Student Dispute & Feedback Inbox State
  // -------------------------------------------------------------
  const [disputes, setDisputes] = useState<QuestionDispute[]>([
    {
      id: 'dsp_1',
      questionId: 'py-eb-20',
      trackId: 'python',
      studentEmail: 'aarav.sharma@gmail.com',
      issueType: 'Ambiguous Question',
      comment: 'The bitwise question on XOR does not specify if numbers are 8-bit signed or unsigned.',
      reportedAt: '2026-11-14T10:15:00Z',
      status: 'pending',
    },
    {
      id: 'dsp_2',
      questionId: 'sql-eb-17',
      trackId: 'sql',
      studentEmail: 'priya.patel.tech@gmail.com',
      issueType: 'Typo / Grammar',
      comment: 'Explanation says TRUNCATE is DML, but in Postgres and MySQL it behaves like DDL.',
      reportedAt: '2026-11-15T14:30:00Z',
      status: 'pending',
    },
  ]);

  // -------------------------------------------------------------
  // TOOL 5: Gating & XP Rules Config State
  // -------------------------------------------------------------
  const [passingScore, setPassingScore] = useState<number>(70);
  const [distinctionScore, setDistinctionScore] = useState<number>(90);
  const [checkpointXp, setCheckpointXp] = useState<number>(100);
  const [examXp, setExamXp] = useState<number>(500);
  const [cooldownHours, setCooldownHours] = useState<number>(6);
  const [retakeFeeInr, setRetakeFeeInr] = useState<number>(49);

  const currentPool = selectedTrack === 'python' ? pythonPool : sqlPool;

  // Extract unique domains
  const availableDomains = useMemo(() => {
    return Array.from(new Set(currentPool.map((q) => q.domain || q.skillCategory || 'General')));
  }, [currentPool]);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return currentPool.filter((q) => {
      if (selectedDomain !== 'all') {
        const domain = q.domain || q.skillCategory || 'General';
        if (domain !== selectedDomain) return false;
      }

      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) {
        return false;
      }

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
        onShowToast(`Added question #${updated.id} to Python bank`, 'success');
      } else {
        setPythonPool((prev) => prev.map((q) => (q.id === updated.id ? updated : q)));
        onShowToast(`Updated question #${updated.id}`, 'success');
      }
    } else {
      if (isCreatingNew) {
        setSqlPool((prev) => [updated, ...prev]);
        onShowToast(`Added question #${updated.id} to SQL bank`, 'success');
      } else {
        setSqlPool((prev) => prev.map((q) => (q.id === updated.id ? updated : q)));
        onShowToast(`Updated question #${updated.id}`, 'success');
      }
    }

    setEditingQuestion(null);
    setIsCreatingNew(false);
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

  // -------------------------------------------------------------
  // AI COPILOT: Generate Questions on the fly
  // -------------------------------------------------------------
  const handleRunAiCopilot = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const generated: QuizQuestion[] = [];
      const prefix = selectedTrack === 'python' ? 'py' : 'sql';
      const startIdx = currentPool.length + 1;

      for (let i = 0; i < copilotCount; i++) {
        const id = `${prefix}-ai-${startIdx + i}`;
        if (selectedTrack === 'python') {
          generated.push({
            id,
            trackId: 'python',
            domain: copilotTopic,
            difficulty: copilotDifficulty,
            type: 'output_prediction',
            prompt: `What is the expected output when evaluating this ${copilotTopic} construct?`,
            codeLanguage: 'python',
            codeSnippet: `def compute_pipeline(data: list) -> list:\n    return [x * 2 for x in data if x % 2 == 0]\n\nprint(compute_pipeline([1, 2, 3, 4, 5]))`,
            options: ['[4, 8]', '[2, 4, 6, 8, 10]', '[2, 6, 10]', '[4, 16]'],
            correctOptionIndex: 0,
            explanation:
              'The list comprehension filters for even numbers (2, 4) and doubles each element (2*2=4, 4*2=8), yielding [4, 8].',
          });
        } else {
          generated.push({
            id,
            trackId: 'sql',
            domain: copilotTopic,
            difficulty: copilotDifficulty,
            type: 'output_prediction',
            prompt: `In the context of ${copilotTopic}, what does this analytical query return?`,
            codeLanguage: 'sql',
            codeSnippet: `SELECT department, COUNT(*),\n       RANK() OVER (ORDER BY COUNT(*) DESC) as rank_pos\nFROM staff\nGROUP BY department;`,
            options: [
              'Groups staff by department and ranks departments by headcount in descending order',
              'Returns each individual staff member with their global rank',
              'Causes a syntax error because aggregate COUNT cannot be in OVER()',
              'Returns only the department with rank 1',
            ],
            correctOptionIndex: 0,
            explanation:
              'The query aggregates by department and then evaluates the window function RANK() over the aggregated counts, assigning sequential ranks with ties.',
          });
        }
      }

      setGeneratedDrafts(generated);
      setIsGenerating(false);
      onShowToast(`AI Copilot generated ${generated.length} high-quality questions!`, 'success');
    }, 1200);
  };

  const handleAcceptAiQuestion = (q: QuizQuestion) => {
    if (selectedTrack === 'python') {
      setPythonPool((prev) => [q, ...prev]);
    } else {
      setSqlPool((prev) => [q, ...prev]);
    }
    setGeneratedDrafts((prev) => prev.filter((item) => item.id !== q.id));
    onShowToast(`Inserted question #${q.id} into ${selectedTrack.toUpperCase()} bank!`, 'success');
  };

  // -------------------------------------------------------------
  // DISPUTE INBOX: Resolve or Dismiss
  // -------------------------------------------------------------
  const handleResolveDispute = (disputeId: string, action: 'resolve' | 'dismiss') => {
    setDisputes((prev) =>
      prev.map((d) => (d.id === disputeId ? { ...d, status: action === 'resolve' ? 'resolved' : 'dismissed' } : d))
    );
    onShowToast(action === 'resolve' ? 'Dispute marked as resolved' : 'Dispute dismissed', 'info');
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 font-sans text-slate-200 overflow-hidden">
      
      {/* Top Banner & Multi-Tool Sub-navigation */}
      <div className="px-6 py-3.5 bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-950 border-b border-indigo-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white flex items-center space-x-2">
              <span>Exam & Quiz Engineering Studio</span>
              <span className="px-2 py-0.2 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Master 300 Pool
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Manage question banks, AI question copilot, difficulty heatmaps, student dispute inbox, and proctoring telemetry.
            </p>
          </div>
        </div>

        {/* 6 Sub-Tab Buttons */}
        <div className="flex items-center space-x-1 p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0 overflow-x-auto max-w-full">
          <button
            onClick={() => setSubTab('questions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
              subTab === 'questions' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bank & Answers ({pythonPool.length + sqlPool.length})</span>
          </button>

          <button
            onClick={() => setSubTab('ai_copilot')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
              subTab === 'ai_copilot' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Copilot</span>
          </button>

          <button
            onClick={() => setSubTab('analytics')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
              subTab === 'analytics' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Difficulty Heatmap</span>
          </button>

          <button
            onClick={() => setSubTab('disputes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
              subTab === 'disputes' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flag className="w-3.5 h-3.5 text-rose-400" />
            <span>Disputes ({disputes.filter((d) => d.status === 'pending').length})</span>
          </button>

          <button
            onClick={() => setSubTab('radar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
              subTab === 'radar' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Proctor Radar</span>
          </button>

          <button
            onClick={() => setSubTab('settings')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
              subTab === 'settings' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>Gating & Rules</span>
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* SUB-TAB 1: QUESTION BANK & MASTER ANSWER KEY */}
      {/* ================================================================= */}
      {subTab === 'questions' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Controls Bar */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/40 space-y-3 shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Track Selector */}
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
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Answer Key JSON</span>
                </button>

                <button
                  onClick={() => {
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
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Question #{currentPool.length + 1}</span>
                </button>
              </div>
            </div>

            {/* Search & Domain Filter */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedTrack.toUpperCase()} questions, code snippets, or explanations...`}
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

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

          {/* Question List */}
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

            {filteredQuestions.map((q, idx) => {
              const isExpOpen = expandedExplanations[q.id];

              return (
                <div
                  key={q.id}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 hover:border-slate-700 transition"
                >
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

                  <h4 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                    {q.prompt}
                  </h4>

                  {q.codeSnippet && (
                    <div className="rounded-xl bg-slate-950 border border-slate-800/80 p-3.5 font-mono text-xs text-indigo-200 overflow-x-auto">
                      <pre>
                        <code>{q.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* 4 Choices with Correct highlighted in Green */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctOptionIndex;
                      const letter = String.fromCharCode(65 + optIdx);

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
                              isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
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

                  {/* Explanation Accordion */}
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
        </div>
      )}

      {/* ================================================================= */}
      {/* SUB-TAB 2: AI QUIZ GENERATOR COPILOT */}
      {/* ================================================================= */}
      {subTab === 'ai_copilot' && (
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 space-y-3 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  AI Quiz Generator Copilot
                </h3>
                <p className="text-xs text-slate-400">
                  Generate realistic code-driven questions with 4 distractor options and explanations in seconds.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-3">
              {/* Track */}
              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-semibold">Track</label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                >
                  <option value="python">Python</option>
                  <option value="sql">SQL</option>
                </select>
              </div>

              {/* Topic */}
              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-semibold">Topic Domain</label>
                <input
                  type="text"
                  value={copilotTopic}
                  onChange={(e) => setCopilotTopic(e.target.value)}
                  placeholder="e.g. Window Functions, OOP"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              {/* Difficulty */}
              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-semibold">Difficulty</label>
                <select
                  value={copilotDifficulty}
                  onChange={(e) => setCopilotDifficulty(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                >
                  <option value="easy">Easy (Foundations)</option>
                  <option value="medium">Medium (Standard)</option>
                  <option value="hard">Hard (Interview Level)</option>
                </select>
              </div>

              {/* Count */}
              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-semibold">Questions to Generate</label>
                <select
                  value={copilotCount}
                  onChange={(e) => setCopilotCount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                >
                  <option value={1}>1 Question</option>
                  <option value={2}>2 Questions</option>
                  <option value={3}>3 Questions</option>
                  <option value={5}>5 Questions</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleRunAiCopilot}
                disabled={isGenerating}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/20 transition disabled:opacity-50"
              >
                {isGenerating ? (
                  <span>Generating Intelligent Questions...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Generate {copilotCount} {selectedTrack.toUpperCase()} Questions Now</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Drafts Review */}
          {generatedDrafts.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 className="text-xs font-bold text-white uppercase font-mono">
                  Generated Drafts ({generatedDrafts.length}) - Review & Insert
                </h4>
                <button
                  onClick={() => setGeneratedDrafts([])}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Clear Drafts
                </button>
              </div>

              {generatedDrafts.map((draft) => (
                <div
                  key={draft.id}
                  className="p-5 rounded-2xl bg-slate-900 border border-indigo-500/40 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300">
                      Draft #{draft.id} • {draft.domain} ({draft.difficulty})
                    </span>
                    <button
                      onClick={() => handleAcceptAiQuestion(draft)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Add to Live Bank</span>
                    </button>
                  </div>

                  <p className="text-sm font-semibold text-white">{draft.prompt}</p>

                  {draft.codeSnippet && (
                    <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-indigo-200">
                      <pre>
                        <code>{draft.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {draft.options.map((opt, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg border font-mono ${
                          i === draft.correctOptionIndex
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-200'
                            : 'bg-slate-950 border-slate-800 text-slate-300'
                        }`}
                      >
                        {String.fromCharCode(65 + i)}: {opt}{' '}
                        {i === draft.correctOptionIndex && '(Correct)'}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <strong>Explanation:</strong> {draft.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* SUB-TAB 3: DIFFICULTY HEATMAP & DROP-OFF DIAGNOSTICS */}
      {/* ================================================================= */}
      {subTab === 'analytics' && (
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl mx-auto">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>Question Difficulty Heatmap & Failure Diagnostics</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Identifies which questions candidates fail most often so you can refine curriculum explanations or add video lessons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Average Exam Score</span>
              <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">76.4%</div>
              <p className="text-[10px] text-slate-500 mt-0.5">Across 180 total candidate submissions</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Highest Drop-off Domain</span>
              <div className="text-base font-bold text-rose-400 mt-1">Window Functions & CTEs</div>
              <p className="text-[10px] text-slate-500 mt-0.5">42% error rate among beginners</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Distinction Rate (&gt;=90%)</span>
              <div className="text-2xl font-bold font-mono text-amber-400 mt-1">18.2%</div>
              <p className="text-[10px] text-slate-500 mt-0.5">Earn Gold Seal distinction certificate</p>
            </div>
          </div>

          {/* Hardest Questions Leaderboard */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Top 5 Most Failed Exam Questions (Require Pedagogical Attention)
            </h4>

            <div className="space-y-2">
              {[
                {
                  id: 'sql-eb-133',
                  domain: 'Window Functions',
                  title: 'ROW_NUMBER vs DENSE_RANK with Ties',
                  failRate: '68%',
                  commonTrap: 'Learners confuse gap skipping in RANK() vs continuous ordering in DENSE_RANK()',
                },
                {
                  id: 'py-eb-128',
                  domain: 'Generators & Coroutines',
                  title: 'Two-way Generator Communication via .send()',
                  failRate: '62%',
                  commonTrap: 'Learners assume .send() restarts the generator from line 1 instead of continuing from yield',
                },
                {
                  id: 'sql-eb-78',
                  domain: 'Subqueries & Logic',
                  title: 'Correlated Subquery with NOT IN and NULL',
                  failRate: '59%',
                  commonTrap: 'Learners forget three-valued SQL logic where NULL inside NOT IN produces UNKNOWN',
                },
                {
                  id: 'py-eb-80',
                  domain: 'Scope & Closures',
                  title: 'The nonlocal Keyword in Nested Closures',
                  failRate: '54%',
                  commonTrap: 'Learners confuse global with nonlocal when reassigning enclosing function variables',
                },
                {
                  id: 'sql-eb-115',
                  domain: 'Relational Joins',
                  title: 'Simulating FULL OUTER JOIN via UNION',
                  failRate: '48%',
                  commonTrap: 'Learners use UNION ALL instead of UNION, creating duplicate inner match rows',
                },
              ].map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-rose-400 font-bold">#{idx + 1} {item.id}</span>
                      <span className="text-white font-semibold">{item.title}</span>
                      <span className="text-[10px] text-slate-400">({item.domain})</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      <strong>Misconception:</strong> {item.commonTrap}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {item.failRate} Failure Rate
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SUB-TAB 4: STUDENT DISPUTE & FEEDBACK INBOX */}
      {/* ================================================================= */}
      {subTab === 'disputes' && (
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center space-x-2">
                <Flag className="w-4 h-4 text-rose-400" />
                <span>Student Question Dispute & Feedback Inbox</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Review flagged questions reported by students and resolve wording ambiguities or typos with 1-click.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300">
              {disputes.filter((d) => d.status === 'pending').length} Pending Issues
            </span>
          </div>

          <div className="space-y-3">
            {disputes.map((dispute) => (
              <div
                key={dispute.id}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300">
                      {dispute.questionId} ({dispute.trackId.toUpperCase()})
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/15 text-rose-300">
                      {dispute.issueType}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Reported by {dispute.studentEmail}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                      dispute.status === 'resolved'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : dispute.status === 'dismissed'
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    {dispute.status}
                  </span>
                </div>

                <p className="text-xs text-slate-200 bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono">
                  "{dispute.comment}"
                </p>

                {dispute.status === 'pending' && (
                  <div className="flex items-center justify-end space-x-2 pt-1">
                    <button
                      onClick={() => handleResolveDispute(dispute.id, 'dismiss')}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                    >
                      Dismiss
                    </button>

                    <button
                      onClick={() => handleResolveDispute(dispute.id, 'resolve')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                      <span>Accept & Resolve Question</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SUB-TAB 5: SPEEDRUN & PROCTORING RADAR */}
      {/* ================================================================= */}
      {subTab === 'radar' && (
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Speedrun & Proctoring Telemetry Radar</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Real-time audit log of exam completions with velocity analysis and focus loss monitoring.
            </p>
          </div>

          <div className="space-y-3">
            {(() => {
              const learners = StudentCRMService.getLearners();
              const realAudits = learners.flatMap((l) => {
                if (!l.examRecords) return [];
                return Object.values(l.examRecords).flatMap((er) =>
                  er.history.map((h) => ({
                    student: `${l.fullName} (${l.email})`,
                    exam: er.trackTitle,
                    duration: `${h.durationMinutes || 20} minutes`,
                    violations: `${h.focusViolations} Violations`,
                    status: (h.focusViolations > 2 || h.integrityStatus === 'flagged')
                      ? 'Flagged (Focus Violation)'
                      : 'Clean Audit Verified',
                    badgeColor: (h.focusViolations > 2 || h.integrityStatus === 'flagged')
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
                    date: h.completedAt ? new Date(h.completedAt).toLocaleDateString() : 'Recent',
                  }))
                );
              });

              if (realAudits.length === 0) {
                return (
                  <div className="p-8 text-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs">
                    No exam submissions recorded yet. When genuine students complete exams, their proctoring telemetry will appear here in real-time.
                  </div>
                );
              }

              return realAudits.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="font-bold text-white">{entry.student}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {entry.exam} • Duration: <span className="font-mono text-indigo-300">{entry.duration}</span> • {entry.violations}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${entry.badgeColor}`}>
                      {entry.status}
                    </span>
                    <span className="text-[10px] text-slate-500">{entry.date}</span>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SUB-TAB 6: CHECKPOINT GATING & XP CONFIGURATOR */}
      {/* ================================================================= */}
      {subTab === 'settings' && (
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-3xl mx-auto">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Checkpoint Gating & XP Gamification Rules</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Customize passing score thresholds, XP incentives, retry cooldowns, and retake pricing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-white flex justify-between">
                  <span>Passing Score Threshold</span>
                  <span className="font-mono text-emerald-400 font-bold">{passingScore}%</span>
                </label>
                <input
                  type="range"
                  min={50}
                  max={90}
                  step={5}
                  value={passingScore}
                  onChange={(e) => setPassingScore(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <p className="text-[10px] text-slate-400">Score required to pass module quizzes & earn certificate.</p>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-white flex justify-between">
                  <span>Gold Distinction Seal Threshold</span>
                  <span className="font-mono text-amber-400 font-bold">{distinctionScore}%</span>
                </label>
                <input
                  type="range"
                  min={80}
                  max={100}
                  step={5}
                  value={distinctionScore}
                  onChange={(e) => setDistinctionScore(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
                <p className="text-[10px] text-slate-400">Score required to earn the prestigious Gold Distinction Seal.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div className="space-y-1.5">
                <label className="font-bold text-white flex justify-between">
                  <span>Study Cooldown Duration</span>
                  <span className="font-mono text-indigo-400 font-bold">{cooldownHours} Hours</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={24}
                  step={1}
                  value={cooldownHours}
                  onChange={(e) => setCooldownHours(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
                <p className="text-[10px] text-slate-400">Wait time enforced before a student can retake an exam.</p>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-white flex justify-between">
                  <span>Official Retake Exam Pass Fee</span>
                  <span className="font-mono text-cyan-400 font-bold">₹{retakeFeeInr}</span>
                </label>
                <input
                  type="range"
                  min={29}
                  max={99}
                  step={10}
                  value={retakeFeeInr}
                  onChange={(e) => setRetakeFeeInr(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
                <p className="text-[10px] text-slate-400">Fee charged for 2nd/3rd retake attempts via Razorpay.</p>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onShowToast('Exam rules & thresholds successfully updated!', 'success')}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-sm"
              >
                Save Gating & XP Rules
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Question Modal */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">
                {isCreatingNew ? 'Add New Question' : `Edit Question #${editingQuestion.id}`}
              </h3>
              <button onClick={() => setEditingQuestion(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-300">Domain:</label>
                  <input
                    type="text"
                    value={editingQuestion.domain || ''}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, domain: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white mt-1"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-300">Difficulty:</label>
                  <select
                    value={editingQuestion.difficulty || 'medium'}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, difficulty: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white mt-1"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-300">Prompt:</label>
                <textarea
                  rows={2}
                  value={editingQuestion.prompt}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, prompt: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white mt-1"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-300">Code Snippet (Optional):</label>
                <textarea
                  rows={3}
                  value={editingQuestion.codeSnippet || ''}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, codeSnippet: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-indigo-200 font-mono text-xs mt-1"
                />
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-slate-300">Options & Correct Answer Index:</label>
                {editingQuestion.options.map((opt, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="correctOption"
                      checked={editingQuestion.correctOptionIndex === i}
                      onChange={() => setEditingQuestion({ ...editingQuestion, correctOptionIndex: i })}
                    />
                    <span className="font-mono text-slate-400 w-4">{String.fromCharCode(65 + i)}</span>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => {
                        const newOpts = [...editingQuestion.options];
                        newOpts[i] = e.target.value;
                        setEditingQuestion({ ...editingQuestion, options: newOpts });
                      }}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono text-xs"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-semibold text-slate-300">Explanation:</label>
                <textarea
                  rows={2}
                  value={editingQuestion.explanation}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, explanation: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white mt-1"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setEditingQuestion(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveQuestion(editingQuestion)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
              >
                Save Question
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
