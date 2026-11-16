import { GuidedProject } from '../../types';
export { ECOMMERCE_SQL_PROJECT } from './ecommerceSqlProject';

export const SQL_SAAS_RETENTION_PROJECT: GuidedProject = {
  id: 'project-sql-saas-cohort',
  title: 'SaaS Customer Retention & Cohort Engine',
  slug: 'sql-saas-retention-cohort',
  language: 'sql',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Calculate recurring monthly retention, subscriber churn rates, and cohort analytics using advanced SQL window functions.',
  description: 'Master the SQL skills demanded by high-growth SaaS companies and venture-backed startups. You will write complex analytical SQL queries using CTEs, window functions (ROW_NUMBER, LAG, LEAD), and group aggregations to track customer signup cohorts, monthly recurring revenue (MRR) expansion, and churn rates.',
  previewType: 'table',
  whatYouWillBuild: [
    'A cohort analysis query grouping users by signup month',
    'Month-over-month customer retention percentage matrix',
    'Window functions calculating customer Lifetime Value (LTV) trends',
    'Subscriber churn rate calculations across billing cycles'
  ],
  skillsLearned: [
    'SQL Window Functions (LAG, LEAD, ROW_NUMBER, OVER)',
    'Common Table Expressions (WITH cte AS ...)',
    'Cohort retention matrix modeling',
    'Financial recurring revenue (MRR/ARR) analytics'
  ],
  initSqlSchema: `
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  signup_date DATE
);

CREATE TABLE subscriptions (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  billing_month DATE,
  amount DECIMAL(10, 2),
  status TEXT
);

INSERT INTO users VALUES
  (1, 'Acme Corp', '2024-01-15'),
  (2, 'Beta Ltd', '2024-01-20'),
  (3, 'Gamma Inc', '2024-02-05'),
  (4, 'Delta Co', '2024-02-18'),
  (5, 'Epsilon LLC', '2024-03-01');

INSERT INTO subscriptions VALUES
  (101, 1, '2024-01-01', 99.00, 'active'),
  (102, 1, '2024-02-01', 99.00, 'active'),
  (103, 1, '2024-03-01', 99.00, 'active'),
  (104, 2, '2024-01-01', 49.00, 'active'),
  (105, 2, '2024-02-01', 49.00, 'churned'),
  (106, 3, '2024-02-01', 199.00, 'active'),
  (107, 3, '2024-03-01', 199.00, 'active'),
  (108, 4, '2024-02-01', 99.00, 'active'),
  (109, 5, '2024-03-01', 49.00, 'active');
  `,
  milestones: [
    {
      id: 'sql-saas-m1',
      stepNumber: 1,
      title: 'Milestone 1: Monthly Recurring Revenue (MRR) & Active Counts',
      instructionMarkdown: `
### Milestone 1: MRR & Active Subscribers
Write an analytical SQL query:
- Aggregates by \`billing_month\`.
- Filters only records where \`status = 'active'\`.
- Returns columns:
  - \`billing_month\`
  - \`total_mrr\`: sum of amounts
  - \`active_subscribers\`: count of active users
- Order chronologically by \`billing_month\` ascending.
      `,
      starterCode: `-- Calculate total MRR and active subscriber count per billing month
SELECT 
  -- billing_month, SUM(amount) AS total_mrr, COUNT(DISTINCT user_id) AS active_subscribers
FROM subscriptions
-- Filter by status = 'active', group by billing_month
ORDER BY billing_month ASC;
`,
      solutionCode: `SELECT 
  billing_month,
  SUM(amount) AS total_mrr,
  COUNT(DISTINCT user_id) AS active_subscribers
FROM subscriptions
WHERE status = 'active'
GROUP BY billing_month
ORDER BY billing_month ASC;
`,
      hints: [
        'Use SUM(amount) AS total_mrr and COUNT(DISTINCT user_id) AS active_subscribers.',
        'Filter with WHERE status = \'active\'.'
      ],
      testCases: [
        {
          id: 'sql-saas-tc1',
          description: 'Query returns billing_month, total_mrr, and active_subscribers ordered by date',
          testFn: `(() => {
            return columns.includes('billing_month') && (columns.includes('total_mrr') || columns.includes('mrr')) && rowCount >= 2;
          })()`,
          expectedMessage: 'Query must return billing_month and total_mrr with active subscriptions'
        }
      ]
    }
  ]
};

