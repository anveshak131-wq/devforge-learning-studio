import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Key, ArrowLeft, Eye, EyeOff, ShieldAlert } from 'lucide-react';
import { AdminSecurityService } from '../../services/adminSecurityService';
import { AuthService } from '../../services/authService';

interface AdminLockScreenProps {
  onUnlocked: () => void;
  onCancel: () => void;
}

export const AdminLockScreen: React.FC<AdminLockScreenProps> = ({
  onUnlocked,
  onCancel
}) => {
  const currentUser = AuthService.getCurrentUser();
  const [email, setEmail] = useState(currentUser?.email || 'admin@devforge.academy');
  const [masterKey, setMasterKey] = useState('');
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

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutSec > 0) return;

    setError(null);
    setLoading(true);

    try {
      const res = await AdminSecurityService.verifyAdminKey(masterKey, email);
      if (!res.success) {
        setError(res.error || 'Security verification failed.');
        const status = AdminSecurityService.getLockoutStatus();
        setLockoutSec(status.remainingSeconds);
        return;
      }

      // If logged in, ensure role is elevated to admin
      if (currentUser) {
        await AuthService.elevateToAdmin(currentUser.email, masterKey);
      }

      onUnlocked();
    } finally {
      setLoading(false);
    }
  };

  const handleUseDemoKey = () => {
    setMasterKey('DEVFORGE_ADMIN_2026');
    setError(null);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-slate-950 p-4 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Security Shield Header */}
        <div className="p-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 text-center relative">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mx-auto flex items-center justify-center mb-3 shadow-lg shadow-indigo-500/10">
            {lockoutSec > 0 ? (
              <ShieldAlert className="w-8 h-8 text-rose-500 animate-pulse" />
            ) : (
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            )}
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
            Restricted Admin Area
          </span>
          <h2 className="text-xl font-bold text-white mt-2">Security Verification</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
            Role-Based Access Control: Enter the Admin Master Security Key to unlock curriculum authoring.
          </p>
        </div>

        {/* Lockout Warning */}
        {lockoutSec > 0 && (
          <div className="m-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start space-x-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="text-xs text-rose-300">
              <span className="font-bold">System Locked: </span>
              <span>Too many invalid attempts. Admin portal is protected. Try again in {lockoutSec}s.</span>
            </div>
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
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Admin Identity / Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={lockoutSec > 0}
              className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500 font-mono disabled:opacity-50"
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
                onClick={handleUseDemoKey}
                className="text-[10px] text-cyan-400 hover:text-cyan-300 transition"
              >
                Use Default Key
              </button>
            </div>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showKey ? 'text' : 'password'}
                value={masterKey}
                onChange={e => setMasterKey(e.target.value)}
                required
                disabled={lockoutSec > 0}
                className="w-full bg-slate-950 text-white text-xs rounded-xl pl-10 pr-10 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500 font-mono tracking-wider disabled:opacity-50"
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
            <p className="text-[11px] text-slate-500 mt-1">
              Default Platform Key: <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">DEVFORGE_ADMIN_2026</code>
            </p>
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              disabled={loading || lockoutSec > 0 || !masterKey.trim()}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold transition flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{loading ? 'Verifying Credentials...' : 'Unlock Admin Portal'}</span>
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-medium transition flex items-center justify-center space-x-1.5 border border-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Learning Dashboard</span>
            </button>
          </div>
        </form>

        {/* Security Footer Notice */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between font-mono">
          <span>AES-256 / SHA-256 Guard</span>
          <span>5-Attempt Lockout Defense</span>
        </div>
      </div>
    </div>
  );
};
