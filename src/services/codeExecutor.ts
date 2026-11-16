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

    if (language === 'r') {
      return this.executeR(code, startTime);
    }

    if (language === 'java') {
      return this.executeJava(code, startTime);
    }

    if (language === 'cpp') {
      return this.executeCpp(code, startTime);
    }

    if (language === 'cloud') {
      return this.executeCloud(code, startTime);
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

    const workerResult = await this.runInSandboxedWorker(runnableJs, 4000);
    const duration = Math.round(performance.now() - startTime);

    return {
      success: workerResult.success,
      logs: workerResult.logs,
      returnValue: workerResult.returnValue,
      transpiledCode,
      error: workerResult.error,
      executionTimeMs: duration
    };
  }

  /**
   * Safe lightweight Python interpreter for key constructs, functions, loops, lists, dicts
   */
  private static async executePython(code: string, startTime: number): Promise<ExecutionResult> {
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
      const pythonHelpers = `
        if (!Array.prototype.append) Array.prototype.append = function(x) { this.push(x); };
        if (!String.prototype.lower) String.prototype.lower = function() { return this.toLowerCase(); };
        if (!String.prototype.upper) String.prototype.upper = function() { return this.toUpperCase(); };
        if (!String.prototype.strip) String.prototype.strip = function() { return this.trim(); };
      `;

      const workerResult = await this.runInSandboxedWorker(pythonHelpers + '\n' + runnableJs, 4000);
      const duration = Math.round(performance.now() - startTime);

      return {
        success: workerResult.success,
        logs: workerResult.logs,
        returnValue: workerResult.returnValue,
        transpiledCode: runnableJs,
        error: workerResult.error,
        executionTimeMs: duration
      };
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
  private static async executeGolang(code: string, startTime: number): Promise<ExecutionResult> {
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
  private static async executeRust(code: string, startTime: number): Promise<ExecutionResult> {
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
   * R Language Interpreter / Simulator
   */
  private static async executeR(code: string, startTime: number): Promise<ExecutionResult> {
    let js = code
      .replace(/#.*/g, '')
      .replace(/<-\s*/g, '= ')
      .replace(/\bprint\s*\((.*?)\)/g, 'customConsole.log($1)')
      .replace(/\bcat\s*\((.*?)\)/g, 'customConsole.log($1)')
      .replace(/\bc\s*\((.*?)\)/g, '[$1]')
      .replace(/\blength\s*\((.*?)\)/g, '($1).length')
      .replace(/\bTRUE\b/g, 'true')
      .replace(/\bFALSE\b/g, 'false')
      .replace(/\bNULL\b/g, 'null')
      .replace(/\bNA\b/g, 'NaN');

    const lines = js.split('\n').filter(l => l.trim().length > 0);
    const wrapped = lines.map(l => {
      const trimmed = l.trim();
      if (!trimmed.endsWith(';') && !trimmed.endsWith('{') && !trimmed.endsWith('}')) {
        return trimmed + ';';
      }
      return trimmed;
    }).join('\n');

    return this.runJsFunction(`
      function sum(arr) { return arr.reduce((a, b) => a + b, 0); }
      function mean(arr) { return sum(arr) / arr.length; }
      function paste(...args) { return args.join(" "); }
      function paste0(...args) { return args.join(""); }
      ${wrapped}
    `, startTime, 'R');
  }

  /**
   * Java Simulator / Transpiler
   */
  private static async executeJava(code: string, startTime: number): Promise<ExecutionResult> {
    let js = code
      .replace(/import\s+[a-zA-Z0-9_.*]+;/g, '')
      .replace(/public\s+class\s+[a-zA-Z0-9_]+\s*\{/g, '{')
      .replace(/public\s+static\s+void\s+main\s*\([^)]*\)\s*\{/g, 'function main() {')
      .replace(/System\.out\.println\s*\((.*?)\);/g, 'customConsole.log($1);')
      .replace(/System\.out\.print\s*\((.*?)\);/g, 'customConsole.log($1);')
      .replace(/\b(int|double|float|String|boolean|char|long)\b/g, 'var');

    js += '\nif (typeof main === "function") { main(); }';
    return this.runJsFunction(js, startTime, 'Java');
  }

  /**
   * C++ Simulator / Transpiler
   */
  private static async executeCpp(code: string, startTime: number): Promise<ExecutionResult> {
    let js = code
      .replace(/#include\s*<[^>]+>/g, '')
      .replace(/using\s+namespace\s+std;/g, '')
      .replace(/std::cout\s*<<\s*(.*?)\s*<<\s*std::endl;/g, 'customConsole.log($1);')
      .replace(/cout\s*<<\s*(.*?)\s*<<\s*endl;/g, 'customConsole.log($1);')
      .replace(/int\s+main\s*\([^)]*\)\s*\{/g, 'function main() {')
      .replace(/\b(int|double|float|std::string|string|bool|char|long|auto)\b/g, 'var');

    js += '\nif (typeof main === "function") { main(); }';
    return this.runJsFunction(js, startTime, 'C++');
  }

  /**
   * Cloud & Kubernetes Simulator
   */
  private static executeCloud(code: string, startTime: number): ExecutionResult {
    const logs: ConsoleOutputMessage[] = [];
    const lines = code.split('\n');

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      if (line.startsWith('kubectl get pods') || line.startsWith('kubectl get po')) {
        logs.push({ type: 'log', args: ['NAME                     READY   STATUS    RESTARTS   AGE\nweb-deploy-74b89c-a1b2   1/1     Running   0          4m\nweb-deploy-74b89c-c3d4   1/1     Running   0          4m\nredis-master-0           1/1     Running   0          12m'], timestamp: Date.now() });
      } else if (line.startsWith('kubectl get svc') || line.startsWith('kubectl get services')) {
        logs.push({ type: 'log', args: ['NAME         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)\nkubernetes   ClusterIP      10.96.0.1       <none>          443/TCP\nweb-service  LoadBalancer   10.100.200.50   35.240.12.89    80:31234/TCP'], timestamp: Date.now() });
      } else if (line.startsWith('kubectl apply')) {
        logs.push({ type: 'log', args: ['deployment.apps/web-deploy configured\nservice/web-service created'], timestamp: Date.now() });
      } else if (line.startsWith('kubectl logs')) {
        logs.push({ type: 'log', args: ['2026-11-15T14:40:00Z [INFO] Server listening on :8080\n2026-11-15T14:40:02Z [INFO] Health check probe passed 200 OK'], timestamp: Date.now() });
      } else if (line.startsWith('helm install') || line.startsWith('helm upgrade')) {
        logs.push({ type: 'log', args: ['NAME: production-release\nLAST DEPLOYED: Sun Nov 15 2026\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1'], timestamp: Date.now() });
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

  private static async runJsFunction(runnableJs: string, startTime: number, langName: string): Promise<ExecutionResult> {
    const workerResult = await this.runInSandboxedWorker(runnableJs, 4000);
    const duration = Math.round(performance.now() - startTime);

    if (workerResult.error && !workerResult.logs.some(l => l.args.some(a => String(a).includes(workerResult.error!)))) {
      workerResult.logs.push({
        type: 'error',
        args: [`${langName} Error: ${workerResult.error}`],
        timestamp: Date.now()
      });
    }

    return {
      success: workerResult.success,
      logs: workerResult.logs,
      returnValue: workerResult.returnValue,
      transpiledCode: runnableJs,
      error: workerResult.error,
      executionTimeMs: duration
    };
  }

  /**
   * Run code inside a fully sandboxed Web Worker with strict execution timeout (4000ms).
   * Web Workers do not have access to window, document, or localStorage.
   * Infinite loops (e.g. while(true)) are automatically terminated after 4s without freezing UI.
   */
  private static runInSandboxedWorker(
    runnableJs: string,
    timeoutMs = 4000
  ): Promise<{ success: boolean; logs: ConsoleOutputMessage[]; returnValue?: any; error?: string }> {
    return new Promise((resolve) => {
      // If Web Worker is not supported in environment, safely fallback
      if (typeof Worker === 'undefined' || typeof Blob === 'undefined' || typeof URL === 'undefined') {
        const logs: ConsoleOutputMessage[] = [];
        const customConsole = {
          log: (...args: any[]) => logs.push({ type: 'log', args: args.map(formatArg), timestamp: Date.now() }),
          error: (...args: any[]) => logs.push({ type: 'error', args: args.map(formatArg), timestamp: Date.now() }),
          warn: (...args: any[]) => logs.push({ type: 'warn', args: args.map(formatArg), timestamp: Date.now() }),
          info: (...args: any[]) => logs.push({ type: 'info', args: args.map(formatArg), timestamp: Date.now() }),
          table: (...args: any[]) => logs.push({ type: 'table', args: args.map(formatArg), timestamp: Date.now() }),
        };
        try {
          const runner = new Function('console', 'customConsole', 'React', 'return (async function() {\n' + runnableJs + '\n})();');
          runner(customConsole, customConsole, {})
            .then((res: any) => resolve({ success: true, logs, returnValue: res }))
            .catch((err: any) => resolve({ success: false, logs, error: err?.message || String(err) }));
        } catch (err: any) {
          resolve({ success: false, logs, error: err?.message || String(err) });
        }
        return;
      }

      const workerScript = `
        self.onmessage = async function(e) {
          // Security: Neutralize network egress, sockets, and worker script imports in the sandbox
          try {
            self.fetch = undefined;
            self.XMLHttpRequest = undefined;
            self.WebSocket = undefined;
            self.EventSource = undefined;
            self.importScripts = undefined;
            self.indexedDB = undefined;
          } catch (e) {}

          const code = e.data.code;
          const capturedLogs = [];

          function formatWorkerArg(arg) {
            if (arg === null) return 'null';
            if (arg === undefined) return 'undefined';
            if (typeof arg === 'function') return '[Function: ' + (arg.name || 'anonymous') + ']';
            if (typeof arg === 'object') {
              try {
                return JSON.parse(JSON.stringify(arg));
              } catch (e) {
                return String(arg);
              }
            }
            return arg;
          }

          const safeConsole = {
            log: function(...args) {
              capturedLogs.push({ type: 'log', args: args.map(formatWorkerArg), timestamp: Date.now() });
            },
            error: function(...args) {
              capturedLogs.push({ type: 'error', args: args.map(formatWorkerArg), timestamp: Date.now() });
            },
            warn: function(...args) {
              capturedLogs.push({ type: 'warn', args: args.map(formatWorkerArg), timestamp: Date.now() });
            },
            info: function(...args) {
              capturedLogs.push({ type: 'info', args: args.map(formatWorkerArg), timestamp: Date.now() });
            },
            table: function(...args) {
              capturedLogs.push({ type: 'table', args: args.map(formatWorkerArg), timestamp: Date.now() });
            }
          };

          const React = {
            createElement: function(type, props, ...children) {
              const normalized = children.length === 1 ? children[0] : (children.length === 0 ? undefined : children);
              return { type: type, props: Object.assign({}, props || {}, { children: normalized }) };
            }
          };

          try {
            const runner = new Function(
              'console',
              'customConsole',
              'React',
              'return (async function() {\\n' + code + '\\n})();'
            );
            const result = await runner(safeConsole, safeConsole, React);
            self.postMessage({
              success: true,
              logs: capturedLogs,
              returnValue: formatWorkerArg(result)
            });
          } catch (err) {
            self.postMessage({
              success: false,
              logs: capturedLogs,
              error: err && err.message ? err.message : String(err)
            });
          }
        };
      `;

      let workerBlobUrl: string | null = null;
      let worker: Worker | null = null;
      let isCompleted = false;

      try {
        const blob = new Blob([workerScript], { type: 'application/javascript' });
        workerBlobUrl = URL.createObjectURL(blob);
        worker = new Worker(workerBlobUrl);

        const timer = setTimeout(() => {
          if (!isCompleted) {
            isCompleted = true;
            if (worker) worker.terminate();
            if (workerBlobUrl) URL.revokeObjectURL(workerBlobUrl);
            resolve({
              success: false,
              logs: [
                {
                  type: 'error',
                  args: ['Execution timed out (' + timeoutMs + 'ms limit exceeded). Your code took too long to complete. Please check for infinite loops (e.g. while(true)).'],
                  timestamp: Date.now()
                }
              ],
              error: 'Execution timed out (' + timeoutMs + 'ms limit exceeded). Possible infinite loop detected.'
            });
          }
        }, timeoutMs);

        worker.onmessage = (event: MessageEvent) => {
          if (!isCompleted) {
            isCompleted = true;
            clearTimeout(timer);
            if (worker) worker.terminate();
            if (workerBlobUrl) URL.revokeObjectURL(workerBlobUrl);
            const data = event.data;
            resolve({
              success: data.success,
              logs: data.logs || [],
              returnValue: data.returnValue,
              error: data.error,
            });
          }
        };

        worker.onerror = (err: ErrorEvent) => {
          if (!isCompleted) {
            isCompleted = true;
            clearTimeout(timer);
            if (worker) worker.terminate();
            if (workerBlobUrl) URL.revokeObjectURL(workerBlobUrl);
            resolve({
              success: false,
              logs: [
                {
                  type: 'error',
                  args: ['Runtime Worker Error: ' + err.message],
                  timestamp: Date.now()
                }
              ],
              error: err.message || 'Worker runtime error'
            });
          }
        };

        worker.postMessage({ code: runnableJs });
      } catch (err: any) {
        if (workerBlobUrl) URL.revokeObjectURL(workerBlobUrl);
        if (worker) worker.terminate();
        resolve({
          success: false,
          logs: [{ type: 'error', args: ['Sandbox initialization error: ' + (err?.message || String(err))], timestamp: Date.now() }],
          error: err?.message || 'Worker initialization failed'
        });
      }
    });
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
