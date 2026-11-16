import { GuidedProject } from '../../types';

export const HTML_ACCESSIBLE_FORM_PROJECT: GuidedProject = {
  id: 'project-html-accessible-form',
  title: 'Accessible Multi-Step Survey & Evaluation Form',
  slug: 'html-accessible-form',
  language: 'html',
  difficulty: 'Beginner',
  tier: 1,
  priceInr: 49,
  estimatedHours: 1.5,
  xpReward: 40,
  tagline: 'Write accessible HTML5 forms using semantic fieldsets, ARIA live regions, and screen-reader compatibility.',
  description: 'Master web accessibility (WCAG 2.1 AA) in HTML5. You will structure a complex multi-step evaluation form using native semantic tags (<fieldset>, <legend>, <output>), explicit label associations, aria-describedby error feedback, and keyboard-focusable form controls without relying on framework bloat.',
  previewType: 'dom',
  whatYouWillBuild: [
    'A multi-step Form structure with semantic <fieldset> groupings',
    'ARIA attributes (aria-required, aria-invalid, aria-describedby)',
    'Screen-reader accessible status announcements with role="status"',
    'Native HTML5 validation constraints (pattern, min, max, required)'
  ],
  skillsLearned: [
    'WCAG 2.1 AA compliance & Screen reader accessibility',
    'Semantic HTML form elements (<fieldset>, <legend>, <label>)',
    'ARIA landmarks and live regions',
    'Native HTML5 client-side validation'
  ],
  milestones: [
    {
      id: 'html-form-m1',
      stepNumber: 1,
      title: 'Milestone 1: Semantic Accessible Form Structure',
      instructionMarkdown: `
### Milestone 1: Accessible HTML Form
Write a complete semantic HTML form:
- Uses a \`<form id="survey-form" novalidate>\`.
- Groups fields inside a \`<fieldset>\` with a descriptive \`<legend>Developer Profile</legend>\`.
- Text input for Full Name:
  - Linked explicitly to a \`<label for="full-name">Full Name</label>\`.
  - Has \`id="full-name"\`, \`name="fullName"\`, \`required\`, and \`aria-required="true"\`.
- Radio button group for Experience Level (Junior, Senior):
  - Uses a nested \`<fieldset>\` with \`<legend>Experience Level</legend>\`.
  - Radio inputs each linked to their own \`<label>\`.
- A submit button: \`<button type="submit">Submit Evaluation</button>\`.
      `,
      starterCode: `<!-- Write accessible semantic form below -->
<form id="survey-form" novalidate>
  <!-- Add fieldset, legend, labels, inputs, and button -->
</form>
`,
      solutionCode: `<form id="survey-form" novalidate>
  <fieldset>
    <legend>Developer Profile</legend>

    <div class="form-group">
      <label for="full-name">Full Name</label>
      <input type="text" id="full-name" name="fullName" required aria-required="true" />
    </div>

    <fieldset>
      <legend>Experience Level</legend>
      <label>
        <input type="radio" name="experience" value="junior" required /> Junior Developer
      </label>
      <label>
        <input type="radio" name="experience" value="senior" /> Senior Developer
      </label>
    </fieldset>

    <button type="submit">Submit Evaluation</button>
  </fieldset>
</form>
`,
      hints: [
        'Always link inputs to labels with for="id".',
        'Use <fieldset> and <legend> to group related inputs semantically.'
      ],
      testCases: [
        {
          id: 'html-form-tc1',
          description: 'Form includes fieldset, legend, label with for attribute, and aria-required',
          testFn: `(() => {
            return code.includes('<fieldset') && code.includes('<legend') && code.includes('for="') && code.includes('aria-required="true"');
          })()`,
          expectedMessage: 'Must use semantic fieldset, legend, label for, and aria-required'
        }
      ]
    }
  ]
};

