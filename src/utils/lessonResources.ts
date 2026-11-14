import { Language, Lesson, Track } from '../types';

export interface LessonResourceItem {
  type: 'video' | 'slides' | 'pdf' | 'docs' | 'cheatsheet';
  title: string;
  description: string;
  url: string;
  badge?: string;
  isExternal?: boolean;
}

/**
 * Curated high-definition YouTube video tutorials per language track
 */
export const TRACK_CURATED_VIDEOS: Record<Language, { videoId: string; title: string; channel: string }> = {
  python: {
    videoId: 'kqtD5dpn9C8',
    title: 'Python for Beginners: Full Course',
    channel: 'Programming with Mosh'
  },
  javascript: {
    videoId: 'W6NZfCO5SIk',
    title: 'JavaScript Tutorial for Beginners',
    channel: 'Programming with Mosh'
  },
  typescript: {
    videoId: 'BwuLxPH8IDs',
    title: 'TypeScript Course for Beginners',
    channel: 'freeCodeCamp.org'
  },
  sql: {
    videoId: 'HXV3zeQKqGY',
    title: 'SQL Tutorial: Full Database Course',
    channel: 'freeCodeCamp.org'
  },
  react: {
    videoId: 'bMknfKXIFA8',
    title: 'React Course: Beginner to Pro',
    channel: 'freeCodeCamp.org'
  },
  nodejs: {
    videoId: 'TlB_eWDSMt4',
    title: 'Node.js Full Course for Beginners',
    channel: 'Dave Gray'
  },
  html: {
    videoId: 'kUMe1FH4CHE',
    title: 'HTML Full Course: Build a Website',
    channel: 'freeCodeCamp.org'
  },
  css: {
    videoId: '1PnVor36_40',
    title: 'CSS Tutorial: Zero to Hero',
    channel: 'freeCodeCamp.org'
  },
  dsa: {
    videoId: '8hly31xKli0',
    title: 'Algorithms and Data Structures',
    channel: 'freeCodeCamp.org'
  },
  git: {
    videoId: 'RGOj5yH7evk',
    title: 'Git and GitHub for Beginners',
    channel: 'freeCodeCamp.org'
  },
  docker: {
    videoId: 'pg19Z8LL06w',
    title: 'Docker Tutorial for Beginners',
    channel: 'TechWorld with Nana'
  },
  bash: {
    videoId: 'e7BufAVwDiM',
    title: 'Linux Command Line Tutorial',
    channel: 'freeCodeCamp.org'
  },
  golang: {
    videoId: 'un6ZyFkqFJU',
    title: 'Go Programming: Complete Bootcamp',
    channel: 'freeCodeCamp.org'
  },
  rust: {
    videoId: 'BpPEoQ479wM',
    title: 'Rust Programming Course for Beginners',
    channel: 'freeCodeCamp.org'
  }
};

/**
 * Official documentation links per language
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
    name: 'The Go Programming Language Docs',
    url: 'https://go.dev/doc/',
    cheatSheetUrl: 'https://go.dev/ref/spec'
  },
  rust: {
    name: 'The Rust Programming Language Book',
    url: 'https://doc.rust-lang.org/book/',
    cheatSheetUrl: 'https://cheats.rs/'
  }
};

/**
 * Resolves active or fallback video URL for any lesson
 */
export function resolveLessonVideo(lesson: Lesson): { url: string; title: string; watchUrl: string; isCuratedFallback: boolean } {
  if (lesson.media?.videoUrl && lesson.media.videoUrl.trim()) {
    const raw = lesson.media.videoUrl.trim();
    return {
      url: raw,
      title: lesson.media.videoTitle || `${lesson.title} - Video Lecture`,
      watchUrl: raw.startsWith('http') ? raw : `https://www.youtube.com/watch?v=${raw}`,
      isCuratedFallback: false
    };
  }

  if (lesson.videoUrl && lesson.videoUrl.trim()) {
    const raw = lesson.videoUrl.trim();
    return {
      url: raw,
      title: `${lesson.title} - Video Walkthrough`,
      watchUrl: raw.startsWith('http') ? raw : `https://www.youtube.com/watch?v=${raw}`,
      isCuratedFallback: false
    };
  }

  const curated = TRACK_CURATED_VIDEOS[lesson.language] || TRACK_CURATED_VIDEOS.python;
  const watchUrl = `https://www.youtube.com/watch?v=${curated.videoId}`;
  return {
    url: watchUrl,
    title: `${lesson.title} - ${curated.title} (${curated.channel})`,
    watchUrl,
    isCuratedFallback: true
  };
}

