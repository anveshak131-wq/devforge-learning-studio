import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Share2, 
  Check, 
  Printer, 
  ExternalLink, 
  Search, 
  ArrowLeft, 
  Sparkles, 
  Award, 
  AlertTriangle,
  Code2,
  BookOpen,
  Calendar,
  Hash,
  Copy
} from 'lucide-react';
import { Certificate } from '../../types/auth';
import { AuthService } from '../../services/authService';

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67Z" />
  </svg>
);

interface CertificateVerifyViewProps {
  credentialId?: string;
  onBackHome: () => void;
  onNavigateCourse?: (trackSlug: string) => void;
  onNavigateToId?: (newId: string) => void;
}

export const CertificateVerifyView: React.FC<CertificateVerifyViewProps> = ({
  credentialId = '',
  onBackHome,
  onNavigateCourse,
  onNavigateToId
}) => {
  const [cert, setCert] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [searchInput, setSearchInput] = useState(credentialId || '');

  useEffect(() => {
    let isCancelled = false;

    async function loadCertificate() {
      if (!credentialId || !credentialId.trim()) {
        setLoading(false);
        setError('No Credential ID was provided in the verification URL.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const found = await AuthService.fetchCertificateFromCloud(credentialId);
        if (isCancelled) return;

        if (found) {
          setCert(found);
          setSearchInput(found.credentialId);
        } else {
          setError(`No authentic credential matching "${credentialId}" was found in our verification registry.`);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError('Failed to reach the verification registry. Please check your network connection.');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    loadCertificate();

    return () => {
      isCancelled = true;
    };
  }, [credentialId]);

  const handleCopyLink = () => {
    if (!cert) return;
    const url = AuthService.getPublicVerificationUrl(cert.credentialId);
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleAddToLinkedIn = () => {
    if (!cert) return;
    const url = AuthService.buildLinkedInCertUrl(cert);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedInFeed = () => {
    if (!cert) return;
    const url = AuthService.buildLinkedInShareUrl(cert);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchInput.trim().toUpperCase();
    if (clean) {
      if (onNavigateToId) {
        onNavigateToId(clean);
      } else {
        window.location.href = `/verify/${encodeURIComponent(clean)}`;
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-slate-950 font-sans text-slate-100 flex flex-col justify-between">
      {/* Top Navigation & Lookup Bar (Hidden on print) */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-30 px-4 md:px-8 py-3 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={onBackHome}
              className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition px-2.5 py-1.5 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to DevForge</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">
                Official Credential Verification Registry
              </span>
            </div>
          </div>

          {/* Quick Lookup Form */}
          <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Lookup ID (e.g. DF-PY-...)"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shrink-0 transition"
            >
              Verify
            </button>
          </form>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto w-full px-4 md:px-8 py-8 space-y-8 flex-1">
        {loading && (
          <div className="py-24 text-center space-y-4">
            <div className="w-12 h-12 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Verifying Credential...</h3>
              <p className="text-xs text-slate-400 font-mono">
                Querying cryptographic registry for {credentialId}
              </p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="max-w-xl mx-auto py-12 px-6 rounded-2xl bg-slate-900/60 border border-rose-500/30 text-center space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">Credential Verification Failed</h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                {error}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onBackHome}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}

        {!loading && cert && (
          <>
            {/* Verification Status Ribbon Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 p-5 md:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
              <div className="flex items-start space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Authentic & Verified</span>
                    </span>
                    {cert.examScore !== undefined && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wider flex items-center space-x-1">
                        <Award className="w-3 h-3 text-amber-400" />
                        <span>Exam Score: {cert.examScore}% ({cert.grade})</span>
                      </span>
                    )}
                    <span className="text-xs text-slate-400">
                      ID: <strong className="font-mono text-slate-200">{cert.credentialId}</strong>
                    </span>
                  </div>
                  <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    Verified Certificate of Professional Mastery
                  </h1>
                  <p className="text-xs text-slate-300">
                    This official credential was conferred upon <span className="text-emerald-300 font-semibold">{cert.userName}</span> for passing all course requirements on DevForge.
                  </p>
                </div>
              </div>

              {/* Action Buttons: LinkedIn, Share, Print */}
              <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
                <button
                  onClick={handleAddToLinkedIn}
                  className="px-3.5 py-2 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold flex items-center space-x-2 shadow-lg shadow-[#0a66c2]/20 transition"
                  title="Add this certification directly to your LinkedIn profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Add to LinkedIn</span>
                </button>

                <button
                  onClick={handleShareLinkedInFeed}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                  title="Share this achievement to your LinkedIn Feed"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                  title="Copy permanent verification link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied Link!' : 'Copy Link'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                  title="Download as PDF or Print"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print PDF</span>
                </button>
              </div>
            </div>

            {/* The Certificate Diploma Card (Printable Area) */}
            <div className="flex justify-center print:m-0 print:p-0">
              <div
                id="certificate-print-area"
                className="w-full max-w-[850px] aspect-[1.414/1] bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-slate-950 border-[8px] border-double border-amber-500/60 rounded-xl p-6 sm:p-10 md:p-12 text-center flex flex-col justify-between shadow-2xl relative overflow-hidden select-none print:border-black print:bg-white print:text-black print:shadow-none print:rounded-none"
              >
                {/* Background subtle watermark / security pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

                {/* Certificate Header */}
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-center space-x-2 text-amber-400 print:text-amber-700">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold">
                      DevForge Academy of Software Engineering
                    </span>
                    <Sparkles className="w-4 h-4" />
                  </div>

                  <h1 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 print:text-black">
                    Certificate of Professional Mastery
                  </h1>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 print:text-slate-600 uppercase tracking-widest font-mono">
                    Credential #{cert.credentialId}
                  </p>
                </div>

                {/* Recipient Section */}
                <div className="my-2 sm:my-4 space-y-1 relative z-10">
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 italic">
                    This is proudly awarded to
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white print:text-black tracking-wide border-b border-amber-500/40 pb-2 inline-block px-8 max-w-full truncate">
                    {cert.userName}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mt-2 max-w-xl mx-auto leading-relaxed">
                    For demonstrating technical proficiency and passing all automated unit testing milestones in:
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-300 print:text-amber-800 tracking-tight pt-1">
                    {cert.trackTitle}
                  </h3>
                  {cert.examScore !== undefined && (
                    <div className="pt-2">
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 print:border-black print:text-black inline-flex items-center space-x-1.5 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                        <span>Certified Exam Score: {cert.examScore}% • {cert.grade}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Competencies Verified */}
                <div className="relative z-10 py-2 border-t border-b border-slate-800/80 print:border-slate-300 max-w-lg mx-auto">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Verified Technical Competencies
                  </span>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono text-slate-300 print:text-slate-800">
                    {cert.skillsVerified.slice(0, 10).map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800/60 print:bg-slate-200 border border-slate-700/50 print:border-slate-400">
                        {skill}
                      </span>
                    ))}
                    {cert.skillsVerified.length > 10 && (
                      <span className="px-2 py-0.5 rounded bg-slate-800/60 print:bg-slate-200 border border-slate-700/50 text-slate-400">
                        +{cert.skillsVerified.length - 10} more topics
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Signatures and Verification */}
                <div className="pt-3 sm:pt-4 flex items-end justify-between text-xs text-slate-400 print:text-slate-700 relative z-10">
                  {/* Issued Date */}
                  <div className="text-left space-y-0.5 sm:space-y-1">
                    <span className="text-[9px] sm:text-[10px] text-slate-500 print:text-slate-600 uppercase tracking-wider block">
                      Date of Conferral
                    </span>
                    <span className="font-semibold text-slate-200 print:text-black font-mono text-[11px] sm:text-xs">
                      {cert.issuedAt}
                    </span>
                  </div>

                  {/* Gold Seal Emblem */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-[2px] shadow-lg shadow-amber-500/30 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-slate-950 print:bg-white flex flex-col items-center justify-center text-amber-400 print:text-amber-700">
                        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="text-[6px] sm:text-[7px] font-bold tracking-tighter uppercase">VERIFIED</span>
                      </div>
                    </div>
                  </div>

                  {/* Academic Signature */}
                  <div className="text-right space-y-0.5 sm:space-y-1">
                    <div className="font-serif italic text-sm sm:text-base text-amber-200 print:text-black border-b border-slate-700 print:border-black pb-0.5 sm:pb-1">
                      DevForge Academic Council
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 print:text-slate-600 uppercase tracking-wider block">
                      Curriculum & Verification Board
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter & Employer Trust Breakdown Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 print:hidden">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <Code2 className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">100% Code-Tested</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Earned exclusively through rigorous, hands-on automated unit tests and milestone project builds—never passive multiple choice.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">Cryptographic Proof</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Hash: {cert.verificationHash || 'v_hash_verified_devforge'}
                  <br />
                  Edge Database ID: {cert.credentialId}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Award className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">Issuing Institution</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  DevForge Academy of Software Engineering. Permanent public record accessible worldwide.
                </p>
              </div>
            </div>

            {/* Share & Call-to-action banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-sm font-bold text-white">
                  Share this credential to stand out to recruiters
                </h3>
                <p className="text-xs text-slate-400">
                  Add to your LinkedIn profile with 1 click or share the direct link with hiring managers.
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={handleAddToLinkedIn}
                  className="px-4 py-2 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold flex items-center space-x-2 shadow-md transition"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Add to LinkedIn</span>
                </button>

                <button
                  onClick={onBackHome}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
                >
                  Explore All Courses
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
