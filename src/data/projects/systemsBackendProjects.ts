import { GuidedProject } from '../../types';

// ================= RUST PROJECTS =================
export const RUST_KV_FILE_PROJECT: GuidedProject = {
  id: 'project-rust-kv-store',
  title: 'Memory-Safe CLI Key-Value File Store',
  slug: 'rust-kv-file-store',
  language: 'rust',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Build a persistent key-value store using Rust ownership, Result/Option error handling, and file serialization.',
  description: 'Learn idiomatic Rust systems programming without garbage collection. You will build a command-line database using custom structs, manage ownership and borrowing without memory leaks, handle I/O errors using Result<T, E>, and write records to a local file.',
  previewType: 'console',
  whatYouWillBuild: [
    'A KvStore struct storing key-value pairs in a HashMap',
    'Get, set, and remove methods with Result and Option return types',
    'File persistence writing JSON/binary records to disk',
    'Custom error types using std::error::Error'
  ],
  skillsLearned: [
    'Rust Ownership & Borrowing mechanics',
    'Idiomatic error handling with Result and Option',
    'HashMap collections and iterators',
    'Safe file I/O operations'
  ],
  milestones: [
    {
      id: 'rust-kv-m1',
      stepNumber: 1,
      title: 'Milestone 1: KvStore Struct & Memory Operations',
      instructionMarkdown: `
### Milestone 1: KvStore Engine
Implement a basic in-memory \`KvStore\`:
- Uses \`HashMap<String, String>\` internally.
- \`new() -> Self\`: Initializes empty store.
- \`set(&mut self, key: String, val: String)\`: Stores key-value.
- \`get(&self, key: &str) -> Option<&String>\`: Retrieves reference to value.
- \`remove(&mut self, key: &str) -> Option<String>\`: Removes key and returns previous value.
      `,
      starterCode: `use std::collections::HashMap;

pub struct KvStore {
    map: HashMap<String, String>,
}

impl KvStore {
    pub fn new() -> Self {
        KvStore { map: HashMap::new() }
    }

    pub fn set(&mut self, key: String, val: String) {
        // Insert key and value
    }

    pub fn get(&self, key: &str) -> Option<&String> {
        // Return reference to value
        None
    }

    pub fn remove(&mut self, key: &str) -> Option<String> {
        // Remove and return
        None
    }
}

fn main() {
    let mut store = KvStore::new();
    store.set("config.port".to_string(), "8080".to_string());
    println!("Port: {:?}", store.get("config.port"));
}
`,
      solutionCode: `use std::collections::HashMap;

pub struct KvStore {
    map: HashMap<String, String>,
}

impl KvStore {
    pub fn new() -> Self {
        KvStore { map: HashMap::new() }
    }

    pub fn set(&mut self, key: String, val: String) {
        self.map.insert(key, val);
    }

    pub fn get(&self, key: &str) -> Option<&String> {
        self.map.get(key)
    }

    pub fn remove(&mut self, key: &str) -> Option<String> {
        self.map.remove(key)
    }
}

fn main() {
    let mut store = KvStore::new();
    store.set("config.port".to_string(), "8080".to_string());
    println!("Port: {:?}", store.get("config.port"));
}
`,
      hints: [
        'Use self.map.insert(key, val) in set().',
        'Use self.map.get(key) in get() which returns Option<&String>.'
      ],
      testCases: [
        {
          id: 'rust-kv-tc1',
          description: 'KvStore implements new, set, get, and remove with HashMap',
          testFn: `(() => {
            return code.includes('struct KvStore') && code.includes('set') && code.includes('get') && code.includes('HashMap');
          })()`,
          expectedMessage: 'Must implement KvStore struct with set and get methods'
        }
      ]
    }
  ]
};

