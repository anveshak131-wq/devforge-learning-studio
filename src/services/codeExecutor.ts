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
      try {
        const activeSession = sqlSession || SqlSession.getSharedSession();
        await activeSession.ensureReady();
        const results = activeSession.runQuery(code);
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
      const lines = code.split('\n');
      const jsLines: string[] = [];
      const indentStack: number[] = [0];

      for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed) {
          jsLines.push('');
          continue;
        }
        if (trimmed.startsWith('#')) {
          jsLines.push('// ' + trimmed.substring(1));
          continue;
        }

        const indent = line.search(/\S/);
        while (indentStack.length > 1 && indent < indentStack[indentStack.length - 1]) {
          indentStack.pop();
          jsLines.push(' '.repeat(indentStack[indentStack.length - 1]) + '}');
        }

        let converted = trimmed
          .replace(/\bprint\s*\((.*?)\)/g, 'customConsole.log($1)')
          .replace(/\bTrue\b/g, 'true')
          .replace(/\bFalse\b/g, 'false')
          .replace(/\bNone\b/g, 'null')
          .replace(/\blen\s*\((.*?)\)/g, '($1).length')
          .replace(/\brange\s*\((.*?)\)/g, 'Array.from({length: $1}, (_, i) => i)');

        converted = converted.replace(/f"(.*?)"/g, (_, p1) => '`' + p1.replace(/\{/g, '${') + '`');
        converted = converted.replace(/f\x27(.*?)\x27/g, (_, p1) => '`' + p1.replace(/\{/g, '${') + '`');

        if (converted.match(/^if\s+(.*?):$/)) {
          converted = converted.replace(/^if\s+(.*?):$/, 'if ($1) {');
          indentStack.push(indent + 4);
        } else if (converted.match(/^elif\s+(.*?):$/)) {
          converted = converted.replace(/^elif\s+(.*?):$/, 'else if ($1) {');
          indentStack.push(indent + 4);
        } else if (converted === 'else:') {
          converted = 'else {';
          indentStack.push(indent + 4);
        } else if (converted.match(/^for\s+([a-zA-Z0-9_]+)\s+in\s+(.*?):$/)) {
          converted = converted.replace(/^for\s+([a-zA-Z0-9_]+)\s+in\s+(.*?):$/, 'for (const $1 of $2) {');
          indentStack.push(indent + 4);
        } else if (converted.match(/^def\s+([a-zA-Z0-9_]+)\s*\((.*?)\):$/)) {
          converted = converted.replace(/^def\s+([a-zA-Z0-9_]+)\s*\((.*?)\):$/, 'function $1($2) {');
          indentStack.push(indent + 4);
        } else if (
          converted.match(/^[a-zA-Z0-9_]+\s*=\s*.+/) &&
          !converted.startsWith('let ') &&
          !converted.startsWith('const ') &&
          !converted.startsWith('var ')
        ) {
          converted = 'let ' + converted + ';';
        } else {
          if (!converted.endsWith(';') && !converted.endsWith('{') && !converted.endsWith('}')) {
            converted = converted + ';';
          }
        }

        jsLines.push(' '.repeat(indent) + converted);
      }

      while (indentStack.length > 1) {
        indentStack.pop();
        jsLines.push('}');
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
          transpiledCode: runnableJs,
          executionTimeMs: duration
        };
      } catch (e: any) {
        const duration = Math.round(performance.now() - startTime);
        return {
          success: false,
          logs,
          transpiledCode: runnableJs,
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
