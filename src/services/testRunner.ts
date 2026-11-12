import { TestCase, TestResultItem, Language } from '../types';
import { SqlSession } from './sqlEngine';
import { CodeExecutor } from './codeExecutor';

export class TestRunner {
  /**
   * Run automated tests for JavaScript/TypeScript/Python/SQL
   */
  static async runTests(
    code: string,
    language: Language,
    testCases: TestCase[],
    sqlSession?: SqlSession
  ): Promise<TestResultItem[]> {
    if (!testCases || testCases.length === 0) {
      return [];
    }

    if (language === 'sql') {
      return this.runSqlTests(code, testCases, sqlSession);
    }

    return this.runJsTsTests(code, language, testCases);
  }

  private static async runSqlTests(
    userQuery: string,
    testCases: TestCase[],
    sqlSession?: SqlSession
  ): Promise<TestResultItem[]> {
    let queryResults: any[] = [];
    let queryError: string | null = null;

    try {
      const activeSession = sqlSession || SqlSession.getSharedSession();
      await activeSession.ensureReady();
      queryResults = activeSession.runQuery(userQuery);
    } catch (err: any) {
      queryError = err.message;
    }

    const testResults: TestResultItem[] = [];

    for (const tc of testCases) {
      if (queryError) {
        testResults.push({
          id: tc.id,
          description: tc.description,
          passed: false,
          error: `Query failed: ${queryError}`
        });
        continue;
      }

      try {
        // Execute test assertion function
        // Environment provides: results (SqlResult[]), result (first table), columns, values, rowCount
        const result = queryResults[0] || { columns: [], values: [] };
        const columns = result.columns || [];
        const values = result.values || [];
        const rowCount = values.length;

        const assertionFn = new Function(
          'results',
          'result',
          'columns',
          'values',
          'rowCount',
          'query',
          `return (${tc.testFn});`
        );

        const passed = Boolean(assertionFn(queryResults, result, columns, values, rowCount, userQuery));
        testResults.push({
          id: tc.id,
          description: tc.description,
          passed,
          error: passed ? undefined : (tc.expectedMessage || 'Assertion failed')
        });
      } catch (err: any) {
        testResults.push({
          id: tc.id,
          description: tc.description,
          passed: false,
          error: `Test check error: ${err.message}`
        });
      }
    }

    return testResults;
  }

  private static async runJsTsTests(
    code: string,
    language: Language,
    testCases: TestCase[]
  ): Promise<TestResultItem[]> {
    // First execute user code and get runtime environment
    const execResult = await CodeExecutor.executeCode(code, language);
    const testResults: TestResultItem[] = [];

    if (!execResult.success && execResult.error) {
      // If code itself didn't compile or threw an unhandled top-level exception
      return testCases.map(tc => ({
        id: tc.id,
        description: tc.description,
        passed: false,
        error: `Code execution failed: ${execResult.error}`
      }));
    }

    // Now test against user scope
    // We execute the transpiled JS along with each test assertion
    const runnableCode = execResult.transpiledCode || code;

    for (const tc of testCases) {
      try {
        const testScript = `
          ${runnableCode};
          const logs = ${JSON.stringify(execResult.logs)};
          const returnValue = ${JSON.stringify(execResult.returnValue !== undefined ? execResult.returnValue : null)};
          return (${tc.testFn});
        `;

        const testRunner = new Function(testScript);
        const testOutcome = await testRunner();
        const passed = Boolean(testOutcome);

        testResults.push({
          id: tc.id,
          description: tc.description,
          passed,
          error: passed ? undefined : (tc.expectedMessage || 'Assertion failed')
        });
      } catch (err: any) {
        testResults.push({
          id: tc.id,
          description: tc.description,
          passed: false,
          error: `Test evaluation failed: ${err.message}`
        });
      }
    }

    return testResults;
  }
}
