import { Lesson } from '../../../types';

export const tsModule6Lessons: Lesson[] = [
  {
    "id": "ts-59-numeric-enums-0,-1,-2",
    "title": "59. Numeric Enums (0, 1, 2)",
    "slug": "numeric-enums-0,-1,-2",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Numeric Enums (0, 1, 2) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Numeric Enums (0, 1, 2)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Numeric Enums (0, 1, 2)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum Direction { Up, Down, Left, Right } let dir = Direction.Up;\n```",
    "workedExample": {
      "title": "Worked Example: Numeric Enums (0, 1, 2)",
      "code": "enum Direction { Up, Down, Left, Right } let dir = Direction.Up;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum Direction { Up, Down, Left, Right } let dir = Direction.Up;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum Direction { Up, Down, Left, Right } let dir = Direction.Up;\n",
    "solutionCode": "enum Direction { Up, Down, Left, Right } let dir = Direction.Up;\n",
    "hints": [
      "Write: enum Direction { Up, Down, Left, Right } let dir = Direction.Up;"
    ],
    "testCases": [
      {
        "id": "ts-59-tc-1",
        "description": "TypeScript compiles and satisfies Numeric Enums (0, 1, 2)",
        "testFn": "dir === 0"
      }
    ]
  },
  {
    "id": "ts-60-string-enums-open,-closed",
    "title": "60. String Enums ('OPEN', 'CLOSED')",
    "slug": "string-enums-open,-closed",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master String Enums ('OPEN', 'CLOSED') in TypeScript with strict compile-time checking.",
    "concepts": [
      "String Enums ('OPEN', 'CLOSED')",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### String Enums ('OPEN', 'CLOSED')\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } let s = Status.Active;\n```",
    "workedExample": {
      "title": "Worked Example: String Enums ('OPEN', 'CLOSED')",
      "code": "enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } let s = Status.Active;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } let s = Status.Active;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } let s = Status.Active;\n",
    "solutionCode": "enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } let s = Status.Active;\n",
    "hints": [
      "Write: enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' } let s = Status.Active;"
    ],
    "testCases": [
      {
        "id": "ts-60-tc-1",
        "description": "TypeScript compiles and satisfies String Enums ('OPEN', 'CLOSED')",
        "testFn": "s === 'ACTIVE'"
      }
    ]
  },
  {
    "id": "ts-61-heterogeneous-enums-mixed",
    "title": "61. Heterogeneous Enums (Mixed)",
    "slug": "heterogeneous-enums-mixed",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Heterogeneous Enums (Mixed) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Heterogeneous Enums (Mixed)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Heterogeneous Enums (Mixed)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum Mixed { No = 0, Yes = 'YES' } let answer = Mixed.Yes;\n```",
    "workedExample": {
      "title": "Worked Example: Heterogeneous Enums (Mixed)",
      "code": "enum Mixed { No = 0, Yes = 'YES' } let answer = Mixed.Yes;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum Mixed { No = 0, Yes = 'YES' } let answer = Mixed.Yes;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum Mixed { No = 0, Yes = 'YES' } let answer = Mixed.Yes;\n",
    "solutionCode": "enum Mixed { No = 0, Yes = 'YES' } let answer = Mixed.Yes;\n",
    "hints": [
      "Write: enum Mixed { No = 0, Yes = 'YES' } let answer = Mixed.Yes;"
    ],
    "testCases": [
      {
        "id": "ts-61-tc-1",
        "description": "TypeScript compiles and satisfies Heterogeneous Enums (Mixed)",
        "testFn": "answer === 'YES'"
      }
    ]
  },
  {
    "id": "ts-62-const-enums-zero-runtime-",
    "title": "62. Const Enums: Zero Runtime Overhead",
    "slug": "const-enums-zero-runtime-overh",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Const Enums: Zero Runtime Overhead in TypeScript with strict compile-time checking.",
    "concepts": [
      "Const Enums",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Const Enums: Zero Runtime Overhead\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst enum Mode { Fast = 1, Slow = 2 } let m = Mode.Fast;\n```",
    "workedExample": {
      "title": "Worked Example: Const Enums: Zero Runtime Overhead",
      "code": "const enum Mode { Fast = 1, Slow = 2 } let m = Mode.Fast;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const enum Mode { Fast = 1, Slow = 2 } let m = Mode.Fast;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nconst enum Mode { Fast = 1, Slow = 2 } let m = Mode.Fast;\n",
    "solutionCode": "const enum Mode { Fast = 1, Slow = 2 } let m = Mode.Fast;\n",
    "hints": [
      "Write: const enum Mode { Fast = 1, Slow = 2 } let m = Mode.Fast;"
    ],
    "testCases": [
      {
        "id": "ts-62-tc-1",
        "description": "TypeScript compiles and satisfies Const Enums: Zero Runtime Overhead",
        "testFn": "m === 1"
      }
    ]
  },
  {
    "id": "ts-63-reverse-mapping-in-numeri",
    "title": "63. Reverse Mapping in Numeric Enums",
    "slug": "reverse-mapping-in-numeric-enu",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Reverse Mapping in Numeric Enums in TypeScript with strict compile-time checking.",
    "concepts": [
      "Reverse Mapping in Numeric Enums",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Reverse Mapping in Numeric Enums\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum Role { Admin, Member } let roleName = Role[0];\n```",
    "workedExample": {
      "title": "Worked Example: Reverse Mapping in Numeric Enums",
      "code": "enum Role { Admin, Member } let roleName = Role[0];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum Role { Admin, Member } let roleName = Role[0];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum Role { Admin, Member } let roleName = Role[0];\n",
    "solutionCode": "enum Role { Admin, Member } let roleName = Role[0];\n",
    "hints": [
      "Write: enum Role { Admin, Member } let roleName = Role[0];"
    ],
    "testCases": [
      {
        "id": "ts-63-tc-1",
        "description": "TypeScript compiles and satisfies Reverse Mapping in Numeric Enums",
        "testFn": "roleName === 'Admin'"
      }
    ]
  },
  {
    "id": "ts-64-as-const-type-assertions-",
    "title": "64. 'as const' Type Assertions (const assertions)",
    "slug": "as-const-type-assertions-const",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master 'as const' Type Assertions (const assertions) in TypeScript with strict compile-time checking.",
    "concepts": [
      "'as const' Type Assertions (const assertions)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### 'as const' Type Assertions (const assertions)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst HTTP_METHODS = ['GET', 'POST', 'PUT'] as const; let first = HTTP_METHODS[0];\n```",
    "workedExample": {
      "title": "Worked Example: 'as const' Type Assertions (const assertions)",
      "code": "const HTTP_METHODS = ['GET', 'POST', 'PUT'] as const; let first = HTTP_METHODS[0];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const HTTP_METHODS = ['GET', 'POST', 'PUT'] as const; let first = HTTP_METHODS[0];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nconst HTTP_METHODS = ['GET', 'POST', 'PUT'] as const; let first = HTTP_METHODS[0];\n",
    "solutionCode": "const HTTP_METHODS = ['GET', 'POST', 'PUT'] as const; let first = HTTP_METHODS[0];\n",
    "hints": [
      "Write: const HTTP_METHODS = ['GET', 'POST', 'PUT'] as const; let first = HTTP_METHODS[0];"
    ],
    "testCases": [
      {
        "id": "ts-64-tc-1",
        "description": "TypeScript compiles and satisfies 'as const' Type Assertions (const assertions)",
        "testFn": "first === 'GET'"
      }
    ]
  },
  {
    "id": "ts-65-object-with-as-const-vs-e",
    "title": "65. Object with as const vs Enums",
    "slug": "object-with-as-const-vs-enums",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Object with as const vs Enums in TypeScript with strict compile-time checking.",
    "concepts": [
      "Object with as const vs Enums",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Object with as const vs Enums\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst Roles = { ADMIN: 'admin', USER: 'user' } as const; type UserRole = typeof Roles[keyof typeof Roles]; let r: UserRole = 'admin';\n```",
    "workedExample": {
      "title": "Worked Example: Object with as const vs Enums",
      "code": "const Roles = { ADMIN: 'admin', USER: 'user' } as const; type UserRole = typeof Roles[keyof typeof Roles]; let r: UserRole = 'admin';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const Roles = { ADMIN: 'admin', USER: 'user' } as const; type UserRole = typeof Roles[keyof typeof Roles]; let r: UserRole = 'admin';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nconst Roles = { ADMIN: 'admin', USER: 'user' } as const; type UserRole = typeof Roles[keyof typeof Roles]; let r: UserRole = 'admin';\n",
    "solutionCode": "const Roles = { ADMIN: 'admin', USER: 'user' } as const; type UserRole = typeof Roles[keyof typeof Roles]; let r: UserRole = 'admin';\n",
    "hints": [
      "Write: const Roles = { ADMIN: 'admin', USER: 'user' } as const; type UserRole = typeof Roles[keyof typeof Roles]; let r: UserRole = 'admin';"
    ],
    "testCases": [
      {
        "id": "ts-65-tc-1",
        "description": "TypeScript compiles and satisfies Object with as const vs Enums",
        "testFn": "r === 'admin'"
      }
    ]
  },
  {
    "id": "ts-66-enums-as-bitwise-flags",
    "title": "66. Enums as Bitwise Flags",
    "slug": "enums-as-bitwise-flags",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Enums as Bitwise Flags in TypeScript with strict compile-time checking.",
    "concepts": [
      "Enums as Bitwise Flags",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Enums as Bitwise Flags\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum Permission { Read = 1, Write = 2, Execute = 4 } let perms = Permission.Read | Permission.Write;\n```",
    "workedExample": {
      "title": "Worked Example: Enums as Bitwise Flags",
      "code": "enum Permission { Read = 1, Write = 2, Execute = 4 } let perms = Permission.Read | Permission.Write;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum Permission { Read = 1, Write = 2, Execute = 4 } let perms = Permission.Read | Permission.Write;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum Permission { Read = 1, Write = 2, Execute = 4 } let perms = Permission.Read | Permission.Write;\n",
    "solutionCode": "enum Permission { Read = 1, Write = 2, Execute = 4 } let perms = Permission.Read | Permission.Write;\n",
    "hints": [
      "Write: enum Permission { Read = 1, Write = 2, Execute = 4 } let perms = Permission.Read | Permission.Write;"
    ],
    "testCases": [
      {
        "id": "ts-66-tc-1",
        "description": "TypeScript compiles and satisfies Enums as Bitwise Flags",
        "testFn": "perms === 3"
      }
    ]
  },
  {
    "id": "ts-67-computed-enum-members",
    "title": "67. Computed Enum Members",
    "slug": "computed-enum-members",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Computed Enum Members in TypeScript with strict compile-time checking.",
    "concepts": [
      "Computed Enum Members",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Computed Enum Members\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum MathConst { Base = 2, Doubled = Base * 2 } let val = MathConst.Doubled;\n```",
    "workedExample": {
      "title": "Worked Example: Computed Enum Members",
      "code": "enum MathConst { Base = 2, Doubled = Base * 2 } let val = MathConst.Doubled;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum MathConst { Base = 2, Doubled = Base * 2 } let val = MathConst.Doubled;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum MathConst { Base = 2, Doubled = Base * 2 } let val = MathConst.Doubled;\n",
    "solutionCode": "enum MathConst { Base = 2, Doubled = Base * 2 } let val = MathConst.Doubled;\n",
    "hints": [
      "Write: enum MathConst { Base = 2, Doubled = Base * 2 } let val = MathConst.Doubled;"
    ],
    "testCases": [
      {
        "id": "ts-67-tc-1",
        "description": "TypeScript compiles and satisfies Computed Enum Members",
        "testFn": "val === 4"
      }
    ]
  },
  {
    "id": "ts-68-module-6-review-http-resp",
    "title": "68. Module 6 Review: HTTP Response Statuses",
    "slug": "module-6-review-http-response-",
    "language": "typescript",
    "category": "Module 6: Enums & Const Assertions",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 6 Review: HTTP Response Statuses in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 6 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 6 Review: HTTP Response Statuses\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nenum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 } let code = HttpStatus.OK;\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: HTTP Response Statuses",
      "code": "enum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 } let code = HttpStatus.OK;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `enum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 } let code = HttpStatus.OK;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nenum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 } let code = HttpStatus.OK;\n",
    "solutionCode": "enum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 } let code = HttpStatus.OK;\n",
    "hints": [
      "Write: enum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 } let code = HttpStatus.OK;"
    ],
    "testCases": [
      {
        "id": "ts-68-tc-1",
        "description": "TypeScript compiles and satisfies Module 6 Review: HTTP Response Statuses",
        "testFn": "code === 200"
      }
    ]
  }
];
