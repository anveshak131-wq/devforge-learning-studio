import { Lesson } from '../../../types';

export const MODULE_5_LESSONS: Lesson[] = [
  {
    "id": "js-47-classic-for-loop",
    "title": "47. The Classic for Loop",
    "slug": "classic-for-loop",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Repeat an action a specific number of times using for (let i = 0; i < N; i++).",
    "concepts": [
      "for loop syntax",
      "Initialization, condition, increment"
    ],
    "analogy": "Running laps around a track: start at lap 1, keep running while lap <= 5, add 1 lap each round.",
    "explanationMarkdown": "### The for Loop\n```javascript\nfor (let i = 1; i <= 3; i++) {\n  console.log(\"Lap \" + i);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Counting 1 to 3",
      "code": "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
      "explanation": "\u2022 Logs 1, 2, 3.",
      "expectedOutput": "1\n2\n3"
    },
    "exerciseSteps": [
      "Write a for loop from `i = 1` up to `i <= 3`.",
      "Print `i` in each loop."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}\n",
    "hints": [
      "Write `for (let i = 1; i <= 3; i++) { console.log(i); }`"
    ],
    "testCases": [
      {
        "id": "js-47-tc-1",
        "description": "Prints 1, 2, 3",
        "testFn": "logs.some(l => l.args.join(' ').includes('1')) && logs.some(l => l.args.join(' ').includes('3'))"
      }
    ]
  },
  {
    "id": "js-48-countdown-loop",
    "title": "48. Counting Down: Reverse Loops",
    "slug": "countdown-loop",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Count backwards from 5 down to 1 using i--.",
    "concepts": [
      "Countdown logic",
      "i-- decrement in for loop"
    ],
    "analogy": "Rocket launch countdown: 3, 2, 1, Liftoff!",
    "explanationMarkdown": "### Counting Backwards\n```javascript\nfor (let i = 3; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log(\"Blastoff!\");\n```",
    "workedExample": {
      "title": "Worked Example: Rocket Countdown",
      "code": "for (let i = 3; i >= 1; i--) {\n  console.log(i);\n}",
      "explanation": "\u2022 Counts down 3, 2, 1.",
      "expectedOutput": "3\n2\n1"
    },
    "exerciseSteps": [
      "Write a loop starting at `let i = 3; i >= 1; i--`.",
      "Print each number."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "for (let i = 3; i >= 1; i--) {\n  console.log(i);\n}\n",
    "hints": [
      "Start with `let i = 3` and decrement with `i--`"
    ],
    "testCases": [
      {
        "id": "js-48-tc-1",
        "description": "Counts down 3, 2, 1",
        "testFn": "logs.some(l => l.args.join(' ').includes('3')) && logs.some(l => l.args.join(' ').includes('1'))"
      }
    ]
  },
  {
    "id": "js-49-looping-arrays",
    "title": "49. Iterating Through Arrays with Indices",
    "slug": "looping-arrays",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Use array.length in a for loop to visit every item.",
    "concepts": [
      "i < array.length",
      "Accessing array[i]"
    ],
    "analogy": "A mail carrier visiting houses in order on a street from house 0 to house N.",
    "explanationMarkdown": "### Visiting Array Elements\n```javascript\nlet fruits = [\"apple\", \"banana\", \"cherry\"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Reading Array",
      "code": "let items = [\"sword\", \"shield\"];\nfor (let i = 0; i < items.length; i++) {\n  console.log(items[i]);\n}",
      "explanation": "\u2022 Prints sword then shield.",
      "expectedOutput": "sword\nshield"
    },
    "exerciseSteps": [
      "Iterate over `let list = [\"A\", \"B\"];`.",
      "Print each item using `console.log(list[i]);`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let list = [\"A\", \"B\"];\nfor (let i = 0; i < list.length; i++) {\n  console.log(list[i]);\n}\n",
    "hints": [
      "Use `i < list.length` and `list[i]`"
    ],
    "testCases": [
      {
        "id": "js-49-tc-1",
        "description": "Prints A and B",
        "testFn": "logs.some(l => l.args.join(' ').includes('A')) && logs.some(l => l.args.join(' ').includes('B'))"
      }
    ]
  },
  {
    "id": "js-50-while-loop",
    "title": "50. The while Loop: Looping on Condition",
    "slug": "while-loop",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Run a loop while a condition remains true.",
    "concepts": [
      "while (condition) {}",
      "Dynamic termination"
    ],
    "analogy": "Keep drinking water WHILE your glass is not empty.",
    "explanationMarkdown": "### The while Loop\n```javascript\nlet count = 1;\nwhile (count <= 3) {\n  console.log(count);\n  count++;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Energy Depletion",
      "code": "let energy = 2;\nwhile (energy > 0) {\n  console.log(\"Working...\");\n  energy--;\n}",
      "explanation": "\u2022 Runs twice until energy is 0.",
      "expectedOutput": "Working...\nWorking..."
    },
    "exerciseSteps": [
      "Look at `let n = 1;`.",
      "While `n <= 2`, print `n` and increment `n++`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let n = 1;\nwhile (n <= 2) {\n  console.log(n);\n  n++;\n}\n",
    "hints": [
      "Remember to increment `n++` inside the loop"
    ],
    "testCases": [
      {
        "id": "js-50-tc-1",
        "description": "Prints 1 and 2",
        "testFn": "logs.some(l => l.args.join(' ').includes('1')) && logs.some(l => l.args.join(' ').includes('2'))"
      }
    ]
  },
  {
    "id": "js-51-do-while-loop",
    "title": "51. The do...while Loop: Guaranteed First Run",
    "slug": "do-while-loop",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Ensure the loop runs at least once, even if the condition is false initially.",
    "concepts": [
      "do { ... } while (condition);",
      "At-least-once execution"
    ],
    "analogy": "Entering a roller coaster ride: you always experience the ride once before deciding whether to line up again.",
    "explanationMarkdown": "### do...while\n```javascript\nlet x = 10;\ndo {\n  console.log(\"Runs once!\");\n} while (x < 5);\n```",
    "workedExample": {
      "title": "Worked Example: Menu prompt",
      "code": "let ran = 0;\ndo {\n  console.log(\"Executed\");\n  ran++;\n} while (ran < 1);",
      "explanation": "\u2022 Executes once and finishes.",
      "expectedOutput": "Executed"
    },
    "exerciseSteps": [
      "Write a do...while loop that logs `'Guaranteed'` once with `let run = false;`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let run = false;\ndo {\n  console.log(\"Guaranteed\");\n} while (run);\n",
    "hints": [
      "Write `do { console.log(\"Guaranteed\"); } while (run);`"
    ],
    "testCases": [
      {
        "id": "js-51-tc-1",
        "description": "Prints 'Guaranteed'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Guaranteed'))"
      }
    ]
  },
  {
    "id": "js-52-loop-break",
    "title": "52. Breaking Early with break",
    "slug": "loop-break",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Exit a loop immediately when a certain condition is met.",
    "concepts": [
      "break keyword",
      "Early exit"
    ],
    "analogy": "Pulling the emergency brake on a train.",
    "explanationMarkdown": "### The break Statement\n```javascript\nfor (let i = 1; i <= 10; i++) {\n  if (i === 3) break; // Stops immediately!\n  console.log(i);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Target Found",
      "code": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}",
      "explanation": "\u2022 Prints 1, 2, then stops before 3.",
      "expectedOutput": "1\n2"
    },
    "exerciseSteps": [
      "Loop `i = 1; i <= 5; i++`.",
      "If `i === 3`, `break;`. Otherwise `console.log(i);`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}\n",
    "hints": [
      "Use `if (i === 3) break;`"
    ],
    "testCases": [
      {
        "id": "js-52-tc-1",
        "description": "Stops at 2 and does not log 3",
        "testFn": "logs.some(l => l.args.join(' ').includes('2')) && !logs.some(l => l.args.join(' ').includes('3'))"
      }
    ]
  },
  {
    "id": "js-53-loop-continue",
    "title": "53. Skipping Iterations with continue",
    "slug": "loop-continue",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Skip the current loop turn and jump directly to the next one.",
    "concepts": [
      "continue keyword",
      "Skipping specific items"
    ],
    "analogy": "Skipping a track you don't like on your music playlist.",
    "explanationMarkdown": "### The continue Statement\n```javascript\nfor (let i = 1; i <= 4; i++) {\n  if (i === 2) continue; // Skip 2!\n  console.log(i);\n}\n// Prints 1, 3, 4\n```",
    "workedExample": {
      "title": "Worked Example: Skip number 3",
      "code": "for (let i = 1; i <= 4; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}",
      "explanation": "\u2022 3 is skipped.",
      "expectedOutput": "1\n2\n4"
    },
    "exerciseSteps": [
      "Loop 1 to 4. Skip 2 using `if (i === 2) continue;`. Log each number."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "for (let i = 1; i <= 4; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}\n",
    "hints": [
      "Write `if (i === 2) continue;`"
    ],
    "testCases": [
      {
        "id": "js-53-tc-1",
        "description": "Skips 2 and prints 1, 3, 4",
        "testFn": "!logs.some(l => l.args.join(' ') === '2') && logs.some(l => l.args.join(' ').includes('3'))"
      }
    ]
  },
  {
    "id": "js-54-for-of-loop",
    "title": "54. The Clean for...of Loop for Arrays",
    "slug": "for-of-loop",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Iterate directly over elements without managing index variables.",
    "concepts": [
      "for (const item of array)",
      "Iterable syntax"
    ],
    "analogy": "Taking items out of a grocery bag one by one.",
    "explanationMarkdown": "### The for...of Loop\n```javascript\nlet colors = [\"red\", \"green\", \"blue\"];\nfor (let c of colors) {\n  console.log(c);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Animal Names",
      "code": "let pets = [\"cat\", \"dog\"];\nfor (let p of pets) {\n  console.log(p);\n}",
      "explanation": "\u2022 Directly receives each pet.",
      "expectedOutput": "cat\ndog"
    },
    "exerciseSteps": [
      "Loop over `[\"Sun\", \"Moon\"]` using `for (let orb of orbs)`.",
      "Print each item."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let orbs = [\"Sun\", \"Moon\"];\nfor (let orb of orbs) {\n  console.log(orb);\n}\n",
    "hints": [
      "Write `for (let orb of orbs) { console.log(orb); }`"
    ],
    "testCases": [
      {
        "id": "js-54-tc-1",
        "description": "Prints Sun and Moon",
        "testFn": "logs.some(l => l.args.join(' ').includes('Sun')) && logs.some(l => l.args.join(' ').includes('Moon'))"
      }
    ]
  },
  {
    "id": "js-55-for-in-loop",
    "title": "55. Iterating Object Keys with for...in",
    "slug": "for-in-loop",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Loop through all property keys in an object.",
    "concepts": [
      "for (const key in object)",
      "Key reflection"
    ],
    "analogy": "Reading all labels on a row of filing cabinet drawers.",
    "explanationMarkdown": "### The for...in Loop\n```javascript\nlet car = { make: \"Toyota\", year: 2022 };\nfor (let key in car) {\n  console.log(key + \": \" + car[key]);\n}\n```",
    "workedExample": {
      "title": "Worked Example: User details",
      "code": "let person = { name: \"Leo\", age: 30 };\nfor (let k in person) {\n  console.log(k);\n}",
      "explanation": "\u2022 Prints keys: name, age.",
      "expectedOutput": "name\nage"
    },
    "exerciseSteps": [
      "Loop through keys of `{ title: \"Book\", pages: 200 }` using `for (let k in book)`.",
      "Print each key."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let book = { title: \"Book\", pages: 200 };\nfor (let k in book) {\n  console.log(k);\n}\n",
    "hints": [
      "Write `for (let k in book) { console.log(k); }`"
    ],
    "testCases": [
      {
        "id": "js-55-tc-1",
        "description": "Prints title and pages",
        "testFn": "logs.some(l => l.args.join(' ').includes('title')) && logs.some(l => l.args.join(' ').includes('pages'))"
      }
    ]
  },
  {
    "id": "js-56-nested-loops",
    "title": "56. Nested Loops: 2D Grids and Tables",
    "slug": "nested-loops",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Place a loop inside another loop to traverse grids and coordinates.",
    "concepts": [
      "Outer loop & inner loop",
      "Rows and columns"
    ],
    "analogy": "A clock: the minute hand goes around 60 times for each single hour.",
    "explanationMarkdown": "### Nested Loops\n```javascript\nfor (let r = 1; r <= 2; r++) {\n  for (let c = 1; c <= 2; c++) {\n    console.log(`(\\${r}, \\${c})`);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Coordinates",
      "code": "for (let x = 1; x <= 2; x++) {\n  for (let y = 1; y <= 2; y++) {\n    console.log(x + \",\" + y);\n  }\n}",
      "explanation": "\u2022 Produces 4 coordinate pairs.",
      "expectedOutput": "1,1\n1,2\n2,1\n2,2"
    },
    "exerciseSteps": [
      "Run nested loops for `r = 1..2` and `c = 1..2`.",
      "Print each `r + '-' + c`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "for (let r = 1; r <= 2; r++) {\n  for (let c = 1; c <= 2; c++) {\n    console.log(r + \"-\" + c);\n  }\n}\n",
    "hints": [
      "Outer loop is `r`, inner is `c`"
    ],
    "testCases": [
      {
        "id": "js-56-tc-1",
        "description": "Prints 1-1 and 2-2",
        "testFn": "logs.some(l => l.args.join(' ').includes('1-1')) && logs.some(l => l.args.join(' ').includes('2-2'))"
      }
    ]
  },
  {
    "id": "js-57-loop-accumulator",
    "title": "57. The Accumulator Pattern: Summing with Loops",
    "slug": "loop-accumulator",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Keep a running total outside the loop and add to it on each step.",
    "concepts": [
      "let sum = 0",
      "Accumulating results in loop"
    ],
    "analogy": "A piggy bank: you start with $0, and drop coins in every day.",
    "explanationMarkdown": "### Accumulator Pattern\n```javascript\nlet sum = 0;\nlet numbers = [10, 20, 30];\nfor (let n of numbers) {\n  sum += n;\n}\nconsole.log(sum); // 60\n```",
    "workedExample": {
      "title": "Worked Example: Summing 1 to 3",
      "code": "let total = 0;\nfor (let i = 1; i <= 3; i++) {\n  total += i;\n}\nconsole.log(total); // 6",
      "explanation": "\u2022 1 + 2 + 3 = 6.",
      "expectedOutput": "6"
    },
    "exerciseSteps": [
      "Start with `let total = 0;`.",
      "Loop over `[5, 10, 15]` adding to `total`.",
      "Print `total`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let total = 0;\nlet values = [5, 10, 15];\nfor (let v of values) {\n  total += v;\n}\nconsole.log(total);\n",
    "hints": [
      "Add each `v` to `total += v`"
    ],
    "testCases": [
      {
        "id": "js-57-tc-1",
        "description": "total is 30",
        "testFn": "typeof total !== 'undefined' && total === 30"
      }
    ]
  },
  {
    "id": "js-58-loop-building-strings",
    "title": "58. Building Text with Loops",
    "slug": "loop-building-strings",
    "language": "javascript",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Construct formatted sentences and patterns by appending in loops.",
    "concepts": [
      "String concatenation in loops"
    ],
    "analogy": "Threading beads one by one onto a necklace string.",
    "explanationMarkdown": "### Constructing Text\n```javascript\nlet result = \"\";\nfor (let i = 0; i < 3; i++) {\n  result += \"#\";\n}\nconsole.log(result); // \"###\"\n```",
    "workedExample": {
      "title": "Worked Example: Repeating Dash",
      "code": "let line = \"\";\nfor (let i = 0; i < 4; i++) line += \"-\";\nconsole.log(line);",
      "explanation": "\u2022 Constructs '----'.",
      "expectedOutput": "----"
    },
    "exerciseSteps": [
      "Build a string of 5 stars: `*****`.",
      "Assign to `let stars` and print."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let stars = \"\";\nfor (let i = 0; i < 5; i++) {\n  stars += \"*\";\n}\nconsole.log(stars);\n",
    "hints": [
      "Append `stars += \"*\"` 5 times"
    ],
    "testCases": [
      {
        "id": "js-58-tc-1",
        "description": "stars is '*****'",
        "testFn": "typeof stars !== 'undefined' && stars === '*****'"
      }
    ]
  }
];
