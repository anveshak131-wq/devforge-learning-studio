import { Track } from '../../types';

export const DOCKER_TRACK: Track = {
  id: "docker",
  title: "Docker & Container DevOps (150 Topics)",
  slug: "docker",
  language: "docker",
  icon: "Box",
  color: "from-blue-400 to-indigo-600",
  tagline: "Master containerization, multi-stage builds, Docker Compose, and production deployment across 150 lessons.",
  description: "From cgroups and namespaces to production Dockerfiles, multi-stage builds, persistent volumes, bridge networks, Compose orchestration, and Kubernetes Pod transitions.",
  lessons: [
  {
    "id": "docker-1-what-is-a-container?-vms-vs-cont",
    "title": "1. What is a Container? VMs vs Containers",
    "slug": "lesson-1-what-is-a-container?-vms-vs-cont",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master What is a Container? VMs vs Containers in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "What is a Container? VMs vs Containers",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A standardized shipping container: fits on any cargo ship, train, or truck without unpacking.",
    "explanationMarkdown": "### What is a Container? VMs vs Containers\n\nContainers package software and all its dependencies into an isolated unit sharing the host OS kernel.\n\n```bash\ndocker --version\n```",
    "workedExample": {
      "title": "Worked Example: What is a Container? VMs vs Containers",
      "code": "docker --version",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is a Container? VMs vs Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is a Container? VMs vs Containers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check Docker version\ndocker --version",
    "solutionCode": "docker --version",
    "hints": [
      "Write:\ndocker --version"
    ],
    "testCases": [
      {
        "id": "docker-1-tc-1",
        "description": "Verifies correct implementation for What is a Container? VMs vs Containers",
        "testFn": "code.includes('docker --version')"
      }
    ]
  },
  {
    "id": "docker-2-linux-namespaces-process-isolati",
    "title": "2. Linux Namespaces: Process Isolation (PID, NET, MNT)",
    "slug": "lesson-2-linux-namespaces-process-isolati",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Linux Namespaces: Process Isolation (PID, NET, MNT) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Linux Namespaces",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Soundproof office cubicles: workers share the same floor, but cannot see or hear into neighboring cubicles.",
    "explanationMarkdown": "### Linux Namespaces: Process Isolation (PID, NET, MNT)\n\nNamespaces provide processes with private views of the system: process IDs (pid), network stacks (net), and mount points (mnt).\n\n```bash\ndocker info\n```",
    "workedExample": {
      "title": "Worked Example: Linux Namespaces: Process Isolation (PID, NET, MNT)",
      "code": "docker info",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linux Namespaces: Process Isolation (PID, NET, MNT).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linux Namespaces: Process Isolation (PID, NET, MNT).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect Docker system information\ndocker info",
    "solutionCode": "docker info",
    "hints": [
      "Write:\ndocker info"
    ],
    "testCases": [
      {
        "id": "docker-2-tc-1",
        "description": "Verifies correct implementation for Linux Namespaces: Process Isolation (PID, NET, MNT)",
        "testFn": "code.includes('docker info')"
      }
    ]
  },
  {
    "id": "docker-3-control-groups-cgroups-resource-",
    "title": "3. Control Groups (cgroups): Resource Throttling",
    "slug": "lesson-3-control-groups-cgroups-resource-",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Control Groups (cgroups): Resource Throttling in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Control Groups (cgroups)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An electricity meter regulating how many amps of power an individual apartment unit can consume.",
    "explanationMarkdown": "### Control Groups (cgroups): Resource Throttling\n\ncgroups allow the host kernel to meter, limit, and isolate resource usage (CPU, RAM, block I/O) for container processes.\n\n```bash\ndocker run -m 512m alpine\n```",
    "workedExample": {
      "title": "Worked Example: Control Groups (cgroups): Resource Throttling",
      "code": "docker run -m 512m alpine",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Control Groups (cgroups): Resource Throttling.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Control Groups (cgroups): Resource Throttling.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run container with memory limit\ndocker run -m 512m alpine",
    "solutionCode": "docker run -m 512m alpine",
    "hints": [
      "Write:\ndocker run -m 512m alpine"
    ],
    "testCases": [
      {
        "id": "docker-3-tc-1",
        "description": "Verifies correct implementation for Control Groups (cgroups): Resource Throttling",
        "testFn": "code.includes('docker run -m') || code.includes('docker run')"
      }
    ]
  },
  {
    "id": "docker-4-union-file-systems-overlayfs",
    "title": "4. Union File Systems (OverlayFS)",
    "slug": "lesson-4-union-file-systems-overlayfs",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Union File Systems (OverlayFS) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Union File Systems (OverlayFS)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Transparent celluloid animation sheets stacked on top of a painted background painting.",
    "explanationMarkdown": "### Union File Systems (OverlayFS)\n\nOverlayFS stacks multiple read-only image layers together with a single read-write layer on top.\n\n```bash\ndocker info | grep Storage\n```",
    "workedExample": {
      "title": "Worked Example: Union File Systems (OverlayFS)",
      "code": "docker info | grep Storage",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Union File Systems (OverlayFS).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Union File Systems (OverlayFS).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check Docker storage driver\ndocker info | grep Storage",
    "solutionCode": "docker info | grep Storage",
    "hints": [
      "Write:\ndocker info | grep Storage"
    ],
    "testCases": [
      {
        "id": "docker-4-tc-1",
        "description": "Verifies correct implementation for Union File Systems (OverlayFS)",
        "testFn": "code.includes('docker info')"
      }
    ]
  },
  {
    "id": "docker-5-docker-architecture-daemon,-cli,",
    "title": "5. Docker Architecture: Daemon, CLI, containerd",
    "slug": "lesson-5-docker-architecture-daemon,-cli,",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Docker Architecture: Daemon, CLI, containerd in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker Architecture",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A ship's captain (CLI) giving orders through the radio to the engine room crew (daemon and containerd).",
    "explanationMarkdown": "### Docker Architecture: Daemon, CLI, containerd\n\nThe Docker CLI communicates via REST API with the background `dockerd` daemon, which delegates container execution to `containerd` and `runc`.\n\n```bash\ndocker version\n```",
    "workedExample": {
      "title": "Worked Example: Docker Architecture: Daemon, CLI, containerd",
      "code": "docker version",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker Architecture: Daemon, CLI, containerd.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Architecture: Daemon, CLI, containerd.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify Docker daemon connectivity\ndocker version",
    "solutionCode": "docker version",
    "hints": [
      "Write:\ndocker version"
    ],
    "testCases": [
      {
        "id": "docker-5-tc-1",
        "description": "Verifies correct implementation for Docker Architecture: Daemon, CLI, containerd",
        "testFn": "code.includes('docker version')"
      }
    ]
  },
  {
    "id": "docker-6-the-hello-world-container",
    "title": "6. The 'Hello World' Container",
    "slug": "lesson-6-the-hello-world-container",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master The 'Hello World' Container in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The 'Hello World' Container",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Lifting an astronaut into space for the first time: tests launchpad, radio, and telemetry systems.",
    "explanationMarkdown": "### The 'Hello World' Container\n\nPulls the minimal `hello-world` image from Docker Hub, runs it in a container, prints a confirmation message, and exits.\n\n```bash\ndocker run hello-world\n```",
    "workedExample": {
      "title": "Worked Example: The 'Hello World' Container",
      "code": "docker run hello-world",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The 'Hello World' Container.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The 'Hello World' Container.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run your very first container\ndocker run hello-world",
    "solutionCode": "docker run hello-world",
    "hints": [
      "Write:\ndocker run hello-world"
    ],
    "testCases": [
      {
        "id": "docker-6-tc-1",
        "description": "Verifies correct implementation for The 'Hello World' Container",
        "testFn": "code.includes('docker run hello-world')"
      }
    ]
  },
  {
    "id": "docker-7-container-lifecycle-states-creat",
    "title": "7. Container Lifecycle States (Created, Running, Paused, Stopped)",
    "slug": "lesson-7-container-lifecycle-states-creat",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Container Lifecycle States (Created, Running, Paused, Stopped) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Container Lifecycle States (Created, Running, Paused, Stopped)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "The life stages of a traffic light: off, glowing green, amber pause, and red stop.",
    "explanationMarkdown": "### Container Lifecycle States (Created, Running, Paused, Stopped)\n\nA container transitions through Created, Running, Paused, and Stopped (Exited) states.\n\n```bash\ndocker ps\n```",
    "workedExample": {
      "title": "Worked Example: Container Lifecycle States (Created, Running, Paused, Stopped)",
      "code": "docker ps",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container Lifecycle States (Created, Running, Paused, Stopped).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Lifecycle States (Created, Running, Paused, Stopped).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check running containers\ndocker ps",
    "solutionCode": "docker ps",
    "hints": [
      "Write:\ndocker ps"
    ],
    "testCases": [
      {
        "id": "docker-7-tc-1",
        "description": "Verifies correct implementation for Container Lifecycle States (Created, Running, Paused, Stopped)",
        "testFn": "code.includes('docker ps')"
      }
    ]
  },
  {
    "id": "docker-8-running-detached-background-cont",
    "title": "8. Running Detached Background Containers (-d)",
    "slug": "lesson-8-running-detached-background-cont",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Running Detached Background Containers (-d) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Running Detached Background Containers (-d)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Sending an automated robot out to patrol the perimeter while you continue working in your office.",
    "explanationMarkdown": "### Running Detached Background Containers (-d)\n\nThe `-d` (detached) flag runs the container in the background and prints the container ID.\n\n```bash\ndocker run -d -p 80:80 nginx\n```",
    "workedExample": {
      "title": "Worked Example: Running Detached Background Containers (-d)",
      "code": "docker run -d -p 80:80 nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Running Detached Background Containers (-d).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Running Detached Background Containers (-d).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run background web server container\ndocker run -d -p 80:80 nginx",
    "solutionCode": "docker run -d -p 80:80 nginx",
    "hints": [
      "Write:\ndocker run -d -p 80:80 nginx"
    ],
    "testCases": [
      {
        "id": "docker-8-tc-1",
        "description": "Verifies correct implementation for Running Detached Background Containers (-d)",
        "testFn": "code.includes('docker run -d')"
      }
    ]
  },
  {
    "id": "docker-9-interactive-terminal-containers-",
    "title": "9. Interactive Terminal Containers (-it)",
    "slug": "lesson-9-interactive-terminal-containers-",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Interactive Terminal Containers (-it) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Interactive Terminal Containers (-it)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Stepping inside a submarine cockpit and taking manual control of the joysticks.",
    "explanationMarkdown": "### Interactive Terminal Containers (-it)\n\n`-i` (interactive) keeps stdin open; `-t` allocates a pseudo-TTY terminal for live shell interaction.\n\n```bash\ndocker run -it ubuntu bash\n```",
    "workedExample": {
      "title": "Worked Example: Interactive Terminal Containers (-it)",
      "code": "docker run -it ubuntu bash",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interactive Terminal Containers (-it).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interactive Terminal Containers (-it).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Launch interactive shell in Ubuntu container\ndocker run -it ubuntu bash",
    "solutionCode": "docker run -it ubuntu bash",
    "hints": [
      "Write:\ndocker run -it ubuntu bash"
    ],
    "testCases": [
      {
        "id": "docker-9-tc-1",
        "description": "Verifies correct implementation for Interactive Terminal Containers (-it)",
        "testFn": "code.includes('docker run -it')"
      }
    ]
  },
  {
    "id": "docker-10-naming-containers-with---name",
    "title": "10. Naming Containers with --name",
    "slug": "lesson-10-naming-containers-with---name",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Naming Containers with --name in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Naming Containers with --name",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Putting a dog tag on a puppy instead of referring to it by a 64-character serial number.",
    "explanationMarkdown": "### Naming Containers with --name\n\nAssigns a custom, memorable name to the container for easy reference in future commands.\n\n```bash\ndocker run -d --name web-gateway nginx\n```",
    "workedExample": {
      "title": "Worked Example: Naming Containers with --name",
      "code": "docker run -d --name web-gateway nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Naming Containers with --name.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Naming Containers with --name.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run container with human-readable name\ndocker run -d --name web-gateway nginx",
    "solutionCode": "docker run -d --name web-gateway nginx",
    "hints": [
      "Write:\ndocker run -d --name web-gateway nginx"
    ],
    "testCases": [
      {
        "id": "docker-10-tc-1",
        "description": "Verifies correct implementation for Naming Containers with --name",
        "testFn": "code.includes('docker run') && code.includes('--name')"
      }
    ]
  },
  {
    "id": "docker-11-stopping-containers-docker-stop-",
    "title": "11. Stopping Containers: docker stop vs docker kill",
    "slug": "lesson-11-stopping-containers-docker-stop-",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Stopping Containers: docker stop vs docker kill in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Stopping Containers",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Gently pressing the elevator 'Door Close' button (stop) vs pulling the emergency brake cord (kill).",
    "explanationMarkdown": "### Stopping Containers: docker stop vs docker kill\n\n`docker stop` sends SIGTERM allowing graceful shutdown; `docker kill` sends SIGKILL for immediate termination.\n\n```bash\ndocker stop web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Stopping Containers: docker stop vs docker kill",
      "code": "docker stop web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stopping Containers: docker stop vs docker kill.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stopping Containers: docker stop vs docker kill.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Gracefully stop a container\ndocker stop web-gateway",
    "solutionCode": "docker stop web-gateway",
    "hints": [
      "Write:\ndocker stop web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-11-tc-1",
        "description": "Verifies correct implementation for Stopping Containers: docker stop vs docker kill",
        "testFn": "code.includes('docker stop')"
      }
    ]
  },
  {
    "id": "docker-12-restarting-containers-with-docke",
    "title": "12. Restarting Containers with docker start & restart",
    "slug": "lesson-12-restarting-containers-with-docke",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Restarting Containers with docker start & restart in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Restarting Containers with docker start & restart",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Turning your car engine back on after parking at a rest stop.",
    "explanationMarkdown": "### Restarting Containers with docker start & restart\n\n`docker start` revives a stopped container with its original state intact; `docker restart` stops and starts it.\n\n```bash\ndocker restart web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Restarting Containers with docker start & restart",
      "code": "docker restart web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Restarting Containers with docker start & restart.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Restarting Containers with docker start & restart.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Restart an existing stopped container\ndocker restart web-gateway",
    "solutionCode": "docker restart web-gateway",
    "hints": [
      "Write:\ndocker restart web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-12-tc-1",
        "description": "Verifies correct implementation for Restarting Containers with docker start & restart",
        "testFn": "code.includes('docker restart') || code.includes('docker start')"
      }
    ]
  },
  {
    "id": "docker-13-automatic-restart-policies---res",
    "title": "13. Automatic Restart Policies (--restart)",
    "slug": "lesson-13-automatic-restart-policies---res",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Automatic Restart Policies (--restart) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Automatic Restart Policies (--restart)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A lifejacket that automatically inflates whenever a swimmer falls into water.",
    "explanationMarkdown": "### Automatic Restart Policies (--restart)\n\nPolicies include `no`, `on-failure`, `always`, and `unless-stopped` to survive system reboots.\n\n```bash\ndocker run -d --restart unless-stopped nginx\n```",
    "workedExample": {
      "title": "Worked Example: Automatic Restart Policies (--restart)",
      "code": "docker run -d --restart unless-stopped nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automatic Restart Policies (--restart).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automatic Restart Policies (--restart).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Ensure container restarts on server reboot\ndocker run -d --restart unless-stopped nginx",
    "solutionCode": "docker run -d --restart unless-stopped nginx",
    "hints": [
      "Write:\ndocker run -d --restart unless-stopped nginx"
    ],
    "testCases": [
      {
        "id": "docker-13-tc-1",
        "description": "Verifies correct implementation for Automatic Restart Policies (--restart)",
        "testFn": "code.includes('--restart')"
      }
    ]
  },
  {
    "id": "docker-14-listing-all-containers-with-dock",
    "title": "14. Listing All Containers with docker ps -a",
    "slug": "lesson-14-listing-all-containers-with-dock",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Listing All Containers with docker ps -a in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Listing All Containers with docker ps -a",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Checking the flight schedule board for both airborne flights and landed flights parked at gates.",
    "explanationMarkdown": "### Listing All Containers with docker ps -a\n\nLists all containers regardless of status, showing container ID, image, command, status, and ports.\n\n```bash\ndocker ps -a\n```",
    "workedExample": {
      "title": "Worked Example: Listing All Containers with docker ps -a",
      "code": "docker ps -a",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing All Containers with docker ps -a.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing All Containers with docker ps -a.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# View both running and stopped containers\ndocker ps -a",
    "solutionCode": "docker ps -a",
    "hints": [
      "Write:\ndocker ps -a"
    ],
    "testCases": [
      {
        "id": "docker-14-tc-1",
        "description": "Verifies correct implementation for Listing All Containers with docker ps -a",
        "testFn": "code.includes('docker ps -a')"
      }
    ]
  },
  {
    "id": "docker-15-module-1-review-container-manage",
    "title": "15. Module 1 Review: Container Management Flow",
    "slug": "lesson-15-module-1-review-container-manage",
    "language": "docker",
    "category": "Module 1: Containerization Fundamentals",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 3,
    "xp": 20,
    "description": "Master Module 1 Review: Container Management Flow in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 1 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Passing your commercial container truck driver certification test.",
    "explanationMarkdown": "### Module 1 Review: Container Management Flow\n\nA rock-solid grasp of container isolation, the daemon architecture, interactive vs detached modes, and lifecycle management.\n\n```bash\ndocker ps\n```",
    "workedExample": {
      "title": "Worked Example: Module 1 Review: Container Management Flow",
      "code": "docker ps",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 1 Review: Container Management Flow.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 1 Review: Container Management Flow.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify active container roster\ndocker ps",
    "solutionCode": "docker ps",
    "hints": [
      "Write:\ndocker ps"
    ],
    "testCases": [
      {
        "id": "docker-15-tc-1",
        "description": "Verifies correct implementation for Module 1 Review: Container Management Flow",
        "testFn": "code.includes('docker ps')"
      }
    ]
  },
  {
    "id": "docker-16-what-is-a-docker-image?-read-onl",
    "title": "16. What is a Docker Image? Read-Only Blueprints",
    "slug": "lesson-16-what-is-a-docker-image?-read-onl",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master What is a Docker Image? Read-Only Blueprints in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "What is a Docker Image? Read-Only Blueprints",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A master cookie cutter mold: you can use it to stamp out 1,000 identical cookies (containers).",
    "explanationMarkdown": "### What is a Docker Image? Read-Only Blueprints\n\nAn image is an immutable, read-only snapshot containing the OS filesystem, libraries, and application code.\n\n```bash\ndocker images\n```",
    "workedExample": {
      "title": "Worked Example: What is a Docker Image? Read-Only Blueprints",
      "code": "docker images",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is a Docker Image? Read-Only Blueprints.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is a Docker Image? Read-Only Blueprints.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# List locally cached images\ndocker images",
    "solutionCode": "docker images",
    "hints": [
      "Write:\ndocker images"
    ],
    "testCases": [
      {
        "id": "docker-16-tc-1",
        "description": "Verifies correct implementation for What is a Docker Image? Read-Only Blueprints",
        "testFn": "code.includes('docker images') || code.includes('docker image ls')"
      }
    ]
  },
  {
    "id": "docker-17-pulling-images-from-docker-hub-w",
    "title": "17. Pulling Images from Docker Hub with docker pull",
    "slug": "lesson-17-pulling-images-from-docker-hub-w",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pulling Images from Docker Hub with docker pull in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Pulling Images from Docker Hub with docker pull",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Ordering a pre-assembled machinery kit from an international manufacturer's warehouse.",
    "explanationMarkdown": "### Pulling Images from Docker Hub with docker pull\n\nDownloads image layers from a registry (default Docker Hub) to your local image cache.\n\n```bash\ndocker pull node:20-alpine\n```",
    "workedExample": {
      "title": "Worked Example: Pulling Images from Docker Hub with docker pull",
      "code": "docker pull node:20-alpine",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pulling Images from Docker Hub with docker pull.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pulling Images from Docker Hub with docker pull.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Download official Node.js image\ndocker pull node:20-alpine",
    "solutionCode": "docker pull node:20-alpine",
    "hints": [
      "Write:\ndocker pull node:20-alpine"
    ],
    "testCases": [
      {
        "id": "docker-17-tc-1",
        "description": "Verifies correct implementation for Pulling Images from Docker Hub with docker pull",
        "testFn": "code.includes('docker pull')"
      }
    ]
  },
  {
    "id": "docker-18-understanding-image-tags-and-lat",
    "title": "18. Understanding Image Tags and Latest Tag",
    "slug": "lesson-18-understanding-image-tags-and-lat",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Understanding Image Tags and Latest Tag in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Understanding Image Tags and Latest Tag",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Specifying 'iPhone 15 Pro' instead of just ordering whatever the 'latest phone' happens to be.",
    "explanationMarkdown": "### Understanding Image Tags and Latest Tag\n\nTags represent specific versions (e.g. `20-alpine`); `:latest` simply points to the most recent build.\n\n```bash\ndocker pull redis:7.2\n```",
    "workedExample": {
      "title": "Worked Example: Understanding Image Tags and Latest Tag",
      "code": "docker pull redis:7.2",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Understanding Image Tags and Latest Tag.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding Image Tags and Latest Tag.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Pull specific version tag\ndocker pull redis:7.2",
    "solutionCode": "docker pull redis:7.2",
    "hints": [
      "Write:\ndocker pull redis:7.2"
    ],
    "testCases": [
      {
        "id": "docker-18-tc-1",
        "description": "Verifies correct implementation for Understanding Image Tags and Latest Tag",
        "testFn": "code.includes('docker pull redis')"
      }
    ]
  },
  {
    "id": "docker-19-removing-images-with-docker-rmi-",
    "title": "19. Removing Images with docker rmi / docker image rm",
    "slug": "lesson-19-removing-images-with-docker-rmi-",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Removing Images with docker rmi / docker image rm in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Removing Images with docker rmi / docker image rm",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Tossing an obsolete drafting stencil into the recycling bin to clear shelf space.",
    "explanationMarkdown": "### Removing Images with docker rmi / docker image rm\n\nDeletes local cached images from disk (only allowed if no containers are currently using the image).\n\n```bash\ndocker rmi hello-world\n```",
    "workedExample": {
      "title": "Worked Example: Removing Images with docker rmi / docker image rm",
      "code": "docker rmi hello-world",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing Images with docker rmi / docker image rm.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing Images with docker rmi / docker image rm.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Remove unused local image\ndocker rmi hello-world",
    "solutionCode": "docker rmi hello-world",
    "hints": [
      "Write:\ndocker rmi hello-world"
    ],
    "testCases": [
      {
        "id": "docker-19-tc-1",
        "description": "Verifies correct implementation for Removing Images with docker rmi / docker image rm",
        "testFn": "code.includes('docker rmi') || code.includes('docker image rm')"
      }
    ]
  },
  {
    "id": "docker-20-pruning-unused-images-with-docke",
    "title": "20. Pruning Unused Images with docker image prune",
    "slug": "lesson-20-pruning-unused-images-with-docke",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pruning Unused Images with docker image prune in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Pruning Unused Images with docker image prune",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Sweeping stray wood shavings and scraps off the carpentry workshop floor.",
    "explanationMarkdown": "### Pruning Unused Images with docker image prune\n\nDeletes dangling and untagged image layers to reclaim gigabytes of disk space.\n\n```bash\ndocker image prune -f\n```",
    "workedExample": {
      "title": "Worked Example: Pruning Unused Images with docker image prune",
      "code": "docker image prune -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pruning Unused Images with docker image prune.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pruning Unused Images with docker image prune.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Remove all dangling image layers\ndocker image prune -f",
    "solutionCode": "docker image prune -f",
    "hints": [
      "Write:\ndocker image prune -f"
    ],
    "testCases": [
      {
        "id": "docker-20-tc-1",
        "description": "Verifies correct implementation for Pruning Unused Images with docker image prune",
        "testFn": "code.includes('docker image prune')"
      }
    ]
  },
  {
    "id": "docker-21-removing-stopped-containers-with",
    "title": "21. Removing Stopped Containers with docker rm",
    "slug": "lesson-21-removing-stopped-containers-with",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Removing Stopped Containers with docker rm in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Removing Stopped Containers with docker rm",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Dismantling a temporary party tent after all the guests have gone home.",
    "explanationMarkdown": "### Removing Stopped Containers with docker rm\n\nRemoves stopped container records and their writable layers from the system.\n\n```bash\ndocker rm web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Removing Stopped Containers with docker rm",
      "code": "docker rm web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing Stopped Containers with docker rm.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing Stopped Containers with docker rm.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Delete a stopped container\ndocker rm web-gateway",
    "solutionCode": "docker rm web-gateway",
    "hints": [
      "Write:\ndocker rm web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-21-tc-1",
        "description": "Verifies correct implementation for Removing Stopped Containers with docker rm",
        "testFn": "code.includes('docker rm')"
      }
    ]
  },
  {
    "id": "docker-22-removing-all-stopped-containers-",
    "title": "22. Removing All Stopped Containers in One Command",
    "slug": "lesson-22-removing-all-stopped-containers-",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Removing All Stopped Containers in One Command in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Removing All Stopped Containers in One Command",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Towing away all abandoned cars parked in a long-term parking lot.",
    "explanationMarkdown": "### Removing All Stopped Containers in One Command\n\nInstantly purges all containers whose status is `Exited`.\n\n```bash\ndocker container prune -f\n```",
    "workedExample": {
      "title": "Worked Example: Removing All Stopped Containers in One Command",
      "code": "docker container prune -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing All Stopped Containers in One Command.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing All Stopped Containers in One Command.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Clean all stopped containers\ndocker container prune -f",
    "solutionCode": "docker container prune -f",
    "hints": [
      "Write:\ndocker container prune -f"
    ],
    "testCases": [
      {
        "id": "docker-22-tc-1",
        "description": "Verifies correct implementation for Removing All Stopped Containers in One Command",
        "testFn": "code.includes('docker container prune')"
      }
    ]
  },
  {
    "id": "docker-23-inspecting-container-metadata-wi",
    "title": "23. Inspecting Container Metadata with docker inspect",
    "slug": "lesson-23-inspecting-container-metadata-wi",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Inspecting Container Metadata with docker inspect in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Inspecting Container Metadata with docker inspect",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Reading a car's full vehicle history report: engine size, tire pressure, and VIN number.",
    "explanationMarkdown": "### Inspecting Container Metadata with docker inspect\n\n`docker inspect` outputs comprehensive JSON metadata (IP address, mounts, environment, state).\n\n```bash\ndocker inspect web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Container Metadata with docker inspect",
      "code": "docker inspect web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Container Metadata with docker inspect.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Container Metadata with docker inspect.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# View detailed JSON metadata of container\ndocker inspect web-gateway",
    "solutionCode": "docker inspect web-gateway",
    "hints": [
      "Write:\ndocker inspect web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-23-tc-1",
        "description": "Verifies correct implementation for Inspecting Container Metadata with docker inspect",
        "testFn": "code.includes('docker inspect')"
      }
    ]
  },
  {
    "id": "docker-24-streaming-container-logs-with-do",
    "title": "24. Streaming Container Logs with docker logs -f",
    "slug": "lesson-24-streaming-container-logs-with-do",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Streaming Container Logs with docker logs -f in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Streaming Container Logs with docker logs -f",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Tuning your radio scanner to the airplane cockpit voice channel in real time.",
    "explanationMarkdown": "### Streaming Container Logs with docker logs -f\n\n`docker logs -f <container>` streams standard output (stdout) and standard error (stderr) live to your terminal.\n\n```bash\ndocker logs -f web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Streaming Container Logs with docker logs -f",
      "code": "docker logs -f web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Streaming Container Logs with docker logs -f.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Streaming Container Logs with docker logs -f.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Follow live output logs from container\ndocker logs -f web-gateway",
    "solutionCode": "docker logs -f web-gateway",
    "hints": [
      "Write:\ndocker logs -f web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-24-tc-1",
        "description": "Verifies correct implementation for Streaming Container Logs with docker logs -f",
        "testFn": "code.includes('docker logs')"
      }
    ]
  },
  {
    "id": "docker-25-executing-commands-in-running-co",
    "title": "25. Executing Commands in Running Containers with docker exec",
    "slug": "lesson-25-executing-commands-in-running-co",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Executing Commands in Running Containers with docker exec in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Executing Commands in Running Containers with docker exec",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Opening the maintenance hatch of an operating submarine to check an internal pipe gauge.",
    "explanationMarkdown": "### Executing Commands in Running Containers with docker exec\n\n`docker exec -it <container> <cmd>` runs a new process inside an already-running container.\n\n```bash\ndocker exec -it web-gateway sh\n```",
    "workedExample": {
      "title": "Worked Example: Executing Commands in Running Containers with docker exec",
      "code": "docker exec -it web-gateway sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Executing Commands in Running Containers with docker exec.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Executing Commands in Running Containers with docker exec.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Open interactive shell inside running container\ndocker exec -it web-gateway sh",
    "solutionCode": "docker exec -it web-gateway sh",
    "hints": [
      "Write:\ndocker exec -it web-gateway sh"
    ],
    "testCases": [
      {
        "id": "docker-25-tc-1",
        "description": "Verifies correct implementation for Executing Commands in Running Containers with docker exec",
        "testFn": "code.includes('docker exec -it')"
      }
    ]
  },
  {
    "id": "docker-26-copying-files-between-host-and-c",
    "title": "26. Copying Files Between Host and Container (docker cp)",
    "slug": "lesson-26-copying-files-between-host-and-c",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Copying Files Between Host and Container (docker cp) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Copying Files Between Host and Container (docker cp)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Passing a document through a bank teller's bulletproof security window slot.",
    "explanationMarkdown": "### Copying Files Between Host and Container (docker cp)\n\n`docker cp` copies files and directories between the host filesystem and container filesystem.\n\n```bash\ndocker cp ./config.json web-gateway:/etc/app/config.json\n```",
    "workedExample": {
      "title": "Worked Example: Copying Files Between Host and Container (docker cp)",
      "code": "docker cp ./config.json web-gateway:/etc/app/config.json",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Copying Files Between Host and Container (docker cp).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Copying Files Between Host and Container (docker cp).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Copy file into running container\ndocker cp ./config.json web-gateway:/etc/app/config.json",
    "solutionCode": "docker cp ./config.json web-gateway:/etc/app/config.json",
    "hints": [
      "Write:\ndocker cp ./config.json web-gateway:/etc/app/config.json"
    ],
    "testCases": [
      {
        "id": "docker-26-tc-1",
        "description": "Verifies correct implementation for Copying Files Between Host and Container (docker cp)",
        "testFn": "code.includes('docker cp')"
      }
    ]
  },
  {
    "id": "docker-27-container-resource-stats-with-do",
    "title": "27. Container Resource Stats with docker stats",
    "slug": "lesson-27-container-resource-stats-with-do",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Container Resource Stats with docker stats in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Container Resource Stats with docker stats",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A hospital patient monitor displaying live heart rate, oxygen level, and blood pressure.",
    "explanationMarkdown": "### Container Resource Stats with docker stats\n\nDisplays a live streaming dashboard of CPU percentage, memory usage, network I/O, and block I/O per container.\n\n```bash\ndocker stats --no-stream\n```",
    "workedExample": {
      "title": "Worked Example: Container Resource Stats with docker stats",
      "code": "docker stats --no-stream",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container Resource Stats with docker stats.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Resource Stats with docker stats.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# View live CPU, RAM, and network metrics\ndocker stats --no-stream",
    "solutionCode": "docker stats --no-stream",
    "hints": [
      "Write:\ndocker stats --no-stream"
    ],
    "testCases": [
      {
        "id": "docker-27-tc-1",
        "description": "Verifies correct implementation for Container Resource Stats with docker stats",
        "testFn": "code.includes('docker stats')"
      }
    ]
  },
  {
    "id": "docker-28-viewing-container-top-processes-",
    "title": "28. Viewing Container Top Processes (docker top)",
    "slug": "lesson-28-viewing-container-top-processes-",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Viewing Container Top Processes (docker top) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Viewing Container Top Processes (docker top)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Checking the security roster to see which technicians are currently standing in Room 101.",
    "explanationMarkdown": "### Viewing Container Top Processes (docker top)\n\nLists the active processes running inside a container along with their host PID numbers.\n\n```bash\ndocker top web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Viewing Container Top Processes (docker top)",
      "code": "docker top web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing Container Top Processes (docker top).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing Container Top Processes (docker top).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# View running processes inside container\ndocker top web-gateway",
    "solutionCode": "docker top web-gateway",
    "hints": [
      "Write:\ndocker top web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-28-tc-1",
        "description": "Verifies correct implementation for Viewing Container Top Processes (docker top)",
        "testFn": "code.includes('docker top')"
      }
    ]
  },
  {
    "id": "docker-29-viewing-container-file-changes-w",
    "title": "29. Viewing Container File Changes with docker diff",
    "slug": "lesson-29-viewing-container-file-changes-w",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Viewing Container File Changes with docker diff in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Viewing Container File Changes with docker diff",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Holding a blacklight over a hotel room to see where previous occupants moved or touched items.",
    "explanationMarkdown": "### Viewing Container File Changes with docker diff\n\nDisplays modified (`C`), added (`A`), or deleted (`D`) files in the container's writable layer.\n\n```bash\ndocker diff web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Viewing Container File Changes with docker diff",
      "code": "docker diff web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing Container File Changes with docker diff.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing Container File Changes with docker diff.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect filesystem changes in container writable layer\ndocker diff web-gateway",
    "solutionCode": "docker diff web-gateway",
    "hints": [
      "Write:\ndocker diff web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-29-tc-1",
        "description": "Verifies correct implementation for Viewing Container File Changes with docker diff",
        "testFn": "code.includes('docker diff')"
      }
    ]
  },
  {
    "id": "docker-30-module-2-review-image-&-containe",
    "title": "30. Module 2 Review: Image & Container Operations",
    "slug": "lesson-30-module-2-review-image-&-containe",
    "language": "docker",
    "category": "Module 2: Image Management & Container Operations",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 2 Review: Image & Container Operations in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 2 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A ship's quartermaster conducting a full audit of all cargo crates and inventory on board.",
    "explanationMarkdown": "### Module 2 Review: Image & Container Operations\n\nMastery over pulling tagged images, inspecting metadata, streaming logs, exec debugging, and disk pruning.\n\n```bash\ndocker system df\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Image & Container Operations",
      "code": "docker system df",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 2 Review: Image & Container Operations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 2 Review: Image & Container Operations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check system disk utilization\ndocker system df",
    "solutionCode": "docker system df",
    "hints": [
      "Write:\ndocker system df"
    ],
    "testCases": [
      {
        "id": "docker-30-tc-1",
        "description": "Verifies correct implementation for Module 2 Review: Image & Container Operations",
        "testFn": "code.includes('docker system df')"
      }
    ]
  },
  {
    "id": "docker-31-anatomy-of-a-dockerfile-the-buil",
    "title": "31. Anatomy of a Dockerfile: The Building Recipe",
    "slug": "lesson-31-anatomy-of-a-dockerfile-the-buil",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Anatomy of a Dockerfile: The Building Recipe in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Anatomy of a Dockerfile",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A step-by-step baking recipe: starting with flour (base), adding sugar (code), and baking in the oven.",
    "explanationMarkdown": "### Anatomy of a Dockerfile: The Building Recipe\n\nA Dockerfile is a text document containing instructions to assemble a Docker image layer by layer.\n\n```bash\ndocker build -t my-app:1.0 .\n```",
    "workedExample": {
      "title": "Worked Example: Anatomy of a Dockerfile: The Building Recipe",
      "code": "docker build -t my-app:1.0 .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anatomy of a Dockerfile: The Building Recipe.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anatomy of a Dockerfile: The Building Recipe.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Build image from current directory Dockerfile\ndocker build -t my-app:1.0 .",
    "solutionCode": "docker build -t my-app:1.0 .",
    "hints": [
      "Write:\ndocker build -t my-app:1.0 ."
    ],
    "testCases": [
      {
        "id": "docker-31-tc-1",
        "description": "Verifies correct implementation for Anatomy of a Dockerfile: The Building Recipe",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-32-the-from-instruction-selecting-b",
    "title": "32. The FROM Instruction: Selecting Base Images",
    "slug": "lesson-32-the-from-instruction-selecting-b",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The FROM Instruction: Selecting Base Images in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The FROM Instruction",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Choosing the chassis for your vehicle: lightweight sports frame (Alpine) vs heavy truck chassis (Ubuntu).",
    "explanationMarkdown": "### The FROM Instruction: Selecting Base Images\n\n`FROM` initializes a new build stage and sets the foundational base image for subsequent instructions.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: The FROM Instruction: Selecting Base Images",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The FROM Instruction: Selecting Base Images.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The FROM Instruction: Selecting Base Images.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: specify Alpine Node base\n# FROM node:20-alpine\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-32-tc-1",
        "description": "Verifies correct implementation for The FROM Instruction: Selecting Base Images",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-33-official-images-vs-minimal-alpin",
    "title": "33. Official Images vs Minimal Alpine Variants",
    "slug": "lesson-33-official-images-vs-minimal-alpin",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Official Images vs Minimal Alpine Variants in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Official Images vs Minimal Alpine Variants",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A 5MB pocket Swiss Army knife (Alpine) vs a 500MB full workshop toolbox (Ubuntu).",
    "explanationMarkdown": "### Official Images vs Minimal Alpine Variants\n\nAlpine Linux base images weigh only ~5MB, reducing image download times and shrinking the security attack surface.\n\n```bash\ndocker pull alpine:latest\n```",
    "workedExample": {
      "title": "Worked Example: Official Images vs Minimal Alpine Variants",
      "code": "docker pull alpine:latest",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Official Images vs Minimal Alpine Variants.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Official Images vs Minimal Alpine Variants.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Pull lightweight Alpine image\ndocker pull alpine:latest",
    "solutionCode": "docker pull alpine:latest",
    "hints": [
      "Write:\ndocker pull alpine:latest"
    ],
    "testCases": [
      {
        "id": "docker-33-tc-1",
        "description": "Verifies correct implementation for Official Images vs Minimal Alpine Variants",
        "testFn": "code.includes('docker pull alpine')"
      }
    ]
  },
  {
    "id": "docker-34-setting-working-directory-with-w",
    "title": "34. Setting Working Directory with WORKDIR",
    "slug": "lesson-34-setting-working-directory-with-w",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Setting Working Directory with WORKDIR in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Setting Working Directory with WORKDIR",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Setting your tools and blueprints on Drafting Table #4 before beginning construction.",
    "explanationMarkdown": "### Setting Working Directory with WORKDIR\n\n`WORKDIR` sets the working directory for subsequent `RUN`, `CMD`, `ENTRYPOINT`, and `COPY` instructions.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Setting Working Directory with WORKDIR",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Setting Working Directory with WORKDIR.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Setting Working Directory with WORKDIR.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: set active working directory\n# WORKDIR /app\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-34-tc-1",
        "description": "Verifies correct implementation for Setting Working Directory with WORKDIR",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-35-copying-files-with-copy-vs-add",
    "title": "35. Copying Files with COPY vs ADD",
    "slug": "lesson-35-copying-files-with-copy-vs-add",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Copying Files with COPY vs ADD in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Copying Files with COPY vs ADD",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Using precision tweezers to place a file into a box (COPY) vs an automatic zip-unpacker drone (ADD).",
    "explanationMarkdown": "### Copying Files with COPY vs ADD\n\nPrefer `COPY` for copying local files; use `ADD` only when automatic tarball extraction or remote URLs are needed.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Copying Files with COPY vs ADD",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Copying Files with COPY vs ADD.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Copying Files with COPY vs ADD.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: copy package files\n# COPY package*.json ./\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-35-tc-1",
        "description": "Verifies correct implementation for Copying Files with COPY vs ADD",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-36-running-build-commands-with-run",
    "title": "36. Running Build Commands with RUN",
    "slug": "lesson-36-running-build-commands-with-run",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Running Build Commands with RUN in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Running Build Commands with RUN",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Tightening the bolts and welding the frame together during assembly line production.",
    "explanationMarkdown": "### Running Build Commands with RUN\n\n`RUN` executes commands during the build phase and commits the results into a new image layer.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Running Build Commands with RUN",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Running Build Commands with RUN.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Running Build Commands with RUN.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: install dependencies\n# RUN npm ci --only=production\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-36-tc-1",
        "description": "Verifies correct implementation for Running Build Commands with RUN",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-37-cmd-vs-entrypoint-default-vs-imm",
    "title": "37. CMD vs ENTRYPOINT: Default vs Immutable Command",
    "slug": "lesson-37-cmd-vs-entrypoint-default-vs-imm",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master CMD vs ENTRYPOINT: Default vs Immutable Command in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "CMD vs ENTRYPOINT",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "The default engine ignition button: you can override it with manual cranks if desired.",
    "explanationMarkdown": "### CMD vs ENTRYPOINT: Default vs Immutable Command\n\n`ENTRYPOINT` defines the executable; `CMD` provides default arguments that can be easily overridden on `docker run`.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: CMD vs ENTRYPOINT: Default vs Immutable Command",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CMD vs ENTRYPOINT: Default vs Immutable Command.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CMD vs ENTRYPOINT: Default vs Immutable Command.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: set default container command\n# CMD [\"node\", \"server.js\"]\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-37-tc-1",
        "description": "Verifies correct implementation for CMD vs ENTRYPOINT: Default vs Immutable Command",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-38-the-exec-form-[cmd,-arg]-vs-shel",
    "title": "38. The Exec Form [\"cmd\", \"arg\"] vs Shell Form",
    "slug": "lesson-38-the-exec-form-[cmd,-arg]-vs-shel",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master The Exec Form [\"cmd\", \"arg\"] vs Shell Form in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The Exec Form [\"cmd\", \"arg\"] vs Shell Form",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Speaking directly to the captain (exec form) vs shouting through a megaphone interpreter (shell form).",
    "explanationMarkdown": "### The Exec Form [\"cmd\", \"arg\"] vs Shell Form\n\nThe exec array form `[\"node\", \"app.js\"]` ensures your application runs as PID 1, receiving Unix signals cleanly.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: The Exec Form [\"cmd\", \"arg\"] vs Shell Form",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Exec Form [\"cmd\", \"arg\"] vs Shell Form.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Exec Form [\"cmd\", \"arg\"] vs Shell Form.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Always prefer exec array form\n# CMD [\"npm\", \"start\"]\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-38-tc-1",
        "description": "Verifies correct implementation for The Exec Form [\"cmd\", \"arg\"] vs Shell Form",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-39-documenting-ports-with-expose",
    "title": "39. Documenting Ports with EXPOSE",
    "slug": "lesson-39-documenting-ports-with-expose",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Documenting Ports with EXPOSE in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Documenting Ports with EXPOSE",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Labeling the electrical outlet on the exterior of a machine so technicians know what plug to insert.",
    "explanationMarkdown": "### Documenting Ports with EXPOSE\n\n`EXPOSE` serves as documentation between the image author and user; it does NOT publish the port automatically.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Documenting Ports with EXPOSE",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Documenting Ports with EXPOSE.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Documenting Ports with EXPOSE.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: document HTTP port\n# EXPOSE 3000\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-39-tc-1",
        "description": "Verifies correct implementation for Documenting Ports with EXPOSE",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-40-setting-environment-variables-wi",
    "title": "40. Setting Environment Variables with ENV",
    "slug": "lesson-40-setting-environment-variables-wi",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Setting Environment Variables with ENV in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Setting Environment Variables with ENV",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Calibrating the vehicle's dashboard dials to display kilometers instead of miles.",
    "explanationMarkdown": "### Setting Environment Variables with ENV\n\n`ENV` sets persistent environment variables available both during image build and inside running containers.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Setting Environment Variables with ENV",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Setting Environment Variables with ENV.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Setting Environment Variables with ENV.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: set runtime environment\n# ENV NODE_ENV=production PORT=8080\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-40-tc-1",
        "description": "Verifies correct implementation for Setting Environment Variables with ENV",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-41-build-time-arguments-with-arg",
    "title": "41. Build-Time Arguments with ARG",
    "slug": "lesson-41-build-time-arguments-with-arg",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Build-Time Arguments with ARG in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Build-Time Arguments with ARG",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A temporary stencil used during factory painting that is washed off before the car ships to customers.",
    "explanationMarkdown": "### Build-Time Arguments with ARG\n\n`ARG` defines variables available exclusively during image build time, not baked into the final runtime container.\n\n```bash\ndocker build --build-arg APP_VERSION=2.0 -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Build-Time Arguments with ARG",
      "code": "docker build --build-arg APP_VERSION=2.0 -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Build-Time Arguments with ARG.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Build-Time Arguments with ARG.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Pass build argument\ndocker build --build-arg APP_VERSION=2.0 -t app .",
    "solutionCode": "docker build --build-arg APP_VERSION=2.0 -t app .",
    "hints": [
      "Write:\ndocker build --build-arg APP_VERSION=2.0 -t app ."
    ],
    "testCases": [
      {
        "id": "docker-41-tc-1",
        "description": "Verifies correct implementation for Build-Time Arguments with ARG",
        "testFn": "code.includes('--build-arg') || code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-42-non-root-security-the-user-instr",
    "title": "42. Non-Root Security: The USER Instruction",
    "slug": "lesson-42-non-root-security-the-user-instr",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Non-Root Security: The USER Instruction in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Non-Root Security",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Requiring all factory visitors to wear standard guest badges instead of handing out master security keys.",
    "explanationMarkdown": "### Non-Root Security: The USER Instruction\n\nRunning as non-root (`USER node` or `USER 1001`) prevents attackers from gaining root access to the host if compromised.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Non-Root Security: The USER Instruction",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Non-Root Security: The USER Instruction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Non-Root Security: The USER Instruction.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile: switch to non-root user\n# USER node\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-42-tc-1",
        "description": "Verifies correct implementation for Non-Root Security: The USER Instruction",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-43-excluding-files-with-.dockerigno",
    "title": "43. Excluding Files with .dockerignore",
    "slug": "lesson-43-excluding-files-with-.dockerigno",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Excluding Files with .dockerignore in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Excluding Files with .dockerignore",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A packing checklist ensuring you don't accidentally pack dirty laundry and trash into moving boxes.",
    "explanationMarkdown": "### Excluding Files with .dockerignore\n\nPrevents `node_modules`, `.git`, `.env`, and secret keys from being sent into the Docker build context.\n\n```bash\ncat .dockerignore\n```",
    "workedExample": {
      "title": "Worked Example: Excluding Files with .dockerignore",
      "code": "cat .dockerignore",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Excluding Files with .dockerignore.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Excluding Files with .dockerignore.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect .dockerignore file\ncat .dockerignore",
    "solutionCode": "cat .dockerignore",
    "hints": [
      "Write:\ncat .dockerignore"
    ],
    "testCases": [
      {
        "id": "docker-43-tc-1",
        "description": "Verifies correct implementation for Excluding Files with .dockerignore",
        "testFn": "code.includes('.dockerignore') || code.includes('cat')"
      }
    ]
  },
  {
    "id": "docker-44-layer-caching-optimization-order",
    "title": "44. Layer Caching Optimization: Ordering Matters!",
    "slug": "lesson-44-layer-caching-optimization-order",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Layer Caching Optimization: Ordering Matters! in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Layer Caching Optimization",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Baking the pie crust first: you only re-bake the fruit topping when the recipe changes, not the whole crust.",
    "explanationMarkdown": "### Layer Caching Optimization: Ordering Matters!\n\nCopy `package.json` and run `npm install` BEFORE copying source code so dependency layers stay cached!\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Layer Caching Optimization: Ordering Matters!",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Layer Caching Optimization: Ordering Matters!.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Layer Caching Optimization: Ordering Matters!.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Build with cache optimization\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-44-tc-1",
        "description": "Verifies correct implementation for Layer Caching Optimization: Ordering Matters!",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-45-module-3-review-production-docke",
    "title": "45. Module 3 Review: Production Dockerfile Assembly",
    "slug": "lesson-45-module-3-review-production-docke",
    "language": "docker",
    "category": "Module 3: Dockerfile Crafting & Image Building",
    "difficulty": "Intermediate",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 3 Review: Production Dockerfile Assembly in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 3 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An architect's final inspection of an impeccably engineered prefabricated house.",
    "explanationMarkdown": "### Module 3 Review: Production Dockerfile Assembly\n\nMastery over base selection, workdir hygiene, exec-form commands, non-root users, and cache layer optimization.\n\n```bash\ndocker history app\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Production Dockerfile Assembly",
      "code": "docker history app",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 3 Review: Production Dockerfile Assembly.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 3 Review: Production Dockerfile Assembly.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify built image layers\ndocker history app",
    "solutionCode": "docker history app",
    "hints": [
      "Write:\ndocker history app"
    ],
    "testCases": [
      {
        "id": "docker-45-tc-1",
        "description": "Verifies correct implementation for Module 3 Review: Production Dockerfile Assembly",
        "testFn": "code.includes('docker history')"
      }
    ]
  },
  {
    "id": "docker-46-why-multi-stage-builds?-shrinkin",
    "title": "46. Why Multi-Stage Builds? Shrinking 1GB to 25MB",
    "slug": "lesson-46-why-multi-stage-builds?-shrinkin",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Why Multi-Stage Builds? Shrinking 1GB to 25MB in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Why Multi-Stage Builds? Shrinking 1GB to 25MB",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Building a car inside an enormous steel mill, but driving only the sleek finished sports car out onto the highway.",
    "explanationMarkdown": "### Why Multi-Stage Builds? Shrinking 1GB to 25MB\n\nMulti-stage builds separate the heavy build environment (compilers, SDKs) from the final lean runtime container.\n\n```bash\ndocker images\n```",
    "workedExample": {
      "title": "Worked Example: Why Multi-Stage Builds? Shrinking 1GB to 25MB",
      "code": "docker images",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Multi-Stage Builds? Shrinking 1GB to 25MB.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Multi-Stage Builds? Shrinking 1GB to 25MB.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect image sizes\ndocker images",
    "solutionCode": "docker images",
    "hints": [
      "Write:\ndocker images"
    ],
    "testCases": [
      {
        "id": "docker-46-tc-1",
        "description": "Verifies correct implementation for Why Multi-Stage Builds? Shrinking 1GB to 25MB",
        "testFn": "code.includes('docker images')"
      }
    ]
  },
  {
    "id": "docker-47-naming-build-stages-with-as-as-b",
    "title": "47. Naming Build Stages with AS (AS builder)",
    "slug": "lesson-47-naming-build-stages-with-as-as-b",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Naming Build Stages with AS (AS builder) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Naming Build Stages with AS (AS builder)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Labeling Room 1 as 'Construction Shop' and Room 2 as 'Showroom'.",
    "explanationMarkdown": "### Naming Build Stages with AS (AS builder)\n\n`FROM base AS stage_name` names intermediate stages for easy reference in subsequent `COPY --from` instructions.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Naming Build Stages with AS (AS builder)",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Naming Build Stages with AS (AS builder).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Naming Build Stages with AS (AS builder).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile multi-stage header\n# FROM node:20-alpine AS builder\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-47-tc-1",
        "description": "Verifies correct implementation for Naming Build Stages with AS (AS builder)",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-48-copying-artifacts-across-stages-",
    "title": "48. Copying Artifacts Across Stages (COPY --from=builder)",
    "slug": "lesson-48-copying-artifacts-across-stages-",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Copying Artifacts Across Stages (COPY --from=builder) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Copying Artifacts Across Stages (COPY --from=builder)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Picking up only the finished golden watch from the jeweler's bench and leaving behind the metal shavings.",
    "explanationMarkdown": "### Copying Artifacts Across Stages (COPY --from=builder)\n\n`COPY --from=builder <src> <dest>` selectively copies only compiled production artifacts into the final runtime stage.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Copying Artifacts Across Stages (COPY --from=builder)",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Copying Artifacts Across Stages (COPY --from=builder).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Copying Artifacts Across Stages (COPY --from=builder).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile copy from builder\n# COPY --from=builder /app/dist ./dist\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-48-tc-1",
        "description": "Verifies correct implementation for Copying Artifacts Across Stages (COPY --from=builder)",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-49-building-go-and-rust-apps-into-s",
    "title": "49. Building Go and Rust Apps into Scratch Images",
    "slug": "lesson-49-building-go-and-rust-apps-into-s",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Building Go and Rust Apps into Scratch Images in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Building Go and Rust Apps into Scratch Images",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Packaging a single self-contained robot into a vacuum-sealed plastic bag with zero extra baggage.",
    "explanationMarkdown": "### Building Go and Rust Apps into Scratch Images\n\nCompiled Go/Rust binaries need no OS runtime; deploying into `FROM scratch` yields ultra-secure ~10MB images!\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Building Go and Rust Apps into Scratch Images",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building Go and Rust Apps into Scratch Images.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building Go and Rust Apps into Scratch Images.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile scratch runtime\n# FROM scratch\n# COPY --from=builder /bin/app /bin/app\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-49-tc-1",
        "description": "Verifies correct implementation for Building Go and Rust Apps into Scratch Images",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-50-multi-stage-node.js-architecture",
    "title": "50. Multi-Stage Node.js Architecture (Deps, Build, Runner)",
    "slug": "lesson-50-multi-stage-node.js-architecture",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multi-Stage Node.js Architecture (Deps, Build, Runner) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Multi-Stage Node.js Architecture (Deps, Build, Runner)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A three-station factory line: Station 1 cuts fabric, Station 2 sews, Station 3 packages for delivery.",
    "explanationMarkdown": "### Multi-Stage Node.js Architecture (Deps, Build, Runner)\n\nStage 1 installs all deps, Stage 2 builds TypeScript/bundles, Stage 3 installs only production deps and runs.\n\n```bash\ndocker build -t node-api:prod .\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Stage Node.js Architecture (Deps, Build, Runner)",
      "code": "docker build -t node-api:prod .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Stage Node.js Architecture (Deps, Build, Runner).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Stage Node.js Architecture (Deps, Build, Runner).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Build production Node container\ndocker build -t node-api:prod .",
    "solutionCode": "docker build -t node-api:prod .",
    "hints": [
      "Write:\ndocker build -t node-api:prod ."
    ],
    "testCases": [
      {
        "id": "docker-50-tc-1",
        "description": "Verifies correct implementation for Multi-Stage Node.js Architecture (Deps, Build, Runner)",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-51-multi-stage-python-wheels-build",
    "title": "51. Multi-Stage Python Wheels Build",
    "slug": "lesson-51-multi-stage-python-wheels-build",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Multi-Stage Python Wheels Build in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Multi-Stage Python Wheels Build",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Baking raw ingredients into pre-packaged cookies in the bakery, then loading cookies onto delivery shelves.",
    "explanationMarkdown": "### Multi-Stage Python Wheels Build\n\nCompile C-extensions into Python wheels in a builder stage, installing wheels into a slim runtime without gcc compilers.\n\n```bash\ndocker build -t py-api .\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Stage Python Wheels Build",
      "code": "docker build -t py-api .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Stage Python Wheels Build.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Stage Python Wheels Build.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Build Python container\ndocker build -t py-api .",
    "solutionCode": "docker build -t py-api .",
    "hints": [
      "Write:\ndocker build -t py-api ."
    ],
    "testCases": [
      {
        "id": "docker-51-tc-1",
        "description": "Verifies correct implementation for Multi-Stage Python Wheels Build",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-52-docker-buildkit-engine-features",
    "title": "52. Docker BuildKit Engine Features",
    "slug": "lesson-52-docker-buildkit-engine-features",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Docker BuildKit Engine Features in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker BuildKit Engine Features",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Upgrading from a single-lane tractor road to an automated 8-lane conveyor highway.",
    "explanationMarkdown": "### Docker BuildKit Engine Features\n\nBuildKit executes independent build stages concurrently, caches secrets safely, and skips unused stages.\n\n```bash\nexport DOCKER_BUILDKIT=1\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Docker BuildKit Engine Features",
      "code": "export DOCKER_BUILDKIT=1\ndocker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker BuildKit Engine Features.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker BuildKit Engine Features.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Enable BuildKit for faster builds\nexport DOCKER_BUILDKIT=1\ndocker build -t app .",
    "solutionCode": "export DOCKER_BUILDKIT=1\ndocker build -t app .",
    "hints": [
      "Write:\nexport DOCKER_BUILDKIT=1\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-52-tc-1",
        "description": "Verifies correct implementation for Docker BuildKit Engine Features",
        "testFn": "code.includes('DOCKER_BUILDKIT') || code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-53-cache-mounts-for-package-manager",
    "title": "53. Cache Mounts for Package Managers (--mount=type=cache)",
    "slug": "lesson-53-cache-mounts-for-package-manager",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Cache Mounts for Package Managers (--mount=type=cache) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Cache Mounts for Package Managers (--mount=type=cache)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A permanent supply depot where parts stay stored across shifts so you don't re-order every morning.",
    "explanationMarkdown": "### Cache Mounts for Package Managers (--mount=type=cache)\n\nPreserves package manager caches (`/root/.npm`, `/root/.cache/pip`) across builds without baking them into layers.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Cache Mounts for Package Managers (--mount=type=cache)",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cache Mounts for Package Managers (--mount=type=cache).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cache Mounts for Package Managers (--mount=type=cache).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile cache mount\n# RUN --mount=type=cache,target=/root/.npm npm install\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-53-tc-1",
        "description": "Verifies correct implementation for Cache Mounts for Package Managers (--mount=type=cache)",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-54-mounting-build-secrets-safely---",
    "title": "54. Mounting Build Secrets Safely (--mount=type=secret)",
    "slug": "lesson-54-mounting-build-secrets-safely---",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Mounting Build Secrets Safely (--mount=type=secret) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Mounting Build Secrets Safely (--mount=type=secret)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Whispering a bank safe combination to a vault clerk during inspection without writing it on the wall.",
    "explanationMarkdown": "### Mounting Build Secrets Safely (--mount=type=secret)\n\nMounts private credentials temporarily during a single `RUN` command without persisting them in any image layer!\n\n```bash\ndocker build --secret id=npmrc,src=.npmrc -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Mounting Build Secrets Safely (--mount=type=secret)",
      "code": "docker build --secret id=npmrc,src=.npmrc -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mounting Build Secrets Safely (--mount=type=secret).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mounting Build Secrets Safely (--mount=type=secret).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Build with private secret without leaking into image\ndocker build --secret id=npmrc,src=.npmrc -t app .",
    "solutionCode": "docker build --secret id=npmrc,src=.npmrc -t app .",
    "hints": [
      "Write:\ndocker build --secret id=npmrc,src=.npmrc -t app ."
    ],
    "testCases": [
      {
        "id": "docker-54-tc-1",
        "description": "Verifies correct implementation for Mounting Build Secrets Safely (--mount=type=secret)",
        "testFn": "code.includes('--secret') || code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-55-inspecting-layer-sizes-with-dock",
    "title": "55. Inspecting Layer Sizes with docker history",
    "slug": "lesson-55-inspecting-layer-sizes-with-dock",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Inspecting Layer Sizes with docker history in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Inspecting Layer Sizes with docker history",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A hospital X-ray revealing which organs are occupying what percentage of body volume.",
    "explanationMarkdown": "### Inspecting Layer Sizes with docker history\n\n`docker history <image>` reveals every instruction, timestamp, and byte size contributed by each layer.\n\n```bash\ndocker history my-app:1.0\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Layer Sizes with docker history",
      "code": "docker history my-app:1.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Layer Sizes with docker history.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Layer Sizes with docker history.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect layer size breakdown\ndocker history my-app:1.0",
    "solutionCode": "docker history my-app:1.0",
    "hints": [
      "Write:\ndocker history my-app:1.0"
    ],
    "testCases": [
      {
        "id": "docker-55-tc-1",
        "description": "Verifies correct implementation for Inspecting Layer Sizes with docker history",
        "testFn": "code.includes('docker history')"
      }
    ]
  },
  {
    "id": "docker-56-analyzing-images-with-the-dive-t",
    "title": "56. Analyzing Images with the Dive Tool",
    "slug": "lesson-56-analyzing-images-with-the-dive-t",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Analyzing Images with the Dive Tool in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Analyzing Images with the Dive Tool",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A submarine radar sounding deep ocean depths to find hidden wasted pockets of air.",
    "explanationMarkdown": "### Analyzing Images with the Dive Tool\n\nThe open-source `dive` tool analyzes Docker images, calculates wasted space percentage, and shows layer file trees.\n\n```bash\ndive my-app:1.0\n```",
    "workedExample": {
      "title": "Worked Example: Analyzing Images with the Dive Tool",
      "code": "dive my-app:1.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Analyzing Images with the Dive Tool.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Analyzing Images with the Dive Tool.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Analyze layer efficiency with dive\ndive my-app:1.0",
    "solutionCode": "dive my-app:1.0",
    "hints": [
      "Write:\ndive my-app:1.0"
    ],
    "testCases": [
      {
        "id": "docker-56-tc-1",
        "description": "Verifies correct implementation for Analyzing Images with the Dive Tool",
        "testFn": "code.includes('dive')"
      }
    ]
  },
  {
    "id": "docker-57-vulnerability-scanning-with-dock",
    "title": "57. Vulnerability Scanning with Docker Scout and Trivy",
    "slug": "lesson-57-vulnerability-scanning-with-dock",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Vulnerability Scanning with Docker Scout and Trivy in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Vulnerability Scanning with Docker Scout and Trivy",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A TSA airport security scanner detecting concealed contraband before boarding a flight.",
    "explanationMarkdown": "### Vulnerability Scanning with Docker Scout and Trivy\n\nScans OS packages and application dependencies for known Common Vulnerabilities and Exposures (CVEs).\n\n```bash\ndocker scout cves my-app:1.0\n```",
    "workedExample": {
      "title": "Worked Example: Vulnerability Scanning with Docker Scout and Trivy",
      "code": "docker scout cves my-app:1.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vulnerability Scanning with Docker Scout and Trivy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vulnerability Scanning with Docker Scout and Trivy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Scan image for CVE security vulnerabilities\ndocker scout cves my-app:1.0",
    "solutionCode": "docker scout cves my-app:1.0",
    "hints": [
      "Write:\ndocker scout cves my-app:1.0"
    ],
    "testCases": [
      {
        "id": "docker-57-tc-1",
        "description": "Verifies correct implementation for Vulnerability Scanning with Docker Scout and Trivy",
        "testFn": "code.includes('docker scout') || code.includes('trivy')"
      }
    ]
  },
  {
    "id": "docker-58-distroless-images-by-google",
    "title": "58. Distroless Images by Google",
    "slug": "lesson-58-distroless-images-by-google",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Distroless Images by Google in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Distroless Images by Google",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A sterile laboratory cleanroom containing only the test tube and microscope: zero trash cans, zero stray pens.",
    "explanationMarkdown": "### Distroless Images by Google\n\nDistroless images contain strictly your app and its runtime\u2014no package managers, no shells, no attack tools!\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Distroless Images by Google",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Distroless Images by Google.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Distroless Images by Google.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Dockerfile distroless runtime\n# FROM gcr.io/distroless/nodejs20-debian12\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-58-tc-1",
        "description": "Verifies correct implementation for Distroless Images by Google",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-59-minimizing-layer-counts-&&-chain",
    "title": "59. Minimizing Layer Counts (&& Chaining Commands)",
    "slug": "lesson-59-minimizing-layer-counts-&&-chain",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Minimizing Layer Counts (&& Chaining Commands) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Minimizing Layer Counts (&& Chaining Commands)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Sweeping up and throwing away the packaging paper in the exact same motion as assembling the chair.",
    "explanationMarkdown": "### Minimizing Layer Counts (&& Chaining Commands)\n\nChain installation and cleanup in a single `RUN` instruction so temporary cache files aren't saved into image layers.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: Minimizing Layer Counts (&& Chaining Commands)",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Minimizing Layer Counts (&& Chaining Commands).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Minimizing Layer Counts (&& Chaining Commands).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Chaining commands in Dockerfile\n# RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-59-tc-1",
        "description": "Verifies correct implementation for Minimizing Layer Counts (&& Chaining Commands)",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-60-module-4-review-10x-image-optimi",
    "title": "60. Module 4 Review: 10x Image Optimization Capstone",
    "slug": "lesson-60-module-4-review-10x-image-optimi",
    "language": "docker",
    "category": "Module 4: Multi-Stage Builds & Optimization",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 4 Review: 10x Image Optimization Capstone in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 4 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A championship Olympic racing bicycle stripped of every unnecessary gram of steel.",
    "explanationMarkdown": "### Module 4 Review: 10x Image Optimization Capstone\n\nMastery over multi-stage pipelines, BuildKit caching, secret mounts, distroless runtimes, and vulnerability audits.\n\n```bash\ndocker images my-app:prod\n```",
    "workedExample": {
      "title": "Worked Example: Module 4 Review: 10x Image Optimization Capstone",
      "code": "docker images my-app:prod",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 4 Review: 10x Image Optimization Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 4 Review: 10x Image Optimization Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check finalized optimized image\ndocker images my-app:prod",
    "solutionCode": "docker images my-app:prod",
    "hints": [
      "Write:\ndocker images my-app:prod"
    ],
    "testCases": [
      {
        "id": "docker-60-tc-1",
        "description": "Verifies correct implementation for Module 4 Review: 10x Image Optimization Capstone",
        "testFn": "code.includes('docker images')"
      }
    ]
  },
  {
    "id": "docker-61-container-ephemeral-storage-vs-p",
    "title": "61. Container Ephemeral Storage vs Persistent Storage",
    "slug": "lesson-61-container-ephemeral-storage-vs-p",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Container Ephemeral Storage vs Persistent Storage in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Container Ephemeral Storage vs Persistent Storage",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Drawing notes in the sand at low tide (ephemeral) vs carving words into granite rock (persistent).",
    "explanationMarkdown": "### Container Ephemeral Storage vs Persistent Storage\n\nData written to a container's writable layer vanishes when the container is deleted; volumes persist permanently.\n\n```bash\ndocker inspect -f '{{ .Mounts }}' web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Container Ephemeral Storage vs Persistent Storage",
      "code": "docker inspect -f '{{ .Mounts }}' web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Container Ephemeral Storage vs Persistent Storage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Ephemeral Storage vs Persistent Storage.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check container volume mounts\ndocker inspect -f '{{ .Mounts }}' web-gateway",
    "solutionCode": "docker inspect -f '{{ .Mounts }}' web-gateway",
    "hints": [
      "Write:\ndocker inspect -f '{{ .Mounts }}' web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-61-tc-1",
        "description": "Verifies correct implementation for Container Ephemeral Storage vs Persistent Storage",
        "testFn": "code.includes('docker inspect')"
      }
    ]
  },
  {
    "id": "docker-62-docker-named-volumes-managed-by-",
    "title": "62. Docker Named Volumes (Managed by Docker)",
    "slug": "lesson-62-docker-named-volumes-managed-by-",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Docker Named Volumes (Managed by Docker) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker Named Volumes (Managed by Docker)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Renting a secure locked storage locker inside a specialized climate-controlled warehouse.",
    "explanationMarkdown": "### Docker Named Volumes (Managed by Docker)\n\nNamed volumes are stored in `/var/lib/docker/volumes/` managed by Docker, completely isolated from host path quirks.\n\n```bash\ndocker volume create pgdata\n```",
    "workedExample": {
      "title": "Worked Example: Docker Named Volumes (Managed by Docker)",
      "code": "docker volume create pgdata",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker Named Volumes (Managed by Docker).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Named Volumes (Managed by Docker).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Create a managed persistent volume\ndocker volume create pgdata",
    "solutionCode": "docker volume create pgdata",
    "hints": [
      "Write:\ndocker volume create pgdata"
    ],
    "testCases": [
      {
        "id": "docker-62-tc-1",
        "description": "Verifies correct implementation for Docker Named Volumes (Managed by Docker)",
        "testFn": "code.includes('docker volume create')"
      }
    ]
  },
  {
    "id": "docker-63-mounting-volumes-with--v-and---m",
    "title": "63. Mounting Volumes with -v and --mount Flags",
    "slug": "lesson-63-mounting-volumes-with--v-and---m",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Mounting Volumes with -v and --mount Flags in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Mounting Volumes with -v and --mount Flags",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Plugging an external USB solid-state drive into a laptop.",
    "explanationMarkdown": "### Mounting Volumes with -v and --mount Flags\n\nMounts storage volumes into container directory paths: `-v <volume_name>:<container_path>`.\n\n```bash\ndocker run -d -v pgdata:/var/lib/postgresql/data postgres\n```",
    "workedExample": {
      "title": "Worked Example: Mounting Volumes with -v and --mount Flags",
      "code": "docker run -d -v pgdata:/var/lib/postgresql/data postgres",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mounting Volumes with -v and --mount Flags.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mounting Volumes with -v and --mount Flags.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Mount named volume to Postgres container\ndocker run -d -v pgdata:/var/lib/postgresql/data postgres",
    "solutionCode": "docker run -d -v pgdata:/var/lib/postgresql/data postgres",
    "hints": [
      "Write:\ndocker run -d -v pgdata:/var/lib/postgresql/data postgres"
    ],
    "testCases": [
      {
        "id": "docker-63-tc-1",
        "description": "Verifies correct implementation for Mounting Volumes with -v and --mount Flags",
        "testFn": "code.includes('-v pgdata:') || code.includes('--mount')"
      }
    ]
  },
  {
    "id": "docker-64-host-bind-mounts-for-local-devel",
    "title": "64. Host Bind Mounts for Local Development",
    "slug": "lesson-64-host-bind-mounts-for-local-devel",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Host Bind Mounts for Local Development in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Host Bind Mounts for Local Development",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Cutting a glass window in your office wall looking directly onto the drafting table outside.",
    "explanationMarkdown": "### Host Bind Mounts for Local Development\n\nBind mounts link a specific directory on the host machine directly into the container for live code changes.\n\n```bash\ndocker run -d -v $(pwd):/app -p 3000:3000 node-dev\n```",
    "workedExample": {
      "title": "Worked Example: Host Bind Mounts for Local Development",
      "code": "docker run -d -v $(pwd):/app -p 3000:3000 node-dev",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Host Bind Mounts for Local Development.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Host Bind Mounts for Local Development.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Bind mount current source code for hot reload\ndocker run -d -v $(pwd):/app -p 3000:3000 node-dev",
    "solutionCode": "docker run -d -v $(pwd):/app -p 3000:3000 node-dev",
    "hints": [
      "Write:\ndocker run -d -v $(pwd):/app -p 3000:3000 node-dev"
    ],
    "testCases": [
      {
        "id": "docker-64-tc-1",
        "description": "Verifies correct implementation for Host Bind Mounts for Local Development",
        "testFn": "code.includes('-v $(pwd):') || code.includes('-v ./:')"
      }
    ]
  },
  {
    "id": "docker-65-listing-and-inspecting-volumes",
    "title": "65. Listing and Inspecting Volumes",
    "slug": "lesson-65-listing-and-inspecting-volumes",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Listing and Inspecting Volumes in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Listing and Inspecting Volumes",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Reviewing the master ledger of all rented storage lockers in the facility.",
    "explanationMarkdown": "### Listing and Inspecting Volumes\n\n`docker volume ls` displays volume drivers and names; `docker volume inspect <name>` reveals mountpoint on host.\n\n```bash\ndocker volume ls\n```",
    "workedExample": {
      "title": "Worked Example: Listing and Inspecting Volumes",
      "code": "docker volume ls",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing and Inspecting Volumes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing and Inspecting Volumes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# List all Docker volumes on system\ndocker volume ls",
    "solutionCode": "docker volume ls",
    "hints": [
      "Write:\ndocker volume ls"
    ],
    "testCases": [
      {
        "id": "docker-65-tc-1",
        "description": "Verifies correct implementation for Listing and Inspecting Volumes",
        "testFn": "code.includes('docker volume ls')"
      }
    ]
  },
  {
    "id": "docker-66-removing-volumes-with-docker-vol",
    "title": "66. Removing Volumes with docker volume rm",
    "slug": "lesson-66-removing-volumes-with-docker-vol",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Removing Volumes with docker volume rm in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Removing Volumes with docker volume rm",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Canceling the lease on an empty storage unit and returning the lock to management.",
    "explanationMarkdown": "### Removing Volumes with docker volume rm\n\nDeletes a named volume from host disk (only allowed if no containers are currently mounting it).\n\n```bash\ndocker volume rm pgdata\n```",
    "workedExample": {
      "title": "Worked Example: Removing Volumes with docker volume rm",
      "code": "docker volume rm pgdata",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Removing Volumes with docker volume rm.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Removing Volumes with docker volume rm.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Delete an unused volume\ndocker volume rm pgdata",
    "solutionCode": "docker volume rm pgdata",
    "hints": [
      "Write:\ndocker volume rm pgdata"
    ],
    "testCases": [
      {
        "id": "docker-66-tc-1",
        "description": "Verifies correct implementation for Removing Volumes with docker volume rm",
        "testFn": "code.includes('docker volume rm')"
      }
    ]
  },
  {
    "id": "docker-67-pruning-unused-volumes-docker-vo",
    "title": "67. Pruning Unused Volumes (docker volume prune)",
    "slug": "lesson-67-pruning-unused-volumes-docker-vo",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Pruning Unused Volumes (docker volume prune) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Pruning Unused Volumes (docker volume prune)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Clearing out all abandoned storage lockers whose owners never returned.",
    "explanationMarkdown": "### Pruning Unused Volumes (docker volume prune)\n\nRemoves all anonymous and named volumes not actively referenced by any container.\n\n```bash\ndocker volume prune -f\n```",
    "workedExample": {
      "title": "Worked Example: Pruning Unused Volumes (docker volume prune)",
      "code": "docker volume prune -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pruning Unused Volumes (docker volume prune).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pruning Unused Volumes (docker volume prune).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Purge all dangling volumes\ndocker volume prune -f",
    "solutionCode": "docker volume prune -f",
    "hints": [
      "Write:\ndocker volume prune -f"
    ],
    "testCases": [
      {
        "id": "docker-67-tc-1",
        "description": "Verifies correct implementation for Pruning Unused Volumes (docker volume prune)",
        "testFn": "code.includes('docker volume prune')"
      }
    ]
  },
  {
    "id": "docker-68-persisting-database-data-postgre",
    "title": "68. Persisting Database Data (PostgreSQL Example)",
    "slug": "lesson-68-persisting-database-data-postgre",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Persisting Database Data (PostgreSQL Example) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Persisting Database Data (PostgreSQL Example)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A bank safe: if the building burns down, the reinforced steel safe inside survives intact.",
    "explanationMarkdown": "### Persisting Database Data (PostgreSQL Example)\n\nDatabases must always use persistent volumes so customer records survive container upgrades and crashes.\n\n```bash\ndocker run -d --name db -e POSTGRES_PASSWORD=secret -v db_data:/var/lib/postgresql/data postgres:16\n```",
    "workedExample": {
      "title": "Worked Example: Persisting Database Data (PostgreSQL Example)",
      "code": "docker run -d --name db -e POSTGRES_PASSWORD=secret -v db_data:/var/lib/postgresql/data postgres:16",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Persisting Database Data (PostgreSQL Example).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Persisting Database Data (PostgreSQL Example).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run PostgreSQL with persistent storage\ndocker run -d --name db -e POSTGRES_PASSWORD=secret -v db_data:/var/lib/postgresql/data postgres:16",
    "solutionCode": "docker run -d --name db -e POSTGRES_PASSWORD=secret -v db_data:/var/lib/postgresql/data postgres:16",
    "hints": [
      "Write:\ndocker run -d --name db -e POSTGRES_PASSWORD=secret -v db_data:/var/lib/postgresql/data postgres:16"
    ],
    "testCases": [
      {
        "id": "docker-68-tc-1",
        "description": "Verifies correct implementation for Persisting Database Data (PostgreSQL Example)",
        "testFn": "code.includes('POSTGRES_PASSWORD') && code.includes('db_data:')"
      }
    ]
  },
  {
    "id": "docker-69-read-only-mounts-ro-flag",
    "title": "69. Read-Only Mounts (:ro Flag)",
    "slug": "lesson-69-read-only-mounts-ro-flag",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Read-Only Mounts (:ro Flag) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Read-Only Mounts (",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Displaying historical museum manuscripts behind glass: visitors can read every word, but cannot touch.",
    "explanationMarkdown": "### Read-Only Mounts (:ro Flag)\n\nAppending `:ro` to volume mounts prevents containers from modifying, corrupting, or deleting host files.\n\n```bash\ndocker run -d -v /etc/ssl/certs:/certs:ro nginx\n```",
    "workedExample": {
      "title": "Worked Example: Read-Only Mounts (:ro Flag)",
      "code": "docker run -d -v /etc/ssl/certs:/certs:ro nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Read-Only Mounts (:ro Flag).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Read-Only Mounts (:ro Flag).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Mount sensitive configuration as read-only\ndocker run -d -v /etc/ssl/certs:/certs:ro nginx",
    "solutionCode": "docker run -d -v /etc/ssl/certs:/certs:ro nginx",
    "hints": [
      "Write:\ndocker run -d -v /etc/ssl/certs:/certs:ro nginx"
    ],
    "testCases": [
      {
        "id": "docker-69-tc-1",
        "description": "Verifies correct implementation for Read-Only Mounts (:ro Flag)",
        "testFn": "code.includes(':ro') || code.includes('readonly')"
      }
    ]
  },
  {
    "id": "docker-70-temporary-memory-mounts-tmpfs",
    "title": "70. Temporary Memory Mounts (tmpfs)",
    "slug": "lesson-70-temporary-memory-mounts-tmpfs",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Temporary Memory Mounts (tmpfs) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Temporary Memory Mounts (tmpfs)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Writing calculations on a child's magic erasable drawing slate that clears the instant you lift the sheet.",
    "explanationMarkdown": "### Temporary Memory Mounts (tmpfs)\n\n`tmpfs` mounts write directly to host RAM without touching disk, providing blazing speed and zero persistence.\n\n```bash\ndocker run -d --tmpfs /tmp:rw,noexec,nosuid redis\n```",
    "workedExample": {
      "title": "Worked Example: Temporary Memory Mounts (tmpfs)",
      "code": "docker run -d --tmpfs /tmp:rw,noexec,nosuid redis",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Temporary Memory Mounts (tmpfs).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Temporary Memory Mounts (tmpfs).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Mount in-memory volatile temporary storage\ndocker run -d --tmpfs /tmp:rw,noexec,nosuid redis",
    "solutionCode": "docker run -d --tmpfs /tmp:rw,noexec,nosuid redis",
    "hints": [
      "Write:\ndocker run -d --tmpfs /tmp:rw,noexec,nosuid redis"
    ],
    "testCases": [
      {
        "id": "docker-70-tc-1",
        "description": "Verifies correct implementation for Temporary Memory Mounts (tmpfs)",
        "testFn": "code.includes('--tmpfs')"
      }
    ]
  },
  {
    "id": "docker-71-volume-ownership-and-user-permis",
    "title": "71. Volume Ownership and User Permission Gotchas",
    "slug": "lesson-71-volume-ownership-and-user-permis",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Volume Ownership and User Permission Gotchas in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Volume Ownership and User Permission Gotchas",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Ensuring a visitor has the same keycard clearance level as the desk owner before unlocking the door.",
    "explanationMarkdown": "### Volume Ownership and User Permission Gotchas\n\nMatch container user UID with host UID to prevent created files from being locked as `root` on your desktop.\n\n```bash\ndocker run -u $(id -u):$(id -g) -v $(pwd):/app node:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Volume Ownership and User Permission Gotchas",
      "code": "docker run -u $(id -u):$(id -g) -v $(pwd):/app node:alpine",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Volume Ownership and User Permission Gotchas.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Volume Ownership and User Permission Gotchas.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run container with host user UID\ndocker run -u $(id -u):$(id -g) -v $(pwd):/app node:alpine",
    "solutionCode": "docker run -u $(id -u):$(id -g) -v $(pwd):/app node:alpine",
    "hints": [
      "Write:\ndocker run -u $(id -u):$(id -g) -v $(pwd):/app node:alpine"
    ],
    "testCases": [
      {
        "id": "docker-71-tc-1",
        "description": "Verifies correct implementation for Volume Ownership and User Permission Gotchas",
        "testFn": "code.includes('$(id -u)') || code.includes('-u ')"
      }
    ]
  },
  {
    "id": "docker-72-backing-up-docker-volumes-with-e",
    "title": "72. Backing Up Docker Volumes with Ephemeral Containers",
    "slug": "lesson-72-backing-up-docker-volumes-with-e",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Backing Up Docker Volumes with Ephemeral Containers in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Backing Up Docker Volumes with Ephemeral Containers",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Sending an emergency packing team into a bank vault to pack all gold bars into an armored transport van.",
    "explanationMarkdown": "### Backing Up Docker Volumes with Ephemeral Containers\n\nSpins up an ephemeral Alpine container that mounts the volume, compresses it to a tarball, and exits.\n\n```bash\ndocker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar czf /backup/pgdata.tar.gz -C /data .\n```",
    "workedExample": {
      "title": "Worked Example: Backing Up Docker Volumes with Ephemeral Containers",
      "code": "docker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar czf /backup/pgdata.tar.gz -C /data .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Backing Up Docker Volumes with Ephemeral Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Backing Up Docker Volumes with Ephemeral Containers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Backup volume contents to tar archive\ndocker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar czf /backup/pgdata.tar.gz -C /data .",
    "solutionCode": "docker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar czf /backup/pgdata.tar.gz -C /data .",
    "hints": [
      "Write:\ndocker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar czf /backup/pgdata.tar.gz -C /data ."
    ],
    "testCases": [
      {
        "id": "docker-72-tc-1",
        "description": "Verifies correct implementation for Backing Up Docker Volumes with Ephemeral Containers",
        "testFn": "code.includes('tar czf') || code.includes('--rm')"
      }
    ]
  },
  {
    "id": "docker-73-restoring-docker-volumes-from-ba",
    "title": "73. Restoring Docker Volumes from Backup Tarballs",
    "slug": "lesson-73-restoring-docker-volumes-from-ba",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Restoring Docker Volumes from Backup Tarballs in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Restoring Docker Volumes from Backup Tarballs",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Unpacking the gold bars from the armored van back into the new bank vault.",
    "explanationMarkdown": "### Restoring Docker Volumes from Backup Tarballs\n\nUnpacks a backup archive directly into a fresh volume using an ephemeral helper container.\n\n```bash\ndocker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar xzf /backup/pgdata.tar.gz -C /data\n```",
    "workedExample": {
      "title": "Worked Example: Restoring Docker Volumes from Backup Tarballs",
      "code": "docker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar xzf /backup/pgdata.tar.gz -C /data",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Restoring Docker Volumes from Backup Tarballs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Restoring Docker Volumes from Backup Tarballs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Restore tarball into clean volume\ndocker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar xzf /backup/pgdata.tar.gz -C /data",
    "solutionCode": "docker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar xzf /backup/pgdata.tar.gz -C /data",
    "hints": [
      "Write:\ndocker run --rm -v pgdata:/data -v $(pwd):/backup alpine tar xzf /backup/pgdata.tar.gz -C /data"
    ],
    "testCases": [
      {
        "id": "docker-73-tc-1",
        "description": "Verifies correct implementation for Restoring Docker Volumes from Backup Tarballs",
        "testFn": "code.includes('tar xzf') || code.includes('pgdata')"
      }
    ]
  },
  {
    "id": "docker-74-sharing-volumes-between-containe",
    "title": "74. Sharing Volumes Between Containers (--volumes-from)",
    "slug": "lesson-74-sharing-volumes-between-containe",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Sharing Volumes Between Containers (--volumes-from) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Sharing Volumes Between Containers (--volumes-from)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Two offices sharing a two-way filing cabinet built into the wall between their rooms.",
    "explanationMarkdown": "### Sharing Volumes Between Containers (--volumes-from)\n\nMounts all volumes defined in a source container directly into another container.\n\n```bash\ndocker run -d --name log-collector --volumes-from web-gateway fluentd\n```",
    "workedExample": {
      "title": "Worked Example: Sharing Volumes Between Containers (--volumes-from)",
      "code": "docker run -d --name log-collector --volumes-from web-gateway fluentd",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sharing Volumes Between Containers (--volumes-from).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sharing Volumes Between Containers (--volumes-from).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Share log volume between app and log collector\ndocker run -d --name log-collector --volumes-from web-gateway fluentd",
    "solutionCode": "docker run -d --name log-collector --volumes-from web-gateway fluentd",
    "hints": [
      "Write:\ndocker run -d --name log-collector --volumes-from web-gateway fluentd"
    ],
    "testCases": [
      {
        "id": "docker-74-tc-1",
        "description": "Verifies correct implementation for Sharing Volumes Between Containers (--volumes-from)",
        "testFn": "code.includes('--volumes-from')"
      }
    ]
  },
  {
    "id": "docker-75-module-5-review-storage-architec",
    "title": "75. Module 5 Review: Storage Architecture Mastery",
    "slug": "lesson-75-module-5-review-storage-architec",
    "language": "docker",
    "category": "Module 5: Storage & Persistent Volumes",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Master Module 5 Review: Storage Architecture Mastery in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 5 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A civil engineer inspecting water aqueducts, retention basins, and emergency overflow reservoirs.",
    "explanationMarkdown": "### Module 5 Review: Storage Architecture Mastery\n\nMastery over named volumes, host bind mounts, tmpfs volatile RAM, permission matching, and disaster backups.\n\n```bash\ndocker system df -v\n```",
    "workedExample": {
      "title": "Worked Example: Module 5 Review: Storage Architecture Mastery",
      "code": "docker system df -v",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 5 Review: Storage Architecture Mastery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 5 Review: Storage Architecture Mastery.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Audit system storage usage\ndocker system df -v",
    "solutionCode": "docker system df -v",
    "hints": [
      "Write:\ndocker system df -v"
    ],
    "testCases": [
      {
        "id": "docker-75-tc-1",
        "description": "Verifies correct implementation for Module 5 Review: Storage Architecture Mastery",
        "testFn": "code.includes('docker system df')"
      }
    ]
  },
  {
    "id": "docker-76-docker-networking-architecture-o",
    "title": "76. Docker Networking Architecture Overview",
    "slug": "lesson-76-docker-networking-architecture-o",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Docker Networking Architecture Overview in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker Networking Architecture Overview",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An airport telecommunications switchboard routing calls between ground crew, control tower, and planes.",
    "explanationMarkdown": "### Docker Networking Architecture Overview\n\nDocker provides bridge, host, overlay, and macvlan drivers for container communication.\n\n```bash\ndocker network ls\n```",
    "workedExample": {
      "title": "Worked Example: Docker Networking Architecture Overview",
      "code": "docker network ls",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker Networking Architecture Overview.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Networking Architecture Overview.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# List network drivers available\ndocker network ls",
    "solutionCode": "docker network ls",
    "hints": [
      "Write:\ndocker network ls"
    ],
    "testCases": [
      {
        "id": "docker-76-tc-1",
        "description": "Verifies correct implementation for Docker Networking Architecture Overview",
        "testFn": "code.includes('docker network ls')"
      }
    ]
  },
  {
    "id": "docker-77-the-default-bridge-network-and-i",
    "title": "77. The Default Bridge Network and Its Limitations",
    "slug": "lesson-77-the-default-bridge-network-and-i",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master The Default Bridge Network and Its Limitations in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The Default Bridge Network and Its Limitations",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A public CB radio channel where anyone can shout, but no one has a reliable personal extension number.",
    "explanationMarkdown": "### The Default Bridge Network and Its Limitations\n\nThe default bridge network does NOT support automatic container DNS resolution; you must use IP addresses.\n\n```bash\ndocker network inspect bridge\n```",
    "workedExample": {
      "title": "Worked Example: The Default Bridge Network and Its Limitations",
      "code": "docker network inspect bridge",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Default Bridge Network and Its Limitations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Default Bridge Network and Its Limitations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect default bridge network\ndocker network inspect bridge",
    "solutionCode": "docker network inspect bridge",
    "hints": [
      "Write:\ndocker network inspect bridge"
    ],
    "testCases": [
      {
        "id": "docker-77-tc-1",
        "description": "Verifies correct implementation for The Default Bridge Network and Its Limitations",
        "testFn": "code.includes('docker network inspect bridge') || code.includes('docker network inspect')"
      }
    ]
  },
  {
    "id": "docker-78-user-defined-bridge-networks-doc",
    "title": "78. User-Defined Bridge Networks: docker network create",
    "slug": "lesson-78-user-defined-bridge-networks-doc",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master User-Defined Bridge Networks: docker network create in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "User-Defined Bridge Networks",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Laying private telephone cables between specific office buildings on a corporate campus.",
    "explanationMarkdown": "### User-Defined Bridge Networks: docker network create\n\nUser-defined bridges provide automatic DNS resolution: containers talk to each other using container names!\n\n```bash\ndocker network create app-net\n```",
    "workedExample": {
      "title": "Worked Example: User-Defined Bridge Networks: docker network create",
      "code": "docker network create app-net",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for User-Defined Bridge Networks: docker network create.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of User-Defined Bridge Networks: docker network create.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Create custom isolated bridge network\ndocker network create app-net",
    "solutionCode": "docker network create app-net",
    "hints": [
      "Write:\ndocker network create app-net"
    ],
    "testCases": [
      {
        "id": "docker-78-tc-1",
        "description": "Verifies correct implementation for User-Defined Bridge Networks: docker network create",
        "testFn": "code.includes('docker network create')"
      }
    ]
  },
  {
    "id": "docker-79-automatic-dns-name-resolution-be",
    "title": "79. Automatic DNS Name Resolution Between Containers",
    "slug": "lesson-79-automatic-dns-name-resolution-be",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Automatic DNS Name Resolution Between Containers in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Automatic DNS Name Resolution Between Containers",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Dialing 'Accounting' on an office phone instead of having to remember their 10-digit telephone number.",
    "explanationMarkdown": "### Automatic DNS Name Resolution Between Containers\n\nEmbedded Docker DNS server resolves container names (`db`, `redis`, `api`) to their dynamic IP addresses automatically.\n\n```bash\ndocker run -d --name api --network app-net -e DB_HOST=db api-image\n```",
    "workedExample": {
      "title": "Worked Example: Automatic DNS Name Resolution Between Containers",
      "code": "docker run -d --name api --network app-net -e DB_HOST=db api-image",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automatic DNS Name Resolution Between Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automatic DNS Name Resolution Between Containers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Connect backend to db by container name\ndocker run -d --name api --network app-net -e DB_HOST=db api-image",
    "solutionCode": "docker run -d --name api --network app-net -e DB_HOST=db api-image",
    "hints": [
      "Write:\ndocker run -d --name api --network app-net -e DB_HOST=db api-image"
    ],
    "testCases": [
      {
        "id": "docker-79-tc-1",
        "description": "Verifies correct implementation for Automatic DNS Name Resolution Between Containers",
        "testFn": "code.includes('--network app-net')"
      }
    ]
  },
  {
    "id": "docker-80-connecting-running-containers-to",
    "title": "80. Connecting Running Containers to Networks",
    "slug": "lesson-80-connecting-running-containers-to",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Connecting Running Containers to Networks in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Connecting Running Containers to Networks",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Running an extra Ethernet cable into a server rack while the computer is turned on.",
    "explanationMarkdown": "### Connecting Running Containers to Networks\n\n`docker network connect <network> <container>` attaches a container to a network without restarting it.\n\n```bash\ndocker network connect app-net web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Connecting Running Containers to Networks",
      "code": "docker network connect app-net web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Connecting Running Containers to Networks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Connecting Running Containers to Networks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Connect existing container to network\ndocker network connect app-net web-gateway",
    "solutionCode": "docker network connect app-net web-gateway",
    "hints": [
      "Write:\ndocker network connect app-net web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-80-tc-1",
        "description": "Verifies correct implementation for Connecting Running Containers to Networks",
        "testFn": "code.includes('docker network connect')"
      }
    ]
  },
  {
    "id": "docker-81-disconnecting-from-networks-with",
    "title": "81. Disconnecting from Networks with docker network disconnect",
    "slug": "lesson-81-disconnecting-from-networks-with",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Disconnecting from Networks with docker network disconnect in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Disconnecting from Networks with docker network disconnect",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Unplugging the network cable from a workstation to isolate it.",
    "explanationMarkdown": "### Disconnecting from Networks with docker network disconnect\n\nDetaches a container from a network cleanly.\n\n```bash\ndocker network disconnect app-net web-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Disconnecting from Networks with docker network disconnect",
      "code": "docker network disconnect app-net web-gateway",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Disconnecting from Networks with docker network disconnect.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Disconnecting from Networks with docker network disconnect.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Disconnect container from network\ndocker network disconnect app-net web-gateway",
    "solutionCode": "docker network disconnect app-net web-gateway",
    "hints": [
      "Write:\ndocker network disconnect app-net web-gateway"
    ],
    "testCases": [
      {
        "id": "docker-81-tc-1",
        "description": "Verifies correct implementation for Disconnecting from Networks with docker network disconnect",
        "testFn": "code.includes('docker network disconnect')"
      }
    ]
  },
  {
    "id": "docker-82-port-mapping--p-host_portcontain",
    "title": "82. Port Mapping: -p host_port:container_port",
    "slug": "lesson-82-port-mapping--p-host_portcontain",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Port Mapping: -p host_port:container_port in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Port Mapping",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A mail forwarding service: letters sent to PO Box 8080 in New York are forwarded to Desk 80 in London.",
    "explanationMarkdown": "### Port Mapping: -p host_port:container_port\n\nBinds a port on the host machine to a port inside the container via iptables NAT rules.\n\n```bash\ndocker run -d -p 8080:80 nginx\n```",
    "workedExample": {
      "title": "Worked Example: Port Mapping: -p host_port:container_port",
      "code": "docker run -d -p 8080:80 nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Port Mapping: -p host_port:container_port.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Port Mapping: -p host_port:container_port.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Publish port 8080 on host to port 80 in container\ndocker run -d -p 8080:80 nginx",
    "solutionCode": "docker run -d -p 8080:80 nginx",
    "hints": [
      "Write:\ndocker run -d -p 8080:80 nginx"
    ],
    "testCases": [
      {
        "id": "docker-82-tc-1",
        "description": "Verifies correct implementation for Port Mapping: -p host_port:container_port",
        "testFn": "code.includes('-p 8080:80') || code.includes('-p ')"
      }
    ]
  },
  {
    "id": "docker-83-publishing-to-specific-host-ip-i",
    "title": "83. Publishing to Specific Host IP Interfaces",
    "slug": "lesson-83-publishing-to-specific-host-ip-i",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Publishing to Specific Host IP Interfaces in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Publishing to Specific Host IP Interfaces",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Plugging a security monitor directly into a closed-circuit camera so outside streets cannot see the feed.",
    "explanationMarkdown": "### Publishing to Specific Host IP Interfaces\n\nBinding to `127.0.0.1:port` prevents outside internet visitors from accessing private database ports.\n\n```bash\ndocker run -d -p 127.0.0.1:5432:5432 postgres\n```",
    "workedExample": {
      "title": "Worked Example: Publishing to Specific Host IP Interfaces",
      "code": "docker run -d -p 127.0.0.1:5432:5432 postgres",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Publishing to Specific Host IP Interfaces.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Publishing to Specific Host IP Interfaces.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Bind port strictly to localhost loopback\ndocker run -d -p 127.0.0.1:5432:5432 postgres",
    "solutionCode": "docker run -d -p 127.0.0.1:5432:5432 postgres",
    "hints": [
      "Write:\ndocker run -d -p 127.0.0.1:5432:5432 postgres"
    ],
    "testCases": [
      {
        "id": "docker-83-tc-1",
        "description": "Verifies correct implementation for Publishing to Specific Host IP Interfaces",
        "testFn": "code.includes('127.0.0.1:')"
      }
    ]
  },
  {
    "id": "docker-84-host-network-mode---network-host",
    "title": "84. Host Network Mode (--network host)",
    "slug": "lesson-84-host-network-mode---network-host",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Host Network Mode (--network host) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Host Network Mode (--network host)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Removing the office cubicle wall so your desk sits directly in the main hallway.",
    "explanationMarkdown": "### Host Network Mode (--network host)\n\nRemoves network isolation completely: container binds directly to host network interfaces with zero NAT overhead.\n\n```bash\ndocker run -d --network host nginx\n```",
    "workedExample": {
      "title": "Worked Example: Host Network Mode (--network host)",
      "code": "docker run -d --network host nginx",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Host Network Mode (--network host).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Host Network Mode (--network host).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run with zero network virtualization overhead\ndocker run -d --network host nginx",
    "solutionCode": "docker run -d --network host nginx",
    "hints": [
      "Write:\ndocker run -d --network host nginx"
    ],
    "testCases": [
      {
        "id": "docker-84-tc-1",
        "description": "Verifies correct implementation for Host Network Mode (--network host)",
        "testFn": "code.includes('--network host')"
      }
    ]
  },
  {
    "id": "docker-85-none-network-mode---network-none",
    "title": "85. None Network Mode (--network none)",
    "slug": "lesson-85-none-network-mode---network-none",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master None Network Mode (--network none) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "None Network Mode (--network none)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Placing a top-secret encryption computer inside a Faraday cage bunker with zero antennas or cables.",
    "explanationMarkdown": "### None Network Mode (--network none)\n\nDisables all network stacks: container has only loopback `127.0.0.1`, completely isolated from internet and LAN.\n\n```bash\ndocker run -d --network none secure-batch-job\n```",
    "workedExample": {
      "title": "Worked Example: None Network Mode (--network none)",
      "code": "docker run -d --network none secure-batch-job",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for None Network Mode (--network none).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of None Network Mode (--network none).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Completely isolate container from all networking\ndocker run -d --network none secure-batch-job",
    "solutionCode": "docker run -d --network none secure-batch-job",
    "hints": [
      "Write:\ndocker run -d --network none secure-batch-job"
    ],
    "testCases": [
      {
        "id": "docker-85-tc-1",
        "description": "Verifies correct implementation for None Network Mode (--network none)",
        "testFn": "code.includes('--network none')"
      }
    ]
  },
  {
    "id": "docker-86-network-aliases-with---network-a",
    "title": "86. Network Aliases with --network-alias",
    "slug": "lesson-86-network-aliases-with---network-a",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Network Aliases with --network-alias in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Network Aliases with --network-alias",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Giving three identical delivery vans the same company hotline number so calls distribute across them.",
    "explanationMarkdown": "### Network Aliases with --network-alias\n\nMultiple containers sharing the same network alias receive round-robin DNS load balancing!\n\n```bash\ndocker run -d --network app-net --network-alias search-service elasticsearch\n```",
    "workedExample": {
      "title": "Worked Example: Network Aliases with --network-alias",
      "code": "docker run -d --network app-net --network-alias search-service elasticsearch",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Network Aliases with --network-alias.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Network Aliases with --network-alias.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Add network DNS alias for load balancing\ndocker run -d --network app-net --network-alias search-service elasticsearch",
    "solutionCode": "docker run -d --network app-net --network-alias search-service elasticsearch",
    "hints": [
      "Write:\ndocker run -d --network app-net --network-alias search-service elasticsearch"
    ],
    "testCases": [
      {
        "id": "docker-86-tc-1",
        "description": "Verifies correct implementation for Network Aliases with --network-alias",
        "testFn": "code.includes('--network-alias')"
      }
    ]
  },
  {
    "id": "docker-87-inspecting-networks-with-docker-",
    "title": "87. Inspecting Networks with docker network inspect",
    "slug": "lesson-87-inspecting-networks-with-docker-",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Inspecting Networks with docker network inspect in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Inspecting Networks with docker network inspect",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Reviewing the network topology switch diagram showing every connected MAC and IP address.",
    "explanationMarkdown": "### Inspecting Networks with docker network inspect\n\nReveals subnet, gateway, IPAM configuration, and all attached container names and IP addresses.\n\n```bash\ndocker network inspect app-net\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Networks with docker network inspect",
      "code": "docker network inspect app-net",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Networks with docker network inspect.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Networks with docker network inspect.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect connected container IPs on network\ndocker network inspect app-net",
    "solutionCode": "docker network inspect app-net",
    "hints": [
      "Write:\ndocker network inspect app-net"
    ],
    "testCases": [
      {
        "id": "docker-87-tc-1",
        "description": "Verifies correct implementation for Inspecting Networks with docker network inspect",
        "testFn": "code.includes('docker network inspect')"
      }
    ]
  },
  {
    "id": "docker-88-debugging-network-connectivity-w",
    "title": "88. Debugging Network Connectivity with ping and curl",
    "slug": "lesson-88-debugging-network-connectivity-w",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Debugging Network Connectivity with ping and curl in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Debugging Network Connectivity with ping and curl",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Tapping on the microphone to verify sound reaches the speakers across the hall.",
    "explanationMarkdown": "### Debugging Network Connectivity with ping and curl\n\nTest inter-container connectivity and DNS resolution using `ping`, `curl`, and `netcat` inside containers.\n\n```bash\ndocker exec api ping -c 3 db\n```",
    "workedExample": {
      "title": "Worked Example: Debugging Network Connectivity with ping and curl",
      "code": "docker exec api ping -c 3 db",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Debugging Network Connectivity with ping and curl.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Debugging Network Connectivity with ping and curl.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Ping database container from api container\ndocker exec api ping -c 3 db",
    "solutionCode": "docker exec api ping -c 3 db",
    "hints": [
      "Write:\ndocker exec api ping -c 3 db"
    ],
    "testCases": [
      {
        "id": "docker-88-tc-1",
        "description": "Verifies correct implementation for Debugging Network Connectivity with ping and curl",
        "testFn": "code.includes('docker exec') && code.includes('ping')"
      }
    ]
  },
  {
    "id": "docker-89-pruning-unused-networks-docker-n",
    "title": "89. Pruning Unused Networks (docker network prune)",
    "slug": "lesson-89-pruning-unused-networks-docker-n",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Pruning Unused Networks (docker network prune) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Pruning Unused Networks (docker network prune)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Unwinding and recycling old unused telephone cables from the ceiling crawlspace.",
    "explanationMarkdown": "### Pruning Unused Networks (docker network prune)\n\nRemoves all custom user-defined networks that are not actively connected to at least one container.\n\n```bash\ndocker network prune -f\n```",
    "workedExample": {
      "title": "Worked Example: Pruning Unused Networks (docker network prune)",
      "code": "docker network prune -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pruning Unused Networks (docker network prune).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pruning Unused Networks (docker network prune).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Delete all unused networks\ndocker network prune -f",
    "solutionCode": "docker network prune -f",
    "hints": [
      "Write:\ndocker network prune -f"
    ],
    "testCases": [
      {
        "id": "docker-89-tc-1",
        "description": "Verifies correct implementation for Pruning Unused Networks (docker network prune)",
        "testFn": "code.includes('docker network prune')"
      }
    ]
  },
  {
    "id": "docker-90-module-6-review-multi-tier-netwo",
    "title": "90. Module 6 Review: Multi-Tier Network Isolation",
    "slug": "lesson-90-module-6-review-multi-tier-netwo",
    "language": "docker",
    "category": "Module 6: Networking & Service Discovery",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Master Module 6 Review: Multi-Tier Network Isolation in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 6 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A multi-ring fortress: outer moat (public web), courtyard (app servers), and inner vault (isolated databases).",
    "explanationMarkdown": "### Module 6 Review: Multi-Tier Network Isolation\n\nMastery over user-defined bridges, automatic DNS discovery, port publication, host mode, and multi-tier isolation.\n\n```bash\ndocker network ls\n```",
    "workedExample": {
      "title": "Worked Example: Module 6 Review: Multi-Tier Network Isolation",
      "code": "docker network ls",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 6 Review: Multi-Tier Network Isolation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 6 Review: Multi-Tier Network Isolation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify isolated network configuration\ndocker network ls",
    "solutionCode": "docker network ls",
    "hints": [
      "Write:\ndocker network ls"
    ],
    "testCases": [
      {
        "id": "docker-90-tc-1",
        "description": "Verifies correct implementation for Module 6 Review: Multi-Tier Network Isolation",
        "testFn": "code.includes('docker network ls')"
      }
    ]
  },
  {
    "id": "docker-91-what-is-docker-compose?-multi-co",
    "title": "91. What is Docker Compose? Multi-Container Choreography",
    "slug": "lesson-91-what-is-docker-compose?-multi-co",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master What is Docker Compose? Multi-Container Choreography in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "What is Docker Compose? Multi-Container Choreography",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An orchestra conductor raising their baton and leading dozens of instruments in perfect synchronized symphony.",
    "explanationMarkdown": "### What is Docker Compose? Multi-Container Choreography\n\nDocker Compose defines and runs multi-container Docker applications configured via a single YAML file.\n\n```bash\ndocker compose up -d\n```",
    "workedExample": {
      "title": "Worked Example: What is Docker Compose? Multi-Container Choreography",
      "code": "docker compose up -d",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is Docker Compose? Multi-Container Choreography.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is Docker Compose? Multi-Container Choreography.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Launch fullstack application stack\ndocker compose up -d",
    "solutionCode": "docker compose up -d",
    "hints": [
      "Write:\ndocker compose up -d"
    ],
    "testCases": [
      {
        "id": "docker-91-tc-1",
        "description": "Verifies correct implementation for What is Docker Compose? Multi-Container Choreography",
        "testFn": "code.includes('docker compose up')"
      }
    ]
  },
  {
    "id": "docker-92-the-compose.yaml-file-anatomy",
    "title": "92. The compose.yaml File Anatomy",
    "slug": "lesson-92-the-compose.yaml-file-anatomy",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The compose.yaml File Anatomy in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The compose.yaml File Anatomy",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "The master architectural blueprint of a house showing plumbing, electrical, and structural layouts on one page.",
    "explanationMarkdown": "### The compose.yaml File Anatomy\n\nA standard declarative file describing `services`, `networks`, `volumes`, and `configs`.\n\n```bash\ndocker compose config\n```",
    "workedExample": {
      "title": "Worked Example: The compose.yaml File Anatomy",
      "code": "docker compose config",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The compose.yaml File Anatomy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The compose.yaml File Anatomy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Validate compose configuration\ndocker compose config",
    "solutionCode": "docker compose config",
    "hints": [
      "Write:\ndocker compose config"
    ],
    "testCases": [
      {
        "id": "docker-92-tc-1",
        "description": "Verifies correct implementation for The compose.yaml File Anatomy",
        "testFn": "code.includes('docker compose config')"
      }
    ]
  },
  {
    "id": "docker-93-defining-services-images,-build-",
    "title": "93. Defining Services: Images, Build Context, Ports",
    "slug": "lesson-93-defining-services-images,-build-",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Defining Services: Images, Build Context, Ports in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Defining Services",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Assigning jobs to crew members: Chef (API), Cashier (Frontend), and Vault Guard (Database).",
    "explanationMarkdown": "### Defining Services: Images, Build Context, Ports\n\nEach service specifies an image (or `build: .`), port bindings, environment variables, and dependencies.\n\n```bash\ndocker compose ps\n```",
    "workedExample": {
      "title": "Worked Example: Defining Services: Images, Build Context, Ports",
      "code": "docker compose ps",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Defining Services: Images, Build Context, Ports.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Defining Services: Images, Build Context, Ports.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect compose services\ndocker compose ps",
    "solutionCode": "docker compose ps",
    "hints": [
      "Write:\ndocker compose ps"
    ],
    "testCases": [
      {
        "id": "docker-93-tc-1",
        "description": "Verifies correct implementation for Defining Services: Images, Build Context, Ports",
        "testFn": "code.includes('docker compose ps')"
      }
    ]
  },
  {
    "id": "docker-94-service-dependencies-depends_on-",
    "title": "94. Service Dependencies: depends_on Order",
    "slug": "lesson-94-service-dependencies-depends_on-",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Service Dependencies: depends_on Order in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Service Dependencies",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Waiting for the power generator to turn on before plugging in the high-voltage computer servers.",
    "explanationMarkdown": "### Service Dependencies: depends_on Order\n\n`depends_on` expresses startup and shutdown order between services (e.g. start `db` before `api`).\n\n```bash\ndocker compose up -d api\n```",
    "workedExample": {
      "title": "Worked Example: Service Dependencies: depends_on Order",
      "code": "docker compose up -d api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Service Dependencies: depends_on Order.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Service Dependencies: depends_on Order.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Start specific service with dependencies\ndocker compose up -d api",
    "solutionCode": "docker compose up -d api",
    "hints": [
      "Write:\ndocker compose up -d api"
    ],
    "testCases": [
      {
        "id": "docker-94-tc-1",
        "description": "Verifies correct implementation for Service Dependencies: depends_on Order",
        "testFn": "code.includes('docker compose up')"
      }
    ]
  },
  {
    "id": "docker-95-healthcheck-condition-in-depends",
    "title": "95. Healthcheck Condition in depends_on",
    "slug": "lesson-95-healthcheck-condition-in-depends",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Healthcheck Condition in depends_on in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Healthcheck Condition in depends_on",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Waiting for the oven to preheat to 350 degrees before putting the pizza in.",
    "explanationMarkdown": "### Healthcheck Condition in depends_on\n\nEnsures dependent services wait until the database passes its health check before booting!\n\n```bash\ndocker compose up -d\n```",
    "workedExample": {
      "title": "Worked Example: Healthcheck Condition in depends_on",
      "code": "docker compose up -d",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Healthcheck Condition in depends_on.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Healthcheck Condition in depends_on.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Compose healthcheck wait syntax\n# depends_on:\n#   db:\n#     condition: service_healthy\ndocker compose up -d",
    "solutionCode": "docker compose up -d",
    "hints": [
      "Write:\ndocker compose up -d"
    ],
    "testCases": [
      {
        "id": "docker-95-tc-1",
        "description": "Verifies correct implementation for Healthcheck Condition in depends_on",
        "testFn": "code.includes('docker compose up')"
      }
    ]
  },
  {
    "id": "docker-96-environment-variables-in-compose",
    "title": "96. Environment Variables in Compose (.env File)",
    "slug": "lesson-96-environment-variables-in-compose",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Environment Variables in Compose (.env File) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Environment Variables in Compose (.env File)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A centralized dashboard holding passwords and secrets for all equipment on the launchpad.",
    "explanationMarkdown": "### Environment Variables in Compose (.env File)\n\nCompose automatically reads `.env` in the project root, interpolating `${VAR_NAME}` into YAML configurations.\n\n```bash\ndocker compose config\n```",
    "workedExample": {
      "title": "Worked Example: Environment Variables in Compose (.env File)",
      "code": "docker compose config",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Environment Variables in Compose (.env File).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Environment Variables in Compose (.env File).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect parsed environment variables\ndocker compose config --env-file .env",
    "solutionCode": "docker compose config",
    "hints": [
      "Write:\ndocker compose config"
    ],
    "testCases": [
      {
        "id": "docker-96-tc-1",
        "description": "Verifies correct implementation for Environment Variables in Compose (.env File)",
        "testFn": "code.includes('docker compose config')"
      }
    ]
  },
  {
    "id": "docker-97-mounting-named-volumes-in-compos",
    "title": "97. Mounting Named Volumes in Compose",
    "slug": "lesson-97-mounting-named-volumes-in-compos",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Mounting Named Volumes in Compose in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Mounting Named Volumes in Compose",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Connecting a central filing safe to all accountant desks in the office.",
    "explanationMarkdown": "### Mounting Named Volumes in Compose\n\nDeclare top-level `volumes:` to share persistent storage across services cleanly.\n\n```bash\ndocker compose up -d\n```",
    "workedExample": {
      "title": "Worked Example: Mounting Named Volumes in Compose",
      "code": "docker compose up -d",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mounting Named Volumes in Compose.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mounting Named Volumes in Compose.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Start stack with persistent volumes\ndocker compose up -d",
    "solutionCode": "docker compose up -d",
    "hints": [
      "Write:\ndocker compose up -d"
    ],
    "testCases": [
      {
        "id": "docker-97-tc-1",
        "description": "Verifies correct implementation for Mounting Named Volumes in Compose",
        "testFn": "code.includes('docker compose up')"
      }
    ]
  },
  {
    "id": "docker-98-viewing-aggregated-logs-with-doc",
    "title": "98. Viewing Aggregated Logs with docker compose logs",
    "slug": "lesson-98-viewing-aggregated-logs-with-doc",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Viewing Aggregated Logs with docker compose logs in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Viewing Aggregated Logs with docker compose logs",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A multichannel security TV wall displaying live feeds from every camera in the casino at once.",
    "explanationMarkdown": "### Viewing Aggregated Logs with docker compose logs\n\nAggregates colored logs from all containers in the stack into a unified chronological stream.\n\n```bash\ndocker compose logs -f\n```",
    "workedExample": {
      "title": "Worked Example: Viewing Aggregated Logs with docker compose logs",
      "code": "docker compose logs -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Viewing Aggregated Logs with docker compose logs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Viewing Aggregated Logs with docker compose logs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Follow live logs from all services simultaneously\ndocker compose logs -f --tail=50",
    "solutionCode": "docker compose logs -f",
    "hints": [
      "Write:\ndocker compose logs -f"
    ],
    "testCases": [
      {
        "id": "docker-98-tc-1",
        "description": "Verifies correct implementation for Viewing Aggregated Logs with docker compose logs",
        "testFn": "code.includes('docker compose logs')"
      }
    ]
  },
  {
    "id": "docker-99-executing-commands-in-services-d",
    "title": "99. Executing Commands in Services (docker compose exec)",
    "slug": "lesson-99-executing-commands-in-services-d",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Executing Commands in Services (docker compose exec) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Executing Commands in Services (docker compose exec)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Walking directly up to the head chef station in a bustling kitchen to ask a question.",
    "explanationMarkdown": "### Executing Commands in Services (docker compose exec)\n\nRuns a command inside a running service container without looking up its dynamic container hash ID.\n\n```bash\ndocker compose exec api sh\n```",
    "workedExample": {
      "title": "Worked Example: Executing Commands in Services (docker compose exec)",
      "code": "docker compose exec api sh",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Executing Commands in Services (docker compose exec).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Executing Commands in Services (docker compose exec).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Open shell in running compose service\ndocker compose exec api sh",
    "solutionCode": "docker compose exec api sh",
    "hints": [
      "Write:\ndocker compose exec api sh"
    ],
    "testCases": [
      {
        "id": "docker-99-tc-1",
        "description": "Verifies correct implementation for Executing Commands in Services (docker compose exec)",
        "testFn": "code.includes('docker compose exec')"
      }
    ]
  },
  {
    "id": "docker-100-stopping-and-tearing-down-stacks",
    "title": "100. Stopping and Tearing Down Stacks (docker compose down)",
    "slug": "lesson-100-stopping-and-tearing-down-stacks",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Stopping and Tearing Down Stacks (docker compose down) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Stopping and Tearing Down Stacks (docker compose down)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Packing up the entire carnival tent, midway games, and food stalls after the festival ends.",
    "explanationMarkdown": "### Stopping and Tearing Down Stacks (docker compose down)\n\n`docker compose down` stops containers and removes networks created by `up`.\n\n```bash\ndocker compose down\n```",
    "workedExample": {
      "title": "Worked Example: Stopping and Tearing Down Stacks (docker compose down)",
      "code": "docker compose down",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stopping and Tearing Down Stacks (docker compose down).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stopping and Tearing Down Stacks (docker compose down).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Stop and remove containers and networks\ndocker compose down",
    "solutionCode": "docker compose down",
    "hints": [
      "Write:\ndocker compose down"
    ],
    "testCases": [
      {
        "id": "docker-100-tc-1",
        "description": "Verifies correct implementation for Stopping and Tearing Down Stacks (docker compose down)",
        "testFn": "code.includes('docker compose down')"
      }
    ]
  },
  {
    "id": "docker-101-cleaning-volumes-on-teardown-doc",
    "title": "101. Cleaning Volumes on Teardown (docker compose down -v)",
    "slug": "lesson-101-cleaning-volumes-on-teardown-doc",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Cleaning Volumes on Teardown (docker compose down -v) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Cleaning Volumes on Teardown (docker compose down -v)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Demolishing the carnival and plowing the soil completely clean back to raw dirt.",
    "explanationMarkdown": "### Cleaning Volumes on Teardown (docker compose down -v)\n\nThe `-v` flag deletes named volumes declared in the Compose file. Use with caution!\n\n```bash\ndocker compose down -v\n```",
    "workedExample": {
      "title": "Worked Example: Cleaning Volumes on Teardown (docker compose down -v)",
      "code": "docker compose down -v",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cleaning Volumes on Teardown (docker compose down -v).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cleaning Volumes on Teardown (docker compose down -v).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Teardown stack AND delete persistent volumes\ndocker compose down -v",
    "solutionCode": "docker compose down -v",
    "hints": [
      "Write:\ndocker compose down -v"
    ],
    "testCases": [
      {
        "id": "docker-101-tc-1",
        "description": "Verifies correct implementation for Cleaning Volumes on Teardown (docker compose down -v)",
        "testFn": "code.includes('docker compose down -v')"
      }
    ]
  },
  {
    "id": "docker-102-scaling-services-horizontally-wi",
    "title": "102. Scaling Services Horizontally with --scale",
    "slug": "lesson-102-scaling-services-horizontally-wi",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Scaling Services Horizontally with --scale in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Scaling Services Horizontally with --scale",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Hiring 3 additional cashiers at the grocery store to open checkout lanes 2, 3, and 4.",
    "explanationMarkdown": "### Scaling Services Horizontally with --scale\n\nLaunches multiple container replicas for a service; Docker automatically load balances between them.\n\n```bash\ndocker compose up -d --scale worker=4\n```",
    "workedExample": {
      "title": "Worked Example: Scaling Services Horizontally with --scale",
      "code": "docker compose up -d --scale worker=4",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scaling Services Horizontally with --scale.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scaling Services Horizontally with --scale.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Scale worker service to 4 parallel containers\ndocker compose up -d --scale worker=4",
    "solutionCode": "docker compose up -d --scale worker=4",
    "hints": [
      "Write:\ndocker compose up -d --scale worker=4"
    ],
    "testCases": [
      {
        "id": "docker-102-tc-1",
        "description": "Verifies correct implementation for Scaling Services Horizontally with --scale",
        "testFn": "code.includes('--scale worker=') || code.includes('--scale')"
      }
    ]
  },
  {
    "id": "docker-103-multiple-compose-files-docker-co",
    "title": "103. Multiple Compose Files (docker-compose.override.yml)",
    "slug": "lesson-103-multiple-compose-files-docker-co",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Multiple Compose Files (docker-compose.override.yml) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Multiple Compose Files (docker-compose.override.yml)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A base recipe overlaid with a vegetarian catering substitution sheet.",
    "explanationMarkdown": "### Multiple Compose Files (docker-compose.override.yml)\n\nCompose merges multiple files sequentially: `compose.override.yml` is merged automatically for local dev overrides.\n\n```bash\ndocker compose -f\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Compose Files (docker-compose.override.yml)",
      "code": "docker compose -f",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Compose Files (docker-compose.override.yml).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Compose Files (docker-compose.override.yml).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Combine production and dev override compose files\ndocker compose -f compose.yaml -f compose.dev.yaml up -d",
    "solutionCode": "docker compose -f",
    "hints": [
      "Write:\ndocker compose -f"
    ],
    "testCases": [
      {
        "id": "docker-103-tc-1",
        "description": "Verifies correct implementation for Multiple Compose Files (docker-compose.override.yml)",
        "testFn": "code.includes('docker compose -f')"
      }
    ]
  },
  {
    "id": "docker-104-profiles-conditional-service-sta",
    "title": "104. Profiles: Conditional Service Startup (--profile)",
    "slug": "lesson-104-profiles-conditional-service-sta",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Profiles: Conditional Service Startup (--profile) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Profiles",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Turning on emergency backup generators only when the master alarm sounds.",
    "explanationMarkdown": "### Profiles: Conditional Service Startup (--profile)\n\nAssign services to profiles (`profiles: [\"debug\"]`); start them conditionally with `--profile`.\n\n```bash\ndocker compose --profile debug up -d\n```",
    "workedExample": {
      "title": "Worked Example: Profiles: Conditional Service Startup (--profile)",
      "code": "docker compose --profile debug up -d",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Profiles: Conditional Service Startup (--profile).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Profiles: Conditional Service Startup (--profile).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Start stack including optional debug tools profile\ndocker compose --profile debug up -d",
    "solutionCode": "docker compose --profile debug up -d",
    "hints": [
      "Write:\ndocker compose --profile debug up -d"
    ],
    "testCases": [
      {
        "id": "docker-104-tc-1",
        "description": "Verifies correct implementation for Profiles: Conditional Service Startup (--profile)",
        "testFn": "code.includes('--profile')"
      }
    ]
  },
  {
    "id": "docker-105-module-7-review-complete-fullsta",
    "title": "105. Module 7 Review: Complete Fullstack Compose Stack",
    "slug": "lesson-105-module-7-review-complete-fullsta",
    "language": "docker",
    "category": "Module 7: Docker Compose Orchestration",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 7 Review: Complete Fullstack Compose Stack in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 7 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A gleaming high-tech metropolis powered by synchronized electrical, water, and transit networks.",
    "explanationMarkdown": "### Module 7 Review: Complete Fullstack Compose Stack\n\nA production-ready compose stack coordinating React frontend, Node backend, PostgreSQL, and Redis.\n\n```bash\ndocker compose ps\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Complete Fullstack Compose Stack",
      "code": "docker compose ps",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 7 Review: Complete Fullstack Compose Stack.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 7 Review: Complete Fullstack Compose Stack.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check fullstack application health\ndocker compose ps",
    "solutionCode": "docker compose ps",
    "hints": [
      "Write:\ndocker compose ps"
    ],
    "testCases": [
      {
        "id": "docker-105-tc-1",
        "description": "Verifies correct implementation for Module 7 Review: Complete Fullstack Compose Stack",
        "testFn": "code.includes('docker compose ps')"
      }
    ]
  },
  {
    "id": "docker-106-the-docker-daemon-attack-surface",
    "title": "106. The Docker Daemon Attack Surface & Root Privileges",
    "slug": "lesson-106-the-docker-daemon-attack-surface",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The Docker Daemon Attack Surface & Root Privileges in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The Docker Daemon Attack Surface & Root Privileges",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "The master physical security keycard to the entire building: anyone holding it has full administrator power.",
    "explanationMarkdown": "### The Docker Daemon Attack Surface & Root Privileges\n\nThe Docker socket grants root-equivalent host access; never mount `/var/run/docker.sock` into untrusted containers!\n\n```bash\nls -l /var/run/docker.sock\n```",
    "workedExample": {
      "title": "Worked Example: The Docker Daemon Attack Surface & Root Privileges",
      "code": "ls -l /var/run/docker.sock",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Docker Daemon Attack Surface & Root Privileges.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Docker Daemon Attack Surface & Root Privileges.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify docker daemon socket permissions\nls -l /var/run/docker.sock",
    "solutionCode": "ls -l /var/run/docker.sock",
    "hints": [
      "Write:\nls -l /var/run/docker.sock"
    ],
    "testCases": [
      {
        "id": "docker-106-tc-1",
        "description": "Verifies correct implementation for The Docker Daemon Attack Surface & Root Privileges",
        "testFn": "code.includes('docker.sock')"
      }
    ]
  },
  {
    "id": "docker-107-rootless-docker-mode",
    "title": "107. Rootless Docker Mode",
    "slug": "lesson-107-rootless-docker-mode",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Rootless Docker Mode in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Rootless Docker Mode",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A tenant living in an apartment without having the landlord's master passkey to neighboring homes.",
    "explanationMarkdown": "### Rootless Docker Mode\n\nRuns the Docker daemon and containers inside a non-root user namespace, preventing host compromise on breakouts.\n\n```bash\ndocker info | grep -i rootless\n```",
    "workedExample": {
      "title": "Worked Example: Rootless Docker Mode",
      "code": "docker info | grep -i rootless",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rootless Docker Mode.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rootless Docker Mode.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify rootless daemon mode\ndocker info | grep -i rootless",
    "solutionCode": "docker info | grep -i rootless",
    "hints": [
      "Write:\ndocker info | grep -i rootless"
    ],
    "testCases": [
      {
        "id": "docker-107-tc-1",
        "description": "Verifies correct implementation for Rootless Docker Mode",
        "testFn": "code.includes('docker info')"
      }
    ]
  },
  {
    "id": "docker-108-dropping-linux-capabilities-cap-",
    "title": "108. Dropping Linux Capabilities (cap-drop ALL)",
    "slug": "lesson-108-dropping-linux-capabilities-cap-",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Dropping Linux Capabilities (cap-drop ALL) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Dropping Linux Capabilities (cap-drop ALL)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Stripping a security guard of weapons and giving back only a flashlight and radio.",
    "explanationMarkdown": "### Dropping Linux Capabilities (cap-drop ALL)\n\nDrop all 40+ kernel capabilities by default, adding back only what is strictly necessary (e.g. `NET_BIND_SERVICE`).\n\n```bash\ndocker run -d --cap-drop ALL\n```",
    "workedExample": {
      "title": "Worked Example: Dropping Linux Capabilities (cap-drop ALL)",
      "code": "docker run -d --cap-drop ALL",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dropping Linux Capabilities (cap-drop ALL).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dropping Linux Capabilities (cap-drop ALL).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run with dropped Linux capabilities\ndocker run -d --cap-drop ALL --cap-add NET_BIND_SERVICE nginx",
    "solutionCode": "docker run -d --cap-drop ALL",
    "hints": [
      "Write:\ndocker run -d --cap-drop ALL"
    ],
    "testCases": [
      {
        "id": "docker-108-tc-1",
        "description": "Verifies correct implementation for Dropping Linux Capabilities (cap-drop ALL)",
        "testFn": "code.includes('--cap-drop ALL') || code.includes('--cap-drop')"
      }
    ]
  },
  {
    "id": "docker-109-read-only-root-filesystems---rea",
    "title": "109. Read-Only Root Filesystems (--read-only)",
    "slug": "lesson-109-read-only-root-filesystems---rea",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Read-Only Root Filesystems (--read-only) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Read-Only Root Filesystems (--read-only)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Laminating a document in thick plastic: readers can inspect it, but hackers cannot write malicious scripts on it.",
    "explanationMarkdown": "### Read-Only Root Filesystems (--read-only)\n\n`--read-only` prevents attackers from downloading rootkits, modifying binaries, or altering configuration files.\n\n```bash\ndocker run -d --read-only\n```",
    "workedExample": {
      "title": "Worked Example: Read-Only Root Filesystems (--read-only)",
      "code": "docker run -d --read-only",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Read-Only Root Filesystems (--read-only).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Read-Only Root Filesystems (--read-only).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run container with immutable read-only root\ndocker run -d --read-only --tmpfs /tmp nginx",
    "solutionCode": "docker run -d --read-only",
    "hints": [
      "Write:\ndocker run -d --read-only"
    ],
    "testCases": [
      {
        "id": "docker-109-tc-1",
        "description": "Verifies correct implementation for Read-Only Root Filesystems (--read-only)",
        "testFn": "code.includes('--read-only')"
      }
    ]
  },
  {
    "id": "docker-110-resource-quotas-cpu-and-memory-l",
    "title": "110. Resource Quotas: CPU and Memory Limits",
    "slug": "lesson-110-resource-quotas-cpu-and-memory-l",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Resource Quotas: CPU and Memory Limits in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Resource Quotas",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A water ration card preventing one tenant from draining the entire building's water reservoir.",
    "explanationMarkdown": "### Resource Quotas: CPU and Memory Limits\n\nPrevents noisy-neighbor containers or memory leaks from crashing the host machine via OOM (Out Of Memory).\n\n```bash\ndocker run -d --memory=512m --cpus=1.5 my-api\n```",
    "workedExample": {
      "title": "Worked Example: Resource Quotas: CPU and Memory Limits",
      "code": "docker run -d --memory=512m --cpus=1.5 my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Resource Quotas: CPU and Memory Limits.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resource Quotas: CPU and Memory Limits.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Strictly cap memory and CPU cores\ndocker run -d --memory=512m --cpus=1.5 my-api",
    "solutionCode": "docker run -d --memory=512m --cpus=1.5 my-api",
    "hints": [
      "Write:\ndocker run -d --memory=512m --cpus=1.5 my-api"
    ],
    "testCases": [
      {
        "id": "docker-110-tc-1",
        "description": "Verifies correct implementation for Resource Quotas: CPU and Memory Limits",
        "testFn": "code.includes('--memory=') && code.includes('--cpus=')"
      }
    ]
  },
  {
    "id": "docker-111-no-new-privileges-flag---securit",
    "title": "111. No-New-Privileges Flag (--security-opt)",
    "slug": "lesson-111-no-new-privileges-flag---securit",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master No-New-Privileges Flag (--security-opt) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "No-New-Privileges Flag (--security-opt)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A security rule stating that a guest cannot promote themselves to manager, even if they find a manager's jacket.",
    "explanationMarkdown": "### No-New-Privileges Flag (--security-opt)\n\nPrevents processes inside the container from gaining additional privileges via `setuid` or `setgid` binaries.\n\n```bash\ndocker run -d --security-opt no-new-privileges:true my-api\n```",
    "workedExample": {
      "title": "Worked Example: No-New-Privileges Flag (--security-opt)",
      "code": "docker run -d --security-opt no-new-privileges:true my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for No-New-Privileges Flag (--security-opt).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of No-New-Privileges Flag (--security-opt).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Prevent privilege escalation via SUID binaries\ndocker run -d --security-opt no-new-privileges:true my-api",
    "solutionCode": "docker run -d --security-opt no-new-privileges:true my-api",
    "hints": [
      "Write:\ndocker run -d --security-opt no-new-privileges:true my-api"
    ],
    "testCases": [
      {
        "id": "docker-111-tc-1",
        "description": "Verifies correct implementation for No-New-Privileges Flag (--security-opt)",
        "testFn": "code.includes('no-new-privileges:true') || code.includes('--security-opt')"
      }
    ]
  },
  {
    "id": "docker-112-seccomp-security-profiles",
    "title": "112. Seccomp Security Profiles",
    "slug": "lesson-112-seccomp-security-profiles",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Seccomp Security Profiles in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Seccomp Security Profiles",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A filter blocking dangerous medical tools from entering a standard classroom.",
    "explanationMarkdown": "### Seccomp Security Profiles\n\nSeccomp (Secure Computing Mode) restricts which kernel system calls (syscalls) container processes can execute.\n\n```bash\ndocker run -d --security-opt seccomp=default.json my-api\n```",
    "workedExample": {
      "title": "Worked Example: Seccomp Security Profiles",
      "code": "docker run -d --security-opt seccomp=default.json my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Seccomp Security Profiles.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Seccomp Security Profiles.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Apply custom seccomp profile\ndocker run -d --security-opt seccomp=default.json my-api",
    "solutionCode": "docker run -d --security-opt seccomp=default.json my-api",
    "hints": [
      "Write:\ndocker run -d --security-opt seccomp=default.json my-api"
    ],
    "testCases": [
      {
        "id": "docker-112-tc-1",
        "description": "Verifies correct implementation for Seccomp Security Profiles",
        "testFn": "code.includes('seccomp=') || code.includes('--security-opt')"
      }
    ]
  },
  {
    "id": "docker-113-apparmor-and-selinux-mandatory-a",
    "title": "113. AppArmor and SELinux Mandatory Access Controls",
    "slug": "lesson-113-apparmor-and-selinux-mandatory-a",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master AppArmor and SELinux Mandatory Access Controls in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "AppArmor and SELinux Mandatory Access Controls",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An armed security officer following a visitor everywhere, ensuring they touch only authorized doorknobs.",
    "explanationMarkdown": "### AppArmor and SELinux Mandatory Access Controls\n\nMandatory Access Control (MAC) policies enforce fine-grained confinement on container filesystem and socket access.\n\n```bash\ndocker info | grep Security\n```",
    "workedExample": {
      "title": "Worked Example: AppArmor and SELinux Mandatory Access Controls",
      "code": "docker info | grep Security",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for AppArmor and SELinux Mandatory Access Controls.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of AppArmor and SELinux Mandatory Access Controls.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check AppArmor security status\ndocker info | grep Security",
    "solutionCode": "docker info | grep Security",
    "hints": [
      "Write:\ndocker info | grep Security"
    ],
    "testCases": [
      {
        "id": "docker-113-tc-1",
        "description": "Verifies correct implementation for AppArmor and SELinux Mandatory Access Controls",
        "testFn": "code.includes('docker info')"
      }
    ]
  },
  {
    "id": "docker-114-docker-content-trust-dct-image-s",
    "title": "114. Docker Content Trust (DCT) Image Signing",
    "slug": "lesson-114-docker-content-trust-dct-image-s",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Docker Content Trust (DCT) Image Signing in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker Content Trust (DCT) Image Signing",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Inspecting a wax seal stamped with the king's private signet ring before opening an official proclamation.",
    "explanationMarkdown": "### Docker Content Trust (DCT) Image Signing\n\nWhen DCT is enabled, Docker verifies cryptographic signatures from publishers, rejecting untrusted or tampered images.\n\n```bash\nexport DOCKER_CONTENT_TRUST=1\n```",
    "workedExample": {
      "title": "Worked Example: Docker Content Trust (DCT) Image Signing",
      "code": "export DOCKER_CONTENT_TRUST=1",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker Content Trust (DCT) Image Signing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Content Trust (DCT) Image Signing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Enable mandatory image signature verification\nexport DOCKER_CONTENT_TRUST=1",
    "solutionCode": "export DOCKER_CONTENT_TRUST=1",
    "hints": [
      "Write:\nexport DOCKER_CONTENT_TRUST=1"
    ],
    "testCases": [
      {
        "id": "docker-114-tc-1",
        "description": "Verifies correct implementation for Docker Content Trust (DCT) Image Signing",
        "testFn": "code.includes('DOCKER_CONTENT_TRUST=1')"
      }
    ]
  },
  {
    "id": "docker-115-managing-production-secrets-with",
    "title": "115. Managing Production Secrets without Leaks",
    "slug": "lesson-115-managing-production-secrets-with",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Managing Production Secrets without Leaks in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Managing Production Secrets without Leaks",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Writing passwords in invisible cryptographic ink decoded only inside the secure vault.",
    "explanationMarkdown": "### Managing Production Secrets without Leaks\n\nNever bake passwords into Dockerfiles or commit `.env` files; use Docker Secrets, HashiCorp Vault, or cloud secret managers.\n\n```bash\ndocker secret ls\n```",
    "workedExample": {
      "title": "Worked Example: Managing Production Secrets without Leaks",
      "code": "docker secret ls",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Managing Production Secrets without Leaks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Managing Production Secrets without Leaks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect Docker secret configuration\ndocker secret ls",
    "solutionCode": "docker secret ls",
    "hints": [
      "Write:\ndocker secret ls"
    ],
    "testCases": [
      {
        "id": "docker-115-tc-1",
        "description": "Verifies correct implementation for Managing Production Secrets without Leaks",
        "testFn": "code.includes('docker secret ls') || code.includes('docker secret')"
      }
    ]
  },
  {
    "id": "docker-116-cis-docker-benchmark-security-au",
    "title": "116. CIS Docker Benchmark Security Auditing",
    "slug": "lesson-116-cis-docker-benchmark-security-au",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master CIS Docker Benchmark Security Auditing in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "CIS Docker Benchmark Security Auditing",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An official fire safety building inspection scoring compliance across 100 strict commercial building codes.",
    "explanationMarkdown": "### CIS Docker Benchmark Security Auditing\n\nAudits host and daemon settings against the Center for Internet Security (CIS) hardening benchmark standards.\n\n```bash\ndocker run --rm --net host --pid host -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security\n```",
    "workedExample": {
      "title": "Worked Example: CIS Docker Benchmark Security Auditing",
      "code": "docker run --rm --net host --pid host -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for CIS Docker Benchmark Security Auditing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CIS Docker Benchmark Security Auditing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run docker-bench-security check\ndocker run --rm --net host --pid host -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security",
    "solutionCode": "docker run --rm --net host --pid host -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security",
    "hints": [
      "Write:\ndocker run --rm --net host --pid host -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security"
    ],
    "testCases": [
      {
        "id": "docker-116-tc-1",
        "description": "Verifies correct implementation for CIS Docker Benchmark Security Auditing",
        "testFn": "code.includes('docker-bench-security')"
      }
    ]
  },
  {
    "id": "docker-117-configuring-production-log-drive",
    "title": "117. Configuring Production Log Drivers (log-opt max-size)",
    "slug": "lesson-117-configuring-production-log-drive",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Configuring Production Log Drivers (log-opt max-size) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Configuring Production Log Drivers (log-opt max-size)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An automatic shredder bin that purges the oldest paper receipts when the drawer gets 90% full.",
    "explanationMarkdown": "### Configuring Production Log Drivers (log-opt max-size)\n\nPrevents runaway application logs from filling up server hard drives and causing system outages.\n\n```bash\ndocker run -d --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 my-api\n```",
    "workedExample": {
      "title": "Worked Example: Configuring Production Log Drivers (log-opt max-size)",
      "code": "docker run -d --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Configuring Production Log Drivers (log-opt max-size).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Configuring Production Log Drivers (log-opt max-size).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Configure rotating JSON log driver to prevent disk overflow\ndocker run -d --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 my-api",
    "solutionCode": "docker run -d --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 my-api",
    "hints": [
      "Write:\ndocker run -d --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 my-api"
    ],
    "testCases": [
      {
        "id": "docker-117-tc-1",
        "description": "Verifies correct implementation for Configuring Production Log Drivers (log-opt max-size)",
        "testFn": "code.includes('--log-opt max-size=') || code.includes('--log-driver')"
      }
    ]
  },
  {
    "id": "docker-118-the-healthcheck-instruction-in-p",
    "title": "118. The HEALTHCHECK Instruction in Production",
    "slug": "lesson-118-the-healthcheck-instruction-in-p",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master The HEALTHCHECK Instruction in Production in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The HEALTHCHECK Instruction in Production",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A doctor checking a diver's oxygen gauge every 30 seconds during an underwater dive.",
    "explanationMarkdown": "### The HEALTHCHECK Instruction in Production\n\n`HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000/healthz || exit 1`.\n\n```bash\ndocker inspect --format='{{json .State.Health}}' my-api\n```",
    "workedExample": {
      "title": "Worked Example: The HEALTHCHECK Instruction in Production",
      "code": "docker inspect --format='{{json .State.Health}}' my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The HEALTHCHECK Instruction in Production.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The HEALTHCHECK Instruction in Production.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Test container healthcheck command\ndocker inspect --format='{{json .State.Health}}' my-api",
    "solutionCode": "docker inspect --format='{{json .State.Health}}' my-api",
    "hints": [
      "Write:\ndocker inspect --format='{{json .State.Health}}' my-api"
    ],
    "testCases": [
      {
        "id": "docker-118-tc-1",
        "description": "Verifies correct implementation for The HEALTHCHECK Instruction in Production",
        "testFn": "code.includes('.State.Health')"
      }
    ]
  },
  {
    "id": "docker-119-graceful-container-shutdown-hand",
    "title": "119. Graceful Container Shutdown (Handling SIGTERM)",
    "slug": "lesson-119-graceful-container-shutdown-hand",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Graceful Container Shutdown (Handling SIGTERM) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Graceful Container Shutdown (Handling SIGTERM)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Giving airline passengers 30 seconds to gather their carry-on bags before closing the aircraft doors.",
    "explanationMarkdown": "### Graceful Container Shutdown (Handling SIGTERM)\n\nConfigure `--stop-timeout` to give database connection pools and web servers time to drain connections on shutdown.\n\n```bash\ndocker run -d --stop-timeout 30 my-api\n```",
    "workedExample": {
      "title": "Worked Example: Graceful Container Shutdown (Handling SIGTERM)",
      "code": "docker run -d --stop-timeout 30 my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Graceful Container Shutdown (Handling SIGTERM).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Graceful Container Shutdown (Handling SIGTERM).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect container stop timeout\ndocker run -d --stop-timeout 30 my-api",
    "solutionCode": "docker run -d --stop-timeout 30 my-api",
    "hints": [
      "Write:\ndocker run -d --stop-timeout 30 my-api"
    ],
    "testCases": [
      {
        "id": "docker-119-tc-1",
        "description": "Verifies correct implementation for Graceful Container Shutdown (Handling SIGTERM)",
        "testFn": "code.includes('--stop-timeout')"
      }
    ]
  },
  {
    "id": "docker-120-module-8-review-enterprise-secur",
    "title": "120. Module 8 Review: Enterprise Security Hardening",
    "slug": "lesson-120-module-8-review-enterprise-secur",
    "language": "docker",
    "category": "Module 8: Security & Production Hardening",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Master Module 8 Review: Enterprise Security Hardening in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 8 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A military-grade armored bank transport vehicle impervious to external sabotage.",
    "explanationMarkdown": "### Module 8 Review: Enterprise Security Hardening\n\nAn enterprise-hardened container environment: non-root execution, read-only rootfs, dropped capabilities, and secrets.\n\n```bash\ndocker run -d --read-only --cap-drop ALL --security-opt no-new-privileges:true my-api\n```",
    "workedExample": {
      "title": "Worked Example: Module 8 Review: Enterprise Security Hardening",
      "code": "docker run -d --read-only --cap-drop ALL --security-opt no-new-privileges:true my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 8 Review: Enterprise Security Hardening.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 8 Review: Enterprise Security Hardening.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Complete container security checklist\ndocker run -d --read-only --cap-drop ALL --security-opt no-new-privileges:true my-api",
    "solutionCode": "docker run -d --read-only --cap-drop ALL --security-opt no-new-privileges:true my-api",
    "hints": [
      "Write:\ndocker run -d --read-only --cap-drop ALL --security-opt no-new-privileges:true my-api"
    ],
    "testCases": [
      {
        "id": "docker-120-tc-1",
        "description": "Verifies correct implementation for Module 8 Review: Enterprise Security Hardening",
        "testFn": "code.includes('--read-only') && code.includes('--cap-drop ALL')"
      }
    ]
  },
  {
    "id": "docker-121-docker-hub-authentication-with-d",
    "title": "121. Docker Hub Authentication with docker login",
    "slug": "lesson-121-docker-hub-authentication-with-d",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Docker Hub Authentication with docker login in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker Hub Authentication with docker login",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Showing your passport and credential badge at the central international shipping port.",
    "explanationMarkdown": "### Docker Hub Authentication with docker login\n\nAuthenticates the local Docker client against Docker Hub or private container registries.\n\n```bash\ndocker login -u myuser\n```",
    "workedExample": {
      "title": "Worked Example: Docker Hub Authentication with docker login",
      "code": "docker login -u myuser",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker Hub Authentication with docker login.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Hub Authentication with docker login.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Log in to Docker registry\ndocker login -u myuser",
    "solutionCode": "docker login -u myuser",
    "hints": [
      "Write:\ndocker login -u myuser"
    ],
    "testCases": [
      {
        "id": "docker-121-tc-1",
        "description": "Verifies correct implementation for Docker Hub Authentication with docker login",
        "testFn": "code.includes('docker login')"
      }
    ]
  },
  {
    "id": "docker-122-tagging-images-for-remote-regist",
    "title": "122. Tagging Images for Remote Registries",
    "slug": "lesson-122-tagging-images-for-remote-regist",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Tagging Images for Remote Registries in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Tagging Images for Remote Registries",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Affixing an international postal routing label onto a domestic shipping crate.",
    "explanationMarkdown": "### Tagging Images for Remote Registries\n\n`docker tag <local_image> <registry_domain>/<org>/<repo>:<tag>` prepares images for pushing.\n\n```bash\ndocker tag my-app:1.0 registry.devforge.io/team/my-app:1.0\n```",
    "workedExample": {
      "title": "Worked Example: Tagging Images for Remote Registries",
      "code": "docker tag my-app:1.0 registry.devforge.io/team/my-app:1.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tagging Images for Remote Registries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tagging Images for Remote Registries.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Tag local image with remote repository namespace\ndocker tag my-app:1.0 registry.devforge.io/team/my-app:1.0",
    "solutionCode": "docker tag my-app:1.0 registry.devforge.io/team/my-app:1.0",
    "hints": [
      "Write:\ndocker tag my-app:1.0 registry.devforge.io/team/my-app:1.0"
    ],
    "testCases": [
      {
        "id": "docker-122-tc-1",
        "description": "Verifies correct implementation for Tagging Images for Remote Registries",
        "testFn": "code.includes('docker tag')"
      }
    ]
  },
  {
    "id": "docker-123-pushing-images-with-docker-push",
    "title": "123. Pushing Images with docker push",
    "slug": "lesson-123-pushing-images-with-docker-push",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Pushing Images with docker push in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Pushing Images with docker push",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Loading a sealed shipping container onto an ocean-going cargo freighter.",
    "explanationMarkdown": "### Pushing Images with docker push\n\nUploads new image layers to the designated registry; unchanged layers are automatically skipped!\n\n```bash\ndocker push registry.devforge.io/team/my-app:1.0\n```",
    "workedExample": {
      "title": "Worked Example: Pushing Images with docker push",
      "code": "docker push registry.devforge.io/team/my-app:1.0",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pushing Images with docker push.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pushing Images with docker push.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Push tagged image to remote registry\ndocker push registry.devforge.io/team/my-app:1.0",
    "solutionCode": "docker push registry.devforge.io/team/my-app:1.0",
    "hints": [
      "Write:\ndocker push registry.devforge.io/team/my-app:1.0"
    ],
    "testCases": [
      {
        "id": "docker-123-tc-1",
        "description": "Verifies correct implementation for Pushing Images with docker push",
        "testFn": "code.includes('docker push')"
      }
    ]
  },
  {
    "id": "docker-124-deploying-a-private-local-regist",
    "title": "124. Deploying a Private Local Registry (registry:2)",
    "slug": "lesson-124-deploying-a-private-local-regist",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Deploying a Private Local Registry (registry:2) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Deploying a Private Local Registry (registry",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Building a private automated parts warehouse inside your own company compound.",
    "explanationMarkdown": "### Deploying a Private Local Registry (registry:2)\n\nSpins up an open-source, private, secure Docker registry on your local network or VPC.\n\n```bash\ndocker run -d -p 5000:5000 --name local-registry registry:2\n```",
    "workedExample": {
      "title": "Worked Example: Deploying a Private Local Registry (registry:2)",
      "code": "docker run -d -p 5000:5000 --name local-registry registry:2",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deploying a Private Local Registry (registry:2).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deploying a Private Local Registry (registry:2).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run local private registry on port 5000\ndocker run -d -p 5000:5000 --name local-registry registry:2",
    "solutionCode": "docker run -d -p 5000:5000 --name local-registry registry:2",
    "hints": [
      "Write:\ndocker run -d -p 5000:5000 --name local-registry registry:2"
    ],
    "testCases": [
      {
        "id": "docker-124-tc-1",
        "description": "Verifies correct implementation for Deploying a Private Local Registry (registry:2)",
        "testFn": "code.includes('registry:2')"
      }
    ]
  },
  {
    "id": "docker-125-cloud-registries-aws-ecr-&-googl",
    "title": "125. Cloud Registries: AWS ECR & Google Artifact Registry",
    "slug": "lesson-125-cloud-registries-aws-ecr-&-googl",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Cloud Registries: AWS ECR & Google Artifact Registry in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Cloud Registries",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Renting high-security storage bays inside Amazon's or Google's primary cloud logistics hubs.",
    "explanationMarkdown": "### Cloud Registries: AWS ECR & Google Artifact Registry\n\nCloud registries provide managed high-availability, encryption at rest, IAM permissions, and vulnerability scanning.\n\n```bash\naws ecr get-login-password | docker login --username AWS --password-stdin 123456.dkr.ecr.us-east-1.amazonaws.com\n```",
    "workedExample": {
      "title": "Worked Example: Cloud Registries: AWS ECR & Google Artifact Registry",
      "code": "aws ecr get-login-password | docker login --username AWS --password-stdin 123456.dkr.ecr.us-east-1.amazonaws.com",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cloud Registries: AWS ECR & Google Artifact Registry.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cloud Registries: AWS ECR & Google Artifact Registry.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Authenticate Docker with AWS ECR\naws ecr get-login-password | docker login --username AWS --password-stdin 123456.dkr.ecr.us-east-1.amazonaws.com",
    "solutionCode": "aws ecr get-login-password | docker login --username AWS --password-stdin 123456.dkr.ecr.us-east-1.amazonaws.com",
    "hints": [
      "Write:\naws ecr get-login-password | docker login --username AWS --password-stdin 123456.dkr.ecr.us-east-1.amazonaws.com"
    ],
    "testCases": [
      {
        "id": "docker-125-tc-1",
        "description": "Verifies correct implementation for Cloud Registries: AWS ECR & Google Artifact Registry",
        "testFn": "code.includes('docker login') && code.includes('ecr')"
      }
    ]
  },
  {
    "id": "docker-126-automated-docker-builds-in-githu",
    "title": "126. Automated Docker Builds in GitHub Actions",
    "slug": "lesson-126-automated-docker-builds-in-githu",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Automated Docker Builds in GitHub Actions in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Automated Docker Builds in GitHub Actions",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An automated robotic assembly line that builds, tests, and tags shipping containers on every git push.",
    "explanationMarkdown": "### Automated Docker Builds in GitHub Actions\n\nUse `docker/build-push-action` in GitHub Actions workflows to automate builds on pull requests and releases.\n\n```bash\ncat .github/workflows/docker.yml\n```",
    "workedExample": {
      "title": "Worked Example: Automated Docker Builds in GitHub Actions",
      "code": "cat .github/workflows/docker.yml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automated Docker Builds in GitHub Actions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automated Docker Builds in GitHub Actions.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify GitHub Actions workflow file\ncat .github/workflows/docker.yml",
    "solutionCode": "cat .github/workflows/docker.yml",
    "hints": [
      "Write:\ncat .github/workflows/docker.yml"
    ],
    "testCases": [
      {
        "id": "docker-126-tc-1",
        "description": "Verifies correct implementation for Automated Docker Builds in GitHub Actions",
        "testFn": "code.includes('.github/workflows') || code.includes('docker.yml')"
      }
    ]
  },
  {
    "id": "docker-127-github-actions-layer-caching-typ",
    "title": "127. GitHub Actions Layer Caching (type=gha)",
    "slug": "lesson-127-github-actions-layer-caching-typ",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master GitHub Actions Layer Caching (type=gha) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "GitHub Actions Layer Caching (type=gha)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Keeping spare parts in the factory shelf so workers don't wait for supply trucks on every assembly run.",
    "explanationMarkdown": "### GitHub Actions Layer Caching (type=gha)\n\nCaches Docker build layers directly in GitHub Actions cache storage, cutting CI build times by 80%.\n\n```bash\ndocker build -t app .\n```",
    "workedExample": {
      "title": "Worked Example: GitHub Actions Layer Caching (type=gha)",
      "code": "docker build -t app .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for GitHub Actions Layer Caching (type=gha).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GitHub Actions Layer Caching (type=gha).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Configure GitHub Actions cache export\n# cache-from: type=gha\n# cache-to: type=gha,mode=max\ndocker build -t app .",
    "solutionCode": "docker build -t app .",
    "hints": [
      "Write:\ndocker build -t app ."
    ],
    "testCases": [
      {
        "id": "docker-127-tc-1",
        "description": "Verifies correct implementation for GitHub Actions Layer Caching (type=gha)",
        "testFn": "code.includes('docker build')"
      }
    ]
  },
  {
    "id": "docker-128-multi-architecture-builds-with-d",
    "title": "128. Multi-Architecture Builds with docker buildx",
    "slug": "lesson-128-multi-architecture-builds-with-d",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Multi-Architecture Builds with docker buildx in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Multi-Architecture Builds with docker buildx",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Designing an electric vehicle chassis that can fit both left-hand and right-hand drive steering wheels.",
    "explanationMarkdown": "### Multi-Architecture Builds with docker buildx\n\n`docker buildx` leverages QEMU to cross-compile images for multiple CPU architectures (AMD64, ARM64/Apple Silicon).\n\n```bash\ndocker buildx create --use --name multi-builder\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Architecture Builds with docker buildx",
      "code": "docker buildx create --use --name multi-builder",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multi-Architecture Builds with docker buildx.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Architecture Builds with docker buildx.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Create multi-arch buildx builder\ndocker buildx create --use --name multi-builder",
    "solutionCode": "docker buildx create --use --name multi-builder",
    "hints": [
      "Write:\ndocker buildx create --use --name multi-builder"
    ],
    "testCases": [
      {
        "id": "docker-128-tc-1",
        "description": "Verifies correct implementation for Multi-Architecture Builds with docker buildx",
        "testFn": "code.includes('docker buildx create')"
      }
    ]
  },
  {
    "id": "docker-129-building-for-amd64-and-arm64-sim",
    "title": "129. Building for AMD64 and ARM64 Simultaneously",
    "slug": "lesson-129-building-for-amd64-and-arm64-sim",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Building for AMD64 and ARM64 Simultaneously in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Building for AMD64 and ARM64 Simultaneously",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Printing a document simultaneously in both English and Japanese and binding them into one universal book.",
    "explanationMarkdown": "### Building for AMD64 and ARM64 Simultaneously\n\nBuilds native binaries for Intel/AMD cloud servers and Apple Silicon Mac laptops in a single pass.\n\n```bash\ndocker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push .\n```",
    "workedExample": {
      "title": "Worked Example: Building for AMD64 and ARM64 Simultaneously",
      "code": "docker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building for AMD64 and ARM64 Simultaneously.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building for AMD64 and ARM64 Simultaneously.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Build and push multi-arch image\ndocker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push .",
    "solutionCode": "docker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push .",
    "hints": [
      "Write:\ndocker buildx build --platform linux/amd64,linux/arm64 -t my-app:latest --push ."
    ],
    "testCases": [
      {
        "id": "docker-129-tc-1",
        "description": "Verifies correct implementation for Building for AMD64 and ARM64 Simultaneously",
        "testFn": "code.includes('docker buildx build') && code.includes('--platform')"
      }
    ]
  },
  {
    "id": "docker-130-manifest-lists-for-multi-arch-im",
    "title": "130. Manifest Lists for Multi-Arch Images",
    "slug": "lesson-130-manifest-lists-for-multi-arch-im",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Manifest Lists for Multi-Arch Images in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Manifest Lists for Multi-Arch Images",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A smart restaurant menu that automatically translates itself based on the nationality of the diner.",
    "explanationMarkdown": "### Manifest Lists for Multi-Arch Images\n\nA manifest list groups distinct architecture images under a single shared tag (`my-app:latest`).\n\n```bash\ndocker buildx imagetools inspect my-app:latest\n```",
    "workedExample": {
      "title": "Worked Example: Manifest Lists for Multi-Arch Images",
      "code": "docker buildx imagetools inspect my-app:latest",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Manifest Lists for Multi-Arch Images.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Manifest Lists for Multi-Arch Images.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Inspect multi-arch manifest list\ndocker buildx imagetools inspect my-app:latest",
    "solutionCode": "docker buildx imagetools inspect my-app:latest",
    "hints": [
      "Write:\ndocker buildx imagetools inspect my-app:latest"
    ],
    "testCases": [
      {
        "id": "docker-130-tc-1",
        "description": "Verifies correct implementation for Manifest Lists for Multi-Arch Images",
        "testFn": "code.includes('docker buildx imagetools inspect') || code.includes('docker manifest')"
      }
    ]
  },
  {
    "id": "docker-131-immutable-tagging-strategy-git-s",
    "title": "131. Immutable Tagging Strategy (Git SHA + SemVer)",
    "slug": "lesson-131-immutable-tagging-strategy-git-s",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Immutable Tagging Strategy (Git SHA + SemVer) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Immutable Tagging Strategy (Git SHA + SemVer)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Stamping the exact serial number of the blueprint directly into the steel chassis of the car.",
    "explanationMarkdown": "### Immutable Tagging Strategy (Git SHA + SemVer)\n\nNever rely exclusively on `:latest`; tag images with git commit hashes (`sha-abc1234`) for traceable rollbacks.\n\n```bash\ndocker build -t my-app:sha-7e8f9a0 -t my-app:1.2.0 .\n```",
    "workedExample": {
      "title": "Worked Example: Immutable Tagging Strategy (Git SHA + SemVer)",
      "code": "docker build -t my-app:sha-7e8f9a0 -t my-app:1.2.0 .",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Immutable Tagging Strategy (Git SHA + SemVer).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Immutable Tagging Strategy (Git SHA + SemVer).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Tag image with git commit hash\ndocker build -t my-app:sha-7e8f9a0 -t my-app:1.2.0 .",
    "solutionCode": "docker build -t my-app:sha-7e8f9a0 -t my-app:1.2.0 .",
    "hints": [
      "Write:\ndocker build -t my-app:sha-7e8f9a0 -t my-app:1.2.0 ."
    ],
    "testCases": [
      {
        "id": "docker-131-tc-1",
        "description": "Verifies correct implementation for Immutable Tagging Strategy (Git SHA + SemVer)",
        "testFn": "code.includes('sha-') || code.includes('docker build -t')"
      }
    ]
  },
  {
    "id": "docker-132-automated-container-vulnerabilit",
    "title": "132. Automated Container Vulnerability Gating in CI",
    "slug": "lesson-132-automated-container-vulnerabilit",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Automated Container Vulnerability Gating in CI in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Automated Container Vulnerability Gating in CI",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A factory quality inspector rejecting a batch of manufactured parts if any part shows structural fractures.",
    "explanationMarkdown": "### Automated Container Vulnerability Gating in CI\n\nConfigure security scanners like Trivy to exit with code 1, automatically blocking CI pipeline deployment on critical CVEs.\n\n```bash\ntrivy image --exit-code 1 --severity CRITICAL my-app:latest\n```",
    "workedExample": {
      "title": "Worked Example: Automated Container Vulnerability Gating in CI",
      "code": "trivy image --exit-code 1 --severity CRITICAL my-app:latest",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automated Container Vulnerability Gating in CI.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automated Container Vulnerability Gating in CI.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Scan image in CI and fail on critical vulnerabilities\ntrivy image --exit-code 1 --severity CRITICAL my-app:latest",
    "solutionCode": "trivy image --exit-code 1 --severity CRITICAL my-app:latest",
    "hints": [
      "Write:\ntrivy image --exit-code 1 --severity CRITICAL my-app:latest"
    ],
    "testCases": [
      {
        "id": "docker-132-tc-1",
        "description": "Verifies correct implementation for Automated Container Vulnerability Gating in CI",
        "testFn": "code.includes('trivy image') || code.includes('trivy')"
      }
    ]
  },
  {
    "id": "docker-133-registry-webhooks-for-continuous",
    "title": "133. Registry Webhooks for Continuous Deployment",
    "slug": "lesson-133-registry-webhooks-for-continuous",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Registry Webhooks for Continuous Deployment in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Registry Webhooks for Continuous Deployment",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A delivery bell ringing at the warehouse the moment a new supply truck arrives at the loading bay.",
    "explanationMarkdown": "### Registry Webhooks for Continuous Deployment\n\nRegistries fire HTTP webhooks upon image push, triggering Kubernetes or cloud hosts to deploy updates automatically.\n\n```bash\ncurl -I https://registry.devforge.io/v2/\n```",
    "workedExample": {
      "title": "Worked Example: Registry Webhooks for Continuous Deployment",
      "code": "curl -I https://registry.devforge.io/v2/",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Registry Webhooks for Continuous Deployment.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Registry Webhooks for Continuous Deployment.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check registry webhook response\ncurl -I https://registry.devforge.io/v2/",
    "solutionCode": "curl -I https://registry.devforge.io/v2/",
    "hints": [
      "Write:\ncurl -I https://registry.devforge.io/v2/"
    ],
    "testCases": [
      {
        "id": "docker-133-tc-1",
        "description": "Verifies correct implementation for Registry Webhooks for Continuous Deployment",
        "testFn": "code.includes('curl') || code.includes('registry')"
      }
    ]
  },
  {
    "id": "docker-134-canary-deployments-with-containe",
    "title": "134. Canary Deployments with Containers",
    "slug": "lesson-134-canary-deployments-with-containe",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Canary Deployments with Containers in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Canary Deployments with Containers",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Sending a canary into a coal mine to test air safety before sending in the full crew.",
    "explanationMarkdown": "### Canary Deployments with Containers\n\nDeploy a single container with new code alongside existing production containers to verify stability under live traffic.\n\n```bash\ndocker ps --filter name=canary\n```",
    "workedExample": {
      "title": "Worked Example: Canary Deployments with Containers",
      "code": "docker ps --filter name=canary",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Canary Deployments with Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Canary Deployments with Containers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Route 10% traffic to canary container\ndocker ps --filter name=canary",
    "solutionCode": "docker ps --filter name=canary",
    "hints": [
      "Write:\ndocker ps --filter name=canary"
    ],
    "testCases": [
      {
        "id": "docker-134-tc-1",
        "description": "Verifies correct implementation for Canary Deployments with Containers",
        "testFn": "code.includes('docker ps')"
      }
    ]
  },
  {
    "id": "docker-135-module-9-review-enterprise-ci-cd",
    "title": "135. Module 9 Review: Enterprise CI/CD Pipeline Capstone",
    "slug": "lesson-135-module-9-review-enterprise-ci-cd",
    "language": "docker",
    "category": "Module 9: Registries & CI/CD Pipelines",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Module 9 Review: Enterprise CI/CD Pipeline Capstone in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Module 9 Review",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An automated global logistics hub shipping verified, signed, multi-architecture containers worldwide.",
    "explanationMarkdown": "### Module 9 Review: Enterprise CI/CD Pipeline Capstone\n\nA production CI/CD pipeline: automated builds, multi-arch AMD64/ARM64 compile, Trivy security gating, and immutable tagging.\n\n```bash\ndocker buildx ls\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Enterprise CI/CD Pipeline Capstone",
      "code": "docker buildx ls",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Module 9 Review: Enterprise CI/CD Pipeline Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Module 9 Review: Enterprise CI/CD Pipeline Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify multi-arch image status\ndocker buildx ls",
    "solutionCode": "docker buildx ls",
    "hints": [
      "Write:\ndocker buildx ls"
    ],
    "testCases": [
      {
        "id": "docker-135-tc-1",
        "description": "Verifies correct implementation for Module 9 Review: Enterprise CI/CD Pipeline Capstone",
        "testFn": "code.includes('docker buildx ls')"
      }
    ]
  },
  {
    "id": "docker-136-the-init-system-problem-zombie-p",
    "title": "136. The Init System Problem: Zombie Process Reaping",
    "slug": "lesson-136-the-init-system-problem-zombie-p",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Init System Problem: Zombie Process Reaping in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The Init System Problem",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A kindergarten teacher making sure all children leave the playground before locking the gate.",
    "explanationMarkdown": "### The Init System Problem: Zombie Process Reaping\n\nContainers lack standard OS init systems; passing `--init` uses `tini` as PID 1 to reap zombie child processes.\n\n```bash\ndocker run -d --init my-api\n```",
    "workedExample": {
      "title": "Worked Example: The Init System Problem: Zombie Process Reaping",
      "code": "docker run -d --init my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Init System Problem: Zombie Process Reaping.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Init System Problem: Zombie Process Reaping.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run container with built-in tini init system\ndocker run -d --init my-api",
    "solutionCode": "docker run -d --init my-api",
    "hints": [
      "Write:\ndocker run -d --init my-api"
    ],
    "testCases": [
      {
        "id": "docker-136-tc-1",
        "description": "Verifies correct implementation for The Init System Problem: Zombie Process Reaping",
        "testFn": "code.includes('--init')"
      }
    ]
  },
  {
    "id": "docker-137-handling-pid-1-signal-forwarding",
    "title": "137. Handling PID 1 Signal Forwarding (SIGTERM / SIGINT)",
    "slug": "lesson-137-handling-pid-1-signal-forwarding",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Handling PID 1 Signal Forwarding (SIGTERM / SIGINT) in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Handling PID 1 Signal Forwarding (SIGTERM / SIGINT)",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An orchestra conductor immediately catching the director's cut signal and stopping the music.",
    "explanationMarkdown": "### Handling PID 1 Signal Forwarding (SIGTERM / SIGINT)\n\nEnsure your node/python/go application runs directly as PID 1 so shutdown signals are received without delay.\n\n```bash\ndocker top my-api\n```",
    "workedExample": {
      "title": "Worked Example: Handling PID 1 Signal Forwarding (SIGTERM / SIGINT)",
      "code": "docker top my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling PID 1 Signal Forwarding (SIGTERM / SIGINT).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling PID 1 Signal Forwarding (SIGTERM / SIGINT).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Verify PID 1 process inside container\ndocker top my-api",
    "solutionCode": "docker top my-api",
    "hints": [
      "Write:\ndocker top my-api"
    ],
    "testCases": [
      {
        "id": "docker-137-tc-1",
        "description": "Verifies correct implementation for Handling PID 1 Signal Forwarding (SIGTERM / SIGINT)",
        "testFn": "code.includes('docker top')"
      }
    ]
  },
  {
    "id": "docker-138-monitoring-containers-with-prome",
    "title": "138. Monitoring Containers with Prometheus & cAdvisor",
    "slug": "lesson-138-monitoring-containers-with-prome",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Monitoring Containers with Prometheus & cAdvisor in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Monitoring Containers with Prometheus & cAdvisor",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Telemetry sensors mounted on race cars streaming tire heat and fuel pressure directly to the pit crew.",
    "explanationMarkdown": "### Monitoring Containers with Prometheus & cAdvisor\n\ncAdvisor gathers real-time CPU, memory, and network statistics from all running containers for Prometheus scraping.\n\n```bash\ndocker run -d --name cadvisor -p 8080:8080 -v /:/rootfs:ro -v /var/run:/var/run:ro -v /sys:/sys:ro gcr.io/cadvisor/cadvisor\n```",
    "workedExample": {
      "title": "Worked Example: Monitoring Containers with Prometheus & cAdvisor",
      "code": "docker run -d --name cadvisor -p 8080:8080 -v /:/rootfs:ro -v /var/run:/var/run:ro -v /sys:/sys:ro gcr.io/cadvisor/cadvisor",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Monitoring Containers with Prometheus & cAdvisor.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Monitoring Containers with Prometheus & cAdvisor.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Run cAdvisor container metrics exporter\ndocker run -d --name cadvisor -p 8080:8080 -v /:/rootfs:ro -v /var/run:/var/run:ro -v /sys:/sys:ro gcr.io/cadvisor/cadvisor",
    "solutionCode": "docker run -d --name cadvisor -p 8080:8080 -v /:/rootfs:ro -v /var/run:/var/run:ro -v /sys:/sys:ro gcr.io/cadvisor/cadvisor",
    "hints": [
      "Write:\ndocker run -d --name cadvisor -p 8080:8080 -v /:/rootfs:ro -v /var/run:/var/run:ro -v /sys:/sys:ro gcr.io/cadvisor/cadvisor"
    ],
    "testCases": [
      {
        "id": "docker-138-tc-1",
        "description": "Verifies correct implementation for Monitoring Containers with Prometheus & cAdvisor",
        "testFn": "code.includes('cadvisor')"
      }
    ]
  },
  {
    "id": "docker-139-centralized-logging-with-grafana",
    "title": "139. Centralized Logging with Grafana Loki & ELK",
    "slug": "lesson-139-centralized-logging-with-grafana",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Centralized Logging with Grafana Loki & ELK in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Centralized Logging with Grafana Loki & ELK",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A central air traffic audio recorder archiving radio chatter from every plane in the sky.",
    "explanationMarkdown": "### Centralized Logging with Grafana Loki & ELK\n\nRoute container stdout to centralized log collectors (Fluentbit, Loki, Datadog) using syslog or fluentd drivers.\n\n```bash\ndocker info --format '{{.LoggingDriver}}'\n```",
    "workedExample": {
      "title": "Worked Example: Centralized Logging with Grafana Loki & ELK",
      "code": "docker info --format '{{.LoggingDriver}}'",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Centralized Logging with Grafana Loki & ELK.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Centralized Logging with Grafana Loki & ELK.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# View Docker log driver configuration\ndocker info --format '{{.LoggingDriver}}'",
    "solutionCode": "docker info --format '{{.LoggingDriver}}'",
    "hints": [
      "Write:\ndocker info --format '{{.LoggingDriver}}'"
    ],
    "testCases": [
      {
        "id": "docker-139-tc-1",
        "description": "Verifies correct implementation for Centralized Logging with Grafana Loki & ELK",
        "testFn": "code.includes('LoggingDriver') || code.includes('docker info')"
      }
    ]
  },
  {
    "id": "docker-140-automated-disaster-recovery-for-",
    "title": "140. Automated Disaster Recovery for Container Hosts",
    "slug": "lesson-140-automated-disaster-recovery-for-",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Automated Disaster Recovery for Container Hosts in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Automated Disaster Recovery for Container Hosts",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An emergency backup generator kicking on within 2 seconds of a municipal power blackout.",
    "explanationMarkdown": "### Automated Disaster Recovery for Container Hosts\n\nAutomate host failover and container resurrection using `--restart=always` and external watchdog monitors.\n\n```bash\ndocker restart my-api\n```",
    "workedExample": {
      "title": "Worked Example: Automated Disaster Recovery for Container Hosts",
      "code": "docker restart my-api",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Automated Disaster Recovery for Container Hosts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Automated Disaster Recovery for Container Hosts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Test container reboot recovery\ndocker restart my-api",
    "solutionCode": "docker restart my-api",
    "hints": [
      "Write:\ndocker restart my-api"
    ],
    "testCases": [
      {
        "id": "docker-140-tc-1",
        "description": "Verifies correct implementation for Automated Disaster Recovery for Container Hosts",
        "testFn": "code.includes('docker restart')"
      }
    ]
  },
  {
    "id": "docker-141-docker-swarm-overview-managers-a",
    "title": "141. Docker Swarm Overview: Managers and Workers",
    "slug": "lesson-141-docker-swarm-overview-managers-a",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Docker Swarm Overview: Managers and Workers in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker Swarm Overview",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Forming a fleet of naval ships under the command of an admiral's flagship.",
    "explanationMarkdown": "### Docker Swarm Overview: Managers and Workers\n\nDocker Swarm turns a pool of Docker hosts into a single, virtual, self-healing container cluster.\n\n```bash\ndocker swarm init\n```",
    "workedExample": {
      "title": "Worked Example: Docker Swarm Overview: Managers and Workers",
      "code": "docker swarm init",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker Swarm Overview: Managers and Workers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Swarm Overview: Managers and Workers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Initialize Docker Swarm cluster\ndocker swarm init",
    "solutionCode": "docker swarm init",
    "hints": [
      "Write:\ndocker swarm init"
    ],
    "testCases": [
      {
        "id": "docker-141-tc-1",
        "description": "Verifies correct implementation for Docker Swarm Overview: Managers and Workers",
        "testFn": "code.includes('docker swarm init')"
      }
    ]
  },
  {
    "id": "docker-142-deploying-stacks-to-docker-swarm",
    "title": "142. Deploying Stacks to Docker Swarm with docker stack deploy",
    "slug": "lesson-142-deploying-stacks-to-docker-swarm",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Deploying Stacks to Docker Swarm with docker stack deploy in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Deploying Stacks to Docker Swarm with docker stack deploy",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An admiral dispatching orders to all ships in the armada simultaneously.",
    "explanationMarkdown": "### Deploying Stacks to Docker Swarm with docker stack deploy\n\nDeploys a Compose file as scalable, rolling-update services across a multi-node Swarm cluster.\n\n```bash\ndocker stack deploy -c compose.yaml prod-stack\n```",
    "workedExample": {
      "title": "Worked Example: Deploying Stacks to Docker Swarm with docker stack deploy",
      "code": "docker stack deploy -c compose.yaml prod-stack",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Deploying Stacks to Docker Swarm with docker stack deploy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deploying Stacks to Docker Swarm with docker stack deploy.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Deploy compose stack as swarm service\ndocker stack deploy -c compose.yaml prod-stack",
    "solutionCode": "docker stack deploy -c compose.yaml prod-stack",
    "hints": [
      "Write:\ndocker stack deploy -c compose.yaml prod-stack"
    ],
    "testCases": [
      {
        "id": "docker-142-tc-1",
        "description": "Verifies correct implementation for Deploying Stacks to Docker Swarm with docker stack deploy",
        "testFn": "code.includes('docker stack deploy')"
      }
    ]
  },
  {
    "id": "docker-143-the-docker-to-kubernetes-mental-",
    "title": "143. The Docker to Kubernetes Mental Bridge",
    "slug": "lesson-143-the-docker-to-kubernetes-mental-",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master The Docker to Kubernetes Mental Bridge in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "The Docker to Kubernetes Mental Bridge",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A pod of dolphins swimming together as a coordinated unit.",
    "explanationMarkdown": "### The Docker to Kubernetes Mental Bridge\n\nIn Kubernetes, the atomic unit is a Pod (one or more containers sharing localhost and storage volumes).\n\n```bash\necho \"Pod = 1 or more tightly coupled containers sharing network & IPC\"\n```",
    "workedExample": {
      "title": "Worked Example: The Docker to Kubernetes Mental Bridge",
      "code": "echo \"Pod = 1 or more tightly coupled containers sharing network & IPC\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Docker to Kubernetes Mental Bridge.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Docker to Kubernetes Mental Bridge.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Compare container to Pod architecture\necho \"Pod = 1 or more tightly coupled containers sharing network & IPC\"",
    "solutionCode": "echo \"Pod = 1 or more tightly coupled containers sharing network & IPC\"",
    "hints": [
      "Write:\necho \"Pod = 1 or more tightly coupled containers sharing network & IPC\""
    ],
    "testCases": [
      {
        "id": "docker-143-tc-1",
        "description": "Verifies correct implementation for The Docker to Kubernetes Mental Bridge",
        "testFn": "code.includes('Pod')"
      }
    ]
  },
  {
    "id": "docker-144-translating-compose-services-to-",
    "title": "144. Translating Compose Services to Kubernetes Pods",
    "slug": "lesson-144-translating-compose-services-to-",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Translating Compose Services to Kubernetes Pods in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Translating Compose Services to Kubernetes Pods",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Translating a local building blueprint into international civil engineering code.",
    "explanationMarkdown": "### Translating Compose Services to Kubernetes Pods\n\nMaps a Docker Compose service definition into a Kubernetes Pod specification.\n\n```bash\ncat pod.yaml\n```",
    "workedExample": {
      "title": "Worked Example: Translating Compose Services to Kubernetes Pods",
      "code": "cat pod.yaml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Translating Compose Services to Kubernetes Pods.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Translating Compose Services to Kubernetes Pods.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Review Kubernetes Pod manifest\ncat pod.yaml",
    "solutionCode": "cat pod.yaml",
    "hints": [
      "Write:\ncat pod.yaml"
    ],
    "testCases": [
      {
        "id": "docker-144-tc-1",
        "description": "Verifies correct implementation for Translating Compose Services to Kubernetes Pods",
        "testFn": "code.includes('pod.yaml') || code.includes('cat')"
      }
    ]
  },
  {
    "id": "docker-145-kubernetes-deployments-replicas-",
    "title": "145. Kubernetes Deployments: Replicas & Rolling Updates",
    "slug": "lesson-145-kubernetes-deployments-replicas-",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Kubernetes Deployments: Replicas & Rolling Updates in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Kubernetes Deployments",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A factory supervisor ensuring that exactly 5 cashiers are always standing at their checkout registers.",
    "explanationMarkdown": "### Kubernetes Deployments: Replicas & Rolling Updates\n\nKubernetes Deployments manage replica sets, automated rolling updates, and rollbacks.\n\n```bash\necho \"apiVersion: apps/v1\\nkind: Deployment\" > deployment.yaml\n```",
    "workedExample": {
      "title": "Worked Example: Kubernetes Deployments: Replicas & Rolling Updates",
      "code": "echo \"apiVersion: apps/v1\\nkind: Deployment\" > deployment.yaml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Kubernetes Deployments: Replicas & Rolling Updates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kubernetes Deployments: Replicas & Rolling Updates.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check deployment replica spec\necho \"apiVersion: apps/v1\\nkind: Deployment\" > deployment.yaml",
    "solutionCode": "echo \"apiVersion: apps/v1\\nkind: Deployment\" > deployment.yaml",
    "hints": [
      "Write:\necho \"apiVersion: apps/v1\\nkind: Deployment\" > deployment.yaml"
    ],
    "testCases": [
      {
        "id": "docker-145-tc-1",
        "description": "Verifies correct implementation for Kubernetes Deployments: Replicas & Rolling Updates",
        "testFn": "code.includes('Deployment') || code.includes('deployment.yaml')"
      }
    ]
  },
  {
    "id": "docker-146-kubernetes-services-clusterip,-n",
    "title": "146. Kubernetes Services: ClusterIP, NodePort, LoadBalancer",
    "slug": "lesson-146-kubernetes-services-clusterip,-n",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Kubernetes Services: ClusterIP, NodePort, LoadBalancer in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Kubernetes Services",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A bank lobby directory directing customers to the mortgage, loan, or teller windows.",
    "explanationMarkdown": "### Kubernetes Services: ClusterIP, NodePort, LoadBalancer\n\nServices provide stable IP addresses and DNS names to load balance traffic across dynamic ephemeral Pods.\n\n```bash\necho \"apiVersion: v1\\nkind: Service\" > service.yaml\n```",
    "workedExample": {
      "title": "Worked Example: Kubernetes Services: ClusterIP, NodePort, LoadBalancer",
      "code": "echo \"apiVersion: v1\\nkind: Service\" > service.yaml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Kubernetes Services: ClusterIP, NodePort, LoadBalancer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kubernetes Services: ClusterIP, NodePort, LoadBalancer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Check service network mapping\necho \"apiVersion: v1\\nkind: Service\" > service.yaml",
    "solutionCode": "echo \"apiVersion: v1\\nkind: Service\" > service.yaml",
    "hints": [
      "Write:\necho \"apiVersion: v1\\nkind: Service\" > service.yaml"
    ],
    "testCases": [
      {
        "id": "docker-146-tc-1",
        "description": "Verifies correct implementation for Kubernetes Services: ClusterIP, NodePort, LoadBalancer",
        "testFn": "code.includes('Service') || code.includes('service.yaml')"
      }
    ]
  },
  {
    "id": "docker-147-translating-docker-volumes-to-ku",
    "title": "147. Translating Docker Volumes to Kubernetes PV & PVC",
    "slug": "lesson-147-translating-docker-volumes-to-ku",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Translating Docker Volumes to Kubernetes PV & PVC in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Translating Docker Volumes to Kubernetes PV & PVC",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "Filing a requisition slip to claim a secure storage locker in the central warehouse.",
    "explanationMarkdown": "### Translating Docker Volumes to Kubernetes PV & PVC\n\nPersistentVolumes (PV) provide cluster storage; PersistentVolumeClaims (PVC) request storage for Pods.\n\n```bash\necho \"kind: PersistentVolumeClaim\" > pvc.yaml\n```",
    "workedExample": {
      "title": "Worked Example: Translating Docker Volumes to Kubernetes PV & PVC",
      "code": "echo \"kind: PersistentVolumeClaim\" > pvc.yaml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Translating Docker Volumes to Kubernetes PV & PVC.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Translating Docker Volumes to Kubernetes PV & PVC.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Persistent volume claim concept\necho \"kind: PersistentVolumeClaim\" > pvc.yaml",
    "solutionCode": "echo \"kind: PersistentVolumeClaim\" > pvc.yaml",
    "hints": [
      "Write:\necho \"kind: PersistentVolumeClaim\" > pvc.yaml"
    ],
    "testCases": [
      {
        "id": "docker-147-tc-1",
        "description": "Verifies correct implementation for Translating Docker Volumes to Kubernetes PV & PVC",
        "testFn": "code.includes('PersistentVolumeClaim') || code.includes('pvc.yaml')"
      }
    ]
  },
  {
    "id": "docker-148-configmaps-and-secrets-in-kubern",
    "title": "148. ConfigMaps and Secrets in Kubernetes",
    "slug": "lesson-148-configmaps-and-secrets-in-kubern",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master ConfigMaps and Secrets in Kubernetes in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "ConfigMaps and Secrets in Kubernetes",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "A corporate rulebook handed to new employees on their first day of work.",
    "explanationMarkdown": "### ConfigMaps and Secrets in Kubernetes\n\nDecouples environment configuration (ConfigMaps) and encrypted credentials (Secrets) from container images.\n\n```bash\necho \"kind: ConfigMap\" > configmap.yaml\n```",
    "workedExample": {
      "title": "Worked Example: ConfigMaps and Secrets in Kubernetes",
      "code": "echo \"kind: ConfigMap\" > configmap.yaml",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ConfigMaps and Secrets in Kubernetes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ConfigMaps and Secrets in Kubernetes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# ConfigMap environment mapping\necho \"kind: ConfigMap\" > configmap.yaml",
    "solutionCode": "echo \"kind: ConfigMap\" > configmap.yaml",
    "hints": [
      "Write:\necho \"kind: ConfigMap\" > configmap.yaml"
    ],
    "testCases": [
      {
        "id": "docker-148-tc-1",
        "description": "Verifies correct implementation for ConfigMaps and Secrets in Kubernetes",
        "testFn": "code.includes('ConfigMap') || code.includes('configmap.yaml')"
      }
    ]
  },
  {
    "id": "docker-149-helm-charts-the-package-manager-",
    "title": "149. Helm Charts: The Package Manager for Kubernetes",
    "slug": "lesson-149-helm-charts-the-package-manager-",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Helm Charts: The Package Manager for Kubernetes in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Helm Charts",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "An app store for cloud clusters: install fullstack databases and caches with one command.",
    "explanationMarkdown": "### Helm Charts: The Package Manager for Kubernetes\n\nHelm templates and packages complex multi-resource Kubernetes applications for reproducible deployments.\n\n```bash\nhelm search hub postgresql\n```",
    "workedExample": {
      "title": "Worked Example: Helm Charts: The Package Manager for Kubernetes",
      "code": "helm search hub postgresql",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Helm Charts: The Package Manager for Kubernetes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Helm Charts: The Package Manager for Kubernetes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Search Helm charts for PostgreSQL\nhelm search hub postgresql",
    "solutionCode": "helm search hub postgresql",
    "hints": [
      "Write:\nhelm search hub postgresql"
    ],
    "testCases": [
      {
        "id": "docker-149-tc-1",
        "description": "Verifies correct implementation for Helm Charts: The Package Manager for Kubernetes",
        "testFn": "code.includes('helm')"
      }
    ]
  },
  {
    "id": "docker-150-docker-devops-masterclass-capsto",
    "title": "150. Docker DevOps Masterclass Capstone: Production Cloud Pipeline",
    "slug": "lesson-150-docker-devops-masterclass-capsto",
    "language": "docker",
    "category": "Module 10: Production Containers & Kubernetes Bridge",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Master Docker DevOps Masterclass Capstone: Production Cloud Pipeline in Docker & Container DevOps (150 Topics).",
    "concepts": [
      "Docker DevOps Masterclass Capstone",
      "Docker & Container DevOps (150 Topics)"
    ],
    "analogy": "The triumphant commissioning of an automated container fleet sailing across enterprise cloud oceans.",
    "explanationMarkdown": "### Docker DevOps Masterclass Capstone: Production Cloud Pipeline\n\nA complete mastery of containerization: Dockerfiles, multi-stage builds, compose stacks, security hardening, and Kubernetes.\n\n```bash\ndocker ps --format \"table {{.ID}}\\t{{.Names}}\\t{{.Status}}\"\n```",
    "workedExample": {
      "title": "Worked Example: Docker DevOps Masterclass Capstone: Production Cloud Pipeline",
      "code": "docker ps --format \"table {{.ID}}\\t{{.Names}}\\t{{.Status}}\"",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Docker DevOps Masterclass Capstone: Production Cloud Pipeline.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker DevOps Masterclass Capstone: Production Cloud Pipeline.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Final verification of container deployment\ndocker ps --format \"table {{.ID}}\\t{{.Names}}\\t{{.Status}}\"",
    "solutionCode": "docker ps --format \"table {{.ID}}\\t{{.Names}}\\t{{.Status}}\"",
    "hints": [
      "Write:\ndocker ps --format \"table {{.ID}}\\t{{.Names}}\\t{{.Status}}\""
    ],
    "testCases": [
      {
        "id": "docker-150-tc-1",
        "description": "Verifies correct implementation for Docker DevOps Masterclass Capstone: Production Cloud Pipeline",
        "testFn": "code.includes('docker ps')"
      }
    ]
  }
]
};
