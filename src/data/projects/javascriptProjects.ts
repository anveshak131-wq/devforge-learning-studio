import { GuidedProject } from '../../types';
export { KANBAN_PROJECT } from './kanbanProject';

export const JS_MARKDOWN_AST_PROJECT: GuidedProject = {
  id: 'project-js-markdown-ast',
  title: 'Markdown-to-HTML AST Compiler',
  slug: 'js-markdown-ast-compiler',
  language: 'javascript',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Build a recursive descent lexical tokenizer and Abstract Syntax Tree (AST) compiler for Markdown.',
  description: 'Understand how compilers and markdown renderers like Marked and Babel work. You will write a tokenizer that transforms raw Markdown text into structured tokens, constructs an Abstract Syntax Tree (AST) representing document hierarchy, and recursively renders clean, XSS-sanitized HTML.',
  previewType: 'console',
  whatYouWillBuild: [
    'A lexical Tokenizer identifying headers, code blocks, lists, and bold text',
    'An Abstract Syntax Tree (AST) generator with nested token nodes',
    'A safe HTML Generator with XSS entity escaping',
    'Support for multiline fenced code blocks and unordered list nesting'
  ],
  skillsLearned: [
    'Lexical analysis and token streams',
    'Abstract Syntax Tree (AST) data models',
    'Compiler traversal and code generation',
    'XSS sanitization security principles'
  ],
  milestones: [
    {
      id: 'js-ast-m1',
      stepNumber: 1,
      title: 'Milestone 1: Lexical Analysis & Tokenizer Stream',
      instructionMarkdown: `
### Milestone 1: Markdown Lexer
Implement \`MarkdownTokenizer.tokenize(markdown_text)\`:
- Scans input line-by-line and generates an array of tokens:
  - Lines starting with \`# \` -> \`{ type: 'h1', text: '...' }\`
  - Lines starting with \`## \` -> \`{ type: 'h2', text: '...' }\`
  - Lines starting with \`- \` -> \`{ type: 'list_item', text: '...' }\`
  - Normal text lines -> \`{ type: 'paragraph', text: '...' }\`
- Ignores blank lines.
      `,
      starterCode: `class MarkdownTokenizer {
  static tokenize(markdown) {
    // Return array of token objects: { type, text }
  }
}

const sample = \`# Heading 1
This is a standard paragraph.
- Bullet item 1
- Bullet item 2\`;

console.log(MarkdownTokenizer.tokenize(sample));
`,
      solutionCode: `class MarkdownTokenizer {
  static tokenize(markdown) {
    const lines = markdown.split('\\n');
    const tokens = [];

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) continue;

      if (line.startsWith('# ')) {
        tokens.push({ type: 'h1', text: line.slice(2).trim() });
      } else if (line.startsWith('## ')) {
        tokens.push({ type: 'h2', text: line.slice(3).trim() });
      } else if (line.startsWith('- ')) {
        tokens.push({ type: 'list_item', text: line.slice(2).trim() });
      } else {
        tokens.push({ type: 'paragraph', text: line });
      }
    }
    return tokens;
  }
}
`,
      hints: [
        'Use line.startsWith(\'# \') and line.slice(2) for headers.',
        'Filter out empty lines using if (!line) continue;.'
      ],
      testCases: [
        {
          id: 'js-ast-tc1',
          description: 'MarkdownTokenizer returns token array identifying h1, h2, list_item, and paragraph',
          testFn: `(() => {
            const tokens = MarkdownTokenizer.tokenize('# Hello\\n## Sub\\nParagraph\\n- Item');
            return tokens.length === 4 && tokens[0].type === 'h1' && tokens[1].type === 'h2' && tokens[2].type === 'paragraph' && tokens[3].type === 'list_item';
          })()`,
          expectedMessage: 'Must tokenize h1, h2, paragraph, and list_item'
        }
      ]
    }
  ]
};

export const JS_VDOM_ENGINE_PROJECT: GuidedProject = {
  id: 'project-js-vdom-engine',
  title: 'Reactive Virtual DOM & Reconciliation Engine',
  slug: 'js-vdom-reconciliation-engine',
  language: 'javascript',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Build the core engine behind React: createElement, Virtual DOM tree diffing, and targeted DOM patching.',
  description: 'Demystify modern frontend frameworks by building your own Virtual DOM from scratch. You will implement a createElement function generating lightweight VNode objects, a recursive tree diffing algorithm identifying minimal node mutations, and a patch engine executing targeted real DOM updates.',
  previewType: 'console',
  whatYouWillBuild: [
    'A createElement(type, props, ...children) VNode factory',
    'A render(vnode) compiler transforming VNodes into real DOM elements',
    'A tree diffing algorithm diff(oldVNode, newVNode) calculating patches',
    'A patch(parentDom, patches) engine applying minimal DOM mutations'
  ],
  skillsLearned: [
    'Virtual DOM architecture and VNode specifications',
    'Recursive tree diffing and reconciliation heuristics',
    'DOM manipulation efficiency and batch updates',
    'Frontend framework internals (React/Preact)'
  ],
  milestones: [
    {
      id: 'js-vdom-m1',
      stepNumber: 1,
      title: 'Milestone 1: VNode Factory & Real DOM Mount Engine',
      instructionMarkdown: `
### Milestone 1: createElement & Mount
Implement:
- \`h(tag, props, ...children)\`: Creates and returns a VNode object:
  \`{ tag, props: props || {}, children: children.flat() }\`.
  (Strings/numbers in children can remain raw strings).
- \`renderVNode(vnode)\`:
  - If vnode is a string/number, returns \`document.createTextNode(String(vnode))\`.
  - Creates real element \`document.createElement(vnode.tag)\`.
  - Sets attributes from \`vnode.props\` (e.g. \`id\`, \`className\`).
  - Recursively appends rendered children.
  - Returns the real DOM element.
      `,
      starterCode: `function h(tag, props, ...children) {
  // Return VNode object
}

function renderVNode(vnode) {
  // Return real DOM element or text node
}

const vdom = h('div', { id: 'app' },
  h('h1', null, 'Hello DevForge'),
  h('p', { className: 'subtitle' }, 'Built from scratch')
);

console.log("VNode tree:", JSON.stringify(vdom, null, 2));
`,
      solutionCode: `function h(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat()
  };
}

function renderVNode(vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }

  const el = document.createElement(vnode.tag);
  const props = vnode.props || {};

  for (const [key, value] of Object.entries(props)) {
    if (key === 'className') {
      el.className = value;
    } else {
      el.setAttribute(key, value);
    }
  }

  for (const child of vnode.children || []) {
    el.appendChild(renderVNode(child));
  }

  return el;
}
`,
      hints: [
        'Use children.flat() to handle nested arrays of child elements.',
        'Check typeof vnode === \'string\' to create document.createTextNode.'
      ],
      testCases: [
        {
          id: 'js-vdom-tc1',
          description: 'h creates VNode object and renderVNode creates real DOM tree with props and children',
          testFn: `(() => {
            const vnode = h('div', { id: 'test' }, h('span', null, 'inner'));
            return vnode.tag === 'div' && vnode.props.id === 'test' && vnode.children.length === 1;
          })()`,
          expectedMessage: 'h must construct proper VNode hierarchy'
        }
      ]
    }
  ]
};
