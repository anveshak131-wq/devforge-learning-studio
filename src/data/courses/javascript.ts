import { Track } from '../../types';

export const JAVASCRIPT_TRACK: Track = {
  id: 'javascript',
  title: 'JavaScript: Zero to Masterclass',
  slug: 'javascript',
  language: 'javascript',
  icon: 'Zap',
  color: 'from-amber-400 to-yellow-500',
  tagline: 'Complete 5-tier roadmap: Learn foundational concepts first with worked examples, then practice with guided exercises.',
  description: 'Master JavaScript with step-by-step explanations, real-world analogies, fully worked code examples, and scaffolded practice exercises.',
  lessons: [
    // TIER 1: FOUNDATIONS (ABSOLUTE BEGINNER)
    {
      id: 'js-t1-variables-primitives',
      title: 'Foundations: Variables, Values & String Formatting',
      slug: 'variables-types',
      language: 'javascript',
      category: '1. Foundations',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 8,
      xp: 40,
      description: 'Start at step zero. Learn what variables are, how computers remember data, and how to format text dynamically.',
      concepts: ['Variables (let vs const)', 'Data types: text (strings) & numbers', 'Template strings (`${...}`)'],
      analogy: 'Imagine your computer has millions of storage boxes. A variable is simply putting a label on one box (like "score" or "playerName") so you can store, find, and update its contents whenever you want.',
      explanationMarkdown: `
### Step 1: What is a Variable?
When you write code, you constantly need to remember things: a player's score, an email address, or the price of a coffee. 

In modern JavaScript, we store data using two main keywords:
1. **\`const\` (Constant)**: Use this for values that **do not change** once created.
2. **\`let\`**: Use this when you expect the value to be **reassigned or updated** later.

\`\`\`javascript
const websiteName = "DevForge"; // Cannot be changed later
let userScore = 10;             // Can be updated
userScore = 25;                 // Reassigned to 25
\`\`\`

---

### Step 2: Combining Text and Variables (Template Literals)
In older JavaScript, people glued strings together using \`+\` signs (like \`"Hello " + name + "!"\`), which was easy to mess up.

Modern JavaScript uses **Template Literals** with backticks (\` \`):
Wrap your text in backticks, and insert any variable or math inside \`\${ ... }\`:
\`\`\`javascript
const name = "Maya";
const age = 22;
console.log(\`Hello, my name is \${name} and next year I will be \${age + 1}.\`);
// Output: Hello, my name is Maya and next year I will be 23.
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Building a Player Profile Card',
        code: `// 1. Declare values that stay the same
const heroName = "Aria";

// 2. Declare values that change
let currentLevel = 1;
let coins = 50;

// 3. Format into a nice readable message using backticks (\`)
const statusMessage = \`Hero \${heroName} is at Level \${currentLevel} with \${coins * 2} bonus points!\`;

console.log(statusMessage);`,
        explanation: '• Line 2: Creates a variable named heroName storing the text "Aria".\n• Lines 5-6: Uses let for level and coins because games update them frequently.\n• Line 9: Uses backticks (`) and ${coins * 2} to multiply 50 by 2 inside the string.\n• Line 11: Logs the final message to the console screen.',
        expectedOutput: 'Hero Aria is at Level 1 with 100 bonus points!'
      },
      commonMistakes: [
        'Using regular quotes (" or \') instead of backticks (`). If you use regular quotes, ${name} will be printed literally instead of replaced by the variable value!',
        'Trying to reassign a const variable (e.g. `const x = 5; x = 10;` throws a TypeError).'
      ],
      exerciseSteps: [
        'Step 1: Look at the function `generateWelcomeMessage(userName, startingPoints)` below.',
        'Step 2: Inside the function, use backticks (`) to return a message.',
        'Step 3: The returned string must match: "Welcome, {userName}! You start with {startingPoints * 2} bonus points."',
        'Step 4: Click "Check Solution" to verify with automated tests!'
      ],
      initialCode: `function generateWelcomeMessage(userName, startingPoints) {
  // 👉 Step 1: Use backticks (\`) and return the formatted string:
  // "Welcome, {userName}! You start with {startingPoints * 2} bonus points."
  
  return \`Welcome, \${userName}! You start with \${startingPoints * 2} bonus points.\`;
}

// 🧪 Test it out:
console.log(generateWelcomeMessage("Robin", 50));
`,
      solutionCode: `function generateWelcomeMessage(userName, startingPoints) {
  return \`Welcome, \${userName}! You start with \${startingPoints * 2} bonus points.\`;
}

console.log(generateWelcomeMessage("Robin", 50));
`,
      hints: [
        'Start with `return `Welcome, ${userName}...`;`',
        'Inside the interpolation, multiply startingPoints by 2: `${startingPoints * 2}`.'
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
      title: 'Core: Destructuring & Default Fallback Values',
      slug: 'arrow-destructuring',
      language: 'javascript',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Learn how to unpack properties from objects cleanly without repetitive code, and provide safe fallback defaults.',
      concepts: ['Object destructuring: { prop } = obj', 'Default property values: { prop = "default" }', 'Arrow functions vs function declarations'],
      analogy: 'Think of an object like a parcel with multiple items inside (a book, a pen, a watch). Destructuring is reaching in and taking out just the specific items you want in one quick move, instead of unpacking the whole box one piece at a time.',
      explanationMarkdown: `
### Why Destructuring?
In JavaScript, data is usually grouped inside objects:
\`\`\`javascript
const user = { name: "Sarah", role: "admin", country: "Canada" };
\`\`\`

Without destructuring, you would have to write repetitive lines:
\`\`\`javascript
const name = user.name;
const role = user.role;
const country = user.country;
\`\`\`

With **Destructuring**, you unpack what you need in a single clean line:
\`\`\`javascript
const { name, role, country } = user;
\`\`\`

---

### Fallback Default Values
What if the object is missing a property? If \`country\` isn't provided, it will be \`undefined\`.
You can provide an automatic fallback default:
\`\`\`javascript
const { name, country = "Unknown" } = user;
// If user.country is undefined, it automatically becomes "Unknown"!
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Unpacking a Customer Profile',
        code: `// Sample customer data (notice city is missing!)
const customer = {
  fullName: "Liam Chen",
  membershipTier: "Gold"
};

// Destructure fullName and supply default "Online" for city
const { fullName, membershipTier, city = "Online" } = customer;

console.log(\`Customer \${fullName} (\${membershipTier}) joined from \${city}.\`);`,
        explanation: '• Line 2: customer has fullName and membershipTier, but no city.\n• Line 8: We extract fullName, membershipTier, and set city = "Online".\n• Because customer.city was undefined, it gracefully fell back to "Online" without crashing!',
        expectedOutput: 'Customer Liam Chen (Gold) joined from Online.'
      },
      commonMistakes: [
        'Mismatching property names: `{ username } = user` will be undefined if the object property is named `name` rather than `username`.',
        'Forgetting that default values only trigger when a property is `undefined` (if it is `null`, the default value does NOT replace null).'
      ],
      exerciseSteps: [
        'Step 1: In `formatUserProfile(user)`, destructure `{ name, age, country = "Unknown" }` from `user`.',
        'Step 2: Return the formatted string: "{name} is {age} years old from {country}".',
        'Step 3: Click "Check Solution" to verify that the default country works when omitted!'
      ],
      initialCode: `function formatUserProfile(user) {
  // 👉 Step 1: Destructure name, age, and country (with default "Unknown") from user:
  const { name, age, country = "Unknown" } = user;
  
  // 👉 Step 2: Return formatted string:
  return \`\${name} is \${age} years old from \${country}\`;
}

// 🧪 Test with sample user:
const sample = { name: "Sarah", age: 28, country: "Canada" };
console.log(formatUserProfile(sample));

// 🧪 Test with user missing country:
console.log(formatUserProfile({ name: "Elena", age: 31 }));
`,
      solutionCode: `function formatUserProfile(user) {
  const { name, age, country = 'Unknown' } = user;
  return \`\${name} is \${age} years old from \${country}\`;
}

const sample = { name: "Sarah", age: 28, country: "Canada" };
console.log(formatUserProfile(sample));
`,
      hints: [
        'Use `const { name, age, country = "Unknown" } = user;`',
        'Return `${name} is ${age} years old from ${country}`;'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Formats user with all fields provided',
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
      title: 'Intermediate: Array Methods (Map, Filter & Reduce)',
      slug: 'array-transformations',
      language: 'javascript',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 15,
      xp: 65,
      description: 'Transform lists of data without mutating the original array using map, filter, and reduce.',
      concepts: ['Array.filter (picking items that pass a test)', 'Array.map (transforming every item)', 'Array.reduce (accumulating a total)'],
      analogy: 'Imagine a factory conveyor belt of fruit:\n1. Filter is an inspector tossing out bruised apples.\n2. Map is a peeling machine peeling every remaining apple.\n3. Reduce is a blender blending all the peeled apples into a single cup of apple juice.',
      explanationMarkdown: `
### Declarative Array Pipelines
In professional code, you rarely write manual \`for (let i = 0; ...)\` loops. Instead, JavaScript provides three superpowers:

1. **\`filter\`**: Keeps only items where your function returns \`true\`.
\`\`\`javascript
const prices = [10, 50, 100, 25];
const expensive = prices.filter(p => p >= 50); // [50, 100]
\`\`\`

2. **\`map\`**: Transforms each item and returns a new array of the same length:
\`\`\`javascript
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]
\`\`\`

3. **\`reduce\`**: Rolls through an array to calculate a single cumulative value (like a total sum):
\`\`\`javascript
const total = [10, 20, 30].reduce((sum, current) => sum + current, 0); // 60
// (0 is the starting initial value of sum)
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Calculating Grocery Receipt Subtotal',
        code: `const cart = [
  { item: "Apples", price: 5, organic: true },
  { item: "Chips", price: 3, organic: false },
  { item: "Spinach", price: 4, organic: true }
];

// 1. Filter: Keep only organic items
const organicItems = cart.filter(product => product.organic === true);

// 2. Reduce: Calculate total price of organic items
const organicTotal = organicItems.reduce((acc, product) => acc + product.price, 0);

console.log(\`Found \${organicItems.length} organic items. Total: $\${organicTotal}\`);`,
        explanation: '• cart.filter picks Apples ($5) and Spinach ($4).\n• .reduce starts with sum 0, adds 5, then adds 4 to yield 9.\n• The original cart array was never changed or damaged!',
        expectedOutput: 'Found 2 organic items. Total: $9'
      },
      commonMistakes: [
        'Forgetting the initial accumulator value in `reduce(..., 0)`. If you omit the 0, reduce will start with the first item itself, which causes bugs when working with objects!',
        'Mutating arrays in-place using methods like `.push()` instead of `.filter()` or `.map()`.'
      ],
      exerciseSteps: [
        'Step 1: Filter `products` to keep only items where `item.inStock === true`.',
        'Step 2: Use `.reduce()` on the filtered array to compute `totalValue` (sum of `item.price`).',
        'Step 3: Return an object: `{ inStockCount: filtered.length, totalValue }`.'
      ],
      initialCode: `function summarizeInventory(products) {
  // 👉 Step 1: Filter only items in stock:
  const inStockItems = products.filter(p => p.inStock);

  // 👉 Step 2: Sum the prices using reduce:
  const totalValue = inStockItems.reduce((sum, item) => sum + item.price, 0);

  // 👉 Step 3: Return the summary object:
  return {
    inStockCount: inStockItems.length,
    totalValue: totalValue
  };
}

const inventory = [
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 80, inStock: false },
  { name: "Monitor", price: 200, inStock: true }
];
console.log(summarizeInventory(inventory));
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
        'Use `const inStockItems = products.filter(p => p.inStock);`',
        'Use `inStockItems.reduce((sum, item) => sum + item.price, 0);`'
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
      title: 'Advanced: Async/Await & Parallel Concurrency',
      slug: 'async-concurrency',
      language: 'javascript',
      category: '4. Advanced Architecture',
      difficulty: 'Advanced',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 20,
      xp: 85,
      description: 'Master non-blocking asynchronous programming, Promises, and running parallel requests with Promise.all.',
      concepts: ['Event loop & non-blocking I/O', 'Promises (pending, fulfilled, rejected)', 'async/await syntax', 'Promise.all parallel batching'],
      analogy: 'Imagine ordering at a restaurant. A blocking kitchen cooks 1 order, freezes completely until the diner finishes eating, and only then takes the next order. Non-blocking (async) takes everyone\'s orders, fires all tickets at once, and rings a buzzer whenever each plate is ready.',
      explanationMarkdown: `
### Why Asynchronous Code?
JavaScript runs on a single thread. If your code had to freeze and wait 2 seconds for a server response, the entire website would lock up!

Instead, JavaScript uses **Promises**:
- An \`async\` function always returns a Promise.
- \`await\` pauses *only* that function until the promise finishes, without freezing the rest of your app.

\`\`\`javascript
async function loadUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}
\`\`\`

---

### Running in Parallel: \`Promise.all\`
If you have 3 independent requests, don't await them one-by-one (1s + 1s + 1s = 3s).
Fire all 3 concurrently with \`Promise.all\`, which completes in just 1s:
\`\`\`javascript
const [user, orders, settings] = await Promise.all([
  fetchUser(),
  fetchOrders(),
  fetchSettings()
]);
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Fetching Multiple User Scores Concurrently',
        code: `// Simulated async network fetcher (takes 20ms)
const fetchScoreAsync = (userId) => 
  new Promise(resolve => setTimeout(() => resolve(userId * 100), 20));

async function loadTeamScores(userIds) {
  // 1. Create an array of Promises
  const promises = userIds.map(id => fetchScoreAsync(id));

  // 2. Await all of them simultaneously!
  const allScores = await Promise.all(promises);
  return allScores;
}

loadTeamScores([1, 2, 3]).then(scores => {
  console.log("All team scores loaded in parallel:", scores);
});`,
        explanation: '• Line 6: userIds.map returns [Promise, Promise, Promise].\n• Line 9: Promise.all lets all 3 network calls run at the same time.\n• Output array [100, 200, 300] maintains the exact order of the userIds.',
        expectedOutput: 'All team scores loaded in parallel: [100, 200, 300]'
      },
      commonMistakes: [
        'Using await inside a standard forEach loop. `forEach` is not promise-aware and will not wait! Use `map` with `Promise.all` instead.',
        'Not using `try/catch` around `await` calls to handle network failures.'
      ],
      exerciseSteps: [
        'Step 1: In `batchProcess(items, asyncFn)`, map over `items` to invoke `asyncFn(item)`.',
        'Step 2: Await `Promise.all(promises)`.',
        'Step 3: Return the resulting array of results.'
      ],
      initialCode: `async function batchProcess(items, asyncFn) {
  // 👉 Step 1: Map items to an array of promises
  const promises = items.map(item => asyncFn(item));

  // 👉 Step 2: Await Promise.all to run concurrently
  const results = await Promise.all(promises);

  return results;
}

// 🧪 Test run:
const doubleAsync = async (x) => x * 10;
batchProcess([1, 2, 3], doubleAsync).then(res => {
  console.log("Processed batch:", res);
});
`,
      solutionCode: `async function batchProcess(items, asyncFn) {
  const promises = items.map(item => asyncFn(item));
  return await Promise.all(promises);
}
`,
      hints: [
        'Use `const promises = items.map(item => asyncFn(item));`',
        'Return `await Promise.all(promises);`'
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
      description: 'Enter JavaScript runtime internals. Intercept property reads, writes, and enforce runtime type safety using Proxy traps and Reflect.',
      concepts: ['Proxy object', 'Reflect API', 'Trap interception (get, set)', 'Reactive state & validation guards'],
      analogy: 'Imagine a bouncer standing outside a bank vault. Anytime anyone tries to put money in or take money out (read or write a property), the bouncer (Proxy) intercepts the action, inspects the badge and currency (validation trap), and only allows it through if it passes inspection.',
      explanationMarkdown: `
### What is a JavaScript Proxy?
A \`Proxy\` wraps an object and intercepts low-level operations (reading a property, setting a value, deleting a key). This is the exact mechanism that powers reactive frameworks like Vue 3 and MobX!

\`\`\`javascript
const target = { name: "Alice" };
const handler = {
  set(target, prop, value, receiver) {
    if (typeof value !== 'string') {
      throw new TypeError("Property must be a string");
    }
    return Reflect.set(target, prop, value, receiver);
  }
};
const proxy = new Proxy(target, handler);
\`\`\`

---

### Why \`Reflect\`?
\`Reflect\` is a built-in object that provides methods for interceptable JavaScript operations. Inside a proxy handler, always use \`Reflect.set()\` and \`Reflect.get()\` to maintain proper prototype chain delegation and return boolean status.
      `,
      workedExample: {
        title: 'Worked Example: Building a Positive Number Guard Proxy',
        code: `const bankAccount = { balance: 100 };

const validator = {
  set(target, prop, value, receiver) {
    if (prop === 'balance' && value < 0) {
      throw new RangeError("Balance cannot be negative!");
    }
    console.log(\`Setting \${prop} to \${value}\`);
    return Reflect.set(target, prop, value, receiver);
  }
};

const safeAccount = new Proxy(bankAccount, validator);
safeAccount.balance = 250; // Allowed!
console.log("Current balance:", safeAccount.balance);`,
        explanation: '• When safeAccount.balance = 250 is executed, the `set` trap intercepts the write.\n• It checks that value is >= 0.\n• Reflect.set delegates the actual write to the underlying bankAccount.',
        expectedOutput: 'Setting balance to 250\nCurrent balance: 250'
      },
      commonMistakes: [
        'Forgetting to return `true` or `Reflect.set(...)` in strict mode. If a set trap does not return true, JavaScript throws a TypeError in strict mode!',
        'Using `target[prop] = value` inside the trap instead of `Reflect.set(target, prop, value, receiver)`. This can break getter/setter `this` binding.'
      ],
      exerciseSteps: [
        'Step 1: In `createTypeSafeStore(initialObject, allowedTypes)`, return a `new Proxy(initialObject, handler)`.',
        'Step 2: Inside the `set(target, prop, value, receiver)` trap:',
        '  - Check `if (prop in allowedTypes && typeof value !== allowedTypes[prop])`',
        '  - If invalid, throw `new TypeError("Invalid type")`',
        '  - Otherwise return `Reflect.set(target, prop, value, receiver)`.'
      ],
      initialCode: `function createTypeSafeStore(initialObject, allowedTypes) {
  return new Proxy(initialObject, {
    set(target, prop, value, receiver) {
      // 👉 Step 1: Validate type if the property is defined in allowedTypes:
      if (prop in allowedTypes && typeof value !== allowedTypes[prop]) {
        throw new TypeError(\`Invalid type for \${String(prop)}\`);
      }

      // 👉 Step 2: Delegate to Reflect.set:
      return Reflect.set(target, prop, value, receiver);
    }
  });
}

// 🧪 Test run:
const store = createTypeSafeStore({ name: "Dan", age: 30 }, { name: "string", age: "number" });
store.age = 31; // Works
console.log("Age updated safely:", store.age);
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
