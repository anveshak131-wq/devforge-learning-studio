import { GuidedProject } from '../../types';

export const CPP_SMART_POINTER_PROJECT: GuidedProject = {
  id: 'project-cpp-smart-pointer',
  title: 'RAII Smart Pointer & Safe Resource Handle Engine',
  slug: 'cpp-smart-pointer-raii',
  language: 'cpp',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Implement a memory-leak-proof unique pointer template enforcing RAII and C++ move semantics.',
  description: 'Master Modern C++ resource management by building your own std::unique_ptr from scratch. You will implement constructor explicit ownership, deleted copy constructors preventing double-free corruption, move semantics for zero-overhead ownership transfers, and automatic RAII destruction.',
  previewType: 'console',
  whatYouWillBuild: [
    'A templated UniquePtr<T> class managing dynamic heap memory',
    'Rule of 5 compliance (deleted copy semantics, explicit move semantics)',
    'Dereference and arrow operator overloads (*ptr and ptr->)',
    'Reset and release resource management routines'
  ],
  skillsLearned: [
    'RAII (Resource Acquisition Is Initialization)',
    'Move semantics (rvalue references T&& and std::move)',
    'Operator overloading (*, ->, bool)',
    'Eliminating double-free and memory leak vulnerabilities'
  ],
  milestones: [
    {
      id: 'cpp-sp-m1',
      stepNumber: 1,
      title: 'Milestone 1: Unique Pointer & Move Semantics',
      instructionMarkdown: `
### Milestone 1: UniquePtr Template
Implement \`UniquePtr<T>\`:
- \`explicit UniquePtr(T* ptr = nullptr)\`: Takes raw pointer ownership.
- \`~UniquePtr()\`: Destructor calls \`delete ptr_\`.
- Copy Constructor & Copy Assignment: Explicitly mark as \`= delete;\` to prevent double-free!
- Move Constructor & Move Assignment: Transfers ownership from source to destination, setting source pointer to \`nullptr\`.
- \`get() const noexcept\`: Returns raw pointer.
- \`operator*()\` and \`operator->()\`: Allows pointer dereferencing.
      `,
      starterCode: `#include <iostream>
#include <utility>

template <typename T>
class UniquePtr {
private:
    T* ptr_ = nullptr;

public:
    explicit UniquePtr(T* ptr = nullptr) : ptr_(ptr) {}
    ~UniquePtr() { delete ptr_; }

    // Disallow copying
    UniquePtr(const UniquePtr&) = delete;
    UniquePtr& operator=(const UniquePtr&) = delete;

    // Move constructor
    UniquePtr(UniquePtr&& other) noexcept {
        // Transfer ownership
    }

    // Move assignment
    UniquePtr& operator=(UniquePtr&& other) noexcept {
        // Transfer ownership safely
        return *this;
    }

    T* get() const noexcept { return ptr_; }
    T& operator*() const { return *ptr_; }
    T* operator->() const { return ptr_; }
};

int main() {
    UniquePtr<int> p1(new int(42));
    std::cout << "p1 value: " << *p1 << std::endl;
    UniquePtr<int> p2 = std::move(p1);
    std::cout << "p2 value: " << *p2 << std::endl;
    return 0;
}
`,
      solutionCode: `#include <iostream>
#include <utility>

template <typename T>
class UniquePtr {
private:
    T* ptr_ = nullptr;

public:
    explicit UniquePtr(T* ptr = nullptr) noexcept : ptr_(ptr) {}
    
    ~UniquePtr() {
        delete ptr_;
    }

    UniquePtr(const UniquePtr&) = delete;
    UniquePtr& operator=(const UniquePtr&) = delete;

    UniquePtr(UniquePtr&& other) noexcept : ptr_(other.ptr_) {
        other.ptr_ = nullptr;
    }

    UniquePtr& operator=(UniquePtr&& other) noexcept {
        if (this != &other) {
            delete ptr_;
            ptr_ = other.ptr_;
            other.ptr_ = nullptr;
        }
        return *this;
    }

    T* get() const noexcept { return ptr_; }
    T& operator*() const { return *ptr_; }
    T* operator->() const { return ptr_; }
    explicit operator bool() const noexcept { return ptr_ != nullptr; }

    T* release() noexcept {
        T* temp = ptr_;
        ptr_ = nullptr;
        return temp;
    }

    void reset(T* new_ptr = nullptr) noexcept {
        T* old = ptr_;
        ptr_ = new_ptr;
        delete old;
    }
};

int main() {
    UniquePtr<int> p1(new int(42));
    std::cout << "p1 value: " << *p1 << std::endl;
    UniquePtr<int> p2 = std::move(p1);
    std::cout << "p2 value: " << *p2 << std::endl;
    return 0;
}
`,
      hints: [
        'In move assignment, always check (this != &other) before deleting current ptr_.',
        'Null out other.ptr_ to prevent the moved-from object from deleting the resource.'
      ],
      testCases: [
        {
          id: 'cpp-sp-tc1',
          description: 'UniquePtr implements move constructor, move assignment, and deleted copy',
          testFn: `(() => {
            return code.includes('UniquePtr') && code.includes('operator=') && code.includes('delete') && code.includes('nullptr');
          })()`,
          expectedMessage: 'UniquePtr must enforce deleted copy and valid move semantics'
        }
      ]
    }
  ]
};

