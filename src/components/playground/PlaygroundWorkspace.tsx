import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Database, 
  Terminal, 
  Code, 
  Sparkles, 
  RotateCcw, 
  FileCode2, 
  Eye, 
  Download,
  Share2
} from 'lucide-react';
import { Language, ExecutionResult } from '../../types';
import { CodeEditor } from '../editor/CodeEditor';
import { OutputPanel } from '../execution/OutputPanel';
import { CodeExecutor } from '../../services/codeExecutor';
import { SqlSession, TableSchema } from '../../services/sqlEngine';
import { SAMPLE_DATABASES, SampleDbPreset } from '../../data/sampleDatabases';

const PLAYGROUND_TEMPLATES: Record<Language, string> = {
  javascript: `// Modern JavaScript Playground
// Run any ES6+ code, algorithms, or async functions:

const users = [
  { id: 1, name: "Alice", role: "admin", scores: [88, 92, 95] },
  { id: 2, name: "Bob", role: "engineer", scores: [74, 85, 80] },
  { id: 3, name: "Charlie", role: "designer", scores: [90, 89, 94] }
];

// Calculate average scores using reduce
const userSummaries = users.map(u => ({
  name: u.name,
  role: u.role,
  averageScore: Math.round(u.scores.reduce((a, b) => a + b, 0) / u.scores.length)
}));

console.log("Transformed User Summaries:");
console.table(userSummaries);
`,

  typescript: `// TypeScript Professional Playground
// Catch type errors and inspect transpiled JavaScript output!

interface InventoryItem<T> {
  id: string;
  name: string;
  metadata: T;
  stock: number;
}

type GadgetMetadata = {
  brand: string;
  warrantyMonths: number;
};

const laptop: InventoryItem<GadgetMetadata> = {
  id: "item-001",
  name: "ThinkPad X1 Carbon",
  metadata: {
    brand: "Lenovo",
    warrantyMonths: 36
  },
  stock: 12
};

function formatItem<T>(item: InventoryItem<T>): string {
  return \`[\${item.id}] \${item.name} - \${item.stock} in stock\`;
}

console.log(formatItem(laptop));
console.log("Metadata:", laptop.metadata);
`,

  sql: `-- Interactive SQLite Database Studio
-- Choose a sample database (E-Commerce, Music) or run custom queries:

SELECT 
  u.name AS customer_name,
  u.country,
  COUNT(o.id) AS total_orders,
  SUM(o.total_amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id
ORDER BY total_spent DESC
LIMIT 5;
`,

  python: `# Python Playground
# Practice pythonic idioms and list comprehensions

students = [
  {"name": "Aria", "score": 92},
  {"name": "Liam", "score": 67},
  {"name": "Zoe", "score": 85},
  {"name": "Noah", "score": 78}
]

# List comprehension: filter students with score >= 80
top_students = [s["name"] for s in students if s["score"] >= 80]

print("Top Performing Students:")
print(top_students)
`,

  html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .card { background: #1e293b; padding: 24px; border-radius: 12px; display: inline-block; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border: 1px solid #334155; }
    button { background: #6366f1; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
    button:hover { background: #4f46e5; }
    .count { font-size: 2.5rem; font-weight: 800; color: #38bdf8; margin: 16px 0; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Interactive Counter Widget</h2>
    <div class="count" id="countDisplay">0</div>
    <button onclick="increment()">Click Me +1</button>
  </div>
  <script>
    let count = 0;
    function increment() {
      count++;
      document.getElementById('countDisplay').innerText = count;
    }
  </script>
</body>
</html>`,

  css: `/* Modern Responsive CSS Grid & Flexbox Studio */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 30px -5px rgba(99, 102, 241, 0.25);
}`,

  react: `// React 18+ Functional Component & State Studio
import React, { useState, useEffect } from 'react';

function UserActivityFeed() {
  const [activities, setActivities] = useState([
    { id: 1, action: "Solved 3 SQL Challenges", timestamp: "5m ago" },
    { id: 2, action: "Earned JavaScript Pro Certificate", timestamp: "1h ago" }
  ]);

  return (
    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
      <h2 className="text-lg font-bold text-white mb-4">Live Activity Feed</h2>
      <ul className="space-y-3">
        {activities.map(a => (
          <li key={a.id} className="text-sm text-slate-300 flex justify-between">
            <span>{a.action}</span>
            <span className="text-xs text-indigo-400">{a.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

console.log("React Component Rendered Cleanly!");`,

  nodejs: `// Node.js Backend & API Handler Studio
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  }));
});

console.log("Node.js Microservice Architecture Initialized!");`,

  git: `# Git Version Control Terminal
git init
git add .
git commit -m "feat: initial commit of enterprise learning engine"
git status
git branch -M main`,

  dsa: `// Data Structures & Algorithms (DSA) Studio
// Binary Search Implementation: O(log N) Time Complexity

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedList = [10, 24, 35, 48, 59, 72, 85, 99];
const index = binarySearch(sortedList, 59);
console.log("Target 59 found at sorted index:", index);`,

  docker: `# Dockerfile & Container Orchestration
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`,

  bash: `#!/usr/bin/env bash
# Linux Shell Automation Script
echo "=== System Health Diagnostic ==="
DATE=$(date +"%Y-%m-%d %H:%M:%S")
echo "Audit Timestamp: $DATE"
echo "Active Working Directory: $(pwd)"
echo "Listing repository files:"
ls -la`,

  golang: `package main

import "fmt"

func main() {
    message := "Welcome to Go (Golang) Engineering!"
    fmt.Println(message)
    
    scores := []int{95, 88, 100, 92}
    total := 0
    for _, s := range scores {
        total += s
    }
    fmt.Println("Average Score:", total / len(scores))
}`,

  rust: `fn main() {
    let language = "Rust";
    println!("Systems Programming with {}", language);
    
    let numbers = vec![1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().sum();
    println!("Vector Sum: {}", sum);
}`,

  r: `# R Statistical Computing & Data Science Studio
scores <- c(92, 85, 96, 78, 88, 94)
cat("Average Score:", mean(scores), "\n")
cat("Total Score:", sum(scores), "\n")
cat("Observations:", length(scores), "\n")`,

  java: `// Java Enterprise Architecture
public class Main {
    public static void main(String[] args) {
        String greeting = "Welcome to Java Enterprise Systems!";
        System.out.println(greeting);
        int[] scores = {92, 85, 96, 88};
        System.out.println("Loaded items: " + scores.length);
    }
}`,

  cpp: `// Modern C++20 Systems Engineering
#include <iostream>
#include <vector>

int main() {
    std::cout << "Modern C++ Systems Studio" << std::endl;
    std::vector<int> numbers = {10, 20, 30, 40, 50};
    std::cout << "Vector size: " << numbers.size() << std::endl;
    return 0;
}`,

  cloud: `# Cloud & Kubernetes Orchestration Studio
kubectl get nodes
kubectl get pods -A
kubectl get services
kubectl apply -f deployment.yaml`
};

export const PlaygroundWorkspace: React.FC = () => {
  // Check if code was passed in URL hash / query
  const getInitialState = (): { lang: Language; code: string } => {
    try {
      const search = window.location.hash || window.location.search;
      if (search.includes('code=')) {
        const clean = search.replace(/^[#?]/, '');
        const params = new URLSearchParams(clean);
        const langParam = params.get('lang') as Language;
        const codeParam = params.get('code');
        if (codeParam) {
          const decoded = decodeURIComponent(escape(atob(decodeURIComponent(codeParam))));
          return {
            lang: langParam || 'javascript',
            code: decoded
          };
        }
      }
    } catch (e) {
      console.warn('Could not decode shared fiddle:', e);
    }
    return {
      lang: 'javascript',
      code: PLAYGROUND_TEMPLATES.javascript
    };
  };

  const initial = getInitialState();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(initial.lang);
  const [code, setCode] = useState<string>(initial.code);
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [viewMode, setViewMode] = useState<'split' | 'code' | 'preview'>('split');
  
  // SQL specific state
  const [selectedDbPreset, setSelectedDbPreset] = useState<string>('ecommerce');
  const [schemas, setSchemas] = useState<TableSchema[]>([]);
  const sqlSessionRef = useRef<SqlSession | null>(null);

  const getReadySqlSession = async (): Promise<SqlSession | undefined> => {
    if (selectedLanguage !== 'sql') return undefined;
    const preset = SAMPLE_DATABASES[selectedDbPreset] || SAMPLE_DATABASES.ecommerce;
    if (!sqlSessionRef.current) {
      sqlSessionRef.current = new SqlSession();
    }
    await sqlSessionRef.current.ensureReady(preset.sql);
    setSchemas(sqlSessionRef.current.getSchema());
    return sqlSessionRef.current;
  };

  // Initialize or re-initialize SQL when language is SQL
  useEffect(() => {
    let active = true;
    if (selectedLanguage === 'sql') {
      getReadySqlSession().then((session) => {
        if (active && session) {
          setSchemas(session.getSchema());
        }
      });
    }

    return () => {
      active = false;
    };
  }, [selectedLanguage, selectedDbPreset]);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    setCode(PLAYGROUND_TEMPLATES[lang]);
    setExecutionResult(null);
  };

  const handleRun = async () => {
    setIsRunning(true);
    try {
      const session = await getReadySqlSession();
      const res = await CodeExecutor.executeCode(
        code,
        selectedLanguage,
        session
      );
      setExecutionResult(res);
      if (session) {
        setSchemas(session.getSchema());
      }
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(PLAYGROUND_TEMPLATES[selectedLanguage]);
    setExecutionResult(null);
  };

  const handleSelectSampleQuery = (q: string) => {
    setCode(q);
  };

  const handleShare = () => {
    try {
      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(code))));
      const shareUrl = `${window.location.origin}/playground#lang=${selectedLanguage}&code=${encoded}`;
      navigator.clipboard.writeText(shareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    } catch {
      alert('Could not copy share link');
    }
  };

  const handleDownload = () => {
    const extensions: Partial<Record<Language, string>> = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      sql: 'sql',
      html: 'html'
    };
    const ext = extensions[selectedLanguage] || 'txt';
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devforge_fiddle_${selectedLanguage}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Playground Top Bar */}
      <div className="h-12 border-b border-slate-800 bg-slate-900/90 px-4 flex items-center justify-between select-none">
        {/* Language switcher */}
        <div className="flex items-center space-x-1.5">
          {(['javascript', 'typescript', 'sql', 'python', 'html'] as Language[]).map(lang => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider font-mono transition ${
                selectedLanguage === lang
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {lang === 'html' ? 'HTML / Web' : lang}
            </button>
          ))}
        </div>

        {/* Database selector if SQL */}
        {selectedLanguage === 'sql' && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400 hidden sm:inline">Database:</span>
            <select
              value={selectedDbPreset}
              onChange={(e) => setSelectedDbPreset(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1 focus:outline-none focus:border-indigo-500 font-mono"
            >
              <option value="ecommerce">E-Commerce Store (4 tables)</option>
              <option value="music">Music Streaming (3 tables)</option>
            </select>
          </div>
        )}

        {/* Right actions: Share, Download, View Mode */}
        <div className="flex items-center space-x-2">
          {/* View mode switcher */}
          <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-[11px]">
            <button
              onClick={() => setViewMode('split')}
              className={`px-2 py-0.5 rounded ${viewMode === 'split' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Split
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-2 py-0.5 rounded ${viewMode === 'code' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Code Only
            </button>
            {selectedLanguage === 'html' && (
              <button
                onClick={() => setViewMode('preview')}
                className={`px-2 py-0.5 rounded ${viewMode === 'preview' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                Preview
              </button>
            )}
          </div>

          <button
            onClick={handleDownload}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="Download code file"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={handleShare}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition ${
              copiedShare
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
            }`}
            title="Generate shareable link for this snippet"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* SQL Sample Query Quick Bar if SQL */}
      {selectedLanguage === 'sql' && SAMPLE_DATABASES[selectedDbPreset] && (
        <div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center space-x-2 overflow-x-auto text-xs">
          <span className="text-slate-400 shrink-0 font-medium">Quick Queries:</span>
          {SAMPLE_DATABASES[selectedDbPreset].sampleQueries.map((sq, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectSampleQuery(sq.query)}
              className="px-2.5 py-0.5 rounded bg-slate-800 hover:bg-indigo-950 hover:text-indigo-300 text-slate-300 border border-slate-700 whitespace-nowrap transition"
            >
              {sq.title}
            </button>
          ))}
        </div>
      )}

      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden p-3 gap-3">
        {/* Editor */}
        {(viewMode === 'split' || viewMode === 'code') && (
          <div className={`${viewMode === 'code' ? 'lg:col-span-12' : 'lg:col-span-7'} h-full flex flex-col`}>
            <CodeEditor
              code={code}
              onChange={setCode}
              language={selectedLanguage}
              onRun={handleRun}
              onReset={handleReset}
              isRunning={isRunning}
            />
          </div>
        )}

        {/* Output Panel / HTML Preview */}
        {(viewMode === 'split' || viewMode === 'preview') && (
          <div className={`${viewMode === 'preview' ? 'lg:col-span-12' : 'lg:col-span-5'} h-full flex flex-col`}>
            {selectedLanguage === 'html' ? (
              <div className="flex flex-col h-full bg-[#181818] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="h-10 bg-[#141414] border-b border-slate-800 px-3.5 flex items-center justify-between select-none">
                  <span className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Live Render Preview</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Sandboxed IFrame</span>
                </div>
                <iframe
                  title="Preview"
                  srcDoc={code}
                  className="w-full flex-1 bg-white"
                  sandbox="allow-scripts allow-modals"
                />
              </div>
            ) : (
              <OutputPanel
                language={selectedLanguage}
                executionResult={executionResult}
                testResults={null}
                onClearConsole={() => setExecutionResult(null)}
                schemas={schemas}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
