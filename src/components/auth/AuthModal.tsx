import React, { useState } from 'react';
import { X, Lock, Mail, User, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { AuthService } from '../../services/authService';
import { User as UserType } from '../../types/auth';

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
  const [adminKey, setAdminKey] = useState('');
  const [showAdminKeyField, setShowAdminKeyField] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        const res = await AuthService.register(email, password, fullName, adminKey || undefined);
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

  const handleDemoLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      // Create or log into demo student account
      const demoEmail = 'student@devforge.academy';
      const demoPass = 'password123';
      let res = await AuthService.login(demoEmail, demoPass);
      if (!res.success) {
        res = await AuthService.register(demoEmail, demoPass, 'Alex Rivers');
      }
      if (res.user) {
        onSuccess(res.user);
        onClose();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAdminDemoLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      // Log into super admin account
      const adminEmail = 'admin@devforge.academy';
      const adminPass = 'AdminPass2026!';
      const res = await AuthService.login(adminEmail, adminPass);
      if (res.user) {
        onSuccess(res.user);
        onClose();
      } else {
        setError(res.error || 'Failed to sign in as admin');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col font-sans">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Award className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                {customTitle || (mode === 'signup' ? 'Create Your Account' : 'Welcome Back')}
              </h3>
              <p className="text-[11px] text-slate-400">
                {customDescription || (mode === 'signup' ? 'Personalize and claim your course certificates' : 'Sign in to access your certificate vault')}
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

        {/* Tab Switcher */}
        <div className="px-5 pt-4 flex space-x-2">
          <button
            onClick={() => { setMode('signup'); setError(null); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              mode === 'signup'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/60 text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
          <button
            onClick={() => { setMode('signin'); setError(null); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              mode === 'signin'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/60 text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          {error && (
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {error}
            </div>
          )}

          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span>Full Name (for Certificate)</span>
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

          {mode === 'signup' && (
            <div className="pt-1">
              {!showAdminKeyField ? (
                <button
                  type="button"
                  onClick={() => setShowAdminKeyField(true)}
                  className="text-[11px] text-amber-400/80 hover:text-amber-300 transition"
                >
                  + Have an Admin Master Key?
                </button>
              ) : (
                <div className="space-y-1 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <label className="text-[11px] font-semibold text-amber-300 flex items-center justify-between">
                    <span>Admin Master Security Key</span>
                    <button
                      type="button"
                      onClick={() => setShowAdminKeyField(false)}
                      className="text-[10px] text-slate-400 hover:text-white"
                    >
                      Hide
                    </button>
                  </label>
                  <input
                    type="password"
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    placeholder="Enter DEVFORGE_ADMIN_2026..."
                    className="w-full bg-slate-950 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <p className="text-[10px] text-amber-200/70">
                    Entering a valid key will elevate this account to Super Administrator upon creation.
                  </p>
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-indigo-600/30 transition disabled:opacity-50 mt-2"
          >
            <span>{loading ? 'Processing...' : mode === 'signup' ? 'Create Account & Continue' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Demo Login Options */}
          <div className="pt-2 flex flex-col space-y-1.5 text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="text-xs text-slate-400 hover:text-indigo-300 underline transition"
            >
              1-Click Demo Learner Account (Alex Rivers)
            </button>
            <button
              type="button"
              onClick={handleAdminDemoLogin}
              className="text-xs text-amber-400/90 hover:text-amber-300 underline transition font-medium"
            >
              1-Click Demo Administrator Account (DevForge SuperAdmin)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
