import { Lesson } from '../../../types';

export const module9Lessons: Lesson[] = [
  {
    "id": "js-99-object-basics",
    "title": "99. Object Literals & Key-Value Pairs",
    "slug": "object-basics",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Store structured data with named keys inside curly braces {}.",
    "concepts": [
      "Object literals",
      "key: value pairs"
    ],
    "analogy": "A physical passport: 'name: Alice', 'country: Canada', 'age: 28'.",
    "explanationMarkdown": "### Object Literals\nObjects store pairs of keys and values:\n```javascript\nlet user = {\n  name: \"Alex\",\n  age: 25,\n  role: \"Admin\"\n};\n```",
    "workedExample": {
      "title": "Worked Example: Book Object",
      "code": "let book = { title: \"1984\", author: \"Orwell\" };\nconsole.log(book.title);",
      "explanation": "\u2022 Creates book and reads title.",
      "expectedOutput": "1984"
    },
    "exerciseSteps": [
      "Create an object `let car = { make: \"Tesla\", model: \"Model 3\", year: 2024 };`.",
      "Print `car.make`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let car = { make: \"Tesla\", model: \"Model 3\", year: 2024 };\nconsole.log(car.make);\n",
    "hints": [
      "Use curly braces `{ make: \"Tesla\", model: \"Model 3\", year: 2024 }`"
    ],
    "testCases": [
      {
        "id": "js-99-tc-1",
        "description": "car.make is Tesla",
        "testFn": "typeof car === 'object' && car.make === 'Tesla' && car.year === 2024"
      }
    ]
  },
  {
    "id": "js-100-bracket-notation",
    "title": "100. Accessing Properties: Dot vs Bracket Notation",
    "slug": "bracket-notation",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Access properties dynamically using brackets object[propertyName].",
    "concepts": [
      "obj.prop",
      "obj['prop']",
      "Dynamic property access"
    ],
    "analogy": "Opening a locker by its label directly, or looking up the locker number from a ticket.",
    "explanationMarkdown": "### Dot vs Bracket Notation\nWhen a property name is stored in a variable or contains spaces/dashes, use bracket notation `obj[prop]`:\n```javascript\nlet user = { \"full name\": \"Sarah Connor\" };\nconsole.log(user[\"full name\"]);\n\nlet key = \"full name\";\nconsole.log(user[key]);\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Property Lookup",
      "code": "let item = { price: 99 };\nlet targetKey = \"price\";\nconsole.log(item[targetKey]);",
      "explanation": "\u2022 Reads item.price via the targetKey variable.",
      "expectedOutput": "99"
    },
    "exerciseSteps": [
      "Create `let profile = { username: \"coder99\", email: \"code@test.io\" };`.",
      "Create `let field = \"username\";`.",
      "Print `profile[field]`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let profile = { username: \"coder99\", email: \"code@test.io\" };\nlet field = \"username\";\nconsole.log(profile[field]);\n",
    "hints": [
      "Use `profile[field]`"
    ],
    "testCases": [
      {
        "id": "js-100-tc-1",
        "description": "profile[field] evaluates to coder99",
        "testFn": "typeof profile === 'object' && profile[field] === 'coder99'"
      }
    ]
  },
  {
    "id": "js-101-modifying-properties",
    "title": "101. Adding, Updating & Deleting Object Properties",
    "slug": "modifying-properties",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Modify existing values, add brand new properties, or remove them with delete.",
    "concepts": [
      "obj.key = val",
      "delete obj.key"
    ],
    "analogy": "Updating your home address on an official form or erasing an old phone number.",
    "explanationMarkdown": "### Modifying Objects\n```javascript\nlet user = { name: \"Leo\" };\nuser.age = 22; // Add\nuser.name = \"Leonardo\"; // Update\ndelete user.age; // Delete\n```",
    "workedExample": {
      "title": "Worked Example: Inventory Update",
      "code": "let product = { id: 1, stock: 10 };\nproduct.stock = 15;\nproduct.inStock = true;\nconsole.log(product.stock);",
      "explanation": "\u2022 Stock was updated to 15.",
      "expectedOutput": "15"
    },
    "exerciseSteps": [
      "Create `let hero = { name: \"Batman\", city: \"Gotham\" };`.",
      "Add `hero.nemesis = \"Joker\";`.",
      "Print `hero.nemesis`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let hero = { name: \"Batman\", city: \"Gotham\" };\nhero.nemesis = \"Joker\";\nconsole.log(hero.nemesis);\n",
    "hints": [
      "Assign `hero.nemesis = \"Joker\";`"
    ],
    "testCases": [
      {
        "id": "js-101-tc-1",
        "description": "hero has nemesis Joker",
        "testFn": "hero.nemesis === 'Joker' && hero.city === 'Gotham'"
      }
    ]
  },
  {
    "id": "js-102-object-methods",
    "title": "102. Object Methods & The 'this' Keyword",
    "slug": "object-methods-this",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Store functions inside objects as methods and access internal state with this.",
    "concepts": [
      "Methods in objects",
      "'this' refers to current object"
    ],
    "analogy": "A robot having a button labeled 'sayName()', which speaks the robot's own name badge.",
    "explanationMarkdown": "### Object Methods & this\nFunctions attached to objects are called **methods**:\n```javascript\nlet dog = {\n  name: \"Buddy\",\n  bark() {\n    return `${this.name} says woof!`;\n  }\n};\nconsole.log(dog.bark()); // \"Buddy says woof!\"\n```",
    "workedExample": {
      "title": "Worked Example: Counter Object",
      "code": "let counter = {\n  count: 0,\n  increment() { this.count++; return this.count; }\n};\nconsole.log(counter.increment());",
      "explanation": "\u2022 counter.increment() mutates this.count.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `let greeter = { name: \"Sam\", greet() { return \"Hello, \" + this.name; } };`.",
      "Call `greeter.greet()` and print it."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let greeter = {\n  name: \"Sam\",\n  greet() {\n    return \"Hello, \" + this.name;\n  }\n};\nconsole.log(greeter.greet());\n",
    "hints": [
      "Use `this.name` inside greet()"
    ],
    "testCases": [
      {
        "id": "js-102-tc-1",
        "description": "greeter.greet() returns Hello, Sam",
        "testFn": "greeter.greet() === 'Hello, Sam'"
      }
    ]
  },
  {
    "id": "js-103-object-destructuring",
    "title": "103. Object Destructuring",
    "slug": "object-destructuring",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Unpack properties directly into distinct variables using { prop1, prop2 } = obj.",
    "concepts": [
      "Object destructuring",
      "Default values"
    ],
    "analogy": "Opening an Amazon delivery box and pulling out the headphones and charger directly into your hands.",
    "explanationMarkdown": "### Destructuring\nInstead of `let name = user.name; let age = user.age;`:\n```javascript\nconst user = { name: \"Zara\", age: 29 };\nconst { name, age } = user;\nconsole.log(name); // \"Zara\"\n```",
    "workedExample": {
      "title": "Worked Example: Config Options",
      "code": "const config = { host: \"localhost\", port: 8080 };\nconst { host, port } = config;\nconsole.log(`${host}:${port}`);",
      "explanation": "\u2022 Extracts host and port cleanly.",
      "expectedOutput": "localhost:8080"
    },
    "exerciseSteps": [
      "Create `const player = { username: \"PixelKnight\", level: 42 };`.",
      "Destructure `const { username, level } = player;`.",
      "Print `${username} is level ${level}`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "const player = { username: \"PixelKnight\", level: 42 };\nconst { username, level } = player;\nconsole.log(`${username} is level ${level}`);\n",
    "hints": [
      "Use `const { username, level } = player;`"
    ],
    "testCases": [
      {
        "id": "js-103-tc-1",
        "description": "username is PixelKnight and level is 42",
        "testFn": "username === 'PixelKnight' && level === 42"
      }
    ]
  },
  {
    "id": "js-104-object-spread",
    "title": "104. Object Spread Operator ({ ...obj })",
    "slug": "object-spread",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Clone and merge objects effortlessly using the spread operator { ...a, ...b }.",
    "concepts": [
      "Spread operator ...",
      "Shallow copying",
      "Merging objects"
    ],
    "analogy": "Photocopying a recipe card and writing a new topping at the bottom.",
    "explanationMarkdown": "### Object Spread\n```javascript\nlet defaults = { theme: \"dark\", fontSize: 14 };\nlet userPrefs = { fontSize: 16, autoSave: true };\nlet settings = { ...defaults, ...userPrefs };\n// { theme: \"dark\", fontSize: 16, autoSave: true }\n```",
    "workedExample": {
      "title": "Worked Example: Merging Profiles",
      "code": "let base = { id: 1 };\nlet extra = { name: \"Nova\" };\nlet merged = { ...base, ...extra };\nconsole.log(merged.name);",
      "explanation": "\u2022 Merges base and extra into a single object.",
      "expectedOutput": "Nova"
    },
    "exerciseSteps": [
      "Create `let baseUser = { role: \"user\", status: \"active\" };`.",
      "Create `let adminUser = { ...baseUser, role: \"admin\" };`.",
      "Print `adminUser.role`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let baseUser = { role: \"user\", status: \"active\" };\nlet adminUser = { ...baseUser, role: \"admin\" };\nconsole.log(adminUser.role);\n",
    "hints": [
      "Spread baseUser and override role: `role: 'admin'`"
    ],
    "testCases": [
      {
        "id": "js-104-tc-1",
        "description": "adminUser has role admin and status active",
        "testFn": "adminUser.role === 'admin' && adminUser.status === 'active'"
      }
    ]
  },
  {
    "id": "js-105-object-keys-values-entries",
    "title": "105. Inspecting Objects: Object.keys, .values & .entries",
    "slug": "object-keys-values-entries",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Convert object data into arrays for easy looping and transformation.",
    "concepts": [
      "Object.keys()",
      "Object.values()",
      "Object.entries()"
    ],
    "analogy": "Extracting just the phone numbers (values) or just the contact names (keys) from an address book.",
    "explanationMarkdown": "### Object Iteration Methods\n```javascript\nlet stats = { hp: 100, mp: 50 };\nconsole.log(Object.keys(stats));   // [\"hp\", \"mp\"]\nconsole.log(Object.values(stats)); // [100, 50]\nconsole.log(Object.entries(stats)); // [[\"hp\", 100], [\"mp\", 50]]\n```",
    "workedExample": {
      "title": "Worked Example: Summing Object Values",
      "code": "let scores = { math: 90, english: 85 };\nlet total = Object.values(scores).reduce((a, b) => a + b, 0);\nconsole.log(total);",
      "explanation": "\u2022 Converts values to [90, 85] and sums them.",
      "expectedOutput": "175"
    },
    "exerciseSteps": [
      "Create `let inventory = { apples: 5, oranges: 8, bananas: 12 };`.",
      "Get keys with `let fruits = Object.keys(inventory);`.",
      "Print `fruits`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let inventory = { apples: 5, oranges: 8, bananas: 12 };\nlet fruits = Object.keys(inventory);\nconsole.log(fruits);\n",
    "hints": [
      "Use `Object.keys(inventory)`"
    ],
    "testCases": [
      {
        "id": "js-105-tc-1",
        "description": "fruits contains apples, oranges, bananas",
        "testFn": "Array.isArray(fruits) && fruits.includes('apples') && fruits.length === 3"
      }
    ]
  },
  {
    "id": "js-106-nested-objects",
    "title": "106. Working with Deeply Nested Objects",
    "slug": "nested-objects",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Structure complex hierarchical data by embedding objects within objects.",
    "concepts": [
      "Nested objects",
      "Chained property access"
    ],
    "analogy": "A folder inside a folder inside your hard drive.",
    "explanationMarkdown": "### Nested Objects\n```javascript\nlet company = {\n  name: \"Acme Corp\",\n  address: {\n    city: \"San Francisco\",\n    zip: \"94107\"\n  }\n};\nconsole.log(company.address.city); // \"San Francisco\"\n```",
    "workedExample": {
      "title": "Worked Example: Deep Access",
      "code": "let account = { user: { profile: { theme: \"dark\" } } };\nconsole.log(account.user.profile.theme);",
      "explanation": "\u2022 Chains .user.profile.theme.",
      "expectedOutput": "dark"
    },
    "exerciseSteps": [
      "Create `let user = { profile: { contact: { email: \"user@test.org\" } } };`.",
      "Print `user.profile.contact.email`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let user = { profile: { contact: { email: \"user@test.org\" } } };\nconsole.log(user.profile.contact.email);\n",
    "hints": [
      "Access `user.profile.contact.email`"
    ],
    "testCases": [
      {
        "id": "js-106-tc-1",
        "description": "user email is accessible",
        "testFn": "user.profile.contact.email === 'user@test.org'"
      }
    ]
  },
  {
    "id": "js-107-optional-chaining",
    "title": "107. Safe Access with Optional Chaining (?.)",
    "slug": "optional-chaining",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Prevent 'Cannot read property of undefined' crashes with the ?. operator.",
    "concepts": [
      "Optional chaining ?. ",
      "Safe navigation"
    ],
    "analogy": "Asking 'If this box exists, open it; if it doesn't exist, just tell me null instead of breaking down.'",
    "explanationMarkdown": "### Optional Chaining\n```javascript\nlet user = {};\n// Without ?.: user.address.city -> CRASH! TypeError\n// With ?.:\nconsole.log(user?.address?.city); // undefined (No crash!)\n```",
    "workedExample": {
      "title": "Worked Example: Safe Property Check",
      "code": "let response = { data: null };\nconsole.log(response.data?.items?.length);",
      "explanation": "\u2022 Gracefully returns undefined without crashing.",
      "expectedOutput": "undefined"
    },
    "exerciseSteps": [
      "Create `let client = { details: null };`.",
      "Create `let street = client.details?.address?.street;`.",
      "Print `street`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let client = { details: null };\nlet street = client.details?.address?.street;\nconsole.log(street);\n",
    "hints": [
      "Use `client.details?.address?.street`"
    ],
    "testCases": [
      {
        "id": "js-107-tc-1",
        "description": "street is undefined without throwing error",
        "testFn": "street === undefined"
      }
    ]
  },
  {
    "id": "js-108-nullish-coalescing",
    "title": "108. Default Fallbacks with Nullish Coalescing (??)",
    "slug": "nullish-coalescing",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Provide a default fallback only when a value is null or undefined (unlike || which also triggers on 0 or '').",
    "concepts": [
      "?? operator",
      "Difference from ||"
    ],
    "analogy": "Only use backup power when the electricity is genuinely off, not when the dimmer is just set to 0.",
    "explanationMarkdown": "### Nullish Coalescing Operator `??`\n`a ?? b` returns `b` **only if** `a` is `null` or `undefined`.\n```javascript\nlet count = 0;\nconsole.log(count || 10); // 10 (Bug! 0 was valid!)\nconsole.log(count ?? 10); // 0 (Correct!)\n```",
    "workedExample": {
      "title": "Worked Example: Fallback Timeout",
      "code": "let customTimeout = undefined;\nlet timeout = customTimeout ?? 5000;\nconsole.log(timeout);",
      "explanation": "\u2022 Since customTimeout is undefined, falls back to 5000.",
      "expectedOutput": "5000"
    },
    "exerciseSteps": [
      "Create `let userVolume = 0;`.",
      "Create `let volume = userVolume ?? 50;`.",
      "Print `volume`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let userVolume = 0;\nlet volume = userVolume ?? 50;\nconsole.log(volume);\n",
    "hints": [
      "Use `userVolume ?? 50`"
    ],
    "testCases": [
      {
        "id": "js-108-tc-1",
        "description": "volume preserves 0",
        "testFn": "volume === 0"
      }
    ]
  },
  {
    "id": "js-109-in-operator-has-own",
    "title": "109. Checking Key Existence: 'in' & Object.hasOwn",
    "slug": "in-operator-hasown",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Verify whether a key exists in an object without relying on truthiness.",
    "concepts": [
      "'key' in obj",
      "Object.hasOwn(obj, key)"
    ],
    "analogy": "Checking if a locker has a tag on it, even if the locker is currently empty.",
    "explanationMarkdown": "### Key Existence\n```javascript\nlet settings = { autoSave: false };\nconsole.log(\"autoSave\" in settings); // true\nconsole.log(Object.hasOwn(settings, \"autoSave\")); // true\nconsole.log(Object.hasOwn(settings, \"theme\")); // false\n```",
    "workedExample": {
      "title": "Worked Example: Checking permissions",
      "code": "let perms = { admin: true };\nconsole.log(\"admin\" in perms);",
      "explanation": "\u2022 Returns true because admin is a key in perms.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Create `let product = { name: \"Lamp\", price: 25 };`.",
      "Check if `\"price\"` is in `product` using `Object.hasOwn(product, \"price\")`.",
      "Assign to `let hasPrice` and print it."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let product = { name: \"Lamp\", price: 25 };\nlet hasPrice = Object.hasOwn(product, \"price\");\nconsole.log(hasPrice);\n",
    "hints": [
      "Use `Object.hasOwn(product, \"price\")`"
    ],
    "testCases": [
      {
        "id": "js-109-tc-1",
        "description": "hasPrice is true",
        "testFn": "hasPrice === true"
      }
    ]
  },
  {
    "id": "js-110-object-freeze-seal",
    "title": "110. Object Immutability: Object.freeze & Object.seal",
    "slug": "object-freeze-seal",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Lock down objects to prevent accidental mutations in mission-critical applications.",
    "concepts": [
      "Object.freeze()",
      "Object.isFrozen()"
    ],
    "analogy": "Laminating an official ID card so nobody can scratch out or alter the details.",
    "explanationMarkdown": "### Object.freeze\n`Object.freeze()` makes an object completely immutable: no adding, editing, or deleting properties:\n```javascript\nconst CONFIG = Object.freeze({\n  API_URL: \"https://api.site.com\",\n  PORT: 3000\n});\nCONFIG.PORT = 8080; // Silently ignored or throws in strict mode\nconsole.log(CONFIG.PORT); // 3000\n```",
    "workedExample": {
      "title": "Worked Example: Immutable Constants",
      "code": "const roles = Object.freeze({ ADMIN: \"admin\", USER: \"user\" });\nconsole.log(Object.isFrozen(roles));",
      "explanation": "\u2022 Object.isFrozen returns true.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Create `const state = Object.freeze({ status: \"READY\" });`.",
      "Create `let frozen = Object.isFrozen(state);`.",
      "Print `frozen`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "const state = Object.freeze({ status: \"READY\" });\nlet frozen = Object.isFrozen(state);\nconsole.log(frozen);\n",
    "hints": [
      "Use `Object.freeze` and `Object.isFrozen`"
    ],
    "testCases": [
      {
        "id": "js-110-tc-1",
        "description": "state is frozen",
        "testFn": "frozen === true && Object.isFrozen(state)"
      }
    ]
  },
  {
    "id": "js-111-computed-property-names",
    "title": "111. Computed Property Names ([expression])",
    "slug": "computed-property-names",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Dynamically compute key names directly inside the object literal using square brackets.",
    "concepts": [
      "Computed property names",
      "{ [key]: value }"
    ],
    "analogy": "Printing a personalized nametag whose label is calculated from a visitor's registration ID.",
    "explanationMarkdown": "### Computed Property Names\n```javascript\nlet prefix = \"env_\";\nlet config = {\n  [prefix + \"mode\"]: \"production\",\n  [prefix + \"version\"]: \"1.0.0\"\n};\nconsole.log(config.env_mode); // \"production\"\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Metric Key",
      "code": "let metric = \"views\";\nlet report = { [metric]: 1500 };\nconsole.log(report.views);",
      "explanation": "\u2022 Creates key 'views' dynamically.",
      "expectedOutput": "1500"
    },
    "exerciseSteps": [
      "Create `let prop = \"score\";`.",
      "Create `let game = { [prop]: 100 };`.",
      "Print `game.score`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let prop = \"score\";\nlet game = { [prop]: 100 };\nconsole.log(game.score);\n",
    "hints": [
      "Wrap the key in square brackets `[prop]: 100`"
    ],
    "testCases": [
      {
        "id": "js-111-tc-1",
        "description": "game has score 100",
        "testFn": "game.score === 100"
      }
    ]
  },
  {
    "id": "js-112-object-assign",
    "title": "112. Copying & Cloning with Object.assign",
    "slug": "object-assign",
    "language": "javascript",
    "category": "Module 9: Objects & Dictionaries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Copy properties from one or more source objects into a target object.",
    "concepts": [
      "Object.assign(target, ...sources)",
      "Cloning objects"
    ],
    "analogy": "Pouring ingredients from two bowls into a single mixing bowl.",
    "explanationMarkdown": "### Object.assign\n```javascript\nlet target = { a: 1 };\nlet source = { b: 2, c: 3 };\nObject.assign(target, source);\nconsole.log(target); // { a: 1, b: 2, c: 3 }\n```",
    "workedExample": {
      "title": "Worked Example: Cloning with Object.assign",
      "code": "let original = { name: \"App\" };\nlet clone = Object.assign({}, original, { version: \"2.0\" });\nconsole.log(clone.version);",
      "explanation": "\u2022 Merges original into an empty object with version 2.0.",
      "expectedOutput": "2.0"
    },
    "exerciseSteps": [
      "Create `let user = { id: 10 };`.",
      "Create `let updated = Object.assign({}, user, { verified: true });`.",
      "Print `updated.verified`."
    ],
    "initialCode": "// Step 1: Write your JavaScript code below\n// TODO: Write code below\n",
    "solutionCode": "let user = { id: 10 };\nlet updated = Object.assign({}, user, { verified: true });\nconsole.log(updated.verified);\n",
    "hints": [
      "Use `Object.assign({}, user, { verified: true })`"
    ],
    "testCases": [
      {
        "id": "js-112-tc-1",
        "description": "updated has verified true and id 10",
        "testFn": "updated.id === 10 && updated.verified === true"
      }
    ]
  }
];
