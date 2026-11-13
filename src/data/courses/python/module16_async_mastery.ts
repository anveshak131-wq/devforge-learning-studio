import { Lesson } from '../../../types';

export const pythonModule16Lessons: Lesson[] = [
  {
    "id": "py-141-async-def-basics",
    "title": "141. Asynchronous Functions with 'async def'",
    "slug": "async-def-basics",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Declare asynchronous coroutines that run concurrently using async def.",
    "concepts": [
      "async def coroutine():",
      "Non-blocking execution"
    ],
    "analogy": "A restaurant chef boiling water for pasta while chopping vegetables, rather than staring at the pot for 10 minutes.",
    "explanationMarkdown": "### Asynchronous Python\nPrefixing a function with `async def` marks it as a non-blocking coroutine.",
    "workedExample": {
      "title": "Worked Example: Coroutine declaration",
      "code": "status = \"async_ready\"\nprint(status)",
      "explanation": "• Confirms async.",
      "expectedOutput": "async_ready"
    },
    "exerciseSteps": [
      "Create `async_state = \"active\"`.",
      "Print `async_state`."
    ],
    "initialCode": "# Step 1: Create variable 'async_state' and set it to \"active\"\n# TODO: Write code below\n\n# Step 2: Print 'async_state'\n# TODO: Write code below\n",
    "solutionCode": "async_state = \"active\"\nprint(async_state)\n",
    "hints": [
      "Concept: Declare asynchronous coroutines that run concurrently using async def. Think of it like: A restaurant chef boiling water for pasta while chopping vegetables, rather than staring at the pot for 10 minutes.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `async_state = \"active\"`.\n2. Print `async_state`.\nKey Tip: Assign `async_state = \"active\"`"
    ],
    "testCases": [
      {
        "id": "py-141-tc-1",
        "description": "async_state is active",
        "testFn": "async_state === 'active'"
      }
    ]
  },
  {
    "id": "py-142-await-coroutine",
    "title": "142. Awaiting Non-Blocking I/O with 'await'",
    "slug": "await-coroutine",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Pause coroutine execution cleanly until an asynchronous I/O operation finishes.",
    "concepts": [
      "await operation()",
      "Cooperative multitasking"
    ],
    "analogy": "Waiting for an elevator: you step aside and let other people walk down the hallway until the doors open.",
    "explanationMarkdown": "### The await Keyword\nInside an `async def` function, `await` yields control back to the event loop.",
    "workedExample": {
      "title": "Worked Example: Sequential steps",
      "code": "step1 = \"loaded\"\nstep2 = \"processed\"\nprint(f\"{step1} -> {step2}\")",
      "explanation": "• Sequential async flow.",
      "expectedOutput": "loaded -> processed"
    },
    "exerciseSteps": [
      "Create `result = \"success\"`.",
      "Print `result`."
    ],
    "initialCode": "# Step 1: Create variable 'result' and set it to \"success\"\n# TODO: Write code below\n\n# Step 2: Print 'result'\n# TODO: Write code below\n",
    "solutionCode": "result = \"success\"\nprint(result)\n",
    "hints": [
      "Concept: Pause coroutine execution cleanly until an asynchronous I/O operation finishes. Think of it like: Waiting for an elevator: you step aside and let other people walk down the hallway until the doors open.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `result = \"success\"`.\n2. Print `result`.\nKey Tip: Print `result`"
    ],
    "testCases": [
      {
        "id": "py-142-tc-1",
        "description": "result is success",
        "testFn": "result === 'success'"
      }
    ]
  },
  {
    "id": "py-143-asyncio-gather",
    "title": "143. Concurrent Tasks with asyncio.gather()",
    "slug": "asyncio-gather",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Run multiple asynchronous tasks concurrently and aggregate all their return values.",
    "concepts": [
      "asyncio.gather(*tasks)",
      "Parallel network requests"
    ],
    "analogy": "Sending 5 letters in the mail simultaneously: they travel concurrently instead of waiting for the first letter to arrive before sending the second.",
    "explanationMarkdown": "### asyncio.gather\n`await asyncio.gather(task1(), task2())` fires both operations in parallel.",
    "workedExample": {
      "title": "Worked Example: Aggregate results",
      "code": "task_results = [10, 20, 30]\ntotal = sum(task_results)\nprint(total)",
      "explanation": "• 60.",
      "expectedOutput": "60"
    },
    "exerciseSteps": [
      "Create `task_outputs = [100, 200]`.",
      "Compute `total = sum(task_outputs)`.",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Create variable 'task_outputs' and set it to [100, 200]\n# TODO: Write code below\n\n# Step 2: Compute 'total = sum(task_outputs)'\n# TODO: Write code below\n\n# Step 3: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "task_outputs = [100, 200]\ntotal = sum(task_outputs)\nprint(total)\n",
    "hints": [
      "Concept: Run multiple asynchronous tasks concurrently and aggregate all their return values. Think of it like: Sending 5 letters in the mail simultaneously: they travel concurrently instead of waiting for the first letter to arrive before sending the second.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `task_outputs = [100, 200]`.\n2. Compute `total = sum(task_outputs)`.\n3. Print `total`.\nKey Tip: Total of 100 and 200 is 300"
    ],
    "testCases": [
      {
        "id": "py-143-tc-1",
        "description": "total is 300",
        "testFn": "total === 300"
      }
    ]
  },
  {
    "id": "py-144-regex-re-module",
    "title": "144. Regular Expressions: Pattern Matching with 're'",
    "slug": "regex-re-module",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Search, validate, and extract string patterns using regular expressions.",
    "concepts": [
      "re.search()",
      "re.findall()",
      "Regex patterns"
    ],
    "analogy": "A metal detector set to beep only when it detects gold rings on a beach.",
    "explanationMarkdown": "### Regular Expressions\nValidate patterns like email addresses, phone numbers, and dates.",
    "workedExample": {
      "title": "Worked Example: Digit check",
      "code": "text = \"User123\"\nhas_digit = any(c.isdigit() for c in text)\nprint(has_digit)",
      "explanation": "• True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `code = \"DEV-99\"`.",
      "Check if starts with \"DEV\": `is_dev = code.startswith(\"DEV\")`.",
      "Print `is_dev`."
    ],
    "initialCode": "# Step 1: Create variable 'code' and set it to \"DEV-99\"\n# TODO: Write code below\n\n# Step 2: Check if starts with \"DEV\": 'is_dev = code.startswith(\"DEV\")'\n# TODO: Write code below\n\n# Step 3: Print 'is_dev'\n# TODO: Write code below\n",
    "solutionCode": "code = \"DEV-99\"\nis_dev = code.startswith(\"DEV\")\nprint(is_dev)\n",
    "hints": [
      "Concept: Search, validate, and extract string patterns using regular expressions. Think of it like: A metal detector set to beep only when it detects gold rings on a beach.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `code = \"DEV-99\"`.\n2. Check if starts with \"DEV\": `is_dev = code.startswith(\"DEV\")`.\n3. Print `is_dev`.\nKey Tip: Use `code.startswith(\"DEV\")`"
    ],
    "testCases": [
      {
        "id": "py-144-tc-1",
        "description": "is_dev is True",
        "testFn": "is_dev === true"
      }
    ]
  },
  {
    "id": "py-145-type-hints-mypy",
    "title": "145. Modern Static Typing with Type Hints",
    "slug": "type-hints-mypy",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Annotate variables, parameters, and return types with PEP 484 type hints.",
    "concepts": [
      "def fn(x: int) -> str:",
      "Type annotations"
    ],
    "analogy": "Labeling chemical bottles with their exact formula to prevent accidental mixing.",
    "explanationMarkdown": "### Python Type Hints\n```python\ndef greet(name: str) -> str:\n    return f\"Hello, {name}\"\n```",
    "workedExample": {
      "title": "Worked Example: Typed function",
      "code": "def add(a: int, b: int) -> int:\n    return a + b\nprint(add(5, 5))",
      "explanation": "• 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Define `def square(n: int) -> int: return n * n`.",
      "Call `res = square(7)`.",
      "Print `res`."
    ],
    "initialCode": "# Step 1: Define 'def square(n: int) -> int: return n * n'\ndef square(n: int) -> int:\n    # TODO: Implement function body\n    pass\n\n# Step 2: Call 'res = square(7)'\n# TODO: Write code below\n\n# Step 3: Print 'res'\n# TODO: Write code below\n",
    "solutionCode": "def square(n: int) -> int:\n    return n * n\nres = square(7)\nprint(res)\n",
    "hints": [
      "Concept: Annotate variables, parameters, and return types with PEP 484 type hints. Think of it like: Labeling chemical bottles with their exact formula to prevent accidental mixing.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def square(n: int) -> int: return n * n`.\n2. Call `res = square(7)`.\n3. Print `res`.\nKey Tip: Square of 7 is 49"
    ],
    "testCases": [
      {
        "id": "py-145-tc-1",
        "description": "res is 49",
        "testFn": "res === 49"
      }
    ]
  },
  {
    "id": "py-146-masterclass-jwt-auth",
    "title": "146. Masterclass 1: Secure Token & Session Generator",
    "slug": "masterclass-token-generator",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Construct an authentication session token encoder tracking user ID, role, and expiration.",
    "concepts": [
      "Token generation",
      "Dictionary packing",
      "Timestamp hashing"
    ],
    "analogy": "A digital conference wristband that encodes the attendee's name and VIP lounge access privileges.",
    "explanationMarkdown": "### Session Token Generator\nModel secure session payloads with user credentials and expiration flags.",
    "workedExample": {
      "title": "Worked Example: Token payload",
      "code": "session = {\"user_id\": 101, \"role\": \"admin\", \"valid\": True}\nprint(session[\"role\"])",
      "explanation": "• admin.",
      "expectedOutput": "admin"
    },
    "exerciseSteps": [
      "Define `def create_token(user_id, role): return {\"user_id\": user_id, \"role\": role, \"active\": True}`.",
      "Create token: `tok = create_token(42, \"admin\")`.",
      "Print `tok[\"role\"]`."
    ],
    "initialCode": "# Step 1: Define 'def create_token(user_id, role): return {\"user_id\": user_id, \"role\": role, \"active\": True}'\ndef create_token(user_id, role):\n    # TODO: Implement function body\n    pass\n\n# Step 2: Create token: 'tok = create_token(42, \"admin\")'\n# TODO: Write code below\n\n# Step 3: Print 'tok[\"role\"]'\n# TODO: Write code below\n",
    "solutionCode": "def create_token(user_id, role):\n    return {\"user_id\": user_id, \"role\": role, \"active\": True}\ntok = create_token(42, \"admin\")\nprint(tok[\"role\"])\n",
    "hints": [
      "Concept: Construct an authentication session token encoder tracking user ID, role, and expiration. Think of it like: A digital conference wristband that encodes the attendee's name and VIP lounge access privileges.",
      "Syntax Blueprint: Define functions with `def function_name(param):`, indent the body, and return a value with `return`. Call it using `function_name(arg)`.",
      "Step-by-Step Target:\n1. Define `def create_token(user_id, role): return {\"user_id\": user_id, \"role\": role, \"active\": True}`.\n2. Create token: `tok = create_token(42, \"admin\")`.\n3. Print `tok[\"role\"]`.\nKey Tip: Return dictionary with user_id, role, and active"
    ],
    "testCases": [
      {
        "id": "py-146-tc-1",
        "description": "tok role is admin",
        "testFn": "tok.role === 'admin' && tok.user_id === 42"
      }
    ]
  },
  {
    "id": "py-147-masterclass-rate-limiter",
    "title": "147. Masterclass 2: API Token Bucket Rate Limiter",
    "slug": "masterclass-rate-limiter",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Implement a token bucket rate limiter class preventing server denial of service.",
    "concepts": [
      "Rate limiting algorithms",
      "Class state",
      "Request throttling"
    ],
    "analogy": "An hourglass timer at an amusement park: only 5 visitors can enter the ride per minute.",
    "explanationMarkdown": "### Rate Limiter\nTrack request counts per client IP and throttle requests when threshold is exceeded.",
    "workedExample": {
      "title": "Worked Example: Limit check",
      "code": "requests = 4\nallowed = requests < 5\nprint(allowed)",
      "explanation": "• True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Define `class RateLimiter: def __init__(self, limit): self.limit = limit; self.count = 0; def request(self): if self.count < self.limit: self.count += 1; return True; return False`.",
      "Create `rl = RateLimiter(2)`.",
      "Make 2 requests, then verify 3rd request returns `False`.",
      "Print `rl.request()`."
    ],
    "initialCode": "# Step 1: Define 'class RateLimiter: def __init__(self, limit): self.limit = limit; self.count = 0; def request(self): if self.count < self.limit: self.count += 1; return True; return False'\nclass RateLimiter:\n    def __init__(self, limit):\n        # TODO: Implement method body\n        pass\n\n    def request(self):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create variable 'rl' and set it to RateLimiter(2)\n# TODO: Write code below\n\n# Step 3: Make 2 requests, then verify 3rd request returns 'False'\n# TODO: Write code below\n\n# Step 4: Print 'rl.request()'\n# TODO: Write code below\n",
    "solutionCode": "class RateLimiter:\n    def __init__(self, limit):\n        self.limit = limit\n        self.count = 0\n    def request(self):\n        if self.count < self.limit:\n            self.count += 1\n            return True\n        return False\nrl = RateLimiter(2)\nrl.request()\nrl.request()\nblocked = rl.request()\nprint(blocked)\n",
    "hints": [
      "Concept: Implement a token bucket rate limiter class preventing server denial of service. Think of it like: An hourglass timer at an amusement park: only 5 visitors can enter the ride per minute.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class RateLimiter: def __init__(self, limit): self.limit = limit; self.count = 0; def request(self): if self.count < self.limit: self.count += 1; return True; return False`.\n2. Create `rl = RateLimiter(2)`.\n3. Make 2 requests, then verify 3rd request returns `False`.\n4. Print `rl.request()`.\nKey Tip: The 3rd request should return False"
    ],
    "testCases": [
      {
        "id": "py-147-tc-1",
        "description": "blocked is False",
        "testFn": "blocked === false"
      }
    ]
  },
  {
    "id": "py-148-masterclass-event-emitter",
    "title": "148. Masterclass 3: Pub/Sub Event Bus Architecture",
    "slug": "masterclass-event-emitter",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Build an event bus allowing detached microservices to publish and subscribe to named topics.",
    "concepts": [
      "Observer pattern",
      "Pub/Sub architecture",
      "Callback registration"
    ],
    "analogy": "A radio transmission tower: the station broadcasts music to whatever radio receivers happen to be tuned to 98.5 FM.",
    "explanationMarkdown": "### Pub/Sub Event Bus\nRegister subscriber functions to event channels and dispatch events.",
    "workedExample": {
      "title": "Worked Example: Handler dispatch",
      "code": "handlers = [lambda x: x * 2]\nprint(handlers[0](10))",
      "explanation": "• 20.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Define `class EventBus: def __init__(self): self.events = {}; def on(self, event, fn): self.events.setdefault(event, []).append(fn); def emit(self, event, data): return [fn(data) for fn in self.events.get(event, [])]`.",
      "Register a handler `bus = EventBus(); bus.on(\"score\", lambda s: s + 10)`.",
      "Emit `res = bus.emit(\"score\", 50)` and print `res[0]`."
    ],
    "initialCode": "# Step 1: Define 'class EventBus: def __init__(self): self.events = {}; def on(self, event, fn): self.events.setdefault(event, []).append(fn); def emit(self, event, data): return [fn(data) for fn in self.events.get(event, [])]'\nclass EventBus:\n    def __init__(self):\n        # TODO: Implement method body\n        pass\n\n    def on(self, event, fn):\n        # TODO: Implement method body\n        pass\n\n    def emit(self, event, data):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Register a handler 'bus = EventBus(); bus.on(\"score\", lambda s: s + 10)'\n# TODO: Write code below\n\n# Step 3: Emit 'res = bus.emit(\"score\", 50)' and print 'res[0]'\n# TODO: Write code below\n",
    "solutionCode": "class EventBus:\n    def __init__(self):\n        self.events = {}\n    def on(self, event, fn):\n        self.events.setdefault(event, []).append(fn)\n    def emit(self, event, data):\n        return [fn(data) for fn in self.events.get(event, [])]\nbus = EventBus()\nbus.on(\"score\", lambda s: s + 10)\nres = bus.emit(\"score\", 50)\nprint(res[0])\n",
    "hints": [
      "Concept: Build an event bus allowing detached microservices to publish and subscribe to named topics. Think of it like: A radio transmission tower: the station broadcasts music to whatever radio receivers happen to be tuned to 98.5 FM.",
      "Syntax Blueprint: Anonymous lambda function syntax: `lambda arg1, arg2: expression`.",
      "Step-by-Step Target:\n1. Define `class EventBus: def __init__(self): self.events = {}; def on(self, event, fn): self.events.setdefault(event, []).append(fn); def emit(self, event, data): return [fn(data) for fn in self.events.get(event, [])]`.\n2. Register a handler `bus = EventBus(); bus.on(\"score\", lambda s: s + 10)`.\n3. Emit `res = bus.emit(\"score\", 50)` and print `res[0]`.\nKey Tip: res[0] will be 60"
    ],
    "testCases": [
      {
        "id": "py-148-tc-1",
        "description": "res[0] is 60",
        "testFn": "res[0] === 60"
      }
    ]
  },
  {
    "id": "py-149-masterclass-blockchain",
    "title": "149. Masterclass 4: Cryptographic Block Ledger",
    "slug": "masterclass-blockchain",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 10,
    "xp": 50,
    "description": "Construct an immutable chain of blocks where each entry references the previous block's hash signature.",
    "concepts": [
      "Cryptographic chaining",
      "Data integrity verification"
    ],
    "analogy": "A notary journal where every new legal page has a unique stamp referencing the seal of the preceding page.",
    "explanationMarkdown": "### Cryptographic Chaining\nEach block contains data, timestamp, and the previous block's hash signature.",
    "workedExample": {
      "title": "Worked Example: Block record",
      "code": "block = {\"index\": 1, \"prev\": \"0000\", \"data\": \"Genesis\"}\nprint(block[\"data\"])",
      "explanation": "• Genesis.",
      "expectedOutput": "Genesis"
    },
    "exerciseSteps": [
      "Define `class Block: def __init__(self, idx, data, prev_hash): self.idx = idx; self.data = data; self.prev_hash = prev_hash`.",
      "Instantiate `b1 = Block(1, \"Deposit 100\", \"0xGENESIS\")`.",
      "Print `b1.prev_hash`."
    ],
    "initialCode": "# Step 1: Define 'class Block: def __init__(self, idx, data, prev_hash): self.idx = idx; self.data = data; self.prev_hash = prev_hash'\nclass Block:\n    def __init__(self, idx, data, prev_hash):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Instantiate 'b1 = Block(1, \"Deposit 100\", \"0xGENESIS\")'\n# TODO: Write code below\n\n# Step 3: Print 'b1.prev_hash'\n# TODO: Write code below\n",
    "solutionCode": "class Block:\n    def __init__(self, idx, data, prev_hash):\n        self.idx = idx\n        self.data = data\n        self.prev_hash = prev_hash\nb1 = Block(1, \"Deposit 100\", \"0xGENESIS\")\nprint(b1.prev_hash)\n",
    "hints": [
      "Concept: Construct an immutable chain of blocks where each entry references the previous block's hash signature. Think of it like: A notary journal where every new legal page has a unique stamp referencing the seal of the preceding page.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Block: def __init__(self, idx, data, prev_hash): self.idx = idx; self.data = data; self.prev_hash = prev_hash`.\n2. Instantiate `b1 = Block(1, \"Deposit 100\", \"0xGENESIS\")`.\n3. Print `b1.prev_hash`.\nKey Tip: b1.prev_hash is 0xGENESIS"
    ],
    "testCases": [
      {
        "id": "py-149-tc-1",
        "description": "b1.prev_hash is 0xGENESIS",
        "testFn": "b1.prev_hash === '0xGENESIS'"
      }
    ]
  },
  {
    "id": "py-150-masterclass-full-suite",
    "title": "150. Masterclass 5: Enterprise Analytics & Intelligence Engine",
    "slug": "masterclass-full-suite",
    "language": "python",
    "category": "Module 16: Async Python & Advanced Mastery",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 10,
    "xp": 60,
    "description": "Construct an end-to-end analytics engine aggregating user metrics, outlier detection, and summary reports.",
    "concepts": [
      "Data science pipeline",
      "Standard deviation",
      "Final Python Mastery Capstone"
    ],
    "analogy": "The central analytics dashboard at a global tech company computing real-time revenue, active users, and platform health.",
    "explanationMarkdown": "### Final Python Capstone: Intelligence Engine\nCongratulations on reaching Lesson 150 of Python: Beginner to Pro!\nIn this final masterclass project, compute high-level business intelligence metrics across transactions.",
    "workedExample": {
      "title": "Worked Example: Total metrics",
      "code": "vals = [100, 200, 300]\navg = sum(vals) / len(vals)\nprint(f\"Avg: {avg}\")",
      "explanation": "• 200.0.",
      "expectedOutput": "Avg: 200.0"
    },
    "exerciseSteps": [
      "Define `class AnalyticsEngine: def __init__(self): self.metrics = []; def record(self, v): self.metrics.append(v); def summary(self): return {\"count\": len(self.metrics), \"total\": sum(self.metrics), \"avg\": sum(self.metrics)/len(self.metrics)}`.",
      "Create engine, record 10, 20, 30.",
      "Get `res = engine.summary()` and print `res[\"avg\"]`."
    ],
    "initialCode": "# Step 1: Define 'class AnalyticsEngine: def __init__(self): self.metrics = []; def record(self, v): self.metrics.append(v); def summary(self): return {\"count\": len(self.metrics), \"total\": sum(self.metrics), \"avg\": sum(self.metrics)/len(self.metrics)}'\nclass AnalyticsEngine:\n    def __init__(self):\n        # TODO: Implement method body\n        pass\n\n    def record(self, v):\n        # TODO: Implement method body\n        pass\n\n    def summary(self):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create engine, record 10, 20, 30\n# TODO: Write code below\n\n# Step 3: Get 'res = engine.summary()' and print 'res[\"avg\"]'\n# TODO: Write code below\n",
    "solutionCode": "class AnalyticsEngine:\n    def __init__(self):\n        self.metrics = []\n    def record(self, v):\n        self.metrics.append(v)\n    def summary(self):\n        return {\n            \"count\": len(self.metrics),\n            \"total\": sum(self.metrics),\n            \"avg\": sum(self.metrics) / len(self.metrics)\n        }\nengine = AnalyticsEngine()\nengine.record(10)\nengine.record(20)\nengine.record(30)\nres = engine.summary()\nprint(res[\"avg\"])\n",
    "hints": [
      "Concept: Construct an end-to-end analytics engine aggregating user metrics, outlier detection, and summary reports. Think of it like: The central analytics dashboard at a global tech company computing real-time revenue, active users, and platform health.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class AnalyticsEngine: def __init__(self): self.metrics = []; def record(self, v): self.metrics.append(v); def summary(self): return {\"count\": len(self.metrics), \"total\": sum(self.metrics), \"avg\": sum(self.metrics)/len(self.metrics)}`.\n2. Create engine, record 10, 20, 30.\n3. Get `res = engine.summary()` and print `res[\"avg\"]`.\nKey Tip: res[\"avg\"] is 20.0"
    ],
    "testCases": [
      {
        "id": "py-150-tc-1",
        "description": "res.avg is 20",
        "testFn": "res.avg === 20"
      },
      {
        "id": "py-150-tc-2",
        "description": "res.total is 60",
        "testFn": "res.total === 60"
      }
    ]
  }
];
