import { Track } from '../../types';

export const BASH_TRACK: Track = {
  id: "bash",
  title: "Linux Terminal & Shell Scripting (150 Topics)",
  slug: "bash",
  language: "bash",
  icon: "Terminal",
  color: "from-teal-400 to-emerald-600",
  tagline: "Master Linux CLI power tools, text streams (grep/sed/awk), automation, and shell scripting across 150 lessons.",
  description: "From navigation, permissions, and streams to grep, sed, awk text pipelines, process management, cron automation, and enterprise systemd server administration.",
  lessons: [
  {
    "id": "bash-1-what-is-the-shell?-anatomy-of-th",
    "title": "1. What is the Shell? Anatomy of the Command Prompt",
    "slug": "lesson-1-what-is-the-shell?-anatomy-of-th",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master What is the Shell? Anatomy of the Command Prompt in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "What is the Shell? Anatomy of the Command Prompt",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A direct radio line to the engine room of a ship: typing commands sends instant electrical instructions to the engine.",
    "explanationMarkdown": "### What is the Shell? Anatomy of the Command Prompt\n\nThe Unix shell is a command-line interpreter providing an interactive interface to the operating system kernel.\n\n```bash\npwd\n```",
    "workedExample": {
      "title": "Worked Example: What is the Shell? Anatomy of the Command Prompt",
      "code": "pwd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is the Shell? Anatomy of the Command Prompt.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is the Shell? Anatomy of the Command Prompt.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Print current working directory\n# TODO: Write command below\n",
    "solutionCode": "pwd",
    "hints": [
      "Write:\npwd"
    ],
    "testCases": [
      {
        "id": "bash-1-tc-1",
        "description": "Verifies correct implementation for What is the Shell? Anatomy of the Command Prompt",
        "testFn": "code.includes('pwd')"
      }
    ]
  },
  {
    "id": "bash-2-printing-the-working-directory-p",
    "title": "2. Printing the Working Directory: pwd",
    "slug": "lesson-2-printing-the-working-directory-p",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Printing the Working Directory: pwd in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Printing the Working Directory",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Looking down at a GPS screen on your dashboard to see your exact street latitude and longitude.",
    "explanationMarkdown": "### Printing the Working Directory: pwd\n\n`pwd` (Print Working Directory) outputs the full absolute path of the directory you are currently located in.\n\n```bash\npwd\n```",
    "workedExample": {
      "title": "Worked Example: Printing the Working Directory: pwd",
      "code": "pwd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Printing the Working Directory: pwd.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Printing the Working Directory: pwd.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Confirm active directory path\n# TODO: Write command below\n",
    "solutionCode": "pwd",
    "hints": [
      "Write:\npwd"
    ],
    "testCases": [
      {
        "id": "bash-2-tc-1",
        "description": "Verifies correct implementation for Printing the Working Directory: pwd",
        "testFn": "code.includes('pwd')"
      }
    ]
  },
  {
    "id": "bash-3-listing-files-and-folders-ls",
    "title": "3. Listing Files and Folders: ls",
    "slug": "lesson-3-listing-files-and-folders-ls",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Listing Files and Folders: ls in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Listing Files and Folders",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Opening a storage closet door and glancing at the items sitting on the shelves.",
    "explanationMarkdown": "### Listing Files and Folders: ls\n\n`ls` lists the files and directories inside the target or current directory.\n\n```bash\nls\n```",
    "workedExample": {
      "title": "Worked Example: Listing Files and Folders: ls",
      "code": "ls",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Files and Folders: ls.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Files and Folders: ls.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List contents of current directory\n# TODO: Write command below\n",
    "solutionCode": "ls",
    "hints": [
      "Write:\nls"
    ],
    "testCases": [
      {
        "id": "bash-3-tc-1",
        "description": "Verifies correct implementation for Listing Files and Folders: ls",
        "testFn": "code.includes('ls')"
      }
    ]
  },
  {
    "id": "bash-4-detailed-long-listing-ls--l",
    "title": "4. Detailed Long Listing: ls -l",
    "slug": "lesson-4-detailed-long-listing-ls--l",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Detailed Long Listing: ls -l in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Detailed Long Listing",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reading the detailed manifest paperwork attached to every crate in a shipping depot.",
    "explanationMarkdown": "### Detailed Long Listing: ls -l\n\n`-l` displays the long listing format: file permissions, link count, owner, group, byte size, and timestamp.\n\n```bash\nls -l\n```",
    "workedExample": {
      "title": "Worked Example: Detailed Long Listing: ls -l",
      "code": "ls -l",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detailed Long Listing: ls -l.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detailed Long Listing: ls -l.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View permissions, owner, size, and dates\n# TODO: Write command below\n",
    "solutionCode": "ls -l",
    "hints": [
      "Write:\nls -l"
    ],
    "testCases": [
      {
        "id": "bash-4-tc-1",
        "description": "Verifies correct implementation for Detailed Long Listing: ls -l",
        "testFn": "code.includes('ls -l') || code.includes('ls -lh')"
      }
    ]
  },
  {
    "id": "bash-5-revealing-hidden-files-ls--a",
    "title": "5. Revealing Hidden Files: ls -a",
    "slug": "lesson-5-revealing-hidden-files-ls--a",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Revealing Hidden Files: ls -a in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Revealing Hidden Files",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Shining a blacklight flashlight to reveal invisible ink markings on the wall.",
    "explanationMarkdown": "### Revealing Hidden Files: ls -a\n\nIn Linux, files starting with `.` (like `.bashrc`, `.git`) are hidden by default; `-a` forces them to display.\n\n```bash\nls -a\n```",
    "workedExample": {
      "title": "Worked Example: Revealing Hidden Files: ls -a",
      "code": "ls -a",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Revealing Hidden Files: ls -a.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Revealing Hidden Files: ls -a.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View all files including dotfiles\n# TODO: Write command below\n",
    "solutionCode": "ls -a",
    "hints": [
      "Write:\nls -a"
    ],
    "testCases": [
      {
        "id": "bash-5-tc-1",
        "description": "Verifies correct implementation for Revealing Hidden Files: ls -a",
        "testFn": "code.includes('ls -a') || code.includes('ls -la')"
      }
    ]
  },
  {
    "id": "bash-6-human-readable-file-sizes-ls--lh",
    "title": "6. Human-Readable File Sizes: ls -lh",
    "slug": "lesson-6-human-readable-file-sizes-ls--lh",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Human-Readable File Sizes: ls -lh in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Human-Readable File Sizes",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reading '2.5 GB' instead of having to count 2,684,354,560 individual bytes on your fingers.",
    "explanationMarkdown": "### Human-Readable File Sizes: ls -lh\n\n`-h` formats file sizes into human-readable units (K, M, G) for effortless reading.\n\n```bash\nls -lh\n```",
    "workedExample": {
      "title": "Worked Example: Human-Readable File Sizes: ls -lh",
      "code": "ls -lh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Human-Readable File Sizes: ls -lh.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Human-Readable File Sizes: ls -lh.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Display sizes in KB, MB, and GB\n# TODO: Write command below\n",
    "solutionCode": "ls -lh",
    "hints": [
      "Write:\nls -lh"
    ],
    "testCases": [
      {
        "id": "bash-6-tc-1",
        "description": "Verifies correct implementation for Human-Readable File Sizes: ls -lh",
        "testFn": "code.includes('ls -lh') || code.includes('ls -l')"
      }
    ]
  },
  {
    "id": "bash-7-navigating-directories-with-cd-.",
    "title": "7. Navigating Directories with cd (., .., ~, -)",
    "slug": "lesson-7-navigating-directories-with-cd-.",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Navigating Directories with cd (., .., ~, -) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Navigating Directories with cd (., .., ~, -)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Walking down a hallway: `..` steps out into the hallway, `.` is where you stand, `~` is your home bedroom.",
    "explanationMarkdown": "### Navigating Directories with cd (., .., ~, -)\n\n`cd` (Change Directory) moves your shell context: `cd ..` goes up one level; `cd -` returns to previous directory.\n\n```bash\ncd ~\n```",
    "workedExample": {
      "title": "Worked Example: Navigating Directories with cd (., .., ~, -)",
      "code": "cd ~",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Navigating Directories with cd (., .., ~, -).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Navigating Directories with cd (., .., ~, -).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Navigate to home directory\n# TODO: Write command below\n",
    "solutionCode": "cd ~",
    "hints": [
      "Write:\ncd ~"
    ],
    "testCases": [
      {
        "id": "bash-7-tc-1",
        "description": "Verifies correct implementation for Navigating Directories with cd (., .., ~, -)",
        "testFn": "code.includes('cd ~') || code.includes('cd')"
      }
    ]
  },
  {
    "id": "bash-8-creating-blank-files-with-touch",
    "title": "8. Creating Blank Files with touch",
    "slug": "lesson-8-creating-blank-files-with-touch",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Creating Blank Files with touch in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Creating Blank Files with touch",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Pulling a fresh, clean blank sheet of paper from the printer tray.",
    "explanationMarkdown": "### Creating Blank Files with touch\n\n`touch <filename>` creates a new empty file, or updates the last modified timestamp if it already exists.\n\n```bash\ntouch index.ts\n```",
    "workedExample": {
      "title": "Worked Example: Creating Blank Files with touch",
      "code": "touch index.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Blank Files with touch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Blank Files with touch.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create a new empty file\n# TODO: Write command below\n",
    "solutionCode": "touch index.ts",
    "hints": [
      "Write:\ntouch index.ts"
    ],
    "testCases": [
      {
        "id": "bash-8-tc-1",
        "description": "Verifies correct implementation for Creating Blank Files with touch",
        "testFn": "code.includes('touch')"
      }
    ]
  },
  {
    "id": "bash-9-creating-directories-with-mkdir-",
    "title": "9. Creating Directories with mkdir -p",
    "slug": "lesson-9-creating-directories-with-mkdir-",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Creating Directories with mkdir -p in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Creating Directories with mkdir -p",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Building a filing cabinet, complete with all nested sub-folders, in a single carpentry step.",
    "explanationMarkdown": "### Creating Directories with mkdir -p\n\n`-p` (parents) creates any missing intermediate directories in the specified path without throwing errors.\n\n```bash\nmkdir -p src/controllers/auth\n```",
    "workedExample": {
      "title": "Worked Example: Creating Directories with mkdir -p",
      "code": "mkdir -p src/controllers/auth",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Directories with mkdir -p.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Directories with mkdir -p.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create nested folder structure\n# TODO: Write command below\n",
    "solutionCode": "mkdir -p src/controllers/auth",
    "hints": [
      "Write:\nmkdir -p src/controllers/auth"
    ],
    "testCases": [
      {
        "id": "bash-9-tc-1",
        "description": "Verifies correct implementation for Creating Directories with mkdir -p",
        "testFn": "code.includes('mkdir -p')"
      }
    ]
  },
  {
    "id": "bash-10-copying-files-with-cp-and-direct",
    "title": "10. Copying Files with cp and Directories with cp -r",
    "slug": "lesson-10-copying-files-with-cp-and-direct",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Copying Files with cp and Directories with cp -r in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Copying Files with cp and Directories with cp -r",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Photocopying an entire folder of blueprints so you have a working copy on your desk.",
    "explanationMarkdown": "### Copying Files with cp and Directories with cp -r\n\n`cp` copies files; the recursive flag `-r` copies entire directory trees and their contents.\n\n```bash\ncp -r src/ src_backup/\n```",
    "workedExample": {
      "title": "Worked Example: Copying Files with cp and Directories with cp -r",
      "code": "cp -r src/ src_backup/",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Copying Files with cp and Directories with cp -r.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Copying Files with cp and Directories with cp -r.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Recursively copy directory\n# TODO: Write command below\n",
    "solutionCode": "cp -r src/ src_backup/",
    "hints": [
      "Write:\ncp -r src/ src_backup/"
    ],
    "testCases": [
      {
        "id": "bash-10-tc-1",
        "description": "Verifies correct implementation for Copying Files with cp and Directories with cp -r",
        "testFn": "code.includes('cp -r') || code.includes('cp ')"
      }
    ]
  },
  {
    "id": "bash-11-moving-and-renaming-files-with-m",
    "title": "11. Moving and Renaming Files with mv",
    "slug": "lesson-11-moving-and-renaming-files-with-m",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Moving and Renaming Files with mv in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Moving and Renaming Files with mv",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Picking up a folder and moving it to a new drawer, or crossing out the label and writing a new title.",
    "explanationMarkdown": "### Moving and Renaming Files with mv\n\nIn Unix, moving a file and renaming a file are the identical operation (`mv <src> <dest>`).\n\n```bash\nmv old_name.txt new_name.txt\n```",
    "workedExample": {
      "title": "Worked Example: Moving and Renaming Files with mv",
      "code": "mv old_name.txt new_name.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Moving and Renaming Files with mv.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Moving and Renaming Files with mv.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Rename file\n# TODO: Write command below\n",
    "solutionCode": "mv old_name.txt new_name.txt",
    "hints": [
      "Write:\nmv old_name.txt new_name.txt"
    ],
    "testCases": [
      {
        "id": "bash-11-tc-1",
        "description": "Verifies correct implementation for Moving and Renaming Files with mv",
        "testFn": "code.includes('mv ')"
      }
    ]
  },
  {
    "id": "bash-12-removing-files-and-folders-rm--r",
    "title": "12. Removing Files and Folders: rm -rf Caution!",
    "slug": "lesson-12-removing-files-and-folders-rm--r",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Removing Files and Folders: rm -rf Caution! in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Removing Files and Folders",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An industrial incinerator that instantly vaporizes whatever documents you drop into the chute.",
    "explanationMarkdown": "### Removing Files and Folders: rm -rf Caution!\n\n`-r` is recursive; `-f` ignores non-existent files and never prompts. Extreme caution: no trash can exists in CLI!\n\n```bash\nrm -rf /tmp/scratch\n```",
    "workedExample": {
      "title": "Worked Example: Removing Files and Folders: rm -rf Caution!",
      "code": "rm -rf /tmp/scratch",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing Files and Folders: rm -rf Caution!.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing Files and Folders: rm -rf Caution!.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Remove temporary directory recursively\n# TODO: Write command below\n",
    "solutionCode": "rm -rf /tmp/scratch",
    "hints": [
      "Write:\nrm -rf /tmp/scratch"
    ],
    "testCases": [
      {
        "id": "bash-12-tc-1",
        "description": "Verifies correct implementation for Removing Files and Folders: rm -rf Caution!",
        "testFn": "code.includes('rm -rf') || code.includes('rm ')"
      }
    ]
  },
  {
    "id": "bash-13-displaying-file-contents-with-ca",
    "title": "13. Displaying File Contents with cat",
    "slug": "lesson-13-displaying-file-contents-with-ca",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Displaying File Contents with cat in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Displaying File Contents with cat",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Opening an entire letter flat on the table so you can read every sentence from top to bottom.",
    "explanationMarkdown": "### Displaying File Contents with cat\n\n`cat` (concatenate) prints the full contents of one or more files directly to the terminal stdout.\n\n```bash\ncat /etc/os-release\n```",
    "workedExample": {
      "title": "Worked Example: Displaying File Contents with cat",
      "code": "cat /etc/os-release",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Displaying File Contents with cat.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Displaying File Contents with cat.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Concatenate and print file to screen\n# TODO: Write command below\n",
    "solutionCode": "cat /etc/os-release",
    "hints": [
      "Write:\ncat /etc/os-release"
    ],
    "testCases": [
      {
        "id": "bash-13-tc-1",
        "description": "Verifies correct implementation for Displaying File Contents with cat",
        "testFn": "code.includes('cat ')"
      }
    ]
  },
  {
    "id": "bash-14-viewing-large-files-with-less",
    "title": "14. Viewing Large Files with less",
    "slug": "lesson-14-viewing-large-files-with-less",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Viewing Large Files with less in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Viewing Large Files with less",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reading a book through a magnifying pane where you can turn pages forward and backward freely.",
    "explanationMarkdown": "### Viewing Large Files with less\n\n`less` allows forward and backward pagination through massive files without loading the whole file into RAM.\n\n```bash\nless /var/log/system.log\n```",
    "workedExample": {
      "title": "Worked Example: Viewing Large Files with less",
      "code": "less /var/log/system.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing Large Files with less.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing Large Files with less.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View file with paginated scrolling\n# TODO: Write command below\n",
    "solutionCode": "less /var/log/system.log",
    "hints": [
      "Write:\nless /var/log/system.log"
    ],
    "testCases": [
      {
        "id": "bash-14-tc-1",
        "description": "Verifies correct implementation for Viewing Large Files with less",
        "testFn": "code.includes('less ')"
      }
    ]
  },
  {
    "id": "bash-15-peeking-at-extremes-head-and-tai",
    "title": "15. Peeking at Extremes: head and tail -f",
    "slug": "lesson-15-peeking-at-extremes-head-and-tai",
    "language": "bash",
    "category": "Module 1: Terminal Navigation & File Inspection",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Peeking at Extremes: head and tail -f in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Peeking at Extremes",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Watching a live teleprompter display the newest incoming news ticker sentences at the bottom of the screen.",
    "explanationMarkdown": "### Peeking at Extremes: head and tail -f\n\n`head -n 10` prints the first 10 lines; `tail -f` streams newly appended lines to the terminal in real time.\n\n```bash\ntail -f /var/log/app.log\n```",
    "workedExample": {
      "title": "Worked Example: Peeking at Extremes: head and tail -f",
      "code": "tail -f /var/log/app.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Peeking at Extremes: head and tail -f.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Peeking at Extremes: head and tail -f.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Follow live incoming log entries\n# TODO: Write command below\n",
    "solutionCode": "tail -f /var/log/app.log",
    "hints": [
      "Write:\ntail -f /var/log/app.log"
    ],
    "testCases": [
      {
        "id": "bash-15-tc-1",
        "description": "Verifies correct implementation for Peeking at Extremes: head and tail -f",
        "testFn": "code.includes('tail -f') || code.includes('head ')"
      }
    ]
  },
  {
    "id": "bash-16-the-linux-multi-user-security-mo",
    "title": "16. The Linux Multi-User Security Model",
    "slug": "lesson-16-the-linux-multi-user-security-mo",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Linux Multi-User Security Model in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Linux Multi-User Security Model",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A shared company computer where every employee logs in with their own restricted private account.",
    "explanationMarkdown": "### The Linux Multi-User Security Model\n\nEvery process and file in Linux belongs to a specific User (u) and Group (g) with explicit permissions.\n\n```bash\nwhoami\n```",
    "workedExample": {
      "title": "Worked Example: The Linux Multi-User Security Model",
      "code": "whoami",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Linux Multi-User Security Model.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Linux Multi-User Security Model.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Print current active user identity\n# TODO: Write command below\n",
    "solutionCode": "whoami",
    "hints": [
      "Write:\nwhoami"
    ],
    "testCases": [
      {
        "id": "bash-16-tc-1",
        "description": "Verifies correct implementation for The Linux Multi-User Security Model",
        "testFn": "code.includes('whoami')"
      }
    ]
  },
  {
    "id": "bash-17-deciphering-permission-strings--",
    "title": "17. Deciphering Permission Strings (-rwxr-xr--)",
    "slug": "lesson-17-deciphering-permission-strings--",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Deciphering Permission Strings (-rwxr-xr--) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Deciphering Permission Strings (-rwxr-xr--)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reading an access badge: 3 digits for Owner, 3 for Group members, and 3 for the General Public.",
    "explanationMarkdown": "### Deciphering Permission Strings (-rwxr-xr--)\n\nThe 10-character string indicates file type (`-` file, `d` directory) followed by rwx for user, group, and others.\n\n```bash\nls -l app.sh\n```",
    "workedExample": {
      "title": "Worked Example: Deciphering Permission Strings (-rwxr-xr--)",
      "code": "ls -l app.sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deciphering Permission Strings (-rwxr-xr--).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deciphering Permission Strings (-rwxr-xr--).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect file permissions\n# TODO: Write command below\n",
    "solutionCode": "ls -l app.sh",
    "hints": [
      "Write:\nls -l app.sh"
    ],
    "testCases": [
      {
        "id": "bash-17-tc-1",
        "description": "Verifies correct implementation for Deciphering Permission Strings (-rwxr-xr--)",
        "testFn": "code.includes('ls -l')"
      }
    ]
  },
  {
    "id": "bash-18-numeric-octal-permissions-4-2-1-",
    "title": "18. Numeric Octal Permissions (4-2-1 Rule)",
    "slug": "lesson-18-numeric-octal-permissions-4-2-1-",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Numeric Octal Permissions (4-2-1 Rule) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Numeric Octal Permissions (4-2-1 Rule)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Binary math: Read=4, Write=2, Execute=1. Total sum = 7 (rwx), 5 (r-x), 4 (r--).",
    "explanationMarkdown": "### Numeric Octal Permissions (4-2-1 Rule)\n\nOctal values represent permissions concisely: 755 (executable script), 644 (standard file), 400 (secret key).\n\n```bash\nchmod 755 app.sh\n```",
    "workedExample": {
      "title": "Worked Example: Numeric Octal Permissions (4-2-1 Rule)",
      "code": "chmod 755 app.sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Numeric Octal Permissions (4-2-1 Rule).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Numeric Octal Permissions (4-2-1 Rule).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Set rwxr-xr-x permissions (755)\n# TODO: Write command below\n",
    "solutionCode": "chmod 755 app.sh",
    "hints": [
      "Write:\nchmod 755 app.sh"
    ],
    "testCases": [
      {
        "id": "bash-18-tc-1",
        "description": "Verifies correct implementation for Numeric Octal Permissions (4-2-1 Rule)",
        "testFn": "code.includes('chmod 755')"
      }
    ]
  },
  {
    "id": "bash-19-symbolic-permissions-modificatio",
    "title": "19. Symbolic Permissions Modification (chmod +/-)",
    "slug": "lesson-19-symbolic-permissions-modificatio",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Symbolic Permissions Modification (chmod +/-) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Symbolic Permissions Modification (chmod +/-)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Stamping an official 'Approved to Drive' sticker onto a vehicle license plate.",
    "explanationMarkdown": "### Symbolic Permissions Modification (chmod +/-)\n\n`chmod +x <file>` adds execute permissions; `chmod u-w` removes write permissions for owner.\n\n```bash\nchmod +x deploy.sh\n```",
    "workedExample": {
      "title": "Worked Example: Symbolic Permissions Modification (chmod +/-)",
      "code": "chmod +x deploy.sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Symbolic Permissions Modification (chmod +/-).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Symbolic Permissions Modification (chmod +/-).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Make script executable for all users\n# TODO: Write command below\n",
    "solutionCode": "chmod +x deploy.sh",
    "hints": [
      "Write:\nchmod +x deploy.sh"
    ],
    "testCases": [
      {
        "id": "bash-19-tc-1",
        "description": "Verifies correct implementation for Symbolic Permissions Modification (chmod +/-)",
        "testFn": "code.includes('chmod +x')"
      }
    ]
  },
  {
    "id": "bash-20-changing-file-owners-with-chown",
    "title": "20. Changing File Owners with chown",
    "slug": "lesson-20-changing-file-owners-with-chown",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Changing File Owners with chown in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Changing File Owners with chown",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Signing over the legal deed of a house to a new homeowner at city hall.",
    "explanationMarkdown": "### Changing File Owners with chown\n\n`chown <user>:<group> <file>` transfers ownership of files and directories (requires root privileges).\n\n```bash\nchown deployer:appgroup server.js\n```",
    "workedExample": {
      "title": "Worked Example: Changing File Owners with chown",
      "code": "chown deployer:appgroup server.js",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Changing File Owners with chown.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Changing File Owners with chown.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Change file owner to deployer user\n# TODO: Write command below\n",
    "solutionCode": "chown deployer:appgroup server.js",
    "hints": [
      "Write:\nchown deployer:appgroup server.js"
    ],
    "testCases": [
      {
        "id": "bash-20-tc-1",
        "description": "Verifies correct implementation for Changing File Owners with chown",
        "testFn": "code.includes('chown ')"
      }
    ]
  },
  {
    "id": "bash-21-changing-group-ownership-with-ch",
    "title": "21. Changing Group Ownership with chgrp",
    "slug": "lesson-21-changing-group-ownership-with-ch",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Changing Group Ownership with chgrp in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Changing Group Ownership with chgrp",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Assigning a shared project binder to the engineering team's study room shelf.",
    "explanationMarkdown": "### Changing Group Ownership with chgrp\n\n`chgrp <group> <file>` reassigns the group ownership of files.\n\n```bash\nchgrp developers config.json\n```",
    "workedExample": {
      "title": "Worked Example: Changing Group Ownership with chgrp",
      "code": "chgrp developers config.json",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Changing Group Ownership with chgrp.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Changing Group Ownership with chgrp.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Change group ownership\n# TODO: Write command below\n",
    "solutionCode": "chgrp developers config.json",
    "hints": [
      "Write:\nchgrp developers config.json"
    ],
    "testCases": [
      {
        "id": "bash-21-tc-1",
        "description": "Verifies correct implementation for Changing Group Ownership with chgrp",
        "testFn": "code.includes('chgrp ')"
      }
    ]
  },
  {
    "id": "bash-22-understanding-the-default-umask",
    "title": "22. Understanding the Default umask",
    "slug": "lesson-22-understanding-the-default-umask",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Understanding the Default umask in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Understanding the Default umask",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A cookie cutter template: subtracting forbidden permissions from every newly created file by default.",
    "explanationMarkdown": "### Understanding the Default umask\n\nThe `umask` (e.g. `022`) specifies the permissions that are automatically stripped from newly created files.\n\n```bash\numask\n```",
    "workedExample": {
      "title": "Worked Example: Understanding the Default umask",
      "code": "umask",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding the Default umask.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding the Default umask.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View current umask value\n# TODO: Write command below\n",
    "solutionCode": "umask",
    "hints": [
      "Write:\numask"
    ],
    "testCases": [
      {
        "id": "bash-22-tc-1",
        "description": "Verifies correct implementation for Understanding the Default umask",
        "testFn": "code.includes('umask')"
      }
    ]
  },
  {
    "id": "bash-23-special-permission-suid-set-user",
    "title": "23. Special Permission: SUID (Set User ID - 4xxx)",
    "slug": "lesson-23-special-permission-suid-set-user",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Special Permission: SUID (Set User ID - 4xxx) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Special Permission",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A guest using a locked company elevator because the elevator key is programmed with the manager's clearance.",
    "explanationMarkdown": "### Special Permission: SUID (Set User ID - 4xxx)\n\nSUID allows executable binaries to run with the privileges of the file owner (e.g. root for `passwd`).\n\n```bash\nls -l /usr/bin/passwd\n```",
    "workedExample": {
      "title": "Worked Example: Special Permission: SUID (Set User ID - 4xxx)",
      "code": "ls -l /usr/bin/passwd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Special Permission: SUID (Set User ID - 4xxx).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Special Permission: SUID (Set User ID - 4xxx).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View passwd binary SUID permission\n# TODO: Write command below\n",
    "solutionCode": "ls -l /usr/bin/passwd",
    "hints": [
      "Write:\nls -l /usr/bin/passwd"
    ],
    "testCases": [
      {
        "id": "bash-23-tc-1",
        "description": "Verifies correct implementation for Special Permission: SUID (Set User ID - 4xxx)",
        "testFn": "code.includes('/usr/bin/passwd') || code.includes('ls -l')"
      }
    ]
  },
  {
    "id": "bash-24-special-permission-sgid-set-grou",
    "title": "24. Special Permission: SGID (Set Group ID - 2xxx)",
    "slug": "lesson-24-special-permission-sgid-set-grou",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Special Permission: SGID (Set Group ID - 2xxx) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Special Permission",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A communal filing cabinet where any document dropped inside automatically inherits the team's group tag.",
    "explanationMarkdown": "### Special Permission: SGID (Set Group ID - 2xxx)\n\nFiles created inside an SGID directory automatically inherit the group of the directory, not the creator!\n\n```bash\nchmod 2775 /var/shared\n```",
    "workedExample": {
      "title": "Worked Example: Special Permission: SGID (Set Group ID - 2xxx)",
      "code": "chmod 2775 /var/shared",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Special Permission: SGID (Set Group ID - 2xxx).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Special Permission: SGID (Set Group ID - 2xxx).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Configure SGID on shared team directory\n# TODO: Write command below\n",
    "solutionCode": "chmod 2775 /var/shared",
    "hints": [
      "Write:\nchmod 2775 /var/shared"
    ],
    "testCases": [
      {
        "id": "bash-24-tc-1",
        "description": "Verifies correct implementation for Special Permission: SGID (Set Group ID - 2xxx)",
        "testFn": "code.includes('chmod 2775') || code.includes('chmod g+s')"
      }
    ]
  },
  {
    "id": "bash-25-special-permission-sticky-bit-1x",
    "title": "25. Special Permission: Sticky Bit (1xxx /tmp)",
    "slug": "lesson-25-special-permission-sticky-bit-1x",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Special Permission: Sticky Bit (1xxx /tmp) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Special Permission",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A public bulletin board where anyone can pin a notice, but only the original author can tear it down.",
    "explanationMarkdown": "### Special Permission: Sticky Bit (1xxx /tmp)\n\nThe sticky bit (`+t` or `1777`) ensures that only the file owner or root can delete files in public directories like `/tmp`.\n\n```bash\nls -ld /tmp\n```",
    "workedExample": {
      "title": "Worked Example: Special Permission: Sticky Bit (1xxx /tmp)",
      "code": "ls -ld /tmp",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Special Permission: Sticky Bit (1xxx /tmp).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Special Permission: Sticky Bit (1xxx /tmp).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View sticky bit on /tmp directory\n# TODO: Write command below\n",
    "solutionCode": "ls -ld /tmp",
    "hints": [
      "Write:\nls -ld /tmp"
    ],
    "testCases": [
      {
        "id": "bash-25-tc-1",
        "description": "Verifies correct implementation for Special Permission: Sticky Bit (1xxx /tmp)",
        "testFn": "code.includes('ls -ld /tmp') || code.includes('ls -ld')"
      }
    ]
  },
  {
    "id": "bash-26-superuser-privileges-with-sudo",
    "title": "26. Superuser Privileges with sudo",
    "slug": "lesson-26-superuser-privileges-with-sudo",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Superuser Privileges with sudo in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Superuser Privileges with sudo",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A bank teller calling the bank branch manager to sign off on a \\$1,000,000 wire transfer.",
    "explanationMarkdown": "### Superuser Privileges with sudo\n\n`sudo` (SuperUser DO) executes commands with the security privileges of the superuser (root).\n\n```bash\nsudo systemctl restart nginx\n```",
    "workedExample": {
      "title": "Worked Example: Superuser Privileges with sudo",
      "code": "sudo systemctl restart nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Superuser Privileges with sudo.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Superuser Privileges with sudo.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run privileged command with sudo\n# TODO: Write command below\n",
    "solutionCode": "sudo systemctl restart nginx",
    "hints": [
      "Write:\nsudo systemctl restart nginx"
    ],
    "testCases": [
      {
        "id": "bash-26-tc-1",
        "description": "Verifies correct implementation for Superuser Privileges with sudo",
        "testFn": "code.includes('sudo ')"
      }
    ]
  },
  {
    "id": "bash-27-switching-users-with-su",
    "title": "27. Switching Users with su",
    "slug": "lesson-27-switching-users-with-su",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Switching Users with su in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Switching Users with su",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Logging out of your personal laptop account and logging into the test engineering account.",
    "explanationMarkdown": "### Switching Users with su\n\n`su - <user>` switches the active shell session to another user account, loading their environment.\n\n```bash\nsu - deployer\n```",
    "workedExample": {
      "title": "Worked Example: Switching Users with su",
      "code": "su - deployer",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Switching Users with su.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Switching Users with su.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Switch to deploy user\n# TODO: Write command below\n",
    "solutionCode": "su - deployer",
    "hints": [
      "Write:\nsu - deployer"
    ],
    "testCases": [
      {
        "id": "bash-27-tc-1",
        "description": "Verifies correct implementation for Switching Users with su",
        "testFn": "code.includes('su -') || code.includes('su ')"
      }
    ]
  },
  {
    "id": "bash-28-the-sudoers-configuration-file-v",
    "title": "28. The sudoers Configuration File (visudo)",
    "slug": "lesson-28-the-sudoers-configuration-file-v",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The sudoers Configuration File (visudo) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The sudoers Configuration File (visudo)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "The master rulebook locked in the administrative safe dictating who has clearance to sign checks.",
    "explanationMarkdown": "### The sudoers Configuration File (visudo)\n\nNever edit `/etc/sudoers` directly with a normal editor; always use `visudo` to prevent locking yourself out with syntax errors!\n\n```bash\nsudo cat /etc/sudoers\n```",
    "workedExample": {
      "title": "Worked Example: The sudoers Configuration File (visudo)",
      "code": "sudo cat /etc/sudoers",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The sudoers Configuration File (visudo).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The sudoers Configuration File (visudo).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Safely inspect sudoers configuration\n# TODO: Write command below\n",
    "solutionCode": "sudo cat /etc/sudoers",
    "hints": [
      "Write:\nsudo cat /etc/sudoers"
    ],
    "testCases": [
      {
        "id": "bash-28-tc-1",
        "description": "Verifies correct implementation for The sudoers Configuration File (visudo)",
        "testFn": "code.includes('/etc/sudoers')"
      }
    ]
  },
  {
    "id": "bash-29-immutable-files-with-chattr-and-",
    "title": "29. Immutable Files with chattr and lsattr",
    "slug": "lesson-29-immutable-files-with-chattr-and-",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Immutable Files with chattr and lsattr in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Immutable Files with chattr and lsattr",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Encasing a signed treaty in bulletproof glass: even the president cannot edit it without removing the lock.",
    "explanationMarkdown": "### Immutable Files with chattr and lsattr\n\n`chattr +i <file>` makes a file immutable: even root cannot delete, rename, or write to it until `-i` is removed!\n\n```bash\nlsattr config.json\n```",
    "workedExample": {
      "title": "Worked Example: Immutable Files with chattr and lsattr",
      "code": "lsattr config.json",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Immutable Files with chattr and lsattr.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Immutable Files with chattr and lsattr.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect extended file attributes\n# TODO: Write command below\n",
    "solutionCode": "lsattr config.json",
    "hints": [
      "Write:\nlsattr config.json"
    ],
    "testCases": [
      {
        "id": "bash-29-tc-1",
        "description": "Verifies correct implementation for Immutable Files with chattr and lsattr",
        "testFn": "code.includes('lsattr')"
      }
    ]
  },
  {
    "id": "bash-30-module-2-review-security-&-acces",
    "title": "30. Module 2 Review: Security & Access Control",
    "slug": "lesson-30-module-2-review-security-&-acces",
    "language": "bash",
    "category": "Module 2: File Permissions & Ownership",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 2 Review: Security & Access Control in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Module 2 Review",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A master locksmith inspecting the bolts, padlocks, and keycard scanners on all facility doors.",
    "explanationMarkdown": "### Module 2 Review: Security & Access Control\n\nMastery over multi-user access rules, octal chmod math, ownership transfers, SUID/SGID, and sudo security.\n\n```bash\nls -la\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Security & Access Control",
      "code": "ls -la",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 2 Review: Security & Access Control.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 2 Review: Security & Access Control.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Audit directory permissions\n# TODO: Write command below\n",
    "solutionCode": "ls -la",
    "hints": [
      "Write:\nls -la"
    ],
    "testCases": [
      {
        "id": "bash-30-tc-1",
        "description": "Verifies correct implementation for Module 2 Review: Security & Access Control",
        "testFn": "code.includes('ls -la')"
      }
    ]
  },
  {
    "id": "bash-31-the-three-standard-streams-stdin",
    "title": "31. The Three Standard Streams: stdin (0), stdout (1), stderr (2)",
    "slug": "lesson-31-the-three-standard-streams-stdin",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Three Standard Streams: stdin (0), stdout (1), stderr (2) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Three Standard Streams",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A factory workstation with an in-box for raw materials (stdin), out-box for finished goods (stdout), and red bin for rejects (stderr).",
    "explanationMarkdown": "### The Three Standard Streams: stdin (0), stdout (1), stderr (2)\n\nStandard input (0) receives data; standard output (1) outputs results; standard error (2) outputs diagnostics.\n\n```bash\nls -l /dev/fd\n```",
    "workedExample": {
      "title": "Worked Example: The Three Standard Streams: stdin (0), stdout (1), stderr (2)",
      "code": "ls -l /dev/fd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Three Standard Streams: stdin (0), stdout (1), stderr (2).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Three Standard Streams: stdin (0), stdout (1), stderr (2).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Confirm standard file descriptors\n# TODO: Write command below\n",
    "solutionCode": "ls -l /dev/fd",
    "hints": [
      "Write:\nls -l /dev/fd"
    ],
    "testCases": [
      {
        "id": "bash-31-tc-1",
        "description": "Verifies correct implementation for The Three Standard Streams: stdin (0), stdout (1), stderr (2)",
        "testFn": "code.includes('/dev/fd') || code.includes('stdout')"
      }
    ]
  },
  {
    "id": "bash-32-redirecting-stdout-to-file--over",
    "title": "32. Redirecting stdout to File (> Overwrite)",
    "slug": "lesson-32-redirecting-stdout-to-file--over",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Redirecting stdout to File (> Overwrite) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Redirecting stdout to File (> Overwrite)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Wiping a whiteboard clean and writing a brand-new list of inventory numbers on it.",
    "explanationMarkdown": "### Redirecting stdout to File (> Overwrite)\n\n`>` redirects standard output to a file, completely overwriting any existing contents.\n\n```bash\nls -l > inventory.txt\n```",
    "workedExample": {
      "title": "Worked Example: Redirecting stdout to File (> Overwrite)",
      "code": "ls -l > inventory.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Redirecting stdout to File (> Overwrite).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Redirecting stdout to File (> Overwrite).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Save directory listing to file\n# TODO: Write command below\n",
    "solutionCode": "ls -l > inventory.txt",
    "hints": [
      "Write:\nls -l > inventory.txt"
    ],
    "testCases": [
      {
        "id": "bash-32-tc-1",
        "description": "Verifies correct implementation for Redirecting stdout to File (> Overwrite)",
        "testFn": "code.includes('> ')"
      }
    ]
  },
  {
    "id": "bash-33-appending-stdout-to-file--append",
    "title": "33. Appending stdout to File (>> Append)",
    "slug": "lesson-33-appending-stdout-to-file--append",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Appending stdout to File (>> Append) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Appending stdout to File (>> Append)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Adding a new line at the bottom of a paper notepad without erasing earlier notes.",
    "explanationMarkdown": "### Appending stdout to File (>> Append)\n\n`>>` redirects standard output to a file, preserving existing data and appending new text to the end.\n\n```bash\necho \"Server rebooted\" >> uptime.log\n```",
    "workedExample": {
      "title": "Worked Example: Appending stdout to File (>> Append)",
      "code": "echo \"Server rebooted\" >> uptime.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Appending stdout to File (>> Append).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Appending stdout to File (>> Append).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Append timestamped log entry\n# TODO: Write command below\n",
    "solutionCode": "echo \"Server rebooted\" >> uptime.log",
    "hints": [
      "Write:\necho \"Server rebooted\" >> uptime.log"
    ],
    "testCases": [
      {
        "id": "bash-33-tc-1",
        "description": "Verifies correct implementation for Appending stdout to File (>> Append)",
        "testFn": "code.includes('>> ')"
      }
    ]
  },
  {
    "id": "bash-34-redirecting-stderr-2",
    "title": "34. Redirecting stderr (2>)",
    "slug": "lesson-34-redirecting-stderr-2",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Redirecting stderr (2>) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Redirecting stderr (2>)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Directing defective manufacturing parts down a separate conveyor belt into the scrap inspection room.",
    "explanationMarkdown": "### Redirecting stderr (2>)\n\n`2>` redirects standard error exclusively, preventing error messages from cluttering clean output streams.\n\n```bash\nls /nonexistent 2> errors.log\n```",
    "workedExample": {
      "title": "Worked Example: Redirecting stderr (2>)",
      "code": "ls /nonexistent 2> errors.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Redirecting stderr (2>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Redirecting stderr (2>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Redirect error messages to errors.log\n# TODO: Write command below\n",
    "solutionCode": "ls /nonexistent 2> errors.log",
    "hints": [
      "Write:\nls /nonexistent 2> errors.log"
    ],
    "testCases": [
      {
        "id": "bash-34-tc-1",
        "description": "Verifies correct implementation for Redirecting stderr (2>)",
        "testFn": "code.includes('2> ')"
      }
    ]
  },
  {
    "id": "bash-35-combining-stdout-and-stderr-2&1-",
    "title": "35. Combining stdout and stderr (2>&1 and &>)",
    "slug": "lesson-35-combining-stdout-and-stderr-2&1-",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Combining stdout and stderr (2>&1 and &>) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Combining stdout and stderr (2>&1 and &>)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Recording both the teacher's lecture and student questions onto the exact same tape recording.",
    "explanationMarkdown": "### Combining stdout and stderr (2>&1 and &>)\n\n`&> file` (or `> file 2>&1`) merges standard output and standard error into a single combined file.\n\n```bash\n./build.sh &> build.log\n```",
    "workedExample": {
      "title": "Worked Example: Combining stdout and stderr (2>&1 and &>)",
      "code": "./build.sh &> build.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combining stdout and stderr (2>&1 and &>).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combining stdout and stderr (2>&1 and &>).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Redirect both normal output and errors into one file\n# TODO: Write command below\n",
    "solutionCode": "./build.sh &> build.log",
    "hints": [
      "Write:\n./build.sh &> build.log"
    ],
    "testCases": [
      {
        "id": "bash-35-tc-1",
        "description": "Verifies correct implementation for Combining stdout and stderr (2>&1 and &>)",
        "testFn": "code.includes('&> ') || code.includes('2>&1')"
      }
    ]
  },
  {
    "id": "bash-36-discarding-output-with--dev-null",
    "title": "36. Discarding Output with /dev/null",
    "slug": "lesson-36-discarding-output-with--dev-null",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Discarding Output with /dev/null in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Discarding Output with /dev/null",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A black hole in outer space: anything thrown inside disappears forever with zero trace.",
    "explanationMarkdown": "### Discarding Output with /dev/null\n\n`/dev/null` is the Unix black hole device: any data written to it is permanently discarded.\n\n```bash\nls /secret 2> /dev/null\n```",
    "workedExample": {
      "title": "Worked Example: Discarding Output with /dev/null",
      "code": "ls /secret 2> /dev/null",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Discarding Output with /dev/null.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Discarding Output with /dev/null.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Silently discard error output\n# TODO: Write command below\n",
    "solutionCode": "ls /secret 2> /dev/null",
    "hints": [
      "Write:\nls /secret 2> /dev/null"
    ],
    "testCases": [
      {
        "id": "bash-36-tc-1",
        "description": "Verifies correct implementation for Discarding Output with /dev/null",
        "testFn": "code.includes('/dev/null')"
      }
    ]
  },
  {
    "id": "bash-37-redirecting-stdin-from-file-",
    "title": "37. Redirecting stdin from File (<)",
    "slug": "lesson-37-redirecting-stdin-from-file-",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Redirecting stdin from File (<) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Redirecting stdin from File (<)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Loading a roll of pre-punched player piano sheet music into a player piano.",
    "explanationMarkdown": "### Redirecting stdin from File (<)\n\n`<` redirects the contents of a file directly into a command's standard input.\n\n```bash\nwc -l < data.csv\n```",
    "workedExample": {
      "title": "Worked Example: Redirecting stdin from File (<)",
      "code": "wc -l < data.csv",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Redirecting stdin from File (<).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Redirecting stdin from File (<).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Read input from file\n# TODO: Write command below\n",
    "solutionCode": "wc -l < data.csv",
    "hints": [
      "Write:\nwc -l < data.csv"
    ],
    "testCases": [
      {
        "id": "bash-37-tc-1",
        "description": "Verifies correct implementation for Redirecting stdin from File (<)",
        "testFn": "code.includes('< ')"
      }
    ]
  },
  {
    "id": "bash-38-here-documents-eof",
    "title": "38. Here-Documents (<<EOF)",
    "slug": "lesson-38-here-documents-eof",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Here-Documents (<<EOF) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Here-Documents (<<EOF)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Dictating an entire paragraph letter to an assistant until you speak the secret word: 'FINISH'.",
    "explanationMarkdown": "### Here-Documents (<<EOF)\n\n`<<TOKEN` allows feeding multi-line text blocks directly to a command in a shell script until the matching delimiter token is reached.\n\n```bash\ncat <<EOF > config.env\nPORT=8080\nENV=production\nEOF\n```",
    "workedExample": {
      "title": "Worked Example: Here-Documents (<<EOF)",
      "code": "cat <<EOF > config.env\nPORT=8080\nENV=production\nEOF",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Here-Documents (<<EOF).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Here-Documents (<<EOF).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create multi-line configuration file\n# TODO: Write command below\n",
    "solutionCode": "cat <<EOF > config.env\nPORT=8080\nENV=production\nEOF",
    "hints": [
      "Write:\ncat <<EOF > config.env\nPORT=8080\nENV=production\nEOF"
    ],
    "testCases": [
      {
        "id": "bash-38-tc-1",
        "description": "Verifies correct implementation for Here-Documents (<<EOF)",
        "testFn": "code.includes('<<EOF') || code.includes('<<-EOF')"
      }
    ]
  },
  {
    "id": "bash-39-here-strings-",
    "title": "39. Here-Strings (<<<)",
    "slug": "lesson-39-here-strings-",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Here-Strings (<<<) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Here-Strings (<<<)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Whispering a single secret code word directly into the receiver's ear.",
    "explanationMarkdown": "### Here-Strings (<<<)\n\n`<<< \"string\"` passes a single string expression directly into a command's standard input.\n\n```bash\nbase64 -d <<< \"SGVsbG8=\"\n```",
    "workedExample": {
      "title": "Worked Example: Here-Strings (<<<)",
      "code": "base64 -d <<< \"SGVsbG8=\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Here-Strings (<<<).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Here-Strings (<<<).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Feed string directly to command stdin\n# TODO: Write command below\n",
    "solutionCode": "base64 -d <<< \"SGVsbG8=\"",
    "hints": [
      "Write:\nbase64 -d <<< \"SGVsbG8=\""
    ],
    "testCases": [
      {
        "id": "bash-39-tc-1",
        "description": "Verifies correct implementation for Here-Strings (<<<)",
        "testFn": "code.includes('<<<')"
      }
    ]
  },
  {
    "id": "bash-40-the-mighty-pipe-operator-|",
    "title": "40. The Mighty Pipe Operator (|)",
    "slug": "lesson-40-the-mighty-pipe-operator-|",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Mighty Pipe Operator (|) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Mighty Pipe Operator (|)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Connecting garden water hoses: the water coming out of Hose 1 flows straight into the nozzle of Hose 2.",
    "explanationMarkdown": "### The Mighty Pipe Operator (|)\n\nThe pipe `|` connects the standard output of the left command directly into the standard input of the right command!\n\n```bash\nls -l | grep \".ts\" | wc -l\n```",
    "workedExample": {
      "title": "Worked Example: The Mighty Pipe Operator (|)",
      "code": "ls -l | grep \".ts\" | wc -l",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Mighty Pipe Operator (|).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Mighty Pipe Operator (|).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Chain commands together\n# TODO: Write command below\n",
    "solutionCode": "ls -l | grep \".ts\" | wc -l",
    "hints": [
      "Write:\nls -l | grep \".ts\" | wc -l"
    ],
    "testCases": [
      {
        "id": "bash-40-tc-1",
        "description": "Verifies correct implementation for The Mighty Pipe Operator (|)",
        "testFn": "code.includes('|')"
      }
    ]
  },
  {
    "id": "bash-41-splitting-streams-with-tee",
    "title": "41. Splitting Streams with tee",
    "slug": "lesson-41-splitting-streams-with-tee",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Splitting Streams with tee in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Splitting Streams with tee",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A plumbing T-joint pipe splitting a water stream so it flows to both the kitchen sink and garden hose.",
    "explanationMarkdown": "### Splitting Streams with tee\n\n`tee` duplicates standard input to both standard output (screen) and one or more files (`-a` appends).\n\n```bash\necho \"Deployment complete\" | tee -a deploy.log\n```",
    "workedExample": {
      "title": "Worked Example: Splitting Streams with tee",
      "code": "echo \"Deployment complete\" | tee -a deploy.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Splitting Streams with tee.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Splitting Streams with tee.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Print to screen AND save to log file simultaneously\n# TODO: Write command below\n",
    "solutionCode": "echo \"Deployment complete\" | tee -a deploy.log",
    "hints": [
      "Write:\necho \"Deployment complete\" | tee -a deploy.log"
    ],
    "testCases": [
      {
        "id": "bash-41-tc-1",
        "description": "Verifies correct implementation for Splitting Streams with tee",
        "testFn": "code.includes('tee ')"
      }
    ]
  },
  {
    "id": "bash-42-converting-stdin-to-command-argu",
    "title": "42. Converting stdin to Command Arguments with xargs",
    "slug": "lesson-42-converting-stdin-to-command-argu",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Converting stdin to Command Arguments with xargs in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Converting stdin to Command Arguments with xargs",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An assistant picking up a list of student names and calling them one by one into the principal's office.",
    "explanationMarkdown": "### Converting stdin to Command Arguments with xargs\n\n`xargs` reads items from standard input and converts them into command-line arguments for another utility.\n\n```bash\nfind . -name \"*.tmp\" | xargs rm -f\n```",
    "workedExample": {
      "title": "Worked Example: Converting stdin to Command Arguments with xargs",
      "code": "find . -name \"*.tmp\" | xargs rm -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Converting stdin to Command Arguments with xargs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Converting stdin to Command Arguments with xargs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Delete all temporary files discovered by find\n# TODO: Write command below\n",
    "solutionCode": "find . -name \"*.tmp\" | xargs rm -f",
    "hints": [
      "Write:\nfind . -name \"*.tmp\" | xargs rm -f"
    ],
    "testCases": [
      {
        "id": "bash-42-tc-1",
        "description": "Verifies correct implementation for Converting stdin to Command Arguments with xargs",
        "testFn": "code.includes('xargs ')"
      }
    ]
  },
  {
    "id": "bash-43-handling-filenames-with-spaces-i",
    "title": "43. Handling Filenames with Spaces in xargs (-0 / -print0)",
    "slug": "lesson-43-handling-filenames-with-spaces-i",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Handling Filenames with Spaces in xargs (-0 / -print0) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Handling Filenames with Spaces in xargs (-0 / -print0)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Using physical plastic envelopes for each item so spaces between names never cause two items to blend together.",
    "explanationMarkdown": "### Handling Filenames with Spaces in xargs (-0 / -print0)\n\n`-print0` and `xargs -0` separate filenames with null bytes (`\\0`) preventing space-corruption bugs.\n\n```bash\nfind . -name \"*.log\" -print0 | xargs -0 rm\n```",
    "workedExample": {
      "title": "Worked Example: Handling Filenames with Spaces in xargs (-0 / -print0)",
      "code": "find . -name \"*.log\" -print0 | xargs -0 rm",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Filenames with Spaces in xargs (-0 / -print0).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Filenames with Spaces in xargs (-0 / -print0).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Safely process files containing spaces\n# TODO: Write command below\n",
    "solutionCode": "find . -name \"*.log\" -print0 | xargs -0 rm",
    "hints": [
      "Write:\nfind . -name \"*.log\" -print0 | xargs -0 rm"
    ],
    "testCases": [
      {
        "id": "bash-43-tc-1",
        "description": "Verifies correct implementation for Handling Filenames with Spaces in xargs (-0 / -print0)",
        "testFn": "code.includes('xargs -0')"
      }
    ]
  },
  {
    "id": "bash-44-process-substitution-command",
    "title": "44. Process Substitution (<(command))",
    "slug": "lesson-44-process-substitution-command",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Process Substitution (<(command)) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Process Substitution (<(command))",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Listening to two live radio stations simultaneously on two headphones to see if they are broadcasting the same song.",
    "explanationMarkdown": "### Process Substitution (<(command))\n\n`<(cmd)` runs a command and presents its output as a temporary file descriptor path, avoiding temporary files on disk!\n\n```bash\ndiff <(ls dirA) <(ls dirB)\n```",
    "workedExample": {
      "title": "Worked Example: Process Substitution (<(command))",
      "code": "diff <(ls dirA) <(ls dirB)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Process Substitution (<(command)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Process Substitution (<(command)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Compare outputs of two running commands directly\n# TODO: Write command below\n",
    "solutionCode": "diff <(ls dirA) <(ls dirB)",
    "hints": [
      "Write:\ndiff <(ls dirA) <(ls dirB)"
    ],
    "testCases": [
      {
        "id": "bash-44-tc-1",
        "description": "Verifies correct implementation for Process Substitution (<(command))",
        "testFn": "code.includes('<(')"
      }
    ]
  },
  {
    "id": "bash-45-module-3-review-pipeline-process",
    "title": "45. Module 3 Review: Pipeline Processing Capstone",
    "slug": "lesson-45-module-3-review-pipeline-process",
    "language": "bash",
    "category": "Module 3: Streams, Redirection & Pipes",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 3 Review: Pipeline Processing Capstone in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Module 3 Review",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A multi-stage water filtration and distillation pipeline delivering pure crystal-clear water.",
    "explanationMarkdown": "### Module 3 Review: Pipeline Processing Capstone\n\nA command of Unix streams, input/output redirections, tee splitters, xargs pipelines, and process substitution.\n\n```bash\ncat /var/log/syslog | grep \"ERROR\" | cut -d' ' -f5- | sort | uniq -c\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Pipeline Processing Capstone",
      "code": "cat /var/log/syslog | grep \"ERROR\" | cut -d' ' -f5- | sort | uniq -c",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 3 Review: Pipeline Processing Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 3 Review: Pipeline Processing Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Complex text transformation pipeline\n# TODO: Write command below\n",
    "solutionCode": "cat /var/log/syslog | grep \"ERROR\" | cut -d' ' -f5- | sort | uniq -c",
    "hints": [
      "Write:\ncat /var/log/syslog | grep \"ERROR\" | cut -d' ' -f5- | sort | uniq -c"
    ],
    "testCases": [
      {
        "id": "bash-45-tc-1",
        "description": "Verifies correct implementation for Module 3 Review: Pipeline Processing Capstone",
        "testFn": "code.includes('|') && code.includes('uniq')"
      }
    ]
  },
  {
    "id": "bash-46-word,-line,-and-byte-counting-wi",
    "title": "46. Word, Line, and Byte Counting with wc",
    "slug": "lesson-46-word,-line,-and-byte-counting-wi",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Word, Line, and Byte Counting with wc in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Word, Line, and Byte Counting with wc",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An automated clicker counting spectators as they pass through stadium turnstiles.",
    "explanationMarkdown": "### Word, Line, and Byte Counting with wc\n\n`wc` counts lines (`-l`), words (`-w`), and bytes/characters (`-c`) in files or stream inputs.\n\n```bash\nwc -l server.ts\n```",
    "workedExample": {
      "title": "Worked Example: Word, Line, and Byte Counting with wc",
      "code": "wc -l server.ts",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Word, Line, and Byte Counting with wc.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Word, Line, and Byte Counting with wc.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Count total lines in a file\n# TODO: Write command below\n",
    "solutionCode": "wc -l server.ts",
    "hints": [
      "Write:\nwc -l server.ts"
    ],
    "testCases": [
      {
        "id": "bash-46-tc-1",
        "description": "Verifies correct implementation for Word, Line, and Byte Counting with wc",
        "testFn": "code.includes('wc -l')"
      }
    ]
  },
  {
    "id": "bash-47-sorting-lines-with-sort--n,--r,-",
    "title": "47. Sorting Lines with sort (-n, -r, -k)",
    "slug": "lesson-47-sorting-lines-with-sort--n,--r,-",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Sorting Lines with sort (-n, -r, -k) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Sorting Lines with sort (-n, -r, -k)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Sorting playing cards by rank from Ace down to 2.",
    "explanationMarkdown": "### Sorting Lines with sort (-n, -r, -k)\n\n`sort` orders lines alphabetically; `-n` sorts numerically; `-r` reverses; `-k` specifies column index.\n\n```bash\nsort -n -r scores.txt\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Lines with sort (-n, -r, -k)",
      "code": "sort -n -r scores.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Lines with sort (-n, -r, -k).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Lines with sort (-n, -r, -k).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Sort numerically in reverse order\n# TODO: Write command below\n",
    "solutionCode": "sort -n -r scores.txt",
    "hints": [
      "Write:\nsort -n -r scores.txt"
    ],
    "testCases": [
      {
        "id": "bash-47-tc-1",
        "description": "Verifies correct implementation for Sorting Lines with sort (-n, -r, -k)",
        "testFn": "code.includes('sort -n') || code.includes('sort ')"
      }
    ]
  },
  {
    "id": "bash-48-filtering-duplicate-adjacent-lin",
    "title": "48. Filtering Duplicate Adjacent Lines with uniq (-c)",
    "slug": "lesson-48-filtering-duplicate-adjacent-lin",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Filtering Duplicate Adjacent Lines with uniq (-c) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Filtering Duplicate Adjacent Lines with uniq (-c)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A counter stamping a tally mark next to identical items stacked in a pile.",
    "explanationMarkdown": "### Filtering Duplicate Adjacent Lines with uniq (-c)\n\n`uniq` removes adjacent duplicate lines; `-c` prepends each line with its frequency count (requires sorted input).\n\n```bash\nsort access.log | uniq -c\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Duplicate Adjacent Lines with uniq (-c)",
      "code": "sort access.log | uniq -c",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Duplicate Adjacent Lines with uniq (-c).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Duplicate Adjacent Lines with uniq (-c).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Count unique occurrences of lines\n# TODO: Write command below\n",
    "solutionCode": "sort access.log | uniq -c",
    "hints": [
      "Write:\nsort access.log | uniq -c"
    ],
    "testCases": [
      {
        "id": "bash-48-tc-1",
        "description": "Verifies correct implementation for Filtering Duplicate Adjacent Lines with uniq (-c)",
        "testFn": "code.includes('uniq -c') || code.includes('uniq')"
      }
    ]
  },
  {
    "id": "bash-49-extracting-columns-with-cut--d,-",
    "title": "49. Extracting Columns with cut (-d, -f)",
    "slug": "lesson-49-extracting-columns-with-cut--d,-",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Extracting Columns with cut (-d, -f) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Extracting Columns with cut (-d, -f)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Using a pair of scissors to cut out Column 1 from a printed table.",
    "explanationMarkdown": "### Extracting Columns with cut (-d, -f)\n\n`cut -d<delimiter> -f<field_index>` extracts specific fields from delimited text files.\n\n```bash\ncut -d: -f1 /etc/passwd\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Columns with cut (-d, -f)",
      "code": "cut -d: -f1 /etc/passwd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Columns with cut (-d, -f).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Columns with cut (-d, -f).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Extract usernames from /etc/passwd\n# TODO: Write command below\n",
    "solutionCode": "cut -d: -f1 /etc/passwd",
    "hints": [
      "Write:\ncut -d: -f1 /etc/passwd"
    ],
    "testCases": [
      {
        "id": "bash-49-tc-1",
        "description": "Verifies correct implementation for Extracting Columns with cut (-d, -f)",
        "testFn": "code.includes('cut -d') || code.includes('cut -f')"
      }
    ]
  },
  {
    "id": "bash-50-translating-&-deleting-character",
    "title": "50. Translating & Deleting Characters with tr",
    "slug": "lesson-50-translating-&-deleting-character",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Translating & Deleting Characters with tr in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Translating & Deleting Characters with tr",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A substitution cipher replacing every letter 'a' with 'A' on a typewriter.",
    "explanationMarkdown": "### Translating & Deleting Characters with tr\n\n`tr` translates, squeezes (`-s`), or deletes (`-d`) characters from standard input.\n\n```bash\necho \"hello devforge\" | tr 'a-z' 'A-Z'\n```",
    "workedExample": {
      "title": "Worked Example: Translating & Deleting Characters with tr",
      "code": "echo \"hello devforge\" | tr 'a-z' 'A-Z'",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Translating & Deleting Characters with tr.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Translating & Deleting Characters with tr.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Convert text to uppercase\n# TODO: Write command below\n",
    "solutionCode": "echo \"hello devforge\" | tr 'a-z' 'A-Z'",
    "hints": [
      "Write:\necho \"hello devforge\" | tr 'a-z' 'A-Z'"
    ],
    "testCases": [
      {
        "id": "bash-50-tc-1",
        "description": "Verifies correct implementation for Translating & Deleting Characters with tr",
        "testFn": "code.includes('tr ')"
      }
    ]
  },
  {
    "id": "bash-51-pattern-searching-with-grep",
    "title": "51. Pattern Searching with grep",
    "slug": "lesson-51-pattern-searching-with-grep",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pattern Searching with grep in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Pattern Searching with grep",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A search dog sniffing through a room to find a specific target aroma.",
    "explanationMarkdown": "### Pattern Searching with grep\n\n`grep` (Global Regular Expression Print) searches text for matching regular expressions, printing matching lines.\n\n```bash\ngrep \"DATABASE_URL\" .env\n```",
    "workedExample": {
      "title": "Worked Example: Pattern Searching with grep",
      "code": "grep \"DATABASE_URL\" .env",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pattern Searching with grep.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pattern Searching with grep.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Search for keyword across files\n# TODO: Write command below\n",
    "solutionCode": "grep \"DATABASE_URL\" .env",
    "hints": [
      "Write:\ngrep \"DATABASE_URL\" .env"
    ],
    "testCases": [
      {
        "id": "bash-51-tc-1",
        "description": "Verifies correct implementation for Pattern Searching with grep",
        "testFn": "code.includes('grep ')"
      }
    ]
  },
  {
    "id": "bash-52-case-insensitive-&-inverted-sear",
    "title": "52. Case-Insensitive & Inverted Search (grep -i, -v)",
    "slug": "lesson-52-case-insensitive-&-inverted-sear",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Case-Insensitive & Inverted Search (grep -i, -v) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Case-Insensitive & Inverted Search (grep -i, -v)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Looking for anyone NOT wearing a red hat, regardless of whether their hat is crimson or scarlet.",
    "explanationMarkdown": "### Case-Insensitive & Inverted Search (grep -i, -v)\n\n`-i` ignores case; `-v` inverts match (prints lines that do NOT contain the pattern).\n\n```bash\ngrep -iv \"debug\" server.log\n```",
    "workedExample": {
      "title": "Worked Example: Case-Insensitive & Inverted Search (grep -i, -v)",
      "code": "grep -iv \"debug\" server.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Case-Insensitive & Inverted Search (grep -i, -v).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Case-Insensitive & Inverted Search (grep -i, -v).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find non-matching lines ignoring case\n# TODO: Write command below\n",
    "solutionCode": "grep -iv \"debug\" server.log",
    "hints": [
      "Write:\ngrep -iv \"debug\" server.log"
    ],
    "testCases": [
      {
        "id": "bash-52-tc-1",
        "description": "Verifies correct implementation for Case-Insensitive & Inverted Search (grep -i, -v)",
        "testFn": "code.includes('grep -') || code.includes('grep ')"
      }
    ]
  },
  {
    "id": "bash-53-line-numbers-&-counting-matches-",
    "title": "53. Line Numbers & Counting Matches (grep -n, -c)",
    "slug": "lesson-53-line-numbers-&-counting-matches-",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Line Numbers & Counting Matches (grep -n, -c) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Line Numbers & Counting Matches (grep -n, -c)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A referee citing the exact page and paragraph number where a player committed a rule infraction.",
    "explanationMarkdown": "### Line Numbers & Counting Matches (grep -n, -c)\n\n`-n` prefixes matching lines with their line number; `-c` outputs the total count of matching lines.\n\n```bash\ngrep -n \"Error:\" build.log\n```",
    "workedExample": {
      "title": "Worked Example: Line Numbers & Counting Matches (grep -n, -c)",
      "code": "grep -n \"Error:\" build.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Line Numbers & Counting Matches (grep -n, -c).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Line Numbers & Counting Matches (grep -n, -c).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Count total error occurrences with line numbers\n# TODO: Write command below\n",
    "solutionCode": "grep -n \"Error:\" build.log",
    "hints": [
      "Write:\ngrep -n \"Error:\" build.log"
    ],
    "testCases": [
      {
        "id": "bash-53-tc-1",
        "description": "Verifies correct implementation for Line Numbers & Counting Matches (grep -n, -c)",
        "testFn": "code.includes('grep -n') || code.includes('grep -c')"
      }
    ]
  },
  {
    "id": "bash-54-recursive-searching-with-grep--r",
    "title": "54. Recursive Searching with grep -r / ripgrep (rg)",
    "slug": "lesson-54-recursive-searching-with-grep--r",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Recursive Searching with grep -r / ripgrep (rg) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Recursive Searching with grep -r / ripgrep (rg)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A librarian searching every shelf, book, and page in the entire library building.",
    "explanationMarkdown": "### Recursive Searching with grep -r / ripgrep (rg)\n\n`-r` searches all files recursively down directories; `ripgrep` (`rg`) is a modern Rust-powered ultra-fast alternative.\n\n```bash\ngrep -rn \"useAuth\" src/\n```",
    "workedExample": {
      "title": "Worked Example: Recursive Searching with grep -r / ripgrep (rg)",
      "code": "grep -rn \"useAuth\" src/",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Recursive Searching with grep -r / ripgrep (rg).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recursive Searching with grep -r / ripgrep (rg).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Search recursively across directory tree\n# TODO: Write command below\n",
    "solutionCode": "grep -rn \"useAuth\" src/",
    "hints": [
      "Write:\ngrep -rn \"useAuth\" src/"
    ],
    "testCases": [
      {
        "id": "bash-54-tc-1",
        "description": "Verifies correct implementation for Recursive Searching with grep -r / ripgrep (rg)",
        "testFn": "code.includes('grep -r') || code.includes('rg ')"
      }
    ]
  },
  {
    "id": "bash-55-extended-regular-expressions-wit",
    "title": "55. Extended Regular Expressions with egrep / grep -E",
    "slug": "lesson-55-extended-regular-expressions-wit",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Extended Regular Expressions with egrep / grep -E in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Extended Regular Expressions with egrep / grep -E",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A security scanner checking for either 'plastic' OR 'metal' prohibited items.",
    "explanationMarkdown": "### Extended Regular Expressions with egrep / grep -E\n\n`grep -E` unlocks modern regex: `+`, `?`, `|`, and `()` grouping without escaping.\n\n```bash\ngrep -E \"(error|fatal)\" system.log\n```",
    "workedExample": {
      "title": "Worked Example: Extended Regular Expressions with egrep / grep -E",
      "code": "grep -E \"(error|fatal)\" system.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extended Regular Expressions with egrep / grep -E.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extended Regular Expressions with egrep / grep -E.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Match either word1 or word2\n# TODO: Write command below\n",
    "solutionCode": "grep -E \"(error|fatal)\" system.log",
    "hints": [
      "Write:\ngrep -E \"(error|fatal)\" system.log"
    ],
    "testCases": [
      {
        "id": "bash-55-tc-1",
        "description": "Verifies correct implementation for Extended Regular Expressions with egrep / grep -E",
        "testFn": "code.includes('grep -E') || code.includes('egrep')"
      }
    ]
  },
  {
    "id": "bash-56-stream-editing-with-sed-find-&-r",
    "title": "56. Stream Editing with sed (Find & Replace)",
    "slug": "lesson-56-stream-editing-with-sed-find-&-r",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Stream Editing with sed (Find & Replace) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Stream Editing with sed (Find & Replace)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An editor running through a manuscript with a red pen, crossing out obsolete terms and writing replacements.",
    "explanationMarkdown": "### Stream Editing with sed (Find & Replace)\n\n`sed 's/find/replace/'` replaces the first occurrence on each line; append `g` for global replacement.\n\n```bash\nsed 's/http:/https:/' urls.txt\n```",
    "workedExample": {
      "title": "Worked Example: Stream Editing with sed (Find & Replace)",
      "code": "sed 's/http:/https:/' urls.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stream Editing with sed (Find & Replace).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stream Editing with sed (Find & Replace).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Replace first occurrence of 'http' with 'https'\n# TODO: Write command below\n",
    "solutionCode": "sed 's/http:/https:/' urls.txt",
    "hints": [
      "Write:\nsed 's/http:/https:/' urls.txt"
    ],
    "testCases": [
      {
        "id": "bash-56-tc-1",
        "description": "Verifies correct implementation for Stream Editing with sed (Find & Replace)",
        "testFn": "code.includes('sed ')"
      }
    ]
  },
  {
    "id": "bash-57-global-in-place-file-editing-wit",
    "title": "57. Global In-Place File Editing with sed -i",
    "slug": "lesson-57-global-in-place-file-editing-wit",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Global In-Place File Editing with sed -i in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Global In-Place File Editing with sed -i",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Rewriting words directly in an ink ledger without creating a secondary photocopy.",
    "explanationMarkdown": "### Global In-Place File Editing with sed -i\n\n`-i` (in-place) modifies the file directly on disk without requiring output redirection.\n\n```bash\nsed -i 's/localhost/127.0.0.1/g' config.env\n```",
    "workedExample": {
      "title": "Worked Example: Global In-Place File Editing with sed -i",
      "code": "sed -i 's/localhost/127.0.0.1/g' config.env",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Global In-Place File Editing with sed -i.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Global In-Place File Editing with sed -i.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Replace text directly inside the file\n# TODO: Write command below\n",
    "solutionCode": "sed -i 's/localhost/127.0.0.1/g' config.env",
    "hints": [
      "Write:\nsed -i 's/localhost/127.0.0.1/g' config.env"
    ],
    "testCases": [
      {
        "id": "bash-57-tc-1",
        "description": "Verifies correct implementation for Global In-Place File Editing with sed -i",
        "testFn": "code.includes('sed -i')"
      }
    ]
  },
  {
    "id": "bash-58-deleting-lines-with-sed--pattern",
    "title": "58. Deleting Lines with sed (/pattern/d)",
    "slug": "lesson-58-deleting-lines-with-sed--pattern",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Deleting Lines with sed (/pattern/d) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Deleting Lines with sed (/pattern/d)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Using scissors to snip out and discard all empty blank pages from a report.",
    "explanationMarkdown": "### Deleting Lines with sed (/pattern/d)\n\n`sed '/regex/d'` deletes all lines matching the regular expression.\n\n```bash\nsed -i '/^$/d' data.txt\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Lines with sed (/pattern/d)",
      "code": "sed -i '/^$/d' data.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deleting Lines with sed (/pattern/d).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deleting Lines with sed (/pattern/d).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Delete all empty blank lines\n# TODO: Write command below\n",
    "solutionCode": "sed -i '/^$/d' data.txt",
    "hints": [
      "Write:\nsed -i '/^$/d' data.txt"
    ],
    "testCases": [
      {
        "id": "bash-58-tc-1",
        "description": "Verifies correct implementation for Deleting Lines with sed (/pattern/d)",
        "testFn": "code.includes('sed ') && code.includes('/d')"
      }
    ]
  },
  {
    "id": "bash-59-awk-introduction-the-column-proc",
    "title": "59. awk Introduction: The Column Processing Language",
    "slug": "lesson-59-awk-introduction-the-column-proc",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master awk Introduction: The Column Processing Language in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "awk Introduction",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A spreadsheet formula extracting Column A and Column C across 1,000,000 rows instantly.",
    "explanationMarkdown": "### awk Introduction: The Column Processing Language\n\nawk is a Turing-complete text-processing language treating lines as records and whitespace-delimited tokens as fields (`$1`, `$2`, `$NF`).\n\n```bash\nawk '{print $1, $3}' access.log\n```",
    "workedExample": {
      "title": "Worked Example: awk Introduction: The Column Processing Language",
      "code": "awk '{print $1, $3}' access.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for awk Introduction: The Column Processing Language.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of awk Introduction: The Column Processing Language.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Print Column 1 and Column 3 from table\n# TODO: Write command below\n",
    "solutionCode": "awk '{print $1, $3}' access.log",
    "hints": [
      "Write:\nawk '{print $1, $3}' access.log"
    ],
    "testCases": [
      {
        "id": "bash-59-tc-1",
        "description": "Verifies correct implementation for awk Introduction: The Column Processing Language",
        "testFn": "code.includes('awk ')"
      }
    ]
  },
  {
    "id": "bash-60-awk-filtering-by-conditions",
    "title": "60. awk Filtering by Conditions",
    "slug": "lesson-60-awk-filtering-by-conditions",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master awk Filtering by Conditions in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "awk Filtering by Conditions",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Highlighting customers who spent over \\$100 in an accounting ledger.",
    "explanationMarkdown": "### awk Filtering by Conditions\n\nPrefix actions with conditions: `awk 'condition { action }'` filters records effortlessly.\n\n```bash\nawk '$2 > 100 {print $1, $2}' metrics.txt\n```",
    "workedExample": {
      "title": "Worked Example: awk Filtering by Conditions",
      "code": "awk '$2 > 100 {print $1, $2}' metrics.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for awk Filtering by Conditions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of awk Filtering by Conditions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Print lines where Column 2 exceeds 100\n# TODO: Write command below\n",
    "solutionCode": "awk '$2 > 100 {print $1, $2}' metrics.txt",
    "hints": [
      "Write:\nawk '$2 > 100 {print $1, $2}' metrics.txt"
    ],
    "testCases": [
      {
        "id": "bash-60-tc-1",
        "description": "Verifies correct implementation for awk Filtering by Conditions",
        "testFn": "code.includes('awk ') && code.includes('$')"
      }
    ]
  },
  {
    "id": "bash-61-awk-built-in-variables-nr,-nf,-f",
    "title": "61. awk Built-in Variables (NR, NF, FS)",
    "slug": "lesson-61-awk-built-in-variables-nr,-nf,-f",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master awk Built-in Variables (NR, NF, FS) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "awk Built-in Variables (NR, NF, FS)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A calculator knowing how many items are on a receipt (`NF`) and what receipt number it is currently printing (`NR`).",
    "explanationMarkdown": "### awk Built-in Variables (NR, NF, FS)\n\n`FS` is field separator; `NR` is current row number; `NF` is total fields in current row; `$NF` is the last field!\n\n```bash\nawk 'BEGIN {FS=\":\"} {print NR, $NF}' /etc/passwd\n```",
    "workedExample": {
      "title": "Worked Example: awk Built-in Variables (NR, NF, FS)",
      "code": "awk 'BEGIN {FS=\":\"} {print NR, $NF}' /etc/passwd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for awk Built-in Variables (NR, NF, FS).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of awk Built-in Variables (NR, NF, FS).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Print line number and last column\n# TODO: Write command below\n",
    "solutionCode": "awk 'BEGIN {FS=\":\"} {print NR, $NF}' /etc/passwd",
    "hints": [
      "Write:\nawk 'BEGIN {FS=\":\"} {print NR, $NF}' /etc/passwd"
    ],
    "testCases": [
      {
        "id": "bash-61-tc-1",
        "description": "Verifies correct implementation for awk Built-in Variables (NR, NF, FS)",
        "testFn": "code.includes('awk ') && (code.includes('NR') || code.includes('$NF') || code.includes('FS'))"
      }
    ]
  },
  {
    "id": "bash-62-parsing-nginx-apache-web-logs-wi",
    "title": "62. Parsing Nginx/Apache Web Logs with awk & grep",
    "slug": "lesson-62-parsing-nginx-apache-web-logs-wi",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Parsing Nginx/Apache Web Logs with awk & grep in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Parsing Nginx/Apache Web Logs with awk & grep",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Security radar finding the top 5 most frequent visitors buzzing the front gate.",
    "explanationMarkdown": "### Parsing Nginx/Apache Web Logs with awk & grep\n\nExtract client IP, sort, count frequencies with `uniq -c`, and sort numerically to find top traffic consumers.\n\n```bash\nawk '{print $1}' access.log | sort | uniq -c | sort -nr | head -n 5\n```",
    "workedExample": {
      "title": "Worked Example: Parsing Nginx/Apache Web Logs with awk & grep",
      "code": "awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -n 5",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Parsing Nginx/Apache Web Logs with awk & grep.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Parsing Nginx/Apache Web Logs with awk & grep.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Top 5 IP addresses hitting the web server\n# TODO: Write command below\n",
    "solutionCode": "awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -n 5",
    "hints": [
      "Write:\nawk '{print $1}' access.log | sort | uniq -c | sort -nr | head -n 5"
    ],
    "testCases": [
      {
        "id": "bash-62-tc-1",
        "description": "Verifies correct implementation for Parsing Nginx/Apache Web Logs with awk & grep",
        "testFn": "code.includes('awk ') && code.includes('uniq -c')"
      }
    ]
  },
  {
    "id": "bash-63-module-4-review-text-engineering",
    "title": "63. Module 4 Review: Text Engineering Capstone",
    "slug": "lesson-63-module-4-review-text-engineering",
    "language": "bash",
    "category": "Module 4: Text Processing with grep, sed, and awk",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 4 Review: Text Engineering Capstone in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Module 4 Review",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A financial auditing suite generating quarterly sum reports from raw ledger books in seconds.",
    "explanationMarkdown": "### Module 4 Review: Text Engineering Capstone\n\nMastery over sorting, unique frequency tallying, recursive grepping, sed stream rewriting, and awk column math.\n\n```bash\nawk '{sum += $2} END {print \"Total:\", sum}' data.txt\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: Text Engineering Capstone",
      "code": "awk '{sum += $2} END {print \"Total:\", sum}' data.txt",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 4 Review: Text Engineering Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 4 Review: Text Engineering Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Comprehensive log summary report\n# TODO: Write command below\n",
    "solutionCode": "awk '{sum += $2} END {print \"Total:\", sum}' data.txt",
    "hints": [
      "Write:\nawk '{sum += $2} END {print \"Total:\", sum}' data.txt"
    ],
    "testCases": [
      {
        "id": "bash-63-tc-1",
        "description": "Verifies correct implementation for Module 4 Review: Text Engineering Capstone",
        "testFn": "code.includes('awk ')"
      }
    ]
  },
  {
    "id": "bash-64-the-find-command-locating-files-",
    "title": "64. The find Command: Locating Files by Name",
    "slug": "lesson-64-the-find-command-locating-files-",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The find Command: Locating Files by Name in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The find Command",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A detective searching a multi-story warehouse for boxes marked with a blue star.",
    "explanationMarkdown": "### The find Command: Locating Files by Name\n\n`find <dir> -name \"pattern\"` searches the directory tree recursively for files matching the pattern.\n\n```bash\nfind . -name \"*.ts\"\n```",
    "workedExample": {
      "title": "Worked Example: The find Command: Locating Files by Name",
      "code": "find . -name \"*.ts\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The find Command: Locating Files by Name.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The find Command: Locating Files by Name.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Search for TypeScript files recursively\n# TODO: Write command below\n",
    "solutionCode": "find . -name \"*.ts\"",
    "hints": [
      "Write:\nfind . -name \"*.ts\""
    ],
    "testCases": [
      {
        "id": "bash-64-tc-1",
        "description": "Verifies correct implementation for The find Command: Locating Files by Name",
        "testFn": "code.includes('find ') && code.includes('-name')"
      }
    ]
  },
  {
    "id": "bash-65-case-insensitive-file-search--in",
    "title": "65. Case-Insensitive File Search (-iname)",
    "slug": "lesson-65-case-insensitive-file-search--in",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Case-Insensitive File Search (-iname) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Case-Insensitive File Search (-iname)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Looking for files labeled 'readme', 'README', or 'ReadMe' without worrying about capitalization.",
    "explanationMarkdown": "### Case-Insensitive File Search (-iname)\n\n`-iname` matches filenames case-insensitively.\n\n```bash\nfind . -iname \"readme*\"\n```",
    "workedExample": {
      "title": "Worked Example: Case-Insensitive File Search (-iname)",
      "code": "find . -iname \"readme*\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Case-Insensitive File Search (-iname).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Case-Insensitive File Search (-iname).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Search ignoring case\n# TODO: Write command below\n",
    "solutionCode": "find . -iname \"readme*\"",
    "hints": [
      "Write:\nfind . -iname \"readme*\""
    ],
    "testCases": [
      {
        "id": "bash-65-tc-1",
        "description": "Verifies correct implementation for Case-Insensitive File Search (-iname)",
        "testFn": "code.includes('find ') && code.includes('-iname')"
      }
    ]
  },
  {
    "id": "bash-66-filtering-by-file-type-with-find",
    "title": "66. Filtering by File Type with find -type",
    "slug": "lesson-66-filtering-by-file-type-with-find",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Filtering by File Type with find -type in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Filtering by File Type with find -type",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Sorting luggage: searching only for suitcases, ignoring envelopes and parcels.",
    "explanationMarkdown": "### Filtering by File Type with find -type\n\n`-type f` finds regular files; `-type d` finds directories; `-type l` finds symbolic links.\n\n```bash\nfind . -type d -name \"controllers\"\n```",
    "workedExample": {
      "title": "Worked Example: Filtering by File Type with find -type",
      "code": "find . -type d -name \"controllers\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering by File Type with find -type.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering by File Type with find -type.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Search for directories only\n# TODO: Write command below\n",
    "solutionCode": "find . -type d -name \"controllers\"",
    "hints": [
      "Write:\nfind . -type d -name \"controllers\""
    ],
    "testCases": [
      {
        "id": "bash-66-tc-1",
        "description": "Verifies correct implementation for Filtering by File Type with find -type",
        "testFn": "code.includes('find ') && code.includes('-type')"
      }
    ]
  },
  {
    "id": "bash-67-filtering-by-file-size--size",
    "title": "67. Filtering by File Size (-size)",
    "slug": "lesson-67-filtering-by-file-size--size",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Filtering by File Size (-size) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Filtering by File Size (-size)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Using a freight scale to single out overweight shipping crates exceeding 100 kilograms.",
    "explanationMarkdown": "### Filtering by File Size (-size)\n\n`-size +100M` finds files larger than 100MB; `-size -10k` finds files under 10KB.\n\n```bash\nfind /var -size +100M\n```",
    "workedExample": {
      "title": "Worked Example: Filtering by File Size (-size)",
      "code": "find /var -size +100M",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering by File Size (-size).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering by File Size (-size).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find large files exceeding 100 Megabytes\n# TODO: Write command below\n",
    "solutionCode": "find /var -size +100M",
    "hints": [
      "Write:\nfind /var -size +100M"
    ],
    "testCases": [
      {
        "id": "bash-67-tc-1",
        "description": "Verifies correct implementation for Filtering by File Size (-size)",
        "testFn": "code.includes('find ') && code.includes('-size')"
      }
    ]
  },
  {
    "id": "bash-68-filtering-by-modification-time--",
    "title": "68. Filtering by Modification Time (-mtime, -mmin)",
    "slug": "lesson-68-filtering-by-modification-time--",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Filtering by Modification Time (-mtime, -mmin) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Filtering by Modification Time (-mtime, -mmin)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Looking at the security sign-in sheet for guests who entered the building during the last 24 hours.",
    "explanationMarkdown": "### Filtering by Modification Time (-mtime, -mmin)\n\n`-mtime -n` finds files modified less than n days ago; `-mmin -60` checks within the last 60 minutes.\n\n```bash\nfind . -mtime -1\n```",
    "workedExample": {
      "title": "Worked Example: Filtering by Modification Time (-mtime, -mmin)",
      "code": "find . -mtime -1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering by Modification Time (-mtime, -mmin).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering by Modification Time (-mtime, -mmin).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find files modified in the past 24 hours\n# TODO: Write command below\n",
    "solutionCode": "find . -mtime -1",
    "hints": [
      "Write:\nfind . -mtime -1"
    ],
    "testCases": [
      {
        "id": "bash-68-tc-1",
        "description": "Verifies correct implementation for Filtering by Modification Time (-mtime, -mmin)",
        "testFn": "code.includes('find ') && code.includes('-mtime')"
      }
    ]
  },
  {
    "id": "bash-69-executing-actions-on-search-resu",
    "title": "69. Executing Actions on Search Results (-exec)",
    "slug": "lesson-69-executing-actions-on-search-resu",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Executing Actions on Search Results (-exec) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Executing Actions on Search Results (-exec)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A robotic vacuum finding dust bunnies under furniture and immediately incinerating them.",
    "explanationMarkdown": "### Executing Actions on Search Results (-exec)\n\n`-exec <cmd> {} +` runs the command on matching files, replacing `{}` with the found file paths.\n\n```bash\nfind . -name \"*.tmp\" -exec rm -f {} +\n```",
    "workedExample": {
      "title": "Worked Example: Executing Actions on Search Results (-exec)",
      "code": "find . -name \"*.tmp\" -exec rm -f {} +",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Executing Actions on Search Results (-exec).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Executing Actions on Search Results (-exec).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Delete all matching temporary files safely\n# TODO: Write command below\n",
    "solutionCode": "find . -name \"*.tmp\" -exec rm -f {} +",
    "hints": [
      "Write:\nfind . -name \"*.tmp\" -exec rm -f {} +"
    ],
    "testCases": [
      {
        "id": "bash-69-tc-1",
        "description": "Verifies correct implementation for Executing Actions on Search Results (-exec)",
        "testFn": "code.includes('find ') && code.includes('-exec')"
      }
    ]
  },
  {
    "id": "bash-70-locating-executable-binaries-wit",
    "title": "70. Locating Executable Binaries with which & whereis",
    "slug": "lesson-70-locating-executable-binaries-wit",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Locating Executable Binaries with which & whereis in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Locating Executable Binaries with which & whereis",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Looking in the tool rack to find which shelf currently holds the electric drill.",
    "explanationMarkdown": "### Locating Executable Binaries with which & whereis\n\n`which <cmd>` prints the absolute path of the executable binary that will run when you type that command.\n\n```bash\nwhich node\n```",
    "workedExample": {
      "title": "Worked Example: Locating Executable Binaries with which & whereis",
      "code": "which node",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Locating Executable Binaries with which & whereis.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Locating Executable Binaries with which & whereis.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find exact binary path of node\n# TODO: Write command below\n",
    "solutionCode": "which node",
    "hints": [
      "Write:\nwhich node"
    ],
    "testCases": [
      {
        "id": "bash-70-tc-1",
        "description": "Verifies correct implementation for Locating Executable Binaries with which & whereis",
        "testFn": "code.includes('which ')"
      }
    ]
  },
  {
    "id": "bash-71-fast-indexed-searching-with-loca",
    "title": "71. Fast Indexed Searching with locate and updatedb",
    "slug": "lesson-71-fast-indexed-searching-with-loca",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Fast Indexed Searching with locate and updatedb in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Fast Indexed Searching with locate and updatedb",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Checking a pre-printed library card catalog index instead of walking through every aisle in the building.",
    "explanationMarkdown": "### Fast Indexed Searching with locate and updatedb\n\n`locate` searches a pre-indexed database (`updatedb`) instantly in milliseconds, faster than disk walks.\n\n```bash\nlocate nginx.conf\n```",
    "workedExample": {
      "title": "Worked Example: Fast Indexed Searching with locate and updatedb",
      "code": "locate nginx.conf",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fast Indexed Searching with locate and updatedb.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fast Indexed Searching with locate and updatedb.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Instantly locate configuration files\n# TODO: Write command below\n",
    "solutionCode": "locate nginx.conf",
    "hints": [
      "Write:\nlocate nginx.conf"
    ],
    "testCases": [
      {
        "id": "bash-71-tc-1",
        "description": "Verifies correct implementation for Fast Indexed Searching with locate and updatedb",
        "testFn": "code.includes('locate ')"
      }
    ]
  },
  {
    "id": "bash-72-tar-archives-creating-tarballs-t",
    "title": "72. Tar Archives: Creating Tarballs (tar -czvf)",
    "slug": "lesson-72-tar-archives-creating-tarballs-t",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Tar Archives: Creating Tarballs (tar -czvf) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Tar Archives",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Vacuum-packing an entire winter wardrobe into a tight, airtight plastic travel pouch.",
    "explanationMarkdown": "### Tar Archives: Creating Tarballs (tar -czvf)\n\n`tar -czvf <archive.tar.gz> <dir>` packs files into an archive (`-c`), compresses with gzip (`-z`), and prints progress (`-v`).\n\n```bash\ntar -czvf backup.tar.gz src/\n```",
    "workedExample": {
      "title": "Worked Example: Tar Archives: Creating Tarballs (tar -czvf)",
      "code": "tar -czvf backup.tar.gz src/",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tar Archives: Creating Tarballs (tar -czvf).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tar Archives: Creating Tarballs (tar -czvf).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create compressed gzip tar archive of directory\n# TODO: Write command below\n",
    "solutionCode": "tar -czvf backup.tar.gz src/",
    "hints": [
      "Write:\ntar -czvf backup.tar.gz src/"
    ],
    "testCases": [
      {
        "id": "bash-72-tc-1",
        "description": "Verifies correct implementation for Tar Archives: Creating Tarballs (tar -czvf)",
        "testFn": "code.includes('tar -czvf') || code.includes('tar ')"
      }
    ]
  },
  {
    "id": "bash-73-extracting-tarballs-tar--xzvf",
    "title": "73. Extracting Tarballs (tar -xzvf)",
    "slug": "lesson-73-extracting-tarballs-tar--xzvf",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Extracting Tarballs (tar -xzvf) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Extracting Tarballs (tar -xzvf)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Unzipping the vacuum travel pouch and fluffing all the winter jackets back onto hangers.",
    "explanationMarkdown": "### Extracting Tarballs (tar -xzvf)\n\n`tar -xzvf <archive.tar.gz>` extracts (`-x`) compressed files back into their original directory structure.\n\n```bash\ntar -xzvf backup.tar.gz\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Tarballs (tar -xzvf)",
      "code": "tar -xzvf backup.tar.gz",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Tarballs (tar -xzvf).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Tarballs (tar -xzvf).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Extract compressed tarball archive\n# TODO: Write command below\n",
    "solutionCode": "tar -xzvf backup.tar.gz",
    "hints": [
      "Write:\ntar -xzvf backup.tar.gz"
    ],
    "testCases": [
      {
        "id": "bash-73-tc-1",
        "description": "Verifies correct implementation for Extracting Tarballs (tar -xzvf)",
        "testFn": "code.includes('tar -xzvf') || code.includes('tar ')"
      }
    ]
  },
  {
    "id": "bash-74-gzip-and-gunzip-file-compression",
    "title": "74. Gzip and Gunzip File Compression",
    "slug": "lesson-74-gzip-and-gunzip-file-compression",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Gzip and Gunzip File Compression in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Gzip and Gunzip File Compression",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Squishing an empty cardboard box flat before loading it onto a recycling truck.",
    "explanationMarkdown": "### Gzip and Gunzip File Compression\n\n`gzip <file>` compresses a single file in-place, adding `.gz`; `gunzip` decompresses it.\n\n```bash\ngzip access.log\n```",
    "workedExample": {
      "title": "Worked Example: Gzip and Gunzip File Compression",
      "code": "gzip access.log",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Gzip and Gunzip File Compression.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Gzip and Gunzip File Compression.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Compress single file\n# TODO: Write command below\n",
    "solutionCode": "gzip access.log",
    "hints": [
      "Write:\ngzip access.log"
    ],
    "testCases": [
      {
        "id": "bash-74-tc-1",
        "description": "Verifies correct implementation for Gzip and Gunzip File Compression",
        "testFn": "code.includes('gzip ') || code.includes('gunzip ')"
      }
    ]
  },
  {
    "id": "bash-75-inspecting-disk-space-usage-with",
    "title": "75. Inspecting Disk Space Usage with df -h",
    "slug": "lesson-75-inspecting-disk-space-usage-with",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inspecting Disk Space Usage with df -h in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Inspecting Disk Space Usage with df -h",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A vehicle fuel gauge showing what percentage of your gas tank remains full.",
    "explanationMarkdown": "### Inspecting Disk Space Usage with df -h\n\n`df -h` (Disk Free) displays total, used, and available space on all mounted storage partitions.\n\n```bash\ndf -h\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Disk Space Usage with df -h",
      "code": "df -h",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Disk Space Usage with df -h.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Disk Space Usage with df -h.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View free disk space across all mounted filesystems\n# TODO: Write command below\n",
    "solutionCode": "df -h",
    "hints": [
      "Write:\ndf -h"
    ],
    "testCases": [
      {
        "id": "bash-75-tc-1",
        "description": "Verifies correct implementation for Inspecting Disk Space Usage with df -h",
        "testFn": "code.includes('df -h') || code.includes('df ')"
      }
    ]
  },
  {
    "id": "bash-76-inspecting-directory-sizes-with-",
    "title": "76. Inspecting Directory Sizes with du -sh",
    "slug": "lesson-76-inspecting-directory-sizes-with-",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inspecting Directory Sizes with du -sh in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Inspecting Directory Sizes with du -sh",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Weighing an entire shipping container on a truck scale to get its total combined tonnage.",
    "explanationMarkdown": "### Inspecting Directory Sizes with du -sh\n\n`du -sh <dir>` (Disk Usage) computes the cumulative byte size of a directory and all nested files.\n\n```bash\ndu -sh .\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Directory Sizes with du -sh",
      "code": "du -sh .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Directory Sizes with du -sh.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Directory Sizes with du -sh.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View summary size of current directory\n# TODO: Write command below\n",
    "solutionCode": "du -sh .",
    "hints": [
      "Write:\ndu -sh ."
    ],
    "testCases": [
      {
        "id": "bash-76-tc-1",
        "description": "Verifies correct implementation for Inspecting Directory Sizes with du -sh",
        "testFn": "code.includes('du -sh') || code.includes('du ')"
      }
    ]
  },
  {
    "id": "bash-77-finding-top-10-largest-folders",
    "title": "77. Finding Top 10 Largest Folders",
    "slug": "lesson-77-finding-top-10-largest-folders",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Finding Top 10 Largest Folders in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Finding Top 10 Largest Folders",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Finding the 10 heaviest objects stored in your attic so you can clear space.",
    "explanationMarkdown": "### Finding Top 10 Largest Folders\n\nCombines `du` directory measurements with reverse human-numeric sorting to pinpoint disk hogs.\n\n```bash\ndu -sh * | sort -hr | head -n 10\n```",
    "workedExample": {
      "title": "Worked Example: Finding Top 10 Largest Folders",
      "code": "du -sh * | sort -hr | head -n 10",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding Top 10 Largest Folders.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding Top 10 Largest Folders.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Rank largest space consumers on disk\n# TODO: Write command below\n",
    "solutionCode": "du -sh * | sort -hr | head -n 10",
    "hints": [
      "Write:\ndu -sh * | sort -hr | head -n 10"
    ],
    "testCases": [
      {
        "id": "bash-77-tc-1",
        "description": "Verifies correct implementation for Finding Top 10 Largest Folders",
        "testFn": "code.includes('du ') && code.includes('sort -hr')"
      }
    ]
  },
  {
    "id": "bash-78-module-5-review-storage-&-archiv",
    "title": "78. Module 5 Review: Storage & Archiving Capstone",
    "slug": "lesson-78-module-5-review-storage-&-archiv",
    "language": "bash",
    "category": "Module 5: Search, Archives & Disk Management",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 5 Review: Storage & Archiving Capstone in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Module 5 Review",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A master warehouse manager auditing storage rack capacities and archiving historical inventories.",
    "explanationMarkdown": "### Module 5 Review: Storage & Archiving Capstone\n\nMastery over recursive file searches, executive batch actions, gzip tarballing, and disk space auditing.\n\n```bash\ndf -h\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: Storage & Archiving Capstone",
      "code": "df -h",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 5 Review: Storage & Archiving Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 5 Review: Storage & Archiving Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify archive integrity and disk stats\n# TODO: Write command below\n",
    "solutionCode": "df -h",
    "hints": [
      "Write:\ndf -h"
    ],
    "testCases": [
      {
        "id": "bash-78-tc-1",
        "description": "Verifies correct implementation for Module 5 Review: Storage & Archiving Capstone",
        "testFn": "code.includes('df -h')"
      }
    ]
  },
  {
    "id": "bash-79-what-is-a-process?-pids-and-proc",
    "title": "79. What is a Process? PIDs and Process Trees",
    "slug": "lesson-79-what-is-a-process?-pids-and-proc",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master What is a Process? PIDs and Process Trees in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "What is a Process? PIDs and Process Trees",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An actor walking onto a stage wearing a unique numbered bib on their jersey.",
    "explanationMarkdown": "### What is a Process? PIDs and Process Trees\n\nA process is a running instance of a program in memory, identified by a unique Process ID (PID).\n\n```bash\necho $$\n```",
    "workedExample": {
      "title": "Worked Example: What is a Process? PIDs and Process Trees",
      "code": "echo $$",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is a Process? PIDs and Process Trees.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is a Process? PIDs and Process Trees.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View current shell process ID\n# TODO: Write command below\n",
    "solutionCode": "echo $$",
    "hints": [
      "Write:\necho $$"
    ],
    "testCases": [
      {
        "id": "bash-79-tc-1",
        "description": "Verifies correct implementation for What is a Process? PIDs and Process Trees",
        "testFn": "code.includes('echo $$') || code.includes('ps')"
      }
    ]
  },
  {
    "id": "bash-80-viewing-active-processes-with-ps",
    "title": "80. Viewing Active Processes with ps aux",
    "slug": "lesson-80-viewing-active-processes-with-ps",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Viewing Active Processes with ps aux in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Viewing Active Processes with ps aux",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A security control tower viewing binoculars across the entire city airport tarmac.",
    "explanationMarkdown": "### Viewing Active Processes with ps aux\n\n`ps aux` displays every running process, user, CPU%, memory%, start time, and full command string.\n\n```bash\nps aux\n```",
    "workedExample": {
      "title": "Worked Example: Viewing Active Processes with ps aux",
      "code": "ps aux",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing Active Processes with ps aux.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing Active Processes with ps aux.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View all running processes on the system\n# TODO: Write command below\n",
    "solutionCode": "ps aux",
    "hints": [
      "Write:\nps aux"
    ],
    "testCases": [
      {
        "id": "bash-80-tc-1",
        "description": "Verifies correct implementation for Viewing Active Processes with ps aux",
        "testFn": "code.includes('ps aux') || code.includes('ps -ef')"
      }
    ]
  },
  {
    "id": "bash-81-interactive-real-time-monitoring",
    "title": "81. Interactive Real-Time Monitoring with top and htop",
    "slug": "lesson-81-interactive-real-time-monitoring",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Interactive Real-Time Monitoring with top and htop in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Interactive Real-Time Monitoring with top and htop",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A cardiac intensive care hospital monitor showing heart rate, blood pressure, and oxygen levels live.",
    "explanationMarkdown": "### Interactive Real-Time Monitoring with top and htop\n\n`top` and `htop` display a live interactive dashboard of CPU load, memory, and top consuming tasks.\n\n```bash\ntop -n 1\n```",
    "workedExample": {
      "title": "Worked Example: Interactive Real-Time Monitoring with top and htop",
      "code": "top -n 1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interactive Real-Time Monitoring with top and htop.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interactive Real-Time Monitoring with top and htop.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run top process monitor\n# TODO: Write command below\n",
    "solutionCode": "top -n 1",
    "hints": [
      "Write:\ntop -n 1"
    ],
    "testCases": [
      {
        "id": "bash-81-tc-1",
        "description": "Verifies correct implementation for Interactive Real-Time Monitoring with top and htop",
        "testFn": "code.includes('top')"
      }
    ]
  },
  {
    "id": "bash-82-terminating-processes-with-kill-",
    "title": "82. Terminating Processes with kill (SIGTERM vs SIGKILL)",
    "slug": "lesson-82-terminating-processes-with-kill-",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Terminating Processes with kill (SIGTERM vs SIGKILL) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Terminating Processes with kill (SIGTERM vs SIGKILL)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Asking someone politely to step outside the room (SIGTERM 15) vs having security physically drag them out (SIGKILL 9).",
    "explanationMarkdown": "### Terminating Processes with kill (SIGTERM vs SIGKILL)\n\n`kill -15` (SIGTERM) allows graceful shutdown; `kill -9` (SIGKILL) forces the kernel to instantly terminate the process.\n\n```bash\nkill -15 1234\n```",
    "workedExample": {
      "title": "Worked Example: Terminating Processes with kill (SIGTERM vs SIGKILL)",
      "code": "kill -15 1234",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Terminating Processes with kill (SIGTERM vs SIGKILL).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Terminating Processes with kill (SIGTERM vs SIGKILL).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Gracefully terminate process by PID\n# TODO: Write command below\n",
    "solutionCode": "kill -15 1234",
    "hints": [
      "Write:\nkill -15 1234"
    ],
    "testCases": [
      {
        "id": "bash-82-tc-1",
        "description": "Verifies correct implementation for Terminating Processes with kill (SIGTERM vs SIGKILL)",
        "testFn": "code.includes('kill ')"
      }
    ]
  },
  {
    "id": "bash-83-terminating-processes-by-name-ki",
    "title": "83. Terminating Processes by Name (killall & pkill)",
    "slug": "lesson-83-terminating-processes-by-name-ki",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Terminating Processes by Name (killall & pkill) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Terminating Processes by Name (killall & pkill)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An airport loudspeaker announcing: 'All flight attendants on Flight 402 please report to Gate 5'.",
    "explanationMarkdown": "### Terminating Processes by Name (killall & pkill)\n\n`pkill <name>` and `killall <name>` search for and signal processes matching the specified process name.\n\n```bash\npkill node\n```",
    "workedExample": {
      "title": "Worked Example: Terminating Processes by Name (killall & pkill)",
      "code": "pkill node",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Terminating Processes by Name (killall & pkill).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Terminating Processes by Name (killall & pkill).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Kill all running instances of node\n# TODO: Write command below\n",
    "solutionCode": "pkill node",
    "hints": [
      "Write:\npkill node"
    ],
    "testCases": [
      {
        "id": "bash-83-tc-1",
        "description": "Verifies correct implementation for Terminating Processes by Name (killall & pkill)",
        "testFn": "code.includes('pkill ') || code.includes('killall ')"
      }
    ]
  },
  {
    "id": "bash-84-understanding-common-unix-signal",
    "title": "84. Understanding Common Unix Signals (SIGHUP, SIGINT)",
    "slug": "lesson-84-understanding-common-unix-signal",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Understanding Common Unix Signals (SIGHUP, SIGINT) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Understanding Common Unix Signals (SIGHUP, SIGINT)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Flashing a stop sign in front of a runner to pause them gracefully.",
    "explanationMarkdown": "### Understanding Common Unix Signals (SIGHUP, SIGINT)\n\nSignals communicate events: SIGINT (2: Ctrl+C), SIGTERM (15: Stop), SIGHUP (1: Reload config), SIGKILL (9: Die).\n\n```bash\nkill -2 1234\n```",
    "workedExample": {
      "title": "Worked Example: Understanding Common Unix Signals (SIGHUP, SIGINT)",
      "code": "kill -2 1234",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding Common Unix Signals (SIGHUP, SIGINT).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding Common Unix Signals (SIGHUP, SIGINT).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Send interrupt signal (Ctrl+C equivalent)\n# TODO: Write command below\n",
    "solutionCode": "kill -2 1234",
    "hints": [
      "Write:\nkill -2 1234"
    ],
    "testCases": [
      {
        "id": "bash-84-tc-1",
        "description": "Verifies correct implementation for Understanding Common Unix Signals (SIGHUP, SIGINT)",
        "testFn": "code.includes('kill -2') || code.includes('kill -SIGINT')"
      }
    ]
  },
  {
    "id": "bash-85-running-background-jobs-with-amp",
    "title": "85. Running Background Jobs with Ampersand (&)",
    "slug": "lesson-85-running-background-jobs-with-amp",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Running Background Jobs with Ampersand (&) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Running Background Jobs with Ampersand (&)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Sending an automated robot out to sweep the warehouse while you continue reading blueprints at your desk.",
    "explanationMarkdown": "### Running Background Jobs with Ampersand (&)\n\nAppending `&` to a command runs it as an asynchronous background job, returning the prompt immediately.\n\n```bash\n./worker.sh &\n```",
    "workedExample": {
      "title": "Worked Example: Running Background Jobs with Ampersand (&)",
      "code": "./worker.sh &",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Running Background Jobs with Ampersand (&).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Running Background Jobs with Ampersand (&).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run script in background detached from terminal input\n# TODO: Write command below\n",
    "solutionCode": "./worker.sh &",
    "hints": [
      "Write:\n./worker.sh &"
    ],
    "testCases": [
      {
        "id": "bash-85-tc-1",
        "description": "Verifies correct implementation for Running Background Jobs with Ampersand (&)",
        "testFn": "code.includes('&')"
      }
    ]
  },
  {
    "id": "bash-86-job-control-jobs,-fg,-and-bg",
    "title": "86. Job Control: jobs, fg, and bg",
    "slug": "lesson-86-job-control-jobs,-fg,-and-bg",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Job Control: jobs, fg, and bg in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Job Control",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A juggler keeping three balls spinning in the air while holding one ball in their active hand.",
    "explanationMarkdown": "### Job Control: jobs, fg, and bg\n\n`jobs` lists active background tasks; `fg %1` brings Job #1 to the foreground; `bg %1` resumes in background.\n\n```bash\njobs\n```",
    "workedExample": {
      "title": "Worked Example: Job Control: jobs, fg, and bg",
      "code": "jobs",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Job Control: jobs, fg, and bg.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Job Control: jobs, fg, and bg.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List background jobs in current shell\n# TODO: Write command below\n",
    "solutionCode": "jobs",
    "hints": [
      "Write:\njobs"
    ],
    "testCases": [
      {
        "id": "bash-86-tc-1",
        "description": "Verifies correct implementation for Job Control: jobs, fg, and bg",
        "testFn": "code.includes('jobs')"
      }
    ]
  },
  {
    "id": "bash-87-pausing-processes-with-ctrl+z",
    "title": "87. Pausing Processes with Ctrl+Z",
    "slug": "lesson-87-pausing-processes-with-ctrl+z",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pausing Processes with Ctrl+Z in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Pausing Processes with Ctrl+Z",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Freezing a video game by pressing the 'Pause' button so you can go get a glass of water.",
    "explanationMarkdown": "### Pausing Processes with Ctrl+Z\n\n`Ctrl+Z` sends SIGTSTP pausing the active process; typing `bg` allows the paused process to resume in background.\n\n```bash\nbg\n```",
    "workedExample": {
      "title": "Worked Example: Pausing Processes with Ctrl+Z",
      "code": "bg",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pausing Processes with Ctrl+Z.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pausing Processes with Ctrl+Z.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Pause foreground job and background it Ctrl+Z then bg\n# TODO: Write command below\n",
    "solutionCode": "bg",
    "hints": [
      "Write:\nbg"
    ],
    "testCases": [
      {
        "id": "bash-87-tc-1",
        "description": "Verifies correct implementation for Pausing Processes with Ctrl+Z",
        "testFn": "code.includes('bg')"
      }
    ]
  },
  {
    "id": "bash-88-immunity-to-terminal-hangup-with",
    "title": "88. Immunity to Terminal Hangup with nohup",
    "slug": "lesson-88-immunity-to-terminal-hangup-with",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Immunity to Terminal Hangup with nohup in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Immunity to Terminal Hangup with nohup",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A self-driving car continuing its cross-country journey even after you hang up the telephone.",
    "explanationMarkdown": "### Immunity to Terminal Hangup with nohup\n\n`nohup` (No Hang Up) intercepts SIGHUP signals so commands continue running even if your SSH session drops!\n\n```bash\nnohup ./long_task.sh > output.log 2>&1 &\n```",
    "workedExample": {
      "title": "Worked Example: Immunity to Terminal Hangup with nohup",
      "code": "nohup ./long_task.sh > output.log 2>&1 &",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Immunity to Terminal Hangup with nohup.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Immunity to Terminal Hangup with nohup.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run long-running job immune to SSH disconnection\n# TODO: Write command below\n",
    "solutionCode": "nohup ./long_task.sh > output.log 2>&1 &",
    "hints": [
      "Write:\nnohup ./long_task.sh > output.log 2>&1 &"
    ],
    "testCases": [
      {
        "id": "bash-88-tc-1",
        "description": "Verifies correct implementation for Immunity to Terminal Hangup with nohup",
        "testFn": "code.includes('nohup ')"
      }
    ]
  },
  {
    "id": "bash-89-process-priority-and-niceness-ni",
    "title": "89. Process Priority and Niceness: nice and renice",
    "slug": "lesson-89-process-priority-and-niceness-ni",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Process Priority and Niceness: nice and renice in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Process Priority and Niceness",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A polite gentleman standing aside and letting everyone else in line board the bus first (high niceness).",
    "explanationMarkdown": "### Process Priority and Niceness: nice and renice\n\nNiceness ranges from -20 (highest priority) to +19 (lowest priority, very nice to other processes).\n\n```bash\nnice -n 19 ./heavy_computation.sh\n```",
    "workedExample": {
      "title": "Worked Example: Process Priority and Niceness: nice and renice",
      "code": "nice -n 19 ./heavy_computation.sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Process Priority and Niceness: nice and renice.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Process Priority and Niceness: nice and renice.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Launch process with low priority (high niceness)\n# TODO: Write command below\n",
    "solutionCode": "nice -n 19 ./heavy_computation.sh",
    "hints": [
      "Write:\nnice -n 19 ./heavy_computation.sh"
    ],
    "testCases": [
      {
        "id": "bash-89-tc-1",
        "description": "Verifies correct implementation for Process Priority and Niceness: nice and renice",
        "testFn": "code.includes('nice -n') || code.includes('nice ')"
      }
    ]
  },
  {
    "id": "bash-90-system-load-averages-explained-1",
    "title": "90. System Load Averages Explained (1, 5, 15 Minutes)",
    "slug": "lesson-90-system-load-averages-explained-1",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master System Load Averages Explained (1, 5, 15 Minutes) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "System Load Averages Explained (1, 5, 15 Minutes)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Traffic congestion on a bridge: 1.0 means the single-lane bridge is exactly 100% full; 2.0 means cars are waiting in line.",
    "explanationMarkdown": "### System Load Averages Explained (1, 5, 15 Minutes)\n\nLoad averages reflect the average number of processes in runnable or uninterruptible sleep states.\n\n```bash\nuptime\n```",
    "workedExample": {
      "title": "Worked Example: System Load Averages Explained (1, 5, 15 Minutes)",
      "code": "uptime",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for System Load Averages Explained (1, 5, 15 Minutes).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of System Load Averages Explained (1, 5, 15 Minutes).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect system load averages\n# TODO: Write command below\n",
    "solutionCode": "uptime",
    "hints": [
      "Write:\nuptime"
    ],
    "testCases": [
      {
        "id": "bash-90-tc-1",
        "description": "Verifies correct implementation for System Load Averages Explained (1, 5, 15 Minutes)",
        "testFn": "code.includes('uptime')"
      }
    ]
  },
  {
    "id": "bash-91-finding-open-files-and-ports-wit",
    "title": "91. Finding Open Files and Ports with lsof",
    "slug": "lesson-91-finding-open-files-and-ports-wit",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Finding Open Files and Ports with lsof in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Finding Open Files and Ports with lsof",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A security guard checking which office employee is currently holding the key to Conference Room 3000.",
    "explanationMarkdown": "### Finding Open Files and Ports with lsof\n\n`lsof` (List Open Files) reveals which processes are holding specific files, network sockets, or ports open.\n\n```bash\nlsof -i :3000\n```",
    "workedExample": {
      "title": "Worked Example: Finding Open Files and Ports with lsof",
      "code": "lsof -i :3000",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding Open Files and Ports with lsof.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding Open Files and Ports with lsof.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find process listening on port 3000\n# TODO: Write command below\n",
    "solutionCode": "lsof -i :3000",
    "hints": [
      "Write:\nlsof -i :3000"
    ],
    "testCases": [
      {
        "id": "bash-91-tc-1",
        "description": "Verifies correct implementation for Finding Open Files and Ports with lsof",
        "testFn": "code.includes('lsof -i')"
      }
    ]
  },
  {
    "id": "bash-92-finding-processes-holding-resour",
    "title": "92. Finding Processes Holding Resources with fuser",
    "slug": "lesson-92-finding-processes-holding-resour",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Finding Processes Holding Resources with fuser in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Finding Processes Holding Resources with fuser",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Evicting an unauthorized car parked in your assigned parking space so you can park.",
    "explanationMarkdown": "### Finding Processes Holding Resources with fuser\n\n`fuser -k <port>/tcp` identifies and terminates any rogue process locking a specific network port.\n\n```bash\nfuser -k 8080/tcp\n```",
    "workedExample": {
      "title": "Worked Example: Finding Processes Holding Resources with fuser",
      "code": "fuser -k 8080/tcp",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding Processes Holding Resources with fuser.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding Processes Holding Resources with fuser.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Find and kill process locking a port\n# TODO: Write command below\n",
    "solutionCode": "fuser -k 8080/tcp",
    "hints": [
      "Write:\nfuser -k 8080/tcp"
    ],
    "testCases": [
      {
        "id": "bash-92-tc-1",
        "description": "Verifies correct implementation for Finding Processes Holding Resources with fuser",
        "testFn": "code.includes('fuser ')"
      }
    ]
  },
  {
    "id": "bash-93-module-6-review-process-orchestr",
    "title": "93. Module 6 Review: Process Orchestration Capstone",
    "slug": "lesson-93-module-6-review-process-orchestr",
    "language": "bash",
    "category": "Module 6: Process Management & Job Control",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 6 Review: Process Orchestration Capstone in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An air traffic controller safely coordinating dozens of takeoffs, landings, and holding patterns.",
    "explanationMarkdown": "### Module 6 Review: Process Orchestration Capstone\n\nMastery over process trees, signal handling, background job control, nohup persistence, and port auditing.\n\n```bash\nuptime\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Process Orchestration Capstone",
      "code": "uptime",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Process Orchestration Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Process Orchestration Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check system process count and health\n# TODO: Write command below\n",
    "solutionCode": "uptime",
    "hints": [
      "Write:\nuptime"
    ],
    "testCases": [
      {
        "id": "bash-93-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Process Orchestration Capstone",
        "testFn": "code.includes('uptime')"
      }
    ]
  },
  {
    "id": "bash-94-the-shebang-line-#!-usr-bin-env-",
    "title": "94. The Shebang Line: #!/usr/bin/env bash",
    "slug": "lesson-94-the-shebang-line-#!-usr-bin-env-",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Shebang Line: #!/usr/bin/env bash in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Shebang Line",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "The header label on a music tape telling the stereo player which decoder chip to use.",
    "explanationMarkdown": "### The Shebang Line: #!/usr/bin/env bash\n\nThe shebang (`#!`) on line 1 instructs the kernel which interpreter binary to use to execute the script.\n\n```bash\n#!/usr/bin/env bash\necho \"Script initialized\"\n```",
    "workedExample": {
      "title": "Worked Example: The Shebang Line: #!/usr/bin/env bash",
      "code": "#!/usr/bin/env bash\necho \"Script initialized\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Shebang Line: #!/usr/bin/env bash.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Shebang Line: #!/usr/bin/env bash.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: !/usr/bin/env bash\n# TODO: Write command below\n",
    "solutionCode": "#!/usr/bin/env bash\necho \"Script initialized\"",
    "hints": [
      "Write:\n#!/usr/bin/env bash\necho \"Script initialized\""
    ],
    "testCases": [
      {
        "id": "bash-94-tc-1",
        "description": "Verifies correct implementation for The Shebang Line: #!/usr/bin/env bash",
        "testFn": "code.includes('#!/usr/bin/env bash') || code.includes('#!/bin/bash')"
      }
    ]
  },
  {
    "id": "bash-95-variables-declaration-no-spaces-",
    "title": "95. Variables Declaration: No Spaces Around Equals!",
    "slug": "lesson-95-variables-declaration-no-spaces-",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Variables Declaration: No Spaces Around Equals! in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Variables Declaration",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Sticking an adhesive name tag onto a desk: no gap allowed between the tape and the wood.",
    "explanationMarkdown": "### Variables Declaration: No Spaces Around Equals!\n\nIn Bash, assignment syntax must NOT have spaces: `VAR=\"value\"` (writing `VAR = \"value\"` throws command not found!).\n\n```bash\nAPP_NAME=\"DevForge\"\necho \"Running $APP_NAME\"\n```",
    "workedExample": {
      "title": "Worked Example: Variables Declaration: No Spaces Around Equals!",
      "code": "APP_NAME=\"DevForge\"\necho \"Running $APP_NAME\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variables Declaration: No Spaces Around Equals!.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variables Declaration: No Spaces Around Equals!.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Declare and print variable\n# TODO: Write command below\n",
    "solutionCode": "APP_NAME=\"DevForge\"\necho \"Running $APP_NAME\"",
    "hints": [
      "Write:\nAPP_NAME=\"DevForge\"\necho \"Running $APP_NAME\""
    ],
    "testCases": [
      {
        "id": "bash-95-tc-1",
        "description": "Verifies correct implementation for Variables Declaration: No Spaces Around Equals!",
        "testFn": "code.includes('=\"') || code.includes('=\\'') || code.includes('=$')"
      }
    ]
  },
  {
    "id": "bash-96-variable-expansion-$var-vs-${var",
    "title": "96. Variable Expansion: $var vs ${var}",
    "slug": "lesson-96-variable-expansion-$var-vs-${var",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Variable Expansion: $var vs ${var} in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Variable Expansion",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Putting braces around a word root so suffixes like '_production' don't get swallowed into the variable name.",
    "explanationMarkdown": "### Variable Expansion: $var vs ${var}\n\nUse `${VAR}` syntax to disambiguate variable names from adjacent characters and for parameter expansion.\n\n```bash\nPREFIX=\"dev\"\necho \"Environment: ${PREFIX}_production\"\n```",
    "workedExample": {
      "title": "Worked Example: Variable Expansion: $var vs ${var}",
      "code": "PREFIX=\"dev\"\necho \"Environment: ${PREFIX}_production\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Variable Expansion: $var vs ${var}.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Variable Expansion: $var vs ${var}.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Concatenate variable cleanly\n# TODO: Write command below\n",
    "solutionCode": "PREFIX=\"dev\"\necho \"Environment: ${PREFIX}_production\"",
    "hints": [
      "Write:\nPREFIX=\"dev\"\necho \"Environment: ${PREFIX}_production\""
    ],
    "testCases": [
      {
        "id": "bash-96-tc-1",
        "description": "Verifies correct implementation for Variable Expansion: $var vs ${var}",
        "testFn": "code.includes('${') && code.includes('}')"
      }
    ]
  },
  {
    "id": "bash-97-command-substitution-$command",
    "title": "97. Command Substitution: $(command)",
    "slug": "lesson-97-command-substitution-$command",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Command Substitution: $(command) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Command Substitution",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Sending a courier to check the wall clock and writing their spoken answer onto your clipboard.",
    "explanationMarkdown": "### Command Substitution: $(command)\n\n`$(cmd)` executes a command in a subshell and substitutes its standard output into the variable.\n\n```bash\nCURRENT_DATE=$(date +%Y-%m-%d)\necho \"Backup date: $CURRENT_DATE\"\n```",
    "workedExample": {
      "title": "Worked Example: Command Substitution: $(command)",
      "code": "CURRENT_DATE=$(date +%Y-%m-%d)\necho \"Backup date: $CURRENT_DATE\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Command Substitution: $(command).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Command Substitution: $(command).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Capture current date in variable\n# TODO: Write command below\n",
    "solutionCode": "CURRENT_DATE=$(date +%Y-%m-%d)\necho \"Backup date: $CURRENT_DATE\"",
    "hints": [
      "Write:\nCURRENT_DATE=$(date +%Y-%m-%d)\necho \"Backup date: $CURRENT_DATE\""
    ],
    "testCases": [
      {
        "id": "bash-97-tc-1",
        "description": "Verifies correct implementation for Command Substitution: $(command)",
        "testFn": "code.includes('$(')"
      }
    ]
  },
  {
    "id": "bash-98-positional-parameters-$1,-$2,-..",
    "title": "98. Positional Parameters ($1, $2, ... $9)",
    "slug": "lesson-98-positional-parameters-$1,-$2,-..",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Positional Parameters ($1, $2, ... $9) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Positional Parameters ($1, $2, ... $9)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Numbered mailboxes on an apartment lobby wall: Box 1 holds Argument 1, Box 2 holds Argument 2.",
    "explanationMarkdown": "### Positional Parameters ($1, $2, ... $9)\n\nArguments passed to scripts are mapped to `$1`, `$2`, `$3`... Access arguments beyond 9 with `${10}`.\n\n```bash\n#!/usr/bin/env bash\necho \"First arg: $1, Second arg: $2\"\n```",
    "workedExample": {
      "title": "Worked Example: Positional Parameters ($1, $2, ... $9)",
      "code": "#!/usr/bin/env bash\necho \"First arg: $1, Second arg: $2\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Positional Parameters ($1, $2, ... $9).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Positional Parameters ($1, $2, ... $9).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: !/usr/bin/env bash\n# TODO: Write command below\n",
    "solutionCode": "#!/usr/bin/env bash\necho \"First arg: $1, Second arg: $2\"",
    "hints": [
      "Write:\n#!/usr/bin/env bash\necho \"First arg: $1, Second arg: $2\""
    ],
    "testCases": [
      {
        "id": "bash-98-tc-1",
        "description": "Verifies correct implementation for Positional Parameters ($1, $2, ... $9)",
        "testFn": "code.includes('$1') && code.includes('$2')"
      }
    ]
  },
  {
    "id": "bash-99-special-parameter-variables-$0,-",
    "title": "99. Special Parameter Variables: $0, $#, $@, $*",
    "slug": "lesson-99-special-parameter-variables-$0,-",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Special Parameter Variables: $0, $#, $@, $* in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Special Parameter Variables",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A flight manifest: the aircraft name ($0), passenger head count ($#), and full passenger names list ($@).",
    "explanationMarkdown": "### Special Parameter Variables: $0, $#, $@, $*\n\n`$0` is script name; `$#` is argument count; `$@` expands to individual quoted arguments (`\"$1\" \"$2\"`).\n\n```bash\n#!/usr/bin/env bash\necho \"Script: $0, Total args: $#, All: $@\"\n```",
    "workedExample": {
      "title": "Worked Example: Special Parameter Variables: $0, $#, $@, $*",
      "code": "#!/usr/bin/env bash\necho \"Script: $0, Total args: $#, All: $@\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Special Parameter Variables: $0, $#, $@, $*.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Special Parameter Variables: $0, $#, $@, $*.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: !/usr/bin/env bash\n# TODO: Write command below\n",
    "solutionCode": "#!/usr/bin/env bash\necho \"Script: $0, Total args: $#, All: $@\"",
    "hints": [
      "Write:\n#!/usr/bin/env bash\necho \"Script: $0, Total args: $#, All: $@\""
    ],
    "testCases": [
      {
        "id": "bash-99-tc-1",
        "description": "Verifies correct implementation for Special Parameter Variables: $0, $#, $@, $*",
        "testFn": "code.includes('$#') || code.includes('$@')"
      }
    ]
  },
  {
    "id": "bash-100-the-exit-status-variable-$?",
    "title": "100. The Exit Status Variable: $?",
    "slug": "lesson-100-the-exit-status-variable-$?",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Exit Status Variable: $? in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Exit Status Variable",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A traffic light flashing green (0: Success) or red (1: Error) immediately after a car crosses the intersection.",
    "explanationMarkdown": "### The Exit Status Variable: $?\n\n`$?` stores the numeric return status of the most recently executed foreground pipeline (0 = success).\n\n```bash\nls /tmp\necho \"Exit code was: $?\"\n```",
    "workedExample": {
      "title": "Worked Example: The Exit Status Variable: $?",
      "code": "ls /tmp\necho \"Exit code was: $?\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Exit Status Variable: $?.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Exit Status Variable: $?.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check exit code of previous command\n# TODO: Write command below\n",
    "solutionCode": "ls /tmp\necho \"Exit code was: $?\"",
    "hints": [
      "Write:\nls /tmp\necho \"Exit code was: $?\""
    ],
    "testCases": [
      {
        "id": "bash-100-tc-1",
        "description": "Verifies correct implementation for The Exit Status Variable: $?",
        "testFn": "code.includes('$?')"
      }
    ]
  },
  {
    "id": "bash-101-prompting-user-input-with-read",
    "title": "101. Prompting User Input with read",
    "slug": "lesson-101-prompting-user-input-with-read",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Prompting User Input with read in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Prompting User Input with read",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A bank teller asking: 'Please state your full name for the record'.",
    "explanationMarkdown": "### Prompting User Input with read\n\n`read -p \"Prompt: \" VAR` captures user keyboard input into a shell variable.\n\n```bash\nread -p \"Enter your name: \" USERNAME\necho \"Hello, $USERNAME\"\n```",
    "workedExample": {
      "title": "Worked Example: Prompting User Input with read",
      "code": "read -p \"Enter your name: \" USERNAME\necho \"Hello, $USERNAME\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Prompting User Input with read.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Prompting User Input with read.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Prompt for username\n# TODO: Write command below\n",
    "solutionCode": "read -p \"Enter your name: \" USERNAME\necho \"Hello, $USERNAME\"",
    "hints": [
      "Write:\nread -p \"Enter your name: \" USERNAME\necho \"Hello, $USERNAME\""
    ],
    "testCases": [
      {
        "id": "bash-101-tc-1",
        "description": "Verifies correct implementation for Prompting User Input with read",
        "testFn": "code.includes('read -p') || code.includes('read ')"
      }
    ]
  },
  {
    "id": "bash-102-silent-password-input-with-read-",
    "title": "102. Silent Password Input with read -s",
    "slug": "lesson-102-silent-password-input-with-read-",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Silent Password Input with read -s in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Silent Password Input with read -s",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Typing your PIN code at an ATM where no letters or numbers appear on the screen.",
    "explanationMarkdown": "### Silent Password Input with read -s\n\n`-s` (silent mode) hides typed characters from appearing on the screen, essential for passwords.\n\n```bash\nread -s -p \"Enter password: \" PASS\necho \"\"\n```",
    "workedExample": {
      "title": "Worked Example: Silent Password Input with read -s",
      "code": "read -s -p \"Enter password: \" PASS\necho \"\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Silent Password Input with read -s.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Silent Password Input with read -s.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Read password without echoing keystrokes to terminal\n# TODO: Write command below\n",
    "solutionCode": "read -s -p \"Enter password: \" PASS\necho \"\"",
    "hints": [
      "Write:\nread -s -p \"Enter password: \" PASS\necho \"\""
    ],
    "testCases": [
      {
        "id": "bash-102-tc-1",
        "description": "Verifies correct implementation for Silent Password Input with read -s",
        "testFn": "code.includes('read -s')"
      }
    ]
  },
  {
    "id": "bash-103-arithmetic-operations-with-$expr",
    "title": "103. Arithmetic Operations with $((expression))",
    "slug": "lesson-103-arithmetic-operations-with-$expr",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Arithmetic Operations with $((expression)) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Arithmetic Operations with $((expression))",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A pocket arithmetic calculator built directly into the keyboard.",
    "explanationMarkdown": "### Arithmetic Operations with $((expression))\n\n`$((A + B))` performs integer arithmetic (addition, subtraction, multiplication, division, modulo).\n\n```bash\nA=15\nB=25\nTOTAL=$((A + B))\necho \"Sum: $TOTAL\"\n```",
    "workedExample": {
      "title": "Worked Example: Arithmetic Operations with $((expression))",
      "code": "A=15\nB=25\nTOTAL=$((A + B))\necho \"Sum: $TOTAL\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Arithmetic Operations with $((expression)).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Arithmetic Operations with $((expression)).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Calculate total sum\n# TODO: Write command below\n",
    "solutionCode": "A=15\nB=25\nTOTAL=$((A + B))\necho \"Sum: $TOTAL\"",
    "hints": [
      "Write:\nA=15\nB=25\nTOTAL=$((A + B))\necho \"Sum: $TOTAL\""
    ],
    "testCases": [
      {
        "id": "bash-103-tc-1",
        "description": "Verifies correct implementation for Arithmetic Operations with $((expression))",
        "testFn": "code.includes('$((') && code.includes('))')"
      }
    ]
  },
  {
    "id": "bash-104-string-length-and-substring-slic",
    "title": "104. String Length and Substring Slicing",
    "slug": "lesson-104-string-length-and-substring-slic",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master String Length and Substring Slicing in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "String Length and Substring Slicing",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Using a ruler to measure a ribbon length and using scissors to snip off the first 8 centimeters.",
    "explanationMarkdown": "### String Length and Substring Slicing\n\n`${#VAR}` gives string length; `${VAR:offset:length}` extracts substrings without invoking external binaries.\n\n```bash\nSTR=\"DevForgeStudio\"\necho \"Length: ${#STR}, Substring: ${STR:0:8}\"\n```",
    "workedExample": {
      "title": "Worked Example: String Length and Substring Slicing",
      "code": "STR=\"DevForgeStudio\"\necho \"Length: ${#STR}, Substring: ${STR:0:8}\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Length and Substring Slicing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Length and Substring Slicing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Get string length and substring\n# TODO: Write command below\n",
    "solutionCode": "STR=\"DevForgeStudio\"\necho \"Length: ${#STR}, Substring: ${STR:0:8}\"",
    "hints": [
      "Write:\nSTR=\"DevForgeStudio\"\necho \"Length: ${#STR}, Substring: ${STR:0:8}\""
    ],
    "testCases": [
      {
        "id": "bash-104-tc-1",
        "description": "Verifies correct implementation for String Length and Substring Slicing",
        "testFn": "code.includes('${#') || code.includes(':0:')"
      }
    ]
  },
  {
    "id": "bash-105-default-variable-values-${var-de",
    "title": "105. Default Variable Values (${VAR:-default})",
    "slug": "lesson-105-default-variable-values-${var-de",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Default Variable Values (${VAR:-default}) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Default Variable Values (${VAR",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Setting the thermostat to 72\u00b0F if no guest has entered a custom room temperature.",
    "explanationMarkdown": "### Default Variable Values (${VAR:-default})\n\n`${VAR:-fallback}` evaluates to fallback if VAR is unset or empty, ensuring rock-solid defaults.\n\n```bash\nPORT=${PORT:-8080}\necho \"Listening on port $PORT\"\n```",
    "workedExample": {
      "title": "Worked Example: Default Variable Values (${VAR:-default})",
      "code": "PORT=${PORT:-8080}\necho \"Listening on port $PORT\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Default Variable Values (${VAR:-default}).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Default Variable Values (${VAR:-default}).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Fallback to default port if not set\n# TODO: Write command below\n",
    "solutionCode": "PORT=${PORT:-8080}\necho \"Listening on port $PORT\"",
    "hints": [
      "Write:\nPORT=${PORT:-8080}\necho \"Listening on port $PORT\""
    ],
    "testCases": [
      {
        "id": "bash-105-tc-1",
        "description": "Verifies correct implementation for Default Variable Values (${VAR:-default})",
        "testFn": "code.includes(':-')"
      }
    ]
  },
  {
    "id": "bash-106-environment-variables-vs-shell-v",
    "title": "106. Environment Variables vs Shell Variables (export)",
    "slug": "lesson-106-environment-variables-vs-shell-v",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Environment Variables vs Shell Variables (export) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Environment Variables vs Shell Variables (export)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Handing a visitor a company lanyard that allows them to access all department meeting rooms.",
    "explanationMarkdown": "### Environment Variables vs Shell Variables (export)\n\nVariables are private to the current shell unless `export` is called, copying them to child processes.\n\n```bash\nexport API_KEY=\"secret-token-xyz\"\n```",
    "workedExample": {
      "title": "Worked Example: Environment Variables vs Shell Variables (export)",
      "code": "export API_KEY=\"secret-token-xyz\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Environment Variables vs Shell Variables (export).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Environment Variables vs Shell Variables (export).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Export variable to child processes\n# TODO: Write command below\n",
    "solutionCode": "export API_KEY=\"secret-token-xyz\"",
    "hints": [
      "Write:\nexport API_KEY=\"secret-token-xyz\""
    ],
    "testCases": [
      {
        "id": "bash-106-tc-1",
        "description": "Verifies correct implementation for Environment Variables vs Shell Variables (export)",
        "testFn": "code.includes('export ')"
      }
    ]
  },
  {
    "id": "bash-107-sourcing-scripts-with-.-or-sourc",
    "title": "107. Sourcing Scripts with . or source",
    "slug": "lesson-107-sourcing-scripts-with-.-or-sourc",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Sourcing Scripts with . or source in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Sourcing Scripts with . or source",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Inviting a visiting professor into your classroom to share their lecture notes on your blackboard.",
    "explanationMarkdown": "### Sourcing Scripts with . or source\n\n`source <file>` (or `. <file>`) executes commands in the CURRENT shell session rather than a subshell.\n\n```bash\nsource ./utils.sh\n```",
    "workedExample": {
      "title": "Worked Example: Sourcing Scripts with . or source",
      "code": "source ./utils.sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sourcing Scripts with . or source.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sourcing Scripts with . or source.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Source helper functions into current environment\n# TODO: Write command below\n",
    "solutionCode": "source ./utils.sh",
    "hints": [
      "Write:\nsource ./utils.sh"
    ],
    "testCases": [
      {
        "id": "bash-107-tc-1",
        "description": "Verifies correct implementation for Sourcing Scripts with . or source",
        "testFn": "code.includes('source ') || code.includes('. ')"
      }
    ]
  },
  {
    "id": "bash-108-defensive-bash-boilerplate-set--",
    "title": "108. Defensive Bash Boilerplate: set -euo pipefail",
    "slug": "lesson-108-defensive-bash-boilerplate-set--",
    "language": "bash",
    "category": "Module 7: Bash Scripting Fundamentals",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Defensive Bash Boilerplate: set -euo pipefail in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Defensive Bash Boilerplate",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A circuit breaker tripping instantly if a fuse blows, a wire unplugs, or any pipe leaks.",
    "explanationMarkdown": "### Defensive Bash Boilerplate: set -euo pipefail\n\n`-e` exits on error; `-u` treats unset variables as errors; `-o pipefail` catches failures inside pipelines!\n\n```bash\nset -euo pipefail\necho \"Strict mode enabled\"\n```",
    "workedExample": {
      "title": "Worked Example: Defensive Bash Boilerplate: set -euo pipefail",
      "code": "set -euo pipefail\necho \"Strict mode enabled\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defensive Bash Boilerplate: set -euo pipefail.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defensive Bash Boilerplate: set -euo pipefail.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Enable strict error checking\n# TODO: Write command below\n",
    "solutionCode": "set -euo pipefail\necho \"Strict mode enabled\"",
    "hints": [
      "Write:\nset -euo pipefail\necho \"Strict mode enabled\""
    ],
    "testCases": [
      {
        "id": "bash-108-tc-1",
        "description": "Verifies correct implementation for Defensive Bash Boilerplate: set -euo pipefail",
        "testFn": "code.includes('set -euo pipefail')"
      }
    ]
  },
  {
    "id": "bash-109-the-test-command-[-]-vs-[[-]]",
    "title": "109. The Test Command: [ ] vs [[ ]]",
    "slug": "lesson-109-the-test-command-[-]-vs-[[-]]",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Test Command: [ ] vs [[ ]] in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Test Command",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Upgrading from a rusty mechanical balance scale to a modern digital electronic weight sensor.",
    "explanationMarkdown": "### The Test Command: [ ] vs [[ ]]\n\n`[[ ... ]]` is Bash's enhanced test construct supporting regex, globbing, and logical operators without escaping bugs.\n\n```bash\nif [[ 10 -gt 5 ]]; then echo \"Greater\"; fi\n```",
    "workedExample": {
      "title": "Worked Example: The Test Command: [ ] vs [[ ]]",
      "code": "if [[ 10 -gt 5 ]]; then echo \"Greater\"; fi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Test Command: [ ] vs [[ ]].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Test Command: [ ] vs [[ ]].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Modern bash conditional test\n# TODO: Write command below\n",
    "solutionCode": "if [[ 10 -gt 5 ]]; then echo \"Greater\"; fi",
    "hints": [
      "Write:\nif [[ 10 -gt 5 ]]; then echo \"Greater\"; fi"
    ],
    "testCases": [
      {
        "id": "bash-109-tc-1",
        "description": "Verifies correct implementation for The Test Command: [ ] vs [[ ]]",
        "testFn": "code.includes('[[') && code.includes(']]')"
      }
    ]
  },
  {
    "id": "bash-110-integer-comparisons--eq,--ne,--l",
    "title": "110. Integer Comparisons (-eq, -ne, -lt, -gt)",
    "slug": "lesson-110-integer-comparisons--eq,--ne,--l",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Integer Comparisons (-eq, -ne, -lt, -gt) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Integer Comparisons (-eq, -ne, -lt, -gt)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Checking if a child is tall enough to ride the roller coaster.",
    "explanationMarkdown": "### Integer Comparisons (-eq, -ne, -lt, -gt)\n\nUse `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less/equal), `-gt` (greater than), `-ge` (greater/equal).\n\n```bash\nSCORE=85\nif [[ $SCORE -ge 80 ]]; then echo \"Passed\"; fi\n```",
    "workedExample": {
      "title": "Worked Example: Integer Comparisons (-eq, -ne, -lt, -gt)",
      "code": "SCORE=85\nif [[ $SCORE -ge 80 ]]; then echo \"Passed\"; fi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Integer Comparisons (-eq, -ne, -lt, -gt).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Integer Comparisons (-eq, -ne, -lt, -gt).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Compare integer scores\n# TODO: Write command below\n",
    "solutionCode": "SCORE=85\nif [[ $SCORE -ge 80 ]]; then echo \"Passed\"; fi",
    "hints": [
      "Write:\nSCORE=85\nif [[ $SCORE -ge 80 ]]; then echo \"Passed\"; fi"
    ],
    "testCases": [
      {
        "id": "bash-110-tc-1",
        "description": "Verifies correct implementation for Integer Comparisons (-eq, -ne, -lt, -gt)",
        "testFn": "code.includes('-ge') || code.includes('-gt') || code.includes('-eq')"
      }
    ]
  },
  {
    "id": "bash-111-string-comparisons-==,-!=,--z,--",
    "title": "111. String Comparisons (==, !=, -z, -n)",
    "slug": "lesson-111-string-comparisons-==,-!=,--z,--",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master String Comparisons (==, !=, -z, -n) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "String Comparisons (==, !=, -z, -n)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Checking if an envelope is completely empty (`-z`) or has a letter inside (`-n`).",
    "explanationMarkdown": "### String Comparisons (==, !=, -z, -n)\n\n`-z` checks if string length is zero; `-n` checks if non-empty; `==` and `!=` test string equality.\n\n```bash\nNAME=\"Sarah\"\nif [[ -n \"$NAME\" && \"$NAME\" == \"Sarah\" ]]; then echo \"Welcome Sarah\"; fi\n```",
    "workedExample": {
      "title": "Worked Example: String Comparisons (==, !=, -z, -n)",
      "code": "NAME=\"Sarah\"\nif [[ -n \"$NAME\" && \"$NAME\" == \"Sarah\" ]]; then echo \"Welcome Sarah\"; fi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Comparisons (==, !=, -z, -n).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Comparisons (==, !=, -z, -n).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check if string is empty or matches\n# TODO: Write command below\n",
    "solutionCode": "NAME=\"Sarah\"\nif [[ -n \"$NAME\" && \"$NAME\" == \"Sarah\" ]]; then echo \"Welcome Sarah\"; fi",
    "hints": [
      "Write:\nNAME=\"Sarah\"\nif [[ -n \"$NAME\" && \"$NAME\" == \"Sarah\" ]]; then echo \"Welcome Sarah\"; fi"
    ],
    "testCases": [
      {
        "id": "bash-111-tc-1",
        "description": "Verifies correct implementation for String Comparisons (==, !=, -z, -n)",
        "testFn": "code.includes('==') && (code.includes('-n') || code.includes('-z'))"
      }
    ]
  },
  {
    "id": "bash-112-file-attribute-checks--f,--d,--e",
    "title": "112. File Attribute Checks (-f, -d, -e)",
    "slug": "lesson-112-file-attribute-checks--f,--d,--e",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master File Attribute Checks (-f, -d, -e) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "File Attribute Checks (-f, -d, -e)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A property inspector verifying that a building exists (`-e`), is a house (`-f`), or a warehouse yard (`-d`).",
    "explanationMarkdown": "### File Attribute Checks (-f, -d, -e)\n\n`-f` checks if regular file exists; `-d` checks if directory; `-e` checks general existence; `-s` checks if non-empty.\n\n```bash\nif [[ -f \"config.json\" && -d \"src/\" ]]; then echo \"Project valid\"; fi\n```",
    "workedExample": {
      "title": "Worked Example: File Attribute Checks (-f, -d, -e)",
      "code": "if [[ -f \"config.json\" && -d \"src/\" ]]; then echo \"Project valid\"; fi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for File Attribute Checks (-f, -d, -e).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of File Attribute Checks (-f, -d, -e).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check if file and directory exist\n# TODO: Write command below\n",
    "solutionCode": "if [[ -f \"config.json\" && -d \"src/\" ]]; then echo \"Project valid\"; fi",
    "hints": [
      "Write:\nif [[ -f \"config.json\" && -d \"src/\" ]]; then echo \"Project valid\"; fi"
    ],
    "testCases": [
      {
        "id": "bash-112-tc-1",
        "description": "Verifies correct implementation for File Attribute Checks (-f, -d, -e)",
        "testFn": "code.includes('-f') || code.includes('-d')"
      }
    ]
  },
  {
    "id": "bash-113-file-permission-checks--r,--w,--",
    "title": "113. File Permission Checks (-r, -w, -x)",
    "slug": "lesson-113-file-permission-checks--r,--w,--",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master File Permission Checks (-r, -w, -x) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "File Permission Checks (-r, -w, -x)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A driver checking if the car ignition key turns before attempting to start the engine.",
    "explanationMarkdown": "### File Permission Checks (-r, -w, -x)\n\n`-r` checks readable; `-w` checks writable; `-x` checks executable permissions.\n\n```bash\nif [[ -x \"deploy.sh\" ]]; then ./deploy.sh; fi\n```",
    "workedExample": {
      "title": "Worked Example: File Permission Checks (-r, -w, -x)",
      "code": "if [[ -x \"deploy.sh\" ]]; then ./deploy.sh; fi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for File Permission Checks (-r, -w, -x).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of File Permission Checks (-r, -w, -x).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check if script is executable\n# TODO: Write command below\n",
    "solutionCode": "if [[ -x \"deploy.sh\" ]]; then ./deploy.sh; fi",
    "hints": [
      "Write:\nif [[ -x \"deploy.sh\" ]]; then ./deploy.sh; fi"
    ],
    "testCases": [
      {
        "id": "bash-113-tc-1",
        "description": "Verifies correct implementation for File Permission Checks (-r, -w, -x)",
        "testFn": "code.includes('-x') || code.includes('-r') || code.includes('-w')"
      }
    ]
  },
  {
    "id": "bash-114-if-else-conditional-branches-if,",
    "title": "114. If-Else Conditional Branches (if, elif, else, fi)",
    "slug": "lesson-114-if-else-conditional-branches-if,",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master If-Else Conditional Branches (if, elif, else, fi) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "If-Else Conditional Branches (if, elif, else, fi)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A fork in a hiking trail leading to the High Summit, Mid Meadow, or Low Valley camp.",
    "explanationMarkdown": "### If-Else Conditional Branches (if, elif, else, fi)\n\nMulti-branch decision logic: `if ...; then ...; elif ...; then ...; else ...; fi`.\n\n```bash\nVAL=10\nif [[ $VAL -gt 15 ]]; then\n  echo \"High\"\nelif [[ $VAL -gt 5 ]]; then\n  echo \"Medium\"\nelse\n  echo \"Low\"\nfi\n```",
    "workedExample": {
      "title": "Worked Example: If-Else Conditional Branches (if, elif, else, fi)",
      "code": "VAL=10\nif [[ $VAL -gt 15 ]]; then\n  echo \"High\"\nelif [[ $VAL -gt 5 ]]; then\n  echo \"Medium\"\nelse\n  echo \"Low\"\nfi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for If-Else Conditional Branches (if, elif, else, fi).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of If-Else Conditional Branches (if, elif, else, fi).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Complete conditional logic branch\n# TODO: Write command below\n",
    "solutionCode": "VAL=10\nif [[ $VAL -gt 15 ]]; then\n  echo \"High\"\nelif [[ $VAL -gt 5 ]]; then\n  echo \"Medium\"\nelse\n  echo \"Low\"\nfi",
    "hints": [
      "Write:\nVAL=10\nif [[ $VAL -gt 15 ]]; then\n  echo \"High\"\nelif [[ $VAL -gt 5 ]]; then\n  echo \"Medium\"\nelse\n  echo \"Low\"\nfi"
    ],
    "testCases": [
      {
        "id": "bash-114-tc-1",
        "description": "Verifies correct implementation for If-Else Conditional Branches (if, elif, else, fi)",
        "testFn": "code.includes('elif') && code.includes('fi')"
      }
    ]
  },
  {
    "id": "bash-115-short-circuit-boolean-operators-",
    "title": "115. Short-Circuit Boolean Operators (&& and ||)",
    "slug": "lesson-115-short-circuit-boolean-operators-",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Short-Circuit Boolean Operators (&& and ||) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Short-Circuit Boolean Operators (&& and ||)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "If the key fits, open the door; otherwise ring the doorbell.",
    "explanationMarkdown": "### Short-Circuit Boolean Operators (&& and ||)\n\n`cmd1 && cmd2` runs cmd2 only if cmd1 succeeds; `cmd1 || cmd2` runs cmd2 only if cmd1 fails.\n\n```bash\nmkdir -p logs && touch logs/app.log || echo \"Failed\"\n```",
    "workedExample": {
      "title": "Worked Example: Short-Circuit Boolean Operators (&& and ||)",
      "code": "mkdir -p logs && touch logs/app.log || echo \"Failed\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Short-Circuit Boolean Operators (&& and ||).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Short-Circuit Boolean Operators (&& and ||).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run command only if previous succeeded\n# TODO: Write command below\n",
    "solutionCode": "mkdir -p logs && touch logs/app.log || echo \"Failed\"",
    "hints": [
      "Write:\nmkdir -p logs && touch logs/app.log || echo \"Failed\""
    ],
    "testCases": [
      {
        "id": "bash-115-tc-1",
        "description": "Verifies correct implementation for Short-Circuit Boolean Operators (&& and ||)",
        "testFn": "code.includes('&&') && code.includes('||')"
      }
    ]
  },
  {
    "id": "bash-116-case-statements-for-pattern-matc",
    "title": "116. Case Statements for Pattern Matching",
    "slug": "lesson-116-case-statements-for-pattern-matc",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Case Statements for Pattern Matching in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Case Statements for Pattern Matching",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A sorting hat directing incoming students into Gryffindor, Ravenclaw, or Hufflepuff.",
    "explanationMarkdown": "### Case Statements for Pattern Matching\n\n`case ... in pattern) ... ;; esac` provides clean multi-option matching, avoiding messy nested if statements.\n\n```bash\nACTION=\"start\"\ncase \"$ACTION\" in\n  start) echo \"Starting server\" ;;\n  stop)  echo \"Stopping server\" ;;\n  *)     echo \"Unknown option\" ;;\nesac\n```",
    "workedExample": {
      "title": "Worked Example: Case Statements for Pattern Matching",
      "code": "ACTION=\"start\"\ncase \"$ACTION\" in\n  start) echo \"Starting server\" ;;\n  stop)  echo \"Stopping server\" ;;\n  *)     echo \"Unknown option\" ;;\nesac",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Case Statements for Pattern Matching.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Case Statements for Pattern Matching.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Match command options with case\n# TODO: Write command below\n",
    "solutionCode": "ACTION=\"start\"\ncase \"$ACTION\" in\n  start) echo \"Starting server\" ;;\n  stop)  echo \"Stopping server\" ;;\n  *)     echo \"Unknown option\" ;;\nesac",
    "hints": [
      "Write:\nACTION=\"start\"\ncase \"$ACTION\" in\n  start) echo \"Starting server\" ;;\n  stop)  echo \"Stopping server\" ;;\n  *)     echo \"Unknown option\" ;;\nesac"
    ],
    "testCases": [
      {
        "id": "bash-116-tc-1",
        "description": "Verifies correct implementation for Case Statements for Pattern Matching",
        "testFn": "code.includes('case ') && code.includes('esac')"
      }
    ]
  },
  {
    "id": "bash-117-for-loops-over-items-for-item-in",
    "title": "117. For Loops Over Items (for item in list)",
    "slug": "lesson-117-for-loops-over-items-for-item-in",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master For Loops Over Items (for item in list) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "For Loops Over Items (for item in list)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A delivery driver driving to House A, then House B, then House C to drop off packages.",
    "explanationMarkdown": "### For Loops Over Items (for item in list)\n\nLoops through a whitespace-separated list of items, executing the body for each item.\n\n```bash\nfor SVR in web1 web2 db1; do\n  echo \"Checking $SVR\"\ndone\n```",
    "workedExample": {
      "title": "Worked Example: For Loops Over Items (for item in list)",
      "code": "for SVR in web1 web2 db1; do\n  echo \"Checking $SVR\"\ndone",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for For Loops Over Items (for item in list).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of For Loops Over Items (for item in list).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Iterate over list of servers\n# TODO: Write command below\n",
    "solutionCode": "for SVR in web1 web2 db1; do\n  echo \"Checking $SVR\"\ndone",
    "hints": [
      "Write:\nfor SVR in web1 web2 db1; do\n  echo \"Checking $SVR\"\ndone"
    ],
    "testCases": [
      {
        "id": "bash-117-tc-1",
        "description": "Verifies correct implementation for For Loops Over Items (for item in list)",
        "testFn": "code.includes('for ') && code.includes('in ') && code.includes('done')"
      }
    ]
  },
  {
    "id": "bash-118-c-style-for-loops-in-bash",
    "title": "118. C-Style For Loops in Bash",
    "slug": "lesson-118-c-style-for-loops-in-bash",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master C-Style For Loops in Bash in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "C-Style For Loops in Bash",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Counting 5 pushups at the gym: Start at 1, increment by 1, stop when you hit 5.",
    "explanationMarkdown": "### C-Style For Loops in Bash\n\n`for ((i=0; i<N; i++))` provides traditional C-style index iteration directly in Bash.\n\n```bash\nfor ((i = 1; i <= 5; i++)); do\n  echo \"Count: $i\"\ndone\n```",
    "workedExample": {
      "title": "Worked Example: C-Style For Loops in Bash",
      "code": "for ((i = 1; i <= 5; i++)); do\n  echo \"Count: $i\"\ndone",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for C-Style For Loops in Bash.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of C-Style For Loops in Bash.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: C-style iteration loop\n# TODO: Write command below\n",
    "solutionCode": "for ((i = 1; i <= 5; i++)); do\n  echo \"Count: $i\"\ndone",
    "hints": [
      "Write:\nfor ((i = 1; i <= 5; i++)); do\n  echo \"Count: $i\"\ndone"
    ],
    "testCases": [
      {
        "id": "bash-118-tc-1",
        "description": "Verifies correct implementation for C-Style For Loops in Bash",
        "testFn": "code.includes('for ((') && code.includes('))')"
      }
    ]
  },
  {
    "id": "bash-119-integer-range-sequences-{1..10}",
    "title": "119. Integer Range Sequences ({1..10})",
    "slug": "lesson-119-integer-range-sequences-{1..10}",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Integer Range Sequences ({1..10}) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Integer Range Sequences ({1..10})",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reading pages 1 through 10 of a textbook chapter.",
    "explanationMarkdown": "### Integer Range Sequences ({1..10})\n\n`{start..end..step}` brace expansion generates integer sequences without spawning external subshells.\n\n```bash\nfor NUM in {1..5}; do\n  echo \"Step $NUM\"\ndone\n```",
    "workedExample": {
      "title": "Worked Example: Integer Range Sequences ({1..10})",
      "code": "for NUM in {1..5}; do\n  echo \"Step $NUM\"\ndone",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Integer Range Sequences ({1..10}).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Integer Range Sequences ({1..10}).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Iterate through numeric range\n# TODO: Write command below\n",
    "solutionCode": "for NUM in {1..5}; do\n  echo \"Step $NUM\"\ndone",
    "hints": [
      "Write:\nfor NUM in {1..5}; do\n  echo \"Step $NUM\"\ndone"
    ],
    "testCases": [
      {
        "id": "bash-119-tc-1",
        "description": "Verifies correct implementation for Integer Range Sequences ({1..10})",
        "testFn": "code.includes('{1..') || code.includes('seq ')"
      }
    ]
  },
  {
    "id": "bash-120-while-loops-reading-files-line-b",
    "title": "120. While Loops Reading Files Line-by-Line",
    "slug": "lesson-120-while-loops-reading-files-line-b",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master While Loops Reading Files Line-by-Line in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "While Loops Reading Files Line-by-Line",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reading through a stack of index cards one card at a time from top to bottom.",
    "explanationMarkdown": "### While Loops Reading Files Line-by-Line\n\n`while IFS= read -r line; do ... done < file` is the gold standard for reading files without trimming spaces.\n\n```bash\nwhile IFS= read -r LINE; do\n  echo \"Line: $LINE\"\ndone < /dev/null\n```",
    "workedExample": {
      "title": "Worked Example: While Loops Reading Files Line-by-Line",
      "code": "while IFS= read -r LINE; do\n  echo \"Line: $LINE\"\ndone < /dev/null",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for While Loops Reading Files Line-by-Line.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of While Loops Reading Files Line-by-Line.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Read CSV file line by line safely\n# TODO: Write command below\n",
    "solutionCode": "while IFS= read -r LINE; do\n  echo \"Line: $LINE\"\ndone < /dev/null",
    "hints": [
      "Write:\nwhile IFS= read -r LINE; do\n  echo \"Line: $LINE\"\ndone < /dev/null"
    ],
    "testCases": [
      {
        "id": "bash-120-tc-1",
        "description": "Verifies correct implementation for While Loops Reading Files Line-by-Line",
        "testFn": "code.includes('while IFS= read -r') || code.includes('while read')"
      }
    ]
  },
  {
    "id": "bash-121-until-loops-in-bash",
    "title": "121. Until Loops in Bash",
    "slug": "lesson-121-until-loops-in-bash",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Until Loops in Bash in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Until Loops in Bash",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Boiling water on a stove: keep waiting until the water temperature reaches 100\u00b0C.",
    "explanationMarkdown": "### Until Loops in Bash\n\n`until` executes its loop body as long as the test condition evaluates to false (opposite of while).\n\n```bash\nCOUNT=3\nuntil [[ $COUNT -le 0 ]]; do\n  echo \"Countdown: $COUNT\"\n  COUNT=$((COUNT - 1))\ndone\n```",
    "workedExample": {
      "title": "Worked Example: Until Loops in Bash",
      "code": "COUNT=3\nuntil [[ $COUNT -le 0 ]]; do\n  echo \"Countdown: $COUNT\"\n  COUNT=$((COUNT - 1))\ndone",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Until Loops in Bash.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Until Loops in Bash.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Loop until condition becomes true\n# TODO: Write command below\n",
    "solutionCode": "COUNT=3\nuntil [[ $COUNT -le 0 ]]; do\n  echo \"Countdown: $COUNT\"\n  COUNT=$((COUNT - 1))\ndone",
    "hints": [
      "Write:\nCOUNT=3\nuntil [[ $COUNT -le 0 ]]; do\n  echo \"Countdown: $COUNT\"\n  COUNT=$((COUNT - 1))\ndone"
    ],
    "testCases": [
      {
        "id": "bash-121-tc-1",
        "description": "Verifies correct implementation for Until Loops in Bash",
        "testFn": "code.includes('until [[') || code.includes('until ')"
      }
    ]
  },
  {
    "id": "bash-122-loop-control-break-and-continue",
    "title": "122. Loop Control: break and continue",
    "slug": "lesson-122-loop-control-break-and-continue",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Loop Control: break and continue in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Loop Control",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Skipping over a pothole in the road (continue) vs pulling over and ending the road trip (break).",
    "explanationMarkdown": "### Loop Control: break and continue\n\n`continue` skips immediately to the next loop iteration; `break` terminates the loop entirely.\n\n```bash\nfor i in {1..10}; do\n  if [[ $((i % 2)) -eq 0 ]]; then continue; fi\n  if [[ $i -gt 7 ]]; then break; fi\n  echo \"Odd: $i\"\ndone\n```",
    "workedExample": {
      "title": "Worked Example: Loop Control: break and continue",
      "code": "for i in {1..10}; do\n  if [[ $((i % 2)) -eq 0 ]]; then continue; fi\n  if [[ $i -gt 7 ]]; then break; fi\n  echo \"Odd: $i\"\ndone",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Loop Control: break and continue.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Loop Control: break and continue.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Skip even numbers and stop at 7\n# TODO: Write command below\n",
    "solutionCode": "for i in {1..10}; do\n  if [[ $((i % 2)) -eq 0 ]]; then continue; fi\n  if [[ $i -gt 7 ]]; then break; fi\n  echo \"Odd: $i\"\ndone",
    "hints": [
      "Write:\nfor i in {1..10}; do\n  if [[ $((i % 2)) -eq 0 ]]; then continue; fi\n  if [[ $i -gt 7 ]]; then break; fi\n  echo \"Odd: $i\"\ndone"
    ],
    "testCases": [
      {
        "id": "bash-122-tc-1",
        "description": "Verifies correct implementation for Loop Control: break and continue",
        "testFn": "code.includes('continue') && code.includes('break')"
      }
    ]
  },
  {
    "id": "bash-123-defining-and-calling-shell-funct",
    "title": "123. Defining and Calling Shell Functions",
    "slug": "lesson-123-defining-and-calling-shell-funct",
    "language": "bash",
    "category": "Module 8: Control Flow & Logic in Bash",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Defining and Calling Shell Functions in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Defining and Calling Shell Functions",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A pre-recorded telephone hotline greeting that can be replayed anytime a caller dials in.",
    "explanationMarkdown": "### Defining and Calling Shell Functions\n\nFunctions encapsulate reusable logic; use `local` variables to prevent variable contamination in the global shell scope.\n\n```bash\nlog_message() {\n  local MSG=\"$1\"\n  echo \"[$(date +%T)] $MSG\"\n  return 0\n}\nlog_message \"System ready\"\n```",
    "workedExample": {
      "title": "Worked Example: Defining and Calling Shell Functions",
      "code": "log_message() {\n  local MSG=\"$1\"\n  echo \"[$(date +%T)] $MSG\"\n  return 0\n}\nlog_message \"System ready\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining and Calling Shell Functions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining and Calling Shell Functions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Define reusable function with return code\n# TODO: Write command below\n",
    "solutionCode": "log_message() {\n  local MSG=\"$1\"\n  echo \"[$(date +%T)] $MSG\"\n  return 0\n}\nlog_message \"System ready\"",
    "hints": [
      "Write:\nlog_message() {\n  local MSG=\"$1\"\n  echo \"[$(date +%T)] $MSG\"\n  return 0\n}\nlog_message \"System ready\""
    ],
    "testCases": [
      {
        "id": "bash-123-tc-1",
        "description": "Verifies correct implementation for Defining and Calling Shell Functions",
        "testFn": "code.includes('() {') && code.includes('local ')"
      }
    ]
  },
  {
    "id": "bash-124-the-cron-daemon-and-crontab-synt",
    "title": "124. The Cron Daemon and Crontab Syntax (m h dom mon dow)",
    "slug": "lesson-124-the-cron-daemon-and-crontab-synt",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Cron Daemon and Crontab Syntax (m h dom mon dow) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The Cron Daemon and Crontab Syntax (m h dom mon dow)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A grandfather clock programmed to ring every morning at 7:00 AM and every Sunday at midnight.",
    "explanationMarkdown": "### The Cron Daemon and Crontab Syntax (m h dom mon dow)\n\nCron executes scheduled jobs automatically: `* * * * *` (minute, hour, day of month, month, day of week).\n\n```bash\ncrontab -l\n```",
    "workedExample": {
      "title": "Worked Example: The Cron Daemon and Crontab Syntax (m h dom mon dow)",
      "code": "crontab -l",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Cron Daemon and Crontab Syntax (m h dom mon dow).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Cron Daemon and Crontab Syntax (m h dom mon dow).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View current user crontab schedule\n# TODO: Write command below\n",
    "solutionCode": "crontab -l",
    "hints": [
      "Write:\ncrontab -l"
    ],
    "testCases": [
      {
        "id": "bash-124-tc-1",
        "description": "Verifies correct implementation for The Cron Daemon and Crontab Syntax (m h dom mon dow)",
        "testFn": "code.includes('crontab ')"
      }
    ]
  },
  {
    "id": "bash-125-scheduling-daily-automated-backu",
    "title": "125. Scheduling Daily Automated Backups with Cron",
    "slug": "lesson-125-scheduling-daily-automated-backu",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Scheduling Daily Automated Backups with Cron in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Scheduling Daily Automated Backups with Cron",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A night janitor scheduled to mop the office floors at 2:30 AM every night after staff go home.",
    "explanationMarkdown": "### Scheduling Daily Automated Backups with Cron\n\n`30 2 * * * /path/to/script.sh` runs reliably every night at 2:30 AM.\n\n```bash\necho \"30 2 * * * /usr/local/bin/backup.sh\" >> mycron\n```",
    "workedExample": {
      "title": "Worked Example: Scheduling Daily Automated Backups with Cron",
      "code": "echo \"30 2 * * * /usr/local/bin/backup.sh\" >> mycron",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scheduling Daily Automated Backups with Cron.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scheduling Daily Automated Backups with Cron.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Run backup script every night at 2:30 AM\n# TODO: Write command below\n",
    "solutionCode": "echo \"30 2 * * * /usr/local/bin/backup.sh\" >> mycron",
    "hints": [
      "Write:\necho \"30 2 * * * /usr/local/bin/backup.sh\" >> mycron"
    ],
    "testCases": [
      {
        "id": "bash-125-tc-1",
        "description": "Verifies correct implementation for Scheduling Daily Automated Backups with Cron",
        "testFn": "code.includes('30 2 * * *') || code.includes('crontab')"
      }
    ]
  },
  {
    "id": "bash-126-modern-systemd-timers-as-cron-al",
    "title": "126. Modern Systemd Timers as Cron Alternatives",
    "slug": "lesson-126-modern-systemd-timers-as-cron-al",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Modern Systemd Timers as Cron Alternatives in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Modern Systemd Timers as Cron Alternatives",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An atomic digital clock synchronized with national time servers managing schedules with sub-second accuracy.",
    "explanationMarkdown": "### Modern Systemd Timers as Cron Alternatives\n\nSystemd timers offer nanosecond precision, monotonic event triggers (e.g. 15m after boot), and built-in journal logging.\n\n```bash\nsystemctl list-timers\n```",
    "workedExample": {
      "title": "Worked Example: Modern Systemd Timers as Cron Alternatives",
      "code": "systemctl list-timers",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Modern Systemd Timers as Cron Alternatives.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Modern Systemd Timers as Cron Alternatives.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List active systemd timers\n# TODO: Write command below\n",
    "solutionCode": "systemctl list-timers",
    "hints": [
      "Write:\nsystemctl list-timers"
    ],
    "testCases": [
      {
        "id": "bash-126-tc-1",
        "description": "Verifies correct implementation for Modern Systemd Timers as Cron Alternatives",
        "testFn": "code.includes('systemctl list-timers') || code.includes('list-timers')"
      }
    ]
  },
  {
    "id": "bash-127-one-time-delayed-execution-with-",
    "title": "127. One-Time Delayed Execution with the at Command",
    "slug": "lesson-127-one-time-delayed-execution-with-",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master One-Time Delayed Execution with the at Command in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "One-Time Delayed Execution with the at Command",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Setting an alarm to remind you to pick up dry cleaning once at 5:00 PM today.",
    "explanationMarkdown": "### One-Time Delayed Execution with the at Command\n\nThe `at` utility schedules a one-time command execution at a specified future time.\n\n```bash\necho \"./cleanup.sh\" | at 5:00 PM\n```",
    "workedExample": {
      "title": "Worked Example: One-Time Delayed Execution with the at Command",
      "code": "echo \"./cleanup.sh\" | at 5:00 PM",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for One-Time Delayed Execution with the at Command.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of One-Time Delayed Execution with the at Command.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Schedule one-time command for 5pm\n# TODO: Write command below\n",
    "solutionCode": "echo \"./cleanup.sh\" | at 5:00 PM",
    "hints": [
      "Write:\necho \"./cleanup.sh\" | at 5:00 PM"
    ],
    "testCases": [
      {
        "id": "bash-127-tc-1",
        "description": "Verifies correct implementation for One-Time Delayed Execution with the at Command",
        "testFn": "code.includes('at ')"
      }
    ]
  },
  {
    "id": "bash-128-testing-http-endpoints-with-curl",
    "title": "128. Testing HTTP Endpoints with curl",
    "slug": "lesson-128-testing-http-endpoints-with-curl",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Testing HTTP Endpoints with curl in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Testing HTTP Endpoints with curl",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Sending a telegram to a foreign outpost and checking the confirmation stamp on the return wire.",
    "explanationMarkdown": "### Testing HTTP Endpoints with curl\n\n`curl` transfers data across HTTP/HTTPS/FTP, supports custom headers, JSON POST payloads, and status assertions.\n\n```bash\ncurl -s -o /dev/null -w \"HTTP Code: %{http_code}\\n\" https://devforge.io\n```",
    "workedExample": {
      "title": "Worked Example: Testing HTTP Endpoints with curl",
      "code": "curl -s -o /dev/null -w \"HTTP Code: %{http_code}\\n\" https://devforge.io",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Testing HTTP Endpoints with curl.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Testing HTTP Endpoints with curl.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Test API health endpoint\n# TODO: Write command below\n",
    "solutionCode": "curl -s -o /dev/null -w \"HTTP Code: %{http_code}\\n\" https://devforge.io",
    "hints": [
      "Write:\ncurl -s -o /dev/null -w \"HTTP Code: %{http_code}\\n\" https://devforge.io"
    ],
    "testCases": [
      {
        "id": "bash-128-tc-1",
        "description": "Verifies correct implementation for Testing HTTP Endpoints with curl",
        "testFn": "code.includes('curl ')"
      }
    ]
  },
  {
    "id": "bash-129-automated-file-downloading-with-",
    "title": "129. Automated File Downloading with wget",
    "slug": "lesson-129-automated-file-downloading-with-",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Automated File Downloading with wget in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Automated File Downloading with wget",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A courier picking up a large package and automatically resuming the journey if traffic pauses.",
    "explanationMarkdown": "### Automated File Downloading with wget\n\n`wget` downloads files recursively (`-r`), resumes broken downloads (`-c`), and operates unattended.\n\n```bash\nwget -q -c https://example.com/data.tar.gz\n```",
    "workedExample": {
      "title": "Worked Example: Automated File Downloading with wget",
      "code": "wget -q -c https://example.com/data.tar.gz",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automated File Downloading with wget.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automated File Downloading with wget.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Download file in background\n# TODO: Write command below\n",
    "solutionCode": "wget -q -c https://example.com/data.tar.gz",
    "hints": [
      "Write:\nwget -q -c https://example.com/data.tar.gz"
    ],
    "testCases": [
      {
        "id": "bash-129-tc-1",
        "description": "Verifies correct implementation for Automated File Downloading with wget",
        "testFn": "code.includes('wget ')"
      }
    ]
  },
  {
    "id": "bash-130-network-connectivity-testing-wit",
    "title": "130. Network Connectivity Testing with ping",
    "slug": "lesson-130-network-connectivity-testing-wit",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Network Connectivity Testing with ping in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Network Connectivity Testing with ping",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A submarine sonar operator sending a 'ping' pulse through the water and measuring how many seconds until the echo bounces back.",
    "explanationMarkdown": "### Network Connectivity Testing with ping\n\n`ping` sends ICMP ECHO_REQUEST packets to measure round-trip latency and network packet loss.\n\n```bash\nping -c 3 8.8.8.8\n```",
    "workedExample": {
      "title": "Worked Example: Network Connectivity Testing with ping",
      "code": "ping -c 3 8.8.8.8",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Network Connectivity Testing with ping.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Network Connectivity Testing with ping.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Ping server 3 times\n# TODO: Write command below\n",
    "solutionCode": "ping -c 3 8.8.8.8",
    "hints": [
      "Write:\nping -c 3 8.8.8.8"
    ],
    "testCases": [
      {
        "id": "bash-130-tc-1",
        "description": "Verifies correct implementation for Network Connectivity Testing with ping",
        "testFn": "code.includes('ping -c') || code.includes('ping ')"
      }
    ]
  },
  {
    "id": "bash-131-tracing-route-hops-with-tracerou",
    "title": "131. Tracing Route Hops with traceroute & mtr",
    "slug": "lesson-131-tracing-route-hops-with-tracerou",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Tracing Route Hops with traceroute & mtr in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Tracing Route Hops with traceroute & mtr",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A road map tracing every single toll booth and highway junction your car drives through on a cross-country trip.",
    "explanationMarkdown": "### Tracing Route Hops with traceroute & mtr\n\nTraces each router hop along the IP packet route, pinpointing where network congestion or routing black holes occur.\n\n```bash\ntraceroute -m 5 8.8.8.8\n```",
    "workedExample": {
      "title": "Worked Example: Tracing Route Hops with traceroute & mtr",
      "code": "traceroute -m 5 8.8.8.8",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tracing Route Hops with traceroute & mtr.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tracing Route Hops with traceroute & mtr.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Trace network path to gateway\n# TODO: Write command below\n",
    "solutionCode": "traceroute -m 5 8.8.8.8",
    "hints": [
      "Write:\ntraceroute -m 5 8.8.8.8"
    ],
    "testCases": [
      {
        "id": "bash-131-tc-1",
        "description": "Verifies correct implementation for Tracing Route Hops with traceroute & mtr",
        "testFn": "code.includes('traceroute') || code.includes('mtr ')"
      }
    ]
  },
  {
    "id": "bash-132-socket-statistics-with-ss-and-ne",
    "title": "132. Socket Statistics with ss and netstat",
    "slug": "lesson-132-socket-statistics-with-ss-and-ne",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Socket Statistics with ss and netstat in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Socket Statistics with ss and netstat",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An office directory showing which telephone extensions have receptionist desks actively answering calls.",
    "explanationMarkdown": "### Socket Statistics with ss and netstat\n\n`ss -tulpn` lists all listening TCP and UDP sockets along with their process names and port bindings.\n\n```bash\nss -tulpn\n```",
    "workedExample": {
      "title": "Worked Example: Socket Statistics with ss and netstat",
      "code": "ss -tulpn",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Socket Statistics with ss and netstat.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Socket Statistics with ss and netstat.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: List listening TCP ports\n# TODO: Write command below\n",
    "solutionCode": "ss -tulpn",
    "hints": [
      "Write:\nss -tulpn"
    ],
    "testCases": [
      {
        "id": "bash-132-tc-1",
        "description": "Verifies correct implementation for Socket Statistics with ss and netstat",
        "testFn": "code.includes('ss -') || code.includes('netstat ')"
      }
    ]
  },
  {
    "id": "bash-133-inspecting-ip-interfaces-with-ip",
    "title": "133. Inspecting IP Interfaces with ip addr",
    "slug": "lesson-133-inspecting-ip-interfaces-with-ip",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Inspecting IP Interfaces with ip addr in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Inspecting IP Interfaces with ip addr",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Inspecting the vehicle registration plates on all delivery trucks in the company parking lot.",
    "explanationMarkdown": "### Inspecting IP Interfaces with ip addr\n\n`ip addr show` (modern replacement for `ifconfig`) shows network interface states, MAC addresses, and assigned IP addresses.\n\n```bash\nip addr show\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting IP Interfaces with ip addr",
      "code": "ip addr show",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting IP Interfaces with ip addr.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting IP Interfaces with ip addr.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Display network interface IP addresses\n# TODO: Write command below\n",
    "solutionCode": "ip addr show",
    "hints": [
      "Write:\nip addr show"
    ],
    "testCases": [
      {
        "id": "bash-133-tc-1",
        "description": "Verifies correct implementation for Inspecting IP Interfaces with ip addr",
        "testFn": "code.includes('ip addr') || code.includes('ifconfig')"
      }
    ]
  },
  {
    "id": "bash-134-dns-name-lookups-with-dig-and-ns",
    "title": "134. DNS Name Lookups with dig and nslookup",
    "slug": "lesson-134-dns-name-lookups-with-dig-and-ns",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master DNS Name Lookups with dig and nslookup in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "DNS Name Lookups with dig and nslookup",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Looking up a company's physical street address in the city yellow pages telephone directory.",
    "explanationMarkdown": "### DNS Name Lookups with dig and nslookup\n\n`dig` queries Domain Name System servers for A, AAAA, MX, CNAME, and TXT DNS records.\n\n```bash\ndig +short devforge.io\n```",
    "workedExample": {
      "title": "Worked Example: DNS Name Lookups with dig and nslookup",
      "code": "dig +short devforge.io",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DNS Name Lookups with dig and nslookup.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DNS Name Lookups with dig and nslookup.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Query DNS A-records\n# TODO: Write command below\n",
    "solutionCode": "dig +short devforge.io",
    "hints": [
      "Write:\ndig +short devforge.io"
    ],
    "testCases": [
      {
        "id": "bash-134-tc-1",
        "description": "Verifies correct implementation for DNS Name Lookups with dig and nslookup",
        "testFn": "code.includes('dig ') || code.includes('nslookup ')"
      }
    ]
  },
  {
    "id": "bash-135-secure-remote-shell-with-ssh",
    "title": "135. Secure Remote Shell with ssh",
    "slug": "lesson-135-secure-remote-shell-with-ssh",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Secure Remote Shell with ssh in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Secure Remote Shell with ssh",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An encrypted, quantum-locked teleportation door connecting directly to an office across the globe.",
    "explanationMarkdown": "### Secure Remote Shell with ssh\n\n`ssh` creates an encrypted shell connection to remote servers over port 22.\n\n```bash\nssh -p 22 deploy@server.devforge.io\n```",
    "workedExample": {
      "title": "Worked Example: Secure Remote Shell with ssh",
      "code": "ssh -p 22 deploy@server.devforge.io",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Secure Remote Shell with ssh.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Secure Remote Shell with ssh.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Connect securely to remote server\n# TODO: Write command below\n",
    "solutionCode": "ssh -p 22 deploy@server.devforge.io",
    "hints": [
      "Write:\nssh -p 22 deploy@server.devforge.io"
    ],
    "testCases": [
      {
        "id": "bash-135-tc-1",
        "description": "Verifies correct implementation for Secure Remote Shell with ssh",
        "testFn": "code.includes('ssh ')"
      }
    ]
  },
  {
    "id": "bash-136-generating-ssh-keys-ssh-keygen-&",
    "title": "136. Generating SSH Keys (ssh-keygen & ssh-copy-id)",
    "slug": "lesson-136-generating-ssh-keys-ssh-keygen-&",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Generating SSH Keys (ssh-keygen & ssh-copy-id) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Generating SSH Keys (ssh-keygen & ssh-copy-id)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Minting a cryptographic physical gold key and padlock: give the padlock to the server, keep the gold key in your pocket.",
    "explanationMarkdown": "### Generating SSH Keys (ssh-keygen & ssh-copy-id)\n\n`ssh-keygen -t ed25519` generates high-security keypairs; `ssh-copy-id` installs public keys on remote servers.\n\n```bash\nssh-keygen -t ed25519 -C \"admin@devforge.io\" -f ~/.ssh/id_ed25519 -N \"\"\n```",
    "workedExample": {
      "title": "Worked Example: Generating SSH Keys (ssh-keygen & ssh-copy-id)",
      "code": "ssh-keygen -t ed25519 -C \"admin@devforge.io\" -f ~/.ssh/id_ed25519 -N \"\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generating SSH Keys (ssh-keygen & ssh-copy-id).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generating SSH Keys (ssh-keygen & ssh-copy-id).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Generate modern Ed25519 SSH keypair\n# TODO: Write command below\n",
    "solutionCode": "ssh-keygen -t ed25519 -C \"admin@devforge.io\" -f ~/.ssh/id_ed25519 -N \"\"",
    "hints": [
      "Write:\nssh-keygen -t ed25519 -C \"admin@devforge.io\" -f ~/.ssh/id_ed25519 -N \"\""
    ],
    "testCases": [
      {
        "id": "bash-136-tc-1",
        "description": "Verifies correct implementation for Generating SSH Keys (ssh-keygen & ssh-copy-id)",
        "testFn": "code.includes('ssh-keygen')"
      }
    ]
  },
  {
    "id": "bash-137-incremental-file-synchronization",
    "title": "137. Incremental File Synchronization with rsync (-avz)",
    "slug": "lesson-137-incremental-file-synchronization",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Incremental File Synchronization with rsync (-avz) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Incremental File Synchronization with rsync (-avz)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Comparing two identical file cabinets and photocopying only the single page that changed since yesterday.",
    "explanationMarkdown": "### Incremental File Synchronization with rsync (-avz)\n\n`rsync -avz` synchronizes files across networks, transferring only modified byte chunks with compression and permission retention.\n\n```bash\nrsync -avz --delete src/ backup/\n```",
    "workedExample": {
      "title": "Worked Example: Incremental File Synchronization with rsync (-avz)",
      "code": "rsync -avz --delete src/ backup/",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Incremental File Synchronization with rsync (-avz).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Incremental File Synchronization with rsync (-avz).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Mirror directory incrementally over SSH\n# TODO: Write command below\n",
    "solutionCode": "rsync -avz --delete src/ backup/",
    "hints": [
      "Write:\nrsync -avz --delete src/ backup/"
    ],
    "testCases": [
      {
        "id": "bash-137-tc-1",
        "description": "Verifies correct implementation for Incremental File Synchronization with rsync (-avz)",
        "testFn": "code.includes('rsync -avz') || code.includes('rsync ')"
      }
    ]
  },
  {
    "id": "bash-138-module-9-review-automated-infras",
    "title": "138. Module 9 Review: Automated Infrastructure Maintenance",
    "slug": "lesson-138-module-9-review-automated-infras",
    "language": "bash",
    "category": "Module 9: System Automation, Cron & Networking",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module 9 Review: Automated Infrastructure Maintenance in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A fully automated self-driving maintenance fleet keeping highway bridges, lights, and pavement in peak repair.",
    "explanationMarkdown": "### Module 9 Review: Automated Infrastructure Maintenance\n\nMastery over cron scheduling, systemd timers, curl health checks, SSH key authentication, and rsync synchronization.\n\n```bash\ncrontab -l\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Automated Infrastructure Maintenance",
      "code": "crontab -l",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Automated Infrastructure Maintenance.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Automated Infrastructure Maintenance.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Verify cron and network readiness\n# TODO: Write command below\n",
    "solutionCode": "crontab -l",
    "hints": [
      "Write:\ncrontab -l"
    ],
    "testCases": [
      {
        "id": "bash-138-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Automated Infrastructure Maintenance",
        "testFn": "code.includes('crontab ')"
      }
    ]
  },
  {
    "id": "bash-139-structured-logging-with-logger-&",
    "title": "139. Structured Logging with logger & syslog",
    "slug": "lesson-139-structured-logging-with-logger-&",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Structured Logging with logger & syslog in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Structured Logging with logger & syslog",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Filing an official incident report into the central municipal police department archive.",
    "explanationMarkdown": "### Structured Logging with logger & syslog\n\n`logger` sends messages to the system logging daemon (syslog/journald), viewable via `journalctl`.\n\n```bash\nlogger -t DEPLOY \"Deployment v2.0 completed successfully\"\n```",
    "workedExample": {
      "title": "Worked Example: Structured Logging with logger & syslog",
      "code": "logger -t DEPLOY \"Deployment v2.0 completed successfully\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Structured Logging with logger & syslog.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Structured Logging with logger & syslog.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Send message to system journal syslog\n# TODO: Write command below\n",
    "solutionCode": "logger -t DEPLOY \"Deployment v2.0 completed successfully\"",
    "hints": [
      "Write:\nlogger -t DEPLOY \"Deployment v2.0 completed successfully\""
    ],
    "testCases": [
      {
        "id": "bash-139-tc-1",
        "description": "Verifies correct implementation for Structured Logging with logger & syslog",
        "testFn": "code.includes('logger ')"
      }
    ]
  },
  {
    "id": "bash-140-creating-safe-temporary-files-wi",
    "title": "140. Creating Safe Temporary Files with mktemp",
    "slug": "lesson-140-creating-safe-temporary-files-wi",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Creating Safe Temporary Files with mktemp in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Creating Safe Temporary Files with mktemp",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Renting an anonymous hotel safe with a randomized electronic combination that resets upon checkout.",
    "explanationMarkdown": "### Creating Safe Temporary Files with mktemp\n\n`mktemp` creates unique, unguessable temporary files with restrictive `0600` permissions, stopping symlink attacks.\n\n```bash\nTMP_FILE=$(mktemp /tmp/backup.XXXXXX)\necho \"Temporary file: $TMP_FILE\"\n```",
    "workedExample": {
      "title": "Worked Example: Creating Safe Temporary Files with mktemp",
      "code": "TMP_FILE=$(mktemp /tmp/backup.XXXXXX)\necho \"Temporary file: $TMP_FILE\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Safe Temporary Files with mktemp.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Safe Temporary Files with mktemp.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create secure temporary scratch file\n# TODO: Write command below\n",
    "solutionCode": "TMP_FILE=$(mktemp /tmp/backup.XXXXXX)\necho \"Temporary file: $TMP_FILE\"",
    "hints": [
      "Write:\nTMP_FILE=$(mktemp /tmp/backup.XXXXXX)\necho \"Temporary file: $TMP_FILE\""
    ],
    "testCases": [
      {
        "id": "bash-140-tc-1",
        "description": "Verifies correct implementation for Creating Safe Temporary Files with mktemp",
        "testFn": "code.includes('mktemp')"
      }
    ]
  },
  {
    "id": "bash-141-the-trap-command-for-guaranteed-",
    "title": "141. The trap Command for Guaranteed Resource Cleanup",
    "slug": "lesson-141-the-trap-command-for-guaranteed-",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The trap Command for Guaranteed Resource Cleanup in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "The trap Command for Guaranteed Resource Cleanup",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An automatic sprinkler system that turns off the water and locks the front door whenever you leave the house.",
    "explanationMarkdown": "### The trap Command for Guaranteed Resource Cleanup\n\n`trap 'commands' EXIT` guarantees that temporary files and locks are cleaned up even if the script crashes or is canceled!\n\n```bash\ntrap 'rm -f \"$TMP_FILE\"; echo \"Cleaned up\"' EXIT INT TERM\n```",
    "workedExample": {
      "title": "Worked Example: The trap Command for Guaranteed Resource Cleanup",
      "code": "trap 'rm -f \"$TMP_FILE\"; echo \"Cleaned up\"' EXIT INT TERM",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The trap Command for Guaranteed Resource Cleanup.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The trap Command for Guaranteed Resource Cleanup.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Register cleanup on script exit or interrupt\n# TODO: Write command below\n",
    "solutionCode": "trap 'rm -f \"$TMP_FILE\"; echo \"Cleaned up\"' EXIT INT TERM",
    "hints": [
      "Write:\ntrap 'rm -f \"$TMP_FILE\"; echo \"Cleaned up\"' EXIT INT TERM"
    ],
    "testCases": [
      {
        "id": "bash-141-tc-1",
        "description": "Verifies correct implementation for The trap Command for Guaranteed Resource Cleanup",
        "testFn": "code.includes('trap ') && code.includes('EXIT')"
      }
    ]
  },
  {
    "id": "bash-142-parsing-cli-options-with-getopts",
    "title": "142. Parsing CLI Options with getopts",
    "slug": "lesson-142-parsing-cli-options-with-getopts",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Parsing CLI Options with getopts in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Parsing CLI Options with getopts",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "An automobile dashboard with standardized knobs for temperature (-t) and volume (-v).",
    "explanationMarkdown": "### Parsing CLI Options with getopts\n\n`getopts` parses single-letter command-line flags and arguments cleanly in POSIX-compliant scripts.\n\n```bash\nwhile getopts \"p:h:\" opt; do\n  case $opt in\n    p) PORT=\"$OPTARG\" ;;\n    h) HOST=\"$OPTARG\" ;;\n  esac\ndone\n```",
    "workedExample": {
      "title": "Worked Example: Parsing CLI Options with getopts",
      "code": "while getopts \"p:h:\" opt; do\n  case $opt in\n    p) PORT=\"$OPTARG\" ;;\n    h) HOST=\"$OPTARG\" ;;\n  esac\ndone",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Parsing CLI Options with getopts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Parsing CLI Options with getopts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Parse -p port and -h host flags\n# TODO: Write command below\n",
    "solutionCode": "while getopts \"p:h:\" opt; do\n  case $opt in\n    p) PORT=\"$OPTARG\" ;;\n    h) HOST=\"$OPTARG\" ;;\n  esac\ndone",
    "hints": [
      "Write:\nwhile getopts \"p:h:\" opt; do\n  case $opt in\n    p) PORT=\"$OPTARG\" ;;\n    h) HOST=\"$OPTARG\" ;;\n  esac\ndone"
    ],
    "testCases": [
      {
        "id": "bash-142-tc-1",
        "description": "Verifies correct implementation for Parsing CLI Options with getopts",
        "testFn": "code.includes('getopts') && code.includes('OPTARG')"
      }
    ]
  },
  {
    "id": "bash-143-preventing-concurrent-execution-",
    "title": "143. Preventing Concurrent Execution with File Locks (flock)",
    "slug": "lesson-143-preventing-concurrent-execution-",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Preventing Concurrent Execution with File Locks (flock) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Preventing Concurrent Execution with File Locks (flock)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A single physical restroom key hanging on the wall: only one person can use the restroom at a time.",
    "explanationMarkdown": "### Preventing Concurrent Execution with File Locks (flock)\n\n`flock` manages advisory file locks, ensuring cron jobs or backup scripts never run concurrently and corrupt data.\n\n```bash\nexec 200>/var/lock/backup.lock\nflock -n 200 || { echo \"Already running\"; exit 1; }\n```",
    "workedExample": {
      "title": "Worked Example: Preventing Concurrent Execution with File Locks (flock)",
      "code": "exec 200>/var/lock/backup.lock\nflock -n 200 || { echo \"Already running\"; exit 1; }",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Preventing Concurrent Execution with File Locks (flock).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Preventing Concurrent Execution with File Locks (flock).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Ensure only one instance runs at a time\n# TODO: Write command below\n",
    "solutionCode": "exec 200>/var/lock/backup.lock\nflock -n 200 || { echo \"Already running\"; exit 1; }",
    "hints": [
      "Write:\nexec 200>/var/lock/backup.lock\nflock -n 200 || { echo \"Already running\"; exit 1; }"
    ],
    "testCases": [
      {
        "id": "bash-143-tc-1",
        "description": "Verifies correct implementation for Preventing Concurrent Execution with File Locks (flock)",
        "testFn": "code.includes('flock ')"
      }
    ]
  },
  {
    "id": "bash-144-creating-a-production-systemd-se",
    "title": "144. Creating a Production Systemd Service Unit",
    "slug": "lesson-144-creating-a-production-systemd-se",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Creating a Production Systemd Service Unit in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Creating a Production Systemd Service Unit",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Drafting the legal charter that turns an ordinary employee into an official municipal civil servant.",
    "explanationMarkdown": "### Creating a Production Systemd Service Unit\n\nSystemd service unit files define how background services boot, restart on crashes, and manage dependencies.\n\n```bash\ncat <<EOF > /etc/systemd/system/myapp.service\n[Unit]\nDescription=DevForge Application\n[Service]\nExecStart=/usr/bin/node /app/index.js\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF\n```",
    "workedExample": {
      "title": "Worked Example: Creating a Production Systemd Service Unit",
      "code": "cat <<EOF > /etc/systemd/system/myapp.service\n[Unit]\nDescription=DevForge Application\n[Service]\nExecStart=/usr/bin/node /app/index.js\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating a Production Systemd Service Unit.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating a Production Systemd Service Unit.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create systemd service unit file\n# TODO: Write command below\n",
    "solutionCode": "cat <<EOF > /etc/systemd/system/myapp.service\n[Unit]\nDescription=DevForge Application\n[Service]\nExecStart=/usr/bin/node /app/index.js\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF",
    "hints": [
      "Write:\ncat <<EOF > /etc/systemd/system/myapp.service\n[Unit]\nDescription=DevForge Application\n[Service]\nExecStart=/usr/bin/node /app/index.js\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF"
    ],
    "testCases": [
      {
        "id": "bash-144-tc-1",
        "description": "Verifies correct implementation for Creating a Production Systemd Service Unit",
        "testFn": "code.includes('[Service]') && code.includes('ExecStart=')"
      }
    ]
  },
  {
    "id": "bash-145-managing-systemd-services-system",
    "title": "145. Managing Systemd Services (systemctl)",
    "slug": "lesson-145-managing-systemd-services-system",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Managing Systemd Services (systemctl) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Managing Systemd Services (systemctl)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Flipping the master circuit breaker switch on the municipal power plant control board.",
    "explanationMarkdown": "### Managing Systemd Services (systemctl)\n\n`systemctl` starts, stops, reloads, and enables services to boot automatically on operating system startup.\n\n```bash\nsystemctl start myapp\nsystemctl enable myapp\nsystemctl status myapp\n```",
    "workedExample": {
      "title": "Worked Example: Managing Systemd Services (systemctl)",
      "code": "systemctl start myapp\nsystemctl enable myapp\nsystemctl status myapp",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Managing Systemd Services (systemctl).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Managing Systemd Services (systemctl).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Start, enable, and inspect system service\n# TODO: Write command below\n",
    "solutionCode": "systemctl start myapp\nsystemctl enable myapp\nsystemctl status myapp",
    "hints": [
      "Write:\nsystemctl start myapp\nsystemctl enable myapp\nsystemctl status myapp"
    ],
    "testCases": [
      {
        "id": "bash-145-tc-1",
        "description": "Verifies correct implementation for Managing Systemd Services (systemctl)",
        "testFn": "code.includes('systemctl ')"
      }
    ]
  },
  {
    "id": "bash-146-inspecting-system-logs-with-jour",
    "title": "146. Inspecting System Logs with journalctl",
    "slug": "lesson-146-inspecting-system-logs-with-jour",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Inspecting System Logs with journalctl in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Inspecting System Logs with journalctl",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Reviewing the official chronological black box flight recorder logs for a specific engine turbine.",
    "explanationMarkdown": "### Inspecting System Logs with journalctl\n\n`journalctl -u <service> -f` streams unified structured systemd logs with timestamps and severity filtering.\n\n```bash\njournalctl -u myapp -f -n 50\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting System Logs with journalctl",
      "code": "journalctl -u myapp -f -n 50",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting System Logs with journalctl.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting System Logs with journalctl.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: View live logs from specific systemd service\n# TODO: Write command below\n",
    "solutionCode": "journalctl -u myapp -f -n 50",
    "hints": [
      "Write:\njournalctl -u myapp -f -n 50"
    ],
    "testCases": [
      {
        "id": "bash-146-tc-1",
        "description": "Verifies correct implementation for Inspecting System Logs with journalctl",
        "testFn": "code.includes('journalctl ')"
      }
    ]
  },
  {
    "id": "bash-147-user-&-group-administration-user",
    "title": "147. User & Group Administration (useradd, usermod)",
    "slug": "lesson-147-user-&-group-administration-user",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master User & Group Administration (useradd, usermod) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "User & Group Administration (useradd, usermod)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Issuing a security service badge to an automated vacuum robot with zero access to executive elevators.",
    "explanationMarkdown": "### User & Group Administration (useradd, usermod)\n\nCreates locked system accounts (`-r -s /usr/sbin/nologin`) to run background services with minimal privilege.\n\n```bash\nuseradd -r -s /usr/sbin/nologin -d /var/empty myapp\n```",
    "workedExample": {
      "title": "Worked Example: User & Group Administration (useradd, usermod)",
      "code": "useradd -r -s /usr/sbin/nologin -d /var/empty myapp",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for User & Group Administration (useradd, usermod).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of User & Group Administration (useradd, usermod).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Create dedicated system service user with no login shell\n# TODO: Write command below\n",
    "solutionCode": "useradd -r -s /usr/sbin/nologin -d /var/empty myapp",
    "hints": [
      "Write:\nuseradd -r -s /usr/sbin/nologin -d /var/empty myapp"
    ],
    "testCases": [
      {
        "id": "bash-147-tc-1",
        "description": "Verifies correct implementation for User & Group Administration (useradd, usermod)",
        "testFn": "code.includes('useradd ') || code.includes('usermod ')"
      }
    ]
  },
  {
    "id": "bash-148-package-management-across-distri",
    "title": "148. Package Management across Distributions (apt vs dnf)",
    "slug": "lesson-148-package-management-across-distri",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Package Management across Distributions (apt vs dnf) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Package Management across Distributions (apt vs dnf)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Ordering standardized replacement parts from the state hardware supply depot catalog.",
    "explanationMarkdown": "### Package Management across Distributions (apt vs dnf)\n\n`apt` manages packages on Debian/Ubuntu systems; `dnf`/`yum` manages packages on Fedora/RHEL/CentOS.\n\n```bash\nsudo apt-get update && sudo apt-get install -y curl\n```",
    "workedExample": {
      "title": "Worked Example: Package Management across Distributions (apt vs dnf)",
      "code": "sudo apt-get update && sudo apt-get install -y curl",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Package Management across Distributions (apt vs dnf).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Package Management across Distributions (apt vs dnf).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Update package repositories and install curl\n# TODO: Write command below\n",
    "solutionCode": "sudo apt-get update && sudo apt-get install -y curl",
    "hints": [
      "Write:\nsudo apt-get update && sudo apt-get install -y curl"
    ],
    "testCases": [
      {
        "id": "bash-148-tc-1",
        "description": "Verifies correct implementation for Package Management across Distributions (apt vs dnf)",
        "testFn": "code.includes('apt-get ') || code.includes('dnf ') || code.includes('apt ')"
      }
    ]
  },
  {
    "id": "bash-149-firewall-configuration-with-ufw-",
    "title": "149. Firewall Configuration with UFW (Uncomplicated Firewall)",
    "slug": "lesson-149-firewall-configuration-with-ufw-",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Firewall Configuration with UFW (Uncomplicated Firewall) in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Firewall Configuration with UFW (Uncomplicated Firewall)",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A fortress moat with drawbridges: opening only Bridge 22 for messengers and Bridge 80 for public merchants.",
    "explanationMarkdown": "### Firewall Configuration with UFW (Uncomplicated Firewall)\n\nUFW simplifies iptables firewall management, allowing or denying ports, protocols, and IP subnets.\n\n```bash\nsudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw enable\n```",
    "workedExample": {
      "title": "Worked Example: Firewall Configuration with UFW (Uncomplicated Firewall)",
      "code": "sudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw enable",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Firewall Configuration with UFW (Uncomplicated Firewall).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Firewall Configuration with UFW (Uncomplicated Firewall).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Allow SSH and HTTP traffic through firewall\n# TODO: Write command below\n",
    "solutionCode": "sudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw enable",
    "hints": [
      "Write:\nsudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw enable"
    ],
    "testCases": [
      {
        "id": "bash-149-tc-1",
        "description": "Verifies correct implementation for Firewall Configuration with UFW (Uncomplicated Firewall)",
        "testFn": "code.includes('ufw ')"
      }
    ]
  },
  {
    "id": "bash-150-automated-database-backup-rotati",
    "title": "150. Automated Database Backup Rotation Script",
    "slug": "lesson-150-automated-database-backup-rotati",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Automated Database Backup Rotation Script in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Automated Database Backup Rotation Script",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A storage vault keeping 7 daily ledger copies and shredding older copies automatically.",
    "explanationMarkdown": "### Automated Database Backup Rotation Script\n\nAutomates database dumps, gzip compression, timestamping, and 7-day retention purging.\n\n```bash\nfind /backups -name \"*.sql.gz\" -mtime +7 -delete\n```",
    "workedExample": {
      "title": "Worked Example: Automated Database Backup Rotation Script",
      "code": "find /backups -name \"*.sql.gz\" -mtime +7 -delete",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automated Database Backup Rotation Script.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automated Database Backup Rotation Script.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Daily backup script with 7-day retention rotation\n# TODO: Write command below\n",
    "solutionCode": "find /backups -name \"*.sql.gz\" -mtime +7 -delete",
    "hints": [
      "Write:\nfind /backups -name \"*.sql.gz\" -mtime +7 -delete"
    ],
    "testCases": [
      {
        "id": "bash-150-tc-1",
        "description": "Verifies correct implementation for Automated Database Backup Rotation Script",
        "testFn": "code.includes('-mtime +7 -delete') || code.includes('find /backups')"
      }
    ]
  },
  {
    "id": "bash-151-system-health-monitoring-&-alert",
    "title": "151. System Health Monitoring & Alert Script",
    "slug": "lesson-151-system-health-monitoring-&-alert",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master System Health Monitoring & Alert Script in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "System Health Monitoring & Alert Script",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "A pressure valve whistle blowing an alarm whenever steam pressure inside a boiler exceeds safety limits.",
    "explanationMarkdown": "### System Health Monitoring & Alert Script\n\nA robust shell script polling disk, RAM, and CPU thresholds and dispatching webhook alerts on anomalies.\n\n```bash\nUSAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')\nif [[ $USAGE -gt 90 ]]; then echo \"Alert: Disk full ($USAGE%)\"; fi\n```",
    "workedExample": {
      "title": "Worked Example: System Health Monitoring & Alert Script",
      "code": "USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')\nif [[ $USAGE -gt 90 ]]; then echo \"Alert: Disk full ($USAGE%)\"; fi",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for System Health Monitoring & Alert Script.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of System Health Monitoring & Alert Script.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Check disk threshold and alert if over 90%\n# TODO: Write command below\n",
    "solutionCode": "USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')\nif [[ $USAGE -gt 90 ]]; then echo \"Alert: Disk full ($USAGE%)\"; fi",
    "hints": [
      "Write:\nUSAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')\nif [[ $USAGE -gt 90 ]]; then echo \"Alert: Disk full ($USAGE%)\"; fi"
    ],
    "testCases": [
      {
        "id": "bash-151-tc-1",
        "description": "Verifies correct implementation for System Health Monitoring & Alert Script",
        "testFn": "code.includes('USAGE=') && code.includes('-gt 90')"
      }
    ]
  },
  {
    "id": "bash-152-kernel-performance-tuning-with-s",
    "title": "152. Kernel Performance Tuning with sysctl",
    "slug": "lesson-152-kernel-performance-tuning-with-s",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Kernel Performance Tuning with sysctl in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Kernel Performance Tuning with sysctl",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "Adjusting the fuel injector timing on a high-performance race engine for maximum acceleration.",
    "explanationMarkdown": "### Kernel Performance Tuning with sysctl\n\n`sysctl` inspects and configures runtime Linux kernel parameters (networking buffers, file limits, swappiness).\n\n```bash\nsysctl fs.file-max\n```",
    "workedExample": {
      "title": "Worked Example: Kernel Performance Tuning with sysctl",
      "code": "sysctl fs.file-max",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Kernel Performance Tuning with sysctl.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kernel Performance Tuning with sysctl.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Inspect maximum open file descriptors limit\n# TODO: Write command below\n",
    "solutionCode": "sysctl fs.file-max",
    "hints": [
      "Write:\nsysctl fs.file-max"
    ],
    "testCases": [
      {
        "id": "bash-152-tc-1",
        "description": "Verifies correct implementation for Kernel Performance Tuning with sysctl",
        "testFn": "code.includes('sysctl ')"
      }
    ]
  },
  {
    "id": "bash-153-linux-&-bash-masterclass-capston",
    "title": "153. Linux & Bash Masterclass Capstone: Enterprise Server Hardening",
    "slug": "lesson-153-linux-&-bash-masterclass-capston",
    "language": "bash",
    "category": "Module 10: Production Scripting & System Administration",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Linux & Bash Masterclass Capstone: Enterprise Server Hardening in Linux Terminal & Shell Scripting (150 Topics).",
    "concepts": [
      "Linux & Bash Masterclass Capstone",
      "Linux Terminal & Shell Scripting (150 Topics)"
    ],
    "analogy": "The triumphant commissioning of a secure, automated, 24/7 enterprise Linux cloud server.",
    "explanationMarkdown": "### Linux & Bash Masterclass Capstone: Enterprise Server Hardening\n\nA complete mastery of the Linux terminal: navigation, permissions, text stream pipelines, automation, systemd, and security.\n\n```bash\nuname -a && uptime\n```",
    "workedExample": {
      "title": "Worked Example: Linux & Bash Masterclass Capstone: Enterprise Server Hardening",
      "code": "uname -a && uptime",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linux & Bash Masterclass Capstone: Enterprise Server Hardening.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linux & Bash Masterclass Capstone: Enterprise Server Hardening.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Complete system administrator verification\n# TODO: Write command below\n",
    "solutionCode": "uname -a && uptime",
    "hints": [
      "Write:\nuname -a && uptime"
    ],
    "testCases": [
      {
        "id": "bash-153-tc-1",
        "description": "Verifies correct implementation for Linux & Bash Masterclass Capstone: Enterprise Server Hardening",
        "testFn": "code.includes('uname -a') || code.includes('uptime')"
      }
    ]
  }
]
};
