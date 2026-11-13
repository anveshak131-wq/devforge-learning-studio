import { Lesson } from '../../../types';

export const tsModule13Lessons: Lesson[] = [
  {
    "id": "ts-139-importing-&-exporting-typ",
    "title": "139. Importing & Exporting Types with 'import type'",
    "slug": "importing-&-exporting-types-wi",
    "language": "typescript",
    "category": "Module 13: Namespaces & Type Declarations",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Importing & Exporting Types with 'import type' in TypeScript with strict compile-time checking.",
    "concepts": [
      "Importing & Exporting Types with 'import type'",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Importing & Exporting Types with 'import type'\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nexport type Status = 'active' | 'archived'; let s: Status = 'active';\n```",
    "workedExample": {
      "title": "Worked Example: Importing & Exporting Types with 'import type'",
      "code": "export type Status = 'active' | 'archived'; let s: Status = 'active';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `export type Status = 'active' | 'archived'; let s: Status = 'active';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nexport type Status = 'active' | 'archived'; let s: Status = 'active';\n",
    "solutionCode": "export type Status = 'active' | 'archived'; let s: Status = 'active';\n",
    "hints": [
      "Write: export type Status = 'active' | 'archived'; let s: Status = 'active';"
    ],
    "testCases": [
      {
        "id": "ts-139-tc-1",
        "description": "TypeScript compiles and satisfies Importing & Exporting Types with 'import type'",
        "testFn": "s === 'active'"
      }
    ]
  },
  {
    "id": "ts-140-ambient-declarations-with",
    "title": "140. Ambient Declarations with 'declare'",
    "slug": "ambient-declarations-with-decl",
    "language": "typescript",
    "category": "Module 13: Namespaces & Type Declarations",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Ambient Declarations with 'declare' in TypeScript with strict compile-time checking.",
    "concepts": [
      "Ambient Declarations with 'declare'",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Ambient Declarations with 'declare'\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ndeclare const __VERSION__: string; let version = '1.0.0';\n```",
    "workedExample": {
      "title": "Worked Example: Ambient Declarations with 'declare'",
      "code": "declare const __VERSION__: string; let version = '1.0.0';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `declare const __VERSION__: string; let version = '1.0.0';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ndeclare const __VERSION__: string; let version = '1.0.0';\n",
    "solutionCode": "declare const __VERSION__: string; let version = '1.0.0';\n",
    "hints": [
      "Write: declare const __VERSION__: string; let version = '1.0.0';"
    ],
    "testCases": [
      {
        "id": "ts-140-tc-1",
        "description": "TypeScript compiles and satisfies Ambient Declarations with 'declare'",
        "testFn": "version === '1.0.0'"
      }
    ]
  },
  {
    "id": "ts-141-global-augmentation-decla",
    "title": "141. Global Augmentation (declare global)",
    "slug": "global-augmentation-declare-gl",
    "language": "typescript",
    "category": "Module 13: Namespaces & Type Declarations",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Global Augmentation (declare global) in TypeScript with strict compile-time checking.",
    "concepts": [
      "Global Augmentation (declare global)",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Global Augmentation (declare global)\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface AppConfig { env: string; } let cfg: AppConfig = { env: 'production' };\n```",
    "workedExample": {
      "title": "Worked Example: Global Augmentation (declare global)",
      "code": "interface AppConfig { env: string; } let cfg: AppConfig = { env: 'production' };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface AppConfig { env: string; } let cfg: AppConfig = { env: 'production' };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface AppConfig { env: string; } let cfg: AppConfig = { env: 'production' };\n",
    "solutionCode": "interface AppConfig { env: string; } let cfg: AppConfig = { env: 'production' };\n",
    "hints": [
      "Write: interface AppConfig { env: string; } let cfg: AppConfig = { env: 'production' };"
    ],
    "testCases": [
      {
        "id": "ts-141-tc-1",
        "description": "TypeScript compiles and satisfies Global Augmentation (declare global)",
        "testFn": "cfg.env === 'production'"
      }
    ]
  },
  {
    "id": "ts-142-module-augmentation-patte",
    "title": "142. Module Augmentation Pattern",
    "slug": "module-augmentation-pattern",
    "language": "typescript",
    "category": "Module 13: Namespaces & Type Declarations",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module Augmentation Pattern in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module Augmentation Pattern",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module Augmentation Pattern\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype ExtendedString = string; let str: ExtendedString = 'augmented';\n```",
    "workedExample": {
      "title": "Worked Example: Module Augmentation Pattern",
      "code": "type ExtendedString = string; let str: ExtendedString = 'augmented';",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type ExtendedString = string; let str: ExtendedString = 'augmented';`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype ExtendedString = string; let str: ExtendedString = 'augmented';\n",
    "solutionCode": "type ExtendedString = string; let str: ExtendedString = 'augmented';\n",
    "hints": [
      "Write: type ExtendedString = string; let str: ExtendedString = 'augmented';"
    ],
    "testCases": [
      {
        "id": "ts-142-tc-1",
        "description": "TypeScript compiles and satisfies Module Augmentation Pattern",
        "testFn": "str === 'augmented'"
      }
    ]
  },
  {
    "id": "ts-143-triple-slash-directives-&",
    "title": "143. Triple-Slash Directives & Type References",
    "slug": "triple-slash-directives-&-type",
    "language": "typescript",
    "category": "Module 13: Namespaces & Type Declarations",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Triple-Slash Directives & Type References in TypeScript with strict compile-time checking.",
    "concepts": [
      "Triple-Slash Directives & Type References",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Triple-Slash Directives & Type References\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet referenceLoaded = true;\n```",
    "workedExample": {
      "title": "Worked Example: Triple-Slash Directives & Type References",
      "code": "let referenceLoaded = true;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let referenceLoaded = true;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nlet referenceLoaded = true;\n",
    "solutionCode": "let referenceLoaded = true;\n",
    "hints": [
      "Write: let referenceLoaded = true;"
    ],
    "testCases": [
      {
        "id": "ts-143-tc-1",
        "description": "TypeScript compiles and satisfies Triple-Slash Directives & Type References",
        "testFn": "referenceLoaded === true"
      }
    ]
  },
  {
    "id": "ts-144-module-13-review-library-",
    "title": "144. Module 13 Review: Library Type Definitions",
    "slug": "module-13-review-library-type-",
    "language": "typescript",
    "category": "Module 13: Namespaces & Type Declarations",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module 13 Review: Library Type Definitions in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 13 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 13 Review: Library Type Definitions\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface LibraryExport { version: string; init(): boolean; } const lib: LibraryExport = { version: '2.4.0', init: () => true };\n```",
    "workedExample": {
      "title": "Worked Example: Module 13 Review: Library Type Definitions",
      "code": "interface LibraryExport { version: string; init(): boolean; } const lib: LibraryExport = { version: '2.4.0', init: () => true };",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface LibraryExport { version: string; init(): boolean; } const lib: LibraryExport = { version: '2.4.0', init: () => true };`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface LibraryExport { version: string; init(): boolean; } const lib: LibraryExport = { version: '2.4.0', init: () => true };\n",
    "solutionCode": "interface LibraryExport { version: string; init(): boolean; } const lib: LibraryExport = { version: '2.4.0', init: () => true };\n",
    "hints": [
      "Write: interface LibraryExport { version: string; init(): boolean; } const lib: LibraryExport = { version: '2.4.0', init: () => true };"
    ],
    "testCases": [
      {
        "id": "ts-144-tc-1",
        "description": "TypeScript compiles and satisfies Module 13 Review: Library Type Definitions",
        "testFn": "lib.version === '2.4.0' && lib.init() === true"
      }
    ]
  }
];
