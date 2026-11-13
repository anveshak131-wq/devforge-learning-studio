import { Lesson } from '../../../types';

export const MODULE_2_LESSONS: Lesson[] = [
  {
    "id": "js-13-addition-subtraction",
    "title": "13. Basic Math: Addition & Subtraction",
    "slug": "addition-subtraction",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Add and subtract values using the + and - operators.",
    "concepts": [
      "+ operator",
      "- operator",
      "Calculations"
    ],
    "analogy": "A grocery cash register adding the price of bread and subtracting a discount coupon.",
    "explanationMarkdown": "### Addition and Subtraction\nUse `+` to add and `-` to subtract:\n```javascript\nlet apples = 5;\nlet bananas = 3;\nlet totalFruit = apples + bananas; // 8\n```",
    "workedExample": {
      "title": "Worked Example: Balance",
      "code": "let startingCash = 50;\nlet spent = 15;\nlet remaining = startingCash - spent;\nconsole.log(remaining);",
      "explanation": "• 50 minus 15 leaves 35.",
      "expectedOutput": "35"
    },
    "exerciseSteps": [
      "Create `let bill = 40;`.",
      "Create `let discount = 10;`.",
      "Create `let finalBill = bill - discount;`.",
      "Print `finalBill`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let bill = 40;\nlet discount = 10;\nlet finalBill = bill - discount;\nconsole.log(finalBill);\n",
    "hints": [
      "Subtract with `bill - discount`"
    ],
    "testCases": [
      {
        "id": "js-13-tc-1",
        "description": "finalBill is 30",
        "testFn": "typeof finalBill !== \"undefined\" && finalBill === 30"
      }
    ]
  },
  {
    "id": "js-14-multiplication-division",
    "title": "14. Multiplication & Division (* and /)",
    "slug": "multiplication-division",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Multiply with * and divide with /.",
    "concepts": [
      "* multiplication",
      "/ division",
      "Calculating rates"
    ],
    "analogy": "Calculating how many slices of pizza 4 people get from a 12-slice pie.",
    "explanationMarkdown": "### Multiplication and Division\n```javascript\nlet perPerson = 12 / 4; // 3\nlet total = perPerson * 4; // 12\n```",
    "workedExample": {
      "title": "Worked Example: Ticket Price",
      "code": "let tickets = 4;\nlet price = 12;\nconsole.log(tickets * price);",
      "explanation": "• Multiplies 4 × 12 = 48.",
      "expectedOutput": "48"
    },
    "exerciseSteps": [
      "Create `let hours = 8;`.",
      "Create `let rate = 25;`.",
      "Create `let earnings = hours * rate;`.",
      "Print `earnings`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let hours = 8;\nlet rate = 25;\nlet earnings = hours * rate;\nconsole.log(earnings);\n",
    "hints": [
      "Multiply with `hours * rate`"
    ],
    "testCases": [
      {
        "id": "js-14-tc-1",
        "description": "earnings is 200",
        "testFn": "typeof earnings !== \"undefined\" && earnings === 200"
      }
    ]
  },
  {
    "id": "js-15-modulo-operator",
    "title": "15. The Modulo Operator %: Finding Remainders",
    "slug": "modulo-operator",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Find the remainder of a division using the % operator.",
    "concepts": [
      "% modulo operator",
      "Remainders",
      "Even and odd check"
    ],
    "analogy": "Distributing 7 cookies to 3 children: each child gets 2 cookies, and 1 cookie remains.",
    "explanationMarkdown": "### Modulo Operator (%)\nThe modulo operator `%` returns the leftover remainder:\n```javascript\nconsole.log(7 % 3); // 1\nconsole.log(10 % 2); // 0 (even!)\n```",
    "workedExample": {
      "title": "Worked Example: Remainder",
      "code": "let num = 17;\nconsole.log(num % 5); // 2",
      "explanation": "• 5 goes into 17 three times (15) with 2 leftover.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Find remainder of 17 divided by 5.",
      "Assign to `let rem = 17 % 5;`.",
      "Print `rem`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let rem = 17 % 5;\nconsole.log(rem);\n",
    "hints": [
      "17 % 5 gives 2"
    ],
    "testCases": [
      {
        "id": "js-15-tc-1",
        "description": "rem is 2",
        "testFn": "typeof rem !== \"undefined\" && rem === 2"
      }
    ]
  },
  {
    "id": "js-16-exponentiation",
    "title": "16. Exponents: Powers with **",
    "slug": "exponentiation",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Raise numbers to powers using the ** operator (e.g., 2 ** 3 = 8).",
    "concepts": [
      "** power operator",
      "Squaring and cubing"
    ],
    "analogy": "Calculating area of a square: width ** 2.",
    "explanationMarkdown": "### Exponentiation (**)\n```javascript\nlet squared = 5 ** 2; // 25\nlet cubed = 2 ** 3;   // 8\n```",
    "workedExample": {
      "title": "Worked Example: Powers",
      "code": "console.log(2 ** 4); // 16",
      "explanation": "• 2 to the 4th power is 16.",
      "expectedOutput": "16"
    },
    "exerciseSteps": [
      "Calculate 3 cubed (3 ** 3).",
      "Assign to `let cubed = 3 ** 3;`.",
      "Print `cubed`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let cubed = 3 ** 3;\nconsole.log(cubed);\n",
    "hints": [
      "Use `3 ** 3`"
    ],
    "testCases": [
      {
        "id": "js-16-tc-1",
        "description": "cubed is 27",
        "testFn": "typeof cubed !== \"undefined\" && cubed === 27"
      }
    ]
  },
  {
    "id": "js-17-increment-decrement",
    "title": "17. Increment and Decrement (++, --)",
    "slug": "increment-decrement",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Add or subtract 1 with convenient ++ and -- shorthand.",
    "concepts": [
      "++ increment",
      "-- decrement"
    ],
    "analogy": "A handheld tally clicker: each click adds 1 to the count.",
    "explanationMarkdown": "### Increment and Decrement\n```javascript\nlet score = 0;\nscore++; // 1\nscore++; // 2\n```",
    "workedExample": {
      "title": "Worked Example: Clicker",
      "code": "let tally = 5;\ntally++;\nconsole.log(tally);",
      "explanation": "• tally increments from 5 to 6.",
      "expectedOutput": "6"
    },
    "exerciseSteps": [
      "Create `let streak = 5;`.",
      "Increment `streak++;`.",
      "Print `streak`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let streak = 5;\nstreak++;\nconsole.log(streak);\n",
    "hints": [
      "Write `streak++;`"
    ],
    "testCases": [
      {
        "id": "js-17-tc-1",
        "description": "streak is 6",
        "testFn": "typeof streak !== \"undefined\" && streak === 6"
      }
    ]
  },
  {
    "id": "js-18-compound-assignment",
    "title": "18. Compound Assignment (+=, -=, *=)",
    "slug": "compound-assignment",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Update variables in place with += and -=.",
    "concepts": [
      "+= operator",
      "-= operator"
    ],
    "analogy": "Adding cash to your wallet: wallet += 20.",
    "explanationMarkdown": "### Compound Assignment\nInstead of `x = x + 10;`, write `x += 10;`:\n```javascript\nlet bank = 100;\nbank += 50; // 150\n```",
    "workedExample": {
      "title": "Worked Example: Bank Deposit",
      "code": "let funds = 80;\nfunds += 20;\nconsole.log(funds);",
      "explanation": "• Adds 20 to funds.",
      "expectedOutput": "100"
    },
    "exerciseSteps": [
      "Create `let hp = 100;`.",
      "Subtract 25 using `hp -= 25;`.",
      "Print `hp`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let hp = 100;\nhp -= 25;\nconsole.log(hp);\n",
    "hints": [
      "Write `hp -= 25;`"
    ],
    "testCases": [
      {
        "id": "js-18-tc-1",
        "description": "hp is 75",
        "testFn": "typeof hp !== \"undefined\" && hp === 75"
      }
    ]
  },
  {
    "id": "js-19-strict-equality",
    "title": "19. Strict Equality (===)",
    "slug": "strict-equality",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Compare values and types strictly with ===.",
    "concepts": [
      "=== strict equality",
      "Type safety"
    ],
    "analogy": "Comparing fingerprints: only an exact match of pattern and person returns true.",
    "explanationMarkdown": "### Strict Equality (===)\n`===` checks both value and type:\n```javascript\nconsole.log(10 === 10);   // true\nconsole.log(\"10\" === 10); // false\n```",
    "workedExample": {
      "title": "Worked Example: Exact Match",
      "code": "let isMatch = (\"test\" === \"test\");\nconsole.log(isMatch);",
      "explanation": "• Exact match produces true.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Compare if 100 === 100.",
      "Assign to `let isEqual = (100 === 100);`.",
      "Print `isEqual`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isEqual = (100 === 100);\nconsole.log(isEqual);\n",
    "hints": [
      "Write `let isEqual = (100 === 100);`"
    ],
    "testCases": [
      {
        "id": "js-19-tc-1",
        "description": "isEqual is true",
        "testFn": "typeof isEqual !== \"undefined\" && isEqual === true"
      }
    ]
  },
  {
    "id": "js-20-inequality",
    "title": "20. Strict Inequality (!==)",
    "slug": "strict-inequality",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Test whether two values are different using !==.",
    "concepts": [
      "!== operator"
    ],
    "analogy": "Checking if two keys are different.",
    "explanationMarkdown": "### Strict Inequality (!==)\n```javascript\nconsole.log(5 !== 10); // true\n```",
    "workedExample": {
      "title": "Worked Example: Inequality",
      "code": "console.log(\"apple\" !== \"banana\"); // true",
      "explanation": "• Checks that strings are different.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Test if `\"cat\" !== \"dog\"`.",
      "Assign to `let isDifferent = (\"cat\" !== \"dog\");`.",
      "Print `isDifferent`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isDifferent = (\"cat\" !== \"dog\");\nconsole.log(isDifferent);\n",
    "hints": [
      "Write `let isDifferent = (\"cat\" !== \"dog\");`"
    ],
    "testCases": [
      {
        "id": "js-20-tc-1",
        "description": "isDifferent is true",
        "testFn": "typeof isDifferent !== \"undefined\" && isDifferent === true"
      }
    ]
  },
  {
    "id": "js-21-comparisons",
    "title": "21. Comparison: >, <, >=, <=",
    "slug": "comparisons",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compare which number is greater or smaller.",
    "concepts": [
      "> greater than",
      "< less than",
      ">= greater or equal"
    ],
    "analogy": "Comparing heights to see who is taller.",
    "explanationMarkdown": "### Comparison Operators\n```javascript\nconsole.log(50 > 20); // true\nconsole.log(10 <= 10); // true\n```",
    "workedExample": {
      "title": "Worked Example: Age threshold",
      "code": "let age = 21;\nconsole.log(age >= 18); // true",
      "explanation": "• 21 is >= 18.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Test if 50 > 25.",
      "Assign to `let isGreater = 50 > 25;`.",
      "Print `isGreater`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let isGreater = 50 > 25;\nconsole.log(isGreater);\n",
    "hints": [
      "Write `let isGreater = 50 > 25;`"
    ],
    "testCases": [
      {
        "id": "js-21-tc-1",
        "description": "isGreater is true",
        "testFn": "typeof isGreater !== \"undefined\" && isGreater === true"
      }
    ]
  },
  {
    "id": "js-22-math-round-floor",
    "title": "22. Rounding Numbers: Math.round & Math.floor",
    "slug": "math-round-floor",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Round numbers to the nearest whole integer or drop decimals.",
    "concepts": [
      "Math.round()",
      "Math.floor()",
      "Math.ceil()"
    ],
    "analogy": "Dropping down to the floor: Math.floor(4.9) drops to 4.",
    "explanationMarkdown": "### Math.floor and Math.ceil\n* `Math.floor(4.9)` -> 4\n* `Math.ceil(4.1)` -> 5\n* `Math.round(4.5)` -> 5",
    "workedExample": {
      "title": "Worked Example: Rounding Down",
      "code": "console.log(Math.floor(7.9)); // 7",
      "explanation": "• Floors 7.9 to 7.",
      "expectedOutput": "7"
    },
    "exerciseSteps": [
      "Round 8.7 down using `Math.floor(8.7)`.",
      "Assign to `let roundedDown = Math.floor(8.7);`.",
      "Print `roundedDown`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let roundedDown = Math.floor(8.7);\nconsole.log(roundedDown);\n",
    "hints": [
      "Use `Math.floor(8.7)`"
    ],
    "testCases": [
      {
        "id": "js-22-tc-1",
        "description": "roundedDown is 8",
        "testFn": "typeof roundedDown !== \"undefined\" && roundedDown === 8"
      }
    ]
  },
  {
    "id": "js-23-math-max-min",
    "title": "23. Finding Highs & Lows: Math.max & Math.min",
    "slug": "math-max-min",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Find the highest and lowest numbers from any list of arguments.",
    "concepts": [
      "Math.max()",
      "Math.min()"
    ],
    "analogy": "Picking the highest test score in a class.",
    "explanationMarkdown": "### Math.max & Math.min\n```javascript\nlet top = Math.max(10, 45, 92); // 92\nlet bottom = Math.min(10, 45, 92); // 10\n```",
    "workedExample": {
      "title": "Worked Example: Highest Number",
      "code": "console.log(Math.max(5, 20, 100)); // 100",
      "explanation": "• 100 is the highest.",
      "expectedOutput": "100"
    },
    "exerciseSteps": [
      "Find lowest value among 40, 15, 80.",
      "Assign to `let lowest = Math.min(40, 15, 80);`.",
      "Print `lowest`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let lowest = Math.min(40, 15, 80);\nconsole.log(lowest);\n",
    "hints": [
      "Use `Math.min(40, 15, 80)`"
    ],
    "testCases": [
      {
        "id": "js-23-tc-1",
        "description": "lowest is 15",
        "testFn": "typeof lowest !== \"undefined\" && lowest === 15"
      }
    ]
  },
  {
    "id": "js-24-number-conversion",
    "title": "24. Number Conversion: Number() & parseInt()",
    "slug": "number-conversion",
    "language": "javascript",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Convert string text like \"50\" into real numbers.",
    "concepts": [
      "Number()",
      "parseInt()"
    ],
    "analogy": "Reading a price tag written in letters and entering it into a cash register.",
    "explanationMarkdown": "### Converting to Number\n```javascript\nlet raw = \"50\";\nlet realNum = Number(raw);\nconsole.log(realNum + 10); // 60\n```",
    "workedExample": {
      "title": "Worked Example: Conversion",
      "code": "let val = Number(\"42\") + 8;\nconsole.log(val); // 50",
      "explanation": "• Converts \"42\" to 42, adds 8 = 50.",
      "expectedOutput": "50"
    },
    "exerciseSteps": [
      "Convert `\"50\"` using `Number(\"50\") + 50;`.",
      "Assign to `let sum = Number(\"50\") + 50;`.",
      "Print `sum`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let sum = Number(\"50\") + 50;\nconsole.log(sum);\n",
    "hints": [
      "Write `let sum = Number(\"50\") + 50;`"
    ],
    "testCases": [
      {
        "id": "js-24-tc-1",
        "description": "sum is 100",
        "testFn": "typeof sum !== \"undefined\" && sum === 100"
      }
    ]
  }
];
