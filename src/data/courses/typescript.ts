import { Track } from '../../types';

export const TYPESCRIPT_TRACK: Track = {
  id: 'typescript',
  title: 'TypeScript: Foundations to Type Gymnastics',
  slug: 'typescript',
  language: 'typescript',
  icon: 'ShieldCheck',
  color: 'from-blue-600 to-indigo-600',
  tagline: '5-tier static type system mastery: Learn contracts with worked examples first, then write type-safe code.',
  description: 'Level up your software engineering with TypeScript. Progress from primitive type annotations to interfaces, generic constraints, discriminated union state machines, and advanced conditional types with the infer keyword.',
  lessons: [
    // TIER 1: FOUNDATIONS (ABSOLUTE BEGINNER)
    {
      id: 'ts-t1-type-annotations',
      title: 'Foundations: Explicit Type Annotations & Tuples',
      slug: 'type-annotations',
      language: 'typescript',
      category: '1. Foundations',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 10,
      xp: 40,
      description: 'Learn the core philosophy of TypeScript: adding static compile-time type annotations to variables and functions.',
      concepts: ['Explicit type annotations (: string, : number)', 'Function return types', 'Fixed-length Tuples: [string, number, string]'],
      analogy: 'Imagine ordering at a drive-thru. In JavaScript, you can ask for "ice cream" and the kitchen might accidentally hand you a hot soup without warning. In TypeScript, every cup has a rigid shape template: if you try to pour soup into an ice cream cone, the compiler stops you before you even leave the counter!',
      explanationMarkdown: `
### Step 1: Why TypeScript?
JavaScript is dynamically typed, meaning type mistakes only crash your app when real users are using it.
TypeScript adds static type annotations that check your code as you type:

\`\`\`typescript
let username: string = "Elena";
let age: number = 25;
let isProMember: boolean = true;
\`\`\`

If you later try to write \`username = 42;\`, TypeScript gives you an instant red underline:
*Type 'number' is not assignable to type 'string'.*

---

### Step 2: Fixed-Length Tuples
A standard array \`number[]\` can have any length.
A **Tuple** is an array with an exact, fixed number of elements and specific types in each position:
\`\`\`typescript
// Exactly two elements: a string followed by a number
type ItemRecord = [string, number];
const product: ItemRecord = ["Keyboard", 79.99];
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Building a Coordinates Tuple',
        code: `// A tuple holding [CityName, Latitude, Longitude]
type GeoLocation = [string, number, number];

function formatLocation(loc: GeoLocation): string {
  const [city, lat, lng] = loc;
  return \`\${city} is at coordinates (\${lat}, \${lng})\`;
}

const tokyo: GeoLocation = ["Tokyo", 35.6762, 139.6503];
console.log(formatLocation(tokyo));`,
        explanation: '• GeoLocation guarantees position 0 is text, and positions 1 & 2 are numbers.\n• If someone tries to pass ["Tokyo", "North", 139], TypeScript prevents the bug at compile-time!',
        expectedOutput: 'Tokyo is at coordinates (35.6762, 139.6503)'
      },
      commonMistakes: [
        'Confusing lowercase primitive types (`string`, `number`, `boolean`) with wrapper objects (`String`, `Number`). Always use lowercase `string` and `number` in TypeScript!',
        'Trying to add a 4th element to a 3-element tuple.'
      ],
      exerciseSteps: [
        'Step 1: In `createScorecard(student: string, score: number, isPassing: boolean)`, return a 3-element tuple.',
        'Step 2: Position 0 is `student` (string).',
        'Step 3: Position 1 is `score` (number).',
        'Step 4: Position 2 is `isPassing ? "PASSED" : "FAILED"` (string).'
      ],
      initialCode: `function createScorecard(student: string, score: number, isPassing: boolean): [string, number, string] {
  // 👉 Return the 3-element tuple:
  return [student, score, isPassing ? "PASSED" : "FAILED"];
}

// 🧪 Test call:
console.log(createScorecard("Jordan", 88, true));
`,
      solutionCode: `function createScorecard(student: string, score: number, isPassing: boolean): [string, number, string] {
  return [student, score, isPassing ? "PASSED" : "FAILED"];
}

console.log(createScorecard("Jordan", 88, true));
`,
      hints: [
        'Return `[student, score, isPassing ? "PASSED" : "FAILED"]`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Returns correct tuple with PASSED status',
          testFn: `(() => {
            const res = createScorecard('Jordan', 88, true);
            return Array.isArray(res) && res[0] === 'Jordan' && res[1] === 88 && res[2] === 'PASSED';
          })()`,
          expectedMessage: 'Expected ["Jordan", 88, "PASSED"]'
        },
        {
          id: 'tc-2',
          description: 'Returns correct tuple with FAILED status',
          testFn: `(() => {
            const res = createScorecard('Sam', 45, false);
            return res[2] === 'FAILED';
          })()`,
          expectedMessage: 'Expected status "FAILED"'
        }
      ]
    },

    // TIER 2: CORE DEVELOPER
    {
      id: 'ts-t2-interfaces-contracts',
      title: 'Core: Data Contracts with Interfaces & Optional Fields',
      slug: 'interfaces-contracts',
      language: 'typescript',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Define robust shape contracts for data using interfaces, readonly modifiers, and optional fields.',
      concepts: ['interface keyword', 'Optional properties with ?', 'Readonly properties', 'Enforcing object shapes'],
      analogy: 'An interface is like an architectural blueprint. Before you start building a house, the blueprint specifies: it must have a roof, walls, and a front door. A swimming pool might be marked with a question mark (`pool?: boolean`) as optional.',
      explanationMarkdown: `
### What is an Interface?
An \`interface\` defines the exact contract an object must honor:

\`\`\`typescript
interface UserProfile {
  readonly id: string; // Cannot be modified after creation
  name: string;
  email: string;
  avatarUrl?: string;  // The '?' marks this field as optional!
}
\`\`\`

If any required property is missing or given the wrong type, TypeScript immediately notifies you.
      `,
      workedExample: {
        title: 'Worked Example: User Contact Card Contract',
        code: `interface Contact {
  name: string;
  phone: string;
  notes?: string; // Optional
}

function printContact(person: Contact): string {
  const noteInfo = person.notes ? \` (Note: \${person.notes})\` : "";
  return \`Contact: \${person.name} - \${person.phone}\${noteInfo}\`;
}

const c1: Contact = { name: "Alice", phone: "555-0199" };
console.log(printContact(c1));`,
        explanation: '• Contact defines name and phone as required, and notes as optional.\n• c1 does not have notes, but TypeScript accepts it happily because of the ? modifier.',
        expectedOutput: 'Contact: Alice - 555-0199'
      },
      commonMistakes: [
        'Trying to assign to a `readonly` property after initialization.',
        'Assuming optional properties are guaranteed to exist without checking `if (obj.prop)` first.'
      ],
      exerciseSteps: [
        'Step 1: Define an interface `Book` with properties: `title: string`, `author: string`, `pages: number`, `isRead?: boolean`.',
        'Step 2: Implement `summarizeBook(book: Book): string`.',
        'Step 3: Return `"{title} by {author} ({pages} pages) - {Read or Unread}"`.'
      ],
      initialCode: `interface Book {
  title: string;
  author: string;
  pages: number;
  isRead?: boolean;
}

function summarizeBook(book: Book): string {
  // 👉 Check isRead and format string:
  const status = book.isRead ? "Read" : "Unread";
  return \`\${book.title} by \${book.author} (\${book.pages} pages) - \${status}\`;
}

// 🧪 Test call:
console.log(summarizeBook({ title: "Atomic Habits", author: "James Clear", pages: 320, isRead: true }));
`,
      solutionCode: `interface Book {
  title: string;
  author: string;
  pages: number;
  isRead?: boolean;
}

function summarizeBook(book: Book): string {
  const status = book.isRead ? "Read" : "Unread";
  return \`\${book.title} by \${book.author} (\${book.pages} pages) - \${status}\`;
}
`,
      hints: [
        'Check `book.isRead ? "Read" : "Unread"`.',
        'Return `${book.title} by ${book.author} (${book.pages} pages) - ${status}`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Formats read book correctly',
          testFn: `summarizeBook({ title: 'Clean Code', author: 'Robert Martin', pages: 464, isRead: true }) === 'Clean Code by Robert Martin (464 pages) - Read'`,
          expectedMessage: 'Expected "Clean Code by Robert Martin (464 pages) - Read"'
        }
      ]
    },

    // TIER 3: INTERMEDIATE
    {
      id: 'ts-t3-generics-constraints',
      title: 'Intermediate: Generics & Keyof Property Constraints',
      slug: 'generics-constraints',
      language: 'typescript',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 20,
      xp: 75,
      description: 'Write flexible, reusable functions without using `any` and without losing type safety.',
      concepts: ['Generic type parameters (<T>)', 'Keyof operator', 'Generic constraints (extends)', 'Type preservation'],
      analogy: 'Imagine a shipping crate with a clear glass window. A generic `<T>` is like saying: "This crate can hold anything (bikes, apples, laptops), but whatever you put into it, the window remembers its exact type, so when you unpack it, you don\'t just get a mystery object — you get your exact laptop back!"',
      explanationMarkdown: `
### Why Generics?
If you write a function with \`any\`, TypeScript loses all ability to autocomplete or check properties:
\`\`\`typescript
function badWrap(item: any): any { return item; }
// badWrap("hello") returns any, so you lose autocomplete for string methods!
\`\`\`

With a **Generic Parameter \`<T>\`**, the type is preserved dynamically:
\`\`\`typescript
function wrapInArray<T>(item: T): T[] {
  return [item];
}
const nums = wrapInArray(42); // Type is number[]!
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Safely Reading Object Keys with keyof',
        code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", role: "Admin" };
const userName = getProperty(user, "name"); // Type is string!

console.log("Extracted property:", userName);`,
        explanation: '• K extends keyof T guarantees key must be one of "id", "name", or "role".\n• If you wrote getProperty(user, "password"), TypeScript immediately catches the error at compile-time!',
        expectedOutput: 'Extracted property: Alice'
      },
      commonMistakes: [
        'Using `any` instead of a generic parameter `<T>`.',
        'Over-complicating generics when standard interfaces would suffice.'
      ],
      exerciseSteps: [
        'Step 1: In `pluck<T, K extends keyof T>(items: T[], key: K): T[K][]`, map over `items`.',
        'Step 2: Return `item[key]` for each element in the array.',
        'Step 3: Click "Check Solution" to test extraction!'
      ],
      initialCode: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // 👉 Extract the value of property [key] from each item:
  return items.map(item => item[key]);
}

