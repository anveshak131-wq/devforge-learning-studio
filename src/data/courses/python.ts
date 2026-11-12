import { Track } from '../../types';

export const PYTHON_TRACK: Track = {
  id: 'python',
  title: 'Python: Foundations to Senior Engineer',
  slug: 'python',
  language: 'python',
  icon: 'Terminal',
  color: 'from-emerald-400 to-teal-500',
  tagline: 'From variables, loops, and list comprehensions to function decorators, *args/**kwargs, and generator pipelines.',
  description: 'Master Pythonic design. Learn dynamic data structures, slicing, list & dict comprehensions, higher-order functions, and advanced custom decorators with interactive in-browser execution.',
  lessons: [
    // TIER 1: FOUNDATIONS (ABSOLUTE BEGINNER)
    {
      id: 'py-t1-variables-fstrings',
      title: 'Foundations: Variables, Math & Modern F-Strings',
      slug: 'variables-fstrings',
      language: 'python',
      category: '1. Foundations',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 8,
      xp: 40,
      description: 'Start learning Python from scratch. Learn variable assignment, numbers, strings, and modern f-string formatting.',
      concepts: ['Dynamic typing', 'Arithmetic operators', 'f-string interpolation: f"{var}"'],
      explanationMarkdown: `
### Welcome to Python!
Python is renowned for its clean, readable syntax. You do not need semicolons or variable declaration keywords.

\`\`\`python
player_name = "Alex"
score = 45
bonus = 15
total = score + bonus
print(f"Player {player_name} scored {total} points!")
\`\`\`

#### Challenge:
Write a function \`format_receipt(item_name, price, tax_rate)\` that computes \`total = price + (price * tax_rate)\` and returns:
\`"Receipt: {item_name} costs \${total}"\` rounded to 2 decimal places.
      `,
      initialCode: `def format_receipt(item_name, price, tax_rate):
  # Calculate total and return formatted f-string
  total = round(price + (price * tax_rate), 2)
  return f"Receipt: {item_name} costs \${total}"

# Test run:
print(format_receipt("Coffee", 4.00, 0.10))
`,
      solutionCode: `def format_receipt(item_name, price, tax_rate):
  total = round(price + (price * tax_rate), 2)
  return f"Receipt: {item_name} costs \${total}"

print(format_receipt("Coffee", 4.00, 0.10))
`,
      hints: [
        'Calculate `total = round(price + (price * tax_rate), 2)`.',
        'Return `f"Receipt: {item_name} costs ${total}"`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Calculates total with tax and formats receipt accurately',
          testFn: `(() => {
            const res = format_receipt('Coffee', 4.00, 0.10);
            return res === 'Receipt: Coffee costs $4.4';
          })()`,
          expectedMessage: 'Expected "Receipt: Coffee costs $4.4"'
        }
      ]
    },

    // TIER 2: CORE DEVELOPER
    {
      id: 'py-t2-lists-dictionaries',
      title: 'Core: Dictionary Lookups & Safe Key Retrieval',
      slug: 'dictionaries-lookups',
      language: 'python',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Master key-value dictionaries, default values with .get(), and data restructuring.',
      concepts: ['Dictionaries (dict)', 'dict.get(key, default)', 'Key existence checks'],
      explanationMarkdown: `
### Key-Value Dictionaries in Python
Dictionaries store data in \`key: value\` pairs. Using \`dict.get(key, default)\` avoids \`KeyError\` exceptions when a key is absent!

\`\`\`python
user = {"name": "Sara", "role": "admin"}
user_role = user.get("role", "guest")
user_avatar = user.get("avatar", "default.png")
\`\`\`

#### Challenge:
Write a function \`merge_user_profile(user_dict, default_theme="dark")\`:
- Returns an object/dict with:
  - \`"name"\`: user_dict's name
  - \`"role"\`: user_dict's role (defaults to \`"member"\` if missing)
  - \`"theme"\`: user_dict's theme (defaults to \`default_theme\` if missing)
      `,
      initialCode: `def merge_user_profile(user_dict, default_theme="dark"):
  # your implementation
  return {
    "name": user_dict.get("name"),
    "role": user_dict.get("role", "member"),
    "theme": user_dict.get("theme", default_theme)
  }

print(merge_user_profile({"name": "Dan"}))
`,
      solutionCode: `def merge_user_profile(user_dict, default_theme="dark"):
  return {
    "name": user_dict.get("name"),
    "role": user_dict.get("role", "member"),
    "theme": user_dict.get("theme", default_theme)
  }
`,
      hints: [
        'Use `user_dict.get("role", "member")` to fallback safely.',
        'Use `user_dict.get("theme", default_theme)` for theme.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Supplies default role and theme when absent',
          testFn: `(() => {
            const res = merge_user_profile({ name: 'Dan' });
            return res.name === 'Dan' && res.role === 'member' && res.theme === 'dark';
          })()`,
          expectedMessage: 'Expected default role: member, theme: dark'
        }
      ]
    },

    // TIER 3: INTERMEDIATE
    {
      id: 'py-t3-list-comprehensions',
      title: 'Intermediate: List & Dictionary Comprehensions',
      slug: 'list-comprehensions',
      language: 'python',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 15,
      xp: 65,
      description: 'Transform collections cleanly and expressively using Pythonic comprehensions.',
      concepts: ['List comprehensions: [x for x in list if condition]', 'Data filtering & transformation', 'Set & dict comprehensions'],
      explanationMarkdown: `
### Pythonic Code: List Comprehensions
List comprehensions provide an expressive syntax to create new lists from existing iterables:

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
evens_squared = [n ** 2 for n in numbers if n % 2 == 0]
# [4, 16, 36]
\`\`\`

#### Challenge:
Write a function \`filter_and_double(numbers)\` that takes a list of integers and returns a new list containing only the positive even numbers, each multiplied by 2.
      `,
      initialCode: `def filter_and_double(numbers):
  return [n * 2 for n in numbers if n > 0 and n % 2 == 0]

print(filter_and_double([-4, -2, 0, 1, 2, 3, 4, 5, 6]))
`,
      solutionCode: `def filter_and_double(numbers):
  return [n * 2 for n in numbers if n > 0 and n % 2 == 0]
`,
      hints: [
        'Check both `n > 0` and `n % 2 == 0`.',
        'Multiply by 2 in the expression: `n * 2`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Filters positive evens and doubles them correctly',
          testFn: `(() => {
            const res = filter_and_double([-4, -2, 0, 1, 2, 3, 4, 5, 6]);
            return Array.isArray(res) && res.length === 3 && res[0] === 4 && res[1] === 8 && res[2] === 12;
          })()`,
          expectedMessage: 'Expected [4, 8, 12]'
        }
      ]
    },

    // TIER 4: ADVANCED
    {
      id: 'py-t4-args-kwargs-higher-order',
      title: 'Advanced: Variadic Arguments (*args & **kwargs)',
      slug: 'args-kwargs',
      language: 'python',
      category: '4. Advanced Architecture',
      difficulty: 'Advanced',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 20,
      xp: 85,
      description: 'Write flexible APIs and function adapters that accept arbitrary positional and keyword arguments.',
      concepts: ['*args positional unpacking', '**kwargs keyword unpacking', 'Function wrapping & forwarding'],
      explanationMarkdown: `
### Variadic Functions: *args & **kwargs
When building libraries or framework middleware, functions often need to accept arbitrary arguments:

\`\`\`python
def make_tag(tag, *content, **attributes):
  attrs_str = " ".join([f'{k}="{v}"' for k, v in attributes.items()])
  inner = " ".join(content)
  return f"<{tag} {attrs_str}>{inner}</{tag}>"
\`\`\`

#### Challenge:
Write a function \`build_query_string(base_url, **params)\` that formats URL query parameters:
- If no params are passed, return \`base_url\`.
- Otherwise, format parameters sorted alphabetically by key as \`"key=value"\` joined with \`"&"\`, appended to \`base_url + "?"\`.
      `,
      initialCode: `def build_query_string(base_url, **params):
  if not params:
    return base_url
  # Sort keys and join
  pairs = [f"{k}={v}" for k, v in sorted(params.items())]
  return f"{base_url}?" + "&".join(pairs)

print(build_query_string("https://api.example.com", sort="asc", page=2))
`,
      solutionCode: `def build_query_string(base_url, **params):
  if not params:
    return base_url
  pairs = [f"{k}={v}" for k, v in sorted(params.items())]
  return f"{base_url}?" + "&".join(pairs)
`,
      hints: [
        'If not params return base_url.',
        'Use `sorted(params.items())` and join with `&`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Constructs query string sorted by key',
          testFn: `(() => {
            const res = build_query_string('https://api.com', limit=10, search='dev');
            return res === 'https://api.com?limit=10&search=dev';
          })()`,
          expectedMessage: 'Expected "https://api.com?limit=10&search=dev"'
        }
      ]
    },

    // TIER 5: MASTERCLASS / EXPERT
    {
      id: 'py-t5-custom-decorators',
      title: 'Masterclass: Metaprogramming with Function Decorators',
      slug: 'decorators-metaprogramming',
      language: 'python',
      category: '5. Masterclass & Internals',
      difficulty: 'Expert',
      tier: 5,
      tierName: 'Masterclass',
      estimatedMinutes: 25,
      xp: 120,
      description: 'Understand Python function wrappers, closures, and the @decorator syntax for caching, authentication, and logging.',
      concepts: ['Decorators as higher-order functions', 'Function closures', 'functools.wraps semantics', 'Wrapper execution interception'],
      explanationMarkdown: `
### What is a Python Decorator?
A decorator is a callable that takes a function as an argument and extends its behavior without modifying the original function definition:

\`\`\`python
def log_execution(func):
  def wrapper(*args, **kwargs):
    print(f"Calling: {func.__name__}")
    result = func(*args, **kwargs)
    print(f"Completed: {func.__name__}")
    return result
  return wrapper

@log_execution
def greet(name):
  return f"Hello, {name}"
\`\`\`

#### Challenge:
Implement a decorator factory \`repeat_call(n)\`:
- Takes an integer \`n\`.
- Wraps a function \`func\`.
- The returned wrapper executes \`func(*args, **kwargs)\` \`n\` times in a loop and returns the result of the final call!
      `,
      initialCode: `def repeat_call(n):
  def decorator(func):
    def wrapper(*args, **kwargs):
      # Execute func n times and return last result
      res = None
      for _ in range(n):
        res = func(*args, **kwargs)
      return res
    return wrapper
  return decorator

# Test run:
calls = 0
def inc():
  global calls
  calls += 1
  return calls

wrapped = repeat_call(3)(inc)
print("Final value:", wrapped())
`,
      solutionCode: `def repeat_call(n):
  def decorator(func):
    def wrapper(*args, **kwargs):
      res = None
      for _ in range(n):
        res = func(*args, **kwargs)
      return res
    return wrapper
  return decorator
`,
      hints: [
        'Create three nested levels: repeat_call(n) -> decorator(func) -> wrapper(*args, **kwargs).',
        'Inside wrapper, run a loop for `_ in range(n)`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Repeats underlying function invocation n times',
          testFn: `(() => {
            let count = 0;
            const inc = () => { count++; return count; };
            const wrapped = repeat_call(4)(inc);
            const finalVal = wrapped();
            return count === 4 && finalVal === 4;
          })()`,
          expectedMessage: 'Expected function to be executed 4 times'
        }
      ]
    }
  ]
};
