import { Lesson } from '../../../types';

export const module10Lessons: Lesson[] = [
  {
    "id": "js-113-class-declaration",
    "title": "113. Class Declaration & Creating Instances with 'new'",
    "slug": "class-declaration",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Define reusable blueprints for objects using the class syntax.",
    "concepts": [
      "class keyword",
      "new ClassName()",
      "Instantiating objects"
    ],
    "analogy": "An architectural blueprint for a house: the blueprint isn't a house itself, but you can build 50 identical houses from it.",
    "explanationMarkdown": "### Classes in JavaScript\nClasses are templates for creating objects:\n```javascript\nclass User {\n  // blueprint\n}\nconst alice = new User();\n```",
    "workedExample": {
      "title": "Worked Example: Basic Class",
      "code": "class Robot {}\nlet bot = new Robot();\nconsole.log(bot instanceof Robot);",
      "explanation": "\u2022 Creates bot instance from Robot blueprint.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Define `class Hero {}`.",
      "Instantiate `let player = new Hero();`.",
      "Print `player instanceof Hero`."
    ],
    "initialCode": "class Hero {}\nlet player = new Hero();\nconsole.log(player instanceof Hero);\n",
    "solutionCode": "class Hero {}\nlet player = new Hero();\nconsole.log(player instanceof Hero);\n",
    "hints": [
      "Write `class Hero {}` and `new Hero()`"
    ],
    "testCases": [
      {
        "id": "js-113-tc-1",
        "description": "player is an instance of Hero",
        "testFn": "player instanceof Hero"
      }
    ]
  },
  {
    "id": "js-114-constructor-method",
    "title": "114. Initializing State with the constructor() Method",
    "slug": "constructor-method",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Initialize instance properties upon creation with the special constructor function.",
    "concepts": [
      "constructor(args)",
      "this.property assignment"
    ],
    "analogy": "A factory assembly line stamping the serial number and color as each car is born.",
    "explanationMarkdown": "### The Constructor\nThe `constructor` runs automatically whenever `new` is called:\n```javascript\nclass Car {\n  constructor(brand, year) {\n    this.brand = brand;\n    this.year = year;\n  }\n}\nconst c = new Car(\"Honda\", 2022);\n```",
    "workedExample": {
      "title": "Worked Example: Person constructor",
      "code": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\nlet p = new Person(\"Maya\");\nconsole.log(p.name);",
      "explanation": "\u2022 Initializes p.name to Maya.",
      "expectedOutput": "Maya"
    },
    "exerciseSteps": [
      "Define `class Book { constructor(title) { this.title = title; } }`.",
      "Create `let myBook = new Book(\"Dune\");`.",
      "Print `myBook.title`."
    ],
    "initialCode": "class Book {\n  constructor(title) {\n    this.title = title;\n  }\n}\nlet myBook = new Book(\"Dune\");\nconsole.log(myBook.title);\n",
    "solutionCode": "class Book {\n  constructor(title) {\n    this.title = title;\n  }\n}\nlet myBook = new Book(\"Dune\");\nconsole.log(myBook.title);\n",
    "hints": [
      "Assign `this.title = title;` inside the constructor"
    ],
    "testCases": [
      {
        "id": "js-114-tc-1",
        "description": "myBook.title is Dune",
        "testFn": "myBook.title === 'Dune'"
      }
    ]
  },
  {
    "id": "js-115-instance-methods",
    "title": "115. Defining Instance Methods",
    "slug": "instance-methods",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Equip classes with behavior that operates on individual instance state.",
    "concepts": [
      "Methods in classes",
      "Invoking methods with .method()"
    ],
    "analogy": "Every smartphone instance can execute its internal `ring()` or `takePhoto()` method.",
    "explanationMarkdown": "### Class Methods\nMethods defined inside the class body are shared across instances:\n```javascript\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hello, I am ${this.name}`;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dog bark method",
      "code": "class Dog {\n  constructor(name) { this.name = name; }\n  bark() { return this.name + \" barks!\"; }\n}\nconsole.log(new Dog(\"Rex\").bark());",
      "explanation": "\u2022 Calls bark() on the Rex instance.",
      "expectedOutput": "Rex barks!"
    },
    "exerciseSteps": [
      "Define `class BankAccount { constructor(bal) { this.bal = bal; } deposit(amount) { this.bal += amount; return this.bal; } }`.",
      "Create `let acc = new BankAccount(100);`.",
      "Deposit 50 and print `acc.bal`."
    ],
    "initialCode": "class BankAccount {\n  constructor(bal) {\n    this.bal = bal;\n  }\n  deposit(amount) {\n    this.bal += amount;\n    return this.bal;\n  }\n}\nlet acc = new BankAccount(100);\nacc.deposit(50);\nconsole.log(acc.bal);\n",
    "solutionCode": "class BankAccount {\n  constructor(bal) {\n    this.bal = bal;\n  }\n  deposit(amount) {\n    this.bal += amount;\n    return this.bal;\n  }\n}\nlet acc = new BankAccount(100);\nacc.deposit(50);\nconsole.log(acc.bal);\n",
    "hints": [
      "acc.deposit(50) should increase bal to 150"
    ],
    "testCases": [
      {
        "id": "js-115-tc-1",
        "description": "acc.bal equals 150",
        "testFn": "acc.bal === 150"
      }
    ]
  },
  {
    "id": "js-116-class-inheritance-extends",
    "title": "116. Class Inheritance with 'extends'",
    "slug": "class-inheritance-extends",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create specialized child classes that inherit capabilities from a parent class.",
    "concepts": [
      "class Child extends Parent",
      "Inherited methods"
    ],
    "analogy": "A SportsCar inherits everything a standard Car has (wheels, engine), plus turbo boosters.",
    "explanationMarkdown": "### Inheritance with extends\n```javascript\nclass Animal {\n  eat() { return \"nom nom\"; }\n}\nclass Cat extends Animal {\n  meow() { return \"meow\"; }\n}\nconst kitty = new Cat();\nconsole.log(kitty.eat()); // Inherited!\n```",
    "workedExample": {
      "title": "Worked Example: Vehicle and Bike",
      "code": "class Vehicle { move() { return \"moving\"; } }\nclass Bike extends Vehicle {}\nlet b = new Bike();\nconsole.log(b.move());",
      "explanation": "\u2022 Bike inherits move() from Vehicle.",
      "expectedOutput": "moving"
    },
    "exerciseSteps": [
      "Define parent `class Device { powerOn() { return \"ON\"; } }`.",
      "Define child `class Phone extends Device {}`.",
      "Create `let p = new Phone();` and print `p.powerOn()`."
    ],
    "initialCode": "class Device {\n  powerOn() {\n    return \"ON\";\n  }\n}\nclass Phone extends Device {}\nlet p = new Phone();\nconsole.log(p.powerOn());\n",
    "solutionCode": "class Device {\n  powerOn() {\n    return \"ON\";\n  }\n}\nclass Phone extends Device {}\nlet p = new Phone();\nconsole.log(p.powerOn());\n",
    "hints": [
      "Use `class Phone extends Device`"
    ],
    "testCases": [
      {
        "id": "js-116-tc-1",
        "description": "Phone inherits powerOn returning ON",
        "testFn": "p.powerOn() === 'ON' && p instanceof Device"
      }
    ]
  },
  {
    "id": "js-117-super-constructor",
    "title": "117. Calling Parent Constructors with super()",
    "slug": "super-constructor",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Invoke the parent constructor from a subclass using super(...arguments).",
    "concepts": [
      "super() call",
      "Subclass constructor initialization"
    ],
    "analogy": "Before adding the police siren to a squad car, the factory first runs the standard car assembly line.",
    "explanationMarkdown": "### Using super()\nIn a subclass constructor, you **must** call `super()` before accessing `this`:\n```javascript\nclass Animal {\n  constructor(name) { this.name = name; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // passes name to Animal\n    this.breed = breed;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Employee and Manager",
      "code": "class Employee {\n  constructor(name) { this.name = name; }\n}\nclass Manager extends Employee {\n  constructor(name, dept) {\n    super(name);\n    this.dept = dept;\n  }\n}\nlet m = new Manager(\"Dan\", \"Eng\");\nconsole.log(m.dept);",
      "explanation": "\u2022 super(name) sets this.name, then this.dept is set.",
      "expectedOutput": "Eng"
    },
    "exerciseSteps": [
      "Define `class Shape { constructor(color) { this.color = color; } }`.",
      "Define `class Circle extends Shape { constructor(color, radius) { super(color); this.radius = radius; } }`.",
      "Create `let c = new Circle(\"red\", 10);` and print `c.color`."
    ],
    "initialCode": "class Shape {\n  constructor(color) {\n    this.color = color;\n  }\n}\nclass Circle extends Shape {\n  constructor(color, radius) {\n    super(color);\n    this.radius = radius;\n  }\n}\nlet c = new Circle(\"red\", 10);\nconsole.log(c.color);\n",
    "solutionCode": "class Shape {\n  constructor(color) {\n    this.color = color;\n  }\n}\nclass Circle extends Shape {\n  constructor(color, radius) {\n    super(color);\n    this.radius = radius;\n  }\n}\nlet c = new Circle(\"red\", 10);\nconsole.log(c.color);\n",
    "hints": [
      "Remember to call `super(color)` before `this.radius = radius`"
    ],
    "testCases": [
      {
        "id": "js-117-tc-1",
        "description": "c has color red and radius 10",
        "testFn": "c.color === 'red' && c.radius === 10"
      }
    ]
  },
  {
    "id": "js-118-getters-setters",
    "title": "118. Computed Properties with Getters & Setters",
    "slug": "getters-setters",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Intercept property reading and assignment with get and set keywords.",
    "concepts": [
      "get prop()",
      "set prop(val)",
      "Data encapsulation"
    ],
    "analogy": "A smart thermostat screen: you ask for temperature in Fahrenheit, but its internal sensor reads Celsius.",
    "explanationMarkdown": "### Getters & Setters\n```javascript\nclass Person {\n  constructor(first, last) {\n    this.first = first;\n    this.last = last;\n  }\n  get fullName() {\n    return `${this.first} ${this.last}`;\n  }\n}\nconst p = new Person(\"John\", \"Doe\");\nconsole.log(p.fullName); // No parentheses needed!\n```",
    "workedExample": {
      "title": "Worked Example: Temperature Converter",
      "code": "class Temp {\n  constructor(celsius) { this.celsius = celsius; }\n  get fahrenheit() { return this.celsius * 1.8 + 32; }\n}\nlet t = new Temp(25);\nconsole.log(t.fahrenheit);",
      "explanation": "\u2022 Accesses t.fahrenheit dynamically.",
      "expectedOutput": "77"
    },
    "exerciseSteps": [
      "Define `class Rectangle { constructor(w, h) { this.w = w; this.h = h; } get area() { return this.w * this.h; } }`.",
      "Create `let r = new Rectangle(5, 4);`.",
      "Print `r.area`."
    ],
    "initialCode": "class Rectangle {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() {\n    return this.w * this.h;\n  }\n}\nlet r = new Rectangle(5, 4);\nconsole.log(r.area);\n",
    "solutionCode": "class Rectangle {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() {\n    return this.w * this.h;\n  }\n}\nlet r = new Rectangle(5, 4);\nconsole.log(r.area);\n",
    "hints": [
      "Use `get area() { return this.w * this.h; }`"
    ],
    "testCases": [
      {
        "id": "js-118-tc-1",
        "description": "r.area returns 20",
        "testFn": "r.area === 20"
      }
    ]
  },
  {
    "id": "js-119-static-methods-properties",
    "title": "119. Class-Level Logic with 'static' Methods & Properties",
    "slug": "static-methods-properties",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Attach utility methods and constants directly to the class itself rather than instances.",
    "concepts": [
      "static keyword",
      "ClassName.method()"
    ],
    "analogy": "The Math object: you call Math.max() directly, you never write 'new Math()'.",
    "explanationMarkdown": "### Static Members\n```javascript\nclass MathUtil {\n  static PI = 3.14159;\n  static square(n) {\n    return n * n;\n  }\n}\nconsole.log(MathUtil.square(5)); // 25\n```",
    "workedExample": {
      "title": "Worked Example: Static Factory",
      "code": "class Point {\n  constructor(x, y) { this.x = x; this.y = y; }\n  static origin() { return new Point(0, 0); }\n}\nlet o = Point.origin();\nconsole.log(o.x);",
      "explanation": "\u2022 Point.origin() creates and returns a Point instance.",
      "expectedOutput": "0"
    },
    "exerciseSteps": [
      "Define `class Calculator { static add(a, b) { return a + b; } }`.",
      "Call `let res = Calculator.add(15, 25);`.",
      "Print `res`."
    ],
    "initialCode": "class Calculator {\n  static add(a, b) {\n    return a + b;\n  }\n}\nlet res = Calculator.add(15, 25);\nconsole.log(res);\n",
    "solutionCode": "class Calculator {\n  static add(a, b) {\n    return a + b;\n  }\n}\nlet res = Calculator.add(15, 25);\nconsole.log(res);\n",
    "hints": [
      "Call `Calculator.add(15, 25)` without new"
    ],
    "testCases": [
      {
        "id": "js-119-tc-1",
        "description": "Calculator.add(15, 25) returns 40",
        "testFn": "res === 40"
      }
    ]
  },
  {
    "id": "js-120-private-class-fields",
    "title": "120. True Privacy with Private Fields (#field)",
    "slug": "private-class-fields",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Hide internal state from outside tampering using the # hash symbol prefix.",
    "concepts": [
      "#privateField syntax",
      "Hard private encapsulation"
    ],
    "analogy": "A bank vault behind locked doors: clients can interact at the counter window, but cannot walk into the vault.",
    "explanationMarkdown": "### Private Fields\nProperties starting with `#` are strictly accessible only from within the class body:\n```javascript\nclass Wallet {\n  #balance = 0;\n  deposit(amount) { this.#balance += amount; }\n  getBalance() { return this.#balance; }\n}\nconst w = new Wallet();\nw.deposit(50);\nconsole.log(w.getBalance()); // 50\n// console.log(w.#balance); -> SyntaxError!\n```",
    "workedExample": {
      "title": "Worked Example: Encapsulated Counter",
      "code": "class Counter {\n  #count = 0;\n  inc() { return ++this.#count; }\n}\nlet c = new Counter();\nconsole.log(c.inc());",
      "explanation": "\u2022 #count is protected inside Counter.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Define `class Safe { #pin = 1234; check(val) { return this.#pin === val; } }`.",
      "Create `let s = new Safe();`.",
      "Print `s.check(1234)`."
    ],
    "initialCode": "class Safe {\n  #pin = 1234;\n  check(val) {\n    return this.#pin === val;\n  }\n}\nlet s = new Safe();\nconsole.log(s.check(1234));\n",
    "solutionCode": "class Safe {\n  #pin = 1234;\n  check(val) {\n    return this.#pin === val;\n  }\n}\nlet s = new Safe();\nconsole.log(s.check(1234));\n",
    "hints": [
      "Declare `#pin = 1234;` at class level"
    ],
    "testCases": [
      {
        "id": "js-120-tc-1",
        "description": "Safe check returns true for 1234 and false for 0000",
        "testFn": "s.check(1234) === true && s.check(0) === false"
      }
    ]
  },
  {
    "id": "js-121-instanceof-operator",
    "title": "121. Type Verification with the 'instanceof' Operator",
    "slug": "instanceof-operator",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Determine if an object was constructed from a specific class or prototype chain.",
    "concepts": [
      "instanceof operator",
      "Prototype chain verification"
    ],
    "analogy": "Verifying if a puppy is indeed an instance of Dog and an instance of Animal.",
    "explanationMarkdown": "### instanceof Operator\n```javascript\nclass Animal {}\nclass Dog extends Animal {}\nlet d = new Dog();\nconsole.log(d instanceof Dog);    // true\nconsole.log(d instanceof Animal); // true\nconsole.log(d instanceof Array);  // false\n```",
    "workedExample": {
      "title": "Worked Example: Array Check",
      "code": "let list = [1, 2, 3];\nconsole.log(list instanceof Array);",
      "explanation": "\u2022 list is an instance of Array.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Create `let date = new Date();`.",
      "Create `let isDate = date instanceof Date;`.",
      "Print `isDate`."
    ],
    "initialCode": "let date = new Date();\nlet isDate = date instanceof Date;\nconsole.log(isDate);\n",
    "solutionCode": "let date = new Date();\nlet isDate = date instanceof Date;\nconsole.log(isDate);\n",
    "hints": [
      "Use `date instanceof Date`"
    ],
    "testCases": [
      {
        "id": "js-121-tc-1",
        "description": "isDate is true",
        "testFn": "isDate === true"
      }
    ]
  },
  {
    "id": "js-122-method-overriding-polymorphism",
    "title": "122. Method Overriding & Polymorphism",
    "slug": "method-overriding-polymorphism",
    "language": "javascript",
    "category": "Module 10: OOP & ES6 Classes",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Customize inherited methods in child classes while maintaining a shared interface.",
    "concepts": [
      "Method overriding",
      "Polymorphism"
    ],
    "analogy": "Every instrument has a `play()` method, but a Guitar produces a strum while a Drum produces a beat.",
    "explanationMarkdown": "### Method Overriding\nA child class can redefine an inherited method:\n```javascript\nclass Bird {\n  speak() { return \"chirp\"; }\n}\nclass Duck extends Bird {\n  speak() { return \"quack\"; } // overrides chirp\n}\n```",
    "workedExample": {
      "title": "Worked Example: Overriding toString",
      "code": "class User {\n  constructor(name) { this.name = name; }\n  toString() { return `User(${this.name})`; }\n}\nconsole.log(new User(\"Leo\").toString());",
      "explanation": "\u2022 Overrides default Object.toString().",
      "expectedOutput": "User(Leo)"
    },
    "exerciseSteps": [
      "Define `class BaseNotification { send() { return \"Generic notification\"; } }`.",
      "Define `class EmailNotification extends BaseNotification { send() { return \"Sending email\"; } }`.",
      "Create `let n = new EmailNotification();` and print `n.send()`."
    ],
    "initialCode": "class BaseNotification {\n  send() {\n    return \"Generic notification\";\n  }\n}\nclass EmailNotification extends BaseNotification {\n  send() {\n    return \"Sending email\";\n  }\n}\nlet n = new EmailNotification();\nconsole.log(n.send());\n",
    "solutionCode": "class BaseNotification {\n  send() {\n    return \"Generic notification\";\n  }\n}\nclass EmailNotification extends BaseNotification {\n  send() {\n    return \"Sending email\";\n  }\n}\nlet n = new EmailNotification();\nconsole.log(n.send());\n",
    "hints": [
      "EmailNotification should override send() to return 'Sending email'"
    ],
    "testCases": [
      {
        "id": "js-122-tc-1",
        "description": "n.send() returns Sending email",
        "testFn": "n.send() === 'Sending email'"
      }
    ]
  }
];
