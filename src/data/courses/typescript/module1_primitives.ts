import { Lesson } from '../../../types';

export const tsModule1Lessons: Lesson[] = [
  {
    "id": "ts-1-primitive-types-string,-n",
    "title": "1. Primitive Types: string, number, boolean",
    "slug": "primitive-types-string,-number",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Primitive Types: string, number, boolean in TypeScript with strict compile-time checking.",
    "concepts": [
      "Primitive Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Primitive Types: string, number, boolean\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet username: string = 'Alex'; let age: number = 28; let isOnline: boolean = true;\n```",
    "workedExample": {
      "title": "Worked Example: Primitive Types: string, number, boolean",
      "code": "let username: string = 'Alex'; let age: number = 28; let isOnline: boolean = true;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let username: string = 'Alex'; let age: number = 28; let isOnline: boolean = true;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet username: string = 'Alex'; let age: number = 28; let isOnline: boolean = true;\n",
    "solutionCode": "let username: string = 'Alex'; let age: number = 28; let isOnline: boolean = true;\n",
    "hints": [
      "Write: let username: string = 'Alex'; let age: number = 28; let isOnline: boolean = true;"
    ],
    "testCases": [
      {
        "id": "ts-1-tc-1",
        "description": "TypeScript compiles and satisfies Primitive Types: string, number, boolean",
        "testFn": "username === 'Alex' && age === 28"
      }
    ]
  },
  {
    "id": "ts-2-type-inference-letting-ty",
    "title": "2. Type Inference: Letting TypeScript Guess",
    "slug": "type-inference-letting-typescr",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Type Inference: Letting TypeScript Guess in TypeScript with strict compile-time checking.",
    "concepts": [
      "Type Inference",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Type Inference: Letting TypeScript Guess\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet count = 42; let message = 'hello';\n```",
    "workedExample": {
      "title": "Worked Example: Type Inference: Letting TypeScript Guess",
      "code": "let count = 42; let message = 'hello';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let count = 42; let message = 'hello';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet count = 42; let message = 'hello';\n",
    "solutionCode": "let count = 42; let message = 'hello';\n",
    "hints": [
      "Write: let count = 42; let message = 'hello';"
    ],
    "testCases": [
      {
        "id": "ts-2-tc-1",
        "description": "TypeScript compiles and satisfies Type Inference: Letting TypeScript Guess",
        "testFn": "count === 42 && message === 'hello'"
      }
    ]
  },
  {
    "id": "ts-3-the-any-escape-hatch-and-",
    "title": "3. The 'any' Escape Hatch (And Why to Avoid It)",
    "slug": "the-any-escape-hatch-and-why-t",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The 'any' Escape Hatch (And Why to Avoid It) in TypeScript with strict compile-time checking.",
    "concepts": [
      "The 'any' Escape Hatch (And Why to Avoid It)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### The 'any' Escape Hatch (And Why to Avoid It)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet flexible: any = 10; flexible = 'now a string';\n```",
    "workedExample": {
      "title": "Worked Example: The 'any' Escape Hatch (And Why to Avoid It)",
      "code": "let flexible: any = 10; flexible = 'now a string';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let flexible: any = 10; flexible = 'now a string';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet flexible: any = 10; flexible = 'now a string';\n",
    "solutionCode": "let flexible: any = 10; flexible = 'now a string';\n",
    "hints": [
      "Write: let flexible: any = 10; flexible = 'now a string';"
    ],
    "testCases": [
      {
        "id": "ts-3-tc-1",
        "description": "TypeScript compiles and satisfies The 'any' Escape Hatch (And Why to Avoid It)",
        "testFn": "flexible === 'now a string'"
      }
    ]
  },
  {
    "id": "ts-4-the-type-safe-alternative",
    "title": "4. The Type-Safe Alternative: 'unknown'",
    "slug": "the-type-safe-alternative-unkn",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Type-Safe Alternative: 'unknown' in TypeScript with strict compile-time checking.",
    "concepts": [
      "The Type-Safe Alternative",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### The Type-Safe Alternative: 'unknown'\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet input: unknown = 'secure'; let strLength = typeof input === 'string' ? input.length : 0;\n```",
    "workedExample": {
      "title": "Worked Example: The Type-Safe Alternative: 'unknown'",
      "code": "let input: unknown = 'secure'; let strLength = typeof input === 'string' ? input.length : 0;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let input: unknown = 'secure'; let strLength = typeof input === 'string' ? input.length : 0;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet input: unknown = 'secure'; let strLength = typeof input === 'string' ? input.length : 0;\n",
    "solutionCode": "let input: unknown = 'secure'; let strLength = typeof input === 'string' ? input.length : 0;\n",
    "hints": [
      "Write: let input: unknown = 'secure'; let strLength = typeof input === 'string' ? input.length : 0;"
    ],
    "testCases": [
      {
        "id": "ts-4-tc-1",
        "description": "TypeScript compiles and satisfies The Type-Safe Alternative: 'unknown'",
        "testFn": "strLength === 6"
      }
    ]
  },
  {
    "id": "ts-5-explicit-void-for-functio",
    "title": "5. Explicit Void for Functions Without Return",
    "slug": "explicit-void-for-functions-wi",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Explicit Void for Functions Without Return in TypeScript with strict compile-time checking.",
    "concepts": [
      "Explicit Void for Functions Without Return",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Explicit Void for Functions Without Return\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction logMessage(msg: string): void { console.log(msg); } logMessage('Saved');\n```",
    "workedExample": {
      "title": "Worked Example: Explicit Void for Functions Without Return",
      "code": "function logMessage(msg: string): void { console.log(msg); } logMessage('Saved');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function logMessage(msg: string): void { console.log(msg); } logMessage('Saved');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction logMessage(msg: string): void { console.log(msg); } logMessage('Saved');\n",
    "solutionCode": "function logMessage(msg: string): void { console.log(msg); } logMessage('Saved');\n",
    "hints": [
      "Write: function logMessage(msg: string): void { console.log(msg); } logMessage('Saved');"
    ],
    "testCases": [
      {
        "id": "ts-5-tc-1",
        "description": "TypeScript compiles and satisfies Explicit Void for Functions Without Return",
        "testFn": "typeof logMessage === 'function'"
      }
    ]
  },
  {
    "id": "ts-6-null-and-undefined-in-str",
    "title": "6. Null and Undefined in Strict Mode",
    "slug": "null-and-undefined-in-strict-m",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Null and Undefined in Strict Mode in TypeScript with strict compile-time checking.",
    "concepts": [
      "Null and Undefined in Strict Mode",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Null and Undefined in Strict Mode\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet emptyVal: string | null = null; emptyVal = 'Filled';\n```",
    "workedExample": {
      "title": "Worked Example: Null and Undefined in Strict Mode",
      "code": "let emptyVal: string | null = null; emptyVal = 'Filled';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let emptyVal: string | null = null; emptyVal = 'Filled';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet emptyVal: string | null = null; emptyVal = 'Filled';\n",
    "solutionCode": "let emptyVal: string | null = null; emptyVal = 'Filled';\n",
    "hints": [
      "Write: let emptyVal: string | null = null; emptyVal = 'Filled';"
    ],
    "testCases": [
      {
        "id": "ts-6-tc-1",
        "description": "TypeScript compiles and satisfies Null and Undefined in Strict Mode",
        "testFn": "emptyVal === 'Filled'"
      }
    ]
  },
  {
    "id": "ts-7-literal-types-exact-strin",
    "title": "7. Literal Types (Exact String & Number Values)",
    "slug": "literal-types-exact-string-&-n",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Literal Types (Exact String & Number Values) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Literal Types (Exact String & Number Values)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Literal Types (Exact String & Number Values)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet role: 'admin' | 'user' = 'admin';\n```",
    "workedExample": {
      "title": "Worked Example: Literal Types (Exact String & Number Values)",
      "code": "let role: 'admin' | 'user' = 'admin';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let role: 'admin' | 'user' = 'admin';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet role: 'admin' | 'user' = 'admin';\n",
    "solutionCode": "let role: 'admin' | 'user' = 'admin';\n",
    "hints": [
      "Write: let role: 'admin' | 'user' = 'admin';"
    ],
    "testCases": [
      {
        "id": "ts-7-tc-1",
        "description": "TypeScript compiles and satisfies Literal Types (Exact String & Number Values)",
        "testFn": "role === 'admin'"
      }
    ]
  },
  {
    "id": "ts-8-the-unreachable-never-typ",
    "title": "8. The Unreachable 'never' Type",
    "slug": "the-unreachable-never-type",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Unreachable 'never' Type in TypeScript with strict compile-time checking.",
    "concepts": [
      "The Unreachable 'never' Type",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### The Unreachable 'never' Type\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction fail(msg: string): never { throw new Error(msg); }\n```",
    "workedExample": {
      "title": "Worked Example: The Unreachable 'never' Type",
      "code": "function fail(msg: string): never { throw new Error(msg); }",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function fail(msg: string): never { throw new Error(msg); }`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nfunction fail(msg: string): never { throw new Error(msg); }\n",
    "solutionCode": "function fail(msg: string): never { throw new Error(msg); }\n",
    "hints": [
      "Write: function fail(msg: string): never { throw new Error(msg); }"
    ],
    "testCases": [
      {
        "id": "ts-8-tc-1",
        "description": "TypeScript compiles and satisfies The Unreachable 'never' Type",
        "testFn": "typeof fail === 'function'"
      }
    ]
  },
  {
    "id": "ts-9-symbol-and-bigint-types",
    "title": "9. Symbol and BigInt Types",
    "slug": "symbol-and-bigint-types",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Symbol and BigInt Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Symbol and BigInt Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Symbol and BigInt Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet bigNum: bigint = 9007199254740991n;\n```",
    "workedExample": {
      "title": "Worked Example: Symbol and BigInt Types",
      "code": "let bigNum: bigint = 9007199254740991n;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let bigNum: bigint = 9007199254740991n;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet bigNum: bigint = 9007199254740991n;\n",
    "solutionCode": "let bigNum: bigint = 9007199254740991n;\n",
    "hints": [
      "Write: let bigNum: bigint = 9007199254740991n;"
    ],
    "testCases": [
      {
        "id": "ts-9-tc-1",
        "description": "TypeScript compiles and satisfies Symbol and BigInt Types",
        "testFn": "typeof bigNum === 'bigint'"
      }
    ]
  },
  {
    "id": "ts-10-module-1-review-typed-con",
    "title": "10. Module 1 Review: Typed Config",
    "slug": "module-1-review-typed-config",
    "language": "typescript",
    "category": "Module 1: Primitives & Basic Types",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: Typed Config in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 1 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 1 Review: Typed Config\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet host: string = 'localhost'; let port: number = 8080; let ssl: boolean = true;\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: Typed Config",
      "code": "let host: string = 'localhost'; let port: number = 8080; let ssl: boolean = true;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let host: string = 'localhost'; let port: number = 8080; let ssl: boolean = true;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet host: string = 'localhost'; let port: number = 8080; let ssl: boolean = true;\n",
    "solutionCode": "let host: string = 'localhost'; let port: number = 8080; let ssl: boolean = true;\n",
    "hints": [
      "Write: let host: string = 'localhost'; let port: number = 8080; let ssl: boolean = true;"
    ],
    "testCases": [
      {
        "id": "ts-10-tc-1",
        "description": "TypeScript compiles and satisfies Module 1 Review: Typed Config",
        "testFn": "host === 'localhost' && port === 8080"
      }
    ]
  }
];
