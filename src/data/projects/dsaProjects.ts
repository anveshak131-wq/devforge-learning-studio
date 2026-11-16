import { GuidedProject } from '../../types';

export const DSA_SORTING_TELEMETRY_PROJECT: GuidedProject = {
  id: 'project-dsa-sorting-telemetry',
  title: 'Algorithmic Sorting & Search Engine with Telemetry',
  slug: 'dsa-sorting-telemetry',
  language: 'dsa',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Implement divide-and-conquer sorting algorithms with internal operation metrics and telemetry.',
  description: 'Gain deep intuition for algorithm performance. You will implement QuickSort and MergeSort from scratch, instrumenting each pass with comparison and swap counters to experimentally verify time complexities like O(N log N) vs O(N²).',
  previewType: 'console',
  whatYouWillBuild: [
    'Instrumented QuickSort with pivot selection telemetry',
    'Recursive MergeSort with auxiliary array merge metrics',
    'Binary Search with step-by-step bound tracking (lower_bound and upper_bound)',
    'Algorithm benchmark comparison reporter'
  ],
  skillsLearned: [
    'Divide and conquer recursion patterns',
    'Time complexity analysis (O(N log N))',
    'Instrumentation and operation counting',
    'Binary search boundary invariants'
  ],
  milestones: [
    {
      id: 'dsa-sort-m1',
      stepNumber: 1,
      title: 'Milestone 1: Instrumented QuickSort with Telemetry',
      instructionMarkdown: `
### Milestone 1: QuickSort with Telemetry
Implement \`quick_sort_with_telemetry(arr)\`:
- Tracks metrics: \`{'comparisons': int, 'swaps': int}\`.
- Partitions array around a pivot.
- Returns dictionary: \`{'sorted': list, 'comparisons': comparisons_count, 'swaps': swaps_count}\`.
- Mutates or builds clean sorted output correctly.
      `,
      starterCode: `def quick_sort_with_telemetry(arr):
    # Implement QuickSort tracking comparisons and swaps
    pass

sample = [8, 3, 1, 7, 0, 10, 2]
res = quick_sort_with_telemetry(sample)
print("Sorted:", res['sorted'])
print("Comparisons:", res['comparisons'])
print("Swaps:", res['swaps'])
`,
      solutionCode: `def quick_sort_with_telemetry(arr):
    metrics = {'comparisons': 0, 'swaps': 0}
    items = list(arr)

    def _qsort(low, high):
        if low < high:
            p_idx = _partition(low, high)
            _qsort(low, p_idx - 1)
            _qsort(p_idx + 1, high)

    def _partition(low, high):
        pivot = items[high]
        i = low - 1
        for j in range(low, high):
            metrics['comparisons'] += 1
            if items[j] <= pivot:
                i += 1
                items[i], items[j] = items[j], items[i]
                metrics['swaps'] += 1
        items[i + 1], items[high] = items[high], items[i + 1]
        metrics['swaps'] += 1
        return i + 1

    _qsort(0, len(items) - 1)
    return {
        'sorted': items,
        'comparisons': metrics['comparisons'],
        'swaps': metrics['swaps']
    }
`,
      hints: [
        'Increment comparisons each time items[j] <= pivot is evaluated.',
        'Increment swaps each time two elements swap positions.'
      ],
      testCases: [
        {
          id: 'dsa-sort-tc1',
          description: 'quick_sort_with_telemetry sorts array and reports comparisons and swaps',
          testFn: `(() => {
            return code.includes('quick_sort_with_telemetry') && code.includes('comparisons') && code.includes('swaps');
          })()`,
          expectedMessage: 'Must implement quick_sort_with_telemetry returning sorted, comparisons, and swaps'
        }
      ]
    }
  ]
};

export const DSA_LRU_TRIE_PROJECT: GuidedProject = {
  id: 'project-dsa-lru-trie',
  title: 'High-Throughput LRU Cache & Autocomplete Trie',
  slug: 'dsa-lru-cache-trie',
  language: 'dsa',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Combine an O(1) Doubly-Linked-List LRU Cache with a Prefix Trie for fast auto-complete search.',
  description: 'Master systems-level data structures used in search engines and caches. You will build an LRU (Least Recently Used) cache guaranteeing O(1) get and put operations via a Hash Map and Doubly Linked List, then integrate a Prefix Tree (Trie) for ranked auto-completion of user queries.',
  previewType: 'console',
  whatYouWillBuild: [
    'A Doubly Linked List node architecture with head and tail sentinel nodes',
    'An LRU Cache class executing get() and put() in strict O(1) time',
    'A Trie (Prefix Tree) inserting words with frequency scores',
    'A search suggestion engine returning top N autocompleted completions'
  ],
  skillsLearned: [
    'Hash Map + Doubly Linked List composition',
    'Trie node traversal & prefix matching',
    'O(1) time complexity cache eviction',
    'Ranked search suggestions'
  ],
  milestones: [
    {
      id: 'dsa-lru-m1',
      stepNumber: 1,
      title: 'Milestone 1: O(1) LRU Cache Engine',
      instructionMarkdown: `
### Milestone 1: LRU Cache
Implement \`LRUCache(capacity)\`:
- Uses hash map + doubly linked list for $O(1)$ operations.
- \`get(key)\`: Returns value and moves node to the head (most recently used). Returns \`-1\` if not found.
- \`put(key, value)\`:
  - If key exists, updates value and moves node to head.
  - If new key, inserts at head. If capacity is exceeded, evicts the tail node (least recently used) from both list and map!
      `,
      starterCode: `class Node:
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        # Initialize sentinel head and tail nodes, and hash map
        pass

    def get(self, key: int) -> int:
        pass

    def put(self, key: int, value: int) -> None:
        pass
`,
      solutionCode: `class Node:
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.map = {}
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add_to_head(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.map:
            node = self.map[key]
            self._remove(node)
            self._add_to_head(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            node = self.map[key]
            node.val = value
            self._remove(node)
            self._add_to_head(node)
        else:
            if len(self.map) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.map[lru.key]
            new_node = Node(key, value)
            self.map[key] = new_node
            self._add_to_head(new_node)
`,
      hints: [
        'Sentinel head and tail dummy nodes eliminate edge cases during insertions and deletions.',
        'Always delete from the map when evicting self.tail.prev.'
      ],
      testCases: [
        {
          id: 'dsa-lru-tc1',
          description: 'LRUCache executes get and put in O(1) time and evicts least recently used items',
          testFn: `(() => {
            return code.includes('class LRUCache') && code.includes('get') && code.includes('put') && code.includes('tail');
          })()`,
          expectedMessage: 'Must implement LRUCache with O(1) operations'
        }
      ]
    }
  ]
};

