import { Track } from '../../types';

export const R_TRACK: Track = {
  id: "r",
  title: "R: Data Science, Statistics & Visualization (150 Topics)",
  slug: "r",
  language: "r",
  icon: "BarChart2",
  color: "from-blue-500 to-indigo-600",
  tagline: "Master statistical computing, exploratory data analysis, dplyr wrangling, and ggplot2 across 150 topics.",
  description: "From atomic vectors, matrices, and data frames to functional programming with the apply family, tidyverse pipelines, hypothesis testing, and publication-ready graphics.",
  lessons: [
  {
    "id": "r-1-why-r-designed-for-data-scienc",
    "title": "1. Why R? Designed for Data Science and Statistical Analysis",
    "slug": "lesson-1-why-r-designed-for-data-scienc",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "R is the premier environment for statistical computing.",
    "concepts": [
      "Why R? Designed for Data Science and Statistical Analysis",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Why R? Designed for Data Science and Statistical Analysis gives you complete architectural control.",
    "explanationMarkdown": "### Why R? Designed for Data Science and Statistical Analysis\n\nR is the premier environment for statistical computing.\n\n```r\nscores <- 95\nprint(scores)\n```",
    "workedExample": {
      "title": "Worked Example: Why R? Designed for Data Science and Statistical Analysis",
      "code": "scores <- 95\nprint(scores)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why R? Designed for Data Science and Statistical Analysis.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why R? Designed for Data Science and Statistical Analysis.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Why R? Designed for Data Science and Statistical Analysis\n# TODO: Write code below\n\n",
    "solutionCode": "scores <- 95\nprint(scores)\n",
    "hints": [
      "Write:\nscores <- 95\nprint(scores)"
    ],
    "testCases": [
      {
        "id": "r-1-tc-1",
        "description": "Verifies correct implementation for Why R? Designed for Data Science and Statistical Analysis",
        "testFn": "code.includes('print') || logs.length > 0"
      }
    ]
  },
  {
    "id": "r-2-r-assignment-operators-vs",
    "title": "2. R Assignment Operators: <- vs =",
    "slug": "lesson-2-r-assignment-operators-vs",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Idiomatic R relies on the left-assignment arrow <-.",
    "concepts": [
      "R Assignment Operators: <- vs =",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: R Assignment Operators: <- vs = gives you complete architectural control.",
    "explanationMarkdown": "### R Assignment Operators: <- vs =\n\nIdiomatic R relies on the left-assignment arrow <-.\n\n```r\nx <- 42\ncat('Value:', x)\n```",
    "workedExample": {
      "title": "Worked Example: R Assignment Operators: <- vs =",
      "code": "x <- 42\ncat('Value:', x)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for R Assignment Operators: <- vs =.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of R Assignment Operators: <- vs =.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement R Assignment Operators: <- vs =\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 42\ncat('Value:', x)\n",
    "hints": [
      "Write:\nx <- 42\ncat('Value:', x)"
    ],
    "testCases": [
      {
        "id": "r-2-tc-1",
        "description": "Verifies correct implementation for R Assignment Operators: <- vs =",
        "testFn": "code.includes('<-')"
      }
    ]
  },
  {
    "id": "r-3-numeric-and-integer-data-types",
    "title": "3. Numeric and Integer Data Types (1L vs 1.0)",
    "slug": "lesson-3-numeric-and-integer-data-types",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Integers are marked with L; standard numbers are double.",
    "concepts": [
      "Numeric and Integer Data Types (1L vs 1.0)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Numeric and Integer Data Types (1L vs 1.0) gives you complete architectural control.",
    "explanationMarkdown": "### Numeric and Integer Data Types (1L vs 1.0)\n\nIntegers are marked with L; standard numbers are double.\n\n```r\nnum <- 42\nint_val <- 42L\ncat(typeof(num), typeof(int_val))\n```",
    "workedExample": {
      "title": "Worked Example: Numeric and Integer Data Types (1L vs 1.0)",
      "code": "num <- 42\nint_val <- 42L\ncat(typeof(num), typeof(int_val))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Numeric and Integer Data Types (1L vs 1.0).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Numeric and Integer Data Types (1L vs 1.0).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Numeric and Integer Data Types (1L vs 1.0)\n# TODO: Write code below\n\n",
    "solutionCode": "num <- 42\nint_val <- 42L\ncat(typeof(num), typeof(int_val))\n",
    "hints": [
      "Write:\nnum <- 42\nint_val <- 42L\ncat(typeof(num), typeof(int_val))"
    ],
    "testCases": [
      {
        "id": "r-3-tc-1",
        "description": "Verifies correct implementation for Numeric and Integer Data Types (1L vs 1.0)",
        "testFn": "code.includes('42L')"
      }
    ]
  },
  {
    "id": "r-4-character-strings-and-quotes",
    "title": "4. Character Strings and Quotes",
    "slug": "lesson-4-character-strings-and-quotes",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Strings can use single or double quotes in R.",
    "concepts": [
      "Character Strings and Quotes",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Character Strings and Quotes gives you complete architectural control.",
    "explanationMarkdown": "### Character Strings and Quotes\n\nStrings can use single or double quotes in R.\n\n```r\nmsg <- \"Hello, R!\"\nprint(msg)\n```",
    "workedExample": {
      "title": "Worked Example: Character Strings and Quotes",
      "code": "msg <- \"Hello, R!\"\nprint(msg)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Character Strings and Quotes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Character Strings and Quotes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Character Strings and Quotes\n# TODO: Write code below\n\n",
    "solutionCode": "msg <- \"Hello, R!\"\nprint(msg)\n",
    "hints": [
      "Write:\nmsg <- \"Hello, R!\"\nprint(msg)"
    ],
    "testCases": [
      {
        "id": "r-4-tc-1",
        "description": "Verifies correct implementation for Character Strings and Quotes",
        "testFn": "code.includes('print')"
      }
    ]
  },
  {
    "id": "r-5-logical-booleans-true-and-fals",
    "title": "5. Logical Booleans: TRUE and FALSE",
    "slug": "lesson-5-logical-booleans-true-and-fals",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "R uses full capital TRUE (T) and FALSE (F).",
    "concepts": [
      "Logical Booleans: TRUE and FALSE",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Logical Booleans: TRUE and FALSE gives you complete architectural control.",
    "explanationMarkdown": "### Logical Booleans: TRUE and FALSE\n\nR uses full capital TRUE (T) and FALSE (F).\n\n```r\nis_valid <- TRUE\nprint(is_valid)\n```",
    "workedExample": {
      "title": "Worked Example: Logical Booleans: TRUE and FALSE",
      "code": "is_valid <- TRUE\nprint(is_valid)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logical Booleans: TRUE and FALSE.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logical Booleans: TRUE and FALSE.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Logical Booleans: TRUE and FALSE\n# TODO: Write code below\n\n",
    "solutionCode": "is_valid <- TRUE\nprint(is_valid)\n",
    "hints": [
      "Write:\nis_valid <- TRUE\nprint(is_valid)"
    ],
    "testCases": [
      {
        "id": "r-5-tc-1",
        "description": "Verifies correct implementation for Logical Booleans: TRUE and FALSE",
        "testFn": "code.includes('TRUE')"
      }
    ]
  },
  {
    "id": "r-6-the-typeof-and-class-inspectio",
    "title": "6. The typeof() and class() Inspection Functions",
    "slug": "lesson-6-the-typeof-and-class-inspectio",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "typeof() inspects internal storage; class() gives high-level type.",
    "concepts": [
      "The typeof() and class() Inspection Functions",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The typeof() and class() Inspection Functions gives you complete architectural control.",
    "explanationMarkdown": "### The typeof() and class() Inspection Functions\n\ntypeof() inspects internal storage; class() gives high-level type.\n\n```r\nx <- 3.14\ncat(typeof(x), class(x))\n```",
    "workedExample": {
      "title": "Worked Example: The typeof() and class() Inspection Functions",
      "code": "x <- 3.14\ncat(typeof(x), class(x))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The typeof() and class() Inspection Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The typeof() and class() Inspection Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The typeof() and class() Inspection Functions\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 3.14\ncat(typeof(x), class(x))\n",
    "hints": [
      "Write:\nx <- 3.14\ncat(typeof(x), class(x))"
    ],
    "testCases": [
      {
        "id": "r-6-tc-1",
        "description": "Verifies correct implementation for The typeof() and class() Inspection Functions",
        "testFn": "code.includes('typeof')"
      }
    ]
  },
  {
    "id": "r-7-missing-values-na-vs-null-vs-n",
    "title": "7. Missing Values: NA vs NULL vs NaN",
    "slug": "lesson-7-missing-values-na-vs-null-vs-n",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "NA indicates missing data; NULL is empty; NaN is undefined.",
    "concepts": [
      "Missing Values: NA vs NULL vs NaN",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Missing Values: NA vs NULL vs NaN gives you complete architectural control.",
    "explanationMarkdown": "### Missing Values: NA vs NULL vs NaN\n\nNA indicates missing data; NULL is empty; NaN is undefined.\n\n```r\nval <- NA\nprint(is.na(val))\n```",
    "workedExample": {
      "title": "Worked Example: Missing Values: NA vs NULL vs NaN",
      "code": "val <- NA\nprint(is.na(val))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Missing Values: NA vs NULL vs NaN.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Missing Values: NA vs NULL vs NaN.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Missing Values: NA vs NULL vs NaN\n# TODO: Write code below\n\n",
    "solutionCode": "val <- NA\nprint(is.na(val))\n",
    "hints": [
      "Write:\nval <- NA\nprint(is.na(val))"
    ],
    "testCases": [
      {
        "id": "r-7-tc-1",
        "description": "Verifies correct implementation for Missing Values: NA vs NULL vs NaN",
        "testFn": "code.includes('is.na')"
      }
    ]
  },
  {
    "id": "r-8-string-concatenation-with-past",
    "title": "8. String Concatenation with paste() and paste0()",
    "slug": "lesson-8-string-concatenation-with-past",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "paste() adds spaces between elements; paste0() joins with no separator.",
    "concepts": [
      "String Concatenation with paste() and paste0()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: String Concatenation with paste() and paste0() gives you complete architectural control.",
    "explanationMarkdown": "### String Concatenation with paste() and paste0()\n\npaste() adds spaces between elements; paste0() joins with no separator.\n\n```r\ngreeting <- paste('Data', 'Science')\nprint(greeting)\n```",
    "workedExample": {
      "title": "Worked Example: String Concatenation with paste() and paste0()",
      "code": "greeting <- paste('Data', 'Science')\nprint(greeting)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Concatenation with paste() and paste0().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Concatenation with paste() and paste0().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement String Concatenation with paste() and paste0()\n# TODO: Write code below\n\n",
    "solutionCode": "greeting <- paste('Data', 'Science')\nprint(greeting)\n",
    "hints": [
      "Write:\ngreeting <- paste('Data', 'Science')\nprint(greeting)"
    ],
    "testCases": [
      {
        "id": "r-8-tc-1",
        "description": "Verifies correct implementation for String Concatenation with paste() and paste0()",
        "testFn": "code.includes('paste')"
      }
    ]
  },
  {
    "id": "r-9-basic-arithmetic-operators",
    "title": "9. Basic Arithmetic Operators (+, -, *, /, ^)",
    "slug": "lesson-9-basic-arithmetic-operators",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Perform mathematical operations in R.",
    "concepts": [
      "Basic Arithmetic Operators (+, -, *, /, ^)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Basic Arithmetic Operators (+, -, *, /, ^) gives you complete architectural control.",
    "explanationMarkdown": "### Basic Arithmetic Operators (+, -, *, /, ^)\n\nPerform mathematical operations in R.\n\n```r\nresult <- (10 + 5) * 2\nprint(result)\n```",
    "workedExample": {
      "title": "Worked Example: Basic Arithmetic Operators (+, -, *, /, ^)",
      "code": "result <- (10 + 5) * 2\nprint(result)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Basic Arithmetic Operators (+, -, *, /, ^).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Basic Arithmetic Operators (+, -, *, /, ^).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Basic Arithmetic Operators (+, -, *, /, ^)\n# TODO: Write code below\n\n",
    "solutionCode": "result <- (10 + 5) * 2\nprint(result)\n",
    "hints": [
      "Write:\nresult <- (10 + 5) * 2\nprint(result)"
    ],
    "testCases": [
      {
        "id": "r-9-tc-1",
        "description": "Verifies correct implementation for Basic Arithmetic Operators (+, -, *, /, ^)",
        "testFn": "code.includes('print')"
      }
    ]
  },
  {
    "id": "r-10-modulus-and-integer-division",
    "title": "10. Modulus (%%) and Integer Division (%/%)",
    "slug": "lesson-10-modulus-and-integer-division",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Calculate division remainders and quotient floors.",
    "concepts": [
      "Modulus (%%) and Integer Division (%/%)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Modulus (%%) and Integer Division (%/%) gives you complete architectural control.",
    "explanationMarkdown": "### Modulus (%%) and Integer Division (%/%)\n\nCalculate division remainders and quotient floors.\n\n```r\nrem <- 17 %% 5\nprint(rem)\n```",
    "workedExample": {
      "title": "Worked Example: Modulus (%%) and Integer Division (%/%)",
      "code": "rem <- 17 %% 5\nprint(rem)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modulus (%%) and Integer Division (%/%).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modulus (%%) and Integer Division (%/%).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Modulus (%%) and Integer Division (%/%)\n# TODO: Write code below\n\n",
    "solutionCode": "rem <- 17 %% 5\nprint(rem)\n",
    "hints": [
      "Write:\nrem <- 17 %% 5\nprint(rem)"
    ],
    "testCases": [
      {
        "id": "r-10-tc-1",
        "description": "Verifies correct implementation for Modulus (%%) and Integer Division (%/%)",
        "testFn": "code.includes('%%')"
      }
    ]
  },
  {
    "id": "r-11-relational-comparisons",
    "title": "11. Relational Comparisons (==, !=, <, >, <=, >=)",
    "slug": "lesson-11-relational-comparisons",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate truth values between operands.",
    "concepts": [
      "Relational Comparisons (==, !=, <, >, <=, >=)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Relational Comparisons (==, !=, <, >, <=, >=) gives you complete architectural control.",
    "explanationMarkdown": "### Relational Comparisons (==, !=, <, >, <=, >=)\n\nEvaluate truth values between operands.\n\n```r\ncmp <- 10 > 5\nprint(cmp)\n```",
    "workedExample": {
      "title": "Worked Example: Relational Comparisons (==, !=, <, >, <=, >=)",
      "code": "cmp <- 10 > 5\nprint(cmp)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Relational Comparisons (==, !=, <, >, <=, >=).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Relational Comparisons (==, !=, <, >, <=, >=).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Relational Comparisons (==, !=, <, >, <=, >=)\n# TODO: Write code below\n\n",
    "solutionCode": "cmp <- 10 > 5\nprint(cmp)\n",
    "hints": [
      "Write:\ncmp <- 10 > 5\nprint(cmp)"
    ],
    "testCases": [
      {
        "id": "r-11-tc-1",
        "description": "Verifies correct implementation for Relational Comparisons (==, !=, <, >, <=, >=)",
        "testFn": "code.includes('>')"
      }
    ]
  },
  {
    "id": "r-12-logical-operators",
    "title": "12. Logical Operators (&, |, !)",
    "slug": "lesson-12-logical-operators",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine logical expressions in R.",
    "concepts": [
      "Logical Operators (&, |, !)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Logical Operators (&, |, !) gives you complete architectural control.",
    "explanationMarkdown": "### Logical Operators (&, |, !)\n\nCombine logical expressions in R.\n\n```r\ncheck <- (5 > 2) & (10 > 3)\nprint(check)\n```",
    "workedExample": {
      "title": "Worked Example: Logical Operators (&, |, !)",
      "code": "check <- (5 > 2) & (10 > 3)\nprint(check)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logical Operators (&, |, !).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logical Operators (&, |, !).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Logical Operators (&, |, !)\n# TODO: Write code below\n\n",
    "solutionCode": "check <- (5 > 2) & (10 > 3)\nprint(check)\n",
    "hints": [
      "Write:\ncheck <- (5 > 2) & (10 > 3)\nprint(check)"
    ],
    "testCases": [
      {
        "id": "r-12-tc-1",
        "description": "Verifies correct implementation for Logical Operators (&, |, !)",
        "testFn": "code.includes('&')"
      }
    ]
  },
  {
    "id": "r-13-short-circuit-evaluation-and",
    "title": "13. Short-Circuit Evaluation (&& and ||)",
    "slug": "lesson-13-short-circuit-evaluation-and",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate single scalar logical values with short-circuiting.",
    "concepts": [
      "Short-Circuit Evaluation (&& and ||)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Short-Circuit Evaluation (&& and ||) gives you complete architectural control.",
    "explanationMarkdown": "### Short-Circuit Evaluation (&& and ||)\n\nEvaluate single scalar logical values with short-circuiting.\n\n```r\nres <- TRUE && FALSE\nprint(res)\n```",
    "workedExample": {
      "title": "Worked Example: Short-Circuit Evaluation (&& and ||)",
      "code": "res <- TRUE && FALSE\nprint(res)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Short-Circuit Evaluation (&& and ||).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Short-Circuit Evaluation (&& and ||).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Short-Circuit Evaluation (&& and ||)\n# TODO: Write code below\n\n",
    "solutionCode": "res <- TRUE && FALSE\nprint(res)\n",
    "hints": [
      "Write:\nres <- TRUE && FALSE\nprint(res)"
    ],
    "testCases": [
      {
        "id": "r-13-tc-1",
        "description": "Verifies correct implementation for Short-Circuit Evaluation (&& and ||)",
        "testFn": "code.includes('&&')"
      }
    ]
  },
  {
    "id": "r-14-workspace-management-ls-and-rm",
    "title": "14. Workspace Management: ls() and rm()",
    "slug": "lesson-14-workspace-management-ls-and-rm",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "List active objects and remove variables from environment.",
    "concepts": [
      "Workspace Management: ls() and rm()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Workspace Management: ls() and rm() gives you complete architectural control.",
    "explanationMarkdown": "### Workspace Management: ls() and rm()\n\nList active objects and remove variables from environment.\n\n```r\na <- 1\nb <- 2\ncat('Active vars:', 'a, b')\n```",
    "workedExample": {
      "title": "Worked Example: Workspace Management: ls() and rm()",
      "code": "a <- 1\nb <- 2\ncat('Active vars:', 'a, b')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Workspace Management: ls() and rm().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Workspace Management: ls() and rm().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Workspace Management: ls() and rm()\n# TODO: Write code below\n\n",
    "solutionCode": "a <- 1\nb <- 2\ncat('Active vars:', 'a, b')\n",
    "hints": [
      "Write:\na <- 1\nb <- 2\ncat('Active vars:', 'a, b')"
    ],
    "testCases": [
      {
        "id": "r-14-tc-1",
        "description": "Verifies correct implementation for Workspace Management: ls() and rm()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-15-getting-help-help-and-operator",
    "title": "15. Getting Help: help() and ? operator",
    "slug": "lesson-15-getting-help-help-and-operator",
    "language": "r",
    "category": "Module 1: R Syntax, Variables & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Access built-in R manual documentation.",
    "concepts": [
      "Getting Help: help() and ? operator",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Getting Help: help() and ? operator gives you complete architectural control.",
    "explanationMarkdown": "### Getting Help: help() and ? operator\n\nAccess built-in R manual documentation.\n\n```r\ncat('Help query syntax: ?mean')\n```",
    "workedExample": {
      "title": "Worked Example: Getting Help: help() and ? operator",
      "code": "cat('Help query syntax: ?mean')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Getting Help: help() and ? operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Getting Help: help() and ? operator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Getting Help: help() and ? operator\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Help query syntax: ?mean')\n",
    "hints": [
      "Write:\ncat('Help query syntax: ?mean')"
    ],
    "testCases": [
      {
        "id": "r-15-tc-1",
        "description": "Verifies correct implementation for Getting Help: help() and ? operator",
        "testFn": "code.includes('cat')"
      }
    ]
  },
  {
    "id": "r-16-creating-vectors-with-c-concat",
    "title": "16. Creating Vectors with c() Concatenate",
    "slug": "lesson-16-creating-vectors-with-c-concat",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Vectors are the atomic bedrock of R.",
    "concepts": [
      "Creating Vectors with c() Concatenate",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Vectors with c() Concatenate gives you complete architectural control.",
    "explanationMarkdown": "### Creating Vectors with c() Concatenate\n\nVectors are the atomic bedrock of R.\n\n```r\nvec <- c(10, 20, 30, 40)\nprint(vec)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Vectors with c() Concatenate",
      "code": "vec <- c(10, 20, 30, 40)\nprint(vec)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Vectors with c() Concatenate.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Vectors with c() Concatenate.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Vectors with c() Concatenate\n# TODO: Write code below\n\n",
    "solutionCode": "vec <- c(10, 20, 30, 40)\nprint(vec)\n",
    "hints": [
      "Write:\nvec <- c(10, 20, 30, 40)\nprint(vec)"
    ],
    "testCases": [
      {
        "id": "r-16-tc-1",
        "description": "Verifies correct implementation for Creating Vectors with c() Concatenate",
        "testFn": "code.includes('c(')"
      }
    ]
  },
  {
    "id": "r-17-generating-sequences-with-the-",
    "title": "17. Generating Sequences with the Colon (:) Operator",
    "slug": "lesson-17-generating-sequences-with-the-",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Generate integer sequences quickly.",
    "concepts": [
      "Generating Sequences with the Colon (:) Operator",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Generating Sequences with the Colon (:) Operator gives you complete architectural control.",
    "explanationMarkdown": "### Generating Sequences with the Colon (:) Operator\n\nGenerate integer sequences quickly.\n\n```r\nnums <- 1:10\nprint(nums)\n```",
    "workedExample": {
      "title": "Worked Example: Generating Sequences with the Colon (:) Operator",
      "code": "nums <- 1:10\nprint(nums)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generating Sequences with the Colon (:) Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generating Sequences with the Colon (:) Operator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Generating Sequences with the Colon (:) Operator\n# TODO: Write code below\n\n",
    "solutionCode": "nums <- 1:10\nprint(nums)\n",
    "hints": [
      "Write:\nnums <- 1:10\nprint(nums)"
    ],
    "testCases": [
      {
        "id": "r-17-tc-1",
        "description": "Verifies correct implementation for Generating Sequences with the Colon (:) Operator",
        "testFn": "code.includes(':')"
      }
    ]
  },
  {
    "id": "r-18-sequence-generation-with-seq-f",
    "title": "18. Sequence Generation with seq(from, to, by)",
    "slug": "lesson-18-sequence-generation-with-seq-f",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Create custom stepped sequences.",
    "concepts": [
      "Sequence Generation with seq(from, to, by)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Sequence Generation with seq(from, to, by) gives you complete architectural control.",
    "explanationMarkdown": "### Sequence Generation with seq(from, to, by)\n\nCreate custom stepped sequences.\n\n```r\ns <- seq(0, 100, by = 20)\nprint(s)\n```",
    "workedExample": {
      "title": "Worked Example: Sequence Generation with seq(from, to, by)",
      "code": "s <- seq(0, 100, by = 20)\nprint(s)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sequence Generation with seq(from, to, by).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sequence Generation with seq(from, to, by).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sequence Generation with seq(from, to, by)\n# TODO: Write code below\n\n",
    "solutionCode": "s <- seq(0, 100, by = 20)\nprint(s)\n",
    "hints": [
      "Write:\ns <- seq(0, 100, by = 20)\nprint(s)"
    ],
    "testCases": [
      {
        "id": "r-18-tc-1",
        "description": "Verifies correct implementation for Sequence Generation with seq(from, to, by)",
        "testFn": "code.includes('seq')"
      }
    ]
  },
  {
    "id": "r-19-repeating-elements-with-rep",
    "title": "19. Repeating Elements with rep()",
    "slug": "lesson-19-repeating-elements-with-rep",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Replicate values or patterns across vectors.",
    "concepts": [
      "Repeating Elements with rep()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Repeating Elements with rep() gives you complete architectural control.",
    "explanationMarkdown": "### Repeating Elements with rep()\n\nReplicate values or patterns across vectors.\n\n```r\nr <- rep(5, times = 4)\nprint(r)\n```",
    "workedExample": {
      "title": "Worked Example: Repeating Elements with rep()",
      "code": "r <- rep(5, times = 4)\nprint(r)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Repeating Elements with rep().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Repeating Elements with rep().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Repeating Elements with rep()\n# TODO: Write code below\n\n",
    "solutionCode": "r <- rep(5, times = 4)\nprint(r)\n",
    "hints": [
      "Write:\nr <- rep(5, times = 4)\nprint(r)"
    ],
    "testCases": [
      {
        "id": "r-19-tc-1",
        "description": "Verifies correct implementation for Repeating Elements with rep()",
        "testFn": "code.includes('rep')"
      }
    ]
  },
  {
    "id": "r-20-vector-length-with-length",
    "title": "20. Vector Length with length()",
    "slug": "lesson-20-vector-length-with-length",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query the total element count of a vector.",
    "concepts": [
      "Vector Length with length()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vector Length with length() gives you complete architectural control.",
    "explanationMarkdown": "### Vector Length with length()\n\nQuery the total element count of a vector.\n\n```r\nv <- c(2, 4, 6, 8)\nprint(length(v))\n```",
    "workedExample": {
      "title": "Worked Example: Vector Length with length()",
      "code": "v <- c(2, 4, 6, 8)\nprint(length(v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vector Length with length().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vector Length with length().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vector Length with length()\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(2, 4, 6, 8)\nprint(length(v))\n",
    "hints": [
      "Write:\nv <- c(2, 4, 6, 8)\nprint(length(v))"
    ],
    "testCases": [
      {
        "id": "r-20-tc-1",
        "description": "Verifies correct implementation for Vector Length with length()",
        "testFn": "code.includes('length')"
      }
    ]
  },
  {
    "id": "r-21-1-based-indexing-in-r-crucial-",
    "title": "21. 1-Based Indexing in R (Crucial Difference)",
    "slug": "lesson-21-1-based-indexing-in-r-crucial-",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "R vectors index starting at index 1, not 0.",
    "concepts": [
      "1-Based Indexing in R (Crucial Difference)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: 1-Based Indexing in R (Crucial Difference) gives you complete architectural control.",
    "explanationMarkdown": "### 1-Based Indexing in R (Crucial Difference)\n\nR vectors index starting at index 1, not 0.\n\n```r\nv <- c('first', 'second', 'third')\nprint(v[1])\n```",
    "workedExample": {
      "title": "Worked Example: 1-Based Indexing in R (Crucial Difference)",
      "code": "v <- c('first', 'second', 'third')\nprint(v[1])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for 1-Based Indexing in R (Crucial Difference).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of 1-Based Indexing in R (Crucial Difference).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement 1-Based Indexing in R (Crucial Difference)\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c('first', 'second', 'third')\nprint(v[1])\n",
    "hints": [
      "Write:\nv <- c('first', 'second', 'third')\nprint(v[1])"
    ],
    "testCases": [
      {
        "id": "r-21-tc-1",
        "description": "Verifies correct implementation for 1-Based Indexing in R (Crucial Difference)",
        "testFn": "code.includes('[1]')"
      }
    ]
  },
  {
    "id": "r-22-vector-slicing-with-multi-inde",
    "title": "22. Vector Slicing with Multi-Index Vectors",
    "slug": "lesson-22-vector-slicing-with-multi-inde",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract multiple elements using an index vector.",
    "concepts": [
      "Vector Slicing with Multi-Index Vectors",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vector Slicing with Multi-Index Vectors gives you complete architectural control.",
    "explanationMarkdown": "### Vector Slicing with Multi-Index Vectors\n\nExtract multiple elements using an index vector.\n\n```r\nv <- c(10, 20, 30, 40, 50)\nprint(v[c(1, 3, 5)])\n```",
    "workedExample": {
      "title": "Worked Example: Vector Slicing with Multi-Index Vectors",
      "code": "v <- c(10, 20, 30, 40, 50)\nprint(v[c(1, 3, 5)])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vector Slicing with Multi-Index Vectors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vector Slicing with Multi-Index Vectors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vector Slicing with Multi-Index Vectors\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(10, 20, 30, 40, 50)\nprint(v[c(1, 3, 5)])\n",
    "hints": [
      "Write:\nv <- c(10, 20, 30, 40, 50)\nprint(v[c(1, 3, 5)])"
    ],
    "testCases": [
      {
        "id": "r-22-tc-1",
        "description": "Verifies correct implementation for Vector Slicing with Multi-Index Vectors",
        "testFn": "code.includes('[')"
      }
    ]
  },
  {
    "id": "r-23-negative-indexing-excluding-el",
    "title": "23. Negative Indexing: Excluding Elements in R",
    "slug": "lesson-23-negative-indexing-excluding-el",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Negative indices drop specific elements.",
    "concepts": [
      "Negative Indexing: Excluding Elements in R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Negative Indexing: Excluding Elements in R gives you complete architectural control.",
    "explanationMarkdown": "### Negative Indexing: Excluding Elements in R\n\nNegative indices drop specific elements.\n\n```r\nv <- c(1, 2, 3, 4)\nprint(v[-1])\n```",
    "workedExample": {
      "title": "Worked Example: Negative Indexing: Excluding Elements in R",
      "code": "v <- c(1, 2, 3, 4)\nprint(v[-1])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Negative Indexing: Excluding Elements in R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Negative Indexing: Excluding Elements in R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Negative Indexing: Excluding Elements in R\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(1, 2, 3, 4)\nprint(v[-1])\n",
    "hints": [
      "Write:\nv <- c(1, 2, 3, 4)\nprint(v[-1])"
    ],
    "testCases": [
      {
        "id": "r-23-tc-1",
        "description": "Verifies correct implementation for Negative Indexing: Excluding Elements in R",
        "testFn": "code.includes('[-')"
      }
    ]
  },
  {
    "id": "r-24-vectorized-arithmetic-element-",
    "title": "24. Vectorized Arithmetic: Element-Wise Math",
    "slug": "lesson-24-vectorized-arithmetic-element-",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Operations apply to every element automatically.",
    "concepts": [
      "Vectorized Arithmetic: Element-Wise Math",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vectorized Arithmetic: Element-Wise Math gives you complete architectural control.",
    "explanationMarkdown": "### Vectorized Arithmetic: Element-Wise Math\n\nOperations apply to every element automatically.\n\n```r\nv <- c(1, 2, 3)\nprint(v * 2)\n```",
    "workedExample": {
      "title": "Worked Example: Vectorized Arithmetic: Element-Wise Math",
      "code": "v <- c(1, 2, 3)\nprint(v * 2)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vectorized Arithmetic: Element-Wise Math.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vectorized Arithmetic: Element-Wise Math.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vectorized Arithmetic: Element-Wise Math\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(1, 2, 3)\nprint(v * 2)\n",
    "hints": [
      "Write:\nv <- c(1, 2, 3)\nprint(v * 2)"
    ],
    "testCases": [
      {
        "id": "r-24-tc-1",
        "description": "Verifies correct implementation for Vectorized Arithmetic: Element-Wise Math",
        "testFn": "code.includes('*')"
      }
    ]
  },
  {
    "id": "r-25-vector-recycling-rule-in-r",
    "title": "25. Vector Recycling Rule in R",
    "slug": "lesson-25-vector-recycling-rule-in-r",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Shorter vectors are recycled to match longer vectors.",
    "concepts": [
      "Vector Recycling Rule in R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vector Recycling Rule in R gives you complete architectural control.",
    "explanationMarkdown": "### Vector Recycling Rule in R\n\nShorter vectors are recycled to match longer vectors.\n\n```r\na <- c(1, 2)\nb <- c(10, 20, 30, 40)\nprint(a + b)\n```",
    "workedExample": {
      "title": "Worked Example: Vector Recycling Rule in R",
      "code": "a <- c(1, 2)\nb <- c(10, 20, 30, 40)\nprint(a + b)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vector Recycling Rule in R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vector Recycling Rule in R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vector Recycling Rule in R\n# TODO: Write code below\n\n",
    "solutionCode": "a <- c(1, 2)\nb <- c(10, 20, 30, 40)\nprint(a + b)\n",
    "hints": [
      "Write:\na <- c(1, 2)\nb <- c(10, 20, 30, 40)\nprint(a + b)"
    ],
    "testCases": [
      {
        "id": "r-25-tc-1",
        "description": "Verifies correct implementation for Vector Recycling Rule in R",
        "testFn": "code.includes('+')"
      }
    ]
  },
  {
    "id": "r-26-logical-subsetting-filtering-v",
    "title": "26. Logical Subsetting (Filtering Vectors)",
    "slug": "lesson-26-logical-subsetting-filtering-v",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter elements using boolean conditions.",
    "concepts": [
      "Logical Subsetting (Filtering Vectors)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Logical Subsetting (Filtering Vectors) gives you complete architectural control.",
    "explanationMarkdown": "### Logical Subsetting (Filtering Vectors)\n\nFilter elements using boolean conditions.\n\n```r\nv <- c(12, 45, 8, 92, 33)\nprint(v[v > 30])\n```",
    "workedExample": {
      "title": "Worked Example: Logical Subsetting (Filtering Vectors)",
      "code": "v <- c(12, 45, 8, 92, 33)\nprint(v[v > 30])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logical Subsetting (Filtering Vectors).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logical Subsetting (Filtering Vectors).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Logical Subsetting (Filtering Vectors)\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(12, 45, 8, 92, 33)\nprint(v[v > 30])\n",
    "hints": [
      "Write:\nv <- c(12, 45, 8, 92, 33)\nprint(v[v > 30])"
    ],
    "testCases": [
      {
        "id": "r-26-tc-1",
        "description": "Verifies correct implementation for Logical Subsetting (Filtering Vectors)",
        "testFn": "code.includes('>')"
      }
    ]
  },
  {
    "id": "r-27-named-vectors-and-accessing-by",
    "title": "27. Named Vectors and Accessing by Name",
    "slug": "lesson-27-named-vectors-and-accessing-by",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign descriptive keys to vector components.",
    "concepts": [
      "Named Vectors and Accessing by Name",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Named Vectors and Accessing by Name gives you complete architectural control.",
    "explanationMarkdown": "### Named Vectors and Accessing by Name\n\nAssign descriptive keys to vector components.\n\n```r\nages <- c(alice = 25, bob = 30)\nprint(ages['alice'])\n```",
    "workedExample": {
      "title": "Worked Example: Named Vectors and Accessing by Name",
      "code": "ages <- c(alice = 25, bob = 30)\nprint(ages['alice'])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Named Vectors and Accessing by Name.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Named Vectors and Accessing by Name.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Named Vectors and Accessing by Name\n# TODO: Write code below\n\n",
    "solutionCode": "ages <- c(alice = 25, bob = 30)\nprint(ages['alice'])\n",
    "hints": [
      "Write:\nages <- c(alice = 25, bob = 30)\nprint(ages['alice'])"
    ],
    "testCases": [
      {
        "id": "r-27-tc-1",
        "description": "Verifies correct implementation for Named Vectors and Accessing by Name",
        "testFn": "code.includes('[')"
      }
    ]
  },
  {
    "id": "r-28-statistical-summary-functions-",
    "title": "28. Statistical Summary Functions: sum(), mean(), prod()",
    "slug": "lesson-28-statistical-summary-functions-",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Calculate basic summary statistics.",
    "concepts": [
      "Statistical Summary Functions: sum(), mean(), prod()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Statistical Summary Functions: sum(), mean(), prod() gives you complete architectural control.",
    "explanationMarkdown": "### Statistical Summary Functions: sum(), mean(), prod()\n\nCalculate basic summary statistics.\n\n```r\nscores <- c(80, 90, 100)\ncat('Mean:', mean(scores))\n```",
    "workedExample": {
      "title": "Worked Example: Statistical Summary Functions: sum(), mean(), prod()",
      "code": "scores <- c(80, 90, 100)\ncat('Mean:', mean(scores))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Statistical Summary Functions: sum(), mean(), prod().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Statistical Summary Functions: sum(), mean(), prod().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Statistical Summary Functions: sum(), mean(), prod()\n# TODO: Write code below\n\n",
    "solutionCode": "scores <- c(80, 90, 100)\ncat('Mean:', mean(scores))\n",
    "hints": [
      "Write:\nscores <- c(80, 90, 100)\ncat('Mean:', mean(scores))"
    ],
    "testCases": [
      {
        "id": "r-28-tc-1",
        "description": "Verifies correct implementation for Statistical Summary Functions: sum(), mean(), prod()",
        "testFn": "code.includes('mean')"
      }
    ]
  },
  {
    "id": "r-29-vector-min-max-range-and-summa",
    "title": "29. Vector Min, Max, Range, and Summary()",
    "slug": "lesson-29-vector-min-max-range-and-summa",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find extremes and quantile distributions.",
    "concepts": [
      "Vector Min, Max, Range, and Summary()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vector Min, Max, Range, and Summary() gives you complete architectural control.",
    "explanationMarkdown": "### Vector Min, Max, Range, and Summary()\n\nFind extremes and quantile distributions.\n\n```r\nv <- c(4, 18, 2, 99)\ncat('Min:', min(v), 'Max:', max(v))\n```",
    "workedExample": {
      "title": "Worked Example: Vector Min, Max, Range, and Summary()",
      "code": "v <- c(4, 18, 2, 99)\ncat('Min:', min(v), 'Max:', max(v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vector Min, Max, Range, and Summary().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vector Min, Max, Range, and Summary().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vector Min, Max, Range, and Summary()\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(4, 18, 2, 99)\ncat('Min:', min(v), 'Max:', max(v))\n",
    "hints": [
      "Write:\nv <- c(4, 18, 2, 99)\ncat('Min:', min(v), 'Max:', max(v))"
    ],
    "testCases": [
      {
        "id": "r-29-tc-1",
        "description": "Verifies correct implementation for Vector Min, Max, Range, and Summary()",
        "testFn": "code.includes('min')"
      }
    ]
  },
  {
    "id": "r-30-sorting-and-ordering-vectors-s",
    "title": "30. Sorting and Ordering Vectors (sort vs order)",
    "slug": "lesson-30-sorting-and-ordering-vectors-s",
    "language": "r",
    "category": "Module 2: Vectors & Vectorized Arithmetic",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Rearrange vector items or retrieve permutation indices.",
    "concepts": [
      "Sorting and Ordering Vectors (sort vs order)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Sorting and Ordering Vectors (sort vs order) gives you complete architectural control.",
    "explanationMarkdown": "### Sorting and Ordering Vectors (sort vs order)\n\nRearrange vector items or retrieve permutation indices.\n\n```r\nv <- c(50, 10, 30)\nprint(sort(v))\n```",
    "workedExample": {
      "title": "Worked Example: Sorting and Ordering Vectors (sort vs order)",
      "code": "v <- c(50, 10, 30)\nprint(sort(v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting and Ordering Vectors (sort vs order).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting and Ordering Vectors (sort vs order).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sorting and Ordering Vectors (sort vs order)\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(50, 10, 30)\nprint(sort(v))\n",
    "hints": [
      "Write:\nv <- c(50, 10, 30)\nprint(sort(v))"
    ],
    "testCases": [
      {
        "id": "r-30-tc-1",
        "description": "Verifies correct implementation for Sorting and Ordering Vectors (sort vs order)",
        "testFn": "code.includes('sort')"
      }
    ]
  },
  {
    "id": "r-31-creating-matrices-with-matrix",
    "title": "31. Creating Matrices with matrix()",
    "slug": "lesson-31-creating-matrices-with-matrix",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Organize elements into rows and columns.",
    "concepts": [
      "Creating Matrices with matrix()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Matrices with matrix() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Matrices with matrix()\n\nOrganize elements into rows and columns.\n\n```r\nm <- matrix(1:6, nrow = 2, ncol = 3)\nprint(m)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Matrices with matrix()",
      "code": "m <- matrix(1:6, nrow = 2, ncol = 3)\nprint(m)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Matrices with matrix().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Matrices with matrix().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Matrices with matrix()\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:6, nrow = 2, ncol = 3)\nprint(m)\n",
    "hints": [
      "Write:\nm <- matrix(1:6, nrow = 2, ncol = 3)\nprint(m)"
    ],
    "testCases": [
      {
        "id": "r-31-tc-1",
        "description": "Verifies correct implementation for Creating Matrices with matrix()",
        "testFn": "code.includes('matrix')"
      }
    ]
  },
  {
    "id": "r-32-matrix-filling-order-byrow-tru",
    "title": "32. Matrix Filling Order: byrow = TRUE vs FALSE",
    "slug": "lesson-32-matrix-filling-order-byrow-tru",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Choose row-major or column-major orientation.",
    "concepts": [
      "Matrix Filling Order: byrow = TRUE vs FALSE",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Filling Order: byrow = TRUE vs FALSE gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Filling Order: byrow = TRUE vs FALSE\n\nChoose row-major or column-major orientation.\n\n```r\nm <- matrix(1:4, nrow = 2, byrow = TRUE)\nprint(m)\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Filling Order: byrow = TRUE vs FALSE",
      "code": "m <- matrix(1:4, nrow = 2, byrow = TRUE)\nprint(m)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Filling Order: byrow = TRUE vs FALSE.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Filling Order: byrow = TRUE vs FALSE.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Filling Order: byrow = TRUE vs FALSE\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:4, nrow = 2, byrow = TRUE)\nprint(m)\n",
    "hints": [
      "Write:\nm <- matrix(1:4, nrow = 2, byrow = TRUE)\nprint(m)"
    ],
    "testCases": [
      {
        "id": "r-32-tc-1",
        "description": "Verifies correct implementation for Matrix Filling Order: byrow = TRUE vs FALSE",
        "testFn": "code.includes('byrow')"
      }
    ]
  },
  {
    "id": "r-33-matrix-dimensions-dim-nrow-nco",
    "title": "33. Matrix Dimensions: dim(), nrow(), ncol()",
    "slug": "lesson-33-matrix-dimensions-dim-nrow-nco",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect 2D structural geometry.",
    "concepts": [
      "Matrix Dimensions: dim(), nrow(), ncol()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Dimensions: dim(), nrow(), ncol() gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Dimensions: dim(), nrow(), ncol()\n\nInspect 2D structural geometry.\n\n```r\nm <- matrix(1:12, nrow = 3)\nprint(dim(m))\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Dimensions: dim(), nrow(), ncol()",
      "code": "m <- matrix(1:12, nrow = 3)\nprint(dim(m))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Dimensions: dim(), nrow(), ncol().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Dimensions: dim(), nrow(), ncol().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Dimensions: dim(), nrow(), ncol()\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:12, nrow = 3)\nprint(dim(m))\n",
    "hints": [
      "Write:\nm <- matrix(1:12, nrow = 3)\nprint(dim(m))"
    ],
    "testCases": [
      {
        "id": "r-33-tc-1",
        "description": "Verifies correct implementation for Matrix Dimensions: dim(), nrow(), ncol()",
        "testFn": "code.includes('dim')"
      }
    ]
  },
  {
    "id": "r-34-matrix-indexing-m-row-col",
    "title": "34. Matrix Indexing: m[row, col]",
    "slug": "lesson-34-matrix-indexing-m-row-col",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract cells, full rows, or full columns.",
    "concepts": [
      "Matrix Indexing: m[row, col]",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Indexing: m[row, col] gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Indexing: m[row, col]\n\nExtract cells, full rows, or full columns.\n\n```r\nm <- matrix(1:9, nrow = 3)\nprint(m[1, 2])\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Indexing: m[row, col]",
      "code": "m <- matrix(1:9, nrow = 3)\nprint(m[1, 2])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Indexing: m[row, col].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Indexing: m[row, col].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Indexing: m[row, col]\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:9, nrow = 3)\nprint(m[1, 2])\n",
    "hints": [
      "Write:\nm <- matrix(1:9, nrow = 3)\nprint(m[1, 2])"
    ],
    "testCases": [
      {
        "id": "r-34-tc-1",
        "description": "Verifies correct implementation for Matrix Indexing: m[row, col]",
        "testFn": "code.includes('[1, 2]')"
      }
    ]
  },
  {
    "id": "r-35-extracting-entire-rows-and-col",
    "title": "35. Extracting Entire Rows and Columns",
    "slug": "lesson-35-extracting-entire-rows-and-col",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Leaving an index blank selects all elements.",
    "concepts": [
      "Extracting Entire Rows and Columns",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Extracting Entire Rows and Columns gives you complete architectural control.",
    "explanationMarkdown": "### Extracting Entire Rows and Columns\n\nLeaving an index blank selects all elements.\n\n```r\nm <- matrix(1:9, nrow = 3)\nprint(m[1, ])\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Entire Rows and Columns",
      "code": "m <- matrix(1:9, nrow = 3)\nprint(m[1, ])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Entire Rows and Columns.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Entire Rows and Columns.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Entire Rows and Columns\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:9, nrow = 3)\nprint(m[1, ])\n",
    "hints": [
      "Write:\nm <- matrix(1:9, nrow = 3)\nprint(m[1, ])"
    ],
    "testCases": [
      {
        "id": "r-35-tc-1",
        "description": "Verifies correct implementation for Extracting Entire Rows and Columns",
        "testFn": "code.includes('m[1,')"
      }
    ]
  },
  {
    "id": "r-36-assigning-row-and-column-names",
    "title": "36. Assigning Row and Column Names (rownames, colnames)",
    "slug": "lesson-36-assigning-row-and-column-names",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Add informative headers to matrix axes.",
    "concepts": [
      "Assigning Row and Column Names (rownames, colnames)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Assigning Row and Column Names (rownames, colnames) gives you complete architectural control.",
    "explanationMarkdown": "### Assigning Row and Column Names (rownames, colnames)\n\nAdd informative headers to matrix axes.\n\n```r\nm <- matrix(1:4, nrow = 2)\ncolnames(m) <- c('A', 'B')\nprint(m)\n```",
    "workedExample": {
      "title": "Worked Example: Assigning Row and Column Names (rownames, colnames)",
      "code": "m <- matrix(1:4, nrow = 2)\ncolnames(m) <- c('A', 'B')\nprint(m)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Assigning Row and Column Names (rownames, colnames).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Assigning Row and Column Names (rownames, colnames).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Assigning Row and Column Names (rownames, colnames)\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:4, nrow = 2)\ncolnames(m) <- c('A', 'B')\nprint(m)\n",
    "hints": [
      "Write:\nm <- matrix(1:4, nrow = 2)\ncolnames(m) <- c('A', 'B')\nprint(m)"
    ],
    "testCases": [
      {
        "id": "r-36-tc-1",
        "description": "Verifies correct implementation for Assigning Row and Column Names (rownames, colnames)",
        "testFn": "code.includes('colnames')"
      }
    ]
  },
  {
    "id": "r-37-combining-matrices-by-rows-rbi",
    "title": "37. Combining Matrices by Rows (rbind) and Columns (cbind)",
    "slug": "lesson-37-combining-matrices-by-rows-rbi",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stack or merge matrix objects.",
    "concepts": [
      "Combining Matrices by Rows (rbind) and Columns (cbind)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Combining Matrices by Rows (rbind) and Columns (cbind) gives you complete architectural control.",
    "explanationMarkdown": "### Combining Matrices by Rows (rbind) and Columns (cbind)\n\nStack or merge matrix objects.\n\n```r\na <- c(1, 2)\nb <- c(3, 4)\nprint(rbind(a, b))\n```",
    "workedExample": {
      "title": "Worked Example: Combining Matrices by Rows (rbind) and Columns (cbind)",
      "code": "a <- c(1, 2)\nb <- c(3, 4)\nprint(rbind(a, b))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combining Matrices by Rows (rbind) and Columns (cbind).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combining Matrices by Rows (rbind) and Columns (cbind).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Combining Matrices by Rows (rbind) and Columns (cbind)\n# TODO: Write code below\n\n",
    "solutionCode": "a <- c(1, 2)\nb <- c(3, 4)\nprint(rbind(a, b))\n",
    "hints": [
      "Write:\na <- c(1, 2)\nb <- c(3, 4)\nprint(rbind(a, b))"
    ],
    "testCases": [
      {
        "id": "r-37-tc-1",
        "description": "Verifies correct implementation for Combining Matrices by Rows (rbind) and Columns (cbind)",
        "testFn": "code.includes('rbind')"
      }
    ]
  },
  {
    "id": "r-38-matrix-multiplication-vs-eleme",
    "title": "38. Matrix Multiplication (%*%) vs Element-Wise (*)",
    "slug": "lesson-38-matrix-multiplication-vs-eleme",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Perform true linear algebra dot products.",
    "concepts": [
      "Matrix Multiplication (%*%) vs Element-Wise (*)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Multiplication (%*%) vs Element-Wise (*) gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Multiplication (%*%) vs Element-Wise (*)\n\nPerform true linear algebra dot products.\n\n```r\na <- matrix(1:4, nrow = 2)\nprint(a %*% a)\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Multiplication (%*%) vs Element-Wise (*)",
      "code": "a <- matrix(1:4, nrow = 2)\nprint(a %*% a)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Multiplication (%*%) vs Element-Wise (*).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Multiplication (%*%) vs Element-Wise (*).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Multiplication (%*%) vs Element-Wise (*)\n# TODO: Write code below\n\n",
    "solutionCode": "a <- matrix(1:4, nrow = 2)\nprint(a %*% a)\n",
    "hints": [
      "Write:\na <- matrix(1:4, nrow = 2)\nprint(a %*% a)"
    ],
    "testCases": [
      {
        "id": "r-38-tc-1",
        "description": "Verifies correct implementation for Matrix Multiplication (%*%) vs Element-Wise (*)",
        "testFn": "code.includes('%*%')"
      }
    ]
  },
  {
    "id": "r-39-transposing-matrices-with-t",
    "title": "39. Transposing Matrices with t()",
    "slug": "lesson-39-transposing-matrices-with-t",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Swap rows and columns seamlessly.",
    "concepts": [
      "Transposing Matrices with t()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Transposing Matrices with t() gives you complete architectural control.",
    "explanationMarkdown": "### Transposing Matrices with t()\n\nSwap rows and columns seamlessly.\n\n```r\nm <- matrix(1:6, nrow = 2)\nprint(t(m))\n```",
    "workedExample": {
      "title": "Worked Example: Transposing Matrices with t()",
      "code": "m <- matrix(1:6, nrow = 2)\nprint(t(m))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Transposing Matrices with t().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Transposing Matrices with t().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Transposing Matrices with t()\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:6, nrow = 2)\nprint(t(m))\n",
    "hints": [
      "Write:\nm <- matrix(1:6, nrow = 2)\nprint(t(m))"
    ],
    "testCases": [
      {
        "id": "r-39-tc-1",
        "description": "Verifies correct implementation for Transposing Matrices with t()",
        "testFn": "code.includes('t(m)')"
      }
    ]
  },
  {
    "id": "r-40-matrix-inversion-with-solve",
    "title": "40. Matrix Inversion with solve()",
    "slug": "lesson-40-matrix-inversion-with-solve",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute the mathematical inverse of square matrices.",
    "concepts": [
      "Matrix Inversion with solve()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Inversion with solve() gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Inversion with solve()\n\nCompute the mathematical inverse of square matrices.\n\n```r\nm <- matrix(c(4, 7, 2, 6), nrow = 2)\nprint(solve(m))\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Inversion with solve()",
      "code": "m <- matrix(c(4, 7, 2, 6), nrow = 2)\nprint(solve(m))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Inversion with solve().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Inversion with solve().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Inversion with solve()\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(c(4, 7, 2, 6), nrow = 2)\nprint(solve(m))\n",
    "hints": [
      "Write:\nm <- matrix(c(4, 7, 2, 6), nrow = 2)\nprint(solve(m))"
    ],
    "testCases": [
      {
        "id": "r-40-tc-1",
        "description": "Verifies correct implementation for Matrix Inversion with solve()",
        "testFn": "code.includes('solve')"
      }
    ]
  },
  {
    "id": "r-41-diagonal-extraction-and-identi",
    "title": "41. Diagonal Extraction and Identity Matrices with diag()",
    "slug": "lesson-41-diagonal-extraction-and-identi",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract trace diagonals or construct identity matrices.",
    "concepts": [
      "Diagonal Extraction and Identity Matrices with diag()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Diagonal Extraction and Identity Matrices with diag() gives you complete architectural control.",
    "explanationMarkdown": "### Diagonal Extraction and Identity Matrices with diag()\n\nExtract trace diagonals or construct identity matrices.\n\n```r\nprint(diag(3))\n```",
    "workedExample": {
      "title": "Worked Example: Diagonal Extraction and Identity Matrices with diag()",
      "code": "print(diag(3))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Diagonal Extraction and Identity Matrices with diag().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Diagonal Extraction and Identity Matrices with diag().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Diagonal Extraction and Identity Matrices with diag()\n# TODO: Write code below\n\n",
    "solutionCode": "print(diag(3))\n",
    "hints": [
      "Write:\nprint(diag(3))"
    ],
    "testCases": [
      {
        "id": "r-41-tc-1",
        "description": "Verifies correct implementation for Diagonal Extraction and Identity Matrices with diag()",
        "testFn": "code.includes('diag')"
      }
    ]
  },
  {
    "id": "r-42-row-and-column-sums-rowsums-co",
    "title": "42. Row and Column Sums: rowSums(), colSums()",
    "slug": "lesson-42-row-and-column-sums-rowsums-co",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fast optimized reductions across matrix dimensions.",
    "concepts": [
      "Row and Column Sums: rowSums(), colSums()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Row and Column Sums: rowSums(), colSums() gives you complete architectural control.",
    "explanationMarkdown": "### Row and Column Sums: rowSums(), colSums()\n\nFast optimized reductions across matrix dimensions.\n\n```r\nm <- matrix(1:6, nrow = 2)\nprint(rowSums(m))\n```",
    "workedExample": {
      "title": "Worked Example: Row and Column Sums: rowSums(), colSums()",
      "code": "m <- matrix(1:6, nrow = 2)\nprint(rowSums(m))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Row and Column Sums: rowSums(), colSums().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Row and Column Sums: rowSums(), colSums().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Row and Column Sums: rowSums(), colSums()\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:6, nrow = 2)\nprint(rowSums(m))\n",
    "hints": [
      "Write:\nm <- matrix(1:6, nrow = 2)\nprint(rowSums(m))"
    ],
    "testCases": [
      {
        "id": "r-42-tc-1",
        "description": "Verifies correct implementation for Row and Column Sums: rowSums(), colSums()",
        "testFn": "code.includes('rowSums')"
      }
    ]
  },
  {
    "id": "r-43-row-and-column-means-rowmeans-",
    "title": "43. Row and Column Means: rowMeans(), colMeans()",
    "slug": "lesson-43-row-and-column-means-rowmeans-",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fast parallel averages across matrix rows/columns.",
    "concepts": [
      "Row and Column Means: rowMeans(), colMeans()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Row and Column Means: rowMeans(), colMeans() gives you complete architectural control.",
    "explanationMarkdown": "### Row and Column Means: rowMeans(), colMeans()\n\nFast parallel averages across matrix rows/columns.\n\n```r\nm <- matrix(1:6, nrow = 2)\nprint(colMeans(m))\n```",
    "workedExample": {
      "title": "Worked Example: Row and Column Means: rowMeans(), colMeans()",
      "code": "m <- matrix(1:6, nrow = 2)\nprint(colMeans(m))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Row and Column Means: rowMeans(), colMeans().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Row and Column Means: rowMeans(), colMeans().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Row and Column Means: rowMeans(), colMeans()\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:6, nrow = 2)\nprint(colMeans(m))\n",
    "hints": [
      "Write:\nm <- matrix(1:6, nrow = 2)\nprint(colMeans(m))"
    ],
    "testCases": [
      {
        "id": "r-43-tc-1",
        "description": "Verifies correct implementation for Row and Column Means: rowMeans(), colMeans()",
        "testFn": "code.includes('colMeans')"
      }
    ]
  },
  {
    "id": "r-44-multidimensional-arrays-with-a",
    "title": "44. Multidimensional Arrays with array()",
    "slug": "lesson-44-multidimensional-arrays-with-a",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extend matrices to N-dimensional tensors.",
    "concepts": [
      "Multidimensional Arrays with array()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Multidimensional Arrays with array() gives you complete architectural control.",
    "explanationMarkdown": "### Multidimensional Arrays with array()\n\nExtend matrices to N-dimensional tensors.\n\n```r\narr <- array(1:24, dim = c(2, 3, 4))\nprint(dim(arr))\n```",
    "workedExample": {
      "title": "Worked Example: Multidimensional Arrays with array()",
      "code": "arr <- array(1:24, dim = c(2, 3, 4))\nprint(dim(arr))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multidimensional Arrays with array().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multidimensional Arrays with array().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Multidimensional Arrays with array()\n# TODO: Write code below\n\n",
    "solutionCode": "arr <- array(1:24, dim = c(2, 3, 4))\nprint(dim(arr))\n",
    "hints": [
      "Write:\narr <- array(1:24, dim = c(2, 3, 4))\nprint(dim(arr))"
    ],
    "testCases": [
      {
        "id": "r-44-tc-1",
        "description": "Verifies correct implementation for Multidimensional Arrays with array()",
        "testFn": "code.includes('array')"
      }
    ]
  },
  {
    "id": "r-45-indexing-3d-tensors-arr-x-y-z",
    "title": "45. Indexing 3D Tensors: arr[x, y, z]",
    "slug": "lesson-45-indexing-3d-tensors-arr-x-y-z",
    "language": "r",
    "category": "Module 3: Matrices & Multidimensional Arrays",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract slices from multidimensional structures.",
    "concepts": [
      "Indexing 3D Tensors: arr[x, y, z]",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Indexing 3D Tensors: arr[x, y, z] gives you complete architectural control.",
    "explanationMarkdown": "### Indexing 3D Tensors: arr[x, y, z]\n\nExtract slices from multidimensional structures.\n\n```r\narr <- array(1:8, dim = c(2, 2, 2))\nprint(arr[1, 1, 1])\n```",
    "workedExample": {
      "title": "Worked Example: Indexing 3D Tensors: arr[x, y, z]",
      "code": "arr <- array(1:8, dim = c(2, 2, 2))\nprint(arr[1, 1, 1])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Indexing 3D Tensors: arr[x, y, z].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Indexing 3D Tensors: arr[x, y, z].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Indexing 3D Tensors: arr[x, y, z]\n# TODO: Write code below\n\n",
    "solutionCode": "arr <- array(1:8, dim = c(2, 2, 2))\nprint(arr[1, 1, 1])\n",
    "hints": [
      "Write:\narr <- array(1:8, dim = c(2, 2, 2))\nprint(arr[1, 1, 1])"
    ],
    "testCases": [
      {
        "id": "r-45-tc-1",
        "description": "Verifies correct implementation for Indexing 3D Tensors: arr[x, y, z]",
        "testFn": "code.includes('arr[1, 1, 1]')"
      }
    ]
  },
  {
    "id": "r-46-creating-lists-with-list",
    "title": "46. Creating Lists with list()",
    "slug": "lesson-46-creating-lists-with-list",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Store heterogeneous data types in a single structure.",
    "concepts": [
      "Creating Lists with list()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Lists with list() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Lists with list()\n\nStore heterogeneous data types in a single structure.\n\n```r\nmy_list <- list(name = 'Alex', age = 30, scores = c(95, 88))\nprint(my_list$name)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Lists with list()",
      "code": "my_list <- list(name = 'Alex', age = 30, scores = c(95, 88))\nprint(my_list$name)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Lists with list().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Lists with list().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Lists with list()\n# TODO: Write code below\n\n",
    "solutionCode": "my_list <- list(name = 'Alex', age = 30, scores = c(95, 88))\nprint(my_list$name)\n",
    "hints": [
      "Write:\nmy_list <- list(name = 'Alex', age = 30, scores = c(95, 88))\nprint(my_list$name)"
    ],
    "testCases": [
      {
        "id": "r-46-tc-1",
        "description": "Verifies correct implementation for Creating Lists with list()",
        "testFn": "code.includes('list')"
      }
    ]
  },
  {
    "id": "r-47-accessing-list-elements-single",
    "title": "47. Accessing List Elements: Single [ ] vs Double [[ ]]",
    "slug": "lesson-47-accessing-list-elements-single",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Single brackets return a sublist; double returns actual content.",
    "concepts": [
      "Accessing List Elements: Single [ ] vs Double [[ ]]",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Accessing List Elements: Single [ ] vs Double [[ ]] gives you complete architectural control.",
    "explanationMarkdown": "### Accessing List Elements: Single [ ] vs Double [[ ]]\n\nSingle brackets return a sublist; double returns actual content.\n\n```r\nl <- list(a = 10, b = 20)\nprint(l[[1]])\n```",
    "workedExample": {
      "title": "Worked Example: Accessing List Elements: Single [ ] vs Double [[ ]]",
      "code": "l <- list(a = 10, b = 20)\nprint(l[[1]])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessing List Elements: Single [ ] vs Double [[ ]].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessing List Elements: Single [ ] vs Double [[ ]].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Accessing List Elements: Single [ ] vs Double [[ ]]\n# TODO: Write code below\n\n",
    "solutionCode": "l <- list(a = 10, b = 20)\nprint(l[[1]])\n",
    "hints": [
      "Write:\nl <- list(a = 10, b = 20)\nprint(l[[1]])"
    ],
    "testCases": [
      {
        "id": "r-47-tc-1",
        "description": "Verifies correct implementation for Accessing List Elements: Single [ ] vs Double [[ ]]",
        "testFn": "code.includes('[[1]]')"
      }
    ]
  },
  {
    "id": "r-48-dollar-sign-operator-for-named",
    "title": "48. Dollar Sign ($) Operator for Named List Extraction",
    "slug": "lesson-48-dollar-sign-operator-for-named",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract named members intuitively.",
    "concepts": [
      "Dollar Sign ($) Operator for Named List Extraction",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Dollar Sign ($) Operator for Named List Extraction gives you complete architectural control.",
    "explanationMarkdown": "### Dollar Sign ($) Operator for Named List Extraction\n\nExtract named members intuitively.\n\n```r\nuser <- list(id = 101, role = 'admin')\nprint(user$role)\n```",
    "workedExample": {
      "title": "Worked Example: Dollar Sign ($) Operator for Named List Extraction",
      "code": "user <- list(id = 101, role = 'admin')\nprint(user$role)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dollar Sign ($) Operator for Named List Extraction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dollar Sign ($) Operator for Named List Extraction.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Dollar Sign ($) Operator for Named List Extraction\n# TODO: Write code below\n\n",
    "solutionCode": "user <- list(id = 101, role = 'admin')\nprint(user$role)\n",
    "hints": [
      "Write:\nuser <- list(id = 101, role = 'admin')\nprint(user$role)"
    ],
    "testCases": [
      {
        "id": "r-48-tc-1",
        "description": "Verifies correct implementation for Dollar Sign ($) Operator for Named List Extraction",
        "testFn": "code.includes('$role')"
      }
    ]
  },
  {
    "id": "r-49-modifying-and-appending-list-e",
    "title": "49. Modifying and Appending List Elements",
    "slug": "lesson-49-modifying-and-appending-list-e",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign new keys or update existing values.",
    "concepts": [
      "Modifying and Appending List Elements",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Modifying and Appending List Elements gives you complete architectural control.",
    "explanationMarkdown": "### Modifying and Appending List Elements\n\nAssign new keys or update existing values.\n\n```r\nl <- list(x = 1)\nl$y <- 2\nprint(names(l))\n```",
    "workedExample": {
      "title": "Worked Example: Modifying and Appending List Elements",
      "code": "l <- list(x = 1)\nl$y <- 2\nprint(names(l))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modifying and Appending List Elements.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modifying and Appending List Elements.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Modifying and Appending List Elements\n# TODO: Write code below\n\n",
    "solutionCode": "l <- list(x = 1)\nl$y <- 2\nprint(names(l))\n",
    "hints": [
      "Write:\nl <- list(x = 1)\nl$y <- 2\nprint(names(l))"
    ],
    "testCases": [
      {
        "id": "r-49-tc-1",
        "description": "Verifies correct implementation for Modifying and Appending List Elements",
        "testFn": "code.includes('$y')"
      }
    ]
  },
  {
    "id": "r-50-flattening-lists-into-vectors-",
    "title": "50. Flattening Lists into Vectors with unlist()",
    "slug": "lesson-50-flattening-lists-into-vectors-",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert lists back to atomic vectors.",
    "concepts": [
      "Flattening Lists into Vectors with unlist()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Flattening Lists into Vectors with unlist() gives you complete architectural control.",
    "explanationMarkdown": "### Flattening Lists into Vectors with unlist()\n\nConvert lists back to atomic vectors.\n\n```r\nl <- list(1, 2, 3)\nprint(unlist(l))\n```",
    "workedExample": {
      "title": "Worked Example: Flattening Lists into Vectors with unlist()",
      "code": "l <- list(1, 2, 3)\nprint(unlist(l))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flattening Lists into Vectors with unlist().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flattening Lists into Vectors with unlist().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Flattening Lists into Vectors with unlist()\n# TODO: Write code below\n\n",
    "solutionCode": "l <- list(1, 2, 3)\nprint(unlist(l))\n",
    "hints": [
      "Write:\nl <- list(1, 2, 3)\nprint(unlist(l))"
    ],
    "testCases": [
      {
        "id": "r-50-tc-1",
        "description": "Verifies correct implementation for Flattening Lists into Vectors with unlist()",
        "testFn": "code.includes('unlist')"
      }
    ]
  },
  {
    "id": "r-51-creating-factors-with-factor",
    "title": "51. Creating Factors with factor()",
    "slug": "lesson-51-creating-factors-with-factor",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Categorical variables with fixed possible values.",
    "concepts": [
      "Creating Factors with factor()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Factors with factor() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Factors with factor()\n\nCategorical variables with fixed possible values.\n\n```r\ngender <- factor(c('male', 'female', 'female'))\nprint(levels(gender))\n```",
    "workedExample": {
      "title": "Worked Example: Creating Factors with factor()",
      "code": "gender <- factor(c('male', 'female', 'female'))\nprint(levels(gender))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Factors with factor().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Factors with factor().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Factors with factor()\n# TODO: Write code below\n\n",
    "solutionCode": "gender <- factor(c('male', 'female', 'female'))\nprint(levels(gender))\n",
    "hints": [
      "Write:\ngender <- factor(c('male', 'female', 'female'))\nprint(levels(gender))"
    ],
    "testCases": [
      {
        "id": "r-51-tc-1",
        "description": "Verifies correct implementation for Creating Factors with factor()",
        "testFn": "code.includes('factor')"
      }
    ]
  },
  {
    "id": "r-52-ordered-factors-for-ordinal-da",
    "title": "52. Ordered Factors for Ordinal Data",
    "slug": "lesson-52-ordered-factors-for-ordinal-da",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define ranked categories (e.g. low < med < high).",
    "concepts": [
      "Ordered Factors for Ordinal Data",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Ordered Factors for Ordinal Data gives you complete architectural control.",
    "explanationMarkdown": "### Ordered Factors for Ordinal Data\n\nDefine ranked categories (e.g. low < med < high).\n\n```r\nrating <- factor(c('low', 'high', 'med'), levels = c('low', 'med', 'high'), ordered = TRUE)\nprint(rating)\n```",
    "workedExample": {
      "title": "Worked Example: Ordered Factors for Ordinal Data",
      "code": "rating <- factor(c('low', 'high', 'med'), levels = c('low', 'med', 'high'), ordered = TRUE)\nprint(rating)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ordered Factors for Ordinal Data.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ordered Factors for Ordinal Data.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Ordered Factors for Ordinal Data\n# TODO: Write code below\n\n",
    "solutionCode": "rating <- factor(c('low', 'high', 'med'), levels = c('low', 'med', 'high'), ordered = TRUE)\nprint(rating)\n",
    "hints": [
      "Write:\nrating <- factor(c('low', 'high', 'med'), levels = c('low', 'med', 'high'), ordered = TRUE)\nprint(rating)"
    ],
    "testCases": [
      {
        "id": "r-52-tc-1",
        "description": "Verifies correct implementation for Ordered Factors for Ordinal Data",
        "testFn": "code.includes('ordered')"
      }
    ]
  },
  {
    "id": "r-53-inspecting-and-changing-factor",
    "title": "53. Inspecting and Changing Factor Levels",
    "slug": "lesson-53-inspecting-and-changing-factor",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Recode categorical representations.",
    "concepts": [
      "Inspecting and Changing Factor Levels",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Inspecting and Changing Factor Levels gives you complete architectural control.",
    "explanationMarkdown": "### Inspecting and Changing Factor Levels\n\nRecode categorical representations.\n\n```r\nf <- factor(c('A', 'B'))\nlevels(f) <- c('Alpha', 'Beta')\nprint(f)\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting and Changing Factor Levels",
      "code": "f <- factor(c('A', 'B'))\nlevels(f) <- c('Alpha', 'Beta')\nprint(f)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting and Changing Factor Levels.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting and Changing Factor Levels.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting and Changing Factor Levels\n# TODO: Write code below\n\n",
    "solutionCode": "f <- factor(c('A', 'B'))\nlevels(f) <- c('Alpha', 'Beta')\nprint(f)\n",
    "hints": [
      "Write:\nf <- factor(c('A', 'B'))\nlevels(f) <- c('Alpha', 'Beta')\nprint(f)"
    ],
    "testCases": [
      {
        "id": "r-53-tc-1",
        "description": "Verifies correct implementation for Inspecting and Changing Factor Levels",
        "testFn": "code.includes('levels')"
      }
    ]
  },
  {
    "id": "r-54-creating-data-frames-with-data",
    "title": "54. Creating Data Frames with data.frame()",
    "slug": "lesson-54-creating-data-frames-with-data",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The quintessential 2D tabular data structure in R.",
    "concepts": [
      "Creating Data Frames with data.frame()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Data Frames with data.frame() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Data Frames with data.frame()\n\nThe quintessential 2D tabular data structure in R.\n\n```r\ndf <- data.frame(id = 1:2, name = c('Alice', 'Bob'))\nprint(df)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Data Frames with data.frame()",
      "code": "df <- data.frame(id = 1:2, name = c('Alice', 'Bob'))\nprint(df)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Data Frames with data.frame().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Data Frames with data.frame().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Data Frames with data.frame()\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(id = 1:2, name = c('Alice', 'Bob'))\nprint(df)\n",
    "hints": [
      "Write:\ndf <- data.frame(id = 1:2, name = c('Alice', 'Bob'))\nprint(df)"
    ],
    "testCases": [
      {
        "id": "r-54-tc-1",
        "description": "Verifies correct implementation for Creating Data Frames with data.frame()",
        "testFn": "code.includes('data.frame')"
      }
    ]
  },
  {
    "id": "r-55-inspecting-data-frames-head-ta",
    "title": "55. Inspecting Data Frames: head(), tail(), str()",
    "slug": "lesson-55-inspecting-data-frames-head-ta",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Check structure, dimensions, and column types.",
    "concepts": [
      "Inspecting Data Frames: head(), tail(), str()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Inspecting Data Frames: head(), tail(), str() gives you complete architectural control.",
    "explanationMarkdown": "### Inspecting Data Frames: head(), tail(), str()\n\nCheck structure, dimensions, and column types.\n\n```r\ndf <- data.frame(x = 1:5, y = letters[1:5])\nstr(df)\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Data Frames: head(), tail(), str()",
      "code": "df <- data.frame(x = 1:5, y = letters[1:5])\nstr(df)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Data Frames: head(), tail(), str().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Data Frames: head(), tail(), str().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Data Frames: head(), tail(), str()\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(x = 1:5, y = letters[1:5])\nstr(df)\n",
    "hints": [
      "Write:\ndf <- data.frame(x = 1:5, y = letters[1:5])\nstr(df)"
    ],
    "testCases": [
      {
        "id": "r-55-tc-1",
        "description": "Verifies correct implementation for Inspecting Data Frames: head(), tail(), str()",
        "testFn": "code.includes('str')"
      }
    ]
  },
  {
    "id": "r-56-selecting-dataframe-columns-vs",
    "title": "56. Selecting DataFrame Columns ($ vs [ ])",
    "slug": "lesson-56-selecting-dataframe-columns-vs",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Retrieve columns as vectors or single-column frames.",
    "concepts": [
      "Selecting DataFrame Columns ($ vs [ ])",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Selecting DataFrame Columns ($ vs [ ]) gives you complete architectural control.",
    "explanationMarkdown": "### Selecting DataFrame Columns ($ vs [ ])\n\nRetrieve columns as vectors or single-column frames.\n\n```r\ndf <- data.frame(a = 1:3, b = 4:6)\nprint(df$a)\n```",
    "workedExample": {
      "title": "Worked Example: Selecting DataFrame Columns ($ vs [ ])",
      "code": "df <- data.frame(a = 1:3, b = 4:6)\nprint(df$a)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Selecting DataFrame Columns ($ vs [ ]).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Selecting DataFrame Columns ($ vs [ ]).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Selecting DataFrame Columns ($ vs [ ])\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(a = 1:3, b = 4:6)\nprint(df$a)\n",
    "hints": [
      "Write:\ndf <- data.frame(a = 1:3, b = 4:6)\nprint(df$a)"
    ],
    "testCases": [
      {
        "id": "r-56-tc-1",
        "description": "Verifies correct implementation for Selecting DataFrame Columns ($ vs [ ])",
        "testFn": "code.includes('$a')"
      }
    ]
  },
  {
    "id": "r-57-adding-new-columns-to-a-data-f",
    "title": "57. Adding New Columns to a Data Frame",
    "slug": "lesson-57-adding-new-columns-to-a-data-f",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute derived metrics directly into columns.",
    "concepts": [
      "Adding New Columns to a Data Frame",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Adding New Columns to a Data Frame gives you complete architectural control.",
    "explanationMarkdown": "### Adding New Columns to a Data Frame\n\nCompute derived metrics directly into columns.\n\n```r\ndf <- data.frame(price = c(10, 20))\ndf$tax <- df$price * 0.1\nprint(df)\n```",
    "workedExample": {
      "title": "Worked Example: Adding New Columns to a Data Frame",
      "code": "df <- data.frame(price = c(10, 20))\ndf$tax <- df$price * 0.1\nprint(df)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adding New Columns to a Data Frame.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adding New Columns to a Data Frame.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Adding New Columns to a Data Frame\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(price = c(10, 20))\ndf$tax <- df$price * 0.1\nprint(df)\n",
    "hints": [
      "Write:\ndf <- data.frame(price = c(10, 20))\ndf$tax <- df$price * 0.1\nprint(df)"
    ],
    "testCases": [
      {
        "id": "r-57-tc-1",
        "description": "Verifies correct implementation for Adding New Columns to a Data Frame",
        "testFn": "code.includes('$tax')"
      }
    ]
  },
  {
    "id": "r-58-filtering-dataframe-rows-with-",
    "title": "58. Filtering DataFrame Rows with Logical Conditions",
    "slug": "lesson-58-filtering-dataframe-rows-with-",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Subset records meeting business criteria.",
    "concepts": [
      "Filtering DataFrame Rows with Logical Conditions",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Filtering DataFrame Rows with Logical Conditions gives you complete architectural control.",
    "explanationMarkdown": "### Filtering DataFrame Rows with Logical Conditions\n\nSubset records meeting business criteria.\n\n```r\ndf <- data.frame(age = c(15, 25, 35))\nadults <- df[df$age >= 18, ]\nprint(adults)\n```",
    "workedExample": {
      "title": "Worked Example: Filtering DataFrame Rows with Logical Conditions",
      "code": "df <- data.frame(age = c(15, 25, 35))\nadults <- df[df$age >= 18, ]\nprint(adults)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering DataFrame Rows with Logical Conditions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering DataFrame Rows with Logical Conditions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering DataFrame Rows with Logical Conditions\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(age = c(15, 25, 35))\nadults <- df[df$age >= 18, ]\nprint(adults)\n",
    "hints": [
      "Write:\ndf <- data.frame(age = c(15, 25, 35))\nadults <- df[df$age >= 18, ]\nprint(adults)"
    ],
    "testCases": [
      {
        "id": "r-58-tc-1",
        "description": "Verifies correct implementation for Filtering DataFrame Rows with Logical Conditions",
        "testFn": "code.includes('>= 18')"
      }
    ]
  },
  {
    "id": "r-59-the-subset-function-for-expres",
    "title": "59. The subset() Function for Expressive Filtering",
    "slug": "lesson-59-the-subset-function-for-expres",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter rows and select columns cleanly.",
    "concepts": [
      "The subset() Function for Expressive Filtering",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The subset() Function for Expressive Filtering gives you complete architectural control.",
    "explanationMarkdown": "### The subset() Function for Expressive Filtering\n\nFilter rows and select columns cleanly.\n\n```r\ndf <- data.frame(name = c('A', 'B'), score = c(90, 70))\nres <- subset(df, score > 80)\nprint(res)\n```",
    "workedExample": {
      "title": "Worked Example: The subset() Function for Expressive Filtering",
      "code": "df <- data.frame(name = c('A', 'B'), score = c(90, 70))\nres <- subset(df, score > 80)\nprint(res)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The subset() Function for Expressive Filtering.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The subset() Function for Expressive Filtering.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The subset() Function for Expressive Filtering\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(name = c('A', 'B'), score = c(90, 70))\nres <- subset(df, score > 80)\nprint(res)\n",
    "hints": [
      "Write:\ndf <- data.frame(name = c('A', 'B'), score = c(90, 70))\nres <- subset(df, score > 80)\nprint(res)"
    ],
    "testCases": [
      {
        "id": "r-59-tc-1",
        "description": "Verifies correct implementation for The subset() Function for Expressive Filtering",
        "testFn": "code.includes('subset')"
      }
    ]
  },
  {
    "id": "r-60-sorting-data-frames-with-order",
    "title": "60. Sorting Data Frames with order()",
    "slug": "lesson-60-sorting-data-frames-with-order",
    "language": "r",
    "category": "Module 4: Lists, Factors & Data Frames",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sort entire datasets based on specific column values.",
    "concepts": [
      "Sorting Data Frames with order()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Sorting Data Frames with order() gives you complete architectural control.",
    "explanationMarkdown": "### Sorting Data Frames with order()\n\nSort entire datasets based on specific column values.\n\n```r\ndf <- data.frame(val = c(30, 10, 20))\nprint(df[order(df$val), ])\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Data Frames with order()",
      "code": "df <- data.frame(val = c(30, 10, 20))\nprint(df[order(df$val), ])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Data Frames with order().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Data Frames with order().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sorting Data Frames with order()\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(val = c(30, 10, 20))\nprint(df[order(df$val), ])\n",
    "hints": [
      "Write:\ndf <- data.frame(val = c(30, 10, 20))\nprint(df[order(df$val), ])"
    ],
    "testCases": [
      {
        "id": "r-60-tc-1",
        "description": "Verifies correct implementation for Sorting Data Frames with order()",
        "testFn": "code.includes('order')"
      }
    ]
  },
  {
    "id": "r-61-the-if-statement-in-r",
    "title": "61. The if Statement in R",
    "slug": "lesson-61-the-if-statement-in-r",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute code conditionally.",
    "concepts": [
      "The if Statement in R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The if Statement in R gives you complete architectural control.",
    "explanationMarkdown": "### The if Statement in R\n\nExecute code conditionally.\n\n```r\nx <- 10\nif (x > 5) {\n  print('Greater')\n}\n```",
    "workedExample": {
      "title": "Worked Example: The if Statement in R",
      "code": "x <- 10\nif (x > 5) {\n  print('Greater')\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The if Statement in R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The if Statement in R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The if Statement in R\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 10\nif (x > 5) {\n  print('Greater')\n}\n",
    "hints": [
      "Write:\nx <- 10\nif (x > 5) {\n  print('Greater')\n}"
    ],
    "testCases": [
      {
        "id": "r-61-tc-1",
        "description": "Verifies correct implementation for The if Statement in R",
        "testFn": "code.includes('if')"
      }
    ]
  },
  {
    "id": "r-62-the-if-else-statement",
    "title": "62. The if-else Statement",
    "slug": "lesson-62-the-if-else-statement",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Branch execution for dual alternatives.",
    "concepts": [
      "The if-else Statement",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The if-else Statement gives you complete architectural control.",
    "explanationMarkdown": "### The if-else Statement\n\nBranch execution for dual alternatives.\n\n```r\nx <- 3\nif (x %% 2 == 0) {\n  print('Even')\n} else {\n  print('Odd')\n}\n```",
    "workedExample": {
      "title": "Worked Example: The if-else Statement",
      "code": "x <- 3\nif (x %% 2 == 0) {\n  print('Even')\n} else {\n  print('Odd')\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The if-else Statement.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The if-else Statement.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The if-else Statement\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 3\nif (x %% 2 == 0) {\n  print('Even')\n} else {\n  print('Odd')\n}\n",
    "hints": [
      "Write:\nx <- 3\nif (x %% 2 == 0) {\n  print('Even')\n} else {\n  print('Odd')\n}"
    ],
    "testCases": [
      {
        "id": "r-62-tc-1",
        "description": "Verifies correct implementation for The if-else Statement",
        "testFn": "code.includes('else')"
      }
    ]
  },
  {
    "id": "r-63-multi-condition-else-if-ladder",
    "title": "63. Multi-Condition else-if Ladders",
    "slug": "lesson-63-multi-condition-else-if-ladder",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Handle chained multi-tier criteria.",
    "concepts": [
      "Multi-Condition else-if Ladders",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Multi-Condition else-if Ladders gives you complete architectural control.",
    "explanationMarkdown": "### Multi-Condition else-if Ladders\n\nHandle chained multi-tier criteria.\n\n```r\nscore <- 85\nif (score >= 90) print('A') else if (score >= 80) print('B') else print('C')\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Condition else-if Ladders",
      "code": "score <- 85\nif (score >= 90) print('A') else if (score >= 80) print('B') else print('C')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Condition else-if Ladders.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Condition else-if Ladders.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Multi-Condition else-if Ladders\n# TODO: Write code below\n\n",
    "solutionCode": "score <- 85\nif (score >= 90) print('A') else if (score >= 80) print('B') else print('C')\n",
    "hints": [
      "Write:\nscore <- 85\nif (score >= 90) print('A') else if (score >= 80) print('B') else print('C')"
    ],
    "testCases": [
      {
        "id": "r-63-tc-1",
        "description": "Verifies correct implementation for Multi-Condition else-if Ladders",
        "testFn": "code.includes('else if')"
      }
    ]
  },
  {
    "id": "r-64-vectorized-conditionals-with-i",
    "title": "64. Vectorized Conditionals with ifelse()",
    "slug": "lesson-64-vectorized-conditionals-with-i",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate conditions across an entire vector at once.",
    "concepts": [
      "Vectorized Conditionals with ifelse()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vectorized Conditionals with ifelse() gives you complete architectural control.",
    "explanationMarkdown": "### Vectorized Conditionals with ifelse()\n\nEvaluate conditions across an entire vector at once.\n\n```r\nvals <- c(10, -5, 20)\nprint(ifelse(vals > 0, 'Positive', 'Negative'))\n```",
    "workedExample": {
      "title": "Worked Example: Vectorized Conditionals with ifelse()",
      "code": "vals <- c(10, -5, 20)\nprint(ifelse(vals > 0, 'Positive', 'Negative'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vectorized Conditionals with ifelse().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vectorized Conditionals with ifelse().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vectorized Conditionals with ifelse()\n# TODO: Write code below\n\n",
    "solutionCode": "vals <- c(10, -5, 20)\nprint(ifelse(vals > 0, 'Positive', 'Negative'))\n",
    "hints": [
      "Write:\nvals <- c(10, -5, 20)\nprint(ifelse(vals > 0, 'Positive', 'Negative'))"
    ],
    "testCases": [
      {
        "id": "r-64-tc-1",
        "description": "Verifies correct implementation for Vectorized Conditionals with ifelse()",
        "testFn": "code.includes('ifelse')"
      }
    ]
  },
  {
    "id": "r-65-the-switch-statement-in-r",
    "title": "65. The switch() Statement in R",
    "slug": "lesson-65-the-switch-statement-in-r",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Branch based on matching string or integer indices.",
    "concepts": [
      "The switch() Statement in R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The switch() Statement in R gives you complete architectural control.",
    "explanationMarkdown": "### The switch() Statement in R\n\nBranch based on matching string or integer indices.\n\n```r\nop <- 'mean'\nres <- switch(op, 'mean' = 50, 'median' = 45)\nprint(res)\n```",
    "workedExample": {
      "title": "Worked Example: The switch() Statement in R",
      "code": "op <- 'mean'\nres <- switch(op, 'mean' = 50, 'median' = 45)\nprint(res)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The switch() Statement in R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The switch() Statement in R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The switch() Statement in R\n# TODO: Write code below\n\n",
    "solutionCode": "op <- 'mean'\nres <- switch(op, 'mean' = 50, 'median' = 45)\nprint(res)\n",
    "hints": [
      "Write:\nop <- 'mean'\nres <- switch(op, 'mean' = 50, 'median' = 45)\nprint(res)"
    ],
    "testCases": [
      {
        "id": "r-65-tc-1",
        "description": "Verifies correct implementation for The switch() Statement in R",
        "testFn": "code.includes('switch')"
      }
    ]
  },
  {
    "id": "r-66-for-loops-over-sequences-and-v",
    "title": "66. for Loops Over Sequences and Vectors",
    "slug": "lesson-66-for-loops-over-sequences-and-v",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Iterate through items with standard for loops.",
    "concepts": [
      "for Loops Over Sequences and Vectors",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: for Loops Over Sequences and Vectors gives you complete architectural control.",
    "explanationMarkdown": "### for Loops Over Sequences and Vectors\n\nIterate through items with standard for loops.\n\n```r\nfor (i in 1:3) {\n  cat('Step:', i, '\\n')\n}\n```",
    "workedExample": {
      "title": "Worked Example: for Loops Over Sequences and Vectors",
      "code": "for (i in 1:3) {\n  cat('Step:', i, '\\n')\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for for Loops Over Sequences and Vectors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of for Loops Over Sequences and Vectors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement for Loops Over Sequences and Vectors\n# TODO: Write code below\n\n",
    "solutionCode": "for (i in 1:3) {\n  cat('Step:', i, '\\n')\n}\n",
    "hints": [
      "Write:\nfor (i in 1:3) {\n  cat('Step:', i, '\\n')\n}"
    ],
    "testCases": [
      {
        "id": "r-66-tc-1",
        "description": "Verifies correct implementation for for Loops Over Sequences and Vectors",
        "testFn": "code.includes('for')"
      }
    ]
  },
  {
    "id": "r-67-iterating-by-index-using-seq-a",
    "title": "67. Iterating by Index using seq_along()",
    "slug": "lesson-67-iterating-by-index-using-seq-a",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safe vector iteration avoiding 1:0 length traps.",
    "concepts": [
      "Iterating by Index using seq_along()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Iterating by Index using seq_along() gives you complete architectural control.",
    "explanationMarkdown": "### Iterating by Index using seq_along()\n\nSafe vector iteration avoiding 1:0 length traps.\n\n```r\nitems <- c('a', 'b', 'c')\nfor (i in seq_along(items)) {\n  print(items[i])\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterating by Index using seq_along()",
      "code": "items <- c('a', 'b', 'c')\nfor (i in seq_along(items)) {\n  print(items[i])\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating by Index using seq_along().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating by Index using seq_along().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Iterating by Index using seq_along()\n# TODO: Write code below\n\n",
    "solutionCode": "items <- c('a', 'b', 'c')\nfor (i in seq_along(items)) {\n  print(items[i])\n}\n",
    "hints": [
      "Write:\nitems <- c('a', 'b', 'c')\nfor (i in seq_along(items)) {\n  print(items[i])\n}"
    ],
    "testCases": [
      {
        "id": "r-67-tc-1",
        "description": "Verifies correct implementation for Iterating by Index using seq_along()",
        "testFn": "code.includes('seq_along')"
      }
    ]
  },
  {
    "id": "r-68-while-loops-in-r",
    "title": "68. while Loops in R",
    "slug": "lesson-68-while-loops-in-r",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute while a boolean predicate holds true.",
    "concepts": [
      "while Loops in R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: while Loops in R gives you complete architectural control.",
    "explanationMarkdown": "### while Loops in R\n\nExecute while a boolean predicate holds true.\n\n```r\ncount <- 3\nwhile (count > 0) {\n  count <- count - 1\n}\nprint('Done')\n```",
    "workedExample": {
      "title": "Worked Example: while Loops in R",
      "code": "count <- 3\nwhile (count > 0) {\n  count <- count - 1\n}\nprint('Done')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for while Loops in R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of while Loops in R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement while Loops in R\n# TODO: Write code below\n\n",
    "solutionCode": "count <- 3\nwhile (count > 0) {\n  count <- count - 1\n}\nprint('Done')\n",
    "hints": [
      "Write:\ncount <- 3\nwhile (count > 0) {\n  count <- count - 1\n}\nprint('Done')"
    ],
    "testCases": [
      {
        "id": "r-68-tc-1",
        "description": "Verifies correct implementation for while Loops in R",
        "testFn": "code.includes('while')"
      }
    ]
  },
  {
    "id": "r-69-infinite-repeat-loops-and-brea",
    "title": "69. Infinite repeat Loops and break",
    "slug": "lesson-69-infinite-repeat-loops-and-brea",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Loop continuously until break is triggered.",
    "concepts": [
      "Infinite repeat Loops and break",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Infinite repeat Loops and break gives you complete architectural control.",
    "explanationMarkdown": "### Infinite repeat Loops and break\n\nLoop continuously until break is triggered.\n\n```r\ni <- 0\nrepeat {\n  i <- i + 1\n  if (i >= 3) break\n}\nprint(i)\n```",
    "workedExample": {
      "title": "Worked Example: Infinite repeat Loops and break",
      "code": "i <- 0\nrepeat {\n  i <- i + 1\n  if (i >= 3) break\n}\nprint(i)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Infinite repeat Loops and break.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Infinite repeat Loops and break.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Infinite repeat Loops and break\n# TODO: Write code below\n\n",
    "solutionCode": "i <- 0\nrepeat {\n  i <- i + 1\n  if (i >= 3) break\n}\nprint(i)\n",
    "hints": [
      "Write:\ni <- 0\nrepeat {\n  i <- i + 1\n  if (i >= 3) break\n}\nprint(i)"
    ],
    "testCases": [
      {
        "id": "r-69-tc-1",
        "description": "Verifies correct implementation for Infinite repeat Loops and break",
        "testFn": "code.includes('break')"
      }
    ]
  },
  {
    "id": "r-70-the-next-statement-continue-eq",
    "title": "70. The next Statement (Continue Equivalent)",
    "slug": "lesson-70-the-next-statement-continue-eq",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Skip the remainder of the current iteration.",
    "concepts": [
      "The next Statement (Continue Equivalent)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The next Statement (Continue Equivalent) gives you complete architectural control.",
    "explanationMarkdown": "### The next Statement (Continue Equivalent)\n\nSkip the remainder of the current iteration.\n\n```r\nfor (i in 1:4) {\n  if (i == 2) next\n  print(i)\n}\n```",
    "workedExample": {
      "title": "Worked Example: The next Statement (Continue Equivalent)",
      "code": "for (i in 1:4) {\n  if (i == 2) next\n  print(i)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The next Statement (Continue Equivalent).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The next Statement (Continue Equivalent).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The next Statement (Continue Equivalent)\n# TODO: Write code below\n\n",
    "solutionCode": "for (i in 1:4) {\n  if (i == 2) next\n  print(i)\n}",
    "hints": [
      "Write:\nfor (i in 1:4) {\n  if (i == 2) next\n  print(i)\n}"
    ],
    "testCases": [
      {
        "id": "r-70-tc-1",
        "description": "Verifies correct implementation for The next Statement (Continue Equivalent)",
        "testFn": "code.includes('next')"
      }
    ]
  },
  {
    "id": "r-71-nested-loops-and-multi-dimensi",
    "title": "71. Nested Loops and Multi-Dimensional Traversal",
    "slug": "lesson-71-nested-loops-and-multi-dimensi",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Iterate through matrices or nested collections.",
    "concepts": [
      "Nested Loops and Multi-Dimensional Traversal",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Nested Loops and Multi-Dimensional Traversal gives you complete architectural control.",
    "explanationMarkdown": "### Nested Loops and Multi-Dimensional Traversal\n\nIterate through matrices or nested collections.\n\n```r\nm <- matrix(1:4, nrow = 2)\nfor (r in 1:2) {\n  for (c in 1:2) {\n    cat(m[r, c], ' ')\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Nested Loops and Multi-Dimensional Traversal",
      "code": "m <- matrix(1:4, nrow = 2)\nfor (r in 1:2) {\n  for (c in 1:2) {\n    cat(m[r, c], ' ')\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Nested Loops and Multi-Dimensional Traversal.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Nested Loops and Multi-Dimensional Traversal.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Nested Loops and Multi-Dimensional Traversal\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:4, nrow = 2)\nfor (r in 1:2) {\n  for (c in 1:2) {\n    cat(m[r, c], ' ')\n  }\n}\n",
    "hints": [
      "Write:\nm <- matrix(1:4, nrow = 2)\nfor (r in 1:2) {\n  for (c in 1:2) {\n    cat(m[r, c], ' ')\n  }\n}"
    ],
    "testCases": [
      {
        "id": "r-71-tc-1",
        "description": "Verifies correct implementation for Nested Loops and Multi-Dimensional Traversal",
        "testFn": "code.includes('for')"
      }
    ]
  },
  {
    "id": "r-72-vectorization-vs-loops-r-perfo",
    "title": "72. Vectorization vs Loops: R Performance Principle",
    "slug": "lesson-72-vectorization-vs-loops-r-perfo",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why vectorized operations run 100x faster than explicit loops.",
    "concepts": [
      "Vectorization vs Loops: R Performance Principle",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vectorization vs Loops: R Performance Principle gives you complete architectural control.",
    "explanationMarkdown": "### Vectorization vs Loops: R Performance Principle\n\nWhy vectorized operations run 100x faster than explicit loops.\n\n```r\ncat('Vectorized addition: x + y is written in optimized C')\n```",
    "workedExample": {
      "title": "Worked Example: Vectorization vs Loops: R Performance Principle",
      "code": "cat('Vectorized addition: x + y is written in optimized C')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vectorization vs Loops: R Performance Principle.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vectorization vs Loops: R Performance Principle.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vectorization vs Loops: R Performance Principle\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Vectorized addition: x + y is written in optimized C')\n",
    "hints": [
      "Write:\ncat('Vectorized addition: x + y is written in optimized C')"
    ],
    "testCases": [
      {
        "id": "r-72-tc-1",
        "description": "Verifies correct implementation for Vectorization vs Loops: R Performance Principle",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-73-pre-allocating-memory-for-loop",
    "title": "73. Pre-Allocating Memory for Loop Efficiency",
    "slug": "lesson-73-pre-allocating-memory-for-loop",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Avoid growing vectors dynamically inside iterations.",
    "concepts": [
      "Pre-Allocating Memory for Loop Efficiency",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Pre-Allocating Memory for Loop Efficiency gives you complete architectural control.",
    "explanationMarkdown": "### Pre-Allocating Memory for Loop Efficiency\n\nAvoid growing vectors dynamically inside iterations.\n\n```r\nn <- 5\nres <- numeric(n)\nfor (i in 1:n) res[i] <- i * 10\nprint(res)\n```",
    "workedExample": {
      "title": "Worked Example: Pre-Allocating Memory for Loop Efficiency",
      "code": "n <- 5\nres <- numeric(n)\nfor (i in 1:n) res[i] <- i * 10\nprint(res)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pre-Allocating Memory for Loop Efficiency.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pre-Allocating Memory for Loop Efficiency.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Pre-Allocating Memory for Loop Efficiency\n# TODO: Write code below\n\n",
    "solutionCode": "n <- 5\nres <- numeric(n)\nfor (i in 1:n) res[i] <- i * 10\nprint(res)\n",
    "hints": [
      "Write:\nn <- 5\nres <- numeric(n)\nfor (i in 1:n) res[i] <- i * 10\nprint(res)"
    ],
    "testCases": [
      {
        "id": "r-73-tc-1",
        "description": "Verifies correct implementation for Pre-Allocating Memory for Loop Efficiency",
        "testFn": "code.includes('numeric')"
      }
    ]
  },
  {
    "id": "r-74-loop-control-with-any-and-all-",
    "title": "74. Loop Control with any() and all() Checks",
    "slug": "lesson-74-loop-control-with-any-and-all-",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate vector-wide conditions cleanly.",
    "concepts": [
      "Loop Control with any() and all() Checks",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Loop Control with any() and all() Checks gives you complete architectural control.",
    "explanationMarkdown": "### Loop Control with any() and all() Checks\n\nEvaluate vector-wide conditions cleanly.\n\n```r\nvals <- c(10, 20, 30)\nprint(all(vals > 5))\n```",
    "workedExample": {
      "title": "Worked Example: Loop Control with any() and all() Checks",
      "code": "vals <- c(10, 20, 30)\nprint(all(vals > 5))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Loop Control with any() and all() Checks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Loop Control with any() and all() Checks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Loop Control with any() and all() Checks\n# TODO: Write code below\n\n",
    "solutionCode": "vals <- c(10, 20, 30)\nprint(all(vals > 5))\n",
    "hints": [
      "Write:\nvals <- c(10, 20, 30)\nprint(all(vals > 5))"
    ],
    "testCases": [
      {
        "id": "r-74-tc-1",
        "description": "Verifies correct implementation for Loop Control with any() and all() Checks",
        "testFn": "code.includes('all')"
      }
    ]
  },
  {
    "id": "r-75-handling-stop-conditions-with-",
    "title": "75. Handling Stop Conditions with stop() and warning()",
    "slug": "lesson-75-handling-stop-conditions-with-",
    "language": "r",
    "category": "Module 5: Control Flow, Conditionals & Loops",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Signal execution warnings or terminal errors.",
    "concepts": [
      "Handling Stop Conditions with stop() and warning()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Handling Stop Conditions with stop() and warning() gives you complete architectural control.",
    "explanationMarkdown": "### Handling Stop Conditions with stop() and warning()\n\nSignal execution warnings or terminal errors.\n\n```r\ncat('Error reporting in R uses stop(msg)')\n```",
    "workedExample": {
      "title": "Worked Example: Handling Stop Conditions with stop() and warning()",
      "code": "cat('Error reporting in R uses stop(msg)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Stop Conditions with stop() and warning().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Stop Conditions with stop() and warning().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling Stop Conditions with stop() and warning()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Error reporting in R uses stop(msg)')\n",
    "hints": [
      "Write:\ncat('Error reporting in R uses stop(msg)')"
    ],
    "testCases": [
      {
        "id": "r-75-tc-1",
        "description": "Verifies correct implementation for Handling Stop Conditions with stop() and warning()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-76-declaring-functions-with-funct",
    "title": "76. Declaring Functions with function()",
    "slug": "lesson-76-declaring-functions-with-funct",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define modular reusable logic in R.",
    "concepts": [
      "Declaring Functions with function()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Declaring Functions with function() gives you complete architectural control.",
    "explanationMarkdown": "### Declaring Functions with function()\n\nDefine modular reusable logic in R.\n\n```r\nsquare <- function(x) { x * x }\nprint(square(5))\n```",
    "workedExample": {
      "title": "Worked Example: Declaring Functions with function()",
      "code": "square <- function(x) { x * x }\nprint(square(5))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Declaring Functions with function().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Declaring Functions with function().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Declaring Functions with function()\n# TODO: Write code below\n\n",
    "solutionCode": "square <- function(x) { x * x }\nprint(square(5))\n",
    "hints": [
      "Write:\nsquare <- function(x) { x * x }\nprint(square(5))"
    ],
    "testCases": [
      {
        "id": "r-76-tc-1",
        "description": "Verifies correct implementation for Declaring Functions with function()",
        "testFn": "code.includes('function')"
      }
    ]
  },
  {
    "id": "r-77-explicit-return-vs-implicit-la",
    "title": "77. Explicit return() vs Implicit Last Expression",
    "slug": "lesson-77-explicit-return-vs-implicit-la",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "R automatically returns the result of the final line.",
    "concepts": [
      "Explicit return() vs Implicit Last Expression",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Explicit return() vs Implicit Last Expression gives you complete architectural control.",
    "explanationMarkdown": "### Explicit return() vs Implicit Last Expression\n\nR automatically returns the result of the final line.\n\n```r\nadd <- function(a, b) { a + b }\nprint(add(10, 20))\n```",
    "workedExample": {
      "title": "Worked Example: Explicit return() vs Implicit Last Expression",
      "code": "add <- function(a, b) { a + b }\nprint(add(10, 20))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Explicit return() vs Implicit Last Expression.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Explicit return() vs Implicit Last Expression.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Explicit return() vs Implicit Last Expression\n# TODO: Write code below\n\n",
    "solutionCode": "add <- function(a, b) { a + b }\nprint(add(10, 20))\n",
    "hints": [
      "Write:\nadd <- function(a, b) { a + b }\nprint(add(10, 20))"
    ],
    "testCases": [
      {
        "id": "r-77-tc-1",
        "description": "Verifies correct implementation for Explicit return() vs Implicit Last Expression",
        "testFn": "code.includes('function')"
      }
    ]
  },
  {
    "id": "r-78-default-function-arguments",
    "title": "78. Default Function Arguments",
    "slug": "lesson-78-default-function-arguments",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Provide fallback values for parameters.",
    "concepts": [
      "Default Function Arguments",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Default Function Arguments gives you complete architectural control.",
    "explanationMarkdown": "### Default Function Arguments\n\nProvide fallback values for parameters.\n\n```r\ngreet <- function(name = 'Friend') { paste('Hello,', name) }\nprint(greet())\n```",
    "workedExample": {
      "title": "Worked Example: Default Function Arguments",
      "code": "greet <- function(name = 'Friend') { paste('Hello,', name) }\nprint(greet())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Default Function Arguments.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Default Function Arguments.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Default Function Arguments\n# TODO: Write code below\n\n",
    "solutionCode": "greet <- function(name = 'Friend') { paste('Hello,', name) }\nprint(greet())\n",
    "hints": [
      "Write:\ngreet <- function(name = 'Friend') { paste('Hello,', name) }\nprint(greet())"
    ],
    "testCases": [
      {
        "id": "r-78-tc-1",
        "description": "Verifies correct implementation for Default Function Arguments",
        "testFn": "code.includes('Friend')"
      }
    ]
  },
  {
    "id": "r-79-passing-arguments-by-position-",
    "title": "79. Passing Arguments by Position vs by Name",
    "slug": "lesson-79-passing-arguments-by-position-",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Call parameters explicitly or sequentially.",
    "concepts": [
      "Passing Arguments by Position vs by Name",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Passing Arguments by Position vs by Name gives you complete architectural control.",
    "explanationMarkdown": "### Passing Arguments by Position vs by Name\n\nCall parameters explicitly or sequentially.\n\n```r\ncalc <- function(a, b) { a - b }\nprint(calc(b = 5, a = 20))\n```",
    "workedExample": {
      "title": "Worked Example: Passing Arguments by Position vs by Name",
      "code": "calc <- function(a, b) { a - b }\nprint(calc(b = 5, a = 20))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Passing Arguments by Position vs by Name.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Passing Arguments by Position vs by Name.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Passing Arguments by Position vs by Name\n# TODO: Write code below\n\n",
    "solutionCode": "calc <- function(a, b) { a - b }\nprint(calc(b = 5, a = 20))\n",
    "hints": [
      "Write:\ncalc <- function(a, b) { a - b }\nprint(calc(b = 5, a = 20))"
    ],
    "testCases": [
      {
        "id": "r-79-tc-1",
        "description": "Verifies correct implementation for Passing Arguments by Position vs by Name",
        "testFn": "code.includes('b = 5')"
      }
    ]
  },
  {
    "id": "r-80-the-ellipsis-variable-argument",
    "title": "80. The Ellipsis (...) Variable Argument Syntax",
    "slug": "lesson-80-the-ellipsis-variable-argument",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Forward arbitrary arguments to downstream functions.",
    "concepts": [
      "The Ellipsis (...) Variable Argument Syntax",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Ellipsis (...) Variable Argument Syntax gives you complete architectural control.",
    "explanationMarkdown": "### The Ellipsis (...) Variable Argument Syntax\n\nForward arbitrary arguments to downstream functions.\n\n```r\nwrapper <- function(...) { sum(...) }\nprint(wrapper(1, 2, 3, 4))\n```",
    "workedExample": {
      "title": "Worked Example: The Ellipsis (...) Variable Argument Syntax",
      "code": "wrapper <- function(...) { sum(...) }\nprint(wrapper(1, 2, 3, 4))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Ellipsis (...) Variable Argument Syntax.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Ellipsis (...) Variable Argument Syntax.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Ellipsis (...) Variable Argument Syntax\n# TODO: Write code below\n\n",
    "solutionCode": "wrapper <- function(...) { sum(...) }\nprint(wrapper(1, 2, 3, 4))\n",
    "hints": [
      "Write:\nwrapper <- function(...) { sum(...) }\nprint(wrapper(1, 2, 3, 4))"
    ],
    "testCases": [
      {
        "id": "r-80-tc-1",
        "description": "Verifies correct implementation for The Ellipsis (...) Variable Argument Syntax",
        "testFn": "code.includes('...')"
      }
    ]
  },
  {
    "id": "r-81-lexical-scoping-in-r-environme",
    "title": "81. Lexical Scoping in R: Environment Hierarchy",
    "slug": "lesson-81-lexical-scoping-in-r-environme",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand how R resolves variable bindings.",
    "concepts": [
      "Lexical Scoping in R: Environment Hierarchy",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Lexical Scoping in R: Environment Hierarchy gives you complete architectural control.",
    "explanationMarkdown": "### Lexical Scoping in R: Environment Hierarchy\n\nUnderstand how R resolves variable bindings.\n\n```r\nx <- 10\nf <- function() { x + 5 }\nprint(f())\n```",
    "workedExample": {
      "title": "Worked Example: Lexical Scoping in R: Environment Hierarchy",
      "code": "x <- 10\nf <- function() { x + 5 }\nprint(f())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lexical Scoping in R: Environment Hierarchy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lexical Scoping in R: Environment Hierarchy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Lexical Scoping in R: Environment Hierarchy\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 10\nf <- function() { x + 5 }\nprint(f())\n",
    "hints": [
      "Write:\nx <- 10\nf <- function() { x + 5 }\nprint(f())"
    ],
    "testCases": [
      {
        "id": "r-81-tc-1",
        "description": "Verifies correct implementation for Lexical Scoping in R: Environment Hierarchy",
        "testFn": "code.includes('f()')"
      }
    ]
  },
  {
    "id": "r-82-the-super-assignment-operator",
    "title": "82. The Super-Assignment Operator (<<-)",
    "slug": "lesson-82-the-super-assignment-operator",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign values to parent environments.",
    "concepts": [
      "The Super-Assignment Operator (<<-)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Super-Assignment Operator (<<-) gives you complete architectural control.",
    "explanationMarkdown": "### The Super-Assignment Operator (<<-)\n\nAssign values to parent environments.\n\n```r\nval <- 0\nmod <- function() { val <<- 99 }\nmod()\nprint(val)\n```",
    "workedExample": {
      "title": "Worked Example: The Super-Assignment Operator (<<-)",
      "code": "val <- 0\nmod <- function() { val <<- 99 }\nmod()\nprint(val)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Super-Assignment Operator (<<-).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Super-Assignment Operator (<<-).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Super-Assignment Operator (<<-)\n# TODO: Write code below\n\n",
    "solutionCode": "val <- 0\nmod <- function() { val <<- 99 }\nmod()\nprint(val)\n",
    "hints": [
      "Write:\nval <- 0\nmod <- function() { val <<- 99 }\nmod()\nprint(val)"
    ],
    "testCases": [
      {
        "id": "r-82-tc-1",
        "description": "Verifies correct implementation for The Super-Assignment Operator (<<-)",
        "testFn": "code.includes('<<-')"
      }
    ]
  },
  {
    "id": "r-83-anonymous-lambda-functions-in-",
    "title": "83. Anonymous (Lambda) Functions in Modern R (\\(x))",
    "slug": "lesson-83-anonymous-lambda-functions-in-",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Concise lambda syntax in modern R 4.1+.",
    "concepts": [
      "Anonymous (Lambda) Functions in Modern R (\\(x))",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Anonymous (Lambda) Functions in Modern R (\\(x)) gives you complete architectural control.",
    "explanationMarkdown": "### Anonymous (Lambda) Functions in Modern R (\\(x))\n\nConcise lambda syntax in modern R 4.1+.\n\n```r\nfn <- \\(x) x * 2\nprint(fn(7))\n```",
    "workedExample": {
      "title": "Worked Example: Anonymous (Lambda) Functions in Modern R (\\(x))",
      "code": "fn <- \\(x) x * 2\nprint(fn(7))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anonymous (Lambda) Functions in Modern R (\\(x)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anonymous (Lambda) Functions in Modern R (\\(x)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Anonymous (Lambda) Functions in Modern R (\\(x))\n# TODO: Write code below\n\n",
    "solutionCode": "fn <- \\(x) x * 2\nprint(fn(7))\n",
    "hints": [
      "Write:\nfn <- \\(x) x * 2\nprint(fn(7))"
    ],
    "testCases": [
      {
        "id": "r-83-tc-1",
        "description": "Verifies correct implementation for Anonymous (Lambda) Functions in Modern R (\\(x))",
        "testFn": "code.includes('fn')"
      }
    ]
  },
  {
    "id": "r-84-returning-multiple-values-via-",
    "title": "84. Returning Multiple Values via Named Lists",
    "slug": "lesson-84-returning-multiple-values-via-",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bundle outputs for clean structured returns.",
    "concepts": [
      "Returning Multiple Values via Named Lists",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Returning Multiple Values via Named Lists gives you complete architectural control.",
    "explanationMarkdown": "### Returning Multiple Values via Named Lists\n\nBundle outputs for clean structured returns.\n\n```r\nstats <- function(v) { list(mean = mean(v), total = sum(v)) }\nprint(stats(c(1, 2, 3))$mean)\n```",
    "workedExample": {
      "title": "Worked Example: Returning Multiple Values via Named Lists",
      "code": "stats <- function(v) { list(mean = mean(v), total = sum(v)) }\nprint(stats(c(1, 2, 3))$mean)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Returning Multiple Values via Named Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Returning Multiple Values via Named Lists.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Returning Multiple Values via Named Lists\n# TODO: Write code below\n\n",
    "solutionCode": "stats <- function(v) { list(mean = mean(v), total = sum(v)) }\nprint(stats(c(1, 2, 3))$mean)\n",
    "hints": [
      "Write:\nstats <- function(v) { list(mean = mean(v), total = sum(v)) }\nprint(stats(c(1, 2, 3))$mean)"
    ],
    "testCases": [
      {
        "id": "r-84-tc-1",
        "description": "Verifies correct implementation for Returning Multiple Values via Named Lists",
        "testFn": "code.includes('list')"
      }
    ]
  },
  {
    "id": "r-85-lazy-evaluation-in-r-arguments",
    "title": "85. Lazy Evaluation in R Arguments",
    "slug": "lesson-85-lazy-evaluation-in-r-arguments",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Arguments are evaluated only when accessed.",
    "concepts": [
      "Lazy Evaluation in R Arguments",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Lazy Evaluation in R Arguments gives you complete architectural control.",
    "explanationMarkdown": "### Lazy Evaluation in R Arguments\n\nArguments are evaluated only when accessed.\n\n```r\nlazy <- function(x, y) { x * 2 }\nprint(lazy(10, stop('Unused!')))\n```",
    "workedExample": {
      "title": "Worked Example: Lazy Evaluation in R Arguments",
      "code": "lazy <- function(x, y) { x * 2 }\nprint(lazy(10, stop('Unused!')))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lazy Evaluation in R Arguments.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lazy Evaluation in R Arguments.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Lazy Evaluation in R Arguments\n# TODO: Write code below\n\n",
    "solutionCode": "lazy <- function(x, y) { x * 2 }\nprint(lazy(10, stop('Unused!')))\n",
    "hints": [
      "Write:\nlazy <- function(x, y) { x * 2 }\nprint(lazy(10, stop('Unused!')))"
    ],
    "testCases": [
      {
        "id": "r-85-tc-1",
        "description": "Verifies correct implementation for Lazy Evaluation in R Arguments",
        "testFn": "code.includes('lazy')"
      }
    ]
  },
  {
    "id": "r-86-input-validation-with-stopifno",
    "title": "86. Input Validation with stopifnot()",
    "slug": "lesson-86-input-validation-with-stopifno",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Guard functions against invalid inputs.",
    "concepts": [
      "Input Validation with stopifnot()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Input Validation with stopifnot() gives you complete architectural control.",
    "explanationMarkdown": "### Input Validation with stopifnot()\n\nGuard functions against invalid inputs.\n\n```r\ncheck_pos <- function(x) { stopifnot(x > 0); x }\nprint(check_pos(5))\n```",
    "workedExample": {
      "title": "Worked Example: Input Validation with stopifnot()",
      "code": "check_pos <- function(x) { stopifnot(x > 0); x }\nprint(check_pos(5))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Input Validation with stopifnot().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Input Validation with stopifnot().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Input Validation with stopifnot()\n# TODO: Write code below\n\n",
    "solutionCode": "check_pos <- function(x) { stopifnot(x > 0); x }\nprint(check_pos(5))\n",
    "hints": [
      "Write:\ncheck_pos <- function(x) { stopifnot(x > 0); x }\nprint(check_pos(5))"
    ],
    "testCases": [
      {
        "id": "r-86-tc-1",
        "description": "Verifies correct implementation for Input Validation with stopifnot()",
        "testFn": "code.includes('stopifnot')"
      }
    ]
  },
  {
    "id": "r-87-function-closures-functions-th",
    "title": "87. Function Closures: Functions that Return Functions",
    "slug": "lesson-87-function-closures-functions-th",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preserve environment state in generator functions.",
    "concepts": [
      "Function Closures: Functions that Return Functions",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Function Closures: Functions that Return Functions gives you complete architectural control.",
    "explanationMarkdown": "### Function Closures: Functions that Return Functions\n\nPreserve environment state in generator functions.\n\n```r\nmultiplier <- function(factor) { function(x) x * factor }\ndouble <- multiplier(2)\nprint(double(8))\n```",
    "workedExample": {
      "title": "Worked Example: Function Closures: Functions that Return Functions",
      "code": "multiplier <- function(factor) { function(x) x * factor }\ndouble <- multiplier(2)\nprint(double(8))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Function Closures: Functions that Return Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Function Closures: Functions that Return Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Function Closures: Functions that Return Functions\n# TODO: Write code below\n\n",
    "solutionCode": "multiplier <- function(factor) { function(x) x * factor }\ndouble <- multiplier(2)\nprint(double(8))\n",
    "hints": [
      "Write:\nmultiplier <- function(factor) { function(x) x * factor }\ndouble <- multiplier(2)\nprint(double(8))"
    ],
    "testCases": [
      {
        "id": "r-87-tc-1",
        "description": "Verifies correct implementation for Function Closures: Functions that Return Functions",
        "testFn": "code.includes('function')"
      }
    ]
  },
  {
    "id": "r-88-recursive-functions-in-r",
    "title": "88. Recursive Functions in R",
    "slug": "lesson-88-recursive-functions-in-r",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Implement recursion for tree and factorial structures.",
    "concepts": [
      "Recursive Functions in R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Recursive Functions in R gives you complete architectural control.",
    "explanationMarkdown": "### Recursive Functions in R\n\nImplement recursion for tree and factorial structures.\n\n```r\nfact <- function(n) { if (n <= 1) 1 else n * fact(n - 1) }\nprint(fact(4))\n```",
    "workedExample": {
      "title": "Worked Example: Recursive Functions in R",
      "code": "fact <- function(n) { if (n <= 1) 1 else n * fact(n - 1) }\nprint(fact(4))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recursive Functions in R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recursive Functions in R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Recursive Functions in R\n# TODO: Write code below\n\n",
    "solutionCode": "fact <- function(n) { if (n <= 1) 1 else n * fact(n - 1) }\nprint(fact(4))\n",
    "hints": [
      "Write:\nfact <- function(n) { if (n <= 1) 1 else n * fact(n - 1) }\nprint(fact(4))"
    ],
    "testCases": [
      {
        "id": "r-88-tc-1",
        "description": "Verifies correct implementation for Recursive Functions in R",
        "testFn": "code.includes('fact')"
      }
    ]
  },
  {
    "id": "r-89-error-handling-with-trycatch",
    "title": "89. Error Handling with tryCatch()",
    "slug": "lesson-89-error-handling-with-trycatch",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Gracefully handle errors and warnings in pipelines.",
    "concepts": [
      "Error Handling with tryCatch()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Error Handling with tryCatch() gives you complete architectural control.",
    "explanationMarkdown": "### Error Handling with tryCatch()\n\nGracefully handle errors and warnings in pipelines.\n\n```r\nres <- tryCatch(10 / 2, error = function(e) -1)\nprint(res)\n```",
    "workedExample": {
      "title": "Worked Example: Error Handling with tryCatch()",
      "code": "res <- tryCatch(10 / 2, error = function(e) -1)\nprint(res)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Error Handling with tryCatch().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Error Handling with tryCatch().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Error Handling with tryCatch()\n# TODO: Write code below\n\n",
    "solutionCode": "res <- tryCatch(10 / 2, error = function(e) -1)\nprint(res)\n",
    "hints": [
      "Write:\nres <- tryCatch(10 / 2, error = function(e) -1)\nprint(res)"
    ],
    "testCases": [
      {
        "id": "r-89-tc-1",
        "description": "Verifies correct implementation for Error Handling with tryCatch()",
        "testFn": "code.includes('tryCatch')"
      }
    ]
  },
  {
    "id": "r-90-function-documentation-and-att",
    "title": "90. Function Documentation and Attributes",
    "slug": "lesson-90-function-documentation-and-att",
    "language": "r",
    "category": "Module 6: User-Defined Functions & Lexical Scope",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Attach metadata to functions.",
    "concepts": [
      "Function Documentation and Attributes",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Function Documentation and Attributes gives you complete architectural control.",
    "explanationMarkdown": "### Function Documentation and Attributes\n\nAttach metadata to functions.\n\n```r\nf <- function(x) x\nattr(f, 'author') <- 'DevForge'\nprint(attr(f, 'author'))\n```",
    "workedExample": {
      "title": "Worked Example: Function Documentation and Attributes",
      "code": "f <- function(x) x\nattr(f, 'author') <- 'DevForge'\nprint(attr(f, 'author'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Function Documentation and Attributes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Function Documentation and Attributes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Function Documentation and Attributes\n# TODO: Write code below\n\n",
    "solutionCode": "f <- function(x) x\nattr(f, 'author') <- 'DevForge'\nprint(attr(f, 'author'))\n",
    "hints": [
      "Write:\nf <- function(x) x\nattr(f, 'author') <- 'DevForge'\nprint(attr(f, 'author'))"
    ],
    "testCases": [
      {
        "id": "r-90-tc-1",
        "description": "Verifies correct implementation for Function Documentation and Attributes",
        "testFn": "code.includes('attr')"
      }
    ]
  },
  {
    "id": "r-91-overview-of-the-apply-family-i",
    "title": "91. Overview of the Apply Family in Base R",
    "slug": "lesson-91-overview-of-the-apply-family-i",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Vectorized functional alternatives to explicit for loops.",
    "concepts": [
      "Overview of the Apply Family in Base R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Overview of the Apply Family in Base R gives you complete architectural control.",
    "explanationMarkdown": "### Overview of the Apply Family in Base R\n\nVectorized functional alternatives to explicit for loops.\n\n```r\ncat('Apply family: apply, lapply, sapply, vapply, tapply')\n```",
    "workedExample": {
      "title": "Worked Example: Overview of the Apply Family in Base R",
      "code": "cat('Apply family: apply, lapply, sapply, vapply, tapply')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Overview of the Apply Family in Base R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Overview of the Apply Family in Base R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Overview of the Apply Family in Base R\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Apply family: apply, lapply, sapply, vapply, tapply')\n",
    "hints": [
      "Write:\ncat('Apply family: apply, lapply, sapply, vapply, tapply')"
    ],
    "testCases": [
      {
        "id": "r-91-tc-1",
        "description": "Verifies correct implementation for Overview of the Apply Family in Base R",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-92-lapply-apply-function-over-lis",
    "title": "92. lapply(): Apply Function Over List and Return List",
    "slug": "lesson-92-lapply-apply-function-over-lis",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Transform list elements and preserve list structure.",
    "concepts": [
      "lapply(): Apply Function Over List and Return List",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: lapply(): Apply Function Over List and Return List gives you complete architectural control.",
    "explanationMarkdown": "### lapply(): Apply Function Over List and Return List\n\nTransform list elements and preserve list structure.\n\n```r\nnums <- list(a = 1:3, b = 4:6)\nprint(lapply(nums, sum))\n```",
    "workedExample": {
      "title": "Worked Example: lapply(): Apply Function Over List and Return List",
      "code": "nums <- list(a = 1:3, b = 4:6)\nprint(lapply(nums, sum))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for lapply(): Apply Function Over List and Return List.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of lapply(): Apply Function Over List and Return List.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement lapply(): Apply Function Over List and Return List\n# TODO: Write code below\n\n",
    "solutionCode": "nums <- list(a = 1:3, b = 4:6)\nprint(lapply(nums, sum))\n",
    "hints": [
      "Write:\nnums <- list(a = 1:3, b = 4:6)\nprint(lapply(nums, sum))"
    ],
    "testCases": [
      {
        "id": "r-92-tc-1",
        "description": "Verifies correct implementation for lapply(): Apply Function Over List and Return List",
        "testFn": "code.includes('lapply')"
      }
    ]
  },
  {
    "id": "r-93-sapply-simplify-list-output-to",
    "title": "93. sapply(): Simplify List Output to Vector or Matrix",
    "slug": "lesson-93-sapply-simplify-list-output-to",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Apply and simplify results to vector where possible.",
    "concepts": [
      "sapply(): Simplify List Output to Vector or Matrix",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: sapply(): Simplify List Output to Vector or Matrix gives you complete architectural control.",
    "explanationMarkdown": "### sapply(): Simplify List Output to Vector or Matrix\n\nApply and simplify results to vector where possible.\n\n```r\nnums <- list(a = 1:3, b = 4:6)\nprint(sapply(nums, sum))\n```",
    "workedExample": {
      "title": "Worked Example: sapply(): Simplify List Output to Vector or Matrix",
      "code": "nums <- list(a = 1:3, b = 4:6)\nprint(sapply(nums, sum))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for sapply(): Simplify List Output to Vector or Matrix.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of sapply(): Simplify List Output to Vector or Matrix.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement sapply(): Simplify List Output to Vector or Matrix\n# TODO: Write code below\n\n",
    "solutionCode": "nums <- list(a = 1:3, b = 4:6)\nprint(sapply(nums, sum))\n",
    "hints": [
      "Write:\nnums <- list(a = 1:3, b = 4:6)\nprint(sapply(nums, sum))"
    ],
    "testCases": [
      {
        "id": "r-93-tc-1",
        "description": "Verifies correct implementation for sapply(): Simplify List Output to Vector or Matrix",
        "testFn": "code.includes('sapply')"
      }
    ]
  },
  {
    "id": "r-94-vapply-type-safe-and-strict-ou",
    "title": "94. vapply(): Type-Safe and Strict Output Specification",
    "slug": "lesson-94-vapply-type-safe-and-strict-ou",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enforce return value type and structure strictly.",
    "concepts": [
      "vapply(): Type-Safe and Strict Output Specification",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: vapply(): Type-Safe and Strict Output Specification gives you complete architectural control.",
    "explanationMarkdown": "### vapply(): Type-Safe and Strict Output Specification\n\nEnforce return value type and structure strictly.\n\n```r\nl <- list(a = 1:2, b = 3:4)\nprint(vapply(l, sum, FUN.VALUE = numeric(1)))\n```",
    "workedExample": {
      "title": "Worked Example: vapply(): Type-Safe and Strict Output Specification",
      "code": "l <- list(a = 1:2, b = 3:4)\nprint(vapply(l, sum, FUN.VALUE = numeric(1)))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for vapply(): Type-Safe and Strict Output Specification.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of vapply(): Type-Safe and Strict Output Specification.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement vapply(): Type-Safe and Strict Output Specification\n# TODO: Write code below\n\n",
    "solutionCode": "l <- list(a = 1:2, b = 3:4)\nprint(vapply(l, sum, FUN.VALUE = numeric(1)))\n",
    "hints": [
      "Write:\nl <- list(a = 1:2, b = 3:4)\nprint(vapply(l, sum, FUN.VALUE = numeric(1)))"
    ],
    "testCases": [
      {
        "id": "r-94-tc-1",
        "description": "Verifies correct implementation for vapply(): Type-Safe and Strict Output Specification",
        "testFn": "code.includes('vapply')"
      }
    ]
  },
  {
    "id": "r-95-apply-apply-functions-across-m",
    "title": "95. apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols)",
    "slug": "lesson-95-apply-apply-functions-across-m",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute across matrix dimensions.",
    "concepts": [
      "apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols) gives you complete architectural control.",
    "explanationMarkdown": "### apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols)\n\nCompute across matrix dimensions.\n\n```r\nm <- matrix(1:6, nrow = 2)\nprint(apply(m, 1, sum))\n```",
    "workedExample": {
      "title": "Worked Example: apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols)",
      "code": "m <- matrix(1:6, nrow = 2)\nprint(apply(m, 1, sum))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols)\n# TODO: Write code below\n\n",
    "solutionCode": "m <- matrix(1:6, nrow = 2)\nprint(apply(m, 1, sum))\n",
    "hints": [
      "Write:\nm <- matrix(1:6, nrow = 2)\nprint(apply(m, 1, sum))"
    ],
    "testCases": [
      {
        "id": "r-95-tc-1",
        "description": "Verifies correct implementation for apply(): Apply Functions Across Matrix Margins (1=Rows, 2=Cols)",
        "testFn": "code.includes('apply(m, 1')"
      }
    ]
  },
  {
    "id": "r-96-tapply-table-apply-grouped-by-",
    "title": "96. tapply(): Table Apply Grouped by Factors",
    "slug": "lesson-96-tapply-table-apply-grouped-by-",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Aggregate metrics across categorical factor levels.",
    "concepts": [
      "tapply(): Table Apply Grouped by Factors",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: tapply(): Table Apply Grouped by Factors gives you complete architectural control.",
    "explanationMarkdown": "### tapply(): Table Apply Grouped by Factors\n\nAggregate metrics across categorical factor levels.\n\n```r\nages <- c(25, 30, 22, 28)\ngroup <- factor(c('A', 'A', 'B', 'B'))\nprint(tapply(ages, group, mean))\n```",
    "workedExample": {
      "title": "Worked Example: tapply(): Table Apply Grouped by Factors",
      "code": "ages <- c(25, 30, 22, 28)\ngroup <- factor(c('A', 'A', 'B', 'B'))\nprint(tapply(ages, group, mean))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for tapply(): Table Apply Grouped by Factors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of tapply(): Table Apply Grouped by Factors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement tapply(): Table Apply Grouped by Factors\n# TODO: Write code below\n\n",
    "solutionCode": "ages <- c(25, 30, 22, 28)\ngroup <- factor(c('A', 'A', 'B', 'B'))\nprint(tapply(ages, group, mean))\n",
    "hints": [
      "Write:\nages <- c(25, 30, 22, 28)\ngroup <- factor(c('A', 'A', 'B', 'B'))\nprint(tapply(ages, group, mean))"
    ],
    "testCases": [
      {
        "id": "r-96-tc-1",
        "description": "Verifies correct implementation for tapply(): Table Apply Grouped by Factors",
        "testFn": "code.includes('tapply')"
      }
    ]
  },
  {
    "id": "r-97-mapply-multivariate-apply-acro",
    "title": "97. mapply(): Multivariate Apply Across Multiple Vectors",
    "slug": "lesson-97-mapply-multivariate-apply-acro",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass paired elements from multiple inputs simultaneously.",
    "concepts": [
      "mapply(): Multivariate Apply Across Multiple Vectors",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: mapply(): Multivariate Apply Across Multiple Vectors gives you complete architectural control.",
    "explanationMarkdown": "### mapply(): Multivariate Apply Across Multiple Vectors\n\nPass paired elements from multiple inputs simultaneously.\n\n```r\nprint(mapply(rep, 1:3, 3:1))\n```",
    "workedExample": {
      "title": "Worked Example: mapply(): Multivariate Apply Across Multiple Vectors",
      "code": "print(mapply(rep, 1:3, 3:1))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for mapply(): Multivariate Apply Across Multiple Vectors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of mapply(): Multivariate Apply Across Multiple Vectors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement mapply(): Multivariate Apply Across Multiple Vectors\n# TODO: Write code below\n\n",
    "solutionCode": "print(mapply(rep, 1:3, 3:1))\n",
    "hints": [
      "Write:\nprint(mapply(rep, 1:3, 3:1))"
    ],
    "testCases": [
      {
        "id": "r-97-tc-1",
        "description": "Verifies correct implementation for mapply(): Multivariate Apply Across Multiple Vectors",
        "testFn": "code.includes('mapply')"
      }
    ]
  },
  {
    "id": "r-98-passing-additional-arguments-i",
    "title": "98. Passing Additional Arguments in apply() Calls",
    "slug": "lesson-98-passing-additional-arguments-i",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Forward parameters through apply functions.",
    "concepts": [
      "Passing Additional Arguments in apply() Calls",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Passing Additional Arguments in apply() Calls gives you complete architectural control.",
    "explanationMarkdown": "### Passing Additional Arguments in apply() Calls\n\nForward parameters through apply functions.\n\n```r\nl <- list(c(1, 2, NA), c(3, 4, 5))\nprint(sapply(l, mean, na.rm = TRUE))\n```",
    "workedExample": {
      "title": "Worked Example: Passing Additional Arguments in apply() Calls",
      "code": "l <- list(c(1, 2, NA), c(3, 4, 5))\nprint(sapply(l, mean, na.rm = TRUE))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Passing Additional Arguments in apply() Calls.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Passing Additional Arguments in apply() Calls.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Passing Additional Arguments in apply() Calls\n# TODO: Write code below\n\n",
    "solutionCode": "l <- list(c(1, 2, NA), c(3, 4, 5))\nprint(sapply(l, mean, na.rm = TRUE))\n",
    "hints": [
      "Write:\nl <- list(c(1, 2, NA), c(3, 4, 5))\nprint(sapply(l, mean, na.rm = TRUE))"
    ],
    "testCases": [
      {
        "id": "r-98-tc-1",
        "description": "Verifies correct implementation for Passing Additional Arguments in apply() Calls",
        "testFn": "code.includes('na.rm')"
      }
    ]
  },
  {
    "id": "r-99-anonymous-functions-in-lapply-",
    "title": "99. Anonymous Functions in lapply / sapply",
    "slug": "lesson-99-anonymous-functions-in-lapply-",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inject inline custom transformations.",
    "concepts": [
      "Anonymous Functions in lapply / sapply",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Anonymous Functions in lapply / sapply gives you complete architectural control.",
    "explanationMarkdown": "### Anonymous Functions in lapply / sapply\n\nInject inline custom transformations.\n\n```r\nl <- list(1:3, 4:6)\nprint(sapply(l, function(x) max(x) - min(x)))\n```",
    "workedExample": {
      "title": "Worked Example: Anonymous Functions in lapply / sapply",
      "code": "l <- list(1:3, 4:6)\nprint(sapply(l, function(x) max(x) - min(x)))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anonymous Functions in lapply / sapply.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anonymous Functions in lapply / sapply.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Anonymous Functions in lapply / sapply\n# TODO: Write code below\n\n",
    "solutionCode": "l <- list(1:3, 4:6)\nprint(sapply(l, function(x) max(x) - min(x)))\n",
    "hints": [
      "Write:\nl <- list(1:3, 4:6)\nprint(sapply(l, function(x) max(x) - min(x)))"
    ],
    "testCases": [
      {
        "id": "r-99-tc-1",
        "description": "Verifies correct implementation for Anonymous Functions in lapply / sapply",
        "testFn": "code.includes('function')"
      }
    ]
  },
  {
    "id": "r-100-split-partitioning-data-by-fac",
    "title": "100. split(): Partitioning Data by Factor",
    "slug": "lesson-100-split-partitioning-data-by-fac",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Divide datasets into list chunks by factor levels.",
    "concepts": [
      "split(): Partitioning Data by Factor",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: split(): Partitioning Data by Factor gives you complete architectural control.",
    "explanationMarkdown": "### split(): Partitioning Data by Factor\n\nDivide datasets into list chunks by factor levels.\n\n```r\nx <- 1:6\ng <- factor(c('A', 'A', 'B', 'B', 'C', 'C'))\nprint(split(x, g))\n```",
    "workedExample": {
      "title": "Worked Example: split(): Partitioning Data by Factor",
      "code": "x <- 1:6\ng <- factor(c('A', 'A', 'B', 'B', 'C', 'C'))\nprint(split(x, g))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for split(): Partitioning Data by Factor.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of split(): Partitioning Data by Factor.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement split(): Partitioning Data by Factor\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 1:6\ng <- factor(c('A', 'A', 'B', 'B', 'C', 'C'))\nprint(split(x, g))\n",
    "hints": [
      "Write:\nx <- 1:6\ng <- factor(c('A', 'A', 'B', 'B', 'C', 'C'))\nprint(split(x, g))"
    ],
    "testCases": [
      {
        "id": "r-100-tc-1",
        "description": "Verifies correct implementation for split(): Partitioning Data by Factor",
        "testFn": "code.includes('split')"
      }
    ]
  },
  {
    "id": "r-101-split-apply-combine-pattern-in",
    "title": "101. split-apply-combine Pattern in Base R",
    "slug": "lesson-101-split-apply-combine-pattern-in",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The foundational data science pipeline paradigm.",
    "concepts": [
      "split-apply-combine Pattern in Base R",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: split-apply-combine Pattern in Base R gives you complete architectural control.",
    "explanationMarkdown": "### split-apply-combine Pattern in Base R\n\nThe foundational data science pipeline paradigm.\n\n```r\ndf <- data.frame(val = 1:4, grp = c('X', 'X', 'Y', 'Y'))\ns <- split(df$val, df$grp)\nprint(sapply(s, sum))\n```",
    "workedExample": {
      "title": "Worked Example: split-apply-combine Pattern in Base R",
      "code": "df <- data.frame(val = 1:4, grp = c('X', 'X', 'Y', 'Y'))\ns <- split(df$val, df$grp)\nprint(sapply(s, sum))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for split-apply-combine Pattern in Base R.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of split-apply-combine Pattern in Base R.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement split-apply-combine Pattern in Base R\n# TODO: Write code below\n\n",
    "solutionCode": "df <- data.frame(val = 1:4, grp = c('X', 'X', 'Y', 'Y'))\ns <- split(df$val, df$grp)\nprint(sapply(s, sum))\n",
    "hints": [
      "Write:\ndf <- data.frame(val = 1:4, grp = c('X', 'X', 'Y', 'Y'))\ns <- split(df$val, df$grp)\nprint(sapply(s, sum))"
    ],
    "testCases": [
      {
        "id": "r-101-tc-1",
        "description": "Verifies correct implementation for split-apply-combine Pattern in Base R",
        "testFn": "code.includes('sapply')"
      }
    ]
  },
  {
    "id": "r-102-reduce-cumulative-binary-aggre",
    "title": "102. Reduce(): Cumulative Binary Aggregation",
    "slug": "lesson-102-reduce-cumulative-binary-aggre",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fold elements together using a binary function.",
    "concepts": [
      "Reduce(): Cumulative Binary Aggregation",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Reduce(): Cumulative Binary Aggregation gives you complete architectural control.",
    "explanationMarkdown": "### Reduce(): Cumulative Binary Aggregation\n\nFold elements together using a binary function.\n\n```r\nv <- c(1, 2, 3, 4)\nprint(Reduce(`+`, v))\n```",
    "workedExample": {
      "title": "Worked Example: Reduce(): Cumulative Binary Aggregation",
      "code": "v <- c(1, 2, 3, 4)\nprint(Reduce(`+`, v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reduce(): Cumulative Binary Aggregation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reduce(): Cumulative Binary Aggregation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Reduce(): Cumulative Binary Aggregation\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(1, 2, 3, 4)\nprint(Reduce(`+`, v))\n",
    "hints": [
      "Write:\nv <- c(1, 2, 3, 4)\nprint(Reduce(`+`, v))"
    ],
    "testCases": [
      {
        "id": "r-102-tc-1",
        "description": "Verifies correct implementation for Reduce(): Cumulative Binary Aggregation",
        "testFn": "code.includes('Reduce')"
      }
    ]
  },
  {
    "id": "r-103-filter-higher-order-element-se",
    "title": "103. Filter(): Higher-Order Element Selection",
    "slug": "lesson-103-filter-higher-order-element-se",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter vectors with boolean predicates.",
    "concepts": [
      "Filter(): Higher-Order Element Selection",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Filter(): Higher-Order Element Selection gives you complete architectural control.",
    "explanationMarkdown": "### Filter(): Higher-Order Element Selection\n\nFilter vectors with boolean predicates.\n\n```r\nv <- 1:6\nprint(Filter(function(x) x %% 2 == 0, v))\n```",
    "workedExample": {
      "title": "Worked Example: Filter(): Higher-Order Element Selection",
      "code": "v <- 1:6\nprint(Filter(function(x) x %% 2 == 0, v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filter(): Higher-Order Element Selection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filter(): Higher-Order Element Selection.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filter(): Higher-Order Element Selection\n# TODO: Write code below\n\n",
    "solutionCode": "v <- 1:6\nprint(Filter(function(x) x %% 2 == 0, v))\n",
    "hints": [
      "Write:\nv <- 1:6\nprint(Filter(function(x) x %% 2 == 0, v))"
    ],
    "testCases": [
      {
        "id": "r-103-tc-1",
        "description": "Verifies correct implementation for Filter(): Higher-Order Element Selection",
        "testFn": "code.includes('Filter')"
      }
    ]
  },
  {
    "id": "r-104-map-functional-transformation",
    "title": "104. Map(): Functional Transformation",
    "slug": "lesson-104-map-functional-transformation",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Wrapper around mapply for clean mappings.",
    "concepts": [
      "Map(): Functional Transformation",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Map(): Functional Transformation gives you complete architectural control.",
    "explanationMarkdown": "### Map(): Functional Transformation\n\nWrapper around mapply for clean mappings.\n\n```r\nprint(Map(`*`, 1:3, 10))\n```",
    "workedExample": {
      "title": "Worked Example: Map(): Functional Transformation",
      "code": "print(Map(`*`, 1:3, 10))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Map(): Functional Transformation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Map(): Functional Transformation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Map(): Functional Transformation\n# TODO: Write code below\n\n",
    "solutionCode": "print(Map(`*`, 1:3, 10))\n",
    "hints": [
      "Write:\nprint(Map(`*`, 1:3, 10))"
    ],
    "testCases": [
      {
        "id": "r-104-tc-1",
        "description": "Verifies correct implementation for Map(): Functional Transformation",
        "testFn": "code.includes('Map')"
      }
    ]
  },
  {
    "id": "r-105-benchmarking-function-speed-wi",
    "title": "105. Benchmarking Function Speed with system.time()",
    "slug": "lesson-105-benchmarking-function-speed-wi",
    "language": "r",
    "category": "Module 7: The Apply Family & Functional Programming",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Profile execution latency of R operations.",
    "concepts": [
      "Benchmarking Function Speed with system.time()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Benchmarking Function Speed with system.time() gives you complete architectural control.",
    "explanationMarkdown": "### Benchmarking Function Speed with system.time()\n\nProfile execution latency of R operations.\n\n```r\nt <- system.time(sum(1:10000))\ncat('User CPU time:', t[1])\n```",
    "workedExample": {
      "title": "Worked Example: Benchmarking Function Speed with system.time()",
      "code": "t <- system.time(sum(1:10000))\ncat('User CPU time:', t[1])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Benchmarking Function Speed with system.time().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Benchmarking Function Speed with system.time().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Benchmarking Function Speed with system.time()\n# TODO: Write code below\n\n",
    "solutionCode": "t <- system.time(sum(1:10000))\ncat('User CPU time:', t[1])\n",
    "hints": [
      "Write:\nt <- system.time(sum(1:10000))\ncat('User CPU time:', t[1])"
    ],
    "testCases": [
      {
        "id": "r-105-tc-1",
        "description": "Verifies correct implementation for Benchmarking Function Speed with system.time()",
        "testFn": "code.includes('system.time')"
      }
    ]
  },
  {
    "id": "r-106-the-tidyverse-philosophy-and-t",
    "title": "106. The Tidyverse Philosophy and the Native Pipe (|>)",
    "slug": "lesson-106-the-tidyverse-philosophy-and-t",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Modern readable pipeline syntax in R.",
    "concepts": [
      "The Tidyverse Philosophy and the Native Pipe (|>)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Tidyverse Philosophy and the Native Pipe (|>) gives you complete architectural control.",
    "explanationMarkdown": "### The Tidyverse Philosophy and the Native Pipe (|>)\n\nModern readable pipeline syntax in R.\n\n```r\nx <- c(1, 4, 9) |> sqrt() |> sum()\nprint(x)\n```",
    "workedExample": {
      "title": "Worked Example: The Tidyverse Philosophy and the Native Pipe (|>)",
      "code": "x <- c(1, 4, 9) |> sqrt() |> sum()\nprint(x)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Tidyverse Philosophy and the Native Pipe (|>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Tidyverse Philosophy and the Native Pipe (|>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Tidyverse Philosophy and the Native Pipe (|>)\n# TODO: Write code below\n\n",
    "solutionCode": "x <- c(1, 4, 9) |> sqrt() |> sum()\nprint(x)\n",
    "hints": [
      "Write:\nx <- c(1, 4, 9) |> sqrt() |> sum()\nprint(x)"
    ],
    "testCases": [
      {
        "id": "r-106-tc-1",
        "description": "Verifies correct implementation for The Tidyverse Philosophy and the Native Pipe (|>)",
        "testFn": "code.includes('|>')"
      }
    ]
  },
  {
    "id": "r-107-filtering-rows-with-dplyr-filt",
    "title": "107. Filtering Rows with dplyr::filter()",
    "slug": "lesson-107-filtering-rows-with-dplyr-filt",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Select rows based on expressive conditions.",
    "concepts": [
      "Filtering Rows with dplyr::filter()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Filtering Rows with dplyr::filter() gives you complete architectural control.",
    "explanationMarkdown": "### Filtering Rows with dplyr::filter()\n\nSelect rows based on expressive conditions.\n\n```r\ncat('dplyr filter: df |> filter(age >= 18, state == \"CA\")')\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Rows with dplyr::filter()",
      "code": "cat('dplyr filter: df |> filter(age >= 18, state == \"CA\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Rows with dplyr::filter().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Rows with dplyr::filter().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering Rows with dplyr::filter()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr filter: df |> filter(age >= 18, state == \"CA\")')\n",
    "hints": [
      "Write:\ncat('dplyr filter: df |> filter(age >= 18, state == \"CA\")')"
    ],
    "testCases": [
      {
        "id": "r-107-tc-1",
        "description": "Verifies correct implementation for Filtering Rows with dplyr::filter()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-108-selecting-columns-with-dplyr-s",
    "title": "108. Selecting Columns with dplyr::select()",
    "slug": "lesson-108-selecting-columns-with-dplyr-s",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pick and rename target columns.",
    "concepts": [
      "Selecting Columns with dplyr::select()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Selecting Columns with dplyr::select() gives you complete architectural control.",
    "explanationMarkdown": "### Selecting Columns with dplyr::select()\n\nPick and rename target columns.\n\n```r\ncat('dplyr select: df |> select(id, user_name, total)')\n```",
    "workedExample": {
      "title": "Worked Example: Selecting Columns with dplyr::select()",
      "code": "cat('dplyr select: df |> select(id, user_name, total)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Selecting Columns with dplyr::select().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Selecting Columns with dplyr::select().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Selecting Columns with dplyr::select()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr select: df |> select(id, user_name, total)')\n",
    "hints": [
      "Write:\ncat('dplyr select: df |> select(id, user_name, total)')"
    ],
    "testCases": [
      {
        "id": "r-108-tc-1",
        "description": "Verifies correct implementation for Selecting Columns with dplyr::select()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-109-sorting-records-with-dplyr-arr",
    "title": "109. Sorting Records with dplyr::arrange() and desc()",
    "slug": "lesson-109-sorting-records-with-dplyr-arr",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sort datasets ascending or descending.",
    "concepts": [
      "Sorting Records with dplyr::arrange() and desc()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Sorting Records with dplyr::arrange() and desc() gives you complete architectural control.",
    "explanationMarkdown": "### Sorting Records with dplyr::arrange() and desc()\n\nSort datasets ascending or descending.\n\n```r\ncat('dplyr arrange: df |> arrange(desc(score), date)')\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Records with dplyr::arrange() and desc()",
      "code": "cat('dplyr arrange: df |> arrange(desc(score), date)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Records with dplyr::arrange() and desc().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Records with dplyr::arrange() and desc().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sorting Records with dplyr::arrange() and desc()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr arrange: df |> arrange(desc(score), date)')\n",
    "hints": [
      "Write:\ncat('dplyr arrange: df |> arrange(desc(score), date)')"
    ],
    "testCases": [
      {
        "id": "r-109-tc-1",
        "description": "Verifies correct implementation for Sorting Records with dplyr::arrange() and desc()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-110-creating-computed-columns-with",
    "title": "110. Creating Computed Columns with dplyr::mutate()",
    "slug": "lesson-110-creating-computed-columns-with",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Derive new metrics while preserving existing fields.",
    "concepts": [
      "Creating Computed Columns with dplyr::mutate()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Computed Columns with dplyr::mutate() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Computed Columns with dplyr::mutate()\n\nDerive new metrics while preserving existing fields.\n\n```r\ncat('dplyr mutate: df |> mutate(ratio = score / total)')\n```",
    "workedExample": {
      "title": "Worked Example: Creating Computed Columns with dplyr::mutate()",
      "code": "cat('dplyr mutate: df |> mutate(ratio = score / total)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Computed Columns with dplyr::mutate().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Computed Columns with dplyr::mutate().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Computed Columns with dplyr::mutate()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr mutate: df |> mutate(ratio = score / total)')\n",
    "hints": [
      "Write:\ncat('dplyr mutate: df |> mutate(ratio = score / total)')"
    ],
    "testCases": [
      {
        "id": "r-110-tc-1",
        "description": "Verifies correct implementation for Creating Computed Columns with dplyr::mutate()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-111-renaming-columns-with-dplyr-re",
    "title": "111. Renaming Columns with dplyr::rename()",
    "slug": "lesson-111-renaming-columns-with-dplyr-re",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Update column headers cleanly.",
    "concepts": [
      "Renaming Columns with dplyr::rename()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Renaming Columns with dplyr::rename() gives you complete architectural control.",
    "explanationMarkdown": "### Renaming Columns with dplyr::rename()\n\nUpdate column headers cleanly.\n\n```r\ncat('dplyr rename: df |> rename(user_id = id)')\n```",
    "workedExample": {
      "title": "Worked Example: Renaming Columns with dplyr::rename()",
      "code": "cat('dplyr rename: df |> rename(user_id = id)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Renaming Columns with dplyr::rename().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Renaming Columns with dplyr::rename().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Renaming Columns with dplyr::rename()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr rename: df |> rename(user_id = id)')\n",
    "hints": [
      "Write:\ncat('dplyr rename: df |> rename(user_id = id)')"
    ],
    "testCases": [
      {
        "id": "r-111-tc-1",
        "description": "Verifies correct implementation for Renaming Columns with dplyr::rename()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-112-grouped-aggregations-with-grou",
    "title": "112. Grouped Aggregations with group_by() and summarize()",
    "slug": "lesson-112-grouped-aggregations-with-grou",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The cornerstone of exploratory data analysis.",
    "concepts": [
      "Grouped Aggregations with group_by() and summarize()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Grouped Aggregations with group_by() and summarize() gives you complete architectural control.",
    "explanationMarkdown": "### Grouped Aggregations with group_by() and summarize()\n\nThe cornerstone of exploratory data analysis.\n\n```r\ncat('dplyr summary: df |> group_by(dept) |> summarize(avg_salary = mean(salary))')\n```",
    "workedExample": {
      "title": "Worked Example: Grouped Aggregations with group_by() and summarize()",
      "code": "cat('dplyr summary: df |> group_by(dept) |> summarize(avg_salary = mean(salary))')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grouped Aggregations with group_by() and summarize().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grouped Aggregations with group_by() and summarize().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Grouped Aggregations with group_by() and summarize()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr summary: df |> group_by(dept) |> summarize(avg_salary = mean(salary))')\n",
    "hints": [
      "Write:\ncat('dplyr summary: df |> group_by(dept) |> summarize(avg_salary = mean(salary))')"
    ],
    "testCases": [
      {
        "id": "r-112-tc-1",
        "description": "Verifies correct implementation for Grouped Aggregations with group_by() and summarize()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-113-counting-observations-with-dpl",
    "title": "113. Counting Observations with dplyr::count() and n()",
    "slug": "lesson-113-counting-observations-with-dpl",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tabulate frequencies across category groups.",
    "concepts": [
      "Counting Observations with dplyr::count() and n()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Counting Observations with dplyr::count() and n() gives you complete architectural control.",
    "explanationMarkdown": "### Counting Observations with dplyr::count() and n()\n\nTabulate frequencies across category groups.\n\n```r\ncat('dplyr count: df |> count(category, sort = TRUE)')\n```",
    "workedExample": {
      "title": "Worked Example: Counting Observations with dplyr::count() and n()",
      "code": "cat('dplyr count: df |> count(category, sort = TRUE)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Counting Observations with dplyr::count() and n().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Counting Observations with dplyr::count() and n().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Counting Observations with dplyr::count() and n()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr count: df |> count(category, sort = TRUE)')\n",
    "hints": [
      "Write:\ncat('dplyr count: df |> count(category, sort = TRUE)')"
    ],
    "testCases": [
      {
        "id": "r-113-tc-1",
        "description": "Verifies correct implementation for Counting Observations with dplyr::count() and n()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-114-conditional-transformations-wi",
    "title": "114. Conditional Transformations with case_when()",
    "slug": "lesson-114-conditional-transformations-wi",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "SQL-style multi-branch column evaluations.",
    "concepts": [
      "Conditional Transformations with case_when()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Conditional Transformations with case_when() gives you complete architectural control.",
    "explanationMarkdown": "### Conditional Transformations with case_when()\n\nSQL-style multi-branch column evaluations.\n\n```r\ncat('dplyr case_when: mutate(tier = case_when(score > 90 ~ \"Gold\", TRUE ~ \"Standard\"))')\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Transformations with case_when()",
      "code": "cat('dplyr case_when: mutate(tier = case_when(score > 90 ~ \"Gold\", TRUE ~ \"Standard\"))')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Conditional Transformations with case_when().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Conditional Transformations with case_when().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Conditional Transformations with case_when()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr case_when: mutate(tier = case_when(score > 90 ~ \"Gold\", TRUE ~ \"Standard\"))')\n",
    "hints": [
      "Write:\ncat('dplyr case_when: mutate(tier = case_when(score > 90 ~ \"Gold\", TRUE ~ \"Standard\"))')"
    ],
    "testCases": [
      {
        "id": "r-114-tc-1",
        "description": "Verifies correct implementation for Conditional Transformations with case_when()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-115-joining-datasets-left-join-inn",
    "title": "115. Joining Datasets: left_join(), inner_join(), full_join()",
    "slug": "lesson-115-joining-datasets-left-join-inn",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Relational joins across primary and foreign keys.",
    "concepts": [
      "Joining Datasets: left_join(), inner_join(), full_join()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Joining Datasets: left_join(), inner_join(), full_join() gives you complete architectural control.",
    "explanationMarkdown": "### Joining Datasets: left_join(), inner_join(), full_join()\n\nRelational joins across primary and foreign keys.\n\n```r\ncat('dplyr joins: left_join(users, orders, by = \"user_id\")')\n```",
    "workedExample": {
      "title": "Worked Example: Joining Datasets: left_join(), inner_join(), full_join()",
      "code": "cat('dplyr joins: left_join(users, orders, by = \"user_id\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Joining Datasets: left_join(), inner_join(), full_join().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Joining Datasets: left_join(), inner_join(), full_join().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Joining Datasets: left_join(), inner_join(), full_join()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr joins: left_join(users, orders, by = \"user_id\")')\n",
    "hints": [
      "Write:\ncat('dplyr joins: left_join(users, orders, by = \"user_id\")')"
    ],
    "testCases": [
      {
        "id": "r-115-tc-1",
        "description": "Verifies correct implementation for Joining Datasets: left_join(), inner_join(), full_join()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-116-filtering-joins-semi-join-and-",
    "title": "116. Filtering Joins: semi_join() and anti_join()",
    "slug": "lesson-116-filtering-joins-semi-join-and-",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter records based on presence/absence in another table.",
    "concepts": [
      "Filtering Joins: semi_join() and anti_join()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Filtering Joins: semi_join() and anti_join() gives you complete architectural control.",
    "explanationMarkdown": "### Filtering Joins: semi_join() and anti_join()\n\nFilter records based on presence/absence in another table.\n\n```r\ncat('dplyr anti_join: anti_join(customers, churned, by = \"id\")')\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Joins: semi_join() and anti_join()",
      "code": "cat('dplyr anti_join: anti_join(customers, churned, by = \"id\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Joins: semi_join() and anti_join().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Joins: semi_join() and anti_join().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering Joins: semi_join() and anti_join()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('dplyr anti_join: anti_join(customers, churned, by = \"id\")')\n",
    "hints": [
      "Write:\ncat('dplyr anti_join: anti_join(customers, churned, by = \"id\")')"
    ],
    "testCases": [
      {
        "id": "r-116-tc-1",
        "description": "Verifies correct implementation for Filtering Joins: semi_join() and anti_join()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-117-pivoting-to-long-format-with-t",
    "title": "117. Pivoting to Long Format with tidyr::pivot_longer()",
    "slug": "lesson-117-pivoting-to-long-format-with-t",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Normalize wide messy spreadsheets into tidy key-value rows.",
    "concepts": [
      "Pivoting to Long Format with tidyr::pivot_longer()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Pivoting to Long Format with tidyr::pivot_longer() gives you complete architectural control.",
    "explanationMarkdown": "### Pivoting to Long Format with tidyr::pivot_longer()\n\nNormalize wide messy spreadsheets into tidy key-value rows.\n\n```r\ncat('tidyr pivot_longer: pivot_longer(cols = starts_with(\"year\"), names_to = \"year\")')\n```",
    "workedExample": {
      "title": "Worked Example: Pivoting to Long Format with tidyr::pivot_longer()",
      "code": "cat('tidyr pivot_longer: pivot_longer(cols = starts_with(\"year\"), names_to = \"year\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pivoting to Long Format with tidyr::pivot_longer().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pivoting to Long Format with tidyr::pivot_longer().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Pivoting to Long Format with tidyr::pivot_longer()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('tidyr pivot_longer: pivot_longer(cols = starts_with(\"year\"), names_to = \"year\")')\n",
    "hints": [
      "Write:\ncat('tidyr pivot_longer: pivot_longer(cols = starts_with(\"year\"), names_to = \"year\")')"
    ],
    "testCases": [
      {
        "id": "r-117-tc-1",
        "description": "Verifies correct implementation for Pivoting to Long Format with tidyr::pivot_longer()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-118-pivoting-to-wide-format-with-t",
    "title": "118. Pivoting to Wide Format with tidyr::pivot_wider()",
    "slug": "lesson-118-pivoting-to-wide-format-with-t",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spread records into multi-column summary tables.",
    "concepts": [
      "Pivoting to Wide Format with tidyr::pivot_wider()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Pivoting to Wide Format with tidyr::pivot_wider() gives you complete architectural control.",
    "explanationMarkdown": "### Pivoting to Wide Format with tidyr::pivot_wider()\n\nSpread records into multi-column summary tables.\n\n```r\ncat('tidyr pivot_wider: pivot_wider(names_from = metric, values_from = value)')\n```",
    "workedExample": {
      "title": "Worked Example: Pivoting to Wide Format with tidyr::pivot_wider()",
      "code": "cat('tidyr pivot_wider: pivot_wider(names_from = metric, values_from = value)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pivoting to Wide Format with tidyr::pivot_wider().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pivoting to Wide Format with tidyr::pivot_wider().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Pivoting to Wide Format with tidyr::pivot_wider()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('tidyr pivot_wider: pivot_wider(names_from = metric, values_from = value)')\n",
    "hints": [
      "Write:\ncat('tidyr pivot_wider: pivot_wider(names_from = metric, values_from = value)')"
    ],
    "testCases": [
      {
        "id": "r-118-tc-1",
        "description": "Verifies correct implementation for Pivoting to Wide Format with tidyr::pivot_wider()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-119-handling-missing-data-with-tid",
    "title": "119. Handling Missing Data with tidyr (drop_na, replace_na)",
    "slug": "lesson-119-handling-missing-data-with-tid",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Clean null and NA values systematically.",
    "concepts": [
      "Handling Missing Data with tidyr (drop_na, replace_na)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Handling Missing Data with tidyr (drop_na, replace_na) gives you complete architectural control.",
    "explanationMarkdown": "### Handling Missing Data with tidyr (drop_na, replace_na)\n\nClean null and NA values systematically.\n\n```r\ncat('tidyr drop_na: df |> drop_na(critical_col)')\n```",
    "workedExample": {
      "title": "Worked Example: Handling Missing Data with tidyr (drop_na, replace_na)",
      "code": "cat('tidyr drop_na: df |> drop_na(critical_col)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Missing Data with tidyr (drop_na, replace_na).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Missing Data with tidyr (drop_na, replace_na).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling Missing Data with tidyr (drop_na, replace_na)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('tidyr drop_na: df |> drop_na(critical_col)')\n",
    "hints": [
      "Write:\ncat('tidyr drop_na: df |> drop_na(critical_col)')"
    ],
    "testCases": [
      {
        "id": "r-119-tc-1",
        "description": "Verifies correct implementation for Handling Missing Data with tidyr (drop_na, replace_na)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-120-splitting-columns-with-tidyr-s",
    "title": "120. Splitting Columns with tidyr::separate() and unite()",
    "slug": "lesson-120-splitting-columns-with-tidyr-s",
    "language": "r",
    "category": "Module 8: Modern Data Wrangling with dplyr & tidyr",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decompose compound strings or merge fields.",
    "concepts": [
      "Splitting Columns with tidyr::separate() and unite()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Splitting Columns with tidyr::separate() and unite() gives you complete architectural control.",
    "explanationMarkdown": "### Splitting Columns with tidyr::separate() and unite()\n\nDecompose compound strings or merge fields.\n\n```r\ncat('tidyr separate: separate(col = full_name, into = c(\"first\", \"last\"))')\n```",
    "workedExample": {
      "title": "Worked Example: Splitting Columns with tidyr::separate() and unite()",
      "code": "cat('tidyr separate: separate(col = full_name, into = c(\"first\", \"last\"))')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Splitting Columns with tidyr::separate() and unite().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Splitting Columns with tidyr::separate() and unite().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Splitting Columns with tidyr::separate() and unite()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('tidyr separate: separate(col = full_name, into = c(\"first\", \"last\"))')\n",
    "hints": [
      "Write:\ncat('tidyr separate: separate(col = full_name, into = c(\"first\", \"last\"))')"
    ],
    "testCases": [
      {
        "id": "r-120-tc-1",
        "description": "Verifies correct implementation for Splitting Columns with tidyr::separate() and unite()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-121-summary-statistics-summary-qua",
    "title": "121. Summary Statistics: summary(), quantile(), IQR()",
    "slug": "lesson-121-summary-statistics-summary-qua",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute five-number summaries and quartiles.",
    "concepts": [
      "Summary Statistics: summary(), quantile(), IQR()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Summary Statistics: summary(), quantile(), IQR() gives you complete architectural control.",
    "explanationMarkdown": "### Summary Statistics: summary(), quantile(), IQR()\n\nCompute five-number summaries and quartiles.\n\n```r\nv <- c(10, 20, 25, 30, 50, 90)\nprint(summary(v))\n```",
    "workedExample": {
      "title": "Worked Example: Summary Statistics: summary(), quantile(), IQR()",
      "code": "v <- c(10, 20, 25, 30, 50, 90)\nprint(summary(v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Summary Statistics: summary(), quantile(), IQR().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Summary Statistics: summary(), quantile(), IQR().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Summary Statistics: summary(), quantile(), IQR()\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(10, 20, 30, 40, 50)\nprint(summary(v))\n",
    "hints": [
      "Write:\nv <- c(10, 20, 30, 40, 50)\nprint(summary(v))"
    ],
    "testCases": [
      {
        "id": "r-121-tc-1",
        "description": "Verifies correct implementation for Summary Statistics: summary(), quantile(), IQR()",
        "testFn": "code.includes('summary')"
      }
    ]
  },
  {
    "id": "r-122-variance-and-standard-deviatio",
    "title": "122. Variance and Standard Deviation: var(), sd()",
    "slug": "lesson-122-variance-and-standard-deviatio",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Measure dispersion of continuous distributions.",
    "concepts": [
      "Variance and Standard Deviation: var(), sd()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Variance and Standard Deviation: var(), sd() gives you complete architectural control.",
    "explanationMarkdown": "### Variance and Standard Deviation: var(), sd()\n\nMeasure dispersion of continuous distributions.\n\n```r\nv <- c(2, 4, 6, 8, 10)\ncat('SD:', sd(v))\n```",
    "workedExample": {
      "title": "Worked Example: Variance and Standard Deviation: var(), sd()",
      "code": "v <- c(2, 4, 6, 8, 10)\ncat('SD:', sd(v))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variance and Standard Deviation: var(), sd().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variance and Standard Deviation: var(), sd().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Variance and Standard Deviation: var(), sd()\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(2, 4, 6, 8, 10)\ncat('SD:', sd(v))\n",
    "hints": [
      "Write:\nv <- c(2, 4, 6, 8, 10)\ncat('SD:', sd(v))"
    ],
    "testCases": [
      {
        "id": "r-122-tc-1",
        "description": "Verifies correct implementation for Variance and Standard Deviation: var(), sd()",
        "testFn": "code.includes('sd')"
      }
    ]
  },
  {
    "id": "r-123-covariance-and-correlation-cov",
    "title": "123. Covariance and Correlation: cov(), cor()",
    "slug": "lesson-123-covariance-and-correlation-cov",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assess linear relationships between variables.",
    "concepts": [
      "Covariance and Correlation: cov(), cor()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Covariance and Correlation: cov(), cor() gives you complete architectural control.",
    "explanationMarkdown": "### Covariance and Correlation: cov(), cor()\n\nAssess linear relationships between variables.\n\n```r\nx <- 1:5\ny <- c(2, 4, 5, 8, 10)\ncat('Cor:', cor(x, y))\n```",
    "workedExample": {
      "title": "Worked Example: Covariance and Correlation: cov(), cor()",
      "code": "x <- 1:5\ny <- c(2, 4, 5, 8, 10)\ncat('Cor:', cor(x, y))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Covariance and Correlation: cov(), cor().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Covariance and Correlation: cov(), cor().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Covariance and Correlation: cov(), cor()\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 1:5\ny <- c(2, 4, 5, 8, 10)\ncat('Cor:', cor(x, y))\n",
    "hints": [
      "Write:\nx <- 1:5\ny <- c(2, 4, 5, 8, 10)\ncat('Cor:', cor(x, y))"
    ],
    "testCases": [
      {
        "id": "r-123-tc-1",
        "description": "Verifies correct implementation for Covariance and Correlation: cov(), cor()",
        "testFn": "code.includes('cor')"
      }
    ]
  },
  {
    "id": "r-124-probability-distributions-in-r",
    "title": "124. Probability Distributions in R: d, p, q, r Functions",
    "slug": "lesson-124-probability-distributions-in-r",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Density, distribution, quantile, and random sampling prefixes.",
    "concepts": [
      "Probability Distributions in R: d, p, q, r Functions",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Probability Distributions in R: d, p, q, r Functions gives you complete architectural control.",
    "explanationMarkdown": "### Probability Distributions in R: d, p, q, r Functions\n\nDensity, distribution, quantile, and random sampling prefixes.\n\n```r\ncat('Normal dist: rnorm(n, mean, sd), dnorm, pnorm, qnorm')\n```",
    "workedExample": {
      "title": "Worked Example: Probability Distributions in R: d, p, q, r Functions",
      "code": "cat('Normal dist: rnorm(n, mean, sd), dnorm, pnorm, qnorm')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Probability Distributions in R: d, p, q, r Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Probability Distributions in R: d, p, q, r Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Probability Distributions in R: d, p, q, r Functions\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Normal dist: rnorm(n, mean, sd), dnorm, pnorm, qnorm')\n",
    "hints": [
      "Write:\ncat('Normal dist: rnorm(n, mean, sd), dnorm, pnorm, qnorm')"
    ],
    "testCases": [
      {
        "id": "r-124-tc-1",
        "description": "Verifies correct implementation for Probability Distributions in R: d, p, q, r Functions",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-125-random-sampling-with-sample-an",
    "title": "125. Random Sampling with sample() and set.seed()",
    "slug": "lesson-125-random-sampling-with-sample-an",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reproducible pseudo-random sampling.",
    "concepts": [
      "Random Sampling with sample() and set.seed()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Random Sampling with sample() and set.seed() gives you complete architectural control.",
    "explanationMarkdown": "### Random Sampling with sample() and set.seed()\n\nReproducible pseudo-random sampling.\n\n```r\nset.seed(42)\nprint(sample(1:10, 3))\n```",
    "workedExample": {
      "title": "Worked Example: Random Sampling with sample() and set.seed()",
      "code": "set.seed(42)\nprint(sample(1:10, 3))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Random Sampling with sample() and set.seed().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Random Sampling with sample() and set.seed().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Random Sampling with sample() and set.seed()\n# TODO: Write code below\n\n",
    "solutionCode": "set.seed(42)\nprint(sample(1:10, 3))\n",
    "hints": [
      "Write:\nset.seed(42)\nprint(sample(1:10, 3))"
    ],
    "testCases": [
      {
        "id": "r-125-tc-1",
        "description": "Verifies correct implementation for Random Sampling with sample() and set.seed()",
        "testFn": "code.includes('sample')"
      }
    ]
  },
  {
    "id": "r-126-one-sample-t-test-with-t-test",
    "title": "126. One-Sample t-Test with t.test()",
    "slug": "lesson-126-one-sample-t-test-with-t-test",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Test if sample mean differs from hypothesized population mean.",
    "concepts": [
      "One-Sample t-Test with t.test()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: One-Sample t-Test with t.test() gives you complete architectural control.",
    "explanationMarkdown": "### One-Sample t-Test with t.test()\n\nTest if sample mean differs from hypothesized population mean.\n\n```r\nv <- c(98, 102, 100, 104, 99)\nres <- t.test(v, mu = 100)\ncat('p-value:', res$p.value)\n```",
    "workedExample": {
      "title": "Worked Example: One-Sample t-Test with t.test()",
      "code": "v <- c(98, 102, 100, 104, 99)\nres <- t.test(v, mu = 100)\ncat('p-value:', res$p.value)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for One-Sample t-Test with t.test().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of One-Sample t-Test with t.test().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement One-Sample t-Test with t.test()\n# TODO: Write code below\n\n",
    "solutionCode": "v <- c(98, 102, 100, 104, 99)\nres <- t.test(v, mu = 100)\ncat('p-value:', res$p.value)\n",
    "hints": [
      "Write:\nv <- c(98, 102, 100, 104, 99)\nres <- t.test(v, mu = 100)\ncat('p-value:', res$p.value)"
    ],
    "testCases": [
      {
        "id": "r-126-tc-1",
        "description": "Verifies correct implementation for One-Sample t-Test with t.test()",
        "testFn": "code.includes('t.test')"
      }
    ]
  },
  {
    "id": "r-127-two-sample-independent-t-test",
    "title": "127. Two-Sample Independent t-Test",
    "slug": "lesson-127-two-sample-independent-t-test",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compare means across two distinct treatment cohorts.",
    "concepts": [
      "Two-Sample Independent t-Test",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Two-Sample Independent t-Test gives you complete architectural control.",
    "explanationMarkdown": "### Two-Sample Independent t-Test\n\nCompare means across two distinct treatment cohorts.\n\n```r\ncat('t.test(group_A, group_B, var.equal = FALSE)')\n```",
    "workedExample": {
      "title": "Worked Example: Two-Sample Independent t-Test",
      "code": "cat('t.test(group_A, group_B, var.equal = FALSE)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Two-Sample Independent t-Test.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Two-Sample Independent t-Test.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Two-Sample Independent t-Test\n# TODO: Write code below\n\n",
    "solutionCode": "cat('t.test(group_A, group_B, var.equal = FALSE)')\n",
    "hints": [
      "Write:\ncat('t.test(group_A, group_B, var.equal = FALSE)')"
    ],
    "testCases": [
      {
        "id": "r-127-tc-1",
        "description": "Verifies correct implementation for Two-Sample Independent t-Test",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-128-paired-t-test-for-before-after",
    "title": "128. Paired t-Test for Before/After Studies",
    "slug": "lesson-128-paired-t-test-for-before-after",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate differences in repeated measures.",
    "concepts": [
      "Paired t-Test for Before/After Studies",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Paired t-Test for Before/After Studies gives you complete architectural control.",
    "explanationMarkdown": "### Paired t-Test for Before/After Studies\n\nEvaluate differences in repeated measures.\n\n```r\ncat('t.test(before, after, paired = TRUE)')\n```",
    "workedExample": {
      "title": "Worked Example: Paired t-Test for Before/After Studies",
      "code": "cat('t.test(before, after, paired = TRUE)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Paired t-Test for Before/After Studies.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Paired t-Test for Before/After Studies.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Paired t-Test for Before/After Studies\n# TODO: Write code below\n\n",
    "solutionCode": "cat('t.test(before, after, paired = TRUE)')\n",
    "hints": [
      "Write:\ncat('t.test(before, after, paired = TRUE)')"
    ],
    "testCases": [
      {
        "id": "r-128-tc-1",
        "description": "Verifies correct implementation for Paired t-Test for Before/After Studies",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-129-chi-square-test-of-independenc",
    "title": "129. Chi-Square Test of Independence with chisq.test()",
    "slug": "lesson-129-chi-square-test-of-independenc",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Test categorical association in contingency tables.",
    "concepts": [
      "Chi-Square Test of Independence with chisq.test()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Chi-Square Test of Independence with chisq.test() gives you complete architectural control.",
    "explanationMarkdown": "### Chi-Square Test of Independence with chisq.test()\n\nTest categorical association in contingency tables.\n\n```r\ntbl <- matrix(c(20, 10, 15, 25), nrow = 2)\nprint(chisq.test(tbl)$statistic)\n```",
    "workedExample": {
      "title": "Worked Example: Chi-Square Test of Independence with chisq.test()",
      "code": "tbl <- matrix(c(20, 10, 15, 25), nrow = 2)\nprint(chisq.test(tbl)$statistic)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Chi-Square Test of Independence with chisq.test().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Chi-Square Test of Independence with chisq.test().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Chi-Square Test of Independence with chisq.test()\n# TODO: Write code below\n\n",
    "solutionCode": "tbl <- matrix(c(20, 10, 15, 25), nrow = 2)\nprint(chisq.test(tbl)$statistic)\n",
    "hints": [
      "Write:\ntbl <- matrix(c(20, 10, 15, 25), nrow = 2)\nprint(chisq.test(tbl)$statistic)"
    ],
    "testCases": [
      {
        "id": "r-129-tc-1",
        "description": "Verifies correct implementation for Chi-Square Test of Independence with chisq.test()",
        "testFn": "code.includes('chisq.test')"
      }
    ]
  },
  {
    "id": "r-130-one-way-anova-with-aov",
    "title": "130. One-Way ANOVA with aov()",
    "slug": "lesson-130-one-way-anova-with-aov",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compare means across three or more treatment groups.",
    "concepts": [
      "One-Way ANOVA with aov()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: One-Way ANOVA with aov() gives you complete architectural control.",
    "explanationMarkdown": "### One-Way ANOVA with aov()\n\nCompare means across three or more treatment groups.\n\n```r\ncat('ANOVA syntax: aov(yield ~ fertilizer, data = crop_data)')\n```",
    "workedExample": {
      "title": "Worked Example: One-Way ANOVA with aov()",
      "code": "cat('ANOVA syntax: aov(yield ~ fertilizer, data = crop_data)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for One-Way ANOVA with aov().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of One-Way ANOVA with aov().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement One-Way ANOVA with aov()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('ANOVA syntax: aov(yield ~ fertilizer, data = crop_data)')\n",
    "hints": [
      "Write:\ncat('ANOVA syntax: aov(yield ~ fertilizer, data = crop_data)')"
    ],
    "testCases": [
      {
        "id": "r-130-tc-1",
        "description": "Verifies correct implementation for One-Way ANOVA with aov()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-131-linear-regression-with-lm-form",
    "title": "131. Linear Regression with lm() (Formula Syntax: y ~ x)",
    "slug": "lesson-131-linear-regression-with-lm-form",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fit simple ordinary least squares regression models.",
    "concepts": [
      "Linear Regression with lm() (Formula Syntax: y ~ x)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Linear Regression with lm() (Formula Syntax: y ~ x) gives you complete architectural control.",
    "explanationMarkdown": "### Linear Regression with lm() (Formula Syntax: y ~ x)\n\nFit simple ordinary least squares regression models.\n\n```r\nx <- 1:5\ny <- 2 * x + 1\nmodel <- lm(y ~ x)\nprint(coef(model))\n```",
    "workedExample": {
      "title": "Worked Example: Linear Regression with lm() (Formula Syntax: y ~ x)",
      "code": "x <- 1:5\ny <- 2 * x + 1\nmodel <- lm(y ~ x)\nprint(coef(model))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linear Regression with lm() (Formula Syntax: y ~ x).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linear Regression with lm() (Formula Syntax: y ~ x).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Linear Regression with lm() (Formula Syntax: y ~ x)\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 1:5\ny <- 2 * x + 1\nmodel <- lm(y ~ x)\nprint(coef(model))\n",
    "hints": [
      "Write:\nx <- 1:5\ny <- 2 * x + 1\nmodel <- lm(y ~ x)\nprint(coef(model))"
    ],
    "testCases": [
      {
        "id": "r-131-tc-1",
        "description": "Verifies correct implementation for Linear Regression with lm() (Formula Syntax: y ~ x)",
        "testFn": "code.includes('lm')"
      }
    ]
  },
  {
    "id": "r-132-interpreting-summary-lm-r-squa",
    "title": "132. Interpreting summary.lm(): R-squared and p-values",
    "slug": "lesson-132-interpreting-summary-lm-r-squa",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate regression fit, coefficients, and significance.",
    "concepts": [
      "Interpreting summary.lm(): R-squared and p-values",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Interpreting summary.lm(): R-squared and p-values gives you complete architectural control.",
    "explanationMarkdown": "### Interpreting summary.lm(): R-squared and p-values\n\nEvaluate regression fit, coefficients, and significance.\n\n```r\ncat('Model evaluation: summary(model)$r.squared')\n```",
    "workedExample": {
      "title": "Worked Example: Interpreting summary.lm(): R-squared and p-values",
      "code": "cat('Model evaluation: summary(model)$r.squared')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interpreting summary.lm(): R-squared and p-values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interpreting summary.lm(): R-squared and p-values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Interpreting summary.lm(): R-squared and p-values\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Model evaluation: summary(model)$r.squared')\n",
    "hints": [
      "Write:\ncat('Model evaluation: summary(model)$r.squared')"
    ],
    "testCases": [
      {
        "id": "r-132-tc-1",
        "description": "Verifies correct implementation for Interpreting summary.lm(): R-squared and p-values",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-133-multiple-linear-regression-y-x",
    "title": "133. Multiple Linear Regression (y ~ x1 + x2)",
    "slug": "lesson-133-multiple-linear-regression-y-x",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Incorporate multiple predictor variables.",
    "concepts": [
      "Multiple Linear Regression (y ~ x1 + x2)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Multiple Linear Regression (y ~ x1 + x2) gives you complete architectural control.",
    "explanationMarkdown": "### Multiple Linear Regression (y ~ x1 + x2)\n\nIncorporate multiple predictor variables.\n\n```r\ncat('Multi-reg: lm(salary ~ experience + education, data = df)')\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Linear Regression (y ~ x1 + x2)",
      "code": "cat('Multi-reg: lm(salary ~ experience + education, data = df)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Linear Regression (y ~ x1 + x2).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Linear Regression (y ~ x1 + x2).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Multiple Linear Regression (y ~ x1 + x2)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Multi-reg: lm(salary ~ experience + education, data = df)')\n",
    "hints": [
      "Write:\ncat('Multi-reg: lm(salary ~ experience + education, data = df)')"
    ],
    "testCases": [
      {
        "id": "r-133-tc-1",
        "description": "Verifies correct implementation for Multiple Linear Regression (y ~ x1 + x2)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-134-regression-predictions-with-pr",
    "title": "134. Regression Predictions with predict()",
    "slug": "lesson-134-regression-predictions-with-pr",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Forecast outcomes for new unseen data points.",
    "concepts": [
      "Regression Predictions with predict()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Regression Predictions with predict() gives you complete architectural control.",
    "explanationMarkdown": "### Regression Predictions with predict()\n\nForecast outcomes for new unseen data points.\n\n```r\ncat('predict(model, newdata = data.frame(x = 10))')\n```",
    "workedExample": {
      "title": "Worked Example: Regression Predictions with predict()",
      "code": "cat('predict(model, newdata = data.frame(x = 10))')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Regression Predictions with predict().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Regression Predictions with predict().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Regression Predictions with predict()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('predict(model, newdata = data.frame(x = 10))')\n",
    "hints": [
      "Write:\ncat('predict(model, newdata = data.frame(x = 10))')"
    ],
    "testCases": [
      {
        "id": "r-134-tc-1",
        "description": "Verifies correct implementation for Regression Predictions with predict()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-135-logistic-regression-with-glm-f",
    "title": "135. Logistic Regression with glm(family = binomial)",
    "slug": "lesson-135-logistic-regression-with-glm-f",
    "language": "r",
    "category": "Module 9: Statistical Analysis & Hypothesis Testing",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Model binary probability outcomes.",
    "concepts": [
      "Logistic Regression with glm(family = binomial)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Logistic Regression with glm(family = binomial) gives you complete architectural control.",
    "explanationMarkdown": "### Logistic Regression with glm(family = binomial)\n\nModel binary probability outcomes.\n\n```r\ncat('Logistic regression: glm(churn ~ age + usage, family = \"binomial\")')\n```",
    "workedExample": {
      "title": "Worked Example: Logistic Regression with glm(family = binomial)",
      "code": "cat('Logistic regression: glm(churn ~ age + usage, family = \"binomial\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logistic Regression with glm(family = binomial).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logistic Regression with glm(family = binomial).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Logistic Regression with glm(family = binomial)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Logistic regression: glm(churn ~ age + usage, family = \"binomial\")')\n",
    "hints": [
      "Write:\ncat('Logistic regression: glm(churn ~ age + usage, family = \"binomial\")')"
    ],
    "testCases": [
      {
        "id": "r-135-tc-1",
        "description": "Verifies correct implementation for Logistic Regression with glm(family = binomial)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-136-base-r-plotting-plot-hist-boxp",
    "title": "136. Base R Plotting: plot(), hist(), boxplot()",
    "slug": "lesson-136-base-r-plotting-plot-hist-boxp",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Quick out-of-the-box graphics for rapid inspection.",
    "concepts": [
      "Base R Plotting: plot(), hist(), boxplot()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Base R Plotting: plot(), hist(), boxplot() gives you complete architectural control.",
    "explanationMarkdown": "### Base R Plotting: plot(), hist(), boxplot()\n\nQuick out-of-the-box graphics for rapid inspection.\n\n```r\nx <- 1:5\ny <- c(2, 4, 3, 6, 8)\nplot(x, y)\n```",
    "workedExample": {
      "title": "Worked Example: Base R Plotting: plot(), hist(), boxplot()",
      "code": "x <- 1:5\ny <- c(2, 4, 3, 6, 8)\nplot(x, y)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Base R Plotting: plot(), hist(), boxplot().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Base R Plotting: plot(), hist(), boxplot().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Base R Plotting: plot(), hist(), boxplot()\n# TODO: Write code below\n\n",
    "solutionCode": "x <- 1:5\ny <- c(2, 4, 3, 6, 8)\nplot(x, y)\n",
    "hints": [
      "Write:\nx <- 1:5\ny <- c(2, 4, 3, 6, 8)\nplot(x, y)"
    ],
    "testCases": [
      {
        "id": "r-136-tc-1",
        "description": "Verifies correct implementation for Base R Plotting: plot(), hist(), boxplot()",
        "testFn": "code.includes('plot')"
      }
    ]
  },
  {
    "id": "r-137-the-grammar-of-graphics-ggplot",
    "title": "137. The Grammar of Graphics: ggplot2 Architecture",
    "slug": "lesson-137-the-grammar-of-graphics-ggplot",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Aesthetic mappings, geoms, scales, coordinates, and themes.",
    "concepts": [
      "The Grammar of Graphics: ggplot2 Architecture",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Grammar of Graphics: ggplot2 Architecture gives you complete architectural control.",
    "explanationMarkdown": "### The Grammar of Graphics: ggplot2 Architecture\n\nAesthetic mappings, geoms, scales, coordinates, and themes.\n\n```r\ncat('ggplot2: ggplot(data, aes(x, y)) + geom_point()')\n```",
    "workedExample": {
      "title": "Worked Example: The Grammar of Graphics: ggplot2 Architecture",
      "code": "cat('ggplot2: ggplot(data, aes(x, y)) + geom_point()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Grammar of Graphics: ggplot2 Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Grammar of Graphics: ggplot2 Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Grammar of Graphics: ggplot2 Architecture\n# TODO: Write code below\n\n",
    "solutionCode": "cat('ggplot2: ggplot(data, aes(x, y)) + geom_point()')\n",
    "hints": [
      "Write:\ncat('ggplot2: ggplot(data, aes(x, y)) + geom_point()')"
    ],
    "testCases": [
      {
        "id": "r-137-tc-1",
        "description": "Verifies correct implementation for The Grammar of Graphics: ggplot2 Architecture",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-138-scatter-plots-with-geom-point",
    "title": "138. Scatter Plots with geom_point()",
    "slug": "lesson-138-scatter-plots-with-geom-point",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Visualize relationships between two continuous variables.",
    "concepts": [
      "Scatter Plots with geom_point()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Scatter Plots with geom_point() gives you complete architectural control.",
    "explanationMarkdown": "### Scatter Plots with geom_point()\n\nVisualize relationships between two continuous variables.\n\n```r\ncat('geom_point: aes(color = species, size = mass)')\n```",
    "workedExample": {
      "title": "Worked Example: Scatter Plots with geom_point()",
      "code": "cat('geom_point: aes(color = species, size = mass)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scatter Plots with geom_point().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scatter Plots with geom_point().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Scatter Plots with geom_point()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('geom_point: aes(color = species, size = mass)')\n",
    "hints": [
      "Write:\ncat('geom_point: aes(color = species, size = mass)')"
    ],
    "testCases": [
      {
        "id": "r-138-tc-1",
        "description": "Verifies correct implementation for Scatter Plots with geom_point()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-139-line-charts-with-geom-line-and",
    "title": "139. Line Charts with geom_line() and Time Series",
    "slug": "lesson-139-line-charts-with-geom-line-and",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Track continuous trends across chronological intervals.",
    "concepts": [
      "Line Charts with geom_line() and Time Series",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Line Charts with geom_line() and Time Series gives you complete architectural control.",
    "explanationMarkdown": "### Line Charts with geom_line() and Time Series\n\nTrack continuous trends across chronological intervals.\n\n```r\ncat('geom_line: aes(x = date, y = value, group = stock)')\n```",
    "workedExample": {
      "title": "Worked Example: Line Charts with geom_line() and Time Series",
      "code": "cat('geom_line: aes(x = date, y = value, group = stock)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Line Charts with geom_line() and Time Series.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Line Charts with geom_line() and Time Series.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Line Charts with geom_line() and Time Series\n# TODO: Write code below\n\n",
    "solutionCode": "cat('geom_line: aes(x = date, y = value, group = stock)')\n",
    "hints": [
      "Write:\ncat('geom_line: aes(x = date, y = value, group = stock)')"
    ],
    "testCases": [
      {
        "id": "r-139-tc-1",
        "description": "Verifies correct implementation for Line Charts with geom_line() and Time Series",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-140-bar-charts-geom-bar-vs-geom-co",
    "title": "140. Bar Charts: geom_bar() vs geom_col()",
    "slug": "lesson-140-bar-charts-geom-bar-vs-geom-co",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Display category counts or pre-computed metric values.",
    "concepts": [
      "Bar Charts: geom_bar() vs geom_col()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Bar Charts: geom_bar() vs geom_col() gives you complete architectural control.",
    "explanationMarkdown": "### Bar Charts: geom_bar() vs geom_col()\n\nDisplay category counts or pre-computed metric values.\n\n```r\ncat('geom_col: aes(x = department, y = revenue)')\n```",
    "workedExample": {
      "title": "Worked Example: Bar Charts: geom_bar() vs geom_col()",
      "code": "cat('geom_col: aes(x = department, y = revenue)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bar Charts: geom_bar() vs geom_col().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bar Charts: geom_bar() vs geom_col().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Bar Charts: geom_bar() vs geom_col()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('geom_col: aes(x = department, y = revenue)')\n",
    "hints": [
      "Write:\ncat('geom_col: aes(x = department, y = revenue)')"
    ],
    "testCases": [
      {
        "id": "r-140-tc-1",
        "description": "Verifies correct implementation for Bar Charts: geom_bar() vs geom_col()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-141-histograms-and-density-plots-g",
    "title": "141. Histograms and Density Plots (geom_histogram, geom_density)",
    "slug": "lesson-141-histograms-and-density-plots-g",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Examine univariate distribution shapes.",
    "concepts": [
      "Histograms and Density Plots (geom_histogram, geom_density)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Histograms and Density Plots (geom_histogram, geom_density) gives you complete architectural control.",
    "explanationMarkdown": "### Histograms and Density Plots (geom_histogram, geom_density)\n\nExamine univariate distribution shapes.\n\n```r\ncat('geom_histogram: binwidth = 5, fill = \"steelblue\"')\n```",
    "workedExample": {
      "title": "Worked Example: Histograms and Density Plots (geom_histogram, geom_density)",
      "code": "cat('geom_histogram: binwidth = 5, fill = \"steelblue\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Histograms and Density Plots (geom_histogram, geom_density).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Histograms and Density Plots (geom_histogram, geom_density).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Histograms and Density Plots (geom_histogram, geom_density)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('geom_histogram: binwidth = 5, fill = \"steelblue\"')\n",
    "hints": [
      "Write:\ncat('geom_histogram: binwidth = 5, fill = \"steelblue\"')"
    ],
    "testCases": [
      {
        "id": "r-141-tc-1",
        "description": "Verifies correct implementation for Histograms and Density Plots (geom_histogram, geom_density)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-142-box-plots-and-violin-plots-geo",
    "title": "142. Box Plots and Violin Plots (geom_boxplot, geom_violin)",
    "slug": "lesson-142-box-plots-and-violin-plots-geo",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Visualize median, IQR, and density dispersion across categories.",
    "concepts": [
      "Box Plots and Violin Plots (geom_boxplot, geom_violin)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Box Plots and Violin Plots (geom_boxplot, geom_violin) gives you complete architectural control.",
    "explanationMarkdown": "### Box Plots and Violin Plots (geom_boxplot, geom_violin)\n\nVisualize median, IQR, and density dispersion across categories.\n\n```r\ncat('geom_boxplot: aes(x = treatment, y = response)')\n```",
    "workedExample": {
      "title": "Worked Example: Box Plots and Violin Plots (geom_boxplot, geom_violin)",
      "code": "cat('geom_boxplot: aes(x = treatment, y = response)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Box Plots and Violin Plots (geom_boxplot, geom_violin).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Box Plots and Violin Plots (geom_boxplot, geom_violin).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Box Plots and Violin Plots (geom_boxplot, geom_violin)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('geom_boxplot: aes(x = treatment, y = response)')\n",
    "hints": [
      "Write:\ncat('geom_boxplot: aes(x = treatment, y = response)')"
    ],
    "testCases": [
      {
        "id": "r-142-tc-1",
        "description": "Verifies correct implementation for Box Plots and Violin Plots (geom_boxplot, geom_violin)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-143-faceted-plots-facet-wrap-and-f",
    "title": "143. Faceted Plots: facet_wrap() and facet_grid()",
    "slug": "lesson-143-faceted-plots-facet-wrap-and-f",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Produce small-multiple charts partitioned by categories.",
    "concepts": [
      "Faceted Plots: facet_wrap() and facet_grid()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Faceted Plots: facet_wrap() and facet_grid() gives you complete architectural control.",
    "explanationMarkdown": "### Faceted Plots: facet_wrap() and facet_grid()\n\nProduce small-multiple charts partitioned by categories.\n\n```r\ncat('facet_wrap: facet_wrap(~ country, scales = \"free\")')\n```",
    "workedExample": {
      "title": "Worked Example: Faceted Plots: facet_wrap() and facet_grid()",
      "code": "cat('facet_wrap: facet_wrap(~ country, scales = \"free\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Faceted Plots: facet_wrap() and facet_grid().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Faceted Plots: facet_wrap() and facet_grid().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Faceted Plots: facet_wrap() and facet_grid()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('facet_wrap: facet_wrap(~ country, scales = \"free\")')\n",
    "hints": [
      "Write:\ncat('facet_wrap: facet_wrap(~ country, scales = \"free\")')"
    ],
    "testCases": [
      {
        "id": "r-143-tc-1",
        "description": "Verifies correct implementation for Faceted Plots: facet_wrap() and facet_grid()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-144-customizing-color-palettes-wit",
    "title": "144. Customizing Color Palettes with scale_color_*",
    "slug": "lesson-144-customizing-color-palettes-wit",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Use ColorBrewer and Viridis accessible palettes.",
    "concepts": [
      "Customizing Color Palettes with scale_color_*",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Customizing Color Palettes with scale_color_* gives you complete architectural control.",
    "explanationMarkdown": "### Customizing Color Palettes with scale_color_*\n\nUse ColorBrewer and Viridis accessible palettes.\n\n```r\ncat('scale_color_viridis_c(option = \"magma\")')\n```",
    "workedExample": {
      "title": "Worked Example: Customizing Color Palettes with scale_color_*",
      "code": "cat('scale_color_viridis_c(option = \"magma\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Customizing Color Palettes with scale_color_*.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Customizing Color Palettes with scale_color_*.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Customizing Color Palettes with scale_color_*\n# TODO: Write code below\n\n",
    "solutionCode": "cat('scale_color_viridis_c(option = \"magma\")')\n",
    "hints": [
      "Write:\ncat('scale_color_viridis_c(option = \"magma\")')"
    ],
    "testCases": [
      {
        "id": "r-144-tc-1",
        "description": "Verifies correct implementation for Customizing Color Palettes with scale_color_*",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-145-plot-labels-and-themes-labs-th",
    "title": "145. Plot Labels and Themes (labs, theme_minimal, theme_bw)",
    "slug": "lesson-145-plot-labels-and-themes-labs-th",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Polish titles, axis captions, and aesthetic themes.",
    "concepts": [
      "Plot Labels and Themes (labs, theme_minimal, theme_bw)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Plot Labels and Themes (labs, theme_minimal, theme_bw) gives you complete architectural control.",
    "explanationMarkdown": "### Plot Labels and Themes (labs, theme_minimal, theme_bw)\n\nPolish titles, axis captions, and aesthetic themes.\n\n```r\ncat('labs(title = \"Sales Q4\", x = \"Region\", y = \"Units\") + theme_minimal()')\n```",
    "workedExample": {
      "title": "Worked Example: Plot Labels and Themes (labs, theme_minimal, theme_bw)",
      "code": "cat('labs(title = \"Sales Q4\", x = \"Region\", y = \"Units\") + theme_minimal()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Plot Labels and Themes (labs, theme_minimal, theme_bw).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Plot Labels and Themes (labs, theme_minimal, theme_bw).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Plot Labels and Themes (labs, theme_minimal, theme_bw)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('labs(title = \"Sales Q4\", x = \"Region\", y = \"Units\") + theme_minimal()')\n",
    "hints": [
      "Write:\ncat('labs(title = \"Sales Q4\", x = \"Region\", y = \"Units\") + theme_minimal()')"
    ],
    "testCases": [
      {
        "id": "r-145-tc-1",
        "description": "Verifies correct implementation for Plot Labels and Themes (labs, theme_minimal, theme_bw)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-146-saving-high-resolution-plots-w",
    "title": "146. Saving High-Resolution Plots with ggsave()",
    "slug": "lesson-146-saving-high-resolution-plots-w",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Export PDF, PNG, and SVG vector graphics.",
    "concepts": [
      "Saving High-Resolution Plots with ggsave()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Saving High-Resolution Plots with ggsave() gives you complete architectural control.",
    "explanationMarkdown": "### Saving High-Resolution Plots with ggsave()\n\nExport PDF, PNG, and SVG vector graphics.\n\n```r\ncat('ggsave(\"output_plot.png\", width = 8, height = 6, dpi = 300)')\n```",
    "workedExample": {
      "title": "Worked Example: Saving High-Resolution Plots with ggsave()",
      "code": "cat('ggsave(\"output_plot.png\", width = 8, height = 6, dpi = 300)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Saving High-Resolution Plots with ggsave().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Saving High-Resolution Plots with ggsave().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Saving High-Resolution Plots with ggsave()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('ggsave(\"output_plot.png\", width = 8, height = 6, dpi = 300)')\n",
    "hints": [
      "Write:\ncat('ggsave(\"output_plot.png\", width = 8, height = 6, dpi = 300)')"
    ],
    "testCases": [
      {
        "id": "r-146-tc-1",
        "description": "Verifies correct implementation for Saving High-Resolution Plots with ggsave()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-147-reading-and-writing-csv-files-",
    "title": "147. Reading and Writing CSV Files (read.csv, write.csv, readr)",
    "slug": "lesson-147-reading-and-writing-csv-files-",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Import structured tabular records into memory.",
    "concepts": [
      "Reading and Writing CSV Files (read.csv, write.csv, readr)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Reading and Writing CSV Files (read.csv, write.csv, readr) gives you complete architectural control.",
    "explanationMarkdown": "### Reading and Writing CSV Files (read.csv, write.csv, readr)\n\nImport structured tabular records into memory.\n\n```r\ncat('read.csv(\"data.csv\", stringsAsFactors = FALSE)')\n```",
    "workedExample": {
      "title": "Worked Example: Reading and Writing CSV Files (read.csv, write.csv, readr)",
      "code": "cat('read.csv(\"data.csv\", stringsAsFactors = FALSE)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reading and Writing CSV Files (read.csv, write.csv, readr).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reading and Writing CSV Files (read.csv, write.csv, readr).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Reading and Writing CSV Files (read.csv, write.csv, readr)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('read.csv(\"data.csv\", stringsAsFactors = FALSE)')\n",
    "hints": [
      "Write:\ncat('read.csv(\"data.csv\", stringsAsFactors = FALSE)')"
    ],
    "testCases": [
      {
        "id": "r-147-tc-1",
        "description": "Verifies correct implementation for Reading and Writing CSV Files (read.csv, write.csv, readr)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-148-native-r-data-serialization-sa",
    "title": "148. Native R Data Serialization: saveRDS() and readRDS()",
    "slug": "lesson-148-native-r-data-serialization-sa",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Save single R objects preserving exact memory state.",
    "concepts": [
      "Native R Data Serialization: saveRDS() and readRDS()",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Native R Data Serialization: saveRDS() and readRDS() gives you complete architectural control.",
    "explanationMarkdown": "### Native R Data Serialization: saveRDS() and readRDS()\n\nSave single R objects preserving exact memory state.\n\n```r\ncat('saveRDS(model, \"trained_model.rds\") |> readRDS()')\n```",
    "workedExample": {
      "title": "Worked Example: Native R Data Serialization: saveRDS() and readRDS()",
      "code": "cat('saveRDS(model, \"trained_model.rds\") |> readRDS()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Native R Data Serialization: saveRDS() and readRDS().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Native R Data Serialization: saveRDS() and readRDS().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Native R Data Serialization: saveRDS() and readRDS()\n# TODO: Write code below\n\n",
    "solutionCode": "cat('saveRDS(model, \"trained_model.rds\") |> readRDS()')\n",
    "hints": [
      "Write:\ncat('saveRDS(model, \"trained_model.rds\") |> readRDS()')"
    ],
    "testCases": [
      {
        "id": "r-148-tc-1",
        "description": "Verifies correct implementation for Native R Data Serialization: saveRDS() and readRDS()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-149-saving-complete-workspaces-rda",
    "title": "149. Saving Complete Workspaces (.RData and load)",
    "slug": "lesson-149-saving-complete-workspaces-rda",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Save multiple environment objects to snapshot files.",
    "concepts": [
      "Saving Complete Workspaces (.RData and load)",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: Saving Complete Workspaces (.RData and load) gives you complete architectural control.",
    "explanationMarkdown": "### Saving Complete Workspaces (.RData and load)\n\nSave multiple environment objects to snapshot files.\n\n```r\ncat('save(df, model, file = \"project.RData\")')\n```",
    "workedExample": {
      "title": "Worked Example: Saving Complete Workspaces (.RData and load)",
      "code": "cat('save(df, model, file = \"project.RData\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Saving Complete Workspaces (.RData and load).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Saving Complete Workspaces (.RData and load).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Saving Complete Workspaces (.RData and load)\n# TODO: Write code below\n\n",
    "solutionCode": "cat('save(df, model, file = \"project.RData\")')\n",
    "hints": [
      "Write:\ncat('save(df, model, file = \"project.RData\")')"
    ],
    "testCases": [
      {
        "id": "r-149-tc-1",
        "description": "Verifies correct implementation for Saving Complete Workspaces (.RData and load)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "r-150-r-capstone-end-to-end-explorat",
    "title": "150. R Capstone: End-to-End Exploratory Data Science Pipeline",
    "slug": "lesson-150-r-capstone-end-to-end-explorat",
    "language": "r",
    "category": "Module 10: Data Visualization with ggplot2 & File I/O",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ingest, clean with dplyr, model with lm, and visualize with ggplot2.",
    "concepts": [
      "R Capstone: End-to-End Exploratory Data Science Pipeline",
      "R: Data Science, Statistics & Visualization (150 Topics)"
    ],
    "analogy": "Like building with precision components: R Capstone: End-to-End Exploratory Data Science Pipeline gives you complete architectural control.",
    "explanationMarkdown": "### R Capstone: End-to-End Exploratory Data Science Pipeline\n\nIngest, clean with dplyr, model with lm, and visualize with ggplot2.\n\n```r\ncat('Capstone: Complete end-to-end data pipeline in R!')\n```",
    "workedExample": {
      "title": "Worked Example: R Capstone: End-to-End Exploratory Data Science Pipeline",
      "code": "cat('Capstone: Complete end-to-end data pipeline in R!')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for R Capstone: End-to-End Exploratory Data Science Pipeline.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of R Capstone: End-to-End Exploratory Data Science Pipeline.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement R Capstone: End-to-End Exploratory Data Science Pipeline\n# TODO: Write code below\n\n",
    "solutionCode": "cat('Capstone: Complete end-to-end data pipeline in R!')\n",
    "hints": [
      "Write:\ncat('Capstone: Complete end-to-end data pipeline in R!')"
    ],
    "testCases": [
      {
        "id": "r-150-tc-1",
        "description": "Verifies correct implementation for R Capstone: End-to-End Exploratory Data Science Pipeline",
        "testFn": "logs.length > 0"
      }
    ]
  }
]
};
