import React, { useRef } from 'react';
import confetti from 'canvas-confetti';
import { X, Download, Printer, Share2, Check, Award, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { Certificate } from '../../types/auth';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col font-sans my-auto">
        {/* Modal Toolbar (hidden when printing) */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-white text-base">Verified Course Certificate</h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyId}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center space-x-1.5 transition"
              title="Copy Credential ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied ID' : 'Copy ID'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-lg shadow-amber-500/20 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download PDF / Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Certificate Container */}
        <div className="p-6 md:p-10 bg-slate-950 print:bg-white print:p-0 flex items-center justify-center overflow-x-auto">
          <div
            id="certificate-print-area"
            className="w-full max-w-[850px] aspect-[1.414/1] bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-slate-950 border-[8px] border-double border-amber-500/60 rounded-xl p-8 md:p-12 text-center flex flex-col justify-between shadow-2xl relative overflow-hidden select-none print:border-black print:bg-white print:text-black print:shadow-none"
          >
            {/* Background subtle watermark / security pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

            {/* Certificate Header */}
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-center space-x-2 text-amber-400 print:text-amber-700">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold">
                  DevForge Academy of Software Engineering
                </span>
                <Sparkles className="w-4 h-4" />
              </div>

              <h1 className="text-2xl md:text-3xl font-serif tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 print:text-black">
                Certificate of Professional Mastery
              </h1>
              <p className="text-[11px] text-slate-400 print:text-slate-600 uppercase tracking-widest">
                Verification Credential #{certificate.credentialId}
              </p>
            </div>

            {/* Recipient Section */}
            <div className="my-4 space-y-1 relative z-10">
              <p className="text-xs text-slate-300 print:text-slate-700 italic">
                This is proudly awarded to
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white print:text-black tracking-wide border-b border-amber-500/40 pb-2 inline-block px-8 max-w-full truncate">
                {certificate.userName}
              </h2>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-2 max-w-xl mx-auto leading-relaxed">
                For demonstrating exceptional technical proficiency and successfully passing all automated unit testing milestones in:
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-amber-300 print:text-amber-800 tracking-tight pt-1">
                {certificate.trackTitle}
              </h3>
            </div>

            {/* Competencies Verified */}
            <div className="relative z-10 py-2 border-t border-b border-slate-800/80 print:border-slate-300 max-w-lg mx-auto">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Verified Technical Competencies
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 text-[10px] font-mono text-slate-300 print:text-slate-800">
                {certificate.skillsVerified.map((skill, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-800/60 print:bg-slate-200 border border-slate-700/50 print:border-slate-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Signatures and Verification */}
            <div className="pt-4 flex items-end justify-between text-xs text-slate-400 print:text-slate-700 relative z-10">
              {/* Issued Date */}
              <div className="text-left space-y-1">
                <span className="text-[10px] text-slate-500 print:text-slate-600 uppercase tracking-wider block">
                  Date of Conferral
                </span>
                <span className="font-semibold text-slate-200 print:text-black font-mono">
                  {certificate.issuedAt}
                </span>
              </div>

              {/* Gold Seal Emblem */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-[2px] shadow-lg shadow-amber-500/30 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-950 print:bg-white flex flex-col items-center justify-center text-amber-400 print:text-amber-700">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="text-[7px] font-bold tracking-tighter uppercase">VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Academic Signature */}
              <div className="text-right space-y-1">
                <div className="font-serif italic text-base text-amber-200 print:text-black border-b border-slate-700 print:border-black pb-1">
                  DevForge Academic Council
                </div>
                <span className="text-[10px] text-slate-500 print:text-slate-600 uppercase tracking-wider block">
                  Curriculum & Verification Board
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
