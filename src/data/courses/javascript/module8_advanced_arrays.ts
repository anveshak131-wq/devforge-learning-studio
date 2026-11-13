import { Lesson } from '../../../types';

export const MODULE_8_LESSONS: Lesson[] = [
  {
    "id": "js-89-array-some",
    "title": "89. Testing Any Match with .some()",
    "slug": "array-some",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Check if at least ONE element in an array passes a test condition.",
    "concepts": [
      "array.some(predicate)",
      "Fast boolean check"
    ],
    "analogy": "Airport metal detector: if at least ONE item beeps, the alarm triggers.",
    "explanationMarkdown": "### Array .some()\nReturns `true` if **at least one** element passes:\n```javascript\nlet scores = [40, 55, 30];\nlet hasPassing = scores.some(s => s >= 50); // true\n```",
    "workedExample": {
      "title": "Worked Example: Negative Number Check",
      "code": "let nums = [10, -5, 20];\nconsole.log(nums.some(n => n < 0)); // true",
      "explanation": "\u2022 -5 is negative so returns true.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Check if `[1, 3, 5, 8]` has any even number with `.some(n => n % 2 === 0)`. Assign to `let hasEven`.",
      "Print `hasEven`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let hasEven = [1, 3, 5, 8].some(n => n % 2 === 0);\nconsole.log(hasEven);\n",
    "hints": [
      "Write `.some(n => n % 2 === 0)`"
    ],
    "testCases": [
      {
        "id": "js-89-tc-1",
        "description": "hasEven is true",
        "testFn": "hasEven === true"
      }
    ]
  },
  {
    "id": "js-90-array-every",
    "title": "90. Testing All Matches with .every()",
    "slug": "array-every",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Verify if EVERY single element in an array satisfies a condition.",
    "concepts": [
      "array.every(predicate)",
      "Universal condition check"
    ],
    "analogy": "A quality control check on a batch of lightbulbs: EVERY bulb must work for the batch to pass.",
    "explanationMarkdown": "### Array .every()\n```javascript\nlet ages = [20, 25, 30];\nlet allAdults = ages.every(a => a >= 18); // true\n```",
    "workedExample": {
      "title": "Worked Example: All Positive",
      "code": "let values = [1, 4, 9];\nconsole.log(values.every(v => v > 0)); // true",
      "explanation": "\u2022 All items are > 0.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Check if all in `[10, 20, 30]` are `>= 10`. Assign to `let allTens = [10, 20, 30].every(x => x >= 10);`.",
      "Print `allTens`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let allTens = [10, 20, 30].every(x => x >= 10);\nconsole.log(allTens);\n",
    "hints": [
      "Use `.every(x => x >= 10)`"
    ],
    "testCases": [
      {
        "id": "js-90-tc-1",
        "description": "allTens is true",
        "testFn": "allTens === true"
      }
    ]
  },
  {
    "id": "js-91-array-sort",
    "title": "91. Sorting Arrays with .sort()",
    "slug": "array-sort",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Sort numbers and strings with comparator functions (a, b) => a - b.",
    "concepts": [
      "array.sort((a, b) => a - b)",
      "Alphabetical vs numeric sorting"
    ],
    "analogy": "Sorting books on a library shelf by call number or title.",
    "explanationMarkdown": "### Array .sort()\nBy default, `.sort()` treats everything as text! Always provide a comparator for numbers:\n```javascript\nlet nums = [10, 5, 40, 25];\nnums.sort((a, b) => a - b); // Ascending: [5, 10, 25, 40]\nnums.sort((a, b) => b - a); // Descending: [40, 25, 10, 5]\n```",
    "workedExample": {
      "title": "Worked Example: Ascending Sort",
      "code": "let prices = [100, 20, 50];\nprices.sort((a, b) => a - b);\nconsole.log(prices[0]); // 20",
      "explanation": "\u2022 Lowest price is first.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Sort `[30, 10, 20]` ascending with `.sort((a, b) => a - b);`. Assign to `let sorted`.",
      "Print `sorted`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let sorted = [30, 10, 20].sort((a, b) => a - b);\nconsole.log(sorted);\n",
    "hints": [
      "Write `.sort((a, b) => a - b)`"
    ],
    "testCases": [
      {
        "id": "js-91-tc-1",
        "description": "sorted is [10, 20, 30]",
        "testFn": "sorted[0] === 10 && sorted[1] === 20 && sorted[2] === 30"
      }
    ]
  },
  {
    "id": "js-92-array-flat",
    "title": "92. Flattening Nested Arrays with .flat()",
    "slug": "array-flat",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Un-nest multi-dimensional arrays into a single clean 1D list.",
    "concepts": [
      "array.flat(depth)"
    ],
    "analogy": "Unpacking smaller boxes nested inside a shipping crate into one flat floor.",
    "explanationMarkdown": "### Array .flat()\n```javascript\nlet nested = [1, [2, 3], [4, 5]];\nlet flatList = nested.flat(); // [1, 2, 3, 4, 5]\n```",
    "workedExample": {
      "title": "Worked Example: Un-nesting pairs",
      "code": "let grid = [[1, 2], [3, 4]];\nconsole.log(grid.flat());",
      "explanation": "\u2022 Produces [1, 2, 3, 4].",
      "expectedOutput": "[1,2,3,4]"
    },
    "exerciseSteps": [
      "Flatten `[[10, 20], [30, 40]]` using `.flat()`. Assign to `let flatArr`.",
      "Print `flatArr.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let flatArr = [[10, 20], [30, 40]].flat();\nconsole.log(flatArr.length);\n",
    "hints": [
      "Call `.flat()`"
    ],
    "testCases": [
      {
        "id": "js-92-tc-1",
        "description": "flatArr has 4 elements",
        "testFn": "flatArr.length === 4 && flatArr[3] === 40"
      }
    ]
  },
  {
    "id": "js-93-array-flatmap",
    "title": "93. Transforming & Flattening with .flatMap()",
    "slug": "array-flatmap",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Map items into sub-arrays and automatically flatten the result by 1 level.",
    "concepts": [
      "array.flatMap(fn)",
      "Combining map and flat"
    ],
    "analogy": "Splitting sentences into words and gathering all words into one unified dictionary.",
    "explanationMarkdown": "### Array .flatMap()\n```javascript\nlet sentences = [\"Hello world\", \"JavaScript rocks\"];\nlet words = sentences.flatMap(s => s.split(\" \"));\n// [\"Hello\", \"world\", \"JavaScript\", \"rocks\"]\n```",
    "workedExample": {
      "title": "Worked Example: Duplicate Expansion",
      "code": "let nums = [1, 2];\nlet pairs = nums.flatMap(n => [n, n * 10]);\nconsole.log(pairs); // [1, 10, 2, 20]",
      "explanation": "\u2022 Expands each number and flattens.",
      "expectedOutput": "[1,10,2,20]"
    },
    "exerciseSteps": [
      "Use `.flatMap(x => [x, x])` on `[1, 2]`. Assign to `let doubledList`.",
      "Print `doubledList`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let doubledList = [1, 2].flatMap(x => [x, x]);\nconsole.log(doubledList);\n",
    "hints": [
      "Use `.flatMap(x => [x, x])`"
    ],
    "testCases": [
      {
        "id": "js-93-tc-1",
        "description": "doubledList is [1, 1, 2, 2]",
        "testFn": "doubledList.length === 4 && doubledList[3] === 2"
      }
    ]
  },
  {
    "id": "js-94-array-destructuring",
    "title": "94. Array Destructuring: const [a, b] = arr",
    "slug": "array-destructuring",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Unpack items from an array into distinct variables in one line.",
    "concepts": [
      "const [x, y] = array",
      "Positional assignment"
    ],
    "analogy": "Taking items out of a gift box: assigning the left item to Alice and the right item to Bob.",
    "explanationMarkdown": "### Array Destructuring\n```javascript\nconst coordinates = [10, 25];\nconst [x, y] = coordinates;\nconsole.log(x); // 10\nconsole.log(y); // 25\n```",
    "workedExample": {
      "title": "Worked Example: First & Second Place",
      "code": "const podium = [\"Gold\", \"Silver\", \"Bronze\"];\nconst [first, second] = podium;\nconsole.log(first); // Gold",
      "explanation": "\u2022 Unpacks first two values.",
      "expectedOutput": "Gold"
    },
    "exerciseSteps": [
      "Destructure `const [first, second] = [\"A\", \"B\"];`.",
      "Print `first + second`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "const [first, second] = [\"A\", \"B\"];\nconsole.log(first + second);\n",
    "hints": [
      "Write `const [first, second] = [\"A\", \"B\"];`"
    ],
    "testCases": [
      {
        "id": "js-94-tc-1",
        "description": "first is A and second is B",
        "testFn": "first === 'A' && second === 'B'"
      }
    ]
  },
  {
    "id": "js-95-array-destructuring-rest",
    "title": "95. Destructuring with Rest: [head, ...tail]",
    "slug": "array-destructuring-rest",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Extract the first element and collect all remaining items into a rest array.",
    "concepts": [
      "const [first, ...rest] = array",
      "Head and tail separation"
    ],
    "analogy": "Appointing a team captain (first) and grouping everyone else as the squad (rest).",
    "explanationMarkdown": "### Head & Tail Destructuring\n```javascript\nlet fruits = [\"apple\", \"banana\", \"cherry\", \"date\"];\nlet [fav, ...others] = fruits;\nconsole.log(fav);    // \"apple\"\nconsole.log(others); // [\"banana\", \"cherry\", \"date\"]\n```",
    "workedExample": {
      "title": "Worked Example: Leader and Members",
      "code": "let members = [\"Alice\", \"Bob\", \"Charlie\"];\nlet [leader, ...crew] = members;\nconsole.log(crew.length); // 2",
      "explanation": "\u2022 crew has remaining 2 items.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Destructure `let [top, ...others] = [100, 80, 70];`.",
      "Print `others.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let [top, ...others] = [100, 80, 70];\nconsole.log(others.length);\n",
    "hints": [
      "Write `let [top, ...others] = [100, 80, 70];`"
    ],
    "testCases": [
      {
        "id": "js-95-tc-1",
        "description": "top is 100 and others has 2 items",
        "testFn": "top === 100 && others.length === 2"
      }
    ]
  },
  {
    "id": "js-96-array-spread-operator",
    "title": "96. Spreading Arrays with ... Spread Operator",
    "slug": "array-spread-operator",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Clone and combine arrays effortlessly using [...arr1, ...arr2].",
    "concepts": [
      "[...arr]",
      "Array expansion and shallow copying"
    ],
    "analogy": "Dumping the contents of two grocery carts into one giant box.",
    "explanationMarkdown": "### Array Spread Operator (...)\n```javascript\nlet arr1 = [1, 2];\nlet arr2 = [3, 4];\nlet combined = [...arr1, ...arr2]; // [1, 2, 3, 4]\n```",
    "workedExample": {
      "title": "Worked Example: Cloning Array",
      "code": "let original = [5, 10];\nlet clone = [...original, 15];\nconsole.log(clone); // [5, 10, 15]",
      "explanation": "\u2022 Creates new array with 15 appended.",
      "expectedOutput": "[5,10,15]"
    },
    "exerciseSteps": [
      "Combine `[1, 2]` and `[3, 4]` using spread: `let all = [...[1, 2], ...[3, 4]];`.",
      "Print `all.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let all = [...[1, 2], ...[3, 4]];\nconsole.log(all.length);\n",
    "hints": [
      "Write `let all = [...[1, 2], ...[3, 4]];`"
    ],
    "testCases": [
      {
        "id": "js-96-tc-1",
        "description": "all contains [1, 2, 3, 4]",
        "testFn": "all.length === 4 && all[3] === 4"
      }
    ]
  },
  {
    "id": "js-97-array-from",
    "title": "97. Creating Arrays with Array.from()",
    "slug": "array-from",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Convert array-like objects or strings into true arrays.",
    "concepts": [
      "Array.from(iterable, mapFn)"
    ],
    "analogy": "A factory mold: pouring raw liquid material into individual formed ice cubes.",
    "explanationMarkdown": "### Array.from()\n```javascript\nlet letters = Array.from(\"hello\"); // [\"h\", \"e\", \"l\", \"l\", \"o\"]\nlet numbers = Array.from({length: 3}, (_, i) => i + 1); // [1, 2, 3]\n```",
    "workedExample": {
      "title": "Worked Example: String to Array",
      "code": "let chars = Array.from(\"Code\");\nconsole.log(chars.length); // 4",
      "explanation": "\u2022 Converts 'Code' into 4 character array.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Convert `'Dev'` into an array using `Array.from('Dev')`. Assign to `let arr`.",
      "Print `arr.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let arr = Array.from('Dev');\nconsole.log(arr.length);\n",
    "hints": [
      "Use `Array.from('Dev')`"
    ],
    "testCases": [
      {
        "id": "js-97-tc-1",
        "description": "arr has 3 items ['D', 'e', 'v']",
        "testFn": "arr.length === 3 && arr[0] === 'D'"
      }
    ]
  },
  {
    "id": "js-98-array-isarray",
    "title": "98. Checking Array Type with Array.isArray()",
    "slug": "array-isarray",
    "language": "javascript",
    "category": "Module 8: Advanced Array Operations",
    "difficulty": "Beginner",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reliably test if a variable is an array (since typeof [] returns 'object').",
    "concepts": [
      "Array.isArray(value)",
      "Distinguishing arrays from plain objects"
    ],
    "analogy": "An airport baggage scanner checking if a bag is a standard rolling suitcase or an irregular box.",
    "explanationMarkdown": "### Array.isArray()\nIn JavaScript, `typeof []` returns `'object'`. To verify if it is really an array:\n```javascript\nconsole.log(Array.isArray([1, 2])); // true\nconsole.log(Array.isArray({}));      // false\n```",
    "workedExample": {
      "title": "Worked Example: Verification",
      "code": "console.log(Array.isArray([\"a\", \"b\"])); // true",
      "explanation": "\u2022 Confirms value is an array.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Check `Array.isArray(['test'])`. Assign to `let check`.",
      "Print `check`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let check = Array.isArray(['test']);\nconsole.log(check);\n",
    "hints": [
      "Use `Array.isArray(['test'])`"
    ],
    "testCases": [
      {
        "id": "js-98-tc-1",
        "description": "check is true",
        "testFn": "check === true"
      }
    ]
  }
];
