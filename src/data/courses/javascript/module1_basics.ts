import { Lesson } from '../../../types';

export const MODULE_1_LESSONS: Lesson[] = [
  // 1. Hello World
  {
    id: 'js-1-hello-world',
    title: '1. Hello, World! Your First Output',
    slug: 'hello-world',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 3,
    xp: 20,
    description: 'Learn how to display messages on the screen using console.log().',
    concepts: ['console.log()', 'Strings in quotes', 'Statements'],
    analogy: 'Imagine a walkie-talkie screen. console.log is you pressing talk and speaking a message onto the screen.',
    explanationMarkdown: `### Printing Messages
In JavaScript, we use \`console.log(...)\` to display text on the screen. Any piece of text must be surrounded by quotes.

\`\`\`javascript
console.log("Welcome to JavaScript!");
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Greeting',
      code: `console.log("Hello, World!");`,
      explanation: '• console.log sends output to the console.\n• "Hello, World!" is the string text.',
      expectedOutput: 'Hello, World!'
    },
    exerciseSteps: [
      'Print "Hello, World!" to the screen using console.log().',
      'Click "Check Answer" to test.'
    ],
    initialCode: `// 👉 Step 1: Print "Hello, World!" below:
console.log("Hello, World!");
`,
    solutionCode: `console.log("Hello, World!");
`,
    hints: ['Write `console.log("Hello, World!");`'],
    testCases: [{
      id: 'js-1-tc-1',
      description: 'Prints "Hello, World!"',
      testFn: 'logs.some(l => l.args.join(" ").toLowerCase().includes("hello, world"))'
    }]
  },

  // 2. Comments
  {
    id: 'js-2-comments',
    title: '2. Adding Helpful Comments in Code',
    slug: 'comments',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 3,
    xp: 20,
    description: 'Write notes in your code that computers ignore using // and /* */.',
    concepts: ['Single-line comments //', 'Multi-line comments /* */', 'Code readability'],
    analogy: 'Comments are like sticky notes left on a manuscript. Readers see them, but the printing press ignores them.',
    explanationMarkdown: `### Code Comments
Comments are notes for humans. JavaScript completely ignores them:
* Single-line comment: \`// note here\`
* Multi-line comment: \`/* note here */\`

\`\`\`javascript
// This is a single line note
/* This note spans
   multiple lines */
console.log("Comments are great!");
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Documenting Code',
      code: `// Calculate player score
let score = 100;
console.log(score);`,
      explanation: '• The line starting with // is ignored by JavaScript.',
      expectedOutput: '100'
    },
    exerciseSteps: [
      'Add a single-line comment starting with `//` on line 1.',
      'Print `"Comments active"` using `console.log("Comments active");`.'
    ],
    initialCode: `// This is my comment
console.log("Comments active");
`,
    solutionCode: `// This is my comment
console.log("Comments active");
`,
    hints: ['Start line 1 with `//` and write any note, then print `"Comments active"`.'],
    testCases: [{
      id: 'js-2-tc-1',
      description: 'Prints "Comments active"',
      testFn: 'logs.some(l => l.args.join(" ").includes("Comments active"))'
    }]
  },

  // 3. Variables with let
  {
    id: 'js-3-let-variables',
    title: '3. Variables: Storing Data with let',
    slug: 'let-variables',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 20,
    description: 'Create values that can change throughout your program using let.',
    concepts: ['The let keyword', 'Variable assignment =', 'Updating values'],
    analogy: 'A reusable dry-erase whiteboard. You write "score = 10", and later wipe it off to write "score = 20".',
    explanationMarkdown: `### The let Keyword
Use \`let\` when you want to create a variable that can be reassigned:

\`\`\`javascript
let score = 10;
score = 25; // Value is updated!
console.log(score); // 25
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Updating Score',
      code: `let points = 5;
points = 15;
console.log(points);`,
      explanation: '• points starts at 5 and is updated to 15.',
      expectedOutput: '15'
    },
    exerciseSteps: [
      'Declare `let coins = 10;`.',
      'Update `coins = 50;`.',
      'Print `coins`.'
    ],
    initialCode: `let coins = 10;
coins = 50;
console.log(coins);
`,
    solutionCode: `let coins = 10;
coins = 50;
console.log(coins);
`,
    hints: ['Assign `coins = 50;` then `console.log(coins);`'],
    testCases: [{
      id: 'js-3-tc-1',
      description: 'coins is updated to 50 and printed',
      testFn: 'typeof coins !== "undefined" && coins === 50 && logs.some(l => l.args.join(" ").includes("50"))'
    }]
  },

  // 4. Constants with const
  {
    id: 'js-4-const-variables',
    title: '4. Constants: Locked Values with const',
    slug: 'const-variables',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 20,
    description: 'Lock values that must never change using const.',
    concepts: ['The const keyword', 'Immutability of bindings', 'Best practices'],
    analogy: 'Carving a name into a stone monument. Once written with const, it cannot be erased or reassigned.',
    explanationMarkdown: `### The const Keyword
Use \`const\` for values that should stay permanent:

\`\`\`javascript
const website = "DevForge";
// website = "Other"; // ❌ Error! Cannot reassign const.
console.log(website);
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Application Name',
      code: `const appTitle = "DevForge Studio";
console.log(appTitle);`,
      explanation: '• appTitle cannot be accidentally changed anywhere in the program.',
      expectedOutput: 'DevForge Studio'
    },
    exerciseSteps: [
      'Create `const maxLives = 3;`.',
      'Print `maxLives`.'
    ],
    initialCode: `const maxLives = 3;
console.log(maxLives);
`,
    solutionCode: `const maxLives = 3;
console.log(maxLives);
`,
    hints: ['Write `const maxLives = 3; console.log(maxLives);`'],
    testCases: [{
      id: 'js-4-tc-1',
      description: 'maxLives is 3',
      testFn: 'typeof maxLives !== "undefined" && maxLives === 3'
    }]
  },

  // 5. Primitive: Strings
  {
    id: 'js-5-strings',
    title: '5. Working with Text: Strings',
    slug: 'strings',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 20,
    description: 'Learn how JavaScript handles letters, sentences, and words.',
    concepts: ['Single quotes', 'Double quotes', 'Concatenation with +'],
    analogy: 'Beads on a necklace (a "string" of characters). You can string letters together to form words.',
    explanationMarkdown: `### Strings in JavaScript
Strings represent text. You can join two strings together using the \`+\` operator:

\`\`\`javascript
let firstName = "Ada";
let lastName = "Lovelace";
let fullName = firstName + " " + lastName;
console.log(fullName); // Ada Lovelace
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Full Name',
      code: `let greeting = "Hello, " + "World!";
console.log(greeting);`,
      explanation: '• Glues "Hello, " and "World!" into one string.',
      expectedOutput: 'Hello, World!'
    },
    exerciseSteps: [
      'Create `let city = "Tokyo";`.',
      'Create `let country = "Japan";`.',
      'Create `let location = city + ", " + country;`.',
      'Print `location`.'
    ],
    initialCode: `let city = "Tokyo";
let country = "Japan";
let location = city + ", " + country;
console.log(location);
`,
    solutionCode: `let city = "Tokyo";
let country = "Japan";
let location = city + ", " + country;
console.log(location);
`,
    hints: ['Combine them with `city + ", " + country`'],
    testCases: [{
      id: 'js-5-tc-1',
      description: 'location is "Tokyo, Japan"',
      testFn: 'typeof location !== "undefined" && location === "Tokyo, Japan"'
    }]
  },

  // 6. Primitive: Numbers
  {
    id: 'js-6-numbers',
    title: '6. Numbers: Integers and Decimals',
    slug: 'numbers',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 20,
    description: 'Understand whole numbers, negative numbers, and floating-point decimals.',
    concepts: ['Integers', 'Floats', 'No quotes on numbers'],
    analogy: 'Cash register change: numbers represent counts ($10) or precise coins ($10.50).',
    explanationMarkdown: `### Numbers
Unlike some languages with separate types for integers and decimals, JavaScript uses a single number type:

\`\`\`javascript
let count = 42;
let price = 9.99;
let negative = -15;
\`\`\`
Never wrap numbers in quotes, or JavaScript will treat them as text!
`,
    workedExample: {
      title: 'Worked Example: Prices',
      code: `let price = 19.99;
console.log(price);`,
      explanation: '• Stored as a raw number without quotation marks.',
      expectedOutput: '19.99'
    },
    exerciseSteps: [
      'Create `let userAge = 25;`.',
      'Print `userAge`.'
    ],
    initialCode: `let userAge = 25;
console.log(userAge);
`,
    solutionCode: `let userAge = 25;
console.log(userAge);
`,
    hints: ['Write `let userAge = 25; console.log(userAge);`'],
    testCases: [{
      id: 'js-6-tc-1',
      description: 'userAge is 25',
      testFn: 'typeof userAge !== "undefined" && userAge === 25'
    }]
  },

  // 7. Primitive: Booleans
  {
    id: 'js-7-booleans',
    title: '7. Booleans: True or False',
    slug: 'booleans',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 20,
    description: 'Work with the simplest data type in computer science: true or false.',
    concepts: ['true keyword', 'false keyword', 'Binary states'],
    analogy: 'A light switch on the wall: it has only two states — ON (true) or OFF (false).',
    explanationMarkdown: `### Booleans
A Boolean represents one of two values: \`true\` or \`false\`.

\`\`\`javascript
let isLoggedIn = true;
let isGameOver = false;
console.log(isLoggedIn); // true
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Game State',
      code: `let isPlaying = true;
console.log("Playing: " + isPlaying);`,
      explanation: '• Stores a boolean flag.',
      expectedOutput: 'Playing: true'
    },
    exerciseSteps: [
      'Create `let isVerified = true;`.',
      'Print `isVerified`.'
    ],
    initialCode: `let isVerified = true;
console.log(isVerified);
`,
    solutionCode: `let isVerified = true;
console.log(isVerified);
`,
    hints: ['Write `let isVerified = true; console.log(isVerified);`'],
    testCases: [{
      id: 'js-7-tc-1',
      description: 'isVerified is true',
      testFn: 'typeof isVerified !== "undefined" && isVerified === true'
    }]
  },

  // 8. Undefined vs Null
  {
    id: 'js-8-undefined-null',
    title: '8. Undefined vs Null: Empty Values',
    slug: 'undefined-null',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 5,
    xp: 25,
    description: 'Understand the difference between a variable that has not been set yet and one intentionally emptied.',
    concepts: ['undefined', 'null', 'Intentional absence of value'],
    analogy: 'undefined is an unopened Amazon box you haven\'t unpacked yet. null is an empty box you intentionally cleared out.',
    explanationMarkdown: `### undefined vs null
* **\`undefined\`**: A variable was declared, but nobody gave it a value yet.
* **\`null\`**: You intentionally set the value to "nothing".

\`\`\`javascript
let unassigned;
console.log(unassigned); // undefined

let emptySlot = null; // Intentionally empty
console.log(emptySlot); // null
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Empty Cart',
      code: `let activeUser = null;
console.log(activeUser);`,
      explanation: '• Explicitly indicates no user is logged in yet.',
      expectedOutput: 'null'
    },
    exerciseSteps: [
      'Create `let selectedItem = null;`.',
      'Print `selectedItem`.'
    ],
    initialCode: `let selectedItem = null;
console.log(selectedItem);
`,
    solutionCode: `let selectedItem = null;
console.log(selectedItem);
`,
    hints: ['Assign `selectedItem = null;`'],
    testCases: [{
      id: 'js-8-tc-1',
      description: 'selectedItem is null',
      testFn: 'typeof selectedItem !== "undefined" && selectedItem === null'
    }]
  },

  // 9. Template Literals
  {
    id: 'js-9-template-literals',
    title: '9. Template Literals: String Formatting with ${...}',
    slug: 'template-literals',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 5,
    xp: 25,
    description: 'Embed variables and math directly inside text using backticks (`) and ${}.',
    concepts: ['Backtick syntax (` `)', 'Interpolation with ${}', 'Cleaner text formatting'],
    analogy: 'A fill-in-the-blank certificate template: "Congratulations {name}, you scored {score} points!"',
    explanationMarkdown: `### Template Literals
Instead of messy \`+\` signs, wrap your string in backticks (\` \`) and insert variables with \`\${variable}\`:

\`\`\`javascript
let name = "Maya";
let age = 22;
console.log(\`Hello \${name}, you are \${age} years old!\`);
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: User Greeting',
      code: `let user = "Sam";
