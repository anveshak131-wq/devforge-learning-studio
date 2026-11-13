import { Lesson } from '../../../types';

export const tsModule7Lessons: Lesson[] = [
  {
    "id": "ts-69-introduction-to-generics-",
    "title": "69. Introduction to Generics: Identity Function <T>",
    "slug": "introduction-to-generics-ident",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Introduction to Generics: Identity Function <T> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Introduction to Generics",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Introduction to Generics: Identity Function <T>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction identity<T>(arg: T): T { return arg; } let out = identity<string>('TypeScript');\n```",
    "workedExample": {
      "title": "Worked Example: Introduction to Generics: Identity Function <T>",
      "code": "function identity<T>(arg: T): T { return arg; } let out = identity<string>('TypeScript');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function identity<T>(arg: T): T { return arg; } let out = identity<string>('TypeScript');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function identity<T>(arg: T): T { return arg; } let out = identity<string>('TypeScript');\n",
    "hints": [
      "Write: function identity<T>(arg: T): T { return arg; } let out = identity<string>('TypeScript');"
    ],
    "testCases": [
      {
        "id": "ts-69-tc-1",
        "description": "TypeScript compiles and satisfies Introduction to Generics: Identity Function <T>",
        "testFn": "out === 'TypeScript'"
      }
    ]
  },
  {
    "id": "ts-70-generic-array-wrappers",
    "title": "70. Generic Array Wrappers",
    "slug": "generic-array-wrappers",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Array Wrappers in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Array Wrappers",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Array Wrappers\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction getFirst<T>(arr: T[]): T | undefined { return arr[0]; } let n = getFirst([10, 20, 30]);\n```",
    "workedExample": {
      "title": "Worked Example: Generic Array Wrappers",
      "code": "function getFirst<T>(arr: T[]): T | undefined { return arr[0]; } let n = getFirst([10, 20, 30]);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function getFirst<T>(arr: T[]): T | undefined { return arr[0]; } let n = getFirst([10, 20, 30]);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function getFirst<T>(arr: T[]): T | undefined { return arr[0]; } let n = getFirst([10, 20, 30]);\n",
    "hints": [
      "Write: function getFirst<T>(arr: T[]): T | undefined { return arr[0]; } let n = getFirst([10, 20, 30]);"
    ],
    "testCases": [
      {
        "id": "ts-70-tc-1",
        "description": "TypeScript compiles and satisfies Generic Array Wrappers",
        "testFn": "n === 10"
      }
    ]
  },
  {
    "id": "ts-71-multiple-generic-type-par",
    "title": "71. Multiple Generic Type Parameters <T, U>",
    "slug": "multiple-generic-type-paramete",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multiple Generic Type Parameters <T, U> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Multiple Generic Type Parameters <T, U>",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Multiple Generic Type Parameters <T, U>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction pair<T, U>(first: T, second: U): [T, U] { return [first, second]; } let p = pair('Age', 30);\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Generic Type Parameters <T, U>",
      "code": "function pair<T, U>(first: T, second: U): [T, U] { return [first, second]; } let p = pair('Age', 30);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function pair<T, U>(first: T, second: U): [T, U] { return [first, second]; } let p = pair('Age', 30);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function pair<T, U>(first: T, second: U): [T, U] { return [first, second]; } let p = pair('Age', 30);\n",
    "hints": [
      "Write: function pair<T, U>(first: T, second: U): [T, U] { return [first, second]; } let p = pair('Age', 30);"
    ],
    "testCases": [
      {
        "id": "ts-71-tc-1",
        "description": "TypeScript compiles and satisfies Multiple Generic Type Parameters <T, U>",
        "testFn": "p[0] === 'Age' && p[1] === 30"
      }
    ]
  },
  {
    "id": "ts-72-generic-interfaces",
    "title": "72. Generic Interfaces",
    "slug": "generic-interfaces",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Interfaces in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Interfaces",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Interfaces\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Box<T> { content: T; } let box: Box<number> = { content: 42 };\n```",
    "workedExample": {
      "title": "Worked Example: Generic Interfaces",
      "code": "interface Box<T> { content: T; } let box: Box<number> = { content: 42 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Box<T> { content: T; } let box: Box<number> = { content: 42 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Box<T> { content: T; } let box: Box<number> = { content: 42 };\n",
    "hints": [
      "Write: interface Box<T> { content: T; } let box: Box<number> = { content: 42 };"
    ],
    "testCases": [
      {
        "id": "ts-72-tc-1",
        "description": "TypeScript compiles and satisfies Generic Interfaces",
        "testFn": "box.content === 42"
      }
    ]
  },
  {
    "id": "ts-73-generic-type-aliases",
    "title": "73. Generic Type Aliases",
    "slug": "generic-type-aliases",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Type Aliases in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Type Aliases",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Type Aliases\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Result<T> = { success: boolean; data: T }; let res: Result<string> = { success: true, data: 'Loaded' };\n```",
    "workedExample": {
      "title": "Worked Example: Generic Type Aliases",
      "code": "type Result<T> = { success: boolean; data: T }; let res: Result<string> = { success: true, data: 'Loaded' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Result<T> = { success: boolean; data: T }; let res: Result<string> = { success: true, data: 'Loaded' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Result<T> = { success: boolean; data: T }; let res: Result<string> = { success: true, data: 'Loaded' };\n",
    "hints": [
      "Write: type Result<T> = { success: boolean; data: T }; let res: Result<string> = { success: true, data: 'Loaded' };"
    ],
    "testCases": [
      {
        "id": "ts-73-tc-1",
        "description": "TypeScript compiles and satisfies Generic Type Aliases",
        "testFn": "res.data === 'Loaded'"
      }
    ]
  },
  {
    "id": "ts-74-generic-classes",
    "title": "74. Generic Classes",
    "slug": "generic-classes",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Classes in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Classes",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Classes\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass StorageContainer<T> { private item: T; constructor(item: T) { this.item = item; } getItem(): T { return this.item; } } let sc = new StorageContainer('Package');\n```",
    "workedExample": {
      "title": "Worked Example: Generic Classes",
      "code": "class StorageContainer<T> { private item: T; constructor(item: T) { this.item = item; } getItem(): T { return this.item; } } let sc = new StorageContainer('Package');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class StorageContainer<T> { private item: T; constructor(item: T) { this.item = item; } getItem(): T { return this.item; } } let sc = new StorageContainer('Package');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class StorageContainer<T> { private item: T; constructor(item: T) { this.item = item; } getItem(): T { return this.item; } } let sc = new StorageContainer('Package');\n",
    "hints": [
      "Write: class StorageContainer<T> { private item: T; constructor(item: T) { this.item = item; } getItem(): T { return this.item; } } let sc = new StorageContainer('Package');"
    ],
    "testCases": [
      {
        "id": "ts-74-tc-1",
        "description": "TypeScript compiles and satisfies Generic Classes",
        "testFn": "sc.getItem() === 'Package'"
      }
    ]
  },
  {
    "id": "ts-75-default-generic-types-t-=",
    "title": "75. Default Generic Types <T = string>",
    "slug": "default-generic-types-t-=-stri",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Default Generic Types <T = string> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Default Generic Types <T = string>",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Default Generic Types <T = string>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype APIResponse<T = string> = { data: T }; let defaultResp: APIResponse = { data: 'OK' };\n```",
    "workedExample": {
      "title": "Worked Example: Default Generic Types <T = string>",
      "code": "type APIResponse<T = string> = { data: T }; let defaultResp: APIResponse = { data: 'OK' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type APIResponse<T = string> = { data: T }; let defaultResp: APIResponse = { data: 'OK' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type APIResponse<T = string> = { data: T }; let defaultResp: APIResponse = { data: 'OK' };\n",
    "hints": [
      "Write: type APIResponse<T = string> = { data: T }; let defaultResp: APIResponse = { data: 'OK' };"
    ],
    "testCases": [
      {
        "id": "ts-75-tc-1",
        "description": "TypeScript compiles and satisfies Default Generic Types <T = string>",
        "testFn": "defaultResp.data === 'OK'"
      }
    ]
  },
  {
    "id": "ts-76-generic-function-expressi",
    "title": "76. Generic Function Expressions & Arrow Syntax",
    "slug": "generic-function-expressions-&",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Function Expressions & Arrow Syntax in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Function Expressions & Arrow Syntax",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Function Expressions & Arrow Syntax\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst wrap = <T>(val: T): { value: T } => ({ value: val }); let wrapped = wrap(100);\n```",
    "workedExample": {
      "title": "Worked Example: Generic Function Expressions & Arrow Syntax",
      "code": "const wrap = <T>(val: T): { value: T } => ({ value: val }); let wrapped = wrap(100);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const wrap = <T>(val: T): { value: T } => ({ value: val }); let wrapped = wrap(100);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "const wrap = <T>(val: T): { value: T } => ({ value: val }); let wrapped = wrap(100);\n",
    "hints": [
      "Write: const wrap = <T>(val: T): { value: T } => ({ value: val }); let wrapped = wrap(100);"
    ],
    "testCases": [
      {
        "id": "ts-76-tc-1",
        "description": "TypeScript compiles and satisfies Generic Function Expressions & Arrow Syntax",
        "testFn": "wrapped.value === 100"
      }
    ]
  },
  {
    "id": "ts-77-generic-stacks-lifo",
    "title": "77. Generic Stacks (LIFO)",
    "slug": "generic-stacks-lifo",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Stacks (LIFO) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Stacks (LIFO)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Stacks (LIFO)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Stack<T> { private list: T[] = []; push(item: T) { this.list.push(item); } pop(): T | undefined { return this.list.pop(); } } let s = new Stack<number>(); s.push(5); let top = s.pop();\n```",
    "workedExample": {
      "title": "Worked Example: Generic Stacks (LIFO)",
      "code": "class Stack<T> { private list: T[] = []; push(item: T) { this.list.push(item); } pop(): T | undefined { return this.list.pop(); } } let s = new Stack<number>(); s.push(5); let top = s.pop();",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Stack<T> { private list: T[] = []; push(item: T) { this.list.push(item); } pop(): T | undefined { return this.list.pop(); } } let s = new Stack<number>(); s.push(5); let top = s.pop();`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Stack<T> { private list: T[] = []; push(item: T) { this.list.push(item); } pop(): T | undefined { return this.list.pop(); } } let s = new Stack<number>(); s.push(5); let top = s.pop();\n",
    "hints": [
      "Write: class Stack<T> { private list: T[] = []; push(item: T) { this.list.push(item); } pop(): T | undefined { return this.list.pop(); } } let s = new Stack<number>(); s.push(5); let top = s.pop();"
    ],
    "testCases": [
      {
        "id": "ts-77-tc-1",
        "description": "TypeScript compiles and satisfies Generic Stacks (LIFO)",
        "testFn": "top === 5"
      }
    ]
  },
  {
    "id": "ts-78-generic-queue-fifo",
    "title": "78. Generic Queue (FIFO)",
    "slug": "generic-queue-fifo",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Queue (FIFO) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Queue (FIFO)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Queue (FIFO)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Queue<T> { private items: T[] = []; enqueue(item: T) { this.items.push(item); } dequeue(): T | undefined { return this.items.shift(); } } let q = new Queue<string>(); q.enqueue('first'); let head = q.dequeue();\n```",
    "workedExample": {
      "title": "Worked Example: Generic Queue (FIFO)",
      "code": "class Queue<T> { private items: T[] = []; enqueue(item: T) { this.items.push(item); } dequeue(): T | undefined { return this.items.shift(); } } let q = new Queue<string>(); q.enqueue('first'); let head = q.dequeue();",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Queue<T> { private items: T[] = []; enqueue(item: T) { this.items.push(item); } dequeue(): T | undefined { return this.items.shift(); } } let q = new Queue<string>(); q.enqueue('first'); let head = q.dequeue();`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Queue<T> { private items: T[] = []; enqueue(item: T) { this.items.push(item); } dequeue(): T | undefined { return this.items.shift(); } } let q = new Queue<string>(); q.enqueue('first'); let head = q.dequeue();\n",
    "hints": [
      "Write: class Queue<T> { private items: T[] = []; enqueue(item: T) { this.items.push(item); } dequeue(): T | undefined { return this.items.shift(); } } let q = new Queue<string>(); q.enqueue('first'); let head = q.dequeue();"
    ],
    "testCases": [
      {
        "id": "ts-78-tc-1",
        "description": "TypeScript compiles and satisfies Generic Queue (FIFO)",
        "testFn": "head === 'first'"
      }
    ]
  },
  {
    "id": "ts-79-generic-map-wrappers",
    "title": "79. Generic Map Wrappers",
    "slug": "generic-map-wrappers",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Map Wrappers in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Map Wrappers",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Map Wrappers\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface KeyValue<K, V> { key: K; value: V; } let entry: KeyValue<string, number> = { key: 'count', value: 10 };\n```",
    "workedExample": {
      "title": "Worked Example: Generic Map Wrappers",
      "code": "interface KeyValue<K, V> { key: K; value: V; } let entry: KeyValue<string, number> = { key: 'count', value: 10 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface KeyValue<K, V> { key: K; value: V; } let entry: KeyValue<string, number> = { key: 'count', value: 10 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface KeyValue<K, V> { key: K; value: V; } let entry: KeyValue<string, number> = { key: 'count', value: 10 };\n",
    "hints": [
      "Write: interface KeyValue<K, V> { key: K; value: V; } let entry: KeyValue<string, number> = { key: 'count', value: 10 };"
    ],
    "testCases": [
      {
        "id": "ts-79-tc-1",
        "description": "TypeScript compiles and satisfies Generic Map Wrappers",
        "testFn": "entry.value === 10"
      }
    ]
  },
  {
    "id": "ts-80-generic-promise-resolutio",
    "title": "80. Generic Promise Resolution",
    "slug": "generic-promise-resolution",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Promise Resolution in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Promise Resolution",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Promise Resolution\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction resolveLater<T>(val: T): Promise<T> { return Promise.resolve(val); }\n```",
    "workedExample": {
      "title": "Worked Example: Generic Promise Resolution",
      "code": "function resolveLater<T>(val: T): Promise<T> { return Promise.resolve(val); }",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function resolveLater<T>(val: T): Promise<T> { return Promise.resolve(val); }`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function resolveLater<T>(val: T): Promise<T> { return Promise.resolve(val); }\n",
    "hints": [
      "Write: function resolveLater<T>(val: T): Promise<T> { return Promise.resolve(val); }"
    ],
    "testCases": [
      {
        "id": "ts-80-tc-1",
        "description": "TypeScript compiles and satisfies Generic Promise Resolution",
        "testFn": "typeof resolveLater === 'function'"
      }
    ]
  },
  {
    "id": "ts-81-generic-factory-functions",
    "title": "81. Generic Factory Functions (new () => T)",
    "slug": "generic-factory-functions-new-",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generic Factory Functions (new () => T) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Factory Functions (new () => T)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Factory Functions (new () => T)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nfunction createInstance<T>(Constructor: new () => T): T { return new Constructor(); } class Dummy {} let d = createInstance(Dummy);\n```",
    "workedExample": {
      "title": "Worked Example: Generic Factory Functions (new () => T)",
      "code": "function createInstance<T>(Constructor: new () => T): T { return new Constructor(); } class Dummy {} let d = createInstance(Dummy);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `function createInstance<T>(Constructor: new () => T): T { return new Constructor(); } class Dummy {} let d = createInstance(Dummy);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "function createInstance<T>(Constructor: new () => T): T { return new Constructor(); } class Dummy {} let d = createInstance(Dummy);\n",
    "hints": [
      "Write: function createInstance<T>(Constructor: new () => T): T { return new Constructor(); } class Dummy {} let d = createInstance(Dummy);"
    ],
    "testCases": [
      {
        "id": "ts-81-tc-1",
        "description": "TypeScript compiles and satisfies Generic Factory Functions (new () => T)",
        "testFn": "d instanceof Dummy"
      }
    ]
  },
  {
    "id": "ts-82-module-7-review-generic-r",
    "title": "82. Module 7 Review: Generic Repository Wrapper",
    "slug": "module-7-review-generic-reposi",
    "language": "typescript",
    "category": "Module 7: Generics Fundamentals (<T>)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 7 Review: Generic Repository Wrapper in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 7 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 7 Review: Generic Repository Wrapper\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Repo<T> { findById(id: string): T | null; } class UserRepo implements Repo<{ name: string }> { findById(id: string) { return { name: 'User' + id }; } } let r = new UserRepo(); let u = r.findById('1');\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Generic Repository Wrapper",
      "code": "interface Repo<T> { findById(id: string): T | null; } class UserRepo implements Repo<{ name: string }> { findById(id: string) { return { name: 'User' + id }; } } let r = new UserRepo(); let u = r.findById('1');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Repo<T> { findById(id: string): T | null; } class UserRepo implements Repo<{ name: string }> { findById(id: string) { return { name: 'User' + id }; } } let r = new UserRepo(); let u = r.findById('1');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Repo<T> { findById(id: string): T | null; } class UserRepo implements Repo<{ name: string }> { findById(id: string) { return { name: 'User' + id }; } } let r = new UserRepo(); let u = r.findById('1');\n",
    "hints": [
      "Write: interface Repo<T> { findById(id: string): T | null; } class UserRepo implements Repo<{ name: string }> { findById(id: string) { return { name: 'User' + id }; } } let r = new UserRepo(); let u = r.findById('1');"
    ],
    "testCases": [
      {
        "id": "ts-82-tc-1",
        "description": "TypeScript compiles and satisfies Module 7 Review: Generic Repository Wrapper",
        "testFn": "u !== null && u.name === 'User1'"
      }
    ]
  }
];
