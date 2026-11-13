import { Lesson } from '../../../types';

export const pythonModule5Lessons: Lesson[] = [
  {
    "id": "py-41-for-in-loop",
    "title": "41. Iterating Collections with for...in",
    "slug": "for-in-loop",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Loop directly through each element in a list without manual index counters.",
    "concepts": [
      "for item in collection:",
      "Direct iteration"
    ],
    "analogy": "Dealing cards one-by-one from a deck to each player at the table.",
    "explanationMarkdown": "### The for...in Loop\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)\n```",
    "workedExample": {
      "title": "Worked Example: Printing items",
      "code": "animals = [\"cat\", \"dog\"]\nfor a in animals:\n    print(a)",
      "explanation": "• Logs cat and dog.",
      "expectedOutput": "cat\ndog"
    },
    "exerciseSteps": [
      "Create `colors = [\"red\", \"green\", \"blue\"]`.",
      "Loop through colors with `for color in colors:` and print each."
    ],
    "initialCode": "# Step 1: Create variable 'colors' and set it to [\"red\", \"green\", \"blue\"]\n# TODO: Write code below\n\n# Step 2: Loop through colors with 'for color in colors:' and print each\n# TODO: Write code below\n",
    "solutionCode": "colors = [\"red\", \"green\", \"blue\"]\nfor color in colors:\n    print(color)\n",
    "hints": [
      "Concept: Loop directly through each element in a list without manual index counters. Think of it like: Dealing cards one-by-one from a deck to each player at the table.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `colors = [\"red\", \"green\", \"blue\"]`.\n2. Loop through colors with `for color in colors:` and print each.\nKey Tip: Write `for color in colors:`"
    ],
    "testCases": [
      {
        "id": "py-41-tc-1",
        "description": "colors list has 3 items",
        "testFn": "colors.length === 3"
      }
    ]
  },
  {
    "id": "py-42-range-stop",
    "title": "42. Counting Sequences with range(stop)",
    "slug": "range-stop",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Generate numeric sequences starting from 0 up to stop (exclusive).",
    "concepts": [
      "range(N)",
      "0 to N-1 sequence"
    ],
    "analogy": "Counting laps around a track from lap 0 to lap 4.",
    "explanationMarkdown": "### range(N)\n`range(3)` produces numbers `0, 1, 2`:\n```python\nfor i in range(3):\n    print(i)\n```",
    "workedExample": {
      "title": "Worked Example: Loop 3 times",
      "code": "for i in range(3):\n    print(f\"Lap {i}\")",
      "explanation": "• Logs Lap 0, Lap 1, Lap 2.",
      "expectedOutput": "Lap 0\nLap 1\nLap 2"
    },
    "exerciseSteps": [
      "Loop 4 times using `range(4)`.",
      "Print each number `i`."
    ],
    "initialCode": "# Step 1: Loop 4 times using 'range(4)'\n# TODO: Write code below\n\n# Step 2: Print each number 'i'\n# TODO: Write code below\n",
    "solutionCode": "for i in range(4):\n    print(i)\n",
    "hints": [
      "Concept: Generate numeric sequences starting from 0 up to stop (exclusive). Think of it like: Counting laps around a track from lap 0 to lap 4.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Loop 4 times using `range(4)`.\n2. Print each number `i`.\nKey Tip: Use `for i in range(4):`"
    ],
    "testCases": [
      {
        "id": "py-42-tc-1",
        "description": "Logs numbers 0, 1, 2, 3",
        "testFn": "logs.length >= 4"
      }
    ]
  },
  {
    "id": "py-43-range-start-stop-step",
    "title": "43. Custom Steps with range(start, stop, step)",
    "slug": "range-start-stop-step",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Specify custom starting points and skip steps in range generation.",
    "concepts": [
      "range(start, stop, step)",
      "Step intervals"
    ],
    "analogy": "Skipping every other step while taking the stairs: 1, 3, 5, 7.",
    "explanationMarkdown": "### range with Steps\n```python\n# Count even numbers: 2, 4, 6, 8\nfor num in range(2, 10, 2):\n    print(num)\n```",
    "workedExample": {
      "title": "Worked Example: Skip by 5",
      "code": "for n in range(5, 20, 5):\n    print(n)",
      "explanation": "• Prints 5, 10, 15.",
      "expectedOutput": "5\n10\n15"
    },
    "exerciseSteps": [
      "Loop from 1 to 6 with `for i in range(1, 6):`.",
      "Print each `i`."
    ],
    "initialCode": "# Step 1: Loop from 1 to 6 with 'for i in range(1, 6):'\n# TODO: Write code below\n\n# Step 2: Print each 'i'\n# TODO: Write code below\n",
    "solutionCode": "for i in range(1, 6):\n    print(i)\n",
    "hints": [
      "Concept: Specify custom starting points and skip steps in range generation. Think of it like: Skipping every other step while taking the stairs: 1, 3, 5, 7.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Loop from 1 to 6 with `for i in range(1, 6):`.\n2. Print each `i`.\nKey Tip: Use `range(1, 6)`"
    ],
    "testCases": [
      {
        "id": "py-43-tc-1",
        "description": "Logs numbers 1 to 5",
        "testFn": "logs.length >= 5"
      }
    ]
  },
  {
    "id": "py-44-while-loop",
    "title": "44. Condition-Driven while Loops",
    "slug": "while-loop",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Execute statements repeatedly as long as a boolean condition remains True.",
    "concepts": [
      "while condition:",
      "Loop continuation"
    ],
    "analogy": "Driving a car: keep driving WHILE the gas tank is not empty.",
    "explanationMarkdown": "### The while Loop\n```python\ncount = 1\nwhile count <= 3:\n    print(count)\n    count += 1\n```",
    "workedExample": {
      "title": "Worked Example: Countdown",
      "code": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
      "explanation": "• Logs 3, 2, 1.",
      "expectedOutput": "3\n2\n1"
    },
    "exerciseSteps": [
      "Create `counter = 1`.",
      "While `counter <= 3:`, print `counter` and increment `counter += 1`."
    ],
    "initialCode": "# Step 1: Create variable 'counter' and set it to 1\n# TODO: Write code below\n\n# Step 2: While 'counter <= 3:', print 'counter' and increment 'counter += 1'\n# TODO: Write code below\n",
    "solutionCode": "counter = 1\nwhile counter <= 3:\n    print(counter)\n    counter += 1\n",
    "hints": [
      "Concept: Execute statements repeatedly as long as a boolean condition remains True. Think of it like: Driving a car: keep driving WHILE the gas tank is not empty.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `counter = 1`.\n2. While `counter <= 3:`, print `counter` and increment `counter += 1`.\nKey Tip: Remember to increment `counter += 1` inside loop"
    ],
    "testCases": [
      {
        "id": "py-44-tc-1",
        "description": "counter ends at 4",
        "testFn": "counter === 4"
      }
    ]
  },
  {
    "id": "py-45-break-statement",
    "title": "45. Early Exit with 'break'",
    "slug": "break-statement",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Terminate and break out of a loop immediately when a target condition is met.",
    "concepts": [
      "break keyword",
      "Early loop termination"
    ],
    "analogy": "Finding your car keys in a drawer: once you find them, you stop searching immediately.",
    "explanationMarkdown": "### The break Statement\n```python\nfor num in [1, 2, 3, 4, 5]:\n    if num == 3:\n        break\n    print(num) # Prints 1, 2 then stops\n```",
    "workedExample": {
      "title": "Worked Example: Stopping at target",
      "code": "found = 0\nfor x in [10, 20, 30]:\n    if x == 20:\n        found = x\n        break\nprint(found)",
      "explanation": "• Breaks after finding 20.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Loop through `[1, 2, 3, 4]`.",
      "If number is 3, set `target = 3` and `break`.",
      "Print `target`."
    ],
    "initialCode": "# Step 1: Loop through '[1, 2, 3, 4]'\n# TODO: Write code below\n\n# Step 2: If number is 3, set 'target = 3' and 'break'\n# TODO: Write code below\n\n# Step 3: Print 'target'\n# TODO: Write code below\n",
    "solutionCode": "target = 0\nfor num in [1, 2, 3, 4]:\n    if num == 3:\n        target = num\n        break\nprint(target)\n",
    "hints": [
      "Concept: Terminate and break out of a loop immediately when a target condition is met. Think of it like: Finding your car keys in a drawer: once you find them, you stop searching immediately.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Loop through `[1, 2, 3, 4]`.\n2. If number is 3, set `target = 3` and `break`.\n3. Print `target`.\nKey Tip: Use `break` inside the if block"
    ],
    "testCases": [
      {
        "id": "py-45-tc-1",
        "description": "target is 3",
        "testFn": "target === 3"
      }
    ]
  },
  {
    "id": "py-46-continue-statement",
    "title": "46. Skipping Iterations with 'continue'",
    "slug": "continue-statement",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Skip the rest of the current iteration and jump straight to the next cycle.",
    "concepts": [
      "continue keyword",
      "Filtering within loops"
    ],
    "analogy": "Inspecting fruit at an orchard: if an apple has a blemish, toss it aside and continue to the next apple.",
    "explanationMarkdown": "### The continue Statement\n```python\nfor n in range(5):\n    if n == 2:\n        continue\n    print(n) # Prints 0, 1, 3, 4 (skips 2)\n```",
    "workedExample": {
      "title": "Worked Example: Skipping odds",
      "code": "evens = []\nfor i in range(6):\n    if i % 2 != 0:\n        continue\n    evens.append(i)\nprint(len(evens))",
      "explanation": "• Collects 0, 2, 4 (length 3).",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Create `odds = []`.",
      "Loop `range(6)`: if `i % 2 == 0: continue`, else `odds.append(i)`.",
      "Print `odds`."
    ],
    "initialCode": "# Step 1: Create variable 'odds' and set it to []\n# TODO: Write code below\n\n# Step 2: Loop 'range(6)': if 'i % 2 == 0: continue', else 'odds.append(i)'\n# TODO: Write code below\n\n# Step 3: Print 'odds'\n# TODO: Write code below\n",
    "solutionCode": "odds = []\nfor i in range(6):\n    if i % 2 == 0:\n        continue\n    odds.append(i)\nprint(odds)\n",
    "hints": [
      "Concept: Skip the rest of the current iteration and jump straight to the next cycle. Think of it like: Inspecting fruit at an orchard: if an apple has a blemish, toss it aside and continue to the next apple.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `odds = []`.\n2. Loop `range(6)`: if `i % 2 == 0: continue`, else `odds.append(i)`.\n3. Print `odds`.\nKey Tip: Use `continue` when `i % 2 == 0`"
    ],
    "testCases": [
      {
        "id": "py-46-tc-1",
        "description": "odds contains [1, 3, 5]",
        "testFn": "odds.length === 3 && odds[0] === 1"
      }
    ]
  },
  {
    "id": "py-47-enumerate-loop",
    "title": "47. Index-Value Pairs with enumerate()",
    "slug": "enumerate-loop",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Access both the item index and its value simultaneously using enumerate(collection).",
    "concepts": [
      "enumerate(list)",
      "Index and item unpacking"
    ],
    "analogy": "Printing a numbered leaderboard: each runner gets their finishing rank number alongside their name.",
    "explanationMarkdown": "### The enumerate() Function\n```python\nnames = [\"Alice\", \"Bob\", \"Charlie\"]\nfor index, name in enumerate(names):\n    print(f\"{index}: {name}\")\n```",
    "workedExample": {
      "title": "Worked Example: Ranking items",
      "code": "medals = [\"Gold\", \"Silver\"]\nfor rank, medal in enumerate(medals):\n    print(f\"{rank + 1}: {medal}\")",
      "explanation": "• 1: Gold, 2: Silver.",
      "expectedOutput": "1: Gold\n2: Silver"
    },
    "exerciseSteps": [
      "Create `langs = [\"Python\", \"JavaScript\"]`.",
      "Loop with `for idx, lang in enumerate(langs): print(f\"{idx}: {lang}\")`."
    ],
    "initialCode": "# Step 1: Create variable 'langs' and set it to [\"Python\", \"JavaScript\"]\n# TODO: Write code below\n\n# Step 2: Loop with 'for idx, lang in enumerate(langs): print(f\"{idx}: {lang}\")'\n# TODO: Write code below\n",
    "solutionCode": "langs = [\"Python\", \"JavaScript\"]\nfor idx, lang in enumerate(langs):\n    print(f\"{idx}: {lang}\")\n",
    "hints": [
      "Concept: Access both the item index and its value simultaneously using enumerate(collection). Think of it like: Printing a numbered leaderboard: each runner gets their finishing rank number alongside their name.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `langs = [\"Python\", \"JavaScript\"]`.\n2. Loop with `for idx, lang in enumerate(langs): print(f\"{idx}: {lang}\")`.\nKey Tip: Unpack `idx, lang in enumerate(langs)`"
    ],
    "testCases": [
      {
        "id": "py-47-tc-1",
        "description": "langs has 2 items",
        "testFn": "langs.length === 2"
      }
    ]
  },
  {
    "id": "py-48-looping-strings",
    "title": "48. Looping Character-by-Character over Strings",
    "slug": "looping-strings",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Iterate directly over strings to inspect or transform individual characters.",
    "concepts": [
      "for char in string:",
      "String traversal"
    ],
    "analogy": "Reading a book letter by letter with a magnifying glass.",
    "explanationMarkdown": "### Looping Over Characters\n```python\nfor letter in \"Code\":\n    print(letter)\n```",
    "workedExample": {
      "title": "Worked Example: Counting vowels",
      "code": "vowels = 0\nfor char in \"hello\":\n    if char in \"aeiou\":\n        vowels += 1\nprint(vowels)",
      "explanation": "• e and o = 2 vowels.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `word = \"Python\"`.",
      "Loop through word and count letters: `count = 0; for c in word: count += 1`.",
      "Print `count`."
    ],
    "initialCode": "# Step 1: Create variable 'word' and set it to \"Python\"\n# TODO: Write code below\n\n# Step 2: Loop through word and count letters: 'count = 0; for c in word: count += 1'\n# TODO: Write code below\n\n# Step 3: Print 'count'\n# TODO: Write code below\n",
    "solutionCode": "word = \"Python\"\ncount = 0\nfor c in word:\n    count += 1\nprint(count)\n",
    "hints": [
      "Concept: Iterate directly over strings to inspect or transform individual characters. Think of it like: Reading a book letter by letter with a magnifying glass.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `word = \"Python\"`.\n2. Loop through word and count letters: `count = 0; for c in word: count += 1`.\n3. Print `count`.\nKey Tip: Increment `count += 1` in each loop"
    ],
    "testCases": [
      {
        "id": "py-48-tc-1",
        "description": "count is 6",
        "testFn": "count === 6"
      }
    ]
  },
  {
    "id": "py-49-accumulator-pattern",
    "title": "49. The Accumulator Loop Pattern",
    "slug": "accumulator-pattern",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Build running totals or aggregated strings by accumulating results across loop iterations.",
    "concepts": [
      "Accumulator variable",
      "Running sum / total"
    ],
    "analogy": "A piggy bank: you start with $0 and drop in a coin on every day of the week.",
    "explanationMarkdown": "### Accumulators\n```python\ntotal = 0\nfor num in [10, 20, 30]:\n    total += num\nprint(total) # 60\n```",
    "workedExample": {
      "title": "Worked Example: Summing numbers",
      "code": "sum_val = 0\nfor n in [1, 2, 3, 4]:\n    sum_val += n\nprint(sum_val)",
      "explanation": "• 1+2+3+4 = 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Create `total = 0`.",
      "For `x` in `[5, 10, 15]: total += x`.",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Create variable 'total' and set it to 0\n# TODO: Write code below\n\n# Step 2: For 'x' in '[5, 10, 15]: total += x'\n# TODO: Write code below\n\n# Step 3: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "total = 0\nfor x in [5, 10, 15]:\n    total += x\nprint(total)\n",
    "hints": [
      "Concept: Build running totals or aggregated strings by accumulating results across loop iterations. Think of it like: A piggy bank: you start with $0 and drop in a coin on every day of the week.",
      "Syntax Blueprint: List comprehension syntax: `[expr for item in iterable]` or `[expr for item in iterable if condition]`.",
      "Step-by-Step Target:\n1. Create `total = 0`.\n2. For `x` in `[5, 10, 15]: total += x`.\n3. Print `total`.\nKey Tip: Add `x` to `total` on each iteration"
    ],
    "testCases": [
      {
        "id": "py-49-tc-1",
        "description": "total is 30",
        "testFn": "total === 30"
      }
    ]
  },
  {
    "id": "py-50-nested-loops",
    "title": "50. Nested Loops & Matrix Coordinates",
    "slug": "nested-loops",
    "language": "python",
    "category": "Module 5: Loops & Iteration",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Loop within loops to traverse 2D grids, tables, and nested data structures.",
    "concepts": [
      "Nested loops",
      "Grid traversal (row, col)"
    ],
    "analogy": "A clock: the minute hand must complete 60 ticks for every single tick of the hour hand.",
    "explanationMarkdown": "### Nested Loops\n```python\nfor row in range(2):\n    for col in range(2):\n        print(f\"({row}, {col})\")\n```",
    "workedExample": {
      "title": "Worked Example: Grid pairs",
      "code": "pairs = []\nfor i in [1, 2]:\n    for j in [\"a\", \"b\"]:\n        pairs.append(f\"{i}{j}\")\nprint(len(pairs))",
      "explanation": "• Generates 4 pairs: 1a, 1b, 2a, 2b.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create `grid = []`.",
      "For `r` in `range(2)` and for `c` in `range(3)`: `grid.append(f\"{r}-{c}\")`.",
      "Print `len(grid)`."
    ],
    "initialCode": "# Step 1: Create variable 'grid' and set it to []\n# TODO: Write code below\n\n# Step 2: For 'r' in 'range(2)' and for 'c' in 'range(3)': 'grid.append(f\"{r}-{c}\")'\n# TODO: Write code below\n\n# Step 3: Print 'len(grid)'\n# TODO: Write code below\n",
    "solutionCode": "grid = []\nfor r in range(2):\n    for c in range(3):\n        grid.append(f\"{r}-{c}\")\nprint(len(grid))\n",
    "hints": [
      "Concept: Loop within loops to traverse 2D grids, tables, and nested data structures. Think of it like: A clock: the minute hand must complete 60 ticks for every single tick of the hour hand.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `grid = []`.\n2. For `r` in `range(2)` and for `c` in `range(3)`: `grid.append(f\"{r}-{c}\")`.\n3. Print `len(grid)`.\nKey Tip: 2 rows times 3 columns = 6 elements"
    ],
    "testCases": [
      {
        "id": "py-50-tc-1",
        "description": "grid has 6 items",
        "testFn": "grid.length === 6"
      }
    ]
  }
];
