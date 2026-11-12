import { Track } from '../../types';

export const PYTHON_TRACK: Track = {
  id: 'python',
  title: 'Python: Beginner to Pro',
  slug: 'python',
  language: 'python',
  icon: 'Terminal',
  color: 'from-emerald-400 to-teal-500',
  tagline: 'The world\'s most popular language for beginners, data science, and AI — made easy with simple steps.',
  description: 'Learn Python from scratch with clear analogies, instant in-browser execution, and practical exercises from print statements to data processing.',
  lessons: [
    // LESSON 1: HELLO WORLD
    {
      id: 'py-1-hello-world',
      title: '1. Hello, Python! The print() Function',
      slug: 'hello-python',
      language: 'python',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 3,
      xp: 25,
      description: 'Write your first Python command! Learn how to display text on the screen using print().',
      concepts: ['The print() function', 'Strings in Python', 'Clean syntax'],
      analogy: 'Imagine speaking through a microphone. The print() function takes whatever text you give it and broadcasts it to the computer screen.',
      explanationMarkdown: `### Welcome to Python!
Python is famous for being clean, readable, and easy to learn. It reads almost like plain English.

### Displaying Messages
To display text in Python, use \`print()\`. Put your text inside quotation marks:

\`\`\`python
print("Welcome to Python!")
\`\`\`
Notice that in Python, you don't even need semicolons \`;\` at the end of lines!
`,
      workedExample: {
        title: 'Worked Example: Saying Hello',
        code: `# Print a friendly message to the screen
print("Hello, World!")`,
        explanation: '• print(...) displays text to the console screen.\n• "Hello, World!" is the message enclosed in quotes.\n• Lines starting with # are comments for humans to read.',
        expectedOutput: 'Hello, World!'
      },
      commonMistakes: [
        'Forgetting quotes around text: print(Hello) will cause an error because Python looks for a variable named Hello.',
        'Capitalizing Print: Python is case-sensitive, so it must be lowercase print.'
      ],
      exerciseSteps: [
        'Look at the editor on the right.',
        'Use `print()` to display `"Hello, World!"` to the screen.',
        'Click "Check Answer" to earn your XP!'
      ],
      initialCode: `# 👉 Step 1: Print "Hello, World!" to the screen below:
print("Hello, World!")
`,
      solutionCode: `print("Hello, World!")
`,
      hints: [
        'Type `print("Hello, World!")` exactly.',
        'Make sure to include quotation marks around the text.'
      ],
      testCases: [
        {
          id: 'py-1-tc-1',
          description: 'Prints "Hello, World!" to the screen',
          testFn: 'logs.some(l => l.args.join(" ").toLowerCase().includes("hello, world"))',
          expectedMessage: 'Make sure your code has print("Hello, World!")'
        }
      ]
    },

    // LESSON 2: VARIABLES
    {
      id: 'py-2-variables',
      title: '2. Storing Information in Variables',
      slug: 'variables',
      language: 'python',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Give names to pieces of data so you can save and reuse them throughout your program.',
      concepts: ['Variable assignment (=)', 'Strings and numbers', 'Printing variables'],
      analogy: 'A variable is like sticking a nametag on a box. You write "city" on the box and put "Paris" inside.',
      explanationMarkdown: `### What is a Variable in Python?
In Python, creating a variable is as simple as writing its name, an equals sign \`=\`, and its value:

\`\`\`python
name = "Alex"
age = 25
print(name)
\`\`\`
You don't need any special keywords like \`let\` or \`var\` — Python automatically understands what you want!
`,
      workedExample: {
        title: 'Worked Example: Player Profile',
        code: `player_name = "Mario"
coins = 100

print(player_name)
print(coins)`,
        explanation: '• player_name holds the text "Mario".\n• coins holds the number 100.\n• print() displays each variable.',
        expectedOutput: 'Mario\n100'
      },
      commonMistakes: [
        'Using spaces in variable names (use underscores instead, like user_name).',
        'Starting variable names with a number (e.g. 1name is invalid).'
      ],
      exerciseSteps: [
        'Create a variable named `favorite_food` and set it to `"Pizza"`.',
        'Print `favorite_food` using `print(favorite_food)`.'
      ],
      initialCode: `# 👉 Step 1: Create favorite_food = "Pizza"
favorite_food = "Pizza"

# 👉 Step 2: Print it to the screen
print(favorite_food)
`,
      solutionCode: `favorite_food = "Pizza"
print(favorite_food)
`,
      hints: [
        'Write `favorite_food = "Pizza"`',
        'Then write `print(favorite_food)`'
      ],
      testCases: [
        {
          id: 'py-2-tc-1',
          description: 'Prints "Pizza" to the screen',
          testFn: 'logs.some(l => l.args.join(" ").includes("Pizza"))',
          expectedMessage: 'Make sure favorite_food is printed to the screen'
        }
      ]
    },

    // LESSON 3: NUMBERS & MATH
    {
      id: 'py-3-numbers-math',
      title: '3. Numbers & Doing Calculations',
      slug: 'numbers-math',
      language: 'python',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Use Python to calculate numbers with addition, subtraction, multiplication, and division.',
      concepts: ['Integers and floats', 'Arithmetic operators (+, -, *, /)', 'Calculating totals'],
      analogy: 'Think of Python as a pocket calculator that can remember thousands of numbers at once.',
      explanationMarkdown: `### Math in Python
Python handles numbers naturally:
* \`+\` Addition
* \`-\` Subtraction
* \`*\` Multiplication
* \`/\` Division

\`\`\`python
price = 20
discount = 5
final_price = price - discount
print(final_price) # 15
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Area of a Room',
        code: `width = 5
length = 8
area = width * length

print("Area:")
print(area)`,
        explanation: '• width is 5 and length is 8.\n• area = width * length multiplies 5 × 8 = 40.\n• print(area) outputs 40.',
        expectedOutput: 'Area:\n40'
      },
      commonMistakes: [
        'Putting quotes around numbers: "10" is text, not a number! Always write numbers without quotes.'
      ],
      exerciseSteps: [
        'You have `hourly_rate = 25` and `hours_worked = 4`.',
        'Create a variable `total_pay = hourly_rate * hours_worked`.',
        'Print `total_pay`.'
      ],
      initialCode: `hourly_rate = 25
hours_worked = 4

# 👉 Calculate total_pay by multiplying hourly_rate * hours_worked:
total_pay = hourly_rate * hours_worked

# 👉 Print total_pay:
print(total_pay)
`,
      solutionCode: `hourly_rate = 25
hours_worked = 4
total_pay = hourly_rate * hours_worked
print(total_pay)
`,
      hints: [
        'Use `total_pay = hourly_rate * hours_worked`',
        'Then `print(total_pay)`'
      ],
      testCases: [
        {
          id: 'py-3-tc-1',
          description: 'Calculates total_pay (100) and prints it',
          testFn: 'logs.some(l => l.args.join(" ").includes("100"))',
          expectedMessage: 'total_pay should equal 25 * 4 = 100'
        }
      ]
    },

    // LESSON 4: IF / ELSE DECISIONS
    {
      id: 'py-4-if-else',
      title: '4. Making Decisions with if and else',
      slug: 'if-else',
      language: 'python',
      category: '2. Logic & Flow',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 6,
      xp: 35,
      description: 'Teach Python how to make choices using conditional statements and clean indentation.',
      concepts: ['if condition:', 'else: fallback', 'Indentation in Python'],
      analogy: 'A security guard at an amusement park: IF you are taller than 120cm, you can ride the rollercoaster. ELSE, you must wait.',
      explanationMarkdown: `### How Python Makes Choices
In Python, an \`if\` statement tests if something is true. Note the colon \`:\` and the indentation:

\`\`\`python
score = 80

if score >= 50:
    print("Passed!")
else:
    print("Try again!")
\`\`\`
Python uses **indentation** (spacing) to know which lines belong inside the \`if\` block!
`,
      workedExample: {
        title: 'Worked Example: Pass or Fail',
        code: `grade = 75

if grade >= 60:
    print("Good job! You passed.")
else:
    print("Please retake the exam.")`,
        explanation: '• grade is 75.\n• grade >= 60 is True, so the indented print line runs.\n• The else branch is skipped.',
        expectedOutput: 'Good job! You passed.'
      },
      commonMistakes: [
        'Forgetting the colon : at the end of the if or else line.',
        'Inconsistent indentation (always indent the lines inside the if block by 4 spaces or a tab).'
      ],
      exerciseSteps: [
        'Look at `temperature = 32`.',
        'Write an `if` check: if `temperature > 25`, print `"Hot"`.',
        'Otherwise in `else:`, print `"Cold"`.'
      ],
      initialCode: `temperature = 32

# 👉 Write your if / else check below:
if temperature > 25:
    print("Hot")
else:
    print("Cold")
`,
      solutionCode: `temperature = 32

if temperature > 25:
    print("Hot")
else:
    print("Cold")
`,
      hints: [
        'Write `if temperature > 25:`',
        'Indent the next line and write `print("Hot")`',
        'On a new line without indentation, write `else:` and then `print("Cold")`'
      ],
      testCases: [
        {
          id: 'py-4-tc-1',
          description: 'Prints "Hot" when temperature is 32',
          testFn: 'logs.some(l => l.args.join(" ").includes("Hot"))',
          expectedMessage: 'When temperature > 25, it should print "Hot"'
        }
      ]
    },

    // LESSON 5: LISTS
    {
      id: 'py-5-lists',
      title: '5. Lists: Storing Collections of Data',
      slug: 'lists',
      language: 'python',
      category: '3. Data Collections',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 6,
      xp: 40,
      description: 'Store multiple items together in an ordered Python list.',
      concepts: ['List syntax [item1, item2]', 'Accessing items by index [0]', 'len() function'],
      analogy: 'A grocery shopping list written on a notepad: milk, eggs, bread. You check off items one by one.',
      explanationMarkdown: `### What is a List?
A list in Python is an ordered sequence of items enclosed in square brackets \`[ ]\`:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# The first item is at index 0:
print(fruits[0]) # apple

# len() tells you how many items are in the list:
print(len(fruits)) # 3
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Favorite Games',
        code: `games = ["Zelda", "Mario", "Minecraft"]

print("Favorite:")
print(games[0])`,
        explanation: '• games stores 3 game titles.\n• games[0] retrieves the very first game: Zelda.',
        expectedOutput: 'Favorite:\nZelda'
      },
      commonMistakes: [
        'Trying to access index 3 when there are only 3 items (indexes are 0, 1, 2).'
      ],
      exerciseSteps: [
        'Create a list named `animals` containing `"cat"`, `"dog"`, and `"bird"`.',
        'Print the first animal (`animals[0]`).'
      ],
      initialCode: `# 👉 Step 1: Create the animals list:
animals = ["cat", "dog", "bird"]

# 👉 Step 2: Print the first animal:
print(animals[0])
`,
      solutionCode: `animals = ["cat", "dog", "bird"]
print(animals[0])
`,
      hints: [
        'Write `animals = ["cat", "dog", "bird"]`',
        'Print with `print(animals[0])`'
      ],
      testCases: [
        {
          id: 'py-5-tc-1',
          description: 'Prints "cat" to the screen',
          testFn: 'logs.some(l => l.args.join(" ").includes("cat"))',
          expectedMessage: 'Make sure animals[0] prints "cat"'
        }
      ]
    },

    // LESSON 6: FOR LOOPS
    {
      id: 'py-6-loops',
      title: '6. Repeating Work with for Loops',
      slug: 'loops',
      language: 'python',
      category: '3. Data Collections',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 6,
      xp: 40,
      description: 'Let Python do repetitive tasks for you automatically by looping through items.',
      concepts: ['for item in list:', 'Loop variable', 'Automating tasks'],
      analogy: 'Imagine a teacher handing out test papers to each student in row 1. You repeat the exact same handoff for every person.',
      explanationMarkdown: `### The Power of Loops
Instead of writing 10 print statements, a \`for\` loop runs your code once for each item in a collection:

\`\`\`python
friends = ["Maya", "Liam", "Noah"]

for friend in friends:
    print(friend)
\`\`\`
Python automatically assigns each item to the variable \`friend\` one by one!
`,
      workedExample: {
        title: 'Worked Example: Cheering on Players',
        code: `players = ["Aria", "Leo", "Mia"]

for p in players:
    print("Go " + p + "!")`,
        explanation: '• The loop runs 3 times, once for Aria, once for Leo, and once for Mia.\n• In each iteration, p holds the current player.',
        expectedOutput: 'Go Aria!\nGo Leo!\nGo Mia!'
      },
      commonMistakes: [
        'Forgetting the colon : after the for statement.',
        'Not indenting the lines inside the loop.'
      ],
      exerciseSteps: [
        'Look at the list `numbers = [1, 2, 3]`.',
        'Write a `for` loop that iterates over `numbers` and prints each number.'
      ],
      initialCode: `numbers = [1, 2, 3]

# 👉 Write a for loop to print each number:
for n in numbers:
    print(n)
`,
      solutionCode: `numbers = [1, 2, 3]

for n in numbers:
    print(n)
`,
      hints: [
        'Write `for n in numbers:`',
        'Indent the next line and write `print(n)`'
      ],
      testCases: [
        {
          id: 'py-6-tc-1',
          description: 'Prints numbers 1, 2, and 3',
          testFn: 'logs.some(l => l.args.join(" ").includes("1")) && logs.some(l => l.args.join(" ").includes("3"))',
          expectedMessage: 'Make sure your loop prints each number'
        }
      ]
    },

    // LESSON 7: FUNCTIONS WITH DEF
    {
      id: 'py-7-functions',
      title: '7. Functions: Creating Tools with def',
      slug: 'functions',
      language: 'python',
      category: '3. Data Collections',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 7,
      xp: 45,
      description: 'Package your code into reusable tools using the def keyword and return values.',
      concepts: ['Defining functions with def', 'Function arguments', 'return statement'],
      analogy: 'A coffee machine: you put in coffee beans and water (inputs), press the button, and it returns a hot cup of coffee (output).',
      explanationMarkdown: `### Defining Functions in Python
We define a function using the keyword \`def\`, followed by a name and parentheses:

\`\`\`python
def make_greeting(name):
    return "Hello, " + name + "!"

message = make_greeting("Sarah")
print(message) # Hello, Sarah!
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Calculating Tax',
        code: `def calculate_tax(amount):
    return amount * 0.10

tax = calculate_tax(50)
print(tax)`,
        explanation: '• calculate_tax takes amount (50).\n• Multiplies 50 × 0.10 and returns 5.\n• print(tax) outputs 5.',
        expectedOutput: '5'
      },
      commonMistakes: [
        'Forgetting to return the result (using print inside the function instead of return).'
      ],
      exerciseSteps: [
        'Define a function named `add_numbers(a, b)` that returns `a + b`.',
        'Test your function with `print(add_numbers(10, 20))`.'
      ],
      initialCode: `# 👉 Define your function add_numbers(a, b):
def add_numbers(a, b):
    return a + b

# Test it:
print(add_numbers(10, 20)) # Should print 30
`,
      solutionCode: `def add_numbers(a, b):
    return a + b

print(add_numbers(10, 20))
`,
      hints: [
        'Write `def add_numbers(a, b):`',
        'Indent and write `return a + b`'
      ],
      testCases: [
        {
          id: 'py-7-tc-1',
          description: 'add_numbers(10, 20) returns 30',
          testFn: 'typeof add_numbers === "function" && add_numbers(10, 20) === 30',
          expectedMessage: 'add_numbers(10, 20) should return 30'
        },
        {
          id: 'py-7-tc-2',
          description: 'add_numbers(5, 5) returns 10',
          testFn: 'typeof add_numbers === "function" && add_numbers(5, 5) === 10',
          expectedMessage: 'add_numbers(5, 5) should return 10'
        }
      ]
    },

    // LESSON 8: CAPSTONE PROJECT & CERTIFICATE
    {
      id: 'py-8-capstone-mastery',
      title: '8. Capstone Challenge: Data Analyzer',
      slug: 'capstone-analyzer',
      language: 'python',
      category: '4. Capstone Project',
      difficulty: 'Intermediate',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 10,
      xp: 60,
      description: 'Combine loops, math, and functions to compute the average score of a test group.',
      concepts: ['Combining Python tools', 'Accumulating sums in a loop', 'Calculating averages'],
      analogy: 'You are working as a data analyst at Netflix or Spotify, calculating average watch times across thousands of users.',
      explanationMarkdown: `### Congratulations! You are Ready for the Capstone!
You have mastered:
1. Printing messages
2. Storing data in variables
3. Arithmetic and numbers
4. Conditional decisions with if/else
5. Storing lists of data
6. Repeating tasks with for loops
7. Defining reusable functions with def

Now, let's write a practical function that finds the average of any list of numbers!
`,
      workedExample: {
        title: 'Worked Example: Totaling a List',
        code: `def sum_list(items):
    total = 0
    for num in items:
        total = total + num
    return total

print(sum_list([10, 20, 30])) # 60`,
        explanation: '• sum_list initializes total = 0.\n• Loops through each item and adds it to total.\n• Returns 60.',
        expectedOutput: '60'
      },
      commonMistakes: [
        'Dividing by zero (make sure len(numbers) > 0 before dividing).'
      ],
      exerciseSteps: [
        'Complete the function `calculate_average(scores)`.',
        'Add up all the numbers in `scores`, then divide by `len(scores)`.',
        'Return the average value.',
        'Pass all tests to finish Python and claim your Certificate!'
      ],
      initialCode: `def calculate_average(scores):
    total = 0
    # 👉 Step 1: Add up each score in the list:
    for s in scores:
        total = total + s
        
    # 👉 Step 2: Divide total by len(scores) and return:
    return total / len(scores)

# Test it:
print(calculate_average([80, 90, 100])) # Should print 90
`,
      solutionCode: `def calculate_average(scores):
    total = 0
    for s in scores:
        total = total + s
    return total / len(scores)

print(calculate_average([80, 90, 100]))
`,
      hints: [
        'Sum with `for s in scores: total = total + s`',
        'Return `total / len(scores)`'
      ],
      testCases: [
        {
          id: 'py-8-tc-1',
          description: 'calculate_average([80, 90, 100]) returns 90',
          testFn: 'typeof calculate_average === "function" && calculate_average([80, 90, 100]) === 90',
          expectedMessage: 'The average of [80, 90, 100] is 90'
        },
        {
          id: 'py-8-tc-2',
          description: 'calculate_average([10, 20]) returns 15',
          testFn: 'typeof calculate_average === "function" && calculate_average([10, 20]) === 15',
          expectedMessage: 'The average of [10, 20] is 15'
        }
      ]
    }
  ]
};
