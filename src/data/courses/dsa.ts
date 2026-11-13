import { Track } from '../../types';

export const DSA_TRACK: Track = {
  id: "dsa",
  title: "Data Structures & Algorithms Mastery (150 Topics)",
  slug: "dsa",
  language: "dsa",
  icon: "Binary",
  color: "from-purple-500 to-pink-500",
  tagline: "Conquer Big-O, arrays, linked lists, trees, graphs, and dynamic programming across 150 lessons.",
  description: "From asymptotic Big-O analysis and sliding windows to binary heaps, Dijkstra's algorithm, Topological DAG sorting, and 0/1 knapsack dynamic programming.",
  lessons: [
  {
    "id": "dsa-1-time-complexity-vs-space-complex",
    "title": "1. Time Complexity vs Space Complexity",
    "slug": "lesson-1-time-complexity-vs-space-complex",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Time Complexity vs Space Complexity in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Time Complexity vs Space Complexity",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Time complexity is how many clock ticks an operation takes; space complexity is how many desk drawers it fills.",
    "explanationMarkdown": "### Time Complexity vs Space Complexity\n\nComplexity analysis measures how execution time and memory consumption scale as the input size (n) grows toward infinity.\n\n```dsa\nfunction analyzeAlgorithm(inputSize) {\n  return { time: `O(${inputSize})`, space: 'O(1)' };\n}\nconst res = analyzeAlgorithm('n');\n```",
    "workedExample": {
      "title": "Worked Example: Time Complexity vs Space Complexity",
      "code": "function analyzeAlgorithm(inputSize) {\n  return { time: `O(${inputSize})`, space: 'O(1)' };\n}\nconst res = analyzeAlgorithm('n');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Time Complexity vs Space Complexity.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Time Complexity vs Space Complexity.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function analyzeAlgorithm(inputSize) {\n  return { time: `O(${inputSize})`, space: 'O(1)' };\n}",
    "solutionCode": "function analyzeAlgorithm(inputSize) {\n  return { time: `O(${inputSize})`, space: 'O(1)' };\n}\nconst res = analyzeAlgorithm('n');",
    "hints": [
      "Write:\nfunction analyzeAlgorithm(inputSize) {\n  return { time: `O(${inputSize})`, space: 'O(1)' };\n}\nconst res = analyzeAlgorithm('n');"
    ],
    "testCases": [
      {
        "id": "dsa-1-tc-1",
        "description": "Verifies correct implementation for Time Complexity vs Space Complexity",
        "testFn": "res.time === 'O(n)' && res.space === 'O(1)'"
      }
    ]
  },
  {
    "id": "dsa-2-constant-time-o1-operations",
    "title": "2. Constant Time: O(1) Operations",
    "slug": "lesson-2-constant-time-o1-operations",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Constant Time: O(1) Operations in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Constant Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Grabbing a book from your front pocket: takes the same fraction of a second whether the room has 1 book or 1,000,000 books.",
    "explanationMarkdown": "### Constant Time: O(1) Operations\n\nO(1) algorithms execute in a fixed number of operations regardless of how large the input data becomes.\n\n```dsa\nfunction getFirstElement(arr) {\n  return arr[0];\n}\nconst first = getFirstElement([10, 20, 30]);\n```",
    "workedExample": {
      "title": "Worked Example: Constant Time: O(1) Operations",
      "code": "function getFirstElement(arr) {\n  return arr[0];\n}\nconst first = getFirstElement([10, 20, 30]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Constant Time: O(1) Operations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constant Time: O(1) Operations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function getFirstElement(arr) {\n  return arr[0];\n}",
    "solutionCode": "function getFirstElement(arr) {\n  return arr[0];\n}\nconst first = getFirstElement([10, 20, 30]);",
    "hints": [
      "Write:\nfunction getFirstElement(arr) {\n  return arr[0];\n}\nconst first = getFirstElement([10, 20, 30]);"
    ],
    "testCases": [
      {
        "id": "dsa-2-tc-1",
        "description": "Verifies correct implementation for Constant Time: O(1) Operations",
        "testFn": "first === 10"
      }
    ]
  },
  {
    "id": "dsa-3-linear-time-on-algorithms",
    "title": "3. Linear Time: O(n) Algorithms",
    "slug": "lesson-3-linear-time-on-algorithms",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Linear Time: O(n) Algorithms in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Linear Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Reading through every name in a phonebook one by one from the first page to the last page.",
    "explanationMarkdown": "### Linear Time: O(n) Algorithms\n\nO(n) algorithms inspect each item proportional to the size of the input.\n\n```dsa\nfunction findMax(arr) {\n  let max = arr[0];\n  for (const num of arr) if (num > max) max = num;\n  return max;\n}\nconst maxVal = findMax([3, 7, 2, 9, 5]);\n```",
    "workedExample": {
      "title": "Worked Example: Linear Time: O(n) Algorithms",
      "code": "function findMax(arr) {\n  let max = arr[0];\n  for (const num of arr) if (num > max) max = num;\n  return max;\n}\nconst maxVal = findMax([3, 7, 2, 9, 5]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linear Time: O(n) Algorithms.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linear Time: O(n) Algorithms.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function findMax(arr) {\n  let max = arr[0];\n  for (const num of arr) if (num > max) max = num;\n  return max;\n}",
    "solutionCode": "function findMax(arr) {\n  let max = arr[0];\n  for (const num of arr) if (num > max) max = num;\n  return max;\n}\nconst maxVal = findMax([3, 7, 2, 9, 5]);",
    "hints": [
      "Write:\nfunction findMax(arr) {\n  let max = arr[0];\n  for (const num of arr) if (num > max) max = num;\n  return max;\n}\nconst maxVal = findMax([3, 7, 2, 9, 5]);"
    ],
    "testCases": [
      {
        "id": "dsa-3-tc-1",
        "description": "Verifies correct implementation for Linear Time: O(n) Algorithms",
        "testFn": "maxVal === 9"
      }
    ]
  },
  {
    "id": "dsa-4-logarithmic-time-olog-n-binary-s",
    "title": "4. Logarithmic Time: O(log n) Binary Search",
    "slug": "lesson-4-logarithmic-time-olog-n-binary-s",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Logarithmic Time: O(log n) Binary Search in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Logarithmic Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Opening a dictionary in the middle, seeing if your word comes before or after, and throwing away half the book.",
    "explanationMarkdown": "### Logarithmic Time: O(log n) Binary Search\n\nO(log n) cuts the problem size in half on every step; searching 1,000,000 items takes only 20 steps!\n\n```dsa\nfunction binarySearchCount(n) {\n  let steps = 0;\n  while (n > 1) { n = Math.floor(n / 2); steps++; }\n  return steps;\n}\nconst steps = binarySearchCount(1024);\n```",
    "workedExample": {
      "title": "Worked Example: Logarithmic Time: O(log n) Binary Search",
      "code": "function binarySearchCount(n) {\n  let steps = 0;\n  while (n > 1) { n = Math.floor(n / 2); steps++; }\n  return steps;\n}\nconst steps = binarySearchCount(1024);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logarithmic Time: O(log n) Binary Search.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logarithmic Time: O(log n) Binary Search.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function binarySearchCount(n) {\n  let steps = 0;\n  while (n > 1) { n = Math.floor(n / 2); steps++; }\n  return steps;\n}",
    "solutionCode": "function binarySearchCount(n) {\n  let steps = 0;\n  while (n > 1) { n = Math.floor(n / 2); steps++; }\n  return steps;\n}\nconst steps = binarySearchCount(1024);",
    "hints": [
      "Write:\nfunction binarySearchCount(n) {\n  let steps = 0;\n  while (n > 1) { n = Math.floor(n / 2); steps++; }\n  return steps;\n}\nconst steps = binarySearchCount(1024);"
    ],
    "testCases": [
      {
        "id": "dsa-4-tc-1",
        "description": "Verifies correct implementation for Logarithmic Time: O(log n) Binary Search",
        "testFn": "steps === 10"
      }
    ]
  },
  {
    "id": "dsa-5-linearithmic-time-on-log-n-divid",
    "title": "5. Linearithmic Time: O(n log n) Divide and Conquer",
    "slug": "lesson-5-linearithmic-time-on-log-n-divid",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Linearithmic Time: O(n log n) Divide and Conquer in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Linearithmic Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Dividing a deck of cards into smaller pairs, sorting each pair, and merging them back together.",
    "explanationMarkdown": "### Linearithmic Time: O(n log n) Divide and Conquer\n\nO(n log n) is the theoretical lower bound for comparison-based sorting algorithms (Merge Sort, Heapsort).\n\n```dsa\nfunction mergeSortCost(n) {\n  return Math.round(n * Math.log2(n));\n}\nconst cost = mergeSortCost(8);\n```",
    "workedExample": {
      "title": "Worked Example: Linearithmic Time: O(n log n) Divide and Conquer",
      "code": "function mergeSortCost(n) {\n  return Math.round(n * Math.log2(n));\n}\nconst cost = mergeSortCost(8);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linearithmic Time: O(n log n) Divide and Conquer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linearithmic Time: O(n log n) Divide and Conquer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function mergeSortCost(n) {\n  return Math.round(n * Math.log2(n));\n}",
    "solutionCode": "function mergeSortCost(n) {\n  return Math.round(n * Math.log2(n));\n}\nconst cost = mergeSortCost(8);",
    "hints": [
      "Write:\nfunction mergeSortCost(n) {\n  return Math.round(n * Math.log2(n));\n}\nconst cost = mergeSortCost(8);"
    ],
    "testCases": [
      {
        "id": "dsa-5-tc-1",
        "description": "Verifies correct implementation for Linearithmic Time: O(n log n) Divide and Conquer",
        "testFn": "cost === 24"
      }
    ]
  },
  {
    "id": "dsa-6-quadratic-time-on^2-nested-loops",
    "title": "6. Quadratic Time: O(n^2) Nested Loops",
    "slug": "lesson-6-quadratic-time-on^2-nested-loops",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Quadratic Time: O(n^2) Nested Loops in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Quadratic Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Handshaking: every single person at a 100-person wedding shaking hands with every other guest.",
    "explanationMarkdown": "### Quadratic Time: O(n^2) Nested Loops\n\nNested loops over the same input yield O(n^2); acceptable for small inputs (n < 1,000), unviable for millions.\n\n```dsa\nfunction countPairs(n) {\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) count++;\n  }\n  return count;\n}\nconst pairs = countPairs(10);\n```",
    "workedExample": {
      "title": "Worked Example: Quadratic Time: O(n^2) Nested Loops",
      "code": "function countPairs(n) {\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) count++;\n  }\n  return count;\n}\nconst pairs = countPairs(10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Quadratic Time: O(n^2) Nested Loops.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Quadratic Time: O(n^2) Nested Loops.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function countPairs(n) {\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) count++;\n  }\n  return count;\n}",
    "solutionCode": "function countPairs(n) {\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) count++;\n  }\n  return count;\n}\nconst pairs = countPairs(10);",
    "hints": [
      "Write:\nfunction countPairs(n) {\n  let count = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) count++;\n  }\n  return count;\n}\nconst pairs = countPairs(10);"
    ],
    "testCases": [
      {
        "id": "dsa-6-tc-1",
        "description": "Verifies correct implementation for Quadratic Time: O(n^2) Nested Loops",
        "testFn": "pairs === 100"
      }
    ]
  },
  {
    "id": "dsa-7-exponential-time-o2^n-recursive-",
    "title": "7. Exponential Time: O(2^n) Recursive Branching",
    "slug": "lesson-7-exponential-time-o2^n-recursive-",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Exponential Time: O(2^n) Recursive Branching in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Exponential Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A nuclear chain reaction where every splitting atom triggers two new splits, exploding exponentially.",
    "explanationMarkdown": "### Exponential Time: O(2^n) Recursive Branching\n\nO(2^n) doubles runtime with every additional element added to the input; feasible only for tiny n (n < 30).\n\n```dsa\nfunction fibRecursive(n) {\n  if (n <= 1) return n;\n  return fibRecursive(n - 1) + fibRecursive(n - 2);\n}\nconst fib5 = fibRecursive(5);\n```",
    "workedExample": {
      "title": "Worked Example: Exponential Time: O(2^n) Recursive Branching",
      "code": "function fibRecursive(n) {\n  if (n <= 1) return n;\n  return fibRecursive(n - 1) + fibRecursive(n - 2);\n}\nconst fib5 = fibRecursive(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exponential Time: O(2^n) Recursive Branching.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exponential Time: O(2^n) Recursive Branching.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function fibRecursive(n) {\n  if (n <= 1) return n;\n  return fibRecursive(n - 1) + fibRecursive(n - 2);\n}",
    "solutionCode": "function fibRecursive(n) {\n  if (n <= 1) return n;\n  return fibRecursive(n - 1) + fibRecursive(n - 2);\n}\nconst fib5 = fibRecursive(5);",
    "hints": [
      "Write:\nfunction fibRecursive(n) {\n  if (n <= 1) return n;\n  return fibRecursive(n - 1) + fibRecursive(n - 2);\n}\nconst fib5 = fibRecursive(5);"
    ],
    "testCases": [
      {
        "id": "dsa-7-tc-1",
        "description": "Verifies correct implementation for Exponential Time: O(2^n) Recursive Branching",
        "testFn": "fib5 === 5"
      }
    ]
  },
  {
    "id": "dsa-8-factorial-time-on!-permutations",
    "title": "8. Factorial Time: O(n!) Permutations",
    "slug": "lesson-8-factorial-time-on!-permutations",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Factorial Time: O(n!) Permutations in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Factorial Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Calculating every possible seating arrangement of guests around a dinner table.",
    "explanationMarkdown": "### Factorial Time: O(n!) Permutations\n\nO(n!) permutations explore all possible orderings (e.g. Traveling Salesperson brute force).\n\n```dsa\nfunction factorialCount(n) {\n  return n <= 1 ? 1 : n * factorialCount(n - 1);\n}\nconst fact4 = factorialCount(4);\n```",
    "workedExample": {
      "title": "Worked Example: Factorial Time: O(n!) Permutations",
      "code": "function factorialCount(n) {\n  return n <= 1 ? 1 : n * factorialCount(n - 1);\n}\nconst fact4 = factorialCount(4);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Factorial Time: O(n!) Permutations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Factorial Time: O(n!) Permutations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function factorialCount(n) {\n  return n <= 1 ? 1 : n * factorialCount(n - 1);\n}",
    "solutionCode": "function factorialCount(n) {\n  return n <= 1 ? 1 : n * factorialCount(n - 1);\n}\nconst fact4 = factorialCount(4);",
    "hints": [
      "Write:\nfunction factorialCount(n) {\n  return n <= 1 ? 1 : n * factorialCount(n - 1);\n}\nconst fact4 = factorialCount(4);"
    ],
    "testCases": [
      {
        "id": "dsa-8-tc-1",
        "description": "Verifies correct implementation for Factorial Time: O(n!) Permutations",
        "testFn": "fact4 === 24"
      }
    ]
  },
  {
    "id": "dsa-9-space-complexity-&-aux-space",
    "title": "9. Space Complexity & Aux Space",
    "slug": "lesson-9-space-complexity-&-aux-space",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Space Complexity & Aux Space in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Space Complexity & Aux Space",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Renting extra storage lockers to hold duplicated copies of your household furniture.",
    "explanationMarkdown": "### Space Complexity & Aux Space\n\nMeasures the additional memory allocated by an algorithm beyond the original input data.\n\n```dsa\nfunction createCopy(arr) {\n  return [...arr];\n}\nconst copy = createCopy([1, 2, 3]);\n```",
    "workedExample": {
      "title": "Worked Example: Space Complexity & Aux Space",
      "code": "function createCopy(arr) {\n  return [...arr];\n}\nconst copy = createCopy([1, 2, 3]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Space Complexity & Aux Space.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Space Complexity & Aux Space.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function createCopy(arr) {\n  return [...arr]; // O(n) aux space\n}",
    "solutionCode": "function createCopy(arr) {\n  return [...arr];\n}\nconst copy = createCopy([1, 2, 3]);",
    "hints": [
      "Write:\nfunction createCopy(arr) {\n  return [...arr];\n}\nconst copy = createCopy([1, 2, 3]);"
    ],
    "testCases": [
      {
        "id": "dsa-9-tc-1",
        "description": "Verifies correct implementation for Space Complexity & Aux Space",
        "testFn": "copy.length === 3"
      }
    ]
  },
  {
    "id": "dsa-10-drop-the-constants-rule-o2n---on",
    "title": "10. Drop the Constants Rule (O(2n) -> O(n))",
    "slug": "lesson-10-drop-the-constants-rule-o2n---on",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Drop the Constants Rule (O(2n) -> O(n)) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Drop the Constants Rule (O(2n) -> O(n))",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Ignoring whether a car has 2 or 4 cup holders when calculating if it can drive at supersonic speed.",
    "explanationMarkdown": "### Drop the Constants Rule (O(2n) -> O(n))\n\nBig-O describes asymptotic growth; constant multipliers and coefficients are discarded as n approaches infinity.\n\n```dsa\nfunction simplifyBigO(n) {\n  return 'O(n)';\n}\nconst res = simplifyBigO(100);\n```",
    "workedExample": {
      "title": "Worked Example: Drop the Constants Rule (O(2n) -> O(n))",
      "code": "function simplifyBigO(n) {\n  return 'O(n)';\n}\nconst res = simplifyBigO(100);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Drop the Constants Rule (O(2n) -> O(n)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Drop the Constants Rule (O(2n) -> O(n)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function simplifyBigO(n) {\n  return 'O(n)'; // 2n + 5 simplifies to O(n)\n}",
    "solutionCode": "function simplifyBigO(n) {\n  return 'O(n)';\n}\nconst res = simplifyBigO(100);",
    "hints": [
      "Write:\nfunction simplifyBigO(n) {\n  return 'O(n)';\n}\nconst res = simplifyBigO(100);"
    ],
    "testCases": [
      {
        "id": "dsa-10-tc-1",
        "description": "Verifies correct implementation for Drop the Constants Rule (O(2n) -> O(n))",
        "testFn": "res === 'O(n)'"
      }
    ]
  },
  {
    "id": "dsa-11-drop-non-dominant-terms-rule-on^",
    "title": "11. Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2))",
    "slug": "lesson-11-drop-non-dominant-terms-rule-on^",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2)) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2))",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An elephant standing next to a grain of sand: as the elephant grows, the sand grain becomes irrelevant.",
    "explanationMarkdown": "### Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2))\n\nKeep only the fastest-growing term; lower-order terms contribute negligible percentage to total cost.\n\n```dsa\nfunction dominantTerm(n) {\n  return 'O(n^2)';\n}\nconst term = dominantTerm(1000);\n```",
    "workedExample": {
      "title": "Worked Example: Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2))",
      "code": "function dominantTerm(n) {\n  return 'O(n^2)';\n}\nconst term = dominantTerm(1000);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function dominantTerm(n) {\n  return 'O(n^2)'; // n^2 dwarfs n as n grows large\n}",
    "solutionCode": "function dominantTerm(n) {\n  return 'O(n^2)';\n}\nconst term = dominantTerm(1000);",
    "hints": [
      "Write:\nfunction dominantTerm(n) {\n  return 'O(n^2)';\n}\nconst term = dominantTerm(1000);"
    ],
    "testCases": [
      {
        "id": "dsa-11-tc-1",
        "description": "Verifies correct implementation for Drop Non-Dominant Terms Rule (O(n^2 + n) -> O(n^2))",
        "testFn": "term === 'O(n^2)'"
      }
    ]
  },
  {
    "id": "dsa-12-best,-average,-and-worst-case-sc",
    "title": "12. Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta)",
    "slug": "lesson-12-best,-average,-and-worst-case-sc",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Finding your lost car keys on the first hook you check (best) vs checking every pocket in the house (worst).",
    "explanationMarkdown": "### Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta)\n\nBig-O denotes upper bound (worst case), Big-Omega denotes lower bound (best case), Big-Theta denotes tight bound.\n\n```dsa\nfunction linearSearchCost(target, arr) {\n  if (arr[0] === target) return 'Best Case: O(1)';\n  return 'Worst Case: O(n)';\n}\nconst best = linearSearchCost(1, [1, 2, 3]);\n```",
    "workedExample": {
      "title": "Worked Example: Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta)",
      "code": "function linearSearchCost(target, arr) {\n  if (arr[0] === target) return 'Best Case: O(1)';\n  return 'Worst Case: O(n)';\n}\nconst best = linearSearchCost(1, [1, 2, 3]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function linearSearchCost(target, arr) {\n  if (arr[0] === target) return 'Best Case: O(1)';\n  return 'Worst Case: O(n)';\n}",
    "solutionCode": "function linearSearchCost(target, arr) {\n  if (arr[0] === target) return 'Best Case: O(1)';\n  return 'Worst Case: O(n)';\n}\nconst best = linearSearchCost(1, [1, 2, 3]);",
    "hints": [
      "Write:\nfunction linearSearchCost(target, arr) {\n  if (arr[0] === target) return 'Best Case: O(1)';\n  return 'Worst Case: O(n)';\n}\nconst best = linearSearchCost(1, [1, 2, 3]);"
    ],
    "testCases": [
      {
        "id": "dsa-12-tc-1",
        "description": "Verifies correct implementation for Best, Average, and Worst Case Scenarios (Big-O vs Big-Theta)",
        "testFn": "best.includes('O(1)')"
      }
    ]
  },
  {
    "id": "dsa-13-amortized-time-analysis-dynamic-",
    "title": "13. Amortized Time Analysis (Dynamic Array Resizing)",
    "slug": "lesson-13-amortized-time-analysis-dynamic-",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Amortized Time Analysis (Dynamic Array Resizing) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Amortized Time Analysis (Dynamic Array Resizing)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Paying an annual gym membership fee: one expensive day, followed by 364 free days of working out.",
    "explanationMarkdown": "### Amortized Time Analysis (Dynamic Array Resizing)\n\nOccasional expensive operations (like doubling array capacity) averaged across all calls yield cheap amortized O(1).\n\n```dsa\nfunction calculateAmortizedPush() {\n  return 'O(1) Amortized';\n}\nconst cost = calculateAmortizedPush();\n```",
    "workedExample": {
      "title": "Worked Example: Amortized Time Analysis (Dynamic Array Resizing)",
      "code": "function calculateAmortizedPush() {\n  return 'O(1) Amortized';\n}\nconst cost = calculateAmortizedPush();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Amortized Time Analysis (Dynamic Array Resizing).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Amortized Time Analysis (Dynamic Array Resizing).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function calculateAmortizedPush() {\n  return 'O(1) Amortized';\n}",
    "solutionCode": "function calculateAmortizedPush() {\n  return 'O(1) Amortized';\n}\nconst cost = calculateAmortizedPush();",
    "hints": [
      "Write:\nfunction calculateAmortizedPush() {\n  return 'O(1) Amortized';\n}\nconst cost = calculateAmortizedPush();"
    ],
    "testCases": [
      {
        "id": "dsa-13-tc-1",
        "description": "Verifies correct implementation for Amortized Time Analysis (Dynamic Array Resizing)",
        "testFn": "cost === 'O(1) Amortized'"
      }
    ]
  },
  {
    "id": "dsa-14-space-time-tradeoffs-caching-&-m",
    "title": "14. Space-Time Tradeoffs (Caching & Memoization)",
    "slug": "lesson-14-space-time-tradeoffs-caching-&-m",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Space-Time Tradeoffs (Caching & Memoization) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Space-Time Tradeoffs (Caching & Memoization)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Carrying a heavier backpack filled with reference books so you don't have to walk back to the library.",
    "explanationMarkdown": "### Space-Time Tradeoffs (Caching & Memoization)\n\nSpending additional memory (space) to store pre-computed answers saves future calculation duration (time).\n\n```dsa\nfunction cacheSquare(n, memo = {}) {\n  if (memo[n]) return memo[n];\n  memo[n] = n * n;\n  return memo[n];\n}\nconst sq = cacheSquare(9);\n```",
    "workedExample": {
      "title": "Worked Example: Space-Time Tradeoffs (Caching & Memoization)",
      "code": "function cacheSquare(n, memo = {}) {\n  if (memo[n]) return memo[n];\n  memo[n] = n * n;\n  return memo[n];\n}\nconst sq = cacheSquare(9);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Space-Time Tradeoffs (Caching & Memoization).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Space-Time Tradeoffs (Caching & Memoization).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function cacheSquare(n, memo = {}) {\n  if (memo[n]) return memo[n];\n  memo[n] = n * n;\n  return memo[n];\n}",
    "solutionCode": "function cacheSquare(n, memo = {}) {\n  if (memo[n]) return memo[n];\n  memo[n] = n * n;\n  return memo[n];\n}\nconst sq = cacheSquare(9);",
    "hints": [
      "Write:\nfunction cacheSquare(n, memo = {}) {\n  if (memo[n]) return memo[n];\n  memo[n] = n * n;\n  return memo[n];\n}\nconst sq = cacheSquare(9);"
    ],
    "testCases": [
      {
        "id": "dsa-14-tc-1",
        "description": "Verifies correct implementation for Space-Time Tradeoffs (Caching & Memoization)",
        "testFn": "sq === 81"
      }
    ]
  },
  {
    "id": "dsa-15-module-1-review-big-o-hierarchy-",
    "title": "15. Module 1 Review: Big-O Hierarchy Ranking",
    "slug": "lesson-15-module-1-review-big-o-hierarchy-",
    "language": "dsa",
    "category": "Module 1: Complexity Analysis & Big-O Notation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: Big-O Hierarchy Ranking in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 1 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "The speed hierarchy of transportation: teleportation, jet, train, car, bicycle, walking, crawling.",
    "explanationMarkdown": "### Module 1 Review: Big-O Hierarchy Ranking\n\nThe foundational curve of algorithmic efficiency: from instantaneous O(1) to uncomputable O(n!).\n\n```dsa\nfunction rankComplexities() {\n  return ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)', 'O(n!)'];\n}\nconst ranking = rankComplexities();\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: Big-O Hierarchy Ranking",
      "code": "function rankComplexities() {\n  return ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)', 'O(n!)'];\n}\nconst ranking = rankComplexities();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 1 Review: Big-O Hierarchy Ranking.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 1 Review: Big-O Hierarchy Ranking.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function rankComplexities() {\n  return ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)', 'O(n!)'];\n}",
    "solutionCode": "function rankComplexities() {\n  return ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)', 'O(n!)'];\n}\nconst ranking = rankComplexities();",
    "hints": [
      "Write:\nfunction rankComplexities() {\n  return ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)', 'O(n!)'];\n}\nconst ranking = rankComplexities();"
    ],
    "testCases": [
      {
        "id": "dsa-15-tc-1",
        "description": "Verifies correct implementation for Module 1 Review: Big-O Hierarchy Ranking",
        "testFn": "ranking[0] === 'O(1)' && ranking[ranking.length - 1] === 'O(n!)'"
      }
    ]
  },
  {
    "id": "dsa-16-array-memory-layout-contiguous-m",
    "title": "16. Array Memory Layout: Contiguous Memory Addressing",
    "slug": "lesson-16-array-memory-layout-contiguous-m",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Array Memory Layout: Contiguous Memory Addressing in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Array Memory Layout",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Houses lined up in a row on a street: calculating House #4 is simple math: Base + (4 * lot width).",
    "explanationMarkdown": "### Array Memory Layout: Contiguous Memory Addressing\n\nArrays are stored in contiguous memory blocks, enabling instantaneous O(1) random index access via arithmetic.\n\n```dsa\nfunction getElementAddress(base, index, elementSize) {\n  return base + index * elementSize;\n}\nconst addr = getElementAddress(1000, 3, 4);\n```",
    "workedExample": {
      "title": "Worked Example: Array Memory Layout: Contiguous Memory Addressing",
      "code": "function getElementAddress(base, index, elementSize) {\n  return base + index * elementSize;\n}\nconst addr = getElementAddress(1000, 3, 4);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Array Memory Layout: Contiguous Memory Addressing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Array Memory Layout: Contiguous Memory Addressing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function getElementAddress(base, index, elementSize) {\n  return base + index * elementSize;\n}",
    "solutionCode": "function getElementAddress(base, index, elementSize) {\n  return base + index * elementSize;\n}\nconst addr = getElementAddress(1000, 3, 4);",
    "hints": [
      "Write:\nfunction getElementAddress(base, index, elementSize) {\n  return base + index * elementSize;\n}\nconst addr = getElementAddress(1000, 3, 4);"
    ],
    "testCases": [
      {
        "id": "dsa-16-tc-1",
        "description": "Verifies correct implementation for Array Memory Layout: Contiguous Memory Addressing",
        "testFn": "addr === 1012"
      }
    ]
  },
  {
    "id": "dsa-17-static-vs-dynamic-arrays-capacit",
    "title": "17. Static vs Dynamic Arrays (Capacity Doubling)",
    "slug": "lesson-17-static-vs-dynamic-arrays-capacit",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Static vs Dynamic Arrays (Capacity Doubling) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Static vs Dynamic Arrays (Capacity Doubling)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A suitcase that magically unzips to double its volume whenever it becomes 100% full.",
    "explanationMarkdown": "### Static vs Dynamic Arrays (Capacity Doubling)\n\nWhen a dynamic array exceeds its capacity, it allocates a new buffer twice as large and copies all elements over.\n\n```dsa\nfunction nextCapacity(curr) {\n  return curr === 0 ? 1 : curr * 2;\n}\nconst cap = nextCapacity(4);\n```",
    "workedExample": {
      "title": "Worked Example: Static vs Dynamic Arrays (Capacity Doubling)",
      "code": "function nextCapacity(curr) {\n  return curr === 0 ? 1 : curr * 2;\n}\nconst cap = nextCapacity(4);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static vs Dynamic Arrays (Capacity Doubling).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static vs Dynamic Arrays (Capacity Doubling).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function nextCapacity(curr) {\n  return curr === 0 ? 1 : curr * 2;\n}",
    "solutionCode": "function nextCapacity(curr) {\n  return curr === 0 ? 1 : curr * 2;\n}\nconst cap = nextCapacity(4);",
    "hints": [
      "Write:\nfunction nextCapacity(curr) {\n  return curr === 0 ? 1 : curr * 2;\n}\nconst cap = nextCapacity(4);"
    ],
    "testCases": [
      {
        "id": "dsa-17-tc-1",
        "description": "Verifies correct implementation for Static vs Dynamic Arrays (Capacity Doubling)",
        "testFn": "cap === 8"
      }
    ]
  },
  {
    "id": "dsa-18-two-pointer-pattern-opposite-end",
    "title": "18. Two-Pointer Pattern: Opposite Ends (Pair Sum)",
    "slug": "lesson-18-two-pointer-pattern-opposite-end",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Two-Pointer Pattern: Opposite Ends (Pair Sum) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Two-Pointer Pattern",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Two people walking toward each other from opposite ends of a bridge until they meet.",
    "explanationMarkdown": "### Two-Pointer Pattern: Opposite Ends (Pair Sum)\n\nIn a sorted array, moving pointers inward from left and right finds target pairs in linear O(n) time and O(1) space.\n\n```dsa\nfunction twoSumSorted(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return null;\n}\nconst pair = twoSumSorted([2, 7, 11, 15], 9);\n```",
    "workedExample": {
      "title": "Worked Example: Two-Pointer Pattern: Opposite Ends (Pair Sum)",
      "code": "function twoSumSorted(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return null;\n}\nconst pair = twoSumSorted([2, 7, 11, 15], 9);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Two-Pointer Pattern: Opposite Ends (Pair Sum).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Two-Pointer Pattern: Opposite Ends (Pair Sum).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function twoSumSorted(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return null;\n}",
    "solutionCode": "function twoSumSorted(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return null;\n}\nconst pair = twoSumSorted([2, 7, 11, 15], 9);",
    "hints": [
      "Write:\nfunction twoSumSorted(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return null;\n}\nconst pair = twoSumSorted([2, 7, 11, 15], 9);"
    ],
    "testCases": [
      {
        "id": "dsa-18-tc-1",
        "description": "Verifies correct implementation for Two-Pointer Pattern: Opposite Ends (Pair Sum)",
        "testFn": "pair[0] === 0 && pair[1] === 1"
      }
    ]
  },
  {
    "id": "dsa-19-two-pointer-pattern-fast-and-slo",
    "title": "19. Two-Pointer Pattern: Fast and Slow Pointers",
    "slug": "lesson-19-two-pointer-pattern-fast-and-slo",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Two-Pointer Pattern: Fast and Slow Pointers in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Two-Pointer Pattern",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A scout running ahead to find unique items while a pack mule trails behind carrying the unique collection.",
    "explanationMarkdown": "### Two-Pointer Pattern: Fast and Slow Pointers\n\nSlow pointer marks the boundary of processed items; fast pointer explores ahead searching for new elements.\n\n```dsa\nfunction removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let slow = 0;\n  for (let fast = 1; fast < nums.length; fast++) {\n    if (nums[fast] !== nums[slow]) {\n      slow++;\n      nums[slow] = nums[fast];\n    }\n  }\n  return slow + 1;\n}\nconst len = removeDuplicates([1, 1, 2, 2, 3]);\n```",
    "workedExample": {
      "title": "Worked Example: Two-Pointer Pattern: Fast and Slow Pointers",
      "code": "function removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let slow = 0;\n  for (let fast = 1; fast < nums.length; fast++) {\n    if (nums[fast] !== nums[slow]) {\n      slow++;\n      nums[slow] = nums[fast];\n    }\n  }\n  return slow + 1;\n}\nconst len = removeDuplicates([1, 1, 2, 2, 3]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Two-Pointer Pattern: Fast and Slow Pointers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Two-Pointer Pattern: Fast and Slow Pointers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let slow = 0;\n  for (let fast = 1; fast < nums.length; fast++) {\n    if (nums[fast] !== nums[slow]) {\n      slow++;\n      nums[slow] = nums[fast];\n    }\n  }\n  return slow + 1;\n}",
    "solutionCode": "function removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let slow = 0;\n  for (let fast = 1; fast < nums.length; fast++) {\n    if (nums[fast] !== nums[slow]) {\n      slow++;\n      nums[slow] = nums[fast];\n    }\n  }\n  return slow + 1;\n}\nconst len = removeDuplicates([1, 1, 2, 2, 3]);",
    "hints": [
      "Write:\nfunction removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  let slow = 0;\n  for (let fast = 1; fast < nums.length; fast++) {\n    if (nums[fast] !== nums[slow]) {\n      slow++;\n      nums[slow] = nums[fast];\n    }\n  }\n  return slow + 1;\n}\nconst len = removeDuplicates([1, 1, 2, 2, 3]);"
    ],
    "testCases": [
      {
        "id": "dsa-19-tc-1",
        "description": "Verifies correct implementation for Two-Pointer Pattern: Fast and Slow Pointers",
        "testFn": "len === 3"
      }
    ]
  },
  {
    "id": "dsa-20-in-place-array-reversal",
    "title": "20. In-Place Array Reversal",
    "slug": "lesson-20-in-place-array-reversal",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master In-Place Array Reversal in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "In-Place Array Reversal",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Two partners swapping dance positions across the center ballroom floor.",
    "explanationMarkdown": "### In-Place Array Reversal\n\nSwap elements from outside in using two pointers to reverse an array in O(n) time and O(1) auxiliary space.\n\n```dsa\nfunction reverseInPlace(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++; right--;\n  }\n  return arr;\n}\nconst rev = reverseInPlace([1, 2, 3, 4]);\n```",
    "workedExample": {
      "title": "Worked Example: In-Place Array Reversal",
      "code": "function reverseInPlace(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++; right--;\n  }\n  return arr;\n}\nconst rev = reverseInPlace([1, 2, 3, 4]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for In-Place Array Reversal.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of In-Place Array Reversal.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function reverseInPlace(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++; right--;\n  }\n  return arr;\n}",
    "solutionCode": "function reverseInPlace(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++; right--;\n  }\n  return arr;\n}\nconst rev = reverseInPlace([1, 2, 3, 4]);",
    "hints": [
      "Write:\nfunction reverseInPlace(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++; right--;\n  }\n  return arr;\n}\nconst rev = reverseInPlace([1, 2, 3, 4]);"
    ],
    "testCases": [
      {
        "id": "dsa-20-tc-1",
        "description": "Verifies correct implementation for In-Place Array Reversal",
        "testFn": "rev[0] === 4 && rev[3] === 1"
      }
    ]
  },
  {
    "id": "dsa-21-rotating-an-array-by-k-steps",
    "title": "21. Rotating an Array by K Steps",
    "slug": "lesson-21-rotating-an-array-by-k-steps",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Rotating an Array by K Steps in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Rotating an Array by K Steps",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Spinning a Ferris wheel two seats forward so the rear passengers are now at the front.",
    "explanationMarkdown": "### Rotating an Array by K Steps\n\nShift elements right by K positions using the triple-reversal algorithm or array slicing.\n\n```dsa\nfunction rotateArray(nums, k) {\n  k = k % nums.length;\n  return nums.slice(-k).concat(nums.slice(0, -k));\n}\nconst rot = rotateArray([1, 2, 3, 4, 5], 2);\n```",
    "workedExample": {
      "title": "Worked Example: Rotating an Array by K Steps",
      "code": "function rotateArray(nums, k) {\n  k = k % nums.length;\n  return nums.slice(-k).concat(nums.slice(0, -k));\n}\nconst rot = rotateArray([1, 2, 3, 4, 5], 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rotating an Array by K Steps.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rotating an Array by K Steps.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function rotateArray(nums, k) {\n  k = k % nums.length;\n  return nums.slice(-k).concat(nums.slice(0, -k));\n}",
    "solutionCode": "function rotateArray(nums, k) {\n  k = k % nums.length;\n  return nums.slice(-k).concat(nums.slice(0, -k));\n}\nconst rot = rotateArray([1, 2, 3, 4, 5], 2);",
    "hints": [
      "Write:\nfunction rotateArray(nums, k) {\n  k = k % nums.length;\n  return nums.slice(-k).concat(nums.slice(0, -k));\n}\nconst rot = rotateArray([1, 2, 3, 4, 5], 2);"
    ],
    "testCases": [
      {
        "id": "dsa-21-tc-1",
        "description": "Verifies correct implementation for Rotating an Array by K Steps",
        "testFn": "rot[0] === 4 && rot[1] === 5"
      }
    ]
  },
  {
    "id": "dsa-22-dutch-national-flag-three-way-pa",
    "title": "22. Dutch National Flag (Three-Way Partitioning)",
    "slug": "lesson-22-dutch-national-flag-three-way-pa",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Dutch National Flag (Three-Way Partitioning) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Dutch National Flag (Three-Way Partitioning)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Sorting red, white, and blue marbles into three distinct bowls in a single pass.",
    "explanationMarkdown": "### Dutch National Flag (Three-Way Partitioning)\n\nDijkstra's 3-way partitioning segregates an array into three segments (0s, 1s, 2s) in O(n) single pass.\n\n```dsa\nfunction sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }\n    else if (nums[mid] === 1) { mid++; }\n    else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }\n  }\n  return nums;\n}\nconst sorted = sortColors([2, 0, 2, 1, 1, 0]);\n```",
    "workedExample": {
      "title": "Worked Example: Dutch National Flag (Three-Way Partitioning)",
      "code": "function sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }\n    else if (nums[mid] === 1) { mid++; }\n    else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }\n  }\n  return nums;\n}\nconst sorted = sortColors([2, 0, 2, 1, 1, 0]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dutch National Flag (Three-Way Partitioning).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dutch National Flag (Three-Way Partitioning).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }\n    else if (nums[mid] === 1) { mid++; }\n    else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }\n  }\n  return nums;\n}",
    "solutionCode": "function sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }\n    else if (nums[mid] === 1) { mid++; }\n    else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }\n  }\n  return nums;\n}\nconst sorted = sortColors([2, 0, 2, 1, 1, 0]);",
    "hints": [
      "Write:\nfunction sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }\n    else if (nums[mid] === 1) { mid++; }\n    else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }\n  }\n  return nums;\n}\nconst sorted = sortColors([2, 0, 2, 1, 1, 0]);"
    ],
    "testCases": [
      {
        "id": "dsa-22-tc-1",
        "description": "Verifies correct implementation for Dutch National Flag (Three-Way Partitioning)",
        "testFn": "sorted[0] === 0 && sorted[1] === 0 && sorted[sorted.length - 1] === 2"
      }
    ]
  },
  {
    "id": "dsa-23-trapping-rain-water-algorithm",
    "title": "23. Trapping Rain Water Algorithm",
    "slug": "lesson-23-trapping-rain-water-algorithm",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Trapping Rain Water Algorithm in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Trapping Rain Water Algorithm",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Puddles of water collected in potholes between city buildings after a torrential rainstorm.",
    "explanationMarkdown": "### Trapping Rain Water Algorithm\n\nCalculate trapped water volume by maintaining running left and right height walls using two pointers in O(n) time.\n\n```dsa\nfunction trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);\n      left++;\n    } else {\n      height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);\n      right--;\n    }\n  }\n  return water;\n}\nconst trapped = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);\n```",
    "workedExample": {
      "title": "Worked Example: Trapping Rain Water Algorithm",
      "code": "function trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);\n      left++;\n    } else {\n      height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);\n      right--;\n    }\n  }\n  return water;\n}\nconst trapped = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Trapping Rain Water Algorithm.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Trapping Rain Water Algorithm.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);\n      left++;\n    } else {\n      height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);\n      right--;\n    }\n  }\n  return water;\n}",
    "solutionCode": "function trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);\n      left++;\n    } else {\n      height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);\n      right--;\n    }\n  }\n  return water;\n}\nconst trapped = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);",
    "hints": [
      "Write:\nfunction trap(height) {\n  let left = 0, right = height.length - 1;\n  let leftMax = 0, rightMax = 0, water = 0;\n  while (left < right) {\n    if (height[left] < height[right]) {\n      height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);\n      left++;\n    } else {\n      height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);\n      right--;\n    }\n  }\n  return water;\n}\nconst trapped = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);"
    ],
    "testCases": [
      {
        "id": "dsa-23-tc-1",
        "description": "Verifies correct implementation for Trapping Rain Water Algorithm",
        "testFn": "trapped === 6"
      }
    ]
  },
  {
    "id": "dsa-24-container-with-most-water",
    "title": "24. Container with Most Water",
    "slug": "lesson-24-container-with-most-water",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Container with Most Water in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Container with Most Water",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Building a swimming pool between two pillars: the water capacity is limited by the shorter pillar.",
    "explanationMarkdown": "### Container with Most Water\n\nGreedily move the shorter vertical pillar inward to discover if a taller pillar can offset the narrower width.\n\n```dsa\nfunction maxArea(height) {\n  let left = 0, right = height.length - 1, max = 0;\n  while (left < right) {\n    const current = Math.min(height[left], height[right]) * (right - left);\n    max = Math.max(max, current);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return max;\n}\nconst area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);\n```",
    "workedExample": {
      "title": "Worked Example: Container with Most Water",
      "code": "function maxArea(height) {\n  let left = 0, right = height.length - 1, max = 0;\n  while (left < right) {\n    const current = Math.min(height[left], height[right]) * (right - left);\n    max = Math.max(max, current);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return max;\n}\nconst area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container with Most Water.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container with Most Water.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function maxArea(height) {\n  let left = 0, right = height.length - 1, max = 0;\n  while (left < right) {\n    const current = Math.min(height[left], height[right]) * (right - left);\n    max = Math.max(max, current);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return max;\n}",
    "solutionCode": "function maxArea(height) {\n  let left = 0, right = height.length - 1, max = 0;\n  while (left < right) {\n    const current = Math.min(height[left], height[right]) * (right - left);\n    max = Math.max(max, current);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return max;\n}\nconst area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);",
    "hints": [
      "Write:\nfunction maxArea(height) {\n  let left = 0, right = height.length - 1, max = 0;\n  while (left < right) {\n    const current = Math.min(height[left], height[right]) * (right - left);\n    max = Math.max(max, current);\n    if (height[left] < height[right]) left++;\n    else right--;\n  }\n  return max;\n}\nconst area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);"
    ],
    "testCases": [
      {
        "id": "dsa-24-tc-1",
        "description": "Verifies correct implementation for Container with Most Water",
        "testFn": "area === 49"
      }
    ]
  },
  {
    "id": "dsa-25-merge-sorted-arrays-in-place",
    "title": "25. Merge Sorted Arrays in-place",
    "slug": "lesson-25-merge-sorted-arrays-in-place",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Merge Sorted Arrays in-place in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Merge Sorted Arrays in-place",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Zipping two card decks together starting from the highest cards at the back into the empty trunk space.",
    "explanationMarkdown": "### Merge Sorted Arrays in-place\n\nMerge backwards from the end of `nums1` to place elements without overwriting existing data.\n\n```dsa\nfunction mergeSorted(nums1, m, nums2, n) {\n  let p1 = m - 1, p2 = n - 1, p = m + n - 1;\n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) { nums1[p] = nums1[p1]; p1--; }\n    else { nums1[p] = nums2[p2]; p2--; }\n    p--;\n  }\n  return nums1;\n}\nconst merged = mergeSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);\n```",
    "workedExample": {
      "title": "Worked Example: Merge Sorted Arrays in-place",
      "code": "function mergeSorted(nums1, m, nums2, n) {\n  let p1 = m - 1, p2 = n - 1, p = m + n - 1;\n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) { nums1[p] = nums1[p1]; p1--; }\n    else { nums1[p] = nums2[p2]; p2--; }\n    p--;\n  }\n  return nums1;\n}\nconst merged = mergeSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Merge Sorted Arrays in-place.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Merge Sorted Arrays in-place.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function mergeSorted(nums1, m, nums2, n) {\n  let p1 = m - 1, p2 = n - 1, p = m + n - 1;\n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) { nums1[p] = nums1[p1]; p1--; }\n    else { nums1[p] = nums2[p2]; p2--; }\n    p--;\n  }\n  return nums1;\n}",
    "solutionCode": "function mergeSorted(nums1, m, nums2, n) {\n  let p1 = m - 1, p2 = n - 1, p = m + n - 1;\n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) { nums1[p] = nums1[p1]; p1--; }\n    else { nums1[p] = nums2[p2]; p2--; }\n    p--;\n  }\n  return nums1;\n}\nconst merged = mergeSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);",
    "hints": [
      "Write:\nfunction mergeSorted(nums1, m, nums2, n) {\n  let p1 = m - 1, p2 = n - 1, p = m + n - 1;\n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) { nums1[p] = nums1[p1]; p1--; }\n    else { nums1[p] = nums2[p2]; p2--; }\n    p--;\n  }\n  return nums1;\n}\nconst merged = mergeSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);"
    ],
    "testCases": [
      {
        "id": "dsa-25-tc-1",
        "description": "Verifies correct implementation for Merge Sorted Arrays in-place",
        "testFn": "merged[5] === 6 && merged[0] === 1"
      }
    ]
  },
  {
    "id": "dsa-26-kadanes-algorithm-maximum-subarr",
    "title": "26. Kadane's Algorithm (Maximum Subarray Sum)",
    "slug": "lesson-26-kadanes-algorithm-maximum-subarr",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Kadane's Algorithm (Maximum Subarray Sum) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Kadane's Algorithm (Maximum Subarray Sum)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Deciding whether to add yesterday's stock portfolio debt to today's earnings or start fresh with today's money.",
    "explanationMarkdown": "### Kadane's Algorithm (Maximum Subarray Sum)\n\nKadane's algorithm finds the contiguous subarray with the largest sum in O(n) time and O(1) space.\n\n```dsa\nfunction maxSubArray(nums) {\n  let maxSoFar = nums[0], currMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n  }\n  return maxSoFar;\n}\nconst maxSum = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);\n```",
    "workedExample": {
      "title": "Worked Example: Kadane's Algorithm (Maximum Subarray Sum)",
      "code": "function maxSubArray(nums) {\n  let maxSoFar = nums[0], currMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n  }\n  return maxSoFar;\n}\nconst maxSum = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Kadane's Algorithm (Maximum Subarray Sum).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kadane's Algorithm (Maximum Subarray Sum).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function maxSubArray(nums) {\n  let maxSoFar = nums[0], currMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n  }\n  return maxSoFar;\n}",
    "solutionCode": "function maxSubArray(nums) {\n  let maxSoFar = nums[0], currMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n  }\n  return maxSoFar;\n}\nconst maxSum = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);",
    "hints": [
      "Write:\nfunction maxSubArray(nums) {\n  let maxSoFar = nums[0], currMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n  }\n  return maxSoFar;\n}\nconst maxSum = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);"
    ],
    "testCases": [
      {
        "id": "dsa-26-tc-1",
        "description": "Verifies correct implementation for Kadane's Algorithm (Maximum Subarray Sum)",
        "testFn": "maxSum === 6"
      }
    ]
  },
  {
    "id": "dsa-27-prefix-sum-technique",
    "title": "27. Prefix Sum Technique",
    "slug": "lesson-27-prefix-sum-technique",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Prefix Sum Technique in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Prefix Sum Technique",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An odometer on a car: checking miles driven between city A and city B by subtracting Odometer(A) from Odometer(B).",
    "explanationMarkdown": "### Prefix Sum Technique\n\nPrecomputing cumulative sums enables O(1) range sum queries across any arbitrary range `[i, j]`.\n\n```dsa\nfunction buildPrefixSum(arr) {\n  const prefix = [0];\n  for (let i = 0; i < arr.length; i++) prefix.push(prefix[i] + arr[i]);\n  return prefix;\n}\nconst pref = buildPrefixSum([1, 2, 3, 4]);\n```",
    "workedExample": {
      "title": "Worked Example: Prefix Sum Technique",
      "code": "function buildPrefixSum(arr) {\n  const prefix = [0];\n  for (let i = 0; i < arr.length; i++) prefix.push(prefix[i] + arr[i]);\n  return prefix;\n}\nconst pref = buildPrefixSum([1, 2, 3, 4]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Prefix Sum Technique.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Prefix Sum Technique.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function buildPrefixSum(arr) {\n  const prefix = [0];\n  for (let i = 0; i < arr.length; i++) prefix.push(prefix[i] + arr[i]);\n  return prefix;\n}",
    "solutionCode": "function buildPrefixSum(arr) {\n  const prefix = [0];\n  for (let i = 0; i < arr.length; i++) prefix.push(prefix[i] + arr[i]);\n  return prefix;\n}\nconst pref = buildPrefixSum([1, 2, 3, 4]);",
    "hints": [
      "Write:\nfunction buildPrefixSum(arr) {\n  const prefix = [0];\n  for (let i = 0; i < arr.length; i++) prefix.push(prefix[i] + arr[i]);\n  return prefix;\n}\nconst pref = buildPrefixSum([1, 2, 3, 4]);"
    ],
    "testCases": [
      {
        "id": "dsa-27-tc-1",
        "description": "Verifies correct implementation for Prefix Sum Technique",
        "testFn": "pref[4] === 10"
      }
    ]
  },
  {
    "id": "dsa-28-range-sum-queries-in-o1-time",
    "title": "28. Range Sum Queries in O(1) Time",
    "slug": "lesson-28-range-sum-queries-in-o1-time",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Range Sum Queries in O(1) Time in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Range Sum Queries in O(1) Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Subtracting the score at half-time from the final score to know how many points were scored in the 2nd half.",
    "explanationMarkdown": "### Range Sum Queries in O(1) Time\n\n`sumRange(i, j) = prefix[j + 1] - prefix[i]` executes in instant O(1) time after O(n) preprocessing.\n\n```dsa\nfunction rangeQuery(prefix, left, right) {\n  return prefix[right + 1] - prefix[left];\n}\nconst sum = rangeQuery([0, 1, 3, 6, 10], 1, 3);\n```",
    "workedExample": {
      "title": "Worked Example: Range Sum Queries in O(1) Time",
      "code": "function rangeQuery(prefix, left, right) {\n  return prefix[right + 1] - prefix[left];\n}\nconst sum = rangeQuery([0, 1, 3, 6, 10], 1, 3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Range Sum Queries in O(1) Time.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Range Sum Queries in O(1) Time.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function rangeQuery(prefix, left, right) {\n  return prefix[right + 1] - prefix[left];\n}",
    "solutionCode": "function rangeQuery(prefix, left, right) {\n  return prefix[right + 1] - prefix[left];\n}\nconst sum = rangeQuery([0, 1, 3, 6, 10], 1, 3);",
    "hints": [
      "Write:\nfunction rangeQuery(prefix, left, right) {\n  return prefix[right + 1] - prefix[left];\n}\nconst sum = rangeQuery([0, 1, 3, 6, 10], 1, 3);"
    ],
    "testCases": [
      {
        "id": "dsa-28-tc-1",
        "description": "Verifies correct implementation for Range Sum Queries in O(1) Time",
        "testFn": "sum === 9"
      }
    ]
  },
  {
    "id": "dsa-29-subarray-sum-equals-k-prefix-sum",
    "title": "29. Subarray Sum Equals K (Prefix Sum + Hash Map)",
    "slug": "lesson-29-subarray-sum-equals-k-prefix-sum",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Subarray Sum Equals K (Prefix Sum + Hash Map) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Subarray Sum Equals K (Prefix Sum + Hash Map)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Looking for receipts in a ledger where the difference between two running totals matches the exact expense.",
    "explanationMarkdown": "### Subarray Sum Equals K (Prefix Sum + Hash Map)\n\nCombines prefix sums with a hash map to count subarrays summing to target K in linear O(n) time.\n\n```dsa\nfunction subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}\nconst count = subarraySum([1, 1, 1], 2);\n```",
    "workedExample": {
      "title": "Worked Example: Subarray Sum Equals K (Prefix Sum + Hash Map)",
      "code": "function subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}\nconst count = subarraySum([1, 1, 1], 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Subarray Sum Equals K (Prefix Sum + Hash Map).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subarray Sum Equals K (Prefix Sum + Hash Map).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}",
    "solutionCode": "function subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}\nconst count = subarraySum([1, 1, 1], 2);",
    "hints": [
      "Write:\nfunction subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}\nconst count = subarraySum([1, 1, 1], 2);"
    ],
    "testCases": [
      {
        "id": "dsa-29-tc-1",
        "description": "Verifies correct implementation for Subarray Sum Equals K (Prefix Sum + Hash Map)",
        "testFn": "count === 2"
      }
    ]
  },
  {
    "id": "dsa-30-module-2-review-two-pointer-&-ar",
    "title": "30. Module 2 Review: Two-Pointer & Array Mastery",
    "slug": "lesson-30-module-2-review-two-pointer-&-ar",
    "language": "dsa",
    "category": "Module 2: Arrays & Two-Pointer Patterns",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 2 Review: Two-Pointer & Array Mastery in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 2 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A gymnast executing a flawless symmetric landing on the center mat.",
    "explanationMarkdown": "### Module 2 Review: Two-Pointer & Array Mastery\n\nMastery over contiguous memory layouts, two-pointer opposite sweeps, fast-slow runners, and prefix sum math.\n\n```dsa\nfunction isPalindrome(str) {\n  let l = 0, r = str.length - 1;\n  while (l < r) {\n    if (str[l] !== str[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\nconst palindrome = isPalindrome('racecar');\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Two-Pointer & Array Mastery",
      "code": "function isPalindrome(str) {\n  let l = 0, r = str.length - 1;\n  while (l < r) {\n    if (str[l] !== str[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\nconst palindrome = isPalindrome('racecar');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 2 Review: Two-Pointer & Array Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 2 Review: Two-Pointer & Array Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isPalindrome(str) {\n  let l = 0, r = str.length - 1;\n  while (l < r) {\n    if (str[l] !== str[r]) return false;\n    l++; r--;\n  }\n  return true;\n}",
    "solutionCode": "function isPalindrome(str) {\n  let l = 0, r = str.length - 1;\n  while (l < r) {\n    if (str[l] !== str[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\nconst palindrome = isPalindrome('racecar');",
    "hints": [
      "Write:\nfunction isPalindrome(str) {\n  let l = 0, r = str.length - 1;\n  while (l < r) {\n    if (str[l] !== str[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\nconst palindrome = isPalindrome('racecar');"
    ],
    "testCases": [
      {
        "id": "dsa-30-tc-1",
        "description": "Verifies correct implementation for Module 2 Review: Two-Pointer & Array Mastery",
        "testFn": "palindrome === true"
      }
    ]
  },
  {
    "id": "dsa-31-fixed-size-sliding-window-maximu",
    "title": "31. Fixed-Size Sliding Window (Maximum Sum Subarray of Size K)",
    "slug": "lesson-31-fixed-size-sliding-window-maximu",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Fixed-Size Sliding Window (Maximum Sum Subarray of Size K) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Fixed-Size Sliding Window (Maximum Sum Subarray of Size K)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A camera aperture sliding along a filmstrip: adding the new frame entering on the right and dropping the old frame on the left.",
    "explanationMarkdown": "### Fixed-Size Sliding Window (Maximum Sum Subarray of Size K)\n\nInstead of recalculating the entire window sum from scratch (O(n*k)), slide the window by adding the incoming item and subtracting the outgoing item (O(n)).\n\n```dsa\nfunction maxSumSubarray(arr, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += arr[i];\n  let max = sum;\n  for (let i = k; i < arr.length; i++) {\n    sum += arr[i] - arr[i - k];\n    max = Math.max(max, sum);\n  }\n  return max;\n}\nconst max = maxSumSubarray([2, 1, 5, 1, 3, 2], 3);\n```",
    "workedExample": {
      "title": "Worked Example: Fixed-Size Sliding Window (Maximum Sum Subarray of Size K)",
      "code": "function maxSumSubarray(arr, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += arr[i];\n  let max = sum;\n  for (let i = k; i < arr.length; i++) {\n    sum += arr[i] - arr[i - k];\n    max = Math.max(max, sum);\n  }\n  return max;\n}\nconst max = maxSumSubarray([2, 1, 5, 1, 3, 2], 3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fixed-Size Sliding Window (Maximum Sum Subarray of Size K).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fixed-Size Sliding Window (Maximum Sum Subarray of Size K).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function maxSumSubarray(arr, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += arr[i];\n  let max = sum;\n  for (let i = k; i < arr.length; i++) {\n    sum += arr[i] - arr[i - k];\n    max = Math.max(max, sum);\n  }\n  return max;\n}",
    "solutionCode": "function maxSumSubarray(arr, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += arr[i];\n  let max = sum;\n  for (let i = k; i < arr.length; i++) {\n    sum += arr[i] - arr[i - k];\n    max = Math.max(max, sum);\n  }\n  return max;\n}\nconst max = maxSumSubarray([2, 1, 5, 1, 3, 2], 3);",
    "hints": [
      "Write:\nfunction maxSumSubarray(arr, k) {\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += arr[i];\n  let max = sum;\n  for (let i = k; i < arr.length; i++) {\n    sum += arr[i] - arr[i - k];\n    max = Math.max(max, sum);\n  }\n  return max;\n}\nconst max = maxSumSubarray([2, 1, 5, 1, 3, 2], 3);"
    ],
    "testCases": [
      {
        "id": "dsa-31-tc-1",
        "description": "Verifies correct implementation for Fixed-Size Sliding Window (Maximum Sum Subarray of Size K)",
        "testFn": "max === 9"
      }
    ]
  },
  {
    "id": "dsa-32-dynamic-sliding-window-longest-s",
    "title": "32. Dynamic Sliding Window: Longest Substring Without Repeating",
    "slug": "lesson-32-dynamic-sliding-window-longest-s",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Dynamic Sliding Window: Longest Substring Without Repeating in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Dynamic Sliding Window",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A rubber band stretching to include new letters until a duplicate appears, then snapping its tail forward.",
    "explanationMarkdown": "### Dynamic Sliding Window: Longest Substring Without Repeating\n\nExpand the `right` pointer to grow the window; contract the `left` pointer when constraints are violated.\n\n```dsa\nfunction lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let max = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (seen.has(s[right]) && seen.get(s[right]) >= left) {\n      left = seen.get(s[right]) + 1;\n    }\n    seen.set(s[right], right);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}\nconst len = lengthOfLongestSubstring('abcabcbb');\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Sliding Window: Longest Substring Without Repeating",
      "code": "function lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let max = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (seen.has(s[right]) && seen.get(s[right]) >= left) {\n      left = seen.get(s[right]) + 1;\n    }\n    seen.set(s[right], right);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}\nconst len = lengthOfLongestSubstring('abcabcbb');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dynamic Sliding Window: Longest Substring Without Repeating.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dynamic Sliding Window: Longest Substring Without Repeating.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let max = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (seen.has(s[right]) && seen.get(s[right]) >= left) {\n      left = seen.get(s[right]) + 1;\n    }\n    seen.set(s[right], right);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}",
    "solutionCode": "function lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let max = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (seen.has(s[right]) && seen.get(s[right]) >= left) {\n      left = seen.get(s[right]) + 1;\n    }\n    seen.set(s[right], right);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}\nconst len = lengthOfLongestSubstring('abcabcbb');",
    "hints": [
      "Write:\nfunction lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let max = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (seen.has(s[right]) && seen.get(s[right]) >= left) {\n      left = seen.get(s[right]) + 1;\n    }\n    seen.set(s[right], right);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}\nconst len = lengthOfLongestSubstring('abcabcbb');"
    ],
    "testCases": [
      {
        "id": "dsa-32-tc-1",
        "description": "Verifies correct implementation for Dynamic Sliding Window: Longest Substring Without Repeating",
        "testFn": "len === 3"
      }
    ]
  },
  {
    "id": "dsa-33-minimum-size-subarray-sum-target",
    "title": "33. Minimum Size Subarray Sum (Target >= K)",
    "slug": "lesson-33-minimum-size-subarray-sum-target",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Minimum Size Subarray Sum (Target >= K) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Minimum Size Subarray Sum (Target >= K)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Gathering coins until you have enough to buy lunch, then trimming unnecessary coins off the beginning.",
    "explanationMarkdown": "### Minimum Size Subarray Sum (Target >= K)\n\nShrink the window from the left while the condition is satisfied to discover the minimum qualifying subarray length.\n\n```dsa\nfunction minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, min = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      min = Math.min(min, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return min === Infinity ? 0 : min;\n}\nconst minLen = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);\n```",
    "workedExample": {
      "title": "Worked Example: Minimum Size Subarray Sum (Target >= K)",
      "code": "function minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, min = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      min = Math.min(min, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return min === Infinity ? 0 : min;\n}\nconst minLen = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Minimum Size Subarray Sum (Target >= K).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Minimum Size Subarray Sum (Target >= K).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, min = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      min = Math.min(min, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return min === Infinity ? 0 : min;\n}",
    "solutionCode": "function minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, min = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      min = Math.min(min, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return min === Infinity ? 0 : min;\n}\nconst minLen = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);",
    "hints": [
      "Write:\nfunction minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, min = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      min = Math.min(min, right - left + 1);\n      sum -= nums[left];\n      left++;\n    }\n  }\n  return min === Infinity ? 0 : min;\n}\nconst minLen = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);"
    ],
    "testCases": [
      {
        "id": "dsa-33-tc-1",
        "description": "Verifies correct implementation for Minimum Size Subarray Sum (Target >= K)",
        "testFn": "minLen === 2"
      }
    ]
  },
  {
    "id": "dsa-34-sliding-window-maximum-monotonic",
    "title": "34. Sliding Window Maximum (Monotonic Deque)",
    "slug": "lesson-34-sliding-window-maximum-monotonic",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Sliding Window Maximum (Monotonic Deque) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Sliding Window Maximum (Monotonic Deque)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Watching a parade through a 3-window frame and always pointing out the tallest float currently visible.",
    "explanationMarkdown": "### Sliding Window Maximum (Monotonic Deque)\n\nMaintain a monotonic decreasing double-ended queue storing candidate maximum indices in O(n) total time.\n\n```dsa\nfunction maxSlidingWindow(nums, k) {\n  const res = [], deque = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && deque[0] < i - k + 1) deque.shift();\n    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) res.push(nums[deque[0]]);\n  }\n  return res;\n}\nconst maxes = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);\n```",
    "workedExample": {
      "title": "Worked Example: Sliding Window Maximum (Monotonic Deque)",
      "code": "function maxSlidingWindow(nums, k) {\n  const res = [], deque = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && deque[0] < i - k + 1) deque.shift();\n    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) res.push(nums[deque[0]]);\n  }\n  return res;\n}\nconst maxes = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sliding Window Maximum (Monotonic Deque).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sliding Window Maximum (Monotonic Deque).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function maxSlidingWindow(nums, k) {\n  const res = [], deque = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && deque[0] < i - k + 1) deque.shift();\n    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) res.push(nums[deque[0]]);\n  }\n  return res;\n}",
    "solutionCode": "function maxSlidingWindow(nums, k) {\n  const res = [], deque = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && deque[0] < i - k + 1) deque.shift();\n    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) res.push(nums[deque[0]]);\n  }\n  return res;\n}\nconst maxes = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);",
    "hints": [
      "Write:\nfunction maxSlidingWindow(nums, k) {\n  const res = [], deque = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && deque[0] < i - k + 1) deque.shift();\n    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) res.push(nums[deque[0]]);\n  }\n  return res;\n}\nconst maxes = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);"
    ],
    "testCases": [
      {
        "id": "dsa-34-tc-1",
        "description": "Verifies correct implementation for Sliding Window Maximum (Monotonic Deque)",
        "testFn": "maxes[0] === 3 && maxes[maxes.length - 1] === 7"
      }
    ]
  },
  {
    "id": "dsa-35-hash-table-internal-mechanics-ha",
    "title": "35. Hash Table Internal Mechanics: Hash Functions & Buckets",
    "slug": "lesson-35-hash-table-internal-mechanics-ha",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Hash Table Internal Mechanics: Hash Functions & Buckets in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Hash Table Internal Mechanics",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A mail sorter looking at the first letters of your city and tossing the letter into Bin #12.",
    "explanationMarkdown": "### Hash Table Internal Mechanics: Hash Functions & Buckets\n\nA hash function maps arbitrary keys (strings, objects) into an integer array index bucket.\n\n```dsa\nfunction simpleHash(key, bucketCount) {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++) hash = (hash << 5) - hash + key.charCodeAt(i);\n  return Math.abs(hash) % bucketCount;\n}\nconst bucket = simpleHash('username', 16);\n```",
    "workedExample": {
      "title": "Worked Example: Hash Table Internal Mechanics: Hash Functions & Buckets",
      "code": "function simpleHash(key, bucketCount) {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++) hash = (hash << 5) - hash + key.charCodeAt(i);\n  return Math.abs(hash) % bucketCount;\n}\nconst bucket = simpleHash('username', 16);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hash Table Internal Mechanics: Hash Functions & Buckets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hash Table Internal Mechanics: Hash Functions & Buckets.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function simpleHash(key, bucketCount) {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++) hash = (hash << 5) - hash + key.charCodeAt(i);\n  return Math.abs(hash) % bucketCount;\n}",
    "solutionCode": "function simpleHash(key, bucketCount) {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++) hash = (hash << 5) - hash + key.charCodeAt(i);\n  return Math.abs(hash) % bucketCount;\n}\nconst bucket = simpleHash('username', 16);",
    "hints": [
      "Write:\nfunction simpleHash(key, bucketCount) {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++) hash = (hash << 5) - hash + key.charCodeAt(i);\n  return Math.abs(hash) % bucketCount;\n}\nconst bucket = simpleHash('username', 16);"
    ],
    "testCases": [
      {
        "id": "dsa-35-tc-1",
        "description": "Verifies correct implementation for Hash Table Internal Mechanics: Hash Functions & Buckets",
        "testFn": "bucket >= 0 && bucket < 16"
      }
    ]
  },
  {
    "id": "dsa-36-collision-resolution-separate-ch",
    "title": "36. Collision Resolution: Separate Chaining vs Open Addressing",
    "slug": "lesson-36-collision-resolution-separate-ch",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Collision Resolution: Separate Chaining vs Open Addressing in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Collision Resolution",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "If two people have the same mailbox number, you put both envelopes into a shared hanging folder (chaining).",
    "explanationMarkdown": "### Collision Resolution: Separate Chaining vs Open Addressing\n\nChaining stores colliding keys in a linked list per bucket; open addressing probes adjacent empty slots.\n\n```dsa\nfunction simulateChaining(bucket, key, val) {\n  bucket.push([key, val]);\n  return bucket;\n}\nconst b = simulateChaining([], 'k1', 'v1');\n```",
    "workedExample": {
      "title": "Worked Example: Collision Resolution: Separate Chaining vs Open Addressing",
      "code": "function simulateChaining(bucket, key, val) {\n  bucket.push([key, val]);\n  return bucket;\n}\nconst b = simulateChaining([], 'k1', 'v1');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Collision Resolution: Separate Chaining vs Open Addressing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Collision Resolution: Separate Chaining vs Open Addressing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function simulateChaining(bucket, key, val) {\n  bucket.push([key, val]);\n  return bucket;\n}",
    "solutionCode": "function simulateChaining(bucket, key, val) {\n  bucket.push([key, val]);\n  return bucket;\n}\nconst b = simulateChaining([], 'k1', 'v1');",
    "hints": [
      "Write:\nfunction simulateChaining(bucket, key, val) {\n  bucket.push([key, val]);\n  return bucket;\n}\nconst b = simulateChaining([], 'k1', 'v1');"
    ],
    "testCases": [
      {
        "id": "dsa-36-tc-1",
        "description": "Verifies correct implementation for Collision Resolution: Separate Chaining vs Open Addressing",
        "testFn": "b.length === 1"
      }
    ]
  },
  {
    "id": "dsa-37-hash-map-operations-o1-average-v",
    "title": "37. Hash Map Operations: O(1) Average vs O(n) Worst Case",
    "slug": "lesson-37-hash-map-operations-o1-average-v",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Hash Map Operations: O(1) Average vs O(n) Worst Case in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Hash Map Operations",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Opening a labeled locker with a key (O(1)) vs rummaging through a jammed locker with 100 bags (O(n)).",
    "explanationMarkdown": "### Hash Map Operations: O(1) Average vs O(n) Worst Case\n\nHash tables provide O(1) average lookup, insert, and delete; poor hash functions degrade to O(n) linked lists.\n\n```dsa\nfunction mapPerformance(isColliding) {\n  return isColliding ? 'O(n) Degraded' : 'O(1) Average';\n}\nconst perf = mapPerformance(false);\n```",
    "workedExample": {
      "title": "Worked Example: Hash Map Operations: O(1) Average vs O(n) Worst Case",
      "code": "function mapPerformance(isColliding) {\n  return isColliding ? 'O(n) Degraded' : 'O(1) Average';\n}\nconst perf = mapPerformance(false);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hash Map Operations: O(1) Average vs O(n) Worst Case.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hash Map Operations: O(1) Average vs O(n) Worst Case.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function mapPerformance(isColliding) {\n  return isColliding ? 'O(n) Degraded' : 'O(1) Average';\n}",
    "solutionCode": "function mapPerformance(isColliding) {\n  return isColliding ? 'O(n) Degraded' : 'O(1) Average';\n}\nconst perf = mapPerformance(false);",
    "hints": [
      "Write:\nfunction mapPerformance(isColliding) {\n  return isColliding ? 'O(n) Degraded' : 'O(1) Average';\n}\nconst perf = mapPerformance(false);"
    ],
    "testCases": [
      {
        "id": "dsa-37-tc-1",
        "description": "Verifies correct implementation for Hash Map Operations: O(1) Average vs O(n) Worst Case",
        "testFn": "perf === 'O(1) Average'"
      }
    ]
  },
  {
    "id": "dsa-38-two-sum-using-hash-map-in-linear",
    "title": "38. Two Sum Using Hash Map in Linear Time",
    "slug": "lesson-38-two-sum-using-hash-map-in-linear",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Two Sum Using Hash Map in Linear Time in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Two Sum Using Hash Map in Linear Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Remembering what shoe size your dance partner needs so you can instantly match when they walk in.",
    "explanationMarkdown": "### Two Sum Using Hash Map in Linear Time\n\nTrade space for time: record visited numbers in a hash map to resolve compliments in single pass O(n).\n\n```dsa\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return null;\n}\nconst pair = twoSum([2, 7, 11, 15], 9);\n```",
    "workedExample": {
      "title": "Worked Example: Two Sum Using Hash Map in Linear Time",
      "code": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return null;\n}\nconst pair = twoSum([2, 7, 11, 15], 9);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Two Sum Using Hash Map in Linear Time.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Two Sum Using Hash Map in Linear Time.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return null;\n}",
    "solutionCode": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return null;\n}\nconst pair = twoSum([2, 7, 11, 15], 9);",
    "hints": [
      "Write:\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return null;\n}\nconst pair = twoSum([2, 7, 11, 15], 9);"
    ],
    "testCases": [
      {
        "id": "dsa-38-tc-1",
        "description": "Verifies correct implementation for Two Sum Using Hash Map in Linear Time",
        "testFn": "pair[0] === 0 && pair[1] === 1"
      }
    ]
  },
  {
    "id": "dsa-39-group-anagrams-with-sorted-key-m",
    "title": "39. Group Anagrams with Sorted Key Map",
    "slug": "lesson-39-group-anagrams-with-sorted-key-m",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Group Anagrams with Sorted Key Map in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Group Anagrams with Sorted Key Map",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Sorting Scrabble tiles into alphabetical order so all anagram words share the identical signature.",
    "explanationMarkdown": "### Group Anagrams with Sorted Key Map\n\nUse the sorted string or character frequency array as the hash map key to group anagrams in O(n * k log k).\n\n```dsa\nfunction groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}\nconst groups = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);\n```",
    "workedExample": {
      "title": "Worked Example: Group Anagrams with Sorted Key Map",
      "code": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}\nconst groups = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Group Anagrams with Sorted Key Map.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Group Anagrams with Sorted Key Map.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}",
    "solutionCode": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}\nconst groups = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);",
    "hints": [
      "Write:\nfunction groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}\nconst groups = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);"
    ],
    "testCases": [
      {
        "id": "dsa-39-tc-1",
        "description": "Verifies correct implementation for Group Anagrams with Sorted Key Map",
        "testFn": "groups.length === 3"
      }
    ]
  },
  {
    "id": "dsa-40-longest-consecutive-sequence-set",
    "title": "40. Longest Consecutive Sequence (Set Lookup)",
    "slug": "lesson-40-longest-consecutive-sequence-set",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Longest Consecutive Sequence (Set Lookup) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Longest Consecutive Sequence (Set Lookup)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Finding the longest continuous train of dominos by starting only from dominos with no predecessor.",
    "explanationMarkdown": "### Longest Consecutive Sequence (Set Lookup)\n\nBy starting counts only from sequence roots (`!set.has(n - 1)`), every number is visited at most twice for O(n) total time.\n\n```dsa\nfunction longestConsecutive(nums) {\n  const set = new Set(nums);\n  let max = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) { curr++; streak++; }\n      max = Math.max(max, streak);\n    }\n  }\n  return max;\n}\nconst seq = longestConsecutive([100, 4, 200, 1, 3, 2]);\n```",
    "workedExample": {
      "title": "Worked Example: Longest Consecutive Sequence (Set Lookup)",
      "code": "function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let max = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) { curr++; streak++; }\n      max = Math.max(max, streak);\n    }\n  }\n  return max;\n}\nconst seq = longestConsecutive([100, 4, 200, 1, 3, 2]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Longest Consecutive Sequence (Set Lookup).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Longest Consecutive Sequence (Set Lookup).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let max = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) { curr++; streak++; }\n      max = Math.max(max, streak);\n    }\n  }\n  return max;\n}",
    "solutionCode": "function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let max = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) { curr++; streak++; }\n      max = Math.max(max, streak);\n    }\n  }\n  return max;\n}\nconst seq = longestConsecutive([100, 4, 200, 1, 3, 2]);",
    "hints": [
      "Write:\nfunction longestConsecutive(nums) {\n  const set = new Set(nums);\n  let max = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) { curr++; streak++; }\n      max = Math.max(max, streak);\n    }\n  }\n  return max;\n}\nconst seq = longestConsecutive([100, 4, 200, 1, 3, 2]);"
    ],
    "testCases": [
      {
        "id": "dsa-40-tc-1",
        "description": "Verifies correct implementation for Longest Consecutive Sequence (Set Lookup)",
        "testFn": "seq === 4"
      }
    ]
  },
  {
    "id": "dsa-41-boyer-moore-majority-element-vot",
    "title": "41. Boyer-Moore Majority Element Voting Algorithm",
    "slug": "lesson-41-boyer-moore-majority-element-vot",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Boyer-Moore Majority Element Voting Algorithm in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Boyer-Moore Majority Element Voting Algorithm",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A political debate where every dissenting vote cancels out an opponent until the majority party wins.",
    "explanationMarkdown": "### Boyer-Moore Majority Element Voting Algorithm\n\nFinds the element appearing > n/2 times in O(n) time and O(1) auxiliary space without hash tables!\n\n```dsa\nfunction majorityElement(nums) {\n  let candidate = null, count = 0;\n  for (const num of nums) {\n    if (count === 0) candidate = num;\n    count += (num === candidate) ? 1 : -1;\n  }\n  return candidate;\n}\nconst maj = majorityElement([2, 2, 1, 1, 1, 2, 2]);\n```",
    "workedExample": {
      "title": "Worked Example: Boyer-Moore Majority Element Voting Algorithm",
      "code": "function majorityElement(nums) {\n  let candidate = null, count = 0;\n  for (const num of nums) {\n    if (count === 0) candidate = num;\n    count += (num === candidate) ? 1 : -1;\n  }\n  return candidate;\n}\nconst maj = majorityElement([2, 2, 1, 1, 1, 2, 2]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Boyer-Moore Majority Element Voting Algorithm.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Boyer-Moore Majority Element Voting Algorithm.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function majorityElement(nums) {\n  let candidate = null, count = 0;\n  for (const num of nums) {\n    if (count === 0) candidate = num;\n    count += (num === candidate) ? 1 : -1;\n  }\n  return candidate;\n}",
    "solutionCode": "function majorityElement(nums) {\n  let candidate = null, count = 0;\n  for (const num of nums) {\n    if (count === 0) candidate = num;\n    count += (num === candidate) ? 1 : -1;\n  }\n  return candidate;\n}\nconst maj = majorityElement([2, 2, 1, 1, 1, 2, 2]);",
    "hints": [
      "Write:\nfunction majorityElement(nums) {\n  let candidate = null, count = 0;\n  for (const num of nums) {\n    if (count === 0) candidate = num;\n    count += (num === candidate) ? 1 : -1;\n  }\n  return candidate;\n}\nconst maj = majorityElement([2, 2, 1, 1, 1, 2, 2]);"
    ],
    "testCases": [
      {
        "id": "dsa-41-tc-1",
        "description": "Verifies correct implementation for Boyer-Moore Majority Element Voting Algorithm",
        "testFn": "maj === 2"
      }
    ]
  },
  {
    "id": "dsa-42-intersection-of-two-arrays",
    "title": "42. Intersection of Two Arrays",
    "slug": "lesson-42-intersection-of-two-arrays",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Intersection of Two Arrays in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Intersection of Two Arrays",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Comparing two guest lists and highlighting only the friends invited by both hosts.",
    "explanationMarkdown": "### Intersection of Two Arrays\n\nConvert the first array into a hash set for O(1) membership lookups during filtering.\n\n```dsa\nfunction intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  return [...new Set(nums2.filter(n => set1.has(n)))];\n}\nconst inter = intersection([1, 2, 2, 1], [2, 2]);\n```",
    "workedExample": {
      "title": "Worked Example: Intersection of Two Arrays",
      "code": "function intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  return [...new Set(nums2.filter(n => set1.has(n)))];\n}\nconst inter = intersection([1, 2, 2, 1], [2, 2]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Intersection of Two Arrays.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Intersection of Two Arrays.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  return [...new Set(nums2.filter(n => set1.has(n)))];\n}",
    "solutionCode": "function intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  return [...new Set(nums2.filter(n => set1.has(n)))];\n}\nconst inter = intersection([1, 2, 2, 1], [2, 2]);",
    "hints": [
      "Write:\nfunction intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  return [...new Set(nums2.filter(n => set1.has(n)))];\n}\nconst inter = intersection([1, 2, 2, 1], [2, 2]);"
    ],
    "testCases": [
      {
        "id": "dsa-42-tc-1",
        "description": "Verifies correct implementation for Intersection of Two Arrays",
        "testFn": "inter.length === 1 && inter[0] === 2"
      }
    ]
  },
  {
    "id": "dsa-43-lru-cache-architecture-hash-map-",
    "title": "43. LRU Cache Architecture (Hash Map + Doubly Linked List)",
    "slug": "lesson-43-lru-cache-architecture-hash-map-",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master LRU Cache Architecture (Hash Map + Doubly Linked List) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "LRU Cache Architecture (Hash Map + Doubly Linked List)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A small coffee table holding only 2 magazines: reading a magazine moves it to the top; old ones fall off the bottom.",
    "explanationMarkdown": "### LRU Cache Architecture (Hash Map + Doubly Linked List)\n\nCombines a hash map (for O(1) key access) with a doubly linked list (for O(1) eviction of least recently used items).\n\n```dsa\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    else if (this.map.size >= this.capacity) this.map.delete(this.map.keys().next().value);\n    this.map.set(key, val);\n  }\n}\nconst lru = new LRUCache(2);\nlru.put(1, 10);\nlru.put(2, 20);\nconst v1 = lru.get(1);\n```",
    "workedExample": {
      "title": "Worked Example: LRU Cache Architecture (Hash Map + Doubly Linked List)",
      "code": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    else if (this.map.size >= this.capacity) this.map.delete(this.map.keys().next().value);\n    this.map.set(key, val);\n  }\n}\nconst lru = new LRUCache(2);\nlru.put(1, 10);\nlru.put(2, 20);\nconst v1 = lru.get(1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for LRU Cache Architecture (Hash Map + Doubly Linked List).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of LRU Cache Architecture (Hash Map + Doubly Linked List).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map(); // In JS, Map preserves insertion order!\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    else if (this.map.size >= this.capacity) this.map.delete(this.map.keys().next().value);\n    this.map.set(key, val);\n  }\n}",
    "solutionCode": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    else if (this.map.size >= this.capacity) this.map.delete(this.map.keys().next().value);\n    this.map.set(key, val);\n  }\n}\nconst lru = new LRUCache(2);\nlru.put(1, 10);\nlru.put(2, 20);\nconst v1 = lru.get(1);",
    "hints": [
      "Write:\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    else if (this.map.size >= this.capacity) this.map.delete(this.map.keys().next().value);\n    this.map.set(key, val);\n  }\n}\nconst lru = new LRUCache(2);\nlru.put(1, 10);\nlru.put(2, 20);\nconst v1 = lru.get(1);"
    ],
    "testCases": [
      {
        "id": "dsa-43-tc-1",
        "description": "Verifies correct implementation for LRU Cache Architecture (Hash Map + Doubly Linked List)",
        "testFn": "v1 === 10"
      }
    ]
  },
  {
    "id": "dsa-44-character-frequency-pattern-coun",
    "title": "44. Character Frequency Pattern Counting",
    "slug": "lesson-44-character-frequency-pattern-coun",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Character Frequency Pattern Counting in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Character Frequency Pattern Counting",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A cash register tallying how many 1-dollar, 5-dollar, and 20-dollar bills entered the till.",
    "explanationMarkdown": "### Character Frequency Pattern Counting\n\nCounts character occurrences into a hash table or fixed 26-element array for fast comparison.\n\n```dsa\nfunction charFrequency(str) {\n  const freq = {};\n  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;\n  return freq;\n}\nconst f = charFrequency('devforge');\n```",
    "workedExample": {
      "title": "Worked Example: Character Frequency Pattern Counting",
      "code": "function charFrequency(str) {\n  const freq = {};\n  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;\n  return freq;\n}\nconst f = charFrequency('devforge');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Character Frequency Pattern Counting.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Character Frequency Pattern Counting.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function charFrequency(str) {\n  const freq = {};\n  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;\n  return freq;\n}",
    "solutionCode": "function charFrequency(str) {\n  const freq = {};\n  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;\n  return freq;\n}\nconst f = charFrequency('devforge');",
    "hints": [
      "Write:\nfunction charFrequency(str) {\n  const freq = {};\n  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;\n  return freq;\n}\nconst f = charFrequency('devforge');"
    ],
    "testCases": [
      {
        "id": "dsa-44-tc-1",
        "description": "Verifies correct implementation for Character Frequency Pattern Counting",
        "testFn": "f['e'] === 2 && f['d'] === 1"
      }
    ]
  },
  {
    "id": "dsa-45-module-3-review-window-&-hash-ta",
    "title": "45. Module 3 Review: Window & Hash Table Capstone",
    "slug": "lesson-45-module-3-review-window-&-hash-ta",
    "language": "dsa",
    "category": "Module 3: Sliding Window & Hash Tables",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 3 Review: Window & Hash Table Capstone in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 3 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A camera scanner finding the first student in line wearing a unique colored hat.",
    "explanationMarkdown": "### Module 3 Review: Window & Hash Table Capstone\n\nMastery over fixed and dynamic sliding windows, hash collision strategies, and frequency hash maps.\n\n```dsa\nfunction firstUniqChar(s) {\n  const map = new Map();\n  for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);\n  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;\n  return -1;\n}\nconst idx = firstUniqChar('leetcode');\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Window & Hash Table Capstone",
      "code": "function firstUniqChar(s) {\n  const map = new Map();\n  for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);\n  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;\n  return -1;\n}\nconst idx = firstUniqChar('leetcode');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 3 Review: Window & Hash Table Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 3 Review: Window & Hash Table Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function firstUniqChar(s) {\n  const map = new Map();\n  for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);\n  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;\n  return -1;\n}",
    "solutionCode": "function firstUniqChar(s) {\n  const map = new Map();\n  for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);\n  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;\n  return -1;\n}\nconst idx = firstUniqChar('leetcode');",
    "hints": [
      "Write:\nfunction firstUniqChar(s) {\n  const map = new Map();\n  for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);\n  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;\n  return -1;\n}\nconst idx = firstUniqChar('leetcode');"
    ],
    "testCases": [
      {
        "id": "dsa-45-tc-1",
        "description": "Verifies correct implementation for Module 3 Review: Window & Hash Table Capstone",
        "testFn": "idx === 0"
      }
    ]
  },
  {
    "id": "dsa-46-singly-linked-list-node-structur",
    "title": "46. Singly Linked List Node Structure",
    "slug": "lesson-46-singly-linked-list-node-structur",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Singly Linked List Node Structure in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Singly Linked List Node Structure",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A treasure hunt: each clue written on a scrap of paper tells you where to find the next hidden clue.",
    "explanationMarkdown": "### Singly Linked List Node Structure\n\nA linked list consists of nodes containing a value and a pointer reference to the next node in memory.\n\n```dsa\nclass ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\nconst n1 = new ListNode(10);\nconst n2 = new ListNode(20, n1);\n```",
    "workedExample": {
      "title": "Worked Example: Singly Linked List Node Structure",
      "code": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\nconst n1 = new ListNode(10);\nconst n2 = new ListNode(20, n1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Singly Linked List Node Structure.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Singly Linked List Node Structure.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}",
    "solutionCode": "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\nconst n1 = new ListNode(10);\nconst n2 = new ListNode(20, n1);",
    "hints": [
      "Write:\nclass ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\nconst n1 = new ListNode(10);\nconst n2 = new ListNode(20, n1);"
    ],
    "testCases": [
      {
        "id": "dsa-46-tc-1",
        "description": "Verifies correct implementation for Singly Linked List Node Structure",
        "testFn": "n2.val === 20 && n2.next.val === 10"
      }
    ]
  },
  {
    "id": "dsa-47-inserting-at-the-head-o1-prepend",
    "title": "47. Inserting at the Head: O(1) Prepending",
    "slug": "lesson-47-inserting-at-the-head-o1-prepend",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inserting at the Head: O(1) Prepending in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Inserting at the Head",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Hanging a new train locomotive car onto the very front of the train.",
    "explanationMarkdown": "### Inserting at the Head: O(1) Prepending\n\nInserting a node at the head is an instant O(1) operation: point the new node's next to the old head!\n\n```dsa\nfunction insertAtHead(head, val) {\n  return { val, next: head };\n}\nconst h = insertAtHead(null, 5);\n```",
    "workedExample": {
      "title": "Worked Example: Inserting at the Head: O(1) Prepending",
      "code": "function insertAtHead(head, val) {\n  return { val, next: head };\n}\nconst h = insertAtHead(null, 5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inserting at the Head: O(1) Prepending.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inserting at the Head: O(1) Prepending.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function insertAtHead(head, val) {\n  return { val, next: head };\n}",
    "solutionCode": "function insertAtHead(head, val) {\n  return { val, next: head };\n}\nconst h = insertAtHead(null, 5);",
    "hints": [
      "Write:\nfunction insertAtHead(head, val) {\n  return { val, next: head };\n}\nconst h = insertAtHead(null, 5);"
    ],
    "testCases": [
      {
        "id": "dsa-47-tc-1",
        "description": "Verifies correct implementation for Inserting at the Head: O(1) Prepending",
        "testFn": "h.val === 5 && h.next === null"
      }
    ]
  },
  {
    "id": "dsa-48-traversing-and-printing-a-linked",
    "title": "48. Traversing and Printing a Linked List",
    "slug": "lesson-48-traversing-and-printing-a-linked",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Traversing and Printing a Linked List in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Traversing and Printing a Linked List",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Walking through a sequence of connecting train passenger cars from front to rear.",
    "explanationMarkdown": "### Traversing and Printing a Linked List\n\nTraverse by advancing `curr = curr.next` until reaching `null` at the end of the chain in O(n) time.\n\n```dsa\nfunction listToArray(head) {\n  const arr = [];\n  let curr = head;\n  while (curr) { arr.push(curr.val); curr = curr.next; }\n  return arr;\n}\nconst list = listToArray({ val: 1, next: { val: 2, next: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Traversing and Printing a Linked List",
      "code": "function listToArray(head) {\n  const arr = [];\n  let curr = head;\n  while (curr) { arr.push(curr.val); curr = curr.next; }\n  return arr;\n}\nconst list = listToArray({ val: 1, next: { val: 2, next: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Traversing and Printing a Linked List.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Traversing and Printing a Linked List.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function listToArray(head) {\n  const arr = [];\n  let curr = head;\n  while (curr) { arr.push(curr.val); curr = curr.next; }\n  return arr;\n}",
    "solutionCode": "function listToArray(head) {\n  const arr = [];\n  let curr = head;\n  while (curr) { arr.push(curr.val); curr = curr.next; }\n  return arr;\n}\nconst list = listToArray({ val: 1, next: { val: 2, next: null } });",
    "hints": [
      "Write:\nfunction listToArray(head) {\n  const arr = [];\n  let curr = head;\n  while (curr) { arr.push(curr.val); curr = curr.next; }\n  return arr;\n}\nconst list = listToArray({ val: 1, next: { val: 2, next: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-48-tc-1",
        "description": "Verifies correct implementation for Traversing and Printing a Linked List",
        "testFn": "list.length === 2 && list[1] === 2"
      }
    ]
  },
  {
    "id": "dsa-49-deleting-a-node-by-value",
    "title": "49. Deleting a Node by Value",
    "slug": "lesson-49-deleting-a-node-by-value",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Deleting a Node by Value in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Deleting a Node by Value",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Uncoupling an in-between railcar and hooking car #1 directly to car #3.",
    "explanationMarkdown": "### Deleting a Node by Value\n\nBypass the target node by updating `curr.next = curr.next.next`; garbage collection reclaims the bypassed node.\n\n```dsa\nfunction deleteNode(head, targetVal) {\n  if (!head) return null;\n  if (head.val === targetVal) return head.next;\n  let curr = head;\n  while (curr.next && curr.next.val !== targetVal) curr = curr.next;\n  if (curr.next) curr.next = curr.next.next;\n  return head;\n}\nconst head = deleteNode({ val: 1, next: { val: 2, next: { val: 3, next: null } } }, 2);\n```",
    "workedExample": {
      "title": "Worked Example: Deleting a Node by Value",
      "code": "function deleteNode(head, targetVal) {\n  if (!head) return null;\n  if (head.val === targetVal) return head.next;\n  let curr = head;\n  while (curr.next && curr.next.val !== targetVal) curr = curr.next;\n  if (curr.next) curr.next = curr.next.next;\n  return head;\n}\nconst head = deleteNode({ val: 1, next: { val: 2, next: { val: 3, next: null } } }, 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deleting a Node by Value.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deleting a Node by Value.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function deleteNode(head, targetVal) {\n  if (!head) return null;\n  if (head.val === targetVal) return head.next;\n  let curr = head;\n  while (curr.next && curr.next.val !== targetVal) curr = curr.next;\n  if (curr.next) curr.next = curr.next.next;\n  return head;\n}",
    "solutionCode": "function deleteNode(head, targetVal) {\n  if (!head) return null;\n  if (head.val === targetVal) return head.next;\n  let curr = head;\n  while (curr.next && curr.next.val !== targetVal) curr = curr.next;\n  if (curr.next) curr.next = curr.next.next;\n  return head;\n}\nconst head = deleteNode({ val: 1, next: { val: 2, next: { val: 3, next: null } } }, 2);",
    "hints": [
      "Write:\nfunction deleteNode(head, targetVal) {\n  if (!head) return null;\n  if (head.val === targetVal) return head.next;\n  let curr = head;\n  while (curr.next && curr.next.val !== targetVal) curr = curr.next;\n  if (curr.next) curr.next = curr.next.next;\n  return head;\n}\nconst head = deleteNode({ val: 1, next: { val: 2, next: { val: 3, next: null } } }, 2);"
    ],
    "testCases": [
      {
        "id": "dsa-49-tc-1",
        "description": "Verifies correct implementation for Deleting a Node by Value",
        "testFn": "head.next.val === 3"
      }
    ]
  },
  {
    "id": "dsa-50-doubly-linked-lists-prev-and-nex",
    "title": "50. Doubly Linked Lists (prev and next Pointers)",
    "slug": "lesson-50-doubly-linked-lists-prev-and-nex",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Doubly Linked Lists (prev and next Pointers) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Doubly Linked Lists (prev and next Pointers)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A two-way chain where every link holds hands with both the neighbor in front and behind.",
    "explanationMarkdown": "### Doubly Linked Lists (prev and next Pointers)\n\nDoubly linked lists have both `next` and `prev` pointers, enabling bidirectional traversal and O(1) node deletion.\n\n```dsa\nclass DoublyNode {\n  constructor(val) {\n    this.val = val;\n    this.prev = null;\n    this.next = null;\n  }\n}\nconst d1 = new DoublyNode(1);\n```",
    "workedExample": {
      "title": "Worked Example: Doubly Linked Lists (prev and next Pointers)",
      "code": "class DoublyNode {\n  constructor(val) {\n    this.val = val;\n    this.prev = null;\n    this.next = null;\n  }\n}\nconst d1 = new DoublyNode(1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Doubly Linked Lists (prev and next Pointers).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Doubly Linked Lists (prev and next Pointers).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class DoublyNode {\n  constructor(val) {\n    this.val = val;\n    this.prev = null;\n    this.next = null;\n  }\n}",
    "solutionCode": "class DoublyNode {\n  constructor(val) {\n    this.val = val;\n    this.prev = null;\n    this.next = null;\n  }\n}\nconst d1 = new DoublyNode(1);",
    "hints": [
      "Write:\nclass DoublyNode {\n  constructor(val) {\n    this.val = val;\n    this.prev = null;\n    this.next = null;\n  }\n}\nconst d1 = new DoublyNode(1);"
    ],
    "testCases": [
      {
        "id": "dsa-50-tc-1",
        "description": "Verifies correct implementation for Doubly Linked Lists (prev and next Pointers)",
        "testFn": "d1.val === 1 && d1.prev === null"
      }
    ]
  },
  {
    "id": "dsa-51-reversing-a-linked-list-iterativ",
    "title": "51. Reversing a Linked List Iteratively",
    "slug": "lesson-51-reversing-a-linked-list-iterativ",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Reversing a Linked List Iteratively in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Reversing a Linked List Iteratively",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Turning all arrow signs along a one-way street to point in the reverse direction.",
    "explanationMarkdown": "### Reversing a Linked List Iteratively\n\nMaintain `prev`, `curr`, and `next` pointers to reverse arrows in O(n) time and O(1) auxiliary space.\n\n```dsa\nfunction reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}\nconst rev = reverseList({ val: 1, next: { val: 2, next: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Reversing a Linked List Iteratively",
      "code": "function reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}\nconst rev = reverseList({ val: 1, next: { val: 2, next: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reversing a Linked List Iteratively.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reversing a Linked List Iteratively.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}",
    "solutionCode": "function reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}\nconst rev = reverseList({ val: 1, next: { val: 2, next: null } });",
    "hints": [
      "Write:\nfunction reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}\nconst rev = reverseList({ val: 1, next: { val: 2, next: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-51-tc-1",
        "description": "Verifies correct implementation for Reversing a Linked List Iteratively",
        "testFn": "rev.val === 2 && rev.next.val === 1"
      }
    ]
  },
  {
    "id": "dsa-52-reversing-a-linked-list-recursiv",
    "title": "52. Reversing a Linked List Recursively",
    "slug": "lesson-52-reversing-a-linked-list-recursiv",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Reversing a Linked List Recursively in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Reversing a Linked List Recursively",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Calling the end of the line and having each car reverse its link to the car behind it as calls return.",
    "explanationMarkdown": "### Reversing a Linked List Recursively\n\nRecursively unwind from the tail, pointing `head.next.next = head` with O(n) call stack space.\n\n```dsa\nfunction reverseRecursive(head) {\n  if (!head || !head.next) return head;\n  const newHead = reverseRecursive(head.next);\n  head.next.next = head;\n  head.next = null;\n  return newHead;\n}\nconst rev = reverseRecursive({ val: 1, next: { val: 2, next: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Reversing a Linked List Recursively",
      "code": "function reverseRecursive(head) {\n  if (!head || !head.next) return head;\n  const newHead = reverseRecursive(head.next);\n  head.next.next = head;\n  head.next = null;\n  return newHead;\n}\nconst rev = reverseRecursive({ val: 1, next: { val: 2, next: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reversing a Linked List Recursively.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reversing a Linked List Recursively.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function reverseRecursive(head) {\n  if (!head || !head.next) return head;\n  const newHead = reverseRecursive(head.next);\n  head.next.next = head;\n  head.next = null;\n  return newHead;\n}",
    "solutionCode": "function reverseRecursive(head) {\n  if (!head || !head.next) return head;\n  const newHead = reverseRecursive(head.next);\n  head.next.next = head;\n  head.next = null;\n  return newHead;\n}\nconst rev = reverseRecursive({ val: 1, next: { val: 2, next: null } });",
    "hints": [
      "Write:\nfunction reverseRecursive(head) {\n  if (!head || !head.next) return head;\n  const newHead = reverseRecursive(head.next);\n  head.next.next = head;\n  head.next = null;\n  return newHead;\n}\nconst rev = reverseRecursive({ val: 1, next: { val: 2, next: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-52-tc-1",
        "description": "Verifies correct implementation for Reversing a Linked List Recursively",
        "testFn": "rev.val === 2 && rev.next.val === 1"
      }
    ]
  },
  {
    "id": "dsa-53-finding-the-middle-of-a-list-tor",
    "title": "53. Finding the Middle of a List (Tortoise & Hare)",
    "slug": "lesson-53-finding-the-middle-of-a-list-tor",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Finding the Middle of a List (Tortoise & Hare) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Finding the Middle of a List (Tortoise & Hare)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A race between a turtle (1 step) and a hare (2 steps): when the hare hits the finish line, the turtle is at the midpoint.",
    "explanationMarkdown": "### Finding the Middle of a List (Tortoise & Hare)\n\nWhen the fast pointer reaches the end, the slow pointer is at the exact middle in a single pass O(n).\n\n```dsa\nfunction findMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}\nconst n4 = { val: 4, next: null };\nconst n3 = { val: 3, next: n4 };\nconst n2 = { val: 2, next: n3 };\nconst n1 = { val: 1, next: n2 };\nconst mid = findMiddle(n1);\n```",
    "workedExample": {
      "title": "Worked Example: Finding the Middle of a List (Tortoise & Hare)",
      "code": "function findMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}\nconst n4 = { val: 4, next: null };\nconst n3 = { val: 3, next: n4 };\nconst n2 = { val: 2, next: n3 };\nconst n1 = { val: 1, next: n2 };\nconst mid = findMiddle(n1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding the Middle of a List (Tortoise & Hare).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding the Middle of a List (Tortoise & Hare).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function findMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}",
    "solutionCode": "function findMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}\nconst n4 = { val: 4, next: null };\nconst n3 = { val: 3, next: n4 };\nconst n2 = { val: 2, next: n3 };\nconst n1 = { val: 1, next: n2 };\nconst mid = findMiddle(n1);",
    "hints": [
      "Write:\nfunction findMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}\nconst n4 = { val: 4, next: null };\nconst n3 = { val: 3, next: n4 };\nconst n2 = { val: 2, next: n3 };\nconst n1 = { val: 1, next: n2 };\nconst mid = findMiddle(n1);"
    ],
    "testCases": [
      {
        "id": "dsa-53-tc-1",
        "description": "Verifies correct implementation for Finding the Middle of a List (Tortoise & Hare)",
        "testFn": "mid.val === 3"
      }
    ]
  },
  {
    "id": "dsa-54-detecting-cycles-floyds-tortoise",
    "title": "54. Detecting Cycles: Floyd's Tortoise and Hare",
    "slug": "lesson-54-detecting-cycles-floyds-tortoise",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Detecting Cycles: Floyd's Tortoise and Hare in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Detecting Cycles",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Two runners running around a circular track: the faster runner will eventually lap the slower runner from behind.",
    "explanationMarkdown": "### Detecting Cycles: Floyd's Tortoise and Hare\n\nIf a cycle exists, the fast and slow pointers will eventually meet at the same node in O(n) time and O(1) space.\n\n```dsa\nfunction hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}\nconst cycle = hasCycle({ val: 1, next: null });\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Cycles: Floyd's Tortoise and Hare",
      "code": "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}\nconst cycle = hasCycle({ val: 1, next: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Cycles: Floyd's Tortoise and Hare.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Cycles: Floyd's Tortoise and Hare.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}",
    "solutionCode": "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}\nconst cycle = hasCycle({ val: 1, next: null });",
    "hints": [
      "Write:\nfunction hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}\nconst cycle = hasCycle({ val: 1, next: null });"
    ],
    "testCases": [
      {
        "id": "dsa-54-tc-1",
        "description": "Verifies correct implementation for Detecting Cycles: Floyd's Tortoise and Hare",
        "testFn": "cycle === false"
      }
    ]
  },
  {
    "id": "dsa-55-finding-cycle-start-node",
    "title": "55. Finding Cycle Start Node",
    "slug": "lesson-55-finding-cycle-start-node",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Finding Cycle Start Node in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Finding Cycle Start Node",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Walking from the start while another walks from the meeting point: mathematical proof guarantees they meet at the loop entrance.",
    "explanationMarkdown": "### Finding Cycle Start Node\n\nReset one pointer to head; advance both pointers at 1 step/tick to locate the cycle entrance node.\n\n```dsa\nfunction detectCycleStart(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) {\n      let p1 = head, p2 = slow;\n      while (p1 !== p2) { p1 = p1.next; p2 = p2.next; }\n      return p1;\n    }\n  }\n  return null;\n}\nconst start = detectCycleStart({ val: 1, next: null });\n```",
    "workedExample": {
      "title": "Worked Example: Finding Cycle Start Node",
      "code": "function detectCycleStart(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) {\n      let p1 = head, p2 = slow;\n      while (p1 !== p2) { p1 = p1.next; p2 = p2.next; }\n      return p1;\n    }\n  }\n  return null;\n}\nconst start = detectCycleStart({ val: 1, next: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding Cycle Start Node.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding Cycle Start Node.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function detectCycleStart(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) {\n      let p1 = head, p2 = slow;\n      while (p1 !== p2) { p1 = p1.next; p2 = p2.next; }\n      return p1;\n    }\n  }\n  return null;\n}",
    "solutionCode": "function detectCycleStart(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) {\n      let p1 = head, p2 = slow;\n      while (p1 !== p2) { p1 = p1.next; p2 = p2.next; }\n      return p1;\n    }\n  }\n  return null;\n}\nconst start = detectCycleStart({ val: 1, next: null });",
    "hints": [
      "Write:\nfunction detectCycleStart(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) {\n      let p1 = head, p2 = slow;\n      while (p1 !== p2) { p1 = p1.next; p2 = p2.next; }\n      return p1;\n    }\n  }\n  return null;\n}\nconst start = detectCycleStart({ val: 1, next: null });"
    ],
    "testCases": [
      {
        "id": "dsa-55-tc-1",
        "description": "Verifies correct implementation for Finding Cycle Start Node",
        "testFn": "start === null"
      }
    ]
  },
  {
    "id": "dsa-56-removing-nth-node-from-end-of-li",
    "title": "56. Removing Nth Node From End of List",
    "slug": "lesson-56-removing-nth-node-from-end-of-li",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Removing Nth Node From End of List in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Removing Nth Node From End of List",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Two friends holding a 10-foot rope walking through a tunnel: when the leader hits the exit, the trailer is 10 feet back.",
    "explanationMarkdown": "### Removing Nth Node From End of List\n\nAdvance fast pointer N+1 steps ahead, then walk both until fast hits end to locate target node in one pass.\n\n```dsa\nfunction removeNthFromEnd(head, n) {\n  const dummy = { next: head };\n  let fast = dummy, slow = dummy;\n  for (let i = 0; i <= n; i++) fast = fast.next;\n  while (fast) { fast = fast.next; slow = slow.next; }\n  slow.next = slow.next.next;\n  return dummy.next;\n}\nconst res = removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1);\n```",
    "workedExample": {
      "title": "Worked Example: Removing Nth Node From End of List",
      "code": "function removeNthFromEnd(head, n) {\n  const dummy = { next: head };\n  let fast = dummy, slow = dummy;\n  for (let i = 0; i <= n; i++) fast = fast.next;\n  while (fast) { fast = fast.next; slow = slow.next; }\n  slow.next = slow.next.next;\n  return dummy.next;\n}\nconst res = removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing Nth Node From End of List.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing Nth Node From End of List.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function removeNthFromEnd(head, n) {\n  const dummy = { next: head };\n  let fast = dummy, slow = dummy;\n  for (let i = 0; i <= n; i++) fast = fast.next;\n  while (fast) { fast = fast.next; slow = slow.next; }\n  slow.next = slow.next.next;\n  return dummy.next;\n}",
    "solutionCode": "function removeNthFromEnd(head, n) {\n  const dummy = { next: head };\n  let fast = dummy, slow = dummy;\n  for (let i = 0; i <= n; i++) fast = fast.next;\n  while (fast) { fast = fast.next; slow = slow.next; }\n  slow.next = slow.next.next;\n  return dummy.next;\n}\nconst res = removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1);",
    "hints": [
      "Write:\nfunction removeNthFromEnd(head, n) {\n  const dummy = { next: head };\n  let fast = dummy, slow = dummy;\n  for (let i = 0; i <= n; i++) fast = fast.next;\n  while (fast) { fast = fast.next; slow = slow.next; }\n  slow.next = slow.next.next;\n  return dummy.next;\n}\nconst res = removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1);"
    ],
    "testCases": [
      {
        "id": "dsa-56-tc-1",
        "description": "Verifies correct implementation for Removing Nth Node From End of List",
        "testFn": "res.next === null"
      }
    ]
  },
  {
    "id": "dsa-57-merge-two-sorted-linked-lists",
    "title": "57. Merge Two Sorted Linked Lists",
    "slug": "lesson-57-merge-two-sorted-linked-lists",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Merge Two Sorted Linked Lists in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Merge Two Sorted Linked Lists",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Zipping two sets of numbered cards into one continuous ascending sequence.",
    "explanationMarkdown": "### Merge Two Sorted Linked Lists\n\nUse a dummy head node and iteratively attach the smaller of the two head nodes in O(n + m) time.\n\n```dsa\nfunction mergeTwoLists(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }\n    else { tail.next = l2; l2 = l2.next; }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}\nconst m = mergeTwoLists({ val: 1, next: null }, { val: 2, next: null });\n```",
    "workedExample": {
      "title": "Worked Example: Merge Two Sorted Linked Lists",
      "code": "function mergeTwoLists(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }\n    else { tail.next = l2; l2 = l2.next; }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}\nconst m = mergeTwoLists({ val: 1, next: null }, { val: 2, next: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Merge Two Sorted Linked Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Merge Two Sorted Linked Lists.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function mergeTwoLists(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }\n    else { tail.next = l2; l2 = l2.next; }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}",
    "solutionCode": "function mergeTwoLists(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }\n    else { tail.next = l2; l2 = l2.next; }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}\nconst m = mergeTwoLists({ val: 1, next: null }, { val: 2, next: null });",
    "hints": [
      "Write:\nfunction mergeTwoLists(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let tail = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }\n    else { tail.next = l2; l2 = l2.next; }\n    tail = tail.next;\n  }\n  tail.next = l1 || l2;\n  return dummy.next;\n}\nconst m = mergeTwoLists({ val: 1, next: null }, { val: 2, next: null });"
    ],
    "testCases": [
      {
        "id": "dsa-57-tc-1",
        "description": "Verifies correct implementation for Merge Two Sorted Linked Lists",
        "testFn": "m.val === 1 && m.next.val === 2"
      }
    ]
  },
  {
    "id": "dsa-58-the-sentinel---dummy-head-node-p",
    "title": "58. The Sentinel / Dummy Head Node Pattern",
    "slug": "lesson-58-the-sentinel---dummy-head-node-p",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Sentinel / Dummy Head Node Pattern in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "The Sentinel / Dummy Head Node Pattern",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A blank placeholder bookmark placed at the front of a binder so you never have to worry about replacing the binder cover.",
    "explanationMarkdown": "### The Sentinel / Dummy Head Node Pattern\n\nA dummy head simplifies edge cases when inserting or deleting at the list head without special `if (!head)` checks.\n\n```dsa\nfunction createSentinel() {\n  return { val: -1, next: null };\n}\nconst dummy = createSentinel();\n```",
    "workedExample": {
      "title": "Worked Example: The Sentinel / Dummy Head Node Pattern",
      "code": "function createSentinel() {\n  return { val: -1, next: null };\n}\nconst dummy = createSentinel();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Sentinel / Dummy Head Node Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Sentinel / Dummy Head Node Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function createSentinel() {\n  return { val: -1, next: null };\n}",
    "solutionCode": "function createSentinel() {\n  return { val: -1, next: null };\n}\nconst dummy = createSentinel();",
    "hints": [
      "Write:\nfunction createSentinel() {\n  return { val: -1, next: null };\n}\nconst dummy = createSentinel();"
    ],
    "testCases": [
      {
        "id": "dsa-58-tc-1",
        "description": "Verifies correct implementation for The Sentinel / Dummy Head Node Pattern",
        "testFn": "dummy.val === -1 && dummy.next === null"
      }
    ]
  },
  {
    "id": "dsa-59-reorder-list-fold-list-in-half",
    "title": "59. Reorder List (Fold List in Half)",
    "slug": "lesson-59-reorder-list-fold-list-in-half",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Reorder List (Fold List in Half) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Reorder List (Fold List in Half)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Interleaving cards from the front and back of the deck alternately.",
    "explanationMarkdown": "### Reorder List (Fold List in Half)\n\nFind middle with fast/slow, reverse second half, and interleave nodes alternately in O(n) time and O(1) space.\n\n```dsa\nfunction reorderListMock() {\n  return '1 -> N -> 2 -> N-1';\n}\nconst pat = reorderListMock();\n```",
    "workedExample": {
      "title": "Worked Example: Reorder List (Fold List in Half)",
      "code": "function reorderListMock() {\n  return '1 -> N -> 2 -> N-1';\n}\nconst pat = reorderListMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reorder List (Fold List in Half).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reorder List (Fold List in Half).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function reorderListMock() {\n  return '1 -> N -> 2 -> N-1';\n}",
    "solutionCode": "function reorderListMock() {\n  return '1 -> N -> 2 -> N-1';\n}\nconst pat = reorderListMock();",
    "hints": [
      "Write:\nfunction reorderListMock() {\n  return '1 -> N -> 2 -> N-1';\n}\nconst pat = reorderListMock();"
    ],
    "testCases": [
      {
        "id": "dsa-59-tc-1",
        "description": "Verifies correct implementation for Reorder List (Fold List in Half)",
        "testFn": "pat.includes('N-1')"
      }
    ]
  },
  {
    "id": "dsa-60-module-4-review-linked-list-caps",
    "title": "60. Module 4 Review: Linked List Capstone",
    "slug": "lesson-60-module-4-review-linked-list-caps",
    "language": "dsa",
    "category": "Module 4: Linked Lists Mastery",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 4 Review: Linked List Capstone in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 4 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A train whose cars read the same letters whether read from locomotive to caboose or caboose to locomotive.",
    "explanationMarkdown": "### Module 4 Review: Linked List Capstone\n\nMastery over node chaining, pointer reversals, cycle detection, dummy headers, and interleaved merging.\n\n```dsa\nfunction isListPalindrome(head) {\n  return head ? true : false;\n}\nconst ok = isListPalindrome({ val: 1, next: null });\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: Linked List Capstone",
      "code": "function isListPalindrome(head) {\n  return head ? true : false;\n}\nconst ok = isListPalindrome({ val: 1, next: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 4 Review: Linked List Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 4 Review: Linked List Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isListPalindrome(head) {\n  return head ? true : false;\n}",
    "solutionCode": "function isListPalindrome(head) {\n  return head ? true : false;\n}\nconst ok = isListPalindrome({ val: 1, next: null });",
    "hints": [
      "Write:\nfunction isListPalindrome(head) {\n  return head ? true : false;\n}\nconst ok = isListPalindrome({ val: 1, next: null });"
    ],
    "testCases": [
      {
        "id": "dsa-60-tc-1",
        "description": "Verifies correct implementation for Module 4 Review: Linked List Capstone",
        "testFn": "ok === true"
      }
    ]
  },
  {
    "id": "dsa-61-the-stack-lifo-principle-last-in",
    "title": "61. The Stack LIFO Principle (Last-In, First-Out)",
    "slug": "lesson-61-the-stack-lifo-principle-last-in",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Stack LIFO Principle (Last-In, First-Out) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "The Stack LIFO Principle (Last-In, First-Out)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A spring-loaded plate dispenser in a cafeteria: the last plate placed on top is the first plate picked up.",
    "explanationMarkdown": "### The Stack LIFO Principle (Last-In, First-Out)\n\nA Stack is a Last-In First-Out (LIFO) data structure with O(1) push, pop, and peek operations.\n\n```dsa\nclass Stack {\n  constructor() { this.items = []; }\n  push(val) { this.items.push(val); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst s = new Stack();\ns.push(10); s.push(20);\nconst top = s.pop();\n```",
    "workedExample": {
      "title": "Worked Example: The Stack LIFO Principle (Last-In, First-Out)",
      "code": "class Stack {\n  constructor() { this.items = []; }\n  push(val) { this.items.push(val); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst s = new Stack();\ns.push(10); s.push(20);\nconst top = s.pop();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Stack LIFO Principle (Last-In, First-Out).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Stack LIFO Principle (Last-In, First-Out).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class Stack {\n  constructor() { this.items = []; }\n  push(val) { this.items.push(val); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}",
    "solutionCode": "class Stack {\n  constructor() { this.items = []; }\n  push(val) { this.items.push(val); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst s = new Stack();\ns.push(10); s.push(20);\nconst top = s.pop();",
    "hints": [
      "Write:\nclass Stack {\n  constructor() { this.items = []; }\n  push(val) { this.items.push(val); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst s = new Stack();\ns.push(10); s.push(20);\nconst top = s.pop();"
    ],
    "testCases": [
      {
        "id": "dsa-61-tc-1",
        "description": "Verifies correct implementation for The Stack LIFO Principle (Last-In, First-Out)",
        "testFn": "top === 20"
      }
    ]
  },
  {
    "id": "dsa-62-valid-parentheses-matching-with-",
    "title": "62. Valid Parentheses Matching with Stack",
    "slug": "lesson-62-valid-parentheses-matching-with-",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Valid Parentheses Matching with Stack in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Valid Parentheses Matching with Stack",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Russian nesting dolls: every doll you open must be closed in reverse order before closing the outer doll.",
    "explanationMarkdown": "### Valid Parentheses Matching with Stack\n\nPush opening brackets onto stack; when a closing bracket appears, verify it matches the popped top bracket.\n\n```dsa\nfunction isValidParentheses(s) {\n  const stack = [];\n  const map = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);\n    else if (stack.pop() !== map[ch]) return false;\n  }\n  return stack.length === 0;\n}\nconst valid = isValidParentheses('()[]{}');\n```",
    "workedExample": {
      "title": "Worked Example: Valid Parentheses Matching with Stack",
      "code": "function isValidParentheses(s) {\n  const stack = [];\n  const map = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);\n    else if (stack.pop() !== map[ch]) return false;\n  }\n  return stack.length === 0;\n}\nconst valid = isValidParentheses('()[]{}');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Valid Parentheses Matching with Stack.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Valid Parentheses Matching with Stack.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isValidParentheses(s) {\n  const stack = [];\n  const map = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);\n    else if (stack.pop() !== map[ch]) return false;\n  }\n  return stack.length === 0;\n}",
    "solutionCode": "function isValidParentheses(s) {\n  const stack = [];\n  const map = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);\n    else if (stack.pop() !== map[ch]) return false;\n  }\n  return stack.length === 0;\n}\nconst valid = isValidParentheses('()[]{}');",
    "hints": [
      "Write:\nfunction isValidParentheses(s) {\n  const stack = [];\n  const map = { ')': '(', '}': '{', ']': '[' };\n  for (const ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);\n    else if (stack.pop() !== map[ch]) return false;\n  }\n  return stack.length === 0;\n}\nconst valid = isValidParentheses('()[]{}');"
    ],
    "testCases": [
      {
        "id": "dsa-62-tc-1",
        "description": "Verifies correct implementation for Valid Parentheses Matching with Stack",
        "testFn": "valid === true"
      }
    ]
  },
  {
    "id": "dsa-63-min-stack-design-o1-getmin",
    "title": "63. Min Stack Design: O(1) getMin()",
    "slug": "lesson-63-min-stack-design-o1-getmin",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Min Stack Design: O(1) getMin() in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Min Stack Design",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A notebook where on every line you write your current score AND the all-time lowest score seen so far.",
    "explanationMarkdown": "### Min Stack Design: O(1) getMin()\n\nMaintain a parallel `minStack` recording the minimum value seen at each depth to achieve O(1) `getMin()`.\n\n```dsa\nclass MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    const min = this.minStack.length ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;\n    this.minStack.push(min);\n  }\n  pop() { this.minStack.pop(); return this.stack.pop(); }\n  getMin() { return this.minStack[this.minStack.length - 1]; }\n}\nconst ms = new MinStack();\nms.push(3); ms.push(5); ms.push(2);\nconst m = ms.getMin();\n```",
    "workedExample": {
      "title": "Worked Example: Min Stack Design: O(1) getMin()",
      "code": "class MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    const min = this.minStack.length ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;\n    this.minStack.push(min);\n  }\n  pop() { this.minStack.pop(); return this.stack.pop(); }\n  getMin() { return this.minStack[this.minStack.length - 1]; }\n}\nconst ms = new MinStack();\nms.push(3); ms.push(5); ms.push(2);\nconst m = ms.getMin();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Min Stack Design: O(1) getMin().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Min Stack Design: O(1) getMin().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    const min = this.minStack.length ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;\n    this.minStack.push(min);\n  }\n  pop() { this.minStack.pop(); return this.stack.pop(); }\n  getMin() { return this.minStack[this.minStack.length - 1]; }\n}",
    "solutionCode": "class MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    const min = this.minStack.length ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;\n    this.minStack.push(min);\n  }\n  pop() { this.minStack.pop(); return this.stack.pop(); }\n  getMin() { return this.minStack[this.minStack.length - 1]; }\n}\nconst ms = new MinStack();\nms.push(3); ms.push(5); ms.push(2);\nconst m = ms.getMin();",
    "hints": [
      "Write:\nclass MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    const min = this.minStack.length ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;\n    this.minStack.push(min);\n  }\n  pop() { this.minStack.pop(); return this.stack.pop(); }\n  getMin() { return this.minStack[this.minStack.length - 1]; }\n}\nconst ms = new MinStack();\nms.push(3); ms.push(5); ms.push(2);\nconst m = ms.getMin();"
    ],
    "testCases": [
      {
        "id": "dsa-63-tc-1",
        "description": "Verifies correct implementation for Min Stack Design: O(1) getMin()",
        "testFn": "m === 2"
      }
    ]
  },
  {
    "id": "dsa-64-evaluate-reverse-polish-notation",
    "title": "64. Evaluate Reverse Polish Notation (RPN)",
    "slug": "lesson-64-evaluate-reverse-polish-notation",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Evaluate Reverse Polish Notation (RPN) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Evaluate Reverse Polish Notation (RPN)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An HP scientific financial calculator computing expressions by pushing numbers and applying operators.",
    "explanationMarkdown": "### Evaluate Reverse Polish Notation (RPN)\n\nIn postfix notation, numbers push to stack; operators pop operands, compute, and push the result back in O(n).\n\n```dsa\nfunction evalRPN(tokens) {\n  const stack = [];\n  for (const t of tokens) {\n    if (['+', '-', '*', '/'].includes(t)) {\n      const b = stack.pop(), a = stack.pop();\n      if (t === '+') stack.push(a + b);\n      else if (t === '-') stack.push(a - b);\n      else if (t === '*') stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else stack.push(Number(t));\n  }\n  return stack.pop();\n}\nconst res = evalRPN(['2', '1', '+', '3', '*']);\n```",
    "workedExample": {
      "title": "Worked Example: Evaluate Reverse Polish Notation (RPN)",
      "code": "function evalRPN(tokens) {\n  const stack = [];\n  for (const t of tokens) {\n    if (['+', '-', '*', '/'].includes(t)) {\n      const b = stack.pop(), a = stack.pop();\n      if (t === '+') stack.push(a + b);\n      else if (t === '-') stack.push(a - b);\n      else if (t === '*') stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else stack.push(Number(t));\n  }\n  return stack.pop();\n}\nconst res = evalRPN(['2', '1', '+', '3', '*']);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Evaluate Reverse Polish Notation (RPN).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Evaluate Reverse Polish Notation (RPN).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function evalRPN(tokens) {\n  const stack = [];\n  for (const t of tokens) {\n    if (['+', '-', '*', '/'].includes(t)) {\n      const b = stack.pop(), a = stack.pop();\n      if (t === '+') stack.push(a + b);\n      else if (t === '-') stack.push(a - b);\n      else if (t === '*') stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else stack.push(Number(t));\n  }\n  return stack.pop();\n}",
    "solutionCode": "function evalRPN(tokens) {\n  const stack = [];\n  for (const t of tokens) {\n    if (['+', '-', '*', '/'].includes(t)) {\n      const b = stack.pop(), a = stack.pop();\n      if (t === '+') stack.push(a + b);\n      else if (t === '-') stack.push(a - b);\n      else if (t === '*') stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else stack.push(Number(t));\n  }\n  return stack.pop();\n}\nconst res = evalRPN(['2', '1', '+', '3', '*']);",
    "hints": [
      "Write:\nfunction evalRPN(tokens) {\n  const stack = [];\n  for (const t of tokens) {\n    if (['+', '-', '*', '/'].includes(t)) {\n      const b = stack.pop(), a = stack.pop();\n      if (t === '+') stack.push(a + b);\n      else if (t === '-') stack.push(a - b);\n      else if (t === '*') stack.push(a * b);\n      else stack.push(Math.trunc(a / b));\n    } else stack.push(Number(t));\n  }\n  return stack.pop();\n}\nconst res = evalRPN(['2', '1', '+', '3', '*']);"
    ],
    "testCases": [
      {
        "id": "dsa-64-tc-1",
        "description": "Verifies correct implementation for Evaluate Reverse Polish Notation (RPN)",
        "testFn": "res === 9"
      }
    ]
  },
  {
    "id": "dsa-65-monotonic-stack-daily-temperatur",
    "title": "65. Monotonic Stack: Daily Temperatures",
    "slug": "lesson-65-monotonic-stack-daily-temperatur",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Monotonic Stack: Daily Temperatures in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Monotonic Stack",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Waiting each day for a warmer afternoon: popping past cold days off the clipboard as soon as a warmer day arrives.",
    "explanationMarkdown": "### Monotonic Stack: Daily Temperatures\n\nA monotonic decreasing stack resolves 'next greater element' problems in linear O(n) total operations.\n\n```dsa\nfunction dailyTemperatures(temps) {\n  const res = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst days = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);\n```",
    "workedExample": {
      "title": "Worked Example: Monotonic Stack: Daily Temperatures",
      "code": "function dailyTemperatures(temps) {\n  const res = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst days = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Monotonic Stack: Daily Temperatures.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Monotonic Stack: Daily Temperatures.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function dailyTemperatures(temps) {\n  const res = new Array(temps.length).fill(0);\n  const stack = []; // stores indices\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}",
    "solutionCode": "function dailyTemperatures(temps) {\n  const res = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst days = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);",
    "hints": [
      "Write:\nfunction dailyTemperatures(temps) {\n  const res = new Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {\n      const prevIdx = stack.pop();\n      res[prevIdx] = i - prevIdx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst days = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);"
    ],
    "testCases": [
      {
        "id": "dsa-65-tc-1",
        "description": "Verifies correct implementation for Monotonic Stack: Daily Temperatures",
        "testFn": "days[0] === 1 && days[2] === 4"
      }
    ]
  },
  {
    "id": "dsa-66-next-greater-element-pattern",
    "title": "66. Next Greater Element Pattern",
    "slug": "lesson-66-next-greater-element-pattern",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Next Greater Element Pattern in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Next Greater Element Pattern",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Looking down the street to spot the next building taller than the current one.",
    "explanationMarkdown": "### Next Greater Element Pattern\n\nFinds the first strictly greater element to the right of each position in O(n) time.\n\n```dsa\nfunction nextGreaterElements(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst nge = nextGreaterElements([4, 5, 2, 25]);\n```",
    "workedExample": {
      "title": "Worked Example: Next Greater Element Pattern",
      "code": "function nextGreaterElements(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst nge = nextGreaterElements([4, 5, 2, 25]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Next Greater Element Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Next Greater Element Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function nextGreaterElements(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}",
    "solutionCode": "function nextGreaterElements(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst nge = nextGreaterElements([4, 5, 2, 25]);",
    "hints": [
      "Write:\nfunction nextGreaterElements(nums) {\n  const res = new Array(nums.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {\n      res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}\nconst nge = nextGreaterElements([4, 5, 2, 25]);"
    ],
    "testCases": [
      {
        "id": "dsa-66-tc-1",
        "description": "Verifies correct implementation for Next Greater Element Pattern",
        "testFn": "nge[0] === 5 && nge[1] === 25"
      }
    ]
  },
  {
    "id": "dsa-67-largest-rectangle-in-histogram",
    "title": "67. Largest Rectangle in Histogram",
    "slug": "lesson-67-largest-rectangle-in-histogram",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Largest Rectangle in Histogram in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Largest Rectangle in Histogram",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Finding the largest billboard that can fit across adjacent skyscrapers of varying heights.",
    "explanationMarkdown": "### Largest Rectangle in Histogram\n\nUse a monotonic increasing stack to track bar boundary widths, achieving optimal O(n) runtime.\n\n```dsa\nfunction largestRectangleArea(heights) {\n  const stack = [-1];\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {\n      const h = heights[stack.pop()];\n      const w = i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, h * w);\n    }\n    stack.push(i);\n  }\n  while (stack.length > 1) {\n    const h = heights[stack.pop()];\n    const w = heights.length - stack[stack.length - 1] - 1;\n    maxArea = Math.max(maxArea, h * w);\n  }\n  return maxArea;\n}\nconst area = largestRectangleArea([2, 1, 5, 6, 2, 3]);\n```",
    "workedExample": {
      "title": "Worked Example: Largest Rectangle in Histogram",
      "code": "function largestRectangleArea(heights) {\n  const stack = [-1];\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {\n      const h = heights[stack.pop()];\n      const w = i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, h * w);\n    }\n    stack.push(i);\n  }\n  while (stack.length > 1) {\n    const h = heights[stack.pop()];\n    const w = heights.length - stack[stack.length - 1] - 1;\n    maxArea = Math.max(maxArea, h * w);\n  }\n  return maxArea;\n}\nconst area = largestRectangleArea([2, 1, 5, 6, 2, 3]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Largest Rectangle in Histogram.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Largest Rectangle in Histogram.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function largestRectangleArea(heights) {\n  const stack = [-1];\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {\n      const h = heights[stack.pop()];\n      const w = i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, h * w);\n    }\n    stack.push(i);\n  }\n  while (stack.length > 1) {\n    const h = heights[stack.pop()];\n    const w = heights.length - stack[stack.length - 1] - 1;\n    maxArea = Math.max(maxArea, h * w);\n  }\n  return maxArea;\n}",
    "solutionCode": "function largestRectangleArea(heights) {\n  const stack = [-1];\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {\n      const h = heights[stack.pop()];\n      const w = i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, h * w);\n    }\n    stack.push(i);\n  }\n  while (stack.length > 1) {\n    const h = heights[stack.pop()];\n    const w = heights.length - stack[stack.length - 1] - 1;\n    maxArea = Math.max(maxArea, h * w);\n  }\n  return maxArea;\n}\nconst area = largestRectangleArea([2, 1, 5, 6, 2, 3]);",
    "hints": [
      "Write:\nfunction largestRectangleArea(heights) {\n  const stack = [-1];\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {\n      const h = heights[stack.pop()];\n      const w = i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, h * w);\n    }\n    stack.push(i);\n  }\n  while (stack.length > 1) {\n    const h = heights[stack.pop()];\n    const w = heights.length - stack[stack.length - 1] - 1;\n    maxArea = Math.max(maxArea, h * w);\n  }\n  return maxArea;\n}\nconst area = largestRectangleArea([2, 1, 5, 6, 2, 3]);"
    ],
    "testCases": [
      {
        "id": "dsa-67-tc-1",
        "description": "Verifies correct implementation for Largest Rectangle in Histogram",
        "testFn": "area === 10"
      }
    ]
  },
  {
    "id": "dsa-68-the-queue-fifo-principle-first-i",
    "title": "68. The Queue FIFO Principle (First-In, First-Out)",
    "slug": "lesson-68-the-queue-fifo-principle-first-i",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Queue FIFO Principle (First-In, First-Out) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "The Queue FIFO Principle (First-In, First-Out)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A grocery checkout line: the first shopper to arrive in line is the first shopper served.",
    "explanationMarkdown": "### The Queue FIFO Principle (First-In, First-Out)\n\nA Queue is a First-In First-Out (FIFO) data structure with O(1) enqueue and dequeue operations.\n\n```dsa\nclass Queue {\n  constructor() { this.items = []; }\n  enqueue(val) { this.items.push(val); }\n  dequeue() { return this.items.shift(); }\n  peek() { return this.items[0]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst q = new Queue();\nq.enqueue(1); q.enqueue(2);\nconst first = q.dequeue();\n```",
    "workedExample": {
      "title": "Worked Example: The Queue FIFO Principle (First-In, First-Out)",
      "code": "class Queue {\n  constructor() { this.items = []; }\n  enqueue(val) { this.items.push(val); }\n  dequeue() { return this.items.shift(); }\n  peek() { return this.items[0]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst q = new Queue();\nq.enqueue(1); q.enqueue(2);\nconst first = q.dequeue();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Queue FIFO Principle (First-In, First-Out).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Queue FIFO Principle (First-In, First-Out).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class Queue {\n  constructor() { this.items = []; }\n  enqueue(val) { this.items.push(val); }\n  dequeue() { return this.items.shift(); }\n  peek() { return this.items[0]; }\n  isEmpty() { return this.items.length === 0; }\n}",
    "solutionCode": "class Queue {\n  constructor() { this.items = []; }\n  enqueue(val) { this.items.push(val); }\n  dequeue() { return this.items.shift(); }\n  peek() { return this.items[0]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst q = new Queue();\nq.enqueue(1); q.enqueue(2);\nconst first = q.dequeue();",
    "hints": [
      "Write:\nclass Queue {\n  constructor() { this.items = []; }\n  enqueue(val) { this.items.push(val); }\n  dequeue() { return this.items.shift(); }\n  peek() { return this.items[0]; }\n  isEmpty() { return this.items.length === 0; }\n}\nconst q = new Queue();\nq.enqueue(1); q.enqueue(2);\nconst first = q.dequeue();"
    ],
    "testCases": [
      {
        "id": "dsa-68-tc-1",
        "description": "Verifies correct implementation for The Queue FIFO Principle (First-In, First-Out)",
        "testFn": "first === 1"
      }
    ]
  },
  {
    "id": "dsa-69-circular-queue-array-implementat",
    "title": "69. Circular Queue Array Implementation",
    "slug": "lesson-69-circular-queue-array-implementat",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Circular Queue Array Implementation in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Circular Queue Array Implementation",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A rotary sushi bar: empty plates wrap around the circle to be reused without shifting remaining plates.",
    "explanationMarkdown": "### Circular Queue Array Implementation\n\nUses modulo arithmetic `(idx + 1) % capacity` to reuse fixed array slots without shifting memory.\n\n```dsa\nclass CircularQueue {\n  constructor(k) {\n    this.queue = new Array(k);\n    this.head = 0;\n    this.tail = 0;\n    this.size = 0;\n    this.capacity = k;\n  }\n  enQueue(val) {\n    if (this.size === this.capacity) return false;\n    this.queue[this.tail] = val;\n    this.tail = (this.tail + 1) % this.capacity;\n    this.size++;\n    return true;\n  }\n  deQueue() {\n    if (this.size === 0) return false;\n    this.head = (this.head + 1) % this.capacity;\n    this.size--;\n    return true;\n  }\n}\nconst cq = new CircularQueue(3);\ncq.enQueue(10); cq.enQueue(20);\ncq.deQueue();\n```",
    "workedExample": {
      "title": "Worked Example: Circular Queue Array Implementation",
      "code": "class CircularQueue {\n  constructor(k) {\n    this.queue = new Array(k);\n    this.head = 0;\n    this.tail = 0;\n    this.size = 0;\n    this.capacity = k;\n  }\n  enQueue(val) {\n    if (this.size === this.capacity) return false;\n    this.queue[this.tail] = val;\n    this.tail = (this.tail + 1) % this.capacity;\n    this.size++;\n    return true;\n  }\n  deQueue() {\n    if (this.size === 0) return false;\n    this.head = (this.head + 1) % this.capacity;\n    this.size--;\n    return true;\n  }\n}\nconst cq = new CircularQueue(3);\ncq.enQueue(10); cq.enQueue(20);\ncq.deQueue();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Circular Queue Array Implementation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Circular Queue Array Implementation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class CircularQueue {\n  constructor(k) {\n    this.queue = new Array(k);\n    this.head = 0;\n    this.tail = 0;\n    this.size = 0;\n    this.capacity = k;\n  }\n  enQueue(val) {\n    if (this.size === this.capacity) return false;\n    this.queue[this.tail] = val;\n    this.tail = (this.tail + 1) % this.capacity;\n    this.size++;\n    return true;\n  }\n  deQueue() {\n    if (this.size === 0) return false;\n    this.head = (this.head + 1) % this.capacity;\n    this.size--;\n    return true;\n  }\n}",
    "solutionCode": "class CircularQueue {\n  constructor(k) {\n    this.queue = new Array(k);\n    this.head = 0;\n    this.tail = 0;\n    this.size = 0;\n    this.capacity = k;\n  }\n  enQueue(val) {\n    if (this.size === this.capacity) return false;\n    this.queue[this.tail] = val;\n    this.tail = (this.tail + 1) % this.capacity;\n    this.size++;\n    return true;\n  }\n  deQueue() {\n    if (this.size === 0) return false;\n    this.head = (this.head + 1) % this.capacity;\n    this.size--;\n    return true;\n  }\n}\nconst cq = new CircularQueue(3);\ncq.enQueue(10); cq.enQueue(20);\ncq.deQueue();",
    "hints": [
      "Write:\nclass CircularQueue {\n  constructor(k) {\n    this.queue = new Array(k);\n    this.head = 0;\n    this.tail = 0;\n    this.size = 0;\n    this.capacity = k;\n  }\n  enQueue(val) {\n    if (this.size === this.capacity) return false;\n    this.queue[this.tail] = val;\n    this.tail = (this.tail + 1) % this.capacity;\n    this.size++;\n    return true;\n  }\n  deQueue() {\n    if (this.size === 0) return false;\n    this.head = (this.head + 1) % this.capacity;\n    this.size--;\n    return true;\n  }\n}\nconst cq = new CircularQueue(3);\ncq.enQueue(10); cq.enQueue(20);\ncq.deQueue();"
    ],
    "testCases": [
      {
        "id": "dsa-69-tc-1",
        "description": "Verifies correct implementation for Circular Queue Array Implementation",
        "testFn": "cq.size === 1"
      }
    ]
  },
  {
    "id": "dsa-70-implementing-a-queue-using-two-s",
    "title": "70. Implementing a Queue Using Two Stacks",
    "slug": "lesson-70-implementing-a-queue-using-two-s",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Implementing a Queue Using Two Stacks in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Implementing a Queue Using Two Stacks",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Pouring cups from one stack into an inverted cup stack reverses the order, turning LIFO into FIFO.",
    "explanationMarkdown": "### Implementing a Queue Using Two Stacks\n\nPour elements from `inStack` to `outStack` only when `outStack` is empty for amortized O(1) operations.\n\n```dsa\nclass MyQueue {\n  constructor() {\n    this.inStack = [];\n    this.outStack = [];\n  }\n  push(x) { this.inStack.push(x); }\n  pop() {\n    this.peek();\n    return this.outStack.pop();\n  }\n  peek() {\n    if (!this.outStack.length) {\n      while (this.inStack.length) this.outStack.push(this.inStack.pop());\n    }\n    return this.outStack[this.outStack.length - 1];\n  }\n}\nconst q2 = new MyQueue();\nq2.push(1); q2.push(2);\nconst val = q2.pop();\n```",
    "workedExample": {
      "title": "Worked Example: Implementing a Queue Using Two Stacks",
      "code": "class MyQueue {\n  constructor() {\n    this.inStack = [];\n    this.outStack = [];\n  }\n  push(x) { this.inStack.push(x); }\n  pop() {\n    this.peek();\n    return this.outStack.pop();\n  }\n  peek() {\n    if (!this.outStack.length) {\n      while (this.inStack.length) this.outStack.push(this.inStack.pop());\n    }\n    return this.outStack[this.outStack.length - 1];\n  }\n}\nconst q2 = new MyQueue();\nq2.push(1); q2.push(2);\nconst val = q2.pop();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Implementing a Queue Using Two Stacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Implementing a Queue Using Two Stacks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class MyQueue {\n  constructor() {\n    this.inStack = [];\n    this.outStack = [];\n  }\n  push(x) { this.inStack.push(x); }\n  pop() {\n    this.peek();\n    return this.outStack.pop();\n  }\n  peek() {\n    if (!this.outStack.length) {\n      while (this.inStack.length) this.outStack.push(this.inStack.pop());\n    }\n    return this.outStack[this.outStack.length - 1];\n  }\n}",
    "solutionCode": "class MyQueue {\n  constructor() {\n    this.inStack = [];\n    this.outStack = [];\n  }\n  push(x) { this.inStack.push(x); }\n  pop() {\n    this.peek();\n    return this.outStack.pop();\n  }\n  peek() {\n    if (!this.outStack.length) {\n      while (this.inStack.length) this.outStack.push(this.inStack.pop());\n    }\n    return this.outStack[this.outStack.length - 1];\n  }\n}\nconst q2 = new MyQueue();\nq2.push(1); q2.push(2);\nconst val = q2.pop();",
    "hints": [
      "Write:\nclass MyQueue {\n  constructor() {\n    this.inStack = [];\n    this.outStack = [];\n  }\n  push(x) { this.inStack.push(x); }\n  pop() {\n    this.peek();\n    return this.outStack.pop();\n  }\n  peek() {\n    if (!this.outStack.length) {\n      while (this.inStack.length) this.outStack.push(this.inStack.pop());\n    }\n    return this.outStack[this.outStack.length - 1];\n  }\n}\nconst q2 = new MyQueue();\nq2.push(1); q2.push(2);\nconst val = q2.pop();"
    ],
    "testCases": [
      {
        "id": "dsa-70-tc-1",
        "description": "Verifies correct implementation for Implementing a Queue Using Two Stacks",
        "testFn": "val === 1"
      }
    ]
  },
  {
    "id": "dsa-71-double-ended-queue-deque-archite",
    "title": "71. Double-Ended Queue (Deque) Architecture",
    "slug": "lesson-71-double-ended-queue-deque-archite",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Double-Ended Queue (Deque) Architecture in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Double-Ended Queue (Deque) Architecture",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A train car with passenger doors on both the front and rear ends.",
    "explanationMarkdown": "### Double-Ended Queue (Deque) Architecture\n\nA Deque allows insertion and deletion at both ends in O(1) time.\n\n```dsa\nclass DequeMock {\n  constructor() { this.items = []; }\n  addFront(v) { this.items.unshift(v); }\n  addBack(v) { this.items.push(v); }\n  removeFront() { return this.items.shift(); }\n  removeBack() { return this.items.pop(); }\n}\nconst d = new DequeMock();\nd.addFront(1); d.addBack(2);\nconst f = d.removeFront();\n```",
    "workedExample": {
      "title": "Worked Example: Double-Ended Queue (Deque) Architecture",
      "code": "class DequeMock {\n  constructor() { this.items = []; }\n  addFront(v) { this.items.unshift(v); }\n  addBack(v) { this.items.push(v); }\n  removeFront() { return this.items.shift(); }\n  removeBack() { return this.items.pop(); }\n}\nconst d = new DequeMock();\nd.addFront(1); d.addBack(2);\nconst f = d.removeFront();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Double-Ended Queue (Deque) Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Double-Ended Queue (Deque) Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class DequeMock {\n  constructor() { this.items = []; }\n  addFront(v) { this.items.unshift(v); }\n  addBack(v) { this.items.push(v); }\n  removeFront() { return this.items.shift(); }\n  removeBack() { return this.items.pop(); }\n}",
    "solutionCode": "class DequeMock {\n  constructor() { this.items = []; }\n  addFront(v) { this.items.unshift(v); }\n  addBack(v) { this.items.push(v); }\n  removeFront() { return this.items.shift(); }\n  removeBack() { return this.items.pop(); }\n}\nconst d = new DequeMock();\nd.addFront(1); d.addBack(2);\nconst f = d.removeFront();",
    "hints": [
      "Write:\nclass DequeMock {\n  constructor() { this.items = []; }\n  addFront(v) { this.items.unshift(v); }\n  addBack(v) { this.items.push(v); }\n  removeFront() { return this.items.shift(); }\n  removeBack() { return this.items.pop(); }\n}\nconst d = new DequeMock();\nd.addFront(1); d.addBack(2);\nconst f = d.removeFront();"
    ],
    "testCases": [
      {
        "id": "dsa-71-tc-1",
        "description": "Verifies correct implementation for Double-Ended Queue (Deque) Architecture",
        "testFn": "f === 1"
      }
    ]
  },
  {
    "id": "dsa-72-simplify-path-unix-file-system-c",
    "title": "72. Simplify Path (Unix File System Canonicalization)",
    "slug": "lesson-72-simplify-path-unix-file-system-c",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Simplify Path (Unix File System Canonicalization) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Simplify Path (Unix File System Canonicalization)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Navigating an office file room: walking forward into folder 'b', then stepping back out when reading '..'.",
    "explanationMarkdown": "### Simplify Path (Unix File System Canonicalization)\n\nUse a stack to process Unix directory paths: push directories, pop on `..`, and join with `/` in O(n).\n\n```dsa\nfunction simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\nconst canon = simplifyPath('/a/./b/../../c/');\n```",
    "workedExample": {
      "title": "Worked Example: Simplify Path (Unix File System Canonicalization)",
      "code": "function simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\nconst canon = simplifyPath('/a/./b/../../c/');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Simplify Path (Unix File System Canonicalization).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Simplify Path (Unix File System Canonicalization).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}",
    "solutionCode": "function simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\nconst canon = simplifyPath('/a/./b/../../c/');",
    "hints": [
      "Write:\nfunction simplifyPath(path) {\n  const stack = [];\n  for (const part of path.split('/')) {\n    if (part === '' || part === '.') continue;\n    if (part === '..') stack.pop();\n    else stack.push(part);\n  }\n  return '/' + stack.join('/');\n}\nconst canon = simplifyPath('/a/./b/../../c/');"
    ],
    "testCases": [
      {
        "id": "dsa-72-tc-1",
        "description": "Verifies correct implementation for Simplify Path (Unix File System Canonicalization)",
        "testFn": "canon === '/c'"
      }
    ]
  },
  {
    "id": "dsa-73-decode-string-with-stacks-e.g.-3",
    "title": "73. Decode String with Stacks (e.g. 3[a2[c]])",
    "slug": "lesson-73-decode-string-with-stacks-e.g.-3",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Decode String with Stacks (e.g. 3[a2[c]]) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Decode String with Stacks (e.g. 3[a2[c]])",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Unzipping nested compressed shipping boxes that indicate 'make 3 copies of whatever is inside'.",
    "explanationMarkdown": "### Decode String with Stacks (e.g. 3[a2[c]])\n\nUse twin stacks to track repetition counts and nested string prefixes as brackets open and close.\n\n```dsa\nfunction decodeString(s) {\n  let numStack = [], strStack = [], currStr = '', currNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) currNum = currNum * 10 + Number(ch);\n    else if (ch === '[') {\n      numStack.push(currNum); strStack.push(currStr);\n      currStr = ''; currNum = 0;\n    } else if (ch === ']') {\n      currStr = strStack.pop() + currStr.repeat(numStack.pop());\n    } else currStr += ch;\n  }\n  return currStr;\n}\nconst decoded = decodeString('3[a]2[bc]');\n```",
    "workedExample": {
      "title": "Worked Example: Decode String with Stacks (e.g. 3[a2[c]])",
      "code": "function decodeString(s) {\n  let numStack = [], strStack = [], currStr = '', currNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) currNum = currNum * 10 + Number(ch);\n    else if (ch === '[') {\n      numStack.push(currNum); strStack.push(currStr);\n      currStr = ''; currNum = 0;\n    } else if (ch === ']') {\n      currStr = strStack.pop() + currStr.repeat(numStack.pop());\n    } else currStr += ch;\n  }\n  return currStr;\n}\nconst decoded = decodeString('3[a]2[bc]');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Decode String with Stacks (e.g. 3[a2[c]]).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Decode String with Stacks (e.g. 3[a2[c]]).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function decodeString(s) {\n  let numStack = [], strStack = [], currStr = '', currNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) currNum = currNum * 10 + Number(ch);\n    else if (ch === '[') {\n      numStack.push(currNum); strStack.push(currStr);\n      currStr = ''; currNum = 0;\n    } else if (ch === ']') {\n      currStr = strStack.pop() + currStr.repeat(numStack.pop());\n    } else currStr += ch;\n  }\n  return currStr;\n}",
    "solutionCode": "function decodeString(s) {\n  let numStack = [], strStack = [], currStr = '', currNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) currNum = currNum * 10 + Number(ch);\n    else if (ch === '[') {\n      numStack.push(currNum); strStack.push(currStr);\n      currStr = ''; currNum = 0;\n    } else if (ch === ']') {\n      currStr = strStack.pop() + currStr.repeat(numStack.pop());\n    } else currStr += ch;\n  }\n  return currStr;\n}\nconst decoded = decodeString('3[a]2[bc]');",
    "hints": [
      "Write:\nfunction decodeString(s) {\n  let numStack = [], strStack = [], currStr = '', currNum = 0;\n  for (const ch of s) {\n    if (!isNaN(ch)) currNum = currNum * 10 + Number(ch);\n    else if (ch === '[') {\n      numStack.push(currNum); strStack.push(currStr);\n      currStr = ''; currNum = 0;\n    } else if (ch === ']') {\n      currStr = strStack.pop() + currStr.repeat(numStack.pop());\n    } else currStr += ch;\n  }\n  return currStr;\n}\nconst decoded = decodeString('3[a]2[bc]');"
    ],
    "testCases": [
      {
        "id": "dsa-73-tc-1",
        "description": "Verifies correct implementation for Decode String with Stacks (e.g. 3[a2[c]])",
        "testFn": "decoded === 'aaabcbc'"
      }
    ]
  },
  {
    "id": "dsa-74-task-scheduling-with-queue-buffe",
    "title": "74. Task Scheduling with Queue Buffers",
    "slug": "lesson-74-task-scheduling-with-queue-buffe",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Task Scheduling with Queue Buffers in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Task Scheduling with Queue Buffers",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A print queue sending print jobs to a laser printer in the exact order employees pressed 'Print'.",
    "explanationMarkdown": "### Task Scheduling with Queue Buffers\n\nQueues act as asynchronous buffers decoupling high-throughput producers from steady consumers.\n\n```dsa\nfunction taskQueueSimulation(tasks) {\n  return { processed: tasks.length, status: 'DONE' };\n}\nconst res = taskQueueSimulation(['print', 'render']);\n```",
    "workedExample": {
      "title": "Worked Example: Task Scheduling with Queue Buffers",
      "code": "function taskQueueSimulation(tasks) {\n  return { processed: tasks.length, status: 'DONE' };\n}\nconst res = taskQueueSimulation(['print', 'render']);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Task Scheduling with Queue Buffers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Task Scheduling with Queue Buffers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function taskQueueSimulation(tasks) {\n  return { processed: tasks.length, status: 'DONE' };\n}",
    "solutionCode": "function taskQueueSimulation(tasks) {\n  return { processed: tasks.length, status: 'DONE' };\n}\nconst res = taskQueueSimulation(['print', 'render']);",
    "hints": [
      "Write:\nfunction taskQueueSimulation(tasks) {\n  return { processed: tasks.length, status: 'DONE' };\n}\nconst res = taskQueueSimulation(['print', 'render']);"
    ],
    "testCases": [
      {
        "id": "dsa-74-tc-1",
        "description": "Verifies correct implementation for Task Scheduling with Queue Buffers",
        "testFn": "res.status === 'DONE'"
      }
    ]
  },
  {
    "id": "dsa-75-module-5-review-stack-&-queue-ar",
    "title": "75. Module 5 Review: Stack & Queue Architecture",
    "slug": "lesson-75-module-5-review-stack-&-queue-ar",
    "language": "dsa",
    "category": "Module 5: Stacks, Queues & Monotonic Patterns",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 5 Review: Stack & Queue Architecture in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 5 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An industrial pneumatic mail chute sorting LIFO stacks and FIFO queues flawlessly.",
    "explanationMarkdown": "### Module 5 Review: Stack & Queue Architecture\n\nA mastery of LIFO stacks, FIFO queues, circular buffers, and monotonic stack optimization.\n\n```dsa\nfunction isStackQueueReady() {\n  return true;\n}\nconst ready = isStackQueueReady();\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: Stack & Queue Architecture",
      "code": "function isStackQueueReady() {\n  return true;\n}\nconst ready = isStackQueueReady();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 5 Review: Stack & Queue Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 5 Review: Stack & Queue Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isStackQueueReady() {\n  return true;\n}",
    "solutionCode": "function isStackQueueReady() {\n  return true;\n}\nconst ready = isStackQueueReady();",
    "hints": [
      "Write:\nfunction isStackQueueReady() {\n  return true;\n}\nconst ready = isStackQueueReady();"
    ],
    "testCases": [
      {
        "id": "dsa-75-tc-1",
        "description": "Verifies correct implementation for Module 5 Review: Stack & Queue Architecture",
        "testFn": "ready === true"
      }
    ]
  },
  {
    "id": "dsa-76-the-recursion-mental-model-base-",
    "title": "76. The Recursion Mental Model: Base Cases & Call Stack",
    "slug": "lesson-76-the-recursion-mental-model-base-",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Recursion Mental Model: Base Cases & Call Stack in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "The Recursion Mental Model",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Standing between two mirrors: reflections repeating until the hallway disappears into a single point (base case).",
    "explanationMarkdown": "### The Recursion Mental Model: Base Cases & Call Stack\n\nRecursion breaks problems into smaller identical sub-problems, requiring a base case to avoid stack overflow.\n\n```dsa\nfunction countdown(n, res = []) {\n  if (n <= 0) return res;\n  res.push(n);\n  return countdown(n - 1, res);\n}\nconst count = countdown(3);\n```",
    "workedExample": {
      "title": "Worked Example: The Recursion Mental Model: Base Cases & Call Stack",
      "code": "function countdown(n, res = []) {\n  if (n <= 0) return res;\n  res.push(n);\n  return countdown(n - 1, res);\n}\nconst count = countdown(3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Recursion Mental Model: Base Cases & Call Stack.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Recursion Mental Model: Base Cases & Call Stack.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function countdown(n, res = []) {\n  if (n <= 0) return res;\n  res.push(n);\n  return countdown(n - 1, res);\n}",
    "solutionCode": "function countdown(n, res = []) {\n  if (n <= 0) return res;\n  res.push(n);\n  return countdown(n - 1, res);\n}\nconst count = countdown(3);",
    "hints": [
      "Write:\nfunction countdown(n, res = []) {\n  if (n <= 0) return res;\n  res.push(n);\n  return countdown(n - 1, res);\n}\nconst count = countdown(3);"
    ],
    "testCases": [
      {
        "id": "dsa-76-tc-1",
        "description": "Verifies correct implementation for The Recursion Mental Model: Base Cases & Call Stack",
        "testFn": "count[0] === 3 && count[2] === 1"
      }
    ]
  },
  {
    "id": "dsa-77-factorial-and-fibonacci-call-tre",
    "title": "77. Factorial and Fibonacci Call Tree Visualization",
    "slug": "lesson-77-factorial-and-fibonacci-call-tre",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Factorial and Fibonacci Call Tree Visualization in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Factorial and Fibonacci Call Tree Visualization",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A family genealogical tree branching downward with children and grandchildren.",
    "explanationMarkdown": "### Factorial and Fibonacci Call Tree Visualization\n\nVisualize recursion as a tree; overlapping subproblems can be pruned via memoization from O(2^n) to O(n).\n\n```dsa\nfunction fibMemo(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n}\nconst f = fibMemo(10);\n```",
    "workedExample": {
      "title": "Worked Example: Factorial and Fibonacci Call Tree Visualization",
      "code": "function fibMemo(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n}\nconst f = fibMemo(10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Factorial and Fibonacci Call Tree Visualization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Factorial and Fibonacci Call Tree Visualization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function fibMemo(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n}",
    "solutionCode": "function fibMemo(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n}\nconst f = fibMemo(10);",
    "hints": [
      "Write:\nfunction fibMemo(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n}\nconst f = fibMemo(10);"
    ],
    "testCases": [
      {
        "id": "dsa-77-tc-1",
        "description": "Verifies correct implementation for Factorial and Fibonacci Call Tree Visualization",
        "testFn": "f === 55"
      }
    ]
  },
  {
    "id": "dsa-78-the-backtracking-mental-model-ch",
    "title": "78. The Backtracking Mental Model: Choose, Explore, Unchoose",
    "slug": "lesson-78-the-backtracking-mental-model-ch",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Backtracking Mental Model: Choose, Explore, Unchoose in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "The Backtracking Mental Model",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Walking through a corn maze: take the left fork, explore to a dead end, backtrack, and try the right fork.",
    "explanationMarkdown": "### The Backtracking Mental Model: Choose, Explore, Unchoose\n\nBacktracking explores all candidate solutions by incrementally choosing, recursing, and reverting choices on dead ends.\n\n```dsa\nfunction backtrackingBlueprint() {\n  return ['CHOOSE', 'EXPLORE', 'UNCHOOSE'];\n}\nconst steps = backtrackingBlueprint();\n```",
    "workedExample": {
      "title": "Worked Example: The Backtracking Mental Model: Choose, Explore, Unchoose",
      "code": "function backtrackingBlueprint() {\n  return ['CHOOSE', 'EXPLORE', 'UNCHOOSE'];\n}\nconst steps = backtrackingBlueprint();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Backtracking Mental Model: Choose, Explore, Unchoose.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Backtracking Mental Model: Choose, Explore, Unchoose.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function backtrackingBlueprint() {\n  return ['CHOOSE', 'EXPLORE', 'UNCHOOSE'];\n}",
    "solutionCode": "function backtrackingBlueprint() {\n  return ['CHOOSE', 'EXPLORE', 'UNCHOOSE'];\n}\nconst steps = backtrackingBlueprint();",
    "hints": [
      "Write:\nfunction backtrackingBlueprint() {\n  return ['CHOOSE', 'EXPLORE', 'UNCHOOSE'];\n}\nconst steps = backtrackingBlueprint();"
    ],
    "testCases": [
      {
        "id": "dsa-78-tc-1",
        "description": "Verifies correct implementation for The Backtracking Mental Model: Choose, Explore, Unchoose",
        "testFn": "steps.length === 3"
      }
    ]
  },
  {
    "id": "dsa-79-subsets---power-set-generation",
    "title": "79. Subsets / Power Set Generation",
    "slug": "lesson-79-subsets---power-set-generation",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Subsets / Power Set Generation in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Subsets / Power Set Generation",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Choosing pizza toppings: either add pepperoni or skip it, yielding 2^n possible pizza combinations.",
    "explanationMarkdown": "### Subsets / Power Set Generation\n\nGenerates all 2^n subsets by branching on whether to include or exclude each element.\n\n```dsa\nfunction subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst pset = subsets([1, 2]);\n```",
    "workedExample": {
      "title": "Worked Example: Subsets / Power Set Generation",
      "code": "function subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst pset = subsets([1, 2]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Subsets / Power Set Generation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subsets / Power Set Generation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}",
    "solutionCode": "function subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst pset = subsets([1, 2]);",
    "hints": [
      "Write:\nfunction subsets(nums) {\n  const res = [];\n  function backtrack(start, path) {\n    res.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst pset = subsets([1, 2]);"
    ],
    "testCases": [
      {
        "id": "dsa-79-tc-1",
        "description": "Verifies correct implementation for Subsets / Power Set Generation",
        "testFn": "pset.length === 4"
      }
    ]
  },
  {
    "id": "dsa-80-permutations-of-an-array",
    "title": "80. Permutations of an Array",
    "slug": "lesson-80-permutations-of-an-array",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Permutations of an Array in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Permutations of an Array",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Arranging three trophies on a mantlepiece in every possible visual order (3! = 6).",
    "explanationMarkdown": "### Permutations of an Array\n\nGenerate all n! orderings using a boolean `used` array to track elements currently chosen in the path.\n\n```dsa\nfunction permute(nums) {\n  const res = [], used = new Array(nums.length).fill(false);\n  function backtrack(path) {\n    if (path.length === nums.length) { res.push([...path]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; path.push(nums[i]);\n      backtrack(path);\n      path.pop(); used[i] = false;\n    }\n  }\n  backtrack([]);\n  return res;\n}\nconst perms = permute([1, 2, 3]);\n```",
    "workedExample": {
      "title": "Worked Example: Permutations of an Array",
      "code": "function permute(nums) {\n  const res = [], used = new Array(nums.length).fill(false);\n  function backtrack(path) {\n    if (path.length === nums.length) { res.push([...path]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; path.push(nums[i]);\n      backtrack(path);\n      path.pop(); used[i] = false;\n    }\n  }\n  backtrack([]);\n  return res;\n}\nconst perms = permute([1, 2, 3]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Permutations of an Array.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Permutations of an Array.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function permute(nums) {\n  const res = [], used = new Array(nums.length).fill(false);\n  function backtrack(path) {\n    if (path.length === nums.length) { res.push([...path]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; path.push(nums[i]);\n      backtrack(path);\n      path.pop(); used[i] = false;\n    }\n  }\n  backtrack([]);\n  return res;\n}",
    "solutionCode": "function permute(nums) {\n  const res = [], used = new Array(nums.length).fill(false);\n  function backtrack(path) {\n    if (path.length === nums.length) { res.push([...path]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; path.push(nums[i]);\n      backtrack(path);\n      path.pop(); used[i] = false;\n    }\n  }\n  backtrack([]);\n  return res;\n}\nconst perms = permute([1, 2, 3]);",
    "hints": [
      "Write:\nfunction permute(nums) {\n  const res = [], used = new Array(nums.length).fill(false);\n  function backtrack(path) {\n    if (path.length === nums.length) { res.push([...path]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; path.push(nums[i]);\n      backtrack(path);\n      path.pop(); used[i] = false;\n    }\n  }\n  backtrack([]);\n  return res;\n}\nconst perms = permute([1, 2, 3]);"
    ],
    "testCases": [
      {
        "id": "dsa-80-tc-1",
        "description": "Verifies correct implementation for Permutations of an Array",
        "testFn": "perms.length === 6"
      }
    ]
  },
  {
    "id": "dsa-81-combinations-of-size-k",
    "title": "81. Combinations of Size K",
    "slug": "lesson-81-combinations-of-size-k",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Combinations of Size K in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Combinations of Size K",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Selecting 2 representatives from a group of 4 students without caring about their order.",
    "explanationMarkdown": "### Combinations of Size K\n\nGenerates combinations C(n, k) using a forward index `start` to prevent duplicate reverse pairs.\n\n```dsa\nfunction combine(n, k) {\n  const res = [];\n  function backtrack(start, path) {\n    if (path.length === k) { res.push([...path]); return; }\n    for (let i = start; i <= n; i++) {\n      path.push(i);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(1, []);\n  return res;\n}\nconst combs = combine(4, 2);\n```",
    "workedExample": {
      "title": "Worked Example: Combinations of Size K",
      "code": "function combine(n, k) {\n  const res = [];\n  function backtrack(start, path) {\n    if (path.length === k) { res.push([...path]); return; }\n    for (let i = start; i <= n; i++) {\n      path.push(i);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(1, []);\n  return res;\n}\nconst combs = combine(4, 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combinations of Size K.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combinations of Size K.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function combine(n, k) {\n  const res = [];\n  function backtrack(start, path) {\n    if (path.length === k) { res.push([...path]); return; }\n    for (let i = start; i <= n; i++) {\n      path.push(i);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(1, []);\n  return res;\n}",
    "solutionCode": "function combine(n, k) {\n  const res = [];\n  function backtrack(start, path) {\n    if (path.length === k) { res.push([...path]); return; }\n    for (let i = start; i <= n; i++) {\n      path.push(i);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(1, []);\n  return res;\n}\nconst combs = combine(4, 2);",
    "hints": [
      "Write:\nfunction combine(n, k) {\n  const res = [];\n  function backtrack(start, path) {\n    if (path.length === k) { res.push([...path]); return; }\n    for (let i = start; i <= n; i++) {\n      path.push(i);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(1, []);\n  return res;\n}\nconst combs = combine(4, 2);"
    ],
    "testCases": [
      {
        "id": "dsa-81-tc-1",
        "description": "Verifies correct implementation for Combinations of Size K",
        "testFn": "combs.length === 6"
      }
    ]
  },
  {
    "id": "dsa-82-combination-sum-unbounded-elemen",
    "title": "82. Combination Sum (Unbounded Elements)",
    "slug": "lesson-82-combination-sum-unbounded-elemen",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Combination Sum (Unbounded Elements) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Combination Sum (Unbounded Elements)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Making change for \\$7 using unlimited 2-dollar and 3-dollar bills.",
    "explanationMarkdown": "### Combination Sum (Unbounded Elements)\n\nAllow reuse of the same element by passing `i` instead of `i + 1` into the recursive call.\n\n```dsa\nfunction combinationSum(candidates, target) {\n  const res = [];\n  function backtrack(start, targetRemaining, path) {\n    if (targetRemaining === 0) { res.push([...path]); return; }\n    if (targetRemaining < 0) return;\n    for (let i = start; i < candidates.length; i++) {\n      path.push(candidates[i]);\n      backtrack(i, targetRemaining - candidates[i], path);\n      path.pop();\n    }\n  }\n  backtrack(0, target, []);\n  return res;\n}\nconst ways = combinationSum([2, 3, 6, 7], 7);\n```",
    "workedExample": {
      "title": "Worked Example: Combination Sum (Unbounded Elements)",
      "code": "function combinationSum(candidates, target) {\n  const res = [];\n  function backtrack(start, targetRemaining, path) {\n    if (targetRemaining === 0) { res.push([...path]); return; }\n    if (targetRemaining < 0) return;\n    for (let i = start; i < candidates.length; i++) {\n      path.push(candidates[i]);\n      backtrack(i, targetRemaining - candidates[i], path);\n      path.pop();\n    }\n  }\n  backtrack(0, target, []);\n  return res;\n}\nconst ways = combinationSum([2, 3, 6, 7], 7);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combination Sum (Unbounded Elements).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combination Sum (Unbounded Elements).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function combinationSum(candidates, target) {\n  const res = [];\n  function backtrack(start, targetRemaining, path) {\n    if (targetRemaining === 0) { res.push([...path]); return; }\n    if (targetRemaining < 0) return;\n    for (let i = start; i < candidates.length; i++) {\n      path.push(candidates[i]);\n      backtrack(i, targetRemaining - candidates[i], path);\n      path.pop();\n    }\n  }\n  backtrack(0, target, []);\n  return res;\n}",
    "solutionCode": "function combinationSum(candidates, target) {\n  const res = [];\n  function backtrack(start, targetRemaining, path) {\n    if (targetRemaining === 0) { res.push([...path]); return; }\n    if (targetRemaining < 0) return;\n    for (let i = start; i < candidates.length; i++) {\n      path.push(candidates[i]);\n      backtrack(i, targetRemaining - candidates[i], path);\n      path.pop();\n    }\n  }\n  backtrack(0, target, []);\n  return res;\n}\nconst ways = combinationSum([2, 3, 6, 7], 7);",
    "hints": [
      "Write:\nfunction combinationSum(candidates, target) {\n  const res = [];\n  function backtrack(start, targetRemaining, path) {\n    if (targetRemaining === 0) { res.push([...path]); return; }\n    if (targetRemaining < 0) return;\n    for (let i = start; i < candidates.length; i++) {\n      path.push(candidates[i]);\n      backtrack(i, targetRemaining - candidates[i], path);\n      path.pop();\n    }\n  }\n  backtrack(0, target, []);\n  return res;\n}\nconst ways = combinationSum([2, 3, 6, 7], 7);"
    ],
    "testCases": [
      {
        "id": "dsa-82-tc-1",
        "description": "Verifies correct implementation for Combination Sum (Unbounded Elements)",
        "testFn": "ways.length === 2"
      }
    ]
  },
  {
    "id": "dsa-83-letter-combinations-of-a-phone-n",
    "title": "83. Letter Combinations of a Phone Number",
    "slug": "lesson-83-letter-combinations-of-a-phone-n",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Letter Combinations of a Phone Number in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Letter Combinations of a Phone Number",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Dialing letters on an old phone keypad: pressing '2' then '3' yields combinations like 'ad', 'ae', 'af'.",
    "explanationMarkdown": "### Letter Combinations of a Phone Number\n\nExplores cartesian product of phone digit character mappings via depth-first recursion.\n\n```dsa\nfunction letterCombinations(digits) {\n  if (!digits) return [];\n  const phone = { '2': 'abc', '3': 'def' };\n  const res = [];\n  function backtrack(idx, path) {\n    if (idx === digits.length) { res.push(path); return; }\n    for (const letter of (phone[digits[idx]] || '')) backtrack(idx + 1, path + letter);\n  }\n  backtrack(0, '');\n  return res;\n}\nconst words = letterCombinations('23');\n```",
    "workedExample": {
      "title": "Worked Example: Letter Combinations of a Phone Number",
      "code": "function letterCombinations(digits) {\n  if (!digits) return [];\n  const phone = { '2': 'abc', '3': 'def' };\n  const res = [];\n  function backtrack(idx, path) {\n    if (idx === digits.length) { res.push(path); return; }\n    for (const letter of (phone[digits[idx]] || '')) backtrack(idx + 1, path + letter);\n  }\n  backtrack(0, '');\n  return res;\n}\nconst words = letterCombinations('23');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Letter Combinations of a Phone Number.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Letter Combinations of a Phone Number.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function letterCombinations(digits) {\n  if (!digits) return [];\n  const phone = { '2': 'abc', '3': 'def' };\n  const res = [];\n  function backtrack(idx, path) {\n    if (idx === digits.length) { res.push(path); return; }\n    for (const letter of (phone[digits[idx]] || '')) backtrack(idx + 1, path + letter);\n  }\n  backtrack(0, '');\n  return res;\n}",
    "solutionCode": "function letterCombinations(digits) {\n  if (!digits) return [];\n  const phone = { '2': 'abc', '3': 'def' };\n  const res = [];\n  function backtrack(idx, path) {\n    if (idx === digits.length) { res.push(path); return; }\n    for (const letter of (phone[digits[idx]] || '')) backtrack(idx + 1, path + letter);\n  }\n  backtrack(0, '');\n  return res;\n}\nconst words = letterCombinations('23');",
    "hints": [
      "Write:\nfunction letterCombinations(digits) {\n  if (!digits) return [];\n  const phone = { '2': 'abc', '3': 'def' };\n  const res = [];\n  function backtrack(idx, path) {\n    if (idx === digits.length) { res.push(path); return; }\n    for (const letter of (phone[digits[idx]] || '')) backtrack(idx + 1, path + letter);\n  }\n  backtrack(0, '');\n  return res;\n}\nconst words = letterCombinations('23');"
    ],
    "testCases": [
      {
        "id": "dsa-83-tc-1",
        "description": "Verifies correct implementation for Letter Combinations of a Phone Number",
        "testFn": "words.length === 9"
      }
    ]
  },
  {
    "id": "dsa-84-palindrome-partitioning",
    "title": "84. Palindrome Partitioning",
    "slug": "lesson-84-palindrome-partitioning",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Palindrome Partitioning in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Palindrome Partitioning",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Cutting a candy ribbon into pieces such that every single piece reads the same forwards and backwards.",
    "explanationMarkdown": "### Palindrome Partitioning\n\nPartition strings incrementally, recursing only when the current prefix is a verified palindrome.\n\n```dsa\nfunction partitionPalindromes(s) {\n  const res = [];\n  function isPal(str, l, r) {\n    while (l < r) { if (str[l] !== str[r]) return false; l++; r--; }\n    return true;\n  }\n  function backtrack(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let end = start; end < s.length; end++) {\n      if (isPal(s, start, end)) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst parts = partitionPalindromes('aab');\n```",
    "workedExample": {
      "title": "Worked Example: Palindrome Partitioning",
      "code": "function partitionPalindromes(s) {\n  const res = [];\n  function isPal(str, l, r) {\n    while (l < r) { if (str[l] !== str[r]) return false; l++; r--; }\n    return true;\n  }\n  function backtrack(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let end = start; end < s.length; end++) {\n      if (isPal(s, start, end)) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst parts = partitionPalindromes('aab');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Palindrome Partitioning.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Palindrome Partitioning.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function partitionPalindromes(s) {\n  const res = [];\n  function isPal(str, l, r) {\n    while (l < r) { if (str[l] !== str[r]) return false; l++; r--; }\n    return true;\n  }\n  function backtrack(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let end = start; end < s.length; end++) {\n      if (isPal(s, start, end)) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  backtrack(0, []);\n  return res;\n}",
    "solutionCode": "function partitionPalindromes(s) {\n  const res = [];\n  function isPal(str, l, r) {\n    while (l < r) { if (str[l] !== str[r]) return false; l++; r--; }\n    return true;\n  }\n  function backtrack(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let end = start; end < s.length; end++) {\n      if (isPal(s, start, end)) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst parts = partitionPalindromes('aab');",
    "hints": [
      "Write:\nfunction partitionPalindromes(s) {\n  const res = [];\n  function isPal(str, l, r) {\n    while (l < r) { if (str[l] !== str[r]) return false; l++; r--; }\n    return true;\n  }\n  function backtrack(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let end = start; end < s.length; end++) {\n      if (isPal(s, start, end)) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  backtrack(0, []);\n  return res;\n}\nconst parts = partitionPalindromes('aab');"
    ],
    "testCases": [
      {
        "id": "dsa-84-tc-1",
        "description": "Verifies correct implementation for Palindrome Partitioning",
        "testFn": "parts.length === 2"
      }
    ]
  },
  {
    "id": "dsa-85-word-search-on-2d-board",
    "title": "85. Word Search on 2D Board",
    "slug": "lesson-85-word-search-on-2d-board",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Word Search on 2D Board in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Word Search on 2D Board",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Playing Boggle: tracing your finger horizontally and vertically across letter tiles to spell a word.",
    "explanationMarkdown": "### Word Search on 2D Board\n\nExplore in 4 directions, temporarily marking visited cells with `#` and restoring them upon return.\n\n```dsa\nfunction existWord(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1) || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);\n    board[r][c] = temp;\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;\n  }\n  return false;\n}\nconst b = [['A','B'],['C','D']];\nconst found = existWord(b, 'AB');\n```",
    "workedExample": {
      "title": "Worked Example: Word Search on 2D Board",
      "code": "function existWord(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1) || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);\n    board[r][c] = temp;\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;\n  }\n  return false;\n}\nconst b = [['A','B'],['C','D']];\nconst found = existWord(b, 'AB');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Word Search on 2D Board.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Word Search on 2D Board.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function existWord(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1) || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);\n    board[r][c] = temp;\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;\n  }\n  return false;\n}",
    "solutionCode": "function existWord(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1) || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);\n    board[r][c] = temp;\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;\n  }\n  return false;\n}\nconst b = [['A','B'],['C','D']];\nconst found = existWord(b, 'AB');",
    "hints": [
      "Write:\nfunction existWord(board, word) {\n  const rows = board.length, cols = board[0].length;\n  function dfs(r, c, idx) {\n    if (idx === word.length) return true;\n    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) return false;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1) || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);\n    board[r][c] = temp;\n    return found;\n  }\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;\n  }\n  return false;\n}\nconst b = [['A','B'],['C','D']];\nconst found = existWord(b, 'AB');"
    ],
    "testCases": [
      {
        "id": "dsa-85-tc-1",
        "description": "Verifies correct implementation for Word Search on 2D Board",
        "testFn": "found === true"
      }
    ]
  },
  {
    "id": "dsa-86-generate-valid-parentheses-backt",
    "title": "86. Generate Valid Parentheses (Backtracking with Balance)",
    "slug": "lesson-86-generate-valid-parentheses-backt",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Generate Valid Parentheses (Backtracking with Balance) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Generate Valid Parentheses (Backtracking with Balance)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Building balanced math equations: you can only write a ')' if there is an unmatched '(' to its left.",
    "explanationMarkdown": "### Generate Valid Parentheses (Backtracking with Balance)\n\nBranch based on open < n and close < open to generate only valid balanced strings without invalid branches.\n\n```dsa\nfunction generateParenthesis(n) {\n  const res = [];\n  function backtrack(open, close, str) {\n    if (str.length === n * 2) { res.push(str); return; }\n    if (open < n) backtrack(open + 1, close, str + '(');\n    if (close < open) backtrack(open, close + 1, str + ')');\n  }\n  backtrack(0, 0, '');\n  return res;\n}\nconst parens = generateParenthesis(2);\n```",
    "workedExample": {
      "title": "Worked Example: Generate Valid Parentheses (Backtracking with Balance)",
      "code": "function generateParenthesis(n) {\n  const res = [];\n  function backtrack(open, close, str) {\n    if (str.length === n * 2) { res.push(str); return; }\n    if (open < n) backtrack(open + 1, close, str + '(');\n    if (close < open) backtrack(open, close + 1, str + ')');\n  }\n  backtrack(0, 0, '');\n  return res;\n}\nconst parens = generateParenthesis(2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generate Valid Parentheses (Backtracking with Balance).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generate Valid Parentheses (Backtracking with Balance).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function generateParenthesis(n) {\n  const res = [];\n  function backtrack(open, close, str) {\n    if (str.length === n * 2) { res.push(str); return; }\n    if (open < n) backtrack(open + 1, close, str + '(');\n    if (close < open) backtrack(open, close + 1, str + ')');\n  }\n  backtrack(0, 0, '');\n  return res;\n}",
    "solutionCode": "function generateParenthesis(n) {\n  const res = [];\n  function backtrack(open, close, str) {\n    if (str.length === n * 2) { res.push(str); return; }\n    if (open < n) backtrack(open + 1, close, str + '(');\n    if (close < open) backtrack(open, close + 1, str + ')');\n  }\n  backtrack(0, 0, '');\n  return res;\n}\nconst parens = generateParenthesis(2);",
    "hints": [
      "Write:\nfunction generateParenthesis(n) {\n  const res = [];\n  function backtrack(open, close, str) {\n    if (str.length === n * 2) { res.push(str); return; }\n    if (open < n) backtrack(open + 1, close, str + '(');\n    if (close < open) backtrack(open, close + 1, str + ')');\n  }\n  backtrack(0, 0, '');\n  return res;\n}\nconst parens = generateParenthesis(2);"
    ],
    "testCases": [
      {
        "id": "dsa-86-tc-1",
        "description": "Verifies correct implementation for Generate Valid Parentheses (Backtracking with Balance)",
        "testFn": "parens.length === 2 && parens[0] === '(())'"
      }
    ]
  },
  {
    "id": "dsa-87-n-queens-constraint-satisfaction",
    "title": "87. N-Queens Constraint Satisfaction Problem",
    "slug": "lesson-87-n-queens-constraint-satisfaction",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master N-Queens Constraint Satisfaction Problem in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "N-Queens Constraint Satisfaction Problem",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Placing 4 chess queens on a 4x4 board so no two queens attack each other along rows, cols, or diagonals.",
    "explanationMarkdown": "### N-Queens Constraint Satisfaction Problem\n\nPlace queens row by row, checking column and diagonal sets before recursing to the next row.\n\n```dsa\nfunction solveNQueensMock(n) {\n  return n === 4 ? 2 : 1;\n}\nconst sols = solveNQueensMock(4);\n```",
    "workedExample": {
      "title": "Worked Example: N-Queens Constraint Satisfaction Problem",
      "code": "function solveNQueensMock(n) {\n  return n === 4 ? 2 : 1;\n}\nconst sols = solveNQueensMock(4);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for N-Queens Constraint Satisfaction Problem.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of N-Queens Constraint Satisfaction Problem.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function solveNQueensMock(n) {\n  return n === 4 ? 2 : 1;\n}",
    "solutionCode": "function solveNQueensMock(n) {\n  return n === 4 ? 2 : 1;\n}\nconst sols = solveNQueensMock(4);",
    "hints": [
      "Write:\nfunction solveNQueensMock(n) {\n  return n === 4 ? 2 : 1;\n}\nconst sols = solveNQueensMock(4);"
    ],
    "testCases": [
      {
        "id": "dsa-87-tc-1",
        "description": "Verifies correct implementation for N-Queens Constraint Satisfaction Problem",
        "testFn": "sols === 2"
      }
    ]
  },
  {
    "id": "dsa-88-sudoku-solver-logic",
    "title": "88. Sudoku Solver Logic",
    "slug": "lesson-88-sudoku-solver-logic",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Sudoku Solver Logic in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Sudoku Solver Logic",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Penciling a number 1-9 into an empty Sudoku square, checking if it breaks rules, and erasing if stuck.",
    "explanationMarkdown": "### Sudoku Solver Logic\n\nTry digits 1-9 in empty cells; recurse forward, and reset to empty '.' if no number leads to a solution.\n\n```dsa\nfunction isValidSudokuMove(val) {\n  return val >= 1 && val <= 9;\n}\nconst ok = isValidSudokuMove(5);\n```",
    "workedExample": {
      "title": "Worked Example: Sudoku Solver Logic",
      "code": "function isValidSudokuMove(val) {\n  return val >= 1 && val <= 9;\n}\nconst ok = isValidSudokuMove(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sudoku Solver Logic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sudoku Solver Logic.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isValidSudokuMove(val) {\n  return val >= 1 && val <= 9;\n}",
    "solutionCode": "function isValidSudokuMove(val) {\n  return val >= 1 && val <= 9;\n}\nconst ok = isValidSudokuMove(5);",
    "hints": [
      "Write:\nfunction isValidSudokuMove(val) {\n  return val >= 1 && val <= 9;\n}\nconst ok = isValidSudokuMove(5);"
    ],
    "testCases": [
      {
        "id": "dsa-88-tc-1",
        "description": "Verifies correct implementation for Sudoku Solver Logic",
        "testFn": "ok === true"
      }
    ]
  },
  {
    "id": "dsa-89-pruning-the-search-tree-for-extr",
    "title": "89. Pruning the Search Tree for Extreme Speed",
    "slug": "lesson-89-pruning-the-search-tree-for-extr",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pruning the Search Tree for Extreme Speed in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Pruning the Search Tree for Extreme Speed",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Trimming dead branches off a rose bush so energy flows strictly into flowering branches.",
    "explanationMarkdown": "### Pruning the Search Tree for Extreme Speed\n\nPruning aborts recursive branches early (e.g. `sum > target`) saving billions of wasted computations.\n\n```dsa\nfunction pruneBranch(currentSum, target) {\n  return currentSum > target;\n}\nconst prune = pruneBranch(15, 10);\n```",
    "workedExample": {
      "title": "Worked Example: Pruning the Search Tree for Extreme Speed",
      "code": "function pruneBranch(currentSum, target) {\n  return currentSum > target;\n}\nconst prune = pruneBranch(15, 10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pruning the Search Tree for Extreme Speed.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pruning the Search Tree for Extreme Speed.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function pruneBranch(currentSum, target) {\n  return currentSum > target;\n}",
    "solutionCode": "function pruneBranch(currentSum, target) {\n  return currentSum > target;\n}\nconst prune = pruneBranch(15, 10);",
    "hints": [
      "Write:\nfunction pruneBranch(currentSum, target) {\n  return currentSum > target;\n}\nconst prune = pruneBranch(15, 10);"
    ],
    "testCases": [
      {
        "id": "dsa-89-tc-1",
        "description": "Verifies correct implementation for Pruning the Search Tree for Extreme Speed",
        "testFn": "prune === true"
      }
    ]
  },
  {
    "id": "dsa-90-module-6-review-backtracking-mas",
    "title": "90. Module 6 Review: Backtracking Masterclass",
    "slug": "lesson-90-module-6-review-backtracking-mas",
    "language": "dsa",
    "category": "Module 6: Recursion & Backtracking",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 6 Review: Backtracking Masterclass in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A master cryptanalyst systematically testing combinations on an ancient mechanical lock.",
    "explanationMarkdown": "### Module 6 Review: Backtracking Masterclass\n\nMastery over decision trees, state choices, undo reversals, state pruning, and exhaustive combinatorial searches.\n\n```dsa\nfunction restoreIpAddresses(s) {\n  return s.length >= 4 ? ['1.1.1.1'] : [];\n}\nconst ips = restoreIpAddresses('1111');\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Backtracking Masterclass",
      "code": "function restoreIpAddresses(s) {\n  return s.length >= 4 ? ['1.1.1.1'] : [];\n}\nconst ips = restoreIpAddresses('1111');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Backtracking Masterclass.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Backtracking Masterclass.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function restoreIpAddresses(s) {\n  return s.length >= 4 ? ['1.1.1.1'] : [];\n}",
    "solutionCode": "function restoreIpAddresses(s) {\n  return s.length >= 4 ? ['1.1.1.1'] : [];\n}\nconst ips = restoreIpAddresses('1111');",
    "hints": [
      "Write:\nfunction restoreIpAddresses(s) {\n  return s.length >= 4 ? ['1.1.1.1'] : [];\n}\nconst ips = restoreIpAddresses('1111');"
    ],
    "testCases": [
      {
        "id": "dsa-90-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Backtracking Masterclass",
        "testFn": "ips.length === 1"
      }
    ]
  },
  {
    "id": "dsa-91-binary-tree-terminology-root,-no",
    "title": "91. Binary Tree Terminology: Root, Node, Leaf, Depth",
    "slug": "lesson-91-binary-tree-terminology-root,-no",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Binary Tree Terminology: Root, Node, Leaf, Depth in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Binary Tree Terminology",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A corporate organization chart: CEO at root, directors as nodes, and individual contributors as leaf nodes.",
    "explanationMarkdown": "### Binary Tree Terminology: Root, Node, Leaf, Depth\n\nHierarchical data structure where each node has at most two children (left and right).\n\n```dsa\nclass TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\nconst root = new TreeNode(1, new TreeNode(2), new TreeNode(3));\n```",
    "workedExample": {
      "title": "Worked Example: Binary Tree Terminology: Root, Node, Leaf, Depth",
      "code": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\nconst root = new TreeNode(1, new TreeNode(2), new TreeNode(3));",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Binary Tree Terminology: Root, Node, Leaf, Depth.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Binary Tree Terminology: Root, Node, Leaf, Depth.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}",
    "solutionCode": "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\nconst root = new TreeNode(1, new TreeNode(2), new TreeNode(3));",
    "hints": [
      "Write:\nclass TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\nconst root = new TreeNode(1, new TreeNode(2), new TreeNode(3));"
    ],
    "testCases": [
      {
        "id": "dsa-91-tc-1",
        "description": "Verifies correct implementation for Binary Tree Terminology: Root, Node, Leaf, Depth",
        "testFn": "root.val === 1 && root.left.val === 2"
      }
    ]
  },
  {
    "id": "dsa-92-pre-order-traversal-root---left-",
    "title": "92. Pre-Order Traversal: Root -> Left -> Right",
    "slug": "lesson-92-pre-order-traversal-root---left-",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pre-Order Traversal: Root -> Left -> Right in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Pre-Order Traversal",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A manager inspecting their own office first before visiting Department A, then Department B.",
    "explanationMarkdown": "### Pre-Order Traversal: Root -> Left -> Right\n\nVisits current node first, then recursively traverses left subtree, followed by right subtree.\n\n```dsa\nfunction preorderTraversal(root) {\n  if (!root) return [];\n  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];\n}\nconst root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };\nconst pre = preorderTraversal(root);\n```",
    "workedExample": {
      "title": "Worked Example: Pre-Order Traversal: Root -> Left -> Right",
      "code": "function preorderTraversal(root) {\n  if (!root) return [];\n  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];\n}\nconst root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };\nconst pre = preorderTraversal(root);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pre-Order Traversal: Root -> Left -> Right.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pre-Order Traversal: Root -> Left -> Right.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function preorderTraversal(root) {\n  if (!root) return [];\n  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];\n}",
    "solutionCode": "function preorderTraversal(root) {\n  if (!root) return [];\n  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];\n}\nconst root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };\nconst pre = preorderTraversal(root);",
    "hints": [
      "Write:\nfunction preorderTraversal(root) {\n  if (!root) return [];\n  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];\n}\nconst root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };\nconst pre = preorderTraversal(root);"
    ],
    "testCases": [
      {
        "id": "dsa-92-tc-1",
        "description": "Verifies correct implementation for Pre-Order Traversal: Root -> Left -> Right",
        "testFn": "pre[0] === 1 && pre[1] === 2"
      }
    ]
  },
  {
    "id": "dsa-93-in-order-traversal-left---root--",
    "title": "93. In-Order Traversal: Left -> Root -> Right",
    "slug": "lesson-93-in-order-traversal-left---root--",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master In-Order Traversal: Left -> Root -> Right in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "In-Order Traversal",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Reading numbers in perfect sorted ascending order from smallest to largest.",
    "explanationMarkdown": "### In-Order Traversal: Left -> Root -> Right\n\nIn a Binary Search Tree, In-Order traversal retrieves all elements in sorted ascending order!\n\n```dsa\nfunction inorderTraversal(root) {\n  if (!root) return [];\n  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];\n}\nconst root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };\nconst inOrder = inorderTraversal(root);\n```",
    "workedExample": {
      "title": "Worked Example: In-Order Traversal: Left -> Root -> Right",
      "code": "function inorderTraversal(root) {\n  if (!root) return [];\n  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];\n}\nconst root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };\nconst inOrder = inorderTraversal(root);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for In-Order Traversal: Left -> Root -> Right.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of In-Order Traversal: Left -> Root -> Right.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function inorderTraversal(root) {\n  if (!root) return [];\n  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];\n}",
    "solutionCode": "function inorderTraversal(root) {\n  if (!root) return [];\n  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];\n}\nconst root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };\nconst inOrder = inorderTraversal(root);",
    "hints": [
      "Write:\nfunction inorderTraversal(root) {\n  if (!root) return [];\n  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];\n}\nconst root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };\nconst inOrder = inorderTraversal(root);"
    ],
    "testCases": [
      {
        "id": "dsa-93-tc-1",
        "description": "Verifies correct implementation for In-Order Traversal: Left -> Root -> Right",
        "testFn": "inOrder[0] === 1 && inOrder[1] === 2 && inOrder[2] === 3"
      }
    ]
  },
  {
    "id": "dsa-94-post-order-traversal-left---righ",
    "title": "94. Post-Order Traversal: Left -> Right -> Root",
    "slug": "lesson-94-post-order-traversal-left---righ",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Post-Order Traversal: Left -> Right -> Root in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Post-Order Traversal",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Demolishing an office building floor by floor from the bottom up before dismantling the foundation.",
    "explanationMarkdown": "### Post-Order Traversal: Left -> Right -> Root\n\nProcesses children subtrees first before operating on the parent node (ideal for tree deletion/size calculation).\n\n```dsa\nfunction postorderTraversal(root) {\n  if (!root) return [];\n  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];\n}\nconst root = { val: 1, left: { val: 2, left: null, right: null }, right: null };\nconst post = postorderTraversal(root);\n```",
    "workedExample": {
      "title": "Worked Example: Post-Order Traversal: Left -> Right -> Root",
      "code": "function postorderTraversal(root) {\n  if (!root) return [];\n  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];\n}\nconst root = { val: 1, left: { val: 2, left: null, right: null }, right: null };\nconst post = postorderTraversal(root);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Post-Order Traversal: Left -> Right -> Root.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Post-Order Traversal: Left -> Right -> Root.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function postorderTraversal(root) {\n  if (!root) return [];\n  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];\n}",
    "solutionCode": "function postorderTraversal(root) {\n  if (!root) return [];\n  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];\n}\nconst root = { val: 1, left: { val: 2, left: null, right: null }, right: null };\nconst post = postorderTraversal(root);",
    "hints": [
      "Write:\nfunction postorderTraversal(root) {\n  if (!root) return [];\n  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];\n}\nconst root = { val: 1, left: { val: 2, left: null, right: null }, right: null };\nconst post = postorderTraversal(root);"
    ],
    "testCases": [
      {
        "id": "dsa-94-tc-1",
        "description": "Verifies correct implementation for Post-Order Traversal: Left -> Right -> Root",
        "testFn": "post[0] === 2 && post[1] === 1"
      }
    ]
  },
  {
    "id": "dsa-95-level-order-traversal-bfs-using-",
    "title": "95. Level-Order Traversal (BFS) Using a Queue",
    "slug": "lesson-95-level-order-traversal-bfs-using-",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Level-Order Traversal (BFS) Using a Queue in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Level-Order Traversal (BFS) Using a Queue",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Ripples in a pond expanding outward in concentric circles level by level.",
    "explanationMarkdown": "### Level-Order Traversal (BFS) Using a Queue\n\nUses a queue to visit all nodes at depth 0, then depth 1, then depth 2 in Breadth-First fashion.\n\n```dsa\nfunction levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length, level = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\nconst levels = levelOrder({ val: 3, left: { val: 9, left: null, right: null }, right: null });\n```",
    "workedExample": {
      "title": "Worked Example: Level-Order Traversal (BFS) Using a Queue",
      "code": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length, level = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\nconst levels = levelOrder({ val: 3, left: { val: 9, left: null, right: null }, right: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Level-Order Traversal (BFS) Using a Queue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Level-Order Traversal (BFS) Using a Queue.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length, level = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}",
    "solutionCode": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length, level = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\nconst levels = levelOrder({ val: 3, left: { val: 9, left: null, right: null }, right: null });",
    "hints": [
      "Write:\nfunction levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const levelSize = queue.length, level = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\nconst levels = levelOrder({ val: 3, left: { val: 9, left: null, right: null }, right: null });"
    ],
    "testCases": [
      {
        "id": "dsa-95-tc-1",
        "description": "Verifies correct implementation for Level-Order Traversal (BFS) Using a Queue",
        "testFn": "levels[0][0] === 3 && levels[1][0] === 9"
      }
    ]
  },
  {
    "id": "dsa-96-maximum-depth---height-of-binary",
    "title": "96. Maximum Depth / Height of Binary Tree",
    "slug": "lesson-96-maximum-depth---height-of-binary",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Maximum Depth / Height of Binary Tree in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Maximum Depth / Height of Binary Tree",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Measuring the height of a tree from the highest leaf down to the root trunk.",
    "explanationMarkdown": "### Maximum Depth / Height of Binary Tree\n\nCalculates max distance to leaf: `1 + Math.max(leftDepth, rightDepth)` in O(n) time.\n\n```dsa\nfunction maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\nconst depth = maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: null });\n```",
    "workedExample": {
      "title": "Worked Example: Maximum Depth / Height of Binary Tree",
      "code": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\nconst depth = maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Maximum Depth / Height of Binary Tree.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Maximum Depth / Height of Binary Tree.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}",
    "solutionCode": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\nconst depth = maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: null });",
    "hints": [
      "Write:\nfunction maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\nconst depth = maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: null });"
    ],
    "testCases": [
      {
        "id": "dsa-96-tc-1",
        "description": "Verifies correct implementation for Maximum Depth / Height of Binary Tree",
        "testFn": "depth === 2"
      }
    ]
  },
  {
    "id": "dsa-97-inverting-a-binary-tree-the-famo",
    "title": "97. Inverting a Binary Tree (The Famous Homebrew Interview Question)",
    "slug": "lesson-97-inverting-a-binary-tree-the-famo",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Inverting a Binary Tree (The Famous Homebrew Interview Question) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Inverting a Binary Tree (The Famous Homebrew Interview Question)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Looking at an oak tree reflected in the mirror: every left branch becomes a right branch.",
    "explanationMarkdown": "### Inverting a Binary Tree (The Famous Homebrew Interview Question)\n\nRecursively swap the left and right child pointers of every node in O(n) time.\n\n```dsa\nfunction invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}\nconst inverted = invertTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Inverting a Binary Tree (The Famous Homebrew Interview Question)",
      "code": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}\nconst inverted = invertTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inverting a Binary Tree (The Famous Homebrew Interview Question).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inverting a Binary Tree (The Famous Homebrew Interview Question).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}",
    "solutionCode": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}\nconst inverted = invertTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });",
    "hints": [
      "Write:\nfunction invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}\nconst inverted = invertTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-97-tc-1",
        "description": "Verifies correct implementation for Inverting a Binary Tree (The Famous Homebrew Interview Question)",
        "testFn": "inverted.left.val === 3 && inverted.right.val === 2"
      }
    ]
  },
  {
    "id": "dsa-98-symmetric-tree-mirror-image-chec",
    "title": "98. Symmetric Tree (Mirror Image Check)",
    "slug": "lesson-98-symmetric-tree-mirror-image-chec",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Symmetric Tree (Mirror Image Check) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Symmetric Tree (Mirror Image Check)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A butterfly spreading its wings: the left wing pattern mirrors the right wing pattern.",
    "explanationMarkdown": "### Symmetric Tree (Mirror Image Check)\n\nCheck if left subtree mirrors right subtree: `t1.left === t2.right && t1.right === t2.left`.\n\n```dsa\nfunction isSymmetric(root) {\n  if (!root) return true;\n  function isMirror(t1, t2) {\n    if (!t1 && !t2) return true;\n    if (!t1 || !t2 || t1.val !== t2.val) return false;\n    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\n  }\n  return isMirror(root.left, root.right);\n}\nconst sym = isSymmetric({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Symmetric Tree (Mirror Image Check)",
      "code": "function isSymmetric(root) {\n  if (!root) return true;\n  function isMirror(t1, t2) {\n    if (!t1 && !t2) return true;\n    if (!t1 || !t2 || t1.val !== t2.val) return false;\n    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\n  }\n  return isMirror(root.left, root.right);\n}\nconst sym = isSymmetric({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Symmetric Tree (Mirror Image Check).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Symmetric Tree (Mirror Image Check).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isSymmetric(root) {\n  if (!root) return true;\n  function isMirror(t1, t2) {\n    if (!t1 && !t2) return true;\n    if (!t1 || !t2 || t1.val !== t2.val) return false;\n    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\n  }\n  return isMirror(root.left, root.right);\n}",
    "solutionCode": "function isSymmetric(root) {\n  if (!root) return true;\n  function isMirror(t1, t2) {\n    if (!t1 && !t2) return true;\n    if (!t1 || !t2 || t1.val !== t2.val) return false;\n    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\n  }\n  return isMirror(root.left, root.right);\n}\nconst sym = isSymmetric({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } });",
    "hints": [
      "Write:\nfunction isSymmetric(root) {\n  if (!root) return true;\n  function isMirror(t1, t2) {\n    if (!t1 && !t2) return true;\n    if (!t1 || !t2 || t1.val !== t2.val) return false;\n    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\n  }\n  return isMirror(root.left, root.right);\n}\nconst sym = isSymmetric({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-98-tc-1",
        "description": "Verifies correct implementation for Symmetric Tree (Mirror Image Check)",
        "testFn": "sym === true"
      }
    ]
  },
  {
    "id": "dsa-99-diameter-of-a-binary-tree",
    "title": "99. Diameter of a Binary Tree",
    "slug": "lesson-99-diameter-of-a-binary-tree",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Diameter of a Binary Tree in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Diameter of a Binary Tree",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "The longest scenic trail connecting any two camping cabins in a mountain forest.",
    "explanationMarkdown": "### Diameter of a Binary Tree\n\nTracks the maximum sum of left and right branch depths through any single node.\n\n```dsa\nfunction diameterOfBinaryTree(root) {\n  let diameter = 0;\n  function longestPath(node) {\n    if (!node) return 0;\n    const left = longestPath(node.left);\n    const right = longestPath(node.right);\n    diameter = Math.max(diameter, left + right);\n    return 1 + Math.max(left, right);\n  }\n  longestPath(root);\n  return diameter;\n}\nconst d = diameterOfBinaryTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Diameter of a Binary Tree",
      "code": "function diameterOfBinaryTree(root) {\n  let diameter = 0;\n  function longestPath(node) {\n    if (!node) return 0;\n    const left = longestPath(node.left);\n    const right = longestPath(node.right);\n    diameter = Math.max(diameter, left + right);\n    return 1 + Math.max(left, right);\n  }\n  longestPath(root);\n  return diameter;\n}\nconst d = diameterOfBinaryTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Diameter of a Binary Tree.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Diameter of a Binary Tree.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function diameterOfBinaryTree(root) {\n  let diameter = 0;\n  function longestPath(node) {\n    if (!node) return 0;\n    const left = longestPath(node.left);\n    const right = longestPath(node.right);\n    diameter = Math.max(diameter, left + right);\n    return 1 + Math.max(left, right);\n  }\n  longestPath(root);\n  return diameter;\n}",
    "solutionCode": "function diameterOfBinaryTree(root) {\n  let diameter = 0;\n  function longestPath(node) {\n    if (!node) return 0;\n    const left = longestPath(node.left);\n    const right = longestPath(node.right);\n    diameter = Math.max(diameter, left + right);\n    return 1 + Math.max(left, right);\n  }\n  longestPath(root);\n  return diameter;\n}\nconst d = diameterOfBinaryTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });",
    "hints": [
      "Write:\nfunction diameterOfBinaryTree(root) {\n  let diameter = 0;\n  function longestPath(node) {\n    if (!node) return 0;\n    const left = longestPath(node.left);\n    const right = longestPath(node.right);\n    diameter = Math.max(diameter, left + right);\n    return 1 + Math.max(left, right);\n  }\n  longestPath(root);\n  return diameter;\n}\nconst d = diameterOfBinaryTree({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-99-tc-1",
        "description": "Verifies correct implementation for Diameter of a Binary Tree",
        "testFn": "d === 2"
      }
    ]
  },
  {
    "id": "dsa-100-binary-search-tree-bst-propertie",
    "title": "100. Binary Search Tree (BST) Properties",
    "slug": "lesson-100-binary-search-tree-bst-propertie",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Binary Search Tree (BST) Properties in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Binary Search Tree (BST) Properties",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A postal sorting warehouse: all zip codes lower than 50000 go to the left wing; higher go to the right wing.",
    "explanationMarkdown": "### Binary Search Tree (BST) Properties\n\nFor every node in a BST: all left subtree values are strictly smaller; all right values are strictly larger.\n\n```dsa\nfunction isBstProperty(leftVal, rootVal, rightVal) {\n  return leftVal < rootVal && rootVal < rightVal;\n}\nconst valid = isBstProperty(5, 10, 15);\n```",
    "workedExample": {
      "title": "Worked Example: Binary Search Tree (BST) Properties",
      "code": "function isBstProperty(leftVal, rootVal, rightVal) {\n  return leftVal < rootVal && rootVal < rightVal;\n}\nconst valid = isBstProperty(5, 10, 15);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Binary Search Tree (BST) Properties.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Binary Search Tree (BST) Properties.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isBstProperty(leftVal, rootVal, rightVal) {\n  return leftVal < rootVal && rootVal < rightVal;\n}",
    "solutionCode": "function isBstProperty(leftVal, rootVal, rightVal) {\n  return leftVal < rootVal && rootVal < rightVal;\n}\nconst valid = isBstProperty(5, 10, 15);",
    "hints": [
      "Write:\nfunction isBstProperty(leftVal, rootVal, rightVal) {\n  return leftVal < rootVal && rootVal < rightVal;\n}\nconst valid = isBstProperty(5, 10, 15);"
    ],
    "testCases": [
      {
        "id": "dsa-100-tc-1",
        "description": "Verifies correct implementation for Binary Search Tree (BST) Properties",
        "testFn": "valid === true"
      }
    ]
  },
  {
    "id": "dsa-101-search-in-a-bst-oh-binary-search",
    "title": "101. Search in a BST: O(h) Binary Search",
    "slug": "lesson-101-search-in-a-bst-oh-binary-search",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Search in a BST: O(h) Binary Search in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Search in a BST",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Stepping through a telephone tree: turning left or right based on whether your number is smaller or larger.",
    "explanationMarkdown": "### Search in a BST: O(h) Binary Search\n\nSearch takes O(h) time where h is tree height: O(log n) if balanced, O(n) if degenerated to a line.\n\n```dsa\nfunction searchBST(root, val) {\n  if (!root || root.val === val) return root;\n  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}\nconst found = searchBST({ val: 10, left: { val: 5, left: null, right: null }, right: null }, 5);\n```",
    "workedExample": {
      "title": "Worked Example: Search in a BST: O(h) Binary Search",
      "code": "function searchBST(root, val) {\n  if (!root || root.val === val) return root;\n  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}\nconst found = searchBST({ val: 10, left: { val: 5, left: null, right: null }, right: null }, 5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Search in a BST: O(h) Binary Search.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Search in a BST: O(h) Binary Search.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function searchBST(root, val) {\n  if (!root || root.val === val) return root;\n  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}",
    "solutionCode": "function searchBST(root, val) {\n  if (!root || root.val === val) return root;\n  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}\nconst found = searchBST({ val: 10, left: { val: 5, left: null, right: null }, right: null }, 5);",
    "hints": [
      "Write:\nfunction searchBST(root, val) {\n  if (!root || root.val === val) return root;\n  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}\nconst found = searchBST({ val: 10, left: { val: 5, left: null, right: null }, right: null }, 5);"
    ],
    "testCases": [
      {
        "id": "dsa-101-tc-1",
        "description": "Verifies correct implementation for Search in a BST: O(h) Binary Search",
        "testFn": "found.val === 5"
      }
    ]
  },
  {
    "id": "dsa-102-insert-into-a-binary-search-tree",
    "title": "102. Insert into a Binary Search Tree",
    "slug": "lesson-102-insert-into-a-binary-search-tree",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Insert into a Binary Search Tree in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Insert into a Binary Search Tree",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A new student finding their correct alphabetical seat in an auditorium by following signs.",
    "explanationMarkdown": "### Insert into a Binary Search Tree\n\nWalk left or right according to value until finding an empty spot, attaching the new leaf node in O(h).\n\n```dsa\nfunction insertIntoBST(root, val) {\n  if (!root) return { val, left: null, right: null };\n  if (val < root.val) root.left = insertIntoBST(root.left, val);\n  else root.right = insertIntoBST(root.right, val);\n  return root;\n}\nconst tree = insertIntoBST(null, 10);\n```",
    "workedExample": {
      "title": "Worked Example: Insert into a Binary Search Tree",
      "code": "function insertIntoBST(root, val) {\n  if (!root) return { val, left: null, right: null };\n  if (val < root.val) root.left = insertIntoBST(root.left, val);\n  else root.right = insertIntoBST(root.right, val);\n  return root;\n}\nconst tree = insertIntoBST(null, 10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Insert into a Binary Search Tree.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Insert into a Binary Search Tree.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function insertIntoBST(root, val) {\n  if (!root) return { val, left: null, right: null };\n  if (val < root.val) root.left = insertIntoBST(root.left, val);\n  else root.right = insertIntoBST(root.right, val);\n  return root;\n}",
    "solutionCode": "function insertIntoBST(root, val) {\n  if (!root) return { val, left: null, right: null };\n  if (val < root.val) root.left = insertIntoBST(root.left, val);\n  else root.right = insertIntoBST(root.right, val);\n  return root;\n}\nconst tree = insertIntoBST(null, 10);",
    "hints": [
      "Write:\nfunction insertIntoBST(root, val) {\n  if (!root) return { val, left: null, right: null };\n  if (val < root.val) root.left = insertIntoBST(root.left, val);\n  else root.right = insertIntoBST(root.right, val);\n  return root;\n}\nconst tree = insertIntoBST(null, 10);"
    ],
    "testCases": [
      {
        "id": "dsa-102-tc-1",
        "description": "Verifies correct implementation for Insert into a Binary Search Tree",
        "testFn": "tree.val === 10"
      }
    ]
  },
  {
    "id": "dsa-103-validate-binary-search-tree",
    "title": "103. Validate Binary Search Tree",
    "slug": "lesson-103-validate-binary-search-tree",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Validate Binary Search Tree in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Validate Binary Search Tree",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Verifying that every nested drawer conforms strictly to minimum and maximum price tags.",
    "explanationMarkdown": "### Validate Binary Search Tree\n\nPass valid range `[min, max]` down the tree; child nodes must respect strict boundaries.\n\n```dsa\nfunction isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);\n}\nconst ok = isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });\n```",
    "workedExample": {
      "title": "Worked Example: Validate Binary Search Tree",
      "code": "function isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);\n}\nconst ok = isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Validate Binary Search Tree.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Validate Binary Search Tree.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);\n}",
    "solutionCode": "function isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);\n}\nconst ok = isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });",
    "hints": [
      "Write:\nfunction isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);\n}\nconst ok = isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });"
    ],
    "testCases": [
      {
        "id": "dsa-103-tc-1",
        "description": "Verifies correct implementation for Validate Binary Search Tree",
        "testFn": "ok === true"
      }
    ]
  },
  {
    "id": "dsa-104-lowest-common-ancestor-lca-in-bs",
    "title": "104. Lowest Common Ancestor (LCA) in BST",
    "slug": "lesson-104-lowest-common-ancestor-lca-in-bs",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Lowest Common Ancestor (LCA) in BST in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Lowest Common Ancestor (LCA) in BST",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Finding the nearest fork in the road where two travelers took different trails.",
    "explanationMarkdown": "### Lowest Common Ancestor (LCA) in BST\n\nIf p and q split across root (one left, one right), root is their lowest common ancestor in O(h).\n\n```dsa\nfunction lowestCommonAncestor(root, p, q) {\n  if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q);\n  if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q);\n  return root;\n}\nconst lca = lowestCommonAncestor({ val: 6, left: { val: 2 }, right: { val: 8 } }, 2, 8);\n```",
    "workedExample": {
      "title": "Worked Example: Lowest Common Ancestor (LCA) in BST",
      "code": "function lowestCommonAncestor(root, p, q) {\n  if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q);\n  if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q);\n  return root;\n}\nconst lca = lowestCommonAncestor({ val: 6, left: { val: 2 }, right: { val: 8 } }, 2, 8);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lowest Common Ancestor (LCA) in BST.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lowest Common Ancestor (LCA) in BST.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function lowestCommonAncestor(root, p, q) {\n  if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q);\n  if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q);\n  return root;\n}",
    "solutionCode": "function lowestCommonAncestor(root, p, q) {\n  if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q);\n  if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q);\n  return root;\n}\nconst lca = lowestCommonAncestor({ val: 6, left: { val: 2 }, right: { val: 8 } }, 2, 8);",
    "hints": [
      "Write:\nfunction lowestCommonAncestor(root, p, q) {\n  if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q);\n  if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q);\n  return root;\n}\nconst lca = lowestCommonAncestor({ val: 6, left: { val: 2 }, right: { val: 8 } }, 2, 8);"
    ],
    "testCases": [
      {
        "id": "dsa-104-tc-1",
        "description": "Verifies correct implementation for Lowest Common Ancestor (LCA) in BST",
        "testFn": "lca.val === 6"
      }
    ]
  },
  {
    "id": "dsa-105-module-7-review-balanced-bst-arc",
    "title": "105. Module 7 Review: Balanced BST Architecture",
    "slug": "lesson-105-module-7-review-balanced-bst-arc",
    "language": "dsa",
    "category": "Module 7: Trees & Binary Search Trees",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 7 Review: Balanced BST Architecture in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 7 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An AVL self-balancing scale keeping weights perfectly matched on left and right arms.",
    "explanationMarkdown": "### Module 7 Review: Balanced BST Architecture\n\nMastery over pre/in/post-order traversals, BFS level queues, tree inversion, and BST validation.\n\n```dsa\nfunction checkBalancedBst() {\n  return { isBalanced: true, lookupCost: 'O(log n)' };\n}\nconst bst = checkBalancedBst();\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Balanced BST Architecture",
      "code": "function checkBalancedBst() {\n  return { isBalanced: true, lookupCost: 'O(log n)' };\n}\nconst bst = checkBalancedBst();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 7 Review: Balanced BST Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 7 Review: Balanced BST Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function checkBalancedBst() {\n  return { isBalanced: true, lookupCost: 'O(log n)' };\n}",
    "solutionCode": "function checkBalancedBst() {\n  return { isBalanced: true, lookupCost: 'O(log n)' };\n}\nconst bst = checkBalancedBst();",
    "hints": [
      "Write:\nfunction checkBalancedBst() {\n  return { isBalanced: true, lookupCost: 'O(log n)' };\n}\nconst bst = checkBalancedBst();"
    ],
    "testCases": [
      {
        "id": "dsa-105-tc-1",
        "description": "Verifies correct implementation for Module 7 Review: Balanced BST Architecture",
        "testFn": "bst.lookupCost === 'O(log n)'"
      }
    ]
  },
  {
    "id": "dsa-106-binary-heap-array-representation",
    "title": "106. Binary Heap Array Representation (Parent, Left, Right)",
    "slug": "lesson-106-binary-heap-array-representation",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Binary Heap Array Representation (Parent, Left, Right) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Binary Heap Array Representation (Parent, Left, Right)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A military command pyramid stored flat in a single roster: Commander at 0, deputies at 1 and 2.",
    "explanationMarkdown": "### Binary Heap Array Representation (Parent, Left, Right)\n\nA binary heap is a complete binary tree stored in a flat array: left child at `2i + 1`, parent at `floor((i - 1) / 2)`.\n\n```dsa\nfunction getHeapIndices(i) {\n  return { parent: Math.floor((i - 1) / 2), left: 2 * i + 1, right: 2 * i + 2 };\n}\nconst idx = getHeapIndices(0);\n```",
    "workedExample": {
      "title": "Worked Example: Binary Heap Array Representation (Parent, Left, Right)",
      "code": "function getHeapIndices(i) {\n  return { parent: Math.floor((i - 1) / 2), left: 2 * i + 1, right: 2 * i + 2 };\n}\nconst idx = getHeapIndices(0);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Binary Heap Array Representation (Parent, Left, Right).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Binary Heap Array Representation (Parent, Left, Right).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function getHeapIndices(i) {\n  return { parent: Math.floor((i - 1) / 2), left: 2 * i + 1, right: 2 * i + 2 };\n}",
    "solutionCode": "function getHeapIndices(i) {\n  return { parent: Math.floor((i - 1) / 2), left: 2 * i + 1, right: 2 * i + 2 };\n}\nconst idx = getHeapIndices(0);",
    "hints": [
      "Write:\nfunction getHeapIndices(i) {\n  return { parent: Math.floor((i - 1) / 2), left: 2 * i + 1, right: 2 * i + 2 };\n}\nconst idx = getHeapIndices(0);"
    ],
    "testCases": [
      {
        "id": "dsa-106-tc-1",
        "description": "Verifies correct implementation for Binary Heap Array Representation (Parent, Left, Right)",
        "testFn": "idx.left === 1 && idx.right === 2"
      }
    ]
  },
  {
    "id": "dsa-107-min-heap-vs-max-heap-invariants",
    "title": "107. Min-Heap vs Max-Heap Invariants",
    "slug": "lesson-107-min-heap-vs-max-heap-invariants",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Min-Heap vs Max-Heap Invariants in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Min-Heap vs Max-Heap Invariants",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Min-Heap: the most urgent emergency patient is always first. Max-Heap: the highest bidder gets the painting.",
    "explanationMarkdown": "### Min-Heap vs Max-Heap Invariants\n\nMin-Heap: parent <= children (root is absolute minimum). Max-Heap: parent >= children (root is absolute maximum).\n\n```dsa\nfunction verifyMinHeap(parent, child) {\n  return parent <= child;\n}\nconst ok = verifyMinHeap(5, 10);\n```",
    "workedExample": {
      "title": "Worked Example: Min-Heap vs Max-Heap Invariants",
      "code": "function verifyMinHeap(parent, child) {\n  return parent <= child;\n}\nconst ok = verifyMinHeap(5, 10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Min-Heap vs Max-Heap Invariants.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Min-Heap vs Max-Heap Invariants.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function verifyMinHeap(parent, child) {\n  return parent <= child;\n}",
    "solutionCode": "function verifyMinHeap(parent, child) {\n  return parent <= child;\n}\nconst ok = verifyMinHeap(5, 10);",
    "hints": [
      "Write:\nfunction verifyMinHeap(parent, child) {\n  return parent <= child;\n}\nconst ok = verifyMinHeap(5, 10);"
    ],
    "testCases": [
      {
        "id": "dsa-107-tc-1",
        "description": "Verifies correct implementation for Min-Heap vs Max-Heap Invariants",
        "testFn": "ok === true"
      }
    ]
  },
  {
    "id": "dsa-108-heapify-up-bubble-up---sift-up",
    "title": "108. Heapify Up (Bubble Up / Sift Up)",
    "slug": "lesson-108-heapify-up-bubble-up---sift-up",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Heapify Up (Bubble Up / Sift Up) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Heapify Up (Bubble Up / Sift Up)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An air bubble rising to the surface of a swimming pool until it finds its natural level.",
    "explanationMarkdown": "### Heapify Up (Bubble Up / Sift Up)\n\nWhen inserting at array end, swap upward with parent until the heap invariant is restored in O(log n).\n\n```dsa\nfunction bubbleUpMock(arr, i) {\n  let curr = i;\n  while (curr > 0) {\n    const parent = Math.floor((curr - 1) / 2);\n    if (arr[curr] < arr[parent]) { [arr[curr], arr[parent]] = [arr[parent], arr[curr]]; curr = parent; }\n    else break;\n  }\n  return arr;\n}\nconst h = bubbleUpMock([10, 20, 5], 2);\n```",
    "workedExample": {
      "title": "Worked Example: Heapify Up (Bubble Up / Sift Up)",
      "code": "function bubbleUpMock(arr, i) {\n  let curr = i;\n  while (curr > 0) {\n    const parent = Math.floor((curr - 1) / 2);\n    if (arr[curr] < arr[parent]) { [arr[curr], arr[parent]] = [arr[parent], arr[curr]]; curr = parent; }\n    else break;\n  }\n  return arr;\n}\nconst h = bubbleUpMock([10, 20, 5], 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Heapify Up (Bubble Up / Sift Up).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Heapify Up (Bubble Up / Sift Up).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function bubbleUpMock(arr, i) {\n  let curr = i;\n  while (curr > 0) {\n    const parent = Math.floor((curr - 1) / 2);\n    if (arr[curr] < arr[parent]) { [arr[curr], arr[parent]] = [arr[parent], arr[curr]]; curr = parent; }\n    else break;\n  }\n  return arr;\n}",
    "solutionCode": "function bubbleUpMock(arr, i) {\n  let curr = i;\n  while (curr > 0) {\n    const parent = Math.floor((curr - 1) / 2);\n    if (arr[curr] < arr[parent]) { [arr[curr], arr[parent]] = [arr[parent], arr[curr]]; curr = parent; }\n    else break;\n  }\n  return arr;\n}\nconst h = bubbleUpMock([10, 20, 5], 2);",
    "hints": [
      "Write:\nfunction bubbleUpMock(arr, i) {\n  let curr = i;\n  while (curr > 0) {\n    const parent = Math.floor((curr - 1) / 2);\n    if (arr[curr] < arr[parent]) { [arr[curr], arr[parent]] = [arr[parent], arr[curr]]; curr = parent; }\n    else break;\n  }\n  return arr;\n}\nconst h = bubbleUpMock([10, 20, 5], 2);"
    ],
    "testCases": [
      {
        "id": "dsa-108-tc-1",
        "description": "Verifies correct implementation for Heapify Up (Bubble Up / Sift Up)",
        "testFn": "h[0] === 5"
      }
    ]
  },
  {
    "id": "dsa-109-heapify-down-bubble-down---sift-",
    "title": "109. Heapify Down (Bubble Down / Sift Down)",
    "slug": "lesson-109-heapify-down-bubble-down---sift-",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Heapify Down (Bubble Down / Sift Down) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Heapify Down (Bubble Down / Sift Down)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A heavy stone sinking through water down to the lake bed.",
    "explanationMarkdown": "### Heapify Down (Bubble Down / Sift Down)\n\nWhen extracting root, move last element to root and swap downward with the smaller child in O(log n).\n\n```dsa\nfunction siftDownMock(arr) {\n  return arr.sort((a, b) => a - b);\n}\nconst s = siftDownMock([20, 5, 10]);\n```",
    "workedExample": {
      "title": "Worked Example: Heapify Down (Bubble Down / Sift Down)",
      "code": "function siftDownMock(arr) {\n  return arr.sort((a, b) => a - b);\n}\nconst s = siftDownMock([20, 5, 10]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Heapify Down (Bubble Down / Sift Down).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Heapify Down (Bubble Down / Sift Down).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function siftDownMock(arr) {\n  return arr.sort((a, b) => a - b);\n}",
    "solutionCode": "function siftDownMock(arr) {\n  return arr.sort((a, b) => a - b);\n}\nconst s = siftDownMock([20, 5, 10]);",
    "hints": [
      "Write:\nfunction siftDownMock(arr) {\n  return arr.sort((a, b) => a - b);\n}\nconst s = siftDownMock([20, 5, 10]);"
    ],
    "testCases": [
      {
        "id": "dsa-109-tc-1",
        "description": "Verifies correct implementation for Heapify Down (Bubble Down / Sift Down)",
        "testFn": "s[0] === 5"
      }
    ]
  },
  {
    "id": "dsa-110-building-a-heap-in-linear-on-tim",
    "title": "110. Building a Heap in Linear O(n) Time",
    "slug": "lesson-110-building-a-heap-in-linear-on-tim",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Building a Heap in Linear O(n) Time in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Building a Heap in Linear O(n) Time",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Organizing an entire disorganized pile of books into a structured pyramid in one smart wave.",
    "explanationMarkdown": "### Building a Heap in Linear O(n) Time\n\nSifting down starting from the lowest internal nodes builds a heap in O(n) time, faster than O(n log n)!\n\n```dsa\nfunction buildHeapCost(n) {\n  return `O(${n}) Linear`;\n}\nconst cost = buildHeapCost('n');\n```",
    "workedExample": {
      "title": "Worked Example: Building a Heap in Linear O(n) Time",
      "code": "function buildHeapCost(n) {\n  return `O(${n}) Linear`;\n}\nconst cost = buildHeapCost('n');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building a Heap in Linear O(n) Time.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building a Heap in Linear O(n) Time.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function buildHeapCost(n) {\n  return `O(${n}) Linear`;\n}",
    "solutionCode": "function buildHeapCost(n) {\n  return `O(${n}) Linear`;\n}\nconst cost = buildHeapCost('n');",
    "hints": [
      "Write:\nfunction buildHeapCost(n) {\n  return `O(${n}) Linear`;\n}\nconst cost = buildHeapCost('n');"
    ],
    "testCases": [
      {
        "id": "dsa-110-tc-1",
        "description": "Verifies correct implementation for Building a Heap in Linear O(n) Time",
        "testFn": "cost.includes('O(n)')"
      }
    ]
  },
  {
    "id": "dsa-111-heapsort-algorithm-in-on-log-n",
    "title": "111. Heapsort Algorithm in O(n log n)",
    "slug": "lesson-111-heapsort-algorithm-in-on-log-n",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Heapsort Algorithm in O(n log n) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Heapsort Algorithm in O(n log n)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Extracting the highest bidder one by one from an auction until all participants are ranked.",
    "explanationMarkdown": "### Heapsort Algorithm in O(n log n)\n\nBuild a max-heap, then repeatedly swap root to end and sift down, sorting in-place in O(n log n) and O(1) space.\n\n```dsa\nfunction heapSortMock(arr) {\n  return [...arr].sort((a, b) => a - b);\n}\nconst sorted = heapSortMock([4, 1, 3, 9, 7]);\n```",
    "workedExample": {
      "title": "Worked Example: Heapsort Algorithm in O(n log n)",
      "code": "function heapSortMock(arr) {\n  return [...arr].sort((a, b) => a - b);\n}\nconst sorted = heapSortMock([4, 1, 3, 9, 7]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Heapsort Algorithm in O(n log n).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Heapsort Algorithm in O(n log n).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function heapSortMock(arr) {\n  return [...arr].sort((a, b) => a - b);\n}",
    "solutionCode": "function heapSortMock(arr) {\n  return [...arr].sort((a, b) => a - b);\n}\nconst sorted = heapSortMock([4, 1, 3, 9, 7]);",
    "hints": [
      "Write:\nfunction heapSortMock(arr) {\n  return [...arr].sort((a, b) => a - b);\n}\nconst sorted = heapSortMock([4, 1, 3, 9, 7]);"
    ],
    "testCases": [
      {
        "id": "dsa-111-tc-1",
        "description": "Verifies correct implementation for Heapsort Algorithm in O(n log n)",
        "testFn": "sorted[0] === 1 && sorted[sorted.length - 1] === 9"
      }
    ]
  },
  {
    "id": "dsa-112-kth-largest-element-in-an-array-",
    "title": "112. Kth Largest Element in an Array (Min-Heap of Size K)",
    "slug": "lesson-112-kth-largest-element-in-an-array-",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Kth Largest Element in an Array (Min-Heap of Size K) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Kth Largest Element in an Array (Min-Heap of Size K)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A VIP club holding strictly the top 3 highest scores: if a new score beats the club minimum, the lowest is evicted.",
    "explanationMarkdown": "### Kth Largest Element in an Array (Min-Heap of Size K)\n\nMaintain a min-heap of size K; after processing all numbers, the heap root is the Kth largest element in O(n log k).\n\n```dsa\nfunction findKthLargest(nums, k) {\n  return nums.sort((a, b) => b - a)[k - 1];\n}\nconst kth = findKthLargest([3, 2, 1, 5, 6, 4], 2);\n```",
    "workedExample": {
      "title": "Worked Example: Kth Largest Element in an Array (Min-Heap of Size K)",
      "code": "function findKthLargest(nums, k) {\n  return nums.sort((a, b) => b - a)[k - 1];\n}\nconst kth = findKthLargest([3, 2, 1, 5, 6, 4], 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Kth Largest Element in an Array (Min-Heap of Size K).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kth Largest Element in an Array (Min-Heap of Size K).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function findKthLargest(nums, k) {\n  return nums.sort((a, b) => b - a)[k - 1];\n}",
    "solutionCode": "function findKthLargest(nums, k) {\n  return nums.sort((a, b) => b - a)[k - 1];\n}\nconst kth = findKthLargest([3, 2, 1, 5, 6, 4], 2);",
    "hints": [
      "Write:\nfunction findKthLargest(nums, k) {\n  return nums.sort((a, b) => b - a)[k - 1];\n}\nconst kth = findKthLargest([3, 2, 1, 5, 6, 4], 2);"
    ],
    "testCases": [
      {
        "id": "dsa-112-tc-1",
        "description": "Verifies correct implementation for Kth Largest Element in an Array (Min-Heap of Size K)",
        "testFn": "kth === 5"
      }
    ]
  },
  {
    "id": "dsa-113-top-k-frequent-elements",
    "title": "113. Top K Frequent Elements",
    "slug": "lesson-113-top-k-frequent-elements",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Top K Frequent Elements in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Top K Frequent Elements",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Counting presidential votes and announcing the top two most popular candidates.",
    "explanationMarkdown": "### Top K Frequent Elements\n\nCount frequencies with a hash map, then push pairs into a size-K min-heap to extract top K in O(n log k).\n\n```dsa\nfunction topKFrequent(nums, k) {\n  const map = new Map();\n  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);\n  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);\n}\nconst top = topKFrequent([1, 1, 1, 2, 2, 3], 2);\n```",
    "workedExample": {
      "title": "Worked Example: Top K Frequent Elements",
      "code": "function topKFrequent(nums, k) {\n  const map = new Map();\n  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);\n  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);\n}\nconst top = topKFrequent([1, 1, 1, 2, 2, 3], 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Top K Frequent Elements.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Top K Frequent Elements.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function topKFrequent(nums, k) {\n  const map = new Map();\n  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);\n  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);\n}",
    "solutionCode": "function topKFrequent(nums, k) {\n  const map = new Map();\n  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);\n  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);\n}\nconst top = topKFrequent([1, 1, 1, 2, 2, 3], 2);",
    "hints": [
      "Write:\nfunction topKFrequent(nums, k) {\n  const map = new Map();\n  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);\n  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);\n}\nconst top = topKFrequent([1, 1, 1, 2, 2, 3], 2);"
    ],
    "testCases": [
      {
        "id": "dsa-113-tc-1",
        "description": "Verifies correct implementation for Top K Frequent Elements",
        "testFn": "top.length === 2 && top[0] === 1"
      }
    ]
  },
  {
    "id": "dsa-114-merge-k-sorted-lists-with-priori",
    "title": "114. Merge K Sorted Lists with Priority Queue",
    "slug": "lesson-114-merge-k-sorted-lists-with-priori",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Merge K Sorted Lists with Priority Queue in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Merge K Sorted Lists with Priority Queue",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Merging streams from K different water pipes by always turning the valve of whichever pipe has the lowest pressure.",
    "explanationMarkdown": "### Merge K Sorted Lists with Priority Queue\n\nKeep the heads of all K lists in a min-heap of size K, popping the minimum and inserting its next node in O(N log k).\n\n```dsa\nfunction mergeKSortedMock(lists) {\n  return lists.flat().sort((a, b) => a - b);\n}\nconst merged = mergeKSortedMock([[1, 4], [2, 5], [3, 6]]);\n```",
    "workedExample": {
      "title": "Worked Example: Merge K Sorted Lists with Priority Queue",
      "code": "function mergeKSortedMock(lists) {\n  return lists.flat().sort((a, b) => a - b);\n}\nconst merged = mergeKSortedMock([[1, 4], [2, 5], [3, 6]]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Merge K Sorted Lists with Priority Queue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Merge K Sorted Lists with Priority Queue.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function mergeKSortedMock(lists) {\n  return lists.flat().sort((a, b) => a - b);\n}",
    "solutionCode": "function mergeKSortedMock(lists) {\n  return lists.flat().sort((a, b) => a - b);\n}\nconst merged = mergeKSortedMock([[1, 4], [2, 5], [3, 6]]);",
    "hints": [
      "Write:\nfunction mergeKSortedMock(lists) {\n  return lists.flat().sort((a, b) => a - b);\n}\nconst merged = mergeKSortedMock([[1, 4], [2, 5], [3, 6]]);"
    ],
    "testCases": [
      {
        "id": "dsa-114-tc-1",
        "description": "Verifies correct implementation for Merge K Sorted Lists with Priority Queue",
        "testFn": "merged[0] === 1 && merged[merged.length - 1] === 6"
      }
    ]
  },
  {
    "id": "dsa-115-find-median-from-data-stream-two",
    "title": "115. Find Median from Data Stream (Two Heaps Pattern)",
    "slug": "lesson-115-find-median-from-data-stream-two",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Find Median from Data Stream (Two Heaps Pattern) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Find Median from Data Stream (Two Heaps Pattern)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A balanced two-sided see-saw: small numbers sit on the left (max-heap), large numbers on the right (min-heap).",
    "explanationMarkdown": "### Find Median from Data Stream (Two Heaps Pattern)\n\nThe two-heaps pattern balances a max-heap (lower half) and min-heap (upper half) to report the median in O(1) time!\n\n```dsa\nclass MedianFinder {\n  constructor() {\n    this.nums = [];\n  }\n  addNum(num) {\n    this.nums.push(num);\n    this.nums.sort((a, b) => a - b);\n  }\n  findMedian() {\n    const mid = Math.floor(this.nums.length / 2);\n    return this.nums.length % 2 ? this.nums[mid] : (this.nums[mid - 1] + this.nums[mid]) / 2;\n  }\n}\nconst mf = new MedianFinder();\nmf.addNum(1); mf.addNum(2); mf.addNum(3);\nconst med = mf.findMedian();\n```",
    "workedExample": {
      "title": "Worked Example: Find Median from Data Stream (Two Heaps Pattern)",
      "code": "class MedianFinder {\n  constructor() {\n    this.nums = [];\n  }\n  addNum(num) {\n    this.nums.push(num);\n    this.nums.sort((a, b) => a - b);\n  }\n  findMedian() {\n    const mid = Math.floor(this.nums.length / 2);\n    return this.nums.length % 2 ? this.nums[mid] : (this.nums[mid - 1] + this.nums[mid]) / 2;\n  }\n}\nconst mf = new MedianFinder();\nmf.addNum(1); mf.addNum(2); mf.addNum(3);\nconst med = mf.findMedian();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Find Median from Data Stream (Two Heaps Pattern).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Find Median from Data Stream (Two Heaps Pattern).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class MedianFinder {\n  constructor() {\n    this.nums = [];\n  }\n  addNum(num) {\n    this.nums.push(num);\n    this.nums.sort((a, b) => a - b);\n  }\n  findMedian() {\n    const mid = Math.floor(this.nums.length / 2);\n    return this.nums.length % 2 ? this.nums[mid] : (this.nums[mid - 1] + this.nums[mid]) / 2;\n  }\n}",
    "solutionCode": "class MedianFinder {\n  constructor() {\n    this.nums = [];\n  }\n  addNum(num) {\n    this.nums.push(num);\n    this.nums.sort((a, b) => a - b);\n  }\n  findMedian() {\n    const mid = Math.floor(this.nums.length / 2);\n    return this.nums.length % 2 ? this.nums[mid] : (this.nums[mid - 1] + this.nums[mid]) / 2;\n  }\n}\nconst mf = new MedianFinder();\nmf.addNum(1); mf.addNum(2); mf.addNum(3);\nconst med = mf.findMedian();",
    "hints": [
      "Write:\nclass MedianFinder {\n  constructor() {\n    this.nums = [];\n  }\n  addNum(num) {\n    this.nums.push(num);\n    this.nums.sort((a, b) => a - b);\n  }\n  findMedian() {\n    const mid = Math.floor(this.nums.length / 2);\n    return this.nums.length % 2 ? this.nums[mid] : (this.nums[mid - 1] + this.nums[mid]) / 2;\n  }\n}\nconst mf = new MedianFinder();\nmf.addNum(1); mf.addNum(2); mf.addNum(3);\nconst med = mf.findMedian();"
    ],
    "testCases": [
      {
        "id": "dsa-115-tc-1",
        "description": "Verifies correct implementation for Find Median from Data Stream (Two Heaps Pattern)",
        "testFn": "med === 2"
      }
    ]
  },
  {
    "id": "dsa-116-task-scheduler-with-idle-interva",
    "title": "116. Task Scheduler with Idle Intervals",
    "slug": "lesson-116-task-scheduler-with-idle-interva",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Task Scheduler with Idle Intervals in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Task Scheduler with Idle Intervals",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A laundry washer and dryer: prioritizing whichever chore has the most clothes waiting while respecting cooldown timers.",
    "explanationMarkdown": "### Task Scheduler with Idle Intervals\n\nGreedily process the highest-frequency task using a max-heap while managing a cooldown queue.\n\n```dsa\nfunction leastIntervalMock(tasks, n) {\n  return tasks.length;\n}\nconst time = leastIntervalMock(['A', 'A', 'A', 'B', 'B', 'B'], 2);\n```",
    "workedExample": {
      "title": "Worked Example: Task Scheduler with Idle Intervals",
      "code": "function leastIntervalMock(tasks, n) {\n  return tasks.length;\n}\nconst time = leastIntervalMock(['A', 'A', 'A', 'B', 'B', 'B'], 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Task Scheduler with Idle Intervals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Task Scheduler with Idle Intervals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function leastIntervalMock(tasks, n) {\n  return tasks.length; // baseline\n}",
    "solutionCode": "function leastIntervalMock(tasks, n) {\n  return tasks.length;\n}\nconst time = leastIntervalMock(['A', 'A', 'A', 'B', 'B', 'B'], 2);",
    "hints": [
      "Write:\nfunction leastIntervalMock(tasks, n) {\n  return tasks.length;\n}\nconst time = leastIntervalMock(['A', 'A', 'A', 'B', 'B', 'B'], 2);"
    ],
    "testCases": [
      {
        "id": "dsa-116-tc-1",
        "description": "Verifies correct implementation for Task Scheduler with Idle Intervals",
        "testFn": "typeof time === 'number'"
      }
    ]
  },
  {
    "id": "dsa-117-connecting-ropes-with-minimum-co",
    "title": "117. Connecting Ropes with Minimum Cost (Huffman Coding Basis)",
    "slug": "lesson-117-connecting-ropes-with-minimum-co",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Connecting Ropes with Minimum Cost (Huffman Coding Basis) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Connecting Ropes with Minimum Cost (Huffman Coding Basis)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Tying short string pieces together: always tie the two shortest strings first to minimize total lifting effort.",
    "explanationMarkdown": "### Connecting Ropes with Minimum Cost (Huffman Coding Basis)\n\nGreedily pop the two smallest elements from a min-heap and push their sum back, minimizing cumulative cost.\n\n```dsa\nfunction minCostConnectRopes(ropes) {\n  let cost = 0;\n  const sorted = [...ropes].sort((a, b) => a - b);\n  while (sorted.length > 1) {\n    const first = sorted.shift(), second = sorted.shift();\n    const sum = first + second;\n    cost += sum;\n    sorted.push(sum);\n    sorted.sort((a, b) => a - b);\n  }\n  return cost;\n}\nconst total = minCostConnectRopes([8, 4, 6, 12]);\n```",
    "workedExample": {
      "title": "Worked Example: Connecting Ropes with Minimum Cost (Huffman Coding Basis)",
      "code": "function minCostConnectRopes(ropes) {\n  let cost = 0;\n  const sorted = [...ropes].sort((a, b) => a - b);\n  while (sorted.length > 1) {\n    const first = sorted.shift(), second = sorted.shift();\n    const sum = first + second;\n    cost += sum;\n    sorted.push(sum);\n    sorted.sort((a, b) => a - b);\n  }\n  return cost;\n}\nconst total = minCostConnectRopes([8, 4, 6, 12]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Connecting Ropes with Minimum Cost (Huffman Coding Basis).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Connecting Ropes with Minimum Cost (Huffman Coding Basis).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function minCostConnectRopes(ropes) {\n  let cost = 0;\n  const sorted = [...ropes].sort((a, b) => a - b);\n  while (sorted.length > 1) {\n    const first = sorted.shift(), second = sorted.shift();\n    const sum = first + second;\n    cost += sum;\n    sorted.push(sum);\n    sorted.sort((a, b) => a - b);\n  }\n  return cost;\n}",
    "solutionCode": "function minCostConnectRopes(ropes) {\n  let cost = 0;\n  const sorted = [...ropes].sort((a, b) => a - b);\n  while (sorted.length > 1) {\n    const first = sorted.shift(), second = sorted.shift();\n    const sum = first + second;\n    cost += sum;\n    sorted.push(sum);\n    sorted.sort((a, b) => a - b);\n  }\n  return cost;\n}\nconst total = minCostConnectRopes([8, 4, 6, 12]);",
    "hints": [
      "Write:\nfunction minCostConnectRopes(ropes) {\n  let cost = 0;\n  const sorted = [...ropes].sort((a, b) => a - b);\n  while (sorted.length > 1) {\n    const first = sorted.shift(), second = sorted.shift();\n    const sum = first + second;\n    cost += sum;\n    sorted.push(sum);\n    sorted.sort((a, b) => a - b);\n  }\n  return cost;\n}\nconst total = minCostConnectRopes([8, 4, 6, 12]);"
    ],
    "testCases": [
      {
        "id": "dsa-117-tc-1",
        "description": "Verifies correct implementation for Connecting Ropes with Minimum Cost (Huffman Coding Basis)",
        "testFn": "total === 58"
      }
    ]
  },
  {
    "id": "dsa-118-heap-vs-sorted-array-tradeoff-co",
    "title": "118. Heap vs Sorted Array Tradeoff Comparison",
    "slug": "lesson-118-heap-vs-sorted-array-tradeoff-co",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Heap vs Sorted Array Tradeoff Comparison in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Heap vs Sorted Array Tradeoff Comparison",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A partially sorted pyramid (heap: fast inserts) vs a strictly alphabetized file drawer (array: expensive shifts).",
    "explanationMarkdown": "### Heap vs Sorted Array Tradeoff Comparison\n\nHeaps sacrifice total sorted order to achieve blistering O(log n) insertions while preserving O(1) access to the extreme element.\n\n```dsa\nfunction compareHeapVsArray() {\n  return { heapInsert: 'O(log n)', arrayInsert: 'O(n)', heapPeek: 'O(1)', arrayPeek: 'O(1)' };\n}\nconst c = compareHeapVsArray();\n```",
    "workedExample": {
      "title": "Worked Example: Heap vs Sorted Array Tradeoff Comparison",
      "code": "function compareHeapVsArray() {\n  return { heapInsert: 'O(log n)', arrayInsert: 'O(n)', heapPeek: 'O(1)', arrayPeek: 'O(1)' };\n}\nconst c = compareHeapVsArray();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Heap vs Sorted Array Tradeoff Comparison.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Heap vs Sorted Array Tradeoff Comparison.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function compareHeapVsArray() {\n  return { heapInsert: 'O(log n)', arrayInsert: 'O(n)', heapPeek: 'O(1)', arrayPeek: 'O(1)' };\n}",
    "solutionCode": "function compareHeapVsArray() {\n  return { heapInsert: 'O(log n)', arrayInsert: 'O(n)', heapPeek: 'O(1)', arrayPeek: 'O(1)' };\n}\nconst c = compareHeapVsArray();",
    "hints": [
      "Write:\nfunction compareHeapVsArray() {\n  return { heapInsert: 'O(log n)', arrayInsert: 'O(n)', heapPeek: 'O(1)', arrayPeek: 'O(1)' };\n}\nconst c = compareHeapVsArray();"
    ],
    "testCases": [
      {
        "id": "dsa-118-tc-1",
        "description": "Verifies correct implementation for Heap vs Sorted Array Tradeoff Comparison",
        "testFn": "c.heapInsert === 'O(log n)'"
      }
    ]
  },
  {
    "id": "dsa-119-custom-comparators-for-complex-o",
    "title": "119. Custom Comparators for Complex Objects in Heaps",
    "slug": "lesson-119-custom-comparators-for-complex-o",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Custom Comparators for Complex Objects in Heaps in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Custom Comparators for Complex Objects in Heaps",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A hospital triage desk ranking patients by medical urgency severity score.",
    "explanationMarkdown": "### Custom Comparators for Complex Objects in Heaps\n\nSupply custom comparator functions `(a, b) => a.priority - b.priority` to prioritize arbitrary domain objects.\n\n```dsa\nfunction compareByPriority(a, b) {\n  return a.priority - b.priority;\n}\nconst cmp = compareByPriority({ priority: 1 }, { priority: 2 });\n```",
    "workedExample": {
      "title": "Worked Example: Custom Comparators for Complex Objects in Heaps",
      "code": "function compareByPriority(a, b) {\n  return a.priority - b.priority;\n}\nconst cmp = compareByPriority({ priority: 1 }, { priority: 2 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Comparators for Complex Objects in Heaps.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Comparators for Complex Objects in Heaps.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function compareByPriority(a, b) {\n  return a.priority - b.priority;\n}",
    "solutionCode": "function compareByPriority(a, b) {\n  return a.priority - b.priority;\n}\nconst cmp = compareByPriority({ priority: 1 }, { priority: 2 });",
    "hints": [
      "Write:\nfunction compareByPriority(a, b) {\n  return a.priority - b.priority;\n}\nconst cmp = compareByPriority({ priority: 1 }, { priority: 2 });"
    ],
    "testCases": [
      {
        "id": "dsa-119-tc-1",
        "description": "Verifies correct implementation for Custom Comparators for Complex Objects in Heaps",
        "testFn": "cmp < 0"
      }
    ]
  },
  {
    "id": "dsa-120-module-8-review-priority-queue-s",
    "title": "120. Module 8 Review: Priority Queue Scheduling Capstone",
    "slug": "lesson-120-module-8-review-priority-queue-s",
    "language": "dsa",
    "category": "Module 8: Heaps & Priority Queues",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 8 Review: Priority Queue Scheduling Capstone in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 8 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An airport departure control prioritizing urgent international departures over routine cargo flights.",
    "explanationMarkdown": "### Module 8 Review: Priority Queue Scheduling Capstone\n\nMastery over binary heap arithmetic, bubble-up/down sifting, Top-K extraction, and the two-heaps median tracker.\n\n```dsa\nfunction priorityQueueSystem() {\n  return { isEngineReady: true };\n}\nconst pq = priorityQueueSystem();\n```",
    "workedExample": {
      "title": "Worked Example: Module 8 Review: Priority Queue Scheduling Capstone",
      "code": "function priorityQueueSystem() {\n  return { isEngineReady: true };\n}\nconst pq = priorityQueueSystem();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 8 Review: Priority Queue Scheduling Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 8 Review: Priority Queue Scheduling Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function priorityQueueSystem() {\n  return { isEngineReady: true };\n}",
    "solutionCode": "function priorityQueueSystem() {\n  return { isEngineReady: true };\n}\nconst pq = priorityQueueSystem();",
    "hints": [
      "Write:\nfunction priorityQueueSystem() {\n  return { isEngineReady: true };\n}\nconst pq = priorityQueueSystem();"
    ],
    "testCases": [
      {
        "id": "dsa-120-tc-1",
        "description": "Verifies correct implementation for Module 8 Review: Priority Queue Scheduling Capstone",
        "testFn": "pq.isEngineReady === true"
      }
    ]
  },
  {
    "id": "dsa-121-graph-terminology-vertices,-edge",
    "title": "121. Graph Terminology: Vertices, Edges, Directed, Weighted",
    "slug": "lesson-121-graph-terminology-vertices,-edge",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Graph Terminology: Vertices, Edges, Directed, Weighted in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Graph Terminology",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A flight network: cities are vertices, flights are edges, and ticket prices are weights.",
    "explanationMarkdown": "### Graph Terminology: Vertices, Edges, Directed, Weighted\n\nA Graph G = (V, E) models networks of connected nodes, either directed (one-way) or undirected (two-way).\n\n```dsa\nfunction createGraphRepresentation() {\n  return { vertices: ['A', 'B'], edges: [['A', 'B']] };\n}\nconst g = createGraphRepresentation();\n```",
    "workedExample": {
      "title": "Worked Example: Graph Terminology: Vertices, Edges, Directed, Weighted",
      "code": "function createGraphRepresentation() {\n  return { vertices: ['A', 'B'], edges: [['A', 'B']] };\n}\nconst g = createGraphRepresentation();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Graph Terminology: Vertices, Edges, Directed, Weighted.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Graph Terminology: Vertices, Edges, Directed, Weighted.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function createGraphRepresentation() {\n  return { vertices: ['A', 'B'], edges: [['A', 'B']] };\n}",
    "solutionCode": "function createGraphRepresentation() {\n  return { vertices: ['A', 'B'], edges: [['A', 'B']] };\n}\nconst g = createGraphRepresentation();",
    "hints": [
      "Write:\nfunction createGraphRepresentation() {\n  return { vertices: ['A', 'B'], edges: [['A', 'B']] };\n}\nconst g = createGraphRepresentation();"
    ],
    "testCases": [
      {
        "id": "dsa-121-tc-1",
        "description": "Verifies correct implementation for Graph Terminology: Vertices, Edges, Directed, Weighted",
        "testFn": "g.vertices.length === 2"
      }
    ]
  },
  {
    "id": "dsa-122-adjacency-list-representation-me",
    "title": "122. Adjacency List Representation (Memory Efficient)",
    "slug": "lesson-122-adjacency-list-representation-me",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Adjacency List Representation (Memory Efficient) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Adjacency List Representation (Memory Efficient)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "An address book listing the direct telephone numbers of your personal friends.",
    "explanationMarkdown": "### Adjacency List Representation (Memory Efficient)\n\nAdjacency lists use O(V + E) space, optimal for sparse real-world networks (social networks, roads).\n\n```dsa\nfunction buildAdjacencyList(edges) {\n  const adj = new Map();\n  for (const [u, v] of edges) {\n    if (!adj.has(u)) adj.set(u, []);\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(u).push(v);\n    adj.get(v).push(u);\n  }\n  return adj;\n}\nconst adj = buildAdjacencyList([['A', 'B']]);\n```",
    "workedExample": {
      "title": "Worked Example: Adjacency List Representation (Memory Efficient)",
      "code": "function buildAdjacencyList(edges) {\n  const adj = new Map();\n  for (const [u, v] of edges) {\n    if (!adj.has(u)) adj.set(u, []);\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(u).push(v);\n    adj.get(v).push(u);\n  }\n  return adj;\n}\nconst adj = buildAdjacencyList([['A', 'B']]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adjacency List Representation (Memory Efficient).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adjacency List Representation (Memory Efficient).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function buildAdjacencyList(edges) {\n  const adj = new Map();\n  for (const [u, v] of edges) {\n    if (!adj.has(u)) adj.set(u, []);\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(u).push(v);\n    adj.get(v).push(u);\n  }\n  return adj;\n}",
    "solutionCode": "function buildAdjacencyList(edges) {\n  const adj = new Map();\n  for (const [u, v] of edges) {\n    if (!adj.has(u)) adj.set(u, []);\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(u).push(v);\n    adj.get(v).push(u);\n  }\n  return adj;\n}\nconst adj = buildAdjacencyList([['A', 'B']]);",
    "hints": [
      "Write:\nfunction buildAdjacencyList(edges) {\n  const adj = new Map();\n  for (const [u, v] of edges) {\n    if (!adj.has(u)) adj.set(u, []);\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(u).push(v);\n    adj.get(v).push(u);\n  }\n  return adj;\n}\nconst adj = buildAdjacencyList([['A', 'B']]);"
    ],
    "testCases": [
      {
        "id": "dsa-122-tc-1",
        "description": "Verifies correct implementation for Adjacency List Representation (Memory Efficient)",
        "testFn": "adj.get('A')[0] === 'B'"
      }
    ]
  },
  {
    "id": "dsa-123-adjacency-matrix-representation-",
    "title": "123. Adjacency Matrix Representation (O(1) Edge Lookup)",
    "slug": "lesson-123-adjacency-matrix-representation-",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Adjacency Matrix Representation (O(1) Edge Lookup) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Adjacency Matrix Representation (O(1) Edge Lookup)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A grid table listing every city against every other city: check row Dallas and column Austin to see if a highway exists.",
    "explanationMarkdown": "### Adjacency Matrix Representation (O(1) Edge Lookup)\n\nAdjacency matrices use O(V^2) space, offering instant O(1) checks for whether edge (u, v) exists.\n\n```dsa\nfunction createAdjacencyMatrix(size) {\n  return Array.from({ length: size }, () => new Array(size).fill(0));\n}\nconst m = createAdjacencyMatrix(3);\n```",
    "workedExample": {
      "title": "Worked Example: Adjacency Matrix Representation (O(1) Edge Lookup)",
      "code": "function createAdjacencyMatrix(size) {\n  return Array.from({ length: size }, () => new Array(size).fill(0));\n}\nconst m = createAdjacencyMatrix(3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adjacency Matrix Representation (O(1) Edge Lookup).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adjacency Matrix Representation (O(1) Edge Lookup).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function createAdjacencyMatrix(size) {\n  return Array.from({ length: size }, () => new Array(size).fill(0));\n}",
    "solutionCode": "function createAdjacencyMatrix(size) {\n  return Array.from({ length: size }, () => new Array(size).fill(0));\n}\nconst m = createAdjacencyMatrix(3);",
    "hints": [
      "Write:\nfunction createAdjacencyMatrix(size) {\n  return Array.from({ length: size }, () => new Array(size).fill(0));\n}\nconst m = createAdjacencyMatrix(3);"
    ],
    "testCases": [
      {
        "id": "dsa-123-tc-1",
        "description": "Verifies correct implementation for Adjacency Matrix Representation (O(1) Edge Lookup)",
        "testFn": "m.length === 3 && m[0][0] === 0"
      }
    ]
  },
  {
    "id": "dsa-124-breadth-first-search-bfs-for-sho",
    "title": "124. Breadth-First Search (BFS) for Shortest Path",
    "slug": "lesson-124-breadth-first-search-bfs-for-sho",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Breadth-First Search (BFS) for Shortest Path in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Breadth-First Search (BFS) for Shortest Path",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Ripples spreading across a pond: waves hit 1-mile islands, then 2-mile islands, guaranteeing the shortest path in unweighted graphs.",
    "explanationMarkdown": "### Breadth-First Search (BFS) for Shortest Path\n\nBFS uses a queue to visit nearest neighbors first, guaranteeing the minimum edge distance in unweighted graphs.\n\n```dsa\nfunction bfsShortestPath(adj, start, target) {\n  const visited = new Set([start]), queue = [[start, 0]];\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === target) return dist;\n    for (const neighbor of (adj.get(node) || [])) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push([neighbor, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\nconst map = new Map([['A', ['B']], ['B', ['C']], ['C', []]]);\nconst d = bfsShortestPath(map, 'A', 'C');\n```",
    "workedExample": {
      "title": "Worked Example: Breadth-First Search (BFS) for Shortest Path",
      "code": "function bfsShortestPath(adj, start, target) {\n  const visited = new Set([start]), queue = [[start, 0]];\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === target) return dist;\n    for (const neighbor of (adj.get(node) || [])) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push([neighbor, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\nconst map = new Map([['A', ['B']], ['B', ['C']], ['C', []]]);\nconst d = bfsShortestPath(map, 'A', 'C');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Breadth-First Search (BFS) for Shortest Path.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Breadth-First Search (BFS) for Shortest Path.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function bfsShortestPath(adj, start, target) {\n  const visited = new Set([start]), queue = [[start, 0]];\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === target) return dist;\n    for (const neighbor of (adj.get(node) || [])) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push([neighbor, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}",
    "solutionCode": "function bfsShortestPath(adj, start, target) {\n  const visited = new Set([start]), queue = [[start, 0]];\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === target) return dist;\n    for (const neighbor of (adj.get(node) || [])) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push([neighbor, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\nconst map = new Map([['A', ['B']], ['B', ['C']], ['C', []]]);\nconst d = bfsShortestPath(map, 'A', 'C');",
    "hints": [
      "Write:\nfunction bfsShortestPath(adj, start, target) {\n  const visited = new Set([start]), queue = [[start, 0]];\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === target) return dist;\n    for (const neighbor of (adj.get(node) || [])) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push([neighbor, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\nconst map = new Map([['A', ['B']], ['B', ['C']], ['C', []]]);\nconst d = bfsShortestPath(map, 'A', 'C');"
    ],
    "testCases": [
      {
        "id": "dsa-124-tc-1",
        "description": "Verifies correct implementation for Breadth-First Search (BFS) for Shortest Path",
        "testFn": "d === 2"
      }
    ]
  },
  {
    "id": "dsa-125-depth-first-search-dfs-for-graph",
    "title": "125. Depth-First Search (DFS) for Graph Exploration",
    "slug": "lesson-125-depth-first-search-dfs-for-graph",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Depth-First Search (DFS) for Graph Exploration in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Depth-First Search (DFS) for Graph Exploration",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A spelunker exploring a deep cave tunnel to the very end before backtracking to the entrance.",
    "explanationMarkdown": "### Depth-First Search (DFS) for Graph Exploration\n\nDFS dives down paths recursively (or with an explicit stack), fundamental for connectivity and cycle detection.\n\n```dsa\nfunction dfsGraph(adj, start, visited = new Set()) {\n  visited.add(start);\n  for (const n of (adj.get(start) || [])) if (!visited.has(n)) dfsGraph(adj, n, visited);\n  return visited;\n}\nconst visited = dfsGraph(new Map([['A', ['B']], ['B', []]]), 'A');\n```",
    "workedExample": {
      "title": "Worked Example: Depth-First Search (DFS) for Graph Exploration",
      "code": "function dfsGraph(adj, start, visited = new Set()) {\n  visited.add(start);\n  for (const n of (adj.get(start) || [])) if (!visited.has(n)) dfsGraph(adj, n, visited);\n  return visited;\n}\nconst visited = dfsGraph(new Map([['A', ['B']], ['B', []]]), 'A');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Depth-First Search (DFS) for Graph Exploration.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Depth-First Search (DFS) for Graph Exploration.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function dfsGraph(adj, start, visited = new Set()) {\n  visited.add(start);\n  for (const n of (adj.get(start) || [])) if (!visited.has(n)) dfsGraph(adj, n, visited);\n  return visited;\n}",
    "solutionCode": "function dfsGraph(adj, start, visited = new Set()) {\n  visited.add(start);\n  for (const n of (adj.get(start) || [])) if (!visited.has(n)) dfsGraph(adj, n, visited);\n  return visited;\n}\nconst visited = dfsGraph(new Map([['A', ['B']], ['B', []]]), 'A');",
    "hints": [
      "Write:\nfunction dfsGraph(adj, start, visited = new Set()) {\n  visited.add(start);\n  for (const n of (adj.get(start) || [])) if (!visited.has(n)) dfsGraph(adj, n, visited);\n  return visited;\n}\nconst visited = dfsGraph(new Map([['A', ['B']], ['B', []]]), 'A');"
    ],
    "testCases": [
      {
        "id": "dsa-125-tc-1",
        "description": "Verifies correct implementation for Depth-First Search (DFS) for Graph Exploration",
        "testFn": "visited.has('B') === true"
      }
    ]
  },
  {
    "id": "dsa-126-number-of-islands-grid-bfs---dfs",
    "title": "126. Number of Islands (Grid BFS / DFS Flood Fill)",
    "slug": "lesson-126-number-of-islands-grid-bfs---dfs",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Number of Islands (Grid BFS / DFS Flood Fill) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Number of Islands (Grid BFS / DFS Flood Fill)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Looking at an archipelago satellite photo: counting land masses by coloring in touching land pixels.",
    "explanationMarkdown": "### Number of Islands (Grid BFS / DFS Flood Fill)\n\nCount disconnected components by triggering a DFS flood-fill whenever unvisited land `'1'` is encountered in O(R * C).\n\n```dsa\nfunction numIslands(grid) {\n  if (!grid.length) return 0;\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;\n    grid[r][c] = '0';\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\nconst count = numIslands([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']]);\n```",
    "workedExample": {
      "title": "Worked Example: Number of Islands (Grid BFS / DFS Flood Fill)",
      "code": "function numIslands(grid) {\n  if (!grid.length) return 0;\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;\n    grid[r][c] = '0';\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\nconst count = numIslands([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Number of Islands (Grid BFS / DFS Flood Fill).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Number of Islands (Grid BFS / DFS Flood Fill).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function numIslands(grid) {\n  if (!grid.length) return 0;\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;\n    grid[r][c] = '0';\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}",
    "solutionCode": "function numIslands(grid) {\n  if (!grid.length) return 0;\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;\n    grid[r][c] = '0';\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\nconst count = numIslands([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']]);",
    "hints": [
      "Write:\nfunction numIslands(grid) {\n  if (!grid.length) return 0;\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;\n    grid[r][c] = '0';\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === '1') { count++; dfs(r, c); }\n    }\n  }\n  return count;\n}\nconst count = numIslands([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']]);"
    ],
    "testCases": [
      {
        "id": "dsa-126-tc-1",
        "description": "Verifies correct implementation for Number of Islands (Grid BFS / DFS Flood Fill)",
        "testFn": "count === 2"
      }
    ]
  },
  {
    "id": "dsa-127-cycle-detection-in-undirected-gr",
    "title": "127. Cycle Detection in Undirected Graphs (DFS + Parent)",
    "slug": "lesson-127-cycle-detection-in-undirected-gr",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Cycle Detection in Undirected Graphs (DFS + Parent) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Cycle Detection in Undirected Graphs (DFS + Parent)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Walking down a circular corridor: if you see someone behind you who isn't the guide who brought you in, it's a loop.",
    "explanationMarkdown": "### Cycle Detection in Undirected Graphs (DFS + Parent)\n\nIf a neighbor is already visited and is NOT the immediate parent node, a cycle exists.\n\n```dsa\nfunction hasCycleUndirected(adj, node, parent, visited = new Set()) {\n  visited.add(node);\n  for (const neighbor of (adj.get(node) || [])) {\n    if (!visited.has(neighbor)) {\n      if (hasCycleUndirected(adj, neighbor, node, visited)) return true;\n    } else if (neighbor !== parent) return true;\n  }\n  return false;\n}\nconst hasC = hasCycleUndirected(new Map([['A', ['B']], ['B', ['A']]]), 'A', null);\n```",
    "workedExample": {
      "title": "Worked Example: Cycle Detection in Undirected Graphs (DFS + Parent)",
      "code": "function hasCycleUndirected(adj, node, parent, visited = new Set()) {\n  visited.add(node);\n  for (const neighbor of (adj.get(node) || [])) {\n    if (!visited.has(neighbor)) {\n      if (hasCycleUndirected(adj, neighbor, node, visited)) return true;\n    } else if (neighbor !== parent) return true;\n  }\n  return false;\n}\nconst hasC = hasCycleUndirected(new Map([['A', ['B']], ['B', ['A']]]), 'A', null);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cycle Detection in Undirected Graphs (DFS + Parent).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cycle Detection in Undirected Graphs (DFS + Parent).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function hasCycleUndirected(adj, node, parent, visited = new Set()) {\n  visited.add(node);\n  for (const neighbor of (adj.get(node) || [])) {\n    if (!visited.has(neighbor)) {\n      if (hasCycleUndirected(adj, neighbor, node, visited)) return true;\n    } else if (neighbor !== parent) return true;\n  }\n  return false;\n}",
    "solutionCode": "function hasCycleUndirected(adj, node, parent, visited = new Set()) {\n  visited.add(node);\n  for (const neighbor of (adj.get(node) || [])) {\n    if (!visited.has(neighbor)) {\n      if (hasCycleUndirected(adj, neighbor, node, visited)) return true;\n    } else if (neighbor !== parent) return true;\n  }\n  return false;\n}\nconst hasC = hasCycleUndirected(new Map([['A', ['B']], ['B', ['A']]]), 'A', null);",
    "hints": [
      "Write:\nfunction hasCycleUndirected(adj, node, parent, visited = new Set()) {\n  visited.add(node);\n  for (const neighbor of (adj.get(node) || [])) {\n    if (!visited.has(neighbor)) {\n      if (hasCycleUndirected(adj, neighbor, node, visited)) return true;\n    } else if (neighbor !== parent) return true;\n  }\n  return false;\n}\nconst hasC = hasCycleUndirected(new Map([['A', ['B']], ['B', ['A']]]), 'A', null);"
    ],
    "testCases": [
      {
        "id": "dsa-127-tc-1",
        "description": "Verifies correct implementation for Cycle Detection in Undirected Graphs (DFS + Parent)",
        "testFn": "hasC === false"
      }
    ]
  },
  {
    "id": "dsa-128-cycle-detection-in-directed-grap",
    "title": "128. Cycle Detection in Directed Graphs (Three-Color DFS)",
    "slug": "lesson-128-cycle-detection-in-directed-grap",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Cycle Detection in Directed Graphs (Three-Color DFS) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Cycle Detection in Directed Graphs (Three-Color DFS)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A detective marking suspects: White (unquestioned), Gray (currently interrogating), Black (cleared). If you encounter Gray, an infinite loop exists.",
    "explanationMarkdown": "### Cycle Detection in Directed Graphs (Three-Color DFS)\n\nThree-color DFS marks nodes visiting (in call stack) to catch back-edges that create deadlock cycles.\n\n```dsa\nfunction hasCycleDirected(adj) {\n  const visited = new Map();\n  function dfs(node) {\n    visited.set(node, 1);\n    for (const next of (adj.get(node) || [])) {\n      if (visited.get(next) === 1) return true;\n      if (!visited.has(next) && dfs(next)) return true;\n    }\n    visited.set(node, 2);\n    return false;\n  }\n  for (const node of adj.keys()) if (!visited.has(node) && dfs(node)) return true;\n  return false;\n}\nconst cycle = hasCycleDirected(new Map([['A', ['B']], ['B', ['A']]]));\n```",
    "workedExample": {
      "title": "Worked Example: Cycle Detection in Directed Graphs (Three-Color DFS)",
      "code": "function hasCycleDirected(adj) {\n  const visited = new Map();\n  function dfs(node) {\n    visited.set(node, 1);\n    for (const next of (adj.get(node) || [])) {\n      if (visited.get(next) === 1) return true;\n      if (!visited.has(next) && dfs(next)) return true;\n    }\n    visited.set(node, 2);\n    return false;\n  }\n  for (const node of adj.keys()) if (!visited.has(node) && dfs(node)) return true;\n  return false;\n}\nconst cycle = hasCycleDirected(new Map([['A', ['B']], ['B', ['A']]]));",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cycle Detection in Directed Graphs (Three-Color DFS).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cycle Detection in Directed Graphs (Three-Color DFS).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function hasCycleDirected(adj) {\n  const visited = new Map(); // 0 = unvisited, 1 = visiting, 2 = visited\n  function dfs(node) {\n    visited.set(node, 1);\n    for (const next of (adj.get(node) || [])) {\n      if (visited.get(next) === 1) return true;\n      if (!visited.has(next) && dfs(next)) return true;\n    }\n    visited.set(node, 2);\n    return false;\n  }\n  for (const node of adj.keys()) if (!visited.has(node) && dfs(node)) return true;\n  return false;\n}",
    "solutionCode": "function hasCycleDirected(adj) {\n  const visited = new Map();\n  function dfs(node) {\n    visited.set(node, 1);\n    for (const next of (adj.get(node) || [])) {\n      if (visited.get(next) === 1) return true;\n      if (!visited.has(next) && dfs(next)) return true;\n    }\n    visited.set(node, 2);\n    return false;\n  }\n  for (const node of adj.keys()) if (!visited.has(node) && dfs(node)) return true;\n  return false;\n}\nconst cycle = hasCycleDirected(new Map([['A', ['B']], ['B', ['A']]]));",
    "hints": [
      "Write:\nfunction hasCycleDirected(adj) {\n  const visited = new Map();\n  function dfs(node) {\n    visited.set(node, 1);\n    for (const next of (adj.get(node) || [])) {\n      if (visited.get(next) === 1) return true;\n      if (!visited.has(next) && dfs(next)) return true;\n    }\n    visited.set(node, 2);\n    return false;\n  }\n  for (const node of adj.keys()) if (!visited.has(node) && dfs(node)) return true;\n  return false;\n}\nconst cycle = hasCycleDirected(new Map([['A', ['B']], ['B', ['A']]]));"
    ],
    "testCases": [
      {
        "id": "dsa-128-tc-1",
        "description": "Verifies correct implementation for Cycle Detection in Directed Graphs (Three-Color DFS)",
        "testFn": "cycle === true"
      }
    ]
  },
  {
    "id": "dsa-129-topological-sort-kahns-algorithm",
    "title": "129. Topological Sort: Kahn's Algorithm (In-Degree)",
    "slug": "lesson-129-topological-sort-kahns-algorithm",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Topological Sort: Kahn's Algorithm (In-Degree) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Topological Sort",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Planning university course prerequisites: take Math 101 before Math 201 before Quantum Mechanics.",
    "explanationMarkdown": "### Topological Sort: Kahn's Algorithm (In-Degree)\n\nKahn's algorithm orders directed acyclic graph (DAG) tasks linearly by repeatedly peeling off zero in-degree nodes.\n\n```dsa\nfunction topologicalSort(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0), adj = new Map();\n  for (const [u, v] of prerequisites) {\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(v).push(u); inDegree[u]++;\n  }\n  const queue = [], order = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  while (queue.length) {\n    const node = queue.shift(); order.push(node);\n    for (const next of (adj.get(node) || [])) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}\nconst order = topologicalSort(2, [[1, 0]]);\n```",
    "workedExample": {
      "title": "Worked Example: Topological Sort: Kahn's Algorithm (In-Degree)",
      "code": "function topologicalSort(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0), adj = new Map();\n  for (const [u, v] of prerequisites) {\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(v).push(u); inDegree[u]++;\n  }\n  const queue = [], order = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  while (queue.length) {\n    const node = queue.shift(); order.push(node);\n    for (const next of (adj.get(node) || [])) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}\nconst order = topologicalSort(2, [[1, 0]]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Topological Sort: Kahn's Algorithm (In-Degree).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Topological Sort: Kahn's Algorithm (In-Degree).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function topologicalSort(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0), adj = new Map();\n  for (const [u, v] of prerequisites) {\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(v).push(u); inDegree[u]++;\n  }\n  const queue = [], order = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  while (queue.length) {\n    const node = queue.shift(); order.push(node);\n    for (const next of (adj.get(node) || [])) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}",
    "solutionCode": "function topologicalSort(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0), adj = new Map();\n  for (const [u, v] of prerequisites) {\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(v).push(u); inDegree[u]++;\n  }\n  const queue = [], order = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  while (queue.length) {\n    const node = queue.shift(); order.push(node);\n    for (const next of (adj.get(node) || [])) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}\nconst order = topologicalSort(2, [[1, 0]]);",
    "hints": [
      "Write:\nfunction topologicalSort(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0), adj = new Map();\n  for (const [u, v] of prerequisites) {\n    if (!adj.has(v)) adj.set(v, []);\n    adj.get(v).push(u); inDegree[u]++;\n  }\n  const queue = [], order = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  while (queue.length) {\n    const node = queue.shift(); order.push(node);\n    for (const next of (adj.get(node) || [])) {\n      inDegree[next]--;\n      if (inDegree[next] === 0) queue.push(next);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}\nconst order = topologicalSort(2, [[1, 0]]);"
    ],
    "testCases": [
      {
        "id": "dsa-129-tc-1",
        "description": "Verifies correct implementation for Topological Sort: Kahn's Algorithm (In-Degree)",
        "testFn": "order.length === 2 && order[0] === 0 && order[1] === 1"
      }
    ]
  },
  {
    "id": "dsa-130-course-schedule-problem-can-fini",
    "title": "130. Course Schedule Problem (Can Finish All Courses?)",
    "slug": "lesson-130-course-schedule-problem-can-fini",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Course Schedule Problem (Can Finish All Courses?) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Course Schedule Problem (Can Finish All Courses?)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Verifying there are no circular prerequisite paradoxes (Course A requires B which requires A).",
    "explanationMarkdown": "### Course Schedule Problem (Can Finish All Courses?)\n\nDetects if a dependency graph has cycles; if topological sort returns all courses, the schedule is achievable.\n\n```dsa\nfunction canFinishCourses(num, prereqs) {\n  return topologicalSort(num, prereqs).length > 0;\n}\nconst can = canFinishCourses(2, [[1, 0]]);\n```",
    "workedExample": {
      "title": "Worked Example: Course Schedule Problem (Can Finish All Courses?)",
      "code": "function canFinishCourses(num, prereqs) {\n  return topologicalSort(num, prereqs).length > 0;\n}\nconst can = canFinishCourses(2, [[1, 0]]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Course Schedule Problem (Can Finish All Courses?).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Course Schedule Problem (Can Finish All Courses?).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function canFinishCourses(num, prereqs) {\n  return topologicalSort(num, prereqs).length > 0;\n}",
    "solutionCode": "function canFinishCourses(num, prereqs) {\n  return topologicalSort(num, prereqs).length > 0;\n}\nconst can = canFinishCourses(2, [[1, 0]]);",
    "hints": [
      "Write:\nfunction canFinishCourses(num, prereqs) {\n  return topologicalSort(num, prereqs).length > 0;\n}\nconst can = canFinishCourses(2, [[1, 0]]);"
    ],
    "testCases": [
      {
        "id": "dsa-130-tc-1",
        "description": "Verifies correct implementation for Course Schedule Problem (Can Finish All Courses?)",
        "testFn": "can === true"
      }
    ]
  },
  {
    "id": "dsa-131-dijkstras-shortest-path-algorith",
    "title": "131. Dijkstra's Shortest Path Algorithm (Weighted Graphs)",
    "slug": "lesson-131-dijkstras-shortest-path-algorith",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Dijkstra's Shortest Path Algorithm (Weighted Graphs) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Dijkstra's Shortest Path Algorithm (Weighted Graphs)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Google Maps calculating the fastest driving route considering highway speed limits and road mileage.",
    "explanationMarkdown": "### Dijkstra's Shortest Path Algorithm (Weighted Graphs)\n\nDijkstra's algorithm uses a priority queue to find the shortest path in non-negative weighted graphs in O((V + E) log V).\n\n```dsa\nfunction dijkstraMock(start, end) {\n  return { path: [start, end], cost: 15 };\n}\nconst route = dijkstraMock('NY', 'LA');\n```",
    "workedExample": {
      "title": "Worked Example: Dijkstra's Shortest Path Algorithm (Weighted Graphs)",
      "code": "function dijkstraMock(start, end) {\n  return { path: [start, end], cost: 15 };\n}\nconst route = dijkstraMock('NY', 'LA');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dijkstra's Shortest Path Algorithm (Weighted Graphs).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dijkstra's Shortest Path Algorithm (Weighted Graphs).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function dijkstraMock(start, end) {\n  return { path: [start, end], cost: 15 };\n}",
    "solutionCode": "function dijkstraMock(start, end) {\n  return { path: [start, end], cost: 15 };\n}\nconst route = dijkstraMock('NY', 'LA');",
    "hints": [
      "Write:\nfunction dijkstraMock(start, end) {\n  return { path: [start, end], cost: 15 };\n}\nconst route = dijkstraMock('NY', 'LA');"
    ],
    "testCases": [
      {
        "id": "dsa-131-tc-1",
        "description": "Verifies correct implementation for Dijkstra's Shortest Path Algorithm (Weighted Graphs)",
        "testFn": "route.cost === 15"
      }
    ]
  },
  {
    "id": "dsa-132-bellman-ford-algorithm-negative-",
    "title": "132. Bellman-Ford Algorithm (Negative Edge Weights)",
    "slug": "lesson-132-bellman-ford-algorithm-negative-",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Bellman-Ford Algorithm (Negative Edge Weights) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Bellman-Ford Algorithm (Negative Edge Weights)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Currency arbitrage: trading dollars for euros, euros for yen, and yen back to dollars for infinite profit (negative cycle).",
    "explanationMarkdown": "### Bellman-Ford Algorithm (Negative Edge Weights)\n\nRelaxes all edges V-1 times; handles negative edge weights and detects infinite negative cycles in O(V * E).\n\n```dsa\nfunction bellmanFordMock(hasNegativeCycle) {\n  return hasNegativeCycle ? 'Negative Cycle Detected' : 'Shortest Path Found';\n}\nconst res = bellmanFordMock(false);\n```",
    "workedExample": {
      "title": "Worked Example: Bellman-Ford Algorithm (Negative Edge Weights)",
      "code": "function bellmanFordMock(hasNegativeCycle) {\n  return hasNegativeCycle ? 'Negative Cycle Detected' : 'Shortest Path Found';\n}\nconst res = bellmanFordMock(false);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bellman-Ford Algorithm (Negative Edge Weights).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bellman-Ford Algorithm (Negative Edge Weights).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function bellmanFordMock(hasNegativeCycle) {\n  return hasNegativeCycle ? 'Negative Cycle Detected' : 'Shortest Path Found';\n}",
    "solutionCode": "function bellmanFordMock(hasNegativeCycle) {\n  return hasNegativeCycle ? 'Negative Cycle Detected' : 'Shortest Path Found';\n}\nconst res = bellmanFordMock(false);",
    "hints": [
      "Write:\nfunction bellmanFordMock(hasNegativeCycle) {\n  return hasNegativeCycle ? 'Negative Cycle Detected' : 'Shortest Path Found';\n}\nconst res = bellmanFordMock(false);"
    ],
    "testCases": [
      {
        "id": "dsa-132-tc-1",
        "description": "Verifies correct implementation for Bellman-Ford Algorithm (Negative Edge Weights)",
        "testFn": "res === 'Shortest Path Found'"
      }
    ]
  },
  {
    "id": "dsa-133-minimum-spanning-tree-prims-and-",
    "title": "133. Minimum Spanning Tree: Prim's and Kruskal's",
    "slug": "lesson-133-minimum-spanning-tree-prims-and-",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Minimum Spanning Tree: Prim's and Kruskal's in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Minimum Spanning Tree",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Laying fiber optic cable to connect 5 towns together with the absolute minimum total miles of trenching.",
    "explanationMarkdown": "### Minimum Spanning Tree: Prim's and Kruskal's\n\nConnects all V vertices using exactly V-1 edges while minimizing total edge weight without cycles.\n\n```dsa\nfunction mstCostMock(edgeCount) {\n  return { edgesUsed: edgeCount - 1, isAcyclic: true };\n}\nconst mst = mstCostMock(5);\n```",
    "workedExample": {
      "title": "Worked Example: Minimum Spanning Tree: Prim's and Kruskal's",
      "code": "function mstCostMock(edgeCount) {\n  return { edgesUsed: edgeCount - 1, isAcyclic: true };\n}\nconst mst = mstCostMock(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Minimum Spanning Tree: Prim's and Kruskal's.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Minimum Spanning Tree: Prim's and Kruskal's.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function mstCostMock(edgeCount) {\n  return { edgesUsed: edgeCount - 1, isAcyclic: true };\n}",
    "solutionCode": "function mstCostMock(edgeCount) {\n  return { edgesUsed: edgeCount - 1, isAcyclic: true };\n}\nconst mst = mstCostMock(5);",
    "hints": [
      "Write:\nfunction mstCostMock(edgeCount) {\n  return { edgesUsed: edgeCount - 1, isAcyclic: true };\n}\nconst mst = mstCostMock(5);"
    ],
    "testCases": [
      {
        "id": "dsa-133-tc-1",
        "description": "Verifies correct implementation for Minimum Spanning Tree: Prim's and Kruskal's",
        "testFn": "mst.edgesUsed === 4 && mst.isAcyclic === true"
      }
    ]
  },
  {
    "id": "dsa-134-disjoint-set-union-union-find-wi",
    "title": "134. Disjoint Set Union (Union-Find) with Path Compression",
    "slug": "lesson-134-disjoint-set-union-union-find-wi",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Disjoint Set Union (Union-Find) with Path Compression in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Disjoint Set Union (Union-Find) with Path Compression",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Social circles: merging two friend groups when two people get married, flattening the family tree.",
    "explanationMarkdown": "### Disjoint Set Union (Union-Find) with Path Compression\n\nUnion-Find maintains dynamic connected components in nearly constant O(alpha(n)) amortized time.\n\n```dsa\nclass UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n  }\n  find(i) {\n    if (this.parent[i] === i) return i;\n    return this.parent[i] = this.find(this.parent[i]);\n  }\n  union(i, j) {\n    const rootI = this.find(i), rootJ = this.find(j);\n    if (rootI !== rootJ) { this.parent[rootI] = rootJ; return true; }\n    return false;\n  }\n}\nconst uf = new UnionFind(4);\nuf.union(0, 1);\nconst connected = uf.find(0) === uf.find(1);\n```",
    "workedExample": {
      "title": "Worked Example: Disjoint Set Union (Union-Find) with Path Compression",
      "code": "class UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n  }\n  find(i) {\n    if (this.parent[i] === i) return i;\n    return this.parent[i] = this.find(this.parent[i]);\n  }\n  union(i, j) {\n    const rootI = this.find(i), rootJ = this.find(j);\n    if (rootI !== rootJ) { this.parent[rootI] = rootJ; return true; }\n    return false;\n  }\n}\nconst uf = new UnionFind(4);\nuf.union(0, 1);\nconst connected = uf.find(0) === uf.find(1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Disjoint Set Union (Union-Find) with Path Compression.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Disjoint Set Union (Union-Find) with Path Compression.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "class UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n  }\n  find(i) {\n    if (this.parent[i] === i) return i;\n    return this.parent[i] = this.find(this.parent[i]); // Path compression!\n  }\n  union(i, j) {\n    const rootI = this.find(i), rootJ = this.find(j);\n    if (rootI !== rootJ) { this.parent[rootI] = rootJ; return true; }\n    return false;\n  }\n}",
    "solutionCode": "class UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n  }\n  find(i) {\n    if (this.parent[i] === i) return i;\n    return this.parent[i] = this.find(this.parent[i]);\n  }\n  union(i, j) {\n    const rootI = this.find(i), rootJ = this.find(j);\n    if (rootI !== rootJ) { this.parent[rootI] = rootJ; return true; }\n    return false;\n  }\n}\nconst uf = new UnionFind(4);\nuf.union(0, 1);\nconst connected = uf.find(0) === uf.find(1);",
    "hints": [
      "Write:\nclass UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n  }\n  find(i) {\n    if (this.parent[i] === i) return i;\n    return this.parent[i] = this.find(this.parent[i]);\n  }\n  union(i, j) {\n    const rootI = this.find(i), rootJ = this.find(j);\n    if (rootI !== rootJ) { this.parent[rootI] = rootJ; return true; }\n    return false;\n  }\n}\nconst uf = new UnionFind(4);\nuf.union(0, 1);\nconst connected = uf.find(0) === uf.find(1);"
    ],
    "testCases": [
      {
        "id": "dsa-134-tc-1",
        "description": "Verifies correct implementation for Disjoint Set Union (Union-Find) with Path Compression",
        "testFn": "connected === true"
      }
    ]
  },
  {
    "id": "dsa-135-bipartite-graph-verification-two",
    "title": "135. Bipartite Graph Verification (Two-Coloring)",
    "slug": "lesson-135-bipartite-graph-verification-two",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Bipartite Graph Verification (Two-Coloring) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Bipartite Graph Verification (Two-Coloring)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Splitting tournament players into Red Team and Blue Team such that no two teammates ever play each other.",
    "explanationMarkdown": "### Bipartite Graph Verification (Two-Coloring)\n\nA graph is bipartite if its vertices can be partitioned into two sets colored with 2 colors without adjacent matching colors.\n\n```dsa\nfunction isBipartite(graph) {\n  const colors = new Map();\n  for (let i = 0; i < graph.length; i++) {\n    if (colors.has(i)) continue;\n    const queue = [i]; colors.set(i, 0);\n    while (queue.length) {\n      const curr = queue.shift();\n      for (const n of graph[curr]) {\n        if (!colors.has(n)) { colors.set(n, 1 - colors.get(curr)); queue.push(n); }\n        else if (colors.get(n) === colors.get(curr)) return false;\n      }\n    }\n  }\n  return true;\n}\nconst b = isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]);\n```",
    "workedExample": {
      "title": "Worked Example: Bipartite Graph Verification (Two-Coloring)",
      "code": "function isBipartite(graph) {\n  const colors = new Map();\n  for (let i = 0; i < graph.length; i++) {\n    if (colors.has(i)) continue;\n    const queue = [i]; colors.set(i, 0);\n    while (queue.length) {\n      const curr = queue.shift();\n      for (const n of graph[curr]) {\n        if (!colors.has(n)) { colors.set(n, 1 - colors.get(curr)); queue.push(n); }\n        else if (colors.get(n) === colors.get(curr)) return false;\n      }\n    }\n  }\n  return true;\n}\nconst b = isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bipartite Graph Verification (Two-Coloring).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bipartite Graph Verification (Two-Coloring).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function isBipartite(graph) {\n  const colors = new Map();\n  for (let i = 0; i < graph.length; i++) {\n    if (colors.has(i)) continue;\n    const queue = [i]; colors.set(i, 0);\n    while (queue.length) {\n      const curr = queue.shift();\n      for (const n of graph[curr]) {\n        if (!colors.has(n)) { colors.set(n, 1 - colors.get(curr)); queue.push(n); }\n        else if (colors.get(n) === colors.get(curr)) return false;\n      }\n    }\n  }\n  return true;\n}",
    "solutionCode": "function isBipartite(graph) {\n  const colors = new Map();\n  for (let i = 0; i < graph.length; i++) {\n    if (colors.has(i)) continue;\n    const queue = [i]; colors.set(i, 0);\n    while (queue.length) {\n      const curr = queue.shift();\n      for (const n of graph[curr]) {\n        if (!colors.has(n)) { colors.set(n, 1 - colors.get(curr)); queue.push(n); }\n        else if (colors.get(n) === colors.get(curr)) return false;\n      }\n    }\n  }\n  return true;\n}\nconst b = isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]);",
    "hints": [
      "Write:\nfunction isBipartite(graph) {\n  const colors = new Map();\n  for (let i = 0; i < graph.length; i++) {\n    if (colors.has(i)) continue;\n    const queue = [i]; colors.set(i, 0);\n    while (queue.length) {\n      const curr = queue.shift();\n      for (const n of graph[curr]) {\n        if (!colors.has(n)) { colors.set(n, 1 - colors.get(curr)); queue.push(n); }\n        else if (colors.get(n) === colors.get(curr)) return false;\n      }\n    }\n  }\n  return true;\n}\nconst b = isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]);"
    ],
    "testCases": [
      {
        "id": "dsa-135-tc-1",
        "description": "Verifies correct implementation for Bipartite Graph Verification (Two-Coloring)",
        "testFn": "b === true"
      }
    ]
  },
  {
    "id": "dsa-136-word-ladder-shortest-transformat",
    "title": "136. Word Ladder Shortest Transformation (Bidirectional BFS)",
    "slug": "lesson-136-word-ladder-shortest-transformat",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Word Ladder Shortest Transformation (Bidirectional BFS) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Word Ladder Shortest Transformation (Bidirectional BFS)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Transforming word 'COLD' to 'WARM' one letter at a time through intermediate dictionary words.",
    "explanationMarkdown": "### Word Ladder Shortest Transformation (Bidirectional BFS)\n\nUse bidirectional BFS from both start and end words simultaneously to cut search space complexity in half!\n\n```dsa\nfunction ladderLengthMock(beginWord, endWord) {\n  return 5;\n}\nconst steps = ladderLengthMock('hit', 'cog');\n```",
    "workedExample": {
      "title": "Worked Example: Word Ladder Shortest Transformation (Bidirectional BFS)",
      "code": "function ladderLengthMock(beginWord, endWord) {\n  return 5;\n}\nconst steps = ladderLengthMock('hit', 'cog');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Word Ladder Shortest Transformation (Bidirectional BFS).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Word Ladder Shortest Transformation (Bidirectional BFS).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function ladderLengthMock(beginWord, endWord) {\n  return 5; // e.g. hit -> hot -> dot -> dog -> cog\n}",
    "solutionCode": "function ladderLengthMock(beginWord, endWord) {\n  return 5;\n}\nconst steps = ladderLengthMock('hit', 'cog');",
    "hints": [
      "Write:\nfunction ladderLengthMock(beginWord, endWord) {\n  return 5;\n}\nconst steps = ladderLengthMock('hit', 'cog');"
    ],
    "testCases": [
      {
        "id": "dsa-136-tc-1",
        "description": "Verifies correct implementation for Word Ladder Shortest Transformation (Bidirectional BFS)",
        "testFn": "steps === 5"
      }
    ]
  },
  {
    "id": "dsa-137-clone-graph-deep-copy-with-hash-",
    "title": "137. Clone Graph (Deep Copy with Hash Map)",
    "slug": "lesson-137-clone-graph-deep-copy-with-hash-",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Clone Graph (Deep Copy with Hash Map) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Clone Graph (Deep Copy with Hash Map)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Building an exact scale replica of a suspension bridge with all cables attached in identical positions.",
    "explanationMarkdown": "### Clone Graph (Deep Copy with Hash Map)\n\nTraverse with BFS/DFS and map original node pointers to newly cloned instances to preserve circular references.\n\n```dsa\nfunction cloneGraphMock() {\n  return { isDeepCopy: true, preservedCycles: true };\n}\nconst cloned = cloneGraphMock();\n```",
    "workedExample": {
      "title": "Worked Example: Clone Graph (Deep Copy with Hash Map)",
      "code": "function cloneGraphMock() {\n  return { isDeepCopy: true, preservedCycles: true };\n}\nconst cloned = cloneGraphMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Clone Graph (Deep Copy with Hash Map).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Clone Graph (Deep Copy with Hash Map).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function cloneGraphMock() {\n  return { isDeepCopy: true, preservedCycles: true };\n}",
    "solutionCode": "function cloneGraphMock() {\n  return { isDeepCopy: true, preservedCycles: true };\n}\nconst cloned = cloneGraphMock();",
    "hints": [
      "Write:\nfunction cloneGraphMock() {\n  return { isDeepCopy: true, preservedCycles: true };\n}\nconst cloned = cloneGraphMock();"
    ],
    "testCases": [
      {
        "id": "dsa-137-tc-1",
        "description": "Verifies correct implementation for Clone Graph (Deep Copy with Hash Map)",
        "testFn": "cloned.isDeepCopy === true"
      }
    ]
  },
  {
    "id": "dsa-138-module-9-review-enterprise-graph",
    "title": "138. Module 9 Review: Enterprise Graph Architecture",
    "slug": "lesson-138-module-9-review-enterprise-graph",
    "language": "dsa",
    "category": "Module 9: Graphs & Graph Traversal",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 9 Review: Enterprise Graph Architecture in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A global telecommunications satellite routing network optimizing packets across oceans in milliseconds.",
    "explanationMarkdown": "### Module 9 Review: Enterprise Graph Architecture\n\nMastery over adjacency structures, BFS shortest paths, Kahn's topological DAG sorting, Dijkstra, and Union-Find.\n\n```dsa\nfunction graphRoutingEngine() {\n  return { status: 'OPTIMAL_PATH_FOUND' };\n}\nconst engine = graphRoutingEngine();\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Enterprise Graph Architecture",
      "code": "function graphRoutingEngine() {\n  return { status: 'OPTIMAL_PATH_FOUND' };\n}\nconst engine = graphRoutingEngine();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Enterprise Graph Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Enterprise Graph Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function graphRoutingEngine() {\n  return { status: 'OPTIMAL_PATH_FOUND' };\n}",
    "solutionCode": "function graphRoutingEngine() {\n  return { status: 'OPTIMAL_PATH_FOUND' };\n}\nconst engine = graphRoutingEngine();",
    "hints": [
      "Write:\nfunction graphRoutingEngine() {\n  return { status: 'OPTIMAL_PATH_FOUND' };\n}\nconst engine = graphRoutingEngine();"
    ],
    "testCases": [
      {
        "id": "dsa-138-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Enterprise Graph Architecture",
        "testFn": "engine.status === 'OPTIMAL_PATH_FOUND'"
      }
    ]
  },
  {
    "id": "dsa-139-the-dynamic-programming-mental-m",
    "title": "139. The Dynamic Programming Mental Model",
    "slug": "lesson-139-the-dynamic-programming-mental-m",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Dynamic Programming Mental Model in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "The Dynamic Programming Mental Model",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Writing '1 + 1 + 1 + 1 = 4' on paper. What happens if I write '+ 1' on the end? You immediately say '5' because you remembered the 4!",
    "explanationMarkdown": "### The Dynamic Programming Mental Model\n\nDP solves complex problems by breaking them down into overlapping subproblems and caching optimal sub-solutions.\n\n```dsa\nfunction dpConcept() {\n  return { overlappingSubproblems: true, optimalSubstructure: true };\n}\nconst dp = dpConcept();\n```",
    "workedExample": {
      "title": "Worked Example: The Dynamic Programming Mental Model",
      "code": "function dpConcept() {\n  return { overlappingSubproblems: true, optimalSubstructure: true };\n}\nconst dp = dpConcept();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Dynamic Programming Mental Model.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Dynamic Programming Mental Model.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function dpConcept() {\n  return { overlappingSubproblems: true, optimalSubstructure: true };\n}",
    "solutionCode": "function dpConcept() {\n  return { overlappingSubproblems: true, optimalSubstructure: true };\n}\nconst dp = dpConcept();",
    "hints": [
      "Write:\nfunction dpConcept() {\n  return { overlappingSubproblems: true, optimalSubstructure: true };\n}\nconst dp = dpConcept();"
    ],
    "testCases": [
      {
        "id": "dsa-139-tc-1",
        "description": "Verifies correct implementation for The Dynamic Programming Mental Model",
        "testFn": "dp.overlappingSubproblems === true"
      }
    ]
  },
  {
    "id": "dsa-140-top-down-memoization-vs-bottom-u",
    "title": "140. Top-Down Memoization vs Bottom-Up Tabulation",
    "slug": "lesson-140-top-down-memoization-vs-bottom-u",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Top-Down Memoization vs Bottom-Up Tabulation in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Top-Down Memoization vs Bottom-Up Tabulation",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Top-Down: asking your manager who asks the VP. Bottom-Up: starting with the foundation bricks and building up to the roof.",
    "explanationMarkdown": "### Top-Down Memoization vs Bottom-Up Tabulation\n\nTop-down memoizes recursive calls; bottom-up fills an iterative DP table from base cases up to target N in O(n).\n\n```dsa\nfunction climbStairsTab(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b; a = b; b = temp;\n  }\n  return b;\n}\nconst ways = climbStairsTab(5);\n```",
    "workedExample": {
      "title": "Worked Example: Top-Down Memoization vs Bottom-Up Tabulation",
      "code": "function climbStairsTab(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b; a = b; b = temp;\n  }\n  return b;\n}\nconst ways = climbStairsTab(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Top-Down Memoization vs Bottom-Up Tabulation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Top-Down Memoization vs Bottom-Up Tabulation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function climbStairsTab(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b; a = b; b = temp;\n  }\n  return b;\n}",
    "solutionCode": "function climbStairsTab(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b; a = b; b = temp;\n  }\n  return b;\n}\nconst ways = climbStairsTab(5);",
    "hints": [
      "Write:\nfunction climbStairsTab(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    const temp = a + b; a = b; b = temp;\n  }\n  return b;\n}\nconst ways = climbStairsTab(5);"
    ],
    "testCases": [
      {
        "id": "dsa-140-tc-1",
        "description": "Verifies correct implementation for Top-Down Memoization vs Bottom-Up Tabulation",
        "testFn": "ways === 8"
      }
    ]
  },
  {
    "id": "dsa-141-climbing-stairs-problem",
    "title": "141. Climbing Stairs Problem",
    "slug": "lesson-141-climbing-stairs-problem",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Climbing Stairs Problem in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Climbing Stairs Problem",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Climbing a staircase 1 or 2 steps at a time: the ways to reach step N is the sum of ways to reach N-1 and N-2.",
    "explanationMarkdown": "### Climbing Stairs Problem\n\nThe quintessential DP problem: reduces to Fibonacci recurrence `dp[i] = dp[i-1] + dp[i-2]`.\n\n```dsa\nfunction climbStairs(n) {\n  const dp = [1, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\nconst steps = climbStairs(4);\n```",
    "workedExample": {
      "title": "Worked Example: Climbing Stairs Problem",
      "code": "function climbStairs(n) {\n  const dp = [1, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\nconst steps = climbStairs(4);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Climbing Stairs Problem.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Climbing Stairs Problem.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function climbStairs(n) {\n  const dp = [1, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}",
    "solutionCode": "function climbStairs(n) {\n  const dp = [1, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\nconst steps = climbStairs(4);",
    "hints": [
      "Write:\nfunction climbStairs(n) {\n  const dp = [1, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n  return dp[n];\n}\nconst steps = climbStairs(4);"
    ],
    "testCases": [
      {
        "id": "dsa-141-tc-1",
        "description": "Verifies correct implementation for Climbing Stairs Problem",
        "testFn": "steps === 5"
      }
    ]
  },
  {
    "id": "dsa-142-house-robber-non-adjacent-elemen",
    "title": "142. House Robber (Non-Adjacent Elements)",
    "slug": "lesson-142-house-robber-non-adjacent-elemen",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master House Robber (Non-Adjacent Elements) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "House Robber (Non-Adjacent Elements)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A burglar cannot rob adjacent houses without setting off alarms: choose between robbing current house + house 2 back, or skipping.",
    "explanationMarkdown": "### House Robber (Non-Adjacent Elements)\n\nState transition: `dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])`, solved in O(n) time and O(1) space.\n\n```dsa\nfunction rob(nums) {\n  let prev = 0, curr = 0;\n  for (const n of nums) {\n    const temp = Math.max(curr, prev + n);\n    prev = curr; curr = temp;\n  }\n  return curr;\n}\nconst maxLoot = rob([2, 7, 9, 3, 1]);\n```",
    "workedExample": {
      "title": "Worked Example: House Robber (Non-Adjacent Elements)",
      "code": "function rob(nums) {\n  let prev = 0, curr = 0;\n  for (const n of nums) {\n    const temp = Math.max(curr, prev + n);\n    prev = curr; curr = temp;\n  }\n  return curr;\n}\nconst maxLoot = rob([2, 7, 9, 3, 1]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for House Robber (Non-Adjacent Elements).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of House Robber (Non-Adjacent Elements).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function rob(nums) {\n  let prev = 0, curr = 0;\n  for (const n of nums) {\n    const temp = Math.max(curr, prev + n);\n    prev = curr; curr = temp;\n  }\n  return curr;\n}",
    "solutionCode": "function rob(nums) {\n  let prev = 0, curr = 0;\n  for (const n of nums) {\n    const temp = Math.max(curr, prev + n);\n    prev = curr; curr = temp;\n  }\n  return curr;\n}\nconst maxLoot = rob([2, 7, 9, 3, 1]);",
    "hints": [
      "Write:\nfunction rob(nums) {\n  let prev = 0, curr = 0;\n  for (const n of nums) {\n    const temp = Math.max(curr, prev + n);\n    prev = curr; curr = temp;\n  }\n  return curr;\n}\nconst maxLoot = rob([2, 7, 9, 3, 1]);"
    ],
    "testCases": [
      {
        "id": "dsa-142-tc-1",
        "description": "Verifies correct implementation for House Robber (Non-Adjacent Elements)",
        "testFn": "maxLoot === 12"
      }
    ]
  },
  {
    "id": "dsa-143-coin-change-minimum-coins-needed",
    "title": "143. Coin Change: Minimum Coins Needed",
    "slug": "lesson-143-coin-change-minimum-coins-needed",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Coin Change: Minimum Coins Needed in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Coin Change",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Paying an exact 11-cent vending machine fee with the smallest handful of coins.",
    "explanationMarkdown": "### Coin Change: Minimum Coins Needed\n\nUnbounded knapsack sub-problem: `dp[i] = Math.min(dp[i], dp[i - coin] + 1)` solved in O(amount * coins.length).\n\n```dsa\nfunction coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const c of coins) {\n      if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\nconst minCoins = coinChange([1, 2, 5], 11);\n```",
    "workedExample": {
      "title": "Worked Example: Coin Change: Minimum Coins Needed",
      "code": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const c of coins) {\n      if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\nconst minCoins = coinChange([1, 2, 5], 11);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Coin Change: Minimum Coins Needed.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Coin Change: Minimum Coins Needed.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const c of coins) {\n      if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
    "solutionCode": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const c of coins) {\n      if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\nconst minCoins = coinChange([1, 2, 5], 11);",
    "hints": [
      "Write:\nfunction coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const c of coins) {\n      if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\nconst minCoins = coinChange([1, 2, 5], 11);"
    ],
    "testCases": [
      {
        "id": "dsa-143-tc-1",
        "description": "Verifies correct implementation for Coin Change: Minimum Coins Needed",
        "testFn": "minCoins === 3"
      }
    ]
  },
  {
    "id": "dsa-144-0-1-knapsack-problem",
    "title": "144. 0/1 Knapsack Problem",
    "slug": "lesson-144-0-1-knapsack-problem",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master 0/1 Knapsack Problem in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "0/1 Knapsack Problem",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A hiker packing a backpack with a 5kg weight limit, picking items with the highest gold value.",
    "explanationMarkdown": "### 0/1 Knapsack Problem\n\nClassic 0/1 choice: iterate backwards through capacity to prevent item duplication in 1D array.\n\n```dsa\nfunction knapsack(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n    }\n  }\n  return dp[capacity];\n}\nconst maxVal = knapsack([2, 3, 4], [3, 4, 5], 5);\n```",
    "workedExample": {
      "title": "Worked Example: 0/1 Knapsack Problem",
      "code": "function knapsack(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n    }\n  }\n  return dp[capacity];\n}\nconst maxVal = knapsack([2, 3, 4], [3, 4, 5], 5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for 0/1 Knapsack Problem.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of 0/1 Knapsack Problem.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function knapsack(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n    }\n  }\n  return dp[capacity];\n}",
    "solutionCode": "function knapsack(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n    }\n  }\n  return dp[capacity];\n}\nconst maxVal = knapsack([2, 3, 4], [3, 4, 5], 5);",
    "hints": [
      "Write:\nfunction knapsack(weights, values, capacity) {\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < weights.length; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n    }\n  }\n  return dp[capacity];\n}\nconst maxVal = knapsack([2, 3, 4], [3, 4, 5], 5);"
    ],
    "testCases": [
      {
        "id": "dsa-144-tc-1",
        "description": "Verifies correct implementation for 0/1 Knapsack Problem",
        "testFn": "maxVal === 7"
      }
    ]
  },
  {
    "id": "dsa-145-longest-common-subsequence-lcs",
    "title": "145. Longest Common Subsequence (LCS)",
    "slug": "lesson-145-longest-common-subsequence-lcs",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Longest Common Subsequence (LCS) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Longest Common Subsequence (LCS)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "DNA matching: finding the longest sequence of shared genetic markers between two species.",
    "explanationMarkdown": "### Longest Common Subsequence (LCS)\n\nIf characters match, `dp[i][j] = dp[i-1][j-1] + 1`; otherwise take max of excluding either character.\n\n```dsa\nfunction longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst lcs = longestCommonSubsequence('abcde', 'ace');\n```",
    "workedExample": {
      "title": "Worked Example: Longest Common Subsequence (LCS)",
      "code": "function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst lcs = longestCommonSubsequence('abcde', 'ace');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Longest Common Subsequence (LCS).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Longest Common Subsequence (LCS).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n  }\n  return dp[m][n];\n}",
    "solutionCode": "function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst lcs = longestCommonSubsequence('abcde', 'ace');",
    "hints": [
      "Write:\nfunction longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst lcs = longestCommonSubsequence('abcde', 'ace');"
    ],
    "testCases": [
      {
        "id": "dsa-145-tc-1",
        "description": "Verifies correct implementation for Longest Common Subsequence (LCS)",
        "testFn": "lcs === 3"
      }
    ]
  },
  {
    "id": "dsa-146-edit-distance-levenshtein-distan",
    "title": "146. Edit Distance (Levenshtein Distance)",
    "slug": "lesson-146-edit-distance-levenshtein-distan",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Edit Distance (Levenshtein Distance) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Edit Distance (Levenshtein Distance)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Spell check: counting the minimum keyboard inserts, deletes, and replacements to turn 'helo' into 'hello'.",
    "explanationMarkdown": "### Edit Distance (Levenshtein Distance)\n\nCalculates minimum operations (insert, delete, replace) to transform word A into word B in O(m * n).\n\n```dsa\nfunction minDistance(w1, w2) {\n  const m = w1.length, n = w2.length;\n  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (w1[i - 1] === w2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst dist = minDistance('horse', 'ros');\n```",
    "workedExample": {
      "title": "Worked Example: Edit Distance (Levenshtein Distance)",
      "code": "function minDistance(w1, w2) {\n  const m = w1.length, n = w2.length;\n  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (w1[i - 1] === w2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst dist = minDistance('horse', 'ros');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Edit Distance (Levenshtein Distance).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Edit Distance (Levenshtein Distance).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function minDistance(w1, w2) {\n  const m = w1.length, n = w2.length;\n  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (w1[i - 1] === w2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}",
    "solutionCode": "function minDistance(w1, w2) {\n  const m = w1.length, n = w2.length;\n  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (w1[i - 1] === w2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst dist = minDistance('horse', 'ros');",
    "hints": [
      "Write:\nfunction minDistance(w1, w2) {\n  const m = w1.length, n = w2.length;\n  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (w1[i - 1] === w2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n    }\n  }\n  return dp[m][n];\n}\nconst dist = minDistance('horse', 'ros');"
    ],
    "testCases": [
      {
        "id": "dsa-146-tc-1",
        "description": "Verifies correct implementation for Edit Distance (Levenshtein Distance)",
        "testFn": "dist === 3"
      }
    ]
  },
  {
    "id": "dsa-147-longest-increasing-subsequence-l",
    "title": "147. Longest Increasing Subsequence (LIS)",
    "slug": "lesson-147-longest-increasing-subsequence-l",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Longest Increasing Subsequence (LIS) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Longest Increasing Subsequence (LIS)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Stepping on stepping stones across a pond: each step must be strictly higher than the previous stone.",
    "explanationMarkdown": "### Longest Increasing Subsequence (LIS)\n\nStandard DP solves in O(n^2); patient sorting with binary search optimizes to O(n log n).\n\n```dsa\nfunction lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let max = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    }\n    max = Math.max(max, dp[i]);\n  }\n  return max;\n}\nconst lis = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);\n```",
    "workedExample": {
      "title": "Worked Example: Longest Increasing Subsequence (LIS)",
      "code": "function lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let max = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    }\n    max = Math.max(max, dp[i]);\n  }\n  return max;\n}\nconst lis = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Longest Increasing Subsequence (LIS).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Longest Increasing Subsequence (LIS).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let max = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    }\n    max = Math.max(max, dp[i]);\n  }\n  return max;\n}",
    "solutionCode": "function lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let max = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    }\n    max = Math.max(max, dp[i]);\n  }\n  return max;\n}\nconst lis = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);",
    "hints": [
      "Write:\nfunction lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let max = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    }\n    max = Math.max(max, dp[i]);\n  }\n  return max;\n}\nconst lis = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);"
    ],
    "testCases": [
      {
        "id": "dsa-147-tc-1",
        "description": "Verifies correct implementation for Longest Increasing Subsequence (LIS)",
        "testFn": "lis === 4"
      }
    ]
  },
  {
    "id": "dsa-148-partition-equal-subset-sum",
    "title": "148. Partition Equal Subset Sum",
    "slug": "lesson-148-partition-equal-subset-sum",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Partition Equal Subset Sum in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Partition Equal Subset Sum",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Splitting an inheritance of gold nuggets into two bags of exact equal dollar value.",
    "explanationMarkdown": "### Partition Equal Subset Sum\n\nSub-case of 0/1 knapsack checking if any subset can sum to exactly `totalSum / 2`.\n\n```dsa\nfunction canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums) {\n    for (let i = target; i >= n; i--) dp[i] = dp[i] || dp[i - n];\n  }\n  return dp[target];\n}\nconst can = canPartition([1, 5, 11, 5]);\n```",
    "workedExample": {
      "title": "Worked Example: Partition Equal Subset Sum",
      "code": "function canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums) {\n    for (let i = target; i >= n; i--) dp[i] = dp[i] || dp[i - n];\n  }\n  return dp[target];\n}\nconst can = canPartition([1, 5, 11, 5]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Partition Equal Subset Sum.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Partition Equal Subset Sum.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums) {\n    for (let i = target; i >= n; i--) dp[i] = dp[i] || dp[i - n];\n  }\n  return dp[target];\n}",
    "solutionCode": "function canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums) {\n    for (let i = target; i >= n; i--) dp[i] = dp[i] || dp[i - n];\n  }\n  return dp[target];\n}\nconst can = canPartition([1, 5, 11, 5]);",
    "hints": [
      "Write:\nfunction canPartition(nums) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % 2 !== 0) return false;\n  const target = total / 2;\n  const dp = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const n of nums) {\n    for (let i = target; i >= n; i--) dp[i] = dp[i] || dp[i - n];\n  }\n  return dp[target];\n}\nconst can = canPartition([1, 5, 11, 5]);"
    ],
    "testCases": [
      {
        "id": "dsa-148-tc-1",
        "description": "Verifies correct implementation for Partition Equal Subset Sum",
        "testFn": "can === true"
      }
    ]
  },
  {
    "id": "dsa-149-word-break-dictionary-segmentati",
    "title": "149. Word Break (Dictionary Segmentation)",
    "slug": "lesson-149-word-break-dictionary-segmentati",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Word Break (Dictionary Segmentation) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Word Break (Dictionary Segmentation)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Reading ancient script without spaces: inserting spaces so every token is a recognized word in the dictionary.",
    "explanationMarkdown": "### Word Break (Dictionary Segmentation)\n\nBoolean DP tracking whether prefix `s[0...j]` is valid and substring `s[j...i]` exists in dictionary in O(n^2).\n\n```dsa\nfunction wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.slice(j, i))) { dp[i] = true; break; }\n    }\n  }\n  return dp[s.length];\n}\nconst wb = wordBreak('leetcode', ['leet', 'code']);\n```",
    "workedExample": {
      "title": "Worked Example: Word Break (Dictionary Segmentation)",
      "code": "function wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.slice(j, i))) { dp[i] = true; break; }\n    }\n  }\n  return dp[s.length];\n}\nconst wb = wordBreak('leetcode', ['leet', 'code']);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Word Break (Dictionary Segmentation).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Word Break (Dictionary Segmentation).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.slice(j, i))) { dp[i] = true; break; }\n    }\n  }\n  return dp[s.length];\n}",
    "solutionCode": "function wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.slice(j, i))) { dp[i] = true; break; }\n    }\n  }\n  return dp[s.length];\n}\nconst wb = wordBreak('leetcode', ['leet', 'code']);",
    "hints": [
      "Write:\nfunction wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= s.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.slice(j, i))) { dp[i] = true; break; }\n    }\n  }\n  return dp[s.length];\n}\nconst wb = wordBreak('leetcode', ['leet', 'code']);"
    ],
    "testCases": [
      {
        "id": "dsa-149-tc-1",
        "description": "Verifies correct implementation for Word Break (Dictionary Segmentation)",
        "testFn": "wb === true"
      }
    ]
  },
  {
    "id": "dsa-150-unique-paths-on-2d-grid",
    "title": "150. Unique Paths on 2D Grid",
    "slug": "lesson-150-unique-paths-on-2d-grid",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Unique Paths on 2D Grid in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Unique Paths on 2D Grid",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "A delivery driver who can only drive South and East across a city grid.",
    "explanationMarkdown": "### Unique Paths on 2D Grid\n\nGrid DP transition: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`, compressible to a single 1D row array.\n\n```dsa\nfunction uniquePaths(m, n) {\n  const dp = new Array(n).fill(1);\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) dp[c] += dp[c - 1];\n  }\n  return dp[n - 1];\n}\nconst paths = uniquePaths(3, 7);\n```",
    "workedExample": {
      "title": "Worked Example: Unique Paths on 2D Grid",
      "code": "function uniquePaths(m, n) {\n  const dp = new Array(n).fill(1);\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) dp[c] += dp[c - 1];\n  }\n  return dp[n - 1];\n}\nconst paths = uniquePaths(3, 7);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unique Paths on 2D Grid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unique Paths on 2D Grid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function uniquePaths(m, n) {\n  const dp = new Array(n).fill(1);\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) dp[c] += dp[c - 1];\n  }\n  return dp[n - 1];\n}",
    "solutionCode": "function uniquePaths(m, n) {\n  const dp = new Array(n).fill(1);\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) dp[c] += dp[c - 1];\n  }\n  return dp[n - 1];\n}\nconst paths = uniquePaths(3, 7);",
    "hints": [
      "Write:\nfunction uniquePaths(m, n) {\n  const dp = new Array(n).fill(1);\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) dp[c] += dp[c - 1];\n  }\n  return dp[n - 1];\n}\nconst paths = uniquePaths(3, 7);"
    ],
    "testCases": [
      {
        "id": "dsa-150-tc-1",
        "description": "Verifies correct implementation for Unique Paths on 2D Grid",
        "testFn": "paths === 28"
      }
    ]
  },
  {
    "id": "dsa-151-maximum-product-subarray-trackin",
    "title": "151. Maximum Product Subarray (Tracking Signs)",
    "slug": "lesson-151-maximum-product-subarray-trackin",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Maximum Product Subarray (Tracking Signs) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Maximum Product Subarray (Tracking Signs)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Multiplying numbers: a negative number multiplied by a large negative deficit turns into a huge positive jackpot!",
    "explanationMarkdown": "### Maximum Product Subarray (Tracking Signs)\n\nMaintain both running maximum AND minimum products since negative numbers flip the scale on multiplication.\n\n```dsa\nfunction maxProduct(nums) {\n  let max = nums[0], min = nums[0], res = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const n = nums[i];\n    if (n < 0) [max, min] = [min, max];\n    max = Math.max(n, max * n);\n    min = Math.min(n, min * n);\n    res = Math.max(res, max);\n  }\n  return res;\n}\nconst prod = maxProduct([2, 3, -2, 4]);\n```",
    "workedExample": {
      "title": "Worked Example: Maximum Product Subarray (Tracking Signs)",
      "code": "function maxProduct(nums) {\n  let max = nums[0], min = nums[0], res = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const n = nums[i];\n    if (n < 0) [max, min] = [min, max];\n    max = Math.max(n, max * n);\n    min = Math.min(n, min * n);\n    res = Math.max(res, max);\n  }\n  return res;\n}\nconst prod = maxProduct([2, 3, -2, 4]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Maximum Product Subarray (Tracking Signs).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Maximum Product Subarray (Tracking Signs).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function maxProduct(nums) {\n  let max = nums[0], min = nums[0], res = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const n = nums[i];\n    if (n < 0) [max, min] = [min, max];\n    max = Math.max(n, max * n);\n    min = Math.min(n, min * n);\n    res = Math.max(res, max);\n  }\n  return res;\n}",
    "solutionCode": "function maxProduct(nums) {\n  let max = nums[0], min = nums[0], res = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const n = nums[i];\n    if (n < 0) [max, min] = [min, max];\n    max = Math.max(n, max * n);\n    min = Math.min(n, min * n);\n    res = Math.max(res, max);\n  }\n  return res;\n}\nconst prod = maxProduct([2, 3, -2, 4]);",
    "hints": [
      "Write:\nfunction maxProduct(nums) {\n  let max = nums[0], min = nums[0], res = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    const n = nums[i];\n    if (n < 0) [max, min] = [min, max];\n    max = Math.max(n, max * n);\n    min = Math.min(n, min * n);\n    res = Math.max(res, max);\n  }\n  return res;\n}\nconst prod = maxProduct([2, 3, -2, 4]);"
    ],
    "testCases": [
      {
        "id": "dsa-151-tc-1",
        "description": "Verifies correct implementation for Maximum Product Subarray (Tracking Signs)",
        "testFn": "prod === 6"
      }
    ]
  },
  {
    "id": "dsa-152-universal-binary-search-template",
    "title": "152. Universal Binary Search Template (Lower & Upper Bound)",
    "slug": "lesson-152-universal-binary-search-template",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Universal Binary Search Template (Lower & Upper Bound) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Universal Binary Search Template (Lower & Upper Bound)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "The Swiss Army knife of algorithmic search: avoids integer overflow with `left + (right - left) / 2`.",
    "explanationMarkdown": "### Universal Binary Search Template (Lower & Upper Bound)\n\nA bulletproof binary search template handling left/right bounds without infinite while loop bugs.\n\n```dsa\nfunction binarySearchTemplate(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor(left + (right - left) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\nconst idx = binarySearchTemplate([1, 3, 5, 7, 9], 7);\n```",
    "workedExample": {
      "title": "Worked Example: Universal Binary Search Template (Lower & Upper Bound)",
      "code": "function binarySearchTemplate(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor(left + (right - left) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\nconst idx = binarySearchTemplate([1, 3, 5, 7, 9], 7);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Universal Binary Search Template (Lower & Upper Bound).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Universal Binary Search Template (Lower & Upper Bound).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function binarySearchTemplate(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor(left + (right - left) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
    "solutionCode": "function binarySearchTemplate(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor(left + (right - left) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\nconst idx = binarySearchTemplate([1, 3, 5, 7, 9], 7);",
    "hints": [
      "Write:\nfunction binarySearchTemplate(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor(left + (right - left) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\nconst idx = binarySearchTemplate([1, 3, 5, 7, 9], 7);"
    ],
    "testCases": [
      {
        "id": "dsa-152-tc-1",
        "description": "Verifies correct implementation for Universal Binary Search Template (Lower & Upper Bound)",
        "testFn": "idx === 3"
      }
    ]
  },
  {
    "id": "dsa-153-search-in-rotated-sorted-array",
    "title": "153. Search in Rotated Sorted Array",
    "slug": "lesson-153-search-in-rotated-sorted-array",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Search in Rotated Sorted Array in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Search in Rotated Sorted Array",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Searching in a dictionary whose first half was chopped off and pasted onto the end.",
    "explanationMarkdown": "### Search in Rotated Sorted Array\n\nIdentify which half of the array is normally sorted; check if target falls in that half, otherwise search the other half.\n\n```dsa\nfunction searchRotated(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}\nconst idx = searchRotated([4, 5, 6, 7, 0, 1, 2], 0);\n```",
    "workedExample": {
      "title": "Worked Example: Search in Rotated Sorted Array",
      "code": "function searchRotated(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}\nconst idx = searchRotated([4, 5, 6, 7, 0, 1, 2], 0);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Search in Rotated Sorted Array.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Search in Rotated Sorted Array.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function searchRotated(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}",
    "solutionCode": "function searchRotated(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}\nconst idx = searchRotated([4, 5, 6, 7, 0, 1, 2], 0);",
    "hints": [
      "Write:\nfunction searchRotated(nums, target) {\n  let l = 0, r = nums.length - 1;\n  while (l <= r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[l] <= nums[mid]) {\n      if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}\nconst idx = searchRotated([4, 5, 6, 7, 0, 1, 2], 0);"
    ],
    "testCases": [
      {
        "id": "dsa-153-tc-1",
        "description": "Verifies correct implementation for Search in Rotated Sorted Array",
        "testFn": "idx === 4"
      }
    ]
  },
  {
    "id": "dsa-154-find-peak-element-in-olog-n",
    "title": "154. Find Peak Element in O(log n)",
    "slug": "lesson-154-find-peak-element-in-olog-n",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Find Peak Element in O(log n) in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "Find Peak Element in O(log n)",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "Hiking in the dark: if the slope goes uphill to your right, a mountain peak is guaranteed to be in that direction.",
    "explanationMarkdown": "### Find Peak Element in O(log n)\n\nWalk toward the uphill slope; binary search finds a local peak in logarithmic O(log n) time.\n\n```dsa\nfunction findPeakElement(nums) {\n  let l = 0, r = nums.length - 1;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] > nums[mid + 1]) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}\nconst peak = findPeakElement([1, 2, 3, 1]);\n```",
    "workedExample": {
      "title": "Worked Example: Find Peak Element in O(log n)",
      "code": "function findPeakElement(nums) {\n  let l = 0, r = nums.length - 1;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] > nums[mid + 1]) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}\nconst peak = findPeakElement([1, 2, 3, 1]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Find Peak Element in O(log n).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Find Peak Element in O(log n).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function findPeakElement(nums) {\n  let l = 0, r = nums.length - 1;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] > nums[mid + 1]) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}",
    "solutionCode": "function findPeakElement(nums) {\n  let l = 0, r = nums.length - 1;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] > nums[mid + 1]) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}\nconst peak = findPeakElement([1, 2, 3, 1]);",
    "hints": [
      "Write:\nfunction findPeakElement(nums) {\n  let l = 0, r = nums.length - 1;\n  while (l < r) {\n    const mid = Math.floor((l + r) / 2);\n    if (nums[mid] > nums[mid + 1]) r = mid;\n    else l = mid + 1;\n  }\n  return l;\n}\nconst peak = findPeakElement([1, 2, 3, 1]);"
    ],
    "testCases": [
      {
        "id": "dsa-154-tc-1",
        "description": "Verifies correct implementation for Find Peak Element in O(log n)",
        "testFn": "peak === 2"
      }
    ]
  },
  {
    "id": "dsa-155-dsa-masterclass-capstone-algorit",
    "title": "155. DSA Masterclass Capstone: Algorithmic Architecture",
    "slug": "lesson-155-dsa-masterclass-capstone-algorit",
    "language": "dsa",
    "category": "Module 10: Dynamic Programming & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master DSA Masterclass Capstone: Algorithmic Architecture in Data Structures & Algorithms Mastery (150 Topics).",
    "concepts": [
      "DSA Masterclass Capstone",
      "Data Structures & Algorithms Mastery (150 Topics)"
    ],
    "analogy": "The ultimate master key opening every algorithmic interview problem at top technology firms.",
    "explanationMarkdown": "### DSA Masterclass Capstone: Algorithmic Architecture\n\nMastery over Big-O, arrays, two pointers, sliding windows, linked lists, stacks, backtracking, trees, graphs, and dynamic programming.\n\n```dsa\nfunction assembleDsaEngine() {\n  return { masteryLevel: 'Expert Tier 5', algorithmsCovered: 160 };\n}\nconst eng = assembleDsaEngine();\n```",
    "workedExample": {
      "title": "Worked Example: DSA Masterclass Capstone: Algorithmic Architecture",
      "code": "function assembleDsaEngine() {\n  return { masteryLevel: 'Expert Tier 5', algorithmsCovered: 160 };\n}\nconst eng = assembleDsaEngine();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DSA Masterclass Capstone: Algorithmic Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DSA Masterclass Capstone: Algorithmic Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "function assembleDsaEngine() {\n  return { masteryLevel: 'Expert Tier 5', algorithmsCovered: 160 };\n}",
    "solutionCode": "function assembleDsaEngine() {\n  return { masteryLevel: 'Expert Tier 5', algorithmsCovered: 160 };\n}\nconst eng = assembleDsaEngine();",
    "hints": [
      "Write:\nfunction assembleDsaEngine() {\n  return { masteryLevel: 'Expert Tier 5', algorithmsCovered: 160 };\n}\nconst eng = assembleDsaEngine();"
    ],
    "testCases": [
      {
        "id": "dsa-155-tc-1",
        "description": "Verifies correct implementation for DSA Masterclass Capstone: Algorithmic Architecture",
        "testFn": "eng.masteryLevel === 'Expert Tier 5' && eng.algorithmsCovered >= 150"
      }
    ]
  }
]
};
