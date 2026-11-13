import { Lesson } from '../../../types';

export const pythonModule6Lessons: Lesson[] = [
  {
    "id": "py-51-def-functions",
    "title": "51. Defining Functions with 'def'",
    "slug": "def-functions",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Package reusable blocks of logic into named functions using def function_name():.",
    "concepts": [
      "def name():",
      "Calling functions with name()"
    ],
    "analogy": "Creating a recipe card: you write down the steps once, and cook it whenever you want.",
    "explanationMarkdown": "### Defining Functions\n```python\ndef say_hello():\n    print(\"Hello from Python!\")\n\nsay_hello() # Invocation\n```",
    "workedExample": {
      "title": "Worked Example: Greeting function",
      "code": "def cheer():\n    print(\"Hooray!\")\ncheer()",
      "explanation": "• Calls cheer() to execute the body.",
      "expectedOutput": "Hooray!"
    },
    "exerciseSteps": [
      "Define `def welcome(): print(\"Welcome!\")`.",
      "Call `welcome()`."
    ],
    "initialCode": "# Step 1: Define 'def welcome(): print(\"Welcome!\")'\ndef welcome():\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call 'welcome()'\n# TODO: Write code below\n",
    "solutionCode": "def welcome():\n    print(\"Welcome!\")\nwelcome()\n",
    "hints": [
      "Concept: Package reusable blocks of logic into named functions using def function_name():. Think of it like: Creating a recipe card: you write down the steps once, and cook it whenever you want.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def welcome(): print(\"Welcome!\")`.\n2. Call `welcome()`.\nKey Tip: Define with `def welcome():`"
    ],
    "testCases": [
      {
        "id": "py-51-tc-1",
        "description": "welcome is a callable function",
        "testFn": "typeof welcome === 'function'"
      }
    ]
  },
  {
    "id": "py-52-function-parameters",
    "title": "52. Passing Arguments to Parameters",
    "slug": "function-parameters",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Accept inputs to make functions dynamic and customizable.",
    "concepts": [
      "Parameters",
      "Arguments"
    ],
    "analogy": "A blender: the recipe takes whatever fruit (argument) you drop in.",
    "explanationMarkdown": "### Function Parameters\n```python\ndef greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Alice\")\n```",
    "workedExample": {
      "title": "Worked Example: Squaring a number",
      "code": "def print_square(n):\n    print(n * n)\nprint_square(4)",
      "explanation": "• 4 * 4 = 16.",
      "expectedOutput": "16"
    },
    "exerciseSteps": [
      "Define `def say_name(name): print(\"I am \" + name)`.",
      "Call `say_name(\"DevForge\")`."
    ],
    "initialCode": "# Step 1: Define 'def say_name(name): print(\"I am \" + name)'\ndef say_name(name):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call 'say_name(\"DevForge\")'\n# TODO: Write code below\n",
    "solutionCode": "def say_name(name):\n    print(\"I am \" + name)\nsay_name(\"DevForge\")\n",
    "hints": [
      "Concept: Accept inputs to make functions dynamic and customizable. Think of it like: A blender: the recipe takes whatever fruit (argument) you drop in.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def say_name(name): print(\"I am \" + name)`.\n2. Call `say_name(\"DevForge\")`.\nKey Tip: Pass `\"DevForge\"` to `say_name`"
    ],
    "testCases": [
      {
        "id": "py-52-tc-1",
        "description": "say_name is defined",
        "testFn": "typeof say_name === 'function'"
      }
    ]
  },
  {
    "id": "py-53-return-statement",
    "title": "53. Returning Results with 'return'",
    "slug": "return-statement",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Send computed values back to the caller using the return keyword.",
    "concepts": [
      "return value",
      "Capturing output"
    ],
    "analogy": "A soda vending machine: you insert coins, and it returns a cold drink into your hands.",
    "explanationMarkdown": "### The return Keyword\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(10, 20) # 30\n```",
    "workedExample": {
      "title": "Worked Example: Doubler function",
      "code": "def double(x):\n    return x * 2\nans = double(15)\nprint(ans)",
      "explanation": "• Returns 30.",
      "expectedOutput": "30"
    },
    "exerciseSteps": [
      "Define `def multiply(a, b): return a * b`.",
      "Compute `total = multiply(6, 7)`.",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Define 'def multiply(a, b): return a * b'\ndef multiply(a, b):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Compute 'total = multiply(6, 7)'\n# TODO: Write code below\n\n# Step 3: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "def multiply(a, b):\n    return a * b\ntotal = multiply(6, 7)\nprint(total)\n",
    "hints": [
      "Concept: Send computed values back to the caller using the return keyword. Think of it like: A soda vending machine: you insert coins, and it returns a cold drink into your hands.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def multiply(a, b): return a * b`.\n2. Compute `total = multiply(6, 7)`.\n3. Print `total`.\nKey Tip: Use `return a * b`"
    ],
    "testCases": [
      {
        "id": "py-53-tc-1",
        "description": "total is 42",
        "testFn": "total === 42"
      }
    ]
  },
  {
    "id": "py-54-default-parameters",
    "title": "54. Default Parameter Values",
    "slug": "default-parameters",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Supply fallback values that apply when arguments are omitted.",
    "concepts": [
      "def fn(param=default):",
      "Optional parameters"
    ],
    "analogy": "Ordering coffee: if you don't specify whole milk vs oat milk, the cafe defaults to whole milk.",
    "explanationMarkdown": "### Default Parameters\n```python\ndef greet(name=\"Friend\"):\n    return f\"Hello, {name}!\"\n\nprint(greet()) # \"Hello, Friend!\"\n```",
    "workedExample": {
      "title": "Worked Example: Power with default exponent",
      "code": "def power(base, exp=2):\n    return base ** exp\nprint(power(5))",
      "explanation": "• 5^2 = 25.",
      "expectedOutput": "25"
    },
    "exerciseSteps": [
      "Define `def greet_user(name=\"Guest\"): return \"Hi, \" + name`.",
      "Call `msg = greet_user()`.",
      "Print `msg`."
    ],
    "initialCode": "# Step 1: Define 'def greet_user(name=\"Guest\"): return \"Hi, \" + name'\ndef greet_user(name=\"Guest\"):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call 'msg = greet_user()'\n# TODO: Write code below\n\n# Step 3: Print 'msg'\n# TODO: Write code below\n",
    "solutionCode": "def greet_user(name=\"Guest\"):\n    return \"Hi, \" + name\nmsg = greet_user()\nprint(msg)\n",
    "hints": [
      "Concept: Supply fallback values that apply when arguments are omitted. Think of it like: Ordering coffee: if you don't specify whole milk vs oat milk, the cafe defaults to whole milk.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def greet_user(name=\"Guest\"): return \"Hi, \" + name`.\n2. Call `msg = greet_user()`.\n3. Print `msg`.\nKey Tip: Set default `name=\"Guest\"`"
    ],
    "testCases": [
      {
        "id": "py-54-tc-1",
        "description": "msg is Hi, Guest",
        "testFn": "msg === 'Hi, Guest'"
      }
    ]
  },
  {
    "id": "py-55-keyword-arguments",
    "title": "55. Keyword Arguments (Named Arguments)",
    "slug": "keyword-arguments",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass arguments by explicit parameter name in any order: fn(key=val).",
    "concepts": [
      "fn(arg=val)",
      "Named argument clarity"
    ],
    "analogy": "Labeling shipping boxes clearly so it doesn't matter which order they get stacked into the truck.",
    "explanationMarkdown": "### Keyword Arguments\n```python\ndef describe_pet(animal, name):\n    return f\"{name} is a {animal}\"\n\nprint(describe_pet(name=\"Rex\", animal=\"Dog\"))\n```",
    "workedExample": {
      "title": "Worked Example: User profile generator",
      "code": "def profile(username, role):\n    return f\"{username}:{role}\"\nprint(profile(role=\"admin\", username=\"sam\"))",
      "explanation": "• Matches arguments by name.",
      "expectedOutput": "sam:admin"
    },
    "exerciseSteps": [
      "Define `def make_tag(tag, text): return f\"<{tag}>{text}</{tag}>\"`.",
      "Call with keyword args: `btn = make_tag(text=\"Click\", tag=\"button\")`.",
      "Print `btn`."
    ],
    "initialCode": "# Step 1: Define 'def make_tag(tag, text): return f\"<{tag}>{text}</{tag}>\"'\ndef make_tag(tag, text):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call with keyword args: 'btn = make_tag(text=\"Click\", tag=\"button\")'\n# TODO: Write code below\n\n# Step 3: Print 'btn'\n# TODO: Write code below\n",
    "solutionCode": "def make_tag(tag, text):\n    return f\"<{tag}>{text}</{tag}>\"\nbtn = make_tag(text=\"Click\", tag=\"button\")\nprint(btn)\n",
    "hints": [
      "Concept: Pass arguments by explicit parameter name in any order: fn(key=val). Think of it like: Labeling shipping boxes clearly so it doesn't matter which order they get stacked into the truck.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def make_tag(tag, text): return f\"<{tag}>{text}</{tag}>\"`.\n2. Call with keyword args: `btn = make_tag(text=\"Click\", tag=\"button\")`.\n3. Print `btn`.\nKey Tip: Pass `text=\"Click\"` and `tag=\"button\"`"
    ],
    "testCases": [
      {
        "id": "py-55-tc-1",
        "description": "btn is <button>Click</button>",
        "testFn": "btn === '<button>Click</button>'"
      }
    ]
  },
  {
    "id": "py-56-variable-scope",
    "title": "56. Local vs Global Variable Scope",
    "slug": "variable-scope",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Understand how variables defined inside functions are isolated from the outside world.",
    "concepts": [
      "Local scope",
      "Global scope"
    ],
    "analogy": "A private notebook inside your backpack (local) versus the whiteboard at the front of the classroom (global).",
    "explanationMarkdown": "### Variable Scope\nVariables created inside a function only exist while that function runs:\n```python\nx = 10 # Global\ndef demo():\n    y = 5 # Local to demo\n```",
    "workedExample": {
      "title": "Worked Example: Reading global variable",
      "code": "multiplier = 3\ndef triple(n):\n    return n * multiplier\nprint(triple(5))",
      "explanation": "• Reads global multiplier (3 * 5 = 15).",
      "expectedOutput": "15"
    },
    "exerciseSteps": [
      "Create global `bonus = 10`.",
      "Define `def calc(base): return base + bonus`.",
      "Assign `payout = calc(50)` and print it."
    ],
    "initialCode": "# Step 1: Create global 'bonus = 10'\n# TODO: Write code below\n\n# Step 2: Define 'def calc(base): return base + bonus'\ndef calc(base):\n    # TODO: Implement function body\n    pass\n\n# Step 3: Assign 'payout = calc(50)' and print it\n# TODO: Write code below\n",
    "solutionCode": "bonus = 10\ndef calc(base):\n    return base + bonus\npayout = calc(50)\nprint(payout)\n",
    "hints": [
      "Concept: Understand how variables defined inside functions are isolated from the outside world. Think of it like: A private notebook inside your backpack (local) versus the whiteboard at the front of the classroom (global).",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Create global `bonus = 10`.\n2. Define `def calc(base): return base + bonus`.\n3. Assign `payout = calc(50)` and print it.\nKey Tip: Add `bonus` to `base` inside calc"
    ],
    "testCases": [
      {
        "id": "py-56-tc-1",
        "description": "payout is 60",
        "testFn": "payout === 60"
      }
    ]
  },
  {
    "id": "py-57-docstrings",
    "title": "57. Documentation with Docstrings (\"\"\"...\"\"\")",
    "slug": "docstrings",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Document your functions using triple-quoted docstrings.",
    "concepts": [
      "\"\"\"Docstring\"\"\"",
      "Function help and documentation"
    ],
    "analogy": "The instruction manual booklet included inside an electronics product box.",
    "explanationMarkdown": "### Docstrings\n```python\ndef square(n):\n    \"\"\"Return the square of a number.\"\"\"\n    return n * n\n```",
    "workedExample": {
      "title": "Worked Example: Documented function",
      "code": "def area(w, h):\n    \"\"\"Calculates rectangle area.\"\"\"\n    return w * h\nprint(area(3, 4))",
      "explanation": "• 3 * 4 = 12.",
      "expectedOutput": "12"
    },
    "exerciseSteps": [
      "Define function with docstring: `def add(a, b): \"\"\"Adds numbers.\"\"\" return a + b`.",
      "Call `res = add(10, 5)` and print `res`."
    ],
    "initialCode": "# Step 1: Define function with docstring: 'def add(a, b): \"\"\"Adds numbers.\"\"\" return a + b'\ndef add(a, b):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call 'res = add(10, 5)' and print 'res'\n# TODO: Write code below\n",
    "solutionCode": "def add(a, b):\n    \"\"\"Adds numbers.\"\"\"\n    return a + b\nres = add(10, 5)\nprint(res)\n",
    "hints": [
      "Concept: Document your functions using triple-quoted docstrings. Think of it like: The instruction manual booklet included inside an electronics product box.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define function with docstring: `def add(a, b): \"\"\"Adds numbers.\"\"\" return a + b`.\n2. Call `res = add(10, 5)` and print `res`.\nKey Tip: Use triple quotes for docstrings"
    ],
    "testCases": [
      {
        "id": "py-57-tc-1",
        "description": "res is 15",
        "testFn": "res === 15"
      }
    ]
  },
  {
    "id": "py-58-lambda-functions",
    "title": "58. Anonymous One-Liners with 'lambda'",
    "slug": "lambda-functions",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Construct small, disposable inline functions using the lambda keyword: lambda x: x * 2.",
    "concepts": [
      "lambda args: expression",
      "Anonymous functions"
    ],
    "analogy": "A disposable sticky note for a quick note, rather than a bound textbook.",
    "explanationMarkdown": "### Python Lambdas\n```python\ndouble = lambda x: x * 2\nprint(double(5)) # 10\n```",
    "workedExample": {
      "title": "Worked Example: Lambda adder",
      "code": "add = lambda a, b: a + b\nprint(add(3, 4))",
      "explanation": "• Returns 7.",
      "expectedOutput": "7"
    },
    "exerciseSteps": [
      "Define `square = lambda x: x ** 2`.",
      "Compute `val = square(6)`.",
      "Print `val`."
    ],
    "initialCode": "# Step 1: Define 'square = lambda x: x ** 2'\n# TODO: Write code below\n\n# Step 2: Compute 'val = square(6)'\n# TODO: Write code below\n\n# Step 3: Print 'val'\n# TODO: Write code below\n",
    "solutionCode": "square = lambda x: x ** 2\nval = square(6)\nprint(val)\n",
    "hints": [
      "Concept: Construct small, disposable inline functions using the lambda keyword: lambda x: x * 2. Think of it like: A disposable sticky note for a quick note, rather than a bound textbook.",
      "Syntax Blueprint: Anonymous lambda function syntax: `lambda arg1, arg2: expression`.",
      "Step-by-Step Target:\n1. Define `square = lambda x: x ** 2`.\n2. Compute `val = square(6)`.\n3. Print `val`.\nKey Tip: Use `lambda x: x ** 2`"
    ],
    "testCases": [
      {
        "id": "py-58-tc-1",
        "description": "val is 36",
        "testFn": "val === 36"
      }
    ]
  },
  {
    "id": "py-59-returning-tuples",
    "title": "59. Returning Multiple Values (Tuple Packaging)",
    "slug": "returning-multiple-values",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Return two or more results from a function separated by commas.",
    "concepts": [
      "return a, b",
      "Multiple return values",
      "Tuple unpacking"
    ],
    "analogy": "A fast food combo meal: one order returns both a burger and fries in the same bag.",
    "explanationMarkdown": "### Multiple Returns\n```python\ndef min_max(a, b):\n    return min(a, b), max(a, b)\n\nlow, high = min_max(10, 50)\n```",
    "workedExample": {
      "title": "Worked Example: Coordinates",
      "code": "def get_coords():\n    return 100, 200\nx, y = get_coords()\nprint(f\"{x},{y}\")",
      "explanation": "• Unpacks 100 into x and 200 into y.",
      "expectedOutput": "100,200"
    },
    "exerciseSteps": [
      "Define `def get_stats(): return 10, 20`.",
      "Unpack `score, rank = get_stats()`.",
      "Print `score`."
    ],
    "initialCode": "# Step 1: Define 'def get_stats(): return 10, 20'\ndef get_stats():\n    # TODO: Implement function body\n    pass\n\n# Step 2: Unpack 'score, rank = get_stats()'\n# TODO: Write code below\n\n# Step 3: Print 'score'\n# TODO: Write code below\n",
    "solutionCode": "def get_stats():\n    return 10, 20\nscore, rank = get_stats()\nprint(score)\n",
    "hints": [
      "Concept: Return two or more results from a function separated by commas. Think of it like: A fast food combo meal: one order returns both a burger and fries in the same bag.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def get_stats(): return 10, 20`.\n2. Unpack `score, rank = get_stats()`.\n3. Print `score`.\nKey Tip: Return `10, 20`"
    ],
    "testCases": [
      {
        "id": "py-59-tc-1",
        "description": "score is 10 and rank is 20",
        "testFn": "score === 10 && rank === 20"
      }
    ]
  },
  {
    "id": "py-60-callbacks-higher-order",
    "title": "60. Passing Functions as Arguments (Higher-Order)",
    "slug": "callbacks-higher-order",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Pass functions into other functions as first-class citizens.",
    "concepts": [
      "Higher-order functions",
      "First-class functions"
    ],
    "analogy": "Handing an instruction sheet to an assistant: 'Execute this procedure on whatever package arrives.'",
    "explanationMarkdown": "### First-Class Functions\nFunctions can be passed just like numbers or strings:\n```python\ndef apply(func, value):\n    return func(value)\n\nprint(apply(abs, -10)) # 10\n```",
    "workedExample": {
      "title": "Worked Example: Custom transformer",
      "code": "def transform(fn, x):\n    return fn(x)\nans = transform(lambda n: n * 3, 5)\nprint(ans)",
      "explanation": "• Multiplies 5 by 3 to get 15.",
      "expectedOutput": "15"
    },
    "exerciseSteps": [
      "Define `def run_fn(fn, val): return fn(val)`.",
      "Pass a doubler: `res = run_fn(lambda x: x * 2, 8)`.",
      "Print `res`."
    ],
    "initialCode": "# Step 1: Define 'def run_fn(fn, val): return fn(val)'\n# TODO: Write code below\n\n# Step 2: Pass a doubler: 'res = run_fn(lambda x: x * 2, 8)'\n# TODO: Write code below\n\n# Step 3: Print 'res'\n# TODO: Write code below\n",
    "solutionCode": "def run_fn(fn, val):\n    return fn(val)\nres = run_fn(lambda x: x * 2, 8)\nprint(res)\n",
    "hints": [
      "Concept: Pass functions into other functions as first-class citizens. Think of it like: Handing an instruction sheet to an assistant: 'Execute this procedure on whatever package arrives.'",
      "Syntax Blueprint: Anonymous lambda function syntax: `lambda arg1, arg2: expression`.",
      "Step-by-Step Target:\n1. Define `def run_fn(fn, val): return fn(val)`.\n2. Pass a doubler: `res = run_fn(lambda x: x * 2, 8)`.\n3. Print `res`.\nKey Tip: Use `fn(val)` inside run_fn"
    ],
    "testCases": [
      {
        "id": "py-60-tc-1",
        "description": "res is 16",
        "testFn": "res === 16"
      }
    ]
  },
  {
    "id": "py-61-pure-functions",
    "title": "61. Pure Functions vs Side Effects",
    "slug": "pure-functions",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Write deterministic pure functions that only depend on arguments and avoid external mutations.",
    "concepts": [
      "Pure functions",
      "Deterministic output",
      "Side effects"
    ],
    "analogy": "A pocket calculator: pressing 5 + 5 always outputs 10 and never changes your bank account.",
    "explanationMarkdown": "### Pure Functions\nA pure function given the same inputs always returns the exact same output without altering external state:\n```python\n# Pure\ndef add(a, b): return a + b\n```",
    "workedExample": {
      "title": "Worked Example: Pure Area",
      "code": "def circle_area(r): return 3.14 * r * r\nprint(circle_area(2))",
      "explanation": "• Returns 12.56 without side effects.",
      "expectedOutput": "12.56"
    },
    "exerciseSteps": [
      "Write a pure function `def get_full_name(f, l): return f + \" \" + l`.",
      "Call `name = get_full_name(\"Guido\", \"Rossum\")`.",
      "Print `name`."
    ],
    "initialCode": "# Step 1: Write a pure function 'def get_full_name(f, l): return f + \" \" + l'\ndef get_full_name(f, l):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call 'name = get_full_name(\"Guido\", \"Rossum\")'\n# TODO: Write code below\n\n# Step 3: Print 'name'\n# TODO: Write code below\n",
    "solutionCode": "def get_full_name(f, l):\n    return f + \" \" + l\nname = get_full_name(\"Guido\", \"Rossum\")\nprint(name)\n",
    "hints": [
      "Concept: Write deterministic pure functions that only depend on arguments and avoid external mutations. Think of it like: A pocket calculator: pressing 5 + 5 always outputs 10 and never changes your bank account.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Write a pure function `def get_full_name(f, l): return f + \" \" + l`.\n2. Call `name = get_full_name(\"Guido\", \"Rossum\")`.\n3. Print `name`.\nKey Tip: Return `f + \" \" + l`"
    ],
    "testCases": [
      {
        "id": "py-61-tc-1",
        "description": "name is Guido Rossum",
        "testFn": "name === 'Guido Rossum'"
      }
    ]
  },
  {
    "id": "py-62-recursion-basics",
    "title": "62. Self-Referencing Logic: Recursion Basics",
    "slug": "recursion-basics",
    "language": "python",
    "category": "Module 6: Functions & Modular Code",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Solve problems by having a function call itself with a terminating base case.",
    "concepts": [
      "Base case",
      "Recursive case",
      "Stack frame"
    ],
    "analogy": "Russian nesting Matryoshka dolls: opening one doll reveals a smaller doll until you reach the solid baby doll at the center.",
    "explanationMarkdown": "### Recursion\nAlways establish a **base case** first to avoid infinite recursion:\n```python\ndef countdown(n):\n    if n <= 0:\n        return \"Liftoff!\"\n    return countdown(n - 1)\n```",
    "workedExample": {
      "title": "Worked Example: Recursive factorial",
      "code": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(4))",
      "explanation": "• 4 * 3 * 2 * 1 = 24.",
      "expectedOutput": "24"
    },
    "exerciseSteps": [
      "Define `def sum_to_zero(n): if n <= 0: return 0; return n + sum_to_zero(n - 1)`.",
      "Calculate `total = sum_to_zero(3)` (3 + 2 + 1 + 0 = 6).",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Define 'def sum_to_zero(n): if n <= 0: return 0; return n + sum_to_zero(n - 1)'\ndef sum_to_zero(n):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Calculate 'total = sum_to_zero(3)' (3 + 2 + 1 + 0 = 6)\n# TODO: Write code below\n\n# Step 3: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "def sum_to_zero(n):\n    if n <= 0:\n        return 0\n    return n + sum_to_zero(n - 1)\ntotal = sum_to_zero(3)\nprint(total)\n",
    "hints": [
      "Concept: Solve problems by having a function call itself with a terminating base case. Think of it like: Russian nesting Matryoshka dolls: opening one doll reveals a smaller doll until you reach the solid baby doll at the center.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def sum_to_zero(n): if n <= 0: return 0; return n + sum_to_zero(n - 1)`.\n2. Calculate `total = sum_to_zero(3)` (3 + 2 + 1 + 0 = 6).\n3. Print `total`.\nKey Tip: Base case: `if n <= 0: return 0`"
    ],
    "testCases": [
      {
        "id": "py-62-tc-1",
        "description": "total is 6",
        "testFn": "total === 6"
      }
    ]
  }
];
