import { Flashcard } from '../types';

export const ALL_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-js-1',
    language: 'javascript',
    tier: 1,
    category: 'Foundations',
    question: 'What is the difference between let and const in modern JavaScript?',
    codeSnippet: `let a = 10;\nconst b = 20;\na = 15; // valid?\nb = 25; // valid?`,
    answerExplanation: '`let` declares a reassignable block-scoped variable. `const` declares a block-scoped variable that cannot be reassigned (though objects declared with const can still have their properties mutated).',
    codeAnswer: `a = 15; // OK\nb = 25; // TypeError: Assignment to constant variable`
  },
  {
    id: 'fc-js-2',
    language: 'javascript',
    tier: 4,
    category: 'Event Loop & Internals',
    question: 'What is the execution order between Promise microtasks and setTimeout macrotasks?',
    codeSnippet: `console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);`,
    answerExplanation: 'Synchronous code runs first (1, 4). Then the microtask queue (Promises) is completely drained before the event loop picks the next macrotask (setTimeout).',
    codeAnswer: `// Output: 1, 4, 3, 2`
  },
  {
    id: 'fc-sql-1',
    language: 'sql',
    tier: 2,
    category: 'Aggregations',
    question: 'What is the crucial difference between WHERE and HAVING in SQL?',
    codeSnippet: `SELECT department, COUNT(*) AS count\nFROM employees\nWHERE salary > 50000\nGROUP BY department\nHAVING count > 5;`,
    answerExplanation: '`WHERE` filters individual rows *before* any grouping or aggregation takes place. `HAVING` filters aggregated groups *after* GROUP BY has completed.',
    codeAnswer: `-- WHERE: row-level filter\n-- HAVING: group-level filter`
  },
  {
    id: 'fc-sql-2',
    language: 'sql',
    tier: 5,
    category: 'Window Functions',
    question: 'How does ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...) differ from GROUP BY?',
    codeSnippet: `SELECT id, category, price,\n       ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rank\nFROM products;`,
    answerExplanation: 'GROUP BY aggregates and collapses multiple rows into a single row per group. A Window Function computes calculations across a group of rows while keeping every original row intact.',
    codeAnswer: `-- Retains all rows while appending ranked metrics`
  },
  {
    id: 'fc-ts-1',
    language: 'typescript',
    tier: 3,
    category: 'Generics',
    question: 'What does the constraint `<T, K extends keyof T>` ensure at compile time?',
    codeSnippet: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}`,
    answerExplanation: '`keyof T` produces a union of all property names of type T. `K extends keyof T` guarantees that `key` is strictly one of the properties that actually exist on `obj`, preventing runtime undefined typos.',
    codeAnswer: `getProp({ name: "Dan" }, "name"); // Valid\ngetProp({ name: "Dan" }, "age");  // Compile Error!`
  },
  {
    id: 'fc-py-1',
    language: 'python',
    tier: 4,
    category: 'Language Mechanics',
    question: 'Why should you NEVER use a mutable default argument like `def add(item, lst=[])` in Python?',
    codeSnippet: `def add(item, lst=[]):\n  lst.append(item)\n  return lst\n\nprint(add(1)) # [1]\nprint(add(2)) # What is printed?`,
    answerExplanation: 'Default arguments in Python are evaluated once when the function is defined, NOT each time the function is called. The list is shared across all invocations!',
    codeAnswer: `print(add(2)) # Prints [1, 2], not [2]!\n# Fix:\ndef add(item, lst=None):\n  if lst is None: lst = []`
  }
];
