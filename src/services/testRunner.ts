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
          error: passed ? undefined : (tc.expectedMessage || `Goal not yet satisfied: ${tc.description}`)
        });
      } catch (err: any) {
        testResults.push({
          id: tc.id,
          description: tc.description,
          passed: false,
          error: `Goal not yet satisfied: ${tc.description}`
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
    const isScriptingOrMarkup = language === 'html' || language === 'css' || language === 'bash' || language === 'git' || language === 'docker';
    const runnableCode = isScriptingOrMarkup ? '' : (execResult.transpiledCode || (language === 'javascript' ? code : ''));

    for (const tc of testCases) {
      try {
        const testScript = `
          const React = {
            createElement: (type, props, ...children) => {
              const normalizedChildren = children.length === 1 ? children[0] : (children.length === 0 ? undefined : children);
              return { type, props: { ...(props || {}), children: normalizedChildren } };
            }
          };
          const customConsole = {
            log: (...args) => {},
            error: (...args) => {},
            warn: (...args) => {},
            info: (...args) => {},
            table: (...args) => {}
          };
          const code = ${JSON.stringify(code)};
          const logs = ${JSON.stringify(execResult.logs)};
          const returnValue = ${JSON.stringify(execResult.returnValue !== undefined ? execResult.returnValue : null)};
          if (!Array.prototype.append) Array.prototype.append = function(x) { this.push(x); };
          if (!String.prototype.lower) String.prototype.lower = function() { return this.toLowerCase(); };
          if (!String.prototype.upper) String.prototype.upper = function() { return this.toUpperCase(); };
          if (!String.prototype.strip) String.prototype.strip = function() { return this.trim(); };
          ${runnableCode}
          return (${tc.testFn});
        `;

        const testRunner = new Function(testScript);
        const testOutcome = await testRunner();
        const passed = Boolean(testOutcome);

        testResults.push({
          id: tc.id,
          description: tc.description,
          passed,
          error: passed ? undefined : (tc.expectedMessage || `Goal not yet satisfied: ${tc.description}`)
        });
      } catch (err: any) {
        testResults.push({
          id: tc.id,
          description: tc.description,
          passed: false,
          error: `Goal not yet satisfied: ${tc.description}`
        });
      }
    }

    return testResults;
  }
}
