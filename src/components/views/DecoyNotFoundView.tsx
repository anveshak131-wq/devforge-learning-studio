import React from 'react';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';

interface DecoyNotFoundViewProps {
  onBackHome: () => void;
}

export const DecoyNotFoundView: React.FC<DecoyNotFoundViewProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-slate-950 p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 mx-auto flex items-center justify-center shadow-lg">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-white tracking-tight font-mono">
            404
          </span>
          <h1 className="text-lg font-bold text-slate-200">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
            The page you requested could not be located on this server. It may have been moved, deleted, or never existed.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onBackHome}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold inline-flex items-center space-x-2 transition shadow-lg shadow-indigo-600/30"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Learning Catalog</span>
          </button>
        </div>
      </div>
    </div>
  );
};
