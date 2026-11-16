import { QuizQuestion } from '../../types/quiz';

/**
 * DevForge SQL 150-Question Master Certification Exam Bank
 * Partitioned into 3 Core Domains:
 * - Domain 1: Foundations, DDL/DML & Filtering (50 questions)
 * - Domain 2: Aggregations, GROUP BY & Analytical Clauses (50 questions)
 * - Domain 3: Multi-Table JOINs, Subqueries & Set Operations (50 questions)
 */
export const SQL_EXAM_BANK: QuizQuestion[] = [
  {
    "id": "sql-eb-1",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does this query return from an employees table?",
    "codeSnippet": "SELECT first_name, salary \nFROM employees \nWHERE salary > 50000;",
    "codeLanguage": "sql",
    "options": [
      "All columns of employees earning over 50,000",
      "Only first_name and salary for employees earning strictly more than 50,000",
      "All employees with salary >= 50,000",
      "Syntax error"
    ],
    "correctOptionIndex": 1,
    "explanation": "SELECT first_name, salary projects only those two columns, and > 50000 filters for values strictly greater than 50,000.",
    "skillCategory": "Basic Filtering"
  },
  {
    "id": "sql-eb-2",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of comparing a value to NULL using the = equality operator in SQL?",
    "codeSnippet": "SELECT * FROM users WHERE email = NULL;",
    "codeLanguage": "sql",
    "options": [
      "Returns all users with NULL email",
      "Returns 0 rows because comparisons with NULL yield UNKNOWN",
      "Returns all users with non-NULL email",
      "Raises a SyntaxError"
    ],
    "correctOptionIndex": 1,
    "explanation": "In SQL three-valued logic, expression = NULL evaluates to UNKNOWN (falsy in a WHERE filter). You must use IS NULL.",
    "skillCategory": "Three-Valued Logic"
  },
  {
    "id": "sql-eb-3",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you check for missing values in SQL?",
    "codeSnippet": "SELECT count(*) FROM customers WHERE phone IS NULL;",
    "codeLanguage": "sql",
    "options": [
      "Counts customers where phone number is NULL",
      "Syntax error (must use == NULL)",
      "Counts customers with empty string phone",
      "Counts all customers"
    ],
    "correctOptionIndex": 0,
    "explanation": "The IS NULL predicate is the standard SQL syntax to check for NULL missing values.",
    "skillCategory": "NULL Handling"
  },
  {
    "id": "sql-eb-4",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the DISTINCT keyword do?",
    "codeSnippet": "SELECT DISTINCT department, location FROM employees;",
    "codeLanguage": "sql",
    "options": [
      "Deduplicates based on department only",
      "Returns only unique combinations of (department, location)",
      "Returns the first row of each department",
      "Sorts results alphabetically"
    ],
    "correctOptionIndex": 1,
    "explanation": "DISTINCT applies to the entire row of projected columns, returning unique pairs of department and location.",
    "skillCategory": "DISTINCT Operator"
  },
  {
    "id": "sql-eb-5",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the LIKE operator with \"%\" wildcard match?",
    "codeSnippet": "SELECT title FROM books WHERE title LIKE \"%Python%\";",
    "codeLanguage": "sql",
    "options": [
      "Titles starting with Python",
      "Titles ending with Python",
      "Titles containing \"Python\" anywhere within the string",
      "Only exact match \"Python\""
    ],
    "correctOptionIndex": 2,
    "explanation": "The % wildcard in SQL represents zero or more characters, so \"%Python%\" matches anywhere in the string.",
    "skillCategory": "LIKE Wildcards"
  },
  {
    "id": "sql-eb-6",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the underscore \"_\" wildcard match in SQL LIKE expressions?",
    "codeSnippet": "SELECT code FROM items WHERE code LIKE \"A_9\";",
    "codeLanguage": "sql",
    "options": [
      "\"A9\" and \"AB9\"",
      "Any string starting with A and ending with 9 of any length",
      "Exactly 3-character strings starting with \"A\", any single character, ending with \"9\"",
      "Syntax error"
    ],
    "correctOptionIndex": 2,
    "explanation": "The underscore _ wildcard represents exactly one single character.",
    "skillCategory": "LIKE Wildcards"
  },
  {
    "id": "sql-eb-7",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "Are the endpoints inclusive or exclusive in SQL BETWEEN?",
    "codeSnippet": "SELECT score FROM exams WHERE score BETWEEN 70 AND 80;",
    "codeLanguage": "sql",
    "options": [
      "Includes 70 and 80 (70 <= score <= 80)",
      "Excludes 70 and 80 (70 < score < 80)",
      "Includes 70 but excludes 80",
      "Depends on the database dialect"
    ],
    "correctOptionIndex": 0,
    "explanation": "In SQL standard, BETWEEN is always inclusive of both boundary values (score >= 70 AND score <= 80).",
    "skillCategory": "BETWEEN Clause"
  },
  {
    "id": "sql-eb-8",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when NOT IN encounters a list containing a NULL value?",
    "codeSnippet": "SELECT name FROM students \nWHERE id NOT IN (1, 2, NULL);",
    "codeLanguage": "sql",
    "options": [
      "Returns students whose id is not 1 and not 2",
      "Returns 0 rows because x != NULL evaluates to UNKNOWN",
      "Ignores the NULL and returns id NOT IN (1, 2)",
      "Syntax error"
    ],
    "correctOptionIndex": 1,
    "explanation": "NOT IN (1, 2, NULL) expands to (id != 1) AND (id != 2) AND (id != NULL). Since id != NULL is UNKNOWN, the entire condition evaluates to UNKNOWN, returning 0 rows!",
    "skillCategory": "NOT IN with NULL"
  },
  {
    "id": "sql-eb-9",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How does ORDER BY sort results by default when ASC/DESC is omitted?",
    "codeSnippet": "SELECT name, salary FROM staff ORDER BY salary;",
    "codeLanguage": "sql",
    "options": [
      "Descending (highest to lowest)",
      "Ascending (lowest to highest)",
      "Random order",
      "Insertion order"
    ],
    "correctOptionIndex": 1,
    "explanation": "ORDER BY defaults to ascending order (ASC) if not specified.",
    "skillCategory": "ORDER BY"
  },
  {
    "id": "sql-eb-10",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of sorting by multiple columns with mixed directions?",
    "codeSnippet": "SELECT dept, salary FROM staff ORDER BY dept ASC, salary DESC;",
    "codeLanguage": "sql",
    "options": [
      "Sorts by dept alphabetically, then within each dept sorts salary highest to lowest",
      "Sorts salary first, then dept",
      "Sorts both descending",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Sorting resolves left-to-right: primary sort is dept ASC, secondary tie-breaker is salary DESC.",
    "skillCategory": "Multi-column Sort"
  },
  {
    "id": "sql-eb-11",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What do LIMIT and OFFSET do in pagination?",
    "codeSnippet": "SELECT name FROM products ORDER BY id LIMIT 5 OFFSET 10;",
    "codeLanguage": "sql",
    "options": [
      "Returns 10 rows starting from row 5",
      "Skips the first 10 rows and returns the next 5 rows",
      "Returns rows 5 through 10",
      "Returns 5 rows total, starting from index 0"
    ],
    "correctOptionIndex": 1,
    "explanation": "OFFSET 10 skips the first 10 rows; LIMIT 5 takes the next 5 rows (rows 11 to 15).",
    "skillCategory": "Pagination"
  },
  {
    "id": "sql-eb-12",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the operator precedence between AND and OR in SQL WHERE clauses?",
    "codeSnippet": "SELECT * FROM employees \nWHERE dept = \"IT\" OR dept = \"HR\" AND salary > 60000;",
    "codeLanguage": "sql",
    "options": [
      "Evaluated as (dept=\"IT\" OR dept=\"HR\") AND (salary > 60000)",
      "Evaluated as (dept=\"IT\") OR (dept=\"HR\" AND salary > 60000)",
      "Evaluated strictly left-to-right",
      "Syntax error without parentheses"
    ],
    "correctOptionIndex": 1,
    "explanation": "In SQL, AND has higher precedence than OR. All IT employees are returned regardless of salary, plus HR employees earning > 60000.",
    "skillCategory": "Operator Precedence"
  },
  {
    "id": "sql-eb-13",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does COALESCE() return in SQL?",
    "codeSnippet": "SELECT COALESCE(NULL, NULL, \"Third\", \"Fourth\");",
    "codeLanguage": "sql",
    "options": [
      "NULL",
      "Third",
      "Fourth",
      "Syntax error"
    ],
    "correctOptionIndex": 1,
    "explanation": "COALESCE() evaluates arguments in order and returns the first non-NULL value found (\"Third\").",
    "skillCategory": "COALESCE"
  },
  {
    "id": "sql-eb-14",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does NULLIF(val1, val2) return when the arguments are identical?",
    "codeSnippet": "SELECT NULLIF(100, 100);",
    "codeLanguage": "sql",
    "options": [
      "100",
      "NULL",
      "0",
      "True"
    ],
    "correctOptionIndex": 1,
    "explanation": "NULLIF(a, b) returns NULL if a = b; otherwise it returns a.",
    "skillCategory": "NULLIF"
  },
  {
    "id": "sql-eb-15",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does this DDL statement enforce?",
    "codeSnippet": "CREATE TABLE accounts (\n  id INT PRIMARY KEY,\n  balance DECIMAL(10, 2) CHECK (balance >= 0)\n);",
    "codeLanguage": "sql",
    "options": [
      "Allows negative balance if approved",
      "Rejects any INSERT or UPDATE that results in a balance < 0",
      "Automatically sets balance to 0 on negative input",
      "Syntax error"
    ],
    "correctOptionIndex": 1,
    "explanation": "A CHECK constraint validates that inserted or updated data satisfies the boolean condition; negative values are rejected with a constraint violation.",
    "skillCategory": "CHECK Constraints"
  },
  {
    "id": "sql-eb-16",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "spot_the_bug",
    "prompt": "What is the catastrophic mistake in this SQL query?",
    "codeSnippet": "UPDATE users SET status = \"inactive\";",
    "codeLanguage": "sql",
    "options": [
      "Missing WHERE clause: updates EVERY single row in the users table to \"inactive\"",
      "status is a reserved keyword",
      "Must use single quotes in SQL",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Without a WHERE clause, an UPDATE statement modifies every record in the table.",
    "skillCategory": "Accidental Table Wipe"
  },
  {
    "id": "sql-eb-17",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "conceptual",
    "prompt": "What is the difference between DELETE and TRUNCATE in SQL?",
    "codeLanguage": "sql",
    "options": [
      "TRUNCATE is a DDL operation that resets high water mark and cannot be filtered with WHERE, while DELETE is DML and accepts WHERE",
      "DELETE and TRUNCATE are completely identical",
      "DELETE drops the table structure",
      "TRUNCATE only works on temporary tables"
    ],
    "correctOptionIndex": 0,
    "explanation": "TRUNCATE deallocates data pages rapidly without logging individual row deletions, cannot have a WHERE clause, and resets identity seeds.",
    "skillCategory": "DELETE vs TRUNCATE"
  },
  {
    "id": "sql-eb-18",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does table aliasing with AS do?",
    "codeSnippet": "SELECT e.first_name, e.last_name FROM employees AS e;",
    "codeLanguage": "sql",
    "options": [
      "Creates a new copy of the table",
      "Renames the column in database",
      "Assigns a temporary shorthand alias e to employees for this query",
      "Syntax error"
    ],
    "correctOptionIndex": 2,
    "explanation": "AS assigns an alias e to simplify referencing columns and disambiguate join tables.",
    "skillCategory": "Aliases"
  },
  {
    "id": "sql-eb-19",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of using the IN operator with values?",
    "codeSnippet": "SELECT status FROM orders WHERE status IN (\"pending\", \"shipped\");",
    "codeLanguage": "sql",
    "options": [
      "Returns orders where status is either \"pending\" or \"shipped\"",
      "Returns orders where status is both \"pending\" and \"shipped\"",
      "Syntax error",
      "Returns only pending orders"
    ],
    "correctOptionIndex": 0,
    "explanation": "IN is shorthand for multiple OR equality conditions (status = \"pending\" OR status = \"shipped\").",
    "skillCategory": "IN Operator"
  },
  {
    "id": "sql-eb-20",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of string concatenation with NULL in standard SQL?",
    "codeSnippet": "SELECT \"Hello \" || NULL || \"World\";",
    "codeLanguage": "sql",
    "options": [
      "Hello World",
      "NULL",
      "Hello NULLWorld",
      "Error"
    ],
    "correctOptionIndex": 1,
    "explanation": "In SQL standard (and SQLite/PostgreSQL), concatenating any string with NULL produces NULL.",
    "skillCategory": "Concatenation with NULL"
  },
  {
    "id": "sql-eb-21",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you insert multiple rows in a single SQL statement?",
    "codeSnippet": "INSERT INTO tags (name) VALUES (\"python\"), (\"sql\"), (\"react\");",
    "codeLanguage": "sql",
    "options": [
      "Inserts 3 separate rows into the tags table",
      "Inserts 1 row containing an array",
      "Syntax error",
      "Only inserts the first row"
    ],
    "correctOptionIndex": 0,
    "explanation": "Standard SQL allows comma-separated tuple values to insert multiple rows in one atomic statement.",
    "skillCategory": "Multi-row Insert"
  },
  {
    "id": "sql-eb-22",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the effect of the UNIQUE constraint on a column?",
    "codeSnippet": "CREATE TABLE members (email VARCHAR(255) UNIQUE);",
    "codeLanguage": "sql",
    "options": [
      "Prevents duplicate email values while allowing NULL values",
      "Requires email to be a primary key",
      "Forces email to be lowercase",
      "Rejects all NULL values"
    ],
    "correctOptionIndex": 0,
    "explanation": "UNIQUE prevents duplicate values; in standard SQL, multiple NULLs are permitted unless NOT NULL is also specified.",
    "skillCategory": "UNIQUE Constraint"
  },
  {
    "id": "sql-eb-23",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of testing IS NOT NULL vs != NULL?",
    "codeSnippet": "SELECT (NULL IS NOT NULL) AS c1, (NULL != NULL) AS c2;",
    "codeLanguage": "sql",
    "options": [
      "c1: 0 (False), c2: NULL (Unknown)",
      "c1: False, c2: False",
      "c1: True, c2: False",
      "c1: NULL, c2: NULL"
    ],
    "correctOptionIndex": 0,
    "explanation": "IS NOT NULL evaluates to boolean False (0), whereas NULL != NULL evaluates to NULL (UNKNOWN).",
    "skillCategory": "Three-Valued Logic"
  },
  {
    "id": "sql-eb-24",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does DROP TABLE IF EXISTS do?",
    "codeSnippet": "DROP TABLE IF EXISTS audit_logs;",
    "codeLanguage": "sql",
    "options": [
      "Deletes the table if it exists without raising an error if it does not",
      "Deletes all records but keeps the table structure",
      "Creates the table if missing",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "IF EXISTS prevents throwing an error if the table does not exist at runtime.",
    "skillCategory": "DROP TABLE"
  },
  {
    "id": "sql-eb-25",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the CASCADE option in DROP TABLE do?",
    "codeSnippet": "DROP TABLE departments CASCADE;",
    "codeLanguage": "sql",
    "options": [
      "Drops departments and automatically drops dependent objects like foreign key constraints",
      "Only drops departments if it is empty",
      "Creates a backup before dropping",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "CASCADE drops the target table along with all foreign key constraints referencing it.",
    "skillCategory": "Foreign Key Cascades"
  },
  {
    "id": "sql-eb-26",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What happens when SELECT * is executed on a table with 5 columns?",
    "codeSnippet": "SELECT * FROM clients;",
    "codeLanguage": "sql",
    "options": [
      "Returns all 5 columns for all rows in clients",
      "Returns only primary key column",
      "Returns row count only",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "* is the wildcard selector projecting all columns in the table schema.",
    "skillCategory": "SELECT Wildcard"
  },
  {
    "id": "sql-eb-27",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the DEFAULT constraint do during an INSERT?",
    "codeSnippet": "CREATE TABLE logs (level VARCHAR(10) DEFAULT \"INFO\");\nINSERT INTO logs DEFAULT VALUES;",
    "codeLanguage": "sql",
    "options": [
      "Inserts a row where level is set to \"INFO\"",
      "Inserts NULL into level",
      "Raises constraint violation",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "When a column is omitted or DEFAULT is specified, the column takes its defined default value (\"INFO\").",
    "skillCategory": "DEFAULT Constraint"
  },
  {
    "id": "sql-eb-28",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does CASE expression do when no ELSE branch is specified and no WHEN matches?",
    "codeSnippet": "SELECT CASE WHEN 1 = 2 THEN \"Yes\" END AS result;",
    "codeLanguage": "sql",
    "options": [
      "NULL",
      "Empty string \"\"",
      "False",
      "Raises an error"
    ],
    "correctOptionIndex": 0,
    "explanation": "In SQL, if no WHEN condition is satisfied and no ELSE is provided, the CASE expression evaluates to NULL.",
    "skillCategory": "CASE Expressions"
  },
  {
    "id": "sql-eb-29",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How do you escape single quotes in SQL string literals?",
    "codeSnippet": "SELECT \"O'Reilly\"; -- or standard SQL representation",
    "codeLanguage": "sql",
    "options": [
      "Use two consecutive single quotes: 'O''Reilly'",
      "Use backslash: 'O\\'Reilly'",
      "Use double quotes only",
      "Cannot be escaped"
    ],
    "correctOptionIndex": 0,
    "explanation": "In standard SQL, a single quote is escaped inside a string literal by doubling it: 'O''Reilly'.",
    "skillCategory": "String Escaping"
  },
  {
    "id": "sql-eb-30",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the WHERE clause do in an SQL query?",
    "codeSnippet": "SELECT * FROM products WHERE price < 20;",
    "codeLanguage": "sql",
    "options": [
      "Filters rows before any aggregation takes place",
      "Sorts rows in ascending order",
      "Groups products by price",
      "Deletes products priced under 20"
    ],
    "correctOptionIndex": 0,
    "explanation": "WHERE filters individual rows from the source table before grouping and aggregations.",
    "skillCategory": "WHERE Purpose"
  },
  {
    "id": "sql-eb-31",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of using column position numbers in ORDER BY?",
    "codeSnippet": "SELECT name, age, city FROM users ORDER BY 2 DESC;",
    "codeLanguage": "sql",
    "options": [
      "Sorts by the second projected column (age) in descending order",
      "Sorts by the second row in table",
      "Sorts by column named \"2\"",
      "Syntax error in modern SQL"
    ],
    "correctOptionIndex": 0,
    "explanation": "ORDER BY 2 refers to the 2nd column in the SELECT projection list (age) DESC.",
    "skillCategory": "Positional Ordering"
  },
  {
    "id": "sql-eb-32",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "Where do NULL values appear in standard ascending sort order in PostgreSQL vs SQLite/MySQL?",
    "codeSnippet": "SELECT val FROM test ORDER BY val ASC;",
    "codeLanguage": "sql",
    "options": [
      "In PostgreSQL NULLS appear last by default; in SQLite/MySQL NULLS appear first by default",
      "Always first in all databases",
      "Always last in all databases",
      "NULLs are excluded"
    ],
    "correctOptionIndex": 0,
    "explanation": "Standard SQL allows dialects to treat NULLs as smallest (SQLite/MySQL: first in ASC) or largest (PostgreSQL/Oracle: last in ASC). Use NULLS FIRST / NULLS LAST to be explicit.",
    "skillCategory": "NULL Ordering"
  },
  {
    "id": "sql-eb-33",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the primary key constraint ensure?",
    "codeSnippet": "CREATE TABLE items (id INT PRIMARY KEY);",
    "codeLanguage": "sql",
    "options": [
      "Unique non-null values for each row in the table",
      "Allows multiple NULL values",
      "Sorts the table permanently",
      "Encrypts the column data"
    ],
    "correctOptionIndex": 0,
    "explanation": "A PRIMARY KEY uniquely identifies each record and strictly disallows duplicate and NULL values.",
    "skillCategory": "Primary Key"
  },
  {
    "id": "sql-eb-34",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is a composite primary key?",
    "codeSnippet": "PRIMARY KEY (order_id, item_id)",
    "codeLanguage": "sql",
    "options": [
      "A primary key composed of two or more columns together uniquely identifying a row",
      "Two separate primary keys in one table",
      "An encrypted key",
      "A foreign key constraint"
    ],
    "correctOptionIndex": 0,
    "explanation": "A composite primary key combines multiple columns; individual columns may have duplicates, but their combination must be unique.",
    "skillCategory": "Composite Keys"
  },
  {
    "id": "sql-eb-35",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the foreign key ON DELETE CASCADE clause do?",
    "codeSnippet": "FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE",
    "codeLanguage": "sql",
    "options": [
      "When a user is deleted, all their associated child rows are automatically deleted",
      "Prevents deleting the parent user",
      "Sets user_id to NULL on delete",
      "Sends a notification"
    ],
    "correctOptionIndex": 0,
    "explanation": "ON DELETE CASCADE automatically deletes referencing child records when the referenced parent record is deleted.",
    "skillCategory": "Cascading Deletes"
  },
  {
    "id": "sql-eb-36",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens with ON DELETE SET NULL if child column has NOT NULL constraint?",
    "codeSnippet": "CREATE TABLE orders (user_id INT NOT NULL REFERENCES users(id) ON DELETE SET NULL);",
    "codeLanguage": "sql",
    "options": [
      "Parent deletion fails with a constraint violation because user_id cannot be set to NULL",
      "Bypasses NOT NULL and sets NULL",
      "Deletes the child order",
      "Drops the table"
    ],
    "correctOptionIndex": 0,
    "explanation": "Attempting to SET NULL on a column constrained with NOT NULL results in a foreign key constraint violation.",
    "skillCategory": "Foreign Key Gotchas"
  },
  {
    "id": "sql-eb-37",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What SQL statement modifies the schema of an existing table?",
    "codeSnippet": "ALTER TABLE employees ADD COLUMN hire_date DATE;",
    "codeLanguage": "sql",
    "options": [
      "ALTER TABLE",
      "MODIFY TABLE",
      "UPDATE TABLE",
      "CHANGE TABLE"
    ],
    "correctOptionIndex": 0,
    "explanation": "ALTER TABLE is the DDL command used to add, drop, or modify columns and constraints on existing tables.",
    "skillCategory": "ALTER TABLE"
  },
  {
    "id": "sql-eb-38",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does TRUNCATE table do to auto-increment identity counters?",
    "codeLanguage": "sql",
    "options": [
      "Resets the identity / auto-increment counter back to its initial seed (typically 1)",
      "Leaves the counter at its current position",
      "Sets counter to -1",
      "Raises an error"
    ],
    "correctOptionIndex": 0,
    "explanation": "TRUNCATE resets identity / auto-increment seeds back to start, whereas DELETE does not reset the counter.",
    "skillCategory": "Identity Reset"
  },
  {
    "id": "sql-eb-39",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does LIKE with ESCAPE clause allow?",
    "codeSnippet": "SELECT code FROM items WHERE code LIKE \"100!%\" ESCAPE \"!\";",
    "codeLanguage": "sql",
    "options": [
      "Matches literal string \"100%\" instead of treating % as a wildcard",
      "Treats ! as an error",
      "Matches any character after !",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "The ESCAPE clause designates \"!\" as an escape prefix, allowing literal matching of % and _ characters.",
    "skillCategory": "LIKE Escape"
  },
  {
    "id": "sql-eb-40",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does an integer division like 5 / 2 return in SQLite and SQL Server when both operands are integers?",
    "codeSnippet": "SELECT 5 / 2;",
    "codeLanguage": "sql",
    "options": [
      "2 (integer truncation)",
      "2.5",
      "3 (rounded)",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "In SQL Server, PostgreSQL, and SQLite, integer division truncates decimal parts to integer 2. To get 2.5, cast to float: 5.0 / 2.",
    "skillCategory": "Integer Division"
  },
  {
    "id": "sql-eb-41",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does LENGTH() or LEN() function return?",
    "codeSnippet": "SELECT LENGTH(\"DevForge\");",
    "codeLanguage": "sql",
    "options": [
      "8",
      "7",
      "9",
      "64"
    ],
    "correctOptionIndex": 0,
    "explanation": "\"DevForge\" has 8 characters, so LENGTH() returns 8.",
    "skillCategory": "String Length"
  },
  {
    "id": "sql-eb-42",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does LOWER() function do to string data in WHERE comparison?",
    "codeSnippet": "SELECT * FROM users WHERE LOWER(username) = \"admin\";",
    "codeLanguage": "sql",
    "options": [
      "Performs case-insensitive matching by converting username to lowercase",
      "Permanently changes the database column to lowercase",
      "Rejects uppercase usernames",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "LOWER() transforms the column value to lowercase during evaluation, allowing case-insensitive matching.",
    "skillCategory": "LOWER Function"
  },
  {
    "id": "sql-eb-43",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does SUBSTR(\"Database\", 1, 4) return in SQL?",
    "codeSnippet": "SELECT SUBSTR(\"Database\", 1, 4);",
    "codeLanguage": "sql",
    "options": [
      "Data",
      "atab",
      "base",
      "Datab"
    ],
    "correctOptionIndex": 0,
    "explanation": "SQL string indexing starts at 1: position 1 for length 4 extracts \"Data\".",
    "skillCategory": "Substring"
  },
  {
    "id": "sql-eb-44",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the logical order of query processing for an SQL query containing WHERE and ORDER BY?",
    "codeLanguage": "sql",
    "options": [
      "FROM -> WHERE -> SELECT -> ORDER BY",
      "SELECT -> FROM -> WHERE -> ORDER BY",
      "WHERE -> FROM -> SELECT -> ORDER BY",
      "ORDER BY -> WHERE -> FROM -> SELECT"
    ],
    "correctOptionIndex": 0,
    "explanation": "SQL logical processing evaluates FROM first, then WHERE filters rows, SELECT projects columns, and ORDER BY sorts the final output.",
    "skillCategory": "Query Lifecycle"
  },
  {
    "id": "sql-eb-45",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you delete only specific rows from a table?",
    "codeSnippet": "DELETE FROM sessions WHERE expired = 1;",
    "codeLanguage": "sql",
    "options": [
      "Deletes only rows where expired equals 1",
      "Deletes all rows and drops sessions table",
      "Creates a new table",
      "Marks rows as hidden"
    ],
    "correctOptionIndex": 0,
    "explanation": "The WHERE clause restricts DELETE to only rows matching the specified condition.",
    "skillCategory": "DELETE Statement"
  },
  {
    "id": "sql-eb-46",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of using IN with an empty set in SQL?",
    "codeSnippet": "SELECT * FROM items WHERE id IN ();",
    "codeLanguage": "sql",
    "options": [
      "Syntax error in standard SQL",
      "Returns 0 rows",
      "Returns all rows",
      "Returns NULL"
    ],
    "correctOptionIndex": 0,
    "explanation": "In standard SQL, an empty IN () list is a syntax error. A subquery returning 0 rows like IN (SELECT 1 WHERE 1=0) is valid and returns 0 rows.",
    "skillCategory": "Empty IN List"
  },
  {
    "id": "sql-eb-47",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the difference between VARCHAR(50) and CHAR(50)?",
    "codeLanguage": "sql",
    "options": [
      "VARCHAR is variable length up to 50 chars; CHAR is fixed length right-padded with spaces to exactly 50 chars",
      "They are completely identical in all databases",
      "CHAR is variable length and VARCHAR is fixed length",
      "VARCHAR only accepts numbers"
    ],
    "correctOptionIndex": 0,
    "explanation": "CHAR(50) always allocates 50 characters padding with whitespace; VARCHAR(50) stores only the actual string length plus length prefix.",
    "skillCategory": "CHAR vs VARCHAR"
  },
  {
    "id": "sql-eb-48",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when a transaction executes ROLLBACK?",
    "codeSnippet": "BEGIN TRANSACTION;\nDELETE FROM accounts;\nROLLBACK;",
    "codeLanguage": "sql",
    "options": [
      "All changes made in the transaction are undone; accounts table data is completely restored",
      "Accounts table is deleted permanently",
      "Only the last row is restored",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "ROLLBACK reverts all uncommitted DML modifications made since the beginning of the transaction block.",
    "skillCategory": "Transactions"
  },
  {
    "id": "sql-eb-49",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What keyword commits changes permanently to the database?",
    "codeSnippet": "COMMIT;",
    "codeLanguage": "sql",
    "options": [
      "Permanently writes all transaction changes to storage",
      "Undoes all changes",
      "Locks the database",
      "Pauses execution"
    ],
    "correctOptionIndex": 0,
    "explanation": "COMMIT saves all pending modifications made in the current transaction block permanently.",
    "skillCategory": "COMMIT"
  },
  {
    "id": "sql-eb-50",
    "trackId": "sql",
    "domain": "Foundations, DDL/DML & Filtering",
    "difficulty": "medium",
    "type": "conceptual",
    "prompt": "What does ACID stand for in database transaction management?",
    "codeLanguage": "sql",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Concurrency, Integrity, Durability",
      "Atomicity, Cache, Index, Distribution",
      "Access, Control, Isolation, Data"
    ],
    "correctOptionIndex": 0,
    "explanation": "ACID guarantees reliability in databases: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent safety), Durability (persisted).",
    "skillCategory": "ACID Properties"
  },
  {
    "id": "sql-eb-51",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the difference between COUNT(*) and COUNT(column)?",
    "codeLanguage": "sql",
    "options": [
      "COUNT(*) counts all rows including NULLs; COUNT(column) counts only rows where column IS NOT NULL",
      "They are identical",
      "COUNT(*) only counts primary keys",
      "COUNT(column) counts distinct values"
    ],
    "correctOptionIndex": 0,
    "explanation": "COUNT(*) tallies every row in the result set regardless of contents, whereas COUNT(column) ignores NULL entries in that specific column.",
    "skillCategory": "COUNT Function"
  },
  {
    "id": "sql-eb-52",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of SUM() and AVG() when all values in the column are NULL?",
    "codeSnippet": "SELECT SUM(bonus), AVG(bonus) FROM employees WHERE dept = \"Empty\";",
    "codeLanguage": "sql",
    "options": [
      "NULL NULL",
      "0 0",
      "0 NULL",
      "Raises an error"
    ],
    "correctOptionIndex": 0,
    "explanation": "When an aggregate function operates on an empty set or a column containing only NULLs, it returns NULL (except COUNT, which returns 0).",
    "skillCategory": "Aggregate on NULLs"
  },
  {
    "id": "sql-eb-53",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does COUNT(DISTINCT country) return?",
    "codeSnippet": "SELECT COUNT(DISTINCT country) FROM visitors;",
    "codeLanguage": "sql",
    "options": [
      "The number of unique non-null countries in the visitors table",
      "Total rows in visitors",
      "A list of country names",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "COUNT(DISTINCT col) counts the number of unique non-null values in that column.",
    "skillCategory": "COUNT DISTINCT"
  },
  {
    "id": "sql-eb-54",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the fundamental difference between WHERE and HAVING?",
    "codeLanguage": "sql",
    "options": [
      "WHERE filters rows before aggregation; HAVING filters aggregated groups after GROUP BY",
      "HAVING runs before WHERE",
      "WHERE can use aggregate functions like SUM() but HAVING cannot",
      "They are synonyms"
    ],
    "correctOptionIndex": 0,
    "explanation": "WHERE filters raw individual records before grouping. HAVING filters the grouped results after aggregate calculations.",
    "skillCategory": "WHERE vs HAVING"
  },
  {
    "id": "sql-eb-55",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "spot_the_bug",
    "prompt": "Why does this query fail in standard SQL?",
    "codeSnippet": "SELECT department, location, AVG(salary) \nFROM employees \nGROUP BY department;",
    "codeLanguage": "sql",
    "options": [
      "Column \"location\" must either appear in the GROUP BY clause or be used in an aggregate function",
      "AVG is not a valid function",
      "GROUP BY must precede WHERE",
      "Missing HAVING clause"
    ],
    "correctOptionIndex": 0,
    "explanation": "Every column in the SELECT list that is not part of an aggregate function must be included in the GROUP BY clause.",
    "skillCategory": "GROUP BY Column Rule"
  },
  {
    "id": "sql-eb-56",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does this HAVING clause filter for?",
    "codeSnippet": "SELECT dept, COUNT(*) \nFROM staff \nGROUP BY dept \nHAVING COUNT(*) >= 5;",
    "codeLanguage": "sql",
    "options": [
      "Only departments with 5 or more staff members",
      "Staff members with id >= 5",
      "The first 5 departments",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "HAVING COUNT(*) >= 5 filters groups, returning only those departments with at least 5 staff records.",
    "skillCategory": "HAVING Clause"
  },
  {
    "id": "sql-eb-57",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How can you count occurrences conditionally inside an aggregation in SQL?",
    "codeSnippet": "SELECT \n  COUNT(CASE WHEN status = \"active\" THEN 1 END) AS active_count \nFROM users;",
    "codeLanguage": "sql",
    "options": [
      "Counts only rows where status is \"active\" because non-matching rows return NULL which COUNT ignores",
      "Counts all users",
      "Returns a boolean",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "CASE without ELSE returns NULL when status != \"active\". Since COUNT ignores NULLs, only active rows are counted.",
    "skillCategory": "Conditional Aggregation"
  },
  {
    "id": "sql-eb-58",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) produce?",
    "codeLanguage": "sql",
    "options": [
      "A sequential integer (1, 2, 3...) restarting at 1 for each department, ordered by highest salary first",
      "A global rank across all departments",
      "The total salary per department",
      "A random row index"
    ],
    "correctOptionIndex": 0,
    "explanation": "PARTITION BY divides the result into partitions (departments), and ROW_NUMBER() assigns sequential integers starting at 1 within each partition.",
    "skillCategory": "ROW_NUMBER"
  },
  {
    "id": "sql-eb-59",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the difference between RANK() and DENSE_RANK() when ties occur?",
    "codeSnippet": "-- Values: 100, 100, 80",
    "codeLanguage": "sql",
    "options": [
      "RANK() assigns 1, 1, 3 (skips rank 2); DENSE_RANK() assigns 1, 1, 2 (no gaps)",
      "RANK() never has ties; DENSE_RANK() allows ties",
      "DENSE_RANK() skips ranks; RANK() does not",
      "They are identical"
    ],
    "correctOptionIndex": 0,
    "explanation": "RANK() leaves gaps following ties (1, 1, 3). DENSE_RANK() does not skip numbers (1, 1, 2).",
    "skillCategory": "RANK vs DENSE_RANK"
  },
  {
    "id": "sql-eb-60",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does a running cumulative total window function look like?",
    "codeSnippet": "SELECT \n  day, \n  revenue, \n  SUM(revenue) OVER (ORDER BY day) AS running_total \nFROM daily_sales;",
    "codeLanguage": "sql",
    "options": [
      "Calculates the cumulative sum of revenue from the first day up to the current day",
      "Calculates total revenue across all days statically",
      "Syntax error",
      "Returns only the maximum revenue"
    ],
    "correctOptionIndex": 0,
    "explanation": "SUM() OVER (ORDER BY day) creates a running total frame (UNBOUNDED PRECEDING to CURRENT ROW).",
    "skillCategory": "Running Total"
  },
  {
    "id": "sql-eb-61",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What do MIN() and MAX() do on text string columns?",
    "codeSnippet": "SELECT MIN(name), MAX(name) FROM fruits;\n-- fruits: \"apple\", \"banana\", \"cherry\"",
    "codeLanguage": "sql",
    "options": [
      "MIN: \"apple\", MAX: \"cherry\" (alphabetical order)",
      "MIN: shortest string, MAX: longest string",
      "Raises an error (only numbers allowed)",
      "MIN: NULL, MAX: NULL"
    ],
    "correctOptionIndex": 0,
    "explanation": "MIN() and MAX() on strings evaluate alphabetical (lexicographical) collation order.",
    "skillCategory": "MIN MAX on Strings"
  },
  {
    "id": "sql-eb-62",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of GROUP BY with multiple columns?",
    "codeSnippet": "SELECT year, quarter, SUM(sales) \nFROM revenue \nGROUP BY year, quarter;",
    "codeLanguage": "sql",
    "options": [
      "Aggregates sales for each unique combination of year and quarter",
      "Aggregates by year only",
      "Aggregates by quarter only",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Grouping by multiple columns produces one aggregate row per distinct pair of (year, quarter).",
    "skillCategory": "Multi-column Grouping"
  },
  {
    "id": "sql-eb-63",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does LAG(salary, 1) OVER (ORDER BY hire_date) return?",
    "codeLanguage": "sql",
    "options": [
      "The salary of the previous employee ordered by hire_date (or NULL for the first row)",
      "The salary of the next employee",
      "The lowest salary",
      "Average salary"
    ],
    "correctOptionIndex": 0,
    "explanation": "LAG() accesses data from a previous row in the same result set without using a self-join.",
    "skillCategory": "LAG Function"
  },
  {
    "id": "sql-eb-64",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does LEAD(status, 1, \"NONE\") OVER (ORDER BY id) do when on the last row?",
    "codeLanguage": "sql",
    "options": [
      "Returns the default fallback value \"NONE\" because there is no following row",
      "Returns NULL",
      "Raises an IndexError",
      "Loops back to the first row"
    ],
    "correctOptionIndex": 0,
    "explanation": "LEAD(col, offset, default) returns the specified default value (\"NONE\") when the target offset is out of bounds.",
    "skillCategory": "LEAD Function"
  },
  {
    "id": "sql-eb-65",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the result of ROUND(AVG(rating), 1)?",
    "codeSnippet": "-- ratings: 4.3333, 4.6666, 5.0",
    "codeLanguage": "sql",
    "options": [
      "Rounds the average rating to 1 decimal place",
      "Rounds to the nearest integer",
      "Truncates without rounding",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "ROUND(value, d) rounds the numeric value to d decimal places.",
    "skillCategory": "ROUND Function"
  },
  {
    "id": "sql-eb-66",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "Can an alias defined in SELECT be referenced directly in the WHERE clause?",
    "codeSnippet": "SELECT salary * 12 AS annual_salary FROM staff WHERE annual_salary > 100000;",
    "codeLanguage": "sql",
    "options": [
      "No, in standard SQL WHERE evaluates before SELECT, so column aliases are not yet known",
      "Yes, aliases are always available everywhere",
      "Only in MySQL",
      "Only in SQLite"
    ],
    "correctOptionIndex": 0,
    "explanation": "Because FROM and WHERE execute before SELECT, the alias annual_salary does not exist when WHERE filters rows.",
    "skillCategory": "Alias Lifecycle"
  },
  {
    "id": "sql-eb-67",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "Can a column alias defined in SELECT be used in the ORDER BY clause?",
    "codeSnippet": "SELECT salary * 12 AS annual_salary FROM staff ORDER BY annual_salary DESC;",
    "codeLanguage": "sql",
    "options": [
      "Yes, ORDER BY evaluates after SELECT, so aliases are valid in ORDER BY",
      "No, must repeat the expression salary * 12",
      "Only in subqueries",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "ORDER BY runs after SELECT in query logical execution, so column aliases are fully accessible.",
    "skillCategory": "Alias in ORDER BY"
  },
  {
    "id": "sql-eb-68",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does GROUP_CONCAT(name, \", \") or STRING_AGG(name, \", \") do?",
    "codeSnippet": "SELECT dept, GROUP_CONCAT(name, \", \") FROM staff GROUP BY dept;",
    "codeLanguage": "sql",
    "options": [
      "Concatenates the names of staff in each department into a single comma-separated string",
      "Joins two tables",
      "Counts names",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "GROUP_CONCAT (SQLite/MySQL) and STRING_AGG (PostgreSQL/SQL Server) concatenate values from multiple rows into one string per group.",
    "skillCategory": "String Aggregation"
  },
  {
    "id": "sql-eb-69",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does this query calculate?",
    "codeSnippet": "SELECT MAX(price) - MIN(price) AS price_range FROM catalog;",
    "codeLanguage": "sql",
    "options": [
      "The difference between the highest and lowest price",
      "Average price",
      "Total revenue",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "MAX() minus MIN() computes the spread or range between maximum and minimum values.",
    "skillCategory": "Aggregate Math"
  },
  {
    "id": "sql-eb-70",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the output of SUM(DISTINCT score) vs SUM(score)?",
    "codeSnippet": "-- scores: 10, 10, 20",
    "codeLanguage": "sql",
    "options": [
      "SUM(DISTINCT score) is 30; SUM(score) is 40",
      "Both evaluate to 40",
      "Both evaluate to 30",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "SUM(DISTINCT score) deduplicates before summing: 10 + 20 = 30. SUM(score) sums all rows: 10 + 10 + 20 = 40.",
    "skillCategory": "SUM DISTINCT"
  },
  {
    "id": "sql-eb-71",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does NTILE(4) OVER (ORDER BY score DESC) do?",
    "codeLanguage": "sql",
    "options": [
      "Divides the sorted rows into 4 roughly equal quartiles (buckets numbered 1 to 4)",
      "Finds the 4th highest score",
      "Multiplies score by 4",
      "Filters for top 4 rows"
    ],
    "correctOptionIndex": 0,
    "explanation": "NTILE(n) is an analytical window function that divides an ordered partition into n ranked buckets/quartiles.",
    "skillCategory": "NTILE"
  },
  {
    "id": "sql-eb-72",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How do you filter for groups having more than one distinct role?",
    "codeSnippet": "SELECT dept FROM employees GROUP BY dept HAVING COUNT(DISTINCT role) > 1;",
    "codeLanguage": "sql",
    "options": [
      "Departments that employ people across at least two distinct job roles",
      "Departments with more than 1 employee",
      "Roles that appear in more than 1 department",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "COUNT(DISTINCT role) > 1 in HAVING filters for departments with 2 or more unique job titles.",
    "skillCategory": "HAVING COUNT DISTINCT"
  },
  {
    "id": "sql-eb-73",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What happens when GROUP BY is used without any aggregate functions in SELECT?",
    "codeSnippet": "SELECT country FROM customers GROUP BY country;",
    "codeLanguage": "sql",
    "options": [
      "Acts equivalently to SELECT DISTINCT country",
      "Raises a syntax error",
      "Returns only the first row",
      "Returns NULL"
    ],
    "correctOptionIndex": 0,
    "explanation": "GROUP BY on a column without aggregates folds identical values into groups, behaving like SELECT DISTINCT.",
    "skillCategory": "GROUP BY without Aggregates"
  },
  {
    "id": "sql-eb-74",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the result of using an aggregate function in a WHERE clause directly?",
    "codeSnippet": "SELECT name FROM staff WHERE salary > AVG(salary);",
    "codeLanguage": "sql",
    "options": [
      "Syntax error: aggregate functions cannot appear directly in a WHERE clause",
      "Returns staff earning above average",
      "Returns 0 rows",
      "Returns all staff"
    ],
    "correctOptionIndex": 0,
    "explanation": "WHERE filters rows before aggregates are computed. To filter by an aggregate, use a subquery: WHERE salary > (SELECT AVG(salary) FROM staff).",
    "skillCategory": "Aggregate in WHERE Error"
  },
  {
    "id": "sql-eb-75",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does FIRST_VALUE(item) OVER (PARTITION BY category ORDER BY price ASC) return?",
    "codeLanguage": "sql",
    "options": [
      "The cheapest item in each category for every row in that category partition",
      "The first row in the table",
      "Average price item",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "FIRST_VALUE() returns the first value evaluated in the ordered window frame (the lowest priced item in that category).",
    "skillCategory": "FIRST_VALUE"
  },
  {
    "id": "sql-eb-76",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of GROUP BY with a CASE statement?",
    "codeSnippet": "SELECT \n  CASE WHEN age < 18 THEN \"Minor\" ELSE \"Adult\" END AS age_group,\n  COUNT(*)\nFROM users\nGROUP BY CASE WHEN age < 18 THEN \"Minor\" ELSE \"Adult\" END;",
    "codeLanguage": "sql",
    "options": [
      "Aggregates users into two groups: \"Minor\" count and \"Adult\" count",
      "Raises an error",
      "Returns individual user rows",
      "Only counts adults"
    ],
    "correctOptionIndex": 0,
    "explanation": "Grouping by a CASE expression categorizes rows into dynamic buckets and computes aggregates per bucket.",
    "skillCategory": "Grouping by Expression"
  },
  {
    "id": "sql-eb-77",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does OVER () with an empty clause do?",
    "codeSnippet": "SELECT id, salary, AVG(salary) OVER () AS company_avg FROM employees;",
    "codeLanguage": "sql",
    "options": [
      "Appends the overall company-wide average salary to every individual employee row without collapsing rows",
      "Returns only 1 row",
      "Syntax error",
      "Averages each row with itself"
    ],
    "correctOptionIndex": 0,
    "explanation": "An empty OVER () window function computes the aggregate across the entire table without grouping or collapsing rows.",
    "skillCategory": "Window Function OVER"
  },
  {
    "id": "sql-eb-78",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the SUM() function do with boolean expressions in dialects like MySQL/SQLite?",
    "codeSnippet": "SELECT SUM(is_active = 1) FROM accounts;",
    "codeLanguage": "sql",
    "options": [
      "Counts how many accounts have is_active equal to 1",
      "Returns boolean True/False",
      "Raises TypeError",
      "Sums account IDs"
    ],
    "correctOptionIndex": 0,
    "explanation": "Since boolean True evaluates to integer 1 in MySQL/SQLite, SUM(is_active = 1) counts the matching rows.",
    "skillCategory": "Boolean Sum"
  },
  {
    "id": "sql-eb-79",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does standard SQL COALESCE do inside an aggregate?",
    "codeSnippet": "SELECT AVG(COALESCE(score, 0)) FROM students;",
    "codeLanguage": "sql",
    "options": [
      "Treats NULL scores as 0 in the average calculation",
      "Ignores NULL scores",
      "Returns 0 if any score is NULL",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "COALESCE(score, 0) replaces NULLs with 0 so they count in both the numerator sum and denominator row count.",
    "skillCategory": "COALESCE in AVG"
  },
  {
    "id": "sql-eb-80",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does the clause \"ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\" specify in a window frame?",
    "codeLanguage": "sql",
    "options": [
      "A moving 3-row window consisting of the previous row, current row, and next row",
      "Only 1 row",
      "All rows before current row",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING defines a centered moving window frame of size 3.",
    "skillCategory": "Window Frames"
  },
  {
    "id": "sql-eb-81",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does ABS() do in SQL?",
    "codeSnippet": "SELECT ABS(-42);",
    "codeLanguage": "sql",
    "options": [
      "42",
      "-42",
      "0",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "ABS() returns the absolute non-negative magnitude of a number: 42.",
    "skillCategory": "Math ABS"
  },
  {
    "id": "sql-eb-82",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does CEIL() or CEILING() do?",
    "codeSnippet": "SELECT CEIL(4.2);",
    "codeLanguage": "sql",
    "options": [
      "5",
      "4",
      "4.2",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "CEIL() returns the smallest integer greater than or equal to the input (rounds up to 5).",
    "skillCategory": "CEIL Function"
  },
  {
    "id": "sql-eb-83",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does FLOOR() do?",
    "codeSnippet": "SELECT FLOOR(4.9);",
    "codeLanguage": "sql",
    "options": [
      "4",
      "5",
      "4.9",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "FLOOR() returns the largest integer less than or equal to the input (rounds down to 4).",
    "skillCategory": "FLOOR Function"
  },
  {
    "id": "sql-eb-84",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the output of DENSE_RANK() for values 50, 50, 40, 30?",
    "codeLanguage": "sql",
    "options": [
      "1, 1, 2, 3",
      "1, 1, 3, 4",
      "1, 2, 3, 4",
      "1, 1, 1, 2"
    ],
    "correctOptionIndex": 0,
    "explanation": "Tied highest values both get rank 1, and the next distinct value (40) gets rank 2 with no gaps.",
    "skillCategory": "DENSE_RANK Numbers"
  },
  {
    "id": "sql-eb-85",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does TRIM() do to string data?",
    "codeSnippet": "SELECT TRIM(\"   DevForge   \");",
    "codeLanguage": "sql",
    "options": [
      "\"DevForge\" (removes both leading and trailing whitespace)",
      "\"DevForge   \"",
      "\"   DevForge\"",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "TRIM() strips whitespace from both the beginning and the end of the string.",
    "skillCategory": "TRIM"
  },
  {
    "id": "sql-eb-86",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the UPPER() function return?",
    "codeSnippet": "SELECT UPPER(\"sql\");",
    "codeLanguage": "sql",
    "options": [
      "SQL",
      "sql",
      "Sql",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "UPPER() converts all lowercase letters to uppercase: \"SQL\".",
    "skillCategory": "UPPER"
  },
  {
    "id": "sql-eb-87",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does PERCENT_RANK() calculate in SQL window functions?",
    "codeLanguage": "sql",
    "options": [
      "Calculates relative rank of a row as (rank - 1) / (total_rows - 1), ranging from 0.0 to 1.0",
      "Multiplies rank by 100",
      "Calculates percentile out of 10",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "PERCENT_RANK() returns the relative rank evaluated between 0 and 1.",
    "skillCategory": "PERCENT_RANK"
  },
  {
    "id": "sql-eb-88",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of MOD(17, 5)?",
    "codeSnippet": "SELECT MOD(17, 5); -- or 17 % 5 in SQLite",
    "codeLanguage": "sql",
    "options": [
      "2",
      "3",
      "3.4",
      "1"
    ],
    "correctOptionIndex": 0,
    "explanation": "17 divided by 5 is 3 with a remainder of 2.",
    "skillCategory": "MOD Operator"
  },
  {
    "id": "sql-eb-89",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How do you find the second highest salary using subquery and MAX?",
    "codeSnippet": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
    "codeLanguage": "sql",
    "options": [
      "Returns the second highest salary in the company",
      "Returns the highest salary",
      "Returns NULL",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "The subquery finds the maximum salary; the outer query finds the maximum among all salaries strictly less than that maximum.",
    "skillCategory": "Second Highest Salary"
  },
  {
    "id": "sql-eb-90",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does CUME_DIST() calculate?",
    "codeLanguage": "sql",
    "options": [
      "The cumulative distribution: proportion of rows with values less than or equal to current row",
      "Cumulative sum of rows",
      "Running average",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "CUME_DIST() computes the cumulative distribution of a value within an ordered group of values.",
    "skillCategory": "CUME_DIST"
  },
  {
    "id": "sql-eb-91",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the output of INSTR(\"Database\", \"base\") in SQLite/MySQL?",
    "codeSnippet": "SELECT INSTR(\"Database\", \"base\");",
    "codeLanguage": "sql",
    "options": [
      "5",
      "4",
      "1",
      "-1"
    ],
    "correctOptionIndex": 0,
    "explanation": "INSTR() returns the 1-based index where substring \"base\" begins in \"Database\" (character 5).",
    "skillCategory": "INSTR"
  },
  {
    "id": "sql-eb-92",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the difference between REPLACE(\"abc\", \"b\", \"z\") and TRANSLATE()?",
    "codeSnippet": "SELECT REPLACE(\"abc\", \"b\", \"z\");",
    "codeLanguage": "sql",
    "options": [
      "Returns \"azc\" by replacing substring \"b\" with \"z\"",
      "Returns \"abc\"",
      "Error",
      "Returns \"zzz\""
    ],
    "correctOptionIndex": 0,
    "explanation": "REPLACE replaces occurrences of search substring with replacement string: \"azc\".",
    "skillCategory": "REPLACE"
  },
  {
    "id": "sql-eb-93",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does ROLLUP do when added to GROUP BY in systems like PostgreSQL/MySQL?",
    "codeSnippet": "SELECT dept, role, SUM(sales) FROM staff GROUP BY ROLLUP(dept, role);",
    "codeLanguage": "sql",
    "options": [
      "Produces hierarchical subtotals for (dept, role), subtotals for (dept), and a grand total",
      "Rolls back the transaction",
      "Deletes empty groups",
      "Sorts alphabetically"
    ],
    "correctOptionIndex": 0,
    "explanation": "ROLLUP generates subtotals along the specified hierarchy plus a grand total row.",
    "skillCategory": "GROUP BY ROLLUP"
  },
  {
    "id": "sql-eb-94",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does CUBE do compared to ROLLUP in GROUP BY?",
    "codeLanguage": "sql",
    "options": [
      "Generates subtotals for all possible combinations of dimensions (power set)",
      "Only generates a single grand total",
      "Generates 3D coordinates",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "CUBE generates aggregations across all permutations of the grouped columns ($2^N$ grouping sets).",
    "skillCategory": "GROUP BY CUBE"
  },
  {
    "id": "sql-eb-95",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the date function strftime(\"%Y\", \"2026-11-16\") return in SQLite?",
    "codeSnippet": "SELECT strftime(\"%Y\", \"2026-11-16\");",
    "codeLanguage": "sql",
    "options": [
      "\"2026\"",
      "\"11\"",
      "\"16\"",
      "2026"
    ],
    "correctOptionIndex": 0,
    "explanation": "%Y extracts the 4-digit year string: \"2026\".",
    "skillCategory": "Date Functions"
  },
  {
    "id": "sql-eb-96",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does CURRENT_DATE return?",
    "codeSnippet": "SELECT CURRENT_DATE;",
    "codeLanguage": "sql",
    "options": [
      "The current calendar date on the database server",
      "The database creation date",
      "Current time only",
      "Error"
    ],
    "correctOptionIndex": 0,
    "explanation": "CURRENT_DATE standard SQL function returns the current server date (YYYY-MM-DD).",
    "skillCategory": "CURRENT_DATE"
  },
  {
    "id": "sql-eb-97",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does CAST(\"42\" AS INTEGER) do?",
    "codeSnippet": "SELECT CAST(\"42\" AS INTEGER);",
    "codeLanguage": "sql",
    "options": [
      "Converts string \"42\" to integer 42",
      "Returns string \"42\"",
      "Throws an error",
      "Returns NULL"
    ],
    "correctOptionIndex": 0,
    "explanation": "CAST(expr AS type) performs explicit type conversion in standard SQL.",
    "skillCategory": "CAST"
  },
  {
    "id": "sql-eb-98",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does a Window function frame \"RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\" do with duplicate ORDER BY values?",
    "codeLanguage": "sql",
    "options": [
      "Includes all peers (rows with identical values) up to the current row, unlike ROWS which counts strictly physical rows",
      "Only counts 1 row",
      "Excludes duplicates",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "RANGE treats rows with identical ORDER BY values as ties/peers and includes all of them in the window calculation.",
    "skillCategory": "RANGE vs ROWS"
  },
  {
    "id": "sql-eb-99",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How do you find departments where the maximum salary is below 100000?",
    "codeSnippet": "SELECT dept FROM staff GROUP BY dept HAVING MAX(salary) < 100000;",
    "codeLanguage": "sql",
    "options": [
      "Filters grouped departments where the highest salary is strictly under 100,000",
      "Filters staff earning under 100,000",
      "Syntax error",
      "Returns all departments"
    ],
    "correctOptionIndex": 0,
    "explanation": "HAVING MAX(salary) < 100000 filters aggregated department groups.",
    "skillCategory": "HAVING MAX"
  },
  {
    "id": "sql-eb-100",
    "trackId": "sql",
    "domain": "Aggregations, GROUP BY & Analytical Clauses",
    "difficulty": "easy",
    "type": "conceptual",
    "prompt": "Can an aggregate function be nested inside another aggregate function like MAX(SUM(val)) directly in standard SQL?",
    "codeLanguage": "sql",
    "options": [
      "No, nested aggregates are invalid in standard SQL; a subquery or CTE must be used",
      "Yes, standard SQL allows unlimited nesting of aggregates",
      "Only in MySQL",
      "Only for COUNT"
    ],
    "correctOptionIndex": 0,
    "explanation": "Directly nesting aggregate functions like MAX(SUM(x)) is prohibited; compute the inner aggregate in a subquery or CTE first.",
    "skillCategory": "Nested Aggregates Rule"
  },
  {
    "id": "sql-eb-101",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does an INNER JOIN return?",
    "codeSnippet": "SELECT u.name, o.order_id \nFROM users u \nINNER JOIN orders o ON u.id = o.user_id;",
    "codeLanguage": "sql",
    "options": [
      "Only rows where there is a matching user_id in both users and orders",
      "All users regardless of orders",
      "All orders and all users",
      "Cartesian product of both tables"
    ],
    "correctOptionIndex": 0,
    "explanation": "INNER JOIN returns only rows that satisfy the join condition in both tables.",
    "skillCategory": "INNER JOIN"
  },
  {
    "id": "sql-eb-102",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does a LEFT JOIN (LEFT OUTER JOIN) return for left rows without matching right rows?",
    "codeSnippet": "SELECT u.name, o.order_id \nFROM users u \nLEFT JOIN orders o ON u.id = o.user_id;",
    "codeLanguage": "sql",
    "options": [
      "Returns all users; unmatched users have NULL for order_id",
      "Excludes users without orders",
      "Raises an error",
      "Returns empty string"
    ],
    "correctOptionIndex": 0,
    "explanation": "LEFT JOIN preserves every row from the left table; columns from the right table are filled with NULL when no match exists.",
    "skillCategory": "LEFT JOIN"
  },
  {
    "id": "sql-eb-103",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you find users who have NEVER placed an order using a LEFT JOIN?",
    "codeSnippet": "SELECT u.name \nFROM users u \nLEFT JOIN orders o ON u.id = o.user_id \nWHERE o.order_id IS NULL;",
    "codeLanguage": "sql",
    "options": [
      "Returns users who have no corresponding records in the orders table",
      "Returns users whose orders are priced at NULL",
      "Syntax error",
      "Returns all users"
    ],
    "correctOptionIndex": 0,
    "explanation": "The anti-join pattern: LEFT JOIN combined with WHERE right_table.key IS NULL selects rows with zero matches.",
    "skillCategory": "Anti-Join Pattern"
  },
  {
    "id": "sql-eb-104",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of a CROSS JOIN between a table with 4 rows and a table with 5 rows?",
    "codeSnippet": "SELECT * FROM sizes CROSS JOIN colors;",
    "codeLanguage": "sql",
    "options": [
      "20 rows (4 * 5 Cartesian product)",
      "9 rows (4 + 5)",
      "4 rows",
      "5 rows"
    ],
    "correctOptionIndex": 0,
    "explanation": "CROSS JOIN produces a Cartesian product matching every row of table 1 with every row of table 2: 4 * 5 = 20.",
    "skillCategory": "CROSS JOIN"
  },
  {
    "id": "sql-eb-105",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is a self-join in SQL?",
    "codeSnippet": "SELECT e.name AS employee, m.name AS manager \nFROM employees e \nLEFT JOIN employees m ON e.manager_id = m.id;",
    "codeLanguage": "sql",
    "options": [
      "Joining a table to itself using different aliases to represent hierarchical relationships",
      "A join that runs in a loop",
      "A temporary table join",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "A self-join joins a table to itself using aliases (e and m) to model parent-child relationships like employees and managers.",
    "skillCategory": "Self-Join"
  },
  {
    "id": "sql-eb-106",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the difference between UNION and UNION ALL?",
    "codeLanguage": "sql",
    "options": [
      "UNION removes duplicate rows (requires sorting/hashing); UNION ALL retains all rows including duplicates (faster)",
      "UNION ALL removes duplicates and UNION does not",
      "UNION only works on numbers",
      "They are synonyms in standard SQL"
    ],
    "correctOptionIndex": 0,
    "explanation": "UNION performs deduplication; UNION ALL simply appends results directly without deduplication overhead.",
    "skillCategory": "UNION vs UNION ALL"
  },
  {
    "id": "sql-eb-107",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What requirement must be met for queries combined with UNION?",
    "codeLanguage": "sql",
    "options": [
      "Both queries must have the same number of columns with compatible data types",
      "Both tables must have identical names",
      "Both queries must sort by the same column",
      "Only 2 tables can be combined"
    ],
    "correctOptionIndex": 0,
    "explanation": "Set operators (UNION, INTERSECT, EXCEPT) require matching column counts and compatible data types in corresponding positions.",
    "skillCategory": "UNION Rules"
  },
  {
    "id": "sql-eb-108",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does INTERSECT return in SQL?",
    "codeSnippet": "SELECT email FROM newsletter_subscribers \nINTERSECT \nSELECT email FROM active_users;",
    "codeLanguage": "sql",
    "options": [
      "Only emails that appear in both result sets",
      "All emails from both sets",
      "Emails in the first set but not the second",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "INTERSECT returns only distinct rows that are present in both queries.",
    "skillCategory": "INTERSECT"
  },
  {
    "id": "sql-eb-109",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does EXCEPT (or MINUS in Oracle) return?",
    "codeSnippet": "SELECT id FROM all_customers \nEXCEPT \nSELECT customer_id FROM refunds;",
    "codeLanguage": "sql",
    "options": [
      "IDs that appear in all_customers but do NOT appear in refunds",
      "IDs that appear in both tables",
      "All IDs combined",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "EXCEPT returns distinct rows from the first query that do not exist in the second query.",
    "skillCategory": "EXCEPT Operator"
  },
  {
    "id": "sql-eb-110",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is a correlated subquery?",
    "codeSnippet": "SELECT name, salary \nFROM employees e \nWHERE salary > (SELECT AVG(salary) FROM employees WHERE dept = e.dept);",
    "codeLanguage": "sql",
    "options": [
      "A subquery that references a column (e.dept) from the outer query, evaluated once for each outer row",
      "A subquery that runs once before the outer query",
      "A subquery with a JOIN",
      "A subquery inside a FROM clause"
    ],
    "correctOptionIndex": 0,
    "explanation": "A correlated subquery references values from the outer query row (e.dept) and executes repeatedly for each candidate row.",
    "skillCategory": "Correlated Subquery"
  },
  {
    "id": "sql-eb-111",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does the EXISTS operator return?",
    "codeSnippet": "SELECT name FROM authors a \nWHERE EXISTS (SELECT 1 FROM books b WHERE b.author_id = a.id);",
    "codeLanguage": "sql",
    "options": [
      "Returns authors who have at least one book in the books table",
      "Returns 1 for every author",
      "Returns all authors",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "EXISTS tests for the presence of at least one row returned by the subquery (returns boolean True as soon as 1 match is found).",
    "skillCategory": "EXISTS Operator"
  },
  {
    "id": "sql-eb-112",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is a Common Table Expression (CTE) defined with the WITH keyword?",
    "codeSnippet": "WITH top_spenders AS (\n  SELECT user_id, SUM(amount) AS total \n  FROM orders \n  GROUP BY user_id \n  HAVING SUM(amount) > 1000\n)\nSELECT * FROM top_spenders;",
    "codeLanguage": "sql",
    "options": [
      "A named temporary result set that exists only within the execution scope of that statement",
      "A permanent database view",
      "A stored procedure",
      "A database trigger"
    ],
    "correctOptionIndex": 0,
    "explanation": "A CTE (WITH clause) defines a temporary, readable named result set referenced within the subsequent query.",
    "skillCategory": "CTEs"
  },
  {
    "id": "sql-eb-113",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is a scalar subquery?",
    "codeSnippet": "SELECT name, (SELECT MAX(price) FROM products) AS max_p FROM products;",
    "codeLanguage": "sql",
    "options": [
      "A subquery that returns exactly one single value (1 row, 1 column)",
      "A subquery that returns a full table",
      "A subquery that has no SELECT",
      "A correlated join"
    ],
    "correctOptionIndex": 0,
    "explanation": "A scalar subquery returns exactly one column and one row, allowing it to be used wherever an atomic expression is valid.",
    "skillCategory": "Scalar Subquery"
  },
  {
    "id": "sql-eb-114",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the difference between filtering in the ON clause vs the WHERE clause of a LEFT JOIN?",
    "codeSnippet": "-- Query 1: LEFT JOIN orders o ON u.id = o.user_id AND o.status = \"paid\"\n-- Query 2: LEFT JOIN orders o ON u.id = o.user_id WHERE o.status = \"paid\"",
    "codeLanguage": "sql",
    "options": [
      "Query 1 preserves all users (unmatched get NULL); Query 2 turns the join into an INNER JOIN because WHERE rejects NULLs",
      "Both queries return identical results",
      "Query 1 raises a syntax error",
      "Query 2 preserves all users"
    ],
    "correctOptionIndex": 0,
    "explanation": "Filtering in WHERE on right table columns excludes rows where right columns are NULL, effectively converting a LEFT JOIN into an INNER JOIN.",
    "skillCategory": "ON vs WHERE in LEFT JOIN"
  },
  {
    "id": "sql-eb-115",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does a FULL OUTER JOIN return?",
    "codeSnippet": "SELECT * FROM a FULL OUTER JOIN b ON a.id = b.id;",
    "codeLanguage": "sql",
    "options": [
      "All matching rows, plus unmatched rows from table A with NULLs, plus unmatched rows from table B with NULLs",
      "Only matching rows",
      "Cartesian product",
      "Syntax error in all databases"
    ],
    "correctOptionIndex": 0,
    "explanation": "FULL OUTER JOIN combines the results of both LEFT and RIGHT outer joins, keeping all records from both sides.",
    "skillCategory": "FULL OUTER JOIN"
  },
  {
    "id": "sql-eb-116",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "Can a subquery in the FROM clause be used without an alias in standard SQL?",
    "codeSnippet": "SELECT sub.val FROM (SELECT 10 AS val) AS sub;",
    "codeLanguage": "sql",
    "options": [
      "Every derived table / inline subquery in FROM must have an alias assigned",
      "Aliases are forbidden in FROM",
      "Only temporary tables need aliases",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "In SQL standard (and most RDBMS), every derived table in the FROM clause must be given an alias.",
    "skillCategory": "Derived Table Alias"
  },
  {
    "id": "sql-eb-117",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the ALL operator do with a subquery comparison?",
    "codeSnippet": "SELECT salary FROM staff WHERE salary > ALL (SELECT salary FROM interns);",
    "codeLanguage": "sql",
    "options": [
      "Returns salaries strictly greater than every single salary in the interns subquery (greater than the MAX)",
      "Returns salaries greater than any intern",
      "Returns average",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "> ALL (subquery) means greater than all elements returned by the subquery (i.e. greater than the maximum value).",
    "skillCategory": "ALL Operator"
  },
  {
    "id": "sql-eb-118",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the ANY (or SOME) operator do with a subquery comparison?",
    "codeSnippet": "SELECT salary FROM staff WHERE salary > ANY (SELECT salary FROM interns);",
    "codeLanguage": "sql",
    "options": [
      "Returns salaries greater than at least one value in the interns subquery (greater than the MIN)",
      "Returns salaries greater than all interns",
      "Returns equal values",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "> ANY (subquery) evaluates to True if the salary is greater than at least one value in the returned set.",
    "skillCategory": "ANY Operator"
  },
  {
    "id": "sql-eb-119",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does a Recursive CTE require?",
    "codeSnippet": "WITH RECURSIVE cnt(x) AS (\n  SELECT 1          -- Anchor member\n  UNION ALL\n  SELECT x + 1 FROM cnt WHERE x < 5 -- Recursive member\n)\nSELECT * FROM cnt;",
    "codeLanguage": "sql",
    "options": [
      "An anchor query, UNION ALL, and a recursive query with a termination condition",
      "A while loop",
      "A cursor",
      "Stored procedure"
    ],
    "correctOptionIndex": 0,
    "explanation": "A recursive CTE consists of an anchor member (base case) and a recursive member joined by UNION ALL with a termination condition.",
    "skillCategory": "Recursive CTE"
  },
  {
    "id": "sql-eb-120",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "How do you join 3 tables in a single SQL query?",
    "codeSnippet": "SELECT u.name, o.id, p.name \nFROM users u \nJOIN orders o ON u.id = o.user_id \nJOIN products p ON o.product_id = p.id;",
    "codeLanguage": "sql",
    "options": [
      "Chain consecutive JOIN clauses sequentially",
      "Use a triple join keyword",
      "Nested joins only",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "Multiple tables are joined sequentially by adding consecutive JOIN ... ON ... clauses.",
    "skillCategory": "Multiple JOINs"
  },
  {
    "id": "sql-eb-121",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is a natural join (NATURAL JOIN)?",
    "codeSnippet": "SELECT * FROM employees NATURAL JOIN departments;",
    "codeLanguage": "sql",
    "options": [
      "Automatically joins tables on all columns that share the same name in both tables",
      "Joins on primary keys only",
      "Generates random join",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "NATURAL JOIN implicitly creates an equi-join on all columns with identical names in both tables (often discouraged in production due to fragility).",
    "skillCategory": "NATURAL JOIN"
  },
  {
    "id": "sql-eb-122",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does the USING clause do in place of ON?",
    "codeSnippet": "SELECT * FROM employees JOIN departments USING (dept_id);",
    "codeLanguage": "sql",
    "options": [
      "Joins on dept_id and projects dept_id only once without table qualification prefix",
      "Syntax error",
      "Filters rows where dept_id is 0",
      "Creates an alias"
    ],
    "correctOptionIndex": 0,
    "explanation": "USING (dept_id) is shorthand for ON e.dept_id = d.dept_id when the column name is identical in both tables.",
    "skillCategory": "USING Clause"
  },
  {
    "id": "sql-eb-123",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when performing an INNER JOIN where both tables have duplicate keys?",
    "codeSnippet": "-- Table A has two rows with id=1\n-- Table B has three rows with id=1",
    "codeLanguage": "sql",
    "options": [
      "Produces 6 rows (2 * 3 matches)",
      "Produces 2 rows",
      "Produces 3 rows",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "An equi-join matches every matching row on the left with every matching row on the right: 2 * 3 = 6 rows.",
    "skillCategory": "Join Multiplicity"
  },
  {
    "id": "sql-eb-124",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "Can a subquery appear in the SELECT column projection list?",
    "codeSnippet": "SELECT name, (SELECT COUNT(*) FROM orders WHERE user_id = u.id) AS order_count FROM users u;",
    "codeLanguage": "sql",
    "options": [
      "Yes, as a scalar subquery returning one single value per row",
      "No, subqueries can only appear in WHERE",
      "Only in MySQL",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "A scalar subquery in the SELECT list evaluates to an atomic column value for each row of the outer query.",
    "skillCategory": "Subquery in SELECT"
  },
  {
    "id": "sql-eb-125",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "Why is NOT EXISTS generally safer than NOT IN when subqueries may return NULL?",
    "codeLanguage": "sql",
    "options": [
      "NOT EXISTS uses two-valued boolean logic and is immune to NULL subquery values; NOT IN returns 0 rows if any NULL is present",
      "NOT IN is always faster",
      "NOT EXISTS only works on numbers",
      "They are identical"
    ],
    "correctOptionIndex": 0,
    "explanation": "If a subquery returns even a single NULL, NOT IN evaluates to UNKNOWN for all rows. NOT EXISTS checks row existence and handles NULL safely.",
    "skillCategory": "NOT EXISTS vs NOT IN"
  },
  {
    "id": "sql-eb-126",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the result of non-equi joins?",
    "codeSnippet": "SELECT e.name, b.band \nFROM employees e \nJOIN salary_bands b ON e.salary >= b.min_salary AND e.salary <= b.max_salary;",
    "codeLanguage": "sql",
    "options": [
      "Assigns employees to salary bands using inequality ranges (>= and <=)",
      "Syntax error (must use = in ON)",
      "Cartesian product",
      "Returns 0 rows"
    ],
    "correctOptionIndex": 0,
    "explanation": "Join conditions are not limited to equality =; non-equi joins can use range inequalities like >= and <=.",
    "skillCategory": "Non-equi Joins"
  },
  {
    "id": "sql-eb-127",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does RIGHT JOIN (RIGHT OUTER JOIN) do?",
    "codeSnippet": "SELECT * FROM a RIGHT JOIN b ON a.id = b.id;",
    "codeLanguage": "sql",
    "options": [
      "Preserves all rows from table B, filling unmatched table A columns with NULL",
      "Preserves all rows from table A",
      "Equivalent to INNER JOIN",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "RIGHT JOIN ensures every record from the right table appears in the output.",
    "skillCategory": "RIGHT JOIN"
  },
  {
    "id": "sql-eb-128",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does an EXPLAIN QUERY PLAN or EXPLAIN statement do?",
    "codeSnippet": "EXPLAIN QUERY PLAN SELECT * FROM users WHERE email = \"a@b.com\";",
    "codeLanguage": "sql",
    "options": [
      "Displays the execution strategy chosen by the database engine (e.g. index seek vs full table scan)",
      "Executes the query twice as fast",
      "Validates syntax only without planning",
      "Exports data to text"
    ],
    "correctOptionIndex": 0,
    "explanation": "EXPLAIN inspects the execution plan generated by the cost-based query optimizer.",
    "skillCategory": "EXPLAIN QUERY PLAN"
  },
  {
    "id": "sql-eb-129",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "How does an index on a column speed up WHERE queries?",
    "codeLanguage": "sql",
    "options": [
      "Allows O(log N) B-Tree binary search lookups instead of an O(N) full table scan",
      "Compresses the database file",
      "Automatically caches results in memory",
      "Pre-computes all mathematical operations"
    ],
    "correctOptionIndex": 0,
    "explanation": "Database indexes use B-Tree (or hash) structures to locate matching rows in logarithmic time without reading every row from disk.",
    "skillCategory": "Database Indexes"
  },
  {
    "id": "sql-eb-130",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is a composite index on (last_name, first_name)?",
    "codeLanguage": "sql",
    "options": [
      "An index covering both columns; can satisfy queries filtering by last_name, or (last_name AND first_name)",
      "Can only be used if both columns are queried together",
      "Two separate indexes",
      "An encrypted index"
    ],
    "correctOptionIndex": 0,
    "explanation": "A composite index works according to the leftmost prefix rule: it speeds up queries on (col1) or (col1, col2), but not (col2) alone.",
    "skillCategory": "Composite Index"
  },
  {
    "id": "sql-eb-131",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is a database VIEW?",
    "codeSnippet": "CREATE VIEW active_users AS SELECT * FROM users WHERE is_active = 1;",
    "codeLanguage": "sql",
    "options": [
      "A stored query definition that acts as a virtual table",
      "A physical copy of the data updated daily",
      "A temporary table that drops on logout",
      "A database index"
    ],
    "correctOptionIndex": 0,
    "explanation": "A view is a saved virtual table whose query executes dynamically whenever the view is queried.",
    "skillCategory": "Database Views"
  },
  {
    "id": "sql-eb-132",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is a MATERIALIZED VIEW compared to a standard VIEW?",
    "codeLanguage": "sql",
    "options": [
      "A materialized view stores the physical query result on disk and must be refreshed; a standard view re-executes its query every time",
      "They are completely identical",
      "Materialized views cannot be indexed",
      "Standard views store data on disk"
    ],
    "correctOptionIndex": 0,
    "explanation": "Materialized views persist query results on disk for fast analytical access and require periodic REFRESH.",
    "skillCategory": "Materialized Views"
  },
  {
    "id": "sql-eb-133",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is an index scan vs index seek in database query plans?",
    "codeLanguage": "sql",
    "options": [
      "Index seek navigates the B-Tree directly to specific keys (fastest); index scan reads all index leaves sequentially",
      "Index scan is faster than index seek",
      "They mean the same thing",
      "Index seek only applies to text"
    ],
    "correctOptionIndex": 0,
    "explanation": "An index seek directly traverses the B-Tree hierarchy to find qualifying rows, whereas an index scan scans through all index entries.",
    "skillCategory": "Index Seek vs Scan"
  },
  {
    "id": "sql-eb-134",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What happens when UNION ALL is used between two queries returning [1, 2] and [2, 3]?",
    "codeSnippet": "SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT 3;",
    "codeLanguage": "sql",
    "options": [
      "Returns 4 rows: 1, 2, 2, 3",
      "Returns 3 rows: 1, 2, 3",
      "Syntax error",
      "Returns NULL"
    ],
    "correctOptionIndex": 0,
    "explanation": "UNION ALL does not deduplicate: all rows from both queries are included in the result set.",
    "skillCategory": "UNION ALL Output"
  },
  {
    "id": "sql-eb-135",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when UNION (without ALL) is used on [1, 2] and [2, 3]?",
    "codeSnippet": "SELECT 1 AS n UNION SELECT 2 UNION SELECT 2 UNION SELECT 3;",
    "codeLanguage": "sql",
    "options": [
      "Returns 3 distinct rows: 1, 2, 3",
      "Returns 4 rows: 1, 2, 2, 3",
      "Syntax error",
      "Returns 2"
    ],
    "correctOptionIndex": 0,
    "explanation": "UNION automatically filters duplicate rows, returning 1, 2, 3.",
    "skillCategory": "UNION Deduplication"
  },
  {
    "id": "sql-eb-136",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is a covering index in SQL query optimization?",
    "codeLanguage": "sql",
    "options": [
      "An index that contains all columns requested by a query, allowing the engine to satisfy the query entirely from the index without table lookup",
      "An index covering the entire hard drive",
      "An index on every table in the schema",
      "A primary key index"
    ],
    "correctOptionIndex": 0,
    "explanation": "A covering index satisfies the query directly from the index structure without requiring an expensive base table bookmark lookup.",
    "skillCategory": "Covering Index"
  },
  {
    "id": "sql-eb-137",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does this subquery in the WHERE clause do?",
    "codeSnippet": "SELECT name FROM products WHERE price = (SELECT MIN(price) FROM products);",
    "codeLanguage": "sql",
    "options": [
      "Returns the product(s) with the lowest price",
      "Returns the lowest price number",
      "Syntax error",
      "Returns all products"
    ],
    "correctOptionIndex": 0,
    "explanation": "The scalar subquery finds the minimum price, and the outer query filters for products whose price matches that minimum.",
    "skillCategory": "Subquery with Aggregate"
  },
  {
    "id": "sql-eb-138",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the purpose of foreign key integrity?",
    "codeLanguage": "sql",
    "options": [
      "Ensures child records reference valid existing parent records in the referenced table",
      "Encrypts data",
      "Sorts tables automatically",
      "Increases storage space"
    ],
    "correctOptionIndex": 0,
    "explanation": "Referential integrity guarantees that foreign key relationships remain consistent and prevents orphaned child records.",
    "skillCategory": "Referential Integrity"
  },
  {
    "id": "sql-eb-139",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What happens when using an aggregate inside a correlated subquery?",
    "codeSnippet": "SELECT c.name \nFROM customers c \nWHERE 500 < (SELECT SUM(amount) FROM orders WHERE customer_id = c.id);",
    "codeLanguage": "sql",
    "options": [
      "Returns customers whose total order spending exceeds 500",
      "Syntax error: SUM cannot be in subquery",
      "Returns 500 for all customers",
      "Returns empty"
    ],
    "correctOptionIndex": 0,
    "explanation": "The correlated subquery calculates SUM(amount) individually for each customer c.id.",
    "skillCategory": "Correlated Aggregate"
  },
  {
    "id": "sql-eb-140",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "How do you rename a column output in a UNION query?",
    "codeSnippet": "SELECT first_name AS full_name FROM authors \nUNION \nSELECT name FROM clients;",
    "codeLanguage": "sql",
    "options": [
      "The column names are determined by the first SELECT query (full_name)",
      "By the last SELECT query",
      "Syntax error if column names differ",
      "All column names are concatenated"
    ],
    "correctOptionIndex": 0,
    "explanation": "In a UNION query, the resulting column headers are determined by the aliases in the first SELECT statement.",
    "skillCategory": "UNION Column Headers"
  },
  {
    "id": "sql-eb-141",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is a lateral join (LATERAL / CROSS APPLY)?",
    "codeLanguage": "sql",
    "options": [
      "Allows an inline subquery in the FROM clause to reference columns from preceding tables in the same FROM clause",
      "A join that runs horizontally",
      "A join that ignores NULLs",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "LATERAL joins (or CROSS APPLY in SQL Server) allow subqueries in the FROM clause to access columns from preceding tables on the left.",
    "skillCategory": "LATERAL Joins"
  },
  {
    "id": "sql-eb-142",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What happens when sorting after a UNION query?",
    "codeSnippet": "SELECT name FROM teachers \nUNION \nSELECT name FROM students \nORDER BY name ASC;",
    "codeLanguage": "sql",
    "options": [
      "The ORDER BY clause applies to the entire unified result set",
      "Only sorts the students query",
      "Only sorts teachers",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "An ORDER BY clause placed at the end of a UNION statement sorts the entire combined result set.",
    "skillCategory": "ORDER BY on UNION"
  },
  {
    "id": "sql-eb-143",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What is the cardinality of joining two tables on a 1-to-many relationship?",
    "codeSnippet": "-- One department has many employees",
    "codeLanguage": "sql",
    "options": [
      "The result has at least as many rows as there are matching employees in the many side",
      "Always 1 row",
      "Always 0 rows",
      "Depends on table sizes"
    ],
    "correctOptionIndex": 0,
    "explanation": "In a 1-to-many join, each child row matches its single parent, producing one row per child record.",
    "skillCategory": "Cardinality"
  },
  {
    "id": "sql-eb-144",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does a self-join with inequality prevent?",
    "codeSnippet": "SELECT a.id, b.id \nFROM items a \nJOIN items b ON a.category = b.category AND a.id < b.id;",
    "codeLanguage": "sql",
    "options": [
      "Prevents pairing an item with itself (a.id = b.id) and prevents duplicate reverse pairs (b.id, a.id)",
      "Only pairs identical IDs",
      "Generates Cartesian product",
      "Syntax error"
    ],
    "correctOptionIndex": 0,
    "explanation": "a.id < b.id ensures each pair is listed only once without pairing an item with itself or creating symmetric duplicates.",
    "skillCategory": "Self-Join Inequality"
  },
  {
    "id": "sql-eb-145",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What does query flattening / subquery unnesting mean in query optimizers?",
    "codeLanguage": "sql",
    "options": [
      "The optimizer rewrites a subquery into an equivalent JOIN operation to allow better join order planning and index utilization",
      "Flattens arrays into columns",
      "Removes all subqueries from SQL",
      "Converts query to text"
    ],
    "correctOptionIndex": 0,
    "explanation": "Subquery unnesting is an optimization where the database engine converts eligible subqueries into JOINs for superior execution planning.",
    "skillCategory": "Query Optimizer Rewriting"
  },
  {
    "id": "sql-eb-146",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What is the difference between a clustered index and a non-clustered index?",
    "codeLanguage": "sql",
    "options": [
      "A clustered index determines the physical on-disk storage order of the table (only 1 per table); a non-clustered index is a separate structure pointing to table data",
      "A table can have multiple clustered indexes",
      "Non-clustered indexes are always faster",
      "Clustered indexes are stored in memory only"
    ],
    "correctOptionIndex": 0,
    "explanation": "A clustered index dictates the physical sorting of table rows on disk; tables can only have one clustered index (usually the primary key).",
    "skillCategory": "Clustered vs Non-clustered"
  },
  {
    "id": "sql-eb-147",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "easy",
    "type": "output_prediction",
    "prompt": "What does dropping a table with CASCADE CONSTRAINTS do?",
    "codeLanguage": "sql",
    "options": [
      "Drops the table and removes any foreign key constraints in other tables referencing this table",
      "Deletes all databases",
      "Drops user accounts",
      "Fails if foreign keys exist"
    ],
    "correctOptionIndex": 0,
    "explanation": "CASCADE CONSTRAINTS drops all referential integrity constraints that point to the target table.",
    "skillCategory": "DROP CASCADE"
  },
  {
    "id": "sql-eb-148",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "How do you simulate a FULL OUTER JOIN in databases like SQLite or MySQL that do not natively support FULL OUTER JOIN?",
    "codeLanguage": "sql",
    "options": [
      "Combine a LEFT JOIN with a RIGHT JOIN (or anti-join) using UNION",
      "Use CROSS JOIN",
      "It is impossible",
      "Use an INNER JOIN"
    ],
    "correctOptionIndex": 0,
    "explanation": "A FULL OUTER JOIN is emulated in SQLite/MySQL by executing a LEFT JOIN UNION ALL with a right anti-join.",
    "skillCategory": "Simulating FULL OUTER JOIN"
  },
  {
    "id": "sql-eb-149",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "medium",
    "type": "output_prediction",
    "prompt": "What does an index on a foreign key column help prevent during parent table updates or deletes?",
    "codeLanguage": "sql",
    "options": [
      "Prevents full table scans on the child table when checking referential integrity",
      "Encrypts foreign keys",
      "Prevents NULL values",
      "Automatically cascades updates"
    ],
    "correctOptionIndex": 0,
    "explanation": "Indexing foreign keys allows the database to verify referential integrity instantly without scanning the entire child table.",
    "skillCategory": "Foreign Key Indexes"
  },
  {
    "id": "sql-eb-150",
    "trackId": "sql",
    "domain": "Multi-Table JOINs, Subqueries & Set Operations",
    "difficulty": "hard",
    "type": "output_prediction",
    "prompt": "What is the danger of a Cartesian product (accidental CROSS JOIN)?",
    "codeSnippet": "SELECT * FROM orders, customers; -- missing WHERE or ON condition",
    "codeLanguage": "sql",
    "options": [
      "Multiplies rows (e.g. 10,000 orders * 10,000 customers = 100,000,000 rows), causing memory exhaustion and extreme server load",
      "Deletes all records",
      "Returns 0 rows",
      "Syntax error in modern SQL"
    ],
    "correctOptionIndex": 0,
    "explanation": "An accidental unconstrained join between two tables generates M * N rows, causing query timeouts and heavy memory consumption.",
    "skillCategory": "Cartesian Product Danger"
  }
];
