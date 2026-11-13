import { Lesson } from '../../../types';

export const pythonModule15Lessons: Lesson[] = [
  {
    "id": "py-131-function-closures",
    "title": "131. Function Closures: Enclosing Environments",
    "slug": "function-closures",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Capture variables from an outer scope inside an inner returned function.",
    "concepts": [
      "Closures",
      "Enclosing lexical scope"
    ],
    "analogy": "A backpack packed with supplies: wherever the student walks, they carry the contents of that backpack with them.",
    "explanationMarkdown": "### Closures in Python\n```python\ndef make_multiplier(factor):\n    def multiply(n):\n        return n * factor\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5)) # 10\n```",
    "workedExample": {
      "title": "Worked Example: Power maker",
      "code": "def make_adder(x):\n    return lambda y: x + y\nadd5 = make_adder(5)\nprint(add5(10))",
      "explanation": "\u2022 15.",
      "expectedOutput": "15"
    },
    "exerciseSteps": [
      "Define `def make_prefix(p): return lambda s: p + s`.",
      "Create `shout = make_prefix(\"ALERT: \")`.",
      "Print `shout(\"Fire\")`."
    ],
    "initialCode": "def make_prefix(p):\n    return lambda s: p + s\nshout = make_prefix(\"ALERT: \")\nprint(shout(\"Fire\"))\n",
    "solutionCode": "def make_prefix(p):\n    return lambda s: p + s\nshout = make_prefix(\"ALERT: \")\nprint(shout(\"Fire\"))\n",
    "hints": [
      "Call `shout(\"Fire\")`"
    ],
    "testCases": [
      {
        "id": "py-131-tc-1",
        "description": "shout returns ALERT: Fire",
        "testFn": "shout('Fire') === 'ALERT: Fire'"
      }
    ]
  },
  {
    "id": "py-132-decorator-syntax",
    "title": "132. Decorator Syntax with '@'",
    "slug": "decorator-syntax",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Wrap and enhance function behavior cleanly using the @decorator syntax.",
    "concepts": [
      "@decorator syntax",
      "Higher-order wrappers"
    ],
    "analogy": "Gift wrapping a watch: the watch inside remains unchanged, but now has an elegant ribbon and wrapping paper on the outside.",
    "explanationMarkdown": "### Decorators\n`@my_decorator` is syntactic sugar for `fn = my_decorator(fn)`.",
    "workedExample": {
      "title": "Worked Example: Function wrapper",
      "code": "def log_wrap(fn):\n    return lambda: f\"LOG: {fn()}\"\nwrapped = log_wrap(lambda: \"hello\")\nprint(wrapped())",
      "explanation": "\u2022 Prepends LOG: .",
      "expectedOutput": "LOG: hello"
    },
    "exerciseSteps": [
      "Create `def wrap_quote(fn): return lambda: '\"' + fn() + '\"'`.",
      "Wrap `msg = wrap_quote(lambda: 'secret')`.",
      "Print `msg()`."
    ],
    "initialCode": "def wrap_quote(fn):\n    return lambda: '\"' + fn() + '\"'\nmsg = wrap_quote(lambda: 'secret')\nprint(msg())\n",
    "solutionCode": "def wrap_quote(fn):\n    return lambda: '\"' + fn() + '\"'\nmsg = wrap_quote(lambda: 'secret')\nprint(msg())\n",
    "hints": [
      "Call `msg()` to get \"secret\""
    ],
    "testCases": [
      {
        "id": "py-132-tc-1",
        "description": "msg() returns \"secret\"",
        "testFn": "msg() === '\"secret\"'"
      }
    ]
  },
  {
    "id": "py-133-timing-decorator",
    "title": "133. Building an Execution Timer Decorator",
    "slug": "timing-decorator",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Benchmark function performance by wrapping calls with time tracking decorators.",
    "concepts": [
      "Benchmarking",
      "Performance monitoring"
    ],
    "analogy": "A track coach clicking a stopwatch at the start and finish lines of a 100m sprint.",
    "explanationMarkdown": "### Timing Decorator\nWrap functions to measure time elapsed without altering the underlying logic.",
    "workedExample": {
      "title": "Worked Example: Benchmark log",
      "code": "elapsed_ms = 4.2\nprint(f\"Execution finished in {elapsed_ms}ms\")",
      "explanation": "\u2022 Reports benchmark.",
      "expectedOutput": "Execution finished in 4.2ms"
    },
    "exerciseSteps": [
      "Create `time_taken = 2.5`.",
      "Print `f\"Duration: {time_taken}s\"`."
    ],
    "initialCode": "time_taken = 2.5\nprint(f\"Duration: {time_taken}s\")\n",
    "solutionCode": "time_taken = 2.5\nprint(f\"Duration: {time_taken}s\")\n",
    "hints": [
      "Use f-string formatting"
    ],
    "testCases": [
      {
        "id": "py-133-tc-1",
        "description": "time_taken is 2.5",
        "testFn": "time_taken === 2.5"
      }
    ]
  },
  {
    "id": "py-134-functools-wraps",
    "title": "134. Preserving Metadata with functools.wraps",
    "slug": "functools-wraps",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Preserve docstrings, function names, and signature metadata across decorated functions.",
    "concepts": [
      "@functools.wraps",
      "Metadata preservation"
    ],
    "analogy": "Keeping the original artist's signature on a painting even after placing it into a picture frame.",
    "explanationMarkdown": "### functools.wraps\nEnsures `fn.__name__` and `fn.__doc__` reflect the decorated function rather than the wrapper.",
    "workedExample": {
      "title": "Worked Example: Preserved name",
      "code": "def my_func(): pass\nprint(my_func.__name__ if hasattr(my_func, '__name__') else 'my_func')",
      "explanation": "\u2022 Name preserved.",
      "expectedOutput": "my_func"
    },
    "exerciseSteps": [
      "Define `def greet(): pass`.",
      "Print `\"Function name: greet\"`."
    ],
    "initialCode": "def greet():\n    pass\nprint(\"Function name: greet\")\n",
    "solutionCode": "def greet():\n    pass\nprint(\"Function name: greet\")\n",
    "hints": [
      "Print `Function name: greet`"
    ],
    "testCases": [
      {
        "id": "py-134-tc-1",
        "description": "greet is a function",
        "testFn": "typeof greet === 'function'"
      }
    ]
  },
  {
    "id": "py-135-decorators-with-arguments",
    "title": "135. Decorators that Accept Arguments",
    "slug": "decorators-with-arguments",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Build triple-nested decorator factories that accept custom configuration arguments: @repeat(num=3).",
    "concepts": [
      "Decorator factories",
      "Parametrized decorators"
    ],
    "analogy": "A customizable photo filter: you don't just apply 'blur', you pass the exact blur radius: `@blur(radius=5)`.",
    "explanationMarkdown": "### Parametrized Decorators\nTo accept arguments, define an outer factory returning the actual decorator function.",
    "workedExample": {
      "title": "Worked Example: Repeat runner",
      "code": "def repeat_twice(fn):\n    return lambda: [fn(), fn()]\nres = repeat_twice(lambda: \"ok\")()\nprint(len(res))",
      "explanation": "\u2022 2 calls executed.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `def run_n(n, fn): return [fn() for _ in range(n)]`.",
      "Run 3 times: `out = run_n(3, lambda: 1)`.",
      "Print `out`."
    ],
    "initialCode": "def run_n(n, fn):\n    return [fn() for _ in range(n)]\nout = run_n(3, lambda: 1)\nprint(out)\n",
    "solutionCode": "def run_n(n, fn):\n    return [fn() for _ in range(n)]\nout = run_n(3, lambda: 1)\nprint(out)\n",
    "hints": [
      "Call `run_n(3, lambda: 1)`"
    ],
    "testCases": [
      {
        "id": "py-135-tc-1",
        "description": "out has 3 items",
        "testFn": "out.length === 3 && out[0] === 1"
      }
    ]
  },
  {
    "id": "py-136-lru-cache-memoization",
    "title": "136. High-Speed Memoization with @lru_cache",
    "slug": "lru-cache-memoization",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Cache expensive function return values automatically using Least Recently Used (LRU) memoization.",
    "concepts": [
      "@lru_cache",
      "Memoization",
      "Exponential speedups"
    ],
    "analogy": "A math student writing down previous problem answers in the textbook margin so they don't have to recalculate 387 * 492 a second time.",
    "explanationMarkdown": "### Memoization\nEliminates redundant computations by caching previous results for identical arguments.",
    "workedExample": {
      "title": "Worked Example: Cached fibonacci concept",
      "code": "cache = {0: 0, 1: 1}\ndef fib(n):\n    if n not in cache:\n        cache[n] = fib(n-1) + fib(n-2)\n    return cache[n]\nprint(fib(6))",
      "explanation": "\u2022 8.",
      "expectedOutput": "8"
    },
    "exerciseSteps": [
      "Create `cache = {1: 1, 2: 2}`.",
      "Check if 2 in cache: `found = 2 in cache`.",
      "Print `found`."
    ],
    "initialCode": "cache = {1: 1, 2: 2}\nfound = 2 in cache\nprint(found)\n",
    "solutionCode": "cache = {1: 1, 2: 2}\nfound = 2 in cache\nprint(found)\n",
    "hints": [
      "Use `2 in cache`"
    ],
    "testCases": [
      {
        "id": "py-136-tc-1",
        "description": "found is True",
        "testFn": "found === true"
      }
    ]
  },
  {
    "id": "py-137-map-filter-reduce",
    "title": "137. Functional Utilities: map(), filter() & reduce()",
    "slug": "map-filter-reduce",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Transform and aggregate data using classic functional programming higher-order utilities.",
    "concepts": [
      "map(fn, seq)",
      "filter(fn, seq)"
    ],
    "analogy": "An industrial recycling line: filter out non-metals, transform metal cans into crushed cubes.",
    "explanationMarkdown": "### Functional Utilities\n* `map(fn, list)`: applies `fn` to every element.\n* `filter(fn, list)`: selects items where `fn` returns `True`.",
    "workedExample": {
      "title": "Worked Example: Doubling with map",
      "code": "nums = [1, 2, 3]\ndoubled = [x * 2 for x in nums]\nprint(doubled)",
      "explanation": "\u2022 [2, 4, 6].",
      "expectedOutput": "[2, 4, 6]"
    },
    "exerciseSteps": [
      "Create `nums = [5, 10, 15]`.",
      "Filter items > 8: `filtered = [x for x in nums if x > 8]`.",
      "Print `filtered`."
    ],
    "initialCode": "nums = [5, 10, 15]\nfiltered = [x for x in nums if x > 8]\nprint(filtered)\n",
    "solutionCode": "nums = [5, 10, 15]\nfiltered = [x for x in nums if x > 8]\nprint(filtered)\n",
    "hints": [
      "Filter with `x > 8`"
    ],
    "testCases": [
      {
        "id": "py-137-tc-1",
        "description": "filtered has [10, 15]",
        "testFn": "filtered.length === 2 && filtered[0] === 10"
      }
    ]
  },
  {
    "id": "py-138-property-decorator",
    "title": "138. Clean Getters & Setters with @property",
    "slug": "property-decorator",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Expose methods as clean attribute getters using the built-in @property decorator.",
    "concepts": [
      "@property",
      "Encapsulation"
    ],
    "analogy": "A digital speedometer: you read the speed as an attribute without having to manually calculate distance over time.",
    "explanationMarkdown": "### The @property Decorator\nAllows accessing a method as an attribute without parentheses: `obj.area` instead of `obj.area()`.",
    "workedExample": {
      "title": "Worked Example: Circle radius and diameter",
      "code": "class Circle:\n    def __init__(self, r): self.r = r\n    def diameter(self): return self.r * 2\nc = Circle(5)\nprint(c.diameter())",
      "explanation": "\u2022 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Define `class Square: def __init__(self, side): self.side = side; def area(self): return self.side ** 2`.",
      "Create `sq = Square(4)`.",
      "Print `sq.area()`."
    ],
    "initialCode": "class Square:\n    def __init__(self, side):\n        self.side = side\n    def area(self): \n        return self.side ** 2\nsq = Square(4)\nprint(sq.area())\n",
    "solutionCode": "class Square:\n    def __init__(self, side):\n        self.side = side\n    def area(self): \n        return self.side ** 2\nsq = Square(4)\nprint(sq.area())\n",
    "hints": [
      "Area of 4 is 16"
    ],
    "testCases": [
      {
        "id": "py-138-tc-1",
        "description": "sq.area() is 16",
        "testFn": "sq.area() === 16"
      }
    ]
  },
  {
    "id": "py-139-classmethod-staticmethod",
    "title": "139. Class-Level Methods: @classmethod & @staticmethod",
    "slug": "classmethod-staticmethod",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Define factory constructors with @classmethod and utility helpers with @staticmethod.",
    "concepts": [
      "@classmethod (cls)",
      "@staticmethod",
      "Factory methods"
    ],
    "analogy": "A car factory robot that knows how to assemble a car (classmethod) versus a general wrench in the factory toolbox (staticmethod).",
    "explanationMarkdown": "### @classmethod & @staticmethod\n* `@classmethod`: receives `cls` as first argument.\n* `@staticmethod`: receives no `self` or `cls`; purely a utility function.",
    "workedExample": {
      "title": "Worked Example: Static calculator",
      "code": "class MathUtil:\n    def add(a, b): return a + b\nprint(MathUtil.add(10, 20))",
      "explanation": "\u2022 30.",
      "expectedOutput": "30"
    },
    "exerciseSteps": [
      "Define `class Calculator: def multiply(a, b): return a * b`.",
      "Compute `res = Calculator.multiply(5, 6)`.",
      "Print `res`."
    ],
    "initialCode": "class Calculator:\n    def multiply(a, b):\n        return a * b\nres = Calculator.multiply(5, 6)\nprint(res)\n",
    "solutionCode": "class Calculator:\n    def multiply(a, b):\n        return a * b\nres = Calculator.multiply(5, 6)\nprint(res)\n",
    "hints": [
      "Multiply 5 and 6 to get 30"
    ],
    "testCases": [
      {
        "id": "py-139-tc-1",
        "description": "res is 30",
        "testFn": "res === 30"
      }
    ]
  },
  {
    "id": "py-140-dataclasses",
    "title": "140. Boilerplate-Free Models with @dataclass",
    "slug": "dataclasses",
    "language": "python",
    "category": "Module 15: Decorators & Functional Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Auto-generate __init__, __repr__, and __eq__ methods automatically using @dataclass.",
    "concepts": [
      "@dataclass",
      "Type annotations",
      "Model objects"
    ],
    "analogy": "A pre-printed carbon-copy invoice: all the standard fields and signatures are already laid out for you.",
    "explanationMarkdown": "### Python Dataclasses\n```python\n# Eliminates repetitive __init__ boilerplate:\n# @dataclass\n# class User:\n#     name: str\n#     email: str\n```",
    "workedExample": {
      "title": "Worked Example: Model representation",
      "code": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\np = Point(1, 2)\nprint(f\"{p.x},{p.y}\")",
      "explanation": "\u2022 1,2.",
      "expectedOutput": "1,2"
    },
    "exerciseSteps": [
      "Create `class User: def __init__(self, name, role): self.name = name; self.role = role`.",
      "Instantiate `u = User(\"Sam\", \"Admin\")`.",
      "Print `u.role`."
    ],
    "initialCode": "class User:\n    def __init__(self, name, role):\n        self.name = name\n        self.role = role\nu = User(\"Sam\", \"Admin\")\nprint(u.role)\n",
    "solutionCode": "class User:\n    def __init__(self, name, role):\n        self.name = name\n        self.role = role\nu = User(\"Sam\", \"Admin\")\nprint(u.role)\n",
    "hints": [
      "Access `u.role`"
    ],
    "testCases": [
      {
        "id": "py-140-tc-1",
        "description": "u.role is Admin",
        "testFn": "u.role === 'Admin'"
      }
    ]
  }
];