export const CSS_PRICING_GRID_PROJECT: GuidedProject = {
  id: 'project-css-pricing-grid',
  title: 'Responsive SaaS Pricing Grid with Billing Toggle',
  slug: 'css-pricing-grid',
  language: 'css',
  difficulty: 'Beginner',
  tier: 1,
  priceInr: 49,
  estimatedHours: 1.5,
  xpReward: 40,
  tagline: 'Design a responsive 3-tier SaaS pricing component using modern CSS Grid, Flexbox, and CSS variables.',
  description: 'Build a production-quality SaaS pricing component inspired by Stripe and Vercel. You will use CSS Grid for auto-responsive column layouts, CSS custom properties (variables) for theme consistency, Flexbox for card alignment, and pseudo-elements for feature badges without relying on any CSS framework.',
  previewType: 'dom',
  whatYouWillBuild: [
    'A CSS Grid layout auto-fitting from 1 column on mobile to 3 columns on desktop',
    'A highlighted "Most Popular" pricing tier with badge overlays',
    'CSS custom properties (--primary-color, --card-bg, --radius)',
    'Fluid typography with clamp() and responsive spacing'
  ],
  skillsLearned: [
    'CSS Grid (repeat(auto-fit, minmax(...)))',
    'CSS Custom Properties (Variables)',
    'Flexbox vertical card alignment',
    'Responsive mobile-first media queries'
  ],
  milestones: [
    {
      id: 'css-grid-m1',
      stepNumber: 1,
      title: 'Milestone 1: Responsive Grid & Card Hierarchy',
      instructionMarkdown: `
### Milestone 1: CSS Grid & Custom Properties
Write the CSS rules:
- Define variables in \`:root\`:
  - \`--card-bg: #1e293b;\`
  - \`--accent-color: #6366f1;\`
- Style \`.pricing-grid\`:
  - \`display: grid;\`
  - \`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\`
  - \`gap: 2rem;\`
- Style \`.pricing-card\`:
  - \`background: var(--card-bg);\`
  - \`display: flex;\`
  - \`flex-direction: column;\`
  - \`justify-content: space-between;\`
      `,
      starterCode: `:root {
  /* Define variables here */
}

.pricing-grid {
  /* Define grid here */
}

.pricing-card {
  /* Define card styling here */
}
`,
      solutionCode: `:root {
  --card-bg: #1e293b;
  --accent-color: #6366f1;
  --card-radius: 1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.pricing-card {
  background: var(--card-bg);
  border-radius: var(--card-radius);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-color);
}
`,
      hints: [
        'Use grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) for auto responsiveness.',
        'Use var(--card-bg) to reference variables.'
      ],
      testCases: [
        {
          id: 'css-grid-tc1',
          description: 'CSS uses CSS variables, display: grid, and repeat(auto-fit, ...)',
          testFn: `(() => {
            return code.includes(':root') && code.includes('display: grid') && code.includes('repeat(auto-fit') && code.includes('var(--');
          })()`,
          expectedMessage: 'Must use CSS variables, display: grid, and auto-fit minmax'
        }
      ]
    }
  ]
};

export const GIT_CONFLICT_LAB_PROJECT: GuidedProject = {
  id: 'project-git-conflict-lab',
  title: 'Interactive 3-Way Merge Conflict Resolution Lab',
  slug: 'git-merge-conflict-lab',
  language: 'git',
  difficulty: 'Beginner',
  tier: 1,
  priceInr: 49,
  estimatedHours: 1.5,
  xpReward: 40,
  tagline: 'Master resolving 3-way Git merge conflicts and understanding diverged branch history.',
  description: 'Merge conflicts cause anxiety for junior developers. Master them safely in this guided lab. You will inspect Git conflict markers (<<<<<<<, =======, >>>>>>>), determine common ancestor state, merge diverged branch edits cleanly, and commit the resolved unified history without code loss.',
  previewType: 'console',
  whatYouWillBuild: [
    'A conflict marker inspector parsing HEAD versus incoming branch changes',
    '3-Way Merge conflict resolution preserving both feature commits',
    'Git staging and merge commit authoring workflow',
    'Verification of clean git status with zero residual conflict markers'
  ],
  skillsLearned: [
    'Git 3-way merge resolution mechanics',
    'Conflict marker syntax (<<<<<<< HEAD, =======, >>>>>>>)',
    'Diverged branch reconciliations',
    'Git staging (git add) and merge commits'
  ],
  milestones: [
    {
      id: 'git-conf-m1',
      stepNumber: 1,
      title: 'Milestone 1: Conflict Marker Parsing & Reconciliation',
      instructionMarkdown: `
### Milestone 1: Resolve Merge Conflict
You have a conflicted JavaScript file with standard Git conflict markers:
\`\`\`
<<<<<<< HEAD
const API_URL = "https://api.production.devforge.com/v1";
=======
const API_URL = "https://api.v2.devforge.com";
const TIMEOUT_MS = 5000;
>>>>>>> feature/upgrade-v2
\`\`\`

Resolve the conflict:
- Use the updated \`API_URL\` from the feature branch: \`"https://api.v2.devforge.com"\`.
- Keep the new \`TIMEOUT_MS = 5000\` setting.
- Remove ALL conflict markers (\`<<<<<<<\`, \`=======\`, \`>>>>>>>\`).
- Output clean, valid JavaScript ready for staging with \`git add\`.
      `,
      starterCode: `// Conflicted file content:
<<<<<<< HEAD
const API_URL = "https://api.production.devforge.com/v1";
=======
const API_URL = "https://api.v2.devforge.com";
const TIMEOUT_MS = 5000;
>>>>>>> feature/upgrade-v2

export { API_URL, TIMEOUT_MS };
`,
      solutionCode: `const API_URL = "https://api.v2.devforge.com";
const TIMEOUT_MS = 5000;

export { API_URL, TIMEOUT_MS };
`,
      hints: [
        'Delete <<<<<<< HEAD, =======, and >>>>>>> lines completely.',
        'Keep API_URL = "https://api.v2.devforge.com" and TIMEOUT_MS = 5000.'
      ],
      testCases: [
        {
          id: 'git-conf-tc1',
          description: 'Conflict markers are removed and resolved constants are exported',
          testFn: `(() => {
            return !code.includes('<<<<<<<') && !code.includes('=======') && !code.includes('>>>>>>>') && code.includes('https://api.v2.devforge.com') && code.includes('5000');
          })()`,
          expectedMessage: 'All conflict markers must be removed with clean resolved constants'
        }
      ]
    }
  ]
};

