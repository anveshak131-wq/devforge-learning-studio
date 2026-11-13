import { Lesson } from '../../../types';

export const MODULE_3_LESSONS: Lesson[] = [
  {
    "id": "js-25-uppercase-lowercase",
    "title": "25. Changing Case: toUpperCase & toLowerCase",
    "slug": "uppercase-lowercase",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert text to all CAPITAL or all lowercase letters.",
    "concepts": [
      ".toUpperCase()",
      ".toLowerCase()"
    ],
    "analogy": "Pressing the Caps Lock button on a keyboard.",
    "explanationMarkdown": "### Changing Case\nStrings have methods to transform letter casing:\n```javascript\nlet word = \"hello\";\nconsole.log(word.toUpperCase()); // \"HELLO\"\nconsole.log(\"WORLD\".toLowerCase()); // \"world\"\n```",
    "workedExample": {
      "title": "Worked Example: Normalizing Case",
      "code": "let email = \"USER@EXAMPLE.COM\";\nconsole.log(email.toLowerCase());",
      "explanation": "\u2022 Converts to clean lowercase user@example.com.",
      "expectedOutput": "user@example.com"
    },
    "exerciseSteps": [
      "Convert `\"javascript\"` to uppercase.",
      "Assign to `let loud = \"javascript\".toUpperCase();`.",
      "Print `loud`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let loud = \"javascript\".toUpperCase();\nconsole.log(loud);\n",
    "hints": [
      "Use `\"javascript\".toUpperCase()`"
    ],
    "testCases": [
      {
        "id": "js-25-tc-1",
        "description": "loud is JAVASCRIPT",
        "testFn": "typeof loud !== 'undefined' && loud === 'JAVASCRIPT'"
      }
    ]
  },
  {
    "id": "js-26-trimming-whitespace",
    "title": "26. Cleaning Input: Trimming Whitespace with .trim()",
    "slug": "trimming-whitespace",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Remove accidental spaces from the beginning and end of text.",
    "concepts": [
      ".trim()",
      "User input sanitization"
    ],
    "analogy": "Trimming the rough crust edges off a slice of bread.",
    "explanationMarkdown": "### The .trim() Method\nUsers often enter accidental spaces when typing. `.trim()` strips them off:\n```javascript\nlet input = \"   alex@email.com   \";\nconsole.log(input.trim()); // \"alex@email.com\"\n```",
    "workedExample": {
      "title": "Worked Example: Clean Username",
      "code": "let raw = \"   coder123 \";\nconsole.log(raw.trim());",
      "explanation": "\u2022 Removes extra leading and trailing whitespace.",
      "expectedOutput": "coder123"
    },
    "exerciseSteps": [
      "Trim `\"   cleanMe   \"` using `.trim()`.",
      "Assign to `let cleanText = \"   cleanMe   \".trim();`.",
      "Print `cleanText`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let cleanText = \"   cleanMe   \".trim();\nconsole.log(cleanText);\n",
    "hints": [
      "Use `.trim()`"
    ],
    "testCases": [
      {
        "id": "js-26-tc-1",
        "description": "cleanText is 'cleanMe'",
        "testFn": "typeof cleanText !== 'undefined' && cleanText === 'cleanMe'"
      }
    ]
  },
  {
    "id": "js-27-string-includes",
    "title": "27. Searching Text with .includes()",
    "slug": "string-includes",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Check if a piece of text exists inside a larger string.",
    "concepts": [
      ".includes()",
      "Case-sensitive search",
      "Returning true or false"
    ],
    "analogy": "Ctrl+F (or Cmd+F) search on a webpage.",
    "explanationMarkdown": "### Checking if a String Contains Words\n`.includes()` returns `true` or `false`:\n```javascript\nlet phrase = \"Welcome to the matrix\";\nconsole.log(phrase.includes(\"matrix\")); // true\nconsole.log(phrase.includes(\"pizza\"));  // false\n```",
    "workedExample": {
      "title": "Worked Example: Keyword Finder",
      "code": "let message = \"Your order has shipped!\";\nconsole.log(message.includes(\"shipped\"));",
      "explanation": "\u2022 Returns true because shipped is inside the message.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Check if `\"Super Mario\"` includes `\"Mario\"`.",
      "Assign to `let hasMario = \"Super Mario\".includes(\"Mario\");`.",
      "Print `hasMario`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let hasMario = \"Super Mario\".includes(\"Mario\");\nconsole.log(hasMario);\n",
    "hints": [
      "Write `\"Super Mario\".includes(\"Mario\")`"
    ],
    "testCases": [
      {
        "id": "js-27-tc-1",
        "description": "hasMario is true",
        "testFn": "typeof hasMario !== 'undefined' && hasMario === true"
      }
    ]
  },
  {
    "id": "js-28-string-indexof",
    "title": "28. Finding Positions with .indexOf()",
    "slug": "string-indexof",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Find the numerical index position where a word starts inside a string.",
    "concepts": [
      ".indexOf()",
      "0-based character index",
      "-1 when not found"
    ],
    "analogy": "Looking up the page number of a chapter in a book's index table.",
    "explanationMarkdown": "### Finding Positions with .indexOf()\nReturns the index where the match starts, or `-1` if not found:\n```javascript\nlet sentence = \"Hello world\";\nconsole.log(sentence.indexOf(\"world\")); // 6\nconsole.log(sentence.indexOf(\"banana\")); // -1\n```",
    "workedExample": {
      "title": "Worked Example: Finding an @ in email",
      "code": "let email = \"dev@example.com\";\nconsole.log(email.indexOf(\"@\"));",
      "explanation": "\u2022 @ is at index 3.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Find position of `'code'` in `'Learn to code today'`. Assign to `let pos = 'Learn to code today'.indexOf('code');`.",
      "Print `pos`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let pos = 'Learn to code today'.indexOf('code');\nconsole.log(pos);\n",
    "hints": [
      "Use `.indexOf('code')`"
    ],
    "testCases": [
      {
        "id": "js-28-tc-1",
        "description": "pos is 9",
        "testFn": "typeof pos !== 'undefined' && pos === 9"
      }
    ]
  },
  {
    "id": "js-29-string-slice",
    "title": "29. Extracting Substrings with .slice()",
    "slug": "string-slice",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Cut out a portion of a string using start and end indices.",
    "concepts": [
      ".slice(start, end)",
      "Non-destructive slicing"
    ],
    "analogy": "Slicing off a piece of cake between two marks.",
    "explanationMarkdown": "### Cutting with .slice()\n`.slice(start, end)` extracts characters from start index up to (but not including) end:\n```javascript\nlet str = \"JavaScript\";\nconsole.log(str.slice(0, 4)); // \"Java\"\n```",
    "workedExample": {
      "title": "Worked Example: First 3 Letters",
      "code": "let name = \"Alexander\";\nconsole.log(name.slice(0, 4)); // Alex",
      "explanation": "\u2022 Takes indices 0, 1, 2, 3.",
      "expectedOutput": "Alex"
    },
    "exerciseSteps": [
      "Slice the first 3 characters from `'Developer'`. Assign to `let shortName = 'Developer'.slice(0, 3);`.",
      "Print `shortName`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let shortName = 'Developer'.slice(0, 3);\nconsole.log(shortName);\n",
    "hints": [
      "Use `slice(0, 3)`"
    ],
    "testCases": [
      {
        "id": "js-29-tc-1",
        "description": "shortName is 'Dev'",
        "testFn": "typeof shortName !== 'undefined' && shortName === 'Dev'"
      }
    ]
  },
  {
    "id": "js-30-string-replace",
    "title": "30. Replacing Words with .replace() & .replaceAll()",
    "slug": "string-replace",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Swap out words or patterns with new replacement text.",
    "concepts": [
      ".replace()",
      ".replaceAll()"
    ],
    "analogy": "Find and Replace in a text editor.",
    "explanationMarkdown": "### Replacing Text\n```javascript\nlet text = \"I like dogs\";\nlet updated = text.replace(\"dogs\", \"cats\");\nconsole.log(updated); // \"I like cats\"\n```",
    "workedExample": {
      "title": "Worked Example: Replace Greeting",
      "code": "let msg = \"Hello Bob\";\nconsole.log(msg.replace(\"Bob\", \"Alice\"));",
      "explanation": "\u2022 Replaces Bob with Alice.",
      "expectedOutput": "Hello Alice"
    },
    "exerciseSteps": [
      "Replace `'bad'` with `'good'` in `'This is a bad day'`. Assign to `let fixed = 'This is a bad day'.replace('bad', 'good');`.",
      "Print `fixed`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let fixed = 'This is a bad day'.replace('bad', 'good');\nconsole.log(fixed);\n",
    "hints": [
      "Use `.replace('bad', 'good')`"
    ],
    "testCases": [
      {
        "id": "js-30-tc-1",
        "description": "fixed is 'This is a good day'",
        "testFn": "typeof fixed !== 'undefined' && fixed === 'This is a good day'"
      }
    ]
  },
  {
    "id": "js-31-string-split",
    "title": "31. Splitting Strings into Arrays with .split()",
    "slug": "string-split",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Divide a sentence or comma-separated list into an array of items.",
    "concepts": [
      ".split(delimiter)",
      "Turning strings into arrays"
    ],
    "analogy": "Cutting a loaf of bread into individual slices.",
    "explanationMarkdown": "### Splitting Strings\n```javascript\nlet csv = \"apple,banana,orange\";\nlet fruits = csv.split(\",\");\nconsole.log(fruits); // [\"apple\", \"banana\", \"orange\"]\n```",
    "workedExample": {
      "title": "Worked Example: Words in Sentence",
      "code": "let sentence = \"Code every day\";\nlet words = sentence.split(\" \");\nconsole.log(words.length); // 3",
      "explanation": "\u2022 Splits by spaces into 3 words.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Split `'red,green,blue'` by comma. Assign to `let colors = 'red,green,blue'.split(',');`.",
      "Print `colors[0]`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let colors = 'red,green,blue'.split(',');\nconsole.log(colors[0]);\n",
    "hints": [
      "Use `.split(',')`"
    ],
    "testCases": [
      {
        "id": "js-31-tc-1",
        "description": "colors has 3 items and first is red",
        "testFn": "Array.isArray(colors) && colors.length === 3 && colors[0] === 'red'"
      }
    ]
  },
  {
    "id": "js-32-string-repeat",
    "title": "32. Repeating Strings with .repeat()",
    "slug": "string-repeat",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Duplicate a string multiple times easily with .repeat(count).",
    "concepts": [
      ".repeat(count)"
    ],
    "analogy": "A rubber stamp stamping the same pattern 5 times in a row.",
    "explanationMarkdown": "### The .repeat() Method\n```javascript\nlet echo = \"Ha!\".repeat(3);\nconsole.log(echo); // \"Ha!Ha!Ha!\"\n```",
    "workedExample": {
      "title": "Worked Example: Star Rating",
      "code": "let stars = \"\u2605\".repeat(5);\nconsole.log(stars);",
      "explanation": "\u2022 Produces 5 stars.",
      "expectedOutput": "\u2605\u2605\u2605\u2605\u2605"
    },
    "exerciseSteps": [
      "Repeat `'*'` 10 times using `'*'.repeat(10)`. Assign to `let divider = '*'.repeat(10);`.",
      "Print `divider`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let divider = '*'.repeat(10);\nconsole.log(divider);\n",
    "hints": [
      "Write `'*'.repeat(10)`"
    ],
    "testCases": [
      {
        "id": "js-32-tc-1",
        "description": "divider has 10 stars",
        "testFn": "typeof divider !== 'undefined' && divider === '**********'"
      }
    ]
  },
  {
    "id": "js-33-starts-ends-with",
    "title": "33. Prefix & Suffix Checking: startsWith & endsWith",
    "slug": "starts-ends-with",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Check if a string begins or finishes with specific characters.",
    "concepts": [
      ".startsWith()",
      ".endsWith()"
    ],
    "analogy": "Checking if a web address begins with 'https://' or a filename ends with '.pdf'.",
    "explanationMarkdown": "### startsWith and endsWith\n```javascript\nlet url = \"https://devforge.com\";\nconsole.log(url.startsWith(\"https://\")); // true\nconsole.log(url.endsWith(\".com\"));       // true\n```",
    "workedExample": {
      "title": "Worked Example: File Extension Check",
      "code": "let file = \"report.pdf\";\nconsole.log(file.endsWith(\".pdf\"));",
      "explanation": "\u2022 Confirms file is a PDF.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Check if `'document.docx'` ends with `'.docx'`. Assign to `let isDoc = 'document.docx'.endsWith('.docx');`.",
      "Print `isDoc`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isDoc = 'document.docx'.endsWith('.docx');\nconsole.log(isDoc);\n",
    "hints": [
      "Use `.endsWith('.docx')`"
    ],
    "testCases": [
      {
        "id": "js-33-tc-1",
        "description": "isDoc is true",
        "testFn": "typeof isDoc !== 'undefined' && isDoc === true"
      }
    ]
  },
  {
    "id": "js-34-string-padding",
    "title": "34. Formatting Numbers: padStart and padEnd",
    "slug": "string-padding",
    "language": "javascript",
    "category": "Module 3: String Manipulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Pad text with leading or trailing zeros or spaces.",
    "concepts": [
      ".padStart(length, char)",
      ".padEnd(length, char)"
    ],
    "analogy": "A digital clock showing '09:05' instead of '9:5'.",
    "explanationMarkdown": "### String Padding\n```javascript\nlet sec = \"5\";\nconsole.log(sec.padStart(2, \"0\")); // \"05\"\n```",
    "workedExample": {
      "title": "Worked Example: Receipt Number",
      "code": "let orderId = \"42\";\nconsole.log(orderId.padStart(6, \"0\"));",
      "explanation": "\u2022 Pads to 6 digits: 000042.",
      "expectedOutput": "000042"
    },
    "exerciseSteps": [
      "Pad `'7'` to 4 digits with `'0'` using `'7'.padStart(4, '0')`. Assign to `let padded = '7'.padStart(4, '0');`.",
      "Print `padded`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let padded = '7'.padStart(4, '0');\nconsole.log(padded);\n",
    "hints": [
      "Use `.padStart(4, '0')`"
    ],
    "testCases": [
      {
        "id": "js-34-tc-1",
        "description": "padded is '0007'",
        "testFn": "typeof padded !== 'undefined' && padded === '0007'"
      }
    ]
  }
];
