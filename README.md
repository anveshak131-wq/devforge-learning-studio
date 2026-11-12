# DevForge — Interactive Multi-Language Learning & Project Studio

> A full-featured in-browser learning platform for **JavaScript**, **SQL**, **TypeScript**, and **Python**, with hands-on coding challenges, real-world guided projects, and automated unit test verification.

![DevForge Platform](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite%20%7C%20TailwindCSS%20%7C%20SQLite%20Wasm-6366f1)

---

## 🚀 Key Highlights & Capabilities

### 1. In-Browser Multi-Language Execution
- **JavaScript (ES6+)**: Live sandboxed execution, console interception (`log`, `warn`, `error`, `table`), asynchronous Promise evaluation, and test assertions.
- **SQL & Relational Databases**: Runs **genuine SQLite 3 via WebAssembly (`sql.js`)** 100% inside your browser! Includes pre-loaded realistic datasets (E-Commerce Store & Music Streaming), schema inspectors, interactive sortable data tables, and CSV export.
- **TypeScript**: Real-time client-side transpilation using Sucrase (< 2ms compilation), strict static type checking concepts, union types, and generics.
- **Python**: In-browser execution of list comprehensions, dictionary transformations, functions, and string formatting.
- **Web Fiddle (HTML/CSS/JS)**: Live responsive iframe preview with immediate DOM rendering.

### 2. Structured Curated Learning Tracks
- **JavaScript Mastery**: ES6+ arrow functions & destructuring, array transformations (`map`, `filter`, `reduce`), asynchronous promises & `async`/`await`, closures, and function factories.
- **SQL & Relational Databases**: `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`, aggregate metrics (`COUNT`, `SUM`, `AVG`, `GROUP BY`, `HAVING`), multi-table `INNER JOIN`s, and Common Table Expressions (`WITH` CTEs).
- **TypeScript Professional Architecture**: Interfaces & optional types, discriminated unions & type narrowing, generic functions with constraints (`<T, K extends keyof T>`), and utility types (`Partial`, `Pick`, `Omit`, `Record`).
- **Python Essentials**: List comprehensions, data structures, and pythonic idioms.

### 3. Step-by-Step Guided Projects ("Learn by Building")
Build real-world software across progressive milestones with automated verification:
1. **Interactive Task & Kanban Manager** (*JavaScript*): State transitions, search, filtering, and productivity metrics.
2. **Type-Safe State Store (Redux-Lite)** (*TypeScript*): Generic store factory, subscription listeners, immutability, and typed action reducers.
3. **E-Commerce Analytics & BI Engine** (*SQL*): Customer Lifetime Value (LTV), tier classification, and multi-table revenue attribution.
4. **Async Weather API Client with TTL Cache** (*TypeScript*): In-memory generic cache with expiration, async mock fetcher, and latency resilience.

### 4. Developer Experience & Gamification
- **Monaco Editor**: Industry-standard VS Code editor with syntax highlighting, shortcuts, format document, and reset to starter template.
- **Automated Test Runner**: Instant pass/fail checklist testing return values, edge cases, and query outputs.
- **Step-by-step Hints & Solutions**: Progressive hint unlock system to prevent getting stuck.
- **Gamification & Progress System**: XP progression, level ranks (*Novice* → *Polyglot Master*), daily streaks, and skill badges. All persisted locally in `localStorage`.
- **Quick Syntax Cheat Sheets**: Instant reference modal for JavaScript, SQL, TypeScript, and Python.

---

## 🛠️ Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Run

1. Navigate to the project root:
   ```bash
   cd /Users/anvesh/Downloads/Programming
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:5173
   ```

### Production Build
To create a high-performance production bundle:
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture

```
Programming/
├── public/
│   └── sql-wasm.wasm           # SQLite WebAssembly binary
├── src/
│   ├── types/
│   │   └── index.ts            # Type definitions for lessons, projects, tests, and user stats
│   ├── services/
│   │   ├── codeExecutor.ts     # Client-side executor for JS, TS (Sucrase), SQL, and Python
│   │   ├── sqlEngine.ts        # SQLite Wasm engine wrapper, schema inspector, query runner
│   │   ├── testRunner.ts       # Automated assertion runner for code and SQL results
│   │   └── progressStorage.ts  # LocalStorage persistence for XP, badges, streaks, and saved code
│   ├── data/
│   │   ├── sampleDatabases.ts  # Preloaded SQLite database schemas & seed data
│   │   ├── badges.ts           # Achievement badges and unlocking conditions
│   │   ├── courses/            # JavaScript, SQL, TypeScript, Python lessons & test suites
│   │   └── projects/           # Guided multi-milestone project definitions
│   ├── components/
│   │   ├── editor/             # Monaco code editor wrapper with shortcuts and toolbar
│   │   ├── execution/          # Output panel, console logs, test checklist, and SQL table
│   │   ├── learning/           # Interactive lesson & guided project workspaces
│   │   ├── playground/         # Free-form sandbox for JS, TS, SQL, Python, and HTML
│   │   ├── layout/             # Top navbar with XP tracker, streak counter, and level rank
│   │   └── views/              # Dashboard, Tracks Catalog, Projects Catalog, and Cheatsheets
│   ├── App.tsx                 # Main application controller and routing
│   └── main.tsx                # React root mount
└── package.json
```

---

## 💡 How to Add New Lessons & Projects

### Adding a New Lesson
Add an entry to `src/data/courses/<language>.ts`:
```typescript
{
  id: 'unique-lesson-id',
  title: 'Lesson Title',
  category: 'Category Name',
  difficulty: 'Beginner', // or Intermediate or Advanced
  estimatedMinutes: 15,
  xp: 60,
  description: 'What the student will learn...',
  concepts: ['Concept 1', 'Concept 2'],
  explanationMarkdown: `### Theory explanation...`,
  initialCode: `// Starter code`,
  solutionCode: `// Solution code`,
  hints: ['Hint 1', 'Hint 2'],
  testCases: [
    {
      id: 'tc-1',
      description: 'Test assertion description',
      testFn: `myFunction(2) === 4`
    }
  ]
}
```

### Adding a Guided Project
Add a project in `src/data/projects/<projectName>.ts` with structured milestones and register it in `src/data/projects/index.ts`.

---

## 📜 License
MIT License. Created for learners, developers, and educators.
