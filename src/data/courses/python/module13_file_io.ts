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
      "explanation": "\u2022 Sets mode.",
      "expectedOutput": "Opening in w mode"
    },
    "exerciseSteps": [
      "Create `mode = \"r\"`.",
      "Print `mode`."
    ],
    "initialCode": "mode = \"r\"\nprint(mode)\n",
    "solutionCode": "mode = \"r\"\nprint(mode)\n",
    "hints": [
      "Assign `mode = \"r\"`"
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
      "explanation": "\u2022 Confirms safe close.",
      "expectedOutput": "File closed safely: True"
    },
    "exerciseSteps": [
      "Create `is_closed = True`.",
      "Print `is_closed`."
    ],
    "initialCode": "is_closed = True\nprint(is_closed)\n",
    "solutionCode": "is_closed = True\nprint(is_closed)\n",
    "hints": [
      "Set `is_closed = True`"
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
      "explanation": "\u2022 Strips whitespace.",
      "expectedOutput": "alpha"
    },
    "exerciseSteps": [
      "Create `lines = [\"user1\", \"user2\"]`.",
      "Print `len(lines)`."
    ],
    "initialCode": "lines = [\"user1\", \"user2\"]\nprint(len(lines))\n",
    "solutionCode": "lines = [\"user1\", \"user2\"]\nprint(len(lines))\n",
    "hints": [
      "Use `len(lines)`"
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
      "explanation": "\u2022 Formatted log entry.",
      "expectedOutput": "[INFO] App started"
    },
    "exerciseSteps": [
      "Create `log = \"Status: OK\"`.",
      "Print `log`."
    ],
    "initialCode": "log = \"Status: OK\"\nprint(log)\n",
    "solutionCode": "log = \"Status: OK\"\nprint(log)\n",
    "hints": [
      "Assign `log = \"Status: OK\"`"
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
      "explanation": "\u2022 200.",
      "expectedOutput": "200"
    },
    "exerciseSteps": [
      "Create `record = {\"active\": True, \"id\": 42}`.",
      "Print `record[\"id\"]`."
    ],
    "initialCode": "record = {\"active\": True, \"id\": 42}\nprint(record[\"id\"])\n",
    "solutionCode": "record = {\"active\": True, \"id\": 42}\nprint(record[\"id\"])\n",
    "hints": [
      "Access `record[\"id\"]`"
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
      "explanation": "\u2022 Accesses parsed username.",
      "expectedOutput": "dev"
    },
    "exerciseSteps": [
      "Create `res = {\"token\": \"abc-123\", \"ok\": True}`.",
      "Print `res[\"token\"]`."
    ],
    "initialCode": "res = {\"token\": \"abc-123\", \"ok\": True}\nprint(res[\"token\"])\n",
    "solutionCode": "res = {\"token\": \"abc-123\", \"ok\": True}\nprint(res[\"token\"])\n",
    "hints": [
      "Access `res[\"token\"]`"
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
      "explanation": "\u2022 Apple.",
      "expectedOutput": "Apple"
    },
    "exerciseSteps": [
      "Create `row = \"Alice,Engineering,Lead\".split(\",\")`.",
      "Print `row[1]`."
    ],
    "initialCode": "row = \"Alice,Engineering,Lead\".split(\",\")\nprint(row[1])\n",
    "solutionCode": "row = \"Alice,Engineering,Lead\".split(\",\")\nprint(row[1])\n",
    "hints": [
      "Index 1 is Engineering"
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
      "explanation": "\u2022 Returns started.",
      "expectedOutput": "started"
    },
    "exerciseSteps": [
      "Define `class Lock: def __enter__(self): return \"locked\"; def __exit__(self, a, b, c): pass`.",
      "Create `l = Lock()` and print `l.__enter__()`."
    ],
    "initialCode": "class Lock:\n    def __enter__(self):\n        return \"locked\"\n    def __exit__(self, a, b, c):\n        pass\nl = Lock()\nprint(l.__enter__())\n",
    "solutionCode": "class Lock:\n    def __enter__(self):\n        return \"locked\"\n    def __exit__(self, a, b, c):\n        pass\nl = Lock()\nprint(l.__enter__())\n",
    "hints": [
      "Define `__enter__` returning \"locked\""
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
      "explanation": "\u2022 home/user/docs.",
      "expectedOutput": "home/user/docs"
    },
    "exerciseSteps": [
      "Create `filename = \"app.py\"`.",
      "Check if ends with `.py`: `is_py = filename.endswith(\".py\")`.",
      "Print `is_py`."
    ],
    "initialCode": "filename = \"app.py\"\nis_py = filename.endswith(\".py\")\nprint(is_py)\n",
    "solutionCode": "filename = \"app.py\"\nis_py = filename.endswith(\".py\")\nprint(is_py)\n",
    "hints": [
      "Use `filename.endswith(\".py\")`"
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
      "explanation": "\u2022 2 python files.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `files = [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]`.",
      "Count JS files: `js_count = sum(1 for f in files if f.endswith(\".js\"))`.",
      "Print `js_count`."
    ],
    "initialCode": "files = [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]\njs_count = sum(1 for f in files if f.endswith(\".js\"))\nprint(js_count)\n",
    "solutionCode": "files = [\"index.html\", \"style.css\", \"app.js\", \"test.js\"]\njs_count = sum(1 for f in files if f.endswith(\".js\"))\nprint(js_count)\n",
    "hints": [
      "Check `.endswith(\".js\")`"
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
