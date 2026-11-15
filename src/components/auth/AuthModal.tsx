import React, { useState, useEffect, useRef } from 'react';
import { X, Award, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { AuthService } from '../../services/authService';
import { User as UserType } from '../../types/auth';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (parent: HTMLElement, options: any) => void;
          prompt: (notification?: any) => void;
        };
      };
    };
  }
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserType) => void;
  initialMode?: 'signin' | 'signup';
  customTitle?: string;
  customDescription?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  customTitle,
  customDescription
}) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const googleBtnContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Google Identity Services
  useEffect(() => {
    if (!isOpen) return;

    const clientId =
      (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID ||
      '645430880987-cluo72d1jufag51hatsfaq5fo6q2pc0s.apps.googleusercontent.com';

    let timer: any = null;

    const initGoogle = () => {
      if (window.google?.accounts?.id) {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: async (response: { credential: string }) => {
              if (response.credential) {
                setLoading(true);
                setError(null);
                const res = await AuthService.loginWithGoogle(response.credential);
                setLoading(false);
                if (res.success && res.user) {
                  onSuccess(res.user);
                  onClose();
                } else {
                  setError(res.error || 'Failed to authenticate with Google.');
                }
              }
            },
            auto_select: false,
            cancel_on_tap_outside: true,
          });

          // Render official Google button into container
          if (googleBtnContainerRef.current) {
            googleBtnContainerRef.current.innerHTML = '';
            window.google.accounts.id.renderButton(googleBtnContainerRef.current, {
              theme: 'filled_blue',
              size: 'large',
              shape: 'pill',
              width: 340,
              text: 'continue_with',
              logo_alignment: 'left',
            });
          }
        } catch (e) {
          console.warn('Google Identity initialization error:', e);
        }
      } else {
        // Retry shortly if script is still downloading
        timer = setTimeout(initGoogle, 250);
      }
    };

    initGoogle();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, onSuccess, onClose]);

  if (!isOpen) return null;

  const handleGoogleClick = () => {
    setError(null);
    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt();
    } else {
      setError('Loading Google Identity... Please ensure your internet connection is active.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col font-sans transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Award className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                {customTitle || 'Sign in to DevForge'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {customDescription || 'One-click login with your Google account'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {error}
            </div>
          )}

          {/* Primary Action: Pure 1-Click Google Sign-In */}
          <div className="space-y-3">
            <div 
              ref={googleBtnContainerRef} 
              className="w-full flex items-center justify-center min-h-[46px]"
            >
              {/* Fallback stylized Google button while GIS is preparing */}
              <button
                type="button"
                onClick={handleGoogleClick}
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shadow-lg shadow-white/10 transition active:scale-[0.98] disabled:opacity-50"
              >
                <svg className="w-4 h-4 mr-2.5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>{loading ? 'Authenticating with Google...' : 'Continue with Google'}</span>
              </button>
            </div>
            <p className="text-[11px] text-center text-slate-400 flex items-center justify-center space-x-1">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Instant 1-click access • No password to remember</span>
            </p>
          </div>

          {/* Value Highlights */}
          <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
            <div className="flex items-start space-x-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Permanent cloud sync for all courses & coding progress</span>
            </div>
            <div className="flex items-start space-x-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Personalized graduation certificates with verifiable hash</span>
            </div>
            <div className="flex items-start space-x-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Bank-grade security powered by Google OAuth 2.0</span>
            </div>
          </div>
        </div>

        {/* Footer Security Badge */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-center space-x-1.5 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Protected by Google Identity & Cloudflare Edge Sessions</span>
        </div>

      </div>
    </div>
  );
};
