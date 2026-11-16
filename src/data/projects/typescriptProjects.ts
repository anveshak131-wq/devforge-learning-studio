import { GuidedProject } from '../../types';
export { REDUX_PROJECT } from './reduxProject';
export { WEATHER_PROJECT } from './weatherProject';

export const TS_SCHEMA_VALIDATOR_PROJECT: GuidedProject = {
  id: 'project-ts-schema-validator',
  title: 'Type-Safe Schema Builder & Form Validator',
  slug: 'ts-schema-validator',
  language: 'typescript',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Build a type-safe schema validation library like Zod with chained constraints and compile-time inference.',
  description: 'Understand how modern validation tools like Zod and Yup achieve compile-time type inference and runtime safety. You will build a chained schema validator supporting string length constraints, email regex rules, numeric ranges, and custom error reporting.',
  previewType: 'console',
  whatYouWillBuild: [
    'A chainable ZString schema validator with .min(), .max(), and .email()',
    'A ZNumber schema validator with .positive() and .int() rules',
    'A ZObject schema combining nested field validations into a safe schema',
    'Detailed error maps returning field-by-field validation failures'
  ],
  skillsLearned: [
    'TypeScript generics and method chaining patterns',
    'Runtime data validation versus compile-time types',
    'Custom validation rules & error accumulation',
    'Functional schema composition'
  ],
  milestones: [
    {
      id: 'ts-sch-m1',
      stepNumber: 1,
      title: 'Milestone 1: Chainable String Schema Validator',
      instructionMarkdown: `
### Milestone 1: ZString Validator
Implement \`zString()\`:
- Returns an object with chained constraint methods:
  - \`.min(length, message?)\`: Adds minimum length check.
  - \`.max(length, message?)\`: Adds maximum length check.
  - \`.email(message?)\`: Adds email format check via regex.
  - \`.parse(value)\`:
    - If value is not a string, returns \`{ success: false, errors: ['Expected string'] }\`.
    - Evaluates all constraints. If any fail, returns \`{ success: false, errors: [...] }\`.
    - If all pass, returns \`{ success: true, data: value }\`.
      `,
      starterCode: `function zString() {
  const rules = [];

  return {
    min(len, message) {
      // Add rule
      return this;
    },
    max(len, message) {
      // Add rule
      return this;
    },
    parse(value) {
      // Validate and return { success, data, errors }
    }
  };
}

const nameSchema = zString().min(3).max(10);
console.log("Valid 'Alice':", nameSchema.parse("Alice"));
console.log("Invalid 'Al':", nameSchema.parse("Al"));
`,
      solutionCode: `function zString() {
  const rules = [];

  const schema = {
    min(len, message = \`Must be at least \${len} characters\`) {
      rules.push(v => (v.length >= len ? null : message));
      return schema;
    },
    max(len, message = \`Must be at most \${len} characters\`) {
      rules.push(v => (v.length <= len ? null : message));
      return schema;
    },
    email(message = 'Invalid email address') {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      rules.push(v => (emailRegex.test(v) ? null : message));
      return schema;
    },
    parse(value) {
      if (typeof value !== 'string') {
        return { success: false, errors: ['Expected string'] };
      }
      const errors = [];
      for (const rule of rules) {
        const err = rule(value);
        if (err) errors.push(err);
      }
      if (errors.length > 0) {
        return { success: false, errors };
      }
      return { success: true, data: value };
    }
  };

  return schema;
}
`,
      hints: [
        'Store validator functions in an array rules and push to it on .min() and .max().',
        'Always return this or schema from chained methods to allow method chaining.'
      ],
      testCases: [
        {
          id: 'ts-sch-tc1',
          description: 'zString chains min and max constraints and parses valid/invalid strings',
          testFn: `(() => {
            const s = zString().min(4);
            const pass = s.parse('hello');
            const fail = s.parse('hi');
            return pass.success === true && pass.data === 'hello' && fail.success === false && fail.errors.length > 0;
          })()`,
          expectedMessage: 'zString must validate string length constraints'
        }
      ]
    }
  ]
};