// ================= NODE.JS & REST API PROJECTS =================
export const NODEJS_REST_API_PROJECT: GuidedProject = {
  id: 'project-nodejs-clean-api',
  title: 'Clean Architecture REST API with Validation',
  slug: 'nodejs-clean-architecture-api',
  language: 'nodejs',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Build a production REST API with modular controllers, validation middleware, and structured error handling.',
  description: 'Move beyond monolithic script files. You will build a production-grade Node.js/Express REST API following clean architecture: decoupled routes, request body validation middleware, service layers, and centralized global error handling returning consistent JSON envelopes.',
  previewType: 'console',
  whatYouWillBuild: [
    'A modular Express router with separated controller handlers',
    'A schema validation middleware validating required payload fields',
    'A central error-handling middleware catching unhandled exceptions',
    'Standardized JSON response envelopes ({ success, data, error })'
  ],
  skillsLearned: [
    'Clean Architecture separation of concerns',
    'Express middleware pipelines and next(err) flow',
    'HTTP status code discipline (200, 201, 400, 404, 500)',
    'Request body validation patterns'
  ],
  milestones: [
    {
      id: 'node-api-m1',
      stepNumber: 1,
      title: 'Milestone 1: Validation Middleware & Controller Pipeline',
      instructionMarkdown: `
### Milestone 1: Validation Middleware & Error Envelope
Implement:
- \`validateUserPayload(req, res, next)\`:
  - Validates that \`req.body.name\` is a non-empty string and \`req.body.email\` includes an \`@\`.
  - If invalid, returns HTTP 400: \`{ success: false, error: 'Validation failed' }\`.
  - If valid, calls \`next()\`.
- \`createApiResponse(data, statusCode = 200)\`:
  - Returns formatted envelope: \`{ success: true, data, statusCode }\`.
      `,
      starterCode: `function validateUserPayload(req, res, next) {
  // Validate name and email in req.body
}

function createApiResponse(data, statusCode = 200) {
  // Return formatted JSON envelope
}

// Test validation
const testReq = { body: { name: "Alice", email: "alice@devforge.io" } };
let nextCalled = false;
validateUserPayload(testReq, {}, () => { nextCalled = true; });
console.log("Validation passed:", nextCalled);
`,
      solutionCode: `function validateUserPayload(req, res, next) {
  const { name, email } = req.body || {};
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status ? res.status(400).json({ success: false, error: 'Name is required' }) : { success: false, error: 'Name is required' };
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status ? res.status(400).json({ success: false, error: 'Valid email is required' }) : { success: false, error: 'Valid email is required' };
  }
  if (typeof next === 'function') next();
}

function createApiResponse(data, statusCode = 200) {
  return {
    success: true,
    data,
    statusCode
  };
}
`,
      hints: [
        'Check that req.body exists before destructuring.',
        'Call next() only when all validations pass.'
      ],
      testCases: [
        {
          id: 'node-api-tc1',
          description: 'validateUserPayload checks name and email; createApiResponse formats data',
          testFn: `(() => {
            return code.includes('validateUserPayload') && code.includes('createApiResponse') && code.includes('success');
          })()`,
          expectedMessage: 'Must implement validateUserPayload and createApiResponse envelope'
        }
      ]
    }
  ]
};

// ================= GOLANG PROJECTS =================
export const GOLANG_HEALTH_CHECKER_PROJECT: GuidedProject = {
  id: 'project-golang-health-checker',
  title: 'Concurrent URL Health & Status Checker CLI',
  slug: 'golang-health-checker-cli',
  language: 'golang',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Build a blazing-fast concurrent URL endpoint health checker using Go goroutines, channels, and WaitGroups.',
  description: 'Harness the true power of Go concurrency. You will build a command-line tool that pings hundreds of website endpoints concurrently using goroutines, synchronizes thread completion with sync.WaitGroup, aggregates latency metrics through buffered channels, and outputs structured health reports.',
  previewType: 'console',
  whatYouWillBuild: [
    'A concurrent ping worker spawning individual goroutines per target URL',
    'A sync.WaitGroup orchestrating parallel execution completion',
    'Buffered channels streaming latency and HTTP status results safely',
    'Formatted terminal report summarizing uptime and average response latency'
  ],
  skillsLearned: [
    'Go Concurrency model (Goroutines vs OS threads)',
    'Thread synchronization with sync.WaitGroup (Add, Done, Wait)',
    'Channel communication and buffer capacities',
    'High-throughput network diagnostics'
  ],
  milestones: [
    {
      id: 'go-hc-m1',
      stepNumber: 1,
      title: 'Milestone 1: Goroutine Health Worker & WaitGroup Coordination',
      instructionMarkdown: `
### Milestone 1: Concurrent Health Ping
Implement \`CheckURLs(urls []string) []Result\`:
- Uses a \`sync.WaitGroup\` to wait for all goroutines to finish.
- Dispatches a goroutine for each URL that:
  - Records response status code and latency time.
  - Sends a \`Result{URL: url, StatusCode: 200, LatencyMs: ms}\` into a channel.
- Collects and returns the slice of all results.
      `,
      starterCode: `package main

import (
	"fmt"
	"sync"
	"time"
)

type Result struct {
	URL        string
	StatusCode int
	LatencyMs  int64
}

func CheckURLs(urls []string) []Result {
	// Use sync.WaitGroup and channel to check URLs concurrently
	return nil
}

func main() {
	urls := []string{"https://api.devforge.com", "https://google.com", "https://github.com"}
	results := CheckURLs(urls)
	fmt.Printf("Checked %d endpoints successfully\\n", len(results))
}
`,
      solutionCode: `package main

import (
	"fmt"
	"sync"
	"time"
)

type Result struct {
	URL        string
	StatusCode int
	LatencyMs  int64
}

func CheckURLs(urls []string) []Result {
	var wg sync.WaitGroup
	ch := make(chan Result, len(urls))

	for _, u := range urls {
		wg.Add(1)
		go func(url string) {
			defer wg.Done()
			start := time.Now()
			// Simulate check
			elapsed := time.Since(start).Milliseconds()
			ch <- Result{URL: url, StatusCode: 200, LatencyMs: elapsed}
		}(u)
	}

	wg.Wait()
	close(ch)

	var results []Result
	for r := range ch {
		results = append(results, r)
	}
	return results
}

func main() {
	urls := []string{"https://api.devforge.com", "https://google.com", "https://github.com"}
	results := CheckURLs(urls)
	fmt.Printf("Checked %d endpoints successfully\\n", len(results))
}
`,
      hints: [
        'Always pass the URL as a parameter to the goroutine function to avoid closure variable capture issues.',
        'Call close(ch) after wg.Wait() so the range loop over ch terminates.'
      ],
      testCases: [
        {
          id: 'go-hc-tc1',
          description: 'CheckURLs uses sync.WaitGroup, goroutines, and channels',
          testFn: `(() => {
            return code.includes('sync.WaitGroup') && code.includes('go func') && code.includes('chan Result');
          })()`,
          expectedMessage: 'Must use sync.WaitGroup, goroutines, and channels'
        }
      ]
    }
  ]
};

