import { Track } from '../../types';

export const PYTHON_TRACK: Track = {
  id: 'python',
  title: 'Python Essentials & Data Structures',
  slug: 'python',
  language: 'python',
  icon: 'Terminal',
  color: 'from-emerald-400 to-teal-500',
  tagline: 'Write elegant, readable Python scripts, list comprehensions, and data transformations.',
  description: 'Master Python syntax, list comprehensions, dictionary manipulation, and practical functions for automation and data science.',
  lessons: [
    {
      id: 'py-1-fundamentals',
      title: 'Python List Comprehensions & Transformations',
      slug: 'list-comprehensions',
      language: 'python',
      category: 'Data Structures',
      difficulty: 'Beginner',
      estimatedMinutes: 10,
      xp: 50,
      description: 'Write concise, idiomatic Python with list comprehensions and string formatting.',
      concepts: ['List comprehension syntax [x for x in list if condition]', 'f-strings', 'In-place vs new lists'],
      explanationMarkdown: `
### Pythonic Code: List Comprehensions
List comprehensions provide an expressive syntax to create new lists from existing iterables:

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
evens_squared = [n ** 2 for n in numbers if n % 2 == 0]
# [4, 16, 36]
\`\`\`

#### Challenge:
Write a function \`filter_and_double(numbers)\` that takes a list of integers and returns a new list containing only the positive even numbers, each multiplied by 2.
      `,
      initialCode: `def filter_and_double(numbers):
  # Use list comprehension to filter positive even numbers and double them
  return [n * 2 for n in numbers if n > 0 and n % 2 == 0]

# Sample test:
print(filter_and_double([-4, -2, 0, 1, 2, 3, 4, 5, 6]))
`,
      solutionCode: `def filter_and_double(numbers):
  return [n * 2 for n in numbers if n > 0 and n % 2 == 0]

print(filter_and_double([-4, -2, 0, 1, 2, 3, 4, 5, 6]))
`,
      hints: [
        'Check both `n > 0` and `n % 2 == 0`.',
        'Multiply by 2 in the expression: `n * 2`.'
      ],
      testCases: [
        {
          id: 'tc-1',
          description: 'Filters positive evens and doubles them correctly',
          testFn: `(() => {
            const res = filter_and_double([-4, -2, 0, 1, 2, 3, 4, 5, 6]);
            return Array.isArray(res) && res.length === 3 && res[0] === 4 && res[1] === 8 && res[2] === 12;
          })()`,
          expectedMessage: 'Expected [4, 8, 12]'
        }
      ]
    }
  ]
};
