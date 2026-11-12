import { Lesson } from '../../../types';

export const module13Lessons: Lesson[] = [
  {
    "id": "js-146-capstone-unit-converter",
    "title": "146. Capstone 1: Temperature & Unit Conversion Engine",
    "slug": "capstone-unit-converter",
    "language": "javascript",
    "category": "Module 13: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Build a robust multi-unit temperature conversion engine supporting Celsius, Fahrenheit, and Kelvin.",
    "concepts": [
      "Classes",
      "Data normalization",
      "Error validation",
      "Math algorithms"
    ],
    "analogy": "A universal airport converter screen translating foreign temperature units for international travelers.",
    "explanationMarkdown": "### Capstone 1: Temperature Converter\nBuild a converter class that parses temperatures and translates them across scales:\n* C to F: `(C * 9/5) + 32`\n* F to C: `(F - 32) * 5/9`\n* C to K: `C + 273.15`",
    "workedExample": {
      "title": "Worked Example: Simple C to F",
      "code": "function cToF(c) { return (c * 9/5) + 32; }\nconsole.log(cToF(100));",
      "explanation": "\u2022 100\u00b0C is 212\u00b0F (boiling point).",
      "expectedOutput": "212"
    },
    "exerciseSteps": [
      "Create a class `Temperature` with constructor `(celsius)` storing `this.celsius = celsius`.",
      "Add getter `fahrenheit` returning `(this.celsius * 9/5) + 32`.",
      "Add getter `kelvin` returning `this.celsius + 273.15`.",
      "Instantiate `const temp = new Temperature(25);`.",
      "Print `temp.fahrenheit`."
    ],
    "initialCode": "class Temperature {\n  constructor(celsius) {\n    this.celsius = celsius;\n  }\n  get fahrenheit() {\n    return (this.celsius * 9 / 5) + 32;\n  }\n  get kelvin() {\n    return this.celsius + 273.15;\n  }\n}\nconst temp = new Temperature(25);\nconsole.log(temp.fahrenheit);\n",
    "solutionCode": "class Temperature {\n  constructor(celsius) {\n    this.celsius = celsius;\n  }\n  get fahrenheit() {\n    return (this.celsius * 9 / 5) + 32;\n  }\n  get kelvin() {\n    return this.celsius + 273.15;\n  }\n}\nconst temp = new Temperature(25);\nconsole.log(temp.fahrenheit);\n",
    "hints": [
      "Remember C to F formula: `(this.celsius * 9/5) + 32`"
    ],
    "testCases": [
      {
        "id": "js-146-tc-1",
        "description": "temp.fahrenheit is 77 for 25C",
        "testFn": "temp.fahrenheit === 77"
      },
      {
        "id": "js-146-tc-2",
        "description": "temp.kelvin is 298.15 for 25C",
        "testFn": "temp.kelvin === 298.15"
      }
    ]
  },
  {
    "id": "js-147-capstone-password-validator",
    "title": "147. Capstone 2: Enterprise Password Security Validator",
    "slug": "capstone-password-validator",
    "language": "javascript",
    "category": "Module 13: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Construct an enterprise password strength validator assessing length, digits, symbols, and casing.",
    "concepts": [
      "Regex testing",
      "Validation rules",
      "Boolean aggregation"
    ],
    "analogy": "A high-security bank vault biometric scan checking four independent verification criteria.",
    "explanationMarkdown": "### Capstone 2: Password Validator\nAn enterprise password must satisfy:\n1. Length >= 8\n2. At least one uppercase letter `/[A-Z]/`\n3. At least one lowercase letter `/[a-z]/`\n4. At least one digit `/[0-9]/`",
    "workedExample": {
      "title": "Worked Example: Regex test",
      "code": "let hasDigit = /[0-9]/.test(\"Pass123\");\nconsole.log(hasDigit);",
      "explanation": "\u2022 Returns true because string contains digits.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Write a function `validatePassword(pass)` that checks all 4 criteria.",
      "Return `{ isValid: boolean, score: number }` where score is count of passed rules (0 to 4).",
      "Test with `let result = validatePassword(\"Secur3P@ss\");` and print `result.isValid`."
    ],
    "initialCode": "function validatePassword(pass) {\n  let rules = [\n    pass.length >= 8,\n    /[A-Z]/.test(pass),\n    /[a-z]/.test(pass),\n    /[0-9]/.test(pass)\n  ];\n  let score = rules.filter(Boolean).length;\n  return {\n    isValid: score === 4,\n    score\n  };\n}\nlet result = validatePassword(\"Secur3P@ss\");\nconsole.log(result.isValid);\n",
    "solutionCode": "function validatePassword(pass) {\n  let rules = [\n    pass.length >= 8,\n    /[A-Z]/.test(pass),\n    /[a-z]/.test(pass),\n    /[0-9]/.test(pass)\n  ];\n  let score = rules.filter(Boolean).length;\n  return {\n    isValid: score === 4,\n    score\n  };\n}\nlet result = validatePassword(\"Secur3P@ss\");\nconsole.log(result.isValid);\n",
    "hints": [
      "Filter true values using `rules.filter(Boolean).length`"
    ],
    "testCases": [
      {
        "id": "js-147-tc-1",
        "description": "Secur3P@ss is valid with score 4",
        "testFn": "result.isValid === true && result.score === 4"
      },
      {
        "id": "js-147-tc-2",
        "description": "short password fails",
        "testFn": "validatePassword('abc').isValid === false"
      }
    ]
  },
  {
    "id": "js-148-capstone-cart-discounts",
    "title": "148. Capstone 3: E-Commerce Shopping Cart & Coupon Engine",
    "slug": "capstone-cart-discounts",
    "language": "javascript",
    "category": "Module 13: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Implement a full e-commerce cart computing subtotals, tax rates, and percentage discount coupons.",
    "concepts": [
      "Array reduce",
      "Object state",
      "Discount calculations",
      "Rounding math"
    ],
    "analogy": "An Amazon checkout page aggregating multiple cart items, subtracting a coupon promo code, and computing state sales tax.",
    "explanationMarkdown": "### Capstone 3: Shopping Cart Engine\n```javascript\nclass ShoppingCart {\n  items = [];\n  addItem(name, price, qty) { this.items.push({ name, price, qty }); }\n  getSubtotal() { return this.items.reduce((sum, item) => sum + item.price * item.qty, 0); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Subtotal calculation",
      "code": "let items = [{ price: 20, qty: 2 }, { price: 10, qty: 1 }];\nlet subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);\nconsole.log(subtotal);",
      "explanation": "\u2022 40 + 10 = 50.",
      "expectedOutput": "50"
    },
    "exerciseSteps": [
      "Create class `ShoppingCart` with `items = []`.",
      "Add `addItem(name, price, qty)` pushing `{ name, price, qty }`.",
      "Add `getTotal(discountPercent = 0)` that computes `subtotal * (1 - discountPercent / 100)`.",
      "Instantiate cart, add a 100-dollar item, apply a 20% discount coupon, and print total."
    ],
    "initialCode": "class ShoppingCart {\n  constructor() {\n    this.items = [];\n  }\n  addItem(name, price, qty = 1) {\n    this.items.push({ name, price, qty });\n  }\n  getTotal(discountPercent = 0) {\n    let subtotal = this.items.reduce((sum, item) => sum + item.price * item.qty, 0);\n    return subtotal * (1 - discountPercent / 100);\n  }\n}\nconst cart = new ShoppingCart();\ncart.addItem(\"Shoes\", 100, 1);\nlet total = cart.getTotal(20);\nconsole.log(total);\n",
    "solutionCode": "class ShoppingCart {\n  constructor() {\n    this.items = [];\n  }\n  addItem(name, price, qty = 1) {\n    this.items.push({ name, price, qty });\n  }\n  getTotal(discountPercent = 0) {\n    let subtotal = this.items.reduce((sum, item) => sum + item.price * item.qty, 0);\n    return subtotal * (1 - discountPercent / 100);\n  }\n}\nconst cart = new ShoppingCart();\ncart.addItem(\"Shoes\", 100, 1);\nlet total = cart.getTotal(20);\nconsole.log(total);\n",
    "hints": [
      "Apply discount formula `subtotal * (1 - discountPercent / 100)`"
    ],
    "testCases": [
      {
        "id": "js-148-tc-1",
        "description": "total after 20% discount on $100 is 80",
        "testFn": "total === 80"
      },
      {
        "id": "js-148-tc-2",
        "description": "cart has 1 item",
        "testFn": "cart.items.length === 1"
      }
    ]
  },
  {
    "id": "js-149-capstone-task-manager",
    "title": "149. Capstone 4: State-Driven Task & To-Do System",
    "slug": "capstone-task-manager",
    "language": "javascript",
    "category": "Module 13: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Build an in-memory task management store with adding, toggling, filtering, and summary statistics.",
    "concepts": [
      "Array filtering",
      "ID generation",
      "State immutability",
      "CRUD operations"
    ],
    "analogy": "A Jira or Linear kanban board tracking tasks across pending and completed states.",
    "explanationMarkdown": "### Capstone 4: Task Management Store\nImplement core operations:\n* `addTask(title)`: creates `{ id, title, completed: false }`\n* `toggleTask(id)`: inverts completion status\n* `getActiveTasks()`: filters for `!completed`\n* `getCompletedTasks()`: filters for `completed`",
    "workedExample": {
      "title": "Worked Example: Toggle item",
      "code": "let task = { id: 1, completed: false };\ntask.completed = !task.completed;\nconsole.log(task.completed);",
      "explanation": "\u2022 Toggles status to true.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Create `class TaskManager` with `this.tasks = [];` and `this.nextId = 1;`.",
      "Add `addTask(title)` creating `{ id: this.nextId++, title, completed: false }`.",
      "Add `toggleTask(id)` finding task by ID and flipping its completed boolean.",
      "Add `addTask('Code')`, toggle it, and print its completed status."
    ],
    "initialCode": "class TaskManager {\n  constructor() {\n    this.tasks = [];\n    this.nextId = 1;\n  }\n  addTask(title) {\n    const task = { id: this.nextId++, title, completed: false };\n    this.tasks.push(task);\n    return task;\n  }\n  toggleTask(id) {\n    const task = this.tasks.find(t => t.id === id);\n    if (task) task.completed = !task.completed;\n    return task;\n  }\n  getCompleted() {\n    return this.tasks.filter(t => t.completed);\n  }\n}\nconst tm = new TaskManager();\nlet t1 = tm.addTask(\"Learn JavaScript\");\ntm.toggleTask(t1.id);\nconsole.log(t1.completed);\n",
    "solutionCode": "class TaskManager {\n  constructor() {\n    this.tasks = [];\n    this.nextId = 1;\n  }\n  addTask(title) {\n    const task = { id: this.nextId++, title, completed: false };\n    this.tasks.push(task);\n    return task;\n  }\n  toggleTask(id) {\n    const task = this.tasks.find(t => t.id === id);\n    if (task) task.completed = !task.completed;\n    return task;\n  }\n  getCompleted() {\n    return this.tasks.filter(t => t.completed);\n  }\n}\nconst tm = new TaskManager();\nlet t1 = tm.addTask(\"Learn JavaScript\");\ntm.toggleTask(t1.id);\nconsole.log(t1.completed);\n",
    "hints": [
      "Find task with `this.tasks.find(t => t.id === id)`"
    ],
    "testCases": [
      {
        "id": "js-149-tc-1",
        "description": "t1 is marked completed",
        "testFn": "t1.completed === true"
      },
      {
        "id": "js-149-tc-2",
        "description": "getCompleted returns 1 task",
        "testFn": "tm.getCompleted().length === 1"
      }
    ]
  },
  {
    "id": "js-150-capstone-financial-ledger",
    "title": "150. Capstone 5: Financial Expense & Budget Ledger",
    "slug": "capstone-financial-ledger",
    "language": "javascript",
    "category": "Module 13: Real-World Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 10,
    "xp": 60,
    "description": "Construct an accounting ledger tracking income and expense entries, balance calculations, and category summaries.",
    "concepts": [
      "Financial accounting",
      "Aggregation & grouping",
      "Final Capstone Completion"
    ],
    "analogy": "A personal banking app showing total savings, monthly income, breakdown by category (Rent, Food), and final net balance.",
    "explanationMarkdown": "### Capstone 5: Financial Ledger\nCongratulations on reaching Lesson 150! In this final masterclass capstone, you will build an accounting ledger that handles:\n* `record(type, category, amount)` ('income' vs 'expense')\n* `getBalance()`: Total income minus total expenses\n* `getSummaryByCategory()`: Categorized spending aggregation",
    "workedExample": {
      "title": "Worked Example: Net balance calculation",
      "code": "let income = 3000;\nlet expense = 1200;\nlet net = income - expense;\nconsole.log(`Net savings: $${net}`);",
      "explanation": "\u2022 Computes net surplus of $1800.",
      "expectedOutput": "Net savings: $1800"
    },
    "exerciseSteps": [
      "Create `class FinancialLedger` with `this.entries = [];`.",
      "Add `addEntry(type, category, amount)` storing `{ type, category, amount }`.",
      "Add `getBalance()`: sums income, subtracts expenses, returns net balance.",
      "Record income of 5000, expense of 2000, and print `ledger.getBalance()`."
    ],
    "initialCode": "class FinancialLedger {\n  constructor() {\n    this.entries = [];\n  }\n  addEntry(type, category, amount) {\n    this.entries.push({ type, category, amount });\n  }\n  getBalance() {\n    return this.entries.reduce((acc, entry) => {\n      return entry.type === \"income\" ? acc + entry.amount : acc - entry.amount;\n    }, 0);\n  }\n}\nconst ledger = new FinancialLedger();\nledger.addEntry(\"income\", \"Salary\", 5000);\nledger.addEntry(\"expense\", \"Rent\", 2000);\nlet balance = ledger.getBalance();\nconsole.log(balance);\n",
    "solutionCode": "class FinancialLedger {\n  constructor() {\n    this.entries = [];\n  }\n  addEntry(type, category, amount) {\n    this.entries.push({ type, category, amount });\n  }\n  getBalance() {\n    return this.entries.reduce((acc, entry) => {\n      return entry.type === \"income\" ? acc + entry.amount : acc - entry.amount;\n    }, 0);\n  }\n}\nconst ledger = new FinancialLedger();\nledger.addEntry(\"income\", \"Salary\", 5000);\nledger.addEntry(\"expense\", \"Rent\", 2000);\nlet balance = ledger.getBalance();\nconsole.log(balance);\n",
    "hints": [
      "Use `.reduce()` to add income and subtract expenses"
    ],
    "testCases": [
      {
        "id": "js-150-tc-1",
        "description": "balance is 3000",
        "testFn": "balance === 3000"
      },
      {
        "id": "js-150-tc-2",
        "description": "ledger has 2 entries",
        "testFn": "ledger.entries.length === 2"
      }
    ]
  }
];