// 🧪 Test call:
const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
console.log("Plucked names:", pluck(users, "name"));
`,
      solutionCode: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}
`,
      hints: [
        'Map over items and return `item[key]`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Plucks string properties preserving types',
          testFn: `(() => {
            const arr = [{ x: 'one' }, { x: 'two' }];
            const res = pluck(arr, 'x');
            return Array.isArray(res) && res[0] === 'one' && res[1] === 'two';
          })()`,
          expectedMessage: 'Expected ["one", "two"]'
        }
      ]
    },

    // TIER 4: ADVANCED
    {
      id: 'ts-t4-discriminated-unions',
      title: 'Advanced: Discriminated Unions & Exhaustive Narrowing',
      slug: 'discriminated-unions',
      language: 'typescript',
      category: '4. Advanced Architecture',
      difficulty: 'Advanced',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 20,
      xp: 90,
      description: 'Model real-world state machines cleanly using tagged/discriminated unions and pattern matching.',
      concepts: ['Discriminated union pattern', 'Literal discriminant (kind/status)', 'Type narrowing via switch/if'],
      analogy: 'Imagine luggage tags at an airport. Every piece of luggage has a tag: "CarryOn", "CheckedBag", or "Oversized". As soon as baggage handlers see the tag "CarryOn", they instantly know without guessing that it has dimensions fitting into an overhead bin.',
      explanationMarkdown: `
### What is a Discriminated Union?
A discriminated union combines multiple object types that share a single common literal property (the "discriminant" or tag):

\`\`\`typescript
type NetworkState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; message: string };
\`\`\`

When you check \`if (state.status === 'success')\`, TypeScript automatically narrows the object so you can access \`state.data\` without any type casting!
      `,
      workedExample: {
        title: 'Worked Example: Notification Renderer State Machine',
        code: `type Notification =
  | { type: 'email'; address: string; subject: string }
  | { type: 'sms'; phoneNumber: string };

function dispatch(n: Notification): string {
  switch (n.type) {
    case 'email':
      return \`Sending Email to \${n.address}: "\${n.subject}"\`;
    case 'sms':
      return \`Sending SMS to \${n.phoneNumber}\`;
  }
}

console.log(dispatch({ type: 'sms', phoneNumber: '+1-555-0100' }));`,
        explanation: '• Inside case "email", TypeScript knows n has .address and .subject.\n• Inside case "sms", TypeScript knows n has .phoneNumber.\n• If you add a new type and forget to handle it, TypeScript warns you!',
        expectedOutput: 'Sending SMS to +1-555-0100'
      },
      commonMistakes: [
        'Forgetting the break or return statement inside a switch block.',
        'Not handling all possible cases in a union.'
      ],
      exerciseSteps: [
        'Step 1: Review the `Shape` union (`circle`, `square`, `rectangle`).',
        'Step 2: In `calculateArea(shape: Shape)` switch on `shape.kind`.',
        'Step 3: Return `Math.PI * shape.radius * shape.radius` for circle, `shape.size * shape.size` for square, and `shape.width * shape.height` for rectangle.'
      ],
      initialCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shape): number {
  // 👉 Switch on shape.kind to calculate area:
  switch (shape.kind) {
    case 'circle': return Math.PI * shape.radius * shape.radius;
    case 'square': return shape.size * shape.size;
    case 'rectangle': return shape.width * shape.height;
  }
}

