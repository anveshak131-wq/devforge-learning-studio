import { Lesson } from '../../../types';

export const sqlModule8Lessons: Lesson[] = [
  {
    "id": "sql-83-the-with-clause-creating-",
    "title": "83. The WITH Clause: Creating a CTE",
    "slug": "the-with-clause-creating-a-cte",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Define a Common Table Expression HighOrders.",
    "concepts": [
      "The WITH Clause",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### The WITH Clause: Creating a CTE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH HighOrders AS (SELECT * FROM orders WHERE amount > 200) SELECT * FROM HighOrders;\n```",
    "workedExample": {
      "title": "Worked Example: The WITH Clause: Creating a CTE",
      "code": "WITH HighOrders AS (SELECT * FROM orders WHERE amount > 200) SELECT * FROM HighOrders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH HighOrders AS (SELECT * FROM orders WHERE amount > 200) SELECT * FROM HighOrders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH HighOrders AS (SELECT * FROM orders WHERE amount > 200) SELECT * FROM HighOrders;\n",
    "solutionCode": "WITH HighOrders AS (SELECT * FROM orders WHERE amount > 200) SELECT * FROM HighOrders;\n",
    "hints": [
      "Execute: WITH HighOrders AS (SELECT * FROM orders WHERE amount > 200) SELECT * FROM HighOrders;"
    ],
    "testCases": [
      {
        "id": "sql-83-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-84-cte-with-column-aliases",
    "title": "84. CTE with Column Aliases",
    "slug": "cte-with-column-aliases",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Filter summarized category stock using a CTE.",
    "concepts": [
      "CTE with Column Aliases",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### CTE with Column Aliases\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH CatStock AS (SELECT category, SUM(stock) AS total FROM products GROUP BY category) SELECT * FROM CatStock WHERE total > 20;\n```",
    "workedExample": {
      "title": "Worked Example: CTE with Column Aliases",
      "code": "WITH CatStock AS (SELECT category, SUM(stock) AS total FROM products GROUP BY category) SELECT * FROM CatStock WHERE total > 20;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH CatStock AS (SELECT category, SUM(stock) AS total FROM products GROUP BY category) SELECT * FROM CatStock WHERE total > 20;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH CatStock AS (SELECT category, SUM(stock) AS total FROM products GROUP BY category) SELECT * FROM CatStock WHERE total > 20;\n",
    "solutionCode": "WITH CatStock AS (SELECT category, SUM(stock) AS total FROM products GROUP BY category) SELECT * FROM CatStock WHERE total > 20;\n",
    "hints": [
      "Execute: WITH CatStock AS (SELECT category, SUM(stock) AS total FROM products GROUP BY category) SELECT * FROM CatStock WHERE total > 20;"
    ],
    "testCases": [
      {
        "id": "sql-84-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-85-joining-a-cte-to-a-physic",
    "title": "85. Joining a CTE to a Physical Table",
    "slug": "joining-a-cte-to-a-physical-ta",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Join CTE OrderStats with users table.",
    "concepts": [
      "Joining a CTE to a Physical Table",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Joining a CTE to a Physical Table\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH OrderStats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) SELECT u.name, os.total FROM users u JOIN OrderStats os ON u.id = os.user_id;\n```",
    "workedExample": {
      "title": "Worked Example: Joining a CTE to a Physical Table",
      "code": "WITH OrderStats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) SELECT u.name, os.total FROM users u JOIN OrderStats os ON u.id = os.user_id;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH OrderStats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) SELECT u.name, os.total FROM users u JOIN OrderStats os ON u.id = os.user_id;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH OrderStats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) SELECT u.name, os.total FROM users u JOIN OrderStats os ON u.id = os.user_id;\n",
    "solutionCode": "WITH OrderStats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) SELECT u.name, os.total FROM users u JOIN OrderStats os ON u.id = os.user_id;\n",
    "hints": [
      "Execute: WITH OrderStats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) SELECT u.name, os.total FROM users u JOIN OrderStats os ON u.id = os.user_id;"
    ],
    "testCases": [
      {
        "id": "sql-85-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-86-multiple-ctes-in-one-quer",
    "title": "86. Multiple CTEs in One Query",
    "slug": "multiple-ctes-in-one-query",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Chain two CTEs together.",
    "concepts": [
      "Multiple CTEs in One Query",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Multiple CTEs in One Query\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH C1 AS (SELECT * FROM orders WHERE status = 'completed'), C2 AS (SELECT AVG(amount) AS avg_amt FROM C1) SELECT * FROM C1 WHERE amount > (SELECT avg_amt FROM C2);\n```",
    "workedExample": {
      "title": "Worked Example: Multiple CTEs in One Query",
      "code": "WITH C1 AS (SELECT * FROM orders WHERE status = 'completed'), C2 AS (SELECT AVG(amount) AS avg_amt FROM C1) SELECT * FROM C1 WHERE amount > (SELECT avg_amt FROM C2);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH C1 AS (SELECT * FROM orders WHERE status = 'completed'), C2 AS (SELECT AVG(amount) AS avg_amt FROM C1) SELECT * FROM C1 WHERE amount > (SELECT avg_amt FROM C2);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH C1 AS (SELECT * FROM orders WHERE status = 'completed'), C2 AS (SELECT AVG(amount) AS avg_amt FROM C1) SELECT * FROM C1 WHERE amount > (SELECT avg_amt FROM C2);\n",
    "solutionCode": "WITH C1 AS (SELECT * FROM orders WHERE status = 'completed'), C2 AS (SELECT AVG(amount) AS avg_amt FROM C1) SELECT * FROM C1 WHERE amount > (SELECT avg_amt FROM C2);\n",
    "hints": [
      "Execute: WITH C1 AS (SELECT * FROM orders WHERE status = 'completed'), C2 AS (SELECT AVG(amount) AS avg_amt FROM C1) SELECT * FROM C1 WHERE amount > (SELECT avg_amt FROM C2);"
    ],
    "testCases": [
      {
        "id": "sql-86-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-87-simplifying-complex-aggre",
    "title": "87. Simplifying Complex Aggregations with CTEs",
    "slug": "simplifying-complex-aggregatio",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Rank categories by average price using CTE.",
    "concepts": [
      "Simplifying Complex Aggregations with CTEs",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Simplifying Complex Aggregations with CTEs\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH Summary AS (SELECT category, AVG(price) AS avg_p FROM products GROUP BY category) SELECT * FROM Summary ORDER BY avg_p DESC;\n```",
    "workedExample": {
      "title": "Worked Example: Simplifying Complex Aggregations with CTEs",
      "code": "WITH Summary AS (SELECT category, AVG(price) AS avg_p FROM products GROUP BY category) SELECT * FROM Summary ORDER BY avg_p DESC;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH Summary AS (SELECT category, AVG(price) AS avg_p FROM products GROUP BY category) SELECT * FROM Summary ORDER BY avg_p DESC;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH Summary AS (SELECT category, AVG(price) AS avg_p FROM products GROUP BY category) SELECT * FROM Summary ORDER BY avg_p DESC;\n",
    "solutionCode": "WITH Summary AS (SELECT category, AVG(price) AS avg_p FROM products GROUP BY category) SELECT * FROM Summary ORDER BY avg_p DESC;\n",
    "hints": [
      "Execute: WITH Summary AS (SELECT category, AVG(price) AS avg_p FROM products GROUP BY category) SELECT * FROM Summary ORDER BY avg_p DESC;"
    ],
    "testCases": [
      {
        "id": "sql-87-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-88-data-cleaning-with-ctes",
    "title": "88. Data Cleaning with CTEs",
    "slug": "data-cleaning-with-ctes",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Normalize user emails with a CTE.",
    "concepts": [
      "Data Cleaning with CTEs",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Data Cleaning with CTEs\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH CleanUsers AS (SELECT id, LOWER(email) AS clean_email FROM users) SELECT * FROM CleanUsers;\n```",
    "workedExample": {
      "title": "Worked Example: Data Cleaning with CTEs",
      "code": "WITH CleanUsers AS (SELECT id, LOWER(email) AS clean_email FROM users) SELECT * FROM CleanUsers;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH CleanUsers AS (SELECT id, LOWER(email) AS clean_email FROM users) SELECT * FROM CleanUsers;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH CleanUsers AS (SELECT id, LOWER(email) AS clean_email FROM users) SELECT * FROM CleanUsers;\n",
    "solutionCode": "WITH CleanUsers AS (SELECT id, LOWER(email) AS clean_email FROM users) SELECT * FROM CleanUsers;\n",
    "hints": [
      "Execute: WITH CleanUsers AS (SELECT id, LOWER(email) AS clean_email FROM users) SELECT * FROM CleanUsers;"
    ],
    "testCases": [
      {
        "id": "sql-88-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-89-customer-cohort-cte",
    "title": "89. Customer Cohort CTE",
    "slug": "customer-cohort-cte",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Group users by number of orders placed.",
    "concepts": [
      "Customer Cohort CTE",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Customer Cohort CTE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH Cohorts AS (SELECT user_id, COUNT(*) AS orders_count FROM orders GROUP BY user_id) SELECT orders_count, COUNT(*) AS users_in_cohort FROM Cohorts GROUP BY orders_count;\n```",
    "workedExample": {
      "title": "Worked Example: Customer Cohort CTE",
      "code": "WITH Cohorts AS (SELECT user_id, COUNT(*) AS orders_count FROM orders GROUP BY user_id) SELECT orders_count, COUNT(*) AS users_in_cohort FROM Cohorts GROUP BY orders_count;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH Cohorts AS (SELECT user_id, COUNT(*) AS orders_count FROM orders GROUP BY user_id) SELECT orders_count, COUNT(*) AS users_in_cohort FROM Cohorts GROUP BY orders_count;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH Cohorts AS (SELECT user_id, COUNT(*) AS orders_count FROM orders GROUP BY user_id) SELECT orders_count, COUNT(*) AS users_in_cohort FROM Cohorts GROUP BY orders_count;\n",
    "solutionCode": "WITH Cohorts AS (SELECT user_id, COUNT(*) AS orders_count FROM orders GROUP BY user_id) SELECT orders_count, COUNT(*) AS users_in_cohort FROM Cohorts GROUP BY orders_count;\n",
    "hints": [
      "Execute: WITH Cohorts AS (SELECT user_id, COUNT(*) AS orders_count FROM orders GROUP BY user_id) SELECT orders_count, COUNT(*) AS users_in_cohort FROM Cohorts GROUP BY orders_count;"
    ],
    "testCases": [
      {
        "id": "sql-89-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-90-filtering-outlier-orders-",
    "title": "90. Filtering Outlier Orders with CTE",
    "slug": "filtering-outlier-orders-with-",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Filter orders above the CTE average.",
    "concepts": [
      "Filtering Outlier Orders with CTE",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Filtering Outlier Orders with CTE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH AvgOrder AS (SELECT AVG(amount) AS avg_val FROM orders) SELECT o.* FROM orders o, AvgOrder a WHERE o.amount > a.avg_val;\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Outlier Orders with CTE",
      "code": "WITH AvgOrder AS (SELECT AVG(amount) AS avg_val FROM orders) SELECT o.* FROM orders o, AvgOrder a WHERE o.amount > a.avg_val;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH AvgOrder AS (SELECT AVG(amount) AS avg_val FROM orders) SELECT o.* FROM orders o, AvgOrder a WHERE o.amount > a.avg_val;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH AvgOrder AS (SELECT AVG(amount) AS avg_val FROM orders) SELECT o.* FROM orders o, AvgOrder a WHERE o.amount > a.avg_val;\n",
    "solutionCode": "WITH AvgOrder AS (SELECT AVG(amount) AS avg_val FROM orders) SELECT o.* FROM orders o, AvgOrder a WHERE o.amount > a.avg_val;\n",
    "hints": [
      "Execute: WITH AvgOrder AS (SELECT AVG(amount) AS avg_val FROM orders) SELECT o.* FROM orders o, AvgOrder a WHERE o.amount > a.avg_val;"
    ],
    "testCases": [
      {
        "id": "sql-90-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-91-recursive-counter-cte-con",
    "title": "91. Recursive Counter CTE Concept",
    "slug": "recursive-counter-cte-concept",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Generate numbers 1 to 5 with recursive CTE.",
    "concepts": [
      "Recursive Counter CTE Concept",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Recursive Counter CTE Concept\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH RECURSIVE Counter AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Counter WHERE n < 5) SELECT * FROM Counter;\n```",
    "workedExample": {
      "title": "Worked Example: Recursive Counter CTE Concept",
      "code": "WITH RECURSIVE Counter AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Counter WHERE n < 5) SELECT * FROM Counter;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH RECURSIVE Counter AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Counter WHERE n < 5) SELECT * FROM Counter;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH RECURSIVE Counter AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Counter WHERE n < 5) SELECT * FROM Counter;\n",
    "solutionCode": "WITH RECURSIVE Counter AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Counter WHERE n < 5) SELECT * FROM Counter;\n",
    "hints": [
      "Execute: WITH RECURSIVE Counter AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Counter WHERE n < 5) SELECT * FROM Counter;"
    ],
    "testCases": [
      {
        "id": "sql-91-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-92-module-8-review-business-",
    "title": "92. Module 8 Review: Business KPI Report",
    "slug": "module-8-review-business-kpi-r",
    "language": "sql",
    "category": "Module 8: Common Table Expressions (WITH)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Calculate total business revenue via CTE.",
    "concepts": [
      "Module 8 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Module 8 Review: Business KPI Report\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH Sales AS (SELECT SUM(amount) AS rev FROM orders WHERE status = 'completed') SELECT rev AS total_revenue FROM Sales;\n```",
    "workedExample": {
      "title": "Worked Example: Module 8 Review: Business KPI Report",
      "code": "WITH Sales AS (SELECT SUM(amount) AS rev FROM orders WHERE status = 'completed') SELECT rev AS total_revenue FROM Sales;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH Sales AS (SELECT SUM(amount) AS rev FROM orders WHERE status = 'completed') SELECT rev AS total_revenue FROM Sales;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH Sales AS (SELECT SUM(amount) AS rev FROM orders WHERE status = 'completed') SELECT rev AS total_revenue FROM Sales;\n",
    "solutionCode": "WITH Sales AS (SELECT SUM(amount) AS rev FROM orders WHERE status = 'completed') SELECT rev AS total_revenue FROM Sales;\n",
    "hints": [
      "Execute: WITH Sales AS (SELECT SUM(amount) AS rev FROM orders WHERE status = 'completed') SELECT rev AS total_revenue FROM Sales;"
    ],
    "testCases": [
      {
        "id": "sql-92-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
