import { Lesson } from '../../../types';

export const sqlModule7Lessons: Lesson[] = [
  {
    "id": "sql-71-scalar-subqueries-in-sele",
    "title": "71. Scalar Subqueries in SELECT",
    "slug": "scalar-subqueries-in-select",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Compare each product price to the overall average.",
    "concepts": [
      "Scalar Subqueries in SELECT",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Scalar Subqueries in SELECT\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, price, (SELECT AVG(price) FROM products) AS avg_price FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Scalar Subqueries in SELECT",
      "code": "SELECT name, price, (SELECT AVG(price) FROM products) AS avg_price FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, price, (SELECT AVG(price) FROM products) AS avg_price FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, price, (SELECT AVG(price) FROM products) AS avg_price FROM products;\n",
    "hints": [
      "Execute: SELECT name, price, (SELECT AVG(price) FROM products) AS avg_price FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-71-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-72-difference-from-average-p",
    "title": "72. Difference from Average Price",
    "slug": "difference-from-average-price",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Compute price difference from overall average.",
    "concepts": [
      "Difference from Average Price",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Difference from Average Price\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, price - (SELECT AVG(price) FROM products) AS diff FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Difference from Average Price",
      "code": "SELECT name, price - (SELECT AVG(price) FROM products) AS diff FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, price - (SELECT AVG(price) FROM products) AS diff FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, price - (SELECT AVG(price) FROM products) AS diff FROM products;\n",
    "hints": [
      "Execute: SELECT name, price - (SELECT AVG(price) FROM products) AS diff FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-72-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-73-subqueries-in-where-with-",
    "title": "73. Subqueries in WHERE with Comparison Operators",
    "slug": "subqueries-in-where-with-compa",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find products priced higher than the average product.",
    "concepts": [
      "Subqueries in WHERE with Comparison Operators",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Subqueries in WHERE with Comparison Operators\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);\n```",
    "workedExample": {
      "title": "Worked Example: Subqueries in WHERE with Comparison Operators",
      "code": "SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);\n",
    "hints": [
      "Execute: SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);"
    ],
    "testCases": [
      {
        "id": "sql-73-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-74-subquery-with-in-...",
    "title": "74. Subquery with IN (...)",
    "slug": "subquery-with-in-...",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find users who have at least one completed order.",
    "concepts": [
      "Subquery with IN (...)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Subquery with IN (...)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE status = 'completed');\n```",
    "workedExample": {
      "title": "Worked Example: Subquery with IN (...)",
      "code": "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE status = 'completed');",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE status = 'completed');`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE status = 'completed');\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE status = 'completed');"
    ],
    "testCases": [
      {
        "id": "sql-74-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-75-subquery-with-not-in-...",
    "title": "75. Subquery with NOT IN (...)",
    "slug": "subquery-with-not-in-...",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find users with zero orders using subquery.",
    "concepts": [
      "Subquery with NOT IN (...)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Subquery with NOT IN (...)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders);\n```",
    "workedExample": {
      "title": "Worked Example: Subquery with NOT IN (...)",
      "code": "SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders);\n",
    "hints": [
      "Execute: SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders);"
    ],
    "testCases": [
      {
        "id": "sql-75-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-76-derived-tables-in-from-cl",
    "title": "76. Derived Tables in FROM Clause",
    "slug": "derived-tables-in-from-clause",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Compute average on a filtered derived table.",
    "concepts": [
      "Derived Tables in FROM Clause",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Derived Tables in FROM Clause\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT AVG(amount) AS avg_completed FROM (SELECT amount FROM orders WHERE status = 'completed') sub;\n```",
    "workedExample": {
      "title": "Worked Example: Derived Tables in FROM Clause",
      "code": "SELECT AVG(amount) AS avg_completed FROM (SELECT amount FROM orders WHERE status = 'completed') sub;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT AVG(amount) AS avg_completed FROM (SELECT amount FROM orders WHERE status = 'completed') sub;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT AVG(amount) AS avg_completed FROM (SELECT amount FROM orders WHERE status = 'completed') sub;\n",
    "hints": [
      "Execute: SELECT AVG(amount) AS avg_completed FROM (SELECT amount FROM orders WHERE status = 'completed') sub;"
    ],
    "testCases": [
      {
        "id": "sql-76-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-77-exists-operator",
    "title": "77. EXISTS Operator",
    "slug": "exists-operator",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Check existence of customer orders with EXISTS.",
    "concepts": [
      "EXISTS Operator",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### EXISTS Operator\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT u.name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);\n```",
    "workedExample": {
      "title": "Worked Example: EXISTS Operator",
      "code": "SELECT u.name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT u.name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT u.name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);\n",
    "hints": [
      "Execute: SELECT u.name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);"
    ],
    "testCases": [
      {
        "id": "sql-77-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-78-not-exists-operator",
    "title": "78. NOT EXISTS Operator",
    "slug": "not-exists-operator",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find users with no orders using NOT EXISTS.",
    "concepts": [
      "NOT EXISTS Operator",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### NOT EXISTS Operator\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT u.name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);\n```",
    "workedExample": {
      "title": "Worked Example: NOT EXISTS Operator",
      "code": "SELECT u.name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT u.name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT u.name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);\n",
    "hints": [
      "Execute: SELECT u.name FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);"
    ],
    "testCases": [
      {
        "id": "sql-78-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-79-correlated-subqueries",
    "title": "79. Correlated Subqueries",
    "slug": "correlated-subqueries",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find orders above average.",
    "concepts": [
      "Correlated Subqueries",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Correlated Subqueries\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT o.id, o.amount FROM orders o WHERE o.amount >= (SELECT AVG(amount) FROM orders);\n```",
    "workedExample": {
      "title": "Worked Example: Correlated Subqueries",
      "code": "SELECT o.id, o.amount FROM orders o WHERE o.amount >= (SELECT AVG(amount) FROM orders);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT o.id, o.amount FROM orders o WHERE o.amount >= (SELECT AVG(amount) FROM orders);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT o.id, o.amount FROM orders o WHERE o.amount >= (SELECT AVG(amount) FROM orders);\n",
    "hints": [
      "Execute: SELECT o.id, o.amount FROM orders o WHERE o.amount >= (SELECT AVG(amount) FROM orders);"
    ],
    "testCases": [
      {
        "id": "sql-79-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-80-subquery-for-max-order-am",
    "title": "80. Subquery for Max Order Amount",
    "slug": "subquery-for-max-order-amount",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find the largest single transaction.",
    "concepts": [
      "Subquery for Max Order Amount",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Subquery for Max Order Amount\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT * FROM orders WHERE amount = (SELECT MAX(amount) FROM orders);\n```",
    "workedExample": {
      "title": "Worked Example: Subquery for Max Order Amount",
      "code": "SELECT * FROM orders WHERE amount = (SELECT MAX(amount) FROM orders);",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT * FROM orders WHERE amount = (SELECT MAX(amount) FROM orders);`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT * FROM orders WHERE amount = (SELECT MAX(amount) FROM orders);\n",
    "hints": [
      "Execute: SELECT * FROM orders WHERE amount = (SELECT MAX(amount) FROM orders);"
    ],
    "testCases": [
      {
        "id": "sql-80-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-81-category-price-leaders",
    "title": "81. Category Price Leaders",
    "slug": "category-price-leaders",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find top-priced products.",
    "concepts": [
      "Category Price Leaders",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Category Price Leaders\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name, category, price FROM products WHERE price >= 200;\n```",
    "workedExample": {
      "title": "Worked Example: Category Price Leaders",
      "code": "SELECT name, category, price FROM products WHERE price >= 200;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name, category, price FROM products WHERE price >= 200;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name, category, price FROM products WHERE price >= 200;\n",
    "hints": [
      "Execute: SELECT name, category, price FROM products WHERE price >= 200;"
    ],
    "testCases": [
      {
        "id": "sql-81-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-82-module-7-review-above-ave",
    "title": "82. Module 7 Review: Above-Average Spenders",
    "slug": "module-7-review-above-average-",
    "language": "sql",
    "category": "Module 7: Subqueries & Nested Queries",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Find users who placed above-average orders.",
    "concepts": [
      "Module 7 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Module 7 Review: Above-Average Spenders\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > (SELECT AVG(amount) FROM orders));\n```",
    "workedExample": {
      "title": "Worked Example: Module 7 Review: Above-Average Spenders",
      "code": "SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > (SELECT AVG(amount) FROM orders));",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > (SELECT AVG(amount) FROM orders));`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- Step 1: Write your SQL query below\n-- TODO: Write query below\n",
    "solutionCode": "SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > (SELECT AVG(amount) FROM orders));\n",
    "hints": [
      "Execute: SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > (SELECT AVG(amount) FROM orders));"
    ],
    "testCases": [
      {
        "id": "sql-82-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
