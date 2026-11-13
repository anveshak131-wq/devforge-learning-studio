import { Lesson } from '../../../types';

export const pythonModule8Lessons: Lesson[] = [
  {
    "id": "py-75-dict-creation",
    "title": "75. Dictionaries & Key-Value Pairs",
    "slug": "dict-creation",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Store labeled data inside curly braces with key: value mapping.",
    "concepts": [
      "dict syntax {}",
      "key: value pairs"
    ],
    "analogy": "A physical Oxford English dictionary: you look up a word (key) to find its definition (value).",
    "explanationMarkdown": "### Python Dictionaries\n```python\nuser = {\n    \"name\": \"Alice\",\n    \"age\": 30,\n    \"is_active\": True\n}\nprint(user[\"name\"]) # \"Alice\"\n```",
    "workedExample": {
      "title": "Worked Example: Capital cities",
      "code": "capitals = {\"France\": \"Paris\", \"Japan\": \"Tokyo\"}\nprint(capitals[\"Japan\"])",
      "explanation": "• Retrieves Tokyo.",
      "expectedOutput": "Tokyo"
    },
    "exerciseSteps": [
      "Create `car = {\"make\": \"Ford\", \"year\": 2021}`.",
      "Print `car[\"make\"]`."
    ],
    "initialCode": "# Step 1: Create variable 'car' and set it to {\"make\": \"Ford\", \"year\": 2021}\n# TODO: Write code below\n\n# Step 2: Print 'car[\"make\"]'\n# TODO: Write code below\n",
    "solutionCode": "car = {\"make\": \"Ford\", \"year\": 2021}\nprint(car[\"make\"])\n",
    "hints": [
      "Concept: Store labeled data inside curly braces with key: value mapping. Think of it like: A physical Oxford English dictionary: you look up a word (key) to find its definition (value).",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `car = {\"make\": \"Ford\", \"year\": 2021}`.\n2. Print `car[\"make\"]`.\nKey Tip: Use `car[\"make\"]`"
    ],
    "testCases": [
      {
        "id": "py-75-tc-1",
        "description": "car make is Ford",
        "testFn": "car.make === 'Ford'"
      }
    ]
  },
  {
    "id": "py-76-dict-get-fallback",
    "title": "76. Safe Access with .get(key, default)",
    "slug": "dict-get-fallback",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Prevent KeyError crashes by providing safe default fallbacks using .get().",
    "concepts": [
      "dict.get(key, default)",
      "KeyError prevention"
    ],
    "analogy": "Checking a coat check tag: if the hook is empty, the attendant politely hands you a voucher instead of shouting an error.",
    "explanationMarkdown": "### .get()\nIf a key is missing, `dict[key]` throws `KeyError`. `.get()` returns a default:\n```python\nprofile = {\"name\": \"Leo\"}\nrole = profile.get(\"role\", \"Guest\") # \"Guest\"\n```",
    "workedExample": {
      "title": "Worked Example: Fallback port",
      "code": "config = {\"host\": \"localhost\"}\nport = config.get(\"port\", 8080)\nprint(port)",
      "explanation": "• Falls back to 8080.",
      "expectedOutput": "8080"
    },
    "exerciseSteps": [
      "Create `settings = {\"theme\": \"dark\"}`.",
      "Get font size with fallback: `font = settings.get(\"font_size\", 14)`.",
      "Print `font`."
    ],
    "initialCode": "# Step 1: Create variable 'settings' and set it to {\"theme\": \"dark\"}\n# TODO: Write code below\n\n# Step 2: Get font size with fallback: 'font = settings.get(\"font_size\", 14)'\n# TODO: Write code below\n\n# Step 3: Print 'font'\n# TODO: Write code below\n",
    "solutionCode": "settings = {\"theme\": \"dark\"}\nfont = settings.get(\"font_size\", 14)\nprint(font)\n",
    "hints": [
      "Concept: Prevent KeyError crashes by providing safe default fallbacks using .get(). Think of it like: Checking a coat check tag: if the hook is empty, the attendant politely hands you a voucher instead of shouting an error.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `settings = {\"theme\": \"dark\"}`.\n2. Get font size with fallback: `font = settings.get(\"font_size\", 14)`.\n3. Print `font`.\nKey Tip: Use `settings.get(\"font_size\", 14)`"
    ],
    "testCases": [
      {
        "id": "py-76-tc-1",
        "description": "font is 14",
        "testFn": "font === 14"
      }
    ]
  },
  {
    "id": "py-77-dict-add-update",
    "title": "77. Adding & Modifying Dictionary Keys",
    "slug": "dict-add-update",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign new keys or update existing values using dict[key] = value.",
    "concepts": [
      "dict[key] = val",
      "Mutable dictionaries"
    ],
    "analogy": "Writing a new contact's phone number into your address book.",
    "explanationMarkdown": "### Modifying Dictionaries\n```python\nplayer = {\"name\": \"Zelda\", \"hp\": 100}\nplayer[\"hp\"] = 120 # Update\nplayer[\"weapon\"] = \"Sword\" # Add new\n```",
    "workedExample": {
      "title": "Worked Example: Updating score",
      "code": "game = {\"score\": 10}\ngame[\"score\"] = 20\nprint(game[\"score\"])",
      "explanation": "• Updated to 20.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Create `hero = {\"name\": \"Batman\"}`.",
      "Add `hero[\"city\"] = \"Gotham\"`.",
      "Print `hero[\"city\"]`."
    ],
    "initialCode": "# Step 1: Create variable 'hero' and set it to {\"name\": \"Batman\"}\n# TODO: Write code below\n\n# Step 2: Add 'hero[\"city\"] = \"Gotham\"'\n# TODO: Write code below\n\n# Step 3: Print 'hero[\"city\"]'\n# TODO: Write code below\n",
    "solutionCode": "hero = {\"name\": \"Batman\"}\nhero[\"city\"] = \"Gotham\"\nprint(hero[\"city\"])\n",
    "hints": [
      "Concept: Assign new keys or update existing values using dict[key] = value. Think of it like: Writing a new contact's phone number into your address book.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `hero = {\"name\": \"Batman\"}`.\n2. Add `hero[\"city\"] = \"Gotham\"`.\n3. Print `hero[\"city\"]`.\nKey Tip: Assign `hero[\"city\"] = \"Gotham\"`"
    ],
    "testCases": [
      {
        "id": "py-77-tc-1",
        "description": "hero city is Gotham",
        "testFn": "hero.city === 'Gotham'"
      }
    ]
  },
  {
    "id": "py-78-dict-del-pop",
    "title": "78. Deleting Keys with 'del' and .pop()",
    "slug": "dict-del-pop",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Remove entries from dictionaries cleanly using del dict[key] or dict.pop(key).",
    "concepts": [
      "del dict[key]",
      "dict.pop(key)"
    ],
    "analogy": "Using an eraser to wipe off an old phone number from your contact card.",
    "explanationMarkdown": "### Deleting Keys\n```python\nuser = {\"name\": \"Sam\", \"temp_code\": 1234}\ndel user[\"temp_code\"]\n```",
    "workedExample": {
      "title": "Worked Example: Popping key",
      "code": "record = {\"id\": 1, \"draft\": True}\nrecord.pop(\"draft\")\nprint(len(record))",
      "explanation": "• Length reduced to 1.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `session = {\"id\": 99, \"expired\": False}`.",
      "Delete expired with `del session[\"expired\"]`.",
      "Print `session`."
    ],
    "initialCode": "# Step 1: Create variable 'session' and set it to {\"id\": 99, \"expired\": False}\n# TODO: Write code below\n\n# Step 2: Delete expired with 'del session[\"expired\"]'\n# TODO: Write code below\n\n# Step 3: Print 'session'\n# TODO: Write code below\n",
    "solutionCode": "session = {\"id\": 99, \"expired\": False}\ndel session[\"expired\"]\nprint(session)\n",
    "hints": [
      "Concept: Remove entries from dictionaries cleanly using del dict[key] or dict.pop(key). Think of it like: Using an eraser to wipe off an old phone number from your contact card.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `session = {\"id\": 99, \"expired\": False}`.\n2. Delete expired with `del session[\"expired\"]`.\n3. Print `session`.\nKey Tip: Use `del session[\"expired\"]`"
    ],
    "testCases": [
      {
        "id": "py-78-tc-1",
        "description": "session has no expired key",
        "testFn": "typeof session.expired === 'undefined'"
      }
    ]
  },
  {
    "id": "py-79-dict-keys-values",
    "title": "79. Inspecting Dictionaries: .keys() & .values()",
    "slug": "dict-keys-values",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract all keys or all values from a dictionary into iterable views.",
    "concepts": [
      "dict.keys()",
      "dict.values()"
    ],
    "analogy": "Extracting just the employee names (keys) or just their salary numbers (values).",
    "explanationMarkdown": "### .keys() and .values()\n```python\nscores = {\"math\": 90, \"history\": 85}\nprint(list(scores.keys()))   # [\"math\", \"history\"]\nprint(sum(scores.values()))  # 175\n```",
    "workedExample": {
      "title": "Worked Example: Summing values",
      "code": "cart = {\"apple\": 2, \"bread\": 3}\nprint(sum(cart.values()))",
      "explanation": "• 2 + 3 = 5.",
      "expectedOutput": "5"
    },
    "exerciseSteps": [
      "Create `inventory = {\"shirts\": 5, \"pants\": 3}`.",
      "Get total stock: `total_stock = sum(inventory.values())`.",
      "Print `total_stock`."
    ],
    "initialCode": "# Step 1: Create variable 'inventory' and set it to {\"shirts\": 5, \"pants\": 3}\n# TODO: Write code below\n\n# Step 2: Get total stock: 'total_stock = sum(inventory.values())'\n# TODO: Write code below\n\n# Step 3: Print 'total_stock'\n# TODO: Write code below\n",
    "solutionCode": "inventory = {\"shirts\": 5, \"pants\": 3}\ntotal_stock = sum(inventory.values())\nprint(total_stock)\n",
    "hints": [
      "Concept: Extract all keys or all values from a dictionary into iterable views. Think of it like: Extracting just the employee names (keys) or just their salary numbers (values).",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `inventory = {\"shirts\": 5, \"pants\": 3}`.\n2. Get total stock: `total_stock = sum(inventory.values())`.\n3. Print `total_stock`.\nKey Tip: Use `sum(inventory.values())`"
    ],
    "testCases": [
      {
        "id": "py-79-tc-1",
        "description": "total_stock is 8",
        "testFn": "total_stock === 8"
      }
    ]
  },
  {
    "id": "py-80-dict-items-loop",
    "title": "80. Iterating Key-Value Pairs with .items()",
    "slug": "dict-items-loop",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Loop through both keys and values simultaneously with for key, val in dict.items().",
    "concepts": [
      "for k, v in dict.items():",
      "Pair iteration"
    ],
    "analogy": "Reading a flashcard: reading the question on the front (key) and the answer on the back (value).",
    "explanationMarkdown": "### .items() Iteration\n```python\nprices = {\"coffee\": 3, \"tea\": 2}\nfor item, price in prices.items():\n    print(f\"{item}: ${price}\")\n```",
    "workedExample": {
      "title": "Worked Example: Displaying pairs",
      "code": "user = {\"name\": \"Amy\", \"role\": \"Admin\"}\nfor k, v in user.items():\n    print(f\"{k}={v}\")",
      "explanation": "• name=Amy, role=Admin.",
      "expectedOutput": "name=Amy\nrole=Admin"
    },
    "exerciseSteps": [
      "Create `stats = {\"hp\": 100, \"mp\": 50}`.",
      "For `k, v in stats.items(): print(f\"{k}:{v}\")`."
    ],
    "initialCode": "# Step 1: Create variable 'stats' and set it to {\"hp\": 100, \"mp\": 50}\n# TODO: Write code below\n\n# Step 2: For 'k, v in stats.items(): print(f\"{k}:{v}\")'\n# TODO: Write code below\n",
    "solutionCode": "stats = {\"hp\": 100, \"mp\": 50}\nfor k, v in stats.items():\n    print(f\"{k}:{v}\")\n",
    "hints": [
      "Concept: Loop through both keys and values simultaneously with for key, val in dict.items(). Think of it like: Reading a flashcard: reading the question on the front (key) and the answer on the back (value).",
      "Syntax Blueprint: Loop over sequences with `for item in sequence:` and indent the body. For condition loops, use `while condition:`.",
      "Step-by-Step Target:\n1. Create `stats = {\"hp\": 100, \"mp\": 50}`.\n2. For `k, v in stats.items(): print(f\"{k}:{v}\")`.\nKey Tip: Loop with `for k, v in stats.items():`"
    ],
    "testCases": [
      {
        "id": "py-80-tc-1",
        "description": "stats has hp 100",
        "testFn": "stats.hp === 100"
      }
    ]
  },
  {
    "id": "py-81-nested-dictionaries",
    "title": "81. Structuring Data with Nested Dictionaries",
    "slug": "nested-dictionaries",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Model complex nested data like JSON by nesting dictionaries within dictionaries.",
    "concepts": [
      "Nested dicts",
      "Multi-key chained access"
    ],
    "analogy": "A filing cabinet: opening drawer 1, inside folder 'Finance', inside file 'Report'.",
    "explanationMarkdown": "### Nested Dictionaries\n```python\ncompany = {\n    \"name\": \"Acme\",\n    \"location\": {\"city\": \"Austin\", \"zip\": 78701}\n}\nprint(company[\"location\"][\"city\"]) # \"Austin\"\n```",
    "workedExample": {
      "title": "Worked Example: Server config",
      "code": "server = {\"db\": {\"host\": \"localhost\", \"port\": 5432}}\nprint(server[\"db\"][\"port\"])",
      "explanation": "• Retrieves 5432.",
      "expectedOutput": "5432"
    },
    "exerciseSteps": [
      "Create `client = {\"profile\": {\"email\": \"test@dev.io\"}}`.",
      "Access email: `email = client[\"profile\"][\"email\"]`.",
      "Print `email`."
    ],
    "initialCode": "# Step 1: Create variable 'client' and set it to {\"profile\": {\"email\": \"test@dev.io\"}}\n# TODO: Write code below\n\n# Step 2: Access email: 'email = client[\"profile\"][\"email\"]'\n# TODO: Write code below\n\n# Step 3: Print 'email'\n# TODO: Write code below\n",
    "solutionCode": "client = {\"profile\": {\"email\": \"test@dev.io\"}}\nemail = client[\"profile\"][\"email\"]\nprint(email)\n",
    "hints": [
      "Concept: Model complex nested data like JSON by nesting dictionaries within dictionaries. Think of it like: A filing cabinet: opening drawer 1, inside folder 'Finance', inside file 'Report'.",
      "Syntax Blueprint: Decorate functions by placing `@decorator_name` on the line immediately preceding the `def` statement.",
      "Step-by-Step Target:\n1. Create `client = {\"profile\": {\"email\": \"test@dev.io\"}}`.\n2. Access email: `email = client[\"profile\"][\"email\"]`.\n3. Print `email`.\nKey Tip: Access `client[\"profile\"][\"email\"]`"
    ],
    "testCases": [
      {
        "id": "py-81-tc-1",
        "description": "email is test@dev.io",
        "testFn": "email === 'test@dev.io'"
      }
    ]
  },
  {
    "id": "py-82-key-existence-in",
    "title": "82. Key Existence with 'in'",
    "slug": "key-existence-in",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Check if a key exists in a dictionary using the in operator before reading it.",
    "concepts": [
      "'key' in dict",
      "Membership lookup"
    ],
    "analogy": "Checking if a locker number is assigned on the master roster.",
    "explanationMarkdown": "### Key Checking\n```python\nperms = {\"read\": True, \"write\": False}\nif \"admin\" in perms:\n    print(\"Has admin\")\n```",
    "workedExample": {
      "title": "Worked Example: Checking key",
      "code": "user = {\"username\": \"dev99\"}\nhas_email = \"email\" in user\nprint(has_email)",
      "explanation": "• Returns False.",
      "expectedOutput": "False"
    },
    "exerciseSteps": [
      "Create `fruit = {\"name\": \"Apple\", \"price\": 2}`.",
      "Check if `\"price\"` in fruit: `has_price = \"price\" in fruit`.",
      "Print `has_price`."
    ],
    "initialCode": "# Step 1: Create variable 'fruit' and set it to {\"name\": \"Apple\", \"price\": 2}\n# TODO: Write code below\n\n# Step 2: Check if '\"price\"' in fruit: 'has_price = \"price\" in fruit'\n# TODO: Write code below\n\n# Step 3: Print 'has_price'\n# TODO: Write code below\n",
    "solutionCode": "fruit = {\"name\": \"Apple\", \"price\": 2}\nhas_price = \"price\" in fruit\nprint(has_price)\n",
    "hints": [
      "Concept: Check if a key exists in a dictionary using the in operator before reading it. Think of it like: Checking if a locker number is assigned on the master roster.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `fruit = {\"name\": \"Apple\", \"price\": 2}`.\n2. Check if `\"price\"` in fruit: `has_price = \"price\" in fruit`.\n3. Print `has_price`.\nKey Tip: Use `\"price\" in fruit`"
    ],
    "testCases": [
      {
        "id": "py-82-tc-1",
        "description": "has_price is True",
        "testFn": "has_price === true"
      }
    ]
  },
  {
    "id": "py-83-dict-update-merge",
    "title": "83. Merging Dictionaries with .update()",
    "slug": "dict-update-merge",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Merge another dictionary into an existing one using dict.update(other).",
    "concepts": [
      "dict.update(other)",
      "Merging records"
    ],
    "analogy": "Updating a customer file with new contact details sent from another department.",
    "explanationMarkdown": "### .update()\n```python\nbase = {\"theme\": \"dark\"}\nextra = {\"font\": 16, \"theme\": \"light\"}\nbase.update(extra) # Overwrites conflicting keys\n```",
    "workedExample": {
      "title": "Worked Example: Merging dicts",
      "code": "a = {\"x\": 1}\na.update({\"y\": 2})\nprint(len(a))",
      "explanation": "• a now has 2 keys.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `user = {\"id\": 1}`.",
      "Update with `user.update({\"role\": \"editor\"})`.",
      "Print `user[\"role\"]`."
    ],
    "initialCode": "# Step 1: Create variable 'user' and set it to {\"id\": 1}\n# TODO: Write code below\n\n# Step 2: Update with 'user.update({\"role\": \"editor\"})'\n# TODO: Write code below\n\n# Step 3: Print 'user[\"role\"]'\n# TODO: Write code below\n",
    "solutionCode": "user = {\"id\": 1}\nuser.update({\"role\": \"editor\"})\nprint(user[\"role\"])\n",
    "hints": [
      "Concept: Merge another dictionary into an existing one using dict.update(other). Think of it like: Updating a customer file with new contact details sent from another department.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `user = {\"id\": 1}`.\n2. Update with `user.update({\"role\": \"editor\"})`.\n3. Print `user[\"role\"]`.\nKey Tip: Call `user.update({\"role\": \"editor\"})`"
    ],
    "testCases": [
      {
        "id": "py-83-tc-1",
        "description": "user has role editor",
        "testFn": "user.role === 'editor'"
      }
    ]
  },
  {
    "id": "py-84-dict-clear",
    "title": "84. Clearing Dictionaries with .clear()",
    "slug": "dict-clear",
    "language": "python",
    "category": "Module 8: Dictionaries & Key-Value Stores",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Empty all key-value entries from a dictionary in place using .clear().",
    "concepts": [
      "dict.clear()",
      "Resetting data"
    ],
    "analogy": "Wiping a whiteboard completely clean at the end of class.",
    "explanationMarkdown": "### .clear()\n```python\nsession = {\"token\": \"abc\"}\nsession.clear() # session is now {}\n```",
    "workedExample": {
      "title": "Worked Example: Resetting cache",
      "code": "cache = {\"a\": 1}\ncache.clear()\nprint(len(cache))",
      "explanation": "• Returns 0.",
      "expectedOutput": "0"
    },
    "exerciseSteps": [
      "Create `temp_data = {\"x\": 10, \"y\": 20}`.",
      "Clear it with `temp_data.clear()`.",
      "Print `temp_data`."
    ],
    "initialCode": "# Step 1: Create variable 'temp_data' and set it to {\"x\": 10, \"y\": 20}\n# TODO: Write code below\n\n# Step 2: Clear it with 'temp_data.clear()'\n# TODO: Write code below\n\n# Step 3: Print 'temp_data'\n# TODO: Write code below\n",
    "solutionCode": "temp_data = {\"x\": 10, \"y\": 20}\ntemp_data.clear()\nprint(temp_data)\n",
    "hints": [
      "Concept: Empty all key-value entries from a dictionary in place using .clear(). Think of it like: Wiping a whiteboard completely clean at the end of class.",
      "Syntax Blueprint: Dictionaries store key-value mappings: `my_dict = {\"key\": value}`. Access or modify values via `my_dict[\"key\"]`.",
      "Step-by-Step Target:\n1. Create `temp_data = {\"x\": 10, \"y\": 20}`.\n2. Clear it with `temp_data.clear()`.\n3. Print `temp_data`.\nKey Tip: Call `temp_data.clear()`"
    ],
    "testCases": [
      {
        "id": "py-84-tc-1",
        "description": "temp_data is empty",
        "testFn": "Object.keys(temp_data).length === 0"
      }
    ]
  }
];
