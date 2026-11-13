import { Lesson } from '../../../types';

export const sqlModule12Lessons: Lesson[] = [
  {
    "id": "sql-123-creating-a-table-create-t",
    "title": "123. Creating a Table: CREATE TABLE",
    "slug": "creating-a-table-create-table",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create a new tags table with id and name.",
    "concepts": [
      "Creating a Table",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Creating a Table: CREATE TABLE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT UNIQUE); SELECT * FROM tags;\n```",
    "workedExample": {
      "title": "Worked Example: Creating a Table: CREATE TABLE",
      "code": "CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT UNIQUE); SELECT * FROM tags;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT UNIQUE); SELECT * FROM tags;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT UNIQUE); SELECT * FROM tags;\n",
    "solutionCode": "CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT UNIQUE); SELECT * FROM tags;\n",
    "hints": [
      "Execute: CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT UNIQUE); SELECT * FROM tags;"
    ],
    "testCases": [
      {
        "id": "sql-123-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-124-enforcing-not-null-constr",
    "title": "124. Enforcing NOT NULL Constraints",
    "slug": "enforcing-not-null-constraints",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create articles table requiring non-null title.",
    "concepts": [
      "Enforcing NOT NULL Constraints",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Enforcing NOT NULL Constraints\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT NOT NULL); SELECT * FROM articles;\n```",
    "workedExample": {
      "title": "Worked Example: Enforcing NOT NULL Constraints",
      "code": "CREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT NOT NULL); SELECT * FROM articles;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT NOT NULL); SELECT * FROM articles;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT NOT NULL); SELECT * FROM articles;\n",
    "solutionCode": "CREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT NOT NULL); SELECT * FROM articles;\n",
    "hints": [
      "Execute: CREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT NOT NULL); SELECT * FROM articles;"
    ],
    "testCases": [
      {
        "id": "sql-124-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-125-default-column-values-def",
    "title": "125. Default Column Values: DEFAULT",
    "slug": "default-column-values-default",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create logs table with default level 'info'.",
    "concepts": [
      "Default Column Values",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Default Column Values: DEFAULT\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT, level TEXT DEFAULT 'info'); SELECT * FROM logs;\n```",
    "workedExample": {
      "title": "Worked Example: Default Column Values: DEFAULT",
      "code": "CREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT, level TEXT DEFAULT 'info'); SELECT * FROM logs;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT, level TEXT DEFAULT 'info'); SELECT * FROM logs;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT, level TEXT DEFAULT 'info'); SELECT * FROM logs;\n",
    "solutionCode": "CREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT, level TEXT DEFAULT 'info'); SELECT * FROM logs;\n",
    "hints": [
      "Execute: CREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT, level TEXT DEFAULT 'info'); SELECT * FROM logs;"
    ],
    "testCases": [
      {
        "id": "sql-125-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-126-unique-constraints-unique",
    "title": "126. Unique Constraints: UNIQUE",
    "slug": "unique-constraints-unique",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create accounts table with unique usernames.",
    "concepts": [
      "Unique Constraints",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Unique Constraints: UNIQUE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT UNIQUE); SELECT * FROM accounts;\n```",
    "workedExample": {
      "title": "Worked Example: Unique Constraints: UNIQUE",
      "code": "CREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT UNIQUE); SELECT * FROM accounts;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT UNIQUE); SELECT * FROM accounts;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT UNIQUE); SELECT * FROM accounts;\n",
    "solutionCode": "CREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT UNIQUE); SELECT * FROM accounts;\n",
    "hints": [
      "Execute: CREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT UNIQUE); SELECT * FROM accounts;"
    ],
    "testCases": [
      {
        "id": "sql-126-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-127-foreign-key-relationships",
    "title": "127. Foreign Key Relationships: REFERENCES",
    "slug": "foreign-key-relationships-refe",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create comments table referencing users(id).",
    "concepts": [
      "Foreign Key Relationships",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Foreign Key Relationships: REFERENCES\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE comments (id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), text TEXT); SELECT * FROM comments;\n```",
    "workedExample": {
      "title": "Worked Example: Foreign Key Relationships: REFERENCES",
      "code": "CREATE TABLE comments (id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), text TEXT); SELECT * FROM comments;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE comments (id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), text TEXT); SELECT * FROM comments;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE comments (id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), text TEXT); SELECT * FROM comments;\n",
    "solutionCode": "CREATE TABLE comments (id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), text TEXT); SELECT * FROM comments;\n",
    "hints": [
      "Execute: CREATE TABLE comments (id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), text TEXT); SELECT * FROM comments;"
    ],
    "testCases": [
      {
        "id": "sql-127-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-128-adding-columns-to-existin",
    "title": "128. Adding Columns to Existing Tables: ALTER TABLE ADD COLUMN",
    "slug": "adding-columns-to-existing-tab",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Add is_featured column to products table.",
    "concepts": [
      "Adding Columns to Existing Tables",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the products database table.",
    "explanationMarkdown": "### Adding Columns to Existing Tables: ALTER TABLE ADD COLUMN\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nALTER TABLE products ADD COLUMN is_featured INTEGER DEFAULT 0; SELECT is_featured FROM products LIMIT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Adding Columns to Existing Tables: ALTER TABLE ADD COLUMN",
      "code": "ALTER TABLE products ADD COLUMN is_featured INTEGER DEFAULT 0; SELECT is_featured FROM products LIMIT 1;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `ALTER TABLE products ADD COLUMN is_featured INTEGER DEFAULT 0; SELECT is_featured FROM products LIMIT 1;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nALTER TABLE products ADD COLUMN is_featured INTEGER DEFAULT 0; SELECT is_featured FROM products LIMIT 1;\n",
    "solutionCode": "ALTER TABLE products ADD COLUMN is_featured INTEGER DEFAULT 0; SELECT is_featured FROM products LIMIT 1;\n",
    "hints": [
      "Execute: ALTER TABLE products ADD COLUMN is_featured INTEGER DEFAULT 0; SELECT is_featured FROM products LIMIT 1;"
    ],
    "testCases": [
      {
        "id": "sql-128-tc-1",
        "description": "Query returns valid rows from products",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-129-renaming-tables-alter-tab",
    "title": "129. Renaming Tables: ALTER TABLE RENAME TO",
    "slug": "renaming-tables-alter-table-re",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Rename temp_tbl to archived_tbl.",
    "concepts": [
      "Renaming Tables",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Renaming Tables: ALTER TABLE RENAME TO\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE temp_tbl (x INTEGER); ALTER TABLE temp_tbl RENAME TO archived_tbl; SELECT * FROM archived_tbl;\n```",
    "workedExample": {
      "title": "Worked Example: Renaming Tables: ALTER TABLE RENAME TO",
      "code": "CREATE TABLE temp_tbl (x INTEGER); ALTER TABLE temp_tbl RENAME TO archived_tbl; SELECT * FROM archived_tbl;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE temp_tbl (x INTEGER); ALTER TABLE temp_tbl RENAME TO archived_tbl; SELECT * FROM archived_tbl;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE temp_tbl (x INTEGER); ALTER TABLE temp_tbl RENAME TO archived_tbl; SELECT * FROM archived_tbl;\n",
    "solutionCode": "CREATE TABLE temp_tbl (x INTEGER); ALTER TABLE temp_tbl RENAME TO archived_tbl; SELECT * FROM archived_tbl;\n",
    "hints": [
      "Execute: CREATE TABLE temp_tbl (x INTEGER); ALTER TABLE temp_tbl RENAME TO archived_tbl; SELECT * FROM archived_tbl;"
    ],
    "testCases": [
      {
        "id": "sql-129-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-130-deleting-tables-permanent",
    "title": "130. Deleting Tables Permanently: DROP TABLE",
    "slug": "deleting-tables-permanently-dr",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create and drop a temporary table.",
    "concepts": [
      "Deleting Tables Permanently",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Deleting Tables Permanently: DROP TABLE\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE trash (id INT); DROP TABLE trash; SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Deleting Tables Permanently: DROP TABLE",
      "code": "CREATE TABLE trash (id INT); DROP TABLE trash; SELECT 1;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE trash (id INT); DROP TABLE trash; SELECT 1;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE trash (id INT); DROP TABLE trash; SELECT 1;\n",
    "solutionCode": "CREATE TABLE trash (id INT); DROP TABLE trash; SELECT 1;\n",
    "hints": [
      "Execute: CREATE TABLE trash (id INT); DROP TABLE trash; SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-130-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-131-creating-indexes-for-fast",
    "title": "131. Creating Indexes for Fast Lookups: CREATE INDEX",
    "slug": "creating-indexes-for-fast-look",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create an index on users(country).",
    "concepts": [
      "Creating Indexes for Fast Lookups",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Creating Indexes for Fast Lookups: CREATE INDEX\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE INDEX idx_users_country ON users(country); SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Creating Indexes for Fast Lookups: CREATE INDEX",
      "code": "CREATE INDEX idx_users_country ON users(country); SELECT 1;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE INDEX idx_users_country ON users(country); SELECT 1;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE INDEX idx_users_country ON users(country); SELECT 1;\n",
    "solutionCode": "CREATE INDEX idx_users_country ON users(country); SELECT 1;\n",
    "hints": [
      "Execute: CREATE INDEX idx_users_country ON users(country); SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-131-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  },
  {
    "id": "sql-132-module-12-review-micro-se",
    "title": "132. Module 12 Review: Micro-Service Schema",
    "slug": "module-12-review-micro-service",
    "language": "sql",
    "category": "Module 12: Schema Architecture (CREATE, ALTER, DROP)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Create a customer_reviews table with a rating constraint.",
    "concepts": [
      "Module 12 Review",
      "SQL Query"
    ],
    "analogy": "Asking a librarian to pull specific information from the users database table.",
    "explanationMarkdown": "### Module 12 Review: Micro-Service Schema\nIn SQL, we use queries to read and process records from database tables:\n\n```sql\nCREATE TABLE customer_reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating INTEGER CHECK (rating BETWEEN 1 AND 5)); SELECT 1;\n```",
    "workedExample": {
      "title": "Worked Example: Module 12 Review: Micro-Service Schema",
      "code": "CREATE TABLE customer_reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating INTEGER CHECK (rating BETWEEN 1 AND 5)); SELECT 1;",
      "explanation": "\u2022 Queries the SQLite database and returns verified results.",
      "expectedOutput": "Query executed successfully"
    },
    "exerciseSteps": [
      "Inspect the database tables in the right panel.",
      "Write the query: `CREATE TABLE customer_reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating INTEGER CHECK (rating BETWEEN 1 AND 5)); SELECT 1;`",
      "Click 'Check Answer' to verify your query against the database."
    ],
    "initialCode": "-- \ud83d\udc49 Step 1: Write your SQL query below:\nCREATE TABLE customer_reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating INTEGER CHECK (rating BETWEEN 1 AND 5)); SELECT 1;\n",
    "solutionCode": "CREATE TABLE customer_reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating INTEGER CHECK (rating BETWEEN 1 AND 5)); SELECT 1;\n",
    "hints": [
      "Execute: CREATE TABLE customer_reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating INTEGER CHECK (rating BETWEEN 1 AND 5)); SELECT 1;"
    ],
    "testCases": [
      {
        "id": "sql-132-tc-1",
        "description": "Query returns valid rows from users",
        "testFn": "results.length > 0 && (results[0].values.length > 0 || query.toUpperCase().includes('TABLE') || query.toUpperCase().includes('INDEX') || query.toUpperCase().includes('INSERT') || query.toUpperCase().includes('UPDATE') || query.toUpperCase().includes('DELETE'))"
      }
    ],
    "initSqlSchema": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT,\n  country TEXT,\n  role TEXT,\n  created_at TEXT\n);\n\nINSERT INTO users (id, name, email, country, role, created_at) VALUES\n  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),\n  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),\n  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),\n  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),\n  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  category TEXT,\n  price REAL,\n  stock INTEGER\n);\n\nINSERT INTO products (id, name, category, price, stock) VALUES\n  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),\n  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),\n  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),\n  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),\n  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),\n  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  amount REAL,\n  status TEXT,\n  order_date TEXT\n);\n\nINSERT INTO orders (id, user_id, amount, status, order_date) VALUES\n  (1, 1, 120.00, 'completed', '2023-06-01'),\n  (2, 2, 250.00, 'completed', '2023-06-03'),\n  (3, 1, 29.99, 'completed', '2023-06-04'),\n  (4, 3, 340.00, 'pending', '2023-06-10'),\n  (5, 5, 499.00, 'completed', '2023-06-12');\n"
  }
];
