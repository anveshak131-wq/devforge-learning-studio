import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Terminal, 
  FileText, 
  FolderGit2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GuidedProject } from '../../types';
import { RepoExporterService } from '../../services/repoExporterService';

interface ExportRepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: GuidedProject;
  userCode: string;
}

export const ExportRepoModal: React.FC<ExportRepoModalProps> = ({
  isOpen,
  onClose,
  project,
  userCode
}) => {
  const [activeTab, setActiveTab] = useState<'download' | 'readme' | 'terminal'>('download');
  const [copiedReadme, setCopiedReadme] = useState(false);
  const [copiedCommands, setCopiedCommands] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const readmeContent = RepoExporterService.generateReadmeMarkdown(project);
  const terminalCommands = RepoExporterService.getTerminalPushCommands(project);

  const handleDownloadZip = async () => {
    setIsExporting(true);
    try {
      await RepoExporterService.downloadProjectRepoZip(project, userCode);
    } catch (err) {
      console.error('Failed to generate repo ZIP:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyReadme = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopiedReadme(true);
    setTimeout(() => setCopiedReadme(false), 2000);
  };

  const handleCopyCommands = () => {
    navigator.clipboard.writeText(terminalCommands);
    setCopiedCommands(true);
    setTimeout(() => setCopiedCommands(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                <span>Export to GitHub Repository</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Clean
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Package {project.title} into a recruiter-ready GitHub portfolio repository.
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-5 gap-4">
          <button
            onClick={() => setActiveTab('download')}
            className={`py-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'download'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </button>

          <button
            onClick={() => setActiveTab('readme')}
            className={`py-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'readme'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Production README</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`py-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'terminal'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal Push</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {activeTab === 'download' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-2">
                <div className="flex items-center space-x-2 text-indigo-300 font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Everything Included in Your Repository ZIP:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Your completed source code ({RepoExporterService.getSourceFilename(project.language)})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Automated test suite ({RepoExporterService.getTestFilename(project.language)})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>FAANG-grade README.md with architecture diagram</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Standard .gitignore for clean commits</span>
                  </div>
                </div>
              </div>

              <div className="text-center py-4 space-y-3">
                <button
                  onClick={handleDownloadZip}
                  disabled={isExporting}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm flex items-center justify-center space-x-2.5 shadow-xl shadow-indigo-600/30 transition active:scale-95 mx-auto disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>{isExporting ? 'Generating ZIP...' : `Download ${project.slug}-repo.zip`}</span>
                </button>
                <p className="text-[11px] text-slate-500">
                  Unzip locally and run <code className="bg-slate-800 px-1 py-0.5 rounded text-slate-300">git init</code> to push to your personal GitHub account.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'readme' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Customized for {project.title}
                </span>
                <button
                  onClick={handleCopyReadme}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-1.5 transition"
                >
                  {copiedReadme ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Markdown</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px] overflow-x-auto max-h-[320px] leading-relaxed select-all">
                <code>{readmeContent}</code>
              </pre>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Execute inside unzipped project folder:
                </span>
                <button
                  onClick={handleCopyCommands}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-1.5 transition"
                >
                  {copiedCommands ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Commands</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-[11px] overflow-x-auto leading-relaxed select-all">
                <code>{terminalCommands}</code>
              </pre>

              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/60 text-xs text-slate-400">
                💡 Replace <code className="text-indigo-300">YOUR_USERNAME</code> with your actual GitHub username before running the commands.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Includes DevForge Verification Badge</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
