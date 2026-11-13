import { Lesson } from '../../../types';

export const sqlModule2Lessons: Lesson[] = [
  {
    "id": "sql-13-filtering-with-where-equa",
    "title": "13. Filtering with WHERE: Equal To (=)",
    "slug": "filtering-with-where-equal-to-",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter users living in USA.",
    "concepts": [
      "Filtering with WHERE",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Filtering with WHERE: Equal To (=)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE country = 'USA';\n```",
    "workedExample": {
      "title": "Worked Example: Filtering with WHERE: Equal To (=)",
      "code": "SELECT * FROM users WHERE country = 'USA';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE country = 'USA';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE country = 'USA';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE country = 'USA';"
    ],
    "testCases": [
      {
        "id": "sql-13-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-14-filtering-not-equal-<>-or",
    "title": "14. Filtering Not Equal (<> or !=)",
    "slug": "filtering-not-equal-<>-or-!=",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter users whose role is not admin.",
    "concepts": [
      "Filtering Not Equal (<> or !=)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Filtering Not Equal (<> or !=)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE role <> 'admin';\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Not Equal (<> or !=)",
      "code": "SELECT * FROM users WHERE role <> 'admin';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE role <> 'admin';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE role <> 'admin';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE role <> 'admin';"
    ],
    "testCases": [
      {
        "id": "sql-14-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-15-greater-than->",
    "title": "15. Greater Than (>)",
    "slug": "greater-than->",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find products priced over 100.",
    "concepts": [
      "Greater Than (>)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Greater Than (>)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM products WHERE price > 100;\n```",
    "workedExample": {
      "title": "Worked Example: Greater Than (>)",
      "code": "SELECT * FROM products WHERE price > 100;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM products WHERE price > 100;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM products WHERE price > 100;\n",
    "hints": [
      "Execute: SELECT * FROM products WHERE price > 100;"
    ],
    "testCases": [
      {
        "id": "sql-15-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-16-less-than-or-equal-<=",
    "title": "16. Less Than or Equal (<=)",
    "slug": "less-than-or-equal-<=",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find products with low stock (<= 20).",
    "concepts": [
      "Less Than or Equal (<=)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Less Than or Equal (<=)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM products WHERE stock <= 20;\n```",
    "workedExample": {
      "title": "Worked Example: Less Than or Equal (<=)",
      "code": "SELECT * FROM products WHERE stock <= 20;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM products WHERE stock <= 20;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM products WHERE stock <= 20;\n",
    "hints": [
      "Execute: SELECT * FROM products WHERE stock <= 20;"
    ],
    "testCases": [
      {
        "id": "sql-16-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-17-combining-conditions-with",
    "title": "17. Combining Conditions with AND",
    "slug": "combining-conditions-with-and",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find users who live in USA AND are admins.",
    "concepts": [
      "Combining Conditions with AND",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Combining Conditions with AND\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE country = 'USA' AND role = 'admin';\n```",
    "workedExample": {
      "title": "Worked Example: Combining Conditions with AND",
      "code": "SELECT * FROM users WHERE country = 'USA' AND role = 'admin';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE country = 'USA' AND role = 'admin';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE country = 'USA' AND role = 'admin';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE country = 'USA' AND role = 'admin';"
    ],
    "testCases": [
      {
        "id": "sql-17-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-18-flexible-matches-with-or",
    "title": "18. Flexible Matches with OR",
    "slug": "flexible-matches-with-or",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find users from UK OR Ireland.",
    "concepts": [
      "Flexible Matches with OR",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Flexible Matches with OR\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE country = 'UK' OR country = 'Ireland';\n```",
    "workedExample": {
      "title": "Worked Example: Flexible Matches with OR",
      "code": "SELECT * FROM users WHERE country = 'UK' OR country = 'Ireland';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE country = 'UK' OR country = 'Ireland';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE country = 'UK' OR country = 'Ireland';\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE country = 'UK' OR country = 'Ireland';"
    ],
    "testCases": [
      {
        "id": "sql-18-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-19-inclusive-ranges-with-bet",
    "title": "19. Inclusive Ranges with BETWEEN",
    "slug": "inclusive-ranges-with-between",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find products priced between 100 and 300.",
    "concepts": [
      "Inclusive Ranges with BETWEEN",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Inclusive Ranges with BETWEEN\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM products WHERE price BETWEEN 100 AND 300;\n```",
    "workedExample": {
      "title": "Worked Example: Inclusive Ranges with BETWEEN",
      "code": "SELECT * FROM products WHERE price BETWEEN 100 AND 300;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM products WHERE price BETWEEN 100 AND 300;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM products WHERE price BETWEEN 100 AND 300;\n",
    "hints": [
      "Execute: SELECT * FROM products WHERE price BETWEEN 100 AND 300;"
    ],
    "testCases": [
      {
        "id": "sql-19-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-20-checking-lists-with-in",
    "title": "20. Checking Lists with IN",
    "slug": "checking-lists-with-in",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter users from USA, UK, or Japan using IN.",
    "concepts": [
      "Checking Lists with IN",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Checking Lists with IN\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE country IN ('USA', 'UK', 'Japan');\n```",
    "workedExample": {
      "title": "Worked Example: Checking Lists with IN",
      "code": "SELECT * FROM users WHERE country IN ('USA', 'UK', 'Japan');",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE country IN ('USA', 'UK', 'Japan');`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE country IN ('USA', 'UK', 'Japan');\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE country IN ('USA', 'UK', 'Japan');"
    ],
    "testCases": [
      {
        "id": "sql-20-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-21-inverting-conditions-with",
    "title": "21. Inverting Conditions with NOT IN",
    "slug": "inverting-conditions-with-not-",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter users not from USA.",
    "concepts": [
      "Inverting Conditions with NOT IN",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Inverting Conditions with NOT IN\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE country NOT IN ('USA');\n```",
    "workedExample": {
      "title": "Worked Example: Inverting Conditions with NOT IN",
      "code": "SELECT * FROM users WHERE country NOT IN ('USA');",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE country NOT IN ('USA');`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE country NOT IN ('USA');\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE country NOT IN ('USA');"
    ],
    "testCases": [
      {
        "id": "sql-21-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-22-order-status-filtering",
    "title": "22. Order Status Filtering",
    "slug": "order-status-filtering",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find all completed orders.",
    "concepts": [
      "Order Status Filtering",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Order Status Filtering\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM orders WHERE status = 'completed';\n```",
    "workedExample": {
      "title": "Worked Example: Order Status Filtering",
      "code": "SELECT * FROM orders WHERE status = 'completed';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM orders WHERE status = 'completed';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM orders WHERE status = 'completed';\n",
    "hints": [
      "Execute: SELECT * FROM orders WHERE status = 'completed';"
    ],
    "testCases": [
      {
        "id": "sql-22-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-23-high-value-pending-orders",
    "title": "23. High Value Pending Orders",
    "slug": "high-value-pending-orders",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Find pending orders of $200 or more.",
    "concepts": [
      "High Value Pending Orders",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### High Value Pending Orders\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM orders WHERE amount >= 200 AND status = 'pending';\n```",
    "workedExample": {
      "title": "Worked Example: High Value Pending Orders",
      "code": "SELECT * FROM orders WHERE amount >= 200 AND status = 'pending';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM orders WHERE amount >= 200 AND status = 'pending';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM orders WHERE amount >= 200 AND status = 'pending';\n",
    "hints": [
      "Execute: SELECT * FROM orders WHERE amount >= 200 AND status = 'pending';"
    ],
    "testCases": [
      {
        "id": "sql-23-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-24-module-2-review-customer-",
    "title": "24. Module 2 Review: Customer Target List",
    "slug": "module-2-review-customer-targe",
    "language": "sql",
    "category": "Module 2: WHERE & Logical Filters",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Select member users from USA.",
    "concepts": [
      "Module 2 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Module 2 Review: Customer Target List\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, email FROM users WHERE role = 'member' AND country = 'USA';\n```",
    "workedExample": {
      "title": "Worked Example: Module 2 Review: Customer Target List",
      "code": "SELECT name, email FROM users WHERE role = 'member' AND country = 'USA';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, email FROM users WHERE role = 'member' AND country = 'USA';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, email FROM users WHERE role = 'member' AND country = 'USA';\n",
    "hints": [
      "Execute: SELECT name, email FROM users WHERE role = 'member' AND country = 'USA';"
    ],
    "testCases": [
      {
        "id": "sql-24-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
