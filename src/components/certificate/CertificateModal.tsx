import React, { useState } from 'react';
import { X, Printer, Share2, Check, Award, ShieldCheck, Sparkles, ExternalLink, Copy } from 'lucide-react';
import { Certificate } from '../../types/auth';
import { AuthService } from '../../services/authService';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67Z" />
  </svg>
);

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
  onOpenPublicVerify?: (credentialId: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate,
  onOpenPublicVerify
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !certificate) return null;

  const publicUrl = AuthService.getPublicVerificationUrl(certificate.credentialId);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleAddToLinkedIn = () => {
    const url = AuthService.buildLinkedInCertUrl(certificate);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenVerifyPage = () => {
    if (onOpenPublicVerify) {
      onClose();
      onOpenPublicVerify(certificate.credentialId);
    } else {
      window.open(`/verify/${certificate.credentialId}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col font-sans my-auto">
        {/* Modal Toolbar (hidden when printing) */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-white text-base">Verified Course Certificate</h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* 1-Click Add to LinkedIn */}
            <button
              onClick={handleAddToLinkedIn}
              className="px-3 py-1.5 rounded-lg bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-[#0a66c2]/20 transition"
              title="Add this certification directly to your LinkedIn profile"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>Add to LinkedIn</span>
            </button>

            {/* Copy Verification Link */}
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center space-x-1.5 transition border border-slate-700"
              title="Copy public verification link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied Link!' : 'Copy Link'}</span>
            </button>

            {/* Print / PDF */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-lg shadow-amber-500/20 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PDF / Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Certificate Container */}
        <div className="p-6 md:p-10 bg-slate-950 print:bg-white print:p-0 flex items-center justify-center overflow-x-auto">
          <div
            id="certificate-print-area"
            className="w-full max-w-[850px] aspect-[1.414/1] bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-slate-950 border-[8px] border-double border-amber-500/60 rounded-xl p-6 sm:p-10 md:p-12 text-center flex flex-col justify-between shadow-2xl relative overflow-hidden select-none print:border-black print:bg-white print:text-black print:shadow-none"
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
                Verification Credential #{certificate.credentialId}
              </p>
            </div>

            {/* Recipient Section */}
            <div className="my-2 sm:my-4 space-y-1 relative z-10">
              <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 italic">
                This is proudly awarded to
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white print:text-black tracking-wide border-b border-amber-500/40 pb-2 inline-block px-8 max-w-full truncate">
                {certificate.userName}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 mt-2 max-w-xl mx-auto leading-relaxed">
                For demonstrating exceptional technical proficiency and successfully passing all automated unit testing milestones in:
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-300 print:text-amber-800 tracking-tight pt-1">
                {certificate.trackTitle}
              </h3>
              {certificate.examScore !== undefined && (
                <div className="pt-2">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 print:border-black print:text-black inline-flex items-center space-x-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                    <span>Certified Exam Score: {certificate.examScore}% • {certificate.grade}</span>
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
                {certificate.skillsVerified.slice(0, 10).map((skill, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-800/60 print:bg-slate-200 border border-slate-700/50 print:border-slate-400">
                    {skill}
                  </span>
                ))}
                {certificate.skillsVerified.length > 10 && (
                  <span className="px-2 py-0.5 rounded bg-slate-800/60 print:bg-slate-200 border border-slate-700/50 text-slate-400">
                    +{certificate.skillsVerified.length - 10} more topics
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
                  {certificate.issuedAt}
                </span>
              </div>

              {/* Gold / Silver / Bronze Seal Emblem */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] shadow-lg flex items-center justify-center ${
                  (certificate.examScore !== undefined && certificate.examScore >= 90) || certificate.grade === 'Distinction'
                    ? 'bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-600 shadow-amber-500/40 ring-2 ring-amber-400/50'
                    : (certificate.examScore !== undefined && certificate.examScore >= 80) || certificate.grade === 'High Honors'
                    ? 'bg-gradient-to-tr from-slate-300 via-indigo-200 to-slate-400 shadow-indigo-500/30 ring-2 ring-indigo-400/50'
                    : 'bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-amber-500/30'
                }`}>
                  <div className="w-full h-full rounded-full bg-slate-950 print:bg-white flex flex-col items-center justify-center text-amber-400 print:text-amber-700">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-[6px] sm:text-[7px] font-black tracking-tighter uppercase">
                      {(certificate.examScore !== undefined && certificate.examScore >= 90) || certificate.grade === 'Distinction'
                        ? 'DISTINCTION'
                        : (certificate.examScore !== undefined && certificate.examScore >= 80) || certificate.grade === 'High Honors'
                        ? 'HONORS'
                        : 'VERIFIED'}
                    </span>
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

        {/* Public Sharing Footer Banner */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 print:hidden">
          <div className="flex items-center space-x-2 truncate">
            <span className="text-slate-500 shrink-0">Official Verification URL:</span>
            <span className="font-mono text-slate-300 truncate">{publicUrl}</span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleOpenVerifyPage}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
            >
              <span>View Public Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
