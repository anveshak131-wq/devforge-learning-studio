import React, { useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { Play, RotateCcw, Copy, Check, Sparkles } from 'lucide-react';
import { Language } from '../../types';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language: Language;
  onRun?: () => void;
  onVerify?: () => void;
  onReset?: () => void;
  isRunning?: boolean;
  isVerifying?: boolean;
  hasTests?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  language,
  onRun,
  onVerify,
  onReset,
  isRunning = false,
  isVerifying = false,
  hasTests = false
}) => {
  const [copied, setCopied] = React.useState(false);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // Configure editor preferences
    editor.updateOptions({
      fontSize: 13.5,
      lineHeight: 22,
      fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, monospace",
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 12, bottom: 12 },
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      renderWhitespace: 'selection',
      suggestOnTriggerCharacters: true,
      tabSize: 2
    });

    // Add keyboard shortcuts: Cmd+Enter or Ctrl+Enter to Run
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (hasTests && onVerify) {
        onVerify();
      } else if (onRun) {
        onRun();
      }
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormat = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  };

  const monacoLanguage = language === 'sql' ? 'sql' : language === 'typescript' ? 'typescript' : language === 'python' ? 'python' : 'javascript';

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      {/* Editor Header Toolbar */}
      <div className="h-10 bg-[#181818] border-b border-slate-800 px-3.5 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          {/* Language pill */}
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {language}
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Press <kbd className="px-1 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px]">⌘</kbd> + <kbd className="px-1 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px]">Enter</kbd> to execute
          </span>
        </div>

        {/* Toolbar actions */}
        <div className="flex items-center space-x-1.5">
          {onReset && (
            <button
              onClick={onReset}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition"
              title="Reset code to starter template"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Run / Execute button */}
          {onRun && (
            <button
              onClick={onRun}
              disabled={isRunning || isVerifying}
              className="px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium flex items-center space-x-1.5 transition disabled:opacity-50"
            >
              <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          )}

          {/* Verify Solution / Run Tests Button */}
          {hasTests && onVerify && (
            <button
              onClick={onVerify}
              disabled={isRunning || isVerifying}
              className="px-3 py-1 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-500/20 text-xs font-semibold flex items-center space-x-1.5 transition disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>{isVerifying ? 'Testing...' : 'Check Solution'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 w-full relative">
        <Editor
          height="100%"
          language={monacoLanguage}
          value={code}
          onChange={(val) => onChange(val || '')}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          options={{
            automaticLayout: true
          }}
          loading={
            <div className="flex items-center justify-center h-full text-slate-500 text-sm">
              Loading code environment...
            </div>
          }
        />
      </div>
    </div>
  );
};