// 🧪 Test call:
console.log("Square area:", calculateArea({ kind: 'square', size: 10 }));
console.log("Rectangle area:", calculateArea({ kind: 'rectangle', width: 7, height: 4 }));
`,
      solutionCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': return Math.PI * shape.radius * shape.radius;
    case 'square': return shape.size * shape.size;
    case 'rectangle': return shape.width * shape.height;
  }
}
`,
      hints: [
        'Switch on `shape.kind`.',
        'In `case "circle"`, TypeScript auto-narrows to radius.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Calculates square area accurately',
          testFn: `calculateArea({ kind: 'square', size: 10 }) === 100`,
          expectedMessage: 'Expected 10 * 10 = 100'
        },
        {
          id: 'tc-2',
          description: 'Calculates rectangle area accurately',
          testFn: `calculateArea({ kind: 'rectangle', width: 7, height: 4 }) === 28`,
          expectedMessage: 'Expected 7 * 4 = 28'
        }
      ]
    },

    // TIER 5: MASTERCLASS / EXPERT
    {
      id: 'ts-t5-conditional-infer-types',
      title: 'Masterclass: Conditional Types & The Infer Keyword',
      slug: 'conditional-infer-types',
      language: 'typescript',
      category: '5. Masterclass & Internals',
      difficulty: 'Expert',
      tier: 5,
      tierName: 'Masterclass',
      estimatedMinutes: 25,
      xp: 130,
      description: 'The pinnacle of TypeScript: write type-level functions using conditional types, the infer keyword, and type unboxing.',
      concepts: ['Conditional types (T extends U ? X : Y)', 'The infer keyword', 'Type extraction and unboxing', 'Type gymnastics'],
      analogy: 'Imagine an X-ray machine at a postal office. When a parcel comes through, you can\'t open it directly with your hands. Instead, the X-ray machine scans the inside: if it sees a Promise, it extracts the hidden diamond inside (`infer R`). If it is not a Promise, it leaves it as is.',
      explanationMarkdown: `
### Type-Level Programming: Conditional Types
Generic types in TypeScript can evaluate conditions using ternary syntax:

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<42>;      // false
\`\`\`

---

### The \`infer\` Keyword
\`infer\` allows you to extract an unknown type variable from within another type structure:

\`\`\`typescript
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
type X = UnwrapPromise<Promise<number>>; // Extracts: number!
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Unwrapping Nested Array Elements',
        code: `type ElementType<T> = T extends (infer U)[] ? U : T;

type StringList = string[];
type Unwrapped = ElementType<StringList>; // string

function logFirstItem<T>(items: T[]): T | null {
  return items.length > 0 ? items[0] : null;
}

console.log("Unwrapped item:", logFirstItem(["Alpha", "Beta"]));`,
        explanation: '• ElementType checks if T is an array of something.\n• infer U dynamically captures whatever type is inside the array and extracts it.',
        expectedOutput: 'Unwrapped item: Alpha'
      },
      commonMistakes: [
        'Using `infer` outside of the `extends` clause of a conditional type (it is only valid in the extends check).',
        'Creating overly deep recursive conditional types that can exceed the TypeScript compiler depth limit.'
      ],
      exerciseSteps: [
        'Step 1: In `unwrapApiResponse<T>(payload)`, check `if (payload.status === "success") return payload.data`. Else return `null`.',
        'Step 2: In `extractValueOrFallback<T, D>(val, fallback)`, return `val` if it is not null or undefined, else return `fallback`.'
      ],
      initialCode: `type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function unwrapApiResponse<T>(payload: ApiResponse<T>): T | null {
  // 👉 Step 1: Return data if status is success, otherwise null:
  if (payload.status === 'success') {
    return payload.data;
  }
  return null;
}

function extractValueOrFallback<T, D>(val: T | null | undefined, fallback: D): T | D {
  // 👉 Step 2: Return val if not null/undefined, else fallback:
  return val !== null && val !== undefined ? val : fallback;
}

// 🧪 Test call:
const good = unwrapApiResponse({ status: 'success', data: { score: 99 } });
console.log("Extracted score:", extractValueOrFallback(good?.score, 0));
`,
      solutionCode: `type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function unwrapApiResponse<T>(payload: ApiResponse<T>): T | null {
  if (payload.status === 'success') {
    return payload.data;
  }
  return null;
}

function extractValueOrFallback<T, D>(val: T | null | undefined, fallback: D): T | D {
  return val !== null && val !== undefined ? val : fallback;
}
`,
      hints: [
        'Check `if (payload.status === "success") return payload.data; else return null;`.',
        'In extractValueOrFallback, check `val !== null && val !== undefined ? val : fallback`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Unwraps data from success response',
          testFn: `(() => {
            const res = unwrapApiResponse({ status: 'success', data: 'TOKEN_123' });
            return res === 'TOKEN_123';
          })()`,
          expectedMessage: 'Expected "TOKEN_123"'
        },
        {
          id: 'tc-2',
          description: 'Returns fallback on error or null payload',
          testFn: `(() => {
            const errRes = unwrapApiResponse({ status: 'error', error: '404' });
            const val = extractValueOrFallback(errRes, 'DEFAULT');
            return val === 'DEFAULT';
          })()`,
          expectedMessage: 'Expected fallback "DEFAULT"'
        }
      ]
    }
  ]
};
