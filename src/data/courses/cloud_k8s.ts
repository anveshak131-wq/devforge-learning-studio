import { Track } from '../../types';

export const CLOUD_K8S_TRACK: Track = {
  id: "cloud",
  title: "Cloud & Kubernetes Orchestration",
  slug: "cloud-k8s-track",
  language: "cloud",
  icon: "Cloud",
  color: "#326CE5",
  tagline: "Cloud Native Infrastructure, Containers & Kubernetes",
  description: "Enterprise cloud native engineering: Linux namespaces, Docker containerization, Kubernetes core primitives, Pods, Services, Deployments, StatefulSets, Ingress, Helm, GitOps & Production Resilience.",
  lessons: [
  {
    "id": "cloud-1-linux-namespaces-pid-isolation",
    "title": "1. Linux Namespaces: PID Isolation",
    "slug": "lesson-1-linux-namespaces-pid-isolation",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "PID namespaces isolate process IDs so containers have an independent init (PID 1) tree.",
    "concepts": [
      "Linux Namespaces: PID Isolation",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Linux Namespaces: PID Isolation standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Linux Namespaces: PID Isolation\n\nPID namespaces isolate process IDs so containers have an independent init (PID 1) tree.\n\n```yaml\nunshare --pid --fork --mount-proc bash\nps aux\n```",
    "workedExample": {
      "title": "Worked Example: Linux Namespaces: PID Isolation",
      "code": "unshare --pid --fork --mount-proc bash\nps aux",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Linux Namespaces: PID Isolation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linux Namespaces: PID Isolation.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Linux Namespaces: PID Isolation\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "unshare --pid --fork --mount-proc bash\nps aux",
    "hints": [
      "Write:\nunshare --pid --fork --mount-proc bash\nps aux"
    ],
    "testCases": [
      {
        "id": "cloud-1-tc-1",
        "description": "Verifies correct cloud configuration for Linux Namespaces: PID Isolation",
        "testFn": "code.includes('unshare --pid')"
      }
    ]
  },
  {
    "id": "cloud-2-network-namespaces-netns",
    "title": "2. Network Namespaces (netns)",
    "slug": "lesson-2-network-namespaces-netns",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Network namespaces provide independent network interfaces, routing tables, and firewall rules.",
    "concepts": [
      "Network Namespaces (netns)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Network Namespaces (netns) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Network Namespaces (netns)\n\nNetwork namespaces provide independent network interfaces, routing tables, and firewall rules.\n\n```yaml\nip netns add blue-ns\nip netns exec blue-ns ip link list\n```",
    "workedExample": {
      "title": "Worked Example: Network Namespaces (netns)",
      "code": "ip netns add blue-ns\nip netns exec blue-ns ip link list",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Network Namespaces (netns).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Network Namespaces (netns).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Network Namespaces (netns)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "ip netns add blue-ns\nip netns exec blue-ns ip link list",
    "hints": [
      "Write:\nip netns add blue-ns\nip netns exec blue-ns ip link list"
    ],
    "testCases": [
      {
        "id": "cloud-2-tc-1",
        "description": "Verifies correct cloud configuration for Network Namespaces (netns)",
        "testFn": "code.includes('ip netns add')"
      }
    ]
  },
  {
    "id": "cloud-3-mount-namespaces-pivot-root",
    "title": "3. Mount Namespaces & Pivot Root",
    "slug": "lesson-3-mount-namespaces-pivot-root",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Isolate filesystem mount points from the host system using mount namespaces and pivot_root.",
    "concepts": [
      "Mount Namespaces & Pivot Root",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Mount Namespaces & Pivot Root standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Mount Namespaces & Pivot Root\n\nIsolate filesystem mount points from the host system using mount namespaces and pivot_root.\n\n```yaml\nunshare --mount bash\nmount -t tmpfs none /mnt\n```",
    "workedExample": {
      "title": "Worked Example: Mount Namespaces & Pivot Root",
      "code": "unshare --mount bash\nmount -t tmpfs none /mnt",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Mount Namespaces & Pivot Root.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mount Namespaces & Pivot Root.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Mount Namespaces & Pivot Root\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "unshare --mount bash\nmount -t tmpfs none /mnt",
    "hints": [
      "Write:\nunshare --mount bash\nmount -t tmpfs none /mnt"
    ],
    "testCases": [
      {
        "id": "cloud-3-tc-1",
        "description": "Verifies correct cloud configuration for Mount Namespaces & Pivot Root",
        "testFn": "code.includes('unshare --mount')"
      }
    ]
  },
  {
    "id": "cloud-4-uts-ipc-namespaces",
    "title": "4. UTS & IPC Namespaces",
    "slug": "lesson-4-uts-ipc-namespaces",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Isolate hostname/domain (UTS) and shared memory/message queues (IPC) across containers.",
    "concepts": [
      "UTS & IPC Namespaces",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: UTS & IPC Namespaces standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### UTS & IPC Namespaces\n\nIsolate hostname/domain (UTS) and shared memory/message queues (IPC) across containers.\n\n```yaml\nunshare --uts --ipc bash\nhostname container-worker-1\n```",
    "workedExample": {
      "title": "Worked Example: UTS & IPC Namespaces",
      "code": "unshare --uts --ipc bash\nhostname container-worker-1",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for UTS & IPC Namespaces.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of UTS & IPC Namespaces.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for UTS & IPC Namespaces\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "unshare --uts --ipc bash\nhostname container-worker-1",
    "hints": [
      "Write:\nunshare --uts --ipc bash\nhostname container-worker-1"
    ],
    "testCases": [
      {
        "id": "cloud-4-tc-1",
        "description": "Verifies correct cloud configuration for UTS & IPC Namespaces",
        "testFn": "code.includes('unshare --uts')"
      }
    ]
  },
  {
    "id": "cloud-5-control-groups-cgroups-v2-arch",
    "title": "5. Control Groups (cgroups v2) Architecture",
    "slug": "lesson-5-control-groups-cgroups-v2-arch",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Cgroups v2 enforce hierarchical resource allocation limits on CPU, memory, and I/O.",
    "concepts": [
      "Control Groups (cgroups v2) Architecture",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Control Groups (cgroups v2) Architecture standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Control Groups (cgroups v2) Architecture\n\nCgroups v2 enforce hierarchical resource allocation limits on CPU, memory, and I/O.\n\n```yaml\nmkdir /sys/fs/cgroup/sandbox\necho \"50000 100000\" > /sys/fs/cgroup/sandbox/cpu.max\n```",
    "workedExample": {
      "title": "Worked Example: Control Groups (cgroups v2) Architecture",
      "code": "mkdir /sys/fs/cgroup/sandbox\necho \"50000 100000\" > /sys/fs/cgroup/sandbox/cpu.max",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Control Groups (cgroups v2) Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Control Groups (cgroups v2) Architecture.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Control Groups (cgroups v2) Architecture\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "mkdir /sys/fs/cgroup/sandbox\necho \"50000 100000\" > /sys/fs/cgroup/sandbox/cpu.max",
    "hints": [
      "Write:\nmkdir /sys/fs/cgroup/sandbox\necho \"50000 100000\" > /sys/fs/cgroup/sandbox/cpu.max"
    ],
    "testCases": [
      {
        "id": "cloud-5-tc-1",
        "description": "Verifies correct cloud configuration for Control Groups (cgroups v2) Architecture",
        "testFn": "code.includes('cgroup') && code.includes('cpu.max')"
      }
    ]
  },
  {
    "id": "cloud-6-memory-limits-with-cgroups",
    "title": "6. Memory Limits with cgroups",
    "slug": "lesson-6-memory-limits-with-cgroups",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Set hard memory boundaries and examine out-of-memory (OOM) killer thresholds.",
    "concepts": [
      "Memory Limits with cgroups",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Memory Limits with cgroups standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Memory Limits with cgroups\n\nSet hard memory boundaries and examine out-of-memory (OOM) killer thresholds.\n\n```yaml\necho \"256M\" > /sys/fs/cgroup/sandbox/memory.max\ncat /sys/fs/cgroup/sandbox/memory.current\n```",
    "workedExample": {
      "title": "Worked Example: Memory Limits with cgroups",
      "code": "echo \"256M\" > /sys/fs/cgroup/sandbox/memory.max\ncat /sys/fs/cgroup/sandbox/memory.current",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Memory Limits with cgroups.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Memory Limits with cgroups.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Memory Limits with cgroups\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"256M\" > /sys/fs/cgroup/sandbox/memory.max\ncat /sys/fs/cgroup/sandbox/memory.current",
    "hints": [
      "Write:\necho \"256M\" > /sys/fs/cgroup/sandbox/memory.max\ncat /sys/fs/cgroup/sandbox/memory.current"
    ],
    "testCases": [
      {
        "id": "cloud-6-tc-1",
        "description": "Verifies correct cloud configuration for Memory Limits with cgroups",
        "testFn": "code.includes('memory.max')"
      }
    ]
  },
  {
    "id": "cloud-7-cpu-bandwidth-cfs-quota",
    "title": "7. CPU Bandwidth & CFS Quota",
    "slug": "lesson-7-cpu-bandwidth-cfs-quota",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Configure Completely Fair Scheduler (CFS) quotas to throttle container CPU usage.",
    "concepts": [
      "CPU Bandwidth & CFS Quota",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: CPU Bandwidth & CFS Quota standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### CPU Bandwidth & CFS Quota\n\nConfigure Completely Fair Scheduler (CFS) quotas to throttle container CPU usage.\n\n```yaml\necho \"200000 100000\" > /sys/fs/cgroup/sandbox/cpu.max # 2 full cores\n```",
    "workedExample": {
      "title": "Worked Example: CPU Bandwidth & CFS Quota",
      "code": "echo \"200000 100000\" > /sys/fs/cgroup/sandbox/cpu.max # 2 full cores",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for CPU Bandwidth & CFS Quota.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CPU Bandwidth & CFS Quota.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for CPU Bandwidth & CFS Quota\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"200000 100000\" > /sys/fs/cgroup/sandbox/cpu.max # 2 full cores",
    "hints": [
      "Write:\necho \"200000 100000\" > /sys/fs/cgroup/sandbox/cpu.max # 2 full cores"
    ],
    "testCases": [
      {
        "id": "cloud-7-tc-1",
        "description": "Verifies correct cloud configuration for CPU Bandwidth & CFS Quota",
        "testFn": "code.includes('cpu.max')"
      }
    ]
  },
  {
    "id": "cloud-8-overlayfs-copy-on-write-cow",
    "title": "8. OverlayFS & Copy-on-Write (CoW)",
    "slug": "lesson-8-overlayfs-copy-on-write-cow",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Overlay filesystems combine lower read-only layers with an upper writable layer.",
    "concepts": [
      "OverlayFS & Copy-on-Write (CoW)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: OverlayFS & Copy-on-Write (CoW) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### OverlayFS & Copy-on-Write (CoW)\n\nOverlay filesystems combine lower read-only layers with an upper writable layer.\n\n```yaml\nmount -t overlay overlay -o lowerdir=base,upperdir=diff,workdir=work merged\n```",
    "workedExample": {
      "title": "Worked Example: OverlayFS & Copy-on-Write (CoW)",
      "code": "mount -t overlay overlay -o lowerdir=base,upperdir=diff,workdir=work merged",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for OverlayFS & Copy-on-Write (CoW).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of OverlayFS & Copy-on-Write (CoW).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for OverlayFS & Copy-on-Write (CoW)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "mount -t overlay overlay -o lowerdir=base,upperdir=diff,workdir=work merged",
    "hints": [
      "Write:\nmount -t overlay overlay -o lowerdir=base,upperdir=diff,workdir=work merged"
    ],
    "testCases": [
      {
        "id": "cloud-8-tc-1",
        "description": "Verifies correct cloud configuration for OverlayFS & Copy-on-Write (CoW)",
        "testFn": "code.includes('mount -t overlay')"
      }
    ]
  },
  {
    "id": "cloud-9-chroot-vs-pivot-root",
    "title": "9. chroot vs pivot_root",
    "slug": "lesson-9-chroot-vs-pivot-root",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand why container runtimes use pivot_root instead of chroot for security escape prevention.",
    "concepts": [
      "chroot vs pivot_root",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: chroot vs pivot_root standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### chroot vs pivot_root\n\nUnderstand why container runtimes use pivot_root instead of chroot for security escape prevention.\n\n```yaml\npivot_root /new_root /new_root/old_root\n```",
    "workedExample": {
      "title": "Worked Example: chroot vs pivot_root",
      "code": "pivot_root /new_root /new_root/old_root",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for chroot vs pivot_root.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of chroot vs pivot_root.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for chroot vs pivot_root\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "pivot_root /new_root /new_root/old_root",
    "hints": [
      "Write:\npivot_root /new_root /new_root/old_root"
    ],
    "testCases": [
      {
        "id": "cloud-9-tc-1",
        "description": "Verifies correct cloud configuration for chroot vs pivot_root",
        "testFn": "code.includes('pivot_root')"
      }
    ]
  },
  {
    "id": "cloud-10-capabilities-cap-sys-admin-cap",
    "title": "10. Capabilities (cap_sys_admin, cap_net_admin)",
    "slug": "lesson-10-capabilities-cap-sys-admin-cap",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Linux capabilities break root privileges into granular permission bits.",
    "concepts": [
      "Capabilities (cap_sys_admin, cap_net_admin)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Capabilities (cap_sys_admin, cap_net_admin) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Capabilities (cap_sys_admin, cap_net_admin)\n\nLinux capabilities break root privileges into granular permission bits.\n\n```yaml\ngetpcaps $$\n```",
    "workedExample": {
      "title": "Worked Example: Capabilities (cap_sys_admin, cap_net_admin)",
      "code": "getpcaps $$",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Capabilities (cap_sys_admin, cap_net_admin).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Capabilities (cap_sys_admin, cap_net_admin).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Capabilities (cap_sys_admin, cap_net_admin)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "getpcaps $$",
    "hints": [
      "Write:\ngetpcaps $$"
    ],
    "testCases": [
      {
        "id": "cloud-10-tc-1",
        "description": "Verifies correct cloud configuration for Capabilities (cap_sys_admin, cap_net_admin)",
        "testFn": "code.includes('getpcaps')"
      }
    ]
  },
  {
    "id": "cloud-11-securing-containers-with-secco",
    "title": "11. Securing Containers with Seccomp Filters",
    "slug": "lesson-11-securing-containers-with-secco",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter syscall access using Berkeley Packet Filters to prevent kernel exploitation.",
    "concepts": [
      "Securing Containers with Seccomp Filters",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Securing Containers with Seccomp Filters standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Securing Containers with Seccomp Filters\n\nFilter syscall access using Berkeley Packet Filters to prevent kernel exploitation.\n\n```yaml\ndocker run --security-opt seccomp=default.json alpine\n```",
    "workedExample": {
      "title": "Worked Example: Securing Containers with Seccomp Filters",
      "code": "docker run --security-opt seccomp=default.json alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Securing Containers with Seccomp Filters.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Securing Containers with Seccomp Filters.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Securing Containers with Seccomp Filters\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run --security-opt seccomp=default.json alpine",
    "hints": [
      "Write:\ndocker run --security-opt seccomp=default.json alpine"
    ],
    "testCases": [
      {
        "id": "cloud-11-tc-1",
        "description": "Verifies correct cloud configuration for Securing Containers with Seccomp Filters",
        "testFn": "code.includes('security-opt seccomp')"
      }
    ]
  },
  {
    "id": "cloud-12-apparmor-selinux-mandatory-acc",
    "title": "12. AppArmor & SELinux Mandatory Access Controls",
    "slug": "lesson-12-apparmor-selinux-mandatory-acc",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enforce kernel-level Mandatory Access Control policies on container processes.",
    "concepts": [
      "AppArmor & SELinux Mandatory Access Controls",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: AppArmor & SELinux Mandatory Access Controls standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### AppArmor & SELinux Mandatory Access Controls\n\nEnforce kernel-level Mandatory Access Control policies on container processes.\n\n```yaml\ndocker run --security-opt apparmor=docker-default alpine\n```",
    "workedExample": {
      "title": "Worked Example: AppArmor & SELinux Mandatory Access Controls",
      "code": "docker run --security-opt apparmor=docker-default alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for AppArmor & SELinux Mandatory Access Controls.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of AppArmor & SELinux Mandatory Access Controls.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for AppArmor & SELinux Mandatory Access Controls\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run --security-opt apparmor=docker-default alpine",
    "hints": [
      "Write:\ndocker run --security-opt apparmor=docker-default alpine"
    ],
    "testCases": [
      {
        "id": "cloud-12-tc-1",
        "description": "Verifies correct cloud configuration for AppArmor & SELinux Mandatory Access Controls",
        "testFn": "code.includes('security-opt apparmor')"
      }
    ]
  },
  {
    "id": "cloud-13-virtual-machines-vs-containers",
    "title": "13. Virtual Machines vs Containers (Hypervisors vs OS Virtualization)",
    "slug": "lesson-13-virtual-machines-vs-containers",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compare Type-1/2 hypervisors (KVM, Xen) with lightweight OS namespaces.",
    "concepts": [
      "Virtual Machines vs Containers (Hypervisors vs OS Virtualization)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Virtual Machines vs Containers (Hypervisors vs OS Virtualization) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Virtual Machines vs Containers (Hypervisors vs OS Virtualization)\n\nCompare Type-1/2 hypervisors (KVM, Xen) with lightweight OS namespaces.\n\n```yaml\necho \"Containers share host kernel; VMs emulate entire hardware\"\n```",
    "workedExample": {
      "title": "Worked Example: Virtual Machines vs Containers (Hypervisors vs OS Virtualization)",
      "code": "echo \"Containers share host kernel; VMs emulate entire hardware\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Virtual Machines vs Containers (Hypervisors vs OS Virtualization).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Virtual Machines vs Containers (Hypervisors vs OS Virtualization).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Virtual Machines vs Containers (Hypervisors vs OS Virtualization)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"Containers share host kernel; VMs emulate entire hardware\"",
    "hints": [
      "Write:\necho \"Containers share host kernel; VMs emulate entire hardware\""
    ],
    "testCases": [
      {
        "id": "cloud-13-tc-1",
        "description": "Verifies correct cloud configuration for Virtual Machines vs Containers (Hypervisors vs OS Virtualization)",
        "testFn": "code.includes('Containers share host kernel')"
      }
    ]
  },
  {
    "id": "cloud-14-oci-standards-open-container-i",
    "title": "14. OCI Standards (Open Container Initiative)",
    "slug": "lesson-14-oci-standards-open-container-i",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand runtime-spec (runc, crun) and image-spec specifications.",
    "concepts": [
      "OCI Standards (Open Container Initiative)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: OCI Standards (Open Container Initiative) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### OCI Standards (Open Container Initiative)\n\nUnderstand runtime-spec (runc, crun) and image-spec specifications.\n\n```yaml\nrunc spec\nls -l config.json\n```",
    "workedExample": {
      "title": "Worked Example: OCI Standards (Open Container Initiative)",
      "code": "runc spec\nls -l config.json",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for OCI Standards (Open Container Initiative).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of OCI Standards (Open Container Initiative).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for OCI Standards (Open Container Initiative)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "runc spec\nls -l config.json",
    "hints": [
      "Write:\nrunc spec\nls -l config.json"
    ],
    "testCases": [
      {
        "id": "cloud-14-tc-1",
        "description": "Verifies correct cloud configuration for OCI Standards (Open Container Initiative)",
        "testFn": "code.includes('runc spec')"
      }
    ]
  },
  {
    "id": "cloud-15-building-a-minimal-container-f",
    "title": "15. Building a Minimal Container from Scratch with Shell",
    "slug": "lesson-15-building-a-minimal-container-f",
    "language": "cloud",
    "category": "Module 1: Linux Namespaces, Cgroups & Virtualization",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine namespaces, cgroups, and chroot to simulate a mini container engine.",
    "concepts": [
      "Building a Minimal Container from Scratch with Shell",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Building a Minimal Container from Scratch with Shell standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Building a Minimal Container from Scratch with Shell\n\nCombine namespaces, cgroups, and chroot to simulate a mini container engine.\n\n```yaml\nunshare -m -u -i -p -n --fork chroot /rootfs /bin/sh\n```",
    "workedExample": {
      "title": "Worked Example: Building a Minimal Container from Scratch with Shell",
      "code": "unshare -m -u -i -p -n --fork chroot /rootfs /bin/sh",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Building a Minimal Container from Scratch with Shell.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building a Minimal Container from Scratch with Shell.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Building a Minimal Container from Scratch with Shell\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "unshare -m -u -i -p -n --fork chroot /rootfs /bin/sh",
    "hints": [
      "Write:\nunshare -m -u -i -p -n --fork chroot /rootfs /bin/sh"
    ],
    "testCases": [
      {
        "id": "cloud-15-tc-1",
        "description": "Verifies correct cloud configuration for Building a Minimal Container from Scratch with Shell",
        "testFn": "code.includes('unshare -m -u -i -p -n')"
      }
    ]
  },
  {
    "id": "cloud-16-docker-daemon-architecture",
    "title": "16. Docker Daemon & Architecture",
    "slug": "lesson-16-docker-daemon-architecture",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Client-server architecture: Docker CLI, dockerd, containerd, and runc.",
    "concepts": [
      "Docker Daemon & Architecture",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Daemon & Architecture standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Daemon & Architecture\n\nClient-server architecture: Docker CLI, dockerd, containerd, and runc.\n\n```yaml\ndocker version\ndocker info\n```",
    "workedExample": {
      "title": "Worked Example: Docker Daemon & Architecture",
      "code": "docker version\ndocker info",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Daemon & Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Daemon & Architecture.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Daemon & Architecture\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker version\ndocker info",
    "hints": [
      "Write:\ndocker version\ndocker info"
    ],
    "testCases": [
      {
        "id": "cloud-16-tc-1",
        "description": "Verifies correct cloud configuration for Docker Daemon & Architecture",
        "testFn": "code.includes('docker version')"
      }
    ]
  },
  {
    "id": "cloud-17-running-first-container",
    "title": "17. Running First Container",
    "slug": "lesson-17-running-first-container",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fetch and execute an interactive container in the background.",
    "concepts": [
      "Running First Container",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Running First Container standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Running First Container\n\nFetch and execute an interactive container in the background.\n\n```yaml\ndocker run -d --name web -p 8080:80 nginx:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Running First Container",
      "code": "docker run -d --name web -p 8080:80 nginx:alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Running First Container.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Running First Container.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Running First Container\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run -d --name web -p 8080:80 nginx:alpine",
    "hints": [
      "Write:\ndocker run -d --name web -p 8080:80 nginx:alpine"
    ],
    "testCases": [
      {
        "id": "cloud-17-tc-1",
        "description": "Verifies correct cloud configuration for Running First Container",
        "testFn": "code.includes('docker run -d')"
      }
    ]
  },
  {
    "id": "cloud-18-dockerfile-basics-from-run-cmd",
    "title": "18. Dockerfile Basics: FROM, RUN, CMD",
    "slug": "lesson-18-dockerfile-basics-from-run-cmd",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declare base images, build-time execution steps, and default container command.",
    "concepts": [
      "Dockerfile Basics: FROM, RUN, CMD",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Dockerfile Basics: FROM, RUN, CMD standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Dockerfile Basics: FROM, RUN, CMD\n\nDeclare base images, build-time execution steps, and default container command.\n\n```yaml\nFROM alpine:3.18\nRUN apk add --no-cache curl\nCMD [\"curl\", \"--version\"]\n```",
    "workedExample": {
      "title": "Worked Example: Dockerfile Basics: FROM, RUN, CMD",
      "code": "FROM alpine:3.18\nRUN apk add --no-cache curl\nCMD [\"curl\", \"--version\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Dockerfile Basics: FROM, RUN, CMD.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dockerfile Basics: FROM, RUN, CMD.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Dockerfile Basics: FROM, RUN, CMD\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "FROM alpine:3.18\nRUN apk add --no-cache curl\nCMD [\"curl\", \"--version\"]",
    "hints": [
      "Write:\nFROM alpine:3.18\nRUN apk add --no-cache curl\nCMD [\"curl\", \"--version\"]"
    ],
    "testCases": [
      {
        "id": "cloud-18-tc-1",
        "description": "Verifies correct cloud configuration for Dockerfile Basics: FROM, RUN, CMD",
        "testFn": "code.includes('FROM alpine') && code.includes('CMD')"
      }
    ]
  },
  {
    "id": "cloud-19-entrypoint-vs-cmd",
    "title": "19. ENTRYPOINT vs CMD",
    "slug": "lesson-19-entrypoint-vs-cmd",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine fixed executable ENTRYPOINT with overridable default arguments via CMD.",
    "concepts": [
      "ENTRYPOINT vs CMD",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ENTRYPOINT vs CMD standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ENTRYPOINT vs CMD\n\nCombine fixed executable ENTRYPOINT with overridable default arguments via CMD.\n\n```yaml\nFROM alpine\nENTRYPOINT [\"ping\", \"-c\", \"3\"]\nCMD [\"localhost\"]\n```",
    "workedExample": {
      "title": "Worked Example: ENTRYPOINT vs CMD",
      "code": "FROM alpine\nENTRYPOINT [\"ping\", \"-c\", \"3\"]\nCMD [\"localhost\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ENTRYPOINT vs CMD.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ENTRYPOINT vs CMD.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ENTRYPOINT vs CMD\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "FROM alpine\nENTRYPOINT [\"ping\", \"-c\", \"3\"]\nCMD [\"localhost\"]",
    "hints": [
      "Write:\nFROM alpine\nENTRYPOINT [\"ping\", \"-c\", \"3\"]\nCMD [\"localhost\"]"
    ],
    "testCases": [
      {
        "id": "cloud-19-tc-1",
        "description": "Verifies correct cloud configuration for ENTRYPOINT vs CMD",
        "testFn": "code.includes('ENTRYPOINT') && code.includes('CMD')"
      }
    ]
  },
  {
    "id": "cloud-20-image-layers-caching-optimizat",
    "title": "20. Image Layers & Caching Optimization",
    "slug": "lesson-20-image-layers-caching-optimizat",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Order instructions from least frequently changed to most frequently changed to maximize layer cache hits.",
    "concepts": [
      "Image Layers & Caching Optimization",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Image Layers & Caching Optimization standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Image Layers & Caching Optimization\n\nOrder instructions from least frequently changed to most frequently changed to maximize layer cache hits.\n\n```yaml\nCOPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"npm\", \"start\"]\n```",
    "workedExample": {
      "title": "Worked Example: Image Layers & Caching Optimization",
      "code": "COPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"npm\", \"start\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Image Layers & Caching Optimization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Image Layers & Caching Optimization.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Image Layers & Caching Optimization\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "COPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"npm\", \"start\"]",
    "hints": [
      "Write:\nCOPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"npm\", \"start\"]"
    ],
    "testCases": [
      {
        "id": "cloud-20-tc-1",
        "description": "Verifies correct cloud configuration for Image Layers & Caching Optimization",
        "testFn": "code.includes('COPY package.json')"
      }
    ]
  },
  {
    "id": "cloud-21-dockerignore-best-practices",
    "title": "21. .dockerignore Best Practices",
    "slug": "lesson-21-dockerignore-best-practices",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Exclude git history, node_modules, and secrets from container build context.",
    "concepts": [
      ".dockerignore Best Practices",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: .dockerignore Best Practices standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### .dockerignore Best Practices\n\nExclude git history, node_modules, and secrets from container build context.\n\n```yaml\n.git\nnode_modules\n.env\n*.log\n```",
    "workedExample": {
      "title": "Worked Example: .dockerignore Best Practices",
      "code": ".git\nnode_modules\n.env\n*.log",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for .dockerignore Best Practices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of .dockerignore Best Practices.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for .dockerignore Best Practices\n# TODO: Write command or manifest below\n\n",
    "solutionCode": ".git\nnode_modules\n.env\n*.log",
    "hints": [
      "Write:\n.git\nnode_modules\n.env\n*.log"
    ],
    "testCases": [
      {
        "id": "cloud-21-tc-1",
        "description": "Verifies correct cloud configuration for .dockerignore Best Practices",
        "testFn": "code.includes('.git') && code.includes('node_modules')"
      }
    ]
  },
  {
    "id": "cloud-22-multi-stage-builds-build-vs-ru",
    "title": "22. Multi-Stage Builds: Build vs Runtime",
    "slug": "lesson-22-multi-stage-builds-build-vs-ru",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Dramatically shrink final image size by discarding build tools and intermediate artifacts.",
    "concepts": [
      "Multi-Stage Builds: Build vs Runtime",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Multi-Stage Builds: Build vs Runtime standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Multi-Stage Builds: Build vs Runtime\n\nDramatically shrink final image size by discarding build tools and intermediate artifacts.\n\n```yaml\nFROM golang:1.20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o server .\n\nFROM alpine:latest\nCOPY --from=builder /app/server /server\nCMD [\"/server\"]\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Stage Builds: Build vs Runtime",
      "code": "FROM golang:1.20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o server .\n\nFROM alpine:latest\nCOPY --from=builder /app/server /server\nCMD [\"/server\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Multi-Stage Builds: Build vs Runtime.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Stage Builds: Build vs Runtime.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Multi-Stage Builds: Build vs Runtime\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "FROM golang:1.20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o server .\n\nFROM alpine:latest\nCOPY --from=builder /app/server /server\nCMD [\"/server\"]",
    "hints": [
      "Write:\nFROM golang:1.20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o server .\n\nFROM alpine:latest\nCOPY --from=builder /app/server /server\nCMD [\"/server\"]"
    ],
    "testCases": [
      {
        "id": "cloud-22-tc-1",
        "description": "Verifies correct cloud configuration for Multi-Stage Builds: Build vs Runtime",
        "testFn": "code.includes('AS builder') && code.includes('COPY --from=builder')"
      }
    ]
  },
  {
    "id": "cloud-23-non-root-container-users-for-s",
    "title": "23. Non-Root Container Users for Security",
    "slug": "lesson-23-non-root-container-users-for-s",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Switch to an unprivileged non-root UID to prevent container escape host compromise.",
    "concepts": [
      "Non-Root Container Users for Security",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Non-Root Container Users for Security standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Non-Root Container Users for Security\n\nSwitch to an unprivileged non-root UID to prevent container escape host compromise.\n\n```yaml\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\n```",
    "workedExample": {
      "title": "Worked Example: Non-Root Container Users for Security",
      "code": "RUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Non-Root Container Users for Security.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Non-Root Container Users for Security.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Non-Root Container Users for Security\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "RUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser",
    "hints": [
      "Write:\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser"
    ],
    "testCases": [
      {
        "id": "cloud-23-tc-1",
        "description": "Verifies correct cloud configuration for Non-Root Container Users for Security",
        "testFn": "code.includes('USER appuser')"
      }
    ]
  },
  {
    "id": "cloud-24-environment-variables-env-arg",
    "title": "24. Environment Variables (ENV & ARG)",
    "slug": "lesson-24-environment-variables-env-arg",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Differentiate build-time build-args (ARG) from runtime environment variables (ENV).",
    "concepts": [
      "Environment Variables (ENV & ARG)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Environment Variables (ENV & ARG) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Environment Variables (ENV & ARG)\n\nDifferentiate build-time build-args (ARG) from runtime environment variables (ENV).\n\n```yaml\nARG APP_ENV=production\nENV NODE_ENV=${APP_ENV}\nENV PORT=8080\n```",
    "workedExample": {
      "title": "Worked Example: Environment Variables (ENV & ARG)",
      "code": "ARG APP_ENV=production\nENV NODE_ENV=${APP_ENV}\nENV PORT=8080",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Environment Variables (ENV & ARG).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Environment Variables (ENV & ARG).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Environment Variables (ENV & ARG)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "ARG APP_ENV=production\nENV NODE_ENV=${APP_ENV}\nENV PORT=8080",
    "hints": [
      "Write:\nARG APP_ENV=production\nENV NODE_ENV=${APP_ENV}\nENV PORT=8080"
    ],
    "testCases": [
      {
        "id": "cloud-24-tc-1",
        "description": "Verifies correct cloud configuration for Environment Variables (ENV & ARG)",
        "testFn": "code.includes('ARG APP_ENV') && code.includes('ENV NODE_ENV')"
      }
    ]
  },
  {
    "id": "cloud-25-distroless-scratch-base-images",
    "title": "25. Distroless & Scratch Base Images",
    "slug": "lesson-25-distroless-scratch-base-images",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Eliminate shell, package managers, and standard utilities for zero CVE attack surface.",
    "concepts": [
      "Distroless & Scratch Base Images",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Distroless & Scratch Base Images standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Distroless & Scratch Base Images\n\nEliminate shell, package managers, and standard utilities for zero CVE attack surface.\n\n```yaml\nFROM gcr.io/distroless/static-debian11\nCOPY myapp /myapp\nCMD [\"/myapp\"]\n```",
    "workedExample": {
      "title": "Worked Example: Distroless & Scratch Base Images",
      "code": "FROM gcr.io/distroless/static-debian11\nCOPY myapp /myapp\nCMD [\"/myapp\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Distroless & Scratch Base Images.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Distroless & Scratch Base Images.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Distroless & Scratch Base Images\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "FROM gcr.io/distroless/static-debian11\nCOPY myapp /myapp\nCMD [\"/myapp\"]",
    "hints": [
      "Write:\nFROM gcr.io/distroless/static-debian11\nCOPY myapp /myapp\nCMD [\"/myapp\"]"
    ],
    "testCases": [
      {
        "id": "cloud-25-tc-1",
        "description": "Verifies correct cloud configuration for Distroless & Scratch Base Images",
        "testFn": "code.includes('gcr.io/distroless')"
      }
    ]
  },
  {
    "id": "cloud-26-docker-container-lifecycle-com",
    "title": "26. Docker Container Lifecycle Commands",
    "slug": "lesson-26-docker-container-lifecycle-com",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect, attach, execute into running containers, and view streaming logs.",
    "concepts": [
      "Docker Container Lifecycle Commands",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Container Lifecycle Commands standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Container Lifecycle Commands\n\nInspect, attach, execute into running containers, and view streaming logs.\n\n```yaml\ndocker logs -f web\ndocker exec -it web sh\n```",
    "workedExample": {
      "title": "Worked Example: Docker Container Lifecycle Commands",
      "code": "docker logs -f web\ndocker exec -it web sh",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Container Lifecycle Commands.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Container Lifecycle Commands.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Container Lifecycle Commands\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker logs -f web\ndocker exec -it web sh",
    "hints": [
      "Write:\ndocker logs -f web\ndocker exec -it web sh"
    ],
    "testCases": [
      {
        "id": "cloud-26-tc-1",
        "description": "Verifies correct cloud configuration for Docker Container Lifecycle Commands",
        "testFn": "code.includes('docker exec -it')"
      }
    ]
  },
  {
    "id": "cloud-27-image-tagging-semantic-version",
    "title": "27. Image Tagging & Semantic Versioning",
    "slug": "lesson-27-image-tagging-semantic-version",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tag images with Git commit SHA and semantic release versions.",
    "concepts": [
      "Image Tagging & Semantic Versioning",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Image Tagging & Semantic Versioning standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Image Tagging & Semantic Versioning\n\nTag images with Git commit SHA and semantic release versions.\n\n```yaml\ndocker tag myapp:latest registry.example.com/myapp:v1.4.2\ndocker push registry.example.com/myapp:v1.4.2\n```",
    "workedExample": {
      "title": "Worked Example: Image Tagging & Semantic Versioning",
      "code": "docker tag myapp:latest registry.example.com/myapp:v1.4.2\ndocker push registry.example.com/myapp:v1.4.2",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Image Tagging & Semantic Versioning.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Image Tagging & Semantic Versioning.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Image Tagging & Semantic Versioning\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker tag myapp:latest registry.example.com/myapp:v1.4.2\ndocker push registry.example.com/myapp:v1.4.2",
    "hints": [
      "Write:\ndocker tag myapp:latest registry.example.com/myapp:v1.4.2\ndocker push registry.example.com/myapp:v1.4.2"
    ],
    "testCases": [
      {
        "id": "cloud-27-tc-1",
        "description": "Verifies correct cloud configuration for Image Tagging & Semantic Versioning",
        "testFn": "code.includes('docker tag')"
      }
    ]
  },
  {
    "id": "cloud-28-container-vulnerability-scanni",
    "title": "28. Container Vulnerability Scanning (Trivy)",
    "slug": "lesson-28-container-vulnerability-scanni",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Audit images for critical Common Vulnerabilities and Exposures (CVEs).",
    "concepts": [
      "Container Vulnerability Scanning (Trivy)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Container Vulnerability Scanning (Trivy) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Container Vulnerability Scanning (Trivy)\n\nAudit images for critical Common Vulnerabilities and Exposures (CVEs).\n\n```yaml\ntrivy image --severity HIGH,CRITICAL nginx:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Container Vulnerability Scanning (Trivy)",
      "code": "trivy image --severity HIGH,CRITICAL nginx:alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Container Vulnerability Scanning (Trivy).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Vulnerability Scanning (Trivy).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Container Vulnerability Scanning (Trivy)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "trivy image --severity HIGH,CRITICAL nginx:alpine",
    "hints": [
      "Write:\ntrivy image --severity HIGH,CRITICAL nginx:alpine"
    ],
    "testCases": [
      {
        "id": "cloud-28-tc-1",
        "description": "Verifies correct cloud configuration for Container Vulnerability Scanning (Trivy)",
        "testFn": "code.includes('trivy image')"
      }
    ]
  },
  {
    "id": "cloud-29-docker-buildx-multi-architectu",
    "title": "29. Docker Buildx & Multi-Architecture Builds",
    "slug": "lesson-29-docker-buildx-multi-architectu",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Build universal images targeting amd64 and arm64 architectures with QEMU/BuildKit.",
    "concepts": [
      "Docker Buildx & Multi-Architecture Builds",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Buildx & Multi-Architecture Builds standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Buildx & Multi-Architecture Builds\n\nBuild universal images targeting amd64 and arm64 architectures with QEMU/BuildKit.\n\n```yaml\ndocker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest --push .\n```",
    "workedExample": {
      "title": "Worked Example: Docker Buildx & Multi-Architecture Builds",
      "code": "docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest --push .",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Buildx & Multi-Architecture Builds.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Buildx & Multi-Architecture Builds.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Buildx & Multi-Architecture Builds\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest --push .",
    "hints": [
      "Write:\ndocker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest --push ."
    ],
    "testCases": [
      {
        "id": "cloud-29-tc-1",
        "description": "Verifies correct cloud configuration for Docker Buildx & Multi-Architecture Builds",
        "testFn": "code.includes('buildx build --platform')"
      }
    ]
  },
  {
    "id": "cloud-30-docker-system-pruning-disk-hyg",
    "title": "30. Docker System Pruning & Disk Hygiene",
    "slug": "lesson-30-docker-system-pruning-disk-hyg",
    "language": "cloud",
    "category": "Module 2: Docker Engine, Images & Multi-Stage Builds",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reclaim disk space by clearing orphaned build cache layers and dangling images.",
    "concepts": [
      "Docker System Pruning & Disk Hygiene",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker System Pruning & Disk Hygiene standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker System Pruning & Disk Hygiene\n\nReclaim disk space by clearing orphaned build cache layers and dangling images.\n\n```yaml\ndocker system prune -af --volumes\n```",
    "workedExample": {
      "title": "Worked Example: Docker System Pruning & Disk Hygiene",
      "code": "docker system prune -af --volumes",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker System Pruning & Disk Hygiene.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker System Pruning & Disk Hygiene.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker System Pruning & Disk Hygiene\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker system prune -af --volumes",
    "hints": [
      "Write:\ndocker system prune -af --volumes"
    ],
    "testCases": [
      {
        "id": "cloud-30-tc-1",
        "description": "Verifies correct cloud configuration for Docker System Pruning & Disk Hygiene",
        "testFn": "code.includes('docker system prune')"
      }
    ]
  },
  {
    "id": "cloud-31-docker-bridge-network",
    "title": "31. Docker Bridge Network",
    "slug": "lesson-31-docker-bridge-network",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Default virtual bridge (docker0) providing NAT outbound access and IP addressing.",
    "concepts": [
      "Docker Bridge Network",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Bridge Network standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Bridge Network\n\nDefault virtual bridge (docker0) providing NAT outbound access and IP addressing.\n\n```yaml\ndocker network create --driver bridge my-bridge\ndocker network ls\n```",
    "workedExample": {
      "title": "Worked Example: Docker Bridge Network",
      "code": "docker network create --driver bridge my-bridge\ndocker network ls",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Bridge Network.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Bridge Network.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Bridge Network\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker network create --driver bridge my-bridge\ndocker network ls",
    "hints": [
      "Write:\ndocker network create --driver bridge my-bridge\ndocker network ls"
    ],
    "testCases": [
      {
        "id": "cloud-31-tc-1",
        "description": "Verifies correct cloud configuration for Docker Bridge Network",
        "testFn": "code.includes('docker network create')"
      }
    ]
  },
  {
    "id": "cloud-32-host-none-network-drivers",
    "title": "32. Host & None Network Drivers",
    "slug": "lesson-32-host-none-network-drivers",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Attach container directly to host network stack or completely isolate network access.",
    "concepts": [
      "Host & None Network Drivers",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Host & None Network Drivers standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Host & None Network Drivers\n\nAttach container directly to host network stack or completely isolate network access.\n\n```yaml\ndocker run --network host nginx:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Host & None Network Drivers",
      "code": "docker run --network host nginx:alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Host & None Network Drivers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Host & None Network Drivers.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Host & None Network Drivers\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run --network host nginx:alpine",
    "hints": [
      "Write:\ndocker run --network host nginx:alpine"
    ],
    "testCases": [
      {
        "id": "cloud-32-tc-1",
        "description": "Verifies correct cloud configuration for Host & None Network Drivers",
        "testFn": "code.includes('--network host')"
      }
    ]
  },
  {
    "id": "cloud-33-inter-container-dns-service-di",
    "title": "33. Inter-Container DNS Service Discovery",
    "slug": "lesson-33-inter-container-dns-service-di",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "User-defined bridge networks resolve container names automatically via embedded DNS.",
    "concepts": [
      "Inter-Container DNS Service Discovery",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Inter-Container DNS Service Discovery standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Inter-Container DNS Service Discovery\n\nUser-defined bridge networks resolve container names automatically via embedded DNS.\n\n```yaml\ndocker run -d --name db --network app-net postgres:alpine\ndocker run -it --network app-net alpine ping db\n```",
    "workedExample": {
      "title": "Worked Example: Inter-Container DNS Service Discovery",
      "code": "docker run -d --name db --network app-net postgres:alpine\ndocker run -it --network app-net alpine ping db",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Inter-Container DNS Service Discovery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inter-Container DNS Service Discovery.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Inter-Container DNS Service Discovery\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run -d --name db --network app-net postgres:alpine\ndocker run -it --network app-net alpine ping db",
    "hints": [
      "Write:\ndocker run -d --name db --network app-net postgres:alpine\ndocker run -it --network app-net alpine ping db"
    ],
    "testCases": [
      {
        "id": "cloud-33-tc-1",
        "description": "Verifies correct cloud configuration for Inter-Container DNS Service Discovery",
        "testFn": "code.includes('--network app-net')"
      }
    ]
  },
  {
    "id": "cloud-34-port-publishing-p-vs-p",
    "title": "34. Port Publishing (-p vs -P)",
    "slug": "lesson-34-port-publishing-p-vs-p",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Forward host TCP ports to container listener ports.",
    "concepts": [
      "Port Publishing (-p vs -P)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Port Publishing (-p vs -P) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Port Publishing (-p vs -P)\n\nForward host TCP ports to container listener ports.\n\n```yaml\ndocker run -p 3000:80 -d nginx\n```",
    "workedExample": {
      "title": "Worked Example: Port Publishing (-p vs -P)",
      "code": "docker run -p 3000:80 -d nginx",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Port Publishing (-p vs -P).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Port Publishing (-p vs -P).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Port Publishing (-p vs -P)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run -p 3000:80 -d nginx",
    "hints": [
      "Write:\ndocker run -p 3000:80 -d nginx"
    ],
    "testCases": [
      {
        "id": "cloud-34-tc-1",
        "description": "Verifies correct cloud configuration for Port Publishing (-p vs -P)",
        "testFn": "code.includes('-p 3000:80')"
      }
    ]
  },
  {
    "id": "cloud-35-bind-mounts-for-local-developm",
    "title": "35. Bind Mounts for Local Development",
    "slug": "lesson-35-bind-mounts-for-local-developm",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Mount host machine directory directly into container for instantaneous live reload.",
    "concepts": [
      "Bind Mounts for Local Development",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Bind Mounts for Local Development standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Bind Mounts for Local Development\n\nMount host machine directory directly into container for instantaneous live reload.\n\n```yaml\ndocker run -v $(pwd)/src:/app/src -p 8080:8080 node:18-alpine\n```",
    "workedExample": {
      "title": "Worked Example: Bind Mounts for Local Development",
      "code": "docker run -v $(pwd)/src:/app/src -p 8080:8080 node:18-alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Bind Mounts for Local Development.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bind Mounts for Local Development.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Bind Mounts for Local Development\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run -v $(pwd)/src:/app/src -p 8080:8080 node:18-alpine",
    "hints": [
      "Write:\ndocker run -v $(pwd)/src:/app/src -p 8080:8080 node:18-alpine"
    ],
    "testCases": [
      {
        "id": "cloud-35-tc-1",
        "description": "Verifies correct cloud configuration for Bind Mounts for Local Development",
        "testFn": "code.includes('-v $(pwd)/src:/app/src')"
      }
    ]
  },
  {
    "id": "cloud-36-named-volumes-for-persistent-s",
    "title": "36. Named Volumes for Persistent Storage",
    "slug": "lesson-36-named-volumes-for-persistent-s",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Managed storage volumes decouple persistent data from container lifecycle.",
    "concepts": [
      "Named Volumes for Persistent Storage",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Named Volumes for Persistent Storage standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Named Volumes for Persistent Storage\n\nManaged storage volumes decouple persistent data from container lifecycle.\n\n```yaml\ndocker volume create pg_data\ndocker run -v pg_data:/var/lib/postgresql/data postgres:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Named Volumes for Persistent Storage",
      "code": "docker volume create pg_data\ndocker run -v pg_data:/var/lib/postgresql/data postgres:alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Named Volumes for Persistent Storage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Named Volumes for Persistent Storage.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Named Volumes for Persistent Storage\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker volume create pg_data\ndocker run -v pg_data:/var/lib/postgresql/data postgres:alpine",
    "hints": [
      "Write:\ndocker volume create pg_data\ndocker run -v pg_data:/var/lib/postgresql/data postgres:alpine"
    ],
    "testCases": [
      {
        "id": "cloud-36-tc-1",
        "description": "Verifies correct cloud configuration for Named Volumes for Persistent Storage",
        "testFn": "code.includes('docker volume create')"
      }
    ]
  },
  {
    "id": "cloud-37-tmpfs-mounts-for-in-memory-eph",
    "title": "37. tmpfs Mounts for In-Memory Ephemeral Storage",
    "slug": "lesson-37-tmpfs-mounts-for-in-memory-eph",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Mount memory-backed temporary storage for sensitive cryptographic keys.",
    "concepts": [
      "tmpfs Mounts for In-Memory Ephemeral Storage",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: tmpfs Mounts for In-Memory Ephemeral Storage standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### tmpfs Mounts for In-Memory Ephemeral Storage\n\nMount memory-backed temporary storage for sensitive cryptographic keys.\n\n```yaml\ndocker run --tmpfs /run:rw,noexec,nosuid alpine\n```",
    "workedExample": {
      "title": "Worked Example: tmpfs Mounts for In-Memory Ephemeral Storage",
      "code": "docker run --tmpfs /run:rw,noexec,nosuid alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for tmpfs Mounts for In-Memory Ephemeral Storage.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of tmpfs Mounts for In-Memory Ephemeral Storage.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for tmpfs Mounts for In-Memory Ephemeral Storage\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker run --tmpfs /run:rw,noexec,nosuid alpine",
    "hints": [
      "Write:\ndocker run --tmpfs /run:rw,noexec,nosuid alpine"
    ],
    "testCases": [
      {
        "id": "cloud-37-tc-1",
        "description": "Verifies correct cloud configuration for tmpfs Mounts for In-Memory Ephemeral Storage",
        "testFn": "code.includes('--tmpfs')"
      }
    ]
  },
  {
    "id": "cloud-38-introduction-to-docker-compose",
    "title": "38. Introduction to Docker Compose",
    "slug": "lesson-38-introduction-to-docker-compose",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Define multi-container microservice stacks in a declarative docker-compose.yml file.",
    "concepts": [
      "Introduction to Docker Compose",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Introduction to Docker Compose standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Introduction to Docker Compose\n\nDefine multi-container microservice stacks in a declarative docker-compose.yml file.\n\n```yaml\nversion: \"3.8\"\nservices:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"\n```",
    "workedExample": {
      "title": "Worked Example: Introduction to Docker Compose",
      "code": "version: \"3.8\"\nservices:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Introduction to Docker Compose.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Introduction to Docker Compose.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Introduction to Docker Compose\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "version: \"3.8\"\nservices:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"",
    "hints": [
      "Write:\nversion: \"3.8\"\nservices:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\""
    ],
    "testCases": [
      {
        "id": "cloud-38-tc-1",
        "description": "Verifies correct cloud configuration for Introduction to Docker Compose",
        "testFn": "code.includes('services:') && code.includes('image: nginx')"
      }
    ]
  },
  {
    "id": "cloud-39-docker-compose-services-depend",
    "title": "39. Docker Compose Services & Dependencies (depends_on)",
    "slug": "lesson-39-docker-compose-services-depend",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Order service startup sequences and connect multi-tier architectures.",
    "concepts": [
      "Docker Compose Services & Dependencies (depends_on)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Compose Services & Dependencies (depends_on) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Compose Services & Dependencies (depends_on)\n\nOrder service startup sequences and connect multi-tier architectures.\n\n```yaml\nservices:\n  app:\n    image: myapp\n    depends_on:\n      - db\n  db:\n    image: postgres:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Docker Compose Services & Dependencies (depends_on)",
      "code": "services:\n  app:\n    image: myapp\n    depends_on:\n      - db\n  db:\n    image: postgres:alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Compose Services & Dependencies (depends_on).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Compose Services & Dependencies (depends_on).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Compose Services & Dependencies (depends_on)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "services:\n  app:\n    image: myapp\n    depends_on:\n      - db\n  db:\n    image: postgres:alpine",
    "hints": [
      "Write:\nservices:\n  app:\n    image: myapp\n    depends_on:\n      - db\n  db:\n    image: postgres:alpine"
    ],
    "testCases": [
      {
        "id": "cloud-39-tc-1",
        "description": "Verifies correct cloud configuration for Docker Compose Services & Dependencies (depends_on)",
        "testFn": "code.includes('depends_on:')"
      }
    ]
  },
  {
    "id": "cloud-40-docker-compose-environment-fil",
    "title": "40. Docker Compose Environment Files (.env)",
    "slug": "lesson-40-docker-compose-environment-fil",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inject external configurations and secrets into Compose services securely.",
    "concepts": [
      "Docker Compose Environment Files (.env)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Compose Environment Files (.env) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Compose Environment Files (.env)\n\nInject external configurations and secrets into Compose services securely.\n\n```yaml\nservices:\n  backend:\n    image: api\n    env_file:\n      - .env\n```",
    "workedExample": {
      "title": "Worked Example: Docker Compose Environment Files (.env)",
      "code": "services:\n  backend:\n    image: api\n    env_file:\n      - .env",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Compose Environment Files (.env).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Compose Environment Files (.env).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Compose Environment Files (.env)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "services:\n  backend:\n    image: api\n    env_file:\n      - .env",
    "hints": [
      "Write:\nservices:\n  backend:\n    image: api\n    env_file:\n      - .env"
    ],
    "testCases": [
      {
        "id": "cloud-40-tc-1",
        "description": "Verifies correct cloud configuration for Docker Compose Environment Files (.env)",
        "testFn": "code.includes('env_file:')"
      }
    ]
  },
  {
    "id": "cloud-41-docker-compose-health-checks",
    "title": "41. Docker Compose Health Checks",
    "slug": "lesson-41-docker-compose-health-checks",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Configure automatic health polling before downstream services start traffic forwarding.",
    "concepts": [
      "Docker Compose Health Checks",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Compose Health Checks standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Compose Health Checks\n\nConfigure automatic health polling before downstream services start traffic forwarding.\n\n```yaml\nhealthcheck:\n  test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8080/health\"]\n  interval: 30s\n  timeout: 5s\n  retries: 3\n```",
    "workedExample": {
      "title": "Worked Example: Docker Compose Health Checks",
      "code": "healthcheck:\n  test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8080/health\"]\n  interval: 30s\n  timeout: 5s\n  retries: 3",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Compose Health Checks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Compose Health Checks.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Compose Health Checks\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "healthcheck:\n  test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8080/health\"]\n  interval: 30s\n  timeout: 5s\n  retries: 3",
    "hints": [
      "Write:\nhealthcheck:\n  test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8080/health\"]\n  interval: 30s\n  timeout: 5s\n  retries: 3"
    ],
    "testCases": [
      {
        "id": "cloud-41-tc-1",
        "description": "Verifies correct cloud configuration for Docker Compose Health Checks",
        "testFn": "code.includes('healthcheck:')"
      }
    ]
  },
  {
    "id": "cloud-42-docker-compose-volume-sharing",
    "title": "42. Docker Compose Volume Sharing",
    "slug": "lesson-42-docker-compose-volume-sharing",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Share persistent named volumes across multiple service containers.",
    "concepts": [
      "Docker Compose Volume Sharing",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Docker Compose Volume Sharing standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Docker Compose Volume Sharing\n\nShare persistent named volumes across multiple service containers.\n\n```yaml\nvolumes:\n  shared-assets:\nservices:\n  frontend:\n    volumes:\n      - shared-assets:/assets\n```",
    "workedExample": {
      "title": "Worked Example: Docker Compose Volume Sharing",
      "code": "volumes:\n  shared-assets:\nservices:\n  frontend:\n    volumes:\n      - shared-assets:/assets",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Docker Compose Volume Sharing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Docker Compose Volume Sharing.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Docker Compose Volume Sharing\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "volumes:\n  shared-assets:\nservices:\n  frontend:\n    volumes:\n      - shared-assets:/assets",
    "hints": [
      "Write:\nvolumes:\n  shared-assets:\nservices:\n  frontend:\n    volumes:\n      - shared-assets:/assets"
    ],
    "testCases": [
      {
        "id": "cloud-42-tc-1",
        "description": "Verifies correct cloud configuration for Docker Compose Volume Sharing",
        "testFn": "code.includes('shared-assets:/assets')"
      }
    ]
  },
  {
    "id": "cloud-43-docker-compose-up-down-logs",
    "title": "43. docker compose up, down, & logs",
    "slug": "lesson-43-docker-compose-up-down-logs",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Orchestrate local development clusters with single CLI commands.",
    "concepts": [
      "docker compose up, down, & logs",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: docker compose up, down, & logs standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### docker compose up, down, & logs\n\nOrchestrate local development clusters with single CLI commands.\n\n```yaml\ndocker compose up -d\ndocker compose logs -f\ndocker compose down\n```",
    "workedExample": {
      "title": "Worked Example: docker compose up, down, & logs",
      "code": "docker compose up -d\ndocker compose logs -f\ndocker compose down",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for docker compose up, down, & logs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of docker compose up, down, & logs.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for docker compose up, down, & logs\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "docker compose up -d\ndocker compose logs -f\ndocker compose down",
    "hints": [
      "Write:\ndocker compose up -d\ndocker compose logs -f\ndocker compose down"
    ],
    "testCases": [
      {
        "id": "cloud-43-tc-1",
        "description": "Verifies correct cloud configuration for docker compose up, down, & logs",
        "testFn": "code.includes('docker compose up')"
      }
    ]
  },
  {
    "id": "cloud-44-resource-limits-in-compose-cpu",
    "title": "44. Resource Limits in Compose (cpus, memory)",
    "slug": "lesson-44-resource-limits-in-compose-cpu",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent runaway containers from exhausting workstation memory or CPU.",
    "concepts": [
      "Resource Limits in Compose (cpus, memory)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Resource Limits in Compose (cpus, memory) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Resource Limits in Compose (cpus, memory)\n\nPrevent runaway containers from exhausting workstation memory or CPU.\n\n```yaml\ndeploy:\n  resources:\n    limits:\n      cpus: \"0.50\"\n      memory: 512M\n```",
    "workedExample": {
      "title": "Worked Example: Resource Limits in Compose (cpus, memory)",
      "code": "deploy:\n  resources:\n    limits:\n      cpus: \"0.50\"\n      memory: 512M",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Resource Limits in Compose (cpus, memory).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resource Limits in Compose (cpus, memory).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Resource Limits in Compose (cpus, memory)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "deploy:\n  resources:\n    limits:\n      cpus: \"0.50\"\n      memory: 512M",
    "hints": [
      "Write:\ndeploy:\n  resources:\n    limits:\n      cpus: \"0.50\"\n      memory: 512M"
    ],
    "testCases": [
      {
        "id": "cloud-44-tc-1",
        "description": "Verifies correct cloud configuration for Resource Limits in Compose (cpus, memory)",
        "testFn": "code.includes('limits:') && code.includes('memory: 512M')"
      }
    ]
  },
  {
    "id": "cloud-45-transitioning-from-compose-to-",
    "title": "45. Transitioning from Compose to Kubernetes",
    "slug": "lesson-45-transitioning-from-compose-to-",
    "language": "cloud",
    "category": "Module 3: Container Networking, Storage & Docker Compose",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Analyze trade-offs: single-host developer orchestration vs distributed cloud cluster.",
    "concepts": [
      "Transitioning from Compose to Kubernetes",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Transitioning from Compose to Kubernetes standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Transitioning from Compose to Kubernetes\n\nAnalyze trade-offs: single-host developer orchestration vs distributed cloud cluster.\n\n```yaml\necho \"Kompose can translate docker-compose.yml directly into Kubernetes manifests\"\n```",
    "workedExample": {
      "title": "Worked Example: Transitioning from Compose to Kubernetes",
      "code": "echo \"Kompose can translate docker-compose.yml directly into Kubernetes manifests\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Transitioning from Compose to Kubernetes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Transitioning from Compose to Kubernetes.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Transitioning from Compose to Kubernetes\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"Kompose can translate docker-compose.yml directly into Kubernetes manifests\"",
    "hints": [
      "Write:\necho \"Kompose can translate docker-compose.yml directly into Kubernetes manifests\""
    ],
    "testCases": [
      {
        "id": "cloud-45-tc-1",
        "description": "Verifies correct cloud configuration for Transitioning from Compose to Kubernetes",
        "testFn": "code.includes('Kompose')"
      }
    ]
  },
  {
    "id": "cloud-46-kubernetes-architecture-overvi",
    "title": "46. Kubernetes Architecture Overview",
    "slug": "lesson-46-kubernetes-architecture-overvi",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decoupled Master/Control Plane vs Worker Nodes running container workloads.",
    "concepts": [
      "Kubernetes Architecture Overview",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Kubernetes Architecture Overview standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Kubernetes Architecture Overview\n\nDecoupled Master/Control Plane vs Worker Nodes running container workloads.\n\n```yaml\nkubectl cluster-info\n```",
    "workedExample": {
      "title": "Worked Example: Kubernetes Architecture Overview",
      "code": "kubectl cluster-info",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Kubernetes Architecture Overview.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kubernetes Architecture Overview.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Kubernetes Architecture Overview\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl cluster-info",
    "hints": [
      "Write:\nkubectl cluster-info"
    ],
    "testCases": [
      {
        "id": "cloud-46-tc-1",
        "description": "Verifies correct cloud configuration for Kubernetes Architecture Overview",
        "testFn": "code.includes('kubectl cluster-info')"
      }
    ]
  },
  {
    "id": "cloud-47-kube-apiserver-rest-gateway",
    "title": "47. kube-apiserver: REST Gateway",
    "slug": "lesson-47-kube-apiserver-rest-gateway",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The central entrypoint validating and configuring data for Pods, Services, and Controllers.",
    "concepts": [
      "kube-apiserver: REST Gateway",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: kube-apiserver: REST Gateway standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### kube-apiserver: REST Gateway\n\nThe central entrypoint validating and configuring data for Pods, Services, and Controllers.\n\n```yaml\nkubectl get --raw /healthz\nkubectl api-resources\n```",
    "workedExample": {
      "title": "Worked Example: kube-apiserver: REST Gateway",
      "code": "kubectl get --raw /healthz\nkubectl api-resources",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for kube-apiserver: REST Gateway.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of kube-apiserver: REST Gateway.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for kube-apiserver: REST Gateway\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get --raw /healthz\nkubectl api-resources",
    "hints": [
      "Write:\nkubectl get --raw /healthz\nkubectl api-resources"
    ],
    "testCases": [
      {
        "id": "cloud-47-tc-1",
        "description": "Verifies correct cloud configuration for kube-apiserver: REST Gateway",
        "testFn": "code.includes('kubectl api-resources')"
      }
    ]
  },
  {
    "id": "cloud-48-etcd-distributed-key-value-sto",
    "title": "48. etcd: Distributed Key-Value Store",
    "slug": "lesson-48-etcd-distributed-key-value-sto",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Highly available, strongly consistent Raft consensus store backing the cluster state.",
    "concepts": [
      "etcd: Distributed Key-Value Store",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: etcd: Distributed Key-Value Store standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### etcd: Distributed Key-Value Store\n\nHighly available, strongly consistent Raft consensus store backing the cluster state.\n\n```yaml\netcdctl get /registry/pods --prefix --keys-only\n```",
    "workedExample": {
      "title": "Worked Example: etcd: Distributed Key-Value Store",
      "code": "etcdctl get /registry/pods --prefix --keys-only",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for etcd: Distributed Key-Value Store.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of etcd: Distributed Key-Value Store.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for etcd: Distributed Key-Value Store\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "etcdctl get /registry/pods --prefix --keys-only",
    "hints": [
      "Write:\netcdctl get /registry/pods --prefix --keys-only"
    ],
    "testCases": [
      {
        "id": "cloud-48-tc-1",
        "description": "Verifies correct cloud configuration for etcd: Distributed Key-Value Store",
        "testFn": "code.includes('etcdctl')"
      }
    ]
  },
  {
    "id": "cloud-49-kube-scheduler-workload-placem",
    "title": "49. kube-scheduler: Workload Placement",
    "slug": "lesson-49-kube-scheduler-workload-placem",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assigns unscheduled Pods to optimal Worker Nodes based on resources, affinities, and taints.",
    "concepts": [
      "kube-scheduler: Workload Placement",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: kube-scheduler: Workload Placement standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### kube-scheduler: Workload Placement\n\nAssigns unscheduled Pods to optimal Worker Nodes based on resources, affinities, and taints.\n\n```yaml\nkubectl describe pod my-pod | grep \"Events:\"\n```",
    "workedExample": {
      "title": "Worked Example: kube-scheduler: Workload Placement",
      "code": "kubectl describe pod my-pod | grep \"Events:\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for kube-scheduler: Workload Placement.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of kube-scheduler: Workload Placement.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for kube-scheduler: Workload Placement\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl describe pod my-pod | grep \"Events:\"",
    "hints": [
      "Write:\nkubectl describe pod my-pod | grep \"Events:\""
    ],
    "testCases": [
      {
        "id": "cloud-49-tc-1",
        "description": "Verifies correct cloud configuration for kube-scheduler: Workload Placement",
        "testFn": "code.includes('kubectl describe pod')"
      }
    ]
  },
  {
    "id": "cloud-50-kube-controller-manager-reconc",
    "title": "50. kube-controller-manager: Reconciliation Loops",
    "slug": "lesson-50-kube-controller-manager-reconc",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Continuously reconciles current cluster state towards user-declared desired state.",
    "concepts": [
      "kube-controller-manager: Reconciliation Loops",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: kube-controller-manager: Reconciliation Loops standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### kube-controller-manager: Reconciliation Loops\n\nContinuously reconciles current cluster state towards user-declared desired state.\n\n```yaml\nkubectl get componentstatuses\n```",
    "workedExample": {
      "title": "Worked Example: kube-controller-manager: Reconciliation Loops",
      "code": "kubectl get componentstatuses",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for kube-controller-manager: Reconciliation Loops.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of kube-controller-manager: Reconciliation Loops.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for kube-controller-manager: Reconciliation Loops\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get componentstatuses",
    "hints": [
      "Write:\nkubectl get componentstatuses"
    ],
    "testCases": [
      {
        "id": "cloud-50-tc-1",
        "description": "Verifies correct cloud configuration for kube-controller-manager: Reconciliation Loops",
        "testFn": "code.includes('kubectl get componentstatuses')"
      }
    ]
  },
  {
    "id": "cloud-51-kubelet-worker-node-agent",
    "title": "51. Kubelet: Worker Node Agent",
    "slug": "lesson-51-kubelet-worker-node-agent",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Node-level agent registering the node and ensuring containers described in PodSpecs are running healthy.",
    "concepts": [
      "Kubelet: Worker Node Agent",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Kubelet: Worker Node Agent standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Kubelet: Worker Node Agent\n\nNode-level agent registering the node and ensuring containers described in PodSpecs are running healthy.\n\n```yaml\nsystemctl status kubelet\n```",
    "workedExample": {
      "title": "Worked Example: Kubelet: Worker Node Agent",
      "code": "systemctl status kubelet",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Kubelet: Worker Node Agent.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kubelet: Worker Node Agent.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Kubelet: Worker Node Agent\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "systemctl status kubelet",
    "hints": [
      "Write:\nsystemctl status kubelet"
    ],
    "testCases": [
      {
        "id": "cloud-51-tc-1",
        "description": "Verifies correct cloud configuration for Kubelet: Worker Node Agent",
        "testFn": "code.includes('status kubelet')"
      }
    ]
  },
  {
    "id": "cloud-52-kube-proxy-cluster-packet-forw",
    "title": "52. kube-proxy: Cluster Packet Forwarding",
    "slug": "lesson-52-kube-proxy-cluster-packet-forw",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Maintains network packet routing and iptables/IPVS rules across cluster nodes.",
    "concepts": [
      "kube-proxy: Cluster Packet Forwarding",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: kube-proxy: Cluster Packet Forwarding standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### kube-proxy: Cluster Packet Forwarding\n\nMaintains network packet routing and iptables/IPVS rules across cluster nodes.\n\n```yaml\nkubectl get daemonset -n kube-system kube-proxy\n```",
    "workedExample": {
      "title": "Worked Example: kube-proxy: Cluster Packet Forwarding",
      "code": "kubectl get daemonset -n kube-system kube-proxy",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for kube-proxy: Cluster Packet Forwarding.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of kube-proxy: Cluster Packet Forwarding.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for kube-proxy: Cluster Packet Forwarding\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get daemonset -n kube-system kube-proxy",
    "hints": [
      "Write:\nkubectl get daemonset -n kube-system kube-proxy"
    ],
    "testCases": [
      {
        "id": "cloud-52-tc-1",
        "description": "Verifies correct cloud configuration for kube-proxy: Cluster Packet Forwarding",
        "testFn": "code.includes('kube-proxy')"
      }
    ]
  },
  {
    "id": "cloud-53-container-runtime-interface-cr",
    "title": "53. Container Runtime Interface (CRI)",
    "slug": "lesson-53-container-runtime-interface-cr",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pluggable container runtime interface implemented by containerd and CRI-O.",
    "concepts": [
      "Container Runtime Interface (CRI)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Container Runtime Interface (CRI) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Container Runtime Interface (CRI)\n\nPluggable container runtime interface implemented by containerd and CRI-O.\n\n```yaml\ncrictl info\n```",
    "workedExample": {
      "title": "Worked Example: Container Runtime Interface (CRI)",
      "code": "crictl info",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Container Runtime Interface (CRI).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Runtime Interface (CRI).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Container Runtime Interface (CRI)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "crictl info",
    "hints": [
      "Write:\ncrictl info"
    ],
    "testCases": [
      {
        "id": "cloud-53-tc-1",
        "description": "Verifies correct cloud configuration for Container Runtime Interface (CRI)",
        "testFn": "code.includes('crictl info')"
      }
    ]
  },
  {
    "id": "cloud-54-container-network-interface-cn",
    "title": "54. Container Network Interface (CNI)",
    "slug": "lesson-54-container-network-interface-cn",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pluggable network plugins (Calico, Cilium, Flannel) managing cross-node Pod networking.",
    "concepts": [
      "Container Network Interface (CNI)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Container Network Interface (CNI) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Container Network Interface (CNI)\n\nPluggable network plugins (Calico, Cilium, Flannel) managing cross-node Pod networking.\n\n```yaml\nkubectl get pods -n kube-system -l k8s-app=calico-node\n```",
    "workedExample": {
      "title": "Worked Example: Container Network Interface (CNI)",
      "code": "kubectl get pods -n kube-system -l k8s-app=calico-node",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Container Network Interface (CNI).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Network Interface (CNI).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Container Network Interface (CNI)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pods -n kube-system -l k8s-app=calico-node",
    "hints": [
      "Write:\nkubectl get pods -n kube-system -l k8s-app=calico-node"
    ],
    "testCases": [
      {
        "id": "cloud-54-tc-1",
        "description": "Verifies correct cloud configuration for Container Network Interface (CNI)",
        "testFn": "code.includes('calico-node')"
      }
    ]
  },
  {
    "id": "cloud-55-container-storage-interface-cs",
    "title": "55. Container Storage Interface (CSI)",
    "slug": "lesson-55-container-storage-interface-cs",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Vendor-neutral interface allowing third-party storage providers to expose block/file volumes.",
    "concepts": [
      "Container Storage Interface (CSI)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Container Storage Interface (CSI) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Container Storage Interface (CSI)\n\nVendor-neutral interface allowing third-party storage providers to expose block/file volumes.\n\n```yaml\nkubectl get csidrivers\n```",
    "workedExample": {
      "title": "Worked Example: Container Storage Interface (CSI)",
      "code": "kubectl get csidrivers",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Container Storage Interface (CSI).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Container Storage Interface (CSI).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Container Storage Interface (CSI)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get csidrivers",
    "hints": [
      "Write:\nkubectl get csidrivers"
    ],
    "testCases": [
      {
        "id": "cloud-55-tc-1",
        "description": "Verifies correct cloud configuration for Container Storage Interface (CSI)",
        "testFn": "code.includes('kubectl get csidrivers')"
      }
    ]
  },
  {
    "id": "cloud-56-coredns-in-cluster-dns",
    "title": "56. CoreDNS: In-Cluster DNS",
    "slug": "lesson-56-coredns-in-cluster-dns",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Internal cluster name resolution for services and pods: <svc>.<ns>.svc.cluster.local.",
    "concepts": [
      "CoreDNS: In-Cluster DNS",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: CoreDNS: In-Cluster DNS standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### CoreDNS: In-Cluster DNS\n\nInternal cluster name resolution for services and pods: <svc>.<ns>.svc.cluster.local.\n\n```yaml\nkubectl get pods -n kube-system -l k8s-app=kube-dns\n```",
    "workedExample": {
      "title": "Worked Example: CoreDNS: In-Cluster DNS",
      "code": "kubectl get pods -n kube-system -l k8s-app=kube-dns",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for CoreDNS: In-Cluster DNS.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CoreDNS: In-Cluster DNS.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for CoreDNS: In-Cluster DNS\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pods -n kube-system -l k8s-app=kube-dns",
    "hints": [
      "Write:\nkubectl get pods -n kube-system -l k8s-app=kube-dns"
    ],
    "testCases": [
      {
        "id": "cloud-56-tc-1",
        "description": "Verifies correct cloud configuration for CoreDNS: In-Cluster DNS",
        "testFn": "code.includes('kube-dns')"
      }
    ]
  },
  {
    "id": "cloud-57-node-architecture-heartbeats",
    "title": "57. Node Architecture & Heartbeats",
    "slug": "lesson-57-node-architecture-heartbeats",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Node lifecycle, heartbeats, status conditions (Ready, DiskPressure, MemoryPressure).",
    "concepts": [
      "Node Architecture & Heartbeats",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Node Architecture & Heartbeats standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Node Architecture & Heartbeats\n\nNode lifecycle, heartbeats, status conditions (Ready, DiskPressure, MemoryPressure).\n\n```yaml\nkubectl get nodes -o wide\nkubectl describe node worker-1\n```",
    "workedExample": {
      "title": "Worked Example: Node Architecture & Heartbeats",
      "code": "kubectl get nodes -o wide\nkubectl describe node worker-1",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Node Architecture & Heartbeats.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Node Architecture & Heartbeats.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Node Architecture & Heartbeats\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get nodes -o wide\nkubectl describe node worker-1",
    "hints": [
      "Write:\nkubectl get nodes -o wide\nkubectl describe node worker-1"
    ],
    "testCases": [
      {
        "id": "cloud-57-tc-1",
        "description": "Verifies correct cloud configuration for Node Architecture & Heartbeats",
        "testFn": "code.includes('kubectl get nodes')"
      }
    ]
  },
  {
    "id": "cloud-58-static-pods-control-plane-boot",
    "title": "58. Static Pods & Control Plane Bootstrapping",
    "slug": "lesson-58-static-pods-control-plane-boot",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pods managed directly by the Kubelet on a specific node without API server supervision.",
    "concepts": [
      "Static Pods & Control Plane Bootstrapping",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Static Pods & Control Plane Bootstrapping standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Static Pods & Control Plane Bootstrapping\n\nPods managed directly by the Kubelet on a specific node without API server supervision.\n\n```yaml\nls -l /etc/kubernetes/manifests/\n```",
    "workedExample": {
      "title": "Worked Example: Static Pods & Control Plane Bootstrapping",
      "code": "ls -l /etc/kubernetes/manifests/",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Static Pods & Control Plane Bootstrapping.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Static Pods & Control Plane Bootstrapping.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Static Pods & Control Plane Bootstrapping\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "ls -l /etc/kubernetes/manifests/",
    "hints": [
      "Write:\nls -l /etc/kubernetes/manifests/"
    ],
    "testCases": [
      {
        "id": "cloud-58-tc-1",
        "description": "Verifies correct cloud configuration for Static Pods & Control Plane Bootstrapping",
        "testFn": "code.includes('/etc/kubernetes/manifests/')"
      }
    ]
  },
  {
    "id": "cloud-59-cloud-controller-manager-ccm",
    "title": "59. Cloud Controller Manager (CCM)",
    "slug": "lesson-59-cloud-controller-manager-ccm",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Integrates cloud provider APIs for load balancers, node routing, and persistent disks.",
    "concepts": [
      "Cloud Controller Manager (CCM)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Cloud Controller Manager (CCM) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Cloud Controller Manager (CCM)\n\nIntegrates cloud provider APIs for load balancers, node routing, and persistent disks.\n\n```yaml\nkubectl get pods -n kube-system -l app=cloud-controller-manager\n```",
    "workedExample": {
      "title": "Worked Example: Cloud Controller Manager (CCM)",
      "code": "kubectl get pods -n kube-system -l app=cloud-controller-manager",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Cloud Controller Manager (CCM).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cloud Controller Manager (CCM).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Cloud Controller Manager (CCM)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pods -n kube-system -l app=cloud-controller-manager",
    "hints": [
      "Write:\nkubectl get pods -n kube-system -l app=cloud-controller-manager"
    ],
    "testCases": [
      {
        "id": "cloud-59-tc-1",
        "description": "Verifies correct cloud configuration for Cloud Controller Manager (CCM)",
        "testFn": "code.includes('cloud-controller-manager')"
      }
    ]
  },
  {
    "id": "cloud-60-setting-up-local-dev-clusters-",
    "title": "60. Setting up Local Dev Clusters (kind & minikube)",
    "slug": "lesson-60-setting-up-local-dev-clusters-",
    "language": "cloud",
    "category": "Module 4: Kubernetes Architecture & Control Plane",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Run full multi-node Kubernetes clusters inside Docker containers for rapid local iteration.",
    "concepts": [
      "Setting up Local Dev Clusters (kind & minikube)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Setting up Local Dev Clusters (kind & minikube) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Setting up Local Dev Clusters (kind & minikube)\n\nRun full multi-node Kubernetes clusters inside Docker containers for rapid local iteration.\n\n```yaml\nkind create cluster --name dev-cluster\nkubectl config current-context\n```",
    "workedExample": {
      "title": "Worked Example: Setting up Local Dev Clusters (kind & minikube)",
      "code": "kind create cluster --name dev-cluster\nkubectl config current-context",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Setting up Local Dev Clusters (kind & minikube).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Setting up Local Dev Clusters (kind & minikube).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Setting up Local Dev Clusters (kind & minikube)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kind create cluster --name dev-cluster\nkubectl config current-context",
    "hints": [
      "Write:\nkind create cluster --name dev-cluster\nkubectl config current-context"
    ],
    "testCases": [
      {
        "id": "cloud-60-tc-1",
        "description": "Verifies correct cloud configuration for Setting up Local Dev Clusters (kind & minikube)",
        "testFn": "code.includes('kind create cluster')"
      }
    ]
  },
  {
    "id": "cloud-61-understanding-the-pod-concept",
    "title": "61. Understanding the Pod Concept",
    "slug": "lesson-61-understanding-the-pod-concept",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Smallest deployable execution unit in Kubernetes containing one or more co-located containers.",
    "concepts": [
      "Understanding the Pod Concept",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Understanding the Pod Concept standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Understanding the Pod Concept\n\nSmallest deployable execution unit in Kubernetes containing one or more co-located containers.\n\n```yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:alpine\n```",
    "workedExample": {
      "title": "Worked Example: Understanding the Pod Concept",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:alpine",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Understanding the Pod Concept.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding the Pod Concept.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Understanding the Pod Concept\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:alpine",
    "hints": [
      "Write:\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:alpine"
    ],
    "testCases": [
      {
        "id": "cloud-61-tc-1",
        "description": "Verifies correct cloud configuration for Understanding the Pod Concept",
        "testFn": "code.includes('kind: Pod') && code.includes('nginx:alpine')"
      }
    ]
  },
  {
    "id": "cloud-62-imperative-vs-declarative-pod-",
    "title": "62. Imperative vs Declarative Pod Management",
    "slug": "lesson-62-imperative-vs-declarative-pod-",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compare rapid kubectl run debugging commands with version-controlled YAML manifests.",
    "concepts": [
      "Imperative vs Declarative Pod Management",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Imperative vs Declarative Pod Management standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Imperative vs Declarative Pod Management\n\nCompare rapid kubectl run debugging commands with version-controlled YAML manifests.\n\n```yaml\nkubectl run web --image=nginx:alpine --port=80\nkubectl apply -f pod.yaml\n```",
    "workedExample": {
      "title": "Worked Example: Imperative vs Declarative Pod Management",
      "code": "kubectl run web --image=nginx:alpine --port=80\nkubectl apply -f pod.yaml",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Imperative vs Declarative Pod Management.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Imperative vs Declarative Pod Management.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Imperative vs Declarative Pod Management\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl run web --image=nginx:alpine --port=80\nkubectl apply -f pod.yaml",
    "hints": [
      "Write:\nkubectl run web --image=nginx:alpine --port=80\nkubectl apply -f pod.yaml"
    ],
    "testCases": [
      {
        "id": "cloud-62-tc-1",
        "description": "Verifies correct cloud configuration for Imperative vs Declarative Pod Management",
        "testFn": "code.includes('kubectl run web')"
      }
    ]
  },
  {
    "id": "cloud-63-multi-container-pods-sidecar-p",
    "title": "63. Multi-Container Pods & Sidecar Pattern",
    "slug": "lesson-63-multi-container-pods-sidecar-p",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Co-located containers sharing localhost network interface and shared volume mounts.",
    "concepts": [
      "Multi-Container Pods & Sidecar Pattern",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Multi-Container Pods & Sidecar Pattern standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Multi-Container Pods & Sidecar Pattern\n\nCo-located containers sharing localhost network interface and shared volume mounts.\n\n```yaml\nspec:\n  containers:\n  - name: app\n    image: my-app\n  - name: log-shipper\n    image: fluentd\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Container Pods & Sidecar Pattern",
      "code": "spec:\n  containers:\n  - name: app\n    image: my-app\n  - name: log-shipper\n    image: fluentd",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Multi-Container Pods & Sidecar Pattern.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multi-Container Pods & Sidecar Pattern.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Multi-Container Pods & Sidecar Pattern\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  containers:\n  - name: app\n    image: my-app\n  - name: log-shipper\n    image: fluentd",
    "hints": [
      "Write:\nspec:\n  containers:\n  - name: app\n    image: my-app\n  - name: log-shipper\n    image: fluentd"
    ],
    "testCases": [
      {
        "id": "cloud-63-tc-1",
        "description": "Verifies correct cloud configuration for Multi-Container Pods & Sidecar Pattern",
        "testFn": "code.includes('log-shipper')"
      }
    ]
  },
  {
    "id": "cloud-64-init-containers",
    "title": "64. Init Containers",
    "slug": "lesson-64-init-containers",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Run specialized initialization scripts to completion before application containers start.",
    "concepts": [
      "Init Containers",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Init Containers standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Init Containers\n\nRun specialized initialization scripts to completion before application containers start.\n\n```yaml\nspec:\n  initContainers:\n  - name: wait-for-db\n    image: busybox\n    command: [\"sh\", \"-c\", \"sleep 5\"]\n```",
    "workedExample": {
      "title": "Worked Example: Init Containers",
      "code": "spec:\n  initContainers:\n  - name: wait-for-db\n    image: busybox\n    command: [\"sh\", \"-c\", \"sleep 5\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Init Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Init Containers.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Init Containers\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  initContainers:\n  - name: wait-for-db\n    image: busybox\n    command: [\"sh\", \"-c\", \"sleep 5\"]",
    "hints": [
      "Write:\nspec:\n  initContainers:\n  - name: wait-for-db\n    image: busybox\n    command: [\"sh\", \"-c\", \"sleep 5\"]"
    ],
    "testCases": [
      {
        "id": "cloud-64-tc-1",
        "description": "Verifies correct cloud configuration for Init Containers",
        "testFn": "code.includes('initContainers:')"
      }
    ]
  },
  {
    "id": "cloud-65-namespaces-for-multi-tenancy-i",
    "title": "65. Namespaces for Multi-Tenancy & Isolation",
    "slug": "lesson-65-namespaces-for-multi-tenancy-i",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Partition cluster resources logically across environments (dev, staging, prod).",
    "concepts": [
      "Namespaces for Multi-Tenancy & Isolation",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Namespaces for Multi-Tenancy & Isolation standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Namespaces for Multi-Tenancy & Isolation\n\nPartition cluster resources logically across environments (dev, staging, prod).\n\n```yaml\nkubectl create namespace staging\nkubectl get namespaces\n```",
    "workedExample": {
      "title": "Worked Example: Namespaces for Multi-Tenancy & Isolation",
      "code": "kubectl create namespace staging\nkubectl get namespaces",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Namespaces for Multi-Tenancy & Isolation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Namespaces for Multi-Tenancy & Isolation.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Namespaces for Multi-Tenancy & Isolation\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl create namespace staging\nkubectl get namespaces",
    "hints": [
      "Write:\nkubectl create namespace staging\nkubectl get namespaces"
    ],
    "testCases": [
      {
        "id": "cloud-65-tc-1",
        "description": "Verifies correct cloud configuration for Namespaces for Multi-Tenancy & Isolation",
        "testFn": "code.includes('kubectl create namespace')"
      }
    ]
  },
  {
    "id": "cloud-66-labels-selectors-the-glue-of-k",
    "title": "66. Labels & Selectors: The Glue of K8s",
    "slug": "lesson-66-labels-selectors-the-glue-of-k",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Key-value tags attached to objects enabling dynamic query grouping and routing.",
    "concepts": [
      "Labels & Selectors: The Glue of K8s",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Labels & Selectors: The Glue of K8s standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Labels & Selectors: The Glue of K8s\n\nKey-value tags attached to objects enabling dynamic query grouping and routing.\n\n```yaml\nmetadata:\n  labels:\n    app: billing\n    environment: production\n```",
    "workedExample": {
      "title": "Worked Example: Labels & Selectors: The Glue of K8s",
      "code": "metadata:\n  labels:\n    app: billing\n    environment: production",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Labels & Selectors: The Glue of K8s.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Labels & Selectors: The Glue of K8s.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Labels & Selectors: The Glue of K8s\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "metadata:\n  labels:\n    app: billing\n    environment: production",
    "hints": [
      "Write:\nmetadata:\n  labels:\n    app: billing\n    environment: production"
    ],
    "testCases": [
      {
        "id": "cloud-66-tc-1",
        "description": "Verifies correct cloud configuration for Labels & Selectors: The Glue of K8s",
        "testFn": "code.includes('labels:') && code.includes('environment: production')"
      }
    ]
  },
  {
    "id": "cloud-67-querying-resources-with-label-",
    "title": "67. Querying Resources with Label Selectors (-l)",
    "slug": "lesson-67-querying-resources-with-label-",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter pods and deployments across the cluster with equality and set-based expressions.",
    "concepts": [
      "Querying Resources with Label Selectors (-l)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Querying Resources with Label Selectors (-l) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Querying Resources with Label Selectors (-l)\n\nFilter pods and deployments across the cluster with equality and set-based expressions.\n\n```yaml\nkubectl get pods -l app=billing,environment=production\n```",
    "workedExample": {
      "title": "Worked Example: Querying Resources with Label Selectors (-l)",
      "code": "kubectl get pods -l app=billing,environment=production",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Querying Resources with Label Selectors (-l).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Querying Resources with Label Selectors (-l).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Querying Resources with Label Selectors (-l)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pods -l app=billing,environment=production",
    "hints": [
      "Write:\nkubectl get pods -l app=billing,environment=production"
    ],
    "testCases": [
      {
        "id": "cloud-67-tc-1",
        "description": "Verifies correct cloud configuration for Querying Resources with Label Selectors (-l)",
        "testFn": "code.includes('kubectl get pods -l')"
      }
    ]
  },
  {
    "id": "cloud-68-annotations-vs-labels",
    "title": "68. Annotations vs Labels",
    "slug": "lesson-68-annotations-vs-labels",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Store non-identifying metadata, build timestamps, and ingress tool configurations.",
    "concepts": [
      "Annotations vs Labels",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Annotations vs Labels standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Annotations vs Labels\n\nStore non-identifying metadata, build timestamps, and ingress tool configurations.\n\n```yaml\nmetadata:\n  annotations:\n    build.version: \"2.1.0\"\n    prometheus.io/scrape: \"true\"\n```",
    "workedExample": {
      "title": "Worked Example: Annotations vs Labels",
      "code": "metadata:\n  annotations:\n    build.version: \"2.1.0\"\n    prometheus.io/scrape: \"true\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Annotations vs Labels.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Annotations vs Labels.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Annotations vs Labels\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "metadata:\n  annotations:\n    build.version: \"2.1.0\"\n    prometheus.io/scrape: \"true\"",
    "hints": [
      "Write:\nmetadata:\n  annotations:\n    build.version: \"2.1.0\"\n    prometheus.io/scrape: \"true\""
    ],
    "testCases": [
      {
        "id": "cloud-68-tc-1",
        "description": "Verifies correct cloud configuration for Annotations vs Labels",
        "testFn": "code.includes('annotations:')"
      }
    ]
  },
  {
    "id": "cloud-69-pod-phase-status-conditions",
    "title": "69. Pod Phase & Status Conditions",
    "slug": "lesson-69-pod-phase-status-conditions",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand Pending, Running, Succeeded, Failed, and CrashLoopBackOff states.",
    "concepts": [
      "Pod Phase & Status Conditions",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Pod Phase & Status Conditions standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Pod Phase & Status Conditions\n\nUnderstand Pending, Running, Succeeded, Failed, and CrashLoopBackOff states.\n\n```yaml\nkubectl get pod web -o jsonpath=\"{.status.phase}\"\n```",
    "workedExample": {
      "title": "Worked Example: Pod Phase & Status Conditions",
      "code": "kubectl get pod web -o jsonpath=\"{.status.phase}\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Pod Phase & Status Conditions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pod Phase & Status Conditions.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Pod Phase & Status Conditions\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pod web -o jsonpath=\"{.status.phase}\"",
    "hints": [
      "Write:\nkubectl get pod web -o jsonpath=\"{.status.phase}\""
    ],
    "testCases": [
      {
        "id": "cloud-69-tc-1",
        "description": "Verifies correct cloud configuration for Pod Phase & Status Conditions",
        "testFn": "code.includes('status.phase')"
      }
    ]
  },
  {
    "id": "cloud-70-pod-restart-policies-always-on",
    "title": "70. Pod Restart Policies (Always, OnFailure, Never)",
    "slug": "lesson-70-pod-restart-policies-always-on",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Control container restart behavior upon successful or abnormal exit codes.",
    "concepts": [
      "Pod Restart Policies (Always, OnFailure, Never)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Pod Restart Policies (Always, OnFailure, Never) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Pod Restart Policies (Always, OnFailure, Never)\n\nControl container restart behavior upon successful or abnormal exit codes.\n\n```yaml\nspec:\n  restartPolicy: OnFailure\n  containers:\n  - name: batch-job\n    image: perl\n```",
    "workedExample": {
      "title": "Worked Example: Pod Restart Policies (Always, OnFailure, Never)",
      "code": "spec:\n  restartPolicy: OnFailure\n  containers:\n  - name: batch-job\n    image: perl",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Pod Restart Policies (Always, OnFailure, Never).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pod Restart Policies (Always, OnFailure, Never).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Pod Restart Policies (Always, OnFailure, Never)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  restartPolicy: OnFailure\n  containers:\n  - name: batch-job\n    image: perl",
    "hints": [
      "Write:\nspec:\n  restartPolicy: OnFailure\n  containers:\n  - name: batch-job\n    image: perl"
    ],
    "testCases": [
      {
        "id": "cloud-70-tc-1",
        "description": "Verifies correct cloud configuration for Pod Restart Policies (Always, OnFailure, Never)",
        "testFn": "code.includes('restartPolicy: OnFailure')"
      }
    ]
  },
  {
    "id": "cloud-71-resource-requests-and-limits-c",
    "title": "71. Resource Requests and Limits (CPU / Memory)",
    "slug": "lesson-71-resource-requests-and-limits-c",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Guarantee baseline compute allocation (requests) and enforce maximum ceiling (limits).",
    "concepts": [
      "Resource Requests and Limits (CPU / Memory)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Resource Requests and Limits (CPU / Memory) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Resource Requests and Limits (CPU / Memory)\n\nGuarantee baseline compute allocation (requests) and enforce maximum ceiling (limits).\n\n```yaml\nresources:\n  requests:\n    memory: \"64Mi\"\n    cpu: \"250m\"\n  limits:\n    memory: \"128Mi\"\n    cpu: \"500m\"\n```",
    "workedExample": {
      "title": "Worked Example: Resource Requests and Limits (CPU / Memory)",
      "code": "resources:\n  requests:\n    memory: \"64Mi\"\n    cpu: \"250m\"\n  limits:\n    memory: \"128Mi\"\n    cpu: \"500m\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Resource Requests and Limits (CPU / Memory).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Resource Requests and Limits (CPU / Memory).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Resource Requests and Limits (CPU / Memory)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "resources:\n  requests:\n    memory: \"64Mi\"\n    cpu: \"250m\"\n  limits:\n    memory: \"128Mi\"\n    cpu: \"500m\"",
    "hints": [
      "Write:\nresources:\n  requests:\n    memory: \"64Mi\"\n    cpu: \"250m\"\n  limits:\n    memory: \"128Mi\"\n    cpu: \"500m\""
    ],
    "testCases": [
      {
        "id": "cloud-71-tc-1",
        "description": "Verifies correct cloud configuration for Resource Requests and Limits (CPU / Memory)",
        "testFn": "code.includes('requests:') && code.includes('limits:')"
      }
    ]
  },
  {
    "id": "cloud-72-oomkilled-cpu-throttling-diagn",
    "title": "72. OOMKilled & CPU Throttling Diagnostics",
    "slug": "lesson-72-oomkilled-cpu-throttling-diagn",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify out-of-memory container terminations and detect throttled CPU threads.",
    "concepts": [
      "OOMKilled & CPU Throttling Diagnostics",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: OOMKilled & CPU Throttling Diagnostics standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### OOMKilled & CPU Throttling Diagnostics\n\nIdentify out-of-memory container terminations and detect throttled CPU threads.\n\n```yaml\nkubectl describe pod my-pod | grep -E \"OOMKilled|Exit Code\"\n```",
    "workedExample": {
      "title": "Worked Example: OOMKilled & CPU Throttling Diagnostics",
      "code": "kubectl describe pod my-pod | grep -E \"OOMKilled|Exit Code\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for OOMKilled & CPU Throttling Diagnostics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of OOMKilled & CPU Throttling Diagnostics.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for OOMKilled & CPU Throttling Diagnostics\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl describe pod my-pod | grep -E \"OOMKilled|Exit Code\"",
    "hints": [
      "Write:\nkubectl describe pod my-pod | grep -E \"OOMKilled|Exit Code\""
    ],
    "testCases": [
      {
        "id": "cloud-72-tc-1",
        "description": "Verifies correct cloud configuration for OOMKilled & CPU Throttling Diagnostics",
        "testFn": "code.includes('OOMKilled')"
      }
    ]
  },
  {
    "id": "cloud-73-nodeselector-node-affinity",
    "title": "73. NodeSelector & Node Affinity",
    "slug": "lesson-73-nodeselector-node-affinity",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Constrain Pod placement to specific nodes using hardware label criteria.",
    "concepts": [
      "NodeSelector & Node Affinity",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: NodeSelector & Node Affinity standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### NodeSelector & Node Affinity\n\nConstrain Pod placement to specific nodes using hardware label criteria.\n\n```yaml\nspec:\n  nodeSelector:\n    disktype: ssd\n```",
    "workedExample": {
      "title": "Worked Example: NodeSelector & Node Affinity",
      "code": "spec:\n  nodeSelector:\n    disktype: ssd",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for NodeSelector & Node Affinity.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of NodeSelector & Node Affinity.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for NodeSelector & Node Affinity\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  nodeSelector:\n    disktype: ssd",
    "hints": [
      "Write:\nspec:\n  nodeSelector:\n    disktype: ssd"
    ],
    "testCases": [
      {
        "id": "cloud-73-tc-1",
        "description": "Verifies correct cloud configuration for NodeSelector & Node Affinity",
        "testFn": "code.includes('nodeSelector:')"
      }
    ]
  },
  {
    "id": "cloud-74-taints-and-tolerations",
    "title": "74. Taints and Tolerations",
    "slug": "lesson-74-taints-and-tolerations",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent worker nodes from accepting incompatible Pods unless Pods explicitly tolerate taints.",
    "concepts": [
      "Taints and Tolerations",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Taints and Tolerations standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Taints and Tolerations\n\nPrevent worker nodes from accepting incompatible Pods unless Pods explicitly tolerate taints.\n\n```yaml\nkubectl taint nodes node1 gpu=true:NoSchedule\n```",
    "workedExample": {
      "title": "Worked Example: Taints and Tolerations",
      "code": "kubectl taint nodes node1 gpu=true:NoSchedule",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Taints and Tolerations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Taints and Tolerations.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Taints and Tolerations\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl taint nodes node1 gpu=true:NoSchedule",
    "hints": [
      "Write:\nkubectl taint nodes node1 gpu=true:NoSchedule"
    ],
    "testCases": [
      {
        "id": "cloud-74-tc-1",
        "description": "Verifies correct cloud configuration for Taints and Tolerations",
        "testFn": "code.includes('kubectl taint nodes')"
      }
    ]
  },
  {
    "id": "cloud-75-pod-disruption-budgets-pdb",
    "title": "75. Pod Disruption Budgets (PDB)",
    "slug": "lesson-75-pod-disruption-budgets-pdb",
    "language": "cloud",
    "category": "Module 5: Pods, Namespaces & Labels/Selectors",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensure minimum replica availability during voluntary cluster node drains and upgrades.",
    "concepts": [
      "Pod Disruption Budgets (PDB)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Pod Disruption Budgets (PDB) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Pod Disruption Budgets (PDB)\n\nEnsure minimum replica availability during voluntary cluster node drains and upgrades.\n\n```yaml\napiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: app-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: api\n```",
    "workedExample": {
      "title": "Worked Example: Pod Disruption Budgets (PDB)",
      "code": "apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: app-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: api",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Pod Disruption Budgets (PDB).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pod Disruption Budgets (PDB).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Pod Disruption Budgets (PDB)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: app-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: api",
    "hints": [
      "Write:\napiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: app-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: api"
    ],
    "testCases": [
      {
        "id": "cloud-75-tc-1",
        "description": "Verifies correct cloud configuration for Pod Disruption Budgets (PDB)",
        "testFn": "code.includes('kind: PodDisruptionBudget')"
      }
    ]
  },
  {
    "id": "cloud-76-understanding-replicasets",
    "title": "76. Understanding ReplicaSets",
    "slug": "lesson-76-understanding-replicasets",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Maintain a declared number of stable Pod replicas across worker nodes.",
    "concepts": [
      "Understanding ReplicaSets",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Understanding ReplicaSets standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Understanding ReplicaSets\n\nMaintain a declared number of stable Pod replicas across worker nodes.\n\n```yaml\napiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: web-rs\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n```",
    "workedExample": {
      "title": "Worked Example: Understanding ReplicaSets",
      "code": "apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: web-rs\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Understanding ReplicaSets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Understanding ReplicaSets.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Understanding ReplicaSets\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: web-rs\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web",
    "hints": [
      "Write:\napiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: web-rs\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web"
    ],
    "testCases": [
      {
        "id": "cloud-76-tc-1",
        "description": "Verifies correct cloud configuration for Understanding ReplicaSets",
        "testFn": "code.includes('kind: ReplicaSet')"
      }
    ]
  },
  {
    "id": "cloud-77-deployments-high-level-declara",
    "title": "77. Deployments: High-Level Declarative Management",
    "slug": "lesson-77-deployments-high-level-declara",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Deployments manage ReplicaSets automatically to enable declarative versioning.",
    "concepts": [
      "Deployments: High-Level Declarative Management",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Deployments: High-Level Declarative Management standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Deployments: High-Level Declarative Management\n\nDeployments manage ReplicaSets automatically to enable declarative versioning.\n\n```yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21\n```",
    "workedExample": {
      "title": "Worked Example: Deployments: High-Level Declarative Management",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Deployments: High-Level Declarative Management.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deployments: High-Level Declarative Management.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Deployments: High-Level Declarative Management\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21",
    "hints": [
      "Write:\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21"
    ],
    "testCases": [
      {
        "id": "cloud-77-tc-1",
        "description": "Verifies correct cloud configuration for Deployments: High-Level Declarative Management",
        "testFn": "code.includes('kind: Deployment') && code.includes('replicas: 3')"
      }
    ]
  },
  {
    "id": "cloud-78-rolling-updates-zero-downtime",
    "title": "78. Rolling Updates & Zero Downtime",
    "slug": "lesson-78-rolling-updates-zero-downtime",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Progressively replace old pods with new ones without service interruption.",
    "concepts": [
      "Rolling Updates & Zero Downtime",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Rolling Updates & Zero Downtime standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Rolling Updates & Zero Downtime\n\nProgressively replace old pods with new ones without service interruption.\n\n```yaml\nkubectl set image deployment/nginx-deployment nginx=nginx:1.23\n```",
    "workedExample": {
      "title": "Worked Example: Rolling Updates & Zero Downtime",
      "code": "kubectl set image deployment/nginx-deployment nginx=nginx:1.23",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Rolling Updates & Zero Downtime.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rolling Updates & Zero Downtime.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Rolling Updates & Zero Downtime\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl set image deployment/nginx-deployment nginx=nginx:1.23",
    "hints": [
      "Write:\nkubectl set image deployment/nginx-deployment nginx=nginx:1.23"
    ],
    "testCases": [
      {
        "id": "cloud-78-tc-1",
        "description": "Verifies correct cloud configuration for Rolling Updates & Zero Downtime",
        "testFn": "code.includes('kubectl set image deployment')"
      }
    ]
  },
  {
    "id": "cloud-79-rollingupdate-strategy-paramet",
    "title": "79. RollingUpdate Strategy Parameters (maxSurge, maxUnavailable)",
    "slug": "lesson-79-rollingupdate-strategy-paramet",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tune update concurrency: maxSurge controls spike size, maxUnavailable limits downtime.",
    "concepts": [
      "RollingUpdate Strategy Parameters (maxSurge, maxUnavailable)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: RollingUpdate Strategy Parameters (maxSurge, maxUnavailable) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### RollingUpdate Strategy Parameters (maxSurge, maxUnavailable)\n\nTune update concurrency: maxSurge controls spike size, maxUnavailable limits downtime.\n\n```yaml\nstrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxSurge: 25%\n    maxUnavailable: 0\n```",
    "workedExample": {
      "title": "Worked Example: RollingUpdate Strategy Parameters (maxSurge, maxUnavailable)",
      "code": "strategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxSurge: 25%\n    maxUnavailable: 0",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for RollingUpdate Strategy Parameters (maxSurge, maxUnavailable).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of RollingUpdate Strategy Parameters (maxSurge, maxUnavailable).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for RollingUpdate Strategy Parameters (maxSurge, maxUnavailable)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "strategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxSurge: 25%\n    maxUnavailable: 0",
    "hints": [
      "Write:\nstrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxSurge: 25%\n    maxUnavailable: 0"
    ],
    "testCases": [
      {
        "id": "cloud-79-tc-1",
        "description": "Verifies correct cloud configuration for RollingUpdate Strategy Parameters (maxSurge, maxUnavailable)",
        "testFn": "code.includes('maxSurge: 25%')"
      }
    ]
  },
  {
    "id": "cloud-80-rollout-status-tracking",
    "title": "80. Rollout Status & Tracking",
    "slug": "lesson-80-rollout-status-tracking",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Monitor deployment progress in real time via the rollout command.",
    "concepts": [
      "Rollout Status & Tracking",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Rollout Status & Tracking standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Rollout Status & Tracking\n\nMonitor deployment progress in real time via the rollout command.\n\n```yaml\nkubectl rollout status deployment/nginx-deployment\n```",
    "workedExample": {
      "title": "Worked Example: Rollout Status & Tracking",
      "code": "kubectl rollout status deployment/nginx-deployment",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Rollout Status & Tracking.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rollout Status & Tracking.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Rollout Status & Tracking\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl rollout status deployment/nginx-deployment",
    "hints": [
      "Write:\nkubectl rollout status deployment/nginx-deployment"
    ],
    "testCases": [
      {
        "id": "cloud-80-tc-1",
        "description": "Verifies correct cloud configuration for Rollout Status & Tracking",
        "testFn": "code.includes('kubectl rollout status')"
      }
    ]
  },
  {
    "id": "cloud-81-rollback-to-previous-revisions",
    "title": "81. Rollback to Previous Revisions",
    "slug": "lesson-81-rollback-to-previous-revisions",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Instantly revert broken releases with zero data corruption.",
    "concepts": [
      "Rollback to Previous Revisions",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Rollback to Previous Revisions standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Rollback to Previous Revisions\n\nInstantly revert broken releases with zero data corruption.\n\n```yaml\nkubectl rollout undo deployment/nginx-deployment\n```",
    "workedExample": {
      "title": "Worked Example: Rollback to Previous Revisions",
      "code": "kubectl rollout undo deployment/nginx-deployment",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Rollback to Previous Revisions.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rollback to Previous Revisions.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Rollback to Previous Revisions\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl rollout undo deployment/nginx-deployment",
    "hints": [
      "Write:\nkubectl rollout undo deployment/nginx-deployment"
    ],
    "testCases": [
      {
        "id": "cloud-81-tc-1",
        "description": "Verifies correct cloud configuration for Rollback to Previous Revisions",
        "testFn": "code.includes('kubectl rollout undo')"
      }
    ]
  },
  {
    "id": "cloud-82-rollout-history-revision-inspe",
    "title": "82. Rollout History & Revision Inspection",
    "slug": "lesson-82-rollout-history-revision-inspe",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Review all historical deployment iterations and inspect specific rollout details.",
    "concepts": [
      "Rollout History & Revision Inspection",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Rollout History & Revision Inspection standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Rollout History & Revision Inspection\n\nReview all historical deployment iterations and inspect specific rollout details.\n\n```yaml\nkubectl rollout history deployment/nginx-deployment\nkubectl rollout history deployment/nginx-deployment --revision=2\n```",
    "workedExample": {
      "title": "Worked Example: Rollout History & Revision Inspection",
      "code": "kubectl rollout history deployment/nginx-deployment\nkubectl rollout history deployment/nginx-deployment --revision=2",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Rollout History & Revision Inspection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rollout History & Revision Inspection.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Rollout History & Revision Inspection\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl rollout history deployment/nginx-deployment\nkubectl rollout history deployment/nginx-deployment --revision=2",
    "hints": [
      "Write:\nkubectl rollout history deployment/nginx-deployment\nkubectl rollout history deployment/nginx-deployment --revision=2"
    ],
    "testCases": [
      {
        "id": "cloud-82-tc-1",
        "description": "Verifies correct cloud configuration for Rollout History & Revision Inspection",
        "testFn": "code.includes('kubectl rollout history')"
      }
    ]
  },
  {
    "id": "cloud-83-manual-scaling-kubectl-scale",
    "title": "83. Manual Scaling (kubectl scale)",
    "slug": "lesson-83-manual-scaling-kubectl-scale",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Adjust replica count instantaneously under traffic surges.",
    "concepts": [
      "Manual Scaling (kubectl scale)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Manual Scaling (kubectl scale) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Manual Scaling (kubectl scale)\n\nAdjust replica count instantaneously under traffic surges.\n\n```yaml\nkubectl scale deployment/nginx-deployment --replicas=10\n```",
    "workedExample": {
      "title": "Worked Example: Manual Scaling (kubectl scale)",
      "code": "kubectl scale deployment/nginx-deployment --replicas=10",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Manual Scaling (kubectl scale).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Manual Scaling (kubectl scale).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Manual Scaling (kubectl scale)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl scale deployment/nginx-deployment --replicas=10",
    "hints": [
      "Write:\nkubectl scale deployment/nginx-deployment --replicas=10"
    ],
    "testCases": [
      {
        "id": "cloud-83-tc-1",
        "description": "Verifies correct cloud configuration for Manual Scaling (kubectl scale)",
        "testFn": "code.includes('kubectl scale deployment')"
      }
    ]
  },
  {
    "id": "cloud-84-daemonsets-for-node-level-serv",
    "title": "84. DaemonSets for Node-Level Services",
    "slug": "lesson-84-daemonsets-for-node-level-serv",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Run exactly one copy of a Pod on every cluster worker node (logging, monitoring agents).",
    "concepts": [
      "DaemonSets for Node-Level Services",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: DaemonSets for Node-Level Services standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### DaemonSets for Node-Level Services\n\nRun exactly one copy of a Pod on every cluster worker node (logging, monitoring agents).\n\n```yaml\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-agent\nspec:\n  selector:\n    matchLabels:\n      name: fluentd\n```",
    "workedExample": {
      "title": "Worked Example: DaemonSets for Node-Level Services",
      "code": "apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-agent\nspec:\n  selector:\n    matchLabels:\n      name: fluentd",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for DaemonSets for Node-Level Services.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DaemonSets for Node-Level Services.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for DaemonSets for Node-Level Services\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-agent\nspec:\n  selector:\n    matchLabels:\n      name: fluentd",
    "hints": [
      "Write:\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-agent\nspec:\n  selector:\n    matchLabels:\n      name: fluentd"
    ],
    "testCases": [
      {
        "id": "cloud-84-tc-1",
        "description": "Verifies correct cloud configuration for DaemonSets for Node-Level Services",
        "testFn": "code.includes('kind: DaemonSet')"
      }
    ]
  },
  {
    "id": "cloud-85-jobs-batch-process-workloads",
    "title": "85. Jobs: Batch Process Workloads",
    "slug": "lesson-85-jobs-batch-process-workloads",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Run non-terminating tasks to successful completion before terminating Pods.",
    "concepts": [
      "Jobs: Batch Process Workloads",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Jobs: Batch Process Workloads standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Jobs: Batch Process Workloads\n\nRun non-terminating tasks to successful completion before terminating Pods.\n\n```yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: db-migrate\nspec:\n  template:\n    spec:\n      containers:\n      - name: migrate\n        image: migrate:v1\n      restartPolicy: OnFailure\n```",
    "workedExample": {
      "title": "Worked Example: Jobs: Batch Process Workloads",
      "code": "apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: db-migrate\nspec:\n  template:\n    spec:\n      containers:\n      - name: migrate\n        image: migrate:v1\n      restartPolicy: OnFailure",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Jobs: Batch Process Workloads.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Jobs: Batch Process Workloads.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Jobs: Batch Process Workloads\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: db-migrate\nspec:\n  template:\n    spec:\n      containers:\n      - name: migrate\n        image: migrate:v1\n      restartPolicy: OnFailure",
    "hints": [
      "Write:\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: db-migrate\nspec:\n  template:\n    spec:\n      containers:\n      - name: migrate\n        image: migrate:v1\n      restartPolicy: OnFailure"
    ],
    "testCases": [
      {
        "id": "cloud-85-tc-1",
        "description": "Verifies correct cloud configuration for Jobs: Batch Process Workloads",
        "testFn": "code.includes('kind: Job')"
      }
    ]
  },
  {
    "id": "cloud-86-cronjobs-scheduled-automated-t",
    "title": "86. CronJobs: Scheduled Automated Tasks",
    "slug": "lesson-86-cronjobs-scheduled-automated-t",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute batch jobs on recurring cron schedules.",
    "concepts": [
      "CronJobs: Scheduled Automated Tasks",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: CronJobs: Scheduled Automated Tasks standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### CronJobs: Scheduled Automated Tasks\n\nExecute batch jobs on recurring cron schedules.\n\n```yaml\napiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: hourly-report\nspec:\n  schedule: \"0 * * * *\"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: reporter\n            image: reporter:latest\n          restartPolicy: OnFailure\n```",
    "workedExample": {
      "title": "Worked Example: CronJobs: Scheduled Automated Tasks",
      "code": "apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: hourly-report\nspec:\n  schedule: \"0 * * * *\"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: reporter\n            image: reporter:latest\n          restartPolicy: OnFailure",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for CronJobs: Scheduled Automated Tasks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of CronJobs: Scheduled Automated Tasks.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for CronJobs: Scheduled Automated Tasks\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: hourly-report\nspec:\n  schedule: \"0 * * * *\"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: reporter\n            image: reporter:latest\n          restartPolicy: OnFailure",
    "hints": [
      "Write:\napiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: hourly-report\nspec:\n  schedule: \"0 * * * *\"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: reporter\n            image: reporter:latest\n          restartPolicy: OnFailure"
    ],
    "testCases": [
      {
        "id": "cloud-86-tc-1",
        "description": "Verifies correct cloud configuration for CronJobs: Scheduled Automated Tasks",
        "testFn": "code.includes('kind: CronJob') && code.includes('schedule:')"
      }
    ]
  },
  {
    "id": "cloud-87-deployment-pausing-resuming",
    "title": "87. Deployment Pausing & Resuming",
    "slug": "lesson-87-deployment-pausing-resuming",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Group multiple manifest edits into a single rollout using pause and resume.",
    "concepts": [
      "Deployment Pausing & Resuming",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Deployment Pausing & Resuming standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Deployment Pausing & Resuming\n\nGroup multiple manifest edits into a single rollout using pause and resume.\n\n```yaml\nkubectl rollout pause deployment/nginx-deployment\nkubectl rollout resume deployment/nginx-deployment\n```",
    "workedExample": {
      "title": "Worked Example: Deployment Pausing & Resuming",
      "code": "kubectl rollout pause deployment/nginx-deployment\nkubectl rollout resume deployment/nginx-deployment",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Deployment Pausing & Resuming.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Deployment Pausing & Resuming.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Deployment Pausing & Resuming\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl rollout pause deployment/nginx-deployment\nkubectl rollout resume deployment/nginx-deployment",
    "hints": [
      "Write:\nkubectl rollout pause deployment/nginx-deployment\nkubectl rollout resume deployment/nginx-deployment"
    ],
    "testCases": [
      {
        "id": "cloud-87-tc-1",
        "description": "Verifies correct cloud configuration for Deployment Pausing & Resuming",
        "testFn": "code.includes('kubectl rollout pause')"
      }
    ]
  },
  {
    "id": "cloud-88-recreate-deployment-strategy",
    "title": "88. Recreate Deployment Strategy",
    "slug": "lesson-88-recreate-deployment-strategy",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Kill all existing pods before creating new ones when shared storage prohibits concurrent access.",
    "concepts": [
      "Recreate Deployment Strategy",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Recreate Deployment Strategy standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Recreate Deployment Strategy\n\nKill all existing pods before creating new ones when shared storage prohibits concurrent access.\n\n```yaml\nstrategy:\n  type: Recreate\n```",
    "workedExample": {
      "title": "Worked Example: Recreate Deployment Strategy",
      "code": "strategy:\n  type: Recreate",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Recreate Deployment Strategy.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Recreate Deployment Strategy.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Recreate Deployment Strategy\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "strategy:\n  type: Recreate",
    "hints": [
      "Write:\nstrategy:\n  type: Recreate"
    ],
    "testCases": [
      {
        "id": "cloud-88-tc-1",
        "description": "Verifies correct cloud configuration for Recreate Deployment Strategy",
        "testFn": "code.includes('type: Recreate')"
      }
    ]
  },
  {
    "id": "cloud-89-canary-releases-with-multiple-",
    "title": "89. Canary Releases with Multiple Deployments",
    "slug": "lesson-89-canary-releases-with-multiple-",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Route fractional production traffic to experimental canary deployments.",
    "concepts": [
      "Canary Releases with Multiple Deployments",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Canary Releases with Multiple Deployments standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Canary Releases with Multiple Deployments\n\nRoute fractional production traffic to experimental canary deployments.\n\n```yaml\nkubectl get deployments -l app=frontend\n```",
    "workedExample": {
      "title": "Worked Example: Canary Releases with Multiple Deployments",
      "code": "kubectl get deployments -l app=frontend",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Canary Releases with Multiple Deployments.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Canary Releases with Multiple Deployments.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Canary Releases with Multiple Deployments\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get deployments -l app=frontend",
    "hints": [
      "Write:\nkubectl get deployments -l app=frontend"
    ],
    "testCases": [
      {
        "id": "cloud-89-tc-1",
        "description": "Verifies correct cloud configuration for Canary Releases with Multiple Deployments",
        "testFn": "code.includes('kubectl get deployments')"
      }
    ]
  },
  {
    "id": "cloud-90-blue-green-deployments-with-se",
    "title": "90. Blue/Green Deployments with Service Selectors",
    "slug": "lesson-90-blue-green-deployments-with-se",
    "language": "cloud",
    "category": "Module 6: Workload Controllers: Deployments & Rollouts",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Switch production traffic instantaneously between identical environments.",
    "concepts": [
      "Blue/Green Deployments with Service Selectors",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Blue/Green Deployments with Service Selectors standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Blue/Green Deployments with Service Selectors\n\nSwitch production traffic instantaneously between identical environments.\n\n```yaml\nkubectl patch service frontend-svc -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'\n```",
    "workedExample": {
      "title": "Worked Example: Blue/Green Deployments with Service Selectors",
      "code": "kubectl patch service frontend-svc -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Blue/Green Deployments with Service Selectors.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Blue/Green Deployments with Service Selectors.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Blue/Green Deployments with Service Selectors\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl patch service frontend-svc -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'",
    "hints": [
      "Write:\nkubectl patch service frontend-svc -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'"
    ],
    "testCases": [
      {
        "id": "cloud-90-tc-1",
        "description": "Verifies correct cloud configuration for Blue/Green Deployments with Service Selectors",
        "testFn": "code.includes('patch service')"
      }
    ]
  },
  {
    "id": "cloud-91-the-kubernetes-network-model",
    "title": "91. The Kubernetes Network Model",
    "slug": "lesson-91-the-kubernetes-network-model",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fundamental rule: every Pod gets its own IP address; Pods communicate without NAT.",
    "concepts": [
      "The Kubernetes Network Model",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: The Kubernetes Network Model standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### The Kubernetes Network Model\n\nFundamental rule: every Pod gets its own IP address; Pods communicate without NAT.\n\n```yaml\nkubectl get pods -o custom-columns=NAME:.metadata.name,IP:.status.podIP\n```",
    "workedExample": {
      "title": "Worked Example: The Kubernetes Network Model",
      "code": "kubectl get pods -o custom-columns=NAME:.metadata.name,IP:.status.podIP",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for The Kubernetes Network Model.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Kubernetes Network Model.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for The Kubernetes Network Model\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pods -o custom-columns=NAME:.metadata.name,IP:.status.podIP",
    "hints": [
      "Write:\nkubectl get pods -o custom-columns=NAME:.metadata.name,IP:.status.podIP"
    ],
    "testCases": [
      {
        "id": "cloud-91-tc-1",
        "description": "Verifies correct cloud configuration for The Kubernetes Network Model",
        "testFn": "code.includes('custom-columns') && code.includes('podIP')"
      }
    ]
  },
  {
    "id": "cloud-92-clusterip-services-default-int",
    "title": "92. ClusterIP Services (Default Internal)",
    "slug": "lesson-92-clusterip-services-default-int",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Expose applications on a stable internal cluster IP address.",
    "concepts": [
      "ClusterIP Services (Default Internal)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ClusterIP Services (Default Internal) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ClusterIP Services (Default Internal)\n\nExpose applications on a stable internal cluster IP address.\n\n```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: backend-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: backend\n  ports:\n  - port: 80\n    targetPort: 8080\n```",
    "workedExample": {
      "title": "Worked Example: ClusterIP Services (Default Internal)",
      "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: backend-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: backend\n  ports:\n  - port: 80\n    targetPort: 8080",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ClusterIP Services (Default Internal).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ClusterIP Services (Default Internal).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ClusterIP Services (Default Internal)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: Service\nmetadata:\n  name: backend-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: backend\n  ports:\n  - port: 80\n    targetPort: 8080",
    "hints": [
      "Write:\napiVersion: v1\nkind: Service\nmetadata:\n  name: backend-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: backend\n  ports:\n  - port: 80\n    targetPort: 8080"
    ],
    "testCases": [
      {
        "id": "cloud-92-tc-1",
        "description": "Verifies correct cloud configuration for ClusterIP Services (Default Internal)",
        "testFn": "code.includes('type: ClusterIP')"
      }
    ]
  },
  {
    "id": "cloud-93-nodeport-services",
    "title": "93. NodePort Services",
    "slug": "lesson-93-nodeport-services",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Expose applications on each node's external IP at a static port (30000-32767).",
    "concepts": [
      "NodePort Services",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: NodePort Services standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### NodePort Services\n\nExpose applications on each node's external IP at a static port (30000-32767).\n\n```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-nodeport\nspec:\n  type: NodePort\n  selector:\n    app: web\n  ports:\n  - port: 80\n    nodePort: 30080\n```",
    "workedExample": {
      "title": "Worked Example: NodePort Services",
      "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: web-nodeport\nspec:\n  type: NodePort\n  selector:\n    app: web\n  ports:\n  - port: 80\n    nodePort: 30080",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for NodePort Services.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of NodePort Services.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for NodePort Services\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: Service\nmetadata:\n  name: web-nodeport\nspec:\n  type: NodePort\n  selector:\n    app: web\n  ports:\n  - port: 80\n    nodePort: 30080",
    "hints": [
      "Write:\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-nodeport\nspec:\n  type: NodePort\n  selector:\n    app: web\n  ports:\n  - port: 80\n    nodePort: 30080"
    ],
    "testCases": [
      {
        "id": "cloud-93-tc-1",
        "description": "Verifies correct cloud configuration for NodePort Services",
        "testFn": "code.includes('type: NodePort')"
      }
    ]
  },
  {
    "id": "cloud-94-loadbalancer-services-cloud-na",
    "title": "94. LoadBalancer Services (Cloud Native)",
    "slug": "lesson-94-loadbalancer-services-cloud-na",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Provision cloud cloud provider load balancers (AWS ALB, GCP Cloud LB) automatically.",
    "concepts": [
      "LoadBalancer Services (Cloud Native)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: LoadBalancer Services (Cloud Native) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### LoadBalancer Services (Cloud Native)\n\nProvision cloud cloud provider load balancers (AWS ALB, GCP Cloud LB) automatically.\n\n```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: public-lb\nspec:\n  type: LoadBalancer\n  selector:\n    app: frontend\n  ports:\n  - port: 443\n    targetPort: 8443\n```",
    "workedExample": {
      "title": "Worked Example: LoadBalancer Services (Cloud Native)",
      "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: public-lb\nspec:\n  type: LoadBalancer\n  selector:\n    app: frontend\n  ports:\n  - port: 443\n    targetPort: 8443",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for LoadBalancer Services (Cloud Native).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of LoadBalancer Services (Cloud Native).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for LoadBalancer Services (Cloud Native)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: Service\nmetadata:\n  name: public-lb\nspec:\n  type: LoadBalancer\n  selector:\n    app: frontend\n  ports:\n  - port: 443\n    targetPort: 8443",
    "hints": [
      "Write:\napiVersion: v1\nkind: Service\nmetadata:\n  name: public-lb\nspec:\n  type: LoadBalancer\n  selector:\n    app: frontend\n  ports:\n  - port: 443\n    targetPort: 8443"
    ],
    "testCases": [
      {
        "id": "cloud-94-tc-1",
        "description": "Verifies correct cloud configuration for LoadBalancer Services (Cloud Native)",
        "testFn": "code.includes('type: LoadBalancer')"
      }
    ]
  },
  {
    "id": "cloud-95-externalname-services",
    "title": "95. ExternalName Services",
    "slug": "lesson-95-externalname-services",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Map internal cluster DNS alias names directly to external CNAME records.",
    "concepts": [
      "ExternalName Services",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ExternalName Services standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ExternalName Services\n\nMap internal cluster DNS alias names directly to external CNAME records.\n\n```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: external-db\nspec:\n  type: ExternalName\n  externalName: db.external-provider.com\n```",
    "workedExample": {
      "title": "Worked Example: ExternalName Services",
      "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: external-db\nspec:\n  type: ExternalName\n  externalName: db.external-provider.com",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ExternalName Services.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ExternalName Services.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ExternalName Services\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: Service\nmetadata:\n  name: external-db\nspec:\n  type: ExternalName\n  externalName: db.external-provider.com",
    "hints": [
      "Write:\napiVersion: v1\nkind: Service\nmetadata:\n  name: external-db\nspec:\n  type: ExternalName\n  externalName: db.external-provider.com"
    ],
    "testCases": [
      {
        "id": "cloud-95-tc-1",
        "description": "Verifies correct cloud configuration for ExternalName Services",
        "testFn": "code.includes('type: ExternalName')"
      }
    ]
  },
  {
    "id": "cloud-96-endpoints-endpointslices",
    "title": "96. Endpoints & EndpointSlices",
    "slug": "lesson-96-endpoints-endpointslices",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect the dynamic IP lists mapped behind Kubernetes service abstractions.",
    "concepts": [
      "Endpoints & EndpointSlices",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Endpoints & EndpointSlices standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Endpoints & EndpointSlices\n\nInspect the dynamic IP lists mapped behind Kubernetes service abstractions.\n\n```yaml\nkubectl get endpointslices\n```",
    "workedExample": {
      "title": "Worked Example: Endpoints & EndpointSlices",
      "code": "kubectl get endpointslices",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Endpoints & EndpointSlices.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Endpoints & EndpointSlices.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Endpoints & EndpointSlices\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get endpointslices",
    "hints": [
      "Write:\nkubectl get endpointslices"
    ],
    "testCases": [
      {
        "id": "cloud-96-tc-1",
        "description": "Verifies correct cloud configuration for Endpoints & EndpointSlices",
        "testFn": "code.includes('kubectl get endpointslices')"
      }
    ]
  },
  {
    "id": "cloud-97-ingress-controllers-ingress-re",
    "title": "97. Ingress Controllers & Ingress Resources",
    "slug": "lesson-97-ingress-controllers-ingress-re",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Layer 7 HTTP(S) routing rule definition managing SSL termination and host routing.",
    "concepts": [
      "Ingress Controllers & Ingress Resources",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Ingress Controllers & Ingress Resources standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Ingress Controllers & Ingress Resources\n\nLayer 7 HTTP(S) routing rule definition managing SSL termination and host routing.\n\n```yaml\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web-ingress\nspec:\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: api-svc\n            port:\n              number: 80\n```",
    "workedExample": {
      "title": "Worked Example: Ingress Controllers & Ingress Resources",
      "code": "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web-ingress\nspec:\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: api-svc\n            port:\n              number: 80",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Ingress Controllers & Ingress Resources.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ingress Controllers & Ingress Resources.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Ingress Controllers & Ingress Resources\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web-ingress\nspec:\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: api-svc\n            port:\n              number: 80",
    "hints": [
      "Write:\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web-ingress\nspec:\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: api-svc\n            port:\n              number: 80"
    ],
    "testCases": [
      {
        "id": "cloud-97-tc-1",
        "description": "Verifies correct cloud configuration for Ingress Controllers & Ingress Resources",
        "testFn": "code.includes('kind: Ingress') && code.includes('host: api.example.com')"
      }
    ]
  },
  {
    "id": "cloud-98-ingress-tls-termination",
    "title": "98. Ingress TLS Termination",
    "slug": "lesson-98-ingress-tls-termination",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Secure public endpoints with automated SSL/TLS certificates.",
    "concepts": [
      "Ingress TLS Termination",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Ingress TLS Termination standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Ingress TLS Termination\n\nSecure public endpoints with automated SSL/TLS certificates.\n\n```yaml\nspec:\n  tls:\n  - hosts:\n    - api.example.com\n    secretName: api-tls-cert\n```",
    "workedExample": {
      "title": "Worked Example: Ingress TLS Termination",
      "code": "spec:\n  tls:\n  - hosts:\n    - api.example.com\n    secretName: api-tls-cert",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Ingress TLS Termination.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ingress TLS Termination.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Ingress TLS Termination\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  tls:\n  - hosts:\n    - api.example.com\n    secretName: api-tls-cert",
    "hints": [
      "Write:\nspec:\n  tls:\n  - hosts:\n    - api.example.com\n    secretName: api-tls-cert"
    ],
    "testCases": [
      {
        "id": "cloud-98-tc-1",
        "description": "Verifies correct cloud configuration for Ingress TLS Termination",
        "testFn": "code.includes('secretName: api-tls-cert')"
      }
    ]
  },
  {
    "id": "cloud-99-path-based-vs-host-based-routi",
    "title": "99. Path-Based vs Host-Based Routing",
    "slug": "lesson-99-path-based-vs-host-based-routi",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Route different domain names or URL paths (/api, /auth) to dedicated microservices.",
    "concepts": [
      "Path-Based vs Host-Based Routing",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Path-Based vs Host-Based Routing standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Path-Based vs Host-Based Routing\n\nRoute different domain names or URL paths (/api, /auth) to dedicated microservices.\n\n```yaml\nspec:\n  rules:\n  - host: shop.com\n    http:\n      paths:\n      - path: /cart\n        pathType: Prefix\n        backend:\n          service:\n            name: cart-svc\n            port:\n              number: 80\n```",
    "workedExample": {
      "title": "Worked Example: Path-Based vs Host-Based Routing",
      "code": "spec:\n  rules:\n  - host: shop.com\n    http:\n      paths:\n      - path: /cart\n        pathType: Prefix\n        backend:\n          service:\n            name: cart-svc\n            port:\n              number: 80",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Path-Based vs Host-Based Routing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Path-Based vs Host-Based Routing.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Path-Based vs Host-Based Routing\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  rules:\n  - host: shop.com\n    http:\n      paths:\n      - path: /cart\n        pathType: Prefix\n        backend:\n          service:\n            name: cart-svc\n            port:\n              number: 80",
    "hints": [
      "Write:\nspec:\n  rules:\n  - host: shop.com\n    http:\n      paths:\n      - path: /cart\n        pathType: Prefix\n        backend:\n          service:\n            name: cart-svc\n            port:\n              number: 80"
    ],
    "testCases": [
      {
        "id": "cloud-99-tc-1",
        "description": "Verifies correct cloud configuration for Path-Based vs Host-Based Routing",
        "testFn": "code.includes('path: /cart')"
      }
    ]
  },
  {
    "id": "cloud-100-kubernetes-gateway-api-next-ge",
    "title": "100. Kubernetes Gateway API (Next-Gen Ingress)",
    "slug": "lesson-100-kubernetes-gateway-api-next-ge",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Role-oriented HTTPRoute and Gateway resources replacing legacy Ingress.",
    "concepts": [
      "Kubernetes Gateway API (Next-Gen Ingress)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Kubernetes Gateway API (Next-Gen Ingress) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Kubernetes Gateway API (Next-Gen Ingress)\n\nRole-oriented HTTPRoute and Gateway resources replacing legacy Ingress.\n\n```yaml\napiVersion: gateway.networking.k8s.io/v1\nkind: HTTPRoute\nmetadata:\n  name: api-route\nspec:\n  parentRefs:\n  - name: prod-gateway\n```",
    "workedExample": {
      "title": "Worked Example: Kubernetes Gateway API (Next-Gen Ingress)",
      "code": "apiVersion: gateway.networking.k8s.io/v1\nkind: HTTPRoute\nmetadata:\n  name: api-route\nspec:\n  parentRefs:\n  - name: prod-gateway",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Kubernetes Gateway API (Next-Gen Ingress).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kubernetes Gateway API (Next-Gen Ingress).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Kubernetes Gateway API (Next-Gen Ingress)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: gateway.networking.k8s.io/v1\nkind: HTTPRoute\nmetadata:\n  name: api-route\nspec:\n  parentRefs:\n  - name: prod-gateway",
    "hints": [
      "Write:\napiVersion: gateway.networking.k8s.io/v1\nkind: HTTPRoute\nmetadata:\n  name: api-route\nspec:\n  parentRefs:\n  - name: prod-gateway"
    ],
    "testCases": [
      {
        "id": "cloud-100-tc-1",
        "description": "Verifies correct cloud configuration for Kubernetes Gateway API (Next-Gen Ingress)",
        "testFn": "code.includes('kind: HTTPRoute')"
      }
    ]
  },
  {
    "id": "cloud-101-networkpolicies-for-pod-firewa",
    "title": "101. NetworkPolicies for Pod Firewalling",
    "slug": "lesson-101-networkpolicies-for-pod-firewa",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Isolate pod network traffic using granular ingress and egress whitelist rules.",
    "concepts": [
      "NetworkPolicies for Pod Firewalling",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: NetworkPolicies for Pod Firewalling standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### NetworkPolicies for Pod Firewalling\n\nIsolate pod network traffic using granular ingress and egress whitelist rules.\n\n```yaml\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress\n```",
    "workedExample": {
      "title": "Worked Example: NetworkPolicies for Pod Firewalling",
      "code": "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for NetworkPolicies for Pod Firewalling.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of NetworkPolicies for Pod Firewalling.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for NetworkPolicies for Pod Firewalling\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress",
    "hints": [
      "Write:\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress"
    ],
    "testCases": [
      {
        "id": "cloud-101-tc-1",
        "description": "Verifies correct cloud configuration for NetworkPolicies for Pod Firewalling",
        "testFn": "code.includes('kind: NetworkPolicy') && code.includes('default-deny-all')"
      }
    ]
  },
  {
    "id": "cloud-102-allowing-selective-ingress-tra",
    "title": "102. Allowing Selective Ingress Traffic",
    "slug": "lesson-102-allowing-selective-ingress-tra",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Permit frontend pods to talk to backend database pods while denying all others.",
    "concepts": [
      "Allowing Selective Ingress Traffic",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Allowing Selective Ingress Traffic standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Allowing Selective Ingress Traffic\n\nPermit frontend pods to talk to backend database pods while denying all others.\n\n```yaml\ningress:\n- from:\n  - podSelector:\n      matchLabels:\n        role: frontend\n  ports:\n  - protocol: TCP\n    port: 5432\n```",
    "workedExample": {
      "title": "Worked Example: Allowing Selective Ingress Traffic",
      "code": "ingress:\n- from:\n  - podSelector:\n      matchLabels:\n        role: frontend\n  ports:\n  - protocol: TCP\n    port: 5432",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Allowing Selective Ingress Traffic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Allowing Selective Ingress Traffic.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Allowing Selective Ingress Traffic\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "ingress:\n- from:\n  - podSelector:\n      matchLabels:\n        role: frontend\n  ports:\n  - protocol: TCP\n    port: 5432",
    "hints": [
      "Write:\ningress:\n- from:\n  - podSelector:\n      matchLabels:\n        role: frontend\n  ports:\n  - protocol: TCP\n    port: 5432"
    ],
    "testCases": [
      {
        "id": "cloud-102-tc-1",
        "description": "Verifies correct cloud configuration for Allowing Selective Ingress Traffic",
        "testFn": "code.includes('role: frontend') && code.includes('5432')"
      }
    ]
  },
  {
    "id": "cloud-103-service-mesh-overview-istio-li",
    "title": "103. Service Mesh Overview (Istio / Linkerd)",
    "slug": "lesson-103-service-mesh-overview-istio-li",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "mTLS mutual encryption, traffic splitting, and distributed telemetry.",
    "concepts": [
      "Service Mesh Overview (Istio / Linkerd)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Service Mesh Overview (Istio / Linkerd) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Service Mesh Overview (Istio / Linkerd)\n\nmTLS mutual encryption, traffic splitting, and distributed telemetry.\n\n```yaml\necho \"Service mesh injects Envoy sidecar proxies to intercept network traffic\"\n```",
    "workedExample": {
      "title": "Worked Example: Service Mesh Overview (Istio / Linkerd)",
      "code": "echo \"Service mesh injects Envoy sidecar proxies to intercept network traffic\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Service Mesh Overview (Istio / Linkerd).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Service Mesh Overview (Istio / Linkerd).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Service Mesh Overview (Istio / Linkerd)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"Service mesh injects Envoy sidecar proxies to intercept network traffic\"",
    "hints": [
      "Write:\necho \"Service mesh injects Envoy sidecar proxies to intercept network traffic\""
    ],
    "testCases": [
      {
        "id": "cloud-103-tc-1",
        "description": "Verifies correct cloud configuration for Service Mesh Overview (Istio / Linkerd)",
        "testFn": "code.includes('Envoy sidecar proxies')"
      }
    ]
  },
  {
    "id": "cloud-104-debugging-network-issues-with-",
    "title": "104. Debugging Network Issues with Ephemeral Debug Containers",
    "slug": "lesson-104-debugging-network-issues-with-",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spin up network troubleshooting containers directly attached to target pod namespaces.",
    "concepts": [
      "Debugging Network Issues with Ephemeral Debug Containers",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Debugging Network Issues with Ephemeral Debug Containers standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Debugging Network Issues with Ephemeral Debug Containers\n\nSpin up network troubleshooting containers directly attached to target pod namespaces.\n\n```yaml\nkubectl debug -it target-pod --image=nicolaka/netshoot -- netstat -tuln\n```",
    "workedExample": {
      "title": "Worked Example: Debugging Network Issues with Ephemeral Debug Containers",
      "code": "kubectl debug -it target-pod --image=nicolaka/netshoot -- netstat -tuln",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Debugging Network Issues with Ephemeral Debug Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Debugging Network Issues with Ephemeral Debug Containers.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Debugging Network Issues with Ephemeral Debug Containers\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl debug -it target-pod --image=nicolaka/netshoot -- netstat -tuln",
    "hints": [
      "Write:\nkubectl debug -it target-pod --image=nicolaka/netshoot -- netstat -tuln"
    ],
    "testCases": [
      {
        "id": "cloud-104-tc-1",
        "description": "Verifies correct cloud configuration for Debugging Network Issues with Ephemeral Debug Containers",
        "testFn": "code.includes('kubectl debug')"
      }
    ]
  },
  {
    "id": "cloud-105-external-traffic-policy-local-",
    "title": "105. External Traffic Policy: Local vs Cluster",
    "slug": "lesson-105-external-traffic-policy-local-",
    "language": "cloud",
    "category": "Module 7: Networking & Ingress Controllers",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preserve client source IP addresses and avoid unnecessary double hops.",
    "concepts": [
      "External Traffic Policy: Local vs Cluster",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: External Traffic Policy: Local vs Cluster standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### External Traffic Policy: Local vs Cluster\n\nPreserve client source IP addresses and avoid unnecessary double hops.\n\n```yaml\nspec:\n  externalTrafficPolicy: Local\n```",
    "workedExample": {
      "title": "Worked Example: External Traffic Policy: Local vs Cluster",
      "code": "spec:\n  externalTrafficPolicy: Local",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for External Traffic Policy: Local vs Cluster.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of External Traffic Policy: Local vs Cluster.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for External Traffic Policy: Local vs Cluster\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  externalTrafficPolicy: Local",
    "hints": [
      "Write:\nspec:\n  externalTrafficPolicy: Local"
    ],
    "testCases": [
      {
        "id": "cloud-105-tc-1",
        "description": "Verifies correct cloud configuration for External Traffic Policy: Local vs Cluster",
        "testFn": "code.includes('externalTrafficPolicy: Local')"
      }
    ]
  },
  {
    "id": "cloud-106-configmaps-for-environment-dec",
    "title": "106. ConfigMaps for Environment Decoupling",
    "slug": "lesson-106-configmaps-for-environment-dec",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Externalize configuration files and variables away from container images.",
    "concepts": [
      "ConfigMaps for Environment Decoupling",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ConfigMaps for Environment Decoupling standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ConfigMaps for Environment Decoupling\n\nExternalize configuration files and variables away from container images.\n\n```yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_COLOR: \"navy-blue\"\n  MAX_USERS: \"5000\"\n```",
    "workedExample": {
      "title": "Worked Example: ConfigMaps for Environment Decoupling",
      "code": "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_COLOR: \"navy-blue\"\n  MAX_USERS: \"5000\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ConfigMaps for Environment Decoupling.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ConfigMaps for Environment Decoupling.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ConfigMaps for Environment Decoupling\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_COLOR: \"navy-blue\"\n  MAX_USERS: \"5000\"",
    "hints": [
      "Write:\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_COLOR: \"navy-blue\"\n  MAX_USERS: \"5000\""
    ],
    "testCases": [
      {
        "id": "cloud-106-tc-1",
        "description": "Verifies correct cloud configuration for ConfigMaps for Environment Decoupling",
        "testFn": "code.includes('kind: ConfigMap') && code.includes('APP_COLOR')"
      }
    ]
  },
  {
    "id": "cloud-107-injecting-configmaps-as-enviro",
    "title": "107. Injecting ConfigMaps as Environment Variables",
    "slug": "lesson-107-injecting-configmaps-as-enviro",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Load entire ConfigMaps or individual keys into pod process environments.",
    "concepts": [
      "Injecting ConfigMaps as Environment Variables",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Injecting ConfigMaps as Environment Variables standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Injecting ConfigMaps as Environment Variables\n\nLoad entire ConfigMaps or individual keys into pod process environments.\n\n```yaml\nenvFrom:\n- configMapRef:\n    name: app-config\n```",
    "workedExample": {
      "title": "Worked Example: Injecting ConfigMaps as Environment Variables",
      "code": "envFrom:\n- configMapRef:\n    name: app-config",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Injecting ConfigMaps as Environment Variables.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Injecting ConfigMaps as Environment Variables.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Injecting ConfigMaps as Environment Variables\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "envFrom:\n- configMapRef:\n    name: app-config",
    "hints": [
      "Write:\nenvFrom:\n- configMapRef:\n    name: app-config"
    ],
    "testCases": [
      {
        "id": "cloud-107-tc-1",
        "description": "Verifies correct cloud configuration for Injecting ConfigMaps as Environment Variables",
        "testFn": "code.includes('configMapRef:')"
      }
    ]
  },
  {
    "id": "cloud-108-mounting-configmaps-as-volume-",
    "title": "108. Mounting ConfigMaps as Volume Files",
    "slug": "lesson-108-mounting-configmaps-as-volume-",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Mount multi-line configuration files (nginx.conf) into containers seamlessly.",
    "concepts": [
      "Mounting ConfigMaps as Volume Files",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Mounting ConfigMaps as Volume Files standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Mounting ConfigMaps as Volume Files\n\nMount multi-line configuration files (nginx.conf) into containers seamlessly.\n\n```yaml\nvolumes:\n- name: config-vol\n  configMap:\n    name: app-config\n```",
    "workedExample": {
      "title": "Worked Example: Mounting ConfigMaps as Volume Files",
      "code": "volumes:\n- name: config-vol\n  configMap:\n    name: app-config",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Mounting ConfigMaps as Volume Files.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mounting ConfigMaps as Volume Files.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Mounting ConfigMaps as Volume Files\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "volumes:\n- name: config-vol\n  configMap:\n    name: app-config",
    "hints": [
      "Write:\nvolumes:\n- name: config-vol\n  configMap:\n    name: app-config"
    ],
    "testCases": [
      {
        "id": "cloud-108-tc-1",
        "description": "Verifies correct cloud configuration for Mounting ConfigMaps as Volume Files",
        "testFn": "code.includes('configMap:')"
      }
    ]
  },
  {
    "id": "cloud-109-kubernetes-secrets-opaque-tls-",
    "title": "109. Kubernetes Secrets (Opaque, TLS, DockerRegistry)",
    "slug": "lesson-109-kubernetes-secrets-opaque-tls-",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Store sensitive credentials, certificates, and tokens encoded in Base64.",
    "concepts": [
      "Kubernetes Secrets (Opaque, TLS, DockerRegistry)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Kubernetes Secrets (Opaque, TLS, DockerRegistry) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Kubernetes Secrets (Opaque, TLS, DockerRegistry)\n\nStore sensitive credentials, certificates, and tokens encoded in Base64.\n\n```yaml\nkubectl create secret generic db-creds --from-literal=password=SuperSecret123\n```",
    "workedExample": {
      "title": "Worked Example: Kubernetes Secrets (Opaque, TLS, DockerRegistry)",
      "code": "kubectl create secret generic db-creds --from-literal=password=SuperSecret123",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Kubernetes Secrets (Opaque, TLS, DockerRegistry).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Kubernetes Secrets (Opaque, TLS, DockerRegistry).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Kubernetes Secrets (Opaque, TLS, DockerRegistry)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl create secret generic db-creds --from-literal=password=SuperSecret123",
    "hints": [
      "Write:\nkubectl create secret generic db-creds --from-literal=password=SuperSecret123"
    ],
    "testCases": [
      {
        "id": "cloud-109-tc-1",
        "description": "Verifies correct cloud configuration for Kubernetes Secrets (Opaque, TLS, DockerRegistry)",
        "testFn": "code.includes('create secret generic')"
      }
    ]
  },
  {
    "id": "cloud-110-injecting-secrets-into-pods",
    "title": "110. Injecting Secrets into Pods",
    "slug": "lesson-110-injecting-secrets-into-pods",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Expose secret keys as environment variables or read-only volume files.",
    "concepts": [
      "Injecting Secrets into Pods",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Injecting Secrets into Pods standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Injecting Secrets into Pods\n\nExpose secret keys as environment variables or read-only volume files.\n\n```yaml\nenv:\n- name: DB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: db-creds\n      key: password\n```",
    "workedExample": {
      "title": "Worked Example: Injecting Secrets into Pods",
      "code": "env:\n- name: DB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: db-creds\n      key: password",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Injecting Secrets into Pods.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Injecting Secrets into Pods.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Injecting Secrets into Pods\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "env:\n- name: DB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: db-creds\n      key: password",
    "hints": [
      "Write:\nenv:\n- name: DB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: db-creds\n      key: password"
    ],
    "testCases": [
      {
        "id": "cloud-110-tc-1",
        "description": "Verifies correct cloud configuration for Injecting Secrets into Pods",
        "testFn": "code.includes('secretKeyRef:')"
      }
    ]
  },
  {
    "id": "cloud-111-encrypting-secrets-at-rest-in-",
    "title": "111. Encrypting Secrets at Rest in etcd",
    "slug": "lesson-111-encrypting-secrets-at-rest-in-",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enable KMS or AES-GCM encryption providers to protect secrets stored in etcd.",
    "concepts": [
      "Encrypting Secrets at Rest in etcd",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Encrypting Secrets at Rest in etcd standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Encrypting Secrets at Rest in etcd\n\nEnable KMS or AES-GCM encryption providers to protect secrets stored in etcd.\n\n```yaml\ncat /etc/kubernetes/encryption-config.yaml\n```",
    "workedExample": {
      "title": "Worked Example: Encrypting Secrets at Rest in etcd",
      "code": "cat /etc/kubernetes/encryption-config.yaml",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Encrypting Secrets at Rest in etcd.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Encrypting Secrets at Rest in etcd.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Encrypting Secrets at Rest in etcd\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "cat /etc/kubernetes/encryption-config.yaml",
    "hints": [
      "Write:\ncat /etc/kubernetes/encryption-config.yaml"
    ],
    "testCases": [
      {
        "id": "cloud-111-tc-1",
        "description": "Verifies correct cloud configuration for Encrypting Secrets at Rest in etcd",
        "testFn": "code.includes('encryption-config.yaml')"
      }
    ]
  },
  {
    "id": "cloud-112-serviceaccounts-automated-pod-",
    "title": "112. ServiceAccounts & Automated Pod Identity",
    "slug": "lesson-112-serviceaccounts-automated-pod-",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Grant cluster API access identity to applications running inside Pods.",
    "concepts": [
      "ServiceAccounts & Automated Pod Identity",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ServiceAccounts & Automated Pod Identity standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ServiceAccounts & Automated Pod Identity\n\nGrant cluster API access identity to applications running inside Pods.\n\n```yaml\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: build-bot\n```",
    "workedExample": {
      "title": "Worked Example: ServiceAccounts & Automated Pod Identity",
      "code": "apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: build-bot",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ServiceAccounts & Automated Pod Identity.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ServiceAccounts & Automated Pod Identity.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ServiceAccounts & Automated Pod Identity\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: build-bot",
    "hints": [
      "Write:\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: build-bot"
    ],
    "testCases": [
      {
        "id": "cloud-112-tc-1",
        "description": "Verifies correct cloud configuration for ServiceAccounts & Automated Pod Identity",
        "testFn": "code.includes('kind: ServiceAccount')"
      }
    ]
  },
  {
    "id": "cloud-113-role-clusterrole-rbac-permissi",
    "title": "113. Role & ClusterRole (RBAC Permissions)",
    "slug": "lesson-113-role-clusterrole-rbac-permissi",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Declare granular API access rule permissions (get, list, watch, create, delete).",
    "concepts": [
      "Role & ClusterRole (RBAC Permissions)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Role & ClusterRole (RBAC Permissions) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Role & ClusterRole (RBAC Permissions)\n\nDeclare granular API access rule permissions (get, list, watch, create, delete).\n\n```yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: pod-reader\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\", \"list\", \"watch\"]\n```",
    "workedExample": {
      "title": "Worked Example: Role & ClusterRole (RBAC Permissions)",
      "code": "apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: pod-reader\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\", \"list\", \"watch\"]",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Role & ClusterRole (RBAC Permissions).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Role & ClusterRole (RBAC Permissions).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Role & ClusterRole (RBAC Permissions)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: pod-reader\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\", \"list\", \"watch\"]",
    "hints": [
      "Write:\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: pod-reader\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\"]\n  verbs: [\"get\", \"list\", \"watch\"]"
    ],
    "testCases": [
      {
        "id": "cloud-113-tc-1",
        "description": "Verifies correct cloud configuration for Role & ClusterRole (RBAC Permissions)",
        "testFn": "code.includes('kind: Role') && code.includes('verbs: [\"get\", \"list\", \"watch\"]')"
      }
    ]
  },
  {
    "id": "cloud-114-rolebinding-clusterrolebinding",
    "title": "114. RoleBinding & ClusterRoleBinding",
    "slug": "lesson-114-rolebinding-clusterrolebinding",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bind RBAC Roles or ClusterRoles to users, groups, or ServiceAccounts.",
    "concepts": [
      "RoleBinding & ClusterRoleBinding",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: RoleBinding & ClusterRoleBinding standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### RoleBinding & ClusterRoleBinding\n\nBind RBAC Roles or ClusterRoles to users, groups, or ServiceAccounts.\n\n```yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: read-pods-binding\nsubjects:\n- kind: ServiceAccount\n  name: build-bot\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io\n```",
    "workedExample": {
      "title": "Worked Example: RoleBinding & ClusterRoleBinding",
      "code": "apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: read-pods-binding\nsubjects:\n- kind: ServiceAccount\n  name: build-bot\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for RoleBinding & ClusterRoleBinding.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of RoleBinding & ClusterRoleBinding.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for RoleBinding & ClusterRoleBinding\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: read-pods-binding\nsubjects:\n- kind: ServiceAccount\n  name: build-bot\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io",
    "hints": [
      "Write:\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: read-pods-binding\nsubjects:\n- kind: ServiceAccount\n  name: build-bot\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io"
    ],
    "testCases": [
      {
        "id": "cloud-114-tc-1",
        "description": "Verifies correct cloud configuration for RoleBinding & ClusterRoleBinding",
        "testFn": "code.includes('kind: RoleBinding')"
      }
    ]
  },
  {
    "id": "cloud-115-testing-permissions-with-kubec",
    "title": "115. Testing Permissions with kubectl auth can-i",
    "slug": "lesson-115-testing-permissions-with-kubec",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Verify access rights instantaneously from the command line.",
    "concepts": [
      "Testing Permissions with kubectl auth can-i",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Testing Permissions with kubectl auth can-i standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Testing Permissions with kubectl auth can-i\n\nVerify access rights instantaneously from the command line.\n\n```yaml\nkubectl auth can-i create deployments --as=system:serviceaccount:default:build-bot\n```",
    "workedExample": {
      "title": "Worked Example: Testing Permissions with kubectl auth can-i",
      "code": "kubectl auth can-i create deployments --as=system:serviceaccount:default:build-bot",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Testing Permissions with kubectl auth can-i.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Testing Permissions with kubectl auth can-i.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Testing Permissions with kubectl auth can-i\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl auth can-i create deployments --as=system:serviceaccount:default:build-bot",
    "hints": [
      "Write:\nkubectl auth can-i create deployments --as=system:serviceaccount:default:build-bot"
    ],
    "testCases": [
      {
        "id": "cloud-115-tc-1",
        "description": "Verifies correct cloud configuration for Testing Permissions with kubectl auth can-i",
        "testFn": "code.includes('kubectl auth can-i')"
      }
    ]
  },
  {
    "id": "cloud-116-securitycontext-non-root-reado",
    "title": "116. SecurityContext: Non-Root & ReadOnlyRootFilesystem",
    "slug": "lesson-116-securitycontext-non-root-reado",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Harden container runtimes by locking root filesystem writes and dropping capabilities.",
    "concepts": [
      "SecurityContext: Non-Root & ReadOnlyRootFilesystem",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: SecurityContext: Non-Root & ReadOnlyRootFilesystem standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### SecurityContext: Non-Root & ReadOnlyRootFilesystem\n\nHarden container runtimes by locking root filesystem writes and dropping capabilities.\n\n```yaml\nsecurityContext:\n  runAsNonRoot: true\n  readOnlyRootFilesystem: true\n  capabilities:\n    drop:\n    - ALL\n```",
    "workedExample": {
      "title": "Worked Example: SecurityContext: Non-Root & ReadOnlyRootFilesystem",
      "code": "securityContext:\n  runAsNonRoot: true\n  readOnlyRootFilesystem: true\n  capabilities:\n    drop:\n    - ALL",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for SecurityContext: Non-Root & ReadOnlyRootFilesystem.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of SecurityContext: Non-Root & ReadOnlyRootFilesystem.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for SecurityContext: Non-Root & ReadOnlyRootFilesystem\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "securityContext:\n  runAsNonRoot: true\n  readOnlyRootFilesystem: true\n  capabilities:\n    drop:\n    - ALL",
    "hints": [
      "Write:\nsecurityContext:\n  runAsNonRoot: true\n  readOnlyRootFilesystem: true\n  capabilities:\n    drop:\n    - ALL"
    ],
    "testCases": [
      {
        "id": "cloud-116-tc-1",
        "description": "Verifies correct cloud configuration for SecurityContext: Non-Root & ReadOnlyRootFilesystem",
        "testFn": "code.includes('readOnlyRootFilesystem: true')"
      }
    ]
  },
  {
    "id": "cloud-117-pod-security-standards-privile",
    "title": "117. Pod Security Standards (Privileged, Baseline, Restricted)",
    "slug": "lesson-117-pod-security-standards-privile",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Namespace-level admission enforcement replacing deprecated PodSecurityPolicies.",
    "concepts": [
      "Pod Security Standards (Privileged, Baseline, Restricted)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Pod Security Standards (Privileged, Baseline, Restricted) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Pod Security Standards (Privileged, Baseline, Restricted)\n\nNamespace-level admission enforcement replacing deprecated PodSecurityPolicies.\n\n```yaml\nkubectl label namespace secure-apps pod-security.kubernetes.io/enforce=restricted\n```",
    "workedExample": {
      "title": "Worked Example: Pod Security Standards (Privileged, Baseline, Restricted)",
      "code": "kubectl label namespace secure-apps pod-security.kubernetes.io/enforce=restricted",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Pod Security Standards (Privileged, Baseline, Restricted).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pod Security Standards (Privileged, Baseline, Restricted).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Pod Security Standards (Privileged, Baseline, Restricted)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl label namespace secure-apps pod-security.kubernetes.io/enforce=restricted",
    "hints": [
      "Write:\nkubectl label namespace secure-apps pod-security.kubernetes.io/enforce=restricted"
    ],
    "testCases": [
      {
        "id": "cloud-117-tc-1",
        "description": "Verifies correct cloud configuration for Pod Security Standards (Privileged, Baseline, Restricted)",
        "testFn": "code.includes('pod-security.kubernetes.io/enforce=restricted')"
      }
    ]
  },
  {
    "id": "cloud-118-secret-management-with-hashico",
    "title": "118. Secret Management with HashiCorp Vault / External Secrets Operator",
    "slug": "lesson-118-secret-management-with-hashico",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sync secrets from Vault or AWS Secrets Manager into cluster pods dynamically.",
    "concepts": [
      "Secret Management with HashiCorp Vault / External Secrets Operator",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Secret Management with HashiCorp Vault / External Secrets Operator standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Secret Management with HashiCorp Vault / External Secrets Operator\n\nSync secrets from Vault or AWS Secrets Manager into cluster pods dynamically.\n\n```yaml\nkubectl get externalsecrets\n```",
    "workedExample": {
      "title": "Worked Example: Secret Management with HashiCorp Vault / External Secrets Operator",
      "code": "kubectl get externalsecrets",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Secret Management with HashiCorp Vault / External Secrets Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Secret Management with HashiCorp Vault / External Secrets Operator.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Secret Management with HashiCorp Vault / External Secrets Operator\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get externalsecrets",
    "hints": [
      "Write:\nkubectl get externalsecrets"
    ],
    "testCases": [
      {
        "id": "cloud-118-tc-1",
        "description": "Verifies correct cloud configuration for Secret Management with HashiCorp Vault / External Secrets Operator",
        "testFn": "code.includes('kubectl get externalsecrets')"
      }
    ]
  },
  {
    "id": "cloud-119-audit-logging-for-api-security",
    "title": "119. Audit Logging for API Security",
    "slug": "lesson-119-audit-logging-for-api-security",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Record all requests made to the kube-apiserver for compliance and forensic analysis.",
    "concepts": [
      "Audit Logging for API Security",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Audit Logging for API Security standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Audit Logging for API Security\n\nRecord all requests made to the kube-apiserver for compliance and forensic analysis.\n\n```yaml\nhead -n 20 /var/log/kubernetes/audit.log\n```",
    "workedExample": {
      "title": "Worked Example: Audit Logging for API Security",
      "code": "head -n 20 /var/log/kubernetes/audit.log",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Audit Logging for API Security.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Audit Logging for API Security.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Audit Logging for API Security\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "head -n 20 /var/log/kubernetes/audit.log",
    "hints": [
      "Write:\nhead -n 20 /var/log/kubernetes/audit.log"
    ],
    "testCases": [
      {
        "id": "cloud-119-tc-1",
        "description": "Verifies correct cloud configuration for Audit Logging for API Security",
        "testFn": "code.includes('audit.log')"
      }
    ]
  },
  {
    "id": "cloud-120-imagepullsecrets-for-private-r",
    "title": "120. ImagePullSecrets for Private Registries",
    "slug": "lesson-120-imagepullsecrets-for-private-r",
    "language": "cloud",
    "category": "Module 8: Configuration, Secrets & Security (RBAC)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Supply authentication credentials to pull images from authenticated Docker registries.",
    "concepts": [
      "ImagePullSecrets for Private Registries",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ImagePullSecrets for Private Registries standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ImagePullSecrets for Private Registries\n\nSupply authentication credentials to pull images from authenticated Docker registries.\n\n```yaml\nimagePullSecrets:\n- name: regcred\n```",
    "workedExample": {
      "title": "Worked Example: ImagePullSecrets for Private Registries",
      "code": "imagePullSecrets:\n- name: regcred",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ImagePullSecrets for Private Registries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ImagePullSecrets for Private Registries.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ImagePullSecrets for Private Registries\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "imagePullSecrets:\n- name: regcred",
    "hints": [
      "Write:\nimagePullSecrets:\n- name: regcred"
    ],
    "testCases": [
      {
        "id": "cloud-120-tc-1",
        "description": "Verifies correct cloud configuration for ImagePullSecrets for Private Registries",
        "testFn": "code.includes('imagePullSecrets:')"
      }
    ]
  },
  {
    "id": "cloud-121-volumes-emptydir-for-ephemeral",
    "title": "121. Volumes: emptyDir for Ephemeral Shared Cache",
    "slug": "lesson-121-volumes-emptydir-for-ephemeral",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fast scratch space shared across all containers in a single pod lifetime.",
    "concepts": [
      "Volumes: emptyDir for Ephemeral Shared Cache",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Volumes: emptyDir for Ephemeral Shared Cache standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Volumes: emptyDir for Ephemeral Shared Cache\n\nFast scratch space shared across all containers in a single pod lifetime.\n\n```yaml\nvolumes:\n- name: cache-vol\n  emptyDir: {}\n```",
    "workedExample": {
      "title": "Worked Example: Volumes: emptyDir for Ephemeral Shared Cache",
      "code": "volumes:\n- name: cache-vol\n  emptyDir: {}",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Volumes: emptyDir for Ephemeral Shared Cache.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Volumes: emptyDir for Ephemeral Shared Cache.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Volumes: emptyDir for Ephemeral Shared Cache\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "volumes:\n- name: cache-vol\n  emptyDir: {}",
    "hints": [
      "Write:\nvolumes:\n- name: cache-vol\n  emptyDir: {}"
    ],
    "testCases": [
      {
        "id": "cloud-121-tc-1",
        "description": "Verifies correct cloud configuration for Volumes: emptyDir for Ephemeral Shared Cache",
        "testFn": "code.includes('emptyDir: {}')"
      }
    ]
  },
  {
    "id": "cloud-122-persistentvolumes-pv-cluster-s",
    "title": "122. PersistentVolumes (PV): Cluster Storage Provisioning",
    "slug": "lesson-122-persistentvolumes-pv-cluster-s",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Administrator-provisioned storage pools decoupled from pod lifecycles.",
    "concepts": [
      "PersistentVolumes (PV): Cluster Storage Provisioning",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: PersistentVolumes (PV): Cluster Storage Provisioning standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### PersistentVolumes (PV): Cluster Storage Provisioning\n\nAdministrator-provisioned storage pools decoupled from pod lifecycles.\n\n```yaml\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-volume\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: \"/mnt/data\"\n```",
    "workedExample": {
      "title": "Worked Example: PersistentVolumes (PV): Cluster Storage Provisioning",
      "code": "apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-volume\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: \"/mnt/data\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for PersistentVolumes (PV): Cluster Storage Provisioning.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of PersistentVolumes (PV): Cluster Storage Provisioning.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for PersistentVolumes (PV): Cluster Storage Provisioning\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-volume\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: \"/mnt/data\"",
    "hints": [
      "Write:\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-volume\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: \"/mnt/data\""
    ],
    "testCases": [
      {
        "id": "cloud-122-tc-1",
        "description": "Verifies correct cloud configuration for PersistentVolumes (PV): Cluster Storage Provisioning",
        "testFn": "code.includes('kind: PersistentVolume')"
      }
    ]
  },
  {
    "id": "cloud-123-persistentvolumeclaims-pvc-use",
    "title": "123. PersistentVolumeClaims (PVC): User Storage Requests",
    "slug": "lesson-123-persistentvolumeclaims-pvc-use",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Request specific capacity and access modes from the cluster storage pool.",
    "concepts": [
      "PersistentVolumeClaims (PVC): User Storage Requests",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: PersistentVolumeClaims (PVC): User Storage Requests standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### PersistentVolumeClaims (PVC): User Storage Requests\n\nRequest specific capacity and access modes from the cluster storage pool.\n\n```yaml\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 5Gi\n```",
    "workedExample": {
      "title": "Worked Example: PersistentVolumeClaims (PVC): User Storage Requests",
      "code": "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 5Gi",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for PersistentVolumeClaims (PVC): User Storage Requests.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of PersistentVolumeClaims (PVC): User Storage Requests.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for PersistentVolumeClaims (PVC): User Storage Requests\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 5Gi",
    "hints": [
      "Write:\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 5Gi"
    ],
    "testCases": [
      {
        "id": "cloud-123-tc-1",
        "description": "Verifies correct cloud configuration for PersistentVolumeClaims (PVC): User Storage Requests",
        "testFn": "code.includes('kind: PersistentVolumeClaim')"
      }
    ]
  },
  {
    "id": "cloud-124-storageclasses-dynamic-provisi",
    "title": "124. StorageClasses & Dynamic Provisioning",
    "slug": "lesson-124-storageclasses-dynamic-provisi",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automatically carve out cloud block storage on demand when PVC is submitted.",
    "concepts": [
      "StorageClasses & Dynamic Provisioning",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: StorageClasses & Dynamic Provisioning standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### StorageClasses & Dynamic Provisioning\n\nAutomatically carve out cloud block storage on demand when PVC is submitted.\n\n```yaml\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast-ssd\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3\n```",
    "workedExample": {
      "title": "Worked Example: StorageClasses & Dynamic Provisioning",
      "code": "apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast-ssd\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for StorageClasses & Dynamic Provisioning.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of StorageClasses & Dynamic Provisioning.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for StorageClasses & Dynamic Provisioning\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast-ssd\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3",
    "hints": [
      "Write:\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast-ssd\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3"
    ],
    "testCases": [
      {
        "id": "cloud-124-tc-1",
        "description": "Verifies correct cloud configuration for StorageClasses & Dynamic Provisioning",
        "testFn": "code.includes('kind: StorageClass')"
      }
    ]
  },
  {
    "id": "cloud-125-access-modes-readwriteonce-rea",
    "title": "125. Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
    "slug": "lesson-125-access-modes-readwriteonce-rea",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Understand single-node vs shared multi-node volume attachment constraints.",
    "concepts": [
      "Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany\n\nUnderstand single-node vs shared multi-node volume attachment constraints.\n\n```yaml\necho \"RWO: Single Node | ROX: Multi-Node Read | RWX: Multi-Node Shared (NFS/EFS)\"\n```",
    "workedExample": {
      "title": "Worked Example: Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
      "code": "echo \"RWO: Single Node | ROX: Multi-Node Read | RWX: Multi-Node Shared (NFS/EFS)\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"RWO: Single Node | ROX: Multi-Node Read | RWX: Multi-Node Shared (NFS/EFS)\"",
    "hints": [
      "Write:\necho \"RWO: Single Node | ROX: Multi-Node Read | RWX: Multi-Node Shared (NFS/EFS)\""
    ],
    "testCases": [
      {
        "id": "cloud-125-tc-1",
        "description": "Verifies correct cloud configuration for Access Modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
        "testFn": "code.includes('RWO: Single Node')"
      }
    ]
  },
  {
    "id": "cloud-126-volume-reclaim-policies-retain",
    "title": "126. Volume Reclaim Policies (Retain vs Delete)",
    "slug": "lesson-126-volume-reclaim-policies-retain",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decide whether underlying storage is preserved or purged when PVC is deleted.",
    "concepts": [
      "Volume Reclaim Policies (Retain vs Delete)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Volume Reclaim Policies (Retain vs Delete) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Volume Reclaim Policies (Retain vs Delete)\n\nDecide whether underlying storage is preserved or purged when PVC is deleted.\n\n```yaml\nspec:\n  persistentVolumeReclaimPolicy: Retain\n```",
    "workedExample": {
      "title": "Worked Example: Volume Reclaim Policies (Retain vs Delete)",
      "code": "spec:\n  persistentVolumeReclaimPolicy: Retain",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Volume Reclaim Policies (Retain vs Delete).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Volume Reclaim Policies (Retain vs Delete).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Volume Reclaim Policies (Retain vs Delete)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "spec:\n  persistentVolumeReclaimPolicy: Retain",
    "hints": [
      "Write:\nspec:\n  persistentVolumeReclaimPolicy: Retain"
    ],
    "testCases": [
      {
        "id": "cloud-126-tc-1",
        "description": "Verifies correct cloud configuration for Volume Reclaim Policies (Retain vs Delete)",
        "testFn": "code.includes('persistentVolumeReclaimPolicy: Retain')"
      }
    ]
  },
  {
    "id": "cloud-127-statefulsets-managing-stateful",
    "title": "127. StatefulSets: Managing Stateful Workloads",
    "slug": "lesson-127-statefulsets-managing-stateful",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Orchestrate databases requiring stable persistent identities and dedicated storage.",
    "concepts": [
      "StatefulSets: Managing Stateful Workloads",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: StatefulSets: Managing Stateful Workloads standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### StatefulSets: Managing Stateful Workloads\n\nOrchestrate databases requiring stable persistent identities and dedicated storage.\n\n```yaml\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: db-cluster\nspec:\n  serviceName: \"db-headless\"\n  replicas: 3\n```",
    "workedExample": {
      "title": "Worked Example: StatefulSets: Managing Stateful Workloads",
      "code": "apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: db-cluster\nspec:\n  serviceName: \"db-headless\"\n  replicas: 3",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for StatefulSets: Managing Stateful Workloads.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of StatefulSets: Managing Stateful Workloads.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for StatefulSets: Managing Stateful Workloads\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: db-cluster\nspec:\n  serviceName: \"db-headless\"\n  replicas: 3",
    "hints": [
      "Write:\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: db-cluster\nspec:\n  serviceName: \"db-headless\"\n  replicas: 3"
    ],
    "testCases": [
      {
        "id": "cloud-127-tc-1",
        "description": "Verifies correct cloud configuration for StatefulSets: Managing Stateful Workloads",
        "testFn": "code.includes('kind: StatefulSet')"
      }
    ]
  },
  {
    "id": "cloud-128-stable-network-identities-head",
    "title": "128. Stable Network Identities & Headless Services",
    "slug": "lesson-128-stable-network-identities-head",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Create ClusterIP: None services providing direct DNS routing to individual stateful replicas.",
    "concepts": [
      "Stable Network Identities & Headless Services",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Stable Network Identities & Headless Services standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Stable Network Identities & Headless Services\n\nCreate ClusterIP: None services providing direct DNS routing to individual stateful replicas.\n\n```yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: db-headless\nspec:\n  clusterIP: None\n  selector:\n    app: db\n```",
    "workedExample": {
      "title": "Worked Example: Stable Network Identities & Headless Services",
      "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: db-headless\nspec:\n  clusterIP: None\n  selector:\n    app: db",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Stable Network Identities & Headless Services.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stable Network Identities & Headless Services.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Stable Network Identities & Headless Services\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: v1\nkind: Service\nmetadata:\n  name: db-headless\nspec:\n  clusterIP: None\n  selector:\n    app: db",
    "hints": [
      "Write:\napiVersion: v1\nkind: Service\nmetadata:\n  name: db-headless\nspec:\n  clusterIP: None\n  selector:\n    app: db"
    ],
    "testCases": [
      {
        "id": "cloud-128-tc-1",
        "description": "Verifies correct cloud configuration for Stable Network Identities & Headless Services",
        "testFn": "code.includes('clusterIP: None')"
      }
    ]
  },
  {
    "id": "cloud-129-volumeclaimtemplates-in-statef",
    "title": "129. VolumeClaimTemplates in StatefulSets",
    "slug": "lesson-129-volumeclaimtemplates-in-statef",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automatically provision dedicated, isolated persistent volumes for every stateful replica.",
    "concepts": [
      "VolumeClaimTemplates in StatefulSets",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: VolumeClaimTemplates in StatefulSets standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### VolumeClaimTemplates in StatefulSets\n\nAutomatically provision dedicated, isolated persistent volumes for every stateful replica.\n\n```yaml\nvolumeClaimTemplates:\n- metadata:\n    name: data\n  spec:\n    accessModes: [ \"ReadWriteOnce\" ]\n    resources:\n      requests:\n        storage: 20Gi\n```",
    "workedExample": {
      "title": "Worked Example: VolumeClaimTemplates in StatefulSets",
      "code": "volumeClaimTemplates:\n- metadata:\n    name: data\n  spec:\n    accessModes: [ \"ReadWriteOnce\" ]\n    resources:\n      requests:\n        storage: 20Gi",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for VolumeClaimTemplates in StatefulSets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of VolumeClaimTemplates in StatefulSets.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for VolumeClaimTemplates in StatefulSets\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "volumeClaimTemplates:\n- metadata:\n    name: data\n  spec:\n    accessModes: [ \"ReadWriteOnce\" ]\n    resources:\n      requests:\n        storage: 20Gi",
    "hints": [
      "Write:\nvolumeClaimTemplates:\n- metadata:\n    name: data\n  spec:\n    accessModes: [ \"ReadWriteOnce\" ]\n    resources:\n      requests:\n        storage: 20Gi"
    ],
    "testCases": [
      {
        "id": "cloud-129-tc-1",
        "description": "Verifies correct cloud configuration for VolumeClaimTemplates in StatefulSets",
        "testFn": "code.includes('volumeClaimTemplates:')"
      }
    ]
  },
  {
    "id": "cloud-130-ordered-deployment-scaling-gua",
    "title": "130. Ordered Deployment & Scaling Guarantees",
    "slug": "lesson-130-ordered-deployment-scaling-gua",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "StatefulSet pods start sequentially (0, 1, 2) and terminate in reverse order.",
    "concepts": [
      "Ordered Deployment & Scaling Guarantees",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Ordered Deployment & Scaling Guarantees standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Ordered Deployment & Scaling Guarantees\n\nStatefulSet pods start sequentially (0, 1, 2) and terminate in reverse order.\n\n```yaml\nkubectl get pods -l app=db-cluster\n```",
    "workedExample": {
      "title": "Worked Example: Ordered Deployment & Scaling Guarantees",
      "code": "kubectl get pods -l app=db-cluster",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Ordered Deployment & Scaling Guarantees.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ordered Deployment & Scaling Guarantees.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Ordered Deployment & Scaling Guarantees\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get pods -l app=db-cluster",
    "hints": [
      "Write:\nkubectl get pods -l app=db-cluster"
    ],
    "testCases": [
      {
        "id": "cloud-130-tc-1",
        "description": "Verifies correct cloud configuration for Ordered Deployment & Scaling Guarantees",
        "testFn": "code.includes('kubectl get pods -l')"
      }
    ]
  },
  {
    "id": "cloud-131-volume-snapshotting-restore",
    "title": "131. Volume Snapshotting & Restore",
    "slug": "lesson-131-volume-snapshotting-restore",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Create point-in-time storage snapshots for disaster recovery backups.",
    "concepts": [
      "Volume Snapshotting & Restore",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Volume Snapshotting & Restore standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Volume Snapshotting & Restore\n\nCreate point-in-time storage snapshots for disaster recovery backups.\n\n```yaml\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: db-snapshot\nspec:\n  source:\n    persistentVolumeClaimName: app-pvc\n```",
    "workedExample": {
      "title": "Worked Example: Volume Snapshotting & Restore",
      "code": "apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: db-snapshot\nspec:\n  source:\n    persistentVolumeClaimName: app-pvc",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Volume Snapshotting & Restore.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Volume Snapshotting & Restore.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Volume Snapshotting & Restore\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: db-snapshot\nspec:\n  source:\n    persistentVolumeClaimName: app-pvc",
    "hints": [
      "Write:\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: db-snapshot\nspec:\n  source:\n    persistentVolumeClaimName: app-pvc"
    ],
    "testCases": [
      {
        "id": "cloud-131-tc-1",
        "description": "Verifies correct cloud configuration for Volume Snapshotting & Restore",
        "testFn": "code.includes('kind: VolumeSnapshot')"
      }
    ]
  },
  {
    "id": "cloud-132-volume-expansion",
    "title": "132. Volume Expansion",
    "slug": "lesson-132-volume-expansion",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Expand PVC capacity dynamically without taking database workloads offline.",
    "concepts": [
      "Volume Expansion",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Volume Expansion standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Volume Expansion\n\nExpand PVC capacity dynamically without taking database workloads offline.\n\n```yaml\nkubectl patch pvc app-pvc -p '{\"spec\":{\"resources\":{\"requests\":{\"storage\":\"50Gi\"}}}}'\n```",
    "workedExample": {
      "title": "Worked Example: Volume Expansion",
      "code": "kubectl patch pvc app-pvc -p '{\"spec\":{\"resources\":{\"requests\":{\"storage\":\"50Gi\"}}}}'",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Volume Expansion.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Volume Expansion.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Volume Expansion\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl patch pvc app-pvc -p '{\"spec\":{\"resources\":{\"requests\":{\"storage\":\"50Gi\"}}}}'",
    "hints": [
      "Write:\nkubectl patch pvc app-pvc -p '{\"spec\":{\"resources\":{\"requests\":{\"storage\":\"50Gi\"}}}}'"
    ],
    "testCases": [
      {
        "id": "cloud-132-tc-1",
        "description": "Verifies correct cloud configuration for Volume Expansion",
        "testFn": "code.includes('patch pvc')"
      }
    ]
  },
  {
    "id": "cloud-133-ephemeral-volumes-generic-ephe",
    "title": "133. Ephemeral Volumes (generic ephemeral inline volumes)",
    "slug": "lesson-133-ephemeral-volumes-generic-ephe",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Embed scratch volumes that follow pod lifecycles automatically.",
    "concepts": [
      "Ephemeral Volumes (generic ephemeral inline volumes)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Ephemeral Volumes (generic ephemeral inline volumes) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Ephemeral Volumes (generic ephemeral inline volumes)\n\nEmbed scratch volumes that follow pod lifecycles automatically.\n\n```yaml\nvolumes:\n- name: scratch\n  ephemeral:\n    volumeClaimTemplate:\n      spec:\n        resources:\n          requests:\n            storage: 2Gi\n```",
    "workedExample": {
      "title": "Worked Example: Ephemeral Volumes (generic ephemeral inline volumes)",
      "code": "volumes:\n- name: scratch\n  ephemeral:\n    volumeClaimTemplate:\n      spec:\n        resources:\n          requests:\n            storage: 2Gi",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Ephemeral Volumes (generic ephemeral inline volumes).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ephemeral Volumes (generic ephemeral inline volumes).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Ephemeral Volumes (generic ephemeral inline volumes)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "volumes:\n- name: scratch\n  ephemeral:\n    volumeClaimTemplate:\n      spec:\n        resources:\n          requests:\n            storage: 2Gi",
    "hints": [
      "Write:\nvolumes:\n- name: scratch\n  ephemeral:\n    volumeClaimTemplate:\n      spec:\n        resources:\n          requests:\n            storage: 2Gi"
    ],
    "testCases": [
      {
        "id": "cloud-133-tc-1",
        "description": "Verifies correct cloud configuration for Ephemeral Volumes (generic ephemeral inline volumes)",
        "testFn": "code.includes('ephemeral:')"
      }
    ]
  },
  {
    "id": "cloud-134-statefulset-rolling-updates-pa",
    "title": "134. StatefulSet Rolling Updates & Partitioning",
    "slug": "lesson-134-statefulset-rolling-updates-pa",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Roll out updates selectively to specific partition indexes for canary validation.",
    "concepts": [
      "StatefulSet Rolling Updates & Partitioning",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: StatefulSet Rolling Updates & Partitioning standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### StatefulSet Rolling Updates & Partitioning\n\nRoll out updates selectively to specific partition indexes for canary validation.\n\n```yaml\nupdateStrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    partition: 2\n```",
    "workedExample": {
      "title": "Worked Example: StatefulSet Rolling Updates & Partitioning",
      "code": "updateStrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    partition: 2",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for StatefulSet Rolling Updates & Partitioning.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of StatefulSet Rolling Updates & Partitioning.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for StatefulSet Rolling Updates & Partitioning\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "updateStrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    partition: 2",
    "hints": [
      "Write:\nupdateStrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    partition: 2"
    ],
    "testCases": [
      {
        "id": "cloud-134-tc-1",
        "description": "Verifies correct cloud configuration for StatefulSet Rolling Updates & Partitioning",
        "testFn": "code.includes('partition: 2')"
      }
    ]
  },
  {
    "id": "cloud-135-high-availability-database-arc",
    "title": "135. High-Availability Database Architectures (PostgreSQL / Redis)",
    "slug": "lesson-135-high-availability-database-arc",
    "language": "cloud",
    "category": "Module 9: Persistent Storage & StatefulSets",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Deploy primary-replica stateful clusters with automatic failover.",
    "concepts": [
      "High-Availability Database Architectures (PostgreSQL / Redis)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: High-Availability Database Architectures (PostgreSQL / Redis) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### High-Availability Database Architectures (PostgreSQL / Redis)\n\nDeploy primary-replica stateful clusters with automatic failover.\n\n```yaml\necho \"Deploying Postgres HA with Patroni operator and distributed consensus\"\n```",
    "workedExample": {
      "title": "Worked Example: High-Availability Database Architectures (PostgreSQL / Redis)",
      "code": "echo \"Deploying Postgres HA with Patroni operator and distributed consensus\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for High-Availability Database Architectures (PostgreSQL / Redis).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of High-Availability Database Architectures (PostgreSQL / Redis).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for High-Availability Database Architectures (PostgreSQL / Redis)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"Deploying Postgres HA with Patroni operator and distributed consensus\"",
    "hints": [
      "Write:\necho \"Deploying Postgres HA with Patroni operator and distributed consensus\""
    ],
    "testCases": [
      {
        "id": "cloud-135-tc-1",
        "description": "Verifies correct cloud configuration for High-Availability Database Architectures (PostgreSQL / Redis)",
        "testFn": "code.includes('Patroni operator')"
      }
    ]
  },
  {
    "id": "cloud-136-liveness-probes-detecting-cras",
    "title": "136. Liveness Probes: Detecting Crashed Containers",
    "slug": "lesson-136-liveness-probes-detecting-cras",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Restart frozen or deadlocked containers automatically.",
    "concepts": [
      "Liveness Probes: Detecting Crashed Containers",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Liveness Probes: Detecting Crashed Containers standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Liveness Probes: Detecting Crashed Containers\n\nRestart frozen or deadlocked containers automatically.\n\n```yaml\nlivenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 15\n  periodSeconds: 20\n```",
    "workedExample": {
      "title": "Worked Example: Liveness Probes: Detecting Crashed Containers",
      "code": "livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 15\n  periodSeconds: 20",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Liveness Probes: Detecting Crashed Containers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Liveness Probes: Detecting Crashed Containers.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Liveness Probes: Detecting Crashed Containers\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 15\n  periodSeconds: 20",
    "hints": [
      "Write:\nlivenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 15\n  periodSeconds: 20"
    ],
    "testCases": [
      {
        "id": "cloud-136-tc-1",
        "description": "Verifies correct cloud configuration for Liveness Probes: Detecting Crashed Containers",
        "testFn": "code.includes('livenessProbe:') && code.includes('/healthz')"
      }
    ]
  },
  {
    "id": "cloud-137-readiness-probes-traffic-gatin",
    "title": "137. Readiness Probes: Traffic Gating",
    "slug": "lesson-137-readiness-probes-traffic-gatin",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hold incoming network traffic until application caches and DB connections warm up.",
    "concepts": [
      "Readiness Probes: Traffic Gating",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Readiness Probes: Traffic Gating standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Readiness Probes: Traffic Gating\n\nHold incoming network traffic until application caches and DB connections warm up.\n\n```yaml\nreadinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080\n  periodSeconds: 5\n```",
    "workedExample": {
      "title": "Worked Example: Readiness Probes: Traffic Gating",
      "code": "readinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080\n  periodSeconds: 5",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Readiness Probes: Traffic Gating.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Readiness Probes: Traffic Gating.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Readiness Probes: Traffic Gating\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "readinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080\n  periodSeconds: 5",
    "hints": [
      "Write:\nreadinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080\n  periodSeconds: 5"
    ],
    "testCases": [
      {
        "id": "cloud-137-tc-1",
        "description": "Verifies correct cloud configuration for Readiness Probes: Traffic Gating",
        "testFn": "code.includes('readinessProbe:') && code.includes('/ready')"
      }
    ]
  },
  {
    "id": "cloud-138-startup-probes-handling-slow-i",
    "title": "138. Startup Probes: Handling Slow Initializations",
    "slug": "lesson-138-startup-probes-handling-slow-i",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent premature liveness probe kills during long legacy boot cycles.",
    "concepts": [
      "Startup Probes: Handling Slow Initializations",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Startup Probes: Handling Slow Initializations standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Startup Probes: Handling Slow Initializations\n\nPrevent premature liveness probe kills during long legacy boot cycles.\n\n```yaml\nstartupProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  failureThreshold: 30\n  periodSeconds: 10\n```",
    "workedExample": {
      "title": "Worked Example: Startup Probes: Handling Slow Initializations",
      "code": "startupProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  failureThreshold: 30\n  periodSeconds: 10",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Startup Probes: Handling Slow Initializations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Startup Probes: Handling Slow Initializations.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Startup Probes: Handling Slow Initializations\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "startupProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  failureThreshold: 30\n  periodSeconds: 10",
    "hints": [
      "Write:\nstartupProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  failureThreshold: 30\n  periodSeconds: 10"
    ],
    "testCases": [
      {
        "id": "cloud-138-tc-1",
        "description": "Verifies correct cloud configuration for Startup Probes: Handling Slow Initializations",
        "testFn": "code.includes('startupProbe:')"
      }
    ]
  },
  {
    "id": "cloud-139-horizontal-pod-autoscaling-hpa",
    "title": "139. Horizontal Pod Autoscaling (HPA)",
    "slug": "lesson-139-horizontal-pod-autoscaling-hpa",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Automatically scale pod replicas based on CPU, memory, or custom metrics.",
    "concepts": [
      "Horizontal Pod Autoscaling (HPA)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Horizontal Pod Autoscaling (HPA) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Horizontal Pod Autoscaling (HPA)\n\nAutomatically scale pod replicas based on CPU, memory, or custom metrics.\n\n```yaml\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app-deployment\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 75\n```",
    "workedExample": {
      "title": "Worked Example: Horizontal Pod Autoscaling (HPA)",
      "code": "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app-deployment\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 75",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Horizontal Pod Autoscaling (HPA).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Horizontal Pod Autoscaling (HPA).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Horizontal Pod Autoscaling (HPA)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app-deployment\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 75",
    "hints": [
      "Write:\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app-deployment\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 75"
    ],
    "testCases": [
      {
        "id": "cloud-139-tc-1",
        "description": "Verifies correct cloud configuration for Horizontal Pod Autoscaling (HPA)",
        "testFn": "code.includes('kind: HorizontalPodAutoscaler') && code.includes('averageUtilization: 75')"
      }
    ]
  },
  {
    "id": "cloud-140-vertical-pod-autoscaling-vpa-c",
    "title": "140. Vertical Pod Autoscaling (VPA) & Cluster Autoscaler",
    "slug": "lesson-140-vertical-pod-autoscaling-vpa-c",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Dynamically rightsize container CPU/RAM requests and add cloud VM nodes.",
    "concepts": [
      "Vertical Pod Autoscaling (VPA) & Cluster Autoscaler",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Vertical Pod Autoscaling (VPA) & Cluster Autoscaler standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Vertical Pod Autoscaling (VPA) & Cluster Autoscaler\n\nDynamically rightsize container CPU/RAM requests and add cloud VM nodes.\n\n```yaml\nkubectl get vpa\n```",
    "workedExample": {
      "title": "Worked Example: Vertical Pod Autoscaling (VPA) & Cluster Autoscaler",
      "code": "kubectl get vpa",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Vertical Pod Autoscaling (VPA) & Cluster Autoscaler.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vertical Pod Autoscaling (VPA) & Cluster Autoscaler.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Vertical Pod Autoscaling (VPA) & Cluster Autoscaler\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get vpa",
    "hints": [
      "Write:\nkubectl get vpa"
    ],
    "testCases": [
      {
        "id": "cloud-140-tc-1",
        "description": "Verifies correct cloud configuration for Vertical Pod Autoscaling (VPA) & Cluster Autoscaler",
        "testFn": "code.includes('kubectl get vpa')"
      }
    ]
  },
  {
    "id": "cloud-141-helm-the-kubernetes-package-ma",
    "title": "141. Helm: The Kubernetes Package Manager",
    "slug": "lesson-141-helm-the-kubernetes-package-ma",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Package, configure, and release complex multi-manifest applications as unified Charts.",
    "concepts": [
      "Helm: The Kubernetes Package Manager",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Helm: The Kubernetes Package Manager standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Helm: The Kubernetes Package Manager\n\nPackage, configure, and release complex multi-manifest applications as unified Charts.\n\n```yaml\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install my-redis bitnami/redis\n```",
    "workedExample": {
      "title": "Worked Example: Helm: The Kubernetes Package Manager",
      "code": "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install my-redis bitnami/redis",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Helm: The Kubernetes Package Manager.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Helm: The Kubernetes Package Manager.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Helm: The Kubernetes Package Manager\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install my-redis bitnami/redis",
    "hints": [
      "Write:\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install my-redis bitnami/redis"
    ],
    "testCases": [
      {
        "id": "cloud-141-tc-1",
        "description": "Verifies correct cloud configuration for Helm: The Kubernetes Package Manager",
        "testFn": "code.includes('helm install')"
      }
    ]
  },
  {
    "id": "cloud-142-helm-chart-structure-values-ya",
    "title": "142. Helm Chart Structure (values.yaml, templates/)",
    "slug": "lesson-142-helm-chart-structure-values-ya",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Parametrize templates using Go templating and values.yaml defaults.",
    "concepts": [
      "Helm Chart Structure (values.yaml, templates/)",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Helm Chart Structure (values.yaml, templates/) standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Helm Chart Structure (values.yaml, templates/)\n\nParametrize templates using Go templating and values.yaml defaults.\n\n```yaml\nhelm create my-chart\nls -l my-chart/\n```",
    "workedExample": {
      "title": "Worked Example: Helm Chart Structure (values.yaml, templates/)",
      "code": "helm create my-chart\nls -l my-chart/",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Helm Chart Structure (values.yaml, templates/).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Helm Chart Structure (values.yaml, templates/).",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Helm Chart Structure (values.yaml, templates/)\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "helm create my-chart\nls -l my-chart/",
    "hints": [
      "Write:\nhelm create my-chart\nls -l my-chart/"
    ],
    "testCases": [
      {
        "id": "cloud-142-tc-1",
        "description": "Verifies correct cloud configuration for Helm Chart Structure (values.yaml, templates/)",
        "testFn": "code.includes('helm create')"
      }
    ]
  },
  {
    "id": "cloud-143-helm-upgrades-values-overrides",
    "title": "143. Helm Upgrades, Values Overrides & Rollbacks",
    "slug": "lesson-143-helm-upgrades-values-overrides",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Update deployed releases or rollback gracefully using Helm CLI.",
    "concepts": [
      "Helm Upgrades, Values Overrides & Rollbacks",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Helm Upgrades, Values Overrides & Rollbacks standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Helm Upgrades, Values Overrides & Rollbacks\n\nUpdate deployed releases or rollback gracefully using Helm CLI.\n\n```yaml\nhelm upgrade my-redis bitnami/redis --set replica.replicaCount=3\nhelm rollback my-redis 1\n```",
    "workedExample": {
      "title": "Worked Example: Helm Upgrades, Values Overrides & Rollbacks",
      "code": "helm upgrade my-redis bitnami/redis --set replica.replicaCount=3\nhelm rollback my-redis 1",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Helm Upgrades, Values Overrides & Rollbacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Helm Upgrades, Values Overrides & Rollbacks.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Helm Upgrades, Values Overrides & Rollbacks\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "helm upgrade my-redis bitnami/redis --set replica.replicaCount=3\nhelm rollback my-redis 1",
    "hints": [
      "Write:\nhelm upgrade my-redis bitnami/redis --set replica.replicaCount=3\nhelm rollback my-redis 1"
    ],
    "testCases": [
      {
        "id": "cloud-143-tc-1",
        "description": "Verifies correct cloud configuration for Helm Upgrades, Values Overrides & Rollbacks",
        "testFn": "code.includes('helm upgrade')"
      }
    ]
  },
  {
    "id": "cloud-144-gitops-principles-architecture",
    "title": "144. GitOps Principles & Architecture",
    "slug": "lesson-144-gitops-principles-architecture",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Git as single source of truth; automated continuous synchronization agents.",
    "concepts": [
      "GitOps Principles & Architecture",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: GitOps Principles & Architecture standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### GitOps Principles & Architecture\n\nGit as single source of truth; automated continuous synchronization agents.\n\n```yaml\necho \"GitOps: Declarative, Versioned, Pulled Automatically, Continuously Reconciled\"\n```",
    "workedExample": {
      "title": "Worked Example: GitOps Principles & Architecture",
      "code": "echo \"GitOps: Declarative, Versioned, Pulled Automatically, Continuously Reconciled\"",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for GitOps Principles & Architecture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GitOps Principles & Architecture.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for GitOps Principles & Architecture\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "echo \"GitOps: Declarative, Versioned, Pulled Automatically, Continuously Reconciled\"",
    "hints": [
      "Write:\necho \"GitOps: Declarative, Versioned, Pulled Automatically, Continuously Reconciled\""
    ],
    "testCases": [
      {
        "id": "cloud-144-tc-1",
        "description": "Verifies correct cloud configuration for GitOps Principles & Architecture",
        "testFn": "code.includes('GitOps: Declarative')"
      }
    ]
  },
  {
    "id": "cloud-145-argocd-declarative-continuous-",
    "title": "145. ArgoCD: Declarative Continuous Delivery",
    "slug": "lesson-145-argocd-declarative-continuous-",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Monitor Git repositories and synchronize desired states to Kubernetes clusters automatically.",
    "concepts": [
      "ArgoCD: Declarative Continuous Delivery",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: ArgoCD: Declarative Continuous Delivery standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### ArgoCD: Declarative Continuous Delivery\n\nMonitor Git repositories and synchronize desired states to Kubernetes clusters automatically.\n\n```yaml\nkubectl get applications -n argocd\n```",
    "workedExample": {
      "title": "Worked Example: ArgoCD: Declarative Continuous Delivery",
      "code": "kubectl get applications -n argocd",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for ArgoCD: Declarative Continuous Delivery.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ArgoCD: Declarative Continuous Delivery.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for ArgoCD: Declarative Continuous Delivery\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl get applications -n argocd",
    "hints": [
      "Write:\nkubectl get applications -n argocd"
    ],
    "testCases": [
      {
        "id": "cloud-145-tc-1",
        "description": "Verifies correct cloud configuration for ArgoCD: Declarative Continuous Delivery",
        "testFn": "code.includes('kubectl get applications -n argocd')"
      }
    ]
  },
  {
    "id": "cloud-146-fluxcd-gitops-controller-engin",
    "title": "146. FluxCD: GitOps Controller Engine",
    "slug": "lesson-146-fluxcd-gitops-controller-engin",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Git-native toolkit for building GitOps continuous delivery pipelines.",
    "concepts": [
      "FluxCD: GitOps Controller Engine",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: FluxCD: GitOps Controller Engine standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### FluxCD: GitOps Controller Engine\n\nGit-native toolkit for building GitOps continuous delivery pipelines.\n\n```yaml\nflux get kustomizations\n```",
    "workedExample": {
      "title": "Worked Example: FluxCD: GitOps Controller Engine",
      "code": "flux get kustomizations",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for FluxCD: GitOps Controller Engine.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of FluxCD: GitOps Controller Engine.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for FluxCD: GitOps Controller Engine\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "flux get kustomizations",
    "hints": [
      "Write:\nflux get kustomizations"
    ],
    "testCases": [
      {
        "id": "cloud-146-tc-1",
        "description": "Verifies correct cloud configuration for FluxCD: GitOps Controller Engine",
        "testFn": "code.includes('flux get kustomizations')"
      }
    ]
  },
  {
    "id": "cloud-147-cluster-observability-with-pro",
    "title": "147. Cluster Observability with Prometheus & Grafana",
    "slug": "lesson-147-cluster-observability-with-pro",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Scrape operational metrics and visualize cluster health dashboards.",
    "concepts": [
      "Cluster Observability with Prometheus & Grafana",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Cluster Observability with Prometheus & Grafana standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Cluster Observability with Prometheus & Grafana\n\nScrape operational metrics and visualize cluster health dashboards.\n\n```yaml\nkubectl top nodes\nkubectl top pods --all-namespaces\n```",
    "workedExample": {
      "title": "Worked Example: Cluster Observability with Prometheus & Grafana",
      "code": "kubectl top nodes\nkubectl top pods --all-namespaces",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Cluster Observability with Prometheus & Grafana.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cluster Observability with Prometheus & Grafana.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Cluster Observability with Prometheus & Grafana\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl top nodes\nkubectl top pods --all-namespaces",
    "hints": [
      "Write:\nkubectl top nodes\nkubectl top pods --all-namespaces"
    ],
    "testCases": [
      {
        "id": "cloud-147-tc-1",
        "description": "Verifies correct cloud configuration for Cluster Observability with Prometheus & Grafana",
        "testFn": "code.includes('kubectl top nodes')"
      }
    ]
  },
  {
    "id": "cloud-148-centralized-logging-with-loki-",
    "title": "148. Centralized Logging with Loki / OpenSearch",
    "slug": "lesson-148-centralized-logging-with-loki-",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stream cluster stdout/stderr logs for search and trace correlation.",
    "concepts": [
      "Centralized Logging with Loki / OpenSearch",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Centralized Logging with Loki / OpenSearch standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Centralized Logging with Loki / OpenSearch\n\nStream cluster stdout/stderr logs for search and trace correlation.\n\n```yaml\nkubectl logs -l app=backend --tail=100 -f\n```",
    "workedExample": {
      "title": "Worked Example: Centralized Logging with Loki / OpenSearch",
      "code": "kubectl logs -l app=backend --tail=100 -f",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Centralized Logging with Loki / OpenSearch.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Centralized Logging with Loki / OpenSearch.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Centralized Logging with Loki / OpenSearch\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl logs -l app=backend --tail=100 -f",
    "hints": [
      "Write:\nkubectl logs -l app=backend --tail=100 -f"
    ],
    "testCases": [
      {
        "id": "cloud-148-tc-1",
        "description": "Verifies correct cloud configuration for Centralized Logging with Loki / OpenSearch",
        "testFn": "code.includes('kubectl logs -l')"
      }
    ]
  },
  {
    "id": "cloud-149-disaster-recovery-with-velero",
    "title": "149. Disaster Recovery with Velero",
    "slug": "lesson-149-disaster-recovery-with-velero",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Backup, migrate, and restore whole cluster objects and persistent volumes.",
    "concepts": [
      "Disaster Recovery with Velero",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Disaster Recovery with Velero standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Disaster Recovery with Velero\n\nBackup, migrate, and restore whole cluster objects and persistent volumes.\n\n```yaml\nvelero backup create full-cluster-backup --include-namespaces prod\n```",
    "workedExample": {
      "title": "Worked Example: Disaster Recovery with Velero",
      "code": "velero backup create full-cluster-backup --include-namespaces prod",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Disaster Recovery with Velero.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Disaster Recovery with Velero.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Disaster Recovery with Velero\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "velero backup create full-cluster-backup --include-namespaces prod",
    "hints": [
      "Write:\nvelero backup create full-cluster-backup --include-namespaces prod"
    ],
    "testCases": [
      {
        "id": "cloud-149-tc-1",
        "description": "Verifies correct cloud configuration for Disaster Recovery with Velero",
        "testFn": "code.includes('velero backup create')"
      }
    ]
  },
  {
    "id": "cloud-150-zero-downtime-cluster-node-dra",
    "title": "150. Zero-Downtime Cluster Node Draining & Upgrades",
    "slug": "lesson-150-zero-downtime-cluster-node-dra",
    "language": "cloud",
    "category": "Module 10: Production Operations: Helm, Probes, HPA & GitOps",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safely evict all running workloads before terminating worker instances.",
    "concepts": [
      "Zero-Downtime Cluster Node Draining & Upgrades",
      "Kubernetes",
      "Cloud Native",
      "Cloud & Kubernetes Orchestration"
    ],
    "analogy": "Like an automated global logistics shipping port: Zero-Downtime Cluster Node Draining & Upgrades standardizes, schedules, and secures application delivery at cloud scale.",
    "explanationMarkdown": "### Zero-Downtime Cluster Node Draining & Upgrades\n\nSafely evict all running workloads before terminating worker instances.\n\n```yaml\nkubectl cordon worker-1\nkubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data\n```",
    "workedExample": {
      "title": "Worked Example: Zero-Downtime Cluster Node Draining & Upgrades",
      "code": "kubectl cordon worker-1\nkubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data",
      "explanation": "\u2022 Demonstrates cloud-native configuration or CLI invocation for Zero-Downtime Cluster Node Draining & Upgrades.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Zero-Downtime Cluster Node Draining & Upgrades.",
      "Enter the solution command or manifest into the editor.",
      "Click 'Check Answer' to test the configuration."
    ],
    "initialCode": "# Step 1: Run Cloud & Kubernetes command for Zero-Downtime Cluster Node Draining & Upgrades\n# TODO: Write command or manifest below\n\n",
    "solutionCode": "kubectl cordon worker-1\nkubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data",
    "hints": [
      "Write:\nkubectl cordon worker-1\nkubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data"
    ],
    "testCases": [
      {
        "id": "cloud-150-tc-1",
        "description": "Verifies correct cloud configuration for Zero-Downtime Cluster Node Draining & Upgrades",
        "testFn": "code.includes('kubectl cordon') && code.includes('kubectl drain')"
      }
    ]
  }
]
};
