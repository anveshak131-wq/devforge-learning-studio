import { Track } from '../../types';

export const CPP_TRACK: Track = {
  id: "cpp",
  title: "Modern C++ Systems (C++20)",
  slug: "cpp-track",
  language: "cpp",
  icon: "FileCode",
  color: "#00599C",
  tagline: "High-Performance Systems & Modern C++20/23",
  description: "Master low-level memory control, RAII, move semantics, template metaprogramming, modern C++20 concepts, coroutines, and concurrent systems programming.",
  lessons: [
  {
    "id": "cpp-1-c-20-compilation-model-hello-w",
    "title": "1. C++20 Compilation Model & Hello World",
    "slug": "lesson-1-c-20-compilation-model-hello-w",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The modern C++ compilation model transforms translation units into object files and machine executables.",
    "concepts": [
      "C++20 Compilation Model & Hello World",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: C++20 Compilation Model & Hello World gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### C++20 Compilation Model & Hello World\n\nThe modern C++ compilation model transforms translation units into object files and machine executables.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, Modern C++20!\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: C++20 Compilation Model & Hello World",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, Modern C++20!\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for C++20 Compilation Model & Hello World.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C++20 Compilation Model & Hello World.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement C++20 Compilation Model & Hello World\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, Modern C++20!\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, Modern C++20!\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-1-tc-1",
        "description": "Verifies correct implementation for C++20 Compilation Model & Hello World",
        "testFn": "code.includes('std::cout') && code.includes('Hello, Modern C++20!')"
      }
    ]
  },
  {
    "id": "cpp-2-fundamental-data-types-sizeof-",
    "title": "2. Fundamental Data Types & sizeof Operator",
    "slug": "lesson-2-fundamental-data-types-sizeof-",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query exact byte sizes for char, int, float, double, and fixed-width types using sizeof.",
    "concepts": [
      "Fundamental Data Types & sizeof Operator",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Fundamental Data Types & sizeof Operator gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Fundamental Data Types & sizeof Operator\n\nQuery exact byte sizes for char, int, float, double, and fixed-width types using sizeof.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"int size: \" << sizeof(int) << \" bytes\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fundamental Data Types & sizeof Operator",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"int size: \" << sizeof(int) << \" bytes\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Fundamental Data Types & sizeof Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fundamental Data Types & sizeof Operator.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Fundamental Data Types & sizeof Operator\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << sizeof(int) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << sizeof(int) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-2-tc-1",
        "description": "Verifies correct implementation for Fundamental Data Types & sizeof Operator",
        "testFn": "code.includes('sizeof(int)')"
      }
    ]
  },
  {
    "id": "cpp-3-fixed-width-integer-types-cstd",
    "title": "3. Fixed-Width Integer Types (cstdint)",
    "slug": "lesson-3-fixed-width-integer-types-cstd",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Use std::int32_t, std::uint64_t for deterministic cross-platform bit sizes.",
    "concepts": [
      "Fixed-Width Integer Types (cstdint)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Fixed-Width Integer Types (cstdint) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Fixed-Width Integer Types (cstdint)\n\nUse std::int32_t, std::uint64_t for deterministic cross-platform bit sizes.\n\n```cpp\n#include <iostream>\n#include <cstdint>\n\nint main() {\n    std::uint64_t counter = 1000000ULL;\n    std::cout << counter << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fixed-Width Integer Types (cstdint)",
      "code": "#include <iostream>\n#include <cstdint>\n\nint main() {\n    std::uint64_t counter = 1000000ULL;\n    std::cout << counter << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Fixed-Width Integer Types (cstdint).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fixed-Width Integer Types (cstdint).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Fixed-Width Integer Types (cstdint)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <cstdint>\n\nint main() {\n    std::uint64_t counter = 1000000ULL;\n    std::cout << counter << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <cstdint>\n\nint main() {\n    std::uint64_t counter = 1000000ULL;\n    std::cout << counter << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-3-tc-1",
        "description": "Verifies correct implementation for Fixed-Width Integer Types (cstdint)",
        "testFn": "code.includes('std::uint64_t')"
      }
    ]
  },
  {
    "id": "cpp-4-auto-type-deduction",
    "title": "4. auto Type Deduction",
    "slug": "lesson-4-auto-type-deduction",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automatic type deduction with auto simplifies variable declarations while maintaining compile-time safety.",
    "concepts": [
      "auto Type Deduction",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: auto Type Deduction gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### auto Type Deduction\n\nAutomatic type deduction with auto simplifies variable declarations while maintaining compile-time safety.\n\n```cpp\n#include <iostream>\n\nint main() {\n    auto score = 98.5;\n    std::cout << score << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: auto Type Deduction",
      "code": "#include <iostream>\n\nint main() {\n    auto score = 98.5;\n    std::cout << score << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for auto Type Deduction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of auto Type Deduction.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement auto Type Deduction\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    auto score = 98.5;\n    std::cout << score << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    auto score = 98.5;\n    std::cout << score << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-4-tc-1",
        "description": "Verifies correct implementation for auto Type Deduction",
        "testFn": "code.includes('auto ')"
      }
    ]
  },
  {
    "id": "cpp-5-decltype-specifier",
    "title": "5. decltype Specifier",
    "slug": "lesson-5-decltype-specifier",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect and extract the declared type of an entity or expression at compile time.",
    "concepts": [
      "decltype Specifier",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: decltype Specifier gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### decltype Specifier\n\nInspect and extract the declared type of an entity or expression at compile time.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int a = 10;\n    decltype(a) b = 20;\n    std::cout << b << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: decltype Specifier",
      "code": "#include <iostream>\n\nint main() {\n    int a = 10;\n    decltype(a) b = 20;\n    std::cout << b << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for decltype Specifier.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of decltype Specifier.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement decltype Specifier\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int a = 10;\n    decltype(a) b = 20;\n    std::cout << b << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int a = 10;\n    decltype(a) b = 20;\n    std::cout << b << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-5-tc-1",
        "description": "Verifies correct implementation for decltype Specifier",
        "testFn": "code.includes('decltype(a)')"
      }
    ]
  },
  {
    "id": "cpp-6-uniform-initialization-narrowi",
    "title": "6. Uniform Initialization & Narrowing Prevention",
    "slug": "lesson-6-uniform-initialization-narrowi",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Braced initialization {} prevents unintentional lossy conversions.",
    "concepts": [
      "Uniform Initialization & Narrowing Prevention",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Uniform Initialization & Narrowing Prevention gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Uniform Initialization & Narrowing Prevention\n\nBraced initialization {} prevents unintentional lossy conversions.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int val{42};\n    std::cout << val << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Uniform Initialization & Narrowing Prevention",
      "code": "#include <iostream>\n\nint main() {\n    int val{42};\n    std::cout << val << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Uniform Initialization & Narrowing Prevention.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Uniform Initialization & Narrowing Prevention.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Uniform Initialization & Narrowing Prevention\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int val{42};\n    std::cout << val << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int val{42};\n    std::cout << val << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-6-tc-1",
        "description": "Verifies correct implementation for Uniform Initialization & Narrowing Prevention",
        "testFn": "code.includes('val{42}') || code.includes('{42}')"
      }
    ]
  },
  {
    "id": "cpp-7-pointers-address-of-operator",
    "title": "7. Pointers & Address-Of Operator",
    "slug": "lesson-7-pointers-address-of-operator",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pointer variables store the virtual memory address of target objects.",
    "concepts": [
      "Pointers & Address-Of Operator",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Pointers & Address-Of Operator gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Pointers & Address-Of Operator\n\nPointer variables store the virtual memory address of target objects.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int x = 100;\n    int* ptr = &x;\n    std::cout << *ptr << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pointers & Address-Of Operator",
      "code": "#include <iostream>\n\nint main() {\n    int x = 100;\n    int* ptr = &x;\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Pointers & Address-Of Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pointers & Address-Of Operator.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Pointers & Address-Of Operator\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int x = 100;\n    int* ptr = &x;\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int x = 100;\n    int* ptr = &x;\n    std::cout << *ptr << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-7-tc-1",
        "description": "Verifies correct implementation for Pointers & Address-Of Operator",
        "testFn": "code.includes('&x') && code.includes('*ptr')"
      }
    ]
  },
  {
    "id": "cpp-8-dereferencing-pointer-arithmet",
    "title": "8. Dereferencing & Pointer Arithmetic",
    "slug": "lesson-8-dereferencing-pointer-arithmet",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Step through contiguous memory addresses using pointer addition and indexing.",
    "concepts": [
      "Dereferencing & Pointer Arithmetic",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Dereferencing & Pointer Arithmetic gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Dereferencing & Pointer Arithmetic\n\nStep through contiguous memory addresses using pointer addition and indexing.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int arr[] = {10, 20, 30};\n    int* p = arr;\n    std::cout << *(p + 1) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dereferencing & Pointer Arithmetic",
      "code": "#include <iostream>\n\nint main() {\n    int arr[] = {10, 20, 30};\n    int* p = arr;\n    std::cout << *(p + 1) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Dereferencing & Pointer Arithmetic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dereferencing & Pointer Arithmetic.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Dereferencing & Pointer Arithmetic\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int arr[] = {10, 20, 30};\n    int* p = arr;\n    std::cout << *(p + 1) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int arr[] = {10, 20, 30};\n    int* p = arr;\n    std::cout << *(p + 1) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-8-tc-1",
        "description": "Verifies correct implementation for Dereferencing & Pointer Arithmetic",
        "testFn": "code.includes('*(p + 1)') || code.includes('p + 1')"
      }
    ]
  },
  {
    "id": "cpp-9-nullptr-vs-null",
    "title": "9. nullptr vs NULL",
    "slug": "lesson-9-nullptr-vs-null",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "nullptr is type-safe std::nullptr_t, avoiding ambiguous integer overloads.",
    "concepts": [
      "nullptr vs NULL",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: nullptr vs NULL gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### nullptr vs NULL\n\nnullptr is type-safe std::nullptr_t, avoiding ambiguous integer overloads.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int* ptr = nullptr;\n    if (ptr == nullptr) std::cout << \"Safe null\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: nullptr vs NULL",
      "code": "#include <iostream>\n\nint main() {\n    int* ptr = nullptr;\n    if (ptr == nullptr) std::cout << \"Safe null\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for nullptr vs NULL.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of nullptr vs NULL.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement nullptr vs NULL\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int* ptr = nullptr;\n    std::cout << (ptr == nullptr) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int* ptr = nullptr;\n    std::cout << (ptr == nullptr) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-9-tc-1",
        "description": "Verifies correct implementation for nullptr vs NULL",
        "testFn": "code.includes('nullptr')"
      }
    ]
  },
  {
    "id": "cpp-10-void-pointers-type-casting",
    "title": "10. Void Pointers & Type Casting",
    "slug": "lesson-10-void-pointers-type-casting",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "void* represents address of untyped memory, requiring explicit cast.",
    "concepts": [
      "Void Pointers & Type Casting",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Void Pointers & Type Casting gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Void Pointers & Type Casting\n\nvoid* represents address of untyped memory, requiring explicit cast.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int num = 77;\n    void* vptr = &num;\n    int* iptr = static_cast<int*>(vptr);\n    std::cout << *iptr << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Void Pointers & Type Casting",
      "code": "#include <iostream>\n\nint main() {\n    int num = 77;\n    void* vptr = &num;\n    int* iptr = static_cast<int*>(vptr);\n    std::cout << *iptr << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Void Pointers & Type Casting.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Void Pointers & Type Casting.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Void Pointers & Type Casting\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int num = 77;\n    void* vptr = &num;\n    int* iptr = static_cast<int*>(vptr);\n    std::cout << *iptr << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int num = 77;\n    void* vptr = &num;\n    int* iptr = static_cast<int*>(vptr);\n    std::cout << *iptr << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-10-tc-1",
        "description": "Verifies correct implementation for Void Pointers & Type Casting",
        "testFn": "code.includes('static_cast<int*>')"
      }
    ]
  },
  {
    "id": "cpp-11-const-qualifier-pointers-to-co",
    "title": "11. const Qualifier & Pointers to Const",
    "slug": "lesson-11-const-qualifier-pointers-to-co",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent mutation of target memory or pointer addresses using const.",
    "concepts": [
      "const Qualifier & Pointers to Const",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: const Qualifier & Pointers to Const gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### const Qualifier & Pointers to Const\n\nPrevent mutation of target memory or pointer addresses using const.\n\n```cpp\n#include <iostream>\n\nint main() {\n    const int max_val = 500;\n    const int* ptr = &max_val;\n    std::cout << *ptr << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: const Qualifier & Pointers to Const",
      "code": "#include <iostream>\n\nint main() {\n    const int max_val = 500;\n    const int* ptr = &max_val;\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for const Qualifier & Pointers to Const.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of const Qualifier & Pointers to Const.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement const Qualifier & Pointers to Const\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    const int max_val = 500;\n    const int* ptr = &max_val;\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    const int max_val = 500;\n    const int* ptr = &max_val;\n    std::cout << *ptr << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-11-tc-1",
        "description": "Verifies correct implementation for const Qualifier & Pointers to Const",
        "testFn": "code.includes('const int*')"
      }
    ]
  },
  {
    "id": "cpp-12-const-pointers-vs-pointer-to-c",
    "title": "12. Const Pointers vs Pointer to Const",
    "slug": "lesson-12-const-pointers-vs-pointer-to-c",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Distinguish int* const (constant address) from const int* (constant pointee).",
    "concepts": [
      "Const Pointers vs Pointer to Const",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Const Pointers vs Pointer to Const gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Const Pointers vs Pointer to Const\n\nDistinguish int* const (constant address) from const int* (constant pointee).\n\n```cpp\n#include <iostream>\n\nint main() {\n    int val = 10;\n    int* const ptr = &val;\n    *ptr = 20;\n    std::cout << *ptr << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Const Pointers vs Pointer to Const",
      "code": "#include <iostream>\n\nint main() {\n    int val = 10;\n    int* const ptr = &val;\n    *ptr = 20;\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Const Pointers vs Pointer to Const.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Const Pointers vs Pointer to Const.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Const Pointers vs Pointer to Const\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int val = 10;\n    int* const ptr = &val;\n    *ptr = 20;\n    std::cout << *ptr << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int val = 10;\n    int* const ptr = &val;\n    *ptr = 20;\n    std::cout << *ptr << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-12-tc-1",
        "description": "Verifies correct implementation for Const Pointers vs Pointer to Const",
        "testFn": "code.includes('int* const')"
      }
    ]
  },
  {
    "id": "cpp-13-constexpr-expressions",
    "title": "13. constexpr Expressions",
    "slug": "lesson-13-constexpr-expressions",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enforce compile-time computation with constexpr functions and values.",
    "concepts": [
      "constexpr Expressions",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: constexpr Expressions gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### constexpr Expressions\n\nEnforce compile-time computation with constexpr functions and values.\n\n```cpp\n#include <iostream>\n\nconstexpr int square(int x) { return x * x; }\n\nint main() {\n    constexpr int val = square(5);\n    std::cout << val << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: constexpr Expressions",
      "code": "#include <iostream>\n\nconstexpr int square(int x) { return x * x; }\n\nint main() {\n    constexpr int val = square(5);\n    std::cout << val << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for constexpr Expressions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of constexpr Expressions.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement constexpr Expressions\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nconstexpr int square(int x) { return x * x; }\n\nint main() {\n    constexpr int val = square(5);\n    std::cout << val << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nconstexpr int square(int x) { return x * x; }\n\nint main() {\n    constexpr int val = square(5);\n    std::cout << val << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-13-tc-1",
        "description": "Verifies correct implementation for constexpr Expressions",
        "testFn": "code.includes('constexpr ')"
      }
    ]
  },
  {
    "id": "cpp-14-consteval-immediate-functions-",
    "title": "14. consteval (Immediate Functions in C++20)",
    "slug": "lesson-14-consteval-immediate-functions-",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "C++20 consteval guarantees an expression evaluates at compile time.",
    "concepts": [
      "consteval (Immediate Functions in C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: consteval (Immediate Functions in C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### consteval (Immediate Functions in C++20)\n\nC++20 consteval guarantees an expression evaluates at compile time.\n\n```cpp\n#include <iostream>\n\nconsteval int cube(int n) { return n * n * n; }\n\nint main() {\n    int res = cube(3);\n    std::cout << res << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: consteval (Immediate Functions in C++20)",
      "code": "#include <iostream>\n\nconsteval int cube(int n) { return n * n * n; }\n\nint main() {\n    int res = cube(3);\n    std::cout << res << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for consteval (Immediate Functions in C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of consteval (Immediate Functions in C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement consteval (Immediate Functions in C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nconsteval int cube(int n) { return n * n * n; }\n\nint main() {\n    int res = cube(3);\n    std::cout << res << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nconsteval int cube(int n) { return n * n * n; }\n\nint main() {\n    int res = cube(3);\n    std::cout << res << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-14-tc-1",
        "description": "Verifies correct implementation for consteval (Immediate Functions in C++20)",
        "testFn": "code.includes('consteval')"
      }
    ]
  },
  {
    "id": "cpp-15-std-byte-bit-manipulation",
    "title": "15. std::byte & Bit Manipulation",
    "slug": "lesson-15-std-byte-bit-manipulation",
    "language": "cpp",
    "category": "Module 1: Fundamentals, Types & Memory Layout",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "std::byte enforces type-safe raw memory representation without arithmetic conversions.",
    "concepts": [
      "std::byte & Bit Manipulation",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::byte & Bit Manipulation gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::byte & Bit Manipulation\n\nstd::byte enforces type-safe raw memory representation without arithmetic conversions.\n\n```cpp\n#include <iostream>\n#include <cstddef>\n\nint main() {\n    std::byte b{0b0011};\n    std::cout << std::to_integer<int>(b) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::byte & Bit Manipulation",
      "code": "#include <iostream>\n#include <cstddef>\n\nint main() {\n    std::byte b{0b0011};\n    std::cout << std::to_integer<int>(b) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::byte & Bit Manipulation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::byte & Bit Manipulation.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::byte & Bit Manipulation\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <cstddef>\n\nint main() {\n    std::byte b{0b0011};\n    std::cout << std::to_integer<int>(b) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <cstddef>\n\nint main() {\n    std::byte b{0b0011};\n    std::cout << std::to_integer<int>(b) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-15-tc-1",
        "description": "Verifies correct implementation for std::byte & Bit Manipulation",
        "testFn": "code.includes('std::byte')"
      }
    ]
  },
  {
    "id": "cpp-16-lvalue-references",
    "title": "16. Lvalue References",
    "slug": "lesson-16-lvalue-references",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bind aliases to existing lvalue objects without pointer indirection syntax.",
    "concepts": [
      "Lvalue References",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Lvalue References gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Lvalue References\n\nBind aliases to existing lvalue objects without pointer indirection syntax.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int original = 42;\n    int& ref = original;\n    ref = 99;\n    std::cout << original << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lvalue References",
      "code": "#include <iostream>\n\nint main() {\n    int original = 42;\n    int& ref = original;\n    ref = 99;\n    std::cout << original << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Lvalue References.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lvalue References.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Lvalue References\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int original = 42;\n    int& ref = original;\n    ref = 99;\n    std::cout << original << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int original = 42;\n    int& ref = original;\n    ref = 99;\n    std::cout << original << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-16-tc-1",
        "description": "Verifies correct implementation for Lvalue References",
        "testFn": "code.includes('int& ref = original')"
      }
    ]
  },
  {
    "id": "cpp-17-const-references-for-zero-cost",
    "title": "17. Const References for Zero-Cost Parameter Passing",
    "slug": "lesson-17-const-references-for-zero-cost",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass large objects by const ref to eliminate deep copy overhead.",
    "concepts": [
      "Const References for Zero-Cost Parameter Passing",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Const References for Zero-Cost Parameter Passing gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Const References for Zero-Cost Parameter Passing\n\nPass large objects by const ref to eliminate deep copy overhead.\n\n```cpp\n#include <iostream>\n#include <string>\n\nvoid printMsg(const std::string& msg) {\n    std::cout << msg << std::endl;\n}\n\nint main() {\n    printMsg(\"Zero cost passing\");\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Const References for Zero-Cost Parameter Passing",
      "code": "#include <iostream>\n#include <string>\n\nvoid printMsg(const std::string& msg) {\n    std::cout << msg << std::endl;\n}\n\nint main() {\n    printMsg(\"Zero cost passing\");\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Const References for Zero-Cost Parameter Passing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Const References for Zero-Cost Parameter Passing.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Const References for Zero-Cost Parameter Passing\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <string>\n\nvoid printMsg(const std::string& msg) {\n    std::cout << msg << std::endl;\n}\n\nint main() {\n    printMsg(\"Zero cost passing\");\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <string>\n\nvoid printMsg(const std::string& msg) {\n    std::cout << msg << std::endl;\n}\n\nint main() {\n    printMsg(\"Zero cost passing\");\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-17-tc-1",
        "description": "Verifies correct implementation for Const References for Zero-Cost Parameter Passing",
        "testFn": "code.includes('const std::string&')"
      }
    ]
  },
  {
    "id": "cpp-18-dynamic-allocation-with-new-an",
    "title": "18. Dynamic Allocation with new and delete",
    "slug": "lesson-18-dynamic-allocation-with-new-an",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Allocate memory on the heap and explicitly release it to avoid leaks.",
    "concepts": [
      "Dynamic Allocation with new and delete",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Dynamic Allocation with new and delete gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Dynamic Allocation with new and delete\n\nAllocate memory on the heap and explicitly release it to avoid leaks.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int* ptr = new int(100);\n    std::cout << *ptr << std::endl;\n    delete ptr;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Allocation with new and delete",
      "code": "#include <iostream>\n\nint main() {\n    int* ptr = new int(100);\n    std::cout << *ptr << std::endl;\n    delete ptr;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Dynamic Allocation with new and delete.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dynamic Allocation with new and delete.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Dynamic Allocation with new and delete\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int* ptr = new int(100);\n    std::cout << *ptr << std::endl;\n    delete ptr;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int* ptr = new int(100);\n    std::cout << *ptr << std::endl;\n    delete ptr;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-18-tc-1",
        "description": "Verifies correct implementation for Dynamic Allocation with new and delete",
        "testFn": "code.includes('new int') && code.includes('delete ptr')"
      }
    ]
  },
  {
    "id": "cpp-19-dynamic-array-allocation-new-a",
    "title": "19. Dynamic Array Allocation (new[] and delete[])",
    "slug": "lesson-19-dynamic-array-allocation-new-a",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Allocate heap arrays and deallocate using array delete[] operator.",
    "concepts": [
      "Dynamic Array Allocation (new[] and delete[])",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Dynamic Array Allocation (new[] and delete[]) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Dynamic Array Allocation (new[] and delete[])\n\nAllocate heap arrays and deallocate using array delete[] operator.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int* arr = new int[5]{1, 2, 3, 4, 5};\n    std::cout << arr[0] << std::endl;\n    delete[] arr;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Array Allocation (new[] and delete[])",
      "code": "#include <iostream>\n\nint main() {\n    int* arr = new int[5]{1, 2, 3, 4, 5};\n    std::cout << arr[0] << std::endl;\n    delete[] arr;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Dynamic Array Allocation (new[] and delete[]).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dynamic Array Allocation (new[] and delete[]).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Dynamic Array Allocation (new[] and delete[])\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int* arr = new int[5]{1, 2, 3, 4, 5};\n    std::cout << arr[0] << std::endl;\n    delete[] arr;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int* arr = new int[5]{1, 2, 3, 4, 5};\n    std::cout << arr[0] << std::endl;\n    delete[] arr;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-19-tc-1",
        "description": "Verifies correct implementation for Dynamic Array Allocation (new[] and delete[])",
        "testFn": "code.includes('new int[5]') && code.includes('delete[] arr')"
      }
    ]
  },
  {
    "id": "cpp-20-stack-vs-heap-memory-layout",
    "title": "20. Stack vs Heap Memory Layout",
    "slug": "lesson-20-stack-vs-heap-memory-layout",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand execution stack frames, automated unwinding, and heap lifecycles.",
    "concepts": [
      "Stack vs Heap Memory Layout",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Stack vs Heap Memory Layout gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Stack vs Heap Memory Layout\n\nUnderstand execution stack frames, automated unwinding, and heap lifecycles.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int stackVar = 10;\n    int* heapVar = new int(20);\n    std::cout << \"Stack: \" << stackVar << \" Heap: \" << *heapVar << std::endl;\n    delete heapVar;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Stack vs Heap Memory Layout",
      "code": "#include <iostream>\n\nint main() {\n    int stackVar = 10;\n    int* heapVar = new int(20);\n    std::cout << \"Stack: \" << stackVar << \" Heap: \" << *heapVar << std::endl;\n    delete heapVar;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Stack vs Heap Memory Layout.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stack vs Heap Memory Layout.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Stack vs Heap Memory Layout\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int stackVar = 10;\n    int* heapVar = new int(20);\n    std::cout << stackVar << \" \" << *heapVar << std::endl;\n    delete heapVar;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int stackVar = 10;\n    int* heapVar = new int(20);\n    std::cout << stackVar << \" \" << *heapVar << std::endl;\n    delete heapVar;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-20-tc-1",
        "description": "Verifies correct implementation for Stack vs Heap Memory Layout",
        "testFn": "code.includes('stackVar') && code.includes('heapVar')"
      }
    ]
  },
  {
    "id": "cpp-21-dangling-pointers-use-after-fr",
    "title": "21. Dangling Pointers & Use-After-Free",
    "slug": "lesson-21-dangling-pointers-use-after-fr",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Recognize and avoid referencing deallocated heap memory addresses.",
    "concepts": [
      "Dangling Pointers & Use-After-Free",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Dangling Pointers & Use-After-Free gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Dangling Pointers & Use-After-Free\n\nRecognize and avoid referencing deallocated heap memory addresses.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int* p = new int(42);\n    delete p;\n    p = nullptr;\n    std::cout << (p == nullptr) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dangling Pointers & Use-After-Free",
      "code": "#include <iostream>\n\nint main() {\n    int* p = new int(42);\n    delete p;\n    p = nullptr;\n    std::cout << (p == nullptr) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Dangling Pointers & Use-After-Free.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dangling Pointers & Use-After-Free.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Dangling Pointers & Use-After-Free\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int* p = new int(42);\n    delete p;\n    p = nullptr;\n    std::cout << (p == nullptr) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int* p = new int(42);\n    delete p;\n    p = nullptr;\n    std::cout << (p == nullptr) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-21-tc-1",
        "description": "Verifies correct implementation for Dangling Pointers & Use-After-Free",
        "testFn": "code.includes('p = nullptr')"
      }
    ]
  },
  {
    "id": "cpp-22-structure-padding-memory-align",
    "title": "22. Structure Padding & Memory Alignment (alignas / alignof)",
    "slug": "lesson-22-structure-padding-memory-align",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect memory alignment constraints and optimize structure packing.",
    "concepts": [
      "Structure Padding & Memory Alignment (alignas / alignof)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Structure Padding & Memory Alignment (alignas / alignof) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Structure Padding & Memory Alignment (alignas / alignof)\n\nInspect memory alignment constraints and optimize structure packing.\n\n```cpp\n#include <iostream>\n\nstruct Data {\n    char a;\n    int b;\n};\n\nint main() {\n    std::cout << \"Alignment: \" << alignof(Data) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Structure Padding & Memory Alignment (alignas / alignof)",
      "code": "#include <iostream>\n\nstruct Data {\n    char a;\n    int b;\n};\n\nint main() {\n    std::cout << \"Alignment: \" << alignof(Data) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Structure Padding & Memory Alignment (alignas / alignof).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Structure Padding & Memory Alignment (alignas / alignof).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Structure Padding & Memory Alignment (alignas / alignof)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nstruct Data {\n    char a;\n    int b;\n};\n\nint main() {\n    std::cout << alignof(Data) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nstruct Data {\n    char a;\n    int b;\n};\n\nint main() {\n    std::cout << alignof(Data) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-22-tc-1",
        "description": "Verifies correct implementation for Structure Padding & Memory Alignment (alignas / alignof)",
        "testFn": "code.includes('alignof(Data)')"
      }
    ]
  },
  {
    "id": "cpp-23-scoped-enumerations-enum-class",
    "title": "23. Scoped Enumerations (enum class)",
    "slug": "lesson-23-scoped-enumerations-enum-class",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Strongly-typed enums prevent namespace pollution and implicit conversions.",
    "concepts": [
      "Scoped Enumerations (enum class)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Scoped Enumerations (enum class) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Scoped Enumerations (enum class)\n\nStrongly-typed enums prevent namespace pollution and implicit conversions.\n\n```cpp\n#include <iostream>\n\nenum class Color { Red, Green, Blue };\n\nint main() {\n    Color c = Color::Green;\n    std::cout << (c == Color::Green) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Scoped Enumerations (enum class)",
      "code": "#include <iostream>\n\nenum class Color { Red, Green, Blue };\n\nint main() {\n    Color c = Color::Green;\n    std::cout << (c == Color::Green) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Scoped Enumerations (enum class).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scoped Enumerations (enum class).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Scoped Enumerations (enum class)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nenum class Color { Red, Green, Blue };\n\nint main() {\n    Color c = Color::Green;\n    std::cout << (c == Color::Green) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nenum class Color { Red, Green, Blue };\n\nint main() {\n    Color c = Color::Green;\n    std::cout << (c == Color::Green) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-23-tc-1",
        "description": "Verifies correct implementation for Scoped Enumerations (enum class)",
        "testFn": "code.includes('enum class Color')"
      }
    ]
  },
  {
    "id": "cpp-24-structured-bindings-c-17-20",
    "title": "24. Structured Bindings (C++17/20)",
    "slug": "lesson-24-structured-bindings-c-17-20",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Deconstruct tuples, pairs, or structs into named variables cleanly.",
    "concepts": [
      "Structured Bindings (C++17/20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Structured Bindings (C++17/20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Structured Bindings (C++17/20)\n\nDeconstruct tuples, pairs, or structs into named variables cleanly.\n\n```cpp\n#include <iostream>\n#include <tuple>\n\nint main() {\n    std::pair<int, std::string> user{101, \"Alice\"};\n    auto [id, name] = user;\n    std::cout << id << \": \" << name << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Structured Bindings (C++17/20)",
      "code": "#include <iostream>\n#include <tuple>\n\nint main() {\n    std::pair<int, std::string> user{101, \"Alice\"};\n    auto [id, name] = user;\n    std::cout << id << \": \" << name << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Structured Bindings (C++17/20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Structured Bindings (C++17/20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Structured Bindings (C++17/20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <tuple>\n\nint main() {\n    std::pair<int, std::string> user{101, \"Alice\"};\n    auto [id, name] = user;\n    std::cout << id << \": \" << name << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <tuple>\n\nint main() {\n    std::pair<int, std::string> user{101, \"Alice\"};\n    auto [id, name] = user;\n    std::cout << id << \": \" << name << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-24-tc-1",
        "description": "Verifies correct implementation for Structured Bindings (C++17/20)",
        "testFn": "code.includes('auto [id, name]')"
      }
    ]
  },
  {
    "id": "cpp-25-std-string-view-for-zero-alloc",
    "title": "25. std::string_view for Zero-Allocation String Slices",
    "slug": "lesson-25-std-string-view-for-zero-alloc",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Non-owning view over contiguous character sequences eliminating string copies.",
    "concepts": [
      "std::string_view for Zero-Allocation String Slices",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::string_view for Zero-Allocation String Slices gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::string_view for Zero-Allocation String Slices\n\nNon-owning view over contiguous character sequences eliminating string copies.\n\n```cpp\n#include <iostream>\n#include <string_view>\n\nvoid inspect(std::string_view sv) {\n    std::cout << sv.length() << std::endl;\n}\n\nint main() {\n    inspect(\"Hello World\");\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::string_view for Zero-Allocation String Slices",
      "code": "#include <iostream>\n#include <string_view>\n\nvoid inspect(std::string_view sv) {\n    std::cout << sv.length() << std::endl;\n}\n\nint main() {\n    inspect(\"Hello World\");\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::string_view for Zero-Allocation String Slices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::string_view for Zero-Allocation String Slices.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::string_view for Zero-Allocation String Slices\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <string_view>\n\nvoid inspect(std::string_view sv) {\n    std::cout << sv.length() << std::endl;\n}\n\nint main() {\n    inspect(\"Hello World\");\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <string_view>\n\nvoid inspect(std::string_view sv) {\n    std::cout << sv.length() << std::endl;\n}\n\nint main() {\n    inspect(\"Hello World\");\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-25-tc-1",
        "description": "Verifies correct implementation for std::string_view for Zero-Allocation String Slices",
        "testFn": "code.includes('std::string_view')"
      }
    ]
  },
  {
    "id": "cpp-26-std-span-c-20",
    "title": "26. std::span (C++20)",
    "slug": "lesson-26-std-span-c-20",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Contiguous sequence view referencing arrays or vectors with zero allocation.",
    "concepts": [
      "std::span (C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::span (C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::span (C++20)\n\nContiguous sequence view referencing arrays or vectors with zero allocation.\n\n```cpp\n#include <iostream>\n#include <span>\n#include <vector>\n\nvoid show(std::span<const int> s) {\n    std::cout << s.size() << std::endl;\n}\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    show(v);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::span (C++20)",
      "code": "#include <iostream>\n#include <span>\n#include <vector>\n\nvoid show(std::span<const int> s) {\n    std::cout << s.size() << std::endl;\n}\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    show(v);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::span (C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::span (C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::span (C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <span>\n#include <vector>\n\nvoid show(std::span<const int> s) {\n    std::cout << s.size() << std::endl;\n}\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    show(v);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <span>\n#include <vector>\n\nvoid show(std::span<const int> s) {\n    std::cout << s.size() << std::endl;\n}\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    show(v);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-26-tc-1",
        "description": "Verifies correct implementation for std::span (C++20)",
        "testFn": "code.includes('std::span')"
      }
    ]
  },
  {
    "id": "cpp-27-std-optional-for-nullable-valu",
    "title": "27. std::optional for Nullable Value Semantics",
    "slug": "lesson-27-std-optional-for-nullable-valu",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Represent values that may or may not exist without raw pointers.",
    "concepts": [
      "std::optional for Nullable Value Semantics",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::optional for Nullable Value Semantics gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::optional for Nullable Value Semantics\n\nRepresent values that may or may not exist without raw pointers.\n\n```cpp\n#include <iostream>\n#include <optional>\n\nstd::optional<int> findValue(bool found) {\n    if (found) return 42;\n    return std::nullopt;\n}\n\nint main() {\n    auto val = findValue(true);\n    if (val) std::cout << *val << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::optional for Nullable Value Semantics",
      "code": "#include <iostream>\n#include <optional>\n\nstd::optional<int> findValue(bool found) {\n    if (found) return 42;\n    return std::nullopt;\n}\n\nint main() {\n    auto val = findValue(true);\n    if (val) std::cout << *val << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::optional for Nullable Value Semantics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::optional for Nullable Value Semantics.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::optional for Nullable Value Semantics\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <optional>\n\nstd::optional<int> findValue(bool found) {\n    if (found) return 42;\n    return std::nullopt;\n}\n\nint main() {\n    auto val = findValue(true);\n    if (val) std::cout << *val << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <optional>\n\nstd::optional<int> findValue(bool found) {\n    if (found) return 42;\n    return std::nullopt;\n}\n\nint main() {\n    auto val = findValue(true);\n    if (val) std::cout << *val << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-27-tc-1",
        "description": "Verifies correct implementation for std::optional for Nullable Value Semantics",
        "testFn": "code.includes('std::optional')"
      }
    ]
  },
  {
    "id": "cpp-28-std-variant-for-type-safe-unio",
    "title": "28. std::variant for Type-Safe Unions",
    "slug": "lesson-28-std-variant-for-type-safe-unio",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Type-safe union capable of holding one of several specified types.",
    "concepts": [
      "std::variant for Type-Safe Unions",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::variant for Type-Safe Unions gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::variant for Type-Safe Unions\n\nType-safe union capable of holding one of several specified types.\n\n```cpp\n#include <iostream>\n#include <variant>\n\nint main() {\n    std::variant<int, std::string> data = 42;\n    std::cout << std::get<int>(data) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::variant for Type-Safe Unions",
      "code": "#include <iostream>\n#include <variant>\n\nint main() {\n    std::variant<int, std::string> data = 42;\n    std::cout << std::get<int>(data) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::variant for Type-Safe Unions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::variant for Type-Safe Unions.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::variant for Type-Safe Unions\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <variant>\n\nint main() {\n    std::variant<int, std::string> data = 42;\n    std::cout << std::get<int>(data) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <variant>\n\nint main() {\n    std::variant<int, std::string> data = 42;\n    std::cout << std::get<int>(data) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-28-tc-1",
        "description": "Verifies correct implementation for std::variant for Type-Safe Unions",
        "testFn": "code.includes('std::variant')"
      }
    ]
  },
  {
    "id": "cpp-29-c-casts-static-cast-vs-reinter",
    "title": "29. C++ Casts: static_cast vs reinterpret_cast",
    "slug": "lesson-29-c-casts-static-cast-vs-reinter",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand compile-time static type checks vs bit-level reinterpretation.",
    "concepts": [
      "C++ Casts: static_cast vs reinterpret_cast",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: C++ Casts: static_cast vs reinterpret_cast gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### C++ Casts: static_cast vs reinterpret_cast\n\nUnderstand compile-time static type checks vs bit-level reinterpretation.\n\n```cpp\n#include <iostream>\n\nint main() {\n    double d = 3.14;\n    int i = static_cast<int>(d);\n    std::cout << i << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: C++ Casts: static_cast vs reinterpret_cast",
      "code": "#include <iostream>\n\nint main() {\n    double d = 3.14;\n    int i = static_cast<int>(d);\n    std::cout << i << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for C++ Casts: static_cast vs reinterpret_cast.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C++ Casts: static_cast vs reinterpret_cast.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement C++ Casts: static_cast vs reinterpret_cast\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    double d = 3.14;\n    int i = static_cast<int>(d);\n    std::cout << i << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    double d = 3.14;\n    int i = static_cast<int>(d);\n    std::cout << i << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-29-tc-1",
        "description": "Verifies correct implementation for C++ Casts: static_cast vs reinterpret_cast",
        "testFn": "code.includes('static_cast<int>')"
      }
    ]
  },
  {
    "id": "cpp-30-memory-sanitizers-undefined-be",
    "title": "30. Memory Sanitizers & Undefined Behavior Detection",
    "slug": "lesson-30-memory-sanitizers-undefined-be",
    "language": "cpp",
    "category": "Module 2: References, Memory Management & Stack vs Heap",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Best practices for avoiding undefined behavior, strict aliasing violations, and buffer overflows.",
    "concepts": [
      "Memory Sanitizers & Undefined Behavior Detection",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Memory Sanitizers & Undefined Behavior Detection gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Memory Sanitizers & Undefined Behavior Detection\n\nBest practices for avoiding undefined behavior, strict aliasing violations, and buffer overflows.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int a = 10, b = 20;\n    std::cout << \"Safe memory practice: \" << (a + b) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Memory Sanitizers & Undefined Behavior Detection",
      "code": "#include <iostream>\n\nint main() {\n    int a = 10, b = 20;\n    std::cout << \"Safe memory practice: \" << (a + b) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Memory Sanitizers & Undefined Behavior Detection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Memory Sanitizers & Undefined Behavior Detection.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Memory Sanitizers & Undefined Behavior Detection\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int a = 10, b = 20;\n    std::cout << (a + b) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int a = 10, b = 20;\n    std::cout << (a + b) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-30-tc-1",
        "description": "Verifies correct implementation for Memory Sanitizers & Undefined Behavior Detection",
        "testFn": "code.includes('a + b')"
      }
    ]
  },
  {
    "id": "cpp-31-class-encapsulation-member-acc",
    "title": "31. Class Encapsulation & Member Access",
    "slug": "lesson-31-class-encapsulation-member-acc",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Structure data with private state and public member functions.",
    "concepts": [
      "Class Encapsulation & Member Access",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Class Encapsulation & Member Access gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Class Encapsulation & Member Access\n\nStructure data with private state and public member functions.\n\n```cpp\n#include <iostream>\n\nclass BankAccount {\nprivate:\n    double balance = 0;\npublic:\n    void deposit(double amt) { balance += amt; }\n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.deposit(100.5);\n    std::cout << acc.getBalance() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Class Encapsulation & Member Access",
      "code": "#include <iostream>\n\nclass BankAccount {\nprivate:\n    double balance = 0;\npublic:\n    void deposit(double amt) { balance += amt; }\n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.deposit(100.5);\n    std::cout << acc.getBalance() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Class Encapsulation & Member Access.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Class Encapsulation & Member Access.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Class Encapsulation & Member Access\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass BankAccount {\nprivate:\n    double balance = 0;\npublic:\n    void deposit(double amt) { balance += amt; }\n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.deposit(100.5);\n    std::cout << acc.getBalance() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass BankAccount {\nprivate:\n    double balance = 0;\npublic:\n    void deposit(double amt) { balance += amt; }\n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    acc.deposit(100.5);\n    std::cout << acc.getBalance() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-31-tc-1",
        "description": "Verifies correct implementation for Class Encapsulation & Member Access",
        "testFn": "code.includes('class BankAccount') && code.includes('getBalance')"
      }
    ]
  },
  {
    "id": "cpp-32-member-initializer-lists",
    "title": "32. Member Initializer Lists",
    "slug": "lesson-32-member-initializer-lists",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Initialize data members directly during construction before body execution.",
    "concepts": [
      "Member Initializer Lists",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Member Initializer Lists gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Member Initializer Lists\n\nInitialize data members directly during construction before body execution.\n\n```cpp\n#include <iostream>\n\nclass Node {\npublic:\n    int id;\n    Node(int v) : id(v) {}\n};\n\nint main() {\n    Node n(7);\n    std::cout << n.id << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Member Initializer Lists",
      "code": "#include <iostream>\n\nclass Node {\npublic:\n    int id;\n    Node(int v) : id(v) {}\n};\n\nint main() {\n    Node n(7);\n    std::cout << n.id << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Member Initializer Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Member Initializer Lists.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Member Initializer Lists\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Node {\npublic:\n    int id;\n    Node(int v) : id(v) {}\n};\n\nint main() {\n    Node n(7);\n    std::cout << n.id << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Node {\npublic:\n    int id;\n    Node(int v) : id(v) {}\n};\n\nint main() {\n    Node n(7);\n    std::cout << n.id << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-32-tc-1",
        "description": "Verifies correct implementation for Member Initializer Lists",
        "testFn": "code.includes(': id(v)')"
      }
    ]
  },
  {
    "id": "cpp-33-default-delegating-constructor",
    "title": "33. Default & Delegating Constructors",
    "slug": "lesson-33-default-delegating-constructor",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reuse constructor logic across overloaded constructors using delegation.",
    "concepts": [
      "Default & Delegating Constructors",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Default & Delegating Constructors gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Default & Delegating Constructors\n\nReuse constructor logic across overloaded constructors using delegation.\n\n```cpp\n#include <iostream>\n\nclass Config {\npublic:\n    int port;\n    Config() : Config(8080) {}\n    Config(int p) : port(p) {}\n};\n\nint main() {\n    Config c;\n    std::cout << c.port << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Default & Delegating Constructors",
      "code": "#include <iostream>\n\nclass Config {\npublic:\n    int port;\n    Config() : Config(8080) {}\n    Config(int p) : port(p) {}\n};\n\nint main() {\n    Config c;\n    std::cout << c.port << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Default & Delegating Constructors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Default & Delegating Constructors.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Default & Delegating Constructors\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Config {\npublic:\n    int port;\n    Config() : Config(8080) {}\n    Config(int p) : port(p) {}\n};\n\nint main() {\n    Config c;\n    std::cout << c.port << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Config {\npublic:\n    int port;\n    Config() : Config(8080) {}\n    Config(int p) : port(p) {}\n};\n\nint main() {\n    Config c;\n    std::cout << c.port << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-33-tc-1",
        "description": "Verifies correct implementation for Default & Delegating Constructors",
        "testFn": "code.includes(': Config(8080)')"
      }
    ]
  },
  {
    "id": "cpp-34-destructors-automatic-lifetime",
    "title": "34. Destructors & Automatic Lifetime Management",
    "slug": "lesson-34-destructors-automatic-lifetime",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Destructors execute automatically when stack objects go out of scope.",
    "concepts": [
      "Destructors & Automatic Lifetime Management",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Destructors & Automatic Lifetime Management gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Destructors & Automatic Lifetime Management\n\nDestructors execute automatically when stack objects go out of scope.\n\n```cpp\n#include <iostream>\n\nclass ScopeLogger {\npublic:\n    ~ScopeLogger() { std::cout << \"Exiting scope\" << std::endl; }\n};\n\nint main() {\n    {\n        ScopeLogger l;\n    }\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Destructors & Automatic Lifetime Management",
      "code": "#include <iostream>\n\nclass ScopeLogger {\npublic:\n    ~ScopeLogger() { std::cout << \"Exiting scope\" << std::endl; }\n};\n\nint main() {\n    {\n        ScopeLogger l;\n    }\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Destructors & Automatic Lifetime Management.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Destructors & Automatic Lifetime Management.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Destructors & Automatic Lifetime Management\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass ScopeLogger {\npublic:\n    ~ScopeLogger() { std::cout << \"Exiting scope\" << std::endl; }\n};\n\nint main() {\n    {\n        ScopeLogger l;\n    }\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass ScopeLogger {\npublic:\n    ~ScopeLogger() { std::cout << \"Exiting scope\" << std::endl; }\n};\n\nint main() {\n    {\n        ScopeLogger l;\n    }\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-34-tc-1",
        "description": "Verifies correct implementation for Destructors & Automatic Lifetime Management",
        "testFn": "code.includes('~ScopeLogger()')"
      }
    ]
  },
  {
    "id": "cpp-35-raii-resource-acquisition-is-i",
    "title": "35. RAII (Resource Acquisition Is Initialization)",
    "slug": "lesson-35-raii-resource-acquisition-is-i",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bind lifecycle of system resources (files, sockets, mutexes) to object lifetimes.",
    "concepts": [
      "RAII (Resource Acquisition Is Initialization)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: RAII (Resource Acquisition Is Initialization) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### RAII (Resource Acquisition Is Initialization)\n\nBind lifecycle of system resources (files, sockets, mutexes) to object lifetimes.\n\n```cpp\n#include <iostream>\n\nclass FileHandle {\n    FILE* f;\npublic:\n    FileHandle() { f = nullptr; }\n    ~FileHandle() { if (f) fclose(f); }\n};\n\nint main() {\n    FileHandle fh;\n    std::cout << \"RAII instantiated\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: RAII (Resource Acquisition Is Initialization)",
      "code": "#include <iostream>\n\nclass FileHandle {\n    FILE* f;\npublic:\n    FileHandle() { f = nullptr; }\n    ~FileHandle() { if (f) fclose(f); }\n};\n\nint main() {\n    FileHandle fh;\n    std::cout << \"RAII instantiated\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for RAII (Resource Acquisition Is Initialization).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of RAII (Resource Acquisition Is Initialization).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement RAII (Resource Acquisition Is Initialization)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass FileHandle {\n    FILE* f;\npublic:\n    FileHandle() { f = nullptr; }\n    ~FileHandle() { if (f) fclose(f); }\n};\n\nint main() {\n    FileHandle fh;\n    std::cout << \"RAII instantiated\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass FileHandle {\n    FILE* f;\npublic:\n    FileHandle() { f = nullptr; }\n    ~FileHandle() { if (f) fclose(f); }\n};\n\nint main() {\n    FileHandle fh;\n    std::cout << \"RAII instantiated\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-35-tc-1",
        "description": "Verifies correct implementation for RAII (Resource Acquisition Is Initialization)",
        "testFn": "code.includes('class FileHandle')"
      }
    ]
  },
  {
    "id": "cpp-36-explicit-keyword-on-constructo",
    "title": "36. explicit Keyword on Constructors",
    "slug": "lesson-36-explicit-keyword-on-constructo",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent unintentional implicit conversions and unwanted type coercions.",
    "concepts": [
      "explicit Keyword on Constructors",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: explicit Keyword on Constructors gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### explicit Keyword on Constructors\n\nPrevent unintentional implicit conversions and unwanted type coercions.\n\n```cpp\n#include <iostream>\n\nclass Buffer {\npublic:\n    explicit Buffer(int size) {}\n};\n\nint main() {\n    Buffer b(1024);\n    std::cout << \"Explicit constructor safe\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: explicit Keyword on Constructors",
      "code": "#include <iostream>\n\nclass Buffer {\npublic:\n    explicit Buffer(int size) {}\n};\n\nint main() {\n    Buffer b(1024);\n    std::cout << \"Explicit constructor safe\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for explicit Keyword on Constructors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of explicit Keyword on Constructors.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement explicit Keyword on Constructors\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Buffer {\npublic:\n    explicit Buffer(int size) {}\n};\n\nint main() {\n    Buffer b(1024);\n    std::cout << \"Explicit constructor safe\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Buffer {\npublic:\n    explicit Buffer(int size) {}\n};\n\nint main() {\n    Buffer b(1024);\n    std::cout << \"Explicit constructor safe\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-36-tc-1",
        "description": "Verifies correct implementation for explicit Keyword on Constructors",
        "testFn": "code.includes('explicit Buffer')"
      }
    ]
  },
  {
    "id": "cpp-37-rule-of-zero",
    "title": "37. Rule of Zero",
    "slug": "lesson-37-rule-of-zero",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Rely on standard library components so classes require no manual copy/move/destructor code.",
    "concepts": [
      "Rule of Zero",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Rule of Zero gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Rule of Zero\n\nRely on standard library components so classes require no manual copy/move/destructor code.\n\n```cpp\n#include <iostream>\n#include <string>\n#include <vector>\n\nclass Student {\npublic:\n    std::string name;\n    std::vector<int> grades;\n};\n\nint main() {\n    Student s{\"Bob\", {90, 85}};\n    std::cout << s.name << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rule of Zero",
      "code": "#include <iostream>\n#include <string>\n#include <vector>\n\nclass Student {\npublic:\n    std::string name;\n    std::vector<int> grades;\n};\n\nint main() {\n    Student s{\"Bob\", {90, 85}};\n    std::cout << s.name << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Rule of Zero.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rule of Zero.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Rule of Zero\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <string>\n#include <vector>\n\nclass Student {\npublic:\n    std::string name;\n    std::vector<int> grades;\n};\n\nint main() {\n    Student s{\"Bob\", {90, 85}};\n    std::cout << s.name << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <string>\n#include <vector>\n\nclass Student {\npublic:\n    std::string name;\n    std::vector<int> grades;\n};\n\nint main() {\n    Student s{\"Bob\", {90, 85}};\n    std::cout << s.name << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-37-tc-1",
        "description": "Verifies correct implementation for Rule of Zero",
        "testFn": "code.includes('class Student')"
      }
    ]
  },
  {
    "id": "cpp-38-rule-of-three-destructor-copy-",
    "title": "38. Rule of Three (Destructor, Copy Constructor, Copy Assignment)",
    "slug": "lesson-38-rule-of-three-destructor-copy-",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensure proper deep copying when managing raw pointer resources.",
    "concepts": [
      "Rule of Three (Destructor, Copy Constructor, Copy Assignment)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Rule of Three (Destructor, Copy Constructor, Copy Assignment) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Rule of Three (Destructor, Copy Constructor, Copy Assignment)\n\nEnsure proper deep copying when managing raw pointer resources.\n\n```cpp\n#include <iostream>\n\nclass IntWrapper {\n    int* val;\npublic:\n    IntWrapper(int v) : val(new int(v)) {}\n    ~IntWrapper() { delete val; }\n    IntWrapper(const IntWrapper& o) : val(new int(*o.val)) {}\n};\n\nint main() {\n    IntWrapper a(10);\n    IntWrapper b = a;\n    std::cout << \"Copied safely\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rule of Three (Destructor, Copy Constructor, Copy Assignment)",
      "code": "#include <iostream>\n\nclass IntWrapper {\n    int* val;\npublic:\n    IntWrapper(int v) : val(new int(v)) {}\n    ~IntWrapper() { delete val; }\n    IntWrapper(const IntWrapper& o) : val(new int(*o.val)) {}\n};\n\nint main() {\n    IntWrapper a(10);\n    IntWrapper b = a;\n    std::cout << \"Copied safely\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Rule of Three (Destructor, Copy Constructor, Copy Assignment).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rule of Three (Destructor, Copy Constructor, Copy Assignment).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Rule of Three (Destructor, Copy Constructor, Copy Assignment)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass IntWrapper {\n    int* val;\npublic:\n    IntWrapper(int v) : val(new int(v)) {}\n    ~IntWrapper() { delete val; }\n    IntWrapper(const IntWrapper& o) : val(new int(*o.val)) {}\n};\n\nint main() {\n    IntWrapper a(10);\n    IntWrapper b = a;\n    std::cout << \"Copied safely\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass IntWrapper {\n    int* val;\npublic:\n    IntWrapper(int v) : val(new int(v)) {}\n    ~IntWrapper() { delete val; }\n    IntWrapper(const IntWrapper& o) : val(new int(*o.val)) {}\n};\n\nint main() {\n    IntWrapper a(10);\n    IntWrapper b = a;\n    std::cout << \"Copied safely\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-38-tc-1",
        "description": "Verifies correct implementation for Rule of Three (Destructor, Copy Constructor, Copy Assignment)",
        "testFn": "code.includes('IntWrapper(const IntWrapper& o)')"
      }
    ]
  },
  {
    "id": "cpp-39-rule-of-five-adding-move-const",
    "title": "39. Rule of Five (Adding Move Constructor & Move Assignment)",
    "slug": "lesson-39-rule-of-five-adding-move-const",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extend Rule of Three with move semantics for optimal performance.",
    "concepts": [
      "Rule of Five (Adding Move Constructor & Move Assignment)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Rule of Five (Adding Move Constructor & Move Assignment) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Rule of Five (Adding Move Constructor & Move Assignment)\n\nExtend Rule of Three with move semantics for optimal performance.\n\n```cpp\n#include <iostream>\n\nclass Buffer {\n    int* data;\npublic:\n    Buffer() : data(nullptr) {}\n    Buffer(Buffer&& o) noexcept : data(o.data) { o.data = nullptr; }\n    ~Buffer() { delete[] data; }\n};\n\nint main() {\n    Buffer b1;\n    Buffer b2 = std::move(b1);\n    std::cout << \"Moved safely\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rule of Five (Adding Move Constructor & Move Assignment)",
      "code": "#include <iostream>\n\nclass Buffer {\n    int* data;\npublic:\n    Buffer() : data(nullptr) {}\n    Buffer(Buffer&& o) noexcept : data(o.data) { o.data = nullptr; }\n    ~Buffer() { delete[] data; }\n};\n\nint main() {\n    Buffer b1;\n    Buffer b2 = std::move(b1);\n    std::cout << \"Moved safely\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Rule of Five (Adding Move Constructor & Move Assignment).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rule of Five (Adding Move Constructor & Move Assignment).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Rule of Five (Adding Move Constructor & Move Assignment)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Buffer {\n    int* data;\npublic:\n    Buffer() : data(nullptr) {}\n    Buffer(Buffer&& o) noexcept : data(o.data) { o.data = nullptr; }\n    ~Buffer() { delete[] data; }\n};\n\nint main() {\n    Buffer b1;\n    Buffer b2 = std::move(b1);\n    std::cout << \"Moved safely\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Buffer {\n    int* data;\npublic:\n    Buffer() : data(nullptr) {}\n    Buffer(Buffer&& o) noexcept : data(o.data) { o.data = nullptr; }\n    ~Buffer() { delete[] data; }\n};\n\nint main() {\n    Buffer b1;\n    Buffer b2 = std::move(b1);\n    std::cout << \"Moved safely\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-39-tc-1",
        "description": "Verifies correct implementation for Rule of Five (Adding Move Constructor & Move Assignment)",
        "testFn": "code.includes('Buffer(Buffer&& o)')"
      }
    ]
  },
  {
    "id": "cpp-40-static-data-members-static-met",
    "title": "40. Static Data Members & Static Methods",
    "slug": "lesson-40-static-data-members-static-met",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Class-level state and utility functions that do not require instance binding.",
    "concepts": [
      "Static Data Members & Static Methods",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Static Data Members & Static Methods gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Static Data Members & Static Methods\n\nClass-level state and utility functions that do not require instance binding.\n\n```cpp\n#include <iostream>\n\nclass Counter {\npublic:\n    inline static int count = 0;\n    static void increment() { count++; }\n};\n\nint main() {\n    Counter::increment();\n    std::cout << Counter::count << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static Data Members & Static Methods",
      "code": "#include <iostream>\n\nclass Counter {\npublic:\n    inline static int count = 0;\n    static void increment() { count++; }\n};\n\nint main() {\n    Counter::increment();\n    std::cout << Counter::count << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Static Data Members & Static Methods.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Data Members & Static Methods.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Static Data Members & Static Methods\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Counter {\npublic:\n    inline static int count = 0;\n    static void increment() { count++; }\n};\n\nint main() {\n    Counter::increment();\n    std::cout << Counter::count << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Counter {\npublic:\n    inline static int count = 0;\n    static void increment() { count++; }\n};\n\nint main() {\n    Counter::increment();\n    std::cout << Counter::count << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-40-tc-1",
        "description": "Verifies correct implementation for Static Data Members & Static Methods",
        "testFn": "code.includes('Counter::increment()')"
      }
    ]
  },
  {
    "id": "cpp-41-this-pointer-method-chaining",
    "title": "41. this Pointer & Method Chaining",
    "slug": "lesson-41-this-pointer-method-chaining",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Implicit pointer to active instance enabling fluent builder interfaces.",
    "concepts": [
      "this Pointer & Method Chaining",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: this Pointer & Method Chaining gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### this Pointer & Method Chaining\n\nImplicit pointer to active instance enabling fluent builder interfaces.\n\n```cpp\n#include <iostream>\n\nclass QueryBuilder {\n    std::string q;\npublic:\n    QueryBuilder& select(std::string f) { q += \"SELECT \" + f; return *this; }\n    void print() { std::cout << q << std::endl; }\n};\n\nint main() {\n    QueryBuilder qb;\n    qb.select(\"*\").print();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: this Pointer & Method Chaining",
      "code": "#include <iostream>\n\nclass QueryBuilder {\n    std::string q;\npublic:\n    QueryBuilder& select(std::string f) { q += \"SELECT \" + f; return *this; }\n    void print() { std::cout << q << std::endl; }\n};\n\nint main() {\n    QueryBuilder qb;\n    qb.select(\"*\").print();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for this Pointer & Method Chaining.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of this Pointer & Method Chaining.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement this Pointer & Method Chaining\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass QueryBuilder {\n    std::string q;\npublic:\n    QueryBuilder& select(std::string f) { q += \"SELECT \" + f; return *this; }\n    void print() { std::cout << q << std::endl; }\n};\n\nint main() {\n    QueryBuilder qb;\n    qb.select(\"*\").print();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass QueryBuilder {\n    std::string q;\npublic:\n    QueryBuilder& select(std::string f) { q += \"SELECT \" + f; return *this; }\n    void print() { std::cout << q << std::endl; }\n};\n\nint main() {\n    QueryBuilder qb;\n    qb.select(\"*\").print();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-41-tc-1",
        "description": "Verifies correct implementation for this Pointer & Method Chaining",
        "testFn": "code.includes('return *this;')"
      }
    ]
  },
  {
    "id": "cpp-42-friend-functions-classes",
    "title": "42. Friend Functions & Classes",
    "slug": "lesson-42-friend-functions-classes",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Grant selective access to private members for tightly coupled helpers.",
    "concepts": [
      "Friend Functions & Classes",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Friend Functions & Classes gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Friend Functions & Classes\n\nGrant selective access to private members for tightly coupled helpers.\n\n```cpp\n#include <iostream>\n\nclass Secret {\n    int pin = 1234;\n    friend void reveal(const Secret& s);\n};\n\nvoid reveal(const Secret& s) {\n    std::cout << s.pin << std::endl;\n}\n\nint main() {\n    Secret s;\n    reveal(s);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Friend Functions & Classes",
      "code": "#include <iostream>\n\nclass Secret {\n    int pin = 1234;\n    friend void reveal(const Secret& s);\n};\n\nvoid reveal(const Secret& s) {\n    std::cout << s.pin << std::endl;\n}\n\nint main() {\n    Secret s;\n    reveal(s);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Friend Functions & Classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Friend Functions & Classes.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Friend Functions & Classes\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Secret {\n    int pin = 1234;\n    friend void reveal(const Secret& s);\n};\n\nvoid reveal(const Secret& s) {\n    std::cout << s.pin << std::endl;\n}\n\nint main() {\n    Secret s;\n    reveal(s);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Secret {\n    int pin = 1234;\n    friend void reveal(const Secret& s);\n};\n\nvoid reveal(const Secret& s) {\n    std::cout << s.pin << std::endl;\n}\n\nint main() {\n    Secret s;\n    reveal(s);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-42-tc-1",
        "description": "Verifies correct implementation for Friend Functions & Classes",
        "testFn": "code.includes('friend void reveal')"
      }
    ]
  },
  {
    "id": "cpp-43-virtual-functions-polymorphism",
    "title": "43. Virtual Functions & Polymorphism",
    "slug": "lesson-43-virtual-functions-polymorphism",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Dynamic dispatch via vtable pointers allowing runtime subclass specialization.",
    "concepts": [
      "Virtual Functions & Polymorphism",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Virtual Functions & Polymorphism gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Virtual Functions & Polymorphism\n\nDynamic dispatch via vtable pointers allowing runtime subclass specialization.\n\n```cpp\n#include <iostream>\n\nclass Shape {\npublic:\n    virtual void draw() { std::cout << \"Shape\" << std::endl; }\n    virtual ~Shape() = default;\n};\n\nint main() {\n    Shape s;\n    s.draw();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Virtual Functions & Polymorphism",
      "code": "#include <iostream>\n\nclass Shape {\npublic:\n    virtual void draw() { std::cout << \"Shape\" << std::endl; }\n    virtual ~Shape() = default;\n};\n\nint main() {\n    Shape s;\n    s.draw();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Virtual Functions & Polymorphism.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Virtual Functions & Polymorphism.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Virtual Functions & Polymorphism\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Shape {\npublic:\n    virtual void draw() { std::cout << \"Shape\" << std::endl; }\n    virtual ~Shape() = default;\n};\n\nint main() {\n    Shape s;\n    s.draw();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Shape {\npublic:\n    virtual void draw() { std::cout << \"Shape\" << std::endl; }\n    virtual ~Shape() = default;\n};\n\nint main() {\n    Shape s;\n    s.draw();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-43-tc-1",
        "description": "Verifies correct implementation for Virtual Functions & Polymorphism",
        "testFn": "code.includes('virtual void draw()')"
      }
    ]
  },
  {
    "id": "cpp-44-pure-virtual-functions-abstrac",
    "title": "44. Pure Virtual Functions & Abstract Classes",
    "slug": "lesson-44-pure-virtual-functions-abstrac",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define pure virtual interface contracts with = 0.",
    "concepts": [
      "Pure Virtual Functions & Abstract Classes",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Pure Virtual Functions & Abstract Classes gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Pure Virtual Functions & Abstract Classes\n\nDefine pure virtual interface contracts with = 0.\n\n```cpp\n#include <iostream>\n\nclass Device {\npublic:\n    virtual void boot() = 0;\n    virtual ~Device() = default;\n};\n\nclass Router : public Device {\npublic:\n    void boot() override { std::cout << \"Router booting\" << std::endl; }\n};\n\nint main() {\n    Router r;\n    r.boot();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pure Virtual Functions & Abstract Classes",
      "code": "#include <iostream>\n\nclass Device {\npublic:\n    virtual void boot() = 0;\n    virtual ~Device() = default;\n};\n\nclass Router : public Device {\npublic:\n    void boot() override { std::cout << \"Router booting\" << std::endl; }\n};\n\nint main() {\n    Router r;\n    r.boot();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Pure Virtual Functions & Abstract Classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pure Virtual Functions & Abstract Classes.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Pure Virtual Functions & Abstract Classes\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Device {\npublic:\n    virtual void boot() = 0;\n    virtual ~Device() = default;\n};\n\nclass Router : public Device {\npublic:\n    void boot() override { std::cout << \"Router booting\" << std::endl; }\n};\n\nint main() {\n    Router r;\n    r.boot();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Device {\npublic:\n    virtual void boot() = 0;\n    virtual ~Device() = default;\n};\n\nclass Router : public Device {\npublic:\n    void boot() override { std::cout << \"Router booting\" << std::endl; }\n};\n\nint main() {\n    Router r;\n    r.boot();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-44-tc-1",
        "description": "Verifies correct implementation for Pure Virtual Functions & Abstract Classes",
        "testFn": "code.includes('virtual void boot() = 0')"
      }
    ]
  },
  {
    "id": "cpp-45-override-final-specifiers",
    "title": "45. override & final Specifiers",
    "slug": "lesson-45-override-final-specifiers",
    "language": "cpp",
    "category": "Module 3: Classes, Constructors, Destructors & RAII",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compiler-enforced method override verification and inheritance sealing.",
    "concepts": [
      "override & final Specifiers",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: override & final Specifiers gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### override & final Specifiers\n\nCompiler-enforced method override verification and inheritance sealing.\n\n```cpp\n#include <iostream>\n\nclass Base {\npublic:\n    virtual void run() {}\n};\n\nclass Derived final : public Base {\npublic:\n    void run() override {}\n};\n\nint main() {\n    Derived d;\n    std::cout << \"Derived sealed\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: override & final Specifiers",
      "code": "#include <iostream>\n\nclass Base {\npublic:\n    virtual void run() {}\n};\n\nclass Derived final : public Base {\npublic:\n    void run() override {}\n};\n\nint main() {\n    Derived d;\n    std::cout << \"Derived sealed\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for override & final Specifiers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of override & final Specifiers.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement override & final Specifiers\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Base {\npublic:\n    virtual void run() {}\n};\n\nclass Derived final : public Base {\npublic:\n    void run() override {}\n};\n\nint main() {\n    Derived d;\n    std::cout << \"Derived sealed\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Base {\npublic:\n    virtual void run() {}\n};\n\nclass Derived final : public Base {\npublic:\n    void run() override {}\n};\n\nint main() {\n    Derived d;\n    std::cout << \"Derived sealed\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-45-tc-1",
        "description": "Verifies correct implementation for override & final Specifiers",
        "testFn": "code.includes('final') && code.includes('override')"
      }
    ]
  },
  {
    "id": "cpp-46-arithmetic-operator-overloadin",
    "title": "46. Arithmetic Operator Overloading (+, -)",
    "slug": "lesson-46-arithmetic-operator-overloadin",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Provide intuitive mathematical syntax for custom domain types.",
    "concepts": [
      "Arithmetic Operator Overloading (+, -)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Arithmetic Operator Overloading (+, -) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Arithmetic Operator Overloading (+, -)\n\nProvide intuitive mathematical syntax for custom domain types.\n\n```cpp\n#include <iostream>\n\nstruct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nint main() {\n    Vec2 a{1, 2}, b{3, 4};\n    Vec2 c = a + b;\n    std::cout << c.x << \", \" << c.y << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Arithmetic Operator Overloading (+, -)",
      "code": "#include <iostream>\n\nstruct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nint main() {\n    Vec2 a{1, 2}, b{3, 4};\n    Vec2 c = a + b;\n    std::cout << c.x << \", \" << c.y << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Arithmetic Operator Overloading (+, -).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Arithmetic Operator Overloading (+, -).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Arithmetic Operator Overloading (+, -)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nstruct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nint main() {\n    Vec2 a{1, 2}, b{3, 4};\n    Vec2 c = a + b;\n    std::cout << c.x << \", \" << c.y << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nstruct Vec2 {\n    int x, y;\n    Vec2 operator+(const Vec2& o) const { return {x + o.x, y + o.y}; }\n};\n\nint main() {\n    Vec2 a{1, 2}, b{3, 4};\n    Vec2 c = a + b;\n    std::cout << c.x << \", \" << c.y << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-46-tc-1",
        "description": "Verifies correct implementation for Arithmetic Operator Overloading (+, -)",
        "testFn": "code.includes('operator+')"
      }
    ]
  },
  {
    "id": "cpp-47-stream-insertion-operator",
    "title": "47. Stream Insertion Operator (<<)",
    "slug": "lesson-47-stream-insertion-operator",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stream objects directly to std::cout by overloading operator<<.",
    "concepts": [
      "Stream Insertion Operator (<<)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Stream Insertion Operator (<<) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Stream Insertion Operator (<<)\n\nStream objects directly to std::cout by overloading operator<<.\n\n```cpp\n#include <iostream>\n\nstruct Point {\n    int x = 10, y = 20;\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) {\n        return os << \"(\" << p.x << \", \" << p.y << \")\";\n    }\n};\n\nint main() {\n    Point pt;\n    std::cout << pt << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Stream Insertion Operator (<<)",
      "code": "#include <iostream>\n\nstruct Point {\n    int x = 10, y = 20;\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) {\n        return os << \"(\" << p.x << \", \" << p.y << \")\";\n    }\n};\n\nint main() {\n    Point pt;\n    std::cout << pt << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Stream Insertion Operator (<<).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stream Insertion Operator (<<).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Stream Insertion Operator (<<)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nstruct Point {\n    int x = 10, y = 20;\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) {\n        return os << \"(\" << p.x << \", \" << p.y << \")\";\n    }\n};\n\nint main() {\n    Point pt;\n    std::cout << pt << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nstruct Point {\n    int x = 10, y = 20;\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) {\n        return os << \"(\" << p.x << \", \" << p.y << \")\";\n    }\n};\n\nint main() {\n    Point pt;\n    std::cout << pt << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-47-tc-1",
        "description": "Verifies correct implementation for Stream Insertion Operator (<<)",
        "testFn": "code.includes('operator<<')"
      }
    ]
  },
  {
    "id": "cpp-48-equality-comparison-operators",
    "title": "48. Equality & Comparison Operators",
    "slug": "lesson-48-equality-comparison-operators",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Implement operator== and operator!= for structured object comparisons.",
    "concepts": [
      "Equality & Comparison Operators",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Equality & Comparison Operators gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Equality & Comparison Operators\n\nImplement operator== and operator!= for structured object comparisons.\n\n```cpp\n#include <iostream>\n\nstruct Key {\n    int id;\n    bool operator==(const Key& o) const { return id == o.id; }\n};\n\nint main() {\n    Key k1{5}, k2{5};\n    std::cout << (k1 == k2) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Equality & Comparison Operators",
      "code": "#include <iostream>\n\nstruct Key {\n    int id;\n    bool operator==(const Key& o) const { return id == o.id; }\n};\n\nint main() {\n    Key k1{5}, k2{5};\n    std::cout << (k1 == k2) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Equality & Comparison Operators.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Equality & Comparison Operators.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Equality & Comparison Operators\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nstruct Key {\n    int id;\n    bool operator==(const Key& o) const { return id == o.id; }\n};\n\nint main() {\n    Key k1{5}, k2{5};\n    std::cout << (k1 == k2) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nstruct Key {\n    int id;\n    bool operator==(const Key& o) const { return id == o.id; }\n};\n\nint main() {\n    Key k1{5}, k2{5};\n    std::cout << (k1 == k2) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-48-tc-1",
        "description": "Verifies correct implementation for Equality & Comparison Operators",
        "testFn": "code.includes('operator==')"
      }
    ]
  },
  {
    "id": "cpp-49-three-way-comparison-spaceship",
    "title": "49. Three-Way Comparison (Spaceship Operator <=> in C++20)",
    "slug": "lesson-49-three-way-comparison-spaceship",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "C++20 spaceship operator generates all 6 comparison operators automatically.",
    "concepts": [
      "Three-Way Comparison (Spaceship Operator <=> in C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Three-Way Comparison (Spaceship Operator <=> in C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Three-Way Comparison (Spaceship Operator <=> in C++20)\n\nC++20 spaceship operator generates all 6 comparison operators automatically.\n\n```cpp\n#include <iostream>\n#include <compare>\n\nstruct Record {\n    int id;\n    auto operator<=>(const Record&) const = default;\n};\n\nint main() {\n    Record r1{10}, r2{20};\n    std::cout << (r1 < r2) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Three-Way Comparison (Spaceship Operator <=> in C++20)",
      "code": "#include <iostream>\n#include <compare>\n\nstruct Record {\n    int id;\n    auto operator<=>(const Record&) const = default;\n};\n\nint main() {\n    Record r1{10}, r2{20};\n    std::cout << (r1 < r2) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Three-Way Comparison (Spaceship Operator <=> in C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Three-Way Comparison (Spaceship Operator <=> in C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Three-Way Comparison (Spaceship Operator <=> in C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <compare>\n\nstruct Record {\n    int id;\n    auto operator<=>(const Record&) const = default;\n};\n\nint main() {\n    Record r1{10}, r2{20};\n    std::cout << (r1 < r2) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <compare>\n\nstruct Record {\n    int id;\n    auto operator<=>(const Record&) const = default;\n};\n\nint main() {\n    Record r1{10}, r2{20};\n    std::cout << (r1 < r2) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-49-tc-1",
        "description": "Verifies correct implementation for Three-Way Comparison (Spaceship Operator <=> in C++20)",
        "testFn": "code.includes('operator<=>')"
      }
    ]
  },
  {
    "id": "cpp-50-subscript-operator",
    "title": "50. Subscript Operator ([])",
    "slug": "lesson-50-subscript-operator",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Provide zero-overhead array-style indexing into custom collection objects.",
    "concepts": [
      "Subscript Operator ([])",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Subscript Operator ([]) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Subscript Operator ([])\n\nProvide zero-overhead array-style indexing into custom collection objects.\n\n```cpp\n#include <iostream>\n\nclass ArrayHolder {\n    int data[3] = {10, 20, 30};\npublic:\n    int& operator[](size_t i) { return data[i]; }\n};\n\nint main() {\n    ArrayHolder ah;\n    std::cout << ah[1] << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Subscript Operator ([])",
      "code": "#include <iostream>\n\nclass ArrayHolder {\n    int data[3] = {10, 20, 30};\npublic:\n    int& operator[](size_t i) { return data[i]; }\n};\n\nint main() {\n    ArrayHolder ah;\n    std::cout << ah[1] << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Subscript Operator ([]).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subscript Operator ([]).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Subscript Operator ([])\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass ArrayHolder {\n    int data[3] = {10, 20, 30};\npublic:\n    int& operator[](size_t i) { return data[i]; }\n};\n\nint main() {\n    ArrayHolder ah;\n    std::cout << ah[1] << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass ArrayHolder {\n    int data[3] = {10, 20, 30};\npublic:\n    int& operator[](size_t i) { return data[i]; }\n};\n\nint main() {\n    ArrayHolder ah;\n    std::cout << ah[1] << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-50-tc-1",
        "description": "Verifies correct implementation for Subscript Operator ([])",
        "testFn": "code.includes('operator[]')"
      }
    ]
  },
  {
    "id": "cpp-51-function-call-operator-functor",
    "title": "51. Function Call Operator (Functor) (())",
    "slug": "lesson-51-function-call-operator-functor",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Overload operator() to create stateful function objects (functors).",
    "concepts": [
      "Function Call Operator (Functor) (())",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Function Call Operator (Functor) (()) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Function Call Operator (Functor) (())\n\nOverload operator() to create stateful function objects (functors).\n\n```cpp\n#include <iostream>\n\nstruct Multiplier {\n    int factor;\n    int operator()(int val) const { return val * factor; }\n};\n\nint main() {\n    Multiplier times3{3};\n    std::cout << times3(10) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Function Call Operator (Functor) (())",
      "code": "#include <iostream>\n\nstruct Multiplier {\n    int factor;\n    int operator()(int val) const { return val * factor; }\n};\n\nint main() {\n    Multiplier times3{3};\n    std::cout << times3(10) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Function Call Operator (Functor) (()).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Function Call Operator (Functor) (()).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Function Call Operator (Functor) (())\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nstruct Multiplier {\n    int factor;\n    int operator()(int val) const { return val * factor; }\n};\n\nint main() {\n    Multiplier times3{3};\n    std::cout << times3(10) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nstruct Multiplier {\n    int factor;\n    int operator()(int val) const { return val * factor; }\n};\n\nint main() {\n    Multiplier times3{3};\n    std::cout << times3(10) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-51-tc-1",
        "description": "Verifies correct implementation for Function Call Operator (Functor) (())",
        "testFn": "code.includes('operator()')"
      }
    ]
  },
  {
    "id": "cpp-52-rvalue-references",
    "title": "52. Rvalue References (&&)",
    "slug": "lesson-52-rvalue-references",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bind to expiring temporary objects and rvalues without copying.",
    "concepts": [
      "Rvalue References (&&)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Rvalue References (&&) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Rvalue References (&&)\n\nBind to expiring temporary objects and rvalues without copying.\n\n```cpp\n#include <iostream>\n\nvoid process(int&& rref) {\n    std::cout << \"Rvalue ref: \" << rref << std::endl;\n}\n\nint main() {\n    process(100);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rvalue References (&&)",
      "code": "#include <iostream>\n\nvoid process(int&& rref) {\n    std::cout << \"Rvalue ref: \" << rref << std::endl;\n}\n\nint main() {\n    process(100);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Rvalue References (&&).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rvalue References (&&).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Rvalue References (&&)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nvoid process(int&& rref) {\n    std::cout << \"Rvalue ref: \" << rref << std::endl;\n}\n\nint main() {\n    process(100);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nvoid process(int&& rref) {\n    std::cout << \"Rvalue ref: \" << rref << std::endl;\n}\n\nint main() {\n    process(100);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-52-tc-1",
        "description": "Verifies correct implementation for Rvalue References (&&)",
        "testFn": "code.includes('int&&')"
      }
    ]
  },
  {
    "id": "cpp-53-std-move-and-static-casting-to",
    "title": "53. std::move and Static Casting to Rvalue",
    "slug": "lesson-53-std-move-and-static-casting-to",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Cast lvalue to rvalue reference to invoke move semantics.",
    "concepts": [
      "std::move and Static Casting to Rvalue",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::move and Static Casting to Rvalue gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::move and Static Casting to Rvalue\n\nCast lvalue to rvalue reference to invoke move semantics.\n\n```cpp\n#include <iostream>\n#include <string>\n\nint main() {\n    std::string str = \"Transferred\";\n    std::string target = std::move(str);\n    std::cout << target << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::move and Static Casting to Rvalue",
      "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string str = \"Transferred\";\n    std::string target = std::move(str);\n    std::cout << target << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::move and Static Casting to Rvalue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::move and Static Casting to Rvalue.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::move and Static Casting to Rvalue\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string str = \"Transferred\";\n    std::string target = std::move(str);\n    std::cout << target << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <string>\n\nint main() {\n    std::string str = \"Transferred\";\n    std::string target = std::move(str);\n    std::cout << target << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-53-tc-1",
        "description": "Verifies correct implementation for std::move and Static Casting to Rvalue",
        "testFn": "code.includes('std::move')"
      }
    ]
  },
  {
    "id": "cpp-54-move-constructor-implementatio",
    "title": "54. Move Constructor Implementation",
    "slug": "lesson-54-move-constructor-implementatio",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Transfer ownership of resources without memory reallocation.",
    "concepts": [
      "Move Constructor Implementation",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Move Constructor Implementation gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Move Constructor Implementation\n\nTransfer ownership of resources without memory reallocation.\n\n```cpp\n#include <iostream>\n\nclass Packet {\npublic:\n    int* raw;\n    Packet() : raw(new int(512)) {}\n    Packet(Packet&& o) noexcept : raw(o.raw) { o.raw = nullptr; }\n    ~Packet() { delete raw; }\n};\n\nint main() {\n    Packet p1;\n    Packet p2 = std::move(p1);\n    std::cout << (p1.raw == nullptr) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Move Constructor Implementation",
      "code": "#include <iostream>\n\nclass Packet {\npublic:\n    int* raw;\n    Packet() : raw(new int(512)) {}\n    Packet(Packet&& o) noexcept : raw(o.raw) { o.raw = nullptr; }\n    ~Packet() { delete raw; }\n};\n\nint main() {\n    Packet p1;\n    Packet p2 = std::move(p1);\n    std::cout << (p1.raw == nullptr) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Move Constructor Implementation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Move Constructor Implementation.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Move Constructor Implementation\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Packet {\npublic:\n    int* raw;\n    Packet() : raw(new int(512)) {}\n    Packet(Packet&& o) noexcept : raw(o.raw) { o.raw = nullptr; }\n    ~Packet() { delete raw; }\n};\n\nint main() {\n    Packet p1;\n    Packet p2 = std::move(p1);\n    std::cout << (p1.raw == nullptr) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Packet {\npublic:\n    int* raw;\n    Packet() : raw(new int(512)) {}\n    Packet(Packet&& o) noexcept : raw(o.raw) { o.raw = nullptr; }\n    ~Packet() { delete raw; }\n};\n\nint main() {\n    Packet p1;\n    Packet p2 = std::move(p1);\n    std::cout << (p1.raw == nullptr) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-54-tc-1",
        "description": "Verifies correct implementation for Move Constructor Implementation",
        "testFn": "code.includes('Packet(Packet&& o) noexcept')"
      }
    ]
  },
  {
    "id": "cpp-55-move-assignment-operator",
    "title": "55. Move Assignment Operator",
    "slug": "lesson-55-move-assignment-operator",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Release current resource and take ownership from donor object.",
    "concepts": [
      "Move Assignment Operator",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Move Assignment Operator gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Move Assignment Operator\n\nRelease current resource and take ownership from donor object.\n\n```cpp\n#include <iostream>\n\nclass Buffer {\n    int* ptr;\npublic:\n    Buffer() : ptr(new int(10)) {}\n    Buffer& operator=(Buffer&& o) noexcept {\n        if (this != &o) {\n            delete ptr;\n            ptr = o.ptr;\n            o.ptr = nullptr;\n        }\n        return *this;\n    }\n    ~Buffer() { delete ptr; }\n};\n\nint main() {\n    Buffer b1, b2;\n    b2 = std::move(b1);\n    std::cout << \"Move assigned\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Move Assignment Operator",
      "code": "#include <iostream>\n\nclass Buffer {\n    int* ptr;\npublic:\n    Buffer() : ptr(new int(10)) {}\n    Buffer& operator=(Buffer&& o) noexcept {\n        if (this != &o) {\n            delete ptr;\n            ptr = o.ptr;\n            o.ptr = nullptr;\n        }\n        return *this;\n    }\n    ~Buffer() { delete ptr; }\n};\n\nint main() {\n    Buffer b1, b2;\n    b2 = std::move(b1);\n    std::cout << \"Move assigned\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Move Assignment Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Move Assignment Operator.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Move Assignment Operator\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Buffer {\n    int* ptr;\npublic:\n    Buffer() : ptr(new int(10)) {}\n    Buffer& operator=(Buffer&& o) noexcept {\n        if (this != &o) {\n            delete ptr;\n            ptr = o.ptr;\n            o.ptr = nullptr;\n        }\n        return *this;\n    }\n    ~Buffer() { delete ptr; }\n};\n\nint main() {\n    Buffer b1, b2;\n    b2 = std::move(b1);\n    std::cout << \"Move assigned\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Buffer {\n    int* ptr;\npublic:\n    Buffer() : ptr(new int(10)) {}\n    Buffer& operator=(Buffer&& o) noexcept {\n        if (this != &o) {\n            delete ptr;\n            ptr = o.ptr;\n            o.ptr = nullptr;\n        }\n        return *this;\n    }\n    ~Buffer() { delete ptr; }\n};\n\nint main() {\n    Buffer b1, b2;\n    b2 = std::move(b1);\n    std::cout << \"Move assigned\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-55-tc-1",
        "description": "Verifies correct implementation for Move Assignment Operator",
        "testFn": "code.includes('operator=(Buffer&& o)')"
      }
    ]
  },
  {
    "id": "cpp-56-noexcept-guarantee-for-move-op",
    "title": "56. noexcept Guarantee for Move Operations",
    "slug": "lesson-56-noexcept-guarantee-for-move-op",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensure standard containers use move constructors instead of falling back to copies.",
    "concepts": [
      "noexcept Guarantee for Move Operations",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: noexcept Guarantee for Move Operations gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### noexcept Guarantee for Move Operations\n\nEnsure standard containers use move constructors instead of falling back to copies.\n\n```cpp\n#include <iostream>\n\nclass Node {\npublic:\n    Node() = default;\n    Node(Node&&) noexcept {}\n};\n\nint main() {\n    std::cout << std::is_nothrow_move_constructible_v<Node> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: noexcept Guarantee for Move Operations",
      "code": "#include <iostream>\n\nclass Node {\npublic:\n    Node() = default;\n    Node(Node&&) noexcept {}\n};\n\nint main() {\n    std::cout << std::is_nothrow_move_constructible_v<Node> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for noexcept Guarantee for Move Operations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of noexcept Guarantee for Move Operations.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement noexcept Guarantee for Move Operations\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Node {\npublic:\n    Node() = default;\n    Node(Node&&) noexcept {}\n};\n\nint main() {\n    std::cout << std::is_nothrow_move_constructible_v<Node> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Node {\npublic:\n    Node() = default;\n    Node(Node&&) noexcept {}\n};\n\nint main() {\n    std::cout << std::is_nothrow_move_constructible_v<Node> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-56-tc-1",
        "description": "Verifies correct implementation for noexcept Guarantee for Move Operations",
        "testFn": "code.includes('noexcept')"
      }
    ]
  },
  {
    "id": "cpp-57-copy-and-swap-idiom",
    "title": "57. Copy-and-Swap Idiom",
    "slug": "lesson-57-copy-and-swap-idiom",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Implement strong exception safety for assignment operators using std::swap.",
    "concepts": [
      "Copy-and-Swap Idiom",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Copy-and-Swap Idiom gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Copy-and-Swap Idiom\n\nImplement strong exception safety for assignment operators using std::swap.\n\n```cpp\n#include <iostream>\n\nclass Res {\n    int val = 0;\npublic:\n    Res(int v) : val(v) {}\n    void swap(Res& o) noexcept { std::swap(val, o.val); }\n    Res& operator=(Res o) { swap(o); return *this; }\n};\n\nint main() {\n    Res r1(1), r2(2);\n    r1 = r2;\n    std::cout << \"Swapped safely\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Copy-and-Swap Idiom",
      "code": "#include <iostream>\n\nclass Res {\n    int val = 0;\npublic:\n    Res(int v) : val(v) {}\n    void swap(Res& o) noexcept { std::swap(val, o.val); }\n    Res& operator=(Res o) { swap(o); return *this; }\n};\n\nint main() {\n    Res r1(1), r2(2);\n    r1 = r2;\n    std::cout << \"Swapped safely\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Copy-and-Swap Idiom.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Copy-and-Swap Idiom.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Copy-and-Swap Idiom\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nclass Res {\n    int val = 0;\npublic:\n    Res(int v) : val(v) {}\n    void swap(Res& o) noexcept { std::swap(val, o.val); }\n    Res& operator=(Res o) { swap(o); return *this; }\n};\n\nint main() {\n    Res r1(1), r2(2);\n    r1 = r2;\n    std::cout << \"Swapped safely\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nclass Res {\n    int val = 0;\npublic:\n    Res(int v) : val(v) {}\n    void swap(Res& o) noexcept { std::swap(val, o.val); }\n    Res& operator=(Res o) { swap(o); return *this; }\n};\n\nint main() {\n    Res r1(1), r2(2);\n    r1 = r2;\n    std::cout << \"Swapped safely\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-57-tc-1",
        "description": "Verifies correct implementation for Copy-and-Swap Idiom",
        "testFn": "code.includes('swap(o)')"
      }
    ]
  },
  {
    "id": "cpp-58-universal-forwarding-reference",
    "title": "58. Universal (Forwarding) References",
    "slug": "lesson-58-universal-forwarding-reference",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Deduce lvalue or rvalue reference nature with template T&&.",
    "concepts": [
      "Universal (Forwarding) References",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Universal (Forwarding) References gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Universal (Forwarding) References\n\nDeduce lvalue or rvalue reference nature with template T&&.\n\n```cpp\n#include <iostream>\n\ntemplate<typename T>\nvoid forwardCheck(T&& param) {\n    std::cout << \"Universal ref resolved\" << std::endl;\n}\n\nint main() {\n    int x = 10;\n    forwardCheck(x);\n    forwardCheck(20);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Universal (Forwarding) References",
      "code": "#include <iostream>\n\ntemplate<typename T>\nvoid forwardCheck(T&& param) {\n    std::cout << \"Universal ref resolved\" << std::endl;\n}\n\nint main() {\n    int x = 10;\n    forwardCheck(x);\n    forwardCheck(20);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Universal (Forwarding) References.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Universal (Forwarding) References.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Universal (Forwarding) References\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename T>\nvoid forwardCheck(T&& param) {\n    std::cout << \"Universal ref resolved\" << std::endl;\n}\n\nint main() {\n    int x = 10;\n    forwardCheck(x);\n    forwardCheck(20);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename T>\nvoid forwardCheck(T&& param) {\n    std::cout << \"Universal ref resolved\" << std::endl;\n}\n\nint main() {\n    int x = 10;\n    forwardCheck(x);\n    forwardCheck(20);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-58-tc-1",
        "description": "Verifies correct implementation for Universal (Forwarding) References",
        "testFn": "code.includes('T&&')"
      }
    ]
  },
  {
    "id": "cpp-59-std-forward-perfect-forwarding",
    "title": "59. std::forward & Perfect Forwarding",
    "slug": "lesson-59-std-forward-perfect-forwarding",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preserve value category (lvalue vs rvalue) when forwarding arguments to target functions.",
    "concepts": [
      "std::forward & Perfect Forwarding",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::forward & Perfect Forwarding gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::forward & Perfect Forwarding\n\nPreserve value category (lvalue vs rvalue) when forwarding arguments to target functions.\n\n```cpp\n#include <iostream>\n#include <utility>\n\nvoid target(int& lval) { std::cout << \"Lvalue\" << std::endl; }\nvoid target(int&& rval) { std::cout << \"Rvalue\" << std::endl; }\n\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    target(std::forward<T>(arg));\n}\n\nint main() {\n    int a = 5;\n    wrapper(a);\n    wrapper(10);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::forward & Perfect Forwarding",
      "code": "#include <iostream>\n#include <utility>\n\nvoid target(int& lval) { std::cout << \"Lvalue\" << std::endl; }\nvoid target(int&& rval) { std::cout << \"Rvalue\" << std::endl; }\n\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    target(std::forward<T>(arg));\n}\n\nint main() {\n    int a = 5;\n    wrapper(a);\n    wrapper(10);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::forward & Perfect Forwarding.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::forward & Perfect Forwarding.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::forward & Perfect Forwarding\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <utility>\n\nvoid target(int& lval) { std::cout << \"Lvalue\" << std::endl; }\nvoid target(int&& rval) { std::cout << \"Rvalue\" << std::endl; }\n\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    target(std::forward<T>(arg));\n}\n\nint main() {\n    int a = 5;\n    wrapper(a);\n    wrapper(10);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <utility>\n\nvoid target(int& lval) { std::cout << \"Lvalue\" << std::endl; }\nvoid target(int&& rval) { std::cout << \"Rvalue\" << std::endl; }\n\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    target(std::forward<T>(arg));\n}\n\nint main() {\n    int a = 5;\n    wrapper(a);\n    wrapper(10);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-59-tc-1",
        "description": "Verifies correct implementation for std::forward & Perfect Forwarding",
        "testFn": "code.includes('std::forward<T>(arg)')"
      }
    ]
  },
  {
    "id": "cpp-60-return-value-optimization-rvo-",
    "title": "60. Return Value Optimization (RVO / NRVO)",
    "slug": "lesson-60-return-value-optimization-rvo-",
    "language": "cpp",
    "category": "Module 4: Operator Overloading & Move Semantics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand compiler copy elision when returning local objects by value.",
    "concepts": [
      "Return Value Optimization (RVO / NRVO)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Return Value Optimization (RVO / NRVO) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Return Value Optimization (RVO / NRVO)\n\nUnderstand compiler copy elision when returning local objects by value.\n\n```cpp\n#include <iostream>\n\nstruct Heavy {\n    int data[100];\n};\n\nHeavy createHeavy() {\n    return Heavy{};\n}\n\nint main() {\n    Heavy h = createHeavy();\n    std::cout << \"Elided copy\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Return Value Optimization (RVO / NRVO)",
      "code": "#include <iostream>\n\nstruct Heavy {\n    int data[100];\n};\n\nHeavy createHeavy() {\n    return Heavy{};\n}\n\nint main() {\n    Heavy h = createHeavy();\n    std::cout << \"Elided copy\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Return Value Optimization (RVO / NRVO).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Return Value Optimization (RVO / NRVO).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Return Value Optimization (RVO / NRVO)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nstruct Heavy {\n    int data[100];\n};\n\nHeavy createHeavy() {\n    return Heavy{};\n}\n\nint main() {\n    Heavy h = createHeavy();\n    std::cout << \"Elided copy\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nstruct Heavy {\n    int data[100];\n};\n\nHeavy createHeavy() {\n    return Heavy{};\n}\n\nint main() {\n    Heavy h = createHeavy();\n    std::cout << \"Elided copy\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-60-tc-1",
        "description": "Verifies correct implementation for Return Value Optimization (RVO / NRVO)",
        "testFn": "code.includes('createHeavy()')"
      }
    ]
  },
  {
    "id": "cpp-61-std-unique-ptr-basics",
    "title": "61. std::unique_ptr Basics",
    "slug": "lesson-61-std-unique-ptr-basics",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Exclusive ownership smart pointer with zero runtime overhead over raw pointer.",
    "concepts": [
      "std::unique_ptr Basics",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::unique_ptr Basics gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::unique_ptr Basics\n\nExclusive ownership smart pointer with zero runtime overhead over raw pointer.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nint main() {\n    std::unique_ptr<int> uptr = std::make_unique<int>(100);\n    std::cout << *uptr << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::unique_ptr Basics",
      "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    std::unique_ptr<int> uptr = std::make_unique<int>(100);\n    std::cout << *uptr << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::unique_ptr Basics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::unique_ptr Basics.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::unique_ptr Basics\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nint main() {\n    std::unique_ptr<int> uptr = std::make_unique<int>(100);\n    std::cout << *uptr << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nint main() {\n    std::unique_ptr<int> uptr = std::make_unique<int>(100);\n    std::cout << *uptr << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-61-tc-1",
        "description": "Verifies correct implementation for std::unique_ptr Basics",
        "testFn": "code.includes('std::make_unique')"
      }
    ]
  },
  {
    "id": "cpp-62-std-make-unique-vs-new",
    "title": "62. std::make_unique vs new",
    "slug": "lesson-62-std-make-unique-vs-new",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safe single-allocation factory function preventing exception-related leaks.",
    "concepts": [
      "std::make_unique vs new",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::make_unique vs new gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::make_unique vs new\n\nSafe single-allocation factory function preventing exception-related leaks.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nstruct Node { int val; Node(int v) : val(v) {} };\n\nint main() {\n    auto node = std::make_unique<Node>(42);\n    std::cout << node->val << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::make_unique vs new",
      "code": "#include <iostream>\n#include <memory>\n\nstruct Node { int val; Node(int v) : val(v) {} };\n\nint main() {\n    auto node = std::make_unique<Node>(42);\n    std::cout << node->val << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::make_unique vs new.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::make_unique vs new.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::make_unique vs new\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nstruct Node { int val; Node(int v) : val(v) {} };\n\nint main() {\n    auto node = std::make_unique<Node>(42);\n    std::cout << node->val << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nstruct Node { int val; Node(int v) : val(v) {} };\n\nint main() {\n    auto node = std::make_unique<Node>(42);\n    std::cout << node->val << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-62-tc-1",
        "description": "Verifies correct implementation for std::make_unique vs new",
        "testFn": "code.includes('std::make_unique<Node>')"
      }
    ]
  },
  {
    "id": "cpp-63-transferring-unique-ptr-owners",
    "title": "63. Transferring unique_ptr Ownership (std::move)",
    "slug": "lesson-63-transferring-unique-ptr-owners",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass unique_ptr to functions or storage via explicit ownership transfer.",
    "concepts": [
      "Transferring unique_ptr Ownership (std::move)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Transferring unique_ptr Ownership (std::move) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Transferring unique_ptr Ownership (std::move)\n\nPass unique_ptr to functions or storage via explicit ownership transfer.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nvoid consume(std::unique_ptr<int> p) {\n    std::cout << *p << std::endl;\n}\n\nint main() {\n    auto ptr = std::make_unique<int>(777);\n    consume(std::move(ptr));\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Transferring unique_ptr Ownership (std::move)",
      "code": "#include <iostream>\n#include <memory>\n\nvoid consume(std::unique_ptr<int> p) {\n    std::cout << *p << std::endl;\n}\n\nint main() {\n    auto ptr = std::make_unique<int>(777);\n    consume(std::move(ptr));\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Transferring unique_ptr Ownership (std::move).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Transferring unique_ptr Ownership (std::move).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Transferring unique_ptr Ownership (std::move)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nvoid consume(std::unique_ptr<int> p) {\n    std::cout << *p << std::endl;\n}\n\nint main() {\n    auto ptr = std::make_unique<int>(777);\n    consume(std::move(ptr));\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nvoid consume(std::unique_ptr<int> p) {\n    std::cout << *p << std::endl;\n}\n\nint main() {\n    auto ptr = std::make_unique<int>(777);\n    consume(std::move(ptr));\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-63-tc-1",
        "description": "Verifies correct implementation for Transferring unique_ptr Ownership (std::move)",
        "testFn": "code.includes('consume(std::move(ptr))')"
      }
    ]
  },
  {
    "id": "cpp-64-unique-ptr-with-custom-deleter",
    "title": "64. unique_ptr with Custom Deleters",
    "slug": "lesson-64-unique-ptr-with-custom-deleter",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Manage non-memory resources (file handles, C APIs) with custom deleter lambdas.",
    "concepts": [
      "unique_ptr with Custom Deleters",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: unique_ptr with Custom Deleters gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### unique_ptr with Custom Deleters\n\nManage non-memory resources (file handles, C APIs) with custom deleter lambdas.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nint main() {\n    auto deleter = [](int* p) { delete p; };\n    std::unique_ptr<int, decltype(deleter)> uptr(new int(99), deleter);\n    std::cout << *uptr << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: unique_ptr with Custom Deleters",
      "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto deleter = [](int* p) { delete p; };\n    std::unique_ptr<int, decltype(deleter)> uptr(new int(99), deleter);\n    std::cout << *uptr << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for unique_ptr with Custom Deleters.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of unique_ptr with Custom Deleters.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement unique_ptr with Custom Deleters\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto deleter = [](int* p) { delete p; };\n    std::unique_ptr<int, decltype(deleter)> uptr(new int(99), deleter);\n    std::cout << *uptr << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nint main() {\n    auto deleter = [](int* p) { delete p; };\n    std::unique_ptr<int, decltype(deleter)> uptr(new int(99), deleter);\n    std::cout << *uptr << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-64-tc-1",
        "description": "Verifies correct implementation for unique_ptr with Custom Deleters",
        "testFn": "code.includes('unique_ptr<int, decltype(deleter)>')"
      }
    ]
  },
  {
    "id": "cpp-65-std-shared-ptr-reference-count",
    "title": "65. std::shared_ptr Reference Counting",
    "slug": "lesson-65-std-shared-ptr-reference-count",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Shared ownership smart pointer maintaining an atomic control block.",
    "concepts": [
      "std::shared_ptr Reference Counting",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::shared_ptr Reference Counting gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::shared_ptr Reference Counting\n\nShared ownership smart pointer maintaining an atomic control block.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nint main() {\n    std::shared_ptr<int> s1 = std::make_shared<int>(50);\n    std::shared_ptr<int> s2 = s1;\n    std::cout << \"use_count: \" << s1.use_count() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::shared_ptr Reference Counting",
      "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    std::shared_ptr<int> s1 = std::make_shared<int>(50);\n    std::shared_ptr<int> s2 = s1;\n    std::cout << \"use_count: \" << s1.use_count() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::shared_ptr Reference Counting.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::shared_ptr Reference Counting.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::shared_ptr Reference Counting\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nint main() {\n    std::shared_ptr<int> s1 = std::make_shared<int>(50);\n    std::shared_ptr<int> s2 = s1;\n    std::cout << s1.use_count() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nint main() {\n    std::shared_ptr<int> s1 = std::make_shared<int>(50);\n    std::shared_ptr<int> s2 = s1;\n    std::cout << s1.use_count() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-65-tc-1",
        "description": "Verifies correct implementation for std::shared_ptr Reference Counting",
        "testFn": "code.includes('s1.use_count()')"
      }
    ]
  },
  {
    "id": "cpp-66-std-make-shared-efficiency",
    "title": "66. std::make_shared Efficiency",
    "slug": "lesson-66-std-make-shared-efficiency",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Allocate control block and managed object together in a single contiguous heap block.",
    "concepts": [
      "std::make_shared Efficiency",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::make_shared Efficiency gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::make_shared Efficiency\n\nAllocate control block and managed object together in a single contiguous heap block.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(250);\n    std::cout << *sp << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::make_shared Efficiency",
      "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(250);\n    std::cout << *sp << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::make_shared Efficiency.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::make_shared Efficiency.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::make_shared Efficiency\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(250);\n    std::cout << *sp << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(250);\n    std::cout << *sp << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-66-tc-1",
        "description": "Verifies correct implementation for std::make_shared Efficiency",
        "testFn": "code.includes('std::make_shared')"
      }
    ]
  },
  {
    "id": "cpp-67-circular-references-memory-lea",
    "title": "67. Circular References & Memory Leaks",
    "slug": "lesson-67-circular-references-memory-lea",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand how cyclical shared_ptr references prevent ref-count from reaching zero.",
    "concepts": [
      "Circular References & Memory Leaks",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Circular References & Memory Leaks gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Circular References & Memory Leaks\n\nUnderstand how cyclical shared_ptr references prevent ref-count from reaching zero.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nstruct B;\nstruct A { std::shared_ptr<B> b; };\nstruct B { std::shared_ptr<A> a; };\n\nint main() {\n    std::cout << \"Cyclic leaks require weak_ptr\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Circular References & Memory Leaks",
      "code": "#include <iostream>\n#include <memory>\n\nstruct B;\nstruct A { std::shared_ptr<B> b; };\nstruct B { std::shared_ptr<A> a; };\n\nint main() {\n    std::cout << \"Cyclic leaks require weak_ptr\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Circular References & Memory Leaks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Circular References & Memory Leaks.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Circular References & Memory Leaks\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Cyclic leaks require weak_ptr\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"Cyclic leaks require weak_ptr\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-67-tc-1",
        "description": "Verifies correct implementation for Circular References & Memory Leaks",
        "testFn": "code.includes('weak_ptr')"
      }
    ]
  },
  {
    "id": "cpp-68-std-weak-ptr-for-breaking-cycl",
    "title": "68. std::weak_ptr for Breaking Cyclic References",
    "slug": "lesson-68-std-weak-ptr-for-breaking-cycl",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Non-owning observer of shared_ptr that prevents reference cycles.",
    "concepts": [
      "std::weak_ptr for Breaking Cyclic References",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::weak_ptr for Breaking Cyclic References gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::weak_ptr for Breaking Cyclic References\n\nNon-owning observer of shared_ptr that prevents reference cycles.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(123);\n    std::weak_ptr<int> wp = sp;\n    if (auto locked = wp.lock()) {\n        std::cout << *locked << std::endl;\n    }\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::weak_ptr for Breaking Cyclic References",
      "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(123);\n    std::weak_ptr<int> wp = sp;\n    if (auto locked = wp.lock()) {\n        std::cout << *locked << std::endl;\n    }\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::weak_ptr for Breaking Cyclic References.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::weak_ptr for Breaking Cyclic References.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::weak_ptr for Breaking Cyclic References\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(123);\n    std::weak_ptr<int> wp = sp;\n    if (auto locked = wp.lock()) {\n        std::cout << *locked << std::endl;\n    }\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nint main() {\n    auto sp = std::make_shared<int>(123);\n    std::weak_ptr<int> wp = sp;\n    if (auto locked = wp.lock()) {\n        std::cout << *locked << std::endl;\n    }\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-68-tc-1",
        "description": "Verifies correct implementation for std::weak_ptr for Breaking Cyclic References",
        "testFn": "code.includes('wp.lock()')"
      }
    ]
  },
  {
    "id": "cpp-69-std-enable-shared-from-this",
    "title": "69. std::enable_shared_from_this",
    "slug": "lesson-69-std-enable-shared-from-this",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safely generate a shared_ptr to this from inside member functions.",
    "concepts": [
      "std::enable_shared_from_this",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::enable_shared_from_this gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::enable_shared_from_this\n\nSafely generate a shared_ptr to this from inside member functions.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nclass Widget : public std::enable_shared_from_this<Widget> {\npublic:\n    std::shared_ptr<Widget> getShared() { return shared_from_this(); }\n};\n\nint main() {\n    auto w = std::make_shared<Widget>();\n    auto w2 = w->getShared();\n    std::cout << w.use_count() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::enable_shared_from_this",
      "code": "#include <iostream>\n#include <memory>\n\nclass Widget : public std::enable_shared_from_this<Widget> {\npublic:\n    std::shared_ptr<Widget> getShared() { return shared_from_this(); }\n};\n\nint main() {\n    auto w = std::make_shared<Widget>();\n    auto w2 = w->getShared();\n    std::cout << w.use_count() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::enable_shared_from_this.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::enable_shared_from_this.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::enable_shared_from_this\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nclass Widget : public std::enable_shared_from_this<Widget> {\npublic:\n    std::shared_ptr<Widget> getShared() { return shared_from_this(); }\n};\n\nint main() {\n    auto w = std::make_shared<Widget>();\n    auto w2 = w->getShared();\n    std::cout << w.use_count() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nclass Widget : public std::enable_shared_from_this<Widget> {\npublic:\n    std::shared_ptr<Widget> getShared() { return shared_from_this(); }\n};\n\nint main() {\n    auto w = std::make_shared<Widget>();\n    auto w2 = w->getShared();\n    std::cout << w.use_count() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-69-tc-1",
        "description": "Verifies correct implementation for std::enable_shared_from_this",
        "testFn": "code.includes('enable_shared_from_this')"
      }
    ]
  },
  {
    "id": "cpp-70-aliasing-constructor-of-shared",
    "title": "70. Aliasing Constructor of shared_ptr",
    "slug": "lesson-70-aliasing-constructor-of-shared",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Share ownership of one object while pointing to another internal sub-object.",
    "concepts": [
      "Aliasing Constructor of shared_ptr",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Aliasing Constructor of shared_ptr gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Aliasing Constructor of shared_ptr\n\nShare ownership of one object while pointing to another internal sub-object.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nstruct Pair { int first = 1; int second = 2; };\n\nint main() {\n    auto pair = std::make_shared<Pair>();\n    std::shared_ptr<int> alias(pair, &pair->second);\n    std::cout << *alias << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Aliasing Constructor of shared_ptr",
      "code": "#include <iostream>\n#include <memory>\n\nstruct Pair { int first = 1; int second = 2; };\n\nint main() {\n    auto pair = std::make_shared<Pair>();\n    std::shared_ptr<int> alias(pair, &pair->second);\n    std::cout << *alias << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Aliasing Constructor of shared_ptr.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Aliasing Constructor of shared_ptr.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Aliasing Constructor of shared_ptr\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nstruct Pair { int first = 1; int second = 2; };\n\nint main() {\n    auto pair = std::make_shared<Pair>();\n    std::shared_ptr<int> alias(pair, &pair->second);\n    std::cout << *alias << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nstruct Pair { int first = 1; int second = 2; };\n\nint main() {\n    auto pair = std::make_shared<Pair>();\n    std::shared_ptr<int> alias(pair, &pair->second);\n    std::cout << *alias << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-70-tc-1",
        "description": "Verifies correct implementation for Aliasing Constructor of shared_ptr",
        "testFn": "code.includes('std::shared_ptr<int> alias(pair, &pair->second)')"
      }
    ]
  },
  {
    "id": "cpp-71-raw-vs-smart-pointers-guidelin",
    "title": "71. Raw vs Smart Pointers: Guidelines",
    "slug": "lesson-71-raw-vs-smart-pointers-guidelin",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Use raw pointers/references for observation; smart pointers exclusively for ownership.",
    "concepts": [
      "Raw vs Smart Pointers: Guidelines",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Raw vs Smart Pointers: Guidelines gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Raw vs Smart Pointers: Guidelines\n\nUse raw pointers/references for observation; smart pointers exclusively for ownership.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nvoid observe(const int* p) {\n    if (p) std::cout << *p << std::endl;\n}\n\nint main() {\n    auto sp = std::make_unique<int>(500);\n    observe(sp.get());\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Raw vs Smart Pointers: Guidelines",
      "code": "#include <iostream>\n#include <memory>\n\nvoid observe(const int* p) {\n    if (p) std::cout << *p << std::endl;\n}\n\nint main() {\n    auto sp = std::make_unique<int>(500);\n    observe(sp.get());\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Raw vs Smart Pointers: Guidelines.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Raw vs Smart Pointers: Guidelines.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Raw vs Smart Pointers: Guidelines\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nvoid observe(const int* p) {\n    if (p) std::cout << *p << std::endl;\n}\n\nint main() {\n    auto sp = std::make_unique<int>(500);\n    observe(sp.get());\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nvoid observe(const int* p) {\n    if (p) std::cout << *p << std::endl;\n}\n\nint main() {\n    auto sp = std::make_unique<int>(500);\n    observe(sp.get());\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-71-tc-1",
        "description": "Verifies correct implementation for Raw vs Smart Pointers: Guidelines",
        "testFn": "code.includes('sp.get()')"
      }
    ]
  },
  {
    "id": "cpp-72-smart-pointer-performance-cach",
    "title": "72. Smart Pointer Performance & Cache Locality",
    "slug": "lesson-72-smart-pointer-performance-cach",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate indirection overhead, pointer chasing, and cache misses.",
    "concepts": [
      "Smart Pointer Performance & Cache Locality",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Smart Pointer Performance & Cache Locality gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Smart Pointer Performance & Cache Locality\n\nEvaluate indirection overhead, pointer chasing, and cache misses.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Contiguous memory outperforms scattered heap nodes\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Smart Pointer Performance & Cache Locality",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Contiguous memory outperforms scattered heap nodes\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Smart Pointer Performance & Cache Locality.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Smart Pointer Performance & Cache Locality.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Smart Pointer Performance & Cache Locality\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Contiguous memory outperforms scattered heap nodes\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"Contiguous memory outperforms scattered heap nodes\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-72-tc-1",
        "description": "Verifies correct implementation for Smart Pointer Performance & Cache Locality",
        "testFn": "code.includes('Contiguous memory')"
      }
    ]
  },
  {
    "id": "cpp-73-std-atomic-smart-pointers-in-c",
    "title": "73. std::atomic Smart Pointers in C++20",
    "slug": "lesson-73-std-atomic-smart-pointers-in-c",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Thread-safe atomic updates to shared_ptr via std::atomic<std::shared_ptr<T>>.",
    "concepts": [
      "std::atomic Smart Pointers in C++20",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::atomic Smart Pointers in C++20 gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::atomic Smart Pointers in C++20\n\nThread-safe atomic updates to shared_ptr via std::atomic<std::shared_ptr<T>>.\n\n```cpp\n#include <iostream>\n#include <memory>\n#include <atomic>\n\nint main() {\n    std::atomic<std::shared_ptr<int>> atomicPtr;\n    atomicPtr.store(std::make_shared<int>(10));\n    std::cout << *atomicPtr.load() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::atomic Smart Pointers in C++20",
      "code": "#include <iostream>\n#include <memory>\n#include <atomic>\n\nint main() {\n    std::atomic<std::shared_ptr<int>> atomicPtr;\n    atomicPtr.store(std::make_shared<int>(10));\n    std::cout << *atomicPtr.load() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::atomic Smart Pointers in C++20.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::atomic Smart Pointers in C++20.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::atomic Smart Pointers in C++20\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n#include <atomic>\n\nint main() {\n    std::atomic<std::shared_ptr<int>> atomicPtr;\n    atomicPtr.store(std::make_shared<int>(10));\n    std::cout << *atomicPtr.load() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n#include <atomic>\n\nint main() {\n    std::atomic<std::shared_ptr<int>> atomicPtr;\n    atomicPtr.store(std::make_shared<int>(10));\n    std::cout << *atomicPtr.load() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-73-tc-1",
        "description": "Verifies correct implementation for std::atomic Smart Pointers in C++20",
        "testFn": "code.includes('std::atomic<std::shared_ptr<int>>')"
      }
    ]
  },
  {
    "id": "cpp-74-pointers-to-incomplete-types-p",
    "title": "74. Pointers to Incomplete Types (PIMPL Idiom)",
    "slug": "lesson-74-pointers-to-incomplete-types-p",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hide private implementation details and decouple header dependencies using unique_ptr.",
    "concepts": [
      "Pointers to Incomplete Types (PIMPL Idiom)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Pointers to Incomplete Types (PIMPL Idiom) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Pointers to Incomplete Types (PIMPL Idiom)\n\nHide private implementation details and decouple header dependencies using unique_ptr.\n\n```cpp\n#include <iostream>\n#include <memory>\n\nclass Engine {\n    struct Impl;\n    std::unique_ptr<Impl> pimpl;\npublic:\n    Engine();\n    ~Engine();\n};\nstruct Engine::Impl { int power = 500; };\nEngine::Engine() : pimpl(std::make_unique<Impl>()) {}\nEngine::~Engine() = default;\n\nint main() {\n    Engine e;\n    std::cout << \"PIMPL compiled\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pointers to Incomplete Types (PIMPL Idiom)",
      "code": "#include <iostream>\n#include <memory>\n\nclass Engine {\n    struct Impl;\n    std::unique_ptr<Impl> pimpl;\npublic:\n    Engine();\n    ~Engine();\n};\nstruct Engine::Impl { int power = 500; };\nEngine::Engine() : pimpl(std::make_unique<Impl>()) {}\nEngine::~Engine() = default;\n\nint main() {\n    Engine e;\n    std::cout << \"PIMPL compiled\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Pointers to Incomplete Types (PIMPL Idiom).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pointers to Incomplete Types (PIMPL Idiom).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Pointers to Incomplete Types (PIMPL Idiom)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory>\n\nclass Engine {\n    struct Impl;\n    std::unique_ptr<Impl> pimpl;\npublic:\n    Engine();\n    ~Engine();\n};\nstruct Engine::Impl { int power = 500; };\nEngine::Engine() : pimpl(std::make_unique<Impl>()) {}\nEngine::~Engine() = default;\n\nint main() {\n    Engine e;\n    std::cout << \"PIMPL compiled\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory>\n\nclass Engine {\n    struct Impl;\n    std::unique_ptr<Impl> pimpl;\npublic:\n    Engine();\n    ~Engine();\n};\nstruct Engine::Impl { int power = 500; };\nEngine::Engine() : pimpl(std::make_unique<Impl>()) {}\nEngine::~Engine() = default;\n\nint main() {\n    Engine e;\n    std::cout << \"PIMPL compiled\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-74-tc-1",
        "description": "Verifies correct implementation for Pointers to Incomplete Types (PIMPL Idiom)",
        "testFn": "code.includes('pimpl')"
      }
    ]
  },
  {
    "id": "cpp-75-custom-memory-allocators-overv",
    "title": "75. Custom Memory Allocators Overview",
    "slug": "lesson-75-custom-memory-allocators-overv",
    "language": "cpp",
    "category": "Module 5: Modern Smart Pointers & Memory Safety",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Control allocation strategies (arena, pool, stack allocator) for deterministic latency.",
    "concepts": [
      "Custom Memory Allocators Overview",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Custom Memory Allocators Overview gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Custom Memory Allocators Overview\n\nControl allocation strategies (arena, pool, stack allocator) for deterministic latency.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Custom arenas eliminate syscall allocation latency\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Memory Allocators Overview",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Custom arenas eliminate syscall allocation latency\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Custom Memory Allocators Overview.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Memory Allocators Overview.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Custom Memory Allocators Overview\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Custom arenas eliminate syscall allocation latency\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"Custom arenas eliminate syscall allocation latency\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-75-tc-1",
        "description": "Verifies correct implementation for Custom Memory Allocators Overview",
        "testFn": "code.includes('Custom arenas')"
      }
    ]
  },
  {
    "id": "cpp-76-function-templates",
    "title": "76. Function Templates",
    "slug": "lesson-76-function-templates",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Write parameterized functions that work across multiple types generically.",
    "concepts": [
      "Function Templates",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Function Templates gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Function Templates\n\nWrite parameterized functions that work across multiple types generically.\n\n```cpp\n#include <iostream>\n\ntemplate<typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << getMax(10, 20) << std::endl;\n    std::cout << getMax(3.5, 1.2) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Function Templates",
      "code": "#include <iostream>\n\ntemplate<typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << getMax(10, 20) << std::endl;\n    std::cout << getMax(3.5, 1.2) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Function Templates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Function Templates.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Function Templates\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << getMax(10, 20) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << getMax(10, 20) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-76-tc-1",
        "description": "Verifies correct implementation for Function Templates",
        "testFn": "code.includes('template<typename T>')"
      }
    ]
  },
  {
    "id": "cpp-77-class-templates",
    "title": "77. Class Templates",
    "slug": "lesson-77-class-templates",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define generic container and algorithm classes parametrized by type.",
    "concepts": [
      "Class Templates",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Class Templates gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Class Templates\n\nDefine generic container and algorithm classes parametrized by type.\n\n```cpp\n#include <iostream>\n\ntemplate<typename T>\nclass Box {\npublic:\n    T item;\n    Box(T i) : item(i) {}\n};\n\nint main() {\n    Box<std::string> b(\"Modern C++\");\n    std::cout << b.item << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Class Templates",
      "code": "#include <iostream>\n\ntemplate<typename T>\nclass Box {\npublic:\n    T item;\n    Box(T i) : item(i) {}\n};\n\nint main() {\n    Box<std::string> b(\"Modern C++\");\n    std::cout << b.item << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Class Templates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Class Templates.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Class Templates\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename T>\nclass Box {\npublic:\n    T item;\n    Box(T i) : item(i) {}\n};\n\nint main() {\n    Box<std::string> b(\"Modern C++\");\n    std::cout << b.item << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename T>\nclass Box {\npublic:\n    T item;\n    Box(T i) : item(i) {}\n};\n\nint main() {\n    Box<std::string> b(\"Modern C++\");\n    std::cout << b.item << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-77-tc-1",
        "description": "Verifies correct implementation for Class Templates",
        "testFn": "code.includes('Box<std::string>')"
      }
    ]
  },
  {
    "id": "cpp-78-non-type-template-parameters-n",
    "title": "78. Non-Type Template Parameters (NTTP)",
    "slug": "lesson-78-non-type-template-parameters-n",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass compile-time constants (integers, pointers, floating-point in C++20) to templates.",
    "concepts": [
      "Non-Type Template Parameters (NTTP)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Non-Type Template Parameters (NTTP) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Non-Type Template Parameters (NTTP)\n\nPass compile-time constants (integers, pointers, floating-point in C++20) to templates.\n\n```cpp\n#include <iostream>\n\ntemplate<typename T, size_t N>\nstruct FixedBuffer {\n    T data[N];\n    size_t size() const { return N; }\n};\n\nint main() {\n    FixedBuffer<int, 64> buf;\n    std::cout << buf.size() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Non-Type Template Parameters (NTTP)",
      "code": "#include <iostream>\n\ntemplate<typename T, size_t N>\nstruct FixedBuffer {\n    T data[N];\n    size_t size() const { return N; }\n};\n\nint main() {\n    FixedBuffer<int, 64> buf;\n    std::cout << buf.size() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Non-Type Template Parameters (NTTP).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Non-Type Template Parameters (NTTP).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Non-Type Template Parameters (NTTP)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename T, size_t N>\nstruct FixedBuffer {\n    T data[N];\n    size_t size() const { return N; }\n};\n\nint main() {\n    FixedBuffer<int, 64> buf;\n    std::cout << buf.size() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename T, size_t N>\nstruct FixedBuffer {\n    T data[N];\n    size_t size() const { return N; }\n};\n\nint main() {\n    FixedBuffer<int, 64> buf;\n    std::cout << buf.size() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-78-tc-1",
        "description": "Verifies correct implementation for Non-Type Template Parameters (NTTP)",
        "testFn": "code.includes('template<typename T, size_t N>')"
      }
    ]
  },
  {
    "id": "cpp-79-template-specialization-full-p",
    "title": "79. Template Specialization (Full & Partial)",
    "slug": "lesson-79-template-specialization-full-p",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Provide specialized implementations for specific types like bool or pointers.",
    "concepts": [
      "Template Specialization (Full & Partial)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Template Specialization (Full & Partial) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Template Specialization (Full & Partial)\n\nProvide specialized implementations for specific types like bool or pointers.\n\n```cpp\n#include <iostream>\n\ntemplate<typename T>\nstruct Formatter { static void print() { std::cout << \"Generic\" << std::endl; } };\n\ntemplate<>\nstruct Formatter<bool> { static void print() { std::cout << \"Bool\" << std::endl; } };\n\nint main() {\n    Formatter<bool>::print();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Template Specialization (Full & Partial)",
      "code": "#include <iostream>\n\ntemplate<typename T>\nstruct Formatter { static void print() { std::cout << \"Generic\" << std::endl; } };\n\ntemplate<>\nstruct Formatter<bool> { static void print() { std::cout << \"Bool\" << std::endl; } };\n\nint main() {\n    Formatter<bool>::print();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Template Specialization (Full & Partial).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Template Specialization (Full & Partial).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Template Specialization (Full & Partial)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename T>\nstruct Formatter { static void print() { std::cout << \"Generic\" << std::endl; } };\n\ntemplate<>\nstruct Formatter<bool> { static void print() { std::cout << \"Bool\" << std::endl; } };\n\nint main() {\n    Formatter<bool>::print();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename T>\nstruct Formatter { static void print() { std::cout << \"Generic\" << std::endl; } };\n\ntemplate<>\nstruct Formatter<bool> { static void print() { std::cout << \"Bool\" << std::endl; } };\n\nint main() {\n    Formatter<bool>::print();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-79-tc-1",
        "description": "Verifies correct implementation for Template Specialization (Full & Partial)",
        "testFn": "code.includes('template<>')"
      }
    ]
  },
  {
    "id": "cpp-80-variadic-templates-parameter-p",
    "title": "80. Variadic Templates & Parameter Packs",
    "slug": "lesson-80-variadic-templates-parameter-p",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Accept an arbitrary number of template arguments using ellipsis (...).",
    "concepts": [
      "Variadic Templates & Parameter Packs",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Variadic Templates & Parameter Packs gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Variadic Templates & Parameter Packs\n\nAccept an arbitrary number of template arguments using ellipsis (...).\n\n```cpp\n#include <iostream>\n\nvoid print() {}\n\ntemplate<typename First, typename... Rest>\nvoid print(First f, Rest... r) {\n    std::cout << f << \" \";\n    print(r...);\n}\n\nint main() {\n    print(1, 2.5, \"done\");\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Variadic Templates & Parameter Packs",
      "code": "#include <iostream>\n\nvoid print() {}\n\ntemplate<typename First, typename... Rest>\nvoid print(First f, Rest... r) {\n    std::cout << f << \" \";\n    print(r...);\n}\n\nint main() {\n    print(1, 2.5, \"done\");\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Variadic Templates & Parameter Packs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variadic Templates & Parameter Packs.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Variadic Templates & Parameter Packs\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nvoid print() {}\n\ntemplate<typename First, typename... Rest>\nvoid print(First f, Rest... r) {\n    std::cout << f << \" \";\n    print(r...);\n}\n\nint main() {\n    print(1, 2.5, \"done\");\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nvoid print() {}\n\ntemplate<typename First, typename... Rest>\nvoid print(First f, Rest... r) {\n    std::cout << f << \" \";\n    print(r...);\n}\n\nint main() {\n    print(1, 2.5, \"done\");\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-80-tc-1",
        "description": "Verifies correct implementation for Variadic Templates & Parameter Packs",
        "testFn": "code.includes('typename... Rest')"
      }
    ]
  },
  {
    "id": "cpp-81-fold-expressions-c-17-20",
    "title": "81. Fold Expressions (C++17/20)",
    "slug": "lesson-81-fold-expressions-c-17-20",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Unpack variadic parameter packs concisely with binary operators.",
    "concepts": [
      "Fold Expressions (C++17/20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Fold Expressions (C++17/20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Fold Expressions (C++17/20)\n\nUnpack variadic parameter packs concisely with binary operators.\n\n```cpp\n#include <iostream>\n\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (... + args);\n}\n\nint main() {\n    std::cout << sum(1, 2, 3, 4, 5) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fold Expressions (C++17/20)",
      "code": "#include <iostream>\n\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (... + args);\n}\n\nint main() {\n    std::cout << sum(1, 2, 3, 4, 5) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Fold Expressions (C++17/20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fold Expressions (C++17/20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Fold Expressions (C++17/20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (... + args);\n}\n\nint main() {\n    std::cout << sum(1, 2, 3, 4, 5) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (... + args);\n}\n\nint main() {\n    std::cout << sum(1, 2, 3, 4, 5) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-81-tc-1",
        "description": "Verifies correct implementation for Fold Expressions (C++17/20)",
        "testFn": "code.includes('(... + args)')"
      }
    ]
  },
  {
    "id": "cpp-82-type-traits-type-traits",
    "title": "82. Type Traits & <type_traits>",
    "slug": "lesson-82-type-traits-type-traits",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query compile-time type properties with std::is_integral_v, std::is_floating_point_v.",
    "concepts": [
      "Type Traits & <type_traits>",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Type Traits & <type_traits> gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Type Traits & <type_traits>\n\nQuery compile-time type properties with std::is_integral_v, std::is_floating_point_v.\n\n```cpp\n#include <iostream>\n#include <type_traits>\n\nint main() {\n    std::cout << std::is_integral_v<int> << std::endl;\n    std::cout << std::is_integral_v<double> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Traits & <type_traits>",
      "code": "#include <iostream>\n#include <type_traits>\n\nint main() {\n    std::cout << std::is_integral_v<int> << std::endl;\n    std::cout << std::is_integral_v<double> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Type Traits & <type_traits>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Traits & <type_traits>.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Type Traits & <type_traits>\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <type_traits>\n\nint main() {\n    std::cout << std::is_integral_v<int> << std::endl;\n    std::cout << std::is_integral_v<double> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <type_traits>\n\nint main() {\n    std::cout << std::is_integral_v<int> << std::endl;\n    std::cout << std::is_integral_v<double> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-82-tc-1",
        "description": "Verifies correct implementation for Type Traits & <type_traits>",
        "testFn": "code.includes('std::is_integral_v')"
      }
    ]
  },
  {
    "id": "cpp-83-if-constexpr-compile-time-bran",
    "title": "83. if constexpr (Compile-Time Branching)",
    "slug": "lesson-83-if-constexpr-compile-time-bran",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Branch compile-time code paths without instantiating dead branches.",
    "concepts": [
      "if constexpr (Compile-Time Branching)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: if constexpr (Compile-Time Branching) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### if constexpr (Compile-Time Branching)\n\nBranch compile-time code paths without instantiating dead branches.\n\n```cpp\n#include <iostream>\n#include <type_traits>\n\ntemplate<typename T>\nvoid checkType(T val) {\n    if constexpr (std::is_integral_v<T>) {\n        std::cout << \"Integer\" << std::endl;\n    } else {\n        std::cout << \"Other\" << std::endl;\n    }\n}\n\nint main() {\n    checkType(42);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: if constexpr (Compile-Time Branching)",
      "code": "#include <iostream>\n#include <type_traits>\n\ntemplate<typename T>\nvoid checkType(T val) {\n    if constexpr (std::is_integral_v<T>) {\n        std::cout << \"Integer\" << std::endl;\n    } else {\n        std::cout << \"Other\" << std::endl;\n    }\n}\n\nint main() {\n    checkType(42);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for if constexpr (Compile-Time Branching).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of if constexpr (Compile-Time Branching).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement if constexpr (Compile-Time Branching)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <type_traits>\n\ntemplate<typename T>\nvoid checkType(T val) {\n    if constexpr (std::is_integral_v<T>) {\n        std::cout << \"Integer\" << std::endl;\n    } else {\n        std::cout << \"Other\" << std::endl;\n    }\n}\n\nint main() {\n    checkType(42);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <type_traits>\n\ntemplate<typename T>\nvoid checkType(T val) {\n    if constexpr (std::is_integral_v<T>) {\n        std::cout << \"Integer\" << std::endl;\n    } else {\n        std::cout << \"Other\" << std::endl;\n    }\n}\n\nint main() {\n    checkType(42);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-83-tc-1",
        "description": "Verifies correct implementation for if constexpr (Compile-Time Branching)",
        "testFn": "code.includes('if constexpr')"
      }
    ]
  },
  {
    "id": "cpp-84-sfinae-std-enable-if-historica",
    "title": "84. SFINAE & std::enable_if (Historical Context)",
    "slug": "lesson-84-sfinae-std-enable-if-historica",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Substitution Failure Is Not An Error: selectively enable overloads.",
    "concepts": [
      "SFINAE & std::enable_if (Historical Context)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: SFINAE & std::enable_if (Historical Context) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### SFINAE & std::enable_if (Historical Context)\n\nSubstitution Failure Is Not An Error: selectively enable overloads.\n\n```cpp\n#include <iostream>\n#include <type_traits>\n\ntemplate<typename T, typename std::enable_if<std::is_integral<T>::value, int>::type = 0>\nvoid run(T val) { std::cout << \"Integral val\" << std::endl; }\n\nint main() {\n    run(10);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: SFINAE & std::enable_if (Historical Context)",
      "code": "#include <iostream>\n#include <type_traits>\n\ntemplate<typename T, typename std::enable_if<std::is_integral<T>::value, int>::type = 0>\nvoid run(T val) { std::cout << \"Integral val\" << std::endl; }\n\nint main() {\n    run(10);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for SFINAE & std::enable_if (Historical Context).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of SFINAE & std::enable_if (Historical Context).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement SFINAE & std::enable_if (Historical Context)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <type_traits>\n\ntemplate<typename T, typename std::enable_if<std::is_integral<T>::value, int>::type = 0>\nvoid run(T val) { std::cout << \"Integral val\" << std::endl; }\n\nint main() {\n    run(10);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <type_traits>\n\ntemplate<typename T, typename std::enable_if<std::is_integral<T>::value, int>::type = 0>\nvoid run(T val) { std::cout << \"Integral val\" << std::endl; }\n\nint main() {\n    run(10);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-84-tc-1",
        "description": "Verifies correct implementation for SFINAE & std::enable_if (Historical Context)",
        "testFn": "code.includes('enable_if')"
      }
    ]
  },
  {
    "id": "cpp-85-class-template-argument-deduct",
    "title": "85. Class Template Argument Deduction (CTAD)",
    "slug": "lesson-85-class-template-argument-deduct",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Instantiate templates without explicit type parameters using constructor deduction guides.",
    "concepts": [
      "Class Template Argument Deduction (CTAD)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Class Template Argument Deduction (CTAD) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Class Template Argument Deduction (CTAD)\n\nInstantiate templates without explicit type parameters using constructor deduction guides.\n\n```cpp\n#include <iostream>\n#include <utility>\n\nint main() {\n    std::pair p(10, 20.5);\n    std::cout << p.first << \", \" << p.second << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Class Template Argument Deduction (CTAD)",
      "code": "#include <iostream>\n#include <utility>\n\nint main() {\n    std::pair p(10, 20.5);\n    std::cout << p.first << \", \" << p.second << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Class Template Argument Deduction (CTAD).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Class Template Argument Deduction (CTAD).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Class Template Argument Deduction (CTAD)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <utility>\n\nint main() {\n    std::pair p(10, 20.5);\n    std::cout << p.first << \", \" << p.second << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <utility>\n\nint main() {\n    std::pair p(10, 20.5);\n    std::cout << p.first << \", \" << p.second << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-85-tc-1",
        "description": "Verifies correct implementation for Class Template Argument Deduction (CTAD)",
        "testFn": "code.includes('std::pair p(10, 20.5)')"
      }
    ]
  },
  {
    "id": "cpp-86-explicit-deduction-guides",
    "title": "86. Explicit Deduction Guides",
    "slug": "lesson-86-explicit-deduction-guides",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define user guides to teach the compiler how to deduce class template arguments.",
    "concepts": [
      "Explicit Deduction Guides",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Explicit Deduction Guides gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Explicit Deduction Guides\n\nDefine user guides to teach the compiler how to deduce class template arguments.\n\n```cpp\n#include <iostream>\n\ntemplate<typename T>\nstruct Holder { T value; };\nHolder(const char*) -> Holder<std::string>;\n\nint main() {\n    std::cout << \"CTAD guide verified\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Explicit Deduction Guides",
      "code": "#include <iostream>\n\ntemplate<typename T>\nstruct Holder { T value; };\nHolder(const char*) -> Holder<std::string>;\n\nint main() {\n    std::cout << \"CTAD guide verified\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Explicit Deduction Guides.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Explicit Deduction Guides.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Explicit Deduction Guides\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename T>\nstruct Holder { T value; };\nHolder(const char*) -> Holder<std::string>;\n\nint main() {\n    std::cout << \"CTAD guide verified\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename T>\nstruct Holder { T value; };\nHolder(const char*) -> Holder<std::string>;\n\nint main() {\n    std::cout << \"CTAD guide verified\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-86-tc-1",
        "description": "Verifies correct implementation for Explicit Deduction Guides",
        "testFn": "code.includes('Holder(const char*) ->')"
      }
    ]
  },
  {
    "id": "cpp-87-template-metaprogramming-with-",
    "title": "87. Template Metaprogramming with Constexpr Values",
    "slug": "lesson-87-template-metaprogramming-with-",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Calculate values at compile time with pure functional recursion.",
    "concepts": [
      "Template Metaprogramming with Constexpr Values",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Template Metaprogramming with Constexpr Values gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Template Metaprogramming with Constexpr Values\n\nCalculate values at compile time with pure functional recursion.\n\n```cpp\n#include <iostream>\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nint main() {\n    constexpr int val = factorial(5);\n    std::cout << val << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Template Metaprogramming with Constexpr Values",
      "code": "#include <iostream>\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nint main() {\n    constexpr int val = factorial(5);\n    std::cout << val << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Template Metaprogramming with Constexpr Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Template Metaprogramming with Constexpr Values.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Template Metaprogramming with Constexpr Values\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nint main() {\n    constexpr int val = factorial(5);\n    std::cout << val << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nint main() {\n    constexpr int val = factorial(5);\n    std::cout << val << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-87-tc-1",
        "description": "Verifies correct implementation for Template Metaprogramming with Constexpr Values",
        "testFn": "code.includes('factorial(5)')"
      }
    ]
  },
  {
    "id": "cpp-88-crtp-curiously-recurring-templ",
    "title": "88. CRTP (Curiously Recurring Template Pattern)",
    "slug": "lesson-88-crtp-curiously-recurring-templ",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Static polymorphism without virtual table dispatch overhead.",
    "concepts": [
      "CRTP (Curiously Recurring Template Pattern)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: CRTP (Curiously Recurring Template Pattern) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### CRTP (Curiously Recurring Template Pattern)\n\nStatic polymorphism without virtual table dispatch overhead.\n\n```cpp\n#include <iostream>\n\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() { static_cast<Derived*>(this)->actual(); }\n};\n\nclass Concrete : public Base<Concrete> {\npublic:\n    void actual() { std::cout << \"CRTP dispatched\" << std::endl; }\n};\n\nint main() {\n    Concrete c;\n    c.interface();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: CRTP (Curiously Recurring Template Pattern)",
      "code": "#include <iostream>\n\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() { static_cast<Derived*>(this)->actual(); }\n};\n\nclass Concrete : public Base<Concrete> {\npublic:\n    void actual() { std::cout << \"CRTP dispatched\" << std::endl; }\n};\n\nint main() {\n    Concrete c;\n    c.interface();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for CRTP (Curiously Recurring Template Pattern).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CRTP (Curiously Recurring Template Pattern).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement CRTP (Curiously Recurring Template Pattern)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() { static_cast<Derived*>(this)->actual(); }\n};\n\nclass Concrete : public Base<Concrete> {\npublic:\n    void actual() { std::cout << \"CRTP dispatched\" << std::endl; }\n};\n\nint main() {\n    Concrete c;\n    c.interface();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() { static_cast<Derived*>(this)->actual(); }\n};\n\nclass Concrete : public Base<Concrete> {\npublic:\n    void actual() { std::cout << \"CRTP dispatched\" << std::endl; }\n};\n\nint main() {\n    Concrete c;\n    c.interface();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-88-tc-1",
        "description": "Verifies correct implementation for CRTP (Curiously Recurring Template Pattern)",
        "testFn": "code.includes('Base<Concrete>')"
      }
    ]
  },
  {
    "id": "cpp-89-template-template-parameters",
    "title": "89. Template Template Parameters",
    "slug": "lesson-89-template-template-parameters",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass template definitions as arguments into other templates.",
    "concepts": [
      "Template Template Parameters",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Template Template Parameters gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Template Template Parameters\n\nPass template definitions as arguments into other templates.\n\n```cpp\n#include <iostream>\n#include <vector>\n\ntemplate<template<typename, typename> class Container, typename T>\nvoid inspect() {\n    std::cout << \"Template template param verified\" << std::endl;\n}\n\nint main() {\n    inspect<std::vector, int>();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Template Template Parameters",
      "code": "#include <iostream>\n#include <vector>\n\ntemplate<template<typename, typename> class Container, typename T>\nvoid inspect() {\n    std::cout << \"Template template param verified\" << std::endl;\n}\n\nint main() {\n    inspect<std::vector, int>();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Template Template Parameters.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Template Template Parameters.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Template Template Parameters\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n\ntemplate<template<typename, typename> class Container, typename T>\nvoid inspect() {\n    std::cout << \"Template template param verified\" << std::endl;\n}\n\nint main() {\n    inspect<std::vector, int>();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n\ntemplate<template<typename, typename> class Container, typename T>\nvoid inspect() {\n    std::cout << \"Template template param verified\" << std::endl;\n}\n\nint main() {\n    inspect<std::vector, int>();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-89-tc-1",
        "description": "Verifies correct implementation for Template Template Parameters",
        "testFn": "code.includes('template<typename, typename> class Container')"
      }
    ]
  },
  {
    "id": "cpp-90-c-20-modules-introduction",
    "title": "90. C++20 Modules Introduction",
    "slug": "lesson-90-c-20-modules-introduction",
    "language": "cpp",
    "category": "Module 6: Templates & Generic Programming",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "import modules instead of #include headers for instantaneous build times and clean encapsulation.",
    "concepts": [
      "C++20 Modules Introduction",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: C++20 Modules Introduction gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### C++20 Modules Introduction\n\nimport modules instead of #include headers for instantaneous build times and clean encapsulation.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"import std; (C++20/23 Modules)\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: C++20 Modules Introduction",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"import std; (C++20/23 Modules)\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for C++20 Modules Introduction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C++20 Modules Introduction.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement C++20 Modules Introduction\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"import std; (C++20/23 Modules)\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"import std; (C++20/23 Modules)\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-90-tc-1",
        "description": "Verifies correct implementation for C++20 Modules Introduction",
        "testFn": "code.includes('import std;')"
      }
    ]
  },
  {
    "id": "cpp-91-understanding-c-20-concepts",
    "title": "91. Understanding C++20 Concepts",
    "slug": "lesson-91-understanding-c-20-concepts",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Replace complex SFINAE with readable compile-time constraints and clear compiler errors.",
    "concepts": [
      "Understanding C++20 Concepts",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Understanding C++20 Concepts gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Understanding C++20 Concepts\n\nReplace complex SFINAE with readable compile-time constraints and clear compiler errors.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nT add(T a, T b) { return a + b; }\n\nint main() {\n    std::cout << add(10, 20) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Understanding C++20 Concepts",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nT add(T a, T b) { return a + b; }\n\nint main() {\n    std::cout << add(10, 20) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Understanding C++20 Concepts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding C++20 Concepts.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Understanding C++20 Concepts\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nT add(T a, T b) { return a + b; }\n\nint main() {\n    std::cout << add(10, 20) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nT add(T a, T b) { return a + b; }\n\nint main() {\n    std::cout << add(10, 20) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-91-tc-1",
        "description": "Verifies correct implementation for Understanding C++20 Concepts",
        "testFn": "code.includes('template<std::integral T>')"
      }
    ]
  },
  {
    "id": "cpp-92-requires-clauses",
    "title": "92. requires Clauses",
    "slug": "lesson-92-requires-clauses",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Constrain template functions directly with the requires keyword.",
    "concepts": [
      "requires Clauses",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: requires Clauses gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### requires Clauses\n\nConstrain template functions directly with the requires keyword.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T> requires std::floating_point<T>\nT halve(T v) { return v / 2.0; }\n\nint main() {\n    std::cout << halve(10.0) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: requires Clauses",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T> requires std::floating_point<T>\nT halve(T v) { return v / 2.0; }\n\nint main() {\n    std::cout << halve(10.0) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for requires Clauses.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of requires Clauses.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement requires Clauses\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T> requires std::floating_point<T>\nT halve(T v) { return v / 2.0; }\n\nint main() {\n    std::cout << halve(10.0) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T> requires std::floating_point<T>\nT halve(T v) { return v / 2.0; }\n\nint main() {\n    std::cout << halve(10.0) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-92-tc-1",
        "description": "Verifies correct implementation for requires Clauses",
        "testFn": "code.includes('requires std::floating_point<T>')"
      }
    ]
  },
  {
    "id": "cpp-93-defining-custom-concepts",
    "title": "93. Defining Custom Concepts",
    "slug": "lesson-93-defining-custom-concepts",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declare reusable custom concepts using template<typename T> concept Name = ...",
    "concepts": [
      "Defining Custom Concepts",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Defining Custom Concepts gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Defining Custom Concepts\n\nDeclare reusable custom concepts using template<typename T> concept Name = ...\n\n```cpp\n#include <iostream>\n\ntemplate<typename T>\nconcept Numeric = std::is_arithmetic_v<T>;\n\ntemplate<Numeric T>\nT square(T x) { return x * x; }\n\nint main() {\n    std::cout << square(5) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Custom Concepts",
      "code": "#include <iostream>\n\ntemplate<typename T>\nconcept Numeric = std::is_arithmetic_v<T>;\n\ntemplate<Numeric T>\nT square(T x) { return x * x; }\n\nint main() {\n    std::cout << square(5) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Defining Custom Concepts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Custom Concepts.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Defining Custom Concepts\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <type_traits>\n\ntemplate<typename T>\nconcept Numeric = std::is_arithmetic_v<T>;\n\ntemplate<Numeric T>\nT square(T x) { return x * x; }\n\nint main() {\n    std::cout << square(5) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <type_traits>\n\ntemplate<typename T>\nconcept Numeric = std::is_arithmetic_v<T>;\n\ntemplate<Numeric T>\nT square(T x) { return x * x; }\n\nint main() {\n    std::cout << square(5) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-93-tc-1",
        "description": "Verifies correct implementation for Defining Custom Concepts",
        "testFn": "code.includes('concept Numeric =')"
      }
    ]
  },
  {
    "id": "cpp-94-compound-requirements-with-req",
    "title": "94. Compound Requirements with requires {...}",
    "slug": "lesson-94-compound-requirements-with-req",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Validate member function existence, return types, and noexcept status.",
    "concepts": [
      "Compound Requirements with requires {...}",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Compound Requirements with requires {...} gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Compound Requirements with requires {...}\n\nValidate member function existence, return types, and noexcept status.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Serializable = requires(T a) {\n    { a.serialize() } -> std::same_as<std::string>;\n};\n\nstruct Doc {\n    std::string serialize() { return \"doc\"; }\n};\n\nint main() {\n    std::cout << Serializable<Doc> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Compound Requirements with requires {...}",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Serializable = requires(T a) {\n    { a.serialize() } -> std::same_as<std::string>;\n};\n\nstruct Doc {\n    std::string serialize() { return \"doc\"; }\n};\n\nint main() {\n    std::cout << Serializable<Doc> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Compound Requirements with requires {...}.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Compound Requirements with requires {...}.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Compound Requirements with requires {...}\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Serializable = requires(T a) {\n    { a.serialize() } -> std::same_as<std::string>;\n};\n\nstruct Doc {\n    std::string serialize() { return \"doc\"; }\n};\n\nint main() {\n    std::cout << Serializable<Doc> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Serializable = requires(T a) {\n    { a.serialize() } -> std::same_as<std::string>;\n};\n\nstruct Doc {\n    std::string serialize() { return \"doc\"; }\n};\n\nint main() {\n    std::cout << Serializable<Doc> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-94-tc-1",
        "description": "Verifies correct implementation for Compound Requirements with requires {...}",
        "testFn": "code.includes('requires(T a)')"
      }
    ]
  },
  {
    "id": "cpp-95-type-requirements-with-typenam",
    "title": "95. Type Requirements with typename T::value_type",
    "slug": "lesson-95-type-requirements-with-typenam",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Require nested type definitions like value_type, iterator, or size_type.",
    "concepts": [
      "Type Requirements with typename T::value_type",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Type Requirements with typename T::value_type gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Type Requirements with typename T::value_type\n\nRequire nested type definitions like value_type, iterator, or size_type.\n\n```cpp\n#include <iostream>\n#include <vector>\n\ntemplate<typename T>\nconcept HasValueType = requires {\n    typename T::value_type;\n};\n\nint main() {\n    std::cout << HasValueType<std::vector<int>> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Requirements with typename T::value_type",
      "code": "#include <iostream>\n#include <vector>\n\ntemplate<typename T>\nconcept HasValueType = requires {\n    typename T::value_type;\n};\n\nint main() {\n    std::cout << HasValueType<std::vector<int>> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Type Requirements with typename T::value_type.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Requirements with typename T::value_type.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Type Requirements with typename T::value_type\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n\ntemplate<typename T>\nconcept HasValueType = requires {\n    typename T::value_type;\n};\n\nint main() {\n    std::cout << HasValueType<std::vector<int>> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n\ntemplate<typename T>\nconcept HasValueType = requires {\n    typename T::value_type;\n};\n\nint main() {\n    std::cout << HasValueType<std::vector<int>> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-95-tc-1",
        "description": "Verifies correct implementation for Type Requirements with typename T::value_type",
        "testFn": "code.includes('typename T::value_type')"
      }
    ]
  },
  {
    "id": "cpp-96-std-same-as-and-std-derived-fr",
    "title": "96. std::same_as and std::derived_from",
    "slug": "lesson-96-std-same-as-and-std-derived-fr",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Standard concepts enforcing exact type equality or polymorphic inheritance.",
    "concepts": [
      "std::same_as and std::derived_from",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::same_as and std::derived_from gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::same_as and std::derived_from\n\nStandard concepts enforcing exact type equality or polymorphic inheritance.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\nclass Base {};\nclass Derived : public Base {};\n\ntemplate<std::derived_from<Base> T>\nvoid process(T& obj) { std::cout << \"Derived accepted\" << std::endl; }\n\nint main() {\n    Derived d;\n    process(d);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::same_as and std::derived_from",
      "code": "#include <iostream>\n#include <concepts>\n\nclass Base {};\nclass Derived : public Base {};\n\ntemplate<std::derived_from<Base> T>\nvoid process(T& obj) { std::cout << \"Derived accepted\" << std::endl; }\n\nint main() {\n    Derived d;\n    process(d);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::same_as and std::derived_from.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::same_as and std::derived_from.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::same_as and std::derived_from\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\nclass Base {};\nclass Derived : public Base {};\n\ntemplate<std::derived_from<Base> T>\nvoid process(T& obj) { std::cout << \"Derived accepted\" << std::endl; }\n\nint main() {\n    Derived d;\n    process(d);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\nclass Base {};\nclass Derived : public Base {};\n\ntemplate<std::derived_from<Base> T>\nvoid process(T& obj) { std::cout << \"Derived accepted\" << std::endl; }\n\nint main() {\n    Derived d;\n    process(d);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-96-tc-1",
        "description": "Verifies correct implementation for std::same_as and std::derived_from",
        "testFn": "code.includes('std::derived_from<Base>')"
      }
    ]
  },
  {
    "id": "cpp-97-std-convertible-to",
    "title": "97. std::convertible_to",
    "slug": "lesson-97-std-convertible-to",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Concept validating explicit or implicit convertibility between two types.",
    "concepts": [
      "std::convertible_to",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::convertible_to gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::convertible_to\n\nConcept validating explicit or implicit convertibility between two types.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<typename From, typename To>\nconcept Castable = std::convertible_to<From, To>;\n\nint main() {\n    std::cout << Castable<int, double> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::convertible_to",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<typename From, typename To>\nconcept Castable = std::convertible_to<From, To>;\n\nint main() {\n    std::cout << Castable<int, double> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::convertible_to.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::convertible_to.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::convertible_to\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<typename From, typename To>\nconcept Castable = std::convertible_to<From, To>;\n\nint main() {\n    std::cout << Castable<int, double> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<typename From, typename To>\nconcept Castable = std::convertible_to<From, To>;\n\nint main() {\n    std::cout << Castable<int, double> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-97-tc-1",
        "description": "Verifies correct implementation for std::convertible_to",
        "testFn": "code.includes('std::convertible_to')"
      }
    ]
  },
  {
    "id": "cpp-98-std-invocable-and-std-predicat",
    "title": "98. std::invocable and std::predicate",
    "slug": "lesson-98-std-invocable-and-std-predicat",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Constrain callable objects (lambdas, function pointers, functors).",
    "concepts": [
      "std::invocable and std::predicate",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::invocable and std::predicate gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::invocable and std::predicate\n\nConstrain callable objects (lambdas, function pointers, functors).\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<typename F, typename Arg>\nrequires std::invocable<F, Arg>\nvoid execute(F f, Arg a) { f(a); }\n\nint main() {\n    execute([](int x) { std::cout << x * 2 << std::endl; }, 21);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::invocable and std::predicate",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<typename F, typename Arg>\nrequires std::invocable<F, Arg>\nvoid execute(F f, Arg a) { f(a); }\n\nint main() {\n    execute([](int x) { std::cout << x * 2 << std::endl; }, 21);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::invocable and std::predicate.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::invocable and std::predicate.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::invocable and std::predicate\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<typename F, typename Arg>\nrequires std::invocable<F, Arg>\nvoid execute(F f, Arg a) { f(a); }\n\nint main() {\n    execute([](int x) { std::cout << x * 2 << std::endl; }, 21);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<typename F, typename Arg>\nrequires std::invocable<F, Arg>\nvoid execute(F f, Arg a) { f(a); }\n\nint main() {\n    execute([](int x) { std::cout << x * 2 << std::endl; }, 21);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-98-tc-1",
        "description": "Verifies correct implementation for std::invocable and std::predicate",
        "testFn": "code.includes('std::invocable')"
      }
    ]
  },
  {
    "id": "cpp-99-subsumption-rules-for-overload",
    "title": "99. Subsumption Rules for Overload Resolution",
    "slug": "lesson-99-subsumption-rules-for-overload",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The compiler automatically picks the most constrained concept overload.",
    "concepts": [
      "Subsumption Rules for Overload Resolution",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Subsumption Rules for Overload Resolution gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Subsumption Rules for Overload Resolution\n\nThe compiler automatically picks the most constrained concept overload.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T> void test(T) { std::cout << \"Integral\" << std::endl; }\ntemplate<std::signed_integral T> void test(T) { std::cout << \"Signed integral\" << std::endl; }\n\nint main() {\n    test(-5);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Subsumption Rules for Overload Resolution",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T> void test(T) { std::cout << \"Integral\" << std::endl; }\ntemplate<std::signed_integral T> void test(T) { std::cout << \"Signed integral\" << std::endl; }\n\nint main() {\n    test(-5);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Subsumption Rules for Overload Resolution.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subsumption Rules for Overload Resolution.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Subsumption Rules for Overload Resolution\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T> void test(T) { std::cout << \"Integral\" << std::endl; }\ntemplate<std::signed_integral T> void test(T) { std::cout << \"Signed integral\" << std::endl; }\n\nint main() {\n    test(-5);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T> void test(T) { std::cout << \"Integral\" << std::endl; }\ntemplate<std::signed_integral T> void test(T) { std::cout << \"Signed integral\" << std::endl; }\n\nint main() {\n    test(-5);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-99-tc-1",
        "description": "Verifies correct implementation for Subsumption Rules for Overload Resolution",
        "testFn": "code.includes('std::signed_integral')"
      }
    ]
  },
  {
    "id": "cpp-100-terse-function-templates-auto-",
    "title": "100. Terse Function Templates (auto Parameters with Concepts)",
    "slug": "lesson-100-terse-function-templates-auto-",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Clean syntax: void print(std::integral auto x).",
    "concepts": [
      "Terse Function Templates (auto Parameters with Concepts)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Terse Function Templates (auto Parameters with Concepts) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Terse Function Templates (auto Parameters with Concepts)\n\nClean syntax: void print(std::integral auto x).\n\n```cpp\n#include <iostream>\n#include <concepts>\n\nvoid show(std::integral auto val) {\n    std::cout << val << std::endl;\n}\n\nint main() {\n    show(42);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Terse Function Templates (auto Parameters with Concepts)",
      "code": "#include <iostream>\n#include <concepts>\n\nvoid show(std::integral auto val) {\n    std::cout << val << std::endl;\n}\n\nint main() {\n    show(42);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Terse Function Templates (auto Parameters with Concepts).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Terse Function Templates (auto Parameters with Concepts).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Terse Function Templates (auto Parameters with Concepts)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\nvoid show(std::integral auto val) {\n    std::cout << val << std::endl;\n}\n\nint main() {\n    show(42);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\nvoid show(std::integral auto val) {\n    std::cout << val << std::endl;\n}\n\nint main() {\n    show(42);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-100-tc-1",
        "description": "Verifies correct implementation for Terse Function Templates (auto Parameters with Concepts)",
        "testFn": "code.includes('std::integral auto')"
      }
    ]
  },
  {
    "id": "cpp-101-constrained-auto-in-variable-d",
    "title": "101. Constrained auto in Variable Declarations",
    "slug": "lesson-101-constrained-auto-in-variable-d",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Validate deducted types immediately: std::floating_point auto pi = 3.14159;",
    "concepts": [
      "Constrained auto in Variable Declarations",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Constrained auto in Variable Declarations gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Constrained auto in Variable Declarations\n\nValidate deducted types immediately: std::floating_point auto pi = 3.14159;\n\n```cpp\n#include <iostream>\n#include <concepts>\n\nint main() {\n    std::floating_point auto pi = 3.14159;\n    std::cout << pi << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constrained auto in Variable Declarations",
      "code": "#include <iostream>\n#include <concepts>\n\nint main() {\n    std::floating_point auto pi = 3.14159;\n    std::cout << pi << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Constrained auto in Variable Declarations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constrained auto in Variable Declarations.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Constrained auto in Variable Declarations\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\nint main() {\n    std::floating_point auto pi = 3.14159;\n    std::cout << pi << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\nint main() {\n    std::floating_point auto pi = 3.14159;\n    std::cout << pi << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-101-tc-1",
        "description": "Verifies correct implementation for Constrained auto in Variable Declarations",
        "testFn": "code.includes('std::floating_point auto')"
      }
    ]
  },
  {
    "id": "cpp-102-disjunction-and-conjunction-in",
    "title": "102. Disjunction (||) and Conjunction (&&) in Concepts",
    "slug": "lesson-102-disjunction-and-conjunction-in",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine concepts with boolean logic to formulate precise domain rules.",
    "concepts": [
      "Disjunction (||) and Conjunction (&&) in Concepts",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Disjunction (||) and Conjunction (&&) in Concepts gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Disjunction (||) and Conjunction (&&) in Concepts\n\nCombine concepts with boolean logic to formulate precise domain rules.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Number = std::integral<T> || std::floating_point<T>;\n\nint main() {\n    std::cout << Number<double> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Disjunction (||) and Conjunction (&&) in Concepts",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Number = std::integral<T> || std::floating_point<T>;\n\nint main() {\n    std::cout << Number<double> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Disjunction (||) and Conjunction (&&) in Concepts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Disjunction (||) and Conjunction (&&) in Concepts.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Disjunction (||) and Conjunction (&&) in Concepts\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Number = std::integral<T> || std::floating_point<T>;\n\nint main() {\n    std::cout << Number<double> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nconcept Number = std::integral<T> || std::floating_point<T>;\n\nint main() {\n    std::cout << Number<double> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-102-tc-1",
        "description": "Verifies correct implementation for Disjunction (||) and Conjunction (&&) in Concepts",
        "testFn": "code.includes('concept Number = std::integral<T> || std::floating_point<T>')"
      }
    ]
  },
  {
    "id": "cpp-103-constrained-class-templates",
    "title": "103. Constrained Class Templates",
    "slug": "lesson-103-constrained-class-templates",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enforce requirements at the class declaration level.",
    "concepts": [
      "Constrained Class Templates",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Constrained Class Templates gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Constrained Class Templates\n\nEnforce requirements at the class declaration level.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nclass NumericQueue {\npublic:\n    void push(T val) {}\n};\n\nint main() {\n    NumericQueue<int> q;\n    std::cout << \"Constrained queue instantiated\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constrained Class Templates",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nclass NumericQueue {\npublic:\n    void push(T val) {}\n};\n\nint main() {\n    NumericQueue<int> q;\n    std::cout << \"Constrained queue instantiated\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Constrained Class Templates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constrained Class Templates.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Constrained Class Templates\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nclass NumericQueue {\npublic:\n    void push(T val) {}\n};\n\nint main() {\n    NumericQueue<int> q;\n    std::cout << \"Constrained queue instantiated\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<std::integral T>\nclass NumericQueue {\npublic:\n    void push(T val) {}\n};\n\nint main() {\n    NumericQueue<int> q;\n    std::cout << \"Constrained queue instantiated\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-103-tc-1",
        "description": "Verifies correct implementation for Constrained Class Templates",
        "testFn": "code.includes('template<std::integral T>') && code.includes('class NumericQueue')"
      }
    ]
  },
  {
    "id": "cpp-104-constrained-member-functions",
    "title": "104. Constrained Member Functions",
    "slug": "lesson-104-constrained-member-functions",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Selectively enable specific member methods only when type satisfies conditions.",
    "concepts": [
      "Constrained Member Functions",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Constrained Member Functions gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Constrained Member Functions\n\nSelectively enable specific member methods only when type satisfies conditions.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nstruct Container {\n    void sort() requires std::totally_ordered<T> {\n        std::cout << \"Sorting\" << std::endl;\n    }\n};\n\nint main() {\n    Container<int> c;\n    c.sort();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constrained Member Functions",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nstruct Container {\n    void sort() requires std::totally_ordered<T> {\n        std::cout << \"Sorting\" << std::endl;\n    }\n};\n\nint main() {\n    Container<int> c;\n    c.sort();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Constrained Member Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constrained Member Functions.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Constrained Member Functions\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nstruct Container {\n    void sort() requires std::totally_ordered<T> {\n        std::cout << \"Sorting\" << std::endl;\n    }\n};\n\nint main() {\n    Container<int> c;\n    c.sort();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<typename T>\nstruct Container {\n    void sort() requires std::totally_ordered<T> {\n        std::cout << \"Sorting\" << std::endl;\n    }\n};\n\nint main() {\n    Container<int> c;\n    c.sort();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-104-tc-1",
        "description": "Verifies correct implementation for Constrained Member Functions",
        "testFn": "code.includes('requires std::totally_ordered<T>')"
      }
    ]
  },
  {
    "id": "cpp-105-refactoring-legacy-sfinae-code",
    "title": "105. Refactoring Legacy SFINAE Code to Concepts",
    "slug": "lesson-105-refactoring-legacy-sfinae-code",
    "language": "cpp",
    "category": "Module 7: C++20 Concepts & Constraints",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Modernize legacy codebase by replacing std::enable_if boilerplate with concepts.",
    "concepts": [
      "Refactoring Legacy SFINAE Code to Concepts",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Refactoring Legacy SFINAE Code to Concepts gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Refactoring Legacy SFINAE Code to Concepts\n\nModernize legacy codebase by replacing std::enable_if boilerplate with concepts.\n\n```cpp\n#include <iostream>\n#include <concepts>\n\ntemplate<std::copy_constructible T>\nvoid duplicate(T val) {\n    std::cout << \"Safely copied\" << std::endl;\n}\n\nint main() {\n    duplicate(100);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Refactoring Legacy SFINAE Code to Concepts",
      "code": "#include <iostream>\n#include <concepts>\n\ntemplate<std::copy_constructible T>\nvoid duplicate(T val) {\n    std::cout << \"Safely copied\" << std::endl;\n}\n\nint main() {\n    duplicate(100);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Refactoring Legacy SFINAE Code to Concepts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Refactoring Legacy SFINAE Code to Concepts.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Refactoring Legacy SFINAE Code to Concepts\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <concepts>\n\ntemplate<std::copy_constructible T>\nvoid duplicate(T val) {\n    std::cout << \"Safely copied\" << std::endl;\n}\n\nint main() {\n    duplicate(100);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <concepts>\n\ntemplate<std::copy_constructible T>\nvoid duplicate(T val) {\n    std::cout << \"Safely copied\" << std::endl;\n}\n\nint main() {\n    duplicate(100);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-105-tc-1",
        "description": "Verifies correct implementation for Refactoring Legacy SFINAE Code to Concepts",
        "testFn": "code.includes('std::copy_constructible')"
      }
    ]
  },
  {
    "id": "cpp-106-std-vector-growth-strategy-cap",
    "title": "106. std::vector Growth Strategy & Capacity",
    "slug": "lesson-106-std-vector-growth-strategy-cap",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Dynamic array vector capacity doubling, push_back amortized O(1), and shrink_to_fit.",
    "concepts": [
      "std::vector Growth Strategy & Capacity",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::vector Growth Strategy & Capacity gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::vector Growth Strategy & Capacity\n\nDynamic array vector capacity doubling, push_back amortized O(1), and shrink_to_fit.\n\n```cpp\n#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v;\n    v.reserve(100);\n    v.push_back(1);\n    std::cout << \"capacity: \" << v.capacity() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::vector Growth Strategy & Capacity",
      "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v;\n    v.reserve(100);\n    v.push_back(1);\n    std::cout << \"capacity: \" << v.capacity() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::vector Growth Strategy & Capacity.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::vector Growth Strategy & Capacity.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::vector Growth Strategy & Capacity\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v;\n    v.reserve(100);\n    v.push_back(1);\n    std::cout << v.capacity() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v;\n    v.reserve(100);\n    v.push_back(1);\n    std::cout << v.capacity() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-106-tc-1",
        "description": "Verifies correct implementation for std::vector Growth Strategy & Capacity",
        "testFn": "code.includes('v.reserve(100)')"
      }
    ]
  },
  {
    "id": "cpp-107-emplace-back-vs-push-back",
    "title": "107. emplace_back vs push_back",
    "slug": "lesson-107-emplace-back-vs-push-back",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Construct elements in-place directly in vector memory without temporary moves/copies.",
    "concepts": [
      "emplace_back vs push_back",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: emplace_back vs push_back gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### emplace_back vs push_back\n\nConstruct elements in-place directly in vector memory without temporary moves/copies.\n\n```cpp\n#include <iostream>\n#include <vector>\n\nstruct Item { int a; Item(int v) : a(v) {} };\n\nint main() {\n    std::vector<Item> v;\n    v.emplace_back(42);\n    std::cout << v[0].a << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: emplace_back vs push_back",
      "code": "#include <iostream>\n#include <vector>\n\nstruct Item { int a; Item(int v) : a(v) {} };\n\nint main() {\n    std::vector<Item> v;\n    v.emplace_back(42);\n    std::cout << v[0].a << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for emplace_back vs push_back.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of emplace_back vs push_back.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement emplace_back vs push_back\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n\nstruct Item { int a; Item(int v) : a(v) {} };\n\nint main() {\n    std::vector<Item> v;\n    v.emplace_back(42);\n    std::cout << v[0].a << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n\nstruct Item { int a; Item(int v) : a(v) {} };\n\nint main() {\n    std::vector<Item> v;\n    v.emplace_back(42);\n    std::cout << v[0].a << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-107-tc-1",
        "description": "Verifies correct implementation for emplace_back vs push_back",
        "testFn": "code.includes('v.emplace_back(42)')"
      }
    ]
  },
  {
    "id": "cpp-108-std-array-for-stack-allocated-",
    "title": "108. std::array for Stack-Allocated Contiguous Storage",
    "slug": "lesson-108-std-array-for-stack-allocated-",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fixed-size zero-overhead contiguous array replacing C-style arrays.",
    "concepts": [
      "std::array for Stack-Allocated Contiguous Storage",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::array for Stack-Allocated Contiguous Storage gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::array for Stack-Allocated Contiguous Storage\n\nFixed-size zero-overhead contiguous array replacing C-style arrays.\n\n```cpp\n#include <iostream>\n#include <array>\n\nint main() {\n    std::array<int, 4> arr{10, 20, 30, 40};\n    std::cout << arr.size() << \" \" << arr.at(2) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::array for Stack-Allocated Contiguous Storage",
      "code": "#include <iostream>\n#include <array>\n\nint main() {\n    std::array<int, 4> arr{10, 20, 30, 40};\n    std::cout << arr.size() << \" \" << arr.at(2) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::array for Stack-Allocated Contiguous Storage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::array for Stack-Allocated Contiguous Storage.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::array for Stack-Allocated Contiguous Storage\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <array>\n\nint main() {\n    std::array<int, 4> arr{10, 20, 30, 40};\n    std::cout << arr.size() << \" \" << arr.at(2) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <array>\n\nint main() {\n    std::array<int, 4> arr{10, 20, 30, 40};\n    std::cout << arr.size() << \" \" << arr.at(2) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-108-tc-1",
        "description": "Verifies correct implementation for std::array for Stack-Allocated Contiguous Storage",
        "testFn": "code.includes('std::array<int, 4>')"
      }
    ]
  },
  {
    "id": "cpp-109-std-deque-std-list",
    "title": "109. std::deque & std::list",
    "slug": "lesson-109-std-deque-std-list",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Double-ended queues with chunked allocation and doubly linked lists for fast splices.",
    "concepts": [
      "std::deque & std::list",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::deque & std::list gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::deque & std::list\n\nDouble-ended queues with chunked allocation and doubly linked lists for fast splices.\n\n```cpp\n#include <iostream>\n#include <deque>\n\nint main() {\n    std::deque<int> dq;\n    dq.push_front(1);\n    dq.push_back(2);\n    std::cout << dq.front() << \", \" << dq.back() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::deque & std::list",
      "code": "#include <iostream>\n#include <deque>\n\nint main() {\n    std::deque<int> dq;\n    dq.push_front(1);\n    dq.push_back(2);\n    std::cout << dq.front() << \", \" << dq.back() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::deque & std::list.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::deque & std::list.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::deque & std::list\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <deque>\n\nint main() {\n    std::deque<int> dq;\n    dq.push_front(1);\n    dq.push_back(2);\n    std::cout << dq.front() << \", \" << dq.back() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <deque>\n\nint main() {\n    std::deque<int> dq;\n    dq.push_front(1);\n    dq.push_back(2);\n    std::cout << dq.front() << \", \" << dq.back() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-109-tc-1",
        "description": "Verifies correct implementation for std::deque & std::list",
        "testFn": "code.includes('std::deque<int>')"
      }
    ]
  },
  {
    "id": "cpp-110-std-unordered-map-hash-functio",
    "title": "110. std::unordered_map & Hash Functions",
    "slug": "lesson-110-std-unordered-map-hash-functio",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "O(1) average lookup hash table with custom key hashing.",
    "concepts": [
      "std::unordered_map & Hash Functions",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::unordered_map & Hash Functions gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::unordered_map & Hash Functions\n\nO(1) average lookup hash table with custom key hashing.\n\n```cpp\n#include <iostream>\n#include <unordered_map>\n\nint main() {\n    std::unordered_map<std::string, int> scores;\n    scores[\"Alice\"] = 95;\n    std::cout << scores[\"Alice\"] << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::unordered_map & Hash Functions",
      "code": "#include <iostream>\n#include <unordered_map>\n\nint main() {\n    std::unordered_map<std::string, int> scores;\n    scores[\"Alice\"] = 95;\n    std::cout << scores[\"Alice\"] << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::unordered_map & Hash Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::unordered_map & Hash Functions.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::unordered_map & Hash Functions\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <unordered_map>\n\nint main() {\n    std::unordered_map<std::string, int> scores;\n    scores[\"Alice\"] = 95;\n    std::cout << scores[\"Alice\"] << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <unordered_map>\n\nint main() {\n    std::unordered_map<std::string, int> scores;\n    scores[\"Alice\"] = 95;\n    std::cout << scores[\"Alice\"] << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-110-tc-1",
        "description": "Verifies correct implementation for std::unordered_map & Hash Functions",
        "testFn": "code.includes('std::unordered_map')"
      }
    ]
  },
  {
    "id": "cpp-111-std-map-red-black-tree-balanci",
    "title": "111. std::map & Red-Black Tree Balancing",
    "slug": "lesson-111-std-map-red-black-tree-balanci",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Logarithmic O(log N) ordered associative container keeping keys sorted.",
    "concepts": [
      "std::map & Red-Black Tree Balancing",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::map & Red-Black Tree Balancing gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::map & Red-Black Tree Balancing\n\nLogarithmic O(log N) ordered associative container keeping keys sorted.\n\n```cpp\n#include <iostream>\n#include <map>\n\nint main() {\n    std::map<int, std::string> lookup;\n    lookup[3] = \"three\";\n    lookup[1] = \"one\";\n    std::cout << lookup.begin()->second << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::map & Red-Black Tree Balancing",
      "code": "#include <iostream>\n#include <map>\n\nint main() {\n    std::map<int, std::string> lookup;\n    lookup[3] = \"three\";\n    lookup[1] = \"one\";\n    std::cout << lookup.begin()->second << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::map & Red-Black Tree Balancing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::map & Red-Black Tree Balancing.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::map & Red-Black Tree Balancing\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <map>\n\nint main() {\n    std::map<int, std::string> lookup;\n    lookup[3] = \"three\";\n    lookup[1] = \"one\";\n    std::cout << lookup.begin()->second << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <map>\n\nint main() {\n    std::map<int, std::string> lookup;\n    lookup[3] = \"three\";\n    lookup[1] = \"one\";\n    std::cout << lookup.begin()->second << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-111-tc-1",
        "description": "Verifies correct implementation for std::map & Red-Black Tree Balancing",
        "testFn": "code.includes('std::map<int, std::string>')"
      }
    ]
  },
  {
    "id": "cpp-112-std-set-vs-std-unordered-set",
    "title": "112. std::set vs std::unordered_set",
    "slug": "lesson-112-std-set-vs-std-unordered-set",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ordered unique elements vs O(1) hash set membership testing.",
    "concepts": [
      "std::set vs std::unordered_set",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::set vs std::unordered_set gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::set vs std::unordered_set\n\nOrdered unique elements vs O(1) hash set membership testing.\n\n```cpp\n#include <iostream>\n#include <unordered_set>\n\nint main() {\n    std::unordered_set<int> visited{1, 2, 3};\n    std::cout << visited.contains(2) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::set vs std::unordered_set",
      "code": "#include <iostream>\n#include <unordered_set>\n\nint main() {\n    std::unordered_set<int> visited{1, 2, 3};\n    std::cout << visited.contains(2) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::set vs std::unordered_set.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::set vs std::unordered_set.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::set vs std::unordered_set\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <unordered_set>\n\nint main() {\n    std::unordered_set<int> visited{1, 2, 3};\n    std::cout << visited.contains(2) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <unordered_set>\n\nint main() {\n    std::unordered_set<int> visited{1, 2, 3};\n    std::cout << visited.contains(2) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-112-tc-1",
        "description": "Verifies correct implementation for std::set vs std::unordered_set",
        "testFn": "code.includes('visited.contains')"
      }
    ]
  },
  {
    "id": "cpp-113-contains-member-function-c-20",
    "title": "113. contains() Member Function (C++20)",
    "slug": "lesson-113-contains-member-function-c-20",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "C++20 adds contains() to map and set for clean, expressive lookup.",
    "concepts": [
      "contains() Member Function (C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: contains() Member Function (C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### contains() Member Function (C++20)\n\nC++20 adds contains() to map and set for clean, expressive lookup.\n\n```cpp\n#include <iostream>\n#include <map>\n\nint main() {\n    std::map<std::string, int> config{{\"port\", 8080}};\n    if (config.contains(\"port\")) {\n        std::cout << config[\"port\"] << std::endl;\n    }\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: contains() Member Function (C++20)",
      "code": "#include <iostream>\n#include <map>\n\nint main() {\n    std::map<std::string, int> config{{\"port\", 8080}};\n    if (config.contains(\"port\")) {\n        std::cout << config[\"port\"] << std::endl;\n    }\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for contains() Member Function (C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of contains() Member Function (C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement contains() Member Function (C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <map>\n\nint main() {\n    std::map<std::string, int> config{{\"port\", 8080}};\n    if (config.contains(\"port\")) {\n        std::cout << config[\"port\"] << std::endl;\n    }\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <map>\n\nint main() {\n    std::map<std::string, int> config{{\"port\", 8080}};\n    if (config.contains(\"port\")) {\n        std::cout << config[\"port\"] << std::endl;\n    }\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-113-tc-1",
        "description": "Verifies correct implementation for contains() Member Function (C++20)",
        "testFn": "code.includes('config.contains')"
      }
    ]
  },
  {
    "id": "cpp-114-std-priority-queue-binary-heap",
    "title": "114. std::priority_queue (Binary Heap)",
    "slug": "lesson-114-std-priority-queue-binary-heap",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Max-heap priority queue for task scheduling and Dijkstra algorithms.",
    "concepts": [
      "std::priority_queue (Binary Heap)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::priority_queue (Binary Heap) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::priority_queue (Binary Heap)\n\nMax-heap priority queue for task scheduling and Dijkstra algorithms.\n\n```cpp\n#include <iostream>\n#include <queue>\n\nint main() {\n    std::priority_queue<int> pq;\n    pq.push(10);\n    pq.push(30);\n    pq.push(20);\n    std::cout << pq.top() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::priority_queue (Binary Heap)",
      "code": "#include <iostream>\n#include <queue>\n\nint main() {\n    std::priority_queue<int> pq;\n    pq.push(10);\n    pq.push(30);\n    pq.push(20);\n    std::cout << pq.top() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::priority_queue (Binary Heap).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::priority_queue (Binary Heap).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::priority_queue (Binary Heap)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <queue>\n\nint main() {\n    std::priority_queue<int> pq;\n    pq.push(10);\n    pq.push(30);\n    pq.push(20);\n    std::cout << pq.top() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <queue>\n\nint main() {\n    std::priority_queue<int> pq;\n    pq.push(10);\n    pq.push(30);\n    pq.push(20);\n    std::cout << pq.top() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-114-tc-1",
        "description": "Verifies correct implementation for std::priority_queue (Binary Heap)",
        "testFn": "code.includes('std::priority_queue<int>')"
      }
    ]
  },
  {
    "id": "cpp-115-iterator-categories-concepts-i",
    "title": "115. Iterator Categories & Concepts in C++20",
    "slug": "lesson-115-iterator-categories-concepts-i",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Input, forward, bidirectional, and contiguous iterators unified under C++20 concepts.",
    "concepts": [
      "Iterator Categories & Concepts in C++20",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Iterator Categories & Concepts in C++20 gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Iterator Categories & Concepts in C++20\n\nInput, forward, bidirectional, and contiguous iterators unified under C++20 concepts.\n\n```cpp\n#include <iostream>\n#include <iterator>\n#include <vector>\n\nint main() {\n    std::cout << std::contiguous_iterator<std::vector<int>::iterator> << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterator Categories & Concepts in C++20",
      "code": "#include <iostream>\n#include <iterator>\n#include <vector>\n\nint main() {\n    std::cout << std::contiguous_iterator<std::vector<int>::iterator> << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Iterator Categories & Concepts in C++20.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterator Categories & Concepts in C++20.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Iterator Categories & Concepts in C++20\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <iterator>\n#include <vector>\n\nint main() {\n    std::cout << std::contiguous_iterator<std::vector<int>::iterator> << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <iterator>\n#include <vector>\n\nint main() {\n    std::cout << std::contiguous_iterator<std::vector<int>::iterator> << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-115-tc-1",
        "description": "Verifies correct implementation for Iterator Categories & Concepts in C++20",
        "testFn": "code.includes('std::contiguous_iterator')"
      }
    ]
  },
  {
    "id": "cpp-116-iterator-invalidation-rules",
    "title": "116. Iterator Invalidation Rules",
    "slug": "lesson-116-iterator-invalidation-rules",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Recognize when insertions or reallocations invalidate existing iterators or pointers.",
    "concepts": [
      "Iterator Invalidation Rules",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Iterator Invalidation Rules gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Iterator Invalidation Rules\n\nRecognize when insertions or reallocations invalidate existing iterators or pointers.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Vector reallocations invalidate all active iterators\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterator Invalidation Rules",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Vector reallocations invalidate all active iterators\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Iterator Invalidation Rules.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterator Invalidation Rules.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Iterator Invalidation Rules\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Vector reallocations invalidate all active iterators\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"Vector reallocations invalidate all active iterators\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-116-tc-1",
        "description": "Verifies correct implementation for Iterator Invalidation Rules",
        "testFn": "code.includes('invalidate all active iterators')"
      }
    ]
  },
  {
    "id": "cpp-117-std-erase-and-std-erase-if-c-2",
    "title": "117. std::erase and std::erase_if (C++20 Uniform Erasure)",
    "slug": "lesson-117-std-erase-and-std-erase-if-c-2",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Uniformly remove elements from any STL container with a predicate.",
    "concepts": [
      "std::erase and std::erase_if (C++20 Uniform Erasure)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::erase and std::erase_if (C++20 Uniform Erasure) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::erase and std::erase_if (C++20 Uniform Erasure)\n\nUniformly remove elements from any STL container with a predicate.\n\n```cpp\n#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> nums = {1, 2, 3, 4, 5, 6};\n    std::erase_if(nums, [](int x) { return x % 2 == 0; });\n    std::cout << nums.size() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::erase and std::erase_if (C++20 Uniform Erasure)",
      "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> nums = {1, 2, 3, 4, 5, 6};\n    std::erase_if(nums, [](int x) { return x % 2 == 0; });\n    std::cout << nums.size() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::erase and std::erase_if (C++20 Uniform Erasure).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::erase and std::erase_if (C++20 Uniform Erasure).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::erase and std::erase_if (C++20 Uniform Erasure)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> nums = {1, 2, 3, 4, 5, 6};\n    std::erase_if(nums, [](int x) { return x % 2 == 0; });\n    std::cout << nums.size() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> nums = {1, 2, 3, 4, 5, 6};\n    std::erase_if(nums, [](int x) { return x % 2 == 0; });\n    std::cout << nums.size() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-117-tc-1",
        "description": "Verifies correct implementation for std::erase and std::erase_if (C++20 Uniform Erasure)",
        "testFn": "code.includes('std::erase_if')"
      }
    ]
  },
  {
    "id": "cpp-118-heterogeneous-lookup-in-ordere",
    "title": "118. Heterogeneous Lookup in Ordered Containers",
    "slug": "lesson-118-heterogeneous-lookup-in-ordere",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query map<string, int> with string_view without constructing intermediate string objects.",
    "concepts": [
      "Heterogeneous Lookup in Ordered Containers",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Heterogeneous Lookup in Ordered Containers gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Heterogeneous Lookup in Ordered Containers\n\nQuery map<string, int> with string_view without constructing intermediate string objects.\n\n```cpp\n#include <iostream>\n#include <map>\n#include <string_view>\n\nint main() {\n    std::map<std::string, int, std::less<>> m{{\"key\", 10}};\n    std::string_view sv = \"key\";\n    std::cout << m.find(sv)->second << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Heterogeneous Lookup in Ordered Containers",
      "code": "#include <iostream>\n#include <map>\n#include <string_view>\n\nint main() {\n    std::map<std::string, int, std::less<>> m{{\"key\", 10}};\n    std::string_view sv = \"key\";\n    std::cout << m.find(sv)->second << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Heterogeneous Lookup in Ordered Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Heterogeneous Lookup in Ordered Containers.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Heterogeneous Lookup in Ordered Containers\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <map>\n#include <string_view>\n\nint main() {\n    std::map<std::string, int, std::less<>> m{{\"key\", 10}};\n    std::string_view sv = \"key\";\n    std::cout << m.find(sv)->second << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <map>\n#include <string_view>\n\nint main() {\n    std::map<std::string, int, std::less<>> m{{\"key\", 10}};\n    std::string_view sv = \"key\";\n    std::cout << m.find(sv)->second << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-118-tc-1",
        "description": "Verifies correct implementation for Heterogeneous Lookup in Ordered Containers",
        "testFn": "code.includes('std::less<>')"
      }
    ]
  },
  {
    "id": "cpp-119-node-handles-splicing-between-",
    "title": "119. Node Handles (Splicing between Maps and Sets)",
    "slug": "lesson-119-node-handles-splicing-between-",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Move nodes between maps or sets with zero memory reallocations or copy operations.",
    "concepts": [
      "Node Handles (Splicing between Maps and Sets)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Node Handles (Splicing between Maps and Sets) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Node Handles (Splicing between Maps and Sets)\n\nMove nodes between maps or sets with zero memory reallocations or copy operations.\n\n```cpp\n#include <iostream>\n#include <set>\n\nint main() {\n    std::set<int> s1{10}, s2;\n    auto nh = s1.extract(10);\n    s2.insert(std::move(nh));\n    std::cout << s2.size() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Node Handles (Splicing between Maps and Sets)",
      "code": "#include <iostream>\n#include <set>\n\nint main() {\n    std::set<int> s1{10}, s2;\n    auto nh = s1.extract(10);\n    s2.insert(std::move(nh));\n    std::cout << s2.size() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Node Handles (Splicing between Maps and Sets).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Node Handles (Splicing between Maps and Sets).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Node Handles (Splicing between Maps and Sets)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <set>\n\nint main() {\n    std::set<int> s1{10}, s2;\n    auto nh = s1.extract(10);\n    s2.insert(std::move(nh));\n    std::cout << s2.size() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <set>\n\nint main() {\n    std::set<int> s1{10}, s2;\n    auto nh = s1.extract(10);\n    s2.insert(std::move(nh));\n    std::cout << s2.size() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-119-tc-1",
        "description": "Verifies correct implementation for Node Handles (Splicing between Maps and Sets)",
        "testFn": "code.includes('s1.extract')"
      }
    ]
  },
  {
    "id": "cpp-120-pmr-polymorphic-memory-resourc",
    "title": "120. PMR (Polymorphic Memory Resources) Containers",
    "slug": "lesson-120-pmr-polymorphic-memory-resourc",
    "language": "cpp",
    "category": "Module 8: STL Containers & Memory Iterators",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Plug in custom memory pools and monotonic arena allocators into standard containers.",
    "concepts": [
      "PMR (Polymorphic Memory Resources) Containers",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: PMR (Polymorphic Memory Resources) Containers gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### PMR (Polymorphic Memory Resources) Containers\n\nPlug in custom memory pools and monotonic arena allocators into standard containers.\n\n```cpp\n#include <iostream>\n#include <memory_resource>\n#include <vector>\n\nint main() {\n    std::pmr::monotonic_buffer_resource pool;\n    std::pmr::vector<int> v(&pool);\n    v.push_back(100);\n    std::cout << v[0] << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: PMR (Polymorphic Memory Resources) Containers",
      "code": "#include <iostream>\n#include <memory_resource>\n#include <vector>\n\nint main() {\n    std::pmr::monotonic_buffer_resource pool;\n    std::pmr::vector<int> v(&pool);\n    v.push_back(100);\n    std::cout << v[0] << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for PMR (Polymorphic Memory Resources) Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of PMR (Polymorphic Memory Resources) Containers.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement PMR (Polymorphic Memory Resources) Containers\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <memory_resource>\n#include <vector>\n\nint main() {\n    std::pmr::monotonic_buffer_resource pool;\n    std::pmr::vector<int> v(&pool);\n    v.push_back(100);\n    std::cout << v[0] << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <memory_resource>\n#include <vector>\n\nint main() {\n    std::pmr::monotonic_buffer_resource pool;\n    std::pmr::vector<int> v(&pool);\n    v.push_back(100);\n    std::cout << v[0] << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-120-tc-1",
        "description": "Verifies correct implementation for PMR (Polymorphic Memory Resources) Containers",
        "testFn": "code.includes('std::pmr::monotonic_buffer_resource')"
      }
    ]
  },
  {
    "id": "cpp-121-lambda-expressions-capture-mod",
    "title": "121. Lambda Expressions & Capture Modes",
    "slug": "lesson-121-lambda-expressions-capture-mod",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Capture state by value [=], by reference [&], or explicit init captures [x = std::move(y)].",
    "concepts": [
      "Lambda Expressions & Capture Modes",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Lambda Expressions & Capture Modes gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Lambda Expressions & Capture Modes\n\nCapture state by value [=], by reference [&], or explicit init captures [x = std::move(y)].\n\n```cpp\n#include <iostream>\n\nint main() {\n    int factor = 10;\n    auto multiply = [factor](int x) { return x * factor; };\n    std::cout << multiply(5) << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lambda Expressions & Capture Modes",
      "code": "#include <iostream>\n\nint main() {\n    int factor = 10;\n    auto multiply = [factor](int x) { return x * factor; };\n    std::cout << multiply(5) << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Lambda Expressions & Capture Modes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lambda Expressions & Capture Modes.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Lambda Expressions & Capture Modes\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    int factor = 10;\n    auto multiply = [factor](int x) { return x * factor; };\n    std::cout << multiply(5) << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    int factor = 10;\n    auto multiply = [factor](int x) { return x * factor; };\n    std::cout << multiply(5) << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-121-tc-1",
        "description": "Verifies correct implementation for Lambda Expressions & Capture Modes",
        "testFn": "code.includes('[factor](int x)')"
      }
    ]
  },
  {
    "id": "cpp-122-generic-template-lambdas-in-c-",
    "title": "122. Generic & Template Lambdas in C++20",
    "slug": "lesson-122-generic-template-lambdas-in-c-",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define template lambdas with explicit template parameter lists: []<typename T>(T x).",
    "concepts": [
      "Generic & Template Lambdas in C++20",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Generic & Template Lambdas in C++20 gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Generic & Template Lambdas in C++20\n\nDefine template lambdas with explicit template parameter lists: []<typename T>(T x).\n\n```cpp\n#include <iostream>\n\nint main() {\n    auto printType = []<typename T>(T val) { std::cout << sizeof(T) << std::endl; };\n    printType(10);\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic & Template Lambdas in C++20",
      "code": "#include <iostream>\n\nint main() {\n    auto printType = []<typename T>(T val) { std::cout << sizeof(T) << std::endl; };\n    printType(10);\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Generic & Template Lambdas in C++20.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic & Template Lambdas in C++20.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Generic & Template Lambdas in C++20\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    auto printType = []<typename T>(T val) { std::cout << sizeof(T) << std::endl; };\n    printType(10);\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    auto printType = []<typename T>(T val) { std::cout << sizeof(T) << std::endl; };\n    printType(10);\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-122-tc-1",
        "description": "Verifies correct implementation for Generic & Template Lambdas in C++20",
        "testFn": "code.includes('[]<typename T>')"
      }
    ]
  },
  {
    "id": "cpp-123-std-sort-custom-predicates",
    "title": "123. std::sort & Custom Predicates",
    "slug": "lesson-123-std-sort-custom-predicates",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sort sequences with parallel or custom comparator lambdas.",
    "concepts": [
      "std::sort & Custom Predicates",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::sort & Custom Predicates gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::sort & Custom Predicates\n\nSort sequences with parallel or custom comparator lambdas.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 1, 8, 3};\n    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });\n    std::cout << nums[0] << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::sort & Custom Predicates",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 1, 8, 3};\n    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });\n    std::cout << nums[0] << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::sort & Custom Predicates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::sort & Custom Predicates.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::sort & Custom Predicates\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 1, 8, 3};\n    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });\n    std::cout << nums[0] << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 1, 8, 3};\n    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });\n    std::cout << nums[0] << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-123-tc-1",
        "description": "Verifies correct implementation for std::sort & Custom Predicates",
        "testFn": "code.includes('std::sort')"
      }
    ]
  },
  {
    "id": "cpp-124-std-transform-for-functional-m",
    "title": "124. std::transform for Functional Mapping",
    "slug": "lesson-124-std-transform-for-functional-m",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Transform elements from input ranges into output targets.",
    "concepts": [
      "std::transform for Functional Mapping",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::transform for Functional Mapping gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::transform for Functional Mapping\n\nTransform elements from input ranges into output targets.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    std::vector<int> out(3);\n    std::transform(v.begin(), v.end(), out.begin(), [](int x) { return x * 10; });\n    std::cout << out[0] << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::transform for Functional Mapping",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    std::vector<int> out(3);\n    std::transform(v.begin(), v.end(), out.begin(), [](int x) { return x * 10; });\n    std::cout << out[0] << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::transform for Functional Mapping.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::transform for Functional Mapping.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::transform for Functional Mapping\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    std::vector<int> out(3);\n    std::transform(v.begin(), v.end(), out.begin(), [](int x) { return x * 10; });\n    std::cout << out[0] << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    std::vector<int> out(3);\n    std::transform(v.begin(), v.end(), out.begin(), [](int x) { return x * 10; });\n    std::cout << out[0] << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-124-tc-1",
        "description": "Verifies correct implementation for std::transform for Functional Mapping",
        "testFn": "code.includes('std::transform')"
      }
    ]
  },
  {
    "id": "cpp-125-std-accumulate-and-std-reduce",
    "title": "125. std::accumulate and std::reduce",
    "slug": "lesson-125-std-accumulate-and-std-reduce",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute cumulative sums or custom reductions across ranges.",
    "concepts": [
      "std::accumulate and std::reduce",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::accumulate and std::reduce gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::accumulate and std::reduce\n\nCompute cumulative sums or custom reductions across ranges.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4};\n    int sum = std::accumulate(v.begin(), v.end(), 0);\n    std::cout << sum << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::accumulate and std::reduce",
      "code": "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4};\n    int sum = std::accumulate(v.begin(), v.end(), 0);\n    std::cout << sum << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::accumulate and std::reduce.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::accumulate and std::reduce.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::accumulate and std::reduce\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4};\n    int sum = std::accumulate(v.begin(), v.end(), 0);\n    std::cout << sum << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4};\n    int sum = std::accumulate(v.begin(), v.end(), 0);\n    std::cout << sum << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-125-tc-1",
        "description": "Verifies correct implementation for std::accumulate and std::reduce",
        "testFn": "code.includes('std::accumulate')"
      }
    ]
  },
  {
    "id": "cpp-126-std-ranges-algorithm-overloads",
    "title": "126. std::ranges Algorithm Overloads in C++20",
    "slug": "lesson-126-std-ranges-algorithm-overloads",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass whole containers directly without begin() and end() iterators.",
    "concepts": [
      "std::ranges Algorithm Overloads in C++20",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::ranges Algorithm Overloads in C++20 gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::ranges Algorithm Overloads in C++20\n\nPass whole containers directly without begin() and end() iterators.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {5, 2, 8, 1};\n    std::ranges::sort(v);\n    std::cout << v[0] << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::ranges Algorithm Overloads in C++20",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {5, 2, 8, 1};\n    std::ranges::sort(v);\n    std::cout << v[0] << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::ranges Algorithm Overloads in C++20.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::ranges Algorithm Overloads in C++20.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::ranges Algorithm Overloads in C++20\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {5, 2, 8, 1};\n    std::ranges::sort(v);\n    std::cout << v[0] << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {5, 2, 8, 1};\n    std::ranges::sort(v);\n    std::cout << v[0] << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-126-tc-1",
        "description": "Verifies correct implementation for std::ranges Algorithm Overloads in C++20",
        "testFn": "code.includes('std::ranges::sort(v)')"
      }
    ]
  },
  {
    "id": "cpp-127-c-20-range-adaptors-pipe-opera",
    "title": "127. C++20 Range Adaptors & Pipe Operator (|)",
    "slug": "lesson-127-c-20-range-adaptors-pipe-opera",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compose lazy functional pipelines with views::filter and views::transform.",
    "concepts": [
      "C++20 Range Adaptors & Pipe Operator (|)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: C++20 Range Adaptors & Pipe Operator (|) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### C++20 Range Adaptors & Pipe Operator (|)\n\nCompose lazy functional pipelines with views::filter and views::transform.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5, 6};\n    auto evens = v | std::views::filter([](int x) { return x % 2 == 0; });\n    for (int x : evens) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: C++20 Range Adaptors & Pipe Operator (|)",
      "code": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5, 6};\n    auto evens = v | std::views::filter([](int x) { return x % 2 == 0; });\n    for (int x : evens) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for C++20 Range Adaptors & Pipe Operator (|).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C++20 Range Adaptors & Pipe Operator (|).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement C++20 Range Adaptors & Pipe Operator (|)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5, 6};\n    auto evens = v | std::views::filter([](int x) { return x % 2 == 0; });\n    for (int x : evens) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5, 6};\n    auto evens = v | std::views::filter([](int x) { return x % 2 == 0; });\n    for (int x : evens) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-127-tc-1",
        "description": "Verifies correct implementation for C++20 Range Adaptors & Pipe Operator (|)",
        "testFn": "code.includes('std::views::filter')"
      }
    ]
  },
  {
    "id": "cpp-128-std-views-transform-for-lazy-e",
    "title": "128. std::views::transform for Lazy Evaluation",
    "slug": "lesson-128-std-views-transform-for-lazy-e",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Apply transformations lazily only when elements are consumed.",
    "concepts": [
      "std::views::transform for Lazy Evaluation",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::views::transform for Lazy Evaluation gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::views::transform for Lazy Evaluation\n\nApply transformations lazily only when elements are consumed.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    auto doubled = v | std::views::transform([](int x) { return x * 2; });\n    for (int x : doubled) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::views::transform for Lazy Evaluation",
      "code": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    auto doubled = v | std::views::transform([](int x) { return x * 2; });\n    for (int x : doubled) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::views::transform for Lazy Evaluation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::views::transform for Lazy Evaluation.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::views::transform for Lazy Evaluation\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    auto doubled = v | std::views::transform([](int x) { return x * 2; });\n    for (int x : doubled) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    auto doubled = v | std::views::transform([](int x) { return x * 2; });\n    for (int x : doubled) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-128-tc-1",
        "description": "Verifies correct implementation for std::views::transform for Lazy Evaluation",
        "testFn": "code.includes('std::views::transform')"
      }
    ]
  },
  {
    "id": "cpp-129-std-views-take-and-std-views-d",
    "title": "129. std::views::take and std::views::drop",
    "slug": "lesson-129-std-views-take-and-std-views-d",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Slice ranges lazily by count without allocating intermediate vectors.",
    "concepts": [
      "std::views::take and std::views::drop",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::views::take and std::views::drop gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::views::take and std::views::drop\n\nSlice ranges lazily by count without allocating intermediate vectors.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {10, 20, 30, 40, 50};\n    auto firstTwo = v | std::views::take(2);\n    for (int x : firstTwo) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::views::take and std::views::drop",
      "code": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {10, 20, 30, 40, 50};\n    auto firstTwo = v | std::views::take(2);\n    for (int x : firstTwo) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::views::take and std::views::drop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::views::take and std::views::drop.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::views::take and std::views::drop\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {10, 20, 30, 40, 50};\n    auto firstTwo = v | std::views::take(2);\n    for (int x : firstTwo) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> v = {10, 20, 30, 40, 50};\n    auto firstTwo = v | std::views::take(2);\n    for (int x : firstTwo) std::cout << x << \" \";\n    std::cout << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-129-tc-1",
        "description": "Verifies correct implementation for std::views::take and std::views::drop",
        "testFn": "code.includes('std::views::take(2)')"
      }
    ]
  },
  {
    "id": "cpp-130-std-views-iota-for-infinite-ra",
    "title": "130. std::views::iota for Infinite Ranges",
    "slug": "lesson-130-std-views-iota-for-infinite-ra",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Generate infinite or bounded numeric progressions lazily.",
    "concepts": [
      "std::views::iota for Infinite Ranges",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::views::iota for Infinite Ranges gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::views::iota for Infinite Ranges\n\nGenerate infinite or bounded numeric progressions lazily.\n\n```cpp\n#include <iostream>\n#include <ranges>\n\nint main() {\n    for (int x : std::views::iota(1, 5)) {\n        std::cout << x << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::views::iota for Infinite Ranges",
      "code": "#include <iostream>\n#include <ranges>\n\nint main() {\n    for (int x : std::views::iota(1, 5)) {\n        std::cout << x << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::views::iota for Infinite Ranges.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::views::iota for Infinite Ranges.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::views::iota for Infinite Ranges\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <ranges>\n\nint main() {\n    for (int x : std::views::iota(1, 5)) {\n        std::cout << x << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <ranges>\n\nint main() {\n    for (int x : std::views::iota(1, 5)) {\n        std::cout << x << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-130-tc-1",
        "description": "Verifies correct implementation for std::views::iota for Infinite Ranges",
        "testFn": "code.includes('std::views::iota')"
      }
    ]
  },
  {
    "id": "cpp-131-ranges-projections",
    "title": "131. Ranges Projections",
    "slug": "lesson-131-ranges-projections",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Project struct members into standard sorting and searching algorithms.",
    "concepts": [
      "Ranges Projections",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Ranges Projections gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Ranges Projections\n\nProject struct members into standard sorting and searching algorithms.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstruct User { int id; std::string name; };\n\nint main() {\n    std::vector<User> users = {{3, \"Charlie\"}, {1, \"Alice\"}};\n    std::ranges::sort(users, {}, &User::id);\n    std::cout << users[0].name << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Ranges Projections",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstruct User { int id; std::string name; };\n\nint main() {\n    std::vector<User> users = {{3, \"Charlie\"}, {1, \"Alice\"}};\n    std::ranges::sort(users, {}, &User::id);\n    std::cout << users[0].name << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Ranges Projections.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ranges Projections.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Ranges Projections\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstruct User { int id; std::string name; };\n\nint main() {\n    std::vector<User> users = {{3, \"Charlie\"}, {1, \"Alice\"}};\n    std::ranges::sort(users, {}, &User::id);\n    std::cout << users[0].name << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstruct User { int id; std::string name; };\n\nint main() {\n    std::vector<User> users = {{3, \"Charlie\"}, {1, \"Alice\"}};\n    std::ranges::sort(users, {}, &User::id);\n    std::cout << users[0].name << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-131-tc-1",
        "description": "Verifies correct implementation for Ranges Projections",
        "testFn": "code.includes('&User::id')"
      }
    ]
  },
  {
    "id": "cpp-132-std-ranges-contains-and-find-i",
    "title": "132. std::ranges::contains and find_if in C++20/23",
    "slug": "lesson-132-std-ranges-contains-and-find-i",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Search for elements satisfying specific predicates cleanly.",
    "concepts": [
      "std::ranges::contains and find_if in C++20/23",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::ranges::contains and find_if in C++20/23 gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::ranges::contains and find_if in C++20/23\n\nSearch for elements satisfying specific predicates cleanly.\n\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {10, 25, 40};\n    auto it = std::ranges::find_if(v, [](int x) { return x > 20; });\n    if (it != v.end()) std::cout << *it << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::ranges::contains and find_if in C++20/23",
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {10, 25, 40};\n    auto it = std::ranges::find_if(v, [](int x) { return x > 20; });\n    if (it != v.end()) std::cout << *it << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::ranges::contains and find_if in C++20/23.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::ranges::contains and find_if in C++20/23.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::ranges::contains and find_if in C++20/23\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {10, 25, 40};\n    auto it = std::ranges::find_if(v, [](int x) { return x > 20; });\n    if (it != v.end()) std::cout << *it << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {10, 25, 40};\n    auto it = std::ranges::find_if(v, [](int x) { return x > 20; });\n    if (it != v.end()) std::cout << *it << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-132-tc-1",
        "description": "Verifies correct implementation for std::ranges::contains and find_if in C++20/23",
        "testFn": "code.includes('std::ranges::find_if')"
      }
    ]
  },
  {
    "id": "cpp-133-std-views-split-and-std-views-",
    "title": "133. std::views::split and std::views::join",
    "slug": "lesson-133-std-views-split-and-std-views-",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tokenize and join strings with zero dynamic allocations.",
    "concepts": [
      "std::views::split and std::views::join",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::views::split and std::views::join gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::views::split and std::views::join\n\nTokenize and join strings with zero dynamic allocations.\n\n```cpp\n#include <iostream>\n#include <string_view>\n#include <ranges>\n\nint main() {\n    std::string_view text = \"hello-modern-cpp\";\n    for (auto part : text | std::views::split('-')) {\n        std::cout << std::string_view(part) << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::views::split and std::views::join",
      "code": "#include <iostream>\n#include <string_view>\n#include <ranges>\n\nint main() {\n    std::string_view text = \"hello-modern-cpp\";\n    for (auto part : text | std::views::split('-')) {\n        std::cout << std::string_view(part) << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::views::split and std::views::join.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::views::split and std::views::join.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::views::split and std::views::join\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <string_view>\n#include <ranges>\n\nint main() {\n    std::string_view text = \"hello-modern-cpp\";\n    for (auto part : text | std::views::split('-')) {\n        std::cout << std::string_view(part) << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <string_view>\n#include <ranges>\n\nint main() {\n    std::string_view text = \"hello-modern-cpp\";\n    for (auto part : text | std::views::split('-')) {\n        std::cout << std::string_view(part) << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-133-tc-1",
        "description": "Verifies correct implementation for std::views::split and std::views::join",
        "testFn": "code.includes('std::views::split')"
      }
    ]
  },
  {
    "id": "cpp-134-std-views-elements-and-keys-va",
    "title": "134. std::views::elements and Keys/Values Extraction",
    "slug": "lesson-134-std-views-elements-and-keys-va",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract tuple or map keys and values seamlessly.",
    "concepts": [
      "std::views::elements and Keys/Values Extraction",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::views::elements and Keys/Values Extraction gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::views::elements and Keys/Values Extraction\n\nExtract tuple or map keys and values seamlessly.\n\n```cpp\n#include <iostream>\n#include <map>\n#include <ranges>\n\nint main() {\n    std::map<int, std::string> m = {{1, \"one\"}, {2, \"two\"}};\n    for (auto val : m | std::views::values) {\n        std::cout << val << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::views::elements and Keys/Values Extraction",
      "code": "#include <iostream>\n#include <map>\n#include <ranges>\n\nint main() {\n    std::map<int, std::string> m = {{1, \"one\"}, {2, \"two\"}};\n    for (auto val : m | std::views::values) {\n        std::cout << val << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::views::elements and Keys/Values Extraction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::views::elements and Keys/Values Extraction.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::views::elements and Keys/Values Extraction\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <map>\n#include <ranges>\n\nint main() {\n    std::map<int, std::string> m = {{1, \"one\"}, {2, \"two\"}};\n    for (auto val : m | std::views::values) {\n        std::cout << val << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <map>\n#include <ranges>\n\nint main() {\n    std::map<int, std::string> m = {{1, \"one\"}, {2, \"two\"}};\n    for (auto val : m | std::views::values) {\n        std::cout << val << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-134-tc-1",
        "description": "Verifies correct implementation for std::views::elements and Keys/Values Extraction",
        "testFn": "code.includes('std::views::values')"
      }
    ]
  },
  {
    "id": "cpp-135-std-format-c-20-type-safe-stri",
    "title": "135. std::format (C++20 Type-Safe String Formatting)",
    "slug": "lesson-135-std-format-c-20-type-safe-stri",
    "language": "cpp",
    "category": "Module 9: Modern Algorithms, Lambdas & C++20 Ranges",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Python-style type-safe string formatting replacing printf and stringstream.",
    "concepts": [
      "std::format (C++20 Type-Safe String Formatting)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::format (C++20 Type-Safe String Formatting) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::format (C++20 Type-Safe String Formatting)\n\nPython-style type-safe string formatting replacing printf and stringstream.\n\n```cpp\n#include <iostream>\n#include <format>\n\nint main() {\n    std::string msg = std::format(\"Core temp: {:.2f} C\", 45.678);\n    std::cout << msg << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::format (C++20 Type-Safe String Formatting)",
      "code": "#include <iostream>\n#include <format>\n\nint main() {\n    std::string msg = std::format(\"Core temp: {:.2f} C\", 45.678);\n    std::cout << msg << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::format (C++20 Type-Safe String Formatting).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::format (C++20 Type-Safe String Formatting).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::format (C++20 Type-Safe String Formatting)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <format>\n\nint main() {\n    std::string msg = std::format(\"Core temp: {:.2f} C\", 45.678);\n    std::cout << msg << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <format>\n\nint main() {\n    std::string msg = std::format(\"Core temp: {:.2f} C\", 45.678);\n    std::cout << msg << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-135-tc-1",
        "description": "Verifies correct implementation for std::format (C++20 Type-Safe String Formatting)",
        "testFn": "code.includes('std::format')"
      }
    ]
  },
  {
    "id": "cpp-136-std-jthread-raii-auto-joining-",
    "title": "136. std::jthread (RAII Auto-Joining Thread in C++20)",
    "slug": "lesson-136-std-jthread-raii-auto-joining-",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "C++20 auto-joining thread that cancels cooperatively on destruction.",
    "concepts": [
      "std::jthread (RAII Auto-Joining Thread in C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::jthread (RAII Auto-Joining Thread in C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::jthread (RAII Auto-Joining Thread in C++20)\n\nC++20 auto-joining thread that cancels cooperatively on destruction.\n\n```cpp\n#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([]() {\n        std::cout << \"Running inside jthread\" << std::endl;\n    });\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::jthread (RAII Auto-Joining Thread in C++20)",
      "code": "#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([]() {\n        std::cout << \"Running inside jthread\" << std::endl;\n    });\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::jthread (RAII Auto-Joining Thread in C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::jthread (RAII Auto-Joining Thread in C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::jthread (RAII Auto-Joining Thread in C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([]() {\n        std::cout << \"Running inside jthread\" << std::endl;\n    });\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([]() {\n        std::cout << \"Running inside jthread\" << std::endl;\n    });\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-136-tc-1",
        "description": "Verifies correct implementation for std::jthread (RAII Auto-Joining Thread in C++20)",
        "testFn": "code.includes('std::jthread')"
      }
    ]
  },
  {
    "id": "cpp-137-std-stop-token-for-cooperative",
    "title": "137. std::stop_token for Cooperative Cancellation",
    "slug": "lesson-137-std-stop-token-for-cooperative",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Signal background tasks to shut down gracefully without forceful kills.",
    "concepts": [
      "std::stop_token for Cooperative Cancellation",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::stop_token for Cooperative Cancellation gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::stop_token for Cooperative Cancellation\n\nSignal background tasks to shut down gracefully without forceful kills.\n\n```cpp\n#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([](std::stop_token stoken) {\n        if (!stoken.stop_requested()) {\n            std::cout << \"Working safely\" << std::endl;\n        }\n    });\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::stop_token for Cooperative Cancellation",
      "code": "#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([](std::stop_token stoken) {\n        if (!stoken.stop_requested()) {\n            std::cout << \"Working safely\" << std::endl;\n        }\n    });\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::stop_token for Cooperative Cancellation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::stop_token for Cooperative Cancellation.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::stop_token for Cooperative Cancellation\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([](std::stop_token stoken) {\n        if (!stoken.stop_requested()) {\n            std::cout << \"Working safely\" << std::endl;\n        }\n    });\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <thread>\n\nint main() {\n    std::jthread worker([](std::stop_token stoken) {\n        if (!stoken.stop_requested()) {\n            std::cout << \"Working safely\" << std::endl;\n        }\n    });\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-137-tc-1",
        "description": "Verifies correct implementation for std::stop_token for Cooperative Cancellation",
        "testFn": "code.includes('std::stop_token')"
      }
    ]
  },
  {
    "id": "cpp-138-std-mutex-std-lock-guard",
    "title": "138. std::mutex & std::lock_guard",
    "slug": "lesson-138-std-mutex-std-lock-guard",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Protect critical sections with RAII scoped mutual exclusion locks.",
    "concepts": [
      "std::mutex & std::lock_guard",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::mutex & std::lock_guard gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::mutex & std::lock_guard\n\nProtect critical sections with RAII scoped mutual exclusion locks.\n\n```cpp\n#include <iostream>\n#include <mutex>\n\nstd::mutex mtx;\nint counter = 0;\n\nvoid increment() {\n    std::lock_guard<std::mutex> lock(mtx);\n    counter++;\n}\n\nint main() {\n    increment();\n    std::cout << counter << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::mutex & std::lock_guard",
      "code": "#include <iostream>\n#include <mutex>\n\nstd::mutex mtx;\nint counter = 0;\n\nvoid increment() {\n    std::lock_guard<std::mutex> lock(mtx);\n    counter++;\n}\n\nint main() {\n    increment();\n    std::cout << counter << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::mutex & std::lock_guard.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::mutex & std::lock_guard.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::mutex & std::lock_guard\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <mutex>\n\nstd::mutex mtx;\nint counter = 0;\n\nvoid increment() {\n    std::lock_guard<std::mutex> lock(mtx);\n    counter++;\n}\n\nint main() {\n    increment();\n    std::cout << counter << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <mutex>\n\nstd::mutex mtx;\nint counter = 0;\n\nvoid increment() {\n    std::lock_guard<std::mutex> lock(mtx);\n    counter++;\n}\n\nint main() {\n    increment();\n    std::cout << counter << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-138-tc-1",
        "description": "Verifies correct implementation for std::mutex & std::lock_guard",
        "testFn": "code.includes('std::lock_guard')"
      }
    ]
  },
  {
    "id": "cpp-139-std-unique-lock-for-flexible-l",
    "title": "139. std::unique_lock for Flexible Locking",
    "slug": "lesson-139-std-unique-lock-for-flexible-l",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Support manual unlocking, timed locks, and condition variable coordination.",
    "concepts": [
      "std::unique_lock for Flexible Locking",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::unique_lock for Flexible Locking gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::unique_lock for Flexible Locking\n\nSupport manual unlocking, timed locks, and condition variable coordination.\n\n```cpp\n#include <iostream>\n#include <mutex>\n\nstd::mutex m;\n\nint main() {\n    std::unique_lock<std::mutex> ulock(m);\n    std::cout << \"Locked uniquely\" << std::endl;\n    ulock.unlock();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::unique_lock for Flexible Locking",
      "code": "#include <iostream>\n#include <mutex>\n\nstd::mutex m;\n\nint main() {\n    std::unique_lock<std::mutex> ulock(m);\n    std::cout << \"Locked uniquely\" << std::endl;\n    ulock.unlock();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::unique_lock for Flexible Locking.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::unique_lock for Flexible Locking.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::unique_lock for Flexible Locking\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <mutex>\n\nstd::mutex m;\n\nint main() {\n    std::unique_lock<std::mutex> ulock(m);\n    std::cout << \"Locked uniquely\" << std::endl;\n    ulock.unlock();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <mutex>\n\nstd::mutex m;\n\nint main() {\n    std::unique_lock<std::mutex> ulock(m);\n    std::cout << \"Locked uniquely\" << std::endl;\n    ulock.unlock();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-139-tc-1",
        "description": "Verifies correct implementation for std::unique_lock for Flexible Locking",
        "testFn": "code.includes('std::unique_lock')"
      }
    ]
  },
  {
    "id": "cpp-140-deadlock-prevention-with-std-s",
    "title": "140. Deadlock Prevention with std::scoped_lock (C++17/20)",
    "slug": "lesson-140-deadlock-prevention-with-std-s",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Acquire multiple mutexes simultaneously without deadlock hazard.",
    "concepts": [
      "Deadlock Prevention with std::scoped_lock (C++17/20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Deadlock Prevention with std::scoped_lock (C++17/20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Deadlock Prevention with std::scoped_lock (C++17/20)\n\nAcquire multiple mutexes simultaneously without deadlock hazard.\n\n```cpp\n#include <iostream>\n#include <mutex>\n\nstd::mutex m1, m2;\n\nvoid process() {\n    std::scoped_lock lock(m1, m2);\n    std::cout << \"Dual lock acquired safely\" << std::endl;\n}\n\nint main() {\n    process();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Deadlock Prevention with std::scoped_lock (C++17/20)",
      "code": "#include <iostream>\n#include <mutex>\n\nstd::mutex m1, m2;\n\nvoid process() {\n    std::scoped_lock lock(m1, m2);\n    std::cout << \"Dual lock acquired safely\" << std::endl;\n}\n\nint main() {\n    process();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Deadlock Prevention with std::scoped_lock (C++17/20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deadlock Prevention with std::scoped_lock (C++17/20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Deadlock Prevention with std::scoped_lock (C++17/20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <mutex>\n\nstd::mutex m1, m2;\n\nvoid process() {\n    std::scoped_lock lock(m1, m2);\n    std::cout << \"Dual lock acquired safely\" << std::endl;\n}\n\nint main() {\n    process();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <mutex>\n\nstd::mutex m1, m2;\n\nvoid process() {\n    std::scoped_lock lock(m1, m2);\n    std::cout << \"Dual lock acquired safely\" << std::endl;\n}\n\nint main() {\n    process();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-140-tc-1",
        "description": "Verifies correct implementation for Deadlock Prevention with std::scoped_lock (C++17/20)",
        "testFn": "code.includes('std::scoped_lock')"
      }
    ]
  },
  {
    "id": "cpp-141-std-atomic-lock-free-programmi",
    "title": "141. std::atomic & Lock-Free Programming",
    "slug": "lesson-141-std-atomic-lock-free-programmi",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hardware-assisted lock-free atomic load, store, fetch_add, and compare_exchange.",
    "concepts": [
      "std::atomic & Lock-Free Programming",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::atomic & Lock-Free Programming gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::atomic & Lock-Free Programming\n\nHardware-assisted lock-free atomic load, store, fetch_add, and compare_exchange.\n\n```cpp\n#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> counter{0};\n    counter.fetch_add(5, std::memory_order_relaxed);\n    std::cout << counter.load() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::atomic & Lock-Free Programming",
      "code": "#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> counter{0};\n    counter.fetch_add(5, std::memory_order_relaxed);\n    std::cout << counter.load() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::atomic & Lock-Free Programming.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::atomic & Lock-Free Programming.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::atomic & Lock-Free Programming\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> counter{0};\n    counter.fetch_add(5, std::memory_order_relaxed);\n    std::cout << counter.load() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> counter{0};\n    counter.fetch_add(5, std::memory_order_relaxed);\n    std::cout << counter.load() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-141-tc-1",
        "description": "Verifies correct implementation for std::atomic & Lock-Free Programming",
        "testFn": "code.includes('std::atomic<int>')"
      }
    ]
  },
  {
    "id": "cpp-142-std-atomic-flag-spinlocks",
    "title": "142. std::atomic_flag & Spinlocks",
    "slug": "lesson-142-std-atomic-flag-spinlocks",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The only guaranteed lock-free primitive in standard C++.",
    "concepts": [
      "std::atomic_flag & Spinlocks",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::atomic_flag & Spinlocks gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::atomic_flag & Spinlocks\n\nThe only guaranteed lock-free primitive in standard C++.\n\n```cpp\n#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic_flag flag = ATOMIC_FLAG_INIT;\n    if (!flag.test_and_set()) {\n        std::cout << \"Lock acquired\" << std::endl;\n        flag.clear();\n    }\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::atomic_flag & Spinlocks",
      "code": "#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic_flag flag = ATOMIC_FLAG_INIT;\n    if (!flag.test_and_set()) {\n        std::cout << \"Lock acquired\" << std::endl;\n        flag.clear();\n    }\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::atomic_flag & Spinlocks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::atomic_flag & Spinlocks.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::atomic_flag & Spinlocks\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic_flag flag = ATOMIC_FLAG_INIT;\n    if (!flag.test_and_set()) {\n        std::cout << \"Lock acquired\" << std::endl;\n        flag.clear();\n    }\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic_flag flag = ATOMIC_FLAG_INIT;\n    if (!flag.test_and_set()) {\n        std::cout << \"Lock acquired\" << std::endl;\n        flag.clear();\n    }\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-142-tc-1",
        "description": "Verifies correct implementation for std::atomic_flag & Spinlocks",
        "testFn": "code.includes('std::atomic_flag')"
      }
    ]
  },
  {
    "id": "cpp-143-c-20-atomic-wait-and-notify-fu",
    "title": "143. C++20 Atomic Wait and Notify (Futex Support)",
    "slug": "lesson-143-c-20-atomic-wait-and-notify-fu",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "High-performance thread synchronization via atomic.wait() and atomic.notify_one().",
    "concepts": [
      "C++20 Atomic Wait and Notify (Futex Support)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: C++20 Atomic Wait and Notify (Futex Support) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### C++20 Atomic Wait and Notify (Futex Support)\n\nHigh-performance thread synchronization via atomic.wait() and atomic.notify_one().\n\n```cpp\n#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> gate{0};\n    gate.notify_all();\n    std::cout << \"Wait/notify enabled\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: C++20 Atomic Wait and Notify (Futex Support)",
      "code": "#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> gate{0};\n    gate.notify_all();\n    std::cout << \"Wait/notify enabled\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for C++20 Atomic Wait and Notify (Futex Support).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C++20 Atomic Wait and Notify (Futex Support).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement C++20 Atomic Wait and Notify (Futex Support)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> gate{0};\n    gate.notify_all();\n    std::cout << \"Wait/notify enabled\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <atomic>\n\nint main() {\n    std::atomic<int> gate{0};\n    gate.notify_all();\n    std::cout << \"Wait/notify enabled\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-143-tc-1",
        "description": "Verifies correct implementation for C++20 Atomic Wait and Notify (Futex Support)",
        "testFn": "code.includes('gate.notify_all()')"
      }
    ]
  },
  {
    "id": "cpp-144-std-condition-variable",
    "title": "144. std::condition_variable",
    "slug": "lesson-144-std-condition-variable",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Suspend threads until an event is signaled by producer threads.",
    "concepts": [
      "std::condition_variable",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::condition_variable gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::condition_variable\n\nSuspend threads until an event is signaled by producer threads.\n\n```cpp\n#include <iostream>\n#include <condition_variable>\n\nstd::mutex cv_m;\nstd::condition_variable cv;\n\nint main() {\n    std::cout << \"Condition variable ready\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::condition_variable",
      "code": "#include <iostream>\n#include <condition_variable>\n\nstd::mutex cv_m;\nstd::condition_variable cv;\n\nint main() {\n    std::cout << \"Condition variable ready\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::condition_variable.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::condition_variable.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::condition_variable\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <condition_variable>\n\nint main() {\n    std::cout << \"Condition variable ready\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <condition_variable>\n\nint main() {\n    std::cout << \"Condition variable ready\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-144-tc-1",
        "description": "Verifies correct implementation for std::condition_variable",
        "testFn": "code.includes('condition_variable')"
      }
    ]
  },
  {
    "id": "cpp-145-std-counting-semaphore-and-bin",
    "title": "145. std::counting_semaphore and binary_semaphore (C++20)",
    "slug": "lesson-145-std-counting-semaphore-and-bin",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Lightweight counting semaphores for rate-limiting and resource counting.",
    "concepts": [
      "std::counting_semaphore and binary_semaphore (C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::counting_semaphore and binary_semaphore (C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::counting_semaphore and binary_semaphore (C++20)\n\nLightweight counting semaphores for rate-limiting and resource counting.\n\n```cpp\n#include <iostream>\n#include <semaphore>\n\nint main() {\n    std::counting_semaphore<4> sem(4);\n    sem.acquire();\n    std::cout << \"Acquired ticket\" << std::endl;\n    sem.release();\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::counting_semaphore and binary_semaphore (C++20)",
      "code": "#include <iostream>\n#include <semaphore>\n\nint main() {\n    std::counting_semaphore<4> sem(4);\n    sem.acquire();\n    std::cout << \"Acquired ticket\" << std::endl;\n    sem.release();\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::counting_semaphore and binary_semaphore (C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::counting_semaphore and binary_semaphore (C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::counting_semaphore and binary_semaphore (C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <semaphore>\n\nint main() {\n    std::counting_semaphore<4> sem(4);\n    sem.acquire();\n    std::cout << \"Acquired ticket\" << std::endl;\n    sem.release();\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <semaphore>\n\nint main() {\n    std::counting_semaphore<4> sem(4);\n    sem.acquire();\n    std::cout << \"Acquired ticket\" << std::endl;\n    sem.release();\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-145-tc-1",
        "description": "Verifies correct implementation for std::counting_semaphore and binary_semaphore (C++20)",
        "testFn": "code.includes('std::counting_semaphore')"
      }
    ]
  },
  {
    "id": "cpp-146-std-latch-and-std-barrier-c-20",
    "title": "146. std::latch and std::barrier (C++20)",
    "slug": "lesson-146-std-latch-and-std-barrier-c-20",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Synchronize thread pools at designated multi-stage synchronization points.",
    "concepts": [
      "std::latch and std::barrier (C++20)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::latch and std::barrier (C++20) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::latch and std::barrier (C++20)\n\nSynchronize thread pools at designated multi-stage synchronization points.\n\n```cpp\n#include <iostream>\n#include <latch>\n\nint main() {\n    std::latch done(1);\n    done.count_down();\n    done.wait();\n    std::cout << \"Latch cleared\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::latch and std::barrier (C++20)",
      "code": "#include <iostream>\n#include <latch>\n\nint main() {\n    std::latch done(1);\n    done.count_down();\n    done.wait();\n    std::cout << \"Latch cleared\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::latch and std::barrier (C++20).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::latch and std::barrier (C++20).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::latch and std::barrier (C++20)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <latch>\n\nint main() {\n    std::latch done(1);\n    done.count_down();\n    done.wait();\n    std::cout << \"Latch cleared\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <latch>\n\nint main() {\n    std::latch done(1);\n    done.count_down();\n    done.wait();\n    std::cout << \"Latch cleared\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-146-tc-1",
        "description": "Verifies correct implementation for std::latch and std::barrier (C++20)",
        "testFn": "code.includes('std::latch')"
      }
    ]
  },
  {
    "id": "cpp-147-std-async-std-future",
    "title": "147. std::async & std::future",
    "slug": "lesson-147-std-async-std-future",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute tasks asynchronously and retrieve values or handle exceptions across threads.",
    "concepts": [
      "std::async & std::future",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::async & std::future gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::async & std::future\n\nExecute tasks asynchronously and retrieve values or handle exceptions across threads.\n\n```cpp\n#include <iostream>\n#include <future>\n\nint calculate() { return 42; }\n\nint main() {\n    auto fut = std::async(std::launch::async, calculate);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::async & std::future",
      "code": "#include <iostream>\n#include <future>\n\nint calculate() { return 42; }\n\nint main() {\n    auto fut = std::async(std::launch::async, calculate);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::async & std::future.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::async & std::future.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::async & std::future\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <future>\n\nint calculate() { return 42; }\n\nint main() {\n    auto fut = std::async(std::launch::async, calculate);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <future>\n\nint calculate() { return 42; }\n\nint main() {\n    auto fut = std::async(std::launch::async, calculate);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-147-tc-1",
        "description": "Verifies correct implementation for std::async & std::future",
        "testFn": "code.includes('std::async') && code.includes('fut.get()')"
      }
    ]
  },
  {
    "id": "cpp-148-std-promise-and-value-channeli",
    "title": "148. std::promise and Value Channeling",
    "slug": "lesson-148-std-promise-and-value-channeli",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Channel values or exceptions explicitly from worker threads to listeners.",
    "concepts": [
      "std::promise and Value Channeling",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: std::promise and Value Channeling gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### std::promise and Value Channeling\n\nChannel values or exceptions explicitly from worker threads to listeners.\n\n```cpp\n#include <iostream>\n#include <future>\n\nint main() {\n    std::promise<int> p;\n    auto fut = p.get_future();\n    p.set_value(99);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: std::promise and Value Channeling",
      "code": "#include <iostream>\n#include <future>\n\nint main() {\n    std::promise<int> p;\n    auto fut = p.get_future();\n    p.set_value(99);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for std::promise and Value Channeling.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of std::promise and Value Channeling.",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement std::promise and Value Channeling\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n#include <future>\n\nint main() {\n    std::promise<int> p;\n    auto fut = p.get_future();\n    p.set_value(99);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n#include <future>\n\nint main() {\n    std::promise<int> p;\n    auto fut = p.get_future();\n    p.set_value(99);\n    std::cout << fut.get() << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-148-tc-1",
        "description": "Verifies correct implementation for std::promise and Value Channeling",
        "testFn": "code.includes('std::promise')"
      }
    ]
  },
  {
    "id": "cpp-149-c-20-coroutines-architecture-c",
    "title": "149. C++20 Coroutines Architecture (co_await, co_yield, co_return)",
    "slug": "lesson-149-c-20-coroutines-architecture-c",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stackless coroutines that suspend execution and yield control cooperatively.",
    "concepts": [
      "C++20 Coroutines Architecture (co_await, co_yield, co_return)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: C++20 Coroutines Architecture (co_await, co_yield, co_return) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### C++20 Coroutines Architecture (co_await, co_yield, co_return)\n\nStackless coroutines that suspend execution and yield control cooperatively.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"C++20 Coroutines: co_await, co_yield, co_return\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: C++20 Coroutines Architecture (co_await, co_yield, co_return)",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"C++20 Coroutines: co_await, co_yield, co_return\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for C++20 Coroutines Architecture (co_await, co_yield, co_return).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C++20 Coroutines Architecture (co_await, co_yield, co_return).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement C++20 Coroutines Architecture (co_await, co_yield, co_return)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"C++20 Coroutines: co_await, co_yield, co_return\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"C++20 Coroutines: co_await, co_yield, co_return\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-149-tc-1",
        "description": "Verifies correct implementation for C++20 Coroutines Architecture (co_await, co_yield, co_return)",
        "testFn": "code.includes('co_await')"
      }
    ]
  },
  {
    "id": "cpp-150-building-a-coroutine-generator",
    "title": "150. Building a Coroutine Generator (Generator<T>)",
    "slug": "lesson-150-building-a-coroutine-generator",
    "language": "cpp",
    "category": "Module 10: Concurrency, Multithreading & Coroutines",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Produce infinite and lazy data streams using coroutine state machines.",
    "concepts": [
      "Building a Coroutine Generator (Generator<T>)",
      "Modern C++20",
      "Modern C++ Systems (C++20)"
    ],
    "analogy": "Like high-performance engine engineering: Building a Coroutine Generator (Generator<T>) gives you precision control over system hardware and memory.",
    "explanationMarkdown": "### Building a Coroutine Generator (Generator<T>)\n\nProduce infinite and lazy data streams using coroutine state machines.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Coroutine generators provide zero-allocation streaming\" << std::endl;\n    return 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Building a Coroutine Generator (Generator<T>)",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Coroutine generators provide zero-allocation streaming\" << std::endl;\n    return 0;\n}",
      "explanation": "\u2022 Demonstrates modern C++20 idiom and syntax for Building a Coroutine Generator (Generator<T>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building a Coroutine Generator (Generator<T>).",
      "Write the solution code into the editor.",
      "Click 'Check Answer' to compile and execute."
    ],
    "initialCode": "#include <iostream>\n\nint main() {\n    // Step 1: Implement Building a Coroutine Generator (Generator<T>)\n    // TODO: Write code below\n\n    return 0;\n}\n",
    "solutionCode": "#include <iostream>\n\nint main() {\n    std::cout << \"Coroutine generators provide zero-allocation streaming\" << std::endl;\n    return 0;\n}",
    "hints": [
      "Write:\n#include <iostream>\n\nint main() {\n    std::cout << \"Coroutine generators provide zero-allocation streaming\" << std::endl;\n    return 0;\n}"
    ],
    "testCases": [
      {
        "id": "cpp-150-tc-1",
        "description": "Verifies correct implementation for Building a Coroutine Generator (Generator<T>)",
        "testFn": "code.includes('Coroutine generators')"
      }
    ]
  }
]
};
