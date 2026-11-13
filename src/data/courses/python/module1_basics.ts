import { Lesson } from '../../../types';

export const pythonModule1Lessons: Lesson[] = [
  {
    "id": "py-1-hello-world",
    "title": "1. Hello, Python! The print() Function",
    "slug": "hello-python",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Write your first Python command! Learn how to display text on the screen using print().",
    "concepts": [
      "print() function",
      "Text in quotes",
      "Python syntax simplicity"
    ],
    "analogy": "Speaking into a megaphone: print() broadcasts your words to the computer screen.",
    "explanationMarkdown": "### Welcome to Python!\nPython is renowned for clean, English-like syntax.\n```python\nprint(\"Welcome to Python!\")\n```",
    "workedExample": {
      "title": "Worked Example: Friendly Greeting",
      "code": "print(\"Hello, World!\")",
      "explanation": "• Displays Hello, World! on the screen.",
      "expectedOutput": "Hello, World!"
    },
    "exerciseSteps": [
      "Type `print(\"Hello, World!\")` in the editor.",
      "Click Check Answer."
    ],
    "initialCode": "# Step 1: Type 'print(\"Hello, World!\")' in the editor\n# TODO: Write code below\n\n# Step 2: Click Check Answer\n# TODO: Write code below\n",
    "solutionCode": "print(\"Hello, World!\")\n",
    "hints": [
      "Concept: Write your first Python command! Learn how to display text on the screen using print(). Think of it like: Speaking into a megaphone: print() broadcasts your words to the computer screen.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Type `print(\"Hello, World!\")` in the editor.\n2. Click Check Answer.\nKey Tip: Use `print(\"Hello, World!\")`"
    ],
    "testCases": [
      {
        "id": "py-1-tc-1",
        "description": "Prints Hello, World!",
        "testFn": "logs.some(l => l.args.join(' ').toLowerCase().includes('hello, world'))"
      }
    ]
  },
  {
    "id": "py-2-variables",
    "title": "2. Storing Data in Variables",
    "slug": "variables",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Store numbers and words in memory by assigning them to variable names.",
    "concepts": [
      "variable = value",
      "Dynamic typing"
    ],
    "analogy": "A labeled storage box: put a toy inside and write 'favorite_toy' on the outside.",
    "explanationMarkdown": "### Variables in Python\nNo keywords like `let` or `var` needed! Simply write name = value:\n```python\nplayer_name = \"Alex\"\nscore = 100\n```",
    "workedExample": {
      "title": "Worked Example: Storing City",
      "code": "city = \"Tokyo\"\nprint(city)",
      "explanation": "• Stores Tokyo and prints it.",
      "expectedOutput": "Tokyo"
    },
    "exerciseSteps": [
      "Create `hero = \"Spider-Man\"`.",
      "Print `hero`."
    ],
    "initialCode": "# Step 1: Create variable 'hero' and set it to \"Spider-Man\"\n# TODO: Write code below\n\n# Step 2: Print 'hero'\n# TODO: Write code below\n",
    "solutionCode": "hero = \"Spider-Man\"\nprint(hero)\n",
    "hints": [
      "Concept: Store numbers and words in memory by assigning them to variable names. Think of it like: A labeled storage box: put a toy inside and write 'favorite_toy' on the outside.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `hero = \"Spider-Man\"`.\n2. Print `hero`.\nKey Tip: Write `hero = \"Spider-Man\"` and `print(hero)`"
    ],
    "testCases": [
      {
        "id": "py-2-tc-1",
        "description": "hero is Spider-Man",
        "testFn": "hero === 'Spider-Man'"
      }
    ]
  },
  {
    "id": "py-3-comments",
    "title": "3. Code Notes with Comments (#)",
    "slug": "comments",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Leave notes for human readers using the # symbol that Python ignores.",
    "concepts": [
      "# Comments",
      "Code readability"
    ],
    "analogy": "Sticky notes on a cookbook page: helpful for the chef, but not part of the dish.",
    "explanationMarkdown": "### Comments\n```python\n# This is a comment\nstatus = \"ready\"\n```",
    "workedExample": {
      "title": "Worked Example: Documented Code",
      "code": "# Calculate total\ntotal = 50\nprint(total)",
      "explanation": "• The # line is ignored by Python.",
      "expectedOutput": "50"
    },
    "exerciseSteps": [
      "Add a comment `# My first score`.",
      "Assign `score = 99`.",
      "Print `score`."
    ],
    "initialCode": "# Step 1: Add a comment '# My first score'\n# TODO: Write code below\n\n# Step 2: Assign 'score = 99'\n# TODO: Write code below\n\n# Step 3: Print 'score'\n# TODO: Write code below\n",
    "solutionCode": "# My first score\nscore = 99\nprint(score)\n",
    "hints": [
      "Concept: Leave notes for human readers using the # symbol that Python ignores. Think of it like: Sticky notes on a cookbook page: helpful for the chef, but not part of the dish.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Add a comment `# My first score`.\n2. Assign `score = 99`.\n3. Print `score`.\nKey Tip: Start the comment line with `#`"
    ],
    "testCases": [
      {
        "id": "py-3-tc-1",
        "description": "score is 99",
        "testFn": "score === 99"
      }
    ]
  },
  {
    "id": "py-4-strings",
    "title": "4. Working with Text Strings",
    "slug": "strings",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Create strings with single or double quotes and combine them with +.",
    "concepts": [
      "Single and double quotes",
      "String concatenation (+)"
    ],
    "analogy": "Snapping Lego bricks together to build a longer sentence.",
    "explanationMarkdown": "### Strings & Concatenation\n```python\nfirst = \"Ada\"\nlast = \"Lovelace\"\nfull_name = first + \" \" + last\nprint(full_name) # \"Ada Lovelace\"\n```",
    "workedExample": {
      "title": "Worked Example: Greeting",
      "code": "greeting = \"Hi \" + \"Friend\"\nprint(greeting)",
      "explanation": "• Combines two strings.",
      "expectedOutput": "Hi Friend"
    },
    "exerciseSteps": [
      "Create `greeting = \"Hello \" + \"Python\"`.",
      "Print `greeting`."
    ],
    "initialCode": "# Step 1: Create variable 'greeting' and set it to \"Hello \" + \"Python\"\n# TODO: Write code below\n\n# Step 2: Print 'greeting'\n# TODO: Write code below\n",
    "solutionCode": "greeting = \"Hello \" + \"Python\"\nprint(greeting)\n",
    "hints": [
      "Concept: Create strings with single or double quotes and combine them with +. Think of it like: Snapping Lego bricks together to build a longer sentence.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `greeting = \"Hello \" + \"Python\"`.\n2. Print `greeting`.\nKey Tip: Use the `+` operator between strings"
    ],
    "testCases": [
      {
        "id": "py-4-tc-1",
        "description": "greeting is Hello Python",
        "testFn": "greeting === 'Hello Python'"
      }
    ]
  },
  {
    "id": "py-5-numbers",
    "title": "5. Numbers: Integers vs Floats",
    "slug": "numbers-int-float",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Distinguish between whole integers (int) and decimal numbers (float).",
    "concepts": [
      "int (whole number)",
      "float (decimal)"
    ],
    "analogy": "Counting whole coins (int) versus reading the exact dollar and cent price on a tag (float).",
    "explanationMarkdown": "### Integers & Floats\n```python\nitems = 5 # int\nprice = 19.99 # float\n```",
    "workedExample": {
      "title": "Worked Example: Store price",
      "code": "cost = 12.50\nprint(cost)",
      "explanation": "• Stores decimal float.",
      "expectedOutput": "12.5"
    },
    "exerciseSteps": [
      "Assign integer `age = 25`.",
      "Assign float `height = 5.9`.",
      "Print `age`."
    ],
    "initialCode": "# Step 1: Assign integer 25 to variable 'age'\n# TODO: Write code below\n\n# Step 2: Assign float 5.9 to variable 'height'\n# TODO: Write code below\n\n# Step 3: Print 'age'\n# TODO: Write code below\n",
    "solutionCode": "age = 25\nheight = 5.9\nprint(age)\n",
    "hints": [
      "Concept: Distinguish between whole integers (int) and decimal numbers (float). Think of it like: Counting whole coins (int) versus reading the exact dollar and cent price on a tag (float).",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Assign integer `age = 25`.\n2. Assign float `height = 5.9`.\n3. Print `age`.\nKey Tip: Create `age = 25` and `height = 5.9`"
    ],
    "testCases": [
      {
        "id": "py-5-tc-1",
        "description": "age is 25 and height is 5.9",
        "testFn": "age === 25 && height === 5.9"
      }
    ]
  },
  {
    "id": "py-6-booleans",
    "title": "6. True and False Booleans",
    "slug": "booleans",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Use Capitalized True and False to represent yes/no binary facts.",
    "concepts": [
      "True",
      "False",
      "Boolean flags"
    ],
    "analogy": "A light switch that can only be either flipped ON or flipped OFF.",
    "explanationMarkdown": "### Booleans in Python\nNotice the capital T and F!\n```python\nis_logged_in = True\nis_admin = False\n```",
    "workedExample": {
      "title": "Worked Example: Game status",
      "code": "game_over = False\nprint(game_over)",
      "explanation": "• Prints false.",
      "expectedOutput": "False"
    },
    "exerciseSteps": [
      "Create `is_active = True`.",
      "Print `is_active`."
    ],
    "initialCode": "# Step 1: Create variable 'is_active' and set it to True\n# TODO: Write code below\n\n# Step 2: Print 'is_active'\n# TODO: Write code below\n",
    "solutionCode": "is_active = True\nprint(is_active)\n",
    "hints": [
      "Concept: Use Capitalized True and False to represent yes/no binary facts. Think of it like: A light switch that can only be either flipped ON or flipped OFF.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `is_active = True`.\n2. Print `is_active`.\nKey Tip: Remember Capital T: `True`"
    ],
    "testCases": [
      {
        "id": "py-6-tc-1",
        "description": "is_active is True",
        "testFn": "is_active === true"
      }
    ]
  },
  {
    "id": "py-7-type-checking",
    "title": "7. Checking Types with type()",
    "slug": "type-checking",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect what kind of data is stored in any variable using type().",
    "concepts": [
      "type() function",
      "str, int, float, bool"
    ],
    "analogy": "Reading the nutrition facts label on a package to see what ingredients are inside.",
    "explanationMarkdown": "### Checking Types\n```python\nx = 42\nprint(type(x)) # int\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting string",
      "code": "word = \"Python\"\nprint(type(word))",
      "explanation": "• Returns str.",
      "expectedOutput": "str"
    },
    "exerciseSteps": [
      "Create `value = 100`.",
      "Print `type(value)`."
    ],
    "initialCode": "# Step 1: Create variable 'value' and set it to 100\n# TODO: Write code below\n\n# Step 2: Print 'type(value)'\n# TODO: Write code below\n",
    "solutionCode": "value = 100\nprint(type(value))\n",
    "hints": [
      "Concept: Inspect what kind of data is stored in any variable using type(). Think of it like: Reading the nutrition facts label on a package to see what ingredients are inside.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `value = 100`.\n2. Print `type(value)`.\nKey Tip: Pass value to `type(value)`"
    ],
    "testCases": [
      {
        "id": "py-7-tc-1",
        "description": "value is 100",
        "testFn": "value === 100"
      }
    ]
  },
  {
    "id": "py-8-type-casting",
    "title": "8. Converting Types: int(), str(), float()",
    "slug": "type-casting",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert strings into numbers or numbers into strings with casting functions.",
    "concepts": [
      "int('42')",
      "str(42)",
      "float('3.14')"
    ],
    "analogy": "Melting an ice cube (solid) into liquid water: same matter, converted into a different format.",
    "explanationMarkdown": "### Type Casting\n```python\ntext_num = \"50\"\nreal_num = int(text_num) # 50\nback_to_text = str(real_num) # \"50\"\n```",
    "workedExample": {
      "title": "Worked Example: Converting string to int",
      "code": "s = \"10\"\nn = int(s) + 5\nprint(n)",
      "explanation": "• 10 + 5 = 15.",
      "expectedOutput": "15"
    },
    "exerciseSteps": [
      "Create `raw_str = \"20\"`.",
      "Convert to integer with `num = int(raw_str)`.",
      "Print `num + 5`."
    ],
    "initialCode": "# Step 1: Create variable 'raw_str' and set it to \"20\"\n# TODO: Write code below\n\n# Step 2: Convert to integer with 'num = int(raw_str)'\n# TODO: Write code below\n\n# Step 3: Print 'num + 5'\n# TODO: Write code below\n",
    "solutionCode": "raw_str = \"20\"\nnum = int(raw_str)\nprint(num + 5)\n",
    "hints": [
      "Concept: Convert strings into numbers or numbers into strings with casting functions. Think of it like: Melting an ice cube (solid) into liquid water: same matter, converted into a different format.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `raw_str = \"20\"`.\n2. Convert to integer with `num = int(raw_str)`.\n3. Print `num + 5`.\nKey Tip: Use `int(raw_str)`"
    ],
    "testCases": [
      {
        "id": "py-8-tc-1",
        "description": "num is 20",
        "testFn": "num === 20"
      }
    ]
  },
  {
    "id": "py-9-snake-case",
    "title": "9. Python Naming Conventions: snake_case",
    "slug": "snake-case",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Follow PEP 8 guidelines: use lowercase words separated by underscores for variables.",
    "concepts": [
      "snake_case",
      "PEP 8 standards"
    ],
    "analogy": "Road sign conventions: consistent formatting makes every sign immediately readable at 60 mph.",
    "explanationMarkdown": "### snake_case Convention\n* Good: `total_user_count = 10`\n* Bad in Python: `totalUserCount = 10` (camelCase is JavaScript style)",
    "workedExample": {
      "title": "Worked Example: Clean variable name",
      "code": "max_speed_mph = 65\nprint(max_speed_mph)",
      "explanation": "• Follows snake_case convention.",
      "expectedOutput": "65"
    },
    "exerciseSteps": [
      "Create `user_score_total = 350`.",
      "Print `user_score_total`."
    ],
    "initialCode": "# Step 1: Create variable 'user_score_total' and set it to 350\n# TODO: Write code below\n\n# Step 2: Print 'user_score_total'\n# TODO: Write code below\n",
    "solutionCode": "user_score_total = 350\nprint(user_score_total)\n",
    "hints": [
      "Concept: Follow PEP 8 guidelines: use lowercase words separated by underscores for variables. Think of it like: Road sign conventions: consistent formatting makes every sign immediately readable at 60 mph.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `user_score_total = 350`.\n2. Print `user_score_total`.\nKey Tip: Separate words with underscores: `user_score_total`"
    ],
    "testCases": [
      {
        "id": "py-9-tc-1",
        "description": "user_score_total is 350",
        "testFn": "user_score_total === 350"
      }
    ]
  },
  {
    "id": "py-10-module-1-review",
    "title": "10. Module 1 Review: Profile Card Generator",
    "slug": "module-1-review",
    "language": "python",
    "category": "Module 1: Syntax & Variables",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Combine variables, strings, integers, and booleans to build a complete user profile.",
    "concepts": [
      "Variable integration",
      "Multiple data types"
    ],
    "analogy": "Printing a completed ID badge with photo, name, employee number, and clearance level.",
    "explanationMarkdown": "### Module 1 Challenge\nPut together everything you learned in Module 1 to produce a user profile record.",
    "workedExample": {
      "title": "Worked Example: User record",
      "code": "name = \"Sarah\"\nlevel = 1\nactive = True\nprint(name)",
      "explanation": "• Defines all core fields.",
      "expectedOutput": "Sarah"
    },
    "exerciseSteps": [
      "Create `player_name = \"Nova\"`.",
      "Create `player_xp = 1500`.",
      "Create `player_active = True`.",
      "Print `player_name`."
    ],
    "initialCode": "# Step 1: Create variable 'player_name' and set it to \"Nova\"\n# TODO: Write code below\n\n# Step 2: Create variable 'player_xp' and set it to 1500\n# TODO: Write code below\n\n# Step 3: Create variable 'player_active' and set it to True\n# TODO: Write code below\n\n# Step 4: Print 'player_name'\n# TODO: Write code below\n",
    "solutionCode": "player_name = \"Nova\"\nplayer_xp = 1500\nplayer_active = True\nprint(player_name)\n",
    "hints": [
      "Concept: Combine variables, strings, integers, and booleans to build a complete user profile. Think of it like: Printing a completed ID badge with photo, name, employee number, and clearance level.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `player_name = \"Nova\"`.\n2. Create `player_xp = 1500`.\n3. Create `player_active = True`.\n4. Print `player_name`.\nKey Tip: Assign each variable on its own line"
    ],
    "testCases": [
      {
        "id": "py-10-tc-1",
        "description": "profile fields set accurately",
        "testFn": "player_name === 'Nova' && player_xp === 1500 && player_active === true"
      }
    ]
  }
];