export const CPP_THREADSAFE_STORE_PROJECT: GuidedProject = {
  id: 'project-cpp-threadsafe-store',
  title: 'Thread-Safe In-Memory Key-Value Store with TTL',
  slug: 'cpp-threadsafe-store',
  language: 'cpp',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Engineer a concurrent key-value cache using C++17 shared_mutex, scoped_lock, and background TTL pruning.',
  description: 'Write production-grade multithreaded C++ by building a concurrent cache. You will use std::shared_mutex to allow simultaneous reader threads while locking exclusively for writes, track time points via std::chrono, and build clean thread-safe accessors.',
  previewType: 'console',
  whatYouWillBuild: [
    'A concurrent ConcurrentMap<K, V> template class',
    'Shared read locks (std::shared_lock) allowing concurrent reads',
    'Exclusive write locks (std::unique_lock) for mutations',
    'Time-To-Live (TTL) key expiration using std::chrono'
  ],
  skillsLearned: [
    'C++17 <shared_mutex> & reader-writer locks',
    'RAII lock guards (std::scoped_lock, std::unique_lock)',
    'std::chrono steady_clock time calculations',
    'Thread-safety guarantees and race condition prevention'
  ],
  milestones: [
    {
      id: 'cpp-ts-m1',
      stepNumber: 1,
      title: 'Milestone 1: Reader-Writer Concurrent Key-Value Map',
      instructionMarkdown: `
### Milestone 1: ConcurrentMap Engine
Implement \`ConcurrentMap<std::string, std::string>\`:
- Uses \`std::unordered_map\` internally protected by \`mutable std::shared_mutex mutex_\`.
- \`void set(const std::string& key, const std::string& value)\`:
  - Acquires exclusive write lock via \`std::unique_lock<std::shared_mutex>\`.
  - Sets key in map.
- \`bool get(const std::string& key, std::string& out_val) const\`:
  - Acquires shared read lock via \`std::shared_lock<std::shared_mutex>\`.
  - If found, writes to \`out_val\` and returns true, else returns false.
- \`bool remove(const std::string& key)\`:
  - Acquires exclusive lock, removes key, returns true if deleted.
      `,
      starterCode: `#include <iostream>
#include <string>
#include <unordered_map>
#include <shared_mutex>
#include <mutex>

template <typename K, typename V>
class ConcurrentMap {
private:
    std::unordered_map<K, V> map_;
    mutable std::shared_mutex mutex_;

public:
    void set(const K& key, const V& value) {
        // Acquire exclusive lock and set value
    }

    bool get(const K& key, V& out_val) const {
        // Acquire shared lock, search, and return true if found
        return false;
    }

    bool remove(const K& key) {
        // Acquire exclusive lock and erase
        return false;
    }
};

int main() {
    ConcurrentMap<std::string, std::string> cache;
    cache.set("session_123", "UserAlice");
    std::string val;
    if (cache.get("session_123", val)) {
        std::cout << "Cached: " << val << std::endl;
    }
    return 0;
}
`,
      solutionCode: `#include <iostream>
#include <string>
#include <unordered_map>
#include <shared_mutex>
#include <mutex>

template <typename K, typename V>
class ConcurrentMap {
private:
    std::unordered_map<K, V> map_;
    mutable std::shared_mutex mutex_;

public:
    void set(const K& key, const V& value) {
        std::unique_lock<std::shared_mutex> lock(mutex_);
        map_[key] = value;
    }

    bool get(const K& key, V& out_val) const {
        std::shared_lock<std::shared_mutex> lock(mutex_);
        auto it = map_.find(key);
        if (it != map_.end()) {
            out_val = it->second;
            return true;
        }
        return false;
    }

    bool remove(const K& key) {
        std::unique_lock<std::shared_mutex> lock(mutex_);
        return map_.erase(key) > 0;
    }
};

int main() {
    ConcurrentMap<std::string, std::string> cache;
    cache.set("session_123", "UserAlice");
    std::string val;
    if (cache.get("session_123", val)) {
        std::cout << "Cached: " << val << std::endl;
    }
    return 0;
}
`,
      hints: [
        'Use std::shared_lock<std::shared_mutex> for get() to allow simultaneous readers.',
        'Use std::unique_lock<std::shared_mutex> for set() and remove().'
      ],
      testCases: [
        {
          id: 'cpp-ts-tc1',
          description: 'ConcurrentMap uses shared_mutex, shared_lock, and unique_lock',
          testFn: `(() => {
            return code.includes('shared_mutex') && code.includes('shared_lock') && code.includes('unique_lock');
          })()`,
          expectedMessage: 'Must use C++17 shared_mutex with shared_lock and unique_lock'
        }
      ]
    }
  ]
};

