import { Track } from '../../types';
import { SAMPLE_DATABASES } from '../sampleDatabases';

export const SQL_TRACK: Track = {
  id: 'sql',
  title: 'SQL & Relational Databases',
  slug: 'sql',
  language: 'sql',
  icon: 'Database',
  color: 'from-blue-500 to-cyan-500',
  tagline: 'Run genuine SQLite inside your browser with schema inspection, joins, and aggregations.',
  description: 'Master structured query language on real databases. Learn filtering, multi-table relational joins, grouping, subqueries, and window functions with instant interactive data tables.',
  lessons: [
    {
      id: 'sql-1-select-filtering',
      title: 'Filtering & Sorting: SELECT, WHERE, ORDER BY',
      slug: 'select-where-order',
      language: 'sql',
      category: 'Query Basics',
      difficulty: 'Beginner',
      estimatedMinutes: 10,
      xp: 50,
      description: 'Filter rows using comparison operators and sort results in ascending or descending order.',
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
            // Expected 3 items: 4K Ultra-Wide Monitor (499), Wireless Headphones (249.5), Mechanical Keyboard (129.99)
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
    {
      id: 'sql-2-aggregations-group-by',
      title: 'Aggregations & Grouping: COUNT, SUM, GROUP BY',
      slug: 'group-by-aggregations',
      language: 'sql',
      category: 'Data Analytics',
      difficulty: 'Beginner',
      estimatedMinutes: 15,
      xp: 60,
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

> **Note**: \`WHERE\` filters individual rows *before* grouping; \`HAVING\` filters groups *after* aggregation!

#### Challenge:
Write a query to calculate for each **category**:
1. \`category\`
2. Number of products as \`product_count\`
3. Average price as \`average_price\` (round to 2 decimals or plain AVG)
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
-- Add GROUP BY and HAVING clauses here:

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
        'Use `HAVING COUNT(*) >= 2` to filter for categories with at least 2 items.',
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
        },
        {
          id: 'tc-2',
          description: 'Calculates total_stock correctly',
          testFn: `columns.map(c => c.toLowerCase()).includes('total_stock')`,
          expectedMessage: 'Column total_stock must be present'
        }
      ]
    },
    {
      id: 'sql-3-relational-joins',
      title: 'Relational Joins: INNER JOIN & Multi-Table Queries',
      slug: 'inner-joins',
      language: 'sql',
      category: 'Relational Modeling',
      difficulty: 'Intermediate',
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
            // Charlie Zhang has order 1003 with 548.99 which should be first
            return values[0][1] === 'Charlie Zhang' && values[0][3] === 548.99;
          })()`,
          expectedMessage: 'Top order should be Charlie Zhang ($548.99)'
        },
        {
          id: 'tc-2',
          description: 'Only includes delivered orders',
          testFn: `values.every(row => row[4] === 'delivered')`,
          expectedMessage: 'All returned orders must have delivered status'
        }
      ]
    },
    {
      id: 'sql-4-subqueries-cte',
      title: 'Subqueries & CTEs (Common Table Expressions)',
      slug: 'subqueries-cte',
      language: 'sql',
      category: 'Advanced SQL',
      difficulty: 'Advanced',
      estimatedMinutes: 25,
      xp: 90,
      description: 'Write modular, readable SQL queries using CTEs (WITH clause) and scalar subqueries.',
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
Use a CTE named \`CustomerSpending\` to calculate the total spent by each user:
\`\`\`sql
WITH CustomerSpending AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY user_id
)
\`\`\`
Then select \`users.name\`, \`users.email\`, and \`CustomerSpending.total_spent\`.
Filter to only show customers whose \`total_spent\` is **greater than 200**.
Order by \`total_spent\` descending.
      `,
      initialCode: `-- Use WITH CustomerSpending AS (...)
WITH CustomerSpending AS (
  -- calculate user_id and total_spent
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
            // Charlie Zhang (548.99), Alice Johnson (431.99), Diana Patel (249.50)
            return values.length >= 3 && values[0][0] === 'Charlie Zhang';
          })()`,
          expectedMessage: 'Charlie Zhang must be the highest spender in the list'
        }
      ]
    }
  ]
};
