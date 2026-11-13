import { Lesson } from '../../../types';

export const tsModule4Lessons: Lesson[] = [
  {
    "id": "ts-35-typed-function-parameters",
    "title": "35. Typed Function Parameters",
    "slug": "typed-function-parameters",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Typed Function Parameters in TypeScript with strict compile-time checking.",
    "concepts": [
      "Typed Function Parameters",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Typed Function Parameters\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction add(a: number, b: number): number { return a + b; } let sum = add(10, 20);\n```",
    "workedExample": {
      "title": "Worked Example: Typed Function Parameters",
      "code": "function add(a: number, b: number): number { return a + b; } let sum = add(10, 20);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function add(a: number, b: number): number { return a + b; } let sum = add(10, 20);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction add(a: number, b: number): number { return a + b; } let sum = add(10, 20);\n",
    "solutionCode": "function add(a: number, b: number): number { return a + b; } let sum = add(10, 20);\n",
    "hints": [
      "Write: function add(a: number, b: number): number { return a + b; } let sum = add(10, 20);"
    ],
    "testCases": [
      {
        "id": "ts-35-tc-1",
        "description": "TypeScript compiles and satisfies Typed Function Parameters",
        "testFn": "sum === 30"
      }
    ]
  },
  {
    "id": "ts-36-arrow-functions-with-expl",
    "title": "36. Arrow Functions with Explicit Return Types",
    "slug": "arrow-functions-with-explicit-",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Arrow Functions with Explicit Return Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Arrow Functions with Explicit Return Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Arrow Functions with Explicit Return Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst square = (n: number): number => n * n; let ans = square(6);\n```",
    "workedExample": {
      "title": "Worked Example: Arrow Functions with Explicit Return Types",
      "code": "const square = (n: number): number => n * n; let ans = square(6);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const square = (n: number): number => n * n; let ans = square(6);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nconst square = (n: number): number => n * n; let ans = square(6);\n",
    "solutionCode": "const square = (n: number): number => n * n; let ans = square(6);\n",
    "hints": [
      "Write: const square = (n: number): number => n * n; let ans = square(6);"
    ],
    "testCases": [
      {
        "id": "ts-36-tc-1",
        "description": "TypeScript compiles and satisfies Arrow Functions with Explicit Return Types",
        "testFn": "ans === 36"
      }
    ]
  },
  {
    "id": "ts-37-optional-function-paramet",
    "title": "37. Optional Function Parameters (?)",
    "slug": "optional-function-parameters-?",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Optional Function Parameters (?) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Optional Function Parameters (?)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Optional Function Parameters (?)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction greet(name: string, title?: string): string { return title ? `${title} ${name}` : name; } let res = greet('Smith', 'Dr.');\n```",
    "workedExample": {
      "title": "Worked Example: Optional Function Parameters (?)",
      "code": "function greet(name: string, title?: string): string { return title ? `${title} ${name}` : name; } let res = greet('Smith', 'Dr.');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function greet(name: string, title?: string): string { return title ? `${title} ${name}` : name; } let res = greet('Smith', 'Dr.');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction greet(name: string, title?: string): string { return title ? `${title} ${name}` : name; } let res = greet('Smith', 'Dr.');\n",
    "solutionCode": "function greet(name: string, title?: string): string { return title ? `${title} ${name}` : name; } let res = greet('Smith', 'Dr.');\n",
    "hints": [
      "Write: function greet(name: string, title?: string): string { return title ? `${title} ${name}` : name; } let res = greet('Smith', 'Dr.');"
    ],
    "testCases": [
      {
        "id": "ts-37-tc-1",
        "description": "TypeScript compiles and satisfies Optional Function Parameters (?)",
        "testFn": "res === 'Dr. Smith'"
      }
    ]
  },
  {
    "id": "ts-38-default-parameter-values",
    "title": "38. Default Parameter Values",
    "slug": "default-parameter-values",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Default Parameter Values in TypeScript with strict compile-time checking.",
    "concepts": [
      "Default Parameter Values",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Default Parameter Values\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction multiply(a: number, factor: number = 2): number { return a * factor; } let res = multiply(5);\n```",
    "workedExample": {
      "title": "Worked Example: Default Parameter Values",
      "code": "function multiply(a: number, factor: number = 2): number { return a * factor; } let res = multiply(5);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function multiply(a: number, factor: number = 2): number { return a * factor; } let res = multiply(5);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction multiply(a: number, factor: number = 2): number { return a * factor; } let res = multiply(5);\n",
    "solutionCode": "function multiply(a: number, factor: number = 2): number { return a * factor; } let res = multiply(5);\n",
    "hints": [
      "Write: function multiply(a: number, factor: number = 2): number { return a * factor; } let res = multiply(5);"
    ],
    "testCases": [
      {
        "id": "ts-38-tc-1",
        "description": "TypeScript compiles and satisfies Default Parameter Values",
        "testFn": "res === 10"
      }
    ]
  },
  {
    "id": "ts-39-rest-parameters-with-type",
    "title": "39. Rest Parameters with Typed Arrays (...args: number[])",
    "slug": "rest-parameters-with-typed-arr",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Rest Parameters with Typed Arrays (...args: number[]) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Rest Parameters with Typed Arrays (...args",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Rest Parameters with Typed Arrays (...args: number[])\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction sumAll(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); } let total = sumAll(1, 2, 3, 4);\n```",
    "workedExample": {
      "title": "Worked Example: Rest Parameters with Typed Arrays (...args: number[])",
      "code": "function sumAll(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); } let total = sumAll(1, 2, 3, 4);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function sumAll(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); } let total = sumAll(1, 2, 3, 4);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction sumAll(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); } let total = sumAll(1, 2, 3, 4);\n",
    "solutionCode": "function sumAll(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); } let total = sumAll(1, 2, 3, 4);\n",
    "hints": [
      "Write: function sumAll(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); } let total = sumAll(1, 2, 3, 4);"
    ],
    "testCases": [
      {
        "id": "ts-39-tc-1",
        "description": "TypeScript compiles and satisfies Rest Parameters with Typed Arrays (...args: number[])",
        "testFn": "total === 10"
      }
    ]
  },
  {
    "id": "ts-40-function-type-signatures-",
    "title": "40. Function Type Signatures: (a: T) => R",
    "slug": "function-type-signatures-a-t-=",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Function Type Signatures: (a: T) => R in TypeScript with strict compile-time checking.",
    "concepts": [
      "Function Type Signatures",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Function Type Signatures: (a: T) => R\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Formatter = (input: string) => string; const uppercaseFormatter: Formatter = (s) => s.toUpperCase(); let out = uppercaseFormatter('ts');\n```",
    "workedExample": {
      "title": "Worked Example: Function Type Signatures: (a: T) => R",
      "code": "type Formatter = (input: string) => string; const uppercaseFormatter: Formatter = (s) => s.toUpperCase(); let out = uppercaseFormatter('ts');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Formatter = (input: string) => string; const uppercaseFormatter: Formatter = (s) => s.toUpperCase(); let out = uppercaseFormatter('ts');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype Formatter = (input: string) => string; const uppercaseFormatter: Formatter = (s) => s.toUpperCase(); let out = uppercaseFormatter('ts');\n",
    "solutionCode": "type Formatter = (input: string) => string; const uppercaseFormatter: Formatter = (s) => s.toUpperCase(); let out = uppercaseFormatter('ts');\n",
    "hints": [
      "Write: type Formatter = (input: string) => string; const uppercaseFormatter: Formatter = (s) => s.toUpperCase(); let out = uppercaseFormatter('ts');"
    ],
    "testCases": [
      {
        "id": "ts-40-tc-1",
        "description": "TypeScript compiles and satisfies Function Type Signatures: (a: T) => R",
        "testFn": "out === 'TS'"
      }
    ]
  },
  {
    "id": "ts-41-callback-function-types",
    "title": "41. Callback Function Types",
    "slug": "callback-function-types",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Callback Function Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Callback Function Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Callback Function Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction processNumber(n: number, cb: (val: number) => number): number { return cb(n); } let res = processNumber(5, x => x * 3);\n```",
    "workedExample": {
      "title": "Worked Example: Callback Function Types",
      "code": "function processNumber(n: number, cb: (val: number) => number): number { return cb(n); } let res = processNumber(5, x => x * 3);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function processNumber(n: number, cb: (val: number) => number): number { return cb(n); } let res = processNumber(5, x => x * 3);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction processNumber(n: number, cb: (val: number) => number): number { return cb(n); } let res = processNumber(5, x => x * 3);\n",
    "solutionCode": "function processNumber(n: number, cb: (val: number) => number): number { return cb(n); } let res = processNumber(5, x => x * 3);\n",
    "hints": [
      "Write: function processNumber(n: number, cb: (val: number) => number): number { return cb(n); } let res = processNumber(5, x => x * 3);"
    ],
    "testCases": [
      {
        "id": "ts-41-tc-1",
        "description": "TypeScript compiles and satisfies Callback Function Types",
        "testFn": "res === 15"
      }
    ]
  },
  {
    "id": "ts-42-function-overloads-multip",
    "title": "42. Function Overloads: Multiple Signatures",
    "slug": "function-overloads-multiple-si",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Function Overloads: Multiple Signatures in TypeScript with strict compile-time checking.",
    "concepts": [
      "Function Overloads",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Function Overloads: Multiple Signatures\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction combine(a: number, b: number): number; function combine(a: string, b: string): string; function combine(a: any, b: any): any { return a + b; } let out = combine(10, 20);\n```",
    "workedExample": {
      "title": "Worked Example: Function Overloads: Multiple Signatures",
      "code": "function combine(a: number, b: number): number; function combine(a: string, b: string): string; function combine(a: any, b: any): any { return a + b; } let out = combine(10, 20);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function combine(a: number, b: number): number; function combine(a: string, b: string): string; function combine(a: any, b: any): any { return a + b; } let out = combine(10, 20);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction combine(a: number, b: number): number; function combine(a: string, b: string): string; function combine(a: any, b: any): any { return a + b; } let out = combine(10, 20);\n",
    "solutionCode": "function combine(a: number, b: number): number; function combine(a: string, b: string): string; function combine(a: any, b: any): any { return a + b; } let out = combine(10, 20);\n",
    "hints": [
      "Write: function combine(a: number, b: number): number; function combine(a: string, b: string): string; function combine(a: any, b: any): any { return a + b; } let out = combine(10, 20);"
    ],
    "testCases": [
      {
        "id": "ts-42-tc-1",
        "description": "TypeScript compiles and satisfies Function Overloads: Multiple Signatures",
        "testFn": "out === 30"
      }
    ]
  },
  {
    "id": "ts-43-typing-this-in-functions",
    "title": "43. Typing 'this' in Functions",
    "slug": "typing-this-in-functions",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Typing 'this' in Functions in TypeScript with strict compile-time checking.",
    "concepts": [
      "Typing 'this' in Functions",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Typing 'this' in Functions\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction showIdentity(this: { id: string }): string { return this.id; } let ctx = { id: 'ctx-1', show: showIdentity }; let out = ctx.show();\n```",
    "workedExample": {
      "title": "Worked Example: Typing 'this' in Functions",
      "code": "function showIdentity(this: { id: string }): string { return this.id; } let ctx = { id: 'ctx-1', show: showIdentity }; let out = ctx.show();",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function showIdentity(this: { id: string }): string { return this.id; } let ctx = { id: 'ctx-1', show: showIdentity }; let out = ctx.show();`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction showIdentity(this: { id: string }): string { return this.id; } let ctx = { id: 'ctx-1', show: showIdentity }; let out = ctx.show();\n",
    "solutionCode": "function showIdentity(this: { id: string }): string { return this.id; } let ctx = { id: 'ctx-1', show: showIdentity }; let out = ctx.show();\n",
    "hints": [
      "Write: function showIdentity(this: { id: string }): string { return this.id; } let ctx = { id: 'ctx-1', show: showIdentity }; let out = ctx.show();"
    ],
    "testCases": [
      {
        "id": "ts-43-tc-1",
        "description": "TypeScript compiles and satisfies Typing 'this' in Functions",
        "testFn": "out === 'ctx-1'"
      }
    ]
  },
  {
    "id": "ts-44-async-functions-returning",
    "title": "44. Async Functions Returning Promise<T>",
    "slug": "async-functions-returning-prom",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Async Functions Returning Promise<T> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Async Functions Returning Promise<T>",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Async Functions Returning Promise<T>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nasync function fetchScore(): Promise<number> { return 100; }\n```",
    "workedExample": {
      "title": "Worked Example: Async Functions Returning Promise<T>",
      "code": "async function fetchScore(): Promise<number> { return 100; }",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `async function fetchScore(): Promise<number> { return 100; }`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nasync function fetchScore(): Promise<number> { return 100; }\n",
    "solutionCode": "async function fetchScore(): Promise<number> { return 100; }\n",
    "hints": [
      "Write: async function fetchScore(): Promise<number> { return 100; }"
    ],
    "testCases": [
      {
        "id": "ts-44-tc-1",
        "description": "TypeScript compiles and satisfies Async Functions Returning Promise<T>",
        "testFn": "typeof fetchScore === 'function'"
      }
    ]
  },
  {
    "id": "ts-45-constructor-signatures-ne",
    "title": "45. Constructor Signatures (new (...args: any[]) => any)",
    "slug": "constructor-signatures-new-...",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Constructor Signatures (new (...args: any[]) => any) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Constructor Signatures (new (...args",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Constructor Signatures (new (...args: any[]) => any)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface ClockConstructor { new (hour: number, minute: number): any; }\n```",
    "workedExample": {
      "title": "Worked Example: Constructor Signatures (new (...args: any[]) => any)",
      "code": "interface ClockConstructor { new (hour: number, minute: number): any; }",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface ClockConstructor { new (hour: number, minute: number): any; }`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface ClockConstructor { new (hour: number, minute: number): any; }\n",
    "solutionCode": "interface ClockConstructor { new (hour: number, minute: number): any; }\n",
    "hints": [
      "Write: interface ClockConstructor { new (hour: number, minute: number): any; }"
    ],
    "testCases": [
      {
        "id": "ts-45-tc-1",
        "description": "TypeScript compiles and satisfies Constructor Signatures (new (...args: any[]) => any)",
        "testFn": "true"
      }
    ]
  },
  {
    "id": "ts-46-module-4-review-pipeline-",
    "title": "46. Module 4 Review: Pipeline Middleware",
    "slug": "module-4-review-pipeline-middl",
    "language": "typescript",
    "category": "Module 4: Function Contracts & Overloads",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Module 4 Review: Pipeline Middleware in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 4 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 4 Review: Pipeline Middleware\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Middleware = (ctx: { path: string }) => boolean; const auth: Middleware = (c) => c.path === '/admin'; let allowed = auth({ path: '/admin' });\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: Pipeline Middleware",
      "code": "type Middleware = (ctx: { path: string }) => boolean; const auth: Middleware = (c) => c.path === '/admin'; let allowed = auth({ path: '/admin' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Middleware = (ctx: { path: string }) => boolean; const auth: Middleware = (c) => c.path === '/admin'; let allowed = auth({ path: '/admin' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype Middleware = (ctx: { path: string }) => boolean; const auth: Middleware = (c) => c.path === '/admin'; let allowed = auth({ path: '/admin' });\n",
    "solutionCode": "type Middleware = (ctx: { path: string }) => boolean; const auth: Middleware = (c) => c.path === '/admin'; let allowed = auth({ path: '/admin' });\n",
    "hints": [
      "Write: type Middleware = (ctx: { path: string }) => boolean; const auth: Middleware = (c) => c.path === '/admin'; let allowed = auth({ path: '/admin' });"
    ],
    "testCases": [
      {
        "id": "ts-46-tc-1",
        "description": "TypeScript compiles and satisfies Module 4 Review: Pipeline Middleware",
        "testFn": "allowed === true"
      }
    ]
  }
];
