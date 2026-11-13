import { Track } from '../../types';

export const HTML_TRACK: Track = {
  id: "html",
  title: "HTML5: Semantic Web Architecture (150 Topics)",
  slug: "html",
  language: "html",
  icon: "Code2",
  color: "from-orange-500 to-amber-600",
  tagline: "Master semantic web architecture, responsive multimedia, forms, and accessibility across 150 lessons.",
  description: "From foundational tags and semantic document flow to responsive picture sets, accessible ARIA patterns, SVG graphics, and modern web components.",
  lessons: [
  {
    "id": "html-1-the-!doctype-html-declaration",
    "title": "1. The <!DOCTYPE html> Declaration",
    "slug": "lesson-1-the-!doctype-html-declaration",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The <!DOCTYPE html> Declaration in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <!DOCTYPE html> Declaration",
      "HTML5"
    ],
    "analogy": "A birth certificate establishing that this document adheres to modern HTML5 standards.",
    "explanationMarkdown": "### The <!DOCTYPE html> Declaration\n\nThe `<!DOCTYPE html>` declaration informs web browsers that the document is written in modern HTML5 standard format.\n\n```html\n<!DOCTYPE html>\n<html>\n</html>\n```",
    "workedExample": {
      "title": "Worked Example: The <!DOCTYPE html> Declaration",
      "code": "<!DOCTYPE html>\n<html>\n</html>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <!DOCTYPE html> Declaration.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <!DOCTYPE html> Declaration.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Declare standard HTML5 doc -->\n",
    "solutionCode": "<!DOCTYPE html>\n<html>\n</html>",
    "hints": [
      "Write:\n<!DOCTYPE html>\n<html>\n</html>"
    ],
    "testCases": [
      {
        "id": "html-1-tc-1",
        "description": "Verifies correct implementation for The <!DOCTYPE html> Declaration",
        "testFn": "code.includes('<!DOCTYPE html>')"
      }
    ]
  },
  {
    "id": "html-2-the-root-html-element-and-lang-a",
    "title": "2. The Root <html> Element and lang Attribute",
    "slug": "lesson-2-the-root-html-element-and-lang-a",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Root <html> Element and lang Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The Root <html> Element and lang Attribute",
      "HTML5"
    ],
    "analogy": "The master container holding all pages of a book.",
    "explanationMarkdown": "### The Root <html> Element and lang Attribute\n\nThe `<html>` element wraps all page content. The `lang` attribute specifies the natural language for search engines and screen readers.\n\n```html\n<html lang=\"en\">\n</html>\n```",
    "workedExample": {
      "title": "Worked Example: The Root <html> Element and lang Attribute",
      "code": "<html lang=\"en\">\n</html>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Root <html> Element and lang Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Root <html> Element and lang Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add root html element with lang='en' -->\n",
    "solutionCode": "<html lang=\"en\">\n</html>",
    "hints": [
      "Write:\n<html lang=\"en\">\n</html>"
    ],
    "testCases": [
      {
        "id": "html-2-tc-1",
        "description": "Verifies correct implementation for The Root <html> Element and lang Attribute",
        "testFn": "code.includes('html') && code.includes('lang=\"en\"')"
      }
    ]
  },
  {
    "id": "html-3-the-head-element-for-metadata",
    "title": "3. The <head> Element for Metadata",
    "slug": "lesson-3-the-head-element-for-metadata",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The <head> Element for Metadata in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <head> Element for Metadata",
      "HTML5"
    ],
    "analogy": "The backstage control room containing settings invisible to the audience.",
    "explanationMarkdown": "### The <head> Element for Metadata\n\nThe `<head>` section stores metadata, stylesheets, title, and scripts not rendered directly on the page canvas.\n\n```html\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n```",
    "workedExample": {
      "title": "Worked Example: The <head> Element for Metadata",
      "code": "<head>\n  <meta charset=\"UTF-8\">\n</head>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <head> Element for Metadata.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <head> Element for Metadata.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create head container -->\n",
    "solutionCode": "<head>\n  <meta charset=\"UTF-8\">\n</head>",
    "hints": [
      "Write:\n<head>\n  <meta charset=\"UTF-8\">\n</head>"
    ],
    "testCases": [
      {
        "id": "html-3-tc-1",
        "description": "Verifies correct implementation for The <head> Element for Metadata",
        "testFn": "code.includes('<head>') && code.includes('</head>')"
      }
    ]
  },
  {
    "id": "html-4-the-meta-charset=utf-8-encoding",
    "title": "4. The <meta charset='UTF-8'> Encoding",
    "slug": "lesson-4-the-meta-charset=utf-8-encoding",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The <meta charset='UTF-8'> Encoding in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <meta charset='UTF-8'> Encoding",
      "HTML5"
    ],
    "analogy": "A universal translation dictionary allowing every alphabet, emoji, and symbol to display correctly.",
    "explanationMarkdown": "### The <meta charset='UTF-8'> Encoding\n\nUTF-8 handles virtually every character in the world, preventing strange corrupted symbols from appearing.\n\n```html\n<meta charset=\"UTF-8\">\n```",
    "workedExample": {
      "title": "Worked Example: The <meta charset='UTF-8'> Encoding",
      "code": "<meta charset=\"UTF-8\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <meta charset='UTF-8'> Encoding.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <meta charset='UTF-8'> Encoding.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Specify UTF-8 charset -->\n",
    "solutionCode": "<meta charset=\"UTF-8\">",
    "hints": [
      "Write:\n<meta charset=\"UTF-8\">"
    ],
    "testCases": [
      {
        "id": "html-4-tc-1",
        "description": "Verifies correct implementation for The <meta charset='UTF-8'> Encoding",
        "testFn": "code.includes('charset=\"UTF-8\"')"
      }
    ]
  },
  {
    "id": "html-5-viewport-meta-tag-for-mobile-dev",
    "title": "5. Viewport Meta Tag for Mobile Devices",
    "slug": "lesson-5-viewport-meta-tag-for-mobile-dev",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Viewport Meta Tag for Mobile Devices in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Viewport Meta Tag for Mobile Devices",
      "HTML5"
    ],
    "analogy": "An adjustable camera lens that auto-zooms to fit whatever screen size is looking at the page.",
    "explanationMarkdown": "### Viewport Meta Tag for Mobile Devices\n\nEnsures mobile browsers render the page at the device's native pixel width rather than a zoomed-out 980px desktop view.\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```",
    "workedExample": {
      "title": "Worked Example: Viewport Meta Tag for Mobile Devices",
      "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewport Meta Tag for Mobile Devices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewport Meta Tag for Mobile Devices.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add responsive viewport meta tag -->\n",
    "solutionCode": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "hints": [
      "Write:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
    ],
    "testCases": [
      {
        "id": "html-5-tc-1",
        "description": "Verifies correct implementation for Viewport Meta Tag for Mobile Devices",
        "testFn": "code.includes('name=\"viewport\"') && code.includes('width=device-width')"
      }
    ]
  },
  {
    "id": "html-6-the-title-tag-for-browser-tabs",
    "title": "6. The <title> Tag for Browser Tabs",
    "slug": "lesson-6-the-title-tag-for-browser-tabs",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The <title> Tag for Browser Tabs in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <title> Tag for Browser Tabs",
      "HTML5"
    ],
    "analogy": "The printed spine on the exterior of a book.",
    "explanationMarkdown": "### The <title> Tag for Browser Tabs\n\nSets the title displayed in browser tabs, bookmarks, and search engine SERP snippets.\n\n```html\n<title>DevForge Learning Studio</title>\n```",
    "workedExample": {
      "title": "Worked Example: The <title> Tag for Browser Tabs",
      "code": "<title>DevForge Learning Studio</title>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <title> Tag for Browser Tabs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <title> Tag for Browser Tabs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Define page title -->\n",
    "solutionCode": "<title>DevForge Learning Studio</title>",
    "hints": [
      "Write:\n<title>DevForge Learning Studio</title>"
    ],
    "testCases": [
      {
        "id": "html-6-tc-1",
        "description": "Verifies correct implementation for The <title> Tag for Browser Tabs",
        "testFn": "code.includes('<title>') && code.includes('</title>')"
      }
    ]
  },
  {
    "id": "html-7-the-body-element-for-rendered-co",
    "title": "7. The <body> Element for Rendered Content",
    "slug": "lesson-7-the-body-element-for-rendered-co",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The <body> Element for Rendered Content in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <body> Element for Rendered Content",
      "HTML5"
    ],
    "analogy": "The physical stage where the play actually performs for the audience.",
    "explanationMarkdown": "### The <body> Element for Rendered Content\n\nWraps all visible HTML content that users see and interact with in the browser viewport.\n\n```html\n<body>\n  <p>Hello DevForge!</p>\n</body>\n```",
    "workedExample": {
      "title": "Worked Example: The <body> Element for Rendered Content",
      "code": "<body>\n  <p>Hello DevForge!</p>\n</body>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <body> Element for Rendered Content.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <body> Element for Rendered Content.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add body element -->\n",
    "solutionCode": "<body>\n  <p>Hello DevForge!</p>\n</body>",
    "hints": [
      "Write:\n<body>\n  <p>Hello DevForge!</p>\n</body>"
    ],
    "testCases": [
      {
        "id": "html-7-tc-1",
        "description": "Verifies correct implementation for The <body> Element for Rendered Content",
        "testFn": "code.includes('<body>') && code.includes('</body>')"
      }
    ]
  },
  {
    "id": "html-8-headings-from-h1-to-h6",
    "title": "8. Headings: From <h1> to <h6>",
    "slug": "lesson-8-headings-from-h1-to-h6",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Headings: From <h1> to <h6> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Headings",
      "HTML5"
    ],
    "analogy": "Newspaper headlines: h1 is the front-page banner, down to h6 sub-subsections.",
    "explanationMarkdown": "### Headings: From <h1> to <h6>\n\nHeadings structure content hierarchy. Browsers, users, and search crawlers rely on them to grasp document structure.\n\n```html\n<h1>Welcome to Modern Web Development</h1>\n```",
    "workedExample": {
      "title": "Worked Example: Headings: From <h1> to <h6>",
      "code": "<h1>Welcome to Modern Web Development</h1>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Headings: From <h1> to <h6>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Headings: From <h1> to <h6>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add primary h1 heading -->\n",
    "solutionCode": "<h1>Welcome to Modern Web Development</h1>",
    "hints": [
      "Write:\n<h1>Welcome to Modern Web Development</h1>"
    ],
    "testCases": [
      {
        "id": "html-8-tc-1",
        "description": "Verifies correct implementation for Headings: From <h1> to <h6>",
        "testFn": "code.includes('<h1>') && code.includes('</h1>')"
      }
    ]
  },
  {
    "id": "html-9-paragraphs-with-the-p-tag",
    "title": "9. Paragraphs with the <p> Tag",
    "slug": "lesson-9-paragraphs-with-the-p-tag",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Paragraphs with the <p> Tag in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Paragraphs with the <p> Tag",
      "HTML5"
    ],
    "analogy": "A standard paragraph in a printed novel.",
    "explanationMarkdown": "### Paragraphs with the <p> Tag\n\nParagraphs group blocks of prose text together with automatic default top and bottom margin.\n\n```html\n<p>HTML is the foundation of the modern internet.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Paragraphs with the <p> Tag",
      "code": "<p>HTML is the foundation of the modern internet.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Paragraphs with the <p> Tag.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Paragraphs with the <p> Tag.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add a paragraph -->\n",
    "solutionCode": "<p>HTML is the foundation of the modern internet.</p>",
    "hints": [
      "Write:\n<p>HTML is the foundation of the modern internet.</p>"
    ],
    "testCases": [
      {
        "id": "html-9-tc-1",
        "description": "Verifies correct implementation for Paragraphs with the <p> Tag",
        "testFn": "code.includes('<p>') && code.includes('</p>')"
      }
    ]
  },
  {
    "id": "html-10-line-breaks-with-br-self-closing",
    "title": "10. Line Breaks with <br> (Self-Closing)",
    "slug": "lesson-10-line-breaks-with-br-self-closing",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Line Breaks with <br> (Self-Closing) in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Line Breaks with <br> (Self-Closing)",
      "HTML5"
    ],
    "analogy": "Pressing Shift+Enter in a word processor to start a new line without starting a new paragraph.",
    "explanationMarkdown": "### Line Breaks with <br> (Self-Closing)\n\nInserts a single carriage return inside text flow without creating extra paragraph spacing.\n\n```html\n<p>Line one<br>Line two</p>\n```",
    "workedExample": {
      "title": "Worked Example: Line Breaks with <br> (Self-Closing)",
      "code": "<p>Line one<br>Line two</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Line Breaks with <br> (Self-Closing).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Line Breaks with <br> (Self-Closing).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add a sentence with a forced line break -->\n",
    "solutionCode": "<p>Line one<br>Line two</p>",
    "hints": [
      "Write:\n<p>Line one<br>Line two</p>"
    ],
    "testCases": [
      {
        "id": "html-10-tc-1",
        "description": "Verifies correct implementation for Line Breaks with <br> (Self-Closing)",
        "testFn": "code.includes('<br>') || code.includes('<br/>')"
      }
    ]
  },
  {
    "id": "html-11-thematic-horizontal-rule-hr",
    "title": "11. Thematic Horizontal Rule <hr>",
    "slug": "lesson-11-thematic-horizontal-rule-hr",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Thematic Horizontal Rule <hr> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Thematic Horizontal Rule <hr>",
      "HTML5"
    ],
    "analogy": "A printed horizontal divider separating scene changes in a book chapter.",
    "explanationMarkdown": "### Thematic Horizontal Rule <hr>\n\nRepresents a thematic break between paragraphs or content sections.\n\n```html\n<section>\n  <h2>Section 1</h2>\n  <hr>\n  <h2>Section 2</h2>\n</section>\n```",
    "workedExample": {
      "title": "Worked Example: Thematic Horizontal Rule <hr>",
      "code": "<section>\n  <h2>Section 1</h2>\n  <hr>\n  <h2>Section 2</h2>\n</section>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Thematic Horizontal Rule <hr>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Thematic Horizontal Rule <hr>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add a divider between sections -->\n",
    "solutionCode": "<section>\n  <h2>Section 1</h2>\n  <hr>\n  <h2>Section 2</h2>\n</section>",
    "hints": [
      "Write:\n<section>\n  <h2>Section 1</h2>\n  <hr>\n  <h2>Section 2</h2>\n</section>"
    ],
    "testCases": [
      {
        "id": "html-11-tc-1",
        "description": "Verifies correct implementation for Thematic Horizontal Rule <hr>",
        "testFn": "code.includes('<hr>') || code.includes('<hr/>')"
      }
    ]
  },
  {
    "id": "html-12-html-comments-for-notes-!-----",
    "title": "12. HTML Comments for Notes <!-- -->",
    "slug": "lesson-12-html-comments-for-notes-!-----",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master HTML Comments for Notes <!-- --> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "HTML Comments for Notes <!-- -->",
      "HTML5"
    ],
    "analogy": "Handwritten margin notes in a draft that only the author can see.",
    "explanationMarkdown": "### HTML Comments for Notes <!-- -->\n\nComments are ignored by the browser rendering engine and serve as documentation for engineers.\n\n```html\n<!-- This section loads dynamically via script -->\n<div>Content</div>\n```",
    "workedExample": {
      "title": "Worked Example: HTML Comments for Notes <!-- -->",
      "code": "<!-- This section loads dynamically via script -->\n<div>Content</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTML Comments for Notes <!-- -->.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTML Comments for Notes <!-- -->.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add an explanatory comment -->\n",
    "solutionCode": "<!-- This section loads dynamically via script -->\n<div>Content</div>",
    "hints": [
      "Write:\n<!-- This section loads dynamically via script -->\n<div>Content</div>"
    ],
    "testCases": [
      {
        "id": "html-12-tc-1",
        "description": "Verifies correct implementation for HTML Comments for Notes <!-- -->",
        "testFn": "code.includes('<!--') && code.includes('-->')"
      }
    ]
  },
  {
    "id": "html-13-strong-importance-with-strong",
    "title": "13. Strong Importance with <strong>",
    "slug": "lesson-13-strong-importance-with-strong",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Strong Importance with <strong> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Strong Importance with <strong>",
      "HTML5"
    ],
    "analogy": "Speaking a key phrase with urgent emphasis and conviction.",
    "explanationMarkdown": "### Strong Importance with <strong>\n\nIndicates that contents have strong importance, seriousness, or urgency; bolded by default.\n\n```html\n<p>Warning: <strong>Never share your password</strong>.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Strong Importance with <strong>",
      "code": "<p>Warning: <strong>Never share your password</strong>.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Strong Importance with <strong>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Strong Importance with <strong>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Emphasize urgent text -->\n",
    "solutionCode": "<p>Warning: <strong>Never share your password</strong>.</p>",
    "hints": [
      "Write:\n<p>Warning: <strong>Never share your password</strong>.</p>"
    ],
    "testCases": [
      {
        "id": "html-13-tc-1",
        "description": "Verifies correct implementation for Strong Importance with <strong>",
        "testFn": "code.includes('<strong>') && code.includes('</strong>')"
      }
    ]
  },
  {
    "id": "html-14-emphasis-and-stress-with-em",
    "title": "14. Emphasis and Stress with <em>",
    "slug": "lesson-14-emphasis-and-stress-with-em",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Emphasis and Stress with <em> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Emphasis and Stress with <em>",
      "HTML5"
    ],
    "analogy": "Tilting a word with vocal stress to change the inflection of a sentence.",
    "explanationMarkdown": "### Emphasis and Stress with <em>\n\nMarks text with typographic stress emphasis, typically displayed in italics.\n\n```html\n<p>I <em>love</em> clean code architecture.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Emphasis and Stress with <em>",
      "code": "<p>I <em>love</em> clean code architecture.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Emphasis and Stress with <em>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Emphasis and Stress with <em>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add stressed voice -->\n",
    "solutionCode": "<p>I <em>love</em> clean code architecture.</p>",
    "hints": [
      "Write:\n<p>I <em>love</em> clean code architecture.</p>"
    ],
    "testCases": [
      {
        "id": "html-14-tc-1",
        "description": "Verifies correct implementation for Emphasis and Stress with <em>",
        "testFn": "code.includes('<em>') && code.includes('</em>')"
      }
    ]
  },
  {
    "id": "html-15-generic-containers-div-vs-span",
    "title": "15. Generic Containers: <div> vs <span>",
    "slug": "lesson-15-generic-containers-div-vs-span",
    "language": "html",
    "category": "Module 1: Document Structure & Essentials",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Generic Containers: <div> vs <span> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Generic Containers",
      "HTML5"
    ],
    "analogy": "A cardboard box (div) vs a highlighter marker (span).",
    "explanationMarkdown": "### Generic Containers: <div> vs <span>\n\n<div> is a block-level container occupying full width, while <span> is an inline wrapper for styling phrases.\n\n```html\n<div>User status: <span class=\"online\">Active</span></div>\n```",
    "workedExample": {
      "title": "Worked Example: Generic Containers: <div> vs <span>",
      "code": "<div>User status: <span class=\"online\">Active</span></div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generic Containers: <div> vs <span>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generic Containers: <div> vs <span>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create block container and inline span -->\n",
    "solutionCode": "<div>User status: <span class=\"online\">Active</span></div>",
    "hints": [
      "Write:\n<div>User status: <span class=\"online\">Active</span></div>"
    ],
    "testCases": [
      {
        "id": "html-15-tc-1",
        "description": "Verifies correct implementation for Generic Containers: <div> vs <span>",
        "testFn": "code.includes('<div>') && code.includes('<span>')"
      }
    ]
  },
  {
    "id": "html-16-highlighting-with-mark",
    "title": "16. Highlighting with <mark>",
    "slug": "lesson-16-highlighting-with-mark",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Highlighting with <mark> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Highlighting with <mark>",
      "HTML5"
    ],
    "analogy": "A yellow highlighter pen marking a search result on a paper printout.",
    "explanationMarkdown": "### Highlighting with <mark>\n\nRepresents text marked or highlighted for reference purposes due to its relevance in another context.\n\n```html\n<p>Search result: <mark>JavaScript</mark> found.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Highlighting with <mark>",
      "code": "<p>Search result: <mark>JavaScript</mark> found.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Highlighting with <mark>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Highlighting with <mark>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Highlight keyword -->\n",
    "solutionCode": "<p>Search result: <mark>JavaScript</mark> found.</p>",
    "hints": [
      "Write:\n<p>Search result: <mark>JavaScript</mark> found.</p>"
    ],
    "testCases": [
      {
        "id": "html-16-tc-1",
        "description": "Verifies correct implementation for Highlighting with <mark>",
        "testFn": "code.includes('<mark>')"
      }
    ]
  },
  {
    "id": "html-17-strikethrough---deleted-text-wit",
    "title": "17. Strikethrough / Deleted Text with <del>",
    "slug": "lesson-17-strikethrough---deleted-text-wit",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Strikethrough / Deleted Text with <del> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Strikethrough / Deleted Text with <del>",
      "HTML5"
    ],
    "analogy": "Red ink crossing out an obsolete requirement on a specification.",
    "explanationMarkdown": "### Strikethrough / Deleted Text with <del>\n\nRepresents a range of text that has been deleted from a document, often paired with `<ins>`.\n\n```html\n<p>Price: <del>$99</del> $49</p>\n```",
    "workedExample": {
      "title": "Worked Example: Strikethrough / Deleted Text with <del>",
      "code": "<p>Price: <del>$99</del> $49</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Strikethrough / Deleted Text with <del>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Strikethrough / Deleted Text with <del>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Show discounted original price -->\n",
    "solutionCode": "<p>Price: <del>$99</del> $49</p>",
    "hints": [
      "Write:\n<p>Price: <del>$99</del> $49</p>"
    ],
    "testCases": [
      {
        "id": "html-17-tc-1",
        "description": "Verifies correct implementation for Strikethrough / Deleted Text with <del>",
        "testFn": "code.includes('<del>')"
      }
    ]
  },
  {
    "id": "html-18-inserted---updated-content-with-",
    "title": "18. Inserted / Updated Content with <ins>",
    "slug": "lesson-18-inserted---updated-content-with-",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Inserted / Updated Content with <ins> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Inserted / Updated Content with <ins>",
      "HTML5"
    ],
    "analogy": "Green margin note showing the approved amendment to a contract.",
    "explanationMarkdown": "### Inserted / Updated Content with <ins>\n\nRepresents text that has been inserted as an addition to an earlier version of the document.\n\n```html\n<p>Release date: <del>June</del> <ins>July</ins></p>\n```",
    "workedExample": {
      "title": "Worked Example: Inserted / Updated Content with <ins>",
      "code": "<p>Release date: <del>June</del> <ins>July</ins></p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inserted / Updated Content with <ins>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inserted / Updated Content with <ins>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add inserted update -->\n",
    "solutionCode": "<p>Release date: <del>June</del> <ins>July</ins></p>",
    "hints": [
      "Write:\n<p>Release date: <del>June</del> <ins>July</ins></p>"
    ],
    "testCases": [
      {
        "id": "html-18-tc-1",
        "description": "Verifies correct implementation for Inserted / Updated Content with <ins>",
        "testFn": "code.includes('<ins>')"
      }
    ]
  },
  {
    "id": "html-19-subscript-with-sub",
    "title": "19. Subscript with <sub>",
    "slug": "lesson-19-subscript-with-sub",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Subscript with <sub> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Subscript with <sub>",
      "HTML5"
    ],
    "analogy": "The tiny lowered foot numbers in a chemistry formula.",
    "explanationMarkdown": "### Subscript with <sub>\n\nRenders text lower and smaller than surrounding text, standard for chemical formulas and math indexes.\n\n```html\n<p>Water molecule: H<sub>2</sub>O</p>\n```",
    "workedExample": {
      "title": "Worked Example: Subscript with <sub>",
      "code": "<p>Water molecule: H<sub>2</sub>O</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Subscript with <sub>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subscript with <sub>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Write chemical formula H2O -->\n",
    "solutionCode": "<p>Water molecule: H<sub>2</sub>O</p>",
    "hints": [
      "Write:\n<p>Water molecule: H<sub>2</sub>O</p>"
    ],
    "testCases": [
      {
        "id": "html-19-tc-1",
        "description": "Verifies correct implementation for Subscript with <sub>",
        "testFn": "code.includes('<sub>') && code.includes('</sub>')"
      }
    ]
  },
  {
    "id": "html-20-superscript-with-sup",
    "title": "20. Superscript with <sup>",
    "slug": "lesson-20-superscript-with-sup",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Superscript with <sup> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Superscript with <sup>",
      "HTML5"
    ],
    "analogy": "The raised exponent power in mathematical equations.",
    "explanationMarkdown": "### Superscript with <sup>\n\nRenders text raised and smaller, used for exponents, ordinal indicators (1st), and footnotes.\n\n```html\n<p>Math formula: E = mc<sup>2</sup></p>\n```",
    "workedExample": {
      "title": "Worked Example: Superscript with <sup>",
      "code": "<p>Math formula: E = mc<sup>2</sup></p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Superscript with <sup>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Superscript with <sup>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Write exponent x squared -->\n",
    "solutionCode": "<p>Math formula: E = mc<sup>2</sup></p>",
    "hints": [
      "Write:\n<p>Math formula: E = mc<sup>2</sup></p>"
    ],
    "testCases": [
      {
        "id": "html-20-tc-1",
        "description": "Verifies correct implementation for Superscript with <sup>",
        "testFn": "code.includes('<sup>') && code.includes('</sup>')"
      }
    ]
  },
  {
    "id": "html-21-small-print-disclaimers-with-sma",
    "title": "21. Small Print Disclaimers with <small>",
    "slug": "lesson-21-small-print-disclaimers-with-sma",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Small Print Disclaimers with <small> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Small Print Disclaimers with <small>",
      "HTML5"
    ],
    "analogy": "The fine print terms and legal disclaimers at the bottom of an invoice.",
    "explanationMarkdown": "### Small Print Disclaimers with <small>\n\nSide comments and small print (such as copyright and legal text), rendered one font size smaller.\n\n```html\n<p><small>\u00a9 2026 DevForge Inc. All rights reserved.</small></p>\n```",
    "workedExample": {
      "title": "Worked Example: Small Print Disclaimers with <small>",
      "code": "<p><small>\u00a9 2026 DevForge Inc. All rights reserved.</small></p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Small Print Disclaimers with <small>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Small Print Disclaimers with <small>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add copyright small print -->\n",
    "solutionCode": "<p><small>\u00a9 2026 DevForge Inc. All rights reserved.</small></p>",
    "hints": [
      "Write:\n<p><small>\u00a9 2026 DevForge Inc. All rights reserved.</small></p>"
    ],
    "testCases": [
      {
        "id": "html-21-tc-1",
        "description": "Verifies correct implementation for Small Print Disclaimers with <small>",
        "testFn": "code.includes('<small>')"
      }
    ]
  },
  {
    "id": "html-22-blockquotes-with-blockquote",
    "title": "22. Blockquotes with <blockquote>",
    "slug": "lesson-22-blockquotes-with-blockquote",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Blockquotes with <blockquote> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Blockquotes with <blockquote>",
      "HTML5"
    ],
    "analogy": "An indented quotation block extracted from an external speech or book.",
    "explanationMarkdown": "### Blockquotes with <blockquote>\n\nRepresents a section that is quoted from another source, usually rendered with indentation.\n\n```html\n<blockquote cite=\"https://example.com\">\n  <p>Simplicity is prerequisite for reliability.</p>\n</blockquote>\n```",
    "workedExample": {
      "title": "Worked Example: Blockquotes with <blockquote>",
      "code": "<blockquote cite=\"https://example.com\">\n  <p>Simplicity is prerequisite for reliability.</p>\n</blockquote>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Blockquotes with <blockquote>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Blockquotes with <blockquote>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Quote an industry thought leader -->\n",
    "solutionCode": "<blockquote cite=\"https://example.com\">\n  <p>Simplicity is prerequisite for reliability.</p>\n</blockquote>",
    "hints": [
      "Write:\n<blockquote cite=\"https://example.com\">\n  <p>Simplicity is prerequisite for reliability.</p>\n</blockquote>"
    ],
    "testCases": [
      {
        "id": "html-22-tc-1",
        "description": "Verifies correct implementation for Blockquotes with <blockquote>",
        "testFn": "code.includes('<blockquote>')"
      }
    ]
  },
  {
    "id": "html-23-inline-quotations-with-q",
    "title": "23. Inline Quotations with <q>",
    "slug": "lesson-23-inline-quotations-with-q",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Inline Quotations with <q> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Inline Quotations with <q>",
      "HTML5"
    ],
    "analogy": "Quotation marks automatically tailored to the document's regional language.",
    "explanationMarkdown": "### Inline Quotations with <q>\n\nIndicates an inline quotation; modern browsers automatically insert surrounding quotation marks.\n\n```html\n<p>The engineer said <q>Ship it today</q> with a smile.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Inline Quotations with <q>",
      "code": "<p>The engineer said <q>Ship it today</q> with a smile.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inline Quotations with <q>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inline Quotations with <q>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add inline quote -->\n",
    "solutionCode": "<p>The engineer said <q>Ship it today</q> with a smile.</p>",
    "hints": [
      "Write:\n<p>The engineer said <q>Ship it today</q> with a smile.</p>"
    ],
    "testCases": [
      {
        "id": "html-23-tc-1",
        "description": "Verifies correct implementation for Inline Quotations with <q>",
        "testFn": "code.includes('<q>') && code.includes('</q>')"
      }
    ]
  },
  {
    "id": "html-24-citing-works-with-cite",
    "title": "24. Citing Works with <cite>",
    "slug": "lesson-24-citing-works-with-cite",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Citing Works with <cite> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Citing Works with <cite>",
      "HTML5"
    ],
    "analogy": "The bibliographic title citation in an academic paper footnote.",
    "explanationMarkdown": "### Citing Works with <cite>\n\nUsed to mark the title of a creative work (book, movie, song, paper, painting).\n\n```html\n<p>Inspired by <cite>Clean Code</cite> by Robert Martin.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Citing Works with <cite>",
      "code": "<p>Inspired by <cite>Clean Code</cite> by Robert Martin.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Citing Works with <cite>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Citing Works with <cite>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Cite a book or paper -->\n",
    "solutionCode": "<p>Inspired by <cite>Clean Code</cite> by Robert Martin.</p>",
    "hints": [
      "Write:\n<p>Inspired by <cite>Clean Code</cite> by Robert Martin.</p>"
    ],
    "testCases": [
      {
        "id": "html-24-tc-1",
        "description": "Verifies correct implementation for Citing Works with <cite>",
        "testFn": "code.includes('<cite>')"
      }
    ]
  },
  {
    "id": "html-25-abbreviations-with-abbr-and-titl",
    "title": "25. Abbreviations with <abbr> and title",
    "slug": "lesson-25-abbreviations-with-abbr-and-titl",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Abbreviations with <abbr> and title in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Abbreviations with <abbr> and title",
      "HTML5"
    ],
    "analogy": "Hovering over an acronym to view the expanded definition in a tooltip.",
    "explanationMarkdown": "### Abbreviations with <abbr> and title\n\nRepresents an abbreviation or acronym; the `title` attribute expands its full meaning.\n\n```html\n<p>Master <abbr title=\"HyperText Markup Language\">HTML</abbr> first.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Abbreviations with <abbr> and title",
      "code": "<p>Master <abbr title=\"HyperText Markup Language\">HTML</abbr> first.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Abbreviations with <abbr> and title.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Abbreviations with <abbr> and title.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Define HTML acronym -->\n",
    "solutionCode": "<p>Master <abbr title=\"HyperText Markup Language\">HTML</abbr> first.</p>",
    "hints": [
      "Write:\n<p>Master <abbr title=\"HyperText Markup Language\">HTML</abbr> first.</p>"
    ],
    "testCases": [
      {
        "id": "html-25-tc-1",
        "description": "Verifies correct implementation for Abbreviations with <abbr> and title",
        "testFn": "code.includes('<abbr') && code.includes('title=')"
      }
    ]
  },
  {
    "id": "html-26-inline-monospace-code-with-code",
    "title": "26. Inline Monospace Code with <code>",
    "slug": "lesson-26-inline-monospace-code-with-code",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Inline Monospace Code with <code> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Inline Monospace Code with <code>",
      "HTML5"
    ],
    "analogy": "Typesetting code snippets in a typewriter monospace font inside a textbook.",
    "explanationMarkdown": "### Inline Monospace Code with <code>\n\nRepresents a fragment of computer code, displayed by default in the browser's monospace font.\n\n```html\n<p>Use the <code>fetch()</code> API to make requests.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Inline Monospace Code with <code>",
      "code": "<p>Use the <code>fetch()</code> API to make requests.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inline Monospace Code with <code>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inline Monospace Code with <code>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Mention a function name -->\n",
    "solutionCode": "<p>Use the <code>fetch()</code> API to make requests.</p>",
    "hints": [
      "Write:\n<p>Use the <code>fetch()</code> API to make requests.</p>"
    ],
    "testCases": [
      {
        "id": "html-26-tc-1",
        "description": "Verifies correct implementation for Inline Monospace Code with <code>",
        "testFn": "code.includes('<code>') && code.includes('</code>')"
      }
    ]
  },
  {
    "id": "html-27-preformatted-text-blocks-with-pr",
    "title": "27. Preformatted Text Blocks with <pre>",
    "slug": "lesson-27-preformatted-text-blocks-with-pr",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Preformatted Text Blocks with <pre> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Preformatted Text Blocks with <pre>",
      "HTML5"
    ],
    "analogy": "A carbon copy that retains every space, tab, and newline exactly as typed.",
    "explanationMarkdown": "### Preformatted Text Blocks with <pre>\n\nPresents preformatted text where white space and line breaks are preserved exactly as written in the HTML.\n\n```html\n<pre>\nline 1\n  line 2 (indented)\n</pre>\n```",
    "workedExample": {
      "title": "Worked Example: Preformatted Text Blocks with <pre>",
      "code": "<pre>\nline 1\n  line 2 (indented)\n</pre>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preformatted Text Blocks with <pre>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preformatted Text Blocks with <pre>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Preserve exact spacing and tabs -->\n",
    "solutionCode": "<pre>\nline 1\n  line 2 (indented)\n</pre>",
    "hints": [
      "Write:\n<pre>\nline 1\n  line 2 (indented)\n</pre>"
    ],
    "testCases": [
      {
        "id": "html-27-tc-1",
        "description": "Verifies correct implementation for Preformatted Text Blocks with <pre>",
        "testFn": "code.includes('<pre>') && code.includes('</pre>')"
      }
    ]
  },
  {
    "id": "html-28-keyboard-input-visualization-wit",
    "title": "28. Keyboard Input Visualization with <kbd>",
    "slug": "lesson-28-keyboard-input-visualization-wit",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Keyboard Input Visualization with <kbd> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Keyboard Input Visualization with <kbd>",
      "HTML5"
    ],
    "analogy": "A picture of a mechanical keyboard keycap.",
    "explanationMarkdown": "### Keyboard Input Visualization with <kbd>\n\nRepresents user keyboard input, frequently styled with CSS to look like physical keys.\n\n```html\n<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Keyboard Input Visualization with <kbd>",
      "code": "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Keyboard Input Visualization with <kbd>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Keyboard Input Visualization with <kbd>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Show shortcut key combination -->\n",
    "solutionCode": "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>",
    "hints": [
      "Write:\n<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>"
    ],
    "testCases": [
      {
        "id": "html-28-tc-1",
        "description": "Verifies correct implementation for Keyboard Input Visualization with <kbd>",
        "testFn": "code.includes('<kbd>')"
      }
    ]
  },
  {
    "id": "html-29-sample-computer-output-with-samp",
    "title": "29. Sample Computer Output with <samp>",
    "slug": "lesson-29-sample-computer-output-with-samp",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Sample Computer Output with <samp> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Sample Computer Output with <samp>",
      "HTML5"
    ],
    "analogy": "A printout from an old matrix printer showing raw output from a server.",
    "explanationMarkdown": "### Sample Computer Output with <samp>\n\nRepresents sample or quoted output from another computer program or computing system.\n\n```html\n<p>Server response: <samp>200 OK</samp></p>\n```",
    "workedExample": {
      "title": "Worked Example: Sample Computer Output with <samp>",
      "code": "<p>Server response: <samp>200 OK</samp></p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sample Computer Output with <samp>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sample Computer Output with <samp>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Show terminal response -->\n",
    "solutionCode": "<p>Server response: <samp>200 OK</samp></p>",
    "hints": [
      "Write:\n<p>Server response: <samp>200 OK</samp></p>"
    ],
    "testCases": [
      {
        "id": "html-29-tc-1",
        "description": "Verifies correct implementation for Sample Computer Output with <samp>",
        "testFn": "code.includes('<samp>')"
      }
    ]
  },
  {
    "id": "html-30-variables-in-math-&-code-with-va",
    "title": "30. Variables in Math & Code with <var>",
    "slug": "lesson-30-variables-in-math-&-code-with-va",
    "language": "html",
    "category": "Module 2: Text Semantics & Typography",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Variables in Math & Code with <var> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Variables in Math & Code with <var>",
      "HTML5"
    ],
    "analogy": "The slanted algebraic x and y variables in a math textbook.",
    "explanationMarkdown": "### Variables in Math & Code with <var>\n\nRepresents the name of a variable in a mathematical expression or programming context.\n\n```html\n<p>If <var>x</var> equals 10, then <var>y</var> is 20.</p>\n```",
    "workedExample": {
      "title": "Worked Example: Variables in Math & Code with <var>",
      "code": "<p>If <var>x</var> equals 10, then <var>y</var> is 20.</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variables in Math & Code with <var>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variables in Math & Code with <var>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Define variable in equation -->\n",
    "solutionCode": "<p>If <var>x</var> equals 10, then <var>y</var> is 20.</p>",
    "hints": [
      "Write:\n<p>If <var>x</var> equals 10, then <var>y</var> is 20.</p>"
    ],
    "testCases": [
      {
        "id": "html-30-tc-1",
        "description": "Verifies correct implementation for Variables in Math & Code with <var>",
        "testFn": "code.includes('<var>')"
      }
    ]
  },
  {
    "id": "html-31-hyperlinks-with-a-href=...",
    "title": "31. Hyperlinks with <a href='...'>",
    "slug": "lesson-31-hyperlinks-with-a-href=...",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Hyperlinks with <a href='...'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Hyperlinks with <a href='...'>",
      "HTML5"
    ],
    "analogy": "A teleportation portal bridging one document directly to another.",
    "explanationMarkdown": "### Hyperlinks with <a href='...'>\n\nThe anchor tag `<a>` with `href` attribute defines a hyperlink to external or local URLs.\n\n```html\n<a href=\"https://devforge.io\">Visit DevForge</a>\n```",
    "workedExample": {
      "title": "Worked Example: Hyperlinks with <a href='...'>",
      "code": "<a href=\"https://devforge.io\">Visit DevForge</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hyperlinks with <a href='...'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hyperlinks with <a href='...'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create link to homepage -->\n",
    "solutionCode": "<a href=\"https://devforge.io\">Visit DevForge</a>",
    "hints": [
      "Write:\n<a href=\"https://devforge.io\">Visit DevForge</a>"
    ],
    "testCases": [
      {
        "id": "html-31-tc-1",
        "description": "Verifies correct implementation for Hyperlinks with <a href='...'>",
        "testFn": "code.includes('<a') && code.includes('href=')"
      }
    ]
  },
  {
    "id": "html-32-absolute-vs-relative-urls",
    "title": "32. Absolute vs Relative URLs",
    "slug": "lesson-32-absolute-vs-relative-urls",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Absolute vs Relative URLs in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Absolute vs Relative URLs",
      "HTML5"
    ],
    "analogy": "Giving a full street address with country vs saying 'walk two doors down the hall'.",
    "explanationMarkdown": "### Absolute vs Relative URLs\n\nAbsolute URLs specify the full protocol and domain (https://...), while relative URLs resolve from the current site root.\n\n```html\n<a href=\"/pages/about.html\">About Us</a>\n```",
    "workedExample": {
      "title": "Worked Example: Absolute vs Relative URLs",
      "code": "<a href=\"/pages/about.html\">About Us</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Absolute vs Relative URLs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Absolute vs Relative URLs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add a relative link to about page -->\n",
    "solutionCode": "<a href=\"/pages/about.html\">About Us</a>",
    "hints": [
      "Write:\n<a href=\"/pages/about.html\">About Us</a>"
    ],
    "testCases": [
      {
        "id": "html-32-tc-1",
        "description": "Verifies correct implementation for Absolute vs Relative URLs",
        "testFn": "code.includes('href=\"/pages/about.html\"') || code.includes('href=\"./about.html\"')"
      }
    ]
  },
  {
    "id": "html-33-opening-in-new-tab-with-target=_",
    "title": "33. Opening in New Tab with target='_blank'",
    "slug": "lesson-33-opening-in-new-tab-with-target=_",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Opening in New Tab with target='_blank' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Opening in New Tab with target='_blank'",
      "HTML5"
    ],
    "analogy": "Opening a reference book on a side table while keeping your current book open on your desk.",
    "explanationMarkdown": "### Opening in New Tab with target='_blank'\n\nThe `target='_blank'` attribute opens the linked URL in a new browser tab or window.\n\n```html\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>\n```",
    "workedExample": {
      "title": "Worked Example: Opening in New Tab with target='_blank'",
      "code": "<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Opening in New Tab with target='_blank'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Opening in New Tab with target='_blank'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Open link in new browser tab -->\n",
    "solutionCode": "<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>",
    "hints": [
      "Write:\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>"
    ],
    "testCases": [
      {
        "id": "html-33-tc-1",
        "description": "Verifies correct implementation for Opening in New Tab with target='_blank'",
        "testFn": "code.includes('target=\"_blank\"')"
      }
    ]
  },
  {
    "id": "html-34-security-hardening-with-rel=noop",
    "title": "34. Security Hardening with rel='noopener noreferrer'",
    "slug": "lesson-34-security-hardening-with-rel=noop",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Security Hardening with rel='noopener noreferrer' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Security Hardening with rel='noopener noreferrer'",
      "HTML5"
    ],
    "analogy": "A security airlock preventing guest visitors from tampering with your host building controls.",
    "explanationMarkdown": "### Security Hardening with rel='noopener noreferrer'\n\nPrevents tab-napping phishing attacks by denying the new window access to `window.opener`.\n\n```html\n<a href=\"https://external.org\" target=\"_blank\" rel=\"noopener noreferrer\">Docs</a>\n```",
    "workedExample": {
      "title": "Worked Example: Security Hardening with rel='noopener noreferrer'",
      "code": "<a href=\"https://external.org\" target=\"_blank\" rel=\"noopener noreferrer\">Docs</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Security Hardening with rel='noopener noreferrer'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Security Hardening with rel='noopener noreferrer'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Secure new tab link -->\n",
    "solutionCode": "<a href=\"https://external.org\" target=\"_blank\" rel=\"noopener noreferrer\">Docs</a>",
    "hints": [
      "Write:\n<a href=\"https://external.org\" target=\"_blank\" rel=\"noopener noreferrer\">Docs</a>"
    ],
    "testCases": [
      {
        "id": "html-34-tc-1",
        "description": "Verifies correct implementation for Security Hardening with rel='noopener noreferrer'",
        "testFn": "code.includes('noopener') && code.includes('noreferrer')"
      }
    ]
  },
  {
    "id": "html-35-email-links-with-mailto",
    "title": "35. Email Links with mailto:",
    "slug": "lesson-35-email-links-with-mailto",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Email Links with mailto: in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Email Links with mailto",
      "HTML5"
    ],
    "analogy": "Dropping a pre-addressed letter directly into the user's desktop email client.",
    "explanationMarkdown": "### Email Links with mailto:\n\nClicking a `mailto:` link launches the user's default email client with the specified recipient address.\n\n```html\n<a href=\"mailto:support@devforge.io\">Contact Support</a>\n```",
    "workedExample": {
      "title": "Worked Example: Email Links with mailto:",
      "code": "<a href=\"mailto:support@devforge.io\">Contact Support</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Email Links with mailto:.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Email Links with mailto:.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create email link -->\n",
    "solutionCode": "<a href=\"mailto:support@devforge.io\">Contact Support</a>",
    "hints": [
      "Write:\n<a href=\"mailto:support@devforge.io\">Contact Support</a>"
    ],
    "testCases": [
      {
        "id": "html-35-tc-1",
        "description": "Verifies correct implementation for Email Links with mailto:",
        "testFn": "code.includes('mailto:')"
      }
    ]
  },
  {
    "id": "html-36-telephone-links-with-tel",
    "title": "36. Telephone Links with tel:",
    "slug": "lesson-36-telephone-links-with-tel",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Telephone Links with tel: in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Telephone Links with tel",
      "HTML5"
    ],
    "analogy": "Auto-dialing a phone number on a smartphone with a single finger tap.",
    "explanationMarkdown": "### Telephone Links with tel:\n\nLaunches native phone dialers on mobile devices with the designated telephone digits.\n\n```html\n<a href=\"tel:+15551234567\">Call Us Now</a>\n```",
    "workedExample": {
      "title": "Worked Example: Telephone Links with tel:",
      "code": "<a href=\"tel:+15551234567\">Call Us Now</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Telephone Links with tel:.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Telephone Links with tel:.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create phone dial link -->\n",
    "solutionCode": "<a href=\"tel:+15551234567\">Call Us Now</a>",
    "hints": [
      "Write:\n<a href=\"tel:+15551234567\">Call Us Now</a>"
    ],
    "testCases": [
      {
        "id": "html-36-tc-1",
        "description": "Verifies correct implementation for Telephone Links with tel:",
        "testFn": "code.includes('tel:')"
      }
    ]
  },
  {
    "id": "html-37-fragment-anchor-navigation-#id",
    "title": "37. Fragment Anchor Navigation (#id)",
    "slug": "lesson-37-fragment-anchor-navigation-#id",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Fragment Anchor Navigation (#id) in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Fragment Anchor Navigation (#id)",
      "HTML5"
    ],
    "analogy": "A bookmark ribbon jumping immediately to page 240 of a physical book.",
    "explanationMarkdown": "### Fragment Anchor Navigation (#id)\n\nLinks with `#id` smoothly jump the user's viewport directly to any element having that matching `id` attribute.\n\n```html\n<a href=\"#faq-pricing\">Jump to Pricing FAQ</a>\n\n<section id=\"faq-pricing\">...</section>\n```",
    "workedExample": {
      "title": "Worked Example: Fragment Anchor Navigation (#id)",
      "code": "<a href=\"#faq-pricing\">Jump to Pricing FAQ</a>\n\n<section id=\"faq-pricing\">...</section>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fragment Anchor Navigation (#id).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fragment Anchor Navigation (#id).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Link to a section lower on the page -->\n",
    "solutionCode": "<a href=\"#faq-pricing\">Jump to Pricing FAQ</a>\n\n<section id=\"faq-pricing\">...</section>",
    "hints": [
      "Write:\n<a href=\"#faq-pricing\">Jump to Pricing FAQ</a>\n\n<section id=\"faq-pricing\">...</section>"
    ],
    "testCases": [
      {
        "id": "html-37-tc-1",
        "description": "Verifies correct implementation for Fragment Anchor Navigation (#id)",
        "testFn": "code.includes('href=\"#') && code.includes('id=\"')"
      }
    ]
  },
  {
    "id": "html-38-file-download-trigger-with-downl",
    "title": "38. File Download Trigger with download Attribute",
    "slug": "lesson-38-file-download-trigger-with-downl",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master File Download Trigger with download Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "File Download Trigger with download Attribute",
      "HTML5"
    ],
    "analogy": "A vending machine dispenser delivering a file directly to the user's download folder.",
    "explanationMarkdown": "### File Download Trigger with download Attribute\n\nForces the browser to download the linked target rather than navigating to or previewing it.\n\n```html\n<a href=\"/assets/guide.pdf\" download=\"DevForge-Guide.pdf\">Download PDF</a>\n```",
    "workedExample": {
      "title": "Worked Example: File Download Trigger with download Attribute",
      "code": "<a href=\"/assets/guide.pdf\" download=\"DevForge-Guide.pdf\">Download PDF</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for File Download Trigger with download Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of File Download Trigger with download Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add download link for brochure -->\n",
    "solutionCode": "<a href=\"/assets/guide.pdf\" download=\"DevForge-Guide.pdf\">Download PDF</a>",
    "hints": [
      "Write:\n<a href=\"/assets/guide.pdf\" download=\"DevForge-Guide.pdf\">Download PDF</a>"
    ],
    "testCases": [
      {
        "id": "html-38-tc-1",
        "description": "Verifies correct implementation for File Download Trigger with download Attribute",
        "testFn": "code.includes('download')"
      }
    ]
  },
  {
    "id": "html-39-external-stylesheet-linking-with",
    "title": "39. External Stylesheet Linking with <link rel='stylesheet'>",
    "slug": "lesson-39-external-stylesheet-linking-with",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master External Stylesheet Linking with <link rel='stylesheet'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "External Stylesheet Linking with <link rel='stylesheet'>",
      "HTML5"
    ],
    "analogy": "Connecting a theme blueprint that dictates the visual colors and layout of the building.",
    "explanationMarkdown": "### External Stylesheet Linking with <link rel='stylesheet'>\n\nImports external CSS stylesheets into the HTML document inside the `<head>` tag.\n\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```",
    "workedExample": {
      "title": "Worked Example: External Stylesheet Linking with <link rel='stylesheet'>",
      "code": "<link rel=\"stylesheet\" href=\"styles.css\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for External Stylesheet Linking with <link rel='stylesheet'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of External Stylesheet Linking with <link rel='stylesheet'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Link external styles.css -->\n",
    "solutionCode": "<link rel=\"stylesheet\" href=\"styles.css\">",
    "hints": [
      "Write:\n<link rel=\"stylesheet\" href=\"styles.css\">"
    ],
    "testCases": [
      {
        "id": "html-39-tc-1",
        "description": "Verifies correct implementation for External Stylesheet Linking with <link rel='stylesheet'>",
        "testFn": "code.includes('rel=\"stylesheet\"')"
      }
    ]
  },
  {
    "id": "html-40-adding-a-site-favicon-with-link-",
    "title": "40. Adding a Site Favicon with <link rel='icon'>",
    "slug": "lesson-40-adding-a-site-favicon-with-link-",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Adding a Site Favicon with <link rel='icon'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Adding a Site Favicon with <link rel='icon'>",
      "HTML5"
    ],
    "analogy": "A wax seal crest stamped onto the exterior tab of an envelope.",
    "explanationMarkdown": "### Adding a Site Favicon with <link rel='icon'>\n\nDisplays an icon in the browser tab and bookmarks beside the page title.\n\n```html\n<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n```",
    "workedExample": {
      "title": "Worked Example: Adding a Site Favicon with <link rel='icon'>",
      "code": "<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adding a Site Favicon with <link rel='icon'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adding a Site Favicon with <link rel='icon'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add website favicon -->\n",
    "solutionCode": "<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">",
    "hints": [
      "Write:\n<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">"
    ],
    "testCases": [
      {
        "id": "html-40-tc-1",
        "description": "Verifies correct implementation for Adding a Site Favicon with <link rel='icon'>",
        "testFn": "code.includes('rel=\"icon\"')"
      }
    ]
  },
  {
    "id": "html-41-semantic-navigation-with-nav",
    "title": "41. Semantic Navigation with <nav>",
    "slug": "lesson-41-semantic-navigation-with-nav",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Semantic Navigation with <nav> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Semantic Navigation with <nav>",
      "HTML5"
    ],
    "analogy": "The master highway directory signs guiding drivers to major cities.",
    "explanationMarkdown": "### Semantic Navigation with <nav>\n\nRepresents a section of a page whose purpose is to provide navigation links across the site.\n\n```html\n<nav aria-label=\"Main navigation\">\n  <a href=\"/\">Home</a>\n  <a href=\"/courses\">Courses</a>\n</nav>\n```",
    "workedExample": {
      "title": "Worked Example: Semantic Navigation with <nav>",
      "code": "<nav aria-label=\"Main navigation\">\n  <a href=\"/\">Home</a>\n  <a href=\"/courses\">Courses</a>\n</nav>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Semantic Navigation with <nav>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Semantic Navigation with <nav>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Build accessible navbar -->\n",
    "solutionCode": "<nav aria-label=\"Main navigation\">\n  <a href=\"/\">Home</a>\n  <a href=\"/courses\">Courses</a>\n</nav>",
    "hints": [
      "Write:\n<nav aria-label=\"Main navigation\">\n  <a href=\"/\">Home</a>\n  <a href=\"/courses\">Courses</a>\n</nav>"
    ],
    "testCases": [
      {
        "id": "html-41-tc-1",
        "description": "Verifies correct implementation for Semantic Navigation with <nav>",
        "testFn": "code.includes('<nav') && code.includes('</nav>')"
      }
    ]
  },
  {
    "id": "html-42-breadcrumb-navigation-pattern",
    "title": "42. Breadcrumb Navigation Pattern",
    "slug": "lesson-42-breadcrumb-navigation-pattern",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Breadcrumb Navigation Pattern in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Breadcrumb Navigation Pattern",
      "HTML5"
    ],
    "analogy": "Hansel and Gretel's breadcrumb trail showing the path back to the forest entrance.",
    "explanationMarkdown": "### Breadcrumb Navigation Pattern\n\nHelps users understand their current location within the hierarchical depth of a website.\n\n```html\n<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/docs\">Docs</a></li>\n    <li>Installation</li>\n  </ol>\n</nav>\n```",
    "workedExample": {
      "title": "Worked Example: Breadcrumb Navigation Pattern",
      "code": "<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/docs\">Docs</a></li>\n    <li>Installation</li>\n  </ol>\n</nav>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Breadcrumb Navigation Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Breadcrumb Navigation Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create breadcrumb list -->\n",
    "solutionCode": "<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/docs\">Docs</a></li>\n    <li>Installation</li>\n  </ol>\n</nav>",
    "hints": [
      "Write:\n<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/docs\">Docs</a></li>\n    <li>Installation</li>\n  </ol>\n</nav>"
    ],
    "testCases": [
      {
        "id": "html-42-tc-1",
        "description": "Verifies correct implementation for Breadcrumb Navigation Pattern",
        "testFn": "code.includes('Breadcrumb') || code.includes('breadcrumb')"
      }
    ]
  },
  {
    "id": "html-43-base-url-setting-with-base",
    "title": "43. Base URL Setting with <base>",
    "slug": "lesson-43-base-url-setting-with-base",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Base URL Setting with <base> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Base URL Setting with <base>",
      "HTML5"
    ],
    "analogy": "Setting a default country code on a phone so all local numbers resolve automatically.",
    "explanationMarkdown": "### Base URL Setting with <base>\n\nSpecifies the base URL and target for all relative URLs in an entire document.\n\n```html\n<head>\n  <base href=\"https://cdn.devforge.io/assets/\">\n</head>\n```",
    "workedExample": {
      "title": "Worked Example: Base URL Setting with <base>",
      "code": "<head>\n  <base href=\"https://cdn.devforge.io/assets/\">\n</head>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Base URL Setting with <base>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Base URL Setting with <base>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Set default base URL for relative links -->\n",
    "solutionCode": "<head>\n  <base href=\"https://cdn.devforge.io/assets/\">\n</head>",
    "hints": [
      "Write:\n<head>\n  <base href=\"https://cdn.devforge.io/assets/\">\n</head>"
    ],
    "testCases": [
      {
        "id": "html-43-tc-1",
        "description": "Verifies correct implementation for Base URL Setting with <base>",
        "testFn": "code.includes('<base') && code.includes('href=')"
      }
    ]
  },
  {
    "id": "html-44-preconnecting-&-prefetching-with",
    "title": "44. Preconnecting & Prefetching with <link rel='preconnect'>",
    "slug": "lesson-44-preconnecting-&-prefetching-with",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Preconnecting & Prefetching with <link rel='preconnect'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Preconnecting & Prefetching with <link rel='preconnect'>",
      "HTML5"
    ],
    "analogy": "Warming up the car engine before departure to save transit time.",
    "explanationMarkdown": "### Preconnecting & Prefetching with <link rel='preconnect'>\n\nInforms the browser to establish early DNS, TLS, and TCP handshakes to speed up subsequent requests.\n\n```html\n<link rel=\"preconnect\" href=\"https://api.devforge.io\">\n```",
    "workedExample": {
      "title": "Worked Example: Preconnecting & Prefetching with <link rel='preconnect'>",
      "code": "<link rel=\"preconnect\" href=\"https://api.devforge.io\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preconnecting & Prefetching with <link rel='preconnect'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preconnecting & Prefetching with <link rel='preconnect'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Preconnect to API domain -->\n",
    "solutionCode": "<link rel=\"preconnect\" href=\"https://api.devforge.io\">",
    "hints": [
      "Write:\n<link rel=\"preconnect\" href=\"https://api.devforge.io\">"
    ],
    "testCases": [
      {
        "id": "html-44-tc-1",
        "description": "Verifies correct implementation for Preconnecting & Prefetching with <link rel='preconnect'>",
        "testFn": "code.includes('rel=\"preconnect\"')"
      }
    ]
  },
  {
    "id": "html-45-canonical-urls-with-link-rel=can",
    "title": "45. Canonical URLs with <link rel='canonical'>",
    "slug": "lesson-45-canonical-urls-with-link-rel=can",
    "language": "html",
    "category": "Module 3: Links, Navigation & Anchors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Canonical URLs with <link rel='canonical'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Canonical URLs with <link rel='canonical'>",
      "HTML5"
    ],
    "analogy": "Pointing to the authoritative original edition of a published manuscript.",
    "explanationMarkdown": "### Canonical URLs with <link rel='canonical'>\n\nTells search engines the authoritative original URL of a page to consolidate SEO ranking duplicate credit.\n\n```html\n<link rel=\"canonical\" href=\"https://devforge.io/courses/javascript\">\n```",
    "workedExample": {
      "title": "Worked Example: Canonical URLs with <link rel='canonical'>",
      "code": "<link rel=\"canonical\" href=\"https://devforge.io/courses/javascript\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Canonical URLs with <link rel='canonical'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Canonical URLs with <link rel='canonical'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Declare primary canonical URL -->\n",
    "solutionCode": "<link rel=\"canonical\" href=\"https://devforge.io/courses/javascript\">",
    "hints": [
      "Write:\n<link rel=\"canonical\" href=\"https://devforge.io/courses/javascript\">"
    ],
    "testCases": [
      {
        "id": "html-45-tc-1",
        "description": "Verifies correct implementation for Canonical URLs with <link rel='canonical'>",
        "testFn": "code.includes('rel=\"canonical\"')"
      }
    ]
  },
  {
    "id": "html-46-unordered-bullet-lists-with-ul-a",
    "title": "46. Unordered Bullet Lists with <ul> and <li>",
    "slug": "lesson-46-unordered-bullet-lists-with-ul-a",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Unordered Bullet Lists with <ul> and <li> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Unordered Bullet Lists with <ul> and <li>",
      "HTML5"
    ],
    "analogy": "A bulleted checklist on a shopping notepad.",
    "explanationMarkdown": "### Unordered Bullet Lists with <ul> and <li>\n\nRenders a list of items where order does not materially affect the meaning, bulleted by default.\n\n```html\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>\n```",
    "workedExample": {
      "title": "Worked Example: Unordered Bullet Lists with <ul> and <li>",
      "code": "<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unordered Bullet Lists with <ul> and <li>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unordered Bullet Lists with <ul> and <li>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create grocery list -->\n",
    "solutionCode": "<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>",
    "hints": [
      "Write:\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>"
    ],
    "testCases": [
      {
        "id": "html-46-tc-1",
        "description": "Verifies correct implementation for Unordered Bullet Lists with <ul> and <li>",
        "testFn": "code.includes('<ul>') && code.includes('<li>')"
      }
    ]
  },
  {
    "id": "html-47-ordered-numbered-lists-with-ol-a",
    "title": "47. Ordered Numbered Lists with <ol> and <li>",
    "slug": "lesson-47-ordered-numbered-lists-with-ol-a",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Ordered Numbered Lists with <ol> and <li> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Ordered Numbered Lists with <ol> and <li>",
      "HTML5"
    ],
    "analogy": "A numbered recipe where order strictly determines cooking success.",
    "explanationMarkdown": "### Ordered Numbered Lists with <ol> and <li>\n\nRenders an ordered sequence of items with automatic numeric numbering.\n\n```html\n<ol>\n  <li>Preheat oven</li>\n  <li>Mix flour</li>\n</ol>\n```",
    "workedExample": {
      "title": "Worked Example: Ordered Numbered Lists with <ol> and <li>",
      "code": "<ol>\n  <li>Preheat oven</li>\n  <li>Mix flour</li>\n</ol>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ordered Numbered Lists with <ol> and <li>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ordered Numbered Lists with <ol> and <li>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create step-by-step recipe -->\n",
    "solutionCode": "<ol>\n  <li>Preheat oven</li>\n  <li>Mix flour</li>\n</ol>",
    "hints": [
      "Write:\n<ol>\n  <li>Preheat oven</li>\n  <li>Mix flour</li>\n</ol>"
    ],
    "testCases": [
      {
        "id": "html-47-tc-1",
        "description": "Verifies correct implementation for Ordered Numbered Lists with <ol> and <li>",
        "testFn": "code.includes('<ol>') && code.includes('<li>')"
      }
    ]
  },
  {
    "id": "html-48-reversing-and-offsetting-ordered",
    "title": "48. Reversing and Offsetting Ordered Lists",
    "slug": "lesson-48-reversing-and-offsetting-ordered",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Reversing and Offsetting Ordered Lists in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Reversing and Offsetting Ordered Lists",
      "HTML5"
    ],
    "analogy": "A rocket launch countdown timer counting down from 3 to 1.",
    "explanationMarkdown": "### Reversing and Offsetting Ordered Lists\n\nThe `reversed` attribute numbers items in descending order, while `start` sets the initial integer.\n\n```html\n<ol reversed start=\"3\">\n  <li>Ignition</li>\n  <li>Throttle</li>\n  <li>Liftoff</li>\n</ol>\n```",
    "workedExample": {
      "title": "Worked Example: Reversing and Offsetting Ordered Lists",
      "code": "<ol reversed start=\"3\">\n  <li>Ignition</li>\n  <li>Throttle</li>\n  <li>Liftoff</li>\n</ol>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reversing and Offsetting Ordered Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reversing and Offsetting Ordered Lists.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Reverse countdown list -->\n",
    "solutionCode": "<ol reversed start=\"3\">\n  <li>Ignition</li>\n  <li>Throttle</li>\n  <li>Liftoff</li>\n</ol>",
    "hints": [
      "Write:\n<ol reversed start=\"3\">\n  <li>Ignition</li>\n  <li>Throttle</li>\n  <li>Liftoff</li>\n</ol>"
    ],
    "testCases": [
      {
        "id": "html-48-tc-1",
        "description": "Verifies correct implementation for Reversing and Offsetting Ordered Lists",
        "testFn": "code.includes('reversed') || code.includes('start=')"
      }
    ]
  },
  {
    "id": "html-49-nested-multi-level-lists",
    "title": "49. Nested Multi-Level Lists",
    "slug": "lesson-49-nested-multi-level-lists",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Nested Multi-Level Lists in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Nested Multi-Level Lists",
      "HTML5"
    ],
    "analogy": "An outline tree with main chapters and nested bullet sub-points.",
    "explanationMarkdown": "### Nested Multi-Level Lists\n\nNesting an entire `<ul>` or `<ol>` inside an `<li>` creates hierarchical sub-lists.\n\n```html\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>\n```",
    "workedExample": {
      "title": "Worked Example: Nested Multi-Level Lists",
      "code": "<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Nested Multi-Level Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Nested Multi-Level Lists.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create nested subtopics -->\n",
    "solutionCode": "<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>",
    "hints": [
      "Write:\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>"
    ],
    "testCases": [
      {
        "id": "html-49-tc-1",
        "description": "Verifies correct implementation for Nested Multi-Level Lists",
        "testFn": "code.includes('<ul>') && code.count('<ul>') >= 2"
      }
    ]
  },
  {
    "id": "html-50-description-lists-with-dl,-dt,-a",
    "title": "50. Description Lists with <dl>, <dt>, and <dd>",
    "slug": "lesson-50-description-lists-with-dl,-dt,-a",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Description Lists with <dl>, <dt>, and <dd> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Description Lists with <dl>, <dt>, and <dd>",
      "HTML5"
    ],
    "analogy": "A dictionary mapping terms to their exact descriptive definitions.",
    "explanationMarkdown": "### Description Lists with <dl>, <dt>, and <dd>\n\nEncloses a list of groups of terms (`<dt>`) and descriptions or definitions (`<dd>`).\n\n```html\n<dl>\n  <dt>DNS</dt>\n  <dd>Domain Name System translates domain names into IP addresses.</dd>\n</dl>\n```",
    "workedExample": {
      "title": "Worked Example: Description Lists with <dl>, <dt>, and <dd>",
      "code": "<dl>\n  <dt>DNS</dt>\n  <dd>Domain Name System translates domain names into IP addresses.</dd>\n</dl>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Description Lists with <dl>, <dt>, and <dd>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Description Lists with <dl>, <dt>, and <dd>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Build technical glossary -->\n",
    "solutionCode": "<dl>\n  <dt>DNS</dt>\n  <dd>Domain Name System translates domain names into IP addresses.</dd>\n</dl>",
    "hints": [
      "Write:\n<dl>\n  <dt>DNS</dt>\n  <dd>Domain Name System translates domain names into IP addresses.</dd>\n</dl>"
    ],
    "testCases": [
      {
        "id": "html-50-tc-1",
        "description": "Verifies correct implementation for Description Lists with <dl>, <dt>, and <dd>",
        "testFn": "code.includes('<dl>') && code.includes('<dt>') && code.includes('<dd>')"
      }
    ]
  },
  {
    "id": "html-51-multiple-terms-and-descriptions-",
    "title": "51. Multiple Terms and Descriptions in <dl>",
    "slug": "lesson-51-multiple-terms-and-descriptions-",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Multiple Terms and Descriptions in <dl> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Multiple Terms and Descriptions in <dl>",
      "HTML5"
    ],
    "analogy": "Synonyms in a thesaurus pointing to the same core definition.",
    "explanationMarkdown": "### Multiple Terms and Descriptions in <dl>\n\nA single `<dd>` description can correspond to multiple `<dt>` terms, or one term can have multiple definitions.\n\n```html\n<dl>\n  <dt>Color</dt>\n  <dt>Colour</dt>\n  <dd>Visual perceptual property of light.</dd>\n</dl>\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Terms and Descriptions in <dl>",
      "code": "<dl>\n  <dt>Color</dt>\n  <dt>Colour</dt>\n  <dd>Visual perceptual property of light.</dd>\n</dl>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Terms and Descriptions in <dl>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Terms and Descriptions in <dl>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Multiple terms sharing one definition -->\n",
    "solutionCode": "<dl>\n  <dt>Color</dt>\n  <dt>Colour</dt>\n  <dd>Visual perceptual property of light.</dd>\n</dl>",
    "hints": [
      "Write:\n<dl>\n  <dt>Color</dt>\n  <dt>Colour</dt>\n  <dd>Visual perceptual property of light.</dd>\n</dl>"
    ],
    "testCases": [
      {
        "id": "html-51-tc-1",
        "description": "Verifies correct implementation for Multiple Terms and Descriptions in <dl>",
        "testFn": "code.includes('<dt>') && code.count('<dt>') >= 2"
      }
    ]
  },
  {
    "id": "html-52-image-figures-with-figure-and-fi",
    "title": "52. Image Figures with <figure> and <figcaption>",
    "slug": "lesson-52-image-figures-with-figure-and-fi",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Image Figures with <figure> and <figcaption> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Image Figures with <figure> and <figcaption>",
      "HTML5"
    ],
    "analogy": "A framed photo in a textbook accompanied by an italic caption label underneath.",
    "explanationMarkdown": "### Image Figures with <figure> and <figcaption>\n\nEncapsulates self-contained media content along with an optional explanatory caption.\n\n```html\n<figure>\n  <img src=\"chart.png\" alt=\"Quarterly revenue growth\">\n  <figcaption>Figure 1.1: 2026 Developer Growth Metrics</figcaption>\n</figure>\n```",
    "workedExample": {
      "title": "Worked Example: Image Figures with <figure> and <figcaption>",
      "code": "<figure>\n  <img src=\"chart.png\" alt=\"Quarterly revenue growth\">\n  <figcaption>Figure 1.1: 2026 Developer Growth Metrics</figcaption>\n</figure>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Image Figures with <figure> and <figcaption>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Image Figures with <figure> and <figcaption>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Wrap graphic with caption -->\n",
    "solutionCode": "<figure>\n  <img src=\"chart.png\" alt=\"Quarterly revenue growth\">\n  <figcaption>Figure 1.1: 2026 Developer Growth Metrics</figcaption>\n</figure>",
    "hints": [
      "Write:\n<figure>\n  <img src=\"chart.png\" alt=\"Quarterly revenue growth\">\n  <figcaption>Figure 1.1: 2026 Developer Growth Metrics</figcaption>\n</figure>"
    ],
    "testCases": [
      {
        "id": "html-52-tc-1",
        "description": "Verifies correct implementation for Image Figures with <figure> and <figcaption>",
        "testFn": "code.includes('<figure>') && code.includes('<figcaption>')"
      }
    ]
  },
  {
    "id": "html-53-contact-information-with-address",
    "title": "53. Contact Information with <address>",
    "slug": "lesson-53-contact-information-with-address",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Contact Information with <address> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Contact Information with <address>",
      "HTML5"
    ],
    "analogy": "The business card or footer contact box on a printed letter.",
    "explanationMarkdown": "### Contact Information with <address>\n\nSupplies contact information for the author or owner of a document or article.\n\n```html\n<address>\n  Written by Sarah Connor<br>\n  Email: <a href=\"mailto:sarah@devforge.io\">sarah@devforge.io</a>\n</address>\n```",
    "workedExample": {
      "title": "Worked Example: Contact Information with <address>",
      "code": "<address>\n  Written by Sarah Connor<br>\n  Email: <a href=\"mailto:sarah@devforge.io\">sarah@devforge.io</a>\n</address>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Contact Information with <address>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Contact Information with <address>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Display author contact -->\n",
    "solutionCode": "<address>\n  Written by Sarah Connor<br>\n  Email: <a href=\"mailto:sarah@devforge.io\">sarah@devforge.io</a>\n</address>",
    "hints": [
      "Write:\n<address>\n  Written by Sarah Connor<br>\n  Email: <a href=\"mailto:sarah@devforge.io\">sarah@devforge.io</a>\n</address>"
    ],
    "testCases": [
      {
        "id": "html-53-tc-1",
        "description": "Verifies correct implementation for Contact Information with <address>",
        "testFn": "code.includes('<address>')"
      }
    ]
  },
  {
    "id": "html-54-the-main-landmark-element",
    "title": "54. The <main> Landmark Element",
    "slug": "lesson-54-the-main-landmark-element",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master The <main> Landmark Element in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <main> Landmark Element",
      "HTML5"
    ],
    "analogy": "The central auditorium stage, excluding side lobbies and fire exits.",
    "explanationMarkdown": "### The <main> Landmark Element\n\nRepresents the dominant, central content unique to this specific page document.\n\n```html\n<main id=\"main-content\">\n  <h1>Dashboard Overview</h1>\n</main>\n```",
    "workedExample": {
      "title": "Worked Example: The <main> Landmark Element",
      "code": "<main id=\"main-content\">\n  <h1>Dashboard Overview</h1>\n</main>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <main> Landmark Element.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <main> Landmark Element.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Designate primary content -->\n",
    "solutionCode": "<main id=\"main-content\">\n  <h1>Dashboard Overview</h1>\n</main>",
    "hints": [
      "Write:\n<main id=\"main-content\">\n  <h1>Dashboard Overview</h1>\n</main>"
    ],
    "testCases": [
      {
        "id": "html-54-tc-1",
        "description": "Verifies correct implementation for The <main> Landmark Element",
        "testFn": "code.includes('<main') && code.includes('</main>')"
      }
    ]
  },
  {
    "id": "html-55-thematic-grouping-with-section",
    "title": "55. Thematic Grouping with <section>",
    "slug": "lesson-55-thematic-grouping-with-section",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Thematic Grouping with <section> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Thematic Grouping with <section>",
      "HTML5"
    ],
    "analogy": "A dedicated chapter in a book containing its own heading and paragraphs.",
    "explanationMarkdown": "### Thematic Grouping with <section>\n\nRepresents a standalone section of functionality or thematic content, usually with its own heading.\n\n```html\n<section>\n  <h2>Features</h2>\n  <p>Lightning fast.</p>\n</section>\n```",
    "workedExample": {
      "title": "Worked Example: Thematic Grouping with <section>",
      "code": "<section>\n  <h2>Features</h2>\n  <p>Lightning fast.</p>\n</section>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Thematic Grouping with <section>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Thematic Grouping with <section>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create two thematic sections -->\n",
    "solutionCode": "<section>\n  <h2>Features</h2>\n  <p>Lightning fast.</p>\n</section>",
    "hints": [
      "Write:\n<section>\n  <h2>Features</h2>\n  <p>Lightning fast.</p>\n</section>"
    ],
    "testCases": [
      {
        "id": "html-55-tc-1",
        "description": "Verifies correct implementation for Thematic Grouping with <section>",
        "testFn": "code.includes('<section>') && code.includes('</section>')"
      }
    ]
  },
  {
    "id": "html-56-independent-syndicated-content-w",
    "title": "56. Independent Syndicated Content with <article>",
    "slug": "lesson-56-independent-syndicated-content-w",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Independent Syndicated Content with <article> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Independent Syndicated Content with <article>",
      "HTML5"
    ],
    "analogy": "A magazine article that could be cut out and syndicated into another publication and still make complete sense.",
    "explanationMarkdown": "### Independent Syndicated Content with <article>\n\nRepresents a self-contained composition intended to be independently distributable or reusable.\n\n```html\n<article>\n  <h2>Building Fast APIs</h2>\n  <p>Learn caching strategies...</p>\n</article>\n```",
    "workedExample": {
      "title": "Worked Example: Independent Syndicated Content with <article>",
      "code": "<article>\n  <h2>Building Fast APIs</h2>\n  <p>Learn caching strategies...</p>\n</article>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Independent Syndicated Content with <article>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Independent Syndicated Content with <article>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create reusable blog post card -->\n",
    "solutionCode": "<article>\n  <h2>Building Fast APIs</h2>\n  <p>Learn caching strategies...</p>\n</article>",
    "hints": [
      "Write:\n<article>\n  <h2>Building Fast APIs</h2>\n  <p>Learn caching strategies...</p>\n</article>"
    ],
    "testCases": [
      {
        "id": "html-56-tc-1",
        "description": "Verifies correct implementation for Independent Syndicated Content with <article>",
        "testFn": "code.includes('<article>') && code.includes('</article>')"
      }
    ]
  },
  {
    "id": "html-57-sidebar-content-with-aside",
    "title": "57. Sidebar Content with <aside>",
    "slug": "lesson-57-sidebar-content-with-aside",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Sidebar Content with <aside> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Sidebar Content with <aside>",
      "HTML5"
    ],
    "analogy": "A side-bar callout box in a magazine offering tangential trivia.",
    "explanationMarkdown": "### Sidebar Content with <aside>\n\nRepresents content tangentially related to the content around it, like sidebars, pull quotes, or ads.\n\n```html\n<aside>\n  <h3>Related Articles</h3>\n  <ul><li>Next steps</li></ul>\n</aside>\n```",
    "workedExample": {
      "title": "Worked Example: Sidebar Content with <aside>",
      "code": "<aside>\n  <h3>Related Articles</h3>\n  <ul><li>Next steps</li></ul>\n</aside>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sidebar Content with <aside>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sidebar Content with <aside>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create related links sidebar -->\n",
    "solutionCode": "<aside>\n  <h3>Related Articles</h3>\n  <ul><li>Next steps</li></ul>\n</aside>",
    "hints": [
      "Write:\n<aside>\n  <h3>Related Articles</h3>\n  <ul><li>Next steps</li></ul>\n</aside>"
    ],
    "testCases": [
      {
        "id": "html-57-tc-1",
        "description": "Verifies correct implementation for Sidebar Content with <aside>",
        "testFn": "code.includes('<aside>') && code.includes('</aside>')"
      }
    ]
  },
  {
    "id": "html-58-site-footers-with-footer",
    "title": "58. Site Footers with <footer>",
    "slug": "lesson-58-site-footers-with-footer",
    "language": "html",
    "category": "Module 4: Lists & Structured Content",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Master Site Footers with <footer> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Site Footers with <footer>",
      "HTML5"
    ],
    "analogy": "The bottom margin of a published document containing legal copyright and page numbers.",
    "explanationMarkdown": "### Site Footers with <footer>\n\nRepresents a footer for its nearest sectioning content or page root.\n\n```html\n<footer>\n  <p>\u00a9 2026 DevForge Inc.</p>\n</footer>\n```",
    "workedExample": {
      "title": "Worked Example: Site Footers with <footer>",
      "code": "<footer>\n  <p>\u00a9 2026 DevForge Inc.</p>\n</footer>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Site Footers with <footer>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Site Footers with <footer>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Build standard footer -->\n",
    "solutionCode": "<footer>\n  <p>\u00a9 2026 DevForge Inc.</p>\n</footer>",
    "hints": [
      "Write:\n<footer>\n  <p>\u00a9 2026 DevForge Inc.</p>\n</footer>"
    ],
    "testCases": [
      {
        "id": "html-58-tc-1",
        "description": "Verifies correct implementation for Site Footers with <footer>",
        "testFn": "code.includes('<footer>') && code.includes('</footer>')"
      }
    ]
  },
  {
    "id": "html-59-images-with-img-and-mandatory-al",
    "title": "59. Images with <img> and Mandatory alt Attribute",
    "slug": "lesson-59-images-with-img-and-mandatory-al",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Images with <img> and Mandatory alt Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Images with <img> and Mandatory alt Attribute",
      "HTML5"
    ],
    "analogy": "A framed photograph on a wall accompanied by a Braille plaque for visually impaired visitors.",
    "explanationMarkdown": "### Images with <img> and Mandatory alt Attribute\n\nThe `alt` attribute provides accessible descriptions for screen readers and displays fallback text if images fail to load.\n\n```html\n<img src=\"/images/logo.png\" alt=\"DevForge company logo\" width=\"200\" height=\"50\">\n```",
    "workedExample": {
      "title": "Worked Example: Images with <img> and Mandatory alt Attribute",
      "code": "<img src=\"/images/logo.png\" alt=\"DevForge company logo\" width=\"200\" height=\"50\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Images with <img> and Mandatory alt Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Images with <img> and Mandatory alt Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Insert accessible image -->\n",
    "solutionCode": "<img src=\"/images/logo.png\" alt=\"DevForge company logo\" width=\"200\" height=\"50\">",
    "hints": [
      "Write:\n<img src=\"/images/logo.png\" alt=\"DevForge company logo\" width=\"200\" height=\"50\">"
    ],
    "testCases": [
      {
        "id": "html-59-tc-1",
        "description": "Verifies correct implementation for Images with <img> and Mandatory alt Attribute",
        "testFn": "code.includes('<img') && code.includes('alt=')"
      }
    ]
  },
  {
    "id": "html-60-responsive-images-with-srcset-an",
    "title": "60. Responsive Images with srcset and sizes",
    "slug": "lesson-60-responsive-images-with-srcset-an",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Responsive Images with srcset and sizes in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Responsive Images with srcset and sizes",
      "HTML5"
    ],
    "analogy": "A tailor choosing small, medium, or large garments depending on the customer's exact measurements.",
    "explanationMarkdown": "### Responsive Images with srcset and sizes\n\nAllows the browser to intelligently download the smallest suitable image resolution based on the user's viewport width.\n\n```html\n<img src=\"small.jpg\" srcset=\"small.jpg 400w, large.jpg 800w\" sizes=\"(max-width: 600px) 400px, 800px\" alt=\"Hero landscape\">\n```",
    "workedExample": {
      "title": "Worked Example: Responsive Images with srcset and sizes",
      "code": "<img src=\"small.jpg\" srcset=\"small.jpg 400w, large.jpg 800w\" sizes=\"(max-width: 600px) 400px, 800px\" alt=\"Hero landscape\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Responsive Images with srcset and sizes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Responsive Images with srcset and sizes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Serve scaled images for retina and mobile -->\n",
    "solutionCode": "<img src=\"small.jpg\" srcset=\"small.jpg 400w, large.jpg 800w\" sizes=\"(max-width: 600px) 400px, 800px\" alt=\"Hero landscape\">",
    "hints": [
      "Write:\n<img src=\"small.jpg\" srcset=\"small.jpg 400w, large.jpg 800w\" sizes=\"(max-width: 600px) 400px, 800px\" alt=\"Hero landscape\">"
    ],
    "testCases": [
      {
        "id": "html-60-tc-1",
        "description": "Verifies correct implementation for Responsive Images with srcset and sizes",
        "testFn": "code.includes('srcset=') && code.includes('sizes=')"
      }
    ]
  },
  {
    "id": "html-61-art-direction-with-the-picture-e",
    "title": "61. Art Direction with the <picture> Element",
    "slug": "lesson-61-art-direction-with-the-picture-e",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Art Direction with the <picture> Element in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Art Direction with the <picture> Element",
      "HTML5"
    ],
    "analogy": "A photographer showing a tight square portrait on mobile and a wide cinematic landscape on widescreen.",
    "explanationMarkdown": "### Art Direction with the <picture> Element\n\nProvides fine-grained control over which image source to display under specific media query constraints.\n\n```html\n<picture>\n  <source media=\"(max-width: 640px)\" srcset=\"avatar-mobile.webp\">\n  <img src=\"avatar-desktop.jpg\" alt=\"Engineer profile\">\n</picture>\n```",
    "workedExample": {
      "title": "Worked Example: Art Direction with the <picture> Element",
      "code": "<picture>\n  <source media=\"(max-width: 640px)\" srcset=\"avatar-mobile.webp\">\n  <img src=\"avatar-desktop.jpg\" alt=\"Engineer profile\">\n</picture>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Art Direction with the <picture> Element.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Art Direction with the <picture> Element.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Swap aspect ratios on mobile vs desktop -->\n",
    "solutionCode": "<picture>\n  <source media=\"(max-width: 640px)\" srcset=\"avatar-mobile.webp\">\n  <img src=\"avatar-desktop.jpg\" alt=\"Engineer profile\">\n</picture>",
    "hints": [
      "Write:\n<picture>\n  <source media=\"(max-width: 640px)\" srcset=\"avatar-mobile.webp\">\n  <img src=\"avatar-desktop.jpg\" alt=\"Engineer profile\">\n</picture>"
    ],
    "testCases": [
      {
        "id": "html-61-tc-1",
        "description": "Verifies correct implementation for Art Direction with the <picture> Element",
        "testFn": "code.includes('<picture>') && code.includes('<source')"
      }
    ]
  },
  {
    "id": "html-62-native-audio-with-audio-controls",
    "title": "62. Native Audio with <audio controls>",
    "slug": "lesson-62-native-audio-with-audio-controls",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Native Audio with <audio controls> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Native Audio with <audio controls>",
      "HTML5"
    ],
    "analogy": "An embedded pocket radio with play, pause, and volume dials built right into the dashboard.",
    "explanationMarkdown": "### Native Audio with <audio controls>\n\nEmbeds sound content into documents with native cross-browser playback controls.\n\n```html\n<audio controls preload=\"metadata\">\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>\n```",
    "workedExample": {
      "title": "Worked Example: Native Audio with <audio controls>",
      "code": "<audio controls preload=\"metadata\">\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Native Audio with <audio controls>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Native Audio with <audio controls>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Embed podcast episode -->\n",
    "solutionCode": "<audio controls preload=\"metadata\">\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>",
    "hints": [
      "Write:\n<audio controls preload=\"metadata\">\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>"
    ],
    "testCases": [
      {
        "id": "html-62-tc-1",
        "description": "Verifies correct implementation for Native Audio with <audio controls>",
        "testFn": "code.includes('<audio') && code.includes('controls')"
      }
    ]
  },
  {
    "id": "html-63-native-video-with-video-controls",
    "title": "63. Native Video with <video controls poster>",
    "slug": "lesson-63-native-video-with-video-controls",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Native Video with <video controls poster> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Native Video with <video controls poster>",
      "HTML5"
    ],
    "analogy": "A mini television screen featuring a preview poster image before the viewer hits the play button.",
    "explanationMarkdown": "### Native Video with <video controls poster>\n\nEmbeds a media player for video playback without requiring external flash or third-party players.\n\n```html\n<video controls poster=\"thumb.jpg\" width=\"640\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n</video>\n```",
    "workedExample": {
      "title": "Worked Example: Native Video with <video controls poster>",
      "code": "<video controls poster=\"thumb.jpg\" width=\"640\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n</video>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Native Video with <video controls poster>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Native Video with <video controls poster>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Embed video with preview thumbnail -->\n",
    "solutionCode": "<video controls poster=\"thumb.jpg\" width=\"640\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n</video>",
    "hints": [
      "Write:\n<video controls poster=\"thumb.jpg\" width=\"640\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n</video>"
    ],
    "testCases": [
      {
        "id": "html-63-tc-1",
        "description": "Verifies correct implementation for Native Video with <video controls poster>",
        "testFn": "code.includes('<video') && code.includes('controls')"
      }
    ]
  },
  {
    "id": "html-64-video-subtitles-and-captions-wit",
    "title": "64. Video Subtitles and Captions with <track>",
    "slug": "lesson-64-video-subtitles-and-captions-wit",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Video Subtitles and Captions with <track> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Video Subtitles and Captions with <track>",
      "HTML5"
    ],
    "analogy": "Subtitles scrolling along the bottom of a movie screen in foreign cinemas.",
    "explanationMarkdown": "### Video Subtitles and Captions with <track>\n\nSpecifies timed text tracks (such as sub-titles or closed captions) for `<audio>` or `<video>`.\n\n```html\n<video controls>\n  <source src=\"talk.mp4\" type=\"video/mp4\">\n  <track src=\"subtitles-en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>\n```",
    "workedExample": {
      "title": "Worked Example: Video Subtitles and Captions with <track>",
      "code": "<video controls>\n  <source src=\"talk.mp4\" type=\"video/mp4\">\n  <track src=\"subtitles-en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Video Subtitles and Captions with <track>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Video Subtitles and Captions with <track>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add closed captions for accessibility -->\n",
    "solutionCode": "<video controls>\n  <source src=\"talk.mp4\" type=\"video/mp4\">\n  <track src=\"subtitles-en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>",
    "hints": [
      "Write:\n<video controls>\n  <source src=\"talk.mp4\" type=\"video/mp4\">\n  <track src=\"subtitles-en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>"
    ],
    "testCases": [
      {
        "id": "html-64-tc-1",
        "description": "Verifies correct implementation for Video Subtitles and Captions with <track>",
        "testFn": "code.includes('<track') && code.includes('kind=\"subtitles\"')"
      }
    ]
  },
  {
    "id": "html-65-embedded-iframes-with-iframe",
    "title": "65. Embedded Iframes with <iframe>",
    "slug": "lesson-65-embedded-iframes-with-iframe",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Embedded Iframes with <iframe> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Embedded Iframes with <iframe>",
      "HTML5"
    ],
    "analogy": "A glass window cut into an apartment wall looking directly into an adjacent gallery.",
    "explanationMarkdown": "### Embedded Iframes with <iframe>\n\nEmbeds another HTML document inside the current document.\n\n```html\n<iframe src=\"https://example.com/demo\" title=\"Interactive code demo\" width=\"600\" height=\"400\"></iframe>\n```",
    "workedExample": {
      "title": "Worked Example: Embedded Iframes with <iframe>",
      "code": "<iframe src=\"https://example.com/demo\" title=\"Interactive code demo\" width=\"600\" height=\"400\"></iframe>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Embedded Iframes with <iframe>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Embedded Iframes with <iframe>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Embed external map or demo -->\n",
    "solutionCode": "<iframe src=\"https://example.com/demo\" title=\"Interactive code demo\" width=\"600\" height=\"400\"></iframe>",
    "hints": [
      "Write:\n<iframe src=\"https://example.com/demo\" title=\"Interactive code demo\" width=\"600\" height=\"400\"></iframe>"
    ],
    "testCases": [
      {
        "id": "html-65-tc-1",
        "description": "Verifies correct implementation for Embedded Iframes with <iframe>",
        "testFn": "code.includes('<iframe') && code.includes('title=')"
      }
    ]
  },
  {
    "id": "html-66-iframe-security-sandboxing-with-",
    "title": "66. Iframe Security Sandboxing with sandbox Attribute",
    "slug": "lesson-66-iframe-security-sandboxing-with-",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Iframe Security Sandboxing with sandbox Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Iframe Security Sandboxing with sandbox Attribute",
      "HTML5"
    ],
    "analogy": "Placing radioactive material inside a lead box where it cannot infect the host lab.",
    "explanationMarkdown": "### Iframe Security Sandboxing with sandbox Attribute\n\nApplies extreme security restrictions to the iframe, preventing popups, script execution, or cookie theft unless explicitly granted.\n\n```html\n<iframe src=\"untrusted.html\" sandbox=\"allow-scripts allow-forms\" title=\"Safe sandbox\"></iframe>\n```",
    "workedExample": {
      "title": "Worked Example: Iframe Security Sandboxing with sandbox Attribute",
      "code": "<iframe src=\"untrusted.html\" sandbox=\"allow-scripts allow-forms\" title=\"Safe sandbox\"></iframe>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iframe Security Sandboxing with sandbox Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iframe Security Sandboxing with sandbox Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Lock down untrusted iframe permissions -->\n",
    "solutionCode": "<iframe src=\"untrusted.html\" sandbox=\"allow-scripts allow-forms\" title=\"Safe sandbox\"></iframe>",
    "hints": [
      "Write:\n<iframe src=\"untrusted.html\" sandbox=\"allow-scripts allow-forms\" title=\"Safe sandbox\"></iframe>"
    ],
    "testCases": [
      {
        "id": "html-66-tc-1",
        "description": "Verifies correct implementation for Iframe Security Sandboxing with sandbox Attribute",
        "testFn": "code.includes('sandbox=')"
      }
    ]
  },
  {
    "id": "html-67-inlining-vector-graphics-with-sv",
    "title": "67. Inlining Vector Graphics with <svg>",
    "slug": "lesson-67-inlining-vector-graphics-with-sv",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Inlining Vector Graphics with <svg> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Inlining Vector Graphics with <svg>",
      "HTML5"
    ],
    "analogy": "A mathematical blueprint that draws infinitely sharp lines whether printed on a postage stamp or a billboard.",
    "explanationMarkdown": "### Inlining Vector Graphics with <svg>\n\nSVG (Scalable Vector Graphics) renders sharp geometric vector shapes directly via XML markup.\n\n```html\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"crimson\"/>\n</svg>\n```",
    "workedExample": {
      "title": "Worked Example: Inlining Vector Graphics with <svg>",
      "code": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"crimson\"/>\n</svg>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inlining Vector Graphics with <svg>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inlining Vector Graphics with <svg>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Render vector icon -->\n",
    "solutionCode": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"crimson\"/>\n</svg>",
    "hints": [
      "Write:\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"crimson\"/>\n</svg>"
    ],
    "testCases": [
      {
        "id": "html-67-tc-1",
        "description": "Verifies correct implementation for Inlining Vector Graphics with <svg>",
        "testFn": "code.includes('<svg') && code.includes('<circle')"
      }
    ]
  },
  {
    "id": "html-68-svg-paths-and-geometry-with-path",
    "title": "68. SVG Paths and Geometry with <path>",
    "slug": "lesson-68-svg-paths-and-geometry-with-path",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master SVG Paths and Geometry with <path> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "SVG Paths and Geometry with <path>",
      "HTML5"
    ],
    "analogy": "A robotic pen plotter following laser precision coordinate instructions (Move to, Line to).",
    "explanationMarkdown": "### SVG Paths and Geometry with <path>\n\nThe `<path>` element is the most powerful SVG shape, capable of rendering curves, polygons, and arbitrary geometry.\n\n```html\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n  <path d=\"M5 7l5 5 5-5\" stroke=\"currentColor\" fill=\"none\"/>\n</svg>\n```",
    "workedExample": {
      "title": "Worked Example: SVG Paths and Geometry with <path>",
      "code": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n  <path d=\"M5 7l5 5 5-5\" stroke=\"currentColor\" fill=\"none\"/>\n</svg>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for SVG Paths and Geometry with <path>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of SVG Paths and Geometry with <path>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Draw vector chevron -->\n",
    "solutionCode": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n  <path d=\"M5 7l5 5 5-5\" stroke=\"currentColor\" fill=\"none\"/>\n</svg>",
    "hints": [
      "Write:\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n  <path d=\"M5 7l5 5 5-5\" stroke=\"currentColor\" fill=\"none\"/>\n</svg>"
    ],
    "testCases": [
      {
        "id": "html-68-tc-1",
        "description": "Verifies correct implementation for SVG Paths and Geometry with <path>",
        "testFn": "code.includes('<path') && code.includes('d=\"')"
      }
    ]
  },
  {
    "id": "html-69-dynamic-pixel-graphics-with-canv",
    "title": "69. Dynamic Pixel Graphics with <canvas>",
    "slug": "lesson-69-dynamic-pixel-graphics-with-canv",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Dynamic Pixel Graphics with <canvas> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Dynamic Pixel Graphics with <canvas>",
      "HTML5"
    ],
    "analogy": "A blank artist's oil canvas waiting for JavaScript to paint pixels, 3D models, or games.",
    "explanationMarkdown": "### Dynamic Pixel Graphics with <canvas>\n\nProvides a bitmap surface that client-side scripts can draw upon on the fly (games, charts, visual effects).\n\n```html\n<canvas id=\"game-canvas\" width=\"800\" height=\"600\">\n  Canvas not supported.\n</canvas>\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Pixel Graphics with <canvas>",
      "code": "<canvas id=\"game-canvas\" width=\"800\" height=\"600\">\n  Canvas not supported.\n</canvas>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dynamic Pixel Graphics with <canvas>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dynamic Pixel Graphics with <canvas>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create 2D canvas drawing surface -->\n",
    "solutionCode": "<canvas id=\"game-canvas\" width=\"800\" height=\"600\">\n  Canvas not supported.\n</canvas>",
    "hints": [
      "Write:\n<canvas id=\"game-canvas\" width=\"800\" height=\"600\">\n  Canvas not supported.\n</canvas>"
    ],
    "testCases": [
      {
        "id": "html-69-tc-1",
        "description": "Verifies correct implementation for Dynamic Pixel Graphics with <canvas>",
        "testFn": "code.includes('<canvas') && code.includes('width=')"
      }
    ]
  },
  {
    "id": "html-70-lazy-loading-images-with-loading",
    "title": "70. Lazy Loading Images with loading='lazy'",
    "slug": "lesson-70-lazy-loading-images-with-loading",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Lazy Loading Images with loading='lazy' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Lazy Loading Images with loading='lazy'",
      "HTML5"
    ],
    "analogy": "A warehouse pulling items off high shelves only when the customer walks down that specific aisle.",
    "explanationMarkdown": "### Lazy Loading Images with loading='lazy'\n\nDefers loading of off-screen images until the user scrolls near them, speeding up initial page load.\n\n```html\n<img src=\"hero.jpg\" loading=\"lazy\" alt=\"Product showcase\">\n```",
    "workedExample": {
      "title": "Worked Example: Lazy Loading Images with loading='lazy'",
      "code": "<img src=\"hero.jpg\" loading=\"lazy\" alt=\"Product showcase\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lazy Loading Images with loading='lazy'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lazy Loading Images with loading='lazy'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Defer off-screen images -->\n",
    "solutionCode": "<img src=\"hero.jpg\" loading=\"lazy\" alt=\"Product showcase\">",
    "hints": [
      "Write:\n<img src=\"hero.jpg\" loading=\"lazy\" alt=\"Product showcase\">"
    ],
    "testCases": [
      {
        "id": "html-70-tc-1",
        "description": "Verifies correct implementation for Lazy Loading Images with loading='lazy'",
        "testFn": "code.includes('loading=\"lazy\"')"
      }
    ]
  },
  {
    "id": "html-71-asynchronous-decoding-with-decod",
    "title": "71. Asynchronous Decoding with decoding='async'",
    "slug": "lesson-71-asynchronous-decoding-with-decod",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Asynchronous Decoding with decoding='async' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Asynchronous Decoding with decoding='async'",
      "HTML5"
    ],
    "analogy": "Unpacking a large shipping parcel in the garage without blocking the front door hallway.",
    "explanationMarkdown": "### Asynchronous Decoding with decoding='async'\n\nAllows the browser to decode image raster data off the critical main rendering thread.\n\n```html\n<img src=\"banner.png\" decoding=\"async\" alt=\"Welcome banner\">\n```",
    "workedExample": {
      "title": "Worked Example: Asynchronous Decoding with decoding='async'",
      "code": "<img src=\"banner.png\" decoding=\"async\" alt=\"Welcome banner\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Asynchronous Decoding with decoding='async'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Asynchronous Decoding with decoding='async'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Prevent image decode from blocking main thread -->\n",
    "solutionCode": "<img src=\"banner.png\" decoding=\"async\" alt=\"Welcome banner\">",
    "hints": [
      "Write:\n<img src=\"banner.png\" decoding=\"async\" alt=\"Welcome banner\">"
    ],
    "testCases": [
      {
        "id": "html-71-tc-1",
        "description": "Verifies correct implementation for Asynchronous Decoding with decoding='async'",
        "testFn": "code.includes('decoding=\"async\"')"
      }
    ]
  },
  {
    "id": "html-72-next-gen-formats-webp-&-avif-wit",
    "title": "72. Next-Gen Formats: WebP & AVIF with <picture>",
    "slug": "lesson-72-next-gen-formats-webp-&-avif-wit",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Next-Gen Formats: WebP & AVIF with <picture> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Next-Gen Formats",
      "HTML5"
    ],
    "analogy": "Offering digital high-efficiency compressed audio files with fallback MP3s for older players.",
    "explanationMarkdown": "### Next-Gen Formats: WebP & AVIF with <picture>\n\nDelivers ultra-compact next-generation image formats to supporting browsers while retaining legacy JPG fallbacks.\n\n```html\n<picture>\n  <source srcset=\"photo.avif\" type=\"image/avif\">\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"Mountains\">\n</picture>\n```",
    "workedExample": {
      "title": "Worked Example: Next-Gen Formats: WebP & AVIF with <picture>",
      "code": "<picture>\n  <source srcset=\"photo.avif\" type=\"image/avif\">\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"Mountains\">\n</picture>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Next-Gen Formats: WebP & AVIF with <picture>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Next-Gen Formats: WebP & AVIF with <picture>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Offer AVIF and WebP fallbacks -->\n",
    "solutionCode": "<picture>\n  <source srcset=\"photo.avif\" type=\"image/avif\">\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"Mountains\">\n</picture>",
    "hints": [
      "Write:\n<picture>\n  <source srcset=\"photo.avif\" type=\"image/avif\">\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"Mountains\">\n</picture>"
    ],
    "testCases": [
      {
        "id": "html-72-tc-1",
        "description": "Verifies correct implementation for Next-Gen Formats: WebP & AVIF with <picture>",
        "testFn": "code.includes('type=\"image/avif\"') || code.includes('type=\"image/webp\"')"
      }
    ]
  },
  {
    "id": "html-73-object-fit-and-aspect-ratio-styl",
    "title": "73. Object-Fit and Aspect Ratio Styling in HTML",
    "slug": "lesson-73-object-fit-and-aspect-ratio-styl",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Object-Fit and Aspect Ratio Styling in HTML in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Object-Fit and Aspect Ratio Styling in HTML",
      "HTML5"
    ],
    "analogy": "Reserving a parking space with cones before the car arrives so no one steals the slot.",
    "explanationMarkdown": "### Object-Fit and Aspect Ratio Styling in HTML\n\nDeclaring explicit `width` and `height` attributes prevents Cumulative Layout Shift (CLS) as images download.\n\n```html\n<img src=\"cover.jpg\" width=\"800\" height=\"450\" alt=\"Album cover\">\n```",
    "workedExample": {
      "title": "Worked Example: Object-Fit and Aspect Ratio Styling in HTML",
      "code": "<img src=\"cover.jpg\" width=\"800\" height=\"450\" alt=\"Album cover\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Object-Fit and Aspect Ratio Styling in HTML.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Object-Fit and Aspect Ratio Styling in HTML.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Specify explicit dimensions to prevent CLS -->\n",
    "solutionCode": "<img src=\"cover.jpg\" width=\"800\" height=\"450\" alt=\"Album cover\">",
    "hints": [
      "Write:\n<img src=\"cover.jpg\" width=\"800\" height=\"450\" alt=\"Album cover\">"
    ],
    "testCases": [
      {
        "id": "html-73-tc-1",
        "description": "Verifies correct implementation for Object-Fit and Aspect Ratio Styling in HTML",
        "testFn": "code.includes('width=') && code.includes('height=')"
      }
    ]
  },
  {
    "id": "html-74-embedding-external-audio-video-w",
    "title": "74. Embedding External Audio/Video with <embed>",
    "slug": "lesson-74-embedding-external-audio-video-w",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Embedding External Audio/Video with <embed> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Embedding External Audio/Video with <embed>",
      "HTML5"
    ],
    "analogy": "An all-purpose plug-in adapter for external file viewers.",
    "explanationMarkdown": "### Embedding External Audio/Video with <embed>\n\nProvides an integration point for external non-HTML content such as PDF viewers.\n\n```html\n<embed type=\"application/pdf\" src=\"report.pdf\" width=\"500\" height=\"300\">\n```",
    "workedExample": {
      "title": "Worked Example: Embedding External Audio/Video with <embed>",
      "code": "<embed type=\"application/pdf\" src=\"report.pdf\" width=\"500\" height=\"300\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Embedding External Audio/Video with <embed>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Embedding External Audio/Video with <embed>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Embed legacy plugin content -->\n",
    "solutionCode": "<embed type=\"application/pdf\" src=\"report.pdf\" width=\"500\" height=\"300\">",
    "hints": [
      "Write:\n<embed type=\"application/pdf\" src=\"report.pdf\" width=\"500\" height=\"300\">"
    ],
    "testCases": [
      {
        "id": "html-74-tc-1",
        "description": "Verifies correct implementation for Embedding External Audio/Video with <embed>",
        "testFn": "code.includes('<embed')"
      }
    ]
  },
  {
    "id": "html-75-self-closing-source-element-capa",
    "title": "75. Self-Closing <source> Element Capabilities",
    "slug": "lesson-75-self-closing-source-element-capa",
    "language": "html",
    "category": "Module 5: Multimedia, Audio, Video & Canvas",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 25,
    "description": "Master Self-Closing <source> Element Capabilities in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Self-Closing <source> Element Capabilities",
      "HTML5"
    ],
    "analogy": "A smart streaming box switching between 4K, 1080p, and 720p depending on bandwidth.",
    "explanationMarkdown": "### Self-Closing <source> Element Capabilities\n\nAllows authors to specify multiple alternative media resources for `<picture>`, `<audio>`, and `<video>`.\n\n```html\n<video controls>\n  <source src=\"movie-1080p.mp4\" type=\"video/mp4\">\n  <source src=\"movie-720p.mp4\" type=\"video/mp4\">\n</video>\n```",
    "workedExample": {
      "title": "Worked Example: Self-Closing <source> Element Capabilities",
      "code": "<video controls>\n  <source src=\"movie-1080p.mp4\" type=\"video/mp4\">\n  <source src=\"movie-720p.mp4\" type=\"video/mp4\">\n</video>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Self-Closing <source> Element Capabilities.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Self-Closing <source> Element Capabilities.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Video with multiple resolution sources -->\n",
    "solutionCode": "<video controls>\n  <source src=\"movie-1080p.mp4\" type=\"video/mp4\">\n  <source src=\"movie-720p.mp4\" type=\"video/mp4\">\n</video>",
    "hints": [
      "Write:\n<video controls>\n  <source src=\"movie-1080p.mp4\" type=\"video/mp4\">\n  <source src=\"movie-720p.mp4\" type=\"video/mp4\">\n</video>"
    ],
    "testCases": [
      {
        "id": "html-75-tc-1",
        "description": "Verifies correct implementation for Self-Closing <source> Element Capabilities",
        "testFn": "code.includes('<source src=\"movie-1080p.mp4\"')"
      }
    ]
  },
  {
    "id": "html-76-the-basic-table,-tr,-and-td",
    "title": "76. The Basic <table>, <tr>, and <td>",
    "slug": "lesson-76-the-basic-table,-tr,-and-td",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Basic <table>, <tr>, and <td> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The Basic <table>, <tr>, and <td>",
      "HTML5"
    ],
    "analogy": "A spreadsheet grid with rows and cells.",
    "explanationMarkdown": "### The Basic <table>, <tr>, and <td>\n\nTables organize complex tabular data across rows (`<tr>`) and data cells (`<td>`).\n\n```html\n<table>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: The Basic <table>, <tr>, and <td>",
      "code": "<table>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Basic <table>, <tr>, and <td>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Basic <table>, <tr>, and <td>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create 2x2 grid table -->\n",
    "solutionCode": "<table>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-76-tc-1",
        "description": "Verifies correct implementation for The Basic <table>, <tr>, and <td>",
        "testFn": "code.includes('<table>') && code.includes('<tr>') && code.includes('<td>')"
      }
    ]
  },
  {
    "id": "html-77-header-cells-with-th",
    "title": "77. Header Cells with <th>",
    "slug": "lesson-77-header-cells-with-th",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Header Cells with <th> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Header Cells with <th>",
      "HTML5"
    ],
    "analogy": "The bold column headers at the top of an Excel spreadsheet.",
    "explanationMarkdown": "### Header Cells with <th>\n\nDefines a cell as a header of a group of table cells; rendered bold and centered by default.\n\n```html\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Role</th>\n  </tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Header Cells with <th>",
      "code": "<table>\n  <tr>\n    <th>Name</th>\n    <th>Role</th>\n  </tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Header Cells with <th>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Header Cells with <th>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create table header row -->\n",
    "solutionCode": "<table>\n  <tr>\n    <th>Name</th>\n    <th>Role</th>\n  </tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Role</th>\n  </tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-77-tc-1",
        "description": "Verifies correct implementation for Header Cells with <th>",
        "testFn": "code.includes('<th>') && code.includes('</th>')"
      }
    ]
  },
  {
    "id": "html-78-table-head,-body-&-foot-thead,-t",
    "title": "78. Table Head, Body & Foot: <thead>, <tbody>, <tfoot>",
    "slug": "lesson-78-table-head,-body-&-foot-thead,-t",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Table Head, Body & Foot: <thead>, <tbody>, <tfoot> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Table Head, Body & Foot",
      "HTML5"
    ],
    "analogy": "A receipt with a store header, purchased items list, and a bottom summary total.",
    "explanationMarkdown": "### Table Head, Body & Foot: <thead>, <tbody>, <tfoot>\n\nEncapsulates the header rows, main data rows, and summary calculation rows of a table.\n\n```html\n<table>\n  <thead><tr><th>Item</th></tr></thead>\n  <tbody><tr><td>Coffee</td></tr></tbody>\n  <tfoot><tr><td>Total: $4</td></tr></tfoot>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Table Head, Body & Foot: <thead>, <tbody>, <tfoot>",
      "code": "<table>\n  <thead><tr><th>Item</th></tr></thead>\n  <tbody><tr><td>Coffee</td></tr></tbody>\n  <tfoot><tr><td>Total: $4</td></tr></tfoot>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Table Head, Body & Foot: <thead>, <tbody>, <tfoot>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Table Head, Body & Foot: <thead>, <tbody>, <tfoot>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Structure semantic table -->\n",
    "solutionCode": "<table>\n  <thead><tr><th>Item</th></tr></thead>\n  <tbody><tr><td>Coffee</td></tr></tbody>\n  <tfoot><tr><td>Total: $4</td></tr></tfoot>\n</table>",
    "hints": [
      "Write:\n<table>\n  <thead><tr><th>Item</th></tr></thead>\n  <tbody><tr><td>Coffee</td></tr></tbody>\n  <tfoot><tr><td>Total: $4</td></tr></tfoot>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-78-tc-1",
        "description": "Verifies correct implementation for Table Head, Body & Foot: <thead>, <tbody>, <tfoot>",
        "testFn": "code.includes('<thead>') && code.includes('<tbody>') && code.includes('<tfoot>')"
      }
    ]
  },
  {
    "id": "html-79-table-title-captions-with-captio",
    "title": "79. Table Title Captions with <caption>",
    "slug": "lesson-79-table-title-captions-with-captio",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Table Title Captions with <caption> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Table Title Captions with <caption>",
      "HTML5"
    ],
    "analogy": "The title printed directly above a statistical chart in an annual financial report.",
    "explanationMarkdown": "### Table Title Captions with <caption>\n\nSupplies a title or short description for an entire table, positioned by default at the top.\n\n```html\n<table>\n  <caption>Monthly Active Users (2026)</caption>\n  <tr><th>Month</th><th>Users</th></tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Table Title Captions with <caption>",
      "code": "<table>\n  <caption>Monthly Active Users (2026)</caption>\n  <tr><th>Month</th><th>Users</th></tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Table Title Captions with <caption>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Table Title Captions with <caption>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add descriptive table title -->\n",
    "solutionCode": "<table>\n  <caption>Monthly Active Users (2026)</caption>\n  <tr><th>Month</th><th>Users</th></tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <caption>Monthly Active Users (2026)</caption>\n  <tr><th>Month</th><th>Users</th></tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-79-tc-1",
        "description": "Verifies correct implementation for Table Title Captions with <caption>",
        "testFn": "code.includes('<caption>') && code.includes('</caption>')"
      }
    ]
  },
  {
    "id": "html-80-spanning-columns-with-colspan",
    "title": "80. Spanning Columns with colspan",
    "slug": "lesson-80-spanning-columns-with-colspan",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Spanning Columns with colspan in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Spanning Columns with colspan",
      "HTML5"
    ],
    "analogy": "Merging two adjacent cells horizontally in a spreadsheet.",
    "explanationMarkdown": "### Spanning Columns with colspan\n\nSpecifies the number of horizontal columns a single cell should stretch across.\n\n```html\n<table>\n  <tr>\n    <th colspan=\"2\">Full Name</th>\n  </tr>\n  <tr>\n    <td>Sarah</td>\n    <td>Connor</td>\n  </tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Spanning Columns with colspan",
      "code": "<table>\n  <tr>\n    <th colspan=\"2\">Full Name</th>\n  </tr>\n  <tr>\n    <td>Sarah</td>\n    <td>Connor</td>\n  </tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spanning Columns with colspan.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spanning Columns with colspan.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Span cell across 2 columns -->\n",
    "solutionCode": "<table>\n  <tr>\n    <th colspan=\"2\">Full Name</th>\n  </tr>\n  <tr>\n    <td>Sarah</td>\n    <td>Connor</td>\n  </tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr>\n    <th colspan=\"2\">Full Name</th>\n  </tr>\n  <tr>\n    <td>Sarah</td>\n    <td>Connor</td>\n  </tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-80-tc-1",
        "description": "Verifies correct implementation for Spanning Columns with colspan",
        "testFn": "code.includes('colspan=')"
      }
    ]
  },
  {
    "id": "html-81-spanning-rows-with-rowspan",
    "title": "81. Spanning Rows with rowspan",
    "slug": "lesson-81-spanning-rows-with-rowspan",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Spanning Rows with rowspan in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Spanning Rows with rowspan",
      "HTML5"
    ],
    "analogy": "Merging two stacked cells vertically down a column.",
    "explanationMarkdown": "### Spanning Rows with rowspan\n\nSpecifies the number of vertical rows a single cell should stretch across.\n\n```html\n<table>\n  <tr>\n    <td rowspan=\"2\">Support</td>\n    <td>Tier 1</td>\n  </tr>\n  <tr>\n    <td>Tier 2</td>\n  </tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Spanning Rows with rowspan",
      "code": "<table>\n  <tr>\n    <td rowspan=\"2\">Support</td>\n    <td>Tier 1</td>\n  </tr>\n  <tr>\n    <td>Tier 2</td>\n  </tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spanning Rows with rowspan.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spanning Rows with rowspan.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Span cell across 2 vertical rows -->\n",
    "solutionCode": "<table>\n  <tr>\n    <td rowspan=\"2\">Support</td>\n    <td>Tier 1</td>\n  </tr>\n  <tr>\n    <td>Tier 2</td>\n  </tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr>\n    <td rowspan=\"2\">Support</td>\n    <td>Tier 1</td>\n  </tr>\n  <tr>\n    <td>Tier 2</td>\n  </tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-81-tc-1",
        "description": "Verifies correct implementation for Spanning Rows with rowspan",
        "testFn": "code.includes('rowspan=')"
      }
    ]
  },
  {
    "id": "html-82-accessible-header-scopes-scope=c",
    "title": "82. Accessible Header Scopes: scope='col' and scope='row'",
    "slug": "lesson-82-accessible-header-scopes-scope=c",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Accessible Header Scopes: scope='col' and scope='row' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Accessible Header Scopes",
      "HTML5"
    ],
    "analogy": "A megaphone announcing to screen readers whether a header label governs a column or a row.",
    "explanationMarkdown": "### Accessible Header Scopes: scope='col' and scope='row'\n\nExplicitly links header cells to columns or rows, critical for screen reader data comprehension.\n\n```html\n<table>\n  <tr><th scope=\"col\">Username</th></tr>\n  <tr><th scope=\"row\">User #1</th><td>Alex</td></tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Accessible Header Scopes: scope='col' and scope='row'",
      "code": "<table>\n  <tr><th scope=\"col\">Username</th></tr>\n  <tr><th scope=\"row\">User #1</th><td>Alex</td></tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessible Header Scopes: scope='col' and scope='row'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessible Header Scopes: scope='col' and scope='row'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add accessibility scope attributes -->\n",
    "solutionCode": "<table>\n  <tr><th scope=\"col\">Username</th></tr>\n  <tr><th scope=\"row\">User #1</th><td>Alex</td></tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr><th scope=\"col\">Username</th></tr>\n  <tr><th scope=\"row\">User #1</th><td>Alex</td></tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-82-tc-1",
        "description": "Verifies correct implementation for Accessible Header Scopes: scope='col' and scope='row'",
        "testFn": "code.includes('scope=\"col\"') || code.includes('scope=\"row\"')"
      }
    ]
  },
  {
    "id": "html-83-styling-column-groups-with-colgr",
    "title": "83. Styling Column Groups with <colgroup> and <col>",
    "slug": "lesson-83-styling-column-groups-with-colgr",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Styling Column Groups with <colgroup> and <col> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Styling Column Groups with <colgroup> and <col>",
      "HTML5"
    ],
    "analogy": "Color-coding an entire vertical column in a binder with highlighter.",
    "explanationMarkdown": "### Styling Column Groups with <colgroup> and <col>\n\nDefines a group of columns in a table to apply formatting across entire columns without repeating classes.\n\n```html\n<table>\n  <colgroup>\n    <col style=\"background-color: #f1f5f9;\">\n    <col span=\"2\">\n  </colgroup>\n  <tr><td>ID</td><td>Name</td><td>Role</td></tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Styling Column Groups with <colgroup> and <col>",
      "code": "<table>\n  <colgroup>\n    <col style=\"background-color: #f1f5f9;\">\n    <col span=\"2\">\n  </colgroup>\n  <tr><td>ID</td><td>Name</td><td>Role</td></tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Styling Column Groups with <colgroup> and <col>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Styling Column Groups with <colgroup> and <col>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Apply styles to entire column -->\n",
    "solutionCode": "<table>\n  <colgroup>\n    <col style=\"background-color: #f1f5f9;\">\n    <col span=\"2\">\n  </colgroup>\n  <tr><td>ID</td><td>Name</td><td>Role</td></tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <colgroup>\n    <col style=\"background-color: #f1f5f9;\">\n    <col span=\"2\">\n  </colgroup>\n  <tr><td>ID</td><td>Name</td><td>Role</td></tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-83-tc-1",
        "description": "Verifies correct implementation for Styling Column Groups with <colgroup> and <col>",
        "testFn": "code.includes('<colgroup>') && code.includes('<col')"
      }
    ]
  },
  {
    "id": "html-84-table-borders-and-spacing-attrib",
    "title": "84. Table Borders and Spacing Attributes",
    "slug": "lesson-84-table-borders-and-spacing-attrib",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Table Borders and Spacing Attributes in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Table Borders and Spacing Attributes",
      "HTML5"
    ],
    "analogy": "Drawing visible ink gridlines between cells in a hand-drawn ledger.",
    "explanationMarkdown": "### Table Borders and Spacing Attributes\n\nSets basic visible border gridlines around table cells (modern layouts typically style via CSS border-collapse).\n\n```html\n<table border=\"1\">\n  <tr><td>Item</td><td>Price</td></tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Table Borders and Spacing Attributes",
      "code": "<table border=\"1\">\n  <tr><td>Item</td><td>Price</td></tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Table Borders and Spacing Attributes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Table Borders and Spacing Attributes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Bordered data table -->\n",
    "solutionCode": "<table border=\"1\">\n  <tr><td>Item</td><td>Price</td></tr>\n</table>",
    "hints": [
      "Write:\n<table border=\"1\">\n  <tr><td>Item</td><td>Price</td></tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-84-tc-1",
        "description": "Verifies correct implementation for Table Borders and Spacing Attributes",
        "testFn": "code.includes('border=') || code.includes('table')"
      }
    ]
  },
  {
    "id": "html-85-responsive-tables-with-wrapper-d",
    "title": "85. Responsive Tables with Wrapper <div>",
    "slug": "lesson-85-responsive-tables-with-wrapper-d",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Responsive Tables with Wrapper <div> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Responsive Tables with Wrapper <div>",
      "HTML5"
    ],
    "analogy": "A wide panoramic spreadsheet sliding horizontally beneath a phone-sized magnifying glass.",
    "explanationMarkdown": "### Responsive Tables with Wrapper <div>\n\nEnables wide data tables to scroll horizontally on small screens without breaking page layouts.\n\n```html\n<div style=\"overflow-x: auto;\">\n  <table>\n    <tr><th>Wide Data Column</th></tr>\n  </table>\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Responsive Tables with Wrapper <div>",
      "code": "<div style=\"overflow-x: auto;\">\n  <table>\n    <tr><th>Wide Data Column</th></tr>\n  </table>\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Responsive Tables with Wrapper <div>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Responsive Tables with Wrapper <div>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Wrap table for horizontal scrolling -->\n",
    "solutionCode": "<div style=\"overflow-x: auto;\">\n  <table>\n    <tr><th>Wide Data Column</th></tr>\n  </table>\n</div>",
    "hints": [
      "Write:\n<div style=\"overflow-x: auto;\">\n  <table>\n    <tr><th>Wide Data Column</th></tr>\n  </table>\n</div>"
    ],
    "testCases": [
      {
        "id": "html-85-tc-1",
        "description": "Verifies correct implementation for Responsive Tables with Wrapper <div>",
        "testFn": "code.includes('overflow-x') && code.includes('table')"
      }
    ]
  },
  {
    "id": "html-86-empty-cells-representation",
    "title": "86. Empty Cells Representation",
    "slug": "lesson-86-empty-cells-representation",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Empty Cells Representation in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Empty Cells Representation",
      "HTML5"
    ],
    "analogy": "Leaving a cell blank or marking 'N/A' to show data was intentionally omitted.",
    "explanationMarkdown": "### Empty Cells Representation\n\nEnsures consistent cell alignment by providing explicit filler content or empty tags for omitted records.\n\n```html\n<table>\n  <tr>\n    <td>Product A</td>\n    <td>N/A</td>\n  </tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Empty Cells Representation",
      "code": "<table>\n  <tr>\n    <td>Product A</td>\n    <td>N/A</td>\n  </tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Empty Cells Representation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Empty Cells Representation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Explicit empty data cell -->\n",
    "solutionCode": "<table>\n  <tr>\n    <td>Product A</td>\n    <td>N/A</td>\n  </tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr>\n    <td>Product A</td>\n    <td>N/A</td>\n  </tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-86-tc-1",
        "description": "Verifies correct implementation for Empty Cells Representation",
        "testFn": "code.includes('<td>N/A</td>') || code.includes('<td>-</td>') || code.includes('<td>')"
      }
    ]
  },
  {
    "id": "html-87-nested-data-tables",
    "title": "87. Nested Data Tables",
    "slug": "lesson-87-nested-data-tables",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Nested Data Tables in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Nested Data Tables",
      "HTML5"
    ],
    "analogy": "A drawer inside a filing cabinet holding its own smaller organizer divider.",
    "explanationMarkdown": "### Nested Data Tables\n\nPlacing an entire table inside a `<td>` cell to display sub-records.\n\n```html\n<table>\n  <tr>\n    <td>User Stats</td>\n    <td>\n      <table><tr><td>XP: 500</td></tr></table>\n    </td>\n  </tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Nested Data Tables",
      "code": "<table>\n  <tr>\n    <td>User Stats</td>\n    <td>\n      <table><tr><td>XP: 500</td></tr></table>\n    </td>\n  </tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Nested Data Tables.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Nested Data Tables.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Embed miniature detail table inside a cell -->\n",
    "solutionCode": "<table>\n  <tr>\n    <td>User Stats</td>\n    <td>\n      <table><tr><td>XP: 500</td></tr></table>\n    </td>\n  </tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr>\n    <td>User Stats</td>\n    <td>\n      <table><tr><td>XP: 500</td></tr></table>\n    </td>\n  </tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-87-tc-1",
        "description": "Verifies correct implementation for Nested Data Tables",
        "testFn": "code.includes('<table>') && code.count('<table>') >= 2"
      }
    ]
  },
  {
    "id": "html-88-accessible-sorting-headers",
    "title": "88. Accessible Sorting Headers",
    "slug": "lesson-88-accessible-sorting-headers",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Accessible Sorting Headers in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Accessible Sorting Headers",
      "HTML5"
    ],
    "analogy": "An arrow indicator showing whether records are sorted low-to-high or high-to-low.",
    "explanationMarkdown": "### Accessible Sorting Headers\n\nCommunicates sorting direction (ascending/descending/none) to assistive technology.\n\n```html\n<th aria-sort=\"ascending\">\n  <button type=\"button\">Score \u25b2</button>\n</th>\n```",
    "workedExample": {
      "title": "Worked Example: Accessible Sorting Headers",
      "code": "<th aria-sort=\"ascending\">\n  <button type=\"button\">Score \u25b2</button>\n</th>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessible Sorting Headers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessible Sorting Headers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Table header with sort indication -->\n",
    "solutionCode": "<th aria-sort=\"ascending\">\n  <button type=\"button\">Score \u25b2</button>\n</th>",
    "hints": [
      "Write:\n<th aria-sort=\"ascending\">\n  <button type=\"button\">Score \u25b2</button>\n</th>"
    ],
    "testCases": [
      {
        "id": "html-88-tc-1",
        "description": "Verifies correct implementation for Accessible Sorting Headers",
        "testFn": "code.includes('aria-sort=')"
      }
    ]
  },
  {
    "id": "html-89-dense-numeric-alignment-with-css",
    "title": "89. Dense Numeric Alignment with CSS Classes",
    "slug": "lesson-89-dense-numeric-alignment-with-css",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Dense Numeric Alignment with CSS Classes in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Dense Numeric Alignment with CSS Classes",
      "HTML5"
    ],
    "analogy": "Accounting books right-aligning dollars and cents so decimals line up vertically.",
    "explanationMarkdown": "### Dense Numeric Alignment with CSS Classes\n\nAligning numeric values to the right enables fast human comparison of orders of magnitude.\n\n```html\n<table>\n  <tr><td>Total:</td><td class=\"text-right\">$1,250.00</td></tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Dense Numeric Alignment with CSS Classes",
      "code": "<table>\n  <tr><td>Total:</td><td class=\"text-right\">$1,250.00</td></tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dense Numeric Alignment with CSS Classes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dense Numeric Alignment with CSS Classes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Right-align financial numbers -->\n",
    "solutionCode": "<table>\n  <tr><td>Total:</td><td class=\"text-right\">$1,250.00</td></tr>\n</table>",
    "hints": [
      "Write:\n<table>\n  <tr><td>Total:</td><td class=\"text-right\">$1,250.00</td></tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-89-tc-1",
        "description": "Verifies correct implementation for Dense Numeric Alignment with CSS Classes",
        "testFn": "code.includes('text-right') || code.includes('align=')"
      }
    ]
  },
  {
    "id": "html-90-table-summaries-and-aria-describ",
    "title": "90. Table Summaries and aria-describedby",
    "slug": "lesson-90-table-summaries-and-aria-describ",
    "language": "html",
    "category": "Module 6: Tables & Tabular Data",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Table Summaries and aria-describedby in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Table Summaries and aria-describedby",
      "HTML5"
    ],
    "analogy": "A footnote under a complex table providing reading instructions for readers.",
    "explanationMarkdown": "### Table Summaries and aria-describedby\n\nPoints assistive tools to an external paragraph that summarizes complex multi-dimensional table data.\n\n```html\n<p id=\"tbl-summary\">Summary of 2026 server uptimes across all regional data centers.</p>\n<table aria-describedby=\"tbl-summary\">\n  <tr><th>Region</th><th>Uptime</th></tr>\n</table>\n```",
    "workedExample": {
      "title": "Worked Example: Table Summaries and aria-describedby",
      "code": "<p id=\"tbl-summary\">Summary of 2026 server uptimes across all regional data centers.</p>\n<table aria-describedby=\"tbl-summary\">\n  <tr><th>Region</th><th>Uptime</th></tr>\n</table>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Table Summaries and aria-describedby.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Table Summaries and aria-describedby.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Associate descriptive paragraph with table -->\n",
    "solutionCode": "<p id=\"tbl-summary\">Summary of 2026 server uptimes across all regional data centers.</p>\n<table aria-describedby=\"tbl-summary\">\n  <tr><th>Region</th><th>Uptime</th></tr>\n</table>",
    "hints": [
      "Write:\n<p id=\"tbl-summary\">Summary of 2026 server uptimes across all regional data centers.</p>\n<table aria-describedby=\"tbl-summary\">\n  <tr><th>Region</th><th>Uptime</th></tr>\n</table>"
    ],
    "testCases": [
      {
        "id": "html-90-tc-1",
        "description": "Verifies correct implementation for Table Summaries and aria-describedby",
        "testFn": "code.includes('aria-describedby=\"tbl-summary\"')"
      }
    ]
  },
  {
    "id": "html-91-the-form-container-with-action-a",
    "title": "91. The <form> Container with action and method",
    "slug": "lesson-91-the-form-container-with-action-a",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The <form> Container with action and method in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <form> Container with action and method",
      "HTML5"
    ],
    "analogy": "An envelope with a destination address (action) and delivery method (GET/POST).",
    "explanationMarkdown": "### The <form> Container with action and method\n\nCollects user input and dispatches it to a backend endpoint via HTTP GET or POST.\n\n```html\n<form action=\"/api/login\" method=\"POST\">\n  <button type=\"submit\">Sign In</button>\n</form>\n```",
    "workedExample": {
      "title": "Worked Example: The <form> Container with action and method",
      "code": "<form action=\"/api/login\" method=\"POST\">\n  <button type=\"submit\">Sign In</button>\n</form>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <form> Container with action and method.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <form> Container with action and method.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create POST form -->\n",
    "solutionCode": "<form action=\"/api/login\" method=\"POST\">\n  <button type=\"submit\">Sign In</button>\n</form>",
    "hints": [
      "Write:\n<form action=\"/api/login\" method=\"POST\">\n  <button type=\"submit\">Sign In</button>\n</form>"
    ],
    "testCases": [
      {
        "id": "html-91-tc-1",
        "description": "Verifies correct implementation for The <form> Container with action and method",
        "testFn": "code.includes('<form') && code.includes('action=') && code.includes('method=')"
      }
    ]
  },
  {
    "id": "html-92-the-label-tag-and-for-attribute",
    "title": "92. The <label> Tag and for Attribute",
    "slug": "lesson-92-the-label-tag-and-for-attribute",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The <label> Tag and for Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <label> Tag and for Attribute",
      "HTML5"
    ],
    "analogy": "A name tag clipped onto a suitcase so everyone knows which bag it belongs to.",
    "explanationMarkdown": "### The <label> Tag and for Attribute\n\nAssociates text labels with specific form controls; clicking the label focuses the linked input.\n\n```html\n<label for=\"email-input\">Your Email Address:</label>\n<input type=\"email\" id=\"email-input\" name=\"email\">\n```",
    "workedExample": {
      "title": "Worked Example: The <label> Tag and for Attribute",
      "code": "<label for=\"email-input\">Your Email Address:</label>\n<input type=\"email\" id=\"email-input\" name=\"email\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <label> Tag and for Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <label> Tag and for Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Connect label to input via id -->\n",
    "solutionCode": "<label for=\"email-input\">Your Email Address:</label>\n<input type=\"email\" id=\"email-input\" name=\"email\">",
    "hints": [
      "Write:\n<label for=\"email-input\">Your Email Address:</label>\n<input type=\"email\" id=\"email-input\" name=\"email\">"
    ],
    "testCases": [
      {
        "id": "html-92-tc-1",
        "description": "Verifies correct implementation for The <label> Tag and for Attribute",
        "testFn": "code.includes('<label for=') && code.includes('id=')"
      }
    ]
  },
  {
    "id": "html-93-text-inputs-input-type=text",
    "title": "93. Text Inputs: <input type='text'>",
    "slug": "lesson-93-text-inputs-input-type=text",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Text Inputs: <input type='text'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Text Inputs",
      "HTML5"
    ],
    "analogy": "A single-line blank field on a paper application form.",
    "explanationMarkdown": "### Text Inputs: <input type='text'>\n\nThe foundational single-line text entry box for general textual input.\n\n```html\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\" placeholder=\"e.g. sarah99\">\n```",
    "workedExample": {
      "title": "Worked Example: Text Inputs: <input type='text'>",
      "code": "<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\" placeholder=\"e.g. sarah99\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Text Inputs: <input type='text'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Text Inputs: <input type='text'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Standard text box -->\n",
    "solutionCode": "<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\" placeholder=\"e.g. sarah99\">",
    "hints": [
      "Write:\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\" placeholder=\"e.g. sarah99\">"
    ],
    "testCases": [
      {
        "id": "html-93-tc-1",
        "description": "Verifies correct implementation for Text Inputs: <input type='text'>",
        "testFn": "code.includes('type=\"text\"')"
      }
    ]
  },
  {
    "id": "html-94-password-inputs-input-type=passw",
    "title": "94. Password Inputs: <input type='password'>",
    "slug": "lesson-94-password-inputs-input-type=passw",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Password Inputs: <input type='password'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Password Inputs",
      "HTML5"
    ],
    "analogy": "Entering a secret PIN number on an ATM keypad where dots hide your digits.",
    "explanationMarkdown": "### Password Inputs: <input type='password'>\n\nMasks entered characters with bullets or asterisks to prevent shoulder surfing.\n\n```html\n<label for=\"pwd\">Password:</label>\n<input type=\"password\" id=\"pwd\" name=\"pwd\" required>\n```",
    "workedExample": {
      "title": "Worked Example: Password Inputs: <input type='password'>",
      "code": "<label for=\"pwd\">Password:</label>\n<input type=\"password\" id=\"pwd\" name=\"pwd\" required>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Password Inputs: <input type='password'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Password Inputs: <input type='password'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Password field with masked characters -->\n",
    "solutionCode": "<label for=\"pwd\">Password:</label>\n<input type=\"password\" id=\"pwd\" name=\"pwd\" required>",
    "hints": [
      "Write:\n<label for=\"pwd\">Password:</label>\n<input type=\"password\" id=\"pwd\" name=\"pwd\" required>"
    ],
    "testCases": [
      {
        "id": "html-94-tc-1",
        "description": "Verifies correct implementation for Password Inputs: <input type='password'>",
        "testFn": "code.includes('type=\"password\"')"
      }
    ]
  },
  {
    "id": "html-95-email-inputs-input-type=email",
    "title": "95. Email Inputs: <input type='email'>",
    "slug": "lesson-95-email-inputs-input-type=email",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Email Inputs: <input type='email'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Email Inputs",
      "HTML5"
    ],
    "analogy": "A post office worker verifying an envelope has an '@' symbol and a valid postal domain.",
    "explanationMarkdown": "### Email Inputs: <input type='email'>\n\nProvides automatic browser email syntax validation and displays an '@' keyboard key on mobile.\n\n```html\n<input type=\"email\" id=\"user-email\" name=\"email\" required>\n```",
    "workedExample": {
      "title": "Worked Example: Email Inputs: <input type='email'>",
      "code": "<input type=\"email\" id=\"user-email\" name=\"email\" required>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Email Inputs: <input type='email'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Email Inputs: <input type='email'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Validated email field -->\n",
    "solutionCode": "<input type=\"email\" id=\"user-email\" name=\"email\" required>",
    "hints": [
      "Write:\n<input type=\"email\" id=\"user-email\" name=\"email\" required>"
    ],
    "testCases": [
      {
        "id": "html-95-tc-1",
        "description": "Verifies correct implementation for Email Inputs: <input type='email'>",
        "testFn": "code.includes('type=\"email\"')"
      }
    ]
  },
  {
    "id": "html-96-number-inputs-with-min,-max,-and",
    "title": "96. Number Inputs with min, max, and step",
    "slug": "lesson-96-number-inputs-with-min,-max,-and",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Number Inputs with min, max, and step in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Number Inputs with min, max, and step",
      "HTML5"
    ],
    "analogy": "A physical turnstile dial restricting count between 1 and 100.",
    "explanationMarkdown": "### Number Inputs with min, max, and step\n\nRestricts entry to valid numbers and renders increment/decrement stepper arrows.\n\n```html\n<input type=\"number\" id=\"qty\" name=\"qty\" min=\"1\" max=\"100\" step=\"1\" value=\"1\">\n```",
    "workedExample": {
      "title": "Worked Example: Number Inputs with min, max, and step",
      "code": "<input type=\"number\" id=\"qty\" name=\"qty\" min=\"1\" max=\"100\" step=\"1\" value=\"1\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Number Inputs with min, max, and step.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Number Inputs with min, max, and step.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Number counter input -->\n",
    "solutionCode": "<input type=\"number\" id=\"qty\" name=\"qty\" min=\"1\" max=\"100\" step=\"1\" value=\"1\">",
    "hints": [
      "Write:\n<input type=\"number\" id=\"qty\" name=\"qty\" min=\"1\" max=\"100\" step=\"1\" value=\"1\">"
    ],
    "testCases": [
      {
        "id": "html-96-tc-1",
        "description": "Verifies correct implementation for Number Inputs with min, max, and step",
        "testFn": "code.includes('type=\"number\"') && code.includes('min=')"
      }
    ]
  },
  {
    "id": "html-97-checkboxes-input-type=checkbox",
    "title": "97. Checkboxes: <input type='checkbox'>",
    "slug": "lesson-97-checkboxes-input-type=checkbox",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Checkboxes: <input type='checkbox'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Checkboxes",
      "HTML5"
    ],
    "analogy": "A square checkbox that you mark with a check or leave blank.",
    "explanationMarkdown": "### Checkboxes: <input type='checkbox'>\n\nAllows users to toggle binary boolean options on or off independently.\n\n```html\n<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  I agree to the terms of service\n</label>\n```",
    "workedExample": {
      "title": "Worked Example: Checkboxes: <input type='checkbox'>",
      "code": "<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  I agree to the terms of service\n</label>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checkboxes: <input type='checkbox'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checkboxes: <input type='checkbox'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Terms agreement checkbox -->\n",
    "solutionCode": "<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  I agree to the terms of service\n</label>",
    "hints": [
      "Write:\n<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  I agree to the terms of service\n</label>"
    ],
    "testCases": [
      {
        "id": "html-97-tc-1",
        "description": "Verifies correct implementation for Checkboxes: <input type='checkbox'>",
        "testFn": "code.includes('type=\"checkbox\"')"
      }
    ]
  },
  {
    "id": "html-98-radio-buttons-with-name-grouping",
    "title": "98. Radio Buttons with Name Grouping",
    "slug": "lesson-98-radio-buttons-with-name-grouping",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Radio Buttons with Name Grouping in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Radio Buttons with Name Grouping",
      "HTML5"
    ],
    "analogy": "Push buttons on an old car radio: pressing 'Station 2' automatically pops out 'Station 1'.",
    "explanationMarkdown": "### Radio Buttons with Name Grouping\n\nRadio buttons sharing the same `name` attribute form a mutually exclusive single-selection set.\n\n```html\n<fieldset>\n  <legend>Choose Plan</legend>\n  <label><input type=\"radio\" name=\"plan\" value=\"free\" checked> Free</label>\n  <label><input type=\"radio\" name=\"plan\" value=\"pro\"> Pro</label>\n</fieldset>\n```",
    "workedExample": {
      "title": "Worked Example: Radio Buttons with Name Grouping",
      "code": "<fieldset>\n  <legend>Choose Plan</legend>\n  <label><input type=\"radio\" name=\"plan\" value=\"free\" checked> Free</label>\n  <label><input type=\"radio\" name=\"plan\" value=\"pro\"> Pro</label>\n</fieldset>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Radio Buttons with Name Grouping.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Radio Buttons with Name Grouping.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Mutually exclusive radio options -->\n",
    "solutionCode": "<fieldset>\n  <legend>Choose Plan</legend>\n  <label><input type=\"radio\" name=\"plan\" value=\"free\" checked> Free</label>\n  <label><input type=\"radio\" name=\"plan\" value=\"pro\"> Pro</label>\n</fieldset>",
    "hints": [
      "Write:\n<fieldset>\n  <legend>Choose Plan</legend>\n  <label><input type=\"radio\" name=\"plan\" value=\"free\" checked> Free</label>\n  <label><input type=\"radio\" name=\"plan\" value=\"pro\"> Pro</label>\n</fieldset>"
    ],
    "testCases": [
      {
        "id": "html-98-tc-1",
        "description": "Verifies correct implementation for Radio Buttons with Name Grouping",
        "testFn": "code.includes('type=\"radio\"') && code.includes('name=\"plan\"')"
      }
    ]
  },
  {
    "id": "html-99-dropdown-menus-with-select-and-o",
    "title": "99. Dropdown Menus with <select> and <option>",
    "slug": "lesson-99-dropdown-menus-with-select-and-o",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Dropdown Menus with <select> and <option> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Dropdown Menus with <select> and <option>",
      "HTML5"
    ],
    "analogy": "A pull-down roller shade revealing a list of pre-defined options.",
    "explanationMarkdown": "### Dropdown Menus with <select> and <option>\n\nRenders a dropdown menu allowing users to select one or multiple pre-defined options.\n\n```html\n<label for=\"country\">Select Country:</label>\n<select id=\"country\" name=\"country\">\n  <option value=\"\">-- Select --</option>\n  <option value=\"us\">United States</option>\n  <option value=\"in\">India</option>\n</select>\n```",
    "workedExample": {
      "title": "Worked Example: Dropdown Menus with <select> and <option>",
      "code": "<label for=\"country\">Select Country:</label>\n<select id=\"country\" name=\"country\">\n  <option value=\"\">-- Select --</option>\n  <option value=\"us\">United States</option>\n  <option value=\"in\">India</option>\n</select>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dropdown Menus with <select> and <option>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dropdown Menus with <select> and <option>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Country dropdown menu -->\n",
    "solutionCode": "<label for=\"country\">Select Country:</label>\n<select id=\"country\" name=\"country\">\n  <option value=\"\">-- Select --</option>\n  <option value=\"us\">United States</option>\n  <option value=\"in\">India</option>\n</select>",
    "hints": [
      "Write:\n<label for=\"country\">Select Country:</label>\n<select id=\"country\" name=\"country\">\n  <option value=\"\">-- Select --</option>\n  <option value=\"us\">United States</option>\n  <option value=\"in\">India</option>\n</select>"
    ],
    "testCases": [
      {
        "id": "html-99-tc-1",
        "description": "Verifies correct implementation for Dropdown Menus with <select> and <option>",
        "testFn": "code.includes('<select') && code.includes('<option')"
      }
    ]
  },
  {
    "id": "html-100-grouping-options-with-optgroup",
    "title": "100. Grouping Options with <optgroup>",
    "slug": "lesson-100-grouping-options-with-optgroup",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Grouping Options with <optgroup> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Grouping Options with <optgroup>",
      "HTML5"
    ],
    "analogy": "Categorizing a restaurant drink menu into 'Hot Drinks' and 'Cold Drinks'.",
    "explanationMarkdown": "### Grouping Options with <optgroup>\n\nCreates hierarchical labeled groups of `<option>` elements inside a `<select>` list.\n\n```html\n<select name=\"beverage\">\n  <optgroup label=\"Hot Drinks\">\n    <option value=\"coffee\">Coffee</option>\n    <option value=\"tea\">Tea</option>\n  </optgroup>\n</select>\n```",
    "workedExample": {
      "title": "Worked Example: Grouping Options with <optgroup>",
      "code": "<select name=\"beverage\">\n  <optgroup label=\"Hot Drinks\">\n    <option value=\"coffee\">Coffee</option>\n    <option value=\"tea\">Tea</option>\n  </optgroup>\n</select>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grouping Options with <optgroup>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grouping Options with <optgroup>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Grouped dropdown categories -->\n",
    "solutionCode": "<select name=\"beverage\">\n  <optgroup label=\"Hot Drinks\">\n    <option value=\"coffee\">Coffee</option>\n    <option value=\"tea\">Tea</option>\n  </optgroup>\n</select>",
    "hints": [
      "Write:\n<select name=\"beverage\">\n  <optgroup label=\"Hot Drinks\">\n    <option value=\"coffee\">Coffee</option>\n    <option value=\"tea\">Tea</option>\n  </optgroup>\n</select>"
    ],
    "testCases": [
      {
        "id": "html-100-tc-1",
        "description": "Verifies correct implementation for Grouping Options with <optgroup>",
        "testFn": "code.includes('<optgroup') && code.includes('label=')"
      }
    ]
  },
  {
    "id": "html-101-multi-line-text-with-textarea",
    "title": "101. Multi-line Text with <textarea>",
    "slug": "lesson-101-multi-line-text-with-textarea",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multi-line Text with <textarea> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Multi-line Text with <textarea>",
      "HTML5"
    ],
    "analogy": "A blank lined page inside a notebook for writing paragraphs.",
    "explanationMarkdown": "### Multi-line Text with <textarea>\n\nProvides a multi-line plain text editing control for messages, essays, or code.\n\n```html\n<label for=\"feedback\">Feedback:</label>\n<textarea id=\"feedback\" name=\"feedback\" rows=\"4\" cols=\"50\" placeholder=\"Enter feedback...\"></textarea>\n```",
    "workedExample": {
      "title": "Worked Example: Multi-line Text with <textarea>",
      "code": "<label for=\"feedback\">Feedback:</label>\n<textarea id=\"feedback\" name=\"feedback\" rows=\"4\" cols=\"50\" placeholder=\"Enter feedback...\"></textarea>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-line Text with <textarea>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-line Text with <textarea>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Multi-line comments box -->\n",
    "solutionCode": "<label for=\"feedback\">Feedback:</label>\n<textarea id=\"feedback\" name=\"feedback\" rows=\"4\" cols=\"50\" placeholder=\"Enter feedback...\"></textarea>",
    "hints": [
      "Write:\n<label for=\"feedback\">Feedback:</label>\n<textarea id=\"feedback\" name=\"feedback\" rows=\"4\" cols=\"50\" placeholder=\"Enter feedback...\"></textarea>"
    ],
    "testCases": [
      {
        "id": "html-101-tc-1",
        "description": "Verifies correct implementation for Multi-line Text with <textarea>",
        "testFn": "code.includes('<textarea') && code.includes('</textarea>')"
      }
    ]
  },
  {
    "id": "html-102-submit,-reset,-and-button-types",
    "title": "102. Submit, Reset, and Button Types",
    "slug": "lesson-102-submit,-reset,-and-button-types",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Submit, Reset, and Button Types in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Submit, Reset, and Button Types",
      "HTML5"
    ],
    "analogy": "The green 'Send' stamp vs a standard button that executes a custom script.",
    "explanationMarkdown": "### Submit, Reset, and Button Types\n\nButtons can submit forms (`type='submit'`), reset fields (`type='reset'`), or trigger JS (`type='button'`).\n\n```html\n<form>\n  <button type=\"submit\">Save Changes</button>\n  <button type=\"button\" onclick=\"cancel()\">Cancel</button>\n</form>\n```",
    "workedExample": {
      "title": "Worked Example: Submit, Reset, and Button Types",
      "code": "<form>\n  <button type=\"submit\">Save Changes</button>\n  <button type=\"button\" onclick=\"cancel()\">Cancel</button>\n</form>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Submit, Reset, and Button Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Submit, Reset, and Button Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Submit and cancel buttons -->\n",
    "solutionCode": "<form>\n  <button type=\"submit\">Save Changes</button>\n  <button type=\"button\" onclick=\"cancel()\">Cancel</button>\n</form>",
    "hints": [
      "Write:\n<form>\n  <button type=\"submit\">Save Changes</button>\n  <button type=\"button\" onclick=\"cancel()\">Cancel</button>\n</form>"
    ],
    "testCases": [
      {
        "id": "html-102-tc-1",
        "description": "Verifies correct implementation for Submit, Reset, and Button Types",
        "testFn": "code.includes('type=\"submit\"') && code.includes('type=\"button\"')"
      }
    ]
  },
  {
    "id": "html-103-file-uploads-with-input-type=fil",
    "title": "103. File Uploads with <input type='file'>",
    "slug": "lesson-103-file-uploads-with-input-type=fil",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master File Uploads with <input type='file'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "File Uploads with <input type='file'>",
      "HTML5"
    ],
    "analogy": "A physical mail slot allowing users to slip documents into an envelope.",
    "explanationMarkdown": "### File Uploads with <input type='file'>\n\nEnables users to select and upload local files; requires `enctype='multipart/form-data'` on the form.\n\n```html\n<form enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"resume\" accept=\".pdf,.docx\">\n</form>\n```",
    "workedExample": {
      "title": "Worked Example: File Uploads with <input type='file'>",
      "code": "<form enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"resume\" accept=\".pdf,.docx\">\n</form>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for File Uploads with <input type='file'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of File Uploads with <input type='file'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- File attachment input -->\n",
    "solutionCode": "<form enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"resume\" accept=\".pdf,.docx\">\n</form>",
    "hints": [
      "Write:\n<form enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"resume\" accept=\".pdf,.docx\">\n</form>"
    ],
    "testCases": [
      {
        "id": "html-103-tc-1",
        "description": "Verifies correct implementation for File Uploads with <input type='file'>",
        "testFn": "code.includes('type=\"file\"')"
      }
    ]
  },
  {
    "id": "html-104-hidden-inputs-with-input-type=hi",
    "title": "104. Hidden Inputs with <input type='hidden'>",
    "slug": "lesson-104-hidden-inputs-with-input-type=hi",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Hidden Inputs with <input type='hidden'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Hidden Inputs with <input type='hidden'>",
      "HTML5"
    ],
    "analogy": "An invisible tracking watermark printed in invisible ink on the back of a form.",
    "explanationMarkdown": "### Hidden Inputs with <input type='hidden'>\n\nStores data that cannot be seen or modified by users, sent automatically upon form submission.\n\n```html\n<input type=\"hidden\" name=\"csrf_token\" value=\"xyz987abc123\">\n```",
    "workedExample": {
      "title": "Worked Example: Hidden Inputs with <input type='hidden'>",
      "code": "<input type=\"hidden\" name=\"csrf_token\" value=\"xyz987abc123\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hidden Inputs with <input type='hidden'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hidden Inputs with <input type='hidden'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Pass hidden CSRF token -->\n",
    "solutionCode": "<input type=\"hidden\" name=\"csrf_token\" value=\"xyz987abc123\">",
    "hints": [
      "Write:\n<input type=\"hidden\" name=\"csrf_token\" value=\"xyz987abc123\">"
    ],
    "testCases": [
      {
        "id": "html-104-tc-1",
        "description": "Verifies correct implementation for Hidden Inputs with <input type='hidden'>",
        "testFn": "code.includes('type=\"hidden\"')"
      }
    ]
  },
  {
    "id": "html-105-date-and-time-inputs",
    "title": "105. Date and Time Inputs",
    "slug": "lesson-105-date-and-time-inputs",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Date and Time Inputs in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Date and Time Inputs",
      "HTML5"
    ],
    "analogy": "A mini pocket calendar that pops open with days, months, and years.",
    "explanationMarkdown": "### Date and Time Inputs\n\nRenders an accessible native calendar picker formatted to the user's regional locale.\n\n```html\n<label for=\"bday\">Birthdate:</label>\n<input type=\"date\" id=\"bday\" name=\"bday\">\n```",
    "workedExample": {
      "title": "Worked Example: Date and Time Inputs",
      "code": "<label for=\"bday\">Birthdate:</label>\n<input type=\"date\" id=\"bday\" name=\"bday\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Date and Time Inputs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Date and Time Inputs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Calendar date picker -->\n",
    "solutionCode": "<label for=\"bday\">Birthdate:</label>\n<input type=\"date\" id=\"bday\" name=\"bday\">",
    "hints": [
      "Write:\n<label for=\"bday\">Birthdate:</label>\n<input type=\"date\" id=\"bday\" name=\"bday\">"
    ],
    "testCases": [
      {
        "id": "html-105-tc-1",
        "description": "Verifies correct implementation for Date and Time Inputs",
        "testFn": "code.includes('type=\"date\"')"
      }
    ]
  },
  {
    "id": "html-106-range-sliders-with-input-type=ra",
    "title": "106. Range Sliders with <input type='range'>",
    "slug": "lesson-106-range-sliders-with-input-type=ra",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Range Sliders with <input type='range'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Range Sliders with <input type='range'>",
      "HTML5"
    ],
    "analogy": "A physical sliding fader knob on a DJ mixing console.",
    "explanationMarkdown": "### Range Sliders with <input type='range'>\n\nRenders a visual horizontal slider control for selecting an approximate numeric value.\n\n```html\n<label for=\"vol\">Volume:</label>\n<input type=\"range\" id=\"vol\" name=\"vol\" min=\"0\" max=\"100\" value=\"50\">\n```",
    "workedExample": {
      "title": "Worked Example: Range Sliders with <input type='range'>",
      "code": "<label for=\"vol\">Volume:</label>\n<input type=\"range\" id=\"vol\" name=\"vol\" min=\"0\" max=\"100\" value=\"50\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Range Sliders with <input type='range'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Range Sliders with <input type='range'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Volume slider from 0 to 100 -->\n",
    "solutionCode": "<label for=\"vol\">Volume:</label>\n<input type=\"range\" id=\"vol\" name=\"vol\" min=\"0\" max=\"100\" value=\"50\">",
    "hints": [
      "Write:\n<label for=\"vol\">Volume:</label>\n<input type=\"range\" id=\"vol\" name=\"vol\" min=\"0\" max=\"100\" value=\"50\">"
    ],
    "testCases": [
      {
        "id": "html-106-tc-1",
        "description": "Verifies correct implementation for Range Sliders with <input type='range'>",
        "testFn": "code.includes('type=\"range\"')"
      }
    ]
  },
  {
    "id": "html-107-color-pickers-with-input-type=co",
    "title": "107. Color Pickers with <input type='color'>",
    "slug": "lesson-107-color-pickers-with-input-type=co",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Color Pickers with <input type='color'> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Color Pickers with <input type='color'>",
      "HTML5"
    ],
    "analogy": "An artist's watercolor swatch book.",
    "explanationMarkdown": "### Color Pickers with <input type='color'>\n\nLaunches the operating system's native color picker interface and outputs a HEX color code.\n\n```html\n<label for=\"theme\">Accent Color:</label>\n<input type=\"color\" id=\"theme\" name=\"theme\" value=\"#6366f1\">\n```",
    "workedExample": {
      "title": "Worked Example: Color Pickers with <input type='color'>",
      "code": "<label for=\"theme\">Accent Color:</label>\n<input type=\"color\" id=\"theme\" name=\"theme\" value=\"#6366f1\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Color Pickers with <input type='color'>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Color Pickers with <input type='color'>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Native color palette picker -->\n",
    "solutionCode": "<label for=\"theme\">Accent Color:</label>\n<input type=\"color\" id=\"theme\" name=\"theme\" value=\"#6366f1\">",
    "hints": [
      "Write:\n<label for=\"theme\">Accent Color:</label>\n<input type=\"color\" id=\"theme\" name=\"theme\" value=\"#6366f1\">"
    ],
    "testCases": [
      {
        "id": "html-107-tc-1",
        "description": "Verifies correct implementation for Color Pickers with <input type='color'>",
        "testFn": "code.includes('type=\"color\"')"
      }
    ]
  },
  {
    "id": "html-108-autocomplete-suggestions-with-da",
    "title": "108. Autocomplete Suggestions with <datalist>",
    "slug": "lesson-108-autocomplete-suggestions-with-da",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Autocomplete Suggestions with <datalist> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Autocomplete Suggestions with <datalist>",
      "HTML5"
    ],
    "analogy": "A smart typewriter suggesting words as you type while still letting you type custom entries.",
    "explanationMarkdown": "### Autocomplete Suggestions with <datalist>\n\nSupplies a list of pre-defined autocomplete options for an `<input>` element without restricting custom input.\n\n```html\n<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>\n```",
    "workedExample": {
      "title": "Worked Example: Autocomplete Suggestions with <datalist>",
      "code": "<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Autocomplete Suggestions with <datalist>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Autocomplete Suggestions with <datalist>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Search input with autocomplete list -->\n",
    "solutionCode": "<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>",
    "hints": [
      "Write:\n<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>"
    ],
    "testCases": [
      {
        "id": "html-108-tc-1",
        "description": "Verifies correct implementation for Autocomplete Suggestions with <datalist>",
        "testFn": "code.includes('<datalist') && code.includes('list=\"browsers\"')"
      }
    ]
  },
  {
    "id": "html-109-native-form-validation-required-",
    "title": "109. Native Form Validation: required and pattern",
    "slug": "lesson-109-native-form-validation-required-",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Native Form Validation: required and pattern in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Native Form Validation",
      "HTML5"
    ],
    "analogy": "A postal sorting machine rejecting letters that do not match the standard 5-digit ZIP template.",
    "explanationMarkdown": "### Native Form Validation: required and pattern\n\nThe `required` attribute prevents submission if empty; `pattern` enforces regular expression matching.\n\n```html\n<input type=\"text\" name=\"zip\" required pattern=\"[0-9]{5}\" title=\"Five digit US zip code\">\n```",
    "workedExample": {
      "title": "Worked Example: Native Form Validation: required and pattern",
      "code": "<input type=\"text\" name=\"zip\" required pattern=\"[0-9]{5}\" title=\"Five digit US zip code\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Native Form Validation: required and pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Native Form Validation: required and pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Validate 5-digit zip code with regex -->\n",
    "solutionCode": "<input type=\"text\" name=\"zip\" required pattern=\"[0-9]{5}\" title=\"Five digit US zip code\">",
    "hints": [
      "Write:\n<input type=\"text\" name=\"zip\" required pattern=\"[0-9]{5}\" title=\"Five digit US zip code\">"
    ],
    "testCases": [
      {
        "id": "html-109-tc-1",
        "description": "Verifies correct implementation for Native Form Validation: required and pattern",
        "testFn": "code.includes('required') && code.includes('pattern=')"
      }
    ]
  },
  {
    "id": "html-110-form-fieldsets-&-legends",
    "title": "110. Form Fieldsets & Legends",
    "slug": "lesson-110-form-fieldsets-&-legends",
    "language": "html",
    "category": "Module 7: Forms, Inputs & User Interaction",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Form Fieldsets & Legends in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Form Fieldsets & Legends",
      "HTML5"
    ],
    "analogy": "A section box on a paper form grouping all emergency contact questions together.",
    "explanationMarkdown": "### Form Fieldsets & Legends\n\nGroups related form elements together (`<fieldset>`) with an accessible caption (`<legend>`).\n\n```html\n<fieldset>\n  <legend>Personal Details</legend>\n  <label>First Name: <input type=\"text\" name=\"first\"></label>\n</fieldset>\n```",
    "workedExample": {
      "title": "Worked Example: Form Fieldsets & Legends",
      "code": "<fieldset>\n  <legend>Personal Details</legend>\n  <label>First Name: <input type=\"text\" name=\"first\"></label>\n</fieldset>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Form Fieldsets & Legends.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Form Fieldsets & Legends.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Group personal details -->\n",
    "solutionCode": "<fieldset>\n  <legend>Personal Details</legend>\n  <label>First Name: <input type=\"text\" name=\"first\"></label>\n</fieldset>",
    "hints": [
      "Write:\n<fieldset>\n  <legend>Personal Details</legend>\n  <label>First Name: <input type=\"text\" name=\"first\"></label>\n</fieldset>"
    ],
    "testCases": [
      {
        "id": "html-110-tc-1",
        "description": "Verifies correct implementation for Form Fieldsets & Legends",
        "testFn": "code.includes('<fieldset>') && code.includes('<legend>')"
      }
    ]
  },
  {
    "id": "html-111-the-header-element-for-page-and-",
    "title": "111. The <header> Element for Page and Articles",
    "slug": "lesson-111-the-header-element-for-page-and-",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The <header> Element for Page and Articles in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <header> Element for Page and Articles",
      "HTML5"
    ],
    "analogy": "The masthead at the top of a newspaper containing the title logo and issue date.",
    "explanationMarkdown": "### The <header> Element for Page and Articles\n\nRepresents introductory content or a set of navigational links for an entire document or article.\n\n```html\n<header>\n  <h1>DevForge Academy</h1>\n  <nav><a href=\"/\">Home</a></nav>\n</header>\n```",
    "workedExample": {
      "title": "Worked Example: The <header> Element for Page and Articles",
      "code": "<header>\n  <h1>DevForge Academy</h1>\n  <nav><a href=\"/\">Home</a></nav>\n</header>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <header> Element for Page and Articles.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <header> Element for Page and Articles.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Create page header -->\n",
    "solutionCode": "<header>\n  <h1>DevForge Academy</h1>\n  <nav><a href=\"/\">Home</a></nav>\n</header>",
    "hints": [
      "Write:\n<header>\n  <h1>DevForge Academy</h1>\n  <nav><a href=\"/\">Home</a></nav>\n</header>"
    ],
    "testCases": [
      {
        "id": "html-111-tc-1",
        "description": "Verifies correct implementation for The <header> Element for Page and Articles",
        "testFn": "code.includes('<header>') && code.includes('</header>')"
      }
    ]
  },
  {
    "id": "html-112-the-time-tag-with-datetime-attri",
    "title": "112. The <time> Tag with datetime Attribute",
    "slug": "lesson-112-the-time-tag-with-datetime-attri",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The <time> Tag with datetime Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <time> Tag with datetime Attribute",
      "HTML5"
    ],
    "analogy": "A digital timestamp stamped on a ticket that both humans and barcode scanners can read.",
    "explanationMarkdown": "### The <time> Tag with datetime Attribute\n\nRepresents a specific point in time or a duration in a machine-readable ISO format.\n\n```html\n<p>Published on <time datetime=\"2026-11-13T09:00:00Z\">November 13, 2026</time></p>\n```",
    "workedExample": {
      "title": "Worked Example: The <time> Tag with datetime Attribute",
      "code": "<p>Published on <time datetime=\"2026-11-13T09:00:00Z\">November 13, 2026</time></p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <time> Tag with datetime Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <time> Tag with datetime Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Accessible publishing date -->\n",
    "solutionCode": "<p>Published on <time datetime=\"2026-11-13T09:00:00Z\">November 13, 2026</time></p>",
    "hints": [
      "Write:\n<p>Published on <time datetime=\"2026-11-13T09:00:00Z\">November 13, 2026</time></p>"
    ],
    "testCases": [
      {
        "id": "html-112-tc-1",
        "description": "Verifies correct implementation for The <time> Tag with datetime Attribute",
        "testFn": "code.includes('<time') && code.includes('datetime=')"
      }
    ]
  },
  {
    "id": "html-113-expandable-accordions-with-detai",
    "title": "113. Expandable Accordions with <details> and <summary>",
    "slug": "lesson-113-expandable-accordions-with-detai",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Expandable Accordions with <details> and <summary> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Expandable Accordions with <details> and <summary>",
      "HTML5"
    ],
    "analogy": "A folded secret compartment in a greeting card that pops open when you click the tab.",
    "explanationMarkdown": "### Expandable Accordions with <details> and <summary>\n\nCreates an interactive disclosure widget that toggles open or closed natively without requiring JavaScript.\n\n```html\n<details>\n  <summary>What is DevForge?</summary>\n  <p>DevForge is an interactive coding academy.</p>\n</details>\n```",
    "workedExample": {
      "title": "Worked Example: Expandable Accordions with <details> and <summary>",
      "code": "<details>\n  <summary>What is DevForge?</summary>\n  <p>DevForge is an interactive coding academy.</p>\n</details>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Expandable Accordions with <details> and <summary>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Expandable Accordions with <details> and <summary>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Native accordion without JavaScript -->\n",
    "solutionCode": "<details>\n  <summary>What is DevForge?</summary>\n  <p>DevForge is an interactive coding academy.</p>\n</details>",
    "hints": [
      "Write:\n<details>\n  <summary>What is DevForge?</summary>\n  <p>DevForge is an interactive coding academy.</p>\n</details>"
    ],
    "testCases": [
      {
        "id": "html-113-tc-1",
        "description": "Verifies correct implementation for Expandable Accordions with <details> and <summary>",
        "testFn": "code.includes('<details>') && code.includes('<summary>')"
      }
    ]
  },
  {
    "id": "html-114-native-modal-dialogs-with-dialog",
    "title": "114. Native Modal Dialogs with <dialog>",
    "slug": "lesson-114-native-modal-dialogs-with-dialog",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Native Modal Dialogs with <dialog> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Native Modal Dialogs with <dialog>",
      "HTML5"
    ],
    "analogy": "A pop-up alert window demanding user attention before returning to the main window.",
    "explanationMarkdown": "### Native Modal Dialogs with <dialog>\n\nRepresents a modal or non-modal dialog box or window that can be opened via `dialog.showModal()`.\n\n```html\n<dialog id=\"confirm-modal\">\n  <p>Are you sure you want to delete this?</p>\n  <button type=\"button\">Cancel</button>\n</dialog>\n```",
    "workedExample": {
      "title": "Worked Example: Native Modal Dialogs with <dialog>",
      "code": "<dialog id=\"confirm-modal\">\n  <p>Are you sure you want to delete this?</p>\n  <button type=\"button\">Cancel</button>\n</dialog>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Native Modal Dialogs with <dialog>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Native Modal Dialogs with <dialog>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Modal dialog element -->\n",
    "solutionCode": "<dialog id=\"confirm-modal\">\n  <p>Are you sure you want to delete this?</p>\n  <button type=\"button\">Cancel</button>\n</dialog>",
    "hints": [
      "Write:\n<dialog id=\"confirm-modal\">\n  <p>Are you sure you want to delete this?</p>\n  <button type=\"button\">Cancel</button>\n</dialog>"
    ],
    "testCases": [
      {
        "id": "html-114-tc-1",
        "description": "Verifies correct implementation for Native Modal Dialogs with <dialog>",
        "testFn": "code.includes('<dialog') && code.includes('</dialog>')"
      }
    ]
  },
  {
    "id": "html-115-client-side-templates-with-templ",
    "title": "115. Client-Side Templates with <template>",
    "slug": "lesson-115-client-side-templates-with-templ",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Client-Side Templates with <template> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Client-Side Templates with <template>",
      "HTML5"
    ],
    "analogy": "A silicone baking mold that holds shape without being eaten until dough is poured in.",
    "explanationMarkdown": "### Client-Side Templates with <template>\n\nHolds HTML fragments that are not rendered on page load but can be instantiated and cloned via JavaScript.\n\n```html\n<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"name\"></h3>\n    <p class=\"role\"></p>\n  </div>\n</template>\n```",
    "workedExample": {
      "title": "Worked Example: Client-Side Templates with <template>",
      "code": "<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"name\"></h3>\n    <p class=\"role\"></p>\n  </div>\n</template>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Client-Side Templates with <template>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Client-Side Templates with <template>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Hidden HTML template for cloning -->\n",
    "solutionCode": "<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"name\"></h3>\n    <p class=\"role\"></p>\n  </div>\n</template>",
    "hints": [
      "Write:\n<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"name\"></h3>\n    <p class=\"role\"></p>\n  </div>\n</template>"
    ],
    "testCases": [
      {
        "id": "html-115-tc-1",
        "description": "Verifies correct implementation for Client-Side Templates with <template>",
        "testFn": "code.includes('<template') && code.includes('</template>')"
      }
    ]
  },
  {
    "id": "html-116-web-component-slot-element",
    "title": "116. Web Component <slot> Element",
    "slug": "lesson-116-web-component-slot-element",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Web Component <slot> Element in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Web Component <slot> Element",
      "HTML5"
    ],
    "analogy": "A placeholder frame where custom pictures can be inserted from outside.",
    "explanationMarkdown": "### Web Component <slot> Element\n\nDefines a placeholder inside a web component's shadow DOM where consumers can project external HTML content.\n\n```html\n<template id=\"profile-widget\">\n  <div class=\"widget-shell\">\n    <slot name=\"user-bio\">Default bio text</slot>\n  </div>\n</template>\n```",
    "workedExample": {
      "title": "Worked Example: Web Component <slot> Element",
      "code": "<template id=\"profile-widget\">\n  <div class=\"widget-shell\">\n    <slot name=\"user-bio\">Default bio text</slot>\n  </div>\n</template>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Web Component <slot> Element.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Web Component <slot> Element.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Template with content insertion slot -->\n",
    "solutionCode": "<template id=\"profile-widget\">\n  <div class=\"widget-shell\">\n    <slot name=\"user-bio\">Default bio text</slot>\n  </div>\n</template>",
    "hints": [
      "Write:\n<template id=\"profile-widget\">\n  <div class=\"widget-shell\">\n    <slot name=\"user-bio\">Default bio text</slot>\n  </div>\n</template>"
    ],
    "testCases": [
      {
        "id": "html-116-tc-1",
        "description": "Verifies correct implementation for Web Component <slot> Element",
        "testFn": "code.includes('<slot') && code.includes('</slot>')"
      }
    ]
  },
  {
    "id": "html-117-microdata-and-schema.org-annotat",
    "title": "117. Microdata and Schema.org Annotations",
    "slug": "lesson-117-microdata-and-schema.org-annotat",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Microdata and Schema.org Annotations in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Microdata and Schema.org Annotations",
      "HTML5"
    ],
    "analogy": "Sticking machine-readable barcode labels on library books so Google can index them into rich search snippets.",
    "explanationMarkdown": "### Microdata and Schema.org Annotations\n\nEmbeds structured machine-readable metadata directly into HTML elements to generate Google Rich Results.\n\n```html\n<div itemscope itemtype=\"https://schema.org/Course\">\n  <h2 itemprop=\"name\">Fullstack JavaScript</h2>\n  <p itemprop=\"description\">Learn JS from scratch.</p>\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Microdata and Schema.org Annotations",
      "code": "<div itemscope itemtype=\"https://schema.org/Course\">\n  <h2 itemprop=\"name\">Fullstack JavaScript</h2>\n  <p itemprop=\"description\">Learn JS from scratch.</p>\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Microdata and Schema.org Annotations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Microdata and Schema.org Annotations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Schema.org microdata for a course -->\n",
    "solutionCode": "<div itemscope itemtype=\"https://schema.org/Course\">\n  <h2 itemprop=\"name\">Fullstack JavaScript</h2>\n  <p itemprop=\"description\">Learn JS from scratch.</p>\n</div>",
    "hints": [
      "Write:\n<div itemscope itemtype=\"https://schema.org/Course\">\n  <h2 itemprop=\"name\">Fullstack JavaScript</h2>\n  <p itemprop=\"description\">Learn JS from scratch.</p>\n</div>"
    ],
    "testCases": [
      {
        "id": "html-117-tc-1",
        "description": "Verifies correct implementation for Microdata and Schema.org Annotations",
        "testFn": "code.includes('itemscope') && code.includes('itemtype=') && code.includes('itemprop=')"
      }
    ]
  },
  {
    "id": "html-118-open-graph-meta-tags-for-social-",
    "title": "118. Open Graph Meta Tags for Social Sharing",
    "slug": "lesson-118-open-graph-meta-tags-for-social-",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Open Graph Meta Tags for Social Sharing in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Open Graph Meta Tags for Social Sharing",
      "HTML5"
    ],
    "analogy": "A glossy billboard displayed when someone shares your link on Twitter, LinkedIn, or Discord.",
    "explanationMarkdown": "### Open Graph Meta Tags for Social Sharing\n\nEnables rich card previews with thumbnail image, title, and description when URLs are shared across social platforms.\n\n```html\n<head>\n  <meta property=\"og:title\" content=\"DevForge Learning Studio\">\n  <meta property=\"og:image\" content=\"https://devforge.io/og.png\">\n</head>\n```",
    "workedExample": {
      "title": "Worked Example: Open Graph Meta Tags for Social Sharing",
      "code": "<head>\n  <meta property=\"og:title\" content=\"DevForge Learning Studio\">\n  <meta property=\"og:image\" content=\"https://devforge.io/og.png\">\n</head>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Open Graph Meta Tags for Social Sharing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Open Graph Meta Tags for Social Sharing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add Open Graph Facebook/LinkedIn tags -->\n",
    "solutionCode": "<head>\n  <meta property=\"og:title\" content=\"DevForge Learning Studio\">\n  <meta property=\"og:image\" content=\"https://devforge.io/og.png\">\n</head>",
    "hints": [
      "Write:\n<head>\n  <meta property=\"og:title\" content=\"DevForge Learning Studio\">\n  <meta property=\"og:image\" content=\"https://devforge.io/og.png\">\n</head>"
    ],
    "testCases": [
      {
        "id": "html-118-tc-1",
        "description": "Verifies correct implementation for Open Graph Meta Tags for Social Sharing",
        "testFn": "code.includes('property=\"og:title\"') && code.includes('property=\"og:image\"')"
      }
    ]
  },
  {
    "id": "html-119-twitter-card-meta-tags",
    "title": "119. Twitter Card Meta Tags",
    "slug": "lesson-119-twitter-card-meta-tags",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Twitter Card Meta Tags in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Twitter Card Meta Tags",
      "HTML5"
    ],
    "analogy": "A personalized business card shown whenever your site is tweeted on X/Twitter.",
    "explanationMarkdown": "### Twitter Card Meta Tags\n\nCustomizes the appearance of preview cards specifically on the Twitter/X feed.\n\n```html\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:site\" content=\"@devforge\">\n```",
    "workedExample": {
      "title": "Worked Example: Twitter Card Meta Tags",
      "code": "<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:site\" content=\"@devforge\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Twitter Card Meta Tags.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Twitter Card Meta Tags.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add Twitter summary card -->\n",
    "solutionCode": "<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:site\" content=\"@devforge\">",
    "hints": [
      "Write:\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:site\" content=\"@devforge\">"
    ],
    "testCases": [
      {
        "id": "html-119-tc-1",
        "description": "Verifies correct implementation for Twitter Card Meta Tags",
        "testFn": "code.includes('name=\"twitter:card\"')"
      }
    ]
  },
  {
    "id": "html-120-progress-indicators-with-progres",
    "title": "120. Progress Indicators with <progress>",
    "slug": "lesson-120-progress-indicators-with-progres",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Progress Indicators with <progress> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Progress Indicators with <progress>",
      "HTML5"
    ],
    "analogy": "A filling gas tank meter showing how close you are to full.",
    "explanationMarkdown": "### Progress Indicators with <progress>\n\nDisplays an indicator showing the completion progress of an ongoing task.\n\n```html\n<label for=\"file-progress\">Download Progress:</label>\n<progress id=\"file-progress\" max=\"100\" value=\"75\">75%</progress>\n```",
    "workedExample": {
      "title": "Worked Example: Progress Indicators with <progress>",
      "code": "<label for=\"file-progress\">Download Progress:</label>\n<progress id=\"file-progress\" max=\"100\" value=\"75\">75%</progress>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Progress Indicators with <progress>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Progress Indicators with <progress>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Display 75% download progress -->\n",
    "solutionCode": "<label for=\"file-progress\">Download Progress:</label>\n<progress id=\"file-progress\" max=\"100\" value=\"75\">75%</progress>",
    "hints": [
      "Write:\n<label for=\"file-progress\">Download Progress:</label>\n<progress id=\"file-progress\" max=\"100\" value=\"75\">75%</progress>"
    ],
    "testCases": [
      {
        "id": "html-120-tc-1",
        "description": "Verifies correct implementation for Progress Indicators with <progress>",
        "testFn": "code.includes('<progress') && code.includes('value=')"
      }
    ]
  },
  {
    "id": "html-121-gauge-meter-with-meter",
    "title": "121. Gauge Meter with <meter>",
    "slug": "lesson-121-gauge-meter-with-meter",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Gauge Meter with <meter> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Gauge Meter with <meter>",
      "HTML5"
    ],
    "analogy": "The speedometer or temperature gauge in your car dashboard.",
    "explanationMarkdown": "### Gauge Meter with <meter>\n\nRepresents a scalar measurement within a known range or a fractional value (e.g., disk usage, battery).\n\n```html\n<label for=\"disk\">Disk Usage:</label>\n<meter id=\"disk\" value=\"0.8\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.7\" optimum=\"0.2\">80%</meter>\n```",
    "workedExample": {
      "title": "Worked Example: Gauge Meter with <meter>",
      "code": "<label for=\"disk\">Disk Usage:</label>\n<meter id=\"disk\" value=\"0.8\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.7\" optimum=\"0.2\">80%</meter>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Gauge Meter with <meter>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Gauge Meter with <meter>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Display disk storage gauge -->\n",
    "solutionCode": "<label for=\"disk\">Disk Usage:</label>\n<meter id=\"disk\" value=\"0.8\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.7\" optimum=\"0.2\">80%</meter>",
    "hints": [
      "Write:\n<label for=\"disk\">Disk Usage:</label>\n<meter id=\"disk\" value=\"0.8\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.7\" optimum=\"0.2\">80%</meter>"
    ],
    "testCases": [
      {
        "id": "html-121-tc-1",
        "description": "Verifies correct implementation for Gauge Meter with <meter>",
        "testFn": "code.includes('<meter') && code.includes('value=')"
      }
    ]
  },
  {
    "id": "html-122-bidirectional-text-isolation-wit",
    "title": "122. Bidirectional Text Isolation with <bdi>",
    "slug": "lesson-122-bidirectional-text-isolation-wit",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Bidirectional Text Isolation with <bdi> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Bidirectional Text Isolation with <bdi>",
      "HTML5"
    ],
    "analogy": "A soundproof booth isolating Arabic or Hebrew right-to-left text so it doesn't flip adjacent English words backwards.",
    "explanationMarkdown": "### Bidirectional Text Isolation with <bdi>\n\nIsolates a span of text that might be formatted in a different direction from other text outside it.\n\n```html\n<ul>\n  <li>User <bdi>\u0625\u064a\u0627\u0646</bdi>: 5 points</li>\n  <li>User <bdi>Alex</bdi>: 10 points</li>\n</ul>\n```",
    "workedExample": {
      "title": "Worked Example: Bidirectional Text Isolation with <bdi>",
      "code": "<ul>\n  <li>User <bdi>\u0625\u064a\u0627\u0646</bdi>: 5 points</li>\n  <li>User <bdi>Alex</bdi>: 10 points</li>\n</ul>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bidirectional Text Isolation with <bdi>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bidirectional Text Isolation with <bdi>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Isolate usernames with unknown language direction -->\n",
    "solutionCode": "<ul>\n  <li>User <bdi>\u0625\u064a\u0627\u0646</bdi>: 5 points</li>\n  <li>User <bdi>Alex</bdi>: 10 points</li>\n</ul>",
    "hints": [
      "Write:\n<ul>\n  <li>User <bdi>\u0625\u064a\u0627\u0646</bdi>: 5 points</li>\n  <li>User <bdi>Alex</bdi>: 10 points</li>\n</ul>"
    ],
    "testCases": [
      {
        "id": "html-122-tc-1",
        "description": "Verifies correct implementation for Bidirectional Text Isolation with <bdi>",
        "testFn": "code.includes('<bdi>') && code.includes('</bdi>')"
      }
    ]
  },
  {
    "id": "html-123-word-break-opportunities-with-wb",
    "title": "123. Word Break Opportunities with <wbr>",
    "slug": "lesson-123-word-break-opportunities-with-wb",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Word Break Opportunities with <wbr> in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Word Break Opportunities with <wbr>",
      "HTML5"
    ],
    "analogy": "A subtle scissor perforation indicating where a very long word may safely wrap onto the next line.",
    "explanationMarkdown": "### Word Break Opportunities with <wbr>\n\nSpecifies where in a text it would be acceptable to add a line break if text overflows the container.\n\n```html\n<p>Super<wbr>cali<wbr>fragilistic</p>\n```",
    "workedExample": {
      "title": "Worked Example: Word Break Opportunities with <wbr>",
      "code": "<p>Super<wbr>cali<wbr>fragilistic</p>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Word Break Opportunities with <wbr>.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Word Break Opportunities with <wbr>.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Suggest soft break point in long word -->\n",
    "solutionCode": "<p>Super<wbr>cali<wbr>fragilistic</p>",
    "hints": [
      "Write:\n<p>Super<wbr>cali<wbr>fragilistic</p>"
    ],
    "testCases": [
      {
        "id": "html-123-tc-1",
        "description": "Verifies correct implementation for Word Break Opportunities with <wbr>",
        "testFn": "code.includes('<wbr>') || code.includes('<wbr/>')"
      }
    ]
  },
  {
    "id": "html-124-search-landmarks-with-role=searc",
    "title": "124. Search Landmarks with role='search'",
    "slug": "lesson-124-search-landmarks-with-role=searc",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Search Landmarks with role='search' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Search Landmarks with role='search'",
      "HTML5"
    ],
    "analogy": "The information desk sign in a mall lobby directing customers to search assistance.",
    "explanationMarkdown": "### Search Landmarks with role='search'\n\nInforms assistive technologies that the form is specifically designed for search queries.\n\n```html\n<form role=\"search\" action=\"/search\">\n  <input type=\"search\" name=\"q\" placeholder=\"Search tutorials...\">\n</form>\n```",
    "workedExample": {
      "title": "Worked Example: Search Landmarks with role='search'",
      "code": "<form role=\"search\" action=\"/search\">\n  <input type=\"search\" name=\"q\" placeholder=\"Search tutorials...\">\n</form>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Search Landmarks with role='search'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Search Landmarks with role='search'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Semantic search form -->\n",
    "solutionCode": "<form role=\"search\" action=\"/search\">\n  <input type=\"search\" name=\"q\" placeholder=\"Search tutorials...\">\n</form>",
    "hints": [
      "Write:\n<form role=\"search\" action=\"/search\">\n  <input type=\"search\" name=\"q\" placeholder=\"Search tutorials...\">\n</form>"
    ],
    "testCases": [
      {
        "id": "html-124-tc-1",
        "description": "Verifies correct implementation for Search Landmarks with role='search'",
        "testFn": "code.includes('role=\"search\"')"
      }
    ]
  },
  {
    "id": "html-125-the-search-element-in-modern-htm",
    "title": "125. The <search> Element in Modern HTML",
    "slug": "lesson-125-the-search-element-in-modern-htm",
    "language": "html",
    "category": "Module 8: Semantic HTML5 Architecture",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The <search> Element in Modern HTML in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "The <search> Element in Modern HTML",
      "HTML5"
    ],
    "analogy": "A dedicated search terminal booth in an airport.",
    "explanationMarkdown": "### The <search> Element in Modern HTML\n\nThe newest HTML5.3 semantic element specifically wrapping search and filtering interfaces.\n\n```html\n<search>\n  <form action=\"/search\">\n    <input type=\"search\" name=\"q\">\n  </form>\n</search>\n```",
    "workedExample": {
      "title": "Worked Example: The <search> Element in Modern HTML",
      "code": "<search>\n  <form action=\"/search\">\n    <input type=\"search\" name=\"q\">\n  </form>\n</search>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The <search> Element in Modern HTML.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The <search> Element in Modern HTML.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Modern semantic search container -->\n",
    "solutionCode": "<search>\n  <form action=\"/search\">\n    <input type=\"search\" name=\"q\">\n  </form>\n</search>",
    "hints": [
      "Write:\n<search>\n  <form action=\"/search\">\n    <input type=\"search\" name=\"q\">\n  </form>\n</search>"
    ],
    "testCases": [
      {
        "id": "html-125-tc-1",
        "description": "Verifies correct implementation for The <search> Element in Modern HTML",
        "testFn": "code.includes('<search>') && code.includes('</search>')"
      }
    ]
  },
  {
    "id": "html-126-aria-roles-role=button-and-role=",
    "title": "126. ARIA Roles: role='button' and role='banner'",
    "slug": "lesson-126-aria-roles-role=button-and-role=",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master ARIA Roles: role='button' and role='banner' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "ARIA Roles",
      "HTML5"
    ],
    "analogy": "A military badge identifying an officer's exact duties and clearance level.",
    "explanationMarkdown": "### ARIA Roles: role='button' and role='banner'\n\nARIA roles supply semantic meaning to elements where native HTML tags cannot be used.\n\n```html\n<header role=\"banner\">\n  <div role=\"button\" tabindex=\"0\" onclick=\"handleClick()\">Submit</div>\n</header>\n```",
    "workedExample": {
      "title": "Worked Example: ARIA Roles: role='button' and role='banner'",
      "code": "<header role=\"banner\">\n  <div role=\"button\" tabindex=\"0\" onclick=\"handleClick()\">Submit</div>\n</header>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ARIA Roles: role='button' and role='banner'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ARIA Roles: role='button' and role='banner'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Declare explicit ARIA role -->\n",
    "solutionCode": "<header role=\"banner\">\n  <div role=\"button\" tabindex=\"0\" onclick=\"handleClick()\">Submit</div>\n</header>",
    "hints": [
      "Write:\n<header role=\"banner\">\n  <div role=\"button\" tabindex=\"0\" onclick=\"handleClick()\">Submit</div>\n</header>"
    ],
    "testCases": [
      {
        "id": "html-126-tc-1",
        "description": "Verifies correct implementation for ARIA Roles: role='button' and role='banner'",
        "testFn": "code.includes('role=')"
      }
    ]
  },
  {
    "id": "html-127-accessible-names-with-aria-label",
    "title": "127. Accessible Names with aria-label",
    "slug": "lesson-127-accessible-names-with-aria-label",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Accessible Names with aria-label in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Accessible Names with aria-label",
      "HTML5"
    ],
    "analogy": "Whispering the function of a mystery symbol into the ear of a visually impaired visitor.",
    "explanationMarkdown": "### Accessible Names with aria-label\n\nSupplies a direct invisible text string to serve as the accessible name for screen readers.\n\n```html\n<button type=\"button\" aria-label=\"Close modal\">\n  <svg width=\"16\" height=\"16\"><path d=\"M0 0l16 16\"/></svg>\n</button>\n```",
    "workedExample": {
      "title": "Worked Example: Accessible Names with aria-label",
      "code": "<button type=\"button\" aria-label=\"Close modal\">\n  <svg width=\"16\" height=\"16\"><path d=\"M0 0l16 16\"/></svg>\n</button>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessible Names with aria-label.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessible Names with aria-label.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add label to icon-only button -->\n",
    "solutionCode": "<button type=\"button\" aria-label=\"Close modal\">\n  <svg width=\"16\" height=\"16\"><path d=\"M0 0l16 16\"/></svg>\n</button>",
    "hints": [
      "Write:\n<button type=\"button\" aria-label=\"Close modal\">\n  <svg width=\"16\" height=\"16\"><path d=\"M0 0l16 16\"/></svg>\n</button>"
    ],
    "testCases": [
      {
        "id": "html-127-tc-1",
        "description": "Verifies correct implementation for Accessible Names with aria-label",
        "testFn": "code.includes('aria-label=')"
      }
    ]
  },
  {
    "id": "html-128-referencing-labels-with-aria-lab",
    "title": "128. Referencing Labels with aria-labelledby",
    "slug": "lesson-128-referencing-labels-with-aria-lab",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Referencing Labels with aria-labelledby in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Referencing Labels with aria-labelledby",
      "HTML5"
    ],
    "analogy": "Pointing to a physical signpost on a building to identify what that wing contains.",
    "explanationMarkdown": "### Referencing Labels with aria-labelledby\n\nPoints to one or more element IDs that serve as the accessible name for this element.\n\n```html\n<section aria-labelledby=\"sec-heading\">\n  <h2 id=\"sec-heading\">Billing Preferences</h2>\n</section>\n```",
    "workedExample": {
      "title": "Worked Example: Referencing Labels with aria-labelledby",
      "code": "<section aria-labelledby=\"sec-heading\">\n  <h2 id=\"sec-heading\">Billing Preferences</h2>\n</section>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Referencing Labels with aria-labelledby.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Referencing Labels with aria-labelledby.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Connect title to section as accessible label -->\n",
    "solutionCode": "<section aria-labelledby=\"sec-heading\">\n  <h2 id=\"sec-heading\">Billing Preferences</h2>\n</section>",
    "hints": [
      "Write:\n<section aria-labelledby=\"sec-heading\">\n  <h2 id=\"sec-heading\">Billing Preferences</h2>\n</section>"
    ],
    "testCases": [
      {
        "id": "html-128-tc-1",
        "description": "Verifies correct implementation for Referencing Labels with aria-labelledby",
        "testFn": "code.includes('aria-labelledby=')"
      }
    ]
  },
  {
    "id": "html-129-descriptive-help-text-with-aria-",
    "title": "129. Descriptive Help Text with aria-describedby",
    "slug": "lesson-129-descriptive-help-text-with-aria-",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Descriptive Help Text with aria-describedby in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Descriptive Help Text with aria-describedby",
      "HTML5"
    ],
    "analogy": "A helpful footnote at the bottom of a question explaining how to calculate your taxes.",
    "explanationMarkdown": "### Descriptive Help Text with aria-describedby\n\nAssociates an element with another containing auxiliary guidance, instructions, or error messages.\n\n```html\n<input type=\"password\" id=\"pwd\" aria-describedby=\"pwd-rules\">\n<span id=\"pwd-rules\">Must contain 8 characters and a number.</span>\n```",
    "workedExample": {
      "title": "Worked Example: Descriptive Help Text with aria-describedby",
      "code": "<input type=\"password\" id=\"pwd\" aria-describedby=\"pwd-rules\">\n<span id=\"pwd-rules\">Must contain 8 characters and a number.</span>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Descriptive Help Text with aria-describedby.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Descriptive Help Text with aria-describedby.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Connect error message or help text to input -->\n",
    "solutionCode": "<input type=\"password\" id=\"pwd\" aria-describedby=\"pwd-rules\">\n<span id=\"pwd-rules\">Must contain 8 characters and a number.</span>",
    "hints": [
      "Write:\n<input type=\"password\" id=\"pwd\" aria-describedby=\"pwd-rules\">\n<span id=\"pwd-rules\">Must contain 8 characters and a number.</span>"
    ],
    "testCases": [
      {
        "id": "html-129-tc-1",
        "description": "Verifies correct implementation for Descriptive Help Text with aria-describedby",
        "testFn": "code.includes('aria-describedby=')"
      }
    ]
  },
  {
    "id": "html-130-hiding-decorative-assets-with-ar",
    "title": "130. Hiding Decorative Assets with aria-hidden='true'",
    "slug": "lesson-130-hiding-decorative-assets-with-ar",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Hiding Decorative Assets with aria-hidden='true' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Hiding Decorative Assets with aria-hidden='true'",
      "HTML5"
    ],
    "analogy": "Putting a decorative painting behind a one-way mirror so it doesn't distract the blind guide dog.",
    "explanationMarkdown": "### Hiding Decorative Assets with aria-hidden='true'\n\nHides purely aesthetic icons or decorative elements from screen reader accessibility trees.\n\n```html\n<button type=\"button\">\n  <svg aria-hidden=\"true\"><circle r=\"5\"/></svg>\n  <span>Delete Account</span>\n</button>\n```",
    "workedExample": {
      "title": "Worked Example: Hiding Decorative Assets with aria-hidden='true'",
      "code": "<button type=\"button\">\n  <svg aria-hidden=\"true\"><circle r=\"5\"/></svg>\n  <span>Delete Account</span>\n</button>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hiding Decorative Assets with aria-hidden='true'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hiding Decorative Assets with aria-hidden='true'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Hide decorative icon from screen readers -->\n",
    "solutionCode": "<button type=\"button\">\n  <svg aria-hidden=\"true\"><circle r=\"5\"/></svg>\n  <span>Delete Account</span>\n</button>",
    "hints": [
      "Write:\n<button type=\"button\">\n  <svg aria-hidden=\"true\"><circle r=\"5\"/></svg>\n  <span>Delete Account</span>\n</button>"
    ],
    "testCases": [
      {
        "id": "html-130-tc-1",
        "description": "Verifies correct implementation for Hiding Decorative Assets with aria-hidden='true'",
        "testFn": "code.includes('aria-hidden=\"true\"')"
      }
    ]
  },
  {
    "id": "html-131-live-announcements-with-aria-liv",
    "title": "131. Live Announcements with aria-live='polite'",
    "slug": "lesson-131-live-announcements-with-aria-liv",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Live Announcements with aria-live='polite' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Live Announcements with aria-live='polite'",
      "HTML5"
    ],
    "analogy": "A polite flight attendant waiting until you finish speaking before announcing landing details.",
    "explanationMarkdown": "### Live Announcements with aria-live='polite'\n\nInforms screen readers to automatically speak new dynamic text injected into this container.\n\n```html\n<div id=\"status-msg\" aria-live=\"polite\" role=\"status\">\n  Saved draft to cloud.\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Live Announcements with aria-live='polite'",
      "code": "<div id=\"status-msg\" aria-live=\"polite\" role=\"status\">\n  Saved draft to cloud.\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Live Announcements with aria-live='polite'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Live Announcements with aria-live='polite'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Announce notifications politely -->\n",
    "solutionCode": "<div id=\"status-msg\" aria-live=\"polite\" role=\"status\">\n  Saved draft to cloud.\n</div>",
    "hints": [
      "Write:\n<div id=\"status-msg\" aria-live=\"polite\" role=\"status\">\n  Saved draft to cloud.\n</div>"
    ],
    "testCases": [
      {
        "id": "html-131-tc-1",
        "description": "Verifies correct implementation for Live Announcements with aria-live='polite'",
        "testFn": "code.includes('aria-live=\"polite\"') || code.includes('aria-live=\"assertive\"')"
      }
    ]
  },
  {
    "id": "html-132-keyboard-navigation-with-tabinde",
    "title": "132. Keyboard Navigation with tabindex",
    "slug": "lesson-132-keyboard-navigation-with-tabinde",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Keyboard Navigation with tabindex in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Keyboard Navigation with tabindex",
      "HTML5"
    ],
    "analogy": "The numbered sequence of stepping stones across a pond.",
    "explanationMarkdown": "### Keyboard Navigation with tabindex\n\ntabindex='0' puts non-interactive elements in normal keyboard tab order; '-1' allows script focus via `.focus()`.\n\n```html\n<div tabindex=\"0\">Focusable custom card</div>\n<div tabindex=\"-1\">Programmatically focusable only</div>\n```",
    "workedExample": {
      "title": "Worked Example: Keyboard Navigation with tabindex",
      "code": "<div tabindex=\"0\">Focusable custom card</div>\n<div tabindex=\"-1\">Programmatically focusable only</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Keyboard Navigation with tabindex.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Keyboard Navigation with tabindex.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Manage keyboard focus order -->\n",
    "solutionCode": "<div tabindex=\"0\">Focusable custom card</div>\n<div tabindex=\"-1\">Programmatically focusable only</div>",
    "hints": [
      "Write:\n<div tabindex=\"0\">Focusable custom card</div>\n<div tabindex=\"-1\">Programmatically focusable only</div>"
    ],
    "testCases": [
      {
        "id": "html-132-tc-1",
        "description": "Verifies correct implementation for Keyboard Navigation with tabindex",
        "testFn": "code.includes('tabindex=\"0\"') || code.includes('tabindex=\"-1\"')"
      }
    ]
  },
  {
    "id": "html-133-skip-to-content-accessibility-li",
    "title": "133. Skip-to-Content Accessibility Links",
    "slug": "lesson-133-skip-to-content-accessibility-li",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Skip-to-Content Accessibility Links in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Skip-to-Content Accessibility Links",
      "HTML5"
    ],
    "analogy": "A VIP express bypass corridor allowing people to skip the long lobby security line.",
    "explanationMarkdown": "### Skip-to-Content Accessibility Links\n\nAllows keyboard-only users to bypass repetitive navigation menus and jump straight to primary content.\n\n```html\n<a href=\"#main-content\" class=\"skip-link\">\n  Skip to main content\n</a>\n```",
    "workedExample": {
      "title": "Worked Example: Skip-to-Content Accessibility Links",
      "code": "<a href=\"#main-content\" class=\"skip-link\">\n  Skip to main content\n</a>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Skip-to-Content Accessibility Links.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Skip-to-Content Accessibility Links.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Add bypass navigation skip link -->\n",
    "solutionCode": "<a href=\"#main-content\" class=\"skip-link\">\n  Skip to main content\n</a>",
    "hints": [
      "Write:\n<a href=\"#main-content\" class=\"skip-link\">\n  Skip to main content\n</a>"
    ],
    "testCases": [
      {
        "id": "html-133-tc-1",
        "description": "Verifies correct implementation for Skip-to-Content Accessibility Links",
        "testFn": "code.includes('href=\"#main-content\"') && code.includes('skip')"
      }
    ]
  },
  {
    "id": "html-134-accessible-toggle-states-with-ar",
    "title": "134. Accessible Toggle States with aria-expanded",
    "slug": "lesson-134-accessible-toggle-states-with-ar",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Accessible Toggle States with aria-expanded in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Accessible Toggle States with aria-expanded",
      "HTML5"
    ],
    "analogy": "A green/red door sign indicating whether a fitting room is currently occupied or open.",
    "explanationMarkdown": "### Accessible Toggle States with aria-expanded\n\nCommunicates whether a collapsible grouping or dropdown popup is currently expanded or collapsed.\n\n```html\n<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-menu\">\n  Menu\n</button>\n```",
    "workedExample": {
      "title": "Worked Example: Accessible Toggle States with aria-expanded",
      "code": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-menu\">\n  Menu\n</button>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessible Toggle States with aria-expanded.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessible Toggle States with aria-expanded.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Indicate menu open or closed state -->\n",
    "solutionCode": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-menu\">\n  Menu\n</button>",
    "hints": [
      "Write:\n<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-menu\">\n  Menu\n</button>"
    ],
    "testCases": [
      {
        "id": "html-134-tc-1",
        "description": "Verifies correct implementation for Accessible Toggle States with aria-expanded",
        "testFn": "code.includes('aria-expanded=')"
      }
    ]
  },
  {
    "id": "html-135-accessible-selection-states-with",
    "title": "135. Accessible Selection States with aria-selected",
    "slug": "lesson-135-accessible-selection-states-with",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Accessible Selection States with aria-selected in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Accessible Selection States with aria-selected",
      "HTML5"
    ],
    "analogy": "A glowing spotlight highlighting which stage performer is currently active.",
    "explanationMarkdown": "### Accessible Selection States with aria-selected\n\nIndicates the current selected state of various widgets, such as items in a tablist or tree.\n\n```html\n<div role=\"tablist\">\n  <button role=\"tab\" aria-selected=\"true\">Overview</button>\n  <button role=\"tab\" aria-selected=\"false\">Settings</button>\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Accessible Selection States with aria-selected",
      "code": "<div role=\"tablist\">\n  <button role=\"tab\" aria-selected=\"true\">Overview</button>\n  <button role=\"tab\" aria-selected=\"false\">Settings</button>\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessible Selection States with aria-selected.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessible Selection States with aria-selected.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Indicate active tab in tablist -->\n",
    "solutionCode": "<div role=\"tablist\">\n  <button role=\"tab\" aria-selected=\"true\">Overview</button>\n  <button role=\"tab\" aria-selected=\"false\">Settings</button>\n</div>",
    "hints": [
      "Write:\n<div role=\"tablist\">\n  <button role=\"tab\" aria-selected=\"true\">Overview</button>\n  <button role=\"tab\" aria-selected=\"false\">Settings</button>\n</div>"
    ],
    "testCases": [
      {
        "id": "html-135-tc-1",
        "description": "Verifies correct implementation for Accessible Selection States with aria-selected",
        "testFn": "code.includes('aria-selected=\"true\"')"
      }
    ]
  },
  {
    "id": "html-136-screen-reader-only-utility-.sr-o",
    "title": "136. Screen Reader Only Utility (.sr-only)",
    "slug": "lesson-136-screen-reader-only-utility-.sr-o",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Screen Reader Only Utility (.sr-only) in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Screen Reader Only Utility (.sr-only)",
      "HTML5"
    ],
    "analogy": "An inaudible ultrasonic dog whistle that only hearing aids and assistive devices pick up.",
    "explanationMarkdown": "### Screen Reader Only Utility (.sr-only)\n\nA standard CSS/HTML pattern hiding text visually offscreen while leaving it fully audible to screen readers.\n\n```html\n<button type=\"button\">\n  <span class=\"sr-only\">Close window</span>\n  <span aria-hidden=\"true\">\u00d7</span>\n</button>\n```",
    "workedExample": {
      "title": "Worked Example: Screen Reader Only Utility (.sr-only)",
      "code": "<button type=\"button\">\n  <span class=\"sr-only\">Close window</span>\n  <span aria-hidden=\"true\">\u00d7</span>\n</button>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Screen Reader Only Utility (.sr-only).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Screen Reader Only Utility (.sr-only).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Visually hidden accessible text -->\n",
    "solutionCode": "<button type=\"button\">\n  <span class=\"sr-only\">Close window</span>\n  <span aria-hidden=\"true\">\u00d7</span>\n</button>",
    "hints": [
      "Write:\n<button type=\"button\">\n  <span class=\"sr-only\">Close window</span>\n  <span aria-hidden=\"true\">\u00d7</span>\n</button>"
    ],
    "testCases": [
      {
        "id": "html-136-tc-1",
        "description": "Verifies correct implementation for Screen Reader Only Utility (.sr-only)",
        "testFn": "code.includes('sr-only') || code.includes('visually-hidden')"
      }
    ]
  },
  {
    "id": "html-137-alert-dialogs-with-role=alert",
    "title": "137. Alert Dialogs with role='alert'",
    "slug": "lesson-137-alert-dialogs-with-role=alert",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Alert Dialogs with role='alert' in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Alert Dialogs with role='alert'",
      "HTML5"
    ],
    "analogy": "A fire alarm immediately interrupting everyone in the room with an urgent warning.",
    "explanationMarkdown": "### Alert Dialogs with role='alert'\n\nCreates an assertive live region that instantly interrupts the screen reader to announce critical errors.\n\n```html\n<div role=\"alert\" class=\"error-banner\">\n  Payment failed. Please verify your card details.\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Alert Dialogs with role='alert'",
      "code": "<div role=\"alert\" class=\"error-banner\">\n  Payment failed. Please verify your card details.\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Alert Dialogs with role='alert'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Alert Dialogs with role='alert'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Urgent accessible error announcement -->\n",
    "solutionCode": "<div role=\"alert\" class=\"error-banner\">\n  Payment failed. Please verify your card details.\n</div>",
    "hints": [
      "Write:\n<div role=\"alert\" class=\"error-banner\">\n  Payment failed. Please verify your card details.\n</div>"
    ],
    "testCases": [
      {
        "id": "html-137-tc-1",
        "description": "Verifies correct implementation for Alert Dialogs with role='alert'",
        "testFn": "code.includes('role=\"alert\"')"
      }
    ]
  },
  {
    "id": "html-138-form-validation-errors-with-aria",
    "title": "138. Form Validation Errors with aria-invalid",
    "slug": "lesson-138-form-validation-errors-with-aria",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Form Validation Errors with aria-invalid in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Form Validation Errors with aria-invalid",
      "HTML5"
    ],
    "analogy": "A red inspection stamp marking an application form as rejected.",
    "explanationMarkdown": "### Form Validation Errors with aria-invalid\n\nInforms assistive technology that the entered value does not conform to expected formatting rules.\n\n```html\n<input type=\"email\" id=\"email\" aria-invalid=\"true\" aria-errormessage=\"email-error\">\n<span id=\"email-error\">Invalid email format.</span>\n```",
    "workedExample": {
      "title": "Worked Example: Form Validation Errors with aria-invalid",
      "code": "<input type=\"email\" id=\"email\" aria-invalid=\"true\" aria-errormessage=\"email-error\">\n<span id=\"email-error\">Invalid email format.</span>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Form Validation Errors with aria-invalid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Form Validation Errors with aria-invalid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Signal erroneous field to screen readers -->\n",
    "solutionCode": "<input type=\"email\" id=\"email\" aria-invalid=\"true\" aria-errormessage=\"email-error\">\n<span id=\"email-error\">Invalid email format.</span>",
    "hints": [
      "Write:\n<input type=\"email\" id=\"email\" aria-invalid=\"true\" aria-errormessage=\"email-error\">\n<span id=\"email-error\">Invalid email format.</span>"
    ],
    "testCases": [
      {
        "id": "html-138-tc-1",
        "description": "Verifies correct implementation for Form Validation Errors with aria-invalid",
        "testFn": "code.includes('aria-invalid=\"true\"')"
      }
    ]
  },
  {
    "id": "html-139-focus-trap-management-for-modals",
    "title": "139. Focus Trap Management for Modals",
    "slug": "lesson-139-focus-trap-management-for-modals",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Focus Trap Management for Modals in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Focus Trap Management for Modals",
      "HTML5"
    ],
    "analogy": "Closing the doors of an elevator so you can only press floor buttons inside until you exit.",
    "explanationMarkdown": "### Focus Trap Management for Modals\n\nTells assistive software that content behind this dialog is temporarily disabled and inaccessible.\n\n```html\n<dialog aria-modal=\"true\" aria-labelledby=\"modal-title\">\n  <h2 id=\"modal-title\">Settings</h2>\n  <button type=\"button\">Save</button>\n</dialog>\n```",
    "workedExample": {
      "title": "Worked Example: Focus Trap Management for Modals",
      "code": "<dialog aria-modal=\"true\" aria-labelledby=\"modal-title\">\n  <h2 id=\"modal-title\">Settings</h2>\n  <button type=\"button\">Save</button>\n</dialog>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Focus Trap Management for Modals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Focus Trap Management for Modals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Accessible modal dialog with focus lock -->\n",
    "solutionCode": "<dialog aria-modal=\"true\" aria-labelledby=\"modal-title\">\n  <h2 id=\"modal-title\">Settings</h2>\n  <button type=\"button\">Save</button>\n</dialog>",
    "hints": [
      "Write:\n<dialog aria-modal=\"true\" aria-labelledby=\"modal-title\">\n  <h2 id=\"modal-title\">Settings</h2>\n  <button type=\"button\">Save</button>\n</dialog>"
    ],
    "testCases": [
      {
        "id": "html-139-tc-1",
        "description": "Verifies correct implementation for Focus Trap Management for Modals",
        "testFn": "code.includes('aria-modal=\"true\"')"
      }
    ]
  },
  {
    "id": "html-140-color-contrast-and-accessible-to",
    "title": "140. Color Contrast and Accessible Touch Targets",
    "slug": "lesson-140-color-contrast-and-accessible-to",
    "language": "html",
    "category": "Module 9: Web Accessibility (a11y) & ARIA",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Color Contrast and Accessible Touch Targets in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Color Contrast and Accessible Touch Targets",
      "HTML5"
    ],
    "analogy": "Making elevator buttons large enough that anyone with gloves, tremors, or large fingers can press easily.",
    "explanationMarkdown": "### Color Contrast and Accessible Touch Targets\n\nWCAG standards mandate minimum 4.5:1 text color contrast and 44-48px touch targets for mobile accessibility.\n\n```html\n<button type=\"button\" style=\"min-width: 48px; min-height: 48px;\">\n  Tap Me\n</button>\n```",
    "workedExample": {
      "title": "Worked Example: Color Contrast and Accessible Touch Targets",
      "code": "<button type=\"button\" style=\"min-width: 48px; min-height: 48px;\">\n  Tap Me\n</button>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Color Contrast and Accessible Touch Targets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Color Contrast and Accessible Touch Targets.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Accessible button with large tap area -->\n",
    "solutionCode": "<button type=\"button\" style=\"min-width: 48px; min-height: 48px;\">\n  Tap Me\n</button>",
    "hints": [
      "Write:\n<button type=\"button\" style=\"min-width: 48px; min-height: 48px;\">\n  Tap Me\n</button>"
    ],
    "testCases": [
      {
        "id": "html-140-tc-1",
        "description": "Verifies correct implementation for Color Contrast and Accessible Touch Targets",
        "testFn": "code.includes('48px') || code.includes('button')"
      }
    ]
  },
  {
    "id": "html-141-web-components-custom-elements",
    "title": "141. Web Components Custom Elements",
    "slug": "lesson-141-web-components-custom-elements",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Web Components Custom Elements in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Web Components Custom Elements",
      "HTML5"
    ],
    "analogy": "Inventing your own custom Lego brick that acts as an all-in-one motorized module.",
    "explanationMarkdown": "### Web Components Custom Elements\n\nCustom elements enable web developers to define their own custom HTML tags and components.\n\n```html\n<user-avatar username=\"alex99\" size=\"large\"></user-avatar>\n```",
    "workedExample": {
      "title": "Worked Example: Web Components Custom Elements",
      "code": "<user-avatar username=\"alex99\" size=\"large\"></user-avatar>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Web Components Custom Elements.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Web Components Custom Elements.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Custom element usage -->\n",
    "solutionCode": "<user-avatar username=\"alex99\" size=\"large\"></user-avatar>",
    "hints": [
      "Write:\n<user-avatar username=\"alex99\" size=\"large\"></user-avatar>"
    ],
    "testCases": [
      {
        "id": "html-141-tc-1",
        "description": "Verifies correct implementation for Web Components Custom Elements",
        "testFn": "code.includes('<user-avatar') || code.includes('custom-element')"
      }
    ]
  },
  {
    "id": "html-142-shadow-dom-template-encapsulatio",
    "title": "142. Shadow DOM Template Encapsulation",
    "slug": "lesson-142-shadow-dom-template-encapsulatio",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Shadow DOM Template Encapsulation in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Shadow DOM Template Encapsulation",
      "HTML5"
    ],
    "analogy": "A hermetically sealed waterproof watch mechanism impervious to outside dust.",
    "explanationMarkdown": "### Shadow DOM Template Encapsulation\n\nEncapsulates styles and markup within a private DOM boundary that page styles cannot leak into or tamper with.\n\n```html\n<template id=\"x-badge\">\n  <style>:host { display: inline-block; padding: 4px; }</style>\n  <span class=\"badge\"><slot></slot></span>\n</template>\n```",
    "workedExample": {
      "title": "Worked Example: Shadow DOM Template Encapsulation",
      "code": "<template id=\"x-badge\">\n  <style>:host { display: inline-block; padding: 4px; }</style>\n  <span class=\"badge\"><slot></slot></span>\n</template>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shadow DOM Template Encapsulation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shadow DOM Template Encapsulation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Define encapsulated shadow DOM template -->\n",
    "solutionCode": "<template id=\"x-badge\">\n  <style>:host { display: inline-block; padding: 4px; }</style>\n  <span class=\"badge\"><slot></slot></span>\n</template>",
    "hints": [
      "Write:\n<template id=\"x-badge\">\n  <style>:host { display: inline-block; padding: 4px; }</style>\n  <span class=\"badge\"><slot></slot></span>\n</template>"
    ],
    "testCases": [
      {
        "id": "html-142-tc-1",
        "description": "Verifies correct implementation for Shadow DOM Template Encapsulation",
        "testFn": "code.includes(':host') && code.includes('<slot')"
      }
    ]
  },
  {
    "id": "html-143-progressive-web-app-web-manifest",
    "title": "143. Progressive Web App Web Manifest Link",
    "slug": "lesson-143-progressive-web-app-web-manifest",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Progressive Web App Web Manifest Link in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Progressive Web App Web Manifest Link",
      "HTML5"
    ],
    "analogy": "An application certificate turning a website into an installable phone app.",
    "explanationMarkdown": "### Progressive Web App Web Manifest Link\n\nLinks the JSON manifest defining app name, icons, start URL, and splash colors for PWA installation.\n\n```html\n<link rel=\"manifest\" href=\"/manifest.json\">\n```",
    "workedExample": {
      "title": "Worked Example: Progressive Web App Web Manifest Link",
      "code": "<link rel=\"manifest\" href=\"/manifest.json\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Progressive Web App Web Manifest Link.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Progressive Web App Web Manifest Link.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Link PWA manifest file -->\n",
    "solutionCode": "<link rel=\"manifest\" href=\"/manifest.json\">",
    "hints": [
      "Write:\n<link rel=\"manifest\" href=\"/manifest.json\">"
    ],
    "testCases": [
      {
        "id": "html-143-tc-1",
        "description": "Verifies correct implementation for Progressive Web App Web Manifest Link",
        "testFn": "code.includes('rel=\"manifest\"')"
      }
    ]
  },
  {
    "id": "html-144-theme-color-meta-tag-for-mobile-",
    "title": "144. Theme Color Meta Tag for Mobile Chrome & Safari",
    "slug": "lesson-144-theme-color-meta-tag-for-mobile-",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Theme Color Meta Tag for Mobile Chrome & Safari in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Theme Color Meta Tag for Mobile Chrome & Safari",
      "HTML5"
    ],
    "analogy": "Painting the roof and rims of a car to match its custom paint job.",
    "explanationMarkdown": "### Theme Color Meta Tag for Mobile Chrome & Safari\n\nCustomizes the color of the browser's address bar and mobile chrome interface to match brand themes.\n\n```html\n<meta name=\"theme-color\" content=\"#4f46e5\">\n```",
    "workedExample": {
      "title": "Worked Example: Theme Color Meta Tag for Mobile Chrome & Safari",
      "code": "<meta name=\"theme-color\" content=\"#4f46e5\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Theme Color Meta Tag for Mobile Chrome & Safari.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Theme Color Meta Tag for Mobile Chrome & Safari.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Set mobile browser toolbar color -->\n",
    "solutionCode": "<meta name=\"theme-color\" content=\"#4f46e5\">",
    "hints": [
      "Write:\n<meta name=\"theme-color\" content=\"#4f46e5\">"
    ],
    "testCases": [
      {
        "id": "html-144-tc-1",
        "description": "Verifies correct implementation for Theme Color Meta Tag for Mobile Chrome & Safari",
        "testFn": "code.includes('name=\"theme-color\"')"
      }
    ]
  },
  {
    "id": "html-145-content-security-policy-csp-meta",
    "title": "145. Content Security Policy (CSP) Meta Tag",
    "slug": "lesson-145-content-security-policy-csp-meta",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Content Security Policy (CSP) Meta Tag in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Content Security Policy (CSP) Meta Tag",
      "HTML5"
    ],
    "analogy": "A strict security checkpoint allowing only pre-cleared authorized contractors onto company grounds.",
    "explanationMarkdown": "### Content Security Policy (CSP) Meta Tag\n\nRestricts which domains can execute scripts, load images, or connect sockets to prevent XSS attacks.\n\n```html\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://cdn.devforge.io;\">\n```",
    "workedExample": {
      "title": "Worked Example: Content Security Policy (CSP) Meta Tag",
      "code": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://cdn.devforge.io;\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Content Security Policy (CSP) Meta Tag.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Content Security Policy (CSP) Meta Tag.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Restrict allowed script sources -->\n",
    "solutionCode": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://cdn.devforge.io;\">",
    "hints": [
      "Write:\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://cdn.devforge.io;\">"
    ],
    "testCases": [
      {
        "id": "html-145-tc-1",
        "description": "Verifies correct implementation for Content Security Policy (CSP) Meta Tag",
        "testFn": "code.includes('Content-Security-Policy')"
      }
    ]
  },
  {
    "id": "html-146-apple-touch-icons-for-ios-home-s",
    "title": "146. Apple Touch Icons for iOS Home Screen",
    "slug": "lesson-146-apple-touch-icons-for-ios-home-s",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Apple Touch Icons for iOS Home Screen in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Apple Touch Icons for iOS Home Screen",
      "HTML5"
    ],
    "analogy": "A gold app sticker glued onto an iPhone home screen grid.",
    "explanationMarkdown": "### Apple Touch Icons for iOS Home Screen\n\nSpecifies the high-resolution app icon used when an iOS user taps 'Add to Home Screen' in Safari.\n\n```html\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\n```",
    "workedExample": {
      "title": "Worked Example: Apple Touch Icons for iOS Home Screen",
      "code": "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Apple Touch Icons for iOS Home Screen.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Apple Touch Icons for iOS Home Screen.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Define iOS home screen bookmark icon -->\n",
    "solutionCode": "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">",
    "hints": [
      "Write:\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">"
    ],
    "testCases": [
      {
        "id": "html-146-tc-1",
        "description": "Verifies correct implementation for Apple Touch Icons for iOS Home Screen",
        "testFn": "code.includes('rel=\"apple-touch-icon\"')"
      }
    ]
  },
  {
    "id": "html-147-editable-web-pages-with-contente",
    "title": "147. Editable Web Pages with contenteditable",
    "slug": "lesson-147-editable-web-pages-with-contente",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Editable Web Pages with contenteditable in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Editable Web Pages with contenteditable",
      "HTML5"
    ],
    "analogy": "A digital dry-erase whiteboard allowing live handwriting right on the glass.",
    "explanationMarkdown": "### Editable Web Pages with contenteditable\n\nTurns any HTML element into a rich-text in-place editable region in the browser.\n\n```html\n<div contenteditable=\"true\" spellcheck=\"true\">\n  Click here to edit this text live!\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Editable Web Pages with contenteditable",
      "code": "<div contenteditable=\"true\" spellcheck=\"true\">\n  Click here to edit this text live!\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Editable Web Pages with contenteditable.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Editable Web Pages with contenteditable.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Make element user-editable in place -->\n",
    "solutionCode": "<div contenteditable=\"true\" spellcheck=\"true\">\n  Click here to edit this text live!\n</div>",
    "hints": [
      "Write:\n<div contenteditable=\"true\" spellcheck=\"true\">\n  Click here to edit this text live!\n</div>"
    ],
    "testCases": [
      {
        "id": "html-147-tc-1",
        "description": "Verifies correct implementation for Editable Web Pages with contenteditable",
        "testFn": "code.includes('contenteditable=\"true\"')"
      }
    ]
  },
  {
    "id": "html-148-drag-and-drop-with-draggable-att",
    "title": "148. Drag and Drop with draggable Attribute",
    "slug": "lesson-148-drag-and-drop-with-draggable-att",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Drag and Drop with draggable Attribute in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Drag and Drop with draggable Attribute",
      "HTML5"
    ],
    "analogy": "Magnetic refrigerator alphabet tiles that you can pick up and drag across the door.",
    "explanationMarkdown": "### Drag and Drop with draggable Attribute\n\nEnables native HTML5 drag-and-drop operations on designated elements.\n\n```html\n<div class=\"kanban-card\" draggable=\"true\">\n  Task #1: Ship HTML Course\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Drag and Drop with draggable Attribute",
      "code": "<div class=\"kanban-card\" draggable=\"true\">\n  Task #1: Ship HTML Course\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Drag and Drop with draggable Attribute.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Drag and Drop with draggable Attribute.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Mark card as draggable -->\n",
    "solutionCode": "<div class=\"kanban-card\" draggable=\"true\">\n  Task #1: Ship HTML Course\n</div>",
    "hints": [
      "Write:\n<div class=\"kanban-card\" draggable=\"true\">\n  Task #1: Ship HTML Course\n</div>"
    ],
    "testCases": [
      {
        "id": "html-148-tc-1",
        "description": "Verifies correct implementation for Drag and Drop with draggable Attribute",
        "testFn": "code.includes('draggable=\"true\"')"
      }
    ]
  },
  {
    "id": "html-149-custom-data-attributes-with-data",
    "title": "149. Custom Data Attributes with data-*",
    "slug": "lesson-149-custom-data-attributes-with-data",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Custom Data Attributes with data-* in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Custom Data Attributes with data-*",
      "HTML5"
    ],
    "analogy": "A barcoded luggage tag holding custom flight routing data for airport conveyers.",
    "explanationMarkdown": "### Custom Data Attributes with data-*\n\nStores private custom data attributes accessible in CSS via `attr()` and in JS via `.dataset`.\n\n```html\n<div class=\"product-card\" data-product-id=\"p-100\" data-category=\"electronics\">\n  Product Info\n</div>\n```",
    "workedExample": {
      "title": "Worked Example: Custom Data Attributes with data-*",
      "code": "<div class=\"product-card\" data-product-id=\"p-100\" data-category=\"electronics\">\n  Product Info\n</div>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Data Attributes with data-*.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Data Attributes with data-*.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Store custom JSON/state metadata -->\n",
    "solutionCode": "<div class=\"product-card\" data-product-id=\"p-100\" data-category=\"electronics\">\n  Product Info\n</div>",
    "hints": [
      "Write:\n<div class=\"product-card\" data-product-id=\"p-100\" data-category=\"electronics\">\n  Product Info\n</div>"
    ],
    "testCases": [
      {
        "id": "html-149-tc-1",
        "description": "Verifies correct implementation for Custom Data Attributes with data-*",
        "testFn": "code.includes('data-product-id=') || code.includes('data-')"
      }
    ]
  },
  {
    "id": "html-150-mobile-keyboard-tuning-with-inpu",
    "title": "150. Mobile Keyboard Tuning with inputmode",
    "slug": "lesson-150-mobile-keyboard-tuning-with-inpu",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Mobile Keyboard Tuning with inputmode in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Mobile Keyboard Tuning with inputmode",
      "HTML5"
    ],
    "analogy": "A phone keypad auto-switching to large numbers only when an SMS code is requested.",
    "explanationMarkdown": "### Mobile Keyboard Tuning with inputmode\n\nTells mobile operating systems which software virtual keyboard layout to display (numeric, decimal, tel, email).\n\n```html\n<input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"Enter OTP\">\n```",
    "workedExample": {
      "title": "Worked Example: Mobile Keyboard Tuning with inputmode",
      "code": "<input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"Enter OTP\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mobile Keyboard Tuning with inputmode.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mobile Keyboard Tuning with inputmode.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Open numeric keypad on mobile -->\n",
    "solutionCode": "<input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"Enter OTP\">",
    "hints": [
      "Write:\n<input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"Enter OTP\">"
    ],
    "testCases": [
      {
        "id": "html-150-tc-1",
        "description": "Verifies correct implementation for Mobile Keyboard Tuning with inputmode",
        "testFn": "code.includes('inputmode=\"numeric\"')"
      }
    ]
  },
  {
    "id": "html-151-browser-autocomplete-optimizatio",
    "title": "151. Browser Autocomplete Optimization",
    "slug": "lesson-151-browser-autocomplete-optimizatio",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Browser Autocomplete Optimization in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Browser Autocomplete Optimization",
      "HTML5"
    ],
    "analogy": "A trusted assistant auto-filling your full passport address with one keystroke.",
    "explanationMarkdown": "### Browser Autocomplete Optimization\n\nGuides password managers and browser autofill tools to populate addresses, credit cards, and credentials.\n\n```html\n<input type=\"text\" name=\"street\" autocomplete=\"shipping street-address\">\n```",
    "workedExample": {
      "title": "Worked Example: Browser Autocomplete Optimization",
      "code": "<input type=\"text\" name=\"street\" autocomplete=\"shipping street-address\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Browser Autocomplete Optimization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Browser Autocomplete Optimization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Optimize form with autocomplete tokens -->\n",
    "solutionCode": "<input type=\"text\" name=\"street\" autocomplete=\"shipping street-address\">",
    "hints": [
      "Write:\n<input type=\"text\" name=\"street\" autocomplete=\"shipping street-address\">"
    ],
    "testCases": [
      {
        "id": "html-151-tc-1",
        "description": "Verifies correct implementation for Browser Autocomplete Optimization",
        "testFn": "code.includes('autocomplete=')"
      }
    ]
  },
  {
    "id": "html-152-referrer-policy-meta-tag",
    "title": "152. Referrer-Policy Meta Tag",
    "slug": "lesson-152-referrer-policy-meta-tag",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Referrer-Policy Meta Tag in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Referrer-Policy Meta Tag",
      "HTML5"
    ],
    "analogy": "An anonymous caller ID masking your phone extension when dialing external numbers.",
    "explanationMarkdown": "### Referrer-Policy Meta Tag\n\nGoverns how much referrer information (URL paths/parameters) is sent along with HTTP requests.\n\n```html\n<meta name=\"referrer\" content=\"strict-origin-when-cross-origin\">\n```",
    "workedExample": {
      "title": "Worked Example: Referrer-Policy Meta Tag",
      "code": "<meta name=\"referrer\" content=\"strict-origin-when-cross-origin\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Referrer-Policy Meta Tag.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Referrer-Policy Meta Tag.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Prevent sensitive URL leaks in HTTP referrers -->\n",
    "solutionCode": "<meta name=\"referrer\" content=\"strict-origin-when-cross-origin\">",
    "hints": [
      "Write:\n<meta name=\"referrer\" content=\"strict-origin-when-cross-origin\">"
    ],
    "testCases": [
      {
        "id": "html-152-tc-1",
        "description": "Verifies correct implementation for Referrer-Policy Meta Tag",
        "testFn": "code.includes('name=\"referrer\"')"
      }
    ]
  },
  {
    "id": "html-153-html-over-the-wire-htmx-hypermed",
    "title": "153. HTML Over The Wire (HTMX) Hypermedia Attributes",
    "slug": "lesson-153-html-over-the-wire-htmx-hypermed",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master HTML Over The Wire (HTMX) Hypermedia Attributes in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "HTML Over The Wire (HTMX) Hypermedia Attributes",
      "HTML5"
    ],
    "analogy": "A mechanical dumbwaiter delivering fresh plates directly from the kitchen without a waiter.",
    "explanationMarkdown": "### HTML Over The Wire (HTMX) Hypermedia Attributes\n\nEnables HTML elements to make AJAX requests and swap returned HTML directly into the page DOM.\n\n```html\n<button hx-get=\"/api/counter\" hx-target=\"#count-display\" hx-swap=\"innerHTML\">\n  Refresh Count\n</button>\n```",
    "workedExample": {
      "title": "Worked Example: HTML Over The Wire (HTMX) Hypermedia Attributes",
      "code": "<button hx-get=\"/api/counter\" hx-target=\"#count-display\" hx-swap=\"innerHTML\">\n  Refresh Count\n</button>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTML Over The Wire (HTMX) Hypermedia Attributes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTML Over The Wire (HTMX) Hypermedia Attributes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Declarative AJAX without JavaScript -->\n",
    "solutionCode": "<button hx-get=\"/api/counter\" hx-target=\"#count-display\" hx-swap=\"innerHTML\">\n  Refresh Count\n</button>",
    "hints": [
      "Write:\n<button hx-get=\"/api/counter\" hx-target=\"#count-display\" hx-swap=\"innerHTML\">\n  Refresh Count\n</button>"
    ],
    "testCases": [
      {
        "id": "html-153-tc-1",
        "description": "Verifies correct implementation for HTML Over The Wire (HTMX) Hypermedia Attributes",
        "testFn": "code.includes('hx-get=') || code.includes('hx-')"
      }
    ]
  },
  {
    "id": "html-154-cross-origin-resource-sharing-cr",
    "title": "154. Cross-Origin Resource Sharing (crossorigin)",
    "slug": "lesson-154-cross-origin-resource-sharing-cr",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Cross-Origin Resource Sharing (crossorigin) in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "Cross-Origin Resource Sharing (crossorigin)",
      "HTML5"
    ],
    "analogy": "Showing your passport at customs without revealing your private home tax records.",
    "explanationMarkdown": "### Cross-Origin Resource Sharing (crossorigin)\n\nConfigures CORS credentials handling when loading external scripts, fonts, and images.\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.cdn.com/css\" crossorigin=\"anonymous\">\n```",
    "workedExample": {
      "title": "Worked Example: Cross-Origin Resource Sharing (crossorigin)",
      "code": "<link rel=\"stylesheet\" href=\"https://fonts.cdn.com/css\" crossorigin=\"anonymous\">",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cross-Origin Resource Sharing (crossorigin).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cross-Origin Resource Sharing (crossorigin).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Fetch fonts or images anonymously -->\n",
    "solutionCode": "<link rel=\"stylesheet\" href=\"https://fonts.cdn.com/css\" crossorigin=\"anonymous\">",
    "hints": [
      "Write:\n<link rel=\"stylesheet\" href=\"https://fonts.cdn.com/css\" crossorigin=\"anonymous\">"
    ],
    "testCases": [
      {
        "id": "html-154-tc-1",
        "description": "Verifies correct implementation for Cross-Origin Resource Sharing (crossorigin)",
        "testFn": "code.includes('crossorigin=\"anonymous\"')"
      }
    ]
  },
  {
    "id": "html-155-html5-engineering-capstone",
    "title": "155. HTML5 Engineering Capstone",
    "slug": "lesson-155-html5-engineering-capstone",
    "language": "html",
    "category": "Module 10: Modern HTML APIs & PWA Integration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master HTML5 Engineering Capstone in HTML5: Semantic Web Architecture (150 Topics).",
    "concepts": [
      "HTML5 Engineering Capstone",
      "HTML5"
    ],
    "analogy": "The complete steel structural frame of a skyscraper, ready for electrical and interior finishing.",
    "explanationMarkdown": "### HTML5 Engineering Capstone\n\nA fully compliant, accessible, production-ready HTML5 document skeleton ready for modern web apps.\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>DevForge Capstone</title>\n</head>\n<body>\n  <header><h1>DevForge</h1></header>\n  <main><p>Master HTML5!</p></main>\n  <footer><p>\u00a9 2026</p></footer>\n</body>\n</html>\n```",
    "workedExample": {
      "title": "Worked Example: HTML5 Engineering Capstone",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>DevForge Capstone</title>\n</head>\n<body>\n  <header><h1>DevForge</h1></header>\n  <main><p>Master HTML5!</p></main>\n  <footer><p>\u00a9 2026</p></footer>\n</body>\n</html>",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTML5 Engineering Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTML5 Engineering Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "<!-- Full semantic accessible page skeleton -->\n",
    "solutionCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>DevForge Capstone</title>\n</head>\n<body>\n  <header><h1>DevForge</h1></header>\n  <main><p>Master HTML5!</p></main>\n  <footer><p>\u00a9 2026</p></footer>\n</body>\n</html>",
    "hints": [
      "Write:\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>DevForge Capstone</title>\n</head>\n<body>\n  <header><h1>DevForge</h1></header>\n  <main><p>Master HTML5!</p></main>\n  <footer><p>\u00a9 2026</p></footer>\n</body>\n</html>"
    ],
    "testCases": [
      {
        "id": "html-155-tc-1",
        "description": "Verifies correct implementation for HTML5 Engineering Capstone",
        "testFn": "code.includes('<!DOCTYPE html>') && code.includes('<main>') && code.includes('<footer>')"
      }
    ]
  }
]
};
