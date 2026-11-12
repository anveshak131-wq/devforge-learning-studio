import React, { useState } from 'react';
import { X, BookOpen, Copy, Check } from 'lucide-react';

interface QuickCheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickCheatSheetModal: React.FC<QuickCheatSheetModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'js' | 'sql' | 'ts' | 'py'>('js');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const JS_CHEATS = [
    {
      title: 'Destructuring & Defaults',
      code: `const user = { name: 'Alice', age: 28 };\nconst { name, country = 'Unknown' } = user;\nconst [first, ...rest] = [1, 2, 3, 4];`
    },
    {
      title: 'Array Transformations',
      code: `// Map: new array\nconst doubled = [1, 2, 3].map(n => n * 2);\n// Filter: subset\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0);\n// Reduce: accumulator\nconst sum = [10, 20, 30].reduce((acc, curr) => acc + curr, 0);`
    },
    {
      title: 'Async/Await & Promises',
      code: `async function fetchData() {\n  try {\n    const res = await fetch('/api/items');\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}`
    }
  ];

  const SQL_CHEATS = [
    {
      title: 'Basic Query & Filtering',
      code: `SELECT id, name, price\nFROM products\nWHERE category = 'Electronics' AND price > 100\nORDER BY price DESC\nLIMIT 10;`
    },
    {
      title: 'Aggregations & Grouping',
      code: `SELECT category, COUNT(*) AS count, AVG(price) AS avg_price\nFROM products\nGROUP BY category\nHAVING count >= 2\nORDER BY avg_price DESC;`
    },
    {
      title: 'Relational Multi-Table Joins',
      code: `SELECT o.id, u.name, o.total_amount\nFROM orders o\nJOIN users u ON o.user_id = u.id\nWHERE o.status = 'delivered';`
    },
    {
      title: 'Common Table Expressions (CTE)',
      code: `WITH HighSpenders AS (\n  SELECT user_id, SUM(total_amount) AS spent\n  FROM orders\n  GROUP BY user_id\n)\nSELECT u.name, hs.spent\nFROM users u\nJOIN HighSpenders hs ON u.id = hs.user_id;`
    }
  ];

  const TS_CHEATS = [
    {
      title: 'Interfaces & Optional Types',
      code: `interface User {\n  readonly id: string;\n  name: string;\n  email?: string; // Optional\n}`
    },
    {
      title: 'Discriminated Unions',
      code: `type State =\n  | { status: 'loading' }\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; message: string };`
    },
    {
      title: 'Generic Functions',
      code: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {\n  return items.map(item => item[key]);\n}`
    },
    {
      title: 'Standard Utility Types',
      code: `type UpdateDTO = Partial<User>; // all optional\ntype Preview = Pick<User, 'id' | 'name'>;\ntype SafeUser = Omit<User, 'passwordHash'>;\ntype CacheMap = Record<string, User>;`
    }
  ];

  const PY_CHEATS = [
    {
      title: 'List Comprehensions',
      code: `numbers = [1, 2, 3, 4, 5, 6]\nevens_squared = [n ** 2 for n in numbers if n % 2 == 0]`
    },
    {
      title: 'Dictionary Comprehension',
      code: `names = ["Alice", "Bob", "Charlie"]\nlengths = {name: len(name) for name in names}`
    }
  ];

  const currentCheats = tab === 'js' ? JS_CHEATS : tab === 'sql' ? SQL_CHEATS : tab === 'ts' ? TS_CHEATS : PY_CHEATS;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-base">Quick Syntax & Cheat Sheet</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Tabs */}
        <div className="px-4 py-2 border-b border-slate-800 bg-slate-900 flex space-x-2">
          {(['js', 'sql', 'ts', 'py'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-lg text-xs font-mono uppercase font-semibold transition ${
                tab === t
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t === 'js' ? 'JavaScript' : t === 'sql' ? 'SQL' : t === 'ts' ? 'TypeScript' : 'Python'}
            </button>
          ))}
        </div>

        {/* Content list */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {currentCheats.map((c, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-indigo-300">{c.title}</span>
                <button
                  onClick={() => handleCopy(c.code, idx)}
                  className="flex items-center space-x-1 text-[11px] text-slate-400 hover:text-white transition"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs overflow-x-auto">
                <code>{c.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
