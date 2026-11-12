import { Track } from '../../types';

export const JAVASCRIPT_TRACK: Track = {
  id: 'javascript',
  title: 'JavaScript: Zero to Masterclass',
  slug: 'javascript',
  language: 'javascript',
  icon: 'Zap',
  color: 'from-amber-400 to-yellow-500',
  tagline: 'Complete 5-tier roadmap: from absolute beginner basics to closures, event loop microtasks, and Proxy metaprogramming.',
  description: 'Master JavaScript from your very first line of code to senior-level architectural mechanics. Includes primitive types, functional array pipelines, asynchronous event queues, and runtime metaprogramming.',
  lessons: [
    // TIER 1: FOUNDATIONS (ABSOLUTE BEGINNER)
    {
      id: 'js-t1-variables-primitives',
      title: 'Foundations: Variables, Types & String Formatting',
      slug: 'variables-types',
      language: 'javascript',
      category: '1. Foundations',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 8,
      xp: 40,
      description: 'Start at step zero. Learn how to store data using let/const, understand primitive types, and format dynamic strings.',
      concepts: ['Variables (let vs const)', 'Data types: string, number, boolean', 'Template literals (`${var}`)'],
      explanationMarkdown: `
### Welcome to Coding! What is a Variable?
A variable is a labeled container for storing data in your computer's memory.

In modern JavaScript:
- \`const\`: Use for values that won't be reassigned.
- \`let\`: Use for variables whose values will change over time.

\`\`\`javascript
const language = "JavaScript";
let score = 100;
score = score + 25; // Reassignment
\`\`\`

#### Template Literals:
Instead of cumbersome string concatenation with \`+\`, use backticks:
\`\`\`javascript
const name = "Alex";
console.log(\`Hello, \${name}!\`);
\`\`\`

#### Challenge:
Create a function \`generateWelcomeMessage(userName, startingPoints)\` that returns:
\`"Welcome, {userName}! You start with {startingPoints * 2} bonus points."\`
      `,
      initialCode: `// Write your function below:
function generateWelcomeMessage(userName, startingPoints) {
  // Return the formatted string using template literals
  
}

// Test call:
console.log(generateWelcomeMessage("Robin", 50));
`,
      solutionCode: `function generateWelcomeMessage(userName, startingPoints) {
  return \`Welcome, \${userName}! You start with \${startingPoints * 2} bonus points.\`;
}

console.log(generateWelcomeMessage("Robin", 50));
`,
      hints: [
        'Use backticks (`) for template literals.',
        'Calculate the bonus inside the interpolation: `${startingPoints * 2}`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Calculates doubled points and formats string correctly',
          testFn: `typeof generateWelcomeMessage === 'function' && generateWelcomeMessage('Robin', 50) === 'Welcome, Robin! You start with 100 bonus points.'`,
          expectedMessage: 'Expected "Welcome, Robin! You start with 100 bonus points."'
        },
        {
          id: 'tc-2',
          description: 'Works with different usernames and amounts',
          testFn: `generateWelcomeMessage('Dev', 10) === 'Welcome, Dev! You start with 20 bonus points.'`,
          expectedMessage: 'Expected "Welcome, Dev! You start with 20 bonus points."'
        }
      ]
    },

    // TIER 2: CORE DEVELOPER
    {
      id: 'js-t2-arrow-destructuring',
      title: 'Core: Modern ES6+ Destructuring & Default Values',
      slug: 'arrow-destructuring',
      language: 'javascript',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Learn concise arrow functions, object and array destructuring, and fallback default values.',
      concepts: ['Arrow functions', 'Object destructuring with renaming', 'Array destructuring with default parameters'],
      explanationMarkdown: `
### Modern Object & Array Unpacking
Destructuring allows extracting multiple properties from objects and arrays in a single line.

\`\`\`javascript
const user = { id: 1, username: 'neo', role: 'admin' };
const { username, role: userRole } = user;
console.log(username, userRole); // 'neo' 'admin'
\`\`\`

#### Challenge:
Write \`formatUserProfile(user)\` which takes an object with \`name\`, \`age\`, and optional \`country\` (default to \`'Unknown'\`), and returns:
\`"{name} is {age} years old from {country}"\`.
      `,
      initialCode: `function formatUserProfile(user) {
  // Destructure name, age, and country (default: 'Unknown')
  
}

const sample = { name: "Sarah", age: 28, country: "Canada" };
console.log(formatUserProfile(sample));
`,
      solutionCode: `function formatUserProfile(user) {
  const { name, age, country = 'Unknown' } = user;
  return \`\${name} is \${age} years old from \${country}\`;
}

const sample = { name: "Sarah", age: 28, country: "Canada" };
console.log(formatUserProfile(sample));
`,
      hints: [
        'Destructure with `{ name, age, country = "Unknown" } = user;`',
        'Return `${name} is ${age} years old from ${country}`'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Formats user with all fields',
          testFn: `formatUserProfile({ name: 'Alex', age: 24, country: 'Japan' }) === 'Alex is 24 years old from Japan'`,
          expectedMessage: 'Expected "Alex is 24 years old from Japan"'
        },
        {
          id: 'tc-2',
          description: 'Defaults country to Unknown when omitted',
          testFn: `formatUserProfile({ name: 'Elena', age: 31 }) === 'Elena is 31 years old from Unknown'`,
          expectedMessage: 'Expected "Elena is 31 years old from Unknown"'
        }
      ]
    },

    // TIER 3: INTERMEDIATE
    {
      id: 'js-t3-array-transformations',
      title: 'Intermediate: Functional Array Pipelines (Map, Filter, Reduce)',
      slug: 'array-transformations',
      language: 'javascript',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 15,
      xp: 65,
      description: 'Transform collections without mutation using declarative functional methods.',
      concepts: ['Immutability', 'Array.map', 'Array.filter', 'Array.reduce accumulators'],
      explanationMarkdown: `
### Functional Array Pipelines
Professional JavaScript favors pure functions and declarative transformations over imperative \`for\` loops.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
const doubled = evens.map(n => n * 2);
const total = doubled.reduce((sum, val) => sum + val, 0);
\`\`\`

#### Challenge:
Write \`summarizeInventory(products)\` that receives an array of items \`{ name, category, price, inStock }\`.
1. Filter only items where \`inStock === true\`.
2. Compute total inventory value using \`reduce\`.
3. Return: \`{ inStockCount: number, totalValue: number }\`.
      `,
      initialCode: `function summarizeInventory(products) {
  // your code here
  
}

const testData = [
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 80, inStock: false },
  { name: "Monitor", price: 200, inStock: true }
];
console.log(summarizeInventory(testData));
`,
      solutionCode: `function summarizeInventory(products) {
  const inStockItems = products.filter(item => item.inStock);
  const totalValue = inStockItems.reduce((acc, item) => acc + item.price, 0);
  return {
    inStockCount: inStockItems.length,
    totalValue
  };
}
`,
      hints: [
        'Use products.filter(p => p.inStock).',
        'Use .reduce((sum, item) => sum + item.price, 0) for totalValue.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Calculates inStockCount and totalValue correctly',
          testFn: `(() => {
            const data = [{ price: 10, inStock: true }, { price: 20, inStock: false }, { price: 30, inStock: true }];
            const res = summarizeInventory(data);
            return res.inStockCount === 2 && res.totalValue === 40;
          })()`,
          expectedMessage: 'Expected { inStockCount: 2, totalValue: 40 }'
        }
      ]
    },

    // TIER 4: ADVANCED
    {
      id: 'js-t4-async-promises-concurrency',
      title: 'Advanced: Async/Await & Controlled Concurrency',
      slug: 'async-concurrency',
      language: 'javascript',
      category: '4. Advanced Architecture',
      difficulty: 'Advanced',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 20,
      xp: 85,
      description: 'Master the event loop, handle asynchronous tasks with Promises, and write concurrent batch runners.',
      concepts: ['Event loop', 'Promise states', 'Promise.all parallelization', 'Error handling with try/catch'],
      explanationMarkdown: `
### Mastering Asynchronous Flow
JavaScript uses non-blocking I/O. Promises represent the eventual completion or failure of an asynchronous operation.

\`\`\`javascript
async function fetchBatch(ids) {
  const promises = ids.map(id => fetchUser(id));
  return await Promise.all(promises);
}
\`\`\`

#### Challenge:
Implement \`batchProcess(items, asyncFn)\` that maps over \`items\`, executes \`asyncFn(item)\` concurrently on all items using \`Promise.all\`, and returns an array of the results.
      `,
      initialCode: `async function batchProcess(items, asyncFn) {
  // your implementation
}

const mockAsync = async (x) => x * 10;
batchProcess([1, 2, 3], mockAsync).then(console.log);
`,
      solutionCode: `async function batchProcess(items, asyncFn) {
  const promises = items.map(item => asyncFn(item));
  return await Promise.all(promises);
}
`,
      hints: [
        'items.map(item => asyncFn(item)) yields an array of Promises.',
        'Await Promise.all(promises) and return.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Concurrently evaluates async function on all inputs preserving order',
          testFn: `(async () => {
            const fn = async (n) => n * 2;
            const res = await batchProcess([5, 10, 15], fn);
            return res[0] === 10 && res[1] === 20 && res[2] === 30;
          })()`,
          expectedMessage: 'Expected [10, 20, 30]'
        }
      ]
    },

    // TIER 5: MASTERCLASS / EXPERT
    {
      id: 'js-t5-metaprogramming-proxy',
      title: 'Masterclass: Metaprogramming with Proxies & Reflect API',
      slug: 'proxy-reflect-metaprogramming',
      language: 'javascript',
      category: '5. Masterclass & Internals',
      difficulty: 'Expert',
      tier: 5,
      tierName: 'Masterclass',
      estimatedMinutes: 25,
      xp: 120,
      description: 'Enter the world of language internals. Build reactive observable state and schema validation using Proxy traps and Reflect.',
      concepts: ['Proxy object', 'Reflect API', 'Trap interception (get, set)', 'Validation & immutability guards'],
      explanationMarkdown: `
### Metaprogramming: Intercepting Fundamental Operations
The \`Proxy\` object allows you to create a wrapper for another object and intercept fundamental operations like property lookup, assignment, enumeration, and function invocation.

\`\`\`javascript
const target = { name: "Alice" };
const handler = {
  get(target, prop, receiver) {
    console.log(\`Accessing property: \${String(prop)}\`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (typeof value !== 'string') {
      throw new TypeError("Property must be a string");
    }
    return Reflect.set(target, prop, value, receiver);
  }
};
const proxy = new Proxy(target, handler);
\`\`\`

#### Challenge:
Implement a function \`createTypeSafeStore(initialObject, allowedTypes)\`:
- \`allowedTypes\` is a map of property names to expected types, e.g. \`{ age: 'number', name: 'string' }\`.
- Return a \`Proxy\` wrapping \`initialObject\` with a \`set\` trap:
  - If a key being assigned is in \`allowedTypes\` and \`typeof value !== allowedTypes[key]\`, throw \`new TypeError(\`Invalid type for \${key}\`)\`.
  - Otherwise, assign the property using \`Reflect.set\` and return \`true\`.
      `,
      initialCode: `function createTypeSafeStore(initialObject, allowedTypes) {
  return new Proxy(initialObject, {
    set(target, prop, value, receiver) {
      // Check if prop is in allowedTypes and validate its typeof
      // Throw TypeError on mismatch, otherwise Reflect.set
      
    }
  });
}

// Test run:
const store = createTypeSafeStore({ name: "Dan", age: 30 }, { name: "string", age: "number" });
store.age = 31; // OK
console.log("Updated age:", store.age);
`,
      solutionCode: `function createTypeSafeStore(initialObject, allowedTypes) {
  return new Proxy(initialObject, {
    set(target, prop, value, receiver) {
      if (prop in allowedTypes && typeof value !== allowedTypes[prop]) {
        throw new TypeError(\`Invalid type for \${String(prop)}\`);
      }
      return Reflect.set(target, prop, value, receiver);
    }
  });
}
`,
      hints: [
        'Check `if (prop in allowedTypes && typeof value !== allowedTypes[prop]) throw new TypeError("...");`',
        'Return `Reflect.set(target, prop, value, receiver);`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Allows assignments matching specified schema types',
          testFn: `(() => {
            const s = createTypeSafeStore({ x: 10 }, { x: 'number' });
            s.x = 20;
            return s.x === 20;
          })()`,
          expectedMessage: 'Expected valid assignment to succeed'
        },
        {
          id: 'tc-2',
          description: 'Throws TypeError when assigning invalid type',
          testFn: `(() => {
            const s = createTypeSafeStore({ x: 10 }, { x: 'number' });
            try {
              s.x = 'twenty';
              return false;
            } catch (e) {
              return e instanceof TypeError;
            }
          })()`,
          expectedMessage: 'Expected TypeError when assigning string to number property'
        }
      ]
    }
  ]
};
