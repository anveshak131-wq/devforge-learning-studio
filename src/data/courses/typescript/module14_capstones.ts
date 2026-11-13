import { Lesson } from '../../../types';

export const tsModule14Lessons: Lesson[] = [
  {
    "id": "ts-145-capstone-1-type-safe-redu",
    "title": "145. Capstone 1: Type-Safe Redux State Store & Action Reducer",
    "slug": "capstone-1-type-safe-redux-sta",
    "language": "typescript",
    "category": "Module 14: Enterprise Architecture Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Master Capstone 1: Type-Safe Redux State Store & Action Reducer in TypeScript with strict compile-time checking.",
    "concepts": [
      "Capstone 1",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Capstone 1: Type-Safe Redux State Store & Action Reducer\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ntype Action = { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number }; function counterReducer(state: number, action: Action): number { switch(action.type) { case 'INCREMENT': return state + action.payload; case 'DECREMENT': return state - action.payload; } } let newState = counterReducer(10, { type: 'INCREMENT', payload: 5 });\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 1: Type-Safe Redux State Store & Action Reducer",
      "code": "type Action = { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number }; function counterReducer(state: number, action: Action): number { switch(action.type) { case 'INCREMENT': return state + action.payload; case 'DECREMENT': return state - action.payload; } } let newState = counterReducer(10, { type: 'INCREMENT', payload: 5 });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `type Action = { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number }; function counterReducer(state: number, action: Action): number { switch(action.type) { case 'INCREMENT': return state + action.payload; case 'DECREMENT': return state - action.payload; } } let newState = counterReducer(10, { type: 'INCREMENT', payload: 5 });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ntype Action = { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number }; function counterReducer(state: number, action: Action): number { switch(action.type) { case 'INCREMENT': return state + action.payload; case 'DECREMENT': return state - action.payload; } } let newState = counterReducer(10, { type: 'INCREMENT', payload: 5 });\n",
    "solutionCode": "type Action = { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number }; function counterReducer(state: number, action: Action): number { switch(action.type) { case 'INCREMENT': return state + action.payload; case 'DECREMENT': return state - action.payload; } } let newState = counterReducer(10, { type: 'INCREMENT', payload: 5 });\n",
    "hints": [
      "Write: type Action = { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number }; function counterReducer(state: number, action: Action): number { switch(action.type) { case 'INCREMENT': return state + action.payload; case 'DECREMENT': return state - action.payload; } } let newState = counterReducer(10, { type: 'INCREMENT', payload: 5 });"
    ],
    "testCases": [
      {
        "id": "ts-145-tc-1",
        "description": "TypeScript compiles and satisfies Capstone 1: Type-Safe Redux State Store & Action Reducer",
        "testFn": "newState === 15"
      }
    ]
  },
  {
    "id": "ts-146-capstone-2-type-safe-gene",
    "title": "146. Capstone 2: Type-Safe Generic Event Emitter",
    "slug": "capstone-2-type-safe-generic-e",
    "language": "typescript",
    "category": "Module 14: Enterprise Architecture Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Master Capstone 2: Type-Safe Generic Event Emitter in TypeScript with strict compile-time checking.",
    "concepts": [
      "Capstone 2",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Capstone 2: Type-Safe Generic Event Emitter\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\nclass TypedEventEmitter<TEvents extends Record<string, any>> { private listeners: { [K in keyof TEvents]?: ((data: TEvents[K]) => void)[] } = {}; on<K extends keyof TEvents>(event: K, cb: (data: TEvents[K]) => void) { this.listeners[event] = [...(this.listeners[event] || []), cb]; } emit<K extends keyof TEvents>(event: K, data: TEvents[K]) { (this.listeners[event] || []).forEach(cb => cb(data)); } } type AppEvents = { userLoggedIn: { userId: string } }; const emitter = new TypedEventEmitter<AppEvents>(); let capturedId = ''; emitter.on('userLoggedIn', ({ userId }) => { capturedId = userId; }); emitter.emit('userLoggedIn', { userId: 'usr-999' });\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 2: Type-Safe Generic Event Emitter",
      "code": "class TypedEventEmitter<TEvents extends Record<string, any>> { private listeners: { [K in keyof TEvents]?: ((data: TEvents[K]) => void)[] } = {}; on<K extends keyof TEvents>(event: K, cb: (data: TEvents[K]) => void) { this.listeners[event] = [...(this.listeners[event] || []), cb]; } emit<K extends keyof TEvents>(event: K, data: TEvents[K]) { (this.listeners[event] || []).forEach(cb => cb(data)); } } type AppEvents = { userLoggedIn: { userId: string } }; const emitter = new TypedEventEmitter<AppEvents>(); let capturedId = ''; emitter.on('userLoggedIn', ({ userId }) => { capturedId = userId; }); emitter.emit('userLoggedIn', { userId: 'usr-999' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `class TypedEventEmitter<TEvents extends Record<string, any>> { private listeners: { [K in keyof TEvents]?: ((data: TEvents[K]) => void)[] } = {}; on<K extends keyof TEvents>(event: K, cb: (data: TEvents[K]) => void) { this.listeners[event] = [...(this.listeners[event] || []), cb]; } emit<K extends keyof TEvents>(event: K, data: TEvents[K]) { (this.listeners[event] || []).forEach(cb => cb(data)); } } type AppEvents = { userLoggedIn: { userId: string } }; const emitter = new TypedEventEmitter<AppEvents>(); let capturedId = ''; emitter.on('userLoggedIn', ({ userId }) => { capturedId = userId; }); emitter.emit('userLoggedIn', { userId: 'usr-999' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\nclass TypedEventEmitter<TEvents extends Record<string, any>> { private listeners: { [K in keyof TEvents]?: ((data: TEvents[K]) => void)[] } = {}; on<K extends keyof TEvents>(event: K, cb: (data: TEvents[K]) => void) { this.listeners[event] = [...(this.listeners[event] || []), cb]; } emit<K extends keyof TEvents>(event: K, data: TEvents[K]) { (this.listeners[event] || []).forEach(cb => cb(data)); } } type AppEvents = { userLoggedIn: { userId: string } }; const emitter = new TypedEventEmitter<AppEvents>(); let capturedId = ''; emitter.on('userLoggedIn', ({ userId }) => { capturedId = userId; }); emitter.emit('userLoggedIn', { userId: 'usr-999' });\n",
    "solutionCode": "class TypedEventEmitter<TEvents extends Record<string, any>> { private listeners: { [K in keyof TEvents]?: ((data: TEvents[K]) => void)[] } = {}; on<K extends keyof TEvents>(event: K, cb: (data: TEvents[K]) => void) { this.listeners[event] = [...(this.listeners[event] || []), cb]; } emit<K extends keyof TEvents>(event: K, data: TEvents[K]) { (this.listeners[event] || []).forEach(cb => cb(data)); } } type AppEvents = { userLoggedIn: { userId: string } }; const emitter = new TypedEventEmitter<AppEvents>(); let capturedId = ''; emitter.on('userLoggedIn', ({ userId }) => { capturedId = userId; }); emitter.emit('userLoggedIn', { userId: 'usr-999' });\n",
    "hints": [
      "Write: class TypedEventEmitter<TEvents extends Record<string, any>> { private listeners: { [K in keyof TEvents]?: ((data: TEvents[K]) => void)[] } = {}; on<K extends keyof TEvents>(event: K, cb: (data: TEvents[K]) => void) { this.listeners[event] = [...(this.listeners[event] || []), cb]; } emit<K extends keyof TEvents>(event: K, data: TEvents[K]) { (this.listeners[event] || []).forEach(cb => cb(data)); } } type AppEvents = { userLoggedIn: { userId: string } }; const emitter = new TypedEventEmitter<AppEvents>(); let capturedId = ''; emitter.on('userLoggedIn', ({ userId }) => { capturedId = userId; }); emitter.emit('userLoggedIn', { userId: 'usr-999' });"
    ],
    "testCases": [
      {
        "id": "ts-146-tc-1",
        "description": "TypeScript compiles and satisfies Capstone 2: Type-Safe Generic Event Emitter",
        "testFn": "capturedId === 'usr-999'"
      }
    ]
  },
  {
    "id": "ts-147-capstone-3-strongly-typed",
    "title": "147. Capstone 3: Strongly-Typed HTTP REST Client with Generics",
    "slug": "capstone-3-strongly-typed-http",
    "language": "typescript",
    "category": "Module 14: Enterprise Architecture Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Master Capstone 3: Strongly-Typed HTTP REST Client with Generics in TypeScript with strict compile-time checking.",
    "concepts": [
      "Capstone 3",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Capstone 3: Strongly-Typed HTTP REST Client with Generics\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface APIResponse<T> { status: number; data: T; } class APIClient { async get<T>(url: string, mockData: T): Promise<APIResponse<T>> { return { status: 200, data: mockData }; } } const client = new APIClient(); let out = await client.get<{ id: string }>('/user', { id: 'user-42' });\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 3: Strongly-Typed HTTP REST Client with Generics",
      "code": "interface APIResponse<T> { status: number; data: T; } class APIClient { async get<T>(url: string, mockData: T): Promise<APIResponse<T>> { return { status: 200, data: mockData }; } } const client = new APIClient(); let out = await client.get<{ id: string }>('/user', { id: 'user-42' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface APIResponse<T> { status: number; data: T; } class APIClient { async get<T>(url: string, mockData: T): Promise<APIResponse<T>> { return { status: 200, data: mockData }; } } const client = new APIClient(); let out = await client.get<{ id: string }>('/user', { id: 'user-42' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface APIResponse<T> { status: number; data: T; } class APIClient { async get<T>(url: string, mockData: T): Promise<APIResponse<T>> { return { status: 200, data: mockData }; } } const client = new APIClient(); let out = await client.get<{ id: string }>('/user', { id: 'user-42' });\n",
    "solutionCode": "interface APIResponse<T> { status: number; data: T; } class APIClient { async get<T>(url: string, mockData: T): Promise<APIResponse<T>> { return { status: 200, data: mockData }; } } const client = new APIClient(); let out = await client.get<{ id: string }>('/user', { id: 'user-42' });\n",
    "hints": [
      "Write: interface APIResponse<T> { status: number; data: T; } class APIClient { async get<T>(url: string, mockData: T): Promise<APIResponse<T>> { return { status: 200, data: mockData }; } } const client = new APIClient(); let out = await client.get<{ id: string }>('/user', { id: 'user-42' });"
    ],
    "testCases": [
      {
        "id": "ts-147-tc-1",
        "description": "TypeScript compiles and satisfies Capstone 3: Strongly-Typed HTTP REST Client with Generics",
        "testFn": "out.status === 200 && out.data.id === 'user-42'"
      }
    ]
  },
  {
    "id": "ts-148-capstone-4-type-safe-zod-",
    "title": "148. Capstone 4: Type-Safe Zod-Style Schema Validator",
    "slug": "capstone-4-type-safe-zod-style",
    "language": "typescript",
    "category": "Module 14: Enterprise Architecture Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Master Capstone 4: Type-Safe Zod-Style Schema Validator in TypeScript with strict compile-time checking.",
    "concepts": [
      "Capstone 4",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Capstone 4: Type-Safe Zod-Style Schema Validator\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Validator<T> { parse(input: unknown): T; } const stringValidator: Validator<string> = { parse: (input: unknown): string => { if (typeof input !== 'string') throw new Error('Not string'); return input; } }; let validStr = stringValidator.parse('Validated Text');\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 4: Type-Safe Zod-Style Schema Validator",
      "code": "interface Validator<T> { parse(input: unknown): T; } const stringValidator: Validator<string> = { parse: (input: unknown): string => { if (typeof input !== 'string') throw new Error('Not string'); return input; } }; let validStr = stringValidator.parse('Validated Text');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Validator<T> { parse(input: unknown): T; } const stringValidator: Validator<string> = { parse: (input: unknown): string => { if (typeof input !== 'string') throw new Error('Not string'); return input; } }; let validStr = stringValidator.parse('Validated Text');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Validator<T> { parse(input: unknown): T; } const stringValidator: Validator<string> = { parse: (input: unknown): string => { if (typeof input !== 'string') throw new Error('Not string'); return input; } }; let validStr = stringValidator.parse('Validated Text');\n",
    "solutionCode": "interface Validator<T> { parse(input: unknown): T; } const stringValidator: Validator<string> = { parse: (input: unknown): string => { if (typeof input !== 'string') throw new Error('Not string'); return input; } }; let validStr = stringValidator.parse('Validated Text');\n",
    "hints": [
      "Write: interface Validator<T> { parse(input: unknown): T; } const stringValidator: Validator<string> = { parse: (input: unknown): string => { if (typeof input !== 'string') throw new Error('Not string'); return input; } }; let validStr = stringValidator.parse('Validated Text');"
    ],
    "testCases": [
      {
        "id": "ts-148-tc-1",
        "description": "TypeScript compiles and satisfies Capstone 4: Type-Safe Zod-Style Schema Validator",
        "testFn": "validStr === 'Validated Text'"
      }
    ]
  },
  {
    "id": "ts-149-capstone-5-enterprise-dat",
    "title": "149. Capstone 5: Enterprise Data Transfer Object (DTO) Mapper",
    "slug": "capstone-5-enterprise-data-tra",
    "language": "typescript",
    "category": "Module 14: Enterprise Architecture Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Master Capstone 5: Enterprise Data Transfer Object (DTO) Mapper in TypeScript with strict compile-time checking.",
    "concepts": [
      "Capstone 5",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Capstone 5: Enterprise Data Transfer Object (DTO) Mapper\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface RawUserDB { id: number; full_name: string; email_addr: string; created_at: string; } interface CleanUserDTO { id: string; name: string; email: string; } function mapUserDTO(dbRow: RawUserDB): CleanUserDTO { return { id: String(dbRow.id), name: dbRow.full_name, email: dbRow.email_addr }; } const mapped = mapUserDTO({ id: 101, full_name: 'Marcus Miller', email_addr: 'marcus@corp.io', created_at: '2023-01-01' });\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 5: Enterprise Data Transfer Object (DTO) Mapper",
      "code": "interface RawUserDB { id: number; full_name: string; email_addr: string; created_at: string; } interface CleanUserDTO { id: string; name: string; email: string; } function mapUserDTO(dbRow: RawUserDB): CleanUserDTO { return { id: String(dbRow.id), name: dbRow.full_name, email: dbRow.email_addr }; } const mapped = mapUserDTO({ id: 101, full_name: 'Marcus Miller', email_addr: 'marcus@corp.io', created_at: '2023-01-01' });",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface RawUserDB { id: number; full_name: string; email_addr: string; created_at: string; } interface CleanUserDTO { id: string; name: string; email: string; } function mapUserDTO(dbRow: RawUserDB): CleanUserDTO { return { id: String(dbRow.id), name: dbRow.full_name, email: dbRow.email_addr }; } const mapped = mapUserDTO({ id: 101, full_name: 'Marcus Miller', email_addr: 'marcus@corp.io', created_at: '2023-01-01' });`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface RawUserDB { id: number; full_name: string; email_addr: string; created_at: string; } interface CleanUserDTO { id: string; name: string; email: string; } function mapUserDTO(dbRow: RawUserDB): CleanUserDTO { return { id: String(dbRow.id), name: dbRow.full_name, email: dbRow.email_addr }; } const mapped = mapUserDTO({ id: 101, full_name: 'Marcus Miller', email_addr: 'marcus@corp.io', created_at: '2023-01-01' });\n",
    "solutionCode": "interface RawUserDB { id: number; full_name: string; email_addr: string; created_at: string; } interface CleanUserDTO { id: string; name: string; email: string; } function mapUserDTO(dbRow: RawUserDB): CleanUserDTO { return { id: String(dbRow.id), name: dbRow.full_name, email: dbRow.email_addr }; } const mapped = mapUserDTO({ id: 101, full_name: 'Marcus Miller', email_addr: 'marcus@corp.io', created_at: '2023-01-01' });\n",
    "hints": [
      "Write: interface RawUserDB { id: number; full_name: string; email_addr: string; created_at: string; } interface CleanUserDTO { id: string; name: string; email: string; } function mapUserDTO(dbRow: RawUserDB): CleanUserDTO { return { id: String(dbRow.id), name: dbRow.full_name, email: dbRow.email_addr }; } const mapped = mapUserDTO({ id: 101, full_name: 'Marcus Miller', email_addr: 'marcus@corp.io', created_at: '2023-01-01' });"
    ],
    "testCases": [
      {
        "id": "ts-149-tc-1",
        "description": "TypeScript compiles and satisfies Capstone 5: Enterprise Data Transfer Object (DTO) Mapper",
        "testFn": "mapped.id === '101' && mapped.name === 'Marcus Miller'"
      }
    ]
  },
  {
    "id": "ts-150-capstone-6-generic-reposi",
    "title": "150. Capstone 6: Generic Repository & Unit of Work Architecture",
    "slug": "capstone-6-generic-repository-",
    "language": "typescript",
    "category": "Module 14: Enterprise Architecture Capstones",
    "difficulty": "Expert",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 8,
    "xp": 50,
    "description": "Master Capstone 6: Generic Repository & Unit of Work Architecture in TypeScript with strict compile-time checking.",
    "concepts": [
      "Capstone 6",
      "TypeScript"
    ],
    "analogy": "A safety checkpoint verifying your cargo before the truck drives onto the highway.",
    "explanationMarkdown": "### Capstone 6: Generic Repository & Unit of Work Architecture\nIn TypeScript, we declare explicit types to prevent runtime defects:\n\n```typescript\ninterface Entity { id: string; } class GenericRepository<T extends Entity> { private items = new Map<string, T>(); save(entity: T): void { this.items.set(entity.id, entity); } findById(id: string): T | undefined { return this.items.get(id); } } interface Customer extends Entity { name: string; } const repo = new GenericRepository<Customer>(); repo.save({ id: 'c-1', name: 'Acme Corp' }); const found = repo.findById('c-1');\n```",
    "workedExample": {
      "title": "Worked Example: Capstone 6: Generic Repository & Unit of Work Architecture",
      "code": "interface Entity { id: string; } class GenericRepository<T extends Entity> { private items = new Map<string, T>(); save(entity: T): void { this.items.set(entity.id, entity); } findById(id: string): T | undefined { return this.items.get(id); } } interface Customer extends Entity { name: string; } const repo = new GenericRepository<Customer>(); repo.save({ id: 'c-1', name: 'Acme Corp' }); const found = repo.findById('c-1');",
      "explanation": "\u2022 Compiles cleanly through TypeScript and executes in JavaScript runtime.",
      "expectedOutput": "Type check passed"
    },
    "exerciseSteps": [
      "Look at the TypeScript editor on the right.",
      "Enter the code: `interface Entity { id: string; } class GenericRepository<T extends Entity> { private items = new Map<string, T>(); save(entity: T): void { this.items.set(entity.id, entity); } findById(id: string): T | undefined { return this.items.get(id); } } interface Customer extends Entity { name: string; } const repo = new GenericRepository<Customer>(); repo.save({ id: 'c-1', name: 'Acme Corp' }); const found = repo.findById('c-1');`",
      "Click 'Check Answer' to transpile and verify your types."
    ],
    "initialCode": "// \ud83d\udc49 Step 1: Write your typed TypeScript code below:\ninterface Entity { id: string; } class GenericRepository<T extends Entity> { private items = new Map<string, T>(); save(entity: T): void { this.items.set(entity.id, entity); } findById(id: string): T | undefined { return this.items.get(id); } } interface Customer extends Entity { name: string; } const repo = new GenericRepository<Customer>(); repo.save({ id: 'c-1', name: 'Acme Corp' }); const found = repo.findById('c-1');\n",
    "solutionCode": "interface Entity { id: string; } class GenericRepository<T extends Entity> { private items = new Map<string, T>(); save(entity: T): void { this.items.set(entity.id, entity); } findById(id: string): T | undefined { return this.items.get(id); } } interface Customer extends Entity { name: string; } const repo = new GenericRepository<Customer>(); repo.save({ id: 'c-1', name: 'Acme Corp' }); const found = repo.findById('c-1');\n",
    "hints": [
      "Write: interface Entity { id: string; } class GenericRepository<T extends Entity> { private items = new Map<string, T>(); save(entity: T): void { this.items.set(entity.id, entity); } findById(id: string): T | undefined { return this.items.get(id); } } interface Customer extends Entity { name: string; } const repo = new GenericRepository<Customer>(); repo.save({ id: 'c-1', name: 'Acme Corp' }); const found = repo.findById('c-1');"
    ],
    "testCases": [
      {
        "id": "ts-150-tc-1",
        "description": "TypeScript compiles and satisfies Capstone 6: Generic Repository & Unit of Work Architecture",
        "testFn": "found !== undefined && found.name === 'Acme Corp'"
      }
    ]
  }
];
