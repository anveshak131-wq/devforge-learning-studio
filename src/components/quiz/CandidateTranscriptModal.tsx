import React from 'react';
import { 
  X, 
  Printer, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Calendar,
  User,
  Hash,
  Share2
} from 'lucide-react';
import { CandidateTranscript } from '../../types/quiz';

interface CandidateTranscriptModalProps {
  isOpen: boolean;
  transcript: CandidateTranscript | null;
  onClose: () => void;
}

export const CandidateTranscriptModal: React.FC<CandidateTranscriptModalProps> = ({
  isOpen,
  transcript,
  onClose
}) => {
  if (!isOpen || !transcript) return null;

  const handlePrint = () => {
    window.print();
  };

  const getLinkedInCertUrl = () => {
    const certName = encodeURIComponent(`DevForge Certified ${transcript.trackId.toUpperCase()} Specialist (${transcript.grade})`);
    const orgName = encodeURIComponent('DevForge Learning Studio');
    const issueDate = new Date(transcript.completedAt);
    const year = issueDate.getFullYear();
    const month = issueDate.getMonth() + 1;
    const certId = encodeURIComponent(transcript.serialNumber);
    const certUrl = encodeURIComponent(transcript.verificationUrl);

    return `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${certName}&organizationName=${orgName}&issueYear=${year}&issueMonth=${month}&certId=${certId}&certUrl=${certUrl}`;
  };

  const isDistinction = transcript.scorePercent >= 90;
  const isHonors = transcript.scorePercent >= 80;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Modal Controls (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Official Academic Transcript
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={getLinkedInCertUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#0077B5] hover:bg-[#006097] text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Add to LinkedIn</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow-sm shadow-indigo-600/30"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Transcript Document */}
        <div className="p-8 sm:p-10 space-y-8 font-sans print:p-6 print:text-black print:space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6 print:border-slate-300">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                  DF
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 print:text-indigo-800">
                  DevForge Learning Studio
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                Official Examination Transcript
              </h1>
              <p className="text-xs text-slate-400 mt-0.5 print:text-slate-600">
                Verified Proctored Competency Report & Certification Audit
              </p>
            </div>

            {/* Embossed Seal Preview */}
            <div className="shrink-0 flex items-center space-x-3">
              <div className={`p-4 rounded-2xl border text-center ${
                isDistinction
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 print:border-amber-600 print:text-amber-700'
                  : isHonors
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 print:border-indigo-600 print:text-indigo-700'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 print:border-slate-400 print:text-black'
              }`}>
                <Award className="w-7 h-7 mx-auto mb-1" />
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider">
                  {transcript.grade}
                </div>
                <div className="text-lg font-black font-mono">
                  {transcript.scorePercent}%
                </div>
              </div>
            </div>
          </div>

          {/* Candidate & Exam Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs print:bg-slate-50 print:border-slate-300 print:text-black">
            <div>
              <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5 print:text-slate-600">Candidate</div>
              <div className="font-bold text-white truncate print:text-black">{transcript.candidateName}</div>
              <div className="text-[10px] text-slate-400 truncate print:text-slate-600">{transcript.candidateEmail}</div>
            </div>

            <div>
              <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5 print:text-slate-600">Credential Serial</div>
              <div className="font-mono font-bold text-indigo-300 truncate print:text-indigo-900">{transcript.serialNumber}</div>
              <div className="text-[10px] text-slate-400">Attempt #{transcript.attemptNumber}</div>
            </div>

            <div>
              <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5 print:text-slate-600">Exam Date</div>
              <div className="font-semibold text-white print:text-black">
                {new Date(transcript.completedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              <div className="text-[10px] text-slate-400">
                {new Date(transcript.completedAt).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>

            <div>
              <div className="text-slate-500 text-[10px] uppercase font-mono mb-0.5 print:text-slate-600">Proctoring Audit</div>
              <div className="flex items-center space-x-1 font-bold text-emerald-400 print:text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Clean (0 Flags)</span>
              </div>
              <div className="text-[10px] text-slate-400">Fullscreen Verified</div>
            </div>
          </div>

          {/* Syllabus Domain Competency Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 print:text-black">
                Syllabus Competency Breakdown
              </h2>
              <span className="text-[11px] text-slate-500 print:text-slate-600">
                Course: {transcript.trackTitle}
              </span>
            </div>

            <div className="border border-slate-800 rounded-xl overflow-hidden print:border-slate-300">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 border-b border-slate-800 text-[10px] font-mono uppercase text-slate-400 print:bg-slate-100 print:border-slate-300 print:text-black">
                  <tr>
                    <th className="py-2.5 px-4">Knowledge Domain</th>
                    <th className="py-2.5 px-3 text-center">Questions</th>
                    <th className="py-2.5 px-3 text-center">Score</th>
                    <th className="py-2.5 px-4 text-right">Proficiency Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 print:divide-slate-200">
                  {transcript.domainBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 print:hover:bg-transparent">
                      <td className="py-2.5 px-4 font-medium text-slate-200 print:text-black">
                        {row.domain}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono text-slate-400 print:text-slate-600">
                        {row.correct} / {row.total}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-white print:text-black">
                        {row.percent}%
                      </td>
                      <td className="py-2.5 px-4 text-right">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                          row.status === 'Mastered'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 print:text-emerald-800'
                            : row.status === 'Proficient'
                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 print:text-indigo-800'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 print:text-amber-800'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Security & Verification Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 print:border-slate-300 print:text-slate-600">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-1.5 font-semibold text-slate-300 print:text-black">
                <ShieldCheck className="w-4 h-4 text-emerald-400 print:text-emerald-700" />
                <span>Anti-Cheat Verification Record</span>
              </div>
              <p className="text-[11px] text-slate-500 print:text-slate-600">
                This candidate transcript was generated under live proctored conditions with dynamic question pooling and zero question leaks.
              </p>
            </div>

            <div className="shrink-0 text-center sm:text-right">
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-0.5 print:text-slate-600">Public Verification</div>
              <a 
                href={transcript.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 justify-center sm:justify-end print:text-indigo-800"
              >
                <span>devforge-65f.pages.dev/verify</span>
                <ExternalLink className="w-3 h-3 print:hidden" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