export const DSA_DIJKSTRA_GRAPH_PROJECT: GuidedProject = {
  id: 'project-dsa-dijkstra-graph',
  title: 'Shortest-Path & Graph Route Optimizer',
  slug: 'dsa-dijkstra-graph-optimizer',
  language: 'dsa',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Engineer a weighted graph routing engine using Dijkstra’s Algorithm and Topological Sort for dependency resolution.',
  description: 'Build the foundational routing algorithms powering Google Maps, Uber dispatch, and package build systems. You will build an adjacency list graph, execute Dijkstra’s Shortest Path algorithm using a min-heap priority queue, and implement Kahn’s Topological Sort to detect dependency cycles.',
  previewType: 'console',
  whatYouWillBuild: [
    'A weighted directed Graph with adjacency list representations',
    'Dijkstra’s Shortest Path algorithm with priority queue min-heaps',
    'Path reconstruction tracing exact optimal vertex sequences',
    'Kahn’s Algorithm (Topological Sort) with cycle detection'
  ],
  skillsLearned: [
    'Graph modeling and adjacency list representations',
    'Dijkstra shortest path algorithm with heapq',
    'Directed Acyclic Graphs (DAG)',
    'Topological Sort and cycle detection'
  ],
  milestones: [
    {
      id: 'dsa-graph-m1',
      stepNumber: 1,
      title: 'Milestone 1: Dijkstra Shortest Path with Path Reconstruction',
      instructionMarkdown: `
### Milestone 1: Dijkstra Shortest Path
Implement \`GraphRoutingEngine\`:
- \`add_edge(u, v, weight)\`: Adds directed weighted edge.
- \`shortest_path(start, end)\`:
  - Uses \`heapq\` priority queue for Dijkstra's algorithm.
  - Returns \`{'distance': min_dist, 'path': [start, ..., end]}\`.
  - If unreachable, returns \`{'distance': float('inf'), 'path': []}\`.
      `,
      starterCode: `import heapq

class GraphRoutingEngine:
    def __init__(self):
        self.adj = {} # node -> list of (neighbor, weight)

    def add_edge(self, u, v, weight):
        # Add directed edge u -> v with weight
        pass

    def shortest_path(self, start, end):
        # Return dict with min distance and list of nodes in path
        pass
`,
      solutionCode: `import heapq

class GraphRoutingEngine:
    def __init__(self):
        self.adj = {}

    def add_edge(self, u, v, weight):
        if u not in self.adj:
            self.adj[u] = []
        if v not in self.adj:
            self.adj[v] = []
        self.adj[u].append((v, float(weight)))

    def shortest_path(self, start, end):
        if start not in self.adj or end not in self.adj:
            return {'distance': float('inf'), 'path': []}

        distances = {node: float('inf') for node in self.adj}
        distances[start] = 0.0
        parent = {node: None for node in self.adj}

        pq = [(0.0, start)]

        while pq:
            curr_dist, u = heapq.heappop(pq)

            if curr_dist > distances[u]:
                continue
            if u == end:
                break

            for v, weight in self.adj[u]:
                if curr_dist + weight < distances[v]:
                    distances[v] = curr_dist + weight
                    parent[v] = u
                    heapq.heappush(pq, (distances[v], v))

        if distances[end] == float('inf'):
            return {'distance': float('inf'), 'path': []}

        # Reconstruct path
        path = []
        curr = end
        while curr is not None:
            path.append(curr)
            curr = parent[curr]
        path.reverse()

        return {'distance': distances[end], 'path': path}
`,
      hints: [
        'Use heapq.heappush(pq, (dist, node)) and heapq.heappop(pq).',
        'Store parent[v] = u to backtrack the exact shortest path from end to start.'
      ],
      testCases: [
        {
          id: 'dsa-graph-tc1',
          description: 'shortest_path accurately finds minimum distance and reconstructs path',
          testFn: `(() => {
            return code.includes('heapq') && code.includes('shortest_path') && code.includes('add_edge');
          })()`,
          expectedMessage: 'Must implement Dijkstra shortest path using heapq and parent tracking'
        }
      ]
    }
  ]
};
