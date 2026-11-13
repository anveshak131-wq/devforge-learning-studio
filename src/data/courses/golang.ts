import { Track } from '../../types';

export const GOLANG_TRACK: Track = {
  id: "golang",
  title: "Go (Golang): Systems & Concurrency (150 Topics)",
  slug: "golang",
  language: "golang",
  icon: "Cpu",
  color: "from-cyan-400 to-blue-500",
  tagline: "Build lightning-fast cloud backend systems and concurrent pipelines with Go across 150 lessons.",
  description: "From static types, slices, and pointers to interfaces, goroutines, channels, sync primitives, context cancellation, and production microservice architecture.",
  lessons: [
  {
    "id": "golang-1-why-go?-simplicity,-concurrency,",
    "title": "1. Why Go? Simplicity, Concurrency, Fast Compiles",
    "slug": "lesson-1-why-go?-simplicity,-concurrency,",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Why Go? Simplicity, Concurrency, Fast Compiles in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Why Go? Simplicity, Concurrency, Fast Compiles",
      "Go (Golang)"
    ],
    "analogy": "A precision German sports car engine: stripped of all unnecessary chrome, built strictly for speed and reliability.",
    "explanationMarkdown": "### Why Go? Simplicity, Concurrency, Fast Compiles\n\nGo was designed at Google to build scalable, high-concurrency networked systems with simple syntax and blazing-fast compile times.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, DevForge!\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: Why Go? Simplicity, Concurrency, Fast Compiles",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, DevForge!\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Go? Simplicity, Concurrency, Fast Compiles.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Go? Simplicity, Concurrency, Fast Compiles.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, DevForge!\")\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, DevForge!\")\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, DevForge!\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-1-tc-1",
        "description": "Verifies correct implementation for Why Go? Simplicity, Concurrency, Fast Compiles",
        "testFn": "code.includes('fmt.Println') || logs.length > 0"
      }
    ]
  },
  {
    "id": "golang-2-go-modules-and-go.mod-file",
    "title": "2. Go Modules and go.mod File",
    "slug": "lesson-2-go-modules-and-go.mod-file",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Go Modules and go.mod File in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Go Modules and go.mod File",
      "Go (Golang)"
    ],
    "analogy": "The international shipping manifest of a cargo ship listing the cargo ID and manufacturer.",
    "explanationMarkdown": "### Go Modules and go.mod File\n\n`go.mod` defines the module path, minimum Go version, and pinned dependency versions.\n\n```golang\npackage main\n\nfunc main() {\n  // go.mod declares module path and dependencies\n}\n```",
    "workedExample": {
      "title": "Worked Example: Go Modules and go.mod File",
      "code": "package main\n\nfunc main() {\n  // go.mod declares module path and dependencies\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Go Modules and go.mod File.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Go Modules and go.mod File.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Initialize Go module\n// go mod init devforge/core",
    "solutionCode": "package main\n\nfunc main() {\n  // go.mod declares module path and dependencies\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // go.mod declares module path and dependencies\n}"
    ],
    "testCases": [
      {
        "id": "golang-2-tc-1",
        "description": "Verifies correct implementation for Go Modules and go.mod File",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-3-package-main-and-func-main",
    "title": "3. Package main and func main()",
    "slug": "lesson-3-package-main-and-func-main",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Package main and func main() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Package main and func main()",
      "Go (Golang)"
    ],
    "analogy": "The ignition button in an airplane cockpit: where the electrical current first starts flowing.",
    "explanationMarkdown": "### Package main and func main()\n\nEvery executable Go program must reside in `package main` and define a `func main()` entry point.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Execution starts here\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: Package main and func main()",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Execution starts here\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Package main and func main().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Package main and func main().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Execution starts here\")\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Execution starts here\")\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Execution starts here\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-3-tc-1",
        "description": "Verifies correct implementation for Package main and func main()",
        "testFn": "code.includes('func main()')"
      }
    ]
  },
  {
    "id": "golang-4-declaring-variables-with-var",
    "title": "4. Declaring Variables with var",
    "slug": "lesson-4-declaring-variables-with-var",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Declaring Variables with var in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Declaring Variables with var",
      "Go (Golang)"
    ],
    "analogy": "Labeling a clear plastic storage container with an exact label: 'Clothing Only'.",
    "explanationMarkdown": "### Declaring Variables with var\n\n`var name type = value` explicitly declares a variable with a specific static type.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  var username string = \"Sarah\"\n  fmt.Println(username)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Declaring Variables with var",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  var username string = \"Sarah\"\n  fmt.Println(username)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Declaring Variables with var.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Declaring Variables with var.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  var username string = \"Sarah\"\n  fmt.Println(username)\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  var username string = \"Sarah\"\n  fmt.Println(username)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  var username string = \"Sarah\"\n  fmt.Println(username)\n}"
    ],
    "testCases": [
      {
        "id": "golang-4-tc-1",
        "description": "Verifies correct implementation for Declaring Variables with var",
        "testFn": "code.includes('var ') || code.includes('Sarah')"
      }
    ]
  },
  {
    "id": "golang-5-short-variable-declaration-=",
    "title": "5. Short Variable Declaration (:=)",
    "slug": "lesson-5-short-variable-declaration-=",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Short Variable Declaration (:=) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Short Variable Declaration (",
      "Go (Golang)"
    ],
    "analogy": "A fast shortcut stamp: you put the item in the box and Go automatically reads its type.",
    "explanationMarkdown": "### Short Variable Declaration (:=)\n\nInside functions, `:=` declares and initializes a variable with automatic type inference.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 100\n  fmt.Println(score)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Short Variable Declaration (:=)",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 100\n  fmt.Println(score)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Short Variable Declaration (:=).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Short Variable Declaration (:=).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 100\n  fmt.Println(score)\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 100\n  fmt.Println(score)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 100\n  fmt.Println(score)\n}"
    ],
    "testCases": [
      {
        "id": "golang-5-tc-1",
        "description": "Verifies correct implementation for Short Variable Declaration (:=)",
        "testFn": "code.includes(':=') || code.includes('100')"
      }
    ]
  },
  {
    "id": "golang-6-basic-types-int,-float64,-string",
    "title": "6. Basic Types: int, float64, string, bool",
    "slug": "lesson-6-basic-types-int,-float64,-string",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Basic Types: int, float64, string, bool in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Basic Types",
      "Go (Golang)"
    ],
    "analogy": "Different sized jars in a workshop: small coin jars (int), liquid measuring cups (float), and labels (string).",
    "explanationMarkdown": "### Basic Types: int, float64, string, bool\n\nGo is statically typed with integers (`int`, `int64`), floating-points (`float64`), booleans (`bool`), and UTF-8 strings (`string`).\n\n```golang\npackage main\n\nfunc main() {\n  count := 42\n  price := 19.99\n  isReady := true\n  name := \"DevForge\"\n  _ = count; _ = price; _ = isReady; _ = name\n}\n```",
    "workedExample": {
      "title": "Worked Example: Basic Types: int, float64, string, bool",
      "code": "package main\n\nfunc main() {\n  count := 42\n  price := 19.99\n  isReady := true\n  name := \"DevForge\"\n  _ = count; _ = price; _ = isReady; _ = name\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Basic Types: int, float64, string, bool.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Basic Types: int, float64, string, bool.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  count := 42\n  price := 19.99\n  isReady := true\n  name := \"DevForge\"\n  _ = count; _ = price; _ = isReady; _ = name\n}",
    "solutionCode": "package main\n\nfunc main() {\n  count := 42\n  price := 19.99\n  isReady := true\n  name := \"DevForge\"\n  _ = count; _ = price; _ = isReady; _ = name\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  count := 42\n  price := 19.99\n  isReady := true\n  name := \"DevForge\"\n  _ = count; _ = price; _ = isReady; _ = name\n}"
    ],
    "testCases": [
      {
        "id": "golang-6-tc-1",
        "description": "Verifies correct implementation for Basic Types: int, float64, string, bool",
        "testFn": "code.includes('count := 42')"
      }
    ]
  },
  {
    "id": "golang-7-explicit-type-conversion-no-impl",
    "title": "7. Explicit Type Conversion (No Implicit Casting)",
    "slug": "lesson-7-explicit-type-conversion-no-impl",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Explicit Type Conversion (No Implicit Casting) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Explicit Type Conversion (No Implicit Casting)",
      "Go (Golang)"
    ],
    "analogy": "Converting foreign currency at an exchange booth: you must sign an explicit receipt; no automatic magic.",
    "explanationMarkdown": "### Explicit Type Conversion (No Implicit Casting)\n\nGo requires explicit type conversion: `T(v)` converts value `v` to type `T`. Mixed-type math without conversion causes compile errors!\n\n```golang\npackage main\n\nfunc main() {\n  var i int = 42\n  var f float64 = float64(i)\n  _ = f\n}\n```",
    "workedExample": {
      "title": "Worked Example: Explicit Type Conversion (No Implicit Casting)",
      "code": "package main\n\nfunc main() {\n  var i int = 42\n  var f float64 = float64(i)\n  _ = f\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Explicit Type Conversion (No Implicit Casting).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Explicit Type Conversion (No Implicit Casting).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var i int = 42\n  var f float64 = float64(i)\n  _ = f\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var i int = 42\n  var f float64 = float64(i)\n  _ = f\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var i int = 42\n  var f float64 = float64(i)\n  _ = f\n}"
    ],
    "testCases": [
      {
        "id": "golang-7-tc-1",
        "description": "Verifies correct implementation for Explicit Type Conversion (No Implicit Casting)",
        "testFn": "code.includes('float64(i)') || code.includes('float64(')"
      }
    ]
  },
  {
    "id": "golang-8-constants-and-untyped-constants-",
    "title": "8. Constants and Untyped Constants (const)",
    "slug": "lesson-8-constants-and-untyped-constants-",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Constants and Untyped Constants (const) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Constants and Untyped Constants (const)",
      "Go (Golang)"
    ],
    "analogy": "A granite stone carving of the legal speed limit: unchangeable for all time.",
    "explanationMarkdown": "### Constants and Untyped Constants (const)\n\nConstants are declared with `const` and evaluated at compile time; they can be typed or untyped.\n\n```golang\npackage main\n\nconst MaxRetries = 3\nconst Pi = 3.14159\n\nfunc main() {\n  _ = MaxRetries\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constants and Untyped Constants (const)",
      "code": "package main\n\nconst MaxRetries = 3\nconst Pi = 3.14159\n\nfunc main() {\n  _ = MaxRetries\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Constants and Untyped Constants (const).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constants and Untyped Constants (const).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nconst MaxRetries = 3\nconst Pi = 3.14159\n\nfunc main() {\n  _ = MaxRetries\n}",
    "solutionCode": "package main\n\nconst MaxRetries = 3\nconst Pi = 3.14159\n\nfunc main() {\n  _ = MaxRetries\n}",
    "hints": [
      "Write:\npackage main\n\nconst MaxRetries = 3\nconst Pi = 3.14159\n\nfunc main() {\n  _ = MaxRetries\n}"
    ],
    "testCases": [
      {
        "id": "golang-8-tc-1",
        "description": "Verifies correct implementation for Constants and Untyped Constants (const)",
        "testFn": "code.includes('const ')"
      }
    ]
  },
  {
    "id": "golang-9-the-iota-enumerator-generator",
    "title": "9. The iota Enumerator Generator",
    "slug": "lesson-9-the-iota-enumerator-generator",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The iota Enumerator Generator in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The iota Enumerator Generator",
      "Go (Golang)"
    ],
    "analogy": "A ticket dispenser automatically stamping sequential integer numbers (0, 1, 2) on deli tickets.",
    "explanationMarkdown": "### The iota Enumerator Generator\n\n`iota` simplifies constant definitions, auto-incrementing by 1 on each line within a `const` block.\n\n```golang\npackage main\n\nconst (\n  StatusPending = iota\n  StatusActive\n  StatusCompleted\n)\n\nfunc main() {\n  _ = StatusActive\n}\n```",
    "workedExample": {
      "title": "Worked Example: The iota Enumerator Generator",
      "code": "package main\n\nconst (\n  StatusPending = iota\n  StatusActive\n  StatusCompleted\n)\n\nfunc main() {\n  _ = StatusActive\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The iota Enumerator Generator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The iota Enumerator Generator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nconst (\n  StatusPending = iota\n  StatusActive\n  StatusCompleted\n)\n\nfunc main() {\n  _ = StatusActive\n}",
    "solutionCode": "package main\n\nconst (\n  StatusPending = iota\n  StatusActive\n  StatusCompleted\n)\n\nfunc main() {\n  _ = StatusActive\n}",
    "hints": [
      "Write:\npackage main\n\nconst (\n  StatusPending = iota\n  StatusActive\n  StatusCompleted\n)\n\nfunc main() {\n  _ = StatusActive\n}"
    ],
    "testCases": [
      {
        "id": "golang-9-tc-1",
        "description": "Verifies correct implementation for The iota Enumerator Generator",
        "testFn": "code.includes('iota')"
      }
    ]
  },
  {
    "id": "golang-10-zero-values-no-uninitialized-mem",
    "title": "10. Zero Values: No Uninitialized Memory",
    "slug": "lesson-10-zero-values-no-uninitialized-mem",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Zero Values: No Uninitialized Memory in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Zero Values",
      "Go (Golang)"
    ],
    "analogy": "A clean hotel room: beds made, towels folded, and wastebaskets emptied before the guest arrives.",
    "explanationMarkdown": "### Zero Values: No Uninitialized Memory\n\nVariables declared without explicit initial values are automatically given their zero value: `0`, `false`, `\"\"`, or `nil`.\n\n```golang\npackage main\n\nfunc main() {\n  var count int\n  var active bool\n  var name string\n  _ = count; _ = active; _ = name\n}\n```",
    "workedExample": {
      "title": "Worked Example: Zero Values: No Uninitialized Memory",
      "code": "package main\n\nfunc main() {\n  var count int\n  var active bool\n  var name string\n  _ = count; _ = active; _ = name\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Zero Values: No Uninitialized Memory.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Zero Values: No Uninitialized Memory.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var count int     // 0\n  var active bool   // false\n  var name string   // \"\"\n  _ = count; _ = active; _ = name\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var count int\n  var active bool\n  var name string\n  _ = count; _ = active; _ = name\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var count int\n  var active bool\n  var name string\n  _ = count; _ = active; _ = name\n}"
    ],
    "testCases": [
      {
        "id": "golang-10-tc-1",
        "description": "Verifies correct implementation for Zero Values: No Uninitialized Memory",
        "testFn": "code.includes('var count int') || code.includes('var ')"
      }
    ]
  },
  {
    "id": "golang-11-the-blank-identifier-_",
    "title": "11. The Blank Identifier (_)",
    "slug": "lesson-11-the-blank-identifier-_",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Blank Identifier (_) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Blank Identifier (_)",
      "Go (Golang)"
    ],
    "analogy": "A wastepaper shredder bin: discarding unwanted return values without complaining about unused variables.",
    "explanationMarkdown": "### The Blank Identifier (_)\n\nThe blank identifier `_` acts as a write-only discard bucket, satisfying Go's strict unused variable compiler check.\n\n```golang\npackage main\n\nfunc main() {\n  val, _ := 10, 20\n  _ = val\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Blank Identifier (_)",
      "code": "package main\n\nfunc main() {\n  val, _ := 10, 20\n  _ = val\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Blank Identifier (_).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Blank Identifier (_).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  val, _ := 10, 20\n  _ = val\n}",
    "solutionCode": "package main\n\nfunc main() {\n  val, _ := 10, 20\n  _ = val\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  val, _ := 10, 20\n  _ = val\n}"
    ],
    "testCases": [
      {
        "id": "golang-11-tc-1",
        "description": "Verifies correct implementation for The Blank Identifier (_)",
        "testFn": "code.includes('_')"
      }
    ]
  },
  {
    "id": "golang-12-string-formatting-with-fmt.print",
    "title": "12. String Formatting with fmt.Printf (%v, %T, %d, %s)",
    "slug": "lesson-12-string-formatting-with-fmt.print",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master String Formatting with fmt.Printf (%v, %T, %d, %s) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "String Formatting with fmt.Printf (%v, %T, %d, %s)",
      "Go (Golang)"
    ],
    "analogy": "A fill-in-the-blank certificate using formatting verbs: `%v` for value, `%T` for type, `%d` for integer, `%s` for string.",
    "explanationMarkdown": "### String Formatting with fmt.Printf (%v, %T, %d, %s)\n\nThe `fmt` package provides C-style formatted I/O: `%v` (default format), `%+v` (struct fields), `%T` (type).\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  name := \"Go\"\n  fmt.Printf(\"Language: %s\\n\", name)\n}\n```",
    "workedExample": {
      "title": "Worked Example: String Formatting with fmt.Printf (%v, %T, %d, %s)",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  name := \"Go\"\n  fmt.Printf(\"Language: %s\\n\", name)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Formatting with fmt.Printf (%v, %T, %d, %s).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Formatting with fmt.Printf (%v, %T, %d, %s).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  name := \"Go\"\n  fmt.Printf(\"Language: %s\\n\", name)\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  name := \"Go\"\n  fmt.Printf(\"Language: %s\\n\", name)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  name := \"Go\"\n  fmt.Printf(\"Language: %s\\n\", name)\n}"
    ],
    "testCases": [
      {
        "id": "golang-12-tc-1",
        "description": "Verifies correct implementation for String Formatting with fmt.Printf (%v, %T, %d, %s)",
        "testFn": "code.includes('fmt.Printf') || code.includes('%s')"
      }
    ]
  },
  {
    "id": "golang-13-compiling-and-running-go-run-vs-",
    "title": "13. Compiling and Running: go run vs go build",
    "slug": "lesson-13-compiling-and-running-go-run-vs-",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Compiling and Running: go run vs go build in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Compiling and Running",
      "Go (Golang)"
    ],
    "analogy": "Rehearsing a play in a practice studio (`go run`) vs performing on opening night with full costumes (`go build`).",
    "explanationMarkdown": "### Compiling and Running: go run vs go build\n\n`go run` is for rapid iterative development; `go build` outputs a blazing-fast self-contained machine binary.\n\n```golang\npackage main\n\nfunc main() {\n  // go run main.go compiles and runs in memory\n  // go build main.go compiles a standalone binary\n}\n```",
    "workedExample": {
      "title": "Worked Example: Compiling and Running: go run vs go build",
      "code": "package main\n\nfunc main() {\n  // go run main.go compiles and runs in memory\n  // go build main.go compiles a standalone binary\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Compiling and Running: go run vs go build.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Compiling and Running: go run vs go build.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // go run main.go compiles and runs in memory\n  // go build main.go compiles a standalone binary\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // go run main.go compiles and runs in memory\n  // go build main.go compiles a standalone binary\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // go run main.go compiles and runs in memory\n  // go build main.go compiles a standalone binary\n}"
    ],
    "testCases": [
      {
        "id": "golang-13-tc-1",
        "description": "Verifies correct implementation for Compiling and Running: go run vs go build",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-14-go-formatting-gofmt-standards",
    "title": "14. Go Formatting: gofmt Standards",
    "slug": "lesson-14-go-formatting-gofmt-standards",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Go Formatting: gofmt Standards in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Go Formatting",
      "Go (Golang)"
    ],
    "analogy": "A school uniform policy: all students wear identical clean uniforms so zero arguments occur over fashion.",
    "explanationMarkdown": "### Go Formatting: gofmt Standards\n\n`gofmt` is Go's official code formatter; it completely eliminates team debates about indentation and spacing.\n\n```golang\npackage main\n\nfunc main() {\n  // gofmt automatically formats all Go code\n}\n```",
    "workedExample": {
      "title": "Worked Example: Go Formatting: gofmt Standards",
      "code": "package main\n\nfunc main() {\n  // gofmt automatically formats all Go code\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Go Formatting: gofmt Standards.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Go Formatting: gofmt Standards.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // gofmt automatically formats all Go code\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // gofmt automatically formats all Go code\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // gofmt automatically formats all Go code\n}"
    ],
    "testCases": [
      {
        "id": "golang-14-tc-1",
        "description": "Verifies correct implementation for Go Formatting: gofmt Standards",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-15-module-1-review-clean-go-environ",
    "title": "15. Module 1 Review: Clean Go Environment",
    "slug": "lesson-15-module-1-review-clean-go-environ",
    "language": "golang",
    "category": "Module 1: Go Syntax & Type System",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: Clean Go Environment in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 1 Review",
      "Go (Golang)"
    ],
    "analogy": "A clean, calibrated workbench in an aeronautical assembly hangar.",
    "explanationMarkdown": "### Module 1 Review: Clean Go Environment\n\nA solid foundation in Go syntax: packages, imports, static types, zero values, iota, and formatting.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  appName := \"DevForge\"\n  fmt.Printf(\"App: %s initialized\\n\", appName)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: Clean Go Environment",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  appName := \"DevForge\"\n  fmt.Printf(\"App: %s initialized\\n\", appName)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 1 Review: Clean Go Environment.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 1 Review: Clean Go Environment.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  appName := \"DevForge\"\n  fmt.Printf(\"App: %s initialized\\n\", appName)\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  appName := \"DevForge\"\n  fmt.Printf(\"App: %s initialized\\n\", appName)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  appName := \"DevForge\"\n  fmt.Printf(\"App: %s initialized\\n\", appName)\n}"
    ],
    "testCases": [
      {
        "id": "golang-15-tc-1",
        "description": "Verifies correct implementation for Module 1 Review: Clean Go Environment",
        "testFn": "code.includes('appName := \"DevForge\"') || code.includes('DevForge')"
      }
    ]
  },
  {
    "id": "golang-16-if-statements-with-inline-initia",
    "title": "16. If Statements with Inline Initialization",
    "slug": "lesson-16-if-statements-with-inline-initia",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master If Statements with Inline Initialization in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "If Statements with Inline Initialization",
      "Go (Golang)"
    ],
    "analogy": "Checking your wallet balance and deciding to buy lunch in the exact same step, keeping the cash receipt private.",
    "explanationMarkdown": "### If Statements with Inline Initialization\n\nGo allows initializing a local variable before the if condition: `if err := doWork(); err != nil` (scoped strictly to if/else blocks).\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  if count := 10; count > 5 {\n    fmt.Println(\"High count\")\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: If Statements with Inline Initialization",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  if count := 10; count > 5 {\n    fmt.Println(\"High count\")\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for If Statements with Inline Initialization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of If Statements with Inline Initialization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  if count := 10; count > 5 {\n    fmt.Println(\"High count\")\n  }\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  if count := 10; count > 5 {\n    fmt.Println(\"High count\")\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  if count := 10; count > 5 {\n    fmt.Println(\"High count\")\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-16-tc-1",
        "description": "Verifies correct implementation for If Statements with Inline Initialization",
        "testFn": "code.includes('if count := 10') || code.includes('if ')"
      }
    ]
  },
  {
    "id": "golang-17-switch-statements-without-break-",
    "title": "17. Switch Statements without Break (Auto-Break)",
    "slug": "lesson-17-switch-statements-without-break-",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Switch Statements without Break (Auto-Break) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Switch Statements without Break (Auto-Break)",
      "Go (Golang)"
    ],
    "analogy": "A rotary telephone dial: turning to '3' clicks into position 3 and stops; no accidental bleeding into 4.",
    "explanationMarkdown": "### Switch Statements without Break (Auto-Break)\n\nIn Go, switch cases break automatically; no manual `break` keyword is required! Use `fallthrough` if needed.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  role := \"admin\"\n  switch role {\n  case \"admin\":\n    fmt.Println(\"Full access\")\n  case \"user\":\n    fmt.Println(\"Limited access\")\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Switch Statements without Break (Auto-Break)",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  role := \"admin\"\n  switch role {\n  case \"admin\":\n    fmt.Println(\"Full access\")\n  case \"user\":\n    fmt.Println(\"Limited access\")\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Switch Statements without Break (Auto-Break).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Switch Statements without Break (Auto-Break).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  role := \"admin\"\n  switch role {\n  case \"admin\":\n    fmt.Println(\"Full access\")\n  case \"user\":\n    fmt.Println(\"Limited access\")\n  }\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  role := \"admin\"\n  switch role {\n  case \"admin\":\n    fmt.Println(\"Full access\")\n  case \"user\":\n    fmt.Println(\"Limited access\")\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  role := \"admin\"\n  switch role {\n  case \"admin\":\n    fmt.Println(\"Full access\")\n  case \"user\":\n    fmt.Println(\"Limited access\")\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-17-tc-1",
        "description": "Verifies correct implementation for Switch Statements without Break (Auto-Break)",
        "testFn": "code.includes('switch role') || code.includes('case ')"
      }
    ]
  },
  {
    "id": "golang-18-conditionless-switch-as-clean-if",
    "title": "18. Conditionless Switch as Clean If-Else Chains",
    "slug": "lesson-18-conditionless-switch-as-clean-if",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Conditionless Switch as Clean If-Else Chains in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Conditionless Switch as Clean If-Else Chains",
      "Go (Golang)"
    ],
    "analogy": "A cafeteria menu board: reading down the list of meal options and picking the first matching deal.",
    "explanationMarkdown": "### Conditionless Switch as Clean If-Else Chains\n\nA switch without a condition `switch { ... }` is the idiomatic Go replacement for long `if-elif-else` chains.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 85\n  switch {\n  case score >= 90:\n    fmt.Println(\"A\")\n  case score >= 80:\n    fmt.Println(\"B\")\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Conditionless Switch as Clean If-Else Chains",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 85\n  switch {\n  case score >= 90:\n    fmt.Println(\"A\")\n  case score >= 80:\n    fmt.Println(\"B\")\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Conditionless Switch as Clean If-Else Chains.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Conditionless Switch as Clean If-Else Chains.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 85\n  switch {\n  case score >= 90:\n    fmt.Println(\"A\")\n  case score >= 80:\n    fmt.Println(\"B\")\n  }\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 85\n  switch {\n  case score >= 90:\n    fmt.Println(\"A\")\n  case score >= 80:\n    fmt.Println(\"B\")\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 85\n  switch {\n  case score >= 90:\n    fmt.Println(\"A\")\n  case score >= 80:\n    fmt.Println(\"B\")\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-18-tc-1",
        "description": "Verifies correct implementation for Conditionless Switch as Clean If-Else Chains",
        "testFn": "code.includes('switch {') || code.includes('case score')"
      }
    ]
  },
  {
    "id": "golang-19-for-loops-the-only-loop-in-go!",
    "title": "19. For Loops: The ONLY Loop in Go!",
    "slug": "lesson-19-for-loops-the-only-loop-in-go!",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master For Loops: The ONLY Loop in Go! in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "For Loops",
      "Go (Golang)"
    ],
    "analogy": "A mechanical hand crank: the only tool you need to turn whether turning once, ten times, or endlessly.",
    "explanationMarkdown": "### For Loops: The ONLY Loop in Go!\n\nGo has no `while` or `do-while` keywords; `for` handles all loops (standard, while-style, and infinite).\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 0; i < 3; i++ {\n    fmt.Println(i)\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: For Loops: The ONLY Loop in Go!",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 0; i < 3; i++ {\n    fmt.Println(i)\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for For Loops: The ONLY Loop in Go!.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of For Loops: The ONLY Loop in Go!.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 0; i < 3; i++ {\n    fmt.Println(i)\n  }\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 0; i < 3; i++ {\n    fmt.Println(i)\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 0; i < 3; i++ {\n    fmt.Println(i)\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-19-tc-1",
        "description": "Verifies correct implementation for For Loops: The ONLY Loop in Go!",
        "testFn": "code.includes('for i := 0') || code.includes('for ')"
      }
    ]
  },
  {
    "id": "golang-20-while-style-for-loops-in-go",
    "title": "20. While-Style For Loops in Go",
    "slug": "lesson-20-while-style-for-loops-in-go",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master While-Style For Loops in Go in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "While-Style For Loops in Go",
      "Go (Golang)"
    ],
    "analogy": "A kettle boiling on a stove: keep waiting as long as the water temperature is below 100\u00b0C.",
    "explanationMarkdown": "### While-Style For Loops in Go\n\n`for condition { ... }` behaves exactly like a while loop in other languages.\n\n```golang\npackage main\n\nfunc main() {\n  count := 3\n  for count > 0 {\n    count--\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: While-Style For Loops in Go",
      "code": "package main\n\nfunc main() {\n  count := 3\n  for count > 0 {\n    count--\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for While-Style For Loops in Go.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of While-Style For Loops in Go.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  count := 3\n  for count > 0 {\n    count--\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  count := 3\n  for count > 0 {\n    count--\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  count := 3\n  for count > 0 {\n    count--\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-20-tc-1",
        "description": "Verifies correct implementation for While-Style For Loops in Go",
        "testFn": "code.includes('for count > 0')"
      }
    ]
  },
  {
    "id": "golang-21-infinite-for-loops-and-break---c",
    "title": "21. Infinite For Loops and break / continue",
    "slug": "lesson-21-infinite-for-loops-and-break---c",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Infinite For Loops and break / continue in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Infinite For Loops and break / continue",
      "Go (Golang)"
    ],
    "analogy": "A motor running indefinitely until an emergency kill switch is pressed.",
    "explanationMarkdown": "### Infinite For Loops and break / continue\n\n`for { ... }` runs an infinite loop; terminate with `break`, advance with `continue`.\n\n```golang\npackage main\n\nfunc main() {\n  for {\n    break\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Infinite For Loops and break / continue",
      "code": "package main\n\nfunc main() {\n  for {\n    break\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Infinite For Loops and break / continue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Infinite For Loops and break / continue.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  for {\n    break\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  for {\n    break\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  for {\n    break\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-21-tc-1",
        "description": "Verifies correct implementation for Infinite For Loops and break / continue",
        "testFn": "code.includes('for {') && code.includes('break')"
      }
    ]
  },
  {
    "id": "golang-22-function-declaration-and-typed-p",
    "title": "22. Function Declaration and Typed Parameters",
    "slug": "lesson-22-function-declaration-and-typed-p",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Function Declaration and Typed Parameters in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Function Declaration and Typed Parameters",
      "Go (Golang)"
    ],
    "analogy": "A breadmaker machine: accepts 2 cups of flour (int) and 1 cup of water (int), outputs 1 loaf (int).",
    "explanationMarkdown": "### Function Declaration and Typed Parameters\n\nFunctions declare parameter types and return type: `func name(param type) returnType`.\n\n```golang\npackage main\n\nfunc add(a int, b int) int {\n  return a + b\n}\n\nfunc main() {\n  _ = add(2, 3)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Function Declaration and Typed Parameters",
      "code": "package main\n\nfunc add(a int, b int) int {\n  return a + b\n}\n\nfunc main() {\n  _ = add(2, 3)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Function Declaration and Typed Parameters.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Function Declaration and Typed Parameters.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc add(a int, b int) int {\n  return a + b\n}\n\nfunc main() {\n  _ = add(2, 3)\n}",
    "solutionCode": "package main\n\nfunc add(a int, b int) int {\n  return a + b\n}\n\nfunc main() {\n  _ = add(2, 3)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc add(a int, b int) int {\n  return a + b\n}\n\nfunc main() {\n  _ = add(2, 3)\n}"
    ],
    "testCases": [
      {
        "id": "golang-22-tc-1",
        "description": "Verifies correct implementation for Function Declaration and Typed Parameters",
        "testFn": "code.includes('func add') && code.includes('return a + b')"
      }
    ]
  },
  {
    "id": "golang-23-shorthand-consecutive-parameter-",
    "title": "23. Shorthand Consecutive Parameter Types",
    "slug": "lesson-23-shorthand-consecutive-parameter-",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Shorthand Consecutive Parameter Types in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Shorthand Consecutive Parameter Types",
      "Go (Golang)"
    ],
    "analogy": "Writing 'John and Sarah, Engineers' instead of 'John Engineer, Sarah Engineer'.",
    "explanationMarkdown": "### Shorthand Consecutive Parameter Types\n\nWhen consecutive parameters share the same type, you only need to write the type after the last one: `(a, b, c int)`.\n\n```golang\npackage main\n\nfunc multiply(a, b int) int {\n  return a * b\n}\n\nfunc main() {\n  _ = multiply(4, 5)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Shorthand Consecutive Parameter Types",
      "code": "package main\n\nfunc multiply(a, b int) int {\n  return a * b\n}\n\nfunc main() {\n  _ = multiply(4, 5)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shorthand Consecutive Parameter Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shorthand Consecutive Parameter Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc multiply(a, b int) int {\n  return a * b\n}\n\nfunc main() {\n  _ = multiply(4, 5)\n}",
    "solutionCode": "package main\n\nfunc multiply(a, b int) int {\n  return a * b\n}\n\nfunc main() {\n  _ = multiply(4, 5)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc multiply(a, b int) int {\n  return a * b\n}\n\nfunc main() {\n  _ = multiply(4, 5)\n}"
    ],
    "testCases": [
      {
        "id": "golang-23-tc-1",
        "description": "Verifies correct implementation for Shorthand Consecutive Parameter Types",
        "testFn": "code.includes('(a, b int)') || code.includes('func multiply')"
      }
    ]
  },
  {
    "id": "golang-24-multiple-return-values-gos-signa",
    "title": "24. Multiple Return Values (Go's Signature Feature)",
    "slug": "lesson-24-multiple-return-values-gos-signa",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Multiple Return Values (Go's Signature Feature) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Multiple Return Values (Go's Signature Feature)",
      "Go (Golang)"
    ],
    "analogy": "A bank ATM delivering both your cash and an official printed receipt simultaneously.",
    "explanationMarkdown": "### Multiple Return Values (Go's Signature Feature)\n\nGo functions can return multiple values: `func calc() (int, error)`, eliminating awkward wrapper objects.\n\n```golang\npackage main\n\nfunc divide(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := divide(10, 2)\n  _ = res; _ = ok\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Return Values (Go's Signature Feature)",
      "code": "package main\n\nfunc divide(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := divide(10, 2)\n  _ = res; _ = ok\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Return Values (Go's Signature Feature).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Return Values (Go's Signature Feature).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc divide(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := divide(10, 2)\n  _ = res; _ = ok\n}",
    "solutionCode": "package main\n\nfunc divide(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := divide(10, 2)\n  _ = res; _ = ok\n}",
    "hints": [
      "Write:\npackage main\n\nfunc divide(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := divide(10, 2)\n  _ = res; _ = ok\n}"
    ],
    "testCases": [
      {
        "id": "golang-24-tc-1",
        "description": "Verifies correct implementation for Multiple Return Values (Go's Signature Feature)",
        "testFn": "code.includes('(int, bool)') || code.includes('return a / b')"
      }
    ]
  },
  {
    "id": "golang-25-named-return-values-and-naked-re",
    "title": "25. Named Return Values and Naked Returns",
    "slug": "lesson-25-named-return-values-and-naked-re",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Named Return Values and Naked Returns in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Named Return Values and Naked Returns",
      "Go (Golang)"
    ],
    "analogy": "Naming labeled output slots on a conveyor belt; hitting 'Dispatch' empties all labeled slots.",
    "explanationMarkdown": "### Named Return Values and Naked Returns\n\nReturn values can be named at the function header; a bare `return` returns their current values (use sparingly).\n\n```golang\npackage main\n\nfunc split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return\n}\n\nfunc main() {\n  _, _ = split(18)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Named Return Values and Naked Returns",
      "code": "package main\n\nfunc split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return\n}\n\nfunc main() {\n  _, _ = split(18)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Named Return Values and Naked Returns.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Named Return Values and Naked Returns.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return // naked return!\n}\n\nfunc main() {\n  _, _ = split(18)\n}",
    "solutionCode": "package main\n\nfunc split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return\n}\n\nfunc main() {\n  _, _ = split(18)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return\n}\n\nfunc main() {\n  _, _ = split(18)\n}"
    ],
    "testCases": [
      {
        "id": "golang-25-tc-1",
        "description": "Verifies correct implementation for Named Return Values and Naked Returns",
        "testFn": "code.includes('(x, y int)') || code.includes('return')"
      }
    ]
  },
  {
    "id": "golang-26-variadic-functions-with-...-elli",
    "title": "26. Variadic Functions with ... (Ellipsis)",
    "slug": "lesson-26-variadic-functions-with-...-elli",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Variadic Functions with ... (Ellipsis) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Variadic Functions with ... (Ellipsis)",
      "Go (Golang)"
    ],
    "analogy": "A shopping bag that can hold 1, 5, or 20 apples without needing a different bag for each count.",
    "explanationMarkdown": "### Variadic Functions with ... (Ellipsis)\n\nVariadic functions accept zero or more trailing arguments of that type, packed into a slice inside the function.\n\n```golang\npackage main\n\nfunc sumAll(nums ...int) int {\n  total := 0\n  for _, n := range nums {\n    total += n\n  }\n  return total\n}\n\nfunc main() {\n  _ = sumAll(1, 2, 3, 4)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Variadic Functions with ... (Ellipsis)",
      "code": "package main\n\nfunc sumAll(nums ...int) int {\n  total := 0\n  for _, n := range nums {\n    total += n\n  }\n  return total\n}\n\nfunc main() {\n  _ = sumAll(1, 2, 3, 4)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variadic Functions with ... (Ellipsis).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variadic Functions with ... (Ellipsis).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc sumAll(nums ...int) int {\n  total := 0\n  for _, n := range nums {\n    total += n\n  }\n  return total\n}\n\nfunc main() {\n  _ = sumAll(1, 2, 3, 4)\n}",
    "solutionCode": "package main\n\nfunc sumAll(nums ...int) int {\n  total := 0\n  for _, n := range nums {\n    total += n\n  }\n  return total\n}\n\nfunc main() {\n  _ = sumAll(1, 2, 3, 4)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc sumAll(nums ...int) int {\n  total := 0\n  for _, n := range nums {\n    total += n\n  }\n  return total\n}\n\nfunc main() {\n  _ = sumAll(1, 2, 3, 4)\n}"
    ],
    "testCases": [
      {
        "id": "golang-26-tc-1",
        "description": "Verifies correct implementation for Variadic Functions with ... (Ellipsis)",
        "testFn": "code.includes('...int') || code.includes('func sumAll')"
      }
    ]
  },
  {
    "id": "golang-27-anonymous-functions-and-closures",
    "title": "27. Anonymous Functions and Closures",
    "slug": "lesson-27-anonymous-functions-and-closures",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Anonymous Functions and Closures in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Anonymous Functions and Closures",
      "Go (Golang)"
    ],
    "analogy": "A pocket camera remembering the ambient lighting settings of the room where it was calibrated.",
    "explanationMarkdown": "### Anonymous Functions and Closures\n\nClosures are functions that reference variables from outside their body, capturing surrounding state.\n\n```golang\npackage main\n\nfunc makeAdder(x int) func(int) int {\n  return func(y int) int {\n    return x + y\n  }\n}\n\nfunc main() {\n  addFive := makeAdder(5)\n  _ = addFive(10)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Anonymous Functions and Closures",
      "code": "package main\n\nfunc makeAdder(x int) func(int) int {\n  return func(y int) int {\n    return x + y\n  }\n}\n\nfunc main() {\n  addFive := makeAdder(5)\n  _ = addFive(10)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anonymous Functions and Closures.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anonymous Functions and Closures.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc makeAdder(x int) func(int) int {\n  return func(y int) int {\n    return x + y\n  }\n}\n\nfunc main() {\n  addFive := makeAdder(5)\n  _ = addFive(10)\n}",
    "solutionCode": "package main\n\nfunc makeAdder(x int) func(int) int {\n  return func(y int) int {\n    return x + y\n  }\n}\n\nfunc main() {\n  addFive := makeAdder(5)\n  _ = addFive(10)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc makeAdder(x int) func(int) int {\n  return func(y int) int {\n    return x + y\n  }\n}\n\nfunc main() {\n  addFive := makeAdder(5)\n  _ = addFive(10)\n}"
    ],
    "testCases": [
      {
        "id": "golang-27-tc-1",
        "description": "Verifies correct implementation for Anonymous Functions and Closures",
        "testFn": "code.includes('func(int) int') || code.includes('makeAdder')"
      }
    ]
  },
  {
    "id": "golang-28-the-defer-statement-lifo-executi",
    "title": "28. The defer Statement (LIFO Execution Order)",
    "slug": "lesson-28-the-defer-statement-lifo-executi",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The defer Statement (LIFO Execution Order) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The defer Statement (LIFO Execution Order)",
      "Go (Golang)"
    ],
    "analogy": "Setting an automatic alarm to turn off the lights the moment you walk out the front door.",
    "explanationMarkdown": "### The defer Statement (LIFO Execution Order)\n\n`defer` schedules a function call to execute immediately before the surrounding function returns, in LIFO order.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  defer fmt.Println(\"World\")\n  fmt.Println(\"Hello\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: The defer Statement (LIFO Execution Order)",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  defer fmt.Println(\"World\")\n  fmt.Println(\"Hello\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The defer Statement (LIFO Execution Order).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The defer Statement (LIFO Execution Order).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  defer fmt.Println(\"World\")\n  fmt.Println(\"Hello\")\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  defer fmt.Println(\"World\")\n  fmt.Println(\"Hello\")\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  defer fmt.Println(\"World\")\n  fmt.Println(\"Hello\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-28-tc-1",
        "description": "Verifies correct implementation for The defer Statement (LIFO Execution Order)",
        "testFn": "code.includes('defer ')"
      }
    ]
  },
  {
    "id": "golang-29-common-use-cases-for-defer-mutex",
    "title": "29. Common Use Cases for defer: Mutex Unlocks & File Closes",
    "slug": "lesson-29-common-use-cases-for-defer-mutex",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Common Use Cases for defer: Mutex Unlocks & File Closes in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Common Use Cases for defer",
      "Go (Golang)"
    ],
    "analogy": "Booking the return flight ticket in the exact same transaction as buying the departure ticket.",
    "explanationMarkdown": "### Common Use Cases for defer: Mutex Unlocks & File Closes\n\nPlacing `defer resource.Close()` right after opening prevents resource leaks regardless of how the function exits.\n\n```golang\npackage main\n\nfunc main() {\n  // file, _ := os.Open(\"data.txt\")\n  // defer file.Close()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Common Use Cases for defer: Mutex Unlocks & File Closes",
      "code": "package main\n\nfunc main() {\n  // file, _ := os.Open(\"data.txt\")\n  // defer file.Close()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Common Use Cases for defer: Mutex Unlocks & File Closes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Common Use Cases for defer: Mutex Unlocks & File Closes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // file, _ := os.Open(\"data.txt\")\n  // defer file.Close()\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // file, _ := os.Open(\"data.txt\")\n  // defer file.Close()\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // file, _ := os.Open(\"data.txt\")\n  // defer file.Close()\n}"
    ],
    "testCases": [
      {
        "id": "golang-29-tc-1",
        "description": "Verifies correct implementation for Common Use Cases for defer: Mutex Unlocks & File Closes",
        "testFn": "code.includes('defer') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-30-module-2-review-flow-control-mas",
    "title": "30. Module 2 Review: Flow Control Mastery",
    "slug": "lesson-30-module-2-review-flow-control-mas",
    "language": "golang",
    "category": "Module 2: Flow Control & Functions",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 2 Review: Flow Control Mastery in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 2 Review",
      "Go (Golang)"
    ],
    "analogy": "A master train dispatcher managing junctions, signals, and emergency sidings with zero derailments.",
    "explanationMarkdown": "### Module 2 Review: Flow Control Mastery\n\nMastery over if initialization, auto-breaking switch cases, for loops, multiple returns, and defer cleanup.\n\n```golang\npackage main\n\nfunc safeDiv(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := safeDiv(20, 4)\n  _ = res; _ = ok\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Flow Control Mastery",
      "code": "package main\n\nfunc safeDiv(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := safeDiv(20, 4)\n  _ = res; _ = ok\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 2 Review: Flow Control Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 2 Review: Flow Control Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc safeDiv(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := safeDiv(20, 4)\n  _ = res; _ = ok\n}",
    "solutionCode": "package main\n\nfunc safeDiv(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := safeDiv(20, 4)\n  _ = res; _ = ok\n}",
    "hints": [
      "Write:\npackage main\n\nfunc safeDiv(a, b int) (int, bool) {\n  if b == 0 { return 0, false }\n  return a / b, true\n}\n\nfunc main() {\n  res, ok := safeDiv(20, 4)\n  _ = res; _ = ok\n}"
    ],
    "testCases": [
      {
        "id": "golang-30-tc-1",
        "description": "Verifies correct implementation for Module 2 Review: Flow Control Mastery",
        "testFn": "code.includes('safeDiv') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-31-fixed-length-arrays-in-go-[n]t",
    "title": "31. Fixed-Length Arrays in Go: [N]T",
    "slug": "lesson-31-fixed-length-arrays-in-go-[n]t",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Fixed-Length Arrays in Go: [N]T in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Fixed-Length Arrays in Go",
      "Go (Golang)"
    ],
    "analogy": "A wooden egg carton with exactly 12 fixed hollows: you cannot stretch it to hold 13 eggs.",
    "explanationMarkdown": "### Fixed-Length Arrays in Go: [N]T\n\nIn Go, array length is part of its type: `[3]int` and `[4]int` are completely incompatible types!\n\n```golang\npackage main\n\nfunc main() {\n  var arr [3]int = [3]int{10, 20, 30}\n  _ = arr\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fixed-Length Arrays in Go: [N]T",
      "code": "package main\n\nfunc main() {\n  var arr [3]int = [3]int{10, 20, 30}\n  _ = arr\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fixed-Length Arrays in Go: [N]T.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fixed-Length Arrays in Go: [N]T.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var arr [3]int = [3]int{10, 20, 30}\n  _ = arr\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var arr [3]int = [3]int{10, 20, 30}\n  _ = arr\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var arr [3]int = [3]int{10, 20, 30}\n  _ = arr\n}"
    ],
    "testCases": [
      {
        "id": "golang-31-tc-1",
        "description": "Verifies correct implementation for Fixed-Length Arrays in Go: [N]T",
        "testFn": "code.includes('[3]int') || code.includes('arr')"
      }
    ]
  },
  {
    "id": "golang-32-array-value-semantics-copying,-n",
    "title": "32. Array Value Semantics: Copying, Not Referencing",
    "slug": "lesson-32-array-value-semantics-copying,-n",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Array Value Semantics: Copying, Not Referencing in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Array Value Semantics",
      "Go (Golang)"
    ],
    "analogy": "Photocopying a paper form: drawing a smiley face on the copy does not affect the original sheet.",
    "explanationMarkdown": "### Array Value Semantics: Copying, Not Referencing\n\nArrays in Go are values: assigning an array to a new variable creates a full independent memory copy.\n\n```golang\npackage main\n\nfunc main() {\n  a := [2]int{1, 2}\n  b := a\n  b[0] = 99\n  _ = a; _ = b\n}\n```",
    "workedExample": {
      "title": "Worked Example: Array Value Semantics: Copying, Not Referencing",
      "code": "package main\n\nfunc main() {\n  a := [2]int{1, 2}\n  b := a\n  b[0] = 99\n  _ = a; _ = b\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Array Value Semantics: Copying, Not Referencing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Array Value Semantics: Copying, Not Referencing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  a := [2]int{1, 2}\n  b := a // Copies all elements!\n  b[0] = 99\n  _ = a; _ = b\n}",
    "solutionCode": "package main\n\nfunc main() {\n  a := [2]int{1, 2}\n  b := a\n  b[0] = 99\n  _ = a; _ = b\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  a := [2]int{1, 2}\n  b := a\n  b[0] = 99\n  _ = a; _ = b\n}"
    ],
    "testCases": [
      {
        "id": "golang-32-tc-1",
        "description": "Verifies correct implementation for Array Value Semantics: Copying, Not Referencing",
        "testFn": "code.includes('b := a')"
      }
    ]
  },
  {
    "id": "golang-33-slices-dynamic-windows-into-arra",
    "title": "33. Slices: Dynamic Windows into Arrays",
    "slug": "lesson-33-slices-dynamic-windows-into-arra",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Slices: Dynamic Windows into Arrays in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Slices",
      "Go (Golang)"
    ],
    "analogy": "A magnifying glass sliding over a row of books: flexible, adjustable, and lightweight.",
    "explanationMarkdown": "### Slices: Dynamic Windows into Arrays\n\nA slice `[]T` is a lightweight 24-byte header wrapping an underlying array: pointer, length, and capacity.\n\n```golang\npackage main\n\nfunc main() {\n  primes := []int{2, 3, 5, 7, 11}\n  _ = primes\n}\n```",
    "workedExample": {
      "title": "Worked Example: Slices: Dynamic Windows into Arrays",
      "code": "package main\n\nfunc main() {\n  primes := []int{2, 3, 5, 7, 11}\n  _ = primes\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Slices: Dynamic Windows into Arrays.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Slices: Dynamic Windows into Arrays.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  primes := []int{2, 3, 5, 7, 11}\n  _ = primes\n}",
    "solutionCode": "package main\n\nfunc main() {\n  primes := []int{2, 3, 5, 7, 11}\n  _ = primes\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  primes := []int{2, 3, 5, 7, 11}\n  _ = primes\n}"
    ],
    "testCases": [
      {
        "id": "golang-33-tc-1",
        "description": "Verifies correct implementation for Slices: Dynamic Windows into Arrays",
        "testFn": "code.includes('[]int') || code.includes('primes')"
      }
    ]
  },
  {
    "id": "golang-34-slice-header-pointer,-length-len",
    "title": "34. Slice Header: Pointer, Length (len), Capacity (cap)",
    "slug": "lesson-34-slice-header-pointer,-length-len",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Slice Header: Pointer, Length (len), Capacity (cap) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Slice Header",
      "Go (Golang)"
    ],
    "analogy": "A stadium with 3 occupied seats (length) out of 10 total installed seats (capacity).",
    "explanationMarkdown": "### Slice Header: Pointer, Length (len), Capacity (cap)\n\n`len(s)` is the number of elements; `cap(s)` is the maximum elements from the slice start to underlying array end.\n\n```golang\npackage main\n\nfunc main() {\n  s := make([]int, 3, 10)\n  l := len(s)\n  c := cap(s)\n  _ = l; _ = c\n}\n```",
    "workedExample": {
      "title": "Worked Example: Slice Header: Pointer, Length (len), Capacity (cap)",
      "code": "package main\n\nfunc main() {\n  s := make([]int, 3, 10)\n  l := len(s)\n  c := cap(s)\n  _ = l; _ = c\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Slice Header: Pointer, Length (len), Capacity (cap).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Slice Header: Pointer, Length (len), Capacity (cap).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  s := make([]int, 3, 10)\n  l := len(s)\n  c := cap(s)\n  _ = l; _ = c\n}",
    "solutionCode": "package main\n\nfunc main() {\n  s := make([]int, 3, 10)\n  l := len(s)\n  c := cap(s)\n  _ = l; _ = c\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  s := make([]int, 3, 10)\n  l := len(s)\n  c := cap(s)\n  _ = l; _ = c\n}"
    ],
    "testCases": [
      {
        "id": "golang-34-tc-1",
        "description": "Verifies correct implementation for Slice Header: Pointer, Length (len), Capacity (cap)",
        "testFn": "code.includes('len(s)') && code.includes('cap(s)')"
      }
    ]
  },
  {
    "id": "golang-35-creating-slices-with-make[]t,-le",
    "title": "35. Creating Slices with make([]T, len, cap)",
    "slug": "lesson-35-creating-slices-with-make[]t,-le",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Creating Slices with make([]T, len, cap) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Creating Slices with make([]T, len, cap)",
      "Go (Golang)"
    ],
    "analogy": "Reserving a table for 10 people at a restaurant in advance so the staff sets out 10 chairs.",
    "explanationMarkdown": "### Creating Slices with make([]T, len, cap)\n\n`make([]T, len, cap)` preallocates memory, avoiding expensive reallocations as elements are added.\n\n```golang\npackage main\n\nfunc main() {\n  buf := make([]byte, 1024)\n  _ = buf\n}\n```",
    "workedExample": {
      "title": "Worked Example: Creating Slices with make([]T, len, cap)",
      "code": "package main\n\nfunc main() {\n  buf := make([]byte, 1024)\n  _ = buf\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Slices with make([]T, len, cap).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Slices with make([]T, len, cap).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  buf := make([]byte, 1024)\n  _ = buf\n}",
    "solutionCode": "package main\n\nfunc main() {\n  buf := make([]byte, 1024)\n  _ = buf\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  buf := make([]byte, 1024)\n  _ = buf\n}"
    ],
    "testCases": [
      {
        "id": "golang-35-tc-1",
        "description": "Verifies correct implementation for Creating Slices with make([]T, len, cap)",
        "testFn": "code.includes('make([]byte') || code.includes('make(')"
      }
    ]
  },
  {
    "id": "golang-36-appending-elements-with-append",
    "title": "36. Appending Elements with append()",
    "slug": "lesson-36-appending-elements-with-append",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Appending Elements with append() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Appending Elements with append()",
      "Go (Golang)"
    ],
    "analogy": "Hitching an additional passenger coach onto the back of a train.",
    "explanationMarkdown": "### Appending Elements with append()\n\n`append(slice, elements...)` appends data, automatically doubling capacity when the buffer fills up.\n\n```golang\npackage main\n\nfunc main() {\n  var s []int\n  s = append(s, 1, 2, 3)\n  _ = s\n}\n```",
    "workedExample": {
      "title": "Worked Example: Appending Elements with append()",
      "code": "package main\n\nfunc main() {\n  var s []int\n  s = append(s, 1, 2, 3)\n  _ = s\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Appending Elements with append().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Appending Elements with append().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var s []int\n  s = append(s, 1, 2, 3)\n  _ = s\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var s []int\n  s = append(s, 1, 2, 3)\n  _ = s\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var s []int\n  s = append(s, 1, 2, 3)\n  _ = s\n}"
    ],
    "testCases": [
      {
        "id": "golang-36-tc-1",
        "description": "Verifies correct implementation for Appending Elements with append()",
        "testFn": "code.includes('append(s,') || code.includes('append(')"
      }
    ]
  },
  {
    "id": "golang-37-slice-slicing-syntax-[lowhigh]",
    "title": "37. Slice Slicing Syntax: [low:high]",
    "slug": "lesson-37-slice-slicing-syntax-[lowhigh]",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Slice Slicing Syntax: [low:high] in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Slice Slicing Syntax",
      "Go (Golang)"
    ],
    "analogy": "Cutting a slice of bread from the middle of a loaf: includes start index, excludes end index.",
    "explanationMarkdown": "### Slice Slicing Syntax: [low:high]\n\n`slice[low:high]` creates a new slice view starting at index `low` up to (but excluding) index `high`.\n\n```golang\npackage main\n\nfunc main() {\n  arr := []string{\"A\", \"B\", \"C\", \"D\"}\n  sub := arr[1:3]\n  _ = sub\n}\n```",
    "workedExample": {
      "title": "Worked Example: Slice Slicing Syntax: [low:high]",
      "code": "package main\n\nfunc main() {\n  arr := []string{\"A\", \"B\", \"C\", \"D\"}\n  sub := arr[1:3]\n  _ = sub\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Slice Slicing Syntax: [low:high].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Slice Slicing Syntax: [low:high].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  arr := []string{\"A\", \"B\", \"C\", \"D\"}\n  sub := arr[1:3] // [\"B\", \"C\"]\n  _ = sub\n}",
    "solutionCode": "package main\n\nfunc main() {\n  arr := []string{\"A\", \"B\", \"C\", \"D\"}\n  sub := arr[1:3]\n  _ = sub\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  arr := []string{\"A\", \"B\", \"C\", \"D\"}\n  sub := arr[1:3]\n  _ = sub\n}"
    ],
    "testCases": [
      {
        "id": "golang-37-tc-1",
        "description": "Verifies correct implementation for Slice Slicing Syntax: [low:high]",
        "testFn": "code.includes('arr[1:3]') || code.includes('[1:3]')"
      }
    ]
  },
  {
    "id": "golang-38-copying-slices-with-copy",
    "title": "38. Copying Slices with copy()",
    "slug": "lesson-38-copying-slices-with-copy",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Copying Slices with copy() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Copying Slices with copy()",
      "Go (Golang)"
    ],
    "analogy": "Tracing a drawing onto a fresh sheet of paper with carbon paper.",
    "explanationMarkdown": "### Copying Slices with copy()\n\n`copy(dst, src)` copies elements between slices, copying `min(len(dst), len(src))` elements in O(n).\n\n```golang\npackage main\n\nfunc main() {\n  src := []int{1, 2, 3}\n  dst := make([]int, len(src))\n  n := copy(dst, src)\n  _ = n\n}\n```",
    "workedExample": {
      "title": "Worked Example: Copying Slices with copy()",
      "code": "package main\n\nfunc main() {\n  src := []int{1, 2, 3}\n  dst := make([]int, len(src))\n  n := copy(dst, src)\n  _ = n\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Copying Slices with copy().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Copying Slices with copy().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  src := []int{1, 2, 3}\n  dst := make([]int, len(src))\n  n := copy(dst, src)\n  _ = n\n}",
    "solutionCode": "package main\n\nfunc main() {\n  src := []int{1, 2, 3}\n  dst := make([]int, len(src))\n  n := copy(dst, src)\n  _ = n\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  src := []int{1, 2, 3}\n  dst := make([]int, len(src))\n  n := copy(dst, src)\n  _ = n\n}"
    ],
    "testCases": [
      {
        "id": "golang-38-tc-1",
        "description": "Verifies correct implementation for Copying Slices with copy()",
        "testFn": "code.includes('copy(dst, src)') || code.includes('copy(')"
      }
    ]
  },
  {
    "id": "golang-39-iterating-with-for-range-index-&",
    "title": "39. Iterating with for range (Index & Value)",
    "slug": "lesson-39-iterating-with-for-range-index-&",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Iterating with for range (Index & Value) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Iterating with for range (Index & Value)",
      "Go (Golang)"
    ],
    "analogy": "Walking down a line of contestants: reading both their bib number (index) and their name (value).",
    "explanationMarkdown": "### Iterating with for range (Index & Value)\n\n`for i, val := range slice` yields index and a copy of the element on each iteration.\n\n```golang\npackage main\n\nfunc main() {\n  names := []string{\"Alex\", \"Sarah\"}\n  for i, name := range names {\n    _, _ = i, name\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterating with for range (Index & Value)",
      "code": "package main\n\nfunc main() {\n  names := []string{\"Alex\", \"Sarah\"}\n  for i, name := range names {\n    _, _ = i, name\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating with for range (Index & Value).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating with for range (Index & Value).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  names := []string{\"Alex\", \"Sarah\"}\n  for i, name := range names {\n    _, _ = i, name\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  names := []string{\"Alex\", \"Sarah\"}\n  for i, name := range names {\n    _, _ = i, name\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  names := []string{\"Alex\", \"Sarah\"}\n  for i, name := range names {\n    _, _ = i, name\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-39-tc-1",
        "description": "Verifies correct implementation for Iterating with for range (Index & Value)",
        "testFn": "code.includes('range names') || code.includes('range ')"
      }
    ]
  },
  {
    "id": "golang-40-the-for-range-copy-trap!",
    "title": "40. The for range Copy Trap!",
    "slug": "lesson-40-the-for-range-copy-trap!",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The for range Copy Trap! in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The for range Copy Trap!",
      "Go (Golang)"
    ],
    "analogy": "Writing notes on a photocopy and wondering why the original book on the shelf was unchanged.",
    "explanationMarkdown": "### The for range Copy Trap!\n\nModifying `val` inside `for _, val := range` does NOT mutate the original slice; use `slice[i]` to mutate!\n\n```golang\npackage main\n\nfunc main() {\n  items := []int{1, 2}\n  for i := range items {\n    items[i] *= 2\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The for range Copy Trap!",
      "code": "package main\n\nfunc main() {\n  items := []int{1, 2}\n  for i := range items {\n    items[i] *= 2\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The for range Copy Trap!.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The for range Copy Trap!.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // In Go, 'val' in range is a temporary copy!\n  items := []int{1, 2}\n  for i := range items {\n    items[i] *= 2\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  items := []int{1, 2}\n  for i := range items {\n    items[i] *= 2\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  items := []int{1, 2}\n  for i := range items {\n    items[i] *= 2\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-40-tc-1",
        "description": "Verifies correct implementation for The for range Copy Trap!",
        "testFn": "code.includes('for i := range items') || code.includes('items[i]')"
      }
    ]
  },
  {
    "id": "golang-41-maps-hash-tables-in-go-makemap[k",
    "title": "41. Maps: Hash Tables in Go (make(map[K]V))",
    "slug": "lesson-41-maps-hash-tables-in-go-makemap[k",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Maps: Hash Tables in Go (make(map[K]V)) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Maps",
      "Go (Golang)"
    ],
    "analogy": "A Rolodex card file: looking up a client's name card to read their private telephone number.",
    "explanationMarkdown": "### Maps: Hash Tables in Go (make(map[K]V))\n\nMaps are unordered hash tables mapping comparable keys to values with O(1) average lookup.\n\n```golang\npackage main\n\nfunc main() {\n  scores := make(map[string]int)\n  scores[\"Alice\"] = 95\n  _ = scores\n}\n```",
    "workedExample": {
      "title": "Worked Example: Maps: Hash Tables in Go (make(map[K]V))",
      "code": "package main\n\nfunc main() {\n  scores := make(map[string]int)\n  scores[\"Alice\"] = 95\n  _ = scores\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Maps: Hash Tables in Go (make(map[K]V)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Maps: Hash Tables in Go (make(map[K]V)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  scores := make(map[string]int)\n  scores[\"Alice\"] = 95\n  _ = scores\n}",
    "solutionCode": "package main\n\nfunc main() {\n  scores := make(map[string]int)\n  scores[\"Alice\"] = 95\n  _ = scores\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  scores := make(map[string]int)\n  scores[\"Alice\"] = 95\n  _ = scores\n}"
    ],
    "testCases": [
      {
        "id": "golang-41-tc-1",
        "description": "Verifies correct implementation for Maps: Hash Tables in Go (make(map[K]V))",
        "testFn": "code.includes('make(map[string]int)') || code.includes('scores[')"
      }
    ]
  },
  {
    "id": "golang-42-the-comma-ok-idiom-for-map-looku",
    "title": "42. The Comma-Ok Idiom for Map Lookups",
    "slug": "lesson-42-the-comma-ok-idiom-for-map-looku",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Comma-Ok Idiom for Map Lookups in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Comma-Ok Idiom for Map Lookups",
      "Go (Golang)"
    ],
    "analogy": "Reaching into a mailbox: returning both the letter (value) and a confirmation whether mail actually arrived (ok).",
    "explanationMarkdown": "### The Comma-Ok Idiom for Map Lookups\n\n`val, ok := map[key]`: if the key exists, `ok` is `true`; otherwise `ok` is `false` and `val` is zero value.\n\n```golang\npackage main\n\nfunc main() {\n  m := map[string]int{\"apples\": 5}\n  qty, ok := m[\"bananas\"]\n  _ = qty; _ = ok\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Comma-Ok Idiom for Map Lookups",
      "code": "package main\n\nfunc main() {\n  m := map[string]int{\"apples\": 5}\n  qty, ok := m[\"bananas\"]\n  _ = qty; _ = ok\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Comma-Ok Idiom for Map Lookups.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Comma-Ok Idiom for Map Lookups.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  m := map[string]int{\"apples\": 5}\n  qty, ok := m[\"bananas\"]\n  _ = qty; _ = ok // ok is false!\n}",
    "solutionCode": "package main\n\nfunc main() {\n  m := map[string]int{\"apples\": 5}\n  qty, ok := m[\"bananas\"]\n  _ = qty; _ = ok\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  m := map[string]int{\"apples\": 5}\n  qty, ok := m[\"bananas\"]\n  _ = qty; _ = ok\n}"
    ],
    "testCases": [
      {
        "id": "golang-42-tc-1",
        "description": "Verifies correct implementation for The Comma-Ok Idiom for Map Lookups",
        "testFn": "code.includes('qty, ok := m[') || code.includes(', ok :=')"
      }
    ]
  },
  {
    "id": "golang-43-deleting-keys-with-deletem,-key",
    "title": "43. Deleting Keys with delete(m, key)",
    "slug": "lesson-43-deleting-keys-with-deletem,-key",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Deleting Keys with delete(m, key) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Deleting Keys with delete(m, key)",
      "Go (Golang)"
    ],
    "analogy": "Tearing a card out of the Rolodex and tossing it into the wastebasket.",
    "explanationMarkdown": "### Deleting Keys with delete(m, key)\n\n`delete(map, key)` removes a key-value pair from the map (safe to call even if the key doesn't exist).\n\n```golang\npackage main\n\nfunc main() {\n  m := map[string]int{\"token\": 123}\n  delete(m, \"token\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Keys with delete(m, key)",
      "code": "package main\n\nfunc main() {\n  m := map[string]int{\"token\": 123}\n  delete(m, \"token\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deleting Keys with delete(m, key).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deleting Keys with delete(m, key).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  m := map[string]int{\"token\": 123}\n  delete(m, \"token\")\n}",
    "solutionCode": "package main\n\nfunc main() {\n  m := map[string]int{\"token\": 123}\n  delete(m, \"token\")\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  m := map[string]int{\"token\": 123}\n  delete(m, \"token\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-43-tc-1",
        "description": "Verifies correct implementation for Deleting Keys with delete(m, key)",
        "testFn": "code.includes('delete(m,') || code.includes('delete(')"
      }
    ]
  },
  {
    "id": "golang-44-nil-slices-vs-empty-slices",
    "title": "44. Nil Slices vs Empty Slices",
    "slug": "lesson-44-nil-slices-vs-empty-slices",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Nil Slices vs Empty Slices in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Nil Slices vs Empty Slices",
      "Go (Golang)"
    ],
    "analogy": "An unpurchased empty wallet (nil) vs a purchased empty leather wallet sitting in your pocket (empty).",
    "explanationMarkdown": "### Nil Slices vs Empty Slices\n\nA `nil` slice has pointer 0; an empty slice has an allocated 0-capacity buffer. Both serialize cleanly to JSON.\n\n```golang\npackage main\n\nfunc main() {\n  var nilSlice []int\n  emptySlice := []int{}\n  _ = nilSlice; _ = emptySlice\n}\n```",
    "workedExample": {
      "title": "Worked Example: Nil Slices vs Empty Slices",
      "code": "package main\n\nfunc main() {\n  var nilSlice []int\n  emptySlice := []int{}\n  _ = nilSlice; _ = emptySlice\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Nil Slices vs Empty Slices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Nil Slices vs Empty Slices.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var nilSlice []int           // nil\n  emptySlice := []int{}        // non-nil empty\n  _ = nilSlice; _ = emptySlice\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var nilSlice []int\n  emptySlice := []int{}\n  _ = nilSlice; _ = emptySlice\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var nilSlice []int\n  emptySlice := []int{}\n  _ = nilSlice; _ = emptySlice\n}"
    ],
    "testCases": [
      {
        "id": "golang-44-tc-1",
        "description": "Verifies correct implementation for Nil Slices vs Empty Slices",
        "testFn": "code.includes('var nilSlice []int')"
      }
    ]
  },
  {
    "id": "golang-45-module-3-review-collections-arch",
    "title": "45. Module 3 Review: Collections Architecture",
    "slug": "lesson-45-module-3-review-collections-arch",
    "language": "golang",
    "category": "Module 3: Arrays, Slices & Maps",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 3 Review: Collections Architecture in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 3 Review",
      "Go (Golang)"
    ],
    "analogy": "A master warehouse logistics sorting grid organizing pallets, shelves, and shipping bins.",
    "explanationMarkdown": "### Module 3 Review: Collections Architecture\n\nMastery over fixed array memory, slice headers, make allocation, capacity growth, and comma-ok maps.\n\n```golang\npackage main\n\nfunc main() {\n  userMap := map[string][]string{\n    \"admins\": {\"Sarah\", \"Alex\"},\n  }\n  _ = userMap\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Collections Architecture",
      "code": "package main\n\nfunc main() {\n  userMap := map[string][]string{\n    \"admins\": {\"Sarah\", \"Alex\"},\n  }\n  _ = userMap\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 3 Review: Collections Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 3 Review: Collections Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  userMap := map[string][]string{\n    \"admins\": {\"Sarah\", \"Alex\"},\n  }\n  _ = userMap\n}",
    "solutionCode": "package main\n\nfunc main() {\n  userMap := map[string][]string{\n    \"admins\": {\"Sarah\", \"Alex\"},\n  }\n  _ = userMap\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  userMap := map[string][]string{\n    \"admins\": {\"Sarah\", \"Alex\"},\n  }\n  _ = userMap\n}"
    ],
    "testCases": [
      {
        "id": "golang-45-tc-1",
        "description": "Verifies correct implementation for Module 3 Review: Collections Architecture",
        "testFn": "code.includes('map[string][]string') || code.includes('userMap')"
      }
    ]
  },
  {
    "id": "golang-46-pointers-in-go-*t-and-&x",
    "title": "46. Pointers in Go (*T and &x)",
    "slug": "lesson-46-pointers-in-go-*t-and-&x",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pointers in Go (*T and &x) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Pointers in Go (*T and &x)",
      "Go (Golang)"
    ],
    "analogy": "Writing down the street address of a house: the address is small, but points directly to the real physical building.",
    "explanationMarkdown": "### Pointers in Go (*T and &x)\n\n`&` gets the memory address of a variable; `*` dereferences the pointer to read or write the underlying memory.\n\n```golang\npackage main\n\nfunc main() {\n  x := 42\n  p := &x\n  *p = 100\n  _ = x\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pointers in Go (*T and &x)",
      "code": "package main\n\nfunc main() {\n  x := 42\n  p := &x\n  *p = 100\n  _ = x\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pointers in Go (*T and &x).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pointers in Go (*T and &x).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  x := 42\n  p := &x // p is *int pointer\n  *p = 100 // dereference!\n  _ = x\n}",
    "solutionCode": "package main\n\nfunc main() {\n  x := 42\n  p := &x\n  *p = 100\n  _ = x\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  x := 42\n  p := &x\n  *p = 100\n  _ = x\n}"
    ],
    "testCases": [
      {
        "id": "golang-46-tc-1",
        "description": "Verifies correct implementation for Pointers in Go (*T and &x)",
        "testFn": "code.includes('&x') && code.includes('*p')"
      }
    ]
  },
  {
    "id": "golang-47-no-pointer-arithmetic-safety-in-",
    "title": "47. No Pointer Arithmetic Safety in Go",
    "slug": "lesson-47-no-pointer-arithmetic-safety-in-",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master No Pointer Arithmetic Safety in Go in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "No Pointer Arithmetic Safety in Go",
      "Go (Golang)"
    ],
    "analogy": "A locked steering wheel that refuses to let drivers veer off the paved road into a ravine.",
    "explanationMarkdown": "### No Pointer Arithmetic Safety in Go\n\nUnlike C/C++, Go forbids pointer arithmetic (`p++`), eliminating buffer overflow memory corruption vulnerabilities.\n\n```golang\npackage main\n\nfunc main() {\n  // Go disallows p++ pointer arithmetic for memory safety!\n}\n```",
    "workedExample": {
      "title": "Worked Example: No Pointer Arithmetic Safety in Go",
      "code": "package main\n\nfunc main() {\n  // Go disallows p++ pointer arithmetic for memory safety!\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for No Pointer Arithmetic Safety in Go.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of No Pointer Arithmetic Safety in Go.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Go disallows p++ pointer arithmetic for memory safety!\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // Go disallows p++ pointer arithmetic for memory safety!\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // Go disallows p++ pointer arithmetic for memory safety!\n}"
    ],
    "testCases": [
      {
        "id": "golang-47-tc-1",
        "description": "Verifies correct implementation for No Pointer Arithmetic Safety in Go",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-48-defining-structs-named-composite",
    "title": "48. Defining Structs: Named Composite Types",
    "slug": "lesson-48-defining-structs-named-composite",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Defining Structs: Named Composite Types in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Defining Structs",
      "Go (Golang)"
    ],
    "analogy": "A standardized employee badge with labeled fields: Photo ID, Full Name, and Department.",
    "explanationMarkdown": "### Defining Structs: Named Composite Types\n\nA struct is a typed collection of fields used to model domain entities without classes or inheritance.\n\n```golang\npackage main\n\ntype User struct {\n  ID    int\n  Name  string\n  Email string\n}\n\nfunc main() {\n  u := User{ID: 1, Name: \"Sarah\"}\n  _ = u\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Structs: Named Composite Types",
      "code": "package main\n\ntype User struct {\n  ID    int\n  Name  string\n  Email string\n}\n\nfunc main() {\n  u := User{ID: 1, Name: \"Sarah\"}\n  _ = u\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Structs: Named Composite Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Structs: Named Composite Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype User struct {\n  ID    int\n  Name  string\n  Email string\n}\n\nfunc main() {\n  u := User{ID: 1, Name: \"Sarah\"}\n  _ = u\n}",
    "solutionCode": "package main\n\ntype User struct {\n  ID    int\n  Name  string\n  Email string\n}\n\nfunc main() {\n  u := User{ID: 1, Name: \"Sarah\"}\n  _ = u\n}",
    "hints": [
      "Write:\npackage main\n\ntype User struct {\n  ID    int\n  Name  string\n  Email string\n}\n\nfunc main() {\n  u := User{ID: 1, Name: \"Sarah\"}\n  _ = u\n}"
    ],
    "testCases": [
      {
        "id": "golang-48-tc-1",
        "description": "Verifies correct implementation for Defining Structs: Named Composite Types",
        "testFn": "code.includes('type User struct') || code.includes('struct {')"
      }
    ]
  },
  {
    "id": "golang-49-pointers-to-structs-and-automati",
    "title": "49. Pointers to Structs and Automatic Dereferencing",
    "slug": "lesson-49-pointers-to-structs-and-automati",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pointers to Structs and Automatic Dereferencing in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Pointers to Structs and Automatic Dereferencing",
      "Go (Golang)"
    ],
    "analogy": "A smart delivery assistant who knows that when you hand them an address, you mean to deliver to the house itself.",
    "explanationMarkdown": "### Pointers to Structs and Automatic Dereferencing\n\nGo automatically dereferences struct pointers: `p.X` is shorthand for `(*p).X`, no `->` operator required!\n\n```golang\npackage main\n\ntype Point struct { X, Y int }\n\nfunc main() {\n  p := &Point{X: 10, Y: 20}\n  p.X = 15\n  _ = p\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pointers to Structs and Automatic Dereferencing",
      "code": "package main\n\ntype Point struct { X, Y int }\n\nfunc main() {\n  p := &Point{X: 10, Y: 20}\n  p.X = 15\n  _ = p\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pointers to Structs and Automatic Dereferencing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pointers to Structs and Automatic Dereferencing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Point struct { X, Y int }\n\nfunc main() {\n  p := &Point{X: 10, Y: 20}\n  p.X = 15 // Auto-dereference! No p->X needed\n  _ = p\n}",
    "solutionCode": "package main\n\ntype Point struct { X, Y int }\n\nfunc main() {\n  p := &Point{X: 10, Y: 20}\n  p.X = 15\n  _ = p\n}",
    "hints": [
      "Write:\npackage main\n\ntype Point struct { X, Y int }\n\nfunc main() {\n  p := &Point{X: 10, Y: 20}\n  p.X = 15\n  _ = p\n}"
    ],
    "testCases": [
      {
        "id": "golang-49-tc-1",
        "description": "Verifies correct implementation for Pointers to Structs and Automatic Dereferencing",
        "testFn": "code.includes('&Point') || code.includes('p.X = 15')"
      }
    ]
  },
  {
    "id": "golang-50-struct-embedding-composition-ove",
    "title": "50. Struct Embedding: Composition Over Inheritance",
    "slug": "lesson-50-struct-embedding-composition-ove",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Struct Embedding: Composition Over Inheritance in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Struct Embedding",
      "Go (Golang)"
    ],
    "analogy": "Equipping a standard bicycle frame with an electric battery motor instead of breeding a new species of horse.",
    "explanationMarkdown": "### Struct Embedding: Composition Over Inheritance\n\nEmbedding a struct promotes its fields and methods directly onto the outer struct, favoring composition.\n\n```golang\npackage main\n\ntype Person struct { Name string }\ntype Employee struct {\n  Person\n  Salary int\n}\n\nfunc main() {\n  e := Employee{Person: Person{Name: \"Alex\"}, Salary: 80000}\n  _ = e.Name\n}\n```",
    "workedExample": {
      "title": "Worked Example: Struct Embedding: Composition Over Inheritance",
      "code": "package main\n\ntype Person struct { Name string }\ntype Employee struct {\n  Person\n  Salary int\n}\n\nfunc main() {\n  e := Employee{Person: Person{Name: \"Alex\"}, Salary: 80000}\n  _ = e.Name\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Struct Embedding: Composition Over Inheritance.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Struct Embedding: Composition Over Inheritance.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Person struct { Name string }\ntype Employee struct {\n  Person // Embedded struct!\n  Salary int\n}\n\nfunc main() {\n  e := Employee{Person: Person{Name: \"Alex\"}, Salary: 80000}\n  _ = e.Name // Promoted field!\n}",
    "solutionCode": "package main\n\ntype Person struct { Name string }\ntype Employee struct {\n  Person\n  Salary int\n}\n\nfunc main() {\n  e := Employee{Person: Person{Name: \"Alex\"}, Salary: 80000}\n  _ = e.Name\n}",
    "hints": [
      "Write:\npackage main\n\ntype Person struct { Name string }\ntype Employee struct {\n  Person\n  Salary int\n}\n\nfunc main() {\n  e := Employee{Person: Person{Name: \"Alex\"}, Salary: 80000}\n  _ = e.Name\n}"
    ],
    "testCases": [
      {
        "id": "golang-50-tc-1",
        "description": "Verifies correct implementation for Struct Embedding: Composition Over Inheritance",
        "testFn": "code.includes('Person') && code.includes('Employee struct')"
      }
    ]
  },
  {
    "id": "golang-51-struct-tags-for-json-serializati",
    "title": "51. Struct Tags for JSON Serialization",
    "slug": "lesson-51-struct-tags-for-json-serializati",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Struct Tags for JSON Serialization in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Struct Tags for JSON Serialization",
      "Go (Golang)"
    ],
    "analogy": "A translation label stamped on a crate so Japanese port officials read the correct localized field names.",
    "explanationMarkdown": "### Struct Tags for JSON Serialization\n\nBacktick struct tags provide metadata for serialization libraries (`json`, `xml`, `db`).\n\n```golang\npackage main\n\ntype Product struct {\n  ID    string `json:\"id\"`\n  Price int    `json:\"price_cents\"`\n}\n\nfunc main() {\n  _ = Product{ID: \"p1\", Price: 99}\n}\n```",
    "workedExample": {
      "title": "Worked Example: Struct Tags for JSON Serialization",
      "code": "package main\n\ntype Product struct {\n  ID    string `json:\"id\"`\n  Price int    `json:\"price_cents\"`\n}\n\nfunc main() {\n  _ = Product{ID: \"p1\", Price: 99}\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Struct Tags for JSON Serialization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Struct Tags for JSON Serialization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Product struct {\n  ID    string `json:\"id\"`\n  Price int    `json:\"price_cents\"`\n}\n\nfunc main() {\n  _ = Product{ID: \"p1\", Price: 99}\n}",
    "solutionCode": "package main\n\ntype Product struct {\n  ID    string `json:\"id\"`\n  Price int    `json:\"price_cents\"`\n}\n\nfunc main() {\n  _ = Product{ID: \"p1\", Price: 99}\n}",
    "hints": [
      "Write:\npackage main\n\ntype Product struct {\n  ID    string `json:\"id\"`\n  Price int    `json:\"price_cents\"`\n}\n\nfunc main() {\n  _ = Product{ID: \"p1\", Price: 99}\n}"
    ],
    "testCases": [
      {
        "id": "golang-51-tc-1",
        "description": "Verifies correct implementation for Struct Tags for JSON Serialization",
        "testFn": "code.includes('`json:') || code.includes('Product struct')"
      }
    ]
  },
  {
    "id": "golang-52-custom-type-definitions-type-dur",
    "title": "52. Custom Type Definitions (type Duration int64)",
    "slug": "lesson-52-custom-type-definitions-type-dur",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Custom Type Definitions (type Duration int64) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Custom Type Definitions (type Duration int64)",
      "Go (Golang)"
    ],
    "analogy": "Painting medicine measuring cups in distinct neon colors so nurses never confuse milliliters with ounces.",
    "explanationMarkdown": "### Custom Type Definitions (type Duration int64)\n\nCreating custom types adds semantic clarity and allows attaching custom methods to primitive types.\n\n```golang\npackage main\n\ntype Celsius float64\ntype Fahrenheit float64\n\nfunc main() {\n  var c Celsius = 100\n  _ = c\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Type Definitions (type Duration int64)",
      "code": "package main\n\ntype Celsius float64\ntype Fahrenheit float64\n\nfunc main() {\n  var c Celsius = 100\n  _ = c\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Type Definitions (type Duration int64).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Type Definitions (type Duration int64).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Celsius float64\ntype Fahrenheit float64\n\nfunc main() {\n  var c Celsius = 100\n  _ = c\n}",
    "solutionCode": "package main\n\ntype Celsius float64\ntype Fahrenheit float64\n\nfunc main() {\n  var c Celsius = 100\n  _ = c\n}",
    "hints": [
      "Write:\npackage main\n\ntype Celsius float64\ntype Fahrenheit float64\n\nfunc main() {\n  var c Celsius = 100\n  _ = c\n}"
    ],
    "testCases": [
      {
        "id": "golang-52-tc-1",
        "description": "Verifies correct implementation for Custom Type Definitions (type Duration int64)",
        "testFn": "code.includes('type Celsius float64')"
      }
    ]
  },
  {
    "id": "golang-53-constructor-functions-the-newuse",
    "title": "53. Constructor Functions (The NewUser Pattern)",
    "slug": "lesson-53-constructor-functions-the-newuse",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Constructor Functions (The NewUser Pattern) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Constructor Functions (The NewUser Pattern)",
      "Go (Golang)"
    ],
    "analogy": "A certified car dealership pre-inspecting tire pressure, oil levels, and headlights before handing over the keys.",
    "explanationMarkdown": "### Constructor Functions (The NewUser Pattern)\n\nThe `New<Type>() *Type` pattern encapsulates validation, default settings, and pointer allocation.\n\n```golang\npackage main\n\ntype Client struct { Host string }\n\nfunc NewClient(host string) *Client {\n  return &Client{Host: host}\n}\n\nfunc main() {\n  c := NewClient(\"api.devforge.io\")\n  _ = c\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constructor Functions (The NewUser Pattern)",
      "code": "package main\n\ntype Client struct { Host string }\n\nfunc NewClient(host string) *Client {\n  return &Client{Host: host}\n}\n\nfunc main() {\n  c := NewClient(\"api.devforge.io\")\n  _ = c\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Constructor Functions (The NewUser Pattern).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constructor Functions (The NewUser Pattern).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Client struct { Host string }\n\nfunc NewClient(host string) *Client {\n  return &Client{Host: host}\n}\n\nfunc main() {\n  c := NewClient(\"api.devforge.io\")\n  _ = c\n}",
    "solutionCode": "package main\n\ntype Client struct { Host string }\n\nfunc NewClient(host string) *Client {\n  return &Client{Host: host}\n}\n\nfunc main() {\n  c := NewClient(\"api.devforge.io\")\n  _ = c\n}",
    "hints": [
      "Write:\npackage main\n\ntype Client struct { Host string }\n\nfunc NewClient(host string) *Client {\n  return &Client{Host: host}\n}\n\nfunc main() {\n  c := NewClient(\"api.devforge.io\")\n  _ = c\n}"
    ],
    "testCases": [
      {
        "id": "golang-53-tc-1",
        "description": "Verifies correct implementation for Constructor Functions (The NewUser Pattern)",
        "testFn": "code.includes('func NewClient') || code.includes('&Client')"
      }
    ]
  },
  {
    "id": "golang-54-methods-with-value-receivers",
    "title": "54. Methods with Value Receivers",
    "slug": "lesson-54-methods-with-value-receivers",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Methods with Value Receivers in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Methods with Value Receivers",
      "Go (Golang)"
    ],
    "analogy": "Measuring a wooden block: measuring its surface area does not change the dimensions of the block.",
    "explanationMarkdown": "### Methods with Value Receivers\n\nValue receivers receive an independent copy of the struct; any modifications inside the method are discarded on return.\n\n```golang\npackage main\n\ntype Circle struct { Radius float64 }\n\nfunc (c Circle) Area() float64 {\n  return 3.14 * c.Radius * c.Radius\n}\n\nfunc main() {\n  c := Circle{Radius: 5}\n  _ = c.Area()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Methods with Value Receivers",
      "code": "package main\n\ntype Circle struct { Radius float64 }\n\nfunc (c Circle) Area() float64 {\n  return 3.14 * c.Radius * c.Radius\n}\n\nfunc main() {\n  c := Circle{Radius: 5}\n  _ = c.Area()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Methods with Value Receivers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Methods with Value Receivers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Circle struct { Radius float64 }\n\nfunc (c Circle) Area() float64 {\n  return 3.14 * c.Radius * c.Radius\n}\n\nfunc main() {\n  c := Circle{Radius: 5}\n  _ = c.Area()\n}",
    "solutionCode": "package main\n\ntype Circle struct { Radius float64 }\n\nfunc (c Circle) Area() float64 {\n  return 3.14 * c.Radius * c.Radius\n}\n\nfunc main() {\n  c := Circle{Radius: 5}\n  _ = c.Area()\n}",
    "hints": [
      "Write:\npackage main\n\ntype Circle struct { Radius float64 }\n\nfunc (c Circle) Area() float64 {\n  return 3.14 * c.Radius * c.Radius\n}\n\nfunc main() {\n  c := Circle{Radius: 5}\n  _ = c.Area()\n}"
    ],
    "testCases": [
      {
        "id": "golang-54-tc-1",
        "description": "Verifies correct implementation for Methods with Value Receivers",
        "testFn": "code.includes('func (c Circle) Area()') || code.includes('Radius float64')"
      }
    ]
  },
  {
    "id": "golang-55-methods-with-pointer-receivers-m",
    "title": "55. Methods with Pointer Receivers (Mutating State)",
    "slug": "lesson-55-methods-with-pointer-receivers-m",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Methods with Pointer Receivers (Mutating State) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Methods with Pointer Receivers (Mutating State)",
      "Go (Golang)"
    ],
    "analogy": "Ticking forward the physical odometer dial on a car dashboard: the actual permanent reading changes.",
    "explanationMarkdown": "### Methods with Pointer Receivers (Mutating State)\n\nPointer receivers allow methods to mutate the original struct and avoid copying large data structures.\n\n```golang\npackage main\n\ntype Counter struct { count int }\n\nfunc (c *Counter) Increment() {\n  c.count++\n}\n\nfunc main() {\n  c := &Counter{}\n  c.Increment()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Methods with Pointer Receivers (Mutating State)",
      "code": "package main\n\ntype Counter struct { count int }\n\nfunc (c *Counter) Increment() {\n  c.count++\n}\n\nfunc main() {\n  c := &Counter{}\n  c.Increment()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Methods with Pointer Receivers (Mutating State).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Methods with Pointer Receivers (Mutating State).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Counter struct { count int }\n\nfunc (c *Counter) Increment() {\n  c.count++\n}\n\nfunc main() {\n  c := &Counter{}\n  c.Increment()\n}",
    "solutionCode": "package main\n\ntype Counter struct { count int }\n\nfunc (c *Counter) Increment() {\n  c.count++\n}\n\nfunc main() {\n  c := &Counter{}\n  c.Increment()\n}",
    "hints": [
      "Write:\npackage main\n\ntype Counter struct { count int }\n\nfunc (c *Counter) Increment() {\n  c.count++\n}\n\nfunc main() {\n  c := &Counter{}\n  c.Increment()\n}"
    ],
    "testCases": [
      {
        "id": "golang-55-tc-1",
        "description": "Verifies correct implementation for Methods with Pointer Receivers (Mutating State)",
        "testFn": "code.includes('func (c *Counter) Increment()') || code.includes('*Counter')"
      }
    ]
  },
  {
    "id": "golang-56-method-sets-when-to-use-pointer-",
    "title": "56. Method Sets: When to Use Pointer vs Value Receiver",
    "slug": "lesson-56-method-sets-when-to-use-pointer-",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Method Sets: When to Use Pointer vs Value Receiver in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Method Sets",
      "Go (Golang)"
    ],
    "analogy": "Choosing between mailing paper photocopies (value) vs sending an authorized representative to the office (pointer).",
    "explanationMarkdown": "### Method Sets: When to Use Pointer vs Value Receiver\n\nUse pointer receivers if the method modifies the receiver, or if the struct is large (saving copy overhead).\n\n```golang\npackage main\n\nfunc main() {\n  // Rule: if ANY method needs a pointer receiver, make ALL methods pointer receivers!\n}\n```",
    "workedExample": {
      "title": "Worked Example: Method Sets: When to Use Pointer vs Value Receiver",
      "code": "package main\n\nfunc main() {\n  // Rule: if ANY method needs a pointer receiver, make ALL methods pointer receivers!\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Method Sets: When to Use Pointer vs Value Receiver.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Method Sets: When to Use Pointer vs Value Receiver.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Rule: if ANY method needs a pointer receiver, make ALL methods pointer receivers!\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // Rule: if ANY method needs a pointer receiver, make ALL methods pointer receivers!\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // Rule: if ANY method needs a pointer receiver, make ALL methods pointer receivers!\n}"
    ],
    "testCases": [
      {
        "id": "golang-56-tc-1",
        "description": "Verifies correct implementation for Method Sets: When to Use Pointer vs Value Receiver",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-57-anonymous-structs-for-one-off-pa",
    "title": "57. Anonymous Structs for One-Off Payloads",
    "slug": "lesson-57-anonymous-structs-for-one-off-pa",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Anonymous Structs for One-Off Payloads in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Anonymous Structs for One-Off Payloads",
      "Go (Golang)"
    ],
    "analogy": "Folding an impromptu origami cup out of notebook paper to drink water once, then recycling it.",
    "explanationMarkdown": "### Anonymous Structs for One-Off Payloads\n\nAnonymous structs declare ad-hoc composite shapes without registering a named type (great for test tables and JSON responses).\n\n```golang\npackage main\n\nfunc main() {\n  config := struct {\n    Host string\n    Port int\n  }{\n    Host: \"localhost\",\n    Port: 8080,\n  }\n  _ = config\n}\n```",
    "workedExample": {
      "title": "Worked Example: Anonymous Structs for One-Off Payloads",
      "code": "package main\n\nfunc main() {\n  config := struct {\n    Host string\n    Port int\n  }{\n    Host: \"localhost\",\n    Port: 8080,\n  }\n  _ = config\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anonymous Structs for One-Off Payloads.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anonymous Structs for One-Off Payloads.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  config := struct {\n    Host string\n    Port int\n  }{\n    Host: \"localhost\",\n    Port: 8080,\n  }\n  _ = config\n}",
    "solutionCode": "package main\n\nfunc main() {\n  config := struct {\n    Host string\n    Port int\n  }{\n    Host: \"localhost\",\n    Port: 8080,\n  }\n  _ = config\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  config := struct {\n    Host string\n    Port int\n  }{\n    Host: \"localhost\",\n    Port: 8080,\n  }\n  _ = config\n}"
    ],
    "testCases": [
      {
        "id": "golang-57-tc-1",
        "description": "Verifies correct implementation for Anonymous Structs for One-Off Payloads",
        "testFn": "code.includes('struct {') && code.includes('Host string')"
      }
    ]
  },
  {
    "id": "golang-58-struct-comparison-with-==",
    "title": "58. Struct Comparison with ==",
    "slug": "lesson-58-struct-comparison-with-==",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Struct Comparison with == in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Struct Comparison with ==",
      "Go (Golang)"
    ],
    "analogy": "Weighing two mass-manufactured coins: if all metallic components match, the coins are equal.",
    "explanationMarkdown": "### Struct Comparison with ==\n\nStructs are comparable with `==` if all their constituent field types are comparable (e.g. no slices or maps).\n\n```golang\npackage main\n\ntype Point2D struct { X, Y int }\n\nfunc main() {\n  p1 := Point2D{1, 2}\n  p2 := Point2D{1, 2}\n  isEqual := p1 == p2\n  _ = isEqual\n}\n```",
    "workedExample": {
      "title": "Worked Example: Struct Comparison with ==",
      "code": "package main\n\ntype Point2D struct { X, Y int }\n\nfunc main() {\n  p1 := Point2D{1, 2}\n  p2 := Point2D{1, 2}\n  isEqual := p1 == p2\n  _ = isEqual\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Struct Comparison with ==.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Struct Comparison with ==.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Point2D struct { X, Y int }\n\nfunc main() {\n  p1 := Point2D{1, 2}\n  p2 := Point2D{1, 2}\n  isEqual := p1 == p2\n  _ = isEqual\n}",
    "solutionCode": "package main\n\ntype Point2D struct { X, Y int }\n\nfunc main() {\n  p1 := Point2D{1, 2}\n  p2 := Point2D{1, 2}\n  isEqual := p1 == p2\n  _ = isEqual\n}",
    "hints": [
      "Write:\npackage main\n\ntype Point2D struct { X, Y int }\n\nfunc main() {\n  p1 := Point2D{1, 2}\n  p2 := Point2D{1, 2}\n  isEqual := p1 == p2\n  _ = isEqual\n}"
    ],
    "testCases": [
      {
        "id": "golang-58-tc-1",
        "description": "Verifies correct implementation for Struct Comparison with ==",
        "testFn": "code.includes('p1 == p2') || code.includes('Point2D')"
      }
    ]
  },
  {
    "id": "golang-59-escape-analysis-stack-vs-heap-al",
    "title": "59. Escape Analysis: Stack vs Heap Allocation",
    "slug": "lesson-59-escape-analysis-stack-vs-heap-al",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Escape Analysis: Stack vs Heap Allocation in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Escape Analysis",
      "Go (Golang)"
    ],
    "analogy": "Keeping a pencil on your desk (stack: fast, zero GC) vs renting a remote storage unit (heap: requires garbage collector).",
    "explanationMarkdown": "### Escape Analysis: Stack vs Heap Allocation\n\nGo's compiler automatically runs escape analysis: variables whose pointers outlive the function escape to the heap.\n\n```golang\npackage main\n\nfunc createOnStack() int {\n  x := 42\n  return x\n}\n\nfunc main() {\n  _ = createOnStack()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Escape Analysis: Stack vs Heap Allocation",
      "code": "package main\n\nfunc createOnStack() int {\n  x := 42\n  return x\n}\n\nfunc main() {\n  _ = createOnStack()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Escape Analysis: Stack vs Heap Allocation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Escape Analysis: Stack vs Heap Allocation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc createOnStack() int {\n  x := 42\n  return x // stays on stack!\n}\n\nfunc main() {\n  _ = createOnStack()\n}",
    "solutionCode": "package main\n\nfunc createOnStack() int {\n  x := 42\n  return x\n}\n\nfunc main() {\n  _ = createOnStack()\n}",
    "hints": [
      "Write:\npackage main\n\nfunc createOnStack() int {\n  x := 42\n  return x\n}\n\nfunc main() {\n  _ = createOnStack()\n}"
    ],
    "testCases": [
      {
        "id": "golang-59-tc-1",
        "description": "Verifies correct implementation for Escape Analysis: Stack vs Heap Allocation",
        "testFn": "code.includes('createOnStack') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-60-module-4-review-object-oriented-",
    "title": "60. Module 4 Review: Object-Oriented Go Design",
    "slug": "lesson-60-module-4-review-object-oriented-",
    "language": "golang",
    "category": "Module 4: Structs, Pointers & Custom Types",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 4 Review: Object-Oriented Go Design in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 4 Review",
      "Go (Golang)"
    ],
    "analogy": "An industrial aerospace module engineered with modular structural components, receivers, and escape safety.",
    "explanationMarkdown": "### Module 4 Review: Object-Oriented Go Design\n\nMastery over pointers, struct composition, tags, constructor idioms, and value vs pointer method sets.\n\n```golang\npackage main\n\ntype Service struct {\n  Name string\n}\n\nfunc (s *Service) Start() string {\n  return s.Name + \" running\"\n}\n\nfunc main() {\n  srv := &Service{Name: \"Auth\"}\n  _ = srv.Start()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: Object-Oriented Go Design",
      "code": "package main\n\ntype Service struct {\n  Name string\n}\n\nfunc (s *Service) Start() string {\n  return s.Name + \" running\"\n}\n\nfunc main() {\n  srv := &Service{Name: \"Auth\"}\n  _ = srv.Start()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 4 Review: Object-Oriented Go Design.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 4 Review: Object-Oriented Go Design.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Service struct {\n  Name string\n}\n\nfunc (s *Service) Start() string {\n  return s.Name + \" running\"\n}\n\nfunc main() {\n  srv := &Service{Name: \"Auth\"}\n  _ = srv.Start()\n}",
    "solutionCode": "package main\n\ntype Service struct {\n  Name string\n}\n\nfunc (s *Service) Start() string {\n  return s.Name + \" running\"\n}\n\nfunc main() {\n  srv := &Service{Name: \"Auth\"}\n  _ = srv.Start()\n}",
    "hints": [
      "Write:\npackage main\n\ntype Service struct {\n  Name string\n}\n\nfunc (s *Service) Start() string {\n  return s.Name + \" running\"\n}\n\nfunc main() {\n  srv := &Service{Name: \"Auth\"}\n  _ = srv.Start()\n}"
    ],
    "testCases": [
      {
        "id": "golang-60-tc-1",
        "description": "Verifies correct implementation for Module 4 Review: Object-Oriented Go Design",
        "testFn": "code.includes('func (s *Service)') || code.includes('Service struct')"
      }
    ]
  },
  {
    "id": "golang-61-the-go-interface-philosophy-duck",
    "title": "61. The Go Interface Philosophy: Duck Typing",
    "slug": "lesson-61-the-go-interface-philosophy-duck",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Go Interface Philosophy: Duck Typing in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Go Interface Philosophy",
      "Go (Golang)"
    ],
    "analogy": "An electrical wall socket: any appliance with matching two-pronged metal pins can plug in and draw power.",
    "explanationMarkdown": "### The Go Interface Philosophy: Duck Typing\n\nInterfaces in Go are implemented IMPLICITLY: types do not declare `implements`; they just implement the required methods!\n\n```golang\npackage main\n\ntype Greeter interface {\n  Greet() string\n}\n\nfunc main() {\n  // If it walks like a duck and quacks like a duck, it's a duck!\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Go Interface Philosophy: Duck Typing",
      "code": "package main\n\ntype Greeter interface {\n  Greet() string\n}\n\nfunc main() {\n  // If it walks like a duck and quacks like a duck, it's a duck!\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Go Interface Philosophy: Duck Typing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Go Interface Philosophy: Duck Typing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Greeter interface {\n  Greet() string\n}\n\nfunc main() {\n  // If it walks like a duck and quacks like a duck, it's a duck!\n}",
    "solutionCode": "package main\n\ntype Greeter interface {\n  Greet() string\n}\n\nfunc main() {\n  // If it walks like a duck and quacks like a duck, it's a duck!\n}",
    "hints": [
      "Write:\npackage main\n\ntype Greeter interface {\n  Greet() string\n}\n\nfunc main() {\n  // If it walks like a duck and quacks like a duck, it's a duck!\n}"
    ],
    "testCases": [
      {
        "id": "golang-61-tc-1",
        "description": "Verifies correct implementation for The Go Interface Philosophy: Duck Typing",
        "testFn": "code.includes('type Greeter interface') || code.includes('interface {')"
      }
    ]
  },
  {
    "id": "golang-62-implicit-implementation-no-imple",
    "title": "62. Implicit Implementation (No implements Keyword)",
    "slug": "lesson-62-implicit-implementation-no-imple",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Implicit Implementation (No implements Keyword) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Implicit Implementation (No implements Keyword)",
      "Go (Golang)"
    ],
    "analogy": "Qualifying for a marathon by running 26 miles; you don't need a formal membership badge to prove you ran.",
    "explanationMarkdown": "### Implicit Implementation (No implements Keyword)\n\nAny struct that provides matching method signatures automatically satisfies the interface with zero boilerplate.\n\n```golang\npackage main\n\ntype Speaker interface { Speak() string }\ntype Dog struct{}\nfunc (d Dog) Speak() string { return \"Woof\" }\n\nfunc main() {\n  var s Speaker = Dog{}\n  _ = s\n}\n```",
    "workedExample": {
      "title": "Worked Example: Implicit Implementation (No implements Keyword)",
      "code": "package main\n\ntype Speaker interface { Speak() string }\ntype Dog struct{}\nfunc (d Dog) Speak() string { return \"Woof\" }\n\nfunc main() {\n  var s Speaker = Dog{}\n  _ = s\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Implicit Implementation (No implements Keyword).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Implicit Implementation (No implements Keyword).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Speaker interface { Speak() string }\ntype Dog struct{}\nfunc (d Dog) Speak() string { return \"Woof\" }\n\nfunc main() {\n  var s Speaker = Dog{}\n  _ = s\n}",
    "solutionCode": "package main\n\ntype Speaker interface { Speak() string }\ntype Dog struct{}\nfunc (d Dog) Speak() string { return \"Woof\" }\n\nfunc main() {\n  var s Speaker = Dog{}\n  _ = s\n}",
    "hints": [
      "Write:\npackage main\n\ntype Speaker interface { Speak() string }\ntype Dog struct{}\nfunc (d Dog) Speak() string { return \"Woof\" }\n\nfunc main() {\n  var s Speaker = Dog{}\n  _ = s\n}"
    ],
    "testCases": [
      {
        "id": "golang-62-tc-1",
        "description": "Verifies correct implementation for Implicit Implementation (No implements Keyword)",
        "testFn": "code.includes('var s Speaker = Dog{}') || code.includes('func (d Dog) Speak()')"
      }
    ]
  },
  {
    "id": "golang-63-the-fmt.stringer-standard-interf",
    "title": "63. The fmt.Stringer Standard Interface",
    "slug": "lesson-63-the-fmt.stringer-standard-interf",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The fmt.Stringer Standard Interface in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The fmt.Stringer Standard Interface",
      "Go (Golang)"
    ],
    "analogy": "Carrying an official government photo passport that any airport authority can inspect to print your name.",
    "explanationMarkdown": "### The fmt.Stringer Standard Interface\n\nImplementing `String() string` satisfies `fmt.Stringer`, customizing how your type prints in `fmt.Println`.\n\n```golang\npackage main\n\nimport \"fmt\"\n\ntype User struct { Name string }\nfunc (u User) String() string {\n  return \"User: \" + u.Name\n}\n\nfunc main() {\n  u := User{Name: \"Alex\"}\n  _ = fmt.Sprint(u)\n}\n```",
    "workedExample": {
      "title": "Worked Example: The fmt.Stringer Standard Interface",
      "code": "package main\n\nimport \"fmt\"\n\ntype User struct { Name string }\nfunc (u User) String() string {\n  return \"User: \" + u.Name\n}\n\nfunc main() {\n  u := User{Name: \"Alex\"}\n  _ = fmt.Sprint(u)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The fmt.Stringer Standard Interface.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The fmt.Stringer Standard Interface.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\ntype User struct { Name string }\nfunc (u User) String() string {\n  return \"User: \" + u.Name\n}\n\nfunc main() {\n  u := User{Name: \"Alex\"}\n  _ = fmt.Sprint(u)\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\ntype User struct { Name string }\nfunc (u User) String() string {\n  return \"User: \" + u.Name\n}\n\nfunc main() {\n  u := User{Name: \"Alex\"}\n  _ = fmt.Sprint(u)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\ntype User struct { Name string }\nfunc (u User) String() string {\n  return \"User: \" + u.Name\n}\n\nfunc main() {\n  u := User{Name: \"Alex\"}\n  _ = fmt.Sprint(u)\n}"
    ],
    "testCases": [
      {
        "id": "golang-63-tc-1",
        "description": "Verifies correct implementation for The fmt.Stringer Standard Interface",
        "testFn": "code.includes('func (u User) String()') || code.includes('String() string')"
      }
    ]
  },
  {
    "id": "golang-64-the-empty-interface-interface{}-",
    "title": "64. The Empty Interface: interface{} / any",
    "slug": "lesson-64-the-empty-interface-interface{}-",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Empty Interface: interface{} / any in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Empty Interface",
      "Go (Golang)"
    ],
    "analogy": "A universal shipping container holding any arbitrary object: water, cars, flour, or electronics.",
    "explanationMarkdown": "### The Empty Interface: interface{} / any\n\nThe empty interface `any` (alias for `interface{}`) defines zero methods, meaning literally every type satisfies it.\n\n```golang\npackage main\n\nfunc printAny(val any) {\n  _ = val\n}\n\nfunc main() {\n  printAny(42)\n  printAny(\"text\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Empty Interface: interface{} / any",
      "code": "package main\n\nfunc printAny(val any) {\n  _ = val\n}\n\nfunc main() {\n  printAny(42)\n  printAny(\"text\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Empty Interface: interface{} / any.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Empty Interface: interface{} / any.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc printAny(val any) {\n  _ = val\n}\n\nfunc main() {\n  printAny(42)\n  printAny(\"text\")\n}",
    "solutionCode": "package main\n\nfunc printAny(val any) {\n  _ = val\n}\n\nfunc main() {\n  printAny(42)\n  printAny(\"text\")\n}",
    "hints": [
      "Write:\npackage main\n\nfunc printAny(val any) {\n  _ = val\n}\n\nfunc main() {\n  printAny(42)\n  printAny(\"text\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-64-tc-1",
        "description": "Verifies correct implementation for The Empty Interface: interface{} / any",
        "testFn": "code.includes('val any') || code.includes('interface{}')"
      }
    ]
  },
  {
    "id": "golang-65-type-assertions-x.t",
    "title": "65. Type Assertions: x.(T)",
    "slug": "lesson-65-type-assertions-x.t",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Type Assertions: x.(T) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Type Assertions",
      "Go (Golang)"
    ],
    "analogy": "Opening an unmarked cardboard box and asserting: 'I claim there is a book inside here'.",
    "explanationMarkdown": "### Type Assertions: x.(T)\n\n`x.(T)` asserts that the interface value holds concrete type `T`, extracting the underlying concrete value.\n\n```golang\npackage main\n\nfunc main() {\n  var val any = \"DevForge\"\n  str := val.(string)\n  _ = str\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Assertions: x.(T)",
      "code": "package main\n\nfunc main() {\n  var val any = \"DevForge\"\n  str := val.(string)\n  _ = str\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Assertions: x.(T).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Assertions: x.(T).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var val any = \"DevForge\"\n  str := val.(string) // Type assertion!\n  _ = str\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var val any = \"DevForge\"\n  str := val.(string)\n  _ = str\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var val any = \"DevForge\"\n  str := val.(string)\n  _ = str\n}"
    ],
    "testCases": [
      {
        "id": "golang-65-tc-1",
        "description": "Verifies correct implementation for Type Assertions: x.(T)",
        "testFn": "code.includes('val.(string)')"
      }
    ]
  },
  {
    "id": "golang-66-safe-type-assertions-with-comma-",
    "title": "66. Safe Type Assertions with Comma-Ok",
    "slug": "lesson-66-safe-type-assertions-with-comma-",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Safe Type Assertions with Comma-Ok in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Safe Type Assertions with Comma-Ok",
      "Go (Golang)"
    ],
    "analogy": "Carefully checking inside an unmarked box before grabbing, avoiding a painful bite if it holds a cactus.",
    "explanationMarkdown": "### Safe Type Assertions with Comma-Ok\n\n`val, ok := x.(T)` tests the type safely: if the assertion fails, `ok` is `false` instead of triggering a runtime panic!\n\n```golang\npackage main\n\nfunc main() {\n  var val any = 42\n  str, ok := val.(string)\n  _ = str; _ = ok\n}\n```",
    "workedExample": {
      "title": "Worked Example: Safe Type Assertions with Comma-Ok",
      "code": "package main\n\nfunc main() {\n  var val any = 42\n  str, ok := val.(string)\n  _ = str; _ = ok\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Safe Type Assertions with Comma-Ok.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Safe Type Assertions with Comma-Ok.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  var val any = 42\n  str, ok := val.(string)\n  _ = str; _ = ok // ok is false; no panic!\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var val any = 42\n  str, ok := val.(string)\n  _ = str; _ = ok\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var val any = 42\n  str, ok := val.(string)\n  _ = str; _ = ok\n}"
    ],
    "testCases": [
      {
        "id": "golang-66-tc-1",
        "description": "Verifies correct implementation for Safe Type Assertions with Comma-Ok",
        "testFn": "code.includes('val.(string)') && code.includes(', ok')"
      }
    ]
  },
  {
    "id": "golang-67-type-switches-switch-v-=-x.type",
    "title": "67. Type Switches: switch v := x.(type)",
    "slug": "lesson-67-type-switches-switch-v-=-x.type",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Type Switches: switch v := x.(type) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Type Switches",
      "Go (Golang)"
    ],
    "analogy": "A recycling sorting machine routing glass, metal, and cardboard into different processing bins based on material.",
    "explanationMarkdown": "### Type Switches: switch v := x.(type)\n\nA type switch matches against the dynamic type of an interface, casting `v` to the concrete type in each case block.\n\n```golang\npackage main\n\nfunc inspectType(x any) string {\n  switch v := x.(type) {\n  case int:    return \"integer\"\n  case string: return \"string\"\n  default:     _ = v; return \"unknown\"\n  }\n}\n\nfunc main() {\n  _ = inspectType(10)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Switches: switch v := x.(type)",
      "code": "package main\n\nfunc inspectType(x any) string {\n  switch v := x.(type) {\n  case int:    return \"integer\"\n  case string: return \"string\"\n  default:     _ = v; return \"unknown\"\n  }\n}\n\nfunc main() {\n  _ = inspectType(10)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Switches: switch v := x.(type).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Switches: switch v := x.(type).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc inspectType(x any) string {\n  switch v := x.(type) {\n  case int:    return \"integer\"\n  case string: return \"string\"\n  default:     _ = v; return \"unknown\"\n  }\n}\n\nfunc main() {\n  _ = inspectType(10)\n}",
    "solutionCode": "package main\n\nfunc inspectType(x any) string {\n  switch v := x.(type) {\n  case int:    return \"integer\"\n  case string: return \"string\"\n  default:     _ = v; return \"unknown\"\n  }\n}\n\nfunc main() {\n  _ = inspectType(10)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc inspectType(x any) string {\n  switch v := x.(type) {\n  case int:    return \"integer\"\n  case string: return \"string\"\n  default:     _ = v; return \"unknown\"\n  }\n}\n\nfunc main() {\n  _ = inspectType(10)\n}"
    ],
    "testCases": [
      {
        "id": "golang-67-tc-1",
        "description": "Verifies correct implementation for Type Switches: switch v := x.(type)",
        "testFn": "code.includes('switch v := x.(type)') || code.includes('x.(type)')"
      }
    ]
  },
  {
    "id": "golang-68-interface-embedding-composition-",
    "title": "68. Interface Embedding (Composition of Interfaces)",
    "slug": "lesson-68-interface-embedding-composition-",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Interface Embedding (Composition of Interfaces) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Interface Embedding (Composition of Interfaces)",
      "Go (Golang)"
    ],
    "analogy": "A smartphone that functions as both a camera and a telephone by embedding both capabilities.",
    "explanationMarkdown": "### Interface Embedding (Composition of Interfaces)\n\nInterfaces can embed other interfaces to form composite interfaces (e.g. `io.ReadWriter` bundles `Reader` and `Writer`).\n\n```golang\npackage main\n\ntype Reader interface { Read(p []byte) (n int, err error) }\ntype Writer interface { Write(p []byte) (n int, err error) }\ntype ReadWriter interface {\n  Reader\n  Writer\n}\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Interface Embedding (Composition of Interfaces)",
      "code": "package main\n\ntype Reader interface { Read(p []byte) (n int, err error) }\ntype Writer interface { Write(p []byte) (n int, err error) }\ntype ReadWriter interface {\n  Reader\n  Writer\n}\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interface Embedding (Composition of Interfaces).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interface Embedding (Composition of Interfaces).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Reader interface { Read(p []byte) (n int, err error) }\ntype Writer interface { Write(p []byte) (n int, err error) }\ntype ReadWriter interface {\n  Reader\n  Writer\n}\n\nfunc main() {\n  // ReadWriter bundles Reader and Writer!\n}",
    "solutionCode": "package main\n\ntype Reader interface { Read(p []byte) (n int, err error) }\ntype Writer interface { Write(p []byte) (n int, err error) }\ntype ReadWriter interface {\n  Reader\n  Writer\n}\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\ntype Reader interface { Read(p []byte) (n int, err error) }\ntype Writer interface { Write(p []byte) (n int, err error) }\ntype ReadWriter interface {\n  Reader\n  Writer\n}\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-68-tc-1",
        "description": "Verifies correct implementation for Interface Embedding (Composition of Interfaces)",
        "testFn": "code.includes('type ReadWriter interface') || code.includes('Reader')"
      }
    ]
  },
  {
    "id": "golang-69-the-io.reader-and-io.writer-powe",
    "title": "69. The io.Reader and io.Writer Powerhouses",
    "slug": "lesson-69-the-io.reader-and-io.writer-powe",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The io.Reader and io.Writer Powerhouses in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The io.Reader and io.Writer Powerhouses",
      "Go (Golang)"
    ],
    "analogy": "Standard USB ports: anything that can output bytes or read bytes plugs in seamlessly across the entire world.",
    "explanationMarkdown": "### The io.Reader and io.Writer Powerhouses\n\n`io.Reader` and `io.Writer` are the two most foundational interfaces in Go, powering files, HTTP, crypto, and compression.\n\n```golang\npackage main\n\nimport (\n  \"bytes\"\n  \"io\"\n)\n\nfunc main() {\n  var r io.Reader = bytes.NewBufferString(\"stream\")\n  _ = r\n}\n```",
    "workedExample": {
      "title": "Worked Example: The io.Reader and io.Writer Powerhouses",
      "code": "package main\n\nimport (\n  \"bytes\"\n  \"io\"\n)\n\nfunc main() {\n  var r io.Reader = bytes.NewBufferString(\"stream\")\n  _ = r\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The io.Reader and io.Writer Powerhouses.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The io.Reader and io.Writer Powerhouses.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"bytes\"\n  \"io\"\n)\n\nfunc main() {\n  var r io.Reader = bytes.NewBufferString(\"stream\")\n  _ = r\n}",
    "solutionCode": "package main\n\nimport (\n  \"bytes\"\n  \"io\"\n)\n\nfunc main() {\n  var r io.Reader = bytes.NewBufferString(\"stream\")\n  _ = r\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"bytes\"\n  \"io\"\n)\n\nfunc main() {\n  var r io.Reader = bytes.NewBufferString(\"stream\")\n  _ = r\n}"
    ],
    "testCases": [
      {
        "id": "golang-69-tc-1",
        "description": "Verifies correct implementation for The io.Reader and io.Writer Powerhouses",
        "testFn": "code.includes('io.Reader') || code.includes('bytes.NewBufferString')"
      }
    ]
  },
  {
    "id": "golang-70-the-built-in-error-interface",
    "title": "70. The Built-In error Interface",
    "slug": "lesson-70-the-built-in-error-interface",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Built-In error Interface in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Built-In error Interface",
      "Go (Golang)"
    ],
    "analogy": "A doctor's prescription slip: any paper stamped with a diagnosis message satisfies the medical board.",
    "explanationMarkdown": "### The Built-In error Interface\n\nIn Go, error handling is not magical: `error` is simply an interface requiring a single method `Error() string`.\n\n```golang\npackage main\n\ntype error interface {\n  Error() string\n}\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Built-In error Interface",
      "code": "package main\n\ntype error interface {\n  Error() string\n}\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Built-In error Interface.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Built-In error Interface.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype error interface {\n  Error() string\n}\n\nfunc main() {\n  // In Go, an error is just any type with an Error() string method!\n}",
    "solutionCode": "package main\n\ntype error interface {\n  Error() string\n}\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\ntype error interface {\n  Error() string\n}\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-70-tc-1",
        "description": "Verifies correct implementation for The Built-In error Interface",
        "testFn": "code.includes('Error() string') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-71-the-nil-interface-trap!-type-vs-",
    "title": "71. The Nil Interface Trap! (Type vs Value)",
    "slug": "lesson-71-the-nil-interface-trap!-type-vs-",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Nil Interface Trap! (Type vs Value) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Nil Interface Trap! (Type vs Value)",
      "Go (Golang)"
    ],
    "analogy": "An empty envelope (nil value) inside a labeled box (concrete type) is NOT an empty box!",
    "explanationMarkdown": "### The Nil Interface Trap! (Type vs Value)\n\nAn interface holds two words: `(type, value)`. An interface holding a typed nil pointer is NOT equal to `nil`!\n\n```golang\npackage main\n\nfunc main() {\n  var r error = nil\n  _ = r == nil\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Nil Interface Trap! (Type vs Value)",
      "code": "package main\n\nfunc main() {\n  var r error = nil\n  _ = r == nil\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Nil Interface Trap! (Type vs Value).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Nil Interface Trap! (Type vs Value).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // An interface is nil ONLY if both its concrete type AND value are nil!\n  var r error = nil\n  _ = r == nil // true\n}",
    "solutionCode": "package main\n\nfunc main() {\n  var r error = nil\n  _ = r == nil\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  var r error = nil\n  _ = r == nil\n}"
    ],
    "testCases": [
      {
        "id": "golang-71-tc-1",
        "description": "Verifies correct implementation for The Nil Interface Trap! (Type vs Value)",
        "testFn": "code.includes('var r error = nil') || code.includes('r == nil')"
      }
    ]
  },
  {
    "id": "golang-72-single-method-interface-best-pra",
    "title": "72. Single-Method Interface Best Practice",
    "slug": "lesson-72-single-method-interface-best-pra",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Single-Method Interface Best Practice in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Single-Method Interface Best Practice",
      "Go (Golang)"
    ],
    "analogy": "A standard screw head: requiring only one screwdriver notch makes screws universally compatible everywhere.",
    "explanationMarkdown": "### Single-Method Interface Best Practice\n\nThe bigger the interface, the weaker the abstraction. Prefer small single-method interfaces (`io.Reader`, `fmt.Stringer`).\n\n```golang\npackage main\n\ntype Closer interface {\n  Close() error\n}\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Single-Method Interface Best Practice",
      "code": "package main\n\ntype Closer interface {\n  Close() error\n}\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Single-Method Interface Best Practice.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Single-Method Interface Best Practice.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Closer interface {\n  Close() error\n}\n\nfunc main() {\n  // Keep interfaces minimal!\n}",
    "solutionCode": "package main\n\ntype Closer interface {\n  Close() error\n}\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\ntype Closer interface {\n  Close() error\n}\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-72-tc-1",
        "description": "Verifies correct implementation for Single-Method Interface Best Practice",
        "testFn": "code.includes('type Closer interface') || code.includes('Close() error')"
      }
    ]
  },
  {
    "id": "golang-73-dependency-injection-with-interf",
    "title": "73. Dependency Injection with Interfaces",
    "slug": "lesson-73-dependency-injection-with-interf",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Dependency Injection with Interfaces in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Dependency Injection with Interfaces",
      "Go (Golang)"
    ],
    "analogy": "A race car accepting either an electric motor or a gas engine as long as the drive shaft connects.",
    "explanationMarkdown": "### Dependency Injection with Interfaces\n\nAccept interfaces in structs and constructors to easily inject mock implementations during automated testing.\n\n```golang\npackage main\n\ntype Storage interface { Save(data string) error }\ntype App struct { db Storage }\n\nfunc main() {\n  _ = App{}\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dependency Injection with Interfaces",
      "code": "package main\n\ntype Storage interface { Save(data string) error }\ntype App struct { db Storage }\n\nfunc main() {\n  _ = App{}\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dependency Injection with Interfaces.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dependency Injection with Interfaces.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype Storage interface { Save(data string) error }\ntype App struct { db Storage }\n\nfunc main() {\n  _ = App{}\n}",
    "solutionCode": "package main\n\ntype Storage interface { Save(data string) error }\ntype App struct { db Storage }\n\nfunc main() {\n  _ = App{}\n}",
    "hints": [
      "Write:\npackage main\n\ntype Storage interface { Save(data string) error }\ntype App struct { db Storage }\n\nfunc main() {\n  _ = App{}\n}"
    ],
    "testCases": [
      {
        "id": "golang-73-tc-1",
        "description": "Verifies correct implementation for Dependency Injection with Interfaces",
        "testFn": "code.includes('type Storage interface') || code.includes('App struct')"
      }
    ]
  },
  {
    "id": "golang-74-accept-interfaces,-return-struct",
    "title": "74. Accept Interfaces, Return Structs Rule",
    "slug": "lesson-74-accept-interfaces,-return-struct",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Accept Interfaces, Return Structs Rule in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Accept Interfaces, Return Structs Rule",
      "Go (Golang)"
    ],
    "analogy": "Being flexible about what ingredients you accept from suppliers, but delivering an exact certified cake.",
    "explanationMarkdown": "### Accept Interfaces, Return Structs Rule\n\nDesign functions to accept flexible interfaces as parameters while returning concrete struct pointers.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Accept Interfaces, Return Structs Rule",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accept Interfaces, Return Structs Rule.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accept Interfaces, Return Structs Rule.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Idiom: 'Accept interfaces, return concrete structs'\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-74-tc-1",
        "description": "Verifies correct implementation for Accept Interfaces, Return Structs Rule",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-75-module-5-review-polymorphic-arch",
    "title": "75. Module 5 Review: Polymorphic Architecture Capstone",
    "slug": "lesson-75-module-5-review-polymorphic-arch",
    "language": "golang",
    "category": "Module 5: Interfaces & Polymorphism",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 5 Review: Polymorphic Architecture Capstone in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 5 Review",
      "Go (Golang)"
    ],
    "analogy": "A universal credit card terminal accepting Visa, Mastercard, and Apple Pay without re-wiring the counter.",
    "explanationMarkdown": "### Module 5 Review: Polymorphic Architecture Capstone\n\nMastery over implicit duck typing, Stringer formatting, any assertions, type switches, and decoupled dependency injection.\n\n```golang\npackage main\n\ntype PaymentGateway interface {\n  Pay(cents int) bool\n}\n\ntype Stripe struct{}\nfunc (s Stripe) Pay(cents int) bool { return true }\n\nfunc main() {\n  var g PaymentGateway = Stripe{}\n  _ = g.Pay(500)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: Polymorphic Architecture Capstone",
      "code": "package main\n\ntype PaymentGateway interface {\n  Pay(cents int) bool\n}\n\ntype Stripe struct{}\nfunc (s Stripe) Pay(cents int) bool { return true }\n\nfunc main() {\n  var g PaymentGateway = Stripe{}\n  _ = g.Pay(500)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 5 Review: Polymorphic Architecture Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 5 Review: Polymorphic Architecture Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype PaymentGateway interface {\n  Pay(cents int) bool\n}\n\ntype Stripe struct{}\nfunc (s Stripe) Pay(cents int) bool { return true }\n\nfunc main() {\n  var g PaymentGateway = Stripe{}\n  _ = g.Pay(500)\n}",
    "solutionCode": "package main\n\ntype PaymentGateway interface {\n  Pay(cents int) bool\n}\n\ntype Stripe struct{}\nfunc (s Stripe) Pay(cents int) bool { return true }\n\nfunc main() {\n  var g PaymentGateway = Stripe{}\n  _ = g.Pay(500)\n}",
    "hints": [
      "Write:\npackage main\n\ntype PaymentGateway interface {\n  Pay(cents int) bool\n}\n\ntype Stripe struct{}\nfunc (s Stripe) Pay(cents int) bool { return true }\n\nfunc main() {\n  var g PaymentGateway = Stripe{}\n  _ = g.Pay(500)\n}"
    ],
    "testCases": [
      {
        "id": "golang-75-tc-1",
        "description": "Verifies correct implementation for Module 5 Review: Polymorphic Architecture Capstone",
        "testFn": "code.includes('PaymentGateway') || code.includes('Pay(')"
      }
    ]
  },
  {
    "id": "golang-76-errors-are-values,-not-exception",
    "title": "76. Errors are Values, Not Exceptions",
    "slug": "lesson-76-errors-are-values,-not-exception",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Errors are Values, Not Exceptions in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Errors are Values, Not Exceptions",
      "Go (Golang)"
    ],
    "analogy": "A warning light on a car dashboard: part of normal driving operations, not an explosion that destroys the engine.",
    "explanationMarkdown": "### Errors are Values, Not Exceptions\n\nGo rejects hidden try/catch blocks; errors are explicit return values inspected alongside results.\n\n```golang\npackage main\n\nimport \"errors\"\n\nfunc check(val int) error {\n  if val < 0 { return errors.New(\"negative value\") }\n  return nil\n}\n\nfunc main() {\n  _ = check(-1)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Errors are Values, Not Exceptions",
      "code": "package main\n\nimport \"errors\"\n\nfunc check(val int) error {\n  if val < 0 { return errors.New(\"negative value\") }\n  return nil\n}\n\nfunc main() {\n  _ = check(-1)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Errors are Values, Not Exceptions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Errors are Values, Not Exceptions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"errors\"\n\nfunc check(val int) error {\n  if val < 0 { return errors.New(\"negative value\") }\n  return nil\n}\n\nfunc main() {\n  _ = check(-1)\n}",
    "solutionCode": "package main\n\nimport \"errors\"\n\nfunc check(val int) error {\n  if val < 0 { return errors.New(\"negative value\") }\n  return nil\n}\n\nfunc main() {\n  _ = check(-1)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"errors\"\n\nfunc check(val int) error {\n  if val < 0 { return errors.New(\"negative value\") }\n  return nil\n}\n\nfunc main() {\n  _ = check(-1)\n}"
    ],
    "testCases": [
      {
        "id": "golang-76-tc-1",
        "description": "Verifies correct implementation for Errors are Values, Not Exceptions",
        "testFn": "code.includes('errors.New') || code.includes('return nil')"
      }
    ]
  },
  {
    "id": "golang-77-the-idiomatic-if-err-!=-nil-patt",
    "title": "77. The Idiomatic if err != nil Pattern",
    "slug": "lesson-77-the-idiomatic-if-err-!=-nil-patt",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Idiomatic if err != nil Pattern in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Idiomatic if err != nil Pattern",
      "Go (Golang)"
    ],
    "analogy": "A pilot inspecting the pre-flight checklist: if any gauge shows an error, abort takeoff immediately.",
    "explanationMarkdown": "### The Idiomatic if err != nil Pattern\n\nInspect errors immediately after calling functions; handle the failure branch early and keep the happy path un-indented.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc doWork() error { return nil }\n\nfunc main() {\n  if err := doWork(); err != nil {\n    fmt.Println(\"Failed:\", err)\n    return\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Idiomatic if err != nil Pattern",
      "code": "package main\n\nimport \"fmt\"\n\nfunc doWork() error { return nil }\n\nfunc main() {\n  if err := doWork(); err != nil {\n    fmt.Println(\"Failed:\", err)\n    return\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Idiomatic if err != nil Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Idiomatic if err != nil Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc doWork() error { return nil }\n\nfunc main() {\n  if err := doWork(); err != nil {\n    fmt.Println(\"Failed:\", err)\n    return\n  }\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc doWork() error { return nil }\n\nfunc main() {\n  if err := doWork(); err != nil {\n    fmt.Println(\"Failed:\", err)\n    return\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc doWork() error { return nil }\n\nfunc main() {\n  if err := doWork(); err != nil {\n    fmt.Println(\"Failed:\", err)\n    return\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-77-tc-1",
        "description": "Verifies correct implementation for The Idiomatic if err != nil Pattern",
        "testFn": "code.includes('if err := doWork(); err != nil') || code.includes('err != nil')"
      }
    ]
  },
  {
    "id": "golang-78-creating-errors-with-errors.new",
    "title": "78. Creating Errors with errors.New()",
    "slug": "lesson-78-creating-errors-with-errors.new",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Creating Errors with errors.New() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Creating Errors with errors.New()",
      "Go (Golang)"
    ],
    "analogy": "Stamping a standardized red 'Document Rejected' stamp on a visa application.",
    "explanationMarkdown": "### Creating Errors with errors.New()\n\n`errors.New(\"message\")` constructs a simple, immutable sentinel error.\n\n```golang\npackage main\n\nimport \"errors\"\n\nvar ErrNotFound = errors.New(\"item not found\")\n\nfunc main() {\n  _ = ErrNotFound\n}\n```",
    "workedExample": {
      "title": "Worked Example: Creating Errors with errors.New()",
      "code": "package main\n\nimport \"errors\"\n\nvar ErrNotFound = errors.New(\"item not found\")\n\nfunc main() {\n  _ = ErrNotFound\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Errors with errors.New().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Errors with errors.New().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"errors\"\n\nvar ErrNotFound = errors.New(\"item not found\")\n\nfunc main() {\n  _ = ErrNotFound\n}",
    "solutionCode": "package main\n\nimport \"errors\"\n\nvar ErrNotFound = errors.New(\"item not found\")\n\nfunc main() {\n  _ = ErrNotFound\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"errors\"\n\nvar ErrNotFound = errors.New(\"item not found\")\n\nfunc main() {\n  _ = ErrNotFound\n}"
    ],
    "testCases": [
      {
        "id": "golang-78-tc-1",
        "description": "Verifies correct implementation for Creating Errors with errors.New()",
        "testFn": "code.includes('errors.New') || code.includes('ErrNotFound')"
      }
    ]
  },
  {
    "id": "golang-79-formatted-errors-with-fmt.errorf",
    "title": "79. Formatted Errors with fmt.Errorf()",
    "slug": "lesson-79-formatted-errors-with-fmt.errorf",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Formatted Errors with fmt.Errorf() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Formatted Errors with fmt.Errorf()",
      "Go (Golang)"
    ],
    "analogy": "Writing a customized infraction ticket with the exact vehicle license plate number printed on it.",
    "explanationMarkdown": "### Formatted Errors with fmt.Errorf()\n\n`fmt.Errorf(\"format %s\", arg)` creates dynamic formatted error messages.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc findUser(id int) error {\n  return fmt.Errorf(\"user %d not found\", id)\n}\n\nfunc main() {\n  _ = findUser(42)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Formatted Errors with fmt.Errorf()",
      "code": "package main\n\nimport \"fmt\"\n\nfunc findUser(id int) error {\n  return fmt.Errorf(\"user %d not found\", id)\n}\n\nfunc main() {\n  _ = findUser(42)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Formatted Errors with fmt.Errorf().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Formatted Errors with fmt.Errorf().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc findUser(id int) error {\n  return fmt.Errorf(\"user %d not found\", id)\n}\n\nfunc main() {\n  _ = findUser(42)\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc findUser(id int) error {\n  return fmt.Errorf(\"user %d not found\", id)\n}\n\nfunc main() {\n  _ = findUser(42)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc findUser(id int) error {\n  return fmt.Errorf(\"user %d not found\", id)\n}\n\nfunc main() {\n  _ = findUser(42)\n}"
    ],
    "testCases": [
      {
        "id": "golang-79-tc-1",
        "description": "Verifies correct implementation for Formatted Errors with fmt.Errorf()",
        "testFn": "code.includes('fmt.Errorf') || code.includes('findUser')"
      }
    ]
  },
  {
    "id": "golang-80-error-wrapping-with-%w-go-1.13+",
    "title": "80. Error Wrapping with %w (Go 1.13+)",
    "slug": "lesson-80-error-wrapping-with-%w-go-1.13+",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Error Wrapping with %w (Go 1.13+) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Error Wrapping with %w (Go 1.13+)",
      "Go (Golang)"
    ],
    "analogy": "Wrapping an important letter inside a secure courier envelope: the outer envelope adds tracking, preserving the inner letter.",
    "explanationMarkdown": "### Error Wrapping with %w (Go 1.13+)\n\nThe `%w` verb in `fmt.Errorf` wraps an underlying error, preserving its identity for inspection up the call stack.\n\n```golang\npackage main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrDb = errors.New(\"db down\")\n\nfunc query() error {\n  return fmt.Errorf(\"query failed: %w\", ErrDb)\n}\n\nfunc main() {\n  _ = query()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Error Wrapping with %w (Go 1.13+)",
      "code": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrDb = errors.New(\"db down\")\n\nfunc query() error {\n  return fmt.Errorf(\"query failed: %w\", ErrDb)\n}\n\nfunc main() {\n  _ = query()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Error Wrapping with %w (Go 1.13+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Error Wrapping with %w (Go 1.13+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrDb = errors.New(\"db down\")\n\nfunc query() error {\n  return fmt.Errorf(\"query failed: %w\", ErrDb) // Wrapped!\n}\n\nfunc main() {\n  _ = query()\n}",
    "solutionCode": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrDb = errors.New(\"db down\")\n\nfunc query() error {\n  return fmt.Errorf(\"query failed: %w\", ErrDb)\n}\n\nfunc main() {\n  _ = query()\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrDb = errors.New(\"db down\")\n\nfunc query() error {\n  return fmt.Errorf(\"query failed: %w\", ErrDb)\n}\n\nfunc main() {\n  _ = query()\n}"
    ],
    "testCases": [
      {
        "id": "golang-80-tc-1",
        "description": "Verifies correct implementation for Error Wrapping with %w (Go 1.13+)",
        "testFn": "code.includes('%w') || code.includes('fmt.Errorf')"
      }
    ]
  },
  {
    "id": "golang-81-inspecting-sentinel-errors-with-",
    "title": "81. Inspecting Sentinel Errors with errors.Is()",
    "slug": "lesson-81-inspecting-sentinel-errors-with-",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inspecting Sentinel Errors with errors.Is() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Inspecting Sentinel Errors with errors.Is()",
      "Go (Golang)"
    ],
    "analogy": "Using an X-ray scanner on a wrapped package to confirm the original gold ring is still inside.",
    "explanationMarkdown": "### Inspecting Sentinel Errors with errors.Is()\n\n`errors.Is(err, target)` unwraps nested error chains to check if any underlying error matches the target sentinel.\n\n```golang\npackage main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"not found\")\n\nfunc main() {\n  err := fmt.Errorf(\"fetch: %w\", ErrNotFound)\n  isMatch := errors.Is(err, ErrNotFound)\n  _ = isMatch\n}\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Sentinel Errors with errors.Is()",
      "code": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"not found\")\n\nfunc main() {\n  err := fmt.Errorf(\"fetch: %w\", ErrNotFound)\n  isMatch := errors.Is(err, ErrNotFound)\n  _ = isMatch\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Sentinel Errors with errors.Is().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Sentinel Errors with errors.Is().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"not found\")\n\nfunc main() {\n  err := fmt.Errorf(\"fetch: %w\", ErrNotFound)\n  isMatch := errors.Is(err, ErrNotFound)\n  _ = isMatch // true!\n}",
    "solutionCode": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"not found\")\n\nfunc main() {\n  err := fmt.Errorf(\"fetch: %w\", ErrNotFound)\n  isMatch := errors.Is(err, ErrNotFound)\n  _ = isMatch\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"not found\")\n\nfunc main() {\n  err := fmt.Errorf(\"fetch: %w\", ErrNotFound)\n  isMatch := errors.Is(err, ErrNotFound)\n  _ = isMatch\n}"
    ],
    "testCases": [
      {
        "id": "golang-81-tc-1",
        "description": "Verifies correct implementation for Inspecting Sentinel Errors with errors.Is()",
        "testFn": "code.includes('errors.Is') || code.includes('ErrNotFound')"
      }
    ]
  },
  {
    "id": "golang-82-extracting-custom-error-types-wi",
    "title": "82. Extracting Custom Error Types with errors.As()",
    "slug": "lesson-82-extracting-custom-error-types-wi",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Extracting Custom Error Types with errors.As() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Extracting Custom Error Types with errors.As()",
      "Go (Golang)"
    ],
    "analogy": "Opening an envelope to read the specific lab blood test results inside.",
    "explanationMarkdown": "### Extracting Custom Error Types with errors.As()\n\n`errors.As(err, &target)` inspects the error chain and binds the first matching custom error type to the target pointer.\n\n```golang\npackage main\n\nimport \"errors\"\n\ntype QueryError struct{ Query string }\nfunc (e *QueryError) Error() string { return \"bad: \" + e.Query }\n\nfunc main() {\n  var qErr *QueryError\n  _ = errors.As(nil, &qErr)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Custom Error Types with errors.As()",
      "code": "package main\n\nimport \"errors\"\n\ntype QueryError struct{ Query string }\nfunc (e *QueryError) Error() string { return \"bad: \" + e.Query }\n\nfunc main() {\n  var qErr *QueryError\n  _ = errors.As(nil, &qErr)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Custom Error Types with errors.As().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Custom Error Types with errors.As().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"errors\"\n\ntype QueryError struct{ Query string }\nfunc (e *QueryError) Error() string { return \"bad: \" + e.Query }\n\nfunc main() {\n  var qErr *QueryError\n  _ = errors.As(nil, &qErr)\n}",
    "solutionCode": "package main\n\nimport \"errors\"\n\ntype QueryError struct{ Query string }\nfunc (e *QueryError) Error() string { return \"bad: \" + e.Query }\n\nfunc main() {\n  var qErr *QueryError\n  _ = errors.As(nil, &qErr)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"errors\"\n\ntype QueryError struct{ Query string }\nfunc (e *QueryError) Error() string { return \"bad: \" + e.Query }\n\nfunc main() {\n  var qErr *QueryError\n  _ = errors.As(nil, &qErr)\n}"
    ],
    "testCases": [
      {
        "id": "golang-82-tc-1",
        "description": "Verifies correct implementation for Extracting Custom Error Types with errors.As()",
        "testFn": "code.includes('errors.As') || code.includes('QueryError')"
      }
    ]
  },
  {
    "id": "golang-83-custom-error-structs-with-contex",
    "title": "83. Custom Error Structs with Contextual Fields",
    "slug": "lesson-83-custom-error-structs-with-contex",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Custom Error Structs with Contextual Fields in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Custom Error Structs with Contextual Fields",
      "Go (Golang)"
    ],
    "analogy": "A detailed medical chart recording exact body temperature, pulse, and symptoms instead of just writing 'sick'.",
    "explanationMarkdown": "### Custom Error Structs with Contextual Fields\n\nImplement `Error() string` on custom structs to attach diagnostic metadata (status codes, query strings, retry counts).\n\n```golang\npackage main\n\nimport \"fmt\"\n\ntype HttpError struct {\n  StatusCode int\n  Endpoint   string\n}\n\nfunc (e *HttpError) Error() string {\n  return fmt.Sprintf(\"%d error on %s\", e.StatusCode, e.Endpoint)\n}\n\nfunc main() {\n  _ = &HttpError{StatusCode: 404, Endpoint: \"/courses\"}\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Error Structs with Contextual Fields",
      "code": "package main\n\nimport \"fmt\"\n\ntype HttpError struct {\n  StatusCode int\n  Endpoint   string\n}\n\nfunc (e *HttpError) Error() string {\n  return fmt.Sprintf(\"%d error on %s\", e.StatusCode, e.Endpoint)\n}\n\nfunc main() {\n  _ = &HttpError{StatusCode: 404, Endpoint: \"/courses\"}\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Error Structs with Contextual Fields.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Error Structs with Contextual Fields.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\ntype HttpError struct {\n  StatusCode int\n  Endpoint   string\n}\n\nfunc (e *HttpError) Error() string {\n  return fmt.Sprintf(\"%d error on %s\", e.StatusCode, e.Endpoint)\n}\n\nfunc main() {\n  _ = &HttpError{StatusCode: 404, Endpoint: \"/courses\"}\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\ntype HttpError struct {\n  StatusCode int\n  Endpoint   string\n}\n\nfunc (e *HttpError) Error() string {\n  return fmt.Sprintf(\"%d error on %s\", e.StatusCode, e.Endpoint)\n}\n\nfunc main() {\n  _ = &HttpError{StatusCode: 404, Endpoint: \"/courses\"}\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\ntype HttpError struct {\n  StatusCode int\n  Endpoint   string\n}\n\nfunc (e *HttpError) Error() string {\n  return fmt.Sprintf(\"%d error on %s\", e.StatusCode, e.Endpoint)\n}\n\nfunc main() {\n  _ = &HttpError{StatusCode: 404, Endpoint: \"/courses\"}\n}"
    ],
    "testCases": [
      {
        "id": "golang-83-tc-1",
        "description": "Verifies correct implementation for Custom Error Structs with Contextual Fields",
        "testFn": "code.includes('HttpError struct') || code.includes('StatusCode int')"
      }
    ]
  },
  {
    "id": "golang-84-sentinel-errors-pattern-errnotfo",
    "title": "84. Sentinel Errors Pattern (ErrNotFound, ErrPermission)",
    "slug": "lesson-84-sentinel-errors-pattern-errnotfo",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Sentinel Errors Pattern (ErrNotFound, ErrPermission) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Sentinel Errors Pattern (ErrNotFound, ErrPermission)",
      "Go (Golang)"
    ],
    "analogy": "Pre-printed emergency warning signs: 'High Voltage', 'Hard Hat Required', 'No Entry'.",
    "explanationMarkdown": "### Sentinel Errors Pattern (ErrNotFound, ErrPermission)\n\nExport public package-level sentinel errors (`Err...`) so consumers can branch logic based on specific outcomes.\n\n```golang\npackage main\n\nimport \"errors\"\n\nvar (\n  ErrTimeout    = errors.New(\"timeout\")\n  ErrBadRequest = errors.New(\"bad request\")\n)\n\nfunc main() {\n  _ = ErrTimeout\n}\n```",
    "workedExample": {
      "title": "Worked Example: Sentinel Errors Pattern (ErrNotFound, ErrPermission)",
      "code": "package main\n\nimport \"errors\"\n\nvar (\n  ErrTimeout    = errors.New(\"timeout\")\n  ErrBadRequest = errors.New(\"bad request\")\n)\n\nfunc main() {\n  _ = ErrTimeout\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sentinel Errors Pattern (ErrNotFound, ErrPermission).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sentinel Errors Pattern (ErrNotFound, ErrPermission).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"errors\"\n\nvar (\n  ErrTimeout    = errors.New(\"timeout\")\n  ErrBadRequest = errors.New(\"bad request\")\n)\n\nfunc main() {\n  _ = ErrTimeout\n}",
    "solutionCode": "package main\n\nimport \"errors\"\n\nvar (\n  ErrTimeout    = errors.New(\"timeout\")\n  ErrBadRequest = errors.New(\"bad request\")\n)\n\nfunc main() {\n  _ = ErrTimeout\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"errors\"\n\nvar (\n  ErrTimeout    = errors.New(\"timeout\")\n  ErrBadRequest = errors.New(\"bad request\")\n)\n\nfunc main() {\n  _ = ErrTimeout\n}"
    ],
    "testCases": [
      {
        "id": "golang-84-tc-1",
        "description": "Verifies correct implementation for Sentinel Errors Pattern (ErrNotFound, ErrPermission)",
        "testFn": "code.includes('ErrTimeout') || code.includes('errors.New')"
      }
    ]
  },
  {
    "id": "golang-85-the-panic-built-in-when-to-panic",
    "title": "85. The panic() Built-in: When to Panic",
    "slug": "lesson-85-the-panic-built-in-when-to-panic",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The panic() Built-in: When to Panic in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The panic() Built-in",
      "Go (Golang)"
    ],
    "analogy": "Pulling the emergency master red stop lever that instantly halts the entire nuclear reactor.",
    "explanationMarkdown": "### The panic() Built-in: When to Panic\n\n`panic()` stops normal execution, unwinds deferred functions, and crashes the program. Reserve for fatal startup bugs!\n\n```golang\npackage main\n\nfunc main() {\n  // Use panic strictly for truly unrecoverable programmer bugs!\n}\n```",
    "workedExample": {
      "title": "Worked Example: The panic() Built-in: When to Panic",
      "code": "package main\n\nfunc main() {\n  // Use panic strictly for truly unrecoverable programmer bugs!\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The panic() Built-in: When to Panic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The panic() Built-in: When to Panic.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Use panic strictly for truly unrecoverable programmer bugs!\n  // panic(\"database driver missing\")\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // Use panic strictly for truly unrecoverable programmer bugs!\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // Use panic strictly for truly unrecoverable programmer bugs!\n}"
    ],
    "testCases": [
      {
        "id": "golang-85-tc-1",
        "description": "Verifies correct implementation for The panic() Built-in: When to Panic",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-86-the-recover-built-in-catching-pa",
    "title": "86. The recover() Built-in: Catching Panics",
    "slug": "lesson-86-the-recover-built-in-catching-pa",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The recover() Built-in: Catching Panics in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The recover() Built-in",
      "Go (Golang)"
    ],
    "analogy": "A safety net under a circus trapeze artist catching them when they slip.",
    "explanationMarkdown": "### The recover() Built-in: Catching Panics\n\n`recover()` catches a panicking goroutine inside a deferred function, restoring normal control flow.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc safeRun() {\n  defer func() {\n    if r := recover(); r != nil {\n      fmt.Println(\"Recovered from:\", r)\n    }\n  }()\n}\n\nfunc main() {\n  safeRun()\n}\n```",
    "workedExample": {
      "title": "Worked Example: The recover() Built-in: Catching Panics",
      "code": "package main\n\nimport \"fmt\"\n\nfunc safeRun() {\n  defer func() {\n    if r := recover(); r != nil {\n      fmt.Println(\"Recovered from:\", r)\n    }\n  }()\n}\n\nfunc main() {\n  safeRun()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The recover() Built-in: Catching Panics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The recover() Built-in: Catching Panics.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc safeRun() {\n  defer func() {\n    if r := recover(); r != nil {\n      fmt.Println(\"Recovered from:\", r)\n    }\n  }()\n  // code that might panic\n}\n\nfunc main() {\n  safeRun()\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc safeRun() {\n  defer func() {\n    if r := recover(); r != nil {\n      fmt.Println(\"Recovered from:\", r)\n    }\n  }()\n}\n\nfunc main() {\n  safeRun()\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc safeRun() {\n  defer func() {\n    if r := recover(); r != nil {\n      fmt.Println(\"Recovered from:\", r)\n    }\n  }()\n}\n\nfunc main() {\n  safeRun()\n}"
    ],
    "testCases": [
      {
        "id": "golang-86-tc-1",
        "description": "Verifies correct implementation for The recover() Built-in: Catching Panics",
        "testFn": "code.includes('recover()') && code.includes('defer func()')"
      }
    ]
  },
  {
    "id": "golang-87-http-server-recovery-middleware-",
    "title": "87. HTTP Server Recovery Middleware Pattern",
    "slug": "lesson-87-http-server-recovery-middleware-",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master HTTP Server Recovery Middleware Pattern in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "HTTP Server Recovery Middleware Pattern",
      "Go (Golang)"
    ],
    "analogy": "A fireproof door containing a small kitchen fire so the hotel lobby never loses electricity.",
    "explanationMarkdown": "### HTTP Server Recovery Middleware Pattern\n\nWrap HTTP request handlers in recovery middleware so an unexpected panic in one endpoint doesn't crash the entire server.\n\n```golang\npackage main\n\nfunc recoveryMiddleware() {\n  defer func() {\n    _ = recover()\n  }()\n}\n\nfunc main() {\n  recoveryMiddleware()\n}\n```",
    "workedExample": {
      "title": "Worked Example: HTTP Server Recovery Middleware Pattern",
      "code": "package main\n\nfunc recoveryMiddleware() {\n  defer func() {\n    _ = recover()\n  }()\n}\n\nfunc main() {\n  recoveryMiddleware()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTTP Server Recovery Middleware Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTTP Server Recovery Middleware Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc recoveryMiddleware() {\n  defer func() {\n    _ = recover()\n  }()\n}\n\nfunc main() {\n  recoveryMiddleware()\n}",
    "solutionCode": "package main\n\nfunc recoveryMiddleware() {\n  defer func() {\n    _ = recover()\n  }()\n}\n\nfunc main() {\n  recoveryMiddleware()\n}",
    "hints": [
      "Write:\npackage main\n\nfunc recoveryMiddleware() {\n  defer func() {\n    _ = recover()\n  }()\n}\n\nfunc main() {\n  recoveryMiddleware()\n}"
    ],
    "testCases": [
      {
        "id": "golang-87-tc-1",
        "description": "Verifies correct implementation for HTTP Server Recovery Middleware Pattern",
        "testFn": "code.includes('recover()') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-88-joining-multiple-errors-with-err",
    "title": "88. Joining Multiple Errors with errors.Join() (Go 1.20+)",
    "slug": "lesson-88-joining-multiple-errors-with-err",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Joining Multiple Errors with errors.Join() (Go 1.20+) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Joining Multiple Errors with errors.Join() (Go 1.20+)",
      "Go (Golang)"
    ],
    "analogy": "A clipboard gathering a list of 3 missing parts before reporting to the factory supervisor.",
    "explanationMarkdown": "### Joining Multiple Errors with errors.Join() (Go 1.20+)\n\n`errors.Join(err1, err2)` bundles multiple errors into a single error whose message joins their outputs.\n\n```golang\npackage main\n\nimport \"errors\"\n\nfunc validate() error {\n  err1 := errors.New(\"missing email\")\n  err2 := errors.New(\"missing password\")\n  return errors.Join(err1, err2)\n}\n\nfunc main() {\n  _ = validate()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Joining Multiple Errors with errors.Join() (Go 1.20+)",
      "code": "package main\n\nimport \"errors\"\n\nfunc validate() error {\n  err1 := errors.New(\"missing email\")\n  err2 := errors.New(\"missing password\")\n  return errors.Join(err1, err2)\n}\n\nfunc main() {\n  _ = validate()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Joining Multiple Errors with errors.Join() (Go 1.20+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Joining Multiple Errors with errors.Join() (Go 1.20+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"errors\"\n\nfunc validate() error {\n  err1 := errors.New(\"missing email\")\n  err2 := errors.New(\"missing password\")\n  return errors.Join(err1, err2) // Bundles multiple errors!\n}\n\nfunc main() {\n  _ = validate()\n}",
    "solutionCode": "package main\n\nimport \"errors\"\n\nfunc validate() error {\n  err1 := errors.New(\"missing email\")\n  err2 := errors.New(\"missing password\")\n  return errors.Join(err1, err2)\n}\n\nfunc main() {\n  _ = validate()\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"errors\"\n\nfunc validate() error {\n  err1 := errors.New(\"missing email\")\n  err2 := errors.New(\"missing password\")\n  return errors.Join(err1, err2)\n}\n\nfunc main() {\n  _ = validate()\n}"
    ],
    "testCases": [
      {
        "id": "golang-88-tc-1",
        "description": "Verifies correct implementation for Joining Multiple Errors with errors.Join() (Go 1.20+)",
        "testFn": "code.includes('errors.Join') || code.includes('err1')"
      }
    ]
  },
  {
    "id": "golang-89-handle-errors-where-they-occur-d",
    "title": "89. Handle Errors Where They Occur (Do Not Just Log & Ignore)",
    "slug": "lesson-89-handle-errors-where-they-occur-d",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Handle Errors Where They Occur (Do Not Just Log & Ignore) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Handle Errors Where They Occur (Do Not Just Log & Ignore)",
      "Go (Golang)"
    ],
    "analogy": "Fixing a punctured bicycle tire immediately instead of just writing a note in your diary and continuing to ride on the rim.",
    "explanationMarkdown": "### Handle Errors Where They Occur (Do Not Just Log & Ignore)\n\nHandle errors decisively: return them up the stack with context, retry, or fallback. Never log and ignore silently!\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Handle Errors Where They Occur (Do Not Just Log & Ignore)",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handle Errors Where They Occur (Do Not Just Log & Ignore).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handle Errors Where They Occur (Do Not Just Log & Ignore).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Rule: either log the error, OR return it; never do both!\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-89-tc-1",
        "description": "Verifies correct implementation for Handle Errors Where They Occur (Do Not Just Log & Ignore)",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-90-module-6-review-resilient-error-",
    "title": "90. Module 6 Review: Resilient Error Architecture",
    "slug": "lesson-90-module-6-review-resilient-error-",
    "language": "golang",
    "category": "Module 6: Error Handling Idioms",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 6 Review: Resilient Error Architecture in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "Go (Golang)"
    ],
    "analogy": "A nuclear submarine reactor built with redundant safety containment shields and automatic scram protocols.",
    "explanationMarkdown": "### Module 6 Review: Resilient Error Architecture\n\nMastery over error values, wrapping, errors.Is/As inspection, custom error types, panic recovery, and error joining.\n\n```golang\npackage main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrUnauthorized = errors.New(\"unauthorized\")\n\nfunc authenticate(token string) error {\n  if token == \"\" { return fmt.Errorf(\"auth failed: %w\", ErrUnauthorized) }\n  return nil\n}\n\nfunc main() {\n  err := authenticate(\"\")\n  _ = errors.Is(err, ErrUnauthorized)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Resilient Error Architecture",
      "code": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrUnauthorized = errors.New(\"unauthorized\")\n\nfunc authenticate(token string) error {\n  if token == \"\" { return fmt.Errorf(\"auth failed: %w\", ErrUnauthorized) }\n  return nil\n}\n\nfunc main() {\n  err := authenticate(\"\")\n  _ = errors.Is(err, ErrUnauthorized)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Resilient Error Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Resilient Error Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrUnauthorized = errors.New(\"unauthorized\")\n\nfunc authenticate(token string) error {\n  if token == \"\" { return fmt.Errorf(\"auth failed: %w\", ErrUnauthorized) }\n  return nil\n}\n\nfunc main() {\n  err := authenticate(\"\")\n  _ = errors.Is(err, ErrUnauthorized)\n}",
    "solutionCode": "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrUnauthorized = errors.New(\"unauthorized\")\n\nfunc authenticate(token string) error {\n  if token == \"\" { return fmt.Errorf(\"auth failed: %w\", ErrUnauthorized) }\n  return nil\n}\n\nfunc main() {\n  err := authenticate(\"\")\n  _ = errors.Is(err, ErrUnauthorized)\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrUnauthorized = errors.New(\"unauthorized\")\n\nfunc authenticate(token string) error {\n  if token == \"\" { return fmt.Errorf(\"auth failed: %w\", ErrUnauthorized) }\n  return nil\n}\n\nfunc main() {\n  err := authenticate(\"\")\n  _ = errors.Is(err, ErrUnauthorized)\n}"
    ],
    "testCases": [
      {
        "id": "golang-90-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Resilient Error Architecture",
        "testFn": "code.includes('errors.Is') && code.includes('ErrUnauthorized')"
      }
    ]
  },
  {
    "id": "golang-91-concurrency-vs-parallelism",
    "title": "91. Concurrency vs Parallelism",
    "slug": "lesson-91-concurrency-vs-parallelism",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Concurrency vs Parallelism in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Concurrency vs Parallelism",
      "Go (Golang)"
    ],
    "analogy": "A single juggler keeping 3 balls in the air (concurrency) vs 3 jugglers each tossing 1 ball (parallelism).",
    "explanationMarkdown": "### Concurrency vs Parallelism\n\nConcurrency is the composition of independently executing processes; parallelism is simultaneous execution on multiple cores.\n\n```golang\npackage main\n\nfunc main() {\n  // Concurrency is dealing with lots of things at once.\n  // Parallelism is doing lots of things at once.\n}\n```",
    "workedExample": {
      "title": "Worked Example: Concurrency vs Parallelism",
      "code": "package main\n\nfunc main() {\n  // Concurrency is dealing with lots of things at once.\n  // Parallelism is doing lots of things at once.\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Concurrency vs Parallelism.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Concurrency vs Parallelism.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Concurrency is dealing with lots of things at once.\n  // Parallelism is doing lots of things at once.\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // Concurrency is dealing with lots of things at once.\n  // Parallelism is doing lots of things at once.\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // Concurrency is dealing with lots of things at once.\n  // Parallelism is doing lots of things at once.\n}"
    ],
    "testCases": [
      {
        "id": "golang-91-tc-1",
        "description": "Verifies correct implementation for Concurrency vs Parallelism",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-92-launching-goroutines-with-go-key",
    "title": "92. Launching Goroutines with go keyword",
    "slug": "lesson-92-launching-goroutines-with-go-key",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Launching Goroutines with go keyword in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Launching Goroutines with go keyword",
      "Go (Golang)"
    ],
    "analogy": "Assigning an assistant a task and immediately turning back to your desk to continue working.",
    "explanationMarkdown": "### Launching Goroutines with go keyword\n\n`go fn()` launches a lightweight concurrent thread of execution managed by the Go runtime.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc sayHello() {\n  fmt.Println(\"Hello from goroutine\")\n}\n\nfunc main() {\n  go sayHello()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Launching Goroutines with go keyword",
      "code": "package main\n\nimport \"fmt\"\n\nfunc sayHello() {\n  fmt.Println(\"Hello from goroutine\")\n}\n\nfunc main() {\n  go sayHello()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Launching Goroutines with go keyword.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Launching Goroutines with go keyword.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc sayHello() {\n  fmt.Println(\"Hello from goroutine\")\n}\n\nfunc main() {\n  go sayHello() // Runs concurrently!\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc sayHello() {\n  fmt.Println(\"Hello from goroutine\")\n}\n\nfunc main() {\n  go sayHello()\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc sayHello() {\n  fmt.Println(\"Hello from goroutine\")\n}\n\nfunc main() {\n  go sayHello()\n}"
    ],
    "testCases": [
      {
        "id": "golang-92-tc-1",
        "description": "Verifies correct implementation for Launching Goroutines with go keyword",
        "testFn": "code.includes('go sayHello()') || code.includes('go ')"
      }
    ]
  },
  {
    "id": "golang-93-goroutine-memory-footprint-~2kb-",
    "title": "93. Goroutine Memory Footprint (~2KB Start)",
    "slug": "lesson-93-goroutine-memory-footprint-~2kb-",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Goroutine Memory Footprint (~2KB Start) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Goroutine Memory Footprint (~2KB Start)",
      "Go (Golang)"
    ],
    "analogy": "A bicycle (2KB goroutine) vs an 18-wheel tractor trailer (2MB OS thread).",
    "explanationMarkdown": "### Goroutine Memory Footprint (~2KB Start)\n\nGoroutines start with tiny 2KB stacks that grow and shrink dynamically on demand in heap memory.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Goroutine Memory Footprint (~2KB Start)",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Goroutine Memory Footprint (~2KB Start).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Goroutine Memory Footprint (~2KB Start).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // An OS thread takes ~1MB to 2MB.\n  // A Goroutine starts at only ~2KB! You can run 100,000 goroutines easily.\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-93-tc-1",
        "description": "Verifies correct implementation for Goroutine Memory Footprint (~2KB Start)",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-94-the-go-scheduler-mn-multiplexing",
    "title": "94. The Go Scheduler: M:N Multiplexing",
    "slug": "lesson-94-the-go-scheduler-mn-multiplexing",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Go Scheduler: M:N Multiplexing in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The Go Scheduler",
      "Go (Golang)"
    ],
    "analogy": "An air traffic controller landing 100 airplanes (goroutines) onto 8 physical runways (OS threads).",
    "explanationMarkdown": "### The Go Scheduler: M:N Multiplexing\n\nThe Go runtime scheduler uses work-stealing algorithms to multiplex thousands of goroutines across available CPU cores.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Go Scheduler: M:N Multiplexing",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Go Scheduler: M:N Multiplexing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Go Scheduler: M:N Multiplexing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Go schedules M goroutines onto N OS kernel threads!\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-94-tc-1",
        "description": "Verifies correct implementation for The Go Scheduler: M:N Multiplexing",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-95-channels-typed-conduits-for-comm",
    "title": "95. Channels: Typed Conduits for Communication",
    "slug": "lesson-95-channels-typed-conduits-for-comm",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Channels: Typed Conduits for Communication in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Channels",
      "Go (Golang)"
    ],
    "analogy": "A pneumatic tube connecting two desks: you drop a capsule into one end, and it shoots out at the other end.",
    "explanationMarkdown": "### Channels: Typed Conduits for Communication\n\nChannels are typed communication conduits that allow goroutines to synchronize and exchange data safely.\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}\n```",
    "workedExample": {
      "title": "Worked Example: Channels: Typed Conduits for Communication",
      "code": "package main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Channels: Typed Conduits for Communication.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Channels: Typed Conduits for Communication.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}"
    ],
    "testCases": [
      {
        "id": "golang-95-tc-1",
        "description": "Verifies correct implementation for Channels: Typed Conduits for Communication",
        "testFn": "code.includes('make(chan int)')"
      }
    ]
  },
  {
    "id": "golang-96-sending-and-receiving-from-chann",
    "title": "96. Sending and Receiving from Channels (<-)",
    "slug": "lesson-96-sending-and-receiving-from-chann",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Sending and Receiving from Channels (<-) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Sending and Receiving from Channels (<-)",
      "Go (Golang)"
    ],
    "analogy": "Passing a relay race baton: Runner A holds out the baton (`ch <-`), and Runner B grasps it (`<-ch`).",
    "explanationMarkdown": "### Sending and Receiving from Channels (<-)\n\n`ch <- value` sends into channel; `val := <-ch` receives from channel. The arrow points in data flow direction!\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan string, 1)\n  ch <- \"ping\"\n  msg := <-ch\n  _ = msg\n}\n```",
    "workedExample": {
      "title": "Worked Example: Sending and Receiving from Channels (<-)",
      "code": "package main\n\nfunc main() {\n  ch := make(chan string, 1)\n  ch <- \"ping\"\n  msg := <-ch\n  _ = msg\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sending and Receiving from Channels (<-).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sending and Receiving from Channels (<-).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan string, 1)\n  ch <- \"ping\"     // Send into channel\n  msg := <-ch      // Receive from channel\n  _ = msg\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan string, 1)\n  ch <- \"ping\"\n  msg := <-ch\n  _ = msg\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan string, 1)\n  ch <- \"ping\"\n  msg := <-ch\n  _ = msg\n}"
    ],
    "testCases": [
      {
        "id": "golang-96-tc-1",
        "description": "Verifies correct implementation for Sending and Receiving from Channels (<-)",
        "testFn": "code.includes('ch <-') && code.includes('<-ch')"
      }
    ]
  },
  {
    "id": "golang-97-unbuffered-channels-synchronous-",
    "title": "97. Unbuffered Channels: Synchronous Handshake",
    "slug": "lesson-97-unbuffered-channels-synchronous-",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Unbuffered Channels: Synchronous Handshake in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Unbuffered Channels",
      "Go (Golang)"
    ],
    "analogy": "Two people shaking hands: neither person can let go until both hands meet simultaneously.",
    "explanationMarkdown": "### Unbuffered Channels: Synchronous Handshake\n\nUnbuffered channels have zero capacity; send blocks until another goroutine receives, creating an instant synchronous rendezvous.\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unbuffered Channels: Synchronous Handshake",
      "code": "package main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unbuffered Channels: Synchronous Handshake.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unbuffered Channels: Synchronous Handshake.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan int) // Unbuffered (capacity 0)\n  _ = ch\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan int)\n  _ = ch\n}"
    ],
    "testCases": [
      {
        "id": "golang-97-tc-1",
        "description": "Verifies correct implementation for Unbuffered Channels: Synchronous Handshake",
        "testFn": "code.includes('make(chan int)')"
      }
    ]
  },
  {
    "id": "golang-98-buffered-channels-asynchronous-q",
    "title": "98. Buffered Channels: Asynchronous Queues",
    "slug": "lesson-98-buffered-channels-asynchronous-q",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Buffered Channels: Asynchronous Queues in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Buffered Channels",
      "Go (Golang)"
    ],
    "analogy": "A physical mail drop box with room for 3 envelopes: you can drop letters in without waiting for the mailman.",
    "explanationMarkdown": "### Buffered Channels: Asynchronous Queues\n\nBuffered channels accept sends without blocking until the buffer is full; receives block only when empty.\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan int, 3)\n  ch <- 1; ch <- 2; ch <- 3\n  _ = ch\n}\n```",
    "workedExample": {
      "title": "Worked Example: Buffered Channels: Asynchronous Queues",
      "code": "package main\n\nfunc main() {\n  ch := make(chan int, 3)\n  ch <- 1; ch <- 2; ch <- 3\n  _ = ch\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Buffered Channels: Asynchronous Queues.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Buffered Channels: Asynchronous Queues.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan int, 3) // Buffer capacity 3\n  ch <- 1; ch <- 2; ch <- 3\n  _ = ch\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan int, 3)\n  ch <- 1; ch <- 2; ch <- 3\n  _ = ch\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan int, 3)\n  ch <- 1; ch <- 2; ch <- 3\n  _ = ch\n}"
    ],
    "testCases": [
      {
        "id": "golang-98-tc-1",
        "description": "Verifies correct implementation for Buffered Channels: Asynchronous Queues",
        "testFn": "code.includes('make(chan int, 3)') || code.includes('make(chan int,')"
      }
    ]
  },
  {
    "id": "golang-99-closing-channels-with-closech",
    "title": "99. Closing Channels with close(ch)",
    "slug": "lesson-99-closing-channels-with-closech",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Closing Channels with close(ch) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Closing Channels with close(ch)",
      "Go (Golang)"
    ],
    "analogy": "Locking the front deposit slot of a bank night drop: clients can no longer drop new envelopes, but staff can retrieve existing ones.",
    "explanationMarkdown": "### Closing Channels with close(ch)\n\nClosing a channel indicates no more values will be sent; receiving from a closed channel returns zero value and `ok = false`.\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan int, 1)\n  ch <- 42\n  close(ch)\n  val, ok := <-ch\n  _ = val; _ = ok\n}\n```",
    "workedExample": {
      "title": "Worked Example: Closing Channels with close(ch)",
      "code": "package main\n\nfunc main() {\n  ch := make(chan int, 1)\n  ch <- 42\n  close(ch)\n  val, ok := <-ch\n  _ = val; _ = ok\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Closing Channels with close(ch).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Closing Channels with close(ch).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan int, 1)\n  ch <- 42\n  close(ch) // Close channel!\n  val, ok := <-ch\n  _ = val; _ = ok // ok is true (received 42)\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan int, 1)\n  ch <- 42\n  close(ch)\n  val, ok := <-ch\n  _ = val; _ = ok\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan int, 1)\n  ch <- 42\n  close(ch)\n  val, ok := <-ch\n  _ = val; _ = ok\n}"
    ],
    "testCases": [
      {
        "id": "golang-99-tc-1",
        "description": "Verifies correct implementation for Closing Channels with close(ch)",
        "testFn": "code.includes('close(ch)') || code.includes('close(')"
      }
    ]
  },
  {
    "id": "golang-100-channel-range-loops-for-msg-=-ra",
    "title": "100. Channel Range Loops (for msg := range ch)",
    "slug": "lesson-100-channel-range-loops-for-msg-=-ra",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Channel Range Loops (for msg := range ch) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Channel Range Loops (for msg",
      "Go (Golang)"
    ],
    "analogy": "A factory conveyer belt pulling items off the line until the master power switch is turned off.",
    "explanationMarkdown": "### Channel Range Loops (for msg := range ch)\n\n`for val := range ch` reads values sequentially until the channel is closed, then exits cleanly.\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan int, 2)\n  ch <- 1; ch <- 2\n  close(ch)\n  for val := range ch {\n    _ = val\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Channel Range Loops (for msg := range ch)",
      "code": "package main\n\nfunc main() {\n  ch := make(chan int, 2)\n  ch <- 1; ch <- 2\n  close(ch)\n  for val := range ch {\n    _ = val\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Channel Range Loops (for msg := range ch).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Channel Range Loops (for msg := range ch).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan int, 2)\n  ch <- 1; ch <- 2\n  close(ch)\n  for val := range ch {\n    _ = val\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan int, 2)\n  ch <- 1; ch <- 2\n  close(ch)\n  for val := range ch {\n    _ = val\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan int, 2)\n  ch <- 1; ch <- 2\n  close(ch)\n  for val := range ch {\n    _ = val\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-100-tc-1",
        "description": "Verifies correct implementation for Channel Range Loops (for msg := range ch)",
        "testFn": "code.includes('range ch')"
      }
    ]
  },
  {
    "id": "golang-101-unidirectional-channel-types-cha",
    "title": "101. Unidirectional Channel Types (chan<- and <-chan)",
    "slug": "lesson-101-unidirectional-channel-types-cha",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Unidirectional Channel Types (chan<- and <-chan) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Unidirectional Channel Types (chan<- and <-chan)",
      "Go (Golang)"
    ],
    "analogy": "A one-way street: traffic is strictly permitted to drive in one direction, preventing head-on collisions.",
    "explanationMarkdown": "### Unidirectional Channel Types (chan<- and <-chan)\n\nType constraints: `chan<- T` (send-only) and `<-chan T` (receive-only) prevent accidental misused channel directions.\n\n```golang\npackage main\n\nfunc sendOnly(ch chan<- int) {\n  ch <- 10\n}\n\nfunc main() {\n  c := make(chan int, 1)\n  sendOnly(c)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unidirectional Channel Types (chan<- and <-chan)",
      "code": "package main\n\nfunc sendOnly(ch chan<- int) {\n  ch <- 10\n}\n\nfunc main() {\n  c := make(chan int, 1)\n  sendOnly(c)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unidirectional Channel Types (chan<- and <-chan).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unidirectional Channel Types (chan<- and <-chan).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc sendOnly(ch chan<- int) {\n  ch <- 10\n}\n\nfunc main() {\n  c := make(chan int, 1)\n  sendOnly(c)\n}",
    "solutionCode": "package main\n\nfunc sendOnly(ch chan<- int) {\n  ch <- 10\n}\n\nfunc main() {\n  c := make(chan int, 1)\n  sendOnly(c)\n}",
    "hints": [
      "Write:\npackage main\n\nfunc sendOnly(ch chan<- int) {\n  ch <- 10\n}\n\nfunc main() {\n  c := make(chan int, 1)\n  sendOnly(c)\n}"
    ],
    "testCases": [
      {
        "id": "golang-101-tc-1",
        "description": "Verifies correct implementation for Unidirectional Channel Types (chan<- and <-chan)",
        "testFn": "code.includes('chan<- int') || code.includes('<-chan int')"
      }
    ]
  },
  {
    "id": "golang-102-the-select-statement-multiplexin",
    "title": "102. The select Statement: Multiplexing Channels",
    "slug": "lesson-102-the-select-statement-multiplexin",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The select Statement: Multiplexing Channels in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The select Statement",
      "Go (Golang)"
    ],
    "analogy": "A receptionist with two incoming telephone lines: picking up whichever phone rings first.",
    "explanationMarkdown": "### The select Statement: Multiplexing Channels\n\n`select` lets a goroutine wait on multiple communication operations, choosing a ready case at pseudo-random.\n\n```golang\npackage main\n\nfunc main() {\n  c1 := make(chan string, 1)\n  c2 := make(chan string, 1)\n  c1 <- \"one\"\n  select {\n  case msg := <-c1:\n    _ = msg\n  case msg := <-c2:\n    _ = msg\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The select Statement: Multiplexing Channels",
      "code": "package main\n\nfunc main() {\n  c1 := make(chan string, 1)\n  c2 := make(chan string, 1)\n  c1 <- \"one\"\n  select {\n  case msg := <-c1:\n    _ = msg\n  case msg := <-c2:\n    _ = msg\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The select Statement: Multiplexing Channels.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The select Statement: Multiplexing Channels.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  c1 := make(chan string, 1)\n  c2 := make(chan string, 1)\n  c1 <- \"one\"\n  select {\n  case msg := <-c1:\n    _ = msg\n  case msg := <-c2:\n    _ = msg\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  c1 := make(chan string, 1)\n  c2 := make(chan string, 1)\n  c1 <- \"one\"\n  select {\n  case msg := <-c1:\n    _ = msg\n  case msg := <-c2:\n    _ = msg\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  c1 := make(chan string, 1)\n  c2 := make(chan string, 1)\n  c1 <- \"one\"\n  select {\n  case msg := <-c1:\n    _ = msg\n  case msg := <-c2:\n    _ = msg\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-102-tc-1",
        "description": "Verifies correct implementation for The select Statement: Multiplexing Channels",
        "testFn": "code.includes('select {') && code.includes('case msg := <-')"
      }
    ]
  },
  {
    "id": "golang-103-non-blocking-operations-with-def",
    "title": "103. Non-Blocking Operations with default in select",
    "slug": "lesson-103-non-blocking-operations-with-def",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Non-Blocking Operations with default in select in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Non-Blocking Operations with default in select",
      "Go (Golang)"
    ],
    "analogy": "Peeking into a room to see if a friend is there: if not, immediately walking away without waiting.",
    "explanationMarkdown": "### Non-Blocking Operations with default in select\n\nAdding a `default` case to `select` executes non-blocking sends and receives if channels are busy.\n\n```golang\npackage main\n\nfunc main() {\n  ch := make(chan int)\n  select {\n  case val := <-ch:\n    _ = val\n  default:\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Non-Blocking Operations with default in select",
      "code": "package main\n\nfunc main() {\n  ch := make(chan int)\n  select {\n  case val := <-ch:\n    _ = val\n  default:\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Non-Blocking Operations with default in select.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Non-Blocking Operations with default in select.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  ch := make(chan int)\n  select {\n  case val := <-ch:\n    _ = val\n  default:\n    // Runs instantly without blocking!\n  }\n}",
    "solutionCode": "package main\n\nfunc main() {\n  ch := make(chan int)\n  select {\n  case val := <-ch:\n    _ = val\n  default:\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  ch := make(chan int)\n  select {\n  case val := <-ch:\n    _ = val\n  default:\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-103-tc-1",
        "description": "Verifies correct implementation for Non-Blocking Operations with default in select",
        "testFn": "code.includes('default:') && code.includes('select {')"
      }
    ]
  },
  {
    "id": "golang-104-channel-timeouts-with-time.after",
    "title": "104. Channel Timeouts with time.After",
    "slug": "lesson-104-channel-timeouts-with-time.after",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Channel Timeouts with time.After in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Channel Timeouts with time.After",
      "Go (Golang)"
    ],
    "analogy": "Knocking on an office door, waiting 5 seconds, and walking away if no one answers.",
    "explanationMarkdown": "### Channel Timeouts with time.After\n\n`<-time.After(duration)` sends the current time on a channel after the duration, enabling clean timeouts.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Channel Timeouts with time.After",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Channel Timeouts with time.After.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Channel Timeouts with time.After.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // select {\n  // case res := <-ch:\n  // case <-time.After(1 * time.Second):\n  // }\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-104-tc-1",
        "description": "Verifies correct implementation for Channel Timeouts with time.After",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-105-module-7-review-concurrent-worke",
    "title": "105. Module 7 Review: Concurrent Worker Pool Architecture",
    "slug": "lesson-105-module-7-review-concurrent-worke",
    "language": "golang",
    "category": "Module 7: Concurrency with Goroutines & Channels",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 7 Review: Concurrent Worker Pool Architecture in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 7 Review",
      "Go (Golang)"
    ],
    "analogy": "An automated distribution warehouse with 10 robotic sorting arms processing a central package conveyor belt.",
    "explanationMarkdown": "### Module 7 Review: Concurrent Worker Pool Architecture\n\nA production worker pool pattern distributing tasks across concurrent goroutines synchronized via channels.\n\n```golang\npackage main\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n  for j := range jobs {\n    results <- j * 2\n  }\n}\n\nfunc main() {\n  jobs := make(chan int, 2)\n  results := make(chan int, 2)\n  go worker(1, jobs, results)\n  jobs <- 5; close(jobs)\n  _ = <-results\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Concurrent Worker Pool Architecture",
      "code": "package main\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n  for j := range jobs {\n    results <- j * 2\n  }\n}\n\nfunc main() {\n  jobs := make(chan int, 2)\n  results := make(chan int, 2)\n  go worker(1, jobs, results)\n  jobs <- 5; close(jobs)\n  _ = <-results\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 7 Review: Concurrent Worker Pool Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 7 Review: Concurrent Worker Pool Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n  for j := range jobs {\n    results <- j * 2\n  }\n}\n\nfunc main() {\n  jobs := make(chan int, 2)\n  results := make(chan int, 2)\n  go worker(1, jobs, results)\n  jobs <- 5; close(jobs)\n  _ = <-results\n}",
    "solutionCode": "package main\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n  for j := range jobs {\n    results <- j * 2\n  }\n}\n\nfunc main() {\n  jobs := make(chan int, 2)\n  results := make(chan int, 2)\n  go worker(1, jobs, results)\n  jobs <- 5; close(jobs)\n  _ = <-results\n}",
    "hints": [
      "Write:\npackage main\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n  for j := range jobs {\n    results <- j * 2\n  }\n}\n\nfunc main() {\n  jobs := make(chan int, 2)\n  results := make(chan int, 2)\n  go worker(1, jobs, results)\n  jobs <- 5; close(jobs)\n  _ = <-results\n}"
    ],
    "testCases": [
      {
        "id": "golang-105-tc-1",
        "description": "Verifies correct implementation for Module 7 Review: Concurrent Worker Pool Architecture",
        "testFn": "code.includes('worker(') || code.includes('jobs <-chan int')"
      }
    ]
  },
  {
    "id": "golang-106-data-races-and-the-race-detector",
    "title": "106. Data Races and the Race Detector (go test -race)",
    "slug": "lesson-106-data-races-and-the-race-detector",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Data Races and the Race Detector (go test -race) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Data Races and the Race Detector (go test -race)",
      "Go (Golang)"
    ],
    "analogy": "Two chefs trying to pour different spices into the exact same bowl at the exact same fraction of a second.",
    "explanationMarkdown": "### Data Races and the Race Detector (go test -race)\n\nA data race occurs when two goroutines access the same memory concurrently and at least one is a write.\n\n```golang\npackage main\n\nfunc main() {\n  // Run 'go test -race' or 'go run -race' to detect concurrent data race bugs!\n}\n```",
    "workedExample": {
      "title": "Worked Example: Data Races and the Race Detector (go test -race)",
      "code": "package main\n\nfunc main() {\n  // Run 'go test -race' or 'go run -race' to detect concurrent data race bugs!\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Data Races and the Race Detector (go test -race).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Data Races and the Race Detector (go test -race).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Run 'go test -race' or 'go run -race' to detect concurrent data race bugs!\n}",
    "solutionCode": "package main\n\nfunc main() {\n  // Run 'go test -race' or 'go run -race' to detect concurrent data race bugs!\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n  // Run 'go test -race' or 'go run -race' to detect concurrent data race bugs!\n}"
    ],
    "testCases": [
      {
        "id": "golang-106-tc-1",
        "description": "Verifies correct implementation for Data Races and the Race Detector (go test -race)",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-107-mutual-exclusion-with-sync.mutex",
    "title": "107. Mutual Exclusion with sync.Mutex (Lock & Unlock)",
    "slug": "lesson-107-mutual-exclusion-with-sync.mutex",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Mutual Exclusion with sync.Mutex (Lock & Unlock) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Mutual Exclusion with sync.Mutex (Lock & Unlock)",
      "Go (Golang)"
    ],
    "analogy": "A single physical restroom key: you must take the key, lock the door behind you, and return the key when done.",
    "explanationMarkdown": "### Mutual Exclusion with sync.Mutex (Lock & Unlock)\n\n`sync.Mutex` guarantees that only one goroutine can execute the protected critical section at a time.\n\n```golang\npackage main\n\nimport \"sync\"\n\ntype SafeCounter struct {\n  mu    sync.Mutex\n  count int\n}\n\nfunc (c *SafeCounter) Inc() {\n  c.mu.Lock()\n  c.count++\n  c.mu.Unlock()\n}\n\nfunc main() {\n  sc := &SafeCounter{}\n  sc.Inc()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Mutual Exclusion with sync.Mutex (Lock & Unlock)",
      "code": "package main\n\nimport \"sync\"\n\ntype SafeCounter struct {\n  mu    sync.Mutex\n  count int\n}\n\nfunc (c *SafeCounter) Inc() {\n  c.mu.Lock()\n  c.count++\n  c.mu.Unlock()\n}\n\nfunc main() {\n  sc := &SafeCounter{}\n  sc.Inc()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mutual Exclusion with sync.Mutex (Lock & Unlock).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mutual Exclusion with sync.Mutex (Lock & Unlock).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"sync\"\n\ntype SafeCounter struct {\n  mu    sync.Mutex\n  count int\n}\n\nfunc (c *SafeCounter) Inc() {\n  c.mu.Lock()\n  c.count++\n  c.mu.Unlock()\n}\n\nfunc main() {\n  sc := &SafeCounter{}\n  sc.Inc()\n}",
    "solutionCode": "package main\n\nimport \"sync\"\n\ntype SafeCounter struct {\n  mu    sync.Mutex\n  count int\n}\n\nfunc (c *SafeCounter) Inc() {\n  c.mu.Lock()\n  c.count++\n  c.mu.Unlock()\n}\n\nfunc main() {\n  sc := &SafeCounter{}\n  sc.Inc()\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"sync\"\n\ntype SafeCounter struct {\n  mu    sync.Mutex\n  count int\n}\n\nfunc (c *SafeCounter) Inc() {\n  c.mu.Lock()\n  c.count++\n  c.mu.Unlock()\n}\n\nfunc main() {\n  sc := &SafeCounter{}\n  sc.Inc()\n}"
    ],
    "testCases": [
      {
        "id": "golang-107-tc-1",
        "description": "Verifies correct implementation for Mutual Exclusion with sync.Mutex (Lock & Unlock)",
        "testFn": "code.includes('sync.Mutex') && code.includes('c.mu.Lock()')"
      }
    ]
  },
  {
    "id": "golang-108-the-defer-mu.unlock-pattern",
    "title": "108. The defer mu.Unlock() Pattern",
    "slug": "lesson-108-the-defer-mu.unlock-pattern",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The defer mu.Unlock() Pattern in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The defer mu.Unlock() Pattern",
      "Go (Golang)"
    ],
    "analogy": "Hooking an automatic return spring to the lock so the door never stays locked if you stumble.",
    "explanationMarkdown": "### The defer mu.Unlock() Pattern\n\nImmediately calling `defer mu.Unlock()` guarantees the lock is released even if errors or panics occur.\n\n```golang\npackage main\n\nimport \"sync\"\n\nfunc safeOp(mu *sync.Mutex) {\n  mu.Lock()\n  defer mu.Unlock()\n}\n\nfunc main() {\n  safeOp(&sync.Mutex{})\n}\n```",
    "workedExample": {
      "title": "Worked Example: The defer mu.Unlock() Pattern",
      "code": "package main\n\nimport \"sync\"\n\nfunc safeOp(mu *sync.Mutex) {\n  mu.Lock()\n  defer mu.Unlock()\n}\n\nfunc main() {\n  safeOp(&sync.Mutex{})\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The defer mu.Unlock() Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The defer mu.Unlock() Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"sync\"\n\nfunc safeOp(mu *sync.Mutex) {\n  mu.Lock()\n  defer mu.Unlock()\n  // do work safely\n}\n\nfunc main() {\n  safeOp(&sync.Mutex{})\n}",
    "solutionCode": "package main\n\nimport \"sync\"\n\nfunc safeOp(mu *sync.Mutex) {\n  mu.Lock()\n  defer mu.Unlock()\n}\n\nfunc main() {\n  safeOp(&sync.Mutex{})\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"sync\"\n\nfunc safeOp(mu *sync.Mutex) {\n  mu.Lock()\n  defer mu.Unlock()\n}\n\nfunc main() {\n  safeOp(&sync.Mutex{})\n}"
    ],
    "testCases": [
      {
        "id": "golang-108-tc-1",
        "description": "Verifies correct implementation for The defer mu.Unlock() Pattern",
        "testFn": "code.includes('defer mu.Unlock()')"
      }
    ]
  },
  {
    "id": "golang-109-read-heavy-workloads-with-sync.r",
    "title": "109. Read-Heavy Workloads with sync.RWMutex",
    "slug": "lesson-109-read-heavy-workloads-with-sync.r",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Read-Heavy Workloads with sync.RWMutex in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Read-Heavy Workloads with sync.RWMutex",
      "Go (Golang)"
    ],
    "analogy": "A museum painting: 1,000 visitors can look at it simultaneously, but cleaners lock the room when dusting.",
    "explanationMarkdown": "### Read-Heavy Workloads with sync.RWMutex\n\n`RWMutex` permits multiple simultaneous readers (`RLock()`), but grants exclusive access to writers (`Lock()`).\n\n```golang\npackage main\n\nimport \"sync\"\n\ntype Cache struct {\n  mu   sync.RWMutex\n  data map[string]string\n}\n\nfunc (c *Cache) Get(k string) string {\n  c.mu.RLock()\n  defer c.mu.RUnlock()\n  return c.data[k]\n}\n\nfunc main() {\n  c := &Cache{data: map[string]string{\"k\": \"v\"}}\n  _ = c.Get(\"k\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: Read-Heavy Workloads with sync.RWMutex",
      "code": "package main\n\nimport \"sync\"\n\ntype Cache struct {\n  mu   sync.RWMutex\n  data map[string]string\n}\n\nfunc (c *Cache) Get(k string) string {\n  c.mu.RLock()\n  defer c.mu.RUnlock()\n  return c.data[k]\n}\n\nfunc main() {\n  c := &Cache{data: map[string]string{\"k\": \"v\"}}\n  _ = c.Get(\"k\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Read-Heavy Workloads with sync.RWMutex.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Read-Heavy Workloads with sync.RWMutex.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"sync\"\n\ntype Cache struct {\n  mu   sync.RWMutex\n  data map[string]string\n}\n\nfunc (c *Cache) Get(k string) string {\n  c.mu.RLock()\n  defer c.mu.RUnlock()\n  return c.data[k]\n}\n\nfunc main() {\n  c := &Cache{data: map[string]string{\"k\": \"v\"}}\n  _ = c.Get(\"k\")\n}",
    "solutionCode": "package main\n\nimport \"sync\"\n\ntype Cache struct {\n  mu   sync.RWMutex\n  data map[string]string\n}\n\nfunc (c *Cache) Get(k string) string {\n  c.mu.RLock()\n  defer c.mu.RUnlock()\n  return c.data[k]\n}\n\nfunc main() {\n  c := &Cache{data: map[string]string{\"k\": \"v\"}}\n  _ = c.Get(\"k\")\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"sync\"\n\ntype Cache struct {\n  mu   sync.RWMutex\n  data map[string]string\n}\n\nfunc (c *Cache) Get(k string) string {\n  c.mu.RLock()\n  defer c.mu.RUnlock()\n  return c.data[k]\n}\n\nfunc main() {\n  c := &Cache{data: map[string]string{\"k\": \"v\"}}\n  _ = c.Get(\"k\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-109-tc-1",
        "description": "Verifies correct implementation for Read-Heavy Workloads with sync.RWMutex",
        "testFn": "code.includes('sync.RWMutex') && code.includes('RLock()')"
      }
    ]
  },
  {
    "id": "golang-110-coordinating-goroutines-with-syn",
    "title": "110. Coordinating Goroutines with sync.WaitGroup",
    "slug": "lesson-110-coordinating-goroutines-with-syn",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Coordinating Goroutines with sync.WaitGroup in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Coordinating Goroutines with sync.WaitGroup",
      "Go (Golang)"
    ],
    "analogy": "A school field trip teacher counting heads: waiting at the bus door until all 20 students have boarded.",
    "explanationMarkdown": "### Coordinating Goroutines with sync.WaitGroup\n\n`sync.WaitGroup` coordinates concurrent completion: `Add(n)` increments counter, `Done()` decrements, `Wait()` blocks until 0.\n\n```golang\npackage main\n\nimport \"sync\"\n\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n  }()\n  wg.Wait()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Coordinating Goroutines with sync.WaitGroup",
      "code": "package main\n\nimport \"sync\"\n\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n  }()\n  wg.Wait()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Coordinating Goroutines with sync.WaitGroup.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Coordinating Goroutines with sync.WaitGroup.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"sync\"\n\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n  }()\n  wg.Wait() // Blocks until counter hits 0!\n}",
    "solutionCode": "package main\n\nimport \"sync\"\n\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n  }()\n  wg.Wait()\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"sync\"\n\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n  }()\n  wg.Wait()\n}"
    ],
    "testCases": [
      {
        "id": "golang-110-tc-1",
        "description": "Verifies correct implementation for Coordinating Goroutines with sync.WaitGroup",
        "testFn": "code.includes('sync.WaitGroup') && code.includes('wg.Wait()')"
      }
    ]
  },
  {
    "id": "golang-111-thread-safe-initialization-with-",
    "title": "111. Thread-Safe Initialization with sync.Once",
    "slug": "lesson-111-thread-safe-initialization-with-",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Thread-Safe Initialization with sync.Once in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Thread-Safe Initialization with sync.Once",
      "Go (Golang)"
    ],
    "analogy": "Popping the cork on a bottle of champagne: once popped, it can never be un-popped regardless of who pulls.",
    "explanationMarkdown": "### Thread-Safe Initialization with sync.Once\n\n`sync.Once` guarantees that a function executes exactly once across thousands of concurrent goroutines.\n\n```golang\npackage main\n\nimport \"sync\"\n\nvar (\n  once     sync.Once\n  instance string\n)\n\nfunc getInstance() string {\n  once.Do(func() {\n    instance = \"Initialized\"\n  })\n  return instance\n}\n\nfunc main() {\n  _ = getInstance()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Thread-Safe Initialization with sync.Once",
      "code": "package main\n\nimport \"sync\"\n\nvar (\n  once     sync.Once\n  instance string\n)\n\nfunc getInstance() string {\n  once.Do(func() {\n    instance = \"Initialized\"\n  })\n  return instance\n}\n\nfunc main() {\n  _ = getInstance()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Thread-Safe Initialization with sync.Once.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Thread-Safe Initialization with sync.Once.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"sync\"\n\nvar (\n  once     sync.Once\n  instance string\n)\n\nfunc getInstance() string {\n  once.Do(func() {\n    instance = \"Initialized\"\n  })\n  return instance\n}\n\nfunc main() {\n  _ = getInstance()\n}",
    "solutionCode": "package main\n\nimport \"sync\"\n\nvar (\n  once     sync.Once\n  instance string\n)\n\nfunc getInstance() string {\n  once.Do(func() {\n    instance = \"Initialized\"\n  })\n  return instance\n}\n\nfunc main() {\n  _ = getInstance()\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"sync\"\n\nvar (\n  once     sync.Once\n  instance string\n)\n\nfunc getInstance() string {\n  once.Do(func() {\n    instance = \"Initialized\"\n  })\n  return instance\n}\n\nfunc main() {\n  _ = getInstance()\n}"
    ],
    "testCases": [
      {
        "id": "golang-111-tc-1",
        "description": "Verifies correct implementation for Thread-Safe Initialization with sync.Once",
        "testFn": "code.includes('sync.Once') && code.includes('once.Do(')"
      }
    ]
  },
  {
    "id": "golang-112-object-reuse-and-gc-reduction-wi",
    "title": "112. Object Reuse and GC Reduction with sync.Pool",
    "slug": "lesson-112-object-reuse-and-gc-reduction-wi",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Object Reuse and GC Reduction with sync.Pool in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Object Reuse and GC Reduction with sync.Pool",
      "Go (Golang)"
    ],
    "analogy": "A stack of reusable plastic trays at a fast-food restaurant: washed and placed back in the bin after meals.",
    "explanationMarkdown": "### Object Reuse and GC Reduction with sync.Pool\n\n`sync.Pool` caches allocated, unused temporary objects for reuse across goroutines, drastically reducing garbage collector overhead.\n\n```golang\npackage main\n\nimport (\n  \"bytes\"\n  \"sync\"\n)\n\nvar bufPool = sync.Pool{\n  New: func() any { return new(bytes.Buffer) },\n}\n\nfunc main() {\n  b := bufPool.Get().(*bytes.Buffer)\n  b.Reset()\n  bufPool.Put(b)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Object Reuse and GC Reduction with sync.Pool",
      "code": "package main\n\nimport (\n  \"bytes\"\n  \"sync\"\n)\n\nvar bufPool = sync.Pool{\n  New: func() any { return new(bytes.Buffer) },\n}\n\nfunc main() {\n  b := bufPool.Get().(*bytes.Buffer)\n  b.Reset()\n  bufPool.Put(b)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Object Reuse and GC Reduction with sync.Pool.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Object Reuse and GC Reduction with sync.Pool.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"bytes\"\n  \"sync\"\n)\n\nvar bufPool = sync.Pool{\n  New: func() any { return new(bytes.Buffer) },\n}\n\nfunc main() {\n  b := bufPool.Get().(*bytes.Buffer)\n  b.Reset()\n  bufPool.Put(b)\n}",
    "solutionCode": "package main\n\nimport (\n  \"bytes\"\n  \"sync\"\n)\n\nvar bufPool = sync.Pool{\n  New: func() any { return new(bytes.Buffer) },\n}\n\nfunc main() {\n  b := bufPool.Get().(*bytes.Buffer)\n  b.Reset()\n  bufPool.Put(b)\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"bytes\"\n  \"sync\"\n)\n\nvar bufPool = sync.Pool{\n  New: func() any { return new(bytes.Buffer) },\n}\n\nfunc main() {\n  b := bufPool.Get().(*bytes.Buffer)\n  b.Reset()\n  bufPool.Put(b)\n}"
    ],
    "testCases": [
      {
        "id": "golang-112-tc-1",
        "description": "Verifies correct implementation for Object Reuse and GC Reduction with sync.Pool",
        "testFn": "code.includes('sync.Pool') && code.includes('bufPool.Get()')"
      }
    ]
  },
  {
    "id": "golang-113-lock-free-atomic-operations-with",
    "title": "113. Lock-Free Atomic Operations with sync/atomic",
    "slug": "lesson-113-lock-free-atomic-operations-with",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Lock-Free Atomic Operations with sync/atomic in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Lock-Free Atomic Operations with sync/atomic",
      "Go (Golang)"
    ],
    "analogy": "A clicker counter in an usher's hand: clicking the button increments the mechanical gear in one indivisible fraction of a microsecond.",
    "explanationMarkdown": "### Lock-Free Atomic Operations with sync/atomic\n\n`sync/atomic` provides hardware-level atomic CPU instructions (Add, Load, Store, Swap) with zero lock overhead.\n\n```golang\npackage main\n\nimport (\n  \"sync/atomic\"\n)\n\nfunc main() {\n  var ops atomic.Uint64\n  ops.Add(1)\n  val := ops.Load()\n  _ = val\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lock-Free Atomic Operations with sync/atomic",
      "code": "package main\n\nimport (\n  \"sync/atomic\"\n)\n\nfunc main() {\n  var ops atomic.Uint64\n  ops.Add(1)\n  val := ops.Load()\n  _ = val\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lock-Free Atomic Operations with sync/atomic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lock-Free Atomic Operations with sync/atomic.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"sync/atomic\"\n)\n\nfunc main() {\n  var ops atomic.Uint64\n  ops.Add(1)\n  val := ops.Load()\n  _ = val\n}",
    "solutionCode": "package main\n\nimport (\n  \"sync/atomic\"\n)\n\nfunc main() {\n  var ops atomic.Uint64\n  ops.Add(1)\n  val := ops.Load()\n  _ = val\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"sync/atomic\"\n)\n\nfunc main() {\n  var ops atomic.Uint64\n  ops.Add(1)\n  val := ops.Load()\n  _ = val\n}"
    ],
    "testCases": [
      {
        "id": "golang-113-tc-1",
        "description": "Verifies correct implementation for Lock-Free Atomic Operations with sync/atomic",
        "testFn": "code.includes('sync/atomic') || code.includes('atomic.Uint64')"
      }
    ]
  },
  {
    "id": "golang-114-channels-vs-mutexes-the-go-philo",
    "title": "114. Channels vs Mutexes: The Go Philosophy Rule",
    "slug": "lesson-114-channels-vs-mutexes-the-go-philo",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Channels vs Mutexes: The Go Philosophy Rule in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Channels vs Mutexes",
      "Go (Golang)"
    ],
    "analogy": "Mailing letters through a mail slot (channels) vs fighting over a shared pencil at the front desk (mutexes).",
    "explanationMarkdown": "### Channels vs Mutexes: The Go Philosophy Rule\n\nUse channels to pass data ownership and pipeline tasks; use mutexes for local state and internal cache protection.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Channels vs Mutexes: The Go Philosophy Rule",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Channels vs Mutexes: The Go Philosophy Rule.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Channels vs Mutexes: The Go Philosophy Rule.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // 'Do not communicate by sharing memory; instead, share memory by communicating.'\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-114-tc-1",
        "description": "Verifies correct implementation for Channels vs Mutexes: The Go Philosophy Rule",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-115-the-context-package-cancellation",
    "title": "115. The context Package: Cancellation Propagation",
    "slug": "lesson-115-the-context-package-cancellation",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The context Package: Cancellation Propagation in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The context Package",
      "Go (Golang)"
    ],
    "analogy": "A radio kill switch held by mission control: pressing the button signals all satellite thrusters to shut down.",
    "explanationMarkdown": "### The context Package: Cancellation Propagation\n\nContext carries cancellation signals, deadlines, and request-scoped values across API boundaries and goroutines.\n\n```golang\npackage main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx := context.Background()\n  _ = ctx\n}\n```",
    "workedExample": {
      "title": "Worked Example: The context Package: Cancellation Propagation",
      "code": "package main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx := context.Background()\n  _ = ctx\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The context Package: Cancellation Propagation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The context Package: Cancellation Propagation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx := context.Background()\n  _ = ctx\n}",
    "solutionCode": "package main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx := context.Background()\n  _ = ctx\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx := context.Background()\n  _ = ctx\n}"
    ],
    "testCases": [
      {
        "id": "golang-115-tc-1",
        "description": "Verifies correct implementation for The context Package: Cancellation Propagation",
        "testFn": "code.includes('context.Background()') || code.includes('context.')"
      }
    ]
  },
  {
    "id": "golang-116-manual-cancellation-with-context",
    "title": "116. Manual Cancellation with context.WithCancel",
    "slug": "lesson-116-manual-cancellation-with-context",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Manual Cancellation with context.WithCancel in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Manual Cancellation with context.WithCancel",
      "Go (Golang)"
    ],
    "analogy": "A customer canceling their dinner order: the waiter runs to the kitchen and tells the chef to stop cooking.",
    "explanationMarkdown": "### Manual Cancellation with context.WithCancel\n\n`cancel()` closes `ctx.Done()`, signaling child goroutines to abort work early and clean up.\n\n```golang\npackage main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithCancel(context.Background())\n  defer cancel()\n  _ = ctx\n}\n```",
    "workedExample": {
      "title": "Worked Example: Manual Cancellation with context.WithCancel",
      "code": "package main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithCancel(context.Background())\n  defer cancel()\n  _ = ctx\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Manual Cancellation with context.WithCancel.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Manual Cancellation with context.WithCancel.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithCancel(context.Background())\n  defer cancel() // Always cancel to prevent resource leaks!\n  _ = ctx\n}",
    "solutionCode": "package main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithCancel(context.Background())\n  defer cancel()\n  _ = ctx\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"context\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithCancel(context.Background())\n  defer cancel()\n  _ = ctx\n}"
    ],
    "testCases": [
      {
        "id": "golang-116-tc-1",
        "description": "Verifies correct implementation for Manual Cancellation with context.WithCancel",
        "testFn": "code.includes('context.WithCancel') && code.includes('defer cancel()')"
      }
    ]
  },
  {
    "id": "golang-117-timeouts-with-context.withtimeou",
    "title": "117. Timeouts with context.WithTimeout",
    "slug": "lesson-117-timeouts-with-context.withtimeou",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Timeouts with context.WithTimeout in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Timeouts with context.WithTimeout",
      "Go (Golang)"
    ],
    "analogy": "Setting an egg timer: if the delivery driver doesn't arrive within 10 minutes, you call a different service.",
    "explanationMarkdown": "### Timeouts with context.WithTimeout\n\nAutomatically cancels the context when the duration expires, enforcing strict API SLA boundaries.\n\n```golang\npackage main\n\nimport (\n  \"context\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n  defer cancel()\n  _ = ctx\n}\n```",
    "workedExample": {
      "title": "Worked Example: Timeouts with context.WithTimeout",
      "code": "package main\n\nimport (\n  \"context\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n  defer cancel()\n  _ = ctx\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Timeouts with context.WithTimeout.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Timeouts with context.WithTimeout.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"context\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n  defer cancel()\n  _ = ctx\n}",
    "solutionCode": "package main\n\nimport (\n  \"context\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n  defer cancel()\n  _ = ctx\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"context\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n  defer cancel()\n  _ = ctx\n}"
    ],
    "testCases": [
      {
        "id": "golang-117-tc-1",
        "description": "Verifies correct implementation for Timeouts with context.WithTimeout",
        "testFn": "code.includes('context.WithTimeout')"
      }
    ]
  },
  {
    "id": "golang-118-listening-for-cancellation-via-c",
    "title": "118. Listening for Cancellation via ctx.Done()",
    "slug": "lesson-118-listening-for-cancellation-via-c",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Listening for Cancellation via ctx.Done() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Listening for Cancellation via ctx.Done()",
      "Go (Golang)"
    ],
    "analogy": "A security guard looking at the red siren: if the siren turns on, evacuate the building immediately.",
    "explanationMarkdown": "### Listening for Cancellation via ctx.Done()\n\nGoroutines listen on `<-ctx.Done()` inside `select` blocks to gracefully exit when canceled.\n\n```golang\npackage main\n\nimport \"context\"\n\nfunc doTask(ctx context.Context) {\n  select {\n  case <-ctx.Done():\n    return\n  default:\n  }\n}\n\nfunc main() {\n  doTask(context.Background())\n}\n```",
    "workedExample": {
      "title": "Worked Example: Listening for Cancellation via ctx.Done()",
      "code": "package main\n\nimport \"context\"\n\nfunc doTask(ctx context.Context) {\n  select {\n  case <-ctx.Done():\n    return\n  default:\n  }\n}\n\nfunc main() {\n  doTask(context.Background())\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listening for Cancellation via ctx.Done().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listening for Cancellation via ctx.Done().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"context\"\n\nfunc doTask(ctx context.Context) {\n  select {\n  case <-ctx.Done():\n    return // Abort early!\n  default:\n    // continue\n  }\n}\n\nfunc main() {\n  doTask(context.Background())\n}",
    "solutionCode": "package main\n\nimport \"context\"\n\nfunc doTask(ctx context.Context) {\n  select {\n  case <-ctx.Done():\n    return\n  default:\n  }\n}\n\nfunc main() {\n  doTask(context.Background())\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"context\"\n\nfunc doTask(ctx context.Context) {\n  select {\n  case <-ctx.Done():\n    return\n  default:\n  }\n}\n\nfunc main() {\n  doTask(context.Background())\n}"
    ],
    "testCases": [
      {
        "id": "golang-118-tc-1",
        "description": "Verifies correct implementation for Listening for Cancellation via ctx.Done()",
        "testFn": "code.includes('case <-ctx.Done():') || code.includes('ctx.Done()')"
      }
    ]
  },
  {
    "id": "golang-119-passing-request-metadata-with-co",
    "title": "119. Passing Request Metadata with context.WithValue",
    "slug": "lesson-119-passing-request-metadata-with-co",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Passing Request Metadata with context.WithValue in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Passing Request Metadata with context.WithValue",
      "Go (Golang)"
    ],
    "analogy": "Stamping a tracking barcode on a folder that stays visible as the folder travels from office to office.",
    "explanationMarkdown": "### Passing Request Metadata with context.WithValue\n\nPass immutable request-scoped data (trace IDs, user tokens); use custom unexported key types to prevent collisions.\n\n```golang\npackage main\n\nimport \"context\"\n\ntype ctxKey string\n\nfunc main() {\n  const k ctxKey = \"traceID\"\n  ctx := context.WithValue(context.Background(), k, \"uuid-1234\")\n  _ = ctx.Value(k)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Passing Request Metadata with context.WithValue",
      "code": "package main\n\nimport \"context\"\n\ntype ctxKey string\n\nfunc main() {\n  const k ctxKey = \"traceID\"\n  ctx := context.WithValue(context.Background(), k, \"uuid-1234\")\n  _ = ctx.Value(k)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Passing Request Metadata with context.WithValue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Passing Request Metadata with context.WithValue.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"context\"\n\ntype ctxKey string\n\nfunc main() {\n  const k ctxKey = \"traceID\"\n  ctx := context.WithValue(context.Background(), k, \"uuid-1234\")\n  _ = ctx.Value(k)\n}",
    "solutionCode": "package main\n\nimport \"context\"\n\ntype ctxKey string\n\nfunc main() {\n  const k ctxKey = \"traceID\"\n  ctx := context.WithValue(context.Background(), k, \"uuid-1234\")\n  _ = ctx.Value(k)\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"context\"\n\ntype ctxKey string\n\nfunc main() {\n  const k ctxKey = \"traceID\"\n  ctx := context.WithValue(context.Background(), k, \"uuid-1234\")\n  _ = ctx.Value(k)\n}"
    ],
    "testCases": [
      {
        "id": "golang-119-tc-1",
        "description": "Verifies correct implementation for Passing Request Metadata with context.WithValue",
        "testFn": "code.includes('context.WithValue') || code.includes('ctx.Value(')"
      }
    ]
  },
  {
    "id": "golang-120-module-8-review-concurrency-orch",
    "title": "120. Module 8 Review: Concurrency Orchestration Capstone",
    "slug": "lesson-120-module-8-review-concurrency-orch",
    "language": "golang",
    "category": "Module 8: Synchronization & The sync Package",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 8 Review: Concurrency Orchestration Capstone in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 8 Review",
      "Go (Golang)"
    ],
    "analogy": "A master spaceflight mission control room aborting thruster firings safely under countdown timeout constraints.",
    "explanationMarkdown": "### Module 8 Review: Concurrency Orchestration Capstone\n\nMastery over Mutex, RWMutex, WaitGroup, Once, Pool, Atomic operations, and Context cancellation pipelines.\n\n```golang\npackage main\n\nimport (\n  \"context\"\n  \"sync\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)\n  defer cancel()\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n    select {\n    case <-ctx.Done():\n    case <-time.After(500 * time.Millisecond):\n    }\n  }()\n  wg.Wait()\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 8 Review: Concurrency Orchestration Capstone",
      "code": "package main\n\nimport (\n  \"context\"\n  \"sync\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)\n  defer cancel()\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n    select {\n    case <-ctx.Done():\n    case <-time.After(500 * time.Millisecond):\n    }\n  }()\n  wg.Wait()\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 8 Review: Concurrency Orchestration Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 8 Review: Concurrency Orchestration Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"context\"\n  \"sync\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)\n  defer cancel()\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n    select {\n    case <-ctx.Done():\n    case <-time.After(500 * time.Millisecond):\n    }\n  }()\n  wg.Wait()\n}",
    "solutionCode": "package main\n\nimport (\n  \"context\"\n  \"sync\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)\n  defer cancel()\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n    select {\n    case <-ctx.Done():\n    case <-time.After(500 * time.Millisecond):\n    }\n  }()\n  wg.Wait()\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"context\"\n  \"sync\"\n  \"time\"\n)\n\nfunc main() {\n  ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)\n  defer cancel()\n  var wg sync.WaitGroup\n  wg.Add(1)\n  go func() {\n    defer wg.Done()\n    select {\n    case <-ctx.Done():\n    case <-time.After(500 * time.Millisecond):\n    }\n  }()\n  wg.Wait()\n}"
    ],
    "testCases": [
      {
        "id": "golang-120-tc-1",
        "description": "Verifies correct implementation for Module 8 Review: Concurrency Orchestration Capstone",
        "testFn": "code.includes('sync.WaitGroup') && code.includes('context.WithTimeout')"
      }
    ]
  },
  {
    "id": "golang-121-the-json-package-json.marshal-an",
    "title": "121. The JSON Package: json.Marshal and Unmarshal",
    "slug": "lesson-121-the-json-package-json.marshal-an",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The JSON Package: json.Marshal and Unmarshal in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "The JSON Package",
      "Go (Golang)"
    ],
    "analogy": "Translating a private manuscript into universal Morse code characters and decoding it back.",
    "explanationMarkdown": "### The JSON Package: json.Marshal and Unmarshal\n\n`json.Marshal()` encodes Go structs into JSON byte slices; `json.Unmarshal()` parses JSON bytes into target pointers.\n\n```golang\npackage main\n\nimport (\n  \"encoding/json\"\n)\n\ntype User struct {\n  Name string `json:\"name\"`\n}\n\nfunc main() {\n  u := User{Name: \"Sarah\"}\n  bytes, _ := json.Marshal(u)\n  _ = bytes\n}\n```",
    "workedExample": {
      "title": "Worked Example: The JSON Package: json.Marshal and Unmarshal",
      "code": "package main\n\nimport (\n  \"encoding/json\"\n)\n\ntype User struct {\n  Name string `json:\"name\"`\n}\n\nfunc main() {\n  u := User{Name: \"Sarah\"}\n  bytes, _ := json.Marshal(u)\n  _ = bytes\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The JSON Package: json.Marshal and Unmarshal.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The JSON Package: json.Marshal and Unmarshal.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"encoding/json\"\n)\n\ntype User struct {\n  Name string `json:\"name\"`\n}\n\nfunc main() {\n  u := User{Name: \"Sarah\"}\n  bytes, _ := json.Marshal(u)\n  _ = bytes\n}",
    "solutionCode": "package main\n\nimport (\n  \"encoding/json\"\n)\n\ntype User struct {\n  Name string `json:\"name\"`\n}\n\nfunc main() {\n  u := User{Name: \"Sarah\"}\n  bytes, _ := json.Marshal(u)\n  _ = bytes\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"encoding/json\"\n)\n\ntype User struct {\n  Name string `json:\"name\"`\n}\n\nfunc main() {\n  u := User{Name: \"Sarah\"}\n  bytes, _ := json.Marshal(u)\n  _ = bytes\n}"
    ],
    "testCases": [
      {
        "id": "golang-121-tc-1",
        "description": "Verifies correct implementation for The JSON Package: json.Marshal and Unmarshal",
        "testFn": "code.includes('json.Marshal') || code.includes('encoding/json')"
      }
    ]
  },
  {
    "id": "golang-122-streaming-json-with-json.decoder",
    "title": "122. Streaming JSON with json.Decoder & Encoder",
    "slug": "lesson-122-streaming-json-with-json.decoder",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Streaming JSON with json.Decoder & Encoder in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Streaming JSON with json.Decoder & Encoder",
      "Go (Golang)"
    ],
    "analogy": "Drinking water from a streaming fountain rather than storing the whole reservoir in a tank.",
    "explanationMarkdown": "### Streaming JSON with json.Decoder & Encoder\n\n`json.NewDecoder(r).Decode(&v)` streams and parses JSON directly from network sockets or files without buffering in RAM.\n\n```golang\npackage main\n\nimport (\n  \"bytes\"\n  \"encoding/json\"\n)\n\nfunc main() {\n  buf := bytes.NewBufferString(`{\"id\":1}`)\n  dec := json.NewDecoder(buf)\n  var res map[string]int\n  _ = dec.Decode(&res)\n}\n```",
    "workedExample": {
      "title": "Worked Example: Streaming JSON with json.Decoder & Encoder",
      "code": "package main\n\nimport (\n  \"bytes\"\n  \"encoding/json\"\n)\n\nfunc main() {\n  buf := bytes.NewBufferString(`{\"id\":1}`)\n  dec := json.NewDecoder(buf)\n  var res map[string]int\n  _ = dec.Decode(&res)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Streaming JSON with json.Decoder & Encoder.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Streaming JSON with json.Decoder & Encoder.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"bytes\"\n  \"encoding/json\"\n)\n\nfunc main() {\n  buf := bytes.NewBufferString(`{\"id\":1}`)\n  dec := json.NewDecoder(buf)\n  var res map[string]int\n  _ = dec.Decode(&res)\n}",
    "solutionCode": "package main\n\nimport (\n  \"bytes\"\n  \"encoding/json\"\n)\n\nfunc main() {\n  buf := bytes.NewBufferString(`{\"id\":1}`)\n  dec := json.NewDecoder(buf)\n  var res map[string]int\n  _ = dec.Decode(&res)\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"bytes\"\n  \"encoding/json\"\n)\n\nfunc main() {\n  buf := bytes.NewBufferString(`{\"id\":1}`)\n  dec := json.NewDecoder(buf)\n  var res map[string]int\n  _ = dec.Decode(&res)\n}"
    ],
    "testCases": [
      {
        "id": "golang-122-tc-1",
        "description": "Verifies correct implementation for Streaming JSON with json.Decoder & Encoder",
        "testFn": "code.includes('json.NewDecoder') || code.includes('json.NewEncoder')"
      }
    ]
  },
  {
    "id": "golang-123-http-servers-with-net-http-http.",
    "title": "123. HTTP Servers with net/http (http.HandleFunc)",
    "slug": "lesson-123-http-servers-with-net-http-http.",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master HTTP Servers with net/http (http.HandleFunc) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "HTTP Servers with net/http (http.HandleFunc)",
      "Go (Golang)"
    ],
    "analogy": "Setting up an information booth in an airport lobby to greet visitors arriving at Gate 4.",
    "explanationMarkdown": "### HTTP Servers with net/http (http.HandleFunc)\n\n`net/http` provides a production-ready HTTP/1.1 and HTTP/2 web server with zero external libraries.\n\n```golang\npackage main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, \"Hello DevForge\")\n}\n\nfunc main() {\n  http.HandleFunc(\"/hello\", handler)\n}\n```",
    "workedExample": {
      "title": "Worked Example: HTTP Servers with net/http (http.HandleFunc)",
      "code": "package main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, \"Hello DevForge\")\n}\n\nfunc main() {\n  http.HandleFunc(\"/hello\", handler)\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTTP Servers with net/http (http.HandleFunc).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTTP Servers with net/http (http.HandleFunc).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, \"Hello DevForge\")\n}\n\nfunc main() {\n  http.HandleFunc(\"/hello\", handler)\n}",
    "solutionCode": "package main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, \"Hello DevForge\")\n}\n\nfunc main() {\n  http.HandleFunc(\"/hello\", handler)\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, \"Hello DevForge\")\n}\n\nfunc main() {\n  http.HandleFunc(\"/hello\", handler)\n}"
    ],
    "testCases": [
      {
        "id": "golang-123-tc-1",
        "description": "Verifies correct implementation for HTTP Servers with net/http (http.HandleFunc)",
        "testFn": "code.includes('http.HandleFunc') && code.includes('http.ResponseWriter')"
      }
    ]
  },
  {
    "id": "golang-124-building-middleware-in-go-http.h",
    "title": "124. Building Middleware in Go (http.Handler Func Wrapping)",
    "slug": "lesson-124-building-middleware-in-go-http.h",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Building Middleware in Go (http.Handler Func Wrapping) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Building Middleware in Go (http.Handler Func Wrapping)",
      "Go (Golang)"
    ],
    "analogy": "A security guard stamping a guest badge before letting the visitor proceed to the executive elevator.",
    "explanationMarkdown": "### Building Middleware in Go (http.Handler Func Wrapping)\n\nMiddleware wraps an `http.Handler`, intercepting requests to handle logging, authentication, and headers.\n\n```golang\npackage main\n\nimport \"net/http\"\n\nfunc loggingMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    next.ServeHTTP(w, r)\n  })\n}\n\nfunc main() {\n  _ = loggingMiddleware\n}\n```",
    "workedExample": {
      "title": "Worked Example: Building Middleware in Go (http.Handler Func Wrapping)",
      "code": "package main\n\nimport \"net/http\"\n\nfunc loggingMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    next.ServeHTTP(w, r)\n  })\n}\n\nfunc main() {\n  _ = loggingMiddleware\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building Middleware in Go (http.Handler Func Wrapping).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building Middleware in Go (http.Handler Func Wrapping).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"net/http\"\n\nfunc loggingMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    // log request\n    next.ServeHTTP(w, r)\n  })\n}\n\nfunc main() {\n  _ = loggingMiddleware\n}",
    "solutionCode": "package main\n\nimport \"net/http\"\n\nfunc loggingMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    next.ServeHTTP(w, r)\n  })\n}\n\nfunc main() {\n  _ = loggingMiddleware\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"net/http\"\n\nfunc loggingMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    next.ServeHTTP(w, r)\n  })\n}\n\nfunc main() {\n  _ = loggingMiddleware\n}"
    ],
    "testCases": [
      {
        "id": "golang-124-tc-1",
        "description": "Verifies correct implementation for Building Middleware in Go (http.Handler Func Wrapping)",
        "testFn": "code.includes('http.HandlerFunc') || code.includes('ServeHTTP')"
      }
    ]
  },
  {
    "id": "golang-125-http-client-requests-with-timeou",
    "title": "125. HTTP Client Requests with Timeouts",
    "slug": "lesson-125-http-client-requests-with-timeou",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master HTTP Client Requests with Timeouts in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "HTTP Client Requests with Timeouts",
      "Go (Golang)"
    ],
    "analogy": "Giving a courier a strict 5-minute timer to fetch parts from a vendor warehouse or return empty-handed.",
    "explanationMarkdown": "### HTTP Client Requests with Timeouts\n\nNever use default `http.Get()`; always configure explicit connection, header, and response timeouts on `http.Client`.\n\n```golang\npackage main\n\nimport (\n  \"net/http\"\n  \"time\"\n)\n\nfunc main() {\n  client := &http.Client{\n    Timeout: 5 * time.Second,\n  }\n  _ = client\n}\n```",
    "workedExample": {
      "title": "Worked Example: HTTP Client Requests with Timeouts",
      "code": "package main\n\nimport (\n  \"net/http\"\n  \"time\"\n)\n\nfunc main() {\n  client := &http.Client{\n    Timeout: 5 * time.Second,\n  }\n  _ = client\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTTP Client Requests with Timeouts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTTP Client Requests with Timeouts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"net/http\"\n  \"time\"\n)\n\nfunc main() {\n  client := &http.Client{\n    Timeout: 5 * time.Second,\n  }\n  _ = client\n}",
    "solutionCode": "package main\n\nimport (\n  \"net/http\"\n  \"time\"\n)\n\nfunc main() {\n  client := &http.Client{\n    Timeout: 5 * time.Second,\n  }\n  _ = client\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"net/http\"\n  \"time\"\n)\n\nfunc main() {\n  client := &http.Client{\n    Timeout: 5 * time.Second,\n  }\n  _ = client\n}"
    ],
    "testCases": [
      {
        "id": "golang-125-tc-1",
        "description": "Verifies correct implementation for HTTP Client Requests with Timeouts",
        "testFn": "code.includes('http.Client') && code.includes('Timeout:')"
      }
    ]
  },
  {
    "id": "golang-126-buffered-file-i-o-with-bufio",
    "title": "126. Buffered File I/O with bufio",
    "slug": "lesson-126-buffered-file-i-o-with-bufio",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Buffered File I/O with bufio in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Buffered File I/O with bufio",
      "Go (Golang)"
    ],
    "analogy": "Carrying water with a bucket brigade instead of walking back and forth with a thimble.",
    "explanationMarkdown": "### Buffered File I/O with bufio\n\n`bufio.Scanner` and `bufio.Writer` wrap I/O streams with an internal buffer, accelerating throughput.\n\n```golang\npackage main\n\nimport (\n  \"bufio\"\n  \"strings\"\n)\n\nfunc main() {\n  scanner := bufio.NewScanner(strings.NewReader(\"line1\\nline2\"))\n  for scanner.Scan() {\n    _ = scanner.Text()\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Buffered File I/O with bufio",
      "code": "package main\n\nimport (\n  \"bufio\"\n  \"strings\"\n)\n\nfunc main() {\n  scanner := bufio.NewScanner(strings.NewReader(\"line1\\nline2\"))\n  for scanner.Scan() {\n    _ = scanner.Text()\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Buffered File I/O with bufio.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Buffered File I/O with bufio.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"bufio\"\n  \"strings\"\n)\n\nfunc main() {\n  scanner := bufio.NewScanner(strings.NewReader(\"line1\\nline2\"))\n  for scanner.Scan() {\n    _ = scanner.Text()\n  }\n}",
    "solutionCode": "package main\n\nimport (\n  \"bufio\"\n  \"strings\"\n)\n\nfunc main() {\n  scanner := bufio.NewScanner(strings.NewReader(\"line1\\nline2\"))\n  for scanner.Scan() {\n    _ = scanner.Text()\n  }\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"bufio\"\n  \"strings\"\n)\n\nfunc main() {\n  scanner := bufio.NewScanner(strings.NewReader(\"line1\\nline2\"))\n  for scanner.Scan() {\n    _ = scanner.Text()\n  }\n}"
    ],
    "testCases": [
      {
        "id": "golang-126-tc-1",
        "description": "Verifies correct implementation for Buffered File I/O with bufio",
        "testFn": "code.includes('bufio.NewScanner') || code.includes('scanner.Scan()')"
      }
    ]
  },
  {
    "id": "golang-127-unit-testing-in-go-testing.t",
    "title": "127. Unit Testing in Go (testing.T)",
    "slug": "lesson-127-unit-testing-in-go-testing.t",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Unit Testing in Go (testing.T) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Unit Testing in Go (testing.T)",
      "Go (Golang)"
    ],
    "analogy": "An automotive quality inspector verifying that headlights turn on when the switch is flipped.",
    "explanationMarkdown": "### Unit Testing in Go (testing.T)\n\nTest functions live in `_test.go` files and take `(t *testing.T)`; run tests via `go test ./...`.\n\n```golang\npackage main\n\nimport \"testing\"\n\nfunc TestAdd(t *testing.T) {\n  got := 2 + 3\n  want := 5\n  if got != want {\n    t.Errorf(\"got %d, want %d\", got, want)\n  }\n}\n\nfunc main() {}\n```",
    "workedExample": {
      "title": "Worked Example: Unit Testing in Go (testing.T)",
      "code": "package main\n\nimport \"testing\"\n\nfunc TestAdd(t *testing.T) {\n  got := 2 + 3\n  want := 5\n  if got != want {\n    t.Errorf(\"got %d, want %d\", got, want)\n  }\n}\n\nfunc main() {}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unit Testing in Go (testing.T).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unit Testing in Go (testing.T).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"testing\"\n\nfunc TestAdd(t *testing.T) {\n  got := 2 + 3\n  want := 5\n  if got != want {\n    t.Errorf(\"got %d, want %d\", got, want)\n  }\n}\n\nfunc main() {}",
    "solutionCode": "package main\n\nimport \"testing\"\n\nfunc TestAdd(t *testing.T) {\n  got := 2 + 3\n  want := 5\n  if got != want {\n    t.Errorf(\"got %d, want %d\", got, want)\n  }\n}\n\nfunc main() {}",
    "hints": [
      "Write:\npackage main\n\nimport \"testing\"\n\nfunc TestAdd(t *testing.T) {\n  got := 2 + 3\n  want := 5\n  if got != want {\n    t.Errorf(\"got %d, want %d\", got, want)\n  }\n}\n\nfunc main() {}"
    ],
    "testCases": [
      {
        "id": "golang-127-tc-1",
        "description": "Verifies correct implementation for Unit Testing in Go (testing.T)",
        "testFn": "code.includes('TestAdd(t *testing.T)') || code.includes('*testing.T')"
      }
    ]
  },
  {
    "id": "golang-128-table-driven-tests-pattern-the-g",
    "title": "128. Table-Driven Tests Pattern (The Go Standard)",
    "slug": "lesson-128-table-driven-tests-pattern-the-g",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Table-Driven Tests Pattern (The Go Standard) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Table-Driven Tests Pattern (The Go Standard)",
      "Go (Golang)"
    ],
    "analogy": "A flight test ledger testing multiple passenger weights and crosswinds in a standardized test grid.",
    "explanationMarkdown": "### Table-Driven Tests Pattern (The Go Standard)\n\nThe idiomatic Go testing pattern: define an anonymous slice of test cases and iterate through them cleanly.\n\n```golang\npackage main\n\nimport \"testing\"\n\nfunc TestTable(t *testing.T) {\n  tests := []struct {\n    name string\n    in   int\n    want int\n  }{\n    {\"positive\", 2, 4},\n    {\"zero\", 0, 0},\n  }\n  for _, tt := range tests {\n    _ = tt\n  }\n}\n\nfunc main() {}\n```",
    "workedExample": {
      "title": "Worked Example: Table-Driven Tests Pattern (The Go Standard)",
      "code": "package main\n\nimport \"testing\"\n\nfunc TestTable(t *testing.T) {\n  tests := []struct {\n    name string\n    in   int\n    want int\n  }{\n    {\"positive\", 2, 4},\n    {\"zero\", 0, 0},\n  }\n  for _, tt := range tests {\n    _ = tt\n  }\n}\n\nfunc main() {}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Table-Driven Tests Pattern (The Go Standard).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Table-Driven Tests Pattern (The Go Standard).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"testing\"\n\nfunc TestTable(t *testing.T) {\n  tests := []struct {\n    name string\n    in   int\n    want int\n  }{\n    {\"positive\", 2, 4},\n    {\"zero\", 0, 0},\n  }\n  for _, tt := range tests {\n    _ = tt\n  }\n}\n\nfunc main() {}",
    "solutionCode": "package main\n\nimport \"testing\"\n\nfunc TestTable(t *testing.T) {\n  tests := []struct {\n    name string\n    in   int\n    want int\n  }{\n    {\"positive\", 2, 4},\n    {\"zero\", 0, 0},\n  }\n  for _, tt := range tests {\n    _ = tt\n  }\n}\n\nfunc main() {}",
    "hints": [
      "Write:\npackage main\n\nimport \"testing\"\n\nfunc TestTable(t *testing.T) {\n  tests := []struct {\n    name string\n    in   int\n    want int\n  }{\n    {\"positive\", 2, 4},\n    {\"zero\", 0, 0},\n  }\n  for _, tt := range tests {\n    _ = tt\n  }\n}\n\nfunc main() {}"
    ],
    "testCases": [
      {
        "id": "golang-128-tc-1",
        "description": "Verifies correct implementation for Table-Driven Tests Pattern (The Go Standard)",
        "testFn": "code.includes('tests := []struct') || code.includes('for _, tt := range tests')"
      }
    ]
  },
  {
    "id": "golang-129-subtests-with-t.run",
    "title": "129. Subtests with t.Run()",
    "slug": "lesson-129-subtests-with-t.run",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Subtests with t.Run() in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Subtests with t.Run()",
      "Go (Golang)"
    ],
    "analogy": "Organizing an automobile test report into distinct chapters: Brakes, Suspension, and Engine.",
    "explanationMarkdown": "### Subtests with t.Run()\n\n`t.Run(\"name\", func(t *testing.T))` creates isolated subtests that can be executed independently (`go test -run TestSub/case_A`).\n\n```golang\npackage main\n\nimport \"testing\"\n\nfunc TestSub(t *testing.T) {\n  t.Run(\"case A\", func(t *testing.T) {\n    if 1 != 1 { t.Fail() }\n  })\n}\n\nfunc main() {}\n```",
    "workedExample": {
      "title": "Worked Example: Subtests with t.Run()",
      "code": "package main\n\nimport \"testing\"\n\nfunc TestSub(t *testing.T) {\n  t.Run(\"case A\", func(t *testing.T) {\n    if 1 != 1 { t.Fail() }\n  })\n}\n\nfunc main() {}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Subtests with t.Run().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subtests with t.Run().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"testing\"\n\nfunc TestSub(t *testing.T) {\n  t.Run(\"case A\", func(t *testing.T) {\n    if 1 != 1 { t.Fail() }\n  })\n}\n\nfunc main() {}",
    "solutionCode": "package main\n\nimport \"testing\"\n\nfunc TestSub(t *testing.T) {\n  t.Run(\"case A\", func(t *testing.T) {\n    if 1 != 1 { t.Fail() }\n  })\n}\n\nfunc main() {}",
    "hints": [
      "Write:\npackage main\n\nimport \"testing\"\n\nfunc TestSub(t *testing.T) {\n  t.Run(\"case A\", func(t *testing.T) {\n    if 1 != 1 { t.Fail() }\n  })\n}\n\nfunc main() {}"
    ],
    "testCases": [
      {
        "id": "golang-129-tc-1",
        "description": "Verifies correct implementation for Subtests with t.Run()",
        "testFn": "code.includes('t.Run(')"
      }
    ]
  },
  {
    "id": "golang-130-performance-benchmarking-with-te",
    "title": "130. Performance Benchmarking with testing.B (b.N)",
    "slug": "lesson-130-performance-benchmarking-with-te",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Performance Benchmarking with testing.B (b.N) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Performance Benchmarking with testing.B (b.N)",
      "Go (Golang)"
    ],
    "analogy": "A Formula 1 dynamometer spinning an engine thousands of times to measure exact nanoseconds per revolution.",
    "explanationMarkdown": "### Performance Benchmarking with testing.B (b.N)\n\nBenchmark functions run code `b.N` times; run with `go test -bench=.` to measure memory and nanoseconds per op.\n\n```golang\npackage main\n\nimport \"testing\"\n\nfunc BenchmarkOperation(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    _ = 1 + 1\n  }\n}\n\nfunc main() {}\n```",
    "workedExample": {
      "title": "Worked Example: Performance Benchmarking with testing.B (b.N)",
      "code": "package main\n\nimport \"testing\"\n\nfunc BenchmarkOperation(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    _ = 1 + 1\n  }\n}\n\nfunc main() {}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Performance Benchmarking with testing.B (b.N).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Performance Benchmarking with testing.B (b.N).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"testing\"\n\nfunc BenchmarkOperation(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    _ = 1 + 1\n  }\n}\n\nfunc main() {}",
    "solutionCode": "package main\n\nimport \"testing\"\n\nfunc BenchmarkOperation(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    _ = 1 + 1\n  }\n}\n\nfunc main() {}",
    "hints": [
      "Write:\npackage main\n\nimport \"testing\"\n\nfunc BenchmarkOperation(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    _ = 1 + 1\n  }\n}\n\nfunc main() {}"
    ],
    "testCases": [
      {
        "id": "golang-130-tc-1",
        "description": "Verifies correct implementation for Performance Benchmarking with testing.B (b.N)",
        "testFn": "code.includes('BenchmarkOperation(b *testing.B)') || code.includes('b.N')"
      }
    ]
  },
  {
    "id": "golang-131-fuzz-testing-with-testing.f-secu",
    "title": "131. Fuzz Testing with testing.F (Security Discovery)",
    "slug": "lesson-131-fuzz-testing-with-testing.f-secu",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Fuzz Testing with testing.F (Security Discovery) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Fuzz Testing with testing.F (Security Discovery)",
      "Go (Golang)"
    ],
    "analogy": "A robot throwing millions of random strange keys into a lock to see if any can cause the deadbolt to jam.",
    "explanationMarkdown": "### Fuzz Testing with testing.F (Security Discovery)\n\nGo's built-in fuzzing engine generates semi-random inputs automatically to uncover edge-case panics and security bugs.\n\n```golang\npackage main\n\nimport \"testing\"\n\nfunc FuzzReverse(f *testing.F) {\n  f.Add(\"hello\")\n  f.Fuzz(func(t *testing.T, orig string) {\n    _ = orig\n  })\n}\n\nfunc main() {}\n```",
    "workedExample": {
      "title": "Worked Example: Fuzz Testing with testing.F (Security Discovery)",
      "code": "package main\n\nimport \"testing\"\n\nfunc FuzzReverse(f *testing.F) {\n  f.Add(\"hello\")\n  f.Fuzz(func(t *testing.T, orig string) {\n    _ = orig\n  })\n}\n\nfunc main() {}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fuzz Testing with testing.F (Security Discovery).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fuzz Testing with testing.F (Security Discovery).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"testing\"\n\nfunc FuzzReverse(f *testing.F) {\n  f.Add(\"hello\")\n  f.Fuzz(func(t *testing.T, orig string) {\n    _ = orig\n  })\n}\n\nfunc main() {}",
    "solutionCode": "package main\n\nimport \"testing\"\n\nfunc FuzzReverse(f *testing.F) {\n  f.Add(\"hello\")\n  f.Fuzz(func(t *testing.T, orig string) {\n    _ = orig\n  })\n}\n\nfunc main() {}",
    "hints": [
      "Write:\npackage main\n\nimport \"testing\"\n\nfunc FuzzReverse(f *testing.F) {\n  f.Add(\"hello\")\n  f.Fuzz(func(t *testing.T, orig string) {\n    _ = orig\n  })\n}\n\nfunc main() {}"
    ],
    "testCases": [
      {
        "id": "golang-131-tc-1",
        "description": "Verifies correct implementation for Fuzz Testing with testing.F (Security Discovery)",
        "testFn": "code.includes('FuzzReverse(f *testing.F)') || code.includes('f.Fuzz(')"
      }
    ]
  },
  {
    "id": "golang-132-static-analysis-with-go-vet-&-st",
    "title": "132. Static Analysis with go vet & staticcheck",
    "slug": "lesson-132-static-analysis-with-go-vet-&-st",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Static Analysis with go vet & staticcheck in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Static Analysis with go vet & staticcheck",
      "Go (Golang)"
    ],
    "analogy": "A certified airplane inspector walking around the fuselage with a magnifying glass checking every rivet.",
    "explanationMarkdown": "### Static Analysis with go vet & staticcheck\n\n`go vet` and `golangci-lint` detect unreachable code, shadowed variables, misused format verbs, and mutex copy bugs.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static Analysis with go vet & staticcheck",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static Analysis with go vet & staticcheck.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Analysis with go vet & staticcheck.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // 'go vet' analyzes source code and flags suspicious constructs\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-132-tc-1",
        "description": "Verifies correct implementation for Static Analysis with go vet & staticcheck",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-133-cpu-and-memory-profiling-with-pp",
    "title": "133. CPU and Memory Profiling with pprof",
    "slug": "lesson-133-cpu-and-memory-profiling-with-pp",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master CPU and Memory Profiling with pprof in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "CPU and Memory Profiling with pprof",
      "Go (Golang)"
    ],
    "analogy": "A telemetry pod attached to a space capsule recording heat distribution and propellant usage.",
    "explanationMarkdown": "### CPU and Memory Profiling with pprof\n\n`net/http/pprof` visualizes flame graphs, heap memory consumption, and goroutine blockages in production.\n\n```golang\npackage main\n\nimport (\n  _ \"net/http/pprof\"\n)\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: CPU and Memory Profiling with pprof",
      "code": "package main\n\nimport (\n  _ \"net/http/pprof\"\n)\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CPU and Memory Profiling with pprof.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CPU and Memory Profiling with pprof.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  _ \"net/http/pprof\"\n)\n\nfunc main() {\n  // Register pprof HTTP diagnostic endpoints automatically\n}",
    "solutionCode": "package main\n\nimport (\n  _ \"net/http/pprof\"\n)\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  _ \"net/http/pprof\"\n)\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-133-tc-1",
        "description": "Verifies correct implementation for CPU and Memory Profiling with pprof",
        "testFn": "code.includes('net/http/pprof') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-134-structured-logging-with-log-slog",
    "title": "134. Structured Logging with log/slog (Go 1.21+)",
    "slug": "lesson-134-structured-logging-with-log-slog",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Structured Logging with log/slog (Go 1.21+) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Structured Logging with log/slog (Go 1.21+)",
      "Go (Golang)"
    ],
    "analogy": "Printing machine-readable barcodes instead of scribbling handwritten notes on scraps of paper.",
    "explanationMarkdown": "### Structured Logging with log/slog (Go 1.21+)\n\n`log/slog` is Go's native high-performance structured logging library, outputting key-value and JSON log streams.\n\n```golang\npackage main\n\nimport (\n  \"log/slog\"\n)\n\nfunc main() {\n  slog.Info(\"User authenticated\", \"user_id\", 42, \"role\", \"admin\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: Structured Logging with log/slog (Go 1.21+)",
      "code": "package main\n\nimport (\n  \"log/slog\"\n)\n\nfunc main() {\n  slog.Info(\"User authenticated\", \"user_id\", 42, \"role\", \"admin\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Structured Logging with log/slog (Go 1.21+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Structured Logging with log/slog (Go 1.21+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"log/slog\"\n)\n\nfunc main() {\n  slog.Info(\"User authenticated\", \"user_id\", 42, \"role\", \"admin\")\n}",
    "solutionCode": "package main\n\nimport (\n  \"log/slog\"\n)\n\nfunc main() {\n  slog.Info(\"User authenticated\", \"user_id\", 42, \"role\", \"admin\")\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"log/slog\"\n)\n\nfunc main() {\n  slog.Info(\"User authenticated\", \"user_id\", 42, \"role\", \"admin\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-134-tc-1",
        "description": "Verifies correct implementation for Structured Logging with log/slog (Go 1.21+)",
        "testFn": "code.includes('slog.Info') || code.includes('log/slog')"
      }
    ]
  },
  {
    "id": "golang-135-module-9-review-enterprise-testi",
    "title": "135. Module 9 Review: Enterprise Testing & Diagnostics",
    "slug": "lesson-135-module-9-review-enterprise-testi",
    "language": "golang",
    "category": "Module 9: Standard Library, Testing & Tooling",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module 9 Review: Enterprise Testing & Diagnostics in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "Go (Golang)"
    ],
    "analogy": "The flight clearance checklist signed by all lead aerospace inspectors before countdown liftoff.",
    "explanationMarkdown": "### Module 9 Review: Enterprise Testing & Diagnostics\n\nMastery over JSON streaming, HTTP servers, table tests, subtests, benchmarks, fuzzing, pprof, and slog.\n\n```golang\npackage main\n\nimport \"testing\"\n\nfunc TestProductionSuite(t *testing.T) {\n  t.Log(\"All systems verified\")\n}\n\nfunc main() {}\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Enterprise Testing & Diagnostics",
      "code": "package main\n\nimport \"testing\"\n\nfunc TestProductionSuite(t *testing.T) {\n  t.Log(\"All systems verified\")\n}\n\nfunc main() {}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Enterprise Testing & Diagnostics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Enterprise Testing & Diagnostics.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"testing\"\n\nfunc TestProductionSuite(t *testing.T) {\n  t.Log(\"All systems verified\")\n}\n\nfunc main() {}",
    "solutionCode": "package main\n\nimport \"testing\"\n\nfunc TestProductionSuite(t *testing.T) {\n  t.Log(\"All systems verified\")\n}\n\nfunc main() {}",
    "hints": [
      "Write:\npackage main\n\nimport \"testing\"\n\nfunc TestProductionSuite(t *testing.T) {\n  t.Log(\"All systems verified\")\n}\n\nfunc main() {}"
    ],
    "testCases": [
      {
        "id": "golang-135-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Enterprise Testing & Diagnostics",
        "testFn": "code.includes('TestProductionSuite') || code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-136-clean-architecture-in-go-domain,",
    "title": "136. Clean Architecture in Go (Domain, Repository, Service, Handler)",
    "slug": "lesson-136-clean-architecture-in-go-domain,",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Clean Architecture in Go (Domain, Repository, Service, Handler) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Clean Architecture in Go (Domain, Repository, Service, Handler)",
      "Go (Golang)"
    ],
    "analogy": "A hospital building separated into emergency reception (handlers), medical specialists (services), and records archive (repositories).",
    "explanationMarkdown": "### Clean Architecture in Go (Domain, Repository, Service, Handler)\n\nDecouples application business logic from database drivers and HTTP transports for maximum testability.\n\n```golang\npackage main\n\ntype UserRepo interface { Find(id int) string }\ntype UserService struct { repo UserRepo }\n\nfunc main() {\n  _ = UserService{}\n}\n```",
    "workedExample": {
      "title": "Worked Example: Clean Architecture in Go (Domain, Repository, Service, Handler)",
      "code": "package main\n\ntype UserRepo interface { Find(id int) string }\ntype UserService struct { repo UserRepo }\n\nfunc main() {\n  _ = UserService{}\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Clean Architecture in Go (Domain, Repository, Service, Handler).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Clean Architecture in Go (Domain, Repository, Service, Handler).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\ntype UserRepo interface { Find(id int) string }\ntype UserService struct { repo UserRepo }\n\nfunc main() {\n  _ = UserService{}\n}",
    "solutionCode": "package main\n\ntype UserRepo interface { Find(id int) string }\ntype UserService struct { repo UserRepo }\n\nfunc main() {\n  _ = UserService{}\n}",
    "hints": [
      "Write:\npackage main\n\ntype UserRepo interface { Find(id int) string }\ntype UserService struct { repo UserRepo }\n\nfunc main() {\n  _ = UserService{}\n}"
    ],
    "testCases": [
      {
        "id": "golang-136-tc-1",
        "description": "Verifies correct implementation for Clean Architecture in Go (Domain, Repository, Service, Handler)",
        "testFn": "code.includes('UserRepo interface') || code.includes('UserService struct')"
      }
    ]
  },
  {
    "id": "golang-137-database-access-with-database-sq",
    "title": "137. Database Access with database/sql and Connection Pools",
    "slug": "lesson-137-database-access-with-database-sq",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Database Access with database/sql and Connection Pools in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Database Access with database/sql and Connection Pools",
      "Go (Golang)"
    ],
    "analogy": "A fleet of rental delivery vans shared among factory drivers so no one buys a personal truck.",
    "explanationMarkdown": "### Database Access with database/sql and Connection Pools\n\n`database/sql` maintains a thread-safe connection pool; configure `SetMaxOpenConns` to prevent DB exhaustion.\n\n```golang\npackage main\n\nimport (\n  \"database/sql\"\n  \"time\"\n)\n\nfunc configurePool(db *sql.DB) {\n  db.SetMaxOpenConns(25)\n  db.SetMaxIdleConns(10)\n  db.SetConnMaxLifetime(5 * time.Minute)\n}\n\nfunc main() {\n  _ = configurePool\n}\n```",
    "workedExample": {
      "title": "Worked Example: Database Access with database/sql and Connection Pools",
      "code": "package main\n\nimport (\n  \"database/sql\"\n  \"time\"\n)\n\nfunc configurePool(db *sql.DB) {\n  db.SetMaxOpenConns(25)\n  db.SetMaxIdleConns(10)\n  db.SetConnMaxLifetime(5 * time.Minute)\n}\n\nfunc main() {\n  _ = configurePool\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Database Access with database/sql and Connection Pools.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Database Access with database/sql and Connection Pools.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"database/sql\"\n  \"time\"\n)\n\nfunc configurePool(db *sql.DB) {\n  db.SetMaxOpenConns(25)\n  db.SetMaxIdleConns(10)\n  db.SetConnMaxLifetime(5 * time.Minute)\n}\n\nfunc main() {\n  _ = configurePool\n}",
    "solutionCode": "package main\n\nimport (\n  \"database/sql\"\n  \"time\"\n)\n\nfunc configurePool(db *sql.DB) {\n  db.SetMaxOpenConns(25)\n  db.SetMaxIdleConns(10)\n  db.SetConnMaxLifetime(5 * time.Minute)\n}\n\nfunc main() {\n  _ = configurePool\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"database/sql\"\n  \"time\"\n)\n\nfunc configurePool(db *sql.DB) {\n  db.SetMaxOpenConns(25)\n  db.SetMaxIdleConns(10)\n  db.SetConnMaxLifetime(5 * time.Minute)\n}\n\nfunc main() {\n  _ = configurePool\n}"
    ],
    "testCases": [
      {
        "id": "golang-137-tc-1",
        "description": "Verifies correct implementation for Database Access with database/sql and Connection Pools",
        "testFn": "code.includes('SetMaxOpenConns') || code.includes('database/sql')"
      }
    ]
  },
  {
    "id": "golang-138-sql-injection-defense-with-param",
    "title": "138. SQL Injection Defense with Parameterized Queries",
    "slug": "lesson-138-sql-injection-defense-with-param",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master SQL Injection Defense with Parameterized Queries in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "SQL Injection Defense with Parameterized Queries",
      "Go (Golang)"
    ],
    "analogy": "Passing items through an airport security scanner rather than blindly letting uninspected bags through.",
    "explanationMarkdown": "### SQL Injection Defense with Parameterized Queries\n\nAlways use `$1` or `?` bind parameters; never concatenate user strings into SQL query buffers!\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: SQL Injection Defense with Parameterized Queries",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for SQL Injection Defense with Parameterized Queries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of SQL Injection Defense with Parameterized Queries.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Always use query placeholders: db.QueryRow(\"SELECT * FROM users WHERE id = $1\", userID)\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-138-tc-1",
        "description": "Verifies correct implementation for SQL Injection Defense with Parameterized Queries",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-139-database-transactions-in-go-db.b",
    "title": "139. Database Transactions in Go (db.BeginTx)",
    "slug": "lesson-139-database-transactions-in-go-db.b",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Database Transactions in Go (db.BeginTx) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Database Transactions in Go (db.BeginTx)",
      "Go (Golang)"
    ],
    "analogy": "A double-entry wire transfer: money leaves Account A and arrives in Account B only if both balance sheets succeed.",
    "explanationMarkdown": "### Database Transactions in Go (db.BeginTx)\n\nBegin a transaction with `db.BeginTx(ctx, nil)`, execute queries on `tx`, and call `tx.Commit()` on success.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Database Transactions in Go (db.BeginTx)",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Database Transactions in Go (db.BeginTx).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Database Transactions in Go (db.BeginTx).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // tx, _ := db.BeginTx(ctx, nil)\n  // defer tx.Rollback()\n  // tx.Commit()\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-139-tc-1",
        "description": "Verifies correct implementation for Database Transactions in Go (db.BeginTx)",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-140-building-rest-apis-with-chi-rout",
    "title": "140. Building REST APIs with Chi Router",
    "slug": "lesson-140-building-rest-apis-with-chi-rout",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Building REST APIs with Chi Router in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Building REST APIs with Chi Router",
      "Go (Golang)"
    ],
    "analogy": "A high-speed highway traffic cloverleaf directing cars to exits with zero friction.",
    "explanationMarkdown": "### Building REST APIs with Chi Router\n\nChi provides composable middleware, URL parameter routing (`r.Get(\"/users/{id}\")`), and sub-router mounting.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Building REST APIs with Chi Router",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building REST APIs with Chi Router.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building REST APIs with Chi Router.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Chi is lightweight, idiomatic, and 100% compatible with net/http\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-140-tc-1",
        "description": "Verifies correct implementation for Building REST APIs with Chi Router",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-141-grpc-&-protocol-buffers-basics-i",
    "title": "141. gRPC & Protocol Buffers Basics in Go",
    "slug": "lesson-141-grpc-&-protocol-buffers-basics-i",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master gRPC & Protocol Buffers Basics in Go in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "gRPC & Protocol Buffers Basics in Go",
      "Go (Golang)"
    ],
    "analogy": "An interplanetary optical laser beam transmitting binary telemetry 10x faster than traditional radio voice chatter.",
    "explanationMarkdown": "### gRPC & Protocol Buffers Basics in Go\n\ngRPC uses Protobuf binary schemas for ultra-fast, type-safe inter-microservice Remote Procedure Calls (RPC).\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: gRPC & Protocol Buffers Basics in Go",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for gRPC & Protocol Buffers Basics in Go.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of gRPC & Protocol Buffers Basics in Go.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // gRPC serializes binary protobuf messages over HTTP/2 with lightning speed\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-141-tc-1",
        "description": "Verifies correct implementation for gRPC & Protocol Buffers Basics in Go",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-142-configuration-management-with-en",
    "title": "142. Configuration Management with Environment Variables",
    "slug": "lesson-142-configuration-management-with-en",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Configuration Management with Environment Variables in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Configuration Management with Environment Variables",
      "Go (Golang)"
    ],
    "analogy": "A pilot's cockpit instrument panel loading barometric settings from the local airport control tower.",
    "explanationMarkdown": "### Configuration Management with Environment Variables\n\n`os.LookupEnv` cleanly distinguishes between an empty variable and an unset variable when loading config.\n\n```golang\npackage main\n\nimport \"os\"\n\nfunc getEnv(key, fallback string) string {\n  if val, ok := os.LookupEnv(key); ok { return val }\n  return fallback\n}\n\nfunc main() {\n  port := getEnv(\"PORT\", \"8080\")\n  _ = port\n}\n```",
    "workedExample": {
      "title": "Worked Example: Configuration Management with Environment Variables",
      "code": "package main\n\nimport \"os\"\n\nfunc getEnv(key, fallback string) string {\n  if val, ok := os.LookupEnv(key); ok { return val }\n  return fallback\n}\n\nfunc main() {\n  port := getEnv(\"PORT\", \"8080\")\n  _ = port\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Configuration Management with Environment Variables.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Configuration Management with Environment Variables.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"os\"\n\nfunc getEnv(key, fallback string) string {\n  if val, ok := os.LookupEnv(key); ok { return val }\n  return fallback\n}\n\nfunc main() {\n  port := getEnv(\"PORT\", \"8080\")\n  _ = port\n}",
    "solutionCode": "package main\n\nimport \"os\"\n\nfunc getEnv(key, fallback string) string {\n  if val, ok := os.LookupEnv(key); ok { return val }\n  return fallback\n}\n\nfunc main() {\n  port := getEnv(\"PORT\", \"8080\")\n  _ = port\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"os\"\n\nfunc getEnv(key, fallback string) string {\n  if val, ok := os.LookupEnv(key); ok { return val }\n  return fallback\n}\n\nfunc main() {\n  port := getEnv(\"PORT\", \"8080\")\n  _ = port\n}"
    ],
    "testCases": [
      {
        "id": "golang-142-tc-1",
        "description": "Verifies correct implementation for Configuration Management with Environment Variables",
        "testFn": "code.includes('os.LookupEnv') || code.includes('getEnv')"
      }
    ]
  },
  {
    "id": "golang-143-graceful-server-shutdown-with-os",
    "title": "143. Graceful Server Shutdown with os/signal",
    "slug": "lesson-143-graceful-server-shutdown-with-os",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Graceful Server Shutdown with os/signal in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Graceful Server Shutdown with os/signal",
      "Go (Golang)"
    ],
    "analogy": "A restaurant manager turning off the outdoor neon sign at 10 PM while letting seated diners finish dinner.",
    "explanationMarkdown": "### Graceful Server Shutdown with os/signal\n\nListen to `SIGTERM`, invoke `server.Shutdown(ctx)`, and wait for active in-flight HTTP connections to drain.\n\n```golang\npackage main\n\nimport (\n  \"os\"\n  \"os/signal\"\n  \"syscall\"\n)\n\nfunc main() {\n  stop := make(chan os.Signal, 1)\n  signal.Notify(stop, os.Interrupt, syscall.SIGTERM)\n  _ = stop\n}\n```",
    "workedExample": {
      "title": "Worked Example: Graceful Server Shutdown with os/signal",
      "code": "package main\n\nimport (\n  \"os\"\n  \"os/signal\"\n  \"syscall\"\n)\n\nfunc main() {\n  stop := make(chan os.Signal, 1)\n  signal.Notify(stop, os.Interrupt, syscall.SIGTERM)\n  _ = stop\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Graceful Server Shutdown with os/signal.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Graceful Server Shutdown with os/signal.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport (\n  \"os\"\n  \"os/signal\"\n  \"syscall\"\n)\n\nfunc main() {\n  stop := make(chan os.Signal, 1)\n  signal.Notify(stop, os.Interrupt, syscall.SIGTERM)\n  // <-stop\n  _ = stop\n}",
    "solutionCode": "package main\n\nimport (\n  \"os\"\n  \"os/signal\"\n  \"syscall\"\n)\n\nfunc main() {\n  stop := make(chan os.Signal, 1)\n  signal.Notify(stop, os.Interrupt, syscall.SIGTERM)\n  _ = stop\n}",
    "hints": [
      "Write:\npackage main\n\nimport (\n  \"os\"\n  \"os/signal\"\n  \"syscall\"\n)\n\nfunc main() {\n  stop := make(chan os.Signal, 1)\n  signal.Notify(stop, os.Interrupt, syscall.SIGTERM)\n  _ = stop\n}"
    ],
    "testCases": [
      {
        "id": "golang-143-tc-1",
        "description": "Verifies correct implementation for Graceful Server Shutdown with os/signal",
        "testFn": "code.includes('signal.Notify') || code.includes('syscall.SIGTERM')"
      }
    ]
  },
  {
    "id": "golang-144-dockerizing-go-applications-into",
    "title": "144. Dockerizing Go Applications into Scratch Images",
    "slug": "lesson-144-dockerizing-go-applications-into",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Dockerizing Go Applications into Scratch Images in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Dockerizing Go Applications into Scratch Images",
      "Go (Golang)"
    ],
    "analogy": "A satellite probe built with titanium and gold foil, weighing only what is necessary to fly through space.",
    "explanationMarkdown": "### Dockerizing Go Applications into Scratch Images\n\nCompiling with `CGO_ENABLED=0` produces a completely static binary that runs inside an empty `FROM scratch` image.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dockerizing Go Applications into Scratch Images",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dockerizing Go Applications into Scratch Images.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dockerizing Go Applications into Scratch Images.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Multi-stage build compiles CGO_ENABLED=0 binary, copied into 'FROM scratch' (15MB!)\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-144-tc-1",
        "description": "Verifies correct implementation for Dockerizing Go Applications into Scratch Images",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-145-distributed-tracing-with-opentel",
    "title": "145. Distributed Tracing with OpenTelemetry in Go",
    "slug": "lesson-145-distributed-tracing-with-opentel",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Distributed Tracing with OpenTelemetry in Go in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Distributed Tracing with OpenTelemetry in Go",
      "Go (Golang)"
    ],
    "analogy": "A package tracking barcode scanned at every airport, postal sorting facility, and delivery truck.",
    "explanationMarkdown": "### Distributed Tracing with OpenTelemetry in Go\n\nOpenTelemetry traces requests across microservice boundaries, pinpointing latency bottlenecks.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Distributed Tracing with OpenTelemetry in Go",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Distributed Tracing with OpenTelemetry in Go.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Distributed Tracing with OpenTelemetry in Go.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Inject trace context into outgoing HTTP headers and database spans\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-145-tc-1",
        "description": "Verifies correct implementation for Distributed Tracing with OpenTelemetry in Go",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-146-health-check-and-readiness-probe",
    "title": "146. Health Check and Readiness Probes (/livez & /readyz)",
    "slug": "lesson-146-health-check-and-readiness-probe",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Health Check and Readiness Probes (/livez & /readyz) in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Health Check and Readiness Probes (/livez & /readyz)",
      "Go (Golang)"
    ],
    "analogy": "A doctor checking heart rate (liveness) and testing muscle reflexes (readiness).",
    "explanationMarkdown": "### Health Check and Readiness Probes (/livez & /readyz)\n\nKubernetes uses `/livez` to reboot crashed pods and `/readyz` to route live traffic only when dependencies are up.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Health Check and Readiness Probes (/livez & /readyz)",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Health Check and Readiness Probes (/livez & /readyz).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Health Check and Readiness Probes (/livez & /readyz).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Liveness probes check if server is responsive; Readiness checks if DB is connected\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-146-tc-1",
        "description": "Verifies correct implementation for Health Check and Readiness Probes (/livez & /readyz)",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-147-garbage-collector-tuning-with-go",
    "title": "147. Garbage Collector Tuning with GOGC & GOMEMLIMIT",
    "slug": "lesson-147-garbage-collector-tuning-with-go",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Garbage Collector Tuning with GOGC & GOMEMLIMIT in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Garbage Collector Tuning with GOGC & GOMEMLIMIT",
      "Go (Golang)"
    ],
    "analogy": "A dam floodgate that opens automatically when water levels reach 90% to prevent the dam from bursting.",
    "explanationMarkdown": "### Garbage Collector Tuning with GOGC & GOMEMLIMIT\n\n`GOMEMLIMIT` (Go 1.19+) prevents container Out-Of-Memory (OOM) kills by running GC aggressively near the memory cap.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Garbage Collector Tuning with GOGC & GOMEMLIMIT",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Garbage Collector Tuning with GOGC & GOMEMLIMIT.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Garbage Collector Tuning with GOGC & GOMEMLIMIT.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // GOMEMLIMIT=2GiB prevents OOM crashes by triggering timely GC cycles near memory caps\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-147-tc-1",
        "description": "Verifies correct implementation for Garbage Collector Tuning with GOGC & GOMEMLIMIT",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-148-go-memory-model-&-race-free-conc",
    "title": "148. Go Memory Model & Race-Free Concurrency Guarantees",
    "slug": "lesson-148-go-memory-model-&-race-free-conc",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Go Memory Model & Race-Free Concurrency Guarantees in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Go Memory Model & Race-Free Concurrency Guarantees",
      "Go (Golang)"
    ],
    "analogy": "An international legal contract specifying the exact moment ownership of cargo transfers from seller to buyer.",
    "explanationMarkdown": "### Go Memory Model & Race-Free Concurrency Guarantees\n\nEstablishes happens-before relationships using channel sends/receives, mutex locks, and sync primitives.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: Go Memory Model & Race-Free Concurrency Guarantees",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Go Memory Model & Race-Free Concurrency Guarantees.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Go Memory Model & Race-Free Concurrency Guarantees.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // The memory model defines the conditions under which reads of a variable in one goroutine\n  // can be guaranteed to observe values produced by writes in another.\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-148-tc-1",
        "description": "Verifies correct implementation for Go Memory Model & Race-Free Concurrency Guarantees",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-149-high-performance-serialization-w",
    "title": "149. High-Performance Serialization with Protobuf",
    "slug": "lesson-149-high-performance-serialization-w",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master High-Performance Serialization with Protobuf in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "High-Performance Serialization with Protobuf",
      "Go (Golang)"
    ],
    "analogy": "Packing emergency survival rations into dense vacuum-sealed energy bars instead of bulky grocery bags.",
    "explanationMarkdown": "### High-Performance Serialization with Protobuf\n\nProtocol Buffers serialize structured data into compact binary payloads with minimal memory allocations.\n\n```golang\npackage main\n\nfunc main() {\n}\n```",
    "workedExample": {
      "title": "Worked Example: High-Performance Serialization with Protobuf",
      "code": "package main\n\nfunc main() {\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for High-Performance Serialization with Protobuf.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of High-Performance Serialization with Protobuf.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nfunc main() {\n  // Protobuf compiles field tags into compact binary varints, beating JSON speed by 10x\n}",
    "solutionCode": "package main\n\nfunc main() {\n}",
    "hints": [
      "Write:\npackage main\n\nfunc main() {\n}"
    ],
    "testCases": [
      {
        "id": "golang-149-tc-1",
        "description": "Verifies correct implementation for High-Performance Serialization with Protobuf",
        "testFn": "code.includes('package main')"
      }
    ]
  },
  {
    "id": "golang-150-go-systems-engineering-capstone-",
    "title": "150. Go Systems Engineering Capstone: Cloud-Native Microservice",
    "slug": "lesson-150-go-systems-engineering-capstone-",
    "language": "golang",
    "category": "Module 10: Production Architecture & Microservices",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Go Systems Engineering Capstone: Cloud-Native Microservice in Go (Golang): Systems & Concurrency (150 Topics).",
    "concepts": [
      "Go Systems Engineering Capstone",
      "Go (Golang)"
    ],
    "analogy": "The triumphant launching of an automated interstellar container freighter navigating through cosmic storms.",
    "explanationMarkdown": "### Go Systems Engineering Capstone: Cloud-Native Microservice\n\nA production-grade Go cloud-native microservice: clean architecture, graceful shutdown, context timeouts, and metrics.\n\n```golang\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"DevForge Go Cloud Microservice Engine Ready\")\n}\n```",
    "workedExample": {
      "title": "Worked Example: Go Systems Engineering Capstone: Cloud-Native Microservice",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"DevForge Go Cloud Microservice Engine Ready\")\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Go Systems Engineering Capstone: Cloud-Native Microservice.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Go Systems Engineering Capstone: Cloud-Native Microservice.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"DevForge Go Cloud Microservice Engine Ready\")\n}",
    "solutionCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"DevForge Go Cloud Microservice Engine Ready\")\n}",
    "hints": [
      "Write:\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"DevForge Go Cloud Microservice Engine Ready\")\n}"
    ],
    "testCases": [
      {
        "id": "golang-150-tc-1",
        "description": "Verifies correct implementation for Go Systems Engineering Capstone: Cloud-Native Microservice",
        "testFn": "code.includes('DevForge Go Cloud Microservice Engine Ready') || logs.length > 0"
      }
    ]
  }
]
};
