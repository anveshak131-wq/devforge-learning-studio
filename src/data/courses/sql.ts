import { Track } from '../../types';

const BASE_SQL_SCHEMA = `
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  country TEXT,
  role TEXT,
  created_at TEXT
);

INSERT INTO users (id, name, email, country, role, created_at) VALUES
  (1, 'Sarah Chen', 'sarah@example.com', 'USA', 'admin', '2023-01-15'),
  (2, 'Marcus Miller', 'marcus@example.com', 'UK', 'member', '2023-02-20'),
  (3, 'Aria Stark', 'aria@example.com', 'USA', 'member', '2023-03-10'),
  (4, 'Liam O''Connor', 'liam@example.com', 'Ireland', 'member', '2023-04-05'),
  (5, 'Yuki Tanaka', 'yuki@example.com', 'Japan', 'admin', '2023-05-12');

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  category TEXT,
  price REAL,
  stock INTEGER
);

INSERT INTO products (id, name, category, price, stock) VALUES
  (1, 'Mechanical Keyboard', 'Electronics', 120.00, 45),
  (2, 'Noise-Cancelling Headphones', 'Electronics', 250.00, 18),
  (3, 'Ergonomic Desk Chair', 'Furniture', 340.00, 12),
  (4, 'Standing Desk Converter', 'Furniture', 180.00, 25),
  (5, 'USB-C Fast Charger', 'Accessories', 29.99, 120),
  (6, 'Ultra-wide Gaming Monitor', 'Electronics', 499.00, 8);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  amount REAL,
  status TEXT,
  order_date TEXT
);

INSERT INTO orders (id, user_id, amount, status, order_date) VALUES
  (1, 1, 120.00, 'completed', '2023-06-01'),
  (2, 2, 250.00, 'completed', '2023-06-03'),
  (3, 1, 29.99, 'completed', '2023-06-04'),
  (4, 3, 340.00, 'pending', '2023-06-10'),
  (5, 5, 499.00, 'completed', '2023-06-12');
`;

