import { GuidedProject } from '../../types';
import { SAMPLE_DATABASES } from '../sampleDatabases';

export const ECOMMERCE_SQL_PROJECT: GuidedProject = {
  id: 'project-ecommerce-sql-analytics',
  title: 'E-Commerce Analytics & Business Intelligence Engine',
  slug: 'ecommerce-sql-analytics',
  language: 'sql',
  difficulty: 'Intermediate',
  estimatedHours: 2,
  xpReward: 300,
  tagline: 'Write production-grade SQL analytical queries to unlock insights on customer retention, revenue, and product velocity.',
  description: 'In this project, step into the shoes of a Data Engineer / Business Intelligence Analyst at a high-growth online marketplace. Use SQL to analyze revenue cohorts, compute Customer Lifetime Value, and identify top-performing categories.',
  previewType: 'table',
  initSqlSchema: SAMPLE_DATABASES.ecommerce.sql,
  whatYouWillBuild: [
    'Customer Lifetime Value (LTV) and spending tier classification',
    'Category-level revenue and gross order volume calculations',
    'Multi-table relational joins connecting users, orders, and order items',
    'Inventory turnover and out-of-stock risk detection queries'
  ],
  skillsLearned: [
    'Advanced SQL Aggregations and Windowing concepts',
    'Multi-table INNER and LEFT JOINs',
    'CASE WHEN conditional categorization',
    'Real-world business KPI calculations'
  ],
  milestones: [
    {
      id: 'sql-m1',
      stepNumber: 1,
      title: 'Milestone 1: Customer Lifetime Value & Spending Tiers',
      instructionMarkdown: `
### Customer Lifetime Value & Tiering
As an analyst, you want to identify VIP customers versus standard shoppers.

Write a query that retrieves:
- \`u.name AS customer_name\`
- \`u.country\`
- \`COUNT(o.id) AS total_orders\`
- \`SUM(o.total_amount) AS total_spent\`
- A calculated column \`spending_tier\`:
  - When \`SUM(o.total_amount) >= 400\` THEN \`'VIP'\`
  - When \`SUM(o.total_amount) >= 200\` THEN \`'High Value'\`
  - ELSE \`'Standard'\`

Join \`users\` with \`orders\`. Group by customer.
Order by \`total_spent\` descending.
      `,
      starterCode: `-- Customer Spending Tiers Query
SELECT 
  u.name AS customer_name,
  u.country,
  COUNT(o.id) AS total_orders,
  SUM(o.total_amount) AS total_spent,
  CASE 
    WHEN SUM(o.total_amount) >= 400 THEN 'VIP'
    WHEN SUM(o.total_amount) >= 200 THEN 'High Value'
    ELSE 'Standard'
  END AS spending_tier
FROM users u
JOIN orders o ON u.id = o.user_id
-- Add GROUP BY and ORDER BY:

`,
      solutionCode: `SELECT 
  u.name AS customer_name,
  u.country,
  COUNT(o.id) AS total_orders,
  SUM(o.total_amount) AS total_spent,
  CASE 
    WHEN SUM(o.total_amount) >= 400 THEN 'VIP'
    WHEN SUM(o.total_amount) >= 200 THEN 'High Value'
    ELSE 'Standard'
  END AS spending_tier
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id
ORDER BY total_spent DESC;
`,
      hints: [
        'Group by `u.id`.',
        'Add `ORDER BY total_spent DESC;`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Identifies VIP customers correctly',
          testFn: `(() => {
            if (!values || values.length === 0) return false;
            // Top customers should have VIP tier
            return values[0][4] === 'VIP' && values[0][0] === 'Charlie Zhang';
          })()`,
          expectedMessage: 'Top customer Charlie Zhang must have VIP tier'
        },
        {
          id: 'tc-2',
          description: 'Returns spending_tier column',
          testFn: `columns.map(c => c.toLowerCase()).includes('spending_tier')`,
          expectedMessage: 'Column spending_tier must be included'
        }
      ]
    },
    {
      id: 'sql-m2',
      stepNumber: 2,
      title: 'Milestone 2: Multi-Table Revenue Attribution by Category',
      instructionMarkdown: `
### Revenue Breakdown by Category
Now dive deeper into individual line items!
Join \`products\` with \`order_items\` and \`orders\` to determine:
- \`p.category\`
- Total quantity sold as \`units_sold\`
- Total revenue generated as \`category_revenue\` (SUM of \`oi.quantity * oi.unit_price\`)
- Average price per unit sold as \`avg_selling_price\`

Filter only for orders where \`o.status = 'delivered'\`.
Group by \`p.category\` and order by \`category_revenue\` descending.
      `,
      starterCode: `-- Category revenue attribution
SELECT 
  p.category,
  SUM(oi.quantity) AS units_sold,
  SUM(oi.quantity * oi.unit_price) AS category_revenue,
  AVG(oi.unit_price) AS avg_selling_price
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
-- Add WHERE, GROUP BY, and ORDER BY:

`,
      solutionCode: `SELECT 
  p.category,
  SUM(oi.quantity) AS units_sold,
  SUM(oi.quantity * oi.unit_price) AS category_revenue,
  AVG(oi.unit_price) AS avg_selling_price
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
WHERE o.status = 'delivered'
GROUP BY p.category
ORDER BY category_revenue DESC;
`,
      hints: [
        'Filter with `WHERE o.status = "delivered"`.',
        'Group with `GROUP BY p.category`.',
        'Sort with `ORDER BY category_revenue DESC;`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Calculates category revenue with Electronics generating the highest revenue',
          testFn: `(() => {
            if (!values || values.length === 0) return false;
            return values[0][0] === 'Electronics' && values[0][2] > 1000;
          })()`,
          expectedMessage: 'Electronics should be the highest revenue category (> 1000)'
        }
      ]
    }
  ]
};
