import { GuidedProject } from '../../types';

export const BASH_SYS_HEALTH_PROJECT: GuidedProject = {
  id: 'project-bash-sys-health',
  title: 'Automated Server Health & Resource Daemon',
  slug: 'bash-sys-health-daemon',
  language: 'bash',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Write a robust Unix shell daemon monitoring CPU, memory, and disk utilization with alert logging.',
  description: 'System administrators and DevOps engineers rely on automated shell scripts to keep Linux servers healthy. You will write a production bash monitoring script that inspects memory usage via free, disk thresholds via df, extracts system load, and formats structured syslog entries.',
  previewType: 'console',
  whatYouWillBuild: [
    'A shell script polling CPU, RAM, and Disk utilization percentages',
    'Configurable threshold alerts (e.g. DISK_ALERT_THRESHOLD=85)',
    'Standardized Syslog output formatting with ISO-8601 timestamps',
    'Signal trapping (trap SIGINT SIGTERM) for clean daemon shutdowns'
  ],
  skillsLearned: [
    'Linux command line tools (df, free, awk, grep, cut)',
    'POSIX shell variables and conditional arithmetic',
    'Signal trapping and process lifecycles',
    'Structured syslogging best practices'
  ],
  milestones: [
    {
      id: 'bash-sh-m1',
      stepNumber: 1,
      title: 'Milestone 1: Resource Polling & Threshold Logic',
      instructionMarkdown: `
### Milestone 1: Server Resource Monitor
Write a Bash script:
- Defines thresholds: \`CPU_WARN=80\`, \`MEM_WARN=85\`, \`DISK_WARN=90\`.
- Extracts:
  - Disk percentage on \`/\` using \`df -h / | awk 'NR==2 {print $5}' | tr -d '%'\`.
  - Memory percentage using \`free | awk '/Mem:/ {printf "%.0f", $3/$2 * 100}'\`.
- Prints alerts:
  - If \`DISK_USAGE >= DISK_WARN\`, outputs \`[CRITICAL] Disk space exceeded: X%\`.
  - Else outputs \`[OK] Systems normal: Disk=X%, Mem=Y%\`.
      `,
      starterCode: `#!/usr/bin/env bash

# Define thresholds
DISK_WARN=90
MEM_WARN=85

# Extract disk and memory percentages
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')
MEM_USAGE=$(free 2>/dev/null | awk '/Mem:/ {printf "%.0f", $3/$2 * 100}' || echo 45)

# Add conditional check and output message
`,
      solutionCode: `#!/usr/bin/env bash

DISK_WARN=90
MEM_WARN=85

DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')
MEM_USAGE=$(free 2>/dev/null | awk '/Mem:/ {printf "%.0f", $3/$2 * 100}' || echo 45)

if [ "$DISK_USAGE" -ge "$DISK_WARN" ]; then
    echo "[CRITICAL] Disk space exceeded: \${DISK_USAGE}%"
elif [ "$MEM_USAGE" -ge "$MEM_WARN" ]; then
    echo "[WARNING] Memory threshold exceeded: \${MEM_USAGE}%"
else
    echo "[OK] Systems normal: Disk=\${DISK_USAGE}%, Mem=\${MEM_USAGE}%"
fi
`,
      hints: [
        'Use [ "$DISK_USAGE" -ge "$DISK_WARN" ] for integer comparisons in bash.',
        'Use echo "[CRITICAL] ..." and echo "[OK] ...".'
      ],
      testCases: [
        {
          id: 'bash-sh-tc1',
          description: 'Script extracts disk and memory metrics and compares against thresholds',
          testFn: `(() => {
            return code.includes('DISK_USAGE') && code.includes('DISK_WARN') && (code.includes('-ge') || code.includes('>'));
          })()`,
          expectedMessage: 'Bash script must calculate usage and compare against thresholds'
        }
      ]
    }
  ]
};