export const SQL_TRACK: Track = {
  id: 'sql',
  title: 'SQL: Beginner to Pro',
  slug: 'sql',
  language: 'sql',
  icon: 'Database',
  color: 'from-cyan-400 to-blue-500',
  tagline: 'Learn how to talk to databases, query records, filter tables, and build business intelligence reports.',
  description: 'Master SQL using a real in-browser SQLite database. Learn SELECT, WHERE filters, ORDER BY, aggregate statistics, and multi-table JOINs.',
  lessons: [
    // LESSON 1: WHAT IS SQL & SELECT *
    {
      id: 'sql-1-select-all',
      title: '1. Meet the Database: SELECT * FROM users',
      slug: 'select-all',
      language: 'sql',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 3,
      xp: 25,
      description: 'Discover what a database is and retrieve your very first table of data using SELECT *.',
      concepts: ['Tables, rows, and columns', 'The SELECT keyword', 'The FROM keyword'],
      analogy: 'A database is like a collection of spreadsheets (tables). Each row is a person or item, and each column is a piece of info (name, price, country).',
      explanationMarkdown: `### Welcome to SQL!
SQL (Structured Query Language) is the universal language used by every company in the world to ask questions from databases.

### Reading Data
To see everything inside a table, we use:
\`\`\`sql
SELECT * FROM users;
\`\`\`
* \`SELECT\` means "Show me".
* \`*\` (asterisk) is a wildcard that means **"all columns"**.
* \`FROM users\` tells the database which table to read.
* Every SQL query ends with a semicolon \`;\`.
`,
      workedExample: {
        title: 'Worked Example: Viewing All Products',
        code: `SELECT * FROM products;`,
        explanation: '• Asks SQLite to retrieve all rows and all columns from the products table.\n• The result is a clean grid of items, prices, and stock counts.',
        expectedOutput: '6 rows returned with id, name, category, price, stock'
      },
      commonMistakes: [
        'Forgetting the semicolon ; at the end of the query.',
        'Misspelling the table name (e.g. user instead of users).'
      ],
      exerciseSteps: [
        'Write a query to retrieve all columns from the `users` table.',
        'Run the query and click "Check Answer" to verify.'
      ],
      initialCode: `-- 👉 Step 1: Write your query to select everything from users:
SELECT * FROM users;
`,
      solutionCode: `SELECT * FROM users;
`,
      hints: [
        'Write `SELECT * FROM users;` exactly.'
      ],
      testCases: [
        {
          id: 'sql-1-tc-1',
          description: 'Returns all columns and rows from users',
          testFn: 'rowCount === 5 && columns.includes("name") && columns.includes("email")',
          expectedMessage: 'Query should return all 5 rows from the users table'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 2: SELECTING SPECIFIC COLUMNS
    {
      id: 'sql-2-specific-columns',
      title: '2. Picking Specific Columns',
      slug: 'specific-columns',
      language: 'sql',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Clean up your results by asking for only the columns you care about.',
      concepts: ['Column projection', 'Comma-separated column names', 'Query efficiency'],
      analogy: 'When ordering a burger, you don\'t say "bring me the entire kitchen". You ask specifically for the burger and fries.',
      explanationMarkdown: `### Why Pick Columns?
Instead of fetching everything with \`*\`, you can name the exact columns you want separated by commas:

\`\`\`sql
SELECT name, email FROM users;
\`\`\`
This makes your queries faster and much cleaner to read!
`,
      workedExample: {
        title: 'Worked Example: Product Names and Prices',
        code: `SELECT name, price FROM products;`,
        explanation: '• Only the name and price columns are returned.\n• ID, category, and stock are omitted from the view.',
        expectedOutput: '6 rows returned with only name and price'
      },
      commonMistakes: [
        'Forgetting the comma between column names (e.g. SELECT name email is invalid).'
      ],
      exerciseSteps: [
        'Write a query that selects only `name` and `country` from the `users` table.',
        'Click "Check Answer" to verify.'
      ],
      initialCode: `-- 👉 Select only name and country from users:
SELECT name, country FROM users;
`,
      solutionCode: `SELECT name, country FROM users;
`,
      hints: [
        'Write `SELECT name, country FROM users;`'
      ],
      testCases: [
        {
          id: 'sql-2-tc-1',
          description: 'Returns exactly 2 columns: name and country',
          testFn: 'columns.length === 2 && columns.includes("name") && columns.includes("country")',
          expectedMessage: 'Columns should be only name and country'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 3: FILTERING WITH WHERE
    {
      id: 'sql-3-where-filtering',
      title: '3. Filtering Rows with WHERE',
      slug: 'where-filtering',
      language: 'sql',
      category: '1. Fundamentals',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 5,
      xp: 30,
      description: 'Filter your table to find only the rows that match your conditions.',
      concepts: ['WHERE clause', 'Text matching (country = \'USA\')', 'Number filters (price < 100)'],
      analogy: 'Using search filters on an online store: you only want to see items under $50.',
      explanationMarkdown: `### The WHERE Clause
To filter rows, add \`WHERE\` at the end of your query:

\`\`\`sql
SELECT * FROM users WHERE country = 'USA';
\`\`\`

Note: In SQL, text values must be enclosed in single quotes \`'USA'\`.
`,
      workedExample: {
        title: 'Worked Example: Budget Products',
        code: `SELECT name, price FROM products WHERE price < 100;`,
        explanation: '• Looks through products and keeps only rows where price is under 100.\n• Returns USB-C Fast Charger ($29.99).',
        expectedOutput: '1 row returned (USB-C Fast Charger)'
      },
      commonMistakes: [
        'Using double quotes instead of single quotes for text in SQL (standard SQL prefers single quotes like \'USA\').'
      ],
      exerciseSteps: [
        'Find all users who live in the USA.',
        'Select all columns from `users` where `country = \'USA\'`.'
      ],
      initialCode: `-- 👉 Find users where country is 'USA':
SELECT * FROM users WHERE country = 'USA';
`,
      solutionCode: `SELECT * FROM users WHERE country = 'USA';
`,
      hints: [
        'Write `SELECT * FROM users WHERE country = \'USA\';`'
      ],
      testCases: [
        {
          id: 'sql-3-tc-1',
          description: 'Returns 2 users from USA (Sarah and Aria)',
          testFn: 'rowCount === 2 && values.every(row => row.includes("USA"))',
          expectedMessage: 'Should return only the 2 users living in USA'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 4: SORTING WITH ORDER BY
    {
      id: 'sql-4-order-by',
      title: '4. Sorting Results with ORDER BY',
      slug: 'order-by',
      language: 'sql',
      category: '2. Organizing Data',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 5,
      xp: 35,
      description: 'Sort your results alphabetically or from highest to lowest number.',
      concepts: ['ORDER BY column', 'ASC (Ascending / lowest first)', 'DESC (Descending / highest first)'],
      analogy: 'Sorting a leaderboard in a video game so the highest score is at the very top.',
      explanationMarkdown: `### Sorting with ORDER BY
By default, databases return rows in arbitrary order. You can sort them using \`ORDER BY\`:

\`\`\`sql
-- Sort prices from highest to lowest:
SELECT name, price FROM products ORDER BY price DESC;

-- Sort names alphabetically A-Z:
SELECT name FROM users ORDER BY name ASC;
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Price Leaderboard',
        code: `SELECT name, price FROM products ORDER BY price DESC;`,
        explanation: '• Displays all products sorted from the most expensive ($499 Gaming Monitor) down to the cheapest ($29.99 Charger).',
        expectedOutput: '6 rows sorted from 499 down to 29.99'
      },
      commonMistakes: [
        'Putting ORDER BY before the WHERE clause. ORDER BY always comes near the end!'
      ],
      exerciseSteps: [
        'Write a query to select all products from the `products` table.',
        'Sort them by `price` in descending order (`DESC`).'
      ],
      initialCode: `-- 👉 Select all products sorted by price DESC:
SELECT * FROM products ORDER BY price DESC;
`,
      solutionCode: `SELECT * FROM products ORDER BY price DESC;
`,
      hints: [
        'Write `SELECT * FROM products ORDER BY price DESC;`'
      ],
      testCases: [
        {
          id: 'sql-4-tc-1',
          description: 'Returns products sorted highest price first',
          testFn: 'rowCount === 6 && values[0].includes("Ultra-wide Gaming Monitor")',
          expectedMessage: 'The first row should be the most expensive item (Ultra-wide Gaming Monitor)'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 5: TOP RESULTS WITH LIMIT
    {
      id: 'sql-5-limit',
      title: '5. Top Results with LIMIT',
      slug: 'limit',
      language: 'sql',
      category: '2. Organizing Data',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 4,
      xp: 35,
      description: 'Get the Top 3 or Top 5 rows using the LIMIT keyword.',
      concepts: ['LIMIT clause', 'Combining ORDER BY and LIMIT', 'Top-N queries'],
      analogy: 'An Olympic medal podium: only the top 3 athletes get medals, even if 100 people raced.',
      explanationMarkdown: `### Limiting Rows
If a table has 100,000 rows, you don't want to load all of them. Add \`LIMIT\` at the very end of your query:

\`\`\`sql
SELECT * FROM products ORDER BY price DESC LIMIT 3;
\`\`\`
This gives you the top 3 most expensive products!
`,
      workedExample: {
        title: 'Worked Example: The Single Most Expensive Product',
        code: `SELECT name, price FROM products ORDER BY price DESC LIMIT 1;`,
        explanation: '• Orders by price DESC.\n• LIMIT 1 stops after retrieving the top row.',
        expectedOutput: '1 row (Ultra-wide Gaming Monitor, $499)'
      },
      commonMistakes: [
        'LIMIT must always go at the very end of the query.'
      ],
      exerciseSteps: [
        'Find the top 3 cheapest products.',
        'Select all columns from `products`, order by `price ASC`, and `LIMIT 3`.'
      ],
      initialCode: `-- 👉 Get top 3 cheapest products:
SELECT * FROM products ORDER BY price ASC LIMIT 3;
`,
      solutionCode: `SELECT * FROM products ORDER BY price ASC LIMIT 3;
`,
      hints: [
        'Write `SELECT * FROM products ORDER BY price ASC LIMIT 3;`'
      ],
      testCases: [
        {
          id: 'sql-5-tc-1',
          description: 'Returns exactly 3 cheapest products',
          testFn: 'rowCount === 3 && values[0].includes("USB-C Fast Charger")',
          expectedMessage: 'Should return exactly 3 rows starting with USB-C Fast Charger'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 6: COUNT & SUMMARY STATISTICS
    {
      id: 'sql-6-count-aggregates',
      title: '6. Counting & Calculations (COUNT, SUM)',
      slug: 'count-aggregates',
      language: 'sql',
      category: '3. Analytics',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 6,
      xp: 40,
      description: 'Summarize thousands of rows into clean statistics using COUNT() and SUM().',
      concepts: ['COUNT(*) aggregate', 'SUM(column)', 'AVG(column)'],
      analogy: 'Counting the ballot box votes after an election to announce the total number of voters.',
      explanationMarkdown: `### Aggregate Functions
SQL includes built-in calculation functions:
* \`COUNT(*)\`: Counts the total number of rows.
* \`SUM(price)\`: Adds up all numbers in a column.
* \`AVG(price)\`: Calculates the average value.

\`\`\`sql
SELECT COUNT(*) FROM users;
SELECT AVG(price) FROM products;
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Total Users',
        code: `SELECT COUNT(*) AS total_users FROM users;`,
        explanation: '• Counts how many user records exist in the database (5).\n• AS total_users gives the result column a friendly name.',
        expectedOutput: 'total_users = 5'
      },
      commonMistakes: [
        'Trying to use SUM() on a text column (SUM only works on numeric data).'
      ],
      exerciseSteps: [
        'Count the total number of products in the `products` table.',
        'Write `SELECT COUNT(*) FROM products;`.'
      ],
      initialCode: `-- 👉 Count how many products exist:
SELECT COUNT(*) FROM products;
`,
      solutionCode: `SELECT COUNT(*) FROM products;
`,
      hints: [
        'Write `SELECT COUNT(*) FROM products;`'
      ],
      testCases: [
        {
          id: 'sql-6-tc-1',
          description: 'Returns count of 6 products',
          testFn: 'rowCount === 1 && String(values[0][0]) === "6"',
          expectedMessage: 'Should return 6 for total count of products'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 7: GROUP BY
    {
      id: 'sql-7-group-by',
      title: '7. Grouping Data with GROUP BY',
      slug: 'group-by',
      language: 'sql',
      category: '3. Analytics',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 7,
      xp: 45,
      description: 'Bucket data into categories and calculate stats for each group.',
      concepts: ['GROUP BY clause', 'Aggregating by category', 'Business reports'],
      analogy: 'Sorting coins into separate piles for quarters, dimes, and nickels, and then counting how many are in each pile.',
      explanationMarkdown: `### Bucketing with GROUP BY
When you want to calculate totals **per category** or **per country**, use \`GROUP BY\`:

\`\`\`sql
SELECT category, COUNT(*) FROM products GROUP BY category;
\`\`\`
This gives you the number of products inside each category!
`,
      workedExample: {
        title: 'Worked Example: Users Per Country',
        code: `SELECT country, COUNT(*) AS user_count FROM users GROUP BY country;`,
        explanation: '• Groups the user table by country.\n• Counts how many users belong to each country.',
        expectedOutput: 'Ireland: 1, Japan: 1, UK: 1, USA: 2'
      },
      commonMistakes: [
        'Selecting a column that is neither in the GROUP BY clause nor wrapped in an aggregate function.'
      ],
      exerciseSteps: [
        'Find how many products are in each category.',
        'Select `category` and `COUNT(*)`, grouped by `category`.'
      ],
      initialCode: `-- 👉 Count products per category:
SELECT category, COUNT(*) FROM products GROUP BY category;
`,
      solutionCode: `SELECT category, COUNT(*) FROM products GROUP BY category;
`,
      hints: [
        'Write `SELECT category, COUNT(*) FROM products GROUP BY category;`'
      ],
      testCases: [
        {
          id: 'sql-7-tc-1',
          description: 'Groups by category (Accessories, Electronics, Furniture)',
          testFn: 'rowCount === 3 && columns.includes("category")',
          expectedMessage: 'Should return 3 categories with their counts'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    },

    // LESSON 8: CAPSTONE & JOIN CERTIFICATE
    {
      id: 'sql-8-inner-join-capstone',
      title: '8. Capstone Challenge: Connecting Tables with INNER JOIN',
      slug: 'inner-join-capstone',
      language: 'sql',
      category: '4. Capstone Project',
      difficulty: 'Intermediate',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 10,
      xp: 60,
      description: 'Combine user details and order records into a complete sales report using INNER JOIN.',
      concepts: ['Relational databases', 'Primary Keys & Foreign Keys', 'INNER JOIN syntax'],
      analogy: 'Connecting a library card number to the actual book checkout record so you can see who borrowed each book.',
      explanationMarkdown: `### The Power of Relational Databases: JOIN
Real databases split data into multiple tables to avoid duplication. The \`orders\` table has a \`user_id\` that matches \`users.id\`.

To stitch them together in one report:
\`\`\`sql
SELECT users.name, orders.amount, orders.status
FROM users
JOIN orders ON users.id = orders.user_id;
\`\`\`
`,
      workedExample: {
        title: 'Worked Example: Customer Order History',
        code: `SELECT users.name, orders.amount 
FROM users 
JOIN orders ON users.id = orders.user_id;`,
        explanation: '• Matches user ID in both tables.\n• Shows Sarah Chen ($120.00), Marcus Miller ($250.00), etc.',
        expectedOutput: '5 matched order records with customer names'
      },
      commonMistakes: [
        'Forgetting the ON condition (JOIN orders ON users.id = orders.user_id).'
      ],
      exerciseSteps: [
        'Join the `users` and `orders` tables.',
        'Select `users.name`, `orders.amount`, and `orders.status`.',
        'Link them where `users.id = orders.user_id`.',
        'Pass all tests to finish the SQL course and claim your Certificate!'
      ],
      initialCode: `-- 👉 Join users and orders:
SELECT users.name, orders.amount, orders.status
FROM users
JOIN orders ON users.id = orders.user_id;
`,
      solutionCode: `SELECT users.name, orders.amount, orders.status
FROM users
JOIN orders ON users.id = orders.user_id;
`,
      hints: [
        'Write `SELECT users.name, orders.amount, orders.status FROM users JOIN orders ON users.id = orders.user_id;`'
      ],
      testCases: [
        {
          id: 'sql-8-tc-1',
          description: 'Returns joined order records with customer names',
          testFn: 'rowCount === 5 && columns.includes("name") && columns.includes("amount")',
          expectedMessage: 'Query should return 5 joined rows containing customer names and order amounts'
        }
      ],
      initSqlSchema: BASE_SQL_SCHEMA
    }
  ]
};
