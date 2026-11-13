import { Lesson } from '../../../types';

export const pythonModule3Lessons: Lesson[] = [
  {
    "id": "py-21-string-length-len",
    "title": "21. Counting Characters with len()",
    "slug": "string-length-len",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Measure character counts in any string using the universal len() function.",
    "concepts": [
      "len(string)",
      "Character count"
    ],
    "analogy": "A Twitter character counter showing how long your tweet is.",
    "explanationMarkdown": "### len() Function\n```python\nword = \"Python\"\nprint(len(word)) # 6\n```",
    "workedExample": {
      "title": "Worked Example: Password length",
      "code": "pwd = \"secret123\"\nprint(len(pwd))",
      "explanation": "• 9 characters in length.",
      "expectedOutput": "9"
    },
    "exerciseSteps": [
      "Create `username = \"coder101\"`.",
      "Calculate length: `count = len(username)`.",
      "Print `count`."
    ],
    "initialCode": "# Step 1: Create variable 'username' and set it to \"coder101\"\n# TODO: Write code below\n\n# Step 2: Calculate length: 'count = len(username)'\n# TODO: Write code below\n\n# Step 3: Print 'count'\n# TODO: Write code below\n",
    "solutionCode": "username = \"coder101\"\ncount = len(username)\nprint(count)\n",
    "hints": [
      "Concept: Measure character counts in any string using the universal len() function. Think of it like: A Twitter character counter showing how long your tweet is.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `username = \"coder101\"`.\n2. Calculate length: `count = len(username)`.\n3. Print `count`.\nKey Tip: Use `len(username)`"
    ],
    "testCases": [
      {
        "id": "py-21-tc-1",
        "description": "count is 8",
        "testFn": "count === 8"
      }
    ]
  },
  {
    "id": "py-22-f-strings",
    "title": "22. Modern Interpolation with f-strings",
    "slug": "f-strings",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inject variables and expressions directly into text using prefixed f-strings f\"{var}\".",
    "concepts": [
      "f-strings: f\"...{x}...\"",
      "Readability"
    ],
    "analogy": "A fill-in-the-blank greeting card where curly braces hold the recipient's name.",
    "explanationMarkdown": "### f-strings in Python\nPrefix the string with `f` and embed variables inside `{}`:\n```python\nname = \"Alex\"\nage = 24\nprint(f\"Hello, {name}! You are {age} years old.\")\n```",
    "workedExample": {
      "title": "Worked Example: Score display",
      "code": "score = 95\nmsg = f\"High Score: {score}\"\nprint(msg)",
      "explanation": "• Injects 95 directly into msg.",
      "expectedOutput": "High Score: 95"
    },
    "exerciseSteps": [
      "Create `item = \"Coffee\"`.",
      "Create `price = 4`.",
      "Create `receipt = f\"{item}: ${price}\"`.",
      "Print `receipt`."
    ],
    "initialCode": "# Step 1: Create variable 'item' and set it to \"Coffee\"\n# TODO: Write code below\n\n# Step 2: Create variable 'price' and set it to 4\n# TODO: Write code below\n\n# Step 3: Create variable 'receipt' and set it to f\"{item}: ${price}\"\n# TODO: Write code below\n\n# Step 4: Print 'receipt'\n# TODO: Write code below\n",
    "solutionCode": "item = \"Coffee\"\nprice = 4\nreceipt = f\"{item}: ${price}\"\nprint(receipt)\n",
    "hints": [
      "Concept: Inject variables and expressions directly into text using prefixed f-strings f\"{var}\". Think of it like: A fill-in-the-blank greeting card where curly braces hold the recipient's name.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `item = \"Coffee\"`.\n2. Create `price = 4`.\n3. Create `receipt = f\"{item}: ${price}\"`.\n4. Print `receipt`.\nKey Tip: Use `f\"{item}: ${price}\"`"
    ],
    "testCases": [
      {
        "id": "py-22-tc-1",
        "description": "receipt is Coffee: $4",
        "testFn": "receipt === 'Coffee: $4'"
      }
    ]
  },
  {
    "id": "py-23-upper-lower",
    "title": "23. Changing Case with .upper() and .lower()",
    "slug": "upper-lower",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Normalize string casing for case-insensitive matching.",
    "concepts": [
      ".upper()",
      ".lower()"
    ],
    "analogy": "Toggling Caps Lock on a keyboard.",
    "explanationMarkdown": "### .upper() and .lower()\n```python\nemail = \"USER@EXAMPLE.COM\"\nclean_email = email.lower() # \"user@example.com\"\n```",
    "workedExample": {
      "title": "Worked Example: Loud shouting",
      "code": "shout = \"hello\".upper()\nprint(shout)",
      "explanation": "• Converts to HELLO.",
      "expectedOutput": "HELLO"
    },
    "exerciseSteps": [
      "Create `raw_city = \"London\"`.",
      "Convert to uppercase: `loud_city = raw_city.upper()`.",
      "Print `loud_city`."
    ],
    "initialCode": "# Step 1: Create variable 'raw_city' and set it to \"London\"\n# TODO: Write code below\n\n# Step 2: Convert to uppercase: 'loud_city = raw_city.upper()'\n# TODO: Write code below\n\n# Step 3: Print 'loud_city'\n# TODO: Write code below\n",
    "solutionCode": "raw_city = \"London\"\nloud_city = raw_city.upper()\nprint(loud_city)\n",
    "hints": [
      "Concept: Normalize string casing for case-insensitive matching. Think of it like: Toggling Caps Lock on a keyboard.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `raw_city = \"London\"`.\n2. Convert to uppercase: `loud_city = raw_city.upper()`.\n3. Print `loud_city`.\nKey Tip: Call `raw_city.upper()`"
    ],
    "testCases": [
      {
        "id": "py-23-tc-1",
        "description": "loud_city is LONDON",
        "testFn": "loud_city === 'LONDON'"
      }
    ]
  },
  {
    "id": "py-24-strip-whitespace",
    "title": "24. Cleaning Whitespace with .strip()",
    "slug": "strip-whitespace",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Trim accidental leading and trailing whitespace from user input.",
    "concepts": [
      ".strip()",
      "Sanitizing input"
    ],
    "analogy": "Clipping overgrown hedges along the boundaries of a lawn.",
    "explanationMarkdown": "### .strip()\n```python\nraw = \"   padded text   \"\nclean = raw.strip() # \"padded text\"\n```",
    "workedExample": {
      "title": "Worked Example: Cleaned search query",
      "code": "query = \"  python 3  \".strip()\nprint(query)",
      "explanation": "• Removes extra whitespace around string.",
      "expectedOutput": "python 3"
    },
    "exerciseSteps": [
      "Create `dirty_input = \"   devforge   \"`.",
      "Clean it: `clean_input = dirty_input.strip()`.",
      "Print `clean_input`."
    ],
    "initialCode": "# Step 1: Create variable 'dirty_input' and set it to \"   devforge   \"\n# TODO: Write code below\n\n# Step 2: Clean it: 'clean_input = dirty_input.strip()'\n# TODO: Write code below\n\n# Step 3: Print 'clean_input'\n# TODO: Write code below\n",
    "solutionCode": "dirty_input = \"   devforge   \"\nclean_input = dirty_input.strip()\nprint(clean_input)\n",
    "hints": [
      "Concept: Trim accidental leading and trailing whitespace from user input. Think of it like: Clipping overgrown hedges along the boundaries of a lawn.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `dirty_input = \"   devforge   \"`.\n2. Clean it: `clean_input = dirty_input.strip()`.\n3. Print `clean_input`.\nKey Tip: Call `.strip()` on dirty_input"
    ],
    "testCases": [
      {
        "id": "py-24-tc-1",
        "description": "clean_input is devforge",
        "testFn": "clean_input === 'devforge'"
      }
    ]
  },
  {
    "id": "py-25-find-in-operator",
    "title": "25. Substring Search with 'in'",
    "slug": "substring-search-in",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Check if a piece of text exists inside a larger string using the in keyword.",
    "concepts": [
      "'sub' in text",
      "Boolean search"
    ],
    "analogy": "Using Ctrl+F in a document to see if a word appears.",
    "explanationMarkdown": "### Substring Search\n```python\nsentence = \"Python is awesome\"\nprint(\"awesome\" in sentence) # True\nprint(\"Java\" in sentence)    # False\n```",
    "workedExample": {
      "title": "Worked Example: Email validation",
      "code": "email = \"test@site.com\"\nhas_at = \"@\" in email\nprint(has_at)",
      "explanation": "• Returns True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `url = \"https://google.com\"`.",
      "Check if `\"https\"` is in url: `is_secure = \"https\" in url`.",
      "Print `is_secure`."
    ],
    "initialCode": "# Step 1: Create variable 'url' and set it to \"https://google.com\"\n# TODO: Write code below\n\n# Step 2: Check if '\"https\"' is in url: 'is_secure = \"https\" in url'\n# TODO: Write code below\n\n# Step 3: Print 'is_secure'\n# TODO: Write code below\n",
    "solutionCode": "url = \"https://google.com\"\nis_secure = \"https\" in url\nprint(is_secure)\n",
    "hints": [
      "Concept: Check if a piece of text exists inside a larger string using the in keyword. Think of it like: Using Ctrl+F in a document to see if a word appears.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `url = \"https://google.com\"`.\n2. Check if `\"https\"` is in url: `is_secure = \"https\" in url`.\n3. Print `is_secure`.\nKey Tip: Use `\"https\" in url`"
    ],
    "testCases": [
      {
        "id": "py-25-tc-1",
        "description": "is_secure is True",
        "testFn": "is_secure === true"
      }
    ]
  },
  {
    "id": "py-26-replace",
    "title": "26. Replacing Substrings with .replace()",
    "slug": "replace-substrings",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Substitute occurrences of a word with another using .replace(old, new).",
    "concepts": [
      ".replace(old, new)",
      "String immutability"
    ],
    "analogy": "Find-and-replace in a word processor.",
    "explanationMarkdown": "### .replace()\n```python\ntext = \"I love cats\"\nnew_text = text.replace(\"cats\", \"dogs\")\nprint(new_text) # \"I love dogs\"\n```",
    "workedExample": {
      "title": "Worked Example: Fixing typo",
      "code": "msg = \"helo world\".replace(\"helo\", \"hello\")\nprint(msg)",
      "explanation": "• Replaces helo with hello.",
      "expectedOutput": "hello world"
    },
    "exerciseSteps": [
      "Create `template = \"Hello USER\"`.",
      "Replace `\"USER\"` with `\"Anvesh\"`: `personalized = template.replace(\"USER\", \"Anvesh\")`.",
      "Print `personalized`."
    ],
    "initialCode": "# Step 1: Create variable 'template' and set it to \"Hello USER\"\n# TODO: Write code below\n\n# Step 2: Replace '\"USER\"' with '\"Anvesh\"': 'personalized = template.replace(\"USER\", \"Anvesh\")'\n# TODO: Write code below\n\n# Step 3: Print 'personalized'\n# TODO: Write code below\n",
    "solutionCode": "template = \"Hello USER\"\npersonalized = template.replace(\"USER\", \"Anvesh\")\nprint(personalized)\n",
    "hints": [
      "Concept: Substitute occurrences of a word with another using .replace(old, new). Think of it like: Find-and-replace in a word processor.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `template = \"Hello USER\"`.\n2. Replace `\"USER\"` with `\"Anvesh\"`: `personalized = template.replace(\"USER\", \"Anvesh\")`.\n3. Print `personalized`.\nKey Tip: Use `template.replace(\"USER\", \"Anvesh\")`"
    ],
    "testCases": [
      {
        "id": "py-26-tc-1",
        "description": "personalized is Hello Anvesh",
        "testFn": "personalized === 'Hello Anvesh'"
      }
    ]
  },
  {
    "id": "py-27-split",
    "title": "27. Splitting Strings into Lists with .split()",
    "slug": "split-strings",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Break down sentences into words or parse CSV values using .split().",
    "concepts": [
      ".split()",
      "Delimiters"
    ],
    "analogy": "Cutting a loaf of bread into individual slices.",
    "explanationMarkdown": "### .split()\n```python\nwords = \"red,green,blue\".split(\",\")\nprint(words) # [\"red\", \"green\", \"blue\"]\n```",
    "workedExample": {
      "title": "Worked Example: Splitting words",
      "code": "items = \"apple banana cherry\".split(\" \")\nprint(len(items))",
      "explanation": "• Returns list of 3 items.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Create `csv_line = \"HTML,CSS,JS\"`.",
      "Split by comma: `techs = csv_line.split(\",\")`.",
      "Print `techs`."
    ],
    "initialCode": "# Step 1: Create variable 'csv_line' and set it to \"HTML,CSS,JS\"\n# TODO: Write code below\n\n# Step 2: Split by comma: 'techs = csv_line.split(\",\")'\n# TODO: Write code below\n\n# Step 3: Print 'techs'\n# TODO: Write code below\n",
    "solutionCode": "csv_line = \"HTML,CSS,JS\"\ntechs = csv_line.split(\",\")\nprint(techs)\n",
    "hints": [
      "Concept: Break down sentences into words or parse CSV values using .split(). Think of it like: Cutting a loaf of bread into individual slices.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `csv_line = \"HTML,CSS,JS\"`.\n2. Split by comma: `techs = csv_line.split(\",\")`.\n3. Print `techs`.\nKey Tip: Use `csv_line.split(\",\")`"
    ],
    "testCases": [
      {
        "id": "py-27-tc-1",
        "description": "techs has 3 items",
        "testFn": "Array.isArray(techs) && techs.length === 3 && techs[0] === 'HTML'"
      }
    ]
  },
  {
    "id": "py-28-join",
    "title": "28. Joining Lists into Strings with .join()",
    "slug": "join-strings",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Glues list elements together with a delimiter using delimiter.join(list).",
    "concepts": [
      "delimiter.join(list)",
      "String formatting"
    ],
    "analogy": "Stringing beads onto a necklace chain.",
    "explanationMarkdown": "### .join()\nNotice the syntax: the separator comes first!\n```python\ncolors = [\"red\", \"green\", \"blue\"]\nresult = \", \".join(colors) # \"red, green, blue\"\n```",
    "workedExample": {
      "title": "Worked Example: Path assembly",
      "code": "parts = [\"usr\", \"bin\", \"python\"]\npath = \"/\".join(parts)\nprint(path)",
      "explanation": "• Joins with slash.",
      "expectedOutput": "usr/bin/python"
    },
    "exerciseSteps": [
      "Create `words = [\"learn\", \"python\", \"now\"]`.",
      "Join with hyphens: `slug = \"-\".join(words)`.",
      "Print `slug`."
    ],
    "initialCode": "# Step 1: Create variable 'words' and set it to [\"learn\", \"python\", \"now\"]\n# TODO: Write code below\n\n# Step 2: Join with hyphens: 'slug = \"-\".join(words)'\n# TODO: Write code below\n\n# Step 3: Print 'slug'\n# TODO: Write code below\n",
    "solutionCode": "words = [\"learn\", \"python\", \"now\"]\nslug = \"-\".join(words)\nprint(slug)\n",
    "hints": [
      "Concept: Glues list elements together with a delimiter using delimiter.join(list). Think of it like: Stringing beads onto a necklace chain.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `words = [\"learn\", \"python\", \"now\"]`.\n2. Join with hyphens: `slug = \"-\".join(words)`.\n3. Print `slug`.\nKey Tip: Use `\"-\".join(words)`"
    ],
    "testCases": [
      {
        "id": "py-28-tc-1",
        "description": "slug is learn-python-now",
        "testFn": "slug === 'learn-python-now'"
      }
    ]
  },
  {
    "id": "py-29-indexing",
    "title": "29. String Indexing & Negative Indices",
    "slug": "string-indexing",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Access characters by zero-based index or from the end with negative indices like -1.",
    "concepts": [
      "s[0] first char",
      "s[-1] last char"
    ],
    "analogy": "Reading a calendar from Monday (day 0) or checking yesterday relative to tomorrow.",
    "explanationMarkdown": "### Indexing in Python\nPython supports negative indices out-of-the-box:\n```python\nword = \"Code\"\nprint(word[0])  # \"C\"\nprint(word[-1]) # \"e\" (last character!)\n```",
    "workedExample": {
      "title": "Worked Example: First and last letter",
      "code": "s = \"Planet\"\nprint(s[0] + s[-1])",
      "explanation": "• P + t = Pt.",
      "expectedOutput": "Pt"
    },
    "exerciseSteps": [
      "Create `lang = \"Python\"`.",
      "Get first letter: `first = lang[0]`.",
      "Get last letter: `last = lang[-1]`.",
      "Print `first + last`."
    ],
    "initialCode": "# Step 1: Create variable 'lang' and set it to \"Python\"\n# TODO: Write code below\n\n# Step 2: Get first letter: 'first = lang[0]'\n# TODO: Write code below\n\n# Step 3: Get last letter: 'last = lang[-1]'\n# TODO: Write code below\n\n# Step 4: Print 'first + last'\n# TODO: Write code below\n",
    "solutionCode": "lang = \"Python\"\nfirst = lang[0]\nlast = lang[-1]\nprint(first + last)\n",
    "hints": [
      "Concept: Access characters by zero-based index or from the end with negative indices like -1. Think of it like: Reading a calendar from Monday (day 0) or checking yesterday relative to tomorrow.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `lang = \"Python\"`.\n2. Get first letter: `first = lang[0]`.\n3. Get last letter: `last = lang[-1]`.\n4. Print `first + last`.\nKey Tip: Use `lang[0]` and `lang[-1]`"
    ],
    "testCases": [
      {
        "id": "py-29-tc-1",
        "description": "first is P and last is n",
        "testFn": "first === 'P' && last === 'n'"
      }
    ]
  },
  {
    "id": "py-30-slicing",
    "title": "30. String Slicing (start:stop:step)",
    "slug": "string-slicing",
    "language": "python",
    "category": "Module 3: String Power & Formatting",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Extract substrings with slice notation [start:stop] without mutating original string.",
    "concepts": [
      "s[start:stop]",
      "Reverse slicing s[::-1]"
    ],
    "analogy": "Cutting a slice of pizza from 12 o'clock to 3 o'clock.",
    "explanationMarkdown": "### Slicing\n`s[start:stop]` includes `start` up to but not including `stop`:\n```python\ntext = \"Antigravity\"\nprint(text[0:4]) # \"Anti\"\nprint(text[4:])  # \"gravity\"\n```",
    "workedExample": {
      "title": "Worked Example: Prefix extraction",
      "code": "code = \"DEV-123\"\nprefix = code[0:3]\nprint(prefix)",
      "explanation": "• Extracts DEV.",
      "expectedOutput": "DEV"
    },
    "exerciseSteps": [
      "Create `domain = \"github.com\"`.",
      "Slice the name: `name = domain[0:6]`.",
      "Print `name`."
    ],
    "initialCode": "# Step 1: Create variable 'domain' and set it to \"github.com\"\n# TODO: Write code below\n\n# Step 2: Slice the name: 'name = domain[0:6]'\n# TODO: Write code below\n\n# Step 3: Print 'name'\n# TODO: Write code below\n",
    "solutionCode": "domain = \"github.com\"\nname = domain[0:6]\nprint(name)\n",
    "hints": [
      "Concept: Extract substrings with slice notation [start:stop] without mutating original string. Think of it like: Cutting a slice of pizza from 12 o'clock to 3 o'clock.",
      "Syntax Blueprint: Lists store ordered items in square brackets: `my_list = [1, 2, 3]`. Access items with `my_list[index]` and append with `my_list.append(item)`.",
      "Step-by-Step Target:\n1. Create `domain = \"github.com\"`.\n2. Slice the name: `name = domain[0:6]`.\n3. Print `name`.\nKey Tip: Slice with `[0:6]`"
    ],
    "testCases": [
      {
        "id": "py-30-tc-1",
        "description": "name is github",
        "testFn": "name === 'github'"
      }
    ]
  }
];
