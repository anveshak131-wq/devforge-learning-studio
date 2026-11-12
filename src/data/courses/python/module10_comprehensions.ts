import { Lesson } from '../../../types';

export const pythonModule10Lessons: Lesson[] = [
  {
    "id": "py-93-list-comprehension-basics",
    "title": "93. Elegant Sequences with List Comprehensions",
    "slug": "list-comprehension-basics",
    "language": "python",
    "category": "Module 10: Comprehensions",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Construct new lists concisely in a single line using [expr for item in iterable].",
    "concepts": [
      "[x for x in list]",
      "Pythonic list building"
    ],
    "analogy": "An automated stamping machine: feed raw metal sheets in and it outputs stamped coins in one fluid line.",
    "explanationMarkdown": "### List Comprehensions\nInstead of creating an empty list and calling `.append()`:\n```python\n# Clean one-liner:\nsquares = [x * x for x in [1, 2, 3, 4]]\n# [1, 4, 9, 16]\n```",
    "workedExample": {
      "title": "Worked Example: Doubling numbers",
      "code": "doubled = [n * 2 for n in [1, 2, 3]]\nprint(doubled[1])",
      "explanation": "\u2022 2 * 2 = 4.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create a list of numbers `[1, 2, 3]`.",
      "Double them using `doubles = [x * 2 for x in [1, 2, 3]]`.",
      "Print `doubles`."
    ],
    "initialCode": "doubles = [x * 2 for x in [1, 2, 3]]\nprint(doubles)\n",
    "solutionCode": "doubles = [x * 2 for x in [1, 2, 3]]\nprint(doubles)\n",
    "hints": [
      "Use `[x * 2 for x in [1, 2, 3]]`"
    ],
    "testCases": [
      {
        "id": "py-93-tc-1",
        "description": "doubles is [2, 4, 6]",
        "testFn": "doubles[0] === 2 && doubles[2] === 6"
      }
    ]
  },
  {
    "id": "py-94-comprehension-filtering",
    "title": "94. Filtering within Comprehensions ([x for x in l if cond])",
    "slug": "comprehension-filtering",
    "language": "python",
    "category": "Module 10: Comprehensions",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Filter elements directly inside a list comprehension using trailing if conditions.",
    "concepts": [
      "[x for x in l if condition]",
      "Inline filtering"
    ],
    "analogy": "A coin sorter: only quarters pass into the coin tube; dimes and pennies drop into the reject tray.",
    "explanationMarkdown": "### Filtering Comprehensions\n```python\nnums = [1, 2, 3, 4, 5, 6]\nevens = [n for n in nums if n % 2 == 0]\n# [2, 4, 6]\n```",
    "workedExample": {
      "title": "Worked Example: Filtering positive values",
      "code": "raw = [-5, 10, -2, 20]\npos = [x for x in raw if x > 0]\nprint(len(pos))",
      "explanation": "\u2022 10 and 20 (length 2).",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Filter numbers >= 10: `big_nums = [x for x in [5, 12, 8, 25] if x >= 10]`.",
      "Print `big_nums`."
    ],
    "initialCode": "big_nums = [x for x in [5, 12, 8, 25] if x >= 10]\nprint(big_nums)\n",
    "solutionCode": "big_nums = [x for x in [5, 12, 8, 25] if x >= 10]\nprint(big_nums)\n",
    "hints": [
      "Add `if x >= 10` at the end"
    ],
    "testCases": [
      {
        "id": "py-94-tc-1",
        "description": "big_nums has 12 and 25",
        "testFn": "big_nums.length === 2 && big_nums[0] === 12"
      }
    ]
  },
  {
    "id": "py-95-string-comprehensions",
    "title": "95. String Transformations with Comprehensions",
    "slug": "string-comprehensions",
    "language": "python",
    "category": "Module 10: Comprehensions",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Apply string functions across entire lists in one clean expression.",
    "concepts": [
      "[s.upper() for s in words]",
      "Batch transformations"
    ],
    "analogy": "Running an entire batch of text files through an automatic spell checker.",
    "explanationMarkdown": "### String Comprehensions\n```python\nwords = [\"apple\", \"banana\"]\nuppers = [w.upper() for w in words] # [\"APPLE\", \"BANANA\"]\n```",
    "workedExample": {
      "title": "Worked Example: Stripping inputs",
      "code": "raw = [\"  a  \", \"  b  \"]\nclean = [s.strip() for s in raw]\nprint(clean[0])",
      "explanation": "\u2022 Strips whitespace.",
      "expectedOutput": "a"
    },
    "exerciseSteps": [
      "Create `names = [\"alice\", \"bob\"]`.",
      "Convert to uppercase: `loud_names = [n.upper() for n in names]`.",
      "Print `loud_names`."
    ],
    "initialCode": "names = [\"alice\", \"bob\"]\nloud_names = [n.upper() for n in names]\nprint(loud_names)\n",
    "solutionCode": "names = [\"alice\", \"bob\"]\nloud_names = [n.upper() for n in names]\nprint(loud_names)\n",
    "hints": [
      "Use `[n.upper() for n in names]`"
    ],
    "testCases": [
      {
        "id": "py-95-tc-1",
        "description": "loud_names contains ALICE and BOB",
        "testFn": "loud_names[0] === 'ALICE' && loud_names[1] === 'BOB'"
      }
    ]
  },
  {
    "id": "py-96-dict-comprehensions",
    "title": "96. Dictionary Comprehensions ({k: v for ...})",
    "slug": "dict-comprehensions",
    "language": "python",
    "category": "Module 10: Comprehensions",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Generate key-value mappings dynamically using {key_expr: val_expr for x in iterable}.",
    "concepts": [
      "{k: v for ...}",
      "Dictionary synthesis"
    ],
    "analogy": "Creating an index catalog of products and prices with an automated macro.",
    "explanationMarkdown": "### Dict Comprehensions\n```python\nnames = [\"Alice\", \"Bob\"]\nlengths = {name: len(name) for name in names}\n# {\"Alice\": 5, \"Bob\": 3}\n```",
    "workedExample": {
      "title": "Worked Example: Square lookup table",
      "code": "squares = {n: n * n for n in [1, 2, 3]}\nprint(squares[3])",
      "explanation": "\u2022 3: 9.",
      "expectedOutput": "9"
    },
    "exerciseSteps": [
      "Create square lookup: `square_map = {x: x ** 2 for x in [2, 4]}`.",
      "Print `square_map[4]`."
    ],
    "initialCode": "square_map = {x: x ** 2 for x in [2, 4]}\nprint(square_map[4])\n",
    "solutionCode": "square_map = {x: x ** 2 for x in [2, 4]}\nprint(square_map[4])\n",
    "hints": [
      "Use `{x: x ** 2 for x in [2, 4]}`"
    ],
    "testCases": [
      {
        "id": "py-96-tc-1",
        "description": "square_map has 4 mapping to 16",
        "testFn": "square_map[4] === 16"
      }
    ]
  },
  {
    "id": "py-97-set-comprehensions",
    "title": "97. Set Comprehensions ({x for x in ...})",
    "slug": "set-comprehensions",
    "language": "python",
    "category": "Module 10: Comprehensions",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Construct unique sets dynamically with comprehension syntax using curly braces {expr for ...}.",
    "concepts": [
      "{x for x in iterable}",
      "Unique comprehension results"
    ],
    "analogy": "Filtering an ingredient list down to unique dietary categories.",
    "explanationMarkdown": "### Set Comprehensions\n```python\nwords = [\"apple\", \"banana\", \"apricot\"]\nfirst_letters = {w[0] for w in words} # {\"a\", \"b\"}\n```",
    "workedExample": {
      "title": "Worked Example: Unique word lengths",
      "code": "words = [\"hi\", \"to\", \"python\"]\nlens = {len(w) for w in words}\nprint(len(lens))",
      "explanation": "\u2022 2 and 6 (length 2).",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Extract lengths: `unique_lens = {len(x) for x in [\"cat\", \"dog\", \"bird\"]}`.",
      "Print `unique_lens`."
    ],
    "initialCode": "unique_lens = {len(x) for x in [\"cat\", \"dog\", \"bird\"]}\nprint(unique_lens)\n",
    "solutionCode": "unique_lens = {len(x) for x in [\"cat\", \"dog\", \"bird\"]}\nprint(unique_lens)\n",
    "hints": [
      "Use `{len(x) for x in [\"cat\", \"dog\", \"bird\"]}`"
    ],
    "testCases": [
      {
        "id": "py-97-tc-1",
        "description": "unique_lens has length 2",
        "testFn": "unique_lens !== null"
      }
    ]
  },
  {
    "id": "py-98-nested-comprehensions",
    "title": "98. Flattening Lists with Nested Comprehensions",
    "slug": "nested-comprehensions",
    "language": "python",
    "category": "Module 10: Comprehensions",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Flatten 2D matrices into single flat lists in one expressive line.",
    "concepts": [
      "[x for row in matrix for x in row]",
      "Matrix flattening"
    ],
    "analogy": "Emptying a 6-egg carton into a single flat frying pan.",
    "explanationMarkdown": "### Flattening Matrices\n```python\nmatrix = [[1, 2], [3, 4]]\nflat = [val for row in matrix for val in row] # [1, 2, 3, 4]\n```",
    "workedExample": {
      "title": "Worked Example: Flat 2x2 grid",
      "code": "grid = [[10, 20], [30, 40]]\nall_vals = [x for row in grid for x in row]\nprint(len(all_vals))",
      "explanation": "\u2022 Flattened to 4 items.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create `matrix = [[1, 2], [3, 4]]`.",
      "Flatten with `flat = [x for row in matrix for x in row]`.",
      "Print `flat`."
    ],
    "initialCode": "matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]\nprint(flat)\n",
    "solutionCode": "matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]\nprint(flat)\n",
    "hints": [
      "Use `[x for row in matrix for x in row]`"
    ],
    "testCases": [
      {
        "id": "py-98-tc-1",
        "description": "flat has 4 items",
        "testFn": "flat.length === 4 && flat[0] === 1 && flat[3] === 4"
      }
    ]
  }
];
