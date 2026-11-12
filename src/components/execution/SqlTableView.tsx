import React, { useState } from 'react';
import { Download, Table, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface SqlTableViewProps {
  results: {
    columns: string[];
    values: any[][];
  }[];
  executionTimeMs?: number;
}

export const SqlTableView: React.FC<SqlTableViewProps> = ({ results, executionTimeMs }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 15;

  if (!results || results.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-slate-500 p-6 text-center">
        <Table className="w-10 h-10 mb-2 opacity-40 text-cyan-400" />
        <p className="text-sm font-medium text-slate-400">No Query Results</p>
        <p className="text-xs text-slate-500 mt-1 max-w-sm">
          Execute a SELECT query to see rows and relational tables rendered dynamically here.
        </p>
      </div>
    );
  }

  // Usually the first result set from db.exec
  const table = results[0];
  const { columns, values } = table;
  const totalPages = Math.ceil(values.length / rowsPerPage);
  const displayedRows = values.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const handleExportCsv = () => {
    if (!values.length) return;
    const header = columns.join(',');
    const rows = values.map(row => 
      row.map(cell => {
        if (cell === null || cell === undefined) return '';
        const str = String(cell);
        return str.includes(',') ? `"${str.replace(/"/g, '""')}"` : str;
      }).join(',')
    );
    const csvContent = "data:text/csv;charset=utf-8," + [header, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `sql_query_result_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 overflow-hidden font-sans">
      {/* Table Metadata Header */}
      <div className="px-3.5 py-2 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-3 text-slate-400">
          <span className="flex items-center space-x-1 font-mono">
            <span className="text-indigo-400 font-semibold">{values.length}</span>
            <span>rows returned</span>
          </span>
          {executionTimeMs !== undefined && (
            <span className="text-slate-500">
              in <span className="font-mono text-cyan-400">{executionTimeMs}ms</span>
            </span>
          )}
        </div>

        <button
          onClick={handleExportCsv}
          className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-[11px] font-medium"
          title="Download as CSV"
        >
          <Download className="w-3 h-3 text-cyan-400" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Scrollable Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="sticky top-0 bg-slate-800/95 backdrop-blur z-10 text-slate-300 border-b border-slate-700 select-none">
            <tr>
              <th className="py-2.5 px-3 font-mono text-[10px] text-slate-500 w-12 text-center border-r border-slate-700/50">#</th>
              {columns.map((col, idx) => (
                <th key={idx} className="py-2.5 px-3.5 font-semibold font-mono tracking-wide border-r border-slate-700/50 last:border-r-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-indigo-300">{col}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-xs text-slate-300">
            {displayedRows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-800/40 transition">
                <td className="py-2 px-3 text-center text-slate-500 text-[10px] border-r border-slate-800 select-none">
                  {currentPage * rowsPerPage + rIdx + 1}
                </td>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-2 px-3.5 border-r border-slate-800/50 last:border-r-0 whitespace-nowrap">
                    {cell === null ? (
                      <span className="text-slate-500 italic">NULL</span>
                    ) : typeof cell === 'number' ? (
                      <span className="text-amber-300 font-semibold">{cell}</span>
                    ) : typeof cell === 'boolean' ? (
                      <span className="text-purple-300">{String(cell)}</span>
                    ) : (
                      <span className="text-slate-200">{String(cell)}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="px-3 py-2 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-1 rounded bg-slate-800 disabled:opacity-30 hover:bg-slate-700 text-slate-300 transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-1 rounded bg-slate-800 disabled:opacity-30 hover:bg-slate-700 text-slate-300 transition"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
