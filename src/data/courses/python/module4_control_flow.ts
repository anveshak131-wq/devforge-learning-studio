import { Lesson } from '../../../types';

export const pythonModule4Lessons: Lesson[] = [
  {
    "id": "py-31-if-statement",
    "title": "31. The if Statement & Indentation",
    "slug": "if-statement-indentation",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Execute blocks of code conditionally using the if statement and 4-space indentation.",
    "concepts": [
      "if condition:",
      "Indentation syntax"
    ],
    "analogy": "A railroad switch track: the train only takes the branch if the switch lever is set to ON.",
    "explanationMarkdown": "### If Statements in Python\nPython uses indentation instead of curly braces:\n```python\ntemp = 30\nif temp > 25:\n    print(\"It's warm outside!\")\n```",
    "workedExample": {
      "title": "Worked Example: Age check",
      "code": "age = 20\nstatus = \"minor\"\nif age >= 18:\n    status = \"adult\"\nprint(status)",
      "explanation": "\u2022 Sets status to adult because 20 >= 18.",
      "expectedOutput": "adult"
    },
    "exerciseSteps": [
      "Create `score = 80`.",
      "Create `result = \"pass\"`.",
      "If `score >= 50:`, print `result`."
    ],
    "initialCode": "score = 80\nresult = \"pass\"\nif score >= 50:\n    print(result)\n",
    "solutionCode": "score = 80\nresult = \"pass\"\nif score >= 50:\n    print(result)\n",
    "hints": [
      "Indent the print statement under the if"
    ],
    "testCases": [
      {
        "id": "py-31-tc-1",
        "description": "result is pass",
        "testFn": "result === 'pass'"
      }
    ]
  },
  {
    "id": "py-32-else-clause",
    "title": "32. The Fallback else Clause",
    "slug": "else-clause",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Provide a default fallback branch that executes when the if condition evaluates to False.",
    "concepts": [
      "else:",
      "Two-way branching"
    ],
    "analogy": "A traffic fork: if you have the toll pass take Express, else take the Standard lane.",
    "explanationMarkdown": "### The else Clause\n```python\nis_logged_in = False\nif is_logged_in:\n    print(\"Welcome!\")\nelse:\n    print(\"Please log in.\")\n```",
    "workedExample": {
      "title": "Worked Example: Odd or Even",
      "code": "n = 7\nif n % 2 == 0:\n    ans = \"even\"\nelse:\n    ans = \"odd\"\nprint(ans)",
      "explanation": "\u2022 7 % 2 is 1, so else branch runs.",
      "expectedOutput": "odd"
    },
    "exerciseSteps": [
      "Create `coins = 3`.",
      "If `coins >= 5: outcome = \"ride\"` else: `outcome = \"need more\"`.",
      "Print `outcome`."
    ],
    "initialCode": "coins = 3\nif coins >= 5:\n    outcome = \"ride\"\nelse:\n    outcome = \"need more\"\nprint(outcome)\n",
    "solutionCode": "coins = 3\nif coins >= 5:\n    outcome = \"ride\"\nelse:\n    outcome = \"need more\"\nprint(outcome)\n",
    "hints": [
      "Set `outcome = \"need more\"` in the else block"
    ],
    "testCases": [
      {
        "id": "py-32-tc-1",
        "description": "outcome is need more",
        "testFn": "outcome === 'need more'"
      }
    ]
  },
  {
    "id": "py-33-elif-statement",
    "title": "33. Multi-Way Decisions with elif",
    "slug": "elif-statement",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Chain multiple mutually exclusive checks using elif (short for else if).",
    "concepts": [
      "elif condition:",
      "Multiple branches"
    ],
    "analogy": "A traffic light: Green means Go, elif Yellow means Slow, else Red means Stop.",
    "explanationMarkdown": "### elif in Python\n```python\nscore = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n```",
    "workedExample": {
      "title": "Worked Example: Traffic signal",
      "code": "light = \"yellow\"\nif light == \"green\":\n    action = \"go\"\nelif light == \"yellow\":\n    action = \"slow\"\nelse:\n    action = \"stop\"\nprint(action)",
      "explanation": "\u2022 Light matches yellow, sets action to slow.",
      "expectedOutput": "slow"
    },
    "exerciseSteps": [
      "Create `battery = 15`.",
      "If `battery > 50: level = \"high\"`, elif `battery > 20: level = \"medium\"`, else: `level = \"low\"`.",
      "Print `level`."
    ],
    "initialCode": "battery = 15\nif battery > 50:\n    level = \"high\"\nelif battery > 20:\n    level = \"medium\"\nelse:\n    level = \"low\"\nprint(level)\n",
    "solutionCode": "battery = 15\nif battery > 50:\n    level = \"high\"\nelif battery > 20:\n    level = \"medium\"\nelse:\n    level = \"low\"\nprint(level)\n",
    "hints": [
      "Use `elif battery > 20:` and `else:`"
    ],
    "testCases": [
      {
        "id": "py-33-tc-1",
        "description": "level is low",
        "testFn": "level === 'low'"
      }
    ]
  },
  {
    "id": "py-34-nested-conditions",
    "title": "34. Nested Conditions",
    "slug": "nested-conditions",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Place if statements inside other if blocks for hierarchical decision making.",
    "concepts": [
      "Nested if",
      "Double indentation"
    ],
    "analogy": "Entering a secure building: first pass the lobby gate, THEN scan your badge at the executive floor elevator.",
    "explanationMarkdown": "### Nested if\n```python\nis_logged = True\nis_admin = True\nif is_logged:\n    if is_admin:\n        print(\"Superuser Dashboard\")\n```",
    "workedExample": {
      "title": "Worked Example: Qualified applicant",
      "code": "degree = True\nexp = 3\nqualified = False\nif degree:\n    if exp >= 2:\n        qualified = True\nprint(qualified)",
      "explanation": "\u2022 Both conditions met.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `has_ticket = True`.",
      "Create `has_id = True`.",
      "If `has_ticket:` and if `has_id:`, set `admitted = True`.",
      "Print `admitted`."
    ],
    "initialCode": "has_ticket = True\nhas_id = True\nadmitted = False\nif has_ticket:\n    if has_id:\n        admitted = True\nprint(admitted)\n",
    "solutionCode": "has_ticket = True\nhas_id = True\nadmitted = False\nif has_ticket:\n    if has_id:\n        admitted = True\nprint(admitted)\n",
    "hints": [
      "Indent second if inside the first"
    ],
    "testCases": [
      {
        "id": "py-34-tc-1",
        "description": "admitted is True",
        "testFn": "admitted === true"
      }
    ]
  },
  {
    "id": "py-35-truthy-falsy",
    "title": "35. Truthy & Falsy Values in Python",
    "slug": "truthy-falsy-values",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand what evaluates to False in Python (0, '', None, [], {}) vs True.",
    "concepts": [
      "Falsy: 0, '', None, []",
      "Truthy: non-zero, non-empty"
    ],
    "analogy": "An empty wallet is falsy; a wallet with even a single coin is truthy.",
    "explanationMarkdown": "### Truthy vs Falsy\nIn Python, empty structures and zeros are naturally Falsy:\n```python\nitems = []\nif items:\n    print(\"Cart has items\")\nelse:\n    print(\"Cart is empty\") # Runs!\n```",
    "workedExample": {
      "title": "Worked Example: Non-empty string check",
      "code": "username = \"\"\nif username:\n    msg = \"valid\"\nelse:\n    msg = \"empty\"\nprint(msg)",
      "explanation": "\u2022 Empty string is falsy.",
      "expectedOutput": "empty"
    },
    "exerciseSteps": [
      "Create `cart = []`.",
      "If `cart:`, set `has_items = True` else: `has_items = False`.",
      "Print `has_items`."
    ],
    "initialCode": "cart = []\nif cart:\n    has_items = True\nelse:\n    has_items = False\nprint(has_items)\n",
    "solutionCode": "cart = []\nif cart:\n    has_items = True\nelse:\n    has_items = False\nprint(has_items)\n",
    "hints": [
      "Empty list `[]` evaluates to False"
    ],
    "testCases": [
      {
        "id": "py-35-tc-1",
        "description": "has_items is False",
        "testFn": "has_items === false"
      }
    ]
  },
  {
    "id": "py-36-ternary-operator",
    "title": "36. One-Line Conditional (Ternary)",
    "slug": "ternary-operator",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign variables with concise one-line conditionals: value_if_true if cond else value_if_false.",
    "concepts": [
      "x if cond else y",
      "Inline condition"
    ],
    "analogy": "A fast decision: 'umbrella if raining else sunglasses'.",
    "explanationMarkdown": "### Python Ternary Expression\n```python\nage = 20\nstatus = \"adult\" if age >= 18 else \"minor\"\n```",
    "workedExample": {
      "title": "Worked Example: Discount label",
      "code": "points = 120\nlevel = \"VIP\" if points > 100 else \"Standard\"\nprint(level)",
      "explanation": "\u2022 Evaluates to VIP.",
      "expectedOutput": "VIP"
    },
    "exerciseSteps": [
      "Create `score = 75`.",
      "Create `verdict = \"pass\" if score >= 60 else \"fail\"`.",
      "Print `verdict`."
    ],
    "initialCode": "score = 75\nverdict = \"pass\" if score >= 60 else \"fail\"\nprint(verdict)\n",
    "solutionCode": "score = 75\nverdict = \"pass\" if score >= 60 else \"fail\"\nprint(verdict)\n",
    "hints": [
      "Use `\"pass\" if score >= 60 else \"fail\"`"
    ],
    "testCases": [
      {
        "id": "py-36-tc-1",
        "description": "verdict is pass",
        "testFn": "verdict === 'pass'"
      }
    ]
  },
  {
    "id": "py-37-chained-comparisons",
    "title": "37. Chained Comparisons (a < x < b)",
    "slug": "chained-comparisons",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Chain multiple numerical comparisons naturally like in standard mathematics.",
    "concepts": [
      "min_val <= x <= max_val",
      "Mathematical notation"
    ],
    "analogy": "Reading a thermometer comfort zone: 68 <= temp <= 74.",
    "explanationMarkdown": "### Chained Comparisons\nInstead of `x >= 10 and x <= 20`, Python lets you write:\n```python\nval = 15\nif 10 <= val <= 20:\n    print(\"In range!\")\n```",
    "workedExample": {
      "title": "Worked Example: Teenager range check",
      "code": "age = 15\nis_teen = 13 <= age <= 19\nprint(is_teen)",
      "explanation": "\u2022 13 <= 15 <= 19 is True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `hour = 14`.",
      "Check if within 9 to 17: `is_work_hour = 9 <= hour <= 17`.",
      "Print `is_work_hour`."
    ],
    "initialCode": "hour = 14\nis_work_hour = 9 <= hour <= 17\nprint(is_work_hour)\n",
    "solutionCode": "hour = 14\nis_work_hour = 9 <= hour <= 17\nprint(is_work_hour)\n",
    "hints": [
      "Use `9 <= hour <= 17`"
    ],
    "testCases": [
      {
        "id": "py-37-tc-1",
        "description": "is_work_hour is True",
        "testFn": "is_work_hour === true"
      }
    ]
  },
  {
    "id": "py-38-in-not-in",
    "title": "38. Membership Testing with in & not in",
    "slug": "in-not-in-membership",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Check if an item exists or does not exist inside a list, tuple, or string.",
    "concepts": [
      "item in collection",
      "item not in collection"
    ],
    "analogy": "Checking a guest list: 'Is Alex on the list? Yes. Is Mallory on the banned list?'",
    "explanationMarkdown": "### Membership Testing\n```python\nbanned = [\"spam\", \"bot\"]\nuser = \"bot\"\nif user in banned:\n    print(\"Blocked\")\n```",
    "workedExample": {
      "title": "Worked Example: Allowed colors",
      "code": "palette = [\"red\", \"green\", \"blue\"]\nvalid = \"purple\" not in palette\nprint(valid)",
      "explanation": "\u2022 purple is not in palette, returns True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `allowed = [\"admin\", \"editor\"]`.",
      "Create `role = \"guest\"`.",
      "Check `can_edit = role in allowed`.",
      "Print `can_edit`."
    ],
    "initialCode": "allowed = [\"admin\", \"editor\"]\nrole = \"guest\"\ncan_edit = role in allowed\nprint(can_edit)\n",
    "solutionCode": "allowed = [\"admin\", \"editor\"]\nrole = \"guest\"\ncan_edit = role in allowed\nprint(can_edit)\n",
    "hints": [
      "Use `role in allowed`"
    ],
    "testCases": [
      {
        "id": "py-38-tc-1",
        "description": "can_edit is False",
        "testFn": "can_edit === false"
      }
    ]
  },
  {
    "id": "py-39-is-vs-equal",
    "title": "39. Identity vs Equality: 'is' vs '=='",
    "slug": "identity-vs-equality",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand the difference between identical memory location (is) and value equality (==).",
    "concepts": [
      "is (same object)",
      "== (same value)",
      "Checking None with is None"
    ],
    "analogy": "Two identical paperback books: they have the same text (==), but they are not the same physical copy (is).",
    "explanationMarkdown": "### is vs ==\nAlways check `None` using `is`:\n```python\nval = None\nif val is None:\n    print(\"Value is empty\")\n```",
    "workedExample": {
      "title": "Worked Example: Checking None",
      "code": "response = None\nis_empty = response is None\nprint(is_empty)",
      "explanation": "\u2022 Returns True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `payload = None`.",
      "Check if None: `is_missing = payload is None`.",
      "Print `is_missing`."
    ],
    "initialCode": "payload = None\nis_missing = payload is None\nprint(is_missing)\n",
    "solutionCode": "payload = None\nis_missing = payload is None\nprint(is_missing)\n",
    "hints": [
      "Use `payload is None`"
    ],
    "testCases": [
      {
        "id": "py-39-tc-1",
        "description": "is_missing is True",
        "testFn": "is_missing === true"
      }
    ]
  },
  {
    "id": "py-40-pass-placeholder",
    "title": "40. Code Stubs with the 'pass' Statement",
    "slug": "pass-statement",
    "language": "python",
    "category": "Module 4: Control Flow & Logic",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Use pass as a syntactic placeholder where code is required but no action is needed.",
    "concepts": [
      "pass keyword",
      "Empty code blocks"
    ],
    "analogy": "A 'Pardon Our Dust / Under Construction' sign occupying an empty storefront.",
    "explanationMarkdown": "### The pass Statement\n```python\nif True:\n    pass # Do nothing, syntactically valid\n```",
    "workedExample": {
      "title": "Worked Example: Valid empty branch",
      "code": "status = \"ok\"\nif status == \"ok\":\n    pass\nprint(status)",
      "explanation": "\u2022 pass prevents an IndentationError.",
      "expectedOutput": "ok"
    },
    "exerciseSteps": [
      "Write an if statement with `pass`: `if 5 > 2: pass`.",
      "Create `state = \"done\"`.",
      "Print `state`."
    ],
    "initialCode": "if 5 > 2:\n    pass\nstate = \"done\"\nprint(state)\n",
    "solutionCode": "if 5 > 2:\n    pass\nstate = \"done\"\nprint(state)\n",
    "hints": [
      "Indent `pass` inside the if block"
    ],
    "testCases": [
      {
        "id": "py-40-tc-1",
        "description": "state is done",
        "testFn": "state === 'done'"
      }
    ]
  }
];
