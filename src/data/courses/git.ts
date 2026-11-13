import { Track } from '../../types';

export const GIT_TRACK: Track = {
  id: "git",
  title: "Git & GitHub: Version Control Architecture (150 Topics)",
  slug: "git",
  language: "git",
  icon: "GitBranch",
  color: "from-red-500 to-orange-500",
  tagline: "Master branch orchestration, merge conflicts, interactive rebasing, and GitHub CI/CD across 150 lessons.",
  description: "From staging and commit plumbing to 3-way merges, interactive rebasing, reflog disaster recovery, worktrees, bisect, and automated GitHub Actions CI/CD.",
  lessons: [
  {
    "id": "git-1-what-is-version-control?-central",
    "title": "1. What is Version Control? Centralized vs Distributed",
    "slug": "lesson-1-what-is-version-control?-central",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master What is Version Control? Centralized vs Distributed in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "What is Version Control? Centralized vs Distributed",
      "Git & GitHub"
    ],
    "analogy": "A magic camera that takes a snapshot of your entire project room every time you decide to record history.",
    "explanationMarkdown": "### What is Version Control? Centralized vs Distributed\n\nGit is a distributed version control system tracking source code history and enabling collaborative software engineering.\n\n```bash\ngit --version\n```",
    "workedExample": {
      "title": "Worked Example: What is Version Control? Centralized vs Distributed",
      "code": "git --version",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is Version Control? Centralized vs Distributed.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is Version Control? Centralized vs Distributed.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check git installed version\n# TODO: Write command below\n",
    "solutionCode": "git --version",
    "hints": [
      "Write:\ngit --version"
    ],
    "testCases": [
      {
        "id": "git-1-tc-1",
        "description": "Verifies correct implementation for What is Version Control? Centralized vs Distributed",
        "testFn": "code.includes('git --version')"
      }
    ]
  },
  {
    "id": "git-2-configuring-user-name-and-email",
    "title": "2. Configuring User Name and Email",
    "slug": "lesson-2-configuring-user-name-and-email",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Configuring User Name and Email in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Configuring User Name and Email",
      "Git & GitHub"
    ],
    "analogy": "Signing your signature and stamp on an architect's blueprint before submitting it to the archive.",
    "explanationMarkdown": "### Configuring User Name and Email\n\nGit associates every commit with an author name and email address configured globally or per-repository.\n\n```bash\ngit config --global user.name \"Sarah Connor\"\ngit config --global user.email \"sarah@devforge.io\"\n```",
    "workedExample": {
      "title": "Worked Example: Configuring User Name and Email",
      "code": "git config --global user.name \"Sarah Connor\"\ngit config --global user.email \"sarah@devforge.io\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Configuring User Name and Email.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Configuring User Name and Email.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Configure author identity\n# TODO: Write command below\n",
    "solutionCode": "git config --global user.name \"Sarah Connor\"\ngit config --global user.email \"sarah@devforge.io\"",
    "hints": [
      "Write:\ngit config --global user.name \"Sarah Connor\"\ngit config --global user.email \"sarah@devforge.io\""
    ],
    "testCases": [
      {
        "id": "git-2-tc-1",
        "description": "Verifies correct implementation for Configuring User Name and Email",
        "testFn": "code.includes('git config --global user.name') && code.includes('user.email')"
      }
    ]
  },
  {
    "id": "git-3-initializing-a-repository-with-g",
    "title": "3. Initializing a Repository with git init",
    "slug": "lesson-3-initializing-a-repository-with-g",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Initializing a Repository with git init in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Initializing a Repository with git init",
      "Git & GitHub"
    ],
    "analogy": "Laying the cornerstone and opening the log ledger for a brand new building project.",
    "explanationMarkdown": "### Initializing a Repository with git init\n\n`git init` creates a hidden `.git` directory containing all project history, objects, and configuration.\n\n```bash\ngit init\n```",
    "workedExample": {
      "title": "Worked Example: Initializing a Repository with git init",
      "code": "git init",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Initializing a Repository with git init.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Initializing a Repository with git init.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Initialize a new git repository\n# TODO: Write command below\n",
    "solutionCode": "git init",
    "hints": [
      "Write:\ngit init"
    ],
    "testCases": [
      {
        "id": "git-3-tc-1",
        "description": "Verifies correct implementation for Initializing a Repository with git init",
        "testFn": "code.includes('git init')"
      }
    ]
  },
  {
    "id": "git-4-the-three-git-trees-working-dir,",
    "title": "4. The Three Git Trees: Working Dir, Staging, Repository",
    "slug": "lesson-4-the-three-git-trees-working-dir,",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The Three Git Trees: Working Dir, Staging, Repository in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Three Git Trees",
      "Git & GitHub"
    ],
    "analogy": "A stage play: the dressing room (working dir), backstage wings (staging area), and front stage performance (repository).",
    "explanationMarkdown": "### The Three Git Trees: Working Dir, Staging, Repository\n\nChanges move from the working directory to the staging area (index) via `add`, and into repository history via `commit`.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: The Three Git Trees: Working Dir, Staging, Repository",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Three Git Trees: Working Dir, Staging, Repository.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Three Git Trees: Working Dir, Staging, Repository.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check the current status of all three areas\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-4-tc-1",
        "description": "Verifies correct implementation for The Three Git Trees: Working Dir, Staging, Repository",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-5-checking-status-with-git-status",
    "title": "5. Checking Status with git status",
    "slug": "lesson-5-checking-status-with-git-status",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Checking Status with git status in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Checking Status with git status",
      "Git & GitHub"
    ],
    "analogy": "Glancing at an inventory clipboard to see what boxes are packed, unpacked, or missing.",
    "explanationMarkdown": "### Checking Status with git status\n\n`git status` displays untracked files, staged changes ready for commit, and active branch metadata.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Checking Status with git status",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checking Status with git status.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checking Status with git status.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View modified and untracked files\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-5-tc-1",
        "description": "Verifies correct implementation for Checking Status with git status",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-6-staging-files-with-git-add",
    "title": "6. Staging Files with git add",
    "slug": "lesson-6-staging-files-with-git-add",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Staging Files with git add in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Staging Files with git add",
      "Git & GitHub"
    ],
    "analogy": "Placing a purchased item into the shipping box before taping the box shut.",
    "explanationMarkdown": "### Staging Files with git add\n\n`git add <filename>` copies changes from the working tree into the staging area (index).\n\n```bash\ngit add index.html\n```",
    "workedExample": {
      "title": "Worked Example: Staging Files with git add",
      "code": "git add index.html",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Staging Files with git add.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Staging Files with git add.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stage a single file for the next commit\n# TODO: Write command below\n",
    "solutionCode": "git add index.html",
    "hints": [
      "Write:\ngit add index.html"
    ],
    "testCases": [
      {
        "id": "git-6-tc-1",
        "description": "Verifies correct implementation for Staging Files with git add",
        "testFn": "code.includes('git add index.html') || code.includes('git add')"
      }
    ]
  },
  {
    "id": "git-7-staging-all-files-with-git-add-.",
    "title": "7. Staging All Files with git add .",
    "slug": "lesson-7-staging-all-files-with-git-add-.",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Staging All Files with git add . in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Staging All Files with git add .",
      "Git & GitHub"
    ],
    "analogy": "Sweeping all items off the workbench directly into the packaging bin in one go.",
    "explanationMarkdown": "### Staging All Files with git add .\n\n`git add .` stages all modifications, new files, and deletions within the current directory tree.\n\n```bash\ngit add .\n```",
    "workedExample": {
      "title": "Worked Example: Staging All Files with git add .",
      "code": "git add .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Staging All Files with git add ..",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Staging All Files with git add ..",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stage all modified and untracked files\n# TODO: Write command below\n",
    "solutionCode": "git add .",
    "hints": [
      "Write:\ngit add ."
    ],
    "testCases": [
      {
        "id": "git-7-tc-1",
        "description": "Verifies correct implementation for Staging All Files with git add .",
        "testFn": "code.includes('git add .') || code.includes('git add -A')"
      }
    ]
  },
  {
    "id": "git-8-interactive-patch-staging-with-g",
    "title": "8. Interactive Patch Staging with git add -p",
    "slug": "lesson-8-interactive-patch-staging-with-g",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Interactive Patch Staging with git add -p in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Interactive Patch Staging with git add -p",
      "Git & GitHub"
    ],
    "analogy": "Using precision tweezers to pack only selected jewelry items into the box, leaving others behind.",
    "explanationMarkdown": "### Interactive Patch Staging with git add -p\n\n`git add -p` (patch mode) lets you selectively stage specific lines or code hunks rather than whole files.\n\n```bash\ngit add -p\n```",
    "workedExample": {
      "title": "Worked Example: Interactive Patch Staging with git add -p",
      "code": "git add -p",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interactive Patch Staging with git add -p.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interactive Patch Staging with git add -p.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stage individual hunks interactively\n# TODO: Write command below\n",
    "solutionCode": "git add -p",
    "hints": [
      "Write:\ngit add -p"
    ],
    "testCases": [
      {
        "id": "git-8-tc-1",
        "description": "Verifies correct implementation for Interactive Patch Staging with git add -p",
        "testFn": "code.includes('git add -p')"
      }
    ]
  },
  {
    "id": "git-9-committing-changes-with-git-comm",
    "title": "9. Committing Changes with git commit -m",
    "slug": "lesson-9-committing-changes-with-git-comm",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Committing Changes with git commit -m in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Committing Changes with git commit -m",
      "Git & GitHub"
    ],
    "analogy": "Snapping a permanent photo, sealing the shipping box with wax, and recording it in the ledger.",
    "explanationMarkdown": "### Committing Changes with git commit -m\n\n`git commit -m \"message\"` saves staged changes permanently to local repository history.\n\n```bash\ngit commit -m \"feat: initialize core application shell\"\n```",
    "workedExample": {
      "title": "Worked Example: Committing Changes with git commit -m",
      "code": "git commit -m \"feat: initialize core application shell\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Committing Changes with git commit -m.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Committing Changes with git commit -m.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Record a snapshot with a descriptive message\n# TODO: Write command below\n",
    "solutionCode": "git commit -m \"feat: initialize core application shell\"",
    "hints": [
      "Write:\ngit commit -m \"feat: initialize core application shell\""
    ],
    "testCases": [
      {
        "id": "git-9-tc-1",
        "description": "Verifies correct implementation for Committing Changes with git commit -m",
        "testFn": "code.includes('git commit -m')"
      }
    ]
  },
  {
    "id": "git-10-writing-high-quality-commit-mess",
    "title": "10. Writing High-Quality Commit Messages (Conventional Commits)",
    "slug": "lesson-10-writing-high-quality-commit-mess",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Writing High-Quality Commit Messages (Conventional Commits) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Writing High-Quality Commit Messages (Conventional Commits)",
      "Git & GitHub"
    ],
    "analogy": "Writing clear, professional medical chart notes that other doctors can understand at a glance.",
    "explanationMarkdown": "### Writing High-Quality Commit Messages (Conventional Commits)\n\nUse conventional commit prefixes: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:` for clean changelogs.\n\n```bash\ngit commit -m \"fix(auth): prevent token expiration race condition\"\n```",
    "workedExample": {
      "title": "Worked Example: Writing High-Quality Commit Messages (Conventional Commits)",
      "code": "git commit -m \"fix(auth): prevent token expiration race condition\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Writing High-Quality Commit Messages (Conventional Commits).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Writing High-Quality Commit Messages (Conventional Commits).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Example of conventional commit\n# TODO: Write command below\n",
    "solutionCode": "git commit -m \"fix(auth): prevent token expiration race condition\"",
    "hints": [
      "Write:\ngit commit -m \"fix(auth): prevent token expiration race condition\""
    ],
    "testCases": [
      {
        "id": "git-10-tc-1",
        "description": "Verifies correct implementation for Writing High-Quality Commit Messages (Conventional Commits)",
        "testFn": "code.includes('git commit -m')"
      }
    ]
  },
  {
    "id": "git-11-inspecting-history-with-git-log",
    "title": "11. Inspecting History with git log",
    "slug": "lesson-11-inspecting-history-with-git-log",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Inspecting History with git log in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Inspecting History with git log",
      "Git & GitHub"
    ],
    "analogy": "Flipping through the historical captain's logbook of a ship's voyage.",
    "explanationMarkdown": "### Inspecting History with git log\n\n`git log` displays the chronological list of commits, authors, dates, and commit messages.\n\n```bash\ngit log\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting History with git log",
      "code": "git log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting History with git log.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting History with git log.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View the commit log history\n# TODO: Write command below\n",
    "solutionCode": "git log",
    "hints": [
      "Write:\ngit log"
    ],
    "testCases": [
      {
        "id": "git-11-tc-1",
        "description": "Verifies correct implementation for Inspecting History with git log",
        "testFn": "code.includes('git log')"
      }
    ]
  },
  {
    "id": "git-12-compact-log-view-git-log---oneli",
    "title": "12. Compact Log View: git log --oneline --graph",
    "slug": "lesson-12-compact-log-view-git-log---oneli",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Compact Log View: git log --oneline --graph in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Compact Log View",
      "Git & GitHub"
    ],
    "analogy": "A compact subway transit map showing stations and junctions on a single pocket card.",
    "explanationMarkdown": "### Compact Log View: git log --oneline --graph\n\nShows an ASCII graph of branches and commits in a compact, readable single-line format.\n\n```bash\ngit log --oneline --graph --decorate -n 10\n```",
    "workedExample": {
      "title": "Worked Example: Compact Log View: git log --oneline --graph",
      "code": "git log --oneline --graph --decorate -n 10",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Compact Log View: git log --oneline --graph.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Compact Log View: git log --oneline --graph.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View visual graph of commits\n# TODO: Write command below\n",
    "solutionCode": "git log --oneline --graph --decorate -n 10",
    "hints": [
      "Write:\ngit log --oneline --graph --decorate -n 10"
    ],
    "testCases": [
      {
        "id": "git-12-tc-1",
        "description": "Verifies correct implementation for Compact Log View: git log --oneline --graph",
        "testFn": "code.includes('git log') && code.includes('--oneline')"
      }
    ]
  },
  {
    "id": "git-13-inspecting-differences-with-git-",
    "title": "13. Inspecting Differences with git diff",
    "slug": "lesson-13-inspecting-differences-with-git-",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Inspecting Differences with git diff in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Inspecting Differences with git diff",
      "Git & GitHub"
    ],
    "analogy": "Holding two drafts up to a bright backlight window to see every character that was added or removed.",
    "explanationMarkdown": "### Inspecting Differences with git diff\n\n`git diff` shows line-by-line differences between the working tree and the staging area.\n\n```bash\ngit diff\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Differences with git diff",
      "code": "git diff",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Differences with git diff.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Differences with git diff.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View unstaged modifications in working tree\n# TODO: Write command below\n",
    "solutionCode": "git diff",
    "hints": [
      "Write:\ngit diff"
    ],
    "testCases": [
      {
        "id": "git-13-tc-1",
        "description": "Verifies correct implementation for Inspecting Differences with git diff",
        "testFn": "code.includes('git diff')"
      }
    ]
  },
  {
    "id": "git-14-viewing-staged-changes-with-git-",
    "title": "14. Viewing Staged Changes with git diff --staged",
    "slug": "lesson-14-viewing-staged-changes-with-git-",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Viewing Staged Changes with git diff --staged in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Viewing Staged Changes with git diff --staged",
      "Git & GitHub"
    ],
    "analogy": "Inspecting the packed contents of an unsealed box before taping it closed.",
    "explanationMarkdown": "### Viewing Staged Changes with git diff --staged\n\n`git diff --staged` (or `--cached`) shows differences between staged changes and the last commit.\n\n```bash\ngit diff --staged\n```",
    "workedExample": {
      "title": "Worked Example: Viewing Staged Changes with git diff --staged",
      "code": "git diff --staged",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing Staged Changes with git diff --staged.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing Staged Changes with git diff --staged.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View changes waiting in the staging area\n# TODO: Write command below\n",
    "solutionCode": "git diff --staged",
    "hints": [
      "Write:\ngit diff --staged"
    ],
    "testCases": [
      {
        "id": "git-14-tc-1",
        "description": "Verifies correct implementation for Viewing Staged Changes with git diff --staged",
        "testFn": "code.includes('git diff --staged') || code.includes('git diff --cached')"
      }
    ]
  },
  {
    "id": "git-15-module-1-review-first-repository",
    "title": "15. Module 1 Review: First Repository Workflow",
    "slug": "lesson-15-module-1-review-first-repository",
    "language": "git",
    "category": "Module 1: Git Foundations & Local Setup",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: First Repository Workflow in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Module 1 Review",
      "Git & GitHub"
    ],
    "analogy": "Completing your first full flight simulator takeoff and landing checklist.",
    "explanationMarkdown": "### Module 1 Review: First Repository Workflow\n\nA rock-solid foundation mastering the core cycle: modify files, check status, stage, and commit.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: First Repository Workflow",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 1 Review: First Repository Workflow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 1 Review: First Repository Workflow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Complete initialization, add, and commit flow\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-15-tc-1",
        "description": "Verifies correct implementation for Module 1 Review: First Repository Workflow",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-16-filtering-log-by-author-with---a",
    "title": "16. Filtering Log by Author with --author",
    "slug": "lesson-16-filtering-log-by-author-with---a",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Filtering Log by Author with --author in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Filtering Log by Author with --author",
      "Git & GitHub"
    ],
    "analogy": "Searching an art museum catalog for paintings created exclusively by Rembrandt.",
    "explanationMarkdown": "### Filtering Log by Author with --author\n\n`git log --author=\"Pattern\"` filters commits authored by specific team members.\n\n```bash\ngit log --author=\"Sarah\"\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Log by Author with --author",
      "code": "git log --author=\"Sarah\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Log by Author with --author.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Log by Author with --author.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View commits by specific engineer\n# TODO: Write command below\n",
    "solutionCode": "git log --author=\"Sarah\"",
    "hints": [
      "Write:\ngit log --author=\"Sarah\""
    ],
    "testCases": [
      {
        "id": "git-16-tc-1",
        "description": "Verifies correct implementation for Filtering Log by Author with --author",
        "testFn": "code.includes('git log --author=')"
      }
    ]
  },
  {
    "id": "git-17-filtering-log-by-date---since,--",
    "title": "17. Filtering Log by Date (--since, --until)",
    "slug": "lesson-17-filtering-log-by-date---since,--",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Filtering Log by Date (--since, --until) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Filtering Log by Date (--since, --until)",
      "Git & GitHub"
    ],
    "analogy": "Searching bank statements for transactions that occurred strictly during the month of October.",
    "explanationMarkdown": "### Filtering Log by Date (--since, --until)\n\nFilters commit history across dynamic time windows (`--since=\"2 days ago\"`, `--until=\"2026-01-01\"`).\n\n```bash\ngit log --since=\"1 week ago\"\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Log by Date (--since, --until)",
      "code": "git log --since=\"1 week ago\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Log by Date (--since, --until).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Log by Date (--since, --until).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View commits from the past week\n# TODO: Write command below\n",
    "solutionCode": "git log --since=\"1 week ago\"",
    "hints": [
      "Write:\ngit log --since=\"1 week ago\""
    ],
    "testCases": [
      {
        "id": "git-17-tc-1",
        "description": "Verifies correct implementation for Filtering Log by Date (--since, --until)",
        "testFn": "code.includes('git log --since=')"
      }
    ]
  },
  {
    "id": "git-18-searching-commit-messages-with--",
    "title": "18. Searching Commit Messages with --grep",
    "slug": "lesson-18-searching-commit-messages-with--",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Searching Commit Messages with --grep in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Searching Commit Messages with --grep",
      "Git & GitHub"
    ],
    "analogy": "Searching a library card catalog by subject keywords.",
    "explanationMarkdown": "### Searching Commit Messages with --grep\n\n`git log --grep=\"keyword\"` searches commit messages using regular expressions.\n\n```bash\ngit log --grep=\"fix\"\n```",
    "workedExample": {
      "title": "Worked Example: Searching Commit Messages with --grep",
      "code": "git log --grep=\"fix\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Searching Commit Messages with --grep.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Searching Commit Messages with --grep.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Search for bugfix commit messages\n# TODO: Write command below\n",
    "solutionCode": "git log --grep=\"fix\"",
    "hints": [
      "Write:\ngit log --grep=\"fix\""
    ],
    "testCases": [
      {
        "id": "git-18-tc-1",
        "description": "Verifies correct implementation for Searching Commit Messages with --grep",
        "testFn": "code.includes('git log --grep=')"
      }
    ]
  },
  {
    "id": "git-19-searching-code-changes-with-pick",
    "title": "19. Searching Code Changes with Pickaxe (-S string)",
    "slug": "lesson-19-searching-code-changes-with-pick",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Searching Code Changes with Pickaxe (-S string) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Searching Code Changes with Pickaxe (-S string)",
      "Git & GitHub"
    ],
    "analogy": "Using a metal detector on a beach to find the exact moment a gold ring was dropped.",
    "explanationMarkdown": "### Searching Code Changes with Pickaxe (-S string)\n\nThe pickaxe option `-S <string>` finds commits that actually increased or decreased occurrences of that string!\n\n```bash\ngit log -S \"calculateTotal\"\n```",
    "workedExample": {
      "title": "Worked Example: Searching Code Changes with Pickaxe (-S string)",
      "code": "git log -S \"calculateTotal\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Searching Code Changes with Pickaxe (-S string).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Searching Code Changes with Pickaxe (-S string).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find when a function was introduced or deleted\n# TODO: Write command below\n",
    "solutionCode": "git log -S \"calculateTotal\"",
    "hints": [
      "Write:\ngit log -S \"calculateTotal\""
    ],
    "testCases": [
      {
        "id": "git-19-tc-1",
        "description": "Verifies correct implementation for Searching Code Changes with Pickaxe (-S string)",
        "testFn": "code.includes('git log -S')"
      }
    ]
  },
  {
    "id": "git-20-inspecting-commits-with-git-show",
    "title": "20. Inspecting Commits with git show",
    "slug": "lesson-20-inspecting-commits-with-git-show",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inspecting Commits with git show in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Inspecting Commits with git show",
      "Git & GitHub"
    ],
    "analogy": "Opening a specific historical sealed box and inspecting every single document inside.",
    "explanationMarkdown": "### Inspecting Commits with git show\n\n`git show <commit-hash>` displays the author metadata and full diff patch of a single commit.\n\n```bash\ngit show HEAD\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Commits with git show",
      "code": "git show HEAD",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Commits with git show.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Commits with git show.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect the most recent commit details\n# TODO: Write command below\n",
    "solutionCode": "git show HEAD",
    "hints": [
      "Write:\ngit show HEAD"
    ],
    "testCases": [
      {
        "id": "git-20-tc-1",
        "description": "Verifies correct implementation for Inspecting Commits with git show",
        "testFn": "code.includes('git show')"
      }
    ]
  },
  {
    "id": "git-21-viewing-file-snapshots-from-past",
    "title": "21. Viewing File Snapshots from Past Commits",
    "slug": "lesson-21-viewing-file-snapshots-from-past",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Viewing File Snapshots from Past Commits in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Viewing File Snapshots from Past Commits",
      "Git & GitHub"
    ],
    "analogy": "Looking at an old photograph of your childhood home taken in 1995.",
    "explanationMarkdown": "### Viewing File Snapshots from Past Commits\n\n`git show <commit>:<filepath>` prints the exact snapshot of a file at that historical commit without switching branches!\n\n```bash\ngit show HEAD~3:index.html\n```",
    "workedExample": {
      "title": "Worked Example: Viewing File Snapshots from Past Commits",
      "code": "git show HEAD~3:index.html",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing File Snapshots from Past Commits.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing File Snapshots from Past Commits.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View how index.html looked 3 commits ago\n# TODO: Write command below\n",
    "solutionCode": "git show HEAD~3:index.html",
    "hints": [
      "Write:\ngit show HEAD~3:index.html"
    ],
    "testCases": [
      {
        "id": "git-21-tc-1",
        "description": "Verifies correct implementation for Viewing File Snapshots from Past Commits",
        "testFn": "code.includes('git show HEAD~')"
      }
    ]
  },
  {
    "id": "git-22-line-by-line-attribution-with-gi",
    "title": "22. Line-by-Line Attribution with git blame",
    "slug": "lesson-22-line-by-line-attribution-with-gi",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Line-by-Line Attribution with git blame in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Line-by-Line Attribution with git blame",
      "Git & GitHub"
    ],
    "analogy": "A forensic detective inspecting fingerprints on every single document in a case file.",
    "explanationMarkdown": "### Line-by-Line Attribution with git blame\n\n`git blame <filename>` displays the commit hash, author, and timestamp for every single line in a file.\n\n```bash\ngit blame server.ts\n```",
    "workedExample": {
      "title": "Worked Example: Line-by-Line Attribution with git blame",
      "code": "git blame server.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Line-by-Line Attribution with git blame.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Line-by-Line Attribution with git blame.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: See who last modified each line of a file\n# TODO: Write command below\n",
    "solutionCode": "git blame server.ts",
    "hints": [
      "Write:\ngit blame server.ts"
    ],
    "testCases": [
      {
        "id": "git-22-tc-1",
        "description": "Verifies correct implementation for Line-by-Line Attribution with git blame",
        "testFn": "code.includes('git blame')"
      }
    ]
  },
  {
    "id": "git-23-ignoring-whitespace-in-git-blame",
    "title": "23. Ignoring Whitespace in git blame (-w)",
    "slug": "lesson-23-ignoring-whitespace-in-git-blame",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Ignoring Whitespace in git blame (-w) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Ignoring Whitespace in git blame (-w)",
      "Git & GitHub"
    ],
    "analogy": "Ignoring dust on a fingerprint and focusing only on the authentic signature underneath.",
    "explanationMarkdown": "### Ignoring Whitespace in git blame (-w)\n\n`-w` ignores whitespace changes (like automated code formatting), pointing to the real original code author.\n\n```bash\ngit blame -w server.ts\n```",
    "workedExample": {
      "title": "Worked Example: Ignoring Whitespace in git blame (-w)",
      "code": "git blame -w server.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ignoring Whitespace in git blame (-w).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ignoring Whitespace in git blame (-w).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Ignore formatting/linting changes in blame\n# TODO: Write command below\n",
    "solutionCode": "git blame -w server.ts",
    "hints": [
      "Write:\ngit blame -w server.ts"
    ],
    "testCases": [
      {
        "id": "git-23-tc-1",
        "description": "Verifies correct implementation for Ignoring Whitespace in git blame (-w)",
        "testFn": "code.includes('git blame -w')"
      }
    ]
  },
  {
    "id": "git-24-contributor-summaries-with-git-s",
    "title": "24. Contributor Summaries with git shortlog",
    "slug": "lesson-24-contributor-summaries-with-git-s",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Contributor Summaries with git shortlog in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Contributor Summaries with git shortlog",
      "Git & GitHub"
    ],
    "analogy": "The leaderboard scoreboard at the end of an arcade tournament.",
    "explanationMarkdown": "### Contributor Summaries with git shortlog\n\n`git shortlog -s -n` summarizes commit counts per author in descending order.\n\n```bash\ngit shortlog -s -n\n```",
    "workedExample": {
      "title": "Worked Example: Contributor Summaries with git shortlog",
      "code": "git shortlog -s -n",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Contributor Summaries with git shortlog.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Contributor Summaries with git shortlog.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Summary of commits grouped by contributor\n# TODO: Write command below\n",
    "solutionCode": "git shortlog -s -n",
    "hints": [
      "Write:\ngit shortlog -s -n"
    ],
    "testCases": [
      {
        "id": "git-24-tc-1",
        "description": "Verifies correct implementation for Contributor Summaries with git shortlog",
        "testFn": "code.includes('git shortlog')"
      }
    ]
  },
  {
    "id": "git-25-inline-diffs-with-git-log--p",
    "title": "25. Inline Diffs with git log -p",
    "slug": "lesson-25-inline-diffs-with-git-log--p",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inline Diffs with git log -p in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Inline Diffs with git log -p",
      "Git & GitHub"
    ],
    "analogy": "Reading a book that includes full pull-out illustrations inside the prose.",
    "explanationMarkdown": "### Inline Diffs with git log -p\n\n`git log -p` combines commit messages with their full code diffs inline.\n\n```bash\ngit log -p -n 2\n```",
    "workedExample": {
      "title": "Worked Example: Inline Diffs with git log -p",
      "code": "git log -p -n 2",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inline Diffs with git log -p.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inline Diffs with git log -p.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Show commits along with their patch diffs\n# TODO: Write command below\n",
    "solutionCode": "git log -p -n 2",
    "hints": [
      "Write:\ngit log -p -n 2"
    ],
    "testCases": [
      {
        "id": "git-25-tc-1",
        "description": "Verifies correct implementation for Inline Diffs with git log -p",
        "testFn": "code.includes('git log -p')"
      }
    ]
  },
  {
    "id": "git-26-listing-tracked-files-with-git-l",
    "title": "26. Listing Tracked Files with git ls-files",
    "slug": "lesson-26-listing-tracked-files-with-git-l",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Listing Tracked Files with git ls-files in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing Tracked Files with git ls-files",
      "Git & GitHub"
    ],
    "analogy": "The master inventory list of all cataloged items stored in a secure warehouse.",
    "explanationMarkdown": "### Listing Tracked Files with git ls-files\n\n`git ls-files` prints all files currently tracked by the Git staging index.\n\n```bash\ngit ls-files\n```",
    "workedExample": {
      "title": "Worked Example: Listing Tracked Files with git ls-files",
      "code": "git ls-files",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Tracked Files with git ls-files.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Tracked Files with git ls-files.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List all files tracked in the repository\n# TODO: Write command below\n",
    "solutionCode": "git ls-files",
    "hints": [
      "Write:\ngit ls-files"
    ],
    "testCases": [
      {
        "id": "git-26-tc-1",
        "description": "Verifies correct implementation for Listing Tracked Files with git ls-files",
        "testFn": "code.includes('git ls-files')"
      }
    ]
  },
  {
    "id": "git-27-short-status-view-with-git-statu",
    "title": "27. Short Status View with git status -s",
    "slug": "lesson-27-short-status-view-with-git-statu",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Short Status View with git status -s in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Short Status View with git status -s",
      "Git & GitHub"
    ],
    "analogy": "Reading aviation airport codes (JFK, LAX) instead of long city names.",
    "explanationMarkdown": "### Short Status View with git status -s\n\n`git status -s` provides a fast, compact two-column overview (`M` modified, `A` added, `??` untracked).\n\n```bash\ngit status -s\n```",
    "workedExample": {
      "title": "Worked Example: Short Status View with git status -s",
      "code": "git status -s",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Short Status View with git status -s.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Short Status View with git status -s.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View compact two-letter status indicators\n# TODO: Write command below\n",
    "solutionCode": "git status -s",
    "hints": [
      "Write:\ngit status -s"
    ],
    "testCases": [
      {
        "id": "git-27-tc-1",
        "description": "Verifies correct implementation for Short Status View with git status -s",
        "testFn": "code.includes('git status -s')"
      }
    ]
  },
  {
    "id": "git-28-understanding-commit-sha-1-and-s",
    "title": "28. Understanding Commit SHA-1 and SHA-256 Hashes",
    "slug": "lesson-28-understanding-commit-sha-1-and-s",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Understanding Commit SHA-1 and SHA-256 Hashes in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Understanding Commit SHA-1 and SHA-256 Hashes",
      "Git & GitHub"
    ],
    "analogy": "A biometric iris scan uniquely identifying an individual among billions of humans.",
    "explanationMarkdown": "### Understanding Commit SHA-1 and SHA-256 Hashes\n\nGit identifies every object using a 40-character cryptographic SHA-1 (or SHA-256) hash based on its contents.\n\n```bash\ngit rev-parse HEAD\n```",
    "workedExample": {
      "title": "Worked Example: Understanding Commit SHA-1 and SHA-256 Hashes",
      "code": "git rev-parse HEAD",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding Commit SHA-1 and SHA-256 Hashes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding Commit SHA-1 and SHA-256 Hashes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Display current commit hash\n# TODO: Write command below\n",
    "solutionCode": "git rev-parse HEAD",
    "hints": [
      "Write:\ngit rev-parse HEAD"
    ],
    "testCases": [
      {
        "id": "git-28-tc-1",
        "description": "Verifies correct implementation for Understanding Commit SHA-1 and SHA-256 Hashes",
        "testFn": "code.includes('git rev-parse HEAD') || code.includes('git rev-parse')"
      }
    ]
  },
  {
    "id": "git-29-inspecting-git-plumbing-with-git",
    "title": "29. Inspecting Git Plumbing with git cat-file",
    "slug": "lesson-29-inspecting-git-plumbing-with-git",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inspecting Git Plumbing with git cat-file in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Inspecting Git Plumbing with git cat-file",
      "Git & GitHub"
    ],
    "analogy": "Opening the mechanical back of a grandfather clock to inspect the pendulum gears.",
    "explanationMarkdown": "### Inspecting Git Plumbing with git cat-file\n\n`git cat-file -p <hash>` pretty-prints raw commit, tree, blob, and tag objects stored in `.git/objects`.\n\n```bash\ngit cat-file -p HEAD\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Git Plumbing with git cat-file",
      "code": "git cat-file -p HEAD",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Git Plumbing with git cat-file.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Git Plumbing with git cat-file.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect raw Git object type and contents\n# TODO: Write command below\n",
    "solutionCode": "git cat-file -p HEAD",
    "hints": [
      "Write:\ngit cat-file -p HEAD"
    ],
    "testCases": [
      {
        "id": "git-29-tc-1",
        "description": "Verifies correct implementation for Inspecting Git Plumbing with git cat-file",
        "testFn": "code.includes('git cat-file')"
      }
    ]
  },
  {
    "id": "git-30-comparing-commits-with-git-diff-",
    "title": "30. Comparing Commits with git diff commitA..commitB",
    "slug": "lesson-30-comparing-commits-with-git-diff-",
    "language": "git",
    "category": "Module 2: History Inspection & Exploration",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Comparing Commits with git diff commitA..commitB in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Comparing Commits with git diff commitA..commitB",
      "Git & GitHub"
    ],
    "analogy": "Comparing two editions of an encyclopedia to see what changed between 2020 and 2026.",
    "explanationMarkdown": "### Comparing Commits with git diff commitA..commitB\n\nShows the exact code differences introduced between two branches or commit hashes.\n\n```bash\ngit diff main..feature\n```",
    "workedExample": {
      "title": "Worked Example: Comparing Commits with git diff commitA..commitB",
      "code": "git diff main..feature",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Comparing Commits with git diff commitA..commitB.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Comparing Commits with git diff commitA..commitB.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Compare differences between two revisions\n# TODO: Write command below\n",
    "solutionCode": "git diff main..feature",
    "hints": [
      "Write:\ngit diff main..feature"
    ],
    "testCases": [
      {
        "id": "git-30-tc-1",
        "description": "Verifies correct implementation for Comparing Commits with git diff commitA..commitB",
        "testFn": "code.includes('git diff') && code.includes('..')"
      }
    ]
  },
  {
    "id": "git-31-the-branch-mental-model-movable-",
    "title": "31. The Branch Mental Model: Movable Pointers",
    "slug": "lesson-31-the-branch-mental-model-movable-",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Branch Mental Model: Movable Pointers in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Branch Mental Model",
      "Git & GitHub"
    ],
    "analogy": "A sticky label that slides forward to point to the newest train car added to the track.",
    "explanationMarkdown": "### The Branch Mental Model: Movable Pointers\n\nA Git branch is simply a lightweight, movable pointer to a commit hash. Creating a branch is instant!\n\n```bash\ngit branch\n```",
    "workedExample": {
      "title": "Worked Example: The Branch Mental Model: Movable Pointers",
      "code": "git branch",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Branch Mental Model: Movable Pointers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Branch Mental Model: Movable Pointers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View existing branches\n# TODO: Write command below\n",
    "solutionCode": "git branch",
    "hints": [
      "Write:\ngit branch"
    ],
    "testCases": [
      {
        "id": "git-31-tc-1",
        "description": "Verifies correct implementation for The Branch Mental Model: Movable Pointers",
        "testFn": "code.includes('git branch')"
      }
    ]
  },
  {
    "id": "git-32-listing-local-and-remote-branche",
    "title": "32. Listing Local and Remote Branches",
    "slug": "lesson-32-listing-local-and-remote-branche",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Listing Local and Remote Branches in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing Local and Remote Branches",
      "Git & GitHub"
    ],
    "analogy": "Checking the airport departure board for both domestic and international flights.",
    "explanationMarkdown": "### Listing Local and Remote Branches\n\n`git branch -a` displays all local branches as well as tracking references to remote branches.\n\n```bash\ngit branch -a\n```",
    "workedExample": {
      "title": "Worked Example: Listing Local and Remote Branches",
      "code": "git branch -a",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Local and Remote Branches.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Local and Remote Branches.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List all branches including remotes\n# TODO: Write command below\n",
    "solutionCode": "git branch -a",
    "hints": [
      "Write:\ngit branch -a"
    ],
    "testCases": [
      {
        "id": "git-32-tc-1",
        "description": "Verifies correct implementation for Listing Local and Remote Branches",
        "testFn": "code.includes('git branch -a')"
      }
    ]
  },
  {
    "id": "git-33-creating-new-branches-with-git-b",
    "title": "33. Creating New Branches with git branch",
    "slug": "lesson-33-creating-new-branches-with-git-b",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Creating New Branches with git branch in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Creating New Branches with git branch",
      "Git & GitHub"
    ],
    "analogy": "Planting a new directional signpost along a hiking trail pointing down a scenic side loop.",
    "explanationMarkdown": "### Creating New Branches with git branch\n\n`git branch <branchname>` creates a new branch pointer at current HEAD without switching to it.\n\n```bash\ngit branch feature/auth\n```",
    "workedExample": {
      "title": "Worked Example: Creating New Branches with git branch",
      "code": "git branch feature/auth",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating New Branches with git branch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating New Branches with git branch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create a new feature branch\n# TODO: Write command below\n",
    "solutionCode": "git branch feature/auth",
    "hints": [
      "Write:\ngit branch feature/auth"
    ],
    "testCases": [
      {
        "id": "git-33-tc-1",
        "description": "Verifies correct implementation for Creating New Branches with git branch",
        "testFn": "code.includes('git branch feature/') || code.includes('git branch')"
      }
    ]
  },
  {
    "id": "git-34-switching-branches-with-git-swit",
    "title": "34. Switching Branches with git switch",
    "slug": "lesson-34-switching-branches-with-git-swit",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Switching Branches with git switch in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Switching Branches with git switch",
      "Git & GitHub"
    ],
    "analogy": "Stepping off Track 1 and walking onto Track 2 at a train terminal.",
    "explanationMarkdown": "### Switching Branches with git switch\n\n`git switch <branchname>` is the modern dedicated command for switching branches (introduced in Git 2.23).\n\n```bash\ngit switch main\n```",
    "workedExample": {
      "title": "Worked Example: Switching Branches with git switch",
      "code": "git switch main",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Switching Branches with git switch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Switching Branches with git switch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Switch to an existing branch\n# TODO: Write command below\n",
    "solutionCode": "git switch main",
    "hints": [
      "Write:\ngit switch main"
    ],
    "testCases": [
      {
        "id": "git-34-tc-1",
        "description": "Verifies correct implementation for Switching Branches with git switch",
        "testFn": "code.includes('git switch')"
      }
    ]
  },
  {
    "id": "git-35-creating-and-switching-in-one-st",
    "title": "35. Creating and Switching in One Step: git switch -c",
    "slug": "lesson-35-creating-and-switching-in-one-st",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Creating and Switching in One Step: git switch -c in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Creating and Switching in One Step",
      "Git & GitHub"
    ],
    "analogy": "Building a new railroad siding and driving your locomotive onto it in one smooth turn.",
    "explanationMarkdown": "### Creating and Switching in One Step: git switch -c\n\n`git switch -c <name>` (or classic `git checkout -b <name>`) creates and switches to a new branch instantly.\n\n```bash\ngit switch -c feature/user-profile\n```",
    "workedExample": {
      "title": "Worked Example: Creating and Switching in One Step: git switch -c",
      "code": "git switch -c feature/user-profile",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating and Switching in One Step: git switch -c.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating and Switching in One Step: git switch -c.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create and immediately switch to new branch\n# TODO: Write command below\n",
    "solutionCode": "git switch -c feature/user-profile",
    "hints": [
      "Write:\ngit switch -c feature/user-profile"
    ],
    "testCases": [
      {
        "id": "git-35-tc-1",
        "description": "Verifies correct implementation for Creating and Switching in One Step: git switch -c",
        "testFn": "code.includes('git switch -c')"
      }
    ]
  },
  {
    "id": "git-36-deleting-local-branches-with-git",
    "title": "36. Deleting Local Branches with git branch -d",
    "slug": "lesson-36-deleting-local-branches-with-git",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Deleting Local Branches with git branch -d in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Deleting Local Branches with git branch -d",
      "Git & GitHub"
    ],
    "analogy": "Taking down temporary construction scaffolding after the brick wall has dried.",
    "explanationMarkdown": "### Deleting Local Branches with git branch -d\n\n`-d` safely deletes a branch only if its changes have already been merged into an upstream branch.\n\n```bash\ngit branch -d feature/user-profile\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Local Branches with git branch -d",
      "code": "git branch -d feature/user-profile",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deleting Local Branches with git branch -d.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deleting Local Branches with git branch -d.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Safely delete merged branch\n# TODO: Write command below\n",
    "solutionCode": "git branch -d feature/user-profile",
    "hints": [
      "Write:\ngit branch -d feature/user-profile"
    ],
    "testCases": [
      {
        "id": "git-36-tc-1",
        "description": "Verifies correct implementation for Deleting Local Branches with git branch -d",
        "testFn": "code.includes('git branch -d')"
      }
    ]
  },
  {
    "id": "git-37-force-deleting-unmerged-branches",
    "title": "37. Force Deleting Unmerged Branches with git branch -D",
    "slug": "lesson-37-force-deleting-unmerged-branches",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Force Deleting Unmerged Branches with git branch -D in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Force Deleting Unmerged Branches with git branch -D",
      "Git & GitHub"
    ],
    "analogy": "Bulldozing an abandoned test track that was never connected to the main railway line.",
    "explanationMarkdown": "### Force Deleting Unmerged Branches with git branch -D\n\n`-D` (capital D) forces branch deletion regardless of merge status. Use when abandoning experiments.\n\n```bash\ngit branch -D experiment/bad-idea\n```",
    "workedExample": {
      "title": "Worked Example: Force Deleting Unmerged Branches with git branch -D",
      "code": "git branch -D experiment/bad-idea",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Force Deleting Unmerged Branches with git branch -D.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Force Deleting Unmerged Branches with git branch -D.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Force delete abandoned experimental branch\n# TODO: Write command below\n",
    "solutionCode": "git branch -D experiment/bad-idea",
    "hints": [
      "Write:\ngit branch -D experiment/bad-idea"
    ],
    "testCases": [
      {
        "id": "git-37-tc-1",
        "description": "Verifies correct implementation for Force Deleting Unmerged Branches with git branch -D",
        "testFn": "code.includes('git branch -D')"
      }
    ]
  },
  {
    "id": "git-38-renaming-branches-with-git-branc",
    "title": "38. Renaming Branches with git branch -m",
    "slug": "lesson-38-renaming-branches-with-git-branc",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Renaming Branches with git branch -m in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Renaming Branches with git branch -m",
      "Git & GitHub"
    ],
    "analogy": "Pasting a new label over a file folder without disturbing the documents inside.",
    "explanationMarkdown": "### Renaming Branches with git branch -m\n\n`git branch -m <oldname> <newname>` renames a branch cleanly across repository references.\n\n```bash\ngit branch -m feature/billing-v2\n```",
    "workedExample": {
      "title": "Worked Example: Renaming Branches with git branch -m",
      "code": "git branch -m feature/billing-v2",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Renaming Branches with git branch -m.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Renaming Branches with git branch -m.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Rename current branch\n# TODO: Write command below\n",
    "solutionCode": "git branch -m feature/billing-v2",
    "hints": [
      "Write:\ngit branch -m feature/billing-v2"
    ],
    "testCases": [
      {
        "id": "git-38-tc-1",
        "description": "Verifies correct implementation for Renaming Branches with git branch -m",
        "testFn": "code.includes('git branch -m')"
      }
    ]
  },
  {
    "id": "git-39-understanding-the-detached-head-",
    "title": "39. Understanding the Detached HEAD State",
    "slug": "lesson-39-understanding-the-detached-head-",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Understanding the Detached HEAD State in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Understanding the Detached HEAD State",
      "Git & GitHub"
    ],
    "analogy": "Stepping out of the train and walking on the gravel tracks between stations.",
    "explanationMarkdown": "### Understanding the Detached HEAD State\n\nIn detached HEAD state, HEAD points directly to a commit hash rather than a named branch pointer.\n\n```bash\ngit checkout HEAD~1\n```",
    "workedExample": {
      "title": "Worked Example: Understanding the Detached HEAD State",
      "code": "git checkout HEAD~1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding the Detached HEAD State.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding the Detached HEAD State.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Checkout specific past commit\n# TODO: Write command below\n",
    "solutionCode": "git checkout HEAD~1",
    "hints": [
      "Write:\ngit checkout HEAD~1"
    ],
    "testCases": [
      {
        "id": "git-39-tc-1",
        "description": "Verifies correct implementation for Understanding the Detached HEAD State",
        "testFn": "code.includes('git checkout')"
      }
    ]
  },
  {
    "id": "git-40-safely-saving-work-from-detached",
    "title": "40. Safely Saving Work from Detached HEAD",
    "slug": "lesson-40-safely-saving-work-from-detached",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Safely Saving Work from Detached HEAD in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Safely Saving Work from Detached HEAD",
      "Git & GitHub"
    ],
    "analogy": "Planting a permanent signpost where you are standing so you can return to this exact spot anytime.",
    "explanationMarkdown": "### Safely Saving Work from Detached HEAD\n\nIf you made commits while in detached HEAD, run `git switch -c <name>` to give them a permanent branch pointer!\n\n```bash\ngit switch -c recovery-branch\n```",
    "workedExample": {
      "title": "Worked Example: Safely Saving Work from Detached HEAD",
      "code": "git switch -c recovery-branch",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Safely Saving Work from Detached HEAD.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Safely Saving Work from Detached HEAD.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create a named branch to save detached commits\n# TODO: Write command below\n",
    "solutionCode": "git switch -c recovery-branch",
    "hints": [
      "Write:\ngit switch -c recovery-branch"
    ],
    "testCases": [
      {
        "id": "git-40-tc-1",
        "description": "Verifies correct implementation for Safely Saving Work from Detached HEAD",
        "testFn": "code.includes('git switch -c') || code.includes('git checkout -b')"
      }
    ]
  },
  {
    "id": "git-41-comparing-branches-with-three-do",
    "title": "41. Comparing Branches with Three-Dot Diffs (A...B)",
    "slug": "lesson-41-comparing-branches-with-three-do",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Comparing Branches with Three-Dot Diffs (A...B) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Comparing Branches with Three-Dot Diffs (A...B)",
      "Git & GitHub"
    ],
    "analogy": "Measuring how far a river tributary has diverged from the main riverbed since they split.",
    "explanationMarkdown": "### Comparing Branches with Three-Dot Diffs (A...B)\n\n`git diff A...B` shows changes made on branch B since it branched off from branch A.\n\n```bash\ngit diff main...feature\n```",
    "workedExample": {
      "title": "Worked Example: Comparing Branches with Three-Dot Diffs (A...B)",
      "code": "git diff main...feature",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Comparing Branches with Three-Dot Diffs (A...B).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Comparing Branches with Three-Dot Diffs (A...B).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Compare feature branch to its fork point on main\n# TODO: Write command below\n",
    "solutionCode": "git diff main...feature",
    "hints": [
      "Write:\ngit diff main...feature"
    ],
    "testCases": [
      {
        "id": "git-41-tc-1",
        "description": "Verifies correct implementation for Comparing Branches with Three-Dot Diffs (A...B)",
        "testFn": "code.includes('...')"
      }
    ]
  },
  {
    "id": "git-42-listing-merged-branches-with---m",
    "title": "42. Listing Merged Branches with --merged",
    "slug": "lesson-42-listing-merged-branches-with---m",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Listing Merged Branches with --merged in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing Merged Branches with --merged",
      "Git & GitHub"
    ],
    "analogy": "Checking off completed items on a construction punchlist so old tools can be recycled.",
    "explanationMarkdown": "### Listing Merged Branches with --merged\n\nLists all branches whose commits have been fully integrated, safe to delete.\n\n```bash\ngit branch --merged\n```",
    "workedExample": {
      "title": "Worked Example: Listing Merged Branches with --merged",
      "code": "git branch --merged",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Merged Branches with --merged.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Merged Branches with --merged.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find branches already merged into current branch\n# TODO: Write command below\n",
    "solutionCode": "git branch --merged",
    "hints": [
      "Write:\ngit branch --merged"
    ],
    "testCases": [
      {
        "id": "git-42-tc-1",
        "description": "Verifies correct implementation for Listing Merged Branches with --merged",
        "testFn": "code.includes('git branch --merged')"
      }
    ]
  },
  {
    "id": "git-43-listing-unmerged-branches-with--",
    "title": "43. Listing Unmerged Branches with --no-merged",
    "slug": "lesson-43-listing-unmerged-branches-with--",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Listing Unmerged Branches with --no-merged in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing Unmerged Branches with --no-merged",
      "Git & GitHub"
    ],
    "analogy": "Checking which airplane flights are still in the air and haven't touched down yet.",
    "explanationMarkdown": "### Listing Unmerged Branches with --no-merged\n\nLists branches with unmerged changes that would be lost if deleted with lowercase `-d`.\n\n```bash\ngit branch --no-merged\n```",
    "workedExample": {
      "title": "Worked Example: Listing Unmerged Branches with --no-merged",
      "code": "git branch --no-merged",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Unmerged Branches with --no-merged.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Unmerged Branches with --no-merged.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find branches with unmerged active work\n# TODO: Write command below\n",
    "solutionCode": "git branch --no-merged",
    "hints": [
      "Write:\ngit branch --no-merged"
    ],
    "testCases": [
      {
        "id": "git-43-tc-1",
        "description": "Verifies correct implementation for Listing Unmerged Branches with --no-merged",
        "testFn": "code.includes('git branch --no-merged')"
      }
    ]
  },
  {
    "id": "git-44-branch-naming-conventions-in-mod",
    "title": "44. Branch Naming Conventions in Modern Teams",
    "slug": "lesson-44-branch-naming-conventions-in-mod",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Branch Naming Conventions in Modern Teams in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Branch Naming Conventions in Modern Teams",
      "Git & GitHub"
    ],
    "analogy": "Filing library books under standardized Dewey decimal category prefixes.",
    "explanationMarkdown": "### Branch Naming Conventions in Modern Teams\n\nUse prefixes: `feature/`, `bugfix/`, `hotfix/`, `release/` paired with issue tracker ticket IDs.\n\n```bash\ngit branch feature/ENG-402-payment-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Branch Naming Conventions in Modern Teams",
      "code": "git branch feature/ENG-402-payment-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Branch Naming Conventions in Modern Teams.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Branch Naming Conventions in Modern Teams.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create structured branch name\n# TODO: Write command below\n",
    "solutionCode": "git branch feature/ENG-402-payment-gateway",
    "hints": [
      "Write:\ngit branch feature/ENG-402-payment-gateway"
    ],
    "testCases": [
      {
        "id": "git-44-tc-1",
        "description": "Verifies correct implementation for Branch Naming Conventions in Modern Teams",
        "testFn": "code.includes('git branch feature/')"
      }
    ]
  },
  {
    "id": "git-45-setting-upstream-tracking-with--",
    "title": "45. Setting Upstream Tracking with -u / --set-upstream",
    "slug": "lesson-45-setting-upstream-tracking-with--",
    "language": "git",
    "category": "Module 3: Branching & Context Switching",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Setting Upstream Tracking with -u / --set-upstream in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Setting Upstream Tracking with -u / --set-upstream",
      "Git & GitHub"
    ],
    "analogy": "Pairing your phone via Bluetooth to your car so they auto-sync music every time you start the engine.",
    "explanationMarkdown": "### Setting Upstream Tracking with -u / --set-upstream\n\nConfigures the default remote branch used for automated `git pull` and `git push` synchronization.\n\n```bash\ngit branch -u origin/main\n```",
    "workedExample": {
      "title": "Worked Example: Setting Upstream Tracking with -u / --set-upstream",
      "code": "git branch -u origin/main",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Setting Upstream Tracking with -u / --set-upstream.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Setting Upstream Tracking with -u / --set-upstream.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Set remote tracking branch\n# TODO: Write command below\n",
    "solutionCode": "git branch -u origin/main",
    "hints": [
      "Write:\ngit branch -u origin/main"
    ],
    "testCases": [
      {
        "id": "git-45-tc-1",
        "description": "Verifies correct implementation for Setting Upstream Tracking with -u / --set-upstream",
        "testFn": "code.includes('git branch -u') || code.includes('--set-upstream')"
      }
    ]
  },
  {
    "id": "git-46-fast-forward-merges-vs-3-way-mer",
    "title": "46. Fast-Forward Merges vs 3-Way Merges",
    "slug": "lesson-46-fast-forward-merges-vs-3-way-mer",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Fast-Forward Merges vs 3-Way Merges in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Fast-Forward Merges vs 3-Way Merges",
      "Git & GitHub"
    ],
    "analogy": "Fast-forward: sliding a bookmark forward along an uninterrupted timeline. 3-way: weaving two braided rivers together.",
    "explanationMarkdown": "### Fast-Forward Merges vs 3-Way Merges\n\nIf no new commits occurred on main, Git fast-forwards the pointer; otherwise, Git creates a merge commit.\n\n```bash\ngit merge feature/login\n```",
    "workedExample": {
      "title": "Worked Example: Fast-Forward Merges vs 3-Way Merges",
      "code": "git merge feature/login",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fast-Forward Merges vs 3-Way Merges.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fast-Forward Merges vs 3-Way Merges.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Merge feature branch into main\n# TODO: Write command below\n",
    "solutionCode": "git merge feature/login",
    "hints": [
      "Write:\ngit merge feature/login"
    ],
    "testCases": [
      {
        "id": "git-46-tc-1",
        "description": "Verifies correct implementation for Fast-Forward Merges vs 3-Way Merges",
        "testFn": "code.includes('git merge')"
      }
    ]
  },
  {
    "id": "git-47-creating-a-standard-merge-commit",
    "title": "47. Creating a Standard Merge Commit",
    "slug": "lesson-47-creating-a-standard-merge-commit",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Creating a Standard Merge Commit in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Creating a Standard Merge Commit",
      "Git & GitHub"
    ],
    "analogy": "A ceremonial ribbon-cutting ceremony officially tying a new highway bypass into the main expressway.",
    "explanationMarkdown": "### Creating a Standard Merge Commit\n\n`--no-ff` forces Git to create a dedicated merge commit even if a fast-forward was possible, preserving history.\n\n```bash\ngit merge --no-ff feature/payments\n```",
    "workedExample": {
      "title": "Worked Example: Creating a Standard Merge Commit",
      "code": "git merge --no-ff feature/payments",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating a Standard Merge Commit.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating a Standard Merge Commit.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Merge with explicit merge commit\n# TODO: Write command below\n",
    "solutionCode": "git merge --no-ff feature/payments",
    "hints": [
      "Write:\ngit merge --no-ff feature/payments"
    ],
    "testCases": [
      {
        "id": "git-47-tc-1",
        "description": "Verifies correct implementation for Creating a Standard Merge Commit",
        "testFn": "code.includes('git merge --no-ff')"
      }
    ]
  },
  {
    "id": "git-48-why-merge-conflicts-happen",
    "title": "48. Why Merge Conflicts Happen",
    "slug": "lesson-48-why-merge-conflicts-happen",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Why Merge Conflicts Happen in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Why Merge Conflicts Happen",
      "Git & GitHub"
    ],
    "analogy": "Two co-authors editing the exact same sentence on page 42 with different words at the same time.",
    "explanationMarkdown": "### Why Merge Conflicts Happen\n\nConflicts occur when concurrent commits modify the same lines of code in conflicting ways.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Why Merge Conflicts Happen",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Merge Conflicts Happen.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Merge Conflicts Happen.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect conflict status during merge\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-48-tc-1",
        "description": "Verifies correct implementation for Why Merge Conflicts Happen",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-49-anatomy-of-conflict-markers-,-==",
    "title": "49. Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>)",
    "slug": "lesson-49-anatomy-of-conflict-markers-,-==",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>)",
      "Git & GitHub"
    ],
    "analogy": "Two opposing sticky notes stuck on the exact same paragraph demanding the editor decide.",
    "explanationMarkdown": "### Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>)\n\n`<<<<<<< HEAD` marks current branch code; `=======` separates; `>>>>>>> branch` marks incoming changes.\n\n```bash\ngit diff\n```",
    "workedExample": {
      "title": "Worked Example: Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>)",
      "code": "git diff",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View conflict markers in file\n# TODO: Write command below\n",
    "solutionCode": "git diff",
    "hints": [
      "Write:\ngit diff"
    ],
    "testCases": [
      {
        "id": "git-49-tc-1",
        "description": "Verifies correct implementation for Anatomy of Conflict Markers (<<<<<<<, =======, >>>>>>>)",
        "testFn": "code.includes('git diff')"
      }
    ]
  },
  {
    "id": "git-50-resolving-merge-conflicts-manual",
    "title": "50. Resolving Merge Conflicts Manually",
    "slug": "lesson-50-resolving-merge-conflicts-manual",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Resolving Merge Conflicts Manually in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Resolving Merge Conflicts Manually",
      "Git & GitHub"
    ],
    "analogy": "An editor reading both suggestions, rewriting the best combined sentence, and erasing the margin notes.",
    "explanationMarkdown": "### Resolving Merge Conflicts Manually\n\nEdit the file to remove markers, verify code builds, and stage the resolved file with `git add`.\n\n```bash\ngit add src/index.ts\n```",
    "workedExample": {
      "title": "Worked Example: Resolving Merge Conflicts Manually",
      "code": "git add src/index.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Resolving Merge Conflicts Manually.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resolving Merge Conflicts Manually.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stage resolved file after editing\n# TODO: Write command below\n",
    "solutionCode": "git add src/index.ts",
    "hints": [
      "Write:\ngit add src/index.ts"
    ],
    "testCases": [
      {
        "id": "git-50-tc-1",
        "description": "Verifies correct implementation for Resolving Merge Conflicts Manually",
        "testFn": "code.includes('git add')"
      }
    ]
  },
  {
    "id": "git-51-completing-the-merge-with-git-co",
    "title": "51. Completing the Merge with git commit",
    "slug": "lesson-51-completing-the-merge-with-git-co",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Completing the Merge with git commit in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Completing the Merge with git commit",
      "Git & GitHub"
    ],
    "analogy": "Signing the joint agreement and recording the final merged edition into the archive ledger.",
    "explanationMarkdown": "### Completing the Merge with git commit\n\nRunning `git commit` without `-m` opens an editor with a pre-populated default merge commit message.\n\n```bash\ngit commit -m \"merge: resolve auth conflict\"\n```",
    "workedExample": {
      "title": "Worked Example: Completing the Merge with git commit",
      "code": "git commit -m \"merge: resolve auth conflict\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Completing the Merge with git commit.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Completing the Merge with git commit.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Finalize the merge commit\n# TODO: Write command below\n",
    "solutionCode": "git commit -m \"merge: resolve auth conflict\"",
    "hints": [
      "Write:\ngit commit -m \"merge: resolve auth conflict\""
    ],
    "testCases": [
      {
        "id": "git-51-tc-1",
        "description": "Verifies correct implementation for Completing the Merge with git commit",
        "testFn": "code.includes('git commit')"
      }
    ]
  },
  {
    "id": "git-52-aborting-a-merge-with-git-merge-",
    "title": "52. Aborting a Merge with git merge --abort",
    "slug": "lesson-52-aborting-a-merge-with-git-merge-",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Aborting a Merge with git merge --abort in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Aborting a Merge with git merge --abort",
      "Git & GitHub"
    ],
    "analogy": "A panic button rolling back an assembly conveyor belt to its exact pre-jam state.",
    "explanationMarkdown": "### Aborting a Merge with git merge --abort\n\n`git merge --abort` immediately cancels the merge operation and restores the working directory.\n\n```bash\ngit merge --abort\n```",
    "workedExample": {
      "title": "Worked Example: Aborting a Merge with git merge --abort",
      "code": "git merge --abort",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Aborting a Merge with git merge --abort.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Aborting a Merge with git merge --abort.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Abort merge and return to pre-merge state\n# TODO: Write command below\n",
    "solutionCode": "git merge --abort",
    "hints": [
      "Write:\ngit merge --abort"
    ],
    "testCases": [
      {
        "id": "git-52-tc-1",
        "description": "Verifies correct implementation for Aborting a Merge with git merge --abort",
        "testFn": "code.includes('git merge --abort')"
      }
    ]
  },
  {
    "id": "git-53-conflict-resolution-strategies--",
    "title": "53. Conflict Resolution Strategies: -X ours and -X theirs",
    "slug": "lesson-53-conflict-resolution-strategies--",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Conflict Resolution Strategies: -X ours and -X theirs in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Conflict Resolution Strategies",
      "Git & GitHub"
    ],
    "analogy": "A judge instructing the jury: 'When in doubt, default to the plaintiff's documentation'.",
    "explanationMarkdown": "### Conflict Resolution Strategies: -X ours and -X theirs\n\n`-X ours` keeps current branch lines on conflict; `-X theirs` favors incoming branch changes automatically.\n\n```bash\ngit merge -X ours feature/styles\n```",
    "workedExample": {
      "title": "Worked Example: Conflict Resolution Strategies: -X ours and -X theirs",
      "code": "git merge -X ours feature/styles",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Conflict Resolution Strategies: -X ours and -X theirs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Conflict Resolution Strategies: -X ours and -X theirs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Auto-favor our branch changes in conflict\n# TODO: Write command below\n",
    "solutionCode": "git merge -X ours feature/styles",
    "hints": [
      "Write:\ngit merge -X ours feature/styles"
    ],
    "testCases": [
      {
        "id": "git-53-tc-1",
        "description": "Verifies correct implementation for Conflict Resolution Strategies: -X ours and -X theirs",
        "testFn": "code.includes('-X ours') || code.includes('-X theirs')"
      }
    ]
  },
  {
    "id": "git-54-squash-merging-with-git-merge---",
    "title": "54. Squash Merging with git merge --squash",
    "slug": "lesson-54-squash-merging-with-git-merge---",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Squash Merging with git merge --squash in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Squash Merging with git merge --squash",
      "Git & GitHub"
    ],
    "analogy": "Condensing a week of messy handwritten diary notes into a single polished executive summary.",
    "explanationMarkdown": "### Squash Merging with git merge --squash\n\nCombines all commits from a feature branch into a single staged change ready for a single clean commit.\n\n```bash\ngit merge --squash feature/dashboard\n```",
    "workedExample": {
      "title": "Worked Example: Squash Merging with git merge --squash",
      "code": "git merge --squash feature/dashboard",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Squash Merging with git merge --squash.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Squash Merging with git merge --squash.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Combine all feature commits into one clean commit\n# TODO: Write command below\n",
    "solutionCode": "git merge --squash feature/dashboard",
    "hints": [
      "Write:\ngit merge --squash feature/dashboard"
    ],
    "testCases": [
      {
        "id": "git-54-tc-1",
        "description": "Verifies correct implementation for Squash Merging with git merge --squash",
        "testFn": "code.includes('git merge --squash')"
      }
    ]
  },
  {
    "id": "git-55-visualizing-merge-graphs-with-lo",
    "title": "55. Visualizing Merge Graphs with Log Flags",
    "slug": "lesson-55-visualizing-merge-graphs-with-lo",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Visualizing Merge Graphs with Log Flags in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Visualizing Merge Graphs with Log Flags",
      "Git & GitHub"
    ],
    "analogy": "A colorful transit map showing where train lines diverge, run parallel, and rejoin the central terminal.",
    "explanationMarkdown": "### Visualizing Merge Graphs with Log Flags\n\nVisualizes how multiple branches diverged, merged, and interlinked over project history.\n\n```bash\ngit log --graph --oneline --all\n```",
    "workedExample": {
      "title": "Worked Example: Visualizing Merge Graphs with Log Flags",
      "code": "git log --graph --oneline --all",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Visualizing Merge Graphs with Log Flags.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Visualizing Merge Graphs with Log Flags.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Graphical merge visualizer\n# TODO: Write command below\n",
    "solutionCode": "git log --graph --oneline --all",
    "hints": [
      "Write:\ngit log --graph --oneline --all"
    ],
    "testCases": [
      {
        "id": "git-55-tc-1",
        "description": "Verifies correct implementation for Visualizing Merge Graphs with Log Flags",
        "testFn": "code.includes('git log') && code.includes('--graph')"
      }
    ]
  },
  {
    "id": "git-56-three-way-merge-tools-mergetool",
    "title": "56. Three-Way Merge Tools (mergetool)",
    "slug": "lesson-56-three-way-merge-tools-mergetool",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Three-Way Merge Tools (mergetool) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Three-Way Merge Tools (mergetool)",
      "Git & GitHub"
    ],
    "analogy": "An optical 3-way microscope displaying original base, local changes, and incoming changes side-by-side.",
    "explanationMarkdown": "### Three-Way Merge Tools (mergetool)\n\nLaunches visual diff/merge utilities (VS Code, Beyond Compare, KDiff3) to resolve complex conflicts.\n\n```bash\ngit mergetool\n```",
    "workedExample": {
      "title": "Worked Example: Three-Way Merge Tools (mergetool)",
      "code": "git mergetool",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Three-Way Merge Tools (mergetool).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Three-Way Merge Tools (mergetool).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Launch graphical merge conflict tool\n# TODO: Write command below\n",
    "solutionCode": "git mergetool",
    "hints": [
      "Write:\ngit mergetool"
    ],
    "testCases": [
      {
        "id": "git-56-tc-1",
        "description": "Verifies correct implementation for Three-Way Merge Tools (mergetool)",
        "testFn": "code.includes('git mergetool')"
      }
    ]
  },
  {
    "id": "git-57-the-common-ancestor-git-merge-ba",
    "title": "57. The Common Ancestor (git merge-base)",
    "slug": "lesson-57-the-common-ancestor-git-merge-ba",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Common Ancestor (git merge-base) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Common Ancestor (git merge-base)",
      "Git & GitHub"
    ],
    "analogy": "Finding the common grandparent in a family genealogical tree.",
    "explanationMarkdown": "### The Common Ancestor (git merge-base)\n\n`git merge-base A B` outputs the closest common ancestor commit SHA used by Git for 3-way merging.\n\n```bash\ngit merge-base main feature\n```",
    "workedExample": {
      "title": "Worked Example: The Common Ancestor (git merge-base)",
      "code": "git merge-base main feature",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Common Ancestor (git merge-base).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Common Ancestor (git merge-base).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find common ancestor commit between two branches\n# TODO: Write command below\n",
    "solutionCode": "git merge-base main feature",
    "hints": [
      "Write:\ngit merge-base main feature"
    ],
    "testCases": [
      {
        "id": "git-57-tc-1",
        "description": "Verifies correct implementation for The Common Ancestor (git merge-base)",
        "testFn": "code.includes('git merge-base')"
      }
    ]
  },
  {
    "id": "git-58-handling-renamed-files-during-me",
    "title": "58. Handling Renamed Files During Merge",
    "slug": "lesson-58-handling-renamed-files-during-me",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Handling Renamed Files During Merge in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Handling Renamed Files During Merge",
      "Git & GitHub"
    ],
    "analogy": "A detective realizing a suspect changed their name because their fingerprints still match 99%.",
    "explanationMarkdown": "### Handling Renamed Files During Merge\n\nGit doesn't track renames explicitly; it calculates file content similarity heuristics to merge across renames!\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Handling Renamed Files During Merge",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Renamed Files During Merge.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Renamed Files During Merge.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Git auto-detects renames via similarity index\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-58-tc-1",
        "description": "Verifies correct implementation for Handling Renamed Files During Merge",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-59-merge-conflict-prevention-best-p",
    "title": "59. Merge Conflict Prevention Best Practices",
    "slug": "lesson-59-merge-conflict-prevention-best-p",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Merge Conflict Prevention Best Practices in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Merge Conflict Prevention Best Practices",
      "Git & GitHub"
    ],
    "analogy": "Calling your co-author every morning to compare notes so your drafts never drift far apart.",
    "explanationMarkdown": "### Merge Conflict Prevention Best Practices\n\nKeep feature branches small, merge frequently, and communicate across teams to prevent merge agony.\n\n```bash\ngit pull --rebase\n```",
    "workedExample": {
      "title": "Worked Example: Merge Conflict Prevention Best Practices",
      "code": "git pull --rebase",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Merge Conflict Prevention Best Practices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Merge Conflict Prevention Best Practices.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Pull latest changes frequently\n# TODO: Write command below\n",
    "solutionCode": "git pull --rebase",
    "hints": [
      "Write:\ngit pull --rebase"
    ],
    "testCases": [
      {
        "id": "git-59-tc-1",
        "description": "Verifies correct implementation for Merge Conflict Prevention Best Practices",
        "testFn": "code.includes('git pull')"
      }
    ]
  },
  {
    "id": "git-60-module-4-review-complex-merge-si",
    "title": "60. Module 4 Review: Complex Merge Simulation",
    "slug": "lesson-60-module-4-review-complex-merge-si",
    "language": "git",
    "category": "Module 4: Merging & Conflict Resolution",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 4 Review: Complex Merge Simulation in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Module 4 Review",
      "Git & GitHub"
    ],
    "analogy": "Successfully landing an airplane through crosswinds onto the main runway.",
    "explanationMarkdown": "### Module 4 Review: Complex Merge Simulation\n\nMastery over branching, fast-forwarding, 3-way merge commits, conflict resolution, and squash merges.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: Complex Merge Simulation",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 4 Review: Complex Merge Simulation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 4 Review: Complex Merge Simulation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Review clean merge status\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-60-tc-1",
        "description": "Verifies correct implementation for Module 4 Review: Complex Merge Simulation",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-61-why-stash?-context-switching-wit",
    "title": "61. Why Stash? Context Switching Without Committing",
    "slug": "lesson-61-why-stash?-context-switching-wit",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Why Stash? Context Switching Without Committing in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Why Stash? Context Switching Without Committing",
      "Git & GitHub"
    ],
    "analogy": "Sweeping work-in-progress tools off your desk into a quick-access drawer so you can answer an emergency call.",
    "explanationMarkdown": "### Why Stash? Context Switching Without Committing\n\n`git stash` temporarily shelves uncommitted modifications so you can switch branches cleanly.\n\n```bash\ngit stash\n```",
    "workedExample": {
      "title": "Worked Example: Why Stash? Context Switching Without Committing",
      "code": "git stash",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Stash? Context Switching Without Committing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Stash? Context Switching Without Committing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stash uncommitted changes quickly\n# TODO: Write command below\n",
    "solutionCode": "git stash",
    "hints": [
      "Write:\ngit stash"
    ],
    "testCases": [
      {
        "id": "git-61-tc-1",
        "description": "Verifies correct implementation for Why Stash? Context Switching Without Committing",
        "testFn": "code.includes('git stash')"
      }
    ]
  },
  {
    "id": "git-62-listing-stashes-with-git-stash-l",
    "title": "62. Listing Stashes with git stash list",
    "slug": "lesson-62-listing-stashes-with-git-stash-l",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Listing Stashes with git stash list in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing Stashes with git stash list",
      "Git & GitHub"
    ],
    "analogy": "Opening your workshop drawer and reading labels on stored parts kits.",
    "explanationMarkdown": "### Listing Stashes with git stash list\n\n`git stash list` displays all saved stashes (`stash@{0}`, `stash@{1}`) with timestamps and descriptions.\n\n```bash\ngit stash list\n```",
    "workedExample": {
      "title": "Worked Example: Listing Stashes with git stash list",
      "code": "git stash list",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Stashes with git stash list.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Stashes with git stash list.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View all saved stashes\n# TODO: Write command below\n",
    "solutionCode": "git stash list",
    "hints": [
      "Write:\ngit stash list"
    ],
    "testCases": [
      {
        "id": "git-62-tc-1",
        "description": "Verifies correct implementation for Listing Stashes with git stash list",
        "testFn": "code.includes('git stash list')"
      }
    ]
  },
  {
    "id": "git-63-applying-stashes-with-git-stash-",
    "title": "63. Applying Stashes with git stash apply",
    "slug": "lesson-63-applying-stashes-with-git-stash-",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Applying Stashes with git stash apply in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Applying Stashes with git stash apply",
      "Git & GitHub"
    ],
    "analogy": "Taking a stencil out of a drawer, tracing it onto paper, and putting the stencil back in the drawer.",
    "explanationMarkdown": "### Applying Stashes with git stash apply\n\n`git stash apply` restores stashed modifications back to your working directory while preserving the stash.\n\n```bash\ngit stash apply stash@{0}\n```",
    "workedExample": {
      "title": "Worked Example: Applying Stashes with git stash apply",
      "code": "git stash apply stash@{0}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Applying Stashes with git stash apply.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Applying Stashes with git stash apply.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Apply stash without deleting it from list\n# TODO: Write command below\n",
    "solutionCode": "git stash apply stash@{0}",
    "hints": [
      "Write:\ngit stash apply stash@{0}"
    ],
    "testCases": [
      {
        "id": "git-63-tc-1",
        "description": "Verifies correct implementation for Applying Stashes with git stash apply",
        "testFn": "code.includes('git stash apply')"
      }
    ]
  },
  {
    "id": "git-64-popping-stashes-with-git-stash-p",
    "title": "64. Popping Stashes with git stash pop",
    "slug": "lesson-64-popping-stashes-with-git-stash-p",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Popping Stashes with git stash pop in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Popping Stashes with git stash pop",
      "Git & GitHub"
    ],
    "analogy": "Taking an item out of a drawer and throwing the empty container into the recycling bin.",
    "explanationMarkdown": "### Popping Stashes with git stash pop\n\n`git stash pop` applies the latest stash and immediately drops it from the stash stack.\n\n```bash\ngit stash pop\n```",
    "workedExample": {
      "title": "Worked Example: Popping Stashes with git stash pop",
      "code": "git stash pop",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Popping Stashes with git stash pop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Popping Stashes with git stash pop.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Restore stash and immediately remove from list\n# TODO: Write command below\n",
    "solutionCode": "git stash pop",
    "hints": [
      "Write:\ngit stash pop"
    ],
    "testCases": [
      {
        "id": "git-64-tc-1",
        "description": "Verifies correct implementation for Popping Stashes with git stash pop",
        "testFn": "code.includes('git stash pop')"
      }
    ]
  },
  {
    "id": "git-65-stashing-with-descriptive-messag",
    "title": "65. Stashing with Descriptive Messages",
    "slug": "lesson-65-stashing-with-descriptive-messag",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Stashing with Descriptive Messages in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Stashing with Descriptive Messages",
      "Git & GitHub"
    ],
    "analogy": "Writing a sticky note on a parts bin: 'Carburetor parts - need 10mm bolt tomorrow'.",
    "explanationMarkdown": "### Stashing with Descriptive Messages\n\n`git stash push -m \"message\"` adds a descriptive label so you remember what work was saved.\n\n```bash\ngit stash save \"WIP: refactor auth middleware\"\n```",
    "workedExample": {
      "title": "Worked Example: Stashing with Descriptive Messages",
      "code": "git stash save \"WIP: refactor auth middleware\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stashing with Descriptive Messages.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stashing with Descriptive Messages.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Save stash with custom label\n# TODO: Write command below\n",
    "solutionCode": "git stash save \"WIP: refactor auth middleware\"",
    "hints": [
      "Write:\ngit stash save \"WIP: refactor auth middleware\""
    ],
    "testCases": [
      {
        "id": "git-65-tc-1",
        "description": "Verifies correct implementation for Stashing with Descriptive Messages",
        "testFn": "code.includes('git stash save') || code.includes('git stash push -m')"
      }
    ]
  },
  {
    "id": "git-66-stashing-untracked-files--u-----",
    "title": "66. Stashing Untracked Files (-u / --include-untracked)",
    "slug": "lesson-66-stashing-untracked-files--u-----",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Stashing Untracked Files (-u / --include-untracked) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Stashing Untracked Files (-u / --include-untracked)",
      "Git & GitHub"
    ],
    "analogy": "Sweeping both existing tools and new unopened supply boxes into the temporary storage closet.",
    "explanationMarkdown": "### Stashing Untracked Files (-u / --include-untracked)\n\nBy default, `git stash` ignores untracked files; `-u` ensures new files are safely stashed as well.\n\n```bash\ngit stash -u\n```",
    "workedExample": {
      "title": "Worked Example: Stashing Untracked Files (-u / --include-untracked)",
      "code": "git stash -u",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stashing Untracked Files (-u / --include-untracked).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stashing Untracked Files (-u / --include-untracked).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Include brand new untracked files in stash\n# TODO: Write command below\n",
    "solutionCode": "git stash -u",
    "hints": [
      "Write:\ngit stash -u"
    ],
    "testCases": [
      {
        "id": "git-66-tc-1",
        "description": "Verifies correct implementation for Stashing Untracked Files (-u / --include-untracked)",
        "testFn": "code.includes('git stash -u') || code.includes('--include-untracked')"
      }
    ]
  },
  {
    "id": "git-67-partial-stashing-with-git-stash-",
    "title": "67. Partial Stashing with git stash -p",
    "slug": "lesson-67-partial-stashing-with-git-stash-",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Partial Stashing with git stash -p in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Partial Stashing with git stash -p",
      "Git & GitHub"
    ],
    "analogy": "Packing only half the tools into storage while leaving selected wrenches on the bench.",
    "explanationMarkdown": "### Partial Stashing with git stash -p\n\nAllows you to selectively stash specific code blocks while leaving others in your working tree.\n\n```bash\ngit stash -p\n```",
    "workedExample": {
      "title": "Worked Example: Partial Stashing with git stash -p",
      "code": "git stash -p",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Partial Stashing with git stash -p.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Partial Stashing with git stash -p.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stash specific code hunks interactively\n# TODO: Write command below\n",
    "solutionCode": "git stash -p",
    "hints": [
      "Write:\ngit stash -p"
    ],
    "testCases": [
      {
        "id": "git-67-tc-1",
        "description": "Verifies correct implementation for Partial Stashing with git stash -p",
        "testFn": "code.includes('git stash -p')"
      }
    ]
  },
  {
    "id": "git-68-creating-a-branch-directly-from-",
    "title": "68. Creating a Branch Directly from a Stash",
    "slug": "lesson-68-creating-a-branch-directly-from-",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Creating a Branch Directly from a Stash in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Creating a Branch Directly from a Stash",
      "Git & GitHub"
    ],
    "analogy": "Pulling a set of blueprints out of a drawer and setting up a dedicated new drafting table for them.",
    "explanationMarkdown": "### Creating a Branch Directly from a Stash\n\n`git stash branch <name>` creates a new branch from the commit where stash was made, and applies the stash cleanly.\n\n```bash\ngit stash branch feature/resumed-work stash@{0}\n```",
    "workedExample": {
      "title": "Worked Example: Creating a Branch Directly from a Stash",
      "code": "git stash branch feature/resumed-work stash@{0}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating a Branch Directly from a Stash.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating a Branch Directly from a Stash.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Spin off a new branch from a stash\n# TODO: Write command below\n",
    "solutionCode": "git stash branch feature/resumed-work stash@{0}",
    "hints": [
      "Write:\ngit stash branch feature/resumed-work stash@{0}"
    ],
    "testCases": [
      {
        "id": "git-68-tc-1",
        "description": "Verifies correct implementation for Creating a Branch Directly from a Stash",
        "testFn": "code.includes('git stash branch')"
      }
    ]
  },
  {
    "id": "git-69-dropping-individual-stashes-with",
    "title": "69. Dropping Individual Stashes with git stash drop",
    "slug": "lesson-69-dropping-individual-stashes-with",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Dropping Individual Stashes with git stash drop in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Dropping Individual Stashes with git stash drop",
      "Git & GitHub"
    ],
    "analogy": "Throwing an obsolete parts kit from your workshop drawer into the metal scrap bin.",
    "explanationMarkdown": "### Dropping Individual Stashes with git stash drop\n\n`git stash drop stash@{n}` removes a single stash entry from your stash stack permanently.\n\n```bash\ngit stash drop stash@{0}\n```",
    "workedExample": {
      "title": "Worked Example: Dropping Individual Stashes with git stash drop",
      "code": "git stash drop stash@{0}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dropping Individual Stashes with git stash drop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dropping Individual Stashes with git stash drop.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Delete a specific stash\n# TODO: Write command below\n",
    "solutionCode": "git stash drop stash@{0}",
    "hints": [
      "Write:\ngit stash drop stash@{0}"
    ],
    "testCases": [
      {
        "id": "git-69-tc-1",
        "description": "Verifies correct implementation for Dropping Individual Stashes with git stash drop",
        "testFn": "code.includes('git stash drop')"
      }
    ]
  },
  {
    "id": "git-70-clearing-all-stashes-with-git-st",
    "title": "70. Clearing All Stashes with git stash clear",
    "slug": "lesson-70-clearing-all-stashes-with-git-st",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Clearing All Stashes with git stash clear in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Clearing All Stashes with git stash clear",
      "Git & GitHub"
    ],
    "analogy": "Emptying and power-washing every single drawer in your workshop storage cabinet.",
    "explanationMarkdown": "### Clearing All Stashes with git stash clear\n\n`git stash clear` deletes every stash in the repository. Use with caution!\n\n```bash\ngit stash clear\n```",
    "workedExample": {
      "title": "Worked Example: Clearing All Stashes with git stash clear",
      "code": "git stash clear",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Clearing All Stashes with git stash clear.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Clearing All Stashes with git stash clear.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Wipe all stashes from repository\n# TODO: Write command below\n",
    "solutionCode": "git stash clear",
    "hints": [
      "Write:\ngit stash clear"
    ],
    "testCases": [
      {
        "id": "git-70-tc-1",
        "description": "Verifies correct implementation for Clearing All Stashes with git stash clear",
        "testFn": "code.includes('git stash clear')"
      }
    ]
  },
  {
    "id": "git-71-cleaning-untracked-files-with-gi",
    "title": "71. Cleaning Untracked Files with git clean",
    "slug": "lesson-71-cleaning-untracked-files-with-gi",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Cleaning Untracked Files with git clean in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Cleaning Untracked Files with git clean",
      "Git & GitHub"
    ],
    "analogy": "A safety laser previewing which fallen autumn leaves will be swept up before running the vacuum.",
    "explanationMarkdown": "### Cleaning Untracked Files with git clean\n\n`git clean -n` (dry-run) lists which untracked files would be removed without actually deleting them.\n\n```bash\ngit clean -n\n```",
    "workedExample": {
      "title": "Worked Example: Cleaning Untracked Files with git clean",
      "code": "git clean -n",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cleaning Untracked Files with git clean.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cleaning Untracked Files with git clean.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Dry-run check for untracked files to delete\n# TODO: Write command below\n",
    "solutionCode": "git clean -n",
    "hints": [
      "Write:\ngit clean -n"
    ],
    "testCases": [
      {
        "id": "git-71-tc-1",
        "description": "Verifies correct implementation for Cleaning Untracked Files with git clean",
        "testFn": "code.includes('git clean -n')"
      }
    ]
  },
  {
    "id": "git-72-force-deleting-untracked-files-a",
    "title": "72. Force Deleting Untracked Files and Folders (git clean -fd)",
    "slug": "lesson-72-force-deleting-untracked-files-a",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Force Deleting Untracked Files and Folders (git clean -fd) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Force Deleting Untracked Files and Folders (git clean -fd)",
      "Git & GitHub"
    ],
    "analogy": "A leaf blower clearing all loose debris and empty boxes off the driveway.",
    "explanationMarkdown": "### Force Deleting Untracked Files and Folders (git clean -fd)\n\n`-f` forces deletion of untracked files; `-d` removes untracked directories.\n\n```bash\ngit clean -fd\n```",
    "workedExample": {
      "title": "Worked Example: Force Deleting Untracked Files and Folders (git clean -fd)",
      "code": "git clean -fd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Force Deleting Untracked Files and Folders (git clean -fd).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Force Deleting Untracked Files and Folders (git clean -fd).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Remove untracked files and directories\n# TODO: Write command below\n",
    "solutionCode": "git clean -fd",
    "hints": [
      "Write:\ngit clean -fd"
    ],
    "testCases": [
      {
        "id": "git-72-tc-1",
        "description": "Verifies correct implementation for Force Deleting Untracked Files and Folders (git clean -fd)",
        "testFn": "code.includes('git clean -fd')"
      }
    ]
  },
  {
    "id": "git-73-discarding-unstaged-changes-with",
    "title": "73. Discarding Unstaged Changes with git restore",
    "slug": "lesson-73-discarding-unstaged-changes-with",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Discarding Unstaged Changes with git restore in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Discarding Unstaged Changes with git restore",
      "Git & GitHub"
    ],
    "analogy": "Erasing pencil sketch marks on a blueprint to restore the original inked lines.",
    "explanationMarkdown": "### Discarding Unstaged Changes with git restore\n\n`git restore <file>` discards working tree modifications, restoring the file to the state of the index.\n\n```bash\ngit restore src/app.ts\n```",
    "workedExample": {
      "title": "Worked Example: Discarding Unstaged Changes with git restore",
      "code": "git restore src/app.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Discarding Unstaged Changes with git restore.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Discarding Unstaged Changes with git restore.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Discard uncommitted changes to a file\n# TODO: Write command below\n",
    "solutionCode": "git restore src/app.ts",
    "hints": [
      "Write:\ngit restore src/app.ts"
    ],
    "testCases": [
      {
        "id": "git-73-tc-1",
        "description": "Verifies correct implementation for Discarding Unstaged Changes with git restore",
        "testFn": "code.includes('git restore src/app.ts') || code.includes('git restore')"
      }
    ]
  },
  {
    "id": "git-74-unstaging-files-with-git-restore",
    "title": "74. Unstaging Files with git restore --staged",
    "slug": "lesson-74-unstaging-files-with-git-restore",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Unstaging Files with git restore --staged in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Unstaging Files with git restore --staged",
      "Git & GitHub"
    ],
    "analogy": "Taking an item back out of the shipping box and setting it back on the packing table.",
    "explanationMarkdown": "### Unstaging Files with git restore --staged\n\n`git restore --staged <file>` removes the file from the staging area without erasing your code.\n\n```bash\ngit restore --staged config.json\n```",
    "workedExample": {
      "title": "Worked Example: Unstaging Files with git restore --staged",
      "code": "git restore --staged config.json",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unstaging Files with git restore --staged.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unstaging Files with git restore --staged.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Unstage file while keeping working modifications\n# TODO: Write command below\n",
    "solutionCode": "git restore --staged config.json",
    "hints": [
      "Write:\ngit restore --staged config.json"
    ],
    "testCases": [
      {
        "id": "git-74-tc-1",
        "description": "Verifies correct implementation for Unstaging Files with git restore --staged",
        "testFn": "code.includes('git restore --staged')"
      }
    ]
  },
  {
    "id": "git-75-module-5-review-workspace-hygien",
    "title": "75. Module 5 Review: Workspace Hygiene Capstone",
    "slug": "lesson-75-module-5-review-workspace-hygien",
    "language": "git",
    "category": "Module 5: Stashing, Cleaning & Temporary Work",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 5 Review: Workspace Hygiene Capstone in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Module 5 Review",
      "Git & GitHub"
    ],
    "analogy": "A clean, organized laboratory bench ready for the morning research shift.",
    "explanationMarkdown": "### Module 5 Review: Workspace Hygiene Capstone\n\nA disciplined command of temporary stashing, selective patch isolation, and working tree restoration.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: Workspace Hygiene Capstone",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 5 Review: Workspace Hygiene Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 5 Review: Workspace Hygiene Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify clean working tree\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-75-tc-1",
        "description": "Verifies correct implementation for Module 5 Review: Workspace Hygiene Capstone",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-76-understanding-remotes-origin-and",
    "title": "76. Understanding Remotes: Origin and Upstream",
    "slug": "lesson-76-understanding-remotes-origin-and",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Understanding Remotes: Origin and Upstream in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Understanding Remotes",
      "Git & GitHub"
    ],
    "analogy": "A master airport hub connecting your local city airfield to international flight centers.",
    "explanationMarkdown": "### Understanding Remotes: Origin and Upstream\n\nA remote is a URL pointer to a hosted repository copy (e.g. on GitHub, GitLab, or corporate server).\n\n```bash\ngit remote -v\n```",
    "workedExample": {
      "title": "Worked Example: Understanding Remotes: Origin and Upstream",
      "code": "git remote -v",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding Remotes: Origin and Upstream.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding Remotes: Origin and Upstream.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View configured remote repositories\n# TODO: Write command below\n",
    "solutionCode": "git remote -v",
    "hints": [
      "Write:\ngit remote -v"
    ],
    "testCases": [
      {
        "id": "git-76-tc-1",
        "description": "Verifies correct implementation for Understanding Remotes: Origin and Upstream",
        "testFn": "code.includes('git remote -v')"
      }
    ]
  },
  {
    "id": "git-77-adding-remotes-with-git-remote-a",
    "title": "77. Adding Remotes with git remote add",
    "slug": "lesson-77-adding-remotes-with-git-remote-a",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Adding Remotes with git remote add in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Adding Remotes with git remote add",
      "Git & GitHub"
    ],
    "analogy": "Programming your telephone speed-dial button #1 with the head office phone number.",
    "explanationMarkdown": "### Adding Remotes with git remote add\n\n`git remote add <name> <url>` links a local repository to a remote server endpoint.\n\n```bash\ngit remote add origin https://github.com/devforge/core.git\n```",
    "workedExample": {
      "title": "Worked Example: Adding Remotes with git remote add",
      "code": "git remote add origin https://github.com/devforge/core.git",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adding Remotes with git remote add.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adding Remotes with git remote add.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Add origin remote URL\n# TODO: Write command below\n",
    "solutionCode": "git remote add origin https://github.com/devforge/core.git",
    "hints": [
      "Write:\ngit remote add origin https://github.com/devforge/core.git"
    ],
    "testCases": [
      {
        "id": "git-77-tc-1",
        "description": "Verifies correct implementation for Adding Remotes with git remote add",
        "testFn": "code.includes('git remote add origin')"
      }
    ]
  },
  {
    "id": "git-78-pushing-branches-with-git-push--",
    "title": "78. Pushing Branches with git push -u origin",
    "slug": "lesson-78-pushing-branches-with-git-push--",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pushing Branches with git push -u origin in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Pushing Branches with git push -u origin",
      "Git & GitHub"
    ],
    "analogy": "Shipping a freight container to the central depot and establishing a recurring delivery schedule.",
    "explanationMarkdown": "### Pushing Branches with git push -u origin\n\n`-u` links local branch to remote branch, enabling shorthand `git push` and `git pull` in the future.\n\n```bash\ngit push -u origin main\n```",
    "workedExample": {
      "title": "Worked Example: Pushing Branches with git push -u origin",
      "code": "git push -u origin main",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pushing Branches with git push -u origin.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pushing Branches with git push -u origin.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Push branch and set default upstream\n# TODO: Write command below\n",
    "solutionCode": "git push -u origin main",
    "hints": [
      "Write:\ngit push -u origin main"
    ],
    "testCases": [
      {
        "id": "git-78-tc-1",
        "description": "Verifies correct implementation for Pushing Branches with git push -u origin",
        "testFn": "code.includes('git push -u origin main') || code.includes('git push')"
      }
    ]
  },
  {
    "id": "git-79-fetching-changes-with-git-fetch",
    "title": "79. Fetching Changes with git fetch",
    "slug": "lesson-79-fetching-changes-with-git-fetch",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Fetching Changes with git fetch in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Fetching Changes with git fetch",
      "Git & GitHub"
    ],
    "analogy": "Receiving incoming mail at the front desk and reviewing envelopes before opening them.",
    "explanationMarkdown": "### Fetching Changes with git fetch\n\n`git fetch` downloads remote commits and updates remote tracking branches (`origin/main`) without modifying your local working tree.\n\n```bash\ngit fetch origin\n```",
    "workedExample": {
      "title": "Worked Example: Fetching Changes with git fetch",
      "code": "git fetch origin",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fetching Changes with git fetch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fetching Changes with git fetch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Download remote updates without merging\n# TODO: Write command below\n",
    "solutionCode": "git fetch origin",
    "hints": [
      "Write:\ngit fetch origin"
    ],
    "testCases": [
      {
        "id": "git-79-tc-1",
        "description": "Verifies correct implementation for Fetching Changes with git fetch",
        "testFn": "code.includes('git fetch origin') || code.includes('git fetch')"
      }
    ]
  },
  {
    "id": "git-80-the-git-pull-formula-fetch-+-mer",
    "title": "80. The Git Pull Formula: Fetch + Merge",
    "slug": "lesson-80-the-git-pull-formula-fetch-+-mer",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Git Pull Formula: Fetch + Merge in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Git Pull Formula",
      "Git & GitHub"
    ],
    "analogy": "Receiving incoming mail and immediately opening and filing the documents into your active binders.",
    "explanationMarkdown": "### The Git Pull Formula: Fetch + Merge\n\n`git pull` performs a `git fetch` immediately followed by a `git merge` of the tracked upstream branch.\n\n```bash\ngit pull origin main\n```",
    "workedExample": {
      "title": "Worked Example: The Git Pull Formula: Fetch + Merge",
      "code": "git pull origin main",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Git Pull Formula: Fetch + Merge.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Git Pull Formula: Fetch + Merge.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Pull latest changes\n# TODO: Write command below\n",
    "solutionCode": "git pull origin main",
    "hints": [
      "Write:\ngit pull origin main"
    ],
    "testCases": [
      {
        "id": "git-80-tc-1",
        "description": "Verifies correct implementation for The Git Pull Formula: Fetch + Merge",
        "testFn": "code.includes('git pull')"
      }
    ]
  },
  {
    "id": "git-81-pulling-with-rebase-git-pull---r",
    "title": "81. Pulling with Rebase: git pull --rebase",
    "slug": "lesson-81-pulling-with-rebase-git-pull---r",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pulling with Rebase: git pull --rebase in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Pulling with Rebase",
      "Git & GitHub"
    ],
    "analogy": "Placing incoming bricks at the bottom and neatly stacking your new bricks on top.",
    "explanationMarkdown": "### Pulling with Rebase: git pull --rebase\n\n`git pull --rebase` replays your unpushed local commits on top of newly fetched remote commits, avoiding noisy merge commits.\n\n```bash\ngit pull --rebase origin main\n```",
    "workedExample": {
      "title": "Worked Example: Pulling with Rebase: git pull --rebase",
      "code": "git pull --rebase origin main",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pulling with Rebase: git pull --rebase.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pulling with Rebase: git pull --rebase.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Pull updates while keeping a linear commit history\n# TODO: Write command below\n",
    "solutionCode": "git pull --rebase origin main",
    "hints": [
      "Write:\ngit pull --rebase origin main"
    ],
    "testCases": [
      {
        "id": "git-81-tc-1",
        "description": "Verifies correct implementation for Pulling with Rebase: git pull --rebase",
        "testFn": "code.includes('git pull --rebase')"
      }
    ]
  },
  {
    "id": "git-82-pushing-tags-with-git-push---tag",
    "title": "82. Pushing Tags with git push --tags",
    "slug": "lesson-82-pushing-tags-with-git-push---tag",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pushing Tags with git push --tags in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Pushing Tags with git push --tags",
      "Git & GitHub"
    ],
    "analogy": "Publishing official golden award seals to the public company website.",
    "explanationMarkdown": "### Pushing Tags with git push --tags\n\nBy default, `git push` does not transfer tags. Use `--tags` to synchronize release versions to remotes.\n\n```bash\ngit push origin --tags\n```",
    "workedExample": {
      "title": "Worked Example: Pushing Tags with git push --tags",
      "code": "git push origin --tags",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pushing Tags with git push --tags.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pushing Tags with git push --tags.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Push release tags to remote\n# TODO: Write command below\n",
    "solutionCode": "git push origin --tags",
    "hints": [
      "Write:\ngit push origin --tags"
    ],
    "testCases": [
      {
        "id": "git-82-tc-1",
        "description": "Verifies correct implementation for Pushing Tags with git push --tags",
        "testFn": "code.includes('git push origin --tags') || code.includes('git push --tags')"
      }
    ]
  },
  {
    "id": "git-83-deleting-remote-branches-with-gi",
    "title": "83. Deleting Remote Branches with git push --delete",
    "slug": "lesson-83-deleting-remote-branches-with-gi",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Deleting Remote Branches with git push --delete in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Deleting Remote Branches with git push --delete",
      "Git & GitHub"
    ],
    "analogy": "Calling the central warehouse to dismantle an obsolete satellite storage tent.",
    "explanationMarkdown": "### Deleting Remote Branches with git push --delete\n\n`git push origin --delete <branchname>` deletes the branch on the remote server.\n\n```bash\ngit push origin --delete feature/old-exp\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Remote Branches with git push --delete",
      "code": "git push origin --delete feature/old-exp",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deleting Remote Branches with git push --delete.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deleting Remote Branches with git push --delete.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Delete obsolete remote feature branch\n# TODO: Write command below\n",
    "solutionCode": "git push origin --delete feature/old-exp",
    "hints": [
      "Write:\ngit push origin --delete feature/old-exp"
    ],
    "testCases": [
      {
        "id": "git-83-tc-1",
        "description": "Verifies correct implementation for Deleting Remote Branches with git push --delete",
        "testFn": "code.includes('git push origin --delete')"
      }
    ]
  },
  {
    "id": "git-84-pruning-stale-remote-references-",
    "title": "84. Pruning Stale Remote References (git remote prune)",
    "slug": "lesson-84-pruning-stale-remote-references-",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pruning Stale Remote References (git remote prune) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Pruning Stale Remote References (git remote prune)",
      "Git & GitHub"
    ],
    "analogy": "Removing disconnected phone numbers from your company phone directory.",
    "explanationMarkdown": "### Pruning Stale Remote References (git remote prune)\n\nRemoves local references to branches that were already deleted on the remote server.\n\n```bash\ngit remote prune origin\n```",
    "workedExample": {
      "title": "Worked Example: Pruning Stale Remote References (git remote prune)",
      "code": "git remote prune origin",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pruning Stale Remote References (git remote prune).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pruning Stale Remote References (git remote prune).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Clean up local references to deleted remote branches\n# TODO: Write command below\n",
    "solutionCode": "git remote prune origin",
    "hints": [
      "Write:\ngit remote prune origin"
    ],
    "testCases": [
      {
        "id": "git-84-tc-1",
        "description": "Verifies correct implementation for Pruning Stale Remote References (git remote prune)",
        "testFn": "code.includes('git remote prune origin') || code.includes('git fetch -p')"
      }
    ]
  },
  {
    "id": "git-85-managing-multiple-remotes-forkin",
    "title": "85. Managing Multiple Remotes (Forking Workflow)",
    "slug": "lesson-85-managing-multiple-remotes-forkin",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Managing Multiple Remotes (Forking Workflow) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Managing Multiple Remotes (Forking Workflow)",
      "Git & GitHub"
    ],
    "analogy": "Connecting your local workshop to both your private storage garage (origin) and the original manufacturer (upstream).",
    "explanationMarkdown": "### Managing Multiple Remotes (Forking Workflow)\n\nIn open source, `origin` points to your personal fork, and `upstream` points to the main project repository.\n\n```bash\ngit remote add upstream https://github.com/original/repo.git\n```",
    "workedExample": {
      "title": "Worked Example: Managing Multiple Remotes (Forking Workflow)",
      "code": "git remote add upstream https://github.com/original/repo.git",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Managing Multiple Remotes (Forking Workflow).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Managing Multiple Remotes (Forking Workflow).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Add upstream original repository remote\n# TODO: Write command below\n",
    "solutionCode": "git remote add upstream https://github.com/original/repo.git",
    "hints": [
      "Write:\ngit remote add upstream https://github.com/original/repo.git"
    ],
    "testCases": [
      {
        "id": "git-85-tc-1",
        "description": "Verifies correct implementation for Managing Multiple Remotes (Forking Workflow)",
        "testFn": "code.includes('git remote add upstream')"
      }
    ]
  },
  {
    "id": "git-86-cloning-repositories-with-git-cl",
    "title": "86. Cloning Repositories with git clone",
    "slug": "lesson-86-cloning-repositories-with-git-cl",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Cloning Repositories with git clone in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Cloning Repositories with git clone",
      "Git & GitHub"
    ],
    "analogy": "Ordering a complete certified duplicate set of all architectural blueprints for a building.",
    "explanationMarkdown": "### Cloning Repositories with git clone\n\n`git clone <url>` downloads the full project history, objects, branches, and sets up working directory.\n\n```bash\ngit clone https://github.com/devforge/learning-studio.git\n```",
    "workedExample": {
      "title": "Worked Example: Cloning Repositories with git clone",
      "code": "git clone https://github.com/devforge/learning-studio.git",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cloning Repositories with git clone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cloning Repositories with git clone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Clone a remote repository locally\n# TODO: Write command below\n",
    "solutionCode": "git clone https://github.com/devforge/learning-studio.git",
    "hints": [
      "Write:\ngit clone https://github.com/devforge/learning-studio.git"
    ],
    "testCases": [
      {
        "id": "git-86-tc-1",
        "description": "Verifies correct implementation for Cloning Repositories with git clone",
        "testFn": "code.includes('git clone')"
      }
    ]
  },
  {
    "id": "git-87-shallow-cloning-with---depth-1-f",
    "title": "87. Shallow Cloning with --depth 1 for Fast CI/CD",
    "slug": "lesson-87-shallow-cloning-with---depth-1-f",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Shallow Cloning with --depth 1 for Fast CI/CD in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Shallow Cloning with --depth 1 for Fast CI/CD",
      "Git & GitHub"
    ],
    "analogy": "Buying today's newspaper instead of ordering the entire 50-year archive of back issues.",
    "explanationMarkdown": "### Shallow Cloning with --depth 1 for Fast CI/CD\n\n`--depth 1` downloads only the most recent commit snapshot, speeding up CI/CD pipeline clones by 10x!\n\n```bash\ngit clone --depth 1 https://github.com/devforge/app.git\n```",
    "workedExample": {
      "title": "Worked Example: Shallow Cloning with --depth 1 for Fast CI/CD",
      "code": "git clone --depth 1 https://github.com/devforge/app.git",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shallow Cloning with --depth 1 for Fast CI/CD.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shallow Cloning with --depth 1 for Fast CI/CD.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Clone only the latest commit to save bandwidth\n# TODO: Write command below\n",
    "solutionCode": "git clone --depth 1 https://github.com/devforge/app.git",
    "hints": [
      "Write:\ngit clone --depth 1 https://github.com/devforge/app.git"
    ],
    "testCases": [
      {
        "id": "git-87-tc-1",
        "description": "Verifies correct implementation for Shallow Cloning with --depth 1 for Fast CI/CD",
        "testFn": "code.includes('git clone --depth 1')"
      }
    ]
  },
  {
    "id": "git-88-cloning-a-specific-branch-with--",
    "title": "88. Cloning a Specific Branch with --branch",
    "slug": "lesson-88-cloning-a-specific-branch-with--",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Cloning a Specific Branch with --branch in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Cloning a Specific Branch with --branch",
      "Git & GitHub"
    ],
    "analogy": "Ordering only the blueprints for the roof deck rather than the entire foundation.",
    "explanationMarkdown": "### Cloning a Specific Branch with --branch\n\n`git clone -b <branch> --single-branch` clones exclusively the specified branch.\n\n```bash\ngit clone -b release-v2 --single-branch https://github.com/devforge/app.git\n```",
    "workedExample": {
      "title": "Worked Example: Cloning a Specific Branch with --branch",
      "code": "git clone -b release-v2 --single-branch https://github.com/devforge/app.git",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cloning a Specific Branch with --branch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cloning a Specific Branch with --branch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Clone a specific branch directly\n# TODO: Write command below\n",
    "solutionCode": "git clone -b release-v2 --single-branch https://github.com/devforge/app.git",
    "hints": [
      "Write:\ngit clone -b release-v2 --single-branch https://github.com/devforge/app.git"
    ],
    "testCases": [
      {
        "id": "git-88-tc-1",
        "description": "Verifies correct implementation for Cloning a Specific Branch with --branch",
        "testFn": "code.includes('git clone -b')"
      }
    ]
  },
  {
    "id": "git-89-inspecting-remote-details-with-g",
    "title": "89. Inspecting Remote Details with git remote show",
    "slug": "lesson-89-inspecting-remote-details-with-g",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Inspecting Remote Details with git remote show in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Inspecting Remote Details with git remote show",
      "Git & GitHub"
    ],
    "analogy": "Checking the diagnostic connection speed and signal strength of a satellite radio link.",
    "explanationMarkdown": "### Inspecting Remote Details with git remote show\n\n`git remote show <name>` reveals push/pull URLs, active tracking branches, and out-of-date branches.\n\n```bash\ngit remote show origin\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Remote Details with git remote show",
      "code": "git remote show origin",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Remote Details with git remote show.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Remote Details with git remote show.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect tracking status and push/pull URLs\n# TODO: Write command below\n",
    "solutionCode": "git remote show origin",
    "hints": [
      "Write:\ngit remote show origin"
    ],
    "testCases": [
      {
        "id": "git-89-tc-1",
        "description": "Verifies correct implementation for Inspecting Remote Details with git remote show",
        "testFn": "code.includes('git remote show origin')"
      }
    ]
  },
  {
    "id": "git-90-module-6-review-distributed-team",
    "title": "90. Module 6 Review: Distributed Team Synchronization",
    "slug": "lesson-90-module-6-review-distributed-team",
    "language": "git",
    "category": "Module 6: Remote Repositories & Collaboration",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 6 Review: Distributed Team Synchronization in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "Git & GitHub"
    ],
    "analogy": "A global airline coordination network keeping flights in Tokyo, London, and New York in perfect sync.",
    "explanationMarkdown": "### Module 6 Review: Distributed Team Synchronization\n\nMastery over remote configuration, multi-remote fork flows, shallow CI cloning, and push/pull synchronization.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Distributed Team Synchronization",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Distributed Team Synchronization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Distributed Team Synchronization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Fetch and check synchronization status\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-90-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Distributed Team Synchronization",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-91-the-rebase-mental-model-replayin",
    "title": "91. The Rebase Mental Model: Replaying Commits",
    "slug": "lesson-91-the-rebase-mental-model-replayin",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Rebase Mental Model: Replaying Commits in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Rebase Mental Model",
      "Git & GitHub"
    ],
    "analogy": "Picking up an entire tent and moving it to set it down on fresh level grass at the end of the camp.",
    "explanationMarkdown": "### The Rebase Mental Model: Replaying Commits\n\nRebase rewrites commit history by lifting your feature commits and replaying them one by one on top of the target branch.\n\n```bash\ngit rebase main\n```",
    "workedExample": {
      "title": "Worked Example: The Rebase Mental Model: Replaying Commits",
      "code": "git rebase main",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Rebase Mental Model: Replaying Commits.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Rebase Mental Model: Replaying Commits.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Rebase current feature branch onto main\n# TODO: Write command below\n",
    "solutionCode": "git rebase main",
    "hints": [
      "Write:\ngit rebase main"
    ],
    "testCases": [
      {
        "id": "git-91-tc-1",
        "description": "Verifies correct implementation for The Rebase Mental Model: Replaying Commits",
        "testFn": "code.includes('git rebase main') || code.includes('git rebase')"
      }
    ]
  },
  {
    "id": "git-92-rebase-vs-merge-tradeoffs",
    "title": "92. Rebase vs Merge Tradeoffs",
    "slug": "lesson-92-rebase-vs-merge-tradeoffs",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Rebase vs Merge Tradeoffs in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Rebase vs Merge Tradeoffs",
      "Git & GitHub"
    ],
    "analogy": "A single straight tree trunk (rebase) vs a braided willow tree with criss-crossing branches (merge).",
    "explanationMarkdown": "### Rebase vs Merge Tradeoffs\n\nRebase creates a clean, linear project history; merge preserves chronological truth with explicit merge commits.\n\n```bash\ngit log --oneline -n 5\n```",
    "workedExample": {
      "title": "Worked Example: Rebase vs Merge Tradeoffs",
      "code": "git log --oneline -n 5",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rebase vs Merge Tradeoffs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rebase vs Merge Tradeoffs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check rebase linear history\n# TODO: Write command below\n",
    "solutionCode": "git log --oneline -n 5",
    "hints": [
      "Write:\ngit log --oneline -n 5"
    ],
    "testCases": [
      {
        "id": "git-92-tc-1",
        "description": "Verifies correct implementation for Rebase vs Merge Tradeoffs",
        "testFn": "code.includes('git log --oneline')"
      }
    ]
  },
  {
    "id": "git-93-resolving-conflicts-during-rebas",
    "title": "93. Resolving Conflicts During Rebase",
    "slug": "lesson-93-resolving-conflicts-during-rebas",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Resolving Conflicts During Rebase in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Resolving Conflicts During Rebase",
      "Git & GitHub"
    ],
    "analogy": "Pausing the replay of an audio tape, editing the static, and pressing 'Play' to resume.",
    "explanationMarkdown": "### Resolving Conflicts During Rebase\n\nResolve conflicts, stage the fixed files with `git add`, and run `git rebase --continue` (DO NOT run commit!).\n\n```bash\ngit rebase --continue\n```",
    "workedExample": {
      "title": "Worked Example: Resolving Conflicts During Rebase",
      "code": "git rebase --continue",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Resolving Conflicts During Rebase.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resolving Conflicts During Rebase.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Continue rebase after staging conflict resolution\n# TODO: Write command below\n",
    "solutionCode": "git rebase --continue",
    "hints": [
      "Write:\ngit rebase --continue"
    ],
    "testCases": [
      {
        "id": "git-93-tc-1",
        "description": "Verifies correct implementation for Resolving Conflicts During Rebase",
        "testFn": "code.includes('git rebase --continue')"
      }
    ]
  },
  {
    "id": "git-94-aborting-a-rebase-with-git-rebas",
    "title": "94. Aborting a Rebase with git rebase --abort",
    "slug": "lesson-94-aborting-a-rebase-with-git-rebas",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Aborting a Rebase with git rebase --abort in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Aborting a Rebase with git rebase --abort",
      "Git & GitHub"
    ],
    "analogy": "A pilot pulling up on the flight controls to abort a bumpy landing attempt.",
    "explanationMarkdown": "### Aborting a Rebase with git rebase --abort\n\n`git rebase --abort` cancels the rebase and returns the branch to its exact starting state.\n\n```bash\ngit rebase --abort\n```",
    "workedExample": {
      "title": "Worked Example: Aborting a Rebase with git rebase --abort",
      "code": "git rebase --abort",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Aborting a Rebase with git rebase --abort.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Aborting a Rebase with git rebase --abort.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Cancel rebase and restore original pre-rebase state\n# TODO: Write command below\n",
    "solutionCode": "git rebase --abort",
    "hints": [
      "Write:\ngit rebase --abort"
    ],
    "testCases": [
      {
        "id": "git-94-tc-1",
        "description": "Verifies correct implementation for Aborting a Rebase with git rebase --abort",
        "testFn": "code.includes('git rebase --abort')"
      }
    ]
  },
  {
    "id": "git-95-interactive-rebase-git-rebase--i",
    "title": "95. Interactive Rebase: git rebase -i",
    "slug": "lesson-95-interactive-rebase-git-rebase--i",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Interactive Rebase: git rebase -i in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Interactive Rebase",
      "Git & GitHub"
    ],
    "analogy": "An editor sitting with a red pen reviewing three manuscript chapters before publication.",
    "explanationMarkdown": "### Interactive Rebase: git rebase -i\n\nInteractive rebase lets you edit, reorder, squash, drop, and reword historical commits.\n\n```bash\ngit rebase -i HEAD~3\n```",
    "workedExample": {
      "title": "Worked Example: Interactive Rebase: git rebase -i",
      "code": "git rebase -i HEAD~3",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interactive Rebase: git rebase -i.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interactive Rebase: git rebase -i.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Launch interactive rebase for last 3 commits\n# TODO: Write command below\n",
    "solutionCode": "git rebase -i HEAD~3",
    "hints": [
      "Write:\ngit rebase -i HEAD~3"
    ],
    "testCases": [
      {
        "id": "git-95-tc-1",
        "description": "Verifies correct implementation for Interactive Rebase: git rebase -i",
        "testFn": "code.includes('git rebase -i')"
      }
    ]
  },
  {
    "id": "git-96-rewording-commit-messages-with-r",
    "title": "96. Rewording Commit Messages with reword",
    "slug": "lesson-96-rewording-commit-messages-with-r",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Rewording Commit Messages with reword in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Rewording Commit Messages with reword",
      "Git & GitHub"
    ],
    "analogy": "Pasting a corrected typo label on an archival file box without touching the documents inside.",
    "explanationMarkdown": "### Rewording Commit Messages with reword\n\nThe `reword` (or `r`) action stops at the commit to allow you to edit its commit message.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Rewording Commit Messages with reword",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rewording Commit Messages with reword.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rewording Commit Messages with reword.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Mark commit for message editing in interactive rebase pick -> reword\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-96-tc-1",
        "description": "Verifies correct implementation for Rewording Commit Messages with reword",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-97-squashing-commits-with-squash-an",
    "title": "97. Squashing Commits with squash and fixup",
    "slug": "lesson-97-squashing-commits-with-squash-an",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Squashing Commits with squash and fixup in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Squashing Commits with squash and fixup",
      "Git & GitHub"
    ],
    "analogy": "Compressing five messy drafting sketches into one clean finalized blueprint.",
    "explanationMarkdown": "### Squashing Commits with squash and fixup\n\n`squash` merges a commit into the previous one and combines messages; `fixup` discards the squashed commit's message.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Squashing Commits with squash and fixup",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Squashing Commits with squash and fixup.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Squashing Commits with squash and fixup.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Squash multiple messy commits into one pick -> squash\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-97-tc-1",
        "description": "Verifies correct implementation for Squashing Commits with squash and fixup",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-98-dropping-commits-in-interactive-",
    "title": "98. Dropping Commits in Interactive Rebase (drop)",
    "slug": "lesson-98-dropping-commits-in-interactive-",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Dropping Commits in Interactive Rebase (drop) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Dropping Commits in Interactive Rebase (drop)",
      "Git & GitHub"
    ],
    "analogy": "Snipping a bad frame out of a roll of movie film and splicing the film back together.",
    "explanationMarkdown": "### Dropping Commits in Interactive Rebase (drop)\n\n`drop` (or deleting the line in the interactive rebase file) completely deletes the commit from history.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Dropping Commits in Interactive Rebase (drop)",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dropping Commits in Interactive Rebase (drop).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dropping Commits in Interactive Rebase (drop).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Delete unwanted historical commit pick -> drop\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-98-tc-1",
        "description": "Verifies correct implementation for Dropping Commits in Interactive Rebase (drop)",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-99-reordering-commits-interactively",
    "title": "99. Reordering Commits Interactively",
    "slug": "lesson-99-reordering-commits-interactively",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Reordering Commits Interactively in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Reordering Commits Interactively",
      "Git & GitHub"
    ],
    "analogy": "Rearranging the track listing order of songs on an album playlist.",
    "explanationMarkdown": "### Reordering Commits Interactively\n\nChanging the line order in the interactive rebase file changes the historical chronological order of commits.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Reordering Commits Interactively",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reordering Commits Interactively.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reordering Commits Interactively.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Reorder lines in the interactive rebase file\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-99-tc-1",
        "description": "Verifies correct implementation for Reordering Commits Interactively",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-100-splitting-a-single-commit-into-m",
    "title": "100. Splitting a Single Commit into Multiple Commits (edit)",
    "slug": "lesson-100-splitting-a-single-commit-into-m",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Splitting a Single Commit into Multiple Commits (edit) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Splitting a Single Commit into Multiple Commits (edit)",
      "Git & GitHub"
    ],
    "analogy": "Unpacking one massive storage crate and sorting its contents into two separate organized boxes.",
    "explanationMarkdown": "### Splitting a Single Commit into Multiple Commits (edit)\n\nMark a commit with `edit`, run `git reset HEAD~`, stage changes into distinct groups, and commit each separately.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Splitting a Single Commit into Multiple Commits (edit)",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Splitting a Single Commit into Multiple Commits (edit).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Splitting a Single Commit into Multiple Commits (edit).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Stop to split commit into smaller chunks pick -> edit\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-100-tc-1",
        "description": "Verifies correct implementation for Splitting a Single Commit into Multiple Commits (edit)",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-101-the-golden-rule-of-rebasing-neve",
    "title": "101. The Golden Rule of Rebasing: Never Rebase Public Branches",
    "slug": "lesson-101-the-golden-rule-of-rebasing-neve",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Golden Rule of Rebasing: Never Rebase Public Branches in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Golden Rule of Rebasing",
      "Git & GitHub"
    ],
    "analogy": "Never demolish and repave a public bridge while other cars are currently driving across it.",
    "explanationMarkdown": "### The Golden Rule of Rebasing: Never Rebase Public Branches\n\nNEVER rebase commits that have been pushed to a shared public branch like `main`; it rewrites SHA hashes and breaks team forks!\n\n```bash\ngit branch --show-current\n```",
    "workedExample": {
      "title": "Worked Example: The Golden Rule of Rebasing: Never Rebase Public Branches",
      "code": "git branch --show-current",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Golden Rule of Rebasing: Never Rebase Public Branches.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Golden Rule of Rebasing: Never Rebase Public Branches.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify current branch is local feature branch before rebasing\n# TODO: Write command below\n",
    "solutionCode": "git branch --show-current",
    "hints": [
      "Write:\ngit branch --show-current"
    ],
    "testCases": [
      {
        "id": "git-101-tc-1",
        "description": "Verifies correct implementation for The Golden Rule of Rebasing: Never Rebase Public Branches",
        "testFn": "code.includes('git branch --show-current') || code.includes('git branch')"
      }
    ]
  },
  {
    "id": "git-102-safe-force-pushing-with---force-",
    "title": "102. Safe Force Pushing with --force-with-lease",
    "slug": "lesson-102-safe-force-pushing-with---force-",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Safe Force Pushing with --force-with-lease in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Safe Force Pushing with --force-with-lease",
      "Git & GitHub"
    ],
    "analogy": "Checking that no one has moved items into a closet before locking the door shut.",
    "explanationMarkdown": "### Safe Force Pushing with --force-with-lease\n\n`--force-with-lease` refuses to force push if another teammate has pushed new commits to the remote branch.\n\n```bash\ngit push --force-with-lease origin feature/auth\n```",
    "workedExample": {
      "title": "Worked Example: Safe Force Pushing with --force-with-lease",
      "code": "git push --force-with-lease origin feature/auth",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Safe Force Pushing with --force-with-lease.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Safe Force Pushing with --force-with-lease.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Push rebased branch safely\n# TODO: Write command below\n",
    "solutionCode": "git push --force-with-lease origin feature/auth",
    "hints": [
      "Write:\ngit push --force-with-lease origin feature/auth"
    ],
    "testCases": [
      {
        "id": "git-102-tc-1",
        "description": "Verifies correct implementation for Safe Force Pushing with --force-with-lease",
        "testFn": "code.includes('--force-with-lease')"
      }
    ]
  },
  {
    "id": "git-103-rebasing-onto-another-branch-wit",
    "title": "103. Rebasing onto Another Branch with --onto",
    "slug": "lesson-103-rebasing-onto-another-branch-wit",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Rebasing onto Another Branch with --onto in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Rebasing onto Another Branch with --onto",
      "Git & GitHub"
    ],
    "analogy": "Grafting a fruit branch off an old dying tree and grafting it onto a healthy young oak.",
    "explanationMarkdown": "### Rebasing onto Another Branch with --onto\n\n`git rebase --onto <newbase> <oldupstream> <branch>` surgically moves a branch to an entirely different base commit.\n\n```bash\ngit rebase --onto main legacy-feature new-feature\n```",
    "workedExample": {
      "title": "Worked Example: Rebasing onto Another Branch with --onto",
      "code": "git rebase --onto main legacy-feature new-feature",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rebasing onto Another Branch with --onto.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rebasing onto Another Branch with --onto.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Move a branch grafted onto the wrong parent branch\n# TODO: Write command below\n",
    "solutionCode": "git rebase --onto main legacy-feature new-feature",
    "hints": [
      "Write:\ngit rebase --onto main legacy-feature new-feature"
    ],
    "testCases": [
      {
        "id": "git-103-tc-1",
        "description": "Verifies correct implementation for Rebasing onto Another Branch with --onto",
        "testFn": "code.includes('git rebase --onto')"
      }
    ]
  },
  {
    "id": "git-104-automating-pull-rebase-globally",
    "title": "104. Automating Pull Rebase Globally",
    "slug": "lesson-104-automating-pull-rebase-globally",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Automating Pull Rebase Globally in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Automating Pull Rebase Globally",
      "Git & GitHub"
    ],
    "analogy": "Setting an automated sorting machine to always stack incoming mail on top of existing letters.",
    "explanationMarkdown": "### Automating Pull Rebase Globally\n\nConfigures `git pull` to always rebase by default, eliminating noisy merge bubbles across all projects.\n\n```bash\ngit config --global pull.rebase true\n```",
    "workedExample": {
      "title": "Worked Example: Automating Pull Rebase Globally",
      "code": "git config --global pull.rebase true",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automating Pull Rebase Globally.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automating Pull Rebase Globally.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Configure git to always rebase on pull\n# TODO: Write command below\n",
    "solutionCode": "git config --global pull.rebase true",
    "hints": [
      "Write:\ngit config --global pull.rebase true"
    ],
    "testCases": [
      {
        "id": "git-104-tc-1",
        "description": "Verifies correct implementation for Automating Pull Rebase Globally",
        "testFn": "code.includes('git config --global pull.rebase true') || code.includes('pull.rebase')"
      }
    ]
  },
  {
    "id": "git-105-module-7-review-clean-linear-his",
    "title": "105. Module 7 Review: Clean Linear History Capstone",
    "slug": "lesson-105-module-7-review-clean-linear-his",
    "language": "git",
    "category": "Module 7: Rebasing & History Rewriting",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 7 Review: Clean Linear History Capstone in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Module 7 Review",
      "Git & GitHub"
    ],
    "analogy": "A gleaming straight high-speed bullet train track extending cleanly into the horizon.",
    "explanationMarkdown": "### Module 7 Review: Clean Linear History Capstone\n\nMastery over interactive rebasing, squashing, splitting, safe force pushing, and linear branch hygiene.\n\n```bash\ngit log --oneline -n 5\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Clean Linear History Capstone",
      "code": "git log --oneline -n 5",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 7 Review: Clean Linear History Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 7 Review: Clean Linear History Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify tidy linear log\n# TODO: Write command below\n",
    "solutionCode": "git log --oneline -n 5",
    "hints": [
      "Write:\ngit log --oneline -n 5"
    ],
    "testCases": [
      {
        "id": "git-105-tc-1",
        "description": "Verifies correct implementation for Module 7 Review: Clean Linear History Capstone",
        "testFn": "code.includes('git log --oneline')"
      }
    ]
  },
  {
    "id": "git-106-amending-the-last-commit-with-gi",
    "title": "106. Amending the Last Commit with git commit --amend",
    "slug": "lesson-106-amending-the-last-commit-with-gi",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Amending the Last Commit with git commit --amend in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Amending the Last Commit with git commit --amend",
      "Git & GitHub"
    ],
    "analogy": "Unsealing an envelope before putting it in the mailbox to slip in one forgotten photograph.",
    "explanationMarkdown": "### Amending the Last Commit with git commit --amend\n\n`git commit --amend` updates the most recent commit with newly staged changes and an optional updated message.\n\n```bash\ngit commit --amend -m \"feat: complete auth flow with tests\"\n```",
    "workedExample": {
      "title": "Worked Example: Amending the Last Commit with git commit --amend",
      "code": "git commit --amend -m \"feat: complete auth flow with tests\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Amending the Last Commit with git commit --amend.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Amending the Last Commit with git commit --amend.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Add forgotten file and update last commit message\n# TODO: Write command below\n",
    "solutionCode": "git commit --amend -m \"feat: complete auth flow with tests\"",
    "hints": [
      "Write:\ngit commit --amend -m \"feat: complete auth flow with tests\""
    ],
    "testCases": [
      {
        "id": "git-106-tc-1",
        "description": "Verifies correct implementation for Amending the Last Commit with git commit --amend",
        "testFn": "code.includes('git commit --amend')"
      }
    ]
  },
  {
    "id": "git-107-amending-without-editing-message",
    "title": "107. Amending Without Editing Message (--no-edit)",
    "slug": "lesson-107-amending-without-editing-message",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Amending Without Editing Message (--no-edit) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Amending Without Editing Message (--no-edit)",
      "Git & GitHub"
    ],
    "analogy": "Slipping an extra paperclip into the package before the mail carrier arrives without re-writing the label.",
    "explanationMarkdown": "### Amending Without Editing Message (--no-edit)\n\nCombines newly staged modifications into the previous commit while preserving its existing commit message.\n\n```bash\ngit commit --amend --no-edit\n```",
    "workedExample": {
      "title": "Worked Example: Amending Without Editing Message (--no-edit)",
      "code": "git commit --amend --no-edit",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Amending Without Editing Message (--no-edit).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Amending Without Editing Message (--no-edit).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Amend staged file into previous commit silently\n# TODO: Write command below\n",
    "solutionCode": "git commit --amend --no-edit",
    "hints": [
      "Write:\ngit commit --amend --no-edit"
    ],
    "testCases": [
      {
        "id": "git-107-tc-1",
        "description": "Verifies correct implementation for Amending Without Editing Message (--no-edit)",
        "testFn": "code.includes('git commit --amend --no-edit')"
      }
    ]
  },
  {
    "id": "git-108-safe-undo-with-git-revert",
    "title": "108. Safe Undo with git revert",
    "slug": "lesson-108-safe-undo-with-git-revert",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Safe Undo with git revert in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Safe Undo with git revert",
      "Git & GitHub"
    ],
    "analogy": "Writing an official bank ledger entry crediting an account to reverse an accidental debit.",
    "explanationMarkdown": "### Safe Undo with git revert\n\n`git revert <commit>` creates a brand-new commit that applies the exact inverse diff, safely undoing changes on public branches.\n\n```bash\ngit revert 7e8f9a0\n```",
    "workedExample": {
      "title": "Worked Example: Safe Undo with git revert",
      "code": "git revert 7e8f9a0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Safe Undo with git revert.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Safe Undo with git revert.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Revert a buggy commit by creating an inverse commit\n# TODO: Write command below\n",
    "solutionCode": "git revert 7e8f9a0",
    "hints": [
      "Write:\ngit revert 7e8f9a0"
    ],
    "testCases": [
      {
        "id": "git-108-tc-1",
        "description": "Verifies correct implementation for Safe Undo with git revert",
        "testFn": "code.includes('git revert')"
      }
    ]
  },
  {
    "id": "git-109-reverting-a-merge-commit-with--m",
    "title": "109. Reverting a Merge Commit with -m",
    "slug": "lesson-109-reverting-a-merge-commit-with--m",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Reverting a Merge Commit with -m in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Reverting a Merge Commit with -m",
      "Git & GitHub"
    ],
    "analogy": "Untying a spliced knot by designating which original rope was the continuous main line.",
    "explanationMarkdown": "### Reverting a Merge Commit with -m\n\nBecause merge commits have two parents, `-m 1` instructs Git which parent branch represents the mainline.\n\n```bash\ngit revert -m 1 3c8e2a1\n```",
    "workedExample": {
      "title": "Worked Example: Reverting a Merge Commit with -m",
      "code": "git revert -m 1 3c8e2a1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reverting a Merge Commit with -m.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reverting a Merge Commit with -m.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Revert a merge commit specifying parent mainline 1\n# TODO: Write command below\n",
    "solutionCode": "git revert -m 1 3c8e2a1",
    "hints": [
      "Write:\ngit revert -m 1 3c8e2a1"
    ],
    "testCases": [
      {
        "id": "git-109-tc-1",
        "description": "Verifies correct implementation for Reverting a Merge Commit with -m",
        "testFn": "code.includes('git revert -m 1') || code.includes('git revert -m')"
      }
    ]
  },
  {
    "id": "git-110-soft-reset-with-git-reset---soft",
    "title": "110. Soft Reset with git reset --soft",
    "slug": "lesson-110-soft-reset-with-git-reset---soft",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Soft Reset with git reset --soft in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Soft Reset with git reset --soft",
      "Git & GitHub"
    ],
    "analogy": "Peeling the wax seal off an envelope so the letter remains packed in the box ready to re-seal.",
    "explanationMarkdown": "### Soft Reset with git reset --soft\n\n`--soft` moves HEAD back to a previous commit, leaving all modifications staged in the index.\n\n```bash\ngit reset --soft HEAD~1\n```",
    "workedExample": {
      "title": "Worked Example: Soft Reset with git reset --soft",
      "code": "git reset --soft HEAD~1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Soft Reset with git reset --soft.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Soft Reset with git reset --soft.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Undo commit but keep changes staged\n# TODO: Write command below\n",
    "solutionCode": "git reset --soft HEAD~1",
    "hints": [
      "Write:\ngit reset --soft HEAD~1"
    ],
    "testCases": [
      {
        "id": "git-110-tc-1",
        "description": "Verifies correct implementation for Soft Reset with git reset --soft",
        "testFn": "code.includes('git reset --soft')"
      }
    ]
  },
  {
    "id": "git-111-mixed-reset-with-git-reset---mix",
    "title": "111. Mixed Reset with git reset --mixed (Default)",
    "slug": "lesson-111-mixed-reset-with-git-reset---mix",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Mixed Reset with git reset --mixed (Default) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Mixed Reset with git reset --mixed (Default)",
      "Git & GitHub"
    ],
    "analogy": "Taking all items out of the shipping box and placing them back on your work desk.",
    "explanationMarkdown": "### Mixed Reset with git reset --mixed (Default)\n\n`--mixed` (default) moves HEAD back and unstages changes, keeping all modified code safe in the working tree.\n\n```bash\ngit reset HEAD~1\n```",
    "workedExample": {
      "title": "Worked Example: Mixed Reset with git reset --mixed (Default)",
      "code": "git reset HEAD~1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mixed Reset with git reset --mixed (Default).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mixed Reset with git reset --mixed (Default).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Undo commit and unstage changes into working tree\n# TODO: Write command below\n",
    "solutionCode": "git reset HEAD~1",
    "hints": [
      "Write:\ngit reset HEAD~1"
    ],
    "testCases": [
      {
        "id": "git-111-tc-1",
        "description": "Verifies correct implementation for Mixed Reset with git reset --mixed (Default)",
        "testFn": "code.includes('git reset HEAD~1') || code.includes('git reset')"
      }
    ]
  },
  {
    "id": "git-112-hard-reset-with-git-reset---hard",
    "title": "112. Hard Reset with git reset --hard (Danger Zone!)",
    "slug": "lesson-112-hard-reset-with-git-reset---hard",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Hard Reset with git reset --hard (Danger Zone!) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Hard Reset with git reset --hard (Danger Zone!)",
      "Git & GitHub"
    ],
    "analogy": "A steamroller flattening everything on the workbench back to the concrete foundation.",
    "explanationMarkdown": "### Hard Reset with git reset --hard (Danger Zone!)\n\n`--hard` wipes commits, the staging area, and working tree modifications back to the target commit. Irreversible without reflog!\n\n```bash\ngit reset --hard HEAD~1\n```",
    "workedExample": {
      "title": "Worked Example: Hard Reset with git reset --hard (Danger Zone!)",
      "code": "git reset --hard HEAD~1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hard Reset with git reset --hard (Danger Zone!).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hard Reset with git reset --hard (Danger Zone!).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Discard commits, staged changes, and working modifications\n# TODO: Write command below\n",
    "solutionCode": "git reset --hard HEAD~1",
    "hints": [
      "Write:\ngit reset --hard HEAD~1"
    ],
    "testCases": [
      {
        "id": "git-112-tc-1",
        "description": "Verifies correct implementation for Hard Reset with git reset --hard (Danger Zone!)",
        "testFn": "code.includes('git reset --hard')"
      }
    ]
  },
  {
    "id": "git-113-the-git-safety-net-git-reflog",
    "title": "113. The Git Safety Net: git reflog",
    "slug": "lesson-113-the-git-safety-net-git-reflog",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Git Safety Net: git reflog in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Git Safety Net",
      "Git & GitHub"
    ],
    "analogy": "A security video recorder filming every step the librarian took, even when they deleted files.",
    "explanationMarkdown": "### The Git Safety Net: git reflog\n\n`git reflog` records every single movement of HEAD, allowing you to recover commits deleted by hard resets or bad rebases!\n\n```bash\ngit reflog -n 10\n```",
    "workedExample": {
      "title": "Worked Example: The Git Safety Net: git reflog",
      "code": "git reflog -n 10",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Git Safety Net: git reflog.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Git Safety Net: git reflog.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect repository reference log history\n# TODO: Write command below\n",
    "solutionCode": "git reflog -n 10",
    "hints": [
      "Write:\ngit reflog -n 10"
    ],
    "testCases": [
      {
        "id": "git-113-tc-1",
        "description": "Verifies correct implementation for The Git Safety Net: git reflog",
        "testFn": "code.includes('git reflog')"
      }
    ]
  },
  {
    "id": "git-114-recovering-lost-commits-from-ref",
    "title": "114. Recovering Lost Commits from Reflog",
    "slug": "lesson-114-recovering-lost-commits-from-ref",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Recovering Lost Commits from Reflog in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Recovering Lost Commits from Reflog",
      "Git & GitHub"
    ],
    "analogy": "Re-winding the security video tape to find where you set down your lost car keys, and retrieving them.",
    "explanationMarkdown": "### Recovering Lost Commits from Reflog\n\nFind the lost commit hash in `git reflog`, then checkout or reset to it to resurrect your lost work!\n\n```bash\ngit reset --hard HEAD@{2}\n```",
    "workedExample": {
      "title": "Worked Example: Recovering Lost Commits from Reflog",
      "code": "git reset --hard HEAD@{2}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recovering Lost Commits from Reflog.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recovering Lost Commits from Reflog.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Restore an accidentally deleted commit\n# TODO: Write command below\n",
    "solutionCode": "git reset --hard HEAD@{2}",
    "hints": [
      "Write:\ngit reset --hard HEAD@{2}"
    ],
    "testCases": [
      {
        "id": "git-114-tc-1",
        "description": "Verifies correct implementation for Recovering Lost Commits from Reflog",
        "testFn": "code.includes('HEAD@{') || code.includes('git reset --hard')"
      }
    ]
  },
  {
    "id": "git-115-recovering-deleted-branches-with",
    "title": "115. Recovering Deleted Branches with Reflog",
    "slug": "lesson-115-recovering-deleted-branches-with",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Recovering Deleted Branches with Reflog in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Recovering Deleted Branches with Reflog",
      "Git & GitHub"
    ],
    "analogy": "Planting a new signpost where the old demolished road used to end.",
    "explanationMarkdown": "### Recovering Deleted Branches with Reflog\n\nLook up the commit hash of the deleted branch tip in reflog, and run `git branch <name> <hash>` to resurrect it.\n\n```bash\ngit branch recovered-branch HEAD@{3}\n```",
    "workedExample": {
      "title": "Worked Example: Recovering Deleted Branches with Reflog",
      "code": "git branch recovered-branch HEAD@{3}",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recovering Deleted Branches with Reflog.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recovering Deleted Branches with Reflog.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Recreate a deleted branch from its last reflog commit\n# TODO: Write command below\n",
    "solutionCode": "git branch recovered-branch HEAD@{3}",
    "hints": [
      "Write:\ngit branch recovered-branch HEAD@{3}"
    ],
    "testCases": [
      {
        "id": "git-115-tc-1",
        "description": "Verifies correct implementation for Recovering Deleted Branches with Reflog",
        "testFn": "code.includes('git branch recovered-branch') || code.includes('git branch')"
      }
    ]
  },
  {
    "id": "git-116-recovering-lost-stashes",
    "title": "116. Recovering Lost Stashes",
    "slug": "lesson-116-recovering-lost-stashes",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Recovering Lost Stashes in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Recovering Lost Stashes",
      "Git & GitHub"
    ],
    "analogy": "Sifting through the workshop scrap bin to retrieve a blueprint that was accidentally tossed out.",
    "explanationMarkdown": "### Recovering Lost Stashes\n\n`git fsck --lost-found` discovers dangling commit objects created by dropped stashes so they can be restored.\n\n```bash\ngit fsck --lost-found\n```",
    "workedExample": {
      "title": "Worked Example: Recovering Lost Stashes",
      "code": "git fsck --lost-found",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recovering Lost Stashes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recovering Lost Stashes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Recover dropped stash via dangling commit hash\n# TODO: Write command below\n",
    "solutionCode": "git fsck --lost-found",
    "hints": [
      "Write:\ngit fsck --lost-found"
    ],
    "testCases": [
      {
        "id": "git-116-tc-1",
        "description": "Verifies correct implementation for Recovering Lost Stashes",
        "testFn": "code.includes('git fsck --lost-found') || code.includes('git fsck')"
      }
    ]
  },
  {
    "id": "git-117-restoring-deleted-files-with-git",
    "title": "117. Restoring Deleted Files with git checkout / restore",
    "slug": "lesson-117-restoring-deleted-files-with-git",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Restoring Deleted Files with git checkout / restore in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Restoring Deleted Files with git checkout / restore",
      "Git & GitHub"
    ],
    "analogy": "Retrieving a certified copy of a birth certificate from city hall after losing the original paper.",
    "explanationMarkdown": "### Restoring Deleted Files with git checkout / restore\n\n`git restore <file>` pulls a fresh copy of the file from HEAD or index, restoring accidentally deleted files.\n\n```bash\ngit restore src/important.ts\n```",
    "workedExample": {
      "title": "Worked Example: Restoring Deleted Files with git checkout / restore",
      "code": "git restore src/important.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Restoring Deleted Files with git checkout / restore.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Restoring Deleted Files with git checkout / restore.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Restore an accidentally deleted file from the index\n# TODO: Write command below\n",
    "solutionCode": "git restore src/important.ts",
    "hints": [
      "Write:\ngit restore src/important.ts"
    ],
    "testCases": [
      {
        "id": "git-117-tc-1",
        "description": "Verifies correct implementation for Restoring Deleted Files with git checkout / restore",
        "testFn": "code.includes('git restore src/important.ts') || code.includes('git restore')"
      }
    ]
  },
  {
    "id": "git-118-git-reset-vs-revert-vs-restore-d",
    "title": "118. Git Reset vs Revert vs Restore Decision Matrix",
    "slug": "lesson-118-git-reset-vs-revert-vs-restore-d",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Git Reset vs Revert vs Restore Decision Matrix in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Git Reset vs Revert vs Restore Decision Matrix",
      "Git & GitHub"
    ],
    "analogy": "Choosing between an eraser (restore), opening a sealed package (soft reset), or printing a formal correction notice (revert).",
    "explanationMarkdown": "### Git Reset vs Revert vs Restore Decision Matrix\n\nUse `restore` for uncommitted files, `reset` for local private commits, and `revert` for shared public history.\n\n```bash\ngit revert HEAD\n```",
    "workedExample": {
      "title": "Worked Example: Git Reset vs Revert vs Restore Decision Matrix",
      "code": "git revert HEAD",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Git Reset vs Revert vs Restore Decision Matrix.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Git Reset vs Revert vs Restore Decision Matrix.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check safe revert command\n# TODO: Write command below\n",
    "solutionCode": "git revert HEAD",
    "hints": [
      "Write:\ngit revert HEAD"
    ],
    "testCases": [
      {
        "id": "git-118-tc-1",
        "description": "Verifies correct implementation for Git Reset vs Revert vs Restore Decision Matrix",
        "testFn": "code.includes('git revert')"
      }
    ]
  },
  {
    "id": "git-119-cherry-picking-specific-commits-",
    "title": "119. Cherry-Picking Specific Commits (git cherry-pick)",
    "slug": "lesson-119-cherry-picking-specific-commits-",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Cherry-Picking Specific Commits (git cherry-pick) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Cherry-Picking Specific Commits (git cherry-pick)",
      "Git & GitHub"
    ],
    "analogy": "Picking a single ripe cherry from one tree branch without plucking the entire branch.",
    "explanationMarkdown": "### Cherry-Picking Specific Commits (git cherry-pick)\n\n`git cherry-pick <hash>` copies an individual commit from any branch and applies it directly to current HEAD.\n\n```bash\ngit cherry-pick 4a7c1b2\n```",
    "workedExample": {
      "title": "Worked Example: Cherry-Picking Specific Commits (git cherry-pick)",
      "code": "git cherry-pick 4a7c1b2",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cherry-Picking Specific Commits (git cherry-pick).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cherry-Picking Specific Commits (git cherry-pick).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Apply a single bugfix commit from another branch\n# TODO: Write command below\n",
    "solutionCode": "git cherry-pick 4a7c1b2",
    "hints": [
      "Write:\ngit cherry-pick 4a7c1b2"
    ],
    "testCases": [
      {
        "id": "git-119-tc-1",
        "description": "Verifies correct implementation for Cherry-Picking Specific Commits (git cherry-pick)",
        "testFn": "code.includes('git cherry-pick')"
      }
    ]
  },
  {
    "id": "git-120-resolving-cherry-pick-conflicts-",
    "title": "120. Resolving Cherry-Pick Conflicts or Aborting",
    "slug": "lesson-120-resolving-cherry-pick-conflicts-",
    "language": "git",
    "category": "Module 8: Undoing Mistakes & Time Travel",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Resolving Cherry-Pick Conflicts or Aborting in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Resolving Cherry-Pick Conflicts or Aborting",
      "Git & GitHub"
    ],
    "analogy": "Deciding not to pluck the cherry if it turns out to be tangled in prickly thorns.",
    "explanationMarkdown": "### Resolving Cherry-Pick Conflicts or Aborting\n\n`git cherry-pick --continue` resumes after fixing conflicts; `git cherry-pick --abort` cancels cleanly.\n\n```bash\ngit cherry-pick --abort\n```",
    "workedExample": {
      "title": "Worked Example: Resolving Cherry-Pick Conflicts or Aborting",
      "code": "git cherry-pick --abort",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Resolving Cherry-Pick Conflicts or Aborting.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resolving Cherry-Pick Conflicts or Aborting.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Abort a conflicting cherry-pick\n# TODO: Write command below\n",
    "solutionCode": "git cherry-pick --abort",
    "hints": [
      "Write:\ngit cherry-pick --abort"
    ],
    "testCases": [
      {
        "id": "git-120-tc-1",
        "description": "Verifies correct implementation for Resolving Cherry-Pick Conflicts or Aborting",
        "testFn": "code.includes('git cherry-pick --abort')"
      }
    ]
  },
  {
    "id": "git-121-lightweight-tags-with-git-tag",
    "title": "121. Lightweight Tags with git tag",
    "slug": "lesson-121-lightweight-tags-with-git-tag",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Lightweight Tags with git tag in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Lightweight Tags with git tag",
      "Git & GitHub"
    ],
    "analogy": "Sticking an adhesive gold star on an official certificate.",
    "explanationMarkdown": "### Lightweight Tags with git tag\n\nA lightweight tag is simply an immovable bookmark pointing permanently to a specific commit.\n\n```bash\ngit tag v1.0.0\n```",
    "workedExample": {
      "title": "Worked Example: Lightweight Tags with git tag",
      "code": "git tag v1.0.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lightweight Tags with git tag.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lightweight Tags with git tag.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create lightweight tag at current commit\n# TODO: Write command below\n",
    "solutionCode": "git tag v1.0.0",
    "hints": [
      "Write:\ngit tag v1.0.0"
    ],
    "testCases": [
      {
        "id": "git-121-tc-1",
        "description": "Verifies correct implementation for Lightweight Tags with git tag",
        "testFn": "code.includes('git tag v1.0.0') || code.includes('git tag')"
      }
    ]
  },
  {
    "id": "git-122-annotated-tags-with-git-tag--a",
    "title": "122. Annotated Tags with git tag -a",
    "slug": "lesson-122-annotated-tags-with-git-tag--a",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Annotated Tags with git tag -a in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Annotated Tags with git tag -a",
      "Git & GitHub"
    ],
    "analogy": "A wax-sealed, notarized legal deed recording the date, notary name, and official release notes.",
    "explanationMarkdown": "### Annotated Tags with git tag -a\n\nAnnotated tags are full Git objects containing tagger name, email, date, and release message.\n\n```bash\ngit tag -a v1.0.0 -m \"Release 1.0.0: Initial production release\"\n```",
    "workedExample": {
      "title": "Worked Example: Annotated Tags with git tag -a",
      "code": "git tag -a v1.0.0 -m \"Release 1.0.0: Initial production release\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Annotated Tags with git tag -a.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Annotated Tags with git tag -a.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create signed annotated release tag\n# TODO: Write command below\n",
    "solutionCode": "git tag -a v1.0.0 -m \"Release 1.0.0: Initial production release\"",
    "hints": [
      "Write:\ngit tag -a v1.0.0 -m \"Release 1.0.0: Initial production release\""
    ],
    "testCases": [
      {
        "id": "git-122-tc-1",
        "description": "Verifies correct implementation for Annotated Tags with git tag -a",
        "testFn": "code.includes('git tag -a') && code.includes('-m')"
      }
    ]
  },
  {
    "id": "git-123-listing-and-filtering-tags",
    "title": "123. Listing and Filtering Tags",
    "slug": "lesson-123-listing-and-filtering-tags",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Listing and Filtering Tags in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing and Filtering Tags",
      "Git & GitHub"
    ],
    "analogy": "Searching a catalog archive for all issues published in Volume 1.",
    "explanationMarkdown": "### Listing and Filtering Tags\n\n`git tag -l \"pattern*\"` lists existing tags matching a wildcard pattern.\n\n```bash\ngit tag -l \"v1.*\"\n```",
    "workedExample": {
      "title": "Worked Example: Listing and Filtering Tags",
      "code": "git tag -l \"v1.*\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing and Filtering Tags.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing and Filtering Tags.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List tags matching version pattern\n# TODO: Write command below\n",
    "solutionCode": "git tag -l \"v1.*\"",
    "hints": [
      "Write:\ngit tag -l \"v1.*\""
    ],
    "testCases": [
      {
        "id": "git-123-tc-1",
        "description": "Verifies correct implementation for Listing and Filtering Tags",
        "testFn": "code.includes('git tag -l')"
      }
    ]
  },
  {
    "id": "git-124-checking-out-tagged-releases",
    "title": "124. Checking Out Tagged Releases",
    "slug": "lesson-124-checking-out-tagged-releases",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Checking Out Tagged Releases in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Checking Out Tagged Releases",
      "Git & GitHub"
    ],
    "analogy": "Visiting a historical monument frozen in time on opening day in 1960.",
    "explanationMarkdown": "### Checking Out Tagged Releases\n\nChecking out a tag places you in detached HEAD to view or build code at that exact historical release.\n\n```bash\ngit checkout v1.0.0\n```",
    "workedExample": {
      "title": "Worked Example: Checking Out Tagged Releases",
      "code": "git checkout v1.0.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checking Out Tagged Releases.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checking Out Tagged Releases.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Checkout tag in detached HEAD to inspect release code\n# TODO: Write command below\n",
    "solutionCode": "git checkout v1.0.0",
    "hints": [
      "Write:\ngit checkout v1.0.0"
    ],
    "testCases": [
      {
        "id": "git-124-tc-1",
        "description": "Verifies correct implementation for Checking Out Tagged Releases",
        "testFn": "code.includes('git checkout v1.0.0') || code.includes('git checkout')"
      }
    ]
  },
  {
    "id": "git-125-binary-search-debugging-with-git",
    "title": "125. Binary Search Debugging with git bisect",
    "slug": "lesson-125-binary-search-debugging-with-git",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Binary Search Debugging with git bisect in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Binary Search Debugging with git bisect",
      "Git & GitHub"
    ],
    "analogy": "Playing 'Guess the Number' (higher/lower) to find the exact guilty commit out of 10,000 commits in just 13 steps!",
    "explanationMarkdown": "### Binary Search Debugging with git bisect\n\nGit bisect performs a logarithmic binary search O(log n) across commits to isolate the exact commit that introduced a bug.\n\n```bash\ngit bisect start\ngit bisect bad\ngit bisect good v1.0.0\n```",
    "workedExample": {
      "title": "Worked Example: Binary Search Debugging with git bisect",
      "code": "git bisect start\ngit bisect bad\ngit bisect good v1.0.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Binary Search Debugging with git bisect.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Binary Search Debugging with git bisect.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Start automated binary search for bug\n# TODO: Write command below\n",
    "solutionCode": "git bisect start\ngit bisect bad\ngit bisect good v1.0.0",
    "hints": [
      "Write:\ngit bisect start\ngit bisect bad\ngit bisect good v1.0.0"
    ],
    "testCases": [
      {
        "id": "git-125-tc-1",
        "description": "Verifies correct implementation for Binary Search Debugging with git bisect",
        "testFn": "code.includes('git bisect start') && code.includes('git bisect bad')"
      }
    ]
  },
  {
    "id": "git-126-automating-bisect-with-test-scri",
    "title": "126. Automating Bisect with Test Scripts (git bisect run)",
    "slug": "lesson-126-automating-bisect-with-test-scri",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Automating Bisect with Test Scripts (git bisect run) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Automating Bisect with Test Scripts (git bisect run)",
      "Git & GitHub"
    ],
    "analogy": "Sending a robotic drone down the library aisles to test each book until it finds the misprinted page.",
    "explanationMarkdown": "### Automating Bisect with Test Scripts (git bisect run)\n\n`git bisect run <script>` automatically checks out each bisect midpoint, executes the test, and marks good/bad until bug is found!\n\n```bash\ngit bisect run npm test\n```",
    "workedExample": {
      "title": "Worked Example: Automating Bisect with Test Scripts (git bisect run)",
      "code": "git bisect run npm test",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automating Bisect with Test Scripts (git bisect run).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automating Bisect with Test Scripts (git bisect run).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Automate bisect with automated test command\n# TODO: Write command below\n",
    "solutionCode": "git bisect run npm test",
    "hints": [
      "Write:\ngit bisect run npm test"
    ],
    "testCases": [
      {
        "id": "git-126-tc-1",
        "description": "Verifies correct implementation for Automating Bisect with Test Scripts (git bisect run)",
        "testFn": "code.includes('git bisect run')"
      }
    ]
  },
  {
    "id": "git-127-multiple-working-trees-with-git-",
    "title": "127. Multiple Working Trees with git worktree",
    "slug": "lesson-127-multiple-working-trees-with-git-",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Multiple Working Trees with git worktree in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Multiple Working Trees with git worktree",
      "Git & GitHub"
    ],
    "analogy": "Opening a second drafting table in the next room so you don't have to clear the papers off your main desk.",
    "explanationMarkdown": "### Multiple Working Trees with git worktree\n\n`git worktree add <path> <branch>` creates a second live directory on disk linked to the same repository!\n\n```bash\ngit worktree add ../hotfix-worktree hotfix/urgent\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Working Trees with git worktree",
      "code": "git worktree add ../hotfix-worktree hotfix/urgent",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Working Trees with git worktree.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Working Trees with git worktree.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Add a separate working tree for hotfix without switching branches\n# TODO: Write command below\n",
    "solutionCode": "git worktree add ../hotfix-worktree hotfix/urgent",
    "hints": [
      "Write:\ngit worktree add ../hotfix-worktree hotfix/urgent"
    ],
    "testCases": [
      {
        "id": "git-127-tc-1",
        "description": "Verifies correct implementation for Multiple Working Trees with git worktree",
        "testFn": "code.includes('git worktree add')"
      }
    ]
  },
  {
    "id": "git-128-listing-and-pruning-worktrees",
    "title": "128. Listing and Pruning Worktrees",
    "slug": "lesson-128-listing-and-pruning-worktrees",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Listing and Pruning Worktrees in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Listing and Pruning Worktrees",
      "Git & GitHub"
    ],
    "analogy": "Checking which secondary drafting tables are in use and putting away unused folding desks.",
    "explanationMarkdown": "### Listing and Pruning Worktrees\n\nManages active parallel worktrees across your local machine.\n\n```bash\ngit worktree list\ngit worktree prune\n```",
    "workedExample": {
      "title": "Worked Example: Listing and Pruning Worktrees",
      "code": "git worktree list\ngit worktree prune",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing and Pruning Worktrees.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing and Pruning Worktrees.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List and clean up completed worktrees\n# TODO: Write command below\n",
    "solutionCode": "git worktree list\ngit worktree prune",
    "hints": [
      "Write:\ngit worktree list\ngit worktree prune"
    ],
    "testCases": [
      {
        "id": "git-128-tc-1",
        "description": "Verifies correct implementation for Listing and Pruning Worktrees",
        "testFn": "code.includes('git worktree list') || code.includes('git worktree prune')"
      }
    ]
  },
  {
    "id": "git-129-git-submodules-embedding-reposit",
    "title": "129. Git Submodules: Embedding Repositories",
    "slug": "lesson-129-git-submodules-embedding-reposit",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Git Submodules: Embedding Repositories in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Git Submodules",
      "Git & GitHub"
    ],
    "analogy": "Placing a miniature self-contained clock mechanism inside a larger music box chassis.",
    "explanationMarkdown": "### Git Submodules: Embedding Repositories\n\nSubmodules allow you to keep a Git repository as a subdirectory of another Git repository.\n\n```bash\ngit submodule add https://github.com/vendor/library.git vendor/lib\n```",
    "workedExample": {
      "title": "Worked Example: Git Submodules: Embedding Repositories",
      "code": "git submodule add https://github.com/vendor/library.git vendor/lib",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Git Submodules: Embedding Repositories.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Git Submodules: Embedding Repositories.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Add external repository as submodule\n# TODO: Write command below\n",
    "solutionCode": "git submodule add https://github.com/vendor/library.git vendor/lib",
    "hints": [
      "Write:\ngit submodule add https://github.com/vendor/library.git vendor/lib"
    ],
    "testCases": [
      {
        "id": "git-129-tc-1",
        "description": "Verifies correct implementation for Git Submodules: Embedding Repositories",
        "testFn": "code.includes('git submodule add')"
      }
    ]
  },
  {
    "id": "git-130-initializing-and-updating-submod",
    "title": "130. Initializing and Updating Submodules",
    "slug": "lesson-130-initializing-and-updating-submod",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Initializing and Updating Submodules in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Initializing and Updating Submodules",
      "Git & GitHub"
    ],
    "analogy": "Winding up all the small mechanical clocks inside the music box so they tick in unison.",
    "explanationMarkdown": "### Initializing and Updating Submodules\n\nDownloads and checks out the specific pinned commit SHA for each submodule defined in `.gitmodules`.\n\n```bash\ngit submodule update --init --recursive\n```",
    "workedExample": {
      "title": "Worked Example: Initializing and Updating Submodules",
      "code": "git submodule update --init --recursive",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Initializing and Updating Submodules.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Initializing and Updating Submodules.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Clone and update all nested submodules recursively\n# TODO: Write command below\n",
    "solutionCode": "git submodule update --init --recursive",
    "hints": [
      "Write:\ngit submodule update --init --recursive"
    ],
    "testCases": [
      {
        "id": "git-130-tc-1",
        "description": "Verifies correct implementation for Initializing and Updating Submodules",
        "testFn": "code.includes('git submodule update --init') || code.includes('git submodule update')"
      }
    ]
  },
  {
    "id": "git-131-submodules-vs-monorepos-evaluati",
    "title": "131. Submodules vs Monorepos Evaluation",
    "slug": "lesson-131-submodules-vs-monorepos-evaluati",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Submodules vs Monorepos Evaluation in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Submodules vs Monorepos Evaluation",
      "Git & GitHub"
    ],
    "analogy": "Living in separate connected apartments (submodules) vs living in one large open loft (monorepo).",
    "explanationMarkdown": "### Submodules vs Monorepos Evaluation\n\nSubmodules isolate independent repositories; monorepos keep all related code in a single repository tree.\n\n```bash\ncat .gitmodules\n```",
    "workedExample": {
      "title": "Worked Example: Submodules vs Monorepos Evaluation",
      "code": "cat .gitmodules",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Submodules vs Monorepos Evaluation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Submodules vs Monorepos Evaluation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check submodule config file\n# TODO: Write command below\n",
    "solutionCode": "cat .gitmodules",
    "hints": [
      "Write:\ncat .gitmodules"
    ],
    "testCases": [
      {
        "id": "git-131-tc-1",
        "description": "Verifies correct implementation for Submodules vs Monorepos Evaluation",
        "testFn": "code.includes('.gitmodules')"
      }
    ]
  },
  {
    "id": "git-132-exporting-clean-archives-with-gi",
    "title": "132. Exporting Clean Archives with git archive",
    "slug": "lesson-132-exporting-clean-archives-with-gi",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Exporting Clean Archives with git archive in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Exporting Clean Archives with git archive",
      "Git & GitHub"
    ],
    "analogy": "Taking the furniture out of the house and leaving behind the blueprints and land deeds.",
    "explanationMarkdown": "### Exporting Clean Archives with git archive\n\nGenerates a clean `.zip` or `.tar` distribution package containing source code without repository metadata.\n\n```bash\ngit archive --format=zip --output=release.zip v1.0.0\n```",
    "workedExample": {
      "title": "Worked Example: Exporting Clean Archives with git archive",
      "code": "git archive --format=zip --output=release.zip v1.0.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exporting Clean Archives with git archive.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exporting Clean Archives with git archive.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Export clean zip of release without .git history\n# TODO: Write command below\n",
    "solutionCode": "git archive --format=zip --output=release.zip v1.0.0",
    "hints": [
      "Write:\ngit archive --format=zip --output=release.zip v1.0.0"
    ],
    "testCases": [
      {
        "id": "git-132-tc-1",
        "description": "Verifies correct implementation for Exporting Clean Archives with git archive",
        "testFn": "code.includes('git archive')"
      }
    ]
  },
  {
    "id": "git-133-attaching-metadata-to-commits-wi",
    "title": "133. Attaching Metadata to Commits with git notes",
    "slug": "lesson-133-attaching-metadata-to-commits-wi",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Attaching Metadata to Commits with git notes in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Attaching Metadata to Commits with git notes",
      "Git & GitHub"
    ],
    "analogy": "Sticking a yellow Post-It note on the outside of a sealed legal document.",
    "explanationMarkdown": "### Attaching Metadata to Commits with git notes\n\n`git notes` attaches auxiliary metadata to commits without altering the commit hash or history.\n\n```bash\ngit notes add -m \"Reviewed and approved by Security Team\" HEAD\n```",
    "workedExample": {
      "title": "Worked Example: Attaching Metadata to Commits with git notes",
      "code": "git notes add -m \"Reviewed and approved by Security Team\" HEAD",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Attaching Metadata to Commits with git notes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Attaching Metadata to Commits with git notes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Attach review notes to commit without rewriting SHA\n# TODO: Write command below\n",
    "solutionCode": "git notes add -m \"Reviewed and approved by Security Team\" HEAD",
    "hints": [
      "Write:\ngit notes add -m \"Reviewed and approved by Security Team\" HEAD"
    ],
    "testCases": [
      {
        "id": "git-133-tc-1",
        "description": "Verifies correct implementation for Attaching Metadata to Commits with git notes",
        "testFn": "code.includes('git notes add')"
      }
    ]
  },
  {
    "id": "git-134-repository-integrity-checks-with",
    "title": "134. Repository Integrity Checks with git fsck",
    "slug": "lesson-134-repository-integrity-checks-with",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Repository Integrity Checks with git fsck in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Repository Integrity Checks with git fsck",
      "Git & GitHub"
    ],
    "analogy": "An structural engineer conducting an ultrasound scan on the foundations of a skyscraper.",
    "explanationMarkdown": "### Repository Integrity Checks with git fsck\n\n`git fsck` checks the internal SHA-1 integrity of the object database and discovers corrupt or unreachable objects.\n\n```bash\ngit fsck --full\n```",
    "workedExample": {
      "title": "Worked Example: Repository Integrity Checks with git fsck",
      "code": "git fsck --full",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Repository Integrity Checks with git fsck.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Repository Integrity Checks with git fsck.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify internal repository database integrity\n# TODO: Write command below\n",
    "solutionCode": "git fsck --full",
    "hints": [
      "Write:\ngit fsck --full"
    ],
    "testCases": [
      {
        "id": "git-134-tc-1",
        "description": "Verifies correct implementation for Repository Integrity Checks with git fsck",
        "testFn": "code.includes('git fsck')"
      }
    ]
  },
  {
    "id": "git-135-module-9-review-enterprise-git-p",
    "title": "135. Module 9 Review: Enterprise Git Power Tools",
    "slug": "lesson-135-module-9-review-enterprise-git-p",
    "language": "git",
    "category": "Module 9: Tagging, Submodules & Advanced Tools",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 9 Review: Enterprise Git Power Tools in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "Git & GitHub"
    ],
    "analogy": "A Swiss master watchmaker's precision tool kit for calibrating delicate horological complications.",
    "explanationMarkdown": "### Module 9 Review: Enterprise Git Power Tools\n\nA mastery of annotated release tagging, binary search bisecting, worktrees, and submodule orchestration.\n\n```bash\ngit tag -l\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Enterprise Git Power Tools",
      "code": "git tag -l",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Enterprise Git Power Tools.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Enterprise Git Power Tools.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Summary of release tags\n# TODO: Write command below\n",
    "solutionCode": "git tag -l",
    "hints": [
      "Write:\ngit tag -l"
    ],
    "testCases": [
      {
        "id": "git-135-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Enterprise Git Power Tools",
        "testFn": "code.includes('git tag')"
      }
    ]
  },
  {
    "id": "git-136-the-fork-and-pull-request-pr-wor",
    "title": "136. The Fork and Pull Request (PR) Workflow",
    "slug": "lesson-136-the-fork-and-pull-request-pr-wor",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Fork and Pull Request (PR) Workflow in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "The Fork and Pull Request (PR) Workflow",
      "Git & GitHub"
    ],
    "analogy": "Submitting a proposed chapter to a book publisher for formal editorial review and approval.",
    "explanationMarkdown": "### The Fork and Pull Request (PR) Workflow\n\nThe standard open-source collaboration model: fork repo, push branch, open PR, review code, and merge.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: The Fork and Pull Request (PR) Workflow",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Fork and Pull Request (PR) Workflow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Fork and Pull Request (PR) Workflow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check status before opening pull request\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-136-tc-1",
        "description": "Verifies correct implementation for The Fork and Pull Request (PR) Workflow",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-137-writing-effective-pull-request-d",
    "title": "137. Writing Effective Pull Request Descriptions",
    "slug": "lesson-137-writing-effective-pull-request-d",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Writing Effective Pull Request Descriptions in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Writing Effective Pull Request Descriptions",
      "Git & GitHub"
    ],
    "analogy": "A cover letter explaining the purpose, architectural changes, and test results of a proposal.",
    "explanationMarkdown": "### Writing Effective Pull Request Descriptions\n\nInclude what changed, why it changed, how to test, and link related issue tickets (e.g. `Closes #123`).\n\n```bash\ngit log -n 3 --oneline\n```",
    "workedExample": {
      "title": "Worked Example: Writing Effective Pull Request Descriptions",
      "code": "git log -n 3 --oneline",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Writing Effective Pull Request Descriptions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Writing Effective Pull Request Descriptions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check commit history ready for PR\n# TODO: Write command below\n",
    "solutionCode": "git log -n 3 --oneline",
    "hints": [
      "Write:\ngit log -n 3 --oneline"
    ],
    "testCases": [
      {
        "id": "git-137-tc-1",
        "description": "Verifies correct implementation for Writing Effective Pull Request Descriptions",
        "testFn": "code.includes('git log')"
      }
    ]
  },
  {
    "id": "git-138-github-branch-protection-rules",
    "title": "138. GitHub Branch Protection Rules",
    "slug": "lesson-138-github-branch-protection-rules",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master GitHub Branch Protection Rules in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "GitHub Branch Protection Rules",
      "Git & GitHub"
    ],
    "analogy": "A dual-key bank vault requiring two managers to turn keys simultaneously before the door opens.",
    "explanationMarkdown": "### GitHub Branch Protection Rules\n\nEnforces required PR reviews, passing CI/CD status checks, and linear histories before code can touch `main`.\n\n```bash\ngit branch\n```",
    "workedExample": {
      "title": "Worked Example: GitHub Branch Protection Rules",
      "code": "git branch",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for GitHub Branch Protection Rules.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GitHub Branch Protection Rules.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check main branch status\n# TODO: Write command below\n",
    "solutionCode": "git branch",
    "hints": [
      "Write:\ngit branch"
    ],
    "testCases": [
      {
        "id": "git-138-tc-1",
        "description": "Verifies correct implementation for GitHub Branch Protection Rules",
        "testFn": "code.includes('git branch')"
      }
    ]
  },
  {
    "id": "git-139-merge-strategies-on-github-merge",
    "title": "139. Merge Strategies on GitHub: Merge, Squash, Rebase",
    "slug": "lesson-139-merge-strategies-on-github-merge",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Merge Strategies on GitHub: Merge, Squash, Rebase in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Merge Strategies on GitHub",
      "Git & GitHub"
    ],
    "analogy": "Three options for filing a case: staple all folders together (merge), shred drafts and file one clean report (squash), or re-file chronologically (rebase).",
    "explanationMarkdown": "### Merge Strategies on GitHub: Merge, Squash, Rebase\n\nGitHub allows repositories to enforce Squash & Merge, Rebase & Merge, or standard Merge commits.\n\n```bash\ngit log --oneline -n 3\n```",
    "workedExample": {
      "title": "Worked Example: Merge Strategies on GitHub: Merge, Squash, Rebase",
      "code": "git log --oneline -n 3",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Merge Strategies on GitHub: Merge, Squash, Rebase.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Merge Strategies on GitHub: Merge, Squash, Rebase.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check branch commits\n# TODO: Write command below\n",
    "solutionCode": "git log --oneline -n 3",
    "hints": [
      "Write:\ngit log --oneline -n 3"
    ],
    "testCases": [
      {
        "id": "git-139-tc-1",
        "description": "Verifies correct implementation for Merge Strategies on GitHub: Merge, Squash, Rebase",
        "testFn": "code.includes('git log')"
      }
    ]
  },
  {
    "id": "git-140-mastering-the-.gitignore-file",
    "title": "140. Mastering the .gitignore File",
    "slug": "lesson-140-mastering-the-.gitignore-file",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Mastering the .gitignore File in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Mastering the .gitignore File",
      "Git & GitHub"
    ],
    "analogy": "A trash filter preventing empty soda cans and dust from being packed into a moving truck.",
    "explanationMarkdown": "### Mastering the .gitignore File\n\nLists files and patterns that Git should intentionally ignore and never track in repository history.\n\n```bash\necho \"node_modules/\" >> .gitignore\n```",
    "workedExample": {
      "title": "Worked Example: Mastering the .gitignore File",
      "code": "echo \"node_modules/\" >> .gitignore",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mastering the .gitignore File.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mastering the .gitignore File.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Ignore build artifacts and dependencies .gitignore\n# TODO: Write command below\n",
    "solutionCode": "echo \"node_modules/\" >> .gitignore",
    "hints": [
      "Write:\necho \"node_modules/\" >> .gitignore"
    ],
    "testCases": [
      {
        "id": "git-140-tc-1",
        "description": "Verifies correct implementation for Mastering the .gitignore File",
        "testFn": "code.includes('.gitignore')"
      }
    ]
  },
  {
    "id": "git-141-line-ending-normalization-with-.",
    "title": "141. Line Ending Normalization with .gitattributes",
    "slug": "lesson-141-line-ending-normalization-with-.",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Line Ending Normalization with .gitattributes in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Line Ending Normalization with .gitattributes",
      "Git & GitHub"
    ],
    "analogy": "A standardized international power adapter ensuring plugs fit into sockets in Europe, Asia, and America.",
    "explanationMarkdown": "### Line Ending Normalization with .gitattributes\n\nPrevents dirty line-ending diffs between Windows (CRLF) and Linux/macOS (LF) across distributed teams.\n\n```bash\ncat .gitattributes\n```",
    "workedExample": {
      "title": "Worked Example: Line Ending Normalization with .gitattributes",
      "code": "cat .gitattributes",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Line Ending Normalization with .gitattributes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Line Ending Normalization with .gitattributes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Configure LF line endings across all operating systems * text=auto eol=lf\n# TODO: Write command below\n",
    "solutionCode": "cat .gitattributes",
    "hints": [
      "Write:\ncat .gitattributes"
    ],
    "testCases": [
      {
        "id": "git-141-tc-1",
        "description": "Verifies correct implementation for Line Ending Normalization with .gitattributes",
        "testFn": "code.includes('.gitattributes')"
      }
    ]
  },
  {
    "id": "git-142-git-lfs-large-file-storage-for-m",
    "title": "142. Git LFS (Large File Storage) for Media & Models",
    "slug": "lesson-142-git-lfs-large-file-storage-for-m",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Git LFS (Large File Storage) for Media & Models in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Git LFS (Large File Storage) for Media & Models",
      "Git & GitHub"
    ],
    "analogy": "Storing heavy piano furniture in a specialized storage depot while keeping a lightweight claim ticket in your wallet.",
    "explanationMarkdown": "### Git LFS (Large File Storage) for Media & Models\n\nReplaces large binary files (videos, 3D models, ML weights) with tiny pointer text files in Git history.\n\n```bash\ngit lfs track \"*.mp4\"\n```",
    "workedExample": {
      "title": "Worked Example: Git LFS (Large File Storage) for Media & Models",
      "code": "git lfs track \"*.mp4\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Git LFS (Large File Storage) for Media & Models.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Git LFS (Large File Storage) for Media & Models.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Track large video assets with Git LFS\n# TODO: Write command below\n",
    "solutionCode": "git lfs track \"*.mp4\"",
    "hints": [
      "Write:\ngit lfs track \"*.mp4\""
    ],
    "testCases": [
      {
        "id": "git-142-tc-1",
        "description": "Verifies correct implementation for Git LFS (Large File Storage) for Media & Models",
        "testFn": "code.includes('git lfs track')"
      }
    ]
  },
  {
    "id": "git-143-client-side-git-hooks-.git-hooks",
    "title": "143. Client-Side Git Hooks (.git/hooks/)",
    "slug": "lesson-143-client-side-git-hooks-.git-hooks",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Client-Side Git Hooks (.git/hooks/) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Client-Side Git Hooks (.git/hooks/)",
      "Git & GitHub"
    ],
    "analogy": "An automated gate arm that refuses to open if your car headlights are broken.",
    "explanationMarkdown": "### Client-Side Git Hooks (.git/hooks/)\n\nScripts that run automatically on developers' machines before actions like `pre-commit`, `commit-msg`, and `pre-push`.\n\n```bash\ncat .git/hooks/pre-commit\n```",
    "workedExample": {
      "title": "Worked Example: Client-Side Git Hooks (.git/hooks/)",
      "code": "cat .git/hooks/pre-commit",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Client-Side Git Hooks (.git/hooks/).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Client-Side Git Hooks (.git/hooks/).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect pre-commit hook script\n# TODO: Write command below\n",
    "solutionCode": "cat .git/hooks/pre-commit",
    "hints": [
      "Write:\ncat .git/hooks/pre-commit"
    ],
    "testCases": [
      {
        "id": "git-143-tc-1",
        "description": "Verifies correct implementation for Client-Side Git Hooks (.git/hooks/)",
        "testFn": "code.includes('.git/hooks') || code.includes('pre-commit')"
      }
    ]
  },
  {
    "id": "git-144-husky-&-lint-staged-integration",
    "title": "144. Husky & lint-staged Integration",
    "slug": "lesson-144-husky-&-lint-staged-integration",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Husky & lint-staged Integration in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Husky & lint-staged Integration",
      "Git & GitHub"
    ],
    "analogy": "A grammar checker that inspects only the newly edited paragraph before letting you click send.",
    "explanationMarkdown": "### Husky & lint-staged Integration\n\nHusky automates Git hooks in Node projects; `lint-staged` runs Prettier and ESLint exclusively on staged files.\n\n```bash\nnpx lint-staged\n```",
    "workedExample": {
      "title": "Worked Example: Husky & lint-staged Integration",
      "code": "npx lint-staged",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Husky & lint-staged Integration.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Husky & lint-staged Integration.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run linter strictly on staged files before commit\n# TODO: Write command below\n",
    "solutionCode": "npx lint-staged",
    "hints": [
      "Write:\nnpx lint-staged"
    ],
    "testCases": [
      {
        "id": "git-144-tc-1",
        "description": "Verifies correct implementation for Husky & lint-staged Integration",
        "testFn": "code.includes('lint-staged')"
      }
    ]
  },
  {
    "id": "git-145-enforcing-commit-standards-with-",
    "title": "145. Enforcing Commit Standards with commitlint",
    "slug": "lesson-145-enforcing-commit-standards-with-",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Enforcing Commit Standards with commitlint in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Enforcing Commit Standards with commitlint",
      "Git & GitHub"
    ],
    "analogy": "A post office clerk rejecting an envelope if the zip code is missing from the designated corner.",
    "explanationMarkdown": "### Enforcing Commit Standards with commitlint\n\nValidates commit messages against Conventional Commits rules in the `commit-msg` hook.\n\n```bash\nnpx commitlint --from=HEAD~1\n```",
    "workedExample": {
      "title": "Worked Example: Enforcing Commit Standards with commitlint",
      "code": "npx commitlint --from=HEAD~1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Enforcing Commit Standards with commitlint.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Enforcing Commit Standards with commitlint.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify conventional commit format\n# TODO: Write command below\n",
    "solutionCode": "npx commitlint --from=HEAD~1",
    "hints": [
      "Write:\nnpx commitlint --from=HEAD~1"
    ],
    "testCases": [
      {
        "id": "git-145-tc-1",
        "description": "Verifies correct implementation for Enforcing Commit Standards with commitlint",
        "testFn": "code.includes('commitlint')"
      }
    ]
  },
  {
    "id": "git-146-github-actions-workflow-syntax-.",
    "title": "146. GitHub Actions Workflow Syntax (.github/workflows)",
    "slug": "lesson-146-github-actions-workflow-syntax-.",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master GitHub Actions Workflow Syntax (.github/workflows) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "GitHub Actions Workflow Syntax (.github/workflows)",
      "Git & GitHub"
    ],
    "analogy": "An automated robotic assembly line testing, building, and inspecting cars the instant parts arrive.",
    "explanationMarkdown": "### GitHub Actions Workflow Syntax (.github/workflows)\n\nYAML configuration files that automate CI/CD testing, linting, building, and deployments on GitHub runners.\n\n```bash\ncat .github/workflows/ci.yml\n```",
    "workedExample": {
      "title": "Worked Example: GitHub Actions Workflow Syntax (.github/workflows)",
      "code": "cat .github/workflows/ci.yml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for GitHub Actions Workflow Syntax (.github/workflows).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GitHub Actions Workflow Syntax (.github/workflows).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run test workflow on pull request .github/workflows/test.yml\n# TODO: Write command below\n",
    "solutionCode": "cat .github/workflows/ci.yml",
    "hints": [
      "Write:\ncat .github/workflows/ci.yml"
    ],
    "testCases": [
      {
        "id": "git-146-tc-1",
        "description": "Verifies correct implementation for GitHub Actions Workflow Syntax (.github/workflows)",
        "testFn": "code.includes('.github/workflows') || code.includes('ci.yml')"
      }
    ]
  },
  {
    "id": "git-147-automated-testing-on-pull-reques",
    "title": "147. Automated Testing on Pull Request with GitHub Actions",
    "slug": "lesson-147-automated-testing-on-pull-reques",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Automated Testing on Pull Request with GitHub Actions in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Automated Testing on Pull Request with GitHub Actions",
      "Git & GitHub"
    ],
    "analogy": "A laboratory testing water samples automatically before opening the municipal aqueduct valve.",
    "explanationMarkdown": "### Automated Testing on Pull Request with GitHub Actions\n\nTriggers automated test suites on every pushed commit or PR, blocking merges if tests fail.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Automated Testing on Pull Request with GitHub Actions",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automated Testing on Pull Request with GitHub Actions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automated Testing on Pull Request with GitHub Actions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify CI test status\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-147-tc-1",
        "description": "Verifies correct implementation for Automated Testing on Pull Request with GitHub Actions",
        "testFn": "code.includes('git status')"
      }
    ]
  },
  {
    "id": "git-148-semantic-versioning-&-automated-",
    "title": "148. Semantic Versioning & Automated Releases (semantic-release)",
    "slug": "lesson-148-semantic-versioning-&-automated-",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Semantic Versioning & Automated Releases (semantic-release) in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Semantic Versioning & Automated Releases (semantic-release)",
      "Git & GitHub"
    ],
    "analogy": "An automated printing press that reads commit notes, bumps version numbers, and prints the changelog.",
    "explanationMarkdown": "### Semantic Versioning & Automated Releases (semantic-release)\n\nAutomates package publishing, version calculation, and release notes directly from commit message history.\n\n```bash\ncat CHANGELOG.md\n```",
    "workedExample": {
      "title": "Worked Example: Semantic Versioning & Automated Releases (semantic-release)",
      "code": "cat CHANGELOG.md",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Semantic Versioning & Automated Releases (semantic-release).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Semantic Versioning & Automated Releases (semantic-release).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check release changelog\n# TODO: Write command below\n",
    "solutionCode": "cat CHANGELOG.md",
    "hints": [
      "Write:\ncat CHANGELOG.md"
    ],
    "testCases": [
      {
        "id": "git-148-tc-1",
        "description": "Verifies correct implementation for Semantic Versioning & Automated Releases (semantic-release)",
        "testFn": "code.includes('CHANGELOG.md') || code.includes('release')"
      }
    ]
  },
  {
    "id": "git-149-security-scanning-secrets-with-g",
    "title": "149. Security: Scanning Secrets with Gitleaks & Trufflehog",
    "slug": "lesson-149-security-scanning-secrets-with-g",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Security: Scanning Secrets with Gitleaks & Trufflehog in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Security",
      "Git & GitHub"
    ],
    "analogy": "A bomb-sniffing dog checking luggage for dangerous contraband before flight departure.",
    "explanationMarkdown": "### Security: Scanning Secrets with Gitleaks & Trufflehog\n\nDetects accidentally committed AWS credentials, private SSH keys, and database passwords before they leak to GitHub.\n\n```bash\ngitleaks detect --verbose\n```",
    "workedExample": {
      "title": "Worked Example: Security: Scanning Secrets with Gitleaks & Trufflehog",
      "code": "gitleaks detect --verbose",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Security: Scanning Secrets with Gitleaks & Trufflehog.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Security: Scanning Secrets with Gitleaks & Trufflehog.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Scan repository history for leaked API keys\n# TODO: Write command below\n",
    "solutionCode": "gitleaks detect --verbose",
    "hints": [
      "Write:\ngitleaks detect --verbose"
    ],
    "testCases": [
      {
        "id": "git-149-tc-1",
        "description": "Verifies correct implementation for Security: Scanning Secrets with Gitleaks & Trufflehog",
        "testFn": "code.includes('gitleaks')"
      }
    ]
  },
  {
    "id": "git-150-git-&-github-masterclass-capston",
    "title": "150. Git & GitHub Masterclass Capstone: Enterprise DevOps Flow",
    "slug": "lesson-150-git-&-github-masterclass-capston",
    "language": "git",
    "category": "Module 10: GitHub Workflows, Hooks & CI/CD",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Git & GitHub Masterclass Capstone: Enterprise DevOps Flow in Git & GitHub: Version Control Architecture (150 Topics).",
    "concepts": [
      "Git & GitHub Masterclass Capstone",
      "Git & GitHub"
    ],
    "analogy": "The flawless countdown and liftoff of a collaborative space mission involving hundreds of engineers.",
    "explanationMarkdown": "### Git & GitHub Masterclass Capstone: Enterprise DevOps Flow\n\nA production DevOps workflow: branch protection, conventional commits, lint-staged, CI/CD testing, and automated release.\n\n```bash\ngit status\n```",
    "workedExample": {
      "title": "Worked Example: Git & GitHub Masterclass Capstone: Enterprise DevOps Flow",
      "code": "git status",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Git & GitHub Masterclass Capstone: Enterprise DevOps Flow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Git & GitHub Masterclass Capstone: Enterprise DevOps Flow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Complete production deployment checklist\n# TODO: Write command below\n",
    "solutionCode": "git status",
    "hints": [
      "Write:\ngit status"
    ],
    "testCases": [
      {
        "id": "git-150-tc-1",
        "description": "Verifies correct implementation for Git & GitHub Masterclass Capstone: Enterprise DevOps Flow",
        "testFn": "code.includes('git status')"
      }
    ]
  }
]
};
