import { Lesson } from '../../../types';

export const tsModule9Lessons: Lesson[] = [
  {
    "id": "ts-95-type-predicates-fnx-x-is-",
    "title": "95. Type Predicates: fn(x): x is CustomType",
    "slug": "type-predicates-fnx-x-is-custo",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Type Predicates: fn(x): x is CustomType in TypeScript with strict compile-time checking.",
    "concepts": [
      "Type Predicates",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Type Predicates: fn(x): x is CustomType\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Fish { swim(): string; } function isFish(pet: any): pet is Fish { return pet && typeof pet.swim === 'function'; } let res = isFish({ swim: () => 'swimming' });\n```",
    "workedExample": {
      "title": "Worked Example: Type Predicates: fn(x): x is CustomType",
      "code": "interface Fish { swim(): string; } function isFish(pet: any): pet is Fish { return pet && typeof pet.swim === 'function'; } let res = isFish({ swim: () => 'swimming' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Fish { swim(): string; } function isFish(pet: any): pet is Fish { return pet && typeof pet.swim === 'function'; } let res = isFish({ swim: () => 'swimming' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Fish { swim(): string; } function isFish(pet: any): pet is Fish { return pet && typeof pet.swim === 'function'; } let res = isFish({ swim: () => 'swimming' });\n",
    "hints": [
      "Write: interface Fish { swim(): string; } function isFish(pet: any): pet is Fish { return pet && typeof pet.swim === 'function'; } let res = isFish({ swim: () => 'swimming' });"
    ],
    "testCases": [
      {
        "id": "ts-95-tc-1",
        "description": "TypeScript compiles and satisfies Type Predicates: fn(x): x is CustomType",
        "testFn": "res === true"
      }
    ]
  },
  {
    "id": "ts-96-narrowing-array-elements-",
    "title": "96. Narrowing Array Elements with Filter & Type Predicates",
    "slug": "narrowing-array-elements-with-",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Narrowing Array Elements with Filter & Type Predicates in TypeScript with strict compile-time checking.",
    "concepts": [
      "Narrowing Array Elements with Filter & Type Predicates",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Narrowing Array Elements with Filter & Type Predicates\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst mixed: (string | number)[] = ['a', 1, 'b', 2]; const strings = mixed.filter((x): x is string => typeof x === 'string');\n```",
    "workedExample": {
      "title": "Worked Example: Narrowing Array Elements with Filter & Type Predicates",
      "code": "const mixed: (string | number)[] = ['a', 1, 'b', 2]; const strings = mixed.filter((x): x is string => typeof x === 'string');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const mixed: (string | number)[] = ['a', 1, 'b', 2]; const strings = mixed.filter((x): x is string => typeof x === 'string');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "const mixed: (string | number)[] = ['a', 1, 'b', 2]; const strings = mixed.filter((x): x is string => typeof x === 'string');\n",
    "hints": [
      "Write: const mixed: (string | number)[] = ['a', 1, 'b', 2]; const strings = mixed.filter((x): x is string => typeof x === 'string');"
    ],
    "testCases": [
      {
        "id": "ts-96-tc-1",
        "description": "TypeScript compiles and satisfies Narrowing Array Elements with Filter & Type Predicates",
        "testFn": "strings.length === 2 && strings[0] === 'a'"
      }
    ]
  },
  {
    "id": "ts-97-assertion-functions-with-",
    "title": "97. Assertion Functions with asserts x is T",
    "slug": "assertion-functions-with-asser",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Assertion Functions with asserts x is T in TypeScript with strict compile-time checking.",
    "concepts": [
      "Assertion Functions with asserts x is T",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Assertion Functions with asserts x is T\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction assertDefined<T>(val: T | null | undefined): asserts val is T { if (val === null || val === undefined) throw new Error('Nil'); } let x: string | null = 'hello'; assertDefined(x);\n```",
    "workedExample": {
      "title": "Worked Example: Assertion Functions with asserts x is T",
      "code": "function assertDefined<T>(val: T | null | undefined): asserts val is T { if (val === null || val === undefined) throw new Error('Nil'); } let x: string | null = 'hello'; assertDefined(x);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function assertDefined<T>(val: T | null | undefined): asserts val is T { if (val === null || val === undefined) throw new Error('Nil'); } let x: string | null = 'hello'; assertDefined(x);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function assertDefined<T>(val: T | null | undefined): asserts val is T { if (val === null || val === undefined) throw new Error('Nil'); } let x: string | null = 'hello'; assertDefined(x);\n",
    "hints": [
      "Write: function assertDefined<T>(val: T | null | undefined): asserts val is T { if (val === null || val === undefined) throw new Error('Nil'); } let x: string | null = 'hello'; assertDefined(x);"
    ],
    "testCases": [
      {
        "id": "ts-97-tc-1",
        "description": "TypeScript compiles and satisfies Assertion Functions with asserts x is T",
        "testFn": "x === 'hello'"
      }
    ]
  },
  {
    "id": "ts-98-exhaustiveness-check-with",
    "title": "98. Exhaustiveness Check with 'never' Helper",
    "slug": "exhaustiveness-check-with-neve",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Exhaustiveness Check with 'never' Helper in TypeScript with strict compile-time checking.",
    "concepts": [
      "Exhaustiveness Check with 'never' Helper",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Exhaustiveness Check with 'never' Helper\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction assertNever(x: never): never { throw new Error('Unhandled: ' + x); }\n```",
    "workedExample": {
      "title": "Worked Example: Exhaustiveness Check with 'never' Helper",
      "code": "function assertNever(x: never): never { throw new Error('Unhandled: ' + x); }",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function assertNever(x: never): never { throw new Error('Unhandled: ' + x); }`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function assertNever(x: never): never { throw new Error('Unhandled: ' + x); }\n",
    "hints": [
      "Write: function assertNever(x: never): never { throw new Error('Unhandled: ' + x); }"
    ],
    "testCases": [
      {
        "id": "ts-98-tc-1",
        "description": "TypeScript compiles and satisfies Exhaustiveness Check with 'never' Helper",
        "testFn": "typeof assertNever === 'function'"
      }
    ]
  },
  {
    "id": "ts-99-discriminated-unions-with",
    "title": "99. Discriminated Unions with Exhaustive Switch",
    "slug": "discriminated-unions-with-exha",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Discriminated Unions with Exhaustive Switch in TypeScript with strict compile-time checking.",
    "concepts": [
      "Discriminated Unions with Exhaustive Switch",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Discriminated Unions with Exhaustive Switch\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Shape = { kind: 'circle'; r: number } | { kind: 'square'; size: number }; function area(s: Shape): number { switch(s.kind) { case 'circle': return 3.14 * s.r * s.r; case 'square': return s.size * s.size; } } let a = area({ kind: 'square', size: 5 });\n```",
    "workedExample": {
      "title": "Worked Example: Discriminated Unions with Exhaustive Switch",
      "code": "type Shape = { kind: 'circle'; r: number } | { kind: 'square'; size: number }; function area(s: Shape): number { switch(s.kind) { case 'circle': return 3.14 * s.r * s.r; case 'square': return s.size * s.size; } } let a = area({ kind: 'square', size: 5 });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Shape = { kind: 'circle'; r: number } | { kind: 'square'; size: number }; function area(s: Shape): number { switch(s.kind) { case 'circle': return 3.14 * s.r * s.r; case 'square': return s.size * s.size; } } let a = area({ kind: 'square', size: 5 });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Shape = { kind: 'circle'; r: number } | { kind: 'square'; size: number }; function area(s: Shape): number { switch(s.kind) { case 'circle': return 3.14 * s.r * s.r; case 'square': return s.size * s.size; } } let a = area({ kind: 'square', size: 5 });\n",
    "hints": [
      "Write: type Shape = { kind: 'circle'; r: number } | { kind: 'square'; size: number }; function area(s: Shape): number { switch(s.kind) { case 'circle': return 3.14 * s.r * s.r; case 'square': return s.size * s.size; } } let a = area({ kind: 'square', size: 5 });"
    ],
    "testCases": [
      {
        "id": "ts-99-tc-1",
        "description": "TypeScript compiles and satisfies Discriminated Unions with Exhaustive Switch",
        "testFn": "a === 25"
      }
    ]
  },
  {
    "id": "ts-100-in-depth-in-operator-narr",
    "title": "100. In-Depth 'in' Operator Narrowing",
    "slug": "in-depth-in-operator-narrowing",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master In-Depth 'in' Operator Narrowing in TypeScript with strict compile-time checking.",
    "concepts": [
      "In-Depth 'in' Operator Narrowing",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### In-Depth 'in' Operator Narrowing\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Admin = { privileges: string[] }; type Member = { email: string }; function getRole(u: Admin | Member): string { if ('privileges' in u) return 'Admin'; return 'Member'; } let r = getRole({ privileges: ['root'] });\n```",
    "workedExample": {
      "title": "Worked Example: In-Depth 'in' Operator Narrowing",
      "code": "type Admin = { privileges: string[] }; type Member = { email: string }; function getRole(u: Admin | Member): string { if ('privileges' in u) return 'Admin'; return 'Member'; } let r = getRole({ privileges: ['root'] });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Admin = { privileges: string[] }; type Member = { email: string }; function getRole(u: Admin | Member): string { if ('privileges' in u) return 'Admin'; return 'Member'; } let r = getRole({ privileges: ['root'] });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Admin = { privileges: string[] }; type Member = { email: string }; function getRole(u: Admin | Member): string { if ('privileges' in u) return 'Admin'; return 'Member'; } let r = getRole({ privileges: ['root'] });\n",
    "hints": [
      "Write: type Admin = { privileges: string[] }; type Member = { email: string }; function getRole(u: Admin | Member): string { if ('privileges' in u) return 'Admin'; return 'Member'; } let r = getRole({ privileges: ['root'] });"
    ],
    "testCases": [
      {
        "id": "ts-100-tc-1",
        "description": "TypeScript compiles and satisfies In-Depth 'in' Operator Narrowing",
        "testFn": "r === 'Admin'"
      }
    ]
  },
  {
    "id": "ts-101-truthiness-narrowing-on-n",
    "title": "101. Truthiness Narrowing on Nullable Objects",
    "slug": "truthiness-narrowing-on-nullab",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Truthiness Narrowing on Nullable Objects in TypeScript with strict compile-time checking.",
    "concepts": [
      "Truthiness Narrowing on Nullable Objects",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Truthiness Narrowing on Nullable Objects\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction getName(u: { name: string } | null | undefined): string { return u?.name ?? 'Anonymous'; } let n = getName({ name: 'Sam' });\n```",
    "workedExample": {
      "title": "Worked Example: Truthiness Narrowing on Nullable Objects",
      "code": "function getName(u: { name: string } | null | undefined): string { return u?.name ?? 'Anonymous'; } let n = getName({ name: 'Sam' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function getName(u: { name: string } | null | undefined): string { return u?.name ?? 'Anonymous'; } let n = getName({ name: 'Sam' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function getName(u: { name: string } | null | undefined): string { return u?.name ?? 'Anonymous'; } let n = getName({ name: 'Sam' });\n",
    "hints": [
      "Write: function getName(u: { name: string } | null | undefined): string { return u?.name ?? 'Anonymous'; } let n = getName({ name: 'Sam' });"
    ],
    "testCases": [
      {
        "id": "ts-101-tc-1",
        "description": "TypeScript compiles and satisfies Truthiness Narrowing on Nullable Objects",
        "testFn": "n === 'Sam'"
      }
    ]
  },
  {
    "id": "ts-102-equality-narrowing-with-l",
    "title": "102. Equality Narrowing with Literal Types",
    "slug": "equality-narrowing-with-litera",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Equality Narrowing with Literal Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Equality Narrowing with Literal Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Equality Narrowing with Literal Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Status = 'active' | 'inactive'; function check(s: Status) { if (s === 'active') return true; return false; } let isActive = check('active');\n```",
    "workedExample": {
      "title": "Worked Example: Equality Narrowing with Literal Types",
      "code": "type Status = 'active' | 'inactive'; function check(s: Status) { if (s === 'active') return true; return false; } let isActive = check('active');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Status = 'active' | 'inactive'; function check(s: Status) { if (s === 'active') return true; return false; } let isActive = check('active');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Status = 'active' | 'inactive'; function check(s: Status) { if (s === 'active') return true; return false; } let isActive = check('active');\n",
    "hints": [
      "Write: type Status = 'active' | 'inactive'; function check(s: Status) { if (s === 'active') return true; return false; } let isActive = check('active');"
    ],
    "testCases": [
      {
        "id": "ts-102-tc-1",
        "description": "TypeScript compiles and satisfies Equality Narrowing with Literal Types",
        "testFn": "isActive === true"
      }
    ]
  },
  {
    "id": "ts-103-narrowing-with-array.isar",
    "title": "103. Narrowing with Array.isArray()",
    "slug": "narrowing-with-array.isarray",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Narrowing with Array.isArray() in TypeScript with strict compile-time checking.",
    "concepts": [
      "Narrowing with Array.isArray()",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Narrowing with Array.isArray()\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction count(input: string | string[]): number { if (Array.isArray(input)) return input.length; return 1; } let c = count(['a', 'b', 'c']);\n```",
    "workedExample": {
      "title": "Worked Example: Narrowing with Array.isArray()",
      "code": "function count(input: string | string[]): number { if (Array.isArray(input)) return input.length; return 1; } let c = count(['a', 'b', 'c']);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function count(input: string | string[]): number { if (Array.isArray(input)) return input.length; return 1; } let c = count(['a', 'b', 'c']);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function count(input: string | string[]): number { if (Array.isArray(input)) return input.length; return 1; } let c = count(['a', 'b', 'c']);\n",
    "hints": [
      "Write: function count(input: string | string[]): number { if (Array.isArray(input)) return input.length; return 1; } let c = count(['a', 'b', 'c']);"
    ],
    "testCases": [
      {
        "id": "ts-103-tc-1",
        "description": "TypeScript compiles and satisfies Narrowing with Array.isArray()",
        "testFn": "c === 3"
      }
    ]
  },
  {
    "id": "ts-104-module-9-review-enterpris",
    "title": "104. Module 9 Review: Enterprise Data Sanitizer",
    "slug": "module-9-review-enterprise-dat",
    "language": "typescript",
    "category": "Module 9: Type Narrowing & Guards",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Module 9 Review: Enterprise Data Sanitizer in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 9 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 9 Review: Enterprise Data Sanitizer\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface SafeRecord { id: string; valid: boolean; } function sanitize(data: unknown): SafeRecord { if (typeof data === 'object' && data !== null && 'id' in data) { return { id: String((data as any).id), valid: true }; } return { id: '', valid: false }; } let sanitized = sanitize({ id: 'rec-123' });\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Enterprise Data Sanitizer",
      "code": "interface SafeRecord { id: string; valid: boolean; } function sanitize(data: unknown): SafeRecord { if (typeof data === 'object' && data !== null && 'id' in data) { return { id: String((data as any).id), valid: true }; } return { id: '', valid: false }; } let sanitized = sanitize({ id: 'rec-123' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface SafeRecord { id: string; valid: boolean; } function sanitize(data: unknown): SafeRecord { if (typeof data === 'object' && data !== null && 'id' in data) { return { id: String((data as any).id), valid: true }; } return { id: '', valid: false }; } let sanitized = sanitize({ id: 'rec-123' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface SafeRecord { id: string; valid: boolean; } function sanitize(data: unknown): SafeRecord { if (typeof data === 'object' && data !== null && 'id' in data) { return { id: String((data as any).id), valid: true }; } return { id: '', valid: false }; } let sanitized = sanitize({ id: 'rec-123' });\n",
    "hints": [
      "Write: interface SafeRecord { id: string; valid: boolean; } function sanitize(data: unknown): SafeRecord { if (typeof data === 'object' && data !== null && 'id' in data) { return { id: String((data as any).id), valid: true }; } return { id: '', valid: false }; } let sanitized = sanitize({ id: 'rec-123' });"
    ],
    "testCases": [
      {
        "id": "ts-104-tc-1",
        "description": "TypeScript compiles and satisfies Module 9 Review: Enterprise Data Sanitizer",
        "testFn": "sanitized.id === 'rec-123' && sanitized.valid === true"
      }
    ]
  }
];
