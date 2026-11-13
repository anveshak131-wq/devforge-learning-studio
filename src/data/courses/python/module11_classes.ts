import { Lesson } from '../../../types';

export const pythonModule11Lessons: Lesson[] = [
  {
    "id": "py-99-class-declaration",
    "title": "99. Class Blueprints & Creating Instances",
    "slug": "class-declaration",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Declare object blueprints using the class keyword and instantiate them.",
    "concepts": [
      "class ClassName:",
      "obj = ClassName()"
    ],
    "analogy": "An automotive blueprint: you design the blueprint once, and manufacture 10,000 cars from it.",
    "explanationMarkdown": "### Classes in Python\n```python\nclass User:\n    pass\n\nalice = User()\n```",
    "workedExample": {
      "title": "Worked Example: Robot instance",
      "code": "class Robot:\n    pass\nbot = Robot()\nprint(type(bot))",
      "explanation": "• Creates Robot instance.",
      "expectedOutput": "Robot"
    },
    "exerciseSteps": [
      "Define `class Hero: pass`.",
      "Create `player = Hero()`.",
      "Print `type(player)`."
    ],
    "initialCode": "# Step 1: Define 'class Hero: pass'\nclass Hero:\n    # TODO: Implement class body\n    pass\n\n# Step 2: Create variable 'player' and set it to Hero()\n# TODO: Write code below\n\n# Step 3: Print 'type(player)'\n# TODO: Write code below\n",
    "solutionCode": "class Hero:\n    pass\nplayer = Hero()\nprint(type(player))\n",
    "hints": [
      "Concept: Declare object blueprints using the class keyword and instantiate them. Think of it like: An automotive blueprint: you design the blueprint once, and manufacture 10,000 cars from it.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Hero: pass`.\n2. Create `player = Hero()`.\n3. Print `type(player)`.\nKey Tip: Define `class Hero: pass`"
    ],
    "testCases": [
      {
        "id": "py-99-tc-1",
        "description": "player is an instance of Hero",
        "testFn": "player instanceof Hero"
      }
    ]
  },
  {
    "id": "py-100-init-constructor",
    "title": "100. The __init__ Constructor & 'self'",
    "slug": "init-constructor-self",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Initialize instance attributes upon creation using the __init__ method and self reference.",
    "concepts": [
      "def __init__(self, ...):",
      "self.attribute"
    ],
    "analogy": "A birth certificate: whenever a baby is born, their name and birth weight are recorded immediately.",
    "explanationMarkdown": "### The __init__ Method\n`__init__` runs automatically whenever a new object is created. `self` refers to the instance:\n```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n\nmy_dog = Dog(\"Buddy\")\nprint(my_dog.name) # \"Buddy\"\n```",
    "workedExample": {
      "title": "Worked Example: Book object",
      "code": "class Book:\n    def __init__(self, title):\n        self.title = title\nb = Book(\"1984\")\nprint(b.title)",
      "explanation": "• Initializes title to 1984.",
      "expectedOutput": "1984"
    },
    "exerciseSteps": [
      "Define `class Car: def __init__(self, brand): self.brand = brand`.",
      "Create `my_car = Car(\"Tesla\")`.",
      "Print `my_car.brand`."
    ],
    "initialCode": "# Step 1: Define 'class Car: def __init__(self, brand): self.brand = brand'\nclass Car:\n    def __init__(self, brand):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create variable 'my_car' and set it to Car(\"Tesla\")\n# TODO: Write code below\n\n# Step 3: Print 'my_car.brand'\n# TODO: Write code below\n",
    "solutionCode": "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nmy_car = Car(\"Tesla\")\nprint(my_car.brand)\n",
    "hints": [
      "Concept: Initialize instance attributes upon creation using the __init__ method and self reference. Think of it like: A birth certificate: whenever a baby is born, their name and birth weight are recorded immediately.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Car: def __init__(self, brand): self.brand = brand`.\n2. Create `my_car = Car(\"Tesla\")`.\n3. Print `my_car.brand`.\nKey Tip: Assign `self.brand = brand` inside `__init__`"
    ],
    "testCases": [
      {
        "id": "py-100-tc-1",
        "description": "my_car.brand is Tesla",
        "testFn": "my_car.brand === 'Tesla'"
      }
    ]
  },
  {
    "id": "py-101-instance-methods",
    "title": "101. Instance Methods & State Mutation",
    "slug": "instance-methods",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Give classes behavior by defining methods that access and mutate self attributes.",
    "concepts": [
      "def method(self):",
      "self.attribute mutation"
    ],
    "analogy": "A bank account: calling `account.deposit(50)` increases the account's internal balance.",
    "explanationMarkdown": "### Methods\nEvery method inside a class must take `self` as its first parameter:\n```python\nclass BankAccount:\n    def __init__(self, bal=0):\n        self.bal = bal\n    def deposit(self, amt):\n        self.bal += amt\n        return self.bal\n```",
    "workedExample": {
      "title": "Worked Example: Counter class",
      "code": "class Counter:\n    def __init__(self):\n        self.count = 0\n    def inc(self):\n        self.count += 1\n        return self.count\nc = Counter()\nprint(c.inc())",
      "explanation": "• Increments to 1.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Define `class Greeter: def __init__(self, name): self.name = name; def greet(self): return \"Hello \" + self.name`.",
      "Create `g = Greeter(\"Python\")`.",
      "Print `g.greet()`."
    ],
    "initialCode": "# Step 1: Define 'class Greeter: def __init__(self, name): self.name = name; def greet(self): return \"Hello \" + self.name'\nclass Greeter:\n    def __init__(self, name):\n        # TODO: Implement method body\n        pass\n\n    def greet(self):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create variable 'g' and set it to Greeter(\"Python\")\n# TODO: Write code below\n\n# Step 3: Print 'g.greet()'\n# TODO: Write code below\n",
    "solutionCode": "class Greeter:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        return \"Hello \" + self.name\ng = Greeter(\"Python\")\nprint(g.greet())\n",
    "hints": [
      "Concept: Give classes behavior by defining methods that access and mutate self attributes. Think of it like: A bank account: calling `account.deposit(50)` increases the account's internal balance.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Greeter: def __init__(self, name): self.name = name; def greet(self): return \"Hello \" + self.name`.\n2. Create `g = Greeter(\"Python\")`.\n3. Print `g.greet()`.\nKey Tip: Return `\"Hello \" + self.name`"
    ],
    "testCases": [
      {
        "id": "py-101-tc-1",
        "description": "g.greet() returns Hello Python",
        "testFn": "g.greet() === 'Hello Python'"
      }
    ]
  },
  {
    "id": "py-102-class-inheritance",
    "title": "102. Inheritance: Subclasses with class Child(Parent)",
    "slug": "class-inheritance",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create specialized child classes that inherit attributes and methods from a parent class.",
    "concepts": [
      "class Child(Parent):",
      "Code reuse through inheritance"
    ],
    "analogy": "A smartphone inherits all basic cell phone capabilities (making calls), plus adds touch screen apps.",
    "explanationMarkdown": "### Inheritance\nPass the parent class name in parentheses:\n```python\nclass Animal:\n    def speak(self):\n        return \"sound\"\n\nclass Dog(Animal):\n    def bark(self):\n        return \"woof\"\n```",
    "workedExample": {
      "title": "Worked Example: Inherited method",
      "code": "class Vehicle:\n    def move(self): return \"moving\"\nclass Car(Vehicle): pass\nc = Car()\nprint(c.move())",
      "explanation": "• Inherits move() from Vehicle.",
      "expectedOutput": "moving"
    },
    "exerciseSteps": [
      "Define `class Device: def power(self): return \"ON\"`.",
      "Define `class Laptop(Device): pass`.",
      "Instantiate `my_laptop = Laptop()` and print `my_laptop.power()`."
    ],
    "initialCode": "# Step 1: Define 'class Device: def power(self): return \"ON\"'\nclass Device:\n    def power(self):\n        # TODO: Implement method body\n        pass\n\nclass Laptop(Device):\n\n# Step 2: Define 'class Laptop(Device): pass'\n# TODO: Write code below\n\n# Step 3: Instantiate 'my_laptop = Laptop()' and print 'my_laptop.power()'\n# TODO: Write code below\n",
    "solutionCode": "class Device:\n    def power(self):\n        return \"ON\"\nclass Laptop(Device):\n    pass\nmy_laptop = Laptop()\nprint(my_laptop.power())\n",
    "hints": [
      "Concept: Create specialized child classes that inherit attributes and methods from a parent class. Think of it like: A smartphone inherits all basic cell phone capabilities (making calls), plus adds touch screen apps.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Device: def power(self): return \"ON\"`.\n2. Define `class Laptop(Device): pass`.\n3. Instantiate `my_laptop = Laptop()` and print `my_laptop.power()`.\nKey Tip: Define `class Laptop(Device):`"
    ],
    "testCases": [
      {
        "id": "py-102-tc-1",
        "description": "my_laptop.power() returns ON",
        "testFn": "my_laptop.power() === 'ON'"
      }
    ]
  },
  {
    "id": "py-103-super-init",
    "title": "103. Calling Parent Constructors with super().__init__()",
    "slug": "super-init",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Initialize parent class attributes from child classes using super().__init__(...).",
    "concepts": [
      "super().__init__(args)",
      "Parent initialization"
    ],
    "analogy": "Building a custom police cruiser: first build the standard chassis from the factory, then bolt on the siren.",
    "explanationMarkdown": "### Using super()\n```python\nclass Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Employee(Person):\n    def __init__(self, name, emp_id):\n        super().__init__(name)\n        self.emp_id = emp_id\n```",
    "workedExample": {
      "title": "Worked Example: Manager subclass",
      "code": "class User:\n    def __init__(self, name): self.name = name\nclass Admin(User):\n    def __init__(self, name, level):\n        super().__init__(name)\n        self.level = level\na = Admin(\"Dev\", 5)\nprint(a.name)",
      "explanation": "• Initializes name via super.",
      "expectedOutput": "Dev"
    },
    "exerciseSteps": [
      "Define `class Shape: def __init__(self, color): self.color = color`.",
      "Define `class Circle(Shape): def __init__(self, color, radius): super().__init__(color); self.radius = radius`.",
      "Create `c = Circle(\"blue\", 10)` and print `c.color`."
    ],
    "initialCode": "# Step 1: Define 'class Shape: def __init__(self, color): self.color = color'\nclass Shape:\n    def __init__(self, color):\n        # TODO: Implement method body\n        pass\n\nclass Circle(Shape):\n    def __init__(self, color, radius):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Define 'class Circle(Shape): def __init__(self, color, radius): super().__init__(color); self.radius = radius'\n# TODO: Write code below\n\n# Step 3: Create 'c = Circle(\"blue\", 10)' and print 'c.color'\n# TODO: Write code below\n",
    "solutionCode": "class Shape:\n    def __init__(self, color):\n        self.color = color\nclass Circle(Shape):\n    def __init__(self, color, radius):\n        super().__init__(color)\n        self.radius = radius\nc = Circle(\"blue\", 10)\nprint(c.color)\n",
    "hints": [
      "Concept: Initialize parent class attributes from child classes using super().__init__(...). Think of it like: Building a custom police cruiser: first build the standard chassis from the factory, then bolt on the siren.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Shape: def __init__(self, color): self.color = color`.\n2. Define `class Circle(Shape): def __init__(self, color, radius): super().__init__(color); self.radius = radius`.\n3. Create `c = Circle(\"blue\", 10)` and print `c.color`.\nKey Tip: Call `super().__init__(color)`"
    ],
    "testCases": [
      {
        "id": "py-103-tc-1",
        "description": "c has color blue and radius 10",
        "testFn": "c.color === 'blue' && c.radius === 10"
      }
    ]
  },
  {
    "id": "py-104-str-dunder-method",
    "title": "104. String Representations with __str__",
    "slug": "str-dunder-method",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Control how objects are formatted when printed by defining the __str__ dunder method.",
    "concepts": [
      "def __str__(self):",
      "Dunder methods",
      "Human-readable objects"
    ],
    "analogy": "Printing a formatted nametag instead of reading a computer memory address.",
    "explanationMarkdown": "### The __str__ Method\n```python\nclass User:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f\"User({self.name})\"\n```",
    "workedExample": {
      "title": "Worked Example: Product string",
      "code": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    def __str__(self):\n        return f\"{self.name}: ${self.price}\"\np = Product(\"Book\", 15)\nprint(str(p))",
      "explanation": "• Book: $15.",
      "expectedOutput": "Book: $15"
    },
    "exerciseSteps": [
      "Define `class Point: def __init__(self, x, y): self.x = x; self.y = y; def __str__(self): return f\"({self.x}, {self.y})\"`.",
      "Create `pt = Point(3, 4)`.",
      "Print `str(pt)`."
    ],
    "initialCode": "# Step 1: Define 'class Point: def __init__(self, x, y): self.x = x; self.y = y; def __str__(self): return f\"({self.x}, {self.y})\"'\nclass Point:\n    def __init__(self, x, y):\n        # TODO: Implement method body\n        pass\n\n    def __str__(self):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create variable 'pt' and set it to Point(3, 4)\n# TODO: Write code below\n\n# Step 3: Print 'str(pt)'\n# TODO: Write code below\n",
    "solutionCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __str__(self):\n        return f\"({self.x}, {self.y})\"\npt = Point(3, 4)\nprint(str(pt))\n",
    "hints": [
      "Concept: Control how objects are formatted when printed by defining the __str__ dunder method. Think of it like: Printing a formatted nametag instead of reading a computer memory address.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Point: def __init__(self, x, y): self.x = x; self.y = y; def __str__(self): return f\"({self.x}, {self.y})\"`.\n2. Create `pt = Point(3, 4)`.\n3. Print `str(pt)`.\nKey Tip: Return `f\"({self.x}, {self.y})\"` from `__str__`"
    ],
    "testCases": [
      {
        "id": "py-104-tc-1",
        "description": "pt string contains (3, 4)",
        "testFn": "pt.x === 3 && pt.y === 4"
      }
    ]
  },
  {
    "id": "py-105-encapsulation-conventions",
    "title": "105. Python Privacy Conventions (_single_underscore)",
    "slug": "encapsulation-conventions",
    "language": "python",
    "category": "Module 11: Classes & Object-Oriented Python",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Indicate internal private state using the Pythonic single-underscore prefix convention.",
    "concepts": [
      "_private_attr convention",
      "Encapsulation etiquette"
    ],
    "analogy": "An 'Employees Only' sign on a door: visitors can see the door, but know not to enter.",
    "explanationMarkdown": "### Privacy Conventions in Python\nBy PEP 8 convention, attributes prefixed with `_` are internal implementation details:\n```python\nclass Bank:\n    def __init__(self):\n        self._vault_balance = 1000000\n```",
    "workedExample": {
      "title": "Worked Example: Internal cache",
      "code": "class Service:\n    def __init__(self):\n        self._cache = {}\n    def set_cache(self, k, v):\n        self._cache[k] = v\ns = Service()\ns.set_cache(\"a\", 1)\nprint(len(s._cache))",
      "explanation": "• 1 item cached.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Define `class Wallet: def __init__(self, balance): self._balance = balance; def get_bal(self): return self._balance`.",
      "Create `w = Wallet(50)`.",
      "Print `w.get_bal()`."
    ],
    "initialCode": "# Step 1: Define 'class Wallet: def __init__(self, balance): self._balance = balance; def get_bal(self): return self._balance'\nclass Wallet:\n    def __init__(self, balance):\n        # TODO: Implement method body\n        pass\n\n    def get_bal(self):\n        # TODO: Implement method body\n        pass\n\n# Step 2: Create variable 'w' and set it to Wallet(50)\n# TODO: Write code below\n\n# Step 3: Print 'w.get_bal()'\n# TODO: Write code below\n",
    "solutionCode": "class Wallet:\n    def __init__(self, balance):\n        self._balance = balance\n    def get_bal(self):\n        return self._balance\nw = Wallet(50)\nprint(w.get_bal())\n",
    "hints": [
      "Concept: Indicate internal private state using the Pythonic single-underscore prefix convention. Think of it like: An 'Employees Only' sign on a door: visitors can see the door, but know not to enter.",
      "Syntax Blueprint: Define a class with `class ClassName:` and constructor `def __init__(self, ...): self.x = x`. Instantiate with `obj = ClassName()`.",
      "Step-by-Step Target:\n1. Define `class Wallet: def __init__(self, balance): self._balance = balance; def get_bal(self): return self._balance`.\n2. Create `w = Wallet(50)`.\n3. Print `w.get_bal()`.\nKey Tip: Assign `self._balance = balance`"
    ],
    "testCases": [
      {
        "id": "py-105-tc-1",
        "description": "w.get_bal() returns 50",
        "testFn": "w.get_bal() === 50"
      }
    ]
  }
];
