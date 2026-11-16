import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  Brain, 
  Search, 
  Copy, 
  Check, 
  Play, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  ChevronRight, 
  Code2, 
  Terminal,
  Zap
} from 'lucide-react';
import { ALL_FLASHCARDS } from '../../data/flashcards';
import { ProgressStorage } from '../../services/progressStorage';
import { Flashcard, UserStats, Language } from '../../types';

interface StudyCenterViewProps {
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
  onNavigateToPlayground: (code: string, lang: Language) => void;
  initialTab?: 'cheatsheets' | 'flashcards';
}

interface CheatItem {
  id: string;
  title: string;
  language: Language;
  category: string;
  explanation: string;
  code: string;
}

const CHEAT_ITEMS: CheatItem[] = [
  {
    id: 'c-js-destruct',
    title: 'Object & Array Destructuring with Defaults',
    language: 'javascript',
    category: 'ES2024 Foundations',
    explanation: 'Unpack values from arrays or properties from objects into distinct variables with fallback defaults.',
    code: `const user = { name: 'Alice', age: 28 };
const { name, country = 'India', ...rest } = user;
const [first, second, ...remaining] = [10, 20, 30, 40];

console.log(name, country); // Alice India
console.log(first, remaining); // 10 [30, 40]`
  },
  {
    id: 'c-js-reduce',
    title: 'Functional Array Pipeline (Map, Filter, Reduce)',
    language: 'javascript',
    category: 'Functional Programming',
    explanation: 'Chain declarative transformations without imperative loops.',
    code: `const orders = [
  { id: 1, amount: 250, status: 'completed' },
  { id: 2, amount: 120, status: 'pending' },
  { id: 3, amount: 480, status: 'completed' }
];

const totalCompletedRevenue = orders
  .filter(o => o.status === 'completed')
  .map(o => o.amount)
  .reduce((sum, amt) => sum + amt, 0);

console.log("Total Revenue: ₹" + totalCompletedRevenue); // ₹730`
  },
  {
    id: 'c-js-async',
    title: 'Async/Await with Safe Error Handling',
    language: 'javascript',
    category: 'Asynchronous JavaScript',
    explanation: 'Avoid unhandled rejections using try/catch/finally blocks.',
    code: `async function fetchUserData(userId) {
  try {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    if (!res.ok) throw new Error(\`HTTP Error: \${res.status}\`);
    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    console.warn("Failed to fetch user:", err.message);
    return { success: false, error: err.message };
  }
}

fetchUserData(1).then(console.log);`
  },
  {
    id: 'c-py-comp',
    title: 'Python List & Dictionary Comprehensions',
    language: 'python',
    category: 'Pythonic Idioms',
    explanation: 'Concise expressions to build lists and mappings with embedded conditional filtering.',
    code: `# List comprehension with condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens_squared = [n ** 2 for n in numbers if n % 2 == 0]

# Dict comprehension
names = ["alice", "bob", "charlie"]
name_lengths = {name.title(): len(name) for name in names}

print("Squares:", evens_squared)
print("Lengths:", name_lengths)`
  },
  {
    id: 'c-py-args',
    title: 'Python *args and **kwargs Dynamic Unpacking',
    language: 'python',
    category: 'Function Mechanics',
    explanation: 'Accept arbitrary positional (*args) and keyword (**kwargs) arguments.',
    code: `def build_api_response(status_code, *headers, **metadata):
    return {
        "status": status_code,
        "headers": list(headers),
        "meta": metadata
    }

resp = build_api_response(200, "Content-Type: JSON", "Cache-Control: None", author="DevForge", env="prod")
print(resp)`
  },
  {
    id: 'c-sql-cte',
    title: 'SQL Common Table Expressions (WITH CTE)',
    language: 'sql',
    category: 'Advanced SQL',
    explanation: 'Break down complex queries into readable, reusable temporary result sets.',
    code: `WITH HighValueCustomers AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
  HAVING total_spent > 500
)
SELECT u.name, hvc.total_spent
FROM users u
JOIN HighValueCustomers hvc ON u.id = hvc.user_id
ORDER BY hvc.total_spent DESC;`
  },
  {
    id: 'c-sql-window',
    title: 'SQL Window Functions (ROW_NUMBER & RANK)',
    language: 'sql',
    category: 'Analytics & Windowing',
    explanation: 'Compute calculations across table partitions without collapsing individual rows.',
    code: `SELECT 
  id, 
  category, 
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS category_rank,
  AVG(price) OVER (PARTITION BY category) AS avg_category_price
FROM products;`
  },
  {
    id: 'c-ts-generics',
    title: 'TypeScript Generic Constraint (<T, K extends keyof T>)',
    language: 'typescript',
    category: 'Type Safety',
    explanation: 'Enforce that property keys belong strictly to object type T.',
    code: `function pluckProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const developer = { name: "Anvesh", role: "Staff Architect", level: 5 };
const role = pluckProperty(developer, "role"); // Type: string
// pluckProperty(developer, "salary"); // Compile-time Error!`
  },
  {
    id: 'c-ts-utilities',
    title: 'TypeScript Core Utility Types',
    language: 'typescript',
    category: 'Utility Types',
    explanation: 'Transform existing types with Partial, Pick, Omit, and Record.',
    code: `interface Student {
  id: string;
  name: string;
  email: string;
  completedLessons: string[];
}

type UpdateStudentDTO = Partial<Student>;      // All properties optional
type StudentPublicView = Pick<Student, 'id' | 'name'>; // Only id & name
type SafeStudent = Omit<Student, 'email'>;     // Exclude email
type StudentLookup = Record<string, Student>;  // Dictionary mapping`
  }
];