/**
 * Formats and prints a professional academic PDF study sheet for the lesson
 */
export function printLessonPdf(lesson: Lesson, trackTitle = 'DevForge Course'): void {
  const printWindow = window.open('', '_blank', 'width=880,height=900');
  if (!printWindow) {
    alert('Please allow popups to download or print the PDF study guide.');
    return;
  }

  const cleanedMarkdown = lesson.explanationMarkdown
    .replace(/```[a-z]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '<br><br>');

  const checklistHtml = lesson.testCases
    .map((tc, idx) => `<li><strong>Goal ${idx + 1}:</strong> ${escapeHtml(tc.description)}</li>`)
    .join('');

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(lesson.title)} - DevForge Study Guide</title>
  <style>
    @page { margin: 18mm 16mm; size: A4; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.55;
      font-size: 13px;
      margin: 0;
      padding: 24px;
    }
    .header {
      border-bottom: 2px solid #4f46e5;
      padding-bottom: 12px;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .logo {
      font-size: 18px;
      font-weight: 900;
      color: #4f46e5;
      letter-spacing: -0.5px;
    }
    .tag {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: #64748b;
    }
    h1 {
      font-size: 20px;
      font-weight: 800;
      margin: 0 0 6px 0;
      color: #0f172a;
    }
    .meta-bar {
      display: flex;
      gap: 12px;
      font-size: 11px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 16px;
    }
    .badge {
      background: #f1f5f9;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #cbd5e1;
    }
    .analogy-box {
      background: #eef2ff;
      border-left: 4px solid #6366f1;
      padding: 10px 14px;
      margin-bottom: 18px;
      border-radius: 0 6px 6px 0;
    }
    .analogy-title {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      color: #4338ca;
      letter-spacing: 0.5px;
    }
    .analogy-text {
      font-style: italic;
      color: #1e1b4b;
      margin: 4px 0 0 0;
      font-size: 12.5px;
    }
    h2 {
      font-size: 14px;
      font-weight: 700;
      color: #1e293b;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin: 18px 0 8px 0;
    }
    pre {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px 12px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
      color: #0f172a;
      overflow-x: auto;
      margin: 8px 0;
    }
    ul, ol {
      margin: 6px 0 12px 18px;
      padding: 0;
    }
    li {
      margin-bottom: 4px;
    }
    .checklist-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 6px;
      padding: 12px;
      margin-top: 18px;
    }
    .checklist-title {
      font-size: 12px;
      font-weight: 800;
      color: #166534;
      margin-bottom: 6px;
    }
    .footer {
      margin-top: 28px;
      padding-top: 8px;
      border-top: 1px solid #e2e8f0;
      font-size: 10px;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="logo">DevForge Learning Studio</div>
      <div class="tag">${escapeHtml(trackTitle)} &bull; ${escapeHtml(lesson.category)}</div>
    </div>
    <div class="meta-bar">
      <span class="badge">Tier: ${escapeHtml(lesson.tierName || 'Foundations')}</span>
      <span class="badge">Difficulty: ${escapeHtml(lesson.difficulty)}</span>
      <span class="badge">+${lesson.xp} XP</span>
    </div>
  </div>

  <h1>${escapeHtml(lesson.title)}</h1>
  <p style="color: #475569; margin: 0 0 14px 0;">${escapeHtml(lesson.description)}</p>

  ${lesson.analogy ? `
    <div class="analogy-box">
      <div class="analogy-title">Real-World Intuitive Analogy</div>
      <div class="analogy-text">"${escapeHtml(lesson.analogy)}"</div>
    </div>
  ` : ''}

  <h2>Core Concept &amp; Notes</h2>
  <div>${cleanedMarkdown}</div>

  ${lesson.workedExample ? `
    <h2>Worked Example: ${escapeHtml(lesson.workedExample.title)}</h2>
    <pre><code>${escapeHtml(lesson.workedExample.code)}</code></pre>
    <p><strong>Explanation:</strong> ${escapeHtml(lesson.workedExample.explanation)}</p>
    ${lesson.workedExample.expectedOutput ? `<p><strong>Expected Output:</strong> <code>${escapeHtml(lesson.workedExample.expectedOutput)}</code></p>` : ''}
  ` : ''}

  <div class="checklist-box">
    <div class="checklist-title">Mission Checklist &amp; Verification Targets</div>
    <ul>${checklistHtml}</ul>
  </div>

  <div class="footer">
    <span>DevForge Interactive Engineering Platform &bull; Printed Study Reference</span>
    <span>https://devforge-65f.pages.dev</span>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 350);
    };
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}

function escapeHtml(str: string): string {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
