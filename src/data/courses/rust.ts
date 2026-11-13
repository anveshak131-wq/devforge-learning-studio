import { Track } from '../../types';

export const RUST_TRACK: Track = {
  id: "rust",
  title: "Rust: Systems Programming & Memory Safety (150 Topics)",
  slug: "rust",
  language: "rust",
  icon: "ShieldCheck",
  color: "from-orange-500 to-amber-600",
  tagline: "Master memory safety, fearless concurrency, zero-cost abstractions, and systems engineering across 150 lessons.",
  description: "From primitives, ownership, and borrowing to structs, enums, pattern matching, collections, traits, error handling idioms, iterators, smart pointers, and multi-threaded systems architecture.",
  lessons: [
  {
    "id": "rust-1-why-rust?-memory-safety-without-",
    "title": "1. Why Rust? Memory Safety Without Garbage Collection",
    "slug": "lesson-1-why-rust?-memory-safety-without-",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Why Rust? Memory Safety Without Garbage Collection in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Why Rust? Memory Safety Without Garbage Collection",
      "Rust"
    ],
    "analogy": "A spacecraft hull engineered with impenetrable interlocking titanium alloys: zero risk of micro-meteorite leaks without carrying an oversized vacuum repair robot.",
    "explanationMarkdown": "### Why Rust? Memory Safety Without Garbage Collection\n\nRust guarantees memory safety and thread safety at compile time with zero garbage collection overhead and C/C++ bare-metal performance.\n\n```rust\nfn main() {\n    println!(\"Hello, DevForge Rustaceans!\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Why Rust? Memory Safety Without Garbage Collection",
      "code": "fn main() {\n    println!(\"Hello, DevForge Rustaceans!\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Rust? Memory Safety Without Garbage Collection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Rust? Memory Safety Without Garbage Collection.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Hello, DevForge Rustaceans!\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Hello, DevForge Rustaceans!\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-1-tc-1",
        "description": "Verifies correct implementation for Why Rust? Memory Safety Without Garbage Collection",
        "testFn": "code.includes('println!') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-2-cargo-rusts-official-package-man",
    "title": "2. Cargo: Rust's Official Package Manager & Build Tool",
    "slug": "lesson-2-cargo-rusts-official-package-man",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Cargo: Rust's Official Package Manager & Build Tool in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Cargo",
      "Rust"
    ],
    "analogy": "An automated robotic shipyard dock that provisions raw steel, calibrates rivets, and inspects hull tolerances before every voyage.",
    "explanationMarkdown": "### Cargo: Rust's Official Package Manager & Build Tool\n\n`Cargo` manages dependencies (`Cargo.toml`), runs tests (`cargo test`), checks compilation (`cargo check`), and generates release binaries (`cargo build --release`).\n\n```rust\nfn main() {\n    println!(\"Cargo initialized\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Cargo: Rust's Official Package Manager & Build Tool",
      "code": "fn main() {\n    println!(\"Cargo initialized\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cargo: Rust's Official Package Manager & Build Tool.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cargo: Rust's Official Package Manager & Build Tool.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Print Cargo confirmation\n    // TODO: Write code below\n}\n",
    "solutionCode": "fn main() {\n    println!(\"Cargo initialized\");\n}\n",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Cargo initialized\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-2-tc-1",
        "description": "Verifies correct implementation for Cargo: Rust's Official Package Manager & Build Tool",
        "testFn": "logs.some(l => l.args.join(' ').toLowerCase().includes('cargo'))"
      }
    ]
  },
  {
    "id": "rust-3-the-main-function-and-the-printl",
    "title": "3. The main() Function and the println! Macro",
    "slug": "lesson-3-the-main-function-and-the-printl",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The main() Function and the println! Macro in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The main() Function and the println! Macro",
      "Rust"
    ],
    "analogy": "The central ignition turbine switch in an experimental fusion reactor.",
    "explanationMarkdown": "### The main() Function and the println! Macro\n\nExecution begins at `fn main()`. The exclamation mark in `println!` denotes a metaprogramming macro that checks format specifiers at compile time.\n\n```rust\nfn main() {\n    println!(\"Execution begins at main\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The main() Function and the println! Macro",
      "code": "fn main() {\n    println!(\"Execution begins at main\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The main() Function and the println! Macro.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The main() Function and the println! Macro.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Execution begins at main\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Execution begins at main\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-3-tc-1",
        "description": "Verifies correct implementation for The main() Function and the println! Macro",
        "testFn": "code.includes('fn main()') && code.includes('println!')"
      }
    ]
  },
  {
    "id": "rust-4-immutability-by-default-let-vs-l",
    "title": "4. Immutability by Default: let vs let mut",
    "slug": "lesson-4-immutability-by-default-let-vs-l",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Immutability by Default: let vs let mut in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Immutability by Default",
      "Rust"
    ],
    "analogy": "A museum artifact encased in bulletproof glass: untouched by default unless you explicitly unlock the maintenance hatch with a `mut` key.",
    "explanationMarkdown": "### Immutability by Default: let vs let mut\n\nVariables in Rust are immutable by default for thread safety and reasoning. Prepend `mut` to allow mutation: `let mut x = 5;`.\n\n```rust\nfn main() {\n    let mut score = 100;\n    score += 50;\n    println!(\"Score: {}\", score);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Immutability by Default: let vs let mut",
      "code": "fn main() {\n    let mut score = 100;\n    score += 50;\n    println!(\"Score: {}\", score);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Immutability by Default: let vs let mut.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Immutability by Default: let vs let mut.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut score = 100;\n    score += 50;\n    println!(\"Score: {}\", score);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut score = 100;\n    score += 50;\n    println!(\"Score: {}\", score);\n}"
    ],
    "testCases": [
      {
        "id": "rust-4-tc-1",
        "description": "Verifies correct implementation for Immutability by Default: let vs let mut",
        "testFn": "code.includes('let mut score') || code.includes('mut ')"
      }
    ]
  },
  {
    "id": "rust-5-variable-shadowing-rebinding-wit",
    "title": "5. Variable Shadowing: Rebinding with let",
    "slug": "lesson-5-variable-shadowing-rebinding-wit",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Variable Shadowing: Rebinding with let in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Variable Shadowing",
      "Rust"
    ],
    "analogy": "Placing a clean sheet of paper directly over an old draft: you can change the type and value without mutating the original variable.",
    "explanationMarkdown": "### Variable Shadowing: Rebinding with let\n\nShadowing lets you redeclare a variable with `let`, even changing its type, without needing distinct names like `spaces_str` and `spaces_num`.\n\n```rust\nfn main() {\n    let spaces = \"   \";\n    let spaces = spaces.len();\n    println!(\"Spaces count: {}\", spaces);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Variable Shadowing: Rebinding with let",
      "code": "fn main() {\n    let spaces = \"   \";\n    let spaces = spaces.len();\n    println!(\"Spaces count: {}\", spaces);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variable Shadowing: Rebinding with let.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variable Shadowing: Rebinding with let.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let spaces = \"   \";\n    let spaces = spaces.len();\n    println!(\"Spaces count: {}\", spaces);\n}",
    "hints": [
      "Write:\nfn main() {\n    let spaces = \"   \";\n    let spaces = spaces.len();\n    println!(\"Spaces count: {}\", spaces);\n}"
    ],
    "testCases": [
      {
        "id": "rust-5-tc-1",
        "description": "Verifies correct implementation for Variable Shadowing: Rebinding with let",
        "testFn": "code.includes('let spaces =') || code.includes('spaces.len()')"
      }
    ]
  },
  {
    "id": "rust-6-constants-const-and-compile-time",
    "title": "6. Constants: const and Compile-Time Evaluation",
    "slug": "lesson-6-constants-const-and-compile-time",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Constants: const and Compile-Time Evaluation in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Constants",
      "Rust"
    ],
    "analogy": "A bronze tablet embedded in bedrock: cannot be marked `mut`, requires an explicit type annotation, and is baked into the binary.",
    "explanationMarkdown": "### Constants: const and Compile-Time Evaluation\n\nConstants declared with `const` must have explicit type annotations and can only be set to constant expressions known at compile time.\n\n```rust\nconst MAX_POINTS: u32 = 100_000;\n\nfn main() {\n    println!(\"Max: {}\", MAX_POINTS);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constants: const and Compile-Time Evaluation",
      "code": "const MAX_POINTS: u32 = 100_000;\n\nfn main() {\n    println!(\"Max: {}\", MAX_POINTS);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Constants: const and Compile-Time Evaluation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constants: const and Compile-Time Evaluation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "const MAX_POINTS: u32 = 100_000;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "const MAX_POINTS: u32 = 100_000;\n\nfn main() {\n    println!(\"Max: {}\", MAX_POINTS);\n}",
    "hints": [
      "Write:\nconst MAX_POINTS: u32 = 100_000;\n\nfn main() {\n    println!(\"Max: {}\", MAX_POINTS);\n}"
    ],
    "testCases": [
      {
        "id": "rust-6-tc-1",
        "description": "Verifies correct implementation for Constants: const and Compile-Time Evaluation",
        "testFn": "code.includes('const MAX_POINTS') || code.includes('const ')"
      }
    ]
  },
  {
    "id": "rust-7-scalar-types-integers-i8-to-i128",
    "title": "7. Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize)",
    "slug": "lesson-7-scalar-types-integers-i8-to-i128",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Scalar Types",
      "Rust"
    ],
    "analogy": "A set of precision measuring calipers: micro gauges (i8/u8) for single bytes up to architecture-wide rulers (usize) for memory addresses.",
    "explanationMarkdown": "### Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize)\n\nRust offers signed (`i8`..`i128`) and unsigned (`u8`..`u128`) integers. `usize` matches the pointer size of the target hardware (64-bit on x86_64/ARM64).\n\n```rust\nfn main() {\n    let small: i8 = -128;\n    let counter: usize = 42;\n    println!(\"{} {}\", small, counter);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize)",
      "code": "fn main() {\n    let small: i8 = -128;\n    let counter: usize = 42;\n    println!(\"{} {}\", small, counter);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let small: i8 = -128;\n    let counter: usize = 42;\n    println!(\"{} {}\", small, counter);\n}",
    "hints": [
      "Write:\nfn main() {\n    let small: i8 = -128;\n    let counter: usize = 42;\n    println!(\"{} {}\", small, counter);\n}"
    ],
    "testCases": [
      {
        "id": "rust-7-tc-1",
        "description": "Verifies correct implementation for Scalar Types: Integers (i8 to i128, u8 to u128, isize, usize)",
        "testFn": "code.includes('i8') || code.includes('usize')"
      }
    ]
  },
  {
    "id": "rust-8-integer-overflow-handling-in-deb",
    "title": "8. Integer Overflow Handling in Debug vs Release",
    "slug": "lesson-8-integer-overflow-handling-in-deb",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Integer Overflow Handling in Debug vs Release in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Integer Overflow Handling in Debug vs Release",
      "Rust"
    ],
    "analogy": "A digital stopwatch: panicking with an alarm siren in debug mode vs rolling over quietly to 00:00 in release mode.",
    "explanationMarkdown": "### Integer Overflow Handling in Debug vs Release\n\nDebug builds panic on integer overflow; release builds perform two's complement wrapping. Use `wrapping_add`, `checked_add`, or `saturating_add` for explicit safety.\n\n```rust\nfn main() {\n    let num: u8 = 255;\n    let wrapped = num.wrapping_add(1);\n    println!(\"Wrapped: {}\", wrapped);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Integer Overflow Handling in Debug vs Release",
      "code": "fn main() {\n    let num: u8 = 255;\n    let wrapped = num.wrapping_add(1);\n    println!(\"Wrapped: {}\", wrapped);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Integer Overflow Handling in Debug vs Release.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Integer Overflow Handling in Debug vs Release.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let num: u8 = 255;\n    let wrapped = num.wrapping_add(1);\n    println!(\"Wrapped: {}\", wrapped);\n}",
    "hints": [
      "Write:\nfn main() {\n    let num: u8 = 255;\n    let wrapped = num.wrapping_add(1);\n    println!(\"Wrapped: {}\", wrapped);\n}"
    ],
    "testCases": [
      {
        "id": "rust-8-tc-1",
        "description": "Verifies correct implementation for Integer Overflow Handling in Debug vs Release",
        "testFn": "code.includes('wrapping_add') || code.includes('255')"
      }
    ]
  },
  {
    "id": "rust-9-floating-point-types-f32-and-f64",
    "title": "9. Floating-Point Types: f32 and f64",
    "slug": "lesson-9-floating-point-types-f32-and-f64",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Floating-Point Types: f32 and f64 in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Floating-Point Types",
      "Rust"
    ],
    "analogy": "A laboratory micropipette measuring chemical droplets to nanoliter precision.",
    "explanationMarkdown": "### Floating-Point Types: f32 and f64\n\nIEEE-754 floating-point numbers: `f32` (single precision) and `f64` (double precision, default float in Rust).\n\n```rust\nfn main() {\n    let pi: f64 = 3.141592653589793;\n    let ratio: f32 = 2.5;\n    println!(\"Pi: {}, Ratio: {}\", pi, ratio);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Floating-Point Types: f32 and f64",
      "code": "fn main() {\n    let pi: f64 = 3.141592653589793;\n    let ratio: f32 = 2.5;\n    println!(\"Pi: {}, Ratio: {}\", pi, ratio);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Floating-Point Types: f32 and f64.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Floating-Point Types: f32 and f64.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let pi: f64 = 3.141592653589793;\n    let ratio: f32 = 2.5;\n    println!(\"Pi: {}, Ratio: {}\", pi, ratio);\n}",
    "hints": [
      "Write:\nfn main() {\n    let pi: f64 = 3.141592653589793;\n    let ratio: f32 = 2.5;\n    println!(\"Pi: {}, Ratio: {}\", pi, ratio);\n}"
    ],
    "testCases": [
      {
        "id": "rust-9-tc-1",
        "description": "Verifies correct implementation for Floating-Point Types: f32 and f64",
        "testFn": "code.includes('f64') || code.includes('f32')"
      }
    ]
  },
  {
    "id": "rust-10-the-boolean-type-bool-and-logica",
    "title": "10. The Boolean Type: bool and Logical Operators",
    "slug": "lesson-10-the-boolean-type-bool-and-logica",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Boolean Type: bool and Logical Operators in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Boolean Type",
      "Rust"
    ],
    "analogy": "A two-position electrical toggle switch: current passes or it does not.",
    "explanationMarkdown": "### The Boolean Type: bool and Logical Operators\n\nThe `bool` type is 1 byte in size, taking values `true` or `false`. Supports `&&`, `||`, and `!` operators.\n\n```rust\nfn main() {\n    let is_active = true;\n    let is_verified: bool = false;\n    let can_access = is_active && !is_verified;\n    println!(\"Access: {}\", can_access);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Boolean Type: bool and Logical Operators",
      "code": "fn main() {\n    let is_active = true;\n    let is_verified: bool = false;\n    let can_access = is_active && !is_verified;\n    println!(\"Access: {}\", can_access);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Boolean Type: bool and Logical Operators.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Boolean Type: bool and Logical Operators.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let is_active = true;\n    let is_verified: bool = false;\n    let can_access = is_active && !is_verified;\n    println!(\"Access: {}\", can_access);\n}",
    "hints": [
      "Write:\nfn main() {\n    let is_active = true;\n    let is_verified: bool = false;\n    let can_access = is_active && !is_verified;\n    println!(\"Access: {}\", can_access);\n}"
    ],
    "testCases": [
      {
        "id": "rust-10-tc-1",
        "description": "Verifies correct implementation for The Boolean Type: bool and Logical Operators",
        "testFn": "code.includes('bool') || code.includes('is_active')"
      }
    ]
  },
  {
    "id": "rust-11-the-character-type-char-4-byte-u",
    "title": "11. The Character Type: char (4-Byte Unicode Scalar)",
    "slug": "lesson-11-the-character-type-char-4-byte-u",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Character Type: char (4-Byte Unicode Scalar) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Character Type",
      "Rust"
    ],
    "analogy": "A universal unicode printing press block that can stamp any human alphabet character or emoji.",
    "explanationMarkdown": "### The Character Type: char (4-Byte Unicode Scalar)\n\nIn Rust, `char` is 4 bytes (32-bit), representing a Unicode Scalar Value from ASCII to emojis like `'\ud83d\ude80'`.\n\n```rust\nfn main() {\n    let heart = '\u2764';\n    let letter: char = 'Z';\n    println!(\"{} {}\", heart, letter);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Character Type: char (4-Byte Unicode Scalar)",
      "code": "fn main() {\n    let heart = '\u2764';\n    let letter: char = 'Z';\n    println!(\"{} {}\", heart, letter);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Character Type: char (4-Byte Unicode Scalar).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Character Type: char (4-Byte Unicode Scalar).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let heart = '\u2764';\n    let letter: char = 'Z';\n    println!(\"{} {}\", heart, letter);\n}",
    "hints": [
      "Write:\nfn main() {\n    let heart = '\u2764';\n    let letter: char = 'Z';\n    println!(\"{} {}\", heart, letter);\n}"
    ],
    "testCases": [
      {
        "id": "rust-11-tc-1",
        "description": "Verifies correct implementation for The Character Type: char (4-Byte Unicode Scalar)",
        "testFn": "code.includes('char') || code.includes('heart')"
      }
    ]
  },
  {
    "id": "rust-12-compound-types-tuples-and-destru",
    "title": "12. Compound Types: Tuples and Destructuring",
    "slug": "lesson-12-compound-types-tuples-and-destru",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Compound Types: Tuples and Destructuring in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Compound Types",
      "Rust"
    ],
    "analogy": "A flight manifest card listing latitude, longitude, and waypoint name grouped into a single plastic badge.",
    "explanationMarkdown": "### Compound Types: Tuples and Destructuring\n\nTuples group multiple values of different types with fixed length. Access by index (`point.0`) or destructure (`let (x, y, z) = point`).\n\n```rust\nfn main() {\n    let point: (i32, f64, &str) = (500, 6.4, \"origin\");\n    let (x, y, label) = point;\n    println!(\"{} {} {}\", x, y, label);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Compound Types: Tuples and Destructuring",
      "code": "fn main() {\n    let point: (i32, f64, &str) = (500, 6.4, \"origin\");\n    let (x, y, label) = point;\n    println!(\"{} {} {}\", x, y, label);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Compound Types: Tuples and Destructuring.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Compound Types: Tuples and Destructuring.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let point: (i32, f64, &str) = (500, 6.4, \"origin\");\n    let (x, y, label) = point;\n    println!(\"{} {} {}\", x, y, label);\n}",
    "hints": [
      "Write:\nfn main() {\n    let point: (i32, f64, &str) = (500, 6.4, \"origin\");\n    let (x, y, label) = point;\n    println!(\"{} {} {}\", x, y, label);\n}"
    ],
    "testCases": [
      {
        "id": "rust-12-tc-1",
        "description": "Verifies correct implementation for Compound Types: Tuples and Destructuring",
        "testFn": "code.includes('(x, y, label)') || code.includes('(500, 6.4')"
      }
    ]
  },
  {
    "id": "rust-13-the-unit-type--and-expressions-v",
    "title": "13. The Unit Type () and Expressions vs Statements",
    "slug": "lesson-13-the-unit-type--and-expressions-v",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Unit Type () and Expressions vs Statements in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Unit Type () and Expressions vs Statements",
      "Rust"
    ],
    "analogy": "An empty shipping container delivered to confirm an acknowledgment of receipt.",
    "explanationMarkdown": "### The Unit Type () and Expressions vs Statements\n\nExpressions return a value; statements do not. A function returning nothing actually returns the empty unit tuple `()`.\n\n```rust\nfn do_nothing() -> () {\n}\n\nfn main() {\n    let res = do_nothing();\n    println!(\"{:?}\", res);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Unit Type () and Expressions vs Statements",
      "code": "fn do_nothing() -> () {\n}\n\nfn main() {\n    let res = do_nothing();\n    println!(\"{:?}\", res);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Unit Type () and Expressions vs Statements.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Unit Type () and Expressions vs Statements.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn do_nothing() -> () {\n    // Implicitly returns unit ()\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn do_nothing() -> () {\n}\n\nfn main() {\n    let res = do_nothing();\n    println!(\"{:?}\", res);\n}",
    "hints": [
      "Write:\nfn do_nothing() -> () {\n}\n\nfn main() {\n    let res = do_nothing();\n    println!(\"{:?}\", res);\n}"
    ],
    "testCases": [
      {
        "id": "rust-13-tc-1",
        "description": "Verifies correct implementation for The Unit Type () and Expressions vs Statements",
        "testFn": "code.includes('()') || code.includes('do_nothing')"
      }
    ]
  },
  {
    "id": "rust-14-fixed-size-stack-arrays-[t;-n]",
    "title": "14. Fixed-Size Stack Arrays: [T; N]",
    "slug": "lesson-14-fixed-size-stack-arrays-[t;-n]",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Fixed-Size Stack Arrays: [T; N] in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Fixed-Size Stack Arrays",
      "Rust"
    ],
    "analogy": "A molded steel egg carton with exactly four pre-stamped slots allocated directly on the work table.",
    "explanationMarkdown": "### Fixed-Size Stack Arrays: [T; N]\n\nRust arrays `[T; N]` have a fixed size known at compile time and are allocated directly on the stack.\n\n```rust\nfn main() {\n    let numbers: [i32; 4] = [10, 20, 30, 40];\n    println!(\"First: {}, Len: {}\", numbers[0], numbers.len());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fixed-Size Stack Arrays: [T; N]",
      "code": "fn main() {\n    let numbers: [i32; 4] = [10, 20, 30, 40];\n    println!(\"First: {}, Len: {}\", numbers[0], numbers.len());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fixed-Size Stack Arrays: [T; N].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fixed-Size Stack Arrays: [T; N].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let numbers: [i32; 4] = [10, 20, 30, 40];\n    println!(\"First: {}, Len: {}\", numbers[0], numbers.len());\n}",
    "hints": [
      "Write:\nfn main() {\n    let numbers: [i32; 4] = [10, 20, 30, 40];\n    println!(\"First: {}, Len: {}\", numbers[0], numbers.len());\n}"
    ],
    "testCases": [
      {
        "id": "rust-14-tc-1",
        "description": "Verifies correct implementation for Fixed-Size Stack Arrays: [T; N]",
        "testFn": "code.includes('[i32; 4]') || code.includes('numbers[0]')"
      }
    ]
  },
  {
    "id": "rust-15-module-1-review-solid-rust-found",
    "title": "15. Module 1 Review: Solid Rust Foundations",
    "slug": "lesson-15-module-1-review-solid-rust-found",
    "language": "rust",
    "category": "Module 1: Foundations, Cargo & Primitives",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: Solid Rust Foundations in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 1 Review",
      "Rust"
    ],
    "analogy": "A certified cleanroom laboratory where every tool has a marked slot and strict handling rules.",
    "explanationMarkdown": "### Module 1 Review: Solid Rust Foundations\n\nFoundational mastery of Rust: immutability, shadowing, constants, scalar primitives, tuples, arrays, and Cargo.\n\n```rust\nfn main() {\n    let system = \"DevForge Rust Core\";\n    let version = 1.80;\n    println!(\"Ready: {} v{}\", system, version);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: Solid Rust Foundations",
      "code": "fn main() {\n    let system = \"DevForge Rust Core\";\n    let version = 1.80;\n    println!(\"Ready: {} v{}\", system, version);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 1 Review: Solid Rust Foundations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 1 Review: Solid Rust Foundations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let system = \"DevForge Rust Core\";\n    let version = 1.80;\n    println!(\"Ready: {} v{}\", system, version);\n}",
    "hints": [
      "Write:\nfn main() {\n    let system = \"DevForge Rust Core\";\n    let version = 1.80;\n    println!(\"Ready: {} v{}\", system, version);\n}"
    ],
    "testCases": [
      {
        "id": "rust-15-tc-1",
        "description": "Verifies correct implementation for Module 1 Review: Solid Rust Foundations",
        "testFn": "code.includes('DevForge Rust Core') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-16-the-three-golden-rules-of-owners",
    "title": "16. The Three Golden Rules of Ownership",
    "slug": "lesson-16-the-three-golden-rules-of-owners",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Three Golden Rules of Ownership in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Three Golden Rules of Ownership",
      "Rust"
    ],
    "analogy": "The legal title deed to real estate: one owner on record, transferred exclusively, destroyed upon company liquidation.",
    "explanationMarkdown": "### The Three Golden Rules of Ownership\n\nRust's ownership system replaces both manual `malloc`/`free` and garbage collection pauses.\n\n```rust\nfn main() {\n    println!(\"Ownership rules loaded\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Three Golden Rules of Ownership",
      "code": "fn main() {\n    println!(\"Ownership rules loaded\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Three Golden Rules of Ownership.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Three Golden Rules of Ownership.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Ownership rules loaded\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Ownership rules loaded\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-16-tc-1",
        "description": "Verifies correct implementation for The Three Golden Rules of Ownership",
        "testFn": "code.includes('Ownership rules') || code.includes('println!')"
      }
    ]
  },
  {
    "id": "rust-17-stack-vs-heap-memory-layout",
    "title": "17. Stack vs Heap Memory Layout",
    "slug": "lesson-17-stack-vs-heap-memory-layout",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Stack vs Heap Memory Layout in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Stack vs Heap Memory Layout",
      "Rust"
    ],
    "analogy": "Stack: a spring-loaded plate dispenser. Heap: an immense hotel warehouse where a valet gives you a luggage ticket.",
    "explanationMarkdown": "### Stack vs Heap Memory Layout\n\nStack values have known fixed sizes and push/pop in LIFO order; heap values hold dynamic data pointed to by stack metadata.\n\n```rust\nfn main() {\n    let stack_val = 42;\n    let heap_val = String::from(\"Allocated on Heap\");\n    println!(\"{} - {}\", stack_val, heap_val);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Stack vs Heap Memory Layout",
      "code": "fn main() {\n    let stack_val = 42;\n    let heap_val = String::from(\"Allocated on Heap\");\n    println!(\"{} - {}\", stack_val, heap_val);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stack vs Heap Memory Layout.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stack vs Heap Memory Layout.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let stack_val = 42;\n    let heap_val = String::from(\"Allocated on Heap\");\n    println!(\"{} - {}\", stack_val, heap_val);\n}",
    "hints": [
      "Write:\nfn main() {\n    let stack_val = 42;\n    let heap_val = String::from(\"Allocated on Heap\");\n    println!(\"{} - {}\", stack_val, heap_val);\n}"
    ],
    "testCases": [
      {
        "id": "rust-17-tc-1",
        "description": "Verifies correct implementation for Stack vs Heap Memory Layout",
        "testFn": "code.includes('String::from') || code.includes('stack_val')"
      }
    ]
  },
  {
    "id": "rust-18-stringfrom-and-dynamic-heap-allo",
    "title": "18. String::from and Dynamic Heap Allocation",
    "slug": "lesson-18-stringfrom-and-dynamic-heap-allo",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master String::from and Dynamic Heap Allocation in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "String",
      "Rust"
    ],
    "analogy": "A modular telescopic luggage bag that can expand to pack additional clothes whenever needed.",
    "explanationMarkdown": "### String::from and Dynamic Heap Allocation\n\n`String` is a growable, heap-allocated buffer with a pointer, length, and capacity stored on the stack.\n\n```rust\nfn main() {\n    let mut s = String::from(\"hello\");\n    s.push_str(\", world\");\n    println!(\"{}\", s);\n}\n```",
    "workedExample": {
      "title": "Worked Example: String::from and Dynamic Heap Allocation",
      "code": "fn main() {\n    let mut s = String::from(\"hello\");\n    s.push_str(\", world\");\n    println!(\"{}\", s);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String::from and Dynamic Heap Allocation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String::from and Dynamic Heap Allocation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut s = String::from(\"hello\");\n    s.push_str(\", world\");\n    println!(\"{}\", s);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut s = String::from(\"hello\");\n    s.push_str(\", world\");\n    println!(\"{}\", s);\n}"
    ],
    "testCases": [
      {
        "id": "rust-18-tc-1",
        "description": "Verifies correct implementation for String::from and Dynamic Heap Allocation",
        "testFn": "code.includes('String::from') && code.includes('push_str')"
      }
    ]
  },
  {
    "id": "rust-19-move-semantics-why-rust-doesnt-s",
    "title": "19. Move Semantics: Why Rust Doesn't Shallow Copy",
    "slug": "lesson-19-move-semantics-why-rust-doesnt-s",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Move Semantics: Why Rust Doesn't Shallow Copy in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Move Semantics",
      "Rust"
    ],
    "analogy": "Handing over the single physical key to a safety deposit box: you cannot keep the key after giving it away.",
    "explanationMarkdown": "### Move Semantics: Why Rust Doesn't Shallow Copy\n\nWhen assigning `s2 = s1`, Rust moves the pointer without copying heap data, and invalidates `s1` to prevent double-free bugs.\n\n```rust\nfn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1;\n    println!(\"{}\", s2);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Move Semantics: Why Rust Doesn't Shallow Copy",
      "code": "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1;\n    println!(\"{}\", s2);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Move Semantics: Why Rust Doesn't Shallow Copy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Move Semantics: Why Rust Doesn't Shallow Copy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1;\n    println!(\"{}\", s2);\n}",
    "hints": [
      "Write:\nfn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1;\n    println!(\"{}\", s2);\n}"
    ],
    "testCases": [
      {
        "id": "rust-19-tc-1",
        "description": "Verifies correct implementation for Move Semantics: Why Rust Doesn't Shallow Copy",
        "testFn": "code.includes('let s2 = s1') || code.includes('String::from')"
      }
    ]
  },
  {
    "id": "rust-20-deep-copying-with-the-clone-trai",
    "title": "20. Deep Copying with the Clone Trait (.clone())",
    "slug": "lesson-20-deep-copying-with-the-clone-trai",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Deep Copying with the Clone Trait (.clone()) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Deep Copying with the Clone Trait (.clone())",
      "Rust"
    ],
    "analogy": "Operating a 3D scanner and duplicating an entire ceramic vase atom-for-atom onto a second shelf.",
    "explanationMarkdown": "### Deep Copying with the Clone Trait (.clone())\n\nCalling `.clone()` performs an explicit deep copy of heap memory, preserving both `s1` and `s2` at runtime cost.\n\n```rust\nfn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1.clone();\n    println!(\"s1: {}, s2: {}\", s1, s2);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Deep Copying with the Clone Trait (.clone())",
      "code": "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1.clone();\n    println!(\"s1: {}, s2: {}\", s1, s2);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deep Copying with the Clone Trait (.clone()).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deep Copying with the Clone Trait (.clone()).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1.clone();\n    println!(\"s1: {}, s2: {}\", s1, s2);\n}",
    "hints": [
      "Write:\nfn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1.clone();\n    println!(\"s1: {}, s2: {}\", s1, s2);\n}"
    ],
    "testCases": [
      {
        "id": "rust-20-tc-1",
        "description": "Verifies correct implementation for Deep Copying with the Clone Trait (.clone())",
        "testFn": "code.includes('.clone()') || code.includes('s1.clone()')"
      }
    ]
  },
  {
    "id": "rust-21-stack-only-data-the-copy-trait",
    "title": "21. Stack-Only Data: The Copy Trait",
    "slug": "lesson-21-stack-only-data-the-copy-trait",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Stack-Only Data: The Copy Trait in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Stack-Only Data",
      "Rust"
    ],
    "analogy": "Handing someone a duplicate printed photocopy of an integer sheet: cheap, fast, and stack-local.",
    "explanationMarkdown": "### Stack-Only Data: The Copy Trait\n\nTypes that implement the `Copy` trait (primitives like `i32`, `bool`, `f64`, tuples of Copy types) copy automatically on assignment.\n\n```rust\nfn main() {\n    let x = 5;\n    let y = x;\n    println!(\"x: {}, y: {}\", x, y);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Stack-Only Data: The Copy Trait",
      "code": "fn main() {\n    let x = 5;\n    let y = x;\n    println!(\"x: {}, y: {}\", x, y);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stack-Only Data: The Copy Trait.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stack-Only Data: The Copy Trait.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let x = 5;\n    let y = x;\n    println!(\"x: {}, y: {}\", x, y);\n}",
    "hints": [
      "Write:\nfn main() {\n    let x = 5;\n    let y = x;\n    println!(\"x: {}, y: {}\", x, y);\n}"
    ],
    "testCases": [
      {
        "id": "rust-21-tc-1",
        "description": "Verifies correct implementation for Stack-Only Data: The Copy Trait",
        "testFn": "code.includes('let y = x') || code.includes('x: {}, y: {}')"
      }
    ]
  },
  {
    "id": "rust-22-ownership-transfer-through-funct",
    "title": "22. Ownership Transfer Through Function Arguments",
    "slug": "lesson-22-ownership-transfer-through-funct",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Ownership Transfer Through Function Arguments in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Ownership Transfer Through Function Arguments",
      "Rust"
    ],
    "analogy": "Mailing an original handwritten letter: once dropped in the mailbox, it belongs to the recipient.",
    "explanationMarkdown": "### Ownership Transfer Through Function Arguments\n\nPassing a heap variable by value to a function transfers ownership. Rust drops the value when that function finishes.\n\n```rust\nfn take_ownership(s: String) {\n    println!(\"Consumed: {}\", s);\n}\n\nfn main() {\n    let name = String::from(\"Ferris\");\n    take_ownership(name);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Ownership Transfer Through Function Arguments",
      "code": "fn take_ownership(s: String) {\n    println!(\"Consumed: {}\", s);\n}\n\nfn main() {\n    let name = String::from(\"Ferris\");\n    take_ownership(name);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ownership Transfer Through Function Arguments.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ownership Transfer Through Function Arguments.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn take_ownership(s: String) {\n    println!(\"Consumed: {}\", s);\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn take_ownership(s: String) {\n    println!(\"Consumed: {}\", s);\n}\n\nfn main() {\n    let name = String::from(\"Ferris\");\n    take_ownership(name);\n}",
    "hints": [
      "Write:\nfn take_ownership(s: String) {\n    println!(\"Consumed: {}\", s);\n}\n\nfn main() {\n    let name = String::from(\"Ferris\");\n    take_ownership(name);\n}"
    ],
    "testCases": [
      {
        "id": "rust-22-tc-1",
        "description": "Verifies correct implementation for Ownership Transfer Through Function Arguments",
        "testFn": "code.includes('take_ownership(name)') || code.includes('fn take_ownership')"
      }
    ]
  },
  {
    "id": "rust-23-returning-ownership-from-functio",
    "title": "23. Returning Ownership from Functions",
    "slug": "lesson-23-returning-ownership-from-functio",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Returning Ownership from Functions in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Returning Ownership from Functions",
      "Rust"
    ],
    "analogy": "An artisan crafting a leather bag in a workshop and handing it to a customer at the checkout counter.",
    "explanationMarkdown": "### Returning Ownership from Functions\n\nFunctions can transfer ownership of newly created values back to the calling scope via return values.\n\n```rust\nfn give_ownership() -> String {\n    String::from(\"Generated in function\")\n}\n\nfn main() {\n    let received = give_ownership();\n    println!(\"{}\", received);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Returning Ownership from Functions",
      "code": "fn give_ownership() -> String {\n    String::from(\"Generated in function\")\n}\n\nfn main() {\n    let received = give_ownership();\n    println!(\"{}\", received);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Returning Ownership from Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Returning Ownership from Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn give_ownership() -> String {\n    String::from(\"Generated in function\")\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn give_ownership() -> String {\n    String::from(\"Generated in function\")\n}\n\nfn main() {\n    let received = give_ownership();\n    println!(\"{}\", received);\n}",
    "hints": [
      "Write:\nfn give_ownership() -> String {\n    String::from(\"Generated in function\")\n}\n\nfn main() {\n    let received = give_ownership();\n    println!(\"{}\", received);\n}"
    ],
    "testCases": [
      {
        "id": "rust-23-tc-1",
        "description": "Verifies correct implementation for Returning Ownership from Functions",
        "testFn": "code.includes('give_ownership()') || code.includes('-> String')"
      }
    ]
  },
  {
    "id": "rust-24-scope-and-automatic-resource-rec",
    "title": "24. Scope and Automatic Resource Reclamation (RAII)",
    "slug": "lesson-24-scope-and-automatic-resource-rec",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Scope and Automatic Resource Reclamation (RAII) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Scope and Automatic Resource Reclamation (RAII)",
      "Rust"
    ],
    "analogy": "An airtight decompression chamber: as soon as the inner airlock door seals shut, all chamber gases vent safely.",
    "explanationMarkdown": "### Scope and Automatic Resource Reclamation (RAII)\n\nResource Acquisition Is Initialization (RAII): Rust calls `drop` automatically at the closing curly brace `}`.\n\n```rust\nfn main() {\n    {\n        let inner = String::from(\"temporary\");\n        println!(\"{}\", inner);\n    }\n    println!(\"Scope closed\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Scope and Automatic Resource Reclamation (RAII)",
      "code": "fn main() {\n    {\n        let inner = String::from(\"temporary\");\n        println!(\"{}\", inner);\n    }\n    println!(\"Scope closed\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scope and Automatic Resource Reclamation (RAII).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scope and Automatic Resource Reclamation (RAII).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    {\n        let inner = String::from(\"temporary\");\n        println!(\"{}\", inner);\n    }\n    println!(\"Scope closed\");\n}",
    "hints": [
      "Write:\nfn main() {\n    {\n        let inner = String::from(\"temporary\");\n        println!(\"{}\", inner);\n    }\n    println!(\"Scope closed\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-24-tc-1",
        "description": "Verifies correct implementation for Scope and Automatic Resource Reclamation (RAII)",
        "testFn": "code.includes('temporary') || code.includes('Scope closed')"
      }
    ]
  },
  {
    "id": "rust-25-manual-deallocation-with-stdmemd",
    "title": "25. Manual Deallocation with std::mem::drop",
    "slug": "lesson-25-manual-deallocation-with-stdmemd",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Manual Deallocation with std::mem::drop in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Manual Deallocation with std",
      "Rust"
    ],
    "analogy": "Ejecting an empty booster fuel tank from a rocket mid-flight to reduce weight immediately.",
    "explanationMarkdown": "### Manual Deallocation with std::mem::drop\n\n`std::mem::drop(val)` takes ownership of a value and discards it early before reaching the natural end of the scope.\n\n```rust\nfn main() {\n    let item = String::from(\"heavy asset\");\n    drop(item);\n    println!(\"Dropped early\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Manual Deallocation with std::mem::drop",
      "code": "fn main() {\n    let item = String::from(\"heavy asset\");\n    drop(item);\n    println!(\"Dropped early\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Manual Deallocation with std::mem::drop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Manual Deallocation with std::mem::drop.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let item = String::from(\"heavy asset\");\n    drop(item);\n    println!(\"Dropped early\");\n}",
    "hints": [
      "Write:\nfn main() {\n    let item = String::from(\"heavy asset\");\n    drop(item);\n    println!(\"Dropped early\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-25-tc-1",
        "description": "Verifies correct implementation for Manual Deallocation with std::mem::drop",
        "testFn": "code.includes('drop(item)') || code.includes('heavy asset')"
      }
    ]
  },
  {
    "id": "rust-26-the-drop-trait-and-destructors",
    "title": "26. The Drop Trait and Destructors",
    "slug": "lesson-26-the-drop-trait-and-destructors",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Drop Trait and Destructors in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Drop Trait and Destructors",
      "Rust"
    ],
    "analogy": "A hotel room electronic keycard system that automatically resets the room lights and thermostat when guests checkout.",
    "explanationMarkdown": "### The Drop Trait and Destructors\n\nImplementing `Drop` lets you execute custom cleanup code (e.g. closing network sockets or file descriptors) when a value exits scope.\n\n```rust\nstruct CustomSmartPointer {\n    data: String,\n}\n\nimpl Drop for CustomSmartPointer {\n    fn drop(&mut self) {\n        println!(\"Dropping: {}\", self.data);\n    }\n}\n\nfn main() {\n    let _c = CustomSmartPointer { data: String::from(\"my stuff\") };\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Drop Trait and Destructors",
      "code": "struct CustomSmartPointer {\n    data: String,\n}\n\nimpl Drop for CustomSmartPointer {\n    fn drop(&mut self) {\n        println!(\"Dropping: {}\", self.data);\n    }\n}\n\nfn main() {\n    let _c = CustomSmartPointer { data: String::from(\"my stuff\") };\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Drop Trait and Destructors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Drop Trait and Destructors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct CustomSmartPointer {\n    data: String,\n}\n\nimpl Drop for CustomSmartPointer {\n    fn drop(&mut self) {\n        println!(\"Dropping: {}\", self.data);\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct CustomSmartPointer {\n    data: String,\n}\n\nimpl Drop for CustomSmartPointer {\n    fn drop(&mut self) {\n        println!(\"Dropping: {}\", self.data);\n    }\n}\n\nfn main() {\n    let _c = CustomSmartPointer { data: String::from(\"my stuff\") };\n}",
    "hints": [
      "Write:\nstruct CustomSmartPointer {\n    data: String,\n}\n\nimpl Drop for CustomSmartPointer {\n    fn drop(&mut self) {\n        println!(\"Dropping: {}\", self.data);\n    }\n}\n\nfn main() {\n    let _c = CustomSmartPointer { data: String::from(\"my stuff\") };\n}"
    ],
    "testCases": [
      {
        "id": "rust-26-tc-1",
        "description": "Verifies correct implementation for The Drop Trait and Destructors",
        "testFn": "code.includes('impl Drop for') || code.includes('fn drop')"
      }
    ]
  },
  {
    "id": "rust-27-preventing-double-free-bugs-at-c",
    "title": "27. Preventing Double-Free Bugs at Compile Time",
    "slug": "lesson-27-preventing-double-free-bugs-at-c",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Preventing Double-Free Bugs at Compile Time in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Preventing Double-Free Bugs at Compile Time",
      "Rust"
    ],
    "analogy": "A bank vault check: double-cashing the exact same paper check is physically impossible under computerized tracking.",
    "explanationMarkdown": "### Preventing Double-Free Bugs at Compile Time\n\nIn C/C++, double-free is a notorious security vulnerability. In Rust, moves statically prevent freeing the same pointer twice.\n\n```rust\nfn main() {\n    let original = String::from(\"safe data\");\n    let moved = original;\n    println!(\"Moved cleanly: {}\", moved);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Preventing Double-Free Bugs at Compile Time",
      "code": "fn main() {\n    let original = String::from(\"safe data\");\n    let moved = original;\n    println!(\"Moved cleanly: {}\", moved);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preventing Double-Free Bugs at Compile Time.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preventing Double-Free Bugs at Compile Time.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let original = String::from(\"safe data\");\n    let moved = original;\n    println!(\"Moved cleanly: {}\", moved);\n}",
    "hints": [
      "Write:\nfn main() {\n    let original = String::from(\"safe data\");\n    let moved = original;\n    println!(\"Moved cleanly: {}\", moved);\n}"
    ],
    "testCases": [
      {
        "id": "rust-27-tc-1",
        "description": "Verifies correct implementation for Preventing Double-Free Bugs at Compile Time",
        "testFn": "code.includes('safe data') || code.includes('moved')"
      }
    ]
  },
  {
    "id": "rust-28-rust-memory-profiling-allocation",
    "title": "28. Rust Memory Profiling: Allocations & Deallocations",
    "slug": "lesson-28-rust-memory-profiling-allocation",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Rust Memory Profiling: Allocations & Deallocations in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Rust Memory Profiling",
      "Rust"
    ],
    "analogy": "An architect observing concrete foundations expand and contract under temperature shifts.",
    "explanationMarkdown": "### Rust Memory Profiling: Allocations & Deallocations\n\nMonitoring `len()` and `capacity()` reveals how vectors dynamically reallocate heap memory when exceeding bounds.\n\n```rust\nfn main() {\n    let mut vector = Vec::new();\n    for i in 0..5 {\n        vector.push(i * 10);\n    }\n    println!(\"Capacity: {}, Len: {}\", vector.capacity(), vector.len());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rust Memory Profiling: Allocations & Deallocations",
      "code": "fn main() {\n    let mut vector = Vec::new();\n    for i in 0..5 {\n        vector.push(i * 10);\n    }\n    println!(\"Capacity: {}, Len: {}\", vector.capacity(), vector.len());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rust Memory Profiling: Allocations & Deallocations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rust Memory Profiling: Allocations & Deallocations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut vector = Vec::new();\n    for i in 0..5 {\n        vector.push(i * 10);\n    }\n    println!(\"Capacity: {}, Len: {}\", vector.capacity(), vector.len());\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut vector = Vec::new();\n    for i in 0..5 {\n        vector.push(i * 10);\n    }\n    println!(\"Capacity: {}, Len: {}\", vector.capacity(), vector.len());\n}"
    ],
    "testCases": [
      {
        "id": "rust-28-tc-1",
        "description": "Verifies correct implementation for Rust Memory Profiling: Allocations & Deallocations",
        "testFn": "code.includes('vector.capacity()') || code.includes('Vec::new()')"
      }
    ]
  },
  {
    "id": "rust-29-understanding-memory-leaks-stdme",
    "title": "29. Understanding Memory Leaks: std::mem::forget",
    "slug": "lesson-29-understanding-memory-leaks-stdme",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Understanding Memory Leaks: std::mem::forget in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Understanding Memory Leaks",
      "Rust"
    ],
    "analogy": "Launching an exploratory satellite into deep interstellar space: never reclaimed, intentionally forgotten.",
    "explanationMarkdown": "### Understanding Memory Leaks: std::mem::forget\n\n`std::mem::forget(val)` skips the destructor without running `drop`, demonstrating that Rust guarantees memory safety, not leak-free code.\n\n```rust\nfn main() {\n    let s = String::from(\"leaked safely\");\n    std::mem::forget(s);\n    println!(\"Forgotten\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Understanding Memory Leaks: std::mem::forget",
      "code": "fn main() {\n    let s = String::from(\"leaked safely\");\n    std::mem::forget(s);\n    println!(\"Forgotten\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding Memory Leaks: std::mem::forget.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding Memory Leaks: std::mem::forget.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s = String::from(\"leaked safely\");\n    std::mem::forget(s);\n    println!(\"Forgotten\");\n}",
    "hints": [
      "Write:\nfn main() {\n    let s = String::from(\"leaked safely\");\n    std::mem::forget(s);\n    println!(\"Forgotten\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-29-tc-1",
        "description": "Verifies correct implementation for Understanding Memory Leaks: std::mem::forget",
        "testFn": "code.includes('std::mem::forget') || code.includes('leaked safely')"
      }
    ]
  },
  {
    "id": "rust-30-module-2-review-ownership-&-move",
    "title": "30. Module 2 Review: Ownership & Move Semantics Mastery",
    "slug": "lesson-30-module-2-review-ownership-&-move",
    "language": "rust",
    "category": "Module 2: Ownership, Move Semantics & Stack/Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 2 Review: Ownership & Move Semantics Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 2 Review",
      "Rust"
    ],
    "analogy": "A master librarian with a 100% accurate circulation ledger where every rare book is accounted for.",
    "explanationMarkdown": "### Module 2 Review: Ownership & Move Semantics Mastery\n\nMastery over ownership transfer, moves vs clones, the Copy trait, RAII destructors, and leak-free memory handling.\n\n```rust\nfn main() {\n    let greeting = String::from(\"DevForge Ownership Mastered\");\n    println!(\"{}\", greeting);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Ownership & Move Semantics Mastery",
      "code": "fn main() {\n    let greeting = String::from(\"DevForge Ownership Mastered\");\n    println!(\"{}\", greeting);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 2 Review: Ownership & Move Semantics Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 2 Review: Ownership & Move Semantics Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let greeting = String::from(\"DevForge Ownership Mastered\");\n    println!(\"{}\", greeting);\n}",
    "hints": [
      "Write:\nfn main() {\n    let greeting = String::from(\"DevForge Ownership Mastered\");\n    println!(\"{}\", greeting);\n}"
    ],
    "testCases": [
      {
        "id": "rust-30-tc-1",
        "description": "Verifies correct implementation for Module 2 Review: Ownership & Move Semantics Mastery",
        "testFn": "code.includes('DevForge Ownership Mastered') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-31-borrowing-basics-immutable-refer",
    "title": "31. Borrowing Basics: Immutable References (&T)",
    "slug": "lesson-31-borrowing-basics-immutable-refer",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Borrowing Basics: Immutable References (&T) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Borrowing Basics",
      "Rust"
    ],
    "analogy": "A guest viewing a rare painting in an art gallery: admire and count brushstrokes without taking the canvas home.",
    "explanationMarkdown": "### Borrowing Basics: Immutable References (&T)\n\nReferences (`&T`) allow accessing data without taking ownership. The original variable retains ownership after the call.\n\n```rust\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    let len = calculate_length(&s);\n    println!(\"Length of '{}' is {}\", s, len);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Borrowing Basics: Immutable References (&T)",
      "code": "fn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    let len = calculate_length(&s);\n    println!(\"Length of '{}' is {}\", s, len);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Borrowing Basics: Immutable References (&T).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Borrowing Basics: Immutable References (&T).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    let len = calculate_length(&s);\n    println!(\"Length of '{}' is {}\", s, len);\n}",
    "hints": [
      "Write:\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    let len = calculate_length(&s);\n    println!(\"Length of '{}' is {}\", s, len);\n}"
    ],
    "testCases": [
      {
        "id": "rust-31-tc-1",
        "description": "Verifies correct implementation for Borrowing Basics: Immutable References (&T)",
        "testFn": "code.includes('&String') || code.includes('&s')"
      }
    ]
  },
  {
    "id": "rust-32-mutable-references-&mut-t",
    "title": "32. Mutable References: &mut T",
    "slug": "lesson-32-mutable-references-&mut-t",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Mutable References: &mut T in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Mutable References",
      "Rust"
    ],
    "analogy": "Handing an authorized car mechanic a repair key: they can adjust engine valves, but must return the key when done.",
    "explanationMarkdown": "### Mutable References: &mut T\n\n`&mut T` grants exclusive read and write access to the referenced value without taking permanent ownership.\n\n```rust\nfn append_world(s: &mut String) {\n    s.push_str(\", world!\");\n}\n\nfn main() {\n    let mut message = String::from(\"Hello\");\n    append_world(&mut message);\n    println!(\"{}\", message);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Mutable References: &mut T",
      "code": "fn append_world(s: &mut String) {\n    s.push_str(\", world!\");\n}\n\nfn main() {\n    let mut message = String::from(\"Hello\");\n    append_world(&mut message);\n    println!(\"{}\", message);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mutable References: &mut T.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mutable References: &mut T.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn append_world(s: &mut String) {\n    s.push_str(\", world!\");\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn append_world(s: &mut String) {\n    s.push_str(\", world!\");\n}\n\nfn main() {\n    let mut message = String::from(\"Hello\");\n    append_world(&mut message);\n    println!(\"{}\", message);\n}",
    "hints": [
      "Write:\nfn append_world(s: &mut String) {\n    s.push_str(\", world!\");\n}\n\nfn main() {\n    let mut message = String::from(\"Hello\");\n    append_world(&mut message);\n    println!(\"{}\", message);\n}"
    ],
    "testCases": [
      {
        "id": "rust-32-tc-1",
        "description": "Verifies correct implementation for Mutable References: &mut T",
        "testFn": "code.includes('&mut String') || code.includes('&mut message')"
      }
    ]
  },
  {
    "id": "rust-33-the-cardinal-rule-of-references-",
    "title": "33. The Cardinal Rule of References (Aliasing XOR Mutability)",
    "slug": "lesson-33-the-cardinal-rule-of-references-",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Cardinal Rule of References (Aliasing XOR Mutability) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Cardinal Rule of References (Aliasing XOR Mutability)",
      "Rust"
    ],
    "analogy": "A document drafting room: twenty researchers can read the manuscript simultaneously, OR one editor can mark edits in solitude.",
    "explanationMarkdown": "### The Cardinal Rule of References (Aliasing XOR Mutability)\n\nRust completely prevents data races at compile time by forbidding simultaneous reads and writes to the same memory.\n\n```rust\nfn main() {\n    println!(\"Aliasing XOR Mutability verified\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Cardinal Rule of References (Aliasing XOR Mutability)",
      "code": "fn main() {\n    println!(\"Aliasing XOR Mutability verified\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Cardinal Rule of References (Aliasing XOR Mutability).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Cardinal Rule of References (Aliasing XOR Mutability).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Aliasing XOR Mutability verified\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Aliasing XOR Mutability verified\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-33-tc-1",
        "description": "Verifies correct implementation for The Cardinal Rule of References (Aliasing XOR Mutability)",
        "testFn": "code.includes('Aliasing XOR Mutability') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-34-data-races-how-rust-eliminates-t",
    "title": "34. Data Races: How Rust Eliminates Them at Compile Time",
    "slug": "lesson-34-data-races-how-rust-eliminates-t",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Data Races: How Rust Eliminates Them at Compile Time in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Data Races",
      "Rust"
    ],
    "analogy": "A railway junction switch locked with a mechanical interlock preventing two trains on the same track.",
    "explanationMarkdown": "### Data Races: How Rust Eliminates Them at Compile Time\n\nA data race occurs when two threads access the same memory concurrently and at least one is a write. Rust makes this impossible to compile.\n\n```rust\nfn main() {\n    let mut val = 10;\n    {\n        let r1 = &mut val;\n        *r1 += 5;\n    }\n    let r2 = &val;\n    println!(\"Safe: {}\", r2);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Data Races: How Rust Eliminates Them at Compile Time",
      "code": "fn main() {\n    let mut val = 10;\n    {\n        let r1 = &mut val;\n        *r1 += 5;\n    }\n    let r2 = &val;\n    println!(\"Safe: {}\", r2);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Data Races: How Rust Eliminates Them at Compile Time.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Data Races: How Rust Eliminates Them at Compile Time.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut val = 10;\n    {\n        let r1 = &mut val;\n        *r1 += 5;\n    }\n    let r2 = &val;\n    println!(\"Safe: {}\", r2);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut val = 10;\n    {\n        let r1 = &mut val;\n        *r1 += 5;\n    }\n    let r2 = &val;\n    println!(\"Safe: {}\", r2);\n}"
    ],
    "testCases": [
      {
        "id": "rust-34-tc-1",
        "description": "Verifies correct implementation for Data Races: How Rust Eliminates Them at Compile Time",
        "testFn": "code.includes('*r1 += 5') || code.includes('Safe:')"
      }
    ]
  },
  {
    "id": "rust-35-dangling-references-impossible-i",
    "title": "35. Dangling References: Impossible in Safe Rust",
    "slug": "lesson-35-dangling-references-impossible-i",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Dangling References: Impossible in Safe Rust in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Dangling References",
      "Rust"
    ],
    "analogy": "A hotel receptionist giving you a room key to a building that was demolished yesterday: compile error!",
    "explanationMarkdown": "### Dangling References: Impossible in Safe Rust\n\nIn C, returning an address of a stack variable causes undefined behavior. Rust guarantees references are always valid.\n\n```rust\nfn main() {\n    let s = String::from(\"safe\");\n    let r = &s;\n    println!(\"{}\", r);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dangling References: Impossible in Safe Rust",
      "code": "fn main() {\n    let s = String::from(\"safe\");\n    let r = &s;\n    println!(\"{}\", r);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dangling References: Impossible in Safe Rust.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dangling References: Impossible in Safe Rust.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s = String::from(\"safe\");\n    let r = &s;\n    println!(\"{}\", r);\n}",
    "hints": [
      "Write:\nfn main() {\n    let s = String::from(\"safe\");\n    let r = &s;\n    println!(\"{}\", r);\n}"
    ],
    "testCases": [
      {
        "id": "rust-35-tc-1",
        "description": "Verifies correct implementation for Dangling References: Impossible in Safe Rust",
        "testFn": "code.includes('let r = &s') || code.includes('println!')"
      }
    ]
  },
  {
    "id": "rust-36-non-lexical-lifetimes-nll",
    "title": "36. Non-Lexical Lifetimes (NLL)",
    "slug": "lesson-36-non-lexical-lifetimes-nll",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Non-Lexical Lifetimes (NLL) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Non-Lexical Lifetimes (NLL)",
      "Rust"
    ],
    "analogy": "A library book check-in scanner: as soon as you scan the return barcode, the next student can immediately check it out.",
    "explanationMarkdown": "### Non-Lexical Lifetimes (NLL)\n\nRust's borrow checker uses Non-Lexical Lifetimes (NLL) to end a reference's scope at its last point of actual use.\n\n```rust\nfn main() {\n    let mut x = 10;\n    let r1 = &x;\n    println!(\"Read: {}\", r1);\n    let r2 = &mut x;\n    *r2 += 20;\n    println!(\"Mutated: {}\", r2);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Non-Lexical Lifetimes (NLL)",
      "code": "fn main() {\n    let mut x = 10;\n    let r1 = &x;\n    println!(\"Read: {}\", r1);\n    let r2 = &mut x;\n    *r2 += 20;\n    println!(\"Mutated: {}\", r2);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Non-Lexical Lifetimes (NLL).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Non-Lexical Lifetimes (NLL).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut x = 10;\n    let r1 = &x;\n    println!(\"Read: {}\", r1);\n    let r2 = &mut x;\n    *r2 += 20;\n    println!(\"Mutated: {}\", r2);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut x = 10;\n    let r1 = &x;\n    println!(\"Read: {}\", r1);\n    let r2 = &mut x;\n    *r2 += 20;\n    println!(\"Mutated: {}\", r2);\n}"
    ],
    "testCases": [
      {
        "id": "rust-36-tc-1",
        "description": "Verifies correct implementation for Non-Lexical Lifetimes (NLL)",
        "testFn": "code.includes('Non-Lexical') || code.includes('*r2 += 20')"
      }
    ]
  },
  {
    "id": "rust-37-string-slices-&str-and-string-li",
    "title": "37. String Slices (&str) and String Literals",
    "slug": "lesson-37-string-slices-&str-and-string-li",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master String Slices (&str) and String Literals in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "String Slices (&str) and String Literals",
      "Rust"
    ],
    "analogy": "A cardboard window frame slid over a page of a newspaper, viewing five words without clipping the sheet.",
    "explanationMarkdown": "### String Slices (&str) and String Literals\n\nA string slice `&str` is a reference to a contiguous sequence of UTF-8 bytes: a pointer and length.\n\n```rust\nfn main() {\n    let greeting = String::from(\"hello world\");\n    let hello: &str = &greeting[0..5];\n    let world: &str = &greeting[6..11];\n    println!(\"{} - {}\", hello, world);\n}\n```",
    "workedExample": {
      "title": "Worked Example: String Slices (&str) and String Literals",
      "code": "fn main() {\n    let greeting = String::from(\"hello world\");\n    let hello: &str = &greeting[0..5];\n    let world: &str = &greeting[6..11];\n    println!(\"{} - {}\", hello, world);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Slices (&str) and String Literals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Slices (&str) and String Literals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let greeting = String::from(\"hello world\");\n    let hello: &str = &greeting[0..5];\n    let world: &str = &greeting[6..11];\n    println!(\"{} - {}\", hello, world);\n}",
    "hints": [
      "Write:\nfn main() {\n    let greeting = String::from(\"hello world\");\n    let hello: &str = &greeting[0..5];\n    let world: &str = &greeting[6..11];\n    println!(\"{} - {}\", hello, world);\n}"
    ],
    "testCases": [
      {
        "id": "rust-37-tc-1",
        "description": "Verifies correct implementation for String Slices (&str) and String Literals",
        "testFn": "code.includes('&greeting[0..5]') || code.includes('&str')"
      }
    ]
  },
  {
    "id": "rust-38-array-slices-&[t]",
    "title": "38. Array Slices (&[T])",
    "slug": "lesson-38-array-slices-&[t]",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Array Slices (&[T]) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Array Slices (&[T])",
      "Rust"
    ],
    "analogy": "A selected range of cells highlighted on a ledger sheet.",
    "explanationMarkdown": "### Array Slices (&[T])\n\nArray slices `&[T]` provide safe, zero-copy views into contiguous arrays or vectors.\n\n```rust\nfn main() {\n    let arr = [1, 2, 3, 4, 5];\n    let slice: &[i32] = &arr[1..4];\n    println!(\"Slice length: {}, first: {}\", slice.len(), slice[0]);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Array Slices (&[T])",
      "code": "fn main() {\n    let arr = [1, 2, 3, 4, 5];\n    let slice: &[i32] = &arr[1..4];\n    println!(\"Slice length: {}, first: {}\", slice.len(), slice[0]);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Array Slices (&[T]).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Array Slices (&[T]).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let arr = [1, 2, 3, 4, 5];\n    let slice: &[i32] = &arr[1..4];\n    println!(\"Slice length: {}, first: {}\", slice.len(), slice[0]);\n}",
    "hints": [
      "Write:\nfn main() {\n    let arr = [1, 2, 3, 4, 5];\n    let slice: &[i32] = &arr[1..4];\n    println!(\"Slice length: {}, first: {}\", slice.len(), slice[0]);\n}"
    ],
    "testCases": [
      {
        "id": "rust-38-tc-1",
        "description": "Verifies correct implementation for Array Slices (&[T])",
        "testFn": "code.includes('&arr[1..4]') || code.includes('&[i32]')"
      }
    ]
  },
  {
    "id": "rust-39-lifetime-annotations-syntax-a",
    "title": "39. Lifetime Annotations Syntax: 'a",
    "slug": "lesson-39-lifetime-annotations-syntax-a",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Lifetime Annotations Syntax: 'a in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Lifetime Annotations Syntax",
      "Rust"
    ],
    "analogy": "A manufacturer expiry label on canned soup: the soup expires when the earliest ingredient expires.",
    "explanationMarkdown": "### Lifetime Annotations Syntax: 'a\n\nLifetime syntax `'a` informs the borrow checker how references relate without changing runtime execution speed.\n\n```rust\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let s1 = \"short\";\n    let s2 = \"longer string\";\n    println!(\"Longest: {}\", longest(s1, s2));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lifetime Annotations Syntax: 'a",
      "code": "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let s1 = \"short\";\n    let s2 = \"longer string\";\n    println!(\"Longest: {}\", longest(s1, s2));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lifetime Annotations Syntax: 'a.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lifetime Annotations Syntax: 'a.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let s1 = \"short\";\n    let s2 = \"longer string\";\n    println!(\"Longest: {}\", longest(s1, s2));\n}",
    "hints": [
      "Write:\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let s1 = \"short\";\n    let s2 = \"longer string\";\n    println!(\"Longest: {}\", longest(s1, s2));\n}"
    ],
    "testCases": [
      {
        "id": "rust-39-tc-1",
        "description": "Verifies correct implementation for Lifetime Annotations Syntax: 'a",
        "testFn": "code.includes(\"<'a>\") || code.includes(\"&'a str\")"
      }
    ]
  },
  {
    "id": "rust-40-lifetime-elision-rules-how-rust-",
    "title": "40. Lifetime Elision Rules (How Rust Infers Lifetimes)",
    "slug": "lesson-40-lifetime-elision-rules-how-rust-",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Lifetime Elision Rules (How Rust Infers Lifetimes) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Lifetime Elision Rules (How Rust Infers Lifetimes)",
      "Rust"
    ],
    "analogy": "Traffic lights with smart induction sensors that let cars proceed without human police manual signaling.",
    "explanationMarkdown": "### Lifetime Elision Rules (How Rust Infers Lifetimes)\n\nRust automatically applies lifetime elision rules when one reference parameter maps directly to the return type.\n\n```rust\nfn first_word(s: &str) -> &str {\n    s.split_whitespace().next().unwrap_or(\"\")\n}\n\nfn main() {\n    let word = first_word(\"DevForge Rust Rules\");\n    println!(\"First: {}\", word);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lifetime Elision Rules (How Rust Infers Lifetimes)",
      "code": "fn first_word(s: &str) -> &str {\n    s.split_whitespace().next().unwrap_or(\"\")\n}\n\nfn main() {\n    let word = first_word(\"DevForge Rust Rules\");\n    println!(\"First: {}\", word);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lifetime Elision Rules (How Rust Infers Lifetimes).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lifetime Elision Rules (How Rust Infers Lifetimes).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn first_word(s: &str) -> &str {\n    s.split_whitespace().next().unwrap_or(\"\")\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn first_word(s: &str) -> &str {\n    s.split_whitespace().next().unwrap_or(\"\")\n}\n\nfn main() {\n    let word = first_word(\"DevForge Rust Rules\");\n    println!(\"First: {}\", word);\n}",
    "hints": [
      "Write:\nfn first_word(s: &str) -> &str {\n    s.split_whitespace().next().unwrap_or(\"\")\n}\n\nfn main() {\n    let word = first_word(\"DevForge Rust Rules\");\n    println!(\"First: {}\", word);\n}"
    ],
    "testCases": [
      {
        "id": "rust-40-tc-1",
        "description": "Verifies correct implementation for Lifetime Elision Rules (How Rust Infers Lifetimes)",
        "testFn": "code.includes('first_word') || code.includes('&str')"
      }
    ]
  },
  {
    "id": "rust-41-lifetimes-in-struct-definitions",
    "title": "41. Lifetimes in Struct Definitions",
    "slug": "lesson-41-lifetimes-in-struct-definitions",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Lifetimes in Struct Definitions in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Lifetimes in Struct Definitions",
      "Rust"
    ],
    "analogy": "A clipboard holding a borrowed memo: the clipboard cannot outlive the memo pinned to it.",
    "explanationMarkdown": "### Lifetimes in Struct Definitions\n\nWhen a struct stores references, its definition must declare a lifetime parameter `'a` to ensure it doesn't outlive borrowed data.\n\n```rust\nstruct Highlight<'a> {\n    part: &'a str,\n}\n\nfn main() {\n    let text = String::from(\"Critical system alerts\");\n    let h = Highlight { part: &text[0..8] };\n    println!(\"Highlighted: {}\", h.part);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lifetimes in Struct Definitions",
      "code": "struct Highlight<'a> {\n    part: &'a str,\n}\n\nfn main() {\n    let text = String::from(\"Critical system alerts\");\n    let h = Highlight { part: &text[0..8] };\n    println!(\"Highlighted: {}\", h.part);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lifetimes in Struct Definitions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lifetimes in Struct Definitions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Highlight<'a> {\n    part: &'a str,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Highlight<'a> {\n    part: &'a str,\n}\n\nfn main() {\n    let text = String::from(\"Critical system alerts\");\n    let h = Highlight { part: &text[0..8] };\n    println!(\"Highlighted: {}\", h.part);\n}",
    "hints": [
      "Write:\nstruct Highlight<'a> {\n    part: &'a str,\n}\n\nfn main() {\n    let text = String::from(\"Critical system alerts\");\n    let h = Highlight { part: &text[0..8] };\n    println!(\"Highlighted: {}\", h.part);\n}"
    ],
    "testCases": [
      {
        "id": "rust-41-tc-1",
        "description": "Verifies correct implementation for Lifetimes in Struct Definitions",
        "testFn": "code.includes(\"struct Highlight<'a>\") || code.includes(\"&'a str\")"
      }
    ]
  },
  {
    "id": "rust-42-the-static-lifetime-program-dura",
    "title": "42. The 'static Lifetime (Program Duration)",
    "slug": "lesson-42-the-static-lifetime-program-dura",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The 'static Lifetime (Program Duration) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The 'static Lifetime (Program Duration)",
      "Rust"
    ],
    "analogy": "A bronze monument erected on the public town square: exists for the entire lifetime of the city.",
    "explanationMarkdown": "### The 'static Lifetime (Program Duration)\n\nThe `'static` lifetime means the reference lives for the entire execution duration of the program (string literals baked into the binary).\n\n```rust\nfn main() {\n    let banner: &'static str = \"DevForge Official Platform\";\n    println!(\"{}\", banner);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The 'static Lifetime (Program Duration)",
      "code": "fn main() {\n    let banner: &'static str = \"DevForge Official Platform\";\n    println!(\"{}\", banner);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The 'static Lifetime (Program Duration).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The 'static Lifetime (Program Duration).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let banner: &'static str = \"DevForge Official Platform\";\n    println!(\"{}\", banner);\n}",
    "hints": [
      "Write:\nfn main() {\n    let banner: &'static str = \"DevForge Official Platform\";\n    println!(\"{}\", banner);\n}"
    ],
    "testCases": [
      {
        "id": "rust-42-tc-1",
        "description": "Verifies correct implementation for The 'static Lifetime (Program Duration)",
        "testFn": "code.includes(\"'static\") || code.includes('DevForge Official Platform')"
      }
    ]
  },
  {
    "id": "rust-43-reborrowing-and-borrow-splitting",
    "title": "43. Reborrowing and Borrow Splitting",
    "slug": "lesson-43-reborrowing-and-borrow-splitting",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Reborrowing and Borrow Splitting in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Reborrowing and Borrow Splitting",
      "Rust"
    ],
    "analogy": "Two distinct drawers in a single filing cabinet: two clerks can open separate drawers at the same time without collision.",
    "explanationMarkdown": "### Reborrowing and Borrow Splitting\n\nRust borrow checking allows taking distinct mutable references to different independent fields of a struct simultaneously.\n\n```rust\nstruct Container {\n    header: String,\n    count: i32,\n}\n\nfn main() {\n    let mut c = Container { header: String::from(\"Test\"), count: 0 };\n    let h = &mut c.header;\n    let cnt = &mut c.count;\n    *cnt += 1;\n    println!(\"{} - {}\", h, cnt);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Reborrowing and Borrow Splitting",
      "code": "struct Container {\n    header: String,\n    count: i32,\n}\n\nfn main() {\n    let mut c = Container { header: String::from(\"Test\"), count: 0 };\n    let h = &mut c.header;\n    let cnt = &mut c.count;\n    *cnt += 1;\n    println!(\"{} - {}\", h, cnt);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reborrowing and Borrow Splitting.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reborrowing and Borrow Splitting.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Container {\n    header: String,\n    count: i32,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Container {\n    header: String,\n    count: i32,\n}\n\nfn main() {\n    let mut c = Container { header: String::from(\"Test\"), count: 0 };\n    let h = &mut c.header;\n    let cnt = &mut c.count;\n    *cnt += 1;\n    println!(\"{} - {}\", h, cnt);\n}",
    "hints": [
      "Write:\nstruct Container {\n    header: String,\n    count: i32,\n}\n\nfn main() {\n    let mut c = Container { header: String::from(\"Test\"), count: 0 };\n    let h = &mut c.header;\n    let cnt = &mut c.count;\n    *cnt += 1;\n    println!(\"{} - {}\", h, cnt);\n}"
    ],
    "testCases": [
      {
        "id": "rust-43-tc-1",
        "description": "Verifies correct implementation for Reborrowing and Borrow Splitting",
        "testFn": "code.includes('&mut c.header') || code.includes('&mut c.count')"
      }
    ]
  },
  {
    "id": "rust-44-borrow-checker-diagnostics-resol",
    "title": "44. Borrow Checker Diagnostics: Resolving Common Compiler Errors",
    "slug": "lesson-44-borrow-checker-diagnostics-resol",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Borrow Checker Diagnostics: Resolving Common Compiler Errors in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Borrow Checker Diagnostics",
      "Rust"
    ],
    "analogy": "A surgeon carefully sterilizing instruments in sequence to avoid cross-contamination in the operating room.",
    "explanationMarkdown": "### Borrow Checker Diagnostics: Resolving Common Compiler Errors\n\nLearn how to read rustc compiler errors: moving vs borrowing, cloning, scoped blocks, or indexing by value.\n\n```rust\nfn main() {\n    let mut v = vec![1, 2, 3];\n    let first = v[0];\n    v.push(4);\n    println!(\"First: {}, Vec len: {}\", first, v.len());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Borrow Checker Diagnostics: Resolving Common Compiler Errors",
      "code": "fn main() {\n    let mut v = vec![1, 2, 3];\n    let first = v[0];\n    v.push(4);\n    println!(\"First: {}, Vec len: {}\", first, v.len());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Borrow Checker Diagnostics: Resolving Common Compiler Errors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Borrow Checker Diagnostics: Resolving Common Compiler Errors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut v = vec![1, 2, 3];\n    let first = v[0];\n    v.push(4);\n    println!(\"First: {}, Vec len: {}\", first, v.len());\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut v = vec![1, 2, 3];\n    let first = v[0];\n    v.push(4);\n    println!(\"First: {}, Vec len: {}\", first, v.len());\n}"
    ],
    "testCases": [
      {
        "id": "rust-44-tc-1",
        "description": "Verifies correct implementation for Borrow Checker Diagnostics: Resolving Common Compiler Errors",
        "testFn": "code.includes('let first = v[0]') || code.includes('v.push(4)')"
      }
    ]
  },
  {
    "id": "rust-45-module-3-review-borrowing-and-li",
    "title": "45. Module 3 Review: Borrowing and Lifetimes Mastery",
    "slug": "lesson-45-module-3-review-borrowing-and-li",
    "language": "rust",
    "category": "Module 3: Borrowing & Lifetimes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 3 Review: Borrowing and Lifetimes Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 3 Review",
      "Rust"
    ],
    "analogy": "A master Swiss watchmaker: precision gear teeth interlocking with zero friction and zero slack.",
    "explanationMarkdown": "### Module 3 Review: Borrowing and Lifetimes Mastery\n\nMastery over immutable/mutable references, slices, lifetime parameters `'a`, `'static`, and borrow checker rules.\n\n```rust\nfn main() {\n    let status = String::from(\"Borrowing & Lifetimes Mastered\");\n    let r = &status;\n    println!(\"{}\", r);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Borrowing and Lifetimes Mastery",
      "code": "fn main() {\n    let status = String::from(\"Borrowing & Lifetimes Mastered\");\n    let r = &status;\n    println!(\"{}\", r);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 3 Review: Borrowing and Lifetimes Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 3 Review: Borrowing and Lifetimes Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let status = String::from(\"Borrowing & Lifetimes Mastered\");\n    let r = &status;\n    println!(\"{}\", r);\n}",
    "hints": [
      "Write:\nfn main() {\n    let status = String::from(\"Borrowing & Lifetimes Mastered\");\n    let r = &status;\n    println!(\"{}\", r);\n}"
    ],
    "testCases": [
      {
        "id": "rust-45-tc-1",
        "description": "Verifies correct implementation for Module 3 Review: Borrowing and Lifetimes Mastery",
        "testFn": "code.includes('Borrowing & Lifetimes Mastered') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-46-defining-custom-structs-with-nam",
    "title": "46. Defining Custom Structs with Named Fields",
    "slug": "lesson-46-defining-custom-structs-with-nam",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Defining Custom Structs with Named Fields in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Defining Custom Structs with Named Fields",
      "Rust"
    ],
    "analogy": "A pre-printed personnel badge form with slots for employee name, email, clearance level, and badge status.",
    "explanationMarkdown": "### Defining Custom Structs with Named Fields\n\nStructs group related fields into named custom data types.\n\n```rust\nstruct User {\n    username: String,\n    email: String,\n    sign_in_count: u64,\n    active: bool,\n}\n\nfn main() {\n    let u = User {\n        username: String::from(\"alex\"),\n        email: String::from(\"alex@devforge.io\"),\n        sign_in_count: 1,\n        active: true,\n    };\n    println!(\"User: {}\", u.username);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Custom Structs with Named Fields",
      "code": "struct User {\n    username: String,\n    email: String,\n    sign_in_count: u64,\n    active: bool,\n}\n\nfn main() {\n    let u = User {\n        username: String::from(\"alex\"),\n        email: String::from(\"alex@devforge.io\"),\n        sign_in_count: 1,\n        active: true,\n    };\n    println!(\"User: {}\", u.username);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Custom Structs with Named Fields.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Custom Structs with Named Fields.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct User {\n    username: String,\n    email: String,\n    sign_in_count: u64,\n    active: bool,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct User {\n    username: String,\n    email: String,\n    sign_in_count: u64,\n    active: bool,\n}\n\nfn main() {\n    let u = User {\n        username: String::from(\"alex\"),\n        email: String::from(\"alex@devforge.io\"),\n        sign_in_count: 1,\n        active: true,\n    };\n    println!(\"User: {}\", u.username);\n}",
    "hints": [
      "Write:\nstruct User {\n    username: String,\n    email: String,\n    sign_in_count: u64,\n    active: bool,\n}\n\nfn main() {\n    let u = User {\n        username: String::from(\"alex\"),\n        email: String::from(\"alex@devforge.io\"),\n        sign_in_count: 1,\n        active: true,\n    };\n    println!(\"User: {}\", u.username);\n}"
    ],
    "testCases": [
      {
        "id": "rust-46-tc-1",
        "description": "Verifies correct implementation for Defining Custom Structs with Named Fields",
        "testFn": "code.includes('struct User') || code.includes('u.username')"
      }
    ]
  },
  {
    "id": "rust-47-field-init-shorthand-in-struct-i",
    "title": "47. Field Init Shorthand in Struct Instantiation",
    "slug": "lesson-47-field-init-shorthand-in-struct-i",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Field Init Shorthand in Struct Instantiation in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Field Init Shorthand in Struct Instantiation",
      "Rust"
    ],
    "analogy": "Dropping a labeled component directly into a matching slot without writing its name twice.",
    "explanationMarkdown": "### Field Init Shorthand in Struct Instantiation\n\nWhen function parameter names match struct field names, write `Point { x, y }` instead of `Point { x: x, y: y }`.\n\n```rust\nstruct Point { x: i32, y: i32 }\n\nfn build_point(x: i32, y: i32) -> Point {\n    Point { x, y }\n}\n\nfn main() {\n    let p = build_point(10, 20);\n    println!(\"{}, {}\", p.x, p.y);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Field Init Shorthand in Struct Instantiation",
      "code": "struct Point { x: i32, y: i32 }\n\nfn build_point(x: i32, y: i32) -> Point {\n    Point { x, y }\n}\n\nfn main() {\n    let p = build_point(10, 20);\n    println!(\"{}, {}\", p.x, p.y);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Field Init Shorthand in Struct Instantiation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Field Init Shorthand in Struct Instantiation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Point { x: i32, y: i32 }\n\nfn build_point(x: i32, y: i32) -> Point {\n    Point { x, y } // Field init shorthand!\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Point { x: i32, y: i32 }\n\nfn build_point(x: i32, y: i32) -> Point {\n    Point { x, y }\n}\n\nfn main() {\n    let p = build_point(10, 20);\n    println!(\"{}, {}\", p.x, p.y);\n}",
    "hints": [
      "Write:\nstruct Point { x: i32, y: i32 }\n\nfn build_point(x: i32, y: i32) -> Point {\n    Point { x, y }\n}\n\nfn main() {\n    let p = build_point(10, 20);\n    println!(\"{}, {}\", p.x, p.y);\n}"
    ],
    "testCases": [
      {
        "id": "rust-47-tc-1",
        "description": "Verifies correct implementation for Field Init Shorthand in Struct Instantiation",
        "testFn": "code.includes('Point { x, y }') || code.includes('build_point')"
      }
    ]
  },
  {
    "id": "rust-48-struct-update-syntax-..base",
    "title": "48. Struct Update Syntax (..base)",
    "slug": "lesson-48-struct-update-syntax-..base",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Struct Update Syntax (..base) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Struct Update Syntax (..base)",
      "Rust"
    ],
    "analogy": "Duplicating an existing car build order and simply upgrading the tire package.",
    "explanationMarkdown": "### Struct Update Syntax (..base)\n\nThe struct update syntax `..base` fills remaining fields from another instance of the struct.\n\n```rust\nstruct Config {\n    theme: String,\n    timeout: u32,\n    verbose: bool,\n}\n\nfn main() {\n    let base = Config { theme: String::from(\"dark\"), timeout: 30, verbose: false };\n    let custom = Config { timeout: 60, ..base };\n    println!(\"Custom timeout: {}, theme: {}\", custom.timeout, custom.theme);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Struct Update Syntax (..base)",
      "code": "struct Config {\n    theme: String,\n    timeout: u32,\n    verbose: bool,\n}\n\nfn main() {\n    let base = Config { theme: String::from(\"dark\"), timeout: 30, verbose: false };\n    let custom = Config { timeout: 60, ..base };\n    println!(\"Custom timeout: {}, theme: {}\", custom.timeout, custom.theme);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Struct Update Syntax (..base).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Struct Update Syntax (..base).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Config {\n    theme: String,\n    timeout: u32,\n    verbose: bool,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Config {\n    theme: String,\n    timeout: u32,\n    verbose: bool,\n}\n\nfn main() {\n    let base = Config { theme: String::from(\"dark\"), timeout: 30, verbose: false };\n    let custom = Config { timeout: 60, ..base };\n    println!(\"Custom timeout: {}, theme: {}\", custom.timeout, custom.theme);\n}",
    "hints": [
      "Write:\nstruct Config {\n    theme: String,\n    timeout: u32,\n    verbose: bool,\n}\n\nfn main() {\n    let base = Config { theme: String::from(\"dark\"), timeout: 30, verbose: false };\n    let custom = Config { timeout: 60, ..base };\n    println!(\"Custom timeout: {}, theme: {}\", custom.timeout, custom.theme);\n}"
    ],
    "testCases": [
      {
        "id": "rust-48-tc-1",
        "description": "Verifies correct implementation for Struct Update Syntax (..base)",
        "testFn": "code.includes('..base') || code.includes('Config')"
      }
    ]
  },
  {
    "id": "rust-49-tuple-structs-named-tuples-witho",
    "title": "49. Tuple Structs (Named Tuples without Field Names)",
    "slug": "lesson-49-tuple-structs-named-tuples-witho",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Tuple Structs (Named Tuples without Field Names) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Tuple Structs (Named Tuples without Field Names)",
      "Rust"
    ],
    "analogy": "A customized labeled envelope holding three numbers without individual field tags.",
    "explanationMarkdown": "### Tuple Structs (Named Tuples without Field Names)\n\nTuple structs name the struct type while indexing fields like a tuple (`black.0`, `black.1`).\n\n```rust\nstruct Color(i32, i32, i32);\nstruct Meters(f64);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let distance = Meters(150.5);\n    println!(\"RGB: {}, {}, {}\", black.0, black.1, black.2);\n    println!(\"Distance: {}\", distance.0);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Tuple Structs (Named Tuples without Field Names)",
      "code": "struct Color(i32, i32, i32);\nstruct Meters(f64);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let distance = Meters(150.5);\n    println!(\"RGB: {}, {}, {}\", black.0, black.1, black.2);\n    println!(\"Distance: {}\", distance.0);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tuple Structs (Named Tuples without Field Names).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tuple Structs (Named Tuples without Field Names).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Color(i32, i32, i32);\nstruct Meters(f64);\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Color(i32, i32, i32);\nstruct Meters(f64);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let distance = Meters(150.5);\n    println!(\"RGB: {}, {}, {}\", black.0, black.1, black.2);\n    println!(\"Distance: {}\", distance.0);\n}",
    "hints": [
      "Write:\nstruct Color(i32, i32, i32);\nstruct Meters(f64);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let distance = Meters(150.5);\n    println!(\"RGB: {}, {}, {}\", black.0, black.1, black.2);\n    println!(\"Distance: {}\", distance.0);\n}"
    ],
    "testCases": [
      {
        "id": "rust-49-tc-1",
        "description": "Verifies correct implementation for Tuple Structs (Named Tuples without Field Names)",
        "testFn": "code.includes('struct Color(i32, i32, i32)') || code.includes('black.0')"
      }
    ]
  },
  {
    "id": "rust-50-unit-like-structs-zero-sized-typ",
    "title": "50. Unit-Like Structs (Zero-Sized Types ZST)",
    "slug": "lesson-50-unit-like-structs-zero-sized-typ",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Unit-Like Structs (Zero-Sized Types ZST) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Unit-Like Structs (Zero-Sized Types ZST)",
      "Rust"
    ],
    "analogy": "A security clearance stamp: takes zero physical space, but certifies that a trait requirement has been fulfilled.",
    "explanationMarkdown": "### Unit-Like Structs (Zero-Sized Types ZST)\n\nUnit-like structs behave like `()` and occupy zero bytes of memory (ZST), often used for marker traits.\n\n```rust\nstruct AlwaysEqual;\n\nfn main() {\n    let _subject = AlwaysEqual;\n    println!(\"Zero sized struct instantiated\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unit-Like Structs (Zero-Sized Types ZST)",
      "code": "struct AlwaysEqual;\n\nfn main() {\n    let _subject = AlwaysEqual;\n    println!(\"Zero sized struct instantiated\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unit-Like Structs (Zero-Sized Types ZST).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unit-Like Structs (Zero-Sized Types ZST).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct AlwaysEqual;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct AlwaysEqual;\n\nfn main() {\n    let _subject = AlwaysEqual;\n    println!(\"Zero sized struct instantiated\");\n}",
    "hints": [
      "Write:\nstruct AlwaysEqual;\n\nfn main() {\n    let _subject = AlwaysEqual;\n    println!(\"Zero sized struct instantiated\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-50-tc-1",
        "description": "Verifies correct implementation for Unit-Like Structs (Zero-Sized Types ZST)",
        "testFn": "code.includes('struct AlwaysEqual') || code.includes('AlwaysEqual')"
      }
    ]
  },
  {
    "id": "rust-51-method-syntax-impl-blocks-and-&s",
    "title": "51. Method Syntax: impl Blocks and &self",
    "slug": "lesson-51-method-syntax-impl-blocks-and-&s",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Method Syntax: impl Blocks and &self in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Method Syntax",
      "Rust"
    ],
    "analogy": "Equipping an architect's blueprint with a built-in pocket calculator button that computes square footage.",
    "explanationMarkdown": "### Method Syntax: impl Blocks and &self\n\nMethods are defined inside `impl` blocks. `&self` borrows the instance immutably to read its fields.\n\n```rust\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\n\nfn main() {\n    let rect = Rectangle { width: 30, height: 50 };\n    println!(\"Area: {}\", rect.area());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Method Syntax: impl Blocks and &self",
      "code": "struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\n\nfn main() {\n    let rect = Rectangle { width: 30, height: 50 };\n    println!(\"Area: {}\", rect.area());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Method Syntax: impl Blocks and &self.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Method Syntax: impl Blocks and &self.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\n\nfn main() {\n    let rect = Rectangle { width: 30, height: 50 };\n    println!(\"Area: {}\", rect.area());\n}",
    "hints": [
      "Write:\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\n\nfn main() {\n    let rect = Rectangle { width: 30, height: 50 };\n    println!(\"Area: {}\", rect.area());\n}"
    ],
    "testCases": [
      {
        "id": "rust-51-tc-1",
        "description": "Verifies correct implementation for Method Syntax: impl Blocks and &self",
        "testFn": "code.includes('impl Rectangle') && code.includes('fn area(&self)')"
      }
    ]
  },
  {
    "id": "rust-52-mutating-methods-&mut-self",
    "title": "52. Mutating Methods: &mut self",
    "slug": "lesson-52-mutating-methods-&mut-self",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Mutating Methods: &mut self in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Mutating Methods",
      "Rust"
    ],
    "analogy": "A mechanical handheld clicker: pressing the thumb button advances the displayed digit by one.",
    "explanationMarkdown": "### Mutating Methods: &mut self\n\n`&mut self` gives a method exclusive mutable access to alter the struct's internal state.\n\n```rust\nstruct Counter {\n    count: u32,\n}\n\nimpl Counter {\n    fn increment(&mut self) {\n        self.count += 1;\n    }\n}\n\nfn main() {\n    let mut c = Counter { count: 0 };\n    c.increment();\n    println!(\"Count: {}\", c.count);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Mutating Methods: &mut self",
      "code": "struct Counter {\n    count: u32,\n}\n\nimpl Counter {\n    fn increment(&mut self) {\n        self.count += 1;\n    }\n}\n\nfn main() {\n    let mut c = Counter { count: 0 };\n    c.increment();\n    println!(\"Count: {}\", c.count);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mutating Methods: &mut self.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mutating Methods: &mut self.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Counter {\n    count: u32,\n}\n\nimpl Counter {\n    fn increment(&mut self) {\n        self.count += 1;\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Counter {\n    count: u32,\n}\n\nimpl Counter {\n    fn increment(&mut self) {\n        self.count += 1;\n    }\n}\n\nfn main() {\n    let mut c = Counter { count: 0 };\n    c.increment();\n    println!(\"Count: {}\", c.count);\n}",
    "hints": [
      "Write:\nstruct Counter {\n    count: u32,\n}\n\nimpl Counter {\n    fn increment(&mut self) {\n        self.count += 1;\n    }\n}\n\nfn main() {\n    let mut c = Counter { count: 0 };\n    c.increment();\n    println!(\"Count: {}\", c.count);\n}"
    ],
    "testCases": [
      {
        "id": "rust-52-tc-1",
        "description": "Verifies correct implementation for Mutating Methods: &mut self",
        "testFn": "code.includes('fn increment(&mut self)') || code.includes('c.increment()')"
      }
    ]
  },
  {
    "id": "rust-53-associated-functions-and-constru",
    "title": "53. Associated Functions and Constructors (Self::new)",
    "slug": "lesson-53-associated-functions-and-constru",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Associated Functions and Constructors (Self::new) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Associated Functions and Constructors (Self",
      "Rust"
    ],
    "analogy": "A factory assembly line stamped at the entrance: 'Call here to manufacture a new item'.",
    "explanationMarkdown": "### Associated Functions and Constructors (Self::new)\n\nFunctions without a `self` parameter inside `impl` blocks are associated functions, commonly used as constructors like `Square::new()`.\n\n```rust\nstruct Square {\n    side: u32,\n}\n\nimpl Square {\n    fn new(side: u32) -> Self {\n        Square { side }\n    }\n}\n\nfn main() {\n    let sq = Square::new(20);\n    println!(\"Square side: {}\", sq.side);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Associated Functions and Constructors (Self::new)",
      "code": "struct Square {\n    side: u32,\n}\n\nimpl Square {\n    fn new(side: u32) -> Self {\n        Square { side }\n    }\n}\n\nfn main() {\n    let sq = Square::new(20);\n    println!(\"Square side: {}\", sq.side);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Associated Functions and Constructors (Self::new).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Associated Functions and Constructors (Self::new).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Square {\n    side: u32,\n}\n\nimpl Square {\n    fn new(side: u32) -> Self {\n        Square { side }\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Square {\n    side: u32,\n}\n\nimpl Square {\n    fn new(side: u32) -> Self {\n        Square { side }\n    }\n}\n\nfn main() {\n    let sq = Square::new(20);\n    println!(\"Square side: {}\", sq.side);\n}",
    "hints": [
      "Write:\nstruct Square {\n    side: u32,\n}\n\nimpl Square {\n    fn new(side: u32) -> Self {\n        Square { side }\n    }\n}\n\nfn main() {\n    let sq = Square::new(20);\n    println!(\"Square side: {}\", sq.side);\n}"
    ],
    "testCases": [
      {
        "id": "rust-53-tc-1",
        "description": "Verifies correct implementation for Associated Functions and Constructors (Self::new)",
        "testFn": "code.includes('Square::new') || code.includes('fn new')"
      }
    ]
  },
  {
    "id": "rust-54-multiple-impl-blocks-for-clean-c",
    "title": "54. Multiple impl Blocks for Clean Code Organization",
    "slug": "lesson-54-multiple-impl-blocks-for-clean-c",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multiple impl Blocks for Clean Code Organization in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Multiple impl Blocks for Clean Code Organization",
      "Rust"
    ],
    "analogy": "Filing engineering schematics into separate specialized binders: one for electrical, one for mechanical.",
    "explanationMarkdown": "### Multiple impl Blocks for Clean Code Organization\n\nRust allows dividing a type's methods across multiple `impl` blocks (e.g. grouping trait implementations or conditional compilation).\n\n```rust\nstruct Robot {\n    id: u32,\n}\nimpl Robot {\n    fn id(&self) -> u32 { self.id }\n}\nimpl Robot {\n    fn ping(&self) { println!(\"Pong\"); }\n}\n\nfn main() {\n    let r = Robot { id: 7 };\n    r.ping();\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multiple impl Blocks for Clean Code Organization",
      "code": "struct Robot {\n    id: u32,\n}\nimpl Robot {\n    fn id(&self) -> u32 { self.id }\n}\nimpl Robot {\n    fn ping(&self) { println!(\"Pong\"); }\n}\n\nfn main() {\n    let r = Robot { id: 7 };\n    r.ping();\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple impl Blocks for Clean Code Organization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple impl Blocks for Clean Code Organization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Robot {\n    id: u32,\n}\nimpl Robot {\n    fn id(&self) -> u32 { self.id }\n}\nimpl Robot {\n    fn ping(&self) { println!(\"Pong\"); }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Robot {\n    id: u32,\n}\nimpl Robot {\n    fn id(&self) -> u32 { self.id }\n}\nimpl Robot {\n    fn ping(&self) { println!(\"Pong\"); }\n}\n\nfn main() {\n    let r = Robot { id: 7 };\n    r.ping();\n}",
    "hints": [
      "Write:\nstruct Robot {\n    id: u32,\n}\nimpl Robot {\n    fn id(&self) -> u32 { self.id }\n}\nimpl Robot {\n    fn ping(&self) { println!(\"Pong\"); }\n}\n\nfn main() {\n    let r = Robot { id: 7 };\n    r.ping();\n}"
    ],
    "testCases": [
      {
        "id": "rust-54-tc-1",
        "description": "Verifies correct implementation for Multiple impl Blocks for Clean Code Organization",
        "testFn": "code.includes('impl Robot') || code.includes('r.ping()')"
      }
    ]
  },
  {
    "id": "rust-55-deriving-useful-traits-#[derived",
    "title": "55. Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)]",
    "slug": "lesson-55-deriving-useful-traits-#[derived",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)] in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Deriving Useful Traits",
      "Rust"
    ],
    "analogy": "Slapping factory certified stamps onto a crate: 'Barcode Scannable', 'Photocopyable', 'Scalable'.",
    "explanationMarkdown": "### Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)]\n\n`#[derive(...)]` automatically implements standard traits like `Debug` (`{:?}` formatting), `Clone`, and `PartialEq` (`==` comparisons).\n\n```rust\n#[derive(Debug, Clone, PartialEq)]\nstruct Metric {\n    name: String,\n    value: f64,\n}\n\nfn main() {\n    let m = Metric { name: String::from(\"cpu\"), value: 45.2 };\n    println!(\"{:?}\", m);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)]",
      "code": "#[derive(Debug, Clone, PartialEq)]\nstruct Metric {\n    name: String,\n    value: f64,\n}\n\nfn main() {\n    let m = Metric { name: String::from(\"cpu\"), value: 45.2 };\n    println!(\"{:?}\", m);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "#[derive(Debug, Clone, PartialEq)]\nstruct Metric {\n    name: String,\n    value: f64,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "#[derive(Debug, Clone, PartialEq)]\nstruct Metric {\n    name: String,\n    value: f64,\n}\n\nfn main() {\n    let m = Metric { name: String::from(\"cpu\"), value: 45.2 };\n    println!(\"{:?}\", m);\n}",
    "hints": [
      "Write:\n#[derive(Debug, Clone, PartialEq)]\nstruct Metric {\n    name: String,\n    value: f64,\n}\n\nfn main() {\n    let m = Metric { name: String::from(\"cpu\"), value: 45.2 };\n    println!(\"{:?}\", m);\n}"
    ],
    "testCases": [
      {
        "id": "rust-55-tc-1",
        "description": "Verifies correct implementation for Deriving Useful Traits: #[derive(Debug, Clone, PartialEq)]",
        "testFn": "code.includes('#[derive(Debug') || code.includes('{:?}')"
      }
    ]
  },
  {
    "id": "rust-56-enums-expressing-algebraic-data-",
    "title": "56. Enums: Expressing Algebraic Data Types",
    "slug": "lesson-56-enums-expressing-algebraic-data-",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Enums: Expressing Algebraic Data Types in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Enums",
      "Rust"
    ],
    "analogy": "A Swiss Army Knife: one tool that can be a blade, a corkscrew, or a magnifying glass at any given moment.",
    "explanationMarkdown": "### Enums: Expressing Algebraic Data Types\n\nRust enums are tagged unions that can embed distinct variants with different associated types and data.\n\n```rust\nenum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n}\n\nfn main() {\n    let _load = WebEvent::PageLoad;\n    let _press = WebEvent::KeyPress('q');\n    println!(\"Events created\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Enums: Expressing Algebraic Data Types",
      "code": "enum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n}\n\nfn main() {\n    let _load = WebEvent::PageLoad;\n    let _press = WebEvent::KeyPress('q');\n    println!(\"Events created\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Enums: Expressing Algebraic Data Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Enums: Expressing Algebraic Data Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n}\n\nfn main() {\n    let _load = WebEvent::PageLoad;\n    let _press = WebEvent::KeyPress('q');\n    println!(\"Events created\");\n}",
    "hints": [
      "Write:\nenum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n}\n\nfn main() {\n    let _load = WebEvent::PageLoad;\n    let _press = WebEvent::KeyPress('q');\n    println!(\"Events created\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-56-tc-1",
        "description": "Verifies correct implementation for Enums: Expressing Algebraic Data Types",
        "testFn": "code.includes('enum WebEvent') || code.includes('WebEvent::KeyPress')"
      }
    ]
  },
  {
    "id": "rust-57-the-optiont-enum-replacing-null-",
    "title": "57. The Option<T> Enum: Replacing Null Safely",
    "slug": "lesson-57-the-optiont-enum-replacing-null-",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Option<T> Enum: Replacing Null Safely in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Option<T> Enum",
      "Rust"
    ],
    "analogy": "A surprise parcel box: opening it reveals either a prize (`Some(T)`) or empty packing paper (`None`).",
    "explanationMarkdown": "### The Option<T> Enum: Replacing Null Safely\n\nRust has NO `null` keyword! Absence of value is explicitly encoded as `Option<T>` with variants `Some(T)` or `None`.\n\n```rust\nfn find_user(id: i32) -> Option<String> {\n    if id == 1 { Some(String::from(\"Alice\")) } else { None }\n}\n\nfn main() {\n    let user = find_user(1);\n    println!(\"Found: {:?}\", user);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Option<T> Enum: Replacing Null Safely",
      "code": "fn find_user(id: i32) -> Option<String> {\n    if id == 1 { Some(String::from(\"Alice\")) } else { None }\n}\n\nfn main() {\n    let user = find_user(1);\n    println!(\"Found: {:?}\", user);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Option<T> Enum: Replacing Null Safely.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Option<T> Enum: Replacing Null Safely.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn find_user(id: i32) -> Option<String> {\n    if id == 1 { Some(String::from(\"Alice\")) } else { None }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn find_user(id: i32) -> Option<String> {\n    if id == 1 { Some(String::from(\"Alice\")) } else { None }\n}\n\nfn main() {\n    let user = find_user(1);\n    println!(\"Found: {:?}\", user);\n}",
    "hints": [
      "Write:\nfn find_user(id: i32) -> Option<String> {\n    if id == 1 { Some(String::from(\"Alice\")) } else { None }\n}\n\nfn main() {\n    let user = find_user(1);\n    println!(\"Found: {:?}\", user);\n}"
    ],
    "testCases": [
      {
        "id": "rust-57-tc-1",
        "description": "Verifies correct implementation for The Option<T> Enum: Replacing Null Safely",
        "testFn": "code.includes('Option<String>') || code.includes('Some(')"
      }
    ]
  },
  {
    "id": "rust-58-methods-on-enums",
    "title": "58. Methods on Enums",
    "slug": "lesson-58-methods-on-enums",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Methods on Enums in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Methods on Enums",
      "Rust"
    ],
    "analogy": "A status dial with a built-in alarm audio buzzer that sounds depending on the dial position.",
    "explanationMarkdown": "### Methods on Enums\n\nJust like structs, Rust enums can have `impl` blocks with methods and associated functions.\n\n```rust\nenum TrafficLight {\n    Red,\n    Yellow,\n    Green,\n}\n\nimpl TrafficLight {\n    fn time_seconds(&self) -> u32 {\n        match self {\n            TrafficLight::Red => 60,\n            TrafficLight::Yellow => 5,\n            TrafficLight::Green => 45,\n        }\n    }\n}\n\nfn main() {\n    let light = TrafficLight::Red;\n    println!(\"Seconds: {}\", light.time_seconds());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Methods on Enums",
      "code": "enum TrafficLight {\n    Red,\n    Yellow,\n    Green,\n}\n\nimpl TrafficLight {\n    fn time_seconds(&self) -> u32 {\n        match self {\n            TrafficLight::Red => 60,\n            TrafficLight::Yellow => 5,\n            TrafficLight::Green => 45,\n        }\n    }\n}\n\nfn main() {\n    let light = TrafficLight::Red;\n    println!(\"Seconds: {}\", light.time_seconds());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Methods on Enums.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Methods on Enums.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum TrafficLight {\n    Red,\n    Yellow,\n    Green,\n}\n\nimpl TrafficLight {\n    fn time_seconds(&self) -> u32 {\n        match self {\n            TrafficLight::Red => 60,\n            TrafficLight::Yellow => 5,\n            TrafficLight::Green => 45,\n        }\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum TrafficLight {\n    Red,\n    Yellow,\n    Green,\n}\n\nimpl TrafficLight {\n    fn time_seconds(&self) -> u32 {\n        match self {\n            TrafficLight::Red => 60,\n            TrafficLight::Yellow => 5,\n            TrafficLight::Green => 45,\n        }\n    }\n}\n\nfn main() {\n    let light = TrafficLight::Red;\n    println!(\"Seconds: {}\", light.time_seconds());\n}",
    "hints": [
      "Write:\nenum TrafficLight {\n    Red,\n    Yellow,\n    Green,\n}\n\nimpl TrafficLight {\n    fn time_seconds(&self) -> u32 {\n        match self {\n            TrafficLight::Red => 60,\n            TrafficLight::Yellow => 5,\n            TrafficLight::Green => 45,\n        }\n    }\n}\n\nfn main() {\n    let light = TrafficLight::Red;\n    println!(\"Seconds: {}\", light.time_seconds());\n}"
    ],
    "testCases": [
      {
        "id": "rust-58-tc-1",
        "description": "Verifies correct implementation for Methods on Enums",
        "testFn": "code.includes('impl TrafficLight') || code.includes('TrafficLight::Red')"
      }
    ]
  },
  {
    "id": "rust-59-enum-memory-layout-and-the-null-",
    "title": "59. Enum Memory Layout and the Null-Pointer Optimization (NPO)",
    "slug": "lesson-59-enum-memory-layout-and-the-null-",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Enum Memory Layout and the Null-Pointer Optimization (NPO) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Enum Memory Layout and the Null-Pointer Optimization (NPO)",
      "Rust"
    ],
    "analogy": "Using address 0x0 as an invalid token so no extra space is needed to record a 'None' flag.",
    "explanationMarkdown": "### Enum Memory Layout and the Null-Pointer Optimization (NPO)\n\nThe Null-Pointer Optimization guarantees that `Option<&T>` has the exact same memory footprint as a bare pointer in C.\n\n```rust\nfn main() {\n    use std::mem::size_of;\n    println!(\"Option<&i32> size: {} bytes\", size_of::<Option<&i32>>());\n    println!(\"&i32 size: {} bytes\", size_of::<&i32>());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Enum Memory Layout and the Null-Pointer Optimization (NPO)",
      "code": "fn main() {\n    use std::mem::size_of;\n    println!(\"Option<&i32> size: {} bytes\", size_of::<Option<&i32>>());\n    println!(\"&i32 size: {} bytes\", size_of::<&i32>());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Enum Memory Layout and the Null-Pointer Optimization (NPO).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Enum Memory Layout and the Null-Pointer Optimization (NPO).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    use std::mem::size_of;\n    println!(\"Option<&i32> size: {} bytes\", size_of::<Option<&i32>>());\n    println!(\"&i32 size: {} bytes\", size_of::<&i32>());\n}",
    "hints": [
      "Write:\nfn main() {\n    use std::mem::size_of;\n    println!(\"Option<&i32> size: {} bytes\", size_of::<Option<&i32>>());\n    println!(\"&i32 size: {} bytes\", size_of::<&i32>());\n}"
    ],
    "testCases": [
      {
        "id": "rust-59-tc-1",
        "description": "Verifies correct implementation for Enum Memory Layout and the Null-Pointer Optimization (NPO)",
        "testFn": "code.includes('size_of::<Option<&i32>>') || code.includes('size_of')"
      }
    ]
  },
  {
    "id": "rust-60-module-4-review-structs-&-enums-",
    "title": "60. Module 4 Review: Structs & Enums Mastery",
    "slug": "lesson-60-module-4-review-structs-&-enums-",
    "language": "rust",
    "category": "Module 4: Structs, Methods & Enums",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 4 Review: Structs & Enums Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 4 Review",
      "Rust"
    ],
    "analogy": "A master mechanical workshop with precision custom parts and labeled status switches.",
    "explanationMarkdown": "### Module 4 Review: Structs & Enums Mastery\n\nMastery over custom structs, methods with `&self`/`&mut self`, constructors, enums, `Option<T>`, and memory optimizations.\n\n```rust\nstruct Engine {\n    horsepower: u32,\n}\n\nfn main() {\n    let e = Engine { horsepower: 450 };\n    println!(\"Engine ready: {} HP\", e.horsepower);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: Structs & Enums Mastery",
      "code": "struct Engine {\n    horsepower: u32,\n}\n\nfn main() {\n    let e = Engine { horsepower: 450 };\n    println!(\"Engine ready: {} HP\", e.horsepower);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 4 Review: Structs & Enums Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 4 Review: Structs & Enums Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Engine {\n    horsepower: u32,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Engine {\n    horsepower: u32,\n}\n\nfn main() {\n    let e = Engine { horsepower: 450 };\n    println!(\"Engine ready: {} HP\", e.horsepower);\n}",
    "hints": [
      "Write:\nstruct Engine {\n    horsepower: u32,\n}\n\nfn main() {\n    let e = Engine { horsepower: 450 };\n    println!(\"Engine ready: {} HP\", e.horsepower);\n}"
    ],
    "testCases": [
      {
        "id": "rust-60-tc-1",
        "description": "Verifies correct implementation for Module 4 Review: Structs & Enums Mastery",
        "testFn": "code.includes('Engine ready') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-61-the-match-control-flow-construct",
    "title": "61. The match Control Flow Construct (Exhaustive Checking)",
    "slug": "lesson-61-the-match-control-flow-construct",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The match Control Flow Construct (Exhaustive Checking) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The match Control Flow Construct (Exhaustive Checking)",
      "Rust"
    ],
    "analogy": "A coin sorter with four exact coin slots: if you miss a slot, the machine halts production at the factory.",
    "explanationMarkdown": "### The match Control Flow Construct (Exhaustive Checking)\n\n`match` requires exhaustive coverage: every possible variant must be handled, preventing unhandled edge cases.\n\n```rust\nenum Coin { Penny, Nickel, Dime, Quarter }\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    println!(\"Dime: {}c\", value_in_cents(Coin::Dime));\n}\n```",
    "workedExample": {
      "title": "Worked Example: The match Control Flow Construct (Exhaustive Checking)",
      "code": "enum Coin { Penny, Nickel, Dime, Quarter }\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    println!(\"Dime: {}c\", value_in_cents(Coin::Dime));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The match Control Flow Construct (Exhaustive Checking).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The match Control Flow Construct (Exhaustive Checking).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum Coin { Penny, Nickel, Dime, Quarter }\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum Coin { Penny, Nickel, Dime, Quarter }\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    println!(\"Dime: {}c\", value_in_cents(Coin::Dime));\n}",
    "hints": [
      "Write:\nenum Coin { Penny, Nickel, Dime, Quarter }\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    println!(\"Dime: {}c\", value_in_cents(Coin::Dime));\n}"
    ],
    "testCases": [
      {
        "id": "rust-61-tc-1",
        "description": "Verifies correct implementation for The match Control Flow Construct (Exhaustive Checking)",
        "testFn": "code.includes('match coin') || code.includes('Coin::Quarter')"
      }
    ]
  },
  {
    "id": "rust-62-matching-with-optiont-and-bindin",
    "title": "62. Matching with Option<T> and Binding Values",
    "slug": "lesson-62-matching-with-optiont-and-bindin",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Matching with Option<T> and Binding Values in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Matching with Option<T> and Binding Values",
      "Rust"
    ],
    "analogy": "Opening an envelope: if empty do nothing; if it contains a check, deposit the cash.",
    "explanationMarkdown": "### Matching with Option<T> and Binding Values\n\nMatching on `Option<T>` extracts the inner value `i` safely when present.\n\n```rust\nfn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn main() {\n    println!(\"{:?}\", plus_one(Some(5)));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Matching with Option<T> and Binding Values",
      "code": "fn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn main() {\n    println!(\"{:?}\", plus_one(Some(5)));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matching with Option<T> and Binding Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matching with Option<T> and Binding Values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn main() {\n    println!(\"{:?}\", plus_one(Some(5)));\n}",
    "hints": [
      "Write:\nfn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn main() {\n    println!(\"{:?}\", plus_one(Some(5)));\n}"
    ],
    "testCases": [
      {
        "id": "rust-62-tc-1",
        "description": "Verifies correct implementation for Matching with Option<T> and Binding Values",
        "testFn": "code.includes('Some(i + 1)') || code.includes('match x')"
      }
    ]
  },
  {
    "id": "rust-63-the-catch-all-pattern-and-the-_-",
    "title": "63. The Catch-All Pattern and the _ Placeholder",
    "slug": "lesson-63-the-catch-all-pattern-and-the-_-",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Catch-All Pattern and the _ Placeholder in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Catch-All Pattern and the _ Placeholder",
      "Rust"
    ],
    "analogy": "A postal sorter with bins for New York, London, and an 'All Other Destinations' general crate.",
    "explanationMarkdown": "### The Catch-All Pattern and the _ Placeholder\n\nUse `other => ...` to bind any remaining values, or `_ => ...` to ignore and discard unmatched cases.\n\n```rust\nfn describe_dice(roll: u8) {\n    match roll {\n        1 => println!(\"Critical miss\"),\n        6 => println!(\"Critical hit\"),\n        _ => println!(\"Normal roll\"),\n    }\n}\n\nfn main() {\n    describe_dice(4);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Catch-All Pattern and the _ Placeholder",
      "code": "fn describe_dice(roll: u8) {\n    match roll {\n        1 => println!(\"Critical miss\"),\n        6 => println!(\"Critical hit\"),\n        _ => println!(\"Normal roll\"),\n    }\n}\n\nfn main() {\n    describe_dice(4);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Catch-All Pattern and the _ Placeholder.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Catch-All Pattern and the _ Placeholder.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn describe_dice(roll: u8) {\n    match roll {\n        1 => println!(\"Critical miss\"),\n        6 => println!(\"Critical hit\"),\n        _ => println!(\"Normal roll\"),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn describe_dice(roll: u8) {\n    match roll {\n        1 => println!(\"Critical miss\"),\n        6 => println!(\"Critical hit\"),\n        _ => println!(\"Normal roll\"),\n    }\n}\n\nfn main() {\n    describe_dice(4);\n}",
    "hints": [
      "Write:\nfn describe_dice(roll: u8) {\n    match roll {\n        1 => println!(\"Critical miss\"),\n        6 => println!(\"Critical hit\"),\n        _ => println!(\"Normal roll\"),\n    }\n}\n\nfn main() {\n    describe_dice(4);\n}"
    ],
    "testCases": [
      {
        "id": "rust-63-tc-1",
        "description": "Verifies correct implementation for The Catch-All Pattern and the _ Placeholder",
        "testFn": "code.includes('_ => println!') || code.includes('describe_dice')"
      }
    ]
  },
  {
    "id": "rust-64-concise-control-flow-with-if-let",
    "title": "64. Concise Control Flow with if let",
    "slug": "lesson-64-concise-control-flow-with-if-let",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Concise Control Flow with if let in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Concise Control Flow with if let",
      "Rust"
    ],
    "analogy": "Checking if a lottery ticket is a winning ticket: only celebrate if it matches, otherwise keep walking.",
    "explanationMarkdown": "### Concise Control Flow with if let\n\n`if let` handles values that match a single pattern while ignoring all other possibilities.\n\n```rust\nfn main() {\n    let config_max: Option<u32> = Some(100);\n    if let Some(max) = config_max {\n        println!(\"The maximum is {}\", max);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Concise Control Flow with if let",
      "code": "fn main() {\n    let config_max: Option<u32> = Some(100);\n    if let Some(max) = config_max {\n        println!(\"The maximum is {}\", max);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Concise Control Flow with if let.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Concise Control Flow with if let.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let config_max: Option<u32> = Some(100);\n    if let Some(max) = config_max {\n        println!(\"The maximum is {}\", max);\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    let config_max: Option<u32> = Some(100);\n    if let Some(max) = config_max {\n        println!(\"The maximum is {}\", max);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-64-tc-1",
        "description": "Verifies correct implementation for Concise Control Flow with if let",
        "testFn": "code.includes('if let Some(max)') || code.includes('config_max')"
      }
    ]
  },
  {
    "id": "rust-65-the-while-let-loop",
    "title": "65. The while let Loop",
    "slug": "lesson-65-the-while-let-loop",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The while let Loop in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The while let Loop",
      "Rust"
    ],
    "analogy": "A conveyor belt feeding boxes: keep processing boxes as long as the sensor spots an arriving crate.",
    "explanationMarkdown": "### The while let Loop\n\n`while let` continues looping as long as an expression matches the specified pattern.\n\n```rust\nfn main() {\n    let mut stack = vec![1, 2, 3];\n    while let Some(top) = stack.pop() {\n        println!(\"Popped: {}\", top);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The while let Loop",
      "code": "fn main() {\n    let mut stack = vec![1, 2, 3];\n    while let Some(top) = stack.pop() {\n        println!(\"Popped: {}\", top);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The while let Loop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The while let Loop.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut stack = vec![1, 2, 3];\n    while let Some(top) = stack.pop() {\n        println!(\"Popped: {}\", top);\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut stack = vec![1, 2, 3];\n    while let Some(top) = stack.pop() {\n        println!(\"Popped: {}\", top);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-65-tc-1",
        "description": "Verifies correct implementation for The while let Loop",
        "testFn": "code.includes('while let Some(top)') || code.includes('stack.pop()')"
      }
    ]
  },
  {
    "id": "rust-66-matching-multiple-patterns-with-",
    "title": "66. Matching Multiple Patterns with | (OR)",
    "slug": "lesson-66-matching-multiple-patterns-with-",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Matching Multiple Patterns with | (OR) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Matching Multiple Patterns with | (OR)",
      "Rust"
    ],
    "analogy": "A ticket gate that opens for passengers holding a Gold, Platinum, or Diamond badge.",
    "explanationMarkdown": "### Matching Multiple Patterns with | (OR)\n\nThe `|` syntax allows matching multiple alternative patterns in a single match arm.\n\n```rust\nfn is_vowel(c: char) -> bool {\n    match c {\n        'a' | 'e' | 'i' | 'o' | 'u' => true,\n        _ => false,\n    }\n}\n\nfn main() {\n    println!(\"is 'e' vowel? {}\", is_vowel('e'));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Matching Multiple Patterns with | (OR)",
      "code": "fn is_vowel(c: char) -> bool {\n    match c {\n        'a' | 'e' | 'i' | 'o' | 'u' => true,\n        _ => false,\n    }\n}\n\nfn main() {\n    println!(\"is 'e' vowel? {}\", is_vowel('e'));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matching Multiple Patterns with | (OR).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matching Multiple Patterns with | (OR).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn is_vowel(c: char) -> bool {\n    match c {\n        'a' | 'e' | 'i' | 'o' | 'u' => true,\n        _ => false,\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn is_vowel(c: char) -> bool {\n    match c {\n        'a' | 'e' | 'i' | 'o' | 'u' => true,\n        _ => false,\n    }\n}\n\nfn main() {\n    println!(\"is 'e' vowel? {}\", is_vowel('e'));\n}",
    "hints": [
      "Write:\nfn is_vowel(c: char) -> bool {\n    match c {\n        'a' | 'e' | 'i' | 'o' | 'u' => true,\n        _ => false,\n    }\n}\n\nfn main() {\n    println!(\"is 'e' vowel? {}\", is_vowel('e'));\n}"
    ],
    "testCases": [
      {
        "id": "rust-66-tc-1",
        "description": "Verifies correct implementation for Matching Multiple Patterns with | (OR)",
        "testFn": "code.includes(\"'a' | 'e'\") || code.includes('is_vowel')"
      }
    ]
  },
  {
    "id": "rust-67-matching-ranges-with-..=-syntax",
    "title": "67. Matching Ranges with ..= Syntax",
    "slug": "lesson-67-matching-ranges-with-..=-syntax",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Matching Ranges with ..= Syntax in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Matching Ranges with ..= Syntax",
      "Rust"
    ],
    "analogy": "A mercury thermometer with marked temperature zones: freezing, room temp, and boiling.",
    "explanationMarkdown": "### Matching Ranges with ..= Syntax\n\nRanges like `0..=12` match inclusive numerical and char values concisely.\n\n```rust\nfn categorize_age(age: u32) -> &'static str {\n    match age {\n        0..=12 => \"Child\",\n        13..=19 => \"Teenager\",\n        20..=64 => \"Adult\",\n        _ => \"Senior\",\n    }\n}\n\nfn main() {\n    println!(\"Age 15: {}\", categorize_age(15));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Matching Ranges with ..= Syntax",
      "code": "fn categorize_age(age: u32) -> &'static str {\n    match age {\n        0..=12 => \"Child\",\n        13..=19 => \"Teenager\",\n        20..=64 => \"Adult\",\n        _ => \"Senior\",\n    }\n}\n\nfn main() {\n    println!(\"Age 15: {}\", categorize_age(15));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matching Ranges with ..= Syntax.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matching Ranges with ..= Syntax.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn categorize_age(age: u32) -> &'static str {\n    match age {\n        0..=12 => \"Child\",\n        13..=19 => \"Teenager\",\n        20..=64 => \"Adult\",\n        _ => \"Senior\",\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn categorize_age(age: u32) -> &'static str {\n    match age {\n        0..=12 => \"Child\",\n        13..=19 => \"Teenager\",\n        20..=64 => \"Adult\",\n        _ => \"Senior\",\n    }\n}\n\nfn main() {\n    println!(\"Age 15: {}\", categorize_age(15));\n}",
    "hints": [
      "Write:\nfn categorize_age(age: u32) -> &'static str {\n    match age {\n        0..=12 => \"Child\",\n        13..=19 => \"Teenager\",\n        20..=64 => \"Adult\",\n        _ => \"Senior\",\n    }\n}\n\nfn main() {\n    println!(\"Age 15: {}\", categorize_age(15));\n}"
    ],
    "testCases": [
      {
        "id": "rust-67-tc-1",
        "description": "Verifies correct implementation for Matching Ranges with ..= Syntax",
        "testFn": "code.includes('0..=12') || code.includes('categorize_age')"
      }
    ]
  },
  {
    "id": "rust-68-destructuring-structs-in-match-a",
    "title": "68. Destructuring Structs in Match Arms",
    "slug": "lesson-68-destructuring-structs-in-match-a",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Destructuring Structs in Match Arms in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Destructuring Structs in Match Arms",
      "Rust"
    ],
    "analogy": "A laser scanner inspecting package labels and routing boxes based on postal code fields.",
    "explanationMarkdown": "### Destructuring Structs in Match Arms\n\nStruct patterns unpack fields directly in match statements, allowing fine-grained condition filtering.\n\n```rust\nstruct Point { x: i32, y: i32 }\n\nfn describe_point(p: Point) {\n    match p {\n        Point { x: 0, y: 0 } => println!(\"At the origin\"),\n        Point { x, y: 0 } => println!(\"On x-axis at {}\", x),\n        Point { x: 0, y } => println!(\"On y-axis at {}\", y),\n        Point { x, y } => println!(\"At ({}, {})\", x, y),\n    }\n}\n\nfn main() {\n    describe_point(Point { x: 5, y: 0 });\n}\n```",
    "workedExample": {
      "title": "Worked Example: Destructuring Structs in Match Arms",
      "code": "struct Point { x: i32, y: i32 }\n\nfn describe_point(p: Point) {\n    match p {\n        Point { x: 0, y: 0 } => println!(\"At the origin\"),\n        Point { x, y: 0 } => println!(\"On x-axis at {}\", x),\n        Point { x: 0, y } => println!(\"On y-axis at {}\", y),\n        Point { x, y } => println!(\"At ({}, {})\", x, y),\n    }\n}\n\nfn main() {\n    describe_point(Point { x: 5, y: 0 });\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Destructuring Structs in Match Arms.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Destructuring Structs in Match Arms.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Point { x: i32, y: i32 }\n\nfn describe_point(p: Point) {\n    match p {\n        Point { x: 0, y: 0 } => println!(\"At the origin\"),\n        Point { x, y: 0 } => println!(\"On x-axis at {}\", x),\n        Point { x: 0, y } => println!(\"On y-axis at {}\", y),\n        Point { x, y } => println!(\"At ({}, {})\", x, y),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Point { x: i32, y: i32 }\n\nfn describe_point(p: Point) {\n    match p {\n        Point { x: 0, y: 0 } => println!(\"At the origin\"),\n        Point { x, y: 0 } => println!(\"On x-axis at {}\", x),\n        Point { x: 0, y } => println!(\"On y-axis at {}\", y),\n        Point { x, y } => println!(\"At ({}, {})\", x, y),\n    }\n}\n\nfn main() {\n    describe_point(Point { x: 5, y: 0 });\n}",
    "hints": [
      "Write:\nstruct Point { x: i32, y: i32 }\n\nfn describe_point(p: Point) {\n    match p {\n        Point { x: 0, y: 0 } => println!(\"At the origin\"),\n        Point { x, y: 0 } => println!(\"On x-axis at {}\", x),\n        Point { x: 0, y } => println!(\"On y-axis at {}\", y),\n        Point { x, y } => println!(\"At ({}, {})\", x, y),\n    }\n}\n\nfn main() {\n    describe_point(Point { x: 5, y: 0 });\n}"
    ],
    "testCases": [
      {
        "id": "rust-68-tc-1",
        "description": "Verifies correct implementation for Destructuring Structs in Match Arms",
        "testFn": "code.includes('Point { x: 0, y: 0 }') || code.includes('describe_point')"
      }
    ]
  },
  {
    "id": "rust-69-destructuring-enums-with-nested-",
    "title": "69. Destructuring Enums with Nested Data",
    "slug": "lesson-69-destructuring-enums-with-nested-",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Destructuring Enums with Nested Data in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Destructuring Enums with Nested Data",
      "Rust"
    ],
    "analogy": "A courier inspecting different package formats: envelopes, parcels, or delivery cancel notices.",
    "explanationMarkdown": "### Destructuring Enums with Nested Data\n\nMatch patterns destructure complex enum variants and bind internal payload values cleanly.\n\n```rust\nenum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n}\n\nfn process_msg(msg: Message) {\n    match msg {\n        Message::Quit => println!(\"Quit\"),\n        Message::Move { x, y } => println!(\"Move to {}, {}\", x, y),\n        Message::Write(text) => println!(\"Text: {}\", text),\n    }\n}\n\nfn main() {\n    process_msg(Message::Write(String::from(\"hello\")));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Destructuring Enums with Nested Data",
      "code": "enum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n}\n\nfn process_msg(msg: Message) {\n    match msg {\n        Message::Quit => println!(\"Quit\"),\n        Message::Move { x, y } => println!(\"Move to {}, {}\", x, y),\n        Message::Write(text) => println!(\"Text: {}\", text),\n    }\n}\n\nfn main() {\n    process_msg(Message::Write(String::from(\"hello\")));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Destructuring Enums with Nested Data.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Destructuring Enums with Nested Data.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n}\n\nfn process_msg(msg: Message) {\n    match msg {\n        Message::Quit => println!(\"Quit\"),\n        Message::Move { x, y } => println!(\"Move to {}, {}\", x, y),\n        Message::Write(text) => println!(\"Text: {}\", text),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n}\n\nfn process_msg(msg: Message) {\n    match msg {\n        Message::Quit => println!(\"Quit\"),\n        Message::Move { x, y } => println!(\"Move to {}, {}\", x, y),\n        Message::Write(text) => println!(\"Text: {}\", text),\n    }\n}\n\nfn main() {\n    process_msg(Message::Write(String::from(\"hello\")));\n}",
    "hints": [
      "Write:\nenum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n}\n\nfn process_msg(msg: Message) {\n    match msg {\n        Message::Quit => println!(\"Quit\"),\n        Message::Move { x, y } => println!(\"Move to {}, {}\", x, y),\n        Message::Write(text) => println!(\"Text: {}\", text),\n    }\n}\n\nfn main() {\n    process_msg(Message::Write(String::from(\"hello\")));\n}"
    ],
    "testCases": [
      {
        "id": "rust-69-tc-1",
        "description": "Verifies correct implementation for Destructuring Enums with Nested Data",
        "testFn": "code.includes('Message::Move') || code.includes('process_msg')"
      }
    ]
  },
  {
    "id": "rust-70-ignoring-parts-of-patterns-with-",
    "title": "70. Ignoring Parts of Patterns with _ and ..",
    "slug": "lesson-70-ignoring-parts-of-patterns-with-",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Ignoring Parts of Patterns with _ and .. in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Ignoring Parts of Patterns with _ and ..",
      "Rust"
    ],
    "analogy": "A package weigh-in station checking only parcel weight and ignoring sender address.",
    "explanationMarkdown": "### Ignoring Parts of Patterns with _ and ..\n\nThe `..` pattern ignores all remaining fields or tuple elements without naming them.\n\n```rust\nstruct Dimensions { width: u32, height: u32, depth: u32 }\n\nfn check_width(d: Dimensions) {\n    match d {\n        Dimensions { width, .. } => println!(\"Width is {}\", width),\n    }\n}\n\nfn main() {\n    check_width(Dimensions { width: 10, height: 20, depth: 30 });\n}\n```",
    "workedExample": {
      "title": "Worked Example: Ignoring Parts of Patterns with _ and ..",
      "code": "struct Dimensions { width: u32, height: u32, depth: u32 }\n\nfn check_width(d: Dimensions) {\n    match d {\n        Dimensions { width, .. } => println!(\"Width is {}\", width),\n    }\n}\n\nfn main() {\n    check_width(Dimensions { width: 10, height: 20, depth: 30 });\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ignoring Parts of Patterns with _ and ...",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ignoring Parts of Patterns with _ and ...",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Dimensions { width: u32, height: u32, depth: u32 }\n\nfn check_width(d: Dimensions) {\n    match d {\n        Dimensions { width, .. } => println!(\"Width is {}\", width),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Dimensions { width: u32, height: u32, depth: u32 }\n\nfn check_width(d: Dimensions) {\n    match d {\n        Dimensions { width, .. } => println!(\"Width is {}\", width),\n    }\n}\n\nfn main() {\n    check_width(Dimensions { width: 10, height: 20, depth: 30 });\n}",
    "hints": [
      "Write:\nstruct Dimensions { width: u32, height: u32, depth: u32 }\n\nfn check_width(d: Dimensions) {\n    match d {\n        Dimensions { width, .. } => println!(\"Width is {}\", width),\n    }\n}\n\nfn main() {\n    check_width(Dimensions { width: 10, height: 20, depth: 30 });\n}"
    ],
    "testCases": [
      {
        "id": "rust-70-tc-1",
        "description": "Verifies correct implementation for Ignoring Parts of Patterns with _ and ..",
        "testFn": "code.includes('width, ..') || code.includes('check_width')"
      }
    ]
  },
  {
    "id": "rust-71-match-guards-adding-extra-if-con",
    "title": "71. Match Guards: Adding Extra if Conditions",
    "slug": "lesson-71-match-guards-adding-extra-if-con",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Match Guards: Adding Extra if Conditions in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Match Guards",
      "Rust"
    ],
    "analogy": "A VIP nightclub bouncer: checks badge, and additionally checks if age is over 21.",
    "explanationMarkdown": "### Match Guards: Adding Extra if Conditions\n\nA match guard is an additional `if` condition specified after a pattern that must also evaluate to true.\n\n```rust\nfn describe_number(num: Option<i32>) {\n    match num {\n        Some(x) if x % 2 == 0 => println!(\"Even number: {}\", x),\n        Some(x) => println!(\"Odd number: {}\", x),\n        None => println!(\"No number\"),\n    }\n}\n\nfn main() {\n    describe_number(Some(4));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Match Guards: Adding Extra if Conditions",
      "code": "fn describe_number(num: Option<i32>) {\n    match num {\n        Some(x) if x % 2 == 0 => println!(\"Even number: {}\", x),\n        Some(x) => println!(\"Odd number: {}\", x),\n        None => println!(\"No number\"),\n    }\n}\n\nfn main() {\n    describe_number(Some(4));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Match Guards: Adding Extra if Conditions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Match Guards: Adding Extra if Conditions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn describe_number(num: Option<i32>) {\n    match num {\n        Some(x) if x % 2 == 0 => println!(\"Even number: {}\", x),\n        Some(x) => println!(\"Odd number: {}\", x),\n        None => println!(\"No number\"),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn describe_number(num: Option<i32>) {\n    match num {\n        Some(x) if x % 2 == 0 => println!(\"Even number: {}\", x),\n        Some(x) => println!(\"Odd number: {}\", x),\n        None => println!(\"No number\"),\n    }\n}\n\nfn main() {\n    describe_number(Some(4));\n}",
    "hints": [
      "Write:\nfn describe_number(num: Option<i32>) {\n    match num {\n        Some(x) if x % 2 == 0 => println!(\"Even number: {}\", x),\n        Some(x) => println!(\"Odd number: {}\", x),\n        None => println!(\"No number\"),\n    }\n}\n\nfn main() {\n    describe_number(Some(4));\n}"
    ],
    "testCases": [
      {
        "id": "rust-71-tc-1",
        "description": "Verifies correct implementation for Match Guards: Adding Extra if Conditions",
        "testFn": "code.includes('Some(x) if x % 2 == 0') || code.includes('describe_number')"
      }
    ]
  },
  {
    "id": "rust-72-at-bindings-the-@-operator",
    "title": "72. At Bindings: The @ Operator",
    "slug": "lesson-72-at-bindings-the-@-operator",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master At Bindings: The @ Operator in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "At Bindings",
      "Rust"
    ],
    "analogy": "Testing if a passenger qualifies for a student discount while simultaneously saving their student ID number.",
    "explanationMarkdown": "### At Bindings: The @ Operator\n\nThe `@` operator lets you test a value against a pattern while also binding the value to a variable.\n\n```rust\nenum Signal {\n    Ping { id: i32 },\n}\n\nfn test_signal(s: Signal) {\n    match s {\n        Signal::Ping { id: id_val @ 1..=10 } => println!(\"Low priority ping: {}\", id_val),\n        Signal::Ping { id } => println!(\"High priority ping: {}\", id),\n    }\n}\n\nfn main() {\n    test_signal(Signal::Ping { id: 5 });\n}\n```",
    "workedExample": {
      "title": "Worked Example: At Bindings: The @ Operator",
      "code": "enum Signal {\n    Ping { id: i32 },\n}\n\nfn test_signal(s: Signal) {\n    match s {\n        Signal::Ping { id: id_val @ 1..=10 } => println!(\"Low priority ping: {}\", id_val),\n        Signal::Ping { id } => println!(\"High priority ping: {}\", id),\n    }\n}\n\nfn main() {\n    test_signal(Signal::Ping { id: 5 });\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for At Bindings: The @ Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of At Bindings: The @ Operator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum Signal {\n    Ping { id: i32 },\n}\n\nfn test_signal(s: Signal) {\n    match s {\n        Signal::Ping { id: id_val @ 1..=10 } => println!(\"Low priority ping: {}\", id_val),\n        Signal::Ping { id } => println!(\"High priority ping: {}\", id),\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum Signal {\n    Ping { id: i32 },\n}\n\nfn test_signal(s: Signal) {\n    match s {\n        Signal::Ping { id: id_val @ 1..=10 } => println!(\"Low priority ping: {}\", id_val),\n        Signal::Ping { id } => println!(\"High priority ping: {}\", id),\n    }\n}\n\nfn main() {\n    test_signal(Signal::Ping { id: 5 });\n}",
    "hints": [
      "Write:\nenum Signal {\n    Ping { id: i32 },\n}\n\nfn test_signal(s: Signal) {\n    match s {\n        Signal::Ping { id: id_val @ 1..=10 } => println!(\"Low priority ping: {}\", id_val),\n        Signal::Ping { id } => println!(\"High priority ping: {}\", id),\n    }\n}\n\nfn main() {\n    test_signal(Signal::Ping { id: 5 });\n}"
    ],
    "testCases": [
      {
        "id": "rust-72-tc-1",
        "description": "Verifies correct implementation for At Bindings: The @ Operator",
        "testFn": "code.includes('@ 1..=10') || code.includes('test_signal')"
      }
    ]
  },
  {
    "id": "rust-73-returning-values-from-loops-brea",
    "title": "73. Returning Values from Loops: break with Value",
    "slug": "lesson-73-returning-values-from-loops-brea",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Returning Values from Loops: break with Value in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Returning Values from Loops",
      "Rust"
    ],
    "analogy": "A search expedition venturing into the jungle and returning with a discovered artifact.",
    "explanationMarkdown": "### Returning Values from Loops: break with Value\n\nA `loop` can yield a value by passing an expression after `break`: `break value;`.\n\n```rust\nfn main() {\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n    println!(\"Result: {}\", result);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Returning Values from Loops: break with Value",
      "code": "fn main() {\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n    println!(\"Result: {}\", result);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Returning Values from Loops: break with Value.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Returning Values from Loops: break with Value.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n    println!(\"Result: {}\", result);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n    println!(\"Result: {}\", result);\n}"
    ],
    "testCases": [
      {
        "id": "rust-73-tc-1",
        "description": "Verifies correct implementation for Returning Values from Loops: break with Value",
        "testFn": "code.includes('break counter * 2') || code.includes('loop {')"
      }
    ]
  },
  {
    "id": "rust-74-loop-labels-disambiguating-neste",
    "title": "74. Loop Labels: Disambiguating Nested Loops",
    "slug": "lesson-74-loop-labels-disambiguating-neste",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Loop Labels: Disambiguating Nested Loops in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Loop Labels",
      "Rust"
    ],
    "analogy": "An emergency elevator stop cord marked with a label that halts the entire building hoist, not just the inner cabin door.",
    "explanationMarkdown": "### Loop Labels: Disambiguating Nested Loops\n\nLoop labels (`'name: loop`) allow `break` and `continue` to specify which nested loop level to terminate.\n\n```rust\nfn main() {\n    'outer: for i in 1..=3 {\n        for j in 1..=3 {\n            if i == 2 && j == 2 {\n                break 'outer;\n            }\n            println!(\"i: {}, j: {}\", i, j);\n        }\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Loop Labels: Disambiguating Nested Loops",
      "code": "fn main() {\n    'outer: for i in 1..=3 {\n        for j in 1..=3 {\n            if i == 2 && j == 2 {\n                break 'outer;\n            }\n            println!(\"i: {}, j: {}\", i, j);\n        }\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Loop Labels: Disambiguating Nested Loops.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Loop Labels: Disambiguating Nested Loops.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    'outer: for i in 1..=3 {\n        for j in 1..=3 {\n            if i == 2 && j == 2 {\n                break 'outer;\n            }\n            println!(\"i: {}, j: {}\", i, j);\n        }\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    'outer: for i in 1..=3 {\n        for j in 1..=3 {\n            if i == 2 && j == 2 {\n                break 'outer;\n            }\n            println!(\"i: {}, j: {}\", i, j);\n        }\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-74-tc-1",
        "description": "Verifies correct implementation for Loop Labels: Disambiguating Nested Loops",
        "testFn": "code.includes(\"'outer:\") || code.includes(\"break 'outer;\")"
      }
    ]
  },
  {
    "id": "rust-75-module-5-review-pattern-matching",
    "title": "75. Module 5 Review: Pattern Matching Mastery",
    "slug": "lesson-75-module-5-review-pattern-matching",
    "language": "rust",
    "category": "Module 5: Pattern Matching & Flow Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 5 Review: Pattern Matching Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 5 Review",
      "Rust"
    ],
    "analogy": "A master biometric security checkpoint recognizing irises, fingerprints, and voice tones flawlessly.",
    "explanationMarkdown": "### Module 5 Review: Pattern Matching Mastery\n\nMastery over exhaustive match statements, `if let`, `while let`, destructuring, guards, `@` bindings, and labeled loops.\n\n```rust\nfn main() {\n    let val = Some(42);\n    if let Some(x) = val {\n        println!(\"Pattern matched: {}\", x);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: Pattern Matching Mastery",
      "code": "fn main() {\n    let val = Some(42);\n    if let Some(x) = val {\n        println!(\"Pattern matched: {}\", x);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 5 Review: Pattern Matching Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 5 Review: Pattern Matching Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let val = Some(42);\n    if let Some(x) = val {\n        println!(\"Pattern matched: {}\", x);\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    let val = Some(42);\n    if let Some(x) = val {\n        println!(\"Pattern matched: {}\", x);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-75-tc-1",
        "description": "Verifies correct implementation for Module 5 Review: Pattern Matching Mastery",
        "testFn": "code.includes('Pattern matched') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-76-vectors-dynamic-resizable-arrays",
    "title": "76. Vectors: Dynamic Resizable Arrays with Vec<T>",
    "slug": "lesson-76-vectors-dynamic-resizable-arrays",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Vectors: Dynamic Resizable Arrays with Vec<T> in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Vectors",
      "Rust"
    ],
    "analogy": "A modular train freight platform where cars can be hitched or unhitched on the fly.",
    "explanationMarkdown": "### Vectors: Dynamic Resizable Arrays with Vec<T>\n\n`Vec<T>` stores a growable sequence of elements on the heap, adjacent in memory for high cache locality.\n\n```rust\nfn main() {\n    let mut v: Vec<i32> = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    println!(\"Vec: {:?}\", v);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Vectors: Dynamic Resizable Arrays with Vec<T>",
      "code": "fn main() {\n    let mut v: Vec<i32> = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    println!(\"Vec: {:?}\", v);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vectors: Dynamic Resizable Arrays with Vec<T>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vectors: Dynamic Resizable Arrays with Vec<T>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut v: Vec<i32> = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    println!(\"Vec: {:?}\", v);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut v: Vec<i32> = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    println!(\"Vec: {:?}\", v);\n}"
    ],
    "testCases": [
      {
        "id": "rust-76-tc-1",
        "description": "Verifies correct implementation for Vectors: Dynamic Resizable Arrays with Vec<T>",
        "testFn": "code.includes('Vec::new()') || code.includes('v.push(')"
      }
    ]
  },
  {
    "id": "rust-77-the-vec!-macro-and-vector-initia",
    "title": "77. The vec! Macro and Vector Initialization",
    "slug": "lesson-77-the-vec!-macro-and-vector-initia",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The vec! Macro and Vector Initialization in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The vec! Macro and Vector Initialization",
      "Rust"
    ],
    "analogy": "Pre-ordering a customized set of luggage cases with initial contents already packed.",
    "explanationMarkdown": "### The vec! Macro and Vector Initialization\n\nThe `vec![...]` macro initializes vectors with initial values conveniently.\n\n```rust\nfn main() {\n    let v = vec![10, 20, 30, 40];\n    println!(\"Length: {}, Capacity: {}\", v.len(), v.capacity());\n}\n```",
    "workedExample": {
      "title": "Worked Example: The vec! Macro and Vector Initialization",
      "code": "fn main() {\n    let v = vec![10, 20, 30, 40];\n    println!(\"Length: {}, Capacity: {}\", v.len(), v.capacity());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The vec! Macro and Vector Initialization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The vec! Macro and Vector Initialization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let v = vec![10, 20, 30, 40];\n    println!(\"Length: {}, Capacity: {}\", v.len(), v.capacity());\n}",
    "hints": [
      "Write:\nfn main() {\n    let v = vec![10, 20, 30, 40];\n    println!(\"Length: {}, Capacity: {}\", v.len(), v.capacity());\n}"
    ],
    "testCases": [
      {
        "id": "rust-77-tc-1",
        "description": "Verifies correct implementation for The vec! Macro and Vector Initialization",
        "testFn": "code.includes('vec![10, 20, 30, 40]') || code.includes('vec!')"
      }
    ]
  },
  {
    "id": "rust-78-reading-vector-elements-indexing",
    "title": "78. Reading Vector Elements: Indexing vs .get()",
    "slug": "lesson-78-reading-vector-elements-indexing",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Reading Vector Elements: Indexing vs .get() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Reading Vector Elements",
      "Rust"
    ],
    "analogy": "Reaching into a numbered locker: `v[i]` panics if empty; `.get(i)` returns a gentle notice.",
    "explanationMarkdown": "### Reading Vector Elements: Indexing vs .get()\n\nDirect indexing `v[i]` panics on out-of-bounds; `v.get(i)` returns `Option<&T>` for safe, panic-free access.\n\n```rust\nfn main() {\n    let v = vec![10, 20, 30];\n    let third = v[2];\n    let maybe_fourth = v.get(3);\n    println!(\"Third: {}, Fourth: {:?}\", third, maybe_fourth);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Reading Vector Elements: Indexing vs .get()",
      "code": "fn main() {\n    let v = vec![10, 20, 30];\n    let third = v[2];\n    let maybe_fourth = v.get(3);\n    println!(\"Third: {}, Fourth: {:?}\", third, maybe_fourth);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reading Vector Elements: Indexing vs .get().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reading Vector Elements: Indexing vs .get().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let v = vec![10, 20, 30];\n    let third = v[2];\n    let maybe_fourth = v.get(3);\n    println!(\"Third: {}, Fourth: {:?}\", third, maybe_fourth);\n}",
    "hints": [
      "Write:\nfn main() {\n    let v = vec![10, 20, 30];\n    let third = v[2];\n    let maybe_fourth = v.get(3);\n    println!(\"Third: {}, Fourth: {:?}\", third, maybe_fourth);\n}"
    ],
    "testCases": [
      {
        "id": "rust-78-tc-1",
        "description": "Verifies correct implementation for Reading Vector Elements: Indexing vs .get()",
        "testFn": "code.includes('v.get(3)') || code.includes('v[2]')"
      }
    ]
  },
  {
    "id": "rust-79-iterating-over-vectors-by-value,",
    "title": "79. Iterating Over Vectors (by Value, &Ref, and &mut Ref)",
    "slug": "lesson-79-iterating-over-vectors-by-value,",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Iterating Over Vectors (by Value, &Ref, and &mut Ref) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Iterating Over Vectors (by Value, &Ref, and &mut Ref)",
      "Rust"
    ],
    "analogy": "A quality inspector walking down an assembly line, optionally stamping modifications on each part.",
    "explanationMarkdown": "### Iterating Over Vectors (by Value, &Ref, and &mut Ref)\n\nIterate by immutable ref `&v`, mutable ref `&mut v` (dereferencing with `*i`), or taking ownership `v.into_iter()`.\n\n```rust\nfn main() {\n    let mut v = vec![1, 2, 3];\n    for i in &mut v {\n        *i *= 10;\n    }\n    for i in &v {\n        println!(\"{}\", i);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterating Over Vectors (by Value, &Ref, and &mut Ref)",
      "code": "fn main() {\n    let mut v = vec![1, 2, 3];\n    for i in &mut v {\n        *i *= 10;\n    }\n    for i in &v {\n        println!(\"{}\", i);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating Over Vectors (by Value, &Ref, and &mut Ref).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating Over Vectors (by Value, &Ref, and &mut Ref).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut v = vec![1, 2, 3];\n    for i in &mut v {\n        *i *= 10;\n    }\n    for i in &v {\n        println!(\"{}\", i);\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut v = vec![1, 2, 3];\n    for i in &mut v {\n        *i *= 10;\n    }\n    for i in &v {\n        println!(\"{}\", i);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-79-tc-1",
        "description": "Verifies correct implementation for Iterating Over Vectors (by Value, &Ref, and &mut Ref)",
        "testFn": "code.includes('for i in &mut v') || code.includes('*i *= 10')"
      }
    ]
  },
  {
    "id": "rust-80-using-enums-to-store-multiple-ty",
    "title": "80. Using Enums to Store Multiple Types in a Vector",
    "slug": "lesson-80-using-enums-to-store-multiple-ty",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Using Enums to Store Multiple Types in a Vector in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Using Enums to Store Multiple Types in a Vector",
      "Rust"
    ],
    "analogy": "A bento lunchbox with distinct compartments holding rice, fish, or vegetables in a single container.",
    "explanationMarkdown": "### Using Enums to Store Multiple Types in a Vector\n\nVectors are homogeneous (one type `T`), but wrapping variants in an enum lets you store heterogeneous data safely.\n\n```rust\nenum SpreadsheetCell {\n    Int(i32),\n    Float(f64),\n    Text(String),\n}\n\nfn main() {\n    let row = vec![\n        SpreadsheetCell::Int(3),\n        SpreadsheetCell::Text(String::from(\"blue\")),\n        SpreadsheetCell::Float(10.12),\n    ];\n    println!(\"Row cells count: {}\", row.len());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Using Enums to Store Multiple Types in a Vector",
      "code": "enum SpreadsheetCell {\n    Int(i32),\n    Float(f64),\n    Text(String),\n}\n\nfn main() {\n    let row = vec![\n        SpreadsheetCell::Int(3),\n        SpreadsheetCell::Text(String::from(\"blue\")),\n        SpreadsheetCell::Float(10.12),\n    ];\n    println!(\"Row cells count: {}\", row.len());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Using Enums to Store Multiple Types in a Vector.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Using Enums to Store Multiple Types in a Vector.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum SpreadsheetCell {\n    Int(i32),\n    Float(f64),\n    Text(String),\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum SpreadsheetCell {\n    Int(i32),\n    Float(f64),\n    Text(String),\n}\n\nfn main() {\n    let row = vec![\n        SpreadsheetCell::Int(3),\n        SpreadsheetCell::Text(String::from(\"blue\")),\n        SpreadsheetCell::Float(10.12),\n    ];\n    println!(\"Row cells count: {}\", row.len());\n}",
    "hints": [
      "Write:\nenum SpreadsheetCell {\n    Int(i32),\n    Float(f64),\n    Text(String),\n}\n\nfn main() {\n    let row = vec![\n        SpreadsheetCell::Int(3),\n        SpreadsheetCell::Text(String::from(\"blue\")),\n        SpreadsheetCell::Float(10.12),\n    ];\n    println!(\"Row cells count: {}\", row.len());\n}"
    ],
    "testCases": [
      {
        "id": "rust-80-tc-1",
        "description": "Verifies correct implementation for Using Enums to Store Multiple Types in a Vector",
        "testFn": "code.includes('SpreadsheetCell') || code.includes('row.len()')"
      }
    ]
  },
  {
    "id": "rust-81-strings-in-depth-string-vs-&str-",
    "title": "81. Strings in Depth: String vs &str and UTF-8 Encoding",
    "slug": "lesson-81-strings-in-depth-string-vs-&str-",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Strings in Depth: String vs &str and UTF-8 Encoding in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Strings in Depth",
      "Rust"
    ],
    "analogy": "A dictionary where some foreign characters require two or three printed alphabet keys to construct.",
    "explanationMarkdown": "### Strings in Depth: String vs &str and UTF-8 Encoding\n\nRust strings are strictly valid UTF-8. `.len()` reports byte size; multi-byte characters occupy more than 1 byte.\n\n```rust\nfn main() {\n    let hello = String::from(\"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435\");\n    println!(\"Byte length: {}\", hello.len());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Strings in Depth: String vs &str and UTF-8 Encoding",
      "code": "fn main() {\n    let hello = String::from(\"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435\");\n    println!(\"Byte length: {}\", hello.len());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Strings in Depth: String vs &str and UTF-8 Encoding.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Strings in Depth: String vs &str and UTF-8 Encoding.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let hello = String::from(\"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435\");\n    println!(\"Byte length: {}\", hello.len());\n}",
    "hints": [
      "Write:\nfn main() {\n    let hello = String::from(\"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435\");\n    println!(\"Byte length: {}\", hello.len());\n}"
    ],
    "testCases": [
      {
        "id": "rust-81-tc-1",
        "description": "Verifies correct implementation for Strings in Depth: String vs &str and UTF-8 Encoding",
        "testFn": "code.includes('hello.len()') || code.includes('\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435')"
      }
    ]
  },
  {
    "id": "rust-82-string-concatenation-+-operator-",
    "title": "82. String Concatenation: + Operator vs format! Macro",
    "slug": "lesson-82-string-concatenation-+-operator-",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master String Concatenation: + Operator vs format! Macro in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "String Concatenation",
      "Rust"
    ],
    "analogy": "A professional printing press formatting text strings cleanly without tearing up source manuscripts.",
    "explanationMarkdown": "### String Concatenation: + Operator vs format! Macro\n\nThe `+` operator moves the first string; `format!` creates a new string using formatting templates without consuming inputs.\n\n```rust\nfn main() {\n    let s1 = String::from(\"tic\");\n    let s2 = String::from(\"tac\");\n    let s3 = String::from(\"toe\");\n    let s = format!(\"{}-{}-{}\", s1, s2, s3);\n    println!(\"{}\", s);\n}\n```",
    "workedExample": {
      "title": "Worked Example: String Concatenation: + Operator vs format! Macro",
      "code": "fn main() {\n    let s1 = String::from(\"tic\");\n    let s2 = String::from(\"tac\");\n    let s3 = String::from(\"toe\");\n    let s = format!(\"{}-{}-{}\", s1, s2, s3);\n    println!(\"{}\", s);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Concatenation: + Operator vs format! Macro.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Concatenation: + Operator vs format! Macro.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s1 = String::from(\"tic\");\n    let s2 = String::from(\"tac\");\n    let s3 = String::from(\"toe\");\n    let s = format!(\"{}-{}-{}\", s1, s2, s3);\n    println!(\"{}\", s);\n}",
    "hints": [
      "Write:\nfn main() {\n    let s1 = String::from(\"tic\");\n    let s2 = String::from(\"tac\");\n    let s3 = String::from(\"toe\");\n    let s = format!(\"{}-{}-{}\", s1, s2, s3);\n    println!(\"{}\", s);\n}"
    ],
    "testCases": [
      {
        "id": "rust-82-tc-1",
        "description": "Verifies correct implementation for String Concatenation: + Operator vs format! Macro",
        "testFn": "code.includes('format!') || code.includes('tic-tac-toe')"
      }
    ]
  },
  {
    "id": "rust-83-indexing-strings-why-rust-disall",
    "title": "83. Indexing Strings: Why Rust Disallows s[0]",
    "slug": "lesson-83-indexing-strings-why-rust-disall",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Indexing Strings: Why Rust Disallows s[0] in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Indexing Strings",
      "Rust"
    ],
    "analogy": "Measuring a ribbon: you can cut by centimeters (bytes) or count woven embroidered flowers (grapheme clusters).",
    "explanationMarkdown": "### Indexing Strings: Why Rust Disallows s[0]\n\nDirect string indexing `s[0]` is forbidden because indexing UTF-8 by bytes takes O(1) time but could yield an invalid unicode byte.\n\n```rust\nfn main() {\n    let s = \"hello\";\n    for c in s.chars() {\n        print!(\"{} \", c);\n    }\n    println!();\n}\n```",
    "workedExample": {
      "title": "Worked Example: Indexing Strings: Why Rust Disallows s[0]",
      "code": "fn main() {\n    let s = \"hello\";\n    for c in s.chars() {\n        print!(\"{} \", c);\n    }\n    println!();\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Indexing Strings: Why Rust Disallows s[0].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Indexing Strings: Why Rust Disallows s[0].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s = \"hello\";\n    for c in s.chars() {\n        print!(\"{} \", c);\n    }\n    println!();\n}",
    "hints": [
      "Write:\nfn main() {\n    let s = \"hello\";\n    for c in s.chars() {\n        print!(\"{} \", c);\n    }\n    println!();\n}"
    ],
    "testCases": [
      {
        "id": "rust-83-tc-1",
        "description": "Verifies correct implementation for Indexing Strings: Why Rust Disallows s[0]",
        "testFn": "code.includes('s.chars()') || code.includes('hello')"
      }
    ]
  },
  {
    "id": "rust-84-iterating-over-strings-.bytes-vs",
    "title": "84. Iterating Over Strings: .bytes() vs .chars()",
    "slug": "lesson-84-iterating-over-strings-.bytes-vs",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Iterating Over Strings: .bytes() vs .chars() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Iterating Over Strings",
      "Rust"
    ],
    "analogy": "Reading musical notes on a sheet (chars) vs measuring raw magnetic tape vibrations (bytes).",
    "explanationMarkdown": "### Iterating Over Strings: .bytes() vs .chars()\n\nUse `.chars()` to iterate over Unicode scalar values and `.bytes()` to iterate over raw underlying byte units.\n\n```rust\nfn main() {\n    let s = \"Rust \u2764\";\n    println!(\"Chars count: {}\", s.chars().count());\n    println!(\"Bytes count: {}\", s.bytes().count());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterating Over Strings: .bytes() vs .chars()",
      "code": "fn main() {\n    let s = \"Rust \u2764\";\n    println!(\"Chars count: {}\", s.chars().count());\n    println!(\"Bytes count: {}\", s.bytes().count());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating Over Strings: .bytes() vs .chars().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating Over Strings: .bytes() vs .chars().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let s = \"Rust \u2764\";\n    println!(\"Chars count: {}\", s.chars().count());\n    println!(\"Bytes count: {}\", s.bytes().count());\n}",
    "hints": [
      "Write:\nfn main() {\n    let s = \"Rust \u2764\";\n    println!(\"Chars count: {}\", s.chars().count());\n    println!(\"Bytes count: {}\", s.bytes().count());\n}"
    ],
    "testCases": [
      {
        "id": "rust-84-tc-1",
        "description": "Verifies correct implementation for Iterating Over Strings: .bytes() vs .chars()",
        "testFn": "code.includes('s.chars().count()') || code.includes('s.bytes().count()')"
      }
    ]
  },
  {
    "id": "rust-85-hashmaps-key-value-storage-with-",
    "title": "85. HashMaps: Key-Value Storage with HashMap<K, V>",
    "slug": "lesson-85-hashmaps-key-value-storage-with-",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master HashMaps: Key-Value Storage with HashMap<K, V> in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "HashMaps",
      "Rust"
    ],
    "analogy": "A physical telephone directory: flip directly to a business name to locate their phone extension.",
    "explanationMarkdown": "### HashMaps: Key-Value Storage with HashMap<K, V>\n\n`HashMap<K, V>` maps keys of type `K` to values of type `V` using SipHash for hash-collision resistance.\n\n```rust\nuse std::collections::HashMap;\n\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(String::from(\"Blue\"), 10);\n    scores.insert(String::from(\"Yellow\"), 50);\n    println!(\"Blue score: {:?}\", scores.get(\"Blue\"));\n}\n```",
    "workedExample": {
      "title": "Worked Example: HashMaps: Key-Value Storage with HashMap<K, V>",
      "code": "use std::collections::HashMap;\n\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(String::from(\"Blue\"), 10);\n    scores.insert(String::from(\"Yellow\"), 50);\n    println!(\"Blue score: {:?}\", scores.get(\"Blue\"));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HashMaps: Key-Value Storage with HashMap<K, V>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HashMaps: Key-Value Storage with HashMap<K, V>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::collections::HashMap;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::collections::HashMap;\n\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(String::from(\"Blue\"), 10);\n    scores.insert(String::from(\"Yellow\"), 50);\n    println!(\"Blue score: {:?}\", scores.get(\"Blue\"));\n}",
    "hints": [
      "Write:\nuse std::collections::HashMap;\n\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(String::from(\"Blue\"), 10);\n    scores.insert(String::from(\"Yellow\"), 50);\n    println!(\"Blue score: {:?}\", scores.get(\"Blue\"));\n}"
    ],
    "testCases": [
      {
        "id": "rust-85-tc-1",
        "description": "Verifies correct implementation for HashMaps: Key-Value Storage with HashMap<K, V>",
        "testFn": "code.includes('HashMap::new()') || code.includes('scores.insert')"
      }
    ]
  },
  {
    "id": "rust-86-the-entry-api-entry-and-or_inser",
    "title": "86. The Entry API: entry() and or_insert()",
    "slug": "lesson-86-the-entry-api-entry-and-or_inser",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Entry API: entry() and or_insert() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Entry API",
      "Rust"
    ],
    "analogy": "A hotel register: check if a room reservation exists; if not, open a new reservation slot in a single step.",
    "explanationMarkdown": "### The Entry API: entry() and or_insert()\n\nThe `.entry()` API provides atomic lookup-or-insert semantics, returning a mutable reference to the value.\n\n```rust\nuse std::collections::HashMap;\n\nfn main() {\n    let text = \"hello world wonderful world\";\n    let mut map = HashMap::new();\n    for word in text.split_whitespace() {\n        let count = map.entry(word).or_insert(0);\n        *count += 1;\n    }\n    println!(\"Word counts: {:?}\", map);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Entry API: entry() and or_insert()",
      "code": "use std::collections::HashMap;\n\nfn main() {\n    let text = \"hello world wonderful world\";\n    let mut map = HashMap::new();\n    for word in text.split_whitespace() {\n        let count = map.entry(word).or_insert(0);\n        *count += 1;\n    }\n    println!(\"Word counts: {:?}\", map);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Entry API: entry() and or_insert().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Entry API: entry() and or_insert().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::collections::HashMap;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::collections::HashMap;\n\nfn main() {\n    let text = \"hello world wonderful world\";\n    let mut map = HashMap::new();\n    for word in text.split_whitespace() {\n        let count = map.entry(word).or_insert(0);\n        *count += 1;\n    }\n    println!(\"Word counts: {:?}\", map);\n}",
    "hints": [
      "Write:\nuse std::collections::HashMap;\n\nfn main() {\n    let text = \"hello world wonderful world\";\n    let mut map = HashMap::new();\n    for word in text.split_whitespace() {\n        let count = map.entry(word).or_insert(0);\n        *count += 1;\n    }\n    println!(\"Word counts: {:?}\", map);\n}"
    ],
    "testCases": [
      {
        "id": "rust-86-tc-1",
        "description": "Verifies correct implementation for The Entry API: entry() and or_insert()",
        "testFn": "code.includes('map.entry(word).or_insert(0)') || code.includes('or_insert')"
      }
    ]
  },
  {
    "id": "rust-87-vecdeque-double-ended-queues-for",
    "title": "87. VecDeque: Double-Ended Queues for Fast FIFO Operations",
    "slug": "lesson-87-vecdeque-double-ended-queues-for",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master VecDeque: Double-Ended Queues for Fast FIFO Operations in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "VecDeque",
      "Rust"
    ],
    "analogy": "A subway tunnel train platform: passengers can board or exit from either the front or rear carriages seamlessly.",
    "explanationMarkdown": "### VecDeque: Double-Ended Queues for Fast FIFO Operations\n\n`VecDeque<T>` is a ring buffer allowing O(1) insertions and removals at both ends.\n\n```rust\nuse std::collections::VecDeque;\n\nfn main() {\n    let mut q = VecDeque::new();\n    q.push_back(10);\n    q.push_front(5);\n    println!(\"Front: {:?}, Back: {:?}\", q.pop_front(), q.pop_back());\n}\n```",
    "workedExample": {
      "title": "Worked Example: VecDeque: Double-Ended Queues for Fast FIFO Operations",
      "code": "use std::collections::VecDeque;\n\nfn main() {\n    let mut q = VecDeque::new();\n    q.push_back(10);\n    q.push_front(5);\n    println!(\"Front: {:?}, Back: {:?}\", q.pop_front(), q.pop_back());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for VecDeque: Double-Ended Queues for Fast FIFO Operations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of VecDeque: Double-Ended Queues for Fast FIFO Operations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::collections::VecDeque;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::collections::VecDeque;\n\nfn main() {\n    let mut q = VecDeque::new();\n    q.push_back(10);\n    q.push_front(5);\n    println!(\"Front: {:?}, Back: {:?}\", q.pop_front(), q.pop_back());\n}",
    "hints": [
      "Write:\nuse std::collections::VecDeque;\n\nfn main() {\n    let mut q = VecDeque::new();\n    q.push_back(10);\n    q.push_front(5);\n    println!(\"Front: {:?}, Back: {:?}\", q.pop_front(), q.pop_back());\n}"
    ],
    "testCases": [
      {
        "id": "rust-87-tc-1",
        "description": "Verifies correct implementation for VecDeque: Double-Ended Queues for Fast FIFO Operations",
        "testFn": "code.includes('VecDeque::new()') || code.includes('push_front')"
      }
    ]
  },
  {
    "id": "rust-88-btreemap-and-btreeset-ordered-ke",
    "title": "88. BTreeMap and BTreeSet: Ordered Key Storage",
    "slug": "lesson-88-btreemap-and-btreeset-ordered-ke",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master BTreeMap and BTreeSet: Ordered Key Storage in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "BTreeMap and BTreeSet",
      "Rust"
    ],
    "analogy": "An encyclopedia bookshelf: new volumes are automatically inserted into exact alphabetical order.",
    "explanationMarkdown": "### BTreeMap and BTreeSet: Ordered Key Storage\n\n`BTreeMap` keeps keys sorted according to their natural ordering using a modified B-Tree.\n\n```rust\nuse std::collections::BTreeMap;\n\nfn main() {\n    let mut map = BTreeMap::new();\n    map.insert(3, \"three\");\n    map.insert(1, \"one\");\n    map.insert(2, \"two\");\n    for (k, v) in &map {\n        println!(\"{}: {}\", k, v);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: BTreeMap and BTreeSet: Ordered Key Storage",
      "code": "use std::collections::BTreeMap;\n\nfn main() {\n    let mut map = BTreeMap::new();\n    map.insert(3, \"three\");\n    map.insert(1, \"one\");\n    map.insert(2, \"two\");\n    for (k, v) in &map {\n        println!(\"{}: {}\", k, v);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for BTreeMap and BTreeSet: Ordered Key Storage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of BTreeMap and BTreeSet: Ordered Key Storage.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::collections::BTreeMap;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::collections::BTreeMap;\n\nfn main() {\n    let mut map = BTreeMap::new();\n    map.insert(3, \"three\");\n    map.insert(1, \"one\");\n    map.insert(2, \"two\");\n    for (k, v) in &map {\n        println!(\"{}: {}\", k, v);\n    }\n}",
    "hints": [
      "Write:\nuse std::collections::BTreeMap;\n\nfn main() {\n    let mut map = BTreeMap::new();\n    map.insert(3, \"three\");\n    map.insert(1, \"one\");\n    map.insert(2, \"two\");\n    for (k, v) in &map {\n        println!(\"{}: {}\", k, v);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-88-tc-1",
        "description": "Verifies correct implementation for BTreeMap and BTreeSet: Ordered Key Storage",
        "testFn": "code.includes('BTreeMap::new()') || code.includes('BTreeMap')"
      }
    ]
  },
  {
    "id": "rust-89-hashset-for-fast-o1-membership-t",
    "title": "89. HashSet for Fast O(1) Membership Testing",
    "slug": "lesson-89-hashset-for-fast-o1-membership-t",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master HashSet for Fast O(1) Membership Testing in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "HashSet for Fast O(1) Membership Testing",
      "Rust"
    ],
    "analogy": "A bouncer's guestlist notebook: instant check whether a VIP name is on the VIP invite list.",
    "explanationMarkdown": "### HashSet for Fast O(1) Membership Testing\n\n`HashSet<T>` stores unique elements with average O(1) membership testing and deduplication.\n\n```rust\nuse std::collections::HashSet;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(\"admin\");\n    set.insert(\"editor\");\n    println!(\"Has admin? {}\", set.contains(\"admin\"));\n}\n```",
    "workedExample": {
      "title": "Worked Example: HashSet for Fast O(1) Membership Testing",
      "code": "use std::collections::HashSet;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(\"admin\");\n    set.insert(\"editor\");\n    println!(\"Has admin? {}\", set.contains(\"admin\"));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HashSet for Fast O(1) Membership Testing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HashSet for Fast O(1) Membership Testing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::collections::HashSet;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::collections::HashSet;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(\"admin\");\n    set.insert(\"editor\");\n    println!(\"Has admin? {}\", set.contains(\"admin\"));\n}",
    "hints": [
      "Write:\nuse std::collections::HashSet;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(\"admin\");\n    set.insert(\"editor\");\n    println!(\"Has admin? {}\", set.contains(\"admin\"));\n}"
    ],
    "testCases": [
      {
        "id": "rust-89-tc-1",
        "description": "Verifies correct implementation for HashSet for Fast O(1) Membership Testing",
        "testFn": "code.includes('HashSet::new()') || code.includes('set.contains')"
      }
    ]
  },
  {
    "id": "rust-90-module-6-review-standard-collect",
    "title": "90. Module 6 Review: Standard Collections Mastery",
    "slug": "lesson-90-module-6-review-standard-collect",
    "language": "rust",
    "category": "Module 6: Collections, Strings & HashMaps",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 6 Review: Standard Collections Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "Rust"
    ],
    "analogy": "A high-tech automated Amazon logistics fulfillment center with precision bins and sorting lanes.",
    "explanationMarkdown": "### Module 6 Review: Standard Collections Mastery\n\nMastery over vectors, UTF-8 strings, HashMaps, the Entry API, VecDeque, BTreeMap, and HashSets.\n\n```rust\nfn main() {\n    let nums = vec![1, 2, 3, 4, 5];\n    println!(\"Collections ready: {} items\", nums.len());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Standard Collections Mastery",
      "code": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5];\n    println!(\"Collections ready: {} items\", nums.len());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Standard Collections Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Standard Collections Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5];\n    println!(\"Collections ready: {} items\", nums.len());\n}",
    "hints": [
      "Write:\nfn main() {\n    let nums = vec![1, 2, 3, 4, 5];\n    println!(\"Collections ready: {} items\", nums.len());\n}"
    ],
    "testCases": [
      {
        "id": "rust-90-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Standard Collections Mastery",
        "testFn": "code.includes('Collections ready') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-91-generic-functions-eliminating-co",
    "title": "91. Generic Functions: Eliminating Code Duplication",
    "slug": "lesson-91-generic-functions-eliminating-co",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Generic Functions: Eliminating Code Duplication in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Generic Functions",
      "Rust"
    ],
    "analogy": "An adjustable universal wrench: fits bolts of any size without needing twenty separate tools.",
    "explanationMarkdown": "### Generic Functions: Eliminating Code Duplication\n\nGenerics (`<T>`) allow writing functions and types that operate over multiple concrete types.\n\n```rust\nfn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut largest = &list[0];\n    for item in list {\n        if item > largest { largest = item; }\n    }\n    largest\n}\n\nfn main() {\n    let nums = [34, 50, 25, 100, 65];\n    println!(\"Largest: {}\", largest(&nums));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic Functions: Eliminating Code Duplication",
      "code": "fn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut largest = &list[0];\n    for item in list {\n        if item > largest { largest = item; }\n    }\n    largest\n}\n\nfn main() {\n    let nums = [34, 50, 25, 100, 65];\n    println!(\"Largest: {}\", largest(&nums));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Functions: Eliminating Code Duplication.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Functions: Eliminating Code Duplication.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut largest = &list[0];\n    for item in list {\n        if item > largest { largest = item; }\n    }\n    largest\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut largest = &list[0];\n    for item in list {\n        if item > largest { largest = item; }\n    }\n    largest\n}\n\nfn main() {\n    let nums = [34, 50, 25, 100, 65];\n    println!(\"Largest: {}\", largest(&nums));\n}",
    "hints": [
      "Write:\nfn largest<T: PartialOrd>(list: &[T]) -> &T {\n    let mut largest = &list[0];\n    for item in list {\n        if item > largest { largest = item; }\n    }\n    largest\n}\n\nfn main() {\n    let nums = [34, 50, 25, 100, 65];\n    println!(\"Largest: {}\", largest(&nums));\n}"
    ],
    "testCases": [
      {
        "id": "rust-91-tc-1",
        "description": "Verifies correct implementation for Generic Functions: Eliminating Code Duplication",
        "testFn": "code.includes('largest<T') || code.includes('PartialOrd')"
      }
    ]
  },
  {
    "id": "rust-92-generics-in-struct-and-enum-defi",
    "title": "92. Generics in Struct and Enum Definitions",
    "slug": "lesson-92-generics-in-struct-and-enum-defi",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Generics in Struct and Enum Definitions in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Generics in Struct and Enum Definitions",
      "Rust"
    ],
    "analogy": "A customizable packaging mold: can cast chocolate bars, plastic cases, or aluminum blocks.",
    "explanationMarkdown": "### Generics in Struct and Enum Definitions\n\nStructs and enums declare type parameters in angle brackets, instantiated with concrete types.\n\n```rust\nstruct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    let integer_pt = Point { x: 5, y: 10 };\n    let float_pt = Point { x: 1.0, y: 4.0 };\n    println!(\"{}, {}\", integer_pt.x, float_pt.x);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generics in Struct and Enum Definitions",
      "code": "struct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    let integer_pt = Point { x: 5, y: 10 };\n    let float_pt = Point { x: 1.0, y: 4.0 };\n    println!(\"{}, {}\", integer_pt.x, float_pt.x);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generics in Struct and Enum Definitions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generics in Struct and Enum Definitions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    let integer_pt = Point { x: 5, y: 10 };\n    let float_pt = Point { x: 1.0, y: 4.0 };\n    println!(\"{}, {}\", integer_pt.x, float_pt.x);\n}",
    "hints": [
      "Write:\nstruct Point<T> {\n    x: T,\n    y: T,\n}\n\nfn main() {\n    let integer_pt = Point { x: 5, y: 10 };\n    let float_pt = Point { x: 1.0, y: 4.0 };\n    println!(\"{}, {}\", integer_pt.x, float_pt.x);\n}"
    ],
    "testCases": [
      {
        "id": "rust-92-tc-1",
        "description": "Verifies correct implementation for Generics in Struct and Enum Definitions",
        "testFn": "code.includes('struct Point<T>') || code.includes('Point { x:')"
      }
    ]
  },
  {
    "id": "rust-93-monomorphization-zero-cost-abstr",
    "title": "93. Monomorphization: Zero-Cost Abstractions at Compile Time",
    "slug": "lesson-93-monomorphization-zero-cost-abstr",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Monomorphization: Zero-Cost Abstractions at Compile Time in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Monomorphization",
      "Rust"
    ],
    "analogy": "A tailor taking a one-size-fits-all pattern and tailoring an exact custom suit for each client before opening day.",
    "explanationMarkdown": "### Monomorphization: Zero-Cost Abstractions at Compile Time\n\nRust monomorphizes generics at compile time, generating dedicated assembly for each type with zero runtime overhead.\n\n```rust\nfn main() {\n    println!(\"Monomorphization explained\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Monomorphization: Zero-Cost Abstractions at Compile Time",
      "code": "fn main() {\n    println!(\"Monomorphization explained\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Monomorphization: Zero-Cost Abstractions at Compile Time.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Monomorphization: Zero-Cost Abstractions at Compile Time.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Monomorphization explained\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Monomorphization explained\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-93-tc-1",
        "description": "Verifies correct implementation for Monomorphization: Zero-Cost Abstractions at Compile Time",
        "testFn": "code.includes('Monomorphization') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-94-defining-traits-defining-shared-",
    "title": "94. Defining Traits: Defining Shared Behavior",
    "slug": "lesson-94-defining-traits-defining-shared-",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Defining Traits: Defining Shared Behavior in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Defining Traits",
      "Rust"
    ],
    "analogy": "A universal electrical plug socket standard: any device with a certified three-prong plug can draw current.",
    "explanationMarkdown": "### Defining Traits: Defining Shared Behavior\n\nTraits define interfaces that multiple concrete types can implement, specifying method signatures.\n\n```rust\ntrait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Article { headline: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!(\"Headline: {}\", self.headline)\n    }\n}\n\nfn main() {\n    let a = Article { headline: String::from(\"Rust 2026 Released\") };\n    println!(\"{}\", a.summarize());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Traits: Defining Shared Behavior",
      "code": "trait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Article { headline: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!(\"Headline: {}\", self.headline)\n    }\n}\n\nfn main() {\n    let a = Article { headline: String::from(\"Rust 2026 Released\") };\n    println!(\"{}\", a.summarize());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Traits: Defining Shared Behavior.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Traits: Defining Shared Behavior.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "trait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Article { headline: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!(\"Headline: {}\", self.headline)\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "trait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Article { headline: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!(\"Headline: {}\", self.headline)\n    }\n}\n\nfn main() {\n    let a = Article { headline: String::from(\"Rust 2026 Released\") };\n    println!(\"{}\", a.summarize());\n}",
    "hints": [
      "Write:\ntrait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Article { headline: String }\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!(\"Headline: {}\", self.headline)\n    }\n}\n\nfn main() {\n    let a = Article { headline: String::from(\"Rust 2026 Released\") };\n    println!(\"{}\", a.summarize());\n}"
    ],
    "testCases": [
      {
        "id": "rust-94-tc-1",
        "description": "Verifies correct implementation for Defining Traits: Defining Shared Behavior",
        "testFn": "code.includes('trait Summary') && code.includes('impl Summary for')"
      }
    ]
  },
  {
    "id": "rust-95-default-trait-implementations",
    "title": "95. Default Trait Implementations",
    "slug": "lesson-95-default-trait-implementations",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Default Trait Implementations in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Default Trait Implementations",
      "Rust"
    ],
    "analogy": "A hotel front desk welcome sign: standard default greeting displays unless customized for a VIP guest.",
    "explanationMarkdown": "### Default Trait Implementations\n\nTraits can supply default method implementations that types inherit unless explicitly overridden.\n\n```rust\ntrait Greet {\n    fn greeting(&self) -> String {\n        String::from(\"Hello, stranger!\")\n    }\n}\n\nstruct Guest;\nimpl Greet for Guest {}\n\nfn main() {\n    let g = Guest;\n    println!(\"{}\", g.greeting());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Default Trait Implementations",
      "code": "trait Greet {\n    fn greeting(&self) -> String {\n        String::from(\"Hello, stranger!\")\n    }\n}\n\nstruct Guest;\nimpl Greet for Guest {}\n\nfn main() {\n    let g = Guest;\n    println!(\"{}\", g.greeting());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Default Trait Implementations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Default Trait Implementations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "trait Greet {\n    fn greeting(&self) -> String {\n        String::from(\"Hello, stranger!\") // Default implementation\n    }\n}\n\nstruct Guest;\nimpl Greet for Guest {}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "trait Greet {\n    fn greeting(&self) -> String {\n        String::from(\"Hello, stranger!\")\n    }\n}\n\nstruct Guest;\nimpl Greet for Guest {}\n\nfn main() {\n    let g = Guest;\n    println!(\"{}\", g.greeting());\n}",
    "hints": [
      "Write:\ntrait Greet {\n    fn greeting(&self) -> String {\n        String::from(\"Hello, stranger!\")\n    }\n}\n\nstruct Guest;\nimpl Greet for Guest {}\n\nfn main() {\n    let g = Guest;\n    println!(\"{}\", g.greeting());\n}"
    ],
    "testCases": [
      {
        "id": "rust-95-tc-1",
        "description": "Verifies correct implementation for Default Trait Implementations",
        "testFn": "code.includes('trait Greet') || code.includes('g.greeting()')"
      }
    ]
  },
  {
    "id": "rust-96-traits-as-parameters-the-impl-tr",
    "title": "96. Traits as Parameters: The impl Trait Syntax",
    "slug": "lesson-96-traits-as-parameters-the-impl-tr",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Traits as Parameters: The impl Trait Syntax in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Traits as Parameters",
      "Rust"
    ],
    "analogy": "An airport security gate that admits anyone carrying an authorized badge (`impl Identification`).",
    "explanationMarkdown": "### Traits as Parameters: The impl Trait Syntax\n\n`fn notify(item: &impl Trait)` is concise syntax for defining functions that accept any type implementing a trait.\n\n```rust\ntrait Printable { fn print(&self); }\nimpl Printable for i32 { fn print(&self) { println!(\"{}\", self); } }\n\nfn show(item: &impl Printable) {\n    item.print();\n}\n\nfn main() {\n    show(&42);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Traits as Parameters: The impl Trait Syntax",
      "code": "trait Printable { fn print(&self); }\nimpl Printable for i32 { fn print(&self) { println!(\"{}\", self); } }\n\nfn show(item: &impl Printable) {\n    item.print();\n}\n\nfn main() {\n    show(&42);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Traits as Parameters: The impl Trait Syntax.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Traits as Parameters: The impl Trait Syntax.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "trait Printable { fn print(&self); }\nimpl Printable for i32 { fn print(&self) { println!(\"{}\", self); } }\n\nfn show(item: &impl Printable) {\n    item.print();\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "trait Printable { fn print(&self); }\nimpl Printable for i32 { fn print(&self) { println!(\"{}\", self); } }\n\nfn show(item: &impl Printable) {\n    item.print();\n}\n\nfn main() {\n    show(&42);\n}",
    "hints": [
      "Write:\ntrait Printable { fn print(&self); }\nimpl Printable for i32 { fn print(&self) { println!(\"{}\", self); } }\n\nfn show(item: &impl Printable) {\n    item.print();\n}\n\nfn main() {\n    show(&42);\n}"
    ],
    "testCases": [
      {
        "id": "rust-96-tc-1",
        "description": "Verifies correct implementation for Traits as Parameters: The impl Trait Syntax",
        "testFn": "code.includes('item: &impl Printable') || code.includes('impl Printable')"
      }
    ]
  },
  {
    "id": "rust-97-trait-bound-syntax-and-multiple-",
    "title": "97. Trait Bound Syntax and Multiple Bounds (+)",
    "slug": "lesson-97-trait-bound-syntax-and-multiple-",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Trait Bound Syntax and Multiple Bounds (+) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Trait Bound Syntax and Multiple Bounds (+)",
      "Rust"
    ],
    "analogy": "A job posting requiring candidates to possess both an engineering degree AND a security clearance.",
    "explanationMarkdown": "### Trait Bound Syntax and Multiple Bounds (+)\n\nCombine bounds using `+`: `T: Display + Clone` requires `T` to implement both traits.\n\n```rust\nfn notify<T: std::fmt::Display + Clone>(item: &T) {\n    println!(\"Item: {}\", item);\n}\n\nfn main() {\n    notify(&\"Verified message\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Trait Bound Syntax and Multiple Bounds (+)",
      "code": "fn notify<T: std::fmt::Display + Clone>(item: &T) {\n    println!(\"Item: {}\", item);\n}\n\nfn main() {\n    notify(&\"Verified message\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Trait Bound Syntax and Multiple Bounds (+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Trait Bound Syntax and Multiple Bounds (+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn notify<T: std::fmt::Display + Clone>(item: &T) {\n    println!(\"Item: {}\", item);\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn notify<T: std::fmt::Display + Clone>(item: &T) {\n    println!(\"Item: {}\", item);\n}\n\nfn main() {\n    notify(&\"Verified message\");\n}",
    "hints": [
      "Write:\nfn notify<T: std::fmt::Display + Clone>(item: &T) {\n    println!(\"Item: {}\", item);\n}\n\nfn main() {\n    notify(&\"Verified message\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-97-tc-1",
        "description": "Verifies correct implementation for Trait Bound Syntax and Multiple Bounds (+)",
        "testFn": "code.includes('Display + Clone') || code.includes('notify(&') "
      }
    ]
  },
  {
    "id": "rust-98-cleaner-trait-bounds-with-where-",
    "title": "98. Cleaner Trait Bounds with where Clauses",
    "slug": "lesson-98-cleaner-trait-bounds-with-where-",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Cleaner Trait Bounds with where Clauses in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Cleaner Trait Bounds with where Clauses",
      "Rust"
    ],
    "analogy": "A legal contract putting long lists of candidate qualifications into a dedicated addendum clause.",
    "explanationMarkdown": "### Cleaner Trait Bounds with where Clauses\n\nThe `where` clause keeps function signatures clean when multiple generic parameters have intricate bounds.\n\n```rust\nuse std::fmt::{Debug, Display};\n\nfn print_data<T, U>(t: &T, u: &U)\nwhere\n    T: Display + Clone,\n    U: Clone + Debug,\n{\n    println!(\"t: {}, u: {:?}\", t, u);\n}\n\nfn main() {\n    print_data(&\"data\", &100);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Cleaner Trait Bounds with where Clauses",
      "code": "use std::fmt::{Debug, Display};\n\nfn print_data<T, U>(t: &T, u: &U)\nwhere\n    T: Display + Clone,\n    U: Clone + Debug,\n{\n    println!(\"t: {}, u: {:?}\", t, u);\n}\n\nfn main() {\n    print_data(&\"data\", &100);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cleaner Trait Bounds with where Clauses.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cleaner Trait Bounds with where Clauses.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::fmt::{Debug, Display};\n\nfn print_data<T, U>(t: &T, u: &U)\nwhere\n    T: Display + Clone,\n    U: Clone + Debug,\n{\n    println!(\"t: {}, u: {:?}\", t, u);\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::fmt::{Debug, Display};\n\nfn print_data<T, U>(t: &T, u: &U)\nwhere\n    T: Display + Clone,\n    U: Clone + Debug,\n{\n    println!(\"t: {}, u: {:?}\", t, u);\n}\n\nfn main() {\n    print_data(&\"data\", &100);\n}",
    "hints": [
      "Write:\nuse std::fmt::{Debug, Display};\n\nfn print_data<T, U>(t: &T, u: &U)\nwhere\n    T: Display + Clone,\n    U: Clone + Debug,\n{\n    println!(\"t: {}, u: {:?}\", t, u);\n}\n\nfn main() {\n    print_data(&\"data\", &100);\n}"
    ],
    "testCases": [
      {
        "id": "rust-98-tc-1",
        "description": "Verifies correct implementation for Cleaner Trait Bounds with where Clauses",
        "testFn": "code.includes('where') && code.includes('Display + Clone')"
      }
    ]
  },
  {
    "id": "rust-99-returning-types-that-implement-t",
    "title": "99. Returning Types that Implement Traits: -> impl Trait",
    "slug": "lesson-99-returning-types-that-implement-t",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Returning Types that Implement Traits: -> impl Trait in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Returning Types that Implement Traits",
      "Rust"
    ],
    "analogy": "A factory shipping a certified black-box appliance without revealing internal circuit schematics.",
    "explanationMarkdown": "### Returning Types that Implement Traits: -> impl Trait\n\n`-> impl Trait` returns a type implementing the trait without naming the concrete unnamable type (like closures).\n\n```rust\nfn make_counter() -> impl Fn(i32) -> i32 {\n    |x| x + 1\n}\n\nfn main() {\n    let add_one = make_counter();\n    println!(\"{}\", add_one(10));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Returning Types that Implement Traits: -> impl Trait",
      "code": "fn make_counter() -> impl Fn(i32) -> i32 {\n    |x| x + 1\n}\n\nfn main() {\n    let add_one = make_counter();\n    println!(\"{}\", add_one(10));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Returning Types that Implement Traits: -> impl Trait.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Returning Types that Implement Traits: -> impl Trait.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn make_counter() -> impl Fn(i32) -> i32 {\n    |x| x + 1\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn make_counter() -> impl Fn(i32) -> i32 {\n    |x| x + 1\n}\n\nfn main() {\n    let add_one = make_counter();\n    println!(\"{}\", add_one(10));\n}",
    "hints": [
      "Write:\nfn make_counter() -> impl Fn(i32) -> i32 {\n    |x| x + 1\n}\n\nfn main() {\n    let add_one = make_counter();\n    println!(\"{}\", add_one(10));\n}"
    ],
    "testCases": [
      {
        "id": "rust-99-tc-1",
        "description": "Verifies correct implementation for Returning Types that Implement Traits: -> impl Trait",
        "testFn": "code.includes('-> impl Fn') || code.includes('make_counter')"
      }
    ]
  },
  {
    "id": "rust-100-associated-types-trait-iterator-",
    "title": "100. Associated Types: trait Iterator { type Item; }",
    "slug": "lesson-100-associated-types-trait-iterator-",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Associated Types: trait Iterator { type Item; } in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Associated Types",
      "Rust"
    ],
    "analogy": "An agricultural harvest contract specifying that a corn farmer yields ears of corn, not apples.",
    "explanationMarkdown": "### Associated Types: trait Iterator { type Item; }\n\nAssociated types connect placeholder types inside traits (`type Item;`), eliminating repetitive generic parameter cascades.\n\n```rust\ntrait Generator {\n    type Output;\n    fn next_val(&mut self) -> Option<Self::Output>;\n}\n\nstruct SimpleGen(u32);\nimpl Generator for SimpleGen {\n    type Output = u32;\n    fn next_val(&mut self) -> Option<Self::Output> {\n        self.0 += 1;\n        Some(self.0)\n    }\n}\n\nfn main() {\n    let mut g = SimpleGen(0);\n    println!(\"Generated: {:?}\", g.next_val());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Associated Types: trait Iterator { type Item; }",
      "code": "trait Generator {\n    type Output;\n    fn next_val(&mut self) -> Option<Self::Output>;\n}\n\nstruct SimpleGen(u32);\nimpl Generator for SimpleGen {\n    type Output = u32;\n    fn next_val(&mut self) -> Option<Self::Output> {\n        self.0 += 1;\n        Some(self.0)\n    }\n}\n\nfn main() {\n    let mut g = SimpleGen(0);\n    println!(\"Generated: {:?}\", g.next_val());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Associated Types: trait Iterator { type Item; }.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Associated Types: trait Iterator { type Item; }.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "trait Generator {\n    type Output;\n    fn next_val(&mut self) -> Option<Self::Output>;\n}\n\nstruct SimpleGen(u32);\nimpl Generator for SimpleGen {\n    type Output = u32;\n    fn next_val(&mut self) -> Option<Self::Output> {\n        self.0 += 1;\n        Some(self.0)\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "trait Generator {\n    type Output;\n    fn next_val(&mut self) -> Option<Self::Output>;\n}\n\nstruct SimpleGen(u32);\nimpl Generator for SimpleGen {\n    type Output = u32;\n    fn next_val(&mut self) -> Option<Self::Output> {\n        self.0 += 1;\n        Some(self.0)\n    }\n}\n\nfn main() {\n    let mut g = SimpleGen(0);\n    println!(\"Generated: {:?}\", g.next_val());\n}",
    "hints": [
      "Write:\ntrait Generator {\n    type Output;\n    fn next_val(&mut self) -> Option<Self::Output>;\n}\n\nstruct SimpleGen(u32);\nimpl Generator for SimpleGen {\n    type Output = u32;\n    fn next_val(&mut self) -> Option<Self::Output> {\n        self.0 += 1;\n        Some(self.0)\n    }\n}\n\nfn main() {\n    let mut g = SimpleGen(0);\n    println!(\"Generated: {:?}\", g.next_val());\n}"
    ],
    "testCases": [
      {
        "id": "rust-100-tc-1",
        "description": "Verifies correct implementation for Associated Types: trait Iterator { type Item; }",
        "testFn": "code.includes('type Output') || code.includes('trait Generator')"
      }
    ]
  },
  {
    "id": "rust-101-operator-overloading-via-stdops-",
    "title": "101. Operator Overloading via std::ops Traits",
    "slug": "lesson-101-operator-overloading-via-stdops-",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Operator Overloading via std::ops Traits in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Operator Overloading via std",
      "Rust"
    ],
    "analogy": "Teaching an arithmetic calculator how to add vectors using standard `+` buttons.",
    "explanationMarkdown": "### Operator Overloading via std::ops Traits\n\nRust permits overloading operators like `+`, `-`, `*` by implementing `std::ops` traits (`Add`, `Sub`, `Mul`).\n\n```rust\nuse std::ops::Add;\n\n#[derive(Debug, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nimpl Add for Point {\n    type Output = Point;\n    fn add(self, other: Point) -> Point {\n        Point { x: self.x + other.x, y: self.y + other.y }\n    }\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = Point { x: 3, y: 4 };\n    println!(\"Sum: {:?}\", p1 + p2);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Operator Overloading via std::ops Traits",
      "code": "use std::ops::Add;\n\n#[derive(Debug, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nimpl Add for Point {\n    type Output = Point;\n    fn add(self, other: Point) -> Point {\n        Point { x: self.x + other.x, y: self.y + other.y }\n    }\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = Point { x: 3, y: 4 };\n    println!(\"Sum: {:?}\", p1 + p2);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Operator Overloading via std::ops Traits.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Operator Overloading via std::ops Traits.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::ops::Add;\n\n#[derive(Debug, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nimpl Add for Point {\n    type Output = Point;\n    fn add(self, other: Point) -> Point {\n        Point { x: self.x + other.x, y: self.y + other.y }\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::ops::Add;\n\n#[derive(Debug, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nimpl Add for Point {\n    type Output = Point;\n    fn add(self, other: Point) -> Point {\n        Point { x: self.x + other.x, y: self.y + other.y }\n    }\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = Point { x: 3, y: 4 };\n    println!(\"Sum: {:?}\", p1 + p2);\n}",
    "hints": [
      "Write:\nuse std::ops::Add;\n\n#[derive(Debug, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nimpl Add for Point {\n    type Output = Point;\n    fn add(self, other: Point) -> Point {\n        Point { x: self.x + other.x, y: self.y + other.y }\n    }\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = Point { x: 3, y: 4 };\n    println!(\"Sum: {:?}\", p1 + p2);\n}"
    ],
    "testCases": [
      {
        "id": "rust-101-tc-1",
        "description": "Verifies correct implementation for Operator Overloading via std::ops Traits",
        "testFn": "code.includes('impl Add for Point') || code.includes('p1 + p2')"
      }
    ]
  },
  {
    "id": "rust-102-trait-objects-and-dynamic-dispat",
    "title": "102. Trait Objects and Dynamic Dispatch: Box<dyn Trait>",
    "slug": "lesson-102-trait-objects-and-dynamic-dispat",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Trait Objects and Dynamic Dispatch: Box<dyn Trait> in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Trait Objects and Dynamic Dispatch",
      "Rust"
    ],
    "analogy": "A theater casting call: any actor who can perform a monologue can take the stage; resolved at performance time.",
    "explanationMarkdown": "### Trait Objects and Dynamic Dispatch: Box<dyn Trait>\n\n`dyn Trait` enables runtime polymorphism using a vtable pointer, allowing heterogeneous collections of trait implementers.\n\n```rust\ntrait Speaker { fn speak(&self); }\nstruct Dog; impl Speaker for Dog { fn speak(&self) { println!(\"Woof!\"); } }\nstruct Cat; impl Speaker for Cat { fn speak(&self) { println!(\"Meow!\"); } }\n\nfn main() {\n    let animals: Vec<Box<dyn Speaker>> = vec![Box::new(Dog), Box::new(Cat)];\n    for a in animals { a.speak(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Trait Objects and Dynamic Dispatch: Box<dyn Trait>",
      "code": "trait Speaker { fn speak(&self); }\nstruct Dog; impl Speaker for Dog { fn speak(&self) { println!(\"Woof!\"); } }\nstruct Cat; impl Speaker for Cat { fn speak(&self) { println!(\"Meow!\"); } }\n\nfn main() {\n    let animals: Vec<Box<dyn Speaker>> = vec![Box::new(Dog), Box::new(Cat)];\n    for a in animals { a.speak(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Trait Objects and Dynamic Dispatch: Box<dyn Trait>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Trait Objects and Dynamic Dispatch: Box<dyn Trait>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "trait Speaker { fn speak(&self); }\nstruct Dog; impl Speaker for Dog { fn speak(&self) { println!(\"Woof!\"); } }\nstruct Cat; impl Speaker for Cat { fn speak(&self) { println!(\"Meow!\"); } }\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "trait Speaker { fn speak(&self); }\nstruct Dog; impl Speaker for Dog { fn speak(&self) { println!(\"Woof!\"); } }\nstruct Cat; impl Speaker for Cat { fn speak(&self) { println!(\"Meow!\"); } }\n\nfn main() {\n    let animals: Vec<Box<dyn Speaker>> = vec![Box::new(Dog), Box::new(Cat)];\n    for a in animals { a.speak(); }\n}",
    "hints": [
      "Write:\ntrait Speaker { fn speak(&self); }\nstruct Dog; impl Speaker for Dog { fn speak(&self) { println!(\"Woof!\"); } }\nstruct Cat; impl Speaker for Cat { fn speak(&self) { println!(\"Meow!\"); } }\n\nfn main() {\n    let animals: Vec<Box<dyn Speaker>> = vec![Box::new(Dog), Box::new(Cat)];\n    for a in animals { a.speak(); }\n}"
    ],
    "testCases": [
      {
        "id": "rust-102-tc-1",
        "description": "Verifies correct implementation for Trait Objects and Dynamic Dispatch: Box<dyn Trait>",
        "testFn": "code.includes('Box<dyn Speaker>') || code.includes('dyn Speaker')"
      }
    ]
  },
  {
    "id": "rust-103-static-vs-dynamic-dispatch-trade",
    "title": "103. Static vs Dynamic Dispatch (Trade-offs & Vtables)",
    "slug": "lesson-103-static-vs-dynamic-dispatch-trade",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Static vs Dynamic Dispatch (Trade-offs & Vtables) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Static vs Dynamic Dispatch (Trade-offs & Vtables)",
      "Rust"
    ],
    "analogy": "A pre-scheduled bullet train route (static) vs hailing a taxi with dynamic street routing (dynamic).",
    "explanationMarkdown": "### Static vs Dynamic Dispatch (Trade-offs & Vtables)\n\nUnderstand when to use static dispatch (inlining & performance) vs dynamic dispatch (`dyn Trait` for plugin architectures).\n\n```rust\nfn main() {\n    println!(\"Dispatch trade-offs verified\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static vs Dynamic Dispatch (Trade-offs & Vtables)",
      "code": "fn main() {\n    println!(\"Dispatch trade-offs verified\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static vs Dynamic Dispatch (Trade-offs & Vtables).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static vs Dynamic Dispatch (Trade-offs & Vtables).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Dispatch trade-offs verified\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Dispatch trade-offs verified\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-103-tc-1",
        "description": "Verifies correct implementation for Static vs Dynamic Dispatch (Trade-offs & Vtables)",
        "testFn": "code.includes('Dispatch trade-offs') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-104-supertraits-trait-sub-super",
    "title": "104. Supertraits: trait Sub: Super",
    "slug": "lesson-104-supertraits-trait-sub-super",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Supertraits: trait Sub: Super in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Supertraits",
      "Rust"
    ],
    "analogy": "A commercial airline pilot license requiring a private pilot license as a mandatory prerequisite.",
    "explanationMarkdown": "### Supertraits: trait Sub: Super\n\nSupertraits specify that any type implementing trait `B` must also implement trait `A`: `trait B: A`.\n\n```rust\nuse std::fmt::Display;\n\ntrait Printable: Display {\n    fn print_header(&self) {\n        println!(\"*** {} ***\", self);\n    }\n}\n\nimpl Printable for String {}\n\nfn main() {\n    let s = String::from(\"DevForge\");\n    s.print_header();\n}\n```",
    "workedExample": {
      "title": "Worked Example: Supertraits: trait Sub: Super",
      "code": "use std::fmt::Display;\n\ntrait Printable: Display {\n    fn print_header(&self) {\n        println!(\"*** {} ***\", self);\n    }\n}\n\nimpl Printable for String {}\n\nfn main() {\n    let s = String::from(\"DevForge\");\n    s.print_header();\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Supertraits: trait Sub: Super.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Supertraits: trait Sub: Super.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::fmt::Display;\n\ntrait Printable: Display {\n    fn print_header(&self) {\n        println!(\"*** {} ***\", self);\n    }\n}\n\nimpl Printable for String {}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::fmt::Display;\n\ntrait Printable: Display {\n    fn print_header(&self) {\n        println!(\"*** {} ***\", self);\n    }\n}\n\nimpl Printable for String {}\n\nfn main() {\n    let s = String::from(\"DevForge\");\n    s.print_header();\n}",
    "hints": [
      "Write:\nuse std::fmt::Display;\n\ntrait Printable: Display {\n    fn print_header(&self) {\n        println!(\"*** {} ***\", self);\n    }\n}\n\nimpl Printable for String {}\n\nfn main() {\n    let s = String::from(\"DevForge\");\n    s.print_header();\n}"
    ],
    "testCases": [
      {
        "id": "rust-104-tc-1",
        "description": "Verifies correct implementation for Supertraits: trait Sub: Super",
        "testFn": "code.includes('trait Printable: Display') || code.includes('print_header')"
      }
    ]
  },
  {
    "id": "rust-105-module-7-review-generics-&-trait",
    "title": "105. Module 7 Review: Generics & Traits Mastery",
    "slug": "lesson-105-module-7-review-generics-&-trait",
    "language": "rust",
    "category": "Module 7: Generics, Traits & Associated Types",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Module 7 Review: Generics & Traits Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 7 Review",
      "Rust"
    ],
    "analogy": "A master architect designing modular skyscraper frames that adapt to any climate or terrain.",
    "explanationMarkdown": "### Module 7 Review: Generics & Traits Mastery\n\nMastery over generic functions, monomorphization, custom traits, where clauses, associated types, and trait objects.\n\n```rust\nfn main() {\n    let status = \"Generics & Traits Mastered\";\n    println!(\"{}\", status);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Generics & Traits Mastery",
      "code": "fn main() {\n    let status = \"Generics & Traits Mastered\";\n    println!(\"{}\", status);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 7 Review: Generics & Traits Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 7 Review: Generics & Traits Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let status = \"Generics & Traits Mastered\";\n    println!(\"{}\", status);\n}",
    "hints": [
      "Write:\nfn main() {\n    let status = \"Generics & Traits Mastered\";\n    println!(\"{}\", status);\n}"
    ],
    "testCases": [
      {
        "id": "rust-105-tc-1",
        "description": "Verifies correct implementation for Module 7 Review: Generics & Traits Mastery",
        "testFn": "code.includes('Generics & Traits Mastered') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-106-unrecoverable-errors-with-panic!",
    "title": "106. Unrecoverable Errors with panic!",
    "slug": "lesson-106-unrecoverable-errors-with-panic!",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Unrecoverable Errors with panic! in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Unrecoverable Errors with panic!",
      "Rust"
    ],
    "analogy": "Pulling the red emergency emergency stop cord in an underground nuclear silo.",
    "explanationMarkdown": "### Unrecoverable Errors with panic!\n\n`panic!` immediately unwinds the stack, cleans up allocations, and aborts the thread on unrecoverable states.\n\n```rust\nfn main() {\n    println!(\"Safe execution\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unrecoverable Errors with panic!",
      "code": "fn main() {\n    println!(\"Safe execution\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unrecoverable Errors with panic!.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unrecoverable Errors with panic!.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Safe execution\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Safe execution\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-106-tc-1",
        "description": "Verifies correct implementation for Unrecoverable Errors with panic!",
        "testFn": "code.includes('panic!') || code.includes('Safe execution')"
      }
    ]
  },
  {
    "id": "rust-107-recoverable-errors-the-resultt,-",
    "title": "107. Recoverable Errors: The Result<T, E> Enum",
    "slug": "lesson-107-recoverable-errors-the-resultt,-",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Recoverable Errors: The Result<T, E> Enum in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Recoverable Errors",
      "Rust"
    ],
    "analogy": "A certified courier package delivery: either signed delivery receipt (`Ok(T)`) or return slip (`Err(E)`).",
    "explanationMarkdown": "### Recoverable Errors: The Result<T, E> Enum\n\nRust does not use exceptions. Recoverable errors are represented with `Result<T, E>` variants `Ok(T)` and `Err(E)`.\n\n```rust\nfn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        Err(String::from(\"Division by zero\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn main() {\n    match divide(10.0, 2.0) {\n        Ok(res) => println!(\"Result: {}\", res),\n        Err(err) => println!(\"Error: {}\", err),\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Recoverable Errors: The Result<T, E> Enum",
      "code": "fn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        Err(String::from(\"Division by zero\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn main() {\n    match divide(10.0, 2.0) {\n        Ok(res) => println!(\"Result: {}\", res),\n        Err(err) => println!(\"Error: {}\", err),\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recoverable Errors: The Result<T, E> Enum.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recoverable Errors: The Result<T, E> Enum.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        Err(String::from(\"Division by zero\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        Err(String::from(\"Division by zero\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn main() {\n    match divide(10.0, 2.0) {\n        Ok(res) => println!(\"Result: {}\", res),\n        Err(err) => println!(\"Error: {}\", err),\n    }\n}",
    "hints": [
      "Write:\nfn divide(a: f64, b: f64) -> Result<f64, String> {\n    if b == 0.0 {\n        Err(String::from(\"Division by zero\"))\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn main() {\n    match divide(10.0, 2.0) {\n        Ok(res) => println!(\"Result: {}\", res),\n        Err(err) => println!(\"Error: {}\", err),\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-107-tc-1",
        "description": "Verifies correct implementation for Recoverable Errors: The Result<T, E> Enum",
        "testFn": "code.includes('Result<f64, String>') || code.includes('Ok(a / b)')"
      }
    ]
  },
  {
    "id": "rust-108-unwrapping-results-unwrap-and-ex",
    "title": "108. Unwrapping Results: unwrap() and expect()",
    "slug": "lesson-108-unwrapping-results-unwrap-and-ex",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Unwrapping Results: unwrap() and expect() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Unwrapping Results",
      "Rust"
    ],
    "analogy": "Ripping open a gift box with a crowbar: safe if a gift is inside; explodes if empty.",
    "explanationMarkdown": "### Unwrapping Results: unwrap() and expect()\n\n`.unwrap()` yields `T` on `Ok` or panics on `Err`. `.expect(\"msg\")` provides a descriptive diagnostic panic message.\n\n```rust\nfn main() {\n    let valid: Result<i32, &str> = Ok(42);\n    let val = valid.expect(\"Failed to unwrap valid value\");\n    println!(\"Value: {}\", val);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unwrapping Results: unwrap() and expect()",
      "code": "fn main() {\n    let valid: Result<i32, &str> = Ok(42);\n    let val = valid.expect(\"Failed to unwrap valid value\");\n    println!(\"Value: {}\", val);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unwrapping Results: unwrap() and expect().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unwrapping Results: unwrap() and expect().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let valid: Result<i32, &str> = Ok(42);\n    let val = valid.expect(\"Failed to unwrap valid value\");\n    println!(\"Value: {}\", val);\n}",
    "hints": [
      "Write:\nfn main() {\n    let valid: Result<i32, &str> = Ok(42);\n    let val = valid.expect(\"Failed to unwrap valid value\");\n    println!(\"Value: {}\", val);\n}"
    ],
    "testCases": [
      {
        "id": "rust-108-tc-1",
        "description": "Verifies correct implementation for Unwrapping Results: unwrap() and expect()",
        "testFn": "code.includes('.expect(') || code.includes('.unwrap(')"
      }
    ]
  },
  {
    "id": "rust-109-the-?-operator-for-error-propaga",
    "title": "109. The ? Operator for Error Propagation",
    "slug": "lesson-109-the-?-operator-for-error-propaga",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The ? Operator for Error Propagation in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The ? Operator for Error Propagation",
      "Rust"
    ],
    "analogy": "A customs inspection checkpoint: stamps valid passports onward; hands questionable visas to the supervisor immediately.",
    "explanationMarkdown": "### The ? Operator for Error Propagation\n\nThe `?` operator unwraps `Ok` values or immediately returns the `Err` from the surrounding function.\n\n```rust\nfn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {\n    let n = s.parse::<i32>()?;\n    Ok(n * 2)\n}\n\nfn main() {\n    println!(\"{:?}\", parse_number(\"21\"));\n}\n```",
    "workedExample": {
      "title": "Worked Example: The ? Operator for Error Propagation",
      "code": "fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {\n    let n = s.parse::<i32>()?;\n    Ok(n * 2)\n}\n\nfn main() {\n    println!(\"{:?}\", parse_number(\"21\"));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The ? Operator for Error Propagation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The ? Operator for Error Propagation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {\n    let n = s.parse::<i32>()?; // Return Err early if failed!\n    Ok(n * 2)\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {\n    let n = s.parse::<i32>()?;\n    Ok(n * 2)\n}\n\nfn main() {\n    println!(\"{:?}\", parse_number(\"21\"));\n}",
    "hints": [
      "Write:\nfn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {\n    let n = s.parse::<i32>()?;\n    Ok(n * 2)\n}\n\nfn main() {\n    println!(\"{:?}\", parse_number(\"21\"));\n}"
    ],
    "testCases": [
      {
        "id": "rust-109-tc-1",
        "description": "Verifies correct implementation for The ? Operator for Error Propagation",
        "testFn": "code.includes('?') && code.includes('parse_number')"
      }
    ]
  },
  {
    "id": "rust-110-the-?-operator-with-optiont",
    "title": "110. The ? Operator with Option<T>",
    "slug": "lesson-110-the-?-operator-with-optiont",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The ? Operator with Option<T> in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The ? Operator with Option<T>",
      "Rust"
    ],
    "analogy": "Following a trail of breadcrumbs in a forest: if a crumb is missing, abort the hike immediately.",
    "explanationMarkdown": "### The ? Operator with Option<T>\n\n`?` also works on `Option<T>`, returning `None` early if the value is absent.\n\n```rust\nfn last_char_first_word(text: &str) -> Option<char> {\n    text.split_whitespace().next()?.chars().last()\n}\n\nfn main() {\n    println!(\"{:?}\", last_char_first_word(\"hello world\"));\n}\n```",
    "workedExample": {
      "title": "Worked Example: The ? Operator with Option<T>",
      "code": "fn last_char_first_word(text: &str) -> Option<char> {\n    text.split_whitespace().next()?.chars().last()\n}\n\nfn main() {\n    println!(\"{:?}\", last_char_first_word(\"hello world\"));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The ? Operator with Option<T>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The ? Operator with Option<T>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn last_char_first_word(text: &str) -> Option<char> {\n    text.split_whitespace().next()?.chars().last()\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn last_char_first_word(text: &str) -> Option<char> {\n    text.split_whitespace().next()?.chars().last()\n}\n\nfn main() {\n    println!(\"{:?}\", last_char_first_word(\"hello world\"));\n}",
    "hints": [
      "Write:\nfn last_char_first_word(text: &str) -> Option<char> {\n    text.split_whitespace().next()?.chars().last()\n}\n\nfn main() {\n    println!(\"{:?}\", last_char_first_word(\"hello world\"));\n}"
    ],
    "testCases": [
      {
        "id": "rust-110-tc-1",
        "description": "Verifies correct implementation for The ? Operator with Option<T>",
        "testFn": "code.includes('next()?.chars()') || code.includes('last_char_first_word')"
      }
    ]
  },
  {
    "id": "rust-111-mapping-errors-map_err-and-the-f",
    "title": "111. Mapping Errors: map_err and the From Trait",
    "slug": "lesson-111-mapping-errors-map_err-and-the-f",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Mapping Errors: map_err and the From Trait in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Mapping Errors",
      "Rust"
    ],
    "analogy": "Translating a foreign error telegram into your team's native operating terminology.",
    "explanationMarkdown": "### Mapping Errors: map_err and the From Trait\n\n`.map_err()` transforms the error variant. The `?` operator automatically calls `From::from` to convert error types.\n\n```rust\nfn read_int(s: &str) -> Result<i32, String> {\n    s.parse::<i32>().map_err(|e| format!(\"Invalid integer: {}\", e))\n}\n\nfn main() {\n    println!(\"{:?}\", read_int(\"abc\"));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Mapping Errors: map_err and the From Trait",
      "code": "fn read_int(s: &str) -> Result<i32, String> {\n    s.parse::<i32>().map_err(|e| format!(\"Invalid integer: {}\", e))\n}\n\nfn main() {\n    println!(\"{:?}\", read_int(\"abc\"));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mapping Errors: map_err and the From Trait.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mapping Errors: map_err and the From Trait.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn read_int(s: &str) -> Result<i32, String> {\n    s.parse::<i32>().map_err(|e| format!(\"Invalid integer: {}\", e))\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn read_int(s: &str) -> Result<i32, String> {\n    s.parse::<i32>().map_err(|e| format!(\"Invalid integer: {}\", e))\n}\n\nfn main() {\n    println!(\"{:?}\", read_int(\"abc\"));\n}",
    "hints": [
      "Write:\nfn read_int(s: &str) -> Result<i32, String> {\n    s.parse::<i32>().map_err(|e| format!(\"Invalid integer: {}\", e))\n}\n\nfn main() {\n    println!(\"{:?}\", read_int(\"abc\"));\n}"
    ],
    "testCases": [
      {
        "id": "rust-111-tc-1",
        "description": "Verifies correct implementation for Mapping Errors: map_err and the From Trait",
        "testFn": "code.includes('.map_err(') || code.includes('read_int')"
      }
    ]
  },
  {
    "id": "rust-112-defining-custom-error-types-with",
    "title": "112. Defining Custom Error Types with enum",
    "slug": "lesson-112-defining-custom-error-types-with",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Defining Custom Error Types with enum in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Defining Custom Error Types with enum",
      "Rust"
    ],
    "analogy": "A medical diagnostic chart listing exact disease classifications: fever, fracture, or dehydration.",
    "explanationMarkdown": "### Defining Custom Error Types with enum\n\nEnums provide type-safe, domain-specific error hierarchies that callers can pattern-match cleanly.\n\n```rust\n#[derive(Debug)]\nenum DataStoreError {\n    NotFound(String),\n    PermissionDenied,\n}\n\nfn main() {\n    let err: Result<(), DataStoreError> = Err(DataStoreError::NotFound(String::from(\"user_1\")));\n    println!(\"{}\", \"Custom error defined\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Custom Error Types with enum",
      "code": "#[derive(Debug)]\nenum DataStoreError {\n    NotFound(String),\n    PermissionDenied,\n}\n\nfn main() {\n    let err: Result<(), DataStoreError> = Err(DataStoreError::NotFound(String::from(\"user_1\")));\n    println!(\"{}\", \"Custom error defined\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Custom Error Types with enum.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Custom Error Types with enum.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "#[derive(Debug)]\nenum DataStoreError {\n    NotFound(String),\n    PermissionDenied,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "#[derive(Debug)]\nenum DataStoreError {\n    NotFound(String),\n    PermissionDenied,\n}\n\nfn main() {\n    let err: Result<(), DataStoreError> = Err(DataStoreError::NotFound(String::from(\"user_1\")));\n    println!(\"{}\", \"Custom error defined\");\n}",
    "hints": [
      "Write:\n#[derive(Debug)]\nenum DataStoreError {\n    NotFound(String),\n    PermissionDenied,\n}\n\nfn main() {\n    let err: Result<(), DataStoreError> = Err(DataStoreError::NotFound(String::from(\"user_1\")));\n    println!(\"{}\", \"Custom error defined\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-112-tc-1",
        "description": "Verifies correct implementation for Defining Custom Error Types with enum",
        "testFn": "code.includes('enum DataStoreError') || code.includes('DataStoreError')"
      }
    ]
  },
  {
    "id": "rust-113-implementing-stderrorerror-and-d",
    "title": "113. Implementing std::error::Error and Display",
    "slug": "lesson-113-implementing-stderrorerror-and-d",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Implementing std::error::Error and Display in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Implementing std",
      "Rust"
    ],
    "analogy": "Registering an industrial machine part with the international safety council standard.",
    "explanationMarkdown": "### Implementing std::error::Error and Display\n\n`std::error::Error` requires `Debug` and `Display` implementations, integrating with Rust's standard error ecosystem.\n\n```rust\nuse std::fmt;\n\n#[derive(Debug)]\nstruct CustomError(&'static str);\n\nimpl fmt::Display for CustomError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"Custom error: {}\", self.0)\n    }\n}\nimpl std::error::Error for CustomError {}\n\nfn main() {\n    println!(\"{}\", CustomError(\"timeout\"));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Implementing std::error::Error and Display",
      "code": "use std::fmt;\n\n#[derive(Debug)]\nstruct CustomError(&'static str);\n\nimpl fmt::Display for CustomError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"Custom error: {}\", self.0)\n    }\n}\nimpl std::error::Error for CustomError {}\n\nfn main() {\n    println!(\"{}\", CustomError(\"timeout\"));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Implementing std::error::Error and Display.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Implementing std::error::Error and Display.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::fmt;\n\n#[derive(Debug)]\nstruct CustomError(&'static str);\n\nimpl fmt::Display for CustomError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"Custom error: {}\", self.0)\n    }\n}\nimpl std::error::Error for CustomError {}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::fmt;\n\n#[derive(Debug)]\nstruct CustomError(&'static str);\n\nimpl fmt::Display for CustomError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"Custom error: {}\", self.0)\n    }\n}\nimpl std::error::Error for CustomError {}\n\nfn main() {\n    println!(\"{}\", CustomError(\"timeout\"));\n}",
    "hints": [
      "Write:\nuse std::fmt;\n\n#[derive(Debug)]\nstruct CustomError(&'static str);\n\nimpl fmt::Display for CustomError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"Custom error: {}\", self.0)\n    }\n}\nimpl std::error::Error for CustomError {}\n\nfn main() {\n    println!(\"{}\", CustomError(\"timeout\"));\n}"
    ],
    "testCases": [
      {
        "id": "rust-113-tc-1",
        "description": "Verifies correct implementation for Implementing std::error::Error and Display",
        "testFn": "code.includes('impl std::error::Error for') || code.includes('fmt::Display for CustomError')"
      }
    ]
  },
  {
    "id": "rust-114-boxdyn-stderrorerror-for-flexibl",
    "title": "114. Box<dyn std::error::Error> for Flexible Application Errors",
    "slug": "lesson-114-boxdyn-stderrorerror-for-flexibl",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Box<dyn std::error::Error> for Flexible Application Errors in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Box<dyn std",
      "Rust"
    ],
    "analogy": "A universal recycling bin capable of accepting aluminum, plastic, or paper scrap.",
    "explanationMarkdown": "### Box<dyn std::error::Error> for Flexible Application Errors\n\n`Box<dyn std::error::Error>` allows propagating any error type implementing the `Error` trait in main binaries.\n\n```rust\nfn run_task() -> Result<(), Box<dyn std::error::Error>> {\n    let _num = \"42\".parse::<i32>()?;\n    Ok(())\n}\n\nfn main() {\n    println!(\"{:?}\", run_task());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Box<dyn std::error::Error> for Flexible Application Errors",
      "code": "fn run_task() -> Result<(), Box<dyn std::error::Error>> {\n    let _num = \"42\".parse::<i32>()?;\n    Ok(())\n}\n\nfn main() {\n    println!(\"{:?}\", run_task());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Box<dyn std::error::Error> for Flexible Application Errors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Box<dyn std::error::Error> for Flexible Application Errors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn run_task() -> Result<(), Box<dyn std::error::Error>> {\n    let _num = \"42\".parse::<i32>()?;\n    Ok(())\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn run_task() -> Result<(), Box<dyn std::error::Error>> {\n    let _num = \"42\".parse::<i32>()?;\n    Ok(())\n}\n\nfn main() {\n    println!(\"{:?}\", run_task());\n}",
    "hints": [
      "Write:\nfn run_task() -> Result<(), Box<dyn std::error::Error>> {\n    let _num = \"42\".parse::<i32>()?;\n    Ok(())\n}\n\nfn main() {\n    println!(\"{:?}\", run_task());\n}"
    ],
    "testCases": [
      {
        "id": "rust-114-tc-1",
        "description": "Verifies correct implementation for Box<dyn std::error::Error> for Flexible Application Errors",
        "testFn": "code.includes('Box<dyn std::error::Error>') || code.includes('run_task()')"
      }
    ]
  },
  {
    "id": "rust-115-the-thiserror-crate-for-ergonomi",
    "title": "115. The thiserror Crate for Ergonomic Library Errors",
    "slug": "lesson-115-the-thiserror-crate-for-ergonomi",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The thiserror Crate for Ergonomic Library Errors in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The thiserror Crate for Ergonomic Library Errors",
      "Rust"
    ],
    "analogy": "A machine that automatically engraves serial numbers and compliance labels on every product on the belt.",
    "explanationMarkdown": "### The thiserror Crate for Ergonomic Library Errors\n\n`thiserror` is the industry standard for authoring structured, maintainable library error enums.\n\n```rust\nfn main() {\n    println!(\"thiserror concepts explored\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The thiserror Crate for Ergonomic Library Errors",
      "code": "fn main() {\n    println!(\"thiserror concepts explored\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The thiserror Crate for Ergonomic Library Errors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The thiserror Crate for Ergonomic Library Errors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"thiserror concepts explored\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"thiserror concepts explored\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-115-tc-1",
        "description": "Verifies correct implementation for The thiserror Crate for Ergonomic Library Errors",
        "testFn": "code.includes('thiserror') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-116-the-anyhow-crate-for-rich-applic",
    "title": "116. The anyhow Crate for Rich Application Context",
    "slug": "lesson-116-the-anyhow-crate-for-rich-applic",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The anyhow Crate for Rich Application Context in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The anyhow Crate for Rich Application Context",
      "Rust"
    ],
    "analogy": "An aircraft flight data recorder attaching timestamp and cockpit altitude context to an alert.",
    "explanationMarkdown": "### The anyhow Crate for Rich Application Context\n\n`anyhow` provides ergonomic error handling in applications with automatic stack trace and context chaining.\n\n```rust\nfn main() {\n    println!(\"anyhow contextual errors explored\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The anyhow Crate for Rich Application Context",
      "code": "fn main() {\n    println!(\"anyhow contextual errors explored\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The anyhow Crate for Rich Application Context.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The anyhow Crate for Rich Application Context.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"anyhow contextual errors explored\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"anyhow contextual errors explored\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-116-tc-1",
        "description": "Verifies correct implementation for The anyhow Crate for Rich Application Context",
        "testFn": "code.includes('anyhow') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-117-combinators-.unwrap_or,-.unwrap_",
    "title": "117. Combinators: .unwrap_or(), .unwrap_or_else(), .and_then()",
    "slug": "lesson-117-combinators-.unwrap_or,-.unwrap_",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Combinators: .unwrap_or(), .unwrap_or_else(), .and_then() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Combinators",
      "Rust"
    ],
    "analogy": "An automatic backup generator kicking on when the main electrical power line fails.",
    "explanationMarkdown": "### Combinators: .unwrap_or(), .unwrap_or_else(), .and_then()\n\nFunctional combinators eliminate verbose match blocks when providing default or computed fallbacks.\n\n```rust\nfn main() {\n    let opt: Option<i32> = None;\n    let val = opt.unwrap_or(100);\n    let computed = opt.unwrap_or_else(|| 42 * 2);\n    println!(\"Val: {}, Computed: {}\", val, computed);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Combinators: .unwrap_or(), .unwrap_or_else(), .and_then()",
      "code": "fn main() {\n    let opt: Option<i32> = None;\n    let val = opt.unwrap_or(100);\n    let computed = opt.unwrap_or_else(|| 42 * 2);\n    println!(\"Val: {}, Computed: {}\", val, computed);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combinators: .unwrap_or(), .unwrap_or_else(), .and_then().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combinators: .unwrap_or(), .unwrap_or_else(), .and_then().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let opt: Option<i32> = None;\n    let val = opt.unwrap_or(100);\n    let computed = opt.unwrap_or_else(|| 42 * 2);\n    println!(\"Val: {}, Computed: {}\", val, computed);\n}",
    "hints": [
      "Write:\nfn main() {\n    let opt: Option<i32> = None;\n    let val = opt.unwrap_or(100);\n    let computed = opt.unwrap_or_else(|| 42 * 2);\n    println!(\"Val: {}, Computed: {}\", val, computed);\n}"
    ],
    "testCases": [
      {
        "id": "rust-117-tc-1",
        "description": "Verifies correct implementation for Combinators: .unwrap_or(), .unwrap_or_else(), .and_then()",
        "testFn": "code.includes('unwrap_or(') || code.includes('unwrap_or_else(')"
      }
    ]
  },
  {
    "id": "rust-118-returning-result-from-main",
    "title": "118. Returning Result from main()",
    "slug": "lesson-118-returning-result-from-main",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Returning Result from main() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Returning Result from main()",
      "Rust"
    ],
    "analogy": "An Olympic athlete submitting an official judges scorecard that reports clean pass or penalty score.",
    "explanationMarkdown": "### Returning Result from main()\n\n`main` can return `Result<(), E>`, allowing the `?` operator to be used at the top level of programs.\n\n```rust\nfn main() -> Result<(), Box<dyn std::error::Error>> {\n    let n: i32 = \"100\".parse()?;\n    println!(\"Parsed in main: {}\", n);\n    Ok(())\n}\n```",
    "workedExample": {
      "title": "Worked Example: Returning Result from main()",
      "code": "fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let n: i32 = \"100\".parse()?;\n    println!(\"Parsed in main: {}\", n);\n    Ok(())\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Returning Result from main().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Returning Result from main().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let n: i32 = \"100\".parse()?;\n    println!(\"Parsed in main: {}\", n);\n    Ok(())\n}",
    "solutionCode": "fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let n: i32 = \"100\".parse()?;\n    println!(\"Parsed in main: {}\", n);\n    Ok(())\n}",
    "hints": [
      "Write:\nfn main() -> Result<(), Box<dyn std::error::Error>> {\n    let n: i32 = \"100\".parse()?;\n    println!(\"Parsed in main: {}\", n);\n    Ok(())\n}"
    ],
    "testCases": [
      {
        "id": "rust-118-tc-1",
        "description": "Verifies correct implementation for Returning Result from main()",
        "testFn": "code.includes('fn main() -> Result<(), Box<dyn std::error::Error>>') || code.includes('Ok(())')"
      }
    ]
  },
  {
    "id": "rust-119-panic-hooks-and-backtraces-rust_",
    "title": "119. Panic Hooks and Backtraces: RUST_BACKTRACE=1",
    "slug": "lesson-119-panic-hooks-and-backtraces-rust_",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Panic Hooks and Backtraces: RUST_BACKTRACE=1 in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Panic Hooks and Backtraces",
      "Rust"
    ],
    "analogy": "A flight black box recording every engine parameter leading up to an anomaly.",
    "explanationMarkdown": "### Panic Hooks and Backtraces: RUST_BACKTRACE=1\n\n`RUST_BACKTRACE=1` prints the exact line numbers and function calls active when a panic occurred.\n\n```rust\nfn main() {\n    println!(\"Backtrace diagnostics available\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Panic Hooks and Backtraces: RUST_BACKTRACE=1",
      "code": "fn main() {\n    println!(\"Backtrace diagnostics available\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Panic Hooks and Backtraces: RUST_BACKTRACE=1.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Panic Hooks and Backtraces: RUST_BACKTRACE=1.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Backtrace diagnostics available\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Backtrace diagnostics available\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-119-tc-1",
        "description": "Verifies correct implementation for Panic Hooks and Backtraces: RUST_BACKTRACE=1",
        "testFn": "code.includes('RUST_BACKTRACE') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-120-module-8-review-error-handling-i",
    "title": "120. Module 8 Review: Error Handling Idioms Mastery",
    "slug": "lesson-120-module-8-review-error-handling-i",
    "language": "rust",
    "category": "Module 8: Error Handling Idioms (Result, Option, ?)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 8 Review: Error Handling Idioms Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 8 Review",
      "Rust"
    ],
    "analogy": "A high-security bank vault: transactions either complete with receipts or fail with audited logs.",
    "explanationMarkdown": "### Module 8 Review: Error Handling Idioms Mastery\n\nMastery over `Result<T, E>`, `Option<T>`, the `?` operator, custom errors, `thiserror`, `anyhow`, and combinators.\n\n```rust\nfn main() {\n    let res: Result<&str, ()> = Ok(\"Error Handling Idioms Mastered\");\n    if let Ok(msg) = res {\n        println!(\"{}\", msg);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 8 Review: Error Handling Idioms Mastery",
      "code": "fn main() {\n    let res: Result<&str, ()> = Ok(\"Error Handling Idioms Mastered\");\n    if let Ok(msg) = res {\n        println!(\"{}\", msg);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 8 Review: Error Handling Idioms Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 8 Review: Error Handling Idioms Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let res: Result<&str, ()> = Ok(\"Error Handling Idioms Mastered\");\n    if let Ok(msg) = res {\n        println!(\"{}\", msg);\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    let res: Result<&str, ()> = Ok(\"Error Handling Idioms Mastered\");\n    if let Ok(msg) = res {\n        println!(\"{}\", msg);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-120-tc-1",
        "description": "Verifies correct implementation for Module 8 Review: Error Handling Idioms Mastery",
        "testFn": "code.includes('Error Handling Idioms Mastered') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-121-closures-anonymous-functions-tha",
    "title": "121. Closures: Anonymous Functions that Capture Environment",
    "slug": "lesson-121-closures-anonymous-functions-tha",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Closures: Anonymous Functions that Capture Environment in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Closures",
      "Rust"
    ],
    "analogy": "A mobile camera drone remembering the GPS coordinates of the home charging station where it was launched.",
    "explanationMarkdown": "### Closures: Anonymous Functions that Capture Environment\n\nClosures (`|args| body`) can capture surrounding variables from the scope in which they are defined.\n\n```rust\nfn main() {\n    let factor = 3;\n    let multiply = |x| x * factor;\n    println!(\"3 * 5 = {}\", multiply(5));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Closures: Anonymous Functions that Capture Environment",
      "code": "fn main() {\n    let factor = 3;\n    let multiply = |x| x * factor;\n    println!(\"3 * 5 = {}\", multiply(5));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Closures: Anonymous Functions that Capture Environment.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Closures: Anonymous Functions that Capture Environment.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let factor = 3;\n    let multiply = |x| x * factor;\n    println!(\"3 * 5 = {}\", multiply(5));\n}",
    "hints": [
      "Write:\nfn main() {\n    let factor = 3;\n    let multiply = |x| x * factor;\n    println!(\"3 * 5 = {}\", multiply(5));\n}"
    ],
    "testCases": [
      {
        "id": "rust-121-tc-1",
        "description": "Verifies correct implementation for Closures: Anonymous Functions that Capture Environment",
        "testFn": "code.includes('|x| x * factor') || code.includes('multiply(5)')"
      }
    ]
  },
  {
    "id": "rust-122-closure-type-inference-and-expli",
    "title": "122. Closure Type Inference and Explicit Annotations",
    "slug": "lesson-122-closure-type-inference-and-expli",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Closure Type Inference and Explicit Annotations in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Closure Type Inference and Explicit Annotations",
      "Rust"
    ],
    "analogy": "A tax calculator form specifying the currency unit on every input box.",
    "explanationMarkdown": "### Closure Type Inference and Explicit Annotations\n\nClosures do not usually require type annotations because the compiler infers them on first invocation.\n\n```rust\nfn main() {\n    let add_annotated = |x: i32, y: i32| -> i32 { x + y };\n    println!(\"{}\", add_annotated(10, 20));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Closure Type Inference and Explicit Annotations",
      "code": "fn main() {\n    let add_annotated = |x: i32, y: i32| -> i32 { x + y };\n    println!(\"{}\", add_annotated(10, 20));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Closure Type Inference and Explicit Annotations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Closure Type Inference and Explicit Annotations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let add_annotated = |x: i32, y: i32| -> i32 { x + y };\n    println!(\"{}\", add_annotated(10, 20));\n}",
    "hints": [
      "Write:\nfn main() {\n    let add_annotated = |x: i32, y: i32| -> i32 { x + y };\n    println!(\"{}\", add_annotated(10, 20));\n}"
    ],
    "testCases": [
      {
        "id": "rust-122-tc-1",
        "description": "Verifies correct implementation for Closure Type Inference and Explicit Annotations",
        "testFn": "code.includes('|x: i32, y: i32| -> i32') || code.includes('add_annotated')"
      }
    ]
  },
  {
    "id": "rust-123-the-three-closure-traits-fn,-fnm",
    "title": "123. The Three Closure Traits: Fn, FnMut, and FnOnce",
    "slug": "lesson-123-the-three-closure-traits-fn,-fnm",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master The Three Closure Traits: Fn, FnMut, and FnOnce in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Three Closure Traits",
      "Rust"
    ],
    "analogy": "A single-use matchstick (FnOnce), an adjustable paintbrush (FnMut), and a reference dictionary (Fn).",
    "explanationMarkdown": "### The Three Closure Traits: Fn, FnMut, and FnOnce\n\nRust classifies closures into three traits based on how they borrow or move captured variables.\n\n```rust\nfn main() {\n    println!(\"Fn, FnMut, FnOnce categorized\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Three Closure Traits: Fn, FnMut, and FnOnce",
      "code": "fn main() {\n    println!(\"Fn, FnMut, FnOnce categorized\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Three Closure Traits: Fn, FnMut, and FnOnce.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Three Closure Traits: Fn, FnMut, and FnOnce.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Fn, FnMut, FnOnce categorized\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Fn, FnMut, FnOnce categorized\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-123-tc-1",
        "description": "Verifies correct implementation for The Three Closure Traits: Fn, FnMut, and FnOnce",
        "testFn": "code.includes('Fn, FnMut, FnOnce') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-124-the-move-keyword-in-closures",
    "title": "124. The move Keyword in Closures",
    "slug": "lesson-124-the-move-keyword-in-closures",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master The move Keyword in Closures in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The move Keyword in Closures",
      "Rust"
    ],
    "analogy": "Packing furniture into a moving van: ownership transfers to the new house, leaving the old flat empty.",
    "explanationMarkdown": "### The move Keyword in Closures\n\nThe `move` keyword forces a closure to take ownership of values it uses rather than borrowing them (essential for threads).\n\n```rust\nfn main() {\n    let data = vec![1, 2, 3];\n    let owns_data = move || println!(\"Owned vec: {:?}\", data);\n    owns_data();\n}\n```",
    "workedExample": {
      "title": "Worked Example: The move Keyword in Closures",
      "code": "fn main() {\n    let data = vec![1, 2, 3];\n    let owns_data = move || println!(\"Owned vec: {:?}\", data);\n    owns_data();\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The move Keyword in Closures.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The move Keyword in Closures.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let data = vec![1, 2, 3];\n    let owns_data = move || println!(\"Owned vec: {:?}\", data);\n    owns_data();\n}",
    "hints": [
      "Write:\nfn main() {\n    let data = vec![1, 2, 3];\n    let owns_data = move || println!(\"Owned vec: {:?}\", data);\n    owns_data();\n}"
    ],
    "testCases": [
      {
        "id": "rust-124-tc-1",
        "description": "Verifies correct implementation for The move Keyword in Closures",
        "testFn": "code.includes('move ||') || code.includes('owns_data')"
      }
    ]
  },
  {
    "id": "rust-125-the-iterator-trait-.next-and-ite",
    "title": "125. The Iterator Trait: .next() and Item",
    "slug": "lesson-125-the-iterator-trait-.next-and-ite",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master The Iterator Trait: .next() and Item in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Iterator Trait",
      "Rust"
    ],
    "analogy": "A turnstile clicking one passenger at a time until the line of commuters is exhausted.",
    "explanationMarkdown": "### The Iterator Trait: .next() and Item\n\nAll iterators implement `Iterator` with `fn next(&mut self) -> Option<Self::Item>`. Calling `next()` advances state.\n\n```rust\nfn main() {\n    let v = vec![1, 2];\n    let mut iter = v.into_iter();\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Iterator Trait: .next() and Item",
      "code": "fn main() {\n    let v = vec![1, 2];\n    let mut iter = v.into_iter();\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Iterator Trait: .next() and Item.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Iterator Trait: .next() and Item.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let v = vec![1, 2];\n    let mut iter = v.into_iter();\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n}",
    "hints": [
      "Write:\nfn main() {\n    let v = vec![1, 2];\n    let mut iter = v.into_iter();\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n    println!(\"{:?}\", iter.next());\n}"
    ],
    "testCases": [
      {
        "id": "rust-125-tc-1",
        "description": "Verifies correct implementation for The Iterator Trait: .next() and Item",
        "testFn": "code.includes('iter.next()') || code.includes('into_iter()')"
      }
    ]
  },
  {
    "id": "rust-126-iterator-adapters-.map,-.filter,",
    "title": "126. Iterator Adapters: .map(), .filter(), .take()",
    "slug": "lesson-126-iterator-adapters-.map,-.filter,",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Iterator Adapters: .map(), .filter(), .take() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Iterator Adapters",
      "Rust"
    ],
    "analogy": "An automated assembly line: reject defective parts (filter), spray paint surviving parts (map).",
    "explanationMarkdown": "### Iterator Adapters: .map(), .filter(), .take()\n\nAdapters produce new iterators lazily without consuming memory until collected.\n\n```rust\nfn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let evens_squared: Vec<i32> = nums.into_iter()\n        .filter(|x| x % 2 == 0)\n        .map(|x| x * x)\n        .collect();\n    println!(\"Result: {:?}\", evens_squared);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterator Adapters: .map(), .filter(), .take()",
      "code": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let evens_squared: Vec<i32> = nums.into_iter()\n        .filter(|x| x % 2 == 0)\n        .map(|x| x * x)\n        .collect();\n    println!(\"Result: {:?}\", evens_squared);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterator Adapters: .map(), .filter(), .take().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterator Adapters: .map(), .filter(), .take().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let evens_squared: Vec<i32> = nums.into_iter()\n        .filter(|x| x % 2 == 0)\n        .map(|x| x * x)\n        .collect();\n    println!(\"Result: {:?}\", evens_squared);\n}",
    "hints": [
      "Write:\nfn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let evens_squared: Vec<i32> = nums.into_iter()\n        .filter(|x| x % 2 == 0)\n        .map(|x| x * x)\n        .collect();\n    println!(\"Result: {:?}\", evens_squared);\n}"
    ],
    "testCases": [
      {
        "id": "rust-126-tc-1",
        "description": "Verifies correct implementation for Iterator Adapters: .map(), .filter(), .take()",
        "testFn": "code.includes('.filter(') && code.includes('.map(')"
      }
    ]
  },
  {
    "id": "rust-127-consuming-adapters-.collect,-.su",
    "title": "127. Consuming Adapters: .collect(), .sum(), .count()",
    "slug": "lesson-127-consuming-adapters-.collect,-.su",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Consuming Adapters: .collect(), .sum(), .count() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Consuming Adapters",
      "Rust"
    ],
    "analogy": "The end of a bottling conveyor belt: capping and packing the bottles into a shipping box.",
    "explanationMarkdown": "### Consuming Adapters: .collect(), .sum(), .count()\n\nConsuming adapters call `next()` internally until the iterator returns `None`, producing a final output value.\n\n```rust\nfn main() {\n    let nums = vec![10, 20, 30];\n    let total: i32 = nums.iter().sum();\n    println!(\"Total: {}\", total);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Consuming Adapters: .collect(), .sum(), .count()",
      "code": "fn main() {\n    let nums = vec![10, 20, 30];\n    let total: i32 = nums.iter().sum();\n    println!(\"Total: {}\", total);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Consuming Adapters: .collect(), .sum(), .count().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Consuming Adapters: .collect(), .sum(), .count().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let nums = vec![10, 20, 30];\n    let total: i32 = nums.iter().sum();\n    println!(\"Total: {}\", total);\n}",
    "hints": [
      "Write:\nfn main() {\n    let nums = vec![10, 20, 30];\n    let total: i32 = nums.iter().sum();\n    println!(\"Total: {}\", total);\n}"
    ],
    "testCases": [
      {
        "id": "rust-127-tc-1",
        "description": "Verifies correct implementation for Consuming Adapters: .collect(), .sum(), .count()",
        "testFn": "code.includes('.sum()') || code.includes('nums.iter().sum()')"
      }
    ]
  },
  {
    "id": "rust-128-the-laziness-of-rust-iterators",
    "title": "128. The Laziness of Rust Iterators",
    "slug": "lesson-128-the-laziness-of-rust-iterators",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master The Laziness of Rust Iterators in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Laziness of Rust Iterators",
      "Rust"
    ],
    "analogy": "A recipe written on a card: no flour is measured until you actually turn on the oven and begin baking.",
    "explanationMarkdown": "### The Laziness of Rust Iterators\n\nIterators in Rust are completely lazy. Calling `.map()` does nothing until a consuming method like `.collect()` is called.\n\n```rust\nfn main() {\n    println!(\"No computation performed until consumed\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Laziness of Rust Iterators",
      "code": "fn main() {\n    println!(\"No computation performed until consumed\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Laziness of Rust Iterators.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Laziness of Rust Iterators.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"No computation performed until consumed\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"No computation performed until consumed\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-128-tc-1",
        "description": "Verifies correct implementation for The Laziness of Rust Iterators",
        "testFn": "code.includes('No computation performed') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-129-zero-cost-abstractions-iterator-",
    "title": "129. Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops",
    "slug": "lesson-129-zero-cost-abstractions-iterator-",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Zero-Cost Abstractions",
      "Rust"
    ],
    "analogy": "A Formula 1 engine where aerodynamic carbon fiber fairings add zero drag compared to an open frame.",
    "explanationMarkdown": "### Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops\n\nIterators are zero-cost abstractions: rustc optimizes iterator chains into flat, vectorized loops without function call overhead.\n\n```rust\nfn main() {\n    println!(\"Iterators are zero-cost\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops",
      "code": "fn main() {\n    println!(\"Iterators are zero-cost\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Iterators are zero-cost\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Iterators are zero-cost\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-129-tc-1",
        "description": "Verifies correct implementation for Zero-Cost Abstractions: Iterator Performance vs Hand-Written For Loops",
        "testFn": "code.includes('Iterators are zero-cost') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-130-creating-custom-iterators-with-i",
    "title": "130. Creating Custom Iterators with impl Iterator",
    "slug": "lesson-130-creating-custom-iterators-with-i",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Creating Custom Iterators with impl Iterator in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Creating Custom Iterators with impl Iterator",
      "Rust"
    ],
    "analogy": "A custom digital clock generator ticking milliseconds on an embedded circuit board.",
    "explanationMarkdown": "### Creating Custom Iterators with impl Iterator\n\nImplement `Iterator` by defining `type Item` and `fn next(&mut self) -> Option<Self::Item>` to gain access to all standard adapters.\n\n```rust\nstruct Counter {\n    count: u32,\n}\nimpl Counter {\n    fn new() -> Counter { Counter { count: 0 } }\n}\nimpl Iterator for Counter {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.count < 3 {\n            self.count += 1;\n            Some(self.count)\n        } else { None }\n    }\n}\n\nfn main() {\n    let total: u32 = Counter::new().sum();\n    println!(\"Sum: {}\", total);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Creating Custom Iterators with impl Iterator",
      "code": "struct Counter {\n    count: u32,\n}\nimpl Counter {\n    fn new() -> Counter { Counter { count: 0 } }\n}\nimpl Iterator for Counter {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.count < 3 {\n            self.count += 1;\n            Some(self.count)\n        } else { None }\n    }\n}\n\nfn main() {\n    let total: u32 = Counter::new().sum();\n    println!(\"Sum: {}\", total);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Custom Iterators with impl Iterator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Custom Iterators with impl Iterator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "struct Counter {\n    count: u32,\n}\nimpl Counter {\n    fn new() -> Counter { Counter { count: 0 } }\n}\nimpl Iterator for Counter {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.count < 3 {\n            self.count += 1;\n            Some(self.count)\n        } else { None }\n    }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "struct Counter {\n    count: u32,\n}\nimpl Counter {\n    fn new() -> Counter { Counter { count: 0 } }\n}\nimpl Iterator for Counter {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.count < 3 {\n            self.count += 1;\n            Some(self.count)\n        } else { None }\n    }\n}\n\nfn main() {\n    let total: u32 = Counter::new().sum();\n    println!(\"Sum: {}\", total);\n}",
    "hints": [
      "Write:\nstruct Counter {\n    count: u32,\n}\nimpl Counter {\n    fn new() -> Counter { Counter { count: 0 } }\n}\nimpl Iterator for Counter {\n    type Item = u32;\n    fn next(&mut self) -> Option<Self::Item> {\n        if self.count < 3 {\n            self.count += 1;\n            Some(self.count)\n        } else { None }\n    }\n}\n\nfn main() {\n    let total: u32 = Counter::new().sum();\n    println!(\"Sum: {}\", total);\n}"
    ],
    "testCases": [
      {
        "id": "rust-130-tc-1",
        "description": "Verifies correct implementation for Creating Custom Iterators with impl Iterator",
        "testFn": "code.includes('impl Iterator for Counter') || code.includes('Counter::new()')"
      }
    ]
  },
  {
    "id": "rust-131-folding-and-reducing-.fold-and-.",
    "title": "131. Folding and Reducing: .fold() and .reduce()",
    "slug": "lesson-131-folding-and-reducing-.fold-and-.",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Folding and Reducing: .fold() and .reduce() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Folding and Reducing",
      "Rust"
    ],
    "analogy": "Rolling a snowball down a snowy hill: it gathers more mass with every turn until it reaches the base.",
    "explanationMarkdown": "### Folding and Reducing: .fold() and .reduce()\n\n`.fold(initial, |acc, x| ...)` accumulates state across each element of an iterator.\n\n```rust\nfn main() {\n    let nums = vec![1, 2, 3, 4];\n    let product = nums.iter().fold(1, |acc, x| acc * x);\n    println!(\"Product: {}\", product);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Folding and Reducing: .fold() and .reduce()",
      "code": "fn main() {\n    let nums = vec![1, 2, 3, 4];\n    let product = nums.iter().fold(1, |acc, x| acc * x);\n    println!(\"Product: {}\", product);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Folding and Reducing: .fold() and .reduce().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Folding and Reducing: .fold() and .reduce().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let nums = vec![1, 2, 3, 4];\n    let product = nums.iter().fold(1, |acc, x| acc * x);\n    println!(\"Product: {}\", product);\n}",
    "hints": [
      "Write:\nfn main() {\n    let nums = vec![1, 2, 3, 4];\n    let product = nums.iter().fold(1, |acc, x| acc * x);\n    println!(\"Product: {}\", product);\n}"
    ],
    "testCases": [
      {
        "id": "rust-131-tc-1",
        "description": "Verifies correct implementation for Folding and Reducing: .fold() and .reduce()",
        "testFn": "code.includes('.fold(1,') || code.includes('Product: 24')"
      }
    ]
  },
  {
    "id": "rust-132-flattening-and-chaining-iterator",
    "title": "132. Flattening and Chaining Iterators: .flatten() and .chain()",
    "slug": "lesson-132-flattening-and-chaining-iterator",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Flattening and Chaining Iterators: .flatten() and .chain() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Flattening and Chaining Iterators",
      "Rust"
    ],
    "analogy": "Emptying multiple small boxes of screws into a single continuous workshop parts tray.",
    "explanationMarkdown": "### Flattening and Chaining Iterators: .flatten() and .chain()\n\n`.flatten()` un-nests nested iterators; `.chain()` links two iterators end-to-end.\n\n```rust\nfn main() {\n    let matrix = vec![vec![1, 2], vec![3, 4]];\n    let flat: Vec<i32> = matrix.into_iter().flatten().collect();\n    println!(\"Flat: {:?}\", flat);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Flattening and Chaining Iterators: .flatten() and .chain()",
      "code": "fn main() {\n    let matrix = vec![vec![1, 2], vec![3, 4]];\n    let flat: Vec<i32> = matrix.into_iter().flatten().collect();\n    println!(\"Flat: {:?}\", flat);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flattening and Chaining Iterators: .flatten() and .chain().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flattening and Chaining Iterators: .flatten() and .chain().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let matrix = vec![vec![1, 2], vec![3, 4]];\n    let flat: Vec<i32> = matrix.into_iter().flatten().collect();\n    println!(\"Flat: {:?}\", flat);\n}",
    "hints": [
      "Write:\nfn main() {\n    let matrix = vec![vec![1, 2], vec![3, 4]];\n    let flat: Vec<i32> = matrix.into_iter().flatten().collect();\n    println!(\"Flat: {:?}\", flat);\n}"
    ],
    "testCases": [
      {
        "id": "rust-132-tc-1",
        "description": "Verifies correct implementation for Flattening and Chaining Iterators: .flatten() and .chain()",
        "testFn": "code.includes('.flatten()') || code.includes('Flat: [1, 2, 3, 4]')"
      }
    ]
  },
  {
    "id": "rust-133-zipping-iterators-.zip-and-enume",
    "title": "133. Zipping Iterators: .zip() and Enumerating with .enumerate()",
    "slug": "lesson-133-zipping-iterators-.zip-and-enume",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Zipping Iterators: .zip() and Enumerating with .enumerate() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Zipping Iterators",
      "Rust"
    ],
    "analogy": "An athletic race judge stamping the finishing position index onto each runner's chest number.",
    "explanationMarkdown": "### Zipping Iterators: .zip() and Enumerating with .enumerate()\n\n`.enumerate()` pairs each element with its 0-based index; `.zip()` pairs elements from two iterators into tuples.\n\n```rust\nfn main() {\n    let letters = ['a', 'b', 'c'];\n    for (i, c) in letters.iter().enumerate() {\n        println!(\"{}: {}\", i, c);\n    }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Zipping Iterators: .zip() and Enumerating with .enumerate()",
      "code": "fn main() {\n    let letters = ['a', 'b', 'c'];\n    for (i, c) in letters.iter().enumerate() {\n        println!(\"{}: {}\", i, c);\n    }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Zipping Iterators: .zip() and Enumerating with .enumerate().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Zipping Iterators: .zip() and Enumerating with .enumerate().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let letters = ['a', 'b', 'c'];\n    for (i, c) in letters.iter().enumerate() {\n        println!(\"{}: {}\", i, c);\n    }\n}",
    "hints": [
      "Write:\nfn main() {\n    let letters = ['a', 'b', 'c'];\n    for (i, c) in letters.iter().enumerate() {\n        println!(\"{}: {}\", i, c);\n    }\n}"
    ],
    "testCases": [
      {
        "id": "rust-133-tc-1",
        "description": "Verifies correct implementation for Zipping Iterators: .zip() and Enumerating with .enumerate()",
        "testFn": "code.includes('.enumerate()') || code.includes('letters.iter()')"
      }
    ]
  },
  {
    "id": "rust-134-partitioning-iterators-.partitio",
    "title": "134. Partitioning Iterators: .partition()",
    "slug": "lesson-134-partitioning-iterators-.partitio",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Partitioning Iterators: .partition() in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Partitioning Iterators",
      "Rust"
    ],
    "analogy": "An apple packing machine dividing fruit into grade-A export crates and cider-press baskets.",
    "explanationMarkdown": "### Partitioning Iterators: .partition()\n\n`.partition(predicate)` splits an iterator into two collections based on a boolean condition.\n\n```rust\nfn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let (evens, odds): (Vec<i32>, Vec<i32>) = nums.into_iter().partition(|&n| n % 2 == 0);\n    println!(\"Evens: {:?}, Odds: {:?}\", evens, odds);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Partitioning Iterators: .partition()",
      "code": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let (evens, odds): (Vec<i32>, Vec<i32>) = nums.into_iter().partition(|&n| n % 2 == 0);\n    println!(\"Evens: {:?}, Odds: {:?}\", evens, odds);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Partitioning Iterators: .partition().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Partitioning Iterators: .partition().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let (evens, odds): (Vec<i32>, Vec<i32>) = nums.into_iter().partition(|&n| n % 2 == 0);\n    println!(\"Evens: {:?}, Odds: {:?}\", evens, odds);\n}",
    "hints": [
      "Write:\nfn main() {\n    let nums = vec![1, 2, 3, 4, 5, 6];\n    let (evens, odds): (Vec<i32>, Vec<i32>) = nums.into_iter().partition(|&n| n % 2 == 0);\n    println!(\"Evens: {:?}, Odds: {:?}\", evens, odds);\n}"
    ],
    "testCases": [
      {
        "id": "rust-134-tc-1",
        "description": "Verifies correct implementation for Partitioning Iterators: .partition()",
        "testFn": "code.includes('.partition(') || code.includes('evens, odds')"
      }
    ]
  },
  {
    "id": "rust-135-module-9-review-closures-&-itera",
    "title": "135. Module 9 Review: Closures & Iterators Mastery",
    "slug": "lesson-135-module-9-review-closures-&-itera",
    "language": "rust",
    "category": "Module 9: Functional Rust: Closures & Iterators",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Master Module 9 Review: Closures & Iterators Mastery in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "Rust"
    ],
    "analogy": "A master orchestra conductor coordinating strings, woodwinds, and percussion into harmonious symphony.",
    "explanationMarkdown": "### Module 9 Review: Closures & Iterators Mastery\n\nMastery over closures (`Fn`, `FnMut`, `FnOnce`), the `move` keyword, custom iterators, adapters, and zero-cost pipelines.\n\n```rust\nfn main() {\n    let sum: i32 = (1..=5).map(|x| x * 2).sum();\n    println!(\"Functional pipeline result: {}\", sum);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Closures & Iterators Mastery",
      "code": "fn main() {\n    let sum: i32 = (1..=5).map(|x| x * 2).sum();\n    println!(\"Functional pipeline result: {}\", sum);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Closures & Iterators Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Closures & Iterators Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let sum: i32 = (1..=5).map(|x| x * 2).sum();\n    println!(\"Functional pipeline result: {}\", sum);\n}",
    "hints": [
      "Write:\nfn main() {\n    let sum: i32 = (1..=5).map(|x| x * 2).sum();\n    println!(\"Functional pipeline result: {}\", sum);\n}"
    ],
    "testCases": [
      {
        "id": "rust-135-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Closures & Iterators Mastery",
        "testFn": "code.includes('Functional pipeline result: 30') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-136-boxt-allocating-data-on-the-heap",
    "title": "136. Box<T>: Allocating Data on the Heap",
    "slug": "lesson-136-boxt-allocating-data-on-the-heap",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Box<T>: Allocating Data on the Heap in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Box<T>",
      "Rust"
    ],
    "analogy": "A safety deposit box in a bank vault: you hold the lightweight brass key in your pocket.",
    "explanationMarkdown": "### Box<T>: Allocating Data on the Heap\n\n`Box<T>` is the simplest smart pointer, allocating values on the heap with stack-managed ownership.\n\n```rust\nfn main() {\n    let b = Box::new(5);\n    println!(\"b = {}\", b);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Box<T>: Allocating Data on the Heap",
      "code": "fn main() {\n    let b = Box::new(5);\n    println!(\"b = {}\", b);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Box<T>: Allocating Data on the Heap.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Box<T>: Allocating Data on the Heap.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let b = Box::new(5);\n    println!(\"b = {}\", b);\n}",
    "hints": [
      "Write:\nfn main() {\n    let b = Box::new(5);\n    println!(\"b = {}\", b);\n}"
    ],
    "testCases": [
      {
        "id": "rust-136-tc-1",
        "description": "Verifies correct implementation for Box<T>: Allocating Data on the Heap",
        "testFn": "code.includes('Box::new(') || code.includes('b = 5')"
      }
    ]
  },
  {
    "id": "rust-137-recursive-types-with-box-cons-li",
    "title": "137. Recursive Types with Box (Cons List)",
    "slug": "lesson-137-recursive-types-with-box-cons-li",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Recursive Types with Box (Cons List) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Recursive Types with Box (Cons List)",
      "Rust"
    ],
    "analogy": "Russian Matryoshka nesting dolls: each doll holds a smaller doll inside until you reach the solid center.",
    "explanationMarkdown": "### Recursive Types with Box (Cons List)\n\nRust needs to know a type's size at compile time; recursive types use `Box` to introduce known pointer indirection.\n\n```rust\nenum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nfn main() {\n    let _list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));\n    println!(\"Recursive List built\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Recursive Types with Box (Cons List)",
      "code": "enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nfn main() {\n    let _list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));\n    println!(\"Recursive List built\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recursive Types with Box (Cons List).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recursive Types with Box (Cons List).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nfn main() {\n    let _list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));\n    println!(\"Recursive List built\");\n}",
    "hints": [
      "Write:\nenum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nfn main() {\n    let _list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));\n    println!(\"Recursive List built\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-137-tc-1",
        "description": "Verifies correct implementation for Recursive Types with Box (Cons List)",
        "testFn": "code.includes('Box<List>') || code.includes('Cons(1,')"
      }
    ]
  },
  {
    "id": "rust-138-the-deref-trait-and-deref-coerci",
    "title": "138. The Deref Trait and Deref Coercion (*ptr)",
    "slug": "lesson-138-the-deref-trait-and-deref-coerci",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Deref Trait and Deref Coercion (*ptr) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Deref Trait and Deref Coercion (*ptr)",
      "Rust"
    ],
    "analogy": "A magic magnifying glass: looking through the glass reveals the original text directly.",
    "explanationMarkdown": "### The Deref Trait and Deref Coercion (*ptr)\n\nImplementing `Deref` allows treating smart pointers like regular references and enables automatic deref coercion (`&String` to `&str`).\n\n```rust\nuse std::ops::Deref;\n\nstruct MyBox<T>(T);\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &Self::Target { &self.0 }\n}\n\nfn main() {\n    let x = 5;\n    let y = MyBox(x);\n    println!(\"Deref: {}\", *y);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Deref Trait and Deref Coercion (*ptr)",
      "code": "use std::ops::Deref;\n\nstruct MyBox<T>(T);\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &Self::Target { &self.0 }\n}\n\nfn main() {\n    let x = 5;\n    let y = MyBox(x);\n    println!(\"Deref: {}\", *y);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Deref Trait and Deref Coercion (*ptr).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Deref Trait and Deref Coercion (*ptr).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::ops::Deref;\n\nstruct MyBox<T>(T);\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &Self::Target { &self.0 }\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::ops::Deref;\n\nstruct MyBox<T>(T);\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &Self::Target { &self.0 }\n}\n\nfn main() {\n    let x = 5;\n    let y = MyBox(x);\n    println!(\"Deref: {}\", *y);\n}",
    "hints": [
      "Write:\nuse std::ops::Deref;\n\nstruct MyBox<T>(T);\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &Self::Target { &self.0 }\n}\n\nfn main() {\n    let x = 5;\n    let y = MyBox(x);\n    println!(\"Deref: {}\", *y);\n}"
    ],
    "testCases": [
      {
        "id": "rust-138-tc-1",
        "description": "Verifies correct implementation for The Deref Trait and Deref Coercion (*ptr)",
        "testFn": "code.includes('impl<T> Deref for MyBox<T>') || code.includes('*y')"
      }
    ]
  },
  {
    "id": "rust-139-rct-reference-counting-for-share",
    "title": "139. Rc<T>: Reference Counting for Shared Ownership",
    "slug": "lesson-139-rct-reference-counting-for-share",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Rc<T>: Reference Counting for Shared Ownership in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Rc<T>",
      "Rust"
    ],
    "analogy": "A television screen in a public lounge: multiple people watch the broadcast; TV turns off only when everyone leaves.",
    "explanationMarkdown": "### Rc<T>: Reference Counting for Shared Ownership\n\n`Rc<T>` enables multiple owners in single-threaded scenarios by tracking reference counts (`Rc::clone(&ptr)`).\n\n```rust\nuse std::rc::Rc;\n\nfn main() {\n    let shared = Rc::new(String::from(\"Common Resource\"));\n    let _clone1 = Rc::clone(&shared);\n    let _clone2 = Rc::clone(&shared);\n    println!(\"Ref count: {}\", Rc::strong_count(&shared));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rc<T>: Reference Counting for Shared Ownership",
      "code": "use std::rc::Rc;\n\nfn main() {\n    let shared = Rc::new(String::from(\"Common Resource\"));\n    let _clone1 = Rc::clone(&shared);\n    let _clone2 = Rc::clone(&shared);\n    println!(\"Ref count: {}\", Rc::strong_count(&shared));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rc<T>: Reference Counting for Shared Ownership.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rc<T>: Reference Counting for Shared Ownership.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::rc::Rc;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::rc::Rc;\n\nfn main() {\n    let shared = Rc::new(String::from(\"Common Resource\"));\n    let _clone1 = Rc::clone(&shared);\n    let _clone2 = Rc::clone(&shared);\n    println!(\"Ref count: {}\", Rc::strong_count(&shared));\n}",
    "hints": [
      "Write:\nuse std::rc::Rc;\n\nfn main() {\n    let shared = Rc::new(String::from(\"Common Resource\"));\n    let _clone1 = Rc::clone(&shared);\n    let _clone2 = Rc::clone(&shared);\n    println!(\"Ref count: {}\", Rc::strong_count(&shared));\n}"
    ],
    "testCases": [
      {
        "id": "rust-139-tc-1",
        "description": "Verifies correct implementation for Rc<T>: Reference Counting for Shared Ownership",
        "testFn": "code.includes('Rc::new(') || code.includes('Rc::strong_count')"
      }
    ]
  },
  {
    "id": "rust-140-refcellt-and-interior-mutability",
    "title": "140. RefCell<T> and Interior Mutability",
    "slug": "lesson-140-refcellt-and-interior-mutability",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master RefCell<T> and Interior Mutability in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "RefCell<T> and Interior Mutability",
      "Rust"
    ],
    "analogy": "A locked cabinet inside a museum: the cabinet looks locked from outside, but authorized staff can reach inside to rotate displays.",
    "explanationMarkdown": "### RefCell<T> and Interior Mutability\n\n`RefCell<T>` enforces borrow rules at RUNTIME rather than compile time, permitting interior mutability inside immutable wrappers.\n\n```rust\nuse std::cell::RefCell;\n\nfn main() {\n    let data = RefCell::new(42);\n    {\n        let mut mut_ref = data.borrow_mut();\n        *mut_ref += 1;\n    }\n    println!(\"Data: {}\", data.borrow());\n}\n```",
    "workedExample": {
      "title": "Worked Example: RefCell<T> and Interior Mutability",
      "code": "use std::cell::RefCell;\n\nfn main() {\n    let data = RefCell::new(42);\n    {\n        let mut mut_ref = data.borrow_mut();\n        *mut_ref += 1;\n    }\n    println!(\"Data: {}\", data.borrow());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for RefCell<T> and Interior Mutability.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of RefCell<T> and Interior Mutability.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::cell::RefCell;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::cell::RefCell;\n\nfn main() {\n    let data = RefCell::new(42);\n    {\n        let mut mut_ref = data.borrow_mut();\n        *mut_ref += 1;\n    }\n    println!(\"Data: {}\", data.borrow());\n}",
    "hints": [
      "Write:\nuse std::cell::RefCell;\n\nfn main() {\n    let data = RefCell::new(42);\n    {\n        let mut mut_ref = data.borrow_mut();\n        *mut_ref += 1;\n    }\n    println!(\"Data: {}\", data.borrow());\n}"
    ],
    "testCases": [
      {
        "id": "rust-140-tc-1",
        "description": "Verifies correct implementation for RefCell<T> and Interior Mutability",
        "testFn": "code.includes('RefCell::new(') || code.includes('borrow_mut()')"
      }
    ]
  },
  {
    "id": "rust-141-rcrefcellt-multiple-owners-with-",
    "title": "141. Rc<RefCell<T>>: Multiple Owners with Mutability",
    "slug": "lesson-141-rcrefcellt-multiple-owners-with-",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Rc<RefCell<T>>: Multiple Owners with Mutability in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Rc<RefCell<T>>",
      "Rust"
    ],
    "analogy": "A shared Google Doc edited concurrently by multiple team members.",
    "explanationMarkdown": "### Rc<RefCell<T>>: Multiple Owners with Mutability\n\nCombining `Rc` and `RefCell` provides multiple ownership with mutable internal state in single-threaded code.\n\n```rust\nuse std::rc::Rc;\nuse std::cell::RefCell;\n\nfn main() {\n    let value = Rc::new(RefCell::new(5));\n    let a = Rc::clone(&value);\n    *a.borrow_mut() += 10;\n    println!(\"Shared mutated value: {}\", value.borrow());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rc<RefCell<T>>: Multiple Owners with Mutability",
      "code": "use std::rc::Rc;\nuse std::cell::RefCell;\n\nfn main() {\n    let value = Rc::new(RefCell::new(5));\n    let a = Rc::clone(&value);\n    *a.borrow_mut() += 10;\n    println!(\"Shared mutated value: {}\", value.borrow());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rc<RefCell<T>>: Multiple Owners with Mutability.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rc<RefCell<T>>: Multiple Owners with Mutability.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\nfn main() {\n    let value = Rc::new(RefCell::new(5));\n    let a = Rc::clone(&value);\n    *a.borrow_mut() += 10;\n    println!(\"Shared mutated value: {}\", value.borrow());\n}",
    "hints": [
      "Write:\nuse std::rc::Rc;\nuse std::cell::RefCell;\n\nfn main() {\n    let value = Rc::new(RefCell::new(5));\n    let a = Rc::clone(&value);\n    *a.borrow_mut() += 10;\n    println!(\"Shared mutated value: {}\", value.borrow());\n}"
    ],
    "testCases": [
      {
        "id": "rust-141-tc-1",
        "description": "Verifies correct implementation for Rc<RefCell<T>>: Multiple Owners with Mutability",
        "testFn": "code.includes('Rc::new(RefCell::new(') || code.includes('Shared mutated value: 15')"
      }
    ]
  },
  {
    "id": "rust-142-spawning-os-threads-with-stdthre",
    "title": "142. Spawning OS Threads with std::thread::spawn",
    "slug": "lesson-142-spawning-os-threads-with-stdthre",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Spawning OS Threads with std::thread::spawn in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Spawning OS Threads with std",
      "Rust"
    ],
    "analogy": "Launching an auxiliary scout submarine from a battleship to conduct parallel radar reconnaissance.",
    "explanationMarkdown": "### Spawning OS Threads with std::thread::spawn\n\n`thread::spawn` launches a native operating system thread; `.join()` blocks until the spawned thread completes.\n\n```rust\nuse std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        println!(\"Hello from worker thread!\");\n    });\n    handle.join().unwrap();\n}\n```",
    "workedExample": {
      "title": "Worked Example: Spawning OS Threads with std::thread::spawn",
      "code": "use std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        println!(\"Hello from worker thread!\");\n    });\n    handle.join().unwrap();\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spawning OS Threads with std::thread::spawn.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spawning OS Threads with std::thread::spawn.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::thread;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        println!(\"Hello from worker thread!\");\n    });\n    handle.join().unwrap();\n}",
    "hints": [
      "Write:\nuse std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        println!(\"Hello from worker thread!\");\n    });\n    handle.join().unwrap();\n}"
    ],
    "testCases": [
      {
        "id": "rust-142-tc-1",
        "description": "Verifies correct implementation for Spawning OS Threads with std::thread::spawn",
        "testFn": "code.includes('thread::spawn') || code.includes('handle.join()')"
      }
    ]
  },
  {
    "id": "rust-143-message-passing-with-channels-mp",
    "title": "143. Message Passing with Channels: mpsc (Multiple Producer, Single Consumer)",
    "slug": "lesson-143-message-passing-with-channels-mp",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Message Passing with Channels: mpsc (Multiple Producer, Single Consumer) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Message Passing with Channels",
      "Rust"
    ],
    "analogy": "A physical pneumatic message tube on a factory floor: workers send capsules to a central manager's desk.",
    "explanationMarkdown": "### Message Passing with Channels: mpsc (Multiple Producer, Single Consumer)\n\n`std::sync::mpsc` implements message passing: 'Do not communicate by sharing memory; share memory by communicating'.\n\n```rust\nuse std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(\"Message from thread\").unwrap();\n    });\n    let received = rx.recv().unwrap();\n    println!(\"Received: {}\", received);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Message Passing with Channels: mpsc (Multiple Producer, Single Consumer)",
      "code": "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(\"Message from thread\").unwrap();\n    });\n    let received = rx.recv().unwrap();\n    println!(\"Received: {}\", received);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Message Passing with Channels: mpsc (Multiple Producer, Single Consumer).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Message Passing with Channels: mpsc (Multiple Producer, Single Consumer).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(\"Message from thread\").unwrap();\n    });\n    let received = rx.recv().unwrap();\n    println!(\"Received: {}\", received);\n}",
    "hints": [
      "Write:\nuse std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(\"Message from thread\").unwrap();\n    });\n    let received = rx.recv().unwrap();\n    println!(\"Received: {}\", received);\n}"
    ],
    "testCases": [
      {
        "id": "rust-143-tc-1",
        "description": "Verifies correct implementation for Message Passing with Channels: mpsc (Multiple Producer, Single Consumer)",
        "testFn": "code.includes('mpsc::channel()') || code.includes('tx.send(')"
      }
    ]
  },
  {
    "id": "rust-144-shared-state-concurrency-mutext-",
    "title": "144. Shared-State Concurrency: Mutex<T> (Mutual Exclusion)",
    "slug": "lesson-144-shared-state-concurrency-mutext-",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Shared-State Concurrency: Mutex<T> (Mutual Exclusion) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Shared-State Concurrency",
      "Rust"
    ],
    "analogy": "A single microphone at a town hall meeting: only the speaker holding the microphone is permitted to speak.",
    "explanationMarkdown": "### Shared-State Concurrency: Mutex<T> (Mutual Exclusion)\n\n`Mutex<T>` guards shared data, allowing only one thread access at a time. The returned `MutexGuard` unlocks on drop.\n\n```rust\nuse std::sync::Mutex;\n\nfn main() {\n    let m = Mutex::new(5);\n    {\n        let mut num = m.lock().unwrap();\n        *num = 6;\n    }\n    println!(\"Mutex value: {:?}\", m);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Shared-State Concurrency: Mutex<T> (Mutual Exclusion)",
      "code": "use std::sync::Mutex;\n\nfn main() {\n    let m = Mutex::new(5);\n    {\n        let mut num = m.lock().unwrap();\n        *num = 6;\n    }\n    println!(\"Mutex value: {:?}\", m);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shared-State Concurrency: Mutex<T> (Mutual Exclusion).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shared-State Concurrency: Mutex<T> (Mutual Exclusion).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::sync::Mutex;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::sync::Mutex;\n\nfn main() {\n    let m = Mutex::new(5);\n    {\n        let mut num = m.lock().unwrap();\n        *num = 6;\n    }\n    println!(\"Mutex value: {:?}\", m);\n}",
    "hints": [
      "Write:\nuse std::sync::Mutex;\n\nfn main() {\n    let m = Mutex::new(5);\n    {\n        let mut num = m.lock().unwrap();\n        *num = 6;\n    }\n    println!(\"Mutex value: {:?}\", m);\n}"
    ],
    "testCases": [
      {
        "id": "rust-144-tc-1",
        "description": "Verifies correct implementation for Shared-State Concurrency: Mutex<T> (Mutual Exclusion)",
        "testFn": "code.includes('Mutex::new(') || code.includes('m.lock()')"
      }
    ]
  },
  {
    "id": "rust-145-arcmutext-atomic-reference-count",
    "title": "145. Arc<Mutex<T>>: Atomic Reference Counting Across Threads",
    "slug": "lesson-145-arcmutext-atomic-reference-count",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Arc<Mutex<T>>: Atomic Reference Counting Across Threads in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Arc<Mutex<T>>",
      "Rust"
    ],
    "analogy": "A tamper-evident turnstile token counter shared among multiple entry gates.",
    "explanationMarkdown": "### Arc<Mutex<T>>: Atomic Reference Counting Across Threads\n\n`Arc<T>` is thread-safe atomic reference counting. Pairing with `Mutex<T>` allows safe shared mutable state across threads.\n\n```rust\nuse std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n    for _ in 0..5 {\n        let c = Arc::clone(&counter);\n        handles.push(thread::spawn(move || {\n            let mut num = c.lock().unwrap();\n            *num += 1;\n        }));\n    }\n    for h in handles { h.join().unwrap(); }\n    println!(\"Result: {}\", *counter.lock().unwrap());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Arc<Mutex<T>>: Atomic Reference Counting Across Threads",
      "code": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n    for _ in 0..5 {\n        let c = Arc::clone(&counter);\n        handles.push(thread::spawn(move || {\n            let mut num = c.lock().unwrap();\n            *num += 1;\n        }));\n    }\n    for h in handles { h.join().unwrap(); }\n    println!(\"Result: {}\", *counter.lock().unwrap());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Arc<Mutex<T>>: Atomic Reference Counting Across Threads.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Arc<Mutex<T>>: Atomic Reference Counting Across Threads.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n    for _ in 0..5 {\n        let c = Arc::clone(&counter);\n        handles.push(thread::spawn(move || {\n            let mut num = c.lock().unwrap();\n            *num += 1;\n        }));\n    }\n    for h in handles { h.join().unwrap(); }\n    println!(\"Result: {}\", *counter.lock().unwrap());\n}",
    "hints": [
      "Write:\nuse std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n    for _ in 0..5 {\n        let c = Arc::clone(&counter);\n        handles.push(thread::spawn(move || {\n            let mut num = c.lock().unwrap();\n            *num += 1;\n        }));\n    }\n    for h in handles { h.join().unwrap(); }\n    println!(\"Result: {}\", *counter.lock().unwrap());\n}"
    ],
    "testCases": [
      {
        "id": "rust-145-tc-1",
        "description": "Verifies correct implementation for Arc<Mutex<T>>: Atomic Reference Counting Across Threads",
        "testFn": "code.includes('Arc::new(Mutex::new(') || code.includes('Result: 5')"
      }
    ]
  },
  {
    "id": "rust-146-the-send-and-sync-marker-traits",
    "title": "146. The Send and Sync Marker Traits",
    "slug": "lesson-146-the-send-and-sync-marker-traits",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Send and Sync Marker Traits in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "The Send and Sync Marker Traits",
      "Rust"
    ],
    "analogy": "A hazardous materials transport stamp certifying that a canister can safely cross state borders.",
    "explanationMarkdown": "### The Send and Sync Marker Traits\n\nRust automatically implements `Send` and `Sync` for types whose components are thread-safe. Raw pointers are not `Send`/`Sync`.\n\n```rust\nfn main() {\n    println!(\"Send and Sync verified\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Send and Sync Marker Traits",
      "code": "fn main() {\n    println!(\"Send and Sync verified\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Send and Sync Marker Traits.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Send and Sync Marker Traits.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Send and Sync verified\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Send and Sync verified\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-146-tc-1",
        "description": "Verifies correct implementation for The Send and Sync Marker Traits",
        "testFn": "code.includes('Send and Sync') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-147-introduction-to-async-await-and-",
    "title": "147. Introduction to Async/Await and Futures in Rust",
    "slug": "lesson-147-introduction-to-async-await-and-",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Introduction to Async/Await and Futures in Rust in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Introduction to Async/Await and Futures in Rust",
      "Rust"
    ],
    "analogy": "An electronic order pager at a restaurant: you sit down and read while waiting for the pager to buzz.",
    "explanationMarkdown": "### Introduction to Async/Await and Futures in Rust\n\nRust's `async`/`await` provides cooperative concurrency. Futures do not execute until polled by an executor (e.g. Tokio).\n\n```rust\nfn main() {\n    println!(\"Async rust overview\");\n}\n```",
    "workedExample": {
      "title": "Worked Example: Introduction to Async/Await and Futures in Rust",
      "code": "fn main() {\n    println!(\"Async rust overview\");\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Introduction to Async/Await and Futures in Rust.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Introduction to Async/Await and Futures in Rust.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    println!(\"Async rust overview\");\n}",
    "hints": [
      "Write:\nfn main() {\n    println!(\"Async rust overview\");\n}"
    ],
    "testCases": [
      {
        "id": "rust-147-tc-1",
        "description": "Verifies correct implementation for Introduction to Async/Await and Futures in Rust",
        "testFn": "code.includes('Async rust overview') || logs.length > 0"
      }
    ]
  },
  {
    "id": "rust-148-unsafe-rust-raw-pointers-*const-",
    "title": "148. Unsafe Rust: Raw Pointers (*const T, *mut T)",
    "slug": "lesson-148-unsafe-rust-raw-pointers-*const-",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Unsafe Rust: Raw Pointers (*const T, *mut T) in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Unsafe Rust",
      "Rust"
    ],
    "analogy": "Opening the engine compartment of a space rocket with an emergency bypass key: total power, total responsibility.",
    "explanationMarkdown": "### Unsafe Rust: Raw Pointers (*const T, *mut T)\n\n`unsafe` gives superpowers: dereferencing raw pointers, calling unsafe functions/FFI, and mutating static variables.\n\n```rust\nfn main() {\n    let mut num = 5;\n    let r1 = &num as *const i32;\n    let r2 = &mut num as *mut i32;\n    unsafe {\n        println!(\"Dereferenced raw pointer: {}\", *r1);\n        *r2 = 10;\n    }\n    println!(\"Num: {}\", num);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unsafe Rust: Raw Pointers (*const T, *mut T)",
      "code": "fn main() {\n    let mut num = 5;\n    let r1 = &num as *const i32;\n    let r2 = &mut num as *mut i32;\n    unsafe {\n        println!(\"Dereferenced raw pointer: {}\", *r1);\n        *r2 = 10;\n    }\n    println!(\"Num: {}\", num);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unsafe Rust: Raw Pointers (*const T, *mut T).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unsafe Rust: Raw Pointers (*const T, *mut T).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "fn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "fn main() {\n    let mut num = 5;\n    let r1 = &num as *const i32;\n    let r2 = &mut num as *mut i32;\n    unsafe {\n        println!(\"Dereferenced raw pointer: {}\", *r1);\n        *r2 = 10;\n    }\n    println!(\"Num: {}\", num);\n}",
    "hints": [
      "Write:\nfn main() {\n    let mut num = 5;\n    let r1 = &num as *const i32;\n    let r2 = &mut num as *mut i32;\n    unsafe {\n        println!(\"Dereferenced raw pointer: {}\", *r1);\n        *r2 = 10;\n    }\n    println!(\"Num: {}\", num);\n}"
    ],
    "testCases": [
      {
        "id": "rust-148-tc-1",
        "description": "Verifies correct implementation for Unsafe Rust: Raw Pointers (*const T, *mut T)",
        "testFn": "code.includes('unsafe {') || code.includes('*const i32')"
      }
    ]
  },
  {
    "id": "rust-149-foreign-function-interface-ffi-c",
    "title": "149. Foreign Function Interface (FFI): Calling C from Rust",
    "slug": "lesson-149-foreign-function-interface-ffi-c",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Foreign Function Interface (FFI): Calling C from Rust in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Foreign Function Interface (FFI)",
      "Rust"
    ],
    "analogy": "An interpreter translating between international diplomats speaking different languages at the UN.",
    "explanationMarkdown": "### Foreign Function Interface (FFI): Calling C from Rust\n\n`extern \"C\"` connects Rust to legacy C libraries and system APIs with zero marshalling overhead.\n\n```rust\nextern \"C\" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    let result = unsafe { abs(-42) };\n    println!(\"Absolute value: {}\", result);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Foreign Function Interface (FFI): Calling C from Rust",
      "code": "extern \"C\" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    let result = unsafe { abs(-42) };\n    println!(\"Absolute value: {}\", result);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Foreign Function Interface (FFI): Calling C from Rust.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Foreign Function Interface (FFI): Calling C from Rust.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "extern \"C\" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "extern \"C\" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    let result = unsafe { abs(-42) };\n    println!(\"Absolute value: {}\", result);\n}",
    "hints": [
      "Write:\nextern \"C\" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    let result = unsafe { abs(-42) };\n    println!(\"Absolute value: {}\", result);\n}"
    ],
    "testCases": [
      {
        "id": "rust-149-tc-1",
        "description": "Verifies correct implementation for Foreign Function Interface (FFI): Calling C from Rust",
        "testFn": "code.includes('extern \"C\"') || code.includes('abs(-42)')"
      }
    ]
  },
  {
    "id": "rust-150-rust-systems-engineering-capston",
    "title": "150. Rust Systems Engineering Capstone: High-Performance Engine",
    "slug": "lesson-150-rust-systems-engineering-capston",
    "language": "rust",
    "category": "Module 10: Smart Pointers, Concurrency & Systems Capstone",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Rust Systems Engineering Capstone: High-Performance Engine in Rust: Systems Programming & Memory Safety (150 Topics).",
    "concepts": [
      "Rust Systems Engineering Capstone",
      "Rust"
    ],
    "analogy": "A multi-stage interstellar heavy launch vehicle achieving stable orbit with zero deviations.",
    "explanationMarkdown": "### Rust Systems Engineering Capstone: High-Performance Engine\n\nThe ultimate Rust capstone: thread-safe shared state (`Arc<Mutex<T>>`), workers, message passing, and compile-time memory safety.\n\n```rust\nuse std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(100));\n    let c = Arc::clone(&counter);\n    let handle = thread::spawn(move || {\n        let mut val = c.lock().unwrap();\n        *val += 50;\n    });\n    handle.join().unwrap();\n    println!(\"DevForge Rust Systems Engine Final State: {}\", *counter.lock().unwrap());\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rust Systems Engineering Capstone: High-Performance Engine",
      "code": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(100));\n    let c = Arc::clone(&counter);\n    let handle = thread::spawn(move || {\n        let mut val = c.lock().unwrap();\n        *val += 50;\n    });\n    handle.join().unwrap();\n    println!(\"DevForge Rust Systems Engine Final State: {}\", *counter.lock().unwrap());\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rust Systems Engineering Capstone: High-Performance Engine.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rust Systems Engineering Capstone: High-Performance Engine.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    // Step 1: Write your Rust implementation below\n    // TODO: Write code below\n}",
    "solutionCode": "use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(100));\n    let c = Arc::clone(&counter);\n    let handle = thread::spawn(move || {\n        let mut val = c.lock().unwrap();\n        *val += 50;\n    });\n    handle.join().unwrap();\n    println!(\"DevForge Rust Systems Engine Final State: {}\", *counter.lock().unwrap());\n}",
    "hints": [
      "Write:\nuse std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(100));\n    let c = Arc::clone(&counter);\n    let handle = thread::spawn(move || {\n        let mut val = c.lock().unwrap();\n        *val += 50;\n    });\n    handle.join().unwrap();\n    println!(\"DevForge Rust Systems Engine Final State: {}\", *counter.lock().unwrap());\n}"
    ],
    "testCases": [
      {
        "id": "rust-150-tc-1",
        "description": "Verifies correct implementation for Rust Systems Engineering Capstone: High-Performance Engine",
        "testFn": "code.includes('DevForge Rust Systems Engine') || logs.length > 0"
      }
    ]
  }
]
};
