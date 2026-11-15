import { Track } from '../../types';

export const PYTHON_DS_TRACK: Track = {
  id: "python-ds",
  title: "Python for Data Science & AI (150 Topics)",
  slug: "python-data-science",
  language: "python",
  icon: "Database",
  color: "from-amber-400 to-orange-500",
  tagline: "Master NumPy arrays, Pandas DataFrames, Matplotlib visualization, and Scikit-Learn across 150 topics.",
  description: "High-performance vectorized computing, data wrangling, feature engineering, regression, classification, clustering, and model validation.",
  lessons: [
  {
    "id": "python-ds-1-why-numpy-vectorized-arrays-vs",
    "title": "1. Why NumPy? Vectorized Arrays vs Python Lists",
    "slug": "lesson-1-why-numpy-vectorized-arrays-vs",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "C-speed array computing in memory.",
    "concepts": [
      "Why NumPy? Vectorized Arrays vs Python Lists",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Why NumPy? Vectorized Arrays vs Python Lists gives you complete architectural control.",
    "explanationMarkdown": "### Why NumPy? Vectorized Arrays vs Python Lists\n\nC-speed array computing in memory.\n\n```python\nimport numpy as np\nprint('NumPy ready')\n```",
    "workedExample": {
      "title": "Worked Example: Why NumPy? Vectorized Arrays vs Python Lists",
      "code": "import numpy as np\nprint('NumPy ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why NumPy? Vectorized Arrays vs Python Lists.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why NumPy? Vectorized Arrays vs Python Lists.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Why NumPy? Vectorized Arrays vs Python Lists\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nprint('NumPy ready')\n",
    "hints": [
      "Write:\nimport numpy as np\nprint('NumPy ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-1-tc-1",
        "description": "Verifies correct implementation for Why NumPy? Vectorized Arrays vs Python Lists",
        "testFn": "code.includes('numpy')"
      }
    ]
  },
  {
    "id": "python-ds-2-creating-arrays-with-np-array",
    "title": "2. Creating Arrays with np.array()",
    "slug": "lesson-2-creating-arrays-with-np-array",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Initialize 1D and 2D numerical vectors.",
    "concepts": [
      "Creating Arrays with np.array()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Arrays with np.array() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Arrays with np.array()\n\nInitialize 1D and 2D numerical vectors.\n\n```python\nimport numpy as np\narr = np.array([1, 2, 3])\nprint(arr)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Arrays with np.array()",
      "code": "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Arrays with np.array().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Arrays with np.array().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Arrays with np.array()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr)\n",
    "hints": [
      "Write:\nimport numpy as np\narr = np.array([1, 2, 3])\nprint(arr)"
    ],
    "testCases": [
      {
        "id": "python-ds-2-tc-1",
        "description": "Verifies correct implementation for Creating Arrays with np.array()",
        "testFn": "code.includes('np.array')"
      }
    ]
  },
  {
    "id": "python-ds-3-array-dimensions-ndim-shape-an",
    "title": "3. Array Dimensions: ndim, shape, and size",
    "slug": "lesson-3-array-dimensions-ndim-shape-an",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query matrix geometry and element counts.",
    "concepts": [
      "Array Dimensions: ndim, shape, and size",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Array Dimensions: ndim, shape, and size gives you complete architectural control.",
    "explanationMarkdown": "### Array Dimensions: ndim, shape, and size\n\nQuery matrix geometry and element counts.\n\n```python\nimport numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a.shape)\n```",
    "workedExample": {
      "title": "Worked Example: Array Dimensions: ndim, shape, and size",
      "code": "import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a.shape)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Array Dimensions: ndim, shape, and size.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Array Dimensions: ndim, shape, and size.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Array Dimensions: ndim, shape, and size\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a.shape)\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a.shape)"
    ],
    "testCases": [
      {
        "id": "python-ds-3-tc-1",
        "description": "Verifies correct implementation for Array Dimensions: ndim, shape, and size",
        "testFn": "code.includes('shape')"
      }
    ]
  },
  {
    "id": "python-ds-4-numpy-data-types-dtype-int32-f",
    "title": "4. NumPy Data Types (dtype: int32, float64, bool)",
    "slug": "lesson-4-numpy-data-types-dtype-int32-f",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Control exact bit-depth representations.",
    "concepts": [
      "NumPy Data Types (dtype: int32, float64, bool)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: NumPy Data Types (dtype: int32, float64, bool) gives you complete architectural control.",
    "explanationMarkdown": "### NumPy Data Types (dtype: int32, float64, bool)\n\nControl exact bit-depth representations.\n\n```python\nimport numpy as np\nx = np.array([1.5, 2.5], dtype=np.float32)\nprint(x.dtype)\n```",
    "workedExample": {
      "title": "Worked Example: NumPy Data Types (dtype: int32, float64, bool)",
      "code": "import numpy as np\nx = np.array([1.5, 2.5], dtype=np.float32)\nprint(x.dtype)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for NumPy Data Types (dtype: int32, float64, bool).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of NumPy Data Types (dtype: int32, float64, bool).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement NumPy Data Types (dtype: int32, float64, bool)\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nx = np.array([1.5, 2.5], dtype=np.float32)\nprint(x.dtype)\n",
    "hints": [
      "Write:\nimport numpy as np\nx = np.array([1.5, 2.5], dtype=np.float32)\nprint(x.dtype)"
    ],
    "testCases": [
      {
        "id": "python-ds-4-tc-1",
        "description": "Verifies correct implementation for NumPy Data Types (dtype: int32, float64, bool)",
        "testFn": "code.includes('dtype')"
      }
    ]
  },
  {
    "id": "python-ds-5-creating-sequences-with-np-ara",
    "title": "5. Creating Sequences with np.arange()",
    "slug": "lesson-5-creating-sequences-with-np-ara",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Step-based vector sequences.",
    "concepts": [
      "Creating Sequences with np.arange()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Sequences with np.arange() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Sequences with np.arange()\n\nStep-based vector sequences.\n\n```python\nimport numpy as np\nseq = np.arange(0, 10, 2)\nprint(seq)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Sequences with np.arange()",
      "code": "import numpy as np\nseq = np.arange(0, 10, 2)\nprint(seq)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Sequences with np.arange().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Sequences with np.arange().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Sequences with np.arange()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nseq = np.arange(0, 10, 2)\nprint(seq)\n",
    "hints": [
      "Write:\nimport numpy as np\nseq = np.arange(0, 10, 2)\nprint(seq)"
    ],
    "testCases": [
      {
        "id": "python-ds-5-tc-1",
        "description": "Verifies correct implementation for Creating Sequences with np.arange()",
        "testFn": "code.includes('arange')"
      }
    ]
  },
  {
    "id": "python-ds-6-linear-spacing-with-np-linspac",
    "title": "6. Linear Spacing with np.linspace()",
    "slug": "lesson-6-linear-spacing-with-np-linspac",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evenly distributed floating points.",
    "concepts": [
      "Linear Spacing with np.linspace()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Linear Spacing with np.linspace() gives you complete architectural control.",
    "explanationMarkdown": "### Linear Spacing with np.linspace()\n\nEvenly distributed floating points.\n\n```python\nimport numpy as np\npts = np.linspace(0, 1, 5)\nprint(pts)\n```",
    "workedExample": {
      "title": "Worked Example: Linear Spacing with np.linspace()",
      "code": "import numpy as np\npts = np.linspace(0, 1, 5)\nprint(pts)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linear Spacing with np.linspace().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linear Spacing with np.linspace().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Linear Spacing with np.linspace()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\npts = np.linspace(0, 1, 5)\nprint(pts)\n",
    "hints": [
      "Write:\nimport numpy as np\npts = np.linspace(0, 1, 5)\nprint(pts)"
    ],
    "testCases": [
      {
        "id": "python-ds-6-tc-1",
        "description": "Verifies correct implementation for Linear Spacing with np.linspace()",
        "testFn": "code.includes('linspace')"
      }
    ]
  },
  {
    "id": "python-ds-7-zero-and-one-arrays-np-zeros-a",
    "title": "7. Zero and One Arrays: np.zeros() and np.ones()",
    "slug": "lesson-7-zero-and-one-arrays-np-zeros-a",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pre-allocate memory blocks efficiently.",
    "concepts": [
      "Zero and One Arrays: np.zeros() and np.ones()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Zero and One Arrays: np.zeros() and np.ones() gives you complete architectural control.",
    "explanationMarkdown": "### Zero and One Arrays: np.zeros() and np.ones()\n\nPre-allocate memory blocks efficiently.\n\n```python\nimport numpy as np\nz = np.zeros((2, 3))\nprint(z)\n```",
    "workedExample": {
      "title": "Worked Example: Zero and One Arrays: np.zeros() and np.ones()",
      "code": "import numpy as np\nz = np.zeros((2, 3))\nprint(z)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Zero and One Arrays: np.zeros() and np.ones().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Zero and One Arrays: np.zeros() and np.ones().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Zero and One Arrays: np.zeros() and np.ones()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nz = np.zeros((2, 3))\nprint(z)\n",
    "hints": [
      "Write:\nimport numpy as np\nz = np.zeros((2, 3))\nprint(z)"
    ],
    "testCases": [
      {
        "id": "python-ds-7-tc-1",
        "description": "Verifies correct implementation for Zero and One Arrays: np.zeros() and np.ones()",
        "testFn": "code.includes('zeros')"
      }
    ]
  },
  {
    "id": "python-ds-8-identity-matrices-with-np-eye-",
    "title": "8. Identity Matrices with np.eye() and np.identity()",
    "slug": "lesson-8-identity-matrices-with-np-eye-",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Construct square identity matrices.",
    "concepts": [
      "Identity Matrices with np.eye() and np.identity()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Identity Matrices with np.eye() and np.identity() gives you complete architectural control.",
    "explanationMarkdown": "### Identity Matrices with np.eye() and np.identity()\n\nConstruct square identity matrices.\n\n```python\nimport numpy as np\nprint(np.eye(3))\n```",
    "workedExample": {
      "title": "Worked Example: Identity Matrices with np.eye() and np.identity()",
      "code": "import numpy as np\nprint(np.eye(3))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Identity Matrices with np.eye() and np.identity().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Identity Matrices with np.eye() and np.identity().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Identity Matrices with np.eye() and np.identity()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nprint(np.eye(3))\n",
    "hints": [
      "Write:\nimport numpy as np\nprint(np.eye(3))"
    ],
    "testCases": [
      {
        "id": "python-ds-8-tc-1",
        "description": "Verifies correct implementation for Identity Matrices with np.eye() and np.identity()",
        "testFn": "code.includes('eye')"
      }
    ]
  },
  {
    "id": "python-ds-9-full-and-empty-arrays-np-full-",
    "title": "9. Full and Empty Arrays: np.full() and np.empty()",
    "slug": "lesson-9-full-and-empty-arrays-np-full-",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fill arrays with arbitrary constants.",
    "concepts": [
      "Full and Empty Arrays: np.full() and np.empty()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Full and Empty Arrays: np.full() and np.empty() gives you complete architectural control.",
    "explanationMarkdown": "### Full and Empty Arrays: np.full() and np.empty()\n\nFill arrays with arbitrary constants.\n\n```python\nimport numpy as np\nf = np.full((2, 2), 7)\nprint(f)\n```",
    "workedExample": {
      "title": "Worked Example: Full and Empty Arrays: np.full() and np.empty()",
      "code": "import numpy as np\nf = np.full((2, 2), 7)\nprint(f)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Full and Empty Arrays: np.full() and np.empty().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Full and Empty Arrays: np.full() and np.empty().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Full and Empty Arrays: np.full() and np.empty()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nf = np.full((2, 2), 7)\nprint(f)\n",
    "hints": [
      "Write:\nimport numpy as np\nf = np.full((2, 2), 7)\nprint(f)"
    ],
    "testCases": [
      {
        "id": "python-ds-9-tc-1",
        "description": "Verifies correct implementation for Full and Empty Arrays: np.full() and np.empty()",
        "testFn": "code.includes('full')"
      }
    ]
  },
  {
    "id": "python-ds-10-random-number-generation-with-",
    "title": "10. Random Number Generation with np.random",
    "slug": "lesson-10-random-number-generation-with-",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sample uniform and normal distributions.",
    "concepts": [
      "Random Number Generation with np.random",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Random Number Generation with np.random gives you complete architectural control.",
    "explanationMarkdown": "### Random Number Generation with np.random\n\nSample uniform and normal distributions.\n\n```python\nimport numpy as np\nnp.random.seed(42)\nprint(np.random.rand(3))\n```",
    "workedExample": {
      "title": "Worked Example: Random Number Generation with np.random",
      "code": "import numpy as np\nnp.random.seed(42)\nprint(np.random.rand(3))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Random Number Generation with np.random.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Random Number Generation with np.random.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Random Number Generation with np.random\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nnp.random.seed(42)\nprint(np.random.rand(3))\n",
    "hints": [
      "Write:\nimport numpy as np\nnp.random.seed(42)\nprint(np.random.rand(3))"
    ],
    "testCases": [
      {
        "id": "python-ds-10-tc-1",
        "description": "Verifies correct implementation for Random Number Generation with np.random",
        "testFn": "code.includes('random')"
      }
    ]
  },
  {
    "id": "python-ds-11-array-reshaping-with-reshape",
    "title": "11. Array Reshaping with reshape()",
    "slug": "lesson-11-array-reshaping-with-reshape",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Alter tensor dimensionality without copying.",
    "concepts": [
      "Array Reshaping with reshape()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Array Reshaping with reshape() gives you complete architectural control.",
    "explanationMarkdown": "### Array Reshaping with reshape()\n\nAlter tensor dimensionality without copying.\n\n```python\nimport numpy as np\na = np.arange(6).reshape(2, 3)\nprint(a)\n```",
    "workedExample": {
      "title": "Worked Example: Array Reshaping with reshape()",
      "code": "import numpy as np\na = np.arange(6).reshape(2, 3)\nprint(a)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Array Reshaping with reshape().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Array Reshaping with reshape().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Array Reshaping with reshape()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.arange(6).reshape(2, 3)\nprint(a)\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.arange(6).reshape(2, 3)\nprint(a)"
    ],
    "testCases": [
      {
        "id": "python-ds-11-tc-1",
        "description": "Verifies correct implementation for Array Reshaping with reshape()",
        "testFn": "code.includes('reshape')"
      }
    ]
  },
  {
    "id": "python-ds-12-flattening-tensors-flatten-vs-",
    "title": "12. Flattening Tensors: flatten() vs ravel()",
    "slug": "lesson-12-flattening-tensors-flatten-vs-",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Collapse multi-dimensional arrays to 1D.",
    "concepts": [
      "Flattening Tensors: flatten() vs ravel()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Flattening Tensors: flatten() vs ravel() gives you complete architectural control.",
    "explanationMarkdown": "### Flattening Tensors: flatten() vs ravel()\n\nCollapse multi-dimensional arrays to 1D.\n\n```python\nimport numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.flatten())\n```",
    "workedExample": {
      "title": "Worked Example: Flattening Tensors: flatten() vs ravel()",
      "code": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.flatten())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Flattening Tensors: flatten() vs ravel().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Flattening Tensors: flatten() vs ravel().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Flattening Tensors: flatten() vs ravel()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.flatten())\n",
    "hints": [
      "Write:\nimport numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.flatten())"
    ],
    "testCases": [
      {
        "id": "python-ds-12-tc-1",
        "description": "Verifies correct implementation for Flattening Tensors: flatten() vs ravel()",
        "testFn": "code.includes('flatten')"
      }
    ]
  },
  {
    "id": "python-ds-13-matrix-transposition-with-t-an",
    "title": "13. Matrix Transposition with .T and transpose()",
    "slug": "lesson-13-matrix-transposition-with-t-an",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Swap row and column dimensions.",
    "concepts": [
      "Matrix Transposition with .T and transpose()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Transposition with .T and transpose() gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Transposition with .T and transpose()\n\nSwap row and column dimensions.\n\n```python\nimport numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.T)\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Transposition with .T and transpose()",
      "code": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.T)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Transposition with .T and transpose().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Transposition with .T and transpose().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Transposition with .T and transpose()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.T)\n",
    "hints": [
      "Write:\nimport numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.T)"
    ],
    "testCases": [
      {
        "id": "python-ds-13-tc-1",
        "description": "Verifies correct implementation for Matrix Transposition with .T and transpose()",
        "testFn": "code.includes('.T')"
      }
    ]
  },
  {
    "id": "python-ds-14-memory-layout-c-contiguous-vs-",
    "title": "14. Memory Layout: C-Contiguous vs Fortran Order",
    "slug": "lesson-14-memory-layout-c-contiguous-vs-",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Row-major vs column-major cache locality.",
    "concepts": [
      "Memory Layout: C-Contiguous vs Fortran Order",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Memory Layout: C-Contiguous vs Fortran Order gives you complete architectural control.",
    "explanationMarkdown": "### Memory Layout: C-Contiguous vs Fortran Order\n\nRow-major vs column-major cache locality.\n\n```python\nimport numpy as np\na = np.ones((2, 2), order='C')\nprint(a.flags.c_contiguous)\n```",
    "workedExample": {
      "title": "Worked Example: Memory Layout: C-Contiguous vs Fortran Order",
      "code": "import numpy as np\na = np.ones((2, 2), order='C')\nprint(a.flags.c_contiguous)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Memory Layout: C-Contiguous vs Fortran Order.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Memory Layout: C-Contiguous vs Fortran Order.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Memory Layout: C-Contiguous vs Fortran Order\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.ones((2, 2), order='C')\nprint(a.flags.c_contiguous)\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.ones((2, 2), order='C')\nprint(a.flags.c_contiguous)"
    ],
    "testCases": [
      {
        "id": "python-ds-14-tc-1",
        "description": "Verifies correct implementation for Memory Layout: C-Contiguous vs Fortran Order",
        "testFn": "code.includes('contiguous')"
      }
    ]
  },
  {
    "id": "python-ds-15-type-conversion-with-astype",
    "title": "15. Type Conversion with astype()",
    "slug": "lesson-15-type-conversion-with-astype",
    "language": "python",
    "category": "Module 1: NumPy Arrays & Dimensionality",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Cast float64 to int32 cleanly.",
    "concepts": [
      "Type Conversion with astype()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Type Conversion with astype() gives you complete architectural control.",
    "explanationMarkdown": "### Type Conversion with astype()\n\nCast float64 to int32 cleanly.\n\n```python\nimport numpy as np\nx = np.array([1.2, 3.8]).astype(np.int32)\nprint(x)\n```",
    "workedExample": {
      "title": "Worked Example: Type Conversion with astype()",
      "code": "import numpy as np\nx = np.array([1.2, 3.8]).astype(np.int32)\nprint(x)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Type Conversion with astype().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Type Conversion with astype().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Type Conversion with astype()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nx = np.array([1.2, 3.8]).astype(np.int32)\nprint(x)\n",
    "hints": [
      "Write:\nimport numpy as np\nx = np.array([1.2, 3.8]).astype(np.int32)\nprint(x)"
    ],
    "testCases": [
      {
        "id": "python-ds-15-tc-1",
        "description": "Verifies correct implementation for Type Conversion with astype()",
        "testFn": "code.includes('astype')"
      }
    ]
  },
  {
    "id": "python-ds-16-vectorized-math-element-wise-a",
    "title": "16. Vectorized Math: Element-Wise Addition and Scaling",
    "slug": "lesson-16-vectorized-math-element-wise-a",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Perform math without python loops.",
    "concepts": [
      "Vectorized Math: Element-Wise Addition and Scaling",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Vectorized Math: Element-Wise Addition and Scaling gives you complete architectural control.",
    "explanationMarkdown": "### Vectorized Math: Element-Wise Addition and Scaling\n\nPerform math without python loops.\n\n```python\nimport numpy as np\na = np.array([1, 2, 3])\nprint(a * 10)\n```",
    "workedExample": {
      "title": "Worked Example: Vectorized Math: Element-Wise Addition and Scaling",
      "code": "import numpy as np\na = np.array([1, 2, 3])\nprint(a * 10)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Vectorized Math: Element-Wise Addition and Scaling.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Vectorized Math: Element-Wise Addition and Scaling.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Vectorized Math: Element-Wise Addition and Scaling\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([1, 2, 3])\nprint(a * 10)\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([1, 2, 3])\nprint(a * 10)"
    ],
    "testCases": [
      {
        "id": "python-ds-16-tc-1",
        "description": "Verifies correct implementation for Vectorized Math: Element-Wise Addition and Scaling",
        "testFn": "code.includes('*')"
      }
    ]
  },
  {
    "id": "python-ds-17-universal-functions-ufuncs-sqr",
    "title": "17. Universal Functions (ufuncs): sqrt, exp, log",
    "slug": "lesson-17-universal-functions-ufuncs-sqr",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fast vectorized math kernels.",
    "concepts": [
      "Universal Functions (ufuncs): sqrt, exp, log",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Universal Functions (ufuncs): sqrt, exp, log gives you complete architectural control.",
    "explanationMarkdown": "### Universal Functions (ufuncs): sqrt, exp, log\n\nFast vectorized math kernels.\n\n```python\nimport numpy as np\na = np.array([1, 4, 9])\nprint(np.sqrt(a))\n```",
    "workedExample": {
      "title": "Worked Example: Universal Functions (ufuncs): sqrt, exp, log",
      "code": "import numpy as np\na = np.array([1, 4, 9])\nprint(np.sqrt(a))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Universal Functions (ufuncs): sqrt, exp, log.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Universal Functions (ufuncs): sqrt, exp, log.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Universal Functions (ufuncs): sqrt, exp, log\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([1, 4, 9])\nprint(np.sqrt(a))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([1, 4, 9])\nprint(np.sqrt(a))"
    ],
    "testCases": [
      {
        "id": "python-ds-17-tc-1",
        "description": "Verifies correct implementation for Universal Functions (ufuncs): sqrt, exp, log",
        "testFn": "code.includes('sqrt')"
      }
    ]
  },
  {
    "id": "python-ds-18-numpy-broadcasting-rules",
    "title": "18. NumPy Broadcasting Rules",
    "slug": "lesson-18-numpy-broadcasting-rules",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Operate on tensors of differing dimensions.",
    "concepts": [
      "NumPy Broadcasting Rules",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: NumPy Broadcasting Rules gives you complete architectural control.",
    "explanationMarkdown": "### NumPy Broadcasting Rules\n\nOperate on tensors of differing dimensions.\n\n```python\nimport numpy as np\nm = np.ones((2, 2))\nv = np.array([10, 20])\nprint(m + v)\n```",
    "workedExample": {
      "title": "Worked Example: NumPy Broadcasting Rules",
      "code": "import numpy as np\nm = np.ones((2, 2))\nv = np.array([10, 20])\nprint(m + v)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for NumPy Broadcasting Rules.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of NumPy Broadcasting Rules.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement NumPy Broadcasting Rules\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nm = np.ones((2, 2))\nv = np.array([10, 20])\nprint(m + v)\n",
    "hints": [
      "Write:\nimport numpy as np\nm = np.ones((2, 2))\nv = np.array([10, 20])\nprint(m + v)"
    ],
    "testCases": [
      {
        "id": "python-ds-18-tc-1",
        "description": "Verifies correct implementation for NumPy Broadcasting Rules",
        "testFn": "code.includes('+')"
      }
    ]
  },
  {
    "id": "python-ds-19-1d-and-2d-array-slicing-start-",
    "title": "19. 1D and 2D Array Slicing [start:stop:step]",
    "slug": "lesson-19-1d-and-2d-array-slicing-start-",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Slice rows and columns with colon syntax.",
    "concepts": [
      "1D and 2D Array Slicing [start:stop:step]",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: 1D and 2D Array Slicing [start:stop:step] gives you complete architectural control.",
    "explanationMarkdown": "### 1D and 2D Array Slicing [start:stop:step]\n\nSlice rows and columns with colon syntax.\n\n```python\nimport numpy as np\na = np.arange(10)\nprint(a[2:6])\n```",
    "workedExample": {
      "title": "Worked Example: 1D and 2D Array Slicing [start:stop:step]",
      "code": "import numpy as np\na = np.arange(10)\nprint(a[2:6])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for 1D and 2D Array Slicing [start:stop:step].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of 1D and 2D Array Slicing [start:stop:step].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement 1D and 2D Array Slicing [start:stop:step]\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.arange(10)\nprint(a[2:6])\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.arange(10)\nprint(a[2:6])"
    ],
    "testCases": [
      {
        "id": "python-ds-19-tc-1",
        "description": "Verifies correct implementation for 1D and 2D Array Slicing [start:stop:step]",
        "testFn": "code.includes('[2:6]')"
      }
    ]
  },
  {
    "id": "python-ds-20-boolean-masking-and-logical-fi",
    "title": "20. Boolean Masking and Logical Filtering",
    "slug": "lesson-20-boolean-masking-and-logical-fi",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Select values meeting boolean predicates.",
    "concepts": [
      "Boolean Masking and Logical Filtering",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Boolean Masking and Logical Filtering gives you complete architectural control.",
    "explanationMarkdown": "### Boolean Masking and Logical Filtering\n\nSelect values meeting boolean predicates.\n\n```python\nimport numpy as np\na = np.array([10, 25, 5, 40])\nprint(a[a > 15])\n```",
    "workedExample": {
      "title": "Worked Example: Boolean Masking and Logical Filtering",
      "code": "import numpy as np\na = np.array([10, 25, 5, 40])\nprint(a[a > 15])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Boolean Masking and Logical Filtering.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Boolean Masking and Logical Filtering.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Boolean Masking and Logical Filtering\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([10, 25, 5, 40])\nprint(a[a > 15])\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([10, 25, 5, 40])\nprint(a[a > 15])"
    ],
    "testCases": [
      {
        "id": "python-ds-20-tc-1",
        "description": "Verifies correct implementation for Boolean Masking and Logical Filtering",
        "testFn": "code.includes('>')"
      }
    ]
  },
  {
    "id": "python-ds-21-fancy-indexing-with-integer-ar",
    "title": "21. Fancy Indexing with Integer Arrays",
    "slug": "lesson-21-fancy-indexing-with-integer-ar",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract elements using index vectors.",
    "concepts": [
      "Fancy Indexing with Integer Arrays",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Fancy Indexing with Integer Arrays gives you complete architectural control.",
    "explanationMarkdown": "### Fancy Indexing with Integer Arrays\n\nExtract elements using index vectors.\n\n```python\nimport numpy as np\na = np.array([10, 20, 30, 40])\nprint(a[[0, 2]])\n```",
    "workedExample": {
      "title": "Worked Example: Fancy Indexing with Integer Arrays",
      "code": "import numpy as np\na = np.array([10, 20, 30, 40])\nprint(a[[0, 2]])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fancy Indexing with Integer Arrays.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fancy Indexing with Integer Arrays.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Fancy Indexing with Integer Arrays\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([10, 20, 30, 40])\nprint(a[[0, 2]])\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([10, 20, 30, 40])\nprint(a[[0, 2]])"
    ],
    "testCases": [
      {
        "id": "python-ds-21-tc-1",
        "description": "Verifies correct implementation for Fancy Indexing with Integer Arrays",
        "testFn": "code.includes('[[')"
      }
    ]
  },
  {
    "id": "python-ds-22-np-where-vectorized-ternary-co",
    "title": "22. np.where(): Vectorized Ternary Conditionals",
    "slug": "lesson-22-np-where-vectorized-ternary-co",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Select between two arrays based on condition.",
    "concepts": [
      "np.where(): Vectorized Ternary Conditionals",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: np.where(): Vectorized Ternary Conditionals gives you complete architectural control.",
    "explanationMarkdown": "### np.where(): Vectorized Ternary Conditionals\n\nSelect between two arrays based on condition.\n\n```python\nimport numpy as np\na = np.array([1, 5, 2])\nprint(np.where(a > 2, 'High', 'Low'))\n```",
    "workedExample": {
      "title": "Worked Example: np.where(): Vectorized Ternary Conditionals",
      "code": "import numpy as np\na = np.array([1, 5, 2])\nprint(np.where(a > 2, 'High', 'Low'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for np.where(): Vectorized Ternary Conditionals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of np.where(): Vectorized Ternary Conditionals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement np.where(): Vectorized Ternary Conditionals\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([1, 5, 2])\nprint(np.where(a > 2, 'High', 'Low'))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([1, 5, 2])\nprint(np.where(a > 2, 'High', 'Low'))"
    ],
    "testCases": [
      {
        "id": "python-ds-22-tc-1",
        "description": "Verifies correct implementation for np.where(): Vectorized Ternary Conditionals",
        "testFn": "code.includes('where')"
      }
    ]
  },
  {
    "id": "python-ds-23-statistical-reductions-sum-mea",
    "title": "23. Statistical Reductions: sum, mean, std, var",
    "slug": "lesson-23-statistical-reductions-sum-mea",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Aggregate metrics across full arrays.",
    "concepts": [
      "Statistical Reductions: sum, mean, std, var",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Statistical Reductions: sum, mean, std, var gives you complete architectural control.",
    "explanationMarkdown": "### Statistical Reductions: sum, mean, std, var\n\nAggregate metrics across full arrays.\n\n```python\nimport numpy as np\na = np.array([10, 20, 30])\nprint(np.mean(a))\n```",
    "workedExample": {
      "title": "Worked Example: Statistical Reductions: sum, mean, std, var",
      "code": "import numpy as np\na = np.array([10, 20, 30])\nprint(np.mean(a))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Statistical Reductions: sum, mean, std, var.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Statistical Reductions: sum, mean, std, var.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Statistical Reductions: sum, mean, std, var\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([10, 20, 30])\nprint(np.mean(a))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([10, 20, 30])\nprint(np.mean(a))"
    ],
    "testCases": [
      {
        "id": "python-ds-23-tc-1",
        "description": "Verifies correct implementation for Statistical Reductions: sum, mean, std, var",
        "testFn": "code.includes('mean')"
      }
    ]
  },
  {
    "id": "python-ds-24-axis-specific-reductions-axis-",
    "title": "24. Axis-Specific Reductions (axis=0 vs axis=1)",
    "slug": "lesson-24-axis-specific-reductions-axis-",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reduce along columns or rows.",
    "concepts": [
      "Axis-Specific Reductions (axis=0 vs axis=1)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Axis-Specific Reductions (axis=0 vs axis=1) gives you complete architectural control.",
    "explanationMarkdown": "### Axis-Specific Reductions (axis=0 vs axis=1)\n\nReduce along columns or rows.\n\n```python\nimport numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=0))\n```",
    "workedExample": {
      "title": "Worked Example: Axis-Specific Reductions (axis=0 vs axis=1)",
      "code": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=0))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Axis-Specific Reductions (axis=0 vs axis=1).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Axis-Specific Reductions (axis=0 vs axis=1).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Axis-Specific Reductions (axis=0 vs axis=1)\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=0))\n",
    "hints": [
      "Write:\nimport numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=0))"
    ],
    "testCases": [
      {
        "id": "python-ds-24-tc-1",
        "description": "Verifies correct implementation for Axis-Specific Reductions (axis=0 vs axis=1)",
        "testFn": "code.includes('axis=0')"
      }
    ]
  },
  {
    "id": "python-ds-25-finding-extremes-min-max-argmi",
    "title": "25. Finding Extremes: min, max, argmin, argmax",
    "slug": "lesson-25-finding-extremes-min-max-argmi",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Locate minimum/maximum values and indices.",
    "concepts": [
      "Finding Extremes: min, max, argmin, argmax",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Finding Extremes: min, max, argmin, argmax gives you complete architectural control.",
    "explanationMarkdown": "### Finding Extremes: min, max, argmin, argmax\n\nLocate minimum/maximum values and indices.\n\n```python\nimport numpy as np\na = np.array([10, 50, 20])\nprint(np.argmax(a))\n```",
    "workedExample": {
      "title": "Worked Example: Finding Extremes: min, max, argmin, argmax",
      "code": "import numpy as np\na = np.array([10, 50, 20])\nprint(np.argmax(a))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding Extremes: min, max, argmin, argmax.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding Extremes: min, max, argmin, argmax.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Finding Extremes: min, max, argmin, argmax\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([10, 50, 20])\nprint(np.argmax(a))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([10, 50, 20])\nprint(np.argmax(a))"
    ],
    "testCases": [
      {
        "id": "python-ds-25-tc-1",
        "description": "Verifies correct implementation for Finding Extremes: min, max, argmin, argmax",
        "testFn": "code.includes('argmax')"
      }
    ]
  },
  {
    "id": "python-ds-26-matrix-multiplication-np-dot-a",
    "title": "26. Matrix Multiplication: np.dot() and @ operator",
    "slug": "lesson-26-matrix-multiplication-np-dot-a",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute dot products and matrix operations.",
    "concepts": [
      "Matrix Multiplication: np.dot() and @ operator",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matrix Multiplication: np.dot() and @ operator gives you complete architectural control.",
    "explanationMarkdown": "### Matrix Multiplication: np.dot() and @ operator\n\nCompute dot products and matrix operations.\n\n```python\nimport numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a @ a)\n```",
    "workedExample": {
      "title": "Worked Example: Matrix Multiplication: np.dot() and @ operator",
      "code": "import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a @ a)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matrix Multiplication: np.dot() and @ operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matrix Multiplication: np.dot() and @ operator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matrix Multiplication: np.dot() and @ operator\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a @ a)\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a @ a)"
    ],
    "testCases": [
      {
        "id": "python-ds-26-tc-1",
        "description": "Verifies correct implementation for Matrix Multiplication: np.dot() and @ operator",
        "testFn": "code.includes('@')"
      }
    ]
  },
  {
    "id": "python-ds-27-concatenation-and-stacking-vst",
    "title": "27. Concatenation and Stacking (vstack, hstack)",
    "slug": "lesson-27-concatenation-and-stacking-vst",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stack arrays horizontally or vertically.",
    "concepts": [
      "Concatenation and Stacking (vstack, hstack)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Concatenation and Stacking (vstack, hstack) gives you complete architectural control.",
    "explanationMarkdown": "### Concatenation and Stacking (vstack, hstack)\n\nStack arrays horizontally or vertically.\n\n```python\nimport numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.vstack((a, b)))\n```",
    "workedExample": {
      "title": "Worked Example: Concatenation and Stacking (vstack, hstack)",
      "code": "import numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.vstack((a, b)))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Concatenation and Stacking (vstack, hstack).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Concatenation and Stacking (vstack, hstack).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Concatenation and Stacking (vstack, hstack)\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.vstack((a, b)))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.vstack((a, b)))"
    ],
    "testCases": [
      {
        "id": "python-ds-27-tc-1",
        "description": "Verifies correct implementation for Concatenation and Stacking (vstack, hstack)",
        "testFn": "code.includes('vstack')"
      }
    ]
  },
  {
    "id": "python-ds-28-array-splitting-with-np-split",
    "title": "28. Array Splitting with np.split()",
    "slug": "lesson-28-array-splitting-with-np-split",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Partition arrays into equal chunks.",
    "concepts": [
      "Array Splitting with np.split()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Array Splitting with np.split() gives you complete architectural control.",
    "explanationMarkdown": "### Array Splitting with np.split()\n\nPartition arrays into equal chunks.\n\n```python\nimport numpy as np\na = np.arange(6)\nprint(np.split(a, 2))\n```",
    "workedExample": {
      "title": "Worked Example: Array Splitting with np.split()",
      "code": "import numpy as np\na = np.arange(6)\nprint(np.split(a, 2))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Array Splitting with np.split().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Array Splitting with np.split().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Array Splitting with np.split()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.arange(6)\nprint(np.split(a, 2))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.arange(6)\nprint(np.split(a, 2))"
    ],
    "testCases": [
      {
        "id": "python-ds-28-tc-1",
        "description": "Verifies correct implementation for Array Splitting with np.split()",
        "testFn": "code.includes('split')"
      }
    ]
  },
  {
    "id": "python-ds-29-sorting-arrays-np-sort-and-np-",
    "title": "29. Sorting Arrays: np.sort() and np.argsort()",
    "slug": "lesson-29-sorting-arrays-np-sort-and-np-",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Order values and retrieve permutation indices.",
    "concepts": [
      "Sorting Arrays: np.sort() and np.argsort()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Sorting Arrays: np.sort() and np.argsort() gives you complete architectural control.",
    "explanationMarkdown": "### Sorting Arrays: np.sort() and np.argsort()\n\nOrder values and retrieve permutation indices.\n\n```python\nimport numpy as np\na = np.array([30, 10, 20])\nprint(np.sort(a))\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Arrays: np.sort() and np.argsort()",
      "code": "import numpy as np\na = np.array([30, 10, 20])\nprint(np.sort(a))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Arrays: np.sort() and np.argsort().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Arrays: np.sort() and np.argsort().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sorting Arrays: np.sort() and np.argsort()\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\na = np.array([30, 10, 20])\nprint(np.sort(a))\n",
    "hints": [
      "Write:\nimport numpy as np\na = np.array([30, 10, 20])\nprint(np.sort(a))"
    ],
    "testCases": [
      {
        "id": "python-ds-29-tc-1",
        "description": "Verifies correct implementation for Sorting Arrays: np.sort() and np.argsort()",
        "testFn": "code.includes('sort')"
      }
    ]
  },
  {
    "id": "python-ds-30-linear-algebra-with-np-linalg-",
    "title": "30. Linear Algebra with np.linalg (inv, eig, det)",
    "slug": "lesson-30-linear-algebra-with-np-linalg-",
    "language": "python",
    "category": "Module 2: Vectorization, Indexing & Slicing",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute determinants, eigenvalues, inverses.",
    "concepts": [
      "Linear Algebra with np.linalg (inv, eig, det)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Linear Algebra with np.linalg (inv, eig, det) gives you complete architectural control.",
    "explanationMarkdown": "### Linear Algebra with np.linalg (inv, eig, det)\n\nCompute determinants, eigenvalues, inverses.\n\n```python\nimport numpy as np\nm = np.array([[2, 1], [1, 2]])\nprint(np.linalg.det(m))\n```",
    "workedExample": {
      "title": "Worked Example: Linear Algebra with np.linalg (inv, eig, det)",
      "code": "import numpy as np\nm = np.array([[2, 1], [1, 2]])\nprint(np.linalg.det(m))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linear Algebra with np.linalg (inv, eig, det).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linear Algebra with np.linalg (inv, eig, det).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Linear Algebra with np.linalg (inv, eig, det)\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nm = np.array([[2, 1], [1, 2]])\nprint(np.linalg.det(m))\n",
    "hints": [
      "Write:\nimport numpy as np\nm = np.array([[2, 1], [1, 2]])\nprint(np.linalg.det(m))"
    ],
    "testCases": [
      {
        "id": "python-ds-30-tc-1",
        "description": "Verifies correct implementation for Linear Algebra with np.linalg (inv, eig, det)",
        "testFn": "code.includes('linalg')"
      }
    ]
  },
  {
    "id": "python-ds-31-why-pandas-labeled-tabular-dat",
    "title": "31. Why Pandas? Labeled Tabular Data Structures",
    "slug": "lesson-31-why-pandas-labeled-tabular-dat",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The industry standard for data manipulation in Python.",
    "concepts": [
      "Why Pandas? Labeled Tabular Data Structures",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Why Pandas? Labeled Tabular Data Structures gives you complete architectural control.",
    "explanationMarkdown": "### Why Pandas? Labeled Tabular Data Structures\n\nThe industry standard for data manipulation in Python.\n\n```python\nimport pandas as pd\nprint('Pandas ready')\n```",
    "workedExample": {
      "title": "Worked Example: Why Pandas? Labeled Tabular Data Structures",
      "code": "import pandas as pd\nprint('Pandas ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Why Pandas? Labeled Tabular Data Structures.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Why Pandas? Labeled Tabular Data Structures.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Why Pandas? Labeled Tabular Data Structures\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint('Pandas ready')\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint('Pandas ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-31-tc-1",
        "description": "Verifies correct implementation for Why Pandas? Labeled Tabular Data Structures",
        "testFn": "code.includes('pandas')"
      }
    ]
  },
  {
    "id": "python-ds-32-creating-pandas-series-from-li",
    "title": "32. Creating Pandas Series from Lists and Dicts",
    "slug": "lesson-32-creating-pandas-series-from-li",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "1D labeled vector with custom indices.",
    "concepts": [
      "Creating Pandas Series from Lists and Dicts",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Pandas Series from Lists and Dicts gives you complete architectural control.",
    "explanationMarkdown": "### Creating Pandas Series from Lists and Dicts\n\n1D labeled vector with custom indices.\n\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s)\n```",
    "workedExample": {
      "title": "Worked Example: Creating Pandas Series from Lists and Dicts",
      "code": "import pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Pandas Series from Lists and Dicts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Pandas Series from Lists and Dicts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Pandas Series from Lists and Dicts\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s)\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s)"
    ],
    "testCases": [
      {
        "id": "python-ds-32-tc-1",
        "description": "Verifies correct implementation for Creating Pandas Series from Lists and Dicts",
        "testFn": "code.includes('Series')"
      }
    ]
  },
  {
    "id": "python-ds-33-series-indexing-by-label-vs-in",
    "title": "33. Series Indexing: By Label vs Integer Position",
    "slug": "lesson-33-series-indexing-by-label-vs-in",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Access data via index labels or numeric offsets.",
    "concepts": [
      "Series Indexing: By Label vs Integer Position",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Series Indexing: By Label vs Integer Position gives you complete architectural control.",
    "explanationMarkdown": "### Series Indexing: By Label vs Integer Position\n\nAccess data via index labels or numeric offsets.\n\n```python\nimport pandas as pd\ns = pd.Series([100, 200], index=['x', 'y'])\nprint(s['x'])\n```",
    "workedExample": {
      "title": "Worked Example: Series Indexing: By Label vs Integer Position",
      "code": "import pandas as pd\ns = pd.Series([100, 200], index=['x', 'y'])\nprint(s['x'])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Series Indexing: By Label vs Integer Position.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Series Indexing: By Label vs Integer Position.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Series Indexing: By Label vs Integer Position\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([100, 200], index=['x', 'y'])\nprint(s['x'])\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([100, 200], index=['x', 'y'])\nprint(s['x'])"
    ],
    "testCases": [
      {
        "id": "python-ds-33-tc-1",
        "description": "Verifies correct implementation for Series Indexing: By Label vs Integer Position",
        "testFn": "code.includes(\"['x']\")"
      }
    ]
  },
  {
    "id": "python-ds-34-creating-dataframes-from-dicti",
    "title": "34. Creating DataFrames from Dictionaries",
    "slug": "lesson-34-creating-dataframes-from-dicti",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tabular datasets with named columns.",
    "concepts": [
      "Creating DataFrames from Dictionaries",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating DataFrames from Dictionaries gives you complete architectural control.",
    "explanationMarkdown": "### Creating DataFrames from Dictionaries\n\nTabular datasets with named columns.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})\nprint(df)\n```",
    "workedExample": {
      "title": "Worked Example: Creating DataFrames from Dictionaries",
      "code": "import pandas as pd\ndf = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})\nprint(df)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating DataFrames from Dictionaries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating DataFrames from Dictionaries.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating DataFrames from Dictionaries\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})\nprint(df)\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})\nprint(df)"
    ],
    "testCases": [
      {
        "id": "python-ds-34-tc-1",
        "description": "Verifies correct implementation for Creating DataFrames from Dictionaries",
        "testFn": "code.includes('DataFrame')"
      }
    ]
  },
  {
    "id": "python-ds-35-dataframe-shape-columns-and-in",
    "title": "35. DataFrame Shape, Columns, and Index Attributes",
    "slug": "lesson-35-dataframe-shape-columns-and-in",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect structure, fields, and index keys.",
    "concepts": [
      "DataFrame Shape, Columns, and Index Attributes",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: DataFrame Shape, Columns, and Index Attributes gives you complete architectural control.",
    "explanationMarkdown": "### DataFrame Shape, Columns, and Index Attributes\n\nInspect structure, fields, and index keys.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'a': [1, 2]})\nprint(df.columns.tolist())\n```",
    "workedExample": {
      "title": "Worked Example: DataFrame Shape, Columns, and Index Attributes",
      "code": "import pandas as pd\ndf = pd.DataFrame({'a': [1, 2]})\nprint(df.columns.tolist())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DataFrame Shape, Columns, and Index Attributes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DataFrame Shape, Columns, and Index Attributes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DataFrame Shape, Columns, and Index Attributes\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'a': [1, 2]})\nprint(df.columns.tolist())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'a': [1, 2]})\nprint(df.columns.tolist())"
    ],
    "testCases": [
      {
        "id": "python-ds-35-tc-1",
        "description": "Verifies correct implementation for DataFrame Shape, Columns, and Index Attributes",
        "testFn": "code.includes('columns')"
      }
    ]
  },
  {
    "id": "python-ds-36-inspecting-datasets-head-tail-",
    "title": "36. Inspecting Datasets: head(), tail(), info(), describe()",
    "slug": "lesson-36-inspecting-datasets-head-tail-",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Generate descriptive statistics and summaries.",
    "concepts": [
      "Inspecting Datasets: head(), tail(), info(), describe()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Inspecting Datasets: head(), tail(), info(), describe() gives you complete architectural control.",
    "explanationMarkdown": "### Inspecting Datasets: head(), tail(), info(), describe()\n\nGenerate descriptive statistics and summaries.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'score': [85, 90, 78]})\nprint(df.describe())\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Datasets: head(), tail(), info(), describe()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'score': [85, 90, 78]})\nprint(df.describe())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Datasets: head(), tail(), info(), describe().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Datasets: head(), tail(), info(), describe().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Datasets: head(), tail(), info(), describe()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'score': [85, 90, 78]})\nprint(df.describe())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'score': [85, 90, 78]})\nprint(df.describe())"
    ],
    "testCases": [
      {
        "id": "python-ds-36-tc-1",
        "description": "Verifies correct implementation for Inspecting Datasets: head(), tail(), info(), describe()",
        "testFn": "code.includes('describe')"
      }
    ]
  },
  {
    "id": "python-ds-37-selecting-columns-bracket-vs-d",
    "title": "37. Selecting Columns (Bracket vs Dot Notation)",
    "slug": "lesson-37-selecting-columns-bracket-vs-d",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract single columns as Series or subsets as DataFrames.",
    "concepts": [
      "Selecting Columns (Bracket vs Dot Notation)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Selecting Columns (Bracket vs Dot Notation) gives you complete architectural control.",
    "explanationMarkdown": "### Selecting Columns (Bracket vs Dot Notation)\n\nExtract single columns as Series or subsets as DataFrames.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'city': ['Tokyo', 'Paris']})\nprint(df['city'])\n```",
    "workedExample": {
      "title": "Worked Example: Selecting Columns (Bracket vs Dot Notation)",
      "code": "import pandas as pd\ndf = pd.DataFrame({'city': ['Tokyo', 'Paris']})\nprint(df['city'])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Selecting Columns (Bracket vs Dot Notation).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Selecting Columns (Bracket vs Dot Notation).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Selecting Columns (Bracket vs Dot Notation)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'city': ['Tokyo', 'Paris']})\nprint(df['city'])\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'city': ['Tokyo', 'Paris']})\nprint(df['city'])"
    ],
    "testCases": [
      {
        "id": "python-ds-37-tc-1",
        "description": "Verifies correct implementation for Selecting Columns (Bracket vs Dot Notation)",
        "testFn": "code.includes(\"['city']\")"
      }
    ]
  },
  {
    "id": "python-ds-38-label-based-indexing-with-loc-",
    "title": "38. Label-Based Indexing with .loc[row, col]",
    "slug": "lesson-38-label-based-indexing-with-loc-",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract cells using exact index names.",
    "concepts": [
      "Label-Based Indexing with .loc[row, col]",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Label-Based Indexing with .loc[row, col] gives you complete architectural control.",
    "explanationMarkdown": "### Label-Based Indexing with .loc[row, col]\n\nExtract cells using exact index names.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'val': [10, 20]}, index=['r1', 'r2'])\nprint(df.loc['r1', 'val'])\n```",
    "workedExample": {
      "title": "Worked Example: Label-Based Indexing with .loc[row, col]",
      "code": "import pandas as pd\ndf = pd.DataFrame({'val': [10, 20]}, index=['r1', 'r2'])\nprint(df.loc['r1', 'val'])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Label-Based Indexing with .loc[row, col].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Label-Based Indexing with .loc[row, col].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Label-Based Indexing with .loc[row, col]\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'val': [10, 20]}, index=['r1', 'r2'])\nprint(df.loc['r1', 'val'])\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'val': [10, 20]}, index=['r1', 'r2'])\nprint(df.loc['r1', 'val'])"
    ],
    "testCases": [
      {
        "id": "python-ds-38-tc-1",
        "description": "Verifies correct implementation for Label-Based Indexing with .loc[row, col]",
        "testFn": "code.includes('.loc')"
      }
    ]
  },
  {
    "id": "python-ds-39-positional-indexing-with-iloc-",
    "title": "39. Positional Indexing with .iloc[row, col]",
    "slug": "lesson-39-positional-indexing-with-iloc-",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract cells using integer row and column offsets.",
    "concepts": [
      "Positional Indexing with .iloc[row, col]",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Positional Indexing with .iloc[row, col] gives you complete architectural control.",
    "explanationMarkdown": "### Positional Indexing with .iloc[row, col]\n\nExtract cells using integer row and column offsets.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'val': [10, 20]})\nprint(df.iloc[0, 0])\n```",
    "workedExample": {
      "title": "Worked Example: Positional Indexing with .iloc[row, col]",
      "code": "import pandas as pd\ndf = pd.DataFrame({'val': [10, 20]})\nprint(df.iloc[0, 0])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Positional Indexing with .iloc[row, col].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Positional Indexing with .iloc[row, col].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Positional Indexing with .iloc[row, col]\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'val': [10, 20]})\nprint(df.iloc[0, 0])\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'val': [10, 20]})\nprint(df.iloc[0, 0])"
    ],
    "testCases": [
      {
        "id": "python-ds-39-tc-1",
        "description": "Verifies correct implementation for Positional Indexing with .iloc[row, col]",
        "testFn": "code.includes('.iloc')"
      }
    ]
  },
  {
    "id": "python-ds-40-boolean-filtering-df-df-col-va",
    "title": "40. Boolean Filtering: df[df['col'] > val]",
    "slug": "lesson-40-boolean-filtering-df-df-col-va",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter records using boolean masks.",
    "concepts": [
      "Boolean Filtering: df[df['col'] > val]",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Boolean Filtering: df[df['col'] > val] gives you complete architectural control.",
    "explanationMarkdown": "### Boolean Filtering: df[df['col'] > val]\n\nFilter records using boolean masks.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'age': [16, 25, 35]})\nprint(df[df['age'] >= 18])\n```",
    "workedExample": {
      "title": "Worked Example: Boolean Filtering: df[df['col'] > val]",
      "code": "import pandas as pd\ndf = pd.DataFrame({'age': [16, 25, 35]})\nprint(df[df['age'] >= 18])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Boolean Filtering: df[df['col'] > val].",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Boolean Filtering: df[df['col'] > val].",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Boolean Filtering: df[df['col'] > val]\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'age': [16, 25, 35]})\nprint(df[df['age'] >= 18])\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'age': [16, 25, 35]})\nprint(df[df['age'] >= 18])"
    ],
    "testCases": [
      {
        "id": "python-ds-40-tc-1",
        "description": "Verifies correct implementation for Boolean Filtering: df[df['col'] > val]",
        "testFn": "code.includes('>= 18')"
      }
    ]
  },
  {
    "id": "python-ds-41-combining-filters-with-and-and",
    "title": "41. Combining Filters with & (AND) and | (OR)",
    "slug": "lesson-41-combining-filters-with-and-and",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Multi-condition boolean filtering.",
    "concepts": [
      "Combining Filters with & (AND) and | (OR)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Combining Filters with & (AND) and | (OR) gives you complete architectural control.",
    "explanationMarkdown": "### Combining Filters with & (AND) and | (OR)\n\nMulti-condition boolean filtering.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'age': [20, 30], 'active': [True, False]})\nprint(df[(df['age'] > 18) & (df['active'])])\n```",
    "workedExample": {
      "title": "Worked Example: Combining Filters with & (AND) and | (OR)",
      "code": "import pandas as pd\ndf = pd.DataFrame({'age': [20, 30], 'active': [True, False]})\nprint(df[(df['age'] > 18) & (df['active'])])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Combining Filters with & (AND) and | (OR).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Combining Filters with & (AND) and | (OR).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Combining Filters with & (AND) and | (OR)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'age': [20, 30], 'active': [True, False]})\nprint(df[(df['age'] > 18) & (df['active'])])\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'age': [20, 30], 'active': [True, False]})\nprint(df[(df['age'] > 18) & (df['active'])])"
    ],
    "testCases": [
      {
        "id": "python-ds-41-tc-1",
        "description": "Verifies correct implementation for Combining Filters with & (AND) and | (OR)",
        "testFn": "code.includes('&')"
      }
    ]
  },
  {
    "id": "python-ds-42-adding-and-modifying-columns",
    "title": "42. Adding and Modifying Columns",
    "slug": "lesson-42-adding-and-modifying-columns",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign computed series or constants to columns.",
    "concepts": [
      "Adding and Modifying Columns",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Adding and Modifying Columns gives you complete architectural control.",
    "explanationMarkdown": "### Adding and Modifying Columns\n\nAssign computed series or constants to columns.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'price': [10, 20]})\ndf['tax'] = df['price'] * 0.1\nprint(df)\n```",
    "workedExample": {
      "title": "Worked Example: Adding and Modifying Columns",
      "code": "import pandas as pd\ndf = pd.DataFrame({'price': [10, 20]})\ndf['tax'] = df['price'] * 0.1\nprint(df)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Adding and Modifying Columns.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Adding and Modifying Columns.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Adding and Modifying Columns\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'price': [10, 20]})\ndf['tax'] = df['price'] * 0.1\nprint(df)\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'price': [10, 20]})\ndf['tax'] = df['price'] * 0.1\nprint(df)"
    ],
    "testCases": [
      {
        "id": "python-ds-42-tc-1",
        "description": "Verifies correct implementation for Adding and Modifying Columns",
        "testFn": "code.includes(\"['tax']\")"
      }
    ]
  },
  {
    "id": "python-ds-43-dropping-columns-and-rows-with",
    "title": "43. Dropping Columns and Rows with drop()",
    "slug": "lesson-43-dropping-columns-and-rows-with",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Remove unnecessary columns (axis=1) or rows (axis=0).",
    "concepts": [
      "Dropping Columns and Rows with drop()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Dropping Columns and Rows with drop() gives you complete architectural control.",
    "explanationMarkdown": "### Dropping Columns and Rows with drop()\n\nRemove unnecessary columns (axis=1) or rows (axis=0).\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'a': [1], 'b': [2]})\nprint(df.drop(columns=['b']))\n```",
    "workedExample": {
      "title": "Worked Example: Dropping Columns and Rows with drop()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'a': [1], 'b': [2]})\nprint(df.drop(columns=['b']))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dropping Columns and Rows with drop().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dropping Columns and Rows with drop().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Dropping Columns and Rows with drop()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'a': [1], 'b': [2]})\nprint(df.drop(columns=['b']))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'a': [1], 'b': [2]})\nprint(df.drop(columns=['b']))"
    ],
    "testCases": [
      {
        "id": "python-ds-43-tc-1",
        "description": "Verifies correct implementation for Dropping Columns and Rows with drop()",
        "testFn": "code.includes('drop')"
      }
    ]
  },
  {
    "id": "python-ds-44-sorting-values-sort-values-and",
    "title": "44. Sorting Values: sort_values() and sort_index()",
    "slug": "lesson-44-sorting-values-sort-values-and",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Order rows based on column values.",
    "concepts": [
      "Sorting Values: sort_values() and sort_index()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Sorting Values: sort_values() and sort_index() gives you complete architectural control.",
    "explanationMarkdown": "### Sorting Values: sort_values() and sort_index()\n\nOrder rows based on column values.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'score': [70, 95, 82]})\nprint(df.sort_values(by='score', ascending=False))\n```",
    "workedExample": {
      "title": "Worked Example: Sorting Values: sort_values() and sort_index()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'score': [70, 95, 82]})\nprint(df.sort_values(by='score', ascending=False))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sorting Values: sort_values() and sort_index().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sorting Values: sort_values() and sort_index().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sorting Values: sort_values() and sort_index()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'score': [70, 95, 82]})\nprint(df.sort_values(by='score', ascending=False))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'score': [70, 95, 82]})\nprint(df.sort_values(by='score', ascending=False))"
    ],
    "testCases": [
      {
        "id": "python-ds-44-tc-1",
        "description": "Verifies correct implementation for Sorting Values: sort_values() and sort_index()",
        "testFn": "code.includes('sort_values')"
      }
    ]
  },
  {
    "id": "python-ds-45-the-settingwithcopywarning-in-",
    "title": "45. The SettingWithCopyWarning in Pandas and .copy()",
    "slug": "lesson-45-the-settingwithcopywarning-in-",
    "language": "python",
    "category": "Module 3: Pandas Series & DataFrame Mechanics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Avoid subtle chained assignment bugs.",
    "concepts": [
      "The SettingWithCopyWarning in Pandas and .copy()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: The SettingWithCopyWarning in Pandas and .copy() gives you complete architectural control.",
    "explanationMarkdown": "### The SettingWithCopyWarning in Pandas and .copy()\n\nAvoid subtle chained assignment bugs.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2]})\nsub = df[df['x'] > 1].copy()\nprint(sub)\n```",
    "workedExample": {
      "title": "Worked Example: The SettingWithCopyWarning in Pandas and .copy()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'x': [1, 2]})\nsub = df[df['x'] > 1].copy()\nprint(sub)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The SettingWithCopyWarning in Pandas and .copy().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The SettingWithCopyWarning in Pandas and .copy().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The SettingWithCopyWarning in Pandas and .copy()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'x': [1, 2]})\nsub = df[df['x'] > 1].copy()\nprint(sub)\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2]})\nsub = df[df['x'] > 1].copy()\nprint(sub)"
    ],
    "testCases": [
      {
        "id": "python-ds-45-tc-1",
        "description": "Verifies correct implementation for The SettingWithCopyWarning in Pandas and .copy()",
        "testFn": "code.includes('.copy()')"
      }
    ]
  },
  {
    "id": "python-ds-46-detecting-missing-values-isna-",
    "title": "46. Detecting Missing Values: isna() and notna()",
    "slug": "lesson-46-detecting-missing-values-isna-",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify null and NaN entries.",
    "concepts": [
      "Detecting Missing Values: isna() and notna()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Detecting Missing Values: isna() and notna() gives you complete architectural control.",
    "explanationMarkdown": "### Detecting Missing Values: isna() and notna()\n\nIdentify null and NaN entries.\n\n```python\nimport pandas as pd\ns = pd.Series([1, None, 3])\nprint(s.isna())\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Missing Values: isna() and notna()",
      "code": "import pandas as pd\ns = pd.Series([1, None, 3])\nprint(s.isna())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Missing Values: isna() and notna().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Missing Values: isna() and notna().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Missing Values: isna() and notna()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([1, None, 3])\nprint(s.isna())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([1, None, 3])\nprint(s.isna())"
    ],
    "testCases": [
      {
        "id": "python-ds-46-tc-1",
        "description": "Verifies correct implementation for Detecting Missing Values: isna() and notna()",
        "testFn": "code.includes('isna')"
      }
    ]
  },
  {
    "id": "python-ds-47-counting-nulls-df-isna-sum",
    "title": "47. Counting Nulls: df.isna().sum()",
    "slug": "lesson-47-counting-nulls-df-isna-sum",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Quantify missing data per column.",
    "concepts": [
      "Counting Nulls: df.isna().sum()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Counting Nulls: df.isna().sum() gives you complete architectural control.",
    "explanationMarkdown": "### Counting Nulls: df.isna().sum()\n\nQuantify missing data per column.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'a': [1, None], 'b': [None, None]})\nprint(df.isna().sum())\n```",
    "workedExample": {
      "title": "Worked Example: Counting Nulls: df.isna().sum()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'a': [1, None], 'b': [None, None]})\nprint(df.isna().sum())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Counting Nulls: df.isna().sum().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Counting Nulls: df.isna().sum().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Counting Nulls: df.isna().sum()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'a': [1, None], 'b': [None, None]})\nprint(df.isna().sum())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'a': [1, None], 'b': [None, None]})\nprint(df.isna().sum())"
    ],
    "testCases": [
      {
        "id": "python-ds-47-tc-1",
        "description": "Verifies correct implementation for Counting Nulls: df.isna().sum()",
        "testFn": "code.includes('sum')"
      }
    ]
  },
  {
    "id": "python-ds-48-dropping-missing-records-with-",
    "title": "48. Dropping Missing Records with dropna()",
    "slug": "lesson-48-dropping-missing-records-with-",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Discard rows or columns with null values.",
    "concepts": [
      "Dropping Missing Records with dropna()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Dropping Missing Records with dropna() gives you complete architectural control.",
    "explanationMarkdown": "### Dropping Missing Records with dropna()\n\nDiscard rows or columns with null values.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'x': [10, None, 30]})\nprint(df.dropna())\n```",
    "workedExample": {
      "title": "Worked Example: Dropping Missing Records with dropna()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'x': [10, None, 30]})\nprint(df.dropna())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dropping Missing Records with dropna().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dropping Missing Records with dropna().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Dropping Missing Records with dropna()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'x': [10, None, 30]})\nprint(df.dropna())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'x': [10, None, 30]})\nprint(df.dropna())"
    ],
    "testCases": [
      {
        "id": "python-ds-48-tc-1",
        "description": "Verifies correct implementation for Dropping Missing Records with dropna()",
        "testFn": "code.includes('dropna')"
      }
    ]
  },
  {
    "id": "python-ds-49-imputing-missing-values-with-f",
    "title": "49. Imputing Missing Values with fillna()",
    "slug": "lesson-49-imputing-missing-values-with-f",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Replace nulls with constants, means, or medians.",
    "concepts": [
      "Imputing Missing Values with fillna()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Imputing Missing Values with fillna() gives you complete architectural control.",
    "explanationMarkdown": "### Imputing Missing Values with fillna()\n\nReplace nulls with constants, means, or medians.\n\n```python\nimport pandas as pd\ns = pd.Series([10, None, 30])\nprint(s.fillna(s.mean()))\n```",
    "workedExample": {
      "title": "Worked Example: Imputing Missing Values with fillna()",
      "code": "import pandas as pd\ns = pd.Series([10, None, 30])\nprint(s.fillna(s.mean()))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Imputing Missing Values with fillna().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Imputing Missing Values with fillna().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Imputing Missing Values with fillna()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([10, None, 30])\nprint(s.fillna(s.mean()))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([10, None, 30])\nprint(s.fillna(s.mean()))"
    ],
    "testCases": [
      {
        "id": "python-ds-49-tc-1",
        "description": "Verifies correct implementation for Imputing Missing Values with fillna()",
        "testFn": "code.includes('fillna')"
      }
    ]
  },
  {
    "id": "python-ds-50-forward-fill-ffill-and-backwar",
    "title": "50. Forward Fill (ffill) and Backward Fill (bfill)",
    "slug": "lesson-50-forward-fill-ffill-and-backwar",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Propagate prior or subsequent values across time series.",
    "concepts": [
      "Forward Fill (ffill) and Backward Fill (bfill)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Forward Fill (ffill) and Backward Fill (bfill) gives you complete architectural control.",
    "explanationMarkdown": "### Forward Fill (ffill) and Backward Fill (bfill)\n\nPropagate prior or subsequent values across time series.\n\n```python\nimport pandas as pd\ns = pd.Series([1, None, None, 4])\nprint(s.ffill())\n```",
    "workedExample": {
      "title": "Worked Example: Forward Fill (ffill) and Backward Fill (bfill)",
      "code": "import pandas as pd\ns = pd.Series([1, None, None, 4])\nprint(s.ffill())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Forward Fill (ffill) and Backward Fill (bfill).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Forward Fill (ffill) and Backward Fill (bfill).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Forward Fill (ffill) and Backward Fill (bfill)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([1, None, None, 4])\nprint(s.ffill())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([1, None, None, 4])\nprint(s.ffill())"
    ],
    "testCases": [
      {
        "id": "python-ds-50-tc-1",
        "description": "Verifies correct implementation for Forward Fill (ffill) and Backward Fill (bfill)",
        "testFn": "code.includes('ffill')"
      }
    ]
  },
  {
    "id": "python-ds-51-replacing-values-with-replace",
    "title": "51. Replacing Values with replace()",
    "slug": "lesson-51-replacing-values-with-replace",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Substitute sentinel values or error codes.",
    "concepts": [
      "Replacing Values with replace()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Replacing Values with replace() gives you complete architectural control.",
    "explanationMarkdown": "### Replacing Values with replace()\n\nSubstitute sentinel values or error codes.\n\n```python\nimport pandas as pd\ns = pd.Series([-999, 10, 20])\nprint(s.replace(-999, 0))\n```",
    "workedExample": {
      "title": "Worked Example: Replacing Values with replace()",
      "code": "import pandas as pd\ns = pd.Series([-999, 10, 20])\nprint(s.replace(-999, 0))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Replacing Values with replace().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Replacing Values with replace().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Replacing Values with replace()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([-999, 10, 20])\nprint(s.replace(-999, 0))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([-999, 10, 20])\nprint(s.replace(-999, 0))"
    ],
    "testCases": [
      {
        "id": "python-ds-51-tc-1",
        "description": "Verifies correct implementation for Replacing Values with replace()",
        "testFn": "code.includes('replace')"
      }
    ]
  },
  {
    "id": "python-ds-52-string-operations-with-str-acc",
    "title": "52. String Operations with .str Accessor",
    "slug": "lesson-52-string-operations-with-str-acc",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Vectorized string manipulation on text series.",
    "concepts": [
      "String Operations with .str Accessor",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: String Operations with .str Accessor gives you complete architectural control.",
    "explanationMarkdown": "### String Operations with .str Accessor\n\nVectorized string manipulation on text series.\n\n```python\nimport pandas as pd\ns = pd.Series(['alice', 'bob'])\nprint(s.str.upper())\n```",
    "workedExample": {
      "title": "Worked Example: String Operations with .str Accessor",
      "code": "import pandas as pd\ns = pd.Series(['alice', 'bob'])\nprint(s.str.upper())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Operations with .str Accessor.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Operations with .str Accessor.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement String Operations with .str Accessor\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series(['alice', 'bob'])\nprint(s.str.upper())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series(['alice', 'bob'])\nprint(s.str.upper())"
    ],
    "testCases": [
      {
        "id": "python-ds-52-tc-1",
        "description": "Verifies correct implementation for String Operations with .str Accessor",
        "testFn": "code.includes('str.upper')"
      }
    ]
  },
  {
    "id": "python-ds-53-string-stripping-splitting-and",
    "title": "53. String Stripping, Splitting and Extraction",
    "slug": "lesson-53-string-stripping-splitting-and",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Clean whitespace and extract regex tokens.",
    "concepts": [
      "String Stripping, Splitting and Extraction",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: String Stripping, Splitting and Extraction gives you complete architectural control.",
    "explanationMarkdown": "### String Stripping, Splitting and Extraction\n\nClean whitespace and extract regex tokens.\n\n```python\nimport pandas as pd\ns = pd.Series([' user1 ', ' user2 '])\nprint(s.str.strip())\n```",
    "workedExample": {
      "title": "Worked Example: String Stripping, Splitting and Extraction",
      "code": "import pandas as pd\ns = pd.Series([' user1 ', ' user2 '])\nprint(s.str.strip())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Stripping, Splitting and Extraction.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Stripping, Splitting and Extraction.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement String Stripping, Splitting and Extraction\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([' user1 ', ' user2 '])\nprint(s.str.strip())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([' user1 ', ' user2 '])\nprint(s.str.strip())"
    ],
    "testCases": [
      {
        "id": "python-ds-53-tc-1",
        "description": "Verifies correct implementation for String Stripping, Splitting and Extraction",
        "testFn": "code.includes('str.strip')"
      }
    ]
  },
  {
    "id": "python-ds-54-regular-expressions-with-str-c",
    "title": "54. Regular Expressions with str.contains()",
    "slug": "lesson-54-regular-expressions-with-str-c",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter rows using regex pattern matches.",
    "concepts": [
      "Regular Expressions with str.contains()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Regular Expressions with str.contains() gives you complete architectural control.",
    "explanationMarkdown": "### Regular Expressions with str.contains()\n\nFilter rows using regex pattern matches.\n\n```python\nimport pandas as pd\ns = pd.Series(['admin@dev.io', 'guest'])\nprint(s[s.str.contains(r'@')])\n```",
    "workedExample": {
      "title": "Worked Example: Regular Expressions with str.contains()",
      "code": "import pandas as pd\ns = pd.Series(['admin@dev.io', 'guest'])\nprint(s[s.str.contains(r'@')])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Regular Expressions with str.contains().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Regular Expressions with str.contains().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Regular Expressions with str.contains()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series(['admin@dev.io', 'guest'])\nprint(s[s.str.contains(r'@')])\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series(['admin@dev.io', 'guest'])\nprint(s[s.str.contains(r'@')])"
    ],
    "testCases": [
      {
        "id": "python-ds-54-tc-1",
        "description": "Verifies correct implementation for Regular Expressions with str.contains()",
        "testFn": "code.includes('str.contains')"
      }
    ]
  },
  {
    "id": "python-ds-55-finding-and-removing-duplicate",
    "title": "55. Finding and Removing Duplicates with duplicated()",
    "slug": "lesson-55-finding-and-removing-duplicate",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify and drop repeated records.",
    "concepts": [
      "Finding and Removing Duplicates with duplicated()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Finding and Removing Duplicates with duplicated() gives you complete architectural control.",
    "explanationMarkdown": "### Finding and Removing Duplicates with duplicated()\n\nIdentify and drop repeated records.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2]})\nprint(df.drop_duplicates())\n```",
    "workedExample": {
      "title": "Worked Example: Finding and Removing Duplicates with duplicated()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2]})\nprint(df.drop_duplicates())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Finding and Removing Duplicates with duplicated().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Finding and Removing Duplicates with duplicated().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Finding and Removing Duplicates with duplicated()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2]})\nprint(df.drop_duplicates())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2]})\nprint(df.drop_duplicates())"
    ],
    "testCases": [
      {
        "id": "python-ds-55-tc-1",
        "description": "Verifies correct implementation for Finding and Removing Duplicates with duplicated()",
        "testFn": "code.includes('drop_duplicates')"
      }
    ]
  },
  {
    "id": "python-ds-56-converting-column-types-with-a",
    "title": "56. Converting Column Types with astype() and to_numeric()",
    "slug": "lesson-56-converting-column-types-with-a",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Coerce string numbers to proper float/int types.",
    "concepts": [
      "Converting Column Types with astype() and to_numeric()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Converting Column Types with astype() and to_numeric() gives you complete architectural control.",
    "explanationMarkdown": "### Converting Column Types with astype() and to_numeric()\n\nCoerce string numbers to proper float/int types.\n\n```python\nimport pandas as pd\ns = pd.Series(['1', '2', 'invalid'])\nprint(pd.to_numeric(s, errors='coerce'))\n```",
    "workedExample": {
      "title": "Worked Example: Converting Column Types with astype() and to_numeric()",
      "code": "import pandas as pd\ns = pd.Series(['1', '2', 'invalid'])\nprint(pd.to_numeric(s, errors='coerce'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Converting Column Types with astype() and to_numeric().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Converting Column Types with astype() and to_numeric().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Converting Column Types with astype() and to_numeric()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series(['1', '2', 'invalid'])\nprint(pd.to_numeric(s, errors='coerce'))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series(['1', '2', 'invalid'])\nprint(pd.to_numeric(s, errors='coerce'))"
    ],
    "testCases": [
      {
        "id": "python-ds-56-tc-1",
        "description": "Verifies correct implementation for Converting Column Types with astype() and to_numeric()",
        "testFn": "code.includes('to_numeric')"
      }
    ]
  },
  {
    "id": "python-ds-57-date-parsing-with-pd-to-dateti",
    "title": "57. Date Parsing with pd.to_datetime()",
    "slug": "lesson-57-date-parsing-with-pd-to-dateti",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert ISO strings to datetime timestamps.",
    "concepts": [
      "Date Parsing with pd.to_datetime()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Date Parsing with pd.to_datetime() gives you complete architectural control.",
    "explanationMarkdown": "### Date Parsing with pd.to_datetime()\n\nConvert ISO strings to datetime timestamps.\n\n```python\nimport pandas as pd\nprint(pd.to_datetime('2026-11-15'))\n```",
    "workedExample": {
      "title": "Worked Example: Date Parsing with pd.to_datetime()",
      "code": "import pandas as pd\nprint(pd.to_datetime('2026-11-15'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Date Parsing with pd.to_datetime().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Date Parsing with pd.to_datetime().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Date Parsing with pd.to_datetime()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint(pd.to_datetime('2026-11-15'))\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint(pd.to_datetime('2026-11-15'))"
    ],
    "testCases": [
      {
        "id": "python-ds-57-tc-1",
        "description": "Verifies correct implementation for Date Parsing with pd.to_datetime()",
        "testFn": "code.includes('to_datetime')"
      }
    ]
  },
  {
    "id": "python-ds-58-renaming-columns-with-rename-c",
    "title": "58. Renaming Columns with rename(columns={...})",
    "slug": "lesson-58-renaming-columns-with-rename-c",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Standardize column naming conventions.",
    "concepts": [
      "Renaming Columns with rename(columns={...})",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Renaming Columns with rename(columns={...}) gives you complete architectural control.",
    "explanationMarkdown": "### Renaming Columns with rename(columns={...})\n\nStandardize column naming conventions.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'OLD_COL': [1]})\nprint(df.rename(columns={'OLD_COL': 'new_col'}))\n```",
    "workedExample": {
      "title": "Worked Example: Renaming Columns with rename(columns={...})",
      "code": "import pandas as pd\ndf = pd.DataFrame({'OLD_COL': [1]})\nprint(df.rename(columns={'OLD_COL': 'new_col'}))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Renaming Columns with rename(columns={...}).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Renaming Columns with rename(columns={...}).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Renaming Columns with rename(columns={...})\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'OLD_COL': [1]})\nprint(df.rename(columns={'OLD_COL': 'new_col'}))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'OLD_COL': [1]})\nprint(df.rename(columns={'OLD_COL': 'new_col'}))"
    ],
    "testCases": [
      {
        "id": "python-ds-58-tc-1",
        "description": "Verifies correct implementation for Renaming Columns with rename(columns={...})",
        "testFn": "code.includes('rename')"
      }
    ]
  },
  {
    "id": "python-ds-59-binning-continuous-data-with-p",
    "title": "59. Binning Continuous Data with pd.cut() and pd.qcut()",
    "slug": "lesson-59-binning-continuous-data-with-p",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Discretize numerical ranges into category buckets.",
    "concepts": [
      "Binning Continuous Data with pd.cut() and pd.qcut()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Binning Continuous Data with pd.cut() and pd.qcut() gives you complete architectural control.",
    "explanationMarkdown": "### Binning Continuous Data with pd.cut() and pd.qcut()\n\nDiscretize numerical ranges into category buckets.\n\n```python\nimport pandas as pd\nages = pd.Series([12, 25, 45, 68])\nprint(pd.cut(ages, bins=[0, 18, 65, 100], labels=['Child', 'Adult', 'Senior']))\n```",
    "workedExample": {
      "title": "Worked Example: Binning Continuous Data with pd.cut() and pd.qcut()",
      "code": "import pandas as pd\nages = pd.Series([12, 25, 45, 68])\nprint(pd.cut(ages, bins=[0, 18, 65, 100], labels=['Child', 'Adult', 'Senior']))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Binning Continuous Data with pd.cut() and pd.qcut().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Binning Continuous Data with pd.cut() and pd.qcut().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Binning Continuous Data with pd.cut() and pd.qcut()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nages = pd.Series([12, 25, 45, 68])\nprint(pd.cut(ages, bins=[0, 18, 65, 100], labels=['Child', 'Adult', 'Senior']))\n",
    "hints": [
      "Write:\nimport pandas as pd\nages = pd.Series([12, 25, 45, 68])\nprint(pd.cut(ages, bins=[0, 18, 65, 100], labels=['Child', 'Adult', 'Senior']))"
    ],
    "testCases": [
      {
        "id": "python-ds-59-tc-1",
        "description": "Verifies correct implementation for Binning Continuous Data with pd.cut() and pd.qcut()",
        "testFn": "code.includes('cut')"
      }
    ]
  },
  {
    "id": "python-ds-60-one-hot-encoding-with-pd-get-d",
    "title": "60. One-Hot Encoding with pd.get_dummies()",
    "slug": "lesson-60-one-hot-encoding-with-pd-get-d",
    "language": "python",
    "category": "Module 4: Data Cleaning & Missing Value Imputation",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert categorical columns to indicator dummy matrices.",
    "concepts": [
      "One-Hot Encoding with pd.get_dummies()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: One-Hot Encoding with pd.get_dummies() gives you complete architectural control.",
    "explanationMarkdown": "### One-Hot Encoding with pd.get_dummies()\n\nConvert categorical columns to indicator dummy matrices.\n\n```python\nimport pandas as pd\ns = pd.Series(['red', 'blue', 'red'])\nprint(pd.get_dummies(s))\n```",
    "workedExample": {
      "title": "Worked Example: One-Hot Encoding with pd.get_dummies()",
      "code": "import pandas as pd\ns = pd.Series(['red', 'blue', 'red'])\nprint(pd.get_dummies(s))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for One-Hot Encoding with pd.get_dummies().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of One-Hot Encoding with pd.get_dummies().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement One-Hot Encoding with pd.get_dummies()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series(['red', 'blue', 'red'])\nprint(pd.get_dummies(s))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series(['red', 'blue', 'red'])\nprint(pd.get_dummies(s))"
    ],
    "testCases": [
      {
        "id": "python-ds-60-tc-1",
        "description": "Verifies correct implementation for One-Hot Encoding with pd.get_dummies()",
        "testFn": "code.includes('get_dummies')"
      }
    ]
  },
  {
    "id": "python-ds-61-the-split-apply-combine-patter",
    "title": "61. The Split-Apply-Combine Pattern in Pandas",
    "slug": "lesson-61-the-split-apply-combine-patter",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decompose, calculate metrics, and reassemble.",
    "concepts": [
      "The Split-Apply-Combine Pattern in Pandas",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Split-Apply-Combine Pattern in Pandas gives you complete architectural control.",
    "explanationMarkdown": "### The Split-Apply-Combine Pattern in Pandas\n\nDecompose, calculate metrics, and reassemble.\n\n```python\nimport pandas as pd\nprint('GroupBy initialized')\n```",
    "workedExample": {
      "title": "Worked Example: The Split-Apply-Combine Pattern in Pandas",
      "code": "import pandas as pd\nprint('GroupBy initialized')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Split-Apply-Combine Pattern in Pandas.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Split-Apply-Combine Pattern in Pandas.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Split-Apply-Combine Pattern in Pandas\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint('GroupBy initialized')\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint('GroupBy initialized')"
    ],
    "testCases": [
      {
        "id": "python-ds-61-tc-1",
        "description": "Verifies correct implementation for The Split-Apply-Combine Pattern in Pandas",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-62-basic-groupby-df-groupby-col-m",
    "title": "62. Basic GroupBy: df.groupby('col').mean()",
    "slug": "lesson-62-basic-groupby-df-groupby-col-m",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Aggregate numeric metrics across categorical buckets.",
    "concepts": [
      "Basic GroupBy: df.groupby('col').mean()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Basic GroupBy: df.groupby('col').mean() gives you complete architectural control.",
    "explanationMarkdown": "### Basic GroupBy: df.groupby('col').mean()\n\nAggregate numeric metrics across categorical buckets.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['HR', 'IT', 'IT'], 'salary': [50, 70, 80]})\nprint(df.groupby('dept')['salary'].mean())\n```",
    "workedExample": {
      "title": "Worked Example: Basic GroupBy: df.groupby('col').mean()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'dept': ['HR', 'IT', 'IT'], 'salary': [50, 70, 80]})\nprint(df.groupby('dept')['salary'].mean())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Basic GroupBy: df.groupby('col').mean().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Basic GroupBy: df.groupby('col').mean().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Basic GroupBy: df.groupby('col').mean()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'dept': ['HR', 'IT', 'IT'], 'salary': [50, 70, 80]})\nprint(df.groupby('dept')['salary'].mean())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['HR', 'IT', 'IT'], 'salary': [50, 70, 80]})\nprint(df.groupby('dept')['salary'].mean())"
    ],
    "testCases": [
      {
        "id": "python-ds-62-tc-1",
        "description": "Verifies correct implementation for Basic GroupBy: df.groupby('col').mean()",
        "testFn": "code.includes('groupby')"
      }
    ]
  },
  {
    "id": "python-ds-63-multiple-aggregations-with-agg",
    "title": "63. Multiple Aggregations with agg(['mean', 'sum'])",
    "slug": "lesson-63-multiple-aggregations-with-agg",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute multiple statistical summaries simultaneously.",
    "concepts": [
      "Multiple Aggregations with agg(['mean', 'sum'])",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Multiple Aggregations with agg(['mean', 'sum']) gives you complete architectural control.",
    "explanationMarkdown": "### Multiple Aggregations with agg(['mean', 'sum'])\n\nCompute multiple statistical summaries simultaneously.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'A', 'B'], 'val': [10, 20, 30]})\nprint(df.groupby('grp')['val'].agg(['mean', 'count']))\n```",
    "workedExample": {
      "title": "Worked Example: Multiple Aggregations with agg(['mean', 'sum'])",
      "code": "import pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'A', 'B'], 'val': [10, 20, 30]})\nprint(df.groupby('grp')['val'].agg(['mean', 'count']))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Multiple Aggregations with agg(['mean', 'sum']).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Multiple Aggregations with agg(['mean', 'sum']).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Multiple Aggregations with agg(['mean', 'sum'])\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'A', 'B'], 'val': [10, 20, 30]})\nprint(df.groupby('grp')['val'].agg(['mean', 'count']))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'A', 'B'], 'val': [10, 20, 30]})\nprint(df.groupby('grp')['val'].agg(['mean', 'count']))"
    ],
    "testCases": [
      {
        "id": "python-ds-63-tc-1",
        "description": "Verifies correct implementation for Multiple Aggregations with agg(['mean', 'sum'])",
        "testFn": "code.includes('.agg(')"
      }
    ]
  },
  {
    "id": "python-ds-64-column-specific-aggregations-w",
    "title": "64. Column-Specific Aggregations with agg({'col': 'func'})",
    "slug": "lesson-64-column-specific-aggregations-w",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Apply distinct reduction functions per column.",
    "concepts": [
      "Column-Specific Aggregations with agg({'col': 'func'})",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Column-Specific Aggregations with agg({'col': 'func'}) gives you complete architectural control.",
    "explanationMarkdown": "### Column-Specific Aggregations with agg({'col': 'func'})\n\nApply distinct reduction functions per column.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'B'], 'x': [1, 2], 'y': [10, 20]})\nprint(df.groupby('grp').agg({'x': 'sum', 'y': 'mean'}))\n```",
    "workedExample": {
      "title": "Worked Example: Column-Specific Aggregations with agg({'col': 'func'})",
      "code": "import pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'B'], 'x': [1, 2], 'y': [10, 20]})\nprint(df.groupby('grp').agg({'x': 'sum', 'y': 'mean'}))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Column-Specific Aggregations with agg({'col': 'func'}).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Column-Specific Aggregations with agg({'col': 'func'}).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Column-Specific Aggregations with agg({'col': 'func'})\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'B'], 'x': [1, 2], 'y': [10, 20]})\nprint(df.groupby('grp').agg({'x': 'sum', 'y': 'mean'}))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'grp': ['A', 'B'], 'x': [1, 2], 'y': [10, 20]})\nprint(df.groupby('grp').agg({'x': 'sum', 'y': 'mean'}))"
    ],
    "testCases": [
      {
        "id": "python-ds-64-tc-1",
        "description": "Verifies correct implementation for Column-Specific Aggregations with agg({'col': 'func'})",
        "testFn": "code.includes('.agg({')"
      }
    ]
  },
  {
    "id": "python-ds-65-grouping-by-multiple-columns-g",
    "title": "65. Grouping by Multiple Columns: groupby(['col1', 'col2'])",
    "slug": "lesson-65-grouping-by-multiple-columns-g",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hierarchical grouping across multi-dimensional criteria.",
    "concepts": [
      "Grouping by Multiple Columns: groupby(['col1', 'col2'])",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Grouping by Multiple Columns: groupby(['col1', 'col2']) gives you complete architectural control.",
    "explanationMarkdown": "### Grouping by Multiple Columns: groupby(['col1', 'col2'])\n\nHierarchical grouping across multi-dimensional criteria.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT'], 'level': ['Junior', 'Senior'], 'salary': [60, 90]})\nprint(df.groupby(['dept', 'level'])['salary'].mean())\n```",
    "workedExample": {
      "title": "Worked Example: Grouping by Multiple Columns: groupby(['col1', 'col2'])",
      "code": "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT'], 'level': ['Junior', 'Senior'], 'salary': [60, 90]})\nprint(df.groupby(['dept', 'level'])['salary'].mean())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Grouping by Multiple Columns: groupby(['col1', 'col2']).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Grouping by Multiple Columns: groupby(['col1', 'col2']).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Grouping by Multiple Columns: groupby(['col1', 'col2'])\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT'], 'level': ['Junior', 'Senior'], 'salary': [60, 90]})\nprint(df.groupby(['dept', 'level'])['salary'].mean())\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT'], 'level': ['Junior', 'Senior'], 'salary': [60, 90]})\nprint(df.groupby(['dept', 'level'])['salary'].mean())"
    ],
    "testCases": [
      {
        "id": "python-ds-65-tc-1",
        "description": "Verifies correct implementation for Grouping by Multiple Columns: groupby(['col1', 'col2'])",
        "testFn": "code.includes('groupby')"
      }
    ]
  },
  {
    "id": "python-ds-66-the-reset-index-method-on-grou",
    "title": "66. The reset_index() Method on Grouped Outputs",
    "slug": "lesson-66-the-reset-index-method-on-grou",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flatten MultiIndex grouped outputs back into standard columns.",
    "concepts": [
      "The reset_index() Method on Grouped Outputs",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: The reset_index() Method on Grouped Outputs gives you complete architectural control.",
    "explanationMarkdown": "### The reset_index() Method on Grouped Outputs\n\nFlatten MultiIndex grouped outputs back into standard columns.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'g': ['A', 'B'], 'v': [1, 2]})\nres = df.groupby('g')['v'].mean().reset_index()\nprint(res)\n```",
    "workedExample": {
      "title": "Worked Example: The reset_index() Method on Grouped Outputs",
      "code": "import pandas as pd\ndf = pd.DataFrame({'g': ['A', 'B'], 'v': [1, 2]})\nres = df.groupby('g')['v'].mean().reset_index()\nprint(res)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The reset_index() Method on Grouped Outputs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The reset_index() Method on Grouped Outputs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The reset_index() Method on Grouped Outputs\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'g': ['A', 'B'], 'v': [1, 2]})\nres = df.groupby('g')['v'].mean().reset_index()\nprint(res)\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'g': ['A', 'B'], 'v': [1, 2]})\nres = df.groupby('g')['v'].mean().reset_index()\nprint(res)"
    ],
    "testCases": [
      {
        "id": "python-ds-66-tc-1",
        "description": "Verifies correct implementation for The reset_index() Method on Grouped Outputs",
        "testFn": "code.includes('reset_index')"
      }
    ]
  },
  {
    "id": "python-ds-67-iterating-over-groups-with-for",
    "title": "67. Iterating Over Groups with for name, group in groupby",
    "slug": "lesson-67-iterating-over-groups-with-for",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect or process individual partition dataframes.",
    "concepts": [
      "Iterating Over Groups with for name, group in groupby",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Iterating Over Groups with for name, group in groupby gives you complete architectural control.",
    "explanationMarkdown": "### Iterating Over Groups with for name, group in groupby\n\nInspect or process individual partition dataframes.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'cat': ['A', 'B'], 'val': [1, 2]})\nfor name, grp in df.groupby('cat'):\n    print(name, len(grp))\n```",
    "workedExample": {
      "title": "Worked Example: Iterating Over Groups with for name, group in groupby",
      "code": "import pandas as pd\ndf = pd.DataFrame({'cat': ['A', 'B'], 'val': [1, 2]})\nfor name, grp in df.groupby('cat'):\n    print(name, len(grp))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating Over Groups with for name, group in groupby.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating Over Groups with for name, group in groupby.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Iterating Over Groups with for name, group in groupby\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'cat': ['A', 'B'], 'val': [1, 2]})\nfor name, grp in df.groupby('cat'):\n    print(name, len(grp))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'cat': ['A', 'B'], 'val': [1, 2]})\nfor name, grp in df.groupby('cat'):\n    print(name, len(grp))"
    ],
    "testCases": [
      {
        "id": "python-ds-67-tc-1",
        "description": "Verifies correct implementation for Iterating Over Groups with for name, group in groupby",
        "testFn": "code.includes('groupby')"
      }
    ]
  },
  {
    "id": "python-ds-68-group-wise-transformations-wit",
    "title": "68. Group-Wise Transformations with transform()",
    "slug": "lesson-68-group-wise-transformations-wit",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Broadcast group aggregations back to original row dimensions.",
    "concepts": [
      "Group-Wise Transformations with transform()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Group-Wise Transformations with transform() gives you complete architectural control.",
    "explanationMarkdown": "### Group-Wise Transformations with transform()\n\nBroadcast group aggregations back to original row dimensions.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT', 'HR'], 'salary': [80, 100, 60]})\ndf['dept_avg'] = df.groupby('dept')['salary'].transform('mean')\nprint(df)\n```",
    "workedExample": {
      "title": "Worked Example: Group-Wise Transformations with transform()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT', 'HR'], 'salary': [80, 100, 60]})\ndf['dept_avg'] = df.groupby('dept')['salary'].transform('mean')\nprint(df)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Group-Wise Transformations with transform().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Group-Wise Transformations with transform().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Group-Wise Transformations with transform()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT', 'HR'], 'salary': [80, 100, 60]})\ndf['dept_avg'] = df.groupby('dept')['salary'].transform('mean')\nprint(df)\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT', 'HR'], 'salary': [80, 100, 60]})\ndf['dept_avg'] = df.groupby('dept')['salary'].transform('mean')\nprint(df)"
    ],
    "testCases": [
      {
        "id": "python-ds-68-tc-1",
        "description": "Verifies correct implementation for Group-Wise Transformations with transform()",
        "testFn": "code.includes('transform')"
      }
    ]
  },
  {
    "id": "python-ds-69-filtering-groups-with-filter",
    "title": "69. Filtering Groups with filter()",
    "slug": "lesson-69-filtering-groups-with-filter",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Discard entire groups failing aggregate conditions.",
    "concepts": [
      "Filtering Groups with filter()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Filtering Groups with filter() gives you complete architectural control.",
    "explanationMarkdown": "### Filtering Groups with filter()\n\nDiscard entire groups failing aggregate conditions.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'team': ['A', 'A', 'B'], 'score': [10, 20, 5]})\nprint(df.groupby('team').filter(lambda g: g['score'].sum() > 20))\n```",
    "workedExample": {
      "title": "Worked Example: Filtering Groups with filter()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'team': ['A', 'A', 'B'], 'score': [10, 20, 5]})\nprint(df.groupby('team').filter(lambda g: g['score'].sum() > 20))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering Groups with filter().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering Groups with filter().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering Groups with filter()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'team': ['A', 'A', 'B'], 'score': [10, 20, 5]})\nprint(df.groupby('team').filter(lambda g: g['score'].sum() > 20))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'team': ['A', 'A', 'B'], 'score': [10, 20, 5]})\nprint(df.groupby('team').filter(lambda g: g['score'].sum() > 20))"
    ],
    "testCases": [
      {
        "id": "python-ds-69-tc-1",
        "description": "Verifies correct implementation for Filtering Groups with filter()",
        "testFn": "code.includes('filter')"
      }
    ]
  },
  {
    "id": "python-ds-70-cross-tabulation-with-pd-cross",
    "title": "70. Cross-Tabulation with pd.crosstab()",
    "slug": "lesson-70-cross-tabulation-with-pd-cross",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Frequency tables showing interaction between variables.",
    "concepts": [
      "Cross-Tabulation with pd.crosstab()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Cross-Tabulation with pd.crosstab() gives you complete architectural control.",
    "explanationMarkdown": "### Cross-Tabulation with pd.crosstab()\n\nFrequency tables showing interaction between variables.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'gender': ['M', 'F', 'M'], 'voted': ['Yes', 'No', 'Yes']})\nprint(pd.crosstab(df['gender'], df['voted']))\n```",
    "workedExample": {
      "title": "Worked Example: Cross-Tabulation with pd.crosstab()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'gender': ['M', 'F', 'M'], 'voted': ['Yes', 'No', 'Yes']})\nprint(pd.crosstab(df['gender'], df['voted']))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cross-Tabulation with pd.crosstab().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cross-Tabulation with pd.crosstab().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Cross-Tabulation with pd.crosstab()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'gender': ['M', 'F', 'M'], 'voted': ['Yes', 'No', 'Yes']})\nprint(pd.crosstab(df['gender'], df['voted']))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'gender': ['M', 'F', 'M'], 'voted': ['Yes', 'No', 'Yes']})\nprint(pd.crosstab(df['gender'], df['voted']))"
    ],
    "testCases": [
      {
        "id": "python-ds-70-tc-1",
        "description": "Verifies correct implementation for Cross-Tabulation with pd.crosstab()",
        "testFn": "code.includes('crosstab')"
      }
    ]
  },
  {
    "id": "python-ds-71-creating-pivot-tables-with-piv",
    "title": "71. Creating Pivot Tables with pivot_table()",
    "slug": "lesson-71-creating-pivot-tables-with-piv",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Excel-style multidimensional aggregation tables.",
    "concepts": [
      "Creating Pivot Tables with pivot_table()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Pivot Tables with pivot_table() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Pivot Tables with pivot_table()\n\nExcel-style multidimensional aggregation tables.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'HR'], 'year': [2025, 2025], 'cost': [100, 50]})\nprint(df.pivot_table(index='dept', columns='year', values='cost', aggfunc='sum'))\n```",
    "workedExample": {
      "title": "Worked Example: Creating Pivot Tables with pivot_table()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'HR'], 'year': [2025, 2025], 'cost': [100, 50]})\nprint(df.pivot_table(index='dept', columns='year', values='cost', aggfunc='sum'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Pivot Tables with pivot_table().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Pivot Tables with pivot_table().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Pivot Tables with pivot_table()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'HR'], 'year': [2025, 2025], 'cost': [100, 50]})\nprint(df.pivot_table(index='dept', columns='year', values='cost', aggfunc='sum'))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'HR'], 'year': [2025, 2025], 'cost': [100, 50]})\nprint(df.pivot_table(index='dept', columns='year', values='cost', aggfunc='sum'))"
    ],
    "testCases": [
      {
        "id": "python-ds-71-tc-1",
        "description": "Verifies correct implementation for Creating Pivot Tables with pivot_table()",
        "testFn": "code.includes('pivot_table')"
      }
    ]
  },
  {
    "id": "python-ds-72-value-counts-value-counts-norm",
    "title": "72. Value Counts: value_counts(normalize=True)",
    "slug": "lesson-72-value-counts-value-counts-norm",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Calculate frequency counts and proportional shares.",
    "concepts": [
      "Value Counts: value_counts(normalize=True)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Value Counts: value_counts(normalize=True) gives you complete architectural control.",
    "explanationMarkdown": "### Value Counts: value_counts(normalize=True)\n\nCalculate frequency counts and proportional shares.\n\n```python\nimport pandas as pd\ns = pd.Series(['apple', 'banana', 'apple'])\nprint(s.value_counts(normalize=True))\n```",
    "workedExample": {
      "title": "Worked Example: Value Counts: value_counts(normalize=True)",
      "code": "import pandas as pd\ns = pd.Series(['apple', 'banana', 'apple'])\nprint(s.value_counts(normalize=True))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Value Counts: value_counts(normalize=True).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Value Counts: value_counts(normalize=True).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Value Counts: value_counts(normalize=True)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series(['apple', 'banana', 'apple'])\nprint(s.value_counts(normalize=True))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series(['apple', 'banana', 'apple'])\nprint(s.value_counts(normalize=True))"
    ],
    "testCases": [
      {
        "id": "python-ds-72-tc-1",
        "description": "Verifies correct implementation for Value Counts: value_counts(normalize=True)",
        "testFn": "code.includes('value_counts')"
      }
    ]
  },
  {
    "id": "python-ds-73-applying-custom-functions-with",
    "title": "73. Applying Custom Functions with apply()",
    "slug": "lesson-73-applying-custom-functions-with",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Row-wise or column-wise custom user logic.",
    "concepts": [
      "Applying Custom Functions with apply()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Applying Custom Functions with apply() gives you complete architectural control.",
    "explanationMarkdown": "### Applying Custom Functions with apply()\n\nRow-wise or column-wise custom user logic.\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3]})\nprint(df['x'].apply(lambda v: v ** 2))\n```",
    "workedExample": {
      "title": "Worked Example: Applying Custom Functions with apply()",
      "code": "import pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3]})\nprint(df['x'].apply(lambda v: v ** 2))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Applying Custom Functions with apply().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Applying Custom Functions with apply().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Applying Custom Functions with apply()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3]})\nprint(df['x'].apply(lambda v: v ** 2))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3]})\nprint(df['x'].apply(lambda v: v ** 2))"
    ],
    "testCases": [
      {
        "id": "python-ds-73-tc-1",
        "description": "Verifies correct implementation for Applying Custom Functions with apply()",
        "testFn": "code.includes('apply')"
      }
    ]
  },
  {
    "id": "python-ds-74-ranking-records-with-rank",
    "title": "74. Ranking Records with rank()",
    "slug": "lesson-74-ranking-records-with-rank",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Assign percentiles and ordinal ranks.",
    "concepts": [
      "Ranking Records with rank()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Ranking Records with rank() gives you complete architectural control.",
    "explanationMarkdown": "### Ranking Records with rank()\n\nAssign percentiles and ordinal ranks.\n\n```python\nimport pandas as pd\ns = pd.Series([100, 50, 75])\nprint(s.rank(ascending=False))\n```",
    "workedExample": {
      "title": "Worked Example: Ranking Records with rank()",
      "code": "import pandas as pd\ns = pd.Series([100, 50, 75])\nprint(s.rank(ascending=False))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ranking Records with rank().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ranking Records with rank().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Ranking Records with rank()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([100, 50, 75])\nprint(s.rank(ascending=False))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([100, 50, 75])\nprint(s.rank(ascending=False))"
    ],
    "testCases": [
      {
        "id": "python-ds-74-tc-1",
        "description": "Verifies correct implementation for Ranking Records with rank()",
        "testFn": "code.includes('rank')"
      }
    ]
  },
  {
    "id": "python-ds-75-cumulative-metrics-cumsum-cump",
    "title": "75. Cumulative Metrics: cumsum(), cumprod(), cummax()",
    "slug": "lesson-75-cumulative-metrics-cumsum-cump",
    "language": "python",
    "category": "Module 5: GroupBy, Aggregations & Pivot Tables",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Running totals and cumulative progression metrics.",
    "concepts": [
      "Cumulative Metrics: cumsum(), cumprod(), cummax()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Cumulative Metrics: cumsum(), cumprod(), cummax() gives you complete architectural control.",
    "explanationMarkdown": "### Cumulative Metrics: cumsum(), cumprod(), cummax()\n\nRunning totals and cumulative progression metrics.\n\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30])\nprint(s.cumsum())\n```",
    "workedExample": {
      "title": "Worked Example: Cumulative Metrics: cumsum(), cumprod(), cummax()",
      "code": "import pandas as pd\ns = pd.Series([10, 20, 30])\nprint(s.cumsum())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Cumulative Metrics: cumsum(), cumprod(), cummax().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Cumulative Metrics: cumsum(), cumprod(), cummax().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Cumulative Metrics: cumsum(), cumprod(), cummax()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([10, 20, 30])\nprint(s.cumsum())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([10, 20, 30])\nprint(s.cumsum())"
    ],
    "testCases": [
      {
        "id": "python-ds-75-tc-1",
        "description": "Verifies correct implementation for Cumulative Metrics: cumsum(), cumprod(), cummax()",
        "testFn": "code.includes('cumsum')"
      }
    ]
  },
  {
    "id": "python-ds-76-relational-joins-with-pd-merge",
    "title": "76. Relational Joins with pd.merge()",
    "slug": "lesson-76-relational-joins-with-pd-merge",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Join two dataframes on common key columns.",
    "concepts": [
      "Relational Joins with pd.merge()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Relational Joins with pd.merge() gives you complete architectural control.",
    "explanationMarkdown": "### Relational Joins with pd.merge()\n\nJoin two dataframes on common key columns.\n\n```python\nimport pandas as pd\nu = pd.DataFrame({'id': [1, 2], 'name': ['A', 'B']})\no = pd.DataFrame({'id': [1, 2], 'total': [99, 150]})\nprint(pd.merge(u, o, on='id'))\n```",
    "workedExample": {
      "title": "Worked Example: Relational Joins with pd.merge()",
      "code": "import pandas as pd\nu = pd.DataFrame({'id': [1, 2], 'name': ['A', 'B']})\no = pd.DataFrame({'id': [1, 2], 'total': [99, 150]})\nprint(pd.merge(u, o, on='id'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Relational Joins with pd.merge().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Relational Joins with pd.merge().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Relational Joins with pd.merge()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nu = pd.DataFrame({'id': [1, 2], 'name': ['A', 'B']})\no = pd.DataFrame({'id': [1, 2], 'total': [99, 150]})\nprint(pd.merge(u, o, on='id'))\n",
    "hints": [
      "Write:\nimport pandas as pd\nu = pd.DataFrame({'id': [1, 2], 'name': ['A', 'B']})\no = pd.DataFrame({'id': [1, 2], 'total': [99, 150]})\nprint(pd.merge(u, o, on='id'))"
    ],
    "testCases": [
      {
        "id": "python-ds-76-tc-1",
        "description": "Verifies correct implementation for Relational Joins with pd.merge()",
        "testFn": "code.includes('merge')"
      }
    ]
  },
  {
    "id": "python-ds-77-join-types-inner-left-right-an",
    "title": "77. Join Types: Inner, Left, Right, and Outer",
    "slug": "lesson-77-join-types-inner-left-right-an",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Control retention of unmatched records.",
    "concepts": [
      "Join Types: Inner, Left, Right, and Outer",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Join Types: Inner, Left, Right, and Outer gives you complete architectural control.",
    "explanationMarkdown": "### Join Types: Inner, Left, Right, and Outer\n\nControl retention of unmatched records.\n\n```python\nimport pandas as pd\na = pd.DataFrame({'k': [1, 2], 'val_a': ['x', 'y']})\nb = pd.DataFrame({'k': [2, 3], 'val_b': ['m', 'n']})\nprint(pd.merge(a, b, on='k', how='left'))\n```",
    "workedExample": {
      "title": "Worked Example: Join Types: Inner, Left, Right, and Outer",
      "code": "import pandas as pd\na = pd.DataFrame({'k': [1, 2], 'val_a': ['x', 'y']})\nb = pd.DataFrame({'k': [2, 3], 'val_b': ['m', 'n']})\nprint(pd.merge(a, b, on='k', how='left'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Join Types: Inner, Left, Right, and Outer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Join Types: Inner, Left, Right, and Outer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Join Types: Inner, Left, Right, and Outer\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\na = pd.DataFrame({'k': [1, 2], 'val_a': ['x', 'y']})\nb = pd.DataFrame({'k': [2, 3], 'val_b': ['m', 'n']})\nprint(pd.merge(a, b, on='k', how='left'))\n",
    "hints": [
      "Write:\nimport pandas as pd\na = pd.DataFrame({'k': [1, 2], 'val_a': ['x', 'y']})\nb = pd.DataFrame({'k': [2, 3], 'val_b': ['m', 'n']})\nprint(pd.merge(a, b, on='k', how='left'))"
    ],
    "testCases": [
      {
        "id": "python-ds-77-tc-1",
        "description": "Verifies correct implementation for Join Types: Inner, Left, Right, and Outer",
        "testFn": "code.includes(\"how='left'\")"
      }
    ]
  },
  {
    "id": "python-ds-78-joining-on-non-identical-colum",
    "title": "78. Joining on Non-Identical Column Names (left_on, right_on)",
    "slug": "lesson-78-joining-on-non-identical-colum",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Match disparate foreign key column names.",
    "concepts": [
      "Joining on Non-Identical Column Names (left_on, right_on)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Joining on Non-Identical Column Names (left_on, right_on) gives you complete architectural control.",
    "explanationMarkdown": "### Joining on Non-Identical Column Names (left_on, right_on)\n\nMatch disparate foreign key column names.\n\n```python\nimport pandas as pd\na = pd.DataFrame({'user_id': [1]})\nb = pd.DataFrame({'customer_id': [1], 'score': [100]})\nprint(pd.merge(a, b, left_on='user_id', right_on='customer_id'))\n```",
    "workedExample": {
      "title": "Worked Example: Joining on Non-Identical Column Names (left_on, right_on)",
      "code": "import pandas as pd\na = pd.DataFrame({'user_id': [1]})\nb = pd.DataFrame({'customer_id': [1], 'score': [100]})\nprint(pd.merge(a, b, left_on='user_id', right_on='customer_id'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Joining on Non-Identical Column Names (left_on, right_on).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Joining on Non-Identical Column Names (left_on, right_on).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Joining on Non-Identical Column Names (left_on, right_on)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\na = pd.DataFrame({'user_id': [1]})\nb = pd.DataFrame({'customer_id': [1], 'score': [100]})\nprint(pd.merge(a, b, left_on='user_id', right_on='customer_id'))\n",
    "hints": [
      "Write:\nimport pandas as pd\na = pd.DataFrame({'user_id': [1]})\nb = pd.DataFrame({'customer_id': [1], 'score': [100]})\nprint(pd.merge(a, b, left_on='user_id', right_on='customer_id'))"
    ],
    "testCases": [
      {
        "id": "python-ds-78-tc-1",
        "description": "Verifies correct implementation for Joining on Non-Identical Column Names (left_on, right_on)",
        "testFn": "code.includes('left_on')"
      }
    ]
  },
  {
    "id": "python-ds-79-concatenating-dataframes-with-",
    "title": "79. Concatenating DataFrames with pd.concat()",
    "slug": "lesson-79-concatenating-dataframes-with-",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stack tables along rows (axis=0) or columns (axis=1).",
    "concepts": [
      "Concatenating DataFrames with pd.concat()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Concatenating DataFrames with pd.concat() gives you complete architectural control.",
    "explanationMarkdown": "### Concatenating DataFrames with pd.concat()\n\nStack tables along rows (axis=0) or columns (axis=1).\n\n```python\nimport pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]})\ndf2 = pd.DataFrame({'a': [3, 4]})\nprint(pd.concat([df1, df2], ignore_index=True))\n```",
    "workedExample": {
      "title": "Worked Example: Concatenating DataFrames with pd.concat()",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]})\ndf2 = pd.DataFrame({'a': [3, 4]})\nprint(pd.concat([df1, df2], ignore_index=True))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Concatenating DataFrames with pd.concat().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Concatenating DataFrames with pd.concat().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Concatenating DataFrames with pd.concat()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]})\ndf2 = pd.DataFrame({'a': [3, 4]})\nprint(pd.concat([df1, df2], ignore_index=True))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]})\ndf2 = pd.DataFrame({'a': [3, 4]})\nprint(pd.concat([df1, df2], ignore_index=True))"
    ],
    "testCases": [
      {
        "id": "python-ds-79-tc-1",
        "description": "Verifies correct implementation for Concatenating DataFrames with pd.concat()",
        "testFn": "code.includes('concat')"
      }
    ]
  },
  {
    "id": "python-ds-80-index-based-joining-with-join",
    "title": "80. Index-Based Joining with join()",
    "slug": "lesson-80-index-based-joining-with-join",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convenient joining across DataFrame indices.",
    "concepts": [
      "Index-Based Joining with join()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Index-Based Joining with join() gives you complete architectural control.",
    "explanationMarkdown": "### Index-Based Joining with join()\n\nConvenient joining across DataFrame indices.\n\n```python\nimport pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]}, index=['x', 'y'])\ndf2 = pd.DataFrame({'b': [3, 4]}, index=['x', 'y'])\nprint(df1.join(df2))\n```",
    "workedExample": {
      "title": "Worked Example: Index-Based Joining with join()",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]}, index=['x', 'y'])\ndf2 = pd.DataFrame({'b': [3, 4]}, index=['x', 'y'])\nprint(df1.join(df2))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Index-Based Joining with join().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Index-Based Joining with join().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Index-Based Joining with join()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]}, index=['x', 'y'])\ndf2 = pd.DataFrame({'b': [3, 4]}, index=['x', 'y'])\nprint(df1.join(df2))\n",
    "hints": [
      "Write:\nimport pandas as pd\ndf1 = pd.DataFrame({'a': [1, 2]}, index=['x', 'y'])\ndf2 = pd.DataFrame({'b': [3, 4]}, index=['x', 'y'])\nprint(df1.join(df2))"
    ],
    "testCases": [
      {
        "id": "python-ds-80-tc-1",
        "description": "Verifies correct implementation for Index-Based Joining with join()",
        "testFn": "code.includes('join')"
      }
    ]
  },
  {
    "id": "python-ds-81-datetimeindex-in-pandas",
    "title": "81. DateTimeIndex in Pandas",
    "slug": "lesson-81-datetimeindex-in-pandas",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Use timestamp indices for chronological datasets.",
    "concepts": [
      "DateTimeIndex in Pandas",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: DateTimeIndex in Pandas gives you complete architectural control.",
    "explanationMarkdown": "### DateTimeIndex in Pandas\n\nUse timestamp indices for chronological datasets.\n\n```python\nimport pandas as pd\ndates = pd.date_range('2026-01-01', periods=3)\nprint(dates)\n```",
    "workedExample": {
      "title": "Worked Example: DateTimeIndex in Pandas",
      "code": "import pandas as pd\ndates = pd.date_range('2026-01-01', periods=3)\nprint(dates)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DateTimeIndex in Pandas.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DateTimeIndex in Pandas.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DateTimeIndex in Pandas\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ndates = pd.date_range('2026-01-01', periods=3)\nprint(dates)\n",
    "hints": [
      "Write:\nimport pandas as pd\ndates = pd.date_range('2026-01-01', periods=3)\nprint(dates)"
    ],
    "testCases": [
      {
        "id": "python-ds-81-tc-1",
        "description": "Verifies correct implementation for DateTimeIndex in Pandas",
        "testFn": "code.includes('date_range')"
      }
    ]
  },
  {
    "id": "python-ds-82-extracting-date-components-dt-",
    "title": "82. Extracting Date Components (.dt.year, .dt.month, .dt.day)",
    "slug": "lesson-82-extracting-date-components-dt-",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract calendar features for ML models.",
    "concepts": [
      "Extracting Date Components (.dt.year, .dt.month, .dt.day)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Extracting Date Components (.dt.year, .dt.month, .dt.day) gives you complete architectural control.",
    "explanationMarkdown": "### Extracting Date Components (.dt.year, .dt.month, .dt.day)\n\nExtract calendar features for ML models.\n\n```python\nimport pandas as pd\ns = pd.Series(pd.to_datetime(['2026-11-15']))\nprint(s.dt.day_name())\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Date Components (.dt.year, .dt.month, .dt.day)",
      "code": "import pandas as pd\ns = pd.Series(pd.to_datetime(['2026-11-15']))\nprint(s.dt.day_name())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Date Components (.dt.year, .dt.month, .dt.day).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Date Components (.dt.year, .dt.month, .dt.day).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Date Components (.dt.year, .dt.month, .dt.day)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series(pd.to_datetime(['2026-11-15']))\nprint(s.dt.day_name())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series(pd.to_datetime(['2026-11-15']))\nprint(s.dt.day_name())"
    ],
    "testCases": [
      {
        "id": "python-ds-82-tc-1",
        "description": "Verifies correct implementation for Extracting Date Components (.dt.year, .dt.month, .dt.day)",
        "testFn": "code.includes('dt.')"
      }
    ]
  },
  {
    "id": "python-ds-83-time-resampling-with-resample-",
    "title": "83. Time Resampling with resample('D' / 'M' / 'W')",
    "slug": "lesson-83-time-resampling-with-resample-",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Downsample or upsample time series frequencies.",
    "concepts": [
      "Time Resampling with resample('D' / 'M' / 'W')",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Time Resampling with resample('D' / 'M' / 'W') gives you complete architectural control.",
    "explanationMarkdown": "### Time Resampling with resample('D' / 'M' / 'W')\n\nDownsample or upsample time series frequencies.\n\n```python\nimport pandas as pd\nprint('Resampling allows group-by over time frequencies')\n```",
    "workedExample": {
      "title": "Worked Example: Time Resampling with resample('D' / 'M' / 'W')",
      "code": "import pandas as pd\nprint('Resampling allows group-by over time frequencies')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Time Resampling with resample('D' / 'M' / 'W').",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Time Resampling with resample('D' / 'M' / 'W').",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Time Resampling with resample('D' / 'M' / 'W')\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint('Resampling allows group-by over time frequencies')\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint('Resampling allows group-by over time frequencies')"
    ],
    "testCases": [
      {
        "id": "python-ds-83-tc-1",
        "description": "Verifies correct implementation for Time Resampling with resample('D' / 'M' / 'W')",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-84-rolling-window-calculations-wi",
    "title": "84. Rolling Window Calculations with rolling()",
    "slug": "lesson-84-rolling-window-calculations-wi",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Moving averages and rolling volatility metrics.",
    "concepts": [
      "Rolling Window Calculations with rolling()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Rolling Window Calculations with rolling() gives you complete architectural control.",
    "explanationMarkdown": "### Rolling Window Calculations with rolling()\n\nMoving averages and rolling volatility metrics.\n\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30, 40, 50])\nprint(s.rolling(window=3).mean())\n```",
    "workedExample": {
      "title": "Worked Example: Rolling Window Calculations with rolling()",
      "code": "import pandas as pd\ns = pd.Series([10, 20, 30, 40, 50])\nprint(s.rolling(window=3).mean())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Rolling Window Calculations with rolling().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Rolling Window Calculations with rolling().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Rolling Window Calculations with rolling()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([10, 20, 30, 40, 50])\nprint(s.rolling(window=3).mean())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([10, 20, 30, 40, 50])\nprint(s.rolling(window=3).mean())"
    ],
    "testCases": [
      {
        "id": "python-ds-84-tc-1",
        "description": "Verifies correct implementation for Rolling Window Calculations with rolling()",
        "testFn": "code.includes('rolling')"
      }
    ]
  },
  {
    "id": "python-ds-85-shifting-and-lagging-data-with",
    "title": "85. Shifting and Lagging Data with shift()",
    "slug": "lesson-85-shifting-and-lagging-data-with",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute period-over-period differences.",
    "concepts": [
      "Shifting and Lagging Data with shift()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Shifting and Lagging Data with shift() gives you complete architectural control.",
    "explanationMarkdown": "### Shifting and Lagging Data with shift()\n\nCompute period-over-period differences.\n\n```python\nimport pandas as pd\ns = pd.Series([100, 110, 125])\nprint(s - s.shift(1))\n```",
    "workedExample": {
      "title": "Worked Example: Shifting and Lagging Data with shift()",
      "code": "import pandas as pd\ns = pd.Series([100, 110, 125])\nprint(s - s.shift(1))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Shifting and Lagging Data with shift().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Shifting and Lagging Data with shift().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Shifting and Lagging Data with shift()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([100, 110, 125])\nprint(s - s.shift(1))\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([100, 110, 125])\nprint(s - s.shift(1))"
    ],
    "testCases": [
      {
        "id": "python-ds-85-tc-1",
        "description": "Verifies correct implementation for Shifting and Lagging Data with shift()",
        "testFn": "code.includes('shift')"
      }
    ]
  },
  {
    "id": "python-ds-86-percentage-change-with-pct-cha",
    "title": "86. Percentage Change with pct_change()",
    "slug": "lesson-86-percentage-change-with-pct-cha",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute return rates across time series.",
    "concepts": [
      "Percentage Change with pct_change()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Percentage Change with pct_change() gives you complete architectural control.",
    "explanationMarkdown": "### Percentage Change with pct_change()\n\nCompute return rates across time series.\n\n```python\nimport pandas as pd\ns = pd.Series([100, 105, 115])\nprint(s.pct_change())\n```",
    "workedExample": {
      "title": "Worked Example: Percentage Change with pct_change()",
      "code": "import pandas as pd\ns = pd.Series([100, 105, 115])\nprint(s.pct_change())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Percentage Change with pct_change().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Percentage Change with pct_change().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Percentage Change with pct_change()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\ns = pd.Series([100, 105, 115])\nprint(s.pct_change())\n",
    "hints": [
      "Write:\nimport pandas as pd\ns = pd.Series([100, 105, 115])\nprint(s.pct_change())"
    ],
    "testCases": [
      {
        "id": "python-ds-86-tc-1",
        "description": "Verifies correct implementation for Percentage Change with pct_change()",
        "testFn": "code.includes('pct_change')"
      }
    ]
  },
  {
    "id": "python-ds-87-handling-timezones-with-tz-loc",
    "title": "87. Handling Timezones with tz_localize and tz_convert",
    "slug": "lesson-87-handling-timezones-with-tz-loc",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Manage UTC offsets and timezone localization.",
    "concepts": [
      "Handling Timezones with tz_localize and tz_convert",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Handling Timezones with tz_localize and tz_convert gives you complete architectural control.",
    "explanationMarkdown": "### Handling Timezones with tz_localize and tz_convert\n\nManage UTC offsets and timezone localization.\n\n```python\nimport pandas as pd\nt = pd.Timestamp('2026-11-15', tz='UTC')\nprint(t)\n```",
    "workedExample": {
      "title": "Worked Example: Handling Timezones with tz_localize and tz_convert",
      "code": "import pandas as pd\nt = pd.Timestamp('2026-11-15', tz='UTC')\nprint(t)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Timezones with tz_localize and tz_convert.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Timezones with tz_localize and tz_convert.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling Timezones with tz_localize and tz_convert\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nt = pd.Timestamp('2026-11-15', tz='UTC')\nprint(t)\n",
    "hints": [
      "Write:\nimport pandas as pd\nt = pd.Timestamp('2026-11-15', tz='UTC')\nprint(t)"
    ],
    "testCases": [
      {
        "id": "python-ds-87-tc-1",
        "description": "Verifies correct implementation for Handling Timezones with tz_localize and tz_convert",
        "testFn": "code.includes('Timestamp')"
      }
    ]
  },
  {
    "id": "python-ds-88-reading-and-writing-csv-files-",
    "title": "88. Reading and Writing CSV Files (read_csv, to_csv)",
    "slug": "lesson-88-reading-and-writing-csv-files-",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Disk serialization of tabular datasets.",
    "concepts": [
      "Reading and Writing CSV Files (read_csv, to_csv)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Reading and Writing CSV Files (read_csv, to_csv) gives you complete architectural control.",
    "explanationMarkdown": "### Reading and Writing CSV Files (read_csv, to_csv)\n\nDisk serialization of tabular datasets.\n\n```python\nimport pandas as pd\nprint('read_csv and to_csv provide high-throughput disk I/O')\n```",
    "workedExample": {
      "title": "Worked Example: Reading and Writing CSV Files (read_csv, to_csv)",
      "code": "import pandas as pd\nprint('read_csv and to_csv provide high-throughput disk I/O')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reading and Writing CSV Files (read_csv, to_csv).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reading and Writing CSV Files (read_csv, to_csv).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Reading and Writing CSV Files (read_csv, to_csv)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint('read_csv and to_csv provide high-throughput disk I/O')\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint('read_csv and to_csv provide high-throughput disk I/O')"
    ],
    "testCases": [
      {
        "id": "python-ds-88-tc-1",
        "description": "Verifies correct implementation for Reading and Writing CSV Files (read_csv, to_csv)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-89-reading-and-writing-parquet-hi",
    "title": "89. Reading and Writing Parquet (High-Performance Columnar)",
    "slug": "lesson-89-reading-and-writing-parquet-hi",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Apache Parquet format for big data analytics.",
    "concepts": [
      "Reading and Writing Parquet (High-Performance Columnar)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Reading and Writing Parquet (High-Performance Columnar) gives you complete architectural control.",
    "explanationMarkdown": "### Reading and Writing Parquet (High-Performance Columnar)\n\nApache Parquet format for big data analytics.\n\n```python\nimport pandas as pd\nprint('to_parquet compresses columnar datasets 10x smaller than CSV')\n```",
    "workedExample": {
      "title": "Worked Example: Reading and Writing Parquet (High-Performance Columnar)",
      "code": "import pandas as pd\nprint('to_parquet compresses columnar datasets 10x smaller than CSV')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reading and Writing Parquet (High-Performance Columnar).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reading and Writing Parquet (High-Performance Columnar).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Reading and Writing Parquet (High-Performance Columnar)\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint('to_parquet compresses columnar datasets 10x smaller than CSV')\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint('to_parquet compresses columnar datasets 10x smaller than CSV')"
    ],
    "testCases": [
      {
        "id": "python-ds-89-tc-1",
        "description": "Verifies correct implementation for Reading and Writing Parquet (High-Performance Columnar)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-90-reading-from-sql-databases-wit",
    "title": "90. Reading from SQL Databases with pd.read_sql()",
    "slug": "lesson-90-reading-from-sql-databases-wit",
    "language": "python",
    "category": "Module 6: Joining, Merging & Time Series Analysis",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute queries and pipe result sets into DataFrames.",
    "concepts": [
      "Reading from SQL Databases with pd.read_sql()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Reading from SQL Databases with pd.read_sql() gives you complete architectural control.",
    "explanationMarkdown": "### Reading from SQL Databases with pd.read_sql()\n\nExecute queries and pipe result sets into DataFrames.\n\n```python\nimport pandas as pd\nprint('read_sql queries databases directly into memory')\n```",
    "workedExample": {
      "title": "Worked Example: Reading from SQL Databases with pd.read_sql()",
      "code": "import pandas as pd\nprint('read_sql queries databases directly into memory')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reading from SQL Databases with pd.read_sql().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reading from SQL Databases with pd.read_sql().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Reading from SQL Databases with pd.read_sql()\n# TODO: Write code below\n\n",
    "solutionCode": "import pandas as pd\nprint('read_sql queries databases directly into memory')\n",
    "hints": [
      "Write:\nimport pandas as pd\nprint('read_sql queries databases directly into memory')"
    ],
    "testCases": [
      {
        "id": "python-ds-90-tc-1",
        "description": "Verifies correct implementation for Reading from SQL Databases with pd.read_sql()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-91-matplotlib-architecture-figure",
    "title": "91. Matplotlib Architecture: Figure and Axes Objects",
    "slug": "lesson-91-matplotlib-architecture-figure",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "The foundational plotting engine in Python.",
    "concepts": [
      "Matplotlib Architecture: Figure and Axes Objects",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Matplotlib Architecture: Figure and Axes Objects gives you complete architectural control.",
    "explanationMarkdown": "### Matplotlib Architecture: Figure and Axes Objects\n\nThe foundational plotting engine in Python.\n\n```python\nimport matplotlib.pyplot as plt\nprint('Matplotlib Pyplot loaded')\n```",
    "workedExample": {
      "title": "Worked Example: Matplotlib Architecture: Figure and Axes Objects",
      "code": "import matplotlib.pyplot as plt\nprint('Matplotlib Pyplot loaded')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matplotlib Architecture: Figure and Axes Objects.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matplotlib Architecture: Figure and Axes Objects.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matplotlib Architecture: Figure and Axes Objects\n# TODO: Write code below\n\n",
    "solutionCode": "import matplotlib.pyplot as plt\nprint('Matplotlib Pyplot loaded')\n",
    "hints": [
      "Write:\nimport matplotlib.pyplot as plt\nprint('Matplotlib Pyplot loaded')"
    ],
    "testCases": [
      {
        "id": "python-ds-91-tc-1",
        "description": "Verifies correct implementation for Matplotlib Architecture: Figure and Axes Objects",
        "testFn": "code.includes('matplotlib')"
      }
    ]
  },
  {
    "id": "python-ds-92-creating-line-plots-with-plt-p",
    "title": "92. Creating Line Plots with plt.plot()",
    "slug": "lesson-92-creating-line-plots-with-plt-p",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Plot continuous series trends.",
    "concepts": [
      "Creating Line Plots with plt.plot()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Creating Line Plots with plt.plot() gives you complete architectural control.",
    "explanationMarkdown": "### Creating Line Plots with plt.plot()\n\nPlot continuous series trends.\n\n```python\nimport matplotlib.pyplot as plt\nprint('plt.plot(x, y, color=\"blue\", linestyle=\"--\")')\n```",
    "workedExample": {
      "title": "Worked Example: Creating Line Plots with plt.plot()",
      "code": "import matplotlib.pyplot as plt\nprint('plt.plot(x, y, color=\"blue\", linestyle=\"--\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating Line Plots with plt.plot().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating Line Plots with plt.plot().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating Line Plots with plt.plot()\n# TODO: Write code below\n\n",
    "solutionCode": "import matplotlib.pyplot as plt\nprint('plt.plot(x, y, color=\"blue\", linestyle=\"--\")')\n",
    "hints": [
      "Write:\nimport matplotlib.pyplot as plt\nprint('plt.plot(x, y, color=\"blue\", linestyle=\"--\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-92-tc-1",
        "description": "Verifies correct implementation for Creating Line Plots with plt.plot()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-93-customizing-titles-labels-and-",
    "title": "93. Customizing Titles, Labels, and Legends",
    "slug": "lesson-93-customizing-titles-labels-and-",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Add descriptive context to figures.",
    "concepts": [
      "Customizing Titles, Labels, and Legends",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Customizing Titles, Labels, and Legends gives you complete architectural control.",
    "explanationMarkdown": "### Customizing Titles, Labels, and Legends\n\nAdd descriptive context to figures.\n\n```python\nprint('plt.title(\"Revenue Trend\"); plt.xlabel(\"Year\"); plt.ylabel(\"USD\")')\n```",
    "workedExample": {
      "title": "Worked Example: Customizing Titles, Labels, and Legends",
      "code": "print('plt.title(\"Revenue Trend\"); plt.xlabel(\"Year\"); plt.ylabel(\"USD\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Customizing Titles, Labels, and Legends.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Customizing Titles, Labels, and Legends.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Customizing Titles, Labels, and Legends\n# TODO: Write code below\n\n",
    "solutionCode": "print('plt.title(\"Revenue Trend\"); plt.xlabel(\"Year\"); plt.ylabel(\"USD\")')\n",
    "hints": [
      "Write:\nprint('plt.title(\"Revenue Trend\"); plt.xlabel(\"Year\"); plt.ylabel(\"USD\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-93-tc-1",
        "description": "Verifies correct implementation for Customizing Titles, Labels, and Legends",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-94-scatter-plots-with-plt-scatter",
    "title": "94. Scatter Plots with plt.scatter()",
    "slug": "lesson-94-scatter-plots-with-plt-scatter",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Display correlations between continuous features.",
    "concepts": [
      "Scatter Plots with plt.scatter()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Scatter Plots with plt.scatter() gives you complete architectural control.",
    "explanationMarkdown": "### Scatter Plots with plt.scatter()\n\nDisplay correlations between continuous features.\n\n```python\nprint('plt.scatter(height, weight, alpha=0.5, c=age)')\n```",
    "workedExample": {
      "title": "Worked Example: Scatter Plots with plt.scatter()",
      "code": "print('plt.scatter(height, weight, alpha=0.5, c=age)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Scatter Plots with plt.scatter().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Scatter Plots with plt.scatter().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Scatter Plots with plt.scatter()\n# TODO: Write code below\n\n",
    "solutionCode": "print('plt.scatter(height, weight, alpha=0.5, c=age)')\n",
    "hints": [
      "Write:\nprint('plt.scatter(height, weight, alpha=0.5, c=age)')"
    ],
    "testCases": [
      {
        "id": "python-ds-94-tc-1",
        "description": "Verifies correct implementation for Scatter Plots with plt.scatter()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-95-bar-charts-with-plt-bar-and-pl",
    "title": "95. Bar Charts with plt.bar() and plt.barh()",
    "slug": "lesson-95-bar-charts-with-plt-bar-and-pl",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Vertical and horizontal categorical comparisons.",
    "concepts": [
      "Bar Charts with plt.bar() and plt.barh()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Bar Charts with plt.bar() and plt.barh() gives you complete architectural control.",
    "explanationMarkdown": "### Bar Charts with plt.bar() and plt.barh()\n\nVertical and horizontal categorical comparisons.\n\n```python\nprint('plt.bar([\"A\", \"B\"], [10, 25], color=\"teal\")')\n```",
    "workedExample": {
      "title": "Worked Example: Bar Charts with plt.bar() and plt.barh()",
      "code": "print('plt.bar([\"A\", \"B\"], [10, 25], color=\"teal\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Bar Charts with plt.bar() and plt.barh().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Bar Charts with plt.bar() and plt.barh().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Bar Charts with plt.bar() and plt.barh()\n# TODO: Write code below\n\n",
    "solutionCode": "print('plt.bar([\"A\", \"B\"], [10, 25], color=\"teal\")')\n",
    "hints": [
      "Write:\nprint('plt.bar([\"A\", \"B\"], [10, 25], color=\"teal\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-95-tc-1",
        "description": "Verifies correct implementation for Bar Charts with plt.bar() and plt.barh()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-96-histograms-and-bins-with-plt-h",
    "title": "96. Histograms and Bins with plt.hist()",
    "slug": "lesson-96-histograms-and-bins-with-plt-h",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect continuous probability distributions.",
    "concepts": [
      "Histograms and Bins with plt.hist()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Histograms and Bins with plt.hist() gives you complete architectural control.",
    "explanationMarkdown": "### Histograms and Bins with plt.hist()\n\nInspect continuous probability distributions.\n\n```python\nprint('plt.hist(scores, bins=20, edgecolor=\"black\")')\n```",
    "workedExample": {
      "title": "Worked Example: Histograms and Bins with plt.hist()",
      "code": "print('plt.hist(scores, bins=20, edgecolor=\"black\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Histograms and Bins with plt.hist().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Histograms and Bins with plt.hist().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Histograms and Bins with plt.hist()\n# TODO: Write code below\n\n",
    "solutionCode": "print('plt.hist(scores, bins=20, edgecolor=\"black\")')\n",
    "hints": [
      "Write:\nprint('plt.hist(scores, bins=20, edgecolor=\"black\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-96-tc-1",
        "description": "Verifies correct implementation for Histograms and Bins with plt.hist()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-97-subplots-plt-subplots-nrows-nc",
    "title": "97. Subplots: plt.subplots(nrows, ncols)",
    "slug": "lesson-97-subplots-plt-subplots-nrows-nc",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Arrange multiple charts in a unified grid figure.",
    "concepts": [
      "Subplots: plt.subplots(nrows, ncols)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Subplots: plt.subplots(nrows, ncols) gives you complete architectural control.",
    "explanationMarkdown": "### Subplots: plt.subplots(nrows, ncols)\n\nArrange multiple charts in a unified grid figure.\n\n```python\nprint('fig, axes = plt.subplots(2, 2, figsize=(10, 8))')\n```",
    "workedExample": {
      "title": "Worked Example: Subplots: plt.subplots(nrows, ncols)",
      "code": "print('fig, axes = plt.subplots(2, 2, figsize=(10, 8))')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Subplots: plt.subplots(nrows, ncols).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subplots: plt.subplots(nrows, ncols).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Subplots: plt.subplots(nrows, ncols)\n# TODO: Write code below\n\n",
    "solutionCode": "print('fig, axes = plt.subplots(2, 2, figsize=(10, 8))')\n",
    "hints": [
      "Write:\nprint('fig, axes = plt.subplots(2, 2, figsize=(10, 8))')"
    ],
    "testCases": [
      {
        "id": "python-ds-97-tc-1",
        "description": "Verifies correct implementation for Subplots: plt.subplots(nrows, ncols)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-98-seaborn-statistical-data-visua",
    "title": "98. Seaborn: Statistical Data Visualization",
    "slug": "lesson-98-seaborn-statistical-data-visua",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "High-level beautiful aesthetic charts.",
    "concepts": [
      "Seaborn: Statistical Data Visualization",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Seaborn: Statistical Data Visualization gives you complete architectural control.",
    "explanationMarkdown": "### Seaborn: Statistical Data Visualization\n\nHigh-level beautiful aesthetic charts.\n\n```python\nimport seaborn as sns\nprint('Seaborn library initialized')\n```",
    "workedExample": {
      "title": "Worked Example: Seaborn: Statistical Data Visualization",
      "code": "import seaborn as sns\nprint('Seaborn library initialized')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Seaborn: Statistical Data Visualization.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Seaborn: Statistical Data Visualization.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Seaborn: Statistical Data Visualization\n# TODO: Write code below\n\n",
    "solutionCode": "import seaborn as sns\nprint('Seaborn library initialized')\n",
    "hints": [
      "Write:\nimport seaborn as sns\nprint('Seaborn library initialized')"
    ],
    "testCases": [
      {
        "id": "python-ds-98-tc-1",
        "description": "Verifies correct implementation for Seaborn: Statistical Data Visualization",
        "testFn": "code.includes('seaborn')"
      }
    ]
  },
  {
    "id": "python-ds-99-distribution-plots-with-sns-hi",
    "title": "99. Distribution Plots with sns.histplot() and sns.kdeplot()",
    "slug": "lesson-99-distribution-plots-with-sns-hi",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Kernel density estimations overlaid on histograms.",
    "concepts": [
      "Distribution Plots with sns.histplot() and sns.kdeplot()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Distribution Plots with sns.histplot() and sns.kdeplot() gives you complete architectural control.",
    "explanationMarkdown": "### Distribution Plots with sns.histplot() and sns.kdeplot()\n\nKernel density estimations overlaid on histograms.\n\n```python\nprint('sns.histplot(df[\"age\"], kde=True, color=\"purple\")')\n```",
    "workedExample": {
      "title": "Worked Example: Distribution Plots with sns.histplot() and sns.kdeplot()",
      "code": "print('sns.histplot(df[\"age\"], kde=True, color=\"purple\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Distribution Plots with sns.histplot() and sns.kdeplot().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Distribution Plots with sns.histplot() and sns.kdeplot().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Distribution Plots with sns.histplot() and sns.kdeplot()\n# TODO: Write code below\n\n",
    "solutionCode": "print('sns.histplot(df[\"age\"], kde=True, color=\"purple\")')\n",
    "hints": [
      "Write:\nprint('sns.histplot(df[\"age\"], kde=True, color=\"purple\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-99-tc-1",
        "description": "Verifies correct implementation for Distribution Plots with sns.histplot() and sns.kdeplot()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-100-categorical-plots-sns-boxplot-",
    "title": "100. Categorical Plots: sns.boxplot() and sns.violinplot()",
    "slug": "lesson-100-categorical-plots-sns-boxplot-",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect medians, interquartile ranges, and outliers.",
    "concepts": [
      "Categorical Plots: sns.boxplot() and sns.violinplot()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Categorical Plots: sns.boxplot() and sns.violinplot() gives you complete architectural control.",
    "explanationMarkdown": "### Categorical Plots: sns.boxplot() and sns.violinplot()\n\nInspect medians, interquartile ranges, and outliers.\n\n```python\nprint('sns.boxplot(x=\"tier\", y=\"salary\", data=df)')\n```",
    "workedExample": {
      "title": "Worked Example: Categorical Plots: sns.boxplot() and sns.violinplot()",
      "code": "print('sns.boxplot(x=\"tier\", y=\"salary\", data=df)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Categorical Plots: sns.boxplot() and sns.violinplot().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Categorical Plots: sns.boxplot() and sns.violinplot().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Categorical Plots: sns.boxplot() and sns.violinplot()\n# TODO: Write code below\n\n",
    "solutionCode": "print('sns.boxplot(x=\"tier\", y=\"salary\", data=df)')\n",
    "hints": [
      "Write:\nprint('sns.boxplot(x=\"tier\", y=\"salary\", data=df)')"
    ],
    "testCases": [
      {
        "id": "python-ds-100-tc-1",
        "description": "Verifies correct implementation for Categorical Plots: sns.boxplot() and sns.violinplot()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-101-relational-plots-with-sns-scat",
    "title": "101. Relational Plots with sns.scatterplot(hue=...)",
    "slug": "lesson-101-relational-plots-with-sns-scat",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Color-code clusters using categorical hue markers.",
    "concepts": [
      "Relational Plots with sns.scatterplot(hue=...)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Relational Plots with sns.scatterplot(hue=...) gives you complete architectural control.",
    "explanationMarkdown": "### Relational Plots with sns.scatterplot(hue=...)\n\nColor-code clusters using categorical hue markers.\n\n```python\nprint('sns.scatterplot(x=\"gdp\", y=\"life_exp\", hue=\"continent\", data=df)')\n```",
    "workedExample": {
      "title": "Worked Example: Relational Plots with sns.scatterplot(hue=...)",
      "code": "print('sns.scatterplot(x=\"gdp\", y=\"life_exp\", hue=\"continent\", data=df)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Relational Plots with sns.scatterplot(hue=...).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Relational Plots with sns.scatterplot(hue=...).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Relational Plots with sns.scatterplot(hue=...)\n# TODO: Write code below\n\n",
    "solutionCode": "print('sns.scatterplot(x=\"gdp\", y=\"life_exp\", hue=\"continent\", data=df)')\n",
    "hints": [
      "Write:\nprint('sns.scatterplot(x=\"gdp\", y=\"life_exp\", hue=\"continent\", data=df)')"
    ],
    "testCases": [
      {
        "id": "python-ds-101-tc-1",
        "description": "Verifies correct implementation for Relational Plots with sns.scatterplot(hue=...)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-102-heatmaps-with-sns-heatmap-anno",
    "title": "102. Heatmaps with sns.heatmap(annot=True)",
    "slug": "lesson-102-heatmaps-with-sns-heatmap-anno",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Visualize correlation matrices vividly.",
    "concepts": [
      "Heatmaps with sns.heatmap(annot=True)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Heatmaps with sns.heatmap(annot=True) gives you complete architectural control.",
    "explanationMarkdown": "### Heatmaps with sns.heatmap(annot=True)\n\nVisualize correlation matrices vividly.\n\n```python\nprint('sns.heatmap(df.corr(), annot=True, cmap=\"coolwarm\")')\n```",
    "workedExample": {
      "title": "Worked Example: Heatmaps with sns.heatmap(annot=True)",
      "code": "print('sns.heatmap(df.corr(), annot=True, cmap=\"coolwarm\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Heatmaps with sns.heatmap(annot=True).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Heatmaps with sns.heatmap(annot=True).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Heatmaps with sns.heatmap(annot=True)\n# TODO: Write code below\n\n",
    "solutionCode": "print('sns.heatmap(df.corr(), annot=True, cmap=\"coolwarm\")')\n",
    "hints": [
      "Write:\nprint('sns.heatmap(df.corr(), annot=True, cmap=\"coolwarm\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-102-tc-1",
        "description": "Verifies correct implementation for Heatmaps with sns.heatmap(annot=True)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-103-pairplots-sns-pairplot-for-fea",
    "title": "103. Pairplots: sns.pairplot() for Feature Relationships",
    "slug": "lesson-103-pairplots-sns-pairplot-for-fea",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "All-vs-all bivariate scatter plots.",
    "concepts": [
      "Pairplots: sns.pairplot() for Feature Relationships",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Pairplots: sns.pairplot() for Feature Relationships gives you complete architectural control.",
    "explanationMarkdown": "### Pairplots: sns.pairplot() for Feature Relationships\n\nAll-vs-all bivariate scatter plots.\n\n```python\nprint('sns.pairplot(df, hue=\"target_class\")')\n```",
    "workedExample": {
      "title": "Worked Example: Pairplots: sns.pairplot() for Feature Relationships",
      "code": "print('sns.pairplot(df, hue=\"target_class\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Pairplots: sns.pairplot() for Feature Relationships.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Pairplots: sns.pairplot() for Feature Relationships.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Pairplots: sns.pairplot() for Feature Relationships\n# TODO: Write code below\n\n",
    "solutionCode": "print('sns.pairplot(df, hue=\"target_class\")')\n",
    "hints": [
      "Write:\nprint('sns.pairplot(df, hue=\"target_class\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-103-tc-1",
        "description": "Verifies correct implementation for Pairplots: sns.pairplot() for Feature Relationships",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-104-customizing-seaborn-styles-sns",
    "title": "104. Customizing Seaborn Styles (sns.set_theme)",
    "slug": "lesson-104-customizing-seaborn-styles-sns",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Switch between darkgrid, whitegrid, and ticks themes.",
    "concepts": [
      "Customizing Seaborn Styles (sns.set_theme)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Customizing Seaborn Styles (sns.set_theme) gives you complete architectural control.",
    "explanationMarkdown": "### Customizing Seaborn Styles (sns.set_theme)\n\nSwitch between darkgrid, whitegrid, and ticks themes.\n\n```python\nprint('sns.set_theme(style=\"whitegrid\", font_scale=1.1)')\n```",
    "workedExample": {
      "title": "Worked Example: Customizing Seaborn Styles (sns.set_theme)",
      "code": "print('sns.set_theme(style=\"whitegrid\", font_scale=1.1)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Customizing Seaborn Styles (sns.set_theme).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Customizing Seaborn Styles (sns.set_theme).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Customizing Seaborn Styles (sns.set_theme)\n# TODO: Write code below\n\n",
    "solutionCode": "print('sns.set_theme(style=\"whitegrid\", font_scale=1.1)')\n",
    "hints": [
      "Write:\nprint('sns.set_theme(style=\"whitegrid\", font_scale=1.1)')"
    ],
    "testCases": [
      {
        "id": "python-ds-104-tc-1",
        "description": "Verifies correct implementation for Customizing Seaborn Styles (sns.set_theme)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-105-exporting-figures-with-plt-sav",
    "title": "105. Exporting Figures with plt.savefig(dpi=300)",
    "slug": "lesson-105-exporting-figures-with-plt-sav",
    "language": "python",
    "category": "Module 7: Data Visualization with Matplotlib & Seaborn",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Save publication-quality graphics to disk.",
    "concepts": [
      "Exporting Figures with plt.savefig(dpi=300)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Exporting Figures with plt.savefig(dpi=300) gives you complete architectural control.",
    "explanationMarkdown": "### Exporting Figures with plt.savefig(dpi=300)\n\nSave publication-quality graphics to disk.\n\n```python\nprint('plt.savefig(\"chart.png\", dpi=300, bbox_inches=\"tight\")')\n```",
    "workedExample": {
      "title": "Worked Example: Exporting Figures with plt.savefig(dpi=300)",
      "code": "print('plt.savefig(\"chart.png\", dpi=300, bbox_inches=\"tight\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exporting Figures with plt.savefig(dpi=300).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exporting Figures with plt.savefig(dpi=300).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Exporting Figures with plt.savefig(dpi=300)\n# TODO: Write code below\n\n",
    "solutionCode": "print('plt.savefig(\"chart.png\", dpi=300, bbox_inches=\"tight\")')\n",
    "hints": [
      "Write:\nprint('plt.savefig(\"chart.png\", dpi=300, bbox_inches=\"tight\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-105-tc-1",
        "description": "Verifies correct implementation for Exporting Figures with plt.savefig(dpi=300)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-106-the-machine-learning-pipeline-",
    "title": "106. The Machine Learning Pipeline: Features (X) vs Target (y)",
    "slug": "lesson-106-the-machine-learning-pipeline-",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Split predictor matrix from ground-truth labels.",
    "concepts": [
      "The Machine Learning Pipeline: Features (X) vs Target (y)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Machine Learning Pipeline: Features (X) vs Target (y) gives you complete architectural control.",
    "explanationMarkdown": "### The Machine Learning Pipeline: Features (X) vs Target (y)\n\nSplit predictor matrix from ground-truth labels.\n\n```python\nprint('X = df.drop(columns=[\"target\"]); y = df[\"target\"]')\n```",
    "workedExample": {
      "title": "Worked Example: The Machine Learning Pipeline: Features (X) vs Target (y)",
      "code": "print('X = df.drop(columns=[\"target\"]); y = df[\"target\"]')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Machine Learning Pipeline: Features (X) vs Target (y).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Machine Learning Pipeline: Features (X) vs Target (y).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Machine Learning Pipeline: Features (X) vs Target (y)\n# TODO: Write code below\n\n",
    "solutionCode": "print('X = df.drop(columns=[\"target\"]); y = df[\"target\"]')\n",
    "hints": [
      "Write:\nprint('X = df.drop(columns=[\"target\"]); y = df[\"target\"]')"
    ],
    "testCases": [
      {
        "id": "python-ds-106-tc-1",
        "description": "Verifies correct implementation for The Machine Learning Pipeline: Features (X) vs Target (y)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-107-train-test-split-with-train-te",
    "title": "107. Train-Test Split with train_test_split()",
    "slug": "lesson-107-train-test-split-with-train-te",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent data leakage and validate generalization.",
    "concepts": [
      "Train-Test Split with train_test_split()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Train-Test Split with train_test_split() gives you complete architectural control.",
    "explanationMarkdown": "### Train-Test Split with train_test_split()\n\nPrevent data leakage and validate generalization.\n\n```python\nfrom sklearn.model_selection import train_test_split\nprint('sklearn model_selection ready')\n```",
    "workedExample": {
      "title": "Worked Example: Train-Test Split with train_test_split()",
      "code": "from sklearn.model_selection import train_test_split\nprint('sklearn model_selection ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Train-Test Split with train_test_split().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Train-Test Split with train_test_split().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Train-Test Split with train_test_split()\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.model_selection import train_test_split\nprint('sklearn model_selection ready')\n",
    "hints": [
      "Write:\nfrom sklearn.model_selection import train_test_split\nprint('sklearn model_selection ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-107-tc-1",
        "description": "Verifies correct implementation for Train-Test Split with train_test_split()",
        "testFn": "code.includes('train_test_split')"
      }
    ]
  },
  {
    "id": "python-ds-108-feature-scaling-standardscaler",
    "title": "108. Feature Scaling: StandardScaler (Z-Score Normalization)",
    "slug": "lesson-108-feature-scaling-standardscaler",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Scale features to zero mean and unit variance.",
    "concepts": [
      "Feature Scaling: StandardScaler (Z-Score Normalization)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Feature Scaling: StandardScaler (Z-Score Normalization) gives you complete architectural control.",
    "explanationMarkdown": "### Feature Scaling: StandardScaler (Z-Score Normalization)\n\nScale features to zero mean and unit variance.\n\n```python\nfrom sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nprint('StandardScaler ready')\n```",
    "workedExample": {
      "title": "Worked Example: Feature Scaling: StandardScaler (Z-Score Normalization)",
      "code": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nprint('StandardScaler ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Feature Scaling: StandardScaler (Z-Score Normalization).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Feature Scaling: StandardScaler (Z-Score Normalization).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Feature Scaling: StandardScaler (Z-Score Normalization)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nprint('StandardScaler ready')\n",
    "hints": [
      "Write:\nfrom sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nprint('StandardScaler ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-108-tc-1",
        "description": "Verifies correct implementation for Feature Scaling: StandardScaler (Z-Score Normalization)",
        "testFn": "code.includes('StandardScaler')"
      }
    ]
  },
  {
    "id": "python-ds-109-min-max-scaling-minmaxscaler-0",
    "title": "109. Min-Max Scaling: MinMaxScaler (0 to 1 Range)",
    "slug": "lesson-109-min-max-scaling-minmaxscaler-0",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Bound values into bounded ranges for neural nets/distance metrics.",
    "concepts": [
      "Min-Max Scaling: MinMaxScaler (0 to 1 Range)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Min-Max Scaling: MinMaxScaler (0 to 1 Range) gives you complete architectural control.",
    "explanationMarkdown": "### Min-Max Scaling: MinMaxScaler (0 to 1 Range)\n\nBound values into bounded ranges for neural nets/distance metrics.\n\n```python\nfrom sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\nprint('MinMaxScaler ready')\n```",
    "workedExample": {
      "title": "Worked Example: Min-Max Scaling: MinMaxScaler (0 to 1 Range)",
      "code": "from sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\nprint('MinMaxScaler ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Min-Max Scaling: MinMaxScaler (0 to 1 Range).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Min-Max Scaling: MinMaxScaler (0 to 1 Range).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Min-Max Scaling: MinMaxScaler (0 to 1 Range)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\nprint('MinMaxScaler ready')\n",
    "hints": [
      "Write:\nfrom sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\nprint('MinMaxScaler ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-109-tc-1",
        "description": "Verifies correct implementation for Min-Max Scaling: MinMaxScaler (0 to 1 Range)",
        "testFn": "code.includes('MinMaxScaler')"
      }
    ]
  },
  {
    "id": "python-ds-110-encoding-categoricals-labelenc",
    "title": "110. Encoding Categoricals: LabelEncoder vs OneHotEncoder",
    "slug": "lesson-110-encoding-categoricals-labelenc",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert text classes into numeric matrices.",
    "concepts": [
      "Encoding Categoricals: LabelEncoder vs OneHotEncoder",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Encoding Categoricals: LabelEncoder vs OneHotEncoder gives you complete architectural control.",
    "explanationMarkdown": "### Encoding Categoricals: LabelEncoder vs OneHotEncoder\n\nConvert text classes into numeric matrices.\n\n```python\nfrom sklearn.preprocessing import OneHotEncoder\nohe = OneHotEncoder()\nprint('OneHotEncoder ready')\n```",
    "workedExample": {
      "title": "Worked Example: Encoding Categoricals: LabelEncoder vs OneHotEncoder",
      "code": "from sklearn.preprocessing import OneHotEncoder\nohe = OneHotEncoder()\nprint('OneHotEncoder ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Encoding Categoricals: LabelEncoder vs OneHotEncoder.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Encoding Categoricals: LabelEncoder vs OneHotEncoder.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Encoding Categoricals: LabelEncoder vs OneHotEncoder\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.preprocessing import OneHotEncoder\nohe = OneHotEncoder()\nprint('OneHotEncoder ready')\n",
    "hints": [
      "Write:\nfrom sklearn.preprocessing import OneHotEncoder\nohe = OneHotEncoder()\nprint('OneHotEncoder ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-110-tc-1",
        "description": "Verifies correct implementation for Encoding Categoricals: LabelEncoder vs OneHotEncoder",
        "testFn": "code.includes('OneHotEncoder')"
      }
    ]
  },
  {
    "id": "python-ds-111-ordinal-encoding-for-ranked-ca",
    "title": "111. Ordinal Encoding for Ranked Categories",
    "slug": "lesson-111-ordinal-encoding-for-ranked-ca",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Encode ordered tiers (Low=0, Med=1, High=2).",
    "concepts": [
      "Ordinal Encoding for Ranked Categories",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Ordinal Encoding for Ranked Categories gives you complete architectural control.",
    "explanationMarkdown": "### Ordinal Encoding for Ranked Categories\n\nEncode ordered tiers (Low=0, Med=1, High=2).\n\n```python\nfrom sklearn.preprocessing import OrdinalEncoder\nenc = OrdinalEncoder()\nprint('OrdinalEncoder ready')\n```",
    "workedExample": {
      "title": "Worked Example: Ordinal Encoding for Ranked Categories",
      "code": "from sklearn.preprocessing import OrdinalEncoder\nenc = OrdinalEncoder()\nprint('OrdinalEncoder ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ordinal Encoding for Ranked Categories.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ordinal Encoding for Ranked Categories.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Ordinal Encoding for Ranked Categories\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.preprocessing import OrdinalEncoder\nenc = OrdinalEncoder()\nprint('OrdinalEncoder ready')\n",
    "hints": [
      "Write:\nfrom sklearn.preprocessing import OrdinalEncoder\nenc = OrdinalEncoder()\nprint('OrdinalEncoder ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-111-tc-1",
        "description": "Verifies correct implementation for Ordinal Encoding for Ranked Categories",
        "testFn": "code.includes('OrdinalEncoder')"
      }
    ]
  },
  {
    "id": "python-ds-112-missing-value-imputation-with-",
    "title": "112. Missing Value Imputation with SimpleImputer",
    "slug": "lesson-112-missing-value-imputation-with-",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Impute training and testing sets with identical stats.",
    "concepts": [
      "Missing Value Imputation with SimpleImputer",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Missing Value Imputation with SimpleImputer gives you complete architectural control.",
    "explanationMarkdown": "### Missing Value Imputation with SimpleImputer\n\nImpute training and testing sets with identical stats.\n\n```python\nfrom sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy='mean')\nprint('SimpleImputer ready')\n```",
    "workedExample": {
      "title": "Worked Example: Missing Value Imputation with SimpleImputer",
      "code": "from sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy='mean')\nprint('SimpleImputer ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Missing Value Imputation with SimpleImputer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Missing Value Imputation with SimpleImputer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Missing Value Imputation with SimpleImputer\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy='mean')\nprint('SimpleImputer ready')\n",
    "hints": [
      "Write:\nfrom sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy='mean')\nprint('SimpleImputer ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-112-tc-1",
        "description": "Verifies correct implementation for Missing Value Imputation with SimpleImputer",
        "testFn": "code.includes('SimpleImputer')"
      }
    ]
  },
  {
    "id": "python-ds-113-polynomial-features-with-polyn",
    "title": "113. Polynomial Features with PolynomialFeatures()",
    "slug": "lesson-113-polynomial-features-with-polyn",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Capture non-linear interaction terms.",
    "concepts": [
      "Polynomial Features with PolynomialFeatures()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Polynomial Features with PolynomialFeatures() gives you complete architectural control.",
    "explanationMarkdown": "### Polynomial Features with PolynomialFeatures()\n\nCapture non-linear interaction terms.\n\n```python\nfrom sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2)\nprint('PolynomialFeatures ready')\n```",
    "workedExample": {
      "title": "Worked Example: Polynomial Features with PolynomialFeatures()",
      "code": "from sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2)\nprint('PolynomialFeatures ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Polynomial Features with PolynomialFeatures().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Polynomial Features with PolynomialFeatures().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Polynomial Features with PolynomialFeatures()\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2)\nprint('PolynomialFeatures ready')\n",
    "hints": [
      "Write:\nfrom sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2)\nprint('PolynomialFeatures ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-113-tc-1",
        "description": "Verifies correct implementation for Polynomial Features with PolynomialFeatures()",
        "testFn": "code.includes('PolynomialFeatures')"
      }
    ]
  },
  {
    "id": "python-ds-114-handling-outliers-with-iqr-and",
    "title": "114. Handling Outliers with IQR and Z-Score Clipping",
    "slug": "lesson-114-handling-outliers-with-iqr-and",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Cap extreme values to stabilize model training.",
    "concepts": [
      "Handling Outliers with IQR and Z-Score Clipping",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Handling Outliers with IQR and Z-Score Clipping gives you complete architectural control.",
    "explanationMarkdown": "### Handling Outliers with IQR and Z-Score Clipping\n\nCap extreme values to stabilize model training.\n\n```python\nprint('df[\"val\"] = df[\"val\"].clip(lower=q01, upper=q99)')\n```",
    "workedExample": {
      "title": "Worked Example: Handling Outliers with IQR and Z-Score Clipping",
      "code": "print('df[\"val\"] = df[\"val\"].clip(lower=q01, upper=q99)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Outliers with IQR and Z-Score Clipping.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Outliers with IQR and Z-Score Clipping.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling Outliers with IQR and Z-Score Clipping\n# TODO: Write code below\n\n",
    "solutionCode": "print('df[\"val\"] = df[\"val\"].clip(lower=q01, upper=q99)')\n",
    "hints": [
      "Write:\nprint('df[\"val\"] = df[\"val\"].clip(lower=q01, upper=q99)')"
    ],
    "testCases": [
      {
        "id": "python-ds-114-tc-1",
        "description": "Verifies correct implementation for Handling Outliers with IQR and Z-Score Clipping",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-115-log-transformations-for-skewed",
    "title": "115. Log Transformations for Skewed Features (np.log1p)",
    "slug": "lesson-115-log-transformations-for-skewed",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Transform power-law distributions into normal bell curves.",
    "concepts": [
      "Log Transformations for Skewed Features (np.log1p)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Log Transformations for Skewed Features (np.log1p) gives you complete architectural control.",
    "explanationMarkdown": "### Log Transformations for Skewed Features (np.log1p)\n\nTransform power-law distributions into normal bell curves.\n\n```python\nimport numpy as np\nx = np.array([10, 100, 1000])\nprint(np.log1p(x))\n```",
    "workedExample": {
      "title": "Worked Example: Log Transformations for Skewed Features (np.log1p)",
      "code": "import numpy as np\nx = np.array([10, 100, 1000])\nprint(np.log1p(x))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Log Transformations for Skewed Features (np.log1p).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Log Transformations for Skewed Features (np.log1p).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Log Transformations for Skewed Features (np.log1p)\n# TODO: Write code below\n\n",
    "solutionCode": "import numpy as np\nx = np.array([10, 100, 1000])\nprint(np.log1p(x))\n",
    "hints": [
      "Write:\nimport numpy as np\nx = np.array([10, 100, 1000])\nprint(np.log1p(x))"
    ],
    "testCases": [
      {
        "id": "python-ds-115-tc-1",
        "description": "Verifies correct implementation for Log Transformations for Skewed Features (np.log1p)",
        "testFn": "code.includes('log1p')"
      }
    ]
  },
  {
    "id": "python-ds-116-feature-selection-selectkbest-",
    "title": "116. Feature Selection: SelectKBest and VarianceThreshold",
    "slug": "lesson-116-feature-selection-selectkbest-",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Eliminate redundant uninformative features.",
    "concepts": [
      "Feature Selection: SelectKBest and VarianceThreshold",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Feature Selection: SelectKBest and VarianceThreshold gives you complete architectural control.",
    "explanationMarkdown": "### Feature Selection: SelectKBest and VarianceThreshold\n\nEliminate redundant uninformative features.\n\n```python\nfrom sklearn.feature_selection import SelectKBest\nprint('SelectKBest ready')\n```",
    "workedExample": {
      "title": "Worked Example: Feature Selection: SelectKBest and VarianceThreshold",
      "code": "from sklearn.feature_selection import SelectKBest\nprint('SelectKBest ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Feature Selection: SelectKBest and VarianceThreshold.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Feature Selection: SelectKBest and VarianceThreshold.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Feature Selection: SelectKBest and VarianceThreshold\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.feature_selection import SelectKBest\nprint('SelectKBest ready')\n",
    "hints": [
      "Write:\nfrom sklearn.feature_selection import SelectKBest\nprint('SelectKBest ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-116-tc-1",
        "description": "Verifies correct implementation for Feature Selection: SelectKBest and VarianceThreshold",
        "testFn": "code.includes('SelectKBest')"
      }
    ]
  },
  {
    "id": "python-ds-117-correlation-based-feature-prun",
    "title": "117. Correlation-Based Feature Pruning",
    "slug": "lesson-117-correlation-based-feature-prun",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Drop collinear features exceeding correlation thresholds.",
    "concepts": [
      "Correlation-Based Feature Pruning",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Correlation-Based Feature Pruning gives you complete architectural control.",
    "explanationMarkdown": "### Correlation-Based Feature Pruning\n\nDrop collinear features exceeding correlation thresholds.\n\n```python\nprint('Drop features where abs(corr) > 0.85 to avoid multicollinearity')\n```",
    "workedExample": {
      "title": "Worked Example: Correlation-Based Feature Pruning",
      "code": "print('Drop features where abs(corr) > 0.85 to avoid multicollinearity')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Correlation-Based Feature Pruning.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Correlation-Based Feature Pruning.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Correlation-Based Feature Pruning\n# TODO: Write code below\n\n",
    "solutionCode": "print('Drop features where abs(corr) > 0.85 to avoid multicollinearity')\n",
    "hints": [
      "Write:\nprint('Drop features where abs(corr) > 0.85 to avoid multicollinearity')"
    ],
    "testCases": [
      {
        "id": "python-ds-117-tc-1",
        "description": "Verifies correct implementation for Correlation-Based Feature Pruning",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-118-dimensionality-reduction-with-",
    "title": "118. Dimensionality Reduction with PCA (Principal Component Analysis)",
    "slug": "lesson-118-dimensionality-reduction-with-",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compress high-dimensional features into orthogonal components.",
    "concepts": [
      "Dimensionality Reduction with PCA (Principal Component Analysis)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Dimensionality Reduction with PCA (Principal Component Analysis) gives you complete architectural control.",
    "explanationMarkdown": "### Dimensionality Reduction with PCA (Principal Component Analysis)\n\nCompress high-dimensional features into orthogonal components.\n\n```python\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=2)\nprint('PCA ready')\n```",
    "workedExample": {
      "title": "Worked Example: Dimensionality Reduction with PCA (Principal Component Analysis)",
      "code": "from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nprint('PCA ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Dimensionality Reduction with PCA (Principal Component Analysis).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Dimensionality Reduction with PCA (Principal Component Analysis).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Dimensionality Reduction with PCA (Principal Component Analysis)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nprint('PCA ready')\n",
    "hints": [
      "Write:\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=2)\nprint('PCA ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-118-tc-1",
        "description": "Verifies correct implementation for Dimensionality Reduction with PCA (Principal Component Analysis)",
        "testFn": "code.includes('PCA')"
      }
    ]
  },
  {
    "id": "python-ds-119-text-feature-extraction-with-c",
    "title": "119. Text Feature Extraction with CountVectorizer",
    "slug": "lesson-119-text-feature-extraction-with-c",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert raw text strings into Bag-of-Words matrices.",
    "concepts": [
      "Text Feature Extraction with CountVectorizer",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Text Feature Extraction with CountVectorizer gives you complete architectural control.",
    "explanationMarkdown": "### Text Feature Extraction with CountVectorizer\n\nConvert raw text strings into Bag-of-Words matrices.\n\n```python\nfrom sklearn.feature_extraction.text import CountVectorizer\ncv = CountVectorizer()\nprint('CountVectorizer ready')\n```",
    "workedExample": {
      "title": "Worked Example: Text Feature Extraction with CountVectorizer",
      "code": "from sklearn.feature_extraction.text import CountVectorizer\ncv = CountVectorizer()\nprint('CountVectorizer ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Text Feature Extraction with CountVectorizer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Text Feature Extraction with CountVectorizer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Text Feature Extraction with CountVectorizer\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.feature_extraction.text import CountVectorizer\ncv = CountVectorizer()\nprint('CountVectorizer ready')\n",
    "hints": [
      "Write:\nfrom sklearn.feature_extraction.text import CountVectorizer\ncv = CountVectorizer()\nprint('CountVectorizer ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-119-tc-1",
        "description": "Verifies correct implementation for Text Feature Extraction with CountVectorizer",
        "testFn": "code.includes('CountVectorizer')"
      }
    ]
  },
  {
    "id": "python-ds-120-tf-idf-vectorization-with-tfid",
    "title": "120. TF-IDF Vectorization with TfidfVectorizer",
    "slug": "lesson-120-tf-idf-vectorization-with-tfid",
    "language": "python",
    "category": "Module 8: Feature Engineering & Preprocessing",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Weight term importance inversely by document frequency.",
    "concepts": [
      "TF-IDF Vectorization with TfidfVectorizer",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: TF-IDF Vectorization with TfidfVectorizer gives you complete architectural control.",
    "explanationMarkdown": "### TF-IDF Vectorization with TfidfVectorizer\n\nWeight term importance inversely by document frequency.\n\n```python\nfrom sklearn.feature_extraction.text import TfidfVectorizer\ntfidf = TfidfVectorizer()\nprint('TfidfVectorizer ready')\n```",
    "workedExample": {
      "title": "Worked Example: TF-IDF Vectorization with TfidfVectorizer",
      "code": "from sklearn.feature_extraction.text import TfidfVectorizer\ntfidf = TfidfVectorizer()\nprint('TfidfVectorizer ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TF-IDF Vectorization with TfidfVectorizer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TF-IDF Vectorization with TfidfVectorizer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TF-IDF Vectorization with TfidfVectorizer\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\ntfidf = TfidfVectorizer()\nprint('TfidfVectorizer ready')\n",
    "hints": [
      "Write:\nfrom sklearn.feature_extraction.text import TfidfVectorizer\ntfidf = TfidfVectorizer()\nprint('TfidfVectorizer ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-120-tc-1",
        "description": "Verifies correct implementation for TF-IDF Vectorization with TfidfVectorizer",
        "testFn": "code.includes('TfidfVectorizer')"
      }
    ]
  },
  {
    "id": "python-ds-121-the-scikit-learn-api-fit-predi",
    "title": "121. The Scikit-Learn API: fit(), predict(), score()",
    "slug": "lesson-121-the-scikit-learn-api-fit-predi",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Unified object-oriented estimator lifecycle.",
    "concepts": [
      "The Scikit-Learn API: fit(), predict(), score()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: The Scikit-Learn API: fit(), predict(), score() gives you complete architectural control.",
    "explanationMarkdown": "### The Scikit-Learn API: fit(), predict(), score()\n\nUnified object-oriented estimator lifecycle.\n\n```python\nprint('Estimator lifecycle: model.fit(X_train, y_train); preds = model.predict(X_test)')\n```",
    "workedExample": {
      "title": "Worked Example: The Scikit-Learn API: fit(), predict(), score()",
      "code": "print('Estimator lifecycle: model.fit(X_train, y_train); preds = model.predict(X_test)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Scikit-Learn API: fit(), predict(), score().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Scikit-Learn API: fit(), predict(), score().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Scikit-Learn API: fit(), predict(), score()\n# TODO: Write code below\n\n",
    "solutionCode": "print('Estimator lifecycle: model.fit(X_train, y_train); preds = model.predict(X_test)')\n",
    "hints": [
      "Write:\nprint('Estimator lifecycle: model.fit(X_train, y_train); preds = model.predict(X_test)')"
    ],
    "testCases": [
      {
        "id": "python-ds-121-tc-1",
        "description": "Verifies correct implementation for The Scikit-Learn API: fit(), predict(), score()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-122-linear-regression-with-linearr",
    "title": "122. Linear Regression with LinearRegression()",
    "slug": "lesson-122-linear-regression-with-linearr",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Predict continuous numeric target variables.",
    "concepts": [
      "Linear Regression with LinearRegression()",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Linear Regression with LinearRegression() gives you complete architectural control.",
    "explanationMarkdown": "### Linear Regression with LinearRegression()\n\nPredict continuous numeric target variables.\n\n```python\nfrom sklearn.linear_model import LinearRegression\nreg = LinearRegression()\nprint('LinearRegression model ready')\n```",
    "workedExample": {
      "title": "Worked Example: Linear Regression with LinearRegression()",
      "code": "from sklearn.linear_model import LinearRegression\nreg = LinearRegression()\nprint('LinearRegression model ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Linear Regression with LinearRegression().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Linear Regression with LinearRegression().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Linear Regression with LinearRegression()\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.linear_model import LinearRegression\nreg = LinearRegression()\nprint('LinearRegression model ready')\n",
    "hints": [
      "Write:\nfrom sklearn.linear_model import LinearRegression\nreg = LinearRegression()\nprint('LinearRegression model ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-122-tc-1",
        "description": "Verifies correct implementation for Linear Regression with LinearRegression()",
        "testFn": "code.includes('LinearRegression')"
      }
    ]
  },
  {
    "id": "python-ds-123-evaluating-regression-mse-rmse",
    "title": "123. Evaluating Regression: MSE, RMSE, MAE, and R2",
    "slug": "lesson-123-evaluating-regression-mse-rmse",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Quantify continuous prediction errors.",
    "concepts": [
      "Evaluating Regression: MSE, RMSE, MAE, and R2",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Evaluating Regression: MSE, RMSE, MAE, and R2 gives you complete architectural control.",
    "explanationMarkdown": "### Evaluating Regression: MSE, RMSE, MAE, and R2\n\nQuantify continuous prediction errors.\n\n```python\nfrom sklearn.metrics import mean_squared_error, r2_score\nprint('Regression metrics ready')\n```",
    "workedExample": {
      "title": "Worked Example: Evaluating Regression: MSE, RMSE, MAE, and R2",
      "code": "from sklearn.metrics import mean_squared_error, r2_score\nprint('Regression metrics ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Evaluating Regression: MSE, RMSE, MAE, and R2.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Evaluating Regression: MSE, RMSE, MAE, and R2.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Evaluating Regression: MSE, RMSE, MAE, and R2\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.metrics import mean_squared_error, r2_score\nprint('Regression metrics ready')\n",
    "hints": [
      "Write:\nfrom sklearn.metrics import mean_squared_error, r2_score\nprint('Regression metrics ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-123-tc-1",
        "description": "Verifies correct implementation for Evaluating Regression: MSE, RMSE, MAE, and R2",
        "testFn": "code.includes('mean_squared_error')"
      }
    ]
  },
  {
    "id": "python-ds-124-ridge-regression-l2-regulariza",
    "title": "124. Ridge Regression (L2 Regularization)",
    "slug": "lesson-124-ridge-regression-l2-regulariza",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent overfitting by penalizing large weights.",
    "concepts": [
      "Ridge Regression (L2 Regularization)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Ridge Regression (L2 Regularization) gives you complete architectural control.",
    "explanationMarkdown": "### Ridge Regression (L2 Regularization)\n\nPrevent overfitting by penalizing large weights.\n\n```python\nfrom sklearn.linear_model import Ridge\nridge = Ridge(alpha=1.0)\nprint('Ridge regression ready')\n```",
    "workedExample": {
      "title": "Worked Example: Ridge Regression (L2 Regularization)",
      "code": "from sklearn.linear_model import Ridge\nridge = Ridge(alpha=1.0)\nprint('Ridge regression ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Ridge Regression (L2 Regularization).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Ridge Regression (L2 Regularization).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Ridge Regression (L2 Regularization)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.linear_model import Ridge\nridge = Ridge(alpha=1.0)\nprint('Ridge regression ready')\n",
    "hints": [
      "Write:\nfrom sklearn.linear_model import Ridge\nridge = Ridge(alpha=1.0)\nprint('Ridge regression ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-124-tc-1",
        "description": "Verifies correct implementation for Ridge Regression (L2 Regularization)",
        "testFn": "code.includes('Ridge')"
      }
    ]
  },
  {
    "id": "python-ds-125-lasso-regression-l1-regulariza",
    "title": "125. Lasso Regression (L1 Regularization & Sparsity)",
    "slug": "lesson-125-lasso-regression-l1-regulariza",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Perform automated feature selection via zero-weight shrinkage.",
    "concepts": [
      "Lasso Regression (L1 Regularization & Sparsity)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Lasso Regression (L1 Regularization & Sparsity) gives you complete architectural control.",
    "explanationMarkdown": "### Lasso Regression (L1 Regularization & Sparsity)\n\nPerform automated feature selection via zero-weight shrinkage.\n\n```python\nfrom sklearn.linear_model import Lasso\nlasso = Lasso(alpha=0.1)\nprint('Lasso regression ready')\n```",
    "workedExample": {
      "title": "Worked Example: Lasso Regression (L1 Regularization & Sparsity)",
      "code": "from sklearn.linear_model import Lasso\nlasso = Lasso(alpha=0.1)\nprint('Lasso regression ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Lasso Regression (L1 Regularization & Sparsity).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Lasso Regression (L1 Regularization & Sparsity).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Lasso Regression (L1 Regularization & Sparsity)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.linear_model import Lasso\nlasso = Lasso(alpha=0.1)\nprint('Lasso regression ready')\n",
    "hints": [
      "Write:\nfrom sklearn.linear_model import Lasso\nlasso = Lasso(alpha=0.1)\nprint('Lasso regression ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-125-tc-1",
        "description": "Verifies correct implementation for Lasso Regression (L1 Regularization & Sparsity)",
        "testFn": "code.includes('Lasso')"
      }
    ]
  },
  {
    "id": "python-ds-126-logistic-regression-for-binary",
    "title": "126. Logistic Regression for Binary Classification",
    "slug": "lesson-126-logistic-regression-for-binary",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sigmoid activation for class probability prediction.",
    "concepts": [
      "Logistic Regression for Binary Classification",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Logistic Regression for Binary Classification gives you complete architectural control.",
    "explanationMarkdown": "### Logistic Regression for Binary Classification\n\nSigmoid activation for class probability prediction.\n\n```python\nfrom sklearn.linear_model import LogisticRegression\nclf = LogisticRegression()\nprint('LogisticRegression ready')\n```",
    "workedExample": {
      "title": "Worked Example: Logistic Regression for Binary Classification",
      "code": "from sklearn.linear_model import LogisticRegression\nclf = LogisticRegression()\nprint('LogisticRegression ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logistic Regression for Binary Classification.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logistic Regression for Binary Classification.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Logistic Regression for Binary Classification\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.linear_model import LogisticRegression\nclf = LogisticRegression()\nprint('LogisticRegression ready')\n",
    "hints": [
      "Write:\nfrom sklearn.linear_model import LogisticRegression\nclf = LogisticRegression()\nprint('LogisticRegression ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-126-tc-1",
        "description": "Verifies correct implementation for Logistic Regression for Binary Classification",
        "testFn": "code.includes('LogisticRegression')"
      }
    ]
  },
  {
    "id": "python-ds-127-evaluating-classification-conf",
    "title": "127. Evaluating Classification: Confusion Matrix",
    "slug": "lesson-127-evaluating-classification-conf",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "True Positives, False Positives, True Negatives, False Negatives.",
    "concepts": [
      "Evaluating Classification: Confusion Matrix",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Evaluating Classification: Confusion Matrix gives you complete architectural control.",
    "explanationMarkdown": "### Evaluating Classification: Confusion Matrix\n\nTrue Positives, False Positives, True Negatives, False Negatives.\n\n```python\nfrom sklearn.metrics import confusion_matrix\nprint('confusion_matrix utility loaded')\n```",
    "workedExample": {
      "title": "Worked Example: Evaluating Classification: Confusion Matrix",
      "code": "from sklearn.metrics import confusion_matrix\nprint('confusion_matrix utility loaded')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Evaluating Classification: Confusion Matrix.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Evaluating Classification: Confusion Matrix.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Evaluating Classification: Confusion Matrix\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.metrics import confusion_matrix\nprint('confusion_matrix utility loaded')\n",
    "hints": [
      "Write:\nfrom sklearn.metrics import confusion_matrix\nprint('confusion_matrix utility loaded')"
    ],
    "testCases": [
      {
        "id": "python-ds-127-tc-1",
        "description": "Verifies correct implementation for Evaluating Classification: Confusion Matrix",
        "testFn": "code.includes('confusion_matrix')"
      }
    ]
  },
  {
    "id": "python-ds-128-classification-metrics-accurac",
    "title": "128. Classification Metrics: Accuracy, Precision, Recall, F1",
    "slug": "lesson-128-classification-metrics-accurac",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Choose metrics according to class balance and false positive costs.",
    "concepts": [
      "Classification Metrics: Accuracy, Precision, Recall, F1",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Classification Metrics: Accuracy, Precision, Recall, F1 gives you complete architectural control.",
    "explanationMarkdown": "### Classification Metrics: Accuracy, Precision, Recall, F1\n\nChoose metrics according to class balance and false positive costs.\n\n```python\nfrom sklearn.metrics import classification_report\nprint('classification_report ready')\n```",
    "workedExample": {
      "title": "Worked Example: Classification Metrics: Accuracy, Precision, Recall, F1",
      "code": "from sklearn.metrics import classification_report\nprint('classification_report ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Classification Metrics: Accuracy, Precision, Recall, F1.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Classification Metrics: Accuracy, Precision, Recall, F1.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Classification Metrics: Accuracy, Precision, Recall, F1\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.metrics import classification_report\nprint('classification_report ready')\n",
    "hints": [
      "Write:\nfrom sklearn.metrics import classification_report\nprint('classification_report ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-128-tc-1",
        "description": "Verifies correct implementation for Classification Metrics: Accuracy, Precision, Recall, F1",
        "testFn": "code.includes('classification_report')"
      }
    ]
  },
  {
    "id": "python-ds-129-roc-curves-and-auc-score-roc-a",
    "title": "129. ROC Curves and AUC Score (roc_auc_score)",
    "slug": "lesson-129-roc-curves-and-auc-score-roc-a",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Evaluate threshold-independent discrimination capability.",
    "concepts": [
      "ROC Curves and AUC Score (roc_auc_score)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: ROC Curves and AUC Score (roc_auc_score) gives you complete architectural control.",
    "explanationMarkdown": "### ROC Curves and AUC Score (roc_auc_score)\n\nEvaluate threshold-independent discrimination capability.\n\n```python\nfrom sklearn.metrics import roc_auc_score\nprint('roc_auc_score ready')\n```",
    "workedExample": {
      "title": "Worked Example: ROC Curves and AUC Score (roc_auc_score)",
      "code": "from sklearn.metrics import roc_auc_score\nprint('roc_auc_score ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ROC Curves and AUC Score (roc_auc_score).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ROC Curves and AUC Score (roc_auc_score).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement ROC Curves and AUC Score (roc_auc_score)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.metrics import roc_auc_score\nprint('roc_auc_score ready')\n",
    "hints": [
      "Write:\nfrom sklearn.metrics import roc_auc_score\nprint('roc_auc_score ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-129-tc-1",
        "description": "Verifies correct implementation for ROC Curves and AUC Score (roc_auc_score)",
        "testFn": "code.includes('roc_auc_score')"
      }
    ]
  },
  {
    "id": "python-ds-130-k-nearest-neighbors-classifier",
    "title": "130. K-Nearest Neighbors Classifier (KNeighborsClassifier)",
    "slug": "lesson-130-k-nearest-neighbors-classifier",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Instance-based lazy learning by euclidean distance.",
    "concepts": [
      "K-Nearest Neighbors Classifier (KNeighborsClassifier)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: K-Nearest Neighbors Classifier (KNeighborsClassifier) gives you complete architectural control.",
    "explanationMarkdown": "### K-Nearest Neighbors Classifier (KNeighborsClassifier)\n\nInstance-based lazy learning by euclidean distance.\n\n```python\nfrom sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=5)\nprint('KNN ready')\n```",
    "workedExample": {
      "title": "Worked Example: K-Nearest Neighbors Classifier (KNeighborsClassifier)",
      "code": "from sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=5)\nprint('KNN ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for K-Nearest Neighbors Classifier (KNeighborsClassifier).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of K-Nearest Neighbors Classifier (KNeighborsClassifier).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement K-Nearest Neighbors Classifier (KNeighborsClassifier)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=5)\nprint('KNN ready')\n",
    "hints": [
      "Write:\nfrom sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=5)\nprint('KNN ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-130-tc-1",
        "description": "Verifies correct implementation for K-Nearest Neighbors Classifier (KNeighborsClassifier)",
        "testFn": "code.includes('KNeighborsClassifier')"
      }
    ]
  },
  {
    "id": "python-ds-131-decision-trees-with-decisiontr",
    "title": "131. Decision Trees with DecisionTreeClassifier",
    "slug": "lesson-131-decision-trees-with-decisiontr",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hierarchical rule-based splitting with Gini/Entropy.",
    "concepts": [
      "Decision Trees with DecisionTreeClassifier",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Decision Trees with DecisionTreeClassifier gives you complete architectural control.",
    "explanationMarkdown": "### Decision Trees with DecisionTreeClassifier\n\nHierarchical rule-based splitting with Gini/Entropy.\n\n```python\nfrom sklearn.tree import DecisionTreeClassifier\ntree = DecisionTreeClassifier(max_depth=4)\nprint('DecisionTreeClassifier ready')\n```",
    "workedExample": {
      "title": "Worked Example: Decision Trees with DecisionTreeClassifier",
      "code": "from sklearn.tree import DecisionTreeClassifier\ntree = DecisionTreeClassifier(max_depth=4)\nprint('DecisionTreeClassifier ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Decision Trees with DecisionTreeClassifier.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Decision Trees with DecisionTreeClassifier.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Decision Trees with DecisionTreeClassifier\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.tree import DecisionTreeClassifier\ntree = DecisionTreeClassifier(max_depth=4)\nprint('DecisionTreeClassifier ready')\n",
    "hints": [
      "Write:\nfrom sklearn.tree import DecisionTreeClassifier\ntree = DecisionTreeClassifier(max_depth=4)\nprint('DecisionTreeClassifier ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-131-tc-1",
        "description": "Verifies correct implementation for Decision Trees with DecisionTreeClassifier",
        "testFn": "code.includes('DecisionTreeClassifier')"
      }
    ]
  },
  {
    "id": "python-ds-132-random-forests-with-randomfore",
    "title": "132. Random Forests with RandomForestClassifier",
    "slug": "lesson-132-random-forests-with-randomfore",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ensemble bagging across diverse subtrees.",
    "concepts": [
      "Random Forests with RandomForestClassifier",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Random Forests with RandomForestClassifier gives you complete architectural control.",
    "explanationMarkdown": "### Random Forests with RandomForestClassifier\n\nEnsemble bagging across diverse subtrees.\n\n```python\nfrom sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100)\nprint('RandomForest ready')\n```",
    "workedExample": {
      "title": "Worked Example: Random Forests with RandomForestClassifier",
      "code": "from sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100)\nprint('RandomForest ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Random Forests with RandomForestClassifier.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Random Forests with RandomForestClassifier.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Random Forests with RandomForestClassifier\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100)\nprint('RandomForest ready')\n",
    "hints": [
      "Write:\nfrom sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100)\nprint('RandomForest ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-132-tc-1",
        "description": "Verifies correct implementation for Random Forests with RandomForestClassifier",
        "testFn": "code.includes('RandomForestClassifier')"
      }
    ]
  },
  {
    "id": "python-ds-133-gradient-boosting-with-gradien",
    "title": "133. Gradient Boosting with GradientBoostingClassifier",
    "slug": "lesson-133-gradient-boosting-with-gradien",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sequential residual boosting for top-tier accuracy.",
    "concepts": [
      "Gradient Boosting with GradientBoostingClassifier",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Gradient Boosting with GradientBoostingClassifier gives you complete architectural control.",
    "explanationMarkdown": "### Gradient Boosting with GradientBoostingClassifier\n\nSequential residual boosting for top-tier accuracy.\n\n```python\nfrom sklearn.ensemble import GradientBoostingClassifier\ngb = GradientBoostingClassifier()\nprint('GradientBoosting ready')\n```",
    "workedExample": {
      "title": "Worked Example: Gradient Boosting with GradientBoostingClassifier",
      "code": "from sklearn.ensemble import GradientBoostingClassifier\ngb = GradientBoostingClassifier()\nprint('GradientBoosting ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Gradient Boosting with GradientBoostingClassifier.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Gradient Boosting with GradientBoostingClassifier.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Gradient Boosting with GradientBoostingClassifier\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.ensemble import GradientBoostingClassifier\ngb = GradientBoostingClassifier()\nprint('GradientBoosting ready')\n",
    "hints": [
      "Write:\nfrom sklearn.ensemble import GradientBoostingClassifier\ngb = GradientBoostingClassifier()\nprint('GradientBoosting ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-133-tc-1",
        "description": "Verifies correct implementation for Gradient Boosting with GradientBoostingClassifier",
        "testFn": "code.includes('GradientBoostingClassifier')"
      }
    ]
  },
  {
    "id": "python-ds-134-support-vector-machines-svc-sv",
    "title": "134. Support Vector Machines (SVC & SVR)",
    "slug": "lesson-134-support-vector-machines-svc-sv",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Maximize decision boundary margins with kernel tricks.",
    "concepts": [
      "Support Vector Machines (SVC & SVR)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Support Vector Machines (SVC & SVR) gives you complete architectural control.",
    "explanationMarkdown": "### Support Vector Machines (SVC & SVR)\n\nMaximize decision boundary margins with kernel tricks.\n\n```python\nfrom sklearn.svm import SVC\nsvm = SVC(kernel='rbf')\nprint('SVM ready')\n```",
    "workedExample": {
      "title": "Worked Example: Support Vector Machines (SVC & SVR)",
      "code": "from sklearn.svm import SVC\nsvm = SVC(kernel='rbf')\nprint('SVM ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Support Vector Machines (SVC & SVR).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Support Vector Machines (SVC & SVR).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Support Vector Machines (SVC & SVR)\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.svm import SVC\nsvm = SVC(kernel='rbf')\nprint('SVM ready')\n",
    "hints": [
      "Write:\nfrom sklearn.svm import SVC\nsvm = SVC(kernel='rbf')\nprint('SVM ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-134-tc-1",
        "description": "Verifies correct implementation for Support Vector Machines (SVC & SVR)",
        "testFn": "code.includes('SVC')"
      }
    ]
  },
  {
    "id": "python-ds-135-naive-bayes-with-gaussiannb",
    "title": "135. Naive Bayes with GaussianNB",
    "slug": "lesson-135-naive-bayes-with-gaussiannb",
    "language": "python",
    "category": "Module 9: Supervised Learning with Scikit-Learn",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fast probabilistic classification assuming feature independence.",
    "concepts": [
      "Naive Bayes with GaussianNB",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Naive Bayes with GaussianNB gives you complete architectural control.",
    "explanationMarkdown": "### Naive Bayes with GaussianNB\n\nFast probabilistic classification assuming feature independence.\n\n```python\nfrom sklearn.naive_bayes import GaussianNB\nnb = GaussianNB()\nprint('GaussianNB ready')\n```",
    "workedExample": {
      "title": "Worked Example: Naive Bayes with GaussianNB",
      "code": "from sklearn.naive_bayes import GaussianNB\nnb = GaussianNB()\nprint('GaussianNB ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Naive Bayes with GaussianNB.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Naive Bayes with GaussianNB.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Naive Bayes with GaussianNB\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.naive_bayes import GaussianNB\nnb = GaussianNB()\nprint('GaussianNB ready')\n",
    "hints": [
      "Write:\nfrom sklearn.naive_bayes import GaussianNB\nnb = GaussianNB()\nprint('GaussianNB ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-135-tc-1",
        "description": "Verifies correct implementation for Naive Bayes with GaussianNB",
        "testFn": "code.includes('GaussianNB')"
      }
    ]
  },
  {
    "id": "python-ds-136-k-fold-cross-validation-with-c",
    "title": "136. K-Fold Cross Validation with cross_val_score",
    "slug": "lesson-136-k-fold-cross-validation-with-c",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Estimate out-of-sample performance across multiple splits.",
    "concepts": [
      "K-Fold Cross Validation with cross_val_score",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: K-Fold Cross Validation with cross_val_score gives you complete architectural control.",
    "explanationMarkdown": "### K-Fold Cross Validation with cross_val_score\n\nEstimate out-of-sample performance across multiple splits.\n\n```python\nfrom sklearn.model_selection import cross_val_score\nprint('cross_val_score utility ready')\n```",
    "workedExample": {
      "title": "Worked Example: K-Fold Cross Validation with cross_val_score",
      "code": "from sklearn.model_selection import cross_val_score\nprint('cross_val_score utility ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for K-Fold Cross Validation with cross_val_score.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of K-Fold Cross Validation with cross_val_score.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement K-Fold Cross Validation with cross_val_score\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.model_selection import cross_val_score\nprint('cross_val_score utility ready')\n",
    "hints": [
      "Write:\nfrom sklearn.model_selection import cross_val_score\nprint('cross_val_score utility ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-136-tc-1",
        "description": "Verifies correct implementation for K-Fold Cross Validation with cross_val_score",
        "testFn": "code.includes('cross_val_score')"
      }
    ]
  },
  {
    "id": "python-ds-137-stratified-k-fold-for-imbalanc",
    "title": "137. Stratified K-Fold for Imbalanced Datasets",
    "slug": "lesson-137-stratified-k-fold-for-imbalanc",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preserve identical class proportions across every fold.",
    "concepts": [
      "Stratified K-Fold for Imbalanced Datasets",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Stratified K-Fold for Imbalanced Datasets gives you complete architectural control.",
    "explanationMarkdown": "### Stratified K-Fold for Imbalanced Datasets\n\nPreserve identical class proportions across every fold.\n\n```python\nfrom sklearn.model_selection import StratifiedKFold\nskf = StratifiedKFold(n_splits=5)\nprint('StratifiedKFold ready')\n```",
    "workedExample": {
      "title": "Worked Example: Stratified K-Fold for Imbalanced Datasets",
      "code": "from sklearn.model_selection import StratifiedKFold\nskf = StratifiedKFold(n_splits=5)\nprint('StratifiedKFold ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Stratified K-Fold for Imbalanced Datasets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Stratified K-Fold for Imbalanced Datasets.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Stratified K-Fold for Imbalanced Datasets\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.model_selection import StratifiedKFold\nskf = StratifiedKFold(n_splits=5)\nprint('StratifiedKFold ready')\n",
    "hints": [
      "Write:\nfrom sklearn.model_selection import StratifiedKFold\nskf = StratifiedKFold(n_splits=5)\nprint('StratifiedKFold ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-137-tc-1",
        "description": "Verifies correct implementation for Stratified K-Fold for Imbalanced Datasets",
        "testFn": "code.includes('StratifiedKFold')"
      }
    ]
  },
  {
    "id": "python-ds-138-hyperparameter-tuning-with-gri",
    "title": "138. Hyperparameter Tuning with GridSearchCV",
    "slug": "lesson-138-hyperparameter-tuning-with-gri",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Exhaustive combinatorial search over parameter grids.",
    "concepts": [
      "Hyperparameter Tuning with GridSearchCV",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Hyperparameter Tuning with GridSearchCV gives you complete architectural control.",
    "explanationMarkdown": "### Hyperparameter Tuning with GridSearchCV\n\nExhaustive combinatorial search over parameter grids.\n\n```python\nfrom sklearn.model_selection import GridSearchCV\nprint('GridSearchCV ready')\n```",
    "workedExample": {
      "title": "Worked Example: Hyperparameter Tuning with GridSearchCV",
      "code": "from sklearn.model_selection import GridSearchCV\nprint('GridSearchCV ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hyperparameter Tuning with GridSearchCV.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hyperparameter Tuning with GridSearchCV.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Hyperparameter Tuning with GridSearchCV\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.model_selection import GridSearchCV\nprint('GridSearchCV ready')\n",
    "hints": [
      "Write:\nfrom sklearn.model_selection import GridSearchCV\nprint('GridSearchCV ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-138-tc-1",
        "description": "Verifies correct implementation for Hyperparameter Tuning with GridSearchCV",
        "testFn": "code.includes('GridSearchCV')"
      }
    ]
  },
  {
    "id": "python-ds-139-randomized-search-with-randomi",
    "title": "139. Randomized Search with RandomizedSearchCV",
    "slug": "lesson-139-randomized-search-with-randomi",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Efficient sampling across wide hyperparameter distributions.",
    "concepts": [
      "Randomized Search with RandomizedSearchCV",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Randomized Search with RandomizedSearchCV gives you complete architectural control.",
    "explanationMarkdown": "### Randomized Search with RandomizedSearchCV\n\nEfficient sampling across wide hyperparameter distributions.\n\n```python\nfrom sklearn.model_selection import RandomizedSearchCV\nprint('RandomizedSearchCV ready')\n```",
    "workedExample": {
      "title": "Worked Example: Randomized Search with RandomizedSearchCV",
      "code": "from sklearn.model_selection import RandomizedSearchCV\nprint('RandomizedSearchCV ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Randomized Search with RandomizedSearchCV.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Randomized Search with RandomizedSearchCV.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Randomized Search with RandomizedSearchCV\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.model_selection import RandomizedSearchCV\nprint('RandomizedSearchCV ready')\n",
    "hints": [
      "Write:\nfrom sklearn.model_selection import RandomizedSearchCV\nprint('RandomizedSearchCV ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-139-tc-1",
        "description": "Verifies correct implementation for Randomized Search with RandomizedSearchCV",
        "testFn": "code.includes('RandomizedSearchCV')"
      }
    ]
  },
  {
    "id": "python-ds-140-building-pipelines-with-pipeli",
    "title": "140. Building Pipelines with Pipeline([('step', Transformer)])",
    "slug": "lesson-140-building-pipelines-with-pipeli",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enforce clean atomic execution and eliminate data leakage.",
    "concepts": [
      "Building Pipelines with Pipeline([('step', Transformer)])",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Building Pipelines with Pipeline([('step', Transformer)]) gives you complete architectural control.",
    "explanationMarkdown": "### Building Pipelines with Pipeline([('step', Transformer)])\n\nEnforce clean atomic execution and eliminate data leakage.\n\n```python\nfrom sklearn.pipeline import Pipeline\npipe = Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())])\nprint('Pipeline ready')\n```",
    "workedExample": {
      "title": "Worked Example: Building Pipelines with Pipeline([('step', Transformer)])",
      "code": "from sklearn.pipeline import Pipeline\npipe = Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())])\nprint('Pipeline ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building Pipelines with Pipeline([('step', Transformer)]).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building Pipelines with Pipeline([('step', Transformer)]).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Building Pipelines with Pipeline([('step', Transformer)])\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.pipeline import Pipeline\npipe = Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())])\nprint('Pipeline ready')\n",
    "hints": [
      "Write:\nfrom sklearn.pipeline import Pipeline\npipe = Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())])\nprint('Pipeline ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-140-tc-1",
        "description": "Verifies correct implementation for Building Pipelines with Pipeline([('step', Transformer)])",
        "testFn": "code.includes('Pipeline')"
      }
    ]
  },
  {
    "id": "python-ds-141-columntransformer-for-heteroge",
    "title": "141. ColumnTransformer for Heterogeneous Feature Types",
    "slug": "lesson-141-columntransformer-for-heteroge",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Apply distinct preprocessing to numerical vs categorical columns.",
    "concepts": [
      "ColumnTransformer for Heterogeneous Feature Types",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: ColumnTransformer for Heterogeneous Feature Types gives you complete architectural control.",
    "explanationMarkdown": "### ColumnTransformer for Heterogeneous Feature Types\n\nApply distinct preprocessing to numerical vs categorical columns.\n\n```python\nfrom sklearn.compose import ColumnTransformer\nprint('ColumnTransformer ready')\n```",
    "workedExample": {
      "title": "Worked Example: ColumnTransformer for Heterogeneous Feature Types",
      "code": "from sklearn.compose import ColumnTransformer\nprint('ColumnTransformer ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ColumnTransformer for Heterogeneous Feature Types.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ColumnTransformer for Heterogeneous Feature Types.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement ColumnTransformer for Heterogeneous Feature Types\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.compose import ColumnTransformer\nprint('ColumnTransformer ready')\n",
    "hints": [
      "Write:\nfrom sklearn.compose import ColumnTransformer\nprint('ColumnTransformer ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-141-tc-1",
        "description": "Verifies correct implementation for ColumnTransformer for Heterogeneous Feature Types",
        "testFn": "code.includes('ColumnTransformer')"
      }
    ]
  },
  {
    "id": "python-ds-142-unsupervised-learning-k-means-",
    "title": "142. Unsupervised Learning: K-Means Clustering",
    "slug": "lesson-142-unsupervised-learning-k-means-",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Partition data into centroid-based clusters.",
    "concepts": [
      "Unsupervised Learning: K-Means Clustering",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Unsupervised Learning: K-Means Clustering gives you complete architectural control.",
    "explanationMarkdown": "### Unsupervised Learning: K-Means Clustering\n\nPartition data into centroid-based clusters.\n\n```python\nfrom sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3)\nprint('KMeans ready')\n```",
    "workedExample": {
      "title": "Worked Example: Unsupervised Learning: K-Means Clustering",
      "code": "from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3)\nprint('KMeans ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unsupervised Learning: K-Means Clustering.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unsupervised Learning: K-Means Clustering.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Unsupervised Learning: K-Means Clustering\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3)\nprint('KMeans ready')\n",
    "hints": [
      "Write:\nfrom sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3)\nprint('KMeans ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-142-tc-1",
        "description": "Verifies correct implementation for Unsupervised Learning: K-Means Clustering",
        "testFn": "code.includes('KMeans')"
      }
    ]
  },
  {
    "id": "python-ds-143-evaluating-clustering-silhouet",
    "title": "143. Evaluating Clustering: Silhouette Score",
    "slug": "lesson-143-evaluating-clustering-silhouet",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Quantify intra-cluster compactness and inter-cluster separation.",
    "concepts": [
      "Evaluating Clustering: Silhouette Score",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Evaluating Clustering: Silhouette Score gives you complete architectural control.",
    "explanationMarkdown": "### Evaluating Clustering: Silhouette Score\n\nQuantify intra-cluster compactness and inter-cluster separation.\n\n```python\nfrom sklearn.metrics import silhouette_score\nprint('silhouette_score ready')\n```",
    "workedExample": {
      "title": "Worked Example: Evaluating Clustering: Silhouette Score",
      "code": "from sklearn.metrics import silhouette_score\nprint('silhouette_score ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Evaluating Clustering: Silhouette Score.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Evaluating Clustering: Silhouette Score.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Evaluating Clustering: Silhouette Score\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.metrics import silhouette_score\nprint('silhouette_score ready')\n",
    "hints": [
      "Write:\nfrom sklearn.metrics import silhouette_score\nprint('silhouette_score ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-143-tc-1",
        "description": "Verifies correct implementation for Evaluating Clustering: Silhouette Score",
        "testFn": "code.includes('silhouette_score')"
      }
    ]
  },
  {
    "id": "python-ds-144-hierarchical-clustering-and-de",
    "title": "144. Hierarchical Clustering and Dendrograms",
    "slug": "lesson-144-hierarchical-clustering-and-de",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Agglomerative clustering tree structures.",
    "concepts": [
      "Hierarchical Clustering and Dendrograms",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Hierarchical Clustering and Dendrograms gives you complete architectural control.",
    "explanationMarkdown": "### Hierarchical Clustering and Dendrograms\n\nAgglomerative clustering tree structures.\n\n```python\nfrom sklearn.cluster import AgglomerativeClustering\nagg = AgglomerativeClustering()\nprint('AgglomerativeClustering ready')\n```",
    "workedExample": {
      "title": "Worked Example: Hierarchical Clustering and Dendrograms",
      "code": "from sklearn.cluster import AgglomerativeClustering\nagg = AgglomerativeClustering()\nprint('AgglomerativeClustering ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hierarchical Clustering and Dendrograms.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hierarchical Clustering and Dendrograms.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Hierarchical Clustering and Dendrograms\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.cluster import AgglomerativeClustering\nagg = AgglomerativeClustering()\nprint('AgglomerativeClustering ready')\n",
    "hints": [
      "Write:\nfrom sklearn.cluster import AgglomerativeClustering\nagg = AgglomerativeClustering()\nprint('AgglomerativeClustering ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-144-tc-1",
        "description": "Verifies correct implementation for Hierarchical Clustering and Dendrograms",
        "testFn": "code.includes('AgglomerativeClustering')"
      }
    ]
  },
  {
    "id": "python-ds-145-anomaly-detection-with-isolati",
    "title": "145. Anomaly Detection with IsolationForest",
    "slug": "lesson-145-anomaly-detection-with-isolati",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Unsupervised outlier isolation via random forest partitioning.",
    "concepts": [
      "Anomaly Detection with IsolationForest",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Anomaly Detection with IsolationForest gives you complete architectural control.",
    "explanationMarkdown": "### Anomaly Detection with IsolationForest\n\nUnsupervised outlier isolation via random forest partitioning.\n\n```python\nfrom sklearn.ensemble import IsolationForest\niso = IsolationForest()\nprint('IsolationForest ready')\n```",
    "workedExample": {
      "title": "Worked Example: Anomaly Detection with IsolationForest",
      "code": "from sklearn.ensemble import IsolationForest\niso = IsolationForest()\nprint('IsolationForest ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Anomaly Detection with IsolationForest.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Anomaly Detection with IsolationForest.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Anomaly Detection with IsolationForest\n# TODO: Write code below\n\n",
    "solutionCode": "from sklearn.ensemble import IsolationForest\niso = IsolationForest()\nprint('IsolationForest ready')\n",
    "hints": [
      "Write:\nfrom sklearn.ensemble import IsolationForest\niso = IsolationForest()\nprint('IsolationForest ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-145-tc-1",
        "description": "Verifies correct implementation for Anomaly Detection with IsolationForest",
        "testFn": "code.includes('IsolationForest')"
      }
    ]
  },
  {
    "id": "python-ds-146-handling-class-imbalance-with-",
    "title": "146. Handling Class Imbalance with Class Weights",
    "slug": "lesson-146-handling-class-imbalance-with-",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Penalize minority misclassifications proportionally.",
    "concepts": [
      "Handling Class Imbalance with Class Weights",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Handling Class Imbalance with Class Weights gives you complete architectural control.",
    "explanationMarkdown": "### Handling Class Imbalance with Class Weights\n\nPenalize minority misclassifications proportionally.\n\n```python\nprint('LogisticRegression(class_weight=\"balanced\")')\n```",
    "workedExample": {
      "title": "Worked Example: Handling Class Imbalance with Class Weights",
      "code": "print('LogisticRegression(class_weight=\"balanced\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Class Imbalance with Class Weights.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Class Imbalance with Class Weights.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling Class Imbalance with Class Weights\n# TODO: Write code below\n\n",
    "solutionCode": "print('LogisticRegression(class_weight=\"balanced\")')\n",
    "hints": [
      "Write:\nprint('LogisticRegression(class_weight=\"balanced\")')"
    ],
    "testCases": [
      {
        "id": "python-ds-146-tc-1",
        "description": "Verifies correct implementation for Handling Class Imbalance with Class Weights",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-147-model-persistence-joblib-dump-",
    "title": "147. Model Persistence: joblib.dump and joblib.load",
    "slug": "lesson-147-model-persistence-joblib-dump-",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Serialize trained models to disk for production APIs.",
    "concepts": [
      "Model Persistence: joblib.dump and joblib.load",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Model Persistence: joblib.dump and joblib.load gives you complete architectural control.",
    "explanationMarkdown": "### Model Persistence: joblib.dump and joblib.load\n\nSerialize trained models to disk for production APIs.\n\n```python\nimport joblib\nprint('joblib serialization ready')\n```",
    "workedExample": {
      "title": "Worked Example: Model Persistence: joblib.dump and joblib.load",
      "code": "import joblib\nprint('joblib serialization ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Model Persistence: joblib.dump and joblib.load.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Model Persistence: joblib.dump and joblib.load.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Model Persistence: joblib.dump and joblib.load\n# TODO: Write code below\n\n",
    "solutionCode": "import joblib\nprint('joblib serialization ready')\n",
    "hints": [
      "Write:\nimport joblib\nprint('joblib serialization ready')"
    ],
    "testCases": [
      {
        "id": "python-ds-147-tc-1",
        "description": "Verifies correct implementation for Model Persistence: joblib.dump and joblib.load",
        "testFn": "code.includes('joblib')"
      }
    ]
  },
  {
    "id": "python-ds-148-interpreting-feature-importanc",
    "title": "148. Interpreting Feature Importance (model.feature_importances_)",
    "slug": "lesson-148-interpreting-feature-importanc",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify driving variables in tree-based architectures.",
    "concepts": [
      "Interpreting Feature Importance (model.feature_importances_)",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Interpreting Feature Importance (model.feature_importances_) gives you complete architectural control.",
    "explanationMarkdown": "### Interpreting Feature Importance (model.feature_importances_)\n\nIdentify driving variables in tree-based architectures.\n\n```python\nprint('Inspect relative feature importances: rf.feature_importances_')\n```",
    "workedExample": {
      "title": "Worked Example: Interpreting Feature Importance (model.feature_importances_)",
      "code": "print('Inspect relative feature importances: rf.feature_importances_')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Interpreting Feature Importance (model.feature_importances_).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Interpreting Feature Importance (model.feature_importances_).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Interpreting Feature Importance (model.feature_importances_)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Inspect relative feature importances: rf.feature_importances_')\n",
    "hints": [
      "Write:\nprint('Inspect relative feature importances: rf.feature_importances_')"
    ],
    "testCases": [
      {
        "id": "python-ds-148-tc-1",
        "description": "Verifies correct implementation for Interpreting Feature Importance (model.feature_importances_)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-149-model-serving-principles-fasta",
    "title": "149. Model Serving Principles: FastAPI and Batch Inference",
    "slug": "lesson-149-model-serving-principles-fasta",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Wrap trained estimators in REST endpoints.",
    "concepts": [
      "Model Serving Principles: FastAPI and Batch Inference",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: Model Serving Principles: FastAPI and Batch Inference gives you complete architectural control.",
    "explanationMarkdown": "### Model Serving Principles: FastAPI and Batch Inference\n\nWrap trained estimators in REST endpoints.\n\n```python\nprint('FastAPI endpoint serves model.predict(request.features)')\n```",
    "workedExample": {
      "title": "Worked Example: Model Serving Principles: FastAPI and Batch Inference",
      "code": "print('FastAPI endpoint serves model.predict(request.features)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Model Serving Principles: FastAPI and Batch Inference.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Model Serving Principles: FastAPI and Batch Inference.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Model Serving Principles: FastAPI and Batch Inference\n# TODO: Write code below\n\n",
    "solutionCode": "print('FastAPI endpoint serves model.predict(request.features)')\n",
    "hints": [
      "Write:\nprint('FastAPI endpoint serves model.predict(request.features)')"
    ],
    "testCases": [
      {
        "id": "python-ds-149-tc-1",
        "description": "Verifies correct implementation for Model Serving Principles: FastAPI and Batch Inference",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-ds-150-end-to-end-data-science-ai-cap",
    "title": "150. End-to-End Data Science & AI Capstone",
    "slug": "lesson-150-end-to-end-data-science-ai-cap",
    "language": "python",
    "category": "Module 10: Model Validation, Pipelines & Capstones",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Complete pipeline: cleaning, scaling, tuning, and evaluation.",
    "concepts": [
      "End-to-End Data Science & AI Capstone",
      "Python for Data Science & AI (150 Topics)"
    ],
    "analogy": "Like building with precision components: End-to-End Data Science & AI Capstone gives you complete architectural control.",
    "explanationMarkdown": "### End-to-End Data Science & AI Capstone\n\nComplete pipeline: cleaning, scaling, tuning, and evaluation.\n\n```python\nprint('Capstone Complete: End-to-end Machine Learning pipeline built!')\n```",
    "workedExample": {
      "title": "Worked Example: End-to-End Data Science & AI Capstone",
      "code": "print('Capstone Complete: End-to-end Machine Learning pipeline built!')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for End-to-End Data Science & AI Capstone.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of End-to-End Data Science & AI Capstone.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement End-to-End Data Science & AI Capstone\n# TODO: Write code below\n\n",
    "solutionCode": "print('Capstone Complete: End-to-end Machine Learning pipeline built!')\n",
    "hints": [
      "Write:\nprint('Capstone Complete: End-to-end Machine Learning pipeline built!')"
    ],
    "testCases": [
      {
        "id": "python-ds-150-tc-1",
        "description": "Verifies correct implementation for End-to-End Data Science & AI Capstone",
        "testFn": "logs.length > 0"
      }
    ]
  }
]
};
