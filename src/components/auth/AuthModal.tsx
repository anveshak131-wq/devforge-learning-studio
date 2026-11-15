import React, { useState, useEffect, useRef } from 'react';
import { X, Lock, Mail, User, ArrowRight, Award, ShieldCheck } from 'lucide-react';
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
  initialMode = 'signup',
  customTitle,
  customDescription
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const googleBtnContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Google Identity Services button & prompt
  useEffect(() => {
    if (!isOpen) return;

    const clientId =
      (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID ||
      '1029384756-devforge-oauth-client.apps.googleusercontent.com';

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

          // Render official Google button into container if available
          if (googleBtnContainerRef.current) {
            googleBtnContainerRef.current.innerHTML = '';
            window.google.accounts.id.renderButton(googleBtnContainerRef.current, {
              theme: 'filled_black',
              size: 'large',
              shape: 'pill',
              width: 380,
              text: 'continue_with',
              logo_alignment: 'left',
            });
          }
        } catch (e) {
          console.warn('Google Identity initialization error:', e);
        }
      } else {
        // Retry shortly if script is still downloading
        timer = setTimeout(initGoogle, 300);
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
      setError('Google Identity Services is loading. Please check your internet connection or ad-blocker.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        const res = await AuthService.register(email, password, fullName);
        if (!res.success) {
          setError(res.error || 'Registration failed');
          return;
        }
        if (res.user) {
          onSuccess(res.user);
          onClose();
        }
      } else {
        const res = await AuthService.login(email, password);
        if (!res.success) {
          setError(res.error || 'Login failed');
          return;
        }
        if (res.user) {
          onSuccess(res.user);
          onClose();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col font-sans">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Award className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                {customTitle || (mode === 'signup' ? 'Join DevForge Academy' : 'Welcome Back')}
              </h3>
              <p className="text-[11px] text-slate-400">
                {customDescription || (mode === 'signup' ? 'Instant lifetime access & certificates across all devices' : 'Sign in to access your courses and certificates')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          {error && (
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {error}
            </div>
          )}

          {/* Primary Action: Google 1-Click Sign-In */}
          <div className="space-y-2">
            <div 
              ref={googleBtnContainerRef} 
              className="w-full flex items-center justify-center min-h-[44px]"
            >
              {/* Fallback stylized button until GIS script finishes rendering */}
              <button
                type="button"
                onClick={handleGoogleClick}
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs flex items-center justify-center shadow-md transition disabled:opacity-50"
              >
                <svg className="w-4 h-4 mr-2.5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400">
              ⚡ Instant 1-click login • No password required
            </p>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-slate-800 w-full"></div>
            <span className="bg-slate-900 px-3 text-[10px] uppercase font-bold tracking-wider text-slate-500 absolute">
              or with email & password
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex space-x-2">
            <button
              onClick={() => { setMode('signup'); setError(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                mode === 'signup'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
            <button
              onClick={() => { setMode('signin'); setError(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                mode === 'signin'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                  <span>Full Name</span>
                  <span className="text-[10px] text-indigo-400">Printed on credential</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-indigo-600/30 transition disabled:opacity-50 mt-1"
            >
              <span>{loading ? 'Processing...' : mode === 'signup' ? 'Create Account & Continue' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer Security Badge */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-center space-x-1.5 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Protected by Google Identity & Cloudflare Edge Sessions</span>
        </div>
      </div>
    </div>
  );
};
