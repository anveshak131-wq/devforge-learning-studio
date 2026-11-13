import { Lesson } from '../../../types';

export const module11Lessons: Lesson[] = [
  {
    "id": "js-123-try-catch-basics",
    "title": "123. Graceful Error Handling with try...catch",
    "slug": "try-catch-basics",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Catch and handle runtime exceptions without crashing your entire application.",
    "concepts": [
      "try { ... } catch (err) { ... }",
      "Preventing fatal crashes"
    ],
    "analogy": "An acrobat performing with a safety net below: even if they slip, the net catches them safely.",
    "explanationMarkdown": "### try...catch\n```javascript\ntry {\n  let result = riskyOperation();\n} catch (error) {\n  console.log(\"Caught error:\", error.message);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Catching Invalid Parse",
      "code": "let status = \"ok\";\ntry {\n  JSON.parse(\"{bad_json\");\n} catch (e) {\n  status = \"handled\";\n}\nconsole.log(status);",
      "explanation": "\u2022 The syntax error in JSON was caught without stopping the script.",
      "expectedOutput": "handled"
    },
    "exerciseSteps": [
      "Wrap `JSON.parse(\"invalid\")` inside a try block.",
      "Catch the error and set `let errorCaught = true;`.",
      "Print `errorCaught`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let errorCaught = false;\ntry {\n  JSON.parse(\"invalid\");\n} catch (err) {\n  errorCaught = true;\n}\nconsole.log(errorCaught);\n",
    "hints": [
      "Set `errorCaught = true;` inside catch"
    ],
    "testCases": [
      {
        "id": "js-123-tc-1",
        "description": "errorCaught is true",
        "testFn": "errorCaught === true"
      }
    ]
  },
  {
    "id": "js-124-finally-clause",
    "title": "124. Guaranteed Cleanup with the 'finally' Block",
    "slug": "finally-clause",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Execute cleanup operations regardless of whether an error was thrown or not.",
    "concepts": [
      "finally { ... }",
      "Resource cleanup"
    ],
    "analogy": "Returning borrowed books to the library shelf when you leave, whether you finished reading them or not.",
    "explanationMarkdown": "### The finally Block\nThe `finally` block **always** runs:\n```javascript\ntry {\n  openDatabase();\n} catch (e) {\n  logError(e);\n} finally {\n  closeDatabase(); // Always executes!\n}\n```",
    "workedExample": {
      "title": "Worked Example: Cleanup Flag",
      "code": "let cleaned = false;\ntry {\n  // do work\n} finally {\n  cleaned = true;\n}\nconsole.log(cleaned);",
      "explanation": "\u2022 finally runs after try completes.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Create `let cleanedUp = false;`.",
      "Inside a try/finally block, set `cleanedUp = true;` in finally.",
      "Print `cleanedUp`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let cleanedUp = false;\ntry {\n  // safe work\n} finally {\n  cleanedUp = true;\n}\nconsole.log(cleanedUp);\n",
    "hints": [
      "Place `cleanedUp = true;` in the finally block"
    ],
    "testCases": [
      {
        "id": "js-124-tc-1",
        "description": "cleanedUp is true",
        "testFn": "cleanedUp === true"
      }
    ]
  },
  {
    "id": "js-125-throwing-custom-errors",
    "title": "125. Throwing Custom Errors with 'throw new Error()'",
    "slug": "throwing-custom-errors",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Halt invalid operations and alert callers by raising explicit exceptions.",
    "concepts": [
      "throw new Error('msg')",
      "Custom validation errors"
    ],
    "analogy": "Pulling the emergency brake on a train when a severe hazard is detected ahead.",
    "explanationMarkdown": "### Throwing Errors\n```javascript\nfunction setAge(age) {\n  if (age < 0) {\n    throw new Error(\"Age cannot be negative\");\n  }\n  return age;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Division Guard",
      "code": "function divide(a, b) {\n  if (b === 0) throw new Error(\"Zero division\");\n  return a / b;\n}\ntry {\n  divide(10, 0);\n} catch (e) {\n  console.log(e.message);\n}",
      "explanation": "\u2022 Catches the thrown error and prints message.",
      "expectedOutput": "Zero division"
    },
    "exerciseSteps": [
      "Write a function `validateAge(age)` that throws `new Error(\"Too young\")` if `age < 18`.",
      "Call `try { validateAge(15); } catch(e) { console.log(e.message); }`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function validateAge(age) {\n  if (age < 18) {\n    throw new Error(\"Too young\");\n  }\n  return true;\n}\nlet msg = \"\";\ntry {\n  validateAge(15);\n} catch (e) {\n  msg = e.message;\n}\nconsole.log(msg);\n",
    "hints": [
      "Use `throw new Error(\"Too young\")`"
    ],
    "testCases": [
      {
        "id": "js-125-tc-1",
        "description": "msg is Too young",
        "testFn": "msg === 'Too young'"
      }
    ]
  },
  {
    "id": "js-126-standard-error-types",
    "title": "126. Understanding Standard Error Types (TypeError, ReferenceError)",
    "slug": "standard-error-types",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Distinguish between TypeError, ReferenceError, RangeError, and SyntaxError.",
    "concepts": [
      "TypeError",
      "ReferenceError",
      "RangeError"
    ],
    "analogy": "Medical triage: distinguishing between a broken bone (TypeError) and a missing patient file (ReferenceError).",
    "explanationMarkdown": "### JavaScript Error Subtypes\n* **TypeError**: Tried to do something impossible on a data type (e.g. `null.f()` or `\"abc\"()`).\n* **ReferenceError**: Tried to read a variable that does not exist.\n* **RangeError**: A number was outside permitted range (e.g. `new Array(-1)`).",
    "workedExample": {
      "title": "Worked Example: Identifying Error Type",
      "code": "let errName = \"\";\ntry {\n  let x = null;\n  x.toString();\n} catch (e) {\n  errName = e.name;\n}\nconsole.log(errName);",
      "explanation": "\u2022 Accessing null.toString throws TypeError.",
      "expectedOutput": "TypeError"
    },
    "exerciseSteps": [
      "Trigger a TypeError inside a try block by calling `null.foo()`.",
      "Capture `e.name` into `let caughtType`.",
      "Print `caughtType`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let caughtType = \"\";\ntry {\n  null.foo();\n} catch (e) {\n  caughtType = e.name;\n}\nconsole.log(caughtType);\n",
    "hints": [
      "Assign `caughtType = e.name;` inside catch"
    ],
    "testCases": [
      {
        "id": "js-126-tc-1",
        "description": "caughtType is TypeError",
        "testFn": "caughtType === 'TypeError'"
      }
    ]
  },
  {
    "id": "js-127-json-stringify",
    "title": "127. Serializing Data to JSON: JSON.stringify",
    "slug": "json-stringify",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Convert JavaScript objects into JSON string format for network transmission and storage.",
    "concepts": [
      "JSON.stringify(obj)",
      "Serialization"
    ],
    "analogy": "Packing furniture into flat, labeled cardboard boxes to ship across the country.",
    "explanationMarkdown": "### JSON.stringify\n```javascript\nlet user = { id: 1, name: \"Alice\" };\nlet jsonStr = JSON.stringify(user);\nconsole.log(jsonStr); // '{\"id\":1,\"name\":\"Alice\"}'\n```",
    "workedExample": {
      "title": "Worked Example: Stringify Array",
      "code": "let nums = [1, 2, 3];\nlet s = JSON.stringify(nums);\nconsole.log(typeof s);",
      "explanation": "\u2022 s is a string.",
      "expectedOutput": "string"
    },
    "exerciseSteps": [
      "Create `let payload = { status: 200, ok: true };`.",
      "Convert to string with `let json = JSON.stringify(payload);`.",
      "Print `json`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let payload = { status: 200, ok: true };\nlet json = JSON.stringify(payload);\nconsole.log(json);\n",
    "hints": [
      "Use `JSON.stringify(payload)`"
    ],
    "testCases": [
      {
        "id": "js-127-tc-1",
        "description": "json contains valid stringified json",
        "testFn": "typeof json === 'string' && json.includes('200') && json.includes('true')"
      }
    ]
  },
  {
    "id": "js-128-json-parse",
    "title": "128. Deserializing Data: JSON.parse",
    "slug": "json-parse",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Reconstruct native JavaScript objects and arrays from received JSON strings.",
    "concepts": [
      "JSON.parse(str)",
      "Deserialization"
    ],
    "analogy": "Unboxing flat-packed furniture and assembling it into a real usable table.",
    "explanationMarkdown": "### JSON.parse\n```javascript\nlet raw = '{\"title\":\"DevForge\",\"stars\":5}';\nlet data = JSON.parse(raw);\nconsole.log(data.title); // \"DevForge\"\n```",
    "workedExample": {
      "title": "Worked Example: Parsing Server Response",
      "code": "let res = '{\"count\":42}';\nlet parsed = JSON.parse(res);\nconsole.log(parsed.count);",
      "explanation": "\u2022 Accesses count property as a number.",
      "expectedOutput": "42"
    },
    "exerciseSteps": [
      "Create `let raw = '{\"role\":\"admin\",\"active\":true}';`.",
      "Parse with `let parsed = JSON.parse(raw);`.",
      "Print `parsed.role`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let raw = '{\"role\":\"admin\",\"active\":true}';\nlet parsed = JSON.parse(raw);\nconsole.log(parsed.role);\n",
    "hints": [
      "Use `JSON.parse(raw)`"
    ],
    "testCases": [
      {
        "id": "js-128-tc-1",
        "description": "parsed.role is admin and parsed.active is true",
        "testFn": "parsed.role === 'admin' && parsed.active === true"
      }
    ]
  },
  {
    "id": "js-129-set-collection-basics",
    "title": "129. Unique Sets: new Set(), .add(), .has() & .delete()",
    "slug": "set-collection-basics",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Store collections of unique values where duplicate entries are automatically discarded.",
    "concepts": [
      "new Set()",
      ".add()",
      ".has()",
      ".delete()",
      ".size"
    ],
    "analogy": "A guest list at a VIP party: writing a person's name twice does not let two identical people in.",
    "explanationMarkdown": "### The Set Object\nA `Set` stores only unique items:\n```javascript\nlet tags = new Set();\ntags.add(\"javascript\");\ntags.add(\"javascript\"); // Ignored! Duplicate\nconsole.log(tags.size); // 1\nconsole.log(tags.has(\"javascript\")); // true\n```",
    "workedExample": {
      "title": "Worked Example: Managing Unique IDs",
      "code": "let ids = new Set([101, 102, 101]);\nconsole.log(ids.size);",
      "explanation": "\u2022 Size is 2 because 101 was duplicated.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `let set = new Set();`.",
      "Add `set.add(\"apple\");` and `set.add(\"banana\");`.",
      "Print `set.has(\"apple\")`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let set = new Set();\nset.add(\"apple\");\nset.add(\"banana\");\nconsole.log(set.has(\"apple\"));\n",
    "hints": [
      "Use `set.has(\"apple\")`"
    ],
    "testCases": [
      {
        "id": "js-129-tc-1",
        "description": "set has size 2 and contains apple",
        "testFn": "set.size === 2 && set.has('apple')"
      }
    ]
  },
  {
    "id": "js-130-deduplicate-arrays-set",
    "title": "130. High-Speed Array Deduplication with Sets",
    "slug": "deduplicate-arrays-set",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Deduplicate arrays in a single line using [...new Set(array)].",
    "concepts": [
      "Array deduplication",
      "[...new Set(arr)]"
    ],
    "analogy": "Dumping a bag of duplicate marbles through a sorting funnel that only lets 1 of each color through.",
    "explanationMarkdown": "### One-Line Deduplication\n```javascript\nlet raw = [1, 2, 2, 3, 3, 3, 4];\nlet unique = [...new Set(raw)];\nconsole.log(unique); // [1, 2, 3, 4]\n```",
    "workedExample": {
      "title": "Worked Example: Clean Tags",
      "code": "let tags = [\"js\", \"react\", \"js\", \"node\"];\nlet clean = [...new Set(tags)];\nconsole.log(clean.length);",
      "explanation": "\u2022 Removes duplicate 'js'.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Create `let duplicates = [\"a\", \"b\", \"a\", \"c\", \"b\"];`.",
      "Create `let unique = [...new Set(duplicates)];`.",
      "Print `unique`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let duplicates = [\"a\", \"b\", \"a\", \"c\", \"b\"];\nlet unique = [...new Set(duplicates)];\nconsole.log(unique);\n",
    "hints": [
      "Use `[...new Set(duplicates)]`"
    ],
    "testCases": [
      {
        "id": "js-130-tc-1",
        "description": "unique contains [a, b, c]",
        "testFn": "Array.isArray(unique) && unique.length === 3 && unique.includes('a') && unique.includes('b') && unique.includes('c')"
      }
    ]
  },
  {
    "id": "js-131-map-collection-basics",
    "title": "131. Keyed Maps: new Map(), .set(), .get() & .has()",
    "slug": "map-collection-basics",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Store key-value pairs where any type (including objects and functions) can be keys.",
    "concepts": [
      "new Map()",
      ".set(k, v)",
      ".get(k)",
      "Map vs Object"
    ],
    "analogy": "A coat check counter where your claim ticket can be a plastic token, an ID card, or an actual physical coin.",
    "explanationMarkdown": "### Map Collection\nUnlike plain Objects, `Map` remembers insertion order and allows **any type** as keys:\n```javascript\nlet map = new Map();\nlet userObj = { id: 1 };\nmap.set(userObj, \"Admin Profile\");\nconsole.log(map.get(userObj)); // \"Admin Profile\"\n```",
    "workedExample": {
      "title": "Worked Example: Keyed lookup",
      "code": "let scores = new Map();\nscores.set(\"Alice\", 98);\nconsole.log(scores.get(\"Alice\"));",
      "explanation": "\u2022 Gets value 98 for key Alice.",
      "expectedOutput": "98"
    },
    "exerciseSteps": [
      "Create `let cache = new Map();`.",
      "Store key 101 with value `\"Found\"`: `cache.set(101, \"Found\");`.",
      "Print `cache.get(101)`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let cache = new Map();\ncache.set(101, \"Found\");\nconsole.log(cache.get(101));\n",
    "hints": [
      "Use `cache.set(key, val)` and `cache.get(key)`"
    ],
    "testCases": [
      {
        "id": "js-131-tc-1",
        "description": "cache.get(101) returns Found",
        "testFn": "cache.get(101) === 'Found'"
      }
    ]
  },
  {
    "id": "js-132-structured-clone",
    "title": "132. Deep Cloning Objects with structuredClone()",
    "slug": "structured-clone",
    "language": "javascript",
    "category": "Module 11: Error Handling & Modern Collections",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Create true, deep copies of nested objects and arrays without mutating the original.",
    "concepts": [
      "structuredClone(obj)",
      "Deep copy vs shallow copy"
    ],
    "analogy": "Cloning a multi-story building down to every piece of furniture inside, so painting the clone's walls doesn't paint the original.",
    "explanationMarkdown": "### structuredClone\nNative deep cloning without JSON quirks:\n```javascript\nlet original = { user: { name: \"Leo\" } };\nlet copy = structuredClone(original);\ncopy.user.name = \"Max\";\nconsole.log(original.user.name); // Still \"Leo\"!\n```",
    "workedExample": {
      "title": "Worked Example: Deep Array Copy",
      "code": "let arr = [[1, 2]];\nlet dup = structuredClone(arr);\ndup[0].push(3);\nconsole.log(arr[0].length);",
      "explanation": "\u2022 Original array remains length 2.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `let original = { stats: { hp: 100 } };`.",
      "Deep clone with `let clone = structuredClone(original);`.",
      "Mutate `clone.stats.hp = 50;` and print `original.stats.hp`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let original = { stats: { hp: 100 } };\nlet clone = structuredClone(original);\nclone.stats.hp = 50;\nconsole.log(original.stats.hp);\n",
    "hints": [
      "Use `structuredClone(original)`"
    ],
    "testCases": [
      {
        "id": "js-132-tc-1",
        "description": "original hp remains 100 while clone is 50",
        "testFn": "original.stats.hp === 100 && clone.stats.hp === 50"
      }
    ]
  }
];
