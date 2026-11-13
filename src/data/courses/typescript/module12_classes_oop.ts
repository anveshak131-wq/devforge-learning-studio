import { Lesson } from '../../../types';

export const tsModule12Lessons: Lesson[] = [
  {
    "id": "ts-129-class-property-modifiers-",
    "title": "129. Class Property Modifiers: public, private, protected",
    "slug": "class-property-modifiers-publi",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Class Property Modifiers: public, private, protected in TypeScript with strict compile-time checking.",
    "concepts": [
      "Class Property Modifiers",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Class Property Modifiers: public, private, protected\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Account { public id: string; private balance: number; constructor(id: string, bal: number) { this.id = id; this.balance = bal; } getBalance() { return this.balance; } } let a = new Account('acc-1', 500);\n```",
    "workedExample": {
      "title": "Worked Example: Class Property Modifiers: public, private, protected",
      "code": "class Account { public id: string; private balance: number; constructor(id: string, bal: number) { this.id = id; this.balance = bal; } getBalance() { return this.balance; } } let a = new Account('acc-1', 500);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Account { public id: string; private balance: number; constructor(id: string, bal: number) { this.id = id; this.balance = bal; } getBalance() { return this.balance; } } let a = new Account('acc-1', 500);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Account { public id: string; private balance: number; constructor(id: string, bal: number) { this.id = id; this.balance = bal; } getBalance() { return this.balance; } } let a = new Account('acc-1', 500);\n",
    "hints": [
      "Write: class Account { public id: string; private balance: number; constructor(id: string, bal: number) { this.id = id; this.balance = bal; } getBalance() { return this.balance; } } let a = new Account('acc-1', 500);"
    ],
    "testCases": [
      {
        "id": "ts-129-tc-1",
        "description": "TypeScript compiles and satisfies Class Property Modifiers: public, private, protected",
        "testFn": "a.id === 'acc-1' && a.getBalance() === 500"
      }
    ]
  },
  {
    "id": "ts-130-readonly-class-fields",
    "title": "130. Readonly Class Fields",
    "slug": "readonly-class-fields",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Readonly Class Fields in TypeScript with strict compile-time checking.",
    "concepts": [
      "Readonly Class Fields",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Readonly Class Fields\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Employee { readonly joinedAt: Date = new Date(); constructor(public name: string) {} } let e = new Employee('Sarah');\n```",
    "workedExample": {
      "title": "Worked Example: Readonly Class Fields",
      "code": "class Employee { readonly joinedAt: Date = new Date(); constructor(public name: string) {} } let e = new Employee('Sarah');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Employee { readonly joinedAt: Date = new Date(); constructor(public name: string) {} } let e = new Employee('Sarah');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Employee { readonly joinedAt: Date = new Date(); constructor(public name: string) {} } let e = new Employee('Sarah');\n",
    "hints": [
      "Write: class Employee { readonly joinedAt: Date = new Date(); constructor(public name: string) {} } let e = new Employee('Sarah');"
    ],
    "testCases": [
      {
        "id": "ts-130-tc-1",
        "description": "TypeScript compiles and satisfies Readonly Class Fields",
        "testFn": "e.name === 'Sarah'"
      }
    ]
  },
  {
    "id": "ts-131-parameter-properties-shor",
    "title": "131. Parameter Properties Shortcut (constructor(public name: string))",
    "slug": "parameter-properties-shortcut-",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Parameter Properties Shortcut (constructor(public name: string)) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Parameter Properties Shortcut (constructor(public name",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Parameter Properties Shortcut (constructor(public name: string))\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Vehicle { constructor(public brand: string, public year: number) {} } let v = new Vehicle('Honda', 2022);\n```",
    "workedExample": {
      "title": "Worked Example: Parameter Properties Shortcut (constructor(public name: string))",
      "code": "class Vehicle { constructor(public brand: string, public year: number) {} } let v = new Vehicle('Honda', 2022);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Vehicle { constructor(public brand: string, public year: number) {} } let v = new Vehicle('Honda', 2022);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Vehicle { constructor(public brand: string, public year: number) {} } let v = new Vehicle('Honda', 2022);\n",
    "hints": [
      "Write: class Vehicle { constructor(public brand: string, public year: number) {} } let v = new Vehicle('Honda', 2022);"
    ],
    "testCases": [
      {
        "id": "ts-131-tc-1",
        "description": "TypeScript compiles and satisfies Parameter Properties Shortcut (constructor(public name: string))",
        "testFn": "v.brand === 'Honda' && v.year === 2022"
      }
    ]
  },
  {
    "id": "ts-132-getters-and-setters-with-",
    "title": "132. Getters and Setters with Types",
    "slug": "getters-and-setters-with-types",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Getters and Setters with Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Getters and Setters with Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Getters and Setters with Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Temperature { private _c: number = 0; get fahrenheit(): number { return this._c * 1.8 + 32; } set celsius(val: number) { this._c = val; } } let t = new Temperature(); t.celsius = 25;\n```",
    "workedExample": {
      "title": "Worked Example: Getters and Setters with Types",
      "code": "class Temperature { private _c: number = 0; get fahrenheit(): number { return this._c * 1.8 + 32; } set celsius(val: number) { this._c = val; } } let t = new Temperature(); t.celsius = 25;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Temperature { private _c: number = 0; get fahrenheit(): number { return this._c * 1.8 + 32; } set celsius(val: number) { this._c = val; } } let t = new Temperature(); t.celsius = 25;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Temperature { private _c: number = 0; get fahrenheit(): number { return this._c * 1.8 + 32; } set celsius(val: number) { this._c = val; } } let t = new Temperature(); t.celsius = 25;\n",
    "hints": [
      "Write: class Temperature { private _c: number = 0; get fahrenheit(): number { return this._c * 1.8 + 32; } set celsius(val: number) { this._c = val; } } let t = new Temperature(); t.celsius = 25;"
    ],
    "testCases": [
      {
        "id": "ts-132-tc-1",
        "description": "TypeScript compiles and satisfies Getters and Setters with Types",
        "testFn": "t.fahrenheit === 77"
      }
    ]
  },
  {
    "id": "ts-133-static-class-members-&-ty",
    "title": "133. Static Class Members & Types",
    "slug": "static-class-members-&-types",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Static Class Members & Types in TypeScript with strict compile-time checking.",
    "concepts": [
      "Static Class Members & Types",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Static Class Members & Types\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass MathLibrary { static readonly PI: number = 3.14159; static square(n: number): number { return n * n; } } let sq = MathLibrary.square(5);\n```",
    "workedExample": {
      "title": "Worked Example: Static Class Members & Types",
      "code": "class MathLibrary { static readonly PI: number = 3.14159; static square(n: number): number { return n * n; } } let sq = MathLibrary.square(5);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class MathLibrary { static readonly PI: number = 3.14159; static square(n: number): number { return n * n; } } let sq = MathLibrary.square(5);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class MathLibrary { static readonly PI: number = 3.14159; static square(n: number): number { return n * n; } } let sq = MathLibrary.square(5);\n",
    "hints": [
      "Write: class MathLibrary { static readonly PI: number = 3.14159; static square(n: number): number { return n * n; } } let sq = MathLibrary.square(5);"
    ],
    "testCases": [
      {
        "id": "ts-133-tc-1",
        "description": "TypeScript compiles and satisfies Static Class Members & Types",
        "testFn": "sq === 25"
      }
    ]
  },
  {
    "id": "ts-134-abstract-classes-&-abstra",
    "title": "134. Abstract Classes & Abstract Methods",
    "slug": "abstract-classes-&-abstract-me",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Abstract Classes & Abstract Methods in TypeScript with strict compile-time checking.",
    "concepts": [
      "Abstract Classes & Abstract Methods",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Abstract Classes & Abstract Methods\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nabstract class Animal { abstract makeSound(): string; move(): string { return 'moving'; } } class Dog extends Animal { makeSound() { return 'woof'; } } let d = new Dog();\n```",
    "workedExample": {
      "title": "Worked Example: Abstract Classes & Abstract Methods",
      "code": "abstract class Animal { abstract makeSound(): string; move(): string { return 'moving'; } } class Dog extends Animal { makeSound() { return 'woof'; } } let d = new Dog();",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `abstract class Animal { abstract makeSound(): string; move(): string { return 'moving'; } } class Dog extends Animal { makeSound() { return 'woof'; } } let d = new Dog();`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "abstract class Animal { abstract makeSound(): string; move(): string { return 'moving'; } } class Dog extends Animal { makeSound() { return 'woof'; } } let d = new Dog();\n",
    "hints": [
      "Write: abstract class Animal { abstract makeSound(): string; move(): string { return 'moving'; } } class Dog extends Animal { makeSound() { return 'woof'; } } let d = new Dog();"
    ],
    "testCases": [
      {
        "id": "ts-134-tc-1",
        "description": "TypeScript compiles and satisfies Abstract Classes & Abstract Methods",
        "testFn": "d.makeSound() === 'woof' && d.move() === 'moving'"
      }
    ]
  },
  {
    "id": "ts-135-implementing-interfaces-o",
    "title": "135. Implementing Interfaces on Classes (implements)",
    "slug": "implementing-interfaces-on-cla",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Implementing Interfaces on Classes (implements) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Implementing Interfaces on Classes (implements)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Implementing Interfaces on Classes (implements)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Printable { print(): string; } class Report implements Printable { print() { return 'Report printed'; } } let r = new Report();\n```",
    "workedExample": {
      "title": "Worked Example: Implementing Interfaces on Classes (implements)",
      "code": "interface Printable { print(): string; } class Report implements Printable { print() { return 'Report printed'; } } let r = new Report();",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Printable { print(): string; } class Report implements Printable { print() { return 'Report printed'; } } let r = new Report();`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "interface Printable { print(): string; } class Report implements Printable { print() { return 'Report printed'; } } let r = new Report();\n",
    "hints": [
      "Write: interface Printable { print(): string; } class Report implements Printable { print() { return 'Report printed'; } } let r = new Report();"
    ],
    "testCases": [
      {
        "id": "ts-135-tc-1",
        "description": "TypeScript compiles and satisfies Implementing Interfaces on Classes (implements)",
        "testFn": "r.print() === 'Report printed'"
      }
    ]
  },
  {
    "id": "ts-136-class-inheritance-with-su",
    "title": "136. Class Inheritance with super() in TypeScript",
    "slug": "class-inheritance-with-super-i",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Class Inheritance with super() in TypeScript in TypeScript with strict compile-time checking.",
    "concepts": [
      "Class Inheritance with super() in TypeScript",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Class Inheritance with super() in TypeScript\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass BaseUser { constructor(public username: string) {} } class AdminUser extends BaseUser { constructor(username: string, public level: number) { super(username); } } let admin = new AdminUser('super', 1);\n```",
    "workedExample": {
      "title": "Worked Example: Class Inheritance with super() in TypeScript",
      "code": "class BaseUser { constructor(public username: string) {} } class AdminUser extends BaseUser { constructor(username: string, public level: number) { super(username); } } let admin = new AdminUser('super', 1);",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class BaseUser { constructor(public username: string) {} } class AdminUser extends BaseUser { constructor(username: string, public level: number) { super(username); } } let admin = new AdminUser('super', 1);`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class BaseUser { constructor(public username: string) {} } class AdminUser extends BaseUser { constructor(username: string, public level: number) { super(username); } } let admin = new AdminUser('super', 1);\n",
    "hints": [
      "Write: class BaseUser { constructor(public username: string) {} } class AdminUser extends BaseUser { constructor(username: string, public level: number) { super(username); } } let admin = new AdminUser('super', 1);"
    ],
    "testCases": [
      {
        "id": "ts-136-tc-1",
        "description": "TypeScript compiles and satisfies Class Inheritance with super() in TypeScript",
        "testFn": "admin.username === 'super' && admin.level === 1"
      }
    ]
  },
  {
    "id": "ts-137-classes-as-interfaces-typ",
    "title": "137. Classes as Interfaces (Type of an Instance)",
    "slug": "classes-as-interfaces-type-of-",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Classes as Interfaces (Type of an Instance) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Classes as Interfaces (Type of an Instance)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Classes as Interfaces (Type of an Instance)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass Point { x = 0; y = 0; } let p: Point = { x: 10, y: 20 };\n```",
    "workedExample": {
      "title": "Worked Example: Classes as Interfaces (Type of an Instance)",
      "code": "class Point { x = 0; y = 0; } let p: Point = { x: 10, y: 20 };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class Point { x = 0; y = 0; } let p: Point = { x: 10, y: 20 };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "class Point { x = 0; y = 0; } let p: Point = { x: 10, y: 20 };\n",
    "hints": [
      "Write: class Point { x = 0; y = 0; } let p: Point = { x: 10, y: 20 };"
    ],
    "testCases": [
      {
        "id": "ts-137-tc-1",
        "description": "TypeScript compiles and satisfies Classes as Interfaces (Type of an Instance)",
        "testFn": "p.x === 10 && p.y === 20"
      }
    ]
  },
  {
    "id": "ts-138-module-12-review-enterpri",
    "title": "138. Module 12 Review: Enterprise Domain Entity",
    "slug": "module-12-review-enterprise-do",
    "language": "typescript",
    "category": "Module 12: Object-Oriented TypeScript",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module 12 Review: Enterprise Domain Entity in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 12 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 12 Review: Enterprise Domain Entity\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nabstract class BaseEntity { constructor(readonly id: string) {} } class UserEntity extends BaseEntity { constructor(id: string, public email: string) { super(id); } } let u = new UserEntity('u-1', 'test@corp.io');\n```",
    "workedExample": {
      "title": "Worked Example: Module 12 Review: Enterprise Domain Entity",
      "code": "abstract class BaseEntity { constructor(readonly id: string) {} } class UserEntity extends BaseEntity { constructor(id: string, public email: string) { super(id); } } let u = new UserEntity('u-1', 'test@corp.io');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `abstract class BaseEntity { constructor(readonly id: string) {} } class UserEntity extends BaseEntity { constructor(id: string, public email: string) { super(id); } } let u = new UserEntity('u-1', 'test@corp.io');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "abstract class BaseEntity { constructor(readonly id: string) {} } class UserEntity extends BaseEntity { constructor(id: string, public email: string) { super(id); } } let u = new UserEntity('u-1', 'test@corp.io');\n",
    "hints": [
      "Write: abstract class BaseEntity { constructor(readonly id: string) {} } class UserEntity extends BaseEntity { constructor(id: string, public email: string) { super(id); } } let u = new UserEntity('u-1', 'test@corp.io');"
    ],
    "testCases": [
      {
        "id": "ts-138-tc-1",
        "description": "TypeScript compiles and satisfies Module 12 Review: Enterprise Domain Entity",
        "testFn": "u.id === 'u-1' && u.email === 'test@corp.io'"
      }
    ]
  }
];
