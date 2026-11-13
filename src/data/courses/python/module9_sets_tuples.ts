import { Lesson } from '../../../types';

export const pythonModule9Lessons: Lesson[] = [
  {
    "id": "py-85-tuples-immutable",
    "title": "85. Immutable Sequences: Tuples",
    "slug": "tuples-immutable",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Store fixed, unchangeable ordered sequences inside parentheses (x, y).",
    "concepts": [
      "Tuple syntax (a, b)",
      "Immutability"
    ],
    "analogy": "GPS coordinates engraved on a stone monument: latitude and longitude never change.",
    "explanationMarkdown": "### Tuples in Python\nTuples cannot be modified after creation:\n```python\npoint = (10, 20)\nprint(point[0]) # 10\n# point[0] = 15 -> Error! Immutability protection\n```",
    "workedExample": {
      "title": "Worked Example: Screen resolution tuple",
      "code": "res = (1920, 1080)\nprint(res[0])",
      "explanation": "• 1920.",
      "expectedOutput": "1920"
    },
    "exerciseSteps": [
      "Create `rgb = (255, 0, 128)`.",
      "Print `rgb[0]`."
    ],
    "initialCode": "# Step 1: Create variable 'rgb' and set it to (255, 0, 128)\n# TODO: Write code below\n\n# Step 2: Print 'rgb[0]'\n# TODO: Write code below\n",
    "solutionCode": "rgb = (255, 0, 128)\nprint(rgb[0])\n",
    "hints": [
      "Concept: Store fixed, unchangeable ordered sequences inside parentheses (x, y). Think of it like: GPS coordinates engraved on a stone monument: latitude and longitude never change.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `rgb = (255, 0, 128)`.\n2. Print `rgb[0]`.\nKey Tip: Use parentheses `(255, 0, 128)`"
    ],
    "testCases": [
      {
        "id": "py-85-tc-1",
        "description": "rgb[0] is 255",
        "testFn": "rgb[0] === 255"
      }
    ]
  },
  {
    "id": "py-86-tuple-unpacking",
    "title": "86. Multi-Variable Tuple Unpacking",
    "slug": "tuple-unpacking",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Unpack elements from a tuple directly into separate variables.",
    "concepts": [
      "a, b = tuple",
      "Direct unpacking"
    ],
    "analogy": "Unzipping a dual-compartment lunchbox into a sandwich and a juice box.",
    "explanationMarkdown": "### Tuple Unpacking\n```python\ncoords = (37.77, -122.41)\nlat, lon = coords\n```",
    "workedExample": {
      "title": "Worked Example: Swapping variables",
      "code": "x = 1\ny = 2\nx, y = y, x\nprint(x)",
      "explanation": "• Swaps x and y cleanly.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `point = (5, 9)`.",
      "Unpack `x, y = point`.",
      "Print `x + y`."
    ],
    "initialCode": "# Step 1: Create variable 'point' and set it to (5, 9)\n# TODO: Write code below\n\n# Step 2: Unpack 'x, y = point'\n# TODO: Write code below\n\n# Step 3: Print 'x + y'\n# TODO: Write code below\n",
    "solutionCode": "point = (5, 9)\nx, y = point\nprint(x + y)\n",
    "hints": [
      "Concept: Unpack elements from a tuple directly into separate variables. Think of it like: Unzipping a dual-compartment lunchbox into a sandwich and a juice box.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `point = (5, 9)`.\n2. Unpack `x, y = point`.\n3. Print `x + y`.\nKey Tip: Unpack with `x, y = point`"
    ],
    "testCases": [
      {
        "id": "py-86-tc-1",
        "description": "x is 5 and y is 9",
        "testFn": "x === 5 && y === 9"
      }
    ]
  },
  {
    "id": "py-87-sets-unique",
    "title": "87. Unique Collections with set()",
    "slug": "sets-unique",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Store unordered collections of strictly unique values where duplicates are discarded.",
    "concepts": [
      "set([1, 2, 2])",
      "Automatic deduplication"
    ],
    "analogy": "A bag of unique colored marbles: dropping in a second red marble does not create a new color in the collection.",
    "explanationMarkdown": "### Sets\n```python\nnums = set([1, 2, 2, 3])\nprint(len(nums)) # 3 (duplicate 2 removed)\n```",
    "workedExample": {
      "title": "Worked Example: Removing duplicate tags",
      "code": "tags = set([\"python\", \"web\", \"python\"])\nprint(len(tags))",
      "explanation": "• Length is 2.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create a set from `[10, 20, 20, 30]`: `unique = set([10, 20, 20, 30])`.",
      "Print `len(unique)`."
    ],
    "initialCode": "# Step 1: Create a set from '[10, 20, 20, 30]': 'unique = set([10, 20, 20, 30])'\n# TODO: Write code below\n\n# Step 2: Print 'len(unique)'\n# TODO: Write code below\n",
    "solutionCode": "unique = set([10, 20, 20, 30])\nprint(len(unique))\n",
    "hints": [
      "Concept: Store unordered collections of strictly unique values where duplicates are discarded. Think of it like: A bag of unique colored marbles: dropping in a second red marble does not create a new color in the collection.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create a set from `[10, 20, 20, 30]`: `unique = set([10, 20, 20, 30])`.\n2. Print `len(unique)`.\nKey Tip: Use `set([10, 20, 20, 30])`"
    ],
    "testCases": [
      {
        "id": "py-87-tc-1",
        "description": "unique set has length 3",
        "testFn": "unique.size === 3 || unique.length === 3"
      }
    ]
  },
  {
    "id": "py-88-set-add-remove",
    "title": "88. Adding & Removing Set Items (.add, .discard)",
    "slug": "set-add-remove",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Add new elements to a set with .add() and remove them safely with .discard().",
    "concepts": [
      "set.add(x)",
      "set.discard(x)"
    ],
    "analogy": "Adding a name to a club membership roll.",
    "explanationMarkdown": "### .add() and .discard()\n```python\ns = set()\ns.add(\"ruby\")\ns.add(\"python\")\ns.discard(\"ruby\")\n```",
    "workedExample": {
      "title": "Worked Example: Unique visitor set",
      "code": "visitors = set()\nvisitors.add(\"ip_1\")\nvisitors.add(\"ip_1\")\nprint(len(visitors))",
      "explanation": "• Only 1 unique item stored.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `skills = set([\"HTML\"])`.",
      "Add CSS with `skills.add(\"CSS\")`.",
      "Print `len(skills)`."
    ],
    "initialCode": "# Step 1: Create variable 'skills' and set it to set([\"HTML\"])\n# TODO: Write code below\n\n# Step 2: Add CSS with 'skills.add(\"CSS\")'\n# TODO: Write code below\n\n# Step 3: Print 'len(skills)'\n# TODO: Write code below\n",
    "solutionCode": "skills = set([\"HTML\"])\nskills.add(\"CSS\")\nprint(len(skills))\n",
    "hints": [
      "Concept: Add new elements to a set with .add() and remove them safely with .discard(). Think of it like: Adding a name to a club membership roll.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `skills = set([\"HTML\"])`.\n2. Add CSS with `skills.add(\"CSS\")`.\n3. Print `len(skills)`.\nKey Tip: Use `skills.add(\"CSS\")`"
    ],
    "testCases": [
      {
        "id": "py-88-tc-1",
        "description": "skills has 2 items",
        "testFn": "skills.size === 2 || skills.length === 2"
      }
    ]
  },
  {
    "id": "py-89-set-union-intersection",
    "title": "89. Set Operations: Union (|) & Intersection (&)",
    "slug": "set-union-intersection",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Compute overlapping shared elements or combined totals between two sets.",
    "concepts": [
      "Union: a | b",
      "Intersection: a & b"
    ],
    "analogy": "A Venn diagram: the overlapping center region is intersection (&), and the whole combined area is union (|).",
    "explanationMarkdown": "### Set Operations\n```python\na = set([1, 2, 3])\nb = set([2, 3, 4])\nprint(a & b) # {2, 3} (shared)\nprint(a | b) # {1, 2, 3, 4} (all)\n```",
    "workedExample": {
      "title": "Worked Example: Common interests",
      "code": "p1 = set([\"music\", \"art\"])\np2 = set([\"art\", \"sports\"])\ncommon = p1 & p2\nprint(len(common))",
      "explanation": "• 1 shared interest (art).",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `team1 = set([\"Alice\", \"Bob\"])`.",
      "Create `team2 = set([\"Bob\", \"Charlie\"])`.",
      "Compute intersection: `both = team1 & team2`.",
      "Print `both`."
    ],
    "initialCode": "# Step 1: Create variable 'team1' and set it to set([\"Alice\", \"Bob\"])\n# TODO: Write code below\n\n# Step 2: Create variable 'team2' and set it to set([\"Bob\", \"Charlie\"])\n# TODO: Write code below\n\n# Step 3: Compute intersection: 'both = team1 & team2'\n# TODO: Write code below\n\n# Step 4: Print 'both'\n# TODO: Write code below\n",
    "solutionCode": "team1 = set([\"Alice\", \"Bob\"])\nteam2 = set([\"Bob\", \"Charlie\"])\nboth = team1 & team2\nprint(both)\n",
    "hints": [
      "Concept: Compute overlapping shared elements or combined totals between two sets. Think of it like: A Venn diagram: the overlapping center region is intersection (&), and the whole combined area is union (|).",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `team1 = set([\"Alice\", \"Bob\"])`.\n2. Create `team2 = set([\"Bob\", \"Charlie\"])`.\n3. Compute intersection: `both = team1 & team2`.\n4. Print `both`.\nKey Tip: Use `team1 & team2`"
    ],
    "testCases": [
      {
        "id": "py-89-tc-1",
        "description": "both contains Bob",
        "testFn": "both !== null"
      }
    ]
  },
  {
    "id": "py-90-deduplicate-list-set",
    "title": "90. High-Speed List Deduplication (list(set(l)))",
    "slug": "deduplicate-list-set",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Remove duplicates from any list in one clean line by casting to set and back to list.",
    "concepts": [
      "list(set(my_list))",
      "One-line deduplication"
    ],
    "analogy": "Passing a bag of duplicate tokens through a scanner that only registers distinct colors.",
    "explanationMarkdown": "### One-Line Deduplication\n```python\nraw = [1, 2, 2, 3, 3, 3]\nclean = list(set(raw))\nprint(len(clean)) # 3\n```",
    "workedExample": {
      "title": "Worked Example: Clean list",
      "code": "tags = [\"js\", \"py\", \"js\"]\nunique_tags = list(set(tags))\nprint(len(unique_tags))",
      "explanation": "• Reduces 3 to 2.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `raw_ids = [101, 102, 101, 103]`.",
      "Deduplicate: `unique_ids = list(set(raw_ids))`.",
      "Print `len(unique_ids)`."
    ],
    "initialCode": "# Step 1: Create variable 'raw_ids' and set it to [101, 102, 101, 103]\n# TODO: Write code below\n\n# Step 2: Deduplicate: 'unique_ids = list(set(raw_ids))'\n# TODO: Write code below\n\n# Step 3: Print 'len(unique_ids)'\n# TODO: Write code below\n",
    "solutionCode": "raw_ids = [101, 102, 101, 103]\nunique_ids = list(set(raw_ids))\nprint(len(unique_ids))\n",
    "hints": [
      "Concept: Remove duplicates from any list in one clean line by casting to set and back to list. Think of it like: Passing a bag of duplicate tokens through a scanner that only registers distinct colors.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `raw_ids = [101, 102, 101, 103]`.\n2. Deduplicate: `unique_ids = list(set(raw_ids))`.\n3. Print `len(unique_ids)`.\nKey Tip: Use `list(set(raw_ids))`"
    ],
    "testCases": [
      {
        "id": "py-90-tc-1",
        "description": "unique_ids has length 3",
        "testFn": "unique_ids.length === 3"
      }
    ]
  },
  {
    "id": "py-91-tuple-immutability-security",
    "title": "91. Safe Read-Only Constants with Tuples",
    "slug": "tuple-immutability-security",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Protect critical reference configurations against accidental mutation by using tuples instead of lists.",
    "concepts": [
      "Read-only tuples",
      "Defensive programming"
    ],
    "analogy": "Laminating a sign so that nobody can write or erase anything on it.",
    "explanationMarkdown": "### Why Tuples?\nTuples express developer intent: 'This data is a fixed constant and must never be altered.'\n```python\nDAYS_OF_WEEK = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\")\n```",
    "workedExample": {
      "title": "Worked Example: Fixed directions",
      "code": "DIRECTIONS = (\"N\", \"S\", \"E\", \"W\")\nprint(len(DIRECTIONS))",
      "explanation": "• 4 constant cardinal directions.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create `STATUS_CODES = (200, 404, 500)`.",
      "Print `STATUS_CODES[0]`."
    ],
    "initialCode": "# Step 1: Create variable 'STATUS_CODES' and set it to (200, 404, 500)\n# TODO: Write code below\n\n# Step 2: Print 'STATUS_CODES[0]'\n# TODO: Write code below\n",
    "solutionCode": "STATUS_CODES = (200, 404, 500)\nprint(STATUS_CODES[0])\n",
    "hints": [
      "Concept: Protect critical reference configurations against accidental mutation by using tuples instead of lists. Think of it like: Laminating a sign so that nobody can write or erase anything on it.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `STATUS_CODES = (200, 404, 500)`.\n2. Print `STATUS_CODES[0]`.\nKey Tip: Access index `0`"
    ],
    "testCases": [
      {
        "id": "py-91-tc-1",
        "description": "STATUS_CODES has 3 items",
        "testFn": "STATUS_CODES.length === 3"
      }
    ]
  },
  {
    "id": "py-92-set-difference",
    "title": "92. Finding Missing Items with Set Difference (-)",
    "slug": "set-difference",
    "language": "python",
    "category": "Module 9: Sets & Tuples",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Find items present in set A that are not in set B using the subtraction operator -.",
    "concepts": [
      "Set difference: a - b",
      "Detecting missing records"
    ],
    "analogy": "A checklist of required tasks minus completed tasks shows you exactly what tasks remain to be done.",
    "explanationMarkdown": "### Set Difference\n```python\nrequired = set([\"step1\", \"step2\", \"step3\"])\ncompleted = set([\"step1\"])\npending = required - completed # {\"step2\", \"step3\"}\n```",
    "workedExample": {
      "title": "Worked Example: Unanswered questions",
      "code": "all_q = set([1, 2, 3])\nanswered = set([1, 2])\nleft = all_q - answered\nprint(len(left))",
      "explanation": "• 1 question remains.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `all_tasks = set([\"clean\", \"cook\", \"read\"])`.",
      "Create `done = set([\"clean\"])`.",
      "Compute `remaining = all_tasks - done`.",
      "Print `len(remaining)`."
    ],
    "initialCode": "# Step 1: Create variable 'all_tasks' and set it to set([\"clean\", \"cook\", \"read\"])\n# TODO: Write code below\n\n# Step 2: Create variable 'done' and set it to set([\"clean\"])\n# TODO: Write code below\n\n# Step 3: Compute 'remaining = all_tasks - done'\n# TODO: Write code below\n\n# Step 4: Print 'len(remaining)'\n# TODO: Write code below\n",
    "solutionCode": "all_tasks = set([\"clean\", \"cook\", \"read\"])\ndone = set([\"clean\"])\nremaining = all_tasks - done\nprint(len(remaining))\n",
    "hints": [
      "Concept: Find items present in set A that are not in set B using the subtraction operator -. Think of it like: A checklist of required tasks minus completed tasks shows you exactly what tasks remain to be done.",
      "Syntax Blueprint: Tuples are immutable ordered sequences defined with parentheses: `my_tuple = (item1, item2)`. Access elements via index: `my_tuple[0]`.",
      "Step-by-Step Target:\n1. Create `all_tasks = set([\"clean\", \"cook\", \"read\"])`.\n2. Create `done = set([\"clean\"])`.\n3. Compute `remaining = all_tasks - done`.\n4. Print `len(remaining)`.\nKey Tip: Use `all_tasks - done`"
    ],
    "testCases": [
      {
        "id": "py-92-tc-1",
        "description": "remaining has length 2",
        "testFn": "remaining !== null"
      }
    ]
  }
];
