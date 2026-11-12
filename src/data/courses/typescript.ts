import { Track } from '../../types';

export const TYPESCRIPT_TRACK: Track = {
  id: 'typescript',
  title: 'TypeScript: Foundations to Type Gymnastics',
  slug: 'typescript',
  language: 'typescript',
  icon: 'ShieldCheck',
  color: 'from-blue-600 to-indigo-600',
  tagline: '5-tier static type system mastery: from annotations to generics, utility types, and conditional infer types.',
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
      concepts: ['Explicit type annotations (string, number, boolean)', 'Function return types', 'Tuples: [number, string]'],
      explanationMarkdown: `
### What is TypeScript?
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It catches bugs before your code runs!

\`\`\`typescript
const port: number = 3000;
const appName: string = "DevForge";

function calculateTax(subtotal: number, taxRate: number = 0.08): number {
  return subtotal * taxRate;
}
\`\`\`

#### Fixed-Length Tuples:
A tuple is an array with fixed positions and specific types:
\`\`\`typescript
type LatLng = [number, number];
const coords: LatLng = [37.7749, -122.4194];
\`\`\`

#### Challenge:
Implement a function \`createScorecard(student: string, score: number, isPassing: boolean): [string, number, string]\` that returns a tuple:
\`[student, score, isPassing ? "PASSED" : "FAILED"]\`.
      `,
      initialCode: `function createScorecard(student: string, score: number, isPassing: boolean): [string, number, string] {
  // Return the typed 3-element tuple
  
}

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
      title: 'Core: Interfaces, Optional Properties & Readonly',
      slug: 'interfaces-contracts',
      language: 'typescript',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Define robust shape contracts for data using interfaces, readonly modifiers, and optional fields.',
      concepts: ['interface keyword', 'Optional properties (?)', 'Readonly fields', 'Type safety'],
      explanationMarkdown: `
### Data Shape Contracts
Interfaces define the exact structure an object must satisfy:

\`\`\`typescript
interface UserProfile {
  readonly id: string;
  name: string;
  avatarUrl?: string; // Optional
}
\`\`\`

#### Challenge:
1. Define an interface \`Book\`:
   - \`title\`: string
   - \`author\`: string
   - \`pages\`: number
   - \`isRead\` (optional): boolean
2. Implement \`summarizeBook(book: Book): string\` that returns:
   - \`"{title} by {author} ({pages} pages) - Read"\` if \`isRead\` is true
   - \`"{title} by {author} ({pages} pages) - Unread"\` otherwise
      `,
      initialCode: `interface Book {
  title: string;
  author: string;
  pages: number;
  isRead?: boolean;
}

function summarizeBook(book: Book): string {
  // your implementation
}

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
        'Interpolate into template string `${book.title} by ${book.author} (${book.pages} pages) - ${status}`.'
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
      title: 'Intermediate: Generics & Keyof Constraints',
      slug: 'generics-constraints',
      language: 'typescript',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 20,
      xp: 75,
      description: 'Write flexible, reusable functions and data structures without losing type specificity.',
      concepts: ['Generic type parameters (<T>)', 'Generic constraints (extends)', 'Keyof operator', 'Type inference'],
      explanationMarkdown: `
### Why Generics?
Generics allow functions to work across arbitrary types while preserving concrete type safety (unlike using \`any\`):

\`\`\`typescript
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}
\`\`\`

#### Challenge:
Implement the generic function \`pluck<T, K extends keyof T>(items: T[], key: K): T[K][]\` that extracts the value of a specified property from an array of objects.
      `,
      initialCode: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // your implementation
}

const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
console.log(pluck(users, "name"));
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
      explanationMarkdown: `
### Discriminated Unions
A pattern where multiple object types share a common single-value property (the "discriminant"), allowing TypeScript to automatically narrow down the type inside conditional blocks:

\`\`\`typescript
type NetworkState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; message: string };
\`\`\`

#### Challenge:
Given a geometric shape union:
\`\`\`typescript
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };
\`\`\`
Implement \`calculateArea(shape: Shape): number\`:
- Circle: \`Math.PI * radius * radius\`
- Square: \`size * size\`
- Rectangle: \`width * height\`
      `,
      initialCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shape): number {
  // your implementation
}
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
      description: 'The pinnacle of TypeScript: write type-level functions using conditional types, the infer keyword, and recursive type unwrapping.',
      concepts: ['Conditional types (T extends U ? X : Y)', 'The infer keyword', 'Unwrapping Promise / Array types', 'Type Gymnastics'],
      explanationMarkdown: `
### Type-Level Programming: Conditional Types
Just as functions in JavaScript take values and return values, generic types in TypeScript can take types and return types conditionally!

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<42>;      // false
\`\`\`

#### The \`infer\` Keyword
\`infer\` allows you to extract an unknown type variable from within another type structure:

\`\`\`typescript
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
type X = UnwrapPromise<Promise<number>>; // number
\`\`\`

#### Challenge:
Create a function \`unwrapApiResponse<T>(payload: { status: 'success'; data: T } | { status: 'error'; error: string }): T | null\` that returns \`payload.data\` if \`status === 'success'\`, or \`null\` if \`status === 'error'\`.
Also implement a helper function \`extractValueOrFallback<T, D>(val: T | null | undefined, fallback: D): T | D\` that returns \`val\` when not null/undefined, otherwise \`fallback\`.
      `,
      initialCode: `type ApiResponse<T> =
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

// Test call:
const good = unwrapApiResponse({ status: 'success', data: { score: 99 } });
console.log("Unwrapped:", extractValueOrFallback(good?.score, 0));
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
