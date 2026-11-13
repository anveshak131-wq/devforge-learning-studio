import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Printer, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  User,
  Edit2
} from 'lucide-react';
import { Certificate, User as UserType } from '../../types/auth';
import { UserStats } from '../../types';
import { CourseStorageService } from '../../services/courseStorageService';
import { AuthService } from '../../services/authService';
import { LanguageIcon } from '../common/LanguageIcon';

interface CertificatesVaultViewProps {
  currentUser: UserType | null;
  userStats: UserStats;
  onOpenAuth: () => void;
  onViewCertificate: (cert: Certificate) => void;
  onNavigateLesson: (trackSlug: string, lessonId: string) => void;
  onUserUpdated: (user: UserType) => void;
}

export const CertificatesVaultView: React.FC<CertificatesVaultViewProps> = ({
  currentUser,
  userStats,
  onOpenAuth,
  onViewCertificate,
  onNavigateLesson,
  onUserUpdated
}) => {
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(currentUser?.fullName || '');

  const userCerts = AuthService.getUserCertificates();

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    const updated = AuthService.updateProfile(nameInput);
    if (updated) {
      onUserUpdated(updated);
      setEditingName(false);
    }
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-8 font-sans">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Credentials Vault</span>
            </span>
            <span className="text-xs text-slate-400">Verified by DevForge</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            My Course Certificates
          </h1>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Every course you complete unlocks an official, cryptographically verified Certificate of Professional Mastery stamped with your name.
          </p>

          {/* Profile Name Management */}
          {currentUser ? (
            <div className="pt-2 flex items-center space-x-2 text-xs">
              <span className="text-slate-400">Certificate Recipient Name:</span>
              {!editingName ? (
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    {currentUser.fullName}
                  </span>
                  <button
                    onClick={() => { setEditingName(true); setNameInput(currentUser.fullName); }}
                    className="p-1 text-slate-400 hover:text-white transition"
                    title="Edit Name on Certificates"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSaveName} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded px-2 py-0.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Your Full Name"
                  />
                  <button type="submit" className="px-2 py-0.5 rounded bg-indigo-600 text-white text-xs font-medium">Save</button>
                  <button type="button" onClick={() => setEditingName(false)} className="text-slate-500 text-xs">Cancel</button>
                </form>
              )}
            </div>
          ) : (
            <div className="pt-2 flex items-center space-x-2">
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition"
              >
                <span>Sign In or Sign Up to Claim Certificates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Certificate counter card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 min-w-[200px] flex flex-col items-center justify-center text-center space-y-1">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-1">
            <Award className="w-6 h-6 text-amber-400" />
          </div>
          <span className="text-2xl font-extrabold text-white font-mono">{userCerts.length}</span>
          <span className="text-xs text-slate-400">Certificates Earned</span>
        </div>
      </div>

      {/* Earned Certificates Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Earned Credentials ({userCerts.length})</span>
        </h2>

        {userCerts.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
            <Award className="w-12 h-12 mx-auto text-slate-600" />
            <h3 className="text-base font-bold text-slate-300">No Certificates Earned Yet</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Complete all lessons in any language track below to unlock and download your official credential!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-900/90 to-amber-950/20 border border-amber-500/40 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Official Credential
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">{cert.trackTitle}</h3>
                  <p className="text-xs text-slate-400">Conferred upon: <strong className="text-slate-200">{cert.userName}</strong></p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skillsVerified.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">Issued {cert.issuedAt}</span>
                  <button
                    onClick={() => onViewCertificate(cert)}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-amber-500/20 transition"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>View & Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Track Completion Status & Unlock Checklist */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span>Certificate Progress by Course</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CourseStorageService.getTracks().map(track => {
            const completedCount = track.lessons.filter(l => userStats.completedLessonIds.includes(l.id)).length;
            const total = track.lessons.length;
            const isCompleted = completedCount === total;
            const hasCert = userCerts.some(c => c.trackId === track.id || c.trackTitle.includes(track.title));

            return (
              <div
                key={track.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono flex items-center space-x-1.5">
                      <LanguageIcon language={track.language} className="w-3.5 h-3.5" />
                      <span>{track.language}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {completedCount}/{total} Lessons
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">{track.title}</h3>
                  <p className="text-xs text-slate-400">{track.tagline}</p>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-2">
                    <div
                      className={`h-full bg-gradient-to-r ${track.color}`}
                      style={{ width: `${(completedCount / total) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  {isCompleted ? (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center space-x-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Ready to Claim / Claimed</span>
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">
                      {total - completedCount} lesson{total - completedCount > 1 ? 's' : ''} remaining
                    </span>
                  )}

                  <button
                    onClick={() => onNavigateLesson(track.slug, track.lessons[0].id)}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1 transition"
                  >
                    <span>{isCompleted ? 'Review Course' : 'Continue Course'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
