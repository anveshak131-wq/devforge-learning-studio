import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Clock,
  Award,
  AlertTriangle,
  Flag,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  Sparkles,
  Lock,
  Printer,
  Share2,
  RotateCcw,
  HelpCircle,
  Smartphone,
  CreditCard,
  FileText,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion, QuizAttemptResult, CandidateTranscript } from '../../types/quiz';
import { ExamEngine, MAX_EXAM_ATTEMPTS, RETAKE_FEE_INR } from '../../services/examEngine';
import { AuthService } from '../../services/authService';
import { CandidateTranscriptModal } from './CandidateTranscriptModal';
import { PaymentService } from '../../services/paymentService';
import { LeaderboardService } from '../../services/leaderboardService';

interface ProctoredExamModalProps {
  isOpen: boolean;
  trackId: 'python' | 'sql';
  courseTitle: string;
  onClose: () => void;
  onViewCertificate?: () => void;
}

type ExamScreen = 'briefing' | 'exam' | 'results';

export const ProctoredExamModal: React.FC<ProctoredExamModalProps> = ({
  isOpen,
  trackId,
  courseTitle,
  onClose,
  onViewCertificate,
}) => {
  // Screen routing
  const [screen, setScreen] = useState<ExamScreen>('briefing');
  const [isWarmupMock, setIsWarmupMock] = useState(false);

  // Candidate Details
  const currentUser = AuthService.getCurrentUser();
  const [candidateName, setCandidateName] = useState(currentUser?.fullName || '');

  // Dynamic Exam State
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [secretAnswers, setSecretAnswers] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Timers & Proctoring Surveillance
  const [timeRemaining, setTimeRemaining] = useState(1500); // 25 mins default
  const [focusViolations, setFocusViolations] = useState(0);
  const [isPausedFullscreen, setIsPausedFullscreen] = useState(false);
  const [fullscreenPauseCountdown, setFullscreenPauseCountdown] = useState(15);
  const [isDevToolsDetected, setIsDevToolsDetected] = useState(false);

  // Status & Eligibility
  const [eligibility, setEligibility] = useState(ExamEngine.checkEligibility(trackId));
  const [statusRefreshKey, setStatusRefreshKey] = useState(0);
  const [isPurchasingRetake, setIsPurchasingRetake] = useState(false);

  // Submit confirmation dialog
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Results State
  const [attemptResult, setAttemptResult] = useState<QuizAttemptResult | null>(null);
  const [transcript, setTranscript] = useState<CandidateTranscript | null>(null);
  const [isTranscriptModalOpen, setIsTranscriptModalOpen] = useState(false);

  const examContainerRef = useRef<HTMLDivElement>(null);
  const timerIntervalRef = useRef<any>(null);
  const pauseIntervalRef = useRef<any>(null);

  // Refresh eligibility on status changes
  useEffect(() => {
    setEligibility(ExamEngine.checkEligibility(trackId));
  }, [trackId, statusRefreshKey, isOpen]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setScreen('briefing');
      setCurrentIndex(0);
      setUserAnswers({});
      setFlaggedQuestions({});
      setFocusViolations(0);
      setIsPausedFullscreen(false);
      setIsDevToolsDetected(false);
      setAttemptResult(null);
      setTranscript(null);
      setIsWarmupMock(false);
    }
  }, [isOpen]);

  // ---------------- PROCTORING SURVEILLANCE HOOKS ----------------
  useEffect(() => {
    if (screen !== 'exam') return;

    // 1. Tab-Switch / Focus Surveillance (Visibility Change & Blur)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setFocusViolations((prev) => {
          const next = prev + 1;
          if (next >= 3) {
            handleAutoSubmit(next);
          }
          return next;
        });
      }
    };

    const handleWindowBlur = () => {
      setFocusViolations((prev) => {
        const next = prev + 1;
        if (next >= 3) {
          handleAutoSubmit(next);
        }
        return next;
      });
    };

    // 2. Fullscreen Change Listener
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && screen === 'exam') {
        setIsPausedFullscreen(true);
        setFullscreenPauseCountdown(15);
      } else {
        setIsPausedFullscreen(false);
      }
    };

    // 3. DevTools & Hotkeys Firewall
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12, Ctrl+Shift+I, Cmd+Option+I (Inspect)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.metaKey && e.altKey && e.key === 'i')
      ) {
        e.preventDefault();
        setIsDevToolsDetected(true);
      }

      // Block Copy, Paste, Print, View Source
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'v', 'u', 'p', 'a'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };

    // 4. Block Right Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [screen]);

  // Fullscreen Pause Countdown
  useEffect(() => {
    if (isPausedFullscreen && screen === 'exam') {
      pauseIntervalRef.current = setInterval(() => {
        setFullscreenPauseCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(pauseIntervalRef.current);
            handleAutoSubmit(focusViolations + 1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (pauseIntervalRef.current) clearInterval(pauseIntervalRef.current);
    }

    return () => {
      if (pauseIntervalRef.current) clearInterval(pauseIntervalRef.current);
    };
  }, [isPausedFullscreen, screen, focusViolations]);

  // Main Exam Countdown Timer
  useEffect(() => {
    if (screen === 'exam' && !isPausedFullscreen) {
      timerIntervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            handleAutoSubmit(focusViolations);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [screen, isPausedFullscreen, focusViolations]);

  // ---------------- ACTIONS ----------------
  const handleStartExam = async (warmup = false) => {
    setIsWarmupMock(warmup);
    const generated = ExamEngine.generateDynamicExam(trackId, warmup);

    setExamQuestions(generated.questions);
    setSecretAnswers(generated.secretAnswers);
    setTimeRemaining(generated.timeLimitSeconds);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setFocusViolations(0);
    setScreen('exam');

    // Attempt Fullscreen
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen request bypassed:', err);
    }
  };

  const handleReturnToFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
      setIsPausedFullscreen(false);
    } catch {}
  };

  const handleSelectOption = (optionIndex: number) => {
    const q = examQuestions[currentIndex];
    if (!q) return;
    setUserAnswers((prev) => ({
      ...prev,
      [q.id]: optionIndex,
    }));
  };

  const handleToggleFlag = () => {
    const q = examQuestions[currentIndex];
    if (!q) return;
    setFlaggedQuestions((prev) => ({
      ...prev,
      [q.id]: !prev[q.id],
    }));
  };

  const handleAutoSubmit = (violations: number) => {
    handleSubmitExam(violations);
  };

  const handleSubmitExam = (violations = focusViolations) => {
    // Exit fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    const { result, transcript: certTranscript } = ExamEngine.submitProctoredExam({
      trackId,
      questions: examQuestions,
      userAnswers,
      secretAnswers,
      timeTakenSeconds: (isWarmupMock ? 180 : 1500) - timeRemaining,
      focusViolations: violations,
      candidateName,
      isWarmupMock,
    });

    setAttemptResult(result);
    if (certTranscript) {
      setTranscript(certTranscript);
    }

    setScreen('results');
    setStatusRefreshKey((k) => k + 1);

    // Confetti & Grounded XP Award if passed
    if (result.passed && !isWarmupMock) {
      try {
        LeaderboardService.awardExamXp(result.scorePercent);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {}
    }
  };

  const handlePurchaseRetake = () => {
    setIsPurchasingRetake(true);
    // Trigger Razorpay for ₹49 retake pass
    PaymentService.openRetakeCheckout({
      trackId,
      currentUser,
      onSuccess: (paymentId) => {
        ExamEngine.activateRetakePass(trackId, paymentId);
        setIsPurchasingRetake(false);
        setStatusRefreshKey((k) => k + 1);
      },
      onError: (err) => {
        setIsPurchasingRetake(false);
        alert(typeof err === 'string' ? err : 'Payment was not completed. Re-examination pass was not activated.');
      },
    });
  };

  if (!isOpen) return null;

  // Format countdown mm:ss
  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Format cooldown hh:mm:ss
  const formatCooldown = (seconds?: number) => {
    if (!seconds || seconds <= 0) return '00:00:00';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-4 font-sans select-none overflow-y-auto">
      
      {/* Dynamic Screen Watermark (During Exam) */}
      {screen === 'exam' && (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-wrap items-center justify-around opacity-[0.035] overflow-hidden rotate-[-25deg] select-none text-[11px] font-mono text-white leading-loose">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap p-8">
              DEVFORGE PROCTORED • {currentUser?.email || 'CANDIDATE'} • ID: {trackId.toUpperCase()}-{Date.now().toString(36).toUpperCase()}
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Violation Pause Overlay */}
      {isPausedFullscreen && screen === 'exam' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-rose-950/95 backdrop-blur-lg p-6 text-center animate-in fade-in duration-200">
          <div className="max-w-md bg-slate-900 border border-rose-500/40 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl shadow-rose-950/50">
            <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400 animate-pulse">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                ⚠️ Fullscreen Exited!
              </h3>
              <p className="text-xs text-rose-200 leading-relaxed">
                This certification exam must be taken in Fullscreen Mode to prevent unauthorized browser aids.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-2xl font-black text-rose-400">
              00:{fullscreenPauseCountdown.toString().padStart(2, '0')}
            </div>

            <p className="text-[11px] text-slate-400">
              Return to fullscreen immediately or your exam will be automatically submitted with an integrity flag.
            </p>

            <button
              onClick={handleReturnToFullscreen}
              className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-lg shadow-rose-600/30"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Resume Fullscreen Proctored Mode</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div 
        ref={examContainerRef}
        className={`relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          screen === 'exam' ? 'min-h-[85vh]' : ''
        }`}
      >

        {/* ---------------- SCREEN 1: PRE-EXAM BRIEFING ---------------- */}
        {screen === 'briefing' && (
          <div className="p-6 sm:p-10 space-y-6">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-5">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Proctored Accreditation
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    300-Question Stratified Pool
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {trackId.toUpperCase()} Final Certification Exam
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Earn an accredited, recruiter-verified credential with Distinction and Honors badges.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Attempt Status Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5">Attempt Status</div>
                <div className="font-bold text-white flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Attempt {eligibility.currentAttemptNumber} of {MAX_EXAM_ATTEMPTS}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {eligibility.currentAttemptNumber === 1 ? '1st Attempt Free' : `Retake (${RETAKE_FEE_INR} INR)`}
                </div>
              </div>

              <div>
                <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5">Highest Verified Score</div>
                <div className="font-mono font-bold text-emerald-400 text-sm">
                  {eligibility.bestScore !== null ? `${eligibility.bestScore}%` : 'Not Attempted'}
                </div>
                <div className="text-[10px] text-slate-400">
                  {eligibility.bestGrade || 'Highest Score Protected'}
                </div>
              </div>

              <div>
                <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5">Anti-Cheat Standard</div>
                <div className="font-bold text-indigo-300 flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>5-Ring Proctored</span>
                </div>
                <div className="text-[10px] text-slate-400">Secret Answer Key</div>
              </div>
            </div>

            {/* Cooldown or Payment Required Alerts */}
            {eligibility.reason === 'cooldown_active' && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start space-x-3 text-xs text-amber-200">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-amber-300">⏳ Mandatory 6-Hour Study Cooldown Active</div>
                  <p className="text-[11px] text-amber-200/80">
                    To encourage real studying and mastery, students must wait before taking their next attempt. 
                    Your next attempt unlocks in: <strong className="font-mono text-white">{formatCooldown(eligibility.remainingCooldownSeconds)}</strong>.
                  </p>
                </div>
              </div>
            )}

            {eligibility.reason === 'needs_payment' && (
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Re-Examination Pass Required (₹{RETAKE_FEE_INR})</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Your 1st attempt has been used. Unlock Attempt {eligibility.currentAttemptNumber} with a 72-hour re-exam slot.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handlePurchaseRetake}
                  disabled={isPurchasingRetake}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 transition shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>{isPurchasingRetake ? 'Opening Gateway...' : `Unlock Retake (₹${RETAKE_FEE_INR})`}</span>
                </button>
              </div>
            )}

            {eligibility.reason === 'max_attempts_reached' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center space-x-3 text-xs text-rose-200">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Maximum Attempts Reached ({MAX_EXAM_ATTEMPTS} / {MAX_EXAM_ATTEMPTS})</div>
                  <p className="text-[11px] text-rose-200/80">
                    You have completed all 3 permitted attempts. Your highest verified score of {eligibility.bestScore}% ({eligibility.bestGrade}) is permanently preserved.
                  </p>
                </div>
              </div>
            )}

            {/* Rules & Integrity Checklist */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Proctored Code of Conduct & Rules
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center space-x-2 font-semibold text-white">
                    <Maximize2 className="w-4 h-4 text-indigo-400" />
                    <span>Mandatory Fullscreen</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    The exam runs in fullscreen. Exiting fullscreen triggers an auto-pause warning and strikes.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center space-x-2 font-semibold text-white">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>3-Strike Focus Limit</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Switching browser tabs or moving mouse off-screen logs violations. 3 strikes will auto-submit.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center space-x-2 font-semibold text-white">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>Secret Answer Key</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    To keep the 300-question pool leak-proof, individual questions and answers are never revealed.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center space-x-2 font-semibold text-white">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>70% Passing Threshold</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    90%+ earns Distinction (Gold Seal), 80%+ earns Honors (Silver Seal), 70%+ earns Pass.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Name Input for Certificate Stamp */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                <span>Full Legal Name for Certificate:</span>
                <span className="text-[10px] text-slate-500 font-normal">(Printed on credential)</span>
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Enter your full legal name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => handleStartExam(true)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition border border-slate-700"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Practice 3-Min Warm-Up Mock (Free)</span>
              </button>

              <div className="w-full sm:w-auto flex items-center space-x-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition"
                >
                  Cancel
                </button>

                <button
                  onClick={() => handleStartExam(false)}
                  disabled={!eligibility.canStart}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-lg ${
                    eligibility.canStart
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 shadow-amber-500/20 cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none border border-slate-700/50'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Begin Official Proctored Exam</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ---------------- SCREEN 2: ACTIVE PROCTORED EXAM ---------------- */}
        {screen === 'exam' && examQuestions.length > 0 && (
          <div className="p-4 sm:p-8 space-y-6">
            
            {/* Exam HUD Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${isWarmupMock ? 'bg-cyan-400' : 'bg-emerald-400'} animate-pulse`} />
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                    {isWarmupMock ? 'Warm-Up Mock Mode' : 'Proctored Certification'}
                  </span>
                  <span className="text-[10px] text-slate-600">•</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Question {currentIndex + 1} of {examQuestions.length}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {courseTitle} Certification Exam
                </h3>
              </div>

              {/* Status Pills */}
              <div className="flex items-center space-x-3">
                {/* Tab Strikes Alert */}
                {!isWarmupMock && (
                  <div className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 border ${
                    focusViolations === 0
                      ? 'bg-slate-950 text-slate-400 border-slate-800'
                      : focusViolations === 1
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/30 animate-pulse'
                  }`}>
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Focus Strikes: {focusViolations} / 3</span>
                  </div>
                )}

                {/* Countdown Timer */}
                <div className={`px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold flex items-center space-x-2 border ${
                  timeRemaining <= 300
                    ? 'bg-rose-500/10 border-rose-500/40 text-rose-400 animate-pulse'
                    : 'bg-slate-950 border-slate-800 text-indigo-300'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span>{formatTimer(timeRemaining)}</span>
                </div>

                {/* Flag for Review */}
                <button
                  onClick={handleToggleFlag}
                  className={`p-2 rounded-xl border transition flex items-center space-x-1 text-xs ${
                    flaggedQuestions[examQuestions[currentIndex]?.id]
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                  title="Flag question for review"
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Flag</span>
                </button>
              </div>
            </div>

            {/* Interactive 1–20 Question Palette */}
            <div className="flex flex-wrap gap-1.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 items-center justify-center">
              {examQuestions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestions[q.id];
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition flex items-center justify-center relative ${
                      isCurrent
                        ? 'ring-2 ring-indigo-400 bg-indigo-600 text-white z-10'
                        : isFlagged
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : isAnswered
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-slate-900 text-slate-500 border border-slate-800 hover:text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {idx + 1}
                    {isFlagged && !isCurrent && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Question Card */}
            {(() => {
              const q = examQuestions[currentIndex];
              if (!q) return null;
              const selectedOption = userAnswers[q.id];

              return (
                <div className="space-y-4">
                  
                  {/* Domain Tag */}
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {q.domain || q.skillCategory || 'Core Concept'}
                    </span>
                    <span>•</span>
                    <span className="capitalize">{q.difficulty || 'medium'} difficulty</span>
                  </div>

                  {/* Prompt */}
                  <h4 className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                    {q.prompt}
                  </h4>

                  {/* Code Snippet (Protected against text selection) */}
                  {q.codeSnippet && (
                    <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-indigo-200 overflow-x-auto select-none">
                      <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-600 uppercase">
                        {q.codeLanguage || trackId}
                      </div>
                      <pre className="select-none pointer-events-none">
                        <code>{q.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* 4 Shuffled Options */}
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOption === optIdx;
                      const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full p-3.5 rounded-xl border text-left transition flex items-center space-x-3 text-xs sm:text-sm ${
                            isSelected
                              ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/10'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {letter}
                          </span>
                          <span className="font-mono flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                </div>
              );
            })()}

            {/* Navigation & Submission Controls */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setCurrentIndex((idx) => Math.max(0, idx - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-3">
                {currentIndex < examQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((idx) => Math.min(examQuestions.length - 1, idx + 1))}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow-sm"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowSubmitConfirm(true)}
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-bold flex items-center space-x-1.5 transition shadow-lg shadow-emerald-500/20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Submit Exam</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Ready to Finish?</h4>
                <p className="text-xs text-slate-400">
                  You have answered <strong className="text-white">{Object.keys(userAnswers).length}</strong> of{' '}
                  <strong className="text-white">{examQuestions.length}</strong> questions.
                  {Object.values(flaggedQuestions).filter(Boolean).length > 0 && (
                    <span className="text-amber-300 block mt-1">
                      ⚠️ You have {Object.values(flaggedQuestions).filter(Boolean).length} question(s) flagged for review.
                    </span>
                  )}
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                >
                  Return to Exam
                </button>
                <button
                  onClick={() => {
                    setShowSubmitConfirm(false);
                    handleSubmitExam();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/20"
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SCREEN 3: RESULTS & SCORECARD ---------------- */}
        {screen === 'results' && attemptResult && (
          <div className="p-6 sm:p-10 space-y-6">
            
            {/* Top Score Dial & Grade */}
            <div className="text-center space-y-3 pb-6 border-b border-slate-800">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-950 border border-slate-800 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                    {attemptResult.scorePercent}%
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">
                    {attemptResult.score} / {attemptResult.totalQuestions} Correct
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  attemptResult.grade === 'Distinction'
                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                    : attemptResult.grade === 'High Honors'
                    ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30'
                    : attemptResult.passed
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                }`}>
                  <Award className="w-4 h-4" />
                  <span>{attemptResult.passed ? `Certified with ${attemptResult.grade}` : 'Needs Review (Not Certified)'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {attemptResult.passed ? 'Congratulations! Exam Passed' : 'Keep Practicing to Earn Certification'}
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  {attemptResult.passed
                    ? 'Your official score has been stamped on your verifiable digital certificate.'
                    : 'A minimum of 70% is required for accreditation. Review your weak areas below and retake.'}
                </p>
              </div>

              {/* Proctoring Verification Badge & Grounded XP Award */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300 font-medium">
                    {attemptResult.integrityStatus === 'clean'
                      ? 'Proctored Clean Attempt (0 Focus Violations)'
                      : `Flagged Attempt (${attemptResult.focusViolations} Violations)`}
                  </span>
                </div>

                {attemptResult.passed && !isWarmupMock && (
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {attemptResult.scorePercent >= 90
                        ? '+100 XP (Gold Distinction Stamped!)'
                        : attemptResult.scorePercent >= 70
                        ? '+75 XP (Honors Distinction Stamped!)'
                        : '+50 XP (Certification Stamped!)'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Secret Answers Transparency Notice */}
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start space-x-3 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-300">Secret Answer Policy:</strong> In accordance with industry accreditation standards, individual questions and answer keys are withheld to keep the 300-question pool leak-proof. Review your competency domain mastery below.
              </div>
            </div>

            {/* Domain Mastery Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Domain Competency Mastery Breakdown
              </h4>

              <div className="space-y-2.5">
                {Object.entries(attemptResult.skillsBreakdown).map(([domain, data]) => (
                  <div key={domain} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">{domain}</span>
                      <span className="font-mono text-slate-400">
                        {data.correct} / {data.total} ({data.percent}%)
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-slate-850 rounded-full overflow-hidden bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          data.percent >= 90
                            ? 'bg-emerald-400'
                            : data.percent >= 70
                            ? 'bg-indigo-400'
                            : 'bg-amber-400'
                        }`}
                        style={{ width: `${data.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {attemptResult.passed && (
                  <>
                    <button
                      onClick={() => {
                        onClose();
                        if (onViewCertificate) onViewCertificate();
                      }}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-md shadow-indigo-600/30"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Stamped Certificate</span>
                    </button>

                    <button
                      onClick={() => setIsTranscriptModalOpen(true)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition"
                    >
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>1-Page Transcript (PDF)</span>
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition"
              >
                Close
              </button>
            </div>

          </div>
        )}

      </div>

      {/* 1-Page Printable Transcript Modal */}
      <CandidateTranscriptModal
        isOpen={isTranscriptModalOpen}
        transcript={transcript}
        onClose={() => setIsTranscriptModalOpen(false)}
      />

    </div>
  );
};
