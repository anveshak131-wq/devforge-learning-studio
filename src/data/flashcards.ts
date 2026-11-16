import { Flashcard } from '../types';

export const ALL_FLASHCARDS: Flashcard[] = [
  // JAVASCRIPT
  {
    id: 'fc-js-1',
    language: 'javascript',
    tier: 1,
    category: 'Foundations',
    question: 'What is the difference between let, const, and var in modern JavaScript?',
    codeSnippet: `let a = 10;\nconst b = 20;\na = 15; // valid?\nb = 25; // valid?`,
    answerExplanation: '`let` and `const` are block-scoped ({}) and are not hoisted with undefined (Temporal Dead Zone). `let` can be reassigned. `const` cannot be reassigned (though objects declared with const can still have properties mutated). `var` is function-scoped and hoisted.',
    codeAnswer: `a = 15; // OK\nb = 25; // TypeError: Assignment to constant variable`
  },
  {
    id: 'fc-js-2',
    language: 'javascript',
    tier: 4,
    category: 'Event Loop & Internals',
    question: 'What is the exact execution order between Promise microtasks and setTimeout macrotasks?',
    codeSnippet: `console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);`,
    answerExplanation: 'Synchronous code runs first (1, 4). Then the microtask queue (Promises, queueMicrotask) is completely drained before the event loop picks the next macrotask (setTimeout, setInterval).',
    codeAnswer: `// Output: 1, 4, 3, 2`
  },
  {
    id: 'fc-js-3',
    language: 'javascript',
    tier: 3,
    category: 'Closures & Scope',
    question: 'What is a JavaScript closure and when does it create a memory leak?',
    codeSnippet: `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst count = createCounter();`,
    answerExplanation: 'A closure is the combination of a function bundled together with references to its lexical environment. A closure causes a memory leak if an event listener or long-lived object holds references to large enclosing variables that never get garbage collected.',
    codeAnswer: `// count() retains access to 'let count = 0' even after createCounter() has returned`
  },
  {
    id: 'fc-js-4',
    language: 'javascript',
    tier: 3,
    category: 'Async Mechanics',
    question: 'What happens if you use await inside an Array.prototype.forEach loop?',
    codeSnippet: `async function processItems(items) {\n  items.forEach(async (item) => {\n    await saveToDb(item);\n  });\n  console.log('Done'); // Does this wait?\n}`,
    answerExplanation: '`forEach` does NOT await promises returned by its callback! It immediately fires all iterations concurrently and executes the next line without waiting. Use a standard `for...of` loop or `await Promise.all(items.map(...))` instead.',
    codeAnswer: `// Fix:\nfor (const item of items) {\n  await saveToDb(item);\n}`
  },
  {
    id: 'fc-js-5',
    language: 'javascript',
    tier: 4,
    category: 'Memory Management',
    question: 'How does WeakMap differ from standard Map, and why is it used for caching?',
    codeSnippet: `const cache = new WeakMap();\nlet user = { id: 101 };\ncache.set(user, { sessionToken: "abc" });\nuser = null; // What happens in cache?`,
    answerExplanation: '`WeakMap` keys MUST be objects. Keys are weakly referenced, meaning if no other reference to the object exists in memory, the entry is automatically garbage-collected, preventing cache memory leaks.',
    codeAnswer: `// When user = null, the cached entry is automatically garbage collected!`
  },

  // PYTHON
  {
    id: 'fc-py-1',
    language: 'python',
    tier: 4,
    category: 'Language Mechanics',
    question: 'Why should you NEVER use a mutable default argument like `def add(item, lst=[])` in Python?',
    codeSnippet: `def add(item, lst=[]):\n  lst.append(item)\n  return lst\n\nprint(add(1)) # [1]\nprint(add(2)) # What is printed?`,
    answerExplanation: 'Default arguments in Python are evaluated once when the function is defined, NOT each time the function is called. The list is shared across all invocations!',
    codeAnswer: `print(add(2)) # Prints [1, 2], not [2]!\n# Fix:\ndef add(item, lst=None):\n  if lst is None: lst = []`
  },
  {
    id: 'fc-py-2',
    language: 'python',
    tier: 3,
    category: 'Iterators & Generators',
    question: 'What is the performance and memory difference between a List Comprehension and a Generator Expression?',
    codeSnippet: `squares_list = [x**2 for x in range(10000000)] # List\nsquares_gen  = (x**2 for x in range(10000000)) # Generator`,
    answerExplanation: 'A list comprehension computes and stores all 10M elements in RAM immediately (~800MB). A generator expression produces elements lazily on demand one at a time using yield, consuming less than 100 bytes of RAM regardless of size.',
    codeAnswer: `sys.getsizeof(squares_list) # ~80 MB\nsys.getsizeof(squares_gen)  # ~112 Bytes`
  },
  {
    id: 'fc-py-3',
    language: 'python',
    tier: 5,
    category: 'Concurrency',
    question: 'What is Python Global Interpreter Lock (GIL) and how does it affect CPU-bound multithreading?',
    codeSnippet: `import threading\n# Will 4 threads make a CPU matrix multiplication 4x faster in CPython?`,
    answerExplanation: 'The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes at once. For CPU-bound tasks, Python threads do not run in true parallel on multi-core CPUs. Use the `multiprocessing` module or Rust/C extensions instead.',
    codeAnswer: `// CPU-bound: multiprocessing.Process\n// I/O-bound (network, disk): threading or asyncio`
  },
  {
    id: 'fc-py-4',
    language: 'python',
    tier: 3,
    category: 'Decorators',
    question: 'What does `@functools.wraps(fn)` do inside a custom Python decorator?',
    codeSnippet: `def my_decorator(fn):\n  @functools.wraps(fn)\n  def wrapper(*args, **kwargs):\n    return fn(*args, **kwargs)\n  return wrapper`,
    answerExplanation: 'Without `@wraps`, the decorated function loses its original metadata (its `__name__`, `__doc__`, and parameter signature are overwritten by the wrapper function), breaking docstrings, debugging tools, and reflection.',
    codeAnswer: `// Preserves original function __name__ and docstrings`
  },

  // SQL
  {
    id: 'fc-sql-1',
    language: 'sql',
    tier: 2,
    category: 'Aggregations',
    question: 'What is the crucial difference between WHERE and HAVING in SQL?',
    codeSnippet: `SELECT department, COUNT(*) AS count\nFROM employees\nWHERE salary > 50000\nGROUP BY department\nHAVING count > 5;`,
    answerExplanation: '`WHERE` filters individual rows *before* any grouping or aggregation takes place. `HAVING` filters aggregated groups *after* GROUP BY has completed.',
    codeAnswer: `-- WHERE: row-level filter before grouping\n-- HAVING: group-level filter on aggregate metrics`
  },
  {
    id: 'fc-sql-2',
    language: 'sql',
    tier: 5,
    category: 'Window Functions',
    question: 'How does ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...) differ from GROUP BY?',
    codeSnippet: `SELECT id, category, price,\n       ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rank\nFROM products;`,
    answerExplanation: 'GROUP BY aggregates and collapses multiple rows into a single row per group. A Window Function computes calculations across a partition of rows while keeping every original row intact.',
    codeAnswer: `-- Retains all original rows while appending ranked metrics`
  },
  {
    id: 'fc-sql-3',
    language: 'sql',
    tier: 4,
    category: 'Indexes & Query Plans',
    question: 'Why does WHERE UPPER(email) = "ALICE@EXAMPLE.COM" bypass a standard B-Tree index on email?',
    codeSnippet: `CREATE INDEX idx_email ON users(email);\nSELECT * FROM users WHERE UPPER(email) = 'ALICE@EXAMPLE.COM';`,
    answerExplanation: 'Wrapping an indexed column in a function prevents the database query optimizer from using the B-Tree index directly, triggering a full table scan. To fix, create a functional index: `CREATE INDEX idx_email_upper ON users(UPPER(email))`.',
    codeAnswer: `-- Fix: Expression / Functional Index\nCREATE INDEX idx_users_upper_email ON users(UPPER(email));`
  },
  {
    id: 'fc-sql-4',
    language: 'sql',
    tier: 4,
    category: 'Transactions & ACID',
    question: 'What is a "Dirty Read" and which SQL transaction isolation level prevents it?',
    codeSnippet: `BEGIN TRANSACTION; -- Transaction A\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n-- Transaction B reads balance before A commits or rolls back!`,
    answerExplanation: 'A Dirty Read occurs when Transaction B reads uncommitted data written by concurrent Transaction A. If Transaction A later rolls back, Transaction B operated on invalid data. Prevented by `READ COMMITTED` or higher.',
    codeAnswer: `-- SET TRANSACTION ISOLATION LEVEL READ COMMITTED;`
  },

  // TYPESCRIPT
  {
    id: 'fc-ts-1',
    language: 'typescript',
    tier: 3,
    category: 'Generics',
    question: 'What does the generic constraint `<T, K extends keyof T>` ensure at compile time?',
    codeSnippet: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}`,
    answerExplanation: '`keyof T` produces a union of all property names of type T. `K extends keyof T` guarantees that `key` is strictly one of the properties that actually exists on `obj`, preventing runtime undefined typos.',
    codeAnswer: `getProp({ name: "Dan" }, "name"); // Valid\ngetProp({ name: "Dan" }, "age");  // Compile Error: "age" is not in { name: string }`
  },
  {
    id: 'fc-ts-2',
    language: 'typescript',
    tier: 4,
    category: 'Type Narrowing',
    question: 'What is a Discriminated Union and why is it superior to optional flags?',
    codeSnippet: `type NetworkState =\n  | { status: 'loading' }\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; error: Error };`,
    answerExplanation: 'A Discriminated Union is a union of object types that share a single common literal property (the discriminant, e.g. `status`). Inside a switch or if-statement, TypeScript automatically narrows the type, making impossible states unrepresentable.',
    codeAnswer: `if (state.status === 'success') {\n  console.log(state.data); // TS knows 'data' exists here!\n}`
  },
  {
    id: 'fc-ts-3',
    language: 'typescript',
    tier: 4,
    category: 'Type Safety',
    question: 'Why should you use unknown instead of any when dealing with untrusted API payloads?',
    codeSnippet: `const rawData: unknown = JSON.parse(responseString);\n// Can you do rawData.user.id directly?`,
    answerExplanation: '`any` completely disables the TypeScript type checker, allowing any property access without compile errors. `unknown` is type-safe: TypeScript forces you to validate or narrow the type before allowing operations on it.',
    codeAnswer: `if (typeof rawData === 'object' && rawData !== null && 'id' in rawData) {\n  console.log(rawData.id);\n}`
  },

  // SYSTEM ARCHITECTURE
  {
    id: 'fc-arch-1',
    language: 'cloud',
    tier: 4,
    category: 'Caching Strategies',
    question: 'What is a Cache Stampede (Thundering Herd) and how do you prevent it?',
    codeSnippet: `// 10,000 concurrent requests hit Redis at exact same millisecond that 'popular_post' TTL expires!`,
    answerExplanation: 'When a popular cache key expires, thousands of simultaneous incoming requests all see a cache miss at the same instant and bombard the database simultaneously, crashing it. Fix with distributed locks (Redis Redlock), probabilistic early expiration (XFetch), or stale-while-revalidate.',
    codeAnswer: `// Fix: Stale-While-Revalidate or Mutex Lock before querying DB`
  },
  {
    id: 'fc-arch-2',
    language: 'cloud',
    tier: 4,
    category: 'Distributed Systems',
    question: 'What does the CAP Theorem state about distributed databases during network partitions?',
    codeSnippet: `// Network cable cut between US-East and EU-West data centers. What can you guarantee?`,
    answerExplanation: 'The CAP Theorem proves a distributed system can guarantee at most TWO of: Consistency (all nodes see latest write), Availability (every request receives a response), and Partition Tolerance (system continues functioning despite dropped network messages). In real networks, partitions (P) are inevitable, so you must choose between CP or AP.',
    codeAnswer: `// CP: PostgreSQL / Paxos (Rejects request to ensure correctness)\n// AP: DynamoDB / Cassandra (Accepts request, eventual consistency)`
  }
];
