import { Lesson } from '../../../types';

export const pythonModule13Lessons: Lesson[] = [
  {
    "id": "py-111-file-modes",
    "title": "111. Understanding File Access Modes ('r', 'w', 'a')",
    "slug": "file-modes",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Learn the standard file access modes in Python: read ('r'), write ('w'), and append ('a').",
    "concepts": [
      "open(filename, mode)",
      "Modes: r, w, a"
    ],
    "analogy": "A physical guestbook: reading it (r), tearing out all pages to start fresh (w), or writing a new name on the next blank line (a).",
    "explanationMarkdown": "### File Modes\n* `'r'`: Read only (default)\n* `'w'`: Overwrite / create new file\n* `'a'`: Append to end of file",
    "workedExample": {
      "title": "Worked Example: Mode selection",
      "code": "mode = 'w'\nprint(f\"Opening in {mode} mode\")",
      "explanation": "• Sets mode.",
      "expectedOutput": "Opening in w mode"
    },
    "exerciseSteps": [
      "Create `mode = \"r\"`.",
      "Print `mode`."
    ],
    "initialCode": "# Step 1: Create variable 'mode' and set it to \"r\"\n# TODO: Write code below\n\n# Step 2: Print 'mode'\n# TODO: Write code below\n",
    "solutionCode": "mode = \"r\"\nprint(mode)\n",
    "hints": [
      "Concept: Learn the standard file access modes in Python: read ('r'), write ('w'), and append ('a'). Think of it like: A physical guestbook: reading it (r), tearing out all pages to start fresh (w), or writing a new name on the next blank line (a).",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `mode = \"r\"`.\n2. Print `mode`.\nKey Tip: Assign `mode = \"r\"`"
    ],
    "testCases": [
      {
        "id": "py-111-tc-1",
        "description": "mode is r",
        "testFn": "mode === 'r'"
      }
    ]
  },
  {
    "id": "py-112-with-context-manager",
    "title": "112. Safe Resource Handling with 'with' Blocks",
    "slug": "with-context-manager",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Use the with statement to automatically close and clean up file handles and resources.",
    "concepts": [
      "with open(...) as f:",
      "Automatic file closing"
    ],
    "analogy": "An automatic self-closing door: no matter how you leave the room, the door shuts and locks securely behind you.",
    "explanationMarkdown": "### Context Managers (with)\n```python\n# File closes automatically when block exits\n# with open('data.txt', 'r') as f:\n#     content = f.read()\n```",
    "workedExample": {
      "title": "Worked Example: Mock context manager status",
      "code": "closed = True\nprint(f\"File closed safely: {closed}\")",
      "explanation": "• Confirms safe close.",
      "expectedOutput": "File closed safely: True"
    },
    "exerciseSteps": [
      "Create `is_closed = True`.",
      "Print `is_closed`."
    ],
    "initialCode": "# Step 1: Create variable 'is_closed' and set it to True\n# TODO: Write code below\n\n# Step 2: Print 'is_closed'\n# TODO: Write code below\n",
    "solutionCode": "is_closed = True\nprint(is_closed)\n",
    "hints": [
      "Concept: Use the with statement to automatically close and clean up file handles and resources. Think of it like: An automatic self-closing door: no matter how you leave the room, the door shuts and locks securely behind you.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `is_closed = True`.\n2. Print `is_closed`.\nKey Tip: Set `is_closed = True`"
    ],
    "testCases": [
      {
        "id": "py-112-tc-1",
        "description": "is_closed is True",
        "testFn": "is_closed === true"
      }
    ]
  },
  {
    "id": "py-113-reading-lines",
    "title": "113. Reading Lines with .readlines() and Iteration",
    "slug": "reading-lines",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Process text files line-by-line efficiently using list of lines.",
    "concepts": [
      "f.readlines()",
      "Line iteration"
    ],
    "analogy": "Reading a grocery list item by item down the page.",
    "explanationMarkdown": "### Reading Lines\n```python\nlines = [\"line 1\\n\", \"line 2\\n\"]\nfor line in lines:\n    print(line.strip())\n```",
    "workedExample": {
      "title": "Worked Example: Stripping lines",
      "code": "raw_lines = [\"  alpha  \", \"  beta  \"]\nclean = [l.strip() for l in raw_lines]\nprint(clean[0])",
      "explanation": "• Strips whitespace.",
      "expectedOutput": "alpha"
    },
    "exerciseSteps": [
      "Create `lines = [\"user1\", \"user2\"]`.",
      "Print `len(lines)`."
    ],
    "initialCode": "# Step 1: Create variable 'lines' and set it to [\"user1\", \"user2\"]\n# TODO: Write code below\n\n# Step 2: Print 'len(lines)'\n# TODO: Write code below\n",
    "solutionCode": "lines = [\"user1\", \"user2\"]\nprint(len(lines))\n",
    "hints": [
      "Concept: Process text files line-by-line efficiently using list of lines. Think of it like: Reading a grocery list item by item down the page.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `lines = [\"user1\", \"user2\"]`.\n2. Print `len(lines)`.\nKey Tip: Use `len(lines)`"
    ],
    "testCases": [
      {
        "id": "py-113-tc-1",
        "description": "lines has 2 items",
        "testFn": "lines.length === 2"
      }
    ]
  },
  {
    "id": "py-114-writing-files",
    "title": "114. Writing to Files with .write()",
    "slug": "writing-files",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Output formatted strings into file buffers with .write(text).",
    "concepts": [
      "f.write(text)",
      "String buffers"
    ],
    "analogy": "Pressing ink into paper with a typewriter.",
    "explanationMarkdown": "### .write()\n```python\nbuffer = []\nbuffer.append(\"Log entry 1\")\n```",
    "workedExample": {
      "title": "Worked Example: Formatted entry",
      "code": "entry = \"[INFO] App started\"\nprint(entry)",
      "explanation": "• Formatted log entry.",
      "expectedOutput": "[INFO] App started"
    },
    "exerciseSteps": [
      "Create `log = \"Status: OK\"`.",
      "Print `log`."
    ],
    "initialCode": "# Step 1: Create variable 'log' and set it to \"Status: OK\"\n# TODO: Write code below\n\n# Step 2: Print 'log'\n# TODO: Write code below\n",
    "solutionCode": "log = \"Status: OK\"\nprint(log)\n",
    "hints": [
      "Concept: Output formatted strings into file buffers with .write(text). Think of it like: Pressing ink into paper with a typewriter.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `log = \"Status: OK\"`.\n2. Print `log`.\nKey Tip: Assign `log = \"Status: OK\"`"
    ],
    "testCases": [
      {
        "id": "py-114-tc-1",
        "description": "log is Status: OK",
        "testFn": "log === 'Status: OK'"
      }
    ]
  },
  {
    "id": "py-115-json-dump-dumps",
    "title": "115. Serializing Python to JSON (json.dumps)",
    "slug": "json-dumps",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Convert Python dictionaries and lists into universal JSON string representation.",
    "concepts": [
      "json.dumps(obj)",
      "Serialization"
    ],
    "analogy": "Translating an English speech into Esperanto so anyone in the world can understand it.",
    "explanationMarkdown": "### json.dumps\n```python\nimport json\ndata = {\"name\": \"Alex\", \"age\": 25}\n# json_str = json.dumps(data)\n```",
    "workedExample": {
      "title": "Worked Example: Dict to string representation",
      "code": "payload = {\"status\": 200}\nprint(payload[\"status\"])",
      "explanation": "• 200.",
      "expectedOutput": "200"
    },
    "exerciseSteps": [
      "Create `record = {\"active\": True, \"id\": 42}`.",
      "Print `record[\"id\"]`."
    ],
    "initialCode": "# Step 1: Create variable 'record' and set it to {\"active\": True, \"id\": 42}\n# TODO: Write code below\n\n# Step 2: Print 'record[\"id\"]'\n# TODO: Write code below\n",
    "solutionCode": "record = {\"active\": True, \"id\": 42}\nprint(record[\"id\"])\n",
    "hints": [
      "Concept: Convert Python dictionaries and lists into universal JSON string representation. Think of it like: Translating an English speech into Esperanto so anyone in the world can understand it.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `record = {\"active\": True, \"id\": 42}`.\n2. Print `record[\"id\"]`.\nKey Tip: Access `record[\"id\"]`"
    ],
    "testCases": [
      {
        "id": "py-115-tc-1",
        "description": "record id is 42",
        "testFn": "record.id === 42"
      }
    ]
  },
  {
    "id": "py-116-json-load-loads",
    "title": "116. Deserializing JSON to Python (json.loads)",
    "slug": "json-loads",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Parse JSON strings into native Python dictionaries and lists.",
    "concepts": [
      "json.loads(string)",
      "Deserialization"
    ],
    "analogy": "Unpacking a flat-packed desk delivered from IKEA into actual wooden furniture.",
    "explanationMarkdown": "### json.loads\nConverts a JSON formatted string back into native dictionary.",
    "workedExample": {
      "title": "Worked Example: Parsed response",
      "code": "user = {\"username\": \"dev\", \"score\": 100}\nprint(user[\"username\"])",
      "explanation": "• Accesses parsed username.",
      "expectedOutput": "dev"
    },
    "exerciseSteps": [
      "Create `res = {\"token\": \"abc-123\", \"ok\": True}`.",
      "Print `res[\"token\"]`."
    ],
    "initialCode": "# Step 1: Create variable 'res' and set it to {\"token\": \"abc-123\", \"ok\": True}\n# TODO: Write code below\n\n# Step 2: Print 'res[\"token\"]'\n# TODO: Write code below\n",
    "solutionCode": "res = {\"token\": \"abc-123\", \"ok\": True}\nprint(res[\"token\"])\n",
    "hints": [
      "Concept: Parse JSON strings into native Python dictionaries and lists. Think of it like: Unpacking a flat-packed desk delivered from IKEA into actual wooden furniture.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `res = {\"token\": \"abc-123\", \"ok\": True}`.\n2. Print `res[\"token\"]`.\nKey Tip: Access `res[\"token\"]`"
    ],
    "testCases": [
      {
        "id": "py-116-tc-1",
        "description": "res token is abc-123",
        "testFn": "res.token === 'abc-123'"
      }
    ]
  },
  {
    "id": "py-117-csv-parsing-basics",
    "title": "117. CSV Data Processing",
    "slug": "csv-parsing-basics",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Parse comma-separated values into structured rows of data.",
    "concepts": [
      "CSV parsing",
      "Splitting comma delimiters"
    ],
    "analogy": "Reading columns of an Excel spreadsheet row by row.",
    "explanationMarkdown": "### CSV Parsing\n```python\nheader = \"name,email,role\".split(\",\")\n```",
    "workedExample": {
      "title": "Worked Example: Splitting CSV row",
      "code": "row = \"Apple,1.50,10\".split(\",\")\nprint(row[0])",
      "explanation": "• Apple.",
      "expectedOutput": "Apple"
    },
    "exerciseSteps": [
      "Create `row = \"Alice,Engineering,Lead\".split(\",\")`.",
      "Print `row[1]`."
    ],
    "initialCode": "# Step 1: Create variable 'row' and set it to \"Alice,Engineering,Lead\".split(\",\")\n# TODO: Write code below\n\n# Step 2: Print 'row[1]'\n# TODO: Write code below\n",
    "solutionCode": "row = \"Alice,Engineering,Lead\".split(\",\")\nprint(row[1])\n",
    "hints": [
      "Concept: Parse comma-separated values into structured rows of data. Think of it like: Reading columns of an Excel spreadsheet row by row.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `row = \"Alice,Engineering,Lead\".split(\",\")`.\n2. Print `row[1]`.\nKey Tip: Index 1 is Engineering"
    ],
    "testCases": [
      {
        "id": "py-117-tc-1",
        "description": "row[1] is Engineering",
        "testFn": "row[1] === 'Engineering'"
      }
    ]
  },
  {
    "id": "py-118-custom-context-manager-class",
    "title": "118. Creating Context Managers with __enter__ & __exit__",
    "slug": "custom-context-manager-class",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Equip custom classes with context manager superpowers using __enter__ and __exit__ methods.",
    "concepts": [
      "__enter__(self)",
      "__exit__(self, exc_type, exc_val, exc_tb)"
    ],
    "analogy": "Entering a museum (getting your hand stamped) and exiting (returning audio headphones at the door).",
    "explanationMarkdown": "### __enter__ and __exit__\n```python\nclass DatabaseConnection:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        pass\n```",
    "workedExample": {
      "title": "Worked Example: Enter/Exit Class",
      "code": "class Timer:\n    def __enter__(self): return \"started\"\n    def __exit__(self, a, b, c): pass\nt = Timer()\nprint(t.__enter__())",
      "explanation": "• Returns started.",
      "expectedOutput": "started"
    },
    "exerciseSteps": [
      "Define `class Lock: def __enter__(self): return \"locked\"; def __exit__(self, a, b, c): pass`.",
      "Create `l = Lock()` and print `l.__enter__()`."
    ],
    "initialCode": "# Step 1: Define 'class Lock: def __enter__(self): return \"locked\"; def __exit__(self, a, b, c): pass'\nclass Lock:\n    def __enter__(self):\n        # TODO: Implement method body\n        pass\n\n    def __exit__(self, a, b, c):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create 'l = Lock()' and print 'l.__enter__()'\n# TODO: Write code below\n",
    "solutionCode": "class Lock:\n    def __enter__(self):\n        return \"locked\"\n    def __exit__(self, a, b, c):\n        pass\nl = Lock()\nprint(l.__enter__())\n",
    "hints": [
      "Concept: Equip custom classes with context manager superpowers using __enter__ and __exit__ methods. Think of it like: Entering a museum (getting your hand stamped) and exiting (returning audio headphones at the door).",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Lock: def __enter__(self): return \"locked\"; def __exit__(self, a, b, c): pass`.\n2. Create `l = Lock()` and print `l.__enter__()`.\nKey Tip: Define `__enter__` returning \"locked\""
    ],
    "testCases": [
      {
        "id": "py-118-tc-1",
        "description": "l.__enter__() returns locked",
        "testFn": "l.__enter__() === 'locked'"
      }
    ]
  },
  {
    "id": "py-119-pathlib-basics",
    "title": "119. Modern Path Manipulation with pathlib",
    "slug": "pathlib-basics",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Join and manage filesystem paths cleanly across Windows, macOS, and Linux.",
    "concepts": [
      "File paths",
      "Cross-platform path delimiters"
    ],
    "analogy": "Writing down turn-by-turn driving directions to a destination address.",
    "explanationMarkdown": "### Paths in Python\n```python\npath = \"/usr/local/bin\"\n```",
    "workedExample": {
      "title": "Worked Example: Joining paths",
      "code": "parts = [\"home\", \"user\", \"docs\"]\nfull = \"/\".join(parts)\nprint(full)",
      "explanation": "• home/user/docs.",
      "expectedOutput": "home/user/docs"
    },
    "exerciseSteps": [
      "Create `filename = \"app.py\"`.",
      "Check if ends with `.py`: `is_py = filename.endswith(\".py\")`.",
      "Print `is_py`."
    ],
    "initialCode": "# Step 1: Create variable 'filename' and set it to \"app.py\"\n# TODO: Write code below\n\n# Step 2: Check if ends with '.py': 'is_py = filename.endswith(\".py\")'\n# TODO: Write code below\n\n# Step 3: Print 'is_py'\n# TODO: Write code below\n",
    "solutionCode": "filename = \"app.py\"\nis_py = filename.endswith(\".py\")\nprint(is_py)\n",
    "hints": [
      "Concept: Join and manage filesystem paths cleanly across Windows, macOS, and Linux. Think of it like: Writing down turn-by-turn driving directions to a destination address.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `filename = \"app.py\"`.\n2. Check if ends with `.py`: `is_py = filename.endswith(\".py\")`.\n3. Print `is_py`.\nKey Tip: Use `filename.endswith(\".py\")`"
    ],
    "testCases": [
      {
        "id": "py-119-tc-1",
        "description": "is_py is True",
        "testFn": "is_py === true"
      }
    ]
  },
  {
    "id": "py-120-module-13-capstone",
    "title": "120. File System Audit Capstone",
    "slug": "file-system-audit-capstone",
    "language": "python",
    "category": "Module 13: File I/O & Context Managers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Scan a collection of filenames, categorize by extension, and compute file counts.",
    "concepts": [
      "Dictionary aggregation",
      "String suffix checks"
    ],
    "analogy": "An office manager organizing a cabinet by sorting documents into PDF, DOC, and TXT folders.",
    "explanationMarkdown": "### File Audit\nGroup files by extension into a summary dictionary.",
    "workedExample": {
      "title": "Worked Example: Extension grouping",
      "code": "files = [\"a.py\", \"b.py\", \"c.txt\"]\npy_count = sum(1 for f in files if f.endswith(\".py\"))\nprint(py_count)",
      "explanation": "• 2 python files.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `files = [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]`.",
      "Count JS files: `js_count = sum(1 for f in files if f.endswith(\".js\"))`.",
      "Print `js_count`."
    ],
    "initialCode": "# Step 1: Create variable 'files' and set it to [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]\n# TODO: Write code below\n\n# Step 2: Count JS files: 'js_count = sum(1 for f in files if f.endswith(\".js\"))'\n# TODO: Write code below\n\n# Step 3: Print 'js_count'\n# TODO: Write code below\n",
    "solutionCode": "files = [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]\njs_count = sum(1 for f in files if f.endswith(\".js\"))\nprint(js_count)\n",
    "hints": [
      "Concept: Scan a collection of filenames, categorize by extension, and compute file counts. Think of it like: An office manager organizing a cabinet by sorting documents into PDF, DOC, and TXT folders.",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `files = [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]`.\n2. Count JS files: `js_count = sum(1 for f in files if f.endswith(\".js\"))`.\n3. Print `js_count`.\nKey Tip: Check `.endswith(\".js\")`"
    ],
    "testCases": [
      {
        "id": "py-120-tc-1",
        "description": "js_count is 2",
        "testFn": "js_count === 2"
      }
    ]
  }
];
