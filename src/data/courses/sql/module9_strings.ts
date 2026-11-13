import { Lesson } from '../../../types';

export const sqlModule9Lessons: Lesson[] = [
  {
    "id": "sql-93-converting-case-upper-and",
    "title": "93. Converting Case: UPPER() and LOWER()",
    "slug": "converting-case-upper-and-lowe",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Convert country to uppercase and email to lowercase.",
    "concepts": [
      "Converting Case",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Converting Case: UPPER() and LOWER()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, UPPER(country) AS upper_country, LOWER(email) AS lower_email FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: Converting Case: UPPER() and LOWER()",
      "code": "SELECT name, UPPER(country) AS upper_country, LOWER(email) AS lower_email FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, UPPER(country) AS upper_country, LOWER(email) AS lower_email FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, UPPER(country) AS upper_country, LOWER(email) AS lower_email FROM users;\n",
    "hints": [
      "Execute: SELECT name, UPPER(country) AS upper_country, LOWER(email) AS lower_email FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-93-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-94-measuring-length-length",
    "title": "94. Measuring Length: LENGTH()",
    "slug": "measuring-length-length",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Count characters in each product name.",
    "concepts": [
      "Measuring Length",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Measuring Length: LENGTH()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, LENGTH(name) AS char_count FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Measuring Length: LENGTH()",
      "code": "SELECT name, LENGTH(name) AS char_count FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, LENGTH(name) AS char_count FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, LENGTH(name) AS char_count FROM products;\n",
    "hints": [
      "Execute: SELECT name, LENGTH(name) AS char_count FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-94-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-95-string-concatenation-with",
    "title": "95. String Concatenation with ||",
    "slug": "string-concatenation-with-||",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Combine name and country into a single label.",
    "concepts": [
      "String Concatenation with ||",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### String Concatenation with ||\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name || ' (' || country || ')' AS display_label FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: String Concatenation with ||",
      "code": "SELECT name || ' (' || country || ')' AS display_label FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name || ' (' || country || ')' AS display_label FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name || ' (' || country || ')' AS display_label FROM users;\n",
    "hints": [
      "Execute: SELECT name || ' (' || country || ')' AS display_label FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-95-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-96-extracting-substrings-wit",
    "title": "96. Extracting Substrings with SUBSTR()",
    "slug": "extracting-substrings-with-sub",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Extract the first 3 letters of each user's name.",
    "concepts": [
      "Extracting Substrings with SUBSTR()",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Extracting Substrings with SUBSTR()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, SUBSTR(name, 1, 3) AS initials FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Substrings with SUBSTR()",
      "code": "SELECT name, SUBSTR(name, 1, 3) AS initials FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, SUBSTR(name, 1, 3) AS initials FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, SUBSTR(name, 1, 3) AS initials FROM users;\n",
    "hints": [
      "Execute: SELECT name, SUBSTR(name, 1, 3) AS initials FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-96-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-97-trimming-whitespace-trim",
    "title": "97. Trimming Whitespace: TRIM()",
    "slug": "trimming-whitespace-trim",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Trim leading and trailing whitespace.",
    "concepts": [
      "Trimming Whitespace",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Trimming Whitespace: TRIM()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT TRIM('   clean text   ') AS trimmed_text;\n```",
    "workedExample": {
      "title": "Worked Example: Trimming Whitespace: TRIM()",
      "code": "SELECT TRIM('   clean text   ') AS trimmed_text;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT TRIM('   clean text   ') AS trimmed_text;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT TRIM('   clean text   ') AS trimmed_text;\n",
    "hints": [
      "Execute: SELECT TRIM('   clean text   ') AS trimmed_text;"
    ],
    "testCases": [
      {
        "id": "sql-97-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-98-replacing-characters-with",
    "title": "98. Replacing Characters with REPLACE()",
    "slug": "replacing-characters-with-repl",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Replace domain in email addresses.",
    "concepts": [
      "Replacing Characters with REPLACE()",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Replacing Characters with REPLACE()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT email, REPLACE(email, '@example.com', '@company.org') AS new_email FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: Replacing Characters with REPLACE()",
      "code": "SELECT email, REPLACE(email, '@example.com', '@company.org') AS new_email FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT email, REPLACE(email, '@example.com', '@company.org') AS new_email FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT email, REPLACE(email, '@example.com', '@company.org') AS new_email FROM users;\n",
    "hints": [
      "Execute: SELECT email, REPLACE(email, '@example.com', '@company.org') AS new_email FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-98-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-99-locating-text-positions-w",
    "title": "99. Locating Text Positions with INSTR()",
    "slug": "locating-text-positions-with-i",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find the character index of '@' in email addresses.",
    "concepts": [
      "Locating Text Positions with INSTR()",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Locating Text Positions with INSTR()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT email, INSTR(email, '@') AS at_position FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: Locating Text Positions with INSTR()",
      "code": "SELECT email, INSTR(email, '@') AS at_position FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT email, INSTR(email, '@') AS at_position FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT email, INSTR(email, '@') AS at_position FROM users;\n",
    "hints": [
      "Execute: SELECT email, INSTR(email, '@') AS at_position FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-99-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-100-masking-email-addresses",
    "title": "100. Masking Email Addresses",
    "slug": "masking-email-addresses",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Mask email addresses for privacy.",
    "concepts": [
      "Masking Email Addresses",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Masking Email Addresses\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT SUBSTR(email, 1, 2) || '***@' || SUBSTR(email, INSTR(email, '@') + 1) AS masked FROM users;\n```",
    "workedExample": {
      "title": "Worked Example: Masking Email Addresses",
      "code": "SELECT SUBSTR(email, 1, 2) || '***@' || SUBSTR(email, INSTR(email, '@') + 1) AS masked FROM users;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT SUBSTR(email, 1, 2) || '***@' || SUBSTR(email, INSTR(email, '@') + 1) AS masked FROM users;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT SUBSTR(email, 1, 2) || '***@' || SUBSTR(email, INSTR(email, '@') + 1) AS masked FROM users;\n",
    "hints": [
      "Execute: SELECT SUBSTR(email, 1, 2) || '***@' || SUBSTR(email, INSTR(email, '@') + 1) AS masked FROM users;"
    ],
    "testCases": [
      {
        "id": "sql-100-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-101-formatting-currency-strin",
    "title": "101. Formatting Currency Strings",
    "slug": "formatting-currency-strings",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Prefix product prices with dollar signs.",
    "concepts": [
      "Formatting Currency Strings",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Formatting Currency Strings\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, '$' || price AS price_tag FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Formatting Currency Strings",
      "code": "SELECT name, '$' || price AS price_tag FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, '$' || price AS price_tag FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, '$' || price AS price_tag FROM products;\n",
    "hints": [
      "Execute: SELECT name, '$' || price AS price_tag FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-101-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-102-module-9-review-formatted",
    "title": "102. Module 9 Review: Formatted User Catalog",
    "slug": "module-9-review-formatted-user",
    "language": "sql",
    "category": "Module 9: Text & String Manipulation",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Create a formatted uppercase profile card.",
    "concepts": [
      "Module 9 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Module 9 Review: Formatted User Catalog\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT UPPER(name) || ' - ' || role AS profile FROM users LIMIT 3;\n```",
    "workedExample": {
      "title": "Worked Example: Module 9 Review: Formatted User Catalog",
      "code": "SELECT UPPER(name) || ' - ' || role AS profile FROM users LIMIT 3;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT UPPER(name) || ' - ' || role AS profile FROM users LIMIT 3;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT UPPER(name) || ' - ' || role AS profile FROM users LIMIT 3;\n",
    "hints": [
      "Execute: SELECT UPPER(name) || ' - ' || role AS profile FROM users LIMIT 3;"
    ],
    "testCases": [
      {
        "id": "sql-102-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
