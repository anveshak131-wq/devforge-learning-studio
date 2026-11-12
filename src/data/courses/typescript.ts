import { Track } from '../../types';

export const TYPESCRIPT_TRACK: Track = {
  id: 'typescript',
  title: 'TypeScript Professional Architecture',
  slug: 'typescript',
  language: 'typescript',
  icon: 'ShieldCheck',
  color: 'from-blue-600 to-indigo-600',
  tagline: 'Catch bugs at compile-time with robust static types, generics, and utility types.',
  description: 'Level up from JavaScript to type-safe software engineering. Learn interfaces, discriminated unions, generic constraints, narrowing, and advanced utility types with instant live transpilation.',
  lessons: [
    {
      id: 'ts-1-interfaces-types',
      title: 'Strong Typing: Interfaces & Optional Properties',
      slug: 'interfaces-type-aliases',
      language: 'typescript',
      category: 'Type Foundations',
      difficulty: 'Beginner',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Define robust shape contracts for data using interfaces, readonly modifiers, and optional fields.',
      concepts: ['interface keyword', 'Optional properties (?)', 'Readonly fields', 'Function contracts'],
      explanationMarkdown: `
### Why TypeScript?
JavaScript is dynamically typed, meaning type errors only surface at runtime. TypeScript provides compile-time guarantees:

\`\`\`typescript
interface UserProfile {
  readonly id: string;
  name: string;
  email: string;
  avatarUrl?: string; // Optional
}

function printUser(user: UserProfile): string {
  return \`User: \${user.name} (\${user.email})\`;
}
\`\`\`

#### Challenge:
1. Define an interface named \`Book\` with properties:
   - \`title\`: string
   - \`author\`: string
   - \`pages\`: number
   - \`isRead\` (optional): boolean
2. Implement a function \`summarizeBook(book: Book): string\` that returns:
   - \`"{title} by {author} ({pages} pages) - Read"\` if \`isRead\` is true
   - \`"{title} by {author} ({pages} pages) - Unread"\` otherwise
      `,
      initialCode: `// Define the Book interface
interface Book {
  // your code here
}

// Implement summarizeBook
function summarizeBook(book: any): string {
  // your implementation
}

const b1 = { title: "Atomic Habits", author: "James Clear", pages: 320, isRead: true };
console.log(summarizeBook(b1));
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

const b1: Book = { title: "Atomic Habits", author: "James Clear", pages: 320, isRead: true };
console.log(summarizeBook(b1));
`,
      hints: [
        'Define interface Book with title: string, author: string, pages: number, isRead?: boolean.',
        'In summarizeBook, check `book.isRead ? "Read" : "Unread"` and interpolate into the template string.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Correctly summarizes read book',
          testFn: `summarizeBook({ title: 'Clean Code', author: 'Robert Martin', pages: 464, isRead: true }) === 'Clean Code by Robert Martin (464 pages) - Read'`,
          expectedMessage: 'Expected "Clean Code by Robert Martin (464 pages) - Read"'
        },
        {
          id: 'tc-2',
          description: 'Defaults to Unread if isRead is omitted or false',
          testFn: `summarizeBook({ title: 'Refactoring', author: 'Martin Fowler', pages: 448 }) === 'Refactoring by Martin Fowler (448 pages) - Unread'`,
          expectedMessage: 'Expected "Refactoring by Martin Fowler (448 pages) - Unread"'
        }
      ]
    },
    {
      id: 'ts-2-discriminated-unions',
      title: 'Discriminated Unions & Exhaustive Narrowing',
      slug: 'discriminated-unions',
      language: 'typescript',
      category: 'Type Safety',
      difficulty: 'Intermediate',
      estimatedMinutes: 18,
      xp: 70,
      description: 'Model real-world state machines cleanly using tagged/discriminated unions and pattern matching.',
      concepts: ['Union types (|)', 'Literal types', 'Discriminant property (tag)', 'Narrowing with switch/if'],
      explanationMarkdown: `
### What is a Discriminated Union?
A pattern where multiple object types share a common single-value property (the "discriminant"), allowing TypeScript to automatically narrow down the type inside conditional blocks:

\`\`\`typescript
type NetworkState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; message: string };

function renderState(state: NetworkState) {
  switch (state.status) {
    case 'loading': return 'Fetching...';
    case 'success': return \`Items count: \${state.data.length}\`;
    case 'error': return \`Error: \${state.message}\`;
    case 'idle': return 'Ready';
  }
}
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
  // Use switch(shape.kind) to calculate and return area
  
}

console.log("Circle area:", calculateArea({ kind: 'circle', radius: 5 }));
console.log("Square area:", calculateArea({ kind: 'square', size: 4 }));
console.log("Rectangle area:", calculateArea({ kind: 'rectangle', width: 6, height: 3 }));
`,
      solutionCode: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
  }
}
`,
      hints: [
        'Switch on shape.kind.',
        'Inside `case "circle"`, TypeScript knows `shape` has `.radius`.',
        'Inside `case "rectangle"`, TypeScript knows `shape` has `.width` and `.height`.'
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
        },
        {
          id: 'tc-3',
          description: 'Calculates circle area within tolerance',
          testFn: `Math.abs(calculateArea({ kind: 'circle', radius: 10 }) - 314.159) < 0.1`,
          expectedMessage: 'Expected circle area ~314.159'
        }
      ]
    },
    {
      id: 'ts-3-generics-constraints',
      title: 'Generics & Constraints: Reusable Type Abstractions',
      slug: 'generics-constraints',
      language: 'typescript',
      category: 'Advanced Architecture',
      difficulty: 'Intermediate',
      estimatedMinutes: 20,
      xp: 85,
      description: 'Write flexible, reusable functions and data structures without losing type specificity.',
      concepts: ['Generic type parameters (<T>)', 'Generic constraints (extends)', 'Keyof operator', 'Type inference'],
      explanationMarkdown: `
