import { Track } from '../../types';

export const JAVASCRIPT_TRACK: Track = {
  id: 'javascript',
  title: 'JavaScript: Beginner to Pro',
  slug: 'javascript',
  language: 'javascript',
  icon: 'Zap',
  color: 'from-amber-400 to-yellow-500',
  tagline: 'Learn modern JavaScript from scratch with simple explanations, instant code execution, and real projects.',
  description: 'Master JavaScript step-by-step: start with Hello World and variables, progress through functions and arrays, and build real interactive apps.',
  lessons: [
    // LESSON 1: HELLO WORLD
    {
      id: 'js-1-hello-world',
      title: '1. Hello, World! Printing to the Screen',
      slug: 'hello-world',
      language: 'javascript',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 3,
      xp: 25,
      description: 'Write your very first line of code! Learn how programs talk to the outside world using console.log().',
      concepts: ['What is code?', 'Printing with console.log()', 'Strings (text in quotes)'],
      analogy: 'Imagine your computer has a walkie-talkie screen. console.log() is you pressing the talk button and shouting a message onto the screen.',
      explanationMarkdown: `### Welcome to JavaScript!
JavaScript is the language that powers the entire modern web. Whenever you see animations, button clicks, or live updates on a website, that's JavaScript in action.

### How to Print Output
In JavaScript, we use \`console.log(...)\` to display messages on the screen. Any piece of text must be surrounded by quotes (either single \`'...\`' or double \`"..."\`).

\`\`\`javascript
console.log("Welcome to coding!");
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Saying Hello',
        code: `// This prints a friendly greeting to the screen:
console.log("Hello, World!");`,
        explanation: '• console.log(...) tells the computer to show whatever is inside the parentheses.\n• "Hello, World!" is a text string enclosed in quotes.\n• The semicolon ; marks the end of the statement.',
        expectedOutput: 'Hello, World!'
      },
      commonMistakes: [
        'Forgetting the quotation marks around your text (e.g. console.log(Hello) causes an error because the computer thinks Hello is a variable).',
        'Spelling console.log wrong (e.g. Console.log with a capital C).'
      ],
      exerciseSteps: [
        'Look at the editor on the right.',
        'Use console.log() to print the exact message: "Hello, World!"',
        'Click "Check Answer" to run the test and earn your first XP!'
      ],
      initialCode: `// 👉 Step 1: Print "Hello, World!" to the screen below:
console.log("Hello, World!");
`,
      solutionCode: `console.log("Hello, World!");
`,
      hints: [
        'Type `console.log("Hello, World!");` exactly.',
        'Make sure "Hello, World!" has quotes around it and the exclamation mark.'
      ],
      testCases: [
        {
          id: 'js-1-tc-1',
          description: 'Prints "Hello, World!" to the console',
          testFn: 'logs.some(l => l.args.join(" ").toLowerCase().includes("hello, world"))',
          expectedMessage: 'Make sure your code uses console.log("Hello, World!")'
        }
      ]
    },

    // LESSON 2: VARIABLES
    {
      id: 'js-2-variables',
      title: '2. Storing Data in Variables',
      slug: 'variables',
      language: 'javascript',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Learn how computers remember information by giving names to values.',
      concepts: ['Variables (let and const)', 'Naming conventions', 'Reassigning values'],
      analogy: 'Think of a variable as a labeled storage box. You write "playerName" on the outside and put "Alex" inside. Whenever you need it, you just ask for playerName.',
      explanationMarkdown: `### What is a Variable?
A variable is simply a container that stores a value so your program can use it later.

In modern JavaScript, we declare variables using two keywords:
1. **\`let\`**: Use this when the value might change later (like a player's score).
2. **\`const\`** (Constant): Use this when the value stays the same (like a username or birth year).

\`\`\`javascript
const websiteName = "DevForge";
let score = 10;
score = 25; // You can change let variables anytime!
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Player Information',
        code: `const heroName = "Maya";
let coins = 50;

console.log(heroName);
console.log(coins);`,
        explanation: '• const heroName stores the text "Maya".\n• let coins stores the number 50.\n• console.log prints both values.',
        expectedOutput: 'Maya\n50'
      },
      commonMistakes: [
        'Trying to change a const variable (e.g. const x = 5; x = 10; causes an error).',
        'Putting quotes around numbers when you want to do math.'
      ],
      exerciseSteps: [
        'Declare a variable named `cityName` using `let` or `const` and set it to `"Tokyo"`.',
        'Declare a variable named `temperature` and set it to `24`.',
        'Print `cityName` to the console using `console.log(cityName);`.'
      ],
      initialCode: `// 👉 Step 1: Create a variable named cityName and set it to "Tokyo"
const cityName = "Tokyo";

// 👉 Step 2: Create a variable named temperature and set it to 24
let temperature = 24;

// 👉 Step 3: Print cityName to the console
console.log(cityName);
`,
      solutionCode: `const cityName = "Tokyo";
let temperature = 24;
console.log(cityName);
`,
      hints: [
        'Declare a variable like this: `const cityName = "Tokyo";`',
        'Print it with: `console.log(cityName);`'
      ],
      testCases: [
        {
          id: 'js-2-tc-1',
          description: 'cityName variable is set to "Tokyo"',
          testFn: 'typeof cityName !== "undefined" && cityName === "Tokyo"',
          expectedMessage: 'Declare cityName with value "Tokyo"'
        },
        {
          id: 'js-2-tc-2',
          description: 'Prints cityName to console',
          testFn: 'logs.some(l => l.args.join(" ").includes("Tokyo"))',
          expectedMessage: 'Make sure to console.log(cityName)'
        }
      ]
    },

    // LESSON 3: NUMBERS & DOING MATH
    {
      id: 'js-3-numbers-math',
      title: '3. Numbers & Doing Math',
      slug: 'numbers-math',
      language: 'javascript',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Use JavaScript as a super-fast calculator with +, -, *, and /.',
      concepts: ['Number data types', 'Arithmetic operators (+, -, *, /)', 'Calculating totals'],
      analogy: 'Imagine a cash register scanner. It takes the price of each item, multiplies by the quantity, and adds tax automatically.',
      explanationMarkdown: `### Math in JavaScript
Computers are built for calculations. JavaScript supports all standard math symbols:
* \`+\` Addition
* \`-\` Subtraction
* \`*\` Multiplication
* \`/\` Division

\`\`\`javascript
let price = 10;
let tax = 2;
let total = price + tax; // 12
console.log(total);
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Shopping Total',
        code: `let itemPrice = 15;
let quantity = 3;
let totalCost = itemPrice * quantity;

console.log("Total:");
console.log(totalCost);`,
        explanation: '• itemPrice is 15 and quantity is 3.\n• itemPrice * quantity calculates 15 × 3 = 45.\n• totalCost holds 45 and is printed to the screen.',
        expectedOutput: 'Total:\n45'
      },
      commonMistakes: [
        'Putting quotes around numbers (e.g. "10" + "2" gives "102" instead of 12!). Always write raw numbers without quotes.'
      ],
      exerciseSteps: [
        'You have `breadPrice = 4` and `milkPrice = 3`.',
        'Create a variable `totalPrice` that adds `breadPrice` and `milkPrice`.',
        'Print `totalPrice` to the console.'
      ],
      initialCode: `let breadPrice = 4;
let milkPrice = 3;

// 👉 Step 1: Calculate totalPrice by adding breadPrice + milkPrice
let totalPrice = breadPrice + milkPrice;

// 👉 Step 2: Print totalPrice to the console
console.log(totalPrice);
`,
      solutionCode: `let breadPrice = 4;
let milkPrice = 3;
let totalPrice = breadPrice + milkPrice;
console.log(totalPrice);
`,
      hints: [
        'Use `let totalPrice = breadPrice + milkPrice;`',
        'Then `console.log(totalPrice);`'
      ],
      testCases: [
        {
          id: 'js-3-tc-1',
          description: 'totalPrice equals 7',
          testFn: 'typeof totalPrice !== "undefined" && totalPrice === 7',
          expectedMessage: 'totalPrice should equal breadPrice + milkPrice (which is 7)'
        },
        {
          id: 'js-3-tc-2',
          description: 'Prints 7 to console',
          testFn: 'logs.some(l => l.args.join(" ").includes("7"))',
          expectedMessage: 'Make sure to print totalPrice'
        }
      ]
    },

    // LESSON 4: MAKING DECISIONS WITH IF/ELSE
    {
      id: 'js-4-if-else',
      title: '4. Making Decisions with if / else',
      slug: 'if-else',
      language: 'javascript',
      category: '2. Logic & Flow',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 6,
      xp: 35,
      description: 'Teach your code to make smart choices based on real-world conditions.',
      concepts: ['Comparison operators (>, <, ===)', 'if statements', 'else fallback'],
      analogy: 'Imagine checking the weather: IF it is raining, you grab an umbrella. ELSE, you wear your sunglasses.',
      explanationMarkdown: `### How Code Makes Choices
An \`if\` statement runs a block of code only when a condition is **true**:

\`\`\`javascript
let score = 85;

if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("Keep practicing!");
}
\`\`\`

Comparison symbols:
* \`>\` Greater than
* \`<\` Less than
* \`>=\` Greater than or equal to
* \`===\` Exactly equal to
`,
      workedExample: {
        title: 'Worked Example: Checking Ticket Price',
        code: `let userAge = 20;

if (userAge >= 18) {
  console.log("Adult Ticket");
} else {
  console.log("Child Ticket");
}`,
        explanation: '• userAge is 20.\n• userAge >= 18 is true, so "Adult Ticket" is printed.\n• The else block is skipped.',
        expectedOutput: 'Adult Ticket'
      },
      commonMistakes: [
        'Using a single = instead of === for comparison. Single = assigns a value, while === tests if values are equal.',
        'Forgetting curly braces { } around the code block.'
      ],
      exerciseSteps: [
        'Look at the variable `userScore = 90`.',
        'Write an `if` check: if `userScore >= 50`, print `"Pass"`.',
        'Otherwise in the `else` block, print `"Fail"`.'
      ],
      initialCode: `let userScore = 90;

// 👉 Write your if / else statement below:
if (userScore >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
`,
      solutionCode: `let userScore = 90;

if (userScore >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
`,
      hints: [
        'Start with `if (userScore >= 50) { console.log("Pass"); }`',
        'Add the else block: `else { console.log("Fail"); }`'
      ],
      testCases: [
        {
          id: 'js-4-tc-1',
          description: 'Prints "Pass" when score is 90',
          testFn: 'logs.some(l => l.args.join(" ").includes("Pass"))',
          expectedMessage: 'When userScore is 90, it should print "Pass"'
        }
      ]
    },

    // LESSON 5: FUNCTIONS
    {
      id: 'js-5-functions',
      title: '5. Functions: Reusable Code Recipes',
      slug: 'functions',
      language: 'javascript',
      category: '2. Logic & Flow',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 7,
      xp: 40,
      description: 'Write code once and run it as many times as you want with different inputs.',
      concepts: ['Function declarations', 'Parameters & arguments', 'The return keyword'],
      analogy: 'A function is like a kitchen recipe card. The recipe is written once, but every time you cook, you can change ingredients (like making blueberry pancakes vs chocolate pancakes).',
      explanationMarkdown: `### What is a Function?
A function is a named block of code that performs an action. It can take inputs (called **parameters**) and send back a result using **\`return\`**.

\`\`\`javascript
function makeGreeting(name) {
  return "Hello, " + name + "!";
}

// Call the function:
let msg = makeGreeting("Alex");
console.log(msg); // Prints: Hello, Alex!
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Adding Numbers',
        code: `function add(a, b) {
  return a + b;
}

let result = add(10, 5);
console.log("Result: " + result);`,
        explanation: '• function add(a, b) defines a reusable adder.\n• return a + b sends the sum back to whoever called it.\n• add(10, 5) returns 15.',
        expectedOutput: 'Result: 15'
      },
      commonMistakes: [
        'Forgetting the return keyword. If you omit return, the function returns undefined!',
        'Forgetting parentheses () when calling the function.'
      ],
      exerciseSteps: [
        'Look at the function `doubleNumber(x)`.',
        'Inside the function, return `x * 2`.',
        'Test it with `console.log(doubleNumber(7));`.'
      ],
      initialCode: `// 👉 Define doubleNumber so it multiplies x by 2
function doubleNumber(x) {
  return x * 2;
}

// Test it:
console.log(doubleNumber(7)); // Should print 14
`,
      solutionCode: `function doubleNumber(x) {
  return x * 2;
}

console.log(doubleNumber(7));
`,
      hints: [
        'Inside the function, write: `return x * 2;`'
      ],
      testCases: [
        {
          id: 'js-5-tc-1',
          description: 'doubleNumber(5) returns 10',
          testFn: 'typeof doubleNumber === "function" && doubleNumber(5) === 10',
          expectedMessage: 'doubleNumber(5) should return 10'
        },
        {
          id: 'js-5-tc-2',
          description: 'doubleNumber(12) returns 24',
          testFn: 'typeof doubleNumber === "function" && doubleNumber(12) === 24',
          expectedMessage: 'doubleNumber(12) should return 24'
        }
      ]
    },

    // LESSON 6: ARRAYS
    {
      id: 'js-6-arrays',
      title: '6. Arrays: Storing Lists of Data',
      slug: 'arrays',
      language: 'javascript',
      category: '3. Data Structures',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 6,
      xp: 40,
      description: 'Store multiple values in a single ordered list and access items by index.',
      concepts: ['Array syntax [item1, item2]', 'Zero-based indexing', 'Array .length property'],
      analogy: 'Think of an egg carton with numbered slots. The first slot is 0, the second slot is 1, and so on.',
      explanationMarkdown: `### What is an Array?
An Array is a list of items enclosed in square brackets \`[ ]\`.

\`\`\`javascript
let fruits = ["Apple", "Banana", "Orange"];

// Access the first item (indexes start at 0!):
console.log(fruits[0]); // Apple

// Check how many items are inside:
console.log(fruits.length); // 3
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: High Scores List',
        code: `let scores = [98, 85, 76, 100];

console.log("First score: " + scores[0]);
console.log("Total players: " + scores.length);`,
        explanation: '• scores is an array of 4 numbers.\n• scores[0] gets the first score: 98.\n• scores.length tells us there are 4 items.',
        expectedOutput: 'First score: 98\nTotal players: 4'
      },
      commonMistakes: [
        'Forgetting that computers count from 0! The first item is at index 0, not 1.',
        'Using curly braces { } instead of square brackets [ ] for arrays.'
      ],
      exerciseSteps: [
        'Create an array named `colors` with 3 items: `"red"`, `"green"`, and `"blue"`.',
        'Print the first color (`colors[0]`) to the console.'
      ],
      initialCode: `// 👉 Step 1: Create an array named colors with "red", "green", "blue"
const colors = ["red", "green", "blue"];

// 👉 Step 2: Print the first color to the console:
console.log(colors[0]);
`,
      solutionCode: `const colors = ["red", "green", "blue"];
console.log(colors[0]);
`,
      hints: [
        'Declare: `const colors = ["red", "green", "blue"];`',
        'Access first item: `console.log(colors[0]);`'
      ],
      testCases: [
        {
          id: 'js-6-tc-1',
          description: 'colors array contains 3 items',
          testFn: 'Array.isArray(colors) && colors.length >= 3 && colors[0] === "red"',
          expectedMessage: 'colors should be an array with ["red", "green", "blue"]'
        },
        {
          id: 'js-6-tc-2',
          description: 'Prints "red" to console',
          testFn: 'logs.some(l => l.args.join(" ").includes("red"))',
          expectedMessage: 'Make sure to console.log(colors[0])'
        }
      ]
    },

    // LESSON 7: OBJECTS
    {
      id: 'js-7-objects',
      title: '7. Objects: Grouping Related Information',
      slug: 'objects',
      language: 'javascript',
      category: '3. Data Structures',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 7,
      xp: 45,
      description: 'Represent real-world things like users, products, and game characters with key-value pairs.',
      concepts: ['Object literals { key: value }', 'Dot notation (user.name)', 'Adding properties'],
      analogy: 'An object is like an ID card. It has labels on the left (Name, Age, City) and the actual info on the right.',
      explanationMarkdown: `### What is an Object?
While an array is an ordered list, an **Object** stores data with descriptive labels called **keys**:

\`\`\`javascript
let user = {
  name: "Sarah",
  age: 26,
  role: "Developer"
};

// Access properties with dot notation:
console.log(user.name); // Sarah
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Product Listing',
        code: `let laptop = {
  brand: "Apple",
  model: "MacBook Air",
  price: 999
};

console.log(laptop.brand + " " + laptop.model);
console.log("$" + laptop.price);`,
        explanation: '• laptop is an object with three properties: brand, model, and price.\n• laptop.brand retrieves "Apple".\n• laptop.price retrieves 999.',
        expectedOutput: 'Apple MacBook Air\n$999'
      },
      commonMistakes: [
        'Using semicolons ; inside an object instead of commas , between properties.',
        'Forgetting quotes around string values inside the object.'
      ],
      exerciseSteps: [
        'Create an object named `character` with two properties: `name: "Aria"` and `level: 5`.',
        'Print `character.name` to the console.'
      ],
      initialCode: `// 👉 Step 1: Create the character object:
const character = {
  name: "Aria",
  level: 5
};

// 👉 Step 2: Print the character name:
console.log(character.name);
`,
      solutionCode: `const character = {
  name: "Aria",
  level: 5
};
console.log(character.name);
`,
      hints: [
        'Define: `const character = { name: "Aria", level: 5 };`',
        'Print: `console.log(character.name);`'
      ],
      testCases: [
        {
          id: 'js-7-tc-1',
          description: 'character object has name "Aria" and level 5',
          testFn: 'typeof character === "object" && character.name === "Aria" && character.level === 5',
          expectedMessage: 'character should have name: "Aria" and level: 5'
        },
        {
          id: 'js-7-tc-2',
          description: 'Prints "Aria" to console',
          testFn: 'logs.some(l => l.args.join(" ").includes("Aria"))',
          expectedMessage: 'Make sure to console.log(character.name)'
        }
      ]
    },

    // LESSON 8: CAPSTONE PROJECT & CERTIFICATE
    {
      id: 'js-8-capstone-mastery',
      title: '8. Capstone Challenge: Shopping Cart Calculator',
      slug: 'shopping-cart-capstone',
      language: 'javascript',
      category: '4. Capstone Project',
      difficulty: 'Intermediate',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 10,
      xp: 60,
      description: 'Combine variables, arrays, objects, and functions to calculate the grand total of an online shopping order.',
      concepts: ['Combining data structures', 'Looping over lists', 'Returning final calculations'],
      analogy: 'You are writing the checkout engine for an e-commerce store like Amazon. When a shopper clicks Buy, your code sums up their items.',
      explanationMarkdown: `### The Final Step: Building a Real Feature!
You have learned:
1. Printing to the console
2. Storing values in variables
3. Doing math calculations
4. Making decisions with if/else
5. Writing reusable functions
6. Arrays and Objects

Now, let's put it all together into a practical function that calculates an order total with tax!
`,
      workedExample: {
        title: 'Worked Example: Summing an Array',
        code: `function sumPrices(prices) {
  let total = 0;
  for (let price of prices) {
    total = total + price;
  }
  return total;
}

console.log("Total: $" + sumPrices([10, 20, 30]));`,
        explanation: '• sumPrices starts a total at 0.\n• for (let price of prices) visits each price in the list.\n• Adds each price to total and returns 60.',
        expectedOutput: 'Total: $60'
      },
      commonMistakes: [
        'Forgetting to return the total variable at the end of the function.'
      ],
      exerciseSteps: [
        'Complete the function `calculateCartTotal(prices, taxRate)`.',
        'Add all prices together, then multiply by `(1 + taxRate)` to get the grand total.',
        'Return the grand total number.',
        'Pass all tests to finish the JavaScript course and claim your verified Certificate!'
      ],
      initialCode: `function calculateCartTotal(prices, taxRate) {
  let subtotal = 0;
  
  // 👉 Step 1: Add up all the item prices:
  for (let p of prices) {
    subtotal += p;
  }
  
  // 👉 Step 2: Multiply by (1 + taxRate) and return the grand total:
  return subtotal * (1 + taxRate);
}

// Test with prices $10, $20 and a 10% tax (0.10):
console.log("Grand Total: $" + calculateCartTotal([10, 20], 0.10)); // Should be 33
`,
      solutionCode: `function calculateCartTotal(prices, taxRate) {
  let subtotal = 0;
  for (let p of prices) {
    subtotal += p;
  }
  return subtotal * (1 + taxRate);
}

console.log("Grand Total: $" + calculateCartTotal([10, 20], 0.10));
`,
      hints: [
        'Loop over prices with `for (let p of prices) { subtotal += p; }`',
        'Return `subtotal * (1 + taxRate);`'
      ],
      testCases: [
        {
          id: 'js-8-tc-1',
          description: 'calculateCartTotal([10, 20], 0.10) returns 33',
          testFn: 'typeof calculateCartTotal === "function" && Math.round(calculateCartTotal([10, 20], 0.10)) === 33',
          expectedMessage: 'For $10 + $20 with 10% tax, the total should be 33'
        },
        {
          id: 'js-8-tc-2',
          description: 'calculateCartTotal([50, 50], 0) returns 100',
          testFn: 'typeof calculateCartTotal === "function" && calculateCartTotal([50, 50], 0) === 100',
          expectedMessage: 'For $50 + $50 with 0% tax, the total should be 100'
        }
      ]
    }
  ]
};
