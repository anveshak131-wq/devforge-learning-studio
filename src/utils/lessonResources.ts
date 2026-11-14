import { Language } from '../types';

/**
 * Official documentation links per language (for reference only)
 */
export const TRACK_OFFICIAL_DOCS: Record<Language, { name: string; url: string; cheatSheetUrl: string }> = {
  python: {
    name: 'Python 3 Official Docs',
    url: 'https://docs.python.org/3/',
    cheatSheetUrl: 'https://docs.python.org/3/tutorial/index.html'
  },
  javascript: {
    name: 'MDN Web Docs: JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    cheatSheetUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference'
  },
  typescript: {
    name: 'TypeScript Handbook',
    url: 'https://www.typescriptlang.org/docs/',
    cheatSheetUrl: 'https://www.typescriptlang.org/cheatsheets'
  },
  sql: {
    name: 'SQLite Documentation',
    url: 'https://www.sqlite.org/lang.html',
    cheatSheetUrl: 'https://www.sqltutorial.org/sql-cheat-sheet/'
  },
  react: {
    name: 'React 19 Official Documentation',
    url: 'https://react.dev/learn',
    cheatSheetUrl: 'https://react.dev/reference/react'
  },
  nodejs: {
    name: 'Node.js API Reference',
    url: 'https://nodejs.org/docs/latest/api/',
    cheatSheetUrl: 'https://nodejs.dev/en/learn/'
  },
  html: {
    name: 'MDN Web Docs: HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    cheatSheetUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element'
  },
  css: {
    name: 'MDN Web Docs: CSS3',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    cheatSheetUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference'
  },
  dsa: {
    name: 'Visualgo Algorithm Visualizer',
    url: 'https://visualgo.net/',
    cheatSheetUrl: 'https://www.bigocheatsheet.com/'
  },
  git: {
    name: 'Git Official Reference Manual',
    url: 'https://git-scm.com/doc',
    cheatSheetUrl: 'https://education.github.com/git-cheat-sheet-education.pdf'
  },
  docker: {
    name: 'Docker Official Documentation',
    url: 'https://docs.docker.com/',
    cheatSheetUrl: 'https://docs.docker.com/get-started/'
  },
  bash: {
    name: 'GNU Bash Reference Manual',
    url: 'https://www.gnu.org/software/bash/manual/',
    cheatSheetUrl: 'https://devhints.io/bash'
  },
  golang: {
    name: 'Go Documentation',
    url: 'https://go.dev/doc/',
    cheatSheetUrl: 'https://go.dev/ref/spec'
  },
  rust: {
    name: 'The Rust Reference Book',
    url: 'https://doc.rust-lang.org/book/',
    cheatSheetUrl: 'https://cheats.rs/'
  }
};
