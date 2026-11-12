import { GuidedProject } from '../../types';

export const REDUX_PROJECT: GuidedProject = {
  id: 'project-typesafe-store',
  title: 'Type-Safe State Store (Redux-Lite)',
  slug: 'typesafe-store',
  language: 'typescript',
  difficulty: 'Intermediate',
  tier: 4,
  estimatedHours: 2,
  xpReward: 300,
  tagline: 'Engineer a predictable, typesafe state management container with generic reducers, actions, and subscribers.',
  description: 'Understand how libraries like Redux, Zustand, and Pinia work under the hood. Implement immutable state containers, strict action dispatching, listener notifications, and middleware pipelines with 100% type safety.',
  previewType: 'console',
  whatYouWillBuild: [
    'Generic Store<S> interface with getState, dispatch, and subscribe',
    'createStore factory function with functional encapsulation',
    'Listener unsubscription mechanisms to prevent memory leaks',
    'Type-narrowed action creators and compound reducers',
    'A working Counter & Todo application state store'
  ],
  skillsLearned: [
    'TypeScript Generics & Generic Functions',
    'Observer / Pub-Sub Design Pattern',
    'Immutable State Update Conventions',
    'Higher-Order Functions and Middleware'
  ],
  milestones: [
    {
      id: 'store-m1',
      stepNumber: 1,
      title: 'Milestone 1: Generic Store Contracts & Interfaces',
      instructionMarkdown: `
### Architecture of a Predictable Store
In Redux architecture:
1. **Action**: An object with a \`type: string\` and optional payload.
2. **Reducer<S>**: A pure function \`(state: S, action: Action) => S\`.
3. **Store<S>**: Holds the state tree and provides \`getState()\`, \`dispatch(action)\`, and \`subscribe(listener)\`.

#### Challenge:
Implement the \`createStore<S>(reducer, initialState)\` function that:
- Stores \`currentState = initialState\` and a set/array of \`listeners\`.
- \`getState(): S\` returns the current state.
- \`dispatch(action: { type: string; payload?: any }): void\`:
  - Updates \`currentState = reducer(currentState, action)\`.
  - Notifies all registered listener functions.
- \`subscribe(listener: () => void): () => void\`:
  - Adds the listener to the list.
  - Returns an unsubscribe function that removes the listener when called!
      `,
      starterCode: `interface Action {
  type: string;
  payload?: any;
}

type Reducer<S> = (state: S, action: Action) => S;
type Listener = () => void;

function createStore<S>(reducer: Reducer<S>, initialState: S) {
  let state = initialState;
  const listeners: Listener[] = [];

  return {
    getState(): S {
      // return state
    },
    dispatch(action: Action): void {
      // update state through reducer, then call all listeners
    },
    subscribe(listener: Listener): () => void {
      // register listener and return unsubscribe function
    }
  };
}

// Example usage:
const counterReducer: Reducer<number> = (state, action) => {
  if (action.type === 'INCREMENT') return state + (action.payload || 1);
  if (action.type === 'DECREMENT') return state - (action.payload || 1);
  return state;
};

const store = createStore(counterReducer, 0);
console.log("Initial state:", store.getState());
`,
      solutionCode: `interface Action {
  type: string;
  payload?: any;
}

type Reducer<S> = (state: S, action: Action) => S;
type Listener = () => void;

function createStore<S>(reducer: Reducer<S>, initialState: S) {
  let state = initialState;
  let listeners: Listener[] = [];

  return {
    getState(): S {
      return state;
    },
    dispatch(action: Action): void {
      state = reducer(state, action);
      listeners.forEach(fn => fn());
    },
    subscribe(listener: Listener): () => void {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };
}
`,
      hints: [
        'Inside dispatch, do `state = reducer(state, action);` and then loop `listeners.forEach(l => l());`.',
        'In subscribe, return `() => { listeners = listeners.filter(l => l !== listener); };`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Dispatches actions and updates state correctly',
          testFn: `(() => {
            const r = (state: number, action: any) => action.type === 'ADD' ? state + action.payload : state;
            const s = createStore(r, 10);
            s.dispatch({ type: 'ADD', payload: 15 });
            return s.getState() === 25;
          })()`,
          expectedMessage: 'Expected state to equal 25 after dispatch'
        },
        {
          id: 'tc-2',
          description: 'Notifies subscribers and unsubscribes cleanly',
          testFn: `(() => {
            const r = (state: number, action: any) => state + 1;
            const s = createStore(r, 0);
            let callCount = 0;
            const unsubscribe = s.subscribe(() => { callCount++; });
            s.dispatch({ type: 'NEXT' }); // callCount = 1
            unsubscribe();
            s.dispatch({ type: 'NEXT' }); // still 1
            return callCount === 1 && s.getState() === 2;
          })()`,
          expectedMessage: 'Listener should only be called before unsubscribe'
        }
      ]
    },
    {
      id: 'store-m2',
      stepNumber: 2,
      title: 'Milestone 2: Discriminated Action Union & Complex Reducer',
      instructionMarkdown: `
### Type-Safe Actions & Domain Reducer
Now combine TypeScript Discriminated Unions with your Store to build a rock-solid Todo management state machine.

Define action types:
\`\`\`typescript
type TodoAction =
  | { type: 'ADD_TODO'; id: number; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'CLEAR_COMPLETED' };
\`\`\`

State interface:
\`\`\`typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
type TodoListState = Todo[];
\`\`\`

Implement \`todoReducer(state: TodoListState, action: TodoAction): TodoListState\`:
- \`'ADD_TODO'\`: adds \`{ id: action.id, text: action.text, completed: false }\`
- \`'TOGGLE_TODO'\`: flips \`completed\` on the matching todo
- \`'CLEAR_COMPLETED'\`: filters out completed todos
      `,
      starterCode: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoListState = Todo[];

type TodoAction =
  | { type: 'ADD_TODO'; id: number; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'CLEAR_COMPLETED' };

function todoReducer(state: TodoListState, action: TodoAction): TodoListState {
  // Use switch(action.type) to return immutable updated state
}

const store = createStore(todoReducer, []);
`,
      solutionCode: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoListState = Todo[];

type TodoAction =
  | { type: 'ADD_TODO'; id: number; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'CLEAR_COMPLETED' };

function todoReducer(state: TodoListState, action: TodoAction): TodoListState {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id, text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
`,
      hints: [
        'Always return a new array without mutating `state`.',
        'Use `[...state, { id, text, completed: false }]` for ADD_TODO.',
        'Use `state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t)` for TOGGLE_TODO.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Handles ADD_TODO and TOGGLE_TODO immutably',
          testFn: `(() => {
            let s: TodoListState = [];
            s = todoReducer(s, { type: 'ADD_TODO', id: 1, text: 'Learn TS' });
            s = todoReducer(s, { type: 'TOGGLE_TODO', id: 1 });
            return s.length === 1 && s[0].completed === true;
          })()`,
          expectedMessage: 'Todo should be added and toggled to completed: true'
        },
        {
          id: 'tc-2',
          description: 'CLEAR_COMPLETED removes only completed todos',
          testFn: `(() => {
            const initial: TodoListState = [
              { id: 1, text: 'A', completed: true },
              { id: 2, text: 'B', completed: false }
            ];
            const next = todoReducer(initial, { type: 'CLEAR_COMPLETED' });
            return next.length === 1 && next[0].id === 2;
          })()`,
          expectedMessage: 'Only active todos should remain'
        }
      ]
    }
  ]
};
