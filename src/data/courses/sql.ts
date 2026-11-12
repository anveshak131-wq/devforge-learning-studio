import { Track } from '../../types';
import { SAMPLE_DATABASES } from '../sampleDatabases';

export const SQL_TRACK: Track = {
  id: 'sql',
  title: 'SQL: Foundations to Database Architect',
  slug: 'sql',
  language: 'sql',
  icon: 'Database',
  color: 'from-blue-500 to-cyan-500',
  tagline: '5-tier relational database journey: Learn relational concepts with worked examples first, then write real queries.',
  description: 'Master relational data engineering on real SQLite WebAssembly databases. Learn foundational queries, aggregations, relational normalization, CTE pipelines, and analytic window functions.',
  lessons: [
    // TIER 1: FOUNDATIONS
    {
      id: 'sql-t1-select-filtering',
      title: 'Foundations: Retrieving & Filtering Data (SELECT, WHERE, ORDER BY)',
      slug: 'select-where-order',
      language: 'sql',
      category: '1. Foundations',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 10,
      xp: 40,
      description: 'Start with relational basics: retrieve records, filter by column criteria with WHERE, and sort results with ORDER BY.',
      concepts: ['SELECT specific columns', 'WHERE comparisons (=, >, <, AND)', 'ORDER BY ... DESC/ASC', 'LIMIT'],
      analogy: 'Imagine an Excel spreadsheet with 1,000 rows. SELECT is choosing which columns to display. WHERE is applying a filter dropdown to hide irrelevant rows. ORDER BY is clicking the column header to sort from highest to lowest.',
      explanationMarkdown: `
### Step 1: The SELECT Statement
In a database, tables store rows and columns. To retrieve data:
\`\`\`sql
SELECT name, price 
FROM products;
\`\`\`

---

### Step 2: Filtering with WHERE
To fetch only specific items (for example, electronics over $100):
\`\`\`sql
SELECT name, price 
FROM products
WHERE category = 'Electronics' AND price > 100;
\`\`\`

---

### Step 3: Sorting with ORDER BY
Sort results using \`ORDER BY column_name DESC\` (highest first) or \`ASC\` (lowest first):
\`\`\`sql
SELECT name, price 
FROM products
ORDER BY price DESC
LIMIT 5;
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Finding High-Rated Books',
        code: `SELECT name, price, rating
FROM products
WHERE category = 'Office' AND rating >= 4.5
ORDER BY price ASC
LIMIT 3;`,
        explanation: '• Line 1: Asks for name, price, and rating columns.\n• Line 2: Reads from the products table.\n• Line 3: Filters for Office category items with rating >= 4.5.\n• Line 4: Sorts by price from lowest to highest (ASC).\n• Line 5: Returns only the top 3 items.',
        expectedOutput: '| name | price | rating |\n| Leather Notebook & Gel Pen Set | 34.00 | 4.7 |'
      },
      commonMistakes: [
        'Putting `WHERE` after `ORDER BY`. In SQL, the order of clauses is strictly: SELECT ... FROM ... WHERE ... GROUP BY ... ORDER BY ... LIMIT.',
        'Using double quotes for string values in SQL (use single quotes like `\'Electronics\'`).'
      ],
      exerciseSteps: [
        'Step 1: Select `name, price, rating` from `products`.',
        'Step 2: Filter with `WHERE category = \'Electronics\' AND price > 100`.',
        'Step 3: Sort by price descending: `ORDER BY price DESC;`.'
      ],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      initialCode: `-- 👉 Step 1: Select name, price, rating
-- 👉 Step 2: Filter for Electronics with price > 100
-- 👉 Step 3: Sort by price descending

SELECT name, price, rating
FROM products
WHERE category = 'Electronics' AND price > 100
ORDER BY price DESC;
`,
      solutionCode: `SELECT name, price, rating
FROM products
WHERE category = 'Electronics' AND price > 100
ORDER BY price DESC;
`,
      hints: [
        'Add `AND price > 100` to the WHERE clause.',
        'Add `ORDER BY price DESC;` at the end.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Returns products in Electronics category with price > 100',
          testFn: `(() => {
            if (!values || values.length === 0) return false;
            return values.length === 3 && values[0][0] === '4K Ultra-Wide Monitor 34"';
          })()`,
          expectedMessage: 'Expected 3 products ordered from highest price to lowest'
        },
        {
          id: 'tc-2',
          description: 'Includes name, price, and rating columns',
          testFn: `columns.map(c => c.toLowerCase()).includes('name') && columns.map(c => c.toLowerCase()).includes('price')`,
          expectedMessage: 'Columns must include name and price'
        }
      ]
    },

    // TIER 2: CORE DEVELOPER
    {
      id: 'sql-t2-aggregations-group-by',
      title: 'Core: Aggregations & Grouping (COUNT, SUM, GROUP BY, HAVING)',
      slug: 'group-by-aggregations',
      language: 'sql',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 15,
      xp: 55,
      description: 'Summarize metrics across categories using aggregate functions and GROUP BY.',
      concepts: ['COUNT, SUM, AVG aggregate functions', 'GROUP BY clause', 'HAVING (filtering grouped summaries)', 'Aliases with AS'],
      analogy: 'Imagine taking a pile of 100 receipts and sorting them into separate folders by store department (GROUP BY category). Then you count how many receipts are in each folder (COUNT) and add up the total money spent (SUM).',
      explanationMarkdown: `
### Aggregating Large Datasets
Aggregate functions compute a single summary value across multiple rows:
- \`COUNT(*)\`: Counts rows
- \`SUM(column)\`: Totals numbers
- \`AVG(column)\`: Computes average

\`\`\`sql
SELECT category, COUNT(*) AS total_items, AVG(price) AS average_price
FROM products
GROUP BY category;
\`\`\`

---

### WHERE vs HAVING
- \`WHERE\` filters individual rows *before* grouping.
- \`HAVING\` filters aggregated groups *after* grouping:
\`\`\`sql
SELECT category, COUNT(*) AS total_items
FROM products
GROUP BY category
HAVING total_items >= 2; -- Filters out categories with fewer than 2 items!
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Customer Order Frequency Summary',
        code: `SELECT user_id, 
       COUNT(id) AS order_count, 
       SUM(total_amount) AS total_spent
FROM orders
GROUP BY user_id
HAVING order_count >= 2
ORDER BY total_spent DESC;`,
        explanation: '• GROUP BY user_id groups all order rows belonging to the same customer.\n• COUNT(id) counts their total orders.\n• HAVING order_count >= 2 keeps only repeat buyers who made at least 2 purchases.',
        expectedOutput: '| user_id | order_count | total_spent |\n| 1 | 2 | 431.99 |\n| 2 | 2 | 189.89 |'
      },
      commonMistakes: [
        'Trying to use aggregate functions inside the `WHERE` clause (e.g. `WHERE COUNT(*) > 1` is illegal; use `HAVING COUNT(*) > 1` instead).',
        'Selecting non-aggregated columns that are not included in the `GROUP BY` list.'
      ],
      exerciseSteps: [
        'Step 1: Select `category`, `COUNT(*) AS product_count`, `AVG(price) AS average_price`, `SUM(stock) AS total_stock`.',
        'Step 2: Group by `category`.',
        'Step 3: Add `HAVING COUNT(*) >= 2` to filter for categories with at least 2 items.',
        'Step 4: Order by `total_stock DESC`.'
      ],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      initialCode: `-- Calculate category metrics:
SELECT 
  category,
  COUNT(*) AS product_count,
  AVG(price) AS average_price,
  SUM(stock) AS total_stock
FROM products
GROUP BY category
HAVING COUNT(*) >= 2
ORDER BY total_stock DESC;
`,
      solutionCode: `SELECT 
  category,
  COUNT(*) AS product_count,
  AVG(price) AS average_price,
  SUM(stock) AS total_stock
FROM products
GROUP BY category
HAVING COUNT(*) >= 2
ORDER BY total_stock DESC;
`,
      hints: [
        'Group by `category`.',
        'Use `HAVING COUNT(*) >= 2` to filter.',
        'Add `ORDER BY total_stock DESC;`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Correctly groups categories and filters with HAVING >= 2',
          testFn: `(() => {
            if (!values || values.length < 2) return false;
            const categories = values.map(v => v[0]);
            return categories.includes('Electronics') && categories.includes('Office');
          })()`,
          expectedMessage: 'Expected Electronics and Office categories'
        }
      ]
    },

    // TIER 3: INTERMEDIATE
    {
      id: 'sql-t3-relational-joins',
      title: 'Intermediate: Relational Joins (Connecting Multiple Tables)',
      slug: 'inner-joins',
      language: 'sql',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 20,
      xp: 75,
      description: 'Connect related entities across primary and foreign keys to synthesize complete insights.',
      concepts: ['Relational database keys', 'INNER JOIN syntax', 'Table aliasing (orders o, users u)', 'Cross-table column resolution'],
      analogy: 'Imagine having an address book with customer names and IDs, and a separate stack of receipts showing only customer ID and order price. An INNER JOIN is matching the ID on the receipt to the ID in the address book so you can see the customer\'s real name next to their purchase.',
      explanationMarkdown: `
### Why Normalize with Joins?
Relational databases don't duplicate customer names across millions of orders. Instead:
- \`users\` table stores: \`id\`, \`name\`, \`email\`
- \`orders\` table stores: \`id\`, \`user_id\`, \`total_amount\`

To connect them:
\`\`\`sql
SELECT orders.id, users.name, orders.total_amount
FROM orders
JOIN users ON orders.user_id = users.id;
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Orders with Customer Email and Country',
        code: `SELECT o.id AS order_id, 
       u.name AS customer_name, 
       u.country, 
       o.total_amount
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.status = 'delivered'
LIMIT 3;`,
        explanation: '• o.user_id = u.id matches each order to its owner.\n• Aliases (o and u) keep the query clean and concise.\n• Filters only for delivered orders.',
        expectedOutput: '| order_id | customer_name | country | total_amount |\n| 1001 | Alice Johnson | United States | 379.49 |'
      },
      commonMistakes: [
        'Ambiguous column names: If both tables have an `id` column, writing `SELECT id` causes an error. Always specify `SELECT o.id, u.id`.',
        'Forgetting the `ON` condition: writing `JOIN users` without `ON o.user_id = u.id` creates an accidental cross product of every user paired with every order!'
      ],
      exerciseSteps: [
        'Step 1: Select `o.id AS order_id, u.name AS customer_name, u.country, o.total_amount, o.status`.',
        'Step 2: `JOIN users u ON o.user_id = u.id`.',
        'Step 3: Add `WHERE o.status = \'delivered\' AND o.total_amount >= 100`.',
        'Step 4: Add `ORDER BY o.total_amount DESC;`.'
      ],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      initialCode: `-- Join orders with users:
SELECT 
  o.id AS order_id,
  u.name AS customer_name,
  u.country,
  o.total_amount,
  o.status
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.status = 'delivered' AND o.total_amount >= 100
ORDER BY o.total_amount DESC;
`,
      solutionCode: `SELECT 
  o.id AS order_id,
  u.name AS customer_name,
  u.country,
  o.total_amount,
  o.status
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.status = 'delivered' AND o.total_amount >= 100
ORDER BY o.total_amount DESC;
`,
      hints: [
        'Use `JOIN users u ON o.user_id = u.id`.',
        'Add `WHERE o.status = "delivered" AND o.total_amount >= 100`.',
        'Sort with `ORDER BY o.total_amount DESC;`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Correctly matches delivered orders over 100 with user profile info',
          testFn: `(() => {
            if (!values || values.length === 0) return false;
            return values[0][1] === 'Charlie Zhang' && values[0][3] === 548.99;
          })()`,
          expectedMessage: 'Top order should be Charlie Zhang ($548.99)'
        }
      ]
    },

    // TIER 4: ADVANCED
    {
      id: 'sql-t4-subqueries-cte',
      title: 'Advanced: Common Table Expressions (WITH CTE)',
      slug: 'subqueries-cte',
      language: 'sql',
      category: '4. Advanced Architecture',
      difficulty: 'Advanced',
      tier: 4,
      tierName: 'Advanced',
      estimatedMinutes: 25,
      xp: 90,
      description: 'Write modular, clean analytical pipelines using Common Table Expressions (WITH clause).',
      concepts: ['WITH clause (CTEs)', 'Temporary result set isolation', 'Complex business analytics'],
      analogy: 'Imagine a recipe. Instead of doing all calculations in one messy sentence, you prepare intermediate bowls first: "Bowl 1: Beat eggs and sugar." Then you take Bowl 1 and mix it into the main batter. That is what a CTE (`WITH ... AS`) does for complex queries.',
      explanationMarkdown: `
### What is a CTE?
A Common Table Expression (CTE) creates a named, temporary query result that you can immediately query in your main SELECT:

\`\`\`sql
WITH HighSpenders AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
  HAVING total_spent > 300
)
SELECT u.name, hs.total_spent
FROM users u
JOIN HighSpenders hs ON u.id = hs.user_id;
\`\`\`
      `,
      workedExample: {
        title: 'Worked Example: Identifying High-Value Customers',
        code: `WITH CustomerSpending AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
)
SELECT u.name, u.email, cs.total_spent
FROM users u
JOIN CustomerSpending cs ON u.id = cs.user_id
WHERE cs.total_spent > 300
ORDER BY cs.total_spent DESC;`,
        explanation: '• The CTE calculates total_spent per customer.\n• The main query joins it with users to attach their name and email.\n• Filters for customers who spent > $300.',
        expectedOutput: '| name | email | total_spent |\n| Charlie Zhang | charlie@example.com | 548.99 |\n| Alice Johnson | alice@example.com | 431.99 |'
      },
      commonMistakes: [
        'Trying to put a semicolon `;` at the end of the `WITH ... )` block. The CTE is part of the statement; the semicolon belongs only at the very end of the entire query!',
        'Referencing a CTE outside of the single query that immediately follows it.'
      ],
      exerciseSteps: [
        'Step 1: Define `WITH CustomerSpending AS (SELECT user_id, SUM(total_amount) AS total_spent FROM orders GROUP BY user_id)`.',
        'Step 2: In the main query, select `u.name, u.email, cs.total_spent`.',
        'Step 3: `JOIN CustomerSpending cs ON u.id = cs.user_id`.',
        'Step 4: Filter `WHERE cs.total_spent > 200` and order by `cs.total_spent DESC;`.'
      ],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      initialCode: `WITH CustomerSpending AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
)
SELECT u.name, u.email, cs.total_spent
FROM users u
JOIN CustomerSpending cs ON u.id = cs.user_id
WHERE cs.total_spent > 200
ORDER BY cs.total_spent DESC;
`,
      solutionCode: `WITH CustomerSpending AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
)
SELECT u.name, u.email, cs.total_spent
FROM users u
JOIN CustomerSpending cs ON u.id = cs.user_id
WHERE cs.total_spent > 200
ORDER BY cs.total_spent DESC;
`,
      hints: [
        'Complete the CTE query, then JOIN users u ON u.id = cs.user_id.',
        'Add `WHERE cs.total_spent > 200`.',
        'Add `ORDER BY cs.total_spent DESC;`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Returns customers with spending exceeding 200 ordered descending',
          testFn: `(() => {
            if (!values || values.length === 0) return false;
            return values.length >= 3 && values[0][0] === 'Charlie Zhang';
          })()`,
          expectedMessage: 'Charlie Zhang must be the highest spender in the list'
        }
      ]
    },

    // TIER 5: MASTERCLASS / EXPERT
    {
      id: 'sql-t5-window-functions',
      title: 'Masterclass: Window Functions (ROW_NUMBER & PARTITION BY)',
      slug: 'window-functions',
      language: 'sql',
      category: '5. Masterclass & Internals',
      difficulty: 'Expert',
      tier: 5,
      tierName: 'Masterclass',
      estimatedMinutes: 30,
      xp: 130,
      description: 'Master analytical SQL. Compute rankings, running totals, and partitioned metrics without collapsing rows.',
      concepts: ['Window functions: OVER ()', 'PARTITION BY clause', 'ROW_NUMBER() vs RANK()', 'Retaining individual row records'],
      analogy: 'Imagine a marathon. GROUP BY would combine everyone from each age group and output just 1 row per group with their average time. A Window Function keeps every single runner on the screen, but assigns each runner their ranking within their specific age group (Rank #1 in Under-30, Rank #2 in Under-30, etc.).',
      explanationMarkdown: `
### What is a Window Function?
Unlike \`GROUP BY\`, which collapses multiple rows into a single summary row, a **Window Function** computes values across a group of related rows **while retaining every individual row**:

\`\`\`sql
SELECT 
  name, 
  category, 
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS category_rank
FROM products;
\`\`\`

- \`PARTITION BY category\`: Divides the rows into category windows.
- \`ORDER BY price DESC\`: Sorts within each window.
- \`ROW_NUMBER()\`: Generates sequential 1, 2, 3... ranks.
      `,
      workedExample: {
        title: 'Worked Example: Ranking Top Products by Category',
        code: `SELECT 
  name,
  category,
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
FROM products
ORDER BY category ASC, price_rank ASC;`,
        explanation: '• Ranks products from most expensive to least within each category.\n• In Electronics: Monitor is #1 ($499), Headphones #2 ($249.50), Keyboard #3 ($129.99).\n• In Office: Desk Lamp is #1 ($59.90), Desk Mat #2 ($49.99).',
        expectedOutput: '| name | category | price | price_rank |\n| 4K Ultra-Wide Monitor 34" | Electronics | 499.00 | 1 |\n| Wireless Headphones | Electronics | 249.50 | 2 |'
      },
      commonMistakes: [
        'Forgetting the `OVER (...)` clause. Without `OVER (...)`, SQL thinks ROW_NUMBER is a normal function and throws a syntax error.',
        'Trying to filter on `price_rank` in the `WHERE` clause of the same query. (Window functions execute after WHERE; use a CTE to filter on window ranks).'
      ],
      exerciseSteps: [
        'Step 1: Select `name, category, price`.',
        'Step 2: Add `ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank`.',
        'Step 3: From `products`.',
        'Step 4: Order by `category ASC, price_rank ASC;`.'
      ],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      initialCode: `-- Use ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC)
SELECT 
  name,
  category,
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
FROM products
ORDER BY category ASC, price_rank ASC;
`,
      solutionCode: `SELECT 
  name,
  category,
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
FROM products
ORDER BY category ASC, price_rank ASC;
`,
      hints: [
        'Write `ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank`.',
        'Add `ORDER BY category ASC, price_rank ASC;` at the end.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Ranks items inside each category correctly',
          testFn: `(() => {
            if (!values || values.length === 0) return false;
            const electronicsRank1 = values.find(r => r[1] === 'Electronics' && r[3] === 1);
            return electronicsRank1 && electronicsRank1[0] === '4K Ultra-Wide Monitor 34"';
          })()`,
          expectedMessage: '4K Ultra-Wide Monitor must be Electronics rank 1'
        },
        {
          id: 'tc-2',
          description: 'Calculates price_rank column for all products',
          testFn: `columns.map(c => c.toLowerCase()).includes('price_rank')`,
          expectedMessage: 'Column price_rank must be present'
        }
      ]
    }
  ]
};
