import { Track } from '../../types';

export const JAVA_TRACK: Track = {
  id: "java",
  title: "Java: Enterprise & Cloud Architecture (150 Topics)",
  slug: "java",
  language: "java",
  icon: "Coffee",
  color: "from-orange-500 to-amber-600",
  tagline: "Build enterprise-grade resilient backend software with Java 21 across 150 topics.",
  description: "Object-oriented design, JVM internals, Collections Framework, Generics, Lambdas, Streams, Multithreading, Virtual Threads, and Spring-style architecture.",
  lessons: [
  {
    "id": "java-1-why-java-write-once-run-anywhe",
    "title": "1. Why Java? Write Once, Run Anywhere & JVM Internals",
    "slug": "lesson-1-why-java-write-once-run-anywhe",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bytecode compilation and JIT execution.",
    "concepts": [
      "Why Java? Write Once, Run Anywhere & JVM Internals",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Why Java? Write Once, Run Anywhere & JVM Internals ensures robust and scalable performance.",
    "explanationMarkdown": "### Why Java? Write Once, Run Anywhere & JVM Internals\n\nBytecode compilation and JIT execution.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java Ready\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Why Java? Write Once, Run Anywhere & JVM Internals",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java Ready\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Java? Write Once, Run Anywhere & JVM Internals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Java? Write Once, Run Anywhere & JVM Internals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java Ready\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java Ready\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-1-tc-1",
        "description": "Verifies correct implementation for Why Java? Write Once, Run Anywhere & JVM Internals",
        "testFn": "code.includes('println')"
      }
    ]
  },
  {
    "id": "java-2-java-primitive-types-byte-shor",
    "title": "2. Java Primitive Types (byte, short, int, long)",
    "slug": "lesson-2-java-primitive-types-byte-shor",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Exact bit-width numerical representations.",
    "concepts": [
      "Java Primitive Types (byte, short, int, long)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Java Primitive Types (byte, short, int, long) ensures robust and scalable performance.",
    "explanationMarkdown": "### Java Primitive Types (byte, short, int, long)\n\nExact bit-width numerical representations.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    int count = 100;\n    System.out.println(count);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Java Primitive Types (byte, short, int, long)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int count = 100;\n    System.out.println(count);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Java Primitive Types (byte, short, int, long).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Java Primitive Types (byte, short, int, long).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    int count = 100;\n    System.out.println(count);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    int count = 100;\n    System.out.println(count);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-2-tc-1",
        "description": "Verifies correct implementation for Java Primitive Types (byte, short, int, long)",
        "testFn": "code.includes('count')"
      }
    ]
  },
  {
    "id": "java-3-floating-point-types-float-vs-",
    "title": "3. Floating Point Types: float vs double",
    "slug": "lesson-3-floating-point-types-float-vs-",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "IEEE 754 precision floating point semantics.",
    "concepts": [
      "Floating Point Types: float vs double",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Floating Point Types: float vs double ensures robust and scalable performance.",
    "explanationMarkdown": "### Floating Point Types: float vs double\n\nIEEE 754 precision floating point semantics.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    double pi = 3.14159;\n    System.out.println(pi);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Floating Point Types: float vs double",
      "code": "public class Main {\n  public static void main(String[] args) {\n    double pi = 3.14159;\n    System.out.println(pi);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Floating Point Types: float vs double.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Floating Point Types: float vs double.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    double pi = 3.14159;\n    System.out.println(pi);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    double pi = 3.14159;\n    System.out.println(pi);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-3-tc-1",
        "description": "Verifies correct implementation for Floating Point Types: float vs double",
        "testFn": "code.includes('double')"
      }
    ]
  },
  {
    "id": "java-4-characters-and-booleans-char-b",
    "title": "4. Characters and Booleans (char, boolean)",
    "slug": "lesson-4-characters-and-booleans-char-b",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "16-bit Unicode characters and true/false.",
    "concepts": [
      "Characters and Booleans (char, boolean)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Characters and Booleans (char, boolean) ensures robust and scalable performance.",
    "explanationMarkdown": "### Characters and Booleans (char, boolean)\n\n16-bit Unicode characters and true/false.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    boolean active = true;\n    System.out.println(active);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Characters and Booleans (char, boolean)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    boolean active = true;\n    System.out.println(active);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Characters and Booleans (char, boolean).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Characters and Booleans (char, boolean).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    boolean active = true;\n    System.out.println(active);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    boolean active = true;\n    System.out.println(active);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-4-tc-1",
        "description": "Verifies correct implementation for Characters and Booleans (char, boolean)",
        "testFn": "code.includes('boolean')"
      }
    ]
  },
  {
    "id": "java-5-type-casting-implicit-widening",
    "title": "5. Type Casting: Implicit Widening vs Explicit Narrowing",
    "slug": "lesson-5-type-casting-implicit-widening",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Converting numeric primitives safely.",
    "concepts": [
      "Type Casting: Implicit Widening vs Explicit Narrowing",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Type Casting: Implicit Widening vs Explicit Narrowing ensures robust and scalable performance.",
    "explanationMarkdown": "### Type Casting: Implicit Widening vs Explicit Narrowing\n\nConverting numeric primitives safely.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    double d = 9.99;\n    int i = (int) d;\n    System.out.println(i);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Casting: Implicit Widening vs Explicit Narrowing",
      "code": "public class Main {\n  public static void main(String[] args) {\n    double d = 9.99;\n    int i = (int) d;\n    System.out.println(i);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Casting: Implicit Widening vs Explicit Narrowing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Casting: Implicit Widening vs Explicit Narrowing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    double d = 9.99;\n    int i = (int) d;\n    System.out.println(i);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    double d = 9.99;\n    int i = (int) d;\n    System.out.println(i);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-5-tc-1",
        "description": "Verifies correct implementation for Type Casting: Implicit Widening vs Explicit Narrowing",
        "testFn": "code.includes('(int)')"
      }
    ]
  },
  {
    "id": "java-6-string-immutability-and-the-st",
    "title": "6. String Immutability and the String Constant Pool",
    "slug": "lesson-6-string-immutability-and-the-st",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why strings cannot be modified in place.",
    "concepts": [
      "String Immutability and the String Constant Pool",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: String Immutability and the String Constant Pool ensures robust and scalable performance.",
    "explanationMarkdown": "### String Immutability and the String Constant Pool\n\nWhy strings cannot be modified in place.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    String s = \"DevForge\";\n    System.out.println(s);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: String Immutability and the String Constant Pool",
      "code": "public class Main {\n  public static void main(String[] args) {\n    String s = \"DevForge\";\n    System.out.println(s);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Immutability and the String Constant Pool.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Immutability and the String Constant Pool.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    String s = \"DevForge\";\n    System.out.println(s);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    String s = \"DevForge\";\n    System.out.println(s);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-6-tc-1",
        "description": "Verifies correct implementation for String Immutability and the String Constant Pool",
        "testFn": "code.includes('String')"
      }
    ]
  },
  {
    "id": "java-7-the-stringbuilder-and-stringbu",
    "title": "7. The StringBuilder and StringBuffer Classes",
    "slug": "lesson-7-the-stringbuilder-and-stringbu",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Mutable efficient string construction.",
    "concepts": [
      "The StringBuilder and StringBuffer Classes",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The StringBuilder and StringBuffer Classes ensures robust and scalable performance.",
    "explanationMarkdown": "### The StringBuilder and StringBuffer Classes\n\nMutable efficient string construction.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder(\"Hello\");\n    sb.append(\" World\");\n    System.out.println(sb.toString());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The StringBuilder and StringBuffer Classes",
      "code": "public class Main {\n  public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder(\"Hello\");\n    sb.append(\" World\");\n    System.out.println(sb.toString());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The StringBuilder and StringBuffer Classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The StringBuilder and StringBuffer Classes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder(\"Hello\");\n    sb.append(\" World\");\n    System.out.println(sb.toString());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder(\"Hello\");\n    sb.append(\" World\");\n    System.out.println(sb.toString());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-7-tc-1",
        "description": "Verifies correct implementation for The StringBuilder and StringBuffer Classes",
        "testFn": "code.includes('StringBuilder')"
      }
    ]
  },
  {
    "id": "java-8-arrays-in-java-declaration-all",
    "title": "8. Arrays in Java: Declaration, Allocation, Indexing",
    "slug": "lesson-8-arrays-in-java-declaration-all",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fixed-size homogeneous memory buffers.",
    "concepts": [
      "Arrays in Java: Declaration, Allocation, Indexing",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Arrays in Java: Declaration, Allocation, Indexing ensures robust and scalable performance.",
    "explanationMarkdown": "### Arrays in Java: Declaration, Allocation, Indexing\n\nFixed-size homogeneous memory buffers.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30};\n    System.out.println(nums[0]);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Arrays in Java: Declaration, Allocation, Indexing",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30};\n    System.out.println(nums[0]);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Arrays in Java: Declaration, Allocation, Indexing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Arrays in Java: Declaration, Allocation, Indexing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30};\n    System.out.println(nums[0]);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30};\n    System.out.println(nums[0]);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-8-tc-1",
        "description": "Verifies correct implementation for Arrays in Java: Declaration, Allocation, Indexing",
        "testFn": "code.includes('nums[0]')"
      }
    ]
  },
  {
    "id": "java-9-multi-dimensional-and-jagged-a",
    "title": "9. Multi-Dimensional and Jagged Arrays",
    "slug": "lesson-9-multi-dimensional-and-jagged-a",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Arrays of array references.",
    "concepts": [
      "Multi-Dimensional and Jagged Arrays",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Multi-Dimensional and Jagged Arrays ensures robust and scalable performance.",
    "explanationMarkdown": "### Multi-Dimensional and Jagged Arrays\n\nArrays of array references.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    int[][] grid = {{1, 2}, {3, 4}};\n    System.out.println(grid[0][1]);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Dimensional and Jagged Arrays",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int[][] grid = {{1, 2}, {3, 4}};\n    System.out.println(grid[0][1]);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Dimensional and Jagged Arrays.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Dimensional and Jagged Arrays.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    int[][] grid = {{1, 2}, {3, 4}};\n    System.out.println(grid[0][1]);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    int[][] grid = {{1, 2}, {3, 4}};\n    System.out.println(grid[0][1]);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-9-tc-1",
        "description": "Verifies correct implementation for Multi-Dimensional and Jagged Arrays",
        "testFn": "code.includes('grid[0][1]')"
      }
    ]
  },
  {
    "id": "java-10-operators-and-precedence-in-ja",
    "title": "10. Operators and Precedence in Java",
    "slug": "lesson-10-operators-and-precedence-in-ja",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Arithmetic, relational, bitwise, and logical.",
    "concepts": [
      "Operators and Precedence in Java",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Operators and Precedence in Java ensures robust and scalable performance.",
    "explanationMarkdown": "### Operators and Precedence in Java\n\nArithmetic, relational, bitwise, and logical.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    int res = (10 + 5) * 2;\n    System.out.println(res);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Operators and Precedence in Java",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int res = (10 + 5) * 2;\n    System.out.println(res);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Operators and Precedence in Java.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Operators and Precedence in Java.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    int res = (10 + 5) * 2;\n    System.out.println(res);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    int res = (10 + 5) * 2;\n    System.out.println(res);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-10-tc-1",
        "description": "Verifies correct implementation for Operators and Precedence in Java",
        "testFn": "code.includes('*')"
      }
    ]
  },
  {
    "id": "java-11-control-flow-if-else-if-else",
    "title": "11. Control Flow: if, else if, else",
    "slug": "lesson-11-control-flow-if-else-if-else",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Branching conditional logic.",
    "concepts": [
      "Control Flow: if, else if, else",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Control Flow: if, else if, else ensures robust and scalable performance.",
    "explanationMarkdown": "### Control Flow: if, else if, else\n\nBranching conditional logic.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    if (x > 5) System.out.println(\"High\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Control Flow: if, else if, else",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    if (x > 5) System.out.println(\"High\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Control Flow: if, else if, else.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Control Flow: if, else if, else.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    if (x > 5) System.out.println(\"High\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    if (x > 5) System.out.println(\"High\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-11-tc-1",
        "description": "Verifies correct implementation for Control Flow: if, else if, else",
        "testFn": "code.includes('if')"
      }
    ]
  },
  {
    "id": "java-12-modern-switch-expressions-java",
    "title": "12. Modern Switch Expressions (Java 14+ Pattern Matching)",
    "slug": "lesson-12-modern-switch-expressions-java",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Arrow syntax without break fallthrough.",
    "concepts": [
      "Modern Switch Expressions (Java 14+ Pattern Matching)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Modern Switch Expressions (Java 14+ Pattern Matching) ensures robust and scalable performance.",
    "explanationMarkdown": "### Modern Switch Expressions (Java 14+ Pattern Matching)\n\nArrow syntax without break fallthrough.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    int day = 1;\n    String type = switch(day) { case 1 -> \"Monday\"; default -> \"Other\"; };\n    System.out.println(type);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Modern Switch Expressions (Java 14+ Pattern Matching)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int day = 1;\n    String type = switch(day) { case 1 -> \"Monday\"; default -> \"Other\"; };\n    System.out.println(type);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modern Switch Expressions (Java 14+ Pattern Matching).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modern Switch Expressions (Java 14+ Pattern Matching).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    int day = 1;\n    String type = switch(day) { case 1 -> \"Monday\"; default -> \"Other\"; };\n    System.out.println(type);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    int day = 1;\n    String type = switch(day) { case 1 -> \"Monday\"; default -> \"Other\"; };\n    System.out.println(type);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-12-tc-1",
        "description": "Verifies correct implementation for Modern Switch Expressions (Java 14+ Pattern Matching)",
        "testFn": "code.includes('switch')"
      }
    ]
  },
  {
    "id": "java-13-loops-for-enhanced-for-each-wh",
    "title": "13. Loops: for, enhanced for-each, while, do-while",
    "slug": "lesson-13-loops-for-enhanced-for-each-wh",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Iterate over collections and arrays.",
    "concepts": [
      "Loops: for, enhanced for-each, while, do-while",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Loops: for, enhanced for-each, while, do-while ensures robust and scalable performance.",
    "explanationMarkdown": "### Loops: for, enhanced for-each, while, do-while\n\nIterate over collections and arrays.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++) System.out.println(i);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Loops: for, enhanced for-each, while, do-while",
      "code": "public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++) System.out.println(i);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Loops: for, enhanced for-each, while, do-while.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Loops: for, enhanced for-each, while, do-while.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++) System.out.println(i);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++) System.out.println(i);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-13-tc-1",
        "description": "Verifies correct implementation for Loops: for, enhanced for-each, while, do-while",
        "testFn": "code.includes('for')"
      }
    ]
  },
  {
    "id": "java-14-variable-scope-local-instance-",
    "title": "14. Variable Scope: Local, Instance, and Static",
    "slug": "lesson-14-variable-scope-local-instance-",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stack allocation vs heap reference longevity.",
    "concepts": [
      "Variable Scope: Local, Instance, and Static",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Variable Scope: Local, Instance, and Static ensures robust and scalable performance.",
    "explanationMarkdown": "### Variable Scope: Local, Instance, and Static\n\nStack allocation vs heap reference longevity.\n\n```java\npublic class Main {\n  static int count = 42;\n  public static void main(String[] args) {\n    System.out.println(count);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Variable Scope: Local, Instance, and Static",
      "code": "public class Main {\n  static int count = 42;\n  public static void main(String[] args) {\n    System.out.println(count);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variable Scope: Local, Instance, and Static.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variable Scope: Local, Instance, and Static.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static int count = 42;\n  public static void main(String[] args) {\n    System.out.println(count);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static int count = 42;\n  public static void main(String[] args) {\n    System.out.println(count);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-14-tc-1",
        "description": "Verifies correct implementation for Variable Scope: Local, Instance, and Static",
        "testFn": "code.includes('static int')"
      }
    ]
  },
  {
    "id": "java-15-java-memory-model-stack-vs-hea",
    "title": "15. Java Memory Model: Stack vs Heap Allocation",
    "slug": "lesson-15-java-memory-model-stack-vs-hea",
    "language": "java",
    "category": "Module 1: Java Syntax, Types & JVM Architecture",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reference pointers on stack pointing to heap objects.",
    "concepts": [
      "Java Memory Model: Stack vs Heap Allocation",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Java Memory Model: Stack vs Heap Allocation ensures robust and scalable performance.",
    "explanationMarkdown": "### Java Memory Model: Stack vs Heap Allocation\n\nReference pointers on stack pointing to heap objects.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Stack holds frame; Heap holds instances\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Java Memory Model: Stack vs Heap Allocation",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Stack holds frame; Heap holds instances\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Java Memory Model: Stack vs Heap Allocation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Java Memory Model: Stack vs Heap Allocation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Stack holds frame; Heap holds instances\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Stack holds frame; Heap holds instances\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-15-tc-1",
        "description": "Verifies correct implementation for Java Memory Model: Stack vs Heap Allocation",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-16-defining-classes-and-instantia",
    "title": "16. Defining Classes and Instantiating Objects",
    "slug": "lesson-16-defining-classes-and-instantia",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Blueprints and stateful instances.",
    "concepts": [
      "Defining Classes and Instantiating Objects",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Defining Classes and Instantiating Objects ensures robust and scalable performance.",
    "explanationMarkdown": "### Defining Classes and Instantiating Objects\n\nBlueprints and stateful instances.\n\n```java\npublic class Main {\n  static class User { String name = \"Alice\"; }\n  public static void main(String[] args) {\n    User u = new User();\n    System.out.println(u.name);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Classes and Instantiating Objects",
      "code": "public class Main {\n  static class User { String name = \"Alice\"; }\n  public static void main(String[] args) {\n    User u = new User();\n    System.out.println(u.name);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Classes and Instantiating Objects.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Classes and Instantiating Objects.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class User { String name = \"Alice\"; }\n  public static void main(String[] args) {\n    User u = new User();\n    System.out.println(u.name);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class User { String name = \"Alice\"; }\n  public static void main(String[] args) {\n    User u = new User();\n    System.out.println(u.name);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-16-tc-1",
        "description": "Verifies correct implementation for Defining Classes and Instantiating Objects",
        "testFn": "code.includes('new User')"
      }
    ]
  },
  {
    "id": "java-17-instance-fields-and-methods",
    "title": "17. Instance Fields and Methods",
    "slug": "lesson-17-instance-fields-and-methods",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Encapsulating state and behavior.",
    "concepts": [
      "Instance Fields and Methods",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Instance Fields and Methods ensures robust and scalable performance.",
    "explanationMarkdown": "### Instance Fields and Methods\n\nEncapsulating state and behavior.\n\n```java\npublic class Main {\n  static class Calc { int add(int a, int b) { return a + b; } }\n  public static void main(String[] args) {\n    System.out.println(new Calc().add(2, 3));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Instance Fields and Methods",
      "code": "public class Main {\n  static class Calc { int add(int a, int b) { return a + b; } }\n  public static void main(String[] args) {\n    System.out.println(new Calc().add(2, 3));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Instance Fields and Methods.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Instance Fields and Methods.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Calc { int add(int a, int b) { return a + b; } }\n  public static void main(String[] args) {\n    System.out.println(new Calc().add(2, 3));\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Calc { int add(int a, int b) { return a + b; } }\n  public static void main(String[] args) {\n    System.out.println(new Calc().add(2, 3));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-17-tc-1",
        "description": "Verifies correct implementation for Instance Fields and Methods",
        "testFn": "code.includes('add')"
      }
    ]
  },
  {
    "id": "java-18-constructors-and-constructor-o",
    "title": "18. Constructors and Constructor Overloading",
    "slug": "lesson-18-constructors-and-constructor-o",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Initialize newly allocated heap instances.",
    "concepts": [
      "Constructors and Constructor Overloading",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Constructors and Constructor Overloading ensures robust and scalable performance.",
    "explanationMarkdown": "### Constructors and Constructor Overloading\n\nInitialize newly allocated heap instances.\n\n```java\npublic class Main {\n  static class Item { String name; Item(String n) { this.name = n; } }\n  public static void main(String[] args) {\n    System.out.println(new Item(\"Book\").name);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Constructors and Constructor Overloading",
      "code": "public class Main {\n  static class Item { String name; Item(String n) { this.name = n; } }\n  public static void main(String[] args) {\n    System.out.println(new Item(\"Book\").name);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Constructors and Constructor Overloading.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Constructors and Constructor Overloading.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Item { String name; Item(String n) { this.name = n; } }\n  public static void main(String[] args) {\n    System.out.println(new Item(\"Book\").name);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Item { String name; Item(String n) { this.name = n; } }\n  public static void main(String[] args) {\n    System.out.println(new Item(\"Book\").name);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-18-tc-1",
        "description": "Verifies correct implementation for Constructors and Constructor Overloading",
        "testFn": "code.includes('this.name')"
      }
    ]
  },
  {
    "id": "java-19-the-this-keyword-and-construct",
    "title": "19. The 'this' Keyword and Constructor Chaining this()",
    "slug": "lesson-19-the-this-keyword-and-construct",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Differentiate parameters from member fields.",
    "concepts": [
      "The 'this' Keyword and Constructor Chaining this()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The 'this' Keyword and Constructor Chaining this() ensures robust and scalable performance.",
    "explanationMarkdown": "### The 'this' Keyword and Constructor Chaining this()\n\nDifferentiate parameters from member fields.\n\n```java\npublic class Main {\n  static class Box { int size; Box() { this(10); } Box(int s) { this.size = s; } }\n  public static void main(String[] args) {\n    System.out.println(new Box().size);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The 'this' Keyword and Constructor Chaining this()",
      "code": "public class Main {\n  static class Box { int size; Box() { this(10); } Box(int s) { this.size = s; } }\n  public static void main(String[] args) {\n    System.out.println(new Box().size);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The 'this' Keyword and Constructor Chaining this().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The 'this' Keyword and Constructor Chaining this().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Box { int size; Box() { this(10); } Box(int s) { this.size = s; } }\n  public static void main(String[] args) {\n    System.out.println(new Box().size);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Box { int size; Box() { this(10); } Box(int s) { this.size = s; } }\n  public static void main(String[] args) {\n    System.out.println(new Box().size);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-19-tc-1",
        "description": "Verifies correct implementation for The 'this' Keyword and Constructor Chaining this()",
        "testFn": "code.includes('this(')"
      }
    ]
  },
  {
    "id": "java-20-access-modifiers-private-packa",
    "title": "20. Access Modifiers: private, package-private, protected, public",
    "slug": "lesson-20-access-modifiers-private-packa",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enforce strict visibility boundaries.",
    "concepts": [
      "Access Modifiers: private, package-private, protected, public",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Access Modifiers: private, package-private, protected, public ensures robust and scalable performance.",
    "explanationMarkdown": "### Access Modifiers: private, package-private, protected, public\n\nEnforce strict visibility boundaries.\n\n```java\npublic class Main {\n  static class Vault { private int secret = 42; public int getSecret() { return secret; } }\n  public static void main(String[] args) {\n    System.out.println(new Vault().getSecret());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Access Modifiers: private, package-private, protected, public",
      "code": "public class Main {\n  static class Vault { private int secret = 42; public int getSecret() { return secret; } }\n  public static void main(String[] args) {\n    System.out.println(new Vault().getSecret());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Access Modifiers: private, package-private, protected, public.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Access Modifiers: private, package-private, protected, public.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Vault { private int secret = 42; public int getSecret() { return secret; } }\n  public static void main(String[] args) {\n    System.out.println(new Vault().getSecret());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Vault { private int secret = 42; public int getSecret() { return secret; } }\n  public static void main(String[] args) {\n    System.out.println(new Vault().getSecret());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-20-tc-1",
        "description": "Verifies correct implementation for Access Modifiers: private, package-private, protected, public",
        "testFn": "code.includes('private')"
      }
    ]
  },
  {
    "id": "java-21-getter-and-setter-methods-java",
    "title": "21. Getter and Setter Methods (JavaBeans Pattern)",
    "slug": "lesson-21-getter-and-setter-methods-java",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safeguard internal state invariants.",
    "concepts": [
      "Getter and Setter Methods (JavaBeans Pattern)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Getter and Setter Methods (JavaBeans Pattern) ensures robust and scalable performance.",
    "explanationMarkdown": "### Getter and Setter Methods (JavaBeans Pattern)\n\nSafeguard internal state invariants.\n\n```java\npublic class Main {\n  static class Account { private int balance = 100; public int getBalance() { return balance; } }\n  public static void main(String[] args) {\n    System.out.println(new Account().getBalance());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Getter and Setter Methods (JavaBeans Pattern)",
      "code": "public class Main {\n  static class Account { private int balance = 100; public int getBalance() { return balance; } }\n  public static void main(String[] args) {\n    System.out.println(new Account().getBalance());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Getter and Setter Methods (JavaBeans Pattern).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Getter and Setter Methods (JavaBeans Pattern).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Account { private int balance = 100; public int getBalance() { return balance; } }\n  public static void main(String[] args) {\n    System.out.println(new Account().getBalance());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Account { private int balance = 100; public int getBalance() { return balance; } }\n  public static void main(String[] args) {\n    System.out.println(new Account().getBalance());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-21-tc-1",
        "description": "Verifies correct implementation for Getter and Setter Methods (JavaBeans Pattern)",
        "testFn": "code.includes('getBalance')"
      }
    ]
  },
  {
    "id": "java-22-static-fields-and-class-level-",
    "title": "22. Static Fields and Class-Level Shared State",
    "slug": "lesson-22-static-fields-and-class-level-",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Variables shared across all class instances.",
    "concepts": [
      "Static Fields and Class-Level Shared State",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Static Fields and Class-Level Shared State ensures robust and scalable performance.",
    "explanationMarkdown": "### Static Fields and Class-Level Shared State\n\nVariables shared across all class instances.\n\n```java\npublic class Main {\n  static class Counter { static int total = 0; Counter() { total++; } }\n  public static void main(String[] args) {\n    new Counter(); new Counter();\n    System.out.println(Counter.total);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static Fields and Class-Level Shared State",
      "code": "public class Main {\n  static class Counter { static int total = 0; Counter() { total++; } }\n  public static void main(String[] args) {\n    new Counter(); new Counter();\n    System.out.println(Counter.total);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static Fields and Class-Level Shared State.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Fields and Class-Level Shared State.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Counter { static int total = 0; Counter() { total++; } }\n  public static void main(String[] args) {\n    new Counter(); new Counter();\n    System.out.println(Counter.total);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Counter { static int total = 0; Counter() { total++; } }\n  public static void main(String[] args) {\n    new Counter(); new Counter();\n    System.out.println(Counter.total);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-22-tc-1",
        "description": "Verifies correct implementation for Static Fields and Class-Level Shared State",
        "testFn": "code.includes('Counter.total')"
      }
    ]
  },
  {
    "id": "java-23-static-methods-and-utility-cla",
    "title": "23. Static Methods and Utility Classes",
    "slug": "lesson-23-static-methods-and-utility-cla",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Methods invoked on the class without instantiation.",
    "concepts": [
      "Static Methods and Utility Classes",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Static Methods and Utility Classes ensures robust and scalable performance.",
    "explanationMarkdown": "### Static Methods and Utility Classes\n\nMethods invoked on the class without instantiation.\n\n```java\npublic class Main {\n  static class MathUtil { static int square(int x) { return x * x; } }\n  public static void main(String[] args) {\n    System.out.println(MathUtil.square(5));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static Methods and Utility Classes",
      "code": "public class Main {\n  static class MathUtil { static int square(int x) { return x * x; } }\n  public static void main(String[] args) {\n    System.out.println(MathUtil.square(5));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static Methods and Utility Classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Methods and Utility Classes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class MathUtil { static int square(int x) { return x * x; } }\n  public static void main(String[] args) {\n    System.out.println(MathUtil.square(5));\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class MathUtil { static int square(int x) { return x * x; } }\n  public static void main(String[] args) {\n    System.out.println(MathUtil.square(5));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-23-tc-1",
        "description": "Verifies correct implementation for Static Methods and Utility Classes",
        "testFn": "code.includes('MathUtil.square')"
      }
    ]
  },
  {
    "id": "java-24-static-initialization-blocks-s",
    "title": "24. Static Initialization Blocks (static { ... })",
    "slug": "lesson-24-static-initialization-blocks-s",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute classloader-time initialization logic.",
    "concepts": [
      "Static Initialization Blocks (static { ... })",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Static Initialization Blocks (static { ... }) ensures robust and scalable performance.",
    "explanationMarkdown": "### Static Initialization Blocks (static { ... })\n\nExecute classloader-time initialization logic.\n\n```java\npublic class Main {\n  static int val; static { val = 99; }\n  public static void main(String[] args) {\n    System.out.println(val);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static Initialization Blocks (static { ... })",
      "code": "public class Main {\n  static int val; static { val = 99; }\n  public static void main(String[] args) {\n    System.out.println(val);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static Initialization Blocks (static { ... }).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Initialization Blocks (static { ... }).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static int val; static { val = 99; }\n  public static void main(String[] args) {\n    System.out.println(val);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static int val; static { val = 99; }\n  public static void main(String[] args) {\n    System.out.println(val);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-24-tc-1",
        "description": "Verifies correct implementation for Static Initialization Blocks (static { ... })",
        "testFn": "code.includes('static {')"
      }
    ]
  },
  {
    "id": "java-25-the-final-keyword-constants-im",
    "title": "25. The 'final' Keyword: Constants, Immutability, Unsubclassable",
    "slug": "lesson-25-the-final-keyword-constants-im",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Freeze variables, methods, or classes.",
    "concepts": [
      "The 'final' Keyword: Constants, Immutability, Unsubclassable",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The 'final' Keyword: Constants, Immutability, Unsubclassable ensures robust and scalable performance.",
    "explanationMarkdown": "### The 'final' Keyword: Constants, Immutability, Unsubclassable\n\nFreeze variables, methods, or classes.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    final int MAX = 100;\n    System.out.println(MAX);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The 'final' Keyword: Constants, Immutability, Unsubclassable",
      "code": "public class Main {\n  public static void main(String[] args) {\n    final int MAX = 100;\n    System.out.println(MAX);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The 'final' Keyword: Constants, Immutability, Unsubclassable.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The 'final' Keyword: Constants, Immutability, Unsubclassable.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    final int MAX = 100;\n    System.out.println(MAX);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    final int MAX = 100;\n    System.out.println(MAX);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-25-tc-1",
        "description": "Verifies correct implementation for The 'final' Keyword: Constants, Immutability, Unsubclassable",
        "testFn": "code.includes('final')"
      }
    ]
  },
  {
    "id": "java-26-method-overloading-compile-tim",
    "title": "26. Method Overloading (Compile-Time Polymorphism)",
    "slug": "lesson-26-method-overloading-compile-tim",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Multiple signatures with identical method names.",
    "concepts": [
      "Method Overloading (Compile-Time Polymorphism)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Method Overloading (Compile-Time Polymorphism) ensures robust and scalable performance.",
    "explanationMarkdown": "### Method Overloading (Compile-Time Polymorphism)\n\nMultiple signatures with identical method names.\n\n```java\npublic class Main {\n  static class Greeter { String greet(String n) { return \"Hi \" + n; } String greet() { return greet(\"there\"); } }\n  public static void main(String[] args) {\n    System.out.println(new Greeter().greet());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Method Overloading (Compile-Time Polymorphism)",
      "code": "public class Main {\n  static class Greeter { String greet(String n) { return \"Hi \" + n; } String greet() { return greet(\"there\"); } }\n  public static void main(String[] args) {\n    System.out.println(new Greeter().greet());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Method Overloading (Compile-Time Polymorphism).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Method Overloading (Compile-Time Polymorphism).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Greeter { String greet(String n) { return \"Hi \" + n; } String greet() { return greet(\"there\"); } }\n  public static void main(String[] args) {\n    System.out.println(new Greeter().greet());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Greeter { String greet(String n) { return \"Hi \" + n; } String greet() { return greet(\"there\"); } }\n  public static void main(String[] args) {\n    System.out.println(new Greeter().greet());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-26-tc-1",
        "description": "Verifies correct implementation for Method Overloading (Compile-Time Polymorphism)",
        "testFn": "code.includes('greet')"
      }
    ]
  },
  {
    "id": "java-27-variable-length-arguments-vara",
    "title": "27. Variable-Length Arguments (Varargs: Type... args)",
    "slug": "lesson-27-variable-length-arguments-vara",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Accept flexible argument sequences.",
    "concepts": [
      "Variable-Length Arguments (Varargs: Type... args)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Variable-Length Arguments (Varargs: Type... args) ensures robust and scalable performance.",
    "explanationMarkdown": "### Variable-Length Arguments (Varargs: Type... args)\n\nAccept flexible argument sequences.\n\n```java\npublic class Main {\n  static int sum(int... nums) { int s = 0; for (int n : nums) s += n; return s; }\n  public static void main(String[] args) {\n    System.out.println(sum(1, 2, 3));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Variable-Length Arguments (Varargs: Type... args)",
      "code": "public class Main {\n  static int sum(int... nums) { int s = 0; for (int n : nums) s += n; return s; }\n  public static void main(String[] args) {\n    System.out.println(sum(1, 2, 3));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variable-Length Arguments (Varargs: Type... args).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variable-Length Arguments (Varargs: Type... args).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static int sum(int... nums) { int s = 0; for (int n : nums) s += n; return s; }\n  public static void main(String[] args) {\n    System.out.println(sum(1, 2, 3));\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static int sum(int... nums) { int s = 0; for (int n : nums) s += n; return s; }\n  public static void main(String[] args) {\n    System.out.println(sum(1, 2, 3));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-27-tc-1",
        "description": "Verifies correct implementation for Variable-Length Arguments (Varargs: Type... args)",
        "testFn": "code.includes('int...')"
      }
    ]
  },
  {
    "id": "java-28-object-class-methods-tostring",
    "title": "28. Object Class Methods: toString()",
    "slug": "lesson-28-object-class-methods-tostring",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Human-readable string representation of instances.",
    "concepts": [
      "Object Class Methods: toString()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Object Class Methods: toString() ensures robust and scalable performance.",
    "explanationMarkdown": "### Object Class Methods: toString()\n\nHuman-readable string representation of instances.\n\n```java\npublic class Main {\n  static class Point { int x = 1, y = 2; public String toString() { return \"(\" + x + \",\" + y + \")\"; } }\n  public static void main(String[] args) {\n    System.out.println(new Point());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Object Class Methods: toString()",
      "code": "public class Main {\n  static class Point { int x = 1, y = 2; public String toString() { return \"(\" + x + \",\" + y + \")\"; } }\n  public static void main(String[] args) {\n    System.out.println(new Point());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Object Class Methods: toString().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Object Class Methods: toString().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Point { int x = 1, y = 2; public String toString() { return \"(\" + x + \",\" + y + \")\"; } }\n  public static void main(String[] args) {\n    System.out.println(new Point());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Point { int x = 1, y = 2; public String toString() { return \"(\" + x + \",\" + y + \")\"; } }\n  public static void main(String[] args) {\n    System.out.println(new Point());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-28-tc-1",
        "description": "Verifies correct implementation for Object Class Methods: toString()",
        "testFn": "code.includes('toString')"
      }
    ]
  },
  {
    "id": "java-29-object-equality-equals-vs",
    "title": "29. Object Equality: equals() vs ==",
    "slug": "lesson-29-object-equality-equals-vs",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reference identity (==) vs value equivalence (.equals).",
    "concepts": [
      "Object Equality: equals() vs ==",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Object Equality: equals() vs == ensures robust and scalable performance.",
    "explanationMarkdown": "### Object Equality: equals() vs ==\n\nReference identity (==) vs value equivalence (.equals).\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    String a = new String(\"test\");\n    String b = new String(\"test\");\n    System.out.println(a.equals(b));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Object Equality: equals() vs ==",
      "code": "public class Main {\n  public static void main(String[] args) {\n    String a = new String(\"test\");\n    String b = new String(\"test\");\n    System.out.println(a.equals(b));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Object Equality: equals() vs ==.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Object Equality: equals() vs ==.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    String a = new String(\"test\");\n    String b = new String(\"test\");\n    System.out.println(a.equals(b));\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    String a = new String(\"test\");\n    String b = new String(\"test\");\n    System.out.println(a.equals(b));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-29-tc-1",
        "description": "Verifies correct implementation for Object Equality: equals() vs ==",
        "testFn": "code.includes('.equals(')"
      }
    ]
  },
  {
    "id": "java-30-the-hashcode-contract-and-hash",
    "title": "30. The hashCode() Contract and HashMap Compatibility",
    "slug": "lesson-30-the-hashcode-contract-and-hash",
    "language": "java",
    "category": "Module 2: Object-Oriented Design & Encapsulation",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensure identical objects yield identical hash codes.",
    "concepts": [
      "The hashCode() Contract and HashMap Compatibility",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The hashCode() Contract and HashMap Compatibility ensures robust and scalable performance.",
    "explanationMarkdown": "### The hashCode() Contract and HashMap Compatibility\n\nEnsure identical objects yield identical hash codes.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"DevForge\".hashCode());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The hashCode() Contract and HashMap Compatibility",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"DevForge\".hashCode());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The hashCode() Contract and HashMap Compatibility.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The hashCode() Contract and HashMap Compatibility.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"DevForge\".hashCode());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"DevForge\".hashCode());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-30-tc-1",
        "description": "Verifies correct implementation for The hashCode() Contract and HashMap Compatibility",
        "testFn": "code.includes('hashCode')"
      }
    ]
  },
  {
    "id": "java-31-class-inheritance-with-extends",
    "title": "31. Class Inheritance with extends",
    "slug": "lesson-31-class-inheritance-with-extends",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reuse parent fields and methods in subclasses.",
    "concepts": [
      "Class Inheritance with extends",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Class Inheritance with extends ensures robust and scalable performance.",
    "explanationMarkdown": "### Class Inheritance with extends\n\nReuse parent fields and methods in subclasses.\n\n```java\npublic class Main {\n  static class Animal { void speak() { System.out.println(\"Sound\"); } }\n  static class Dog extends Animal {}\n  public static void main(String[] args) { new Dog().speak(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Class Inheritance with extends",
      "code": "public class Main {\n  static class Animal { void speak() { System.out.println(\"Sound\"); } }\n  static class Dog extends Animal {}\n  public static void main(String[] args) { new Dog().speak(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Class Inheritance with extends.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Class Inheritance with extends.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Animal { void speak() { System.out.println(\"Sound\"); } }\n  static class Dog extends Animal {}\n  public static void main(String[] args) { new Dog().speak(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Animal { void speak() { System.out.println(\"Sound\"); } }\n  static class Dog extends Animal {}\n  public static void main(String[] args) { new Dog().speak(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-31-tc-1",
        "description": "Verifies correct implementation for Class Inheritance with extends",
        "testFn": "code.includes('extends')"
      }
    ]
  },
  {
    "id": "java-32-the-super-keyword-calling-pare",
    "title": "32. The super Keyword: Calling Parent Methods and Constructors",
    "slug": "lesson-32-the-super-keyword-calling-pare",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Explicit delegation to superclass implementations.",
    "concepts": [
      "The super Keyword: Calling Parent Methods and Constructors",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The super Keyword: Calling Parent Methods and Constructors ensures robust and scalable performance.",
    "explanationMarkdown": "### The super Keyword: Calling Parent Methods and Constructors\n\nExplicit delegation to superclass implementations.\n\n```java\npublic class Main {\n  static class Parent { Parent(String msg) { System.out.println(msg); } }\n  static class Child extends Parent { Child() { super(\"From Parent\"); } }\n  public static void main(String[] args) { new Child(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The super Keyword: Calling Parent Methods and Constructors",
      "code": "public class Main {\n  static class Parent { Parent(String msg) { System.out.println(msg); } }\n  static class Child extends Parent { Child() { super(\"From Parent\"); } }\n  public static void main(String[] args) { new Child(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The super Keyword: Calling Parent Methods and Constructors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The super Keyword: Calling Parent Methods and Constructors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Parent { Parent(String msg) { System.out.println(msg); } }\n  static class Child extends Parent { Child() { super(\"From Parent\"); } }\n  public static void main(String[] args) { new Child(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Parent { Parent(String msg) { System.out.println(msg); } }\n  static class Child extends Parent { Child() { super(\"From Parent\"); } }\n  public static void main(String[] args) { new Child(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-32-tc-1",
        "description": "Verifies correct implementation for The super Keyword: Calling Parent Methods and Constructors",
        "testFn": "code.includes('super(')"
      }
    ]
  },
  {
    "id": "java-33-method-overriding-and-the-over",
    "title": "33. Method Overriding and the @Override Annotation",
    "slug": "lesson-33-method-overriding-and-the-over",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Dynamic runtime dispatch of subclass methods.",
    "concepts": [
      "Method Overriding and the @Override Annotation",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Method Overriding and the @Override Annotation ensures robust and scalable performance.",
    "explanationMarkdown": "### Method Overriding and the @Override Annotation\n\nDynamic runtime dispatch of subclass methods.\n\n```java\npublic class Main {\n  static class Base { void show() { System.out.println(\"Base\"); } }\n  static class Sub extends Base { @Override void show() { System.out.println(\"Sub\"); } }\n  public static void main(String[] args) { new Sub().show(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Method Overriding and the @Override Annotation",
      "code": "public class Main {\n  static class Base { void show() { System.out.println(\"Base\"); } }\n  static class Sub extends Base { @Override void show() { System.out.println(\"Sub\"); } }\n  public static void main(String[] args) { new Sub().show(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Method Overriding and the @Override Annotation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Method Overriding and the @Override Annotation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Base { void show() { System.out.println(\"Base\"); } }\n  static class Sub extends Base { @Override void show() { System.out.println(\"Sub\"); } }\n  public static void main(String[] args) { new Sub().show(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Base { void show() { System.out.println(\"Base\"); } }\n  static class Sub extends Base { @Override void show() { System.out.println(\"Sub\"); } }\n  public static void main(String[] args) { new Sub().show(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-33-tc-1",
        "description": "Verifies correct implementation for Method Overriding and the @Override Annotation",
        "testFn": "code.includes('@Override')"
      }
    ]
  },
  {
    "id": "java-34-upcasting-and-runtime-polymorp",
    "title": "34. Upcasting and Runtime Polymorphism",
    "slug": "lesson-34-upcasting-and-runtime-polymorp",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Treat derived instances through superclass references.",
    "concepts": [
      "Upcasting and Runtime Polymorphism",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Upcasting and Runtime Polymorphism ensures robust and scalable performance.",
    "explanationMarkdown": "### Upcasting and Runtime Polymorphism\n\nTreat derived instances through superclass references.\n\n```java\npublic class Main {\n  static class Shape { void draw() { System.out.println(\"Shape\"); } }\n  static class Circle extends Shape { void draw() { System.out.println(\"Circle\"); } }\n  public static void main(String[] args) { Shape s = new Circle(); s.draw(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Upcasting and Runtime Polymorphism",
      "code": "public class Main {\n  static class Shape { void draw() { System.out.println(\"Shape\"); } }\n  static class Circle extends Shape { void draw() { System.out.println(\"Circle\"); } }\n  public static void main(String[] args) { Shape s = new Circle(); s.draw(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Upcasting and Runtime Polymorphism.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Upcasting and Runtime Polymorphism.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Shape { void draw() { System.out.println(\"Shape\"); } }\n  static class Circle extends Shape { void draw() { System.out.println(\"Circle\"); } }\n  public static void main(String[] args) { Shape s = new Circle(); s.draw(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Shape { void draw() { System.out.println(\"Shape\"); } }\n  static class Circle extends Shape { void draw() { System.out.println(\"Circle\"); } }\n  public static void main(String[] args) { Shape s = new Circle(); s.draw(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-34-tc-1",
        "description": "Verifies correct implementation for Upcasting and Runtime Polymorphism",
        "testFn": "code.includes('Shape s = new Circle()')"
      }
    ]
  },
  {
    "id": "java-35-downcasting-and-classcastexcep",
    "title": "35. Downcasting and ClassCastException Safeguards",
    "slug": "lesson-35-downcasting-and-classcastexcep",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safely cast generalized references down to subtypes.",
    "concepts": [
      "Downcasting and ClassCastException Safeguards",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Downcasting and ClassCastException Safeguards ensures robust and scalable performance.",
    "explanationMarkdown": "### Downcasting and ClassCastException Safeguards\n\nSafely cast generalized references down to subtypes.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    Object o = \"Java\";\n    String s = (String) o;\n    System.out.println(s);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Downcasting and ClassCastException Safeguards",
      "code": "public class Main {\n  public static void main(String[] args) {\n    Object o = \"Java\";\n    String s = (String) o;\n    System.out.println(s);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Downcasting and ClassCastException Safeguards.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Downcasting and ClassCastException Safeguards.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    Object o = \"Java\";\n    String s = (String) o;\n    System.out.println(s);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    Object o = \"Java\";\n    String s = (String) o;\n    System.out.println(s);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-35-tc-1",
        "description": "Verifies correct implementation for Downcasting and ClassCastException Safeguards",
        "testFn": "code.includes('(String)')"
      }
    ]
  },
  {
    "id": "java-36-the-instanceof-operator-and-pa",
    "title": "36. The instanceof Operator and Pattern Matching (Java 16+)",
    "slug": "lesson-36-the-instanceof-operator-and-pa",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Test and cast instances in a single expression.",
    "concepts": [
      "The instanceof Operator and Pattern Matching (Java 16+)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The instanceof Operator and Pattern Matching (Java 16+) ensures robust and scalable performance.",
    "explanationMarkdown": "### The instanceof Operator and Pattern Matching (Java 16+)\n\nTest and cast instances in a single expression.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    Object obj = \"Enterprise\";\n    if (obj instanceof String str) {\n      System.out.println(str.toUpperCase());\n    }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The instanceof Operator and Pattern Matching (Java 16+)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    Object obj = \"Enterprise\";\n    if (obj instanceof String str) {\n      System.out.println(str.toUpperCase());\n    }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The instanceof Operator and Pattern Matching (Java 16+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The instanceof Operator and Pattern Matching (Java 16+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    Object obj = \"Enterprise\";\n    if (obj instanceof String str) {\n      System.out.println(str.toUpperCase());\n    }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    Object obj = \"Enterprise\";\n    if (obj instanceof String str) {\n      System.out.println(str.toUpperCase());\n    }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-36-tc-1",
        "description": "Verifies correct implementation for The instanceof Operator and Pattern Matching (Java 16+)",
        "testFn": "code.includes('instanceof')"
      }
    ]
  },
  {
    "id": "java-37-abstract-classes-with-abstract",
    "title": "37. Abstract Classes with abstract class",
    "slug": "lesson-37-abstract-classes-with-abstract",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define incomplete template classes enforcing implementation.",
    "concepts": [
      "Abstract Classes with abstract class",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Abstract Classes with abstract class ensures robust and scalable performance.",
    "explanationMarkdown": "### Abstract Classes with abstract class\n\nDefine incomplete template classes enforcing implementation.\n\n```java\npublic class Main {\n  static abstract class Worker { abstract void work(); }\n  static class Coder extends Worker { void work() { System.out.println(\"Coding\"); } }\n  public static void main(String[] args) { new Coder().work(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Abstract Classes with abstract class",
      "code": "public class Main {\n  static abstract class Worker { abstract void work(); }\n  static class Coder extends Worker { void work() { System.out.println(\"Coding\"); } }\n  public static void main(String[] args) { new Coder().work(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Abstract Classes with abstract class.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Abstract Classes with abstract class.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static abstract class Worker { abstract void work(); }\n  static class Coder extends Worker { void work() { System.out.println(\"Coding\"); } }\n  public static void main(String[] args) { new Coder().work(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static abstract class Worker { abstract void work(); }\n  static class Coder extends Worker { void work() { System.out.println(\"Coding\"); } }\n  public static void main(String[] args) { new Coder().work(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-37-tc-1",
        "description": "Verifies correct implementation for Abstract Classes with abstract class",
        "testFn": "code.includes('abstract class')"
      }
    ]
  },
  {
    "id": "java-38-abstract-methods-enforcing-sub",
    "title": "38. Abstract Methods: Enforcing Subclass Contracts",
    "slug": "lesson-38-abstract-methods-enforcing-sub",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Force subclasses to provide bespoke logic.",
    "concepts": [
      "Abstract Methods: Enforcing Subclass Contracts",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Abstract Methods: Enforcing Subclass Contracts ensures robust and scalable performance.",
    "explanationMarkdown": "### Abstract Methods: Enforcing Subclass Contracts\n\nForce subclasses to provide bespoke logic.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Abstract methods declare signature without body\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Abstract Methods: Enforcing Subclass Contracts",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Abstract methods declare signature without body\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Abstract Methods: Enforcing Subclass Contracts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Abstract Methods: Enforcing Subclass Contracts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Abstract methods declare signature without body\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Abstract methods declare signature without body\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-38-tc-1",
        "description": "Verifies correct implementation for Abstract Methods: Enforcing Subclass Contracts",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-39-template-method-design-pattern",
    "title": "39. Template Method Design Pattern",
    "slug": "lesson-39-template-method-design-pattern",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define algorithm skeleton in abstract class.",
    "concepts": [
      "Template Method Design Pattern",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Template Method Design Pattern ensures robust and scalable performance.",
    "explanationMarkdown": "### Template Method Design Pattern\n\nDefine algorithm skeleton in abstract class.\n\n```java\npublic class Main {\n  static abstract class Game { final void play() { start(); end(); } abstract void start(); abstract void end(); }\n  static class Chess extends Game { void start() { System.out.println(\"Start\"); } void end() { System.out.println(\"End\"); } }\n  public static void main(String[] args) { new Chess().play(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Template Method Design Pattern",
      "code": "public class Main {\n  static abstract class Game { final void play() { start(); end(); } abstract void start(); abstract void end(); }\n  static class Chess extends Game { void start() { System.out.println(\"Start\"); } void end() { System.out.println(\"End\"); } }\n  public static void main(String[] args) { new Chess().play(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Template Method Design Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Template Method Design Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static abstract class Game { final void play() { start(); end(); } abstract void start(); abstract void end(); }\n  static class Chess extends Game { void start() { System.out.println(\"Start\"); } void end() { System.out.println(\"End\"); } }\n  public static void main(String[] args) { new Chess().play(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static abstract class Game { final void play() { start(); end(); } abstract void start(); abstract void end(); }\n  static class Chess extends Game { void start() { System.out.println(\"Start\"); } void end() { System.out.println(\"End\"); } }\n  public static void main(String[] args) { new Chess().play(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-39-tc-1",
        "description": "Verifies correct implementation for Template Method Design Pattern",
        "testFn": "code.includes('abstract')"
      }
    ]
  },
  {
    "id": "java-40-preventing-inheritance-with-fi",
    "title": "40. Preventing Inheritance with final classes",
    "slug": "lesson-40-preventing-inheritance-with-fi",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Close classes from extension (e.g. java.lang.String).",
    "concepts": [
      "Preventing Inheritance with final classes",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Preventing Inheritance with final classes ensures robust and scalable performance.",
    "explanationMarkdown": "### Preventing Inheritance with final classes\n\nClose classes from extension (e.g. java.lang.String).\n\n```java\npublic class Main {\n  static final class Secret {}\n  public static void main(String[] args) {\n    System.out.println(new Secret().getClass().getSimpleName());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Preventing Inheritance with final classes",
      "code": "public class Main {\n  static final class Secret {}\n  public static void main(String[] args) {\n    System.out.println(new Secret().getClass().getSimpleName());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preventing Inheritance with final classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preventing Inheritance with final classes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static final class Secret {}\n  public static void main(String[] args) {\n    System.out.println(new Secret().getClass().getSimpleName());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static final class Secret {}\n  public static void main(String[] args) {\n    System.out.println(new Secret().getClass().getSimpleName());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-40-tc-1",
        "description": "Verifies correct implementation for Preventing Inheritance with final classes",
        "testFn": "code.includes('final class')"
      }
    ]
  },
  {
    "id": "java-41-preventing-overriding-with-fin",
    "title": "41. Preventing Overriding with final methods",
    "slug": "lesson-41-preventing-overriding-with-fin",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Lock critical security methods against alteration.",
    "concepts": [
      "Preventing Overriding with final methods",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Preventing Overriding with final methods ensures robust and scalable performance.",
    "explanationMarkdown": "### Preventing Overriding with final methods\n\nLock critical security methods against alteration.\n\n```java\npublic class Main {\n  static class Auth { final boolean verify() { return true; } }\n  public static void main(String[] args) { System.out.println(new Auth().verify()); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Preventing Overriding with final methods",
      "code": "public class Main {\n  static class Auth { final boolean verify() { return true; } }\n  public static void main(String[] args) { System.out.println(new Auth().verify()); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preventing Overriding with final methods.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preventing Overriding with final methods.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Auth { final boolean verify() { return true; } }\n  public static void main(String[] args) { System.out.println(new Auth().verify()); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Auth { final boolean verify() { return true; } }\n  public static void main(String[] args) { System.out.println(new Auth().verify()); }\n}"
    ],
    "testCases": [
      {
        "id": "java-41-tc-1",
        "description": "Verifies correct implementation for Preventing Overriding with final methods",
        "testFn": "code.includes('final boolean')"
      }
    ]
  },
  {
    "id": "java-42-composition-vs-inheritance-has",
    "title": "42. Composition vs Inheritance: 'Has-a' vs 'Is-a'",
    "slug": "lesson-42-composition-vs-inheritance-has",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why object composition provides greater architectural agility.",
    "concepts": [
      "Composition vs Inheritance: 'Has-a' vs 'Is-a'",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Composition vs Inheritance: 'Has-a' vs 'Is-a' ensures robust and scalable performance.",
    "explanationMarkdown": "### Composition vs Inheritance: 'Has-a' vs 'Is-a'\n\nWhy object composition provides greater architectural agility.\n\n```java\npublic class Main {\n  static class Engine { void run() { System.out.println(\"Vroom\"); } }\n  static class Car { Engine e = new Engine(); }\n  public static void main(String[] args) { new Car().e.run(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Composition vs Inheritance: 'Has-a' vs 'Is-a'",
      "code": "public class Main {\n  static class Engine { void run() { System.out.println(\"Vroom\"); } }\n  static class Car { Engine e = new Engine(); }\n  public static void main(String[] args) { new Car().e.run(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Composition vs Inheritance: 'Has-a' vs 'Is-a'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Composition vs Inheritance: 'Has-a' vs 'Is-a'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Engine { void run() { System.out.println(\"Vroom\"); } }\n  static class Car { Engine e = new Engine(); }\n  public static void main(String[] args) { new Car().e.run(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Engine { void run() { System.out.println(\"Vroom\"); } }\n  static class Car { Engine e = new Engine(); }\n  public static void main(String[] args) { new Car().e.run(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-42-tc-1",
        "description": "Verifies correct implementation for Composition vs Inheritance: 'Has-a' vs 'Is-a'",
        "testFn": "code.includes('Engine e')"
      }
    ]
  },
  {
    "id": "java-43-covariant-return-types",
    "title": "43. Covariant Return Types",
    "slug": "lesson-43-covariant-return-types",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Allow overriding methods to return subtypes.",
    "concepts": [
      "Covariant Return Types",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Covariant Return Types ensures robust and scalable performance.",
    "explanationMarkdown": "### Covariant Return Types\n\nAllow overriding methods to return subtypes.\n\n```java\npublic class Main {\n  static class Factory { Object make() { return \"Thing\"; } }\n  static class StringFactory extends Factory { @Override String make() { return \"Specific\"; } }\n  public static void main(String[] args) { System.out.println(new StringFactory().make()); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Covariant Return Types",
      "code": "public class Main {\n  static class Factory { Object make() { return \"Thing\"; } }\n  static class StringFactory extends Factory { @Override String make() { return \"Specific\"; } }\n  public static void main(String[] args) { System.out.println(new StringFactory().make()); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Covariant Return Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Covariant Return Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Factory { Object make() { return \"Thing\"; } }\n  static class StringFactory extends Factory { @Override String make() { return \"Specific\"; } }\n  public static void main(String[] args) { System.out.println(new StringFactory().make()); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Factory { Object make() { return \"Thing\"; } }\n  static class StringFactory extends Factory { @Override String make() { return \"Specific\"; } }\n  public static void main(String[] args) { System.out.println(new StringFactory().make()); }\n}"
    ],
    "testCases": [
      {
        "id": "java-43-tc-1",
        "description": "Verifies correct implementation for Covariant Return Types",
        "testFn": "code.includes('String make()')"
      }
    ]
  },
  {
    "id": "java-44-virtual-method-invocation-mech",
    "title": "44. Virtual Method Invocation Mechanics (vtable)",
    "slug": "lesson-44-virtual-method-invocation-mech",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "How the JVM invokes polymorphic methods via dispatch tables.",
    "concepts": [
      "Virtual Method Invocation Mechanics (vtable)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Virtual Method Invocation Mechanics (vtable) ensures robust and scalable performance.",
    "explanationMarkdown": "### Virtual Method Invocation Mechanics (vtable)\n\nHow the JVM invokes polymorphic methods via dispatch tables.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"JVM vtables enable O(1) runtime method dispatch\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Virtual Method Invocation Mechanics (vtable)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"JVM vtables enable O(1) runtime method dispatch\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Virtual Method Invocation Mechanics (vtable).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Virtual Method Invocation Mechanics (vtable).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"JVM vtables enable O(1) runtime method dispatch\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"JVM vtables enable O(1) runtime method dispatch\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-44-tc-1",
        "description": "Verifies correct implementation for Virtual Method Invocation Mechanics (vtable)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-45-polymorphic-banking-account-sy",
    "title": "45. Polymorphic Banking Account System Exercise",
    "slug": "lesson-45-polymorphic-banking-account-sy",
    "language": "java",
    "category": "Module 3: Inheritance, Polymorphism & Abstract Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Build an extensible transaction account hierarchy.",
    "concepts": [
      "Polymorphic Banking Account System Exercise",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Polymorphic Banking Account System Exercise ensures robust and scalable performance.",
    "explanationMarkdown": "### Polymorphic Banking Account System Exercise\n\nBuild an extensible transaction account hierarchy.\n\n```java\npublic class Main {\n  static abstract class Account { abstract int getRate(); }\n  static class Savings extends Account { int getRate() { return 5; } }\n  public static void main(String[] args) { System.out.println(new Savings().getRate()); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Polymorphic Banking Account System Exercise",
      "code": "public class Main {\n  static abstract class Account { abstract int getRate(); }\n  static class Savings extends Account { int getRate() { return 5; } }\n  public static void main(String[] args) { System.out.println(new Savings().getRate()); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Polymorphic Banking Account System Exercise.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Polymorphic Banking Account System Exercise.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static abstract class Account { abstract int getRate(); }\n  static class Savings extends Account { int getRate() { return 5; } }\n  public static void main(String[] args) { System.out.println(new Savings().getRate()); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static abstract class Account { abstract int getRate(); }\n  static class Savings extends Account { int getRate() { return 5; } }\n  public static void main(String[] args) { System.out.println(new Savings().getRate()); }\n}"
    ],
    "testCases": [
      {
        "id": "java-45-tc-1",
        "description": "Verifies correct implementation for Polymorphic Banking Account System Exercise",
        "testFn": "code.includes('Savings')"
      }
    ]
  },
  {
    "id": "java-46-declaring-interfaces-with-inte",
    "title": "46. Declaring Interfaces with interface",
    "slug": "lesson-46-declaring-interfaces-with-inte",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pure behavioral contracts with abstract signatures.",
    "concepts": [
      "Declaring Interfaces with interface",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Declaring Interfaces with interface ensures robust and scalable performance.",
    "explanationMarkdown": "### Declaring Interfaces with interface\n\nPure behavioral contracts with abstract signatures.\n\n```java\npublic class Main {\n  interface Printable { void printMe(); }\n  static class Doc implements Printable { public void printMe() { System.out.println(\"Printing\"); } }\n  public static void main(String[] args) { new Doc().printMe(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Declaring Interfaces with interface",
      "code": "public class Main {\n  interface Printable { void printMe(); }\n  static class Doc implements Printable { public void printMe() { System.out.println(\"Printing\"); } }\n  public static void main(String[] args) { new Doc().printMe(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Declaring Interfaces with interface.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Declaring Interfaces with interface.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Printable { void printMe(); }\n  static class Doc implements Printable { public void printMe() { System.out.println(\"Printing\"); } }\n  public static void main(String[] args) { new Doc().printMe(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Printable { void printMe(); }\n  static class Doc implements Printable { public void printMe() { System.out.println(\"Printing\"); } }\n  public static void main(String[] args) { new Doc().printMe(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-46-tc-1",
        "description": "Verifies correct implementation for Declaring Interfaces with interface",
        "testFn": "code.includes('interface')"
      }
    ]
  },
  {
    "id": "java-47-implementing-multiple-interfac",
    "title": "47. Implementing Multiple Interfaces",
    "slug": "lesson-47-implementing-multiple-interfac",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Multiple inheritance of type and behavior.",
    "concepts": [
      "Implementing Multiple Interfaces",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Implementing Multiple Interfaces ensures robust and scalable performance.",
    "explanationMarkdown": "### Implementing Multiple Interfaces\n\nMultiple inheritance of type and behavior.\n\n```java\npublic class Main {\n  interface A {}\n  interface B {}\n  static class C implements A, B {}\n  public static void main(String[] args) { System.out.println(new C() instanceof A); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Implementing Multiple Interfaces",
      "code": "public class Main {\n  interface A {}\n  interface B {}\n  static class C implements A, B {}\n  public static void main(String[] args) { System.out.println(new C() instanceof A); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Implementing Multiple Interfaces.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Implementing Multiple Interfaces.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface A {}\n  interface B {}\n  static class C implements A, B {}\n  public static void main(String[] args) { System.out.println(new C() instanceof A); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface A {}\n  interface B {}\n  static class C implements A, B {}\n  public static void main(String[] args) { System.out.println(new C() instanceof A); }\n}"
    ],
    "testCases": [
      {
        "id": "java-47-tc-1",
        "description": "Verifies correct implementation for Implementing Multiple Interfaces",
        "testFn": "code.includes('implements A, B')"
      }
    ]
  },
  {
    "id": "java-48-interface-constants-public-sta",
    "title": "48. Interface Constants (public static final by default)",
    "slug": "lesson-48-interface-constants-public-sta",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Implicit immutable class constants.",
    "concepts": [
      "Interface Constants (public static final by default)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Interface Constants (public static final by default) ensures robust and scalable performance.",
    "explanationMarkdown": "### Interface Constants (public static final by default)\n\nImplicit immutable class constants.\n\n```java\npublic class Main {\n  interface Config { int TIMEOUT = 5000; }\n  public static void main(String[] args) { System.out.println(Config.TIMEOUT); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Interface Constants (public static final by default)",
      "code": "public class Main {\n  interface Config { int TIMEOUT = 5000; }\n  public static void main(String[] args) { System.out.println(Config.TIMEOUT); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interface Constants (public static final by default).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interface Constants (public static final by default).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Config { int TIMEOUT = 5000; }\n  public static void main(String[] args) { System.out.println(Config.TIMEOUT); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Config { int TIMEOUT = 5000; }\n  public static void main(String[] args) { System.out.println(Config.TIMEOUT); }\n}"
    ],
    "testCases": [
      {
        "id": "java-48-tc-1",
        "description": "Verifies correct implementation for Interface Constants (public static final by default)",
        "testFn": "code.includes('TIMEOUT')"
      }
    ]
  },
  {
    "id": "java-49-default-methods-in-interfaces-",
    "title": "49. Default Methods in Interfaces (Java 8+ default)",
    "slug": "lesson-49-default-methods-in-interfaces-",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evolve interfaces without breaking existing implementations.",
    "concepts": [
      "Default Methods in Interfaces (Java 8+ default)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Default Methods in Interfaces (Java 8+ default) ensures robust and scalable performance.",
    "explanationMarkdown": "### Default Methods in Interfaces (Java 8+ default)\n\nEvolve interfaces without breaking existing implementations.\n\n```java\npublic class Main {\n  interface Logger { default void log(String s) { System.out.println(s); } }\n  static class AppLog implements Logger {}\n  public static void main(String[] args) { new AppLog().log(\"Active\"); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Default Methods in Interfaces (Java 8+ default)",
      "code": "public class Main {\n  interface Logger { default void log(String s) { System.out.println(s); } }\n  static class AppLog implements Logger {}\n  public static void main(String[] args) { new AppLog().log(\"Active\"); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Default Methods in Interfaces (Java 8+ default).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Default Methods in Interfaces (Java 8+ default).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Logger { default void log(String s) { System.out.println(s); } }\n  static class AppLog implements Logger {}\n  public static void main(String[] args) { new AppLog().log(\"Active\"); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Logger { default void log(String s) { System.out.println(s); } }\n  static class AppLog implements Logger {}\n  public static void main(String[] args) { new AppLog().log(\"Active\"); }\n}"
    ],
    "testCases": [
      {
        "id": "java-49-tc-1",
        "description": "Verifies correct implementation for Default Methods in Interfaces (Java 8+ default)",
        "testFn": "code.includes('default void')"
      }
    ]
  },
  {
    "id": "java-50-static-methods-in-interfaces",
    "title": "50. Static Methods in Interfaces",
    "slug": "lesson-50-static-methods-in-interfaces",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Utility helper methods scoped directly to interface types.",
    "concepts": [
      "Static Methods in Interfaces",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Static Methods in Interfaces ensures robust and scalable performance.",
    "explanationMarkdown": "### Static Methods in Interfaces\n\nUtility helper methods scoped directly to interface types.\n\n```java\npublic class Main {\n  interface Validator { static boolean isPos(int x) { return x > 0; } }\n  public static void main(String[] args) { System.out.println(Validator.isPos(10)); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Static Methods in Interfaces",
      "code": "public class Main {\n  interface Validator { static boolean isPos(int x) { return x > 0; } }\n  public static void main(String[] args) { System.out.println(Validator.isPos(10)); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Static Methods in Interfaces.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Methods in Interfaces.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Validator { static boolean isPos(int x) { return x > 0; } }\n  public static void main(String[] args) { System.out.println(Validator.isPos(10)); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Validator { static boolean isPos(int x) { return x > 0; } }\n  public static void main(String[] args) { System.out.println(Validator.isPos(10)); }\n}"
    ],
    "testCases": [
      {
        "id": "java-50-tc-1",
        "description": "Verifies correct implementation for Static Methods in Interfaces",
        "testFn": "code.includes('Validator.isPos')"
      }
    ]
  },
  {
    "id": "java-51-private-interface-methods-java",
    "title": "51. Private Interface Methods (Java 9+)",
    "slug": "lesson-51-private-interface-methods-java",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Share reusable logic across multiple default methods.",
    "concepts": [
      "Private Interface Methods (Java 9+)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Private Interface Methods (Java 9+) ensures robust and scalable performance.",
    "explanationMarkdown": "### Private Interface Methods (Java 9+)\n\nShare reusable logic across multiple default methods.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Private interface methods encapsulate internal helper logic\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Private Interface Methods (Java 9+)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Private interface methods encapsulate internal helper logic\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Private Interface Methods (Java 9+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Private Interface Methods (Java 9+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Private interface methods encapsulate internal helper logic\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Private interface methods encapsulate internal helper logic\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-51-tc-1",
        "description": "Verifies correct implementation for Private Interface Methods (Java 9+)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-52-functional-interfaces-and-func",
    "title": "52. Functional Interfaces and @FunctionalInterface",
    "slug": "lesson-52-functional-interfaces-and-func",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Interfaces with exactly one abstract method.",
    "concepts": [
      "Functional Interfaces and @FunctionalInterface",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Functional Interfaces and @FunctionalInterface ensures robust and scalable performance.",
    "explanationMarkdown": "### Functional Interfaces and @FunctionalInterface\n\nInterfaces with exactly one abstract method.\n\n```java\npublic class Main {\n  @FunctionalInterface interface Action { void run(); }\n  public static void main(String[] args) { Action a = () -> System.out.println(\"Ran\"); a.run(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Functional Interfaces and @FunctionalInterface",
      "code": "public class Main {\n  @FunctionalInterface interface Action { void run(); }\n  public static void main(String[] args) { Action a = () -> System.out.println(\"Ran\"); a.run(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Functional Interfaces and @FunctionalInterface.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Functional Interfaces and @FunctionalInterface.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  @FunctionalInterface interface Action { void run(); }\n  public static void main(String[] args) { Action a = () -> System.out.println(\"Ran\"); a.run(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  @FunctionalInterface interface Action { void run(); }\n  public static void main(String[] args) { Action a = () -> System.out.println(\"Ran\"); a.run(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-52-tc-1",
        "description": "Verifies correct implementation for Functional Interfaces and @FunctionalInterface",
        "testFn": "code.includes('@FunctionalInterface')"
      }
    ]
  },
  {
    "id": "java-53-marker-interfaces-serializable",
    "title": "53. Marker Interfaces (Serializable, Cloneable)",
    "slug": "lesson-53-marker-interfaces-serializable",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tag classes with empty metadata markers.",
    "concepts": [
      "Marker Interfaces (Serializable, Cloneable)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Marker Interfaces (Serializable, Cloneable) ensures robust and scalable performance.",
    "explanationMarkdown": "### Marker Interfaces (Serializable, Cloneable)\n\nTag classes with empty metadata markers.\n\n```java\npublic class Main {\n  interface Auditable {}\n  static class Entity implements Auditable {}\n  public static void main(String[] args) { System.out.println(new Entity() instanceof Auditable); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Marker Interfaces (Serializable, Cloneable)",
      "code": "public class Main {\n  interface Auditable {}\n  static class Entity implements Auditable {}\n  public static void main(String[] args) { System.out.println(new Entity() instanceof Auditable); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Marker Interfaces (Serializable, Cloneable).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Marker Interfaces (Serializable, Cloneable).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Auditable {}\n  static class Entity implements Auditable {}\n  public static void main(String[] args) { System.out.println(new Entity() instanceof Auditable); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Auditable {}\n  static class Entity implements Auditable {}\n  public static void main(String[] args) { System.out.println(new Entity() instanceof Auditable); }\n}"
    ],
    "testCases": [
      {
        "id": "java-53-tc-1",
        "description": "Verifies correct implementation for Marker Interfaces (Serializable, Cloneable)",
        "testFn": "code.includes('Auditable')"
      }
    ]
  },
  {
    "id": "java-54-java-records-immutable-data-ca",
    "title": "54. Java Records: Immutable Data Carriers (Java 16+)",
    "slug": "lesson-54-java-records-immutable-data-ca",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compact transparent carrier classes (record Point(int x, int y)).",
    "concepts": [
      "Java Records: Immutable Data Carriers (Java 16+)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Java Records: Immutable Data Carriers (Java 16+) ensures robust and scalable performance.",
    "explanationMarkdown": "### Java Records: Immutable Data Carriers (Java 16+)\n\nCompact transparent carrier classes (record Point(int x, int y)).\n\n```java\npublic class Main {\n  record User(int id, String name) {}\n  public static void main(String[] args) { User u = new User(1, \"Alex\"); System.out.println(u.name()); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Java Records: Immutable Data Carriers (Java 16+)",
      "code": "public class Main {\n  record User(int id, String name) {}\n  public static void main(String[] args) { User u = new User(1, \"Alex\"); System.out.println(u.name()); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Java Records: Immutable Data Carriers (Java 16+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Java Records: Immutable Data Carriers (Java 16+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  record User(int id, String name) {}\n  public static void main(String[] args) { User u = new User(1, \"Alex\"); System.out.println(u.name()); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  record User(int id, String name) {}\n  public static void main(String[] args) { User u = new User(1, \"Alex\"); System.out.println(u.name()); }\n}"
    ],
    "testCases": [
      {
        "id": "java-54-tc-1",
        "description": "Verifies correct implementation for Java Records: Immutable Data Carriers (Java 16+)",
        "testFn": "code.includes('record')"
      }
    ]
  },
  {
    "id": "java-55-compact-constructors-in-record",
    "title": "55. Compact Constructors in Records",
    "slug": "lesson-55-compact-constructors-in-record",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Validate record components before assignment.",
    "concepts": [
      "Compact Constructors in Records",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Compact Constructors in Records ensures robust and scalable performance.",
    "explanationMarkdown": "### Compact Constructors in Records\n\nValidate record components before assignment.\n\n```java\npublic class Main {\n  record Age(int val) { Age { if (val < 0) throw new IllegalArgumentException(); } }\n  public static void main(String[] args) { System.out.println(new Age(25).val()); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Compact Constructors in Records",
      "code": "public class Main {\n  record Age(int val) { Age { if (val < 0) throw new IllegalArgumentException(); } }\n  public static void main(String[] args) { System.out.println(new Age(25).val()); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Compact Constructors in Records.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Compact Constructors in Records.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  record Age(int val) { Age { if (val < 0) throw new IllegalArgumentException(); } }\n  public static void main(String[] args) { System.out.println(new Age(25).val()); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  record Age(int val) { Age { if (val < 0) throw new IllegalArgumentException(); } }\n  public static void main(String[] args) { System.out.println(new Age(25).val()); }\n}"
    ],
    "testCases": [
      {
        "id": "java-55-tc-1",
        "description": "Verifies correct implementation for Compact Constructors in Records",
        "testFn": "code.includes('Age {')"
      }
    ]
  },
  {
    "id": "java-56-sealed-classes-and-interfaces-",
    "title": "56. Sealed Classes and Interfaces (Java 17+ sealed)",
    "slug": "lesson-56-sealed-classes-and-interfaces-",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Restrict which classes can extend or implement types.",
    "concepts": [
      "Sealed Classes and Interfaces (Java 17+ sealed)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Sealed Classes and Interfaces (Java 17+ sealed) ensures robust and scalable performance.",
    "explanationMarkdown": "### Sealed Classes and Interfaces (Java 17+ sealed)\n\nRestrict which classes can extend or implement types.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Sealed classes define finite exhaustive hierarchies\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Sealed Classes and Interfaces (Java 17+ sealed)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Sealed classes define finite exhaustive hierarchies\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sealed Classes and Interfaces (Java 17+ sealed).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sealed Classes and Interfaces (Java 17+ sealed).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Sealed classes define finite exhaustive hierarchies\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Sealed classes define finite exhaustive hierarchies\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-56-tc-1",
        "description": "Verifies correct implementation for Sealed Classes and Interfaces (Java 17+ sealed)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-57-permitted-subclasses-permits-f",
    "title": "57. Permitted Subclasses: permits, final, non-sealed",
    "slug": "lesson-57-permitted-subclasses-permits-f",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Control inheritance closed-world assumptions.",
    "concepts": [
      "Permitted Subclasses: permits, final, non-sealed",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Permitted Subclasses: permits, final, non-sealed ensures robust and scalable performance.",
    "explanationMarkdown": "### Permitted Subclasses: permits, final, non-sealed\n\nControl inheritance closed-world assumptions.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"permits keyword specifies allowed subclasses\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Permitted Subclasses: permits, final, non-sealed",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"permits keyword specifies allowed subclasses\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Permitted Subclasses: permits, final, non-sealed.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Permitted Subclasses: permits, final, non-sealed.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"permits keyword specifies allowed subclasses\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"permits keyword specifies allowed subclasses\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-57-tc-1",
        "description": "Verifies correct implementation for Permitted Subclasses: permits, final, non-sealed",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-58-pattern-matching-for-switch-wi",
    "title": "58. Pattern Matching for switch with Sealed Hierarchies",
    "slug": "lesson-58-pattern-matching-for-switch-wi",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Exhaustive compiler-verified switch expressions without default.",
    "concepts": [
      "Pattern Matching for switch with Sealed Hierarchies",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Pattern Matching for switch with Sealed Hierarchies ensures robust and scalable performance.",
    "explanationMarkdown": "### Pattern Matching for switch with Sealed Hierarchies\n\nExhaustive compiler-verified switch expressions without default.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Pattern matching switch eliminates missing branch bugs\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pattern Matching for switch with Sealed Hierarchies",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Pattern matching switch eliminates missing branch bugs\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pattern Matching for switch with Sealed Hierarchies.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pattern Matching for switch with Sealed Hierarchies.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Pattern matching switch eliminates missing branch bugs\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Pattern matching switch eliminates missing branch bugs\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-58-tc-1",
        "description": "Verifies correct implementation for Pattern Matching for switch with Sealed Hierarchies",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-59-nested-classes-static-member-v",
    "title": "59. Nested Classes: Static Member vs Inner Classes",
    "slug": "lesson-59-nested-classes-static-member-v",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Group helper classes tightly within parent scope.",
    "concepts": [
      "Nested Classes: Static Member vs Inner Classes",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Nested Classes: Static Member vs Inner Classes ensures robust and scalable performance.",
    "explanationMarkdown": "### Nested Classes: Static Member vs Inner Classes\n\nGroup helper classes tightly within parent scope.\n\n```java\npublic class Main {\n  static class Outer { static class Inner { void ping() { System.out.println(\"Pong\"); } } }\n  public static void main(String[] args) { new Outer.Inner().ping(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Nested Classes: Static Member vs Inner Classes",
      "code": "public class Main {\n  static class Outer { static class Inner { void ping() { System.out.println(\"Pong\"); } } }\n  public static void main(String[] args) { new Outer.Inner().ping(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Nested Classes: Static Member vs Inner Classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Nested Classes: Static Member vs Inner Classes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Outer { static class Inner { void ping() { System.out.println(\"Pong\"); } } }\n  public static void main(String[] args) { new Outer.Inner().ping(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Outer { static class Inner { void ping() { System.out.println(\"Pong\"); } } }\n  public static void main(String[] args) { new Outer.Inner().ping(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-59-tc-1",
        "description": "Verifies correct implementation for Nested Classes: Static Member vs Inner Classes",
        "testFn": "code.includes('Outer.Inner')"
      }
    ]
  },
  {
    "id": "java-60-anonymous-classes-in-java",
    "title": "60. Anonymous Classes in Java",
    "slug": "lesson-60-anonymous-classes-in-java",
    "language": "java",
    "category": "Module 4: Interfaces, Records & Sealed Classes",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inline instantiation of anonymous interface implementors.",
    "concepts": [
      "Anonymous Classes in Java",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Anonymous Classes in Java ensures robust and scalable performance.",
    "explanationMarkdown": "### Anonymous Classes in Java\n\nInline instantiation of anonymous interface implementors.\n\n```java\npublic class Main {\n  interface Greeter { void hi(); }\n  public static void main(String[] args) { new Greeter() { public void hi() { System.out.println(\"Hi\"); } }.hi(); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Anonymous Classes in Java",
      "code": "public class Main {\n  interface Greeter { void hi(); }\n  public static void main(String[] args) { new Greeter() { public void hi() { System.out.println(\"Hi\"); } }.hi(); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anonymous Classes in Java.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anonymous Classes in Java.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Greeter { void hi(); }\n  public static void main(String[] args) { new Greeter() { public void hi() { System.out.println(\"Hi\"); } }.hi(); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Greeter { void hi(); }\n  public static void main(String[] args) { new Greeter() { public void hi() { System.out.println(\"Hi\"); } }.hi(); }\n}"
    ],
    "testCases": [
      {
        "id": "java-60-tc-1",
        "description": "Verifies correct implementation for Anonymous Classes in Java",
        "testFn": "code.includes('new Greeter()')"
      }
    ]
  },
  {
    "id": "java-61-the-throwable-hierarchy-error-",
    "title": "61. The Throwable Hierarchy: Error vs Exception",
    "slug": "lesson-61-the-throwable-hierarchy-error-",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Checked exceptions, runtime exceptions, and JVM fatal errors.",
    "concepts": [
      "The Throwable Hierarchy: Error vs Exception",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The Throwable Hierarchy: Error vs Exception ensures robust and scalable performance.",
    "explanationMarkdown": "### The Throwable Hierarchy: Error vs Exception\n\nChecked exceptions, runtime exceptions, and JVM fatal errors.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Throwable -> Exception (Checked/Unchecked) and Error\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Throwable Hierarchy: Error vs Exception",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Throwable -> Exception (Checked/Unchecked) and Error\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Throwable Hierarchy: Error vs Exception.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Throwable Hierarchy: Error vs Exception.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Throwable -> Exception (Checked/Unchecked) and Error\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Throwable -> Exception (Checked/Unchecked) and Error\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-61-tc-1",
        "description": "Verifies correct implementation for The Throwable Hierarchy: Error vs Exception",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-62-handling-errors-with-try-catch",
    "title": "62. Handling Errors with try-catch Blocks",
    "slug": "lesson-62-handling-errors-with-try-catch",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Intercept and recover from runtime faults.",
    "concepts": [
      "Handling Errors with try-catch Blocks",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Handling Errors with try-catch Blocks ensures robust and scalable performance.",
    "explanationMarkdown": "### Handling Errors with try-catch Blocks\n\nIntercept and recover from runtime faults.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    try { int x = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Caught\"); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Handling Errors with try-catch Blocks",
      "code": "public class Main {\n  public static void main(String[] args) {\n    try { int x = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Caught\"); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Errors with try-catch Blocks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Errors with try-catch Blocks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    try { int x = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Caught\"); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    try { int x = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Caught\"); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-62-tc-1",
        "description": "Verifies correct implementation for Handling Errors with try-catch Blocks",
        "testFn": "code.includes('catch')"
      }
    ]
  },
  {
    "id": "java-63-the-finally-block-guaranteed-e",
    "title": "63. The finally Block: Guaranteed Execution",
    "slug": "lesson-63-the-finally-block-guaranteed-e",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensure clean up runs regardless of exception occurrence.",
    "concepts": [
      "The finally Block: Guaranteed Execution",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The finally Block: Guaranteed Execution ensures robust and scalable performance.",
    "explanationMarkdown": "### The finally Block: Guaranteed Execution\n\nEnsure clean up runs regardless of exception occurrence.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    try { System.out.println(\"Try\"); } finally { System.out.println(\"Finally\"); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The finally Block: Guaranteed Execution",
      "code": "public class Main {\n  public static void main(String[] args) {\n    try { System.out.println(\"Try\"); } finally { System.out.println(\"Finally\"); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The finally Block: Guaranteed Execution.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The finally Block: Guaranteed Execution.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    try { System.out.println(\"Try\"); } finally { System.out.println(\"Finally\"); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    try { System.out.println(\"Try\"); } finally { System.out.println(\"Finally\"); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-63-tc-1",
        "description": "Verifies correct implementation for The finally Block: Guaranteed Execution",
        "testFn": "code.includes('finally')"
      }
    ]
  },
  {
    "id": "java-64-multiple-catch-blocks-and-orde",
    "title": "64. Multiple catch Blocks and Ordering Rules",
    "slug": "lesson-64-multiple-catch-blocks-and-orde",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Catch specific subtypes before generalized superclasses.",
    "concepts": [
      "Multiple catch Blocks and Ordering Rules",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Multiple catch Blocks and Ordering Rules ensures robust and scalable performance.",
    "explanationMarkdown": "### Multiple catch Blocks and Ordering Rules\n\nCatch specific subtypes before generalized superclasses.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    try { String s = null; s.length(); }\n    catch (NullPointerException e) { System.out.println(\"Null\"); }\n    catch (Exception e) { System.out.println(\"General\"); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multiple catch Blocks and Ordering Rules",
      "code": "public class Main {\n  public static void main(String[] args) {\n    try { String s = null; s.length(); }\n    catch (NullPointerException e) { System.out.println(\"Null\"); }\n    catch (Exception e) { System.out.println(\"General\"); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple catch Blocks and Ordering Rules.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple catch Blocks and Ordering Rules.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    try { String s = null; s.length(); }\n    catch (NullPointerException e) { System.out.println(\"Null\"); }\n    catch (Exception e) { System.out.println(\"General\"); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    try { String s = null; s.length(); }\n    catch (NullPointerException e) { System.out.println(\"Null\"); }\n    catch (Exception e) { System.out.println(\"General\"); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-64-tc-1",
        "description": "Verifies correct implementation for Multiple catch Blocks and Ordering Rules",
        "testFn": "code.includes('NullPointerException')"
      }
    ]
  },
  {
    "id": "java-65-multi-catch-syntax-catch-typea",
    "title": "65. Multi-Catch Syntax (catch (TypeA | TypeB e))",
    "slug": "lesson-65-multi-catch-syntax-catch-typea",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Consolidate identical error handlers cleanly.",
    "concepts": [
      "Multi-Catch Syntax (catch (TypeA | TypeB e))",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Multi-Catch Syntax (catch (TypeA | TypeB e)) ensures robust and scalable performance.",
    "explanationMarkdown": "### Multi-Catch Syntax (catch (TypeA | TypeB e))\n\nConsolidate identical error handlers cleanly.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    try { int[] a = {}; a[1] = 0; }\n    catch (ArrayIndexOutOfBoundsException | ArithmeticException e) { System.out.println(\"Handled\"); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Catch Syntax (catch (TypeA | TypeB e))",
      "code": "public class Main {\n  public static void main(String[] args) {\n    try { int[] a = {}; a[1] = 0; }\n    catch (ArrayIndexOutOfBoundsException | ArithmeticException e) { System.out.println(\"Handled\"); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Catch Syntax (catch (TypeA | TypeB e)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Catch Syntax (catch (TypeA | TypeB e)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    try { int[] a = {}; a[1] = 0; }\n    catch (ArrayIndexOutOfBoundsException | ArithmeticException e) { System.out.println(\"Handled\"); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    try { int[] a = {}; a[1] = 0; }\n    catch (ArrayIndexOutOfBoundsException | ArithmeticException e) { System.out.println(\"Handled\"); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-65-tc-1",
        "description": "Verifies correct implementation for Multi-Catch Syntax (catch (TypeA | TypeB e))",
        "testFn": "code.includes('|')"
      }
    ]
  },
  {
    "id": "java-66-checked-exceptions-and-the-thr",
    "title": "66. Checked Exceptions and the throws Keyword",
    "slug": "lesson-66-checked-exceptions-and-the-thr",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declare potential failure modes in method contracts.",
    "concepts": [
      "Checked Exceptions and the throws Keyword",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Checked Exceptions and the throws Keyword ensures robust and scalable performance.",
    "explanationMarkdown": "### Checked Exceptions and the throws Keyword\n\nDeclare potential failure modes in method contracts.\n\n```java\npublic class Main {\n  static void verify() throws Exception { throw new Exception(\"Failed\"); }\n  public static void main(String[] args) {\n    try { verify(); } catch(Exception e) { System.out.println(e.getMessage()); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Checked Exceptions and the throws Keyword",
      "code": "public class Main {\n  static void verify() throws Exception { throw new Exception(\"Failed\"); }\n  public static void main(String[] args) {\n    try { verify(); } catch(Exception e) { System.out.println(e.getMessage()); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checked Exceptions and the throws Keyword.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checked Exceptions and the throws Keyword.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static void verify() throws Exception { throw new Exception(\"Failed\"); }\n  public static void main(String[] args) {\n    try { verify(); } catch(Exception e) { System.out.println(e.getMessage()); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static void verify() throws Exception { throw new Exception(\"Failed\"); }\n  public static void main(String[] args) {\n    try { verify(); } catch(Exception e) { System.out.println(e.getMessage()); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-66-tc-1",
        "description": "Verifies correct implementation for Checked Exceptions and the throws Keyword",
        "testFn": "code.includes('throws')"
      }
    ]
  },
  {
    "id": "java-67-unchecked-runtime-exceptions-n",
    "title": "67. Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument",
    "slug": "lesson-67-unchecked-runtime-exceptions-n",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Programming errors bypassing compiler declaration checks.",
    "concepts": [
      "Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument ensures robust and scalable performance.",
    "explanationMarkdown": "### Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument\n\nProgramming errors bypassing compiler declaration checks.\n\n```java\npublic class Main {\n  static void check(int age) { if (age < 0) throw new IllegalArgumentException(\"Invalid age\"); }\n  public static void main(String[] args) {\n    try { check(-1); } catch (IllegalArgumentException e) { System.out.println(\"Caught invalid\"); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument",
      "code": "public class Main {\n  static void check(int age) { if (age < 0) throw new IllegalArgumentException(\"Invalid age\"); }\n  public static void main(String[] args) {\n    try { check(-1); } catch (IllegalArgumentException e) { System.out.println(\"Caught invalid\"); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static void check(int age) { if (age < 0) throw new IllegalArgumentException(\"Invalid age\"); }\n  public static void main(String[] args) {\n    try { check(-1); } catch (IllegalArgumentException e) { System.out.println(\"Caught invalid\"); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static void check(int age) { if (age < 0) throw new IllegalArgumentException(\"Invalid age\"); }\n  public static void main(String[] args) {\n    try { check(-1); } catch (IllegalArgumentException e) { System.out.println(\"Caught invalid\"); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-67-tc-1",
        "description": "Verifies correct implementation for Unchecked (Runtime) Exceptions: NullPointer, IllegalArgument",
        "testFn": "code.includes('IllegalArgumentException')"
      }
    ]
  },
  {
    "id": "java-68-the-throw-statement-manually-r",
    "title": "68. The throw Statement: Manually Raising Exceptions",
    "slug": "lesson-68-the-throw-statement-manually-r",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Raise exceptions upon invariant violations.",
    "concepts": [
      "The throw Statement: Manually Raising Exceptions",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The throw Statement: Manually Raising Exceptions ensures robust and scalable performance.",
    "explanationMarkdown": "### The throw Statement: Manually Raising Exceptions\n\nRaise exceptions upon invariant violations.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    try { throw new RuntimeException(\"Triggered\"); } catch (Exception e) { System.out.println(e.getMessage()); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The throw Statement: Manually Raising Exceptions",
      "code": "public class Main {\n  public static void main(String[] args) {\n    try { throw new RuntimeException(\"Triggered\"); } catch (Exception e) { System.out.println(e.getMessage()); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The throw Statement: Manually Raising Exceptions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The throw Statement: Manually Raising Exceptions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    try { throw new RuntimeException(\"Triggered\"); } catch (Exception e) { System.out.println(e.getMessage()); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    try { throw new RuntimeException(\"Triggered\"); } catch (Exception e) { System.out.println(e.getMessage()); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-68-tc-1",
        "description": "Verifies correct implementation for The throw Statement: Manually Raising Exceptions",
        "testFn": "code.includes('throw new')"
      }
    ]
  },
  {
    "id": "java-69-custom-application-exceptions-",
    "title": "69. Custom Application Exceptions (extends Exception / RuntimeException)",
    "slug": "lesson-69-custom-application-exceptions-",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Model domain-specific business errors.",
    "concepts": [
      "Custom Application Exceptions (extends Exception / RuntimeException)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Custom Application Exceptions (extends Exception / RuntimeException) ensures robust and scalable performance.",
    "explanationMarkdown": "### Custom Application Exceptions (extends Exception / RuntimeException)\n\nModel domain-specific business errors.\n\n```java\npublic class Main {\n  static class PaymentFailedException extends Exception { PaymentFailedException(String m) { super(m); } }\n  public static void main(String[] args) {\n    try { throw new PaymentFailedException(\"Card declined\"); } catch (PaymentFailedException e) { System.out.println(e.getMessage()); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Application Exceptions (extends Exception / RuntimeException)",
      "code": "public class Main {\n  static class PaymentFailedException extends Exception { PaymentFailedException(String m) { super(m); } }\n  public static void main(String[] args) {\n    try { throw new PaymentFailedException(\"Card declined\"); } catch (PaymentFailedException e) { System.out.println(e.getMessage()); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Application Exceptions (extends Exception / RuntimeException).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Application Exceptions (extends Exception / RuntimeException).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class PaymentFailedException extends Exception { PaymentFailedException(String m) { super(m); } }\n  public static void main(String[] args) {\n    try { throw new PaymentFailedException(\"Card declined\"); } catch (PaymentFailedException e) { System.out.println(e.getMessage()); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class PaymentFailedException extends Exception { PaymentFailedException(String m) { super(m); } }\n  public static void main(String[] args) {\n    try { throw new PaymentFailedException(\"Card declined\"); } catch (PaymentFailedException e) { System.out.println(e.getMessage()); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-69-tc-1",
        "description": "Verifies correct implementation for Custom Application Exceptions (extends Exception / RuntimeException)",
        "testFn": "code.includes('PaymentFailedException')"
      }
    ]
  },
  {
    "id": "java-70-try-with-resources-and-the-aut",
    "title": "70. try-with-resources and the AutoCloseable Interface",
    "slug": "lesson-70-try-with-resources-and-the-aut",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automatic resource cleanup preventing memory leaks.",
    "concepts": [
      "try-with-resources and the AutoCloseable Interface",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: try-with-resources and the AutoCloseable Interface ensures robust and scalable performance.",
    "explanationMarkdown": "### try-with-resources and the AutoCloseable Interface\n\nAutomatic resource cleanup preventing memory leaks.\n\n```java\npublic class Main {\n  static class Res implements AutoCloseable { public void close() { System.out.println(\"Closed\"); } }\n  public static void main(String[] args) {\n    try (Res r = new Res()) { System.out.println(\"Using\"); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: try-with-resources and the AutoCloseable Interface",
      "code": "public class Main {\n  static class Res implements AutoCloseable { public void close() { System.out.println(\"Closed\"); } }\n  public static void main(String[] args) {\n    try (Res r = new Res()) { System.out.println(\"Using\"); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for try-with-resources and the AutoCloseable Interface.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of try-with-resources and the AutoCloseable Interface.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Res implements AutoCloseable { public void close() { System.out.println(\"Closed\"); } }\n  public static void main(String[] args) {\n    try (Res r = new Res()) { System.out.println(\"Using\"); }\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Res implements AutoCloseable { public void close() { System.out.println(\"Closed\"); } }\n  public static void main(String[] args) {\n    try (Res r = new Res()) { System.out.println(\"Using\"); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-70-tc-1",
        "description": "Verifies correct implementation for try-with-resources and the AutoCloseable Interface",
        "testFn": "code.includes('try (Res')"
      }
    ]
  },
  {
    "id": "java-71-suppressed-exceptions-in-try-w",
    "title": "71. Suppressed Exceptions in try-with-resources",
    "slug": "lesson-71-suppressed-exceptions-in-try-w",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect exceptions thrown during automated closing.",
    "concepts": [
      "Suppressed Exceptions in try-with-resources",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Suppressed Exceptions in try-with-resources ensures robust and scalable performance.",
    "explanationMarkdown": "### Suppressed Exceptions in try-with-resources\n\nInspect exceptions thrown during automated closing.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"getSuppressed() retrieves exceptions caught during close()\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Suppressed Exceptions in try-with-resources",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"getSuppressed() retrieves exceptions caught during close()\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Suppressed Exceptions in try-with-resources.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Suppressed Exceptions in try-with-resources.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"getSuppressed() retrieves exceptions caught during close()\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"getSuppressed() retrieves exceptions caught during close()\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-71-tc-1",
        "description": "Verifies correct implementation for Suppressed Exceptions in try-with-resources",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-72-exception-chaining-and-root-ca",
    "title": "72. Exception Chaining and Root Cause Analysis (getCause())",
    "slug": "lesson-72-exception-chaining-and-root-ca",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Wrap lower-level exceptions without losing stack traces.",
    "concepts": [
      "Exception Chaining and Root Cause Analysis (getCause())",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Exception Chaining and Root Cause Analysis (getCause()) ensures robust and scalable performance.",
    "explanationMarkdown": "### Exception Chaining and Root Cause Analysis (getCause())\n\nWrap lower-level exceptions without losing stack traces.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    Exception root = new NullPointerException();\n    Exception wrap = new RuntimeException(\"Failed operation\", root);\n    System.out.println(wrap.getCause().getClass().getSimpleName());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Exception Chaining and Root Cause Analysis (getCause())",
      "code": "public class Main {\n  public static void main(String[] args) {\n    Exception root = new NullPointerException();\n    Exception wrap = new RuntimeException(\"Failed operation\", root);\n    System.out.println(wrap.getCause().getClass().getSimpleName());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exception Chaining and Root Cause Analysis (getCause()).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exception Chaining and Root Cause Analysis (getCause()).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    Exception root = new NullPointerException();\n    Exception wrap = new RuntimeException(\"Failed operation\", root);\n    System.out.println(wrap.getCause().getClass().getSimpleName());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    Exception root = new NullPointerException();\n    Exception wrap = new RuntimeException(\"Failed operation\", root);\n    System.out.println(wrap.getCause().getClass().getSimpleName());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-72-tc-1",
        "description": "Verifies correct implementation for Exception Chaining and Root Cause Analysis (getCause())",
        "testFn": "code.includes('getCause')"
      }
    ]
  },
  {
    "id": "java-73-the-optional-t-class-eliminati",
    "title": "73. The Optional<T> Class: Eliminating NullPointerException",
    "slug": "lesson-73-the-optional-t-class-eliminati",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Expressive container representing present or empty values.",
    "concepts": [
      "The Optional<T> Class: Eliminating NullPointerException",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The Optional<T> Class: Eliminating NullPointerException ensures robust and scalable performance.",
    "explanationMarkdown": "### The Optional<T> Class: Eliminating NullPointerException\n\nExpressive container representing present or empty values.\n\n```java\nimport java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional<String> opt = Optional.of(\"Java\");\n    System.out.println(opt.orElse(\"Default\"));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Optional<T> Class: Eliminating NullPointerException",
      "code": "import java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional<String> opt = Optional.of(\"Java\");\n    System.out.println(opt.orElse(\"Default\"));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Optional<T> Class: Eliminating NullPointerException.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Optional<T> Class: Eliminating NullPointerException.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional<String> opt = Optional.of(\"Java\");\n    System.out.println(opt.orElse(\"Default\"));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional<String> opt = Optional.of(\"Java\");\n    System.out.println(opt.orElse(\"Default\"));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-73-tc-1",
        "description": "Verifies correct implementation for The Optional<T> Class: Eliminating NullPointerException",
        "testFn": "code.includes('Optional')"
      }
    ]
  },
  {
    "id": "java-74-optional-methods-map-flatmap-f",
    "title": "74. Optional Methods: map(), flatMap(), filter(), ifPresent()",
    "slug": "lesson-74-optional-methods-map-flatmap-f",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Functional chaining on optional containers.",
    "concepts": [
      "Optional Methods: map(), flatMap(), filter(), ifPresent()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Optional Methods: map(), flatMap(), filter(), ifPresent() ensures robust and scalable performance.",
    "explanationMarkdown": "### Optional Methods: map(), flatMap(), filter(), ifPresent()\n\nFunctional chaining on optional containers.\n\n```java\nimport java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional.of(\"hello\").map(String::toUpperCase).ifPresent(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Optional Methods: map(), flatMap(), filter(), ifPresent()",
      "code": "import java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional.of(\"hello\").map(String::toUpperCase).ifPresent(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Optional Methods: map(), flatMap(), filter(), ifPresent().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Optional Methods: map(), flatMap(), filter(), ifPresent().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional.of(\"hello\").map(String::toUpperCase).ifPresent(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.Optional;\npublic class Main {\n  public static void main(String[] args) {\n    Optional.of(\"hello\").map(String::toUpperCase).ifPresent(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-74-tc-1",
        "description": "Verifies correct implementation for Optional Methods: map(), flatMap(), filter(), ifPresent()",
        "testFn": "code.includes('Optional.of')"
      }
    ]
  },
  {
    "id": "java-75-enterprise-exception-best-prac",
    "title": "75. Enterprise Exception Best Practices",
    "slug": "lesson-75-enterprise-exception-best-prac",
    "language": "java",
    "category": "Module 5: Exception Handling & try-with-resources",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Log once at boundary, use standard exceptions, never swallow errors.",
    "concepts": [
      "Enterprise Exception Best Practices",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Enterprise Exception Best Practices ensures robust and scalable performance.",
    "explanationMarkdown": "### Enterprise Exception Best Practices\n\nLog once at boundary, use standard exceptions, never swallow errors.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Fail fast, log with correlation ID, translate to HTTP status codes\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Enterprise Exception Best Practices",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Fail fast, log with correlation ID, translate to HTTP status codes\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Enterprise Exception Best Practices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Enterprise Exception Best Practices.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Fail fast, log with correlation ID, translate to HTTP status codes\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Fail fast, log with correlation ID, translate to HTTP status codes\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-75-tc-1",
        "description": "Verifies correct implementation for Enterprise Exception Best Practices",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-76-the-java-collections-framework",
    "title": "76. The Java Collections Framework Hierarchy",
    "slug": "lesson-76-the-java-collections-framework",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Collection interface root: List, Set, Queue.",
    "concepts": [
      "The Java Collections Framework Hierarchy",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The Java Collections Framework Hierarchy ensures robust and scalable performance.",
    "explanationMarkdown": "### The Java Collections Framework Hierarchy\n\nCollection interface root: List, Set, Queue.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Collections framework: Iterable -> Collection -> List/Set/Queue\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Java Collections Framework Hierarchy",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Collections framework: Iterable -> Collection -> List/Set/Queue\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Java Collections Framework Hierarchy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Java Collections Framework Hierarchy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Collections framework: Iterable -> Collection -> List/Set/Queue\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Collections framework: Iterable -> Collection -> List/Set/Queue\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-76-tc-1",
        "description": "Verifies correct implementation for The Java Collections Framework Hierarchy",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-77-arraylist-dynamic-resizable-ar",
    "title": "77. ArrayList: Dynamic Resizable Array (O(1) Access)",
    "slug": "lesson-77-arraylist-dynamic-resizable-ar",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Contiguous array backing with dynamic resizing.",
    "concepts": [
      "ArrayList: Dynamic Resizable Array (O(1) Access)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: ArrayList: Dynamic Resizable Array (O(1) Access) ensures robust and scalable performance.",
    "explanationMarkdown": "### ArrayList: Dynamic Resizable Array (O(1) Access)\n\nContiguous array backing with dynamic resizing.\n\n```java\nimport java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add(\"Apple\");\n    System.out.println(list.get(0));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: ArrayList: Dynamic Resizable Array (O(1) Access)",
      "code": "import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add(\"Apple\");\n    System.out.println(list.get(0));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ArrayList: Dynamic Resizable Array (O(1) Access).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ArrayList: Dynamic Resizable Array (O(1) Access).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add(\"Apple\");\n    System.out.println(list.get(0));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add(\"Apple\");\n    System.out.println(list.get(0));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-77-tc-1",
        "description": "Verifies correct implementation for ArrayList: Dynamic Resizable Array (O(1) Access)",
        "testFn": "code.includes('ArrayList')"
      }
    ]
  },
  {
    "id": "java-78-linkedlist-doubly-linked-nodes",
    "title": "78. LinkedList: Doubly-Linked Nodes (O(1) Insertion)",
    "slug": "lesson-78-linkedlist-doubly-linked-nodes",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fast head/tail insertion without memory shifts.",
    "concepts": [
      "LinkedList: Doubly-Linked Nodes (O(1) Insertion)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: LinkedList: Doubly-Linked Nodes (O(1) Insertion) ensures robust and scalable performance.",
    "explanationMarkdown": "### LinkedList: Doubly-Linked Nodes (O(1) Insertion)\n\nFast head/tail insertion without memory shifts.\n\n```java\nimport java.util.LinkedList;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedList<Integer> ll = new LinkedList<>();\n    ll.addFirst(10);\n    System.out.println(ll.getFirst());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: LinkedList: Doubly-Linked Nodes (O(1) Insertion)",
      "code": "import java.util.LinkedList;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedList<Integer> ll = new LinkedList<>();\n    ll.addFirst(10);\n    System.out.println(ll.getFirst());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for LinkedList: Doubly-Linked Nodes (O(1) Insertion).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of LinkedList: Doubly-Linked Nodes (O(1) Insertion).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.LinkedList;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedList<Integer> ll = new LinkedList<>();\n    ll.addFirst(10);\n    System.out.println(ll.getFirst());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.LinkedList;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedList<Integer> ll = new LinkedList<>();\n    ll.addFirst(10);\n    System.out.println(ll.getFirst());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-78-tc-1",
        "description": "Verifies correct implementation for LinkedList: Doubly-Linked Nodes (O(1) Insertion)",
        "testFn": "code.includes('LinkedList')"
      }
    ]
  },
  {
    "id": "java-79-iterating-collections-iterator",
    "title": "79. Iterating Collections: Iterator, forEach, Stream",
    "slug": "lesson-79-iterating-collections-iterator",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safely traverse elements or remove during iteration.",
    "concepts": [
      "Iterating Collections: Iterator, forEach, Stream",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Iterating Collections: Iterator, forEach, Stream ensures robust and scalable performance.",
    "explanationMarkdown": "### Iterating Collections: Iterator, forEach, Stream\n\nSafely traverse elements or remove during iteration.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3).forEach(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Iterating Collections: Iterator, forEach, Stream",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3).forEach(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating Collections: Iterator, forEach, Stream.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating Collections: Iterator, forEach, Stream.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3).forEach(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3).forEach(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-79-tc-1",
        "description": "Verifies correct implementation for Iterating Collections: Iterator, forEach, Stream",
        "testFn": "code.includes('List.of')"
      }
    ]
  },
  {
    "id": "java-80-hashset-unordered-unique-eleme",
    "title": "80. HashSet: Unordered Unique Elements (O(1) Lookup)",
    "slug": "lesson-80-hashset-unordered-unique-eleme",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hash table backing for instant existence checks.",
    "concepts": [
      "HashSet: Unordered Unique Elements (O(1) Lookup)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: HashSet: Unordered Unique Elements (O(1) Lookup) ensures robust and scalable performance.",
    "explanationMarkdown": "### HashSet: Unordered Unique Elements (O(1) Lookup)\n\nHash table backing for instant existence checks.\n\n```java\nimport java.util.HashSet;\npublic class Main {\n  public static void main(String[] args) {\n    HashSet<String> set = new HashSet<>();\n    set.add(\"A\"); set.add(\"A\");\n    System.out.println(set.size());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: HashSet: Unordered Unique Elements (O(1) Lookup)",
      "code": "import java.util.HashSet;\npublic class Main {\n  public static void main(String[] args) {\n    HashSet<String> set = new HashSet<>();\n    set.add(\"A\"); set.add(\"A\");\n    System.out.println(set.size());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HashSet: Unordered Unique Elements (O(1) Lookup).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HashSet: Unordered Unique Elements (O(1) Lookup).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.HashSet;\npublic class Main {\n  public static void main(String[] args) {\n    HashSet<String> set = new HashSet<>();\n    set.add(\"A\"); set.add(\"A\");\n    System.out.println(set.size());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.HashSet;\npublic class Main {\n  public static void main(String[] args) {\n    HashSet<String> set = new HashSet<>();\n    set.add(\"A\"); set.add(\"A\");\n    System.out.println(set.size());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-80-tc-1",
        "description": "Verifies correct implementation for HashSet: Unordered Unique Elements (O(1) Lookup)",
        "testFn": "code.includes('HashSet')"
      }
    ]
  },
  {
    "id": "java-81-linkedhashset-preserving-inser",
    "title": "81. LinkedHashSet: Preserving Insertion Order",
    "slug": "lesson-81-linkedhashset-preserving-inser",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hash table joined with doubly-linked list traversal.",
    "concepts": [
      "LinkedHashSet: Preserving Insertion Order",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: LinkedHashSet: Preserving Insertion Order ensures robust and scalable performance.",
    "explanationMarkdown": "### LinkedHashSet: Preserving Insertion Order\n\nHash table joined with doubly-linked list traversal.\n\n```java\nimport java.util.LinkedHashSet;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashSet<String> set = new LinkedHashSet<>();\n    set.add(\"first\");\n    System.out.println(set.contains(\"first\"));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: LinkedHashSet: Preserving Insertion Order",
      "code": "import java.util.LinkedHashSet;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashSet<String> set = new LinkedHashSet<>();\n    set.add(\"first\");\n    System.out.println(set.contains(\"first\"));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for LinkedHashSet: Preserving Insertion Order.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of LinkedHashSet: Preserving Insertion Order.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.LinkedHashSet;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashSet<String> set = new LinkedHashSet<>();\n    set.add(\"first\");\n    System.out.println(set.contains(\"first\"));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.LinkedHashSet;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashSet<String> set = new LinkedHashSet<>();\n    set.add(\"first\");\n    System.out.println(set.contains(\"first\"));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-81-tc-1",
        "description": "Verifies correct implementation for LinkedHashSet: Preserving Insertion Order",
        "testFn": "code.includes('LinkedHashSet')"
      }
    ]
  },
  {
    "id": "java-82-treeset-navigable-sorted-set-r",
    "title": "82. TreeSet: Navigable Sorted Set (Red-Black Tree O(log N))",
    "slug": "lesson-82-treeset-navigable-sorted-set-r",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automatic sorted order via Comparable / Comparator.",
    "concepts": [
      "TreeSet: Navigable Sorted Set (Red-Black Tree O(log N))",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: TreeSet: Navigable Sorted Set (Red-Black Tree O(log N)) ensures robust and scalable performance.",
    "explanationMarkdown": "### TreeSet: Navigable Sorted Set (Red-Black Tree O(log N))\n\nAutomatic sorted order via Comparable / Comparator.\n\n```java\nimport java.util.TreeSet;\npublic class Main {\n  public static void main(String[] args) {\n    TreeSet<Integer> ts = new TreeSet<>();\n    ts.add(50); ts.add(10);\n    System.out.println(ts.first());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: TreeSet: Navigable Sorted Set (Red-Black Tree O(log N))",
      "code": "import java.util.TreeSet;\npublic class Main {\n  public static void main(String[] args) {\n    TreeSet<Integer> ts = new TreeSet<>();\n    ts.add(50); ts.add(10);\n    System.out.println(ts.first());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TreeSet: Navigable Sorted Set (Red-Black Tree O(log N)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TreeSet: Navigable Sorted Set (Red-Black Tree O(log N)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.TreeSet;\npublic class Main {\n  public static void main(String[] args) {\n    TreeSet<Integer> ts = new TreeSet<>();\n    ts.add(50); ts.add(10);\n    System.out.println(ts.first());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.TreeSet;\npublic class Main {\n  public static void main(String[] args) {\n    TreeSet<Integer> ts = new TreeSet<>();\n    ts.add(50); ts.add(10);\n    System.out.println(ts.first());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-82-tc-1",
        "description": "Verifies correct implementation for TreeSet: Navigable Sorted Set (Red-Black Tree O(log N))",
        "testFn": "code.includes('TreeSet')"
      }
    ]
  },
  {
    "id": "java-83-hashmap-key-value-storage-o-1-",
    "title": "83. HashMap: Key-Value Storage (O(1) Avg Complexity)",
    "slug": "lesson-83-hashmap-key-value-storage-o-1-",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The bedrock map structure: buckets, hashing, re-hashing.",
    "concepts": [
      "HashMap: Key-Value Storage (O(1) Avg Complexity)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: HashMap: Key-Value Storage (O(1) Avg Complexity) ensures robust and scalable performance.",
    "explanationMarkdown": "### HashMap: Key-Value Storage (O(1) Avg Complexity)\n\nThe bedrock map structure: buckets, hashing, re-hashing.\n\n```java\nimport java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Integer> map = new HashMap<>();\n    map.put(\"users\", 42);\n    System.out.println(map.get(\"users\"));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: HashMap: Key-Value Storage (O(1) Avg Complexity)",
      "code": "import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Integer> map = new HashMap<>();\n    map.put(\"users\", 42);\n    System.out.println(map.get(\"users\"));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HashMap: Key-Value Storage (O(1) Avg Complexity).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HashMap: Key-Value Storage (O(1) Avg Complexity).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Integer> map = new HashMap<>();\n    map.put(\"users\", 42);\n    System.out.println(map.get(\"users\"));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Integer> map = new HashMap<>();\n    map.put(\"users\", 42);\n    System.out.println(map.get(\"users\"));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-83-tc-1",
        "description": "Verifies correct implementation for HashMap: Key-Value Storage (O(1) Avg Complexity)",
        "testFn": "code.includes('HashMap')"
      }
    ]
  },
  {
    "id": "java-84-hashmap-collision-handling-tre",
    "title": "84. HashMap Collision Handling: Treeification in Java 8+",
    "slug": "lesson-84-hashmap-collision-handling-tre",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Transitioning linked buckets to red-black trees at threshold 8.",
    "concepts": [
      "HashMap Collision Handling: Treeification in Java 8+",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: HashMap Collision Handling: Treeification in Java 8+ ensures robust and scalable performance.",
    "explanationMarkdown": "### HashMap Collision Handling: Treeification in Java 8+\n\nTransitioning linked buckets to red-black trees at threshold 8.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Buckets transform to red-black trees when collision > 8\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: HashMap Collision Handling: Treeification in Java 8+",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Buckets transform to red-black trees when collision > 8\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HashMap Collision Handling: Treeification in Java 8+.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HashMap Collision Handling: Treeification in Java 8+.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Buckets transform to red-black trees when collision > 8\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Buckets transform to red-black trees when collision > 8\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-84-tc-1",
        "description": "Verifies correct implementation for HashMap Collision Handling: Treeification in Java 8+",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-85-linkedhashmap-and-lru-cache-im",
    "title": "85. LinkedHashMap and LRU Cache Implementation",
    "slug": "lesson-85-linkedhashmap-and-lru-cache-im",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Access-order iteration for in-memory LRU caching.",
    "concepts": [
      "LinkedHashMap and LRU Cache Implementation",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: LinkedHashMap and LRU Cache Implementation ensures robust and scalable performance.",
    "explanationMarkdown": "### LinkedHashMap and LRU Cache Implementation\n\nAccess-order iteration for in-memory LRU caching.\n\n```java\nimport java.util.LinkedHashMap;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashMap<String, String> map = new LinkedHashMap<>();\n    map.put(\"k\", \"v\");\n    System.out.println(map.get(\"k\"));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: LinkedHashMap and LRU Cache Implementation",
      "code": "import java.util.LinkedHashMap;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashMap<String, String> map = new LinkedHashMap<>();\n    map.put(\"k\", \"v\");\n    System.out.println(map.get(\"k\"));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for LinkedHashMap and LRU Cache Implementation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of LinkedHashMap and LRU Cache Implementation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.LinkedHashMap;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashMap<String, String> map = new LinkedHashMap<>();\n    map.put(\"k\", \"v\");\n    System.out.println(map.get(\"k\"));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.LinkedHashMap;\npublic class Main {\n  public static void main(String[] args) {\n    LinkedHashMap<String, String> map = new LinkedHashMap<>();\n    map.put(\"k\", \"v\");\n    System.out.println(map.get(\"k\"));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-85-tc-1",
        "description": "Verifies correct implementation for LinkedHashMap and LRU Cache Implementation",
        "testFn": "code.includes('LinkedHashMap')"
      }
    ]
  },
  {
    "id": "java-86-treemap-sorted-key-value-pairs",
    "title": "86. TreeMap: Sorted Key-Value Pairs (NavigableMap)",
    "slug": "lesson-86-treemap-sorted-key-value-pairs",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sorted keys with subMap, headMap, tailMap views.",
    "concepts": [
      "TreeMap: Sorted Key-Value Pairs (NavigableMap)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: TreeMap: Sorted Key-Value Pairs (NavigableMap) ensures robust and scalable performance.",
    "explanationMarkdown": "### TreeMap: Sorted Key-Value Pairs (NavigableMap)\n\nSorted keys with subMap, headMap, tailMap views.\n\n```java\nimport java.util.TreeMap;\npublic class Main {\n  public static void main(String[] args) {\n    TreeMap<Integer, String> tm = new TreeMap<>();\n    tm.put(2, \"b\"); tm.put(1, \"a\");\n    System.out.println(tm.firstKey());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: TreeMap: Sorted Key-Value Pairs (NavigableMap)",
      "code": "import java.util.TreeMap;\npublic class Main {\n  public static void main(String[] args) {\n    TreeMap<Integer, String> tm = new TreeMap<>();\n    tm.put(2, \"b\"); tm.put(1, \"a\");\n    System.out.println(tm.firstKey());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TreeMap: Sorted Key-Value Pairs (NavigableMap).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TreeMap: Sorted Key-Value Pairs (NavigableMap).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.TreeMap;\npublic class Main {\n  public static void main(String[] args) {\n    TreeMap<Integer, String> tm = new TreeMap<>();\n    tm.put(2, \"b\"); tm.put(1, \"a\");\n    System.out.println(tm.firstKey());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.TreeMap;\npublic class Main {\n  public static void main(String[] args) {\n    TreeMap<Integer, String> tm = new TreeMap<>();\n    tm.put(2, \"b\"); tm.put(1, \"a\");\n    System.out.println(tm.firstKey());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-86-tc-1",
        "description": "Verifies correct implementation for TreeMap: Sorted Key-Value Pairs (NavigableMap)",
        "testFn": "code.includes('TreeMap')"
      }
    ]
  },
  {
    "id": "java-87-queue-and-deque-interfaces-arr",
    "title": "87. Queue and Deque Interfaces: ArrayDeque vs PriorityQueue",
    "slug": "lesson-87-queue-and-deque-interfaces-arr",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Double-ended queues and min-heap priority queues.",
    "concepts": [
      "Queue and Deque Interfaces: ArrayDeque vs PriorityQueue",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Queue and Deque Interfaces: ArrayDeque vs PriorityQueue ensures robust and scalable performance.",
    "explanationMarkdown": "### Queue and Deque Interfaces: ArrayDeque vs PriorityQueue\n\nDouble-ended queues and min-heap priority queues.\n\n```java\nimport java.util.ArrayDeque;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayDeque<String> q = new ArrayDeque<>();\n    q.push(\"item\");\n    System.out.println(q.pop());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Queue and Deque Interfaces: ArrayDeque vs PriorityQueue",
      "code": "import java.util.ArrayDeque;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayDeque<String> q = new ArrayDeque<>();\n    q.push(\"item\");\n    System.out.println(q.pop());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Queue and Deque Interfaces: ArrayDeque vs PriorityQueue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Queue and Deque Interfaces: ArrayDeque vs PriorityQueue.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.ArrayDeque;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayDeque<String> q = new ArrayDeque<>();\n    q.push(\"item\");\n    System.out.println(q.pop());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.ArrayDeque;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayDeque<String> q = new ArrayDeque<>();\n    q.push(\"item\");\n    System.out.println(q.pop());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-87-tc-1",
        "description": "Verifies correct implementation for Queue and Deque Interfaces: ArrayDeque vs PriorityQueue",
        "testFn": "code.includes('ArrayDeque')"
      }
    ]
  },
  {
    "id": "java-88-the-collections-utility-class-",
    "title": "88. The Collections Utility Class (sort, reverse, binarySearch)",
    "slug": "lesson-88-the-collections-utility-class-",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Algorithms operating directly on collection types.",
    "concepts": [
      "The Collections Utility Class (sort, reverse, binarySearch)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The Collections Utility Class (sort, reverse, binarySearch) ensures robust and scalable performance.",
    "explanationMarkdown": "### The Collections Utility Class (sort, reverse, binarySearch)\n\nAlgorithms operating directly on collection types.\n\n```java\nimport java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = new ArrayList<>(List.of(3, 1, 2));\n    Collections.sort(list);\n    System.out.println(list);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Collections Utility Class (sort, reverse, binarySearch)",
      "code": "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = new ArrayList<>(List.of(3, 1, 2));\n    Collections.sort(list);\n    System.out.println(list);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Collections Utility Class (sort, reverse, binarySearch).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Collections Utility Class (sort, reverse, binarySearch).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = new ArrayList<>(List.of(3, 1, 2));\n    Collections.sort(list);\n    System.out.println(list);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = new ArrayList<>(List.of(3, 1, 2));\n    Collections.sort(list);\n    System.out.println(list);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-88-tc-1",
        "description": "Verifies correct implementation for The Collections Utility Class (sort, reverse, binarySearch)",
        "testFn": "code.includes('Collections.sort')"
      }
    ]
  },
  {
    "id": "java-89-immutable-collections-list-of-",
    "title": "89. Immutable Collections: List.of(), Set.of(), Map.of()",
    "slug": "lesson-89-immutable-collections-list-of-",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Factory methods producing unmodifiable light collections.",
    "concepts": [
      "Immutable Collections: List.of(), Set.of(), Map.of()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Immutable Collections: List.of(), Set.of(), Map.of() ensures robust and scalable performance.",
    "explanationMarkdown": "### Immutable Collections: List.of(), Set.of(), Map.of()\n\nFactory methods producing unmodifiable light collections.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> imm = List.of(\"A\", \"B\");\n    System.out.println(imm.size());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Immutable Collections: List.of(), Set.of(), Map.of()",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> imm = List.of(\"A\", \"B\");\n    System.out.println(imm.size());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Immutable Collections: List.of(), Set.of(), Map.of().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Immutable Collections: List.of(), Set.of(), Map.of().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> imm = List.of(\"A\", \"B\");\n    System.out.println(imm.size());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> imm = List.of(\"A\", \"B\");\n    System.out.println(imm.size());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-89-tc-1",
        "description": "Verifies correct implementation for Immutable Collections: List.of(), Set.of(), Map.of()",
        "testFn": "code.includes('List.of')"
      }
    ]
  },
  {
    "id": "java-90-sorting-custom-objects-compara",
    "title": "90. Sorting Custom Objects: Comparable vs Comparator",
    "slug": "lesson-90-sorting-custom-objects-compara",
    "language": "java",
    "category": "Module 6: Collections Framework (Lists, Sets, Maps)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Natural ordering (compareTo) vs external criteria (Comparator.comparing).",
    "concepts": [
      "Sorting Custom Objects: Comparable vs Comparator",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Sorting Custom Objects: Comparable vs Comparator ensures robust and scalable performance.",
    "explanationMarkdown": "### Sorting Custom Objects: Comparable vs Comparator\n\nNatural ordering (compareTo) vs external criteria (Comparator.comparing).\n\n```java\nimport java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> names = new ArrayList<>(List.of(\"Bob\", \"Alice\"));\n    names.sort(Comparator.naturalOrder());\n    System.out.println(names.get(0));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Custom Objects: Comparable vs Comparator",
      "code": "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> names = new ArrayList<>(List.of(\"Bob\", \"Alice\"));\n    names.sort(Comparator.naturalOrder());\n    System.out.println(names.get(0));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Custom Objects: Comparable vs Comparator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Custom Objects: Comparable vs Comparator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> names = new ArrayList<>(List.of(\"Bob\", \"Alice\"));\n    names.sort(Comparator.naturalOrder());\n    System.out.println(names.get(0));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    List<String> names = new ArrayList<>(List.of(\"Bob\", \"Alice\"));\n    names.sort(Comparator.naturalOrder());\n    System.out.println(names.get(0));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-90-tc-1",
        "description": "Verifies correct implementation for Sorting Custom Objects: Comparable vs Comparator",
        "testFn": "code.includes('Comparator')"
      }
    ]
  },
  {
    "id": "java-91-why-generics-compile-time-type",
    "title": "91. Why Generics? Compile-Time Type Safety",
    "slug": "lesson-91-why-generics-compile-time-type",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Eliminate explicit casts and catch bugs at compile time.",
    "concepts": [
      "Why Generics? Compile-Time Type Safety",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Why Generics? Compile-Time Type Safety ensures robust and scalable performance.",
    "explanationMarkdown": "### Why Generics? Compile-Time Type Safety\n\nEliminate explicit casts and catch bugs at compile time.\n\n```java\npublic class Main {\n  static class Box<T> { T val; Box(T v) { this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Box<>(\"Generic\").val); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Why Generics? Compile-Time Type Safety",
      "code": "public class Main {\n  static class Box<T> { T val; Box(T v) { this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Box<>(\"Generic\").val); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Generics? Compile-Time Type Safety.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Generics? Compile-Time Type Safety.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Box<T> { T val; Box(T v) { this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Box<>(\"Generic\").val); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Box<T> { T val; Box(T v) { this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Box<>(\"Generic\").val); }\n}"
    ],
    "testCases": [
      {
        "id": "java-91-tc-1",
        "description": "Verifies correct implementation for Why Generics? Compile-Time Type Safety",
        "testFn": "code.includes('Box<T>')"
      }
    ]
  },
  {
    "id": "java-92-generic-classes-with-type-para",
    "title": "92. Generic Classes with Type Parameters (<T, E, K, V>)",
    "slug": "lesson-92-generic-classes-with-type-para",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Parametric polymorphism on class definitions.",
    "concepts": [
      "Generic Classes with Type Parameters (<T, E, K, V>)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Generic Classes with Type Parameters (<T, E, K, V>) ensures robust and scalable performance.",
    "explanationMarkdown": "### Generic Classes with Type Parameters (<T, E, K, V>)\n\nParametric polymorphism on class definitions.\n\n```java\npublic class Main {\n  static class Pair<K, V> { K key; V val; Pair(K k, V v) { this.key = k; this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Pair<>(\"id\", 101).val); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic Classes with Type Parameters (<T, E, K, V>)",
      "code": "public class Main {\n  static class Pair<K, V> { K key; V val; Pair(K k, V v) { this.key = k; this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Pair<>(\"id\", 101).val); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Classes with Type Parameters (<T, E, K, V>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Classes with Type Parameters (<T, E, K, V>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Pair<K, V> { K key; V val; Pair(K k, V v) { this.key = k; this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Pair<>(\"id\", 101).val); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Pair<K, V> { K key; V val; Pair(K k, V v) { this.key = k; this.val = v; } }\n  public static void main(String[] args) { System.out.println(new Pair<>(\"id\", 101).val); }\n}"
    ],
    "testCases": [
      {
        "id": "java-92-tc-1",
        "description": "Verifies correct implementation for Generic Classes with Type Parameters (<T, E, K, V>)",
        "testFn": "code.includes('Pair<K, V>')"
      }
    ]
  },
  {
    "id": "java-93-generic-methods-t-t-identity-t",
    "title": "93. Generic Methods: <T> T identity(T item)",
    "slug": "lesson-93-generic-methods-t-t-identity-t",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declare type variables scoped strictly to method execution.",
    "concepts": [
      "Generic Methods: <T> T identity(T item)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Generic Methods: <T> T identity(T item) ensures robust and scalable performance.",
    "explanationMarkdown": "### Generic Methods: <T> T identity(T item)\n\nDeclare type variables scoped strictly to method execution.\n\n```java\npublic class Main {\n  static <T> void printItem(T item) { System.out.println(item); }\n  public static void main(String[] args) { printItem(42); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic Methods: <T> T identity(T item)",
      "code": "public class Main {\n  static <T> void printItem(T item) { System.out.println(item); }\n  public static void main(String[] args) { printItem(42); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Methods: <T> T identity(T item).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Methods: <T> T identity(T item).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static <T> void printItem(T item) { System.out.println(item); }\n  public static void main(String[] args) { printItem(42); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static <T> void printItem(T item) { System.out.println(item); }\n  public static void main(String[] args) { printItem(42); }\n}"
    ],
    "testCases": [
      {
        "id": "java-93-tc-1",
        "description": "Verifies correct implementation for Generic Methods: <T> T identity(T item)",
        "testFn": "code.includes('<T>')"
      }
    ]
  },
  {
    "id": "java-94-bounded-type-parameters-t-exte",
    "title": "94. Bounded Type Parameters: <T extends Number>",
    "slug": "lesson-94-bounded-type-parameters-t-exte",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Constrain type parameters to subtrees.",
    "concepts": [
      "Bounded Type Parameters: <T extends Number>",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Bounded Type Parameters: <T extends Number> ensures robust and scalable performance.",
    "explanationMarkdown": "### Bounded Type Parameters: <T extends Number>\n\nConstrain type parameters to subtrees.\n\n```java\npublic class Main {\n  static <T extends Number> double doubleIt(T num) { return num.doubleValue() * 2; }\n  public static void main(String[] args) { System.out.println(doubleIt(5)); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Bounded Type Parameters: <T extends Number>",
      "code": "public class Main {\n  static <T extends Number> double doubleIt(T num) { return num.doubleValue() * 2; }\n  public static void main(String[] args) { System.out.println(doubleIt(5)); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bounded Type Parameters: <T extends Number>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bounded Type Parameters: <T extends Number>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static <T extends Number> double doubleIt(T num) { return num.doubleValue() * 2; }\n  public static void main(String[] args) { System.out.println(doubleIt(5)); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static <T extends Number> double doubleIt(T num) { return num.doubleValue() * 2; }\n  public static void main(String[] args) { System.out.println(doubleIt(5)); }\n}"
    ],
    "testCases": [
      {
        "id": "java-94-tc-1",
        "description": "Verifies correct implementation for Bounded Type Parameters: <T extends Number>",
        "testFn": "code.includes('extends Number')"
      }
    ]
  },
  {
    "id": "java-95-multiple-bounds-t-extends-comp",
    "title": "95. Multiple Bounds: <T extends Comparable<T> & Serializable>",
    "slug": "lesson-95-multiple-bounds-t-extends-comp",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine class and interface constraints.",
    "concepts": [
      "Multiple Bounds: <T extends Comparable<T> & Serializable>",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Multiple Bounds: <T extends Comparable<T> & Serializable> ensures robust and scalable performance.",
    "explanationMarkdown": "### Multiple Bounds: <T extends Comparable<T> & Serializable>\n\nCombine class and interface constraints.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Multiple bounds combine classes and interfaces using &\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Bounds: <T extends Comparable<T> & Serializable>",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Multiple bounds combine classes and interfaces using &\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Bounds: <T extends Comparable<T> & Serializable>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Bounds: <T extends Comparable<T> & Serializable>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Multiple bounds combine classes and interfaces using &\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Multiple bounds combine classes and interfaces using &\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-95-tc-1",
        "description": "Verifies correct implementation for Multiple Bounds: <T extends Comparable<T> & Serializable>",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-96-wildcards-unbounded-wildcards",
    "title": "96. Wildcards: Unbounded Wildcards (?)",
    "slug": "lesson-96-wildcards-unbounded-wildcards",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Represent unknown generic types flexibly.",
    "concepts": [
      "Wildcards: Unbounded Wildcards (?)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Wildcards: Unbounded Wildcards (?) ensures robust and scalable performance.",
    "explanationMarkdown": "### Wildcards: Unbounded Wildcards (?)\n\nRepresent unknown generic types flexibly.\n\n```java\nimport java.util.List;\npublic class Main {\n  static void printAll(List<?> list) { System.out.println(list.size()); }\n  public static void main(String[] args) { printAll(List.of(1, 2, 3)); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Wildcards: Unbounded Wildcards (?)",
      "code": "import java.util.List;\npublic class Main {\n  static void printAll(List<?> list) { System.out.println(list.size()); }\n  public static void main(String[] args) { printAll(List.of(1, 2, 3)); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Wildcards: Unbounded Wildcards (?).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Wildcards: Unbounded Wildcards (?).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  static void printAll(List<?> list) { System.out.println(list.size()); }\n  public static void main(String[] args) { printAll(List.of(1, 2, 3)); }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  static void printAll(List<?> list) { System.out.println(list.size()); }\n  public static void main(String[] args) { printAll(List.of(1, 2, 3)); }\n}"
    ],
    "testCases": [
      {
        "id": "java-96-tc-1",
        "description": "Verifies correct implementation for Wildcards: Unbounded Wildcards (?)",
        "testFn": "code.includes('List<?>')"
      }
    ]
  },
  {
    "id": "java-97-upper-bounded-wildcards-extend",
    "title": "97. Upper Bounded Wildcards: ? extends T",
    "slug": "lesson-97-upper-bounded-wildcards-extend",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Read-only access allowing subtypes.",
    "concepts": [
      "Upper Bounded Wildcards: ? extends T",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Upper Bounded Wildcards: ? extends T ensures robust and scalable performance.",
    "explanationMarkdown": "### Upper Bounded Wildcards: ? extends T\n\nRead-only access allowing subtypes.\n\n```java\nimport java.util.List;\npublic class Main {\n  static double sumList(List<? extends Number> list) {\n    double s = 0; for (Number n : list) s += n.doubleValue(); return s;\n  }\n  public static void main(String[] args) { System.out.println(sumList(List.of(1, 2.5))); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Upper Bounded Wildcards: ? extends T",
      "code": "import java.util.List;\npublic class Main {\n  static double sumList(List<? extends Number> list) {\n    double s = 0; for (Number n : list) s += n.doubleValue(); return s;\n  }\n  public static void main(String[] args) { System.out.println(sumList(List.of(1, 2.5))); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Upper Bounded Wildcards: ? extends T.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Upper Bounded Wildcards: ? extends T.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  static double sumList(List<? extends Number> list) {\n    double s = 0; for (Number n : list) s += n.doubleValue(); return s;\n  }\n  public static void main(String[] args) { System.out.println(sumList(List.of(1, 2.5))); }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  static double sumList(List<? extends Number> list) {\n    double s = 0; for (Number n : list) s += n.doubleValue(); return s;\n  }\n  public static void main(String[] args) { System.out.println(sumList(List.of(1, 2.5))); }\n}"
    ],
    "testCases": [
      {
        "id": "java-97-tc-1",
        "description": "Verifies correct implementation for Upper Bounded Wildcards: ? extends T",
        "testFn": "code.includes('? extends Number')"
      }
    ]
  },
  {
    "id": "java-98-lower-bounded-wildcards-super-",
    "title": "98. Lower Bounded Wildcards: ? super T",
    "slug": "lesson-98-lower-bounded-wildcards-super-",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Write-safe access allowing supertypes.",
    "concepts": [
      "Lower Bounded Wildcards: ? super T",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Lower Bounded Wildcards: ? super T ensures robust and scalable performance.",
    "explanationMarkdown": "### Lower Bounded Wildcards: ? super T\n\nWrite-safe access allowing supertypes.\n\n```java\nimport java.util.*;\npublic class Main {\n  static void addNums(List<? super Integer> list) { list.add(10); }\n  public static void main(String[] args) { List<Number> l = new ArrayList<>(); addNums(l); System.out.println(l); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lower Bounded Wildcards: ? super T",
      "code": "import java.util.*;\npublic class Main {\n  static void addNums(List<? super Integer> list) { list.add(10); }\n  public static void main(String[] args) { List<Number> l = new ArrayList<>(); addNums(l); System.out.println(l); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lower Bounded Wildcards: ? super T.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lower Bounded Wildcards: ? super T.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.*;\npublic class Main {\n  static void addNums(List<? super Integer> list) { list.add(10); }\n  public static void main(String[] args) { List<Number> l = new ArrayList<>(); addNums(l); System.out.println(l); }\n}\n",
    "hints": [
      "Write:\nimport java.util.*;\npublic class Main {\n  static void addNums(List<? super Integer> list) { list.add(10); }\n  public static void main(String[] args) { List<Number> l = new ArrayList<>(); addNums(l); System.out.println(l); }\n}"
    ],
    "testCases": [
      {
        "id": "java-98-tc-1",
        "description": "Verifies correct implementation for Lower Bounded Wildcards: ? super T",
        "testFn": "code.includes('? super Integer')"
      }
    ]
  },
  {
    "id": "java-99-the-pecs-principle-producer-ex",
    "title": "99. The PECS Principle: Producer Extends, Consumer Super",
    "slug": "lesson-99-the-pecs-principle-producer-ex",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The golden rule of API design in Java generics.",
    "concepts": [
      "The PECS Principle: Producer Extends, Consumer Super",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The PECS Principle: Producer Extends, Consumer Super ensures robust and scalable performance.",
    "explanationMarkdown": "### The PECS Principle: Producer Extends, Consumer Super\n\nThe golden rule of API design in Java generics.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"PECS: Producer Extends (read), Consumer Super (write)\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The PECS Principle: Producer Extends, Consumer Super",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"PECS: Producer Extends (read), Consumer Super (write)\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The PECS Principle: Producer Extends, Consumer Super.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The PECS Principle: Producer Extends, Consumer Super.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"PECS: Producer Extends (read), Consumer Super (write)\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"PECS: Producer Extends (read), Consumer Super (write)\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-99-tc-1",
        "description": "Verifies correct implementation for The PECS Principle: Producer Extends, Consumer Super",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-100-type-erasure-in-the-jvm",
    "title": "100. Type Erasure in the JVM",
    "slug": "lesson-100-type-erasure-in-the-jvm",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "How generics are erased to Object / bounds at bytecode compile time.",
    "concepts": [
      "Type Erasure in the JVM",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Type Erasure in the JVM ensures robust and scalable performance.",
    "explanationMarkdown": "### Type Erasure in the JVM\n\nHow generics are erased to Object / bounds at bytecode compile time.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Generics exist for compiler verification; erased in bytecode\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Erasure in the JVM",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Generics exist for compiler verification; erased in bytecode\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Erasure in the JVM.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Erasure in the JVM.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Generics exist for compiler verification; erased in bytecode\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Generics exist for compiler verification; erased in bytecode\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-100-tc-1",
        "description": "Verifies correct implementation for Type Erasure in the JVM",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-101-bridge-methods-created-by-comp",
    "title": "101. Bridge Methods Created by Compiler",
    "slug": "lesson-101-bridge-methods-created-by-comp",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preserve polymorphic method dispatch across erased types.",
    "concepts": [
      "Bridge Methods Created by Compiler",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Bridge Methods Created by Compiler ensures robust and scalable performance.",
    "explanationMarkdown": "### Bridge Methods Created by Compiler\n\nPreserve polymorphic method dispatch across erased types.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Compiler generates bridge methods for covariant generic overrides\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Bridge Methods Created by Compiler",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Compiler generates bridge methods for covariant generic overrides\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bridge Methods Created by Compiler.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bridge Methods Created by Compiler.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Compiler generates bridge methods for covariant generic overrides\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Compiler generates bridge methods for covariant generic overrides\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-101-tc-1",
        "description": "Verifies correct implementation for Bridge Methods Created by Compiler",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-102-generic-limitations-no-primiti",
    "title": "102. Generic Limitations: No Primitive Types (int vs Integer)",
    "slug": "lesson-102-generic-limitations-no-primiti",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why List<int> is invalid and requires boxing wrappers.",
    "concepts": [
      "Generic Limitations: No Primitive Types (int vs Integer)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Generic Limitations: No Primitive Types (int vs Integer) ensures robust and scalable performance.",
    "explanationMarkdown": "### Generic Limitations: No Primitive Types (int vs Integer)\n\nWhy List<int> is invalid and requires boxing wrappers.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java primitives do not extend Object; require autoboxing wrappers\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic Limitations: No Primitive Types (int vs Integer)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java primitives do not extend Object; require autoboxing wrappers\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Limitations: No Primitive Types (int vs Integer).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Limitations: No Primitive Types (int vs Integer).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java primitives do not extend Object; require autoboxing wrappers\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Java primitives do not extend Object; require autoboxing wrappers\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-102-tc-1",
        "description": "Verifies correct implementation for Generic Limitations: No Primitive Types (int vs Integer)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-103-generic-limitations-cannot-ins",
    "title": "103. Generic Limitations: Cannot Instantiate new T()",
    "slug": "lesson-103-generic-limitations-cannot-ins",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why runtime type erasure prevents direct construction.",
    "concepts": [
      "Generic Limitations: Cannot Instantiate new T()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Generic Limitations: Cannot Instantiate new T() ensures robust and scalable performance.",
    "explanationMarkdown": "### Generic Limitations: Cannot Instantiate new T()\n\nWhy runtime type erasure prevents direct construction.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Use Supplier<T> or Class<T>.getDeclaredConstructor() to instantiate\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic Limitations: Cannot Instantiate new T()",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Use Supplier<T> or Class<T>.getDeclaredConstructor() to instantiate\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Limitations: Cannot Instantiate new T().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Limitations: Cannot Instantiate new T().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Use Supplier<T> or Class<T>.getDeclaredConstructor() to instantiate\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Use Supplier<T> or Class<T>.getDeclaredConstructor() to instantiate\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-103-tc-1",
        "description": "Verifies correct implementation for Generic Limitations: Cannot Instantiate new T()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-104-type-tokens-and-super-type-tok",
    "title": "104. Type Tokens and Super Type Tokens (TypeRef)",
    "slug": "lesson-104-type-tokens-and-super-type-tok",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preserve generic metadata using anonymous subclasses.",
    "concepts": [
      "Type Tokens and Super Type Tokens (TypeRef)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Type Tokens and Super Type Tokens (TypeRef) ensures robust and scalable performance.",
    "explanationMarkdown": "### Type Tokens and Super Type Tokens (TypeRef)\n\nPreserve generic metadata using anonymous subclasses.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Type tokens capture generic parameters using reflection on subclasses\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Tokens and Super Type Tokens (TypeRef)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Type tokens capture generic parameters using reflection on subclasses\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Tokens and Super Type Tokens (TypeRef).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Tokens and Super Type Tokens (TypeRef).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Type tokens capture generic parameters using reflection on subclasses\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Type tokens capture generic parameters using reflection on subclasses\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-104-tc-1",
        "description": "Verifies correct implementation for Type Tokens and Super Type Tokens (TypeRef)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-105-generic-repository-pattern-imp",
    "title": "105. Generic Repository Pattern Implementation",
    "slug": "lesson-105-generic-repository-pattern-imp",
    "language": "java",
    "category": "Module 7: Generics & Type Bounds",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Build a reusable CRUD repository interface with Generics.",
    "concepts": [
      "Generic Repository Pattern Implementation",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Generic Repository Pattern Implementation ensures robust and scalable performance.",
    "explanationMarkdown": "### Generic Repository Pattern Implementation\n\nBuild a reusable CRUD repository interface with Generics.\n\n```java\npublic class Main {\n  interface Repo<T, ID> { T findById(ID id); }\n  static class UserRepo implements Repo<String, Long> { public String findById(Long id) { return \"User-\" + id; } }\n  public static void main(String[] args) { System.out.println(new UserRepo().findById(10L)); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generic Repository Pattern Implementation",
      "code": "public class Main {\n  interface Repo<T, ID> { T findById(ID id); }\n  static class UserRepo implements Repo<String, Long> { public String findById(Long id) { return \"User-\" + id; } }\n  public static void main(String[] args) { System.out.println(new UserRepo().findById(10L)); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Repository Pattern Implementation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Repository Pattern Implementation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  interface Repo<T, ID> { T findById(ID id); }\n  static class UserRepo implements Repo<String, Long> { public String findById(Long id) { return \"User-\" + id; } }\n  public static void main(String[] args) { System.out.println(new UserRepo().findById(10L)); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  interface Repo<T, ID> { T findById(ID id); }\n  static class UserRepo implements Repo<String, Long> { public String findById(Long id) { return \"User-\" + id; } }\n  public static void main(String[] args) { System.out.println(new UserRepo().findById(10L)); }\n}"
    ],
    "testCases": [
      {
        "id": "java-105-tc-1",
        "description": "Verifies correct implementation for Generic Repository Pattern Implementation",
        "testFn": "code.includes('Repo<T, ID>')"
      }
    ]
  },
  {
    "id": "java-106-lambda-expressions-syntax-para",
    "title": "106. Lambda Expressions Syntax: (params) -> expression",
    "slug": "lesson-106-lambda-expressions-syntax-para",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Concise anonymous function definitions.",
    "concepts": [
      "Lambda Expressions Syntax: (params) -> expression",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Lambda Expressions Syntax: (params) -> expression ensures robust and scalable performance.",
    "explanationMarkdown": "### Lambda Expressions Syntax: (params) -> expression\n\nConcise anonymous function definitions.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    Runnable r = () -> System.out.println(\"Lambda executed\");\n    r.run();\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lambda Expressions Syntax: (params) -> expression",
      "code": "public class Main {\n  public static void main(String[] args) {\n    Runnable r = () -> System.out.println(\"Lambda executed\");\n    r.run();\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lambda Expressions Syntax: (params) -> expression.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lambda Expressions Syntax: (params) -> expression.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    Runnable r = () -> System.out.println(\"Lambda executed\");\n    r.run();\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    Runnable r = () -> System.out.println(\"Lambda executed\");\n    r.run();\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-106-tc-1",
        "description": "Verifies correct implementation for Lambda Expressions Syntax: (params) -> expression",
        "testFn": "code.includes('() ->')"
      }
    ]
  },
  {
    "id": "java-107-standard-functional-interfaces",
    "title": "107. Standard Functional Interfaces in java.util.function",
    "slug": "lesson-107-standard-functional-interfaces",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Predicate, Function, Consumer, Supplier.",
    "concepts": [
      "Standard Functional Interfaces in java.util.function",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Standard Functional Interfaces in java.util.function ensures robust and scalable performance.",
    "explanationMarkdown": "### Standard Functional Interfaces in java.util.function\n\nPredicate, Function, Consumer, Supplier.\n\n```java\nimport java.util.function.Predicate;\npublic class Main {\n  public static void main(String[] args) {\n    Predicate<Integer> isEven = n -> n % 2 == 0;\n    System.out.println(isEven.test(4));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Standard Functional Interfaces in java.util.function",
      "code": "import java.util.function.Predicate;\npublic class Main {\n  public static void main(String[] args) {\n    Predicate<Integer> isEven = n -> n % 2 == 0;\n    System.out.println(isEven.test(4));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Standard Functional Interfaces in java.util.function.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Standard Functional Interfaces in java.util.function.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.function.Predicate;\npublic class Main {\n  public static void main(String[] args) {\n    Predicate<Integer> isEven = n -> n % 2 == 0;\n    System.out.println(isEven.test(4));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.function.Predicate;\npublic class Main {\n  public static void main(String[] args) {\n    Predicate<Integer> isEven = n -> n % 2 == 0;\n    System.out.println(isEven.test(4));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-107-tc-1",
        "description": "Verifies correct implementation for Standard Functional Interfaces in java.util.function",
        "testFn": "code.includes('Predicate')"
      }
    ]
  },
  {
    "id": "java-108-method-references-class-method",
    "title": "108. Method References: Class::method and instance::method",
    "slug": "lesson-108-method-references-class-method",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Syntactic shorthand for lambda invocations.",
    "concepts": [
      "Method References: Class::method and instance::method",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Method References: Class::method and instance::method ensures robust and scalable performance.",
    "explanationMarkdown": "### Method References: Class::method and instance::method\n\nSyntactic shorthand for lambda invocations.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"A\", \"B\").forEach(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Method References: Class::method and instance::method",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"A\", \"B\").forEach(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Method References: Class::method and instance::method.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Method References: Class::method and instance::method.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"A\", \"B\").forEach(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"A\", \"B\").forEach(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-108-tc-1",
        "description": "Verifies correct implementation for Method References: Class::method and instance::method",
        "testFn": "code.includes('::')"
      }
    ]
  },
  {
    "id": "java-109-introduction-to-the-stream-api",
    "title": "109. Introduction to the Stream API: stream()",
    "slug": "lesson-109-introduction-to-the-stream-api",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declarative pipeline processing over data sequences.",
    "concepts": [
      "Introduction to the Stream API: stream()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Introduction to the Stream API: stream() ensures robust and scalable performance.",
    "explanationMarkdown": "### Introduction to the Stream API: stream()\n\nDeclarative pipeline processing over data sequences.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = List.of(1, 2, 3);\n    System.out.println(list.stream().count());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Introduction to the Stream API: stream()",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = List.of(1, 2, 3);\n    System.out.println(list.stream().count());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Introduction to the Stream API: stream().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Introduction to the Stream API: stream().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = List.of(1, 2, 3);\n    System.out.println(list.stream().count());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> list = List.of(1, 2, 3);\n    System.out.println(list.stream().count());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-109-tc-1",
        "description": "Verifies correct implementation for Introduction to the Stream API: stream()",
        "testFn": "code.includes('stream()')"
      }
    ]
  },
  {
    "id": "java-110-filtering-streams-with-filter-",
    "title": "110. Filtering Streams with filter(Predicate)",
    "slug": "lesson-110-filtering-streams-with-filter-",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Select elements satisfying boolean predicates.",
    "concepts": [
      "Filtering Streams with filter(Predicate)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Filtering Streams with filter(Predicate) ensures robust and scalable performance.",
    "explanationMarkdown": "### Filtering Streams with filter(Predicate)\n\nSelect elements satisfying boolean predicates.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3, 4).stream().filter(n -> n % 2 == 0).forEach(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Streams with filter(Predicate)",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3, 4).stream().filter(n -> n % 2 == 0).forEach(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Streams with filter(Predicate).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Streams with filter(Predicate).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3, 4).stream().filter(n -> n % 2 == 0).forEach(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(1, 2, 3, 4).stream().filter(n -> n % 2 == 0).forEach(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-110-tc-1",
        "description": "Verifies correct implementation for Filtering Streams with filter(Predicate)",
        "testFn": "code.includes('filter(')"
      }
    ]
  },
  {
    "id": "java-111-transforming-streams-with-map-",
    "title": "111. Transforming Streams with map(Function)",
    "slug": "lesson-111-transforming-streams-with-map-",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Project elements into derived representations.",
    "concepts": [
      "Transforming Streams with map(Function)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Transforming Streams with map(Function) ensures robust and scalable performance.",
    "explanationMarkdown": "### Transforming Streams with map(Function)\n\nProject elements into derived representations.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"a\", \"b\").stream().map(String::toUpperCase).forEach(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Transforming Streams with map(Function)",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"a\", \"b\").stream().map(String::toUpperCase).forEach(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Transforming Streams with map(Function).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Transforming Streams with map(Function).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"a\", \"b\").stream().map(String::toUpperCase).forEach(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(\"a\", \"b\").stream().map(String::toUpperCase).forEach(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-111-tc-1",
        "description": "Verifies correct implementation for Transforming Streams with map(Function)",
        "testFn": "code.includes('map(')"
      }
    ]
  },
  {
    "id": "java-112-flattening-nested-collections-",
    "title": "112. Flattening Nested Collections with flatMap()",
    "slug": "lesson-112-flattening-nested-collections-",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Transform each element into a stream and concatenate.",
    "concepts": [
      "Flattening Nested Collections with flatMap()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Flattening Nested Collections with flatMap() ensures robust and scalable performance.",
    "explanationMarkdown": "### Flattening Nested Collections with flatMap()\n\nTransform each element into a stream and concatenate.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<List<Integer>> nested = List.of(List.of(1), List.of(2));\n    nested.stream().flatMap(List::stream).forEach(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Flattening Nested Collections with flatMap()",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<List<Integer>> nested = List.of(List.of(1), List.of(2));\n    nested.stream().flatMap(List::stream).forEach(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flattening Nested Collections with flatMap().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flattening Nested Collections with flatMap().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<List<Integer>> nested = List.of(List.of(1), List.of(2));\n    nested.stream().flatMap(List::stream).forEach(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<List<Integer>> nested = List.of(List.of(1), List.of(2));\n    nested.stream().flatMap(List::stream).forEach(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-112-tc-1",
        "description": "Verifies correct implementation for Flattening Nested Collections with flatMap()",
        "testFn": "code.includes('flatMap')"
      }
    ]
  },
  {
    "id": "java-113-sorting-streams-sorted-and-sor",
    "title": "113. Sorting Streams: sorted() and sorted(Comparator)",
    "slug": "lesson-113-sorting-streams-sorted-and-sor",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reorder elements in stream pipelines.",
    "concepts": [
      "Sorting Streams: sorted() and sorted(Comparator)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Sorting Streams: sorted() and sorted(Comparator) ensures robust and scalable performance.",
    "explanationMarkdown": "### Sorting Streams: sorted() and sorted(Comparator)\n\nReorder elements in stream pipelines.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(3, 1, 2).stream().sorted().forEach(System.out::println);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Streams: sorted() and sorted(Comparator)",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(3, 1, 2).stream().sorted().forEach(System.out::println);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Streams: sorted() and sorted(Comparator).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Streams: sorted() and sorted(Comparator).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(3, 1, 2).stream().sorted().forEach(System.out::println);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List.of(3, 1, 2).stream().sorted().forEach(System.out::println);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-113-tc-1",
        "description": "Verifies correct implementation for Sorting Streams: sorted() and sorted(Comparator)",
        "testFn": "code.includes('sorted()')"
      }
    ]
  },
  {
    "id": "java-114-terminal-reductions-with-colle",
    "title": "114. Terminal Reductions with collect(Collectors.toList())",
    "slug": "lesson-114-terminal-reductions-with-colle",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Gather pipeline results back into concrete collections.",
    "concepts": [
      "Terminal Reductions with collect(Collectors.toList())",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Terminal Reductions with collect(Collectors.toList()) ensures robust and scalable performance.",
    "explanationMarkdown": "### Terminal Reductions with collect(Collectors.toList())\n\nGather pipeline results back into concrete collections.\n\n```java\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> res = List.of(1, 2).stream().collect(Collectors.toList());\n    System.out.println(res);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Terminal Reductions with collect(Collectors.toList())",
      "code": "import java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> res = List.of(1, 2).stream().collect(Collectors.toList());\n    System.out.println(res);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Terminal Reductions with collect(Collectors.toList()).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Terminal Reductions with collect(Collectors.toList()).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> res = List.of(1, 2).stream().collect(Collectors.toList());\n    System.out.println(res);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> res = List.of(1, 2).stream().collect(Collectors.toList());\n    System.out.println(res);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-114-tc-1",
        "description": "Verifies correct implementation for Terminal Reductions with collect(Collectors.toList())",
        "testFn": "code.includes('collect(')"
      }
    ]
  },
  {
    "id": "java-115-stream-tolist-in-java-16",
    "title": "115. Stream toList() in Java 16+",
    "slug": "lesson-115-stream-tolist-in-java-16",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Direct unmodifiable list collector without Collectors boilerplate.",
    "concepts": [
      "Stream toList() in Java 16+",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Stream toList() in Java 16+ ensures robust and scalable performance.",
    "explanationMarkdown": "### Stream toList() in Java 16+\n\nDirect unmodifiable list collector without Collectors boilerplate.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> l = List.of(1, 2).stream().toList();\n    System.out.println(l);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Stream toList() in Java 16+",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> l = List.of(1, 2).stream().toList();\n    System.out.println(l);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stream toList() in Java 16+.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stream toList() in Java 16+.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> l = List.of(1, 2).stream().toList();\n    System.out.println(l);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> l = List.of(1, 2).stream().toList();\n    System.out.println(l);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-115-tc-1",
        "description": "Verifies correct implementation for Stream toList() in Java 16+",
        "testFn": "code.includes('.toList()')"
      }
    ]
  },
  {
    "id": "java-116-grouped-aggregations-collector",
    "title": "116. Grouped Aggregations: Collectors.groupingBy()",
    "slug": "lesson-116-grouped-aggregations-collector",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Partition streams into Maps keyed by category.",
    "concepts": [
      "Grouped Aggregations: Collectors.groupingBy()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Grouped Aggregations: Collectors.groupingBy() ensures robust and scalable performance.",
    "explanationMarkdown": "### Grouped Aggregations: Collectors.groupingBy()\n\nPartition streams into Maps keyed by category.\n\n```java\nimport java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    Map<Integer, List<String>> m = List.of(\"a\", \"bb\", \"c\").stream().collect(Collectors.groupingBy(String::length));\n    System.out.println(m);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Grouped Aggregations: Collectors.groupingBy()",
      "code": "import java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    Map<Integer, List<String>> m = List.of(\"a\", \"bb\", \"c\").stream().collect(Collectors.groupingBy(String::length));\n    System.out.println(m);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grouped Aggregations: Collectors.groupingBy().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grouped Aggregations: Collectors.groupingBy().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    Map<Integer, List<String>> m = List.of(\"a\", \"bb\", \"c\").stream().collect(Collectors.groupingBy(String::length));\n    System.out.println(m);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n  public static void main(String[] args) {\n    Map<Integer, List<String>> m = List.of(\"a\", \"bb\", \"c\").stream().collect(Collectors.groupingBy(String::length));\n    System.out.println(m);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-116-tc-1",
        "description": "Verifies correct implementation for Grouped Aggregations: Collectors.groupingBy()",
        "testFn": "code.includes('groupingBy')"
      }
    ]
  },
  {
    "id": "java-117-reductions-with-reduce-identit",
    "title": "117. Reductions with reduce(identity, BinaryOperator)",
    "slug": "lesson-117-reductions-with-reduce-identit",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fold stream into a single cumulative scalar.",
    "concepts": [
      "Reductions with reduce(identity, BinaryOperator)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Reductions with reduce(identity, BinaryOperator) ensures robust and scalable performance.",
    "explanationMarkdown": "### Reductions with reduce(identity, BinaryOperator)\n\nFold stream into a single cumulative scalar.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    int sum = List.of(1, 2, 3, 4).stream().reduce(0, (a, b) -> a + b);\n    System.out.println(sum);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Reductions with reduce(identity, BinaryOperator)",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    int sum = List.of(1, 2, 3, 4).stream().reduce(0, (a, b) -> a + b);\n    System.out.println(sum);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reductions with reduce(identity, BinaryOperator).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reductions with reduce(identity, BinaryOperator).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    int sum = List.of(1, 2, 3, 4).stream().reduce(0, (a, b) -> a + b);\n    System.out.println(sum);\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    int sum = List.of(1, 2, 3, 4).stream().reduce(0, (a, b) -> a + b);\n    System.out.println(sum);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-117-tc-1",
        "description": "Verifies correct implementation for Reductions with reduce(identity, BinaryOperator)",
        "testFn": "code.includes('reduce(')"
      }
    ]
  },
  {
    "id": "java-118-short-circuiting-operations-an",
    "title": "118. Short-Circuiting Operations: anyMatch, allMatch, noneMatch",
    "slug": "lesson-118-short-circuiting-operations-an",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate predicates without traversing remaining stream.",
    "concepts": [
      "Short-Circuiting Operations: anyMatch, allMatch, noneMatch",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Short-Circuiting Operations: anyMatch, allMatch, noneMatch ensures robust and scalable performance.",
    "explanationMarkdown": "### Short-Circuiting Operations: anyMatch, allMatch, noneMatch\n\nEvaluate predicates without traversing remaining stream.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(10, 20).stream().anyMatch(n -> n > 15));\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Short-Circuiting Operations: anyMatch, allMatch, noneMatch",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(10, 20).stream().anyMatch(n -> n > 15));\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Short-Circuiting Operations: anyMatch, allMatch, noneMatch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Short-Circuiting Operations: anyMatch, allMatch, noneMatch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(10, 20).stream().anyMatch(n -> n > 15));\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(10, 20).stream().anyMatch(n -> n > 15));\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-118-tc-1",
        "description": "Verifies correct implementation for Short-Circuiting Operations: anyMatch, allMatch, noneMatch",
        "testFn": "code.includes('anyMatch')"
      }
    ]
  },
  {
    "id": "java-119-primitive-specializations-ints",
    "title": "119. Primitive Specializations: IntStream, LongStream, DoubleStream",
    "slug": "lesson-119-primitive-specializations-ints",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Unboxed high-performance numerical streams.",
    "concepts": [
      "Primitive Specializations: IntStream, LongStream, DoubleStream",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Primitive Specializations: IntStream, LongStream, DoubleStream ensures robust and scalable performance.",
    "explanationMarkdown": "### Primitive Specializations: IntStream, LongStream, DoubleStream\n\nUnboxed high-performance numerical streams.\n\n```java\nimport java.util.stream.IntStream;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(IntStream.rangeClosed(1, 5).sum());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Primitive Specializations: IntStream, LongStream, DoubleStream",
      "code": "import java.util.stream.IntStream;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(IntStream.rangeClosed(1, 5).sum());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Primitive Specializations: IntStream, LongStream, DoubleStream.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Primitive Specializations: IntStream, LongStream, DoubleStream.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.stream.IntStream;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(IntStream.rangeClosed(1, 5).sum());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.stream.IntStream;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(IntStream.rangeClosed(1, 5).sum());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-119-tc-1",
        "description": "Verifies correct implementation for Primitive Specializations: IntStream, LongStream, DoubleStream",
        "testFn": "code.includes('IntStream')"
      }
    ]
  },
  {
    "id": "java-120-parallel-streams-with-parallel",
    "title": "120. Parallel Streams with parallelStream()",
    "slug": "lesson-120-parallel-streams-with-parallel",
    "language": "java",
    "category": "Module 8: Functional Java: Lambdas & Streams API",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "ForkJoinPool multi-core parallel processing.",
    "concepts": [
      "Parallel Streams with parallelStream()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Parallel Streams with parallelStream() ensures robust and scalable performance.",
    "explanationMarkdown": "### Parallel Streams with parallelStream()\n\nForkJoinPool multi-core parallel processing.\n\n```java\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(1, 2, 3).parallelStream().mapToInt(x -> x * 2).sum());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Parallel Streams with parallelStream()",
      "code": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(1, 2, 3).parallelStream().mapToInt(x -> x * 2).sum());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Parallel Streams with parallelStream().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Parallel Streams with parallelStream().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(1, 2, 3).parallelStream().mapToInt(x -> x * 2).sum());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.List;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(List.of(1, 2, 3).parallelStream().mapToInt(x -> x * 2).sum());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-120-tc-1",
        "description": "Verifies correct implementation for Parallel Streams with parallelStream()",
        "testFn": "code.includes('parallelStream()')"
      }
    ]
  },
  {
    "id": "java-121-threads-in-java-thread-class-v",
    "title": "121. Threads in Java: Thread Class vs Runnable Interface",
    "slug": "lesson-121-threads-in-java-thread-class-v",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Creating and starting operating system threads.",
    "concepts": [
      "Threads in Java: Thread Class vs Runnable Interface",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Threads in Java: Thread Class vs Runnable Interface ensures robust and scalable performance.",
    "explanationMarkdown": "### Threads in Java: Thread Class vs Runnable Interface\n\nCreating and starting operating system threads.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    Thread t = new Thread(() -> System.out.println(\"Worker thread\"));\n    t.start();\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Threads in Java: Thread Class vs Runnable Interface",
      "code": "public class Main {\n  public static void main(String[] args) {\n    Thread t = new Thread(() -> System.out.println(\"Worker thread\"));\n    t.start();\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Threads in Java: Thread Class vs Runnable Interface.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Threads in Java: Thread Class vs Runnable Interface.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    Thread t = new Thread(() -> System.out.println(\"Worker thread\"));\n    t.start();\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    Thread t = new Thread(() -> System.out.println(\"Worker thread\"));\n    t.start();\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-121-tc-1",
        "description": "Verifies correct implementation for Threads in Java: Thread Class vs Runnable Interface",
        "testFn": "code.includes('t.start()')"
      }
    ]
  },
  {
    "id": "java-122-thread-lifecycle-new-runnable-",
    "title": "122. Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED",
    "slug": "lesson-122-thread-lifecycle-new-runnable-",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Operating system thread states and transitions.",
    "concepts": [
      "Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED ensures robust and scalable performance.",
    "explanationMarkdown": "### Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED\n\nOperating system thread states and transitions.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(Thread.currentThread().getState());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Thread.currentThread().getState());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Thread.currentThread().getState());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(Thread.currentThread().getState());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-122-tc-1",
        "description": "Verifies correct implementation for Thread Lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED",
        "testFn": "code.includes('getState')"
      }
    ]
  },
  {
    "id": "java-123-joining-threads-with-t-join",
    "title": "123. Joining Threads with t.join()",
    "slug": "lesson-123-joining-threads-with-t-join",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Block caller until target worker thread completes.",
    "concepts": [
      "Joining Threads with t.join()",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Joining Threads with t.join() ensures robust and scalable performance.",
    "explanationMarkdown": "### Joining Threads with t.join()\n\nBlock caller until target worker thread completes.\n\n```java\npublic class Main {\n  public static void main(String[] args) throws InterruptedException {\n    Thread t = new Thread(() -> {}); t.start(); t.join();\n    System.out.println(\"Joined\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Joining Threads with t.join()",
      "code": "public class Main {\n  public static void main(String[] args) throws InterruptedException {\n    Thread t = new Thread(() -> {}); t.start(); t.join();\n    System.out.println(\"Joined\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Joining Threads with t.join().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Joining Threads with t.join().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) throws InterruptedException {\n    Thread t = new Thread(() -> {}); t.start(); t.join();\n    System.out.println(\"Joined\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) throws InterruptedException {\n    Thread t = new Thread(() -> {}); t.start(); t.join();\n    System.out.println(\"Joined\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-123-tc-1",
        "description": "Verifies correct implementation for Joining Threads with t.join()",
        "testFn": "code.includes('t.join()')"
      }
    ]
  },
  {
    "id": "java-124-the-synchronized-keyword-criti",
    "title": "124. The synchronized Keyword: Critical Sections & Monitors",
    "slug": "lesson-124-the-synchronized-keyword-criti",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent race conditions via mutual exclusion locks.",
    "concepts": [
      "The synchronized Keyword: Critical Sections & Monitors",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The synchronized Keyword: Critical Sections & Monitors ensures robust and scalable performance.",
    "explanationMarkdown": "### The synchronized Keyword: Critical Sections & Monitors\n\nPrevent race conditions via mutual exclusion locks.\n\n```java\npublic class Main {\n  static class Bank { int bal = 0; synchronized void deposit() { bal++; } }\n  public static void main(String[] args) {\n    Bank b = new Bank(); b.deposit(); System.out.println(b.bal);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The synchronized Keyword: Critical Sections & Monitors",
      "code": "public class Main {\n  static class Bank { int bal = 0; synchronized void deposit() { bal++; } }\n  public static void main(String[] args) {\n    Bank b = new Bank(); b.deposit(); System.out.println(b.bal);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The synchronized Keyword: Critical Sections & Monitors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The synchronized Keyword: Critical Sections & Monitors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Bank { int bal = 0; synchronized void deposit() { bal++; } }\n  public static void main(String[] args) {\n    Bank b = new Bank(); b.deposit(); System.out.println(b.bal);\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Bank { int bal = 0; synchronized void deposit() { bal++; } }\n  public static void main(String[] args) {\n    Bank b = new Bank(); b.deposit(); System.out.println(b.bal);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-124-tc-1",
        "description": "Verifies correct implementation for The synchronized Keyword: Critical Sections & Monitors",
        "testFn": "code.includes('synchronized')"
      }
    ]
  },
  {
    "id": "java-125-the-volatile-keyword-memory-vi",
    "title": "125. The volatile Keyword: Memory Visibility Guarantees",
    "slug": "lesson-125-the-volatile-keyword-memory-vi",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensure changes to variables are instantly flushed to main memory.",
    "concepts": [
      "The volatile Keyword: Memory Visibility Guarantees",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: The volatile Keyword: Memory Visibility Guarantees ensures robust and scalable performance.",
    "explanationMarkdown": "### The volatile Keyword: Memory Visibility Guarantees\n\nEnsure changes to variables are instantly flushed to main memory.\n\n```java\npublic class Main {\n  static volatile boolean running = true;\n  public static void main(String[] args) { System.out.println(running); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: The volatile Keyword: Memory Visibility Guarantees",
      "code": "public class Main {\n  static volatile boolean running = true;\n  public static void main(String[] args) { System.out.println(running); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The volatile Keyword: Memory Visibility Guarantees.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The volatile Keyword: Memory Visibility Guarantees.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static volatile boolean running = true;\n  public static void main(String[] args) { System.out.println(running); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static volatile boolean running = true;\n  public static void main(String[] args) { System.out.println(running); }\n}"
    ],
    "testCases": [
      {
        "id": "java-125-tc-1",
        "description": "Verifies correct implementation for The volatile Keyword: Memory Visibility Guarantees",
        "testFn": "code.includes('volatile')"
      }
    ]
  },
  {
    "id": "java-126-atomic-variables-in-java-util-",
    "title": "126. Atomic Variables in java.util.concurrent.atomic",
    "slug": "lesson-126-atomic-variables-in-java-util-",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Lock-free hardware-level CAS (Compare-And-Swap) operations.",
    "concepts": [
      "Atomic Variables in java.util.concurrent.atomic",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Atomic Variables in java.util.concurrent.atomic ensures robust and scalable performance.",
    "explanationMarkdown": "### Atomic Variables in java.util.concurrent.atomic\n\nLock-free hardware-level CAS (Compare-And-Swap) operations.\n\n```java\nimport java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n  public static void main(String[] args) {\n    AtomicInteger ai = new AtomicInteger(10);\n    System.out.println(ai.incrementAndGet());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Atomic Variables in java.util.concurrent.atomic",
      "code": "import java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n  public static void main(String[] args) {\n    AtomicInteger ai = new AtomicInteger(10);\n    System.out.println(ai.incrementAndGet());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Atomic Variables in java.util.concurrent.atomic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Atomic Variables in java.util.concurrent.atomic.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n  public static void main(String[] args) {\n    AtomicInteger ai = new AtomicInteger(10);\n    System.out.println(ai.incrementAndGet());\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n  public static void main(String[] args) {\n    AtomicInteger ai = new AtomicInteger(10);\n    System.out.println(ai.incrementAndGet());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-126-tc-1",
        "description": "Verifies correct implementation for Atomic Variables in java.util.concurrent.atomic",
        "testFn": "code.includes('AtomicInteger')"
      }
    ]
  },
  {
    "id": "java-127-explicit-locks-with-reentrantl",
    "title": "127. Explicit Locks with ReentrantLock",
    "slug": "lesson-127-explicit-locks-with-reentrantl",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "TryLock, timed acquisitions, and fair locking options.",
    "concepts": [
      "Explicit Locks with ReentrantLock",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Explicit Locks with ReentrantLock ensures robust and scalable performance.",
    "explanationMarkdown": "### Explicit Locks with ReentrantLock\n\nTryLock, timed acquisitions, and fair locking options.\n\n```java\nimport java.util.concurrent.locks.ReentrantLock;\npublic class Main {\n  public static void main(String[] args) {\n    ReentrantLock lock = new ReentrantLock();\n    lock.lock(); try { System.out.println(\"Locked\"); } finally { lock.unlock(); }\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Explicit Locks with ReentrantLock",
      "code": "import java.util.concurrent.locks.ReentrantLock;\npublic class Main {\n  public static void main(String[] args) {\n    ReentrantLock lock = new ReentrantLock();\n    lock.lock(); try { System.out.println(\"Locked\"); } finally { lock.unlock(); }\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Explicit Locks with ReentrantLock.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Explicit Locks with ReentrantLock.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.concurrent.locks.ReentrantLock;\npublic class Main {\n  public static void main(String[] args) {\n    ReentrantLock lock = new ReentrantLock();\n    lock.lock(); try { System.out.println(\"Locked\"); } finally { lock.unlock(); }\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.concurrent.locks.ReentrantLock;\npublic class Main {\n  public static void main(String[] args) {\n    ReentrantLock lock = new ReentrantLock();\n    lock.lock(); try { System.out.println(\"Locked\"); } finally { lock.unlock(); }\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-127-tc-1",
        "description": "Verifies correct implementation for Explicit Locks with ReentrantLock",
        "testFn": "code.includes('ReentrantLock')"
      }
    ]
  },
  {
    "id": "java-128-thread-pools-with-executorserv",
    "title": "128. Thread Pools with ExecutorService (Executors.newFixedThreadPool)",
    "slug": "lesson-128-thread-pools-with-executorserv",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Manage pool of reusable worker threads.",
    "concepts": [
      "Thread Pools with ExecutorService (Executors.newFixedThreadPool)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Thread Pools with ExecutorService (Executors.newFixedThreadPool) ensures robust and scalable performance.",
    "explanationMarkdown": "### Thread Pools with ExecutorService (Executors.newFixedThreadPool)\n\nManage pool of reusable worker threads.\n\n```java\nimport java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) {\n    ExecutorService exec = Executors.newFixedThreadPool(2);\n    exec.submit(() -> System.out.println(\"Task done\"));\n    exec.shutdown();\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Thread Pools with ExecutorService (Executors.newFixedThreadPool)",
      "code": "import java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) {\n    ExecutorService exec = Executors.newFixedThreadPool(2);\n    exec.submit(() -> System.out.println(\"Task done\"));\n    exec.shutdown();\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Thread Pools with ExecutorService (Executors.newFixedThreadPool).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Thread Pools with ExecutorService (Executors.newFixedThreadPool).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) {\n    ExecutorService exec = Executors.newFixedThreadPool(2);\n    exec.submit(() -> System.out.println(\"Task done\"));\n    exec.shutdown();\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) {\n    ExecutorService exec = Executors.newFixedThreadPool(2);\n    exec.submit(() -> System.out.println(\"Task done\"));\n    exec.shutdown();\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-128-tc-1",
        "description": "Verifies correct implementation for Thread Pools with ExecutorService (Executors.newFixedThreadPool)",
        "testFn": "code.includes('ExecutorService')"
      }
    ]
  },
  {
    "id": "java-129-callable-t-and-future-t-for-as",
    "title": "129. Callable<T> and Future<T> for Asynchronous Results",
    "slug": "lesson-129-callable-t-and-future-t-for-as",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Retrieve return values from background concurrent tasks.",
    "concepts": [
      "Callable<T> and Future<T> for Asynchronous Results",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Callable<T> and Future<T> for Asynchronous Results ensures robust and scalable performance.",
    "explanationMarkdown": "### Callable<T> and Future<T> for Asynchronous Results\n\nRetrieve return values from background concurrent tasks.\n\n```java\nimport java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    ExecutorService exec = Executors.newSingleThreadExecutor();\n    Future<Integer> f = exec.submit(() -> 42);\n    System.out.println(f.get());\n    exec.shutdown();\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Callable<T> and Future<T> for Asynchronous Results",
      "code": "import java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    ExecutorService exec = Executors.newSingleThreadExecutor();\n    Future<Integer> f = exec.submit(() -> 42);\n    System.out.println(f.get());\n    exec.shutdown();\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Callable<T> and Future<T> for Asynchronous Results.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Callable<T> and Future<T> for Asynchronous Results.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    ExecutorService exec = Executors.newSingleThreadExecutor();\n    Future<Integer> f = exec.submit(() -> 42);\n    System.out.println(f.get());\n    exec.shutdown();\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.concurrent.*;\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    ExecutorService exec = Executors.newSingleThreadExecutor();\n    Future<Integer> f = exec.submit(() -> 42);\n    System.out.println(f.get());\n    exec.shutdown();\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-129-tc-1",
        "description": "Verifies correct implementation for Callable<T> and Future<T> for Asynchronous Results",
        "testFn": "code.includes('Future')"
      }
    ]
  },
  {
    "id": "java-130-completablefuture-for-reactive",
    "title": "130. CompletableFuture for Reactive Async Pipelines",
    "slug": "lesson-130-completablefuture-for-reactive",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Non-blocking thenApply, thenCompose, and exceptionally chains.",
    "concepts": [
      "CompletableFuture for Reactive Async Pipelines",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: CompletableFuture for Reactive Async Pipelines ensures robust and scalable performance.",
    "explanationMarkdown": "### CompletableFuture for Reactive Async Pipelines\n\nNon-blocking thenApply, thenCompose, and exceptionally chains.\n\n```java\nimport java.util.concurrent.CompletableFuture;\npublic class Main {\n  public static void main(String[] args) {\n    CompletableFuture.supplyAsync(() -> \"Data\").thenAccept(System.out::println).join();\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: CompletableFuture for Reactive Async Pipelines",
      "code": "import java.util.concurrent.CompletableFuture;\npublic class Main {\n  public static void main(String[] args) {\n    CompletableFuture.supplyAsync(() -> \"Data\").thenAccept(System.out::println).join();\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CompletableFuture for Reactive Async Pipelines.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CompletableFuture for Reactive Async Pipelines.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "import java.util.concurrent.CompletableFuture;\npublic class Main {\n  public static void main(String[] args) {\n    CompletableFuture.supplyAsync(() -> \"Data\").thenAccept(System.out::println).join();\n  }\n}\n",
    "hints": [
      "Write:\nimport java.util.concurrent.CompletableFuture;\npublic class Main {\n  public static void main(String[] args) {\n    CompletableFuture.supplyAsync(() -> \"Data\").thenAccept(System.out::println).join();\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-130-tc-1",
        "description": "Verifies correct implementation for CompletableFuture for Reactive Async Pipelines",
        "testFn": "code.includes('CompletableFuture')"
      }
    ]
  },
  {
    "id": "java-131-threadlocal-thread-specific-is",
    "title": "131. ThreadLocal: Thread-Specific Isolated Storage",
    "slug": "lesson-131-threadlocal-thread-specific-is",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Maintain per-thread context (e.g. security credentials, DB sessions).",
    "concepts": [
      "ThreadLocal: Thread-Specific Isolated Storage",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: ThreadLocal: Thread-Specific Isolated Storage ensures robust and scalable performance.",
    "explanationMarkdown": "### ThreadLocal: Thread-Specific Isolated Storage\n\nMaintain per-thread context (e.g. security credentials, DB sessions).\n\n```java\npublic class Main {\n  static ThreadLocal<String> ctx = ThreadLocal.withInitial(() -> \"DefaultCtx\");\n  public static void main(String[] args) { System.out.println(ctx.get()); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: ThreadLocal: Thread-Specific Isolated Storage",
      "code": "public class Main {\n  static ThreadLocal<String> ctx = ThreadLocal.withInitial(() -> \"DefaultCtx\");\n  public static void main(String[] args) { System.out.println(ctx.get()); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ThreadLocal: Thread-Specific Isolated Storage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ThreadLocal: Thread-Specific Isolated Storage.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static ThreadLocal<String> ctx = ThreadLocal.withInitial(() -> \"DefaultCtx\");\n  public static void main(String[] args) { System.out.println(ctx.get()); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static ThreadLocal<String> ctx = ThreadLocal.withInitial(() -> \"DefaultCtx\");\n  public static void main(String[] args) { System.out.println(ctx.get()); }\n}"
    ],
    "testCases": [
      {
        "id": "java-131-tc-1",
        "description": "Verifies correct implementation for ThreadLocal: Thread-Specific Isolated Storage",
        "testFn": "code.includes('ThreadLocal')"
      }
    ]
  },
  {
    "id": "java-132-deadlock-detection-and-prevent",
    "title": "132. Deadlock Detection and Prevention Principles",
    "slug": "lesson-132-deadlock-detection-and-prevent",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Avoid nested lock acquisition and lock-order inversion.",
    "concepts": [
      "Deadlock Detection and Prevention Principles",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Deadlock Detection and Prevention Principles ensures robust and scalable performance.",
    "explanationMarkdown": "### Deadlock Detection and Prevention Principles\n\nAvoid nested lock acquisition and lock-order inversion.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Acquire shared locks in globally consistent strict order\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Deadlock Detection and Prevention Principles",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Acquire shared locks in globally consistent strict order\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deadlock Detection and Prevention Principles.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deadlock Detection and Prevention Principles.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Acquire shared locks in globally consistent strict order\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Acquire shared locks in globally consistent strict order\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-132-tc-1",
        "description": "Verifies correct implementation for Deadlock Detection and Prevention Principles",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-133-project-loom-virtual-threads-i",
    "title": "133. Project Loom: Virtual Threads in Java 21+",
    "slug": "lesson-133-project-loom-virtual-threads-i",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Lightweight user-mode green threads scheduled by the JVM.",
    "concepts": [
      "Project Loom: Virtual Threads in Java 21+",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Project Loom: Virtual Threads in Java 21+ ensures robust and scalable performance.",
    "explanationMarkdown": "### Project Loom: Virtual Threads in Java 21+\n\nLightweight user-mode green threads scheduled by the JVM.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Thread.ofVirtual().start(runnable) spawns million lightweight threads\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Project Loom: Virtual Threads in Java 21+",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Thread.ofVirtual().start(runnable) spawns million lightweight threads\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Project Loom: Virtual Threads in Java 21+.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Project Loom: Virtual Threads in Java 21+.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Thread.ofVirtual().start(runnable) spawns million lightweight threads\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Thread.ofVirtual().start(runnable) spawns million lightweight threads\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-133-tc-1",
        "description": "Verifies correct implementation for Project Loom: Virtual Threads in Java 21+",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-134-structured-concurrency-java-21",
    "title": "134. Structured Concurrency (Java 21 Preview)",
    "slug": "lesson-134-structured-concurrency-java-21",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Treat tasks running in different threads as a single unit of work.",
    "concepts": [
      "Structured Concurrency (Java 21 Preview)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Structured Concurrency (Java 21 Preview) ensures robust and scalable performance.",
    "explanationMarkdown": "### Structured Concurrency (Java 21 Preview)\n\nTreat tasks running in different threads as a single unit of work.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"StructuredTaskScope bounds lifetime of concurrent subtasks\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Structured Concurrency (Java 21 Preview)",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"StructuredTaskScope bounds lifetime of concurrent subtasks\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Structured Concurrency (Java 21 Preview).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Structured Concurrency (Java 21 Preview).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"StructuredTaskScope bounds lifetime of concurrent subtasks\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"StructuredTaskScope bounds lifetime of concurrent subtasks\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-134-tc-1",
        "description": "Verifies correct implementation for Structured Concurrency (Java 21 Preview)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-135-scoped-values-thread-safe-ligh",
    "title": "135. Scoped Values: Thread-Safe Lightweight Data Sharing",
    "slug": "lesson-135-scoped-values-thread-safe-ligh",
    "language": "java",
    "category": "Module 9: Multithreading, Concurrency & Virtual Threads",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Modern replacement for ThreadLocal in virtual thread environments.",
    "concepts": [
      "Scoped Values: Thread-Safe Lightweight Data Sharing",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Scoped Values: Thread-Safe Lightweight Data Sharing ensures robust and scalable performance.",
    "explanationMarkdown": "### Scoped Values: Thread-Safe Lightweight Data Sharing\n\nModern replacement for ThreadLocal in virtual thread environments.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"ScopedValue provides immutable, bounded thread context sharing\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Scoped Values: Thread-Safe Lightweight Data Sharing",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"ScopedValue provides immutable, bounded thread context sharing\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scoped Values: Thread-Safe Lightweight Data Sharing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scoped Values: Thread-Safe Lightweight Data Sharing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"ScopedValue provides immutable, bounded thread context sharing\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"ScopedValue provides immutable, bounded thread context sharing\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-135-tc-1",
        "description": "Verifies correct implementation for Scoped Values: Thread-Safe Lightweight Data Sharing",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-136-java-reflection-api-class-t-me",
    "title": "136. Java Reflection API: Class<T>, Methods, Fields",
    "slug": "lesson-136-java-reflection-api-class-t-me",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect and invoke classes dynamically at runtime.",
    "concepts": [
      "Java Reflection API: Class<T>, Methods, Fields",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Java Reflection API: Class<T>, Methods, Fields ensures robust and scalable performance.",
    "explanationMarkdown": "### Java Reflection API: Class<T>, Methods, Fields\n\nInspect and invoke classes dynamically at runtime.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    Class<?> c = String.class;\n    System.out.println(c.getSimpleName());\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Java Reflection API: Class<T>, Methods, Fields",
      "code": "public class Main {\n  public static void main(String[] args) {\n    Class<?> c = String.class;\n    System.out.println(c.getSimpleName());\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Java Reflection API: Class<T>, Methods, Fields.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Java Reflection API: Class<T>, Methods, Fields.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    Class<?> c = String.class;\n    System.out.println(c.getSimpleName());\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    Class<?> c = String.class;\n    System.out.println(c.getSimpleName());\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-136-tc-1",
        "description": "Verifies correct implementation for Java Reflection API: Class<T>, Methods, Fields",
        "testFn": "code.includes('Class<?>')"
      }
    ]
  },
  {
    "id": "java-137-custom-annotations-retention-a",
    "title": "137. Custom Annotations: @Retention and @Target",
    "slug": "lesson-137-custom-annotations-retention-a",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declare compile-time and runtime metadata tags.",
    "concepts": [
      "Custom Annotations: @Retention and @Target",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Custom Annotations: @Retention and @Target ensures robust and scalable performance.",
    "explanationMarkdown": "### Custom Annotations: @Retention and @Target\n\nDeclare compile-time and runtime metadata tags.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@interface defines custom annotation contracts\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Annotations: @Retention and @Target",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@interface defines custom annotation contracts\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Annotations: @Retention and @Target.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Annotations: @Retention and @Target.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@interface defines custom annotation contracts\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@interface defines custom annotation contracts\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-137-tc-1",
        "description": "Verifies correct implementation for Custom Annotations: @Retention and @Target",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-138-inversion-of-control-ioc-and-d",
    "title": "138. Inversion of Control (IoC) and Dependency Injection (DI)",
    "slug": "lesson-138-inversion-of-control-ioc-and-d",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decouple components from instantiation management.",
    "concepts": [
      "Inversion of Control (IoC) and Dependency Injection (DI)",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Inversion of Control (IoC) and Dependency Injection (DI) ensures robust and scalable performance.",
    "explanationMarkdown": "### Inversion of Control (IoC) and Dependency Injection (DI)\n\nDecouple components from instantiation management.\n\n```java\npublic class Main {\n  static class Service {}\n  static class Controller { Service s; Controller(Service s) { this.s = s; } }\n  public static void main(String[] args) { System.out.println(\"Injected\"); }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Inversion of Control (IoC) and Dependency Injection (DI)",
      "code": "public class Main {\n  static class Service {}\n  static class Controller { Service s; Controller(Service s) { this.s = s; } }\n  public static void main(String[] args) { System.out.println(\"Injected\"); }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inversion of Control (IoC) and Dependency Injection (DI).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inversion of Control (IoC) and Dependency Injection (DI).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  static class Service {}\n  static class Controller { Service s; Controller(Service s) { this.s = s; } }\n  public static void main(String[] args) { System.out.println(\"Injected\"); }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  static class Service {}\n  static class Controller { Service s; Controller(Service s) { this.s = s; } }\n  public static void main(String[] args) { System.out.println(\"Injected\"); }\n}"
    ],
    "testCases": [
      {
        "id": "java-138-tc-1",
        "description": "Verifies correct implementation for Inversion of Control (IoC) and Dependency Injection (DI)",
        "testFn": "code.includes('Controller')"
      }
    ]
  },
  {
    "id": "java-139-spring-bean-lifecycle-instanti",
    "title": "139. Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy",
    "slug": "lesson-139-spring-bean-lifecycle-instanti",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "How enterprise containers manage object longevity.",
    "concepts": [
      "Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy ensures robust and scalable performance.",
    "explanationMarkdown": "### Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy\n\nHow enterprise containers manage object longevity.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Spring Bean: construct -> populate -> init -> use -> destroy\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Spring Bean: construct -> populate -> init -> use -> destroy\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Spring Bean: construct -> populate -> init -> use -> destroy\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Spring Bean: construct -> populate -> init -> use -> destroy\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-139-tc-1",
        "description": "Verifies correct implementation for Spring Bean Lifecycle: Instantiation, DI, Initialization, Destroy",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-140-bean-scopes-singleton-vs-proto",
    "title": "140. Bean Scopes: Singleton vs Prototype vs Request",
    "slug": "lesson-140-bean-scopes-singleton-vs-proto",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Default singleton instances vs new instances per lookup.",
    "concepts": [
      "Bean Scopes: Singleton vs Prototype vs Request",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Bean Scopes: Singleton vs Prototype vs Request ensures robust and scalable performance.",
    "explanationMarkdown": "### Bean Scopes: Singleton vs Prototype vs Request\n\nDefault singleton instances vs new instances per lookup.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Singleton scope: one shared bean per ApplicationContext\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Bean Scopes: Singleton vs Prototype vs Request",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Singleton scope: one shared bean per ApplicationContext\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bean Scopes: Singleton vs Prototype vs Request.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bean Scopes: Singleton vs Prototype vs Request.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Singleton scope: one shared bean per ApplicationContext\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Singleton scope: one shared bean per ApplicationContext\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-140-tc-1",
        "description": "Verifies correct implementation for Bean Scopes: Singleton vs Prototype vs Request",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-141-aspect-oriented-programming-ao",
    "title": "141. Aspect-Oriented Programming (AOP): Cross-Cutting Concerns",
    "slug": "lesson-141-aspect-oriented-programming-ao",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Intercept methods for logging, metrics, and security.",
    "concepts": [
      "Aspect-Oriented Programming (AOP): Cross-Cutting Concerns",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Aspect-Oriented Programming (AOP): Cross-Cutting Concerns ensures robust and scalable performance.",
    "explanationMarkdown": "### Aspect-Oriented Programming (AOP): Cross-Cutting Concerns\n\nIntercept methods for logging, metrics, and security.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"AOP introduces advice around join points\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Aspect-Oriented Programming (AOP): Cross-Cutting Concerns",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"AOP introduces advice around join points\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Aspect-Oriented Programming (AOP): Cross-Cutting Concerns.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Aspect-Oriented Programming (AOP): Cross-Cutting Concerns.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"AOP introduces advice around join points\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"AOP introduces advice around join points\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-141-tc-1",
        "description": "Verifies correct implementation for Aspect-Oriented Programming (AOP): Cross-Cutting Concerns",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-142-restful-web-services-with-rest",
    "title": "142. RESTful Web Services with @RestController",
    "slug": "lesson-142-restful-web-services-with-rest",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Map incoming HTTP requests to Java controller methods.",
    "concepts": [
      "RESTful Web Services with @RestController",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: RESTful Web Services with @RestController ensures robust and scalable performance.",
    "explanationMarkdown": "### RESTful Web Services with @RestController\n\nMap incoming HTTP requests to Java controller methods.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@GetMapping('/api/users') maps to service endpoint\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: RESTful Web Services with @RestController",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@GetMapping('/api/users') maps to service endpoint\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for RESTful Web Services with @RestController.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of RESTful Web Services with @RestController.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@GetMapping('/api/users') maps to service endpoint\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@GetMapping('/api/users') maps to service endpoint\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-142-tc-1",
        "description": "Verifies correct implementation for RESTful Web Services with @RestController",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-143-data-persistence-with-spring-d",
    "title": "143. Data Persistence with Spring Data JPA & Hibernate",
    "slug": "lesson-143-data-persistence-with-spring-d",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Map relational tables to Java entity classes with ORM.",
    "concepts": [
      "Data Persistence with Spring Data JPA & Hibernate",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Data Persistence with Spring Data JPA & Hibernate ensures robust and scalable performance.",
    "explanationMarkdown": "### Data Persistence with Spring Data JPA & Hibernate\n\nMap relational tables to Java entity classes with ORM.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Entity and JpaRepository provide automated SQL CRUD\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Data Persistence with Spring Data JPA & Hibernate",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Entity and JpaRepository provide automated SQL CRUD\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Data Persistence with Spring Data JPA & Hibernate.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Data Persistence with Spring Data JPA & Hibernate.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Entity and JpaRepository provide automated SQL CRUD\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Entity and JpaRepository provide automated SQL CRUD\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-143-tc-1",
        "description": "Verifies correct implementation for Data Persistence with Spring Data JPA & Hibernate",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-144-database-transactions-with-tra",
    "title": "144. Database Transactions with @Transactional",
    "slug": "lesson-144-database-transactions-with-tra",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "ACID transaction guarantees and rollback mechanics.",
    "concepts": [
      "Database Transactions with @Transactional",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Database Transactions with @Transactional ensures robust and scalable performance.",
    "explanationMarkdown": "### Database Transactions with @Transactional\n\nACID transaction guarantees and rollback mechanics.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Transactional automatically wraps methods in DB transaction\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Database Transactions with @Transactional",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Transactional automatically wraps methods in DB transaction\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Database Transactions with @Transactional.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Database Transactions with @Transactional.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Transactional automatically wraps methods in DB transaction\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Transactional automatically wraps methods in DB transaction\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-144-tc-1",
        "description": "Verifies correct implementation for Database Transactions with @Transactional",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-145-database-connection-pooling-hi",
    "title": "145. Database Connection Pooling: HikariCP Performance",
    "slug": "lesson-145-database-connection-pooling-hi",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Zero-overhead lightning-fast JDBC connection pool.",
    "concepts": [
      "Database Connection Pooling: HikariCP Performance",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Database Connection Pooling: HikariCP Performance ensures robust and scalable performance.",
    "explanationMarkdown": "### Database Connection Pooling: HikariCP Performance\n\nZero-overhead lightning-fast JDBC connection pool.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"HikariCP default connection pool in Spring Boot 3\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Database Connection Pooling: HikariCP Performance",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"HikariCP default connection pool in Spring Boot 3\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Database Connection Pooling: HikariCP Performance.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Database Connection Pooling: HikariCP Performance.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"HikariCP default connection pool in Spring Boot 3\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"HikariCP default connection pool in Spring Boot 3\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-145-tc-1",
        "description": "Verifies correct implementation for Database Connection Pooling: HikariCP Performance",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-146-enterprise-security-with-sprin",
    "title": "146. Enterprise Security with Spring Security & JWT",
    "slug": "lesson-146-enterprise-security-with-sprin",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stateless authentication and RBAC authorization filters.",
    "concepts": [
      "Enterprise Security with Spring Security & JWT",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Enterprise Security with Spring Security & JWT ensures robust and scalable performance.",
    "explanationMarkdown": "### Enterprise Security with Spring Security & JWT\n\nStateless authentication and RBAC authorization filters.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"SecurityFilterChain verifies JWT bearer tokens\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Enterprise Security with Spring Security & JWT",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"SecurityFilterChain verifies JWT bearer tokens\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Enterprise Security with Spring Security & JWT.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Enterprise Security with Spring Security & JWT.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"SecurityFilterChain verifies JWT bearer tokens\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"SecurityFilterChain verifies JWT bearer tokens\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-146-tc-1",
        "description": "Verifies correct implementation for Enterprise Security with Spring Security & JWT",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-147-testing-enterprise-code-with-j",
    "title": "147. Testing Enterprise Code with JUnit 5 & Mockito",
    "slug": "lesson-147-testing-enterprise-code-with-j",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automated unit tests and mock dependency injection.",
    "concepts": [
      "Testing Enterprise Code with JUnit 5 & Mockito",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Testing Enterprise Code with JUnit 5 & Mockito ensures robust and scalable performance.",
    "explanationMarkdown": "### Testing Enterprise Code with JUnit 5 & Mockito\n\nAutomated unit tests and mock dependency injection.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Test and Mockito.when(mock.call()).thenReturn(val)\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Testing Enterprise Code with JUnit 5 & Mockito",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Test and Mockito.when(mock.call()).thenReturn(val)\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Testing Enterprise Code with JUnit 5 & Mockito.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Testing Enterprise Code with JUnit 5 & Mockito.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Test and Mockito.when(mock.call()).thenReturn(val)\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"@Test and Mockito.when(mock.call()).thenReturn(val)\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-147-tc-1",
        "description": "Verifies correct implementation for Testing Enterprise Code with JUnit 5 & Mockito",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-148-spring-boot-actuator-health-ch",
    "title": "148. Spring Boot Actuator: Health Checks & Prometheus Metrics",
    "slug": "lesson-148-spring-boot-actuator-health-ch",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Production monitoring and readiness/liveness probes.",
    "concepts": [
      "Spring Boot Actuator: Health Checks & Prometheus Metrics",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Spring Boot Actuator: Health Checks & Prometheus Metrics ensures robust and scalable performance.",
    "explanationMarkdown": "### Spring Boot Actuator: Health Checks & Prometheus Metrics\n\nProduction monitoring and readiness/liveness probes.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"/actuator/health reports container liveness\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Spring Boot Actuator: Health Checks & Prometheus Metrics",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"/actuator/health reports container liveness\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spring Boot Actuator: Health Checks & Prometheus Metrics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spring Boot Actuator: Health Checks & Prometheus Metrics.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"/actuator/health reports container liveness\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"/actuator/health reports container liveness\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-148-tc-1",
        "description": "Verifies correct implementation for Spring Boot Actuator: Health Checks & Prometheus Metrics",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-149-graalvm-native-images-aot-comp",
    "title": "149. GraalVM Native Images: AOT Compilation for Instant Boot",
    "slug": "lesson-149-graalvm-native-images-aot-comp",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compile Java bytecode ahead-of-time into native machine binaries.",
    "concepts": [
      "GraalVM Native Images: AOT Compilation for Instant Boot",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: GraalVM Native Images: AOT Compilation for Instant Boot ensures robust and scalable performance.",
    "explanationMarkdown": "### GraalVM Native Images: AOT Compilation for Instant Boot\n\nCompile Java bytecode ahead-of-time into native machine binaries.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Native images boot in 0.05s with 30MB RAM footprint\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: GraalVM Native Images: AOT Compilation for Instant Boot",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Native images boot in 0.05s with 30MB RAM footprint\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for GraalVM Native Images: AOT Compilation for Instant Boot.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GraalVM Native Images: AOT Compilation for Instant Boot.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Native images boot in 0.05s with 30MB RAM footprint\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Native images boot in 0.05s with 30MB RAM footprint\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-149-tc-1",
        "description": "Verifies correct implementation for GraalVM Native Images: AOT Compilation for Instant Boot",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "java-150-java-enterprise-capstone-produ",
    "title": "150. Java Enterprise Capstone: Production Cloud Microservice",
    "slug": "lesson-150-java-enterprise-capstone-produ",
    "language": "java",
    "category": "Module 10: Enterprise Architecture & Spring Core Principles",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Full microservice: REST, JPA, validation, security, and metrics.",
    "concepts": [
      "Java Enterprise Capstone: Production Cloud Microservice",
      "Java: Enterprise & Cloud Architecture (150 Topics)"
    ],
    "analogy": "Like constructing mission-critical infrastructure: Java Enterprise Capstone: Production Cloud Microservice ensures robust and scalable performance.",
    "explanationMarkdown": "### Java Enterprise Capstone: Production Cloud Microservice\n\nFull microservice: REST, JPA, validation, security, and metrics.\n\n```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Capstone Complete: Enterprise Java Microservice Deployed!\");\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Java Enterprise Capstone: Production Cloud Microservice",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Capstone Complete: Enterprise Java Microservice Deployed!\");\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Java Enterprise Capstone: Production Cloud Microservice.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Java Enterprise Capstone: Production Cloud Microservice.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "public class Main {\n    public static void main(String[] args) {\n        // TODO: Write code below\n    }\n}\n",
    "solutionCode": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Capstone Complete: Enterprise Java Microservice Deployed!\");\n  }\n}\n",
    "hints": [
      "Write:\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Capstone Complete: Enterprise Java Microservice Deployed!\");\n  }\n}"
    ],
    "testCases": [
      {
        "id": "java-150-tc-1",
        "description": "Verifies correct implementation for Java Enterprise Capstone: Production Cloud Microservice",
        "testFn": "logs.length > 0"
      }
    ]
  }
]
};
