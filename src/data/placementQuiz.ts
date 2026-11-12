import { QuizQuestion } from '../types';

export const PLACEMENT_QUESTIONS: QuizQuestion[] = [
  {
    id: 'quiz-1',
    language: 'javascript',
    title: 'Experience with Asynchronous Programming & Closures',
    scenario: 'In JavaScript, how would you handle running 3 independent API requests in parallel and waiting for all to finish?',
    options: [
      { label: 'A', text: 'I have not written code or handled API calls yet.', indicatesTier: 1 },
      { label: 'B', text: 'Use sequential for-loops with callback functions.', indicatesTier: 2 },
      { label: 'C', text: 'Use `await Promise.all([fetch1(), fetch2(), fetch3()])` with try/catch.', indicatesTier: 3 },
      { label: 'D', text: 'Use `Promise.allSettled` or a custom concurrency pool with AbortController and microtask queue handling.', indicatesTier: 5 }
    ],
    correctIndex: 2,
    explanation: '`Promise.all` executes independent promises concurrently and resolves when all have finished, or `Promise.allSettled` for resilient non-blocking results.'
  },
  {
    id: 'quiz-2',
    language: 'sql',
    title: 'Relational Database Queries & Joins',
    scenario: 'Which statement best describes how you retrieve data across two related database tables (e.g. Users and Orders)?',
    options: [
      { label: 'A', text: 'What is a SQL query or table join?', indicatesTier: 1 },
      { label: 'B', text: 'I write simple `SELECT * FROM users WHERE country = "USA"`.', indicatesTier: 2 },
      { label: 'C', text: 'I write `SELECT ... FROM orders JOIN users ON orders.user_id = users.id GROUP BY ...`.', indicatesTier: 3 },
      { label: 'D', text: 'I write multi-table joins with Common Table Expressions (CTEs), Window Functions (`ROW_NUMBER() OVER (...)`), and analyze `EXPLAIN QUERY PLAN`.', indicatesTier: 5 }
    ],
    correctIndex: 2,
    explanation: 'Relational queries join entities on primary/foreign keys. Advanced engineers leverage CTEs and Window Functions for analytical aggregations.'
  },
  {
    id: 'quiz-3',
    language: 'typescript',
    title: 'Static Typing & Type-Level Architecture',
    scenario: 'When writing TypeScript, how familiar are you with Generics and Discriminated Unions?',
    options: [
      { label: 'A', text: 'I am completely new to TypeScript and static types.', indicatesTier: 1 },
      { label: 'B', text: 'I know basic primitive types: string, number, boolean, and basic interfaces.', indicatesTier: 2 },
      { label: 'C', text: 'I write generic functions (`<T>`) and discriminated unions with type narrowing.', indicatesTier: 3 },
      { label: 'D', text: 'I write conditional types with `infer`, mapped types, and template literal type gymnastics.', indicatesTier: 5 }
    ],
    correctIndex: 2,
    explanation: 'Generics and discriminated unions form the backbone of scalable application architecture, while conditional infer types power advanced type transformations.'
  }
];
