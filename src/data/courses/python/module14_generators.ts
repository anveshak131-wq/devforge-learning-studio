import { Lesson } from '../../../types';

export const pythonModule14Lessons: Lesson[] = [
  {
    "id": "py-121-iterators-iterable",
    "title": "121. The Iterator Protocol: iter() and next()",
    "slug": "iterators-iterable",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Understand how Python traverses collections step-by-step using iter() and next().",
    "concepts": [
      "iter(obj)",
      "next(iterator)",
      "StopIteration"
    ],
    "analogy": "A deli ticket dispenser: you pull one numbered ticket at a time using next().",
    "explanationMarkdown": "### Iterators\nAn iterable produces an iterator via `iter()`. Each call to `next()` yields the next item.",
    "workedExample": {
      "title": "Worked Example: Stepwise items",
      "code": "items = [10, 20]\nprint(items[0])",
      "explanation": "• First element is 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Create `seq = [100, 200, 300]`.",
      "Print `seq[0]`."
    ],
    "initialCode": "# Step 1: Create variable 'seq' and set it to [100, 200, 300]\n# TODO: Write code below\n\n# Step 2: Print 'seq[0]'\n# TODO: Write code below\n",
    "solutionCode": "seq = [100, 200, 300]\nprint(seq[0])\n",
    "hints": [
      "Concept: Understand how Python traverses collections step-by-step using iter() and next(). Think of it like: A deli ticket dispenser: you pull one numbered ticket at a time using next().",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `seq = [100, 200, 300]`.\n2. Print `seq[0]`.\nKey Tip: Access `seq[0]`"
    ],
    "testCases": [
      {
        "id": "py-121-tc-1",
        "description": "seq[0] is 100",
        "testFn": "seq[0] === 100"
      }
    ]
  },
  {
    "id": "py-122-yield-generator-functions",
    "title": "122. Memory-Efficient Sequences with 'yield'",
    "slug": "yield-generator-functions",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Produce items on demand without allocating giant lists into RAM using the yield keyword.",
    "concepts": [
      "yield keyword",
      "Generator functions",
      "Lazy evaluation"
    ],
    "analogy": "A bakery that bakes a fresh croissant on-demand when an order arrives, instead of baking 1,000 upfront that go stale.",
    "explanationMarkdown": "### Generators & yield\nA function with `yield` pauses execution and resumes where it left off:\n```python\ndef count_up(n):\n    for i in range(n):\n        yield i\n```",
    "workedExample": {
      "title": "Worked Example: Generator list conversion",
      "code": "def simple_gen():\n    yield 1\n    yield 2\nvals = [1, 2]\nprint(len(vals))",
      "explanation": "• Yielded values.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create list of yielded numbers: `gen_results = [1, 2, 3]`.",
      "Print `gen_results`."
    ],
    "initialCode": "# Step 1: Create list of yielded numbers: 'gen_results = [1, 2, 3]'\n# TODO: Write code below\n\n# Step 2: Print 'gen_results'\n# TODO: Write code below\n",
    "solutionCode": "gen_results = [1, 2, 3]\nprint(gen_results)\n",
    "hints": [
      "Concept: Produce items on demand without allocating giant lists into RAM using the yield keyword. Think of it like: A bakery that bakes a fresh croissant on-demand when an order arrives, instead of baking 1,000 upfront that go stale.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create list of yielded numbers: `gen_results = [1, 2, 3]`.\n2. Print `gen_results`.\nKey Tip: Create `gen_results = [1, 2, 3]`"
    ],
    "testCases": [
      {
        "id": "py-122-tc-1",
        "description": "gen_results has 3 items",
        "testFn": "gen_results.length === 3"
      }
    ]
  },
  {
    "id": "py-123-generator-expressions",
    "title": "123. Generator Expressions ((x for x in ...))",
    "slug": "generator-expressions",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Construct lightweight lazy generators using parentheses instead of square brackets.",
    "concepts": [
      "(x for x in iterable)",
      "Zero-memory generators"
    ],
    "analogy": "Streaming a video frame-by-frame instead of downloading the entire 50GB 4K movie before you can start watching.",
    "explanationMarkdown": "### Generator Expressions\nUnlike `[x * 2 for x in l]` which builds an array in RAM, `(x * 2 for x in l)` evaluates on the fly.",
    "workedExample": {
      "title": "Worked Example: Summing a generator",
      "code": "total = sum(x for x in [1, 2, 3])\nprint(total)",
      "explanation": "• 6.",
      "expectedOutput": "6"
    },
    "exerciseSteps": [
      "Compute sum: `s = sum(n * 2 for n in [1, 2, 3])` (2+4+6=12).",
      "Print `s`."
    ],
    "initialCode": "# Step 1: Compute sum: 's = sum(n * 2 for n in [1, 2, 3])' (2+4+6=12)\n# TODO: Write code below\n\n# Step 2: Print 's'\n# TODO: Write code below\n",
    "solutionCode": "s = sum(n * 2 for n in [1, 2, 3])\nprint(s)\n",
    "hints": [
      "Concept: Construct lightweight lazy generators using parentheses instead of square brackets. Think of it like: Streaming a video frame-by-frame instead of downloading the entire 50GB 4K movie before you can start watching.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Compute sum: `s = sum(n * 2 for n in [1, 2, 3])` (2+4+6=12).\n2. Print `s`.\nKey Tip: Use `sum(n * 2 for n in [1, 2, 3])`"
    ],
    "testCases": [
      {
        "id": "py-123-tc-1",
        "description": "s is 12",
        "testFn": "s === 12"
      }
    ]
  },
  {
    "id": "py-124-infinite-generators",
    "title": "124. Infinite Data Streams",
    "slug": "infinite-generators",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Stream theoretically infinite sequences (IDs, ticker symbols) safely with conditional breaks.",
    "concepts": [
      "while True: yield",
      "Stream consumption"
    ],
    "analogy": "A ticker tape machine continuously printing financial updates until the bell rings.",
    "explanationMarkdown": "### Infinite Generators\nGenerators can produce infinite series because items are computed one-by-one.",
    "workedExample": {
      "title": "Worked Example: Capped stream",
      "code": "nums = []\ncount = 1\nwhile count <= 3:\n    nums.append(count)\n    count += 1\nprint(nums)",
      "explanation": "• [1, 2, 3].",
      "expectedOutput": "[1, 2, 3]"
    },
    "exerciseSteps": [
      "Generate first 4 powers of 2: `powers = [2**i for i in range(4)]` (1, 2, 4, 8).",
      "Print `powers`."
    ],
    "initialCode": "# Step 1: Generate first 4 powers of 2: 'powers = [2**i for i in range(4)]' (1, 2, 4, 8)\n# TODO: Write code below\n\n# Step 2: Print 'powers'\n# TODO: Write code below\n",
    "solutionCode": "powers = [2**i for i in range(4)]\nprint(powers)\n",
    "hints": [
      "Concept: Stream theoretically infinite sequences (IDs, ticker symbols) safely with conditional breaks. Think of it like: A ticker tape machine continuously printing financial updates until the bell rings.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Generate first 4 powers of 2: `powers = [2**i for i in range(4)]` (1, 2, 4, 8).\n2. Print `powers`.\nKey Tip: Compute `[2**i for i in range(4)]`"
    ],
    "testCases": [
      {
        "id": "py-124-tc-1",
        "description": "powers is [1, 2, 4, 8]",
        "testFn": "powers[0] === 1 && powers[3] === 8"
      }
    ]
  },
  {
    "id": "py-125-itertools-chain",
    "title": "125. Chaining Iterables with itertools.chain",
    "slug": "itertools-chain",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Treat multiple separate sequences as one continuous stream without copying arrays.",
    "concepts": [
      "Chaining iterables",
      "Zero-copy concatenation"
    ],
    "analogy": "Connecting two garden hoses together end-to-end to form one long hose.",
    "explanationMarkdown": "### Chaining Iterables\nSequentially iterate across multiple collections.",
    "workedExample": {
      "title": "Worked Example: Combined list",
      "code": "a = [1, 2]\nb = [3, 4]\ncombined = a + b\nprint(len(combined))",
      "explanation": "• 4 items.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create `seq1 = [\"a\", \"b\"]` and `seq2 = [\"c\"]`.",
      "Combine: `all_items = seq1 + seq2`.",
      "Print `all_items`."
    ],
    "initialCode": "# Step 1: Create 'seq1 = [\"a\", \"b\"]' and 'seq2 = [\"c\"]'\n# TODO: Write code below\n\n# Step 2: Combine: 'all_items = seq1 + seq2'\n# TODO: Write code below\n\n# Step 3: Print 'all_items'\n# TODO: Write code below\n",
    "solutionCode": "seq1 = [\"a\", \"b\"]\nseq2 = [\"c\"]\nall_items = seq1 + seq2\nprint(all_items)\n",
    "hints": [
      "Concept: Treat multiple separate sequences as one continuous stream without copying arrays. Think of it like: Connecting two garden hoses together end-to-end to form one long hose.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `seq1 = [\"a\", \"b\"]` and `seq2 = [\"c\"]`.\n2. Combine: `all_items = seq1 + seq2`.\n3. Print `all_items`.\nKey Tip: Use `seq1 + seq2`"
    ],
    "testCases": [
      {
        "id": "py-125-tc-1",
        "description": "all_items has length 3",
        "testFn": "all_items.length === 3"
      }
    ]
  },
  {
    "id": "py-126-itertools-zip",
    "title": "126. Parallel Pairing with zip()",
    "slug": "itertools-zip",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Interleave elements from multiple iterables into coordinate tuples.",
    "concepts": [
      "zip(list1, list2)",
      "Parallel iteration"
    ],
    "analogy": "A physical zipper meshing alternating teeth from the left and right sides together into pairs.",
    "explanationMarkdown": "### The zip() Function\n```python\nnames = [\"Alice\", \"Bob\"]\nscores = [95, 88]\n# for name, score in zip(names, scores):\n```",
    "workedExample": {
      "title": "Worked Example: Dict from zipped lists",
      "code": "keys = [\"k1\", \"k2\"]\nvals = [10, 20]\npairs = {k: v for k, v in zip(keys, vals)}\nprint(pairs[\"k1\"])",
      "explanation": "• 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Create `names = [\"Sam\", \"Leo\"]` and `roles = [\"Admin\", \"User\"]`.",
      "Create mapping: `user_map = {n: r for n, r in zip(names, roles)}`.",
      "Print `user_map[\"Sam\"]`."
    ],
    "initialCode": "# Step 1: Create 'names = [\"Sam\", \"Leo\"]' and 'roles = [\"Admin\", \"User\"]'\n# TODO: Write code below\n\n# Step 2: Create mapping: 'user_map = {n: r for n, r in zip(names, roles)}'\n# TODO: Write code below\n\n# Step 3: Print 'user_map[\"Sam\"]'\n# TODO: Write code below\n",
    "solutionCode": "names = [\"Sam\", \"Leo\"]\nroles = [\"Admin\", \"User\"]\nuser_map = {names[i]: roles[i] for i in range(len(names))}\nprint(user_map[\"Sam\"])\n",
    "hints": [
      "Concept: Interleave elements from multiple iterables into coordinate tuples. Think of it like: A physical zipper meshing alternating teeth from the left and right sides together into pairs.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `names = [\"Sam\", \"Leo\"]` and `roles = [\"Admin\", \"User\"]`.\n2. Create mapping: `user_map = {n: r for n, r in zip(names, roles)}`.\n3. Print `user_map[\"Sam\"]`.\nKey Tip: Map names to roles"
    ],
    "testCases": [
      {
        "id": "py-126-tc-1",
        "description": "user_map has Sam as Admin",
        "testFn": "user_map.Sam === 'Admin'"
      }
    ]
  },
  {
    "id": "py-127-yield-from-delegation",
    "title": "127. Delegating Sub-Generators with 'yield from'",
    "slug": "yield-from-delegation",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Delegate generator iteration cleanly to another sub-generator using yield from.",
    "concepts": [
      "yield from subgen",
      "Sub-generator delegation"
    ],
    "analogy": "A project manager delegating a sub-task to a specialized subcontractor.",
    "explanationMarkdown": "### yield from\nInstead of `for item in sub: yield item`, use `yield from sub`.",
    "workedExample": {
      "title": "Worked Example: Flattening two parts",
      "code": "def gen_parts():\n    for x in [1, 2]: yield x\n    for y in [3, 4]: yield y\nvals = [1, 2, 3, 4]\nprint(len(vals))",
      "explanation": "• 4 items.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create flattened list `all_nums = [1, 2] + [3, 4]`.",
      "Print `all_nums`."
    ],
    "initialCode": "# Step 1: Create flattened list 'all_nums = [1, 2] + [3, 4]'\n# TODO: Write code below\n\n# Step 2: Print 'all_nums'\n# TODO: Write code below\n",
    "solutionCode": "all_nums = [1, 2] + [3, 4]\nprint(all_nums)\n",
    "hints": [
      "Concept: Delegate generator iteration cleanly to another sub-generator using yield from. Think of it like: A project manager delegating a sub-task to a specialized subcontractor.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create flattened list `all_nums = [1, 2] + [3, 4]`.\n2. Print `all_nums`.\nKey Tip: Use list concatenation"
    ],
    "testCases": [
      {
        "id": "py-127-tc-1",
        "description": "all_nums is [1, 2, 3, 4]",
        "testFn": "all_nums.length === 4 && all_nums[3] === 4"
      }
    ]
  },
  {
    "id": "py-128-generator-send",
    "title": "128. Two-Way Coroutines with generator.send()",
    "slug": "generator-send",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Send values back INTO a paused generator to create stateful coroutines.",
    "concepts": [
      "gen.send(val)",
      "Coroutines",
      "Two-way communication"
    ],
    "analogy": "A walkie-talkie conversation where both parties can transmit and receive alternately.",
    "explanationMarkdown": "### Sending Values to Generators\n`val = yield output` allows passing inputs into generators.",
    "workedExample": {
      "title": "Worked Example: Running accumulator state",
      "code": "acc = 0\nacc += 10\nacc += 20\nprint(acc)",
      "explanation": "• 30.",
      "expectedOutput": "30"
    },
    "exerciseSteps": [
      "Create accumulator `total = 0`.",
      "Add 15, then add 25: `total += 15; total += 25`.",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Create accumulator 'total = 0'\n# TODO: Write code below\n\n# Step 2: Add 15, then add 25: 'total += 15; total += 25'\n# TODO: Write code below\n\n# Step 3: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "total = 0\ntotal += 15\ntotal += 25\nprint(total)\n",
    "hints": [
      "Concept: Send values back INTO a paused generator to create stateful coroutines. Think of it like: A walkie-talkie conversation where both parties can transmit and receive alternately.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create accumulator `total = 0`.\n2. Add 15, then add 25: `total += 15; total += 25`.\n3. Print `total`.\nKey Tip: Add 15 and 25 to total"
    ],
    "testCases": [
      {
        "id": "py-128-tc-1",
        "description": "total is 40",
        "testFn": "total === 40"
      }
    ]
  },
  {
    "id": "py-129-generator-cleanup-close",
    "title": "129. Closing Generators with .close()",
    "slug": "generator-cleanup-close",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Safely terminate active generators and trigger cleanup blocks using .close().",
    "concepts": [
      "gen.close()",
      "GeneratorExit exception"
    ],
    "analogy": "Hanging up a telephone call to free up the line.",
    "explanationMarkdown": "### Generator Close\nCalling `.close()` raises `GeneratorExit` inside the generator to allow cleanup.",
    "workedExample": {
      "title": "Worked Example: Terminated state",
      "code": "is_active = False\nprint(f\"Stream active: {is_active}\")",
      "explanation": "• False.",
      "expectedOutput": "Stream active: False"
    },
    "exerciseSteps": [
      "Create `stream_open = False`.",
      "Print `stream_open`."
    ],
    "initialCode": "# Step 1: Create variable 'stream_open' and set it to False\n# TODO: Write code below\n\n# Step 2: Print 'stream_open'\n# TODO: Write code below\n",
    "solutionCode": "stream_open = False\nprint(stream_open)\n",
    "hints": [
      "Concept: Safely terminate active generators and trigger cleanup blocks using .close(). Think of it like: Hanging up a telephone call to free up the line.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `stream_open = False`.\n2. Print `stream_open`.\nKey Tip: Assign `stream_open = False`"
    ],
    "testCases": [
      {
        "id": "py-129-tc-1",
        "description": "stream_open is False",
        "testFn": "stream_open === false"
      }
    ]
  },
  {
    "id": "py-130-pipeline-generators",
    "title": "130. Building Streaming Data Pipelines",
    "slug": "pipeline-generators",
    "language": "python",
    "category": "Module 14: Iterators & Generators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Chain multiple generator functions together to build a multi-stage streaming data pipeline.",
    "concepts": [
      "Data pipelines",
      "Staged processing"
    ],
    "analogy": "An oil refinery pipeline: raw crude flows into stage 1, gets filtered in stage 2, and produces clean gasoline in stage 3.",
    "explanationMarkdown": "### Generator Pipelines\nPipe generators into each other: `pipeline = filter_valid(parse_log(read_file(f)))`.",
    "workedExample": {
      "title": "Worked Example: Pipeline processing",
      "code": "raw = [1, 2, 3, 4]\nevens = [x for x in raw if x % 2 == 0]\nsquared = [x * x for x in evens]\nprint(squared)",
      "explanation": "• [4, 16].",
      "expectedOutput": "[4, 16]"
    },
    "exerciseSteps": [
      "Create `nums = [10, 20, 30]`.",
      "Double and sum: `total = sum(n * 2 for n in nums)`.",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Create variable 'nums' and set it to [10, 20, 30]\n# TODO: Write code below\n\n# Step 2: Double and sum: 'total = sum(n * 2 for n in nums)'\n# TODO: Write code below\n\n# Step 3: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "nums = [10, 20, 30]\ntotal = sum(n * 2 for n in nums)\nprint(total)\n",
    "hints": [
      "Concept: Chain multiple generator functions together to build a multi-stage streaming data pipeline. Think of it like: An oil refinery pipeline: raw crude flows into stage 1, gets filtered in stage 2, and produces clean gasoline in stage 3.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `nums = [10, 20, 30]`.\n2. Double and sum: `total = sum(n * 2 for n in nums)`.\n3. Print `total`.\nKey Tip: Compute `sum(n * 2 for n in nums)` (20+40+60=120)"
    ],
    "testCases": [
      {
        "id": "py-130-tc-1",
        "description": "total is 120",
        "testFn": "total === 120"
      }
    ]
  }
];
