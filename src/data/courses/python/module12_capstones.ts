import { Lesson } from '../../../types';

export const pythonModule12Lessons: Lesson[] = [
  {
    "id": "py-106-capstone-unit-converter",
    "title": "106. Capstone 1: Temperature & Unit Conversion Engine",
    "slug": "capstone-unit-converter",
    "language": "python",
    "category": "Module 12: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Construct a temperature conversion engine converting Celsius, Fahrenheit, and Kelvin.",
    "concepts": [
      "Object-oriented architecture",
      "Mathematical translation",
      "Validation"
    ],
    "analogy": "A meteorological weather station sensor converting raw measurements into regional forecast standards.",
    "explanationMarkdown": "### Capstone 1: Temperature Converter\nFormulas:\n* `F = (C * 9/5) + 32`\n* `K = C + 273.15`",
    "workedExample": {
      "title": "Worked Example: Boiling point conversion",
      "code": "c = 100\nf = (c * 9/5) + 32\nprint(f)",
      "explanation": "\u2022 100C is 212F.",
      "expectedOutput": "212.0"
    },
    "exerciseSteps": [
      "Define `class Temperature: def __init__(self, celsius): self.celsius = celsius; def to_fahrenheit(self): return (self.celsius * 9 / 5) + 32; def to_kelvin(self): return self.celsius + 273.15`.",
      "Instantiate `t = Temperature(25)`.",
      "Print `t.to_fahrenheit()`."
    ],
    "initialCode": "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n    def to_fahrenheit(self):\n        return (self.celsius * 9 / 5) + 32\n    def to_kelvin(self):\n        return self.celsius + 273.15\nt = Temperature(25)\nprint(t.to_fahrenheit())\n",
    "solutionCode": "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n    def to_fahrenheit(self):\n        return (self.celsius * 9 / 5) + 32\n    def to_kelvin(self):\n        return self.celsius + 273.15\nt = Temperature(25)\nprint(t.to_fahrenheit())\n",
    "hints": [
      "Return `(self.celsius * 9 / 5) + 32`"
    ],
    "testCases": [
      {
        "id": "py-106-tc-1",
        "description": "t.to_fahrenheit() is 77 for 25C",
        "testFn": "t.to_fahrenheit() === 77"
      }
    ]
  },
  {
    "id": "py-107-capstone-word-frequency",
    "title": "107. Capstone 2: Text Word Frequency Analyzer",
    "slug": "capstone-word-frequency",
    "language": "python",
    "category": "Module 12: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Analyze text passages and compute a frequency dictionary mapping words to their occurrence count.",
    "concepts": [
      "String tokenization",
      "Dictionary counting",
      "Text analytics"
    ],
    "analogy": "A search engine indexer counting keyword occurrences to rank web page relevance.",
    "explanationMarkdown": "### Word Frequency Analyzer\n```python\ntext = \"python is great and python is fun\"\nwords = text.lower().split(\" \")\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\n```",
    "workedExample": {
      "title": "Worked Example: Counting word pairs",
      "code": "words = [\"a\", \"b\", \"a\"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint(counts[\"a\"])",
      "explanation": "\u2022 'a' appears twice.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Write `def count_words(text): words = text.lower().split(\" \"); counts = {}; for w in words: counts[w] = counts.get(w, 0) + 1; return counts`.",
      "Test with `res = count_words(\"code code python\")`.",
      "Print `res[\"code\"]`."
    ],
    "initialCode": "def count_words(text):\n    words = text.lower().split(\" \")\n    counts = {}\n    for w in words:\n        counts[w] = counts.get(w, 0) + 1\n    return counts\nres = count_words(\"code code python\")\nprint(res[\"code\"])\n",
    "solutionCode": "def count_words(text):\n    words = text.lower().split(\" \")\n    counts = {}\n    for w in words:\n        counts[w] = counts.get(w, 0) + 1\n    return counts\nres = count_words(\"code code python\")\nprint(res[\"code\"])\n",
    "hints": [
      "Use `counts.get(w, 0) + 1`"
    ],
    "testCases": [
      {
        "id": "py-107-tc-1",
        "description": "res has code count 2 and python count 1",
        "testFn": "res.code === 2 && res.python === 1"
      }
    ]
  },
  {
    "id": "py-108-capstone-shopping-cart",
    "title": "108. Capstone 3: Shopping Cart & Receipt Engine",
    "slug": "capstone-shopping-cart",
    "language": "python",
    "category": "Module 12: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Construct an e-commerce shopping cart class calculating itemized subtotals, discounts, and final receipts.",
    "concepts": [
      "Cart state",
      "List aggregation",
      "Percentage calculations"
    ],
    "analogy": "A point-of-sale cash register at a retail checkout counter.",
    "explanationMarkdown": "### Shopping Cart Engine\n```python\nclass Cart:\n    def __init__(self):\n        self.items = []\n    def add(self, name, price, qty=1):\n        self.items.append({\"name\": name, \"price\": price, \"qty\": qty})\n    def get_total(self):\n        return sum(i[\"price\"] * i[\"qty\"] for i in self.items)\n```",
    "workedExample": {
      "title": "Worked Example: Cart subtotal",
      "code": "items = [{\"price\": 20, \"qty\": 2}, {\"price\": 10, \"qty\": 1}]\nsubtotal = sum(i[\"price\"] * i[\"qty\"] for i in items)\nprint(subtotal)",
      "explanation": "\u2022 40 + 10 = 50.",
      "expectedOutput": "50"
    },
    "exerciseSteps": [
      "Define `class ShoppingCart: def __init__(self): self.items = []; def add(self, name, price, qty=1): self.items.append({\"price\": price, \"qty\": qty}); def get_total(self): return sum(i[\"price\"] * i[\"qty\"] for i in self.items)`.",
      "Create `c = ShoppingCart()`.",
      "Add item: `c.add(\"Keyboard\", 50, 2)`.",
      "Print `c.get_total()`."
    ],
    "initialCode": "class ShoppingCart:\n    def __init__(self):\n        self.items = []\n    def add(self, name, price, qty=1):\n        self.items.append({\"name\": name, \"price\": price, \"qty\": qty})\n    def get_total(self):\n        return sum(i[\"price\"] * i[\"qty\"] for i in self.items)\nc = ShoppingCart()\nc.add(\"Keyboard\", 50, 2)\nprint(c.get_total())\n",
    "solutionCode": "class ShoppingCart:\n    def __init__(self):\n        self.items = []\n    def add(self, name, price, qty=1):\n        self.items.append({\"name\": name, \"price\": price, \"qty\": qty})\n    def get_total(self):\n        return sum(i[\"price\"] * i[\"qty\"] for i in self.items)\nc = ShoppingCart()\nc.add(\"Keyboard\", 50, 2)\nprint(c.get_total())\n",
    "hints": [
      "Total is `50 * 2 = 100`"
    ],
    "testCases": [
      {
        "id": "py-108-tc-1",
        "description": "c.get_total() is 100",
        "testFn": "c.get_total() === 100"
      }
    ]
  },
  {
    "id": "py-109-capstone-contact-book",
    "title": "109. Capstone 4: Contact Book with Dictionary CRUD",
    "slug": "capstone-contact-book",
    "language": "python",
    "category": "Module 12: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Build an in-memory contact book application with Add, Search, and Delete operations.",
    "concepts": [
      "CRUD operations",
      "Dictionary indexing",
      "Safe searching"
    ],
    "analogy": "The smartphone Contacts app allowing you to save, lookup, and delete telephone numbers.",
    "explanationMarkdown": "### Contact Book Application\nImplement:\n* `add_contact(name, phone)`\n* `get_contact(name)`\n* `delete_contact(name)`",
    "workedExample": {
      "title": "Worked Example: Lookup contact",
      "code": "contacts = {\"Alice\": \"555-0100\"}\nprint(contacts.get(\"Alice\"))",
      "explanation": "\u2022 Retrieves 555-0100.",
      "expectedOutput": "555-0100"
    },
    "exerciseSteps": [
      "Define `class ContactBook: def __init__(self): self.contacts = {}; def add(self, name, phone): self.contacts[name] = phone; def get(self, name): return self.contacts.get(name, \"Not found\")`.",
      "Instantiate book, add `\"Sarah\"` with phone `\"555-1234\"`.",
      "Print `book.get(\"Sarah\")`."
    ],
    "initialCode": "class ContactBook:\n    def __init__(self):\n        self.contacts = {}\n    def add(self, name, phone):\n        self.contacts[name] = phone\n    def get(self, name):\n        return self.contacts.get(name, \"Not found\")\nbook = ContactBook()\nbook.add(\"Sarah\", \"555-1234\")\nprint(book.get(\"Sarah\"))\n",
    "solutionCode": "class ContactBook:\n    def __init__(self):\n        self.contacts = {}\n    def add(self, name, phone):\n        self.contacts[name] = phone\n    def get(self, name):\n        return self.contacts.get(name, \"Not found\")\nbook = ContactBook()\nbook.add(\"Sarah\", \"555-1234\")\nprint(book.get(\"Sarah\"))\n",
    "hints": [
      "Use `book.contacts[name] = phone`"
    ],
    "testCases": [
      {
        "id": "py-109-tc-1",
        "description": "book.get('Sarah') returns 555-1234",
        "testFn": "book.get('Sarah') === '555-1234'"
      }
    ]
  },
  {
    "id": "py-110-capstone-gradebook",
    "title": "110. Capstone 5: Gradebook & Class Statistics Engine",
    "slug": "capstone-gradebook",
    "language": "python",
    "category": "Module 12: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 10,
    "xp": 60,
    "description": "Construct an academic gradebook recording student marks, class averages, high scores, and letter grade distributions.",
    "concepts": [
      "Class design",
      "Math averages",
      "Data analysis",
      "Final Python Capstone"
    ],
    "analogy": "A university professor's grade reporting spreadsheet calculating curve averages and passing honors.",
    "explanationMarkdown": "### Capstone 5: Gradebook Statistics Engine\nCongratulations on reaching Lesson 110! In this final masterclass project, you will build a complete Gradebook that calculates:\n* `add_grade(student, score)`\n* `get_average()`: `sum(scores) / len(scores)`\n* `get_top_student()`: name with highest score",
    "workedExample": {
      "title": "Worked Example: Average grade calculation",
      "code": "grades = [85, 90, 95]\navg = sum(grades) / len(grades)\nprint(f\"Class Average: {avg}\")",
      "explanation": "\u2022 270 / 3 = 90.0.",
      "expectedOutput": "Class Average: 90.0"
    },
    "exerciseSteps": [
      "Define `class Gradebook: def __init__(self): self.grades = {}; def add(self, name, score): self.grades[name] = score; def get_average(self): vals = list(self.grades.values()); return sum(vals) / len(vals)`.",
      "Instantiate gradebook, add `\"Leo\": 90` and `\"Sam\": 80`.",
      "Compute average: `avg = gb.get_average()` and print `avg`."
    ],
    "initialCode": "class Gradebook:\n    def __init__(self):\n        self.grades = {}\n    def add(self, name, score):\n        self.grades[name] = score\n    def get_average(self):\n        vals = list(self.grades.values())\n        return sum(vals) / len(vals)\ngb = Gradebook()\ngb.add(\"Leo\", 90)\ngb.add(\"Sam\", 80)\navg = gb.get_average()\nprint(avg)\n",
    "solutionCode": "class Gradebook:\n    def __init__(self):\n        self.grades = {}\n    def add(self, name, score):\n        self.grades[name] = score\n    def get_average(self):\n        vals = list(self.grades.values())\n        return sum(vals) / len(vals)\ngb = Gradebook()\ngb.add(\"Leo\", 90)\ngb.add(\"Sam\", 80)\navg = gb.get_average()\nprint(avg)\n",
    "hints": [
      "Average of 90 and 80 is 85"
    ],
    "testCases": [
      {
        "id": "py-110-tc-1",
        "description": "avg is 85",
        "testFn": "avg === 85"
      },
      {
        "id": "py-110-tc-2",
        "description": "gb has 2 students",
        "testFn": "Object.keys(gb.grades).length === 2"
      }
    ]
  }
];