// ================= JAVA PROJECTS =================
export const JAVA_BANKING_LEDGER_PROJECT: GuidedProject = {
  id: 'project-java-banking-ledger',
  title: 'Thread-Safe Banking Account Ledger',
  slug: 'java-banking-account-ledger',
  language: 'java',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Build a multi-threaded banking transaction processor preventing deadlocks and race conditions.',
  description: 'Enterprise Java applications power the global financial system. You will design a thread-safe BankAccount class that processes concurrent deposits, withdrawals, and balance transfers using Java synchronized blocks, ReentrantLock, and atomic operations while preventing financial race conditions.',
  previewType: 'console',
  whatYouWillBuild: [
    'A thread-safe BankAccount class managing balance mutations',
    'Deadlock-free fund transfers between accounts using resource ordering',
    'Deposit and withdrawal validation preventing overdrafts',
    'Audit transaction logs tracking balance changes'
  ],
  skillsLearned: [
    'Java multithreading & synchronized blocks',
    'Preventing deadlocks using lock ordering',
    'Thread-safety invariants and atomic updates',
    'Financial consistency design'
  ],
  milestones: [
    {
      id: 'java-bank-m1',
      stepNumber: 1,
      title: 'Milestone 1: Thread-Safe Account Transfers',
      instructionMarkdown: `
### Milestone 1: Deadlock-Free Transfer
Implement:
- \`BankAccount(int id, double initialBalance)\`:
  - Methods: \`deposit(double amount)\`, \`withdraw(double amount)\`, \`getBalance()\`.
  - Marked with \`synchronized\` to prevent data races.
- \`transfer(BankAccount from, BankAccount to, double amount)\`:
  - Locks both accounts in consistent order (e.g. lock lower account ID first) to completely eliminate deadlocks!
  - Transfers amount if \`from.getBalance() >= amount\`.
      `,
      starterCode: `public class BankAccount {
    private final int id;
    private double balance;

    public BankAccount(int id, double balance) {
        this.id = id;
        this.balance = balance;
    }

    public synchronized void deposit(double amount) {
        // Add to balance
    }

    public synchronized boolean withdraw(double amount) {
        // Withdraw if funds available
        return false;
    }

    public synchronized double getBalance() {
        return this.balance;
    }

    public static boolean transfer(BankAccount from, BankAccount to, double amount) {
        // Deadlock-free transfer locking in ID order
        return false;
    }

    public static void main(String[] args) {
        BankAccount a = new BankAccount(1, 1000.0);
        BankAccount b = new BankAccount(2, 500.0);
        transfer(a, b, 200.0);
        System.out.println("A Balance: " + a.getBalance());
        System.out.println("B Balance: " + b.getBalance());
    }
}
`,
      solutionCode: `public class BankAccount {
    private final int id;
    private double balance;

    public BankAccount(int id, double balance) {
        this.id = id;
        this.balance = balance;
    }

    public int getId() { return id; }

    public synchronized void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public synchronized boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public synchronized double getBalance() {
        return this.balance;
    }

    public static boolean transfer(BankAccount from, BankAccount to, double amount) {
        BankAccount firstLock = from.getId() < to.getId() ? from : to;
        BankAccount secondLock = from.getId() < to.getId() ? to : from;

        synchronized (firstLock) {
            synchronized (secondLock) {
                if (from.getBalance() >= amount) {
                    from.withdraw(amount);
                    to.deposit(amount);
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        BankAccount a = new BankAccount(1, 1000.0);
        BankAccount b = new BankAccount(2, 500.0);
        transfer(a, b, 200.0);
        System.out.println("A Balance: " + a.getBalance());
        System.out.println("B Balance: " + b.getBalance());
    }
}
`,
      hints: [
        'Order locks by account ID (firstLock = from.id < to.id ? from : to) to prevent circular wait deadlocks.',
        'Always check balance >= amount before debiting.'
      ],
      testCases: [
        {
          id: 'java-bank-tc1',
          description: 'BankAccount implements synchronized deposit, withdraw, and deadlock-free transfer',
          testFn: `(() => {
            return code.includes('class BankAccount') && code.includes('synchronized') && code.includes('transfer') && code.includes('deposit');
          })()`,
          expectedMessage: 'Must implement synchronized BankAccount with ordered lock transfer'
        }
      ]
    }
  ]
};
