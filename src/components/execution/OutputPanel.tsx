import React, { useState } from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Table, 
  Database, 
  Code, 
  AlertTriangle,
  Info,
  Layers
} from 'lucide-react';
import { ConsoleOutputMessage, ExecutionResult, TestResultItem, Language } from '../../types';
import { SqlTableView } from './SqlTableView';
import { TableSchema } from '../../services/sqlEngine';

interface OutputPanelProps {
  language: Language;
  executionResult: ExecutionResult | null;
  testResults: TestResultItem[] | null;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onClearConsole?: () => void;
  schemas?: TableSchema[];
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  language,
  executionResult,
  testResults,
  onClearConsole,
  schemas = []
}) => {
  const [activeTab, setActiveTab] = useState<'console' | 'tests' | 'sql' | 'schema' | 'transpiled'>(
    language === 'sql' ? 'sql' : testResults ? 'tests' : 'console'
  );

  // Automatically switch tab when test results arrive
  React.useEffect(() => {
    if (testResults && testResults.length > 0) {
      setActiveTab('tests');
    }
  }, [testResults]);

  // Automatically switch to SQL tab when SQL query executed
  React.useEffect(() => {
    if (language === 'sql' && executionResult?.sqlResults) {
      setActiveTab('sql');
    }
  }, [executionResult, language]);

  const passedCount = testResults?.filter(t => t.passed).length || 0;
  const totalTests = testResults?.length || 0;
  const allTestsPassed = totalTests > 0 && passedCount === totalTests;

  return (
    <div className="flex flex-col h-full bg-[#14171f] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      {/* Header with Navigation Tabs */}
      <div className="h-10 bg-[#0f1219] border-b border-slate-800 px-3 flex items-center justify-between select-none">
        <div className="flex items-center space-x-1">
          {/* Console Tab */}
          <button
            onClick={() => setActiveTab('console')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
              activeTab === 'console'
                ? 'bg-slate-800 text-slate-100 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Console</span>
            {executionResult?.logs && executionResult.logs.length > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-700 text-slate-300">
                {executionResult.logs.length}
              </span>
            )}
          </button>

          {/* Test Results Tab */}
          {testResults && (
            <button
              onClick={() => setActiveTab('tests')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === 'tests'
                  ? 'bg-slate-800 text-slate-100 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {allTestsPassed ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <XCircle className="w-3.5 h-3.5 text-amber-400" />
              )}
              <span>Tests ({passedCount}/{totalTests})</span>
            </button>
          )}

          {/* SQL Results Tab */}
          {language === 'sql' && (
            <button
              onClick={() => setActiveTab('sql')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === 'sql'
                  ? 'bg-slate-800 text-slate-100 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Table className="w-3.5 h-3.5 text-indigo-400" />
              <span>Query Results</span>
            </button>
          )}

          {/* Database Schema Inspector */}
          {language === 'sql' && (
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === 'schema'
                  ? 'bg-slate-800 text-slate-100 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Schema ({schemas.length} tables)</span>
            </button>
          )}

          {/* Transpiled Output for TS */}
          {language === 'typescript' && executionResult?.transpiledCode && (
            <button
              onClick={() => setActiveTab('transpiled')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === 'transpiled'
                  ? 'bg-slate-800 text-slate-100 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5 text-purple-400" />
              <span>JS Emit</span>
            </button>
          )}
        </div>

        {/* Clear logs action */}
        {activeTab === 'console' && onClearConsole && (
          <button
            onClick={onClearConsole}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition"
            title="Clear output"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Panel Body */}
      <div className="flex-1 overflow-auto bg-[#0d1017]">
        {/* CONSOLE TAB */}
        {activeTab === 'console' && (
          <div className="p-3 font-mono text-xs space-y-2 select-text">
            {(!executionResult || (!executionResult.logs.length && !executionResult.error && executionResult.returnValue === undefined)) && (
              <div className="h-44 flex flex-col items-center justify-center text-slate-500 text-center">
                <Terminal className="w-8 h-8 mb-2 opacity-30 text-indigo-400" />
                <p>Terminal output is empty.</p>
                <p className="text-[11px] text-slate-600 mt-0.5">Click 'Run' or 'Check Solution' to see logs.</p>
              </div>
            )}

            {executionResult?.error && (
              <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <div className="overflow-x-auto whitespace-pre-wrap">{executionResult.error}</div>
              </div>
            )}

            {executionResult?.logs.map((log, idx) => (
              <div
                key={idx}
                className={`py-1 px-2 rounded flex items-start space-x-2 ${
                  log.type === 'error'
                    ? 'bg-rose-500/10 text-rose-300 border-l-2 border-rose-500'
                    : log.type === 'warn'
                    ? 'bg-amber-500/10 text-amber-300 border-l-2 border-amber-500'
                    : log.type === 'info'
                    ? 'bg-cyan-500/10 text-cyan-300 border-l-2 border-cyan-500'
                    : 'text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <span className="text-slate-600 text-[10px] select-none shrink-0 pt-0.5">
                  &gt;
                </span>
                <div className="flex-1 overflow-x-auto whitespace-pre-wrap">
                  {log.args.map((arg, aIdx) => (
                    <span key={aIdx} className="mr-2">
                      {typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {executionResult?.returnValue !== undefined && (
              <div className="mt-3 pt-2 border-t border-slate-800 text-emerald-400 flex items-center space-x-2">
                <span className="text-slate-500 text-[10px]">Return Value:</span>
                <span className="font-semibold">
                  {typeof executionResult.returnValue === 'object'
                    ? JSON.stringify(executionResult.returnValue)
                    : String(executionResult.returnValue)}
                </span>
              </div>
            )}
          </div>
        )}

        {/* TEST RESULTS TAB */}
        {activeTab === 'tests' && testResults && (
          <div className="p-4 space-y-3 font-sans">
            {/* Summary Banner */}
            <div
              className={`p-3 rounded-xl border flex items-center justify-between ${
                allTestsPassed
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                {allTestsPassed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                )}
                <div>
                  <h4 className="text-sm font-bold">
                    {allTestsPassed ? 'All Tests Passed! Outstanding Work!' : 'Some Assertions Failed'}
                  </h4>
                  <p className="text-xs opacity-80">
                    {passedCount} of {totalTests} test cases satisfied.
                  </p>
                </div>
              </div>
            </div>

            {/* Test item checklist */}
            <div className="space-y-2">
              {testResults.map((test, idx) => (
                <div
                  key={test.id || idx}
                  className={`p-3 rounded-lg border text-xs transition ${
                    test.passed
                      ? 'bg-slate-900/60 border-slate-800/80 text-slate-300'
                      : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
                  }`}
                >
                  <div className="flex items-start space-x-2.5">
                    {test.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium">{test.description}</p>
                      {test.error && (
                        <p className="mt-1 font-mono text-[11px] text-rose-400 bg-rose-950/40 p-1.5 rounded border border-rose-900/40">
                          {test.error}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SQL RESULTS TAB */}
        {activeTab === 'sql' && (
          <SqlTableView
            results={executionResult?.sqlResults || []}
            executionTimeMs={executionResult?.executionTimeMs}
          />
        )}

        {/* DATABASE SCHEMA INSPECTOR TAB */}
        {activeTab === 'schema' && (
          <div className="p-3.5 space-y-4 font-sans text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="font-semibold text-slate-300">Active Tables & Columns</span>
              <span className="text-slate-500 font-mono">{schemas.length} tables</span>
            </div>

            {schemas.length === 0 ? (
              <p className="text-slate-500 text-center py-6">No tables loaded in this database yet.</p>
            ) : (
              schemas.map((table, tIdx) => (
                <div key={tIdx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-indigo-400 text-sm">
                      {table.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                      {table.rowCount} rows
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 font-mono text-[11px]">
                    {table.columns.map((col, cIdx) => (
                      <div
                        key={cIdx}
                        className="px-2 py-1 rounded bg-slate-950/60 border border-slate-800/80 flex items-center justify-between"
                      >
                        <span className="text-slate-200 truncate mr-1">{col.name}</span>
                        <span className="text-cyan-400 text-[10px]">{col.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TRANSPILING JS TAB */}
        {activeTab === 'transpiled' && (
          <div className="p-3 font-mono text-xs text-purple-200 whitespace-pre-wrap select-text">
            {executionResult?.transpiledCode}
          </div>
        )}
      </div>
    </div>
  );
};
