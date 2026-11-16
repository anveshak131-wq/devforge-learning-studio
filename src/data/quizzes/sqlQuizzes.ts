import { CourseQuiz } from '../../types/quiz';

export const SQL_QUIZZES: CourseQuiz[] = [
  // -------------------------------------------------------------
  // MODULE CHECKPOINT 1: FOUNDATIONS & FILTERING
  // -------------------------------------------------------------
  {
    id: 'sql-mod-1-quiz',
    trackId: 'sql',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 1: Database Foundations',
    moduleIndex: 0,
    title: 'Checkpoint 1: Database Foundations & WHERE Clauses',
    subtitle: 'SELECT, WHERE, column aliases, NULL handling, and basic operators',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'sql-q1-1',
        type: 'output_prediction',
        prompt: 'Which records are returned by this query involving NULL values?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT * FROM users WHERE age = NULL;',
        options: [
          'All users whose age is NULL',
          'Zero rows (always empty)',
          'All users whose age is 0',
          'Raises a syntax error'
        ],
        correctOptionIndex: 1,
        explanation: 'In SQL three-valued logic, comparing anything with NULL using "=" evaluates to UNKNOWN, not TRUE. To find null values, you must use "WHERE age IS NULL".',
        skillCategory: 'Three-Valued Logic & NULL'
      },
      {
        id: 'sql-q1-2',
        type: 'conceptual',
        prompt: 'What is the logical order of query execution for SELECT, FROM, WHERE, and ORDER BY?',
        codeLanguage: 'sql',
        options: [
          'FROM -> WHERE -> SELECT -> ORDER BY',
          'SELECT -> FROM -> WHERE -> ORDER BY',
          'WHERE -> FROM -> SELECT -> ORDER BY',
          'FROM -> SELECT -> WHERE -> ORDER BY'
        ],
        correctOptionIndex: 0,
        explanation: 'SQL executes queries conceptually in this order: FROM (gather source tables), WHERE (filter rows), SELECT (project desired columns), and finally ORDER BY (sort output).',
        skillCategory: 'Query Execution Order'
      },
      {
        id: 'sql-q1-3',
        type: 'output_prediction',
        prompt: 'How many rows will this LIMIT and OFFSET query return from a 10-row table?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT * FROM products LIMIT 3 OFFSET 8;',
        options: [
          '3 rows',
          '2 rows',
          '8 rows',
          '0 rows'
        ],
        correctOptionIndex: 1,
        explanation: 'OFFSET 8 skips the first 8 rows (rows 1-8). Only 2 rows remain in the 10-row table (rows 9 and 10), so despite LIMIT 3, only the remaining 2 rows are returned.',
        skillCategory: 'Pagination & LIMIT'
      },
      {
        id: 'sql-q1-4',
        type: 'spot_the_bug',
        prompt: 'How does operator precedence affect this WHERE condition?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT name FROM employees\nWHERE department = "Sales" OR department = "HR" AND salary > 50000;',
        options: [
          'AND has higher precedence than OR, so it evaluates: (HR AND salary > 50000) OR Sales',
          'OR has higher precedence than AND, so it evaluates (Sales OR HR) AND salary > 50000',
          'SQL evaluates strictly left-to-right regardless of operators',
          'Raises an operator ambiguity syntax error'
        ],
        correctOptionIndex: 0,
        explanation: 'In SQL, AND takes precedence over OR. Without explicit parentheses, all Sales employees will be returned regardless of salary, plus only HR employees earning > 50000.',
        skillCategory: 'Operator Precedence'
      },
      {
        id: 'sql-q1-5',
        type: 'output_prediction',
        prompt: 'What pattern matches the LIKE clause below?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT * FROM clients WHERE email LIKE "_a%@gmail.com";',
        options: [
          'Any email ending in @gmail.com',
          'An email whose second character is "a", followed by anything before @gmail.com',
          'An email starting with "a" exactly',
          'An email with an underscore at the start'
        ],
        correctOptionIndex: 1,
        explanation: 'In SQL LIKE patterns, "_" matches exactly one single character, while "%" matches zero or more characters. "_a%" requires exactly one character followed by "a", then any characters.',
        skillCategory: 'Pattern Matching'
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE CHECKPOINT 2: AGGREGATES & GROUP BY
  // -------------------------------------------------------------
  {
    id: 'sql-mod-2-quiz',
    trackId: 'sql',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 5: Aggregates & Grouping',
    moduleIndex: 4,
    title: 'Checkpoint 2: Aggregations & GROUP BY',
    subtitle: 'COUNT, SUM, AVG, GROUP BY, and HAVING filtering',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'sql-q2-1',
        type: 'conceptual',
        prompt: 'What is the crucial difference between COUNT(*) and COUNT(column_name)?',
        codeLanguage: 'sql',
        codeSnippet: 'COUNT(*)  vs  COUNT(bonus)',
        options: [
          'COUNT(*) counts all rows including NULLs; COUNT(column_name) ignores NULL values',
          'COUNT(column_name) counts all rows including NULLs; COUNT(*) ignores NULL values',
          'COUNT(*) only works on numeric primary keys',
          'There is no difference; they always return the same number'
        ],
        correctOptionIndex: 0,
        explanation: 'COUNT(*) counts every row returned by the query regardless of contents. COUNT(column_name) counts only rows where that specific column is NOT NULL.',
        skillCategory: 'Aggregates & NULLs'
      },
      {
        id: 'sql-q2-2',
        type: 'spot_the_bug',
        prompt: 'Why does this query raise a syntax error?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT department, AVG(salary)\nFROM employees\nWHERE AVG(salary) > 60000\nGROUP BY department;',
        options: [
          'Aggregate functions cannot appear in the WHERE clause; use HAVING instead',
          'department cannot be selected alongside an aggregate',
          'AVG() only works on integer values',
          'GROUP BY must precede the WHERE clause'
        ],
        correctOptionIndex: 0,
        explanation: 'The WHERE clause filters individual rows before grouping occurs. To filter aggregated group statistics (like AVG(salary) > 60000), you must use the HAVING clause after GROUP BY.',
        skillCategory: 'HAVING vs WHERE'
      },
      {
        id: 'sql-q2-3',
        type: 'output_prediction',
        prompt: 'If a table has salaries: 100, 200, NULL. What does AVG(salary) return?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT AVG(salary) FROM employees;',
        options: [
          '100 (divided by 3)',
          '150 (divided by 2)',
          'NULL',
          'Raises an ArithmeticError'
        ],
        correctOptionIndex: 1,
        explanation: 'SQL aggregate functions like AVG(), SUM(), MIN(), and MAX() completely ignore NULL values when calculating averages. (100 + 200) / 2 = 150.',
        skillCategory: 'Aggregates'
      },
      {
        id: 'sql-q2-4',
        type: 'output_prediction',
        prompt: 'What does this query return from an orders table with multiple customers?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT customer_id, COUNT(*)\nFROM orders\nGROUP BY customer_id\nHAVING COUNT(*) >= 2;',
        options: [
          'All orders with 2 or more items',
          'Only customers who have placed 2 or more orders, along with their order counts',
          'The total number of customers in the database',
          'All customers sorted by order date'
        ],
        correctOptionIndex: 1,
        explanation: 'GROUP BY customer_id groups rows by each customer, and HAVING COUNT(*) >= 2 filters the resulting groups to only keep customers with at least 2 order rows.',
        skillCategory: 'GROUP BY & HAVING'
      },
      {
        id: 'sql-q2-5',
        type: 'conceptual',
        prompt: 'Which columns can be included in the SELECT clause when GROUP BY is used?',
        codeLanguage: 'sql',
        options: [
          'Only columns in the GROUP BY clause or columns wrapped in aggregate functions (SUM, AVG, etc.)',
          'Any column from the table arbitrarily',
          'Only primary key columns',
          'Only aggregate functions; no plain column names are permitted'
        ],
        correctOptionIndex: 0,
        explanation: 'Standard SQL requires that every non-aggregated column in the SELECT list must be explicitly listed in the GROUP BY clause to prevent non-deterministic values.',
        skillCategory: 'Group By Rules'
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE CHECKPOINT 3: JOINS & RELATIONSHIPS
  // -------------------------------------------------------------
  {
    id: 'sql-mod-3-quiz',
    trackId: 'sql',
    kind: 'module_checkpoint',
    moduleCategory: 'Module 6: Multi-table JOINs',
    moduleIndex: 5,
    title: 'Checkpoint 3: Multi-Table JOINs',
    subtitle: 'INNER JOIN, LEFT JOIN, self-joins, and join filter placement',
    passingScorePercent: 70,
    xpReward: 100,
    timeLimitSeconds: 300,
    questions: [
      {
        id: 'sql-q3-1',
        type: 'conceptual',
        prompt: 'What happens to unmatched left-table rows in a LEFT OUTER JOIN?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id;',
        options: [
          'They are discarded completely',
          'They appear in the result set with NULL values for all orders columns',
          'They duplicate the first matched row',
          'Raises an integrity error'
        ],
        correctOptionIndex: 1,
        explanation: 'A LEFT JOIN guarantees that every row from the left table is included in the output. If a left-table row has no matching rows in the right table, right-table columns are filled with NULL.',
        skillCategory: 'Outer Joins'
      },
      {
        id: 'sql-q3-2',
        type: 'output_prediction',
        prompt: 'If table A has 4 rows and table B has 5 rows, how many rows does CROSS JOIN return?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT * FROM table_a CROSS JOIN table_b;',
        options: [
          '9 rows',
          '20 rows',
          '5 rows',
          '1 row'
        ],
        correctOptionIndex: 1,
        explanation: 'A CROSS JOIN produces the Cartesian product of the two tables, combining every row in table A with every row in table B. 4 * 5 = 20 rows.',
        skillCategory: 'Cross Joins'
      },
      {
        id: 'sql-q3-3',
        type: 'spot_the_bug',
        prompt: 'How does placing a filter in the ON clause differ from the WHERE clause in a LEFT JOIN?',
        codeLanguage: 'sql',
        codeSnippet: '-- Query 1:\nSELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id AND o.status = "shipped";\n-- Query 2:\nSELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.status = "shipped";',
        options: [
          'Query 2 effectively turns the LEFT JOIN into an INNER JOIN because it filters out NULLs',
          'They produce identical results in all SQL dialects',
          'Query 1 raises a syntax error',
          'Query 2 runs faster but returns identical rows'
        ],
        correctOptionIndex: 0,
        explanation: 'In Query 2, the WHERE clause evaluates after the join. Users with no shipped orders have NULL for o.status; since NULL = "shipped" is UNKNOWN, they are eliminated, turning it into an INNER JOIN!',
        skillCategory: 'Join Predicates'
      },
      {
        id: 'sql-q3-4',
        type: 'conceptual',
        prompt: 'What technique is used to find employees and their managers from the same table?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT e.name, m.name FROM employees e ... employees m ...',
        options: [
          'Self-Join with table aliases',
          'UNION ALL with subquery',
          'FULL OUTER JOIN without aliases',
          'Recursive INTERSECT'
        ],
        correctOptionIndex: 0,
        explanation: 'A self-join joins a table to itself using two distinct aliases (e.g. e for employee and m for manager) via ON e.manager_id = m.id.',
        skillCategory: 'Self Joins'
      },
      {
        id: 'sql-q3-5',
        type: 'output_prediction',
        prompt: 'What is the result of using FULL OUTER JOIN?',
        codeLanguage: 'sql',
        options: [
          'Includes all matching rows, plus unmatched rows from both the left and right tables with NULLs',
          'Only rows that match in both tables',
          'Only unmatched rows from both tables',
          'A cross product of all rows'
        ],
        correctOptionIndex: 0,
        explanation: 'A FULL OUTER JOIN combines the results of both LEFT and RIGHT joins, containing all records from both tables and filling in NULLs where matches are absent.',
        skillCategory: 'Full Outer Joins'
      }
    ]
  },

  // -------------------------------------------------------------
  // SQL FINAL CERTIFICATION EXAM (20 QUESTIONS)
  // -------------------------------------------------------------
  {
    id: 'sql-final-exam',
    trackId: 'sql',
    kind: 'final_exam',
    title: 'SQL Database Mastery: Final Certification Exam',
    subtitle: 'Comprehensive 20-question evaluation of SQL querying, schema, and performance',
    passingScorePercent: 70,
    xpReward: 300,
    timeLimitSeconds: 1200, // 20 minutes
    questions: [
      {
        id: 'sql-fe-1',
        type: 'conceptual',
        prompt: 'What happens when using "NOT IN" with a subquery that returns a NULL value?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT * FROM users WHERE id NOT IN (SELECT manager_id FROM departments);',
        options: [
          'If manager_id contains even a single NULL, the query returns zero rows',
          'NULL values are automatically skipped',
          'The query raises a syntax error',
          'Only rows with NULL ids are returned'
        ],
        correctOptionIndex: 0,
        explanation: 'This is the classic SQL trap. "x NOT IN (1, 2, NULL)" expands to "x != 1 AND x != 2 AND x != NULL". Since "x != NULL" is UNKNOWN, the entire condition evaluates to UNKNOWN, returning 0 rows! Always use NOT EXISTS instead.',
        skillCategory: 'Subqueries & NULLs'
      },
      {
        id: 'sql-fe-2',
        type: 'output_prediction',
        prompt: 'What is the key difference between ROW_NUMBER(), RANK(), and DENSE_RANK() on ties?',
        codeLanguage: 'sql',
        codeSnippet: 'Values: [100, 100, 80]\nROW_NUMBER(): 1, 2, 3\nRANK(): 1, 1, 3\nDENSE_RANK(): ?',
        options: [
          '1, 1, 2',
          '1, 1, 3',
          '1, 2, 2',
          '1, 2, 3'
        ],
        correctOptionIndex: 0,
        explanation: 'DENSE_RANK() does not skip rank numbers after duplicate values. Ties both receive rank 1, and the next lower score receives rank 2 (whereas RANK() skips to 3).',
        skillCategory: 'Window Functions'
      },
      {
        id: 'sql-fe-3',
        type: 'conceptual',
        prompt: 'What does a Common Table Expression (CTE) defined with WITH allow you to do?',
        codeLanguage: 'sql',
        codeSnippet: 'WITH active_users AS (\n    SELECT id FROM users WHERE status = "active"\n)\nSELECT * FROM orders WHERE user_id IN (SELECT id FROM active_users);',
        options: [
          'Define a temporary named result set within the execution scope of a single query',
          'Persist a permanent table to disk',
          'Create a physical index on disk',
          'Grant read permissions to a database role'
        ],
        correctOptionIndex: 0,
        explanation: 'A Common Table Expression (CTE) creates a readable, modular, temporary result set that exists only during the execution of the subsequent statement.',
        skillCategory: 'CTEs'
      },
      {
        id: 'sql-fe-4',
        type: 'output_prediction',
        prompt: 'What does COALESCE(val1, val2, val3) return in SQL?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT COALESCE(NULL, NULL, "Third", "Fourth");',
        options: [
          '"Third"',
          'NULL',
          '"Fourth"',
          'Raises an error'
        ],
        correctOptionIndex: 0,
        explanation: 'COALESCE returns the very first non-NULL expression among its arguments from left to right. The first non-NULL value here is "Third".',
        skillCategory: 'Null Handling'
      },
      {
        id: 'sql-fe-5',
        type: 'output_prediction',
        prompt: 'What does the PARTITION BY clause do inside an OVER() window specification?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT department, name, salary,\n       AVG(salary) OVER(PARTITION BY department) AS dept_avg\nFROM employees;',
        options: [
          'Divides query rows into groups where the window function calculates independently, without collapsing rows',
          'Collapses rows into a single summary line per department like GROUP BY',
          'Physically partitions the database table on disk',
          'Sorts rows alphabetically by department'
        ],
        correctOptionIndex: 0,
        explanation: 'Unlike GROUP BY (which collapses multiple rows into one), PARTITION BY inside an OVER() clause computes the aggregate per partition while retaining every original individual row.',
        skillCategory: 'Window Functions'
      },
      {
        id: 'sql-fe-6',
        type: 'conceptual',
        prompt: 'What is the primary difference between UNION and UNION ALL?',
        codeLanguage: 'sql',
        options: [
          'UNION removes duplicate rows (requires sorting/hashing); UNION ALL retains all duplicates (faster)',
          'UNION ALL removes duplicate rows; UNION retains all duplicates',
          'UNION only works on tables with identical column names',
          'UNION ALL can only combine two tables maximum'
        ],
        correctOptionIndex: 0,
        explanation: 'UNION performs a distinct operation to eliminate duplicate rows across both result sets, incurring overhead. UNION ALL simply concatenates all rows directly, preserving duplicates and executing much faster.',
        skillCategory: 'Set Operations'
      },
      {
        id: 'sql-fe-7',
        type: 'output_prediction',
        prompt: 'What does LEAD(salary, 1) OVER(ORDER BY salary) return?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT salary, LEAD(salary, 1) OVER(ORDER BY salary) FROM employees;',
        options: [
          'The salary of the subsequent (next) employee in the sorted order',
          'The salary of the preceding (previous) employee',
          'The highest salary in the entire table',
          'The average salary of the remaining rows'
        ],
        correctOptionIndex: 0,
        explanation: 'LEAD() accesses data from a subsequent row at a given offset without needing a self-join. LAG() accesses data from a previous row.',
        skillCategory: 'Window Functions'
      },
      {
        id: 'sql-fe-8',
        type: 'conceptual',
        prompt: 'Why are correlated subqueries typically slower than joins or CTEs?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT e1.name FROM employees e1\nWHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.dept = e1.dept);',
        options: [
          'The inner query re-executes repeatedly for every single row processed by the outer query',
          'Correlated subqueries bypass the database query optimizer entirely',
          'They lock the entire database table in exclusive write mode',
          'Correlated subqueries cannot use WHERE clauses'
        ],
        correctOptionIndex: 0,
        explanation: 'A correlated subquery references values from the outer query row. Consequently, it may execute once per outer row (O(N^2) complexity in worst case) rather than computing once.',
        skillCategory: 'Query Performance'
      },
      {
        id: 'sql-fe-9',
        type: 'output_prediction',
        prompt: 'What is the result of applying a CASE statement in SELECT?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT score,\n       CASE\n           WHEN score >= 90 THEN "A"\n           WHEN score >= 75 THEN "B"\n           ELSE "C"\n       END AS grade\nFROM exams;',
        options: [
          'Conditional column projecting "A", "B", or "C" depending on score',
          'Filters the table to only return scores >= 75',
          'Raises an error if score is NULL',
          'Sorts the table by score ascending'
        ],
        correctOptionIndex: 0,
        explanation: 'The CASE statement acts as an inline switch/if-else expression, evaluating conditions sequentially and returning the matching THEN expression as a new column.',
        skillCategory: 'Conditional Logic'
      },
      {
        id: 'sql-fe-10',
        type: 'conceptual',
        prompt: 'What is a B-Tree database index primarily designed to optimize?',
        codeLanguage: 'sql',
        codeSnippet: 'CREATE INDEX idx_users_email ON users(email);',
        options: [
          'Accelerates equality lookups and range scans from O(N) to O(log N)',
          'Compresses table data size on disk by 50%',
          'Guarantees foreign key referential integrity',
          'Automatically encrypts table data'
        ],
        correctOptionIndex: 0,
        explanation: 'A B-Tree index maintains a sorted tree structure on the indexed column, enabling the query planner to perform binary searches in O(log N) time rather than scanning every row (O(N)).',
        skillCategory: 'Indexing & Performance'
      },
      {
        id: 'sql-fe-11',
        type: 'output_prediction',
        prompt: 'What happens when performing a DELETE statement without a WHERE clause?',
        codeLanguage: 'sql',
        codeSnippet: 'DELETE FROM audit_logs;',
        options: [
          'Deletes all rows from audit_logs while keeping the table structure intact',
          'Drops the entire table including its schema',
          'Raises a syntax error requiring confirmation',
          'Only deletes the first row'
        ],
        correctOptionIndex: 0,
        explanation: 'DELETE FROM table without a WHERE clause deletes every row in the table, but the table schema, columns, and indexes remain intact (unlike DROP TABLE).',
        skillCategory: 'DML Statements'
      },
      {
        id: 'sql-fe-12',
        type: 'conceptual',
        prompt: 'What constraint prevents duplicate values in a column while allowing NULLs in most SQL databases?',
        codeLanguage: 'sql',
        codeSnippet: 'ALTER TABLE users ADD CONSTRAINT ... (ssn);',
        options: [
          'UNIQUE constraint',
          'PRIMARY KEY constraint',
          'CHECK constraint',
          'FOREIGN KEY constraint'
        ],
        correctOptionIndex: 0,
        explanation: 'A UNIQUE constraint enforces uniqueness among all non-null values. PRIMARY KEY combines UNIQUE + NOT NULL (cannot contain NULLs).',
        skillCategory: 'Constraints & DDL'
      },
      {
        id: 'sql-fe-13',
        type: 'output_prediction',
        prompt: 'What does the string function SUBSTR("DevForge", 4, 5) return in SQLite?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT SUBSTR("DevForge", 4, 5);',
        options: [
          '"Forge"',
          '"evFor"',
          '"Forg"',
          '"vForg"'
        ],
        correctOptionIndex: 0,
        explanation: 'SQL string indexes are 1-based. Position 4 is "F". Taking a length of 5 characters extracts "F-o-r-g-e".',
        skillCategory: 'String Functions'
      },
      {
        id: 'sql-fe-14',
        type: 'conceptual',
        prompt: 'What does ACID stand for in database transaction management?',
        codeLanguage: 'sql',
        options: [
          'Atomicity, Consistency, Isolation, Durability',
          'Access, Control, Indexing, Data',
          'Authentication, Concurrency, Integrity, Distribution',
          'Aggregation, Calculation, Insertion, Deletion'
        ],
        correctOptionIndex: 0,
        explanation: 'ACID guarantees database reliability: Atomicity (all-or-nothing), Consistency (rules enforced), Isolation (concurrent safety), and Durability (persisted survival across power loss).',
        skillCategory: 'Database Theory'
      },
      {
        id: 'sql-fe-15',
        type: 'output_prediction',
        prompt: 'What does the SQL standard EXISTS operator check for?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT name FROM customers c\nWHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);',
        options: [
          'Evaluates to TRUE as soon as the subquery returns at least one row, stopping early for efficiency',
          'Counts the exact number of matching rows in orders',
          'Returns the customer with the highest order value',
          'Validates that the orders table exists in the schema'
        ],
        correctOptionIndex: 0,
        explanation: 'EXISTS returns a boolean. As soon as a single matching row is located in the subquery, evaluation short-circuits and returns TRUE, making it highly efficient.',
        skillCategory: 'Subqueries'
      },
      {
        id: 'sql-fe-16',
        type: 'output_prediction',
        prompt: 'What is the effect of FOREIGN KEY ... ON DELETE CASCADE?',
        codeLanguage: 'sql',
        codeSnippet: 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE',
        options: [
          'When a user row is deleted, all corresponding child rows in this table are deleted automatically',
          'Prevents deleting the parent user if any child rows exist',
          'Sets child user_id values to NULL upon parent deletion',
          'Archives deleted rows into a separate table'
        ],
        correctOptionIndex: 0,
        explanation: 'ON DELETE CASCADE instructs the database to automatically delete dependent child rows when the referenced parent record is deleted, maintaining referential integrity.',
        skillCategory: 'Foreign Keys'
      },
      {
        id: 'sql-fe-17',
        type: 'output_prediction',
        prompt: 'What does this query return when finding the second highest salary?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT DISTINCT salary FROM employees\nORDER BY salary DESC\nLIMIT 1 OFFSET 1;',
        options: [
          'The second highest unique salary in the company',
          'The top highest salary',
          'The average salary of all employees',
          'All salaries except the highest'
        ],
        correctOptionIndex: 0,
        explanation: 'ORDER BY salary DESC sorts salaries from highest to lowest. DISTINCT removes duplicates. OFFSET 1 skips the maximum salary, and LIMIT 1 selects the second highest.',
        skillCategory: 'Interview Query Patterns'
      },
      {
        id: 'sql-fe-18',
        type: 'output_prediction',
        prompt: 'What does ROUND(AVG(score), 2) achieve in business intelligence reporting?',
        codeLanguage: 'sql',
        codeSnippet: 'SELECT dept, ROUND(AVG(score), 2) AS avg_score FROM surveys GROUP BY dept;',
        options: [
          'Computes the mean score per department rounded to 2 decimal places',
          'Rounds scores before averaging them',
          'Limits the query to 2 departments',
          'Rounds scores to the nearest multiple of 2'
        ],
        correctOptionIndex: 0,
        explanation: 'AVG(score) calculates the arithmetic mean of all non-null survey scores per department, and ROUND(..., 2) formats the floating-point result to two decimal places.',
        skillCategory: 'Aggregates'
      },
      {
        id: 'sql-fe-19',
        type: 'conceptual',
        prompt: 'Which index type is best suited for columns with high cardinality (e.g. unique user UUIDs, emails)?',
        codeLanguage: 'sql',
        options: [
          'B-Tree Index',
          'Bitmap Index',
          'Full-text soundex index',
          'Spatial R-Tree index'
        ],
        correctOptionIndex: 0,
        explanation: 'B-Tree indexes excel at high-cardinality data where each value has few or no duplicates (like UUIDs or emails), delivering O(log N) lookups.',
        skillCategory: 'Index Optimization'
      },
      {
        id: 'sql-fe-20',
        type: 'output_prediction',
        prompt: 'What will be returned by this recursive CTE counting numbers?',
        codeLanguage: 'sql',
        codeSnippet: 'WITH RECURSIVE cnt(x) AS (\n    SELECT 1\n    UNION ALL\n    SELECT x + 1 FROM cnt WHERE x < 3\n)\nSELECT SUM(x) FROM cnt;',
        options: [
          '6 (1 + 2 + 3)',
          '3',
          '5',
          'Raises an infinite recursion error'
        ],
        correctOptionIndex: 0,
        explanation: 'The anchor query starts with 1. The recursive part generates 2 and 3, terminating when x is 3. The rows are 1, 2, 3. SUM(x) is 1 + 2 + 3 = 6.',
        skillCategory: 'Recursive CTEs'
      }
    ]
  }
];
