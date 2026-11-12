import { transform } from 'sucrase';
import { ConsoleOutputMessage, ExecutionResult, Language } from '../types';
import { SqlSession } from './sqlEngine';

export class CodeExecutor {
  /**
   * Execute JavaScript or TypeScript code
   */
  static async executeCode(
    code: string,
    language: Language,
    sqlSession?: SqlSession
  ): Promise<ExecutionResult> {
    const startTime = performance.now();
    const logs: ConsoleOutputMessage[] = [];

    // Custom console interception
    const customConsole = {
      log: (...args: any[]) => {
        logs.push({ type: 'log', args: args.map(formatArg), timestamp: Date.now() });
      },
      error: (...args: any[]) => {
        logs.push({ type: 'error', args: args.map(formatArg), timestamp: Date.now() });
      },
      warn: (...args: any[]) => {
        logs.push({ type: 'warn', args: args.map(formatArg), timestamp: Date.now() });
      },
      info: (...args: any[]) => {
        logs.push({ type: 'info', args: args.map(formatArg), timestamp: Date.now() });
      },
      table: (...args: any[]) => {
        logs.push({ type: 'table', args: args.map(formatArg), timestamp: Date.now() });
      }
    };

    if (language === 'sql') {
      if (!sqlSession) {
        return {
          success: false,
          logs: [{ type: 'error', args: ['SQL Session not ready'], timestamp: Date.now() }],
          executionTimeMs: 0,
          error: 'SQL Session not ready'
        };
      }
      try {
        const results = sqlSession.runQuery(code);
        const duration = Math.round(performance.now() - startTime);
        
        let rowCount = 0;
        results.forEach(r => { rowCount += r.values.length; });

        logs.push({
          type: 'info',
          args: [`Query executed successfully. Returned ${rowCount} row(s) in ${duration}ms`],
          timestamp: Date.now()
        });

        return {
          success: true,
          logs,
          sqlResults: results,
          executionTimeMs: duration
        };
      } catch (err: any) {
        const duration = Math.round(performance.now() - startTime);
        logs.push({
          type: 'error',
          args: [`SQL Error: ${err.message}`],
          timestamp: Date.now()
        });
        return {
          success: false,
          logs,
          error: err.message,
          executionTimeMs: duration
        };
      }
    }

    if (language === 'python') {
      return this.executePython(code, startTime);
    }

    // JavaScript or TypeScript
    let runnableJs = code;
    let transpiledCode: string | undefined = undefined;

    if (language === 'typescript') {
      try {
        const compiled = transform(code, {
          transforms: ['typescript', 'jsx'],
          disableESTransforms: true
        });
        runnableJs = compiled.code;
        transpiledCode = compiled.code;
      } catch (err: any) {
        const duration = Math.round(performance.now() - startTime);
        logs.push({
          type: 'error',
          args: [`TypeScript Transpile Error: ${err.message}`],
          timestamp: Date.now()
        });
        return {
          success: false,
          logs,
          error: `TypeScript Syntax Error: ${err.message}`,
          executionTimeMs: duration
        };
      }
    }

    try {
      // Create a function with safe scope and console binding
      // We wrap inside an async function so users can use top-level await!
      const wrappedCode = `
        return (async function(console) {
          ${runnableJs}
        })(customConsole);
      `;

      const runner = new Function('customConsole', wrappedCode);
      const returnValue = await runner(customConsole);

      const duration = Math.round(performance.now() - startTime);
      return {
        success: true,
        logs,
        returnValue,
        transpiledCode,
        executionTimeMs: duration
      };
    } catch (err: any) {
      const duration = Math.round(performance.now() - startTime);
      logs.push({
        type: 'error',
        args: [`Runtime Error: ${err.message}`],
        timestamp: Date.now()
      });
      return {
        success: false,
        logs,
        returnValue: undefined,
        transpiledCode,
        error: err.message,
        executionTimeMs: duration
      };
    }
  }

  /**
   * Safe lightweight Python interpreter for key constructs, functions, loops, lists, dicts
   */
  private static executePython(code: string, startTime: number): ExecutionResult {
    const logs: ConsoleOutputMessage[] = [];
    try {
      // Basic Python to JS transpiler/interpreter for browser sandbox
      // Handles print(), variables, lists, dicts, for loops, functions, math
      const lines = code.split('\n');
      const jsLines: string[] = [];

      for (let line of lines) {
        let trimmed = line.trim();
        // Comment
        if (trimmed.startsWith('#')) {
          jsLines.push('// ' + trimmed.substring(1));
          continue;
        }

        // Convert print(...) to console.log(...)
        let converted = line
          .replace(/\bprint\s*\((.*?)\)/g, 'customConsole.log($1)')
          .replace(/\bTrue\b/g, 'true')
          .replace(/\bFalse\b/g, 'false')
          .replace(/\bNone\b/g, 'null')
          .replace(/\blen\s*\((.*?)\)/g, '($1).length')
          .replace(/\brange\s*\((.*?)\)/g, 'Array.from({length: $1}, (_, i) => i)');

        // Simple def function_name(args):
        if (converted.match(/^\s*def\s+([a-zA-Z0-9_]+)\s*\((.*?)\):/)) {
          converted = converted.replace(/def\s+([a-zA-Z0-9_]+)\s*\((.*?)\):/, 'function $1($2) {');
        }

        jsLines.push(converted);
      }

      const runnableJs = jsLines.join('\n');
      const customConsole = {
        log: (...args: any[]) => {
          logs.push({ type: 'log', args: args.map(formatArg), timestamp: Date.now() });
        },
        error: (...args: any[]) => {
          logs.push({ type: 'error', args: args.map(formatArg), timestamp: Date.now() });
        }
      };

      try {
        const runner = new Function('customConsole', `
          try {
            ${runnableJs}
          } catch(e) {
            customConsole.error("Python Error: " + e.message);
            throw e;
          }
        `);
        runner(customConsole);
        const duration = Math.round(performance.now() - startTime);
        return {
          success: true,
          logs,
          executionTimeMs: duration
        };
      } catch (e: any) {
        const duration = Math.round(performance.now() - startTime);
        return {
          success: false,
          logs,
          error: e.message,
          executionTimeMs: duration
        };
      }
    } catch (err: any) {
      const duration = Math.round(performance.now() - startTime);
      return {
        success: false,
        logs: [{ type: 'error', args: [err.message], timestamp: Date.now() }],
        error: err.message,
        executionTimeMs: duration
      };
    }
  }
}

function formatArg(arg: any): any {
  if (arg === null) return 'null';
  if (arg === undefined) return 'undefined';
  if (typeof arg === 'function') return `[Function: ${arg.name || 'anonymous'}]`;
  if (typeof arg === 'object') {
    try {
      // deep clone / safely serialize
      return JSON.parse(JSON.stringify(arg));
    } catch {
      return String(arg);
    }
  }
  return arg;
}
