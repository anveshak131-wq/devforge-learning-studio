import { Lesson } from '../../../types';

export const tsModule8Lessons: Lesson[] = [
  {
    "id": "ts-83-generic-constraints-with-",
    "title": "83. Generic Constraints with 'extends' (<T extends Entity>)",
    "slug": "generic-constraints-with-exten",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Generic Constraints with 'extends' (<T extends Entity>) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Constraints with 'extends' (<T extends Entity>)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Constraints with 'extends' (<T extends Entity>)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface HasLength { length: number; } function logLength<T extends HasLength>(item: T): number { return item.length; } let len = logLength('TypeScript');\n```",
    "workedExample": {
      "title": "Worked Example: Generic Constraints with 'extends' (<T extends Entity>)",
      "code": "interface HasLength { length: number; } function logLength<T extends HasLength>(item: T): number { return item.length; } let len = logLength('TypeScript');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface HasLength { length: number; } function logLength<T extends HasLength>(item: T): number { return item.length; } let len = logLength('TypeScript');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface HasLength { length: number; } function logLength<T extends HasLength>(item: T): number { return item.length; } let len = logLength('TypeScript');\n",
    "hints": [
      "Write: interface HasLength { length: number; } function logLength<T extends HasLength>(item: T): number { return item.length; } let len = logLength('TypeScript');"
    ],
    "testCases": [
      {
        "id": "ts-83-tc-1",
        "description": "TypeScript compiles and satisfies Generic Constraints with 'extends' (<T extends Entity>)",
        "testFn": "len === 10"
      }
    ]
  },
  {
    "id": "ts-84-constraining-with-primiti",
    "title": "84. Constraining with Primitive Unions (<T extends string | number>)",
    "slug": "constraining-with-primitive-un",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Constraining with Primitive Unions (<T extends string | number>) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Constraining with Primitive Unions (<T extends string | number>)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Constraining with Primitive Unions (<T extends string | number>)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction addOrConcat<T extends string | number>(a: T, b: T): any { return (a as any) + (b as any); } let out = addOrConcat(10, 20);\n```",
    "workedExample": {
      "title": "Worked Example: Constraining with Primitive Unions (<T extends string | number>)",
      "code": "function addOrConcat<T extends string | number>(a: T, b: T): any { return (a as any) + (b as any); } let out = addOrConcat(10, 20);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function addOrConcat<T extends string | number>(a: T, b: T): any { return (a as any) + (b as any); } let out = addOrConcat(10, 20);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function addOrConcat<T extends string | number>(a: T, b: T): any { return (a as any) + (b as any); } let out = addOrConcat(10, 20);\n",
    "hints": [
      "Write: function addOrConcat<T extends string | number>(a: T, b: T): any { return (a as any) + (b as any); } let out = addOrConcat(10, 20);"
    ],
    "testCases": [
      {
        "id": "ts-84-tc-1",
        "description": "TypeScript compiles and satisfies Constraining with Primitive Unions (<T extends string | number>)",
        "testFn": "out === 30"
      }
    ]
  },
  {
    "id": "ts-85-the-keyof-type-operator",
    "title": "85. The 'keyof' Type Operator",
    "slug": "the-keyof-type-operator",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master The 'keyof' Type Operator in TypeScript with strict compile-time checking.",
    "concepts": [
      "The 'keyof' Type Operator",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### The 'keyof' Type Operator\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface User { id: number; name: string; } type UserKey = keyof User; let k: UserKey = 'name';\n```",
    "workedExample": {
      "title": "Worked Example: The 'keyof' Type Operator",
      "code": "interface User { id: number; name: string; } type UserKey = keyof User; let k: UserKey = 'name';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface User { id: number; name: string; } type UserKey = keyof User; let k: UserKey = 'name';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface User { id: number; name: string; } type UserKey = keyof User; let k: UserKey = 'name';\n",
    "hints": [
      "Write: interface User { id: number; name: string; } type UserKey = keyof User; let k: UserKey = 'name';"
    ],
    "testCases": [
      {
        "id": "ts-85-tc-1",
        "description": "TypeScript compiles and satisfies The 'keyof' Type Operator",
        "testFn": "k === 'name'"
      }
    ]
  },
  {
    "id": "ts-86-indexed-access-/-lookup-t",
    "title": "86. Indexed Access / Lookup Types (T[K])",
    "slug": "indexed-access-/-lookup-types-",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Indexed Access / Lookup Types (T[K]) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Indexed Access / Lookup Types (T[K])",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Indexed Access / Lookup Types (T[K])\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Product { id: string; price: number; } type PriceType = Product['price']; let p: PriceType = 49.99;\n```",
    "workedExample": {
      "title": "Worked Example: Indexed Access / Lookup Types (T[K])",
      "code": "interface Product { id: string; price: number; } type PriceType = Product['price']; let p: PriceType = 49.99;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Product { id: string; price: number; } type PriceType = Product['price']; let p: PriceType = 49.99;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Product { id: string; price: number; } type PriceType = Product['price']; let p: PriceType = 49.99;\n",
    "hints": [
      "Write: interface Product { id: string; price: number; } type PriceType = Product['price']; let p: PriceType = 49.99;"
    ],
    "testCases": [
      {
        "id": "ts-86-tc-1",
        "description": "TypeScript compiles and satisfies Indexed Access / Lookup Types (T[K])",
        "testFn": "p === 49.99"
      }
    ]
  },
  {
    "id": "ts-87-type-safe-property-lookup",
    "title": "87. Type-Safe Property Lookup: getProperty<T, K extends keyof T>",
    "slug": "type-safe-property-lookup-getp",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Type-Safe Property Lookup: getProperty<T, K extends keyof T> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Type-Safe Property Lookup",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Type-Safe Property Lookup: getProperty<T, K extends keyof T>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; } let user = { name: 'Alice', age: 25 }; let uName = getProperty(user, 'name');\n```",
    "workedExample": {
      "title": "Worked Example: Type-Safe Property Lookup: getProperty<T, K extends keyof T>",
      "code": "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; } let user = { name: 'Alice', age: 25 }; let uName = getProperty(user, 'name');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; } let user = { name: 'Alice', age: 25 }; let uName = getProperty(user, 'name');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; } let user = { name: 'Alice', age: 25 }; let uName = getProperty(user, 'name');\n",
    "hints": [
      "Write: function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; } let user = { name: 'Alice', age: 25 }; let uName = getProperty(user, 'name');"
    ],
    "testCases": [
      {
        "id": "ts-87-tc-1",
        "description": "TypeScript compiles and satisfies Type-Safe Property Lookup: getProperty<T, K extends keyof T>",
        "testFn": "uName === 'Alice'"
      }
    ]
  },
  {
    "id": "ts-88-constraining-parameters-b",
    "title": "88. Constraining Parameters by Other Parameters",
    "slug": "constraining-parameters-by-oth",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Constraining Parameters by Other Parameters in TypeScript with strict compile-time checking.",
    "concepts": [
      "Constraining Parameters by Other Parameters",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Constraining Parameters by Other Parameters\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction copyProp<T, K extends keyof T>(target: T, source: T, key: K): void { target[key] = source[key]; } let a = { x: 1 }; let b = { x: 2 }; copyProp(a, b, 'x');\n```",
    "workedExample": {
      "title": "Worked Example: Constraining Parameters by Other Parameters",
      "code": "function copyProp<T, K extends keyof T>(target: T, source: T, key: K): void { target[key] = source[key]; } let a = { x: 1 }; let b = { x: 2 }; copyProp(a, b, 'x');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function copyProp<T, K extends keyof T>(target: T, source: T, key: K): void { target[key] = source[key]; } let a = { x: 1 }; let b = { x: 2 }; copyProp(a, b, 'x');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function copyProp<T, K extends keyof T>(target: T, source: T, key: K): void { target[key] = source[key]; } let a = { x: 1 }; let b = { x: 2 }; copyProp(a, b, 'x');\n",
    "hints": [
      "Write: function copyProp<T, K extends keyof T>(target: T, source: T, key: K): void { target[key] = source[key]; } let a = { x: 1 }; let b = { x: 2 }; copyProp(a, b, 'x');"
    ],
    "testCases": [
      {
        "id": "ts-88-tc-1",
        "description": "TypeScript compiles and satisfies Constraining Parameters by Other Parameters",
        "testFn": "a.x === 2"
      }
    ]
  },
  {
    "id": "ts-89-multiple-generic-constrai",
    "title": "89. Multiple Generic Constraints",
    "slug": "multiple-generic-constraints",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Multiple Generic Constraints in TypeScript with strict compile-time checking.",
    "concepts": [
      "Multiple Generic Constraints",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Multiple Generic Constraints\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface HasId { id: number; } interface HasName { name: string; } function printInfo<T extends HasId & HasName>(item: T): string { return `${item.id}: ${item.name}`; } let res = printInfo({ id: 1, name: 'Root' });\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Generic Constraints",
      "code": "interface HasId { id: number; } interface HasName { name: string; } function printInfo<T extends HasId & HasName>(item: T): string { return `${item.id}: ${item.name}`; } let res = printInfo({ id: 1, name: 'Root' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface HasId { id: number; } interface HasName { name: string; } function printInfo<T extends HasId & HasName>(item: T): string { return `${item.id}: ${item.name}`; } let res = printInfo({ id: 1, name: 'Root' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface HasId { id: number; } interface HasName { name: string; } function printInfo<T extends HasId & HasName>(item: T): string { return `${item.id}: ${item.name}`; } let res = printInfo({ id: 1, name: 'Root' });\n",
    "hints": [
      "Write: interface HasId { id: number; } interface HasName { name: string; } function printInfo<T extends HasId & HasName>(item: T): string { return `${item.id}: ${item.name}`; } let res = printInfo({ id: 1, name: 'Root' });"
    ],
    "testCases": [
      {
        "id": "ts-89-tc-1",
        "description": "TypeScript compiles and satisfies Multiple Generic Constraints",
        "testFn": "res === '1: Root'"
      }
    ]
  },
  {
    "id": "ts-90-conditional-generic-const",
    "title": "90. Conditional Generic Constraints",
    "slug": "conditional-generic-constraint",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Conditional Generic Constraints in TypeScript with strict compile-time checking.",
    "concepts": [
      "Conditional Generic Constraints",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Conditional Generic Constraints\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype IsString<T> = T extends string ? true : false; let isStr: IsString<'hello'> = true;\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Generic Constraints",
      "code": "type IsString<T> = T extends string ? true : false; let isStr: IsString<'hello'> = true;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type IsString<T> = T extends string ? true : false; let isStr: IsString<'hello'> = true;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type IsString<T> = T extends string ? true : false; let isStr: IsString<'hello'> = true;\n",
    "hints": [
      "Write: type IsString<T> = T extends string ? true : false; let isStr: IsString<'hello'> = true;"
    ],
    "testCases": [
      {
        "id": "ts-90-tc-1",
        "description": "TypeScript compiles and satisfies Conditional Generic Constraints",
        "testFn": "isStr === true"
      }
    ]
  },
  {
    "id": "ts-91-keyof-with-any-index-sign",
    "title": "91. keyof with Any Index Signatures",
    "slug": "keyof-with-any-index-signature",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master keyof with Any Index Signatures in TypeScript with strict compile-time checking.",
    "concepts": [
      "keyof with Any Index Signatures",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### keyof with Any Index Signatures\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Dict = { [key: string]: boolean }; type DictKeys = keyof Dict; let k: DictKeys = 'anyKey';\n```",
    "workedExample": {
      "title": "Worked Example: keyof with Any Index Signatures",
      "code": "type Dict = { [key: string]: boolean }; type DictKeys = keyof Dict; let k: DictKeys = 'anyKey';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Dict = { [key: string]: boolean }; type DictKeys = keyof Dict; let k: DictKeys = 'anyKey';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Dict = { [key: string]: boolean }; type DictKeys = keyof Dict; let k: DictKeys = 'anyKey';\n",
    "hints": [
      "Write: type Dict = { [key: string]: boolean }; type DictKeys = keyof Dict; let k: DictKeys = 'anyKey';"
    ],
    "testCases": [
      {
        "id": "ts-91-tc-1",
        "description": "TypeScript compiles and satisfies keyof with Any Index Signatures",
        "testFn": "k === 'anyKey'"
      }
    ]
  },
  {
    "id": "ts-92-type-safe-object-setting-",
    "title": "92. Type-Safe Object Setting Function",
    "slug": "type-safe-object-setting-funct",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Type-Safe Object Setting Function in TypeScript with strict compile-time checking.",
    "concepts": [
      "Type-Safe Object Setting Function",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Type-Safe Object Setting Function\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void { obj[key] = val; } let person = { score: 10 }; setProp(person, 'score', 50);\n```",
    "workedExample": {
      "title": "Worked Example: Type-Safe Object Setting Function",
      "code": "function setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void { obj[key] = val; } let person = { score: 10 }; setProp(person, 'score', 50);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void { obj[key] = val; } let person = { score: 10 }; setProp(person, 'score', 50);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void { obj[key] = val; } let person = { score: 10 }; setProp(person, 'score', 50);\n",
    "hints": [
      "Write: function setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void { obj[key] = val; } let person = { score: 10 }; setProp(person, 'score', 50);"
    ],
    "testCases": [
      {
        "id": "ts-92-tc-1",
        "description": "TypeScript compiles and satisfies Type-Safe Object Setting Function",
        "testFn": "person.score === 50"
      }
    ]
  },
  {
    "id": "ts-93-generic-tuple-constraints",
    "title": "93. Generic Tuple Constraints",
    "slug": "generic-tuple-constraints",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Generic Tuple Constraints in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Tuple Constraints",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Tuple Constraints\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction head<T extends any[]>(tuple: T): T[0] { return tuple[0]; } let h = head([10, 'string']);\n```",
    "workedExample": {
      "title": "Worked Example: Generic Tuple Constraints",
      "code": "function head<T extends any[]>(tuple: T): T[0] { return tuple[0]; } let h = head([10, 'string']);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function head<T extends any[]>(tuple: T): T[0] { return tuple[0]; } let h = head([10, 'string']);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function head<T extends any[]>(tuple: T): T[0] { return tuple[0]; } let h = head([10, 'string']);\n",
    "hints": [
      "Write: function head<T extends any[]>(tuple: T): T[0] { return tuple[0]; } let h = head([10, 'string']);"
    ],
    "testCases": [
      {
        "id": "ts-93-tc-1",
        "description": "TypeScript compiles and satisfies Generic Tuple Constraints",
        "testFn": "h === 10"
      }
    ]
  },
  {
    "id": "ts-94-module-8-review-typed-eve",
    "title": "94. Module 8 Review: Typed Event Dispatcher",
    "slug": "module-8-review-typed-event-di",
    "language": "typescript",
    "category": "Module 8: Generic Constraints & Keyof",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Module 8 Review: Typed Event Dispatcher in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 8 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 8 Review: Typed Event Dispatcher\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype EventMap = { click: { x: number; y: number }; focus: { target: string } }; function dispatch<K extends keyof EventMap>(event: K, payload: EventMap[K]): K { return event; } let evt = dispatch('click', { x: 10, y: 20 });\n```",
    "workedExample": {
      "title": "Worked Example: Module 8 Review: Typed Event Dispatcher",
      "code": "type EventMap = { click: { x: number; y: number }; focus: { target: string } }; function dispatch<K extends keyof EventMap>(event: K, payload: EventMap[K]): K { return event; } let evt = dispatch('click', { x: 10, y: 20 });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type EventMap = { click: { x: number; y: number }; focus: { target: string } }; function dispatch<K extends keyof EventMap>(event: K, payload: EventMap[K]): K { return event; } let evt = dispatch('click', { x: 10, y: 20 });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type EventMap = { click: { x: number; y: number }; focus: { target: string } }; function dispatch<K extends keyof EventMap>(event: K, payload: EventMap[K]): K { return event; } let evt = dispatch('click', { x: 10, y: 20 });\n",
    "hints": [
      "Write: type EventMap = { click: { x: number; y: number }; focus: { target: string } }; function dispatch<K extends keyof EventMap>(event: K, payload: EventMap[K]): K { return event; } let evt = dispatch('click', { x: 10, y: 20 });"
    ],
    "testCases": [
      {
        "id": "ts-94-tc-1",
        "description": "TypeScript compiles and satisfies Module 8 Review: Typed Event Dispatcher",
        "testFn": "evt === 'click'"
      }
    ]
  }
];
