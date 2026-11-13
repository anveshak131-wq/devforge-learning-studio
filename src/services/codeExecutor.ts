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

    if (language === 'bash' || language === 'git' || language === 'docker') {
      return this.executeShell(code, startTime);
    }

    if (language === 'golang') {
      return this.executeGolang(code, startTime);
    }

    if (language === 'rust') {
      return this.executeRust(code, startTime);
    }

    if (language === 'html' || language === 'css') {
      return this.executeWeb(code, language, startTime);
    }

    // JavaScript, TypeScript, React, Node.js, DSA
    let runnableJs = code;
    let transpiledCode: string | undefined = undefined;

    if (language === 'typescript' || language === 'react' || language === 'nodejs' || language === 'dsa') {
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
          args: [`${language} Transpile Error: ${err.message}`],
          timestamp: Date.now()
        });
        return {
          success: false,
          logs,
          error: `${language} Syntax Error: ${err.message}`,
          executionTimeMs: duration
        };
      }
    }

    try {
      // Create a function with safe scope and console binding
      // We wrap inside an async function so users can use top-level await!
      const wrappedCode = `
        const React = {
          createElement: (type, props, ...children) => {
            const normalizedChildren = children.length === 1 ? children[0] : (children.length === 0 ? undefined : children);
            return { type, props: { ...(props || {}), children: normalizedChildren } };
          }
        };
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
        } else if (converted.match(/^while\s+(.*?):$/)) {
          converted = converted.replace(/^while\s+(.*?):$/, 'while ($1) {');
          indentStack.push(indent + 4);
        } else if (converted.match(/^for\s+([a-zA-Z0-9_]+)\s+in\s+(.*?):$/)) {
          converted = converted.replace(/^for\s+([a-zA-Z0-9_]+)\s+in\s+(.*?):$/, 'for (const $1 of $2) {');
          indentStack.push(indent + 4);
        } else if (converted.match(/^def\s+([a-zA-Z0-9_]+)\s*\((.*?)\):$/)) {
          converted = converted.replace(/^def\s+([a-zA-Z0-9_]+)\s*\((.*?)\):$/, 'function $1($2) {');
          indentStack.push(indent + 4);
        } else if (converted.match(/^class\s+([a-zA-Z0-9_]+)(?:\((.*?)\))?:$/)) {
          converted = converted.replace(/^class\s+([a-zA-Z0-9_]+)(?:\((.*?)\))?:$/, 'class $1 {');
          indentStack.push(indent + 4);
        } else if (converted === 'try:') {
          converted = 'try {';
          indentStack.push(indent + 4);
        } else if (converted.match(/^except(?:\s+.*)?:$/)) {
          converted = 'catch (e) {';
          indentStack.push(indent + 4);
        } else if (converted === 'finally:') {
          converted = 'finally {';
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
          if (!Array.prototype.append) Array.prototype.append = function(x) { this.push(x); };
          if (!String.prototype.lower) String.prototype.lower = function() { return this.toLowerCase(); };
          if (!String.prototype.upper) String.prototype.upper = function() { return this.toUpperCase(); };
          if (!String.prototype.strip) String.prototype.strip = function() { return this.trim(); };
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

  /**
   * Shell / Bash / Git / Docker Command Simulator
   */
  private static executeShell(code: string, startTime: number): ExecutionResult {
    const logs: ConsoleOutputMessage[] = [];
    const lines = code.split('\n');

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      if (line.startsWith('echo ')) {
        const text = line.substring(5).replace(/^['"]|['"]$/g, '');
        logs.push({ type: 'log', args: [text], timestamp: Date.now() });
      } else if (line.startsWith('git status')) {
        logs.push({ type: 'log', args: ['On branch main\nYour branch is up to date with \'origin/main\'.\n\nNothing to commit, working tree clean'], timestamp: Date.now() });
      } else if (line.startsWith('git commit')) {
        logs.push({ type: 'log', args: ['[main 7e8f9a0] ' + (line.match(/-m\s+["'](.*?)["']/)?.[1] || 'Commit changes') + '\n 1 file changed, 1 insertion(+)'], timestamp: Date.now() });
      } else if (line.startsWith('git branch')) {
        logs.push({ type: 'log', args: ['* main\n  feature/login'], timestamp: Date.now() });
      } else if (line.startsWith('git log')) {
        logs.push({ type: 'log', args: ['commit 7e8f9a0 (HEAD -> main)\nAuthor: DevForge User <user@devforge.io>\nDate:   Today\n\n    Initial commit'], timestamp: Date.now() });
      } else if (line.startsWith('docker build')) {
        logs.push({ type: 'log', args: ['Step 1/3 : FROM node:20-alpine\nStep 2/3 : COPY . .\nStep 3/3 : CMD ["npm", "start"]\nSuccessfully built 8b4c2e'], timestamp: Date.now() });
      } else if (line.startsWith('docker run') || line.startsWith('docker ps')) {
        logs.push({ type: 'log', args: ['CONTAINER ID   IMAGE          STATUS         PORTS\n8b4c2e11a2f3   my-app:latest  Up 2 minutes   0.0.0.0:3000->3000/tcp'], timestamp: Date.now() });
      } else if (line.startsWith('ls')) {
        logs.push({ type: 'log', args: ['Dockerfile  README.md  package.json  src/'], timestamp: Date.now() });
      } else if (line.startsWith('pwd')) {
        logs.push({ type: 'log', args: ['/workspace/devforge'], timestamp: Date.now() });
      } else {
        logs.push({ type: 'log', args: [`$ ${line}`], timestamp: Date.now() });
      }
    }

    const duration = Math.round(performance.now() - startTime);
    return {
      success: true,
      logs,
      executionTimeMs: duration
    };
  }

  /**
   * Golang Simulator / Transpiler
   */
  private static executeGolang(code: string, startTime: number): ExecutionResult {
    let js = code
      .replace(/package\s+[a-zA-Z0-9_]+/g, '// package')
      .replace(/import\s+(\(.*?\)|"[^"]*")/gs, '// imports')
      .replace(/fmt\.Println\((.*?)\)/g, 'customConsole.log($1)')
      .replace(/fmt\.Printf\((.*?)\)/g, 'customConsole.log($1)')
      .replace(/func\s+main\s*\(\)\s*\{/g, 'function main() {')
      .replace(/var\s+([a-zA-Z0-9_]+)\s+[a-zA-Z0-9_\[\]*]+\s*=/g, 'var $1 =')
      .replace(/([a-zA-Z0-9_]+)\s*:=\s*/g, 'var $1 = ');

    js += '\nif (typeof main === "function") { main(); }';

    return this.runJsFunction(js, startTime, 'Go');
  }

  /**
   * Rust Simulator / Transpiler
   */
  private static executeRust(code: string, startTime: number): ExecutionResult {
    let js = code
      .replace(/println!\s*\((.*?)\);/g, 'customConsole.log($1);')
      .replace(/print!\s*\((.*?)\);/g, 'customConsole.log($1);')
      .replace(/fn\s+main\s*\(\)\s*\{/g, 'function main() {')
      .replace(/let\s+mut\s+/g, 'var ')
      .replace(/let\s+/g, 'var ')
      .replace(/\.len\(\)/g, '.length');

    js += '\nif (typeof main === "function") { main(); }';

    return this.runJsFunction(js, startTime, 'Rust');
  }

  /**
   * HTML & CSS Preview / Inspector
   */
  private static executeWeb(code: string, language: 'html' | 'css', startTime: number): ExecutionResult {
    const logs: ConsoleOutputMessage[] = [
      {
        type: 'log',
        args: [`[${language.toUpperCase()} Document Parsed Successfully]\n${code.slice(0, 150)}${code.length > 150 ? '...' : ''}`],
        timestamp: Date.now()
      }
    ];
    return {
      success: true,
      logs,
      returnValue: code,
      executionTimeMs: Math.round(performance.now() - startTime)
    };
  }

  private static runJsFunction(runnableJs: string, startTime: number, langName: string): ExecutionResult {
    const logs: ConsoleOutputMessage[] = [];
    const customConsole = {
      log: (...args: any[]) => logs.push({ type: 'log', args: args.map(formatArg), timestamp: Date.now() }),
      error: (...args: any[]) => logs.push({ type: 'error', args: args.map(formatArg), timestamp: Date.now() })
    };

    try {
      const runner = new Function('customConsole', `
        try {
          ${runnableJs}
        } catch(e) {
          customConsole.error("${langName} Error: " + e.message);
          throw e;
        }
      `);
      runner(customConsole);
      return {
        success: true,
        logs,
        transpiledCode: runnableJs,
        executionTimeMs: Math.round(performance.now() - startTime)
      };
    } catch (e: any) {
      return {
        success: false,
        logs,
        error: e.message,
        executionTimeMs: Math.round(performance.now() - startTime)
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
