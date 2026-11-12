import { Lesson } from '../../../types';

export const module12Lessons: Lesson[] = [
  {
    "id": "js-133-sync-vs-async",
    "title": "133. Synchronous vs Asynchronous & The Event Loop",
    "slug": "sync-vs-async-event-loop",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Understand how JavaScript runs non-blocking I/O using the single-threaded event loop.",
    "concepts": [
      "Single thread",
      "Event loop",
      "Blocking vs Non-blocking"
    ],
    "analogy": "A restaurant waiter who takes your order to the kitchen and serves other tables while your food cooks, instead of standing in the kitchen waiting.",
    "explanationMarkdown": "### Synchronous vs Asynchronous\nJavaScript executes line by line synchronously, but offloads long-running tasks (timers, network requests, disk reads) asynchronously so the UI never freezes.",
    "workedExample": {
      "title": "Worked Example: Execution Order",
      "code": "let order = [];\norder.push(\"1: First\");\norder.push(\"2: Second\");\nconsole.log(order.join(\", \"));",
      "explanation": "\u2022 Sync code runs strictly in sequence.",
      "expectedOutput": "1: First, 2: Second"
    },
    "exerciseSteps": [
      "Create `let timeline = [];`.",
      "Push `\"sync 1\"` and `\"sync 2\"` to `timeline`.",
      "Print `timeline.join(\" -> \")`."
    ],
    "initialCode": "let timeline = [];\ntimeline.push(\"sync 1\");\ntimeline.push(\"sync 2\");\nconsole.log(timeline.join(\" -> \"));\n",
    "solutionCode": "let timeline = [];\ntimeline.push(\"sync 1\");\ntimeline.push(\"sync 2\");\nconsole.log(timeline.join(\" -> \"));\n",
    "hints": [
      "Push both strings to timeline array"
    ],
    "testCases": [
      {
        "id": "js-133-tc-1",
        "description": "timeline contains both items",
        "testFn": "timeline.length === 2 && timeline[0] === 'sync 1'"
      }
    ]
  },
  {
    "id": "js-134-settimeout",
    "title": "134. Delayed Execution with setTimeout",
    "slug": "settimeout",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Execute a callback function after a specified delay in milliseconds.",
    "concepts": [
      "setTimeout(callback, delayMs)",
      "Asynchronous scheduling"
    ],
    "analogy": "Setting an alarm clock to chime in 10 minutes while you continue reading your book.",
    "explanationMarkdown": "### setTimeout\n```javascript\nconsole.log(\"Start\");\nsetTimeout(() => {\n  console.log(\"Delayed message\");\n}, 1000); // 1000 ms = 1 second\nconsole.log(\"End\");\n```",
    "workedExample": {
      "title": "Worked Example: Zero-delay setTimeout",
      "code": "let result = \"initial\";\nsetTimeout(() => { result = \"updated\"; }, 0);\nconsole.log(typeof setTimeout);",
      "explanation": "\u2022 setTimeout is a global scheduler function.",
      "expectedOutput": "function"
    },
    "exerciseSteps": [
      "Verify `setTimeout` is a function with `let isFunc = typeof setTimeout === \"function\";`.",
      "Print `isFunc`."
    ],
    "initialCode": "let isFunc = typeof setTimeout === \"function\";\nconsole.log(isFunc);\n",
    "solutionCode": "let isFunc = typeof setTimeout === \"function\";\nconsole.log(isFunc);\n",
    "hints": [
      "Check `typeof setTimeout === \"function\"`"
    ],
    "testCases": [
      {
        "id": "js-134-tc-1",
        "description": "isFunc is true",
        "testFn": "isFunc === true"
      }
    ]
  },
  {
    "id": "js-135-setinterval-clearinterval",
    "title": "135. Repeating Tasks with setInterval & clearInterval",
    "slug": "setinterval-clearinterval",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Execute code repeatedly at fixed intervals, and cancel repetitions using clearInterval.",
    "concepts": [
      "setInterval(callback, intervalMs)",
      "clearInterval(timerId)"
    ],
    "analogy": "A metronome ticking repeatedly every beat until a musician hits the stop switch.",
    "explanationMarkdown": "### setInterval & clearInterval\n```javascript\nlet count = 0;\nconst timerId = setInterval(() => {\n  count++;\n  if (count === 3) clearInterval(timerId);\n}, 100);\n```",
    "workedExample": {
      "title": "Worked Example: Clearing interval",
      "code": "let timer = setInterval(() => {}, 1000);\nclearInterval(timer);\nconsole.log(\"Cleared\");",
      "explanation": "\u2022 Cancels timer immediately.",
      "expectedOutput": "Cleared"
    },
    "exerciseSteps": [
      "Create an interval `let id = setInterval(() => {}, 500);`.",
      "Clear it immediately with `clearInterval(id);`.",
      "Print `\"Interval cleared\"`."
    ],
    "initialCode": "let id = setInterval(() => {}, 500);\nclearInterval(id);\nconsole.log(\"Interval cleared\");\n",
    "solutionCode": "let id = setInterval(() => {}, 500);\nclearInterval(id);\nconsole.log(\"Interval cleared\");\n",
    "hints": [
      "Pass `id` to `clearInterval(id)`"
    ],
    "testCases": [
      {
        "id": "js-135-tc-1",
        "description": "Interval scheduled and cleared",
        "testFn": "typeof id !== 'undefined'"
      }
    ]
  },
  {
    "id": "js-136-callbacks",
    "title": "136. Asynchronous Callback Pattern & Callback Hell",
    "slug": "callbacks-pattern",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 5,
    "xp": 30,
    "description": "Pass functions as parameters to handle asynchronous results, and see why nesting becomes 'callback hell'.",
    "concepts": [
      "Callback functions",
      "Error-first callback pattern",
      "Callback pyramid"
    ],
    "analogy": "Handing someone a return envelope: 'When you get the letter, mail this back to me.'",
    "explanationMarkdown": "### Callbacks\nA callback is a function passed as an argument to run after a task finishes:\n```javascript\nfunction fetchData(callback) {\n  // simulate async\n  callback(\"Data loaded\");\n}\nfetchData((data) => console.log(data));\n```",
    "workedExample": {
      "title": "Worked Example: Async calculation callback",
      "code": "function doubleAsync(val, cb) { cb(val * 2); }\ndoubleAsync(10, (res) => console.log(res));",
      "explanation": "\u2022 Callback receives 20.",
      "expectedOutput": "20"
    },
    "exerciseSteps": [
      "Create function `calculate(a, b, callback) { callback(a + b); }`.",
      "Call `calculate(10, 20, (sum) => { let result = sum; console.log(result); });`."
    ],
    "initialCode": "let result = 0;\nfunction calculate(a, b, callback) {\n  callback(a + b);\n}\ncalculate(10, 20, (sum) => {\n  result = sum;\n});\nconsole.log(result);\n",
    "solutionCode": "let result = 0;\nfunction calculate(a, b, callback) {\n  callback(a + b);\n}\ncalculate(10, 20, (sum) => {\n  result = sum;\n});\nconsole.log(result);\n",
    "hints": [
      "Call `callback(a + b)`"
    ],
    "testCases": [
      {
        "id": "js-136-tc-1",
        "description": "result is 30",
        "testFn": "result === 30"
      }
    ]
  },
  {
    "id": "js-137-promise-creation",
    "title": "137. Creating Promises with new Promise(resolve, reject)",
    "slug": "promise-creation",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Represent future completion or failure using the native Promise constructor.",
    "concepts": [
      "new Promise()",
      "resolve(value)",
      "reject(error)",
      "Promise states: pending, fulfilled, rejected"
    ],
    "analogy": "Ordering a coffee at a cafe: the barista hands you a buzzer (the Promise) that buzzes when your coffee is ready.",
    "explanationMarkdown": "### The Promise Constructor\n```javascript\nconst myPromise = new Promise((resolve, reject) => {\n  let success = true;\n  if (success) resolve(\"Success!\");\n  else reject(\"Error!\");\n});\n```",
    "workedExample": {
      "title": "Worked Example: Immediate Promise",
      "code": "const p = Promise.resolve(\"Ready\");\nconsole.log(p instanceof Promise);",
      "explanation": "\u2022 Creates a resolved promise.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Create `let p = new Promise((resolve) => resolve(\"Resolved!\"));`.",
      "Print `p instanceof Promise`."
    ],
    "initialCode": "let p = new Promise((resolve) => resolve(\"Resolved!\"));\nconsole.log(p instanceof Promise);\n",
    "solutionCode": "let p = new Promise((resolve) => resolve(\"Resolved!\"));\nconsole.log(p instanceof Promise);\n",
    "hints": [
      "Use `new Promise((resolve) => resolve(\"Resolved!\"))`"
    ],
    "testCases": [
      {
        "id": "js-137-tc-1",
        "description": "p is a Promise instance",
        "testFn": "p instanceof Promise"
      }
    ]
  },
  {
    "id": "js-138-promise-then",
    "title": "138. Consuming Promises with .then()",
    "slug": "promise-then",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Attach success handlers to receive the resolved value of a Promise.",
    "concepts": [
      ".then(value => ...)",
      "Promise chaining"
    ],
    "analogy": "When the cafe buzzer vibrates (.then), you walk to the counter to collect your coffee.",
    "explanationMarkdown": "### Consuming with .then()\n```javascript\nPromise.resolve(\"Hello\").then((val) => {\n  console.log(val + \" World!\"); // \"Hello World!\"\n});\n```",
    "workedExample": {
      "title": "Worked Example: Chaining then",
      "code": "Promise.resolve(5)\n  .then(n => n * 2)\n  .then(res => console.log(res));",
      "explanation": "\u2022 5 is doubled to 10.",
      "expectedOutput": "10"
    },
    "exerciseSteps": [
      "Resolve a number: `let outcome = 0;`.",
      "Chain `Promise.resolve(25).then(val => { outcome = val; console.log(outcome); });`."
    ],
    "initialCode": "let outcome = 0;\nPromise.resolve(25).then((val) => {\n  outcome = val;\n  console.log(outcome);\n});\n",
    "solutionCode": "let outcome = 0;\nPromise.resolve(25).then((val) => {\n  outcome = val;\n  console.log(outcome);\n});\n",
    "hints": [
      "Set `outcome = val` inside .then()"
    ],
    "testCases": [
      {
        "id": "js-138-tc-1",
        "description": "outcome is 25",
        "testFn": "outcome === 25"
      }
    ]
  },
  {
    "id": "js-139-promise-catch",
    "title": "139. Handling Rejections with .catch()",
    "slug": "promise-catch",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Catch promise errors and rejections gracefully using .catch().",
    "concepts": [
      ".catch(err => ...)",
      "Promise error bubbling"
    ],
    "analogy": "If the espresso machine breaks down, the cafe informs you (.catch) and gives you a refund.",
    "explanationMarkdown": "### Catching Rejections\n```javascript\nPromise.reject(new Error(\"Network failed\"))\n  .catch((err) => {\n    console.log(\"Handled:\", err.message);\n  });\n```",
    "workedExample": {
      "title": "Worked Example: Rejection recovery",
      "code": "Promise.reject(\"Failed\")\n  .catch(err => \"Recovered\")\n  .then(val => console.log(val));",
      "explanation": "\u2022 .catch recovers with 'Recovered'.",
      "expectedOutput": "Recovered"
    },
    "exerciseSteps": [
      "Create `let captured = \"\";`.",
      "Reject with `Promise.reject(\"Server down\").catch(err => { captured = err; console.log(captured); });`."
    ],
    "initialCode": "let captured = \"\";\nPromise.reject(\"Server down\").catch((err) => {\n  captured = err;\n  console.log(captured);\n});\n",
    "solutionCode": "let captured = \"\";\nPromise.reject(\"Server down\").catch((err) => {\n  captured = err;\n  console.log(captured);\n});\n",
    "hints": [
      "Assign `captured = err;` inside .catch"
    ],
    "testCases": [
      {
        "id": "js-139-tc-1",
        "description": "captured equals Server down",
        "testFn": "captured === 'Server down'"
      }
    ]
  },
  {
    "id": "js-140-async-keyword",
    "title": "140. Modern Asynchrony: The 'async' Keyword",
    "slug": "async-keyword",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Declare async functions that automatically return a Promise.",
    "concepts": [
      "async function",
      "Implicit promise wrapping"
    ],
    "analogy": "A VIP fast-pass stamping your function: whatever it returns is automatically packaged inside a Promise box.",
    "explanationMarkdown": "### The async Keyword\nAny function prefixed with `async` returns a Promise automatically:\n```javascript\nasync function getNumber() {\n  return 42;\n}\ngetNumber().then(n => console.log(n)); // 42\n```",
    "workedExample": {
      "title": "Worked Example: Async function",
      "code": "async function greet() { return \"Hello!\"; }\nconsole.log(greet() instanceof Promise);",
      "explanation": "\u2022 Calling an async function returns a Promise.",
      "expectedOutput": "true"
    },
    "exerciseSteps": [
      "Define `async function getScore() { return 100; }`.",
      "Verify `let isPromise = getScore() instanceof Promise;`.",
      "Print `isPromise`."
    ],
    "initialCode": "async function getScore() {\n  return 100;\n}\nlet isPromise = getScore() instanceof Promise;\nconsole.log(isPromise);\n",
    "solutionCode": "async function getScore() {\n  return 100;\n}\nlet isPromise = getScore() instanceof Promise;\nconsole.log(isPromise);\n",
    "hints": [
      "Define `async function getScore()`"
    ],
    "testCases": [
      {
        "id": "js-140-tc-1",
        "description": "isPromise is true",
        "testFn": "isPromise === true"
      }
    ]
  },
  {
    "id": "js-141-await-keyword",
    "title": "141. Pausing Execution Cleanly with 'await'",
    "slug": "await-keyword",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Pause async function execution until a Promise settles, unwrapping its value cleanly.",
    "concepts": [
      "await promise",
      "Synchronous-looking async code"
    ],
    "analogy": "Waiting for a green traffic light: your car pauses until the signal changes, then continues smoothly.",
    "explanationMarkdown": "### The await Keyword\nInside an `async` function, `await` unwraps the Promise value:\n```javascript\nasync function run() {\n  let value = await Promise.resolve(\"Data\");\n  console.log(value); // \"Data\"\n}\nrun();\n```",
    "workedExample": {
      "title": "Worked Example: Sequential awaits",
      "code": "async function sum() {\n  let a = await Promise.resolve(10);\n  let b = await Promise.resolve(20);\n  return a + b;\n}\nsum().then(res => console.log(res));",
      "explanation": "\u2022 Returns 30.",
      "expectedOutput": "30"
    },
    "exerciseSteps": [
      "Define `async function loadUser() { let user = await Promise.resolve({ name: \"Dev\" }); return user.name; }`.",
      "Call `let finalName = \"\"; loadUser().then(name => { finalName = name; console.log(finalName); });`."
    ],
    "initialCode": "let finalName = \"\";\nasync function loadUser() {\n  let user = await Promise.resolve({ name: \"Dev\" });\n  return user.name;\n}\nloadUser().then((name) => {\n  finalName = name;\n  console.log(finalName);\n});\n",
    "solutionCode": "let finalName = \"\";\nasync function loadUser() {\n  let user = await Promise.resolve({ name: \"Dev\" });\n  return user.name;\n}\nloadUser().then((name) => {\n  finalName = name;\n  console.log(finalName);\n});\n",
    "hints": [
      "Use `await Promise.resolve({ name: 'Dev' })`"
    ],
    "testCases": [
      {
        "id": "js-141-tc-1",
        "description": "finalName equals Dev",
        "testFn": "finalName === 'Dev'"
      }
    ]
  },
  {
    "id": "js-142-async-await-try-catch",
    "title": "142. Error Handling with async/await & try...catch",
    "slug": "async-await-try-catch",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Combine the clarity of try...catch with the power of await for bulletproof async code.",
    "concepts": [
      "try/catch with await",
      "Handling rejected promises"
    ],
    "analogy": "Catching a dropped relay baton in a race without disqualifying your team.",
    "explanationMarkdown": "### Combining async/await with try/catch\n```javascript\nasync function fetchData() {\n  try {\n    let res = await fetch(\"/bad-url\");\n  } catch (err) {\n    console.log(\"Handled fetch error:\", err.message);\n  }\n}\n```",
    "workedExample": {
      "title": "Worked Example: Catching rejected await",
      "code": "async function check() {\n  let msg = \"\";\n  try {\n    await Promise.reject(new Error(\"Offline\"));\n  } catch (e) {\n    msg = e.message;\n  }\n  return msg;\n}\ncheck().then(m => console.log(m));",
      "explanation": "\u2022 Returns Offline.",
      "expectedOutput": "Offline"
    },
    "exerciseSteps": [
      "Define `async function safeFetch() { try { await Promise.reject(\"Failed\"); } catch (e) { return \"Recovered\"; } }`.",
      "Run `let status = \"\"; safeFetch().then(s => { status = s; console.log(status); });`."
    ],
    "initialCode": "let status = \"\";\nasync function safeFetch() {\n  try {\n    await Promise.reject(\"Failed\");\n  } catch (e) {\n    return \"Recovered\";\n  }\n}\nsafeFetch().then((s) => {\n  status = s;\n  console.log(status);\n});\n",
    "solutionCode": "let status = \"\";\nasync function safeFetch() {\n  try {\n    await Promise.reject(\"Failed\");\n  } catch (e) {\n    return \"Recovered\";\n  }\n}\nsafeFetch().then((s) => {\n  status = s;\n  console.log(status);\n});\n",
    "hints": [
      "Return 'Recovered' inside the catch block"
    ],
    "testCases": [
      {
        "id": "js-142-tc-1",
        "description": "status equals Recovered",
        "testFn": "status === 'Recovered'"
      }
    ]
  },
  {
    "id": "js-143-promise-all",
    "title": "143. Concurrent Requests with Promise.all()",
    "slug": "promise-all",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Execute multiple promises concurrently and wait until all of them have succeeded.",
    "concepts": [
      "Promise.all([p1, p2, ...])",
      "Parallel execution",
      "All-or-nothing failure"
    ],
    "analogy": "Waiting for all members of a 4-person relay team to cross the finish line before taking the team photo.",
    "explanationMarkdown": "### Promise.all\nRuns multiple promises in parallel and resolves with an array of results:\n```javascript\nconst [users, posts] = await Promise.all([\n  fetchUsers(),\n  fetchPosts()\n]);\n```",
    "workedExample": {
      "title": "Worked Example: Parallel numbers",
      "code": "Promise.all([Promise.resolve(10), Promise.resolve(20)])\n  .then(([a, b]) => console.log(a + b));",
      "explanation": "\u2022 Adds 10 and 20 to yield 30.",
      "expectedOutput": "30"
    },
    "exerciseSteps": [
      "Create `let allTotal = 0;`.",
      "Use `Promise.all([Promise.resolve(15), Promise.resolve(35)]).then(([a, b]) => { allTotal = a + b; console.log(allTotal); });`."
    ],
    "initialCode": "let allTotal = 0;\nPromise.all([Promise.resolve(15), Promise.resolve(35)]).then(([a, b]) => {\n  allTotal = a + b;\n  console.log(allTotal);\n});\n",
    "solutionCode": "let allTotal = 0;\nPromise.all([Promise.resolve(15), Promise.resolve(35)]).then(([a, b]) => {\n  allTotal = a + b;\n  console.log(allTotal);\n});\n",
    "hints": [
      "Use `Promise.all([Promise.resolve(15), Promise.resolve(35)])`"
    ],
    "testCases": [
      {
        "id": "js-143-tc-1",
        "description": "allTotal is 50",
        "testFn": "allTotal === 50"
      }
    ]
  },
  {
    "id": "js-144-promise-race",
    "title": "144. First Responder with Promise.race()",
    "slug": "promise-race",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Resolve or reject as soon as the fastest promise in an iterable settles.",
    "concepts": [
      "Promise.race([p1, p2, ...])",
      "Request timeouts"
    ],
    "analogy": "A 100-meter sprint: whoever crosses the finish tape first wins the prize, regardless of who is behind.",
    "explanationMarkdown": "### Promise.race\nResolves or rejects as soon as the fastest promise finishes:\n```javascript\nconst winner = await Promise.race([\n  fetchFromPrimaryMirror(),\n  fetchFromBackupMirror()\n]);\n```",
    "workedExample": {
      "title": "Worked Example: Fast winner",
      "code": "Promise.race([Promise.resolve(\"fast\"), Promise.resolve(\"slow\")])\n  .then(res => console.log(res));",
      "explanation": "\u2022 First promise wins immediately.",
      "expectedOutput": "fast"
    },
    "exerciseSteps": [
      "Create `let winner = \"\";`.",
      "Use `Promise.race([Promise.resolve(\"gold\"), Promise.resolve(\"silver\")]).then(w => { winner = w; console.log(winner); });`."
    ],
    "initialCode": "let winner = \"\";\nPromise.race([Promise.resolve(\"gold\"), Promise.resolve(\"silver\")]).then((w) => {\n  winner = w;\n  console.log(winner);\n});\n",
    "solutionCode": "let winner = \"\";\nPromise.race([Promise.resolve(\"gold\"), Promise.resolve(\"silver\")]).then((w) => {\n  winner = w;\n  console.log(winner);\n});\n",
    "hints": [
      "Use `Promise.race` and capture winner"
    ],
    "testCases": [
      {
        "id": "js-144-tc-1",
        "description": "winner is gold",
        "testFn": "winner === 'gold'"
      }
    ]
  },
  {
    "id": "js-145-promise-allsettled",
    "title": "145. Resilient Aggregation with Promise.allSettled()",
    "slug": "promise-allsettled",
    "language": "javascript",
    "category": "Module 12: Asynchronous JavaScript",
    "difficulty": "Intermediate",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 6,
    "xp": 35,
    "description": "Wait for all promises to finish, whether they fulfilled or rejected, without premature failure.",
    "concepts": [
      "Promise.allSettled()",
      "{ status: 'fulfilled' | 'rejected' }"
    ],
    "analogy": "A school teacher grading all submitted exams: you grade every paper, whether the student passed or failed.",
    "explanationMarkdown": "### Promise.allSettled\nUnlike `Promise.all()`, it never rejects early:\n```javascript\nlet results = await Promise.allSettled([\n  Promise.resolve(10),\n  Promise.reject(\"failed\")\n]);\n// [{ status: 'fulfilled', value: 10 }, { status: 'rejected', reason: 'failed' }]\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting statuses",
      "code": "Promise.allSettled([Promise.resolve(1), Promise.reject(2)])\n  .then(items => console.log(items.length));",
      "explanation": "\u2022 Returns 2 settled items.",
      "expectedOutput": "2"
    },
    "exerciseSteps": [
      "Create `let settledCount = 0;`.",
      "Use `Promise.allSettled([Promise.resolve(10), Promise.reject(\"err\")]).then(res => { settledCount = res.length; console.log(settledCount); });`."
    ],
    "initialCode": "let settledCount = 0;\nPromise.allSettled([Promise.resolve(10), Promise.reject(\"err\")]).then((res) => {\n  settledCount = res.length;\n  console.log(settledCount);\n});\n",
    "solutionCode": "let settledCount = 0;\nPromise.allSettled([Promise.resolve(10), Promise.reject(\"err\")]).then((res) => {\n  settledCount = res.length;\n  console.log(settledCount);\n});\n",
    "hints": [
      "Inspect `res.length` in then"
    ],
    "testCases": [
      {
        "id": "js-145-tc-1",
        "description": "settledCount is 2",
        "testFn": "settledCount === 2"
      }
    ]
  }
];