### Why Generics?
Generics allow functions and classes to work over a variety of types while preserving type safety (unlike using \`any\`):

\`\`\`typescript
function wrapInArray<T>(value: T): T[] {
  return [value];
}

interface HasId {
  id: string | number;
}

function findById<T extends HasId>(items: T[], id: string | number): T | undefined {
  return items.find(item => item.id === id);
}
\`\`\`

#### Challenge:
Implement a generic function \`pluck<T, K extends keyof T>(items: T[], key: K): T[K][]\` that extracts the value of a specified property from an array of objects.
      `,
      initialCode: `// Implement generic pluck function
function pluck(items: any[], key: any): any[] {
  // your implementation
}

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "member" },
  { id: 3, name: "Charlie", role: "guest" }
];

const names = pluck(users, "name");
console.log("Plucked names:", names);
`,
      solutionCode: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "member" },
  { id: 3, name: "Charlie", role: "guest" }
];

const names = pluck(users, "name");
console.log("Plucked names:", names);
`,
      hints: [
        'The signature is `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][]`',
        'In the body, return `items.map(item => item[key]);`'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Extracts string values correctly',
          testFn: `(() => {
            const arr = [{ x: 'one' }, { x: 'two' }];
            const res = pluck(arr, 'x');
            return Array.isArray(res) && res[0] === 'one' && res[1] === 'two';
          })()`,
          expectedMessage: 'Expected ["one", "two"]'
        },
        {
          id: 'tc-2',
          description: 'Extracts numeric values correctly',
          testFn: `(() => {
            const arr = [{ val: 10 }, { val: 20 }, { val: 30 }];
            const res = pluck(arr, 'val');
            return res.length === 3 && res[0] === 10 && res[2] === 30;
          })()`,
          expectedMessage: 'Expected [10, 20, 30]'
        }
      ]
    },
    {
      id: 'ts-4-utility-types',
      title: 'Advanced Utility Types: Partial, Pick, Omit & Record',
      slug: 'utility-types',
      language: 'typescript',
      category: 'Advanced Architecture',
      difficulty: 'Advanced',
      estimatedMinutes: 20,
      xp: 95,
      description: 'Master TypeScript standard utility types for data transformation and mutation contracts.',
      concepts: ['Partial<T>', 'Required<T>', 'Pick<T, K>', 'Omit<T, K>', 'Record<K, V>'],
      explanationMarkdown: `
### TypeScript Standard Utility Types
TypeScript provides built-in transformations:
- \`Partial<T>\`: Makes all properties optional (great for update payloads).
- \`Pick<T, Keys>\`: Selects a subset of properties from T.
- \`Omit<T, Keys>\`: Removes specific properties from T.
- \`Record<Keys, Type>\`: Constructs an object type with specified key and value types.

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

type UserUpdateDTO = Partial<Omit<User, 'id' | 'passwordHash'>>;
\`\`\`

#### Challenge:
Given an interface \`Article\`:
\`\`\`typescript
interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
}
\`\`\`
1. Write a function \`createArticleDraft(input: Pick<Article, 'title' | 'content'>): Article\` that takes only \`title\` and \`content\`, generates a default \`id\` (e.g. \`"art-" + Date.now()\`), sets \`author: "Anonymous"\`, and \`published: false\`.
2. Write a function \`updateArticle(article: Article, changes: Partial<Omit<Article, 'id'>>): Article\` that applies the changes without allowing the \`id\` to be changed.
      `,
      initialCode: `interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
}

function createArticleDraft(input: Pick<Article, 'title' | 'content'>): Article {
  // your implementation
}

function updateArticle(article: Article, changes: Partial<Omit<Article, 'id'>>): Article {
  // your implementation
}

const draft = createArticleDraft({ title: "TypeScript Rocks", content: "..." });
console.log("Created draft:", draft);
const updated = updateArticle(draft, { published: true });
console.log("Updated article:", updated);
`,
      solutionCode: `interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
}

function createArticleDraft(input: Pick<Article, 'title' | 'content'>): Article {
  return {
    id: "art-1",
    title: input.title,
    content: input.content,
    author: "Anonymous",
    published: false
  };
}

function updateArticle(article: Article, changes: Partial<Omit<Article, 'id'>>): Article {
  return {
    ...article,
    ...changes,
    id: article.id // ensure id cannot be overwritten
  };
}
`,
      hints: [
        'createArticleDraft returns an object with all Article fields: { id: "art-1", title: input.title, content: input.content, author: "Anonymous", published: false }.',
        'updateArticle returns { ...article, ...changes, id: article.id }.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'createArticleDraft sets default author and published to false',
          testFn: `(() => {
            const draft = createArticleDraft({ title: 'My Post', content: 'Hello' });
            return draft.title === 'My Post' && draft.author === 'Anonymous' && draft.published === false;
          })()`,
          expectedMessage: 'Expected default author: Anonymous and published: false'
        },
        {
          id: 'tc-2',
          description: 'updateArticle merges updates while preserving id',
          testFn: `(() => {
            const orig: Article = { id: 'fixed-id', title: 'Old', content: 'Old', author: 'Dan', published: false };
            const next = updateArticle(orig, { title: 'New Title', published: true });
            return next.id === 'fixed-id' && next.title === 'New Title' && next.published === true && next.author === 'Dan';
          })()`,
          expectedMessage: 'Expected title updated to New Title and id preserved'
        }
      ]
    }
  ]
};
