import { Lesson } from '../../../types';

export const tsModule2Lessons: Lesson[] = [
  {
    "id": "ts-11-typed-arrays-type[]-synta",
    "title": "11. Typed Arrays: type[] Syntax",
    "slug": "typed-arrays-type[]-syntax",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Typed Arrays: type[] Syntax in TypeScript with strict compile-time checking.",
    "concepts": [
      "Typed Arrays",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Typed Arrays: type[] Syntax\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet scores: number[] = [95, 88, 100];\n```",
    "workedExample": {
      "title": "Worked Example: Typed Arrays: type[] Syntax",
      "code": "let scores: number[] = [95, 88, 100];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let scores: number[] = [95, 88, 100];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "let scores: number[] = [95, 88, 100];\n",
    "hints": [
      "Write: let scores: number[] = [95, 88, 100];"
    ],
    "testCases": [
      {
        "id": "ts-11-tc-1",
        "description": "TypeScript compiles and satisfies Typed Arrays: type[] Syntax",
        "testFn": "scores.length === 3 && scores[0] === 95"
      }
    ]
  },
  {
    "id": "ts-12-generic-array-notation-ar",
    "title": "12. Generic Array Notation: Array<T>",
    "slug": "generic-array-notation-arrayt",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Generic Array Notation: Array<T> in TypeScript with strict compile-time checking.",
    "concepts": [
      "Generic Array Notation",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Generic Array Notation: Array<T>\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet names: Array<string> = ['Alice', 'Bob'];\n```",
    "workedExample": {
      "title": "Worked Example: Generic Array Notation: Array<T>",
      "code": "let names: Array<string> = ['Alice', 'Bob'];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let names: Array<string> = ['Alice', 'Bob'];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "let names: Array<string> = ['Alice', 'Bob'];\n",
    "hints": [
      "Write: let names: Array<string> = ['Alice', 'Bob'];"
    ],
    "testCases": [
      {
        "id": "ts-12-tc-1",
        "description": "TypeScript compiles and satisfies Generic Array Notation: Array<T>",
        "testFn": "names.length === 2 && names[1] === 'Bob'"
      }
    ]
  },
  {
    "id": "ts-13-readonly-arrays-preventin",
    "title": "13. Readonly Arrays: Preventing Mutations",
    "slug": "readonly-arrays-preventing-mut",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Readonly Arrays: Preventing Mutations in TypeScript with strict compile-time checking.",
    "concepts": [
      "Readonly Arrays",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Readonly Arrays: Preventing Mutations\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nconst numbers: readonly number[] = [1, 2, 3];\n```",
    "workedExample": {
      "title": "Worked Example: Readonly Arrays: Preventing Mutations",
      "code": "const numbers: readonly number[] = [1, 2, 3];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `const numbers: readonly number[] = [1, 2, 3];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "const numbers: readonly number[] = [1, 2, 3];\n",
    "hints": [
      "Write: const numbers: readonly number[] = [1, 2, 3];"
    ],
    "testCases": [
      {
        "id": "ts-13-tc-1",
        "description": "TypeScript compiles and satisfies Readonly Arrays: Preventing Mutations",
        "testFn": "numbers.length === 3"
      }
    ]
  },
  {
    "id": "ts-14-tuples-fixed-length-&-typ",
    "title": "14. Tuples: Fixed-Length & Typed Order",
    "slug": "tuples-fixed-length-&-typed-or",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Tuples: Fixed-Length & Typed Order in TypeScript with strict compile-time checking.",
    "concepts": [
      "Tuples",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Tuples: Fixed-Length & Typed Order\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet user: [string, number] = ['Sam', 42];\n```",
    "workedExample": {
      "title": "Worked Example: Tuples: Fixed-Length & Typed Order",
      "code": "let user: [string, number] = ['Sam', 42];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let user: [string, number] = ['Sam', 42];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "let user: [string, number] = ['Sam', 42];\n",
    "hints": [
      "Write: let user: [string, number] = ['Sam', 42];"
    ],
    "testCases": [
      {
        "id": "ts-14-tc-1",
        "description": "TypeScript compiles and satisfies Tuples: Fixed-Length & Typed Order",
        "testFn": "user[0] === 'Sam' && user[1] === 42"
      }
    ]
  },
  {
    "id": "ts-15-named-tuples-self-documen",
    "title": "15. Named Tuples: Self-Documenting Coordinates",
    "slug": "named-tuples-self-documenting-",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Named Tuples: Self-Documenting Coordinates in TypeScript with strict compile-time checking.",
    "concepts": [
      "Named Tuples",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Named Tuples: Self-Documenting Coordinates\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Point2D = [x: number, y: number]; let pt: Point2D = [10, 25];\n```",
    "workedExample": {
      "title": "Worked Example: Named Tuples: Self-Documenting Coordinates",
      "code": "type Point2D = [x: number, y: number]; let pt: Point2D = [10, 25];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Point2D = [x: number, y: number]; let pt: Point2D = [10, 25];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Point2D = [x: number, y: number]; let pt: Point2D = [10, 25];\n",
    "hints": [
      "Write: type Point2D = [x: number, y: number]; let pt: Point2D = [10, 25];"
    ],
    "testCases": [
      {
        "id": "ts-15-tc-1",
        "description": "TypeScript compiles and satisfies Named Tuples: Self-Documenting Coordinates",
        "testFn": "pt[0] === 10 && pt[1] === 25"
      }
    ]
  },
  {
    "id": "ts-16-optional-elements-in-tupl",
    "title": "16. Optional Elements in Tuples",
    "slug": "optional-elements-in-tuples",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Optional Elements in Tuples in TypeScript with strict compile-time checking.",
    "concepts": [
      "Optional Elements in Tuples",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Optional Elements in Tuples\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype RGB = [number, number, number, number?]; let color: RGB = [255, 0, 0];\n```",
    "workedExample": {
      "title": "Worked Example: Optional Elements in Tuples",
      "code": "type RGB = [number, number, number, number?]; let color: RGB = [255, 0, 0];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type RGB = [number, number, number, number?]; let color: RGB = [255, 0, 0];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type RGB = [number, number, number, number?]; let color: RGB = [255, 0, 0];\n",
    "hints": [
      "Write: type RGB = [number, number, number, number?]; let color: RGB = [255, 0, 0];"
    ],
    "testCases": [
      {
        "id": "ts-16-tc-1",
        "description": "TypeScript compiles and satisfies Optional Elements in Tuples",
        "testFn": "color.length === 3"
      }
    ]
  },
  {
    "id": "ts-17-tuple-rest-elements",
    "title": "17. Tuple Rest Elements",
    "slug": "tuple-rest-elements",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Tuple Rest Elements in TypeScript with strict compile-time checking.",
    "concepts": [
      "Tuple Rest Elements",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Tuple Rest Elements\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype StringNumberBooleans = [string, ...number[]]; let record: StringNumberBooleans = ['ID', 1, 2, 3];\n```",
    "workedExample": {
      "title": "Worked Example: Tuple Rest Elements",
      "code": "type StringNumberBooleans = [string, ...number[]]; let record: StringNumberBooleans = ['ID', 1, 2, 3];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type StringNumberBooleans = [string, ...number[]]; let record: StringNumberBooleans = ['ID', 1, 2, 3];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type StringNumberBooleans = [string, ...number[]]; let record: StringNumberBooleans = ['ID', 1, 2, 3];\n",
    "hints": [
      "Write: type StringNumberBooleans = [string, ...number[]]; let record: StringNumberBooleans = ['ID', 1, 2, 3];"
    ],
    "testCases": [
      {
        "id": "ts-17-tc-1",
        "description": "TypeScript compiles and satisfies Tuple Rest Elements",
        "testFn": "record[0] === 'ID' && record[1] === 1"
      }
    ]
  },
  {
    "id": "ts-18-destructuring-typed-tuple",
    "title": "18. Destructuring Typed Tuples",
    "slug": "destructuring-typed-tuples",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Destructuring Typed Tuples in TypeScript with strict compile-time checking.",
    "concepts": [
      "Destructuring Typed Tuples",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Destructuring Typed Tuples\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet pair: [string, number] = ['Key', 99]; let [k, v] = pair;\n```",
    "workedExample": {
      "title": "Worked Example: Destructuring Typed Tuples",
      "code": "let pair: [string, number] = ['Key', 99]; let [k, v] = pair;",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let pair: [string, number] = ['Key', 99]; let [k, v] = pair;`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "let pair: [string, number] = ['Key', 99]; let [k, v] = pair;\n",
    "hints": [
      "Write: let pair: [string, number] = ['Key', 99]; let [k, v] = pair;"
    ],
    "testCases": [
      {
        "id": "ts-18-tc-1",
        "description": "TypeScript compiles and satisfies Destructuring Typed Tuples",
        "testFn": "k === 'Key' && v === 99"
      }
    ]
  },
  {
    "id": "ts-19-multi-dimensional-typed-a",
    "title": "19. Multi-Dimensional Typed Arrays",
    "slug": "multi-dimensional-typed-arrays",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Multi-Dimensional Typed Arrays in TypeScript with strict compile-time checking.",
    "concepts": [
      "Multi-Dimensional Typed Arrays",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Multi-Dimensional Typed Arrays\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nlet matrix: number[][] = [[1, 2], [3, 4]];\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Dimensional Typed Arrays",
      "code": "let matrix: number[][] = [[1, 2], [3, 4]];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `let matrix: number[][] = [[1, 2], [3, 4]];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "let matrix: number[][] = [[1, 2], [3, 4]];\n",
    "hints": [
      "Write: let matrix: number[][] = [[1, 2], [3, 4]];"
    ],
    "testCases": [
      {
        "id": "ts-19-tc-1",
        "description": "TypeScript compiles and satisfies Multi-Dimensional Typed Arrays",
        "testFn": "matrix.length === 2 && matrix[0][0] === 1"
      }
    ]
  },
  {
    "id": "ts-20-module-2-review-leaderboa",
    "title": "20. Module 2 Review: Leaderboard Tuples",
    "slug": "module-2-review-leaderboard-tu",
    "language": "typescript",
    "category": "Module 2: Arrays & Tuples",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Module 2 Review: Leaderboard Tuples in TypeScript with strict compile-time checking.",
    "concepts": [
      "Module 2 Review",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Module 2 Review: Leaderboard Tuples\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Leader = [rank: number, name: string]; let first: Leader = [1, 'Nova'];\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Leaderboard Tuples",
      "code": "type Leader = [rank: number, name: string]; let first: Leader = [1, 'Nova'];",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Leader = [rank: number, name: string]; let first: Leader = [1, 'Nova'];`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// Step 1: Write your typed TypeScript code below\n// TODO: Write code below\n",
    "solutionCode": "type Leader = [rank: number, name: string]; let first: Leader = [1, 'Nova'];\n",
    "hints": [
      "Write: type Leader = [rank: number, name: string]; let first: Leader = [1, 'Nova'];"
    ],
    "testCases": [
      {
        "id": "ts-20-tc-1",
        "description": "TypeScript compiles and satisfies Module 2 Review: Leaderboard Tuples",
        "testFn": "first[0] === 1 && first[1] === 'Nova'"
      }
    ]
  }
];
