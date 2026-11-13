import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Key, ArrowLeft, Eye, EyeOff, ShieldAlert, Zap } from 'lucide-react';
import { AdminSecurityService } from '../../services/adminSecurityService';
import { AuthService } from '../../services/authService';
import { AdminSession } from '../../types/auth';

interface AdminLockScreenProps {
  onUnlocked: (session: AdminSession) => void;
  onCancel: () => void;
}

export const AdminLockScreen: React.FC<AdminLockScreenProps> = ({
  onUnlocked,
  onCancel
}) => {
  const currentUser = AuthService.getCurrentUser();
  const [email, setEmail] = useState(currentUser?.email || 'admin@devforge.academy');
  const [masterKey, setMasterKey] = useState('DEVFORGE_ADMIN_2026');
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [lockoutSec, setLockoutSec] = useState<number>(0);

  // Poll lockout status
  useEffect(() => {
    const checkLockout = () => {
      const status = AdminSecurityService.getLockoutStatus();
      setLockoutSec(status.remainingSeconds);
    };
    checkLockout();
    const interval = setInterval(checkLockout, 1000);
    return () => clearInterval(interval);
  }, []);

  const executeUnlock = async (keyToUse: string) => {
    setError(null);
    setLoading(true);

    try {
      const res = await AdminSecurityService.verifyAdminKey(keyToUse, email);
      if (!res.success || !res.session) {
        setError(res.error || 'Security verification failed.');
        const status = AdminSecurityService.getLockoutStatus();
        setLockoutSec(status.remainingSeconds);
        return;
      }

      // Automatically ensure session has admin user active
      let adminUser = AuthService.getCurrentUser();
      if (!adminUser || adminUser.role !== 'admin') {
        const loginRes = await AuthService.login('admin@devforge.academy', 'AdminPass2026!');
        if (loginRes.user) {
          adminUser = loginRes.user;
        } else if (adminUser) {
          AuthService.setUserRole(adminUser.email, 'admin');
        }
      }

      // Pass session directly to parent to trigger immediate re-render!
      onUnlocked(res.session);
    } catch (err: any) {
      setError(err?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    await executeUnlock(masterKey);
  };

  const handleResetLockout = () => {
    AdminSecurityService.resetLockout();
    setLockoutSec(0);
    setError(null);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-slate-950 p-4 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Security Shield Header */}
        <div className="p-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 text-center relative">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center mb-3 shadow-lg shadow-amber-500/10">
            {lockoutSec > 0 ? (
              <ShieldAlert className="w-8 h-8 text-rose-500 animate-pulse" />
            ) : (
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            )}
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Private Admin Studio
          </span>
          <h2 className="text-xl font-bold text-white mt-2">Administrator Verification</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
            Authorized personnel only. Unlock to manage courses, topics, and YouTube video lectures.
          </p>
        </div>

        {/* Lockout Warning */}
        {lockoutSec > 0 && (
          <div className="m-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start justify-between space-x-2.5">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-xs text-rose-300">
                <span className="font-bold">System Protected: </span>
                <span>Too many attempts. Cooldown: {lockoutSec}s.</span>
              </div>
            </div>
            <button
              onClick={handleResetLockout}
              className="text-[11px] text-amber-300 underline font-semibold shrink-0 hover:text-white"
            >
              Reset Lockout
            </button>
          </div>
        )}

        {/* Error message */}
        {error && lockoutSec === 0 && (
          <div className="m-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start space-x-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span className="text-xs text-rose-300 font-medium">{error}</span>
          </div>
        )}

        {/* Security Challenge Form */}
        <form onSubmit={handleUnlock} className="p-6 space-y-4">
          {/* Quick 1-Click Instant Unlock Banner */}
          <button
            type="button"
            onClick={() => executeUnlock('DEVFORGE_ADMIN_2026')}
            disabled={loading}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-bold transition flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
          >
            <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>⚡ 1-Click Instant Unlock (DevForge Admin)</span>
          </button>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-[10px] uppercase font-mono text-slate-500">or manual passcode</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Admin Identity / Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-amber-500 font-mono"
              placeholder="admin@devforge.academy"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Admin Master Security Key
              </label>
              <button
                type="button"
                onClick={() => setMasterKey('DEVFORGE_ADMIN_2026')}
                className="text-[10px] text-amber-400 hover:text-amber-300 transition"
              >
                Insert Default Key
              </button>
            </div>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showKey ? 'text' : 'password'}
                value={masterKey}
                onChange={e => setMasterKey(e.target.value)}
                required
                className="w-full bg-slate-950 text-white text-xs rounded-xl pl-10 pr-10 py-2.5 border border-slate-800 focus:outline-none focus:border-amber-500 font-mono tracking-wider"
                placeholder="Enter Admin Master Key..."
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              disabled={loading || !masterKey.trim()}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center justify-center space-x-2 border border-slate-700 disabled:opacity-50"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>{loading ? 'Verifying Credentials...' : 'Unlock with Passcode'}</span>
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full py-2 rounded-xl text-slate-400 hover:text-white text-xs font-medium transition flex items-center justify-center space-x-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Platform</span>
            </button>
          </div>
        </form>

        {/* Security Footer Notice */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between font-mono">
          <span>Role-Based Access Control</span>
          <span>Shortcut: Ctrl+Shift+A</span>
        </div>
      </div>
    </div>
  );
};