let role = "Admin";
console.log(\`User \${user} has role: \${role}\`);`,
      explanation: '• Embeds both variables directly inside the backticks.',
      expectedOutput: 'User Sam has role: Admin'
    },
    exerciseSteps: [
      'Look at `hero = "Robin"` and `level = 10`.',
      'Use backticks to format: `Hero ${hero} is level ${level}` and log it.'
    ],
    initialCode: `let hero = "Robin";
let level = 10;

// 👉 Step 1: Format string with backticks:
let message = \`Hero \${hero} is level \${level}\`;
console.log(message);
`,
    solutionCode: `let hero = "Robin";
let level = 10;
let message = \`Hero \${hero} is level \${level}\`;
console.log(message);
`,
    hints: ['Use backticks: `` `Hero ${hero} is level ${level}` ``'],
    testCases: [{
      id: 'js-9-tc-1',
      description: 'message equals "Hero Robin is level 10"',
      testFn: 'typeof message !== "undefined" && message === "Hero Robin is level 10"'
    }]
  },

  // 10. String Length
  {
    id: 'js-10-string-length',
    title: '10. Checking Text Length with .length',
    slug: 'string-length',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 25,
    description: 'Find out exactly how many characters are inside any text string.',
    concepts: ['.length property', 'Character count', 'Spaces count as characters'],
    analogy: 'A character counter on a social media post (e.g. 280 characters maximum).',
    explanationMarkdown: `### The .length Property
Every string has a \`.length\` property that returns the number of characters:

\`\`\`javascript
let password = "secretPassword123";
console.log(password.length); // 17
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Word Length',
      code: `let word = "JavaScript";
console.log(word.length);`,
      explanation: '• "JavaScript" has exactly 10 letters.',
      expectedOutput: '10'
    },
    exerciseSteps: [
      'Create `let codeWord = "Supercalifragilistic";`.',
      'Create `let count = codeWord.length;`.',
      'Print `count`.'
    ],
    initialCode: `let codeWord = "Supercalifragilistic";
let count = codeWord.length;
console.log(count);
`,
    solutionCode: `let codeWord = "Supercalifragilistic";
let count = codeWord.length;
console.log(count);
`,
    hints: ['Access `.length` with `codeWord.length`'],
    testCases: [{
      id: 'js-10-tc-1',
      description: 'count equals 20',
      testFn: 'typeof count !== "undefined" && count === 20'
    }]
  },

  // 11. Typeof Operator
  {
    id: 'js-11-typeof',
    title: '11. Checking Types with typeof',
    slug: 'typeof-operator',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 4,
    xp: 25,
    description: 'Inspect what type of data is stored in any variable using typeof.',
    concepts: ['typeof operator', 'Dynamic typing', 'Identifying data types'],
    analogy: 'A metal detector: you wave it over a container to find out what kind of material is inside.',
    explanationMarkdown: `### The typeof Operator
Use \`typeof\` before any value or variable to find its type:

\`\`\`javascript
console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
\`\`\`
`,
    workedExample: {
      title: 'Worked Example: Type Checking',
      code: `let val = 100;
console.log(typeof val);`,
      explanation: '• Returns the text "number".',
      expectedOutput: 'number'
    },
    exerciseSteps: [
      'Create `let active = true;`.',
      'Create `let resultType = typeof active;`.',
      'Print `resultType`.'
    ],
    initialCode: `let active = true;
let resultType = typeof active;
console.log(resultType);
`,
    solutionCode: `let active = true;
let resultType = typeof active;
console.log(resultType);
`,
    hints: ['Write `let resultType = typeof active;`'],
    testCases: [{
      id: 'js-11-tc-1',
      description: 'resultType equals "boolean"',
      testFn: 'typeof resultType !== "undefined" && resultType === "boolean"'
    }]
  },

  // 12. Module 1 Summary Challenge
  {
    id: 'js-12-module-1-review',
    title: '12. Module 1 Challenge: User Card Generator',
    slug: 'module-1-review',
    language: 'javascript',
    category: 'Module 1: Syntax & Variables',
    difficulty: 'Beginner',
    tier: 1,
    tierName: 'Foundations',
    estimatedMinutes: 6,
    xp: 35,
    description: 'Combine variables, constants, strings, numbers, and template literals into a profile card.',
    concepts: ['Review of let & const', 'String formatting', 'Putting concepts together'],
    analogy: 'Printing a new employee badge with their name, employee ID, and active status.',
    explanationMarkdown: `### Module 1 Review
You have learned:
* \`console.log\`
* \`let\` and \`const\`
* strings, numbers, booleans
* template literals (\` \`)

Let's combine them into an ID badge summary!
`,
    workedExample: {
      title: 'Worked Example: Badge Card',
      code: `const id = 101;
let username = "Aria";
let badge = \`ID: \${id} | User: \${username}\`;
console.log(badge);`,
      explanation: '• Combines id and username into a single formatted badge string.',
      expectedOutput: 'ID: 101 | User: Aria'
    },
    exerciseSteps: [
      'Create `const memberId = 404;`.',
      'Create `let handle = "coder_neo";`.',
      'Create `let card = `Member: ${handle} (ID: ${memberId})`;`.',
      'Print `card` to complete Module 1!'
    ],
    initialCode: `const memberId = 404;
let handle = "coder_neo";
let card = \`Member: \${handle} (ID: \${memberId})\`;
console.log(card);
`,
    solutionCode: `const memberId = 404;
let handle = "coder_neo";
let card = \`Member: \${handle} (ID: \${memberId})\`;
console.log(card);
`,
    hints: ['Format card as `` `Member: ${handle} (ID: ${memberId})` ``'],
    testCases: [{
      id: 'js-12-tc-1',
      description: 'card is "Member: coder_neo (ID: 404)"',
      testFn: 'typeof card !== "undefined" && card === "Member: coder_neo (ID: 404)"'
    }]
  }
];
