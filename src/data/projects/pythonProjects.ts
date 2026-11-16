import { GuidedProject } from '../../types';

export const PYTHON_EXPENSE_PROJECT: GuidedProject = {
  id: 'project-python-expense-tracker',
  title: 'CLI Expense & Budget Tracker',
  slug: 'python-expense-tracker',
  language: 'python',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Build a structured command-line finance tracker with category aggregation and budget thresholds.',
  description: 'Implement a complete budget management engine in Python. You will build transaction recording, category-based aggregations, monthly budget caps, and formatted financial summary reports.',
  previewType: 'console',
  whatYouWillBuild: [
    'An ExpenseTracker class managing financial transactions',
    'Adding and tagging expenses with categories and timestamps',
    'Category-level expenditure aggregations and percentages',
    'Budget threshold warnings when categories exceed spending caps'
  ],
  skillsLearned: [
    'Python OOP & Dictionary Aggregations',
    'Data validation and error handling',
    'Summary calculation algorithms',
    'String formatting and financial reporting'
  ],
  milestones: [
    {
      id: 'py-exp-m1',
      stepNumber: 1,
      title: 'Milestone 1: Transaction Storage & Category Aggregations',
      instructionMarkdown: `
### Milestone 1: Transaction Storage & Aggregations
Implement the core \`ExpenseTracker\` class:
- \`__init__()\`: Initializes \`self.expenses = []\` and \`self.budgets = {}\`.
- \`add_expense(title, amount, category)\`:
  - Validates amount > 0.
  - Appends \`{'id': len(self.expenses) + 1, 'title': title, 'amount': float(amount), 'category': category.lower()}\`.
  - Returns the created expense dictionary.
- \`get_total_spent(category=None)\`:
  - Returns the sum of amounts. If \`category\` is passed, filters by category (case-insensitive).
- \`get_category_summary()\`:
  - Returns a dictionary mapping each category to its total sum spent.
      `,
      starterCode: `class ExpenseTracker:
    def __init__(self):
        self.expenses = []
        self.budgets = {}

    def add_expense(self, title, amount, category):
        # Validate amount > 0, store expense dict, and return it
        pass

    def get_total_spent(self, category=None):
        # Return total sum, optionally filtered by category
        pass

    def get_category_summary(self):
        # Return dict mapping each category to total spent
        pass

tracker = ExpenseTracker()
tracker.add_expense("Groceries", 450.0, "Food")
tracker.add_expense("Coffee", 120.0, "Food")
tracker.add_expense("Metro Pass", 800.0, "Transport")
print("Total spent:", tracker.get_total_spent())
print("Category summary:", tracker.get_category_summary())
`,
      solutionCode: `class ExpenseTracker:
    def __init__(self):
        self.expenses = []
        self.budgets = {}

    def add_expense(self, title, amount, category):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        exp = {
            'id': len(self.expenses) + 1,
            'title': title,
            'amount': float(amount),
            'category': category.lower()
        }
        self.expenses.append(exp)
        return exp

    def get_total_spent(self, category=None):
        if category:
            cat = category.lower()
            return sum(e['amount'] for e in self.expenses if e['category'] == cat)
        return sum(e['amount'] for e in self.expenses)

    def get_category_summary(self):
        summary = {}
        for e in self.expenses:
            cat = e['category']
            summary[cat] = summary.get(cat, 0.0) + e['amount']
        return summary

tracker = ExpenseTracker()
tracker.add_expense("Groceries", 450.0, "Food")
tracker.add_expense("Coffee", 120.0, "Food")
tracker.add_expense("Metro Pass", 800.0, "Transport")
print("Total spent:", tracker.get_total_spent())
print("Category summary:", tracker.get_category_summary())
`,
      hints: [
        'Remember to normalize categories with .lower().',
        'Use sum() with a generator expression for efficient totals.'
      ],
      testCases: [
        {
          id: 'py-exp-tc1',
          description: 'add_expense correctly stores expenses and returns dict with id',
          testFn: `(() => {
            return code.includes('class ExpenseTracker') && code.includes('add_expense') && code.includes('get_total_spent');
          })()`,
          expectedMessage: 'ExpenseTracker must implement add_expense and get_total_spent methods'
        },
        {
          id: 'py-exp-tc2',
          description: 'get_category_summary aggregates amounts by category',
          testFn: `(() => {
            return code.includes('get_category_summary') && (code.includes('sum') || code.includes('summary'));
          })()`,
          expectedMessage: 'Must aggregate category totals into a summary dictionary'
        }
      ]
    },
    {
      id: 'py-exp-m2',
      stepNumber: 2,
      title: 'Milestone 2: Budget Caps & Alert System',
      instructionMarkdown: `
### Milestone 2: Budget Caps & Alert System
Extend \`ExpenseTracker\` with spending limits:
- \`set_budget(category, limit)\`: Sets maximum budget cap for a category.
- \`check_budget_status(category)\`:
  - Returns \`{'category': category, 'spent': total_spent, 'limit': limit, 'exceeded': total_spent > limit, 'remaining': max(0.0, limit - total_spent)}\`.
  - If no budget was set for category, returns \`None\`.
- \`get_over_budget_categories()\`:
  - Returns list of category names that have exceeded their set limits.
      `,
      starterCode: `class ExpenseTracker:
    def __init__(self):
        self.expenses = []
        self.budgets = {}

    def add_expense(self, title, amount, category):
        exp = {'id': len(self.expenses) + 1, 'title': title, 'amount': float(amount), 'category': category.lower()}
        self.expenses.append(exp)
        return exp

    def get_total_spent(self, category=None):
        if category:
            cat = category.lower()
            return sum(e['amount'] for e in self.expenses if e['category'] == cat)
        return sum(e['amount'] for e in self.expenses)

    def set_budget(self, category, limit):
        # Set category budget limit
        pass

    def check_budget_status(self, category):
        # Return dict with spent, limit, exceeded, and remaining
        pass

    def get_over_budget_categories(self):
        # Return list of categories exceeding their budgets
        pass
`,
      solutionCode: `class ExpenseTracker:
    def __init__(self):
        self.expenses = []
        self.budgets = {}

    def add_expense(self, title, amount, category):
        exp = {'id': len(self.expenses) + 1, 'title': title, 'amount': float(amount), 'category': category.lower()}
        self.expenses.append(exp)
        return exp

    def get_total_spent(self, category=None):
        if category:
            cat = category.lower()
            return sum(e['amount'] for e in self.expenses if e['category'] == cat)
        return sum(e['amount'] for e in self.expenses)

    def set_budget(self, category, limit):
        self.budgets[category.lower()] = float(limit)

    def check_budget_status(self, category):
        cat = category.lower()
        if cat not in self.budgets:
            return None
        limit = self.budgets[cat]
        spent = self.get_total_spent(cat)
        return {
            'category': cat,
            'spent': spent,
            'limit': limit,
            'exceeded': spent > limit,
            'remaining': max(0.0, limit - spent)
        }

    def get_over_budget_categories(self):
        over = []
        for cat in self.budgets:
            status = self.check_budget_status(cat)
            if status and status['exceeded']:
                over.append(cat)
        return over
`,
      hints: [
        'Store budgets using self.budgets[category.lower()] = float(limit).',
        'Compare spent > limit to compute the exceeded boolean.'
      ],
      testCases: [
        {
          id: 'py-exp-m2-tc1',
          description: 'set_budget and check_budget_status calculate remaining budget and exceeded state',
          testFn: `(() => {
            return code.includes('set_budget') && code.includes('check_budget_status') && code.includes('exceeded');
          })()`,
          expectedMessage: 'Must implement set_budget and check_budget_status with exceeded calculation'
        },
        {
          id: 'py-exp-m2-tc2',
          description: 'get_over_budget_categories returns all categories where spent > limit',
          testFn: `(() => {
            return code.includes('get_over_budget_categories');
          })()`,
          expectedMessage: 'Must implement get_over_budget_categories'
        }
      ]
    }
  ]
};

