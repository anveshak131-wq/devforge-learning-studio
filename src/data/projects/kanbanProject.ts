import { GuidedProject } from '../../types';

export const KANBAN_PROJECT: GuidedProject = {
  id: 'project-kanban-board',
  title: 'Interactive Task & Kanban Manager',
  slug: 'kanban-board',
  language: 'javascript',
  difficulty: 'Beginner',
  estimatedHours: 1.5,
  xpReward: 250,
  tagline: 'Build a full-featured task management engine with state transitions, filtering, and local storage persistence.',
  description: 'In this guided project, you will build the core data and logic engine for an interactive task board (like Trello/Jira). You will implement task models, status transitions, validation, filtering, and data export.',
  previewType: 'console',
  whatYouWillBuild: [
    'A robust TaskStore class managing task lifecycles',
    'Adding, updating, and removing tasks with ID generation',
    'Status progression: "todo" -> "in-progress" -> "done"',
    'Search and multi-criteria filtering system',
    'JSON serialization and import/export capabilities'
  ],
  skillsLearned: [
    'ES6 Classes & State Encapsulation',
    'Array methods (.map, .filter, .find, .reduce)',
    'Data validation & error handling',
    'Immutability patterns in JavaScript'
  ],
  milestones: [
    {
      id: 'kb-m1',
      stepNumber: 1,
      title: 'Milestone 1: The Task Model & Store Architecture',
      instructionMarkdown: `
### Task Model & TaskStore Initializer
Every Kanban application needs a structured store.
Create a class \`TaskManager\` with:
- An internal array \`this.tasks = [];\`
- A method \`addTask(title, priority = 'medium')\`:
  - Generates a unique numeric ID (\`this.tasks.length + 1\`).
  - Creates a task: \`{ id, title, priority, status: 'todo', createdAt: Date.now() }\`.
  - Pushes to \`this.tasks\`.
  - Returns the created task.
- A method \`getAllTasks()\` that returns a copy of \`this.tasks\`.
      `,
      starterCode: `class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    // Generate id, build task object, push to this.tasks, and return it
  }

  getAllTasks() {
    // Return copy of tasks array
  }
}

// Test run:
const manager = new TaskManager();
const t1 = manager.addTask("Setup project repository", "high");
console.log("Created task:", t1);
console.log("Total tasks:", manager.getAllTasks().length);
`,
      solutionCode: `class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    const task = {
      id: this.tasks.length + 1,
      title,
      priority,
      status: 'todo',
      createdAt: Date.now()
    };
    this.tasks.push(task);
    return task;
  }

  getAllTasks() {
    return [...this.tasks];
  }
}

const manager = new TaskManager();
const t1 = manager.addTask("Setup project repository", "high");
console.log("Created task:", t1);
console.log("Total tasks:", manager.getAllTasks().length);
`,
      hints: [
        'Assign `id: this.tasks.length + 1`.',
        'Set default status to "todo".',
        'Return `[...this.tasks]` from getAllTasks() to prevent outside mutation.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'addTask creates task with id, status "todo", and priority',
          testFn: `(() => {
            const tm = new TaskManager();
            const t = tm.addTask('Fix Bug', 'high');
            return t.id === 1 && t.title === 'Fix Bug' && t.priority === 'high' && t.status === 'todo';
          })()`,
          expectedMessage: 'Task must have id 1, correct title, status "todo", and priority "high"'
        },
        {
          id: 'tc-2',
          description: 'getAllTasks returns array of all created tasks',
          testFn: `(() => {
            const tm = new TaskManager();
            tm.addTask('T1');
            tm.addTask('T2');
            return tm.getAllTasks().length === 2;
          })()`,
          expectedMessage: 'Expected 2 tasks in list'
        }
      ]
    },
    {
      id: 'kb-m2',
      stepNumber: 2,
      title: 'Milestone 2: State Transitions & Status Updates',
      instructionMarkdown: `
### Implementing Status Transitions
Tasks move across Kanban columns:
\`"todo"\` ➡️ \`"in-progress"\` ➡️ \`"done"\`.

Add two methods to \`TaskManager\`:
1. \`updateStatus(id, newStatus)\`:
   - Valid statuses are \`['todo', 'in-progress', 'done']\`.
   - If \`newStatus\` is invalid, throw \`new Error("Invalid status")\`.
   - Find task by \`id\`. If not found, return \`null\`.
   - Update its \`status\` and return the updated task.
2. \`deleteTask(id)\`:
   - Removes the task with matching \`id\` from \`this.tasks\`.
   - Returns \`true\` if deleted, or \`false\` if task did not exist.
      `,
      starterCode: `class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    const task = {
      id: this.tasks.length + 1,
      title,
      priority,
      status: 'todo',
      createdAt: Date.now()
    };
    this.tasks.push(task);
    return task;
  }

  getAllTasks() {
    return [...this.tasks];
  }

  updateStatus(id, newStatus) {
    // Validate status, find task, update, and return updated task
  }

  deleteTask(id) {
    // Remove task by id, return true if removed, false otherwise
  }
}
`,
      solutionCode: `class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    const task = {
      id: this.tasks.length + 1,
      title,
      priority,
      status: 'todo',
      createdAt: Date.now()
    };
    this.tasks.push(task);
    return task;
  }

  getAllTasks() {
    return [...this.tasks];
  }

  updateStatus(id, newStatus) {
    const valid = ['todo', 'in-progress', 'done'];
    if (!valid.includes(newStatus)) {
      throw new Error("Invalid status");
    }
    const task = this.tasks.find(t => t.id === id);
    if (!task) return null;
    task.status = newStatus;
    return task;
  }

  deleteTask(id) {
    const initialLen = this.tasks.length;
    this.tasks = this.tasks.filter(t => t.id !== id);
    return this.tasks.length < initialLen;
  }
}
`,
      hints: [
        'Check `if (!["todo", "in-progress", "done"].includes(newStatus)) throw new Error("Invalid status");`.',
        'Use `this.tasks.find(t => t.id === id)` to find the task.',
        'Use `this.tasks = this.tasks.filter(t => t.id !== id);` to delete.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Successfully updates status of existing task',
          testFn: `(() => {
            const tm = new TaskManager();
            const t = tm.addTask('Write unit tests');
            const updated = tm.updateStatus(t.id, 'in-progress');
            return updated && updated.status === 'in-progress';
          })()`,
          expectedMessage: 'Status should be updated to in-progress'
        },
        {
          id: 'tc-2',
          description: 'Throws error for invalid status value',
          testFn: `(() => {
            const tm = new TaskManager();
            const t = tm.addTask('Check');
            try {
              tm.updateStatus(t.id, 'flying');
              return false;
            } catch {
              return true;
            }
          })()`,
          expectedMessage: 'Must throw error on invalid status'
        },
        {
          id: 'tc-3',
          description: 'deleteTask returns true when removing existing item and false for non-existent',
          testFn: `(() => {
            const tm = new TaskManager();
            const t = tm.addTask('Temporary');
            const d1 = tm.deleteTask(t.id);
            const d2 = tm.deleteTask(999);
            return d1 === true && d2 === false && tm.getAllTasks().length === 0;
          })()`,
          expectedMessage: 'Expected deleteTask to return true then false'
        }
      ]
    },
    {
      id: 'kb-m3',
      stepNumber: 3,
      title: 'Milestone 3: Filtering, Search & Kanban Metrics',
      instructionMarkdown: `
### Search, Filter & Productivity Metrics
Now add analytical query capabilities to your \`TaskManager\`:

1. \`filterTasks({ status, priority, searchKeyword })\`:
   - Returns an array of tasks matching all criteria that are provided.
   - If \`status\` is given, matches \`task.status === status\`.
   - If \`priority\` is given, matches \`task.priority === priority\`.
   - If \`searchKeyword\` is given, matches case-insensitively in \`task.title\`.
2. \`getMetrics()\`:
   - Returns an object:
   \`\`\`javascript
   {
     total: number,
     todo: number,
     inProgress: number,
     done: number,
     completionRate: number // percentage 0-100 rounded to integer
   }
   \`\`\`
      `,
      starterCode: `class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    const task = { id: this.tasks.length + 1, title, priority, status: 'todo', createdAt: Date.now() };
    this.tasks.push(task);
    return task;
  }

  updateStatus(id, newStatus) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = newStatus;
    return task;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return true;
  }

  filterTasks({ status, priority, searchKeyword } = {}) {
    // Filter by criteria
  }

  getMetrics() {
    // Calculate total, counts per status, and completionRate
  }
}
`,
      solutionCode: `class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    const task = { id: this.tasks.length + 1, title, priority, status: 'todo', createdAt: Date.now() };
    this.tasks.push(task);
    return task;
  }

  updateStatus(id, newStatus) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = newStatus;
    return task;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return true;
  }

  filterTasks({ status, priority, searchKeyword } = {}) {
    return this.tasks.filter(task => {
      if (status && task.status !== status) return false;
      if (priority && task.priority !== priority) return false;
      if (searchKeyword && !task.title.toLowerCase().includes(searchKeyword.toLowerCase())) return false;
      return true;
    });
  }

  getMetrics() {
    const total = this.tasks.length;
    const todo = this.tasks.filter(t => t.status === 'todo').length;
    const inProgress = this.tasks.filter(t => t.status === 'in-progress').length;
    const done = this.tasks.filter(t => t.status === 'done').length;
    const completionRate = total === 0 ? 0 : Math.round((done / total) * 100);

    return { total, todo, inProgress, done, completionRate };
  }
}
`,
      hints: [
        'In filterTasks, check `if (status && task.status !== status) return false;`',
        'Use `task.title.toLowerCase().includes(searchKeyword.toLowerCase())` for case-insensitive search.',
        'completionRate is `total === 0 ? 0 : Math.round((done / total) * 100)`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'filterTasks matches keyword and priority correctly',
          testFn: `(() => {
            const tm = new TaskManager();
            tm.addTask('Fix login bug', 'high');
            tm.addTask('Update docs', 'low');
            tm.addTask('Fix signup flow', 'medium');
            const found = tm.filterTasks({ searchKeyword: 'fix', priority: 'high' });
            return found.length === 1 && found[0].title === 'Fix login bug';
          })()`,
          expectedMessage: 'Expected 1 task matching "fix" and priority "high"'
        },
        {
          id: 'tc-2',
          description: 'getMetrics returns accurate counts and completion percentage',
          testFn: `(() => {
            const tm = new TaskManager();
            const t1 = tm.addTask('T1');
            const t2 = tm.addTask('T2');
            const t3 = tm.addTask('T3');
            const t4 = tm.addTask('T4');
            tm.updateStatus(t1.id, 'done');
            tm.updateStatus(t2.id, 'in-progress');
            const m = tm.getMetrics();
            return m.total === 4 && m.done === 1 && m.inProgress === 1 && m.todo === 2 && m.completionRate === 25;
          })()`,
          expectedMessage: 'Expected metrics: { total: 4, done: 1, inProgress: 1, todo: 2, completionRate: 25 }'
        }
      ]
    }
  ]
};
