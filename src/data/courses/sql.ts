import { Track } from '../../types';
import { SAMPLE_DATABASES } from '../sampleDatabases';

export const SQL_TRACK: Track = {
  id: 'sql',
  title: 'SQL: Foundations to Database Architect',
  slug: 'sql',
  language: 'sql',
  icon: 'Database',
  color: 'from-blue-500 to-cyan-500',
  tagline: '5-tier relational database journey: from basic SELECT queries to multi-table joins, CTEs, and Window Functions.',
  description: 'Master relational data engineering on real SQLite WebAssembly databases. Learn foundational queries, aggregations, relational normalization, CTE pipelines, and analytic window functions.',
  lessons: [
    // TIER 1: FOUNDATIONS
    {
      id: 'sql-t1-select-filtering',
      title: 'Foundations: SELECT, WHERE & ORDER BY',
      slug: 'select-where-order',
      language: 'sql',
      category: '1. Foundations',
      difficulty: 'Beginner',
      tier: 1,
      tierName: 'Foundations',
      estimatedMinutes: 10,
      xp: 40,
      description: 'Start with relational basics: retrieve records, filter by column criteria, and sort results.',
      concepts: ['SELECT specific columns', 'WHERE clause comparisons', 'ORDER BY and LIMIT'],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      explanationMarkdown: `
### Relational Queries: Filtering Records
The foundation of relational data retrieval is the \`SELECT\` statement with \`WHERE\` and \`ORDER BY\`.

\`\`\`sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1 DESC
LIMIT 10;
\`\`\`

#### Available Database Schema:
- **products**: \`id\`, \`name\`, \`category\`, \`price\`, \`stock\`, \`rating\`
- **users**: \`id\`, \`name\`, \`email\`, \`country\`, \`created_at\`
- **orders**: \`id\`, \`user_id\`, \`order_date\`, \`status\`, \`total_amount\`

#### Challenge:
Write a query to retrieve the **name**, **price**, and **rating** of all products in the **'Electronics'** category with a price **greater than 100**.
Order the results by **price descending** (highest price first).
      `,
      initialCode: `-- Write your SQL query below:
SELECT name, price, rating
FROM products
WHERE category = 'Electronics'
-- Add your conditions and ordering here:

`,
      solutionCode: `SELECT name, price, rating
FROM products
WHERE category = 'Electronics' AND price > 100
ORDER BY price DESC;
`,
      hints: [
        'Add `AND price > 100` to the WHERE clause.',
        'Add `ORDER BY price DESC;` to sort from highest to lowest.'
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
      title: 'Core: Aggregations & Grouping (COUNT, SUM, GROUP BY)',
      slug: 'group-by-aggregations',
      language: 'sql',
      category: '2. Core Concepts',
      difficulty: 'Beginner',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 15,
      xp: 55,
      description: 'Summarize metrics across categories using aggregate functions and GROUP BY.',
      concepts: ['COUNT, SUM, AVG functions', 'GROUP BY clause', 'HAVING vs WHERE', 'Aliases with AS'],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      explanationMarkdown: `
### Aggregating Large Datasets
Aggregate functions compute a single summary value for groups of rows.

\`\`\`sql
SELECT category, COUNT(*) AS item_count, AVG(price) AS avg_price
FROM products
GROUP BY category
HAVING item_count > 1;
\`\`\`

#### Challenge:
Write a query to calculate for each **category**:
1. \`category\`
2. Number of products as \`product_count\`
3. Average price as \`average_price\`
4. Total stock as \`total_stock\`

Only include categories that have **at least 2 products**. Order by \`total_stock\` descending.
      `,
      initialCode: `-- Calculate category metrics:
SELECT 
  category,
  COUNT(*) AS product_count,
  AVG(price) AS average_price,
  SUM(stock) AS total_stock
FROM products
-- Add GROUP BY and HAVING clauses:

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
      title: 'Intermediate: Relational Multi-Table INNER JOINs',
      slug: 'inner-joins',
      language: 'sql',
      category: '3. Intermediate',
      difficulty: 'Intermediate',
      tier: 3,
      tierName: 'Intermediate',
      estimatedMinutes: 20,
      xp: 75,
      description: 'Connect related entities across primary and foreign keys to synthesize complete insights.',
      concepts: ['Foreign keys', 'INNER JOIN syntax', 'Table aliasing', 'Cross-table column resolution'],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      explanationMarkdown: `
### Relational Joins
Relational databases split data across specialized normalized tables. Joins bring them back together.

\`\`\`sql
SELECT orders.id, users.name, orders.total_amount
FROM orders
JOIN users ON orders.user_id = users.id
WHERE orders.status = 'delivered';
\`\`\`

#### Challenge:
Write a query to list each order with its customer name and country.
Select:
- \`orders.id AS order_id\`
- \`users.name AS customer_name\`
- \`users.country\`
- \`orders.total_amount\`
- \`orders.status\`

Filter for orders where \`status = 'delivered'\` and \`total_amount >= 100\`. Order by \`total_amount\` descending.
      `,
      initialCode: `-- Join orders with users:
SELECT 
  o.id AS order_id,
  u.name AS customer_name,
  u.country,
  o.total_amount,
  o.status
FROM orders o
-- Add JOIN users ON ...
-- Add WHERE filters and ORDER BY:

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
      description: 'Write modular, clean analytical pipelines using CTEs and subqueries.',
      concepts: ['WITH clause (CTEs)', 'Subqueries in WHERE clause', 'Analytical aggregations'],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      explanationMarkdown: `
### CTEs: Common Table Expressions
A CTE is a temporary named result set defined before your main query using the \`WITH\` keyword. It makes complex analytical queries significantly cleaner than nested subqueries.

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

#### Challenge:
Use a CTE named \`CustomerSpending\` to calculate \`user_id\` and \`SUM(total_amount) AS total_spent\`.
Then select \`users.name\`, \`users.email\`, and \`CustomerSpending.total_spent\`.
Filter to only show customers whose \`total_spent\` is **greater than 200**.
Order by \`total_spent\` descending.
      `,
      initialCode: `-- Use WITH CustomerSpending AS (...)
WITH CustomerSpending AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
)
-- Select customer details joined with CustomerSpending:

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
      description: 'Master analytical SQL. Compute running totals, rankings, and partitioned metrics without collapsing rows.',
      concepts: ['Window functions: OVER ()', 'PARTITION BY clause', 'ROW_NUMBER() vs RANK()', 'Analytical order preservation'],
      initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
      explanationMarkdown: `
### What is a Window Function?
Unlike \`GROUP BY\`, which collapses multiple rows into a single summary row, a **Window Function** computes values across a set of table rows that are related to the current row, **while retaining individual rows**!

\`\`\`sql
SELECT 
  name, 
  category, 
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS category_rank
FROM products;
\`\`\`

- \`PARTITION BY category\`: Divides rows into category groups.
- \`ORDER BY price DESC\`: Sorts items inside each category from most expensive to least.
- \`ROW_NUMBER()\`: Generates sequential 1, 2, 3... rank for each category!

#### Challenge:
Write a query to retrieve:
- \`name\`
- \`category\`
- \`price\`
- \`ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank\`
From the \`products\` table.
Order the overall result by \`category ASC\`, then \`price_rank ASC\`.
      `,
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
            // First item should be 4K Ultra-Wide Monitor (Electronics rank 1) or Electronics
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