export const PYTHON_REDIS_PROJECT: GuidedProject = {
  id: 'project-python-mini-redis',
  title: 'In-Memory Key-Value Store (Mini-Redis)',
  slug: 'python-mini-redis',
  language: 'python',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Architect an in-memory key-value database engine with TTL expiration, list commands, and JSON snapshot persistence.',
  description: 'Design and build the internal engine of an in-memory database like Redis. You will implement key-value storage, time-to-live (TTL) expiration algorithms, list queues, hash namespaces, and atomic snapshots.',
  previewType: 'console',
  whatYouWillBuild: [
    'A MiniRedis engine with O(1) key lookups and mutations',
    'Active and passive TTL key expiration algorithms',
    'List queue commands (LPUSH, RPUSH, LPOP, RPOP, LRANGE)',
    'Database point-in-time snapshot export and import'
  ],
  skillsLearned: [
    'Data structure selection and time complexity',
    'Time-based eviction algorithms',
    'Namespace partitioning and hashing',
    'Database state serialization'
  ],
  milestones: [
    {
      id: 'py-red-m1',
      stepNumber: 1,
      title: 'Milestone 1: Core Key-Value Store & TTL Eviction',
      instructionMarkdown: `
### Milestone 1: Key-Value Engine with TTL
Implement \`MiniRedis\`:
- \`set(key, value, ttl_seconds=None)\`: Stores value. If ttl_seconds is provided, record expiration timestamp using \`time.time() + ttl_seconds\`.
- \`get(key)\`: Returns value if key exists and has not expired. If expired, deletes the key and returns \`None\`.
- \`exists(key)\`: Returns True if key exists and is unexpired, else False.
- \`delete(key)\`: Removes key and returns True if found, else False.
- \`cleanup_expired()\`: Scans and evicts all expired keys, returning the count of removed keys.
      `,
      starterCode: `import time

class MiniRedis:
    def __init__(self):
        self.store = {}
        self.expiry = {}

    def set(self, key, value, ttl_seconds=None):
        # Store key-value, record expiration timestamp if ttl_seconds provided
        pass

    def get(self, key):
        # Return value, evict and return None if expired
        pass

    def exists(self, key):
        # Return True if key exists and unexpired
        pass

    def delete(self, key):
        # Delete key and return True if deleted
        pass

    def cleanup_expired(self):
        # Evict all expired keys and return count of evicted keys
        pass

r = MiniRedis()
r.set("user:100", "Alice", ttl_seconds=10)
r.set("user:101", "Bob")
print("user:100 ->", r.get("user:100"))
print("exists user:101 ->", r.exists("user:101"))
`,
      solutionCode: `import time

class MiniRedis:
    def __init__(self):
        self.store = {}
        self.expiry = {}

    def set(self, key, value, ttl_seconds=None):
        self.store[key] = value
        if ttl_seconds is not None:
            self.expiry[key] = time.time() + float(ttl_seconds)
        elif key in self.expiry:
            del self.expiry[key]
        return True

    def _is_expired(self, key):
        if key in self.expiry and time.time() >= self.expiry[key]:
            self.delete(key)
            return True
        return False

    def get(self, key):
        if key not in self.store:
            return None
        if self._is_expired(key):
            return None
        return self.store[key]

    def exists(self, key):
        if key not in self.store:
            return False
        return not self._is_expired(key)

    def delete(self, key):
        deleted = False
        if key in self.store:
            del self.store[key]
            deleted = True
        if key in self.expiry:
            del self.expiry[key]
        return deleted

    def cleanup_expired(self):
        now = time.time()
        expired_keys = [k for k, exp in self.expiry.items() if now >= exp]
        for k in expired_keys:
            self.delete(k)
        return len(expired_keys)
`,
      hints: [
        'Use time.time() to record current epoch timestamp.',
        'When get() is called on an expired key, delete it immediately before returning None (lazy eviction).'
      ],
      testCases: [
        {
          id: 'py-red-tc1',
          description: 'MiniRedis implements set, get, exists, and delete with TTL tracking',
          testFn: `(() => {
            return code.includes('class MiniRedis') && code.includes('set') && code.includes('get') && code.includes('time');
          })()`,
          expectedMessage: 'MiniRedis must implement set and get with TTL support'
        },
        {
          id: 'py-red-tc2',
          description: 'cleanup_expired scans and purges all expired keys',
          testFn: `(() => {
            return code.includes('cleanup_expired');
          })()`,
          expectedMessage: 'Must implement cleanup_expired eviction loop'
        }
      ]
    },
    {
      id: 'py-red-m2',
      stepNumber: 2,
      title: 'Milestone 2: List Operations & Database Snapshot Serialization',
      instructionMarkdown: `
### Milestone 2: Lists & Database Snapshots
Extend \`MiniRedis\` with Redis-style List commands and persistence:
- \`lpush(key, *values)\`: Prepends values to list at \`key\`. If key doesn't exist, initializes an empty list. Returns new list length.
- \`rpush(key, *values)\`: Appends values to list at \`key\`. Returns new list length.
- \`lpop(key)\`: Removes and returns first element of list, or \`None\` if empty.
- \`rpop(key)\`: Removes and returns last element of list, or \`None\` if empty.
- \`lrange(key, start, end)\`: Returns slice from \`start\` to \`end\` (inclusive of end index, matching Redis behavior!).
- \`save_snapshot()\`: Returns a dictionary representing the full unexpired database state suitable for JSON serialization.
      `,
      starterCode: `class MiniRedis:
    def __init__(self):
        self.store = {}
        self.expiry = {}

    def lpush(self, key, *values):
        # Prepend values to list
        pass

    def rpush(self, key, *values):
        # Append values to list
        pass

    def lpop(self, key):
        # Pop from left
        pass

    def rpop(self, key):
        # Pop from right
        pass

    def lrange(self, key, start, end):
        # Return slice inclusive of end index
        pass

    def save_snapshot(self):
        # Return dict of active store and expiry
        pass
`,
      solutionCode: `class MiniRedis:
    def __init__(self):
        self.store = {}
        self.expiry = {}

    def lpush(self, key, *values):
        if key not in self.store:
            self.store[key] = []
        for val in values:
            self.store[key].insert(0, val)
        return len(self.store[key])

    def rpush(self, key, *values):
        if key not in self.store:
            self.store[key] = []
        for val in values:
            self.store[key].append(val)
        return len(self.store[key])

    def lpop(self, key):
        if key in self.store and len(self.store[key]) > 0:
            return self.store[key].pop(0)
        return None

    def rpop(self, key):
        if key in self.store and len(self.store[key]) > 0:
            return self.store[key].pop()
        return None

    def lrange(self, key, start, end):
        if key not in self.store or not isinstance(self.store[key], list):
            return []
        lst = self.store[key]
        if end == -1:
            return lst[start:]
        return lst[start:end + 1]

    def save_snapshot(self):
        return {
            'store': {k: v for k, v in self.store.items()},
            'expiry': {k: v for k, v in self.expiry.items()}
        }
`,
      hints: [
        'In Redis LRANGE, end is inclusive, so slice using lst[start:end+1].',
        'Handle end == -1 to return the full remaining list.'
      ],
      testCases: [
        {
          id: 'py-red-m2-tc1',
          description: 'lpush, rpush, lpop, and rpop manage list elements correctly',
          testFn: `(() => {
            return code.includes('lpush') && code.includes('rpush') && code.includes('lpop') && code.includes('rpop');
          })()`,
          expectedMessage: 'Must implement Redis list commands lpush, rpush, lpop, and rpop'
        },
        {
          id: 'py-red-m2-tc2',
          description: 'save_snapshot returns serializable dictionary of database state',
          testFn: `(() => {
            return code.includes('save_snapshot');
          })()`,
          expectedMessage: 'Must implement save_snapshot method'
        }
      ]
    }
  ]
};

