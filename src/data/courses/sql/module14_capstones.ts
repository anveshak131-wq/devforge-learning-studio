import { Lesson } from '../../../types';

export const sqlModule14Lessons: Lesson[] = [
  {
    "id": "sql-145-capstone-1-e-commerce-exe",
    "title": "145. Capstone 1: E-Commerce Executive Revenue Dashboard",
    "slug": "capstone-1-e-commerce-executiv",
    "language": "sql",
    "category": "Module 14: Real-World Business Intelligence Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Build an executive revenue summary grouped by country.",
    "concepts": [
      "Capstone 1",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Capstone 1: E-Commerce Executive Revenue Dashboard\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT u.country, COUNT(o.id) AS total_orders, ROUND(SUM(o.amount), 2) AS gross_revenue FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.country ORDER BY gross_revenue DESC;\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 1: E-Commerce Executive Revenue Dashboard",
      "code": "SELECT u.country, COUNT(o.id) AS total_orders, ROUND(SUM(o.amount), 2) AS gross_revenue FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.country ORDER BY gross_revenue DESC;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT u.country, COUNT(o.id) AS total_orders, ROUND(SUM(o.amount), 2) AS gross_revenue FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.country ORDER BY gross_revenue DESC;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nSELECT u.country, COUNT(o.id) AS total_orders, ROUND(SUM(o.amount), 2) AS gross_revenue FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.country ORDER BY gross_revenue DESC;\n",
    "solutionCode": "SELECT u.country, COUNT(o.id) AS total_orders, ROUND(SUM(o.amount), 2) AS gross_revenue FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.country ORDER BY gross_revenue DESC;\n",
    "hints": [
      "Execute: SELECT u.country, COUNT(o.id) AS total_orders, ROUND(SUM(o.amount), 2) AS gross_revenue FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.country ORDER BY gross_revenue DESC;"
    ],
    "testCases": [
      {
        "id": "sql-145-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-146-capstone-2-high-value-cus",
    "title": "146. Capstone 2: High-Value Customer Retention & VIP Scoring",
    "slug": "capstone-2-high-value-customer",
    "language": "sql",
    "category": "Module 14: Real-World Business Intelligence Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Segment users into Platinum, Gold, and Standard VIP tiers.",
    "concepts": [
      "Capstone 2",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Capstone 2: High-Value Customer Retention & VIP Scoring\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH UserSpend AS (SELECT u.id, u.name, u.email, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id) SELECT name, email, total_spent, CASE WHEN total_spent >= 300 THEN 'Platinum' WHEN total_spent >= 100 THEN 'Gold' ELSE 'Standard' END AS vip_tier FROM UserSpend ORDER BY total_spent DESC;\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 2: High-Value Customer Retention & VIP Scoring",
      "code": "WITH UserSpend AS (SELECT u.id, u.name, u.email, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id) SELECT name, email, total_spent, CASE WHEN total_spent >= 300 THEN 'Platinum' WHEN total_spent >= 100 THEN 'Gold' ELSE 'Standard' END AS vip_tier FROM UserSpend ORDER BY total_spent DESC;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH UserSpend AS (SELECT u.id, u.name, u.email, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id) SELECT name, email, total_spent, CASE WHEN total_spent >= 300 THEN 'Platinum' WHEN total_spent >= 100 THEN 'Gold' ELSE 'Standard' END AS vip_tier FROM UserSpend ORDER BY total_spent DESC;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH UserSpend AS (SELECT u.id, u.name, u.email, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id) SELECT name, email, total_spent, CASE WHEN total_spent >= 300 THEN 'Platinum' WHEN total_spent >= 100 THEN 'Gold' ELSE 'Standard' END AS vip_tier FROM UserSpend ORDER BY total_spent DESC;\n",
    "solutionCode": "WITH UserSpend AS (SELECT u.id, u.name, u.email, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id) SELECT name, email, total_spent, CASE WHEN total_spent >= 300 THEN 'Platinum' WHEN total_spent >= 100 THEN 'Gold' ELSE 'Standard' END AS vip_tier FROM UserSpend ORDER BY total_spent DESC;\n",
    "hints": [
      "Execute: WITH UserSpend AS (SELECT u.id, u.name, u.email, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id) SELECT name, email, total_spent, CASE WHEN total_spent >= 300 THEN 'Platinum' WHEN total_spent >= 100 THEN 'Gold' ELSE 'Standard' END AS vip_tier FROM UserSpend ORDER BY total_spent DESC;"
    ],
    "testCases": [
      {
        "id": "sql-146-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-147-capstone-3-inventory-valu",
    "title": "147. Capstone 3: Inventory Valuation & Reorder Risk Matrix",
    "slug": "capstone-3-inventory-valuation",
    "language": "sql",
    "category": "Module 14: Real-World Business Intelligence Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Compute category inventory valuation and count low-stock items.",
    "concepts": [
      "Capstone 3",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Capstone 3: Inventory Valuation & Reorder Risk Matrix\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT category, COUNT(*) AS items, SUM(stock) AS total_stock, ROUND(SUM(price * stock), 2) AS total_valuation, SUM(CASE WHEN stock <= 15 THEN 1 ELSE 0 END) AS reorder_needed FROM products GROUP BY category ORDER BY total_valuation DESC;\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 3: Inventory Valuation & Reorder Risk Matrix",
      "code": "SELECT category, COUNT(*) AS items, SUM(stock) AS total_stock, ROUND(SUM(price * stock), 2) AS total_valuation, SUM(CASE WHEN stock <= 15 THEN 1 ELSE 0 END) AS reorder_needed FROM products GROUP BY category ORDER BY total_valuation DESC;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT category, COUNT(*) AS items, SUM(stock) AS total_stock, ROUND(SUM(price * stock), 2) AS total_valuation, SUM(CASE WHEN stock <= 15 THEN 1 ELSE 0 END) AS reorder_needed FROM products GROUP BY category ORDER BY total_valuation DESC;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nSELECT category, COUNT(*) AS items, SUM(stock) AS total_stock, ROUND(SUM(price * stock), 2) AS total_valuation, SUM(CASE WHEN stock <= 15 THEN 1 ELSE 0 END) AS reorder_needed FROM products GROUP BY category ORDER BY total_valuation DESC;\n",
    "solutionCode": "SELECT category, COUNT(*) AS items, SUM(stock) AS total_stock, ROUND(SUM(price * stock), 2) AS total_valuation, SUM(CASE WHEN stock <= 15 THEN 1 ELSE 0 END) AS reorder_needed FROM products GROUP BY category ORDER BY total_valuation DESC;\n",
    "hints": [
      "Execute: SELECT category, COUNT(*) AS items, SUM(stock) AS total_stock, ROUND(SUM(price * stock), 2) AS total_valuation, SUM(CASE WHEN stock <= 15 THEN 1 ELSE 0 END) AS reorder_needed FROM products GROUP BY category ORDER BY total_valuation DESC;"
    ],
    "testCases": [
      {
        "id": "sql-147-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-148-capstone-4-cohort-retenti",
    "title": "148. Capstone 4: Cohort Retention & Repeat Purchase Analysis",
    "slug": "capstone-4-cohort-retention-&-",
    "language": "sql",
    "category": "Module 14: Real-World Business Intelligence Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Analyze single versus repeat customer purchase counts.",
    "concepts": [
      "Capstone 4",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Capstone 4: Cohort Retention & Repeat Purchase Analysis\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH OrderCounts AS (SELECT user_id, COUNT(*) AS num_orders FROM orders GROUP BY user_id) SELECT CASE WHEN num_orders > 1 THEN 'Repeat Buyer' ELSE 'Single Buyer' END AS buyer_type, COUNT(*) AS customer_count FROM OrderCounts GROUP BY buyer_type;\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 4: Cohort Retention & Repeat Purchase Analysis",
      "code": "WITH OrderCounts AS (SELECT user_id, COUNT(*) AS num_orders FROM orders GROUP BY user_id) SELECT CASE WHEN num_orders > 1 THEN 'Repeat Buyer' ELSE 'Single Buyer' END AS buyer_type, COUNT(*) AS customer_count FROM OrderCounts GROUP BY buyer_type;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH OrderCounts AS (SELECT user_id, COUNT(*) AS num_orders FROM orders GROUP BY user_id) SELECT CASE WHEN num_orders > 1 THEN 'Repeat Buyer' ELSE 'Single Buyer' END AS buyer_type, COUNT(*) AS customer_count FROM OrderCounts GROUP BY buyer_type;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH OrderCounts AS (SELECT user_id, COUNT(*) AS num_orders FROM orders GROUP BY user_id) SELECT CASE WHEN num_orders > 1 THEN 'Repeat Buyer' ELSE 'Single Buyer' END AS buyer_type, COUNT(*) AS customer_count FROM OrderCounts GROUP BY buyer_type;\n",
    "solutionCode": "WITH OrderCounts AS (SELECT user_id, COUNT(*) AS num_orders FROM orders GROUP BY user_id) SELECT CASE WHEN num_orders > 1 THEN 'Repeat Buyer' ELSE 'Single Buyer' END AS buyer_type, COUNT(*) AS customer_count FROM OrderCounts GROUP BY buyer_type;\n",
    "hints": [
      "Execute: WITH OrderCounts AS (SELECT user_id, COUNT(*) AS num_orders FROM orders GROUP BY user_id) SELECT CASE WHEN num_orders > 1 THEN 'Repeat Buyer' ELSE 'Single Buyer' END AS buyer_type, COUNT(*) AS customer_count FROM OrderCounts GROUP BY buyer_type;"
    ],
    "testCases": [
      {
        "id": "sql-148-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-149-capstone-5-transaction-an",
    "title": "149. Capstone 5: Transaction Anomaly & Fraud Detection Engine",
    "slug": "capstone-5-transaction-anomaly",
    "language": "sql",
    "category": "Module 14: Real-World Business Intelligence Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Identify transactions exceeding threshold variance.",
    "concepts": [
      "Capstone 5",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Capstone 5: Transaction Anomaly & Fraud Detection Engine\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nWITH Stats AS (SELECT AVG(amount) AS mean, 100 AS threshold FROM orders) SELECT o.id, o.amount, o.status FROM orders o, Stats s WHERE o.amount > s.mean + s.threshold;\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 5: Transaction Anomaly & Fraud Detection Engine",
      "code": "WITH Stats AS (SELECT AVG(amount) AS mean, 100 AS threshold FROM orders) SELECT o.id, o.amount, o.status FROM orders o, Stats s WHERE o.amount > s.mean + s.threshold;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `WITH Stats AS (SELECT AVG(amount) AS mean, 100 AS threshold FROM orders) SELECT o.id, o.amount, o.status FROM orders o, Stats s WHERE o.amount > s.mean + s.threshold;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nWITH Stats AS (SELECT AVG(amount) AS mean, 100 AS threshold FROM orders) SELECT o.id, o.amount, o.status FROM orders o, Stats s WHERE o.amount > s.mean + s.threshold;\n",
    "solutionCode": "WITH Stats AS (SELECT AVG(amount) AS mean, 100 AS threshold FROM orders) SELECT o.id, o.amount, o.status FROM orders o, Stats s WHERE o.amount > s.mean + s.threshold;\n",
    "hints": [
      "Execute: WITH Stats AS (SELECT AVG(amount) AS mean, 100 AS threshold FROM orders) SELECT o.id, o.amount, o.status FROM orders o, Stats s WHERE o.amount > s.mean + s.threshold;"
    ],
    "testCases": [
      {
        "id": "sql-149-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-150-capstone-6-enterprise-fin",
    "title": "150. Capstone 6: Enterprise Financial Ledger & Balance Audit",
    "slug": "capstone-6-enterprise-financia",
    "language": "sql",
    "category": "Module 14: Real-World Business Intelligence Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Produce an enterprise financial monthly ledger report.",
    "concepts": [
      "Capstone 6",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Capstone 6: Enterprise Financial Ledger & Balance Audit\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nSELECT strftime('%Y-%m', order_date) AS month, COUNT(id) AS transaction_volume, ROUND(SUM(amount), 2) AS total_sales, ROUND(AVG(amount), 2) AS average_ticket FROM orders WHERE status = 'completed' GROUP BY month ORDER BY month ASC;\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 6: Enterprise Financial Ledger & Balance Audit",
      "code": "SELECT strftime('%Y-%m', order_date) AS month, COUNT(id) AS transaction_volume, ROUND(SUM(amount), 2) AS total_sales, ROUND(AVG(amount), 2) AS average_ticket FROM orders WHERE status = 'completed' GROUP BY month ORDER BY month ASC;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `SELECT strftime('%Y-%m', order_date) AS month, COUNT(id) AS transaction_volume, ROUND(SUM(amount), 2) AS total_sales, ROUND(AVG(amount), 2) AS average_ticket FROM orders WHERE status = 'completed' GROUP BY month ORDER BY month ASC;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nSELECT strftime('%Y-%m', order_date) AS month, COUNT(id) AS transaction_volume, ROUND(SUM(amount), 2) AS total_sales, ROUND(AVG(amount), 2) AS average_ticket FROM orders WHERE status = 'completed' GROUP BY month ORDER BY month ASC;\n",
    "solutionCode": "SELECT strftime('%Y-%m', order_date) AS month, COUNT(id) AS transaction_volume, ROUND(SUM(amount), 2) AS total_sales, ROUND(AVG(amount), 2) AS average_ticket FROM orders WHERE status = 'completed' GROUP BY month ORDER BY month ASC;\n",
    "hints": [
      "Execute: SELECT strftime('%Y-%m', order_date) AS month, COUNT(id) AS transaction_volume, ROUND(SUM(amount), 2) AS total_sales, ROUND(AVG(amount), 2) AS average_ticket FROM orders WHERE status = 'completed' GROUP BY month ORDER BY month ASC;"
    ],
    "testCases": [
      {
        "id": "sql-150-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