export const StudyCenterView: React.FC<StudyCenterViewProps> = ({
  userStats,
  onStatsUpdate,
  onNavigateToPlayground,
  initialTab = 'cheatsheets'
}) => {
  const [activeTab, setActiveTab] = useState<'cheatsheets' | 'flashcards'>(initialTab);
  
  // Cheat Sheets state
  const [cheatSearch, setCheatSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Flashcards state
  const [flashcardCategory, setFlashcardCategory] = useState<string>('all');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const reviewedIds = userStats.reviewedFlashcardIds || [];

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter cheats
  const filteredCheats = CHEAT_ITEMS.filter(item => {
    const matchesLang = selectedLanguage === 'all' || item.language === selectedLanguage;
    const matchesSearch = cheatSearch === '' || 
      item.title.toLowerCase().includes(cheatSearch.toLowerCase()) ||
      item.explanation.toLowerCase().includes(cheatSearch.toLowerCase()) ||
      item.code.toLowerCase().includes(cheatSearch.toLowerCase());
    return matchesLang && matchesSearch;
  });

  // Filter flashcards
  const filteredCards = ALL_FLASHCARDS.filter(c => {
    if (flashcardCategory === 'all') return true;
    return c.language === flashcardCategory;
  });

  const currentCard = filteredCards[cardIndex] || filteredCards[0];

  const handleFlashcardAnswer = (quality: 'again' | 'hard' | 'good' | 'easy') => {
    let xpGain = 0;
    if (quality === 'hard') xpGain = 5;
    if (quality === 'good') xpGain = 15;
    if (quality === 'easy') xpGain = 25;

    if (xpGain > 0) {
      const updated = ProgressStorage.markFlashcardReviewed(currentCard.id);
      if (xpGain > 15) {
        ProgressStorage.addXp(xpGain - 15);
      }
      onStatsUpdate(ProgressStorage.getStats());
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 }
      });
    }

    setIsFlipped(false);
    setCardIndex((cardIndex + 1) % filteredCards.length);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Top Header & Tab Switcher */}
      <div className="h-14 border-b border-slate-800 bg-slate-900/90 px-4 flex items-center justify-between select-none">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-white">Developer Study Center</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Interactive Reference & Recall
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Rapid reference cheat sheets with 1-click execution + Spaced repetition flashcards for technical interviews.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700 text-xs">
          <button
            onClick={() => setActiveTab('cheatsheets')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
              activeTab === 'cheatsheets'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive Cheat Sheets</span>
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
              activeTab === 'flashcards'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Spaced Repetition Flashcards</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {/* TAB 1: INTERACTIVE CHEAT SHEETS */}
        {activeTab === 'cheatsheets' && (
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Language Pills */}
              <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto text-xs pb-1 sm:pb-0">
                {['all', 'javascript', 'python', 'sql', 'typescript'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition shrink-0 ${
                      selectedLanguage === lang
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search cheatsheets & syntax..."
                  value={cheatSearch}
                  onChange={(e) => setCheatSearch(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-sans"
                />
              </div>
            </div>

            {/* Cheat Sheet Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCheats.map(item => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 space-y-3 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-indigo-400 uppercase font-bold text-[10px]">
                        {item.language} • {item.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleCopyCode(item.id, item.code)}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium flex items-center space-x-1 transition"
                          title="Copy code to clipboard"
                        >
                          {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === item.id ? 'Copied' : 'Copy'}</span>
                        </button>
                        <button
                          onClick={() => onNavigateToPlayground(item.code, item.language)}
                          className="px-2.5 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-[11px] font-medium flex items-center space-x-1 transition"
                          title="Run and edit live in DevForge Fiddle"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Run Live</span>
                        </button>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.explanation}</p>
                  </div>

                  {/* Syntax snippet */}
                  <div className="rounded-xl bg-slate-950 border border-slate-800/90 p-3 overflow-x-auto">
                    <pre className="text-xs font-mono text-cyan-300 leading-relaxed">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SPACED REPETITION FLASHCARDS */}
        {activeTab === 'flashcards' && currentCard && (
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Category selection */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
                {['all', 'javascript', 'python', 'sql', 'typescript', 'cloud'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFlashcardCategory(cat);
                      setCardIndex(0);
                      setIsFlipped(false);
                    }}
                    className={`px-3 py-1 rounded-lg font-mono uppercase text-[11px] font-semibold transition ${
                      flashcardCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-right text-slate-400 font-mono text-xs">
                Card <strong className="text-white">{cardIndex + 1}</strong> of {filteredCards.length}
              </div>
            </div>

            {/* Flashcard 3D Card */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 md:p-8 space-y-6">
              {/* Meta */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-indigo-400 uppercase font-bold tracking-wider">
                  {currentCard.language} • {currentCard.category}
                </span>
                {reviewedIds.includes(currentCard.id) && (
                  <span className="flex items-center space-x-1 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Mastered ✓</span>
                  </span>
                )}
              </div>

              {/* Question */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  {currentCard.question}
                </h3>

                {currentCard.codeSnippet && (
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 overflow-x-auto">
                    <pre className="text-xs font-mono text-cyan-300 leading-relaxed">
                      <code>{currentCard.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Reveal or Explanation */}
              {!isFlipped ? (
                <button
                  onClick={() => setIsFlipped(true)}
                  className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition"
                >
                  <Eye className="w-4 h-4" />
                  <span>Reveal Explanation & Verified Solution</span>
                </button>
              ) : (
                <div className="space-y-4 pt-4 border-t border-slate-800/80 animate-fadeIn">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Engineering Explanation
                    </h4>
                    <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans">
                      {currentCard.answerExplanation}
                    </p>
                  </div>

                  {currentCard.codeAnswer && (
                    <div className="rounded-xl bg-slate-950 border border-emerald-500/30 p-3 overflow-x-auto">
                      <pre className="text-xs font-mono text-emerald-300 leading-relaxed">
                        <code>{currentCard.codeAnswer}</code>
                      </pre>
                    </div>
                  )}

                  {/* Anki Review Quality Buttons */}
                  <div className="pt-2">
                    <span className="text-[11px] text-slate-400 font-medium block text-center mb-2">
                      How easily did you recall this answer?
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-xs font-bold">
                      <button
                        onClick={() => handleFlashcardAnswer('again')}
                        className="py-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-500/40 text-rose-300 transition"
                      >
                        Again (0 XP)
                      </button>
                      <button
                        onClick={() => handleFlashcardAnswer('hard')}
                        className="py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-900 border border-amber-500/40 text-amber-300 transition"
                      >
                        Hard (+5 XP)
                      </button>
                      <button
                        onClick={() => handleFlashcardAnswer('good')}
                        className="py-2.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-300 transition"
                      >
                        Good (+15 XP)
                      </button>
                      <button
                        onClick={() => handleFlashcardAnswer('easy')}
                        className="py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 transition"
                      >
                        Easy (+25 XP)
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
