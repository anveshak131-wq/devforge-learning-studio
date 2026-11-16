import { CourseQuiz } from '../../types/quiz';

export const PYTHON_QUIZZES: CourseQuiz[] = [
  // -------------------------------------------------------------
  // MODULE CHECKPOINT 1: SYNTAX, VARIABLES & OPERATORS
  // -------------------------------------------------------------
  {
    id: 'py-mod-1-quiz',
    trackId: 'python',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 1: Syntax & Variables',
    moduleIndex: 0,
    title: 'Checkpoint 1: Syntax & Variables',
    subtitle: 'Test your understanding of types, printing, variables, and operators',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'py-q1-1',
        type: 'output_prediction',
        prompt: 'What will be the output of the following Python code?',
        codeLanguage: 'python',
        codeSnippet: 'x = 10\ny = 3\nprint(x // y, x % y)',
        options: [
          '3.33 1',
          '3 1',
          '3 3',
          '3.0 1'
        ],
        correctOptionIndex: 1,
        explanation: 'In Python, // is integer (floor) division, so 10 // 3 equals 3. The % operator returns the remainder (modulus), so 10 % 3 equals 1.',
        skillCategory: 'Operators'
      },
      {
        id: 'py-q1-2',
        type: 'output_prediction',
        prompt: 'What does this expression evaluate to in Python?',
        codeLanguage: 'python',
        codeSnippet: 'print("3" * 3 + "4")',
        options: [
          '13',
          '3334',
          '333 4',
          'TypeError'
        ],
        correctOptionIndex: 1,
        explanation: 'Multiplying a string by an integer repeats it ("3" * 3 produces "333"). Then, adding "4" concatenates the two strings, resulting in "3334".',
        skillCategory: 'Strings & Types'
      },
      {
        id: 'py-q1-3',
        type: 'conceptual',
        prompt: 'Which of the following values evaluates to False when passed into bool()?',
        codeLanguage: 'python',
        codeSnippet: 'bool(val)',
        options: [
          '"False"',
          '[-1]',
          '0.0',
          '{"a": 0}'
        ],
        correctOptionIndex: 2,
        explanation: 'In Python, 0.0, 0, None, and empty collections ([], {}, "") are falsy. Non-empty collections and non-empty strings (including "False") are truthy.',
        skillCategory: 'Boolean Truthiness'
      },
      {
        id: 'py-q1-4',
        type: 'spot_the_bug',
        prompt: 'Why does the following code raise an error?',
        codeLanguage: 'python',
        codeSnippet: 'count = 42\nmsg = "Total items: " + count',
        options: [
          'Variable names cannot contain the word count',
          'Python cannot automatically concatenate a str and an int without conversion',
          'String literals require single quotes only',
          '+ is reserved strictly for numeric addition'
        ],
        correctOptionIndex: 1,
        explanation: 'Python is strongly typed and will not implicitly coerce integer 42 to string. You must explicitly convert it using str(count) or use an f-string: f"Total items: {count}".',
        skillCategory: 'Type Coercion'
      },
      {
        id: 'py-q1-5',
        type: 'output_prediction',
        prompt: 'What will print when this code is executed?',
        codeLanguage: 'python',
        codeSnippet: 'a, b = 5, 10\na, b = b, a + b\nprint(a, b)',
        options: [
          '10 15',
          '10 20',
          '5 15',
          '15 10'
        ],
        correctOptionIndex: 0,
        explanation: 'Tuple assignment evaluates all expressions on the right-hand side first (b is 10, a + b is 15), then unpacks them into a and b simultaneously. Thus, a becomes 10 and b becomes 15.',
        skillCategory: 'Variables & Unpacking'
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE CHECKPOINT 2: CONTROL FLOW & LOOPS
  // -------------------------------------------------------------
  {
    id: 'py-mod-2-quiz',
    trackId: 'python',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 4: Control Flow',
    moduleIndex: 3,
    title: 'Checkpoint 2: Control Flow & Loops',
    subtitle: 'Test if/else branches, while/for loops, break, and loop else clauses',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'py-q2-1',
        type: 'output_prediction',
        prompt: 'What will be output by this loop with an else clause?',
        codeLanguage: 'python',
        codeSnippet: 'for n in range(1, 4):\n    if n == 2:\n        continue\n    print(n, end="")\nelse:\n    print("D")',
        options: [
          '13D',
          '123D',
          '13',
          '123'
        ],
        correctOptionIndex: 0,
        explanation: 'When n is 2, continue skips printing. The else block of a loop executes when the loop finishes naturally without encountering a break statement. So "1", "3", and "D" are printed.',
        skillCategory: 'Control Flow'
      },
      {
        id: 'py-q2-2',
        type: 'output_prediction',
        prompt: 'What does this slice expression return?',
        codeLanguage: 'python',
        codeSnippet: 'text = "DevForge"\nprint(text[1:6:2])',
        options: [
          '"evF"',
          '"eFr"',
          '"eFrg"',
          '"dFg"'
        ],
        correctOptionIndex: 1,
        explanation: 'Slice syntax is [start:stop:step]. Index 1 is "e", stepping by 2 visits index 3 ("F") and index 5 ("r"), stopping before index 6. The result is "eFr".',
        skillCategory: 'Strings & Slices'
      },
      {
        id: 'py-q2-3',
        type: 'conceptual',
        prompt: 'How does Python evaluate boolean short-circuit expressions?',
        codeLanguage: 'python',
        codeSnippet: 'res = False and 1 / 0',
        options: [
          'It raises ZeroDivisionError immediately upon parsing',
          'It evaluates to False without raising ZeroDivisionError because the left side is False',
          'It evaluates to None',
          'It returns 0'
        ],
        correctOptionIndex: 1,
        explanation: 'With "and", if the first operand is falsy, Python returns it immediately and never evaluates the right-hand operand, preventing ZeroDivisionError.',
        skillCategory: 'Logic & Evaluation'
      },
      {
        id: 'py-q2-4',
        type: 'output_prediction',
        prompt: 'What is the value of result after this loop?',
        codeLanguage: 'python',
        codeSnippet: 'result = []\nfor i in range(3):\n    for j in range(2):\n        if (i + j) % 2 == 0:\n            result.append((i, j))\nprint(len(result))',
        options: [
          '2',
          '3',
          '4',
          '6'
        ],
        correctOptionIndex: 1,
        explanation: 'Pairs are (0,0) -> sum 0 (even), (0,1) -> 1 (odd), (1,0) -> 1 (odd), (1,1) -> 2 (even), (2,0) -> 2 (even), (2,1) -> 3 (odd). Three pairs satisfy the condition.',
        skillCategory: 'Nested Loops'
      },
      {
        id: 'py-q2-5',
        type: 'spot_the_bug',
        prompt: 'What happens when running this code?',
        codeLanguage: 'python',
        codeSnippet: 'word = "python"\nword[0] = "P"',
        options: [
          'word becomes "Python"',
          'Raises TypeError: strings in Python are immutable',
          'Raises IndexError: index out of range',
          'Creates a new string reference automatically'
        ],
        correctOptionIndex: 1,
        explanation: 'Strings in Python are immutable. You cannot modify an existing string in-place; attempting item assignment raises a TypeError.',
        skillCategory: 'Mutability'
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE CHECKPOINT 3: FUNCTIONS & SCOPE
  // -------------------------------------------------------------
  {
    id: 'py-mod-3-quiz',
    trackId: 'python',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 6: Functions',
    moduleIndex: 5,
    title: 'Checkpoint 3: Functions & Scope',
    subtitle: 'Default arguments, args/kwargs, scope, and closures',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'py-q3-1',
        type: 'output_prediction',
        prompt: 'What is the output of this famous default argument trap?',
        codeLanguage: 'python',
        codeSnippet: 'def add_item(item, basket=[]):\n    basket.append(item)\n    return basket\n\nprint(add_item("apple"))\nprint(add_item("banana"))',
        options: [
          '["apple"] then ["banana"]',
          '["apple"] then ["apple", "banana"]',
          '["apple", "banana"] both times',
          'TypeError'
        ],
        correctOptionIndex: 1,
        explanation: 'Default arguments are evaluated once when the function is defined, not each time it is called. The same list object is reused across calls, so "banana" is appended to the existing list.',
        skillCategory: 'Functions & Defaults'
      },
      {
        id: 'py-q3-2',
        type: 'output_prediction',
        prompt: 'What will print from this function with *args and **kwargs?',
        codeLanguage: 'python',
        codeSnippet: 'def demo(*args, **kwargs):\n    return len(args) + len(kwargs)\n\nprint(demo(1, 2, a=3, b=4, c=5))',
        options: [
          '5',
          '2',
          '3',
          'TypeError'
        ],
        correctOptionIndex: 0,
        explanation: 'args captures positional arguments as a tuple (1, 2) with length 2. kwargs captures keyword arguments as a dict (a, b, c) with length 3. 2 + 3 = 5.',
        skillCategory: 'Variable Arguments'
      },
      {
        id: 'py-q3-3',
        type: 'conceptual',
        prompt: 'In Python, what is the order of scope resolution (LEGB rule)?',
        codeLanguage: 'python',
        options: [
          'Local -> Enclosing -> Global -> Built-in',
          'Global -> Local -> Enclosing -> Built-in',
          'Local -> Global -> Enclosing -> Built-in',
          'Built-in -> Global -> Enclosing -> Local'
        ],
        correctOptionIndex: 0,
        explanation: 'Python resolves variables using the LEGB rule: Local namespace first, then Enclosing functions, then Global module-level, and finally Built-in names.',
        skillCategory: 'Scope Resolution'
      },
      {
        id: 'py-q3-4',
        type: 'output_prediction',
        prompt: 'What does this lambda expression compute?',
        codeLanguage: 'python',
        codeSnippet: 'nums = [1, 2, 3, 4]\nresult = list(filter(lambda x: x % 2 != 0, map(lambda x: x * 2, nums)))\nprint(result)',
        options: [
          '[2, 4, 6, 8]',
          '[]',
          '[1, 3]',
          '[2, 6]'
        ],
        correctOptionIndex: 1,
        explanation: 'map doubles every number, producing [2, 4, 6, 8] (all even). filter checks for odd numbers (x % 2 != 0); since none are odd, it returns an empty list [].',
        skillCategory: 'Functional Python'
      },
      {
        id: 'py-q3-5',
        type: 'output_prediction',
        prompt: 'What will this closure print?',
        codeLanguage: 'python',
        codeSnippet: 'def make_multiplier(n):\n    return lambda x: x * n\n\ndbl = make_multiplier(2)\nprint(dbl(10))',
        options: [
          '20',
          '10',
          '2',
          'TypeError'
        ],
        correctOptionIndex: 0,
        explanation: 'make_multiplier returns a lambda closure that remembers n = 2. Calling dbl(10) evaluates 10 * 2 = 20.',
        skillCategory: 'Closures'
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE CHECKPOINT 4: DATA STRUCTURES (LISTS, DICTS, SETS)
  // -------------------------------------------------------------
  {
    id: 'py-mod-4-quiz',
    trackId: 'python',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 7: Lists & Arrays',
    moduleIndex: 6,
    title: 'Checkpoint 4: Data Structures & Comprehensions',
    subtitle: 'Lists, dictionaries, sets, tuples, and comprehensions',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'py-q4-1',
        type: 'output_prediction',
        prompt: 'What does this list comprehension evaluate to?',
        codeLanguage: 'python',
        codeSnippet: 'nums = [1, 2, 3, 4, 5]\nres = [x * 2 for x in nums if x > 2]\nprint(res)',
        options: [
          '[2, 4, 6, 8, 10]',
          '[6, 8, 10]',
          '[3, 4, 5]',
          '[4, 6, 8, 10]'
        ],
        correctOptionIndex: 1,
        explanation: 'The filter x > 2 keeps 3, 4, and 5. Then x * 2 multiplies them to yield [6, 8, 10].',
        skillCategory: 'Comprehensions'
      },
      {
        id: 'py-q4-2',
        type: 'output_prediction',
        prompt: 'What is the output of this reference assignment?',
        codeLanguage: 'python',
        codeSnippet: 'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))',
        options: [
          '3',
          '4',
          'TypeError',
          'None'
        ],
        correctOptionIndex: 1,
        explanation: 'In Python, assignment b = a creates a reference to the same list object in memory. Appending to b modifies the underlying list that a also points to, so len(a) is 4.',
        skillCategory: 'References & Memory'
      },
      {
        id: 'py-q4-3',
        type: 'output_prediction',
        prompt: 'What does dict.get() return when a key is absent?',
        codeLanguage: 'python',
        codeSnippet: 'data = {"a": 1}\nprint(data.get("b", 99), data.get("a", 99))',
        options: [
          '99 1',
          'KeyError 1',
          'None 1',
          '99 99'
        ],
        correctOptionIndex: 0,
        explanation: 'dict.get(key, default) returns the specified default value (99) if the key is missing, avoiding a KeyError. For an existing key ("a"), it returns the stored value (1).',
        skillCategory: 'Dictionaries'
      },
      {
        id: 'py-q4-4',
        type: 'spot_the_bug',
        prompt: 'Why does attempting to add a list to a set fail?',
        codeLanguage: 'python',
        codeSnippet: 's = set()\ns.add([1, 2])',
        options: [
          'Sets can only contain strings',
          'Lists are mutable and therefore unhashable',
          'Sets have a fixed capacity of 10 items',
          'The add() method only accepts integers'
        ],
        correctOptionIndex: 1,
        explanation: 'Set elements must be hashable so Python can perform O(1) lookups. Because lists are mutable, their contents can change, making them unhashable (TypeError: unhashable type: "list").',
        skillCategory: 'Sets & Hashing'
      },
      {
        id: 'py-q4-5',
        type: 'output_prediction',
        prompt: 'What is the result of set intersection and union?',
        codeLanguage: 'python',
        codeSnippet: 's1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint(sorted(list((s1 | s2) - (s1 & s2))))',
        options: [
          '[2, 3]',
          '[1, 4]',
          '[1, 2, 3, 4]',
          '[]'
        ],
        correctOptionIndex: 1,
        explanation: 's1 | s2 (union) is {1, 2, 3, 4}. s1 & s2 (intersection) is {2, 3}. Subtracting intersection from union gives the symmetric difference {1, 4}.',
        skillCategory: 'Sets'
      }
    ]
  },

  // -------------------------------------------------------------
  // PYTHON FINAL CERTIFICATION EXAM (20 QUESTIONS)
  // -------------------------------------------------------------
  {
    id: 'python-final-exam',
    trackId: 'python',
    kind: 'final_exam',
    title: 'Python Professional Mastery: Final Certification Exam',
    subtitle: 'Comprehensive 20-question evaluation of Python engineering skills',
    passingScorePercent: 70,
    xpReward: 300,
    timeLimitSeconds: 1200, // 20 minutes
    questions: [
      {
        id: 'py-fe-1',
        type: 'output_prediction',
        prompt: 'What will this code print regarding list slicing and indexing?',
        codeLanguage: 'python',
        codeSnippet: 'nums = [10, 20, 30, 40, 50]\nprint(nums[-3:5:2])',
        options: [
          '[30, 50]',
          '[30, 40, 50]',
          '[20, 40]',
          '[40, 50]'
        ],
        correctOptionIndex: 0,
        explanation: 'Index -3 corresponds to element 30. Slicing with step 2 from index 2 up to index 5 selects index 2 (30) and index 4 (50). The result is [30, 50].',
        skillCategory: 'Slicing & Indexing'
      },
      {
        id: 'py-fe-2',
        type: 'output_prediction',
        prompt: 'What is the output of this dictionary comprehension with duplicate values?',
        codeLanguage: 'python',
        codeSnippet: 'words = ["apple", "bat", "cat", "car"]\nd = {w[0]: w for w in words}\nprint(sorted(d.keys()), len(d))',
        options: [
          "['a', 'b', 'c'] 3",
          "['a', 'b', 'c', 'c'] 4",
          "['a', 'b'] 2",
          "Error: duplicate key"
        ],
        correctOptionIndex: 0,
        explanation: 'Dictionary keys must be unique. When "car" is processed, its first letter "c" overwrites the previous entry "cat". The final keys are "a", "b", and "c" (length 3).',
        skillCategory: 'Dictionaries'
      },
      {
        id: 'py-fe-3',
        type: 'output_prediction',
        prompt: 'What does this generator function output when iterated?',
        codeLanguage: 'python',
        codeSnippet: 'def counter():\n    yield 1\n    yield 2\n    return 3\n\nc = counter()\nprint(next(c), next(c))',
        options: [
          '1 2',
          '1 3',
          '1 2 3',
          'StopIteration'
        ],
        correctOptionIndex: 0,
        explanation: 'Each call to next() resumes execution until the next yield statement. The first call yields 1, and the second call yields 2. (The return value is stored in the StopIteration exception).',
        skillCategory: 'Generators'
      },
      {
        id: 'py-fe-4',
        type: 'conceptual',
        prompt: 'What is the difference between "is" and "==" in Python?',
        codeLanguage: 'python',
        codeSnippet: 'a == b  vs  a is b',
        options: [
          '"==" compares memory addresses (identity), while "is" compares values (equality)',
          '"is" compares memory addresses (identity), while "==" compares values (equality)',
          'They are exact synonyms in Python 3',
          '"is" can only be used with numbers and strings'
        ],
        correctOptionIndex: 1,
        explanation: '"==" checks if the values are equal by invoking __eq__(), while "is" checks whether two variables point to the exact same object in memory (id(a) == id(b)).',
        skillCategory: 'Identity vs Equality'
      },
      {
        id: 'py-fe-5',
        type: 'output_prediction',
        prompt: 'What will print regarding class inheritance and super()?',
        codeLanguage: 'python',
        codeSnippet: 'class Base:\n    def greet(self):\n        return "Hello"\n\nclass Child(Base):\n    def greet(self):\n        return super().greet() + ", World!"\n\nprint(Child().greet())',
        options: [
          '"Hello, World!"',
          '"Hello"',
          '"World!"',
          'AttributeError'
        ],
        correctOptionIndex: 0,
        explanation: 'super().greet() delegates the call to Base.greet(), which returns "Hello". Concatenating ", World!" produces "Hello, World!".',
        skillCategory: 'OOP & Inheritance'
      },
      {
        id: 'py-fe-6',
        type: 'output_prediction',
        prompt: 'What happens when modifying a mutable element inside a tuple?',
        codeLanguage: 'python',
        codeSnippet: 't = ([1, 2], "DevForge")\nt[0].append(3)\nprint(t[0])',
        options: [
          '[1, 2, 3]',
          'TypeError: tuple is immutable',
          '[1, 2]',
          'AttributeError'
        ],
        correctOptionIndex: 0,
        explanation: 'While the tuple itself is immutable (you cannot replace index 0 with a different object), the object at index 0 is a mutable list. Calling .append() mutates the list in-place successfully.',
        skillCategory: 'Mutability & Tuples'
      },
      {
        id: 'py-fe-7',
        type: 'output_prediction',
        prompt: 'What does the * operator do in this function call?',
        codeLanguage: 'python',
        codeSnippet: 'def calc(a, b, c):\n    return a + b * c\n\nparams = [2, 3, 4]\nprint(calc(*params))',
        options: [
          '14',
          '20',
          'TypeError',
          '9'
        ],
        correctOptionIndex: 0,
        explanation: 'The * operator unpacks the elements of params into positional arguments a=2, b=3, c=4. The calculation is 2 + (3 * 4) = 14.',
        skillCategory: 'Unpacking'
      },
      {
        id: 'py-fe-8',
        type: 'spot_the_bug',
        prompt: 'What is the logical problem in this exception handling block?',
        codeLanguage: 'python',
        codeSnippet: 'try:\n    val = int("abc")\nexcept Exception:\n    print("Handled Exception")\nexcept ValueError:\n    print("Handled ValueError")',
        options: [
          'ValueError will never be reached because Exception is its superclass and is caught first',
          'int() cannot be placed inside a try block',
          'try blocks must contain at least three statements',
          'The except block requires an "as" alias'
        ],
        correctOptionIndex: 0,
        explanation: 'Python executes the first matching except clause. Since ValueError inherits from Exception, the first clause catches it, making the second clause unreachable.',
        skillCategory: 'Exception Handling'
      },
      {
        id: 'py-fe-9',
        type: 'output_prediction',
        prompt: 'What does this decorator do to the wrapped function output?',
        codeLanguage: 'python',
        codeSnippet: 'def add_exclamation(func):\n    def wrapper(*args):\n        return func(*args) + "!"\n    return wrapper\n\n@add_exclamation\ndef greet(name):\n    return f"Hi {name}"\n\nprint(greet("Dev"))',
        options: [
          '"Hi Dev!"',
          '"Hi Dev"',
          '"!Hi Dev"',
          'TypeError'
        ],
        correctOptionIndex: 0,
        explanation: 'The decorator replaces greet with wrapper. When greet("Dev") is called, wrapper calls func("Dev") -> "Hi Dev", then appends "!" to return "Hi Dev!".',
        skillCategory: 'Decorators'
      },
      {
        id: 'py-fe-10',
        type: 'output_prediction',
        prompt: 'What will print regarding class-level variables vs instance-level variables?',
        codeLanguage: 'python',
        codeSnippet: 'class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\nc1 = Counter()\nc2 = Counter()\nprint(c1.count, Counter.count)',
        options: [
          '2 2',
          '1 2',
          '0 2',
          '1 1'
        ],
        correctOptionIndex: 0,
        explanation: 'count is a class attribute shared across all instances. Every __init__ increments Counter.count. Since two instances were created, both c1.count and Counter.count reflect 2.',
        skillCategory: 'OOP Classes'
      },
      {
        id: 'py-fe-11',
        type: 'output_prediction',
        prompt: 'What does zip() return when input iterables have different lengths?',
        codeLanguage: 'python',
        codeSnippet: 'letters = ["a", "b", "c"]\nnumbers = [1, 2]\nprint(list(zip(letters, numbers)))',
        options: [
          "[('a', 1), ('b', 2)]",
          "[('a', 1), ('b', 2), ('c', None)]",
          "ValueError: length mismatch",
          "[('a', 1)]"
        ],
        correctOptionIndex: 0,
        explanation: 'In Python, zip() stops pairing elements as soon as the shortest input iterable is exhausted. Thus, ("c") is truncated, resulting in [("a", 1), ("b", 2)].',
        skillCategory: 'Built-in Functions'
      },
      {
        id: 'py-fe-12',
        type: 'output_prediction',
        prompt: 'What is the output of any() and all() on these lists?',
        codeLanguage: 'python',
        codeSnippet: 'a = [True, False, True]\nb = [1, 2, 3]\nprint(any(a), all(b))',
        options: [
          'True True',
          'False True',
          'True False',
          'False False'
        ],
        correctOptionIndex: 0,
        explanation: 'any(a) is True because at least one element is True. all(b) is True because all integers in [1, 2, 3] are non-zero (truthy).',
        skillCategory: 'Built-in Functions'
      },
      {
        id: 'py-fe-13',
        type: 'output_prediction',
        prompt: 'What will be printed by this string format method?',
        codeLanguage: 'python',
        codeSnippet: 'name = "Alex"\nscore = 98.456\nprint(f"{name}: {score:.1f}%")',
        options: [
          '"Alex: 98.5%"',
          '"Alex: 98.4%"',
          '"Alex: 98%"',
          '"Alex: 98.456%"'
        ],
        correctOptionIndex: 0,
        explanation: 'The format specifier .1f rounds the floating-point number to 1 decimal place. 98.456 rounds up to 98.5.',
        skillCategory: 'String Formatting'
      },
      {
        id: 'py-fe-14',
        type: 'conceptual',
        prompt: 'Which protocol must an object implement to be usable in a "with" statement?',
        codeLanguage: 'python',
        codeSnippet: 'with open("file.txt") as f:\n    pass',
        options: [
          '__enter__() and __exit__()',
          '__iter__() and __next__()',
          '__start__() and __stop__()',
          '__open__() and __close__()'
        ],
        correctOptionIndex: 0,
        explanation: 'The Context Manager protocol in Python requires __enter__() (executed before entering the with block) and __exit__() (executed upon exiting, handling cleanup/exceptions).',
        skillCategory: 'Context Managers'
      },
      {
        id: 'py-fe-15',
        type: 'output_prediction',
        prompt: 'What is the output of list sorting with a custom key?',
        codeLanguage: 'python',
        codeSnippet: 'words = ["python", "c", "javascript", "go"]\nwords.sort(key=len)\nprint(words[0], words[-1])',
        options: [
          '"c" "javascript"',
          '"c" "python"',
          '"go" "javascript"',
          '"python" "go"'
        ],
        correctOptionIndex: 0,
        explanation: 'key=len sorts words by string length. "c" has length 1 (shortest, index 0) and "javascript" has length 10 (longest, index -1).',
        skillCategory: 'Sorting'
      },
      {
        id: 'py-fe-16',
        type: 'output_prediction',
        prompt: 'What is the output of this dictionary pop() method with default fallback?',
        codeLanguage: 'python',
        codeSnippet: 'd = {"x": 10, "y": 20}\nval = d.pop("z", 99)\nprint(val, len(d))',
        options: [
          '99 2',
          'None 2',
          'KeyError 2',
          '99 3'
        ],
        correctOptionIndex: 0,
        explanation: 'd.pop("z", 99) attempts to remove "z"; since "z" is not present, it returns the provided default 99 without modifying the dictionary (length remains 2).',
        skillCategory: 'Dictionaries'
      },
      {
        id: 'py-fe-17',
        type: 'output_prediction',
        prompt: 'What does this recursive function return?',
        codeLanguage: 'python',
        codeSnippet: 'def rec(n):\n    if n <= 1:\n        return 1\n    return n * rec(n - 1)\n\nprint(rec(4))',
        options: [
          '24',
          '10',
          '12',
          '16'
        ],
        correctOptionIndex: 0,
        explanation: 'This is the factorial function. rec(4) = 4 * rec(3) = 4 * 3 * rec(2) = 4 * 3 * 2 * rec(1) = 24.',
        skillCategory: 'Recursion'
      },
      {
        id: 'py-fe-18',
        type: 'conceptual',
        prompt: 'What is the worst-case time complexity of checking membership in a Python set vs a Python list?',
        codeLanguage: 'python',
        codeSnippet: 'x in my_set   vs   x in my_list',
        options: [
          'Set average O(1) vs List O(N)',
          'Set O(N) vs List O(1)',
          'Both are always O(log N)',
          'Both are always O(1)'
        ],
        correctOptionIndex: 0,
        explanation: 'Python sets are implemented as hash tables with average O(1) membership lookup. Lists must be scanned linearly, taking O(N) time.',
        skillCategory: 'Complexity & Data Structures'
      },
      {
        id: 'py-fe-19',
        type: 'output_prediction',
        prompt: 'What will print when using the enumerate() function with a custom start?',
        codeLanguage: 'python',
        codeSnippet: 'items = ["a", "b"]\nres = list(enumerate(items, start=1))\nprint(res[0])',
        options: [
          '(1, "a")',
          '(0, "a")',
          '("a", 1)',
          '(1, "b")'
        ],
        correctOptionIndex: 0,
        explanation: 'enumerate(iterable, start=1) starts the counter index at 1. The first yielded tuple is (1, "a").',
        skillCategory: 'Built-in Functions'
      },
      {
        id: 'py-fe-20',
        type: 'output_prediction',
        prompt: 'What does this deep/shallow copy expression demonstrate?',
        codeLanguage: 'python',
        codeSnippet: 'import copy\na = [[1, 2], [3, 4]]\nb = copy.copy(a)\nb[0].append(99)\nprint(len(a[0]))',
        options: [
          '3',
          '2',
          '4',
          'TypeError'
        ],
        correctOptionIndex: 0,
        explanation: 'copy.copy(a) creates a shallow copy. The outer list is duplicated, but the nested inner lists are still the exact same references. Mutating b[0] mutates a[0], so its length is 3.',
        skillCategory: 'Copying & References'
      }
    ]
  }
];
