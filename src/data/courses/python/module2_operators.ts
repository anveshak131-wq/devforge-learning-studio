import { Lesson } from '../../../types';

export const pythonModule2Lessons: Lesson[] = [
  {
    "id": "py-11-addition-subtraction",
    "title": "11. Addition & Subtraction (+ and -)",
    "slug": "addition-subtraction",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Perform basic arithmetic addition and subtraction.",
    "concepts": [
      "+ operator",
      "- operator"
    ],
    "analogy": "Adding items to a shopping cart and removing coupon discounts.",
    "explanationMarkdown": "### Basic Math\n```python\nsubtotal = 30\ntax = 5\ntotal = subtotal + tax # 35\n```",
    "workedExample": {
      "title": "Worked Example: Subtraction",
      "code": "start = 100\nspent = 40\nleft = start - spent\nprint(left)",
      "explanation": "• 100 - 40 = 60.",
      "expectedOutput": "60"
    },
    "exerciseSteps": [
      "Create `savings = 250`.",
      "Create `deposit = 50`.",
      "Create `total = savings + deposit`.",
      "Print `total`."
    ],
    "initialCode": "# Step 1: Create variable 'savings' and set it to 250\n# TODO: Write code below\n\n# Step 2: Create variable 'deposit' and set it to 50\n# TODO: Write code below\n\n# Step 3: Create variable 'total' and set it to savings + deposit\n# TODO: Write code below\n\n# Step 4: Print 'total'\n# TODO: Write code below\n",
    "solutionCode": "savings = 250\ndeposit = 50\ntotal = savings + deposit\nprint(total)\n",
    "hints": [
      "Concept: Perform basic arithmetic addition and subtraction. Think of it like: Adding items to a shopping cart and removing coupon discounts.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `savings = 250`.\n2. Create `deposit = 50`.\n3. Create `total = savings + deposit`.\n4. Print `total`.\nKey Tip: Use `total = savings + deposit`"
    ],
    "testCases": [
      {
        "id": "py-11-tc-1",
        "description": "total is 300",
        "testFn": "total === 300"
      }
    ]
  },
  {
    "id": "py-12-multiplication-division",
    "title": "12. Multiplication & True Division (* and /)",
    "slug": "multiplication-division",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Multiply with * and divide with /. Notice that / always returns a float.",
    "concepts": [
      "* multiplication",
      "/ float division"
    ],
    "analogy": "Splitting a $10 pizza evenly between 4 roommates: $2.50 each.",
    "explanationMarkdown": "### Multiplication & Division\n```python\narea = 10 * 5 # 50\nshare = 10 / 4 # 2.5 (always float!)\n```",
    "workedExample": {
      "title": "Worked Example: Unit cost",
      "code": "total = 100\nqty = 4\nunit_price = total / qty\nprint(unit_price)",
      "explanation": "• Computes 25.0.",
      "expectedOutput": "25.0"
    },
    "exerciseSteps": [
      "Create `hours = 40`.",
      "Create `rate = 25`.",
      "Create `pay = hours * rate`.",
      "Print `pay`."
    ],
    "initialCode": "# Step 1: Create variable 'hours' and set it to 40\n# TODO: Write code below\n\n# Step 2: Create variable 'rate' and set it to 25\n# TODO: Write code below\n\n# Step 3: Create variable 'pay' and set it to hours * rate\n# TODO: Write code below\n\n# Step 4: Print 'pay'\n# TODO: Write code below\n",
    "solutionCode": "hours = 40\nrate = 25\npay = hours * rate\nprint(pay)\n",
    "hints": [
      "Concept: Multiply with * and divide with /. Notice that / always returns a float. Think of it like: Splitting a $10 pizza evenly between 4 roommates: $2.50 each.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `hours = 40`.\n2. Create `rate = 25`.\n3. Create `pay = hours * rate`.\n4. Print `pay`.\nKey Tip: Multiply `hours * rate`"
    ],
    "testCases": [
      {
        "id": "py-12-tc-1",
        "description": "pay is 1000",
        "testFn": "pay === 1000"
      }
    ]
  },
  {
    "id": "py-13-floor-division",
    "title": "13. Floor Division (//)",
    "slug": "floor-division",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Divide two numbers and discard any fractional remainder, rounding down to whole integer.",
    "concepts": [
      "// floor division",
      "Rounding down"
    ],
    "analogy": "Fitting 7 passengers into 3-passenger cars: you can fill 2 full cars (7 // 3 = 2).",
    "explanationMarkdown": "### Floor Division\n```python\nprint(7 / 2)  # 3.5\nprint(7 // 2) # 3\n```",
    "workedExample": {
      "title": "Worked Example: Box packaging",
      "code": "items = 25\nbox_capacity = 6\nfull_boxes = items // box_capacity\nprint(full_boxes)",
      "explanation": "• 25 // 6 = 4 full boxes.",
      "expectedOutput": "4"
    },
    "exerciseSteps": [
      "Create `total_minutes = 150`.",
      "Calculate whole hours: `hours = total_minutes // 60`.",
      "Print `hours`."
    ],
    "initialCode": "# Step 1: Create variable 'total_minutes' and set it to 150\n# TODO: Write code below\n\n# Step 2: Calculate whole hours: 'hours = total_minutes // 60'\n# TODO: Write code below\n\n# Step 3: Print 'hours'\n# TODO: Write code below\n",
    "solutionCode": "total_minutes = 150\nhours = total_minutes // 60\nprint(hours)\n",
    "hints": [
      "Concept: Divide two numbers and discard any fractional remainder, rounding down to whole integer. Think of it like: Fitting 7 passengers into 3-passenger cars: you can fill 2 full cars (7 // 3 = 2).",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `total_minutes = 150`.\n2. Calculate whole hours: `hours = total_minutes // 60`.\n3. Print `hours`.\nKey Tip: Use `//` operator: `150 // 60`"
    ],
    "testCases": [
      {
        "id": "py-13-tc-1",
        "description": "hours is 2",
        "testFn": "hours === 2"
      }
    ]
  },
  {
    "id": "py-14-modulo-remainder",
    "title": "14. Modulo Remainder (%)",
    "slug": "modulo-remainder",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find the leftover remainder of a division using the % modulo operator.",
    "concepts": [
      "% operator",
      "Even/Odd detection"
    ],
    "analogy": "Distributing 10 cookies equally among 3 kids: each gets 3, and 1 cookie is left over.",
    "explanationMarkdown": "### The % Operator\n```python\nremainder = 10 % 3 # 1\nis_even = (14 % 2 == 0) # True\n```",
    "workedExample": {
      "title": "Worked Example: Checking leftover",
      "code": "cookies = 11\nkids = 4\nleftover = cookies % kids\nprint(leftover)",
      "explanation": "• 11 % 4 = 3.",
      "expectedOutput": "3"
    },
    "exerciseSteps": [
      "Calculate remainder of 17 divided by 5: `rem = 17 % 5`.",
      "Print `rem`."
    ],
    "initialCode": "# Step 1: Calculate remainder of 17 divided by 5: 'rem = 17 % 5'\n# TODO: Write code below\n\n# Step 2: Print 'rem'\n# TODO: Write code below\n",
    "solutionCode": "rem = 17 % 5\nprint(rem)\n",
    "hints": [
      "Concept: Find the leftover remainder of a division using the % modulo operator. Think of it like: Distributing 10 cookies equally among 3 kids: each gets 3, and 1 cookie is left over.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Calculate remainder of 17 divided by 5: `rem = 17 % 5`.\n2. Print `rem`.\nKey Tip: Use `rem = 17 % 5`"
    ],
    "testCases": [
      {
        "id": "py-14-tc-1",
        "description": "rem is 2",
        "testFn": "rem === 2"
      }
    ]
  },
  {
    "id": "py-15-exponentiation",
    "title": "15. Exponentiation & Powers (**)",
    "slug": "exponentiation",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Raise a base number to an exponent power using double asterisks **.",
    "concepts": [
      "** operator",
      "Powers: base ** exp"
    ],
    "analogy": "Calculating square footage: 10 feet squared is 10 ** 2 = 100 sq ft.",
    "explanationMarkdown": "### Exponentiation\n```python\nsquared = 5 ** 2 # 25\ncubed = 2 ** 3 # 8\n```",
    "workedExample": {
      "title": "Worked Example: Two to the power of 8",
      "code": "byte_values = 2 ** 8\nprint(byte_values)",
      "explanation": "• 2^8 = 256.",
      "expectedOutput": "256"
    },
    "exerciseSteps": [
      "Calculate 3 to the 4th power: `result = 3 ** 4`.",
      "Print `result`."
    ],
    "initialCode": "# Step 1: Calculate 3 to the 4th power: 'result = 3 ** 4'\n# TODO: Write code below\n\n# Step 2: Print 'result'\n# TODO: Write code below\n",
    "solutionCode": "result = 3 ** 4\nprint(result)\n",
    "hints": [
      "Concept: Raise a base number to an exponent power using double asterisks **. Think of it like: Calculating square footage: 10 feet squared is 10 ** 2 = 100 sq ft.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Calculate 3 to the 4th power: `result = 3 ** 4`.\n2. Print `result`.\nKey Tip: Use `3 ** 4`"
    ],
    "testCases": [
      {
        "id": "py-15-tc-1",
        "description": "result is 81",
        "testFn": "result === 81"
      }
    ]
  },
  {
    "id": "py-16-augmented-assignment",
    "title": "16. In-Place Update Operators (+=, -=, *=)",
    "slug": "augmented-assignment",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Shortcut assignment operators to modify an existing variable in place.",
    "concepts": [
      "+=",
      "-=",
      "*="
    ],
    "analogy": "A scoreboard incrementing by 10 points after a basket.",
    "explanationMarkdown": "### Augmented Assignment\n```python\nscore = 10\nscore += 5 # Equivalent to score = score + 5\n```",
    "workedExample": {
      "title": "Worked Example: Incrementing count",
      "code": "count = 0\ncount += 1\nprint(count)",
      "explanation": "• count becomes 1.",
      "expectedOutput": "1"
    },
    "exerciseSteps": [
      "Create `coins = 50`.",
      "Add 25 using `coins += 25`.",
      "Print `coins`."
    ],
    "initialCode": "# Step 1: Create variable 'coins' and set it to 50\n# TODO: Write code below\n\n# Step 2: Add 25 using 'coins += 25'\n# TODO: Write code below\n\n# Step 3: Print 'coins'\n# TODO: Write code below\n",
    "solutionCode": "coins = 50\ncoins += 25\nprint(coins)\n",
    "hints": [
      "Concept: Shortcut assignment operators to modify an existing variable in place. Think of it like: A scoreboard incrementing by 10 points after a basket.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `coins = 50`.\n2. Add 25 using `coins += 25`.\n3. Print `coins`.\nKey Tip: Use `coins += 25`"
    ],
    "testCases": [
      {
        "id": "py-16-tc-1",
        "description": "coins is 75",
        "testFn": "coins === 75"
      }
    ]
  },
  {
    "id": "py-17-comparison-operators",
    "title": "17. Comparisons (==, !=, <, >)",
    "slug": "comparison-operators",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compare two values to produce a boolean True or False.",
    "concepts": [
      "==",
      "!=",
      "<",
      ">",
      "<=",
      ">="
    ],
    "analogy": "A bouncer checking driver's license ages: if age >= 21, enter True.",
    "explanationMarkdown": "### Comparisons\nNotice equality uses double equals `==`:\n```python\nprint(5 == 5) # True\nprint(10 > 20) # False\n```",
    "workedExample": {
      "title": "Worked Example: Passing score check",
      "code": "grade = 85\npassed = grade >= 60\nprint(passed)",
      "explanation": "• 85 >= 60 is True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `user_age = 18`.",
      "Create `is_adult = user_age >= 18`.",
      "Print `is_adult`."
    ],
    "initialCode": "# Step 1: Create variable 'user_age' and set it to 18\n# TODO: Write code below\n\n# Step 2: Create variable 'is_adult' and set it to user_age >= 18\n# TODO: Write code below\n\n# Step 3: Print 'is_adult'\n# TODO: Write code below\n",
    "solutionCode": "user_age = 18\nis_adult = user_age >= 18\nprint(is_adult)\n",
    "hints": [
      "Concept: Compare two values to produce a boolean True or False. Think of it like: A bouncer checking driver's license ages: if age >= 21, enter True.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `user_age = 18`.\n2. Create `is_adult = user_age >= 18`.\n3. Print `is_adult`.\nKey Tip: Use `>=` operator"
    ],
    "testCases": [
      {
        "id": "py-17-tc-1",
        "description": "is_adult is True",
        "testFn": "is_adult === true"
      }
    ]
  },
  {
    "id": "py-18-logical-operators",
    "title": "18. Logical Operators (and, or, not)",
    "slug": "logical-operators",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine boolean conditions using plain English keywords: and, or, and not.",
    "concepts": [
      "and (both true)",
      "or (at least one)",
      "not (flip)"
    ],
    "analogy": "Boarding a plane: you need your passport AND your boarding pass.",
    "explanationMarkdown": "### Logical Operators\nIn Python, write words instead of symbols like `&&` or `||`:\n```python\ncan_board = has_ticket and has_id\nfree_shipping = is_prime or total > 50\n```",
    "workedExample": {
      "title": "Worked Example: VIP access",
      "code": "has_key = True\nis_admin = True\ncan_enter = has_key and is_admin\nprint(can_enter)",
      "explanation": "• True and True = True.",
      "expectedOutput": "True"
    },
    "exerciseSteps": [
      "Create `has_wifi = True`.",
      "Create `has_battery = True`.",
      "Create `can_stream = has_wifi and has_battery`.",
      "Print `can_stream`."
    ],
    "initialCode": "# Step 1: Create variable 'has_wifi' and set it to True\n# TODO: Write code below\n\n# Step 2: Create variable 'has_battery' and set it to True\n# TODO: Write code below\n\n# Step 3: Create variable 'can_stream' and set it to has_wifi and has_battery\n# TODO: Write code below\n\n# Step 4: Print 'can_stream'\n# TODO: Write code below\n",
    "solutionCode": "has_wifi = True\nhas_battery = True\ncan_stream = has_wifi and has_battery\nprint(can_stream)\n",
    "hints": [
      "Concept: Combine boolean conditions using plain English keywords: and, or, and not. Think of it like: Boarding a plane: you need your passport AND your boarding pass.",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `has_wifi = True`.\n2. Create `has_battery = True`.\n3. Create `can_stream = has_wifi and has_battery`.\n4. Print `can_stream`.\nKey Tip: Combine with `and`"
    ],
    "testCases": [
      {
        "id": "py-18-tc-1",
        "description": "can_stream is True",
        "testFn": "can_stream === true"
      }
    ]
  },
  {
    "id": "py-19-round-function",
    "title": "19. Rounding Decimals with round()",
    "slug": "round-function",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Round floating point numbers to the nearest whole integer or decimal precision.",
    "concepts": [
      "round(val)",
      "round(val, ndigits)"
    ],
    "analogy": "Rounding a cash purchase of $9.99 to the nearest dollar ($10).",
    "explanationMarkdown": "### The round() Function\n```python\nprint(round(3.7))    # 4\nprint(round(3.14159, 2)) # 3.14\n```",
    "workedExample": {
      "title": "Worked Example: Currency rounding",
      "code": "price = 19.876\nrounded = round(price, 2)\nprint(rounded)",
      "explanation": "• Rounds to 19.88.",
      "expectedOutput": "19.88"
    },
    "exerciseSteps": [
      "Create `raw_val = 4.678`.",
      "Round to 1 decimal place: `rounded = round(raw_val, 1)`.",
      "Print `rounded`."
    ],
    "initialCode": "# Step 1: Create variable 'raw_val' and set it to 4.678\n# TODO: Write code below\n\n# Step 2: Round to 1 decimal place: 'rounded = round(raw_val, 1)'\n# TODO: Write code below\n\n# Step 3: Print 'rounded'\n# TODO: Write code below\n",
    "solutionCode": "raw_val = 4.678\nrounded = round(raw_val, 1)\nprint(rounded)\n",
    "hints": [
      "Concept: Round floating point numbers to the nearest whole integer or decimal precision. Think of it like: Rounding a cash purchase of $9.99 to the nearest dollar ($10).",
      "Syntax Blueprint: Assign values to variables with `variable_name = value`. Output or inspect results in the console using `print(variable_name)`.",
      "Step-by-Step Target:\n1. Create `raw_val = 4.678`.\n2. Round to 1 decimal place: `rounded = round(raw_val, 1)`.\n3. Print `rounded`.\nKey Tip: Pass 1 as second argument: `round(raw_val, 1)`"
    ],
    "testCases": [
      {
        "id": "py-19-tc-1",
        "description": "rounded is 4.7",
        "testFn": "rounded === 4.7"
      }
    ]
  },
  {
    "id": "py-20-abs-function",
    "title": "20. Absolute Distance with abs()",
    "slug": "abs-function",
    "language": "python",
    "category": "Module 2: Operators & Math",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Get the non-negative magnitude or absolute value of any number using abs().",
    "concepts": [
      "abs(x) function",
      "Distance from zero"
    ],
    "analogy": "Walking 5 miles North or 5 miles South: your odometer increases by 5 miles either way.",
    "explanationMarkdown": "### Absolute Value\n```python\nprint(abs(-25)) # 25\nprint(abs(10))  # 10\n```",
    "workedExample": {
      "title": "Worked Example: Temperature delta",
      "code": "diff = -15\nprint(abs(diff))",
      "explanation": "• Returns positive 15.",
      "expectedOutput": "15"
    },
    "exerciseSteps": [
      "Create `loss = -45`.",
      "Get absolute positive value: `positive_val = abs(loss)`.",
      "Print `positive_val`."
    ],
    "initialCode": "# Step 1: Create variable 'loss' and set it to -45\n# TODO: Write code below\n\n# Step 2: Get absolute positive value: 'positive_val = abs(loss)'\n# TODO: Write code below\n\n# Step 3: Print 'positive_val'\n# TODO: Write code below\n",
    "solutionCode": "loss = -45\npositive_val = abs(loss)\nprint(positive_val)\n",
    "hints": [
      "Concept: Get the non-negative magnitude or absolute value of any number using abs(). Think of it like: Walking 5 miles North or 5 miles South: your odometer increases by 5 miles either way.",
      "Syntax Blueprint: Python arithmetic operators: `+` (add), `-` (subtract), `*` (multiply), `/` (float divide), `//` (integer divide), `%` (modulus), `**` (exponentiation).",
      "Step-by-Step Target:\n1. Create `loss = -45`.\n2. Get absolute positive value: `positive_val = abs(loss)`.\n3. Print `positive_val`.\nKey Tip: Use `abs(loss)`"
    ],
    "testCases": [
      {
        "id": "py-20-tc-1",
        "description": "positive_val is 45",
        "testFn": "positive_val === 45"
      }
    ]
  }
];
