import { Track } from '../../types';

export const REACT_TRACK: Track = {
  id: "react",
  title: "React 19: Modern Frontend Architecture (150 Topics)",
  slug: "react",
  language: "react",
  icon: "Layers",
  color: "from-cyan-400 to-teal-500",
  tagline: "Build high-performance web applications with React 19, hooks, and component architecture across 150 lessons.",
  description: "From JSX, components, and props to useState, useEffect, context, useReducer, performance profiling, custom hooks, and React 19 Actions.",
  lessons: [
  {
    "id": "react-1-the-react-mental-model-ui-as-a-f",
    "title": "1. The React Mental Model: UI as a Function of State",
    "slug": "lesson-1-the-react-mental-model-ui-as-a-f",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The React Mental Model: UI as a Function of State in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The React Mental Model",
      "React 19"
    ],
    "analogy": "A projection film projector: when you change the film slide (state), the picture on the wall (UI) updates automatically.",
    "explanationMarkdown": "### The React Mental Model: UI as a Function of State\n\nIn React, UI is declarative: you describe what the screen should look like for a given state, and React handles DOM updates.\n\n```react\nfunction renderGreeting(name) {\n  return `Hello, ${name}!`;\n}\nconst output = renderGreeting('DevForge');\n```",
    "workedExample": {
      "title": "Worked Example: The React Mental Model: UI as a Function of State",
      "code": "function renderGreeting(name) {\n  return `Hello, ${name}!`;\n}\nconst output = renderGreeting('DevForge');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The React Mental Model: UI as a Function of State.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The React Mental Model: UI as a Function of State.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function renderGreeting(name) {\n  return `Hello, ${name}!`;\n}\nconst output = renderGreeting('DevForge');",
    "hints": [
      "Write:\nfunction renderGreeting(name) {\n  return `Hello, ${name}!`;\n}\nconst output = renderGreeting('DevForge');"
    ],
    "testCases": [
      {
        "id": "react-1-tc-1",
        "description": "Verifies correct implementation for The React Mental Model: UI as a Function of State",
        "testFn": "typeof renderGreeting === 'function' && output === 'Hello, DevForge!'"
      }
    ]
  },
  {
    "id": "react-2-jsx-syntax-html-inside-javascrip",
    "title": "2. JSX Syntax: HTML Inside JavaScript",
    "slug": "lesson-2-jsx-syntax-html-inside-javascrip",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master JSX Syntax: HTML Inside JavaScript in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "JSX Syntax",
      "React 19"
    ],
    "analogy": "Writing stage directions directly in the margins of a script where actors can read both simultaneously.",
    "explanationMarkdown": "### JSX Syntax: HTML Inside JavaScript\n\nJSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside code files.\n\n```react\nfunction Welcome() {\n  return <h1>Hello React 19!</h1>;\n}\nconst element = Welcome();\n```",
    "workedExample": {
      "title": "Worked Example: JSX Syntax: HTML Inside JavaScript",
      "code": "function Welcome() {\n  return <h1>Hello React 19!</h1>;\n}\nconst element = Welcome();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for JSX Syntax: HTML Inside JavaScript.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of JSX Syntax: HTML Inside JavaScript.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Welcome() {\n  return <h1>Hello React 19!</h1>;\n}\nconst element = Welcome();",
    "hints": [
      "Write:\nfunction Welcome() {\n  return <h1>Hello React 19!</h1>;\n}\nconst element = Welcome();"
    ],
    "testCases": [
      {
        "id": "react-2-tc-1",
        "description": "Verifies correct implementation for JSX Syntax: HTML Inside JavaScript",
        "testFn": "typeof Welcome === 'function'"
      }
    ]
  },
  {
    "id": "react-3-embedding-javascript-expressions",
    "title": "3. Embedding JavaScript Expressions in JSX with {}",
    "slug": "lesson-3-embedding-javascript-expressions",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Embedding JavaScript Expressions in JSX with {} in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Embedding JavaScript Expressions in JSX with {}",
      "React 19"
    ],
    "analogy": "A dynamic fill-in-the-blank form where values from your computer populate bracketed slots.",
    "explanationMarkdown": "### Embedding JavaScript Expressions in JSX with {}\n\nCurly braces `{}` in JSX open a JavaScript window allowing any valid JS expression to be evaluated and rendered.\n\n```react\nfunction UserCard() {\n  const user = 'Alex';\n  return <h2>Member: {user.toUpperCase()}</h2>;\n}\nconst card = UserCard();\n```",
    "workedExample": {
      "title": "Worked Example: Embedding JavaScript Expressions in JSX with {}",
      "code": "function UserCard() {\n  const user = 'Alex';\n  return <h2>Member: {user.toUpperCase()}</h2>;\n}\nconst card = UserCard();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Embedding JavaScript Expressions in JSX with {}.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Embedding JavaScript Expressions in JSX with {}.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function UserCard() {\n  const user = 'Alex';\n  return <h2>Member: {user.toUpperCase()}</h2>;\n}\nconst card = UserCard();",
    "hints": [
      "Write:\nfunction UserCard() {\n  const user = 'Alex';\n  return <h2>Member: {user.toUpperCase()}</h2>;\n}\nconst card = UserCard();"
    ],
    "testCases": [
      {
        "id": "react-3-tc-1",
        "description": "Verifies correct implementation for Embedding JavaScript Expressions in JSX with {}",
        "testFn": "typeof UserCard === 'function'"
      }
    ]
  },
  {
    "id": "react-4-jsx-attribute-conventions-classn",
    "title": "4. JSX Attribute Conventions: className & camelCase",
    "slug": "lesson-4-jsx-attribute-conventions-classn",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master JSX Attribute Conventions: className & camelCase in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "JSX Attribute Conventions",
      "React 19"
    ],
    "analogy": "Adapting foreign words so they conform to the grammar rules of the host language.",
    "explanationMarkdown": "### JSX Attribute Conventions: className & camelCase\n\nBecause `class` is a reserved JavaScript keyword, JSX uses `className`. HTML attributes become camelCase in JSX.\n\n```react\nfunction Avatar() {\n  return <img className=\"avatar-img\" src=\"avatar.png\" alt=\"User\" />;\n}\n```",
    "workedExample": {
      "title": "Worked Example: JSX Attribute Conventions: className & camelCase",
      "code": "function Avatar() {\n  return <img className=\"avatar-img\" src=\"avatar.png\" alt=\"User\" />;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for JSX Attribute Conventions: className & camelCase.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of JSX Attribute Conventions: className & camelCase.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Avatar() {\n  return <img className=\"avatar-img\" src=\"avatar.png\" alt=\"User\" />;\n}",
    "hints": [
      "Write:\nfunction Avatar() {\n  return <img className=\"avatar-img\" src=\"avatar.png\" alt=\"User\" />;\n}"
    ],
    "testCases": [
      {
        "id": "react-4-tc-1",
        "description": "Verifies correct implementation for JSX Attribute Conventions: className & camelCase",
        "testFn": "typeof Avatar === 'function'"
      }
    ]
  },
  {
    "id": "react-5-react-fragments-...-",
    "title": "5. React Fragments (<>...</>)",
    "slug": "lesson-5-react-fragments-...-",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master React Fragments (<>...</>) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React Fragments (<>...</>)",
      "React 19"
    ],
    "analogy": "An invisible cellophane bag bundling items together without adding extra cardboard waste.",
    "explanationMarkdown": "### React Fragments (<>...</>)\n\nFragments let you group a list of children without adding extra wrapper nodes to the DOM.\n\n```react\nfunction PostHeader() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Subtitle</p>\n    </>\n  );\n}\n```",
    "workedExample": {
      "title": "Worked Example: React Fragments (<>...</>)",
      "code": "function PostHeader() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Subtitle</p>\n    </>\n  );\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React Fragments (<>...</>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React Fragments (<>...</>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function PostHeader() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Subtitle</p>\n    </>\n  );\n}",
    "hints": [
      "Write:\nfunction PostHeader() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Subtitle</p>\n    </>\n  );\n}"
    ],
    "testCases": [
      {
        "id": "react-5-tc-1",
        "description": "Verifies correct implementation for React Fragments (<>...</>)",
        "testFn": "typeof PostHeader === 'function'"
      }
    ]
  },
  {
    "id": "react-6-function-components-the-modern-s",
    "title": "6. Function Components: The Modern Standard",
    "slug": "lesson-6-function-components-the-modern-s",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Function Components: The Modern Standard in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Function Components",
      "React 19"
    ],
    "analogy": "A standardized modular Lego brick with designated male and female connection studs.",
    "explanationMarkdown": "### Function Components: The Modern Standard\n\nReact components are pure JavaScript functions that accept props and return JSX elements.\n\n```react\nfunction Header() {\n  return <header>DevForge Academy</header>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Function Components: The Modern Standard",
      "code": "function Header() {\n  return <header>DevForge Academy</header>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Function Components: The Modern Standard.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Function Components: The Modern Standard.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Header() {\n  return <header>DevForge Academy</header>;\n}",
    "hints": [
      "Write:\nfunction Header() {\n  return <header>DevForge Academy</header>;\n}"
    ],
    "testCases": [
      {
        "id": "react-6-tc-1",
        "description": "Verifies correct implementation for Function Components: The Modern Standard",
        "testFn": "typeof Header === 'function'"
      }
    ]
  },
  {
    "id": "react-7-components-as-pure-functions",
    "title": "7. Components as Pure Functions",
    "slug": "lesson-7-components-as-pure-functions",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Components as Pure Functions in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Components as Pure Functions",
      "React 19"
    ],
    "analogy": "A reliable math formula: 2 + 2 always equals 4, with zero surprise side effects on other numbers.",
    "explanationMarkdown": "### Components as Pure Functions\n\nA component must be pure: given the same inputs (props), it should always return the exact same JSX.\n\n```react\nfunction doubleXP(xp) {\n  return xp * 2;\n}\nconst res = doubleXP(50);\n```",
    "workedExample": {
      "title": "Worked Example: Components as Pure Functions",
      "code": "function doubleXP(xp) {\n  return xp * 2;\n}\nconst res = doubleXP(50);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Components as Pure Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Components as Pure Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function doubleXP(xp) {\n  return xp * 2;\n}\nconst res = doubleXP(50);",
    "hints": [
      "Write:\nfunction doubleXP(xp) {\n  return xp * 2;\n}\nconst res = doubleXP(50);"
    ],
    "testCases": [
      {
        "id": "react-7-tc-1",
        "description": "Verifies correct implementation for Components as Pure Functions",
        "testFn": "typeof doubleXP === 'function' && res === 100"
      }
    ]
  },
  {
    "id": "react-8-importing-&-exporting-components",
    "title": "8. Importing & Exporting Components",
    "slug": "lesson-8-importing-&-exporting-components",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Importing & Exporting Components in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Importing & Exporting Components",
      "React 19"
    ],
    "analogy": "Packaging a module into a shipping container so other warehouses can order and use it.",
    "explanationMarkdown": "### Importing & Exporting Components\n\nComponents are exported using ES module syntax (`export default` or named `export`) and imported where needed.\n\n```react\nfunction Button() {\n  return <button>Click me</button>;\n}\nconst ExportedButton = Button;\n```",
    "workedExample": {
      "title": "Worked Example: Importing & Exporting Components",
      "code": "function Button() {\n  return <button>Click me</button>;\n}\nconst ExportedButton = Button;",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Importing & Exporting Components.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Importing & Exporting Components.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Button() {\n  return <button>Click me</button>;\n}\nconst ExportedButton = Button;",
    "hints": [
      "Write:\nfunction Button() {\n  return <button>Click me</button>;\n}\nconst ExportedButton = Button;"
    ],
    "testCases": [
      {
        "id": "react-8-tc-1",
        "description": "Verifies correct implementation for Importing & Exporting Components",
        "testFn": "typeof ExportedButton === 'function'"
      }
    ]
  },
  {
    "id": "react-9-conditional-rendering-with-terna",
    "title": "9. Conditional Rendering with Ternary (? :)",
    "slug": "lesson-9-conditional-rendering-with-terna",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Conditional Rendering with Ternary (? :) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Conditional Rendering with Ternary (?",
      "React 19"
    ],
    "analogy": "A green/red traffic light switching colors depending on electric current flow.",
    "explanationMarkdown": "### Conditional Rendering with Ternary (? :)\n\nUse ternary operators inside JSX to render alternative UI branches cleanly.\n\n```react\nfunction StatusBadge({ isOnline }) {\n  return <span>{isOnline ? 'Online' : 'Offline'}</span>;\n}\nconst onlineView = StatusBadge({ isOnline: true });\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Rendering with Ternary (? :)",
      "code": "function StatusBadge({ isOnline }) {\n  return <span>{isOnline ? 'Online' : 'Offline'}</span>;\n}\nconst onlineView = StatusBadge({ isOnline: true });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Conditional Rendering with Ternary (? :).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Conditional Rendering with Ternary (? :).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function StatusBadge({ isOnline }) {\n  return <span>{isOnline ? 'Online' : 'Offline'}</span>;\n}\nconst onlineView = StatusBadge({ isOnline: true });",
    "hints": [
      "Write:\nfunction StatusBadge({ isOnline }) {\n  return <span>{isOnline ? 'Online' : 'Offline'}</span>;\n}\nconst onlineView = StatusBadge({ isOnline: true });"
    ],
    "testCases": [
      {
        "id": "react-9-tc-1",
        "description": "Verifies correct implementation for Conditional Rendering with Ternary (? :)",
        "testFn": "typeof StatusBadge === 'function'"
      }
    ]
  },
  {
    "id": "react-10-conditional-rendering-with-logic",
    "title": "10. Conditional Rendering with Logical AND (&&)",
    "slug": "lesson-10-conditional-rendering-with-logic",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Conditional Rendering with Logical AND (&&) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Conditional Rendering with Logical AND (&&)",
      "React 19"
    ],
    "analogy": "A neon 'Open' sign that only glows if the master power switch is turned on.",
    "explanationMarkdown": "### Conditional Rendering with Logical AND (&&)\n\nThe `condition && <JSX>` pattern renders the element only if the condition evaluates to true.\n\n```react\nfunction Notification({ count }) {\n  return <div>{count > 0 && <span className=\"badge\">{count}</span>}</div>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Rendering with Logical AND (&&)",
      "code": "function Notification({ count }) {\n  return <div>{count > 0 && <span className=\"badge\">{count}</span>}</div>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Conditional Rendering with Logical AND (&&).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Conditional Rendering with Logical AND (&&).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Notification({ count }) {\n  return <div>{count > 0 && <span className=\"badge\">{count}</span>}</div>;\n}",
    "hints": [
      "Write:\nfunction Notification({ count }) {\n  return <div>{count > 0 && <span className=\"badge\">{count}</span>}</div>;\n}"
    ],
    "testCases": [
      {
        "id": "react-10-tc-1",
        "description": "Verifies correct implementation for Conditional Rendering with Logical AND (&&)",
        "testFn": "typeof Notification === 'function'"
      }
    ]
  },
  {
    "id": "react-11-rendering-lists-with-array.proto",
    "title": "11. Rendering Lists with Array.prototype.map()",
    "slug": "lesson-11-rendering-lists-with-array.proto",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Rendering Lists with Array.prototype.map() in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Rendering Lists with Array.prototype.map()",
      "React 19"
    ],
    "analogy": "A cookie cutter stamping out identical star-shaped cookies from a sheet of dough.",
    "explanationMarkdown": "### Rendering Lists with Array.prototype.map()\n\nTransform arrays of data into arrays of JSX elements using standard `.map()` calls.\n\n```react\nfunction TechList() {\n  const techs = ['HTML', 'CSS', 'React'];\n  return <ul>{techs.map(t => <li key={t}>{t}</li>)}</ul>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Rendering Lists with Array.prototype.map()",
      "code": "function TechList() {\n  const techs = ['HTML', 'CSS', 'React'];\n  return <ul>{techs.map(t => <li key={t}>{t}</li>)}</ul>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rendering Lists with Array.prototype.map().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rendering Lists with Array.prototype.map().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function TechList() {\n  const techs = ['HTML', 'CSS', 'React'];\n  return <ul>{techs.map(t => <li key={t}>{t}</li>)}</ul>;\n}",
    "hints": [
      "Write:\nfunction TechList() {\n  const techs = ['HTML', 'CSS', 'React'];\n  return <ul>{techs.map(t => <li key={t}>{t}</li>)}</ul>;\n}"
    ],
    "testCases": [
      {
        "id": "react-11-tc-1",
        "description": "Verifies correct implementation for Rendering Lists with Array.prototype.map()",
        "testFn": "typeof TechList === 'function'"
      }
    ]
  },
  {
    "id": "react-12-the-crucial-role-of-keys-in-list",
    "title": "12. The Crucial Role of Keys in Lists",
    "slug": "lesson-12-the-crucial-role-of-keys-in-list",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Crucial Role of Keys in Lists in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Crucial Role of Keys in Lists",
      "React 19"
    ],
    "analogy": "Luggage claim claim check tags: each bag gets a unique barcode so the airport never loses it.",
    "explanationMarkdown": "### The Crucial Role of Keys in Lists\n\nKeys give elements a stable identity so React knows which items changed, were added, or were removed.\n\n```react\nconst items = [{ id: 'item-1', name: 'Book' }];\nconst listElements = items.map(i => ({ key: i.id, label: i.name }));\n```",
    "workedExample": {
      "title": "Worked Example: The Crucial Role of Keys in Lists",
      "code": "const items = [{ id: 'item-1', name: 'Book' }];\nconst listElements = items.map(i => ({ key: i.id, label: i.name }));",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Crucial Role of Keys in Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Crucial Role of Keys in Lists.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "const items = [{ id: 'item-1', name: 'Book' }];\nconst listElements = items.map(i => ({ key: i.id, label: i.name }));",
    "hints": [
      "Write:\nconst items = [{ id: 'item-1', name: 'Book' }];\nconst listElements = items.map(i => ({ key: i.id, label: i.name }));"
    ],
    "testCases": [
      {
        "id": "react-12-tc-1",
        "description": "Verifies correct implementation for The Crucial Role of Keys in Lists",
        "testFn": "Array.isArray(listElements) && listElements[0].key === 'item-1'"
      }
    ]
  },
  {
    "id": "react-13-why-array-index-keys-cause-subtl",
    "title": "13. Why Array Index Keys Cause Subtle Bugs",
    "slug": "lesson-13-why-array-index-keys-cause-subtl",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Why Array Index Keys Cause Subtle Bugs in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Why Array Index Keys Cause Subtle Bugs",
      "React 19"
    ],
    "analogy": "Assigning seat numbers based on line arrival: if someone cuts the line, everyone's tickets get scrambled.",
    "explanationMarkdown": "### Why Array Index Keys Cause Subtle Bugs\n\nUsing array indices as keys leads to state bugs during deletions or reordering. Always prefer unique IDs.\n\n```react\nfunction validateKey(id) {\n  return typeof id === 'string' && id.length > 0 && !id.startsWith('index-');\n}\nconst valid = validateKey('usr-101');\n```",
    "workedExample": {
      "title": "Worked Example: Why Array Index Keys Cause Subtle Bugs",
      "code": "function validateKey(id) {\n  return typeof id === 'string' && id.length > 0 && !id.startsWith('index-');\n}\nconst valid = validateKey('usr-101');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Array Index Keys Cause Subtle Bugs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Array Index Keys Cause Subtle Bugs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function validateKey(id) {\n  return typeof id === 'string' && id.length > 0 && !id.startsWith('index-');\n}\nconst valid = validateKey('usr-101');",
    "hints": [
      "Write:\nfunction validateKey(id) {\n  return typeof id === 'string' && id.length > 0 && !id.startsWith('index-');\n}\nconst valid = validateKey('usr-101');"
    ],
    "testCases": [
      {
        "id": "react-13-tc-1",
        "description": "Verifies correct implementation for Why Array Index Keys Cause Subtle Bugs",
        "testFn": "typeof validateKey === 'function' && valid === true"
      }
    ]
  },
  {
    "id": "react-14-jsx-under-the-hood-react.createe",
    "title": "14. JSX Under the Hood: React.createElement",
    "slug": "lesson-14-jsx-under-the-hood-react.createe",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master JSX Under the Hood: React.createElement in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "JSX Under the Hood",
      "React 19"
    ],
    "analogy": "A script translated into binary bytecode before execution.",
    "explanationMarkdown": "### JSX Under the Hood: React.createElement\n\nBabel and Vite transpile JSX into `React.createElement` or `_jsx` calls that construct lightweight virtual DOM objects.\n\n```react\nfunction createElementMock(type, props, children) {\n  return { type, props: { ...props, children } };\n}\nconst vdom = createElementMock('h1', { id: 'title' }, 'Hello');\n```",
    "workedExample": {
      "title": "Worked Example: JSX Under the Hood: React.createElement",
      "code": "function createElementMock(type, props, children) {\n  return { type, props: { ...props, children } };\n}\nconst vdom = createElementMock('h1', { id: 'title' }, 'Hello');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for JSX Under the Hood: React.createElement.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of JSX Under the Hood: React.createElement.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createElementMock(type, props, children) {\n  return { type, props: { ...props, children } };\n}\nconst vdom = createElementMock('h1', { id: 'title' }, 'Hello');",
    "hints": [
      "Write:\nfunction createElementMock(type, props, children) {\n  return { type, props: { ...props, children } };\n}\nconst vdom = createElementMock('h1', { id: 'title' }, 'Hello');"
    ],
    "testCases": [
      {
        "id": "react-14-tc-1",
        "description": "Verifies correct implementation for JSX Under the Hood: React.createElement",
        "testFn": "vdom.type === 'h1' && vdom.props.id === 'title'"
      }
    ]
  },
  {
    "id": "react-15-module-1-review-component-archit",
    "title": "15. Module 1 Review: Component Architecture",
    "slug": "lesson-15-module-1-review-component-archit",
    "language": "react",
    "category": "Module 1: React Fundamentals & JSX",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: Component Architecture in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Module 1 Review",
      "React 19"
    ],
    "analogy": "The foundation and framing of a house ready for interior fixtures.",
    "explanationMarkdown": "### Module 1 Review: Component Architecture\n\nA solid foundation combining JSX, pure functions, conditional rendering, and key-mapped lists.\n\n```react\nfunction AppShell() {\n  return <main className=\"app\"><h1>DevForge</h1></main>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: Component Architecture",
      "code": "function AppShell() {\n  return <main className=\"app\"><h1>DevForge</h1></main>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 1 Review: Component Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 1 Review: Component Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function AppShell() {\n  return <main className=\"app\"><h1>DevForge</h1></main>;\n}",
    "hints": [
      "Write:\nfunction AppShell() {\n  return <main className=\"app\"><h1>DevForge</h1></main>;\n}"
    ],
    "testCases": [
      {
        "id": "react-15-tc-1",
        "description": "Verifies correct implementation for Module 1 Review: Component Architecture",
        "testFn": "typeof AppShell === 'function'"
      }
    ]
  },
  {
    "id": "react-16-passing-props-to-child-component",
    "title": "16. Passing Props to Child Components",
    "slug": "lesson-16-passing-props-to-child-component",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Passing Props to Child Components in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Passing Props to Child Components",
      "React 19"
    ],
    "analogy": "Passing ingredients into a bread baking machine.",
    "explanationMarkdown": "### Passing Props to Child Components\n\nProps (properties) are read-only inputs passed from parent components down to child components.\n\n```react\nfunction Welcome(props) {\n  return <h2>Welcome, {props.username}</h2>;\n}\nconst res = Welcome({ username: 'Sam' });\n```",
    "workedExample": {
      "title": "Worked Example: Passing Props to Child Components",
      "code": "function Welcome(props) {\n  return <h2>Welcome, {props.username}</h2>;\n}\nconst res = Welcome({ username: 'Sam' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Passing Props to Child Components.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Passing Props to Child Components.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Welcome(props) {\n  return <h2>Welcome, {props.username}</h2>;\n}\nconst res = Welcome({ username: 'Sam' });",
    "hints": [
      "Write:\nfunction Welcome(props) {\n  return <h2>Welcome, {props.username}</h2>;\n}\nconst res = Welcome({ username: 'Sam' });"
    ],
    "testCases": [
      {
        "id": "react-16-tc-1",
        "description": "Verifies correct implementation for Passing Props to Child Components",
        "testFn": "typeof Welcome === 'function'"
      }
    ]
  },
  {
    "id": "react-17-destructuring-props-in-function-",
    "title": "17. Destructuring Props in Function Signatures",
    "slug": "lesson-17-destructuring-props-in-function-",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Destructuring Props in Function Signatures in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Destructuring Props in Function Signatures",
      "React 19"
    ],
    "analogy": "Unpacking a delivery box on your kitchen counter rather than rummaging through the whole box every time.",
    "explanationMarkdown": "### Destructuring Props in Function Signatures\n\nDestructuring unpacks specific prop fields directly in the parameter list for cleaner, concise code.\n\n```react\nfunction ProfileCard({ name, role }) {\n  return <div>{name} - {role}</div>;\n}\nconst res = ProfileCard({ name: 'Alex', role: 'Dev' });\n```",
    "workedExample": {
      "title": "Worked Example: Destructuring Props in Function Signatures",
      "code": "function ProfileCard({ name, role }) {\n  return <div>{name} - {role}</div>;\n}\nconst res = ProfileCard({ name: 'Alex', role: 'Dev' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Destructuring Props in Function Signatures.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Destructuring Props in Function Signatures.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ProfileCard({ name, role }) {\n  return <div>{name} - {role}</div>;\n}\nconst res = ProfileCard({ name: 'Alex', role: 'Dev' });",
    "hints": [
      "Write:\nfunction ProfileCard({ name, role }) {\n  return <div>{name} - {role}</div>;\n}\nconst res = ProfileCard({ name: 'Alex', role: 'Dev' });"
    ],
    "testCases": [
      {
        "id": "react-17-tc-1",
        "description": "Verifies correct implementation for Destructuring Props in Function Signatures",
        "testFn": "typeof ProfileCard === 'function'"
      }
    ]
  },
  {
    "id": "react-18-default-prop-values",
    "title": "18. Default Prop Values",
    "slug": "lesson-18-default-prop-values",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Default Prop Values in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Default Prop Values",
      "React 19"
    ],
    "analogy": "Default thermostat temperature: operates at 70\u00b0F unless you explicitly dial a new temperature.",
    "explanationMarkdown": "### Default Prop Values\n\nES6 default parameters allow components to fallback gracefully if a prop is not provided.\n\n```react\nfunction Avatar({ size = 48, src }) {\n  return <img width={size} height={size} src={src} />;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Default Prop Values",
      "code": "function Avatar({ size = 48, src }) {\n  return <img width={size} height={size} src={src} />;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Default Prop Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Default Prop Values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Avatar({ size = 48, src }) {\n  return <img width={size} height={size} src={src} />;\n}",
    "hints": [
      "Write:\nfunction Avatar({ size = 48, src }) {\n  return <img width={size} height={size} src={src} />;\n}"
    ],
    "testCases": [
      {
        "id": "react-18-tc-1",
        "description": "Verifies correct implementation for Default Prop Values",
        "testFn": "typeof Avatar === 'function'"
      }
    ]
  },
  {
    "id": "react-19-the-special-children-prop",
    "title": "19. The Special children Prop",
    "slug": "lesson-19-the-special-children-prop",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Special children Prop in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Special children Prop",
      "React 19"
    ],
    "analogy": "A picture frame: it holds whatever painting, photo, or sketch you place inside its borders.",
    "explanationMarkdown": "### The Special children Prop\n\n`props.children` allows components to act as layout wrappers, nesting arbitrary JSX inside them.\n\n```react\nfunction Card({ children }) {\n  return <div className=\"card-box\">{children}</div>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Special children Prop",
      "code": "function Card({ children }) {\n  return <div className=\"card-box\">{children}</div>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Special children Prop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Special children Prop.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Card({ children }) {\n  return <div className=\"card-box\">{children}</div>;\n}",
    "hints": [
      "Write:\nfunction Card({ children }) {\n  return <div className=\"card-box\">{children}</div>;\n}"
    ],
    "testCases": [
      {
        "id": "react-19-tc-1",
        "description": "Verifies correct implementation for The Special children Prop",
        "testFn": "typeof Card === 'function'"
      }
    ]
  },
  {
    "id": "react-20-passing-functions-as-props-callb",
    "title": "20. Passing Functions as Props (Callbacks)",
    "slug": "lesson-20-passing-functions-as-props-callb",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Passing Functions as Props (Callbacks) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Passing Functions as Props (Callbacks)",
      "React 19"
    ],
    "analogy": "Handing someone a walkie-talkie with a button: when they press it, your station responds.",
    "explanationMarkdown": "### Passing Functions as Props (Callbacks)\n\nParents pass callback functions to child components to handle user interaction events.\n\n```react\nfunction ActionButton({ onClick, label }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Passing Functions as Props (Callbacks)",
      "code": "function ActionButton({ onClick, label }) {\n  return <button onClick={onClick}>{label}</button>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Passing Functions as Props (Callbacks).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Passing Functions as Props (Callbacks).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ActionButton({ onClick, label }) {\n  return <button onClick={onClick}>{label}</button>;\n}",
    "hints": [
      "Write:\nfunction ActionButton({ onClick, label }) {\n  return <button onClick={onClick}>{label}</button>;\n}"
    ],
    "testCases": [
      {
        "id": "react-20-tc-1",
        "description": "Verifies correct implementation for Passing Functions as Props (Callbacks)",
        "testFn": "typeof ActionButton === 'function'"
      }
    ]
  },
  {
    "id": "react-21-lifting-events-from-child-to-par",
    "title": "21. Lifting Events from Child to Parent",
    "slug": "lesson-21-lifting-events-from-child-to-par",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Lifting Events from Child to Parent in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Lifting Events from Child to Parent",
      "React 19"
    ],
    "analogy": "A child ringing the front doorbell to notify the parents in the living room.",
    "explanationMarkdown": "### Lifting Events from Child to Parent\n\nChild components notify parents of events by invoking callback props with relevant payload data.\n\n```react\nfunction CounterButton({ onIncrement }) {\n  return <button onClick={() => onIncrement(1)}>+1</button>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Lifting Events from Child to Parent",
      "code": "function CounterButton({ onIncrement }) {\n  return <button onClick={() => onIncrement(1)}>+1</button>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lifting Events from Child to Parent.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lifting Events from Child to Parent.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function CounterButton({ onIncrement }) {\n  return <button onClick={() => onIncrement(1)}>+1</button>;\n}",
    "hints": [
      "Write:\nfunction CounterButton({ onIncrement }) {\n  return <button onClick={() => onIncrement(1)}>+1</button>;\n}"
    ],
    "testCases": [
      {
        "id": "react-21-tc-1",
        "description": "Verifies correct implementation for Lifting Events from Child to Parent",
        "testFn": "typeof CounterButton === 'function'"
      }
    ]
  },
  {
    "id": "react-22-prop-spreading-with-{...props}",
    "title": "22. Prop Spreading with {...props}",
    "slug": "lesson-22-prop-spreading-with-{...props}",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Prop Spreading with {...props} in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Prop Spreading with {...props}",
      "React 19"
    ],
    "analogy": "Passing an entire envelope of documents through to the next desk without opening it.",
    "explanationMarkdown": "### Prop Spreading with {...props}\n\nThe spread operator `{...props}` forwards all remaining attributes directly to underlying DOM elements.\n\n```react\nfunction Input(props) {\n  return <input className=\"form-input\" {...props} />;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Prop Spreading with {...props}",
      "code": "function Input(props) {\n  return <input className=\"form-input\" {...props} />;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Prop Spreading with {...props}.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Prop Spreading with {...props}.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Input(props) {\n  return <input className=\"form-input\" {...props} />;\n}",
    "hints": [
      "Write:\nfunction Input(props) {\n  return <input className=\"form-input\" {...props} />;\n}"
    ],
    "testCases": [
      {
        "id": "react-22-tc-1",
        "description": "Verifies correct implementation for Prop Spreading with {...props}",
        "testFn": "typeof Input === 'function'"
      }
    ]
  },
  {
    "id": "react-23-the-prop-drilling-challenge",
    "title": "23. The Prop Drilling Challenge",
    "slug": "lesson-23-the-prop-drilling-challenge",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Prop Drilling Challenge in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Prop Drilling Challenge",
      "React 19"
    ],
    "analogy": "Passing a bucket of water down a human chain of 10 people just to water one plant at the end.",
    "explanationMarkdown": "### The Prop Drilling Challenge\n\nProp drilling happens when props must be passed through intermediate components that don't need them.\n\n```react\nfunction GrandParent() {\n  const user = 'Sarah';\n  return { user };\n}\nconst data = GrandParent();\n```",
    "workedExample": {
      "title": "Worked Example: The Prop Drilling Challenge",
      "code": "function GrandParent() {\n  const user = 'Sarah';\n  return { user };\n}\nconst data = GrandParent();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Prop Drilling Challenge.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Prop Drilling Challenge.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function GrandParent() {\n  const user = 'Sarah';\n  return { user };\n}\nconst data = GrandParent();",
    "hints": [
      "Write:\nfunction GrandParent() {\n  const user = 'Sarah';\n  return { user };\n}\nconst data = GrandParent();"
    ],
    "testCases": [
      {
        "id": "react-23-tc-1",
        "description": "Verifies correct implementation for The Prop Drilling Challenge",
        "testFn": "typeof GrandParent === 'function' && data.user === 'Sarah'"
      }
    ]
  },
  {
    "id": "react-24-container-vs-presentational-comp",
    "title": "24. Container vs Presentational Components",
    "slug": "lesson-24-container-vs-presentational-comp",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Container vs Presentational Components in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Container vs Presentational Components",
      "React 19"
    ],
    "analogy": "A chef cooking food in the kitchen (container) vs a waiter presenting the plate at the table (presentational).",
    "explanationMarkdown": "### Container vs Presentational Components\n\nSeparates logic/data fetching from visual rendering for modular, highly testable code.\n\n```react\nfunction UserView({ name, xp }) {\n  return <div>{name}: {xp} XP</div>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Container vs Presentational Components",
      "code": "function UserView({ name, xp }) {\n  return <div>{name}: {xp} XP</div>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container vs Presentational Components.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container vs Presentational Components.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function UserView({ name, xp }) {\n  return <div>{name}: {xp} XP</div>;\n}",
    "hints": [
      "Write:\nfunction UserView({ name, xp }) {\n  return <div>{name}: {xp} XP</div>;\n}"
    ],
    "testCases": [
      {
        "id": "react-24-tc-1",
        "description": "Verifies correct implementation for Container vs Presentational Components",
        "testFn": "typeof UserView === 'function'"
      }
    ]
  },
  {
    "id": "react-25-slot-pattern-with-named-jsx-prop",
    "title": "25. Slot Pattern with Named JSX Props",
    "slug": "lesson-25-slot-pattern-with-named-jsx-prop",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Slot Pattern with Named JSX Props in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Slot Pattern with Named JSX Props",
      "React 19"
    ],
    "analogy": "A desk organizer with dedicated slots labeled: Pens, Notepads, Sticky Notes.",
    "explanationMarkdown": "### Slot Pattern with Named JSX Props\n\nPassing distinct JSX elements via named props (`header`, `footer`) allows flexible multi-slot composition.\n\n```react\nfunction ModalLayout({ header, body, footer }) {\n  return <div className=\"modal\">{header}{body}{footer}</div>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Slot Pattern with Named JSX Props",
      "code": "function ModalLayout({ header, body, footer }) {\n  return <div className=\"modal\">{header}{body}{footer}</div>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Slot Pattern with Named JSX Props.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Slot Pattern with Named JSX Props.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ModalLayout({ header, body, footer }) {\n  return <div className=\"modal\">{header}{body}{footer}</div>;\n}",
    "hints": [
      "Write:\nfunction ModalLayout({ header, body, footer }) {\n  return <div className=\"modal\">{header}{body}{footer}</div>;\n}"
    ],
    "testCases": [
      {
        "id": "react-25-tc-1",
        "description": "Verifies correct implementation for Slot Pattern with Named JSX Props",
        "testFn": "typeof ModalLayout === 'function'"
      }
    ]
  },
  {
    "id": "react-26-specialized-components-pattern",
    "title": "26. Specialized Components Pattern",
    "slug": "lesson-26-specialized-components-pattern",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Specialized Components Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Specialized Components Pattern",
      "React 19"
    ],
    "analogy": "A sports car being a specialized edition of a general automobile chassis.",
    "explanationMarkdown": "### Specialized Components Pattern\n\nCreate specialized variants of generic components by pre-configuring certain props.\n\n```react\nfunction Dialog(props) {\n  return <div className=\"dialog\" {...props} />;\n}\nfunction ConfirmDialog(props) {\n  return <Dialog className=\"dialog-confirm\" {...props} />;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Specialized Components Pattern",
      "code": "function Dialog(props) {\n  return <div className=\"dialog\" {...props} />;\n}\nfunction ConfirmDialog(props) {\n  return <Dialog className=\"dialog-confirm\" {...props} />;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Specialized Components Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Specialized Components Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function Dialog(props) {\n  return <div className=\"dialog\" {...props} />;\n}\nfunction ConfirmDialog(props) {\n  return <Dialog className=\"dialog-confirm\" {...props} />;\n}",
    "hints": [
      "Write:\nfunction Dialog(props) {\n  return <div className=\"dialog\" {...props} />;\n}\nfunction ConfirmDialog(props) {\n  return <Dialog className=\"dialog-confirm\" {...props} />;\n}"
    ],
    "testCases": [
      {
        "id": "react-26-tc-1",
        "description": "Verifies correct implementation for Specialized Components Pattern",
        "testFn": "typeof ConfirmDialog === 'function'"
      }
    ]
  },
  {
    "id": "react-27-render-props-pattern",
    "title": "27. Render Props Pattern",
    "slug": "lesson-27-render-props-pattern",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Render Props Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Render Props Pattern",
      "React 19"
    ],
    "analogy": "Hiring a chauffeur: you supply the destination instructions, and they drive the vehicle.",
    "explanationMarkdown": "### Render Props Pattern\n\nA render prop is a function prop that a component uses to know what to render dynamically.\n\n```react\nfunction MouseTracker({ render }) {\n  const coords = { x: 100, y: 200 };\n  return render(coords);\n}\nconst res = MouseTracker({ render: c => `(${c.x}, ${c.y})` });\n```",
    "workedExample": {
      "title": "Worked Example: Render Props Pattern",
      "code": "function MouseTracker({ render }) {\n  const coords = { x: 100, y: 200 };\n  return render(coords);\n}\nconst res = MouseTracker({ render: c => `(${c.x}, ${c.y})` });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Render Props Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Render Props Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function MouseTracker({ render }) {\n  const coords = { x: 100, y: 200 };\n  return render(coords);\n}\nconst res = MouseTracker({ render: c => `(${c.x}, ${c.y})` });",
    "hints": [
      "Write:\nfunction MouseTracker({ render }) {\n  const coords = { x: 100, y: 200 };\n  return render(coords);\n}\nconst res = MouseTracker({ render: c => `(${c.x}, ${c.y})` });"
    ],
    "testCases": [
      {
        "id": "react-27-tc-1",
        "description": "Verifies correct implementation for Render Props Pattern",
        "testFn": "typeof MouseTracker === 'function' && res === '(100, 200)'"
      }
    ]
  },
  {
    "id": "react-28-immutable-props-rule",
    "title": "28. Immutable Props Rule",
    "slug": "lesson-28-immutable-props-rule",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Immutable Props Rule in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Immutable Props Rule",
      "React 19"
    ],
    "analogy": "A sealed notarized contract: you can read it, but you must never cross out and edit the text.",
    "explanationMarkdown": "### Immutable Props Rule\n\nProps are strictly read-only. Never mutate props directly; pass new values from state instead.\n\n```react\nfunction processProps(props) {\n  return { ...props, processed: true };\n}\nconst res = processProps({ id: 1 });\n```",
    "workedExample": {
      "title": "Worked Example: Immutable Props Rule",
      "code": "function processProps(props) {\n  return { ...props, processed: true };\n}\nconst res = processProps({ id: 1 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Immutable Props Rule.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Immutable Props Rule.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function processProps(props) {\n  return { ...props, processed: true };\n}\nconst res = processProps({ id: 1 });",
    "hints": [
      "Write:\nfunction processProps(props) {\n  return { ...props, processed: true };\n}\nconst res = processProps({ id: 1 });"
    ],
    "testCases": [
      {
        "id": "react-28-tc-1",
        "description": "Verifies correct implementation for Immutable Props Rule",
        "testFn": "typeof processProps === 'function' && res.processed === true"
      }
    ]
  },
  {
    "id": "react-29-props-validation-concepts",
    "title": "29. Props Validation Concepts",
    "slug": "lesson-29-props-validation-concepts",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Props Validation Concepts in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Props Validation Concepts",
      "React 19"
    ],
    "analogy": "A bouncer checking IDs at the club door to ensure all required fields are present.",
    "explanationMarkdown": "### Props Validation Concepts\n\nTypeScript interfaces or PropTypes enforce prop types at build or runtime, catching bugs early.\n\n```react\nfunction validateUser(props) {\n  if (!props.username) throw new Error('Missing username');\n  return true;\n}\nconst ok = validateUser({ username: 'Sarah' });\n```",
    "workedExample": {
      "title": "Worked Example: Props Validation Concepts",
      "code": "function validateUser(props) {\n  if (!props.username) throw new Error('Missing username');\n  return true;\n}\nconst ok = validateUser({ username: 'Sarah' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Props Validation Concepts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Props Validation Concepts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function validateUser(props) {\n  if (!props.username) throw new Error('Missing username');\n  return true;\n}\nconst ok = validateUser({ username: 'Sarah' });",
    "hints": [
      "Write:\nfunction validateUser(props) {\n  if (!props.username) throw new Error('Missing username');\n  return true;\n}\nconst ok = validateUser({ username: 'Sarah' });"
    ],
    "testCases": [
      {
        "id": "react-29-tc-1",
        "description": "Verifies correct implementation for Props Validation Concepts",
        "testFn": "typeof validateUser === 'function' && ok === true"
      }
    ]
  },
  {
    "id": "react-30-module-2-review-clean-compositio",
    "title": "30. Module 2 Review: Clean Composition",
    "slug": "lesson-30-module-2-review-clean-compositio",
    "language": "react",
    "category": "Module 2: Props & Component Composition",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 2 Review: Clean Composition in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Module 2 Review",
      "React 19"
    ],
    "analogy": "A modular shipping container with standardized mounting points.",
    "explanationMarkdown": "### Module 2 Review: Clean Composition\n\nMastering component composition and props makes code reusable, maintainable, and elegant.\n\n```react\nfunction CardShell({ title, children }) {\n  return <article><h3>{title}</h3><div>{children}</div></article>;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Clean Composition",
      "code": "function CardShell({ title, children }) {\n  return <article><h3>{title}</h3><div>{children}</div></article>;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 2 Review: Clean Composition.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 2 Review: Clean Composition.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function CardShell({ title, children }) {\n  return <article><h3>{title}</h3><div>{children}</div></article>;\n}",
    "hints": [
      "Write:\nfunction CardShell({ title, children }) {\n  return <article><h3>{title}</h3><div>{children}</div></article>;\n}"
    ],
    "testCases": [
      {
        "id": "react-30-tc-1",
        "description": "Verifies correct implementation for Module 2 Review: Clean Composition",
        "testFn": "typeof CardShell === 'function'"
      }
    ]
  },
  {
    "id": "react-31-the-usestate-hook-component-memo",
    "title": "31. The useState Hook: Component Memory",
    "slug": "lesson-31-the-usestate-hook-component-memo",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The useState Hook: Component Memory in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useState Hook",
      "React 19"
    ],
    "analogy": "A whiteboard in a conference room: keeping track of meeting decisions between presentations.",
    "explanationMarkdown": "### The useState Hook: Component Memory\n\n`useState` gives components persistent memory across re-renders.\n\n```react\nfunction createCounter(initial = 0) {\n  let count = initial;\n  const setCount = (val) => { count = val; return count; };\n  return [() => count, setCount];\n}\nconst [getCount, setCount] = createCounter(5);\n```",
    "workedExample": {
      "title": "Worked Example: The useState Hook: Component Memory",
      "code": "function createCounter(initial = 0) {\n  let count = initial;\n  const setCount = (val) => { count = val; return count; };\n  return [() => count, setCount];\n}\nconst [getCount, setCount] = createCounter(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useState Hook: Component Memory.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useState Hook: Component Memory.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createCounter(initial = 0) {\n  let count = initial;\n  const setCount = (val) => { count = val; return count; };\n  return [() => count, setCount];\n}\nconst [getCount, setCount] = createCounter(5);",
    "hints": [
      "Write:\nfunction createCounter(initial = 0) {\n  let count = initial;\n  const setCount = (val) => { count = val; return count; };\n  return [() => count, setCount];\n}\nconst [getCount, setCount] = createCounter(5);"
    ],
    "testCases": [
      {
        "id": "react-31-tc-1",
        "description": "Verifies correct implementation for The useState Hook: Component Memory",
        "testFn": "typeof createCounter === 'function' && getCount() === 5"
      }
    ]
  },
  {
    "id": "react-32-state-vs-normal-variables",
    "title": "32. State vs Normal Variables",
    "slug": "lesson-32-state-vs-normal-variables",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master State vs Normal Variables in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "State vs Normal Variables",
      "React 19"
    ],
    "analogy": "A thought in your head that disappears when you fall asleep vs writing it down in a journal.",
    "explanationMarkdown": "### State vs Normal Variables\n\nNormal variables reset every time a component function executes; state survives re-renders.\n\n```react\nfunction compareStateVsVar() {\n  let normalVar = 0;\n  normalVar += 1;\n  return normalVar;\n}\nconst val = compareStateVsVar();\n```",
    "workedExample": {
      "title": "Worked Example: State vs Normal Variables",
      "code": "function compareStateVsVar() {\n  let normalVar = 0;\n  normalVar += 1;\n  return normalVar;\n}\nconst val = compareStateVsVar();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for State vs Normal Variables.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of State vs Normal Variables.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function compareStateVsVar() {\n  let normalVar = 0;\n  normalVar += 1;\n  return normalVar;\n}\nconst val = compareStateVsVar();",
    "hints": [
      "Write:\nfunction compareStateVsVar() {\n  let normalVar = 0;\n  normalVar += 1;\n  return normalVar;\n}\nconst val = compareStateVsVar();"
    ],
    "testCases": [
      {
        "id": "react-32-tc-1",
        "description": "Verifies correct implementation for State vs Normal Variables",
        "testFn": "typeof compareStateVsVar === 'function' && val === 1"
      }
    ]
  },
  {
    "id": "react-33-updating-state-triggers-re-rende",
    "title": "33. Updating State Triggers Re-render",
    "slug": "lesson-33-updating-state-triggers-re-rende",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Updating State Triggers Re-render in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Updating State Triggers Re-render",
      "React 19"
    ],
    "analogy": "Ringing a bell to signal the theater crew to swap out the stage backdrop for the next scene.",
    "explanationMarkdown": "### Updating State Triggers Re-render\n\nCalling the state setter function schedules a re-render with the new state value.\n\n```react\nfunction simulateStateUpdate(oldState, newState) {\n  return { shouldRerender: oldState !== newState, state: newState };\n}\nconst res = simulateStateUpdate(0, 1);\n```",
    "workedExample": {
      "title": "Worked Example: Updating State Triggers Re-render",
      "code": "function simulateStateUpdate(oldState, newState) {\n  return { shouldRerender: oldState !== newState, state: newState };\n}\nconst res = simulateStateUpdate(0, 1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Updating State Triggers Re-render.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Updating State Triggers Re-render.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function simulateStateUpdate(oldState, newState) {\n  return { shouldRerender: oldState !== newState, state: newState };\n}\nconst res = simulateStateUpdate(0, 1);",
    "hints": [
      "Write:\nfunction simulateStateUpdate(oldState, newState) {\n  return { shouldRerender: oldState !== newState, state: newState };\n}\nconst res = simulateStateUpdate(0, 1);"
    ],
    "testCases": [
      {
        "id": "react-33-tc-1",
        "description": "Verifies correct implementation for Updating State Triggers Re-render",
        "testFn": "res.shouldRerender === true && res.state === 1"
      }
    ]
  },
  {
    "id": "react-34-the-functional-updater-prev-=-pr",
    "title": "34. The Functional Updater: prev => prev + 1",
    "slug": "lesson-34-the-functional-updater-prev-=-pr",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Functional Updater: prev => prev + 1 in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Functional Updater",
      "React 19"
    ],
    "analogy": "Depositing checks into an ATM queue: each deposit operates on the exact live balance after previous checks.",
    "explanationMarkdown": "### The Functional Updater: prev => prev + 1\n\nPass an updater function `prev => prev + 1` when the new state depends directly on the previous state.\n\n```react\nfunction incrementState(prev) {\n  return prev + 1;\n}\nlet count = 0;\ncount = incrementState(count);\ncount = incrementState(count);\n```",
    "workedExample": {
      "title": "Worked Example: The Functional Updater: prev => prev + 1",
      "code": "function incrementState(prev) {\n  return prev + 1;\n}\nlet count = 0;\ncount = incrementState(count);\ncount = incrementState(count);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Functional Updater: prev => prev + 1.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Functional Updater: prev => prev + 1.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function incrementState(prev) {\n  return prev + 1;\n}\nlet count = 0;\ncount = incrementState(count);\ncount = incrementState(count);",
    "hints": [
      "Write:\nfunction incrementState(prev) {\n  return prev + 1;\n}\nlet count = 0;\ncount = incrementState(count);\ncount = incrementState(count);"
    ],
    "testCases": [
      {
        "id": "react-34-tc-1",
        "description": "Verifies correct implementation for The Functional Updater: prev => prev + 1",
        "testFn": "typeof incrementState === 'function' && count === 2"
      }
    ]
  },
  {
    "id": "react-35-multiple-independent-state-varia",
    "title": "35. Multiple Independent State Variables",
    "slug": "lesson-35-multiple-independent-state-varia",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Multiple Independent State Variables in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Multiple Independent State Variables",
      "React 19"
    ],
    "analogy": "Different meters on a dashboard: speed, fuel, and engine temperature tracked independently.",
    "explanationMarkdown": "### Multiple Independent State Variables\n\nSplit unrelated state into distinct `useState` calls for modularity and clarity.\n\n```react\nfunction initUserState() {\n  return { name: 'Sarah', online: true, score: 100 };\n}\nconst state = initUserState();\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Independent State Variables",
      "code": "function initUserState() {\n  return { name: 'Sarah', online: true, score: 100 };\n}\nconst state = initUserState();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Independent State Variables.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Independent State Variables.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function initUserState() {\n  return { name: 'Sarah', online: true, score: 100 };\n}\nconst state = initUserState();",
    "hints": [
      "Write:\nfunction initUserState() {\n  return { name: 'Sarah', online: true, score: 100 };\n}\nconst state = initUserState();"
    ],
    "testCases": [
      {
        "id": "react-35-tc-1",
        "description": "Verifies correct implementation for Multiple Independent State Variables",
        "testFn": "state.name === 'Sarah' && state.score === 100"
      }
    ]
  },
  {
    "id": "react-36-managing-object-state-with-objec",
    "title": "36. Managing Object State with Object Spread",
    "slug": "lesson-36-managing-object-state-with-objec",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Managing Object State with Object Spread in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Managing Object State with Object Spread",
      "React 19"
    ],
    "analogy": "Photocopying a document and editing one paragraph while keeping all other text untouched.",
    "explanationMarkdown": "### Managing Object State with Object Spread\n\nAlways copy existing object properties with `{...prev}` when updating nested object state.\n\n```react\nfunction updateUserBio(user, newBio) {\n  return { ...user, bio: newBio };\n}\nconst updated = updateUserBio({ id: 1, bio: 'old' }, 'new');\n```",
    "workedExample": {
      "title": "Worked Example: Managing Object State with Object Spread",
      "code": "function updateUserBio(user, newBio) {\n  return { ...user, bio: newBio };\n}\nconst updated = updateUserBio({ id: 1, bio: 'old' }, 'new');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Managing Object State with Object Spread.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Managing Object State with Object Spread.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function updateUserBio(user, newBio) {\n  return { ...user, bio: newBio };\n}\nconst updated = updateUserBio({ id: 1, bio: 'old' }, 'new');",
    "hints": [
      "Write:\nfunction updateUserBio(user, newBio) {\n  return { ...user, bio: newBio };\n}\nconst updated = updateUserBio({ id: 1, bio: 'old' }, 'new');"
    ],
    "testCases": [
      {
        "id": "react-36-tc-1",
        "description": "Verifies correct implementation for Managing Object State with Object Spread",
        "testFn": "updated.id === 1 && updated.bio === 'new'"
      }
    ]
  },
  {
    "id": "react-37-managing-array-state-without-mut",
    "title": "37. Managing Array State Without Mutations",
    "slug": "lesson-37-managing-array-state-without-mut",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Managing Array State Without Mutations in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Managing Array State Without Mutations",
      "React 19"
    ],
    "analogy": "Baking a fresh new loaf of bread instead of trying to stuff raisins into an already-baked loaf.",
    "explanationMarkdown": "### Managing Array State Without Mutations\n\nNever mutate arrays with `.push()`; use non-mutating methods like `[...arr, item]`, `.filter()`, and `.map()`.\n\n```react\nfunction addItem(list, item) {\n  return [...list, item];\n}\nconst items = addItem(['A'], 'B');\n```",
    "workedExample": {
      "title": "Worked Example: Managing Array State Without Mutations",
      "code": "function addItem(list, item) {\n  return [...list, item];\n}\nconst items = addItem(['A'], 'B');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Managing Array State Without Mutations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Managing Array State Without Mutations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function addItem(list, item) {\n  return [...list, item];\n}\nconst items = addItem(['A'], 'B');",
    "hints": [
      "Write:\nfunction addItem(list, item) {\n  return [...list, item];\n}\nconst items = addItem(['A'], 'B');"
    ],
    "testCases": [
      {
        "id": "react-37-tc-1",
        "description": "Verifies correct implementation for Managing Array State Without Mutations",
        "testFn": "items.length === 2 && items[1] === 'B'"
      }
    ]
  },
  {
    "id": "react-38-removing-items-with-.filter",
    "title": "38. Removing Items with .filter()",
    "slug": "lesson-38-removing-items-with-.filter",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Removing Items with .filter() in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Removing Items with .filter()",
      "React 19"
    ],
    "analogy": "Sifting pebbles through a strainer to discard unwanted rocks.",
    "explanationMarkdown": "### Removing Items with .filter()\n\n`.filter()` returns a brand-new array excluding the target item, perfect for immutable state removal.\n\n```react\nfunction removeItem(list, idToRemove) {\n  return list.filter(item => item.id !== idToRemove);\n}\nconst items = removeItem([{ id: 1 }, { id: 2 }], 1);\n```",
    "workedExample": {
      "title": "Worked Example: Removing Items with .filter()",
      "code": "function removeItem(list, idToRemove) {\n  return list.filter(item => item.id !== idToRemove);\n}\nconst items = removeItem([{ id: 1 }, { id: 2 }], 1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing Items with .filter().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing Items with .filter().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function removeItem(list, idToRemove) {\n  return list.filter(item => item.id !== idToRemove);\n}\nconst items = removeItem([{ id: 1 }, { id: 2 }], 1);",
    "hints": [
      "Write:\nfunction removeItem(list, idToRemove) {\n  return list.filter(item => item.id !== idToRemove);\n}\nconst items = removeItem([{ id: 1 }, { id: 2 }], 1);"
    ],
    "testCases": [
      {
        "id": "react-38-tc-1",
        "description": "Verifies correct implementation for Removing Items with .filter()",
        "testFn": "items.length === 1 && items[0].id === 2"
      }
    ]
  },
  {
    "id": "react-39-updating-array-items-by-id-with-",
    "title": "39. Updating Array Items by ID with .map()",
    "slug": "lesson-39-updating-array-items-by-id-with-",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Updating Array Items by ID with .map() in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Updating Array Items by ID with .map()",
      "React 19"
    ],
    "analogy": "Walking down a line of light switches and flipping only switch #3.",
    "explanationMarkdown": "### Updating Array Items by ID with .map()\n\nUse `.map()` to return a new array where matching items are cloned with updated properties.\n\n```react\nfunction toggleTodo(todos, id) {\n  return todos.map(t => t.id === id ? { ...t, done: !t.done } : t);\n}\nconst list = toggleTodo([{ id: 1, done: false }], 1);\n```",
    "workedExample": {
      "title": "Worked Example: Updating Array Items by ID with .map()",
      "code": "function toggleTodo(todos, id) {\n  return todos.map(t => t.id === id ? { ...t, done: !t.done } : t);\n}\nconst list = toggleTodo([{ id: 1, done: false }], 1);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Updating Array Items by ID with .map().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Updating Array Items by ID with .map().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function toggleTodo(todos, id) {\n  return todos.map(t => t.id === id ? { ...t, done: !t.done } : t);\n}\nconst list = toggleTodo([{ id: 1, done: false }], 1);",
    "hints": [
      "Write:\nfunction toggleTodo(todos, id) {\n  return todos.map(t => t.id === id ? { ...t, done: !t.done } : t);\n}\nconst list = toggleTodo([{ id: 1, done: false }], 1);"
    ],
    "testCases": [
      {
        "id": "react-39-tc-1",
        "description": "Verifies correct implementation for Updating Array Items by ID with .map()",
        "testFn": "list[0].done === true"
      }
    ]
  },
  {
    "id": "react-40-lifting-state-up-to-common-paren",
    "title": "40. Lifting State Up to Common Parent",
    "slug": "lesson-40-lifting-state-up-to-common-paren",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Lifting State Up to Common Parent in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Lifting State Up to Common Parent",
      "React 19"
    ],
    "analogy": "Moving a shared TV from one child's bedroom out into the central family living room.",
    "explanationMarkdown": "### Lifting State Up to Common Parent\n\nMove shared state to the closest common ancestor so multiple sibling components can sync.\n\n```react\nfunction getSharedCount(count) {\n  return { display: `Count: ${count}`, canReset: count > 0 };\n}\nconst res = getSharedCount(10);\n```",
    "workedExample": {
      "title": "Worked Example: Lifting State Up to Common Parent",
      "code": "function getSharedCount(count) {\n  return { display: `Count: ${count}`, canReset: count > 0 };\n}\nconst res = getSharedCount(10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lifting State Up to Common Parent.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lifting State Up to Common Parent.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function getSharedCount(count) {\n  return { display: `Count: ${count}`, canReset: count > 0 };\n}\nconst res = getSharedCount(10);",
    "hints": [
      "Write:\nfunction getSharedCount(count) {\n  return { display: `Count: ${count}`, canReset: count > 0 };\n}\nconst res = getSharedCount(10);"
    ],
    "testCases": [
      {
        "id": "react-40-tc-1",
        "description": "Verifies correct implementation for Lifting State Up to Common Parent",
        "testFn": "res.display === 'Count: 10' && res.canReset === true"
      }
    ]
  },
  {
    "id": "react-41-derived-state-vs-redundant-state",
    "title": "41. Derived State vs Redundant State",
    "slug": "lesson-41-derived-state-vs-redundant-state",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Derived State vs Redundant State in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Derived State vs Redundant State",
      "React 19"
    ],
    "analogy": "Calculating age from birthdate dynamically instead of having to manually update age every midnight.",
    "explanationMarkdown": "### Derived State vs Redundant State\n\nDon't store values in state if they can be calculated on the fly during rendering!\n\n```react\nfunction calculateTotals(items) {\n  const total = items.reduce((sum, item) => sum + item.price, 0);\n  return { itemCount: items.length, total };\n}\nconst totals = calculateTotals([{ price: 10 }, { price: 20 }]);\n```",
    "workedExample": {
      "title": "Worked Example: Derived State vs Redundant State",
      "code": "function calculateTotals(items) {\n  const total = items.reduce((sum, item) => sum + item.price, 0);\n  return { itemCount: items.length, total };\n}\nconst totals = calculateTotals([{ price: 10 }, { price: 20 }]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Derived State vs Redundant State.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Derived State vs Redundant State.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function calculateTotals(items) {\n  const total = items.reduce((sum, item) => sum + item.price, 0);\n  return { itemCount: items.length, total };\n}\nconst totals = calculateTotals([{ price: 10 }, { price: 20 }]);",
    "hints": [
      "Write:\nfunction calculateTotals(items) {\n  const total = items.reduce((sum, item) => sum + item.price, 0);\n  return { itemCount: items.length, total };\n}\nconst totals = calculateTotals([{ price: 10 }, { price: 20 }]);"
    ],
    "testCases": [
      {
        "id": "react-41-tc-1",
        "description": "Verifies correct implementation for Derived State vs Redundant State",
        "testFn": "totals.itemCount === 2 && totals.total === 30"
      }
    ]
  },
  {
    "id": "react-42-controlled-inputs-value-+-onchan",
    "title": "42. Controlled Inputs: Value + onChange",
    "slug": "lesson-42-controlled-inputs-value-+-onchan",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Controlled Inputs: Value + onChange in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Controlled Inputs",
      "React 19"
    ],
    "analogy": "Driving a car where the steering wheel position strictly mirrors the angle of the front tires.",
    "explanationMarkdown": "### Controlled Inputs: Value + onChange\n\nA controlled input derives its value from React state and updates state via `onChange`.\n\n```react\nfunction handleInputChange(currentVal, newVal) {\n  return newVal;\n}\nconst nextVal = handleInputChange('old', 'new');\n```",
    "workedExample": {
      "title": "Worked Example: Controlled Inputs: Value + onChange",
      "code": "function handleInputChange(currentVal, newVal) {\n  return newVal;\n}\nconst nextVal = handleInputChange('old', 'new');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Controlled Inputs: Value + onChange.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Controlled Inputs: Value + onChange.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function handleInputChange(currentVal, newVal) {\n  return newVal;\n}\nconst nextVal = handleInputChange('old', 'new');",
    "hints": [
      "Write:\nfunction handleInputChange(currentVal, newVal) {\n  return newVal;\n}\nconst nextVal = handleInputChange('old', 'new');"
    ],
    "testCases": [
      {
        "id": "react-42-tc-1",
        "description": "Verifies correct implementation for Controlled Inputs: Value + onChange",
        "testFn": "nextVal === 'new'"
      }
    ]
  },
  {
    "id": "react-43-multi-field-form-handling-patter",
    "title": "43. Multi-Field Form Handling Pattern",
    "slug": "lesson-43-multi-field-form-handling-patter",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Multi-Field Form Handling Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Multi-Field Form Handling Pattern",
      "React 19"
    ],
    "analogy": "A receptionist updating specific labeled boxes on a customer intake form.",
    "explanationMarkdown": "### Multi-Field Form Handling Pattern\n\nUse computed property names `[e.target.name]: e.target.value` to manage entire forms in one state object.\n\n```react\nfunction updateFormField(formData, field, value) {\n  return { ...formData, [field]: value };\n}\nconst form = updateFormField({ email: '' }, 'email', 'user@test.com');\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Field Form Handling Pattern",
      "code": "function updateFormField(formData, field, value) {\n  return { ...formData, [field]: value };\n}\nconst form = updateFormField({ email: '' }, 'email', 'user@test.com');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Field Form Handling Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Field Form Handling Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function updateFormField(formData, field, value) {\n  return { ...formData, [field]: value };\n}\nconst form = updateFormField({ email: '' }, 'email', 'user@test.com');",
    "hints": [
      "Write:\nfunction updateFormField(formData, field, value) {\n  return { ...formData, [field]: value };\n}\nconst form = updateFormField({ email: '' }, 'email', 'user@test.com');"
    ],
    "testCases": [
      {
        "id": "react-43-tc-1",
        "description": "Verifies correct implementation for Multi-Field Form Handling Pattern",
        "testFn": "form.email === 'user@test.com'"
      }
    ]
  },
  {
    "id": "react-44-resetting-state-with-component-k",
    "title": "44. Resetting State with Component Keys",
    "slug": "lesson-44-resetting-state-with-component-k",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Resetting State with Component Keys in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Resetting State with Component Keys",
      "React 19"
    ],
    "analogy": "Wiping a whiteboard clean and hanging a fresh sheet of paper when a new presenter steps up.",
    "explanationMarkdown": "### Resetting State with Component Keys\n\nChanging a component's `key` prop tells React to unmount it and mount a fresh instance with reset state.\n\n```react\nfunction getComponentKey(userId) {\n  return `user-profile-${userId}`;\n}\nconst k = getComponentKey(42);\n```",
    "workedExample": {
      "title": "Worked Example: Resetting State with Component Keys",
      "code": "function getComponentKey(userId) {\n  return `user-profile-${userId}`;\n}\nconst k = getComponentKey(42);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Resetting State with Component Keys.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resetting State with Component Keys.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function getComponentKey(userId) {\n  return `user-profile-${userId}`;\n}\nconst k = getComponentKey(42);",
    "hints": [
      "Write:\nfunction getComponentKey(userId) {\n  return `user-profile-${userId}`;\n}\nconst k = getComponentKey(42);"
    ],
    "testCases": [
      {
        "id": "react-44-tc-1",
        "description": "Verifies correct implementation for Resetting State with Component Keys",
        "testFn": "k === 'user-profile-42'"
      }
    ]
  },
  {
    "id": "react-45-state-batching-in-react-18-&-19",
    "title": "45. State Batching in React 18 & 19",
    "slug": "lesson-45-state-batching-in-react-18-&-19",
    "language": "react",
    "category": "Module 3: State Management with useState",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master State Batching in React 18 & 19 in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "State Batching in React 18 & 19",
      "React 19"
    ],
    "analogy": "A postal worker gathering letters all day and making one combined delivery trip at 4 PM.",
    "explanationMarkdown": "### State Batching in React 18 & 19\n\nReact automatically batches multiple state updates within events and async calls into a single re-render.\n\n```react\nfunction batchUpdates() {\n  return { batched: true, renders: 1 };\n}\nconst b = batchUpdates();\n```",
    "workedExample": {
      "title": "Worked Example: State Batching in React 18 & 19",
      "code": "function batchUpdates() {\n  return { batched: true, renders: 1 };\n}\nconst b = batchUpdates();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for State Batching in React 18 & 19.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of State Batching in React 18 & 19.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function batchUpdates() {\n  return { batched: true, renders: 1 };\n}\nconst b = batchUpdates();",
    "hints": [
      "Write:\nfunction batchUpdates() {\n  return { batched: true, renders: 1 };\n}\nconst b = batchUpdates();"
    ],
    "testCases": [
      {
        "id": "react-45-tc-1",
        "description": "Verifies correct implementation for State Batching in React 18 & 19",
        "testFn": "b.batched === true && b.renders === 1"
      }
    ]
  },
  {
    "id": "react-46-understanding-side-effects-in-re",
    "title": "46. Understanding Side Effects in React",
    "slug": "lesson-46-understanding-side-effects-in-re",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Understanding Side Effects in React in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Understanding Side Effects in React",
      "React 19"
    ],
    "analogy": "Sending a thank-you letter after receiving a wedding gift: an action that interacts with the outside world.",
    "explanationMarkdown": "### Understanding Side Effects in React\n\nSide effects include data fetching, manual DOM mutation, timers, and external subscriptions.\n\n```react\nfunction logSideEffect(action) {\n  return `Effect triggered: ${action}`;\n}\nconst log = logSideEffect('fetch');\n```",
    "workedExample": {
      "title": "Worked Example: Understanding Side Effects in React",
      "code": "function logSideEffect(action) {\n  return `Effect triggered: ${action}`;\n}\nconst log = logSideEffect('fetch');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding Side Effects in React.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding Side Effects in React.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function logSideEffect(action) {\n  return `Effect triggered: ${action}`;\n}\nconst log = logSideEffect('fetch');",
    "hints": [
      "Write:\nfunction logSideEffect(action) {\n  return `Effect triggered: ${action}`;\n}\nconst log = logSideEffect('fetch');"
    ],
    "testCases": [
      {
        "id": "react-46-tc-1",
        "description": "Verifies correct implementation for Understanding Side Effects in React",
        "testFn": "log === 'Effect triggered: fetch'"
      }
    ]
  },
  {
    "id": "react-47-the-useeffect-hook-syntax",
    "title": "47. The useEffect Hook Syntax",
    "slug": "lesson-47-the-useeffect-hook-syntax",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The useEffect Hook Syntax in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useEffect Hook Syntax",
      "React 19"
    ],
    "analogy": "A security sensor programmed to take a snapshot whenever a door opens.",
    "explanationMarkdown": "### The useEffect Hook Syntax\n\n`useEffect(setup, dependencies)` lets you synchronize a component with an external system.\n\n```react\nfunction effectConfig(depArray) {\n  return { deps: depArray, isConfigured: true };\n}\nconst cfg = effectConfig(['id']);\n```",
    "workedExample": {
      "title": "Worked Example: The useEffect Hook Syntax",
      "code": "function effectConfig(depArray) {\n  return { deps: depArray, isConfigured: true };\n}\nconst cfg = effectConfig(['id']);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useEffect Hook Syntax.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useEffect Hook Syntax.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function effectConfig(depArray) {\n  return { deps: depArray, isConfigured: true };\n}\nconst cfg = effectConfig(['id']);",
    "hints": [
      "Write:\nfunction effectConfig(depArray) {\n  return { deps: depArray, isConfigured: true };\n}\nconst cfg = effectConfig(['id']);"
    ],
    "testCases": [
      {
        "id": "react-47-tc-1",
        "description": "Verifies correct implementation for The useEffect Hook Syntax",
        "testFn": "cfg.deps.length === 1 && cfg.isConfigured === true"
      }
    ]
  },
  {
    "id": "react-48-running-on-mount-only-empty-depe",
    "title": "48. Running on Mount Only: Empty Dependencies []",
    "slug": "lesson-48-running-on-mount-only-empty-depe",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Running on Mount Only: Empty Dependencies [] in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Running on Mount Only",
      "React 19"
    ],
    "analogy": "A housewarming party held only on the very first day you move into a new apartment.",
    "explanationMarkdown": "### Running on Mount Only: Empty Dependencies []\n\nPassing an empty dependency array `[]` runs the effect setup function once after initial mount.\n\n```react\nfunction runOnMount() {\n  return { mounted: true, ranOnce: true };\n}\nconst res = runOnMount();\n```",
    "workedExample": {
      "title": "Worked Example: Running on Mount Only: Empty Dependencies []",
      "code": "function runOnMount() {\n  return { mounted: true, ranOnce: true };\n}\nconst res = runOnMount();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Running on Mount Only: Empty Dependencies [].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Running on Mount Only: Empty Dependencies [].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function runOnMount() {\n  return { mounted: true, ranOnce: true };\n}\nconst res = runOnMount();",
    "hints": [
      "Write:\nfunction runOnMount() {\n  return { mounted: true, ranOnce: true };\n}\nconst res = runOnMount();"
    ],
    "testCases": [
      {
        "id": "react-48-tc-1",
        "description": "Verifies correct implementation for Running on Mount Only: Empty Dependencies []",
        "testFn": "res.ranOnce === true"
      }
    ]
  },
  {
    "id": "react-49-running-on-dependency-change-[de",
    "title": "49. Running on Dependency Change: [dep1, dep2]",
    "slug": "lesson-49-running-on-dependency-change-[de",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Running on Dependency Change: [dep1, dep2] in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Running on Dependency Change",
      "React 19"
    ],
    "analogy": "A motion detector camera firing only when it detects physical motion.",
    "explanationMarkdown": "### Running on Dependency Change: [dep1, dep2]\n\nReact compares dependencies with `Object.is`. If any dependency changed since last render, the effect re-runs.\n\n```react\nfunction shouldRunEffect(prevDeps, nextDeps) {\n  return prevDeps.some((dep, i) => !Object.is(dep, nextDeps[i]));\n}\nconst changed = shouldRunEffect([1], [2]);\n```",
    "workedExample": {
      "title": "Worked Example: Running on Dependency Change: [dep1, dep2]",
      "code": "function shouldRunEffect(prevDeps, nextDeps) {\n  return prevDeps.some((dep, i) => !Object.is(dep, nextDeps[i]));\n}\nconst changed = shouldRunEffect([1], [2]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Running on Dependency Change: [dep1, dep2].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Running on Dependency Change: [dep1, dep2].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function shouldRunEffect(prevDeps, nextDeps) {\n  return prevDeps.some((dep, i) => !Object.is(dep, nextDeps[i]));\n}\nconst changed = shouldRunEffect([1], [2]);",
    "hints": [
      "Write:\nfunction shouldRunEffect(prevDeps, nextDeps) {\n  return prevDeps.some((dep, i) => !Object.is(dep, nextDeps[i]));\n}\nconst changed = shouldRunEffect([1], [2]);"
    ],
    "testCases": [
      {
        "id": "react-49-tc-1",
        "description": "Verifies correct implementation for Running on Dependency Change: [dep1, dep2]",
        "testFn": "changed === true"
      }
    ]
  },
  {
    "id": "react-50-effect-cleanup-functions",
    "title": "50. Effect Cleanup Functions",
    "slug": "lesson-50-effect-cleanup-functions",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Effect Cleanup Functions in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Effect Cleanup Functions",
      "React 19"
    ],
    "analogy": "Turning off the kitchen stove and locking the front door before leaving the house.",
    "explanationMarkdown": "### Effect Cleanup Functions\n\nThe cleanup function runs before the effect re-runs with new values, and when the component unmounts.\n\n```react\nfunction setupSubscription() {\n  return function cleanup() { return 'unsubscribed'; };\n}\nconst cleanupFn = setupSubscription();\n```",
    "workedExample": {
      "title": "Worked Example: Effect Cleanup Functions",
      "code": "function setupSubscription() {\n  return function cleanup() { return 'unsubscribed'; };\n}\nconst cleanupFn = setupSubscription();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Effect Cleanup Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Effect Cleanup Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function setupSubscription() {\n  return function cleanup() { return 'unsubscribed'; };\n}\nconst cleanupFn = setupSubscription();",
    "hints": [
      "Write:\nfunction setupSubscription() {\n  return function cleanup() { return 'unsubscribed'; };\n}\nconst cleanupFn = setupSubscription();"
    ],
    "testCases": [
      {
        "id": "react-50-tc-1",
        "description": "Verifies correct implementation for Effect Cleanup Functions",
        "testFn": "typeof cleanupFn === 'function' && cleanupFn() === 'unsubscribed'"
      }
    ]
  },
  {
    "id": "react-51-fetching-data-with-useeffect-&-f",
    "title": "51. Fetching Data with useEffect & Fetch API",
    "slug": "lesson-51-fetching-data-with-useeffect-&-f",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Fetching Data with useEffect & Fetch API in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Fetching Data with useEffect & Fetch API",
      "React 19"
    ],
    "analogy": "Sending a courier to the central archive to retrieve a client's records upon request.",
    "explanationMarkdown": "### Fetching Data with useEffect & Fetch API\n\nFetch data inside useEffect, setting local state when the network promise resolves.\n\n```react\nasync function mockFetchData(url) {\n  return { data: 'records', from: url };\n}\nconst fetchPromise = mockFetchData('/api/courses');\n```",
    "workedExample": {
      "title": "Worked Example: Fetching Data with useEffect & Fetch API",
      "code": "async function mockFetchData(url) {\n  return { data: 'records', from: url };\n}\nconst fetchPromise = mockFetchData('/api/courses');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fetching Data with useEffect & Fetch API.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fetching Data with useEffect & Fetch API.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "async function mockFetchData(url) {\n  return { data: 'records', from: url };\n}\nconst fetchPromise = mockFetchData('/api/courses');",
    "hints": [
      "Write:\nasync function mockFetchData(url) {\n  return { data: 'records', from: url };\n}\nconst fetchPromise = mockFetchData('/api/courses');"
    ],
    "testCases": [
      {
        "id": "react-51-tc-1",
        "description": "Verifies correct implementation for Fetching Data with useEffect & Fetch API",
        "testFn": "typeof mockFetchData === 'function'"
      }
    ]
  },
  {
    "id": "react-52-loading-and-error-states-handlin",
    "title": "52. Loading and Error States Handling",
    "slug": "lesson-52-loading-and-error-states-handlin",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Loading and Error States Handling in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Loading and Error States Handling",
      "React 19"
    ],
    "analogy": "A restaurant order: waiting for food (loading), food arrives (data), or kitchen out of fish (error).",
    "explanationMarkdown": "### Loading and Error States Handling\n\nAlways manage loading, error, and data states explicitly for resilient user experiences.\n\n```react\nfunction initAsyncState() {\n  return { data: null, isLoading: true, error: null };\n}\nconst state = initAsyncState();\n```",
    "workedExample": {
      "title": "Worked Example: Loading and Error States Handling",
      "code": "function initAsyncState() {\n  return { data: null, isLoading: true, error: null };\n}\nconst state = initAsyncState();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Loading and Error States Handling.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Loading and Error States Handling.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function initAsyncState() {\n  return { data: null, isLoading: true, error: null };\n}\nconst state = initAsyncState();",
    "hints": [
      "Write:\nfunction initAsyncState() {\n  return { data: null, isLoading: true, error: null };\n}\nconst state = initAsyncState();"
    ],
    "testCases": [
      {
        "id": "react-52-tc-1",
        "description": "Verifies correct implementation for Loading and Error States Handling",
        "testFn": "state.isLoading === true && state.data === null"
      }
    ]
  },
  {
    "id": "react-53-preventing-race-conditions-with-",
    "title": "53. Preventing Race Conditions with AbortController",
    "slug": "lesson-53-preventing-race-conditions-with-",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Preventing Race Conditions with AbortController in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Preventing Race Conditions with AbortController",
      "React 19"
    ],
    "analogy": "Hanging up a stale phone call when a new emergency call rings on line 2.",
    "explanationMarkdown": "### Preventing Race Conditions with AbortController\n\nAbort stale in-flight requests in the cleanup function to prevent race conditions when dependencies change fast.\n\n```react\nfunction createAbortSignal() {\n  const controller = new AbortController();\n  return controller.signal;\n}\nconst signal = createAbortSignal();\n```",
    "workedExample": {
      "title": "Worked Example: Preventing Race Conditions with AbortController",
      "code": "function createAbortSignal() {\n  const controller = new AbortController();\n  return controller.signal;\n}\nconst signal = createAbortSignal();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preventing Race Conditions with AbortController.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preventing Race Conditions with AbortController.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createAbortSignal() {\n  const controller = new AbortController();\n  return controller.signal;\n}\nconst signal = createAbortSignal();",
    "hints": [
      "Write:\nfunction createAbortSignal() {\n  const controller = new AbortController();\n  return controller.signal;\n}\nconst signal = createAbortSignal();"
    ],
    "testCases": [
      {
        "id": "react-53-tc-1",
        "description": "Verifies correct implementation for Preventing Race Conditions with AbortController",
        "testFn": "typeof signal === 'object'"
      }
    ]
  },
  {
    "id": "react-54-the-infinite-effect-loop-pitfall",
    "title": "54. The Infinite Effect Loop Pitfall",
    "slug": "lesson-54-the-infinite-effect-loop-pitfall",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Infinite Effect Loop Pitfall in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Infinite Effect Loop Pitfall",
      "React 19"
    ],
    "analogy": "A mirror facing another mirror creating an infinite hallway of reflections.",
    "explanationMarkdown": "### The Infinite Effect Loop Pitfall\n\nSetting state inside an effect without proper dependency bounds causes an infinite re-render loop!\n\n```react\nfunction hasStableDependency(dep) {\n  return typeof dep !== 'object' || dep !== null;\n}\nconst stable = hasStableDependency('user-1');\n```",
    "workedExample": {
      "title": "Worked Example: The Infinite Effect Loop Pitfall",
      "code": "function hasStableDependency(dep) {\n  return typeof dep !== 'object' || dep !== null;\n}\nconst stable = hasStableDependency('user-1');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Infinite Effect Loop Pitfall.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Infinite Effect Loop Pitfall.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function hasStableDependency(dep) {\n  return typeof dep !== 'object' || dep !== null;\n}\nconst stable = hasStableDependency('user-1');",
    "hints": [
      "Write:\nfunction hasStableDependency(dep) {\n  return typeof dep !== 'object' || dep !== null;\n}\nconst stable = hasStableDependency('user-1');"
    ],
    "testCases": [
      {
        "id": "react-54-tc-1",
        "description": "Verifies correct implementation for The Infinite Effect Loop Pitfall",
        "testFn": "stable === true"
      }
    ]
  },
  {
    "id": "react-55-synchronizing-with-document-titl",
    "title": "55. Synchronizing with Document Title",
    "slug": "lesson-55-synchronizing-with-document-titl",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Synchronizing with Document Title in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Synchronizing with Document Title",
      "React 19"
    ],
    "analogy": "Updating the lobby welcome banner whenever the keynote speaker changes.",
    "explanationMarkdown": "### Synchronizing with Document Title\n\nSync external browser APIs like `document.title` inside effects based on active route or state.\n\n```react\nfunction updateTitle(title) {\n  return `DevForge - ${title}`;\n}\nconst t = updateTitle('Lesson 1');\n```",
    "workedExample": {
      "title": "Worked Example: Synchronizing with Document Title",
      "code": "function updateTitle(title) {\n  return `DevForge - ${title}`;\n}\nconst t = updateTitle('Lesson 1');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Synchronizing with Document Title.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Synchronizing with Document Title.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function updateTitle(title) {\n  return `DevForge - ${title}`;\n}\nconst t = updateTitle('Lesson 1');",
    "hints": [
      "Write:\nfunction updateTitle(title) {\n  return `DevForge - ${title}`;\n}\nconst t = updateTitle('Lesson 1');"
    ],
    "testCases": [
      {
        "id": "react-55-tc-1",
        "description": "Verifies correct implementation for Synchronizing with Document Title",
        "testFn": "t === 'DevForge - Lesson 1'"
      }
    ]
  },
  {
    "id": "react-56-synchronizing-with-localstorage",
    "title": "56. Synchronizing with localStorage",
    "slug": "lesson-56-synchronizing-with-localstorage",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Synchronizing with localStorage in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Synchronizing with localStorage",
      "React 19"
    ],
    "analogy": "Stashing an ongoing game puzzle in a secure wooden drawer so you can resume tomorrow.",
    "explanationMarkdown": "### Synchronizing with localStorage\n\nSync state changes to browser `localStorage` in an effect for persistence across reloads.\n\n```react\nfunction persistToStorage(key, value) {\n  return { key, json: JSON.stringify(value) };\n}\nconst saved = persistToStorage('theme', 'dark');\n```",
    "workedExample": {
      "title": "Worked Example: Synchronizing with localStorage",
      "code": "function persistToStorage(key, value) {\n  return { key, json: JSON.stringify(value) };\n}\nconst saved = persistToStorage('theme', 'dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Synchronizing with localStorage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Synchronizing with localStorage.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function persistToStorage(key, value) {\n  return { key, json: JSON.stringify(value) };\n}\nconst saved = persistToStorage('theme', 'dark');",
    "hints": [
      "Write:\nfunction persistToStorage(key, value) {\n  return { key, json: JSON.stringify(value) };\n}\nconst saved = persistToStorage('theme', 'dark');"
    ],
    "testCases": [
      {
        "id": "react-56-tc-1",
        "description": "Verifies correct implementation for Synchronizing with localStorage",
        "testFn": "saved.key === 'theme' && saved.json === '\"dark\"'"
      }
    ]
  },
  {
    "id": "react-57-listening-to-global-window-event",
    "title": "57. Listening to Global Window Events",
    "slug": "lesson-57-listening-to-global-window-event",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Listening to Global Window Events in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Listening to Global Window Events",
      "React 19"
    ],
    "analogy": "Hanging a wind chime on the front porch that chimes whenever outdoor gusts blow.",
    "explanationMarkdown": "### Listening to Global Window Events\n\nAttach global listeners (`resize`, `keydown`) in effects and remove them in the cleanup function.\n\n```react\nfunction addWindowListener(eventName, fn) {\n  return () => `Removed ${eventName}`;\n}\nconst remove = addWindowListener('resize', () => {});\n```",
    "workedExample": {
      "title": "Worked Example: Listening to Global Window Events",
      "code": "function addWindowListener(eventName, fn) {\n  return () => `Removed ${eventName}`;\n}\nconst remove = addWindowListener('resize', () => {});",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listening to Global Window Events.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listening to Global Window Events.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function addWindowListener(eventName, fn) {\n  return () => `Removed ${eventName}`;\n}\nconst remove = addWindowListener('resize', () => {});",
    "hints": [
      "Write:\nfunction addWindowListener(eventName, fn) {\n  return () => `Removed ${eventName}`;\n}\nconst remove = addWindowListener('resize', () => {});"
    ],
    "testCases": [
      {
        "id": "react-57-tc-1",
        "description": "Verifies correct implementation for Listening to Global Window Events",
        "testFn": "typeof remove === 'function' && remove() === 'Removed resize'"
      }
    ]
  },
  {
    "id": "react-58-uselayouteffect-synchronous-dom-",
    "title": "58. useLayoutEffect: Synchronous DOM Measurement",
    "slug": "lesson-58-uselayouteffect-synchronous-dom-",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master useLayoutEffect: Synchronous DOM Measurement in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "useLayoutEffect",
      "React 19"
    ],
    "analogy": "Measuring a suit on a mannequin in the fitting room before showing it to customers on the showroom floor.",
    "explanationMarkdown": "### useLayoutEffect: Synchronous DOM Measurement\n\n`useLayoutEffect` fires synchronously before the browser paints, preventing visual flickering during DOM measurement.\n\n```react\nfunction measureElement(width) {\n  return { width, measuredBeforePaint: true };\n}\nconst m = measureElement(300);\n```",
    "workedExample": {
      "title": "Worked Example: useLayoutEffect: Synchronous DOM Measurement",
      "code": "function measureElement(width) {\n  return { width, measuredBeforePaint: true };\n}\nconst m = measureElement(300);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for useLayoutEffect: Synchronous DOM Measurement.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of useLayoutEffect: Synchronous DOM Measurement.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function measureElement(width) {\n  return { width, measuredBeforePaint: true };\n}\nconst m = measureElement(300);",
    "hints": [
      "Write:\nfunction measureElement(width) {\n  return { width, measuredBeforePaint: true };\n}\nconst m = measureElement(300);"
    ],
    "testCases": [
      {
        "id": "react-58-tc-1",
        "description": "Verifies correct implementation for useLayoutEffect: Synchronous DOM Measurement",
        "testFn": "m.measuredBeforePaint === true"
      }
    ]
  },
  {
    "id": "react-59-the-useeffectevent-separation-pa",
    "title": "59. The useEffectEvent Separation Pattern",
    "slug": "lesson-59-the-useeffectevent-separation-pa",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The useEffectEvent Separation Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useEffectEvent Separation Pattern",
      "React 19"
    ],
    "analogy": "A private security guard executing special instructions without ringing the main alarm bell.",
    "explanationMarkdown": "### The useEffectEvent Separation Pattern\n\nSeparates non-reactive event logic from reactive effect dependencies to avoid unnecessary effect triggers.\n\n```react\nfunction createEffectEvent(fn) {\n  return (...args) => fn(...args);\n}\nconst handler = createEffectEvent((x) => x * 2);\n```",
    "workedExample": {
      "title": "Worked Example: The useEffectEvent Separation Pattern",
      "code": "function createEffectEvent(fn) {\n  return (...args) => fn(...args);\n}\nconst handler = createEffectEvent((x) => x * 2);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useEffectEvent Separation Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useEffectEvent Separation Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createEffectEvent(fn) {\n  return (...args) => fn(...args);\n}\nconst handler = createEffectEvent((x) => x * 2);",
    "hints": [
      "Write:\nfunction createEffectEvent(fn) {\n  return (...args) => fn(...args);\n}\nconst handler = createEffectEvent((x) => x * 2);"
    ],
    "testCases": [
      {
        "id": "react-59-tc-1",
        "description": "Verifies correct implementation for The useEffectEvent Separation Pattern",
        "testFn": "typeof handler === 'function' && handler(5) === 10"
      }
    ]
  },
  {
    "id": "react-60-when-not-to-use-useeffect-anti-p",
    "title": "60. When NOT to Use useEffect (Anti-Patterns)",
    "slug": "lesson-60-when-not-to-use-useeffect-anti-p",
    "language": "react",
    "category": "Module 4: Side Effects with useEffect",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master When NOT to Use useEffect (Anti-Patterns) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "When NOT to Use useEffect (Anti-Patterns)",
      "React 19"
    ],
    "analogy": "Using a crane to pick up a pencil when your hand is already holding it.",
    "explanationMarkdown": "### When NOT to Use useEffect (Anti-Patterns)\n\nYou don't need `useEffect` to transform data for rendering or handle user clicks. Calculate directly in render!\n\n```react\nfunction deriveStateDirectly(firstName, lastName) {\n  return `${firstName} ${lastName}`;\n}\nconst fullName = deriveStateDirectly('Ada', 'Lovelace');\n```",
    "workedExample": {
      "title": "Worked Example: When NOT to Use useEffect (Anti-Patterns)",
      "code": "function deriveStateDirectly(firstName, lastName) {\n  return `${firstName} ${lastName}`;\n}\nconst fullName = deriveStateDirectly('Ada', 'Lovelace');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for When NOT to Use useEffect (Anti-Patterns).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of When NOT to Use useEffect (Anti-Patterns).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function deriveStateDirectly(firstName, lastName) {\n  return `${firstName} ${lastName}`;\n}\nconst fullName = deriveStateDirectly('Ada', 'Lovelace');",
    "hints": [
      "Write:\nfunction deriveStateDirectly(firstName, lastName) {\n  return `${firstName} ${lastName}`;\n}\nconst fullName = deriveStateDirectly('Ada', 'Lovelace');"
    ],
    "testCases": [
      {
        "id": "react-60-tc-1",
        "description": "Verifies correct implementation for When NOT to Use useEffect (Anti-Patterns)",
        "testFn": "fullName === 'Ada Lovelace'"
      }
    ]
  },
  {
    "id": "react-61-the-useref-hook-mutable-persiste",
    "title": "61. The useRef Hook: Mutable Persistent Values",
    "slug": "lesson-61-the-useref-hook-mutable-persiste",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The useRef Hook: Mutable Persistent Values in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useRef Hook",
      "React 19"
    ],
    "analogy": "A sticky note stuck to the monitor bezel: you can write whatever you want on it without restarting your PC.",
    "explanationMarkdown": "### The useRef Hook: Mutable Persistent Values\n\n`useRef` returns a plain JavaScript object `{ current: initialValue }` that persists across re-renders.\n\n```react\nfunction createRef(initialVal = null) {\n  return { current: initialVal };\n}\nconst ref = createRef(100);\n```",
    "workedExample": {
      "title": "Worked Example: The useRef Hook: Mutable Persistent Values",
      "code": "function createRef(initialVal = null) {\n  return { current: initialVal };\n}\nconst ref = createRef(100);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useRef Hook: Mutable Persistent Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useRef Hook: Mutable Persistent Values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createRef(initialVal = null) {\n  return { current: initialVal };\n}\nconst ref = createRef(100);",
    "hints": [
      "Write:\nfunction createRef(initialVal = null) {\n  return { current: initialVal };\n}\nconst ref = createRef(100);"
    ],
    "testCases": [
      {
        "id": "react-61-tc-1",
        "description": "Verifies correct implementation for The useRef Hook: Mutable Persistent Values",
        "testFn": "ref.current === 100"
      }
    ]
  },
  {
    "id": "react-62-ref-vs-state-the-core-distinctio",
    "title": "62. Ref vs State: The Core Distinction",
    "slug": "lesson-62-ref-vs-state-the-core-distinctio",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Ref vs State: The Core Distinction in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Ref vs State",
      "React 19"
    ],
    "analogy": "Whispering notes to yourself (ref) vs standing up and announcing changes to the whole audience (state).",
    "explanationMarkdown": "### Ref vs State: The Core Distinction\n\nModifying `ref.current` does NOT trigger a component re-render. State changes always trigger re-renders.\n\n```react\nfunction checkRefReRender() {\n  return { causesReRender: false };\n}\nconst res = checkRefReRender();\n```",
    "workedExample": {
      "title": "Worked Example: Ref vs State: The Core Distinction",
      "code": "function checkRefReRender() {\n  return { causesReRender: false };\n}\nconst res = checkRefReRender();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ref vs State: The Core Distinction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ref vs State: The Core Distinction.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function checkRefReRender() {\n  return { causesReRender: false };\n}\nconst res = checkRefReRender();",
    "hints": [
      "Write:\nfunction checkRefReRender() {\n  return { causesReRender: false };\n}\nconst res = checkRefReRender();"
    ],
    "testCases": [
      {
        "id": "react-62-tc-1",
        "description": "Verifies correct implementation for Ref vs State: The Core Distinction",
        "testFn": "res.causesReRender === false"
      }
    ]
  },
  {
    "id": "react-63-accessing-real-dom-nodes-with-re",
    "title": "63. Accessing Real DOM Nodes with ref",
    "slug": "lesson-63-accessing-real-dom-nodes-with-re",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Accessing Real DOM Nodes with ref in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Accessing Real DOM Nodes with ref",
      "React 19"
    ],
    "analogy": "Grabbing a physical book from the bookshelf with your hand instead of looking at its picture.",
    "explanationMarkdown": "### Accessing Real DOM Nodes with ref\n\nPassing `ref={myRef}` to a JSX element populates `myRef.current` with the underlying HTML DOM element.\n\n```react\nfunction attachDomRef() {\n  const inputRef = { current: null };\n  return inputRef;\n}\nconst ref = attachDomRef();\n```",
    "workedExample": {
      "title": "Worked Example: Accessing Real DOM Nodes with ref",
      "code": "function attachDomRef() {\n  const inputRef = { current: null };\n  return inputRef;\n}\nconst ref = attachDomRef();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessing Real DOM Nodes with ref.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessing Real DOM Nodes with ref.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function attachDomRef() {\n  const inputRef = { current: null };\n  return inputRef;\n}\nconst ref = attachDomRef();",
    "hints": [
      "Write:\nfunction attachDomRef() {\n  const inputRef = { current: null };\n  return inputRef;\n}\nconst ref = attachDomRef();"
    ],
    "testCases": [
      {
        "id": "react-63-tc-1",
        "description": "Verifies correct implementation for Accessing Real DOM Nodes with ref",
        "testFn": "ref.current === null"
      }
    ]
  },
  {
    "id": "react-64-programmatic-input-focus-on-moun",
    "title": "64. Programmatic Input Focus on Mount",
    "slug": "lesson-64-programmatic-input-focus-on-moun",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Programmatic Input Focus on Mount in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Programmatic Input Focus on Mount",
      "React 19"
    ],
    "analogy": "Auto-clicking a cursor into the Google search box the instant the page loads.",
    "explanationMarkdown": "### Programmatic Input Focus on Mount\n\nUse `inputRef.current.focus()` inside `useEffect` to place user cursor focus immediately on mount.\n\n```react\nfunction focusElement(el) {\n  return { focused: true, tag: el };\n}\nconst f = focusElement('input');\n```",
    "workedExample": {
      "title": "Worked Example: Programmatic Input Focus on Mount",
      "code": "function focusElement(el) {\n  return { focused: true, tag: el };\n}\nconst f = focusElement('input');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Programmatic Input Focus on Mount.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Programmatic Input Focus on Mount.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function focusElement(el) {\n  return { focused: true, tag: el };\n}\nconst f = focusElement('input');",
    "hints": [
      "Write:\nfunction focusElement(el) {\n  return { focused: true, tag: el };\n}\nconst f = focusElement('input');"
    ],
    "testCases": [
      {
        "id": "react-64-tc-1",
        "description": "Verifies correct implementation for Programmatic Input Focus on Mount",
        "testFn": "f.focused === true"
      }
    ]
  },
  {
    "id": "react-65-scrolling-elements-into-view",
    "title": "65. Scrolling Elements into View",
    "slug": "lesson-65-scrolling-elements-into-view",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Scrolling Elements into View in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Scrolling Elements into View",
      "React 19"
    ],
    "analogy": "An usher leading a guest straight down the aisle to seat #42.",
    "explanationMarkdown": "### Scrolling Elements into View\n\nUse `elementRef.current.scrollIntoView({ behavior: 'smooth' })` for animated in-page scrolling.\n\n```react\nfunction scrollIntoViewMock(elementId) {\n  return `Scrolled to ${elementId}`;\n}\nconst s = scrollIntoViewMock('comment-99');\n```",
    "workedExample": {
      "title": "Worked Example: Scrolling Elements into View",
      "code": "function scrollIntoViewMock(elementId) {\n  return `Scrolled to ${elementId}`;\n}\nconst s = scrollIntoViewMock('comment-99');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scrolling Elements into View.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scrolling Elements into View.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function scrollIntoViewMock(elementId) {\n  return `Scrolled to ${elementId}`;\n}\nconst s = scrollIntoViewMock('comment-99');",
    "hints": [
      "Write:\nfunction scrollIntoViewMock(elementId) {\n  return `Scrolled to ${elementId}`;\n}\nconst s = scrollIntoViewMock('comment-99');"
    ],
    "testCases": [
      {
        "id": "react-65-tc-1",
        "description": "Verifies correct implementation for Scrolling Elements into View",
        "testFn": "s === 'Scrolled to comment-99'"
      }
    ]
  },
  {
    "id": "react-66-measuring-dom-elements-with-getb",
    "title": "66. Measuring DOM Elements with getBoundingClientRect",
    "slug": "lesson-66-measuring-dom-elements-with-getb",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Measuring DOM Elements with getBoundingClientRect in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Measuring DOM Elements with getBoundingClientRect",
      "React 19"
    ],
    "analogy": "Using a physical ruler to measure the exact millimeters of a photo frame.",
    "explanationMarkdown": "### Measuring DOM Elements with getBoundingClientRect\n\nMeasure exact rendered geometry (width, height, offsets) from DOM nodes via `ref.current.getBoundingClientRect()`.\n\n```react\nfunction getElementRect(el) {\n  return { width: 400, height: 250, top: 100 };\n}\nconst rect = getElementRect('box');\n```",
    "workedExample": {
      "title": "Worked Example: Measuring DOM Elements with getBoundingClientRect",
      "code": "function getElementRect(el) {\n  return { width: 400, height: 250, top: 100 };\n}\nconst rect = getElementRect('box');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Measuring DOM Elements with getBoundingClientRect.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Measuring DOM Elements with getBoundingClientRect.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function getElementRect(el) {\n  return { width: 400, height: 250, top: 100 };\n}\nconst rect = getElementRect('box');",
    "hints": [
      "Write:\nfunction getElementRect(el) {\n  return { width: 400, height: 250, top: 100 };\n}\nconst rect = getElementRect('box');"
    ],
    "testCases": [
      {
        "id": "react-66-tc-1",
        "description": "Verifies correct implementation for Measuring DOM Elements with getBoundingClientRect",
        "testFn": "rect.width === 400 && rect.height === 250"
      }
    ]
  },
  {
    "id": "react-67-storing-timer-ids-in-refs",
    "title": "67. Storing Timer IDs in Refs",
    "slug": "lesson-67-storing-timer-ids-in-refs",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Storing Timer IDs in Refs in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Storing Timer IDs in Refs",
      "React 19"
    ],
    "analogy": "Writing down a claim ticket number so you can pick up your coat after the concert.",
    "explanationMarkdown": "### Storing Timer IDs in Refs\n\nStore interval and timeout IDs in `timerRef.current` so you can clear them across renders and on unmount.\n\n```react\nfunction storeTimerId(id) {\n  const timerRef = { current: id };\n  return timerRef.current;\n}\nconst tid = storeTimerId(12345);\n```",
    "workedExample": {
      "title": "Worked Example: Storing Timer IDs in Refs",
      "code": "function storeTimerId(id) {\n  const timerRef = { current: id };\n  return timerRef.current;\n}\nconst tid = storeTimerId(12345);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Storing Timer IDs in Refs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Storing Timer IDs in Refs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function storeTimerId(id) {\n  const timerRef = { current: id };\n  return timerRef.current;\n}\nconst tid = storeTimerId(12345);",
    "hints": [
      "Write:\nfunction storeTimerId(id) {\n  const timerRef = { current: id };\n  return timerRef.current;\n}\nconst tid = storeTimerId(12345);"
    ],
    "testCases": [
      {
        "id": "react-67-tc-1",
        "description": "Verifies correct implementation for Storing Timer IDs in Refs",
        "testFn": "tid === 12345"
      }
    ]
  },
  {
    "id": "react-68-tracking-previous-state-with-use",
    "title": "68. Tracking Previous State with useRef",
    "slug": "lesson-68-tracking-previous-state-with-use",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Tracking Previous State with useRef in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Tracking Previous State with useRef",
      "React 19"
    ],
    "analogy": "Looking back in your rearview mirror while driving forward.",
    "explanationMarkdown": "### Tracking Previous State with useRef\n\nStore previous state in a ref during render or effects to compare past vs current values.\n\n```react\nfunction trackPrevious(currentVal, prevRef) {\n  const prev = prevRef.current;\n  prevRef.current = currentVal;\n  return prev;\n}\nconst pRef = { current: 'old' };\nconst was = trackPrevious('new', pRef);\n```",
    "workedExample": {
      "title": "Worked Example: Tracking Previous State with useRef",
      "code": "function trackPrevious(currentVal, prevRef) {\n  const prev = prevRef.current;\n  prevRef.current = currentVal;\n  return prev;\n}\nconst pRef = { current: 'old' };\nconst was = trackPrevious('new', pRef);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tracking Previous State with useRef.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tracking Previous State with useRef.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function trackPrevious(currentVal, prevRef) {\n  const prev = prevRef.current;\n  prevRef.current = currentVal;\n  return prev;\n}\nconst pRef = { current: 'old' };\nconst was = trackPrevious('new', pRef);",
    "hints": [
      "Write:\nfunction trackPrevious(currentVal, prevRef) {\n  const prev = prevRef.current;\n  prevRef.current = currentVal;\n  return prev;\n}\nconst pRef = { current: 'old' };\nconst was = trackPrevious('new', pRef);"
    ],
    "testCases": [
      {
        "id": "react-68-tc-1",
        "description": "Verifies correct implementation for Tracking Previous State with useRef",
        "testFn": "was === 'old' && pRef.current === 'new'"
      }
    ]
  },
  {
    "id": "react-69-tracking-component-mount-status",
    "title": "69. Tracking Component Mount Status",
    "slug": "lesson-69-tracking-component-mount-status",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Tracking Component Mount Status in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Tracking Component Mount Status",
      "React 19"
    ],
    "analogy": "Verifying the submarine hatch is securely locked before diving underwater.",
    "explanationMarkdown": "### Tracking Component Mount Status\n\nUse a boolean ref `isMounted.current` to prevent executing asynchronous callbacks on unmounted components.\n\n```react\nfunction checkMounted(isMountedRef) {\n  return isMountedRef.current === true;\n}\nconst ok = checkMounted({ current: true });\n```",
    "workedExample": {
      "title": "Worked Example: Tracking Component Mount Status",
      "code": "function checkMounted(isMountedRef) {\n  return isMountedRef.current === true;\n}\nconst ok = checkMounted({ current: true });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tracking Component Mount Status.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tracking Component Mount Status.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function checkMounted(isMountedRef) {\n  return isMountedRef.current === true;\n}\nconst ok = checkMounted({ current: true });",
    "hints": [
      "Write:\nfunction checkMounted(isMountedRef) {\n  return isMountedRef.current === true;\n}\nconst ok = checkMounted({ current: true });"
    ],
    "testCases": [
      {
        "id": "react-69-tc-1",
        "description": "Verifies correct implementation for Tracking Component Mount Status",
        "testFn": "ok === true"
      }
    ]
  },
  {
    "id": "react-70-uncontrolled-inputs-with-useref",
    "title": "70. Uncontrolled Inputs with useRef",
    "slug": "lesson-70-uncontrolled-inputs-with-useref",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Uncontrolled Inputs with useRef in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Uncontrolled Inputs with useRef",
      "React 19"
    ],
    "analogy": "Letting the browser remember what's in the input and only reading it when you hit submit.",
    "explanationMarkdown": "### Uncontrolled Inputs with useRef\n\nUncontrolled inputs retain their own internal DOM state; values are read imperatively upon submission via refs.\n\n```react\nfunction readUncontrolledInput(ref) {\n  return ref.current ? ref.current.value : '';\n}\nconst val = readUncontrolledInput({ current: { value: 'SecretKey' } });\n```",
    "workedExample": {
      "title": "Worked Example: Uncontrolled Inputs with useRef",
      "code": "function readUncontrolledInput(ref) {\n  return ref.current ? ref.current.value : '';\n}\nconst val = readUncontrolledInput({ current: { value: 'SecretKey' } });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Uncontrolled Inputs with useRef.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Uncontrolled Inputs with useRef.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function readUncontrolledInput(ref) {\n  return ref.current ? ref.current.value : '';\n}\nconst val = readUncontrolledInput({ current: { value: 'SecretKey' } });",
    "hints": [
      "Write:\nfunction readUncontrolledInput(ref) {\n  return ref.current ? ref.current.value : '';\n}\nconst val = readUncontrolledInput({ current: { value: 'SecretKey' } });"
    ],
    "testCases": [
      {
        "id": "react-70-tc-1",
        "description": "Verifies correct implementation for Uncontrolled Inputs with useRef",
        "testFn": "val === 'SecretKey'"
      }
    ]
  },
  {
    "id": "react-71-exposing-custom-handles-with-use",
    "title": "71. Exposing Custom Handles with useImperativeHandle",
    "slug": "lesson-71-exposing-custom-handles-with-use",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Exposing Custom Handles with useImperativeHandle in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Exposing Custom Handles with useImperativeHandle",
      "React 19"
    ],
    "analogy": "Giving a neighbor a custom remote control that can only open the garage door, without giving them the house master key.",
    "explanationMarkdown": "### Exposing Custom Handles with useImperativeHandle\n\n`useImperativeHandle` customizes the ref handle exposed to parent components, restricting exposed methods.\n\n```react\nfunction createCustomHandle(methods) {\n  return { ...methods, isHandle: true };\n}\nconst handle = createCustomHandle({ reset: () => 'done' });\n```",
    "workedExample": {
      "title": "Worked Example: Exposing Custom Handles with useImperativeHandle",
      "code": "function createCustomHandle(methods) {\n  return { ...methods, isHandle: true };\n}\nconst handle = createCustomHandle({ reset: () => 'done' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exposing Custom Handles with useImperativeHandle.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exposing Custom Handles with useImperativeHandle.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createCustomHandle(methods) {\n  return { ...methods, isHandle: true };\n}\nconst handle = createCustomHandle({ reset: () => 'done' });",
    "hints": [
      "Write:\nfunction createCustomHandle(methods) {\n  return { ...methods, isHandle: true };\n}\nconst handle = createCustomHandle({ reset: () => 'done' });"
    ],
    "testCases": [
      {
        "id": "react-71-tc-1",
        "description": "Verifies correct implementation for Exposing Custom Handles with useImperativeHandle",
        "testFn": "handle.isHandle === true && handle.reset() === 'done'"
      }
    ]
  },
  {
    "id": "react-72-forwarding-refs-with-forwardref-",
    "title": "72. Forwarding Refs with forwardRef (React 18 & 19)",
    "slug": "lesson-72-forwarding-refs-with-forwardref-",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Forwarding Refs with forwardRef (React 18 & 19) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Forwarding Refs with forwardRef (React 18 & 19)",
      "React 19"
    ],
    "analogy": "Passing an incoming phone call directly to a colleague's desk extension.",
    "explanationMarkdown": "### Forwarding Refs with forwardRef (React 18 & 19)\n\nIn React 18, `forwardRef` allows components to expose DOM nodes to parents; in React 19, `ref` is a regular prop!\n\n```react\nfunction ForwardedButton(props, ref) {\n  return { props, hasRef: Boolean(ref) };\n}\nconst res = ForwardedButton({}, { current: null });\n```",
    "workedExample": {
      "title": "Worked Example: Forwarding Refs with forwardRef (React 18 & 19)",
      "code": "function ForwardedButton(props, ref) {\n  return { props, hasRef: Boolean(ref) };\n}\nconst res = ForwardedButton({}, { current: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Forwarding Refs with forwardRef (React 18 & 19).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Forwarding Refs with forwardRef (React 18 & 19).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ForwardedButton(props, ref) {\n  return { props, hasRef: Boolean(ref) };\n}\nconst res = ForwardedButton({}, { current: null });",
    "hints": [
      "Write:\nfunction ForwardedButton(props, ref) {\n  return { props, hasRef: Boolean(ref) };\n}\nconst res = ForwardedButton({}, { current: null });"
    ],
    "testCases": [
      {
        "id": "react-72-tc-1",
        "description": "Verifies correct implementation for Forwarding Refs with forwardRef (React 18 & 19)",
        "testFn": "res.hasRef === true"
      }
    ]
  },
  {
    "id": "react-73-click-outside-detection-with-ref",
    "title": "73. Click Outside Detection with Refs",
    "slug": "lesson-73-click-outside-detection-with-ref",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Click Outside Detection with Refs in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Click Outside Detection with Refs",
      "React 19"
    ],
    "analogy": "A security perimeter fence: sounding a chime if someone steps outside the boundary.",
    "explanationMarkdown": "### Click Outside Detection with Refs\n\nDetect clicks outside dropdowns or modals by checking `!ref.current.contains(e.target)`.\n\n```react\nfunction isClickOutside(containerEl, targetEl) {\n  return !containerEl.contains(targetEl);\n}\nconst outside = isClickOutside({ contains: () => false }, {});\n```",
    "workedExample": {
      "title": "Worked Example: Click Outside Detection with Refs",
      "code": "function isClickOutside(containerEl, targetEl) {\n  return !containerEl.contains(targetEl);\n}\nconst outside = isClickOutside({ contains: () => false }, {});",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Click Outside Detection with Refs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Click Outside Detection with Refs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function isClickOutside(containerEl, targetEl) {\n  return !containerEl.contains(targetEl);\n}\nconst outside = isClickOutside({ contains: () => false }, {});",
    "hints": [
      "Write:\nfunction isClickOutside(containerEl, targetEl) {\n  return !containerEl.contains(targetEl);\n}\nconst outside = isClickOutside({ contains: () => false }, {});"
    ],
    "testCases": [
      {
        "id": "react-73-tc-1",
        "description": "Verifies correct implementation for Click Outside Detection with Refs",
        "testFn": "outside === true"
      }
    ]
  },
  {
    "id": "react-74-ref-callbacks-dynamic-ref-attach",
    "title": "74. Ref Callbacks: Dynamic Ref Attachment",
    "slug": "lesson-74-ref-callbacks-dynamic-ref-attach",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Ref Callbacks: Dynamic Ref Attachment in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Ref Callbacks",
      "React 19"
    ],
    "analogy": "A sensor signaling the moment a package arrives at the loading dock.",
    "explanationMarkdown": "### Ref Callbacks: Dynamic Ref Attachment\n\nCallback refs pass the DOM element directly to a function when the node is attached or detached.\n\n```react\nfunction createRefCallback() {\n  let node = null;\n  return (el) => { node = el; return node; };\n}\nconst cb = createRefCallback();\n```",
    "workedExample": {
      "title": "Worked Example: Ref Callbacks: Dynamic Ref Attachment",
      "code": "function createRefCallback() {\n  let node = null;\n  return (el) => { node = el; return node; };\n}\nconst cb = createRefCallback();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ref Callbacks: Dynamic Ref Attachment.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ref Callbacks: Dynamic Ref Attachment.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createRefCallback() {\n  let node = null;\n  return (el) => { node = el; return node; };\n}\nconst cb = createRefCallback();",
    "hints": [
      "Write:\nfunction createRefCallback() {\n  let node = null;\n  return (el) => { node = el; return node; };\n}\nconst cb = createRefCallback();"
    ],
    "testCases": [
      {
        "id": "react-74-tc-1",
        "description": "Verifies correct implementation for Ref Callbacks: Dynamic Ref Attachment",
        "testFn": "typeof cb === 'function'"
      }
    ]
  },
  {
    "id": "react-75-ref-best-practices-&-safety",
    "title": "75. Ref Best Practices & Safety",
    "slug": "lesson-75-ref-best-practices-&-safety",
    "language": "react",
    "category": "Module 5: Refs & Imperative DOM Operations",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Ref Best Practices & Safety in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Ref Best Practices & Safety",
      "React 19"
    ],
    "analogy": "Checking that an electrical outlet is grounded before plugging in high-voltage machinery.",
    "explanationMarkdown": "### Ref Best Practices & Safety\n\nAlways check `ref.current` before calling DOM methods, and avoid mutating `ref.current` during rendering.\n\n```react\nfunction safeRefAccess(ref) {\n  if (!ref || !ref.current) return 'fallback';\n  return 'ready';\n}\nconst res = safeRefAccess({ current: null });\n```",
    "workedExample": {
      "title": "Worked Example: Ref Best Practices & Safety",
      "code": "function safeRefAccess(ref) {\n  if (!ref || !ref.current) return 'fallback';\n  return 'ready';\n}\nconst res = safeRefAccess({ current: null });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ref Best Practices & Safety.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ref Best Practices & Safety.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function safeRefAccess(ref) {\n  if (!ref || !ref.current) return 'fallback';\n  return 'ready';\n}\nconst res = safeRefAccess({ current: null });",
    "hints": [
      "Write:\nfunction safeRefAccess(ref) {\n  if (!ref || !ref.current) return 'fallback';\n  return 'ready';\n}\nconst res = safeRefAccess({ current: null });"
    ],
    "testCases": [
      {
        "id": "react-75-tc-1",
        "description": "Verifies correct implementation for Ref Best Practices & Safety",
        "testFn": "res === 'fallback'"
      }
    ]
  },
  {
    "id": "react-76-the-context-mental-model-telepor",
    "title": "76. The Context Mental Model: Teleporting Data",
    "slug": "lesson-76-the-context-mental-model-telepor",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Context Mental Model: Teleporting Data in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Context Mental Model",
      "React 19"
    ],
    "analogy": "A radio broadcasting tower: anyone in town with a receiver can tune into the station without laying individual telephone cables.",
    "explanationMarkdown": "### The Context Mental Model: Teleporting Data\n\nContext provides a way to pass data through the component tree without manually passing props at every level.\n\n```react\nfunction createContextMock(defaultValue) {\n  return { defaultValue, isContext: true };\n}\nconst ctx = createContextMock('dark');\n```",
    "workedExample": {
      "title": "Worked Example: The Context Mental Model: Teleporting Data",
      "code": "function createContextMock(defaultValue) {\n  return { defaultValue, isContext: true };\n}\nconst ctx = createContextMock('dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Context Mental Model: Teleporting Data.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Context Mental Model: Teleporting Data.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createContextMock(defaultValue) {\n  return { defaultValue, isContext: true };\n}\nconst ctx = createContextMock('dark');",
    "hints": [
      "Write:\nfunction createContextMock(defaultValue) {\n  return { defaultValue, isContext: true };\n}\nconst ctx = createContextMock('dark');"
    ],
    "testCases": [
      {
        "id": "react-76-tc-1",
        "description": "Verifies correct implementation for The Context Mental Model: Teleporting Data",
        "testFn": "ctx.isContext === true && ctx.defaultValue === 'dark'"
      }
    ]
  },
  {
    "id": "react-77-creating-context-with-createcont",
    "title": "77. Creating Context with createContext",
    "slug": "lesson-77-creating-context-with-createcont",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Creating Context with createContext in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Creating Context with createContext",
      "React 19"
    ],
    "analogy": "Setting up a dedicated radio station frequency before airing shows.",
    "explanationMarkdown": "### Creating Context with createContext\n\n`const MyContext = createContext(defaultValue)` initializes a new context object.\n\n```react\nconst ThemeContext = { name: 'Theme', default: 'light' };\n```",
    "workedExample": {
      "title": "Worked Example: Creating Context with createContext",
      "code": "const ThemeContext = { name: 'Theme', default: 'light' };",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Context with createContext.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Context with createContext.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "const ThemeContext = { name: 'Theme', default: 'light' };",
    "hints": [
      "Write:\nconst ThemeContext = { name: 'Theme', default: 'light' };"
    ],
    "testCases": [
      {
        "id": "react-77-tc-1",
        "description": "Verifies correct implementation for Creating Context with createContext",
        "testFn": "ThemeContext.name === 'Theme'"
      }
    ]
  },
  {
    "id": "react-78-providing-context-with-context.p",
    "title": "78. Providing Context with Context.Provider",
    "slug": "lesson-78-providing-context-with-context.p",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Providing Context with Context.Provider in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Providing Context with Context.Provider",
      "React 19"
    ],
    "analogy": "Placing a Wi-Fi router on the ceiling to blanket the entire floor with internet.",
    "explanationMarkdown": "### Providing Context with Context.Provider\n\nWrap child components in `<MyContext.Provider value={data}>` to supply data to all nested descendants.\n\n```react\nfunction ProviderMock(value, children) {\n  return { value, children };\n}\nconst p = ProviderMock('user-1', 'children');\n```",
    "workedExample": {
      "title": "Worked Example: Providing Context with Context.Provider",
      "code": "function ProviderMock(value, children) {\n  return { value, children };\n}\nconst p = ProviderMock('user-1', 'children');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Providing Context with Context.Provider.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Providing Context with Context.Provider.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ProviderMock(value, children) {\n  return { value, children };\n}\nconst p = ProviderMock('user-1', 'children');",
    "hints": [
      "Write:\nfunction ProviderMock(value, children) {\n  return { value, children };\n}\nconst p = ProviderMock('user-1', 'children');"
    ],
    "testCases": [
      {
        "id": "react-78-tc-1",
        "description": "Verifies correct implementation for Providing Context with Context.Provider",
        "testFn": "p.value === 'user-1'"
      }
    ]
  },
  {
    "id": "react-79-consuming-context-with-usecontex",
    "title": "79. Consuming Context with useContext Hook",
    "slug": "lesson-79-consuming-context-with-usecontex",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Consuming Context with useContext Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Consuming Context with useContext Hook",
      "React 19"
    ],
    "analogy": "Tuning your pocket radio to 101.5 FM to hear the broadcast.",
    "explanationMarkdown": "### Consuming Context with useContext Hook\n\nCall `const value = useContext(MyContext)` to access the nearest provider's value.\n\n```react\nfunction consumeContextMock(ctxValue) {\n  return `Consumed: ${ctxValue}`;\n}\nconst val = consumeContextMock('theme-dark');\n```",
    "workedExample": {
      "title": "Worked Example: Consuming Context with useContext Hook",
      "code": "function consumeContextMock(ctxValue) {\n  return `Consumed: ${ctxValue}`;\n}\nconst val = consumeContextMock('theme-dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Consuming Context with useContext Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Consuming Context with useContext Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function consumeContextMock(ctxValue) {\n  return `Consumed: ${ctxValue}`;\n}\nconst val = consumeContextMock('theme-dark');",
    "hints": [
      "Write:\nfunction consumeContextMock(ctxValue) {\n  return `Consumed: ${ctxValue}`;\n}\nconst val = consumeContextMock('theme-dark');"
    ],
    "testCases": [
      {
        "id": "react-79-tc-1",
        "description": "Verifies correct implementation for Consuming Context with useContext Hook",
        "testFn": "val === 'Consumed: theme-dark'"
      }
    ]
  },
  {
    "id": "react-80-custom-context-provider-pattern",
    "title": "80. Custom Context Provider Pattern",
    "slug": "lesson-80-custom-context-provider-pattern",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Custom Context Provider Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Custom Context Provider Pattern",
      "React 19"
    ],
    "analogy": "A managed electrical substation regulating and distributing clean power to the neighborhood.",
    "explanationMarkdown": "### Custom Context Provider Pattern\n\nEncapsulate context provider, state management, and actions inside a clean `<ThemeProvider>` wrapper.\n\n```react\nfunction createCustomProvider(initialState) {\n  return { state: initialState, isProvider: true };\n}\nconst prov = createCustomProvider({ user: 'Sarah' });\n```",
    "workedExample": {
      "title": "Worked Example: Custom Context Provider Pattern",
      "code": "function createCustomProvider(initialState) {\n  return { state: initialState, isProvider: true };\n}\nconst prov = createCustomProvider({ user: 'Sarah' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Context Provider Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Context Provider Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createCustomProvider(initialState) {\n  return { state: initialState, isProvider: true };\n}\nconst prov = createCustomProvider({ user: 'Sarah' });",
    "hints": [
      "Write:\nfunction createCustomProvider(initialState) {\n  return { state: initialState, isProvider: true };\n}\nconst prov = createCustomProvider({ user: 'Sarah' });"
    ],
    "testCases": [
      {
        "id": "react-80-tc-1",
        "description": "Verifies correct implementation for Custom Context Provider Pattern",
        "testFn": "prov.state.user === 'Sarah'"
      }
    ]
  },
  {
    "id": "react-81-custom-hook-pattern-usetheme---u",
    "title": "81. Custom Hook Pattern (useTheme / useAuth)",
    "slug": "lesson-81-custom-hook-pattern-usetheme---u",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Custom Hook Pattern (useTheme / useAuth) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Custom Hook Pattern (useTheme / useAuth)",
      "React 19"
    ],
    "analogy": "A concierge keycard that verifies you're a registered hotel guest before granting access to the VIP lounge.",
    "explanationMarkdown": "### Custom Hook Pattern (useTheme / useAuth)\n\nExport custom hooks like `useTheme()` that validate whether the hook is being called inside its provider.\n\n```react\nfunction useThemeHook(theme) {\n  if (!theme) throw new Error('useTheme must be used within ThemeProvider');\n  return theme;\n}\nconst active = useThemeHook('dark');\n```",
    "workedExample": {
      "title": "Worked Example: Custom Hook Pattern (useTheme / useAuth)",
      "code": "function useThemeHook(theme) {\n  if (!theme) throw new Error('useTheme must be used within ThemeProvider');\n  return theme;\n}\nconst active = useThemeHook('dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Hook Pattern (useTheme / useAuth).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Hook Pattern (useTheme / useAuth).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useThemeHook(theme) {\n  if (!theme) throw new Error('useTheme must be used within ThemeProvider');\n  return theme;\n}\nconst active = useThemeHook('dark');",
    "hints": [
      "Write:\nfunction useThemeHook(theme) {\n  if (!theme) throw new Error('useTheme must be used within ThemeProvider');\n  return theme;\n}\nconst active = useThemeHook('dark');"
    ],
    "testCases": [
      {
        "id": "react-81-tc-1",
        "description": "Verifies correct implementation for Custom Hook Pattern (useTheme / useAuth)",
        "testFn": "active === 'dark'"
      }
    ]
  },
  {
    "id": "react-82-combining-context-with-usestate-",
    "title": "82. Combining Context with useState for Dynamic Updates",
    "slug": "lesson-82-combining-context-with-usestate-",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Combining Context with useState for Dynamic Updates in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Combining Context with useState for Dynamic Updates",
      "React 19"
    ],
    "analogy": "A town hall suggestion box where residents can submit new proposals that affect the whole town.",
    "explanationMarkdown": "### Combining Context with useState for Dynamic Updates\n\nPass both state and setter functions in the provider value: `value={{ theme, setTheme }}`.\n\n```react\nfunction createDynamicContext(initial) {\n  let val = initial;\n  return { get: () => val, set: (n) => { val = n; } };\n}\nconst dynamicCtx = createDynamicContext('light');\ndynamicCtx.set('dark');\n```",
    "workedExample": {
      "title": "Worked Example: Combining Context with useState for Dynamic Updates",
      "code": "function createDynamicContext(initial) {\n  let val = initial;\n  return { get: () => val, set: (n) => { val = n; } };\n}\nconst dynamicCtx = createDynamicContext('light');\ndynamicCtx.set('dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combining Context with useState for Dynamic Updates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combining Context with useState for Dynamic Updates.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createDynamicContext(initial) {\n  let val = initial;\n  return { get: () => val, set: (n) => { val = n; } };\n}\nconst dynamicCtx = createDynamicContext('light');\ndynamicCtx.set('dark');",
    "hints": [
      "Write:\nfunction createDynamicContext(initial) {\n  let val = initial;\n  return { get: () => val, set: (n) => { val = n; } };\n}\nconst dynamicCtx = createDynamicContext('light');\ndynamicCtx.set('dark');"
    ],
    "testCases": [
      {
        "id": "react-82-tc-1",
        "description": "Verifies correct implementation for Combining Context with useState for Dynamic Updates",
        "testFn": "dynamicCtx.get() === 'dark'"
      }
    ]
  },
  {
    "id": "react-83-theme-switcher-context-architect",
    "title": "83. Theme Switcher Context Architecture",
    "slug": "lesson-83-theme-switcher-context-architect",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Theme Switcher Context Architecture in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Theme Switcher Context Architecture",
      "React 19"
    ],
    "analogy": "A wall switch flipping an entire house between day mode and night mode.",
    "explanationMarkdown": "### Theme Switcher Context Architecture\n\nManage dark/light theme classes on `document.documentElement` synced via theme context.\n\n```react\nfunction toggleTheme(current) {\n  return current === 'dark' ? 'light' : 'dark';\n}\nconst next = toggleTheme('light');\n```",
    "workedExample": {
      "title": "Worked Example: Theme Switcher Context Architecture",
      "code": "function toggleTheme(current) {\n  return current === 'dark' ? 'light' : 'dark';\n}\nconst next = toggleTheme('light');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Theme Switcher Context Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Theme Switcher Context Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function toggleTheme(current) {\n  return current === 'dark' ? 'light' : 'dark';\n}\nconst next = toggleTheme('light');",
    "hints": [
      "Write:\nfunction toggleTheme(current) {\n  return current === 'dark' ? 'light' : 'dark';\n}\nconst next = toggleTheme('light');"
    ],
    "testCases": [
      {
        "id": "react-83-tc-1",
        "description": "Verifies correct implementation for Theme Switcher Context Architecture",
        "testFn": "next === 'dark'"
      }
    ]
  },
  {
    "id": "react-84-authentication-context-pattern",
    "title": "84. Authentication Context Pattern",
    "slug": "lesson-84-authentication-context-pattern",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Authentication Context Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Authentication Context Pattern",
      "React 19"
    ],
    "analogy": "A security badge office maintaining records of who is currently cleared to enter the facility.",
    "explanationMarkdown": "### Authentication Context Pattern\n\nBroadcast current logged-in user profile, login, and logout methods globally to the application.\n\n```react\nfunction authReducer(state, action) {\n  if (action.type === 'LOGIN') return { user: action.payload, isAuthenticated: true };\n  return { user: null, isAuthenticated: false };\n}\nconst state = authReducer({}, { type: 'LOGIN', payload: 'Sarah' });\n```",
    "workedExample": {
      "title": "Worked Example: Authentication Context Pattern",
      "code": "function authReducer(state, action) {\n  if (action.type === 'LOGIN') return { user: action.payload, isAuthenticated: true };\n  return { user: null, isAuthenticated: false };\n}\nconst state = authReducer({}, { type: 'LOGIN', payload: 'Sarah' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Authentication Context Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Authentication Context Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function authReducer(state, action) {\n  if (action.type === 'LOGIN') return { user: action.payload, isAuthenticated: true };\n  return { user: null, isAuthenticated: false };\n}\nconst state = authReducer({}, { type: 'LOGIN', payload: 'Sarah' });",
    "hints": [
      "Write:\nfunction authReducer(state, action) {\n  if (action.type === 'LOGIN') return { user: action.payload, isAuthenticated: true };\n  return { user: null, isAuthenticated: false };\n}\nconst state = authReducer({}, { type: 'LOGIN', payload: 'Sarah' });"
    ],
    "testCases": [
      {
        "id": "react-84-tc-1",
        "description": "Verifies correct implementation for Authentication Context Pattern",
        "testFn": "state.isAuthenticated === true && state.user === 'Sarah'"
      }
    ]
  },
  {
    "id": "react-85-shopping-cart-context-pattern",
    "title": "85. Shopping Cart Context Pattern",
    "slug": "lesson-85-shopping-cart-context-pattern",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Shopping Cart Context Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Shopping Cart Context Pattern",
      "React 19"
    ],
    "analogy": "A digital shopping cart on wheels following you across every department of a store.",
    "explanationMarkdown": "### Shopping Cart Context Pattern\n\nProvides items list, total calculation, `addToCart`, and `checkout` functions across all store pages.\n\n```react\nfunction cartManager(cart, item) {\n  return [...cart, item];\n}\nconst updatedCart = cartManager([], { id: 'c1', price: 50 });\n```",
    "workedExample": {
      "title": "Worked Example: Shopping Cart Context Pattern",
      "code": "function cartManager(cart, item) {\n  return [...cart, item];\n}\nconst updatedCart = cartManager([], { id: 'c1', price: 50 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shopping Cart Context Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shopping Cart Context Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function cartManager(cart, item) {\n  return [...cart, item];\n}\nconst updatedCart = cartManager([], { id: 'c1', price: 50 });",
    "hints": [
      "Write:\nfunction cartManager(cart, item) {\n  return [...cart, item];\n}\nconst updatedCart = cartManager([], { id: 'c1', price: 50 });"
    ],
    "testCases": [
      {
        "id": "react-85-tc-1",
        "description": "Verifies correct implementation for Shopping Cart Context Pattern",
        "testFn": "updatedCart.length === 1 && updatedCart[0].price === 50"
      }
    ]
  },
  {
    "id": "react-86-context-re-render-characteristic",
    "title": "86. Context Re-render Characteristics",
    "slug": "lesson-86-context-re-render-characteristic",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Context Re-render Characteristics in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Context Re-render Characteristics",
      "React 19"
    ],
    "analogy": "A siren sounding in the town square: every resident hearing it pauses what they're doing.",
    "explanationMarkdown": "### Context Re-render Characteristics\n\nWhen a context provider value changes, all components that call `useContext` will re-render!\n\n```react\nfunction checkContextConsumers(hasChanged) {\n  return { reRenderAllConsumers: hasChanged };\n}\nconst res = checkContextConsumers(true);\n```",
    "workedExample": {
      "title": "Worked Example: Context Re-render Characteristics",
      "code": "function checkContextConsumers(hasChanged) {\n  return { reRenderAllConsumers: hasChanged };\n}\nconst res = checkContextConsumers(true);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Context Re-render Characteristics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Context Re-render Characteristics.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function checkContextConsumers(hasChanged) {\n  return { reRenderAllConsumers: hasChanged };\n}\nconst res = checkContextConsumers(true);",
    "hints": [
      "Write:\nfunction checkContextConsumers(hasChanged) {\n  return { reRenderAllConsumers: hasChanged };\n}\nconst res = checkContextConsumers(true);"
    ],
    "testCases": [
      {
        "id": "react-86-tc-1",
        "description": "Verifies correct implementation for Context Re-render Characteristics",
        "testFn": "res.reRenderAllConsumers === true"
      }
    ]
  },
  {
    "id": "react-87-splitting-contexts-state-vs-disp",
    "title": "87. Splitting Contexts: State vs Dispatch",
    "slug": "lesson-87-splitting-contexts-state-vs-disp",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Splitting Contexts: State vs Dispatch in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Splitting Contexts",
      "React 19"
    ],
    "analogy": "Having one channel for news reports (state) and a separate phone line for placing orders (dispatch).",
    "explanationMarkdown": "### Splitting Contexts: State vs Dispatch\n\nSplit context into separate state and dispatch providers so components that only dispatch actions don't re-render on state changes.\n\n```react\nfunction splitContexts() {\n  return { StateContext: {}, DispatchContext: {} };\n}\nconst ctxs = splitContexts();\n```",
    "workedExample": {
      "title": "Worked Example: Splitting Contexts: State vs Dispatch",
      "code": "function splitContexts() {\n  return { StateContext: {}, DispatchContext: {} };\n}\nconst ctxs = splitContexts();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Splitting Contexts: State vs Dispatch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Splitting Contexts: State vs Dispatch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function splitContexts() {\n  return { StateContext: {}, DispatchContext: {} };\n}\nconst ctxs = splitContexts();",
    "hints": [
      "Write:\nfunction splitContexts() {\n  return { StateContext: {}, DispatchContext: {} };\n}\nconst ctxs = splitContexts();"
    ],
    "testCases": [
      {
        "id": "react-87-tc-1",
        "description": "Verifies correct implementation for Splitting Contexts: State vs Dispatch",
        "testFn": "Boolean(ctxs.StateContext && ctxs.DispatchContext)"
      }
    ]
  },
  {
    "id": "react-88-memoizing-context-provider-value",
    "title": "88. Memoizing Context Provider Values",
    "slug": "lesson-88-memoizing-context-provider-value",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Memoizing Context Provider Values in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Memoizing Context Provider Values",
      "React 19"
    ],
    "analogy": "A laminated ID card that doesn't need to be reprinted unless your name or picture changes.",
    "explanationMarkdown": "### Memoizing Context Provider Values\n\nWrap provider values in `useMemo` so child consumers don't re-render if the provider's parent re-renders.\n\n```react\nfunction memoizeProviderValue(user, theme) {\n  return { user, theme };\n}\nconst val = memoizeProviderValue('Alex', 'dark');\n```",
    "workedExample": {
      "title": "Worked Example: Memoizing Context Provider Values",
      "code": "function memoizeProviderValue(user, theme) {\n  return { user, theme };\n}\nconst val = memoizeProviderValue('Alex', 'dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Memoizing Context Provider Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Memoizing Context Provider Values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function memoizeProviderValue(user, theme) {\n  return { user, theme };\n}\nconst val = memoizeProviderValue('Alex', 'dark');",
    "hints": [
      "Write:\nfunction memoizeProviderValue(user, theme) {\n  return { user, theme };\n}\nconst val = memoizeProviderValue('Alex', 'dark');"
    ],
    "testCases": [
      {
        "id": "react-88-tc-1",
        "description": "Verifies correct implementation for Memoizing Context Provider Values",
        "testFn": "val.user === 'Alex' && val.theme === 'dark'"
      }
    ]
  },
  {
    "id": "react-89-context-vs-external-state-manage",
    "title": "89. Context vs External State Managers (Redux / Zustand)",
    "slug": "lesson-89-context-vs-external-state-manage",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Context vs External State Managers (Redux / Zustand) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Context vs External State Managers (Redux / Zustand)",
      "React 19"
    ],
    "analogy": "Using a family whiteboard for household chores vs an enterprise CRM for a 5,000-person corporation.",
    "explanationMarkdown": "### Context vs External State Managers (Redux / Zustand)\n\nContext is ideal for low-frequency global state (themes, auth); external state managers excel at high-frequency data streams.\n\n```react\nfunction evaluateStateTool(scale) {\n  return scale === 'simple' ? 'Context' : 'Zustand/Redux';\n}\nconst tool = evaluateStateTool('complex');\n```",
    "workedExample": {
      "title": "Worked Example: Context vs External State Managers (Redux / Zustand)",
      "code": "function evaluateStateTool(scale) {\n  return scale === 'simple' ? 'Context' : 'Zustand/Redux';\n}\nconst tool = evaluateStateTool('complex');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Context vs External State Managers (Redux / Zustand).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Context vs External State Managers (Redux / Zustand).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function evaluateStateTool(scale) {\n  return scale === 'simple' ? 'Context' : 'Zustand/Redux';\n}\nconst tool = evaluateStateTool('complex');",
    "hints": [
      "Write:\nfunction evaluateStateTool(scale) {\n  return scale === 'simple' ? 'Context' : 'Zustand/Redux';\n}\nconst tool = evaluateStateTool('complex');"
    ],
    "testCases": [
      {
        "id": "react-89-tc-1",
        "description": "Verifies correct implementation for Context vs External State Managers (Redux / Zustand)",
        "testFn": "tool === 'Zustand/Redux'"
      }
    ]
  },
  {
    "id": "react-90-module-6-review-scalable-context",
    "title": "90. Module 6 Review: Scalable Context System",
    "slug": "lesson-90-module-6-review-scalable-context",
    "language": "react",
    "category": "Module 6: Global State & Context API",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 6 Review: Scalable Context System in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "React 19"
    ],
    "analogy": "Layering communication channels cleanly across the application tree.",
    "explanationMarkdown": "### Module 6 Review: Scalable Context System\n\nA robust multi-provider tree organizing auth, themes, notifications, and settings cleanly.\n\n```react\nfunction GlobalProvidersMock({ children }) {\n  return { wrapped: true, children };\n}\nconst tree = GlobalProvidersMock({ children: 'App' });\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Scalable Context System",
      "code": "function GlobalProvidersMock({ children }) {\n  return { wrapped: true, children };\n}\nconst tree = GlobalProvidersMock({ children: 'App' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Scalable Context System.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Scalable Context System.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function GlobalProvidersMock({ children }) {\n  return { wrapped: true, children };\n}\nconst tree = GlobalProvidersMock({ children: 'App' });",
    "hints": [
      "Write:\nfunction GlobalProvidersMock({ children }) {\n  return { wrapped: true, children };\n}\nconst tree = GlobalProvidersMock({ children: 'App' });"
    ],
    "testCases": [
      {
        "id": "react-90-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Scalable Context System",
        "testFn": "tree.wrapped === true"
      }
    ]
  },
  {
    "id": "react-91-the-usereducer-mental-model",
    "title": "91. The useReducer Mental Model",
    "slug": "lesson-91-the-usereducer-mental-model",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The useReducer Mental Model in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useReducer Mental Model",
      "React 19"
    ],
    "analogy": "An accountant's journal: instead of scribbling numbers anywhere, you record explicit credit/debit transactions.",
    "explanationMarkdown": "### The useReducer Mental Model\n\n`useReducer` manages complex state transitions by dispatching explicit action objects to a pure reducer function.\n\n```react\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'INC': return state + 1;\n    default: return state;\n  }\n}\nconst s = reducer(0, { type: 'INC' });\n```",
    "workedExample": {
      "title": "Worked Example: The useReducer Mental Model",
      "code": "function reducer(state, action) {\n  switch (action.type) {\n    case 'INC': return state + 1;\n    default: return state;\n  }\n}\nconst s = reducer(0, { type: 'INC' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useReducer Mental Model.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useReducer Mental Model.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function reducer(state, action) {\n  switch (action.type) {\n    case 'INC': return state + 1;\n    default: return state;\n  }\n}\nconst s = reducer(0, { type: 'INC' });",
    "hints": [
      "Write:\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'INC': return state + 1;\n    default: return state;\n  }\n}\nconst s = reducer(0, { type: 'INC' });"
    ],
    "testCases": [
      {
        "id": "react-91-tc-1",
        "description": "Verifies correct implementation for The useReducer Mental Model",
        "testFn": "s === 1"
      }
    ]
  },
  {
    "id": "react-92-action-objects-and-action-types",
    "title": "92. Action Objects and Action Types",
    "slug": "lesson-92-action-objects-and-action-types",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Action Objects and Action Types in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Action Objects and Action Types",
      "React 19"
    ],
    "analogy": "A deposit slip filled out with the transaction type ('Deposit') and cash amount ($50).",
    "explanationMarkdown": "### Action Objects and Action Types\n\nActions are plain JavaScript objects containing a `type` string describing what happened and optional `payload` data.\n\n```react\nfunction createAction(type, payload) {\n  return { type, payload };\n}\nconst action = createAction('SET_USER', { name: 'Sarah' });\n```",
    "workedExample": {
      "title": "Worked Example: Action Objects and Action Types",
      "code": "function createAction(type, payload) {\n  return { type, payload };\n}\nconst action = createAction('SET_USER', { name: 'Sarah' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Action Objects and Action Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Action Objects and Action Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createAction(type, payload) {\n  return { type, payload };\n}\nconst action = createAction('SET_USER', { name: 'Sarah' });",
    "hints": [
      "Write:\nfunction createAction(type, payload) {\n  return { type, payload };\n}\nconst action = createAction('SET_USER', { name: 'Sarah' });"
    ],
    "testCases": [
      {
        "id": "react-92-tc-1",
        "description": "Verifies correct implementation for Action Objects and Action Types",
        "testFn": "action.type === 'SET_USER' && action.payload.name === 'Sarah'"
      }
    ]
  },
  {
    "id": "react-93-pure-reducer-function-rules",
    "title": "93. Pure Reducer Function Rules",
    "slug": "lesson-93-pure-reducer-function-rules",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pure Reducer Function Rules in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Pure Reducer Function Rules",
      "React 19"
    ],
    "analogy": "A calculator: entering 5 + 3 always yields 8, without ordering a pizza or changing tomorrow's weather.",
    "explanationMarkdown": "### Pure Reducer Function Rules\n\nReducers must be strictly pure functions: no mutations, no network requests, no side effects.\n\n```react\nfunction pureAdd(state, num) {\n  return state + num;\n}\nconst res = pureAdd(10, 5);\n```",
    "workedExample": {
      "title": "Worked Example: Pure Reducer Function Rules",
      "code": "function pureAdd(state, num) {\n  return state + num;\n}\nconst res = pureAdd(10, 5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pure Reducer Function Rules.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pure Reducer Function Rules.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function pureAdd(state, num) {\n  return state + num;\n}\nconst res = pureAdd(10, 5);",
    "hints": [
      "Write:\nfunction pureAdd(state, num) {\n  return state + num;\n}\nconst res = pureAdd(10, 5);"
    ],
    "testCases": [
      {
        "id": "react-93-tc-1",
        "description": "Verifies correct implementation for Pure Reducer Function Rules",
        "testFn": "res === 15"
      }
    ]
  },
  {
    "id": "react-94-handling-state-transitions-with-",
    "title": "94. Handling State Transitions with Switch Statements",
    "slug": "lesson-94-handling-state-transitions-with-",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Handling State Transitions with Switch Statements in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Handling State Transitions with Switch Statements",
      "React 19"
    ],
    "analogy": "A railroad switch operator directing incoming trains to Track A, Track B, or holding track.",
    "explanationMarkdown": "### Handling State Transitions with Switch Statements\n\nSwitch statements cleanly partition handling for multiple action types, returning new state immutably.\n\n```react\nfunction taskReducer(state, action) {\n  switch (action.type) {\n    case 'ADD': return [...state, action.payload];\n    case 'RESET': return [];\n    default: return state;\n  }\n}\nconst s = taskReducer([], { type: 'ADD', payload: 'Learn Reducer' });\n```",
    "workedExample": {
      "title": "Worked Example: Handling State Transitions with Switch Statements",
      "code": "function taskReducer(state, action) {\n  switch (action.type) {\n    case 'ADD': return [...state, action.payload];\n    case 'RESET': return [];\n    default: return state;\n  }\n}\nconst s = taskReducer([], { type: 'ADD', payload: 'Learn Reducer' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling State Transitions with Switch Statements.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling State Transitions with Switch Statements.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function taskReducer(state, action) {\n  switch (action.type) {\n    case 'ADD': return [...state, action.payload];\n    case 'RESET': return [];\n    default: return state;\n  }\n}\nconst s = taskReducer([], { type: 'ADD', payload: 'Learn Reducer' });",
    "hints": [
      "Write:\nfunction taskReducer(state, action) {\n  switch (action.type) {\n    case 'ADD': return [...state, action.payload];\n    case 'RESET': return [];\n    default: return state;\n  }\n}\nconst s = taskReducer([], { type: 'ADD', payload: 'Learn Reducer' });"
    ],
    "testCases": [
      {
        "id": "react-94-tc-1",
        "description": "Verifies correct implementation for Handling State Transitions with Switch Statements",
        "testFn": "s.length === 1 && s[0] === 'Learn Reducer'"
      }
    ]
  },
  {
    "id": "react-95-initializing-usereducer-state-in",
    "title": "95. Initializing useReducer State (init function)",
    "slug": "lesson-95-initializing-usereducer-state-in",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Initializing useReducer State (init function) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Initializing useReducer State (init function)",
      "React 19"
    ],
    "analogy": "Booting a spaceship navigation computer and loading initial coordinates from disk.",
    "explanationMarkdown": "### Initializing useReducer State (init function)\n\nPass a third `init` argument to `useReducer(reducer, initialArg, init)` to calculate initial state lazily.\n\n```react\nfunction initReducerState(initialCount) {\n  return { count: initialCount, history: [initialCount] };\n}\nconst init = initReducerState(5);\n```",
    "workedExample": {
      "title": "Worked Example: Initializing useReducer State (init function)",
      "code": "function initReducerState(initialCount) {\n  return { count: initialCount, history: [initialCount] };\n}\nconst init = initReducerState(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Initializing useReducer State (init function).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Initializing useReducer State (init function).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function initReducerState(initialCount) {\n  return { count: initialCount, history: [initialCount] };\n}\nconst init = initReducerState(5);",
    "hints": [
      "Write:\nfunction initReducerState(initialCount) {\n  return { count: initialCount, history: [initialCount] };\n}\nconst init = initReducerState(5);"
    ],
    "testCases": [
      {
        "id": "react-95-tc-1",
        "description": "Verifies correct implementation for Initializing useReducer State (init function)",
        "testFn": "init.count === 5 && init.history.length === 1"
      }
    ]
  },
  {
    "id": "react-96-combining-usereducer-with-usecon",
    "title": "96. Combining useReducer with useContext",
    "slug": "lesson-96-combining-usereducer-with-usecon",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Combining useReducer with useContext in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Combining useReducer with useContext",
      "React 19"
    ],
    "analogy": "Connecting a bank teller terminal directly to the master bank database ledger.",
    "explanationMarkdown": "### Combining useReducer with useContext\n\nProvide `[state, dispatch]` via Context to allow deep child components to dispatch actions without prop drilling.\n\n```react\nfunction dispatchContextMock() {\n  return { state: { count: 0 }, dispatch: (action) => action };\n}\nconst ctx = dispatchContextMock();\n```",
    "workedExample": {
      "title": "Worked Example: Combining useReducer with useContext",
      "code": "function dispatchContextMock() {\n  return { state: { count: 0 }, dispatch: (action) => action };\n}\nconst ctx = dispatchContextMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combining useReducer with useContext.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combining useReducer with useContext.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function dispatchContextMock() {\n  return { state: { count: 0 }, dispatch: (action) => action };\n}\nconst ctx = dispatchContextMock();",
    "hints": [
      "Write:\nfunction dispatchContextMock() {\n  return { state: { count: 0 }, dispatch: (action) => action };\n}\nconst ctx = dispatchContextMock();"
    ],
    "testCases": [
      {
        "id": "react-96-tc-1",
        "description": "Verifies correct implementation for Combining useReducer with useContext",
        "testFn": "typeof ctx.dispatch === 'function'"
      }
    ]
  },
  {
    "id": "react-97-undo---redo-state-machine-archit",
    "title": "97. Undo / Redo State Machine Architecture",
    "slug": "lesson-97-undo---redo-state-machine-archit",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Undo / Redo State Machine Architecture in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Undo / Redo State Machine Architecture",
      "React 19"
    ],
    "analogy": "A time machine recording snapshots of past, present, and future timelines.",
    "explanationMarkdown": "### Undo / Redo State Machine Architecture\n\nModel undo/redo functionality using past, present, and future array stacks inside a reducer.\n\n```react\nfunction undoableReducer(state, action) {\n  if (action.type === 'UNDO') {\n    const previous = state.past[state.past.length - 1];\n    return { past: state.past.slice(0, -1), present: previous, future: [state.present, ...state.future] };\n  }\n  return state;\n}\nconst s = undoableReducer({ past: ['a'], present: 'b', future: [] }, { type: 'UNDO' });\n```",
    "workedExample": {
      "title": "Worked Example: Undo / Redo State Machine Architecture",
      "code": "function undoableReducer(state, action) {\n  if (action.type === 'UNDO') {\n    const previous = state.past[state.past.length - 1];\n    return { past: state.past.slice(0, -1), present: previous, future: [state.present, ...state.future] };\n  }\n  return state;\n}\nconst s = undoableReducer({ past: ['a'], present: 'b', future: [] }, { type: 'UNDO' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Undo / Redo State Machine Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Undo / Redo State Machine Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function undoableReducer(state, action) {\n  if (action.type === 'UNDO') {\n    const previous = state.past[state.past.length - 1];\n    return { past: state.past.slice(0, -1), present: previous, future: [state.present, ...state.future] };\n  }\n  return state;\n}\nconst s = undoableReducer({ past: ['a'], present: 'b', future: [] }, { type: 'UNDO' });",
    "hints": [
      "Write:\nfunction undoableReducer(state, action) {\n  if (action.type === 'UNDO') {\n    const previous = state.past[state.past.length - 1];\n    return { past: state.past.slice(0, -1), present: previous, future: [state.present, ...state.future] };\n  }\n  return state;\n}\nconst s = undoableReducer({ past: ['a'], present: 'b', future: [] }, { type: 'UNDO' });"
    ],
    "testCases": [
      {
        "id": "react-97-tc-1",
        "description": "Verifies correct implementation for Undo / Redo State Machine Architecture",
        "testFn": "s.present === 'a' && s.future[0] === 'b'"
      }
    ]
  },
  {
    "id": "react-98-multi-step-form-wizard-state-mac",
    "title": "98. Multi-Step Form Wizard State Machine",
    "slug": "lesson-98-multi-step-form-wizard-state-mac",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multi-Step Form Wizard State Machine in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Multi-Step Form Wizard State Machine",
      "React 19"
    ],
    "analogy": "A passport application booklet guiding you through Step 1 (Personal Info), Step 2 (Travel History), Step 3 (Payment).",
    "explanationMarkdown": "### Multi-Step Form Wizard State Machine\n\nA reducer orchestrates step progression, validation states, and cumulative form data cleanly.\n\n```react\nfunction wizardReducer(state, action) {\n  switch (action.type) {\n    case 'NEXT_STEP': return { ...state, step: state.step + 1 };\n    case 'SET_DATA': return { ...state, data: { ...state.data, ...action.payload } };\n    default: return state;\n  }\n}\nconst w = wizardReducer({ step: 1, data: {} }, { type: 'NEXT_STEP' });\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Step Form Wizard State Machine",
      "code": "function wizardReducer(state, action) {\n  switch (action.type) {\n    case 'NEXT_STEP': return { ...state, step: state.step + 1 };\n    case 'SET_DATA': return { ...state, data: { ...state.data, ...action.payload } };\n    default: return state;\n  }\n}\nconst w = wizardReducer({ step: 1, data: {} }, { type: 'NEXT_STEP' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Step Form Wizard State Machine.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Step Form Wizard State Machine.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function wizardReducer(state, action) {\n  switch (action.type) {\n    case 'NEXT_STEP': return { ...state, step: state.step + 1 };\n    case 'SET_DATA': return { ...state, data: { ...state.data, ...action.payload } };\n    default: return state;\n  }\n}\nconst w = wizardReducer({ step: 1, data: {} }, { type: 'NEXT_STEP' });",
    "hints": [
      "Write:\nfunction wizardReducer(state, action) {\n  switch (action.type) {\n    case 'NEXT_STEP': return { ...state, step: state.step + 1 };\n    case 'SET_DATA': return { ...state, data: { ...state.data, ...action.payload } };\n    default: return state;\n  }\n}\nconst w = wizardReducer({ step: 1, data: {} }, { type: 'NEXT_STEP' });"
    ],
    "testCases": [
      {
        "id": "react-98-tc-1",
        "description": "Verifies correct implementation for Multi-Step Form Wizard State Machine",
        "testFn": "w.step === 2"
      }
    ]
  },
  {
    "id": "react-99-async-actions-with-usereducer-&-",
    "title": "99. Async Actions with useReducer & useEffect",
    "slug": "lesson-99-async-actions-with-usereducer-&-",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Async Actions with useReducer & useEffect in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Async Actions with useReducer & useEffect",
      "React 19"
    ],
    "analogy": "A package tracking status: 'Dispatched', 'Out for Delivery', 'Delivered'.",
    "explanationMarkdown": "### Async Actions with useReducer & useEffect\n\nDispatch START, SUCCESS, or FAIL actions to model asynchronous request lifecycles cleanly.\n\n```react\nfunction asyncFetchReducer(state, action) {\n  switch (action.type) {\n    case 'START': return { ...state, loading: true };\n    case 'SUCCESS': return { loading: false, data: action.payload, error: null };\n    case 'FAIL': return { loading: false, data: null, error: action.payload };\n    default: return state;\n  }\n}\nconst s = asyncFetchReducer({}, { type: 'SUCCESS', payload: ['user1'] });\n```",
    "workedExample": {
      "title": "Worked Example: Async Actions with useReducer & useEffect",
      "code": "function asyncFetchReducer(state, action) {\n  switch (action.type) {\n    case 'START': return { ...state, loading: true };\n    case 'SUCCESS': return { loading: false, data: action.payload, error: null };\n    case 'FAIL': return { loading: false, data: null, error: action.payload };\n    default: return state;\n  }\n}\nconst s = asyncFetchReducer({}, { type: 'SUCCESS', payload: ['user1'] });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Async Actions with useReducer & useEffect.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Async Actions with useReducer & useEffect.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function asyncFetchReducer(state, action) {\n  switch (action.type) {\n    case 'START': return { ...state, loading: true };\n    case 'SUCCESS': return { loading: false, data: action.payload, error: null };\n    case 'FAIL': return { loading: false, data: null, error: action.payload };\n    default: return state;\n  }\n}\nconst s = asyncFetchReducer({}, { type: 'SUCCESS', payload: ['user1'] });",
    "hints": [
      "Write:\nfunction asyncFetchReducer(state, action) {\n  switch (action.type) {\n    case 'START': return { ...state, loading: true };\n    case 'SUCCESS': return { loading: false, data: action.payload, error: null };\n    case 'FAIL': return { loading: false, data: null, error: action.payload };\n    default: return state;\n  }\n}\nconst s = asyncFetchReducer({}, { type: 'SUCCESS', payload: ['user1'] });"
    ],
    "testCases": [
      {
        "id": "react-99-tc-1",
        "description": "Verifies correct implementation for Async Actions with useReducer & useEffect",
        "testFn": "s.loading === false && s.data.length === 1"
      }
    ]
  },
  {
    "id": "react-100-debugging-with-action-logging-mi",
    "title": "100. Debugging with Action Logging Middleware",
    "slug": "lesson-100-debugging-with-action-logging-mi",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Debugging with Action Logging Middleware in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Debugging with Action Logging Middleware",
      "React 19"
    ],
    "analogy": "A flight black box recording every single control stick movement and pedal adjustment.",
    "explanationMarkdown": "### Debugging with Action Logging Middleware\n\nLogging actions and resulting state transitions makes debugging complex applications effortless.\n\n```react\nfunction logAction(state, action) {\n  const next = { ...state, lastAction: action.type };\n  return next;\n}\nconst logged = logAction({}, { type: 'SUBMIT' });\n```",
    "workedExample": {
      "title": "Worked Example: Debugging with Action Logging Middleware",
      "code": "function logAction(state, action) {\n  const next = { ...state, lastAction: action.type };\n  return next;\n}\nconst logged = logAction({}, { type: 'SUBMIT' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Debugging with Action Logging Middleware.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Debugging with Action Logging Middleware.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function logAction(state, action) {\n  const next = { ...state, lastAction: action.type };\n  return next;\n}\nconst logged = logAction({}, { type: 'SUBMIT' });",
    "hints": [
      "Write:\nfunction logAction(state, action) {\n  const next = { ...state, lastAction: action.type };\n  return next;\n}\nconst logged = logAction({}, { type: 'SUBMIT' });"
    ],
    "testCases": [
      {
        "id": "react-100-tc-1",
        "description": "Verifies correct implementation for Debugging with Action Logging Middleware",
        "testFn": "logged.lastAction === 'SUBMIT'"
      }
    ]
  },
  {
    "id": "react-101-reducer-composition-pattern",
    "title": "101. Reducer Composition Pattern",
    "slug": "lesson-101-reducer-composition-pattern",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Reducer Composition Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Reducer Composition Pattern",
      "React 19"
    ],
    "analogy": "Dividing municipal governance among separate departments: Department of Transportation and Department of Parks.",
    "explanationMarkdown": "### Reducer Composition Pattern\n\nSplit large state objects into smaller reducer functions that each manage their own slice of state.\n\n```react\nfunction combineReducersMock(r1, r2) {\n  return (state = {}, action) => ({ user: r1(state.user, action), items: r2(state.items, action) });\n}\nconst root = combineReducersMock((s = 'user') => s, (s = []) => s);\nconst state = root(undefined, {});\n```",
    "workedExample": {
      "title": "Worked Example: Reducer Composition Pattern",
      "code": "function combineReducersMock(r1, r2) {\n  return (state = {}, action) => ({ user: r1(state.user, action), items: r2(state.items, action) });\n}\nconst root = combineReducersMock((s = 'user') => s, (s = []) => s);\nconst state = root(undefined, {});",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reducer Composition Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reducer Composition Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function combineReducersMock(r1, r2) {\n  return (state = {}, action) => ({ user: r1(state.user, action), items: r2(state.items, action) });\n}\nconst root = combineReducersMock((s = 'user') => s, (s = []) => s);\nconst state = root(undefined, {});",
    "hints": [
      "Write:\nfunction combineReducersMock(r1, r2) {\n  return (state = {}, action) => ({ user: r1(state.user, action), items: r2(state.items, action) });\n}\nconst root = combineReducersMock((s = 'user') => s, (s = []) => s);\nconst state = root(undefined, {});"
    ],
    "testCases": [
      {
        "id": "react-101-tc-1",
        "description": "Verifies correct implementation for Reducer Composition Pattern",
        "testFn": "state.user === 'user' && Array.isArray(state.items)"
      }
    ]
  },
  {
    "id": "react-102-action-creator-helper-functions",
    "title": "102. Action Creator Helper Functions",
    "slug": "lesson-102-action-creator-helper-functions",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Action Creator Helper Functions in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Action Creator Helper Functions",
      "React 19"
    ],
    "analogy": "A pre-printed stamp machine: it stamps out standardized, valid forms every time.",
    "explanationMarkdown": "### Action Creator Helper Functions\n\nAction creators prevent typos and standardize payload formatting when dispatching actions.\n\n```react\nfunction addTodoAction(title) {\n  return { type: 'ADD_TODO', payload: { id: 1, title, completed: false } };\n}\nconst action = addTodoAction('Master React');\n```",
    "workedExample": {
      "title": "Worked Example: Action Creator Helper Functions",
      "code": "function addTodoAction(title) {\n  return { type: 'ADD_TODO', payload: { id: 1, title, completed: false } };\n}\nconst action = addTodoAction('Master React');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Action Creator Helper Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Action Creator Helper Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function addTodoAction(title) {\n  return { type: 'ADD_TODO', payload: { id: 1, title, completed: false } };\n}\nconst action = addTodoAction('Master React');",
    "hints": [
      "Write:\nfunction addTodoAction(title) {\n  return { type: 'ADD_TODO', payload: { id: 1, title, completed: false } };\n}\nconst action = addTodoAction('Master React');"
    ],
    "testCases": [
      {
        "id": "react-102-tc-1",
        "description": "Verifies correct implementation for Action Creator Helper Functions",
        "testFn": "action.type === 'ADD_TODO' && action.payload.title === 'Master React'"
      }
    ]
  },
  {
    "id": "react-103-discriminated-union-types-for-re",
    "title": "103. Discriminated Union Types for Reducers (TypeScript)",
    "slug": "lesson-103-discriminated-union-types-for-re",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Discriminated Union Types for Reducers (TypeScript) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Discriminated Union Types for Reducers (TypeScript)",
      "React 19"
    ],
    "analogy": "A key that only turns in the lock when both the grooving and the electronic chip match.",
    "explanationMarkdown": "### Discriminated Union Types for Reducers (TypeScript)\n\nPairing TypeScript discriminated unions with reducers guarantees type safety for every action payload.\n\n```react\nfunction handleTypedAction(action) {\n  if (action.type === 'INCREMENT') return action.by;\n  return 0;\n}\nconst by = handleTypedAction({ type: 'INCREMENT', by: 5 });\n```",
    "workedExample": {
      "title": "Worked Example: Discriminated Union Types for Reducers (TypeScript)",
      "code": "function handleTypedAction(action) {\n  if (action.type === 'INCREMENT') return action.by;\n  return 0;\n}\nconst by = handleTypedAction({ type: 'INCREMENT', by: 5 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Discriminated Union Types for Reducers (TypeScript).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Discriminated Union Types for Reducers (TypeScript).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function handleTypedAction(action) {\n  if (action.type === 'INCREMENT') return action.by;\n  return 0;\n}\nconst by = handleTypedAction({ type: 'INCREMENT', by: 5 });",
    "hints": [
      "Write:\nfunction handleTypedAction(action) {\n  if (action.type === 'INCREMENT') return action.by;\n  return 0;\n}\nconst by = handleTypedAction({ type: 'INCREMENT', by: 5 });"
    ],
    "testCases": [
      {
        "id": "react-103-tc-1",
        "description": "Verifies correct implementation for Discriminated Union Types for Reducers (TypeScript)",
        "testFn": "by === 5"
      }
    ]
  },
  {
    "id": "react-104-usestate-vs-usereducer-decision-",
    "title": "104. useState vs useReducer Decision Guide",
    "slug": "lesson-104-usestate-vs-usereducer-decision-",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master useState vs useReducer Decision Guide in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "useState vs useReducer Decision Guide",
      "React 19"
    ],
    "analogy": "A pocket calculator for everyday expenses vs double-entry bookkeeping for corporate tax filings.",
    "explanationMarkdown": "### useState vs useReducer Decision Guide\n\nUse `useState` for simple standalone primitives; use `useReducer` when state transitions are interdependent.\n\n```react\nfunction chooseStateTool(complexity) {\n  return complexity > 3 ? 'useReducer' : 'useState';\n}\nconst choice = chooseStateTool(5);\n```",
    "workedExample": {
      "title": "Worked Example: useState vs useReducer Decision Guide",
      "code": "function chooseStateTool(complexity) {\n  return complexity > 3 ? 'useReducer' : 'useState';\n}\nconst choice = chooseStateTool(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for useState vs useReducer Decision Guide.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of useState vs useReducer Decision Guide.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function chooseStateTool(complexity) {\n  return complexity > 3 ? 'useReducer' : 'useState';\n}\nconst choice = chooseStateTool(5);",
    "hints": [
      "Write:\nfunction chooseStateTool(complexity) {\n  return complexity > 3 ? 'useReducer' : 'useState';\n}\nconst choice = chooseStateTool(5);"
    ],
    "testCases": [
      {
        "id": "react-104-tc-1",
        "description": "Verifies correct implementation for useState vs useReducer Decision Guide",
        "testFn": "choice === 'useReducer'"
      }
    ]
  },
  {
    "id": "react-105-module-7-review-production-reduc",
    "title": "105. Module 7 Review: Production Reducer Capstone",
    "slug": "lesson-105-module-7-review-production-reduc",
    "language": "react",
    "category": "Module 7: Complex State with useReducer",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 7 Review: Production Reducer Capstone in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Module 7 Review",
      "React 19"
    ],
    "analogy": "A master warehouse inventory control management system.",
    "explanationMarkdown": "### Module 7 Review: Production Reducer Capstone\n\nA full state machine coordinating inventory, restocking, checkout, and alerts seamlessly.\n\n```react\nfunction inventoryReducer(state, action) {\n  if (action.type === 'RESTOCK') return { ...state, stock: state.stock + action.qty };\n  return state;\n}\nconst inv = inventoryReducer({ stock: 10 }, { type: 'RESTOCK', qty: 25 });\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Production Reducer Capstone",
      "code": "function inventoryReducer(state, action) {\n  if (action.type === 'RESTOCK') return { ...state, stock: state.stock + action.qty };\n  return state;\n}\nconst inv = inventoryReducer({ stock: 10 }, { type: 'RESTOCK', qty: 25 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 7 Review: Production Reducer Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 7 Review: Production Reducer Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function inventoryReducer(state, action) {\n  if (action.type === 'RESTOCK') return { ...state, stock: state.stock + action.qty };\n  return state;\n}\nconst inv = inventoryReducer({ stock: 10 }, { type: 'RESTOCK', qty: 25 });",
    "hints": [
      "Write:\nfunction inventoryReducer(state, action) {\n  if (action.type === 'RESTOCK') return { ...state, stock: state.stock + action.qty };\n  return state;\n}\nconst inv = inventoryReducer({ stock: 10 }, { type: 'RESTOCK', qty: 25 });"
    ],
    "testCases": [
      {
        "id": "react-105-tc-1",
        "description": "Verifies correct implementation for Module 7 Review: Production Reducer Capstone",
        "testFn": "inv.stock === 35"
      }
    ]
  },
  {
    "id": "react-106-why-do-react-components-re-rende",
    "title": "106. Why Do React Components Re-render?",
    "slug": "lesson-106-why-do-react-components-re-rende",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Why Do React Components Re-render? in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Why Do React Components Re-render?",
      "React 19"
    ],
    "analogy": "An artist repainting the entire canvas whenever a single cloud in the sky drifts to the left.",
    "explanationMarkdown": "### Why Do React Components Re-render?\n\nComponents re-render when their state changes, their context changes, or their parent component re-renders.\n\n```react\nfunction getRenderReasons() {\n  return ['State changed', 'Parent re-rendered', 'Context changed', 'Props changed'];\n}\nconst reasons = getRenderReasons();\n```",
    "workedExample": {
      "title": "Worked Example: Why Do React Components Re-render?",
      "code": "function getRenderReasons() {\n  return ['State changed', 'Parent re-rendered', 'Context changed', 'Props changed'];\n}\nconst reasons = getRenderReasons();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Do React Components Re-render?.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Do React Components Re-render?.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function getRenderReasons() {\n  return ['State changed', 'Parent re-rendered', 'Context changed', 'Props changed'];\n}\nconst reasons = getRenderReasons();",
    "hints": [
      "Write:\nfunction getRenderReasons() {\n  return ['State changed', 'Parent re-rendered', 'Context changed', 'Props changed'];\n}\nconst reasons = getRenderReasons();"
    ],
    "testCases": [
      {
        "id": "react-106-tc-1",
        "description": "Verifies correct implementation for Why Do React Components Re-render?",
        "testFn": "reasons.length === 4"
      }
    ]
  },
  {
    "id": "react-107-react.memo-for-pure-components",
    "title": "107. React.memo for Pure Components",
    "slug": "lesson-107-react.memo-for-pure-components",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master React.memo for Pure Components in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React.memo for Pure Components",
      "React 19"
    ],
    "analogy": "A photo frame that only swaps prints if the photographer hands you an entirely new picture.",
    "explanationMarkdown": "### React.memo for Pure Components\n\n`React.memo` skips re-rendering a component if its incoming props have not changed.\n\n```react\nfunction memoMock(componentFn) {\n  return { component: componentFn, isMemoized: true };\n}\nconst Memoized = memoMock(() => null);\n```",
    "workedExample": {
      "title": "Worked Example: React.memo for Pure Components",
      "code": "function memoMock(componentFn) {\n  return { component: componentFn, isMemoized: true };\n}\nconst Memoized = memoMock(() => null);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React.memo for Pure Components.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React.memo for Pure Components.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function memoMock(componentFn) {\n  return { component: componentFn, isMemoized: true };\n}\nconst Memoized = memoMock(() => null);",
    "hints": [
      "Write:\nfunction memoMock(componentFn) {\n  return { component: componentFn, isMemoized: true };\n}\nconst Memoized = memoMock(() => null);"
    ],
    "testCases": [
      {
        "id": "react-107-tc-1",
        "description": "Verifies correct implementation for React.memo for Pure Components",
        "testFn": "Memoized.isMemoized === true"
      }
    ]
  },
  {
    "id": "react-108-custom-comparison-in-react.memo-",
    "title": "108. Custom Comparison in React.memo (areEqual)",
    "slug": "lesson-108-custom-comparison-in-react.memo-",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Custom Comparison in React.memo (areEqual) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Custom Comparison in React.memo (areEqual)",
      "React 19"
    ],
    "analogy": "A security guard checking only passport numbers, ignoring whether the passenger changed their shirt.",
    "explanationMarkdown": "### Custom Comparison in React.memo (areEqual)\n\nSupply a custom comparison function `(prev, next) => boolean` to customize re-render criteria.\n\n```react\nfunction arePropsEqual(prevProps, nextProps) {\n  return prevProps.id === nextProps.id;\n}\nconst same = arePropsEqual({ id: 1 }, { id: 1 });\n```",
    "workedExample": {
      "title": "Worked Example: Custom Comparison in React.memo (areEqual)",
      "code": "function arePropsEqual(prevProps, nextProps) {\n  return prevProps.id === nextProps.id;\n}\nconst same = arePropsEqual({ id: 1 }, { id: 1 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Comparison in React.memo (areEqual).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Comparison in React.memo (areEqual).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function arePropsEqual(prevProps, nextProps) {\n  return prevProps.id === nextProps.id;\n}\nconst same = arePropsEqual({ id: 1 }, { id: 1 });",
    "hints": [
      "Write:\nfunction arePropsEqual(prevProps, nextProps) {\n  return prevProps.id === nextProps.id;\n}\nconst same = arePropsEqual({ id: 1 }, { id: 1 });"
    ],
    "testCases": [
      {
        "id": "react-108-tc-1",
        "description": "Verifies correct implementation for Custom Comparison in React.memo (areEqual)",
        "testFn": "same === true"
      }
    ]
  },
  {
    "id": "react-109-expensive-calculations-with-usem",
    "title": "109. Expensive Calculations with useMemo",
    "slug": "lesson-109-expensive-calculations-with-usem",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Expensive Calculations with useMemo in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Expensive Calculations with useMemo",
      "React 19"
    ],
    "analogy": "Solving a 5,000-piece jigsaw puzzle once and hanging it on the wall instead of re-assembling it daily.",
    "explanationMarkdown": "### Expensive Calculations with useMemo\n\n`useMemo(() => calculateExpensiveValue(a, b), [a, b])` caches calculation results across renders.\n\n```react\nfunction computeFactorial(n) {\n  return n <= 1 ? 1 : n * computeFactorial(n - 1);\n}\nconst fact = computeFactorial(5);\n```",
    "workedExample": {
      "title": "Worked Example: Expensive Calculations with useMemo",
      "code": "function computeFactorial(n) {\n  return n <= 1 ? 1 : n * computeFactorial(n - 1);\n}\nconst fact = computeFactorial(5);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Expensive Calculations with useMemo.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Expensive Calculations with useMemo.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function computeFactorial(n) {\n  return n <= 1 ? 1 : n * computeFactorial(n - 1);\n}\nconst fact = computeFactorial(5);",
    "hints": [
      "Write:\nfunction computeFactorial(n) {\n  return n <= 1 ? 1 : n * computeFactorial(n - 1);\n}\nconst fact = computeFactorial(5);"
    ],
    "testCases": [
      {
        "id": "react-109-tc-1",
        "description": "Verifies correct implementation for Expensive Calculations with useMemo",
        "testFn": "fact === 120"
      }
    ]
  },
  {
    "id": "react-110-when-not-to-use-usememo",
    "title": "110. When NOT to Use useMemo",
    "slug": "lesson-110-when-not-to-use-usememo",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master When NOT to Use useMemo in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "When NOT to Use useMemo",
      "React 19"
    ],
    "analogy": "Hiring a private bodyguard to guard an empty pencil case.",
    "explanationMarkdown": "### When NOT to Use useMemo\n\nDon't wrap cheap primitive calculations in `useMemo`; the memory overhead of memoization exceeds the computation cost!\n\n```react\nfunction simpleSum(a, b) {\n  return a + b;\n}\nconst sum = simpleSum(2, 3);\n```",
    "workedExample": {
      "title": "Worked Example: When NOT to Use useMemo",
      "code": "function simpleSum(a, b) {\n  return a + b;\n}\nconst sum = simpleSum(2, 3);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for When NOT to Use useMemo.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of When NOT to Use useMemo.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function simpleSum(a, b) {\n  return a + b;\n}\nconst sum = simpleSum(2, 3);",
    "hints": [
      "Write:\nfunction simpleSum(a, b) {\n  return a + b;\n}\nconst sum = simpleSum(2, 3);"
    ],
    "testCases": [
      {
        "id": "react-110-tc-1",
        "description": "Verifies correct implementation for When NOT to Use useMemo",
        "testFn": "sum === 5"
      }
    ]
  },
  {
    "id": "react-111-memoizing-functions-with-usecall",
    "title": "111. Memoizing Functions with useCallback",
    "slug": "lesson-111-memoizing-functions-with-usecall",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Memoizing Functions with useCallback in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Memoizing Functions with useCallback",
      "React 19"
    ],
    "analogy": "Giving a friend an identical permanent telephone number instead of changing numbers daily.",
    "explanationMarkdown": "### Memoizing Functions with useCallback\n\n`useCallback(fn, deps)` preserves the function reference between renders, preventing memoized child re-renders.\n\n```react\nfunction memoizeCallback(fn) {\n  return { fn, cached: true };\n}\nconst cb = memoizeCallback(() => 42);\n```",
    "workedExample": {
      "title": "Worked Example: Memoizing Functions with useCallback",
      "code": "function memoizeCallback(fn) {\n  return { fn, cached: true };\n}\nconst cb = memoizeCallback(() => 42);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Memoizing Functions with useCallback.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Memoizing Functions with useCallback.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function memoizeCallback(fn) {\n  return { fn, cached: true };\n}\nconst cb = memoizeCallback(() => 42);",
    "hints": [
      "Write:\nfunction memoizeCallback(fn) {\n  return { fn, cached: true };\n}\nconst cb = memoizeCallback(() => 42);"
    ],
    "testCases": [
      {
        "id": "react-111-tc-1",
        "description": "Verifies correct implementation for Memoizing Functions with useCallback",
        "testFn": "cb.cached === true && cb.fn() === 42"
      }
    ]
  },
  {
    "id": "react-112-the-dependency-array-rules-of-me",
    "title": "112. The Dependency Array Rules of Memoization",
    "slug": "lesson-112-the-dependency-array-rules-of-me",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Dependency Array Rules of Memoization in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Dependency Array Rules of Memoization",
      "React 19"
    ],
    "analogy": "Listing every ingredient required for a recipe on the chalkboard so nothing is forgotten.",
    "explanationMarkdown": "### The Dependency Array Rules of Memoization\n\nAlways include all variables from component scope used inside the memoized function in its dependency array.\n\n```react\nfunction checkDepsExhaustive(deps) {\n  return deps.every(d => d !== undefined);\n}\nconst valid = checkDepsExhaustive([1, 'a', true]);\n```",
    "workedExample": {
      "title": "Worked Example: The Dependency Array Rules of Memoization",
      "code": "function checkDepsExhaustive(deps) {\n  return deps.every(d => d !== undefined);\n}\nconst valid = checkDepsExhaustive([1, 'a', true]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Dependency Array Rules of Memoization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Dependency Array Rules of Memoization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function checkDepsExhaustive(deps) {\n  return deps.every(d => d !== undefined);\n}\nconst valid = checkDepsExhaustive([1, 'a', true]);",
    "hints": [
      "Write:\nfunction checkDepsExhaustive(deps) {\n  return deps.every(d => d !== undefined);\n}\nconst valid = checkDepsExhaustive([1, 'a', true]);"
    ],
    "testCases": [
      {
        "id": "react-112-tc-1",
        "description": "Verifies correct implementation for The Dependency Array Rules of Memoization",
        "testFn": "valid === true"
      }
    ]
  },
  {
    "id": "react-113-react-devtools-profiler-mastery",
    "title": "113. React DevTools Profiler Mastery",
    "slug": "lesson-113-react-devtools-profiler-mastery",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master React DevTools Profiler Mastery in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React DevTools Profiler Mastery",
      "React 19"
    ],
    "analogy": "A mechanic connecting a computer diagnostic scanner to a car engine to find horsepower bottlenecks.",
    "explanationMarkdown": "### React DevTools Profiler Mastery\n\nUse the React DevTools Profiler to record render durations, identify flame charts, and spot wasteful re-renders.\n\n```react\nfunction profileMetrics() {\n  return { renderTimeMs: 1.2, commitCount: 1 };\n}\nconst metrics = profileMetrics();\n```",
    "workedExample": {
      "title": "Worked Example: React DevTools Profiler Mastery",
      "code": "function profileMetrics() {\n  return { renderTimeMs: 1.2, commitCount: 1 };\n}\nconst metrics = profileMetrics();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React DevTools Profiler Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React DevTools Profiler Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function profileMetrics() {\n  return { renderTimeMs: 1.2, commitCount: 1 };\n}\nconst metrics = profileMetrics();",
    "hints": [
      "Write:\nfunction profileMetrics() {\n  return { renderTimeMs: 1.2, commitCount: 1 };\n}\nconst metrics = profileMetrics();"
    ],
    "testCases": [
      {
        "id": "react-113-tc-1",
        "description": "Verifies correct implementation for React DevTools Profiler Mastery",
        "testFn": "metrics.renderTimeMs < 5"
      }
    ]
  },
  {
    "id": "react-114-code-splitting-with-react.lazy-a",
    "title": "114. Code Splitting with React.lazy and Suspense",
    "slug": "lesson-114-code-splitting-with-react.lazy-a",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Code Splitting with React.lazy and Suspense in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Code Splitting with React.lazy and Suspense",
      "React 19"
    ],
    "analogy": "Ordering books from the warehouse one by one as readers request them, rather than loading the whole library into your trunk.",
    "explanationMarkdown": "### Code Splitting with React.lazy and Suspense\n\n`const LazyComp = React.lazy(() => import('./Comp'))` splits JavaScript bundles into on-demand chunks.\n\n```react\nfunction lazyLoadComponent(name) {\n  return { name, isLazy: true };\n}\nconst Comp = lazyLoadComponent('DashboardChart');\n```",
    "workedExample": {
      "title": "Worked Example: Code Splitting with React.lazy and Suspense",
      "code": "function lazyLoadComponent(name) {\n  return { name, isLazy: true };\n}\nconst Comp = lazyLoadComponent('DashboardChart');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Code Splitting with React.lazy and Suspense.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Code Splitting with React.lazy and Suspense.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function lazyLoadComponent(name) {\n  return { name, isLazy: true };\n}\nconst Comp = lazyLoadComponent('DashboardChart');",
    "hints": [
      "Write:\nfunction lazyLoadComponent(name) {\n  return { name, isLazy: true };\n}\nconst Comp = lazyLoadComponent('DashboardChart');"
    ],
    "testCases": [
      {
        "id": "react-114-tc-1",
        "description": "Verifies correct implementation for Code Splitting with React.lazy and Suspense",
        "testFn": "Comp.isLazy === true"
      }
    ]
  },
  {
    "id": "react-115-fallback-skeletons-in-suspense",
    "title": "115. Fallback Skeletons in Suspense",
    "slug": "lesson-115-fallback-skeletons-in-suspense",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Fallback Skeletons in Suspense in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Fallback Skeletons in Suspense",
      "React 19"
    ],
    "analogy": "A mannequin in a department store window holding a place before the actual designer dress arrives.",
    "explanationMarkdown": "### Fallback Skeletons in Suspense\n\n`<Suspense fallback={<LoadingSkeleton />}>` displays placeholder UI while lazy components download.\n\n```react\nfunction renderSkeleton() {\n  return '<div class=\"skeleton-loader\"></div>';\n}\nconst html = renderSkeleton();\n```",
    "workedExample": {
      "title": "Worked Example: Fallback Skeletons in Suspense",
      "code": "function renderSkeleton() {\n  return '<div class=\"skeleton-loader\"></div>';\n}\nconst html = renderSkeleton();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fallback Skeletons in Suspense.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fallback Skeletons in Suspense.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function renderSkeleton() {\n  return '<div class=\"skeleton-loader\"></div>';\n}\nconst html = renderSkeleton();",
    "hints": [
      "Write:\nfunction renderSkeleton() {\n  return '<div class=\"skeleton-loader\"></div>';\n}\nconst html = renderSkeleton();"
    ],
    "testCases": [
      {
        "id": "react-115-tc-1",
        "description": "Verifies correct implementation for Fallback Skeletons in Suspense",
        "testFn": "html.includes('skeleton-loader')"
      }
    ]
  },
  {
    "id": "react-116-virtualization-for-massive-lists",
    "title": "116. Virtualization for Massive Lists (TanStack Virtual)",
    "slug": "lesson-116-virtualization-for-massive-lists",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Virtualization for Massive Lists (TanStack Virtual) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Virtualization for Massive Lists (TanStack Virtual)",
      "React 19"
    ],
    "analogy": "Looking at the stars through a telescope lens: you only render what fits in the lens aperture.",
    "explanationMarkdown": "### Virtualization for Massive Lists (TanStack Virtual)\n\nVirtualization renders only the 10-20 items currently visible in the scroll window, smoothly handling 100,000 items!\n\n```react\nfunction calculateVisibleRange(scrollTop, itemHeight, viewportHeight) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const count = Math.ceil(viewportHeight / itemHeight);\n  return { start, end: start + count };\n}\nconst range = calculateVisibleRange(200, 50, 400);\n```",
    "workedExample": {
      "title": "Worked Example: Virtualization for Massive Lists (TanStack Virtual)",
      "code": "function calculateVisibleRange(scrollTop, itemHeight, viewportHeight) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const count = Math.ceil(viewportHeight / itemHeight);\n  return { start, end: start + count };\n}\nconst range = calculateVisibleRange(200, 50, 400);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Virtualization for Massive Lists (TanStack Virtual).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Virtualization for Massive Lists (TanStack Virtual).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function calculateVisibleRange(scrollTop, itemHeight, viewportHeight) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const count = Math.ceil(viewportHeight / itemHeight);\n  return { start, end: start + count };\n}\nconst range = calculateVisibleRange(200, 50, 400);",
    "hints": [
      "Write:\nfunction calculateVisibleRange(scrollTop, itemHeight, viewportHeight) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const count = Math.ceil(viewportHeight / itemHeight);\n  return { start, end: start + count };\n}\nconst range = calculateVisibleRange(200, 50, 400);"
    ],
    "testCases": [
      {
        "id": "react-116-tc-1",
        "description": "Verifies correct implementation for Virtualization for Massive Lists (TanStack Virtual)",
        "testFn": "range.start === 4 && range.end === 12"
      }
    ]
  },
  {
    "id": "react-117-non-blocking-ui-with-usetransiti",
    "title": "117. Non-Blocking UI with useTransition Hook",
    "slug": "lesson-117-non-blocking-ui-with-usetransiti",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Non-Blocking UI with useTransition Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Non-Blocking UI with useTransition Hook",
      "React 19"
    ],
    "analogy": "A bank teller continuing to chat with you while a background clerk retrieves cash from the vault.",
    "explanationMarkdown": "### Non-Blocking UI with useTransition Hook\n\n`startTransition(() => setSearch(val))` marks state updates as non-blocking transitions that yield to user typing.\n\n```react\nfunction transitionState(isPending) {\n  return { isPending, nonBlocking: true };\n}\nconst t = transitionState(false);\n```",
    "workedExample": {
      "title": "Worked Example: Non-Blocking UI with useTransition Hook",
      "code": "function transitionState(isPending) {\n  return { isPending, nonBlocking: true };\n}\nconst t = transitionState(false);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Non-Blocking UI with useTransition Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Non-Blocking UI with useTransition Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function transitionState(isPending) {\n  return { isPending, nonBlocking: true };\n}\nconst t = transitionState(false);",
    "hints": [
      "Write:\nfunction transitionState(isPending) {\n  return { isPending, nonBlocking: true };\n}\nconst t = transitionState(false);"
    ],
    "testCases": [
      {
        "id": "react-117-tc-1",
        "description": "Verifies correct implementation for Non-Blocking UI with useTransition Hook",
        "testFn": "t.nonBlocking === true"
      }
    ]
  },
  {
    "id": "react-118-deferred-values-with-usedeferred",
    "title": "118. Deferred Values with useDeferredValue Hook",
    "slug": "lesson-118-deferred-values-with-usedeferred",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Deferred Values with useDeferredValue Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Deferred Values with useDeferredValue Hook",
      "React 19"
    ],
    "analogy": "A freight train following behind a high-speed passenger train: yields track priority to the express train.",
    "explanationMarkdown": "### Deferred Values with useDeferredValue Hook\n\n`useDeferredValue(val)` defers updating a secondary value until high-priority renders (like typing) complete.\n\n```react\nfunction deferValueMock(input) {\n  return { current: input, deferred: input };\n}\nconst d = deferValueMock('query');\n```",
    "workedExample": {
      "title": "Worked Example: Deferred Values with useDeferredValue Hook",
      "code": "function deferValueMock(input) {\n  return { current: input, deferred: input };\n}\nconst d = deferValueMock('query');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deferred Values with useDeferredValue Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deferred Values with useDeferredValue Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function deferValueMock(input) {\n  return { current: input, deferred: input };\n}\nconst d = deferValueMock('query');",
    "hints": [
      "Write:\nfunction deferValueMock(input) {\n  return { current: input, deferred: input };\n}\nconst d = deferValueMock('query');"
    ],
    "testCases": [
      {
        "id": "react-118-tc-1",
        "description": "Verifies correct implementation for Deferred Values with useDeferredValue Hook",
        "testFn": "d.deferred === 'query'"
      }
    ]
  },
  {
    "id": "react-119-avoiding-anonymous-inline-functi",
    "title": "119. Avoiding Anonymous Inline Functions in JSX",
    "slug": "lesson-119-avoiding-anonymous-inline-functi",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Avoiding Anonymous Inline Functions in JSX in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Avoiding Anonymous Inline Functions in JSX",
      "React 19"
    ],
    "analogy": "Using the same physical telephone number instead of generating a burner number every morning.",
    "explanationMarkdown": "### Avoiding Anonymous Inline Functions in JSX\n\nPassing inline arrows `<Button onClick={() => doSomething()} />` creates a new function reference every single render.\n\n```react\nfunction handlerCache() {\n  const handler = () => 'stable';\n  return handler;\n}\nconst h = handlerCache();\n```",
    "workedExample": {
      "title": "Worked Example: Avoiding Anonymous Inline Functions in JSX",
      "code": "function handlerCache() {\n  const handler = () => 'stable';\n  return handler;\n}\nconst h = handlerCache();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Avoiding Anonymous Inline Functions in JSX.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Avoiding Anonymous Inline Functions in JSX.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function handlerCache() {\n  const handler = () => 'stable';\n  return handler;\n}\nconst h = handlerCache();",
    "hints": [
      "Write:\nfunction handlerCache() {\n  const handler = () => 'stable';\n  return handler;\n}\nconst h = handlerCache();"
    ],
    "testCases": [
      {
        "id": "react-119-tc-1",
        "description": "Verifies correct implementation for Avoiding Anonymous Inline Functions in JSX",
        "testFn": "typeof h === 'function' && h() === 'stable'"
      }
    ]
  },
  {
    "id": "react-120-optimizing-context-granular-prov",
    "title": "120. Optimizing Context: Granular Providers",
    "slug": "lesson-120-optimizing-context-granular-prov",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Optimizing Context: Granular Providers in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Optimizing Context",
      "React 19"
    ],
    "analogy": "Keeping medicine in the medicine cabinet and tools in the garage instead of one giant bin.",
    "explanationMarkdown": "### Optimizing Context: Granular Providers\n\nBreaking monolith contexts into small domain-specific providers isolates re-render cascades.\n\n```react\nfunction splitStores() {\n  return { userStore: 'user', cartStore: 'cart' };\n}\nconst stores = splitStores();\n```",
    "workedExample": {
      "title": "Worked Example: Optimizing Context: Granular Providers",
      "code": "function splitStores() {\n  return { userStore: 'user', cartStore: 'cart' };\n}\nconst stores = splitStores();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Optimizing Context: Granular Providers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Optimizing Context: Granular Providers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function splitStores() {\n  return { userStore: 'user', cartStore: 'cart' };\n}\nconst stores = splitStores();",
    "hints": [
      "Write:\nfunction splitStores() {\n  return { userStore: 'user', cartStore: 'cart' };\n}\nconst stores = splitStores();"
    ],
    "testCases": [
      {
        "id": "react-120-tc-1",
        "description": "Verifies correct implementation for Optimizing Context: Granular Providers",
        "testFn": "stores.userStore === 'user' && stores.cartStore === 'cart'"
      }
    ]
  },
  {
    "id": "react-121-component-structure-optimization",
    "title": "121. Component Structure Optimization (Composition Over Memo)",
    "slug": "lesson-121-component-structure-optimization",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Component Structure Optimization (Composition Over Memo) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Component Structure Optimization (Composition Over Memo)",
      "React 19"
    ],
    "analogy": "Moving a heavy grandfather clock into the hallway so redecorating the bedroom doesn't disturb it.",
    "explanationMarkdown": "### Component Structure Optimization (Composition Over Memo)\n\nPassing expensive children as `children` or props allows them to avoid re-rendering without needing `React.memo`!\n\n```react\nfunction ContainerWithChild({ child }) {\n  return { rendered: true, child };\n}\nconst res = ContainerWithChild({ child: 'Heavy' });\n```",
    "workedExample": {
      "title": "Worked Example: Component Structure Optimization (Composition Over Memo)",
      "code": "function ContainerWithChild({ child }) {\n  return { rendered: true, child };\n}\nconst res = ContainerWithChild({ child: 'Heavy' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Component Structure Optimization (Composition Over Memo).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Component Structure Optimization (Composition Over Memo).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ContainerWithChild({ child }) {\n  return { rendered: true, child };\n}\nconst res = ContainerWithChild({ child: 'Heavy' });",
    "hints": [
      "Write:\nfunction ContainerWithChild({ child }) {\n  return { rendered: true, child };\n}\nconst res = ContainerWithChild({ child: 'Heavy' });"
    ],
    "testCases": [
      {
        "id": "react-121-tc-1",
        "description": "Verifies correct implementation for Component Structure Optimization (Composition Over Memo)",
        "testFn": "res.rendered === true"
      }
    ]
  },
  {
    "id": "react-122-react-19-forget-compiler-concept",
    "title": "122. React 19 Forget Compiler Concepts",
    "slug": "lesson-122-react-19-forget-compiler-concept",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master React 19 Forget Compiler Concepts in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React 19 Forget Compiler Concepts",
      "React 19"
    ],
    "analogy": "A self-driving car that optimizes gear shifts automatically without manual clutch pumping.",
    "explanationMarkdown": "### React 19 Forget Compiler Concepts\n\nThe React 19 compiler automatically detects and memoizes values and components at build time, eliminating manual useMemo!\n\n```react\nfunction compilerAutoMemo() {\n  return { autoMemoized: true, noDepsNeeded: true };\n}\nconst c = compilerAutoMemo();\n```",
    "workedExample": {
      "title": "Worked Example: React 19 Forget Compiler Concepts",
      "code": "function compilerAutoMemo() {\n  return { autoMemoized: true, noDepsNeeded: true };\n}\nconst c = compilerAutoMemo();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React 19 Forget Compiler Concepts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React 19 Forget Compiler Concepts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function compilerAutoMemo() {\n  return { autoMemoized: true, noDepsNeeded: true };\n}\nconst c = compilerAutoMemo();",
    "hints": [
      "Write:\nfunction compilerAutoMemo() {\n  return { autoMemoized: true, noDepsNeeded: true };\n}\nconst c = compilerAutoMemo();"
    ],
    "testCases": [
      {
        "id": "react-122-tc-1",
        "description": "Verifies correct implementation for React 19 Forget Compiler Concepts",
        "testFn": "c.autoMemoized === true"
      }
    ]
  },
  {
    "id": "react-123-performance-capstone-60-fps-real",
    "title": "123. Performance Capstone: 60 FPS Real-time Dashboard",
    "slug": "lesson-123-performance-capstone-60-fps-real",
    "language": "react",
    "category": "Module 8: Performance & Optimization",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Performance Capstone: 60 FPS Real-time Dashboard in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Performance Capstone",
      "React 19"
    ],
    "analogy": "A high-performance Formula 1 race car running with zero friction in all gears.",
    "explanationMarkdown": "### Performance Capstone: 60 FPS Real-time Dashboard\n\nArchitecting an interactive dashboard sustaining 60fps under continuous real-time data streaming.\n\n```react\nfunction frameRateMonitor(fps) {\n  return fps >= 60 ? 'Smooth' : 'Lagging';\n}\nconst status = frameRateMonitor(60);\n```",
    "workedExample": {
      "title": "Worked Example: Performance Capstone: 60 FPS Real-time Dashboard",
      "code": "function frameRateMonitor(fps) {\n  return fps >= 60 ? 'Smooth' : 'Lagging';\n}\nconst status = frameRateMonitor(60);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Performance Capstone: 60 FPS Real-time Dashboard.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Performance Capstone: 60 FPS Real-time Dashboard.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function frameRateMonitor(fps) {\n  return fps >= 60 ? 'Smooth' : 'Lagging';\n}\nconst status = frameRateMonitor(60);",
    "hints": [
      "Write:\nfunction frameRateMonitor(fps) {\n  return fps >= 60 ? 'Smooth' : 'Lagging';\n}\nconst status = frameRateMonitor(60);"
    ],
    "testCases": [
      {
        "id": "react-123-tc-1",
        "description": "Verifies correct implementation for Performance Capstone: 60 FPS Real-time Dashboard",
        "testFn": "status === 'Smooth'"
      }
    ]
  },
  {
    "id": "react-124-the-rules-of-hooks",
    "title": "124. The Rules of Hooks",
    "slug": "lesson-124-the-rules-of-hooks",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Rules of Hooks in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The Rules of Hooks",
      "React 19"
    ],
    "analogy": "The golden rules of traffic: always stay in your lane and never execute a U-turn across a median.",
    "explanationMarkdown": "### The Rules of Hooks\n\nOnly call hooks at the top level of React function components or custom hooks. Never call inside loops, conditions, or nested functions!\n\n```react\nfunction checkHookRules(callLocation) {\n  return callLocation === 'top-level';\n}\nconst valid = checkHookRules('top-level');\n```",
    "workedExample": {
      "title": "Worked Example: The Rules of Hooks",
      "code": "function checkHookRules(callLocation) {\n  return callLocation === 'top-level';\n}\nconst valid = checkHookRules('top-level');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Rules of Hooks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Rules of Hooks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function checkHookRules(callLocation) {\n  return callLocation === 'top-level';\n}\nconst valid = checkHookRules('top-level');",
    "hints": [
      "Write:\nfunction checkHookRules(callLocation) {\n  return callLocation === 'top-level';\n}\nconst valid = checkHookRules('top-level');"
    ],
    "testCases": [
      {
        "id": "react-124-tc-1",
        "description": "Verifies correct implementation for The Rules of Hooks",
        "testFn": "valid === true"
      }
    ]
  },
  {
    "id": "react-125-building-your-first-custom-hook-",
    "title": "125. Building Your First Custom Hook (useToggle)",
    "slug": "lesson-125-building-your-first-custom-hook-",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Building Your First Custom Hook (useToggle) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Building Your First Custom Hook (useToggle)",
      "React 19"
    ],
    "analogy": "A reusable wall toggle light switch packaged in a modular plastic casing.",
    "explanationMarkdown": "### Building Your First Custom Hook (useToggle)\n\nA custom hook is a JavaScript function whose name starts with `use` and that can call other React hooks.\n\n```react\nfunction useToggleLogic(initial = false) {\n  let on = initial;\n  const toggle = () => { on = !on; return on; };\n  return [() => on, toggle];\n}\nconst [isOn, toggle] = useToggleLogic(false);\nconst next = toggle();\n```",
    "workedExample": {
      "title": "Worked Example: Building Your First Custom Hook (useToggle)",
      "code": "function useToggleLogic(initial = false) {\n  let on = initial;\n  const toggle = () => { on = !on; return on; };\n  return [() => on, toggle];\n}\nconst [isOn, toggle] = useToggleLogic(false);\nconst next = toggle();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building Your First Custom Hook (useToggle).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building Your First Custom Hook (useToggle).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useToggleLogic(initial = false) {\n  let on = initial;\n  const toggle = () => { on = !on; return on; };\n  return [() => on, toggle];\n}\nconst [isOn, toggle] = useToggleLogic(false);\nconst next = toggle();",
    "hints": [
      "Write:\nfunction useToggleLogic(initial = false) {\n  let on = initial;\n  const toggle = () => { on = !on; return on; };\n  return [() => on, toggle];\n}\nconst [isOn, toggle] = useToggleLogic(false);\nconst next = toggle();"
    ],
    "testCases": [
      {
        "id": "react-125-tc-1",
        "description": "Verifies correct implementation for Building Your First Custom Hook (useToggle)",
        "testFn": "next === true"
      }
    ]
  },
  {
    "id": "react-126-the-uselocalstorage-hook",
    "title": "126. The useLocalStorage Hook",
    "slug": "lesson-126-the-uselocalstorage-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useLocalStorage Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useLocalStorage Hook",
      "React 19"
    ],
    "analogy": "A safety deposit box that automatically synchronizes your local wallet balance with a cloud vault.",
    "explanationMarkdown": "### The useLocalStorage Hook\n\nSynchronizes React state with browser localStorage seamlessly across page reloads.\n\n```react\nfunction useStorageMock(key, val) {\n  return { key, val, synced: true };\n}\nconst hook = useStorageMock('theme', 'dark');\n```",
    "workedExample": {
      "title": "Worked Example: The useLocalStorage Hook",
      "code": "function useStorageMock(key, val) {\n  return { key, val, synced: true };\n}\nconst hook = useStorageMock('theme', 'dark');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useLocalStorage Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useLocalStorage Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useStorageMock(key, val) {\n  return { key, val, synced: true };\n}\nconst hook = useStorageMock('theme', 'dark');",
    "hints": [
      "Write:\nfunction useStorageMock(key, val) {\n  return { key, val, synced: true };\n}\nconst hook = useStorageMock('theme', 'dark');"
    ],
    "testCases": [
      {
        "id": "react-126-tc-1",
        "description": "Verifies correct implementation for The useLocalStorage Hook",
        "testFn": "hook.synced === true"
      }
    ]
  },
  {
    "id": "react-127-the-usewindowsize-hook",
    "title": "127. The useWindowSize Hook",
    "slug": "lesson-127-the-usewindowsize-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useWindowSize Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useWindowSize Hook",
      "React 19"
    ],
    "analogy": "A sensor reporting room dimensions to an HVAC climate controller.",
    "explanationMarkdown": "### The useWindowSize Hook\n\nTracks viewport dimensions live, subscribing to window resize events with automatic cleanup.\n\n```react\nfunction useWindowSizeMock() {\n  return { width: 1024, height: 768 };\n}\nconst sz = useWindowSizeMock();\n```",
    "workedExample": {
      "title": "Worked Example: The useWindowSize Hook",
      "code": "function useWindowSizeMock() {\n  return { width: 1024, height: 768 };\n}\nconst sz = useWindowSizeMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useWindowSize Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useWindowSize Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useWindowSizeMock() {\n  return { width: 1024, height: 768 };\n}\nconst sz = useWindowSizeMock();",
    "hints": [
      "Write:\nfunction useWindowSizeMock() {\n  return { width: 1024, height: 768 };\n}\nconst sz = useWindowSizeMock();"
    ],
    "testCases": [
      {
        "id": "react-127-tc-1",
        "description": "Verifies correct implementation for The useWindowSize Hook",
        "testFn": "sz.width === 1024"
      }
    ]
  },
  {
    "id": "react-128-the-usedebounce-hook",
    "title": "128. The useDebounce Hook",
    "slug": "lesson-128-the-usedebounce-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useDebounce Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useDebounce Hook",
      "React 19"
    ],
    "analogy": "Waiting for an elevator door to remain still for 3 seconds after the last passenger enters before rising.",
    "explanationMarkdown": "### The useDebounce Hook\n\nDelays updating the debounced value until a specified idle duration passes, saving API requests.\n\n```react\nfunction debounceLogic(val, delay) {\n  return { debouncedValue: val, delay };\n}\nconst d = debounceLogic('search', 300);\n```",
    "workedExample": {
      "title": "Worked Example: The useDebounce Hook",
      "code": "function debounceLogic(val, delay) {\n  return { debouncedValue: val, delay };\n}\nconst d = debounceLogic('search', 300);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useDebounce Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useDebounce Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function debounceLogic(val, delay) {\n  return { debouncedValue: val, delay };\n}\nconst d = debounceLogic('search', 300);",
    "hints": [
      "Write:\nfunction debounceLogic(val, delay) {\n  return { debouncedValue: val, delay };\n}\nconst d = debounceLogic('search', 300);"
    ],
    "testCases": [
      {
        "id": "react-128-tc-1",
        "description": "Verifies correct implementation for The useDebounce Hook",
        "testFn": "d.debouncedValue === 'search'"
      }
    ]
  },
  {
    "id": "react-129-the-usefetch---useasync-hook",
    "title": "129. The useFetch / useAsync Hook",
    "slug": "lesson-129-the-usefetch---useasync-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useFetch / useAsync Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useFetch / useAsync Hook",
      "React 19"
    ],
    "analogy": "A personal research assistant fetching encyclopedias whenever you mention a topic.",
    "explanationMarkdown": "### The useFetch / useAsync Hook\n\nEncapsulates async promise execution, caching, loading spinners, and error handling into one clean call.\n\n```react\nfunction useAsyncMock(url) {\n  return { url, loading: false, data: ['res'] };\n}\nconst query = useAsyncMock('/api');\n```",
    "workedExample": {
      "title": "Worked Example: The useFetch / useAsync Hook",
      "code": "function useAsyncMock(url) {\n  return { url, loading: false, data: ['res'] };\n}\nconst query = useAsyncMock('/api');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useFetch / useAsync Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useFetch / useAsync Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useAsyncMock(url) {\n  return { url, loading: false, data: ['res'] };\n}\nconst query = useAsyncMock('/api');",
    "hints": [
      "Write:\nfunction useAsyncMock(url) {\n  return { url, loading: false, data: ['res'] };\n}\nconst query = useAsyncMock('/api');"
    ],
    "testCases": [
      {
        "id": "react-129-tc-1",
        "description": "Verifies correct implementation for The useFetch / useAsync Hook",
        "testFn": "query.data.length === 1"
      }
    ]
  },
  {
    "id": "react-130-the-usemediaquery-hook",
    "title": "130. The useMediaQuery Hook",
    "slug": "lesson-130-the-usemediaquery-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useMediaQuery Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useMediaQuery Hook",
      "React 19"
    ],
    "analogy": "A car convertible sensing raindrops on the windshield and automatically raising the roof.",
    "explanationMarkdown": "### The useMediaQuery Hook\n\nSubscribes directly to `window.matchMedia(query)` to trigger dynamic component logic on screen breakpoint changes.\n\n```react\nfunction useMediaQueryMock(query) {\n  return query === '(min-width: 768px)';\n}\nconst isDesktop = useMediaQueryMock('(min-width: 768px)');\n```",
    "workedExample": {
      "title": "Worked Example: The useMediaQuery Hook",
      "code": "function useMediaQueryMock(query) {\n  return query === '(min-width: 768px)';\n}\nconst isDesktop = useMediaQueryMock('(min-width: 768px)');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useMediaQuery Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useMediaQuery Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useMediaQueryMock(query) {\n  return query === '(min-width: 768px)';\n}\nconst isDesktop = useMediaQueryMock('(min-width: 768px)');",
    "hints": [
      "Write:\nfunction useMediaQueryMock(query) {\n  return query === '(min-width: 768px)';\n}\nconst isDesktop = useMediaQueryMock('(min-width: 768px)');"
    ],
    "testCases": [
      {
        "id": "react-130-tc-1",
        "description": "Verifies correct implementation for The useMediaQuery Hook",
        "testFn": "isDesktop === true"
      }
    ]
  },
  {
    "id": "react-131-the-useonclickoutside-hook",
    "title": "131. The useOnClickOutside Hook",
    "slug": "lesson-131-the-useonclickoutside-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useOnClickOutside Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useOnClickOutside Hook",
      "React 19"
    ],
    "analogy": "A turtle ducking back into its shell when a hand taps anywhere outside its shell perimeter.",
    "explanationMarkdown": "### The useOnClickOutside Hook\n\nDetects clicks occurring outside a referenced DOM element, automatically closing dropdowns and modals.\n\n```react\nfunction useClickOutsideMock() {\n  return { attached: true };\n}\nconst hook = useClickOutsideMock();\n```",
    "workedExample": {
      "title": "Worked Example: The useOnClickOutside Hook",
      "code": "function useClickOutsideMock() {\n  return { attached: true };\n}\nconst hook = useClickOutsideMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useOnClickOutside Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useOnClickOutside Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useClickOutsideMock() {\n  return { attached: true };\n}\nconst hook = useClickOutsideMock();",
    "hints": [
      "Write:\nfunction useClickOutsideMock() {\n  return { attached: true };\n}\nconst hook = useClickOutsideMock();"
    ],
    "testCases": [
      {
        "id": "react-131-tc-1",
        "description": "Verifies correct implementation for The useOnClickOutside Hook",
        "testFn": "hook.attached === true"
      }
    ]
  },
  {
    "id": "react-132-the-useinterval-hook-declarative",
    "title": "132. The useInterval Hook (Declarative Timers)",
    "slug": "lesson-132-the-useinterval-hook-declarative",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useInterval Hook (Declarative Timers) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useInterval Hook (Declarative Timers)",
      "React 19"
    ],
    "analogy": "A grandfather clock pendulum swinging every second in sync with the room's heartbeat.",
    "explanationMarkdown": "### The useInterval Hook (Declarative Timers)\n\nA declarative interval hook solving closure staleness bugs when setting intervals in React.\n\n```react\nfunction useIntervalMock(callback, delay) {\n  return { active: delay !== null };\n}\nconst timer = useIntervalMock(() => {}, 1000);\n```",
    "workedExample": {
      "title": "Worked Example: The useInterval Hook (Declarative Timers)",
      "code": "function useIntervalMock(callback, delay) {\n  return { active: delay !== null };\n}\nconst timer = useIntervalMock(() => {}, 1000);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useInterval Hook (Declarative Timers).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useInterval Hook (Declarative Timers).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useIntervalMock(callback, delay) {\n  return { active: delay !== null };\n}\nconst timer = useIntervalMock(() => {}, 1000);",
    "hints": [
      "Write:\nfunction useIntervalMock(callback, delay) {\n  return { active: delay !== null };\n}\nconst timer = useIntervalMock(() => {}, 1000);"
    ],
    "testCases": [
      {
        "id": "react-132-tc-1",
        "description": "Verifies correct implementation for The useInterval Hook (Declarative Timers)",
        "testFn": "timer.active === true"
      }
    ]
  },
  {
    "id": "react-133-the-useprevious-hook",
    "title": "133. The usePrevious Hook",
    "slug": "lesson-133-the-useprevious-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The usePrevious Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The usePrevious Hook",
      "React 19"
    ],
    "analogy": "A camera taking a Polaroid photo of the previous position before moving to the next square.",
    "explanationMarkdown": "### The usePrevious Hook\n\nRemembers the value from the previous render cycle using a persistent ref.\n\n```react\nfunction usePrevMock(curr) {\n  return curr === 'now' ? 'before' : null;\n}\nconst prev = usePrevMock('now');\n```",
    "workedExample": {
      "title": "Worked Example: The usePrevious Hook",
      "code": "function usePrevMock(curr) {\n  return curr === 'now' ? 'before' : null;\n}\nconst prev = usePrevMock('now');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The usePrevious Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The usePrevious Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function usePrevMock(curr) {\n  return curr === 'now' ? 'before' : null;\n}\nconst prev = usePrevMock('now');",
    "hints": [
      "Write:\nfunction usePrevMock(curr) {\n  return curr === 'now' ? 'before' : null;\n}\nconst prev = usePrevMock('now');"
    ],
    "testCases": [
      {
        "id": "react-133-tc-1",
        "description": "Verifies correct implementation for The usePrevious Hook",
        "testFn": "prev === 'before'"
      }
    ]
  },
  {
    "id": "react-134-the-useform-hook",
    "title": "134. The useForm Hook",
    "slug": "lesson-134-the-useform-hook",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The useForm Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useForm Hook",
      "React 19"
    ],
    "analogy": "A smart clipboard checking that every required signature and date field is signed.",
    "explanationMarkdown": "### The useForm Hook\n\nEncapsulates form input registration, field values, dirty tracking, validation, and submission.\n\n```react\nfunction useFormMock(initialValues) {\n  return { values: initialValues, errors: {}, isValid: true };\n}\nconst form = useFormMock({ name: '' });\n```",
    "workedExample": {
      "title": "Worked Example: The useForm Hook",
      "code": "function useFormMock(initialValues) {\n  return { values: initialValues, errors: {}, isValid: true };\n}\nconst form = useFormMock({ name: '' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useForm Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useForm Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useFormMock(initialValues) {\n  return { values: initialValues, errors: {}, isValid: true };\n}\nconst form = useFormMock({ name: '' });",
    "hints": [
      "Write:\nfunction useFormMock(initialValues) {\n  return { values: initialValues, errors: {}, isValid: true };\n}\nconst form = useFormMock({ name: '' });"
    ],
    "testCases": [
      {
        "id": "react-134-tc-1",
        "description": "Verifies correct implementation for The useForm Hook",
        "testFn": "form.isValid === true"
      }
    ]
  },
  {
    "id": "react-135-composing-hooks-together",
    "title": "135. Composing Hooks Together",
    "slug": "lesson-135-composing-hooks-together",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Composing Hooks Together in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Composing Hooks Together",
      "React 19"
    ],
    "analogy": "Snapping multiple specialized Swiss Army knife blades into a single pocket tool.",
    "explanationMarkdown": "### Composing Hooks Together\n\nCustom hooks can seamlessly call other custom hooks (`useLocalStorage` + `useFetch` + `useAuth`).\n\n```react\nfunction useAuthenticatedUser(token) {\n  return { token, hasAccess: Boolean(token) };\n}\nconst auth = useAuthenticatedUser('jwt-secret');\n```",
    "workedExample": {
      "title": "Worked Example: Composing Hooks Together",
      "code": "function useAuthenticatedUser(token) {\n  return { token, hasAccess: Boolean(token) };\n}\nconst auth = useAuthenticatedUser('jwt-secret');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Composing Hooks Together.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Composing Hooks Together.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useAuthenticatedUser(token) {\n  return { token, hasAccess: Boolean(token) };\n}\nconst auth = useAuthenticatedUser('jwt-secret');",
    "hints": [
      "Write:\nfunction useAuthenticatedUser(token) {\n  return { token, hasAccess: Boolean(token) };\n}\nconst auth = useAuthenticatedUser('jwt-secret');"
    ],
    "testCases": [
      {
        "id": "react-135-tc-1",
        "description": "Verifies correct implementation for Composing Hooks Together",
        "testFn": "auth.hasAccess === true"
      }
    ]
  },
  {
    "id": "react-136-testing-custom-hooks-with-render",
    "title": "136. Testing Custom Hooks with renderHook",
    "slug": "lesson-136-testing-custom-hooks-with-render",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Testing Custom Hooks with renderHook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Testing Custom Hooks with renderHook",
      "React 19"
    ],
    "analogy": "Testing an electric motor in a laboratory harness before bolting it inside an automobile.",
    "explanationMarkdown": "### Testing Custom Hooks with renderHook\n\nTest custom hooks headlessly using `@testing-library/react`'s `renderHook` utility without full UI components.\n\n```react\nfunction testHookMock(hookFn) {\n  const result = hookFn();\n  return { result, passed: true };\n}\nconst test = testHookMock(() => 'hook-value');\n```",
    "workedExample": {
      "title": "Worked Example: Testing Custom Hooks with renderHook",
      "code": "function testHookMock(hookFn) {\n  const result = hookFn();\n  return { result, passed: true };\n}\nconst test = testHookMock(() => 'hook-value');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Testing Custom Hooks with renderHook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Testing Custom Hooks with renderHook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function testHookMock(hookFn) {\n  const result = hookFn();\n  return { result, passed: true };\n}\nconst test = testHookMock(() => 'hook-value');",
    "hints": [
      "Write:\nfunction testHookMock(hookFn) {\n  const result = hookFn();\n  return { result, passed: true };\n}\nconst test = testHookMock(() => 'hook-value');"
    ],
    "testCases": [
      {
        "id": "react-136-tc-1",
        "description": "Verifies correct implementation for Testing Custom Hooks with renderHook",
        "testFn": "test.passed === true"
      }
    ]
  },
  {
    "id": "react-137-publishing-hooks-as-reusable-lib",
    "title": "137. Publishing Hooks as Reusable Libraries",
    "slug": "lesson-137-publishing-hooks-as-reusable-lib",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Publishing Hooks as Reusable Libraries in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Publishing Hooks as Reusable Libraries",
      "React 19"
    ],
    "analogy": "Manufacturing and shipping precision power tools to hardware stores nationwide.",
    "explanationMarkdown": "### Publishing Hooks as Reusable Libraries\n\nBest practices for exporting, typing with TypeScript, and publishing reusable hooks to npm.\n\n```react\nfunction packageHook(name, version) {\n  return { name, version, isNpmReady: true };\n}\nconst pkg = packageHook('use-custom', '1.0.0');\n```",
    "workedExample": {
      "title": "Worked Example: Publishing Hooks as Reusable Libraries",
      "code": "function packageHook(name, version) {\n  return { name, version, isNpmReady: true };\n}\nconst pkg = packageHook('use-custom', '1.0.0');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Publishing Hooks as Reusable Libraries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Publishing Hooks as Reusable Libraries.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function packageHook(name, version) {\n  return { name, version, isNpmReady: true };\n}\nconst pkg = packageHook('use-custom', '1.0.0');",
    "hints": [
      "Write:\nfunction packageHook(name, version) {\n  return { name, version, isNpmReady: true };\n}\nconst pkg = packageHook('use-custom', '1.0.0');"
    ],
    "testCases": [
      {
        "id": "react-137-tc-1",
        "description": "Verifies correct implementation for Publishing Hooks as Reusable Libraries",
        "testFn": "pkg.isNpmReady === true"
      }
    ]
  },
  {
    "id": "react-138-hook-design-principles-clean-ret",
    "title": "138. Hook Design Principles: Clean Return Interfaces",
    "slug": "lesson-138-hook-design-principles-clean-ret",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Hook Design Principles: Clean Return Interfaces in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Hook Design Principles",
      "React 19"
    ],
    "analogy": "Designing ergonomic handles on power tools so they fit naturally into human hands.",
    "explanationMarkdown": "### Hook Design Principles: Clean Return Interfaces\n\nReturn tuples `[val, setVal]` for 1-2 items (easy renaming); return objects `{ val, actions }` for 3+ items.\n\n```react\nfunction hookInterfaceDesign() {\n  return { tupleForSingles: [true, () => {}], objectForMany: { data: 1, loading: false, refetch: () => {} } };\n}\nconst iface = hookInterfaceDesign();\n```",
    "workedExample": {
      "title": "Worked Example: Hook Design Principles: Clean Return Interfaces",
      "code": "function hookInterfaceDesign() {\n  return { tupleForSingles: [true, () => {}], objectForMany: { data: 1, loading: false, refetch: () => {} } };\n}\nconst iface = hookInterfaceDesign();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hook Design Principles: Clean Return Interfaces.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hook Design Principles: Clean Return Interfaces.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function hookInterfaceDesign() {\n  return { tupleForSingles: [true, () => {}], objectForMany: { data: 1, loading: false, refetch: () => {} } };\n}\nconst iface = hookInterfaceDesign();",
    "hints": [
      "Write:\nfunction hookInterfaceDesign() {\n  return { tupleForSingles: [true, () => {}], objectForMany: { data: 1, loading: false, refetch: () => {} } };\n}\nconst iface = hookInterfaceDesign();"
    ],
    "testCases": [
      {
        "id": "react-138-tc-1",
        "description": "Verifies correct implementation for Hook Design Principles: Clean Return Interfaces",
        "testFn": "Array.isArray(iface.tupleForSingles) && typeof iface.objectForMany === 'object'"
      }
    ]
  },
  {
    "id": "react-139-module-9-review-enterprise-hook-",
    "title": "139. Module 9 Review: Enterprise Hook Architecture",
    "slug": "lesson-139-module-9-review-enterprise-hook-",
    "language": "react",
    "category": "Module 9: Custom Hooks Architecture",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 9 Review: Enterprise Hook Architecture in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "React 19"
    ],
    "analogy": "A comprehensive toolbox holding every specialized wrench and socket needed for engine overhaul.",
    "explanationMarkdown": "### Module 9 Review: Enterprise Hook Architecture\n\nA modular, reusable hooks architecture decoupling entire business logic flows from UI components.\n\n```react\nfunction createEnterpriseHooksSuite() {\n  return { isProductionGrade: true };\n}\nconst suite = createEnterpriseHooksSuite();\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Enterprise Hook Architecture",
      "code": "function createEnterpriseHooksSuite() {\n  return { isProductionGrade: true };\n}\nconst suite = createEnterpriseHooksSuite();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Enterprise Hook Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Enterprise Hook Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createEnterpriseHooksSuite() {\n  return { isProductionGrade: true };\n}\nconst suite = createEnterpriseHooksSuite();",
    "hints": [
      "Write:\nfunction createEnterpriseHooksSuite() {\n  return { isProductionGrade: true };\n}\nconst suite = createEnterpriseHooksSuite();"
    ],
    "testCases": [
      {
        "id": "react-139-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Enterprise Hook Architecture",
        "testFn": "suite.isProductionGrade === true"
      }
    ]
  },
  {
    "id": "react-140-react-19-mental-model-zero-overh",
    "title": "140. React 19 Mental Model: Zero-Overhead React",
    "slug": "lesson-140-react-19-mental-model-zero-overh",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master React 19 Mental Model: Zero-Overhead React in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React 19 Mental Model",
      "React 19"
    ],
    "analogy": "A next-generation electric jet: sleeker aerodynamics, no manual throttle pumps, and automated flight control.",
    "explanationMarkdown": "### React 19 Mental Model: Zero-Overhead React\n\nReact 19 introduces native Actions, async transitions, the `use()` API, server components, and native asset preloading.\n\n```react\nfunction react19Overview() {\n  return { actions: true, useHook: true, serverComponents: true };\n}\nconst r19 = react19Overview();\n```",
    "workedExample": {
      "title": "Worked Example: React 19 Mental Model: Zero-Overhead React",
      "code": "function react19Overview() {\n  return { actions: true, useHook: true, serverComponents: true };\n}\nconst r19 = react19Overview();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React 19 Mental Model: Zero-Overhead React.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React 19 Mental Model: Zero-Overhead React.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function react19Overview() {\n  return { actions: true, useHook: true, serverComponents: true };\n}\nconst r19 = react19Overview();",
    "hints": [
      "Write:\nfunction react19Overview() {\n  return { actions: true, useHook: true, serverComponents: true };\n}\nconst r19 = react19Overview();"
    ],
    "testCases": [
      {
        "id": "react-140-tc-1",
        "description": "Verifies correct implementation for React 19 Mental Model: Zero-Overhead React",
        "testFn": "r19.actions === true && r19.useHook === true"
      }
    ]
  },
  {
    "id": "react-141-the-use-hook-reading-promises-in",
    "title": "141. The use() Hook: Reading Promises in Render",
    "slug": "lesson-141-the-use-hook-reading-promises-in",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The use() Hook: Reading Promises in Render in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The use() Hook",
      "React 19"
    ],
    "analogy": "Opening an express mail package right at your desk without standing in the post office line.",
    "explanationMarkdown": "### The use() Hook: Reading Promises in Render\n\nThe `use(promise)` hook unwraps promises directly in render, suspending the component until data resolves!\n\n```react\nfunction readPromiseWithUse(resolvedValue) {\n  return `Resolved: ${resolvedValue}`;\n}\nconst res = readPromiseWithUse('Data');\n```",
    "workedExample": {
      "title": "Worked Example: The use() Hook: Reading Promises in Render",
      "code": "function readPromiseWithUse(resolvedValue) {\n  return `Resolved: ${resolvedValue}`;\n}\nconst res = readPromiseWithUse('Data');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The use() Hook: Reading Promises in Render.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The use() Hook: Reading Promises in Render.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function readPromiseWithUse(resolvedValue) {\n  return `Resolved: ${resolvedValue}`;\n}\nconst res = readPromiseWithUse('Data');",
    "hints": [
      "Write:\nfunction readPromiseWithUse(resolvedValue) {\n  return `Resolved: ${resolvedValue}`;\n}\nconst res = readPromiseWithUse('Data');"
    ],
    "testCases": [
      {
        "id": "react-141-tc-1",
        "description": "Verifies correct implementation for The use() Hook: Reading Promises in Render",
        "testFn": "res === 'Resolved: Data'"
      }
    ]
  },
  {
    "id": "react-142-reading-context-with-the-use-hoo",
    "title": "142. Reading Context with the use() Hook",
    "slug": "lesson-142-reading-context-with-the-use-hoo",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Reading Context with the use() Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Reading Context with the use() Hook",
      "React 19"
    ],
    "analogy": "Asking a smart assistant for the weather from anywhere in the house, even inside a closet.",
    "explanationMarkdown": "### Reading Context with the use() Hook\n\nUnlike `useContext`, `use(Context)` can be called inside conditional statements and loops!\n\n```react\nfunction readContextWithUse(ctx) {\n  return ctx.theme;\n}\nconst theme = readContextWithUse({ theme: 'emerald' });\n```",
    "workedExample": {
      "title": "Worked Example: Reading Context with the use() Hook",
      "code": "function readContextWithUse(ctx) {\n  return ctx.theme;\n}\nconst theme = readContextWithUse({ theme: 'emerald' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reading Context with the use() Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reading Context with the use() Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function readContextWithUse(ctx) {\n  return ctx.theme;\n}\nconst theme = readContextWithUse({ theme: 'emerald' });",
    "hints": [
      "Write:\nfunction readContextWithUse(ctx) {\n  return ctx.theme;\n}\nconst theme = readContextWithUse({ theme: 'emerald' });"
    ],
    "testCases": [
      {
        "id": "react-142-tc-1",
        "description": "Verifies correct implementation for Reading Context with the use() Hook",
        "testFn": "theme === 'emerald'"
      }
    ]
  },
  {
    "id": "react-143-react-19-actions-concept",
    "title": "143. React 19 Actions Concept",
    "slug": "lesson-143-react-19-actions-concept",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master React 19 Actions Concept in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React 19 Actions Concept",
      "React 19"
    ],
    "analogy": "Pressing a single 'Submit Application' stamp that automatically dispatches, shows a spinner, and updates status.",
    "explanationMarkdown": "### React 19 Actions Concept\n\nActions are async functions that automatically manage pending states, optimistic updates, and error handling.\n\n```react\nfunction runAction(actionFn, data) {\n  return actionFn(data);\n}\nconst outcome = runAction((d) => `Updated ${d}`, 'profile');\n```",
    "workedExample": {
      "title": "Worked Example: React 19 Actions Concept",
      "code": "function runAction(actionFn, data) {\n  return actionFn(data);\n}\nconst outcome = runAction((d) => `Updated ${d}`, 'profile');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React 19 Actions Concept.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React 19 Actions Concept.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function runAction(actionFn, data) {\n  return actionFn(data);\n}\nconst outcome = runAction((d) => `Updated ${d}`, 'profile');",
    "hints": [
      "Write:\nfunction runAction(actionFn, data) {\n  return actionFn(data);\n}\nconst outcome = runAction((d) => `Updated ${d}`, 'profile');"
    ],
    "testCases": [
      {
        "id": "react-143-tc-1",
        "description": "Verifies correct implementation for React 19 Actions Concept",
        "testFn": "outcome === 'Updated profile'"
      }
    ]
  },
  {
    "id": "react-144-the-useactionstate-hook",
    "title": "144. The useActionState Hook",
    "slug": "lesson-144-the-useactionstate-hook",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The useActionState Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useActionState Hook",
      "React 19"
    ],
    "analogy": "A self-monitoring delivery truck that reports its current load, delivery progress, and engine status.",
    "explanationMarkdown": "### The useActionState Hook\n\n`const [state, formAction, isPending] = useActionState(fn, initial)` automates action state tracking.\n\n```react\nfunction useActionStateMock(action, initialState) {\n  return [initialState, (data) => data, false];\n}\nconst [state, formAction, isPending] = useActionStateMock(() => {}, { count: 0 });\n```",
    "workedExample": {
      "title": "Worked Example: The useActionState Hook",
      "code": "function useActionStateMock(action, initialState) {\n  return [initialState, (data) => data, false];\n}\nconst [state, formAction, isPending] = useActionStateMock(() => {}, { count: 0 });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useActionState Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useActionState Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useActionStateMock(action, initialState) {\n  return [initialState, (data) => data, false];\n}\nconst [state, formAction, isPending] = useActionStateMock(() => {}, { count: 0 });",
    "hints": [
      "Write:\nfunction useActionStateMock(action, initialState) {\n  return [initialState, (data) => data, false];\n}\nconst [state, formAction, isPending] = useActionStateMock(() => {}, { count: 0 });"
    ],
    "testCases": [
      {
        "id": "react-144-tc-1",
        "description": "Verifies correct implementation for The useActionState Hook",
        "testFn": "state.count === 0 && isPending === false"
      }
    ]
  },
  {
    "id": "react-145-the-useformstatus-hook",
    "title": "145. The useFormStatus Hook",
    "slug": "lesson-145-the-useformstatus-hook",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The useFormStatus Hook in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useFormStatus Hook",
      "React 19"
    ],
    "analogy": "A button that knows whether the parent mail envelope has been stamped and mailed without receiving props.",
    "explanationMarkdown": "### The useFormStatus Hook\n\n`useFormStatus()` allows nested child buttons and inputs to inspect the status of the parent `<form>`.\n\n```react\nfunction useFormStatusMock() {\n  return { pending: false, data: null, method: 'POST' };\n}\nconst status = useFormStatusMock();\n```",
    "workedExample": {
      "title": "Worked Example: The useFormStatus Hook",
      "code": "function useFormStatusMock() {\n  return { pending: false, data: null, method: 'POST' };\n}\nconst status = useFormStatusMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useFormStatus Hook.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useFormStatus Hook.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useFormStatusMock() {\n  return { pending: false, data: null, method: 'POST' };\n}\nconst status = useFormStatusMock();",
    "hints": [
      "Write:\nfunction useFormStatusMock() {\n  return { pending: false, data: null, method: 'POST' };\n}\nconst status = useFormStatusMock();"
    ],
    "testCases": [
      {
        "id": "react-145-tc-1",
        "description": "Verifies correct implementation for The useFormStatus Hook",
        "testFn": "status.pending === false && status.method === 'POST'"
      }
    ]
  },
  {
    "id": "react-146-the-useoptimistic-hook-for-insta",
    "title": "146. The useOptimistic Hook for Instant UI",
    "slug": "lesson-146-the-useoptimistic-hook-for-insta",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The useOptimistic Hook for Instant UI in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "The useOptimistic Hook for Instant UI",
      "React 19"
    ],
    "analogy": "Instantly showing a 'Sent' checkmark on a chat message before the satellite acknowledges receipt.",
    "explanationMarkdown": "### The useOptimistic Hook for Instant UI\n\n`useOptimistic` displays expected state immediately, automatically rolling back if the server action rejects.\n\n```react\nfunction useOptimisticMock(current, updateFn) {\n  return [current, (optimisticVal) => updateFn(current, optimisticVal)];\n}\nconst [optState, setOpt] = useOptimisticMock(['msg1'], (curr, val) => [...curr, val]);\n```",
    "workedExample": {
      "title": "Worked Example: The useOptimistic Hook for Instant UI",
      "code": "function useOptimisticMock(current, updateFn) {\n  return [current, (optimisticVal) => updateFn(current, optimisticVal)];\n}\nconst [optState, setOpt] = useOptimisticMock(['msg1'], (curr, val) => [...curr, val]);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The useOptimistic Hook for Instant UI.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The useOptimistic Hook for Instant UI.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function useOptimisticMock(current, updateFn) {\n  return [current, (optimisticVal) => updateFn(current, optimisticVal)];\n}\nconst [optState, setOpt] = useOptimisticMock(['msg1'], (curr, val) => [...curr, val]);",
    "hints": [
      "Write:\nfunction useOptimisticMock(current, updateFn) {\n  return [current, (optimisticVal) => updateFn(current, optimisticVal)];\n}\nconst [optState, setOpt] = useOptimisticMock(['msg1'], (curr, val) => [...curr, val]);"
    ],
    "testCases": [
      {
        "id": "react-146-tc-1",
        "description": "Verifies correct implementation for The useOptimistic Hook for Instant UI",
        "testFn": "Array.isArray(optState)"
      }
    ]
  },
  {
    "id": "react-147-ref-as-a-regular-prop-in-react-1",
    "title": "147. Ref as a Regular Prop in React 19",
    "slug": "lesson-147-ref-as-a-regular-prop-in-react-1",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Ref as a Regular Prop in React 19 in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Ref as a Regular Prop in React 19",
      "React 19"
    ],
    "analogy": "Handing someone a package directly without needing a third-party courier dispatch signature.",
    "explanationMarkdown": "### Ref as a Regular Prop in React 19\n\nIn React 19, `ref` is passed as a normal component prop, eliminating the need for `forwardRef`!\n\n```react\nfunction ModernComponent({ ref, label }) {\n  return { ref, label, noForwardRefNeeded: true };\n}\nconst comp = ModernComponent({ ref: {}, label: 'Input' });\n```",
    "workedExample": {
      "title": "Worked Example: Ref as a Regular Prop in React 19",
      "code": "function ModernComponent({ ref, label }) {\n  return { ref, label, noForwardRefNeeded: true };\n}\nconst comp = ModernComponent({ ref: {}, label: 'Input' });",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ref as a Regular Prop in React 19.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ref as a Regular Prop in React 19.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function ModernComponent({ ref, label }) {\n  return { ref, label, noForwardRefNeeded: true };\n}\nconst comp = ModernComponent({ ref: {}, label: 'Input' });",
    "hints": [
      "Write:\nfunction ModernComponent({ ref, label }) {\n  return { ref, label, noForwardRefNeeded: true };\n}\nconst comp = ModernComponent({ ref: {}, label: 'Input' });"
    ],
    "testCases": [
      {
        "id": "react-147-tc-1",
        "description": "Verifies correct implementation for Ref as a Regular Prop in React 19",
        "testFn": "comp.noForwardRefNeeded === true"
      }
    ]
  },
  {
    "id": "react-148-error-boundaries-with-getderived",
    "title": "148. Error Boundaries with getDerivedStateFromError",
    "slug": "lesson-148-error-boundaries-with-getderived",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Error Boundaries with getDerivedStateFromError in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Error Boundaries with getDerivedStateFromError",
      "React 19"
    ],
    "analogy": "A circuit breaker tripping in the electrical panel to prevent the entire house from losing power.",
    "explanationMarkdown": "### Error Boundaries with getDerivedStateFromError\n\nError Boundaries catch JavaScript exceptions anywhere in their child component tree and display fallback UI.\n\n```react\nclass ErrorBoundaryMock {\n  static getDerivedStateFromError(error) {\n    return { hasError: true, errorMsg: error.message };\n  }\n}\nconst errState = ErrorBoundaryMock.getDerivedStateFromError(new Error('Crash'));\n```",
    "workedExample": {
      "title": "Worked Example: Error Boundaries with getDerivedStateFromError",
      "code": "class ErrorBoundaryMock {\n  static getDerivedStateFromError(error) {\n    return { hasError: true, errorMsg: error.message };\n  }\n}\nconst errState = ErrorBoundaryMock.getDerivedStateFromError(new Error('Crash'));",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Error Boundaries with getDerivedStateFromError.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Error Boundaries with getDerivedStateFromError.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "class ErrorBoundaryMock {\n  static getDerivedStateFromError(error) {\n    return { hasError: true, errorMsg: error.message };\n  }\n}\nconst errState = ErrorBoundaryMock.getDerivedStateFromError(new Error('Crash'));",
    "hints": [
      "Write:\nclass ErrorBoundaryMock {\n  static getDerivedStateFromError(error) {\n    return { hasError: true, errorMsg: error.message };\n  }\n}\nconst errState = ErrorBoundaryMock.getDerivedStateFromError(new Error('Crash'));"
    ],
    "testCases": [
      {
        "id": "react-148-tc-1",
        "description": "Verifies correct implementation for Error Boundaries with getDerivedStateFromError",
        "testFn": "errState.hasError === true && errState.errorMsg === 'Crash'"
      }
    ]
  },
  {
    "id": "react-149-portal-rendering-with-createport",
    "title": "149. Portal Rendering with createPortal",
    "slug": "lesson-149-portal-rendering-with-createport",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Portal Rendering with createPortal in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Portal Rendering with createPortal",
      "React 19"
    ],
    "analogy": "A teleportation pod projecting a holographic avatar onto the roof of the building.",
    "explanationMarkdown": "### Portal Rendering with createPortal\n\n`createPortal(child, domNode)` renders children into a different DOM subtree outside parent hierarchy.\n\n```react\nfunction portalMock(node, target) {\n  return { node, target, isPortaled: true };\n}\nconst p = portalMock('Modal', 'document.body');\n```",
    "workedExample": {
      "title": "Worked Example: Portal Rendering with createPortal",
      "code": "function portalMock(node, target) {\n  return { node, target, isPortaled: true };\n}\nconst p = portalMock('Modal', 'document.body');",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Portal Rendering with createPortal.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Portal Rendering with createPortal.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function portalMock(node, target) {\n  return { node, target, isPortaled: true };\n}\nconst p = portalMock('Modal', 'document.body');",
    "hints": [
      "Write:\nfunction portalMock(node, target) {\n  return { node, target, isPortaled: true };\n}\nconst p = portalMock('Modal', 'document.body');"
    ],
    "testCases": [
      {
        "id": "react-149-tc-1",
        "description": "Verifies correct implementation for Portal Rendering with createPortal",
        "testFn": "p.isPortaled === true"
      }
    ]
  },
  {
    "id": "react-150-headless-component-architecture",
    "title": "150. Headless Component Architecture",
    "slug": "lesson-150-headless-component-architecture",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Headless Component Architecture in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Headless Component Architecture",
      "React 19"
    ],
    "analogy": "A sports car engine that can be dropped into an SUV, a sedan, or a boat with custom exterior body styling.",
    "explanationMarkdown": "### Headless Component Architecture\n\nHeadless components provide full keyboard accessibility, state, and ARIA logic with 0 predefined styles.\n\n```react\nfunction createHeadlessSelect() {\n  return { getButtonProps: () => ({ 'aria-expanded': false }), getItemProps: (i) => ({ role: 'option' }) };\n}\nconst select = createHeadlessSelect();\n```",
    "workedExample": {
      "title": "Worked Example: Headless Component Architecture",
      "code": "function createHeadlessSelect() {\n  return { getButtonProps: () => ({ 'aria-expanded': false }), getItemProps: (i) => ({ role: 'option' }) };\n}\nconst select = createHeadlessSelect();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Headless Component Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Headless Component Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function createHeadlessSelect() {\n  return { getButtonProps: () => ({ 'aria-expanded': false }), getItemProps: (i) => ({ role: 'option' }) };\n}\nconst select = createHeadlessSelect();",
    "hints": [
      "Write:\nfunction createHeadlessSelect() {\n  return { getButtonProps: () => ({ 'aria-expanded': false }), getItemProps: (i) => ({ role: 'option' }) };\n}\nconst select = createHeadlessSelect();"
    ],
    "testCases": [
      {
        "id": "react-150-tc-1",
        "description": "Verifies correct implementation for Headless Component Architecture",
        "testFn": "typeof select.getButtonProps === 'function'"
      }
    ]
  },
  {
    "id": "react-151-compound-components-pattern",
    "title": "151. Compound Components Pattern",
    "slug": "lesson-151-compound-components-pattern",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Compound Components Pattern in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "Compound Components Pattern",
      "React 19"
    ],
    "analogy": "An orchestra where the violin, cello, and flute communicate seamlessly under one conductor.",
    "explanationMarkdown": "### Compound Components Pattern\n\nCompound components (`<Tabs>`, `<Tabs.List>`, `<Tabs.Panel>`) share implicit state through context.\n\n```react\nconst Tabs = { Tab: () => 'Tab', Panel: () => 'Panel' };\n```",
    "workedExample": {
      "title": "Worked Example: Compound Components Pattern",
      "code": "const Tabs = { Tab: () => 'Tab', Panel: () => 'Panel' };",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Compound Components Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Compound Components Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "const Tabs = { Tab: () => 'Tab', Panel: () => 'Panel' };",
    "hints": [
      "Write:\nconst Tabs = { Tab: () => 'Tab', Panel: () => 'Panel' };"
    ],
    "testCases": [
      {
        "id": "react-151-tc-1",
        "description": "Verifies correct implementation for Compound Components Pattern",
        "testFn": "typeof Tabs.Tab === 'function'"
      }
    ]
  },
  {
    "id": "react-152-state-reducer-pattern-inversion-",
    "title": "152. State Reducer Pattern (Inversion of Control)",
    "slug": "lesson-152-state-reducer-pattern-inversion-",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master State Reducer Pattern (Inversion of Control) in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "State Reducer Pattern (Inversion of Control)",
      "React 19"
    ],
    "analogy": "Allowing a customer to customize the recipe toppings before the chef cooks the pizza.",
    "explanationMarkdown": "### State Reducer Pattern (Inversion of Control)\n\nAllows consumers of a component to intercept and customize internal state transitions.\n\n```react\nfunction stateReducerInversion(state, action, customReducer) {\n  return customReducer ? customReducer(state, action) : state;\n}\nconst res = stateReducerInversion(1, { type: 'ADD' }, (s) => s + 10);\n```",
    "workedExample": {
      "title": "Worked Example: State Reducer Pattern (Inversion of Control)",
      "code": "function stateReducerInversion(state, action, customReducer) {\n  return customReducer ? customReducer(state, action) : state;\n}\nconst res = stateReducerInversion(1, { type: 'ADD' }, (s) => s + 10);",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for State Reducer Pattern (Inversion of Control).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of State Reducer Pattern (Inversion of Control).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function stateReducerInversion(state, action, customReducer) {\n  return customReducer ? customReducer(state, action) : state;\n}\nconst res = stateReducerInversion(1, { type: 'ADD' }, (s) => s + 10);",
    "hints": [
      "Write:\nfunction stateReducerInversion(state, action, customReducer) {\n  return customReducer ? customReducer(state, action) : state;\n}\nconst res = stateReducerInversion(1, { type: 'ADD' }, (s) => s + 10);"
    ],
    "testCases": [
      {
        "id": "react-152-tc-1",
        "description": "Verifies correct implementation for State Reducer Pattern (Inversion of Control)",
        "testFn": "res === 11"
      }
    ]
  },
  {
    "id": "react-153-react-server-components-rsc-ment",
    "title": "153. React Server Components (RSC) Mental Model",
    "slug": "lesson-153-react-server-components-rsc-ment",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master React Server Components (RSC) Mental Model in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React Server Components (RSC) Mental Model",
      "React 19"
    ],
    "analogy": "Baking the entire cake in the bakery and shipping the finished cake, instead of mailing raw flour and an oven.",
    "explanationMarkdown": "### React Server Components (RSC) Mental Model\n\nServer Components run exclusively on the server, accessing databases directly with zero client JS bundle!\n\n```react\nfunction rscArchitecture() {\n  return { executesOn: 'Server', zeroClientBundle: true };\n}\nconst rsc = rscArchitecture();\n```",
    "workedExample": {
      "title": "Worked Example: React Server Components (RSC) Mental Model",
      "code": "function rscArchitecture() {\n  return { executesOn: 'Server', zeroClientBundle: true };\n}\nconst rsc = rscArchitecture();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React Server Components (RSC) Mental Model.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React Server Components (RSC) Mental Model.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function rscArchitecture() {\n  return { executesOn: 'Server', zeroClientBundle: true };\n}\nconst rsc = rscArchitecture();",
    "hints": [
      "Write:\nfunction rscArchitecture() {\n  return { executesOn: 'Server', zeroClientBundle: true };\n}\nconst rsc = rscArchitecture();"
    ],
    "testCases": [
      {
        "id": "react-153-tc-1",
        "description": "Verifies correct implementation for React Server Components (RSC) Mental Model",
        "testFn": "rsc.zeroClientBundle === true"
      }
    ]
  },
  {
    "id": "react-154-tanstack-query-server-state-inte",
    "title": "154. TanStack Query Server State Integration",
    "slug": "lesson-154-tanstack-query-server-state-inte",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master TanStack Query Server State Integration in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "TanStack Query Server State Integration",
      "React 19"
    ],
    "analogy": "A smart caching pantry that automatically replenishes milk whenever the carton dips below 10%.",
    "explanationMarkdown": "### TanStack Query Server State Integration\n\nDecouples server state from local UI state: automated caching, re-fetching, deduplication, and invalidation.\n\n```react\nfunction queryStateMock() {\n  return { data: ['cached'], isLoading: false, isStale: false };\n}\nconst q = queryStateMock();\n```",
    "workedExample": {
      "title": "Worked Example: TanStack Query Server State Integration",
      "code": "function queryStateMock() {\n  return { data: ['cached'], isLoading: false, isStale: false };\n}\nconst q = queryStateMock();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TanStack Query Server State Integration.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TanStack Query Server State Integration.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function queryStateMock() {\n  return { data: ['cached'], isLoading: false, isStale: false };\n}\nconst q = queryStateMock();",
    "hints": [
      "Write:\nfunction queryStateMock() {\n  return { data: ['cached'], isLoading: false, isStale: false };\n}\nconst q = queryStateMock();"
    ],
    "testCases": [
      {
        "id": "react-154-tc-1",
        "description": "Verifies correct implementation for TanStack Query Server State Integration",
        "testFn": "q.data.length === 1 && q.isLoading === false"
      }
    ]
  },
  {
    "id": "react-155-react-masterclass-capstone-enter",
    "title": "155. React Masterclass Capstone: Enterprise App Architecture",
    "slug": "lesson-155-react-masterclass-capstone-enter",
    "language": "react",
    "category": "Module 10: Modern React 19 & Fullstack Patterns",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master React Masterclass Capstone: Enterprise App Architecture in React 19: Modern Frontend Architecture (150 Topics).",
    "concepts": [
      "React Masterclass Capstone",
      "React 19"
    ],
    "analogy": "The launch of an interstellar flagship built with cutting-edge engineering and redundant safety systems.",
    "explanationMarkdown": "### React Masterclass Capstone: Enterprise App Architecture\n\nA production-grade application integrating React 19, Actions, Suspense, Custom Hooks, and Error Boundaries.\n\n```react\nfunction assembleProductionApp() {\n  return { status: 'Production-Ready', architecture: 'React 19 Enterprise' };\n}\nconst app = assembleProductionApp();\n```",
    "workedExample": {
      "title": "Worked Example: React Masterclass Capstone: Enterprise App Architecture",
      "code": "function assembleProductionApp() {\n  return { status: 'Production-Ready', architecture: 'React 19 Enterprise' };\n}\nconst app = assembleProductionApp();",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for React Masterclass Capstone: Enterprise App Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of React Masterclass Capstone: Enterprise App Architecture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "// Step 1: Write your React component or hook below\n// TODO: Write code below\n",
    "solutionCode": "function assembleProductionApp() {\n  return { status: 'Production-Ready', architecture: 'React 19 Enterprise' };\n}\nconst app = assembleProductionApp();",
    "hints": [
      "Write:\nfunction assembleProductionApp() {\n  return { status: 'Production-Ready', architecture: 'React 19 Enterprise' };\n}\nconst app = assembleProductionApp();"
    ],
    "testCases": [
      {
        "id": "react-155-tc-1",
        "description": "Verifies correct implementation for React Masterclass Capstone: Enterprise App Architecture",
        "testFn": "app.status === 'Production-Ready'"
      }
    ]
  }
]
};
