import { Lesson } from '../../../types';

export const MODULE_4_LESSONS: Lesson[] = [
  {
    "id": "js-35-if-statement",
    "title": "35. Making Choices: The if Statement",
    "slug": "if-statement",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Run code only when a condition evaluates to true.",
    "concepts": [
      "if (condition)",
      "Block execution {}"
    ],
    "analogy": "A door that unlocks only if you scan the right keycard.",
    "explanationMarkdown": "### The if Statement\n```javascript\nlet score = 80;\nif (score >= 50) {\n  console.log(\"Passed!\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Age Check",
      "code": "let age = 20;\nif (age >= 18) {\n  console.log(\"Adult\");\n}",
      "explanation": "\u2022 Condition is true, so 'Adult' is printed.",
      "expectedOutput": "Adult"
    },
    "exerciseSteps": [
      "Look at `let isSunny = true;`.",
      "If `isSunny`, print `\"Wear sunglasses\"`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isSunny = true;\nif (isSunny) {\n  console.log(\"Wear sunglasses\");\n}\n",
    "hints": [
      "Write `if (isSunny) { console.log(\"Wear sunglasses\"); }`"
    ],
    "testCases": [
      {
        "id": "js-35-tc-1",
        "description": "Prints 'Wear sunglasses'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Wear sunglasses'))"
      }
    ]
  },
  {
    "id": "js-36-else-fallback",
    "title": "36. The Fallback: else Statement",
    "slug": "else-fallback",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Provide a default action when the if condition is false.",
    "concepts": [
      "else keyword",
      "Either/or logic"
    ],
    "analogy": "A fork in the road: take path A if open, else take path B.",
    "explanationMarkdown": "### if...else\n```javascript\nlet lightsOn = false;\nif (lightsOn) {\n  console.log(\"Room is bright\");\n} else {\n  console.log(\"Room is dark\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Logged in check",
      "code": "let logged = false;\nif (logged) {\n  console.log(\"Welcome\");\n} else {\n  console.log(\"Please sign in\");\n}",
      "explanation": "\u2022 Since logged is false, the else block runs.",
      "expectedOutput": "Please sign in"
    },
    "exerciseSteps": [
      "Check `let balance = 5;`.",
      "If balance >= 10 print 'Can buy', else print 'Need more cash'."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let balance = 5;\nif (balance >= 10) {\n  console.log(\"Can buy\");\n} else {\n  console.log(\"Need more cash\");\n}\n",
    "hints": [
      "Write `else { console.log(\"Need more cash\"); }`"
    ],
    "testCases": [
      {
        "id": "js-36-tc-1",
        "description": "Prints 'Need more cash'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Need more cash'))"
      }
    ]
  },
  {
    "id": "js-37-else-if-chains",
    "title": "37. Multi-way Choices: else if Chains",
    "slug": "else-if-chains",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Test multiple mutually exclusive conditions in order.",
    "concepts": [
      "else if",
      "Ordered conditions"
    ],
    "analogy": "A traffic signal: Green -> Go, Yellow -> Slow, Red -> Stop.",
    "explanationMarkdown": "### else if Chains\n```javascript\nlet score = 75;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 70) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Traffic Light",
      "code": "let light = \"yellow\";\nif (light === \"green\") {\n  console.log(\"Go\");\n} else if (light === \"yellow\") {\n  console.log(\"Caution\");\n} else {\n  console.log(\"Stop\");\n}",
      "explanation": "\u2022 Matches yellow condition.",
      "expectedOutput": "Caution"
    },
    "exerciseSteps": [
      "Look at `let temp = 35;`.",
      "If temp > 30 print 'Hot', else if temp > 15 print 'Warm', else print 'Cold'."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let temp = 35;\nif (temp > 30) {\n  console.log(\"Hot\");\n} else if (temp > 15) {\n  console.log(\"Warm\");\n} else {\n  console.log(\"Cold\");\n}\n",
    "hints": [
      "Write `if (temp > 30) { console.log(\"Hot\"); }`"
    ],
    "testCases": [
      {
        "id": "js-37-tc-1",
        "description": "Prints 'Hot'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Hot'))"
      }
    ]
  },
  {
    "id": "js-38-logical-and",
    "title": "38. Logical AND (&&): Both Must Be True",
    "slug": "logical-and",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Require two or more conditions to both be true simultaneously.",
    "concepts": [
      "&& operator",
      "Combined requirements"
    ],
    "analogy": "Entering a bank vault requires BOTH the manager's key AND the guard's code.",
    "explanationMarkdown": "### Logical AND (&&)\n```javascript\nlet hasTicket = true;\nlet hasId = true;\nif (hasTicket && hasId) {\n  console.log(\"Boarding flight\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Driving Eligibility",
      "code": "let age = 22;\nlet hasLicense = true;\nif (age >= 18 && hasLicense) {\n  console.log(\"Can drive\");\n}",
      "explanation": "\u2022 Both conditions met.",
      "expectedOutput": "Can drive"
    },
    "exerciseSteps": [
      "Check if `battery > 20 && hasSignal === true`.",
      "If so, print 'Call allowed'."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let battery = 50;\nlet hasSignal = true;\nif (battery > 20 && hasSignal) {\n  console.log(\"Call allowed\");\n}\n",
    "hints": [
      "Use `battery > 20 && hasSignal`"
    ],
    "testCases": [
      {
        "id": "js-38-tc-1",
        "description": "Prints 'Call allowed'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Call allowed'))"
      }
    ]
  },
  {
    "id": "js-39-logical-or",
    "title": "39. Logical OR (||): At Least One Must Be True",
    "slug": "logical-or",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Proceed if either the first condition OR the second condition is true.",
    "concepts": [
      "|| operator",
      "Alternative requirements"
    ],
    "analogy": "Buying coffee with cash OR credit card \u2014 either one works.",
    "explanationMarkdown": "### Logical OR (||)\n```javascript\nlet isWeekend = true;\nlet isHoliday = false;\nif (isWeekend || isHoliday) {\n  console.log(\"No work today!\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Free Shipping",
      "code": "let isMember = false;\nlet cartTotal = 120;\nif (isMember || cartTotal > 100) {\n  console.log(\"Free shipping applied\");\n}",
      "explanation": "\u2022 cartTotal > 100 is true, so block executes.",
      "expectedOutput": "Free shipping applied"
    },
    "exerciseSteps": [
      "Check if `isStudent || isSenior`.",
      "Print 'Discount granted'."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isStudent = true;\nlet isSenior = false;\nif (isStudent || isSenior) {\n  console.log(\"Discount granted\");\n}\n",
    "hints": [
      "Write `if (isStudent || isSenior) { ... }`"
    ],
    "testCases": [
      {
        "id": "js-39-tc-1",
        "description": "Prints 'Discount granted'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Discount granted'))"
      }
    ]
  },
  {
    "id": "js-40-logical-not",
    "title": "40. Logical NOT (!): Inverting Truth",
    "slug": "logical-not",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flip true to false and false to true using !.",
    "concepts": [
      "! operator",
      "Inverting conditions"
    ],
    "analogy": "A light dimmer switch inverted: pressing it turns ON when it was OFF.",
    "explanationMarkdown": "### Logical NOT (!)\n```javascript\nlet isLocked = false;\nconsole.log(!isLocked); // true\n```",
    "workedExample": {
      "title": "Worked Example: Empty Check",
      "code": "let isReady = false;\nif (!isReady) {\n  console.log(\"Please wait\");\n}",
      "explanation": "\u2022 !false becomes true.",
      "expectedOutput": "Please wait"
    },
    "exerciseSteps": [
      "Check `if (!isMuted)` print 'Audio playing'."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isMuted = false;\nif (!isMuted) {\n  console.log(\"Audio playing\");\n}\n",
    "hints": [
      "Write `if (!isMuted) { ... }`"
    ],
    "testCases": [
      {
        "id": "js-40-tc-1",
        "description": "Prints 'Audio playing'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Audio playing'))"
      }
    ]
  },
  {
    "id": "js-41-truthy-falsy",
    "title": "41. Truthy and Falsy Values",
    "slug": "truthy-falsy",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Understand which non-boolean values evaluate to false (0, '', null, undefined, NaN).",
    "concepts": [
      "Falsy list: 0, '', null, undefined, NaN, false",
      "Truthy values"
    ],
    "analogy": "Checking whether an envelope is empty ('', 0) or contains a letter ('hello', 42).",
    "explanationMarkdown": "### The 6 Falsy Values\n1. `false`\n2. `0`\n3. `\"\"` (empty string)\n4. `null`\n5. `undefined`\n6. `NaN`\n\nEverything else in JavaScript is **truthy**!\n```javascript\nif (\"hello\") { console.log(\"Truthy!\"); } // Runs!\nif (0) { console.log(\"Never runs\"); }    // Skipped!\n```",
    "workedExample": {
      "title": "Worked Example: Username Provided Check",
      "code": "let username = \"Alex\";\nif (username) {\n  console.log(\"Hello \" + username);\n}",
      "explanation": "\u2022 Non-empty string is truthy.",
      "expectedOutput": "Hello Alex"
    },
    "exerciseSteps": [
      "Look at `let message = \"Notice\";`.",
      "If `message` (truthy), print 'Has content'."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let message = \"Notice\";\nif (message) {\n  console.log(\"Has content\");\n}\n",
    "hints": [
      "Write `if (message) { ... }`"
    ],
    "testCases": [
      {
        "id": "js-41-tc-1",
        "description": "Prints 'Has content'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Has content'))"
      }
    ]
  },
  {
    "id": "js-42-ternary-operator",
    "title": "42. The Ternary Operator (? :)",
    "slug": "ternary-operator",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "A compact one-line if/else expression: condition ? ifTrue : ifFalse.",
    "concepts": [
      "condition ? val1 : val2",
      "Inline conditional assignment"
    ],
    "analogy": "A fast pass lane: VIP ? Express : Regular.",
    "explanationMarkdown": "### Ternary Operator\n```javascript\nlet age = 20;\nlet access = age >= 18 ? \"Allowed\" : \"Denied\";\nconsole.log(access); // Allowed\n```",
    "workedExample": {
      "title": "Worked Example: Pass/Fail badge",
      "code": "let score = 85;\nlet badge = score >= 50 ? \"Pass\" : \"Fail\";\nconsole.log(badge);",
      "explanation": "\u2022 Evaluates to 'Pass' in a clean single line.",
      "expectedOutput": "Pass"
    },
    "exerciseSteps": [
      "Use ternary to assign `status`: `isMember ? 'VIP' : 'Guest'`. Assign to `let status = isMember ? 'VIP' : 'Guest';`.",
      "Print `status`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isMember = true;\nlet status = isMember ? \"VIP\" : \"Guest\";\nconsole.log(status);\n",
    "hints": [
      "Use `isMember ? \"VIP\" : \"Guest\"`"
    ],
    "testCases": [
      {
        "id": "js-42-tc-1",
        "description": "status is VIP",
        "testFn": "typeof status !== 'undefined' && status === 'VIP'"
      }
    ]
  },
  {
    "id": "js-43-switch-statement",
    "title": "43. Multi-Way Decisions: switch Statements",
    "slug": "switch-statement",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Clean alternative to multiple else-if statements when matching exact values.",
    "concepts": [
      "switch (val) { case ...: break; }"
    ],
    "analogy": "A vending machine keypad: press 1 for water, 2 for soda, 3 for juice.",
    "explanationMarkdown": "### The switch Statement\n```javascript\nlet day = 1;\nswitch (day) {\n  case 1:\n    console.log(\"Monday\");\n    break;\n  case 2:\n    console.log(\"Tuesday\");\n    break;\n  default:\n    console.log(\"Other day\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fruit Price",
      "code": "let fruit = \"apple\";\nswitch (fruit) {\n  case \"apple\":\n    console.log(\"$1\");\n    break;\n  default:\n    console.log(\"$2\");\n}",
      "explanation": "\u2022 Matches 'apple' and prints $1.",
      "expectedOutput": "$1"
    },
    "exerciseSteps": [
      "Look at `let rank = 1;`.",
      "Use `switch (rank)` to print `'Gold'` on case 1, with a `break;`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let rank = 1;\nswitch (rank) {\n  case 1:\n    console.log(\"Gold\");\n    break;\n  default:\n    console.log(\"Participant\");\n}\n",
    "hints": [
      "Write `case 1: console.log(\"Gold\"); break;`"
    ],
    "testCases": [
      {
        "id": "js-43-tc-1",
        "description": "Prints 'Gold'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Gold'))"
      }
    ]
  },
  {
    "id": "js-44-switch-default",
    "title": "44. Fallback in Switch: The default Keyword",
    "slug": "switch-default",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Handle unexpected or unlisted values in a switch statement.",
    "concepts": [
      "default: clause in switch"
    ],
    "analogy": "The 'None of the above' option on a multiple choice test.",
    "explanationMarkdown": "### The default Clause\nRuns when none of the cases match:\n```javascript\nlet color = \"purple\";\nswitch (color) {\n  case \"red\": console.log(\"Stop\"); break;\n  default: console.log(\"Unknown color\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unknown command",
      "code": "let action = \"fly\";\nswitch (action) {\n  case \"walk\": console.log(\"Walking\"); break;\n  default: console.log(\"Action not found\");\n}",
      "explanation": "\u2022 'fly' is not walk, so default runs.",
      "expectedOutput": "Action not found"
    },
    "exerciseSteps": [
      "Look at `let mode = 'stealth';`.",
      "When no case matches, print 'Default mode' in `default:`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let mode = 'stealth';\nswitch (mode) {\n  case 'normal': console.log('Normal'); break;\n  default: console.log('Default mode');\n}\n",
    "hints": [
      "default runs when normal does not match"
    ],
    "testCases": [
      {
        "id": "js-44-tc-1",
        "description": "Prints 'Default mode'",
        "testFn": "logs.some(l => l.args.join(' ').includes('Default mode'))"
      }
    ]
  },
  {
    "id": "js-45-nullish-coalescing",
    "title": "45. Safe Defaults: Nullish Coalescing (??)",
    "slug": "nullish-coalescing",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Provide fallback values only when something is null or undefined (unlike || which also triggers on 0).",
    "concepts": [
      "?? operator",
      "Difference from || with 0 and empty strings"
    ],
    "analogy": "A backup parachute that only deploys if the main parachute is completely missing (null/undefined).",
    "explanationMarkdown": "### Nullish Coalescing (??)\n`??` returns the right-hand value **only** if the left is `null` or `undefined`:\n```javascript\nlet score = 0;\nconsole.log(score ?? 10); // 0 (0 is kept!)\nconsole.log(null ?? 10);  // 10\n```",
    "workedExample": {
      "title": "Worked Example: Preserving Zero",
      "code": "let speed = 0;\nlet displaySpeed = speed ?? 60;\nconsole.log(displaySpeed); // 0",
      "explanation": "\u2022 0 is not null, so 0 is kept.",
      "expectedOutput": "0"
    },
    "exerciseSteps": [
      "Look at `let customPort = null;`.",
      "Provide fallback 3000: `let port = customPort ?? 3000;`.",
      "Print `port`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let customPort = null;\nlet port = customPort ?? 3000;\nconsole.log(port);\n",
    "hints": [
      "Write `let port = customPort ?? 3000;`"
    ],
    "testCases": [
      {
        "id": "js-45-tc-1",
        "description": "port is 3000",
        "testFn": "typeof port !== 'undefined' && port === 3000"
      }
    ]
  },
  {
    "id": "js-46-optional-chaining",
    "title": "46. Safe Property Access: Optional Chaining (?.)",
    "slug": "optional-chaining",
    "language": "javascript",
    "category": "Module 4: Control Flow",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Prevent 'Cannot read properties of undefined' crashes with ?..",
    "concepts": [
      "?. operator",
      "Safe nested object navigation"
    ],
    "analogy": "Knocking before entering: if the door doesn't exist, you gracefully walk away instead of crashing into a wall.",
    "explanationMarkdown": "### Optional Chaining (?. )\n```javascript\nlet user = {};\nconsole.log(user.profile?.avatar); // undefined (No crash!)\n```",
    "workedExample": {
      "title": "Worked Example: Missing Address",
      "code": "let customer = { name: \"Maya\" };\nconsole.log(customer.address?.zipCode); // undefined",
      "explanation": "\u2022 Doesn't throw a TypeError.",
      "expectedOutput": "undefined"
    },
    "exerciseSteps": [
      "Access `car.engine?.horsepower` safely. Assign to `let hp = car.engine?.horsepower;`.",
      "Print `hp`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let car = { make: \"Tesla\" };\nlet hp = car.engine?.horsepower;\nconsole.log(hp);\n",
    "hints": [
      "Use `car.engine?.horsepower`"
    ],
    "testCases": [
      {
        "id": "js-46-tc-1",
        "description": "hp is undefined",
        "testFn": "hp === undefined && logs.some(l => l.args.join(' ').includes('undefined'))"
      }
    ]
  }
];
