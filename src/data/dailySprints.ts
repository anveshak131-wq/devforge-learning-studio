import { Language, TestCase } from '../types';

export interface DailySprint {
  id: string;
  dayIndex: number;
  title: string;
  language: Language;
  difficulty: 'Easy' | 'Medium';
  category: string;
  prompt: string;
  starterCode: string;
  solutionCode: string;
  testCases: TestCase[];
  xpReward: number;
}

export const DAILY_SPRINT_POOL: DailySprint[] = [
  {
    id: 'sprint-01-fizzbuzz',
    dayIndex: 0,
    title: 'Functional FizzBuzz Mapper',
    language: 'javascript',
    difficulty: 'Easy',
    category: 'Algorithms',
    prompt: 'Write a function `fizzBuzzMap(n)` that takes a positive integer `n` and returns an array of strings from 1 to n where multiples of 3 are "Fizz", multiples of 5 are "Buzz", and multiples of both 3 and 5 are "FizzBuzz".',
    starterCode: `function fizzBuzzMap(n) {
  // Return array of strings for 1..n
  const result = [];
  
  return result;
}
`,
    solutionCode: `function fizzBuzzMap(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}
`,
    testCases: [
      {
        id: 'tc-fb-1',
        description: 'Should return ["1", "2", "Fizz", "4", "Buzz"] for n=5',
        testFn: `(() => {
          const res = fizzBuzzMap(5);
          return JSON.stringify(res) === JSON.stringify(["1", "2", "Fizz", "4", "Buzz"]);
        })()`
      },
      {
        id: 'tc-fb-2',
        description: 'Should have "FizzBuzz" at index 14 (15th item)',
        testFn: `(() => {
          const res = fizzBuzzMap(15);
          return res[14] === "FizzBuzz" && res[2] === "Fizz" && res[4] === "Buzz";
        })()`
      }
    ],
    xpReward: 50
  },

  {
    id: 'sprint-02-python-palindrome',
    dayIndex: 1,
    title: 'Python Alphanumeric Palindrome Check',
    language: 'python',
    difficulty: 'Easy',
    category: 'String Mechanics',
    prompt: 'Implement `is_valid_palindrome(s)` in Python that determines if a string is a palindrome, considering only alphanumeric characters and ignoring cases.',
    starterCode: `def is_valid_palindrome(s: str) -> bool:
    # Filter non-alphanumeric and check if s reads same forwards and backwards
    pass
`,
    solutionCode: `def is_valid_palindrome(s: str) -> bool:
    clean = "".join(ch.lower() for ch in s if ch.isalnum())
    return clean == clean[::-1]
`,
    testCases: [
      {
        id: 'tc-pal-1',
        description: 'Should return True for "A man, a plan, a canal: Panama"',
        testFn: `(() => {
          return is_valid_palindrome("A man, a plan, a canal: Panama") === true;
        })()`
      },
      {
        id: 'tc-pal-2',
        description: 'Should return False for "race a car"',
        testFn: `(() => {
          return is_valid_palindrome("race a car") === false;
        })()`
      }
    ],
    xpReward: 50
  },

  {
    id: 'sprint-03-chunk-array',
    dayIndex: 2,
    title: 'Chunk Array into Sub-Arrays',
    language: 'javascript',
    difficulty: 'Medium',
    category: 'Data Structures',
    prompt: 'Write `chunkArray(arr, size)` that splits an array into groups the length of `size`. If the array cannot be split evenly, the final chunk will be the remaining elements.',
    starterCode: `function chunkArray(arr, size) {
  const chunks = [];
  // Split arr into sub-arrays of maximum length 'size'
  return chunks;
}
`,
    solutionCode: `function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
`,
    testCases: [
      {
        id: 'tc-chunk-1',
        description: 'Should chunk [1, 2, 3, 4, 5] with size 2 into [[1, 2], [3, 4], [5]]',
        testFn: `(() => {
          const res = chunkArray([1, 2, 3, 4, 5], 2);
          return res.length === 3 && res[0].length === 2 && res[2].length === 1 && res[2][0] === 5;
        })()`
      },
      {
        id: 'tc-chunk-2',
        description: 'Should return empty array for empty input',
        testFn: `(() => {
          const res = chunkArray([], 3);
          return Array.isArray(res) && res.length === 0;
        })()`
      }
    ],
    xpReward: 50
  },

  {
    id: 'sprint-04-two-sum',
    dayIndex: 3,
    title: 'Two Sum Target Indices Hash Map',
    language: 'javascript',
    difficulty: 'Easy',
    category: 'Algorithms',
    prompt: 'Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`. Assume each input has exactly one solution and do not use the same element twice. Aim for O(N) time complexity.',
    starterCode: `function twoSum(nums, target) {
  // Return [index1, index2]
  const seen = new Map();
  
  return [];
}
`,
    solutionCode: `function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
`,
    testCases: [
      {
        id: 'tc-twosum-1',
        description: 'Should find indices [0, 1] for nums=[2, 7, 11, 15] and target=9',
        testFn: `(() => {
          const res = twoSum([2, 7, 11, 15], 9);
          return Array.isArray(res) && res.length === 2 && ((res[0] === 0 && res[1] === 1) || (res[0] === 1 && res[1] === 0));
        })()`
      },
      {
        id: 'tc-twosum-2',
        description: 'Should find indices [1, 2] for nums=[3, 2, 4] and target=6',
        testFn: `(() => {
          const res = twoSum([3, 2, 4], 6);
          return (res[0] === 1 && res[1] === 2) || (res[0] === 2 && res[1] === 1);
        })()`
      }
    ],
    xpReward: 50
  },

  {
    id: 'sprint-05-flatten-nested',
    dayIndex: 4,
    title: 'Deep Array Flattener',
    language: 'javascript',
    difficulty: 'Medium',
    category: 'Recursion',
    prompt: 'Implement `flattenDeep(arr)` that recursively flattens an arbitrarily nested array of numbers into a single flat array without using `Array.prototype.flat()`.',
    starterCode: `function flattenDeep(arr) {
  // Flatten [1, [2, [3, [4]], 5]] into [1, 2, 3, 4, 5]
  const result = [];
  return result;
}
`,
    solutionCode: `function flattenDeep(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
`,
    testCases: [
      {
        id: 'tc-flat-1',
        description: 'Should flatten [1, [2, [3, [4]], 5]] into [1, 2, 3, 4, 5]',
        testFn: `(() => {
          const res = flattenDeep([1, [2, [3, [4]], 5]]);
          return JSON.stringify(res) === JSON.stringify([1, 2, 3, 4, 5]);
        })()`
      }
    ],
    xpReward: 50
  },

  {
    id: 'sprint-06-python-frequency',
    dayIndex: 5,
    title: 'Word Frequency Analyzer in Python',
    language: 'python',
    difficulty: 'Easy',
    category: 'Data Structures',
    prompt: 'Write `count_word_frequencies(sentence)` in Python that counts the occurrence of each word in a lowercase string and returns a dictionary.',
    starterCode: `def count_word_frequencies(sentence: str) -> dict:
    # Return dictionary of word: count
    pass
`,
    solutionCode: `def count_word_frequencies(sentence: str) -> dict:
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
    testCases: [
      {
        id: 'tc-freq-1',
        description: 'Should accurately count word counts',
        testFn: `(() => {
          const res = count_word_frequencies("apple banana apple orange banana apple");
          return res.apple === 3 && res.banana === 2 && res.orange === 1;
        })()`
      }
    ],
    xpReward: 50
  },

  {
    id: 'sprint-07-debounce',
    dayIndex: 6,
    title: 'Debounce Event Function',
    language: 'javascript',
    difficulty: 'Medium',
    category: 'Async Mechanics',
    prompt: 'Implement `debounce(fn, delayMs)` that delays invoking `fn` until after `delayMs` milliseconds have elapsed since the last time the debounced function was invoked.',
    starterCode: `function debounce(fn, delayMs) {
  let timerId;
  return function(...args) {
    // Schedule fn execution
  };
}
`,
    solutionCode: `function debounce(fn, delayMs) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delayMs);
  };
}
`,
    testCases: [
      {
        id: 'tc-deb-1',
        description: 'Should execute only once when called rapidly multiple times',
        testFn: `(async () => {
          let callCount = 0;
          const debounced = debounce(() => { callCount++; }, 100);
          debounced();
          debounced();
          debounced();
          await new Promise(r => setTimeout(r, 200));
          return callCount === 1;
        })()`
      }
    ],
    xpReward: 60
  }
];

export function getDailySprintForDate(dateStr?: string): DailySprint {
  const targetDate = dateStr || new Date().toISOString().split('T')[0];
  // Calculate deterministic day index based on days elapsed since epoch
  const parts = targetDate.split('-').map(Number);
  const epoch = new Date(2026, 0, 1).getTime();
  const current = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  const dayDifference = Math.max(0, Math.floor((current - epoch) / (1000 * 60 * 60 * 24)));
  
  const poolIndex = dayDifference % DAILY_SPRINT_POOL.length;
  return DAILY_SPRINT_POOL[poolIndex];
}
