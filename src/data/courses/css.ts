import { Track } from '../../types';

export const CSS_TRACK: Track = {
  id: "css",
  title: "CSS3: Modern Layouts, Flexbox & Grid (150 Topics)",
  slug: "css",
  language: "css",
  icon: "Palette",
  color: "from-sky-400 to-blue-600",
  tagline: "Master modern layouts, Flexbox, CSS Grid, animations, and responsive design across 150 lessons.",
  description: "From selectors, the box model, and modern color spaces to Flexbox, CSS Grid, responsive container queries, 3D animations, and enterprise design tokens.",
  lessons: [
  {
    "id": "css-1-css-ruleset-anatomy-selectors,-p",
    "title": "1. CSS Ruleset Anatomy: Selectors, Properties, Values",
    "slug": "lesson-1-css-ruleset-anatomy-selectors,-p",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master CSS Ruleset Anatomy: Selectors, Properties, Values in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS Ruleset Anatomy",
      "CSS3"
    ],
    "analogy": "A painter's rulebook specifying which wall to target and what paint bucket to apply.",
    "explanationMarkdown": "### CSS Ruleset Anatomy: Selectors, Properties, Values\n\nA CSS ruleset consists of a selector targeting HTML elements and a declaration block of properties and values.\n\n```css\nbody {\n  color: #334155;\n  background-color: #f8fafc;\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS Ruleset Anatomy: Selectors, Properties, Values",
      "code": "body {\n  color: #334155;\n  background-color: #f8fafc;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS Ruleset Anatomy: Selectors, Properties, Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS Ruleset Anatomy: Selectors, Properties, Values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Change body color */\n",
    "solutionCode": "body {\n  color: #334155;\n  background-color: #f8fafc;\n}",
    "hints": [
      "Write:\nbody {\n  color: #334155;\n  background-color: #f8fafc;\n}"
    ],
    "testCases": [
      {
        "id": "css-1-tc-1",
        "description": "Verifies correct implementation for CSS Ruleset Anatomy: Selectors, Properties, Values",
        "testFn": "code.includes('color:') && code.includes('background-color:')"
      }
    ]
  },
  {
    "id": "css-2-element---type-selectors",
    "title": "2. Element / Type Selectors",
    "slug": "lesson-2-element---type-selectors",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Element / Type Selectors in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Element / Type Selectors",
      "CSS3"
    ],
    "analogy": "Instructing a decorator to paint every wooden chair in the entire hotel blue.",
    "explanationMarkdown": "### Element / Type Selectors\n\nElement selectors match all HTML tags matching that tag name on the entire page.\n\n```css\nh1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Element / Type Selectors",
      "code": "h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Element / Type Selectors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Element / Type Selectors.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style all h1 headings */\n",
    "solutionCode": "h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n}",
    "hints": [
      "Write:\nh1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n}"
    ],
    "testCases": [
      {
        "id": "css-2-tc-1",
        "description": "Verifies correct implementation for Element / Type Selectors",
        "testFn": "code.includes('h1 {') && code.includes('font-size:')"
      }
    ]
  },
  {
    "id": "css-3-class-selectors-.class-name",
    "title": "3. Class Selectors (.class-name)",
    "slug": "lesson-3-class-selectors-.class-name",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Class Selectors (.class-name) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Class Selectors (.class-name)",
      "CSS3"
    ],
    "analogy": "Giving VIP wristbands to certain guests; anyone wearing the wristband gets the perk.",
    "explanationMarkdown": "### Class Selectors (.class-name)\n\nClasses can be applied to any number of elements across the HTML page for reusable styling.\n\n```css\n.btn-primary {\n  background-color: #6366f1;\n  color: #ffffff;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Class Selectors (.class-name)",
      "code": ".btn-primary {\n  background-color: #6366f1;\n  color: #ffffff;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Class Selectors (.class-name).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Class Selectors (.class-name).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style primary action button */\n",
    "solutionCode": ".btn-primary {\n  background-color: #6366f1;\n  color: #ffffff;\n}",
    "hints": [
      "Write:\n.btn-primary {\n  background-color: #6366f1;\n  color: #ffffff;\n}"
    ],
    "testCases": [
      {
        "id": "css-3-tc-1",
        "description": "Verifies correct implementation for Class Selectors (.class-name)",
        "testFn": "code.includes('.btn-primary') && code.includes('background-color:')"
      }
    ]
  },
  {
    "id": "css-4-id-selectors-#unique-id",
    "title": "4. ID Selectors (#unique-id)",
    "slug": "lesson-4-id-selectors-#unique-id",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master ID Selectors (#unique-id) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "ID Selectors (#unique-id)",
      "CSS3"
    ],
    "analogy": "A Social Security Number or unique passport number: only one individual owns it.",
    "explanationMarkdown": "### ID Selectors (#unique-id)\n\nID selectors match an exact single element having that `id` attribute. High specificity!\n\n```css\n#main-nav {\n  height: 64px;\n  background-color: #0f172a;\n}\n```",
    "workedExample": {
      "title": "Worked Example: ID Selectors (#unique-id)",
      "code": "#main-nav {\n  height: 64px;\n  background-color: #0f172a;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ID Selectors (#unique-id).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ID Selectors (#unique-id).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style unique navigation banner */\n",
    "solutionCode": "#main-nav {\n  height: 64px;\n  background-color: #0f172a;\n}",
    "hints": [
      "Write:\n#main-nav {\n  height: 64px;\n  background-color: #0f172a;\n}"
    ],
    "testCases": [
      {
        "id": "css-4-tc-1",
        "description": "Verifies correct implementation for ID Selectors (#unique-id)",
        "testFn": "code.includes('#main-nav') && code.includes('height:')"
      }
    ]
  },
  {
    "id": "css-5-grouping-selectors-with-commas",
    "title": "5. Grouping Selectors with Commas",
    "slug": "lesson-5-grouping-selectors-with-commas",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Grouping Selectors with Commas in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Grouping Selectors with Commas",
      "CSS3"
    ],
    "analogy": "Mailing a single joint invitation letter to three roommates at once.",
    "explanationMarkdown": "### Grouping Selectors with Commas\n\nSeparating multiple selectors with commas applies the same CSS declarations to all of them.\n\n```css\nh1, h2, h3 {\n  font-family: 'Inter', sans-serif;\n  line-height: 1.2;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Grouping Selectors with Commas",
      "code": "h1, h2, h3 {\n  font-family: 'Inter', sans-serif;\n  line-height: 1.2;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grouping Selectors with Commas.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grouping Selectors with Commas.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Apply identical font to headings */\n",
    "solutionCode": "h1, h2, h3 {\n  font-family: 'Inter', sans-serif;\n  line-height: 1.2;\n}",
    "hints": [
      "Write:\nh1, h2, h3 {\n  font-family: 'Inter', sans-serif;\n  line-height: 1.2;\n}"
    ],
    "testCases": [
      {
        "id": "css-5-tc-1",
        "description": "Verifies correct implementation for Grouping Selectors with Commas",
        "testFn": "code.includes('h1, h2, h3') && code.includes('font-family:')"
      }
    ]
  },
  {
    "id": "css-6-the-universal-selector-*",
    "title": "6. The Universal Selector (*)",
    "slug": "lesson-6-the-universal-selector-*",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Universal Selector (*) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Universal Selector (*)",
      "CSS3"
    ],
    "analogy": "A city-wide ordinance that applies to every single building and resident equally.",
    "explanationMarkdown": "### The Universal Selector (*)\n\nThe asterisk selector matches every single element on the page, commonly used in CSS resets.\n\n```css\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Universal Selector (*)",
      "code": "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Universal Selector (*).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Universal Selector (*).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Zero out default browser margin */\n",
    "solutionCode": "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}",
    "hints": [
      "Write:\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}"
    ],
    "testCases": [
      {
        "id": "css-6-tc-1",
        "description": "Verifies correct implementation for The Universal Selector (*)",
        "testFn": "code.includes('* {') && code.includes('box-sizing:')"
      }
    ]
  },
  {
    "id": "css-7-descendant-combinator-space",
    "title": "7. Descendant Combinator (space)",
    "slug": "lesson-7-descendant-combinator-space",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Descendant Combinator (space) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Descendant Combinator (space)",
      "CSS3"
    ],
    "analogy": "Talking about any citizen living inside France, whether in Paris, a suburb, or a farm.",
    "explanationMarkdown": "### Descendant Combinator (space)\n\nMatches all elements that are descendants of a specified element, no matter how deeply nested.\n\n```css\narticle p {\n  margin-bottom: 1.5rem;\n  color: #475569;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Descendant Combinator (space)",
      "code": "article p {\n  margin-bottom: 1.5rem;\n  color: #475569;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Descendant Combinator (space).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Descendant Combinator (space).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style paragraphs inside articles */\n",
    "solutionCode": "article p {\n  margin-bottom: 1.5rem;\n  color: #475569;\n}",
    "hints": [
      "Write:\narticle p {\n  margin-bottom: 1.5rem;\n  color: #475569;\n}"
    ],
    "testCases": [
      {
        "id": "css-7-tc-1",
        "description": "Verifies correct implementation for Descendant Combinator (space)",
        "testFn": "code.includes('article p') && code.includes('margin-bottom:')"
      }
    ]
  },
  {
    "id": "css-8-child-combinator-",
    "title": "8. Child Combinator (>)",
    "slug": "lesson-8-child-combinator-",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Child Combinator (>) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Child Combinator (>)",
      "CSS3"
    ],
    "analogy": "Talking only about biological direct children, ignoring grandchildren and great-grandchildren.",
    "explanationMarkdown": "### Child Combinator (>)\n\nMatches only elements that are direct, immediate children of a specified parent element.\n\n```css\nul > li {\n  list-style-type: square;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Child Combinator (>)",
      "code": "ul > li {\n  list-style-type: square;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Child Combinator (>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Child Combinator (>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target direct children only */\n",
    "solutionCode": "ul > li {\n  list-style-type: square;\n}",
    "hints": [
      "Write:\nul > li {\n  list-style-type: square;\n}"
    ],
    "testCases": [
      {
        "id": "css-8-tc-1",
        "description": "Verifies correct implementation for Child Combinator (>)",
        "testFn": "code.includes('ul > li') && code.includes('list-style-type:')"
      }
    ]
  },
  {
    "id": "css-9-adjacent-sibling-combinator-+",
    "title": "9. Adjacent Sibling Combinator (+)",
    "slug": "lesson-9-adjacent-sibling-combinator-+",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Adjacent Sibling Combinator (+) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Adjacent Sibling Combinator (+)",
      "CSS3"
    ],
    "analogy": "Talking about the passenger sitting directly in the seat immediately behind you.",
    "explanationMarkdown": "### Adjacent Sibling Combinator (+)\n\nMatches an element that immediately follows another specific element at the same hierarchy level.\n\n```css\nh2 + p {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Adjacent Sibling Combinator (+)",
      "code": "h2 + p {\n  font-size: 1.25rem;\n  font-weight: 500;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adjacent Sibling Combinator (+).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adjacent Sibling Combinator (+).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target paragraph immediately following h2 */\n",
    "solutionCode": "h2 + p {\n  font-size: 1.25rem;\n  font-weight: 500;\n}",
    "hints": [
      "Write:\nh2 + p {\n  font-size: 1.25rem;\n  font-weight: 500;\n}"
    ],
    "testCases": [
      {
        "id": "css-9-tc-1",
        "description": "Verifies correct implementation for Adjacent Sibling Combinator (+)",
        "testFn": "code.includes('h2 + p') && code.includes('font-size:')"
      }
    ]
  },
  {
    "id": "css-10-general-sibling-combinator-~",
    "title": "10. General Sibling Combinator (~)",
    "slug": "lesson-10-general-sibling-combinator-~",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master General Sibling Combinator (~) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "General Sibling Combinator (~)",
      "CSS3"
    ],
    "analogy": "Talking to all your siblings standing anywhere behind you in line.",
    "explanationMarkdown": "### General Sibling Combinator (~)\n\nMatches all sibling elements that appear anywhere after the specified element under the same parent.\n\n```css\nh2 ~ p {\n  color: #334155;\n}\n```",
    "workedExample": {
      "title": "Worked Example: General Sibling Combinator (~)",
      "code": "h2 ~ p {\n  color: #334155;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for General Sibling Combinator (~).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of General Sibling Combinator (~).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target all sibling paragraphs after h2 */\n",
    "solutionCode": "h2 ~ p {\n  color: #334155;\n}",
    "hints": [
      "Write:\nh2 ~ p {\n  color: #334155;\n}"
    ],
    "testCases": [
      {
        "id": "css-10-tc-1",
        "description": "Verifies correct implementation for General Sibling Combinator (~)",
        "testFn": "code.includes('h2 ~ p') && code.includes('color:')"
      }
    ]
  },
  {
    "id": "css-11-attribute-selectors-[attr]-and-[",
    "title": "11. Attribute Selectors: [attr] and [attr=val]",
    "slug": "lesson-11-attribute-selectors-[attr]-and-[",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Attribute Selectors: [attr] and [attr=val] in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Attribute Selectors",
      "CSS3"
    ],
    "analogy": "Inspecting luggage tags for a 'Fragile' sticker and handling those bags with extra padding.",
    "explanationMarkdown": "### Attribute Selectors: [attr] and [attr=val]\n\nTargets elements based on the presence or exact value of an HTML attribute.\n\n```css\na[target=\"_blank\"] {\n  text-decoration: underline;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Attribute Selectors: [attr] and [attr=val]",
      "code": "a[target=\"_blank\"] {\n  text-decoration: underline;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Attribute Selectors: [attr] and [attr=val].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Attribute Selectors: [attr] and [attr=val].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target external links */\n",
    "solutionCode": "a[target=\"_blank\"] {\n  text-decoration: underline;\n}",
    "hints": [
      "Write:\na[target=\"_blank\"] {\n  text-decoration: underline;\n}"
    ],
    "testCases": [
      {
        "id": "css-11-tc-1",
        "description": "Verifies correct implementation for Attribute Selectors: [attr] and [attr=val]",
        "testFn": "code.includes('a[target=\"_blank\"]')"
      }
    ]
  },
  {
    "id": "css-12-substring-attribute-matching-[at",
    "title": "12. Substring Attribute Matching: [attr^=] and [attr*=]",
    "slug": "lesson-12-substring-attribute-matching-[at",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Substring Attribute Matching: [attr^=] and [attr*=] in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Substring Attribute Matching",
      "CSS3"
    ],
    "analogy": "Filtering phone numbers that start with a '+1' country code prefix.",
    "explanationMarkdown": "### Substring Attribute Matching: [attr^=] and [attr*=]\n\n`[attr^=val]` matches attributes starting with val; `[attr$=val]` matches ends; `[attr*=val]` matches substring.\n\n```css\na[href^=\"https://\"] {\n  color: #10b981;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Substring Attribute Matching: [attr^=] and [attr*=]",
      "code": "a[href^=\"https://\"] {\n  color: #10b981;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Substring Attribute Matching: [attr^=] and [attr*=].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Substring Attribute Matching: [attr^=] and [attr*=].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target secure https links */\n",
    "solutionCode": "a[href^=\"https://\"] {\n  color: #10b981;\n}",
    "hints": [
      "Write:\na[href^=\"https://\"] {\n  color: #10b981;\n}"
    ],
    "testCases": [
      {
        "id": "css-12-tc-1",
        "description": "Verifies correct implementation for Substring Attribute Matching: [attr^=] and [attr*=]",
        "testFn": "code.includes('a[href^=\"https://\"]')"
      }
    ]
  },
  {
    "id": "css-13-specificity-hierarchy-inline--id",
    "title": "13. Specificity Hierarchy: Inline > ID > Class > Tag",
    "slug": "lesson-13-specificity-hierarchy-inline--id",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Specificity Hierarchy: Inline > ID > Class > Tag in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Specificity Hierarchy",
      "CSS3"
    ],
    "analogy": "Browsers calculate specificity weights to determine which conflicting CSS rule wins.",
    "explanationMarkdown": "### Specificity Hierarchy: Inline > ID > Class > Tag\n\nLearn and master Specificity Hierarchy: Inline > ID > Class > Tag with practical hands-on code.\n\n```css\ncode.includes('#header .nav-item')\n```",
    "workedExample": {
      "title": "Worked Example: Specificity Hierarchy: Inline > ID > Class > Tag",
      "code": "code.includes('#header .nav-item')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Specificity Hierarchy: Inline > ID > Class > Tag.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Specificity Hierarchy: Inline > ID > Class > Tag.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Calculate specificity */\n/* ID: 100, Class: 10, Element: 1 */\n#header .nav-item {\n  color: #6366f1;\n}",
    "solutionCode": "code.includes('#header .nav-item')",
    "hints": [
      "Write:\ncode.includes('#header .nav-item')"
    ],
    "testCases": [
      {
        "id": "css-13-tc-1",
        "description": "Verifies correct implementation for Specificity Hierarchy: Inline > ID > Class > Tag",
        "testFn": "In a courtroom, a federal supreme judge overrides a district judge, who overrides a police officer."
      }
    ]
  },
  {
    "id": "css-14-the-!important-escape-hatch-and-",
    "title": "14. The !important Escape Hatch (And Its Perils)",
    "slug": "lesson-14-the-!important-escape-hatch-and-",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The !important Escape Hatch (And Its Perils) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The !important Escape Hatch (And Its Perils)",
      "CSS3"
    ],
    "analogy": "A presidential veto bypassing all normal congressional votes.",
    "explanationMarkdown": "### The !important Escape Hatch (And Its Perils)\n\nOverrides normal specificity cascade calculations. Use sparingly as it makes future overrides very difficult.\n\n```css\n.text-danger {\n  color: #ef4444 !important;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The !important Escape Hatch (And Its Perils)",
      "code": ".text-danger {\n  color: #ef4444 !important;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The !important Escape Hatch (And Its Perils).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The !important Escape Hatch (And Its Perils).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Force override rule */\n",
    "solutionCode": ".text-danger {\n  color: #ef4444 !important;\n}",
    "hints": [
      "Write:\n.text-danger {\n  color: #ef4444 !important;\n}"
    ],
    "testCases": [
      {
        "id": "css-14-tc-1",
        "description": "Verifies correct implementation for The !important Escape Hatch (And Its Perils)",
        "testFn": "code.includes('!important')"
      }
    ]
  },
  {
    "id": "css-15-cascading-order-and-source-order",
    "title": "15. Cascading Order and Source Order",
    "slug": "lesson-15-cascading-order-and-source-order",
    "language": "css",
    "category": "Module 1: CSS Syntax & Selectors",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Cascading Order and Source Order in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Cascading Order and Source Order",
      "CSS3"
    ],
    "analogy": "The most recent revision of a contract signed by both parties is the one that takes effect.",
    "explanationMarkdown": "### Cascading Order and Source Order\n\nWhen two rules have identical specificity, the one declared later in the CSS source file wins.\n\n```css\np {\n  color: blue;\n}\np {\n  color: red; /* Wins! */\n}\n```",
    "workedExample": {
      "title": "Worked Example: Cascading Order and Source Order",
      "code": "p {\n  color: blue;\n}\np {\n  color: red; /* Wins! */\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cascading Order and Source Order.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cascading Order and Source Order.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Later rules win on equal specificity */\n",
    "solutionCode": "p {\n  color: blue;\n}\np {\n  color: red; /* Wins! */\n}",
    "hints": [
      "Write:\np {\n  color: blue;\n}\np {\n  color: red; /* Wins! */\n}"
    ],
    "testCases": [
      {
        "id": "css-15-tc-1",
        "description": "Verifies correct implementation for Cascading Order and Source Order",
        "testFn": "code.includes('color: red')"
      }
    ]
  },
  {
    "id": "css-16-the-css-box-model-content,-paddi",
    "title": "16. The CSS Box Model: Content, Padding, Border, Margin",
    "slug": "lesson-16-the-css-box-model-content,-paddi",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The CSS Box Model: Content, Padding, Border, Margin in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The CSS Box Model",
      "CSS3"
    ],
    "analogy": "A parcel inside a shipping box: the item (content), bubble wrap (padding), cardboard (border), and distance to other boxes (margin).",
    "explanationMarkdown": "### The CSS Box Model: Content, Padding, Border, Margin\n\nEvery HTML element is rendered as a rectangular box comprising content, padding, border, and margin.\n\n```css\n.box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #cbd5e1;\n  margin: 16px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The CSS Box Model: Content, Padding, Border, Margin",
      "code": ".box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #cbd5e1;\n  margin: 16px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The CSS Box Model: Content, Padding, Border, Margin.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The CSS Box Model: Content, Padding, Border, Margin.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Explicit box model sizing */\n",
    "solutionCode": ".box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #cbd5e1;\n  margin: 16px;\n}",
    "hints": [
      "Write:\n.box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #cbd5e1;\n  margin: 16px;\n}"
    ],
    "testCases": [
      {
        "id": "css-16-tc-1",
        "description": "Verifies correct implementation for The CSS Box Model: Content, Padding, Border, Margin",
        "testFn": "code.includes('padding:') && code.includes('border:') && code.includes('margin:')"
      }
    ]
  },
  {
    "id": "css-17-box-sizing-border-box-vs-content",
    "title": "17. box-sizing: border-box vs content-box",
    "slug": "lesson-17-box-sizing-border-box-vs-content",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master box-sizing: border-box vs content-box in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "box-sizing",
      "CSS3"
    ],
    "analogy": "Measuring a suitcase by its exterior zipper size, so clothes stuffed inside never make the bag exceed airline limits.",
    "explanationMarkdown": "### box-sizing: border-box vs content-box\n\n`border-box` ensures `width` includes padding and borders, avoiding confusing box calculation overflow bugs.\n\n```css\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n```",
    "workedExample": {
      "title": "Worked Example: box-sizing: border-box vs content-box",
      "code": "*, *::before, *::after {\n  box-sizing: border-box;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for box-sizing: border-box vs content-box.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of box-sizing: border-box vs content-box.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Universal border-box reset */\n",
    "solutionCode": "*, *::before, *::after {\n  box-sizing: border-box;\n}",
    "hints": [
      "Write:\n*, *::before, *::after {\n  box-sizing: border-box;\n}"
    ],
    "testCases": [
      {
        "id": "css-17-tc-1",
        "description": "Verifies correct implementation for box-sizing: border-box vs content-box",
        "testFn": "code.includes('box-sizing: border-box')"
      }
    ]
  },
  {
    "id": "css-18-width,-max-width,-and-min-width",
    "title": "18. Width, Max-Width, and Min-Width",
    "slug": "lesson-18-width,-max-width,-and-min-width",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Width, Max-Width, and Min-Width in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Width, Max-Width, and Min-Width",
      "CSS3"
    ],
    "analogy": "An accordion that can stretch up to 1200px wide, but shrinks gracefully down to 320px on small screens.",
    "explanationMarkdown": "### Width, Max-Width, and Min-Width\n\n`max-width` prevents elements from stretching too wide on 4K screens while staying 100% fluid on mobile.\n\n```css\n.container {\n  width: 100%;\n  max-width: 1200px;\n  min-width: 320px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Width, Max-Width, and Min-Width",
      "code": ".container {\n  width: 100%;\n  max-width: 1200px;\n  min-width: 320px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Width, Max-Width, and Min-Width.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Width, Max-Width, and Min-Width.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Responsive container */\n",
    "solutionCode": ".container {\n  width: 100%;\n  max-width: 1200px;\n  min-width: 320px;\n}",
    "hints": [
      "Write:\n.container {\n  width: 100%;\n  max-width: 1200px;\n  min-width: 320px;\n}"
    ],
    "testCases": [
      {
        "id": "css-18-tc-1",
        "description": "Verifies correct implementation for Width, Max-Width, and Min-Width",
        "testFn": "code.includes('max-width:') && code.includes('min-width:')"
      }
    ]
  },
  {
    "id": "css-19-padding-shorthand-syntax-1,-2,-3",
    "title": "19. Padding Shorthand Syntax (1, 2, 3, 4 values)",
    "slug": "lesson-19-padding-shorthand-syntax-1,-2,-3",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Padding Shorthand Syntax (1, 2, 3, 4 values) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Padding Shorthand Syntax (1, 2, 3, 4 values)",
      "CSS3"
    ],
    "analogy": "A clock hand turning clockwise starting from 12 o'clock: Top, Right, Bottom, Left (TRBL).",
    "explanationMarkdown": "### Padding Shorthand Syntax (1, 2, 3, 4 values)\n\nShorthand: 1 value (all), 2 values (vertical horizontal), 3 values (top horiz bottom), 4 values (T R B L).\n\n```css\n.card {\n  padding: 12px 24px 16px 20px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Padding Shorthand Syntax (1, 2, 3, 4 values)",
      "code": ".card {\n  padding: 12px 24px 16px 20px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Padding Shorthand Syntax (1, 2, 3, 4 values).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Padding Shorthand Syntax (1, 2, 3, 4 values).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* 4-value clock order: Top Right Bottom Left */\n",
    "solutionCode": ".card {\n  padding: 12px 24px 16px 20px;\n}",
    "hints": [
      "Write:\n.card {\n  padding: 12px 24px 16px 20px;\n}"
    ],
    "testCases": [
      {
        "id": "css-19-tc-1",
        "description": "Verifies correct implementation for Padding Shorthand Syntax (1, 2, 3, 4 values)",
        "testFn": "code.includes('padding:')"
      }
    ]
  },
  {
    "id": "css-20-margin-shorthand-&-margin-auto-c",
    "title": "20. Margin Shorthand & Margin Auto Centering",
    "slug": "lesson-20-margin-shorthand-&-margin-auto-c",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Margin Shorthand & Margin Auto Centering in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Margin Shorthand & Margin Auto Centering",
      "CSS3"
    ],
    "analogy": "Two identical springs on either side of a picture frame centering it perfectly in the middle of a wall.",
    "explanationMarkdown": "### Margin Shorthand & Margin Auto Centering\n\n`margin: 0 auto` automatically balances left and right margins equally, perfectly centering fixed-width block elements.\n\n```css\n.main-card {\n  width: 600px;\n  margin: 0 auto;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Margin Shorthand & Margin Auto Centering",
      "code": ".main-card {\n  width: 600px;\n  margin: 0 auto;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Margin Shorthand & Margin Auto Centering.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Margin Shorthand & Margin Auto Centering.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Center block container horizontally */\n",
    "solutionCode": ".main-card {\n  width: 600px;\n  margin: 0 auto;\n}",
    "hints": [
      "Write:\n.main-card {\n  width: 600px;\n  margin: 0 auto;\n}"
    ],
    "testCases": [
      {
        "id": "css-20-tc-1",
        "description": "Verifies correct implementation for Margin Shorthand & Margin Auto Centering",
        "testFn": "code.includes('margin: 0 auto') || code.includes('margin: auto')"
      }
    ]
  },
  {
    "id": "css-21-margin-collapsing-phenomenon",
    "title": "21. Margin Collapsing Phenomenon",
    "slug": "lesson-21-margin-collapsing-phenomenon",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Margin Collapsing Phenomenon in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Margin Collapsing Phenomenon",
      "CSS3"
    ],
    "analogy": "Two overlapping bubbles merging into one bubble sized by whichever bubble was larger.",
    "explanationMarkdown": "### Margin Collapsing Phenomenon\n\nAdjacent vertical margins collapse into a single margin equal to the maximum of the two values.\n\n```css\nh1 {\n  margin-bottom: 30px;\n}\np {\n  margin-top: 20px;\n  /* Total space between them is 30px, NOT 50px! */\n}\n```",
    "workedExample": {
      "title": "Worked Example: Margin Collapsing Phenomenon",
      "code": "h1 {\n  margin-bottom: 30px;\n}\np {\n  margin-top: 20px;\n  /* Total space between them is 30px, NOT 50px! */\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Margin Collapsing Phenomenon.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Margin Collapsing Phenomenon.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Vertical margins collapse into the larger value */\n",
    "solutionCode": "h1 {\n  margin-bottom: 30px;\n}\np {\n  margin-top: 20px;\n  /* Total space between them is 30px, NOT 50px! */\n}",
    "hints": [
      "Write:\nh1 {\n  margin-bottom: 30px;\n}\np {\n  margin-top: 20px;\n  /* Total space between them is 30px, NOT 50px! */\n}"
    ],
    "testCases": [
      {
        "id": "css-21-tc-1",
        "description": "Verifies correct implementation for Margin Collapsing Phenomenon",
        "testFn": "code.includes('margin-bottom:') && code.includes('margin-top:')"
      }
    ]
  },
  {
    "id": "css-22-borders-width,-style,-and-color",
    "title": "22. Borders: Width, Style, and Color",
    "slug": "lesson-22-borders-width,-style,-and-color",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Borders: Width, Style, and Color in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Borders",
      "CSS3"
    ],
    "analogy": "A wooden photo frame with custom thickness, groove style, and mahogany stain.",
    "explanationMarkdown": "### Borders: Width, Style, and Color\n\nThe `border` shorthand configures width, line style (solid, dashed, dotted), and color.\n\n```css\n.callout {\n  border-left: 4px solid #6366f1;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Borders: Width, Style, and Color",
      "code": ".callout {\n  border-left: 4px solid #6366f1;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Borders: Width, Style, and Color.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Borders: Width, Style, and Color.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Border styling */\n",
    "solutionCode": ".callout {\n  border-left: 4px solid #6366f1;\n}",
    "hints": [
      "Write:\n.callout {\n  border-left: 4px solid #6366f1;\n}"
    ],
    "testCases": [
      {
        "id": "css-22-tc-1",
        "description": "Verifies correct implementation for Borders: Width, Style, and Color",
        "testFn": "code.includes('border-left:') || code.includes('border:')"
      }
    ]
  },
  {
    "id": "css-23-border-radius-and-rounded-avatar",
    "title": "23. Border Radius and Rounded Avatars",
    "slug": "lesson-23-border-radius-and-rounded-avatar",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Border Radius and Rounded Avatars in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Border Radius and Rounded Avatars",
      "CSS3"
    ],
    "analogy": "Sanding down the sharp corners of a square wooden block until it becomes a perfect round coin.",
    "explanationMarkdown": "### Border Radius and Rounded Avatars\n\n`border-radius: 50%` rounds corners proportionally, transforming a square element into a circle.\n\n```css\n.avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Border Radius and Rounded Avatars",
      "code": ".avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Border Radius and Rounded Avatars.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Border Radius and Rounded Avatars.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Create circular avatar */\n",
    "solutionCode": ".avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}",
    "hints": [
      "Write:\n.avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}"
    ],
    "testCases": [
      {
        "id": "css-23-tc-1",
        "description": "Verifies correct implementation for Border Radius and Rounded Avatars",
        "testFn": "code.includes('border-radius: 50%')"
      }
    ]
  },
  {
    "id": "css-24-box-shadows-x,-y,-blur,-spread,-",
    "title": "24. Box Shadows: X, Y, Blur, Spread, Color",
    "slug": "lesson-24-box-shadows-x,-y,-blur,-spread,-",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Box Shadows: X, Y, Blur, Spread, Color in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Box Shadows",
      "CSS3"
    ],
    "analogy": "A lamp hanging over a desk casting a soft diffused drop-shadow underneath a sheet of paper.",
    "explanationMarkdown": "### Box Shadows: X, Y, Blur, Spread, Color\n\n`box-shadow` simulates elevation using horizontal offset, vertical offset, blur radius, spread, and shadow color.\n\n```css\n.card {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Box Shadows: X, Y, Blur, Spread, Color",
      "code": ".card {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Box Shadows: X, Y, Blur, Spread, Color.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Box Shadows: X, Y, Blur, Spread, Color.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Subtle modern card elevation */\n",
    "solutionCode": ".card {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}",
    "hints": [
      "Write:\n.card {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}"
    ],
    "testCases": [
      {
        "id": "css-24-tc-1",
        "description": "Verifies correct implementation for Box Shadows: X, Y, Blur, Spread, Color",
        "testFn": "code.includes('box-shadow:')"
      }
    ]
  },
  {
    "id": "css-25-aspect-ratio-property-aspect-rat",
    "title": "25. Aspect Ratio Property (aspect-ratio: 16 / 9)",
    "slug": "lesson-25-aspect-ratio-property-aspect-rat",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Aspect Ratio Property (aspect-ratio: 16 / 9) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Aspect Ratio Property (aspect-ratio",
      "CSS3"
    ],
    "analogy": "A movie screen preserving cinematic proportions whether projected in a bedroom or an IMAX theater.",
    "explanationMarkdown": "### Aspect Ratio Property (aspect-ratio: 16 / 9)\n\n`aspect-ratio` maintains fixed width-to-height proportions automatically as elements resize.\n\n```css\n.video-player {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Aspect Ratio Property (aspect-ratio: 16 / 9)",
      "code": ".video-player {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Aspect Ratio Property (aspect-ratio: 16 / 9).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Aspect Ratio Property (aspect-ratio: 16 / 9).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Maintain widescreen video ratio */\n",
    "solutionCode": ".video-player {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n}",
    "hints": [
      "Write:\n.video-player {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n}"
    ],
    "testCases": [
      {
        "id": "css-25-tc-1",
        "description": "Verifies correct implementation for Aspect Ratio Property (aspect-ratio: 16 / 9)",
        "testFn": "code.includes('aspect-ratio: 16 / 9') || code.includes('aspect-ratio:')"
      }
    ]
  },
  {
    "id": "css-26-overflow-control-visible,-hidden",
    "title": "26. Overflow Control: visible, hidden, scroll, auto",
    "slug": "lesson-26-overflow-control-visible,-hidden",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Overflow Control: visible, hidden, scroll, auto in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Overflow Control",
      "CSS3"
    ],
    "analogy": "A cup filled with water: either it spills over the rim (visible), gets clipped (hidden), or gets a drain straw (scroll).",
    "explanationMarkdown": "### Overflow Control: visible, hidden, scroll, auto\n\n`overflow` dictates what happens when content exceeds the boundaries of its parent container.\n\n```css\n.scrollable-panel {\n  height: 400px;\n  overflow-y: auto;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Overflow Control: visible, hidden, scroll, auto",
      "code": ".scrollable-panel {\n  height: 400px;\n  overflow-y: auto;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Overflow Control: visible, hidden, scroll, auto.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Overflow Control: visible, hidden, scroll, auto.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Enable smooth scrolling on overflow */\n",
    "solutionCode": ".scrollable-panel {\n  height: 400px;\n  overflow-y: auto;\n}",
    "hints": [
      "Write:\n.scrollable-panel {\n  height: 400px;\n  overflow-y: auto;\n}"
    ],
    "testCases": [
      {
        "id": "css-26-tc-1",
        "description": "Verifies correct implementation for Overflow Control: visible, hidden, scroll, auto",
        "testFn": "code.includes('overflow-y: auto') || code.includes('overflow:')"
      }
    ]
  },
  {
    "id": "css-27-outline-vs-border-and-focus-ring",
    "title": "27. Outline vs Border and Focus Rings",
    "slug": "lesson-27-outline-vs-border-and-focus-ring",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Outline vs Border and Focus Rings in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Outline vs Border and Focus Rings",
      "CSS3"
    ],
    "analogy": "A glowing laser halo drawn outside a button without changing its physical dimensions.",
    "explanationMarkdown": "### Outline vs Border and Focus Rings\n\n`outline` is drawn outside the element border and does not trigger browser reflow or affect box dimensions.\n\n```css\nbutton:focus-visible {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Outline vs Border and Focus Rings",
      "code": "button:focus-visible {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Outline vs Border and Focus Rings.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Outline vs Border and Focus Rings.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Accessible focus ring that doesn't cause layout shift */\n",
    "solutionCode": "button:focus-visible {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}",
    "hints": [
      "Write:\nbutton:focus-visible {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}"
    ],
    "testCases": [
      {
        "id": "css-27-tc-1",
        "description": "Verifies correct implementation for Outline vs Border and Focus Rings",
        "testFn": "code.includes('outline:') && code.includes('outline-offset:')"
      }
    ]
  },
  {
    "id": "css-28-height-vs-min-height-gotchas-vh-",
    "title": "28. Height vs Min-Height Gotchas (vh units)",
    "slug": "lesson-28-height-vs-min-height-gotchas-vh-",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Height vs Min-Height Gotchas (vh units) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Height vs Min-Height Gotchas (vh units)",
      "CSS3"
    ],
    "analogy": "A doorway tall enough for anyone to walk through, but capable of stretching higher if a giant visits.",
    "explanationMarkdown": "### Height vs Min-Height Gotchas (vh units)\n\n`min-height: 100vh` ensures an element covers at least 100% of the viewport height without clipping overflow content.\n\n```css\n.hero {\n  min-height: 100vh;\n  display: flex;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Height vs Min-Height Gotchas (vh units)",
      "code": ".hero {\n  min-height: 100vh;\n  display: flex;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Height vs Min-Height Gotchas (vh units).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Height vs Min-Height Gotchas (vh units).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fullscreen hero section */\n",
    "solutionCode": ".hero {\n  min-height: 100vh;\n  display: flex;\n}",
    "hints": [
      "Write:\n.hero {\n  min-height: 100vh;\n  display: flex;\n}"
    ],
    "testCases": [
      {
        "id": "css-28-tc-1",
        "description": "Verifies correct implementation for Height vs Min-Height Gotchas (vh units)",
        "testFn": "code.includes('min-height: 100vh') || code.includes('min-height:')"
      }
    ]
  },
  {
    "id": "css-29-modern-viewport-units-svh,-lvh,-",
    "title": "29. Modern Viewport Units: svh, lvh, and dvh",
    "slug": "lesson-29-modern-viewport-units-svh,-lvh,-",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Modern Viewport Units: svh, lvh, and dvh in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Modern Viewport Units",
      "CSS3"
    ],
    "analogy": "A car convertible roof adjusting smoothly whether the top is up or down.",
    "explanationMarkdown": "### Modern Viewport Units: svh, lvh, and dvh\n\n`dvh` (dynamic viewport height) dynamically adjusts height as mobile browser address bars expand and collapse.\n\n```css\n.mobile-screen {\n  height: 100dvh;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Modern Viewport Units: svh, lvh, and dvh",
      "code": ".mobile-screen {\n  height: 100dvh;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modern Viewport Units: svh, lvh, and dvh.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modern Viewport Units: svh, lvh, and dvh.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Dynamic viewport height for mobile Safari */\n",
    "solutionCode": ".mobile-screen {\n  height: 100dvh;\n}",
    "hints": [
      "Write:\n.mobile-screen {\n  height: 100dvh;\n}"
    ],
    "testCases": [
      {
        "id": "css-29-tc-1",
        "description": "Verifies correct implementation for Modern Viewport Units: svh, lvh, and dvh",
        "testFn": "code.includes('dvh') || code.includes('svh')"
      }
    ]
  },
  {
    "id": "css-30-content-clipping-with-clip-path",
    "title": "30. Content Clipping with clip-path",
    "slug": "lesson-30-content-clipping-with-clip-path",
    "language": "css",
    "category": "Module 2: The Box Model & Sizing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Content Clipping with clip-path in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Content Clipping with clip-path",
      "CSS3"
    ],
    "analogy": "Using precision craft scissors to cut a sheet of paper into a sharp diagonal polygon.",
    "explanationMarkdown": "### Content Clipping with clip-path\n\n`clip-path` masks an element into geometric shapes like circles, ellipses, and multi-point polygons.\n\n```css\n.diagonal-banner {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Content Clipping with clip-path",
      "code": ".diagonal-banner {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Content Clipping with clip-path.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Content Clipping with clip-path.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Create diagonal banner slice */\n",
    "solutionCode": ".diagonal-banner {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}",
    "hints": [
      "Write:\n.diagonal-banner {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}"
    ],
    "testCases": [
      {
        "id": "css-30-tc-1",
        "description": "Verifies correct implementation for Content Clipping with clip-path",
        "testFn": "code.includes('clip-path:')"
      }
    ]
  },
  {
    "id": "css-31-color-formats-hex,-rgb,-rgba",
    "title": "31. Color Formats: HEX, RGB, RGBA",
    "slug": "lesson-31-color-formats-hex,-rgb,-rgba",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Color Formats: HEX, RGB, RGBA in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Color Formats",
      "CSS3"
    ],
    "analogy": "Mixing red, green, and blue spotlight beams on a dark theater stage.",
    "explanationMarkdown": "### Color Formats: HEX, RGB, RGBA\n\nHEX (#ffffff) and RGB(255, 255, 255) define color channels; the alpha channel controls transparency.\n\n```css\n.modal-backdrop {\n  background-color: rgba(15, 23, 42, 0.75);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Color Formats: HEX, RGB, RGBA",
      "code": ".modal-backdrop {\n  background-color: rgba(15, 23, 42, 0.75);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Color Formats: HEX, RGB, RGBA.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Color Formats: HEX, RGB, RGBA.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* RGBA translucent backdrop */\n",
    "solutionCode": ".modal-backdrop {\n  background-color: rgba(15, 23, 42, 0.75);\n}",
    "hints": [
      "Write:\n.modal-backdrop {\n  background-color: rgba(15, 23, 42, 0.75);\n}"
    ],
    "testCases": [
      {
        "id": "css-31-tc-1",
        "description": "Verifies correct implementation for Color Formats: HEX, RGB, RGBA",
        "testFn": "code.includes('rgba(') || code.includes('#')"
      }
    ]
  },
  {
    "id": "css-32-hsl-and-hsla-color-models",
    "title": "32. HSL and HSLA Color Models",
    "slug": "lesson-32-hsl-and-hsla-color-models",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master HSL and HSLA Color Models in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "HSL and HSLA Color Models",
      "CSS3"
    ],
    "analogy": "A color wheel dial: Hue (0-360 degrees), Saturation (vividness 0-100%), Lightness (brightness 0-100%).",
    "explanationMarkdown": "### HSL and HSLA Color Models\n\nHSL is human-intuitive: easily adjust lightness or saturation without recalculating RGB channels.\n\n```css\n.brand-badge {\n  background-color: hsl(238, 84%, 67%);\n}\n```",
    "workedExample": {
      "title": "Worked Example: HSL and HSLA Color Models",
      "code": ".brand-badge {\n  background-color: hsl(238, 84%, 67%);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HSL and HSLA Color Models.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HSL and HSLA Color Models.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Vivid primary brand color in HSL */\n",
    "solutionCode": ".brand-badge {\n  background-color: hsl(238, 84%, 67%);\n}",
    "hints": [
      "Write:\n.brand-badge {\n  background-color: hsl(238, 84%, 67%);\n}"
    ],
    "testCases": [
      {
        "id": "css-32-tc-1",
        "description": "Verifies correct implementation for HSL and HSLA Color Models",
        "testFn": "code.includes('hsl(')"
      }
    ]
  },
  {
    "id": "css-33-modern-oklch-color-space",
    "title": "33. Modern OKLCH Color Space",
    "slug": "lesson-33-modern-oklch-color-space",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Modern OKLCH Color Space in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Modern OKLCH Color Space",
      "CSS3"
    ],
    "analogy": "Calibrating monitor colors according to human eye physiology rather than computer hardware quirks.",
    "explanationMarkdown": "### Modern OKLCH Color Space\n\nOKLCH provides perceptually uniform lightness across different hues and accesses wider P3 color gamuts.\n\n```css\n.vibrant-accent {\n  color: oklch(0.65 0.24 260);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Modern OKLCH Color Space",
      "code": ".vibrant-accent {\n  color: oklch(0.65 0.24 260);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modern OKLCH Color Space.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modern OKLCH Color Space.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Perceptually uniform OKLCH color */\n",
    "solutionCode": ".vibrant-accent {\n  color: oklch(0.65 0.24 260);\n}",
    "hints": [
      "Write:\n.vibrant-accent {\n  color: oklch(0.65 0.24 260);\n}"
    ],
    "testCases": [
      {
        "id": "css-33-tc-1",
        "description": "Verifies correct implementation for Modern OKLCH Color Space",
        "testFn": "code.includes('oklch(')"
      }
    ]
  },
  {
    "id": "css-34-font-families-and-system-font-st",
    "title": "34. Font Families and System Font Stacks",
    "slug": "lesson-34-font-families-and-system-font-st",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Font Families and System Font Stacks in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Font Families and System Font Stacks",
      "CSS3"
    ],
    "analogy": "Choosing a fallback instrument in an orchestra if the principal violin is unavailable.",
    "explanationMarkdown": "### Font Families and System Font Stacks\n\nSpecifies a prioritized fallback list of font families; the browser renders the first installed option.\n\n```css\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Font Families and System Font Stacks",
      "code": "body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Font Families and System Font Stacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Font Families and System Font Stacks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fast native system font stack */\n",
    "solutionCode": "body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}",
    "hints": [
      "Write:\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}"
    ],
    "testCases": [
      {
        "id": "css-34-tc-1",
        "description": "Verifies correct implementation for Font Families and System Font Stacks",
        "testFn": "code.includes('font-family:') && code.includes('sans-serif')"
      }
    ]
  },
  {
    "id": "css-35-css-font-units-px-vs-em-vs-rem",
    "title": "35. CSS Font Units: px vs em vs rem",
    "slug": "lesson-35-css-font-units-px-vs-em-vs-rem",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master CSS Font Units: px vs em vs rem in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS Font Units",
      "CSS3"
    ],
    "analogy": "A standard meter stick locked in a Paris vault (rem) vs measuring by the length of your foot (em).",
    "explanationMarkdown": "### CSS Font Units: px vs em vs rem\n\n`rem` scales proportionally with the user's root browser font size, guaranteeing accessibility for low-vision users.\n\n```css\np {\n  font-size: 1.125rem; /* 18px */\n  line-height: 1.75;\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS Font Units: px vs em vs rem",
      "code": "p {\n  font-size: 1.125rem; /* 18px */\n  line-height: 1.75;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS Font Units: px vs em vs rem.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS Font Units: px vs em vs rem.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Accessible rem-based typography */\n",
    "solutionCode": "p {\n  font-size: 1.125rem; /* 18px */\n  line-height: 1.75;\n}",
    "hints": [
      "Write:\np {\n  font-size: 1.125rem; /* 18px */\n  line-height: 1.75;\n}"
    ],
    "testCases": [
      {
        "id": "css-35-tc-1",
        "description": "Verifies correct implementation for CSS Font Units: px vs em vs rem",
        "testFn": "code.includes('rem') && code.includes('font-size:')"
      }
    ]
  },
  {
    "id": "css-36-line-heights-and-vertical-rhythm",
    "title": "36. Line Heights and Vertical Rhythm",
    "slug": "lesson-36-line-heights-and-vertical-rhythm",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Line Heights and Vertical Rhythm in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Line Heights and Vertical Rhythm",
      "CSS3"
    ],
    "analogy": "The lined horizontal ruled lines on a school composition notebook.",
    "explanationMarkdown": "### Line Heights and Vertical Rhythm\n\nUnitless `line-height: 1.6` scales cleanly with font size, ensuring comfortable reading spacing between lines.\n\n```css\np {\n  line-height: 1.6;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Line Heights and Vertical Rhythm",
      "code": "p {\n  line-height: 1.6;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Line Heights and Vertical Rhythm.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Line Heights and Vertical Rhythm.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Clean readable body line-height */\n",
    "solutionCode": "p {\n  line-height: 1.6;\n}",
    "hints": [
      "Write:\np {\n  line-height: 1.6;\n}"
    ],
    "testCases": [
      {
        "id": "css-36-tc-1",
        "description": "Verifies correct implementation for Line Heights and Vertical Rhythm",
        "testFn": "code.includes('line-height:')"
      }
    ]
  },
  {
    "id": "css-37-letter-spacing-tracking-and-word",
    "title": "37. Letter Spacing (tracking) and Word Spacing",
    "slug": "lesson-37-letter-spacing-tracking-and-word",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Letter Spacing (tracking) and Word Spacing in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Letter Spacing (tracking) and Word Spacing",
      "CSS3"
    ],
    "analogy": "Adding breathing room between letters stamped on a luxury perfume bottle.",
    "explanationMarkdown": "### Letter Spacing (tracking) and Word Spacing\n\nIncreases or decreases the horizontal kerning spacing between text characters and words.\n\n```css\n.badge {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Letter Spacing (tracking) and Word Spacing",
      "code": ".badge {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Letter Spacing (tracking) and Word Spacing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Letter Spacing (tracking) and Word Spacing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Uppercase tracking for badges */\n",
    "solutionCode": ".badge {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}",
    "hints": [
      "Write:\n.badge {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}"
    ],
    "testCases": [
      {
        "id": "css-37-tc-1",
        "description": "Verifies correct implementation for Letter Spacing (tracking) and Word Spacing",
        "testFn": "code.includes('letter-spacing:') && code.includes('text-transform:')"
      }
    ]
  },
  {
    "id": "css-38-text-alignment-and-justification",
    "title": "38. Text Alignment and Justification",
    "slug": "lesson-38-text-alignment-and-justification",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Text Alignment and Justification in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Text Alignment and Justification",
      "CSS3"
    ],
    "analogy": "Pushing a stack of paper sheets to align with the left, right, or center of a desk.",
    "explanationMarkdown": "### Text Alignment and Justification\n\n`text-align` sets the horizontal alignment of inline content inside a block element.\n\n```css\n.hero-title {\n  text-align: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Text Alignment and Justification",
      "code": ".hero-title {\n  text-align: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Text Alignment and Justification.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Text Alignment and Justification.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Center heading text */\n",
    "solutionCode": ".hero-title {\n  text-align: center;\n}",
    "hints": [
      "Write:\n.hero-title {\n  text-align: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-38-tc-1",
        "description": "Verifies correct implementation for Text Alignment and Justification",
        "testFn": "code.includes('text-align: center') || code.includes('text-align:')"
      }
    ]
  },
  {
    "id": "css-39-text-decoration-and-custom-under",
    "title": "39. Text Decoration and Custom Underlines",
    "slug": "lesson-39-text-decoration-and-custom-under",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Text Decoration and Custom Underlines in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Text Decoration and Custom Underlines",
      "CSS3"
    ],
    "analogy": "Underlining a word with a colored gel pen without touching the descenders of 'p' and 'y'.",
    "explanationMarkdown": "### Text Decoration and Custom Underlines\n\nCustomizes underline line style, thickness, color, and vertical distance from baseline text.\n\n```css\na {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  text-decoration-color: #818cf8;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Text Decoration and Custom Underlines",
      "code": "a {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  text-decoration-color: #818cf8;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Text Decoration and Custom Underlines.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Text Decoration and Custom Underlines.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Modern styled underline offset */\n",
    "solutionCode": "a {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  text-decoration-color: #818cf8;\n}",
    "hints": [
      "Write:\na {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n  text-decoration-color: #818cf8;\n}"
    ],
    "testCases": [
      {
        "id": "css-39-tc-1",
        "description": "Verifies correct implementation for Text Decoration and Custom Underlines",
        "testFn": "code.includes('text-underline-offset:') || code.includes('text-decoration:')"
      }
    ]
  },
  {
    "id": "css-40-word-wrap-and-truncation-with-te",
    "title": "40. Word Wrap and Truncation with Text-Overflow Ellipsis",
    "slug": "lesson-40-word-wrap-and-truncation-with-te",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Word Wrap and Truncation with Text-Overflow Ellipsis in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Word Wrap and Truncation with Text-Overflow Ellipsis",
      "CSS3"
    ],
    "analogy": "A book spine cutting off a long title with '...' because the cover isn't wide enough.",
    "explanationMarkdown": "### Word Wrap and Truncation with Text-Overflow Ellipsis\n\nTruncates long strings cleanly with trailing ellipses without breaking container dimensions.\n\n```css\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Word Wrap and Truncation with Text-Overflow Ellipsis",
      "code": ".truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Word Wrap and Truncation with Text-Overflow Ellipsis.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Word Wrap and Truncation with Text-Overflow Ellipsis.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Single-line ellipsis truncate */\n",
    "solutionCode": ".truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
    "hints": [
      "Write:\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"
    ],
    "testCases": [
      {
        "id": "css-40-tc-1",
        "description": "Verifies correct implementation for Word Wrap and Truncation with Text-Overflow Ellipsis",
        "testFn": "code.includes('text-overflow: ellipsis') && code.includes('white-space: nowrap')"
      }
    ]
  },
  {
    "id": "css-41-web-fonts-with-@font-face",
    "title": "41. Web Fonts with @font-face",
    "slug": "lesson-41-web-fonts-with-@font-face",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Web Fonts with @font-face in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Web Fonts with @font-face",
      "CSS3"
    ],
    "analogy": "Shipping a custom calligraphy pen set inside the envelope alongside a wedding invitation.",
    "explanationMarkdown": "### Web Fonts with @font-face\n\nDownloads custom typeface files from your web server or CDN for custom typography branding.\n\n```css\n@font-face {\n  font-family: 'Geist';\n  src: url('/fonts/Geist.woff2') format('woff2');\n  font-display: swap;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Web Fonts with @font-face",
      "code": "@font-face {\n  font-family: 'Geist';\n  src: url('/fonts/Geist.woff2') format('woff2');\n  font-display: swap;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Web Fonts with @font-face.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Web Fonts with @font-face.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Load custom web font file */\n",
    "solutionCode": "@font-face {\n  font-family: 'Geist';\n  src: url('/fonts/Geist.woff2') format('woff2');\n  font-display: swap;\n}",
    "hints": [
      "Write:\n@font-face {\n  font-family: 'Geist';\n  src: url('/fonts/Geist.woff2') format('woff2');\n  font-display: swap;\n}"
    ],
    "testCases": [
      {
        "id": "css-41-tc-1",
        "description": "Verifies correct implementation for Web Fonts with @font-face",
        "testFn": "code.includes('@font-face') && code.includes('font-display: swap')"
      }
    ]
  },
  {
    "id": "css-42-font-display-swap-for-core-web-v",
    "title": "42. Font Display Swap for Core Web Vitals",
    "slug": "lesson-42-font-display-swap-for-core-web-v",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Font Display Swap for Core Web Vitals in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Font Display Swap for Core Web Vitals",
      "CSS3"
    ],
    "analogy": "Reading immediately with a placeholder lamp while waiting for the chandelier to turn on.",
    "explanationMarkdown": "### Font Display Swap for Core Web Vitals\n\n`font-display: swap` displays a system fallback font immediately until the custom font finishes downloading.\n\n```css\n@font-face {\n  font-family: 'Brand';\n  src: url('brand.woff2');\n  font-display: swap;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Font Display Swap for Core Web Vitals",
      "code": "@font-face {\n  font-family: 'Brand';\n  src: url('brand.woff2');\n  font-display: swap;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Font Display Swap for Core Web Vitals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Font Display Swap for Core Web Vitals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Prevent Invisible Flash of Text (FOIT) */\n",
    "solutionCode": "@font-face {\n  font-family: 'Brand';\n  src: url('brand.woff2');\n  font-display: swap;\n}",
    "hints": [
      "Write:\n@font-face {\n  font-family: 'Brand';\n  src: url('brand.woff2');\n  font-display: swap;\n}"
    ],
    "testCases": [
      {
        "id": "css-42-tc-1",
        "description": "Verifies correct implementation for Font Display Swap for Core Web Vitals",
        "testFn": "code.includes('font-display: swap')"
      }
    ]
  },
  {
    "id": "css-43-text-shadows-x,-y,-blur,-color",
    "title": "43. Text Shadows: X, Y, Blur, Color",
    "slug": "lesson-43-text-shadows-x,-y,-blur,-color",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Text Shadows: X, Y, Blur, Color in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Text Shadows",
      "CSS3"
    ],
    "analogy": "Carved stone letters casting a natural shadow into the wall behind them.",
    "explanationMarkdown": "### Text Shadows: X, Y, Blur, Color\n\nAdds drop shadows to individual text glyphs for contrast and visual depth.\n\n```css\nh1 {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Text Shadows: X, Y, Blur, Color",
      "code": "h1 {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Text Shadows: X, Y, Blur, Color.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Text Shadows: X, Y, Blur, Color.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Subtle letterpress text glow */\n",
    "solutionCode": "h1 {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}",
    "hints": [
      "Write:\nh1 {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}"
    ],
    "testCases": [
      {
        "id": "css-43-tc-1",
        "description": "Verifies correct implementation for Text Shadows: X, Y, Blur, Color",
        "testFn": "code.includes('text-shadow:')"
      }
    ]
  },
  {
    "id": "css-44-user-selection-prevention-with-u",
    "title": "44. User Selection Prevention with user-select",
    "slug": "lesson-44-user-selection-prevention-with-u",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master User Selection Prevention with user-select in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "User Selection Prevention with user-select",
      "CSS3"
    ],
    "analogy": "A laminated restaurant menu that you can touch and press without tearing or highlighting the ink.",
    "explanationMarkdown": "### User Selection Prevention with user-select\n\n`user-select: none` stops users from accidentally highlighting text when clicking interactive UI elements.\n\n```css\nbutton {\n  user-select: none;\n}\n```",
    "workedExample": {
      "title": "Worked Example: User Selection Prevention with user-select",
      "code": "button {\n  user-select: none;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for User Selection Prevention with user-select.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of User Selection Prevention with user-select.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Prevent button text highlight */\n",
    "solutionCode": "button {\n  user-select: none;\n}",
    "hints": [
      "Write:\nbutton {\n  user-select: none;\n}"
    ],
    "testCases": [
      {
        "id": "css-44-tc-1",
        "description": "Verifies correct implementation for User Selection Prevention with user-select",
        "testFn": "code.includes('user-select: none')"
      }
    ]
  },
  {
    "id": "css-45-form-accent-colors-with-accent-c",
    "title": "45. Form Accent Colors with accent-color",
    "slug": "lesson-45-form-accent-colors-with-accent-c",
    "language": "css",
    "category": "Module 3: Colors, Typography & Fonts",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Form Accent Colors with accent-color in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Form Accent Colors with accent-color",
      "CSS3"
    ],
    "analogy": "Dipping standard office staple pins into brand-colored paint.",
    "explanationMarkdown": "### Form Accent Colors with accent-color\n\nStyles the browser's native checkboxes, radios, range sliders, and progress bars in one line.\n\n```css\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  accent-color: #6366f1;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Form Accent Colors with accent-color",
      "code": "input[type=\"checkbox\"], input[type=\"radio\"] {\n  accent-color: #6366f1;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Form Accent Colors with accent-color.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Form Accent Colors with accent-color.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Brand checkboxes and radio buttons */\n",
    "solutionCode": "input[type=\"checkbox\"], input[type=\"radio\"] {\n  accent-color: #6366f1;\n}",
    "hints": [
      "Write:\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  accent-color: #6366f1;\n}"
    ],
    "testCases": [
      {
        "id": "css-45-tc-1",
        "description": "Verifies correct implementation for Form Accent Colors with accent-color",
        "testFn": "code.includes('accent-color:')"
      }
    ]
  },
  {
    "id": "css-46-display-modes-block-vs-inline-vs",
    "title": "46. Display Modes: block vs inline vs inline-block",
    "slug": "lesson-46-display-modes-block-vs-inline-vs",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Display Modes: block vs inline vs inline-block in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Display Modes",
      "CSS3"
    ],
    "analogy": "Bricks stacked vertically (block) vs beads strung on a necklace (inline) vs square beads that accept height and width (inline-block).",
    "explanationMarkdown": "### Display Modes: block vs inline vs inline-block\n\nGoverns how an element interacts with surrounding text flow and whether width/height apply.\n\n```css\n.tag {\n  display: inline-block;\n  padding: 4px 8px;\n  margin-right: 6px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Display Modes: block vs inline vs inline-block",
      "code": ".tag {\n  display: inline-block;\n  padding: 4px 8px;\n  margin-right: 6px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Display Modes: block vs inline vs inline-block.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Display Modes: block vs inline vs inline-block.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Inline-block tags */\n",
    "solutionCode": ".tag {\n  display: inline-block;\n  padding: 4px 8px;\n  margin-right: 6px;\n}",
    "hints": [
      "Write:\n.tag {\n  display: inline-block;\n  padding: 4px 8px;\n  margin-right: 6px;\n}"
    ],
    "testCases": [
      {
        "id": "css-46-tc-1",
        "description": "Verifies correct implementation for Display Modes: block vs inline vs inline-block",
        "testFn": "code.includes('display: inline-block') || code.includes('display: block')"
      }
    ]
  },
  {
    "id": "css-47-hiding-elements-display-none-vs-",
    "title": "47. Hiding Elements: display: none vs visibility: hidden",
    "slug": "lesson-47-hiding-elements-display-none-vs-",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Hiding Elements: display: none vs visibility: hidden in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Hiding Elements",
      "CSS3"
    ],
    "analogy": "Vaporizing a chair entirely (display: none) vs making the chair invisible so people still bump into it (visibility: hidden).",
    "explanationMarkdown": "### Hiding Elements: display: none vs visibility: hidden\n\n`display: none` removes the element from rendering flow entirely; `visibility: hidden` hides pixels but retains occupied space.\n\n```css\n.hidden-modal {\n  display: none;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Hiding Elements: display: none vs visibility: hidden",
      "code": ".hidden-modal {\n  display: none;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hiding Elements: display: none vs visibility: hidden.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hiding Elements: display: none vs visibility: hidden.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Completely remove from layout flow */\n",
    "solutionCode": ".hidden-modal {\n  display: none;\n}",
    "hints": [
      "Write:\n.hidden-modal {\n  display: none;\n}"
    ],
    "testCases": [
      {
        "id": "css-47-tc-1",
        "description": "Verifies correct implementation for Hiding Elements: display: none vs visibility: hidden",
        "testFn": "code.includes('display: none') || code.includes('visibility: hidden')"
      }
    ]
  },
  {
    "id": "css-48-position-static-the-default-norm",
    "title": "48. Position Static: The Default Normal Document Flow",
    "slug": "lesson-48-position-static-the-default-norm",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Position Static: The Default Normal Document Flow in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Position Static",
      "CSS3"
    ],
    "analogy": "Water flowing down a creek bed: following the natural path of gravity without intervention.",
    "explanationMarkdown": "### Position Static: The Default Normal Document Flow\n\nElements render in the natural document order; top/right/bottom/left/z-index properties have no effect.\n\n```css\n.standard-flow {\n  position: static;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Position Static: The Default Normal Document Flow",
      "code": ".standard-flow {\n  position: static;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Position Static: The Default Normal Document Flow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Position Static: The Default Normal Document Flow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Normal flow */\n",
    "solutionCode": ".standard-flow {\n  position: static;\n}",
    "hints": [
      "Write:\n.standard-flow {\n  position: static;\n}"
    ],
    "testCases": [
      {
        "id": "css-48-tc-1",
        "description": "Verifies correct implementation for Position Static: The Default Normal Document Flow",
        "testFn": "code.includes('position: static')"
      }
    ]
  },
  {
    "id": "css-49-position-relative-nudging-withou",
    "title": "49. Position Relative: Nudging Without Flow Disruption",
    "slug": "lesson-49-position-relative-nudging-withou",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Position Relative: Nudging Without Flow Disruption in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Position Relative",
      "CSS3"
    ],
    "analogy": "A dancer leaning their head to the left while their feet remain anchored to their floor mark.",
    "explanationMarkdown": "### Position Relative: Nudging Without Flow Disruption\n\nPositions an element relative to its normal position without disturbing the surrounding layout flow.\n\n```css\n.icon-offset {\n  position: relative;\n  top: 2px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Position Relative: Nudging Without Flow Disruption",
      "code": ".icon-offset {\n  position: relative;\n  top: 2px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Position Relative: Nudging Without Flow Disruption.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Position Relative: Nudging Without Flow Disruption.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Nudge icon 2px down */\n",
    "solutionCode": ".icon-offset {\n  position: relative;\n  top: 2px;\n}",
    "hints": [
      "Write:\n.icon-offset {\n  position: relative;\n  top: 2px;\n}"
    ],
    "testCases": [
      {
        "id": "css-49-tc-1",
        "description": "Verifies correct implementation for Position Relative: Nudging Without Flow Disruption",
        "testFn": "code.includes('position: relative')"
      }
    ]
  },
  {
    "id": "css-50-position-absolute-breaking-free-",
    "title": "50. Position Absolute: Breaking Free from the Page Flow",
    "slug": "lesson-50-position-absolute-breaking-free-",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Position Absolute: Breaking Free from the Page Flow in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Position Absolute",
      "CSS3"
    ],
    "analogy": "A postage stamp glued to the exact top-right corner of an envelope.",
    "explanationMarkdown": "### Position Absolute: Breaking Free from the Page Flow\n\nRemoves element from document flow and positions it relative to its closest positioned ancestor.\n\n```css\n.card {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Position Absolute: Breaking Free from the Page Flow",
      "code": ".card {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Position Absolute: Breaking Free from the Page Flow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Position Absolute: Breaking Free from the Page Flow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Position badge in top-right corner of relative card */\n",
    "solutionCode": ".card {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}",
    "hints": [
      "Write:\n.card {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}"
    ],
    "testCases": [
      {
        "id": "css-50-tc-1",
        "description": "Verifies correct implementation for Position Absolute: Breaking Free from the Page Flow",
        "testFn": "code.includes('position: absolute') && code.includes('position: relative')"
      }
    ]
  },
  {
    "id": "css-51-position-fixed-anchoring-to-the-",
    "title": "51. Position Fixed: Anchoring to the Viewport",
    "slug": "lesson-51-position-fixed-anchoring-to-the-",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Position Fixed: Anchoring to the Viewport in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Position Fixed",
      "CSS3"
    ],
    "analogy": "A pilot's heads-up display (HUD) projected on the windshield: never moves regardless of where the plane flies.",
    "explanationMarkdown": "### Position Fixed: Anchoring to the Viewport\n\nPositions an element relative to the browser viewport; it stays anchored in place when scrolling.\n\n```css\n.sticky-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 50;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Position Fixed: Anchoring to the Viewport",
      "code": ".sticky-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 50;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Position Fixed: Anchoring to the Viewport.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Position Fixed: Anchoring to the Viewport.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fixed navbar staying visible on scroll */\n",
    "solutionCode": ".sticky-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 50;\n}",
    "hints": [
      "Write:\n.sticky-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 50;\n}"
    ],
    "testCases": [
      {
        "id": "css-51-tc-1",
        "description": "Verifies correct implementation for Position Fixed: Anchoring to the Viewport",
        "testFn": "code.includes('position: fixed')"
      }
    ]
  },
  {
    "id": "css-52-position-sticky-the-scroll-hybri",
    "title": "52. Position Sticky: The Scroll Hybrid",
    "slug": "lesson-52-position-sticky-the-scroll-hybri",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Position Sticky: The Scroll Hybrid in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Position Sticky",
      "CSS3"
    ],
    "analogy": "A refrigerator magnet that scrolls with the paper until it reaches the top metal rim, where it clamps.",
    "explanationMarkdown": "### Position Sticky: The Scroll Hybrid\n\nBehaves like `relative` until its scroll threshold is reached, then sticks like `fixed` within its parent.\n\n```css\nth {\n  position: sticky;\n  top: 0;\n  background-color: #0f172a;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Position Sticky: The Scroll Hybrid",
      "code": "th {\n  position: sticky;\n  top: 0;\n  background-color: #0f172a;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Position Sticky: The Scroll Hybrid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Position Sticky: The Scroll Hybrid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Stick table header when scrolled into view */\n",
    "solutionCode": "th {\n  position: sticky;\n  top: 0;\n  background-color: #0f172a;\n}",
    "hints": [
      "Write:\nth {\n  position: sticky;\n  top: 0;\n  background-color: #0f172a;\n}"
    ],
    "testCases": [
      {
        "id": "css-52-tc-1",
        "description": "Verifies correct implementation for Position Sticky: The Scroll Hybrid",
        "testFn": "code.includes('position: sticky') && code.includes('top:')"
      }
    ]
  },
  {
    "id": "css-53-z-index-and-stacking-contexts",
    "title": "53. Z-Index and Stacking Contexts",
    "slug": "lesson-53-z-index-and-stacking-contexts",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Z-Index and Stacking Contexts in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Z-Index and Stacking Contexts",
      "CSS3"
    ],
    "analogy": "Layers of transparent celluloid sheets on an animator's desk: higher numbered sheets cover lower sheets.",
    "explanationMarkdown": "### Z-Index and Stacking Contexts\n\n`z-index` controls 3D vertical stacking order of positioned elements along the Z-axis.\n\n```css\n.dropdown-menu {\n  position: absolute;\n  z-index: 100;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Z-Index and Stacking Contexts",
      "code": ".dropdown-menu {\n  position: absolute;\n  z-index: 100;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Z-Index and Stacking Contexts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Z-Index and Stacking Contexts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Ensure dropdown renders above cards */\n",
    "solutionCode": ".dropdown-menu {\n  position: absolute;\n  z-index: 100;\n}",
    "hints": [
      "Write:\n.dropdown-menu {\n  position: absolute;\n  z-index: 100;\n}"
    ],
    "testCases": [
      {
        "id": "css-53-tc-1",
        "description": "Verifies correct implementation for Z-Index and Stacking Contexts",
        "testFn": "code.includes('z-index:')"
      }
    ]
  },
  {
    "id": "css-54-centering-with-absolute-position",
    "title": "54. Centering with Absolute Positioning and Transforms",
    "slug": "lesson-54-centering-with-absolute-position",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Centering with Absolute Positioning and Transforms in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Centering with Absolute Positioning and Transforms",
      "CSS3"
    ],
    "analogy": "Pushing a dart to the midpoint of a board, then shifting the dart body backward by half its length.",
    "explanationMarkdown": "### Centering with Absolute Positioning and Transforms\n\nCalculates exact horizontal and vertical center point without knowing element width or height.\n\n```css\n.centered-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Centering with Absolute Positioning and Transforms",
      "code": ".centered-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Centering with Absolute Positioning and Transforms.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Centering with Absolute Positioning and Transforms.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Classic absolute center */\n",
    "solutionCode": ".centered-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
    "hints": [
      "Write:\n.centered-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}"
    ],
    "testCases": [
      {
        "id": "css-54-tc-1",
        "description": "Verifies correct implementation for Centering with Absolute Positioning and Transforms",
        "testFn": "code.includes('top: 50%') && code.includes('transform: translate(-50%, -50%)')"
      }
    ]
  },
  {
    "id": "css-55-the-inset-shorthand-top,-right,-",
    "title": "55. The Inset Shorthand (top, right, bottom, left)",
    "slug": "lesson-55-the-inset-shorthand-top,-right,-",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Inset Shorthand (top, right, bottom, left) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Inset Shorthand (top, right, bottom, left)",
      "CSS3"
    ],
    "analogy": "Stretching a fitted bedsheet over all four mattress corners simultaneously.",
    "explanationMarkdown": "### The Inset Shorthand (top, right, bottom, left)\n\n`inset: 0` is modern shorthand for `top: 0; right: 0; bottom: 0; left: 0;`.\n\n```css\n.full-overlay {\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Inset Shorthand (top, right, bottom, left)",
      "code": ".full-overlay {\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Inset Shorthand (top, right, bottom, left).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Inset Shorthand (top, right, bottom, left).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fullscreen cover overlay */\n",
    "solutionCode": ".full-overlay {\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}",
    "hints": [
      "Write:\n.full-overlay {\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}"
    ],
    "testCases": [
      {
        "id": "css-55-tc-1",
        "description": "Verifies correct implementation for The Inset Shorthand (top, right, bottom, left)",
        "testFn": "code.includes('inset: 0') || code.includes('inset:')"
      }
    ]
  },
  {
    "id": "css-56-float-and-clearfix-legacy-archit",
    "title": "56. Float and Clearfix (Legacy Architecture)",
    "slug": "lesson-56-float-and-clearfix-legacy-archit",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Float and Clearfix (Legacy Architecture) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Float and Clearfix (Legacy Architecture)",
      "CSS3"
    ],
    "analogy": "Floating a magazine photo on the left side of a page while text wraps smoothly around it.",
    "explanationMarkdown": "### Float and Clearfix (Legacy Architecture)\n\nLegacy layout method; `clear: both` prevents following elements from wrapping around floated items.\n\n```css\n.float-left {\n  float: left;\n  margin-right: 16px;\n}\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Float and Clearfix (Legacy Architecture)",
      "code": ".float-left {\n  float: left;\n  margin-right: 16px;\n}\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Float and Clearfix (Legacy Architecture).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Float and Clearfix (Legacy Architecture).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Float image to the left */\n",
    "solutionCode": ".float-left {\n  float: left;\n  margin-right: 16px;\n}\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}",
    "hints": [
      "Write:\n.float-left {\n  float: left;\n  margin-right: 16px;\n}\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}"
    ],
    "testCases": [
      {
        "id": "css-56-tc-1",
        "description": "Verifies correct implementation for Float and Clearfix (Legacy Architecture)",
        "testFn": "code.includes('float:') || code.includes('clear:')"
      }
    ]
  },
  {
    "id": "css-57-vertical-alignment-of-inline-ele",
    "title": "57. Vertical Alignment of Inline Elements",
    "slug": "lesson-57-vertical-alignment-of-inline-ele",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Vertical Alignment of Inline Elements in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Vertical Alignment of Inline Elements",
      "CSS3"
    ],
    "analogy": "Adjusting whether a picture sits on the baseline of text or lines up with the middle of lowercase letters.",
    "explanationMarkdown": "### Vertical Alignment of Inline Elements\n\nControls the vertical positioning of inline and table-cell elements relative to their line box.\n\n```css\n.inline-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Vertical Alignment of Inline Elements",
      "code": ".inline-icon {\n  display: inline-block;\n  vertical-align: middle;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vertical Alignment of Inline Elements.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vertical Alignment of Inline Elements.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Align icon with adjacent text */\n",
    "solutionCode": ".inline-icon {\n  display: inline-block;\n  vertical-align: middle;\n}",
    "hints": [
      "Write:\n.inline-icon {\n  display: inline-block;\n  vertical-align: middle;\n}"
    ],
    "testCases": [
      {
        "id": "css-57-tc-1",
        "description": "Verifies correct implementation for Vertical Alignment of Inline Elements",
        "testFn": "code.includes('vertical-align: middle') || code.includes('vertical-align:')"
      }
    ]
  },
  {
    "id": "css-58-isolation-and-stacking-context-r",
    "title": "58. Isolation and Stacking Context Reset (isolation: isolate)",
    "slug": "lesson-58-isolation-and-stacking-context-r",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Isolation and Stacking Context Reset (isolation: isolate) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Isolation and Stacking Context Reset (isolation",
      "CSS3"
    ],
    "analogy": "Creating a soundproof glass wall in a skyscraper so elevator music doesn't leak into the boardroom.",
    "explanationMarkdown": "### Isolation and Stacking Context Reset (isolation: isolate)\n\nCreates a new stacking context without requiring dummy `z-index` or `position` declarations.\n\n```css\n.card-wrapper {\n  isolation: isolate;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Isolation and Stacking Context Reset (isolation: isolate)",
      "code": ".card-wrapper {\n  isolation: isolate;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Isolation and Stacking Context Reset (isolation: isolate).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Isolation and Stacking Context Reset (isolation: isolate).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Create new local stacking context */\n",
    "solutionCode": ".card-wrapper {\n  isolation: isolate;\n}",
    "hints": [
      "Write:\n.card-wrapper {\n  isolation: isolate;\n}"
    ],
    "testCases": [
      {
        "id": "css-58-tc-1",
        "description": "Verifies correct implementation for Isolation and Stacking Context Reset (isolation: isolate)",
        "testFn": "code.includes('isolation: isolate')"
      }
    ]
  },
  {
    "id": "css-59-pointer-events-control-pointer-e",
    "title": "59. Pointer Events Control (pointer-events: none)",
    "slug": "lesson-59-pointer-events-control-pointer-e",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pointer Events Control (pointer-events: none) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Pointer Events Control (pointer-events",
      "CSS3"
    ],
    "analogy": "A hologram projection: you can see the light beam, but your hand passes straight through to touch the wall behind it.",
    "explanationMarkdown": "### Pointer Events Control (pointer-events: none)\n\nPrevents elements from becoming the target of mouse and pointer events, passing clicks straight through.\n\n```css\n.decorative-glow {\n  pointer-events: none;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pointer Events Control (pointer-events: none)",
      "code": ".decorative-glow {\n  pointer-events: none;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pointer Events Control (pointer-events: none).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pointer Events Control (pointer-events: none).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Allow clicks to pass through decorative overlay */\n",
    "solutionCode": ".decorative-glow {\n  pointer-events: none;\n}",
    "hints": [
      "Write:\n.decorative-glow {\n  pointer-events: none;\n}"
    ],
    "testCases": [
      {
        "id": "css-59-tc-1",
        "description": "Verifies correct implementation for Pointer Events Control (pointer-events: none)",
        "testFn": "code.includes('pointer-events: none')"
      }
    ]
  },
  {
    "id": "css-60-backdrop-filters-and-frosted-gla",
    "title": "60. Backdrop Filters and Frosted Glass (Glassmorphism)",
    "slug": "lesson-60-backdrop-filters-and-frosted-gla",
    "language": "css",
    "category": "Module 4: Display & Positioning",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Backdrop Filters and Frosted Glass (Glassmorphism) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Backdrop Filters and Frosted Glass (Glassmorphism)",
      "CSS3"
    ],
    "analogy": "Looking through a frosted shower door where shapes behind the glass are gently blurred.",
    "explanationMarkdown": "### Backdrop Filters and Frosted Glass (Glassmorphism)\n\nApplies graphic effects (such as Gaussian blur) to the area immediately behind an element.\n\n```css\n.glass-card {\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Backdrop Filters and Frosted Glass (Glassmorphism)",
      "code": ".glass-card {\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Backdrop Filters and Frosted Glass (Glassmorphism).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Backdrop Filters and Frosted Glass (Glassmorphism).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Modern frosted glass card */\n",
    "solutionCode": ".glass-card {\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}",
    "hints": [
      "Write:\n.glass-card {\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}"
    ],
    "testCases": [
      {
        "id": "css-60-tc-1",
        "description": "Verifies correct implementation for Backdrop Filters and Frosted Glass (Glassmorphism)",
        "testFn": "code.includes('backdrop-filter: blur(')"
      }
    ]
  },
  {
    "id": "css-61-the-flex-container-display-flex",
    "title": "61. The Flex Container: display: flex",
    "slug": "lesson-61-the-flex-container-display-flex",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Flex Container: display: flex in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Flex Container",
      "CSS3"
    ],
    "analogy": "A conveyor belt that automatically arranges boxes side by side in a neat row.",
    "explanationMarkdown": "### The Flex Container: display: flex\n\nDeclaring `display: flex` transforms direct children into flex items aligned along a primary axis.\n\n```css\n.flex-container {\n  display: flex;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Flex Container: display: flex",
      "code": ".flex-container {\n  display: flex;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Flex Container: display: flex.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Flex Container: display: flex.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Turn container into flexbox */\n",
    "solutionCode": ".flex-container {\n  display: flex;\n}",
    "hints": [
      "Write:\n.flex-container {\n  display: flex;\n}"
    ],
    "testCases": [
      {
        "id": "css-61-tc-1",
        "description": "Verifies correct implementation for The Flex Container: display: flex",
        "testFn": "code.includes('display: flex')"
      }
    ]
  },
  {
    "id": "css-62-flex-direction-row-vs-column",
    "title": "62. Flex Direction: row vs column",
    "slug": "lesson-62-flex-direction-row-vs-column",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Flex Direction: row vs column in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Flex Direction",
      "CSS3"
    ],
    "analogy": "Arranging books on a shelf side by side (row) vs stacking them in a vertical pile (column).",
    "explanationMarkdown": "### Flex Direction: row vs column\n\nEstablishes the main axis: `row` (horizontal, default), `column` (vertical), or reverse directions.\n\n```css\n.sidebar {\n  display: flex;\n  flex-direction: column;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Flex Direction: row vs column",
      "code": ".sidebar {\n  display: flex;\n  flex-direction: column;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flex Direction: row vs column.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flex Direction: row vs column.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Stack items vertically */\n",
    "solutionCode": ".sidebar {\n  display: flex;\n  flex-direction: column;\n}",
    "hints": [
      "Write:\n.sidebar {\n  display: flex;\n  flex-direction: column;\n}"
    ],
    "testCases": [
      {
        "id": "css-62-tc-1",
        "description": "Verifies correct implementation for Flex Direction: row vs column",
        "testFn": "code.includes('flex-direction: column') || code.includes('flex-direction: row')"
      }
    ]
  },
  {
    "id": "css-63-main-axis-alignment-justify-cont",
    "title": "63. Main Axis Alignment: justify-content",
    "slug": "lesson-63-main-axis-alignment-justify-cont",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Main Axis Alignment: justify-content in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Main Axis Alignment",
      "CSS3"
    ],
    "analogy": "Sliding bead counters across an abacus wire: clump left, clump right, or spread out evenly.",
    "explanationMarkdown": "### Main Axis Alignment: justify-content\n\nAligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around, space-evenly).\n\n```css\n.navbar {\n  display: flex;\n  justify-content: space-between;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Main Axis Alignment: justify-content",
      "code": ".navbar {\n  display: flex;\n  justify-content: space-between;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Main Axis Alignment: justify-content.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Main Axis Alignment: justify-content.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Spread items evenly with space-between */\n",
    "solutionCode": ".navbar {\n  display: flex;\n  justify-content: space-between;\n}",
    "hints": [
      "Write:\n.navbar {\n  display: flex;\n  justify-content: space-between;\n}"
    ],
    "testCases": [
      {
        "id": "css-63-tc-1",
        "description": "Verifies correct implementation for Main Axis Alignment: justify-content",
        "testFn": "code.includes('justify-content: space-between') || code.includes('justify-content:')"
      }
    ]
  },
  {
    "id": "css-64-cross-axis-alignment-align-items",
    "title": "64. Cross Axis Alignment: align-items",
    "slug": "lesson-64-cross-axis-alignment-align-items",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Cross Axis Alignment: align-items in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Cross Axis Alignment",
      "CSS3"
    ],
    "analogy": "Centering people of different heights along an imaginary horizontal eye-level line.",
    "explanationMarkdown": "### Cross Axis Alignment: align-items\n\nAligns flex items along the cross axis (stretch, center, flex-start, flex-end, baseline).\n\n```css\n.header-bar {\n  display: flex;\n  align-items: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Cross Axis Alignment: align-items",
      "code": ".header-bar {\n  display: flex;\n  align-items: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cross Axis Alignment: align-items.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cross Axis Alignment: align-items.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Center items vertically */\n",
    "solutionCode": ".header-bar {\n  display: flex;\n  align-items: center;\n}",
    "hints": [
      "Write:\n.header-bar {\n  display: flex;\n  align-items: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-64-tc-1",
        "description": "Verifies correct implementation for Cross Axis Alignment: align-items",
        "testFn": "code.includes('align-items: center') || code.includes('align-items:')"
      }
    ]
  },
  {
    "id": "css-65-flex-wrapping-flex-wrap-wrap",
    "title": "65. Flex Wrapping: flex-wrap: wrap",
    "slug": "lesson-65-flex-wrapping-flex-wrap-wrap",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Flex Wrapping: flex-wrap: wrap in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Flex Wrapping",
      "CSS3"
    ],
    "analogy": "Typing words on a page: when a line gets full, words wrap naturally onto the next line down.",
    "explanationMarkdown": "### Flex Wrapping: flex-wrap: wrap\n\nBy default, flex items force themselves onto a single line. `wrap` allows overflowing items to wrap onto new lines.\n\n```css\n.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Flex Wrapping: flex-wrap: wrap",
      "code": ".card-grid {\n  display: flex;\n  flex-wrap: wrap;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flex Wrapping: flex-wrap: wrap.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flex Wrapping: flex-wrap: wrap.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Allow cards to wrap onto next line */\n",
    "solutionCode": ".card-grid {\n  display: flex;\n  flex-wrap: wrap;\n}",
    "hints": [
      "Write:\n.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n}"
    ],
    "testCases": [
      {
        "id": "css-65-tc-1",
        "description": "Verifies correct implementation for Flex Wrapping: flex-wrap: wrap",
        "testFn": "code.includes('flex-wrap: wrap')"
      }
    ]
  },
  {
    "id": "css-66-spacing-items-with-the-gap-prope",
    "title": "66. Spacing Items with the gap Property",
    "slug": "lesson-66-spacing-items-with-the-gap-prope",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Spacing Items with the gap Property in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Spacing Items with the gap Property",
      "CSS3"
    ],
    "analogy": "Setting uniform spacers between framed paintings on an art gallery wall.",
    "explanationMarkdown": "### Spacing Items with the gap Property\n\nDefines gutters between flex items without needing hacky margin tricks on child elements.\n\n```css\n.toolbar {\n  display: flex;\n  gap: 16px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Spacing Items with the gap Property",
      "code": ".toolbar {\n  display: flex;\n  gap: 16px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spacing Items with the gap Property.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spacing Items with the gap Property.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Add 16px space between flex items */\n",
    "solutionCode": ".toolbar {\n  display: flex;\n  gap: 16px;\n}",
    "hints": [
      "Write:\n.toolbar {\n  display: flex;\n  gap: 16px;\n}"
    ],
    "testCases": [
      {
        "id": "css-66-tc-1",
        "description": "Verifies correct implementation for Spacing Items with the gap Property",
        "testFn": "code.includes('gap: 16px') || code.includes('gap:')"
      }
    ]
  },
  {
    "id": "css-67-row-gap-and-column-gap",
    "title": "67. Row Gap and Column Gap",
    "slug": "lesson-67-row-gap-and-column-gap",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Row Gap and Column Gap in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Row Gap and Column Gap",
      "CSS3"
    ],
    "analogy": "Leaving wide aisles between desks front-to-back, but narrow space side-by-side.",
    "explanationMarkdown": "### Row Gap and Column Gap\n\nSets independent spacing gutters for rows and columns.\n\n```css\n.tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 12px;\n  column-gap: 8px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Row Gap and Column Gap",
      "code": ".tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 12px;\n  column-gap: 8px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Row Gap and Column Gap.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Row Gap and Column Gap.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Distinct horizontal and vertical gutters */\n",
    "solutionCode": ".tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 12px;\n  column-gap: 8px;\n}",
    "hints": [
      "Write:\n.tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 12px;\n  column-gap: 8px;\n}"
    ],
    "testCases": [
      {
        "id": "css-67-tc-1",
        "description": "Verifies correct implementation for Row Gap and Column Gap",
        "testFn": "code.includes('row-gap:') && code.includes('column-gap:')"
      }
    ]
  },
  {
    "id": "css-68-growing-flex-items-flex-grow",
    "title": "68. Growing Flex Items: flex-grow",
    "slug": "lesson-68-growing-flex-items-flex-grow",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Growing Flex Items: flex-grow in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Growing Flex Items",
      "CSS3"
    ],
    "analogy": "A sponge expanding to soak up whatever leftover liquid remains in the bowl.",
    "explanationMarkdown": "### Growing Flex Items: flex-grow\n\nDictates what proportion of leftover available space a flex item should absorb.\n\n```css\n.search-bar {\n  flex-grow: 1;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Growing Flex Items: flex-grow",
      "code": ".search-bar {\n  flex-grow: 1;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Growing Flex Items: flex-grow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Growing Flex Items: flex-grow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Allow search bar to fill remaining space */\n",
    "solutionCode": ".search-bar {\n  flex-grow: 1;\n}",
    "hints": [
      "Write:\n.search-bar {\n  flex-grow: 1;\n}"
    ],
    "testCases": [
      {
        "id": "css-68-tc-1",
        "description": "Verifies correct implementation for Growing Flex Items: flex-grow",
        "testFn": "code.includes('flex-grow: 1') || code.includes('flex-grow:')"
      }
    ]
  },
  {
    "id": "css-69-shrinking-flex-items-flex-shrink",
    "title": "69. Shrinking Flex Items: flex-shrink",
    "slug": "lesson-69-shrinking-flex-items-flex-shrink",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Shrinking Flex Items: flex-shrink in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Shrinking Flex Items",
      "CSS3"
    ],
    "analogy": "A solid diamond that refuses to compress when the walls of the room squeeze together.",
    "explanationMarkdown": "### Shrinking Flex Items: flex-shrink\n\nDetermines how much a flex item will shrink relative to other items when container space is tight. `0` prevents shrinking.\n\n```css\n.avatar {\n  flex-shrink: 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Shrinking Flex Items: flex-shrink",
      "code": ".avatar {\n  flex-shrink: 0;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shrinking Flex Items: flex-shrink.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shrinking Flex Items: flex-shrink.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Prevent avatar from being squished */\n",
    "solutionCode": ".avatar {\n  flex-shrink: 0;\n}",
    "hints": [
      "Write:\n.avatar {\n  flex-shrink: 0;\n}"
    ],
    "testCases": [
      {
        "id": "css-69-tc-1",
        "description": "Verifies correct implementation for Shrinking Flex Items: flex-shrink",
        "testFn": "code.includes('flex-shrink: 0') || code.includes('flex-shrink:')"
      }
    ]
  },
  {
    "id": "css-70-initial-flex-item-basis-flex-bas",
    "title": "70. Initial Flex Item Basis: flex-basis",
    "slug": "lesson-70-initial-flex-item-basis-flex-bas",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Initial Flex Item Basis: flex-basis in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Initial Flex Item Basis",
      "CSS3"
    ],
    "analogy": "The starting size of a balloon before you pump extra air into it or compress it.",
    "explanationMarkdown": "### Initial Flex Item Basis: flex-basis\n\nDefines the default size of an element before the remaining space is distributed via grow/shrink.\n\n```css\n.sidebar {\n  flex-basis: 250px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Initial Flex Item Basis: flex-basis",
      "code": ".sidebar {\n  flex-basis: 250px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Initial Flex Item Basis: flex-basis.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Initial Flex Item Basis: flex-basis.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Set initial ideal width */\n",
    "solutionCode": ".sidebar {\n  flex-basis: 250px;\n}",
    "hints": [
      "Write:\n.sidebar {\n  flex-basis: 250px;\n}"
    ],
    "testCases": [
      {
        "id": "css-70-tc-1",
        "description": "Verifies correct implementation for Initial Flex Item Basis: flex-basis",
        "testFn": "code.includes('flex-basis: 250px') || code.includes('flex-basis:')"
      }
    ]
  },
  {
    "id": "css-71-the-flex-shorthand-flex-1-1-auto",
    "title": "71. The Flex Shorthand: flex: 1 1 auto",
    "slug": "lesson-71-the-flex-shorthand-flex-1-1-auto",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Flex Shorthand: flex: 1 1 auto in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Flex Shorthand",
      "CSS3"
    ],
    "analogy": "A three-number combination lock configuring grow, shrink, and basis all in one.",
    "explanationMarkdown": "### The Flex Shorthand: flex: 1 1 auto\n\n`flex: <grow> <shrink> <basis>`. E.g., `flex: 1` expands to `flex: 1 1 0%`.\n\n```css\n.content-col {\n  flex: 1 1 0%;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Flex Shorthand: flex: 1 1 auto",
      "code": ".content-col {\n  flex: 1 1 0%;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Flex Shorthand: flex: 1 1 auto.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Flex Shorthand: flex: 1 1 auto.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Standard flex item shorthand */\n",
    "solutionCode": ".content-col {\n  flex: 1 1 0%;\n}",
    "hints": [
      "Write:\n.content-col {\n  flex: 1 1 0%;\n}"
    ],
    "testCases": [
      {
        "id": "css-71-tc-1",
        "description": "Verifies correct implementation for The Flex Shorthand: flex: 1 1 auto",
        "testFn": "code.includes('flex:')"
      }
    ]
  },
  {
    "id": "css-72-individual-cross-axis-override-a",
    "title": "72. Individual Cross Axis Override: align-self",
    "slug": "lesson-72-individual-cross-axis-override-a",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Individual Cross Axis Override: align-self in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Individual Cross Axis Override",
      "CSS3"
    ],
    "analogy": "One choir singer kneeling down while the rest of the choir stands upright.",
    "explanationMarkdown": "### Individual Cross Axis Override: align-self\n\nAllows a single flex item to override the container's `align-items` rule for itself.\n\n```css\n.logout-btn {\n  align-self: flex-end;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Individual Cross Axis Override: align-self",
      "code": ".logout-btn {\n  align-self: flex-end;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Individual Cross Axis Override: align-self.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Individual Cross Axis Override: align-self.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Push single button to the bottom */\n",
    "solutionCode": ".logout-btn {\n  align-self: flex-end;\n}",
    "hints": [
      "Write:\n.logout-btn {\n  align-self: flex-end;\n}"
    ],
    "testCases": [
      {
        "id": "css-72-tc-1",
        "description": "Verifies correct implementation for Individual Cross Axis Override: align-self",
        "testFn": "code.includes('align-self: flex-end') || code.includes('align-self:')"
      }
    ]
  },
  {
    "id": "css-73-reordering-flex-items-with-order",
    "title": "73. Reordering Flex Items with order",
    "slug": "lesson-73-reordering-flex-items-with-order",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Reordering Flex Items with order in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Reordering Flex Items with order",
      "CSS3"
    ],
    "analogy": "Swapping seat assignments at a dinner party without moving the physical table.",
    "explanationMarkdown": "### Reordering Flex Items with order\n\nChanges the visual display order of flex items without altering the underlying HTML DOM structure.\n\n```css\n.featured-badge {\n  order: -1;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Reordering Flex Items with order",
      "code": ".featured-badge {\n  order: -1;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reordering Flex Items with order.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reordering Flex Items with order.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Display featured badge first */\n",
    "solutionCode": ".featured-badge {\n  order: -1;\n}",
    "hints": [
      "Write:\n.featured-badge {\n  order: -1;\n}"
    ],
    "testCases": [
      {
        "id": "css-73-tc-1",
        "description": "Verifies correct implementation for Reordering Flex Items with order",
        "testFn": "code.includes('order: -1') || code.includes('order:')"
      }
    ]
  },
  {
    "id": "css-74-auto-margins-in-flexbox-the-secr",
    "title": "74. Auto Margins in Flexbox (The Secret Weapon)",
    "slug": "lesson-74-auto-margins-in-flexbox-the-secr",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Auto Margins in Flexbox (The Secret Weapon) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Auto Margins in Flexbox (The Secret Weapon)",
      "CSS3"
    ],
    "analogy": "A powerful magnet shoving everything else left while snapping you to the far right wall.",
    "explanationMarkdown": "### Auto Margins in Flexbox (The Secret Weapon)\n\nIn flexbox, `margin: auto` absorbs all available space along that axis, creating clean push layouts.\n\n```css\n.nav-profile {\n  margin-left: auto;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Auto Margins in Flexbox (The Secret Weapon)",
      "code": ".nav-profile {\n  margin-left: auto;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Auto Margins in Flexbox (The Secret Weapon).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Auto Margins in Flexbox (The Secret Weapon).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Push navigation profile to far right */\n",
    "solutionCode": ".nav-profile {\n  margin-left: auto;\n}",
    "hints": [
      "Write:\n.nav-profile {\n  margin-left: auto;\n}"
    ],
    "testCases": [
      {
        "id": "css-74-tc-1",
        "description": "Verifies correct implementation for Auto Margins in Flexbox (The Secret Weapon)",
        "testFn": "code.includes('margin-left: auto')"
      }
    ]
  },
  {
    "id": "css-75-multi-line-alignment-align-conte",
    "title": "75. Multi-Line Alignment: align-content",
    "slug": "lesson-75-multi-line-alignment-align-conte",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multi-Line Alignment: align-content in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Multi-Line Alignment",
      "CSS3"
    ],
    "analogy": "Aligning entire paragraphs of wrapped text inside a tall newspaper column.",
    "explanationMarkdown": "### Multi-Line Alignment: align-content\n\nAligns flex lines along the cross axis when there is extra space and items wrap onto multiple lines.\n\n```css\n.wrapped-container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 600px;\n  align-content: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Line Alignment: align-content",
      "code": ".wrapped-container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 600px;\n  align-content: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Line Alignment: align-content.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Line Alignment: align-content.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Pack wrapped lines tightly in center */\n",
    "solutionCode": ".wrapped-container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 600px;\n  align-content: center;\n}",
    "hints": [
      "Write:\n.wrapped-container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 600px;\n  align-content: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-75-tc-1",
        "description": "Verifies correct implementation for Multi-Line Alignment: align-content",
        "testFn": "code.includes('align-content:')"
      }
    ]
  },
  {
    "id": "css-76-perfect-dead-center-layout-in-3-",
    "title": "76. Perfect Dead-Center Layout in 3 Lines",
    "slug": "lesson-76-perfect-dead-center-layout-in-3-",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Perfect Dead-Center Layout in 3 Lines in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Perfect Dead-Center Layout in 3 Lines",
      "CSS3"
    ],
    "analogy": "A bullseye target dead in the center of the archery board.",
    "explanationMarkdown": "### Perfect Dead-Center Layout in 3 Lines\n\nThe quintessential modern layout pattern for centering modals, loaders, and banners.\n\n```css\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Perfect Dead-Center Layout in 3 Lines",
      "code": ".hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Perfect Dead-Center Layout in 3 Lines.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Perfect Dead-Center Layout in 3 Lines.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Center anything vertically and horizontally */\n",
    "solutionCode": ".hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    "hints": [
      "Write:\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-76-tc-1",
        "description": "Verifies correct implementation for Perfect Dead-Center Layout in 3 Lines",
        "testFn": "code.includes('display: flex') && code.includes('justify-content: center') && code.includes('align-items: center')"
      }
    ]
  },
  {
    "id": "css-77-sticky-footer-pattern-with-flexb",
    "title": "77. Sticky Footer Pattern with Flexbox",
    "slug": "lesson-77-sticky-footer-pattern-with-flexb",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Sticky Footer Pattern with Flexbox in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Sticky Footer Pattern with Flexbox",
      "CSS3"
    ],
    "analogy": "A spring inside an umbrella pole that keeps the handle at the bottom even when the canopy stretches.",
    "explanationMarkdown": "### Sticky Footer Pattern with Flexbox\n\nEnsures the footer hugs the bottom of short pages without overlapping long content.\n\n```css\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex-grow: 1;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Sticky Footer Pattern with Flexbox",
      "code": "body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex-grow: 1;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sticky Footer Pattern with Flexbox.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sticky Footer Pattern with Flexbox.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Push footer to bottom of viewport */\n",
    "solutionCode": "body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex-grow: 1;\n}",
    "hints": [
      "Write:\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain {\n  flex-grow: 1;\n}"
    ],
    "testCases": [
      {
        "id": "css-77-tc-1",
        "description": "Verifies correct implementation for Sticky Footer Pattern with Flexbox",
        "testFn": "code.includes('flex-direction: column') && code.includes('flex-grow: 1')"
      }
    ]
  },
  {
    "id": "css-78-the-media-object-pattern",
    "title": "78. The Media Object Pattern",
    "slug": "lesson-78-the-media-object-pattern",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Media Object Pattern in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Media Object Pattern",
      "CSS3"
    ],
    "analogy": "A passport photo clamped next to personal bio text on an ID card.",
    "explanationMarkdown": "### The Media Object Pattern\n\nA classic web component pattern pairing fixed media with fluid body content.\n\n```css\n.media {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Media Object Pattern",
      "code": ".media {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Media Object Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Media Object Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Classic avatar + body comment pattern */\n",
    "solutionCode": ".media {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}",
    "hints": [
      "Write:\n.media {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}"
    ],
    "testCases": [
      {
        "id": "css-78-tc-1",
        "description": "Verifies correct implementation for The Media Object Pattern",
        "testFn": "code.includes('display: flex') && code.includes('gap:')"
      }
    ]
  },
  {
    "id": "css-79-responsive-flex-navigation-bar",
    "title": "79. Responsive Flex Navigation Bar",
    "slug": "lesson-79-responsive-flex-navigation-bar",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Responsive Flex Navigation Bar in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Responsive Flex Navigation Bar",
      "CSS3"
    ],
    "analogy": "A modern app bar with a logo on the left and profile controls on the right.",
    "explanationMarkdown": "### Responsive Flex Navigation Bar\n\nPairs `space-between` and `align-items: center` for clean application navigation.\n\n```css\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Responsive Flex Navigation Bar",
      "code": ".nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Responsive Flex Navigation Bar.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Responsive Flex Navigation Bar.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Responsive header with flexbox */\n",
    "solutionCode": ".nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n}",
    "hints": [
      "Write:\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n}"
    ],
    "testCases": [
      {
        "id": "css-79-tc-1",
        "description": "Verifies correct implementation for Responsive Flex Navigation Bar",
        "testFn": "code.includes('justify-content: space-between') && code.includes('align-items: center')"
      }
    ]
  },
  {
    "id": "css-80-flexbox-capstone-interactive-das",
    "title": "80. Flexbox Capstone: Interactive Dashboard Cards",
    "slug": "lesson-80-flexbox-capstone-interactive-das",
    "language": "css",
    "category": "Module 5: Flexbox Layout Engine",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Flexbox Capstone: Interactive Dashboard Cards in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Flexbox Capstone",
      "CSS3"
    ],
    "analogy": "A modular set of suitcase organizers that pack side-by-side or stack when luggage space narrows.",
    "explanationMarkdown": "### Flexbox Capstone: Interactive Dashboard Cards\n\nA fluid, responsive card grid that auto-fits without requiring media queries.\n\n```css\n.card-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.card {\n  flex: 1 1 300px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Flexbox Capstone: Interactive Dashboard Cards",
      "code": ".card-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.card {\n  flex: 1 1 300px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flexbox Capstone: Interactive Dashboard Cards.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flexbox Capstone: Interactive Dashboard Cards.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Responsive card row with flex */\n",
    "solutionCode": ".card-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.card {\n  flex: 1 1 300px;\n}",
    "hints": [
      "Write:\n.card-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.card {\n  flex: 1 1 300px;\n}"
    ],
    "testCases": [
      {
        "id": "css-80-tc-1",
        "description": "Verifies correct implementation for Flexbox Capstone: Interactive Dashboard Cards",
        "testFn": "code.includes('flex: 1 1 300px') || code.includes('flex-wrap: wrap')"
      }
    ]
  },
  {
    "id": "css-81-the-grid-container-display-grid",
    "title": "81. The Grid Container: display: grid",
    "slug": "lesson-81-the-grid-container-display-grid",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Grid Container: display: grid in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Grid Container",
      "CSS3"
    ],
    "analogy": "Drawing a clean architectural grid on graph paper with both rows and columns simultaneously.",
    "explanationMarkdown": "### The Grid Container: display: grid\n\nTransforms an element into a grid container, enabling two-dimensional layout control over columns and rows.\n\n```css\n.grid-layout {\n  display: grid;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Grid Container: display: grid",
      "code": ".grid-layout {\n  display: grid;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Grid Container: display: grid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Grid Container: display: grid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Enable 2D grid layout */\n",
    "solutionCode": ".grid-layout {\n  display: grid;\n}",
    "hints": [
      "Write:\n.grid-layout {\n  display: grid;\n}"
    ],
    "testCases": [
      {
        "id": "css-81-tc-1",
        "description": "Verifies correct implementation for The Grid Container: display: grid",
        "testFn": "code.includes('display: grid')"
      }
    ]
  },
  {
    "id": "css-82-defining-columns-grid-template-c",
    "title": "82. Defining Columns: grid-template-columns",
    "slug": "lesson-82-defining-columns-grid-template-c",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Defining Columns: grid-template-columns in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Defining Columns",
      "CSS3"
    ],
    "analogy": "Dividing a wardrobe into three distinct vertical sections: hanging clothes, shelves, and shoes.",
    "explanationMarkdown": "### Defining Columns: grid-template-columns\n\nSpecifies the number and track widths of columns in the grid layout.\n\n```css\n.layout {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Defining Columns: grid-template-columns",
      "code": ".layout {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Columns: grid-template-columns.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Columns: grid-template-columns.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Create 3 fixed columns */\n",
    "solutionCode": ".layout {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}",
    "hints": [
      "Write:\n.layout {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}"
    ],
    "testCases": [
      {
        "id": "css-82-tc-1",
        "description": "Verifies correct implementation for Defining Columns: grid-template-columns",
        "testFn": "code.includes('grid-template-columns:')"
      }
    ]
  },
  {
    "id": "css-83-the-fractional-unit-fr",
    "title": "83. The Fractional Unit (fr)",
    "slug": "lesson-83-the-fractional-unit-fr",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Fractional Unit (fr) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The Fractional Unit (fr)",
      "CSS3"
    ],
    "analogy": "Cutting a birthday cake into equal proportional slices.",
    "explanationMarkdown": "### The Fractional Unit (fr)\n\nThe `fr` unit represents a fraction of the remaining free space in the grid container.\n\n```css\n.gallery {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The Fractional Unit (fr)",
      "code": ".gallery {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Fractional Unit (fr).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Fractional Unit (fr).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Split grid into 3 equal columns */\n",
    "solutionCode": ".gallery {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}",
    "hints": [
      "Write:\n.gallery {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}"
    ],
    "testCases": [
      {
        "id": "css-83-tc-1",
        "description": "Verifies correct implementation for The Fractional Unit (fr)",
        "testFn": "code.includes('1fr 1fr 1fr') || code.includes('grid-template-columns:')"
      }
    ]
  },
  {
    "id": "css-84-the-repeat-function",
    "title": "84. The repeat() Function",
    "slug": "lesson-84-the-repeat-function",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The repeat() Function in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The repeat() Function",
      "CSS3"
    ],
    "analogy": "A rubber stamp stamping out 12 identical columns in a single strike.",
    "explanationMarkdown": "### The repeat() Function\n\nSimplifies repetitive track declarations: `repeat(4, 1fr)` equals `1fr 1fr 1fr 1fr`.\n\n```css\n.twelve-col {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n```",
    "workedExample": {
      "title": "Worked Example: The repeat() Function",
      "code": ".twelve-col {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The repeat() Function.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The repeat() Function.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Repeat 12 columns cleanly */\n",
    "solutionCode": ".twelve-col {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}",
    "hints": [
      "Write:\n.twelve-col {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}"
    ],
    "testCases": [
      {
        "id": "css-84-tc-1",
        "description": "Verifies correct implementation for The repeat() Function",
        "testFn": "code.includes('repeat(')"
      }
    ]
  },
  {
    "id": "css-85-grid-gutters-with-gap",
    "title": "85. Grid Gutters with gap",
    "slug": "lesson-85-grid-gutters-with-gap",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Grid Gutters with gap in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Grid Gutters with gap",
      "CSS3"
    ],
    "analogy": "The mortar lines between stone bricks in a brick wall.",
    "explanationMarkdown": "### Grid Gutters with gap\n\nSets the spacing gutters between both rows and columns in the grid.\n\n```css\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Grid Gutters with gap",
      "code": ".dashboard {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grid Gutters with gap.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grid Gutters with gap.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Set 24px grid gutter */\n",
    "solutionCode": ".dashboard {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}",
    "hints": [
      "Write:\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}"
    ],
    "testCases": [
      {
        "id": "css-85-tc-1",
        "description": "Verifies correct implementation for Grid Gutters with gap",
        "testFn": "code.includes('gap: 24px') || code.includes('gap:')"
      }
    ]
  },
  {
    "id": "css-86-adaptive-columns-with-minmax",
    "title": "86. Adaptive Columns with minmax()",
    "slug": "lesson-86-adaptive-columns-with-minmax",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Adaptive Columns with minmax() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Adaptive Columns with minmax()",
      "CSS3"
    ],
    "analogy": "A rubber luggage strap that can stretch freely but never collapses below 250mm.",
    "explanationMarkdown": "### Adaptive Columns with minmax()\n\nSets a minimum and maximum size boundary for grid tracks.\n\n```css\n.cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n}\n```",
    "workedExample": {
      "title": "Worked Example: Adaptive Columns with minmax()",
      "code": ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adaptive Columns with minmax().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adaptive Columns with minmax().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Columns never shrink below 250px */\n",
    "solutionCode": ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n}",
    "hints": [
      "Write:\n.cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n}"
    ],
    "testCases": [
      {
        "id": "css-86-tc-1",
        "description": "Verifies correct implementation for Adaptive Columns with minmax()",
        "testFn": "code.includes('minmax(')"
      }
    ]
  },
  {
    "id": "css-87-auto-fit-vs-auto-fill-responsive",
    "title": "87. Auto-Fit vs Auto-Fill Responsive Grid",
    "slug": "lesson-87-auto-fit-vs-auto-fill-responsive",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Auto-Fit vs Auto-Fill Responsive Grid in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Auto-Fit vs Auto-Fill Responsive Grid",
      "CSS3"
    ],
    "analogy": "A smart vending machine rack that automatically slides in as many product columns as fit on the shelf.",
    "explanationMarkdown": "### Auto-Fit vs Auto-Fill Responsive Grid\n\nThe gold-standard responsive grid pattern: packs as many columns as will fit and stretches them fluidly.\n\n```css\n.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Auto-Fit vs Auto-Fill Responsive Grid",
      "code": ".auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Auto-Fit vs Auto-Fill Responsive Grid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Auto-Fit vs Auto-Fill Responsive Grid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Responsive grid without media queries! */\n",
    "solutionCode": ".auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}",
    "hints": [
      "Write:\n.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}"
    ],
    "testCases": [
      {
        "id": "css-87-tc-1",
        "description": "Verifies correct implementation for Auto-Fit vs Auto-Fill Responsive Grid",
        "testFn": "code.includes('auto-fit') && code.includes('minmax(')"
      }
    ]
  },
  {
    "id": "css-88-placing-items-with-grid-column-a",
    "title": "88. Placing Items with grid-column and grid-row",
    "slug": "lesson-88-placing-items-with-grid-column-a",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Placing Items with grid-column and grid-row in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Placing Items with grid-column and grid-row",
      "CSS3"
    ],
    "analogy": "A double-wide parking space occupying slots 1 through 3.",
    "explanationMarkdown": "### Placing Items with grid-column and grid-row\n\nSpecifies an item's start and end grid lines along the column axis.\n\n```css\n.hero-card {\n  grid-column: 1 / 3;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Placing Items with grid-column and grid-row",
      "code": ".hero-card {\n  grid-column: 1 / 3;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Placing Items with grid-column and grid-row.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Placing Items with grid-column and grid-row.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Span card across 2 columns */\n",
    "solutionCode": ".hero-card {\n  grid-column: 1 / 3;\n}",
    "hints": [
      "Write:\n.hero-card {\n  grid-column: 1 / 3;\n}"
    ],
    "testCases": [
      {
        "id": "css-88-tc-1",
        "description": "Verifies correct implementation for Placing Items with grid-column and grid-row",
        "testFn": "code.includes('grid-column:')"
      }
    ]
  },
  {
    "id": "css-89-spanning-shorthand-span-keyword",
    "title": "89. Spanning Shorthand (span keyword)",
    "slug": "lesson-89-spanning-shorthand-span-keyword",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Spanning Shorthand (span keyword) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Spanning Shorthand (span keyword)",
      "CSS3"
    ],
    "analogy": "An oversized banner claiming the next 3 billboard spaces in a row.",
    "explanationMarkdown": "### Spanning Shorthand (span keyword)\n\n`span 3` tells an item to occupy 3 tracks from its current flow position.\n\n```css\n.wide-banner {\n  grid-column: span 3;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Spanning Shorthand (span keyword)",
      "code": ".wide-banner {\n  grid-column: span 3;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Spanning Shorthand (span keyword).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Spanning Shorthand (span keyword).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Span 3 columns from current position */\n",
    "solutionCode": ".wide-banner {\n  grid-column: span 3;\n}",
    "hints": [
      "Write:\n.wide-banner {\n  grid-column: span 3;\n}"
    ],
    "testCases": [
      {
        "id": "css-89-tc-1",
        "description": "Verifies correct implementation for Spanning Shorthand (span keyword)",
        "testFn": "code.includes('grid-column: span') || code.includes('span 3')"
      }
    ]
  },
  {
    "id": "css-90-named-grid-areas-grid-template-a",
    "title": "90. Named Grid Areas: grid-template-areas",
    "slug": "lesson-90-named-grid-areas-grid-template-a",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Named Grid Areas: grid-template-areas in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Named Grid Areas",
      "CSS3"
    ],
    "analogy": "A floor plan blueprint labeled with room names: Kitchen, Living Room, Bedroom.",
    "explanationMarkdown": "### Named Grid Areas: grid-template-areas\n\nMaps out the entire two-dimensional page structure visually using ASCII-like string templates.\n\n```css\n.site-layout {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'footer footer';\n}\n```",
    "workedExample": {
      "title": "Worked Example: Named Grid Areas: grid-template-areas",
      "code": ".site-layout {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'footer footer';\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Named Grid Areas: grid-template-areas.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Named Grid Areas: grid-template-areas.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Visual layout map */\n",
    "solutionCode": ".site-layout {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'footer footer';\n}",
    "hints": [
      "Write:\n.site-layout {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'footer footer';\n}"
    ],
    "testCases": [
      {
        "id": "css-90-tc-1",
        "description": "Verifies correct implementation for Named Grid Areas: grid-template-areas",
        "testFn": "code.includes('grid-template-areas:')"
      }
    ]
  },
  {
    "id": "css-91-assigning-elements-to-areas-grid",
    "title": "91. Assigning Elements to Areas: grid-area",
    "slug": "lesson-91-assigning-elements-to-areas-grid",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Assigning Elements to Areas: grid-area in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Assigning Elements to Areas",
      "CSS3"
    ],
    "analogy": "Placing the kitchen refrigerator into the kitchen zone designated on the blueprint.",
    "explanationMarkdown": "### Assigning Elements to Areas: grid-area\n\nConnects a child element directly to a named grid area defined in `grid-template-areas`.\n\n```css\nheader {\n  grid-area: header;\n}\nmain {\n  grid-area: main;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Assigning Elements to Areas: grid-area",
      "code": "header {\n  grid-area: header;\n}\nmain {\n  grid-area: main;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Assigning Elements to Areas: grid-area.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Assigning Elements to Areas: grid-area.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Assign header to template area */\n",
    "solutionCode": "header {\n  grid-area: header;\n}\nmain {\n  grid-area: main;\n}",
    "hints": [
      "Write:\nheader {\n  grid-area: header;\n}\nmain {\n  grid-area: main;\n}"
    ],
    "testCases": [
      {
        "id": "css-91-tc-1",
        "description": "Verifies correct implementation for Assigning Elements to Areas: grid-area",
        "testFn": "code.includes('grid-area: header') || code.includes('grid-area:')"
      }
    ]
  },
  {
    "id": "css-92-implicit-vs-explicit-grids",
    "title": "92. Implicit vs Explicit Grids",
    "slug": "lesson-92-implicit-vs-explicit-grids",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Implicit vs Explicit Grids in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Implicit vs Explicit Grids",
      "CSS3"
    ],
    "analogy": "Pre-reserved theater seats (explicit) vs adding extra folding chairs when extra guests arrive (implicit).",
    "explanationMarkdown": "### Implicit vs Explicit Grids\n\nThe explicit grid is defined via `grid-template-*`; the implicit grid handles items that overflow those tracks.\n\n```css\n.grid {\n  display: grid;\n  grid-auto-rows: 200px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Implicit vs Explicit Grids",
      "code": ".grid {\n  display: grid;\n  grid-auto-rows: 200px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Implicit vs Explicit Grids.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Implicit vs Explicit Grids.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Control implicit row heights */\n",
    "solutionCode": ".grid {\n  display: grid;\n  grid-auto-rows: 200px;\n}",
    "hints": [
      "Write:\n.grid {\n  display: grid;\n  grid-auto-rows: 200px;\n}"
    ],
    "testCases": [
      {
        "id": "css-92-tc-1",
        "description": "Verifies correct implementation for Implicit vs Explicit Grids",
        "testFn": "code.includes('grid-auto-rows:')"
      }
    ]
  },
  {
    "id": "css-93-dense-auto-placement-with-grid-a",
    "title": "93. Dense Auto-Placement with grid-auto-flow: dense",
    "slug": "lesson-93-dense-auto-placement-with-grid-a",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Dense Auto-Placement with grid-auto-flow: dense in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Dense Auto-Placement with grid-auto-flow",
      "CSS3"
    ],
    "analogy": "Playing Tetris: sliding smaller blocks down into gaps left by larger blocks.",
    "explanationMarkdown": "### Dense Auto-Placement with grid-auto-flow: dense\n\nFills holes earlier in the grid if smaller items come up later in DOM order.\n\n```css\n.gallery {\n  display: grid;\n  grid-auto-flow: dense;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dense Auto-Placement with grid-auto-flow: dense",
      "code": ".gallery {\n  display: grid;\n  grid-auto-flow: dense;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dense Auto-Placement with grid-auto-flow: dense.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dense Auto-Placement with grid-auto-flow: dense.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fill empty gaps in grid automatically */\n",
    "solutionCode": ".gallery {\n  display: grid;\n  grid-auto-flow: dense;\n}",
    "hints": [
      "Write:\n.gallery {\n  display: grid;\n  grid-auto-flow: dense;\n}"
    ],
    "testCases": [
      {
        "id": "css-93-tc-1",
        "description": "Verifies correct implementation for Dense Auto-Placement with grid-auto-flow: dense",
        "testFn": "code.includes('grid-auto-flow: dense')"
      }
    ]
  },
  {
    "id": "css-94-alignment-in-grid-justify-items-",
    "title": "94. Alignment in Grid: justify-items and align-items",
    "slug": "lesson-94-alignment-in-grid-justify-items-",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Alignment in Grid: justify-items and align-items in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Alignment in Grid",
      "CSS3"
    ],
    "analogy": "Centering every single egg inside each separate pocket of an egg carton.",
    "explanationMarkdown": "### Alignment in Grid: justify-items and align-items\n\nAligns all items inside their respective grid cells along inline (horizontal) and block (vertical) axes.\n\n```css\n.icons-grid {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Alignment in Grid: justify-items and align-items",
      "code": ".icons-grid {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Alignment in Grid: justify-items and align-items.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Alignment in Grid: justify-items and align-items.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Center content inside every grid cell */\n",
    "solutionCode": ".icons-grid {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}",
    "hints": [
      "Write:\n.icons-grid {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-94-tc-1",
        "description": "Verifies correct implementation for Alignment in Grid: justify-items and align-items",
        "testFn": "code.includes('justify-items: center') || code.includes('align-items: center')"
      }
    ]
  },
  {
    "id": "css-95-single-item-alignment-justify-se",
    "title": "95. Single Item Alignment: justify-self and align-self",
    "slug": "lesson-95-single-item-alignment-justify-se",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Single Item Alignment: justify-self and align-self in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Single Item Alignment",
      "CSS3"
    ],
    "analogy": "Pushing one specific trophy to the top-right corner of its display shelf.",
    "explanationMarkdown": "### Single Item Alignment: justify-self and align-self\n\nAllows an individual grid item to override its cell alignment.\n\n```css\n.corner-pin {\n  justify-self: end;\n  align-self: start;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Single Item Alignment: justify-self and align-self",
      "code": ".corner-pin {\n  justify-self: end;\n  align-self: start;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Single Item Alignment: justify-self and align-self.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Single Item Alignment: justify-self and align-self.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Push single item to cell corner */\n",
    "solutionCode": ".corner-pin {\n  justify-self: end;\n  align-self: start;\n}",
    "hints": [
      "Write:\n.corner-pin {\n  justify-self: end;\n  align-self: start;\n}"
    ],
    "testCases": [
      {
        "id": "css-95-tc-1",
        "description": "Verifies correct implementation for Single Item Alignment: justify-self and align-self",
        "testFn": "code.includes('justify-self:') || code.includes('align-self:')"
      }
    ]
  },
  {
    "id": "css-96-the-place-items-shorthand",
    "title": "96. The place-items Shorthand",
    "slug": "lesson-96-the-place-items-shorthand",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The place-items Shorthand in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The place-items Shorthand",
      "CSS3"
    ],
    "analogy": "A single lever centering everything horizontally and vertically simultaneously.",
    "explanationMarkdown": "### The place-items Shorthand\n\n`place-items: center` combines `align-items` and `justify-items` into a single declaration.\n\n```css\n.center-grid {\n  display: grid;\n  place-items: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The place-items Shorthand",
      "code": ".center-grid {\n  display: grid;\n  place-items: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The place-items Shorthand.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The place-items Shorthand.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Super-short center shorthand */\n",
    "solutionCode": ".center-grid {\n  display: grid;\n  place-items: center;\n}",
    "hints": [
      "Write:\n.center-grid {\n  display: grid;\n  place-items: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-96-tc-1",
        "description": "Verifies correct implementation for The place-items Shorthand",
        "testFn": "code.includes('place-items: center')"
      }
    ]
  },
  {
    "id": "css-97-grid-subgrid-inheriting-parent-t",
    "title": "97. Grid Subgrid: Inheriting Parent Tracks",
    "slug": "lesson-97-grid-subgrid-inheriting-parent-t",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Grid Subgrid: Inheriting Parent Tracks in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Grid Subgrid",
      "CSS3"
    ],
    "analogy": "Building interior shelves that snap directly into the master vertical wall studs of the room.",
    "explanationMarkdown": "### Grid Subgrid: Inheriting Parent Tracks\n\n`subgrid` allows nested child grids to inherit and align with the track lines of their parent grid.\n\n```css\n.card-inner {\n  display: grid;\n  grid-template-columns: subgrid;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Grid Subgrid: Inheriting Parent Tracks",
      "code": ".card-inner {\n  display: grid;\n  grid-template-columns: subgrid;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grid Subgrid: Inheriting Parent Tracks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grid Subgrid: Inheriting Parent Tracks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Share parent column lines with nested card */\n",
    "solutionCode": ".card-inner {\n  display: grid;\n  grid-template-columns: subgrid;\n}",
    "hints": [
      "Write:\n.card-inner {\n  display: grid;\n  grid-template-columns: subgrid;\n}"
    ],
    "testCases": [
      {
        "id": "css-97-tc-1",
        "description": "Verifies correct implementation for Grid Subgrid: Inheriting Parent Tracks",
        "testFn": "code.includes('subgrid')"
      }
    ]
  },
  {
    "id": "css-98-full-bleed-grid-layout-pattern",
    "title": "98. Full Bleed Grid Layout Pattern",
    "slug": "lesson-98-full-bleed-grid-layout-pattern",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Full Bleed Grid Layout Pattern in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Full Bleed Grid Layout Pattern",
      "CSS3"
    ],
    "analogy": "A magazine photo stretching from the very left edge of the page to the very right edge with zero margin.",
    "explanationMarkdown": "### Full Bleed Grid Layout Pattern\n\n`1 / -1` spans an item from the first grid line to the very last line, creating edge-to-edge layouts.\n\n```css\n.full-bleed {\n  grid-column: 1 / -1;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Full Bleed Grid Layout Pattern",
      "code": ".full-bleed {\n  grid-column: 1 / -1;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Full Bleed Grid Layout Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Full Bleed Grid Layout Pattern.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Full viewport width breakout section */\n",
    "solutionCode": ".full-bleed {\n  grid-column: 1 / -1;\n}",
    "hints": [
      "Write:\n.full-bleed {\n  grid-column: 1 / -1;\n}"
    ],
    "testCases": [
      {
        "id": "css-98-tc-1",
        "description": "Verifies correct implementation for Full Bleed Grid Layout Pattern",
        "testFn": "code.includes('grid-column: 1 / -1')"
      }
    ]
  },
  {
    "id": "css-99-12-column-responsive-design-syst",
    "title": "99. 12-Column Responsive Design System Grid",
    "slug": "lesson-99-12-column-responsive-design-syst",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master 12-Column Responsive Design System Grid in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "12-Column Responsive Design System Grid",
      "CSS3"
    ],
    "analogy": "The classic 12-column grid system used by Figma, Bootstrap, and Tailwind design teams.",
    "explanationMarkdown": "### 12-Column Responsive Design System Grid\n\nA 12-column grid provides versatile divisibility into halves (6), thirds (4), quarters (3), and sixths (2).\n\n```css\n.grid-12 {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 16px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: 12-Column Responsive Design System Grid",
      "code": ".grid-12 {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 16px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for 12-Column Responsive Design System Grid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of 12-Column Responsive Design System Grid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Standard design system grid */\n",
    "solutionCode": ".grid-12 {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 16px;\n}",
    "hints": [
      "Write:\n.grid-12 {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 16px;\n}"
    ],
    "testCases": [
      {
        "id": "css-99-tc-1",
        "description": "Verifies correct implementation for 12-Column Responsive Design System Grid",
        "testFn": "code.includes('repeat(12, 1fr)')"
      }
    ]
  },
  {
    "id": "css-100-holy-grail-layout-with-css-grid",
    "title": "100. Holy Grail Layout with CSS Grid",
    "slug": "lesson-100-holy-grail-layout-with-css-grid",
    "language": "css",
    "category": "Module 6: CSS Grid Mastery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Holy Grail Layout with CSS Grid in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Holy Grail Layout with CSS Grid",
      "CSS3"
    ],
    "analogy": "The Holy Grail of web layout: header, sidebar, fluid content, right rail, and pinned footer.",
    "explanationMarkdown": "### Holy Grail Layout with CSS Grid\n\nThe complete modern implementation of the historic Holy Grail web application architecture.\n\n```css\n.holy-grail {\n  display: grid;\n  grid-template-columns: 240px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Holy Grail Layout with CSS Grid",
      "code": ".holy-grail {\n  display: grid;\n  grid-template-columns: 240px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Holy Grail Layout with CSS Grid.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Holy Grail Layout with CSS Grid.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Semantic Holy Grail layout in 8 lines */\n",
    "solutionCode": ".holy-grail {\n  display: grid;\n  grid-template-columns: 240px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}",
    "hints": [
      "Write:\n.holy-grail {\n  display: grid;\n  grid-template-columns: 240px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}"
    ],
    "testCases": [
      {
        "id": "css-100-tc-1",
        "description": "Verifies correct implementation for Holy Grail Layout with CSS Grid",
        "testFn": "code.includes('grid-template-columns:') && code.includes('grid-template-rows:')"
      }
    ]
  },
  {
    "id": "css-101-mobile-first-media-queries-with-",
    "title": "101. Mobile-First Media Queries with min-width",
    "slug": "lesson-101-mobile-first-media-queries-with-",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Mobile-First Media Queries with min-width in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Mobile-First Media Queries with min-width",
      "CSS3"
    ],
    "analogy": "Designing a compact pocket watch first, then adding ornamental side wings for grandfather clock editions.",
    "explanationMarkdown": "### Mobile-First Media Queries with min-width\n\nMobile-first sets baseline styles for small screens and layers enhanced styles as screen width expands.\n\n```css\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Mobile-First Media Queries with min-width",
      "code": "@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mobile-First Media Queries with min-width.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mobile-First Media Queries with min-width.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Mobile-first breakpoint for tablets */\n",
    "solutionCode": "@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}",
    "hints": [
      "Write:\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-101-tc-1",
        "description": "Verifies correct implementation for Mobile-First Media Queries with min-width",
        "testFn": "code.includes('@media (min-width: 768px)') || code.includes('@media')"
      }
    ]
  },
  {
    "id": "css-102-desktop-first-media-queries-with",
    "title": "102. Desktop-First Media Queries with max-width",
    "slug": "lesson-102-desktop-first-media-queries-with",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Desktop-First Media Queries with max-width in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Desktop-First Media Queries with max-width",
      "CSS3"
    ],
    "analogy": "Packing a large suitcase and removing items when you switch to a small carry-on bag.",
    "explanationMarkdown": "### Desktop-First Media Queries with max-width\n\nApplies CSS overrides only when the screen is smaller than the designated pixel width.\n\n```css\n@media (max-width: 640px) {\n  .desktop-nav {\n    display: none;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Desktop-First Media Queries with max-width",
      "code": "@media (max-width: 640px) {\n  .desktop-nav {\n    display: none;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Desktop-First Media Queries with max-width.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Desktop-First Media Queries with max-width.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Small screen override */\n",
    "solutionCode": "@media (max-width: 640px) {\n  .desktop-nav {\n    display: none;\n  }\n}",
    "hints": [
      "Write:\n@media (max-width: 640px) {\n  .desktop-nav {\n    display: none;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-102-tc-1",
        "description": "Verifies correct implementation for Desktop-First Media Queries with max-width",
        "testFn": "code.includes('max-width:')"
      }
    ]
  },
  {
    "id": "css-103-modern-media-query-range-syntax-",
    "title": "103. Modern Media Query Range Syntax (width >= 768px)",
    "slug": "lesson-103-modern-media-query-range-syntax-",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Modern Media Query Range Syntax (width >= 768px) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Modern Media Query Range Syntax (width >= 768px)",
      "CSS3"
    ],
    "analogy": "Writing clean math inequalities: `width >= 768px` instead of verbose `(min-width: 768px)`.",
    "explanationMarkdown": "### Modern Media Query Range Syntax (width >= 768px)\n\nModern CSS Media Queries Level 4 syntax offers readable mathematical comparison operators.\n\n```css\n@media (width >= 1024px) {\n  .sidebar {\n    display: block;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Modern Media Query Range Syntax (width >= 768px)",
      "code": "@media (width >= 1024px) {\n  .sidebar {\n    display: block;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modern Media Query Range Syntax (width >= 768px).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modern Media Query Range Syntax (width >= 768px).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Modern range syntax */\n",
    "solutionCode": "@media (width >= 1024px) {\n  .sidebar {\n    display: block;\n  }\n}",
    "hints": [
      "Write:\n@media (width >= 1024px) {\n  .sidebar {\n    display: block;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-103-tc-1",
        "description": "Verifies correct implementation for Modern Media Query Range Syntax (width >= 768px)",
        "testFn": "code.includes('width >=' ) || code.includes('min-width:')"
      }
    ]
  },
  {
    "id": "css-104-dark-mode-support-with-prefers-c",
    "title": "104. Dark Mode Support with prefers-color-scheme",
    "slug": "lesson-104-dark-mode-support-with-prefers-c",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Dark Mode Support with prefers-color-scheme in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Dark Mode Support with prefers-color-scheme",
      "CSS3"
    ],
    "analogy": "Flipping car headlights on automatically as soon as the sun dips below the horizon.",
    "explanationMarkdown": "### Dark Mode Support with prefers-color-scheme\n\nRespects the user's operating system dark/light mode preference automatically.\n\n```css\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #090d16;\n    color: #f1f5f9;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dark Mode Support with prefers-color-scheme",
      "code": "@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #090d16;\n    color: #f1f5f9;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dark Mode Support with prefers-color-scheme.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dark Mode Support with prefers-color-scheme.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Automatic system dark mode theme */\n",
    "solutionCode": "@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #090d16;\n    color: #f1f5f9;\n  }\n}",
    "hints": [
      "Write:\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #090d16;\n    color: #f1f5f9;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-104-tc-1",
        "description": "Verifies correct implementation for Dark Mode Support with prefers-color-scheme",
        "testFn": "code.includes('prefers-color-scheme: dark')"
      }
    ]
  },
  {
    "id": "css-105-accessibility-support-with-prefe",
    "title": "105. Accessibility Support with prefers-reduced-motion",
    "slug": "lesson-105-accessibility-support-with-prefe",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Accessibility Support with prefers-reduced-motion in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Accessibility Support with prefers-reduced-motion",
      "CSS3"
    ],
    "analogy": "Turning off dizzying roller coaster lights for passengers prone to motion sickness.",
    "explanationMarkdown": "### Accessibility Support with prefers-reduced-motion\n\nDisables parallax, spinning, and bouncy transitions for users with vestibular and motion disorders.\n\n```css\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Accessibility Support with prefers-reduced-motion",
      "code": "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessibility Support with prefers-reduced-motion.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessibility Support with prefers-reduced-motion.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Disable animations for vestibular motion sensitivity */\n",
    "solutionCode": "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}",
    "hints": [
      "Write:\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-105-tc-1",
        "description": "Verifies correct implementation for Accessibility Support with prefers-reduced-motion",
        "testFn": "code.includes('prefers-reduced-motion: reduce')"
      }
    ]
  },
  {
    "id": "css-106-print-stylesheets-with-@media-pr",
    "title": "106. Print Stylesheets with @media print",
    "slug": "lesson-106-print-stylesheets-with-@media-pr",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Print Stylesheets with @media print in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Print Stylesheets with @media print",
      "CSS3"
    ],
    "analogy": "Printing a digital boarding pass onto paper: strips navigation bars and ads to save printer ink.",
    "explanationMarkdown": "### Print Stylesheets with @media print\n\nFormats web pages specifically for physical printers or PDF export.\n\n```css\n@media print {\n  .no-print, nav, footer {\n    display: none;\n  }\n  body {\n    color: #000000;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Print Stylesheets with @media print",
      "code": "@media print {\n  .no-print, nav, footer {\n    display: none;\n  }\n  body {\n    color: #000000;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Print Stylesheets with @media print.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Print Stylesheets with @media print.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Clean paper printing stylesheet */\n",
    "solutionCode": "@media print {\n  .no-print, nav, footer {\n    display: none;\n  }\n  body {\n    color: #000000;\n  }\n}",
    "hints": [
      "Write:\n@media print {\n  .no-print, nav, footer {\n    display: none;\n  }\n  body {\n    color: #000000;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-106-tc-1",
        "description": "Verifies correct implementation for Print Stylesheets with @media print",
        "testFn": "code.includes('@media print')"
      }
    ]
  },
  {
    "id": "css-107-container-queries-@container-bas",
    "title": "107. Container Queries: @container Basics",
    "slug": "lesson-107-container-queries-@container-bas",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Container Queries: @container Basics in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Container Queries",
      "CSS3"
    ],
    "analogy": "A liquid adapting its shape to whatever glass it is poured into, whether a shot glass or a pitcher.",
    "explanationMarkdown": "### Container Queries: @container Basics\n\nContainer queries inspect the width of the parent container rather than the global browser viewport!\n\n```css\n@container (min-width: 400px) {\n  .card-horizontal {\n    display: flex;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Container Queries: @container Basics",
      "code": "@container (min-width: 400px) {\n  .card-horizontal {\n    display: flex;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container Queries: @container Basics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Queries: @container Basics.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Component responds to its parent container width! */\n",
    "solutionCode": "@container (min-width: 400px) {\n  .card-horizontal {\n    display: flex;\n  }\n}",
    "hints": [
      "Write:\n@container (min-width: 400px) {\n  .card-horizontal {\n    display: flex;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-107-tc-1",
        "description": "Verifies correct implementation for Container Queries: @container Basics",
        "testFn": "code.includes('@container')"
      }
    ]
  },
  {
    "id": "css-108-declaring-container-context-with",
    "title": "108. Declaring Container Context with container-type",
    "slug": "lesson-108-declaring-container-context-with",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Declaring Container Context with container-type in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Declaring Container Context with container-type",
      "CSS3"
    ],
    "analogy": "Putting a measuring tape inside a desk drawer so items inside know how much space they have.",
    "explanationMarkdown": "### Declaring Container Context with container-type\n\nInforms the browser engine to track the inline width of this element for `@container` queries.\n\n```css\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Declaring Container Context with container-type",
      "code": ".card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Declaring Container Context with container-type.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Declaring Container Context with container-type.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Define responsive container root */\n",
    "solutionCode": ".card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}",
    "hints": [
      "Write:\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}"
    ],
    "testCases": [
      {
        "id": "css-108-tc-1",
        "description": "Verifies correct implementation for Declaring Container Context with container-type",
        "testFn": "code.includes('container-type: inline-size') || code.includes('container-type:')"
      }
    ]
  },
  {
    "id": "css-109-container-query-units-cqw-and-cq",
    "title": "109. Container Query Units: cqw and cqh",
    "slug": "lesson-109-container-query-units-cqw-and-cq",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Container Query Units: cqw and cqh in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Container Query Units",
      "CSS3"
    ],
    "analogy": "Scaling font size according to the width of the picture frame rather than the entire room wall.",
    "explanationMarkdown": "### Container Query Units: cqw and cqh\n\n`cqw` equals 1% of the query container's width, enabling truly self-contained responsive components.\n\n```css\n.widget-title {\n  font-size: 5cqw;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Container Query Units: cqw and cqh",
      "code": ".widget-title {\n  font-size: 5cqw;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container Query Units: cqw and cqh.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Query Units: cqw and cqh.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Typography scaling with container width */\n",
    "solutionCode": ".widget-title {\n  font-size: 5cqw;\n}",
    "hints": [
      "Write:\n.widget-title {\n  font-size: 5cqw;\n}"
    ],
    "testCases": [
      {
        "id": "css-109-tc-1",
        "description": "Verifies correct implementation for Container Query Units: cqw and cqh",
        "testFn": "code.includes('cqw')"
      }
    ]
  },
  {
    "id": "css-110-fluid-typography-with-clamp",
    "title": "110. Fluid Typography with clamp()",
    "slug": "lesson-110-fluid-typography-with-clamp",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Fluid Typography with clamp() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Fluid Typography with clamp()",
      "CSS3"
    ],
    "analogy": "A rubber band with a minimum knot and maximum lock: stretches smoothly in the middle.",
    "explanationMarkdown": "### Fluid Typography with clamp()\n\n`clamp(min, preferred, max)` scales smoothly with viewport width while respecting hard min and max limits.\n\n```css\nh1 {\n  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Fluid Typography with clamp()",
      "code": "h1 {\n  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fluid Typography with clamp().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fluid Typography with clamp().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fluid font scaling between 16px and 24px */\n",
    "solutionCode": "h1 {\n  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);\n}",
    "hints": [
      "Write:\nh1 {\n  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);\n}"
    ],
    "testCases": [
      {
        "id": "css-110-tc-1",
        "description": "Verifies correct implementation for Fluid Typography with clamp()",
        "testFn": "code.includes('clamp(')"
      }
    ]
  },
  {
    "id": "css-111-dynamic-math-calculations-with-c",
    "title": "111. Dynamic Math Calculations with calc()",
    "slug": "lesson-111-dynamic-math-calculations-with-c",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Dynamic Math Calculations with calc() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Dynamic Math Calculations with calc()",
      "CSS3"
    ],
    "analogy": "A pocket calculator measuring: 'take the whole table width and subtract 280 millimeters for the lamp'.",
    "explanationMarkdown": "### Dynamic Math Calculations with calc()\n\n`calc()` performs runtime arithmetic operations across mixed units (percentages, pixels, rems).\n\n```css\n.main-content {\n  width: calc(100% - 280px);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Math Calculations with calc()",
      "code": ".main-content {\n  width: calc(100% - 280px);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dynamic Math Calculations with calc().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dynamic Math Calculations with calc().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Offset sidebar width with calc */\n",
    "solutionCode": ".main-content {\n  width: calc(100% - 280px);\n}",
    "hints": [
      "Write:\n.main-content {\n  width: calc(100% - 280px);\n}"
    ],
    "testCases": [
      {
        "id": "css-111-tc-1",
        "description": "Verifies correct implementation for Dynamic Math Calculations with calc()",
        "testFn": "code.includes('calc(')"
      }
    ]
  },
  {
    "id": "css-112-boundary-limiting-with-min-and-m",
    "title": "112. Boundary Limiting with min() and max()",
    "slug": "lesson-112-boundary-limiting-with-min-and-m",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Boundary Limiting with min() and max() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Boundary Limiting with min() and max()",
      "CSS3"
    ],
    "analogy": "Choosing the smaller of two measuring tapes so the box never exceeds either constraint.",
    "explanationMarkdown": "### Boundary Limiting with min() and max()\n\n`min()` picks the smallest value from a comma-separated list of expressions; `max()` picks the largest.\n\n```css\n.wrapper {\n  width: min(90%, 1200px);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Boundary Limiting with min() and max()",
      "code": ".wrapper {\n  width: min(90%, 1200px);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Boundary Limiting with min() and max().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Boundary Limiting with min() and max().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Never exceed 90% or 1000px */\n",
    "solutionCode": ".wrapper {\n  width: min(90%, 1200px);\n}",
    "hints": [
      "Write:\n.wrapper {\n  width: min(90%, 1200px);\n}"
    ],
    "testCases": [
      {
        "id": "css-112-tc-1",
        "description": "Verifies correct implementation for Boundary Limiting with min() and max()",
        "testFn": "code.includes('min(') || code.includes('max(')"
      }
    ]
  },
  {
    "id": "css-113-orientation-media-queries-portra",
    "title": "113. Orientation Media Queries (portrait / landscape)",
    "slug": "lesson-113-orientation-media-queries-portra",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Orientation Media Queries (portrait / landscape) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Orientation Media Queries (portrait / landscape)",
      "CSS3"
    ],
    "analogy": "Rotating an airplane tray table to lock flat when the passenger turns their tablet sideways.",
    "explanationMarkdown": "### Orientation Media Queries (portrait / landscape)\n\nApplies custom layouts when the viewport width exceeds height (landscape) or vice versa (portrait).\n\n```css\n@media (orientation: landscape) and (max-height: 500px) {\n  .mobile-header {\n    height: 44px;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Orientation Media Queries (portrait / landscape)",
      "code": "@media (orientation: landscape) and (max-height: 500px) {\n  .mobile-header {\n    height: 44px;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Orientation Media Queries (portrait / landscape).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Orientation Media Queries (portrait / landscape).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Optimize for phone rotated sideways */\n",
    "solutionCode": "@media (orientation: landscape) and (max-height: 500px) {\n  .mobile-header {\n    height: 44px;\n  }\n}",
    "hints": [
      "Write:\n@media (orientation: landscape) and (max-height: 500px) {\n  .mobile-header {\n    height: 44px;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-113-tc-1",
        "description": "Verifies correct implementation for Orientation Media Queries (portrait / landscape)",
        "testFn": "code.includes('orientation: landscape') || code.includes('orientation:')"
      }
    ]
  },
  {
    "id": "css-114-display-density-queries-retina-s",
    "title": "114. Display Density Queries (Retina Screens)",
    "slug": "lesson-114-display-density-queries-retina-s",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Display Density Queries (Retina Screens) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Display Density Queries (Retina Screens)",
      "CSS3"
    ],
    "analogy": "Using a laser-etched magnifying lens for high-density 4K displays.",
    "explanationMarkdown": "### Display Density Queries (Retina Screens)\n\nTargets high-DPI Retina and 4K displays to serve crisp double-density graphic assets.\n\n```css\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo {\n    background-image: url('logo@2x.png');\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Display Density Queries (Retina Screens)",
      "code": "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo {\n    background-image: url('logo@2x.png');\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Display Density Queries (Retina Screens).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Display Density Queries (Retina Screens).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* High-res background image for retina displays */\n",
    "solutionCode": "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo {\n    background-image: url('logo@2x.png');\n  }\n}",
    "hints": [
      "Write:\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo {\n    background-image: url('logo@2x.png');\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-114-tc-1",
        "description": "Verifies correct implementation for Display Density Queries (Retina Screens)",
        "testFn": "code.includes('min-resolution:') || code.includes('device-pixel-ratio')"
      }
    ]
  },
  {
    "id": "css-115-responsive-images-with-object-fi",
    "title": "115. Responsive Images with object-fit: cover",
    "slug": "lesson-115-responsive-images-with-object-fi",
    "language": "css",
    "category": "Module 7: Responsive Web Design",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Responsive Images with object-fit: cover in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Responsive Images with object-fit",
      "CSS3"
    ],
    "analogy": "Trimming a photograph to fit into an oval picture frame without stretching or squishing people's faces.",
    "explanationMarkdown": "### Responsive Images with object-fit: cover\n\n`object-fit: cover` fills the entire container while preserving the image's original aspect ratio.\n\n```css\n.card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Responsive Images with object-fit: cover",
      "code": ".card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Responsive Images with object-fit: cover.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Responsive Images with object-fit: cover.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Crop image without distortion */\n",
    "solutionCode": ".card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}",
    "hints": [
      "Write:\n.card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}"
    ],
    "testCases": [
      {
        "id": "css-115-tc-1",
        "description": "Verifies correct implementation for Responsive Images with object-fit: cover",
        "testFn": "code.includes('object-fit: cover')"
      }
    ]
  },
  {
    "id": "css-116-2d-transforms-translate,-rotate,",
    "title": "116. 2D Transforms: translate(), rotate(), scale()",
    "slug": "lesson-116-2d-transforms-translate,-rotate,",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master 2D Transforms: translate(), rotate(), scale() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "2D Transforms",
      "CSS3"
    ],
    "analogy": "Picking up a coaster, sliding it 2 millimeters up, and magnifying it slightly.",
    "explanationMarkdown": "### 2D Transforms: translate(), rotate(), scale()\n\nTransforms elements in 2D space without disturbing neighboring layout flow.\n\n```css\n.btn:hover {\n  transform: translateY(-2px) scale(1.05);\n}\n```",
    "workedExample": {
      "title": "Worked Example: 2D Transforms: translate(), rotate(), scale()",
      "code": ".btn:hover {\n  transform: translateY(-2px) scale(1.05);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for 2D Transforms: translate(), rotate(), scale().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of 2D Transforms: translate(), rotate(), scale().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Lift and scale button on hover */\n",
    "solutionCode": ".btn:hover {\n  transform: translateY(-2px) scale(1.05);\n}",
    "hints": [
      "Write:\n.btn:hover {\n  transform: translateY(-2px) scale(1.05);\n}"
    ],
    "testCases": [
      {
        "id": "css-116-tc-1",
        "description": "Verifies correct implementation for 2D Transforms: translate(), rotate(), scale()",
        "testFn": "code.includes('transform:')"
      }
    ]
  },
  {
    "id": "css-117-transform-origin-customization",
    "title": "117. Transform Origin Customization",
    "slug": "lesson-117-transform-origin-customization",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Transform Origin Customization in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Transform Origin Customization",
      "CSS3"
    ],
    "analogy": "The center pivot pin of a compass needle.",
    "explanationMarkdown": "### Transform Origin Customization\n\nSpecifies the anchor point around which rotations and scale transforms take place.\n\n```css\n.needle {\n  transform-origin: bottom center;\n  transform: rotate(45deg);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Transform Origin Customization",
      "code": ".needle {\n  transform-origin: bottom center;\n  transform: rotate(45deg);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Transform Origin Customization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Transform Origin Customization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Rotate from bottom-left corner */\n",
    "solutionCode": ".needle {\n  transform-origin: bottom center;\n  transform: rotate(45deg);\n}",
    "hints": [
      "Write:\n.needle {\n  transform-origin: bottom center;\n  transform: rotate(45deg);\n}"
    ],
    "testCases": [
      {
        "id": "css-117-tc-1",
        "description": "Verifies correct implementation for Transform Origin Customization",
        "testFn": "code.includes('transform-origin:')"
      }
    ]
  },
  {
    "id": "css-118-smooth-css-transitions-transitio",
    "title": "118. Smooth CSS Transitions: transition-property & duration",
    "slug": "lesson-118-smooth-css-transitions-transitio",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Smooth CSS Transitions: transition-property & duration in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Smooth CSS Transitions",
      "CSS3"
    ],
    "analogy": "A dimmer switch gently fading room lights down instead of an abrupt click.",
    "explanationMarkdown": "### Smooth CSS Transitions: transition-property & duration\n\nAnimates changes in CSS properties smoothly over a specified duration.\n\n```css\n.interactive-btn {\n  transition: background-color 200ms ease-in-out, transform 150ms ease;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Smooth CSS Transitions: transition-property & duration",
      "code": ".interactive-btn {\n  transition: background-color 200ms ease-in-out, transform 150ms ease;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Smooth CSS Transitions: transition-property & duration.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Smooth CSS Transitions: transition-property & duration.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Smooth color transition */\n",
    "solutionCode": ".interactive-btn {\n  transition: background-color 200ms ease-in-out, transform 150ms ease;\n}",
    "hints": [
      "Write:\n.interactive-btn {\n  transition: background-color 200ms ease-in-out, transform 150ms ease;\n}"
    ],
    "testCases": [
      {
        "id": "css-118-tc-1",
        "description": "Verifies correct implementation for Smooth CSS Transitions: transition-property & duration",
        "testFn": "code.includes('transition:')"
      }
    ]
  },
  {
    "id": "css-119-timing-functions-ease,-linear,-c",
    "title": "119. Timing Functions: ease, linear, cubic-bezier()",
    "slug": "lesson-119-timing-functions-ease,-linear,-c",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Timing Functions: ease, linear, cubic-bezier() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Timing Functions",
      "CSS3"
    ],
    "analogy": "A bouncing rubber ball accelerating with gravity and springing back up.",
    "explanationMarkdown": "### Timing Functions: ease, linear, cubic-bezier()\n\nControls the acceleration curve of a transition or animation over time.\n\n```css\n.popup {\n  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Timing Functions: ease, linear, cubic-bezier()",
      "code": ".popup {\n  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Timing Functions: ease, linear, cubic-bezier().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Timing Functions: ease, linear, cubic-bezier().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Snappy custom spring bezier curve */\n",
    "solutionCode": ".popup {\n  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}",
    "hints": [
      "Write:\n.popup {\n  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}"
    ],
    "testCases": [
      {
        "id": "css-119-tc-1",
        "description": "Verifies correct implementation for Timing Functions: ease, linear, cubic-bezier()",
        "testFn": "code.includes('cubic-bezier(') || code.includes('ease')"
      }
    ]
  },
  {
    "id": "css-120-transition-delays-for-staggered-",
    "title": "120. Transition Delays for Staggered Effects",
    "slug": "lesson-120-transition-delays-for-staggered-",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Transition Delays for Staggered Effects in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Transition Delays for Staggered Effects",
      "CSS3"
    ],
    "analogy": "Waiting for a guest to pause on your porch for 3 seconds before the greeting chime rings.",
    "explanationMarkdown": "### Transition Delays for Staggered Effects\n\nSpecifies an intentional waiting period before the transition effect begins.\n\n```css\n.tooltip {\n  transition-delay: 300ms;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Transition Delays for Staggered Effects",
      "code": ".tooltip {\n  transition-delay: 300ms;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Transition Delays for Staggered Effects.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Transition Delays for Staggered Effects.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Stagger popup appearance */\n",
    "solutionCode": ".tooltip {\n  transition-delay: 300ms;\n}",
    "hints": [
      "Write:\n.tooltip {\n  transition-delay: 300ms;\n}"
    ],
    "testCases": [
      {
        "id": "css-120-tc-1",
        "description": "Verifies correct implementation for Transition Delays for Staggered Effects",
        "testFn": "code.includes('transition-delay:')"
      }
    ]
  },
  {
    "id": "css-121-css-@keyframes-syntax",
    "title": "121. CSS @keyframes Syntax",
    "slug": "lesson-121-css-@keyframes-syntax",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master CSS @keyframes Syntax in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS @keyframes Syntax",
      "CSS3"
    ],
    "analogy": "A flipbook cartoon where each page represents a milestone percentage of the motion.",
    "explanationMarkdown": "### CSS @keyframes Syntax\n\nDefines the intermediate keyframe steps along an animation sequence.\n\n```css\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.95);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS @keyframes Syntax",
      "code": "@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.95);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS @keyframes Syntax.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS @keyframes Syntax.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Define pulsing glow animation */\n",
    "solutionCode": "@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.95);\n  }\n}",
    "hints": [
      "Write:\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.95);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-121-tc-1",
        "description": "Verifies correct implementation for CSS @keyframes Syntax",
        "testFn": "code.includes('@keyframes pulse') || code.includes('@keyframes')"
      }
    ]
  },
  {
    "id": "css-122-applying-animations-animation-sh",
    "title": "122. Applying Animations: animation shorthand",
    "slug": "lesson-122-applying-animations-animation-sh",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Applying Animations: animation shorthand in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Applying Animations",
      "CSS3"
    ],
    "analogy": "Putting a record on a turntable and letting it spin endlessly.",
    "explanationMarkdown": "### Applying Animations: animation shorthand\n\nShorthand: `<name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode>`.\n\n```css\n.spinner {\n  animation: spin 1s linear infinite;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Applying Animations: animation shorthand",
      "code": ".spinner {\n  animation: spin 1s linear infinite;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Applying Animations: animation shorthand.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Applying Animations: animation shorthand.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Infinite loading spinner */\n",
    "solutionCode": ".spinner {\n  animation: spin 1s linear infinite;\n}",
    "hints": [
      "Write:\n.spinner {\n  animation: spin 1s linear infinite;\n}"
    ],
    "testCases": [
      {
        "id": "css-122-tc-1",
        "description": "Verifies correct implementation for Applying Animations: animation shorthand",
        "testFn": "code.includes('animation:')"
      }
    ]
  },
  {
    "id": "css-123-animation-iteration-count-&-dire",
    "title": "123. Animation Iteration Count & Direction",
    "slug": "lesson-123-animation-iteration-count-&-dire",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Animation Iteration Count & Direction in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Animation Iteration Count & Direction",
      "CSS3"
    ],
    "analogy": "A tennis ball bouncing back and forth across a net three times before coming to rest.",
    "explanationMarkdown": "### Animation Iteration Count & Direction\n\n`animation-direction: alternate` reverses playback direction on every other cycle.\n\n```css\n.badge {\n  animation-iteration-count: 3;\n  animation-direction: alternate;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Animation Iteration Count & Direction",
      "code": ".badge {\n  animation-iteration-count: 3;\n  animation-direction: alternate;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Animation Iteration Count & Direction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Animation Iteration Count & Direction.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Bounce 3 times alternate back and forth */\n",
    "solutionCode": ".badge {\n  animation-iteration-count: 3;\n  animation-direction: alternate;\n}",
    "hints": [
      "Write:\n.badge {\n  animation-iteration-count: 3;\n  animation-direction: alternate;\n}"
    ],
    "testCases": [
      {
        "id": "css-123-tc-1",
        "description": "Verifies correct implementation for Animation Iteration Count & Direction",
        "testFn": "code.includes('animation-iteration-count:') || code.includes('animation-direction:')"
      }
    ]
  },
  {
    "id": "css-124-animation-fill-modes-forwards-vs",
    "title": "124. Animation Fill Modes: forwards vs backwards",
    "slug": "lesson-124-animation-fill-modes-forwards-vs",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Animation Fill Modes: forwards vs backwards in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Animation Fill Modes",
      "CSS3"
    ],
    "analogy": "A curtain opening on stage and staying open instead of snapping shut the instant the song ends.",
    "explanationMarkdown": "### Animation Fill Modes: forwards vs backwards\n\n`forwards` preserves the computed values from the final keyframe after the animation finishes.\n\n```css\n.fade-in-slide {\n  animation: slideUp 400ms ease forwards;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Animation Fill Modes: forwards vs backwards",
      "code": ".fade-in-slide {\n  animation: slideUp 400ms ease forwards;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Animation Fill Modes: forwards vs backwards.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Animation Fill Modes: forwards vs backwards.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Retain final animation state */\n",
    "solutionCode": ".fade-in-slide {\n  animation: slideUp 400ms ease forwards;\n}",
    "hints": [
      "Write:\n.fade-in-slide {\n  animation: slideUp 400ms ease forwards;\n}"
    ],
    "testCases": [
      {
        "id": "css-124-tc-1",
        "description": "Verifies correct implementation for Animation Fill Modes: forwards vs backwards",
        "testFn": "code.includes('animation-fill-mode: forwards') || code.includes('forwards')"
      }
    ]
  },
  {
    "id": "css-125-pausing-animations-with-animatio",
    "title": "125. Pausing Animations with animation-play-state",
    "slug": "lesson-125-pausing-animations-with-animatio",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Pausing Animations with animation-play-state in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Pausing Animations with animation-play-state",
      "CSS3"
    ],
    "analogy": "Pressing the pause button on a video recorder to inspect a single frame.",
    "explanationMarkdown": "### Pausing Animations with animation-play-state\n\nControls whether an animation is running or paused (e.g. pausing tickers when user hovers).\n\n```css\n.ticker:hover {\n  animation-play-state: paused;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Pausing Animations with animation-play-state",
      "code": ".ticker:hover {\n  animation-play-state: paused;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pausing Animations with animation-play-state.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pausing Animations with animation-play-state.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Pause marquee on hover */\n",
    "solutionCode": ".ticker:hover {\n  animation-play-state: paused;\n}",
    "hints": [
      "Write:\n.ticker:hover {\n  animation-play-state: paused;\n}"
    ],
    "testCases": [
      {
        "id": "css-125-tc-1",
        "description": "Verifies correct implementation for Pausing Animations with animation-play-state",
        "testFn": "code.includes('animation-play-state: paused')"
      }
    ]
  },
  {
    "id": "css-126-3d-transforms-perspective-&-rota",
    "title": "126. 3D Transforms: perspective & rotateY",
    "slug": "lesson-126-3d-transforms-perspective-&-rota",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master 3D Transforms: perspective & rotateY in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "3D Transforms",
      "CSS3"
    ],
    "analogy": "Looking through 3D cinema glasses: gives objects realistic depth and parallax as they rotate.",
    "explanationMarkdown": "### 3D Transforms: perspective & rotateY\n\n`perspective` activates a 3D coordinate space, giving depth to Z-axis transforms.\n\n```css\n.card-3d {\n  perspective: 1000px;\n  transform: rotateY(180deg);\n}\n```",
    "workedExample": {
      "title": "Worked Example: 3D Transforms: perspective & rotateY",
      "code": ".card-3d {\n  perspective: 1000px;\n  transform: rotateY(180deg);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for 3D Transforms: perspective & rotateY.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of 3D Transforms: perspective & rotateY.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* 3D card flip perspective */\n",
    "solutionCode": ".card-3d {\n  perspective: 1000px;\n  transform: rotateY(180deg);\n}",
    "hints": [
      "Write:\n.card-3d {\n  perspective: 1000px;\n  transform: rotateY(180deg);\n}"
    ],
    "testCases": [
      {
        "id": "css-126-tc-1",
        "description": "Verifies correct implementation for 3D Transforms: perspective & rotateY",
        "testFn": "code.includes('perspective:') || code.includes('rotateY(')"
      }
    ]
  },
  {
    "id": "css-127-backface-visibility-in-3d-card-f",
    "title": "127. Backface Visibility in 3D Card Flips",
    "slug": "lesson-127-backface-visibility-in-3d-card-f",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Backface Visibility in 3D Card Flips in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Backface Visibility in 3D Card Flips",
      "CSS3"
    ],
    "analogy": "The backside of a playing card being blank so opponents cannot see the suit through the paper.",
    "explanationMarkdown": "### Backface Visibility in 3D Card Flips\n\n`backface-visibility: hidden` hides the reverse side of an element when rotated away from the viewer.\n\n```css\n.card-face {\n  backface-visibility: hidden;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Backface Visibility in 3D Card Flips",
      "code": ".card-face {\n  backface-visibility: hidden;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Backface Visibility in 3D Card Flips.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Backface Visibility in 3D Card Flips.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Hide back face when turned away */\n",
    "solutionCode": ".card-face {\n  backface-visibility: hidden;\n}",
    "hints": [
      "Write:\n.card-face {\n  backface-visibility: hidden;\n}"
    ],
    "testCases": [
      {
        "id": "css-127-tc-1",
        "description": "Verifies correct implementation for Backface Visibility in 3D Card Flips",
        "testFn": "code.includes('backface-visibility: hidden')"
      }
    ]
  },
  {
    "id": "css-128-gpu-hardware-acceleration-with-w",
    "title": "128. GPU Hardware Acceleration with will-change",
    "slug": "lesson-128-gpu-hardware-acceleration-with-w",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master GPU Hardware Acceleration with will-change in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "GPU Hardware Acceleration with will-change",
      "CSS3"
    ],
    "analogy": "Calling ahead to reserve an express highway lane so your car never gets stuck in city traffic.",
    "explanationMarkdown": "### GPU Hardware Acceleration with will-change\n\nInforms the browser engine to promote the element to its own GPU compositor layer.\n\n```css\n.smooth-layer {\n  will-change: transform, opacity;\n}\n```",
    "workedExample": {
      "title": "Worked Example: GPU Hardware Acceleration with will-change",
      "code": ".smooth-layer {\n  will-change: transform, opacity;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for GPU Hardware Acceleration with will-change.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GPU Hardware Acceleration with will-change.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Optimize performance for smooth 60fps animations */\n",
    "solutionCode": ".smooth-layer {\n  will-change: transform, opacity;\n}",
    "hints": [
      "Write:\n.smooth-layer {\n  will-change: transform, opacity;\n}"
    ],
    "testCases": [
      {
        "id": "css-128-tc-1",
        "description": "Verifies correct implementation for GPU Hardware Acceleration with will-change",
        "testFn": "code.includes('will-change:')"
      }
    ]
  },
  {
    "id": "css-129-scroll-driven-animations-@keyfra",
    "title": "129. Scroll-Driven Animations (@keyframes + animation-timeline)",
    "slug": "lesson-129-scroll-driven-animations-@keyfra",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Scroll-Driven Animations (@keyframes + animation-timeline) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Scroll-Driven Animations (@keyframes + animation-timeline)",
      "CSS3"
    ],
    "analogy": "A river water wheel that spins strictly as water flows past it down the stream.",
    "explanationMarkdown": "### Scroll-Driven Animations (@keyframes + animation-timeline)\n\nModern CSS feature linking animation playback progress directly to viewport scroll position!\n\n```css\n.progress-bar {\n  animation: fillProgress auto linear;\n  animation-timeline: scroll();\n}\n```",
    "workedExample": {
      "title": "Worked Example: Scroll-Driven Animations (@keyframes + animation-timeline)",
      "code": ".progress-bar {\n  animation: fillProgress auto linear;\n  animation-timeline: scroll();\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scroll-Driven Animations (@keyframes + animation-timeline).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scroll-Driven Animations (@keyframes + animation-timeline).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Pure CSS scroll progress indicator */\n",
    "solutionCode": ".progress-bar {\n  animation: fillProgress auto linear;\n  animation-timeline: scroll();\n}",
    "hints": [
      "Write:\n.progress-bar {\n  animation: fillProgress auto linear;\n  animation-timeline: scroll();\n}"
    ],
    "testCases": [
      {
        "id": "css-129-tc-1",
        "description": "Verifies correct implementation for Scroll-Driven Animations (@keyframes + animation-timeline)",
        "testFn": "code.includes('animation-timeline:')"
      }
    ]
  },
  {
    "id": "css-130-view-transitions-api-css-hooks-v",
    "title": "130. View Transitions API CSS Hooks (::view-transition)",
    "slug": "lesson-130-view-transitions-api-css-hooks-v",
    "language": "css",
    "category": "Module 8: Transitions & Keyframe Animations",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master View Transitions API CSS Hooks (::view-transition) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "View Transitions API CSS Hooks (",
      "CSS3"
    ],
    "analogy": "A seamless cinematic cross-fade transition between two movie scenes.",
    "explanationMarkdown": "### View Transitions API CSS Hooks (::view-transition)\n\nEnables seamless animated morphing transitions between full pages or application states.\n\n```css\n::view-transition-old(root),\n::view-transition-new(root) {\n  animation-duration: 300ms;\n}\n```",
    "workedExample": {
      "title": "Worked Example: View Transitions API CSS Hooks (::view-transition)",
      "code": "::view-transition-old(root),\n::view-transition-new(root) {\n  animation-duration: 300ms;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for View Transitions API CSS Hooks (::view-transition).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of View Transitions API CSS Hooks (::view-transition).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Smooth cross-page morphing transition */\n",
    "solutionCode": "::view-transition-old(root),\n::view-transition-new(root) {\n  animation-duration: 300ms;\n}",
    "hints": [
      "Write:\n::view-transition-old(root),\n::view-transition-new(root) {\n  animation-duration: 300ms;\n}"
    ],
    "testCases": [
      {
        "id": "css-130-tc-1",
        "description": "Verifies correct implementation for View Transitions API CSS Hooks (::view-transition)",
        "testFn": "code.includes('::view-transition')"
      }
    ]
  },
  {
    "id": "css-131-css-custom-properties-variables-",
    "title": "131. CSS Custom Properties (Variables): --var-name",
    "slug": "lesson-131-css-custom-properties-variables-",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master CSS Custom Properties (Variables): --var-name in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS Custom Properties (Variables)",
      "CSS3"
    ],
    "analogy": "A master paint swatch board: changing the swatch updates every room in the hotel automatically.",
    "explanationMarkdown": "### CSS Custom Properties (Variables): --var-name\n\nCustom properties store reusable values across stylesheets with dynamic runtime inheritance.\n\n```css\n:root {\n  --primary: #4f46e5;\n  --primary-hover: #4338ca;\n}\n.btn {\n  background-color: var(--primary);\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS Custom Properties (Variables): --var-name",
      "code": ":root {\n  --primary: #4f46e5;\n  --primary-hover: #4338ca;\n}\n.btn {\n  background-color: var(--primary);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS Custom Properties (Variables): --var-name.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS Custom Properties (Variables): --var-name.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Declare root color token */\n",
    "solutionCode": ":root {\n  --primary: #4f46e5;\n  --primary-hover: #4338ca;\n}\n.btn {\n  background-color: var(--primary);\n}",
    "hints": [
      "Write:\n:root {\n  --primary: #4f46e5;\n  --primary-hover: #4338ca;\n}\n.btn {\n  background-color: var(--primary);\n}"
    ],
    "testCases": [
      {
        "id": "css-131-tc-1",
        "description": "Verifies correct implementation for CSS Custom Properties (Variables): --var-name",
        "testFn": "code.includes('--primary:') && code.includes('var(--primary)')"
      }
    ]
  },
  {
    "id": "css-132-variable-fallback-values",
    "title": "132. Variable Fallback Values",
    "slug": "lesson-132-variable-fallback-values",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Variable Fallback Values in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Variable Fallback Values",
      "CSS3"
    ],
    "analogy": "Having a backup generator ready to kick in if the primary municipal power grid trips.",
    "explanationMarkdown": "### Variable Fallback Values\n\n`var(--name, fallback)` provides a safety default in case the custom property is unset.\n\n```css\n.card {\n  color: var(--text-color, #1e293b);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Variable Fallback Values",
      "code": ".card {\n  color: var(--text-color, #1e293b);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variable Fallback Values.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variable Fallback Values.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Provide default fallback if variable is undefined */\n",
    "solutionCode": ".card {\n  color: var(--text-color, #1e293b);\n}",
    "hints": [
      "Write:\n.card {\n  color: var(--text-color, #1e293b);\n}"
    ],
    "testCases": [
      {
        "id": "css-132-tc-1",
        "description": "Verifies correct implementation for Variable Fallback Values",
        "testFn": "code.includes('var(--text-color,')"
      }
    ]
  },
  {
    "id": "css-133-dynamic-theme-switching-via-css-",
    "title": "133. Dynamic Theme Switching via CSS Variables",
    "slug": "lesson-133-dynamic-theme-switching-via-css-",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Dynamic Theme Switching via CSS Variables in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Dynamic Theme Switching via CSS Variables",
      "CSS3"
    ],
    "analogy": "Flipping a single master lighting circuit breaker that swaps all office fixtures to night mode.",
    "explanationMarkdown": "### Dynamic Theme Switching via CSS Variables\n\nRedefining variables under a parent class or attribute instantly recolors all descendant components.\n\n```css\n[data-theme=\"dark\"] {\n  --bg: #090d16;\n  --text: #f8fafc;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Dynamic Theme Switching via CSS Variables",
      "code": "[data-theme=\"dark\"] {\n  --bg: #090d16;\n  --text: #f8fafc;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dynamic Theme Switching via CSS Variables.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dynamic Theme Switching via CSS Variables.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Toggle theme via data attribute */\n",
    "solutionCode": "[data-theme=\"dark\"] {\n  --bg: #090d16;\n  --text: #f8fafc;\n}",
    "hints": [
      "Write:\n[data-theme=\"dark\"] {\n  --bg: #090d16;\n  --text: #f8fafc;\n}"
    ],
    "testCases": [
      {
        "id": "css-133-tc-1",
        "description": "Verifies correct implementation for Dynamic Theme Switching via CSS Variables",
        "testFn": "code.includes('[data-theme=\"dark\"]') && code.includes('--bg:')"
      }
    ]
  },
  {
    "id": "css-134-native-css-nesting-&-syntax",
    "title": "134. Native CSS Nesting (& Syntax)",
    "slug": "lesson-134-native-css-nesting-&-syntax",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Native CSS Nesting (& Syntax) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Native CSS Nesting (& Syntax)",
      "CSS3"
    ],
    "analogy": "Organizing folder sub-directories inside parent folders instead of flat files on a desktop.",
    "explanationMarkdown": "### Native CSS Nesting (& Syntax)\n\nNative CSS nesting enables nesting child rules and pseudo-states inside parent blocks directly without Sass.\n\n```css\n.card {\n  background-color: #ffffff;\n  & .title {\n    font-size: 1.5rem;\n  }\n  &:hover {\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Native CSS Nesting (& Syntax)",
      "code": ".card {\n  background-color: #ffffff;\n  & .title {\n    font-size: 1.5rem;\n  }\n  &:hover {\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Native CSS Nesting (& Syntax).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Native CSS Nesting (& Syntax).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Modern CSS native nesting */\n",
    "solutionCode": ".card {\n  background-color: #ffffff;\n  & .title {\n    font-size: 1.5rem;\n  }\n  &:hover {\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  }\n}",
    "hints": [
      "Write:\n.card {\n  background-color: #ffffff;\n  & .title {\n    font-size: 1.5rem;\n  }\n  &:hover {\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-134-tc-1",
        "description": "Verifies correct implementation for Native CSS Nesting (& Syntax)",
        "testFn": "code.includes('& .title') || code.includes('&:hover')"
      }
    ]
  },
  {
    "id": "css-135-the-is-pseudo-class-selector",
    "title": "135. The :is() Pseudo-Class Selector",
    "slug": "lesson-135-the-is-pseudo-class-selector",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The :is() Pseudo-Class Selector in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The",
      "CSS3"
    ],
    "analogy": "A loudspeaker calling children from classrooms 1, 2, and 3 at the same time.",
    "explanationMarkdown": "### The :is() Pseudo-Class Selector\n\nSimplifies long selector lists: `:is(h1, h2, h3)` matches any of the targets.\n\n```css\n:is(header, main, footer) h1 {\n  color: #1e293b;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The :is() Pseudo-Class Selector",
      "code": ":is(header, main, footer) h1 {\n  color: #1e293b;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The :is() Pseudo-Class Selector.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The :is() Pseudo-Class Selector.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target headings inside multiple containers concisely */\n",
    "solutionCode": ":is(header, main, footer) h1 {\n  color: #1e293b;\n}",
    "hints": [
      "Write:\n:is(header, main, footer) h1 {\n  color: #1e293b;\n}"
    ],
    "testCases": [
      {
        "id": "css-135-tc-1",
        "description": "Verifies correct implementation for The :is() Pseudo-Class Selector",
        "testFn": "code.includes(':is(')"
      }
    ]
  },
  {
    "id": "css-136-the-where-zero-specificity-selec",
    "title": "136. The :where() Zero-Specificity Selector",
    "slug": "lesson-136-the-where-zero-specificity-selec",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The :where() Zero-Specificity Selector in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The",
      "CSS3"
    ],
    "analogy": "A whisper that gives instructions but instantly steps aside if anyone else speaks up.",
    "explanationMarkdown": "### The :where() Zero-Specificity Selector\n\nIdentical to `:is()`, but has zero specificity (0,0,0), making it effortless to override.\n\n```css\n:where(button, input) {\n  font-family: inherit;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The :where() Zero-Specificity Selector",
      "code": ":where(button, input) {\n  font-family: inherit;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The :where() Zero-Specificity Selector.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The :where() Zero-Specificity Selector.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Baseline styling with 0 specificity for easy overrides */\n",
    "solutionCode": ":where(button, input) {\n  font-family: inherit;\n}",
    "hints": [
      "Write:\n:where(button, input) {\n  font-family: inherit;\n}"
    ],
    "testCases": [
      {
        "id": "css-136-tc-1",
        "description": "Verifies correct implementation for The :where() Zero-Specificity Selector",
        "testFn": "code.includes(':where(')"
      }
    ]
  },
  {
    "id": "css-137-the-has-parent-selector-css-revo",
    "title": "137. The :has() Parent Selector (CSS Revolution!)",
    "slug": "lesson-137-the-has-parent-selector-css-revo",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The :has() Parent Selector (CSS Revolution!) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "The",
      "CSS3"
    ],
    "analogy": "A metal detector at an airport gate sounding an alarm on the passenger carrying metallic keys.",
    "explanationMarkdown": "### The :has() Parent Selector (CSS Revolution!)\n\nThe previously impossible parent selector: targets an element based on what children it contains!\n\n```css\n.card:has(img) {\n  padding-top: 0;\n}\n```",
    "workedExample": {
      "title": "Worked Example: The :has() Parent Selector (CSS Revolution!)",
      "code": ".card:has(img) {\n  padding-top: 0;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The :has() Parent Selector (CSS Revolution!).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The :has() Parent Selector (CSS Revolution!).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style card parent when it contains an image */\n",
    "solutionCode": ".card:has(img) {\n  padding-top: 0;\n}",
    "hints": [
      "Write:\n.card:has(img) {\n  padding-top: 0;\n}"
    ],
    "testCases": [
      {
        "id": "css-137-tc-1",
        "description": "Verifies correct implementation for The :has() Parent Selector (CSS Revolution!)",
        "testFn": "code.includes(':has(')"
      }
    ]
  },
  {
    "id": "css-138-cascade-layers-with-@layer",
    "title": "138. Cascade Layers with @layer",
    "slug": "lesson-138-cascade-layers-with-@layer",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Cascade Layers with @layer in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Cascade Layers with @layer",
      "CSS3"
    ],
    "analogy": "Geological rock strata: rules in higher layers always beat rules in lower layers regardless of specificity.",
    "explanationMarkdown": "### Cascade Layers with @layer\n\n`@layer` provides explicit control over cascade precedence, eliminating specificity wars in large codebases.\n\n```css\n@layer base, components, utilities;\n@layer base {\n  h1 { margin: 0; }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Cascade Layers with @layer",
      "code": "@layer base, components, utilities;\n@layer base {\n  h1 { margin: 0; }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cascade Layers with @layer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cascade Layers with @layer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Prioritize layers cleanly */\n",
    "solutionCode": "@layer base, components, utilities;\n@layer base {\n  h1 { margin: 0; }\n}",
    "hints": [
      "Write:\n@layer base, components, utilities;\n@layer base {\n  h1 { margin: 0; }\n}"
    ],
    "testCases": [
      {
        "id": "css-138-tc-1",
        "description": "Verifies correct implementation for Cascade Layers with @layer",
        "testFn": "code.includes('@layer')"
      }
    ]
  },
  {
    "id": "css-139-css-color-mix-function",
    "title": "139. CSS color-mix() Function",
    "slug": "lesson-139-css-color-mix-function",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master CSS color-mix() Function in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS color-mix() Function",
      "CSS3"
    ],
    "analogy": "A painter putting two dollops of oil paint on a palette and blending them with a palette knife.",
    "explanationMarkdown": "### CSS color-mix() Function\n\nBlends two colors together in a specified color space (srgb, oklab, hsl) at custom percentages.\n\n```css\n.btn:hover {\n  background-color: color-mix(in srgb, var(--primary) 80%, white);\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS color-mix() Function",
      "code": ".btn:hover {\n  background-color: color-mix(in srgb, var(--primary) 80%, white);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS color-mix() Function.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS color-mix() Function.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Mix brand color with 20% white for hover state */\n",
    "solutionCode": ".btn:hover {\n  background-color: color-mix(in srgb, var(--primary) 80%, white);\n}",
    "hints": [
      "Write:\n.btn:hover {\n  background-color: color-mix(in srgb, var(--primary) 80%, white);\n}"
    ],
    "testCases": [
      {
        "id": "css-139-tc-1",
        "description": "Verifies correct implementation for CSS color-mix() Function",
        "testFn": "code.includes('color-mix(')"
      }
    ]
  },
  {
    "id": "css-140-scroll-snap-scroll-snap-type-&-a",
    "title": "140. Scroll Snap: scroll-snap-type & align",
    "slug": "lesson-140-scroll-snap-scroll-snap-type-&-a",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Scroll Snap: scroll-snap-type & align in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Scroll Snap",
      "CSS3"
    ],
    "analogy": "A magnetic photo carousel snapping each photo cleanly into the center as you swipe.",
    "explanationMarkdown": "### Scroll Snap: scroll-snap-type & align\n\nCreates native carousel and slide deck paging behaviors directly in CSS without JavaScript libraries.\n\n```css\n.slider {\n  scroll-snap-type: x mandatory;\n  overflow-x: scroll;\n}\n.slide {\n  scroll-snap-align: center;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Scroll Snap: scroll-snap-type & align",
      "code": ".slider {\n  scroll-snap-type: x mandatory;\n  overflow-x: scroll;\n}\n.slide {\n  scroll-snap-align: center;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scroll Snap: scroll-snap-type & align.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scroll Snap: scroll-snap-type & align.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Carousel snap alignment */\n",
    "solutionCode": ".slider {\n  scroll-snap-type: x mandatory;\n  overflow-x: scroll;\n}\n.slide {\n  scroll-snap-align: center;\n}",
    "hints": [
      "Write:\n.slider {\n  scroll-snap-type: x mandatory;\n  overflow-x: scroll;\n}\n.slide {\n  scroll-snap-align: center;\n}"
    ],
    "testCases": [
      {
        "id": "css-140-tc-1",
        "description": "Verifies correct implementation for Scroll Snap: scroll-snap-type & align",
        "testFn": "code.includes('scroll-snap-type:') && code.includes('scroll-snap-align:')"
      }
    ]
  },
  {
    "id": "css-141-smooth-scrolling-with-scroll-beh",
    "title": "141. Smooth Scrolling with scroll-behavior",
    "slug": "lesson-141-smooth-scrolling-with-scroll-beh",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Smooth Scrolling with scroll-behavior in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Smooth Scrolling with scroll-behavior",
      "CSS3"
    ],
    "analogy": "An elevator gliding smoothly between floors instead of instantly teleporting.",
    "explanationMarkdown": "### Smooth Scrolling with scroll-behavior\n\nSmoothly animates page scrolling when users click fragment `#hash` anchor links.\n\n```css\nhtml {\n  scroll-behavior: smooth;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Smooth Scrolling with scroll-behavior",
      "code": "html {\n  scroll-behavior: smooth;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Smooth Scrolling with scroll-behavior.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Smooth Scrolling with scroll-behavior.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Enable smooth page anchor navigation */\n",
    "solutionCode": "html {\n  scroll-behavior: smooth;\n}",
    "hints": [
      "Write:\nhtml {\n  scroll-behavior: smooth;\n}"
    ],
    "testCases": [
      {
        "id": "css-141-tc-1",
        "description": "Verifies correct implementation for Smooth Scrolling with scroll-behavior",
        "testFn": "code.includes('scroll-behavior: smooth')"
      }
    ]
  },
  {
    "id": "css-142-masking-with-mask-image",
    "title": "142. Masking with mask-image",
    "slug": "lesson-142-masking-with-mask-image",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Masking with mask-image in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Masking with mask-image",
      "CSS3"
    ],
    "analogy": "Using masking tape on a canvas to prevent spray paint from touching certain areas.",
    "explanationMarkdown": "### Masking with mask-image\n\nMasks an element using graphic gradients or SVG shapes, making parts transparent.\n\n```css\n.fade-bottom {\n  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Masking with mask-image",
      "code": ".fade-bottom {\n  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Masking with mask-image.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Masking with mask-image.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Fade image out to transparent at the bottom */\n",
    "solutionCode": ".fade-bottom {\n  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);\n}",
    "hints": [
      "Write:\n.fade-bottom {\n  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);\n}"
    ],
    "testCases": [
      {
        "id": "css-142-tc-1",
        "description": "Verifies correct implementation for Masking with mask-image",
        "testFn": "code.includes('mask-image:')"
      }
    ]
  },
  {
    "id": "css-143-css-feature-queries-with-@suppor",
    "title": "143. CSS Feature Queries with @supports",
    "slug": "lesson-143-css-feature-queries-with-@suppor",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master CSS Feature Queries with @supports in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS Feature Queries with @supports",
      "CSS3"
    ],
    "analogy": "Checking if a power tool is plugged into the wall before turning on the power switch.",
    "explanationMarkdown": "### CSS Feature Queries with @supports\n\nTests whether the user's browser supports a specific CSS property/value pair before applying it.\n\n```css\n@supports (display: subgrid) {\n  .layout {\n    grid-template-columns: subgrid;\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS Feature Queries with @supports",
      "code": "@supports (display: subgrid) {\n  .layout {\n    grid-template-columns: subgrid;\n  }\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS Feature Queries with @supports.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS Feature Queries with @supports.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Conditional styles for supported browsers */\n",
    "solutionCode": "@supports (display: subgrid) {\n  .layout {\n    grid-template-columns: subgrid;\n  }\n}",
    "hints": [
      "Write:\n@supports (display: subgrid) {\n  .layout {\n    grid-template-columns: subgrid;\n  }\n}"
    ],
    "testCases": [
      {
        "id": "css-143-tc-1",
        "description": "Verifies correct implementation for CSS Feature Queries with @supports",
        "testFn": "code.includes('@supports')"
      }
    ]
  },
  {
    "id": "css-144-light-dark-color-switching-with-",
    "title": "144. Light-Dark Color Switching with light-dark()",
    "slug": "lesson-144-light-dark-color-switching-with-",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Light-Dark Color Switching with light-dark() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Light-Dark Color Switching with light-dark()",
      "CSS3"
    ],
    "analogy": "A smart pair of transitional eyeglasses that darken automatically when exposed to UV sunlight.",
    "explanationMarkdown": "### Light-Dark Color Switching with light-dark()\n\nA modern CSS function that automatically evaluates to the first color in light mode, and second in dark mode.\n\n```css\n:root {\n  color-scheme: light dark;\n}\nbody {\n  background-color: light-dark(#ffffff, #0f172a);\n}\n```",
    "workedExample": {
      "title": "Worked Example: Light-Dark Color Switching with light-dark()",
      "code": ":root {\n  color-scheme: light dark;\n}\nbody {\n  background-color: light-dark(#ffffff, #0f172a);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Light-Dark Color Switching with light-dark().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Light-Dark Color Switching with light-dark().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Automatic system color assignment */\n",
    "solutionCode": ":root {\n  color-scheme: light dark;\n}\nbody {\n  background-color: light-dark(#ffffff, #0f172a);\n}",
    "hints": [
      "Write:\n:root {\n  color-scheme: light dark;\n}\nbody {\n  background-color: light-dark(#ffffff, #0f172a);\n}"
    ],
    "testCases": [
      {
        "id": "css-144-tc-1",
        "description": "Verifies correct implementation for Light-Dark Color Switching with light-dark()",
        "testFn": "code.includes('light-dark(')"
      }
    ]
  },
  {
    "id": "css-145-enterprise-architecture-bem-&-ut",
    "title": "145. Enterprise Architecture: BEM & Utility Hybrids",
    "slug": "lesson-145-enterprise-architecture-bem-&-ut",
    "language": "css",
    "category": "Module 9: CSS Variables & Modern Features",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Enterprise Architecture: BEM & Utility Hybrids in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Enterprise Architecture",
      "CSS3"
    ],
    "analogy": "A structured Lego catalog where every brick has a family, purpose, and variation label.",
    "explanationMarkdown": "### Enterprise Architecture: BEM & Utility Hybrids\n\nBEM (Block, Element, Modifier) methodology keeps large enterprise design systems clean and collision-free.\n\n```css\n.card { padding: 16px; }\n.card__header { font-weight: bold; }\n.card--featured { border: 2px solid gold; }\n```",
    "workedExample": {
      "title": "Worked Example: Enterprise Architecture: BEM & Utility Hybrids",
      "code": ".card { padding: 16px; }\n.card__header { font-weight: bold; }\n.card--featured { border: 2px solid gold; }",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Enterprise Architecture: BEM & Utility Hybrids.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Enterprise Architecture: BEM & Utility Hybrids.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* BEM component architecture */\n",
    "solutionCode": ".card { padding: 16px; }\n.card__header { font-weight: bold; }\n.card--featured { border: 2px solid gold; }",
    "hints": [
      "Write:\n.card { padding: 16px; }\n.card__header { font-weight: bold; }\n.card--featured { border: 2px solid gold; }"
    ],
    "testCases": [
      {
        "id": "css-145-tc-1",
        "description": "Verifies correct implementation for Enterprise Architecture: BEM & Utility Hybrids",
        "testFn": "code.includes('.card__header') || code.includes('.card--')"
      }
    ]
  },
  {
    "id": "css-146-interactive-states-hover,-active",
    "title": "146. Interactive States: :hover, :active, :focus",
    "slug": "lesson-146-interactive-states-hover,-active",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Interactive States: :hover, :active, :focus in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Interactive States",
      "CSS3"
    ],
    "analogy": "A physical light switch: hovered when your finger approaches, active when pressed, focused when selected.",
    "explanationMarkdown": "### Interactive States: :hover, :active, :focus\n\nPseudo-classes matching elements based on user interaction states.\n\n```css\n.btn:hover { opacity: 0.9; }\n.btn:active { transform: scale(0.98); }\n.btn:focus { outline: 2px solid blue; }\n```",
    "workedExample": {
      "title": "Worked Example: Interactive States: :hover, :active, :focus",
      "code": ".btn:hover { opacity: 0.9; }\n.btn:active { transform: scale(0.98); }\n.btn:focus { outline: 2px solid blue; }",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interactive States: :hover, :active, :focus.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interactive States: :hover, :active, :focus.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Interactive button feedback states */\n",
    "solutionCode": ".btn:hover { opacity: 0.9; }\n.btn:active { transform: scale(0.98); }\n.btn:focus { outline: 2px solid blue; }",
    "hints": [
      "Write:\n.btn:hover { opacity: 0.9; }\n.btn:active { transform: scale(0.98); }\n.btn:focus { outline: 2px solid blue; }"
    ],
    "testCases": [
      {
        "id": "css-146-tc-1",
        "description": "Verifies correct implementation for Interactive States: :hover, :active, :focus",
        "testFn": "code.includes(':hover') && code.includes(':active')"
      }
    ]
  },
  {
    "id": "css-147-accessible-keyboard-focus-focus-",
    "title": "147. Accessible Keyboard Focus: :focus-visible",
    "slug": "lesson-147-accessible-keyboard-focus-focus-",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Accessible Keyboard Focus: :focus-visible in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Accessible Keyboard Focus",
      "CSS3"
    ],
    "analogy": "A glowing laser beam that lights up only when navigating by keyboard, staying invisible during mouse clicks.",
    "explanationMarkdown": "### Accessible Keyboard Focus: :focus-visible\n\nApplies focus styles only when the user navigates via keyboard (Tab key) or screen reader.\n\n```css\nbutton:focus-visible {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Accessible Keyboard Focus: :focus-visible",
      "code": "button:focus-visible {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessible Keyboard Focus: :focus-visible.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessible Keyboard Focus: :focus-visible.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Show focus outline only on keyboard navigation */\n",
    "solutionCode": "button:focus-visible {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}",
    "hints": [
      "Write:\nbutton:focus-visible {\n  outline: 2px solid #6366f1;\n  outline-offset: 2px;\n}"
    ],
    "testCases": [
      {
        "id": "css-147-tc-1",
        "description": "Verifies correct implementation for Accessible Keyboard Focus: :focus-visible",
        "testFn": "code.includes(':focus-visible')"
      }
    ]
  },
  {
    "id": "css-148-structural-selectors-nth-childev",
    "title": "148. Structural Selectors: :nth-child(even/odd/An+B)",
    "slug": "lesson-148-structural-selectors-nth-childev",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Structural Selectors: :nth-child(even/odd/An+B) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Structural Selectors",
      "CSS3"
    ],
    "analogy": "Highlighting every alternate zebra stripe in a herd.",
    "explanationMarkdown": "### Structural Selectors: :nth-child(even/odd/An+B)\n\nMatches elements based on their numeric index among siblings under a shared parent.\n\n```css\ntr:nth-child(even) {\n  background-color: #f8fafc;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Structural Selectors: :nth-child(even/odd/An+B)",
      "code": "tr:nth-child(even) {\n  background-color: #f8fafc;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Structural Selectors: :nth-child(even/odd/An+B).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Structural Selectors: :nth-child(even/odd/An+B).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Striped table rows */\n",
    "solutionCode": "tr:nth-child(even) {\n  background-color: #f8fafc;\n}",
    "hints": [
      "Write:\ntr:nth-child(even) {\n  background-color: #f8fafc;\n}"
    ],
    "testCases": [
      {
        "id": "css-148-tc-1",
        "description": "Verifies correct implementation for Structural Selectors: :nth-child(even/odd/An+B)",
        "testFn": "code.includes(':nth-child(')"
      }
    ]
  },
  {
    "id": "css-149-type-matching-with-nth-of-type",
    "title": "149. Type Matching with :nth-of-type",
    "slug": "lesson-149-type-matching-with-nth-of-type",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Type Matching with :nth-of-type in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Type Matching with",
      "CSS3"
    ],
    "analogy": "Counting only golden retrievers in a park filled with cats, birds, and dogs.",
    "explanationMarkdown": "### Type Matching with :nth-of-type\n\nMatches elements of a specific HTML tag type based on their position among siblings of that same type.\n\n```css\np:nth-of-type(2) {\n  font-weight: 600;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Type Matching with :nth-of-type",
      "code": "p:nth-of-type(2) {\n  font-weight: 600;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Matching with :nth-of-type.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Matching with :nth-of-type.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Target second paragraph only */\n",
    "solutionCode": "p:nth-of-type(2) {\n  font-weight: 600;\n}",
    "hints": [
      "Write:\np:nth-of-type(2) {\n  font-weight: 600;\n}"
    ],
    "testCases": [
      {
        "id": "css-149-tc-1",
        "description": "Verifies correct implementation for Type Matching with :nth-of-type",
        "testFn": "code.includes(':nth-of-type(')"
      }
    ]
  },
  {
    "id": "css-150-negation-with-not",
    "title": "150. Negation with :not()",
    "slug": "lesson-150-negation-with-not",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Negation with :not() in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Negation with",
      "CSS3"
    ],
    "analogy": "Inviting all company employees to the holiday party except the security night guard on duty.",
    "explanationMarkdown": "### Negation with :not()\n\nExcludes elements matching the selector inside the parentheses.\n\n```css\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Negation with :not()",
      "code": "button:not(:disabled) {\n  cursor: pointer;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Negation with :not().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Negation with :not().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style all buttons except disabled ones */\n",
    "solutionCode": "button:not(:disabled) {\n  cursor: pointer;\n}",
    "hints": [
      "Write:\nbutton:not(:disabled) {\n  cursor: pointer;\n}"
    ],
    "testCases": [
      {
        "id": "css-150-tc-1",
        "description": "Verifies correct implementation for Negation with :not()",
        "testFn": "code.includes(':not(')"
      }
    ]
  },
  {
    "id": "css-151-first-and-last-items-first-child",
    "title": "151. First and Last Items: :first-child & :last-child",
    "slug": "lesson-151-first-and-last-items-first-child",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master First and Last Items: :first-child & :last-child in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "First and Last Items",
      "CSS3"
    ],
    "analogy": "The front runner and the caboose on a freight train.",
    "explanationMarkdown": "### First and Last Items: :first-child & :last-child\n\nMatches the very first or very last child element within its parent container.\n\n```css\nli:last-child {\n  border-bottom: none;\n}\n```",
    "workedExample": {
      "title": "Worked Example: First and Last Items: :first-child & :last-child",
      "code": "li:last-child {\n  border-bottom: none;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for First and Last Items: :first-child & :last-child.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of First and Last Items: :first-child & :last-child.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Remove bottom border from last list item */\n",
    "solutionCode": "li:last-child {\n  border-bottom: none;\n}",
    "hints": [
      "Write:\nli:last-child {\n  border-bottom: none;\n}"
    ],
    "testCases": [
      {
        "id": "css-151-tc-1",
        "description": "Verifies correct implementation for First and Last Items: :first-child & :last-child",
        "testFn": "code.includes(':last-child') || code.includes(':first-child')"
      }
    ]
  },
  {
    "id": "css-152-empty-container-detection-with-e",
    "title": "152. Empty Container Detection with :empty",
    "slug": "lesson-152-empty-container-detection-with-e",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Empty Container Detection with :empty in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Empty Container Detection with",
      "CSS3"
    ],
    "analogy": "A mailbox folding flat against the wall when there are zero letters inside.",
    "explanationMarkdown": "### Empty Container Detection with :empty\n\nMatches elements that have no children at all (neither child elements nor whitespace text nodes).\n\n```css\n.alert:empty {\n  display: none;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Empty Container Detection with :empty",
      "code": ".alert:empty {\n  display: none;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Empty Container Detection with :empty.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Empty Container Detection with :empty.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Hide alert box when empty */\n",
    "solutionCode": ".alert:empty {\n  display: none;\n}",
    "hints": [
      "Write:\n.alert:empty {\n  display: none;\n}"
    ],
    "testCases": [
      {
        "id": "css-152-tc-1",
        "description": "Verifies correct implementation for Empty Container Detection with :empty",
        "testFn": "code.includes(':empty')"
      }
    ]
  },
  {
    "id": "css-153-form-validation-states-valid,-in",
    "title": "153. Form Validation States: :valid, :invalid, :required",
    "slug": "lesson-153-form-validation-states-valid,-in",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Form Validation States: :valid, :invalid, :required in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Form Validation States",
      "CSS3"
    ],
    "analogy": "A passport scanner flashing green when valid and red when expired.",
    "explanationMarkdown": "### Form Validation States: :valid, :invalid, :required\n\nApplies styles dynamically based on whether form controls meet validation constraints.\n\n```css\ninput:valid {\n  border-color: #10b981;\n}\ninput:invalid:not(:placeholder-shown) {\n  border-color: #ef4444;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Form Validation States: :valid, :invalid, :required",
      "code": "input:valid {\n  border-color: #10b981;\n}\ninput:invalid:not(:placeholder-shown) {\n  border-color: #ef4444;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Form Validation States: :valid, :invalid, :required.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Form Validation States: :valid, :invalid, :required.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Visual green border on valid email */\n",
    "solutionCode": "input:valid {\n  border-color: #10b981;\n}\ninput:invalid:not(:placeholder-shown) {\n  border-color: #ef4444;\n}",
    "hints": [
      "Write:\ninput:valid {\n  border-color: #10b981;\n}\ninput:invalid:not(:placeholder-shown) {\n  border-color: #ef4444;\n}"
    ],
    "testCases": [
      {
        "id": "css-153-tc-1",
        "description": "Verifies correct implementation for Form Validation States: :valid, :invalid, :required",
        "testFn": "code.includes(':valid') && code.includes(':invalid')"
      }
    ]
  },
  {
    "id": "css-154-disabled-and-checked-states-disa",
    "title": "154. Disabled and Checked States: :disabled & :checked",
    "slug": "lesson-154-disabled-and-checked-states-disa",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Disabled and Checked States: :disabled & :checked in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Disabled and Checked States",
      "CSS3"
    ],
    "analogy": "A padlocked door handle that resists pulling.",
    "explanationMarkdown": "### Disabled and Checked States: :disabled & :checked\n\nTargets form controls in inactive or selected states.\n\n```css\ninput:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Disabled and Checked States: :disabled & :checked",
      "code": "input:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Disabled and Checked States: :disabled & :checked.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Disabled and Checked States: :disabled & :checked.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Dim disabled inputs and style custom checkboxes */\n",
    "solutionCode": "input:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
    "hints": [
      "Write:\ninput:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}"
    ],
    "testCases": [
      {
        "id": "css-154-tc-1",
        "description": "Verifies correct implementation for Disabled and Checked States: :disabled & :checked",
        "testFn": "code.includes(':disabled')"
      }
    ]
  },
  {
    "id": "css-155-placeholder-styling-with-placeho",
    "title": "155. Placeholder Styling with ::placeholder",
    "slug": "lesson-155-placeholder-styling-with-placeho",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Placeholder Styling with ::placeholder in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Placeholder Styling with",
      "CSS3"
    ],
    "analogy": "The faint pencil sketch guidelines showing where to sign your signature.",
    "explanationMarkdown": "### Placeholder Styling with ::placeholder\n\nStyles the preview ghost text inside `<input>` and `<textarea>` elements.\n\n```css\ninput::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Placeholder Styling with ::placeholder",
      "code": "input::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Placeholder Styling with ::placeholder.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Placeholder Styling with ::placeholder.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Style input placeholder text */\n",
    "solutionCode": "input::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}",
    "hints": [
      "Write:\ninput::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}"
    ],
    "testCases": [
      {
        "id": "css-155-tc-1",
        "description": "Verifies correct implementation for Placeholder Styling with ::placeholder",
        "testFn": "code.includes('::placeholder')"
      }
    ]
  },
  {
    "id": "css-156-custom-text-highlight-with-selec",
    "title": "156. Custom Text Highlight with ::selection",
    "slug": "lesson-156-custom-text-highlight-with-selec",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Custom Text Highlight with ::selection in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Custom Text Highlight with",
      "CSS3"
    ],
    "analogy": "Using a neon purple highlighter marker across printed text.",
    "explanationMarkdown": "### Custom Text Highlight with ::selection\n\nStyles the portions of document text highlighted and selected by the user's cursor.\n\n```css\n::selection {\n  background-color: #6366f1;\n  color: #ffffff;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Text Highlight with ::selection",
      "code": "::selection {\n  background-color: #6366f1;\n  color: #ffffff;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Text Highlight with ::selection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Text Highlight with ::selection.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Custom brand selection highlight */\n",
    "solutionCode": "::selection {\n  background-color: #6366f1;\n  color: #ffffff;\n}",
    "hints": [
      "Write:\n::selection {\n  background-color: #6366f1;\n  color: #ffffff;\n}"
    ],
    "testCases": [
      {
        "id": "css-156-tc-1",
        "description": "Verifies correct implementation for Custom Text Highlight with ::selection",
        "testFn": "code.includes('::selection')"
      }
    ]
  },
  {
    "id": "css-157-generated-content-with-before-an",
    "title": "157. Generated Content with ::before and ::after",
    "slug": "lesson-157-generated-content-with-before-an",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Generated Content with ::before and ::after in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Generated Content with",
      "CSS3"
    ],
    "analogy": "Sticking a decorative wax seal stamp on an envelope without writing on the paper itself.",
    "explanationMarkdown": "### Generated Content with ::before and ::after\n\nInjects cosmetic pseudo-elements before or after an element's real content via the `content` property.\n\n```css\nblockquote::before {\n  content: '\u201c';\n  font-size: 2rem;\n  color: #818cf8;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Generated Content with ::before and ::after",
      "code": "blockquote::before {\n  content: '\u201c';\n  font-size: 2rem;\n  color: #818cf8;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generated Content with ::before and ::after.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generated Content with ::before and ::after.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Prepend decorative quote mark */\n",
    "solutionCode": "blockquote::before {\n  content: '\u201c';\n  font-size: 2rem;\n  color: #818cf8;\n}",
    "hints": [
      "Write:\nblockquote::before {\n  content: '\u201c';\n  font-size: 2rem;\n  color: #818cf8;\n}"
    ],
    "testCases": [
      {
        "id": "css-157-tc-1",
        "description": "Verifies correct implementation for Generated Content with ::before and ::after",
        "testFn": "code.includes('::before') && code.includes('content:')"
      }
    ]
  },
  {
    "id": "css-158-custom-scrollbar-styling-scrollb",
    "title": "158. Custom Scrollbar Styling (scrollbar-color)",
    "slug": "lesson-158-custom-scrollbar-styling-scrollb",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Custom Scrollbar Styling (scrollbar-color) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Custom Scrollbar Styling (scrollbar-color)",
      "CSS3"
    ],
    "analogy": "Customizing the finish on the handrail of a moving airport walkway.",
    "explanationMarkdown": "### Custom Scrollbar Styling (scrollbar-color)\n\nStyles scrollbar thickness and thumb/track colors across modern browser engines.\n\n```css\n* {\n  scrollbar-width: thin;\n  scrollbar-color: #6366f1 #0f172a;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Custom Scrollbar Styling (scrollbar-color)",
      "code": "* {\n  scrollbar-width: thin;\n  scrollbar-color: #6366f1 #0f172a;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Custom Scrollbar Styling (scrollbar-color).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Custom Scrollbar Styling (scrollbar-color).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Custom modern scrollbar */\n",
    "solutionCode": "* {\n  scrollbar-width: thin;\n  scrollbar-color: #6366f1 #0f172a;\n}",
    "hints": [
      "Write:\n* {\n  scrollbar-width: thin;\n  scrollbar-color: #6366f1 #0f172a;\n}"
    ],
    "testCases": [
      {
        "id": "css-158-tc-1",
        "description": "Verifies correct implementation for Custom Scrollbar Styling (scrollbar-color)",
        "testFn": "code.includes('scrollbar-width:') || code.includes('scrollbar-color:')"
      }
    ]
  },
  {
    "id": "css-159-content-visibility-for-instant-p",
    "title": "159. Content Visibility for Instant Performance (content-visibility: auto)",
    "slug": "lesson-159-content-visibility-for-instant-p",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Content Visibility for Instant Performance (content-visibility: auto) in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "Content Visibility for Instant Performance (content-visibility",
      "CSS3"
    ],
    "analogy": "Turning off the spotlights in stadium hallways where no spectators are currently walking.",
    "explanationMarkdown": "### Content Visibility for Instant Performance (content-visibility: auto)\n\nSkips rendering and painting of off-screen elements until scrolled into view, speeding up pages 10x!\n\n```css\n.long-list-item {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 350px;\n}\n```",
    "workedExample": {
      "title": "Worked Example: Content Visibility for Instant Performance (content-visibility: auto)",
      "code": ".long-list-item {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 350px;\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Content Visibility for Instant Performance (content-visibility: auto).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Content Visibility for Instant Performance (content-visibility: auto).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Skip off-screen DOM layout and paint */\n",
    "solutionCode": ".long-list-item {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 350px;\n}",
    "hints": [
      "Write:\n.long-list-item {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 350px;\n}"
    ],
    "testCases": [
      {
        "id": "css-159-tc-1",
        "description": "Verifies correct implementation for Content Visibility for Instant Performance (content-visibility: auto)",
        "testFn": "code.includes('content-visibility: auto')"
      }
    ]
  },
  {
    "id": "css-160-css3-masterclass-capstone-enterp",
    "title": "160. CSS3 Masterclass Capstone: Enterprise Design System",
    "slug": "lesson-160-css3-masterclass-capstone-enterp",
    "language": "css",
    "category": "Module 10: Advanced Pseudo-Classes & Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master CSS3 Masterclass Capstone: Enterprise Design System in CSS3: Modern Layouts, Flexbox & Grid (150 Topics).",
    "concepts": [
      "CSS3 Masterclass Capstone",
      "CSS3"
    ],
    "analogy": "A world-class architectural skyscraper engineered with precision modular materials.",
    "explanationMarkdown": "### CSS3 Masterclass Capstone: Enterprise Design System\n\nA complete production-ready design system token architecture balancing grid, variables, and typography.\n\n```css\n:root {\n  --primary: #6366f1;\n  --radius: 12px;\n}\n.card {\n  display: grid;\n  gap: 16px;\n  padding: 24px;\n  border-radius: var(--radius);\n  background-color: #ffffff;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n}\n```",
    "workedExample": {
      "title": "Worked Example: CSS3 Masterclass Capstone: Enterprise Design System",
      "code": ":root {\n  --primary: #6366f1;\n  --radius: 12px;\n}\n.card {\n  display: grid;\n  gap: 16px;\n  padding: 24px;\n  border-radius: var(--radius);\n  background-color: #ffffff;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CSS3 Masterclass Capstone: Enterprise Design System.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CSS3 Masterclass Capstone: Enterprise Design System.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "/* Masterclass design system token integration */\n",
    "solutionCode": ":root {\n  --primary: #6366f1;\n  --radius: 12px;\n}\n.card {\n  display: grid;\n  gap: 16px;\n  padding: 24px;\n  border-radius: var(--radius);\n  background-color: #ffffff;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n}",
    "hints": [
      "Write:\n:root {\n  --primary: #6366f1;\n  --radius: 12px;\n}\n.card {\n  display: grid;\n  gap: 16px;\n  padding: 24px;\n  border-radius: var(--radius);\n  background-color: #ffffff;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n}"
    ],
    "testCases": [
      {
        "id": "css-160-tc-1",
        "description": "Verifies correct implementation for CSS3 Masterclass Capstone: Enterprise Design System",
        "testFn": "code.includes('--primary:') && code.includes('display: grid') && code.includes('border-radius:')"
      }
    ]
  }
]
};