export const DOCKER_MULTISTAGE_PROJECT: GuidedProject = {
  id: 'project-docker-multistage-build',
  title: 'Multi-Stage Production Dockerfile Optimizer',
  slug: 'docker-multistage-optimizer',
  language: 'docker',
  difficulty: 'Beginner',
  tier: 1,
  priceInr: 49,
  estimatedHours: 1.5,
  xpReward: 40,
  tagline: 'Shrink bloated 1GB+ container images into minimal <50MB non-root production containers.',
  description: 'Single-stage Docker images carry heavy build tools, package managers, and security vulnerabilities into production. Build a professional multi-stage Dockerfile that builds an application inside a heavy build stage, copies only compiled artifacts into a lightweight distroless/alpine runtime stage, and runs as a secure non-root user.',
  previewType: 'console',
  whatYouWillBuild: [
    'A Multi-Stage Dockerfile with AS builder and production runtime stages',
    'COPY --from=builder artifact extraction pattern',
    'Non-root user creation (USER appuser) for container security',
    'Minimizing image layer counts and caching optimization'
  ],
  skillsLearned: [
    'Multi-stage Docker builds (FROM ... AS builder)',
    'COPY --from=builder semantics',
    'Container security & least-privilege non-root execution',
    'Layer cache optimization'
  ],
  milestones: [
    {
      id: 'docker-ms-m1',
      stepNumber: 1,
      title: 'Milestone 1: Multi-Stage Production Dockerfile',
      instructionMarkdown: `
### Milestone 1: Multi-Stage Dockerfile
Write a multi-stage Dockerfile:
1. **Stage 1 (Builder)**:
   - \`FROM node:20-alpine AS builder\`
   - \`WORKDIR /app\`
   - Copies \`package*.json\`, runs \`npm ci\`, copies source, runs \`npm run build\`.
2. **Stage 2 (Production Runner)**:
   - \`FROM node:20-alpine AS runner\`
   - Sets \`WORKDIR /app\` and \`ENV NODE_ENV=production\`.
   - Copies built \`dist\` from builder: \`COPY --from=builder /app/dist ./dist\`.
   - Sets user to non-root: \`USER node\`.
   - Exposes port 3000: \`EXPOSE 3000\`.
   - Specifies \`CMD ["node", "dist/server.js"]\`.
      `,
      starterCode: `# Build stage
# FROM node:20-alpine AS builder

# Production runner stage
# FROM node:20-alpine AS runner
`,
      solutionCode: `# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]
`,
      hints: [
        'Use AS builder in Stage 1 and COPY --from=builder in Stage 2.',
        'Include USER node before the CMD directive for non-root execution.'
      ],
      testCases: [
        {
          id: 'docker-ms-tc1',
          description: 'Dockerfile contains multi-stage AS builder, COPY --from=builder, and USER node',
          testFn: `(() => {
            return code.includes('AS builder') && code.includes('COPY --from=builder') && code.includes('USER node') && code.includes('EXPOSE 3000');
          })()`,
          expectedMessage: 'Must use multi-stage builder, COPY --from=builder, and non-root USER'
        }
      ]
    }
  ]
};
