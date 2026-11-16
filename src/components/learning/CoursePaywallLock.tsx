import React, { useState } from 'react';
import { 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Zap, 
  BookOpen, 
  Layers, 
  ArrowRight,
  RotateCcw,
  LogIn
} from 'lucide-react';
import { Track, Lesson } from '../../types';
import { User } from '../../types/auth';
import { PaymentService } from '../../services/paymentService';

interface CoursePaywallLockProps {
  track: Track;
  lesson: Lesson;
  lessonIndex: number;
  currentUser: User | null;
  onOpenAuth: (config?: any) => void;
  onCourseUnlocked: (trackId: string) => void;
}

export const CoursePaywallLock: React.FC<CoursePaywallLockProps> = ({
  track,
  lesson,
  lessonIndex,
  currentUser,
  onOpenAuth,
  onCourseUnlocked
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const remainingTopics = Math.max(1, track.lessons.length - 3);

  const handleCheckout = () => {
    setErrorMessage(null);

    // Pre-Payment Authentication Gate
    if (!currentUser) {
      onOpenAuth({
        title: 'Create an Account to Unlock Lifetime Access',
        desc: `Sign in with Google or GitHub to link your lifetime enrollment in "${track.title}", save your progress across devices, and receive official certificates and tax receipts.`,
        pendingCheckoutTrack: track,
      });
      return;
    }

    setLoading(true);

    PaymentService.openCheckout({
      track,
      currentUser,
      onSuccess: () => {
        setLoading(false);
        onCourseUnlocked(track.id);
      },
      onError: (err) => {
        setLoading(false);
        setErrorMessage(err);
      }
    });
  };

  return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6 bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white overflow-y-auto">
      <div className="w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Course Access Required</span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
            Topic {lessonIndex + 1} of {track.lessons.length}
          </span>
        </div>

        {/* Title & Hook */}
        <div className="space-y-2 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Unlock {track.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            You&rsquo;ve explored the 3 free preview topics! Unlock the remaining{' '}
            <strong className="text-indigo-300 font-semibold">{remainingTopics} topics</strong>, capstone projects, and your verified certificate for a single one-time payment.
          </p>
        </div>

        {/* Value Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1 text-xs relative z-10">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-slate-200">
              <strong>All 150 Topics</strong> &amp; Interactive Coding Exercises
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start space-x-2.5">
            <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-slate-200">
              <strong>Personalized Certificate</strong> of Professional Mastery
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start space-x-2.5">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span className="text-slate-200">
              <strong>Hands-on Projects</strong> &amp; Guided Industry Milestones
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span className="text-slate-200">
              <strong>Lifetime Access</strong> • No monthly recurring charges
            </span>
          </div>
        </div>

        {/* Price Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 line-through">₹1,999</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                90% OFF
              </span>
            </div>
            <div className="flex items-baseline space-x-1.5 mt-0.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                ₹199
              </span>
              <span className="text-xs text-slate-400 font-medium">one-time payment</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant Digital Access • Topics 1–3 Free</span>
          </div>
        </div>

        {/* Error notification */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
            {errorMessage}
          </div>
        )}

        {/* Checkout CTA */}
        <div className="space-y-3 relative z-10">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-sm flex items-center justify-center space-x-2.5 shadow-xl shadow-indigo-600/30 transition transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>
              {loading
                ? 'Opening Secure Checkout...'
                : !currentUser
                ? 'Sign In to Unlock Full Course — ₹199'
                : 'Unlock Lifetime Course Access — ₹199'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
            <span>Powered by Razorpay • UPI (GPay, PhonePe), Cards, NetBanking</span>
            
            {!currentUser && (
              <button
                onClick={onOpenAuth}
                className="text-indigo-400 hover:text-indigo-300 underline font-sans font-medium flex items-center space-x-1"
              >
                <LogIn className="w-3 h-3" />
                <span>Already purchased? Sign in</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