export const CPP_ARENA_ALLOCATOR_PROJECT: GuidedProject = {
  id: 'project-cpp-arena-allocator',
  title: 'High-Performance Arena & Bump Memory Allocator',
  slug: 'cpp-arena-allocator',
  language: 'cpp',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Build a low-overhead contiguous arena allocator utilizing placement new and hardware byte alignment.',
  description: 'In game engines and high-frequency trading (HFT), standard malloc and new are too slow and cause severe memory fragmentation. Build an arena/bump allocator that pre-allocates a single contiguous memory block, aligns object boundaries with std::align, constructs objects via placement new, and deallocates in O(1) time.',
  previewType: 'console',
  whatYouWillBuild: [
    'A low-level ArenaAllocator managing a raw contiguous byte buffer',
    'Hardware boundary alignment logic using alignof(T) and std::align',
    'In-place object construction with placement new (::new (ptr) T(...))',
    'Zero-cost O(1) bulk deallocation and allocator reset routines'
  ],
  skillsLearned: [
    'Placement new & explicit destructor calls',
    'Memory alignment requirements (alignof, std::align, std::byte)',
    'Eliminating heap fragmentation and cache-miss overhead',
    'Custom C++ memory architecture'
  ],
  milestones: [
    {
      id: 'cpp-arena-m1',
      stepNumber: 1,
      title: 'Milestone 1: Contiguous Memory Arena & Byte Alignment',
      instructionMarkdown: `
### Milestone 1: Bump Memory Allocator
Implement \`ArenaAllocator\`:
- \`explicit ArenaAllocator(size_t capacity_bytes)\`: Allocates raw byte buffer.
- \`template <typename T, typename... Args> T* allocate(Args&&... args)\`:
  - Determines required alignment \`alignof(T)\` and size \`sizeof(T)\`.
  - Uses \`std::align\` to ensure memory pointer is aligned to \`alignof(T)\`.
  - Increments offset by aligned size.
  - Constructs object in-place using placement new: \`::new (ptr) T(std::forward<Args>(args)...)\`.
  - Returns pointer to constructed object \`T*\`.
- \`void reset() noexcept\`: Resets offset to 0 for instant $O(1)$ memory reclamation!
      `,
      starterCode: `#include <iostream>
#include <vector>
#include <cstddef>
#include <new>
#include <memory>
#include <utility>

class ArenaAllocator {
private:
    std::vector<std::byte> buffer_;
    size_t offset_ = 0;

public:
    explicit ArenaAllocator(size_t capacity) : buffer_(capacity) {}

    template <typename T, typename... Args>
    T* allocate(Args&&... args) {
        // Align pointer, construct with placement new, and advance offset
        return nullptr;
    }

    void reset() noexcept {
        offset_ = 0;
    }

    size_t bytes_allocated() const noexcept { return offset_; }
};

struct Point {
    int x, y;
    Point(int x, int y) : x(x), y(y) {}
};

int main() {
    ArenaAllocator arena(1024);
    Point* p = arena.allocate<Point>(10, 25);
    std::cout << "Point: (" << p->x << ", " << p->y << ")" << std::endl;
    std::cout << "Bytes allocated: " << arena.bytes_allocated() << std::endl;
    return 0;
}
`,
      solutionCode: `#include <iostream>
#include <vector>
#include <cstddef>
#include <new>
#include <memory>
#include <utility>

class ArenaAllocator {
private:
    std::vector<std::byte> buffer_;
    size_t offset_ = 0;

public:
    explicit ArenaAllocator(size_t capacity) : buffer_(capacity) {}

    ArenaAllocator(const ArenaAllocator&) = delete;
    ArenaAllocator& operator=(const ArenaAllocator&) = delete;

    template <typename T, typename... Args>
    T* allocate(Args&&... args) {
        constexpr size_t alignment = alignof(T);
        constexpr size_t size = sizeof(T);

        size_t space = buffer_.size() - offset_;
        void* ptr = buffer_.data() + offset_;

        if (std::align(alignment, size, ptr, space) == nullptr) {
            throw std::bad_alloc();
        }

        size_t aligned_offset = static_cast<std::byte*>(ptr) - buffer_.data();
        offset_ = aligned_offset + size;

        return ::new (ptr) T(std::forward<Args>(args)...);
    }

    void reset() noexcept {
        offset_ = 0;
    }

    size_t bytes_allocated() const noexcept { return offset_; }
};

struct Point {
    int x, y;
    Point(int x, int y) : x(x), y(y) {}
};

int main() {
    ArenaAllocator arena(1024);
    Point* p = arena.allocate<Point>(10, 25);
    std::cout << "Point: (" << p->x << ", " << p->y << ")" << std::endl;
    std::cout << "Bytes allocated: " << arena.bytes_allocated() << std::endl;
    return 0;
}
`,
      hints: [
        'Use std::align(alignment, size, ptr, space) to adjust the pointer to the nearest valid byte alignment.',
        'Use ::new (ptr) T(std::forward<Args>(args)...) to invoke placement new.'
      ],
      testCases: [
        {
          id: 'cpp-arena-tc1',
          description: 'ArenaAllocator implements aligned placement new allocation and O(1) reset',
          testFn: `(() => {
            return code.includes('ArenaAllocator') && code.includes('std::align') && code.includes('placement') || code.includes('new (ptr)') || code.includes('::new');
          })()`,
          expectedMessage: 'Must implement arena allocator using std::align and placement new'
        }
      ]
    }
  ]
};
