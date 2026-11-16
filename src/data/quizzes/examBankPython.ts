import { QuizQuestion } from '../../types/quiz';

/**
 * DevForge Python 150-Question Master Certification Exam Bank
 * Partitioned into 4 Core Domains:
 * - Domain 1: Syntax, Types & Operators (38 questions)
 * - Domain 2: Control Flow, Loops & Conditionals (38 questions)
 * - Domain 3: Functions, Scope, Lambdas & Recursion (37 questions)
 * - Domain 4: Data Structures, Comprehensions & Slicing (37 questions)
 */
export const PYTHON_EXAM_BANK: QuizQuestion[] = [
  {
    "id": "py-eb-1",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of the following code?",
    "codeSnippet": "x = 10\ny = \"20\"\nprint(x + int(y))",
    "codeLanguage": "python",
    "options": [
      "1020",
      "30",
      "TypeError",
      "200"
    ],
    "correctOptionIndex": 1,
    "explanation": "int(\"20\") converts the string to integer 20, so 10 + 20 evaluates to 30.",
    "skillCategory": "Types & Casting"
  },
  {
    "id": "py-eb-2",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Which of the following is an immutable data type in Python?",
    "codeLanguage": "python",
    "options": [
      "list",
      "dict",
      "set",
      "tuple"
    ],
    "correctOptionIndex": 3,
    "explanation": "Tuples, strings, integers, floats, and frozensets are immutable in Python.",
    "skillCategory": "Data Types"
  },
  {
    "id": "py-eb-3",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does this expression evaluate to?",
    "codeSnippet": "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))",
    "codeLanguage": "python",
    "options": [
      "3",
      "4",
      "TypeError",
      "None"
    ],
    "correctOptionIndex": 1,
    "explanation": "Variables a and b reference the exact same list object in memory, so mutating b also mutates a.",
    "skillCategory": "Memory & References"
  },
  {
    "id": "py-eb-4",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What will be the output of following code?",
    "codeSnippet": "print(bool(\"False\"), bool(\"\"), bool(0), bool([]))",
    "codeLanguage": "python",
    "options": [
      "False False False False",
      "True False False False",
      "True True False False",
      "False True True True"
    ],
    "correctOptionIndex": 1,
    "explanation": "Non-empty strings like \"False\" are truthy in Python. Empty strings, 0, and empty lists are falsy.",
    "skillCategory": "Boolean Evaluation"
  },
  {
    "id": "py-eb-5",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of the following integer identity comparison?",
    "codeSnippet": "a = 256\nb = 256\nprint(a is b)\n\nx = 257\ny = 257\n# Evaluated in interactive REPL / separate allocations\nprint(x == y)",
    "codeLanguage": "python",
    "options": [
      "True False",
      "True True",
      "False True",
      "False False"
    ],
    "correctOptionIndex": 1,
    "explanation": "Python caches small integers from -5 to 256, so a is b is True. == compares numerical equality which is always True.",
    "skillCategory": "Integer Caching"
  },
  {
    "id": "py-eb-6",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the result of floor division and float division in Python 3?",
    "codeSnippet": "print(7 // 2, 7 / 2)",
    "codeLanguage": "python",
    "options": [
      "3.5 3",
      "3 3.5",
      "3.0 3.5",
      "3 3.0"
    ],
    "correctOptionIndex": 1,
    "explanation": "// is integer floor division yielding 3, while / is true division yielding float 3.5.",
    "skillCategory": "Operators"
  },
  {
    "id": "py-eb-7",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does this modulo operation with a negative number return in Python?",
    "codeSnippet": "print(-7 % 3)",
    "codeLanguage": "python",
    "options": [
      "-1",
      "2",
      "-2",
      "1"
    ],
    "correctOptionIndex": 1,
    "explanation": "In Python, the modulo operator always takes the sign of the divisor (denominator). -7 = (-3 * 3) + 2, so the remainder is 2.",
    "skillCategory": "Arithmetic Operators"
  },
  {
    "id": "py-eb-8",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the value of this exponentiation expression?",
    "codeSnippet": "print(2 ** 3 ** 2)",
    "codeLanguage": "python",
    "options": [
      "64",
      "512",
      "256",
      "128"
    ],
    "correctOptionIndex": 1,
    "explanation": "The ** operator is right-associative in Python. It evaluates as 2 ** (3 ** 2) = 2 ** 9 = 512.",
    "skillCategory": "Operator Precedence"
  },
  {
    "id": "py-eb-9",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of the following string operation?",
    "codeSnippet": "s = \"python\"\nprint(s[1:4])",
    "codeLanguage": "python",
    "options": [
      "pyt",
      "yth",
      "ytho",
      "pyth"
    ],
    "correctOptionIndex": 1,
    "explanation": "Slice [1:4] extracts characters from index 1 up to (but not including) index 4, which is \"yth\".",
    "skillCategory": "String Slicing"
  },
  {
    "id": "py-eb-10",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of string multiplication in Python?",
    "codeSnippet": "s = \"ha\" * 3\nprint(len(s))",
    "codeLanguage": "python",
    "options": [
      "6",
      "2",
      "3",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Multiplying a string by an integer repeats it: \"ha\" * 3 results in \"hahaha\", which has length 6.",
    "skillCategory": "Strings"
  },
  {
    "id": "py-eb-11",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does short-circuit boolean evaluation return?",
    "codeSnippet": "x = 0 or \"apple\" and [] or \"banana\"\nprint(x)",
    "codeLanguage": "python",
    "options": [
      "apple",
      "[]",
      "banana",
      "0"
    ],
    "correctOptionIndex": 2,
    "explanation": "and has higher precedence than or. \"apple\" and [] evaluates to []. Then 0 or [] or \"banana\" evaluates left to right: 0 is falsy, [] is falsy, \"banana\" is truthy, so \"banana\" is returned.",
    "skillCategory": "Short-Circuit Logic"
  },
  {
    "id": "py-eb-12",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does chained comparison evaluate to?",
    "codeSnippet": "x = 10\nprint(5 < x < 20 < 15)",
    "codeLanguage": "python",
    "options": [
      "True",
      "False",
      "TypeError",
      "10"
    ],
    "correctOptionIndex": 1,
    "explanation": "Chained comparison evaluates as (5 < 10) and (10 < 20) and (20 < 15). Since 20 < 15 is False, the whole expression is False.",
    "skillCategory": "Comparison Operators"
  },
  {
    "id": "py-eb-13",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Which built-in function returns the memory address identity of an object in CPython?",
    "codeLanguage": "python",
    "options": [
      "ref()",
      "id()",
      "memory()",
      "hash()"
    ],
    "correctOptionIndex": 1,
    "explanation": "id() returns the unique integer identity of an object (its memory address in CPython).",
    "skillCategory": "Built-in Functions"
  },
  {
    "id": "py-eb-14",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of string strip() with custom characters?",
    "codeSnippet": "text = \"...hello world...\"\nprint(text.strip(\".\"))",
    "codeLanguage": "python",
    "options": [
      "hello world",
      "...hello world",
      "hello world...",
      "...hello world..."
    ],
    "correctOptionIndex": 0,
    "explanation": "strip(\".\") removes all leading and trailing occurrences of \".\" from both ends.",
    "skillCategory": "String Methods"
  },
  {
    "id": "py-eb-15",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of the walrus operator := in Python 3.8+?",
    "codeSnippet": "if (n := len([1, 2, 3, 4])) > 3:\n    print(f\"Count is {n}\")",
    "codeLanguage": "python",
    "options": [
      "Count is 4",
      "Count is 3",
      "SyntaxError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "The walrus operator := assigns len([1,2,3,4]) (which is 4) to n and evaluates the condition 4 > 3 as True.",
    "skillCategory": "Walrus Operator"
  },
  {
    "id": "py-eb-16",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of type() for a floating point number?",
    "codeSnippet": "x = 5.0\nprint(type(x).__name__)",
    "codeLanguage": "python",
    "options": [
      "int",
      "float",
      "number",
      "decimal"
    ],
    "correctOptionIndex": 1,
    "explanation": "5.0 has a decimal point, so its type is float.",
    "skillCategory": "Data Types"
  },
  {
    "id": "py-eb-17",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "spot_the_bug",
    "prompt": "What is wrong with this code?",
    "codeSnippet": "greeting = \"Hello\"\ngreeting[0] = \"h\"",
    "codeLanguage": "python",
    "options": [
      "Strings are immutable; item assignment raises TypeError",
      "greeting is a reserved keyword",
      "Indices start at 1 in Python",
      "Must use single quotes"
    ],
    "correctOptionIndex": 0,
    "explanation": "Strings in Python cannot be modified in place. Attempting to assign to an index raises a TypeError.",
    "skillCategory": "Immutability"
  },
  {
    "id": "py-eb-18",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of this formatted f-string?",
    "codeSnippet": "pi = 3.14159\nprint(f\"{pi:.2f}\")",
    "codeLanguage": "python",
    "options": [
      "3.14",
      "3.141",
      "3.1",
      "3.142"
    ],
    "correctOptionIndex": 0,
    "explanation": ":.2f formats the floating point number rounded to 2 decimal places: 3.14.",
    "skillCategory": "F-Strings"
  },
  {
    "id": "py-eb-19",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of using the in keyword on a string?",
    "codeSnippet": "s = \"DevForge Studio\"\nprint(\"forge\" in s, \"Forge\" in s)",
    "codeLanguage": "python",
    "options": [
      "True True",
      "False True",
      "True False",
      "False False"
    ],
    "correctOptionIndex": 1,
    "explanation": "The in operator is strictly case-sensitive for strings: \"forge\" is not found, but \"Forge\" is.",
    "skillCategory": "String Membership"
  },
  {
    "id": "py-eb-20",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of bitwise XOR ^ and AND &?",
    "codeSnippet": "a = 5  # 0101 in binary\nb = 3  # 0011 in binary\nprint(a ^ b, a & b)",
    "codeLanguage": "python",
    "options": [
      "6 1",
      "7 1",
      "6 2",
      "2 1"
    ],
    "correctOptionIndex": 0,
    "explanation": "5 ^ 3 = 0110 in binary (decimal 6). 5 & 3 = 0001 in binary (decimal 1).",
    "skillCategory": "Bitwise Operators"
  },
  {
    "id": "py-eb-21",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does str.split() return when called with no arguments?",
    "codeSnippet": "s = \"apple   banana  cherry\"\nprint(s.split())",
    "codeLanguage": "python",
    "options": [
      "['apple', '', 'banana', '', 'cherry']",
      "['apple', 'banana', 'cherry']",
      "('apple', 'banana', 'cherry')",
      "TypeError"
    ],
    "correctOptionIndex": 1,
    "explanation": "With no arguments, str.split() splits on consecutive whitespace characters and discards empty strings.",
    "skillCategory": "String Methods"
  },
  {
    "id": "py-eb-22",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of joining elements with str.join()?",
    "codeSnippet": "words = [\"code\", \"learn\", \"ship\"]\nprint(\"-\".join(words))",
    "codeLanguage": "python",
    "options": [
      "code-learn-ship",
      "-code-learn-ship-",
      "code,learn,ship",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "\"-\".join(words) concatenates elements of words with \"-\" as the delimiter.",
    "skillCategory": "String Methods"
  },
  {
    "id": "py-eb-23",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What will be the output of float conversion with scientific notation?",
    "codeSnippet": "x = float(\"1e3\")\nprint(int(x))",
    "codeLanguage": "python",
    "options": [
      "1000",
      "100",
      "10",
      "ValueError"
    ],
    "correctOptionIndex": 0,
    "explanation": "\"1e3\" is scientific notation for 1 * 10^3 = 1000.0, and int(1000.0) is 1000.",
    "skillCategory": "Type Conversion"
  },
  {
    "id": "py-eb-24",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Which of the following is NOT a valid identifier in Python?",
    "codeLanguage": "python",
    "options": [
      "_my_var",
      "var_2",
      "2nd_var",
      "MyVar"
    ],
    "correctOptionIndex": 2,
    "explanation": "Variable names in Python cannot start with a numeral.",
    "skillCategory": "Syntax Rules"
  },
  {
    "id": "py-eb-25",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does the following ternary operator return?",
    "codeSnippet": "x = 15\nresult = \"High\" if x > 20 else \"Medium\" if x > 10 else \"Low\"\nprint(result)",
    "codeLanguage": "python",
    "options": [
      "High",
      "Medium",
      "Low",
      "None"
    ],
    "correctOptionIndex": 1,
    "explanation": "Since x = 15 is not > 20, it evaluates the second ternary condition x > 10, which is True, returning \"Medium\".",
    "skillCategory": "Ternary Operator"
  },
  {
    "id": "py-eb-26",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of applying the not operator on empty structures?",
    "codeSnippet": "print(not [], not {}, not 0, not \"hi\")",
    "codeLanguage": "python",
    "options": [
      "True True True False",
      "True True True True",
      "False False False True",
      "False False False False"
    ],
    "correctOptionIndex": 0,
    "explanation": "[], {}, and 0 are falsy, so not on them is True. \"hi\" is truthy, so not \"hi\" is False.",
    "skillCategory": "Boolean Operators"
  },
  {
    "id": "py-eb-27",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does isinstance() return for subclass/instance checking?",
    "codeSnippet": "x = True\nprint(isinstance(x, int))",
    "codeLanguage": "python",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "In Python, bool is actually a direct subclass of int (True is 1, False is 0), so isinstance(True, int) is True.",
    "skillCategory": "Type System"
  },
  {
    "id": "py-eb-28",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of using negative step in slicing?",
    "codeSnippet": "word = \"drawer\"\nprint(word[::-1])",
    "codeLanguage": "python",
    "options": [
      "reward",
      "drawer",
      "redraw",
      "ward"
    ],
    "correctOptionIndex": 0,
    "explanation": "Step -1 reverses the sequence completely: \"drawer\" reversed is \"reward\".",
    "skillCategory": "Slicing"
  },
  {
    "id": "py-eb-29",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of unpacking with the asterisk * operator?",
    "codeSnippet": "first, *middle, last = [10, 20, 30, 40, 50]\nprint(middle)",
    "codeLanguage": "python",
    "options": [
      "[20, 30, 40]",
      "(20, 30, 40)",
      "[20, 30]",
      "30"
    ],
    "correctOptionIndex": 0,
    "explanation": "Extended iterable unpacking collects all middle elements into a list: [20, 30, 40].",
    "skillCategory": "Unpacking"
  },
  {
    "id": "py-eb-30",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the result of round() on ties in Python 3 (banker rounding)?",
    "codeSnippet": "print(round(2.5), round(3.5))",
    "codeLanguage": "python",
    "options": [
      "2 4",
      "3 4",
      "2 3",
      "3 3"
    ],
    "correctOptionIndex": 0,
    "explanation": "Python 3 uses round-to-even (banker rounding): 2.5 rounds to the nearest even integer (2), and 3.5 rounds to (4).",
    "skillCategory": "Math Functions"
  },
  {
    "id": "py-eb-31",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does raw string r\"...\" do with backslashes?",
    "codeSnippet": "s1 = \"\\n\"\ns2 = r\"\\n\"\nprint(len(s1), len(s2))",
    "codeLanguage": "python",
    "options": [
      "1 2",
      "2 2",
      "1 1",
      "2 1"
    ],
    "correctOptionIndex": 0,
    "explanation": "\"\\n\" is an escape sequence representing 1 newline character, while r\"\\n\" is a raw string containing 2 literal characters (\"\\\" and \"n\").",
    "skillCategory": "Raw Strings"
  },
  {
    "id": "py-eb-32",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of del on a variable?",
    "codeSnippet": "a = 100\ndel a\nprint(\"a\" in locals())",
    "codeLanguage": "python",
    "options": [
      "False",
      "True",
      "NameError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "del a deletes the variable name from local namespace, so \"a\" in locals() is False.",
    "skillCategory": "Variables & Scope"
  },
  {
    "id": "py-eb-33",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of bitwise left shift << and right shift >>?",
    "codeSnippet": "x = 8\nprint(x << 1, x >> 2)",
    "codeLanguage": "python",
    "options": [
      "16 2",
      "16 4",
      "8 2",
      "4 16"
    ],
    "correctOptionIndex": 0,
    "explanation": "8 << 1 multiplies by 2^1 = 16. 8 >> 2 integer divides by 2^2 = 2.",
    "skillCategory": "Bitwise Operators"
  },
  {
    "id": "py-eb-34",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the abs() function return for complex numbers?",
    "codeSnippet": "z = 3 + 4j\nprint(abs(z))",
    "codeLanguage": "python",
    "options": [
      "5.0",
      "7.0",
      "5",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "abs() on a complex number returns its magnitude: sqrt(3^2 + 4^2) = sqrt(25) = 5.0.",
    "skillCategory": "Complex Numbers"
  },
  {
    "id": "py-eb-35",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when you add two lists together?",
    "codeSnippet": "a = [1, 2]\nb = [3, 4]\nprint(a + b)",
    "codeLanguage": "python",
    "options": [
      "[1, 2, 3, 4]",
      "[4, 6]",
      "[[1, 2], [3, 4]]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "The + operator on lists performs concatenation, producing a new list containing all items.",
    "skillCategory": "List Operations"
  },
  {
    "id": "py-eb-36",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of chr() and ord()?",
    "codeSnippet": "c = chr(65)\nprint(c, ord(c))",
    "codeLanguage": "python",
    "options": [
      "A 65",
      "a 65",
      "B 66",
      "65 A"
    ],
    "correctOptionIndex": 0,
    "explanation": "chr(65) returns ASCII character \"A\", and ord(\"A\") returns its integer codepoint 65.",
    "skillCategory": "Character Functions"
  },
  {
    "id": "py-eb-37",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of boolean arithmetic in Python?",
    "codeSnippet": "print(True + True * False)",
    "codeLanguage": "python",
    "options": [
      "1",
      "2",
      "0",
      "True"
    ],
    "correctOptionIndex": 0,
    "explanation": "* has higher precedence than +: True * False is 1 * 0 = 0. Then True + 0 is 1 + 0 = 1.",
    "skillCategory": "Boolean Arithmetic"
  },
  {
    "id": "py-eb-38",
    "trackId": "python",
    "domain": "Syntax, Types & Operators",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Which of the following is a reserved keyword in Python and cannot be used as a variable name?",
    "codeLanguage": "python",
    "options": [
      "pass",
      "eval",
      "print",
      "type"
    ],
    "correctOptionIndex": 0,
    "explanation": "pass is a Python keyword. eval, print, and type are built-in functions, not reserved keywords.",
    "skillCategory": "Keywords"
  },
  {
    "id": "py-eb-39",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What will this loop output?",
    "codeSnippet": "for i in range(2, 8, 2):\n    print(i, end=\" \")",
    "codeLanguage": "python",
    "options": [
      "2 4 6 ",
      "2 4 6 8 ",
      "2 3 4 5 6 7 ",
      "4 6 8 "
    ],
    "correctOptionIndex": 0,
    "explanation": "range(start=2, stop=8, step=2) generates numbers 2, 4, 6.",
    "skillCategory": "Loops & Range"
  },
  {
    "id": "py-eb-40",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the for...else statement do in Python?",
    "codeSnippet": "for n in range(3):\n    if n == 5:\n        break\nelse:\n    print(\"Success\")",
    "codeLanguage": "python",
    "options": [
      "Success",
      "Nothing printed",
      "Error",
      "5"
    ],
    "correctOptionIndex": 0,
    "explanation": "The else block of a loop executes if and only if the loop terminates normally without hitting a break statement.",
    "skillCategory": "For Else"
  },
  {
    "id": "py-eb-41",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when break is encountered in a nested loop?",
    "codeSnippet": "for i in range(2):\n    for j in range(2):\n        if j == 1:\n            break\n        print(f\"{i}{j}\", end=\" \")",
    "codeLanguage": "python",
    "options": [
      "00 10 ",
      "00 01 10 11 ",
      "00 ",
      "10 "
    ],
    "correctOptionIndex": 0,
    "explanation": "break only terminates the innermost loop enclosing it. It prints 00, breaks inner loop, then on i=1 prints 10.",
    "skillCategory": "Nested Loops"
  },
  {
    "id": "py-eb-42",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the final value of the loop variable after the loop terminates?",
    "codeSnippet": "for i in range(5):\n    pass\nprint(i)",
    "codeLanguage": "python",
    "options": [
      "4",
      "5",
      "NameError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "In Python, loop variables in for loops leak into the enclosing scope and retain their final value (4).",
    "skillCategory": "Scope & Loops"
  },
  {
    "id": "py-eb-43",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does continue do in a loop?",
    "codeSnippet": "total = 0\nfor x in [1, 2, 3, 4]:\n    if x % 2 == 0:\n        continue\n    total += x\nprint(total)",
    "codeLanguage": "python",
    "options": [
      "4",
      "6",
      "10",
      "0"
    ],
    "correctOptionIndex": 0,
    "explanation": "continue skips the rest of the current iteration for even numbers 2 and 4, adding only 1 + 3 = 4.",
    "skillCategory": "Continue Statement"
  },
  {
    "id": "py-eb-44",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of this while loop with an accumulator?",
    "codeSnippet": "count = 0\nwhile count < 3:\n    count += 1\nelse:\n    count += 10\nprint(count)",
    "codeLanguage": "python",
    "options": [
      "13",
      "3",
      "4",
      "14"
    ],
    "correctOptionIndex": 0,
    "explanation": "The while loop runs for count = 0, 1, 2 until count becomes 3. Since no break occurred, else runs: 3 + 10 = 13.",
    "skillCategory": "While Else"
  },
  {
    "id": "py-eb-45",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of iterating over a dictionary directly in a for loop?",
    "codeSnippet": "d = {\"a\": 1, \"b\": 2}\nfor item in d:\n    print(item, end=\" \")",
    "codeLanguage": "python",
    "options": [
      "a b ",
      "1 2 ",
      "('a', 1) ('b', 2) ",
      "ab "
    ],
    "correctOptionIndex": 0,
    "explanation": "Iterating directly over a dictionary yields its keys (\"a\" and \"b\").",
    "skillCategory": "Dictionary Iteration"
  },
  {
    "id": "py-eb-46",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does enumerate() provide in a loop?",
    "codeSnippet": "fruits = [\"apple\", \"banana\"]\nfor idx, val in enumerate(fruits, start=1):\n    print(f\"{idx}:{val}\", end=\" \")",
    "codeLanguage": "python",
    "options": [
      "1:apple 2:banana ",
      "0:apple 1:banana ",
      "apple:1 banana:2 ",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "enumerate(iterable, start=1) yields pairs of (index, value) starting from index 1.",
    "skillCategory": "Enumerate"
  },
  {
    "id": "py-eb-47",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does zip() do when lists have different lengths?",
    "codeSnippet": "nums = [1, 2, 3]\nchars = [\"a\", \"b\"]\nprint(list(zip(nums, chars)))",
    "codeLanguage": "python",
    "options": [
      "[(1, \"a\"), (2, \"b\")]",
      "[(1, \"a\"), (2, \"b\"), (3, None)]",
      "[(1, \"a\"), (2, \"b\"), (3, \"\")]",
      "ValueError"
    ],
    "correctOptionIndex": 0,
    "explanation": "zip() stops as soon as the shortest input iterable is exhausted.",
    "skillCategory": "Zip Function"
  },
  {
    "id": "py-eb-48",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when modifying a list while iterating over it?",
    "codeSnippet": "nums = [1, 2, 3, 4]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)",
    "codeLanguage": "python",
    "options": [
      "[1, 3]",
      "[1, 3, 4]",
      "[1, 2, 3]",
      "[2, 4]"
    ],
    "correctOptionIndex": 1,
    "explanation": "Modifying a list in-place while iterating shifts index positions. When 2 is removed, 3 shifts to index 1, so the iterator moves to index 2 (which is now 4), skipping 3. 4 is never checked, leaving [1, 3, 4].",
    "skillCategory": "Loop Gotchas"
  },
  {
    "id": "py-eb-49",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does range(5, 0, -1) generate?",
    "codeSnippet": "print(list(range(5, 0, -1)))",
    "codeLanguage": "python",
    "options": [
      "[5, 4, 3, 2, 1]",
      "[5, 4, 3, 2, 1, 0]",
      "[5, 0, -1]",
      "[]"
    ],
    "correctOptionIndex": 0,
    "explanation": "With a negative step, it counts downwards from 5 down to 1 (excluding stop value 0).",
    "skillCategory": "Range"
  },
  {
    "id": "py-eb-50",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of nested conditional expressions?",
    "codeSnippet": "score = 85\ngrade = \"A\" if score >= 90 else \"B\" if score >= 80 else \"C\"\nprint(grade)",
    "codeLanguage": "python",
    "options": [
      "B",
      "A",
      "C",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "score is 85, so score >= 90 is False. It falls into the else branch where score >= 80 is True, returning \"B\".",
    "skillCategory": "Conditionals"
  },
  {
    "id": "py-eb-51",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of using break inside a while True loop?",
    "codeSnippet": "x = 1\nwhile True:\n    x *= 2\n    if x >= 8:\n        break\nprint(x)",
    "codeLanguage": "python",
    "options": [
      "8",
      "4",
      "16",
      "Infinite Loop"
    ],
    "correctOptionIndex": 0,
    "explanation": "x starts at 1, becomes 2, then 4, then 8. When x = 8, x >= 8 is True and break halts the loop.",
    "skillCategory": "While Loop"
  },
  {
    "id": "py-eb-52",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is printed by this loop with a return in a function?",
    "codeSnippet": "def test():\n    for i in range(5):\n        if i == 2:\n            return i\n    return -1\nprint(test())",
    "codeLanguage": "python",
    "options": [
      "2",
      "-1",
      "5",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "When i == 2, the return statement immediately exits both the loop and the function, returning 2.",
    "skillCategory": "Control Flow"
  },
  {
    "id": "py-eb-53",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What happens when range() is called with start >= stop and positive step?",
    "codeSnippet": "print(list(range(5, 2)))",
    "codeLanguage": "python",
    "options": [
      "[]",
      "[5, 4, 3]",
      "[5, 2]",
      "ValueError"
    ],
    "correctOptionIndex": 0,
    "explanation": "If start >= stop with default positive step of 1, range generates an empty sequence.",
    "skillCategory": "Range"
  },
  {
    "id": "py-eb-54",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How does try...except...else...finally execute when no exception occurs?",
    "codeSnippet": "try:\n    x = 10\nexcept:\n    x = 20\nelse:\n    x += 5\nfinally:\n    x += 1\nprint(x)",
    "codeLanguage": "python",
    "options": [
      "16",
      "15",
      "11",
      "21"
    ],
    "correctOptionIndex": 0,
    "explanation": "try sets x=10. Since no error occurred, else runs (x=15). Then finally runs unconditionally (x=16).",
    "skillCategory": "Exception Flow"
  },
  {
    "id": "py-eb-55",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output when finally contains a return statement?",
    "codeSnippet": "def check():\n    try:\n        return \"TRY\"\n    finally:\n        return \"FINALLY\"\nprint(check())",
    "codeLanguage": "python",
    "options": [
      "FINALLY",
      "TRY",
      "TRY FINALLY",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "A return statement inside a finally block overrides any previous return statement in try or except.",
    "skillCategory": "Finally Return"
  },
  {
    "id": "py-eb-56",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is printed by this if statement evaluating multiple truthy items?",
    "codeSnippet": "a, b = True, False\nif a or b and not a:\n    print(\"YES\")\nelse:\n    print(\"NO\")",
    "codeLanguage": "python",
    "options": [
      "YES",
      "NO",
      "SyntaxError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "and and not have higher precedence, but the left side of or is True, so short-circuiting evaluates the condition as True.",
    "skillCategory": "Conditionals"
  },
  {
    "id": "py-eb-57",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of all() and any() on empty lists?",
    "codeSnippet": "print(all([]), any([]))",
    "codeLanguage": "python",
    "options": [
      "True False",
      "False False",
      "True True",
      "False True"
    ],
    "correctOptionIndex": 0,
    "explanation": "all([]) is vacuously True (no falsy elements exist). any([]) is False (no truthy elements exist).",
    "skillCategory": "Built-in Functions"
  },
  {
    "id": "py-eb-58",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when break is executed inside a try block with finally?",
    "codeSnippet": "for i in range(2):\n    try:\n        break\n    finally:\n        print(\"Cleanup\", end=\" \")\nprint(\"Done\")",
    "codeLanguage": "python",
    "options": [
      "Cleanup Done",
      "Done",
      "Cleanup Cleanup Done",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "The finally block is guaranteed to execute before the break statement leaves the loop.",
    "skillCategory": "Try Finally Break"
  },
  {
    "id": "py-eb-59",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does reversed() return when passed a list?",
    "codeSnippet": "nums = [1, 2, 3]\nprint(list(reversed(nums)))",
    "codeLanguage": "python",
    "options": [
      "[3, 2, 1]",
      "[1, 2, 3]",
      "None",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "reversed() returns a reverse iterator, which list() expands to [3, 2, 1].",
    "skillCategory": "Reversed"
  },
  {
    "id": "py-eb-60",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of this loop with step 0?",
    "codeSnippet": "try:\n    range(1, 5, 0)\nexcept ValueError:\n    print(\"Zero step error\")",
    "codeLanguage": "python",
    "options": [
      "Zero step error",
      "[1, 2, 3, 4, 5]",
      "Infinite Loop",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "range() step argument cannot be zero; doing so raises a ValueError.",
    "skillCategory": "Range Gotchas"
  },
  {
    "id": "py-eb-61",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of iterating over a string with break?",
    "codeSnippet": "out = \"\"\nfor char in \"DevForge\":\n    if char == \"F\":\n        break\n    out += char\nprint(out)",
    "codeLanguage": "python",
    "options": [
      "Dev",
      "DevForge",
      "Forge",
      "DevF"
    ],
    "correctOptionIndex": 0,
    "explanation": "The loop appends \"D\", \"e\", \"v\". When char == \"F\", break terminates the loop, outputting \"Dev\".",
    "skillCategory": "Loops"
  },
  {
    "id": "py-eb-62",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the result of using pass in an empty function or loop?",
    "codeSnippet": "for i in range(3):\n    pass\nprint(\"Loop completed\")",
    "codeLanguage": "python",
    "options": [
      "Loop completed",
      "SyntaxError",
      "None",
      "0 1 2"
    ],
    "correctOptionIndex": 0,
    "explanation": "pass is a null statement used as a placeholder where syntactically code is required.",
    "skillCategory": "Pass Statement"
  },
  {
    "id": "py-eb-63",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What will be the output of nested for loops with list comprehension?",
    "codeSnippet": "pairs = [(x, y) for x in [1, 2] for y in [3, 4]]\nprint(len(pairs))",
    "codeLanguage": "python",
    "options": [
      "4",
      "2",
      "8",
      "1"
    ],
    "correctOptionIndex": 0,
    "explanation": "The nested list comprehension performs a Cartesian product: 2 * 2 = 4 pairs.",
    "skillCategory": "Comprehensions"
  },
  {
    "id": "py-eb-64",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does this while loop do when condition is never met?",
    "codeSnippet": "i = 0\nwhile i < 0:\n    i += 1\nelse:\n    print(\"Immediate else\")",
    "codeLanguage": "python",
    "options": [
      "Immediate else",
      "0",
      "Nothing",
      "Infinite Loop"
    ],
    "correctOptionIndex": 0,
    "explanation": "Since 0 < 0 is initially False, the loop body never runs, and the else clause executes immediately.",
    "skillCategory": "While Else"
  },
  {
    "id": "py-eb-65",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of checking membership in a range?",
    "codeSnippet": "r = range(0, 10, 2)\nprint(4 in r, 5 in r)",
    "codeLanguage": "python",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "correctOptionIndex": 0,
    "explanation": "range(0, 10, 2) contains only even integers: 0, 2, 4, 6, 8. So 4 is in r, but 5 is not.",
    "skillCategory": "Range Membership"
  },
  {
    "id": "py-eb-66",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of zip_longest from itertools when fillvalue is provided?",
    "codeSnippet": "from itertools import zip_longest\nres = list(zip_longest([1], [\"a\", \"b\"], fillvalue=0))\nprint(res)",
    "codeLanguage": "python",
    "options": [
      "[(1, \"a\"), (0, \"b\")]",
      "[(1, \"a\")]",
      "[(1, \"a\"), (None, \"b\")]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "zip_longest pads shorter iterables with fillvalue=0, yielding [(1, \"a\"), (0, \"b\")].",
    "skillCategory": "Itertools"
  },
  {
    "id": "py-eb-67",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the break statement do inside a while...else when break is hit?",
    "codeSnippet": "x = 0\nwhile x < 5:\n    if x == 2:\n        break\n    x += 1\nelse:\n    print(\"Else ran\")\nprint(x)",
    "codeLanguage": "python",
    "options": [
      "2",
      "Else ran 2",
      "5",
      "Else ran 5"
    ],
    "correctOptionIndex": 0,
    "explanation": "When break is executed, the loop terminates immediately and skips the else block entirely.",
    "skillCategory": "While Else Break"
  },
  {
    "id": "py-eb-68",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does match-case (pattern matching) in Python 3.10+ do with wildcards _?",
    "codeSnippet": "status = 404\nmatch status:\n    case 200: msg = \"OK\"\n    case 404: msg = \"Not Found\"\n    case _: msg = \"Other\"\nprint(msg)",
    "codeLanguage": "python",
    "options": [
      "Not Found",
      "OK",
      "Other",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Structural pattern matching evaluates the cases sequentially; 404 matches case 404.",
    "skillCategory": "Pattern Matching"
  },
  {
    "id": "py-eb-69",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What will be the output of this countdown while loop?",
    "codeSnippet": "n = 3\nwhile n > 0:\n    n -= 1\nprint(n)",
    "codeLanguage": "python",
    "options": [
      "0",
      "1",
      "-1",
      "3"
    ],
    "correctOptionIndex": 0,
    "explanation": "The loop decrements n from 3 to 2, 1, and finally 0, at which point n > 0 is False.",
    "skillCategory": "Loops"
  },
  {
    "id": "py-eb-70",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of combining filter() with a lambda in a loop?",
    "codeSnippet": "nums = [1, 2, 3, 4, 5]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(sum(evens))",
    "codeLanguage": "python",
    "options": [
      "6",
      "9",
      "15",
      "4"
    ],
    "correctOptionIndex": 0,
    "explanation": "filter extracts [2, 4], and sum([2, 4]) is 6.",
    "skillCategory": "Filter Lambda"
  },
  {
    "id": "py-eb-71",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does map() do when converting string numbers?",
    "codeSnippet": "nums = list(map(int, [\"10\", \"20\", \"30\"]))\nprint(nums[1])",
    "codeLanguage": "python",
    "options": [
      "20",
      "10",
      "30",
      "\"20\""
    ],
    "correctOptionIndex": 0,
    "explanation": "map(int, ...) applies int to every item, producing [10, 20, 30]. nums[1] is 20.",
    "skillCategory": "Map Function"
  },
  {
    "id": "py-eb-72",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is printed by this recursive countdown loop?",
    "codeSnippet": "def count(n):\n    if n <= 0:\n        return \"Blastoff!\"\n    return str(n) + \" \" + count(n - 1)\nprint(count(2))",
    "codeLanguage": "python",
    "options": [
      "2 1 Blastoff!",
      "2 Blastoff!",
      "1 2 Blastoff!",
      "Blastoff!"
    ],
    "correctOptionIndex": 0,
    "explanation": "count(2) returns \"2 \" + count(1) = \"2 \" + \"1 \" + count(0) = \"2 1 Blastoff!\".",
    "skillCategory": "Recursion Flow"
  },
  {
    "id": "py-eb-73",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the is operator check compared to == in an if statement?",
    "codeSnippet": "a = [1]\nb = [1]\nprint(a == b, a is b)",
    "codeLanguage": "python",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "correctOptionIndex": 0,
    "explanation": "== checks value equality (both contain [1]), while is checks memory identity (they are distinct objects).",
    "skillCategory": "Identity vs Equality"
  },
  {
    "id": "py-eb-74",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of iterating over sorted(dict)?",
    "codeSnippet": "d = {3: \"c\", 1: \"a\", 2: \"b\"}\nprint(list(sorted(d)))",
    "codeLanguage": "python",
    "options": [
      "[1, 2, 3]",
      "['a', 'b', 'c']",
      "[(1, \"a\"), (2, \"b\"), (3, \"c\")]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "sorted(d) sorts the keys of dictionary d in ascending order: [1, 2, 3].",
    "skillCategory": "Sorted Dictionary"
  },
  {
    "id": "py-eb-75",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when using assert with a condition that fails?",
    "codeSnippet": "try:\n    x = 5\n    assert x == 10, \"Value must be 10\"\nexcept AssertionError as e:\n    print(str(e))",
    "codeLanguage": "python",
    "options": [
      "Value must be 10",
      "AssertionError",
      "x is 5",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "When an assert statement evaluates to False, it raises an AssertionError with the provided message.",
    "skillCategory": "Assertions"
  },
  {
    "id": "py-eb-76",
    "trackId": "python",
    "domain": "Control Flow, Loops & Conditionals",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Which loop statement is best used when the number of iterations is known in advance?",
    "codeLanguage": "python",
    "options": [
      "for loop",
      "while loop",
      "do-while loop",
      "goto loop"
    ],
    "correctOptionIndex": 0,
    "explanation": "In Python, the for loop is designed for definite iteration over an iterable or range of known length.",
    "skillCategory": "Loop Selection"
  },
  {
    "id": "py-eb-77",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the notorious mutable default argument gotcha in Python?",
    "codeSnippet": "def add_item(val, items=[]):\n    items.append(val)\n    return items\n\nprint(add_item(1))\nprint(add_item(2))",
    "codeLanguage": "python",
    "options": [
      "[1] then [1, 2]",
      "[1] then [2]",
      "[1, 2] then [1, 2]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Default arguments are evaluated once when the function is defined, not each time it is called. The same list items is mutated.",
    "skillCategory": "Mutable Defaults"
  },
  {
    "id": "py-eb-78",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does *args receive inside a function?",
    "codeSnippet": "def demo(*args):\n    return type(args).__name__\nprint(demo(1, 2, 3))",
    "codeLanguage": "python",
    "options": [
      "tuple",
      "list",
      "dict",
      "set"
    ],
    "correctOptionIndex": 0,
    "explanation": "*args collects arbitrary positional arguments into an immutable tuple.",
    "skillCategory": "Args"
  },
  {
    "id": "py-eb-79",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does **kwargs receive inside a function?",
    "codeSnippet": "def demo(**kwargs):\n    return type(kwargs).__name__\nprint(demo(name=\"DevForge\", tier=\"Pro\"))",
    "codeLanguage": "python",
    "options": [
      "dict",
      "tuple",
      "list",
      "namedtuple"
    ],
    "correctOptionIndex": 0,
    "explanation": "**kwargs collects arbitrary keyword arguments into a standard Python dictionary.",
    "skillCategory": "Kwargs"
  },
  {
    "id": "py-eb-80",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does the nonlocal keyword do in nested functions?",
    "codeSnippet": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x = 20\n    inner()\n    return x\nprint(outer())",
    "codeLanguage": "python",
    "options": [
      "20",
      "10",
      "UnboundLocalError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "nonlocal binds x to the nearest enclosing scope variable, allowing inner() to reassign outer’s x to 20.",
    "skillCategory": "Nonlocal Scope"
  },
  {
    "id": "py-eb-81",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when attempting to modify a global variable without the global keyword?",
    "codeSnippet": "count = 5\ndef increment():\n    count += 1\ntry:\n    increment()\nexcept UnboundLocalError:\n    print(\"UnboundLocalError\")",
    "codeLanguage": "python",
    "options": [
      "UnboundLocalError",
      "6",
      "5",
      "NameError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Assigning to count inside increment() marks count as a local variable. Reading it before assignment raises UnboundLocalError.",
    "skillCategory": "Global Scope"
  },
  {
    "id": "py-eb-82",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the default return value of a Python function that does not contain a return statement?",
    "codeSnippet": "def no_return():\n    x = 100\nprint(no_return())",
    "codeLanguage": "python",
    "options": [
      "None",
      "0",
      "False",
      "void"
    ],
    "correctOptionIndex": 0,
    "explanation": "Any Python function that exits without an explicit return statement implicitly returns None.",
    "skillCategory": "Return Values"
  },
  {
    "id": "py-eb-83",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of a lambda function with two arguments?",
    "codeSnippet": "multiplier = lambda x, y: x * y\nprint(multiplier(6, 7))",
    "codeLanguage": "python",
    "options": [
      "42",
      "13",
      "None",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "lambda x, y: x * y creates an anonymous function taking two parameters and returning their product: 6 * 7 = 42.",
    "skillCategory": "Lambda Functions"
  },
  {
    "id": "py-eb-84",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when closures capture loop variables in Python?",
    "codeSnippet": "funcs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])",
    "codeLanguage": "python",
    "options": [
      "[2, 2, 2]",
      "[0, 1, 2]",
      "[0, 0, 0]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Closures in Python bind late by reference, not value. When invoked after the loop, i has finished at 2, so all return 2.",
    "skillCategory": "Late Binding Closures"
  },
  {
    "id": "py-eb-85",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "spot_the_bug",
    "prompt": "How do you fix late-binding closures in a loop to capture the current value?",
    "codeSnippet": "funcs = [lambda i=i: i for i in range(3)]",
    "codeLanguage": "python",
    "options": [
      "Use default argument i=i to capture the value at definition time",
      "Use nonlocal i",
      "Use global i",
      "Cannot be fixed"
    ],
    "correctOptionIndex": 0,
    "explanation": "Using a default argument lambda i=i: i binds the value of i at function creation time, yielding [0, 1, 2].",
    "skillCategory": "Closure Fix"
  },
  {
    "id": "py-eb-86",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does keyword-only argument syntax * enforce in Python 3?",
    "codeSnippet": "def greet(*, name):\n    return f\"Hello {name}\"\ntry:\n    greet(\"Alice\")\nexcept TypeError:\n    print(\"Must use keyword\")",
    "codeLanguage": "python",
    "options": [
      "Must use keyword",
      "Hello Alice",
      "None",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Parameters following an isolated * in a parameter list can only be passed as keyword arguments (e.g. greet(name=\"Alice\")).",
    "skillCategory": "Keyword Only Arguments"
  },
  {
    "id": "py-eb-87",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does positional-only parameter syntax / enforce in Python 3.8+?",
    "codeSnippet": "def add(a, b, /):\n    return a + b\ntry:\n    add(a=2, b=3)\nexcept TypeError:\n    print(\"Positional only\")",
    "codeLanguage": "python",
    "options": [
      "Positional only",
      "5",
      "None",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Parameters preceding the / slash are strictly positional-only and cannot be passed by keyword name.",
    "skillCategory": "Positional Only Arguments"
  },
  {
    "id": "py-eb-88",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the base case of this recursive factorial function?",
    "codeSnippet": "def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint(fact(4))",
    "codeLanguage": "python",
    "options": [
      "24",
      "12",
      "16",
      "10"
    ],
    "correctOptionIndex": 0,
    "explanation": "fact(4) evaluates to 4 * 3 * 2 * 1 = 24. n <= 1 is the base case.",
    "skillCategory": "Recursion"
  },
  {
    "id": "py-eb-89",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when recursion exceeds the maximum recursion depth?",
    "codeSnippet": "def recurse():\n    return recurse()\ntry:\n    recurse()\nexcept RecursionError:\n    print(\"Caught RecursionError\")",
    "codeLanguage": "python",
    "options": [
      "Caught RecursionError",
      "MemoryError",
      "StackOverflowError",
      "SystemExit"
    ],
    "correctOptionIndex": 0,
    "explanation": "Infinite recursion without a base case exceeds sys.getrecursionlimit(), raising a RecursionError.",
    "skillCategory": "Recursion Limits"
  },
  {
    "id": "py-eb-90",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How do decorators work in Python?",
    "codeSnippet": "def double(fn):\n    def wrapper(*args):\n        return fn(*args) * 2\n    return wrapper\n\n@double\ndef num():\n    return 5\n\nprint(num())",
    "codeLanguage": "python",
    "options": [
      "10",
      "5",
      "25",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "@double wraps num() so that calling num() invokes wrapper(), which returns 5 * 2 = 10.",
    "skillCategory": "Decorators"
  },
  {
    "id": "py-eb-91",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "Can a function return multiple values in Python?",
    "codeSnippet": "def coords():\n    return 10, 20\n\nres = coords()\nprint(type(res).__name__, res)",
    "codeLanguage": "python",
    "options": [
      "tuple (10, 20)",
      "list [10, 20]",
      "int 10",
      "set {10, 20}"
    ],
    "correctOptionIndex": 0,
    "explanation": "Comma-separated values in a return statement are automatically packed into a tuple.",
    "skillCategory": "Multiple Returns"
  },
  {
    "id": "py-eb-92",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does unpacking a dictionary with ** into a function call do?",
    "codeSnippet": "def greet(title, name):\n    return f\"{title} {name}\"\nparams = {\"title\": \"Dr.\", \"name\": \"Strange\"}\nprint(greet(**params))",
    "codeLanguage": "python",
    "options": [
      "Dr. Strange",
      "title name",
      "TypeError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "**params unpacks the dictionary keys and values into keyword arguments title=\"Dr.\" and name=\"Strange\".",
    "skillCategory": "Dict Unpacking"
  },
  {
    "id": "py-eb-93",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the LEGB rule order for variable scope resolution in Python?",
    "codeLanguage": "python",
    "options": [
      "Local -> Enclosing -> Global -> Built-in",
      "Local -> Global -> Enclosing -> Built-in",
      "Global -> Local -> Enclosing -> Built-in",
      "Built-in -> Global -> Enclosing -> Local"
    ],
    "correctOptionIndex": 0,
    "explanation": "Python resolves variable names in LEGB order: Local, Enclosing (outer functions), Global (module level), Built-in.",
    "skillCategory": "LEGB Rule"
  },
  {
    "id": "py-eb-94",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does functools.partial do?",
    "codeSnippet": "from functools import partial\ndef power(base, exp):\n    return base ** exp\nsquare = partial(power, exp=2)\nprint(square(5))",
    "codeLanguage": "python",
    "options": [
      "25",
      "10",
      "32",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "partial freezes a portion of a function arguments (exp=2), creating a new callable: 5 ** 2 = 25.",
    "skillCategory": "Functools Partial"
  },
  {
    "id": "py-eb-95",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does a generator function using yield return?",
    "codeSnippet": "def gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g), next(g))",
    "codeLanguage": "python",
    "options": [
      "1 2",
      "[1, 2]",
      "(1, 2)",
      "None None"
    ],
    "correctOptionIndex": 0,
    "explanation": "yield pauses the generator function and produces a value each time next() is called: 1, then 2.",
    "skillCategory": "Generators"
  },
  {
    "id": "py-eb-96",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What exception is raised when next() is called on an exhausted generator?",
    "codeSnippet": "def one():\n    yield 42\ng = one()\nnext(g)\ntry:\n    next(g)\nexcept StopIteration:\n    print(\"Exhausted\")",
    "codeLanguage": "python",
    "options": [
      "Exhausted",
      "GeneratorExit",
      "IndexError",
      "StopGenerator"
    ],
    "correctOptionIndex": 0,
    "explanation": "When a generator has no more values to yield, next() raises a StopIteration exception.",
    "skillCategory": "StopIteration"
  },
  {
    "id": "py-eb-97",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is a generator expression compared to a list comprehension?",
    "codeSnippet": "g = (x * 2 for x in [1, 2])\nprint(type(g).__name__)",
    "codeLanguage": "python",
    "options": [
      "generator",
      "list",
      "tuple",
      "iterator"
    ],
    "correctOptionIndex": 0,
    "explanation": "Parentheses around a comprehension create a lazy generator object, not a tuple.",
    "skillCategory": "Generator Expression"
  },
  {
    "id": "py-eb-98",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does sorted() with a key parameter do?",
    "codeSnippet": "words = [\"banana\", \"pie\", \"apple\"]\nprint(sorted(words, key=len))",
    "codeLanguage": "python",
    "options": [
      "['pie', 'apple', 'banana']",
      "['apple', 'banana', 'pie']",
      "['banana', 'apple', 'pie']",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "key=len sorts words by string length: \"pie\" (3), \"apple\" (5), \"banana\" (6).",
    "skillCategory": "Sorting with Key"
  },
  {
    "id": "py-eb-99",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "How do closures maintain state across calls?",
    "codeSnippet": "def make_counter():\n    count = 0\n    def inc():\n        nonlocal count\n        count += 1\n        return count\n    return inc\nc = make_counter()\nprint(c(), c())",
    "codeLanguage": "python",
    "options": [
      "1 2",
      "1 1",
      "2 2",
      "UnboundLocalError"
    ],
    "correctOptionIndex": 0,
    "explanation": "The returned closure inc() retains access to its enclosing scope variable count across calls: 1 then 2.",
    "skillCategory": "Closures"
  },
  {
    "id": "py-eb-100",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the result of passing arguments by keyword out of order?",
    "codeSnippet": "def sub(a, b):\n    return a - b\nprint(sub(b=3, a=10))",
    "codeLanguage": "python",
    "options": [
      "7",
      "-7",
      "TypeError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "Keyword arguments match parameters by name rather than position, so a=10, b=3 gives 10 - 3 = 7.",
    "skillCategory": "Keyword Arguments"
  },
  {
    "id": "py-eb-101",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does docstring __doc__ return?",
    "codeSnippet": "def helper():\n    \"\"\"This is a help doc.\"\"\"\n    pass\nprint(helper.__doc__.strip())",
    "codeLanguage": "python",
    "options": [
      "This is a help doc.",
      "None",
      "helper",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "The first string literal in a function definition becomes its __doc__ attribute.",
    "skillCategory": "Docstrings"
  },
  {
    "id": "py-eb-102",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when a decorator uses functools.wraps?",
    "codeSnippet": "from functools import wraps\ndef my_dec(f):\n    @wraps(f)\n    def wrap():\n        return f()\n    return wrap\n@my_dec\ndef target():\n    \"\"\"Original doc.\"\"\"\n    pass\nprint(target.__name__)",
    "codeLanguage": "python",
    "options": [
      "target",
      "wrap",
      "my_dec",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "functools.wraps preserves metadata (like __name__ and __doc__) from the original decorated function.",
    "skillCategory": "Functools Wraps"
  },
  {
    "id": "py-eb-103",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does recursion with memoization do for Fibonacci?",
    "codeSnippet": "memo = {0: 0, 1: 1}\ndef fib(n):\n    if n not in memo:\n        memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]\nprint(fib(6))",
    "codeLanguage": "python",
    "options": [
      "8",
      "5",
      "13",
      "21"
    ],
    "correctOptionIndex": 0,
    "explanation": "Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8. fib(6) is 8.",
    "skillCategory": "Memoization"
  },
  {
    "id": "py-eb-104",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Can functions be passed as arguments to other functions in Python?",
    "codeLanguage": "python",
    "options": [
      "Yes, functions are first-class citizens in Python",
      "No, only classes can be passed",
      "Only lambda functions can be passed",
      "No, functions are not objects"
    ],
    "correctOptionIndex": 0,
    "explanation": "In Python, functions are first-class objects: they can be assigned to variables, passed as arguments, and returned from other functions.",
    "skillCategory": "First Class Functions"
  },
  {
    "id": "py-eb-105",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of reduce() from functools?",
    "codeSnippet": "from functools import reduce\nnums = [1, 2, 3, 4]\nprint(reduce(lambda a, b: a * b, nums))",
    "codeLanguage": "python",
    "options": [
      "24",
      "10",
      "16",
      "12"
    ],
    "correctOptionIndex": 0,
    "explanation": "reduce applies the multiplication function cumulatively: (((1 * 2) * 3) * 4) = 24.",
    "skillCategory": "Reduce"
  },
  {
    "id": "py-eb-106",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does __annotations__ dictionary hold for function type hints?",
    "codeSnippet": "def add(x: int, y: int) -> int:\n    return x + y\nprint(add.__annotations__[\"return\"].__name__)",
    "codeLanguage": "python",
    "options": [
      "int",
      "None",
      "return",
      "type"
    ],
    "correctOptionIndex": 0,
    "explanation": "Type hints are stored in the __annotations__ dictionary attribute; the return annotation is int.",
    "skillCategory": "Type Hints"
  },
  {
    "id": "py-eb-107",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when *args is used with default parameters?",
    "codeSnippet": "def greet(msg=\"Hi\", *names):\n    return f\"{msg}: {', '.join(names)}\"\nprint(greet(\"Hello\", \"Ann\", \"Bob\"))",
    "codeLanguage": "python",
    "options": [
      "Hello: Ann, Bob",
      "Hi: Hello, Ann, Bob",
      "TypeError",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "\"Hello\" binds to positional parameter msg, and the remaining positional arguments (\"Ann\", \"Bob\") are collected into names.",
    "skillCategory": "Args Defaults"
  },
  {
    "id": "py-eb-108",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of passing a set to a function expecting an iterable?",
    "codeSnippet": "def count_items(items):\n    return len(items)\nprint(count_items({10, 20, 20, 30}))",
    "codeLanguage": "python",
    "options": [
      "3",
      "4",
      "TypeError",
      "2"
    ],
    "correctOptionIndex": 0,
    "explanation": "Sets automatically deduplicate elements: {10, 20, 20, 30} has 3 unique elements (10, 20, 30).",
    "skillCategory": "Set Parameters"
  },
  {
    "id": "py-eb-109",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of calling a generator expression multiple times?",
    "codeSnippet": "g = (x for x in [1, 2])\nlist1 = list(g)\nlist2 = list(g)\nprint(list1, list2)",
    "codeLanguage": "python",
    "options": [
      "[1, 2] []",
      "[1, 2] [1, 2]",
      "[] [1, 2]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Generators are one-time iterators. Once exhausted by list1, subsequent iterations produce an empty sequence [].",
    "skillCategory": "Generator Exhaustion"
  },
  {
    "id": "py-eb-110",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of any() on a generator?",
    "codeSnippet": "nums = [0, False, \"\", 5, []]\nprint(any(x for x in nums))",
    "codeLanguage": "python",
    "options": [
      "True",
      "False",
      "5",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "5 is truthy, so any() encounters a truthy item and returns True immediately.",
    "skillCategory": "Any with Generator"
  },
  {
    "id": "py-eb-111",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does a nested function without nonlocal do to an outer variable?",
    "codeSnippet": "x = 10\ndef outer():\n    x = 20\n    def inner():\n        x = 30\n    inner()\n    return x\nprint(outer())",
    "codeLanguage": "python",
    "options": [
      "20",
      "30",
      "10",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "Without nonlocal, inner() creates its own local x = 30, leaving outer’s x unaffected as 20.",
    "skillCategory": "Local Scope"
  },
  {
    "id": "py-eb-112",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when returning a function that references a closed-over variable?",
    "codeSnippet": "def power_of(p):\n    return lambda n: n ** p\ncube = power_of(3)\nprint(cube(4))",
    "codeLanguage": "python",
    "options": [
      "64",
      "12",
      "81",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "power_of(3) returns a closure with p=3 bound. cube(4) evaluates 4 ** 3 = 64.",
    "skillCategory": "Function Factories"
  },
  {
    "id": "py-eb-113",
    "trackId": "python",
    "domain": "Functions, Scope, Lambdas & Recursion",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "What keyword is used to yield control and value from a generator function in Python?",
    "codeLanguage": "python",
    "options": [
      "yield",
      "return",
      "pause",
      "emit"
    ],
    "correctOptionIndex": 0,
    "explanation": "yield is the Python keyword used to produce values from a generator function lazily.",
    "skillCategory": "Yield Keyword"
  },
  {
    "id": "py-eb-114",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of list append vs extend?",
    "codeSnippet": "a = [1, 2]\na.append([3, 4])\nb = [1, 2]\nb.extend([3, 4])\nprint(len(a), len(b))",
    "codeLanguage": "python",
    "options": [
      "3 4",
      "4 4",
      "3 3",
      "2 4"
    ],
    "correctOptionIndex": 0,
    "explanation": "append([3, 4]) adds the sublist as a single element (length 3). extend([3, 4]) unpacks and appends each element (length 4).",
    "skillCategory": "List Methods"
  },
  {
    "id": "py-eb-115",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does dict.get() return when a key is missing?",
    "codeSnippet": "user = {\"name\": \"Alex\"}\nprint(user.get(\"role\", \"Developer\"))",
    "codeLanguage": "python",
    "options": [
      "Developer",
      "None",
      "KeyError",
      "Alex"
    ],
    "correctOptionIndex": 0,
    "explanation": "dict.get(key, default) safely returns the default value (\"Developer\") when the key does not exist.",
    "skillCategory": "Dict Methods"
  },
  {
    "id": "py-eb-116",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of set union and intersection?",
    "codeSnippet": "s1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint(s1 & s2, s1 | s2)",
    "codeLanguage": "python",
    "options": [
      "{2, 3} {1, 2, 3, 4}",
      "{1, 4} {2, 3}",
      "{2, 3} {1, 2, 3}",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "& calculates intersection ({2, 3}) and | calculates union ({1, 2, 3, 4}).",
    "skillCategory": "Set Operations"
  },
  {
    "id": "py-eb-117",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of shallow copy with nested lists?",
    "codeSnippet": "import copy\na = [[1, 2], [3, 4]]\nb = a.copy()\nb[0].append(99)\nprint(a[0])",
    "codeLanguage": "python",
    "options": [
      "[1, 2, 99]",
      "[1, 2]",
      "[3, 4]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "a.copy() creates a shallow copy. The outer list is new, but nested sublists are shared references, so mutating b[0] mutates a[0].",
    "skillCategory": "Shallow vs Deep Copy"
  },
  {
    "id": "py-eb-118",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does copy.deepcopy() do with nested objects?",
    "codeSnippet": "import copy\na = [[1, 2]]\nb = copy.deepcopy(a)\nb[0].append(99)\nprint(a[0])",
    "codeLanguage": "python",
    "options": [
      "[1, 2]",
      "[1, 2, 99]",
      "99",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "copy.deepcopy() recursively duplicates all nested objects, so mutating b[0] does not affect a[0].",
    "skillCategory": "Deep Copy"
  },
  {
    "id": "py-eb-119",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you create a single-element tuple in Python?",
    "codeSnippet": "t1 = (5)\nt2 = (5,)\nprint(type(t1).__name__, type(t2).__name__)",
    "codeLanguage": "python",
    "options": [
      "int tuple",
      "tuple tuple",
      "int int",
      "tuple int"
    ],
    "correctOptionIndex": 0,
    "explanation": "(5) is just parenthesized integer 5. A trailing comma (5,) is required to define a tuple.",
    "skillCategory": "Tuples"
  },
  {
    "id": "py-eb-120",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of list comprehension with an if condition?",
    "codeSnippet": "evens = [x * 2 for x in range(5) if x % 2 == 0]\nprint(evens)",
    "codeLanguage": "python",
    "options": [
      "[0, 4, 8]",
      "[0, 2, 4]",
      "[4, 8]",
      "[0, 2, 4, 6, 8]"
    ],
    "correctOptionIndex": 0,
    "explanation": "range(5) evens are 0, 2, 4. Multiplying each by 2 yields [0, 4, 8].",
    "skillCategory": "List Comprehensions"
  },
  {
    "id": "py-eb-121",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of list comprehension with an if-else ternary expression?",
    "codeSnippet": "res = [\"E\" if x % 2 == 0 else \"O\" for x in [1, 2, 3]]\nprint(\"\".join(res))",
    "codeLanguage": "python",
    "options": [
      "OEO",
      "EOE",
      "EEE",
      "OOO"
    ],
    "correctOptionIndex": 0,
    "explanation": "1 is odd (\"O\"), 2 is even (\"E\"), 3 is odd (\"O\"). Joining them produces \"OEO\".",
    "skillCategory": "Comprehension Ternary"
  },
  {
    "id": "py-eb-122",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of dictionary comprehension?",
    "codeSnippet": "squares = {x: x**2 for x in range(3)}\nprint(squares)",
    "codeLanguage": "python",
    "options": [
      "{0: 0, 1: 1, 2: 4}",
      "{1: 1, 2: 4, 3: 9}",
      "[0, 1, 4]",
      "{(0, 0), (1, 1), (2, 4)}"
    ],
    "correctOptionIndex": 0,
    "explanation": "{x: x**2 for x in range(3)} maps 0->0, 1->1, 2->4.",
    "skillCategory": "Dict Comprehensions"
  },
  {
    "id": "py-eb-123",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does list pop() without arguments do?",
    "codeSnippet": "nums = [10, 20, 30]\nval = nums.pop()\nprint(val, nums)",
    "codeLanguage": "python",
    "options": [
      "30 [10, 20]",
      "10 [20, 30]",
      "20 [10, 30]",
      "30 []"
    ],
    "correctOptionIndex": 0,
    "explanation": "pop() removes and returns the last element of the list: 30, leaving [10, 20].",
    "skillCategory": "List Pop"
  },
  {
    "id": "py-eb-124",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when accessing a missing key in a dict using square brackets []?",
    "codeSnippet": "d = {\"a\": 1}\ntry:\n    print(d[\"b\"])\nexcept KeyError:\n    print(\"Caught KeyError\")",
    "codeLanguage": "python",
    "options": [
      "Caught KeyError",
      "None",
      "0",
      "False"
    ],
    "correctOptionIndex": 0,
    "explanation": "Accessing a nonexistent key via d[key] raises a KeyError.",
    "skillCategory": "Dict Indexing"
  },
  {
    "id": "py-eb-125",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does set.symmetric_difference ^ do?",
    "codeSnippet": "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a ^ b)",
    "codeLanguage": "python",
    "options": [
      "{1, 2, 4, 5}",
      "{3}",
      "{1, 2, 3, 4, 5}",
      "{}"
    ],
    "correctOptionIndex": 0,
    "explanation": "Symmetric difference ^ returns elements present in either set, but not in both: {1, 2, 4, 5}.",
    "skillCategory": "Set Operations"
  },
  {
    "id": "py-eb-126",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "Can a list be used as a dictionary key or set element?",
    "codeSnippet": "try:\n    d = {[1, 2]: \"value\"}\nexcept TypeError:\n    print(\"Unhashable type\")",
    "codeLanguage": "python",
    "options": [
      "Unhashable type",
      "{\"[1, 2]\": \"value\"}",
      "None",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Dictionary keys must be hashable and immutable. Lists are mutable and unhashable, raising TypeError.",
    "skillCategory": "Hashable Types"
  },
  {
    "id": "py-eb-127",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "Can a tuple containing a list be hashed or added to a set?",
    "codeSnippet": "t = (1, [2, 3])\ntry:\n    s = {t}\nexcept TypeError:\n    print(\"Unhashable tuple\")",
    "codeLanguage": "python",
    "options": [
      "Unhashable tuple",
      "{(1, [2, 3])}",
      "None",
      "SyntaxError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Even though the tuple itself is immutable, it contains a mutable list, making the entire tuple unhashable.",
    "skillCategory": "Tuple Hashing"
  },
  {
    "id": "py-eb-128",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does list.sort() return compared to sorted()?",
    "codeSnippet": "nums = [3, 1, 2]\nres1 = nums.sort()\nres2 = sorted([3, 1, 2])\nprint(res1, res2)",
    "codeLanguage": "python",
    "options": [
      "None [1, 2, 3]",
      "[1, 2, 3] [1, 2, 3]",
      "[1, 2, 3] None",
      "None None"
    ],
    "correctOptionIndex": 0,
    "explanation": "list.sort() sorts in-place and returns None. sorted() returns a brand new sorted list.",
    "skillCategory": "Sort vs Sorted"
  },
  {
    "id": "py-eb-129",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of dict.setdefault()?",
    "codeSnippet": "d = {\"a\": 1}\nval1 = d.setdefault(\"a\", 100)\nval2 = d.setdefault(\"b\", 200)\nprint(val1, val2)",
    "codeLanguage": "python",
    "options": [
      "1 200",
      "100 200",
      "1 None",
      "KeyError"
    ],
    "correctOptionIndex": 0,
    "explanation": "setdefault() returns the existing value if key exists (d[\"a\"] is 1). If missing, it inserts the default (d[\"b\"] becomes 200).",
    "skillCategory": "Setdefault"
  },
  {
    "id": "py-eb-130",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when multiplying a nested list by an integer?",
    "codeSnippet": "matrix = [[0] * 2] * 2\nmatrix[0][0] = 99\nprint(matrix)",
    "codeLanguage": "python",
    "options": [
      "[[99, 0], [99, 0]]",
      "[[99, 0], [0, 0]]",
      "[[99, 99], [0, 0]]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Multiplying [[0] * 2] * 2 copies the inner list reference twice! Modifying matrix[0][0] reflects in both rows.",
    "skillCategory": "List Multiplication Gotcha"
  },
  {
    "id": "py-eb-131",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the collections.deque structure provide over a standard list?",
    "codeLanguage": "python",
    "options": [
      "O(1) append and pop from both ends",
      "Automatic sorting on insertion",
      "Immutable items",
      "Dictionary lookup speed"
    ],
    "correctOptionIndex": 0,
    "explanation": "collections.deque is a double-ended queue offering O(1) performance for append and pop operations at both head and tail.",
    "skillCategory": "Collections Deque"
  },
  {
    "id": "py-eb-132",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of collections.defaultdict(int)?",
    "codeSnippet": "from collections import defaultdict\ncounts = defaultdict(int)\ncounts[\"apple\"] += 5\nprint(counts[\"banana\"])",
    "codeLanguage": "python",
    "options": [
      "0",
      "KeyError",
      "None",
      "5"
    ],
    "correctOptionIndex": 0,
    "explanation": "defaultdict(int) automatically initializes missing keys with the default factory int(), which returns 0.",
    "skillCategory": "Defaultdict"
  },
  {
    "id": "py-eb-133",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does collections.Counter do with strings?",
    "codeSnippet": "from collections import Counter\nc = Counter(\"banana\")\nprint(c[\"a\"])",
    "codeLanguage": "python",
    "options": [
      "3",
      "1",
      "2",
      "KeyError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Counter counts frequency of elements: in \"banana\", character \"a\" appears 3 times.",
    "skillCategory": "Collections Counter"
  },
  {
    "id": "py-eb-134",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of using slice assignment to replace a portion of a list?",
    "codeSnippet": "nums = [1, 2, 3, 4, 5]\nnums[1:4] = [20, 30]\nprint(nums)",
    "codeLanguage": "python",
    "options": [
      "[1, 20, 30, 5]",
      "[1, 20, 30, 4, 5]",
      "[20, 30, 5]",
      "ValueError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Slice assignment replaces the slice [2, 3, 4] with the new elements [20, 30], resulting in [1, 20, 30, 5].",
    "skillCategory": "Slice Assignment"
  },
  {
    "id": "py-eb-135",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does list insert(0, val) do?",
    "codeSnippet": "nums = [2, 3]\nnums.insert(0, 1)\nprint(nums)",
    "codeLanguage": "python",
    "options": [
      "[1, 2, 3]",
      "[2, 3, 1]",
      "[0, 2, 3]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "insert(0, 1) inserts value 1 at index 0, shifting existing elements to the right.",
    "skillCategory": "List Insert"
  },
  {
    "id": "py-eb-136",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does list.count() return when an element is missing?",
    "codeSnippet": "nums = [1, 2, 3]\nprint(nums.count(99))",
    "codeLanguage": "python",
    "options": [
      "0",
      "ValueError",
      "None",
      "-1"
    ],
    "correctOptionIndex": 0,
    "explanation": "list.count(x) returns the number of occurrences of x (0 if not present).",
    "skillCategory": "List Count"
  },
  {
    "id": "py-eb-137",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of set difference - operator?",
    "codeSnippet": "s1 = {1, 2, 3, 4}\ns2 = {2, 4, 6}\nprint(s1 - s2)",
    "codeLanguage": "python",
    "options": [
      "{1, 3}",
      "{6}",
      "{1, 2, 3}",
      "{1, 3, 6}"
    ],
    "correctOptionIndex": 0,
    "explanation": "s1 - s2 removes elements of s2 from s1, leaving {1, 3}.",
    "skillCategory": "Set Difference"
  },
  {
    "id": "py-eb-138",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when passing two iterables of unequal length to dict(zip(...))?",
    "codeSnippet": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2]\nprint(dict(zip(keys, vals)))",
    "codeLanguage": "python",
    "options": [
      "{\"a\": 1, \"b\": 2}",
      "{\"a\": 1, \"b\": 2, \"c\": None}",
      "ValueError",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "zip stops at the shortest length (2), pairing \"a\": 1 and \"b\": 2. \"c\" is truncated.",
    "skillCategory": "Dict Zip"
  },
  {
    "id": "py-eb-139",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the result of using str.index() vs str.find() on a missing substring?",
    "codeSnippet": "s = \"DevForge\"\nprint(s.find(\"xyz\"))",
    "codeLanguage": "python",
    "options": [
      "-1",
      "ValueError",
      "None",
      "False"
    ],
    "correctOptionIndex": 0,
    "explanation": "str.find() returns -1 when the substring is not found (unlike str.index() which raises ValueError).",
    "skillCategory": "String Find"
  },
  {
    "id": "py-eb-140",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does tuple unpacking with a wildcard * at the end do?",
    "codeSnippet": "a, b, *rest = (1, 2, 3, 4, 5)\nprint(a, b, rest)",
    "codeLanguage": "python",
    "options": [
      "1 2 [3, 4, 5]",
      "1 2 (3, 4, 5)",
      "1 2 3",
      "ValueError"
    ],
    "correctOptionIndex": 0,
    "explanation": "Extended unpacking collects the remaining elements into a list: [3, 4, 5].",
    "skillCategory": "Tuple Unpacking"
  },
  {
    "id": "py-eb-141",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does dict.popitem() do in Python 3.7+?",
    "codeSnippet": "d = {\"x\": 1, \"y\": 2}\nprint(d.popitem())",
    "codeLanguage": "python",
    "options": [
      "('y', 2)",
      "('x', 1)",
      "2",
      "1"
    ],
    "correctOptionIndex": 0,
    "explanation": "In Python 3.7+, dicts maintain insertion order, and popitem() removes and returns the last (key, value) pair in LIFO order.",
    "skillCategory": "Dict Popitem"
  },
  {
    "id": "py-eb-142",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of set comprehension with deduplication?",
    "codeSnippet": "nums = [1, 2, 2, 3, 4, 4]\nsq = {x ** 2 for x in nums}\nprint(len(sq))",
    "codeLanguage": "python",
    "options": [
      "4",
      "6",
      "5",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "The unique elements are 1, 2, 3, 4. Their squares are 1, 4, 9, 16 (4 unique elements).",
    "skillCategory": "Set Comprehensions"
  },
  {
    "id": "py-eb-143",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the clear() method do on a list?",
    "codeSnippet": "items = [1, 2, 3]\nitems.clear()\nprint(len(items))",
    "codeLanguage": "python",
    "options": [
      "0",
      "3",
      "None",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "clear() removes all elements in-place, leaving an empty list of length 0.",
    "skillCategory": "List Clear"
  },
  {
    "id": "py-eb-144",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does list.index() return when searching for an element with duplicates?",
    "codeSnippet": "letters = [\"a\", \"b\", \"c\", \"b\"]\nprint(letters.index(\"b\"))",
    "codeLanguage": "python",
    "options": [
      "1",
      "3",
      "[1, 3]",
      "2"
    ],
    "correctOptionIndex": 0,
    "explanation": "list.index(x) returns the first index where value x appears (index 1).",
    "skillCategory": "List Index"
  },
  {
    "id": "py-eb-145",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of using a frozenset as a dictionary key?",
    "codeSnippet": "fs = frozenset([1, 2])\nd = {fs: \"allowed\"}\nprint(d[fs])",
    "codeLanguage": "python",
    "options": [
      "allowed",
      "TypeError: unhashable type",
      "None",
      "KeyError"
    ],
    "correctOptionIndex": 0,
    "explanation": "frozenset is an immutable, hashable version of set, so it is fully valid as a dictionary key.",
    "skillCategory": "Frozenset"
  },
  {
    "id": "py-eb-146",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does any() return when checked against a dictionary with falsy values?",
    "codeSnippet": "d = {\"a\": 0, \"b\": False, \"c\": None}\nprint(any(d))",
    "codeLanguage": "python",
    "options": [
      "True",
      "False",
      "0",
      "None"
    ],
    "correctOptionIndex": 0,
    "explanation": "any(dict) iterates over the keys of the dictionary. \"a\", \"b\", and \"c\" are non-empty strings (truthy), so any(d) is True.",
    "skillCategory": "Any on Dictionary"
  },
  {
    "id": "py-eb-147",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you check if a key exists in a dictionary?",
    "codeSnippet": "d = {\"status\": \"active\"}\nprint(\"status\" in d, \"active\" in d)",
    "codeLanguage": "python",
    "options": [
      "True False",
      "True True",
      "False True",
      "False False"
    ],
    "correctOptionIndex": 0,
    "explanation": "The in operator checks dictionary keys by default. \"status\" is a key (True), but \"active\" is a value (False).",
    "skillCategory": "Key Membership"
  },
  {
    "id": "py-eb-148",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of nested list comprehension with flattening?",
    "codeSnippet": "nested = [[1, 2], [3, 4]]\nflat = [num for sub in nested for num in sub]\nprint(flat)",
    "codeLanguage": "python",
    "options": [
      "[1, 2, 3, 4]",
      "[[1, 2], [3, 4]]",
      "[1, 3, 2, 4]",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "The outer loop for sub in nested runs first, and inner for num in sub flattens the list to [1, 2, 3, 4].",
    "skillCategory": "List Flattening"
  },
  {
    "id": "py-eb-149",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when deleting an item from a dictionary using del?",
    "codeSnippet": "data = {\"x\": 10, \"y\": 20}\ndel data[\"x\"]\nprint(len(data))",
    "codeLanguage": "python",
    "options": [
      "1",
      "2",
      "0",
      "KeyError"
    ],
    "correctOptionIndex": 0,
    "explanation": "del data[\"x\"] removes key \"x\" and its value, leaving 1 item.",
    "skillCategory": "Dict Deletion"
  },
  {
    "id": "py-eb-150",
    "trackId": "python",
    "domain": "Data Structures, Comprehensions & Slicing",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of merging two dictionaries using the | union operator in Python 3.9+?",
    "codeSnippet": "d1 = {\"a\": 1, \"b\": 2}\nd2 = {\"b\": 99, \"c\": 3}\nprint(d1 | d2)",
    "codeLanguage": "python",
    "options": [
      "{\"a\": 1, \"b\": 99, \"c\": 3}",
      "{\"a\": 1, \"b\": 2, \"c\": 3}",
      "{\"b\": 99}",
      "TypeError"
    ],
    "correctOptionIndex": 0,
    "explanation": "In Python 3.9+, the | operator merges dictionaries. Keys in the right dictionary (d2) overwrite matching keys in d1: b becomes 99.",
    "skillCategory": "Dict Merge Operator"
  }
];
