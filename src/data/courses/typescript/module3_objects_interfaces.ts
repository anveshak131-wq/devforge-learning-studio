import { Lesson } from '../../../types';

export const tsModule3Lessons: Lesson[] = [
  {
    "id": "ts-21-object-types-inline-annot",
    "title": "21. Object Types: Inline Annotations",
    "slug": "object-types-inline-annotation",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Object Types: Inline Annotations in TypeScript with strict compile-time checking.",
    "concepts": [
      "Object Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Object Types: Inline Annotations\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet user: { id: number; name: string } = { id: 1, name: 'Alice' };\n```",
    "workedExample": {
      "title": "Worked Example: Object Types: Inline Annotations",
      "code": "let user: { id: number; name: string } = { id: 1, name: 'Alice' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let user: { id: number; name: string } = { id: 1, name: 'Alice' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet user: { id: number; name: string } = { id: 1, name: 'Alice' };\n",
    "solutionCode": "let user: { id: number; name: string } = { id: 1, name: 'Alice' };\n",
    "hints": [
      "Write: let user: { id: number; name: string } = { id: 1, name: 'Alice' };"
    ],
    "testCases": [
      {
        "id": "ts-21-tc-1",
        "description": "TypeScript compiles and satisfies Object Types: Inline Annotations",
        "testFn": "user.id === 1 && user.name === 'Alice'"
      }
    ]
  },
  {
    "id": "ts-22-type-aliases-with-type",
    "title": "22. Type Aliases with 'type'",
    "slug": "type-aliases-with-type",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Type Aliases with 'type' in TypeScript with strict compile-time checking.",
    "concepts": [
      "Type Aliases with 'type'",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Type Aliases with 'type'\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Product = { id: string; price: number }; let item: Product = { id: 'p1', price: 99 };\n```",
    "workedExample": {
      "title": "Worked Example: Type Aliases with 'type'",
      "code": "type Product = { id: string; price: number }; let item: Product = { id: 'p1', price: 99 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Product = { id: string; price: number }; let item: Product = { id: 'p1', price: 99 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype Product = { id: string; price: number }; let item: Product = { id: 'p1', price: 99 };\n",
    "solutionCode": "type Product = { id: string; price: number }; let item: Product = { id: 'p1', price: 99 };\n",
    "hints": [
      "Write: type Product = { id: string; price: number }; let item: Product = { id: 'p1', price: 99 };"
    ],
    "testCases": [
      {
        "id": "ts-22-tc-1",
        "description": "TypeScript compiles and satisfies Type Aliases with 'type'",
        "testFn": "item.price === 99"
      }
    ]
  },
  {
    "id": "ts-23-interfaces-with-interface",
    "title": "23. Interfaces with 'interface'",
    "slug": "interfaces-with-interface",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Interfaces with 'interface' in TypeScript with strict compile-time checking.",
    "concepts": [
      "Interfaces with 'interface'",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Interfaces with 'interface'\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Customer { name: string; email: string; } let c: Customer = { name: 'Dan', email: 'd@test.com' };\n```",
    "workedExample": {
      "title": "Worked Example: Interfaces with 'interface'",
      "code": "interface Customer { name: string; email: string; } let c: Customer = { name: 'Dan', email: 'd@test.com' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Customer { name: string; email: string; } let c: Customer = { name: 'Dan', email: 'd@test.com' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Customer { name: string; email: string; } let c: Customer = { name: 'Dan', email: 'd@test.com' };\n",
    "solutionCode": "interface Customer { name: string; email: string; } let c: Customer = { name: 'Dan', email: 'd@test.com' };\n",
    "hints": [
      "Write: interface Customer { name: string; email: string; } let c: Customer = { name: 'Dan', email: 'd@test.com' };"
    ],
    "testCases": [
      {
        "id": "ts-23-tc-1",
        "description": "TypeScript compiles and satisfies Interfaces with 'interface'",
        "testFn": "c.name === 'Dan'"
      }
    ]
  },
  {
    "id": "ts-24-optional-properties-?",
    "title": "24. Optional Properties (?)",
    "slug": "optional-properties-?",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Optional Properties (?) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Optional Properties (?)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Optional Properties (?)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Profile { username: string; bio?: string; } let p: Profile = { username: 'coder' };\n```",
    "workedExample": {
      "title": "Worked Example: Optional Properties (?)",
      "code": "interface Profile { username: string; bio?: string; } let p: Profile = { username: 'coder' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Profile { username: string; bio?: string; } let p: Profile = { username: 'coder' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Profile { username: string; bio?: string; } let p: Profile = { username: 'coder' };\n",
    "solutionCode": "interface Profile { username: string; bio?: string; } let p: Profile = { username: 'coder' };\n",
    "hints": [
      "Write: interface Profile { username: string; bio?: string; } let p: Profile = { username: 'coder' };"
    ],
    "testCases": [
      {
        "id": "ts-24-tc-1",
        "description": "TypeScript compiles and satisfies Optional Properties (?)",
        "testFn": "p.username === 'coder'"
      }
    ]
  },
  {
    "id": "ts-25-readonly-properties-reado",
    "title": "25. Readonly Properties (readonly)",
    "slug": "readonly-properties-readonly",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Readonly Properties (readonly) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Readonly Properties (readonly)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Readonly Properties (readonly)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Config { readonly apiKey: string; } let cfg: Config = { apiKey: 'secret-xyz' };\n```",
    "workedExample": {
      "title": "Worked Example: Readonly Properties (readonly)",
      "code": "interface Config { readonly apiKey: string; } let cfg: Config = { apiKey: 'secret-xyz' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Config { readonly apiKey: string; } let cfg: Config = { apiKey: 'secret-xyz' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Config { readonly apiKey: string; } let cfg: Config = { apiKey: 'secret-xyz' };\n",
    "solutionCode": "interface Config { readonly apiKey: string; } let cfg: Config = { apiKey: 'secret-xyz' };\n",
    "hints": [
      "Write: interface Config { readonly apiKey: string; } let cfg: Config = { apiKey: 'secret-xyz' };"
    ],
    "testCases": [
      {
        "id": "ts-25-tc-1",
        "description": "TypeScript compiles and satisfies Readonly Properties (readonly)",
        "testFn": "cfg.apiKey === 'secret-xyz'"
      }
    ]
  },
  {
    "id": "ts-26-extending-interfaces-exte",
    "title": "26. Extending Interfaces (extends)",
    "slug": "extending-interfaces-extends",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Extending Interfaces (extends) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Extending Interfaces (extends)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Extending Interfaces (extends)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface BaseEntity { id: number; } interface UserEntity extends BaseEntity { name: string; } let u: UserEntity = { id: 10, name: 'Leo' };\n```",
    "workedExample": {
      "title": "Worked Example: Extending Interfaces (extends)",
      "code": "interface BaseEntity { id: number; } interface UserEntity extends BaseEntity { name: string; } let u: UserEntity = { id: 10, name: 'Leo' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface BaseEntity { id: number; } interface UserEntity extends BaseEntity { name: string; } let u: UserEntity = { id: 10, name: 'Leo' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface BaseEntity { id: number; } interface UserEntity extends BaseEntity { name: string; } let u: UserEntity = { id: 10, name: 'Leo' };\n",
    "solutionCode": "interface BaseEntity { id: number; } interface UserEntity extends BaseEntity { name: string; } let u: UserEntity = { id: 10, name: 'Leo' };\n",
    "hints": [
      "Write: interface BaseEntity { id: number; } interface UserEntity extends BaseEntity { name: string; } let u: UserEntity = { id: 10, name: 'Leo' };"
    ],
    "testCases": [
      {
        "id": "ts-26-tc-1",
        "description": "TypeScript compiles and satisfies Extending Interfaces (extends)",
        "testFn": "u.id === 10 && u.name === 'Leo'"
      }
    ]
  },
  {
    "id": "ts-27-interface-multiple-inheri",
    "title": "27. Interface Multiple Inheritance",
    "slug": "interface-multiple-inheritance",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Interface Multiple Inheritance in TypeScript with strict compile-time checking.",
    "concepts": [
      "Interface Multiple Inheritance",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Interface Multiple Inheritance\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface CanWalk { walk(): string; } interface CanFly { fly(): string; } interface Superhero extends CanWalk, CanFly {} let hero: Superhero = { walk: () => 'walking', fly: () => 'flying' };\n```",
    "workedExample": {
      "title": "Worked Example: Interface Multiple Inheritance",
      "code": "interface CanWalk { walk(): string; } interface CanFly { fly(): string; } interface Superhero extends CanWalk, CanFly {} let hero: Superhero = { walk: () => 'walking', fly: () => 'flying' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface CanWalk { walk(): string; } interface CanFly { fly(): string; } interface Superhero extends CanWalk, CanFly {} let hero: Superhero = { walk: () => 'walking', fly: () => 'flying' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface CanWalk { walk(): string; } interface CanFly { fly(): string; } interface Superhero extends CanWalk, CanFly {} let hero: Superhero = { walk: () => 'walking', fly: () => 'flying' };\n",
    "solutionCode": "interface CanWalk { walk(): string; } interface CanFly { fly(): string; } interface Superhero extends CanWalk, CanFly {} let hero: Superhero = { walk: () => 'walking', fly: () => 'flying' };\n",
    "hints": [
      "Write: interface CanWalk { walk(): string; } interface CanFly { fly(): string; } interface Superhero extends CanWalk, CanFly {} let hero: Superhero = { walk: () => 'walking', fly: () => 'flying' };"
    ],
    "testCases": [
      {
        "id": "ts-27-tc-1",
        "description": "TypeScript compiles and satisfies Interface Multiple Inheritance",
        "testFn": "hero.walk() === 'walking' && hero.fly() === 'flying'"
      }
    ]
  },
  {
    "id": "ts-28-index-signatures-for-dyna",
    "title": "28. Index Signatures for Dynamic Dictionaries",
    "slug": "index-signatures-for-dynamic-d",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Index Signatures for Dynamic Dictionaries in TypeScript with strict compile-time checking.",
    "concepts": [
      "Index Signatures for Dynamic Dictionaries",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Index Signatures for Dynamic Dictionaries\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface ScoreDictionary { [subject: string]: number; } let grades: ScoreDictionary = { math: 95, english: 88 };\n```",
    "workedExample": {
      "title": "Worked Example: Index Signatures for Dynamic Dictionaries",
      "code": "interface ScoreDictionary { [subject: string]: number; } let grades: ScoreDictionary = { math: 95, english: 88 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface ScoreDictionary { [subject: string]: number; } let grades: ScoreDictionary = { math: 95, english: 88 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface ScoreDictionary { [subject: string]: number; } let grades: ScoreDictionary = { math: 95, english: 88 };\n",
    "solutionCode": "interface ScoreDictionary { [subject: string]: number; } let grades: ScoreDictionary = { math: 95, english: 88 };\n",
    "hints": [
      "Write: interface ScoreDictionary { [subject: string]: number; } let grades: ScoreDictionary = { math: 95, english: 88 };"
    ],
    "testCases": [
      {
        "id": "ts-28-tc-1",
        "description": "TypeScript compiles and satisfies Index Signatures for Dynamic Dictionaries",
        "testFn": "grades.math === 95"
      }
    ]
  },
  {
    "id": "ts-29-nested-object-types",
    "title": "29. Nested Object Types",
    "slug": "nested-object-types",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Nested Object Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Nested Object Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Nested Object Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Address = { city: string }; type Company = { name: string; address: Address }; let corp: Company = { name: 'Acme', address: { city: 'SF' } };\n```",
    "workedExample": {
      "title": "Worked Example: Nested Object Types",
      "code": "type Address = { city: string }; type Company = { name: string; address: Address }; let corp: Company = { name: 'Acme', address: { city: 'SF' } };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Address = { city: string }; type Company = { name: string; address: Address }; let corp: Company = { name: 'Acme', address: { city: 'SF' } };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype Address = { city: string }; type Company = { name: string; address: Address }; let corp: Company = { name: 'Acme', address: { city: 'SF' } };\n",
    "solutionCode": "type Address = { city: string }; type Company = { name: string; address: Address }; let corp: Company = { name: 'Acme', address: { city: 'SF' } };\n",
    "hints": [
      "Write: type Address = { city: string }; type Company = { name: string; address: Address }; let corp: Company = { name: 'Acme', address: { city: 'SF' } };"
    ],
    "testCases": [
      {
        "id": "ts-29-tc-1",
        "description": "TypeScript compiles and satisfies Nested Object Types",
        "testFn": "corp.address.city === 'SF'"
      }
    ]
  },
  {
    "id": "ts-30-type-vs-interface-when-to",
    "title": "30. Type vs Interface: When to Use Which",
    "slug": "type-vs-interface-when-to-use-",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Type vs Interface: When to Use Which in TypeScript with strict compile-time checking.",
    "concepts": [
      "Type vs Interface",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Type vs Interface: When to Use Which\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype ID = string | number; interface Named { name: string; } let val: ID = 42;\n```",
    "workedExample": {
      "title": "Worked Example: Type vs Interface: When to Use Which",
      "code": "type ID = string | number; interface Named { name: string; } let val: ID = 42;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type ID = string | number; interface Named { name: string; } let val: ID = 42;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype ID = string | number; interface Named { name: string; } let val: ID = 42;\n",
    "solutionCode": "type ID = string | number; interface Named { name: string; } let val: ID = 42;\n",
    "hints": [
      "Write: type ID = string | number; interface Named { name: string; } let val: ID = 42;"
    ],
    "testCases": [
      {
        "id": "ts-30-tc-1",
        "description": "TypeScript compiles and satisfies Type vs Interface: When to Use Which",
        "testFn": "val === 42"
      }
    ]
  },
  {
    "id": "ts-31-declaration-merging-in-in",
    "title": "31. Declaration Merging in Interfaces",
    "slug": "declaration-merging-in-interfa",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Declaration Merging in Interfaces in TypeScript with strict compile-time checking.",
    "concepts": [
      "Declaration Merging in Interfaces",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Declaration Merging in Interfaces\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface WindowSettings { theme: string; } interface WindowSettings { zoom: number; } let s: WindowSettings = { theme: 'dark', zoom: 100 };\n```",
    "workedExample": {
      "title": "Worked Example: Declaration Merging in Interfaces",
      "code": "interface WindowSettings { theme: string; } interface WindowSettings { zoom: number; } let s: WindowSettings = { theme: 'dark', zoom: 100 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface WindowSettings { theme: string; } interface WindowSettings { zoom: number; } let s: WindowSettings = { theme: 'dark', zoom: 100 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface WindowSettings { theme: string; } interface WindowSettings { zoom: number; } let s: WindowSettings = { theme: 'dark', zoom: 100 };\n",
    "solutionCode": "interface WindowSettings { theme: string; } interface WindowSettings { zoom: number; } let s: WindowSettings = { theme: 'dark', zoom: 100 };\n",
    "hints": [
      "Write: interface WindowSettings { theme: string; } interface WindowSettings { zoom: number; } let s: WindowSettings = { theme: 'dark', zoom: 100 };"
    ],
    "testCases": [
      {
        "id": "ts-31-tc-1",
        "description": "TypeScript compiles and satisfies Declaration Merging in Interfaces",
        "testFn": "s.theme === 'dark' && s.zoom === 100"
      }
    ]
  },
  {
    "id": "ts-32-method-signatures-in-inte",
    "title": "32. Method Signatures in Interfaces",
    "slug": "method-signatures-in-interface",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Method Signatures in Interfaces in TypeScript with strict compile-time checking.",
    "concepts": [
      "Method Signatures in Interfaces",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Method Signatures in Interfaces\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Greeter { greet(name: string): string; } let g: Greeter = { greet: (n) => 'Hello ' + n };\n```",
    "workedExample": {
      "title": "Worked Example: Method Signatures in Interfaces",
      "code": "interface Greeter { greet(name: string): string; } let g: Greeter = { greet: (n) => 'Hello ' + n };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Greeter { greet(name: string): string; } let g: Greeter = { greet: (n) => 'Hello ' + n };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Greeter { greet(name: string): string; } let g: Greeter = { greet: (n) => 'Hello ' + n };\n",
    "solutionCode": "interface Greeter { greet(name: string): string; } let g: Greeter = { greet: (n) => 'Hello ' + n };\n",
    "hints": [
      "Write: interface Greeter { greet(name: string): string; } let g: Greeter = { greet: (n) => 'Hello ' + n };"
    ],
    "testCases": [
      {
        "id": "ts-32-tc-1",
        "description": "TypeScript compiles and satisfies Method Signatures in Interfaces",
        "testFn": "g.greet('TypeScript') === 'Hello TypeScript'"
      }
    ]
  },
  {
    "id": "ts-33-excess-property-checks",
    "title": "33. Excess Property Checks",
    "slug": "excess-property-checks",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Excess Property Checks in TypeScript with strict compile-time checking.",
    "concepts": [
      "Excess Property Checks",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Excess Property Checks\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Point { x: number; y: number; } let pt: Point = { x: 5, y: 10 };\n```",
    "workedExample": {
      "title": "Worked Example: Excess Property Checks",
      "code": "interface Point { x: number; y: number; } let pt: Point = { x: 5, y: 10 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Point { x: number; y: number; } let pt: Point = { x: 5, y: 10 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Point { x: number; y: number; } let pt: Point = { x: 5, y: 10 };\n",
    "solutionCode": "interface Point { x: number; y: number; } let pt: Point = { x: 5, y: 10 };\n",
    "hints": [
      "Write: interface Point { x: number; y: number; } let pt: Point = { x: 5, y: 10 };"
    ],
    "testCases": [
      {
        "id": "ts-33-tc-1",
        "description": "TypeScript compiles and satisfies Excess Property Checks",
        "testFn": "pt.x === 5 && pt.y === 10"
      }
    ]
  },
  {
    "id": "ts-34-module-3-review-microserv",
    "title": "34. Module 3 Review: Microservice Request Model",
    "slug": "module-3-review-microservice-r",
    "language": "typescript",
    "category": "Module 3: Object Types & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 3 Review: Microservice Request Model in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 3 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 3 Review: Microservice Request Model\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface APIPayload { endpoint: string; retries?: number; } let req: APIPayload = { endpoint: '/users', retries: 3 };\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Microservice Request Model",
      "code": "interface APIPayload { endpoint: string; retries?: number; } let req: APIPayload = { endpoint: '/users', retries: 3 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface APIPayload { endpoint: string; retries?: number; } let req: APIPayload = { endpoint: '/users', retries: 3 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface APIPayload { endpoint: string; retries?: number; } let req: APIPayload = { endpoint: '/users', retries: 3 };\n",
    "solutionCode": "interface APIPayload { endpoint: string; retries?: number; } let req: APIPayload = { endpoint: '/users', retries: 3 };\n",
    "hints": [
      "Write: interface APIPayload { endpoint: string; retries?: number; } let req: APIPayload = { endpoint: '/users', retries: 3 };"
    ],
    "testCases": [
      {
        "id": "ts-34-tc-1",
        "description": "TypeScript compiles and satisfies Module 3 Review: Microservice Request Model",
        "testFn": "req.endpoint === '/users' && req.retries === 3"
      }
    ]
  }
];