export const TS_MINI_GIT_PROJECT: GuidedProject = {
  id: 'project-ts-mini-git',
  title: 'Build Your Own Git VCS Engine',
  slug: 'ts-mini-git-vcs',
  language: 'typescript',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Implement a Git version control system from scratch: SHA-1 hashing, blob objects, tree snapshots, and commit DAGs.',
  description: 'The premier systems engineering challenge popularized by Codecrafters. You will build a functional Git version control engine in TypeScript. You will implement content-addressable storage using SHA-1 object hashes, serialize blob and tree objects, construct commit history graphs with parent links, and manage branch HEAD pointers.',
  previewType: 'console',
  whatYouWillBuild: [
    'A Content-Addressable Object Database computing SHA-1 hashes (hash-object and cat-file)',
    'Tree object serializer storing directory hierarchies and file modes',
    'Commit object builder tracking author metadata, commit messages, and parent hashes',
    'A Branch & HEAD pointer manager tracking active branch heads'
  ],
  skillsLearned: [
    'Content-addressable storage (CAS) architecture',
    'Cryptographic SHA-1 hashing and Git object headers',
    'Merkle Directed Acyclic Graphs (DAG)',
    'Low-level file system abstractions'
  ],
  milestones: [
    {
      id: 'ts-git-m1',
      stepNumber: 1,
      title: 'Milestone 1: Git Object Database & SHA-1 Content Hashing',
      instructionMarkdown: `
### Milestone 1: Git Object Storage
Implement \`GitRepository\`:
- Uses an internal in-memory object database \`this.objects = new Map<string, string>()\`.
- \`hashObject(content, type = 'blob')\`:
  - Formats Git object header: \`"\${type} \${content.length}\\0\${content}"\`.
  - Computes a simulated 40-character hexadecimal hash from the formatted string.
  - Stores the raw object in \`this.objects.set(hash, objectString)\`.
  - Returns the SHA hash.
- \`catFile(hash)\`:
  - Retrieves the object from \`this.objects\`. If missing, throws \`Error('Object not found')\`.
  - Splits on the null byte \`\\0\` and returns the content body.
      `,
      starterCode: `class GitRepository {
  constructor() {
    this.objects = new Map();
  }

  // Simple deterministic 40-char hash simulation
  _computeHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return hex.repeat(5).slice(0, 40);
  }

  hashObject(content, type = 'blob') {
    // Format header "type length\\0content", store, and return hash
  }

  catFile(hash) {
    // Return content body without header
  }
}

const repo = new GitRepository();
const hash = repo.hashObject("console.log('Hello Git');");
console.log("Blob Hash:", hash);
console.log("Cat-file content:", repo.catFile(hash));
`,
      solutionCode: `class GitRepository {
  constructor() {
    this.objects = new Map();
  }

  _computeHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return hex.repeat(5).slice(0, 40);
  }

  hashObject(content, type = 'blob') {
    const rawContent = String(content);
    const header = \`\${type} \${rawContent.length}\\0\`;
    const fullStore = header + rawContent;
    const hash = this._computeHash(fullStore);
    this.objects.set(hash, fullStore);
    return hash;
  }

  catFile(hash) {
    if (!this.objects.has(hash)) {
      throw new Error('Object not found: ' + hash);
    }
    const fullStore = this.objects.get(hash);
    const nullIdx = fullStore.indexOf('\\0');
    return fullStore.slice(nullIdx + 1);
  }
}
`,
      hints: [
        'The Git object format is "<type> <size>\\0<content>".',
        'Use fullStore.slice(nullIdx + 1) to retrieve the payload after the null byte.'
      ],
      testCases: [
        {
          id: 'ts-git-tc1',
          description: 'hashObject stores Git header and content; catFile extracts payload body',
          testFn: `(() => {
            const repo = new GitRepository();
            const h = repo.hashObject('hello world');
            const out = repo.catFile(h);
            return typeof h === 'string' && h.length === 40 && out === 'hello world';
          })()`,
          expectedMessage: 'Must hash object and retrieve content via catFile'
        }
      ]
    }
  ]
};
