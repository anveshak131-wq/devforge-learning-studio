import { Lesson } from '../../../types';

export const MODULE_6_LESSONS: Lesson[] = [
  {
    "id": "js-59-function-declaration",
    "title": "59. Defining Functions: The function Keyword",
    "slug": "function-declaration",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Create reusable blocks of code using function declarations.",
    "concepts": [
      "function name() {}",
      "Calling / invoking functions"
    ],
    "analogy": "A recipe card: write it once, use it whenever you want to cook.",
    "explanationMarkdown": "### Function Declarations\n```javascript\nfunction sayHello() {\n  console.log(\"Hello from function!\");\n}\nsayHello(); // Calls it!\n```",
    "workedExample": {
      "title": "Worked Example: Simple Alert",
      "code": "function ringBell() {\n  console.log(\"Ding Dong!\");\n}\nringBell();",
      "explanation": "\u2022 Invokes ringBell to print Ding Dong!.",
      "expectedOutput": "Ding Dong!"
    },
    "exerciseSteps": [
      "Define `function alertUser() { console.log(\"Alert!\"); }`.",
      "Call `alertUser();`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function alertUser() {\n  console.log(\"Alert!\");\n}\nalertUser();\n",
    "hints": [
      "Write `alertUser();` to call it"
    ],
    "testCases": [
      {
        "id": "js-59-tc-1",
        "description": "alertUser is a function and prints Alert!",
        "testFn": "typeof alertUser === 'function' && logs.some(l => l.args.join(' ').includes('Alert!'))"
      }
    ]
  },
  {
    "id": "js-60-function-parameters",
    "title": "60. Passing Inputs: Function Parameters",
    "slug": "function-parameters",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Accept custom input values when calling your functions.",
    "concepts": [
      "Parameters (placeholders)",
      "Arguments (actual values)"
    ],
    "analogy": "A toaster slot: you can put in white bread, wheat bread, or bagels.",
    "explanationMarkdown": "### Parameters and Arguments\n```javascript\nfunction greet(name) {\n  console.log(\"Hello, \" + name);\n}\ngreet(\"Alice\"); // \"Hello, Alice\"\n```",
    "workedExample": {
      "title": "Worked Example: Custom Name",
      "code": "function welcome(user) {\n  console.log(\"Welcome \" + user);\n}\nwelcome(\"Maya\");",
      "explanation": "\u2022 Passes 'Maya' into the user parameter.",
      "expectedOutput": "Welcome Maya"
    },
    "exerciseSteps": [
      "Define `function cheer(team)` that prints `'Go ' + team + '!'`.",
      "Call `cheer('Tigers')`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function cheer(team) {\n  console.log(\"Go \" + team + \"!\");\n}\ncheer(\"Tigers\");\n",
    "hints": [
      "Write `cheer(\"Tigers\");`"
    ],
    "testCases": [
      {
        "id": "js-60-tc-1",
        "description": "cheer is a function and prints Go Tigers!",
        "testFn": "typeof cheer === 'function' && logs.some(l => l.args.join(' ').includes('Go Tigers!'))"
      }
    ]
  },
  {
    "id": "js-61-function-return",
    "title": "61. Sending Back Results: The return Keyword",
    "slug": "function-return",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Output a result from a function so other parts of your code can use it.",
    "concepts": [
      "return statement",
      "Capturing output in variables"
    ],
    "analogy": "A vending machine: you press a button and it drops a can into the tray for you to take.",
    "explanationMarkdown": "### The return Keyword\n```javascript\nfunction square(x) {\n  return x * x;\n}\nlet result = square(5); // 25\nconsole.log(result);\n```",
    "workedExample": {
      "title": "Worked Example: Doubler",
      "code": "function double(n) { return n * 2; }\nlet val = double(10);\nconsole.log(val); // 20",
      "explanation": "\u2022 Returns 20.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Define `function add(a, b) { return a + b; }`.",
      "Test with `console.log(add(10, 5));`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(10, 5));\n",
    "hints": [
      "Return `a + b`"
    ],
    "testCases": [
      {
        "id": "js-61-tc-1",
        "description": "add(10, 5) returns 15",
        "testFn": "typeof add === 'function' && add(10, 5) === 15"
      }
    ]
  },
  {
    "id": "js-62-default-parameters",
    "title": "62. Default Function Parameters",
    "slug": "default-parameters",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Provide a default fallback value when an argument is missing.",
    "concepts": [
      "param = defaultValue",
      "Handling missing arguments"
    ],
    "analogy": "Ordering coffee: if you don't specify milk type, it defaults to regular milk.",
    "explanationMarkdown": "### Default Parameters\n```javascript\nfunction greet(name = \"Guest\") {\n  return \"Hello, \" + name;\n}\nconsole.log(greet());        // \"Hello, Guest\"\nconsole.log(greet(\"Sara\"));  // \"Hello, Sara\"\n```",
    "workedExample": {
      "title": "Worked Example: Power with default",
      "code": "function power(base, exp = 2) {\n  return base ** exp;\n}\nconsole.log(power(5)); // 25 (uses default 2)",
      "explanation": "\u2022 Defaults exp to 2 if not provided.",
      "expectedOutput": "25"
    },
    "exerciseSteps": [
      "Define `function sayHi(user = \"Friend\") { return \"Hi \" + user; }`.",
      "Test calling `sayHi()`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function sayHi(user = \"Friend\") {\n  return \"Hi \" + user;\n}\nconsole.log(sayHi());\n",
    "hints": [
      "Write `user = \"Friend\"` in parameter list"
    ],
    "testCases": [
      {
        "id": "js-62-tc-1",
        "description": "sayHi() returns 'Hi Friend'",
        "testFn": "typeof sayHi === 'function' && sayHi() === 'Hi Friend'"
      }
    ]
  },
  {
    "id": "js-63-rest-parameters",
    "title": "63. Variable Arguments: Rest Parameters (...args)",
    "slug": "rest-parameters",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Accept any number of arguments as an array using the ...rest syntax.",
    "concepts": [
      "...rest parameter",
      "Variadic functions"
    ],
    "analogy": "An expandable tote bag that holds however many groceries you drop inside.",
    "explanationMarkdown": "### Rest Parameters (...args)\n```javascript\nfunction sumAll(...numbers) {\n  let total = 0;\n  for (let n of numbers) total += n;\n  return total;\n}\nconsole.log(sumAll(1, 2, 3, 4)); // 10\n```",
    "workedExample": {
      "title": "Worked Example: Count items",
      "code": "function countArgs(...items) {\n  return items.length;\n}\nconsole.log(countArgs(10, 20, 30)); // 3",
      "explanation": "\u2022 Gathers all inputs into items array.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Write `function countWords(...words) { return words.length; }`.",
      "Test with `countWords('a', 'b')`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function countWords(...words) {\n  return words.length;\n}\nconsole.log(countWords('a', 'b'));\n",
    "hints": [
      "Use `...words` as parameter"
    ],
    "testCases": [
      {
        "id": "js-63-tc-1",
        "description": "countWords('a', 'b', 'c') returns 3",
        "testFn": "typeof countWords === 'function' && countWords('a', 'b', 'c') === 3"
      }
    ]
  },
  {
    "id": "js-64-function-expressions",
    "title": "64. Function Expressions (Anonymous Functions)",
    "slug": "function-expressions",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Assign functions directly into variables: const myFn = function() {}.",
    "concepts": [
      "Function expressions",
      "Functions as first-class citizens"
    ],
    "analogy": "Saving a phone number into your contacts list under a name.",
    "explanationMarkdown": "### Function Expressions\n```javascript\nconst multiply = function(a, b) {\n  return a * b;\n};\nconsole.log(multiply(4, 5)); // 20\n```",
    "workedExample": {
      "title": "Worked Example: Stored Function",
      "code": "const ping = function() {\n  return \"Pong!\";\n};\nconsole.log(ping());",
      "explanation": "\u2022 ping stores the function expression.",
      "expectedOutput": "Pong!"
    },
    "exerciseSteps": [
      "Assign `const sub = function(a, b) { return a - b; };`.",
      "Test with `console.log(sub(10, 4));`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "const sub = function(a, b) {\n  return a - b;\n};\nconsole.log(sub(10, 4));\n",
    "hints": [
      "Write `const sub = function(a, b) { return a - b; };`"
    ],
    "testCases": [
      {
        "id": "js-64-tc-1",
        "description": "sub(10, 4) returns 6",
        "testFn": "typeof sub === 'function' && sub(10, 4) === 6"
      }
    ]
  },
  {
    "id": "js-65-arrow-functions",
    "title": "65. Modern Arrow Functions: () => {}",
    "slug": "arrow-functions",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Write concise, modern JavaScript functions using the fat arrow syntax =>.",
    "concepts": [
      "Arrow syntax () => {}",
      "Modern ES6 conventions"
    ],
    "analogy": "Text message shorthand (e.g. 'u' instead of 'you') \u2014 cleaner and faster to write.",
    "explanationMarkdown": "### Arrow Functions\n```javascript\nconst add = (a, b) => {\n  return a + b;\n};\nconsole.log(add(3, 4)); // 7\n```",
    "workedExample": {
      "title": "Worked Example: Arrow Greeting",
      "code": "const sayHi = (name) => {\n  return \"Hi \" + name;\n};\nconsole.log(sayHi(\"Alex\"));",
      "explanation": "\u2022 Modern arrow function syntax.",
      "expectedOutput": "Hi Alex"
    },
    "exerciseSteps": [
      "Create arrow function `const triple = (x) => { return x * 3; };`.",
      "Print `triple(4)`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "const triple = (x) => {\n  return x * 3;\n};\nconsole.log(triple(4));\n",
    "hints": [
      "Write `const triple = (x) => { return x * 3; };`"
    ],
    "testCases": [
      {
        "id": "js-65-tc-1",
        "description": "triple(4) returns 12",
        "testFn": "typeof triple === 'function' && triple(4) === 12"
      }
    ]
  },
  {
    "id": "js-66-concise-arrow-return",
    "title": "66. Concise One-Line Arrow Returns",
    "slug": "concise-arrow-return",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Omit curly braces and the return keyword for ultra-clean single expression functions.",
    "concepts": [
      "Implicit return: (x) => x * 2"
    ],
    "analogy": "Express lane checkout: no paperwork, item directly handed to you.",
    "explanationMarkdown": "### Implicit Return\nWhen a function only returns one thing, drop the `{}` and `return`:\n```javascript\nconst double = x => x * 2;\nconsole.log(double(10)); // 20\n```",
    "workedExample": {
      "title": "Worked Example: Half value",
      "code": "const half = n => n / 2;\nconsole.log(half(50)); // 25",
      "explanation": "\u2022 Implicitly returns n / 2.",
      "expectedOutput": "25"
    },
    "exerciseSteps": [
      "Define concise arrow `const addOne = x => x + 1;`.",
      "Test with `console.log(addOne(9));`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "const addOne = x => x + 1;\nconsole.log(addOne(9));\n",
    "hints": [
      "Write `const addOne = x => x + 1;`"
    ],
    "testCases": [
      {
        "id": "js-66-tc-1",
        "description": "addOne(9) returns 10",
        "testFn": "typeof addOne === 'function' && addOne(9) === 10"
      }
    ]
  },
  {
    "id": "js-67-global-vs-local-scope",
    "title": "67. Global vs Local Scope",
    "slug": "global-vs-local-scope",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 6,
    "xp": 30,
    "description": "Understand where variables live and why inner functions can access outer variables.",
    "concepts": [
      "Global variables",
      "Function local variables",
      "Scope boundaries"
    ],
    "analogy": "A public town clock (global: everyone can see it) vs your bedroom alarm clock (local: only you can see it).",
    "explanationMarkdown": "### Variable Scope\nVariables declared inside a function only exist **inside** that function:\n```javascript\nlet globalName = \"Earth\"; // Global\nfunction visit() {\n  let localGreeting = \"Hi\"; // Local\n  console.log(localGreeting + \" \" + globalName);\n}\nvisit();\n```",
    "workedExample": {
      "title": "Worked Example: Local access",
      "code": "let globalMsg = \"DevForge\";\nfunction test() { console.log(globalMsg); }\ntest();",
      "explanation": "\u2022 Inner function reads outer globalMsg.",
      "expectedOutput": "DevForge"
    },
    "exerciseSteps": [
      "Create global `let app = \"ChatApp\";`.",
      "Define function `getApp()` that returns `app`.",
      "Print `getApp()`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let app = \"ChatApp\";\nfunction getApp() {\n  return app;\n}\nconsole.log(getApp());\n",
    "hints": [
      "Return global `app` from `getApp()`"
    ],
    "testCases": [
      {
        "id": "js-67-tc-1",
        "description": "getApp() returns 'ChatApp'",
        "testFn": "typeof getApp === 'function' && getApp() === 'ChatApp'"
      }
    ]
  },
  {
    "id": "js-68-block-scope",
    "title": "68. Block Scope with let and const",
    "slug": "block-scope",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Learn how curly braces {} trap let and const variables inside if-statements and loops.",
    "concepts": [
      "Block scope {}",
      "Variable leakage prevention"
    ],
    "analogy": "A conference room with closed doors: conversations inside the room stay in the room.",
    "explanationMarkdown": "### Block Scope\nAny `{ ... }` block creates a scope for `let` and `const`:\n```javascript\nif (true) {\n  let secret = \"1234\";\n}\n// secret is trapped inside! Not accessible out here.\n```",
    "workedExample": {
      "title": "Worked Example: Block protection",
      "code": "let outer = \"accessible\";\nif (true) {\n  let inner = \"hidden\";\n  console.log(outer);\n}",
      "explanation": "\u2022 Outer is accessible inside block.",
      "expectedOutput": "accessible"
    },
    "exerciseSteps": [
      "Look at the code.",
      "Confirm `let x = 10;` is declared in global scope so `console.log(x);` works."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let x = 10;\nif (true) {\n  console.log(x);\n}\n",
    "hints": [
      "Run the code"
    ],
    "testCases": [
      {
        "id": "js-68-tc-1",
        "description": "Prints 10",
        "testFn": "logs.some(l => l.args.join(' ').includes('10'))"
      }
    ]
  },
  {
    "id": "js-69-callback-functions",
    "title": "69. Callback Functions: Functions as Arguments",
    "slug": "callback-functions",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Pass a function into another function to be executed later.",
    "concepts": [
      "Higher-order functions",
      "Callback pattern"
    ],
    "analogy": "Leaving your phone number with a mechanic: 'Call me back when my car is ready'.",
    "explanationMarkdown": "### Callbacks\nIn JavaScript, functions can be passed as arguments just like numbers or strings:\n```javascript\nfunction runTwice(fn) {\n  fn();\n  fn();\n}\nrunTwice(() => console.log(\"Hello!\"));\n```",
    "workedExample": {
      "title": "Worked Example: Math with Callback",
      "code": "function execute(a, b, operation) {\n  return operation(a, b);\n}\nconsole.log(execute(5, 3, (x, y) => x + y)); // 8",
      "explanation": "\u2022 Passes the adder arrow function into execute.",
      "expectedOutput": "8"
    },
    "exerciseSteps": [
      "Define `function applyOp(n, fn) { return fn(n); }`.",
      "Call `applyOp(5, x => x * 10)` and log."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function applyOp(n, fn) {\n  return fn(n);\n}\nconsole.log(applyOp(5, x => x * 10));\n",
    "hints": [
      "Write `applyOp(n, fn)` that calls `fn(n)`"
    ],
    "testCases": [
      {
        "id": "js-69-tc-1",
        "description": "applyOp(5, x => x * 10) returns 50",
        "testFn": "typeof applyOp === 'function' && applyOp(5, x => x * 10) === 50"
      }
    ]
  },
  {
    "id": "js-70-closures",
    "title": "70. Closures: Functions that Remember Their Scope",
    "slug": "closures",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Advanced",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 7,
    "xp": 40,
    "description": "A function bundled together with references to its surrounding lexical state.",
    "concepts": [
      "Lexical environment",
      "Persistent private state"
    ],
    "analogy": "A backpack that a function carries wherever it travels: it always has access to the supplies inside.",
    "explanationMarkdown": "### What is a Closure?\nA closure is an inner function that retains access to variables from its parent function, even **after** the parent has finished executing:\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```",
    "workedExample": {
      "title": "Worked Example: Private Bank Account",
      "code": "function bank(initial) {\n  let balance = initial;\n  return () => {\n    balance += 10;\n    return balance;\n  };\n}\nconst myAccount = bank(100);\nconsole.log(myAccount()); // 110",
      "explanation": "\u2022 The inner arrow function remembers balance.",
      "expectedOutput": "110"
    },
    "exerciseSteps": [
      "Complete `makeMultiplier(factor)` that returns `n => n * factor`.",
      "Test with `const triple = makeMultiplier(3); triple(4)` (12)."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function makeMultiplier(factor) {\n  return function(n) {\n    return n * factor;\n  };\n}\nconst triple = makeMultiplier(3);\nconsole.log(triple(4));\n",
    "hints": [
      "Return an inner function that multiplies `n * factor`"
    ],
    "testCases": [
      {
        "id": "js-70-tc-1",
        "description": "makeMultiplier(3)(4) returns 12",
        "testFn": "typeof makeMultiplier === 'function' && makeMultiplier(3)(4) === 12"
      }
    ]
  },
  {
    "id": "js-71-pure-functions",
    "title": "71. Pure Functions & Immutability",
    "slug": "pure-functions",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Write predictable functions that produce no side effects and always return the same output for the same input.",
    "concepts": [
      "Deterministic output",
      "No side-effects"
    ],
    "analogy": "A math formula like 2 + 2 = 4: no matter how many times you calculate it or what time of day it is, it's always 4.",
    "explanationMarkdown": "### Pure Functions\nA pure function does not modify any external variables:\n```javascript\n// Pure: returns a new value, doesn't touch anything outside\nfunction addTax(price) {\n  return price * 1.10;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pure doubler",
      "code": "function pureDouble(n) { return n * 2; }\nconsole.log(pureDouble(8)); // 16",
      "explanation": "\u2022 Zero side effects.",
      "expectedOutput": "16"
    },
    "exerciseSteps": [
      "Write a pure function `cube(n) { return n ** 3; }`.",
      "Test with `console.log(cube(3));`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function cube(n) {\n  return n ** 3;\n}\nconsole.log(cube(3));\n",
    "hints": [
      "Return `n ** 3`"
    ],
    "testCases": [
      {
        "id": "js-71-tc-1",
        "description": "cube(3) returns 27",
        "testFn": "typeof cube === 'function' && cube(3) === 27"
      }
    ]
  },
  {
    "id": "js-72-recursion-basics",
    "title": "72. Recursion: Functions Calling Themselves",
    "slug": "recursion-basics",
    "language": "javascript",
    "category": "Module 6: Functions & Scope",
    "difficulty": "Advanced",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 7,
    "xp": 40,
    "description": "Solve problems by having a function call itself with a base condition.",
    "concepts": [
      "Base case",
      "Recursive step",
      "Stack frames"
    ],
    "analogy": "Russian Matryoshka nesting dolls: open each doll until you reach the smallest solid doll inside.",
    "explanationMarkdown": "### Recursion\nAlways include a **base case** to stop the recursion:\n```javascript\nfunction countdown(n) {\n  if (n <= 0) return;\n  console.log(n);\n  countdown(n - 1); // Calls itself!\n}\ncountdown(3); // 3, 2, 1\n```",
    "workedExample": {
      "title": "Worked Example: Factorial",
      "code": "function factorial(n) {\n  if (n === 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(4)); // 24",
      "explanation": "\u2022 4 * 3 * 2 * 1 = 24.",
      "expectedOutput": "24"
    },
    "exerciseSteps": [
      "Complete `factorial(n)`. If `n <= 1` return 1, else return `n * factorial(n - 1)`.",
      "Test with `factorial(3)` (6)."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(3));\n",
    "hints": [
      "Return `n * factorial(n - 1)`"
    ],
    "testCases": [
      {
        "id": "js-72-tc-1",
        "description": "factorial(4) returns 24",
        "testFn": "typeof factorial === 'function' && factorial(4) === 24"
      }
    ]
  }
];
