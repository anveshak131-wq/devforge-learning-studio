import { Track } from '../../types';

export const PYTHON_TRACK: Track = {
  id: 'python',
  title: 'Python: Foundations to Senior Engineer',
  slug: 'python',
  language: 'python',
  icon: 'Terminal',
  color: 'from-emerald-400 to-teal-500',
  tagline: 'Learn Python concepts first with worked examples and real-world analogies, then build hands-on scripts.',
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
      description: 'Start learning Python from step zero. Learn variable assignment, numbers, strings, and modern f-string formatting.',
      concepts: ['Dynamic variable assignment', 'Basic arithmetic: +, *, /', 'f-string interpolation: f"{var}"'],
      analogy: 'Writing Python is like writing clean notes in your notebook. You do not need semicolons, brackets, or type keywords. To save a value, you simply write `box_name = value`.',
      explanationMarkdown: `
### Step 1: Storing Data in Python
In Python, creating a variable is as simple as:
\`\`\`python
name = "Jordan"
price = 19.99
quantity = 3
\`\`\`

Python automatically understands whether something is a number or text.

---

### Step 2: Formatted Strings (F-Strings)
An **f-string** allows you to embed variables and math directly inside text by putting an \`f\` before your quotes and wrapping variables in \`{ ... }\`:

\`\`\`python
item = "Headphones"
total = price * quantity
print(f"Purchased {quantity}x {item} for a total of \${total}.")
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Generating a Coffee Order Receipt',
        code: `coffee_type = "Latte"
cup_price = 4.50
tax_rate = 0.08

# Calculate total with 8% sales tax
final_total = round(cup_price * (1 + tax_rate), 2)

message = f"Your order: 1x {coffee_type} costs \${final_total}"
print(message)`,
        explanation: '• Line 1-3: Stores coffee name, price, and tax rate.\n• Line 6: Uses round(..., 2) to keep 2 decimal places.\n• Line 8: Uses f"..." to insert coffee_type and final_total into the string.',
        expectedOutput: 'Your order: 1x Latte costs $4.86'
      },
      commonMistakes: [
        'Forgetting the letter `f` before the opening quote (e.g. `"{name}"` will print "{name}" literally rather than the variable value).',
        'Mixing up indentations (Python uses spaces to organize code blocks instead of curly braces).'
      ],
      exerciseSteps: [
        'Step 1: In `format_receipt(item_name, price, tax_rate)`, calculate `total = round(price + (price * tax_rate), 2)`.',
        'Step 2: Return an f-string formatted as: `"Receipt: {item_name} costs ${total}"`.',
        'Step 3: Click "Check Solution" to verify with test cases!'
      ],
      initialCode: `def format_receipt(item_name, price, tax_rate):
  # 👉 Step 1: Calculate total including tax (rounded to 2 decimal places)
  total = round(price + (price * tax_rate), 2)

  # 👉 Step 2: Return formatted f-string:
  return f"Receipt: {item_name} costs \${total}"

# 🧪 Test call:
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
      title: 'Core: Dictionary Lookups & Safe Default Fallbacks',
      slug: 'dictionaries-lookups',
      language: 'python',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 12,
      xp: 50,
      description: 'Master key-value dictionaries, default values with .get(), and safe data retrieval.',
      concepts: ['Dictionaries (`{"key": "value"}`)', 'Safe access with `dict.get(key, default)`', 'Preventing KeyError crashes'],
      analogy: 'Imagine a physical dictionary. If you look up a word that does not exist in standard dictionaries, the book burns up in flames (a KeyError crash!). Using `.get()` is like a polite librarian who checks for the word, and if it is missing, hands you a standard fallback card instead.',
      explanationMarkdown: `
### Python Dictionaries
Dictionaries store paired data using keys and values:
\`\`\`python
user = {
  "name": "Sarah",
  "role": "admin"
}
\`\`\`

If you ask for a key that does not exist like \`user["country"]\`, Python will throw a **KeyError** and crash your program!

---

### The Safe Way: \`.get(key, default)\`
Using \`.get()\` lets you specify a fallback if the key is missing:
\`\`\`python
# If "theme" doesn't exist, it defaults to "dark" instead of crashing:
theme = user.get("theme", "dark")
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Reading User Preferences Safely',
        code: `settings = {
  "notifications": True,
  "volume": 80
  # Notice "language" is not configured!
}

# Safely get language with fallback to "English"
app_language = settings.get("language", "English")

print(f"Loaded language: {app_language}")`,
        explanation: '• Line 1-4: settings has notifications and volume, but no language key.\n• Line 7: settings.get("language", "English") sees that "language" is missing and safely returns "English".',
        expectedOutput: 'Loaded language: English'
      },
      commonMistakes: [
        'Accessing missing keys using square brackets `dict[key]` instead of `dict.get(key, default)`.',
        'Confusing lists `[1, 2, 3]` (indexed by position 0, 1, 2) with dictionaries `{"a": 1}` (indexed by named keys).'
      ],
      exerciseSteps: [
        'Step 1: In `merge_user_profile(user_dict, default_theme="dark")`, build a new dictionary.',
        'Step 2: Read `"name"` from user_dict.',
        'Step 3: Read `"role"` with `.get("role", "member")`.',
        'Step 4: Read `"theme"` with `.get("theme", default_theme)`.'
      ],
      initialCode: `def merge_user_profile(user_dict, default_theme="dark"):
  # 👉 Build and return a safe profile dictionary:
  return {
    "name": user_dict.get("name"),
    "role": user_dict.get("role", "member"),
    "theme": user_dict.get("theme", default_theme)
  }

# 🧪 Test call:
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
      description: 'Transform collections cleanly and expressively in a single line using Pythonic comprehensions.',
      concepts: ['List comprehensions: `[expression for item in iterable if condition]`', 'Data filtering & transformation', 'Writing readable Pythonic code'],
      analogy: 'Instead of building an empty box, looping through a warehouse, picking items one by one, checking them, and putting them in the box, a list comprehension is a high-speed express line: "Give me all positive even numbers multiplied by 2 in one swift command."',
      explanationMarkdown: `
### Pythonic Code: List Comprehensions
In other languages, filtering and transforming a list takes 5-6 lines of boilerplate:
\`\`\`python
# The old, slow way:
evens = []
for n in numbers:
  if n % 2 == 0:
    evens.append(n * 2)
\`\`\`

In idiomatic Python, you express this in a single readable line:
\`\`\`python
# The Pythonic way:
evens = [n * 2 for n in numbers if n % 2 == 0]
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Extracting Passing Grades',
        code: `scores = [45, 88, 92, 59, 78, 95]

# Keep only passing scores (>= 70) and add a 5-point curve
curved_passing = [score + 5 for score in scores if score >= 70]

print("Curved passing scores:", curved_passing)`,
        explanation: '• for score in scores: loops through all 6 scores.\n• if score >= 70: filters out 45 and 59.\n• score + 5: adds 5 points to 88, 92, 78, 95.',
        expectedOutput: 'Curved passing scores: [93, 97, 83, 100]'
      },
      commonMistakes: [
        'Putting the `if` condition at the beginning instead of the end when filtering: `[x for x in list if condition]`.',
        'Over-nesting comprehensions: if logic becomes too complex, break it into standard functions.'
      ],
      exerciseSteps: [
        'Step 1: In `filter_and_double(numbers)`, write a list comprehension.',
        'Step 2: Filter for numbers where `n > 0` and `n % 2 == 0` (positive evens).',
        'Step 3: Double each matched number: `n * 2`.'
      ],
      initialCode: `def filter_and_double(numbers):
  # 👉 Write your list comprehension:
  return [n * 2 for n in numbers if n > 0 and n % 2 == 0]

# 🧪 Test call:
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
      title: 'Advanced: Flexible Functions (*args & **kwargs)',
      slug: 'args-kwargs',
      language: 'python',
      category: '4. Advanced Architecture',
      difficulty: 'Advanced',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 20,
      xp: 85,
      description: 'Write flexible functions and library APIs that accept arbitrary positional and keyword arguments.',
      concepts: ['*args positional unpacking', '**kwargs keyword dictionary unpacking', 'Building flexible URL query formatters'],
      analogy: '*args is like an open backpack where you can toss any number of items in order. **kwargs is like a filing cabinet where every item you hand in has a sticky note label attached to it.',
      explanationMarkdown: `
### What are *args and **kwargs?
When writing frameworks or reusable utilities, you don't always know beforehand how many parameters a user will pass:
- \`*args\`: Collects extra positional arguments into a tuple.
- \`**kwargs\`: Collects extra named keyword arguments into a dictionary.

\`\`\`python
def log_event(event_name, **details):
  print(f"Event: {event_name}")
  for key, value in details.items():
    print(f"  {key} = {value}")

log_event("USER_LOGIN", user_id=42, ip="127.0.0.1", browser="Chrome")
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Flexible HTML Tag Generator',
        code: `def make_element(tag, content, **attrs):
  # Format attributes as key="value"
  formatted_attrs = " ".join([f'{k}="{v}"' for k, v in attrs.items()])
  if formatted_attrs:
    return f"<{tag} {formatted_attrs}>{content}</{tag}>"
  return f"<{tag}>{content}</{tag}>"

btn = make_element("button", "Submit Order", id="btn-submit", className="primary")
print(btn)`,
        explanation: '• **attrs absorbs any keyword arguments (id and className) into a dict.\n• The comprehension turns them into id="btn-submit" className="primary".',
        expectedOutput: '<button id="btn-submit" className="primary">Submit Order</button>'
      },
      commonMistakes: [
        'Putting `**kwargs` before `*args` (positional arguments must always precede keyword arguments in Python function signatures).',
        'Mutating `kwargs` directly when passing them along to another function.'
      ],
      exerciseSteps: [
        'Step 1: In `build_query_string(base_url, **params)`, check `if not params: return base_url`.',
        'Step 2: Format pairs sorted by key: `[f"{k}={v}" for k, v in sorted(params.items())]`.',
        'Step 3: Return `f"{base_url}?" + "&".join(pairs)`.'
      ],
      initialCode: `def build_query_string(base_url, **params):
  # 👉 Step 1: Return base_url if no params were passed:
  if not params:
    return base_url

  # 👉 Step 2: Format key=value pairs sorted by key:
  pairs = [f"{k}={v}" for k, v in sorted(params.items())]

  # 👉 Step 3: Combine with ? and &:
  return f"{base_url}?" + "&".join(pairs)

# 🧪 Test call:
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
      concepts: ['Decorators as higher-order functions', 'Function closures', 'Wrapper execution interception', 'Reusable metaprogramming'],
      analogy: 'Imagine wrapping a gift box. The gift inside (the original function) doesn\'t change at all, but the wrapping paper and ribbon (the decorator) add beauty, security, or a tag before anyone opens the box.',
      explanationMarkdown: `
### What is a Python Decorator?
A decorator takes a function as an argument, wraps extra behavior around it, and returns the wrapped version:

\`\`\`python
def log_call(func):
  def wrapper(*args, **kwargs):
    print(f"Calling: {func.__name__}")
    return func(*args, **kwargs)
  return wrapper

@log_call
def greet(name):
  return f"Hello, {name}"
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Building a Timer & Execution Logger Decorator',
        code: `def notify(func):
  def wrapper(*args, **kwargs):
    print("🔔 Notification: Function starting...")
    result = func(*args, **kwargs)
    print("✅ Notification: Function finished.")
    return result
  return wrapper

@notify
def send_email(to):
  return f"Email sent to {to}"

print(send_email("alice@example.com"))`,
        explanation: '• @notify wraps send_email.\n• When send_email is called, wrapper runs first, prints start, calls the real function, prints finish, and returns the result.',
        expectedOutput: '🔔 Notification: Function starting...\n✅ Notification: Function finished.\nEmail sent to alice@example.com'
      },
      commonMistakes: [
        'Forgetting to return the result of `func(*args, **kwargs)` from the wrapper, causing the decorated function to return None!',
        'Forgetting to accept `*args, **kwargs` in the wrapper function.'
      ],
      exerciseSteps: [
        'Step 1: Implement a decorator factory `repeat_call(n)` that takes integer `n`.',
        'Step 2: It returns `decorator(func)`.',
        'Step 3: Inside `wrapper(*args, **kwargs)`, run a loop `for _ in range(n): res = func(*args, **kwargs)`.',
        'Step 4: Return `res`.'
      ],
      initialCode: `def repeat_call(n):
  def decorator(func):
    def wrapper(*args, **kwargs):
      # 👉 Execute func n times in a loop and return the last result:
      res = None
      for _ in range(n):
        res = func(*args, **kwargs)
      return res
    return wrapper
  return decorator

# 🧪 Test call:
counter = 0
def increment():
  global counter
  counter += 1
  return counter

three_times = repeat_call(3)(increment)
print("Final result after 3 runs:", three_times())
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
        'repeat_call(n) returns decorator(func) which returns wrapper(*args, **kwargs).',
        'Run `for _ in range(n): res = func(*args, **kwargs)` and return res.'
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
