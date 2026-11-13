import { Lesson } from '../../../types';

export const tsModule10Lessons: Lesson[] = [
  {
    "id": "ts-105-utility-partialt-all-prop",
    "title": "105. Utility: Partial<T> (All Properties Optional)",
    "slug": "utility-partialt-all-propertie",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Partial<T> (All Properties Optional) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Partial<T> (All Properties Optional)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface User { id: number; name: string; email: string; } function updateUser(id: number, fields: Partial<User>): number { return id; } let res = updateUser(1, { name: 'New Name' });\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Partial<T> (All Properties Optional)",
      "code": "interface User { id: number; name: string; email: string; } function updateUser(id: number, fields: Partial<User>): number { return id; } let res = updateUser(1, { name: 'New Name' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface User { id: number; name: string; email: string; } function updateUser(id: number, fields: Partial<User>): number { return id; } let res = updateUser(1, { name: 'New Name' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface User { id: number; name: string; email: string; } function updateUser(id: number, fields: Partial<User>): number { return id; } let res = updateUser(1, { name: 'New Name' });\n",
    "hints": [
      "Write: interface User { id: number; name: string; email: string; } function updateUser(id: number, fields: Partial<User>): number { return id; } let res = updateUser(1, { name: 'New Name' });"
    ],
    "testCases": [
      {
        "id": "ts-105-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Partial<T> (All Properties Optional)",
        "testFn": "res === 1"
      }
    ]
  },
  {
    "id": "ts-106-utility-requiredt-all-pro",
    "title": "106. Utility: Required<T> (All Properties Mandatory)",
    "slug": "utility-requiredt-all-properti",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Required<T> (All Properties Mandatory) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Required<T> (All Properties Mandatory)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Props { theme?: string; fontSize?: number; } type StrictProps = Required<Props>; let p: StrictProps = { theme: 'dark', fontSize: 16 };\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Required<T> (All Properties Mandatory)",
      "code": "interface Props { theme?: string; fontSize?: number; } type StrictProps = Required<Props>; let p: StrictProps = { theme: 'dark', fontSize: 16 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Props { theme?: string; fontSize?: number; } type StrictProps = Required<Props>; let p: StrictProps = { theme: 'dark', fontSize: 16 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Props { theme?: string; fontSize?: number; } type StrictProps = Required<Props>; let p: StrictProps = { theme: 'dark', fontSize: 16 };\n",
    "hints": [
      "Write: interface Props { theme?: string; fontSize?: number; } type StrictProps = Required<Props>; let p: StrictProps = { theme: 'dark', fontSize: 16 };"
    ],
    "testCases": [
      {
        "id": "ts-106-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Required<T> (All Properties Mandatory)",
        "testFn": "p.theme === 'dark' && p.fontSize === 16"
      }
    ]
  },
  {
    "id": "ts-107-utility-readonlyt-locking",
    "title": "107. Utility: Readonly<T> (Locking Mutations)",
    "slug": "utility-readonlyt-locking-muta",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Readonly<T> (Locking Mutations) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Readonly<T> (Locking Mutations)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Point { x: number; y: number; } const pt: Readonly<Point> = { x: 10, y: 20 };\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Readonly<T> (Locking Mutations)",
      "code": "interface Point { x: number; y: number; } const pt: Readonly<Point> = { x: 10, y: 20 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Point { x: number; y: number; } const pt: Readonly<Point> = { x: 10, y: 20 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Point { x: number; y: number; } const pt: Readonly<Point> = { x: 10, y: 20 };\n",
    "hints": [
      "Write: interface Point { x: number; y: number; } const pt: Readonly<Point> = { x: 10, y: 20 };"
    ],
    "testCases": [
      {
        "id": "ts-107-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Readonly<T> (Locking Mutations)",
        "testFn": "pt.x === 10"
      }
    ]
  },
  {
    "id": "ts-108-utility-recordk,-v-key-va",
    "title": "108. Utility: Record<K, V> (Key-Value Dictionary Map)",
    "slug": "utility-recordk,-v-key-value-d",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Record<K, V> (Key-Value Dictionary Map) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Record<K, V> (Key-Value Dictionary Map)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Role = 'admin' | 'user' | 'guest'; const rolePermissions: Record<Role, string[]> = { admin: ['read', 'write'], user: ['read'], guest: [] };\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Record<K, V> (Key-Value Dictionary Map)",
      "code": "type Role = 'admin' | 'user' | 'guest'; const rolePermissions: Record<Role, string[]> = { admin: ['read', 'write'], user: ['read'], guest: [] };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Role = 'admin' | 'user' | 'guest'; const rolePermissions: Record<Role, string[]> = { admin: ['read', 'write'], user: ['read'], guest: [] };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Role = 'admin' | 'user' | 'guest'; const rolePermissions: Record<Role, string[]> = { admin: ['read', 'write'], user: ['read'], guest: [] };\n",
    "hints": [
      "Write: type Role = 'admin' | 'user' | 'guest'; const rolePermissions: Record<Role, string[]> = { admin: ['read', 'write'], user: ['read'], guest: [] };"
    ],
    "testCases": [
      {
        "id": "ts-108-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Record<K, V> (Key-Value Dictionary Map)",
        "testFn": "rolePermissions.admin.length === 2"
      }
    ]
  },
  {
    "id": "ts-109-utility-pickt,-k-extracti",
    "title": "109. Utility: Pick<T, K> (Extracting Subset of Keys)",
    "slug": "utility-pickt,-k-extracting-su",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Pick<T, K> (Extracting Subset of Keys) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Pick<T, K> (Extracting Subset of Keys)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Article { id: number; title: string; content: string; author: string; } type ArticlePreview = Pick<Article, 'id' | 'title'>; let prev: ArticlePreview = { id: 1, title: 'Learn TS' };\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Pick<T, K> (Extracting Subset of Keys)",
      "code": "interface Article { id: number; title: string; content: string; author: string; } type ArticlePreview = Pick<Article, 'id' | 'title'>; let prev: ArticlePreview = { id: 1, title: 'Learn TS' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Article { id: number; title: string; content: string; author: string; } type ArticlePreview = Pick<Article, 'id' | 'title'>; let prev: ArticlePreview = { id: 1, title: 'Learn TS' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Article { id: number; title: string; content: string; author: string; } type ArticlePreview = Pick<Article, 'id' | 'title'>; let prev: ArticlePreview = { id: 1, title: 'Learn TS' };\n",
    "hints": [
      "Write: interface Article { id: number; title: string; content: string; author: string; } type ArticlePreview = Pick<Article, 'id' | 'title'>; let prev: ArticlePreview = { id: 1, title: 'Learn TS' };"
    ],
    "testCases": [
      {
        "id": "ts-109-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Pick<T, K> (Extracting Subset of Keys)",
        "testFn": "prev.id === 1 && prev.title === 'Learn TS'"
      }
    ]
  },
  {
    "id": "ts-110-utility-omitt,-k-excludin",
    "title": "110. Utility: Omit<T, K> (Excluding Specific Keys)",
    "slug": "utility-omitt,-k-excluding-spe",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Omit<T, K> (Excluding Specific Keys) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Omit<T, K> (Excluding Specific Keys)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface User { id: number; name: string; passwordHash: string; } type SafeUser = Omit<User, 'passwordHash'>; let safe: SafeUser = { id: 1, name: 'Alice' };\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Omit<T, K> (Excluding Specific Keys)",
      "code": "interface User { id: number; name: string; passwordHash: string; } type SafeUser = Omit<User, 'passwordHash'>; let safe: SafeUser = { id: 1, name: 'Alice' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface User { id: number; name: string; passwordHash: string; } type SafeUser = Omit<User, 'passwordHash'>; let safe: SafeUser = { id: 1, name: 'Alice' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface User { id: number; name: string; passwordHash: string; } type SafeUser = Omit<User, 'passwordHash'>; let safe: SafeUser = { id: 1, name: 'Alice' };\n",
    "hints": [
      "Write: interface User { id: number; name: string; passwordHash: string; } type SafeUser = Omit<User, 'passwordHash'>; let safe: SafeUser = { id: 1, name: 'Alice' };"
    ],
    "testCases": [
      {
        "id": "ts-110-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Omit<T, K> (Excluding Specific Keys)",
        "testFn": "safe.id === 1 && safe.name === 'Alice'"
      }
    ]
  },
  {
    "id": "ts-111-utility-excludet,-u-remov",
    "title": "111. Utility: Exclude<T, U> (Removing Members from Union)",
    "slug": "utility-excludet,-u-removing-m",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Exclude<T, U> (Removing Members from Union) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Exclude<T, U> (Removing Members from Union)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype T0 = 'a' | 'b' | 'c'; type T1 = Exclude<T0, 'a'>; let letter: T1 = 'b';\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Exclude<T, U> (Removing Members from Union)",
      "code": "type T0 = 'a' | 'b' | 'c'; type T1 = Exclude<T0, 'a'>; let letter: T1 = 'b';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type T0 = 'a' | 'b' | 'c'; type T1 = Exclude<T0, 'a'>; let letter: T1 = 'b';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type T0 = 'a' | 'b' | 'c'; type T1 = Exclude<T0, 'a'>; let letter: T1 = 'b';\n",
    "hints": [
      "Write: type T0 = 'a' | 'b' | 'c'; type T1 = Exclude<T0, 'a'>; let letter: T1 = 'b';"
    ],
    "testCases": [
      {
        "id": "ts-111-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Exclude<T, U> (Removing Members from Union)",
        "testFn": "letter === 'b'"
      }
    ]
  },
  {
    "id": "ts-112-utility-extractt,-u-selec",
    "title": "112. Utility: Extract<T, U> (Selecting Overlapping Union Types)",
    "slug": "utility-extractt,-u-selecting-",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Extract<T, U> (Selecting Overlapping Union Types) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Extract<T, U> (Selecting Overlapping Union Types)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype T0 = 'a' | 'b' | 'c'; type T1 = Extract<T0, 'a' | 'f'>; let letter: T1 = 'a';\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Extract<T, U> (Selecting Overlapping Union Types)",
      "code": "type T0 = 'a' | 'b' | 'c'; type T1 = Extract<T0, 'a' | 'f'>; let letter: T1 = 'a';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type T0 = 'a' | 'b' | 'c'; type T1 = Extract<T0, 'a' | 'f'>; let letter: T1 = 'a';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type T0 = 'a' | 'b' | 'c'; type T1 = Extract<T0, 'a' | 'f'>; let letter: T1 = 'a';\n",
    "hints": [
      "Write: type T0 = 'a' | 'b' | 'c'; type T1 = Extract<T0, 'a' | 'f'>; let letter: T1 = 'a';"
    ],
    "testCases": [
      {
        "id": "ts-112-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Extract<T, U> (Selecting Overlapping Union Types)",
        "testFn": "letter === 'a'"
      }
    ]
  },
  {
    "id": "ts-113-utility-nonnullablet-stri",
    "title": "113. Utility: NonNullable<T> (Stripping null and undefined)",
    "slug": "utility-nonnullablet-stripping",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: NonNullable<T> (Stripping null and undefined) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: NonNullable<T> (Stripping null and undefined)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Nullable = string | number | null | undefined; type Pure = NonNullable<Nullable>; let val: Pure = 'clean';\n```",
    "workedExample": {
      "title": "Worked Example: Utility: NonNullable<T> (Stripping null and undefined)",
      "code": "type Nullable = string | number | null | undefined; type Pure = NonNullable<Nullable>; let val: Pure = 'clean';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Nullable = string | number | null | undefined; type Pure = NonNullable<Nullable>; let val: Pure = 'clean';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Nullable = string | number | null | undefined; type Pure = NonNullable<Nullable>; let val: Pure = 'clean';\n",
    "hints": [
      "Write: type Nullable = string | number | null | undefined; type Pure = NonNullable<Nullable>; let val: Pure = 'clean';"
    ],
    "testCases": [
      {
        "id": "ts-113-tc-1",
        "description": "TypeScript compiles and satisfies Utility: NonNullable<T> (Stripping null and undefined)",
        "testFn": "val === 'clean'"
      }
    ]
  },
  {
    "id": "ts-114-utility-parameterst-extra",
    "title": "114. Utility: Parameters<T> (Extracting Function Argument Tuple)",
    "slug": "utility-parameterst-extracting",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Parameters<T> (Extracting Function Argument Tuple) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Parameters<T> (Extracting Function Argument Tuple)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction save(id: string, count: number): boolean { return true; } type SaveArgs = Parameters<typeof save>; let args: SaveArgs = ['item-1', 5];\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Parameters<T> (Extracting Function Argument Tuple)",
      "code": "function save(id: string, count: number): boolean { return true; } type SaveArgs = Parameters<typeof save>; let args: SaveArgs = ['item-1', 5];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function save(id: string, count: number): boolean { return true; } type SaveArgs = Parameters<typeof save>; let args: SaveArgs = ['item-1', 5];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function save(id: string, count: number): boolean { return true; } type SaveArgs = Parameters<typeof save>; let args: SaveArgs = ['item-1', 5];\n",
    "hints": [
      "Write: function save(id: string, count: number): boolean { return true; } type SaveArgs = Parameters<typeof save>; let args: SaveArgs = ['item-1', 5];"
    ],
    "testCases": [
      {
        "id": "ts-114-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Parameters<T> (Extracting Function Argument Tuple)",
        "testFn": "args[0] === 'item-1' && args[1] === 5"
      }
    ]
  },
  {
    "id": "ts-115-utility-returntypet-extra",
    "title": "115. Utility: ReturnType<T> (Extracting Function Output Type)",
    "slug": "utility-returntypet-extracting",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: ReturnType<T> (Extracting Function Output Type) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: ReturnType<T> (Extracting Function Output Type)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction compute(): { score: number; passed: boolean } { return { score: 95, passed: true }; } type ComputeResult = ReturnType<typeof compute>; let res: ComputeResult = { score: 95, passed: true };\n```",
    "workedExample": {
      "title": "Worked Example: Utility: ReturnType<T> (Extracting Function Output Type)",
      "code": "function compute(): { score: number; passed: boolean } { return { score: 95, passed: true }; } type ComputeResult = ReturnType<typeof compute>; let res: ComputeResult = { score: 95, passed: true };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function compute(): { score: number; passed: boolean } { return { score: 95, passed: true }; } type ComputeResult = ReturnType<typeof compute>; let res: ComputeResult = { score: 95, passed: true };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function compute(): { score: number; passed: boolean } { return { score: 95, passed: true }; } type ComputeResult = ReturnType<typeof compute>; let res: ComputeResult = { score: 95, passed: true };\n",
    "hints": [
      "Write: function compute(): { score: number; passed: boolean } { return { score: 95, passed: true }; } type ComputeResult = ReturnType<typeof compute>; let res: ComputeResult = { score: 95, passed: true };"
    ],
    "testCases": [
      {
        "id": "ts-115-tc-1",
        "description": "TypeScript compiles and satisfies Utility: ReturnType<T> (Extracting Function Output Type)",
        "testFn": "res.score === 95"
      }
    ]
  },
  {
    "id": "ts-116-utility-awaitedt-unwrappi",
    "title": "116. Utility: Awaited<T> (Unwrapping Promises)",
    "slug": "utility-awaitedt-unwrapping-pr",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Utility: Awaited<T> (Unwrapping Promises) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Utility",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Utility: Awaited<T> (Unwrapping Promises)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Prom = Promise<string>; type Unwrapped = Awaited<Prom>; let s: Unwrapped = 'ready';\n```",
    "workedExample": {
      "title": "Worked Example: Utility: Awaited<T> (Unwrapping Promises)",
      "code": "type Prom = Promise<string>; type Unwrapped = Awaited<Prom>; let s: Unwrapped = 'ready';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Prom = Promise<string>; type Unwrapped = Awaited<Prom>; let s: Unwrapped = 'ready';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Prom = Promise<string>; type Unwrapped = Awaited<Prom>; let s: Unwrapped = 'ready';\n",
    "hints": [
      "Write: type Prom = Promise<string>; type Unwrapped = Awaited<Prom>; let s: Unwrapped = 'ready';"
    ],
    "testCases": [
      {
        "id": "ts-116-tc-1",
        "description": "TypeScript compiles and satisfies Utility: Awaited<T> (Unwrapping Promises)",
        "testFn": "s === 'ready'"
      }
    ]
  },
  {
    "id": "ts-117-chaining-utility-types-re",
    "title": "117. Chaining Utility Types: Readonly<Partial<T>>",
    "slug": "chaining-utility-types-readonl",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Chaining Utility Types: Readonly<Partial<T>> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Chaining Utility Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Chaining Utility Types: Readonly<Partial<T>>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Settings { theme: string; } type SafePartial = Readonly<Partial<Settings>>; let s: SafePartial = { theme: 'light' };\n```",
    "workedExample": {
      "title": "Worked Example: Chaining Utility Types: Readonly<Partial<T>>",
      "code": "interface Settings { theme: string; } type SafePartial = Readonly<Partial<Settings>>; let s: SafePartial = { theme: 'light' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Settings { theme: string; } type SafePartial = Readonly<Partial<Settings>>; let s: SafePartial = { theme: 'light' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Settings { theme: string; } type SafePartial = Readonly<Partial<Settings>>; let s: SafePartial = { theme: 'light' };\n",
    "hints": [
      "Write: interface Settings { theme: string; } type SafePartial = Readonly<Partial<Settings>>; let s: SafePartial = { theme: 'light' };"
    ],
    "testCases": [
      {
        "id": "ts-117-tc-1",
        "description": "TypeScript compiles and satisfies Chaining Utility Types: Readonly<Partial<T>>",
        "testFn": "s.theme === 'light'"
      }
    ]
  },
  {
    "id": "ts-118-module-10-review-api-patc",
    "title": "118. Module 10 Review: API Patch DTO Generator",
    "slug": "module-10-review-api-patch-dto",
    "language": "typescript",
    "category": "Module 10: Built-in Utility Types",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Module 10 Review: API Patch DTO Generator in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 10 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 10 Review: API Patch DTO Generator\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface UserProfile { id: string; name: string; email: string; avatarUrl: string; } type UpdateProfileDTO = Partial<Omit<UserProfile, 'id'>>; let dto: UpdateProfileDTO = { name: 'Updated' };\n```",
    "workedExample": {
      "title": "Worked Example: Module 10 Review: API Patch DTO Generator",
      "code": "interface UserProfile { id: string; name: string; email: string; avatarUrl: string; } type UpdateProfileDTO = Partial<Omit<UserProfile, 'id'>>; let dto: UpdateProfileDTO = { name: 'Updated' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface UserProfile { id: string; name: string; email: string; avatarUrl: string; } type UpdateProfileDTO = Partial<Omit<UserProfile, 'id'>>; let dto: UpdateProfileDTO = { name: 'Updated' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface UserProfile { id: string; name: string; email: string; avatarUrl: string; } type UpdateProfileDTO = Partial<Omit<UserProfile, 'id'>>; let dto: UpdateProfileDTO = { name: 'Updated' };\n",
    "hints": [
      "Write: interface UserProfile { id: string; name: string; email: string; avatarUrl: string; } type UpdateProfileDTO = Partial<Omit<UserProfile, 'id'>>; let dto: UpdateProfileDTO = { name: 'Updated' };"
    ],
    "testCases": [
      {
        "id": "ts-118-tc-1",
        "description": "TypeScript compiles and satisfies Module 10 Review: API Patch DTO Generator",
        "testFn": "dto.name === 'Updated'"
      }
    ]
  }
];
