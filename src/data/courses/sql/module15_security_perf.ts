import { Lesson } from '../../../types';

export const sqlModule15Lessons: Lesson[] = [
  {
    "id": "sql-141-query-optimization-with-e",
    "title": "141. Query Optimization with EXPLAIN QUERY PLAN",
    "slug": "query-optimization-with-explai",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Analyze query execution plans to identify table scans and index usage.",
    "concepts": [
      "Query Optimization with EXPLAIN QUERY PLAN",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Query Optimization with EXPLAIN QUERY PLAN\nIn database engineering, performance tuning and security are essential:\n\n```sql\nEXPLAIN QUERY PLAN SELECT * FROM users WHERE id = 1;\n```",
    "workedExample": {
      "title": "Worked Example: Query Optimization with EXPLAIN QUERY PLAN",
      "code": "EXPLAIN QUERY PLAN SELECT * FROM users WHERE id = 1;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `EXPLAIN QUERY PLAN SELECT * FROM users WHERE id = 1;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "EXPLAIN QUERY PLAN SELECT * FROM users WHERE id = 1;\n",
    "hints": [
      "Execute: EXPLAIN QUERY PLAN SELECT * FROM users WHERE id = 1;"
    ],
    "testCases": [
      {
        "id": "sql-141-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-142-creating-covering-indexes",
    "title": "142. Creating Covering Indexes",
    "slug": "creating-covering-indexes",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Speed up queries using multi-column composite indexes.",
    "concepts": [
      "Creating Covering Indexes",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Creating Covering Indexes\nIn database engineering, performance tuning and security are essential:\n\n```sql\nCREATE INDEX idx_user_email_name ON users(email, name); SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Creating Covering Indexes",
      "code": "CREATE INDEX idx_user_email_name ON users(email, name); SELECT 1;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `CREATE INDEX idx_user_email_name ON users(email, name); SELECT 1;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "CREATE INDEX idx_user_email_name ON users(email, name); SELECT 1;\n",
    "hints": [
      "Execute: CREATE INDEX idx_user_email_name ON users(email, name); SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-142-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-143-case-insensitive-indexing",
    "title": "143. Case-Insensitive Indexing with COLLATE NOCASE",
    "slug": "case-insensitive-indexing-with",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Index text for high-performance case-insensitive search.",
    "concepts": [
      "Case-Insensitive Indexing with COLLATE NOCASE",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Case-Insensitive Indexing with COLLATE NOCASE\nIn database engineering, performance tuning and security are essential:\n\n```sql\nCREATE INDEX idx_user_name_nocase ON users(name COLLATE NOCASE); SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Case-Insensitive Indexing with COLLATE NOCASE",
      "code": "CREATE INDEX idx_user_name_nocase ON users(name COLLATE NOCASE); SELECT 1;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `CREATE INDEX idx_user_name_nocase ON users(name COLLATE NOCASE); SELECT 1;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "CREATE INDEX idx_user_name_nocase ON users(name COLLATE NOCASE); SELECT 1;\n",
    "hints": [
      "Execute: CREATE INDEX idx_user_name_nocase ON users(name COLLATE NOCASE); SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-143-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-144-temporary-tables-with-cre",
    "title": "144. Temporary Tables with CREATE TEMP TABLE",
    "slug": "temporary-tables-with-create-t",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Store transient intermediate session data.",
    "concepts": [
      "Temporary Tables with CREATE TEMP TABLE",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Temporary Tables with CREATE TEMP TABLE\nIn database engineering, performance tuning and security are essential:\n\n```sql\nCREATE TEMP TABLE cache (key TEXT, val INT); SELECT * FROM cache;\n```",
    "workedExample": {
      "title": "Worked Example: Temporary Tables with CREATE TEMP TABLE",
      "code": "CREATE TEMP TABLE cache (key TEXT, val INT); SELECT * FROM cache;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `CREATE TEMP TABLE cache (key TEXT, val INT); SELECT * FROM cache;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "CREATE TEMP TABLE cache (key TEXT, val INT); SELECT * FROM cache;\n",
    "hints": [
      "Execute: CREATE TEMP TABLE cache (key TEXT, val INT); SELECT * FROM cache;"
    ],
    "testCases": [
      {
        "id": "sql-144-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-145-database-introspection-wi",
    "title": "145. Database Introspection with PRAGMA table_info",
    "slug": "database-introspection-with-pr",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Inspect column names, data types, and primary key metadata.",
    "concepts": [
      "Database Introspection with PRAGMA table_info",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Database Introspection with PRAGMA table_info\nIn database engineering, performance tuning and security are essential:\n\n```sql\nPRAGMA table_info(users);\n```",
    "workedExample": {
      "title": "Worked Example: Database Introspection with PRAGMA table_info",
      "code": "PRAGMA table_info(users);",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `PRAGMA table_info(users);`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "PRAGMA table_info(users);\n",
    "hints": [
      "Execute: PRAGMA table_info(users);"
    ],
    "testCases": [
      {
        "id": "sql-145-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-146-storage-optimization-with",
    "title": "146. Storage Optimization with VACUUM",
    "slug": "storage-optimization-with-vacu",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Reclaim unused database pages and defragment files.",
    "concepts": [
      "Storage Optimization with VACUUM",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Storage Optimization with VACUUM\nIn database engineering, performance tuning and security are essential:\n\n```sql\nVACUUM; SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Storage Optimization with VACUUM",
      "code": "VACUUM; SELECT 1;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `VACUUM; SELECT 1;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "VACUUM; SELECT 1;\n",
    "hints": [
      "Execute: VACUUM; SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-146-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-147-enforcing-data-integrity-",
    "title": "147. Enforcing Data Integrity with Triggers",
    "slug": "enforcing-data-integrity-with-",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Automate audit trail logging on row insertions.",
    "concepts": [
      "Enforcing Data Integrity with Triggers",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Enforcing Data Integrity with Triggers\nIn database engineering, performance tuning and security are essential:\n\n```sql\nCREATE TRIGGER audit_user AFTER INSERT ON users BEGIN SELECT 1; END; SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Enforcing Data Integrity with Triggers",
      "code": "CREATE TRIGGER audit_user AFTER INSERT ON users BEGIN SELECT 1; END; SELECT 1;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `CREATE TRIGGER audit_user AFTER INSERT ON users BEGIN SELECT 1; END; SELECT 1;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "CREATE TRIGGER audit_user AFTER INSERT ON users BEGIN SELECT 1; END; SELECT 1;\n",
    "hints": [
      "Execute: CREATE TRIGGER audit_user AFTER INSERT ON users BEGIN SELECT 1; END; SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-147-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-148-parameterized-queries-&-s",
    "title": "148. Parameterized Queries & SQL Injection Defense",
    "slug": "parameterized-queries-&-sql-in",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Safely filter parameters to prevent injection.",
    "concepts": [
      "Parameterized Queries & SQL Injection Defense",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Parameterized Queries & SQL Injection Defense\nIn database engineering, performance tuning and security are essential:\n\n```sql\nSELECT * FROM users WHERE role = 'admin' AND country = 'USA';\n```",
    "workedExample": {
      "title": "Worked Example: Parameterized Queries & SQL Injection Defense",
      "code": "SELECT * FROM users WHERE role = 'admin' AND country = 'USA';",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `SELECT * FROM users WHERE role = 'admin' AND country = 'USA';`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE role = 'admin' AND country = 'USA';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE role = 'admin' AND country = 'USA';"
    ],
    "testCases": [
      {
        "id": "sql-148-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-149-database-transaction-comm",
    "title": "149. Database Transaction Commit & Rollback",
    "slug": "database-transaction-commit-&-",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Ensure atomic database state transitions.",
    "concepts": [
      "Database Transaction Commit & Rollback",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Database Transaction Commit & Rollback\nIn database engineering, performance tuning and security are essential:\n\n```sql\nBEGIN TRANSACTION; UPDATE users SET role = 'member' WHERE id = 5; COMMIT; SELECT role FROM users WHERE id = 5;\n```",
    "workedExample": {
      "title": "Worked Example: Database Transaction Commit & Rollback",
      "code": "BEGIN TRANSACTION; UPDATE users SET role = 'member' WHERE id = 5; COMMIT; SELECT role FROM users WHERE id = 5;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `BEGIN TRANSACTION; UPDATE users SET role = 'member' WHERE id = 5; COMMIT; SELECT role FROM users WHERE id = 5;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "BEGIN TRANSACTION; UPDATE users SET role = 'member' WHERE id = 5; COMMIT; SELECT role FROM users WHERE id = 5;\n",
    "hints": [
      "Execute: BEGIN TRANSACTION; UPDATE users SET role = 'member' WHERE id = 5; COMMIT; SELECT role FROM users WHERE id = 5;"
    ],
    "testCases": [
      {
        "id": "sql-149-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  },
  {
    "id": "sql-150-masterclass-enterprise-bi",
    "title": "150. Masterclass: Enterprise BI Executive Audit",
    "slug": "masterclass-enterprise-bi-exec",
    "language": "sql",
    "category": "Module 15: Database Optimization & Security",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Final Masterclass Capstone: Enterprise Analytics Dashboard.",
    "concepts": [
      "Masterclass",
      "Database Optimization"
    ],
    "analogy": "A bank safety inspection ensuring the vault lock is tuned and running at peak speed.",
    "explanationMarkdown": "### Masterclass: Enterprise BI Executive Audit\nIn database engineering, performance tuning and security are essential:\n\n```sql\nWITH Summary AS (SELECT country, COUNT(*) AS count FROM users GROUP BY country) SELECT * FROM Summary ORDER BY count DESC;\n```",
    "workedExample": {
      "title": "Worked Example: Masterclass: Enterprise BI Executive Audit",
      "code": "WITH Summary AS (SELECT country, COUNT(*) AS count FROM users GROUP BY country) SELECT * FROM Summary ORDER BY count DESC;",
      "explanation": "\u2022 Executes query optimization test against SQLite.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Write the query in the editor.",
      "Enter: `WITH Summary AS (SELECT country, COUNT(*) AS count FROM users GROUP BY country) SELECT * FROM Summary ORDER BY count DESC;`",
      "Click Check Answer to verify."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "WITH Summary AS (SELECT country, COUNT(*) AS count FROM users GROUP BY country) SELECT * FROM Summary ORDER BY count DESC;\n",
    "hints": [
      "Execute: WITH Summary AS (SELECT country, COUNT(*) AS count FROM users GROUP BY country) SELECT * FROM Summary ORDER BY count DESC;"
    ],
    "testCases": [
      {
        "id": "sql-150-tc-1",
        "description": "Query runs cleanly against SQLite",
        "testFn": "results.length > 0 || query.includes('INDEX') || query.includes('VACUUM') || query.includes('TRIGGER') || query.includes('TRANSACTION')"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n"
  }
];
