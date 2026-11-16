import { Language, TestCase } from '../types';

export interface BugChallenge {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Security' | 'Core';
  difficulty: 'Intermediate' | 'Advanced' | 'Expert';
  language: Language;
  prNumber: number;
  branch: string;
  author: string;
  tagline: string;
  reportedIssue: string;
  symptoms: string[];
  initialBrokenCode: string;
  solutionCode: string;
  hint: string;
  testCases: TestCase[];
  xpReward: number;
}

export const ALL_BUG_CHALLENGES: BugChallenge[] = [
  {
    id: 'bug-cart-precision',
    title: 'Floating-Point Currency Precision Error in Checkout',
    category: 'Backend',
    difficulty: 'Intermediate',
    language: 'javascript',
    prNumber: 418,
    branch: 'fix/billing-rounding-audit',
    author: 'finance-bot[bot]',
    tagline: 'Razorpay and Stripe webhook rejects payment verification due to fractional cent float inaccuracies (₹199.30000000000004).',
    reportedIssue: 'Our automated payment reconciliation job reported that 8% of cart total assertions failed. In JavaScript, binary floating point IEEE 754 causes 0.1 + 0.2 to evaluate to 0.30000000000000004. You must ensure calculateCartTotal rounds strictly to 2 decimal places and returns a clean float.',
    symptoms: [
      'Stripe/Razorpay API returns HTTP 400 "Invalid amount precision"',
      'Unit test: calculateCartTotal([{price: 19.99, qty: 1}, {price: 9.99, qty: 3}]) returns 49.96000000000001 instead of 49.96',
      'Cart summary footer displays unsightly floating point tail'
    ],
    initialBrokenCode: `// PR #418 - Payment Gateway Cart Calculation
// BUG: Float precision accumulates and leaves decimal tails!

function calculateCartTotal(items) {
  // Each item has { price: number, qty: number }
  const rawSum = items.reduce((acc, item) => {
    return acc + (item.price * item.qty);
  }, 0);

  // BROKEN: Directly returning rawSum causes 49.96000000000001
  return rawSum;
}
`,
    solutionCode: `function calculateCartTotal(items) {
  const rawSum = items.reduce((acc, item) => {
    return acc + (item.price * item.qty);
  }, 0);

  // Fix: Round to exactly 2 decimal places
  return Math.round(rawSum * 100) / 100;
}
`,
    hint: 'Multiply the raw sum by 100, use Math.round(), then divide by 100. Or use parseFloat(rawSum.toFixed(2)).',
    testCases: [
      {
        id: 'tc-precision-1',
        description: 'Should return 0 for an empty items list',
        testFn: `(() => {
          return calculateCartTotal([]) === 0;
        })()`
      },
      {
        id: 'tc-precision-2',
        description: 'Should correctly calculate [0.10 * 1, 0.20 * 1] as exactly 0.3',
        testFn: `(() => {
          const items = [{ price: 0.1, qty: 1 }, { price: 0.2, qty: 1 }];
          return calculateCartTotal(items) === 0.3;
        })()`
      },
      {
        id: 'tc-precision-3',
        description: 'Should eliminate fractional cent drift for real prices (19.99 + 9.99 * 3 = 49.96)',
        testFn: `(() => {
          const items = [{ price: 19.99, qty: 1 }, { price: 9.99, qty: 3 }];
          const res = calculateCartTotal(items);
          return res === 49.96 && String(res).length <= 5;
        })()`
      }
    ],
    xpReward: 100
  },

  {
    id: 'bug-python-mutable-default',
    title: 'Shared State Leak via Python Mutable Default Argument',
    category: 'Security',
    difficulty: 'Intermediate',
    language: 'python',
    prNumber: 312,
    branch: 'security/fix-session-permission-leak',
    author: 'sec-audit-team',
    tagline: 'Default arguments in Python are evaluated once at definition time. Sessions are cross-contaminating permissions!',
    reportedIssue: 'A high-severity bug was found in register_session(). When called without a custom permissions list, the function mutates the default list across multiple calls. As a result, subsequent guest users inherit all permissions granted to previous users in the same process!',
    symptoms: [
      'Guest user A logs in and gets permissions ["read"]',
      'Guest user B logs in without permissions and somehow has ["read"] already attached!',
      'Memory profiler shows default argument array growing indefinitely in memory'
    ],
    initialBrokenCode: `# PR #312 - Security Session Registry
# BUG: Mutable default list is evaluated ONCE and shared across all calls!

def register_session(user_id, role="member", permissions=[]):
    """
    Registers a new session for user_id with default role permissions.
    """
    permissions.append(f"role:{role}")
    permissions.append(f"user:{user_id}")
    return permissions
`,
    solutionCode: `def register_session(user_id, role="member", permissions=None):
    if permissions is None:
        permissions = []
    permissions.append(f"role:{role}")
    permissions.append(f"user:{user_id}")
    return permissions
`,
    hint: 'Never use mutable defaults like permissions=[]. Use permissions=None as the default, and inside the function check: if permissions is None: permissions = [].',
    testCases: [
      {
        id: 'tc-py-session-1',
        description: 'Should return a fresh permissions list for a single session',
        testFn: `(() => {
          const res = register_session("usr_1", "admin");
          return Array.isArray(res) && res.includes("role:admin") && res.includes("user:usr_1");
        })()`
      },
      {
        id: 'tc-py-session-2',
        description: 'Subsequent calls without permissions must NOT inherit previous session data',
        testFn: `(() => {
          const s1 = register_session("usr_A", "admin");
          const s2 = register_session("usr_B", "guest");
          // s2 must NOT contain user:usr_A or role:admin
          const hasLeak = s2.includes("user:usr_A") || s2.includes("role:admin");
          return !hasLeak && s2.length === 2 && s2[1] === "user:usr_B";
        })()`
      }
    ],
    xpReward: 120
  },

  {
    id: 'bug-pagination-off-by-one',
    title: 'Array Slice Boundary Off-By-One Dropping Records',
    category: 'Core',
    difficulty: 'Intermediate',
    language: 'javascript',
    prNumber: 529,
    branch: 'fix/pagination-boundary-drop',
    author: 'frontend-lead',
    tagline: 'Array.prototype.slice(start, end) end index is non-inclusive, causing the last record of every page to vanish.',
    reportedIssue: 'Users reported that when viewing page 1 with page size 10, only 9 items were rendered. When viewing page 2, another item was missing. The original developer subtracted 1 from the slice end index thinking slice was inclusive.',
    symptoms: [
      'Page 1 shows 9 items instead of 10 items',
      'Table row count mismatch between backend database (100 items) and UI (90 items across 10 pages)',
      'CI test: paginate([1..20], page=1, limit=5) returns 4 items instead of 5 items'
    ],
    initialBrokenCode: `// PR #529 - Data Grid Pagination Helper
// BUG: Array.prototype.slice(start, end) treats 'end' as EXCLUSIVE!

function paginate(items, page = 1, pageSize = 10) {
  if (!Array.isArray(items) || items.length === 0) {
    return { data: [], totalPages: 0, currentPage: page };
  }

  const startIndex = (page - 1) * pageSize;
  // BROKEN: Subtracting 1 causes slice to omit the last item!
  const endIndex = (startIndex + pageSize) - 1;

  const data = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / pageSize);

  return {
    data,
    totalPages,
    currentPage: page
  };
}
`,
    solutionCode: `function paginate(items, page = 1, pageSize = 10) {
  if (!Array.isArray(items) || items.length === 0) {
    return { data: [], totalPages: 0, currentPage: page };
  }

  const startIndex = (page - 1) * pageSize;
  // Fix: slice(start, end) is exclusive of end, so end = startIndex + pageSize
  const endIndex = startIndex + pageSize;

  const data = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / pageSize);

  return {
    data,
    totalPages,
    currentPage: page
  };
}
`,
    hint: 'In JavaScript slice(start, end), end is exclusive. Just pass (startIndex + pageSize) directly without subtracting 1.',
    testCases: [
      {
        id: 'tc-page-1',
        description: 'Should return exactly 5 items when pageSize is 5 on page 1',
        testFn: `(() => {
          const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const res = paginate(list, 1, 5);
          return res.data.length === 5 && res.data[0] === 1 && res.data[4] === 5;
        })()`
      },
      {
        id: 'tc-page-2',
        description: 'Should return items 6 through 10 on page 2',
        testFn: `(() => {
          const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const res = paginate(list, 2, 5);
          return res.data.length === 5 && res.data[0] === 6 && res.data[4] === 10;
        })()`
      },
      {
        id: 'tc-page-3',
        description: 'Should handle leftover partial page correctly',
        testFn: `(() => {
          const list = [1, 2, 3, 4, 5, 6, 7];
          const res = paginate(list, 2, 5);
          return res.data.length === 2 && res.data[0] === 6 && res.data[1] === 7;
        })()`
      }
    ],
    xpReward: 100
  },

  {
    id: 'bug-ts-promise-crash',
    title: 'Unhandled Rejection Crash in Parallel Microservice Fetch',
    category: 'Backend',
    difficulty: 'Advanced',
    language: 'javascript',
    prNumber: 614,
    branch: 'fix/resilient-dashboard-aggregator',
    author: 'platform-team',
    tagline: 'Promise.all fails fast when any one service fails, turning a minor notification hiccup into a total app crash.',
    reportedIssue: 'In aggregateDashboardData(), we fetch [userProfile, orders, notifications]. When the notifications service is under high load or returns an error, Promise.all throws an unhandled rejection, preventing users from seeing their profile and orders.',
    symptoms: [
      'HTTP 500 error on homepage whenever third-party notifications provider has 0.1% downtime',
      'Promise.all rejects immediately without preserving successful responses from healthy services',
      'Need graceful degradation: return partial data with notifications marked as { error: true, items: [] }'
    ],
    initialBrokenCode: `// PR #614 - Resilient Dashboard Aggregator
// BUG: Promise.all fails fast. If fetchNotifications rejects, everything is lost!

async function aggregateDashboardData(fetchProfile, fetchOrders, fetchNotifications) {
  // BROKEN: If fetchNotifications fails, this rejects immediately!
  const [profile, orders, notifications] = await Promise.all([
    fetchProfile(),
    fetchOrders(),
    fetchNotifications()
  ]);

  return {
    success: true,
    profile,
    orders,
    notifications
  };
}
`,
    solutionCode: `async function aggregateDashboardData(fetchProfile, fetchOrders, fetchNotifications) {
  const [profileRes, ordersRes, notifRes] = await Promise.allSettled([
    fetchProfile(),
    fetchOrders(),
    fetchNotifications()
  ]);

  return {
    success: true,
    profile: profileRes.status === 'fulfilled' ? profileRes.value : null,
    orders: ordersRes.status === 'fulfilled' ? ordersRes.value : [],
    notifications: notifRes.status === 'fulfilled' ? notifRes.value : { error: true, items: [] }
  };
}
`,
    hint: 'Use Promise.allSettled() instead of Promise.all(). Check each result status === "fulfilled" to gracefully extract .value, or supply fallbacks.',
    testCases: [
      {
        id: 'tc-settled-1',
        description: 'Should return all data when all 3 services succeed',
        testFn: `(async () => {
          const fp = () => Promise.resolve({ id: 1, name: 'Alice' });
          const fo = () => Promise.resolve([{ id: 'ord_1' }]);
          const fn = () => Promise.resolve([{ title: 'Welcome' }]);
          const res = await aggregateDashboardData(fp, fo, fn);
          return res.profile?.name === 'Alice' && res.orders.length === 1 && res.notifications.length === 1;
        })()`
      },
      {
        id: 'tc-settled-2',
        description: 'Should gracefully degrade and NOT reject when notifications service throws',
        testFn: `(async () => {
          const fp = () => Promise.resolve({ id: 2, name: 'Bob' });
          const fo = () => Promise.resolve([{ id: 'ord_2' }]);
          const fn = () => Promise.reject(new Error('Gateway timeout'));
          try {
            const res = await aggregateDashboardData(fp, fo, fn);
            return res.success && res.profile?.name === 'Bob' && res.orders.length === 1 && (res.notifications.error === true || Array.isArray(res.notifications));
          } catch {
            return false;
          }
        })()`
      }
    ],
    xpReward: 140
  },

  {
    id: 'bug-react-stale-closure',
    title: 'Stale Closure in React Timer Hook Skipping Updates',
    category: 'Frontend',
    difficulty: 'Advanced',
    language: 'javascript',
    prNumber: 733,
    branch: 'fix/stale-timer-closure',
    author: 'ui-core',
    tagline: 'Capturing current count in setInterval callback prevents counter from incrementing past 1.',
    reportedIssue: 'In createCountdownTimer(initialSeconds, onTick), the tick function uses count - 1 referencing the initial closure value rather than tracking the latest current value or using an updater, causing the timer to freeze at initialSeconds - 1 indefinitely.',
    symptoms: [
      'Exam proctoring timer freezes at 59 seconds and stops counting down',
      'Interval triggers repeatedly but emits the same stale number',
      'Closure retains references to old scope'
    ],
    initialBrokenCode: `// PR #733 - Countdown Clock Engine
// BUG: Stale closure captures 'count' once and never updates!

function createCountdownTimer(initialSeconds, onTick) {
  let count = initialSeconds;

  const intervalId = setInterval(() => {
    // BROKEN: If count is not decremented, onTick always receives initialSeconds - 1!
    const nextValue = count - 1;
    onTick(nextValue);
    
    if (nextValue <= 0) {
      clearInterval(intervalId);
    }
  }, 100);

  return {
    stop: () => clearInterval(intervalId)
  };
}
`,
    solutionCode: `function createCountdownTimer(initialSeconds, onTick) {
  let count = initialSeconds;

  const intervalId = setInterval(() => {
    count -= 1;
    onTick(count);
    
    if (count <= 0) {
      clearInterval(intervalId);
    }
  }, 100);

  return {
    stop: () => clearInterval(intervalId)
  };
}
`,
    hint: 'Make sure you decrement count (count -= 1 or count--) before emitting and checking nextValue.',
    testCases: [
      {
        id: 'tc-timer-1',
        description: 'Should decrement sequentially across multiple ticks',
        testFn: `(async () => {
          const ticks = [];
          const timer = createCountdownTimer(5, (val) => ticks.push(val));
          await new Promise(r => setTimeout(r, 350));
          timer.stop();
          return ticks.length >= 3 && ticks[0] === 4 && ticks[1] === 3 && ticks[2] === 2;
        })()`
      }
    ],
    xpReward: 110
  },

  {
    id: 'bug-deep-clone-mutation',
    title: 'Shallow Copy State Mutation in Nested Redux Reducer',
    category: 'Frontend',
    difficulty: 'Intermediate',
    language: 'javascript',
    prNumber: 219,
    branch: 'fix/nested-state-mutation',
    author: 'frontend-architect',
    tagline: 'Spread operator {...state} only shallow-copies 1 level. Modifying nested properties directly mutates previous state.',
    reportedIssue: 'Our Redux store time-travel debugger detected that previous state history was being mutated when updating user preferences: state.user.preferences.theme = action.theme.',
    symptoms: [
      'React components fail to re-render when theme toggles because object references are identical',
      'Redux DevTools time-travel rewind shows mutated historical snapshots',
      'State immutability tests fail'
    ],
    initialBrokenCode: `// PR #219 - Immutability Enforcement
// BUG: Mutating state.settings directly violates pure reducer immutability!

function settingsReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      // BROKEN: Object.assign or shallow spread does not clone 'settings'!
      const nextState = { ...state };
      nextState.settings.theme = action.payload; // Direct nested mutation!
      return nextState;
      
    case 'TOGGLE_NOTIFICATIONS':
      const s = { ...state };
      s.settings.notifications = !s.settings.notifications;
      return s;

    default:
      return state;
  }
}
`,
    solutionCode: `function settingsReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        settings: {
          ...state.settings,
          theme: action.payload
        }
      };
      
    case 'TOGGLE_NOTIFICATIONS':
      return {
        ...state,
        settings: {
          ...state.settings,
          notifications: !state.settings.notifications
        }
      };

    default:
      return state;
  }
}
`,
    hint: 'Deeply spread nested objects: { ...state, settings: { ...state.settings, theme: action.payload } } so original state remains pristine.',
    testCases: [
      {
        id: 'tc-reducer-1',
        description: 'Should update theme without mutating the original state object',
        testFn: `(() => {
          const original = { user: 'Dan', settings: { theme: 'dark', notifications: true } };
          const updated = settingsReducer(original, { type: 'SET_THEME', payload: 'light' });
          return updated.settings.theme === 'light' && original.settings.theme === 'dark' && original.settings !== updated.settings;
        })()`
      },
      {
        id: 'tc-reducer-2',
        description: 'Should toggle notifications cleanly without mutating original',
        testFn: `(() => {
          const original = { user: 'Dan', settings: { theme: 'dark', notifications: true } };
          const updated = settingsReducer(original, { type: 'TOGGLE_NOTIFICATIONS' });
          return updated.settings.notifications === false && original.settings.notifications === true;
        })()`
      }
    ],
    xpReward: 120
  }
];
