import { GuidedProject } from '../../types';

export const WEATHER_PROJECT: GuidedProject = {
  id: 'project-async-weather-cache',
  title: 'Async Weather & Air Quality API Client with Cache',
  slug: 'weather-api-cache',
  language: 'typescript',
  difficulty: 'Intermediate',
  tier: 4,
  estimatedHours: 2,
  xpReward: 300,
  tagline: 'Build a production-ready asynchronous API fetcher with TTL caching, error recovery, and data transformations.',
  description: 'In modern web applications, caching external API responses and managing network latency is essential. Learn how to build an in-memory cache with Time-To-Live (TTL), rate-limit resilience, and strict TypeScript interfaces.',
  previewType: 'console',
  whatYouWillBuild: [
    'Strict TypeScript interfaces for Weather & Forecast data models',
    'A generic CacheManager<T> with expiration TTL',
    'An asynchronous WeatherService with mock network delay simulation',
    'Temperature conversions and statistical aggregation metrics'
  ],
  skillsLearned: [
    'TypeScript Generics & Record types',
    'Async/Await and Promise orchestration',
    'In-memory Cache eviction logic (TTL)',
    'Error handling with custom error types'
  ],
  milestones: [
    {
      id: 'weather-m1',
      stepNumber: 1,
      title: 'Milestone 1: The Generic In-Memory TTL Cache',
      instructionMarkdown: `
### Building a TTL (Time-To-Live) Cache
An in-memory cache stores key-value pairs with an expiration timestamp.

Implement a generic class \`MemoryCache<T>\`:
- An internal \`Map<string, { value: T; expiresAt: number }>\`
- \`set(key: string, value: T, ttlMs: number): void\`:
  - Stores the value with \`expiresAt = Date.now() + ttlMs\`.
- \`get(key: string): T | null\`:
  - If the key does not exist, return \`null\`.
  - If \`Date.now() > item.expiresAt\`, delete the expired key and return \`null\`.
  - Otherwise, return \`item.value\`.
- \`has(key: string): boolean\`:
  - Returns \`true\` if valid and unexpired, \`false\` otherwise.
      `,
      starterCode: `class MemoryCache<T> {
  private cache = new Map<string, { value: T; expiresAt: number }>();

  set(key: string, value: T, ttlMs: number): void {
    // your implementation
  }

  get(key: string): T | null {
    // your implementation
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }
}

// Test run:
const cache = new MemoryCache<number>();
cache.set("temp:Tokyo", 22, 1000); // 1 second TTL
console.log("Tokyo temp:", cache.get("temp:Tokyo"));
`,
      solutionCode: `class MemoryCache<T> {
  private cache = new Map<string, { value: T; expiresAt: number }>();

  set(key: string, value: T, ttlMs: number): void {
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttlMs
    });
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return item.value;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }
}
`,
      hints: [
        'Store `{ value, expiresAt: Date.now() + ttlMs }`.',
        'In get, if `Date.now() > item.expiresAt`, call `this.cache.delete(key)` and return null.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Correctly stores and returns cached value before expiration',
          testFn: `(() => {
            const c = new MemoryCache<string>();
            c.set('user:1', 'Alice', 5000);
            return c.get('user:1') === 'Alice' && c.has('user:1') === true;
          })()`,
          expectedMessage: 'Expected cached value to be returned'
        },
        {
          id: 'tc-2',
          description: 'Returns null for expired items',
          testFn: `(() => {
            const c = new MemoryCache<string>();
            c.set('temp', 'expired', -100); // already expired
            return c.get('temp') === null && c.has('temp') === false;
          })()`,
          expectedMessage: 'Expected expired item to return null'
        }
      ]
    },
    {
      id: 'weather-m2',
      stepNumber: 2,
      title: 'Milestone 2: WeatherService with Cached API Fetching',
      instructionMarkdown: `
### Integrating the Cache with WeatherService
Define the weather data shape:
\`\`\`typescript
interface WeatherData {
  city: string;
  tempCelsius: number;
  condition: string;
  humidity: number;
}
\`\`\`

Implement \`WeatherService\`:
- Accepts \`cache: MemoryCache<WeatherData>\` in the constructor.
- A method \`async getWeather(city: string): Promise<{ data: WeatherData; fromCache: boolean }>\`:
  - Check if \`this.cache.get(city)\` has data. If yes, return \`{ data: cachedData, fromCache: true }\`.
  - If not cached, fetch from \`this.mockApiFetch(city)\` (mocking 10ms delay).
  - Save the fresh data into \`this.cache\` with a 5000ms TTL.
  - Return \`{ data: freshData, fromCache: false }\`.
      `,
      starterCode: `interface WeatherData {
  city: string;
  tempCelsius: number;
  condition: string;
  humidity: number;
}

class WeatherService {
  constructor(private cache: MemoryCache<WeatherData>) {}

  private async mockApiFetch(city: string): Promise<WeatherData> {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 20));
    return {
      city,
      tempCelsius: 24,
      condition: "Sunny",
      humidity: 55
    };
  }

  async getWeather(city: string): Promise<{ data: WeatherData; fromCache: boolean }> {
    // check cache first, then fetch if not found
  }
}
`,
      solutionCode: `interface WeatherData {
  city: string;
  tempCelsius: number;
  condition: string;
  humidity: number;
}

class WeatherService {
  constructor(private cache: MemoryCache<WeatherData>) {}

  private async mockApiFetch(city: string): Promise<WeatherData> {
    await new Promise(r => setTimeout(r, 20));
    return {
      city,
      tempCelsius: 24,
      condition: "Sunny",
      humidity: 55
    };
  }

  async getWeather(city: string): Promise<{ data: WeatherData; fromCache: boolean }> {
    const cached = this.cache.get(city);
    if (cached) {
      return { data: cached, fromCache: true };
    }
    const fresh = await this.mockApiFetch(city);
    this.cache.set(city, fresh, 5000);
    return { data: fresh, fromCache: false };
  }
}
`,
      hints: [
        'Check `const cached = this.cache.get(city);` if true return `{ data: cached, fromCache: true }`.',
        'Otherwise await `this.mockApiFetch(city)`, store with `this.cache.set(city, fresh, 5000)`, and return `{ data: fresh, fromCache: false }`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'First call returns fromCache: false and second call returns fromCache: true',
          testFn: `(async () => {
            const cache = new MemoryCache<WeatherData>();
            const service = new WeatherService(cache);
            const res1 = await service.getWeather('London');
            const res2 = await service.getWeather('London');
            return res1.fromCache === false && res2.fromCache === true && res2.data.city === 'London';
          })()`,
          expectedMessage: 'Expected first call to be network fetch and second to hit cache'
        }
      ]
    }
  ]
};
