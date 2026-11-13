import { Lesson } from '../../../types';

export const tsModule11Lessons: Lesson[] = [
  {
    "id": "ts-119-conditional-types-t-exten",
    "title": "119. Conditional Types: T extends U ? X : Y",
    "slug": "conditional-types-t-extends-u-",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Conditional Types: T extends U ? X : Y in TypeScript with strict compile-time checking.",
    "concepts": [
      "Conditional Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Conditional Types: T extends U ? X : Y\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'other'; let t1: TypeName<'abc'> = 'string';\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Types: T extends U ? X : Y",
      "code": "type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'other'; let t1: TypeName<'abc'> = 'string';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'other'; let t1: TypeName<'abc'> = 'string';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'other'; let t1: TypeName<'abc'> = 'string';\n",
    "hints": [
      "Write: type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'other'; let t1: TypeName<'abc'> = 'string';"
    ],
    "testCases": [
      {
        "id": "ts-119-tc-1",
        "description": "TypeScript compiles and satisfies Conditional Types: T extends U ? X : Y",
        "testFn": "t1 === 'string'"
      }
    ]
  },
  {
    "id": "ts-120-distributive-conditional-",
    "title": "120. Distributive Conditional Types",
    "slug": "distributive-conditional-types",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Distributive Conditional Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Distributive Conditional Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Distributive Conditional Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype ToArray<T> = T extends any ? T[] : never; type StrNumArr = ToArray<string | number>; let arr: StrNumArr = ['a', 'b'];\n```",
    "workedExample": {
      "title": "Worked Example: Distributive Conditional Types",
      "code": "type ToArray<T> = T extends any ? T[] : never; type StrNumArr = ToArray<string | number>; let arr: StrNumArr = ['a', 'b'];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type ToArray<T> = T extends any ? T[] : never; type StrNumArr = ToArray<string | number>; let arr: StrNumArr = ['a', 'b'];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type ToArray<T> = T extends any ? T[] : never; type StrNumArr = ToArray<string | number>; let arr: StrNumArr = ['a', 'b'];\n",
    "hints": [
      "Write: type ToArray<T> = T extends any ? T[] : never; type StrNumArr = ToArray<string | number>; let arr: StrNumArr = ['a', 'b'];"
    ],
    "testCases": [
      {
        "id": "ts-120-tc-1",
        "description": "TypeScript compiles and satisfies Distributive Conditional Types",
        "testFn": "arr.length === 2"
      }
    ]
  },
  {
    "id": "ts-121-the-infer-keyword-extract",
    "title": "121. The 'infer' Keyword: Extracting Types Within Conditionals",
    "slug": "the-infer-keyword-extracting-t",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The 'infer' Keyword: Extracting Types Within Conditionals in TypeScript with strict compile-time checking.",
    "concepts": [
      "The 'infer' Keyword",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### The 'infer' Keyword: Extracting Types Within Conditionals\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Flatten<T> = T extends (infer Item)[] ? Item : T; type ElementType = Flatten<number[]>; let n: ElementType = 42;\n```",
    "workedExample": {
      "title": "Worked Example: The 'infer' Keyword: Extracting Types Within Conditionals",
      "code": "type Flatten<T> = T extends (infer Item)[] ? Item : T; type ElementType = Flatten<number[]>; let n: ElementType = 42;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Flatten<T> = T extends (infer Item)[] ? Item : T; type ElementType = Flatten<number[]>; let n: ElementType = 42;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Flatten<T> = T extends (infer Item)[] ? Item : T; type ElementType = Flatten<number[]>; let n: ElementType = 42;\n",
    "hints": [
      "Write: type Flatten<T> = T extends (infer Item)[] ? Item : T; type ElementType = Flatten<number[]>; let n: ElementType = 42;"
    ],
    "testCases": [
      {
        "id": "ts-121-tc-1",
        "description": "TypeScript compiles and satisfies The 'infer' Keyword: Extracting Types Within Conditionals",
        "testFn": "n === 42"
      }
    ]
  },
  {
    "id": "ts-122-extracting-promise-resolu",
    "title": "122. Extracting Promise Resolution with infer",
    "slug": "extracting-promise-resolution-",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Extracting Promise Resolution with infer in TypeScript with strict compile-time checking.",
    "concepts": [
      "Extracting Promise Resolution with infer",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Extracting Promise Resolution with infer\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype MyAwaited<T> = T extends Promise<infer R> ? R : T; type StringType = MyAwaited<Promise<string>>; let text: StringType = 'unwrapped';\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Promise Resolution with infer",
      "code": "type MyAwaited<T> = T extends Promise<infer R> ? R : T; type StringType = MyAwaited<Promise<string>>; let text: StringType = 'unwrapped';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type MyAwaited<T> = T extends Promise<infer R> ? R : T; type StringType = MyAwaited<Promise<string>>; let text: StringType = 'unwrapped';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type MyAwaited<T> = T extends Promise<infer R> ? R : T; type StringType = MyAwaited<Promise<string>>; let text: StringType = 'unwrapped';\n",
    "hints": [
      "Write: type MyAwaited<T> = T extends Promise<infer R> ? R : T; type StringType = MyAwaited<Promise<string>>; let text: StringType = 'unwrapped';"
    ],
    "testCases": [
      {
        "id": "ts-122-tc-1",
        "description": "TypeScript compiles and satisfies Extracting Promise Resolution with infer",
        "testFn": "text === 'unwrapped'"
      }
    ]
  },
  {
    "id": "ts-123-mapped-types-{-[k-in-keys",
    "title": "123. Mapped Types: { [K in Keys]: Value }",
    "slug": "mapped-types-{-[k-in-keys]-val",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Mapped Types: { [K in Keys]: Value } in TypeScript with strict compile-time checking.",
    "concepts": [
      "Mapped Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Mapped Types: { [K in Keys]: Value }\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Features = 'audio' | 'video'; type FeatureFlags = { [K in Features]: boolean }; let flags: FeatureFlags = { audio: true, video: false };\n```",
    "workedExample": {
      "title": "Worked Example: Mapped Types: { [K in Keys]: Value }",
      "code": "type Features = 'audio' | 'video'; type FeatureFlags = { [K in Features]: boolean }; let flags: FeatureFlags = { audio: true, video: false };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Features = 'audio' | 'video'; type FeatureFlags = { [K in Features]: boolean }; let flags: FeatureFlags = { audio: true, video: false };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Features = 'audio' | 'video'; type FeatureFlags = { [K in Features]: boolean }; let flags: FeatureFlags = { audio: true, video: false };\n",
    "hints": [
      "Write: type Features = 'audio' | 'video'; type FeatureFlags = { [K in Features]: boolean }; let flags: FeatureFlags = { audio: true, video: false };"
    ],
    "testCases": [
      {
        "id": "ts-123-tc-1",
        "description": "TypeScript compiles and satisfies Mapped Types: { [K in Keys]: Value }",
        "testFn": "flags.audio === true"
      }
    ]
  },
  {
    "id": "ts-124-mapping-modifiers-removin",
    "title": "124. Mapping Modifiers: Removing Optional (-?) and Readonly (-readonly)",
    "slug": "mapping-modifiers-removing-opt",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Mapping Modifiers: Removing Optional (-?) and Readonly (-readonly) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Mapping Modifiers",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Mapping Modifiers: Removing Optional (-?) and Readonly (-readonly)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] }; interface Locked { readonly id?: number; } type Clean = MutableRequired<Locked>; let c: Clean = { id: 10 };\n```",
    "workedExample": {
      "title": "Worked Example: Mapping Modifiers: Removing Optional (-?) and Readonly (-readonly)",
      "code": "type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] }; interface Locked { readonly id?: number; } type Clean = MutableRequired<Locked>; let c: Clean = { id: 10 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] }; interface Locked { readonly id?: number; } type Clean = MutableRequired<Locked>; let c: Clean = { id: 10 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] }; interface Locked { readonly id?: number; } type Clean = MutableRequired<Locked>; let c: Clean = { id: 10 };\n",
    "hints": [
      "Write: type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] }; interface Locked { readonly id?: number; } type Clean = MutableRequired<Locked>; let c: Clean = { id: 10 };"
    ],
    "testCases": [
      {
        "id": "ts-124-tc-1",
        "description": "TypeScript compiles and satisfies Mapping Modifiers: Removing Optional (-?) and Readonly (-readonly)",
        "testFn": "c.id === 10"
      }
    ]
  },
  {
    "id": "ts-125-key-remapping-via-as-clau",
    "title": "125. Key Remapping via 'as' Clause",
    "slug": "key-remapping-via-as-clause",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Key Remapping via 'as' Clause in TypeScript with strict compile-time checking.",
    "concepts": [
      "Key Remapping via 'as' Clause",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Key Remapping via 'as' Clause\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }; interface Person { name: string; } let p: Getters<Person> = { getName: () => 'Alice' };\n```",
    "workedExample": {
      "title": "Worked Example: Key Remapping via 'as' Clause",
      "code": "type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }; interface Person { name: string; } let p: Getters<Person> = { getName: () => 'Alice' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }; interface Person { name: string; } let p: Getters<Person> = { getName: () => 'Alice' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }; interface Person { name: string; } let p: Getters<Person> = { getName: () => 'Alice' };\n",
    "hints": [
      "Write: type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }; interface Person { name: string; } let p: Getters<Person> = { getName: () => 'Alice' };"
    ],
    "testCases": [
      {
        "id": "ts-125-tc-1",
        "description": "TypeScript compiles and satisfies Key Remapping via 'as' Clause",
        "testFn": "p.getName() === 'Alice'"
      }
    ]
  },
  {
    "id": "ts-126-template-literal-types-`$",
    "title": "126. Template Literal Types (`${Prefix}_${Suffix}`)",
    "slug": "template-literal-types-`${pref",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Template Literal Types (`${Prefix}_${Suffix}`) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Template Literal Types (`${Prefix}_${Suffix}`)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Template Literal Types (`${Prefix}_${Suffix}`)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype EventType = 'click' | 'hover'; type EventHandler = `on${Capitalize<EventType>}`; let handler: EventHandler = 'onClick';\n```",
    "workedExample": {
      "title": "Worked Example: Template Literal Types (`${Prefix}_${Suffix}`)",
      "code": "type EventType = 'click' | 'hover'; type EventHandler = `on${Capitalize<EventType>}`; let handler: EventHandler = 'onClick';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type EventType = 'click' | 'hover'; type EventHandler = `on${Capitalize<EventType>}`; let handler: EventHandler = 'onClick';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type EventType = 'click' | 'hover'; type EventHandler = `on${Capitalize<EventType>}`; let handler: EventHandler = 'onClick';\n",
    "hints": [
      "Write: type EventType = 'click' | 'hover'; type EventHandler = `on${Capitalize<EventType>}`; let handler: EventHandler = 'onClick';"
    ],
    "testCases": [
      {
        "id": "ts-126-tc-1",
        "description": "TypeScript compiles and satisfies Template Literal Types (`${Prefix}_${Suffix}`)",
        "testFn": "handler === 'onClick'"
      }
    ]
  },
  {
    "id": "ts-127-intrinsic-string-manipula",
    "title": "127. Intrinsic String Manipulation Types (Uppercase, Lowercase, Capitalize)",
    "slug": "intrinsic-string-manipulation-",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Intrinsic String Manipulation Types (Uppercase, Lowercase, Capitalize) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Intrinsic String Manipulation Types (Uppercase, Lowercase, Capitalize)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Intrinsic String Manipulation Types (Uppercase, Lowercase, Capitalize)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Loud = Uppercase<'hello'>; let word: Loud = 'HELLO';\n```",
    "workedExample": {
      "title": "Worked Example: Intrinsic String Manipulation Types (Uppercase, Lowercase, Capitalize)",
      "code": "type Loud = Uppercase<'hello'>; let word: Loud = 'HELLO';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Loud = Uppercase<'hello'>; let word: Loud = 'HELLO';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Loud = Uppercase<'hello'>; let word: Loud = 'HELLO';\n",
    "hints": [
      "Write: type Loud = Uppercase<'hello'>; let word: Loud = 'HELLO';"
    ],
    "testCases": [
      {
        "id": "ts-127-tc-1",
        "description": "TypeScript compiles and satisfies Intrinsic String Manipulation Types (Uppercase, Lowercase, Capitalize)",
        "testFn": "word === 'HELLO'"
      }
    ]
  },
  {
    "id": "ts-128-module-11-review-type-saf",
    "title": "128. Module 11 Review: Type-Safe Event Key Map",
    "slug": "module-11-review-type-safe-eve",
    "language": "typescript",
    "category": "Module 11: Conditional & Mapped Types",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module 11 Review: Type-Safe Event Key Map in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 11 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 11 Review: Type-Safe Event Key Map\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Entity = 'user' | 'order'; type Crud = 'create' | 'delete'; type Action = `${Entity}_${Crud}`; let act: Action = 'user_create';\n```",
    "workedExample": {
      "title": "Worked Example: Module 11 Review: Type-Safe Event Key Map",
      "code": "type Entity = 'user' | 'order'; type Crud = 'create' | 'delete'; type Action = `${Entity}_${Crud}`; let act: Action = 'user_create';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Entity = 'user' | 'order'; type Crud = 'create' | 'delete'; type Action = `${Entity}_${Crud}`; let act: Action = 'user_create';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Entity = 'user' | 'order'; type Crud = 'create' | 'delete'; type Action = `${Entity}_${Crud}`; let act: Action = 'user_create';\n",
    "hints": [
      "Write: type Entity = 'user' | 'order'; type Crud = 'create' | 'delete'; type Action = `${Entity}_${Crud}`; let act: Action = 'user_create';"
    ],
    "testCases": [
      {
        "id": "ts-128-tc-1",
        "description": "TypeScript compiles and satisfies Module 11 Review: Type-Safe Event Key Map",
        "testFn": "act === 'user_create'"
      }
    ]
  }
];
