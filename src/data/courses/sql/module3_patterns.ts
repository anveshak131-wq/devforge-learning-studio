import { Lesson } from '../../../types';

export const sqlModule3Lessons: Lesson[] = [
  {
    "id": "sql-25-wildcard-pattern-matching",
    "title": "25. Wildcard Pattern Matching with LIKE (%)",
    "slug": "wildcard-pattern-matching-with",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Find users whose names start with 'S'.",
    "concepts": [
      "Wildcard Pattern Matching with LIKE (%)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Wildcard Pattern Matching with LIKE (%)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE name LIKE 'S%';\n```",
    "workedExample": {
      "title": "Worked Example: Wildcard Pattern Matching with LIKE (%)",
      "code": "SELECT * FROM users WHERE name LIKE 'S%';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE name LIKE 'S%';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE name LIKE 'S%';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE name LIKE 'S%';"
    ],
    "testCases": [
      {
        "id": "sql-25-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-26-ending-patterns-with-like",
    "title": "26. Ending Patterns with LIKE (%end)",
    "slug": "ending-patterns-with-like-%end",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Find users with @example.com email addresses.",
    "concepts": [
      "Ending Patterns with LIKE (%end)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Ending Patterns with LIKE (%end)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE email LIKE '%@example.com';\n```",
    "workedExample": {
      "title": "Worked Example: Ending Patterns with LIKE (%end)",
      "code": "SELECT * FROM users WHERE email LIKE '%@example.com';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE email LIKE '%@example.com';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE email LIKE '%@example.com';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE email LIKE '%@example.com';"
    ],
    "testCases": [
      {
        "id": "sql-26-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-27-substring-search-%term%",
    "title": "27. Substring Search (%term%)",
    "slug": "substring-search-%term%",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Find products containing 'Desk' anywhere in their name.",
    "concepts": [
      "Substring Search (%term%)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Substring Search (%term%)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM products WHERE name LIKE '%Desk%';\n```",
    "workedExample": {
      "title": "Worked Example: Substring Search (%term%)",
      "code": "SELECT * FROM products WHERE name LIKE '%Desk%';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM products WHERE name LIKE '%Desk%';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM products WHERE name LIKE '%Desk%';\n",
    "hints": [
      "Execute: SELECT * FROM products WHERE name LIKE '%Desk%';"
    ],
    "testCases": [
      {
        "id": "sql-27-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-28-single-character-wildcard",
    "title": "28. Single Character Wildcard with Underscore (_)",
    "slug": "single-character-wildcard-with",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Match names using the single character wildcard _.",
    "concepts": [
      "Single Character Wildcard with Underscore (_)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Single Character Wildcard with Underscore (_)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE name LIKE 'L_am%';\n```",
    "workedExample": {
      "title": "Worked Example: Single Character Wildcard with Underscore (_)",
      "code": "SELECT * FROM users WHERE name LIKE 'L_am%';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE name LIKE 'L_am%';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE name LIKE 'L_am%';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE name LIKE 'L_am%';"
    ],
    "testCases": [
      {
        "id": "sql-28-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-29-inverting-patterns-with-n",
    "title": "29. Inverting Patterns with NOT LIKE",
    "slug": "inverting-patterns-with-not-li",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Filter out users whose names start with 'A'.",
    "concepts": [
      "Inverting Patterns with NOT LIKE",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Inverting Patterns with NOT LIKE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE name NOT LIKE 'A%';\n```",
    "workedExample": {
      "title": "Worked Example: Inverting Patterns with NOT LIKE",
      "code": "SELECT * FROM users WHERE name NOT LIKE 'A%';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE name NOT LIKE 'A%';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE name NOT LIKE 'A%';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE name NOT LIKE 'A%';"
    ],
    "testCases": [
      {
        "id": "sql-29-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-30-checking-missing-data-is-",
    "title": "30. Checking Missing Data: IS NULL",
    "slug": "checking-missing-data-is-null",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Filter users where role is not null.",
    "concepts": [
      "Checking Missing Data",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Checking Missing Data: IS NULL\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE role IS NOT NULL;\n```",
    "workedExample": {
      "title": "Worked Example: Checking Missing Data: IS NULL",
      "code": "SELECT * FROM users WHERE role IS NOT NULL;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE role IS NOT NULL;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE role IS NOT NULL;\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE role IS NOT NULL;"
    ],
    "testCases": [
      {
        "id": "sql-30-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-31-handling-missing-values-w",
    "title": "31. Handling Missing Values with COALESCE",
    "slug": "handling-missing-values-with-c",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Fallback missing roles to 'guest'.",
    "concepts": [
      "Handling Missing Values with COALESCE",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Handling Missing Values with COALESCE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, COALESCE(role, 'guest') AS assigned_role FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: Handling Missing Values with COALESCE",
      "code": "SELECT name, COALESCE(role, 'guest') AS assigned_role FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, COALESCE(role, 'guest') AS assigned_role FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, COALESCE(role, 'guest') AS assigned_role FROM users;\n",
    "hints": [
      "Execute: SELECT name, COALESCE(role, 'guest') AS assigned_role FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-31-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-32-conditional-branching-wit",
    "title": "32. Conditional Branching with CASE WHEN",
    "slug": "conditional-branching-with-cas",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Categorize products as Premium or Budget.",
    "concepts": [
      "Conditional Branching with CASE WHEN",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Conditional Branching with CASE WHEN\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, CASE WHEN price > 200 THEN 'Premium' ELSE 'Budget' END AS tier FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Branching with CASE WHEN",
      "code": "SELECT name, CASE WHEN price > 200 THEN 'Premium' ELSE 'Budget' END AS tier FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, CASE WHEN price > 200 THEN 'Premium' ELSE 'Budget' END AS tier FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, CASE WHEN price > 200 THEN 'Premium' ELSE 'Budget' END AS tier FROM products;\n",
    "hints": [
      "Execute: SELECT name, CASE WHEN price > 200 THEN 'Premium' ELSE 'Budget' END AS tier FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-32-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-33-multi-branch-case-when",
    "title": "33. Multi-Branch CASE WHEN",
    "slug": "multi-branch-case-when",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Categorize order amounts into High, Medium, Low.",
    "concepts": [
      "Multi-Branch CASE WHEN",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Multi-Branch CASE WHEN\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, CASE WHEN amount > 300 THEN 'High' WHEN amount > 100 THEN 'Medium' ELSE 'Low' END AS bracket FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Multi-Branch CASE WHEN",
      "code": "SELECT id, CASE WHEN amount > 300 THEN 'High' WHEN amount > 100 THEN 'Medium' ELSE 'Low' END AS bracket FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, CASE WHEN amount > 300 THEN 'High' WHEN amount > 100 THEN 'Medium' ELSE 'Low' END AS bracket FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, CASE WHEN amount > 300 THEN 'High' WHEN amount > 100 THEN 'Medium' ELSE 'Low' END AS bracket FROM orders;\n",
    "hints": [
      "Execute: SELECT id, CASE WHEN amount > 300 THEN 'High' WHEN amount > 100 THEN 'Medium' ELSE 'Low' END AS bracket FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-33-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-34-module-3-review-product-a",
    "title": "34. Module 3 Review: Product Audit",
    "slug": "module-3-review-product-audit",
    "language": "sql",
    "category": "Module 3: Pattern Matching & NULL Handling",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 25,
    "description": "Display stock replenishment status.",
    "concepts": [
      "Module 3 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Module 3 Review: Product Audit\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, price, CASE WHEN stock < 20 THEN 'Restock' ELSE 'OK' END AS stock_status FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Module 3 Review: Product Audit",
      "code": "SELECT name, price, CASE WHEN stock < 20 THEN 'Restock' ELSE 'OK' END AS stock_status FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, price, CASE WHEN stock < 20 THEN 'Restock' ELSE 'OK' END AS stock_status FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, price, CASE WHEN stock < 20 THEN 'Restock' ELSE 'OK' END AS stock_status FROM products;\n",
    "hints": [
      "Execute: SELECT name, price, CASE WHEN stock < 20 THEN 'Restock' ELSE 'OK' END AS stock_status FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-34-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
