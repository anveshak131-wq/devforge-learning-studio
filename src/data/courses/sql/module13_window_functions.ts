import { Lesson } from '../../../types';

export const sqlModule13Lessons: Lesson[] = [
  {
    "id": "sql-133-introduction-to-window-fu",
    "title": "133. Introduction to Window Functions: OVER()",
    "slug": "introduction-to-window-functio",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Display each order amount alongside the overall average.",
    "concepts": [
      "Introduction to Window Functions",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Introduction to Window Functions: OVER()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, amount, AVG(amount) OVER() AS global_avg FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Introduction to Window Functions: OVER()",
      "code": "SELECT id, amount, AVG(amount) OVER() AS global_avg FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, amount, AVG(amount) OVER() AS global_avg FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, amount, AVG(amount) OVER() AS global_avg FROM orders;\n",
    "hints": [
      "Execute: SELECT id, amount, AVG(amount) OVER() AS global_avg FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-133-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-134-row-numbering-with-row_nu",
    "title": "134. Row Numbering with ROW_NUMBER() OVER()",
    "slug": "row-numbering-with-row_number-",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Rank products from most to least expensive using ROW_NUMBER().",
    "concepts": [
      "Row Numbering with ROW_NUMBER() OVER()",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Row Numbering with ROW_NUMBER() OVER()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, name, ROW_NUMBER() OVER(ORDER BY price DESC) AS price_rank FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Row Numbering with ROW_NUMBER() OVER()",
      "code": "SELECT id, name, ROW_NUMBER() OVER(ORDER BY price DESC) AS price_rank FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, name, ROW_NUMBER() OVER(ORDER BY price DESC) AS price_rank FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, name, ROW_NUMBER() OVER(ORDER BY price DESC) AS price_rank FROM products;\n",
    "hints": [
      "Execute: SELECT id, name, ROW_NUMBER() OVER(ORDER BY price DESC) AS price_rank FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-134-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-135-ranking-with-ties-rank-vs",
    "title": "135. Ranking with Ties: RANK() vs DENSE_RANK()",
    "slug": "ranking-with-ties-rank-vs-dens",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Rank orders by amount using RANK().",
    "concepts": [
      "Ranking with Ties",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Ranking with Ties: RANK() vs DENSE_RANK()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, amount, RANK() OVER(ORDER BY amount DESC) AS rnk FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Ranking with Ties: RANK() vs DENSE_RANK()",
      "code": "SELECT id, amount, RANK() OVER(ORDER BY amount DESC) AS rnk FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, amount, RANK() OVER(ORDER BY amount DESC) AS rnk FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, amount, RANK() OVER(ORDER BY amount DESC) AS rnk FROM orders;\n",
    "hints": [
      "Execute: SELECT id, amount, RANK() OVER(ORDER BY amount DESC) AS rnk FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-135-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-136-partitioning-window-funct",
    "title": "136. Partitioning Window Functions: PARTITION BY",
    "slug": "partitioning-window-functions-",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Rank products within their own category.",
    "concepts": [
      "Partitioning Window Functions",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Partitioning Window Functions: PARTITION BY\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, category, price, ROW_NUMBER() OVER(PARTITION BY category ORDER BY price DESC) AS cat_rank FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Partitioning Window Functions: PARTITION BY",
      "code": "SELECT name, category, price, ROW_NUMBER() OVER(PARTITION BY category ORDER BY price DESC) AS cat_rank FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, category, price, ROW_NUMBER() OVER(PARTITION BY category ORDER BY price DESC) AS cat_rank FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, category, price, ROW_NUMBER() OVER(PARTITION BY category ORDER BY price DESC) AS cat_rank FROM products;\n",
    "hints": [
      "Execute: SELECT name, category, price, ROW_NUMBER() OVER(PARTITION BY category ORDER BY price DESC) AS cat_rank FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-136-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-137-running-totals-with-sum-o",
    "title": "137. Running Totals with SUM() OVER(ORDER BY ...)",
    "slug": "running-totals-with-sum-overor",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Calculate running cumulative revenue over time.",
    "concepts": [
      "Running Totals with SUM() OVER(ORDER BY ...)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Running Totals with SUM() OVER(ORDER BY ...)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, order_date, amount, SUM(amount) OVER(ORDER BY order_date ASC) AS running_total FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Running Totals with SUM() OVER(ORDER BY ...)",
      "code": "SELECT id, order_date, amount, SUM(amount) OVER(ORDER BY order_date ASC) AS running_total FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, order_date, amount, SUM(amount) OVER(ORDER BY order_date ASC) AS running_total FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, order_date, amount, SUM(amount) OVER(ORDER BY order_date ASC) AS running_total FROM orders;\n",
    "hints": [
      "Execute: SELECT id, order_date, amount, SUM(amount) OVER(ORDER BY order_date ASC) AS running_total FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-137-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-138-category-spending-totals-",
    "title": "138. Category Spending Totals with SUM() OVER(PARTITION BY ...)",
    "slug": "category-spending-totals-with-",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Calculate category inventory value on each row.",
    "concepts": [
      "Category Spending Totals with SUM() OVER(PARTITION BY ...)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Category Spending Totals with SUM() OVER(PARTITION BY ...)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, category, SUM(price * stock) OVER(PARTITION BY category) AS cat_valuation FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Category Spending Totals with SUM() OVER(PARTITION BY ...)",
      "code": "SELECT name, category, SUM(price * stock) OVER(PARTITION BY category) AS cat_valuation FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, category, SUM(price * stock) OVER(PARTITION BY category) AS cat_valuation FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, category, SUM(price * stock) OVER(PARTITION BY category) AS cat_valuation FROM products;\n",
    "hints": [
      "Execute: SELECT name, category, SUM(price * stock) OVER(PARTITION BY category) AS cat_valuation FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-138-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-139-inspecting-previous-rows-",
    "title": "139. Inspecting Previous Rows with LAG()",
    "slug": "inspecting-previous-rows-with-",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Access previous order amount using LAG().",
    "concepts": [
      "Inspecting Previous Rows with LAG()",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Inspecting Previous Rows with LAG()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, amount, LAG(amount, 1) OVER(ORDER BY order_date ASC) AS prev_amount FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Previous Rows with LAG()",
      "code": "SELECT id, amount, LAG(amount, 1) OVER(ORDER BY order_date ASC) AS prev_amount FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, amount, LAG(amount, 1) OVER(ORDER BY order_date ASC) AS prev_amount FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, amount, LAG(amount, 1) OVER(ORDER BY order_date ASC) AS prev_amount FROM orders;\n",
    "hints": [
      "Execute: SELECT id, amount, LAG(amount, 1) OVER(ORDER BY order_date ASC) AS prev_amount FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-139-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-140-inspecting-subsequent-row",
    "title": "140. Inspecting Subsequent Rows with LEAD()",
    "slug": "inspecting-subsequent-rows-wit",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Look ahead to the next order amount with LEAD().",
    "concepts": [
      "Inspecting Subsequent Rows with LEAD()",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Inspecting Subsequent Rows with LEAD()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, amount, LEAD(amount, 1) OVER(ORDER BY order_date ASC) AS next_amount FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Subsequent Rows with LEAD()",
      "code": "SELECT id, amount, LEAD(amount, 1) OVER(ORDER BY order_date ASC) AS next_amount FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, amount, LEAD(amount, 1) OVER(ORDER BY order_date ASC) AS next_amount FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, amount, LEAD(amount, 1) OVER(ORDER BY order_date ASC) AS next_amount FROM orders;\n",
    "hints": [
      "Execute: SELECT id, amount, LEAD(amount, 1) OVER(ORDER BY order_date ASC) AS next_amount FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-140-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-141-calculating-growth-delta-",
    "title": "141. Calculating Growth Delta (amount - LAG)",
    "slug": "calculating-growth-delta-amoun",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Calculate difference from preceding transaction.",
    "concepts": [
      "Calculating Growth Delta (amount - LAG)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Calculating Growth Delta (amount - LAG)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, amount, amount - COALESCE(LAG(amount) OVER(ORDER BY order_date), amount) AS diff FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Calculating Growth Delta (amount - LAG)",
      "code": "SELECT id, amount, amount - COALESCE(LAG(amount) OVER(ORDER BY order_date), amount) AS diff FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, amount, amount - COALESCE(LAG(amount) OVER(ORDER BY order_date), amount) AS diff FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, amount, amount - COALESCE(LAG(amount) OVER(ORDER BY order_date), amount) AS diff FROM orders;\n",
    "hints": [
      "Execute: SELECT id, amount, amount - COALESCE(LAG(amount) OVER(ORDER BY order_date), amount) AS diff FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-141-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-142-first-and-last-values-fir",
    "title": "142. First and Last Values: FIRST_VALUE()",
    "slug": "first-and-last-values-first_va",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Display highest priced product name across all rows.",
    "concepts": [
      "First and Last Values",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### First and Last Values: FIRST_VALUE()\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, price, FIRST_VALUE(name) OVER(ORDER BY price DESC) AS top_product FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: First and Last Values: FIRST_VALUE()",
      "code": "SELECT name, price, FIRST_VALUE(name) OVER(ORDER BY price DESC) AS top_product FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, price, FIRST_VALUE(name) OVER(ORDER BY price DESC) AS top_product FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, price, FIRST_VALUE(name) OVER(ORDER BY price DESC) AS top_product FROM products;\n",
    "hints": [
      "Execute: SELECT name, price, FIRST_VALUE(name) OVER(ORDER BY price DESC) AS top_product FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-142-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-143-percentile-ranks-with-nti",
    "title": "143. Percentile Ranks with NTILE(4)",
    "slug": "percentile-ranks-with-ntile4",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Bucket products into price quartiles 1 to 4.",
    "concepts": [
      "Percentile Ranks with NTILE(4)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Percentile Ranks with NTILE(4)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, price, NTILE(4) OVER(ORDER BY price ASC) AS quartile FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Percentile Ranks with NTILE(4)",
      "code": "SELECT name, price, NTILE(4) OVER(ORDER BY price ASC) AS quartile FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, price, NTILE(4) OVER(ORDER BY price ASC) AS quartile FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, price, NTILE(4) OVER(ORDER BY price ASC) AS quartile FROM products;\n",
    "hints": [
      "Execute: SELECT name, price, NTILE(4) OVER(ORDER BY price ASC) AS quartile FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-143-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-144-module-13-review-monthly-",
    "title": "144. Module 13 Review: Monthly Financial Report",
    "slug": "module-13-review-monthly-finan",
    "language": "sql",
    "category": "Module 13: Window Functions (OVER, RANK, LAG)",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 6,
    "xp": 40,
    "description": "Compute cumulative revenue stream.",
    "concepts": [
      "Module 13 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Module 13 Review: Monthly Financial Report\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT id, amount, SUM(amount) OVER(ORDER BY id) AS cumulative FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Module 13 Review: Monthly Financial Report",
      "code": "SELECT id, amount, SUM(amount) OVER(ORDER BY id) AS cumulative FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT id, amount, SUM(amount) OVER(ORDER BY id) AS cumulative FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT id, amount, SUM(amount) OVER(ORDER BY id) AS cumulative FROM orders;\n",
    "hints": [
      "Execute: SELECT id, amount, SUM(amount) OVER(ORDER BY id) AS cumulative FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-144-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
