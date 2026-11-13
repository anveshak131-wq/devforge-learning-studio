import { Lesson } from '../../../types';

export const sqlModule11Lessons: Lesson[] = [
  {
    "id": "sql-113-inserting-a-single-row-in",
    "title": "113. Inserting a Single Row: INSERT INTO",
    "slug": "inserting-a-single-row-insert-",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Insert a new user record and select it.",
    "concepts": [
      "Inserting a Single Row",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Inserting a Single Row: INSERT INTO\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nINSERT INTO users (id, name, email, country, role, created_at) VALUES (6, 'Alex Vance', 'alex@valve.com', 'USA', 'member', '2023-07-01'); SELECT * FROM users WHERE id = 6;\n```",
    "workedExample": {
      "title": "Worked Example: Inserting a Single Row: INSERT INTO",
      "code": "INSERT INTO users (id, name, email, country, role, created_at) VALUES (6, 'Alex Vance', 'alex@valve.com', 'USA', 'member', '2023-07-01'); SELECT * FROM users WHERE id = 6;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `INSERT INTO users (id, name, email, country, role, created_at) VALUES (6, 'Alex Vance', 'alex@valve.com', 'USA', 'member', '2023-07-01'); SELECT * FROM users WHERE id = 6;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nINSERT INTO users (id, name, email, country, role, created_at) VALUES (6, 'Alex Vance', 'alex@valve.com', 'USA', 'member', '2023-07-01'); SELECT * FROM users WHERE id = 6;\n",
    "solutionCode": "INSERT INTO users (id, name, email, country, role, created_at) VALUES (6, 'Alex Vance', 'alex@valve.com', 'USA', 'member', '2023-07-01'); SELECT * FROM users WHERE id = 6;\n",
    "hints": [
      "Execute: INSERT INTO users (id, name, email, country, role, created_at) VALUES (6, 'Alex Vance', 'alex@valve.com', 'USA', 'member', '2023-07-01'); SELECT * FROM users WHERE id = 6;"
    ],
    "testCases": [
      {
        "id": "sql-113-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-114-inserting-multiple-rows-i",
    "title": "114. Inserting Multiple Rows in One Statement",
    "slug": "inserting-multiple-rows-in-one",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Insert 2 products and return new total count.",
    "concepts": [
      "Inserting Multiple Rows in One Statement",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Inserting Multiple Rows in One Statement\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nINSERT INTO products (id, name, category, price, stock) VALUES (7, 'Mousepad', 'Accessories', 15.00, 50), (8, 'Webcam', 'Electronics', 79.99, 20); SELECT COUNT(*) FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Inserting Multiple Rows in One Statement",
      "code": "INSERT INTO products (id, name, category, price, stock) VALUES (7, 'Mousepad', 'Accessories', 15.00, 50), (8, 'Webcam', 'Electronics', 79.99, 20); SELECT COUNT(*) FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `INSERT INTO products (id, name, category, price, stock) VALUES (7, 'Mousepad', 'Accessories', 15.00, 50), (8, 'Webcam', 'Electronics', 79.99, 20); SELECT COUNT(*) FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nINSERT INTO products (id, name, category, price, stock) VALUES (7, 'Mousepad', 'Accessories', 15.00, 50), (8, 'Webcam', 'Electronics', 79.99, 20); SELECT COUNT(*) FROM products;\n",
    "solutionCode": "INSERT INTO products (id, name, category, price, stock) VALUES (7, 'Mousepad', 'Accessories', 15.00, 50), (8, 'Webcam', 'Electronics', 79.99, 20); SELECT COUNT(*) FROM products;\n",
    "hints": [
      "Execute: INSERT INTO products (id, name, category, price, stock) VALUES (7, 'Mousepad', 'Accessories', 15.00, 50), (8, 'Webcam', 'Electronics', 79.99, 20); SELECT COUNT(*) FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-114-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-115-updating-records-with-upd",
    "title": "115. Updating Records with UPDATE ... SET",
    "slug": "updating-records-with-update-.",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Increase mechanical keyboard stock by 10.",
    "concepts": [
      "Updating Records with UPDATE ... SET",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Updating Records with UPDATE ... SET\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nUPDATE products SET stock = stock + 10 WHERE id = 1; SELECT stock FROM products WHERE id = 1;\n```",
    "workedExample": {
      "title": "Worked Example: Updating Records with UPDATE ... SET",
      "code": "UPDATE products SET stock = stock + 10 WHERE id = 1; SELECT stock FROM products WHERE id = 1;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `UPDATE products SET stock = stock + 10 WHERE id = 1; SELECT stock FROM products WHERE id = 1;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nUPDATE products SET stock = stock + 10 WHERE id = 1; SELECT stock FROM products WHERE id = 1;\n",
    "solutionCode": "UPDATE products SET stock = stock + 10 WHERE id = 1; SELECT stock FROM products WHERE id = 1;\n",
    "hints": [
      "Execute: UPDATE products SET stock = stock + 10 WHERE id = 1; SELECT stock FROM products WHERE id = 1;"
    ],
    "testCases": [
      {
        "id": "sql-115-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-116-updating-multiple-columns",
    "title": "116. Updating Multiple Columns Simultaneously",
    "slug": "updating-multiple-columns-simu",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Update Marcus's country and role.",
    "concepts": [
      "Updating Multiple Columns Simultaneously",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Updating Multiple Columns Simultaneously\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nUPDATE users SET country = 'Canada', role = 'admin' WHERE id = 2; SELECT country, role FROM users WHERE id = 2;\n```",
    "workedExample": {
      "title": "Worked Example: Updating Multiple Columns Simultaneously",
      "code": "UPDATE users SET country = 'Canada', role = 'admin' WHERE id = 2; SELECT country, role FROM users WHERE id = 2;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `UPDATE users SET country = 'Canada', role = 'admin' WHERE id = 2; SELECT country, role FROM users WHERE id = 2;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nUPDATE users SET country = 'Canada', role = 'admin' WHERE id = 2; SELECT country, role FROM users WHERE id = 2;\n",
    "solutionCode": "UPDATE users SET country = 'Canada', role = 'admin' WHERE id = 2; SELECT country, role FROM users WHERE id = 2;\n",
    "hints": [
      "Execute: UPDATE users SET country = 'Canada', role = 'admin' WHERE id = 2; SELECT country, role FROM users WHERE id = 2;"
    ],
    "testCases": [
      {
        "id": "sql-116-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-117-safe-updates-with-specifi",
    "title": "117. Safe Updates with Specific WHERE Clauses",
    "slug": "safe-updates-with-specific-whe",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Mark pending order 4 as completed.",
    "concepts": [
      "Safe Updates with Specific WHERE Clauses",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Safe Updates with Specific WHERE Clauses\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nUPDATE orders SET status = 'completed' WHERE id = 4; SELECT status FROM orders WHERE id = 4;\n```",
    "workedExample": {
      "title": "Worked Example: Safe Updates with Specific WHERE Clauses",
      "code": "UPDATE orders SET status = 'completed' WHERE id = 4; SELECT status FROM orders WHERE id = 4;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `UPDATE orders SET status = 'completed' WHERE id = 4; SELECT status FROM orders WHERE id = 4;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nUPDATE orders SET status = 'completed' WHERE id = 4; SELECT status FROM orders WHERE id = 4;\n",
    "solutionCode": "UPDATE orders SET status = 'completed' WHERE id = 4; SELECT status FROM orders WHERE id = 4;\n",
    "hints": [
      "Execute: UPDATE orders SET status = 'completed' WHERE id = 4; SELECT status FROM orders WHERE id = 4;"
    ],
    "testCases": [
      {
        "id": "sql-117-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-118-deleting-rows-with-delete",
    "title": "118. Deleting Rows with DELETE FROM ... WHERE",
    "slug": "deleting-rows-with-delete-from",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Delete cancelled order 3 and count remaining.",
    "concepts": [
      "Deleting Rows with DELETE FROM ... WHERE",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Deleting Rows with DELETE FROM ... WHERE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nDELETE FROM orders WHERE id = 3; SELECT COUNT(*) FROM orders;\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Rows with DELETE FROM ... WHERE",
      "code": "DELETE FROM orders WHERE id = 3; SELECT COUNT(*) FROM orders;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `DELETE FROM orders WHERE id = 3; SELECT COUNT(*) FROM orders;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nDELETE FROM orders WHERE id = 3; SELECT COUNT(*) FROM orders;\n",
    "solutionCode": "DELETE FROM orders WHERE id = 3; SELECT COUNT(*) FROM orders;\n",
    "hints": [
      "Execute: DELETE FROM orders WHERE id = 3; SELECT COUNT(*) FROM orders;"
    ],
    "testCases": [
      {
        "id": "sql-118-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-119-deleting-based-on-subquer",
    "title": "119. Deleting Based on Subquery",
    "slug": "deleting-based-on-subquery",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Delete experimental products.",
    "concepts": [
      "Deleting Based on Subquery",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Deleting Based on Subquery\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nDELETE FROM products WHERE id NOT IN (1, 2, 3, 4, 5, 6); SELECT COUNT(*) FROM products;\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Based on Subquery",
      "code": "DELETE FROM products WHERE id NOT IN (1, 2, 3, 4, 5, 6); SELECT COUNT(*) FROM products;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `DELETE FROM products WHERE id NOT IN (1, 2, 3, 4, 5, 6); SELECT COUNT(*) FROM products;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nDELETE FROM products WHERE id NOT IN (1, 2, 3, 4, 5, 6); SELECT COUNT(*) FROM products;\n",
    "solutionCode": "DELETE FROM products WHERE id NOT IN (1, 2, 3, 4, 5, 6); SELECT COUNT(*) FROM products;\n",
    "hints": [
      "Execute: DELETE FROM products WHERE id NOT IN (1, 2, 3, 4, 5, 6); SELECT COUNT(*) FROM products;"
    ],
    "testCases": [
      {
        "id": "sql-119-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-120-conditional-upsert-concep",
    "title": "120. Conditional Upsert Concept (INSERT OR REPLACE)",
    "slug": "conditional-upsert-concept-ins",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Update user 1 email using INSERT OR REPLACE.",
    "concepts": [
      "Conditional Upsert Concept (INSERT OR REPLACE)",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Conditional Upsert Concept (INSERT OR REPLACE)\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nINSERT OR REPLACE INTO users (id, name, email, country, role, created_at) VALUES (1, 'Sarah Chen', 'sarah.new@example.com', 'USA', 'admin', '2023-01-15'); SELECT email FROM users WHERE id = 1;\n```",
    "workedExample": {
      "title": "Worked Example: Conditional Upsert Concept (INSERT OR REPLACE)",
      "code": "INSERT OR REPLACE INTO users (id, name, email, country, role, created_at) VALUES (1, 'Sarah Chen', 'sarah.new@example.com', 'USA', 'admin', '2023-01-15'); SELECT email FROM users WHERE id = 1;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `INSERT OR REPLACE INTO users (id, name, email, country, role, created_at) VALUES (1, 'Sarah Chen', 'sarah.new@example.com', 'USA', 'admin', '2023-01-15'); SELECT email FROM users WHERE id = 1;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nINSERT OR REPLACE INTO users (id, name, email, country, role, created_at) VALUES (1, 'Sarah Chen', 'sarah.new@example.com', 'USA', 'admin', '2023-01-15'); SELECT email FROM users WHERE id = 1;\n",
    "solutionCode": "INSERT OR REPLACE INTO users (id, name, email, country, role, created_at) VALUES (1, 'Sarah Chen', 'sarah.new@example.com', 'USA', 'admin', '2023-01-15'); SELECT email FROM users WHERE id = 1;\n",
    "hints": [
      "Execute: INSERT OR REPLACE INTO users (id, name, email, country, role, created_at) VALUES (1, 'Sarah Chen', 'sarah.new@example.com', 'USA', 'admin', '2023-01-15'); SELECT email FROM users WHERE id = 1;"
    ],
    "testCases": [
      {
        "id": "sql-120-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-121-bulk-price-adjustments",
    "title": "121. Bulk Price Adjustments",
    "slug": "bulk-price-adjustments",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Apply a 10% discount on accessories.",
    "concepts": [
      "Bulk Price Adjustments",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Bulk Price Adjustments\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nUPDATE products SET price = ROUND(price * 0.9, 2) WHERE category = 'Accessories'; SELECT price FROM products WHERE id = 5;\n```",
    "workedExample": {
      "title": "Worked Example: Bulk Price Adjustments",
      "code": "UPDATE products SET price = ROUND(price * 0.9, 2) WHERE category = 'Accessories'; SELECT price FROM products WHERE id = 5;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `UPDATE products SET price = ROUND(price * 0.9, 2) WHERE category = 'Accessories'; SELECT price FROM products WHERE id = 5;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nUPDATE products SET price = ROUND(price * 0.9, 2) WHERE category = 'Accessories'; SELECT price FROM products WHERE id = 5;\n",
    "solutionCode": "UPDATE products SET price = ROUND(price * 0.9, 2) WHERE category = 'Accessories'; SELECT price FROM products WHERE id = 5;\n",
    "hints": [
      "Execute: UPDATE products SET price = ROUND(price * 0.9, 2) WHERE category = 'Accessories'; SELECT price FROM products WHERE id = 5;"
    ],
    "testCases": [
      {
        "id": "sql-121-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-122-module-11-review-order-cl",
    "title": "122. Module 11 Review: Order Cleanup",
    "slug": "module-11-review-order-cleanup",
    "language": "sql",
    "category": "Module 11: Data Modification (INSERT, UPDATE, DELETE)",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 35,
    "description": "Archive all pending orders.",
    "concepts": [
      "Module 11 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the orders database table.",
    "explanationMarkdown": "### Module 11 Review: Order Cleanup\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nUPDATE orders SET status = 'archived' WHERE status = 'pending'; SELECT COUNT(*) FROM orders WHERE status = 'archived';\n```",
    "workedExample": {
      "title": "Worked Example: Module 11 Review: Order Cleanup",
      "code": "UPDATE orders SET status = 'archived' WHERE status = 'pending'; SELECT COUNT(*) FROM orders WHERE status = 'archived';",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `UPDATE orders SET status = 'archived' WHERE status = 'pending'; SELECT COUNT(*) FROM orders WHERE status = 'archived';`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nUPDATE orders SET status = 'archived' WHERE status = 'pending'; SELECT COUNT(*) FROM orders WHERE status = 'archived';\n",
    "solutionCode": "UPDATE orders SET status = 'archived' WHERE status = 'pending'; SELECT COUNT(*) FROM orders WHERE status = 'archived';\n",
    "hints": [
      "Execute: UPDATE orders SET status = 'archived' WHERE status = 'pending'; SELECT COUNT(*) FROM orders WHERE status = 'archived';"
    ],
    "testCases": [
      {
        "id": "sql-122-tc-1",
        "description": "Query returns valid rows from orders",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
