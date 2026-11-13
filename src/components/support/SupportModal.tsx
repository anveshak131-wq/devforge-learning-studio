import React from 'react';
import { 
  Heart, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Award, 
  Coffee,
  CheckCircle2
} from 'lucide-react';
import { RazorpayButton } from '../common/RazorpayButton';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-rose-500/30 shadow-2xl overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow Effects */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-start justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 p-[1px] shadow-lg shadow-rose-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Community Funded
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mt-0.5">Support DevForge Academy</h2>
              <p className="text-xs text-slate-400">Keep coding education 100% free and open for everyone</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 relative z-10">
          {/* Explanation */}
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p>
              DevForge is an independent platform dedicated to making coding easy, intuitive, and practical with real analogies, interactive sandboxes, and zero paywalls.
            </p>
            <p className="text-slate-400">
              Your support directly covers our cloud servers, real-time in-browser compilers (SQL, Python, JS, TS), and ongoing authoring of over 150+ in-depth lessons.
            </p>
          </div>

          {/* Impact Badges */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
              <Zap className="w-4 h-4 text-amber-400 mx-auto" />
              <div className="text-[11px] font-bold text-white">Zero Ads</div>
              <p className="text-[10px] text-slate-400">Distraction-free learning</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
              <Award className="w-4 h-4 text-emerald-400 mx-auto" />
              <div className="text-[11px] font-bold text-white">Free Certs</div>
              <p className="text-[10px] text-slate-400">Verifiable credentials</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
              <Coffee className="w-4 h-4 text-rose-400 mx-auto" />
              <div className="text-[11px] font-bold text-white">Community</div>
              <p className="text-[10px] text-slate-400">Fuel new courses</p>
            </div>
          </div>

          {/* The Razorpay Button Centerpiece */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-rose-500/20 text-center space-y-3 shadow-inner">
            <div className="flex items-center justify-center space-x-1.5 text-xs text-rose-300 font-semibold">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>Make a Contribution</span>
            </div>

            {/* Official Razorpay Button Form */}
            <div className="py-2 flex justify-center">
              <RazorpayButton paymentButtonId="pl_Tzg6tLfdsapRCO" />
            </div>

            {/* Supported Payment Channels */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-400 font-medium">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                UPI / QR (GPay, PhonePe, Paytm)
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Credit & Debit Cards
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                NetBanking
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Secured by Razorpay</span>
          </span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition font-sans text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