export const BASH_LOG_ANALYZER_PROJECT: GuidedProject = {
  id: 'project-bash-log-analyzer',
  title: 'High-Volume Access Log Parser & Audit Analyzer',
  slug: 'bash-access-log-analyzer',
  language: 'bash',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Dissect massive Nginx/Apache web server logs using awk, sed, and pipes to detect attacks and traffic spikes.',
  description: 'When production systems suffer DDoS attacks or outage spikes, senior engineers turn to shell pipelines to triage immediately. You will build a high-performance log analyzer in bash using awk, sort, and uniq to parse thousands of HTTP request logs, identify top 404 endpoints, and flag aggressive brute-force IP addresses.',
  previewType: 'console',
  whatYouWillBuild: [
    'A high-performance pipeline parsing Combined Log Format (CLF) records',
    'Status code frequency aggregation (2xx, 3xx, 4xx, 5xx)',
    'Top 5 requested endpoints ranked by traffic volume',
    'Brute-force security detection isolating IPs generating excessive 401/403 responses'
  ],
  skillsLearned: [
    'Unix stream text processing with awk, sed, cut',
    'Sort, uniq -c, and head ranking pipelines',
    'Security log anomaly extraction',
    'Shell scripting performance optimization'
  ],
  milestones: [
    {
      id: 'bash-log-m1',
      stepNumber: 1,
      title: 'Milestone 1: Log Aggregator & Status Code Breakdown',
      instructionMarkdown: `
### Milestone 1: Log Status Breakdown
Write a script that processes an access log file passed as \`$1\`:
- Parses HTTP status code (column 9 in Combined Log Format).
- Outputs count of responses grouped by status code using \`awk '{print $9}' | sort | uniq -c | sort -rn\`.
- Extracts top 5 requested paths (column 7) with their hit count.
      `,
      starterCode: `#!/usr/bin/env bash

LOG_FILE="\${1:-access.log}"

# Check file exists
if [ ! -f "$LOG_FILE" ]; then
    echo "Log file not found: $LOG_FILE"
    exit 1
fi

echo "=== Status Code Distribution ==="
# Pipe awk and sort here

echo "=== Top 5 Requested Endpoints ==="
# Pipe awk, sort, uniq, and head here
`,
      solutionCode: `#!/usr/bin/env bash

LOG_FILE="\${1:-access.log}"

if [ ! -f "$LOG_FILE" ]; then
    echo "Log file not found: $LOG_FILE"
    exit 1
fi

echo "=== Status Code Distribution ==="
awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn

echo "=== Top 5 Requested Endpoints ==="
awk '{print $7}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -n 5
`,
      hints: [
        'Use awk \'{print $9}\' to extract status code column.',
        'Use sort | uniq -c | sort -rn to rank by frequency.'
      ],
      testCases: [
        {
          id: 'bash-log-tc1',
          description: 'Script uses awk, sort, uniq -c, and head to aggregate log statistics',
          testFn: `(() => {
            return code.includes('awk') && code.includes('sort') && code.includes('uniq -c');
          })()`,
          expectedMessage: 'Must use awk, sort, and uniq -c to aggregate log metrics'
        }
      ]
    }
  ]
};

export const BASH_BLUE_GREEN_PROJECT: GuidedProject = {
  id: 'project-bash-blue-green',
  title: 'Zero-Downtime Blue/Green Deployment Engine',
  slug: 'bash-blue-green-deployment',
  language: 'bash',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Implement a zero-downtime Blue/Green deployment automation script with curl health verification and atomic symlink rollbacks.',
  description: 'Automate enterprise release management from the terminal. You will write a production bash deployment script that spins up new app instances on an idle port (Green), verifies HTTP health endpoints with curl, atomically switches a live Nginx symlink to route live traffic, and triggers instant rollback if health probes fail.',
  previewType: 'console',
  whatYouWillBuild: [
    'An automated release directory packager creating versioned releases (/releases/v1.2.0)',
    'Target port detection toggling between Blue (port 8081) and Green (port 8082)',
    'A curl retry loop validating HTTP 200 health responses before cutting over',
    'Atomic symlink cutover (ln -sfn) and instant automated rollback on failure'
  ],
  skillsLearned: [
    'Zero-downtime release deployment architecture',
    'Atomic filesystem operations (ln -sfn)',
    'Automated curl health validation loops',
    'Rollback scripts and error trapping'
  ],
  milestones: [
    {
      id: 'bash-bg-m1',
      stepNumber: 1,
      title: 'Milestone 1: Atomic Symlink & Health Check Verification',
      instructionMarkdown: `
### Milestone 1: Blue/Green Switcher
Write a script:
- Verifies new release health on target port using curl:
  \`curl -s -o /dev/null -w "%{http_code}" "http://localhost:\$TARGET_PORT/health"\`
- If response is \`200\`:
  - Executes atomic symlink switch: \`ln -sfn "\$NEW_RELEASE_DIR" /var/www/current\`.
  - Outputs \`[SUCCESS] Deployed version to live symlink\`.
- Else:
  - Outputs \`[ROLLBACK] Health check failed with code \$STATUS. Rolling back.\`.
  - Exits with status \`1\`.
      `,
      starterCode: `#!/usr/bin/env bash

TARGET_PORT="\${1:-8082}"
NEW_RELEASE_DIR="\${2:-/releases/v2.0.0}"
LIVE_SYMLINK="/var/www/current"

# Check health with curl and perform atomic switch with ln -sfn
`,
      solutionCode: `#!/usr/bin/env bash

TARGET_PORT="\${1:-8082}"
NEW_RELEASE_DIR="\${2:-/releases/v2.0.0}"
LIVE_SYMLINK="/var/www/current"

STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:\${TARGET_PORT}/health" 2>/dev/null || echo "000")

if [ "$STATUS" = "200" ]; then
    ln -sfn "$NEW_RELEASE_DIR" "$LIVE_SYMLINK"
    echo "[SUCCESS] Deployed version to live symlink: $NEW_RELEASE_DIR"
    exit 0
else
    echo "[ROLLBACK] Health check failed with code $STATUS. Rolling back."
    exit 1
fi
`,
      hints: [
        'Use ln -sfn to atomically overwrite a symbolic link without deleting it first.',
        'Compare [ "$STATUS" = "200" ] before cutting over live traffic.'
      ],
      testCases: [
        {
          id: 'bash-bg-tc1',
          description: 'Script performs curl health check and atomic ln -sfn symlink cutover',
          testFn: `(() => {
            return code.includes('curl') && (code.includes('ln -sfn') || code.includes('ln -sf')) && code.includes('200');
          })()`,
          expectedMessage: 'Must use curl health check and ln -sfn atomic cutover'
        }
      ]
    }
  ]
};
