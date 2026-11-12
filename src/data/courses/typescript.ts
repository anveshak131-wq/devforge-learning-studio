import { Track } from '../../types';

export const TYPESCRIPT_TRACK: Track = {
  id: 'typescript',
  title: 'TypeScript: Beginner to Pro',
  slug: 'typescript',
  language: 'typescript',
  icon: 'ShieldCheck',
  color: 'from-indigo-400 to-cyan-500',
  tagline: 'Write safer, cleaner JavaScript by catching mistakes before your code even runs.',
  description: 'Master TypeScript step-by-step: understand type annotations, function contracts, interfaces, arrays, and generics.',
  lessons: [
    // LESSON 1: WHY TYPESCRIPT & STRING TYPES
    {
      id: 'ts-1-primitives',
      title: '1. What is TypeScript? Adding Types to Variables',
      slug: 'intro-primitives',
      language: 'typescript',
      category: '1. Type Basics',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 4,
      xp: 25,
      description: 'Discover how adding type labels prevents bugs and makes your code self-documenting.',
      concepts: ['What is TypeScript?', 'The : string annotation', 'Preventing type bugs'],
      analogy: 'Imagine labeled storage bins: one marked "Plastic", one marked "Glass". The label ensures nobody accidentally puts metal or liquids in the wrong box.',
      explanationMarkdown: `### Welcome to TypeScript!
TypeScript is JavaScript with **Type Checking**. In normal JavaScript, you can accidentally put a number into a variable meant for a person's name and cause errors.

In TypeScript, you tell the computer what type of data belongs in each variable:

\`\`\`typescript
let username: string = "Nova";
\`\`\`
If you ever try to assign a number to \`username\`, TypeScript warns you immediately!
`,
      workedExample: {
        title: 'Worked Example: Typed User Info',
        code: `let developerName: string = "Sarah";
console.log("Developer: " + developerName);`,
        explanation: '• : string tells TypeScript that developerName must always hold text.\n• console.log prints the result.',
        expectedOutput: 'Developer: Sarah'
      },
      commonMistakes: [
        'Trying to assign a number to a string variable (e.g. let name: string = 123;).',
        'Capitalizing String instead of lowercase string.'
      ],
      exerciseSteps: [
        'Declare a variable named `appName` with type `: string` and set it to `"DevForge"`.',
        'Print `appName` using `console.log(appName);`.'
      ],
      initialCode: `// 👉 Step 1: Declare appName with type string:
let appName: string = "DevForge";

// 👉 Step 2: Print it to the screen:
console.log(appName);
`,
      solutionCode: `let appName: string = "DevForge";
console.log(appName);
`,
      hints: [
        'Write `let appName: string = "DevForge";`',
        'Print with `console.log(appName);`'
      ],
      testCases: [
        {
          id: 'ts-1-tc-1',
          description: 'appName is declared as string "DevForge"',
          testFn: 'typeof appName !== "undefined" && appName === "DevForge"',
          expectedMessage: 'appName should be "DevForge"'
        },
        {
          id: 'ts-1-tc-2',
          description: 'Prints "DevForge" to console',
          testFn: 'logs.some(l => l.args.join(" ").includes("DevForge"))',
          expectedMessage: 'Make sure to print appName'
        }
      ]
    },

    // LESSON 2: NUMBERS AND BOOLEANS
    {
      id: 'ts-2-numbers-booleans',
      title: '2. Number and Boolean Types',
      slug: 'numbers-booleans',
      language: 'typescript',
      category: '1. Type Basics',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Work with numbers and true/false flags with complete type safety.',
      concepts: [': number type', ': boolean type', 'Type inference'],
      analogy: 'A light switch (boolean): it can only ever be ON (true) or OFF (false). It can never be "banana" or 42.',
      explanationMarkdown: `### Numbers and Booleans
The other two essential primitive types are:
* \`number\`: for integers and decimals (e.g. \`10\`, \`3.14\`)
* \`boolean\`: for true or false values

\`\`\`typescript
let userScore: number = 100;
let isLoggedIn: boolean = true;
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Product Inventory Status',
        code: `let productPrice: number = 29.99;
let inStock: boolean = true;

console.log("Price: $" + productPrice);
console.log("In Stock: " + inStock);`,
        explanation: '• productPrice is guaranteed to be a number.\n• inStock is guaranteed to be a boolean.',
        expectedOutput: 'Price: $29.99\nIn Stock: true'
      },
      commonMistakes: [
        'Putting quotes around numbers or booleans (e.g. "true" is a string, true is a boolean).'
      ],
      exerciseSteps: [
        'Declare `userAge: number = 22;`.',
        'Declare `hasLicense: boolean = true;`.',
        'Print both variables.'
      ],
      initialCode: `// 👉 Declare userAge as a number (22):
let userAge: number = 22;

// 👉 Declare hasLicense as a boolean (true):
let hasLicense: boolean = true;

console.log(userAge);
console.log(hasLicense);
`,
      solutionCode: `let userAge: number = 22;
let hasLicense: boolean = true;
console.log(userAge);
console.log(hasLicense);
`,
      hints: [
        'Write `let userAge: number = 22;`',
        'Write `let hasLicense: boolean = true;`'
      ],
      testCases: [
        {
          id: 'ts-2-tc-1',
          description: 'userAge is number 22 and hasLicense is boolean true',
          testFn: 'userAge === 22 && hasLicense === true',
          expectedMessage: 'userAge should be 22 and hasLicense should be true'
        }
      ]
    },

    // LESSON 3: TYPED FUNCTIONS
    {
      id: 'ts-3-functions',
      title: '3. Typed Functions: Inputs & Outputs',
      slug: 'typed-functions',
      language: 'typescript',
      category: '2. Functions & Contracts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 6,
      xp: 35,
      description: 'Define clear contracts for what parameters a function expects and what type it returns.',
      concepts: ['Parameter types (a: number)', 'Return type annotation (: number)', 'Compiler guarantees'],
      analogy: 'A vending machine with a strict coin slot: it only accepts quarters (number parameter), and guarantees it drops a snack (return type).',
      explanationMarkdown: `### Specifying Function Types
In TypeScript, you annotate both the parameters and the return type:

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}
\`\`\`
* \`(a: number, b: number)\` guarantees only numbers can be passed in.
* \`: number\` after the parentheses guarantees the function returns a number.
`,
      workedExample: {
        title: 'Worked Example: Greeting Builder',
        code: `function buildGreeting(name: string): string {
  return "Welcome, " + name + "!";
}

console.log(buildGreeting("Maya"));`,
        explanation: '• Expects a string parameter name.\n• Returns a string.\n• Prints "Welcome, Maya!".',
        expectedOutput: 'Welcome, Maya!'
      },
      commonMistakes: [
        'Returning a value that does not match the specified return type.'
      ],
      exerciseSteps: [
        'Define a function `multiply(x: number, y: number): number`.',
        'Inside the function, return `x * y`.',
        'Test it with `console.log(multiply(4, 5));`.'
      ],
      initialCode: `// 👉 Define multiply with typed parameters and return type:
function multiply(x: number, y: number): number {
  return x * y;
}

// Test it:
console.log(multiply(4, 5)); // Should print 20
`,
      solutionCode: `function multiply(x: number, y: number): number {
  return x * y;
}

console.log(multiply(4, 5));
`,
      hints: [
        'Write `function multiply(x: number, y: number): number { return x * y; }`'
      ],
      testCases: [
        {
          id: 'ts-3-tc-1',
          description: 'multiply(4, 5) returns 20',
          testFn: 'typeof multiply === "function" && multiply(4, 5) === 20',
          expectedMessage: 'multiply(4, 5) should return 20'
        }
      ]
    },

    // LESSON 4: TYPED ARRAYS
    {
      id: 'ts-4-arrays',
      title: '4. Typed Arrays: Lists of Data',
      slug: 'typed-arrays',
      language: 'typescript',
      category: '2. Functions & Contracts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 5,
      xp: 35,
      description: 'Ensure lists only contain items of the designated type using type[] syntax.',
      concepts: ['string[] array type', 'number[] array type', 'Preventing mixed data'],
      analogy: 'A coin roll for dimes: it can only hold 10-cent coins. You cannot slide a penny into a dime roll.',
      explanationMarkdown: `### Typed Arrays
Add brackets \`[]\` after any type to create an array of that type:

\`\`\`typescript
let scores: number[] = [95, 88, 100];
let names: string[] = ["Alice", "Bob"];
\`\`\`
If anyone tries to put a string into \`scores\`, TypeScript flags it immediately!
`,
      workedExample: {
        title: 'Worked Example: City Names List',
        code: `let cities: string[] = ["Tokyo", "London", "New York"];
console.log("First city: " + cities[0]);`,
        explanation: '• cities is an array of strings.\n• Accessing cities[0] returns "Tokyo".',
        expectedOutput: 'First city: Tokyo'
      },
      commonMistakes: [
        'Trying to mix types in a standard array without a union type.'
      ],
      exerciseSteps: [
        'Declare an array named `tags` with type `string[]` containing `"react"`, `"vue"`, `"angular"`.',
        'Print `tags[0]`.'
      ],
      initialCode: `// 👉 Declare tags as string[]:
const tags: string[] = ["react", "vue", "angular"];

console.log(tags[0]);
`,
      solutionCode: `const tags: string[] = ["react", "vue", "angular"];
console.log(tags[0]);
`,
      hints: [
        'Write `const tags: string[] = ["react", "vue", "angular"];`'
      ],
      testCases: [
        {
          id: 'ts-4-tc-1',
          description: 'tags is string[] containing 3 items',
          testFn: 'Array.isArray(tags) && tags.length === 3 && tags[0] === "react"',
          expectedMessage: 'tags should be an array of 3 strings'
        }
      ]
    },

    // LESSON 5: INTERFACES
    {
      id: 'ts-5-interfaces',
      title: '5. Interfaces: Describing Object Shapes',
      slug: 'interfaces',
      language: 'typescript',
      category: '3. Data Modeling',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 7,
      xp: 40,
      description: 'Create blueprints for objects so every property is checked and verified.',
      concepts: ['interface keyword', 'Object contracts', 'Property verification'],
      analogy: 'An architectural blueprint: every house built from the blueprint is guaranteed to have 2 doors, 4 windows, and a roof.',
      explanationMarkdown: `### What is an Interface?
An \`interface\` defines the shape that an object must have:

\`\`\`typescript
interface UserProfile {
  id: number;
  name: string;
  isAdmin: boolean;
}

let currentUser: UserProfile = {
  id: 1,
  name: "Sarah",
  isAdmin: true
};
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Product Interface',
        code: `interface Product {
  id: number;
  title: string;
  price: number;
}

let item: Product = {
  id: 101,
  title: "Mechanical Keyboard",
  price: 120
};

console.log(item.title + " - $" + item.price);`,
        explanation: '• Product specifies the required fields.\n• item satisfies all three requirements.',
        expectedOutput: 'Mechanical Keyboard - $120'
      },
      commonMistakes: [
        'Omitting a required property when creating the object.'
      ],
      exerciseSteps: [
        'Define an interface named `Book` with properties `title: string` and `pages: number`.',
        'Create a variable `myBook: Book = { title: "TypeScript Handbook", pages: 250 };`.',
        'Print `myBook.title`.'
      ],
      initialCode: `// 👉 Step 1: Define interface Book:
interface Book {
  title: string;
  pages: number;
}

// 👉 Step 2: Create myBook object:
const myBook: Book = {
  title: "TypeScript Handbook",
  pages: 250
};

console.log(myBook.title);
`,
      solutionCode: `interface Book {
  title: string;
  pages: number;
}

const myBook: Book = {
  title: "TypeScript Handbook",
  pages: 250
};

console.log(myBook.title);
`,
      hints: [
        'Define `interface Book { title: string; pages: number; }`'
      ],
      testCases: [
        {
          id: 'ts-5-tc-1',
          description: 'myBook has title and pages',
          testFn: 'typeof myBook === "object" && myBook.title === "TypeScript Handbook" && myBook.pages === 250',
          expectedMessage: 'myBook should have title: "TypeScript Handbook" and pages: 250'
        }
      ]
    },

    // LESSON 6: CAPSTONE & CERTIFICATE
    {
      id: 'ts-6-capstone-mastery',
      title: '6. Capstone Challenge: Type-Safe State Manager',
      slug: 'capstone-mastery',
      language: 'typescript',
      category: '4. Capstone Project',
      difficulty: 'Intermediate',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 10,
      xp: 60,
      description: 'Build a type-safe user score tracker using interfaces, typed functions, and arrays.',
      concepts: ['Combining TypeScript features', 'Generic functions', 'End-to-end type safety'],
      analogy: 'A bank vault transaction ledger where every deposit and withdrawal is verified by two automated audit checkers.',
      explanationMarkdown: `### You are Ready for TypeScript Mastery!
You have learned:
1. Primitive types (: string, : number, : boolean)
2. Typed function parameters and return types
3. Typed arrays (string[], number[])
4. Object contracts with interface

Now let's write a practical function that formats a user score badge safely!
`,
      workedExample: {
        title: 'Worked Example: Formatting User Card',
        code: `interface Player {
  name: string;
  score: number;
}

function formatBadge(p: Player): string {
  return p.name + " (Score: " + p.score + ")";
}

console.log(formatBadge({ name: "Alex", score: 95 }));`,
        explanation: '• formatBadge guarantees safe access to name and score.\n• Returns formatted string.',
        expectedOutput: 'Alex (Score: 95)'
      },
      commonMistakes: [
        'Returning undefined or forgetting the interface definition.'
      ],
      exerciseSteps: [
        'Look at interface `Member` with `username: string` and `xp: number`.',
        'Complete function `formatMemberStatus(member: Member): string`.',
        'Return `"{username} has {xp} XP"`.',
        'Pass all tests to complete TypeScript and claim your Certificate!'
      ],
      initialCode: `interface Member {
  username: string;
  xp: number;
}

// 👉 Format member status as "{username} has {xp} XP":
function formatMemberStatus(member: Member): string {
  return member.username + " has " + member.xp + " XP";
}

// Test it:
console.log(formatMemberStatus({ username: "Nova", xp: 500 }));
`,
      solutionCode: `interface Member {
  username: string;
  xp: number;
}

function formatMemberStatus(member: Member): string {
  return member.username + " has " + member.xp + " XP";
}

console.log(formatMemberStatus({ username: "Nova", xp: 500 }));
`,
      hints: [
        'Return `member.username + " has " + member.xp + " XP"`'
      ],
      testCases: [
        {
          id: 'ts-6-tc-1',
          description: 'formatMemberStatus returns "Nova has 500 XP"',
          testFn: 'typeof formatMemberStatus === "function" && formatMemberStatus({ username: "Nova", xp: 500 }) === "Nova has 500 XP"',
          expectedMessage: 'Should return "Nova has 500 XP"'
        }
      ]
    }
  ]
};
