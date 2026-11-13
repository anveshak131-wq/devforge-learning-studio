import { Lesson } from '../../../types';

export const MODULE_7_LESSONS: Lesson[] = [
  {
    "id": "js-73-array-basics",
    "title": "73. Creating Arrays & Zero-Based Indexing",
    "slug": "array-basics",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Store ordered collections of items inside square brackets [].",
    "concepts": [
      "Array literal []",
      "Zero-based index [0]"
    ],
    "analogy": "A train with numbered freight cars starting from car 0.",
    "explanationMarkdown": "### Arrays\n```javascript\nlet fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[0]); // \"apple\"\n```",
    "workedExample": {
      "title": "Worked Example: First element",
      "code": "let colors = [\"red\", \"green\"];\nconsole.log(colors[0]);",
      "explanation": "\u2022 Index 0 is 'red'.",
      "expectedOutput": "red"
    },
    "exerciseSteps": [
      "Create `let scores = [100, 95, 88];`.",
      "Print `scores[0]`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let scores = [100, 95, 88];\nconsole.log(scores[0]);\n",
    "hints": [
      "Write `scores[0]`"
    ],
    "testCases": [
      {
        "id": "js-73-tc-1",
        "description": "scores[0] is 100",
        "testFn": "scores[0] === 100"
      }
    ]
  },
  {
    "id": "js-74-array-push",
    "title": "74. Adding to the End with .push()",
    "slug": "array-push",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Append new items onto the end of an array using .push().",
    "concepts": [
      ".push(item)",
      "Mutating array length"
    ],
    "analogy": "Adding a new customer to the back of a line.",
    "explanationMarkdown": "### The .push() Method\n```javascript\nlet list = [\"a\", \"b\"];\nlist.push(\"c\");\nconsole.log(list); // [\"a\", \"b\", \"c\"]\n```",
    "workedExample": {
      "title": "Worked Example: Appending",
      "code": "let items = [1, 2];\nitems.push(3);\nconsole.log(items.length); // 3",
      "explanation": "\u2022 Appends 3 onto items.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Start with `let inventory = [\"sword\"];`.",
      "Push `\"shield\"` with `inventory.push(\"shield\");`.",
      "Print `inventory.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let inventory = [\"sword\"];\ninventory.push(\"shield\");\nconsole.log(inventory.length);\n",
    "hints": [
      "Write `inventory.push(\"shield\");`"
    ],
    "testCases": [
      {
        "id": "js-74-tc-1",
        "description": "inventory has 2 items",
        "testFn": "inventory.length === 2 && inventory[1] === 'shield'"
      }
    ]
  },
  {
    "id": "js-75-array-pop",
    "title": "75. Removing from the End with .pop()",
    "slug": "array-pop",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Remove and return the last item of an array.",
    "concepts": [
      ".pop()",
      "LIFO (Last in, first out)"
    ],
    "analogy": "Taking the top plate off a stack of dishes.",
    "explanationMarkdown": "### The .pop() Method\n```javascript\nlet queue = [1, 2, 3];\nlet last = queue.pop(); // 3\nconsole.log(queue);     // [1, 2]\n```",
    "workedExample": {
      "title": "Worked Example: Popping item",
      "code": "let letters = [\"x\", \"y\", \"z\"];\nlet removed = letters.pop();\nconsole.log(removed);",
      "explanation": "\u2022 Removes 'z'.",
      "expectedOutput": "z"
    },
    "exerciseSteps": [
      "Create `let cards = [10, 20, 30];`.",
      "Pop into `let lastCard = cards.pop();`.",
      "Print `lastCard`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let cards = [10, 20, 30];\nlet lastCard = cards.pop();\nconsole.log(lastCard);\n",
    "hints": [
      "Use `cards.pop()`"
    ],
    "testCases": [
      {
        "id": "js-75-tc-1",
        "description": "lastCard is 30",
        "testFn": "lastCard === 30 && cards.length === 2"
      }
    ]
  },
  {
    "id": "js-76-array-unshift-shift",
    "title": "76. Front Operations: .unshift() & .shift()",
    "slug": "array-unshift-shift",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Add to the front with unshift() and remove from front with shift().",
    "concepts": [
      ".unshift(item)",
      ".shift()"
    ],
    "analogy": "Letting someone cut to the very front of the line (unshift).",
    "explanationMarkdown": "### Front Operations\n* `.unshift(item)`: Adds to the very beginning (index 0).\n* `.shift()`: Removes the first item from index 0.\n```javascript\nlet list = [2, 3];\nlist.unshift(1); // [1, 2, 3]\n```",
    "workedExample": {
      "title": "Worked Example: Queue shift",
      "code": "let patients = [\"Alice\", \"Bob\"];\nlet current = patients.shift();\nconsole.log(current); // Alice",
      "explanation": "\u2022 Takes the first patient.",
      "expectedOutput": "Alice"
    },
    "exerciseSteps": [
      "Start with `let nums = [20, 30];`.",
      "Unshift `10` with `nums.unshift(10);`.",
      "Print `nums[0]`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let nums = [20, 30];\nnums.unshift(10);\nconsole.log(nums[0]);\n",
    "hints": [
      "Use `nums.unshift(10)`"
    ],
    "testCases": [
      {
        "id": "js-76-tc-1",
        "description": "nums[0] is 10 and length is 3",
        "testFn": "nums[0] === 10 && nums.length === 3"
      }
    ]
  },
  {
    "id": "js-77-array-slice",
    "title": "77. Sub-Arrays with .slice()",
    "slug": "array-slice",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Extract a portion of an array into a new array without modifying the original.",
    "concepts": [
      "array.slice(start, end)",
      "Immutable slice"
    ],
    "analogy": "Photocopying pages 2 through 4 of a binder without tearing out the pages.",
    "explanationMarkdown": "### Array .slice()\n```javascript\nlet alphabet = [\"a\", \"b\", \"c\", \"d\"];\nlet sub = alphabet.slice(1, 3); // [\"b\", \"c\"]\n```",
    "workedExample": {
      "title": "Worked Example: Top 2 Scores",
      "code": "let all = [100, 95, 80, 70];\nlet top2 = all.slice(0, 2);\nconsole.log(top2);",
      "explanation": "\u2022 Slices first 2 items [100, 95].",
      "expectedOutput": "[100,95]"
    },
    "exerciseSteps": [
      "Slice the first 2 items of `[1, 2, 3, 4]`. Assign to `let pair = [1, 2, 3, 4].slice(0, 2);`.",
      "Print `pair.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let pair = [1, 2, 3, 4].slice(0, 2);\nconsole.log(pair.length);\n",
    "hints": [
      "Use `.slice(0, 2)`"
    ],
    "testCases": [
      {
        "id": "js-77-tc-1",
        "description": "pair has 2 items [1, 2]",
        "testFn": "pair.length === 2 && pair[0] === 1 && pair[1] === 2"
      }
    ]
  },
  {
    "id": "js-78-array-splice",
    "title": "78. Modifying In-Place with .splice()",
    "slug": "array-splice",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Add, remove, or replace elements in an array at any index position.",
    "concepts": [
      "array.splice(startIndex, deleteCount, ...insertItems)",
      "In-place mutation"
    ],
    "analogy": "Performing surgery on an array: remove a piece and suture a new one in place.",
    "explanationMarkdown": "### Array .splice()\nUnlike `.slice()`, `.splice()` **alters** the original array:\n```javascript\nlet items = [\"A\", \"B\", \"C\"];\nitems.splice(1, 1); // Removes 1 item at index 1 -> [\"A\", \"C\"]\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Middle Item",
      "code": "let list = [10, 20, 30];\nlist.splice(1, 1);\nconsole.log(list); // [10, 30]",
      "explanation": "\u2022 Removes 20 from the list.",
      "expectedOutput": "[10,30]"
    },
    "exerciseSteps": [
      "Remove 1 item at index 1 from `let arr = ['x', 'y', 'z'];` using `arr.splice(1, 1);`.",
      "Print `arr.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let arr = ['x', 'y', 'z'];\narr.splice(1, 1);\nconsole.log(arr.length);\n",
    "hints": [
      "Use `arr.splice(1, 1)`"
    ],
    "testCases": [
      {
        "id": "js-78-tc-1",
        "description": "arr contains ['x', 'z']",
        "testFn": "arr.length === 2 && arr[1] === 'z'"
      }
    ]
  },
  {
    "id": "js-79-array-concat",
    "title": "79. Merging Arrays with .concat()",
    "slug": "array-concat",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Combine two or more arrays into a new combined array.",
    "concepts": [
      "arr1.concat(arr2)",
      "Non-destructive merging"
    ],
    "analogy": "Coupling two train sections together.",
    "explanationMarkdown": "### Array .concat()\n```javascript\nlet a = [1, 2];\nlet b = [3, 4];\nlet combined = a.concat(b); // [1, 2, 3, 4]\n```",
    "workedExample": {
      "title": "Worked Example: Team merger",
      "code": "let teamA = [\"Maya\"];\nlet teamB = [\"Liam\"];\nlet all = teamA.concat(teamB);\nconsole.log(all.length); // 2",
      "explanation": "\u2022 Combines both teams.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Combine `[10, 20]` and `[30, 40]`. Assign to `let merged = [10, 20].concat([30, 40]);`.",
      "Print `merged.length`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let merged = [10, 20].concat([30, 40]);\nconsole.log(merged.length);\n",
    "hints": [
      "Use `.concat()`"
    ],
    "testCases": [
      {
        "id": "js-79-tc-1",
        "description": "merged has 4 items",
        "testFn": "merged.length === 4 && merged[3] === 40"
      }
    ]
  },
  {
    "id": "js-80-array-join",
    "title": "80. Joining Arrays into Strings with .join()",
    "slug": "array-join",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Glues array items together into a single string with a custom separator.",
    "concepts": [
      "array.join(separator)",
      "Formatting lists into sentences"
    ],
    "analogy": "Stringing individual paper cutouts together into a banner with string.",
    "explanationMarkdown": "### Array .join()\n```javascript\nlet words = [\"JavaScript\", \"is\", \"fun\"];\nconsole.log(words.join(\" \")); // \"JavaScript is fun\"\nconsole.log(words.join(\"-\")); // \"JavaScript-is-fun\"\n```",
    "workedExample": {
      "title": "Worked Example: CSV export",
      "code": "let ids = [101, 102, 103];\nconsole.log(ids.join(\", \"));",
      "explanation": "\u2022 Formats with commas: '101, 102, 103'.",
      "expectedOutput": "101, 102, 103"
    },
    "exerciseSteps": [
      "Join `[\"cat\", \"dog\"]` with `\" & \"`. Assign to `let text = [\"cat\", \"dog\"].join(\" & \");`.",
      "Print `text`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let text = [\"cat\", \"dog\"].join(\" & \");\nconsole.log(text);\n",
    "hints": [
      "Write `.join(\" & \")`"
    ],
    "testCases": [
      {
        "id": "js-80-tc-1",
        "description": "text is 'cat & dog'",
        "testFn": "typeof text !== 'undefined' && text === 'cat & dog'"
      }
    ]
  },
  {
    "id": "js-81-array-includes",
    "title": "81. Checking Membership with .includes()",
    "slug": "array-includes",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Quickly verify if an item exists inside an array with true or false.",
    "concepts": [
      "array.includes(item)",
      "Fast lookup"
    ],
    "analogy": "Checking a guest list at a door: is their name on the list?",
    "explanationMarkdown": "### Array .includes()\n```javascript\nlet roles = [\"admin\", \"editor\", \"viewer\"];\nconsole.log(roles.includes(\"admin\")); // true\nconsole.log(roles.includes(\"super\")); // false\n```",
    "workedExample": {
      "title": "Worked Example: Member check",
      "code": "let members = [\"Sam\", \"Aria\"];\nconsole.log(members.includes(\"Aria\"));",
      "explanation": "\u2022 Aria is present, returns true.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Check if `[1, 2, 3]` includes `2`. Assign to `let hasTwo = [1, 2, 3].includes(2);`.",
      "Print `hasTwo`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let hasTwo = [1, 2, 3].includes(2);\nconsole.log(hasTwo);\n",
    "hints": [
      "Use `[1, 2, 3].includes(2)`"
    ],
    "testCases": [
      {
        "id": "js-81-tc-1",
        "description": "hasTwo is true",
        "testFn": "hasTwo === true"
      }
    ]
  },
  {
    "id": "js-82-array-reverse",
    "title": "82. Inverting Order with .reverse()",
    "slug": "array-reverse",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flip the order of elements in an array from back to front.",
    "concepts": [
      "array.reverse()",
      "In-place mutation"
    ],
    "analogy": "Flipping a deck of cards upside down.",
    "explanationMarkdown": "### Array .reverse()\n```javascript\nlet nums = [1, 2, 3];\nnums.reverse();\nconsole.log(nums); // [3, 2, 1]\n```",
    "workedExample": {
      "title": "Worked Example: Inverting Letters",
      "code": "let letters = [\"a\", \"b\", \"c\"];\nletters.reverse();\nconsole.log(letters[0]); // c",
      "explanation": "\u2022 Inverts order so c is first.",
      "expectedOutput": "c"
    },
    "exerciseSteps": [
      "Reverse `let list = [10, 20, 30];` with `list.reverse();`.",
      "Print `list[0]`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let list = [10, 20, 30];\nlist.reverse();\nconsole.log(list[0]);\n",
    "hints": [
      "Call `list.reverse()`"
    ],
    "testCases": [
      {
        "id": "js-82-tc-1",
        "description": "list[0] is 30",
        "testFn": "list[0] === 30"
      }
    ]
  },
  {
    "id": "js-83-array-foreach",
    "title": "83. Iterating with .forEach()",
    "slug": "array-foreach",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Execute a callback function on every item in an array cleanly.",
    "concepts": [
      "array.forEach((item, index) => {})"
    ],
    "analogy": "Handing an envelope to each person in a lineup.",
    "explanationMarkdown": "### Array .forEach()\n```javascript\nlet names = [\"Ada\", \"Grace\"];\nnames.forEach(n => console.log(\"Hello \" + n));\n```",
    "workedExample": {
      "title": "Worked Example: Doubling Log",
      "code": "let numbers = [1, 2, 3];\nnumbers.forEach(n => console.log(n * 2));",
      "explanation": "\u2022 Logs 2, 4, 6.",
      "expectedOutput": "2\n4\n6"
    },
    "exerciseSteps": [
      "Loop over `['A', 'B']` with `.forEach(letter => console.log(letter))`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "['A', 'B'].forEach(letter => {\n  console.log(letter);\n});\n",
    "hints": [
      "Use `.forEach(letter => console.log(letter))`"
    ],
    "testCases": [
      {
        "id": "js-83-tc-1",
        "description": "Logs A and B",
        "testFn": "logs.some(l => l.args.join(' ').includes('A')) && logs.some(l => l.args.join(' ').includes('B'))"
      }
    ]
  },
  {
    "id": "js-84-array-map",
    "title": "84. Transforming Lists with .map()",
    "slug": "array-map",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create a brand new array where every element is transformed by your function.",
    "concepts": [
      "array.map(fn)",
      "1-to-1 transformation",
      "Immutable mapping"
    ],
    "analogy": "A photo filter machine: input 3 raw photos, output 3 black-and-white photos.",
    "explanationMarkdown": "### Array .map()\nTransforms each item into a new array of the same length:\n```javascript\nlet nums = [1, 2, 3];\nlet doubled = nums.map(x => x * 2); // [2, 4, 6]\n```",
    "workedExample": {
      "title": "Worked Example: Prices with Tax",
      "code": "let prices = [10, 20];\nlet withTax = prices.map(p => p * 1.1);\nconsole.log(withTax[0]); // 11",
      "explanation": "\u2022 Multiplies each price by 1.1.",
      "expectedOutput": "11"
    },
    "exerciseSteps": [
      "Triple every number in `[2, 4]` using `.map(x => x * 3)`. Assign to `let tripled`.",
      "Print `tripled`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let tripled = [2, 4].map(x => x * 3);\nconsole.log(tripled);\n",
    "hints": [
      "Use `[2, 4].map(x => x * 3)`"
    ],
    "testCases": [
      {
        "id": "js-84-tc-1",
        "description": "tripled is [6, 12]",
        "testFn": "tripled[0] === 6 && tripled[1] === 12"
      }
    ]
  },
  {
    "id": "js-85-array-filter",
    "title": "85. Filtering Items with .filter()",
    "slug": "array-filter",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Keep only the elements that satisfy your true/false test condition.",
    "concepts": [
      "array.filter(predicateFn)",
      "Filtering subsets"
    ],
    "analogy": "A water filter or sieve: only small water molecules pass through, dirt is filtered out.",
    "explanationMarkdown": "### Array .filter()\nReturns a new array with items that returned `true`:\n```javascript\nlet scores = [90, 45, 80, 30];\nlet passing = scores.filter(s => s >= 50); // [90, 80]\n```",
    "workedExample": {
      "title": "Worked Example: Even numbers only",
      "code": "let numbers = [1, 2, 3, 4, 5];\nlet evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4]",
      "explanation": "\u2022 Keeps only even numbers.",
      "expectedOutput": "[2,4]"
    },
    "exerciseSteps": [
      "Filter `[5, 12, 8, 20]` for numbers `>= 10`. Assign to `let bigNums`.",
      "Print `bigNums`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let bigNums = [5, 12, 8, 20].filter(n => n >= 10);\nconsole.log(bigNums);\n",
    "hints": [
      "Use `.filter(n => n >= 10)`"
    ],
    "testCases": [
      {
        "id": "js-85-tc-1",
        "description": "bigNums contains [12, 20]",
        "testFn": "bigNums.length === 2 && bigNums[0] === 12 && bigNums[1] === 20"
      }
    ]
  },
  {
    "id": "js-86-array-reduce",
    "title": "86. Aggregating Values with .reduce()",
    "slug": "array-reduce",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 7,
    "xp": 40,
    "description": "Boil an entire array down into a single summary value (like a total sum).",
    "concepts": [
      "array.reduce((acc, curr) => ..., initialVal)",
      "Accumulators"
    ],
    "analogy": "A snowball rolling downhill: it collects and aggregates snow into one giant snowball.",
    "explanationMarkdown": "### Array .reduce()\n```javascript\nlet prices = [10, 20, 30];\nlet total = prices.reduce((acc, curr) => acc + curr, 0);\nconsole.log(total); // 60\n```",
    "workedExample": {
      "title": "Worked Example: Summing",
      "code": "let list = [1, 2, 3, 4];\nlet sum = list.reduce((a, b) => a + b, 0);\nconsole.log(sum); // 10",
      "explanation": "\u2022 Sums 1+2+3+4 = 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Sum `[10, 20, 30, 40]` using `.reduce((acc, n) => acc + n, 0)`. Assign to `let grandTotal`.",
      "Print `grandTotal`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let grandTotal = [10, 20, 30, 40].reduce((acc, n) => acc + n, 0);\nconsole.log(grandTotal);\n",
    "hints": [
      "Write `.reduce((acc, n) => acc + n, 0)`"
    ],
    "testCases": [
      {
        "id": "js-86-tc-1",
        "description": "grandTotal is 100",
        "testFn": "grandTotal === 100"
      }
    ]
  },
  {
    "id": "js-87-array-find",
    "title": "87. Finding the First Match with .find()",
    "slug": "array-find",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Retrieve the first element that satisfies a condition.",
    "concepts": [
      "array.find(fn)",
      "Returns value or undefined"
    ],
    "analogy": "Searching for the first red apple in a fruit basket.",
    "explanationMarkdown": "### Array .find()\nReturns the **first item** matching the test:\n```javascript\nlet users = [{id: 1, name: \"Alice\"}, {id: 2, name: \"Bob\"}];\nlet match = users.find(u => u.id === 2);\nconsole.log(match.name); // \"Bob\"\n```",
    "workedExample": {
      "title": "Worked Example: Find First High Score",
      "code": "let scores = [45, 82, 95];\nlet firstA = scores.find(s => s >= 90);\nconsole.log(firstA); // 95",
      "explanation": "\u2022 Finds 95 as first item >= 90.",
      "expectedOutput": "95"
    },
    "exerciseSteps": [
      "Find first number > 50 in `[20, 55, 80]`. Assign to `let firstBig = [20, 55, 80].find(x => x > 50);`.",
      "Print `firstBig`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let firstBig = [20, 55, 80].find(x => x > 50);\nconsole.log(firstBig);\n",
    "hints": [
      "Use `.find(x => x > 50)`"
    ],
    "testCases": [
      {
        "id": "js-87-tc-1",
        "description": "firstBig is 55",
        "testFn": "firstBig === 55"
      }
    ]
  },
  {
    "id": "js-88-array-findindex",
    "title": "88. Finding Index Position with .findIndex()",
    "slug": "array-findindex",
    "language": "javascript",
    "category": "Module 7: Arrays & List Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Get the index position of the first matching element (-1 if none found).",
    "concepts": [
      "array.findIndex(fn)"
    ],
    "analogy": "Finding which seat row number contains the person wearing a red hat.",
    "explanationMarkdown": "### Array .findIndex()\n```javascript\nlet fruits = [\"apple\", \"banana\", \"cherry\"];\nlet idx = fruits.findIndex(f => f.startsWith(\"b\")); // 1\n```",
    "workedExample": {
      "title": "Worked Example: Locating Item",
      "code": "let nums = [10, 25, 50];\nconsole.log(nums.findIndex(n => n === 50)); // 2",
      "explanation": "\u2022 50 is at index 2.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Find index of element === `'gold'` in `['silver', 'gold']`. Assign to `let goldIdx`.",
      "Print `goldIdx`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let goldIdx = ['silver', 'gold'].findIndex(item => item === 'gold');\nconsole.log(goldIdx);\n",
    "hints": [
      "Use `.findIndex(item => item === 'gold')`"
    ],
    "testCases": [
      {
        "id": "js-88-tc-1",
        "description": "goldIdx is 1",
        "testFn": "goldIdx === 1"
      }
    ]
  }
];