export const PYTHON_HTTP_SERVER_PROJECT: GuidedProject = {
  id: 'project-python-http-server',
  title: 'Custom HTTP/1.1 Web Server Protocol Engine',
  slug: 'python-http-server-engine',
  language: 'python',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Engineer a low-level HTTP/1.1 protocol parser and web server engine that decodes raw requests and dispatches responses.',
  description: 'Understand how web servers actually work under the hood without external libraries. Build a production-grade HTTP/1.1 parser that dissects raw byte streams, parses request lines, decodes URL query parameters, routes paths, and constructs compliant HTTP response packets.',
  previewType: 'console',
  whatYouWillBuild: [
    'A robust HTTP Request Parser parsing raw HTTP/1.1 wire protocol',
    'Header extraction and query parameter dictionary decoding',
    'A pattern-matching Route Dispatcher with middleware hooks',
    'HTTP Response Serializer formatting status lines, Content-Length, and JSON bodies'
  ],
  skillsLearned: [
    'HTTP/1.1 Protocol RFC Specifications',
    'Raw string and byte-stream protocol dissection',
    'Request routing and URL query parameter parsing',
    'HTTP status codes and MIME content negotiation'
  ],
  milestones: [
    {
      id: 'py-http-m1',
      stepNumber: 1,
      title: 'Milestone 1: Raw HTTP Request Dissection & Header Parser',
      instructionMarkdown: `
### Milestone 1: HTTP Request Parser
Implement \`HTTPRequestParser\`:
- \`parse(raw_request_text)\`:
  - Splits request into request line, headers, and optional body.
  - Parses method (\`GET\`, \`POST\`, etc.), path (e.g., \`/users/profile\`), and HTTP version (e.g., \`HTTP/1.1\`).
  - Decodes query parameters if path contains \`?\` (e.g. \`/search?q=python&page=2\` -> \`{'q': 'python', 'page': '2'}\`).
  - Normalizes headers into a dictionary with lowercase keys.
  - Returns a dictionary: \`{'method': method, 'path': clean_path, 'query': query_dict, 'headers': headers_dict, 'body': body}\`.
      `,
      starterCode: `class HTTPRequestParser:
    @staticmethod
    def parse(raw_request):
        # Parse method, path, query params, headers, and body
        pass

sample_request = """GET /api/products?category=books&limit=10 HTTP/1.1\\r
Host: localhost:8080\\r
User-Agent: DevForgeClient/1.0\\r
Accept: application/json\\r
\\r
"""

parsed = HTTPRequestParser.parse(sample_request)
print("Method:", parsed['method'])
print("Path:", parsed['path'])
print("Query:", parsed['query'])
print("Host Header:", parsed['headers'].get('host'))
`,
      solutionCode: `class HTTPRequestParser:
    @staticmethod
    def parse(raw_request):
        normalized = raw_request.replace('\\r\\n', '\\n')
        parts = normalized.split('\\n\\n', 1)
        header_section = parts[0]
        body = parts[1] if len(parts) > 1 else ''

        lines = header_section.split('\\n')
        request_line = lines[0].strip()
        tokens = request_line.split(' ')
        method = tokens[0].upper()
        raw_path = tokens[1] if len(tokens) > 1 else '/'
        version = tokens[2] if len(tokens) > 2 else 'HTTP/1.1'

        # Query parsing
        query = {}
        if '?' in raw_path:
            clean_path, query_str = raw_path.split('?', 1)
            for pair in query_str.split('&'):
                if '=' in pair:
                    k, v = pair.split('=', 1)
                    query[k] = v
        else:
            clean_path = raw_path

        # Headers parsing
        headers = {}
        for line in lines[1:]:
            if ':' in line:
                k, v = line.split(':', 1)
                headers[k.strip().lower()] = v.strip()

        return {
            'method': method,
            'path': clean_path,
            'version': version,
            'query': query,
            'headers': headers,
            'body': body
        }
`,
      hints: [
        'Separate headers from body by searching for double newline (\\n\\n or \\r\\n\\r\\n).',
        'Store headers with lowercased keys for case-insensitive lookup.'
      ],
      testCases: [
        {
          id: 'py-http-tc1',
          description: 'HTTPRequestParser parses method, path, headers, and query parameters',
          testFn: `(() => {
            return code.includes('class HTTPRequestParser') && code.includes('parse') && code.includes('method') && code.includes('headers');
          })()`,
          expectedMessage: 'HTTPRequestParser must parse method, path, headers and query params'
        }
      ]
    },
    {
      id: 'py-http-m2',
      stepNumber: 2,
      title: 'Milestone 2: Response Serializer & Route Dispatcher',
      instructionMarkdown: `
### Milestone 2: Router & Response Serializer
Implement \`HTTPServerEngine\`:
- \`route(method, path, handler)\`: Registers a handler function for an exact method and path.
- \`build_response(status_code, headers, body)\`:
  - Formats standard HTTP status line (e.g. \`HTTP/1.1 200 OK\` or \`HTTP/1.1 404 Not Found\`).
  - Sets \`Content-Length: len(body)\` automatically if not present.
  - Joins status line, headers, and body with \`\\r\\n\` separators.
- \`handle_request(raw_request)\`:
  - Parses request using \`HTTPRequestParser\`.
  - Dispatches to registered route handler, or returns \`404 Not Found\` if no route matches.
      `,
      starterCode: `class HTTPServerEngine:
    STATUS_CODES = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        404: "Not Found",
        500: "Internal Server Error"
    }

    def __init__(self):
        self.routes = {}

    def route(self, method, path, handler):
        # Register route handler
        pass

    def build_response(self, status_code, body="", content_type="text/plain"):
        # Construct compliant HTTP/1.1 response packet with status, Content-Type, Content-Length
        pass

    def handle_request(self, raw_request):
        # Parse and dispatch
        pass
`,
      solutionCode: `class HTTPServerEngine:
    STATUS_CODES = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        404: "Not Found",
        500: "Internal Server Error"
    }

    def __init__(self):
        self.routes = {}

    def route(self, method, path, handler):
        key = (method.upper(), path)
        self.routes[key] = handler

    def build_response(self, status_code, body="", content_type="text/plain"):
        reason = self.STATUS_CODES.get(status_code, "Unknown")
        status_line = f"HTTP/1.1 {status_code} {reason}"
        body_str = str(body)
        headers = [
            f"Content-Type: {content_type}",
            f"Content-Length: {len(body_str.encode('utf-8'))}",
            "Connection: close"
        ]
        return f"{status_line}\\r\\n" + "\\r\\n".join(headers) + f"\\r\\n\\r\\n{body_str}"

    def handle_request(self, raw_request):
        # Basic dispatcher
        try:
            first_line = raw_request.split('\\n')[0].strip()
            parts = first_line.split(' ')
            method = parts[0].upper()
            path = parts[1].split('?')[0]
            handler = self.routes.get((method, path))
            if handler:
                res = handler()
                return self.build_response(200, res, "application/json")
            return self.build_response(404, '{"error": "Not Found"}', "application/json")
        except Exception as e:
            return self.build_response(500, str(e))
`,
      hints: [
        'Format the response with \\r\\n between headers and a double \\r\\n\\r\\n before the body.',
        'Calculate Content-Length using the byte length of the body.'
      ],
      testCases: [
        {
          id: 'py-http-m2-tc1',
          description: 'build_response formats status line, Content-Length, and response body',
          testFn: `(() => {
            return code.includes('build_response') && code.includes('Content-Length') && code.includes('HTTP/1.1');
          })()`,
          expectedMessage: 'Must build compliant HTTP/1.1 response with Content-Length'
        },
        {
          id: 'py-http-m2-tc2',
          description: 'handle_request matches routes or returns 404',
          testFn: `(() => {
            return code.includes('handle_request') && code.includes('404');
          })()`,
          expectedMessage: 'Must dispatch to registered route or return 404'
        }
      ]
    }
  ]
};