export const SQL_DOUBLE_ENTRY_PROJECT: GuidedProject = {
  id: 'project-sql-double-entry-ledger',
  title: 'FinTech Double-Entry Ledger Engine',
  slug: 'sql-double-entry-ledger',
  language: 'sql',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Architect a banking-grade double-entry financial ledger enforcing strict debit/credit balance invariants.',
  description: 'Build the core database architecture powering Stripe, PayPal, and modern neo-banks. You will design a double-entry ledger where money cannot appear or disappear without balanced debit and credit entries (Debits == Credits), calculate real-time account balances via ledger replay, and audit transactional integrity.',
  previewType: 'table',
  whatYouWillBuild: [
    'A double-entry Journal and Ledger entry schema with foreign keys',
    'A validation query proving all transactions satisfy Debits == Credits',
    'Real-time account balance aggregation query calculating current available funds',
    'An audit trail query detecting out-of-balance transaction discrepancies'
  ],
  skillsLearned: [
    'Double-Entry Bookkeeping Principles (Debit vs Credit)',
    'Financial database schema integrity and constraints',
    'Audit reconciliation queries',
    'High-reliability transaction aggregation'
  ],
  initSqlSchema: `
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  account_type TEXT -- 'asset', 'liability', 'equity', 'revenue', 'expense'
);

CREATE TABLE journal_entries (
  id INTEGER PRIMARY KEY,
  entry_date DATE,
  description TEXT
);

CREATE TABLE ledger_lines (
  id INTEGER PRIMARY KEY,
  journal_id INTEGER,
  account_id INTEGER,
  entry_type TEXT, -- 'debit' or 'credit'
  amount DECIMAL(12, 2),
  FOREIGN KEY(journal_id) REFERENCES journal_entries(id),
  FOREIGN KEY(account_id) REFERENCES accounts(id)
);

INSERT INTO accounts VALUES
  (1, 'Cash at Bank', 'asset'),
  (2, 'Accounts Receivable', 'asset'),
  (3, 'Sales Revenue', 'revenue'),
  (4, 'Server Infrastructure Expense', 'expense'),
  (5, 'Investor Equity', 'equity');

-- Entry 1: Seed investment of 50,000 cash for equity
INSERT INTO journal_entries VALUES (1, '2024-01-01', 'Founder seed capital');
INSERT INTO ledger_lines VALUES
  (1, 1, 1, 'debit', 50000.00),
  (2, 1, 5, 'credit', 50000.00);

-- Entry 2: Customer purchase of 5,000 revenue
INSERT INTO journal_entries VALUES (2, '2024-01-10', 'Enterprise SaaS Subscription');
INSERT INTO ledger_lines VALUES
  (3, 2, 1, 'debit', 5000.00),
  (4, 2, 3, 'credit', 5000.00);

-- Entry 3: Server cloud expense of 1,200 paid with cash
INSERT INTO journal_entries VALUES (3, '2024-01-15', 'AWS Cloud Hosting');
INSERT INTO ledger_lines VALUES
  (5, 3, 4, 'debit', 1200.00),
  (6, 3, 1, 'credit', 1200.00);
  `,
  milestones: [
    {
      id: 'sql-ledger-m1',
      stepNumber: 1,
      title: 'Milestone 1: Ledger Balance Reconciliation & Integrity Audit',
      instructionMarkdown: `
### Milestone 1: Transaction Balance Audit
In double-entry bookkeeping, every journal transaction MUST balance:
$\\sum \\text{Debits} - \\sum \\text{Credits} = 0$

Write an audit query:
- Joins \`journal_entries\` with \`ledger_lines\`.
- For each \`journal_id\`, calculates:
  - \`total_debits\`: sum of amounts where \`entry_type = 'debit'\` (or 0)
  - \`total_credits\`: sum of amounts where \`entry_type = 'credit'\` (or 0)
  - \`balance_difference\`: \`total_debits - total_credits\`
  - \`is_balanced\`: 1 if \`total_debits = total_credits\`, else 0.
- Order by \`journal_id\` ascending.
      `,
      starterCode: `-- Verify that all journal transactions have balanced debits and credits
SELECT 
  j.id AS journal_id,
  j.description,
  SUM(CASE WHEN l.entry_type = 'debit' THEN l.amount ELSE 0 END) AS total_debits,
  SUM(CASE WHEN l.entry_type = 'credit' THEN l.amount ELSE 0 END) AS total_credits,
  (SUM(CASE WHEN l.entry_type = 'debit' THEN l.amount ELSE 0 END) - 
   SUM(CASE WHEN l.entry_type = 'credit' THEN l.amount ELSE 0 END)) AS balance_difference
FROM journal_entries j
JOIN ledger_lines l ON j.id = l.journal_id
GROUP BY j.id, j.description
ORDER BY j.id ASC;
`,
      solutionCode: `SELECT 
  j.id AS journal_id,
  j.description,
  SUM(CASE WHEN l.entry_type = 'debit' THEN l.amount ELSE 0 END) AS total_debits,
  SUM(CASE WHEN l.entry_type = 'credit' THEN l.amount ELSE 0 END) AS total_credits,
  (SUM(CASE WHEN l.entry_type = 'debit' THEN l.amount ELSE 0 END) - 
   SUM(CASE WHEN l.entry_type = 'credit' THEN l.amount ELSE 0 END)) AS balance_difference,
  CASE WHEN (SUM(CASE WHEN l.entry_type = 'debit' THEN l.amount ELSE 0 END) = 
             SUM(CASE WHEN l.entry_type = 'credit' THEN l.amount ELSE 0 END)) THEN 1 ELSE 0 END AS is_balanced
FROM journal_entries j
JOIN ledger_lines l ON j.id = l.journal_id
GROUP BY j.id, j.description
ORDER BY j.id ASC;
`,
      hints: [
        'Use conditional sums: SUM(CASE WHEN l.entry_type = \'debit\' THEN l.amount ELSE 0 END).',
        'Verify that balance_difference equals 0 for valid double-entry transactions.'
      ],
      testCases: [
        {
          id: 'sql-ledger-tc1',
          description: 'Audit query verifies balanced debits and credits for all journal entries',
          testFn: `(() => {
            return columns.includes('total_debits') && columns.includes('total_credits') && rowCount >= 3;
          })()`,
          expectedMessage: 'Must compute total_debits and total_credits per journal entry'
        }
      ]
    }
  ]
};
