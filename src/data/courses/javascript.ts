import { Track } from '../../types';

export const JAVASCRIPT_TRACK: Track = {
  id: 'javascript',
  title: 'JavaScript Modern Mastery',
  slug: 'javascript',
  language: 'javascript',
  icon: 'Zap',
  color: 'from-amber-400 to-yellow-500',
  tagline: 'From ES6+ fundamentals to asynchronous programming, functional patterns, and DOM.',
  description: 'Master the language of the modern web. Learn modern syntax, functional array transformations, closures, promises, async/await, and event handling with hands-on live code exercises.',
  lessons: [
    {
      id: 'js-1-es6-arrow-destructuring',
      title: 'Modern ES6+: Destructuring & Arrow Functions',
      slug: 'arrow-destructuring',
      language: 'javascript',
      category: 'Core Fundamentals',
      difficulty: 'Beginner',
      estimatedMinutes: 10,
      xp: 50,
      description: 'Learn concise arrow functions, object and array destructuring, and default parameter values.',
      concepts: ['Arrow functions vs regular functions', 'Object destructuring with renaming', 'Array destructuring with rest operator'],
      explanationMarkdown: `
### Why Modern JavaScript?
ES6 revolutionized JavaScript by introducing concise syntax and cleaner data extraction.

#### 1. Arrow Functions
Arrow functions provide a shorter syntax and lexically bind the \`this\` keyword:
\`\`\`javascript
const add = (a, b = 0) => a + b;
\`\`\`

#### 2. Object & Array Destructuring
Instead of \`const name = user.name;\`, unpack properties directly:
\`\`\`javascript
const user = { id: 1, username: 'neo', role: 'admin' };
const { username, role: userRole } = user;
console.log(username, userRole); // 'neo' 'admin'
\`\`\`

#### Challenge:
Create a function named \`formatUserProfile(user)\` that takes an object with \`name\`, \`age\`, and optional \`country\` (default to \`'Unknown'\`), and returns a formatted string:
\`"{name} is {age} years old from {country}"\`.
      `,
      initialCode: `// Write your function here
function formatUserProfile(user) {
  // Use destructuring with default value for country
  
}

// Test with sample data:
const sampleUser = { name: "Sarah", age: 28, country: "Canada" };
console.log(formatUserProfile(sampleUser));
`,
      solutionCode: `function formatUserProfile(user) {
  const { name, age, country = 'Unknown' } = user;
  return \`\${name} is \${age} years old from \${country}\`;
}

const sampleUser = { name: "Sarah", age: 28, country: "Canada" };
console.log(formatUserProfile(sampleUser));
`,
      hints: [
        'Destructure { name, age, country = "Unknown" } from the user parameter.',
        'Use template literals with backticks: `${name} is ${age} years old from ${country}`'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Correctly formats user with country specified',
          testFn: `typeof formatUserProfile === 'function' && formatUserProfile({ name: 'Alex', age: 24, country: 'Japan' }) === 'Alex is 24 years old from Japan'`,
          expectedMessage: 'Expected "Alex is 24 years old from Japan"'
        },
        {
          id: 'tc-2',
          description: 'Defaults country to "Unknown" when not provided',
          testFn: `formatUserProfile({ name: 'Elena', age: 31 }) === 'Elena is 31 years old from Unknown'`,
          expectedMessage: 'Expected "Elena is 31 years old from Unknown"'
        }
      ]
    },
    {
      id: 'js-2-array-transformations',
      title: 'Array Superpowers: Map, Filter, and Reduce',
      slug: 'array-transformations',
      language: 'javascript',
      category: 'Data Structures & Algorithms',
      difficulty: 'Beginner',
      estimatedMinutes: 15,
      xp: 60,
      description: 'Transform collections without mutating original arrays using declarative methods.',
      concepts: ['Pure functions', 'Array.map', 'Array.filter', 'Array.reduce accumulators'],
      explanationMarkdown: `
### Functional Array Operations
Declarative array methods allow you to express *what* data transformations you want rather than managing index counters.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
const doubled = evens.map(n => n * 2);
const sum = doubled.reduce((acc, curr) => acc + curr, 0);
\`\`\`

#### Challenge:
Write a function \`summarizeInventory(products)\` that receives an array of products \`{ name, category, price, inStock }\`.
The function should:
1. Filter only items that are **inStock: true**.
2. Calculate total inventory value (\`sum of price\`).
3. Return an object: \`{ inStockCount: number, totalValue: number }\`.
      `,
      initialCode: `function summarizeInventory(products) {
  // 1. Filter in-stock products
  // 2. Calculate count and total price using reduce
  
}

// Sample test data
const inventory = [
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 80, inStock: false },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Cable", price: 15, inStock: true }
];

console.log(summarizeInventory(inventory));
`,
      solutionCode: `function summarizeInventory(products) {
  const inStockItems = products.filter(item => item.inStock);
  const totalValue = inStockItems.reduce((acc, item) => acc + item.price, 0);
  return {
    inStockCount: inStockItems.length,
    totalValue: totalValue
  };
}

const inventory = [
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 80, inStock: false },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Cable", price: 15, inStock: true }
];

console.log(summarizeInventory(inventory));
`,
      hints: [
        'Use products.filter(p => p.inStock) to keep only available items.',
        'Use .reduce((sum, item) => sum + item.price, 0) on the filtered array to compute total value.',
        'Return { inStockCount: inStockItems.length, totalValue }.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Calculates inStockCount and totalValue correctly for mixed items',
          testFn: `(() => {
            const data = [
              { name: 'A', price: 10, inStock: true },
              { name: 'B', price: 20, inStock: false },
              { name: 'C', price: 30, inStock: true }
            ];
            const res = summarizeInventory(data);
            return res.inStockCount === 2 && res.totalValue === 40;
          })()`,
          expectedMessage: 'Expected { inStockCount: 2, totalValue: 40 }'
        },
        {
          id: 'tc-2',
          description: 'Handles empty product array gracefully',
          testFn: `(() => {
            const res = summarizeInventory([]);
            return res.inStockCount === 0 && res.totalValue === 0;
          })()`,
          expectedMessage: 'Expected { inStockCount: 0, totalValue: 0 }'
        }
      ]
    },
    {
      id: 'js-3-async-promises',
      title: 'Asynchronous JavaScript: Promises & Async/Await',
      slug: 'async-await-promises',
      language: 'javascript',
      category: 'Asynchronous Programming',
      difficulty: 'Intermediate',
      estimatedMinutes: 20,
      xp: 75,
      description: 'Master the event loop, handle asynchronous tasks with Promises, and write sequential async code with try/catch.',
      concepts: ['Event loop', 'Promise states', 'async/await syntax', 'Parallel execution with Promise.all'],
      explanationMarkdown: `
### Mastering Asynchronous Flow
JavaScript is single-threaded with an event loop. Non-blocking operations use Promises.

\`\`\`javascript
async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load user:", error);
    throw error;
  }
}
\`\`\`

#### Parallel Execution with \`Promise.all\`:
When operations are independent, run them concurrently:
\`\`\`javascript
const [user, posts] = await Promise.all([
  fetchUser(1),
  fetchPosts(1)
]);
\`\`\`

#### Challenge:
Write an asynchronous function \`batchProcess(items, asyncFn)\` that maps over an array of items, runs \`asyncFn(item)\` concurrently on all of them using \`Promise.all\`, and returns an array of the results.
      `,
      initialCode: `async function batchProcess(items, asyncFn) {
  // Use Promise.all to run asyncFn on every item in items concurrently
  
}

// Sample helper
const mockFetcher = (num) => new Promise(res => setTimeout(() => res(num * 10), 50));

// Test run:
batchProcess([1, 2, 3], mockFetcher).then(results => {
  console.log("Processed results:", results);
});
`,
      solutionCode: `async function batchProcess(items, asyncFn) {
  const promises = items.map(item => asyncFn(item));
  return await Promise.all(promises);
}

const mockFetcher = (num) => new Promise(res => setTimeout(() => res(num * 10), 50));
batchProcess([1, 2, 3], mockFetcher).then(results => {
  console.log("Processed results:", results);
});
`,
      hints: [
        'items.map(item => asyncFn(item)) returns an array of promises.',
        'Await Promise.all(promises) and return the resulting array.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Executes async function concurrently on all items and preserves order',
          testFn: `(async () => {
            const doubleAsync = async (x) => x * 2;
            const res = await batchProcess([5, 10, 15], doubleAsync);
            return Array.isArray(res) && res[0] === 10 && res[1] === 20 && res[2] === 30;
          })()`,
          expectedMessage: 'Expected array [10, 20, 30]'
        }
      ]
    },
    {
      id: 'js-4-closures-currying',
      title: 'Deep Closures & Function Factories',
      slug: 'closures-currying',
      language: 'javascript',
      category: 'Functional Patterns',
      difficulty: 'Intermediate',
      estimatedMinutes: 20,
      xp: 80,
      description: 'Harness the power of lexical scope, closures, and private state encapsulation.',
      concepts: ['Lexical scoping', 'Closures', 'Data privacy', 'Higher-order functions'],
      explanationMarkdown: `
### What is a Closure?
A closure is the combination of a function bundled together with references to its surrounding lexical environment.
This allows inner functions to remember variables from outer scopes even after the outer function has executed!

\`\`\`javascript
function createCounter(initial = 0) {
  let count = initial; // Private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count
  };
}
\`\`\`

#### Challenge:
Implement a function \`createRateLimiter(limit)\` that creates a rate-limited caller.
The returned function accepts no arguments.
- The first \`limit\` times it is called, it returns \`"OK"\`.
- On subsequent calls beyond the limit, it returns \`"RATE_LIMITED"\`.
- It should also have a method \`.reset()\` attached to it that resets the count back to 0.
      `,
      initialCode: `function createRateLimiter(limit) {
  let calls = 0;

  function limiter() {
    // Check call count and increment
    
  }

  limiter.reset = function() {
    // Reset call counter
    
  };

  return limiter;
}

const check = createRateLimiter(2);
console.log(check()); // "OK"
console.log(check()); // "OK"
console.log(check()); // "RATE_LIMITED"
`,
      solutionCode: `function createRateLimiter(limit) {
  let calls = 0;

  function limiter() {
    if (calls < limit) {
      calls++;
      return "OK";
    }
    return "RATE_LIMITED";
  }

  limiter.reset = function() {
    calls = 0;
  };

  return limiter;
}
`,
      hints: [
        'Keep a local variable `let calls = 0;` inside createRateLimiter.',
        'In `limiter()`, if `calls < limit`, increment `calls` and return "OK", else return "RATE_LIMITED".',
        'In `limiter.reset()`, set `calls = 0;`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Allows calls up to limit then returns RATE_LIMITED',
          testFn: `(() => {
            const rl = createRateLimiter(3);
            const r1 = rl();
            const r2 = rl();
            const r3 = rl();
            const r4 = rl();
            return r1 === 'OK' && r2 === 'OK' && r3 === 'OK' && r4 === 'RATE_LIMITED';
          })()`,
          expectedMessage: 'Expected 3 OKs followed by RATE_LIMITED'
        },
        {
          id: 'tc-2',
          description: 'Reset method restores quota',
          testFn: `(() => {
            const rl = createRateLimiter(1);
            rl(); // 1
            const locked = rl(); // RATE_LIMITED
            rl.reset();
            const unlocked = rl(); // OK
            return locked === 'RATE_LIMITED' && unlocked === 'OK';
          })()`,
          expectedMessage: 'Expected reset() to restore availability'
        }
      ]
    }
  ]
};
