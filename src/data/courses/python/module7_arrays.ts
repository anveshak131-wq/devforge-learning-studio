import { Lesson } from '../../../types';

export const pythonModule7Lessons: Lesson[] = [
  {
    "id": "py-63-list-creation",
    "title": "63. Creating Lists & Indexing",
    "slug": "list-creation-indexing",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Store ordered collections of elements inside square brackets [].",
    "concepts": [
      "List syntax []",
      "Zero-based index [0]"
    ],
    "analogy": "A grocery shopping list with items written line-by-line.",
    "explanationMarkdown": "### Python Lists\n```python\nitems = [\"milk\", \"eggs\", \"bread\"]\nprint(items[0]) # \"milk\"\n```",
    "workedExample": {
      "title": "Worked Example: First element",
      "code": "fruits = [\"apple\", \"banana\"]\nprint(fruits[0])",
      "explanation": "\u2022 Index 0 retrieves apple.",
      "expectedOutput": "apple"
    },
    "exerciseSteps": [
      "Create `scores = [100, 90, 80]`.",
      "Get first score: `first = scores[0]`.",
      "Print `first`."
    ],
    "initialCode": "scores = [100, 90, 80]\nfirst = scores[0]\nprint(first)\n",
    "solutionCode": "scores = [100, 90, 80]\nfirst = scores[0]\nprint(first)\n",
    "hints": [
      "Access `scores[0]`"
    ],
    "testCases": [
      {
        "id": "py-63-tc-1",
        "description": "first is 100",
        "testFn": "first === 100"
      }
    ]
  },
  {
    "id": "py-64-negative-indexing",
    "title": "64. Negative List Indexing (list[-1])",
    "slug": "negative-list-indexing",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Access items counting backwards from the end using -1, -2, etc.",
    "concepts": [
      "list[-1] (last item)",
      "list[-2] (second-to-last)"
    ],
    "analogy": "Looking at the caboose of a train: it's car -1.",
    "explanationMarkdown": "### Negative Indices\n```python\nnums = [10, 20, 30]\nprint(nums[-1]) # 30\n```",
    "workedExample": {
      "title": "Worked Example: Last element",
      "code": "cities = [\"Paris\", \"Rome\", \"Tokyo\"]\nprint(cities[-1])",
      "explanation": "\u2022 Retrieves Tokyo.",
      "expectedOutput": "Tokyo"
    },
    "exerciseSteps": [
      "Create `planets = [\"Mercury\", \"Venus\", \"Earth\"]`.",
      "Access last item: `last_planet = planets[-1]`.",
      "Print `last_planet`."
    ],
    "initialCode": "planets = [\"Mercury\", \"Venus\", \"Earth\"]\nlast_planet = planets[-1]\nprint(last_planet)\n",
    "solutionCode": "planets = [\"Mercury\", \"Venus\", \"Earth\"]\nlast_planet = planets[-1]\nprint(last_planet)\n",
    "hints": [
      "Use `planets[-1]`"
    ],
    "testCases": [
      {
        "id": "py-64-tc-1",
        "description": "last_planet is Earth",
        "testFn": "last_planet === 'Earth'"
      }
    ]
  },
  {
    "id": "py-65-append-items",
    "title": "65. Adding Elements with .append()",
    "slug": "append-items",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Add new elements to the very end of an existing list with .append(item).",
    "concepts": [
      "list.append(x)",
      "In-place mutation"
    ],
    "analogy": "Adding a new box to the back of a delivery truck.",
    "explanationMarkdown": "### .append()\n```python\nqueue = [\"first\"]\nqueue.append(\"second\")\nprint(queue) # [\"first\", \"second\"]\n```",
    "workedExample": {
      "title": "Worked Example: Appending score",
      "code": "vals = [1, 2]\nvals.append(3)\nprint(len(vals))",
      "explanation": "\u2022 Increases list length to 3.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Create `tasks = [\"Email\"]`.",
      "Append `\"Code\"` with `tasks.append(\"Code\")`.",
      "Print `tasks`."
    ],
    "initialCode": "tasks = [\"Email\"]\ntasks.append(\"Code\")\nprint(tasks)\n",
    "solutionCode": "tasks = [\"Email\"]\ntasks.append(\"Code\")\nprint(tasks)\n",
    "hints": [
      "Use `tasks.append(\"Code\")`"
    ],
    "testCases": [
      {
        "id": "py-65-tc-1",
        "description": "tasks has length 2 and contains Code",
        "testFn": "tasks.length === 2 && tasks[1] === 'Code'"
      }
    ]
  },
  {
    "id": "py-66-pop-items",
    "title": "66. Removing Elements with .pop()",
    "slug": "pop-items",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Remove and return the last item (or an item at a specific index) using .pop().",
    "concepts": [
      "list.pop()",
      "Stack LIFO operation"
    ],
    "analogy": "Taking the top plate off a stack of clean plates.",
    "explanationMarkdown": "### .pop()\n```python\nstack = [\"a\", \"b\", \"c\"]\nlast = stack.pop() # removes \"c\"\nprint(last) # \"c\"\n```",
    "workedExample": {
      "title": "Worked Example: Popping item",
      "code": "deck = [10, 20]\ntop = deck.pop()\nprint(top)",
      "explanation": "\u2022 Returns 20.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Create `inventory = [\"Sword\", \"Shield\", \"Potion\"]`.",
      "Pop last item: `used_item = inventory.pop()`.",
      "Print `used_item`."
    ],
    "initialCode": "inventory = [\"Sword\", \"Shield\", \"Potion\"]\nused_item = inventory.pop()\nprint(used_item)\n",
    "solutionCode": "inventory = [\"Sword\", \"Shield\", \"Potion\"]\nused_item = inventory.pop()\nprint(used_item)\n",
    "hints": [
      "Use `inventory.pop()`"
    ],
    "testCases": [
      {
        "id": "py-66-tc-1",
        "description": "used_item is Potion and inventory has 2 items",
        "testFn": "used_item === 'Potion' && inventory.length === 2"
      }
    ]
  },
  {
    "id": "py-67-list-slicing",
    "title": "67. Sublist Slicing (list[start:stop])",
    "slug": "list-slicing",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Extract portions of a list into a brand new sublist using slice notation.",
    "concepts": [
      "list[start:stop]",
      "Shallow copy slicing"
    ],
    "analogy": "Taking cards 2 through 4 from a deck of cards to form a hand.",
    "explanationMarkdown": "### List Slicing\n```python\nnums = [0, 10, 20, 30, 40]\nprint(nums[1:4]) # [10, 20, 30]\n```",
    "workedExample": {
      "title": "Worked Example: First two items",
      "code": "podium = [\"Gold\", \"Silver\", \"Bronze\"]\ntop_two = podium[0:2]\nprint(top_two[1])",
      "explanation": "\u2022 Silver.",
      "expectedOutput": "Silver"
    },
    "exerciseSteps": [
      "Create `letters = [\"a\", \"b\", \"c\", \"d\"]`.",
      "Slice middle items: `middle = letters[1:3]`.",
      "Print `middle`."
    ],
    "initialCode": "letters = [\"a\", \"b\", \"c\", \"d\"]\nmiddle = letters[1:3]\nprint(middle)\n",
    "solutionCode": "letters = [\"a\", \"b\", \"c\", \"d\"]\nmiddle = letters[1:3]\nprint(middle)\n",
    "hints": [
      "Use `letters[1:3]`"
    ],
    "testCases": [
      {
        "id": "py-67-tc-1",
        "description": "middle contains b and c",
        "testFn": "middle.length === 2 && middle[0] === 'b' && middle[1] === 'c'"
      }
    ]
  },
  {
    "id": "py-68-list-min-max",
    "title": "68. Finding Extremes with min() & max()",
    "slug": "list-min-max",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find the smallest or largest item in any sequence instantly.",
    "concepts": [
      "min(sequence)",
      "max(sequence)"
    ],
    "analogy": "Scanning a price sheet to immediately spot the cheapest and most expensive items.",
    "explanationMarkdown": "### min() and max()\n```python\nscores = [45, 92, 78, 99, 61]\nprint(min(scores)) # 45\nprint(max(scores)) # 99\n```",
    "workedExample": {
      "title": "Worked Example: Temperature extremes",
      "code": "temps = [68, 75, 82, 60]\nprint(max(temps))",
      "explanation": "\u2022 Returns 82.",
      "expectedOutput": "82"
    },
    "exerciseSteps": [
      "Create `prices = [19, 99, 5, 45]`.",
      "Find lowest: `lowest = min(prices)`.",
      "Print `lowest`."
    ],
    "initialCode": "prices = [19, 99, 5, 45]\nlowest = min(prices)\nprint(lowest)\n",
    "solutionCode": "prices = [19, 99, 5, 45]\nlowest = min(prices)\nprint(lowest)\n",
    "hints": [
      "Use `min(prices)`"
    ],
    "testCases": [
      {
        "id": "py-68-tc-1",
        "description": "lowest is 5",
        "testFn": "lowest === 5"
      }
    ]
  },
  {
    "id": "py-69-sum-function",
    "title": "69. Totaling Sequences with sum()",
    "slug": "sum-function",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sum all numeric elements in a list with a single built-in function call.",
    "concepts": [
      "sum(list)",
      "Averaging: sum(l) / len(l)"
    ],
    "analogy": "A cash register hitting the Subtotal button to add all scanned prices together.",
    "explanationMarkdown": "### sum()\n```python\nexpenses = [10, 20, 30]\ntotal = sum(expenses) # 60\n```",
    "workedExample": {
      "title": "Worked Example: Calculating average",
      "code": "nums = [10, 20, 30]\navg = sum(nums) / len(nums)\nprint(avg)",
      "explanation": "\u2022 60 / 3 = 20.0.",
      "expectedOutput": "20.0"
    },
    "exerciseSteps": [
      "Create `points = [25, 50, 75]`.",
      "Total points: `total = sum(points)`.",
      "Print `total`."
    ],
    "initialCode": "points = [25, 50, 75]\ntotal = sum(points)\nprint(total)\n",
    "solutionCode": "points = [25, 50, 75]\ntotal = sum(points)\nprint(total)\n",
    "hints": [
      "Use `sum(points)`"
    ],
    "testCases": [
      {
        "id": "py-69-tc-1",
        "description": "total is 150",
        "testFn": "total === 150"
      }
    ]
  },
  {
    "id": "py-70-sorting-lists",
    "title": "70. Ordering Data with sorted() and .sort()",
    "slug": "sorting-lists",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Sort numbers and strings in ascending order using .sort() (in-place) or sorted() (returns new list).",
    "concepts": [
      "list.sort()",
      "sorted(list)"
    ],
    "analogy": "Alphabetizing books on a library shelf.",
    "explanationMarkdown": "### Sorting Lists\n```python\nnums = [5, 2, 8, 1]\nnums.sort()\nprint(nums) # [1, 2, 5, 8]\n```",
    "workedExample": {
      "title": "Worked Example: Sorted names",
      "code": "names = [\"Charlie\", \"Alice\", \"Bob\"]\nnames.sort()\nprint(names[0])",
      "explanation": "\u2022 Alice is sorted to index 0.",
      "expectedOutput": "Alice"
    },
    "exerciseSteps": [
      "Create `scores = [88, 72, 95, 60]`.",
      "Sort in place with `scores.sort()`.",
      "Print `scores`."
    ],
    "initialCode": "scores = [88, 72, 95, 60]\nscores.sort()\nprint(scores)\n",
    "solutionCode": "scores = [88, 72, 95, 60]\nscores.sort()\nprint(scores)\n",
    "hints": [
      "Call `scores.sort()`"
    ],
    "testCases": [
      {
        "id": "py-70-tc-1",
        "description": "scores is sorted [60, 72, 88, 95]",
        "testFn": "scores[0] === 60 && scores[3] === 95"
      }
    ]
  },
  {
    "id": "py-71-reversing-lists",
    "title": "71. Reversing Sequences with .reverse() and [::-1]",
    "slug": "reversing-lists",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Invert the order of items in a list or string.",
    "concepts": [
      "list.reverse()",
      "[::-1] step slice"
    ],
    "analogy": "Running a video tape in reverse rewind.",
    "explanationMarkdown": "### Reversing\n```python\nitems = [1, 2, 3]\nitems.reverse()\nprint(items) # [3, 2, 1]\n```",
    "workedExample": {
      "title": "Worked Example: Reversing list",
      "code": "chars = [\"a\", \"b\", \"c\"]\nchars.reverse()\nprint(chars[0])",
      "explanation": "\u2022 Index 0 is now 'c'.",
      "expectedOutput": "c"
    },
    "exerciseSteps": [
      "Create `countdown = [1, 2, 3]`.",
      "Reverse it with `countdown.reverse()`.",
      "Print `countdown`."
    ],
    "initialCode": "countdown = [1, 2, 3]\ncountdown.reverse()\nprint(countdown)\n",
    "solutionCode": "countdown = [1, 2, 3]\ncountdown.reverse()\nprint(countdown)\n",
    "hints": [
      "Call `countdown.reverse()`"
    ],
    "testCases": [
      {
        "id": "py-71-tc-1",
        "description": "countdown is [3, 2, 1]",
        "testFn": "countdown[0] === 3 && countdown[2] === 1"
      }
    ]
  },
  {
    "id": "py-72-list-multiplication",
    "title": "72. List Concatenation (+) & Replication (*)",
    "slug": "list-multiplication-replication",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine lists with + and repeat items with * replication.",
    "concepts": [
      "list1 + list2",
      "[item] * N"
    ],
    "analogy": "Cloning 5 blank questionnaire forms instantly: `['blank'] * 5`.",
    "explanationMarkdown": "### Combining & Replicating Lists\n```python\na = [1, 2]\nb = [3, 4]\ncombined = a + b # [1, 2, 3, 4]\nzeros = [0] * 3 # [0, 0, 0]\n```",
    "workedExample": {
      "title": "Worked Example: Merging team rosters",
      "code": "team_a = [\"Alice\"]\nteam_b = [\"Bob\"]\nall_players = team_a + team_b\nprint(len(all_players))",
      "explanation": "\u2022 Total length is 2.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `default_flags = [False] * 4`.",
      "Print `default_flags`."
    ],
    "initialCode": "default_flags = [False] * 4\nprint(default_flags)\n",
    "solutionCode": "default_flags = [False] * 4\nprint(default_flags)\n",
    "hints": [
      "Use `[False] * 4`"
    ],
    "testCases": [
      {
        "id": "py-72-tc-1",
        "description": "default_flags has 4 false items",
        "testFn": "default_flags.length === 4 && default_flags[0] === false"
      }
    ]
  },
  {
    "id": "py-73-count-and-index",
    "title": "73. Counting & Locating Items: .count() & .index()",
    "slug": "count-and-index",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find how many times an element appears with .count() and locate its index with .index().",
    "concepts": [
      "list.count(x)",
      "list.index(x)"
    ],
    "analogy": "Counting how many Aces are in a hand of poker cards.",
    "explanationMarkdown": "### .count() & .index()\n```python\ngrades = [\"A\", \"B\", \"A\", \"C\", \"A\"]\nprint(grades.count(\"A\")) # 3\nprint(grades.index(\"B\")) # 1\n```",
    "workedExample": {
      "title": "Worked Example: Counting matches",
      "code": "votes = [\"yes\", \"no\", \"yes\", \"yes\"]\nprint(votes.count(\"yes\"))",
      "explanation": "\u2022 Returns 3.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Create `scores = [10, 20, 10, 30, 10]`.",
      "Count tens: `num_tens = scores.count(10)`.",
      "Print `num_tens`."
    ],
    "initialCode": "scores = [10, 20, 10, 30, 10]\nnum_tens = scores.count(10)\nprint(num_tens)\n",
    "solutionCode": "scores = [10, 20, 10, 30, 10]\nnum_tens = scores.count(10)\nprint(num_tens)\n",
    "hints": [
      "Use `scores.count(10)`"
    ],
    "testCases": [
      {
        "id": "py-73-tc-1",
        "description": "num_tens is 3",
        "testFn": "num_tens === 3"
      }
    ]
  },
  {
    "id": "py-74-insert-remove",
    "title": "74. Positional Insertion: .insert() & .remove()",
    "slug": "insert-remove",
    "language": "python",
    "category": "Module 7: Lists & Sequences",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Insert elements into any index position and delete specific values by content.",
    "concepts": [
      "list.insert(idx, item)",
      "list.remove(value)"
    ],
    "analogy": "Inserting a bookmark at page 45 of a book, or erasing a typo.",
    "explanationMarkdown": "### .insert() and .remove()\n```python\nitems = [\"a\", \"c\"]\nitems.insert(1, \"b\") # [\"a\", \"b\", \"c\"]\nitems.remove(\"a\")    # [\"b\", \"c\"]\n```",
    "workedExample": {
      "title": "Worked Example: Inserting at head",
      "code": "queue = [2, 3]\nqueue.insert(0, 1)\nprint(queue[0])",
      "explanation": "\u2022 1 is now at index 0.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `ranks = [1, 3]`.",
      "Insert 2 at index 1: `ranks.insert(1, 2)`.",
      "Print `ranks`."
    ],
    "initialCode": "ranks = [1, 3]\nranks.insert(1, 2)\nprint(ranks)\n",
    "solutionCode": "ranks = [1, 3]\nranks.insert(1, 2)\nprint(ranks)\n",
    "hints": [
      "Use `ranks.insert(1, 2)`"
    ],
    "testCases": [
      {
        "id": "py-74-tc-1",
        "description": "ranks is [1, 2, 3]",
        "testFn": "ranks.length === 3 && ranks[1] === 2"
      }
    ]
  }
];
