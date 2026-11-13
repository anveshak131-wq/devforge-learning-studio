import { Lesson } from '../../../types';

export const tsModule5Lessons: Lesson[] = [
  {
    "id": "ts-47-union-types-variable-a-or",
    "title": "47. Union Types: Variable A or B (|)",
    "slug": "union-types-variable-a-or-b-|",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Union Types: Variable A or B (|) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Union Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Union Types: Variable A or B (|)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet id: string | number = 'user-101'; id = 101;\n```",
    "workedExample": {
      "title": "Worked Example: Union Types: Variable A or B (|)",
      "code": "let id: string | number = 'user-101'; id = 101;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let id: string | number = 'user-101'; id = 101;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "let id: string | number = 'user-101'; id = 101;\n",
    "hints": [
      "Write: let id: string | number = 'user-101'; id = 101;"
    ],
    "testCases": [
      {
        "id": "ts-47-tc-1",
        "description": "TypeScript compiles and satisfies Union Types: Variable A or B (|)",
        "testFn": "id === 101"
      }
    ]
  },
  {
    "id": "ts-48-intersection-types-combin",
    "title": "48. Intersection Types: Combining Types (&)",
    "slug": "intersection-types-combining-t",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Intersection Types: Combining Types (&) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Intersection Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Intersection Types: Combining Types (&)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype HasName = { name: string }; type HasAge = { age: number }; type Person = HasName & HasAge; let p: Person = { name: 'Eve', age: 24 };\n```",
    "workedExample": {
      "title": "Worked Example: Intersection Types: Combining Types (&)",
      "code": "type HasName = { name: string }; type HasAge = { age: number }; type Person = HasName & HasAge; let p: Person = { name: 'Eve', age: 24 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type HasName = { name: string }; type HasAge = { age: number }; type Person = HasName & HasAge; let p: Person = { name: 'Eve', age: 24 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type HasName = { name: string }; type HasAge = { age: number }; type Person = HasName & HasAge; let p: Person = { name: 'Eve', age: 24 };\n",
    "hints": [
      "Write: type HasName = { name: string }; type HasAge = { age: number }; type Person = HasName & HasAge; let p: Person = { name: 'Eve', age: 24 };"
    ],
    "testCases": [
      {
        "id": "ts-48-tc-1",
        "description": "TypeScript compiles and satisfies Intersection Types: Combining Types (&)",
        "testFn": "p.name === 'Eve' && p.age === 24"
      }
    ]
  },
  {
    "id": "ts-49-discriminated-unions-tagg",
    "title": "49. Discriminated Unions: Tagged Union Pattern",
    "slug": "discriminated-unions-tagged-un",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Discriminated Unions: Tagged Union Pattern in TypeScript with strict compile-time checking.",
    "concepts": [
      "Discriminated Unions",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Discriminated Unions: Tagged Union Pattern\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Success = { status: 'success'; data: string }; type Failure = { status: 'error'; message: string }; type Result = Success | Failure; let r: Result = { status: 'success', data: 'OK' };\n```",
    "workedExample": {
      "title": "Worked Example: Discriminated Unions: Tagged Union Pattern",
      "code": "type Success = { status: 'success'; data: string }; type Failure = { status: 'error'; message: string }; type Result = Success | Failure; let r: Result = { status: 'success', data: 'OK' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Success = { status: 'success'; data: string }; type Failure = { status: 'error'; message: string }; type Result = Success | Failure; let r: Result = { status: 'success', data: 'OK' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Success = { status: 'success'; data: string }; type Failure = { status: 'error'; message: string }; type Result = Success | Failure; let r: Result = { status: 'success', data: 'OK' };\n",
    "hints": [
      "Write: type Success = { status: 'success'; data: string }; type Failure = { status: 'error'; message: string }; type Result = Success | Failure; let r: Result = { status: 'success', data: 'OK' };"
    ],
    "testCases": [
      {
        "id": "ts-49-tc-1",
        "description": "TypeScript compiles and satisfies Discriminated Unions: Tagged Union Pattern",
        "testFn": "r.status === 'success'"
      }
    ]
  },
  {
    "id": "ts-50-narrowing-with-typeof-typ",
    "title": "50. Narrowing with 'typeof' Type Guards",
    "slug": "narrowing-with-typeof-type-gua",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Narrowing with 'typeof' Type Guards in TypeScript with strict compile-time checking.",
    "concepts": [
      "Narrowing with 'typeof' Type Guards",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Narrowing with 'typeof' Type Guards\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction stringify(val: string | number): string { if (typeof val === 'number') return String(val); return val; } let s = stringify(42);\n```",
    "workedExample": {
      "title": "Worked Example: Narrowing with 'typeof' Type Guards",
      "code": "function stringify(val: string | number): string { if (typeof val === 'number') return String(val); return val; } let s = stringify(42);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function stringify(val: string | number): string { if (typeof val === 'number') return String(val); return val; } let s = stringify(42);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function stringify(val: string | number): string { if (typeof val === 'number') return String(val); return val; } let s = stringify(42);\n",
    "hints": [
      "Write: function stringify(val: string | number): string { if (typeof val === 'number') return String(val); return val; } let s = stringify(42);"
    ],
    "testCases": [
      {
        "id": "ts-50-tc-1",
        "description": "TypeScript compiles and satisfies Narrowing with 'typeof' Type Guards",
        "testFn": "s === '42'"
      }
    ]
  },
  {
    "id": "ts-51-narrowing-with-instanceof",
    "title": "51. Narrowing with 'instanceof' Type Guards",
    "slug": "narrowing-with-instanceof-type",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Narrowing with 'instanceof' Type Guards in TypeScript with strict compile-time checking.",
    "concepts": [
      "Narrowing with 'instanceof' Type Guards",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Narrowing with 'instanceof' Type Guards\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction formatInput(val: string | Date): string { if (val instanceof Date) return val.toISOString(); return val; } let out = formatInput('custom');\n```",
    "workedExample": {
      "title": "Worked Example: Narrowing with 'instanceof' Type Guards",
      "code": "function formatInput(val: string | Date): string { if (val instanceof Date) return val.toISOString(); return val; } let out = formatInput('custom');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function formatInput(val: string | Date): string { if (val instanceof Date) return val.toISOString(); return val; } let out = formatInput('custom');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function formatInput(val: string | Date): string { if (val instanceof Date) return val.toISOString(); return val; } let out = formatInput('custom');\n",
    "hints": [
      "Write: function formatInput(val: string | Date): string { if (val instanceof Date) return val.toISOString(); return val; } let out = formatInput('custom');"
    ],
    "testCases": [
      {
        "id": "ts-51-tc-1",
        "description": "TypeScript compiles and satisfies Narrowing with 'instanceof' Type Guards",
        "testFn": "out === 'custom'"
      }
    ]
  },
  {
    "id": "ts-52-narrowing-with-in-operato",
    "title": "52. Narrowing with 'in' Operator",
    "slug": "narrowing-with-in-operator",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Narrowing with 'in' Operator in TypeScript with strict compile-time checking.",
    "concepts": [
      "Narrowing with 'in' Operator",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Narrowing with 'in' Operator\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Cat = { meow(): string }; type Dog = { bark(): string }; function speak(pet: Cat | Dog) { if ('meow' in pet) return pet.meow(); return pet.bark(); } let sound = speak({ meow: () => 'meow' });\n```",
    "workedExample": {
      "title": "Worked Example: Narrowing with 'in' Operator",
      "code": "type Cat = { meow(): string }; type Dog = { bark(): string }; function speak(pet: Cat | Dog) { if ('meow' in pet) return pet.meow(); return pet.bark(); } let sound = speak({ meow: () => 'meow' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Cat = { meow(): string }; type Dog = { bark(): string }; function speak(pet: Cat | Dog) { if ('meow' in pet) return pet.meow(); return pet.bark(); } let sound = speak({ meow: () => 'meow' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Cat = { meow(): string }; type Dog = { bark(): string }; function speak(pet: Cat | Dog) { if ('meow' in pet) return pet.meow(); return pet.bark(); } let sound = speak({ meow: () => 'meow' });\n",
    "hints": [
      "Write: type Cat = { meow(): string }; type Dog = { bark(): string }; function speak(pet: Cat | Dog) { if ('meow' in pet) return pet.meow(); return pet.bark(); } let sound = speak({ meow: () => 'meow' });"
    ],
    "testCases": [
      {
        "id": "ts-52-tc-1",
        "description": "TypeScript compiles and satisfies Narrowing with 'in' Operator",
        "testFn": "sound === 'meow'"
      }
    ]
  },
  {
    "id": "ts-53-truthiness-&-null-narrowi",
    "title": "53. Truthiness & Null Narrowing",
    "slug": "truthiness-&-null-narrowing",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Truthiness & Null Narrowing in TypeScript with strict compile-time checking.",
    "concepts": [
      "Truthiness & Null Narrowing",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Truthiness & Null Narrowing\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction printLen(str: string | null): number { if (str) return str.length; return 0; } let len = printLen('hello');\n```",
    "workedExample": {
      "title": "Worked Example: Truthiness & Null Narrowing",
      "code": "function printLen(str: string | null): number { if (str) return str.length; return 0; } let len = printLen('hello');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function printLen(str: string | null): number { if (str) return str.length; return 0; } let len = printLen('hello');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function printLen(str: string | null): number { if (str) return str.length; return 0; } let len = printLen('hello');\n",
    "hints": [
      "Write: function printLen(str: string | null): number { if (str) return str.length; return 0; } let len = printLen('hello');"
    ],
    "testCases": [
      {
        "id": "ts-53-tc-1",
        "description": "TypeScript compiles and satisfies Truthiness & Null Narrowing",
        "testFn": "len === 5"
      }
    ]
  },
  {
    "id": "ts-54-equality-narrowing-===",
    "title": "54. Equality Narrowing (===)",
    "slug": "equality-narrowing-===",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Equality Narrowing (===) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Equality Narrowing (===)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Equality Narrowing (===)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction compare(x: string | number, y: string | boolean) { if (x === y) return 'identical'; return 'different'; } let res = compare('test', 'test');\n```",
    "workedExample": {
      "title": "Worked Example: Equality Narrowing (===)",
      "code": "function compare(x: string | number, y: string | boolean) { if (x === y) return 'identical'; return 'different'; } let res = compare('test', 'test');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function compare(x: string | number, y: string | boolean) { if (x === y) return 'identical'; return 'different'; } let res = compare('test', 'test');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function compare(x: string | number, y: string | boolean) { if (x === y) return 'identical'; return 'different'; } let res = compare('test', 'test');\n",
    "hints": [
      "Write: function compare(x: string | number, y: string | boolean) { if (x === y) return 'identical'; return 'different'; } let res = compare('test', 'test');"
    ],
    "testCases": [
      {
        "id": "ts-54-tc-1",
        "description": "TypeScript compiles and satisfies Equality Narrowing (===)",
        "testFn": "res === 'identical'"
      }
    ]
  },
  {
    "id": "ts-55-exhaustive-pattern-matchi",
    "title": "55. Exhaustive Pattern Matching with 'never'",
    "slug": "exhaustive-pattern-matching-wi",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Exhaustive Pattern Matching with 'never' in TypeScript with strict compile-time checking.",
    "concepts": [
      "Exhaustive Pattern Matching with 'never'",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Exhaustive Pattern Matching with 'never'\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Action = 'start' | 'stop'; function handle(a: Action) { switch(a) { case 'start': return 1; case 'stop': return 0; } } let code = handle('start');\n```",
    "workedExample": {
      "title": "Worked Example: Exhaustive Pattern Matching with 'never'",
      "code": "type Action = 'start' | 'stop'; function handle(a: Action) { switch(a) { case 'start': return 1; case 'stop': return 0; } } let code = handle('start');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Action = 'start' | 'stop'; function handle(a: Action) { switch(a) { case 'start': return 1; case 'stop': return 0; } } let code = handle('start');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Action = 'start' | 'stop'; function handle(a: Action) { switch(a) { case 'start': return 1; case 'stop': return 0; } } let code = handle('start');\n",
    "hints": [
      "Write: type Action = 'start' | 'stop'; function handle(a: Action) { switch(a) { case 'start': return 1; case 'stop': return 0; } } let code = handle('start');"
    ],
    "testCases": [
      {
        "id": "ts-55-tc-1",
        "description": "TypeScript compiles and satisfies Exhaustive Pattern Matching with 'never'",
        "testFn": "code === 1"
      }
    ]
  },
  {
    "id": "ts-56-custom-type-guard-predica",
    "title": "56. Custom Type Guard Predicates (x is T)",
    "slug": "custom-type-guard-predicates-x",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Custom Type Guard Predicates (x is T) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Custom Type Guard Predicates (x is T)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Custom Type Guard Predicates (x is T)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction isString(val: unknown): val is string { return typeof val === 'string'; } let check = isString('hello');\n```",
    "workedExample": {
      "title": "Worked Example: Custom Type Guard Predicates (x is T)",
      "code": "function isString(val: unknown): val is string { return typeof val === 'string'; } let check = isString('hello');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function isString(val: unknown): val is string { return typeof val === 'string'; } let check = isString('hello');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function isString(val: unknown): val is string { return typeof val === 'string'; } let check = isString('hello');\n",
    "hints": [
      "Write: function isString(val: unknown): val is string { return typeof val === 'string'; } let check = isString('hello');"
    ],
    "testCases": [
      {
        "id": "ts-56-tc-1",
        "description": "TypeScript compiles and satisfies Custom Type Guard Predicates (x is T)",
        "testFn": "check === true"
      }
    ]
  },
  {
    "id": "ts-57-assertion-functions-asser",
    "title": "57. Assertion Functions (asserts condition)",
    "slug": "assertion-functions-asserts-co",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Assertion Functions (asserts condition) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Assertion Functions (asserts condition)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Assertion Functions (asserts condition)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction assertNumber(val: any): asserts val is number { if (typeof val !== 'number') throw new Error('Not number'); } let n = 10; assertNumber(n);\n```",
    "workedExample": {
      "title": "Worked Example: Assertion Functions (asserts condition)",
      "code": "function assertNumber(val: any): asserts val is number { if (typeof val !== 'number') throw new Error('Not number'); } let n = 10; assertNumber(n);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function assertNumber(val: any): asserts val is number { if (typeof val !== 'number') throw new Error('Not number'); } let n = 10; assertNumber(n);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function assertNumber(val: any): asserts val is number { if (typeof val !== 'number') throw new Error('Not number'); } let n = 10; assertNumber(n);\n",
    "hints": [
      "Write: function assertNumber(val: any): asserts val is number { if (typeof val !== 'number') throw new Error('Not number'); } let n = 10; assertNumber(n);"
    ],
    "testCases": [
      {
        "id": "ts-57-tc-1",
        "description": "TypeScript compiles and satisfies Assertion Functions (asserts condition)",
        "testFn": "n === 10"
      }
    ]
  },
  {
    "id": "ts-58-module-5-review-state-mac",
    "title": "58. Module 5 Review: State Machine Reducer",
    "slug": "module-5-review-state-machine-",
    "language": "typescript",
    "category": "Module 5: Union & Intersection Types",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 5 Review: State Machine Reducer in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 5 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 5 Review: State Machine Reducer\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype State = { status: 'idle' } | { status: 'loading' } | { status: 'ready'; data: string }; let curr: State = { status: 'ready', data: 'Done' };\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: State Machine Reducer",
      "code": "type State = { status: 'idle' } | { status: 'loading' } | { status: 'ready'; data: string }; let curr: State = { status: 'ready', data: 'Done' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type State = { status: 'idle' } | { status: 'loading' } | { status: 'ready'; data: string }; let curr: State = { status: 'ready', data: 'Done' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type State = { status: 'idle' } | { status: 'loading' } | { status: 'ready'; data: string }; let curr: State = { status: 'ready', data: 'Done' };\n",
    "hints": [
      "Write: type State = { status: 'idle' } | { status: 'loading' } | { status: 'ready'; data: string }; let curr: State = { status: 'ready', data: 'Done' };"
    ],
    "testCases": [
      {
        "id": "ts-58-tc-1",
        "description": "TypeScript compiles and satisfies Module 5 Review: State Machine Reducer",
        "testFn": "curr.status === 'ready'"
      }
    ]
  }
];
