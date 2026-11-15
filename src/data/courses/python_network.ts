import { Track } from '../../types';

export const PYTHON_NETWORK_TRACK: Track = {
  id: "python-network",
  title: "Python: Network Security & PyShark (150 Topics)",
  slug: "python-network-pyshark",
  language: "python",
  icon: "ShieldAlert",
  color: "from-red-500 to-rose-600",
  tagline: "Deep packet inspection, live traffic sniffing, Wireshark BPF filters, and security forensics across 150 topics.",
  description: "Inspect raw ethernet frames, IP headers, TCP handshakes, DNS anomalies, HTTP/TLS payloads, port scans, and automated threat detection.",
  lessons: [
  {
    "id": "python-network-1-the-osi-and-tcp-ip-networking-",
    "title": "1. The OSI and TCP/IP Networking Models",
    "slug": "lesson-1-the-osi-and-tcp-ip-networking-",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "7-layer vs 4-layer network abstractions.",
    "concepts": [
      "The OSI and TCP/IP Networking Models",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: The OSI and TCP/IP Networking Models reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### The OSI and TCP/IP Networking Models\n\n7-layer vs 4-layer network abstractions.\n\n```python\nimport socket\nprint('Networking ready')\n```",
    "workedExample": {
      "title": "Worked Example: The OSI and TCP/IP Networking Models",
      "code": "import socket\nprint('Networking ready')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The OSI and TCP/IP Networking Models.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The OSI and TCP/IP Networking Models.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The OSI and TCP/IP Networking Models\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nprint('Networking ready')\n",
    "hints": [
      "Write:\nimport socket\nprint('Networking ready')"
    ],
    "testCases": [
      {
        "id": "python-network-1-tc-1",
        "description": "Verifies correct implementation for The OSI and TCP/IP Networking Models",
        "testFn": "code.includes('socket')"
      }
    ]
  },
  {
    "id": "python-network-2-creating-a-basic-tcp-client-wi",
    "title": "2. Creating a Basic TCP Client with socket.socket()",
    "slug": "lesson-2-creating-a-basic-tcp-client-wi",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Connect to remote host and port over IPv4 TCP.",
    "concepts": [
      "Creating a Basic TCP Client with socket.socket()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Creating a Basic TCP Client with socket.socket() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Creating a Basic TCP Client with socket.socket()\n\nConnect to remote host and port over IPv4 TCP.\n\n```python\nimport socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nprint('TCP Socket created')\n```",
    "workedExample": {
      "title": "Worked Example: Creating a Basic TCP Client with socket.socket()",
      "code": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nprint('TCP Socket created')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating a Basic TCP Client with socket.socket().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating a Basic TCP Client with socket.socket().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating a Basic TCP Client with socket.socket()\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nprint('TCP Socket created')\n",
    "hints": [
      "Write:\nimport socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nprint('TCP Socket created')"
    ],
    "testCases": [
      {
        "id": "python-network-2-tc-1",
        "description": "Verifies correct implementation for Creating a Basic TCP Client with socket.socket()",
        "testFn": "code.includes('SOCK_STREAM')"
      }
    ]
  },
  {
    "id": "python-network-3-connecting-to-a-remote-port-s-",
    "title": "3. Connecting to a Remote Port: s.connect()",
    "slug": "lesson-3-connecting-to-a-remote-port-s-",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Establish a 3-way TCP handshake connection.",
    "concepts": [
      "Connecting to a Remote Port: s.connect()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Connecting to a Remote Port: s.connect() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Connecting to a Remote Port: s.connect()\n\nEstablish a 3-way TCP handshake connection.\n\n```python\nimport socket\nprint('s.connect((\"example.com\", 80))')\n```",
    "workedExample": {
      "title": "Worked Example: Connecting to a Remote Port: s.connect()",
      "code": "import socket\nprint('s.connect((\"example.com\", 80))')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Connecting to a Remote Port: s.connect().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Connecting to a Remote Port: s.connect().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Connecting to a Remote Port: s.connect()\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nprint('s.connect((\"example.com\", 80))')\n",
    "hints": [
      "Write:\nimport socket\nprint('s.connect((\"example.com\", 80))')"
    ],
    "testCases": [
      {
        "id": "python-network-3-tc-1",
        "description": "Verifies correct implementation for Connecting to a Remote Port: s.connect()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-4-sending-and-receiving-raw-byte",
    "title": "4. Sending and Receiving Raw Bytes (sendall & recv)",
    "slug": "lesson-4-sending-and-receiving-raw-byte",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Encode strings to UTF-8 bytes over the wire.",
    "concepts": [
      "Sending and Receiving Raw Bytes (sendall & recv)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Sending and Receiving Raw Bytes (sendall & recv) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Sending and Receiving Raw Bytes (sendall & recv)\n\nEncode strings to UTF-8 bytes over the wire.\n\n```python\nimport socket\nreq = b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n'\nprint('Payload length:', len(req))\n```",
    "workedExample": {
      "title": "Worked Example: Sending and Receiving Raw Bytes (sendall & recv)",
      "code": "import socket\nreq = b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n'\nprint('Payload length:', len(req))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Sending and Receiving Raw Bytes (sendall & recv).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Sending and Receiving Raw Bytes (sendall & recv).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Sending and Receiving Raw Bytes (sendall & recv)\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nreq = b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n'\nprint('Payload length:', len(req))\n",
    "hints": [
      "Write:\nimport socket\nreq = b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n'\nprint('Payload length:', len(req))"
    ],
    "testCases": [
      {
        "id": "python-network-4-tc-1",
        "description": "Verifies correct implementation for Sending and Receiving Raw Bytes (sendall & recv)",
        "testFn": "code.includes('b\"GET') || code.includes('b\\'GET')"
      }
    ]
  },
  {
    "id": "python-network-5-creating-a-tcp-server-bind-lis",
    "title": "5. Creating a TCP Server: bind(), listen(), accept()",
    "slug": "lesson-5-creating-a-tcp-server-bind-lis",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Listen for incoming client connections.",
    "concepts": [
      "Creating a TCP Server: bind(), listen(), accept()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Creating a TCP Server: bind(), listen(), accept() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Creating a TCP Server: bind(), listen(), accept()\n\nListen for incoming client connections.\n\n```python\nimport socket\ns = socket.socket()\nprint('Server socket bound to port 8080')\n```",
    "workedExample": {
      "title": "Worked Example: Creating a TCP Server: bind(), listen(), accept()",
      "code": "import socket\ns = socket.socket()\nprint('Server socket bound to port 8080')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Creating a TCP Server: bind(), listen(), accept().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Creating a TCP Server: bind(), listen(), accept().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Creating a TCP Server: bind(), listen(), accept()\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\ns = socket.socket()\nprint('Server socket bound to port 8080')\n",
    "hints": [
      "Write:\nimport socket\ns = socket.socket()\nprint('Server socket bound to port 8080')"
    ],
    "testCases": [
      {
        "id": "python-network-5-tc-1",
        "description": "Verifies correct implementation for Creating a TCP Server: bind(), listen(), accept()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-6-udp-sockets-sock-dgram-and-con",
    "title": "6. UDP Sockets: SOCK_DGRAM and Connectionless Packets",
    "slug": "lesson-6-udp-sockets-sock-dgram-and-con",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Send lightweight datagrams without handshakes.",
    "concepts": [
      "UDP Sockets: SOCK_DGRAM and Connectionless Packets",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: UDP Sockets: SOCK_DGRAM and Connectionless Packets reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### UDP Sockets: SOCK_DGRAM and Connectionless Packets\n\nSend lightweight datagrams without handshakes.\n\n```python\nimport socket\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nprint('UDP Socket created')\n```",
    "workedExample": {
      "title": "Worked Example: UDP Sockets: SOCK_DGRAM and Connectionless Packets",
      "code": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nprint('UDP Socket created')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for UDP Sockets: SOCK_DGRAM and Connectionless Packets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of UDP Sockets: SOCK_DGRAM and Connectionless Packets.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement UDP Sockets: SOCK_DGRAM and Connectionless Packets\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nprint('UDP Socket created')\n",
    "hints": [
      "Write:\nimport socket\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nprint('UDP Socket created')"
    ],
    "testCases": [
      {
        "id": "python-network-6-tc-1",
        "description": "Verifies correct implementation for UDP Sockets: SOCK_DGRAM and Connectionless Packets",
        "testFn": "code.includes('SOCK_DGRAM')"
      }
    ]
  },
  {
    "id": "python-network-7-socket-timeouts-and-blocking-v",
    "title": "7. Socket Timeouts and Blocking vs Non-Blocking",
    "slug": "lesson-7-socket-timeouts-and-blocking-v",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Set timeouts with settimeout() to prevent hang.",
    "concepts": [
      "Socket Timeouts and Blocking vs Non-Blocking",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Socket Timeouts and Blocking vs Non-Blocking reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Socket Timeouts and Blocking vs Non-Blocking\n\nSet timeouts with settimeout() to prevent hang.\n\n```python\nimport socket\ns = socket.socket()\ns.settimeout(2.0)\nprint('Timeout set to 2.0s')\n```",
    "workedExample": {
      "title": "Worked Example: Socket Timeouts and Blocking vs Non-Blocking",
      "code": "import socket\ns = socket.socket()\ns.settimeout(2.0)\nprint('Timeout set to 2.0s')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Socket Timeouts and Blocking vs Non-Blocking.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Socket Timeouts and Blocking vs Non-Blocking.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Socket Timeouts and Blocking vs Non-Blocking\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\ns = socket.socket()\ns.settimeout(2.0)\nprint('Timeout set to 2.0s')\n",
    "hints": [
      "Write:\nimport socket\ns = socket.socket()\ns.settimeout(2.0)\nprint('Timeout set to 2.0s')"
    ],
    "testCases": [
      {
        "id": "python-network-7-tc-1",
        "description": "Verifies correct implementation for Socket Timeouts and Blocking vs Non-Blocking",
        "testFn": "code.includes('settimeout')"
      }
    ]
  },
  {
    "id": "python-network-8-address-resolution-gethostbyna",
    "title": "8. Address Resolution: gethostbyname() and getaddrinfo()",
    "slug": "lesson-8-address-resolution-gethostbyna",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query local DNS resolver for IP coordinates.",
    "concepts": [
      "Address Resolution: gethostbyname() and getaddrinfo()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Address Resolution: gethostbyname() and getaddrinfo() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Address Resolution: gethostbyname() and getaddrinfo()\n\nQuery local DNS resolver for IP coordinates.\n\n```python\nimport socket\nprint('Resolve domain to IP with gethostbyname')\n```",
    "workedExample": {
      "title": "Worked Example: Address Resolution: gethostbyname() and getaddrinfo()",
      "code": "import socket\nprint('Resolve domain to IP with gethostbyname')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Address Resolution: gethostbyname() and getaddrinfo().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Address Resolution: gethostbyname() and getaddrinfo().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Address Resolution: gethostbyname() and getaddrinfo()\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nprint('Resolve domain to IP with gethostbyname')\n",
    "hints": [
      "Write:\nimport socket\nprint('Resolve domain to IP with gethostbyname')"
    ],
    "testCases": [
      {
        "id": "python-network-8-tc-1",
        "description": "Verifies correct implementation for Address Resolution: gethostbyname() and getaddrinfo()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-9-handling-ipv6-socket-af-inet6",
    "title": "9. Handling IPv6: socket.AF_INET6",
    "slug": "lesson-9-handling-ipv6-socket-af-inet6",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Communicate over 128-bit IPv6 addressing.",
    "concepts": [
      "Handling IPv6: socket.AF_INET6",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Handling IPv6: socket.AF_INET6 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Handling IPv6: socket.AF_INET6\n\nCommunicate over 128-bit IPv6 addressing.\n\n```python\nimport socket\ns = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)\nprint('IPv6 Socket created')\n```",
    "workedExample": {
      "title": "Worked Example: Handling IPv6: socket.AF_INET6",
      "code": "import socket\ns = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)\nprint('IPv6 Socket created')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling IPv6: socket.AF_INET6.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling IPv6: socket.AF_INET6.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling IPv6: socket.AF_INET6\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\ns = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)\nprint('IPv6 Socket created')\n",
    "hints": [
      "Write:\nimport socket\ns = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)\nprint('IPv6 Socket created')"
    ],
    "testCases": [
      {
        "id": "python-network-9-tc-1",
        "description": "Verifies correct implementation for Handling IPv6: socket.AF_INET6",
        "testFn": "code.includes('AF_INET6')"
      }
    ]
  },
  {
    "id": "python-network-10-socket-option-flags-setsockopt",
    "title": "10. Socket Option Flags: setsockopt and SO_REUSEADDR",
    "slug": "lesson-10-socket-option-flags-setsockopt",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Avoid TIME_WAIT port lockouts during server restart.",
    "concepts": [
      "Socket Option Flags: setsockopt and SO_REUSEADDR",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Socket Option Flags: setsockopt and SO_REUSEADDR reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Socket Option Flags: setsockopt and SO_REUSEADDR\n\nAvoid TIME_WAIT port lockouts during server restart.\n\n```python\nimport socket\ns = socket.socket()\ns.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nprint('SO_REUSEADDR enabled')\n```",
    "workedExample": {
      "title": "Worked Example: Socket Option Flags: setsockopt and SO_REUSEADDR",
      "code": "import socket\ns = socket.socket()\ns.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nprint('SO_REUSEADDR enabled')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Socket Option Flags: setsockopt and SO_REUSEADDR.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Socket Option Flags: setsockopt and SO_REUSEADDR.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Socket Option Flags: setsockopt and SO_REUSEADDR\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\ns = socket.socket()\ns.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nprint('SO_REUSEADDR enabled')\n",
    "hints": [
      "Write:\nimport socket\ns = socket.socket()\ns.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nprint('SO_REUSEADDR enabled')"
    ],
    "testCases": [
      {
        "id": "python-network-10-tc-1",
        "description": "Verifies correct implementation for Socket Option Flags: setsockopt and SO_REUSEADDR",
        "testFn": "code.includes('SO_REUSEADDR')"
      }
    ]
  },
  {
    "id": "python-network-11-network-byte-order-vs-host-byt",
    "title": "11. Network Byte Order vs Host Byte Order (Endianness)",
    "slug": "lesson-11-network-byte-order-vs-host-byt",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Big-endian network standard (htons, htonl).",
    "concepts": [
      "Network Byte Order vs Host Byte Order (Endianness)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Network Byte Order vs Host Byte Order (Endianness) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Network Byte Order vs Host Byte Order (Endianness)\n\nBig-endian network standard (htons, htonl).\n\n```python\nimport struct\nprint(struct.pack('!H', 8080))\n```",
    "workedExample": {
      "title": "Worked Example: Network Byte Order vs Host Byte Order (Endianness)",
      "code": "import struct\nprint(struct.pack('!H', 8080))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Network Byte Order vs Host Byte Order (Endianness).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Network Byte Order vs Host Byte Order (Endianness).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Network Byte Order vs Host Byte Order (Endianness)\n# TODO: Write code below\n\n",
    "solutionCode": "import struct\nprint(struct.pack('!H', 8080))\n",
    "hints": [
      "Write:\nimport struct\nprint(struct.pack('!H', 8080))"
    ],
    "testCases": [
      {
        "id": "python-network-11-tc-1",
        "description": "Verifies correct implementation for Network Byte Order vs Host Byte Order (Endianness)",
        "testFn": "code.includes('struct')"
      }
    ]
  },
  {
    "id": "python-network-12-port-scanning-basics-identifyi",
    "title": "12. Port Scanning Basics: Identifying Open Services",
    "slug": "lesson-12-port-scanning-basics-identifyi",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Iterate through ports to detect active listeners.",
    "concepts": [
      "Port Scanning Basics: Identifying Open Services",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Port Scanning Basics: Identifying Open Services reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Port Scanning Basics: Identifying Open Services\n\nIterate through ports to detect active listeners.\n\n```python\nprint('Test ports 21, 22, 80, 443 with connect_ex()')\n```",
    "workedExample": {
      "title": "Worked Example: Port Scanning Basics: Identifying Open Services",
      "code": "print('Test ports 21, 22, 80, 443 with connect_ex()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Port Scanning Basics: Identifying Open Services.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Port Scanning Basics: Identifying Open Services.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Port Scanning Basics: Identifying Open Services\n# TODO: Write code below\n\n",
    "solutionCode": "print('Test ports 21, 22, 80, 443 with connect_ex()')\n",
    "hints": [
      "Write:\nprint('Test ports 21, 22, 80, 443 with connect_ex()')"
    ],
    "testCases": [
      {
        "id": "python-network-12-tc-1",
        "description": "Verifies correct implementation for Port Scanning Basics: Identifying Open Services",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-13-socket-error-handling-with-soc",
    "title": "13. Socket Error Handling with socket.error and timeout",
    "slug": "lesson-13-socket-error-handling-with-soc",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Catch connection resets, refused ports, timeouts.",
    "concepts": [
      "Socket Error Handling with socket.error and timeout",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Socket Error Handling with socket.error and timeout reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Socket Error Handling with socket.error and timeout\n\nCatch connection resets, refused ports, timeouts.\n\n```python\nimport socket\nprint('try/except socket.timeout, ConnectionRefusedError')\n```",
    "workedExample": {
      "title": "Worked Example: Socket Error Handling with socket.error and timeout",
      "code": "import socket\nprint('try/except socket.timeout, ConnectionRefusedError')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Socket Error Handling with socket.error and timeout.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Socket Error Handling with socket.error and timeout.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Socket Error Handling with socket.error and timeout\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nprint('try/except socket.timeout, ConnectionRefusedError')\n",
    "hints": [
      "Write:\nimport socket\nprint('try/except socket.timeout, ConnectionRefusedError')"
    ],
    "testCases": [
      {
        "id": "python-network-13-tc-1",
        "description": "Verifies correct implementation for Socket Error Handling with socket.error and timeout",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-14-handling-ssl-tls-sockets-with-",
    "title": "14. Handling SSL/TLS Sockets with ssl.create_default_context()",
    "slug": "lesson-14-handling-ssl-tls-sockets-with-",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Wrap raw TCP stream in TLS encryption.",
    "concepts": [
      "Handling SSL/TLS Sockets with ssl.create_default_context()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Handling SSL/TLS Sockets with ssl.create_default_context() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Handling SSL/TLS Sockets with ssl.create_default_context()\n\nWrap raw TCP stream in TLS encryption.\n\n```python\nimport ssl\nprint('SSLContext wraps socket with TLS verification')\n```",
    "workedExample": {
      "title": "Worked Example: Handling SSL/TLS Sockets with ssl.create_default_context()",
      "code": "import ssl\nprint('SSLContext wraps socket with TLS verification')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling SSL/TLS Sockets with ssl.create_default_context().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling SSL/TLS Sockets with ssl.create_default_context().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling SSL/TLS Sockets with ssl.create_default_context()\n# TODO: Write code below\n\n",
    "solutionCode": "import ssl\nprint('SSLContext wraps socket with TLS verification')\n",
    "hints": [
      "Write:\nimport ssl\nprint('SSLContext wraps socket with TLS verification')"
    ],
    "testCases": [
      {
        "id": "python-network-14-tc-1",
        "description": "Verifies correct implementation for Handling SSL/TLS Sockets with ssl.create_default_context()",
        "testFn": "code.includes('ssl')"
      }
    ]
  },
  {
    "id": "python-network-15-raw-sockets-overview-why-pysha",
    "title": "15. Raw Sockets Overview: Why PyShark / Libpcap is Needed",
    "slug": "lesson-15-raw-sockets-overview-why-pysha",
    "language": "python",
    "category": "Module 1: Python Sockets & TCP/UDP Basics",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "OS permission boundaries and promiscuous mode capture.",
    "concepts": [
      "Raw Sockets Overview: Why PyShark / Libpcap is Needed",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Raw Sockets Overview: Why PyShark / Libpcap is Needed reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Raw Sockets Overview: Why PyShark / Libpcap is Needed\n\nOS permission boundaries and promiscuous mode capture.\n\n```python\nprint('Raw packets require Libpcap/WinPcap kernel drivers')\n```",
    "workedExample": {
      "title": "Worked Example: Raw Sockets Overview: Why PyShark / Libpcap is Needed",
      "code": "print('Raw packets require Libpcap/WinPcap kernel drivers')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Raw Sockets Overview: Why PyShark / Libpcap is Needed.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Raw Sockets Overview: Why PyShark / Libpcap is Needed.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Raw Sockets Overview: Why PyShark / Libpcap is Needed\n# TODO: Write code below\n\n",
    "solutionCode": "print('Raw packets require Libpcap/WinPcap kernel drivers')\n",
    "hints": [
      "Write:\nprint('Raw packets require Libpcap/WinPcap kernel drivers')"
    ],
    "testCases": [
      {
        "id": "python-network-15-tc-1",
        "description": "Verifies correct implementation for Raw Sockets Overview: Why PyShark / Libpcap is Needed",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-16-the-ethernet-frame-structure-l",
    "title": "16. The Ethernet Frame Structure (Layer 2)",
    "slug": "lesson-16-the-ethernet-frame-structure-l",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Preamble, Destination MAC, Source MAC, EtherType, Payload, CRC.",
    "concepts": [
      "The Ethernet Frame Structure (Layer 2)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: The Ethernet Frame Structure (Layer 2) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### The Ethernet Frame Structure (Layer 2)\n\nPreamble, Destination MAC, Source MAC, EtherType, Payload, CRC.\n\n```python\nprint('EtherType 0x0800: IPv4 | 0x86DD: IPv6 | 0x0806: ARP')\n```",
    "workedExample": {
      "title": "Worked Example: The Ethernet Frame Structure (Layer 2)",
      "code": "print('EtherType 0x0800: IPv4 | 0x86DD: IPv6 | 0x0806: ARP')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The Ethernet Frame Structure (Layer 2).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The Ethernet Frame Structure (Layer 2).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The Ethernet Frame Structure (Layer 2)\n# TODO: Write code below\n\n",
    "solutionCode": "print('EtherType 0x0800: IPv4 | 0x86DD: IPv6 | 0x0806: ARP')\n",
    "hints": [
      "Write:\nprint('EtherType 0x0800: IPv4 | 0x86DD: IPv6 | 0x0806: ARP')"
    ],
    "testCases": [
      {
        "id": "python-network-16-tc-1",
        "description": "Verifies correct implementation for The Ethernet Frame Structure (Layer 2)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-17-mac-address-formatting-and-oui",
    "title": "17. MAC Address Formatting and OUI Vendor Lookup",
    "slug": "lesson-17-mac-address-formatting-and-oui",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Deconstruct 6-byte hardware identifiers (XX:XX:XX:YY:YY:YY).",
    "concepts": [
      "MAC Address Formatting and OUI Vendor Lookup",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: MAC Address Formatting and OUI Vendor Lookup reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### MAC Address Formatting and OUI Vendor Lookup\n\nDeconstruct 6-byte hardware identifiers (XX:XX:XX:YY:YY:YY).\n\n```python\nmac = '00:1A:2B:3C:4D:5E'\nprint('OUI Prefix:', mac[:8])\n```",
    "workedExample": {
      "title": "Worked Example: MAC Address Formatting and OUI Vendor Lookup",
      "code": "mac = '00:1A:2B:3C:4D:5E'\nprint('OUI Prefix:', mac[:8])",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for MAC Address Formatting and OUI Vendor Lookup.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of MAC Address Formatting and OUI Vendor Lookup.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement MAC Address Formatting and OUI Vendor Lookup\n# TODO: Write code below\n\n",
    "solutionCode": "mac = '00:1A:2B:3C:4D:5E'\nprint('OUI Prefix:', mac[:8])\n",
    "hints": [
      "Write:\nmac = '00:1A:2B:3C:4D:5E'\nprint('OUI Prefix:', mac[:8])"
    ],
    "testCases": [
      {
        "id": "python-network-17-tc-1",
        "description": "Verifies correct implementation for MAC Address Formatting and OUI Vendor Lookup",
        "testFn": "code.includes('mac')"
      }
    ]
  },
  {
    "id": "python-network-18-ipv4-header-format-layer-3",
    "title": "18. IPv4 Header Format (Layer 3)",
    "slug": "lesson-18-ipv4-header-format-layer-3",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Version, IHL, DSCP, Total Length, Identification, Flags, TTL, Protocol.",
    "concepts": [
      "IPv4 Header Format (Layer 3)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: IPv4 Header Format (Layer 3) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### IPv4 Header Format (Layer 3)\n\nVersion, IHL, DSCP, Total Length, Identification, Flags, TTL, Protocol.\n\n```python\nprint('IPv4 Header: 20 bytes min; Protocol 6=TCP, 17=UDP, 1=ICMP')\n```",
    "workedExample": {
      "title": "Worked Example: IPv4 Header Format (Layer 3)",
      "code": "print('IPv4 Header: 20 bytes min; Protocol 6=TCP, 17=UDP, 1=ICMP')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for IPv4 Header Format (Layer 3).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of IPv4 Header Format (Layer 3).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement IPv4 Header Format (Layer 3)\n# TODO: Write code below\n\n",
    "solutionCode": "print('IPv4 Header: 20 bytes min; Protocol 6=TCP, 17=UDP, 1=ICMP')\n",
    "hints": [
      "Write:\nprint('IPv4 Header: 20 bytes min; Protocol 6=TCP, 17=UDP, 1=ICMP')"
    ],
    "testCases": [
      {
        "id": "python-network-18-tc-1",
        "description": "Verifies correct implementation for IPv4 Header Format (Layer 3)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-19-time-to-live-ttl-and-tracerout",
    "title": "19. Time To Live (TTL) and Traceroute Mechanics",
    "slug": "lesson-19-time-to-live-ttl-and-tracerout",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "How TTL decrement prevents infinite routing loops.",
    "concepts": [
      "Time To Live (TTL) and Traceroute Mechanics",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Time To Live (TTL) and Traceroute Mechanics reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Time To Live (TTL) and Traceroute Mechanics\n\nHow TTL decrement prevents infinite routing loops.\n\n```python\nttl = 64\nprint('Starting TTL:', ttl)\n```",
    "workedExample": {
      "title": "Worked Example: Time To Live (TTL) and Traceroute Mechanics",
      "code": "ttl = 64\nprint('Starting TTL:', ttl)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Time To Live (TTL) and Traceroute Mechanics.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Time To Live (TTL) and Traceroute Mechanics.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Time To Live (TTL) and Traceroute Mechanics\n# TODO: Write code below\n\n",
    "solutionCode": "ttl = 64\nprint('Starting TTL:', ttl)\n",
    "hints": [
      "Write:\nttl = 64\nprint('Starting TTL:', ttl)"
    ],
    "testCases": [
      {
        "id": "python-network-19-tc-1",
        "description": "Verifies correct implementation for Time To Live (TTL) and Traceroute Mechanics",
        "testFn": "code.includes('ttl')"
      }
    ]
  },
  {
    "id": "python-network-20-ip-header-checksum-verificatio",
    "title": "20. IP Header Checksum Verification",
    "slug": "lesson-20-ip-header-checksum-verificatio",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "16-bit one's complement sum calculation.",
    "concepts": [
      "IP Header Checksum Verification",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: IP Header Checksum Verification reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### IP Header Checksum Verification\n\n16-bit one's complement sum calculation.\n\n```python\nprint('IP Checksum verifies packet header integrity across hops')\n```",
    "workedExample": {
      "title": "Worked Example: IP Header Checksum Verification",
      "code": "print('IP Checksum verifies packet header integrity across hops')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for IP Header Checksum Verification.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of IP Header Checksum Verification.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement IP Header Checksum Verification\n# TODO: Write code below\n\n",
    "solutionCode": "print('IP Checksum verifies packet header integrity across hops')\n",
    "hints": [
      "Write:\nprint('IP Checksum verifies packet header integrity across hops')"
    ],
    "testCases": [
      {
        "id": "python-network-20-tc-1",
        "description": "Verifies correct implementation for IP Header Checksum Verification",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-21-ip-fragmentation-flags-df-mf-a",
    "title": "21. IP Fragmentation: Flags (DF, MF) and Fragment Offset",
    "slug": "lesson-21-ip-fragmentation-flags-df-mf-a",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reassembling datagrams larger than link MTU (1500 bytes).",
    "concepts": [
      "IP Fragmentation: Flags (DF, MF) and Fragment Offset",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: IP Fragmentation: Flags (DF, MF) and Fragment Offset reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### IP Fragmentation: Flags (DF, MF) and Fragment Offset\n\nReassembling datagrams larger than link MTU (1500 bytes).\n\n```python\nprint('DF=Don\\'t Fragment, MF=More Fragments')\n```",
    "workedExample": {
      "title": "Worked Example: IP Fragmentation: Flags (DF, MF) and Fragment Offset",
      "code": "print('DF=Don\\'t Fragment, MF=More Fragments')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for IP Fragmentation: Flags (DF, MF) and Fragment Offset.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of IP Fragmentation: Flags (DF, MF) and Fragment Offset.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement IP Fragmentation: Flags (DF, MF) and Fragment Offset\n# TODO: Write code below\n\n",
    "solutionCode": "print('DF=Don\\'t Fragment, MF=More Fragments')\n",
    "hints": [
      "Write:\nprint('DF=Don\\'t Fragment, MF=More Fragments')"
    ],
    "testCases": [
      {
        "id": "python-network-21-tc-1",
        "description": "Verifies correct implementation for IP Fragmentation: Flags (DF, MF) and Fragment Offset",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-22-tcp-header-format-layer-4",
    "title": "22. TCP Header Format (Layer 4)",
    "slug": "lesson-22-tcp-header-format-layer-4",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Source Port, Destination Port, Seq#, Ack#, Data Offset, Flags, Window Size.",
    "concepts": [
      "TCP Header Format (Layer 4)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: TCP Header Format (Layer 4) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### TCP Header Format (Layer 4)\n\nSource Port, Destination Port, Seq#, Ack#, Data Offset, Flags, Window Size.\n\n```python\nprint('TCP 20-byte base header: 16-bit ports, 32-bit sequence numbers')\n```",
    "workedExample": {
      "title": "Worked Example: TCP Header Format (Layer 4)",
      "code": "print('TCP 20-byte base header: 16-bit ports, 32-bit sequence numbers')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TCP Header Format (Layer 4).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TCP Header Format (Layer 4).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TCP Header Format (Layer 4)\n# TODO: Write code below\n\n",
    "solutionCode": "print('TCP 20-byte base header: 16-bit ports, 32-bit sequence numbers')\n",
    "hints": [
      "Write:\nprint('TCP 20-byte base header: 16-bit ports, 32-bit sequence numbers')"
    ],
    "testCases": [
      {
        "id": "python-network-22-tc-1",
        "description": "Verifies correct implementation for TCP Header Format (Layer 4)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-23-the-6-classic-tcp-control-flag",
    "title": "23. The 6 Classic TCP Control Flags",
    "slug": "lesson-23-the-6-classic-tcp-control-flag",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "SYN, ACK, FIN, RST, PSH, URG.",
    "concepts": [
      "The 6 Classic TCP Control Flags",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: The 6 Classic TCP Control Flags reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### The 6 Classic TCP Control Flags\n\nSYN, ACK, FIN, RST, PSH, URG.\n\n```python\nprint('Flags: SYN=Initiate, ACK=Confirm, FIN=Close, RST=Abort')\n```",
    "workedExample": {
      "title": "Worked Example: The 6 Classic TCP Control Flags",
      "code": "print('Flags: SYN=Initiate, ACK=Confirm, FIN=Close, RST=Abort')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The 6 Classic TCP Control Flags.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The 6 Classic TCP Control Flags.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The 6 Classic TCP Control Flags\n# TODO: Write code below\n\n",
    "solutionCode": "print('Flags: SYN=Initiate, ACK=Confirm, FIN=Close, RST=Abort')\n",
    "hints": [
      "Write:\nprint('Flags: SYN=Initiate, ACK=Confirm, FIN=Close, RST=Abort')"
    ],
    "testCases": [
      {
        "id": "python-network-23-tc-1",
        "description": "Verifies correct implementation for The 6 Classic TCP Control Flags",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-24-the-3-way-handshake-syn-syn-ac",
    "title": "24. The 3-Way Handshake: SYN -> SYN/ACK -> ACK",
    "slug": "lesson-24-the-3-way-handshake-syn-syn-ac",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Connection establishment state machine.",
    "concepts": [
      "The 3-Way Handshake: SYN -> SYN/ACK -> ACK",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: The 3-Way Handshake: SYN -> SYN/ACK -> ACK reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### The 3-Way Handshake: SYN -> SYN/ACK -> ACK\n\nConnection establishment state machine.\n\n```python\nprint('Client: SYN (seq=x) -> Server: SYN/ACK (seq=y, ack=x+1) -> Client: ACK (ack=y+1)')\n```",
    "workedExample": {
      "title": "Worked Example: The 3-Way Handshake: SYN -> SYN/ACK -> ACK",
      "code": "print('Client: SYN (seq=x) -> Server: SYN/ACK (seq=y, ack=x+1) -> Client: ACK (ack=y+1)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The 3-Way Handshake: SYN -> SYN/ACK -> ACK.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The 3-Way Handshake: SYN -> SYN/ACK -> ACK.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The 3-Way Handshake: SYN -> SYN/ACK -> ACK\n# TODO: Write code below\n\n",
    "solutionCode": "print('Client: SYN (seq=x) -> Server: SYN/ACK (seq=y, ack=x+1) -> Client: ACK (ack=y+1)')\n",
    "hints": [
      "Write:\nprint('Client: SYN (seq=x) -> Server: SYN/ACK (seq=y, ack=x+1) -> Client: ACK (ack=y+1)')"
    ],
    "testCases": [
      {
        "id": "python-network-24-tc-1",
        "description": "Verifies correct implementation for The 3-Way Handshake: SYN -> SYN/ACK -> ACK",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-25-udp-header-format-lightweight-",
    "title": "25. UDP Header Format: Lightweight 8-Byte Header",
    "slug": "lesson-25-udp-header-format-lightweight-",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Source Port, Destination Port, Length, Checksum.",
    "concepts": [
      "UDP Header Format: Lightweight 8-Byte Header",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: UDP Header Format: Lightweight 8-Byte Header reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### UDP Header Format: Lightweight 8-Byte Header\n\nSource Port, Destination Port, Length, Checksum.\n\n```python\nprint('UDP Header: Only 8 bytes total, zero handshake overhead')\n```",
    "workedExample": {
      "title": "Worked Example: UDP Header Format: Lightweight 8-Byte Header",
      "code": "print('UDP Header: Only 8 bytes total, zero handshake overhead')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for UDP Header Format: Lightweight 8-Byte Header.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of UDP Header Format: Lightweight 8-Byte Header.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement UDP Header Format: Lightweight 8-Byte Header\n# TODO: Write code below\n\n",
    "solutionCode": "print('UDP Header: Only 8 bytes total, zero handshake overhead')\n",
    "hints": [
      "Write:\nprint('UDP Header: Only 8 bytes total, zero handshake overhead')"
    ],
    "testCases": [
      {
        "id": "python-network-25-tc-1",
        "description": "Verifies correct implementation for UDP Header Format: Lightweight 8-Byte Header",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-26-icmp-protocol-echo-requests-an",
    "title": "26. ICMP Protocol: Echo Requests and Unreachable Codes",
    "slug": "lesson-26-icmp-protocol-echo-requests-an",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Ping utilities and diagnostic error signaling.",
    "concepts": [
      "ICMP Protocol: Echo Requests and Unreachable Codes",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: ICMP Protocol: Echo Requests and Unreachable Codes reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### ICMP Protocol: Echo Requests and Unreachable Codes\n\nPing utilities and diagnostic error signaling.\n\n```python\nprint('ICMP Type 8: Echo Request, Type 0: Echo Reply, Type 3: Unreachable')\n```",
    "workedExample": {
      "title": "Worked Example: ICMP Protocol: Echo Requests and Unreachable Codes",
      "code": "print('ICMP Type 8: Echo Request, Type 0: Echo Reply, Type 3: Unreachable')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ICMP Protocol: Echo Requests and Unreachable Codes.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ICMP Protocol: Echo Requests and Unreachable Codes.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement ICMP Protocol: Echo Requests and Unreachable Codes\n# TODO: Write code below\n\n",
    "solutionCode": "print('ICMP Type 8: Echo Request, Type 0: Echo Reply, Type 3: Unreachable')\n",
    "hints": [
      "Write:\nprint('ICMP Type 8: Echo Request, Type 0: Echo Reply, Type 3: Unreachable')"
    ],
    "testCases": [
      {
        "id": "python-network-26-tc-1",
        "description": "Verifies correct implementation for ICMP Protocol: Echo Requests and Unreachable Codes",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-27-unpacking-binary-headers-with-",
    "title": "27. Unpacking Binary Headers with struct.unpack()",
    "slug": "lesson-27-unpacking-binary-headers-with-",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decode binary packet byte buffers into Python tuples.",
    "concepts": [
      "Unpacking Binary Headers with struct.unpack()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Unpacking Binary Headers with struct.unpack() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Unpacking Binary Headers with struct.unpack()\n\nDecode binary packet byte buffers into Python tuples.\n\n```python\nimport struct\nfmt = '!BBHHHBBH4s4s'\nprint('IP Header struct format:', fmt)\n```",
    "workedExample": {
      "title": "Worked Example: Unpacking Binary Headers with struct.unpack()",
      "code": "import struct\nfmt = '!BBHHHBBH4s4s'\nprint('IP Header struct format:', fmt)",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Unpacking Binary Headers with struct.unpack().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Unpacking Binary Headers with struct.unpack().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Unpacking Binary Headers with struct.unpack()\n# TODO: Write code below\n\n",
    "solutionCode": "import struct\nfmt = '!BBHHHBBH4s4s'\nprint('IP Header struct format:', fmt)\n",
    "hints": [
      "Write:\nimport struct\nfmt = '!BBHHHBBH4s4s'\nprint('IP Header struct format:', fmt)"
    ],
    "testCases": [
      {
        "id": "python-network-27-tc-1",
        "description": "Verifies correct implementation for Unpacking Binary Headers with struct.unpack()",
        "testFn": "code.includes('struct')"
      }
    ]
  },
  {
    "id": "python-network-28-formatting-ip-addresses-socket",
    "title": "28. Formatting IP Addresses: socket.inet_ntoa()",
    "slug": "lesson-28-formatting-ip-addresses-socket",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Convert 4-byte packed binary strings to dotted decimal (192.168.1.1).",
    "concepts": [
      "Formatting IP Addresses: socket.inet_ntoa()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Formatting IP Addresses: socket.inet_ntoa() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Formatting IP Addresses: socket.inet_ntoa()\n\nConvert 4-byte packed binary strings to dotted decimal (192.168.1.1).\n\n```python\nimport socket\nprint(socket.inet_ntoa(b'\\x7f\\x00\\x00\\x01'))\n```",
    "workedExample": {
      "title": "Worked Example: Formatting IP Addresses: socket.inet_ntoa()",
      "code": "import socket\nprint(socket.inet_ntoa(b'\\x7f\\x00\\x00\\x01'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Formatting IP Addresses: socket.inet_ntoa().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Formatting IP Addresses: socket.inet_ntoa().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Formatting IP Addresses: socket.inet_ntoa()\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nprint(socket.inet_ntoa(b'\\x7f\\x00\\x00\\x01'))\n",
    "hints": [
      "Write:\nimport socket\nprint(socket.inet_ntoa(b'\\x7f\\x00\\x00\\x01'))"
    ],
    "testCases": [
      {
        "id": "python-network-28-tc-1",
        "description": "Verifies correct implementation for Formatting IP Addresses: socket.inet_ntoa()",
        "testFn": "code.includes('inet_ntoa')"
      }
    ]
  },
  {
    "id": "python-network-29-hex-dumps-formatting-binary-bu",
    "title": "29. Hex Dumps: Formatting Binary Buffers for Visual Inspection",
    "slug": "lesson-29-hex-dumps-formatting-binary-bu",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Display offset, hex pairs, and ASCII representation.",
    "concepts": [
      "Hex Dumps: Formatting Binary Buffers for Visual Inspection",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Hex Dumps: Formatting Binary Buffers for Visual Inspection reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Hex Dumps: Formatting Binary Buffers for Visual Inspection\n\nDisplay offset, hex pairs, and ASCII representation.\n\n```python\ndata = b'DevForge Packets'\nprint(data.hex())\n```",
    "workedExample": {
      "title": "Worked Example: Hex Dumps: Formatting Binary Buffers for Visual Inspection",
      "code": "data = b'DevForge Packets'\nprint(data.hex())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Hex Dumps: Formatting Binary Buffers for Visual Inspection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Hex Dumps: Formatting Binary Buffers for Visual Inspection.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Hex Dumps: Formatting Binary Buffers for Visual Inspection\n# TODO: Write code below\n\n",
    "solutionCode": "data = b'DevForge Packets'\nprint(data.hex())\n",
    "hints": [
      "Write:\ndata = b'DevForge Packets'\nprint(data.hex())"
    ],
    "testCases": [
      {
        "id": "python-network-29-tc-1",
        "description": "Verifies correct implementation for Hex Dumps: Formatting Binary Buffers for Visual Inspection",
        "testFn": "code.includes('hex')"
      }
    ]
  },
  {
    "id": "python-network-30-the-pcap-file-format-global-he",
    "title": "30. The PCAP File Format (Global Header + Packet Headers)",
    "slug": "lesson-30-the-pcap-file-format-global-he",
    "language": "python",
    "category": "Module 2: Packet Anatomy & Raw Byte Decoding",
    "difficulty": "Beginner",
    "tier": 1,
    "tierName": "Foundations",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Magic numbers (0xa1b2c3d4), microsecond vs nanosecond precision.",
    "concepts": [
      "The PCAP File Format (Global Header + Packet Headers)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: The PCAP File Format (Global Header + Packet Headers) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### The PCAP File Format (Global Header + Packet Headers)\n\nMagic numbers (0xa1b2c3d4), microsecond vs nanosecond precision.\n\n```python\nprint('PCAP Magic Number 0xa1b2c3d4 identifies standard capture files')\n```",
    "workedExample": {
      "title": "Worked Example: The PCAP File Format (Global Header + Packet Headers)",
      "code": "print('PCAP Magic Number 0xa1b2c3d4 identifies standard capture files')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The PCAP File Format (Global Header + Packet Headers).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The PCAP File Format (Global Header + Packet Headers).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The PCAP File Format (Global Header + Packet Headers)\n# TODO: Write code below\n\n",
    "solutionCode": "print('PCAP Magic Number 0xa1b2c3d4 identifies standard capture files')\n",
    "hints": [
      "Write:\nprint('PCAP Magic Number 0xa1b2c3d4 identifies standard capture files')"
    ],
    "testCases": [
      {
        "id": "python-network-30-tc-1",
        "description": "Verifies correct implementation for The PCAP File Format (Global Header + Packet Headers)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-31-what-is-pyshark-python-wrapper",
    "title": "31. What is PyShark? Python Wrapper for Wireshark's TShark",
    "slug": "lesson-31-what-is-pyshark-python-wrapper",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Leverage 3,000+ protocol dissectors with native Python objects.",
    "concepts": [
      "What is PyShark? Python Wrapper for Wireshark's TShark",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: What is PyShark? Python Wrapper for Wireshark's TShark reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### What is PyShark? Python Wrapper for Wireshark's TShark\n\nLeverage 3,000+ protocol dissectors with native Python objects.\n\n```python\nprint('PyShark bridges Wireshark dissection engine into Python')\n```",
    "workedExample": {
      "title": "Worked Example: What is PyShark? Python Wrapper for Wireshark's TShark",
      "code": "print('PyShark bridges Wireshark dissection engine into Python')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for What is PyShark? Python Wrapper for Wireshark's TShark.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of What is PyShark? Python Wrapper for Wireshark's TShark.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement What is PyShark? Python Wrapper for Wireshark's TShark\n# TODO: Write code below\n\n",
    "solutionCode": "print('PyShark bridges Wireshark dissection engine into Python')\n",
    "hints": [
      "Write:\nprint('PyShark bridges Wireshark dissection engine into Python')"
    ],
    "testCases": [
      {
        "id": "python-network-31-tc-1",
        "description": "Verifies correct implementation for What is PyShark? Python Wrapper for Wireshark's TShark",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-32-installing-and-configuring-pys",
    "title": "32. Installing and Configuring PyShark and TShark",
    "slug": "lesson-32-installing-and-configuring-pys",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Dependency management (tshark path, permissions).",
    "concepts": [
      "Installing and Configuring PyShark and TShark",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Installing and Configuring PyShark and TShark reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Installing and Configuring PyShark and TShark\n\nDependency management (tshark path, permissions).\n\n```python\nprint('pip install pyshark; ensure tshark is on system PATH')\n```",
    "workedExample": {
      "title": "Worked Example: Installing and Configuring PyShark and TShark",
      "code": "print('pip install pyshark; ensure tshark is on system PATH')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Installing and Configuring PyShark and TShark.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Installing and Configuring PyShark and TShark.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Installing and Configuring PyShark and TShark\n# TODO: Write code below\n\n",
    "solutionCode": "print('pip install pyshark; ensure tshark is on system PATH')\n",
    "hints": [
      "Write:\nprint('pip install pyshark; ensure tshark is on system PATH')"
    ],
    "testCases": [
      {
        "id": "python-network-32-tc-1",
        "description": "Verifies correct implementation for Installing and Configuring PyShark and TShark",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-33-loading-a-capture-file-with-py",
    "title": "33. Loading a Capture File with pyshark.FileCapture()",
    "slug": "lesson-33-loading-a-capture-file-with-py",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Open and stream .pcap and .pcapng files.",
    "concepts": [
      "Loading a Capture File with pyshark.FileCapture()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Loading a Capture File with pyshark.FileCapture() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Loading a Capture File with pyshark.FileCapture()\n\nOpen and stream .pcap and .pcapng files.\n\n```python\nprint('cap = pyshark.FileCapture(\"traffic.pcap\")')\n```",
    "workedExample": {
      "title": "Worked Example: Loading a Capture File with pyshark.FileCapture()",
      "code": "print('cap = pyshark.FileCapture(\"traffic.pcap\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Loading a Capture File with pyshark.FileCapture().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Loading a Capture File with pyshark.FileCapture().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Loading a Capture File with pyshark.FileCapture()\n# TODO: Write code below\n\n",
    "solutionCode": "print('cap = pyshark.FileCapture(\"traffic.pcap\")')\n",
    "hints": [
      "Write:\nprint('cap = pyshark.FileCapture(\"traffic.pcap\")')"
    ],
    "testCases": [
      {
        "id": "python-network-33-tc-1",
        "description": "Verifies correct implementation for Loading a Capture File with pyshark.FileCapture()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-34-iterating-over-packets-in-a-fi",
    "title": "34. Iterating Over Packets in a FileCapture",
    "slug": "lesson-34-iterating-over-packets-in-a-fi",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sequential packet loop processing.",
    "concepts": [
      "Iterating Over Packets in a FileCapture",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Iterating Over Packets in a FileCapture reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Iterating Over Packets in a FileCapture\n\nSequential packet loop processing.\n\n```python\nprint('for packet in cap: print(packet.highest_layer)')\n```",
    "workedExample": {
      "title": "Worked Example: Iterating Over Packets in a FileCapture",
      "code": "print('for packet in cap: print(packet.highest_layer)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Iterating Over Packets in a FileCapture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Iterating Over Packets in a FileCapture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Iterating Over Packets in a FileCapture\n# TODO: Write code below\n\n",
    "solutionCode": "print('for packet in cap: print(packet.highest_layer)')\n",
    "hints": [
      "Write:\nprint('for packet in cap: print(packet.highest_layer)')"
    ],
    "testCases": [
      {
        "id": "python-network-34-tc-1",
        "description": "Verifies correct implementation for Iterating Over Packets in a FileCapture",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-35-inspecting-packet-metadata-sni",
    "title": "35. Inspecting Packet Metadata: sniffer_timestamp and length",
    "slug": "lesson-35-inspecting-packet-metadata-sni",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Extract arrival time, epoch, and wire length.",
    "concepts": [
      "Inspecting Packet Metadata: sniffer_timestamp and length",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting Packet Metadata: sniffer_timestamp and length reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting Packet Metadata: sniffer_timestamp and length\n\nExtract arrival time, epoch, and wire length.\n\n```python\nprint('packet.sniff_time, packet.length, packet.number')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Packet Metadata: sniffer_timestamp and length",
      "code": "print('packet.sniff_time, packet.length, packet.number')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Packet Metadata: sniffer_timestamp and length.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Packet Metadata: sniffer_timestamp and length.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Packet Metadata: sniffer_timestamp and length\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.sniff_time, packet.length, packet.number')\n",
    "hints": [
      "Write:\nprint('packet.sniff_time, packet.length, packet.number')"
    ],
    "testCases": [
      {
        "id": "python-network-35-tc-1",
        "description": "Verifies correct implementation for Inspecting Packet Metadata: sniffer_timestamp and length",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-36-listing-packet-layers-packet-l",
    "title": "36. Listing Packet Layers: packet.layers",
    "slug": "lesson-36-listing-packet-layers-packet-l",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Enumerate OSI layers encapsulated in a frame.",
    "concepts": [
      "Listing Packet Layers: packet.layers",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Listing Packet Layers: packet.layers reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Listing Packet Layers: packet.layers\n\nEnumerate OSI layers encapsulated in a frame.\n\n```python\nprint('packet.layers -> [<ETH Layer>, <IP Layer>, <TCP Layer>, <HTTP Layer>]')\n```",
    "workedExample": {
      "title": "Worked Example: Listing Packet Layers: packet.layers",
      "code": "print('packet.layers -> [<ETH Layer>, <IP Layer>, <TCP Layer>, <HTTP Layer>]')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Listing Packet Layers: packet.layers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Listing Packet Layers: packet.layers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Listing Packet Layers: packet.layers\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.layers -> [<ETH Layer>, <IP Layer>, <TCP Layer>, <HTTP Layer>]')\n",
    "hints": [
      "Write:\nprint('packet.layers -> [<ETH Layer>, <IP Layer>, <TCP Layer>, <HTTP Layer>]')"
    ],
    "testCases": [
      {
        "id": "python-network-36-tc-1",
        "description": "Verifies correct implementation for Listing Packet Layers: packet.layers",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-37-checking-layer-existence-with-",
    "title": "37. Checking Layer Existence with in operator ('IP' in packet)",
    "slug": "lesson-37-checking-layer-existence-with-",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Safely guard against AttributeError on missing layers.",
    "concepts": [
      "Checking Layer Existence with in operator ('IP' in packet)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Checking Layer Existence with in operator ('IP' in packet) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Checking Layer Existence with in operator ('IP' in packet)\n\nSafely guard against AttributeError on missing layers.\n\n```python\nprint('if \"IP\" in packet: print(packet.ip.src)')\n```",
    "workedExample": {
      "title": "Worked Example: Checking Layer Existence with in operator ('IP' in packet)",
      "code": "print('if \"IP\" in packet: print(packet.ip.src)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checking Layer Existence with in operator ('IP' in packet).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checking Layer Existence with in operator ('IP' in packet).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Checking Layer Existence with in operator ('IP' in packet)\n# TODO: Write code below\n\n",
    "solutionCode": "print('if \"IP\" in packet: print(packet.ip.src)')\n",
    "hints": [
      "Write:\nprint('if \"IP\" in packet: print(packet.ip.src)')"
    ],
    "testCases": [
      {
        "id": "python-network-37-tc-1",
        "description": "Verifies correct implementation for Checking Layer Existence with in operator ('IP' in packet)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-38-accessing-layer-fields-packet-",
    "title": "38. Accessing Layer Fields: packet.ip.src and packet.ip.dst",
    "slug": "lesson-38-accessing-layer-fields-packet-",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Direct dot-notation field inspection.",
    "concepts": [
      "Accessing Layer Fields: packet.ip.src and packet.ip.dst",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Accessing Layer Fields: packet.ip.src and packet.ip.dst reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Accessing Layer Fields: packet.ip.src and packet.ip.dst\n\nDirect dot-notation field inspection.\n\n```python\nprint('Source IP:', '192.168.1.100', 'Dest IP:', '142.250.190.46')\n```",
    "workedExample": {
      "title": "Worked Example: Accessing Layer Fields: packet.ip.src and packet.ip.dst",
      "code": "print('Source IP:', '192.168.1.100', 'Dest IP:', '142.250.190.46')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessing Layer Fields: packet.ip.src and packet.ip.dst.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessing Layer Fields: packet.ip.src and packet.ip.dst.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Accessing Layer Fields: packet.ip.src and packet.ip.dst\n# TODO: Write code below\n\n",
    "solutionCode": "print('Source IP:', '192.168.1.100', 'Dest IP:', '142.250.190.46')\n",
    "hints": [
      "Write:\nprint('Source IP:', '192.168.1.100', 'Dest IP:', '142.250.190.46')"
    ],
    "testCases": [
      {
        "id": "python-network-38-tc-1",
        "description": "Verifies correct implementation for Accessing Layer Fields: packet.ip.src and packet.ip.dst",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-39-field-introspection-dir-packet",
    "title": "39. Field Introspection: dir(packet.ip) and field_names",
    "slug": "lesson-39-field-introspection-dir-packet",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Discover all attributes dissected by TShark.",
    "concepts": [
      "Field Introspection: dir(packet.ip) and field_names",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Field Introspection: dir(packet.ip) and field_names reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Field Introspection: dir(packet.ip) and field_names\n\nDiscover all attributes dissected by TShark.\n\n```python\nprint('packet.ip.field_names -> [\"version\", \"hdr_len\", \"ttl\", \"proto\"]')\n```",
    "workedExample": {
      "title": "Worked Example: Field Introspection: dir(packet.ip) and field_names",
      "code": "print('packet.ip.field_names -> [\"version\", \"hdr_len\", \"ttl\", \"proto\"]')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Field Introspection: dir(packet.ip) and field_names.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Field Introspection: dir(packet.ip) and field_names.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Field Introspection: dir(packet.ip) and field_names\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.ip.field_names -> [\"version\", \"hdr_len\", \"ttl\", \"proto\"]')\n",
    "hints": [
      "Write:\nprint('packet.ip.field_names -> [\"version\", \"hdr_len\", \"ttl\", \"proto\"]')"
    ],
    "testCases": [
      {
        "id": "python-network-39-tc-1",
        "description": "Verifies correct implementation for Field Introspection: dir(packet.ip) and field_names",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-40-highest-layer-detection-packet",
    "title": "40. Highest Layer Detection: packet.highest_layer",
    "slug": "lesson-40-highest-layer-detection-packet",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify the top application protocol (DNS, HTTP, TLS).",
    "concepts": [
      "Highest Layer Detection: packet.highest_layer",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Highest Layer Detection: packet.highest_layer reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Highest Layer Detection: packet.highest_layer\n\nIdentify the top application protocol (DNS, HTTP, TLS).\n\n```python\nprint('Highest layer:', 'DNS')\n```",
    "workedExample": {
      "title": "Worked Example: Highest Layer Detection: packet.highest_layer",
      "code": "print('Highest layer:', 'DNS')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Highest Layer Detection: packet.highest_layer.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Highest Layer Detection: packet.highest_layer.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Highest Layer Detection: packet.highest_layer\n# TODO: Write code below\n\n",
    "solutionCode": "print('Highest layer:', 'DNS')\n",
    "hints": [
      "Write:\nprint('Highest layer:', 'DNS')"
    ],
    "testCases": [
      {
        "id": "python-network-40-tc-1",
        "description": "Verifies correct implementation for Highest Layer Detection: packet.highest_layer",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-41-memory-management-in-filecaptu",
    "title": "41. Memory Management in FileCapture: keep_packets=False",
    "slug": "lesson-41-memory-management-in-filecaptu",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Prevent RAM exhaustion when parsing multi-gigabyte PCAPs.",
    "concepts": [
      "Memory Management in FileCapture: keep_packets=False",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Memory Management in FileCapture: keep_packets=False reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Memory Management in FileCapture: keep_packets=False\n\nPrevent RAM exhaustion when parsing multi-gigabyte PCAPs.\n\n```python\nprint('pyshark.FileCapture(\"large.pcap\", keep_packets=False)')\n```",
    "workedExample": {
      "title": "Worked Example: Memory Management in FileCapture: keep_packets=False",
      "code": "print('pyshark.FileCapture(\"large.pcap\", keep_packets=False)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Memory Management in FileCapture: keep_packets=False.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Memory Management in FileCapture: keep_packets=False.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Memory Management in FileCapture: keep_packets=False\n# TODO: Write code below\n\n",
    "solutionCode": "print('pyshark.FileCapture(\"large.pcap\", keep_packets=False)')\n",
    "hints": [
      "Write:\nprint('pyshark.FileCapture(\"large.pcap\", keep_packets=False)')"
    ],
    "testCases": [
      {
        "id": "python-network-41-tc-1",
        "description": "Verifies correct implementation for Memory Management in FileCapture: keep_packets=False",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-42-closing-capture-handles-cap-cl",
    "title": "42. Closing Capture Handles: cap.close()",
    "slug": "lesson-42-closing-capture-handles-cap-cl",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Terminate underlying TShark subprocesses cleanly.",
    "concepts": [
      "Closing Capture Handles: cap.close()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Closing Capture Handles: cap.close() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Closing Capture Handles: cap.close()\n\nTerminate underlying TShark subprocesses cleanly.\n\n```python\nprint('cap.close() terminates tshark child process')\n```",
    "workedExample": {
      "title": "Worked Example: Closing Capture Handles: cap.close()",
      "code": "print('cap.close() terminates tshark child process')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Closing Capture Handles: cap.close().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Closing Capture Handles: cap.close().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Closing Capture Handles: cap.close()\n# TODO: Write code below\n\n",
    "solutionCode": "print('cap.close() terminates tshark child process')\n",
    "hints": [
      "Write:\nprint('cap.close() terminates tshark child process')"
    ],
    "testCases": [
      {
        "id": "python-network-42-tc-1",
        "description": "Verifies correct implementation for Closing Capture Handles: cap.close()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-43-handling-lazy-loading-and-pack",
    "title": "43. Handling Lazy Loading and Packet Count",
    "slug": "lesson-43-handling-lazy-loading-and-pack",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why len(cap) forces full file scan unless managed.",
    "concepts": [
      "Handling Lazy Loading and Packet Count",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Handling Lazy Loading and Packet Count reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Handling Lazy Loading and Packet Count\n\nWhy len(cap) forces full file scan unless managed.\n\n```python\nprint('Stream packets sequentially rather than reading all into memory')\n```",
    "workedExample": {
      "title": "Worked Example: Handling Lazy Loading and Packet Count",
      "code": "print('Stream packets sequentially rather than reading all into memory')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling Lazy Loading and Packet Count.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling Lazy Loading and Packet Count.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling Lazy Loading and Packet Count\n# TODO: Write code below\n\n",
    "solutionCode": "print('Stream packets sequentially rather than reading all into memory')\n",
    "hints": [
      "Write:\nprint('Stream packets sequentially rather than reading all into memory')"
    ],
    "testCases": [
      {
        "id": "python-network-43-tc-1",
        "description": "Verifies correct implementation for Handling Lazy Loading and Packet Count",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-44-accessing-raw-frame-data-packe",
    "title": "44. Accessing Raw Frame Data: packet.get_raw_packet()",
    "slug": "lesson-44-accessing-raw-frame-data-packe",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Retrieve original byte buffer for custom decoding.",
    "concepts": [
      "Accessing Raw Frame Data: packet.get_raw_packet()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Accessing Raw Frame Data: packet.get_raw_packet() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Accessing Raw Frame Data: packet.get_raw_packet()\n\nRetrieve original byte buffer for custom decoding.\n\n```python\nprint('packet.get_raw_packet() returns bytes')\n```",
    "workedExample": {
      "title": "Worked Example: Accessing Raw Frame Data: packet.get_raw_packet()",
      "code": "print('packet.get_raw_packet() returns bytes')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Accessing Raw Frame Data: packet.get_raw_packet().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Accessing Raw Frame Data: packet.get_raw_packet().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Accessing Raw Frame Data: packet.get_raw_packet()\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.get_raw_packet() returns bytes')\n",
    "hints": [
      "Write:\nprint('packet.get_raw_packet() returns bytes')"
    ],
    "testCases": [
      {
        "id": "python-network-44-tc-1",
        "description": "Verifies correct implementation for Accessing Raw Frame Data: packet.get_raw_packet()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-45-handling-tshark-parsing-errors",
    "title": "45. Handling TShark Parsing Errors Gracefully",
    "slug": "lesson-45-handling-tshark-parsing-errors",
    "language": "python",
    "category": "Module 3: PyShark Architecture & FileCapture Basics",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Catch TSharkCrashException and corrupted frame warnings.",
    "concepts": [
      "Handling TShark Parsing Errors Gracefully",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Handling TShark Parsing Errors Gracefully reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Handling TShark Parsing Errors Gracefully\n\nCatch TSharkCrashException and corrupted frame warnings.\n\n```python\nprint('try/except pyshark.capture.capture.TSharkCrashException')\n```",
    "workedExample": {
      "title": "Worked Example: Handling TShark Parsing Errors Gracefully",
      "code": "print('try/except pyshark.capture.capture.TSharkCrashException')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Handling TShark Parsing Errors Gracefully.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Handling TShark Parsing Errors Gracefully.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Handling TShark Parsing Errors Gracefully\n# TODO: Write code below\n\n",
    "solutionCode": "print('try/except pyshark.capture.capture.TSharkCrashException')\n",
    "hints": [
      "Write:\nprint('try/except pyshark.capture.capture.TSharkCrashException')"
    ],
    "testCases": [
      {
        "id": "python-network-45-tc-1",
        "description": "Verifies correct implementation for Handling TShark Parsing Errors Gracefully",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-46-live-sniffing-with-pyshark-liv",
    "title": "46. Live Sniffing with pyshark.LiveCapture()",
    "slug": "lesson-46-live-sniffing-with-pyshark-liv",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Attach to network interface cards in real-time.",
    "concepts": [
      "Live Sniffing with pyshark.LiveCapture()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Live Sniffing with pyshark.LiveCapture() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Live Sniffing with pyshark.LiveCapture()\n\nAttach to network interface cards in real-time.\n\n```python\nprint('cap = pyshark.LiveCapture(interface=\"eth0\")')\n```",
    "workedExample": {
      "title": "Worked Example: Live Sniffing with pyshark.LiveCapture()",
      "code": "print('cap = pyshark.LiveCapture(interface=\"eth0\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Live Sniffing with pyshark.LiveCapture().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Live Sniffing with pyshark.LiveCapture().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Live Sniffing with pyshark.LiveCapture()\n# TODO: Write code below\n\n",
    "solutionCode": "print('cap = pyshark.LiveCapture(interface=\"eth0\")')\n",
    "hints": [
      "Write:\nprint('cap = pyshark.LiveCapture(interface=\"eth0\")')"
    ],
    "testCases": [
      {
        "id": "python-network-46-tc-1",
        "description": "Verifies correct implementation for Live Sniffing with pyshark.LiveCapture()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-47-selecting-network-interfaces-e",
    "title": "47. Selecting Network Interfaces (eth0, wlan0, lo, any)",
    "slug": "lesson-47-selecting-network-interfaces-e",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Target physical adapters, loopback, or wireless cards.",
    "concepts": [
      "Selecting Network Interfaces (eth0, wlan0, lo, any)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Selecting Network Interfaces (eth0, wlan0, lo, any) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Selecting Network Interfaces (eth0, wlan0, lo, any)\n\nTarget physical adapters, loopback, or wireless cards.\n\n```python\nprint('Available interfaces: eth0, wlan0, lo0')\n```",
    "workedExample": {
      "title": "Worked Example: Selecting Network Interfaces (eth0, wlan0, lo, any)",
      "code": "print('Available interfaces: eth0, wlan0, lo0')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Selecting Network Interfaces (eth0, wlan0, lo, any).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Selecting Network Interfaces (eth0, wlan0, lo, any).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Selecting Network Interfaces (eth0, wlan0, lo, any)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Available interfaces: eth0, wlan0, lo0')\n",
    "hints": [
      "Write:\nprint('Available interfaces: eth0, wlan0, lo0')"
    ],
    "testCases": [
      {
        "id": "python-network-47-tc-1",
        "description": "Verifies correct implementation for Selecting Network Interfaces (eth0, wlan0, lo, any)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-48-applying-bpf-capture-filters-i",
    "title": "48. Applying BPF Capture Filters in LiveCapture",
    "slug": "lesson-48-applying-bpf-capture-filters-i",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Hardware-accelerated packet filtering at the driver level.",
    "concepts": [
      "Applying BPF Capture Filters in LiveCapture",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Applying BPF Capture Filters in LiveCapture reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Applying BPF Capture Filters in LiveCapture\n\nHardware-accelerated packet filtering at the driver level.\n\n```python\nprint('pyshark.LiveCapture(interface=\"eth0\", bpf_filter=\"tcp port 80\")')\n```",
    "workedExample": {
      "title": "Worked Example: Applying BPF Capture Filters in LiveCapture",
      "code": "print('pyshark.LiveCapture(interface=\"eth0\", bpf_filter=\"tcp port 80\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Applying BPF Capture Filters in LiveCapture.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Applying BPF Capture Filters in LiveCapture.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Applying BPF Capture Filters in LiveCapture\n# TODO: Write code below\n\n",
    "solutionCode": "print('pyshark.LiveCapture(interface=\"eth0\", bpf_filter=\"tcp port 80\")')\n",
    "hints": [
      "Write:\nprint('pyshark.LiveCapture(interface=\"eth0\", bpf_filter=\"tcp port 80\")')"
    ],
    "testCases": [
      {
        "id": "python-network-48-tc-1",
        "description": "Verifies correct implementation for Applying BPF Capture Filters in LiveCapture",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-49-timed-captures-with-sniff-time",
    "title": "49. Timed Captures with sniff(timeout=10)",
    "slug": "lesson-49-timed-captures-with-sniff-time",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Capture traffic for a fixed duration in seconds.",
    "concepts": [
      "Timed Captures with sniff(timeout=10)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Timed Captures with sniff(timeout=10) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Timed Captures with sniff(timeout=10)\n\nCapture traffic for a fixed duration in seconds.\n\n```python\nprint('cap.sniff(timeout=10)')\n```",
    "workedExample": {
      "title": "Worked Example: Timed Captures with sniff(timeout=10)",
      "code": "print('cap.sniff(timeout=10)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Timed Captures with sniff(timeout=10).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Timed Captures with sniff(timeout=10).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Timed Captures with sniff(timeout=10)\n# TODO: Write code below\n\n",
    "solutionCode": "print('cap.sniff(timeout=10)')\n",
    "hints": [
      "Write:\nprint('cap.sniff(timeout=10)')"
    ],
    "testCases": [
      {
        "id": "python-network-49-tc-1",
        "description": "Verifies correct implementation for Timed Captures with sniff(timeout=10)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-50-packet-count-limits-with-sniff",
    "title": "50. Packet Count Limits with sniff(packet_count=50)",
    "slug": "lesson-50-packet-count-limits-with-sniff",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Capture a specific batch size before returning.",
    "concepts": [
      "Packet Count Limits with sniff(packet_count=50)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Packet Count Limits with sniff(packet_count=50) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Packet Count Limits with sniff(packet_count=50)\n\nCapture a specific batch size before returning.\n\n```python\nprint('cap.sniff(packet_count=100)')\n```",
    "workedExample": {
      "title": "Worked Example: Packet Count Limits with sniff(packet_count=50)",
      "code": "print('cap.sniff(packet_count=100)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Packet Count Limits with sniff(packet_count=50).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Packet Count Limits with sniff(packet_count=50).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Packet Count Limits with sniff(packet_count=50)\n# TODO: Write code below\n\n",
    "solutionCode": "print('cap.sniff(packet_count=100)')\n",
    "hints": [
      "Write:\nprint('cap.sniff(packet_count=100)')"
    ],
    "testCases": [
      {
        "id": "python-network-50-tc-1",
        "description": "Verifies correct implementation for Packet Count Limits with sniff(packet_count=50)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-51-continuous-real-time-sniffing-",
    "title": "51. Continuous Real-Time Sniffing: sniff_continuously()",
    "slug": "lesson-51-continuous-real-time-sniffing-",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Yield packets indefinitely as generator stream.",
    "concepts": [
      "Continuous Real-Time Sniffing: sniff_continuously()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Continuous Real-Time Sniffing: sniff_continuously() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Continuous Real-Time Sniffing: sniff_continuously()\n\nYield packets indefinitely as generator stream.\n\n```python\nprint('for packet in cap.sniff_continuously(): process(packet)')\n```",
    "workedExample": {
      "title": "Worked Example: Continuous Real-Time Sniffing: sniff_continuously()",
      "code": "print('for packet in cap.sniff_continuously(): process(packet)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Continuous Real-Time Sniffing: sniff_continuously().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Continuous Real-Time Sniffing: sniff_continuously().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Continuous Real-Time Sniffing: sniff_continuously()\n# TODO: Write code below\n\n",
    "solutionCode": "print('for packet in cap.sniff_continuously(): process(packet)')\n",
    "hints": [
      "Write:\nprint('for packet in cap.sniff_continuously(): process(packet)')"
    ],
    "testCases": [
      {
        "id": "python-network-51-tc-1",
        "description": "Verifies correct implementation for Continuous Real-Time Sniffing: sniff_continuously()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-52-applying-packet-callbacks-appl",
    "title": "52. Applying Packet Callbacks: apply_on_packets(callback)",
    "slug": "lesson-52-applying-packet-callbacks-appl",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Execute a handler function for every captured frame.",
    "concepts": [
      "Applying Packet Callbacks: apply_on_packets(callback)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Applying Packet Callbacks: apply_on_packets(callback) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Applying Packet Callbacks: apply_on_packets(callback)\n\nExecute a handler function for every captured frame.\n\n```python\nprint('cap.apply_on_packets(packet_handler, packet_count=20)')\n```",
    "workedExample": {
      "title": "Worked Example: Applying Packet Callbacks: apply_on_packets(callback)",
      "code": "print('cap.apply_on_packets(packet_handler, packet_count=20)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Applying Packet Callbacks: apply_on_packets(callback).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Applying Packet Callbacks: apply_on_packets(callback).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Applying Packet Callbacks: apply_on_packets(callback)\n# TODO: Write code below\n\n",
    "solutionCode": "print('cap.apply_on_packets(packet_handler, packet_count=20)')\n",
    "hints": [
      "Write:\nprint('cap.apply_on_packets(packet_handler, packet_count=20)')"
    ],
    "testCases": [
      {
        "id": "python-network-52-tc-1",
        "description": "Verifies correct implementation for Applying Packet Callbacks: apply_on_packets(callback)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-53-asynchronous-sniffing-with-asy",
    "title": "53. Asynchronous Sniffing with asyncio in Python 3",
    "slug": "lesson-53-asynchronous-sniffing-with-asy",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Integrate packet analysis with async event loops.",
    "concepts": [
      "Asynchronous Sniffing with asyncio in Python 3",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Asynchronous Sniffing with asyncio in Python 3 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Asynchronous Sniffing with asyncio in Python 3\n\nIntegrate packet analysis with async event loops.\n\n```python\nprint('await cap.get_next_packet() in asyncio task')\n```",
    "workedExample": {
      "title": "Worked Example: Asynchronous Sniffing with asyncio in Python 3",
      "code": "print('await cap.get_next_packet() in asyncio task')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Asynchronous Sniffing with asyncio in Python 3.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Asynchronous Sniffing with asyncio in Python 3.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Asynchronous Sniffing with asyncio in Python 3\n# TODO: Write code below\n\n",
    "solutionCode": "print('await cap.get_next_packet() in asyncio task')\n",
    "hints": [
      "Write:\nprint('await cap.get_next_packet() in asyncio task')"
    ],
    "testCases": [
      {
        "id": "python-network-53-tc-1",
        "description": "Verifies correct implementation for Asynchronous Sniffing with asyncio in Python 3",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-54-live-ring-buffers-with-pyshark",
    "title": "54. Live Ring Buffers with pyshark.LiveRingCapture()",
    "slug": "lesson-54-live-ring-buffers-with-pyshark",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Rotate capture files to prevent disk overflow.",
    "concepts": [
      "Live Ring Buffers with pyshark.LiveRingCapture()",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Live Ring Buffers with pyshark.LiveRingCapture() reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Live Ring Buffers with pyshark.LiveRingCapture()\n\nRotate capture files to prevent disk overflow.\n\n```python\nprint('pyshark.LiveRingCapture(ring_file_size=1024, num_ring_files=5)')\n```",
    "workedExample": {
      "title": "Worked Example: Live Ring Buffers with pyshark.LiveRingCapture()",
      "code": "print('pyshark.LiveRingCapture(ring_file_size=1024, num_ring_files=5)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Live Ring Buffers with pyshark.LiveRingCapture().",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Live Ring Buffers with pyshark.LiveRingCapture().",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Live Ring Buffers with pyshark.LiveRingCapture()\n# TODO: Write code below\n\n",
    "solutionCode": "print('pyshark.LiveRingCapture(ring_file_size=1024, num_ring_files=5)')\n",
    "hints": [
      "Write:\nprint('pyshark.LiveRingCapture(ring_file_size=1024, num_ring_files=5)')"
    ],
    "testCases": [
      {
        "id": "python-network-54-tc-1",
        "description": "Verifies correct implementation for Live Ring Buffers with pyshark.LiveRingCapture()",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-55-capturing-from-remote-interfac",
    "title": "55. Capturing from Remote Interfaces (RPcap)",
    "slug": "lesson-55-capturing-from-remote-interfac",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Sniff traffic over network tunnels from remote sensors.",
    "concepts": [
      "Capturing from Remote Interfaces (RPcap)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Capturing from Remote Interfaces (RPcap) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Capturing from Remote Interfaces (RPcap)\n\nSniff traffic over network tunnels from remote sensors.\n\n```python\nprint('LiveCapture on rpcap://192.168.1.50:2002/eth0')\n```",
    "workedExample": {
      "title": "Worked Example: Capturing from Remote Interfaces (RPcap)",
      "code": "print('LiveCapture on rpcap://192.168.1.50:2002/eth0')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Capturing from Remote Interfaces (RPcap).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Capturing from Remote Interfaces (RPcap).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Capturing from Remote Interfaces (RPcap)\n# TODO: Write code below\n\n",
    "solutionCode": "print('LiveCapture on rpcap://192.168.1.50:2002/eth0')\n",
    "hints": [
      "Write:\nprint('LiveCapture on rpcap://192.168.1.50:2002/eth0')"
    ],
    "testCases": [
      {
        "id": "python-network-55-tc-1",
        "description": "Verifies correct implementation for Capturing from Remote Interfaces (RPcap)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-56-root-admin-privileges-for-prom",
    "title": "56. Root / Admin Privileges for Promiscuous Sniffing",
    "slug": "lesson-56-root-admin-privileges-for-prom",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Granting CAP_NET_RAW and CAP_NET_ADMIN capabilities.",
    "concepts": [
      "Root / Admin Privileges for Promiscuous Sniffing",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Root / Admin Privileges for Promiscuous Sniffing reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Root / Admin Privileges for Promiscuous Sniffing\n\nGranting CAP_NET_RAW and CAP_NET_ADMIN capabilities.\n\n```python\nprint('sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap')\n```",
    "workedExample": {
      "title": "Worked Example: Root / Admin Privileges for Promiscuous Sniffing",
      "code": "print('sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Root / Admin Privileges for Promiscuous Sniffing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Root / Admin Privileges for Promiscuous Sniffing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Root / Admin Privileges for Promiscuous Sniffing\n# TODO: Write code below\n\n",
    "solutionCode": "print('sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap')\n",
    "hints": [
      "Write:\nprint('sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap')"
    ],
    "testCases": [
      {
        "id": "python-network-56-tc-1",
        "description": "Verifies correct implementation for Root / Admin Privileges for Promiscuous Sniffing",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-57-monitoring-bandwidth-and-packe",
    "title": "57. Monitoring Bandwidth and Packet Arrival Rates",
    "slug": "lesson-57-monitoring-bandwidth-and-packe",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Calculate packets-per-second (PPS) and throughput (Mbps).",
    "concepts": [
      "Monitoring Bandwidth and Packet Arrival Rates",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Monitoring Bandwidth and Packet Arrival Rates reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Monitoring Bandwidth and Packet Arrival Rates\n\nCalculate packets-per-second (PPS) and throughput (Mbps).\n\n```python\nprint('pps = packet_count / elapsed_seconds')\n```",
    "workedExample": {
      "title": "Worked Example: Monitoring Bandwidth and Packet Arrival Rates",
      "code": "print('pps = packet_count / elapsed_seconds')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Monitoring Bandwidth and Packet Arrival Rates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Monitoring Bandwidth and Packet Arrival Rates.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Monitoring Bandwidth and Packet Arrival Rates\n# TODO: Write code below\n\n",
    "solutionCode": "print('pps = packet_count / elapsed_seconds')\n",
    "hints": [
      "Write:\nprint('pps = packet_count / elapsed_seconds')"
    ],
    "testCases": [
      {
        "id": "python-network-57-tc-1",
        "description": "Verifies correct implementation for Monitoring Bandwidth and Packet Arrival Rates",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-58-live-host-discovery-detecting-",
    "title": "58. Live Host Discovery: Detecting Active IP Traffic",
    "slug": "lesson-58-live-host-discovery-detecting-",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Collect source IP addresses observed on local LAN.",
    "concepts": [
      "Live Host Discovery: Detecting Active IP Traffic",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Live Host Discovery: Detecting Active IP Traffic reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Live Host Discovery: Detecting Active IP Traffic\n\nCollect source IP addresses observed on local LAN.\n\n```python\nactive_ips = {'192.168.1.1', '192.168.1.50'}\nprint('Discovered hosts:', len(active_ips))\n```",
    "workedExample": {
      "title": "Worked Example: Live Host Discovery: Detecting Active IP Traffic",
      "code": "active_ips = {'192.168.1.1', '192.168.1.50'}\nprint('Discovered hosts:', len(active_ips))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Live Host Discovery: Detecting Active IP Traffic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Live Host Discovery: Detecting Active IP Traffic.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Live Host Discovery: Detecting Active IP Traffic\n# TODO: Write code below\n\n",
    "solutionCode": "active_ips = {'192.168.1.1', '192.168.1.50'}\nprint('Discovered hosts:', len(active_ips))\n",
    "hints": [
      "Write:\nactive_ips = {'192.168.1.1', '192.168.1.50'}\nprint('Discovered hosts:', len(active_ips))"
    ],
    "testCases": [
      {
        "id": "python-network-58-tc-1",
        "description": "Verifies correct implementation for Live Host Discovery: Detecting Active IP Traffic",
        "testFn": "code.includes('active_ips')"
      }
    ]
  },
  {
    "id": "python-network-59-detecting-broadcast-and-multic",
    "title": "59. Detecting Broadcast and Multicast Floods",
    "slug": "lesson-59-detecting-broadcast-and-multic",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot excessive ARP requests and mDNS chatter.",
    "concepts": [
      "Detecting Broadcast and Multicast Floods",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Broadcast and Multicast Floods reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Broadcast and Multicast Floods\n\nSpot excessive ARP requests and mDNS chatter.\n\n```python\nprint('Filter: eth.dst == ff:ff:ff:ff:ff:ff')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Broadcast and Multicast Floods",
      "code": "print('Filter: eth.dst == ff:ff:ff:ff:ff:ff')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Broadcast and Multicast Floods.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Broadcast and Multicast Floods.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Broadcast and Multicast Floods\n# TODO: Write code below\n\n",
    "solutionCode": "print('Filter: eth.dst == ff:ff:ff:ff:ff:ff')\n",
    "hints": [
      "Write:\nprint('Filter: eth.dst == ff:ff:ff:ff:ff:ff')"
    ],
    "testCases": [
      {
        "id": "python-network-59-tc-1",
        "description": "Verifies correct implementation for Detecting Broadcast and Multicast Floods",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-60-saving-live-captures-to-disk-o",
    "title": "60. Saving Live Captures to Disk: output_file parameter",
    "slug": "lesson-60-saving-live-captures-to-disk-o",
    "language": "python",
    "category": "Module 4: Live Traffic Sniffing & Interfaces",
    "difficulty": "Beginner",
    "tier": 2,
    "tierName": "Core",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Archive captured stream to PCAP file simultaneously.",
    "concepts": [
      "Saving Live Captures to Disk: output_file parameter",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Saving Live Captures to Disk: output_file parameter reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Saving Live Captures to Disk: output_file parameter\n\nArchive captured stream to PCAP file simultaneously.\n\n```python\nprint('pyshark.LiveCapture(output_file=\"audit.pcap\")')\n```",
    "workedExample": {
      "title": "Worked Example: Saving Live Captures to Disk: output_file parameter",
      "code": "print('pyshark.LiveCapture(output_file=\"audit.pcap\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Saving Live Captures to Disk: output_file parameter.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Saving Live Captures to Disk: output_file parameter.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Saving Live Captures to Disk: output_file parameter\n# TODO: Write code below\n\n",
    "solutionCode": "print('pyshark.LiveCapture(output_file=\"audit.pcap\")')\n",
    "hints": [
      "Write:\nprint('pyshark.LiveCapture(output_file=\"audit.pcap\")')"
    ],
    "testCases": [
      {
        "id": "python-network-60-tc-1",
        "description": "Verifies correct implementation for Saving Live Captures to Disk: output_file parameter",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-61-bpf-capture-filters-vs-wiresha",
    "title": "61. BPF Capture Filters vs Wireshark Display Filters",
    "slug": "lesson-61-bpf-capture-filters-vs-wiresha",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Kernel-level dropping (BPF) vs application-level dissection (Display Filter).",
    "concepts": [
      "BPF Capture Filters vs Wireshark Display Filters",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: BPF Capture Filters vs Wireshark Display Filters reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### BPF Capture Filters vs Wireshark Display Filters\n\nKernel-level dropping (BPF) vs application-level dissection (Display Filter).\n\n```python\nprint('BPF: Fast in kernel. Display Filter: Deep protocol inspection')\n```",
    "workedExample": {
      "title": "Worked Example: BPF Capture Filters vs Wireshark Display Filters",
      "code": "print('BPF: Fast in kernel. Display Filter: Deep protocol inspection')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for BPF Capture Filters vs Wireshark Display Filters.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of BPF Capture Filters vs Wireshark Display Filters.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement BPF Capture Filters vs Wireshark Display Filters\n# TODO: Write code below\n\n",
    "solutionCode": "print('BPF: Fast in kernel. Display Filter: Deep protocol inspection')\n",
    "hints": [
      "Write:\nprint('BPF: Fast in kernel. Display Filter: Deep protocol inspection')"
    ],
    "testCases": [
      {
        "id": "python-network-61-tc-1",
        "description": "Verifies correct implementation for BPF Capture Filters vs Wireshark Display Filters",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-62-bpf-syntax-host-net-port-proto",
    "title": "62. BPF Syntax: host, net, port, proto",
    "slug": "lesson-62-bpf-syntax-host-net-port-proto",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Classic tcpdump filter expressions.",
    "concepts": [
      "BPF Syntax: host, net, port, proto",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: BPF Syntax: host, net, port, proto reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### BPF Syntax: host, net, port, proto\n\nClassic tcpdump filter expressions.\n\n```python\nprint('bpf: \"host 10.0.0.1 and port 443\"')\n```",
    "workedExample": {
      "title": "Worked Example: BPF Syntax: host, net, port, proto",
      "code": "print('bpf: \"host 10.0.0.1 and port 443\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for BPF Syntax: host, net, port, proto.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of BPF Syntax: host, net, port, proto.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement BPF Syntax: host, net, port, proto\n# TODO: Write code below\n\n",
    "solutionCode": "print('bpf: \"host 10.0.0.1 and port 443\"')\n",
    "hints": [
      "Write:\nprint('bpf: \"host 10.0.0.1 and port 443\"')"
    ],
    "testCases": [
      {
        "id": "python-network-62-tc-1",
        "description": "Verifies correct implementation for BPF Syntax: host, net, port, proto",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-63-filtering-by-protocol-with-dis",
    "title": "63. Filtering by Protocol with display_filter='http'",
    "slug": "lesson-63-filtering-by-protocol-with-dis",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pass display_filter parameter into FileCapture.",
    "concepts": [
      "Filtering by Protocol with display_filter='http'",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Filtering by Protocol with display_filter='http' reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Filtering by Protocol with display_filter='http'\n\nPass display_filter parameter into FileCapture.\n\n```python\nprint('pyshark.FileCapture(\"p.pcap\", display_filter=\"http\")')\n```",
    "workedExample": {
      "title": "Worked Example: Filtering by Protocol with display_filter='http'",
      "code": "print('pyshark.FileCapture(\"p.pcap\", display_filter=\"http\")')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering by Protocol with display_filter='http'.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering by Protocol with display_filter='http'.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering by Protocol with display_filter='http'\n# TODO: Write code below\n\n",
    "solutionCode": "print('pyshark.FileCapture(\"p.pcap\", display_filter=\"http\")')\n",
    "hints": [
      "Write:\nprint('pyshark.FileCapture(\"p.pcap\", display_filter=\"http\")')"
    ],
    "testCases": [
      {
        "id": "python-network-63-tc-1",
        "description": "Verifies correct implementation for Filtering by Protocol with display_filter='http'",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-64-display-filter-syntax-ip-addr-",
    "title": "64. Display Filter Syntax: ip.addr == x.x.x.x",
    "slug": "lesson-64-display-filter-syntax-ip-addr-",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Match either source or destination IP.",
    "concepts": [
      "Display Filter Syntax: ip.addr == x.x.x.x",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Display Filter Syntax: ip.addr == x.x.x.x reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Display Filter Syntax: ip.addr == x.x.x.x\n\nMatch either source or destination IP.\n\n```python\nprint('display_filter: \"ip.addr == 192.168.1.1\"')\n```",
    "workedExample": {
      "title": "Worked Example: Display Filter Syntax: ip.addr == x.x.x.x",
      "code": "print('display_filter: \"ip.addr == 192.168.1.1\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Display Filter Syntax: ip.addr == x.x.x.x.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Display Filter Syntax: ip.addr == x.x.x.x.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Display Filter Syntax: ip.addr == x.x.x.x\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"ip.addr == 192.168.1.1\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"ip.addr == 192.168.1.1\"')"
    ],
    "testCases": [
      {
        "id": "python-network-64-tc-1",
        "description": "Verifies correct implementation for Display Filter Syntax: ip.addr == x.x.x.x",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-65-subnet-filtering-ip-src-in-cid",
    "title": "65. Subnet Filtering: ip.src in CIDR notation",
    "slug": "lesson-65-subnet-filtering-ip-src-in-cid",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Match traffic originating from IP subnets.",
    "concepts": [
      "Subnet Filtering: ip.src in CIDR notation",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Subnet Filtering: ip.src in CIDR notation reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Subnet Filtering: ip.src in CIDR notation\n\nMatch traffic originating from IP subnets.\n\n```python\nprint('display_filter: \"ip.src == 10.0.0.0/24\"')\n```",
    "workedExample": {
      "title": "Worked Example: Subnet Filtering: ip.src in CIDR notation",
      "code": "print('display_filter: \"ip.src == 10.0.0.0/24\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Subnet Filtering: ip.src in CIDR notation.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Subnet Filtering: ip.src in CIDR notation.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Subnet Filtering: ip.src in CIDR notation\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"ip.src == 10.0.0.0/24\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"ip.src == 10.0.0.0/24\"')"
    ],
    "testCases": [
      {
        "id": "python-network-65-tc-1",
        "description": "Verifies correct implementation for Subnet Filtering: ip.src in CIDR notation",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-66-logical-operators-in-display-f",
    "title": "66. Logical Operators in Display Filters (and, or, not)",
    "slug": "lesson-66-logical-operators-in-display-f",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Combine filter terms into compound security queries.",
    "concepts": [
      "Logical Operators in Display Filters (and, or, not)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Logical Operators in Display Filters (and, or, not) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Logical Operators in Display Filters (and, or, not)\n\nCombine filter terms into compound security queries.\n\n```python\nprint('display_filter: \"tcp.port == 80 and not ip.src == 127.0.0.1\"')\n```",
    "workedExample": {
      "title": "Worked Example: Logical Operators in Display Filters (and, or, not)",
      "code": "print('display_filter: \"tcp.port == 80 and not ip.src == 127.0.0.1\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Logical Operators in Display Filters (and, or, not).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Logical Operators in Display Filters (and, or, not).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Logical Operators in Display Filters (and, or, not)\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"tcp.port == 80 and not ip.src == 127.0.0.1\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"tcp.port == 80 and not ip.src == 127.0.0.1\"')"
    ],
    "testCases": [
      {
        "id": "python-network-66-tc-1",
        "description": "Verifies correct implementation for Logical Operators in Display Filters (and, or, not)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-67-filtering-by-tcp-port-tcp-port",
    "title": "67. Filtering by TCP Port: tcp.port == 22",
    "slug": "lesson-67-filtering-by-tcp-port-tcp-port",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Isolate SSH, Telnet, FTP, and web traffic.",
    "concepts": [
      "Filtering by TCP Port: tcp.port == 22",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Filtering by TCP Port: tcp.port == 22 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Filtering by TCP Port: tcp.port == 22\n\nIsolate SSH, Telnet, FTP, and web traffic.\n\n```python\nprint('display_filter: \"tcp.port in {22, 23, 21}\"')\n```",
    "workedExample": {
      "title": "Worked Example: Filtering by TCP Port: tcp.port == 22",
      "code": "print('display_filter: \"tcp.port in {22, 23, 21}\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering by TCP Port: tcp.port == 22.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering by TCP Port: tcp.port == 22.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering by TCP Port: tcp.port == 22\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"tcp.port in {22, 23, 21}\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"tcp.port in {22, 23, 21}\"')"
    ],
    "testCases": [
      {
        "id": "python-network-67-tc-1",
        "description": "Verifies correct implementation for Filtering by TCP Port: tcp.port == 22",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-68-filtering-by-packet-length-fra",
    "title": "68. Filtering by Packet Length: frame.len > 1000",
    "slug": "lesson-68-filtering-by-packet-length-fra",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify jumbo frames or large data exfiltrations.",
    "concepts": [
      "Filtering by Packet Length: frame.len > 1000",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Filtering by Packet Length: frame.len > 1000 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Filtering by Packet Length: frame.len > 1000\n\nIdentify jumbo frames or large data exfiltrations.\n\n```python\nprint('display_filter: \"frame.len > 1400\"')\n```",
    "workedExample": {
      "title": "Worked Example: Filtering by Packet Length: frame.len > 1000",
      "code": "print('display_filter: \"frame.len > 1400\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Filtering by Packet Length: frame.len > 1000.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Filtering by Packet Length: frame.len > 1000.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Filtering by Packet Length: frame.len > 1000\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"frame.len > 1400\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"frame.len > 1400\"')"
    ],
    "testCases": [
      {
        "id": "python-network-68-tc-1",
        "description": "Verifies correct implementation for Filtering by Packet Length: frame.len > 1000",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-69-string-matching-with-contains-",
    "title": "69. String Matching with contains Operator",
    "slug": "lesson-69-string-matching-with-contains-",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Search cleartext payloads for signatures.",
    "concepts": [
      "String Matching with contains Operator",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: String Matching with contains Operator reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### String Matching with contains Operator\n\nSearch cleartext payloads for signatures.\n\n```python\nprint('display_filter: \"http contains \\\"password\\\"\"')\n```",
    "workedExample": {
      "title": "Worked Example: String Matching with contains Operator",
      "code": "print('display_filter: \"http contains \\\"password\\\"\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for String Matching with contains Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of String Matching with contains Operator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement String Matching with contains Operator\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"http contains \\\"password\\\"\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"http contains \\\"password\\\"\"')"
    ],
    "testCases": [
      {
        "id": "python-network-69-tc-1",
        "description": "Verifies correct implementation for String Matching with contains Operator",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-70-regex-matches-with-matches-ope",
    "title": "70. Regex Matches with matches Operator",
    "slug": "lesson-70-regex-matches-with-matches-ope",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Search packet layers using regular expressions.",
    "concepts": [
      "Regex Matches with matches Operator",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Regex Matches with matches Operator reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Regex Matches with matches Operator\n\nSearch packet layers using regular expressions.\n\n```python\nprint('display_filter: \"http.host matches \\\"^api\\\\..*\\\"\"')\n```",
    "workedExample": {
      "title": "Worked Example: Regex Matches with matches Operator",
      "code": "print('display_filter: \"http.host matches \\\"^api\\\\..*\\\"\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Regex Matches with matches Operator.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Regex Matches with matches Operator.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Regex Matches with matches Operator\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"http.host matches \\\"^api\\\\..*\\\"\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"http.host matches \\\"^api\\\\..*\\\"\"')"
    ],
    "testCases": [
      {
        "id": "python-network-70-tc-1",
        "description": "Verifies correct implementation for Regex Matches with matches Operator",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-71-tcp-flag-filters-tcp-flags-syn",
    "title": "71. TCP Flag Filters: tcp.flags.syn == 1",
    "slug": "lesson-71-tcp-flag-filters-tcp-flags-syn",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Isolate connection initiation attempts.",
    "concepts": [
      "TCP Flag Filters: tcp.flags.syn == 1",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: TCP Flag Filters: tcp.flags.syn == 1 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### TCP Flag Filters: tcp.flags.syn == 1\n\nIsolate connection initiation attempts.\n\n```python\nprint('display_filter: \"tcp.flags.syn == 1 and tcp.flags.ack == 0\"')\n```",
    "workedExample": {
      "title": "Worked Example: TCP Flag Filters: tcp.flags.syn == 1",
      "code": "print('display_filter: \"tcp.flags.syn == 1 and tcp.flags.ack == 0\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TCP Flag Filters: tcp.flags.syn == 1.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TCP Flag Filters: tcp.flags.syn == 1.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TCP Flag Filters: tcp.flags.syn == 1\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"tcp.flags.syn == 1 and tcp.flags.ack == 0\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"tcp.flags.syn == 1 and tcp.flags.ack == 0\"')"
    ],
    "testCases": [
      {
        "id": "python-network-71-tc-1",
        "description": "Verifies correct implementation for TCP Flag Filters: tcp.flags.syn == 1",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-72-tcp-reset-filters-tcp-flags-re",
    "title": "72. TCP Reset Filters: tcp.flags.reset == 1",
    "slug": "lesson-72-tcp-reset-filters-tcp-flags-re",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot rejected connections and abrupt teardowns.",
    "concepts": [
      "TCP Reset Filters: tcp.flags.reset == 1",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: TCP Reset Filters: tcp.flags.reset == 1 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### TCP Reset Filters: tcp.flags.reset == 1\n\nSpot rejected connections and abrupt teardowns.\n\n```python\nprint('display_filter: \"tcp.flags.reset == 1\"')\n```",
    "workedExample": {
      "title": "Worked Example: TCP Reset Filters: tcp.flags.reset == 1",
      "code": "print('display_filter: \"tcp.flags.reset == 1\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TCP Reset Filters: tcp.flags.reset == 1.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TCP Reset Filters: tcp.flags.reset == 1.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TCP Reset Filters: tcp.flags.reset == 1\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"tcp.flags.reset == 1\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"tcp.flags.reset == 1\"')"
    ],
    "testCases": [
      {
        "id": "python-network-72-tc-1",
        "description": "Verifies correct implementation for TCP Reset Filters: tcp.flags.reset == 1",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-73-icmp-error-code-filtering",
    "title": "73. ICMP Error Code Filtering",
    "slug": "lesson-73-icmp-error-code-filtering",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Isolate Destination Unreachable and TTL Exceeded.",
    "concepts": [
      "ICMP Error Code Filtering",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: ICMP Error Code Filtering reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### ICMP Error Code Filtering\n\nIsolate Destination Unreachable and TTL Exceeded.\n\n```python\nprint('display_filter: \"icmp.type == 3 or icmp.type == 11\"')\n```",
    "workedExample": {
      "title": "Worked Example: ICMP Error Code Filtering",
      "code": "print('display_filter: \"icmp.type == 3 or icmp.type == 11\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ICMP Error Code Filtering.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ICMP Error Code Filtering.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement ICMP Error Code Filtering\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"icmp.type == 3 or icmp.type == 11\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"icmp.type == 3 or icmp.type == 11\"')"
    ],
    "testCases": [
      {
        "id": "python-network-73-tc-1",
        "description": "Verifies correct implementation for ICMP Error Code Filtering",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-74-wireshark-display-filter-macro",
    "title": "74. Wireshark Display Filter Macros",
    "slug": "lesson-74-wireshark-display-filter-macro",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Pre-built macros for rapid analysis.",
    "concepts": [
      "Wireshark Display Filter Macros",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Wireshark Display Filter Macros reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Wireshark Display Filter Macros\n\nPre-built macros for rapid analysis.\n\n```python\nprint('display_filter: \"tcp.analysis.retransmission\"')\n```",
    "workedExample": {
      "title": "Worked Example: Wireshark Display Filter Macros",
      "code": "print('display_filter: \"tcp.analysis.retransmission\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Wireshark Display Filter Macros.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Wireshark Display Filter Macros.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Wireshark Display Filter Macros\n# TODO: Write code below\n\n",
    "solutionCode": "print('display_filter: \"tcp.analysis.retransmission\"')\n",
    "hints": [
      "Write:\nprint('display_filter: \"tcp.analysis.retransmission\"')"
    ],
    "testCases": [
      {
        "id": "python-network-74-tc-1",
        "description": "Verifies correct implementation for Wireshark Display Filter Macros",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-75-benchmarking-filter-performanc",
    "title": "75. Benchmarking Filter Performance in PyShark",
    "slug": "lesson-75-benchmarking-filter-performanc",
    "language": "python",
    "category": "Module 5: BPF Filters & Wireshark Display Filters",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Measure parsing acceleration when filtering early.",
    "concepts": [
      "Benchmarking Filter Performance in PyShark",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Benchmarking Filter Performance in PyShark reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Benchmarking Filter Performance in PyShark\n\nMeasure parsing acceleration when filtering early.\n\n```python\nprint('Using display_filter cuts Python loop time by 90%')\n```",
    "workedExample": {
      "title": "Worked Example: Benchmarking Filter Performance in PyShark",
      "code": "print('Using display_filter cuts Python loop time by 90%')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Benchmarking Filter Performance in PyShark.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Benchmarking Filter Performance in PyShark.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Benchmarking Filter Performance in PyShark\n# TODO: Write code below\n\n",
    "solutionCode": "print('Using display_filter cuts Python loop time by 90%')\n",
    "hints": [
      "Write:\nprint('Using display_filter cuts Python loop time by 90%')"
    ],
    "testCases": [
      {
        "id": "python-network-75-tc-1",
        "description": "Verifies correct implementation for Benchmarking Filter Performance in PyShark",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-76-inspecting-tcp-stream-indexes-",
    "title": "76. Inspecting TCP Stream Indexes: tcp.stream",
    "slug": "lesson-76-inspecting-tcp-stream-indexes-",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Group packets belonging to identical socket sessions.",
    "concepts": [
      "Inspecting TCP Stream Indexes: tcp.stream",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting TCP Stream Indexes: tcp.stream reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting TCP Stream Indexes: tcp.stream\n\nGroup packets belonging to identical socket sessions.\n\n```python\nprint('packet.tcp.stream provides unique conversation ID')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting TCP Stream Indexes: tcp.stream",
      "code": "print('packet.tcp.stream provides unique conversation ID')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting TCP Stream Indexes: tcp.stream.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting TCP Stream Indexes: tcp.stream.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting TCP Stream Indexes: tcp.stream\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.tcp.stream provides unique conversation ID')\n",
    "hints": [
      "Write:\nprint('packet.tcp.stream provides unique conversation ID')"
    ],
    "testCases": [
      {
        "id": "python-network-76-tc-1",
        "description": "Verifies correct implementation for Inspecting TCP Stream Indexes: tcp.stream",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-77-reconstructing-tcp-conversatio",
    "title": "77. Reconstructing TCP Conversations",
    "slug": "lesson-77-reconstructing-tcp-conversatio",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Collect all packets across an entire bidirectional session.",
    "concepts": [
      "Reconstructing TCP Conversations",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Reconstructing TCP Conversations reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Reconstructing TCP Conversations\n\nCollect all packets across an entire bidirectional session.\n\n```python\nprint('Extract all packets matching tcp.stream == 0')\n```",
    "workedExample": {
      "title": "Worked Example: Reconstructing TCP Conversations",
      "code": "print('Extract all packets matching tcp.stream == 0')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Reconstructing TCP Conversations.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Reconstructing TCP Conversations.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Reconstructing TCP Conversations\n# TODO: Write code below\n\n",
    "solutionCode": "print('Extract all packets matching tcp.stream == 0')\n",
    "hints": [
      "Write:\nprint('Extract all packets matching tcp.stream == 0')"
    ],
    "testCases": [
      {
        "id": "python-network-77-tc-1",
        "description": "Verifies correct implementation for Reconstructing TCP Conversations",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-78-detecting-tcp-retransmissions-",
    "title": "78. Detecting TCP Retransmissions and Packet Loss",
    "slug": "lesson-78-detecting-tcp-retransmissions-",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Diagnose network degradation and dropped segments.",
    "concepts": [
      "Detecting TCP Retransmissions and Packet Loss",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting TCP Retransmissions and Packet Loss reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting TCP Retransmissions and Packet Loss\n\nDiagnose network degradation and dropped segments.\n\n```python\nprint('if hasattr(packet.tcp, \"analysis_retransmission\"): flag_loss()')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting TCP Retransmissions and Packet Loss",
      "code": "print('if hasattr(packet.tcp, \"analysis_retransmission\"): flag_loss()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting TCP Retransmissions and Packet Loss.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting TCP Retransmissions and Packet Loss.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting TCP Retransmissions and Packet Loss\n# TODO: Write code below\n\n",
    "solutionCode": "print('if hasattr(packet.tcp, \"analysis_retransmission\"): flag_loss()')\n",
    "hints": [
      "Write:\nprint('if hasattr(packet.tcp, \"analysis_retransmission\"): flag_loss()')"
    ],
    "testCases": [
      {
        "id": "python-network-78-tc-1",
        "description": "Verifies correct implementation for Detecting TCP Retransmissions and Packet Loss",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-79-tcp-window-size-and-zero-windo",
    "title": "79. TCP Window Size and Zero Window Alerts",
    "slug": "lesson-79-tcp-window-size-and-zero-windo",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Detect buffer exhaustion on receivers.",
    "concepts": [
      "TCP Window Size and Zero Window Alerts",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: TCP Window Size and Zero Window Alerts reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### TCP Window Size and Zero Window Alerts\n\nDetect buffer exhaustion on receivers.\n\n```python\nprint('packet.tcp.window_size == 0 indicates TCP Zero Window')\n```",
    "workedExample": {
      "title": "Worked Example: TCP Window Size and Zero Window Alerts",
      "code": "print('packet.tcp.window_size == 0 indicates TCP Zero Window')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TCP Window Size and Zero Window Alerts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TCP Window Size and Zero Window Alerts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TCP Window Size and Zero Window Alerts\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.tcp.window_size == 0 indicates TCP Zero Window')\n",
    "hints": [
      "Write:\nprint('packet.tcp.window_size == 0 indicates TCP Zero Window')"
    ],
    "testCases": [
      {
        "id": "python-network-79-tc-1",
        "description": "Verifies correct implementation for TCP Window Size and Zero Window Alerts",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-80-tracking-tcp-sequence-and-ack-",
    "title": "80. Tracking TCP Sequence and Ack Numbers",
    "slug": "lesson-80-tracking-tcp-sequence-and-ack-",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Verify mathematical monotonicity of byte streams.",
    "concepts": [
      "Tracking TCP Sequence and Ack Numbers",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Tracking TCP Sequence and Ack Numbers reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Tracking TCP Sequence and Ack Numbers\n\nVerify mathematical monotonicity of byte streams.\n\n```python\nprint('seq = int(packet.tcp.seq); ack = int(packet.tcp.ack)')\n```",
    "workedExample": {
      "title": "Worked Example: Tracking TCP Sequence and Ack Numbers",
      "code": "print('seq = int(packet.tcp.seq); ack = int(packet.tcp.ack)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Tracking TCP Sequence and Ack Numbers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Tracking TCP Sequence and Ack Numbers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Tracking TCP Sequence and Ack Numbers\n# TODO: Write code below\n\n",
    "solutionCode": "print('seq = int(packet.tcp.seq); ack = int(packet.tcp.ack)')\n",
    "hints": [
      "Write:\nprint('seq = int(packet.tcp.seq); ack = int(packet.tcp.ack)')"
    ],
    "testCases": [
      {
        "id": "python-network-80-tc-1",
        "description": "Verifies correct implementation for Tracking TCP Sequence and Ack Numbers",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-81-tcp-handshake-latency-round-tr",
    "title": "81. TCP Handshake Latency (Round-Trip Time / RTT)",
    "slug": "lesson-81-tcp-handshake-latency-round-tr",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Measure time elapsed between SYN and ACK.",
    "concepts": [
      "TCP Handshake Latency (Round-Trip Time / RTT)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: TCP Handshake Latency (Round-Trip Time / RTT) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### TCP Handshake Latency (Round-Trip Time / RTT)\n\nMeasure time elapsed between SYN and ACK.\n\n```python\nprint('syn_time = syn_pkt.sniff_time; rtt = ack_pkt.sniff_time - syn_time')\n```",
    "workedExample": {
      "title": "Worked Example: TCP Handshake Latency (Round-Trip Time / RTT)",
      "code": "print('syn_time = syn_pkt.sniff_time; rtt = ack_pkt.sniff_time - syn_time')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TCP Handshake Latency (Round-Trip Time / RTT).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TCP Handshake Latency (Round-Trip Time / RTT).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TCP Handshake Latency (Round-Trip Time / RTT)\n# TODO: Write code below\n\n",
    "solutionCode": "print('syn_time = syn_pkt.sniff_time; rtt = ack_pkt.sniff_time - syn_time')\n",
    "hints": [
      "Write:\nprint('syn_time = syn_pkt.sniff_time; rtt = ack_pkt.sniff_time - syn_time')"
    ],
    "testCases": [
      {
        "id": "python-network-81-tc-1",
        "description": "Verifies correct implementation for TCP Handshake Latency (Round-Trip Time / RTT)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-82-detecting-syn-flood-denial-of-",
    "title": "82. Detecting SYN Flood Denial-of-Service Attacks",
    "slug": "lesson-82-detecting-syn-flood-denial-of-",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot half-open connections with high SYN-to-ACK ratio.",
    "concepts": [
      "Detecting SYN Flood Denial-of-Service Attacks",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting SYN Flood Denial-of-Service Attacks reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting SYN Flood Denial-of-Service Attacks\n\nSpot half-open connections with high SYN-to-ACK ratio.\n\n```python\nprint('High SYN count with no subsequent ACK signals SYN Flood')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting SYN Flood Denial-of-Service Attacks",
      "code": "print('High SYN count with no subsequent ACK signals SYN Flood')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting SYN Flood Denial-of-Service Attacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting SYN Flood Denial-of-Service Attacks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting SYN Flood Denial-of-Service Attacks\n# TODO: Write code below\n\n",
    "solutionCode": "print('High SYN count with no subsequent ACK signals SYN Flood')\n",
    "hints": [
      "Write:\nprint('High SYN count with no subsequent ACK signals SYN Flood')"
    ],
    "testCases": [
      {
        "id": "python-network-82-tc-1",
        "description": "Verifies correct implementation for Detecting SYN Flood Denial-of-Service Attacks",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-83-detecting-stealth-port-scans-f",
    "title": "83. Detecting Stealth Port Scans (FIN, XMAS, NULL Scans)",
    "slug": "lesson-83-detecting-stealth-port-scans-f",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify packets with illegal RFC flag combinations.",
    "concepts": [
      "Detecting Stealth Port Scans (FIN, XMAS, NULL Scans)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Stealth Port Scans (FIN, XMAS, NULL Scans) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Stealth Port Scans (FIN, XMAS, NULL Scans)\n\nIdentify packets with illegal RFC flag combinations.\n\n```python\nprint('NULL Scan: tcp.flags == 0; XMAS Scan: FIN+PSH+URG')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Stealth Port Scans (FIN, XMAS, NULL Scans)",
      "code": "print('NULL Scan: tcp.flags == 0; XMAS Scan: FIN+PSH+URG')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Stealth Port Scans (FIN, XMAS, NULL Scans).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Stealth Port Scans (FIN, XMAS, NULL Scans).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Stealth Port Scans (FIN, XMAS, NULL Scans)\n# TODO: Write code below\n\n",
    "solutionCode": "print('NULL Scan: tcp.flags == 0; XMAS Scan: FIN+PSH+URG')\n",
    "hints": [
      "Write:\nprint('NULL Scan: tcp.flags == 0; XMAS Scan: FIN+PSH+URG')"
    ],
    "testCases": [
      {
        "id": "python-network-83-tc-1",
        "description": "Verifies correct implementation for Detecting Stealth Port Scans (FIN, XMAS, NULL Scans)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-84-udp-stream-dissection-udp-srcp",
    "title": "84. UDP Stream Dissection: udp.srcport and udp.dstport",
    "slug": "lesson-84-udp-stream-dissection-udp-srcp",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect connectionless streams (VoIP, DNS, NTP, DHCP).",
    "concepts": [
      "UDP Stream Dissection: udp.srcport and udp.dstport",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: UDP Stream Dissection: udp.srcport and udp.dstport reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### UDP Stream Dissection: udp.srcport and udp.dstport\n\nInspect connectionless streams (VoIP, DNS, NTP, DHCP).\n\n```python\nprint('packet.udp.srcport, packet.udp.dstport')\n```",
    "workedExample": {
      "title": "Worked Example: UDP Stream Dissection: udp.srcport and udp.dstport",
      "code": "print('packet.udp.srcport, packet.udp.dstport')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for UDP Stream Dissection: udp.srcport and udp.dstport.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of UDP Stream Dissection: udp.srcport and udp.dstport.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement UDP Stream Dissection: udp.srcport and udp.dstport\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.udp.srcport, packet.udp.dstport')\n",
    "hints": [
      "Write:\nprint('packet.udp.srcport, packet.udp.dstport')"
    ],
    "testCases": [
      {
        "id": "python-network-84-tc-1",
        "description": "Verifies correct implementation for UDP Stream Dissection: udp.srcport and udp.dstport",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-85-detecting-udp-amplification-at",
    "title": "85. Detecting UDP Amplification Attacks (NTP / DNS / SSDP)",
    "slug": "lesson-85-detecting-udp-amplification-at",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot high-multiplier reflected packet floods.",
    "concepts": [
      "Detecting UDP Amplification Attacks (NTP / DNS / SSDP)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting UDP Amplification Attacks (NTP / DNS / SSDP) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting UDP Amplification Attacks (NTP / DNS / SSDP)\n\nSpot high-multiplier reflected packet floods.\n\n```python\nprint('Small request payload generating massive response payload')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting UDP Amplification Attacks (NTP / DNS / SSDP)",
      "code": "print('Small request payload generating massive response payload')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting UDP Amplification Attacks (NTP / DNS / SSDP).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting UDP Amplification Attacks (NTP / DNS / SSDP).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting UDP Amplification Attacks (NTP / DNS / SSDP)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Small request payload generating massive response payload')\n",
    "hints": [
      "Write:\nprint('Small request payload generating massive response payload')"
    ],
    "testCases": [
      {
        "id": "python-network-85-tc-1",
        "description": "Verifies correct implementation for Detecting UDP Amplification Attacks (NTP / DNS / SSDP)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-86-calculating-flow-bandwidth-and",
    "title": "86. Calculating Flow Bandwidth and Byte Totals",
    "slug": "lesson-86-calculating-flow-bandwidth-and",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Aggregate payload volume per conversation stream.",
    "concepts": [
      "Calculating Flow Bandwidth and Byte Totals",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Calculating Flow Bandwidth and Byte Totals reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Calculating Flow Bandwidth and Byte Totals\n\nAggregate payload volume per conversation stream.\n\n```python\nprint('total_bytes += int(packet.length)')\n```",
    "workedExample": {
      "title": "Worked Example: Calculating Flow Bandwidth and Byte Totals",
      "code": "print('total_bytes += int(packet.length)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Calculating Flow Bandwidth and Byte Totals.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Calculating Flow Bandwidth and Byte Totals.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Calculating Flow Bandwidth and Byte Totals\n# TODO: Write code below\n\n",
    "solutionCode": "print('total_bytes += int(packet.length)')\n",
    "hints": [
      "Write:\nprint('total_bytes += int(packet.length)')"
    ],
    "testCases": [
      {
        "id": "python-network-86-tc-1",
        "description": "Verifies correct implementation for Calculating Flow Bandwidth and Byte Totals",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-87-detecting-session-hijacking-in",
    "title": "87. Detecting Session Hijacking Indicators",
    "slug": "lesson-87-detecting-session-hijacking-in",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot sudden out-of-order sequence number jumps.",
    "concepts": [
      "Detecting Session Hijacking Indicators",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Session Hijacking Indicators reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Session Hijacking Indicators\n\nSpot sudden out-of-order sequence number jumps.\n\n```python\nprint('Unexpected sequence number discontinuities')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Session Hijacking Indicators",
      "code": "print('Unexpected sequence number discontinuities')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Session Hijacking Indicators.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Session Hijacking Indicators.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Session Hijacking Indicators\n# TODO: Write code below\n\n",
    "solutionCode": "print('Unexpected sequence number discontinuities')\n",
    "hints": [
      "Write:\nprint('Unexpected sequence number discontinuities')"
    ],
    "testCases": [
      {
        "id": "python-network-87-tc-1",
        "description": "Verifies correct implementation for Detecting Session Hijacking Indicators",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-88-extracting-raw-tcp-payloads-wi",
    "title": "88. Extracting Raw TCP Payloads with packet.tcp.payload",
    "slug": "lesson-88-extracting-raw-tcp-payloads-wi",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Retrieve hexadecimal application bytes.",
    "concepts": [
      "Extracting Raw TCP Payloads with packet.tcp.payload",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Raw TCP Payloads with packet.tcp.payload reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Raw TCP Payloads with packet.tcp.payload\n\nRetrieve hexadecimal application bytes.\n\n```python\nprint('raw_hex = packet.tcp.payload; ascii = bytes.fromhex(raw_hex)')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Raw TCP Payloads with packet.tcp.payload",
      "code": "print('raw_hex = packet.tcp.payload; ascii = bytes.fromhex(raw_hex)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Raw TCP Payloads with packet.tcp.payload.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Raw TCP Payloads with packet.tcp.payload.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Raw TCP Payloads with packet.tcp.payload\n# TODO: Write code below\n\n",
    "solutionCode": "print('raw_hex = packet.tcp.payload; ascii = bytes.fromhex(raw_hex)')\n",
    "hints": [
      "Write:\nprint('raw_hex = packet.tcp.payload; ascii = bytes.fromhex(raw_hex)')"
    ],
    "testCases": [
      {
        "id": "python-network-88-tc-1",
        "description": "Verifies correct implementation for Extracting Raw TCP Payloads with packet.tcp.payload",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-89-mapping-port-to-standard-servi",
    "title": "89. Mapping Port to Standard Service Names",
    "slug": "lesson-89-mapping-port-to-standard-servi",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Translate port 443 to HTTPS, 53 to DNS, 22 to SSH.",
    "concepts": [
      "Mapping Port to Standard Service Names",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Mapping Port to Standard Service Names reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Mapping Port to Standard Service Names\n\nTranslate port 443 to HTTPS, 53 to DNS, 22 to SSH.\n\n```python\nimport socket\nprint(socket.getservbyport(80, 'tcp'))\n```",
    "workedExample": {
      "title": "Worked Example: Mapping Port to Standard Service Names",
      "code": "import socket\nprint(socket.getservbyport(80, 'tcp'))",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Mapping Port to Standard Service Names.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Mapping Port to Standard Service Names.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Mapping Port to Standard Service Names\n# TODO: Write code below\n\n",
    "solutionCode": "import socket\nprint(socket.getservbyport(80, 'tcp'))\n",
    "hints": [
      "Write:\nimport socket\nprint(socket.getservbyport(80, 'tcp'))"
    ],
    "testCases": [
      {
        "id": "python-network-89-tc-1",
        "description": "Verifies correct implementation for Mapping Port to Standard Service Names",
        "testFn": "code.includes('getservbyport')"
      }
    ]
  },
  {
    "id": "python-network-90-exporting-flow-summaries-to-pa",
    "title": "90. Exporting Flow Summaries to Pandas DataFrames",
    "slug": "lesson-90-exporting-flow-summaries-to-pa",
    "language": "python",
    "category": "Module 6: Transport Layer Dissection (TCP/UDP Handshakes)",
    "difficulty": "Intermediate",
    "tier": 3,
    "tierName": "Intermediate",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Tabulate packet flows for machine learning anomaly models.",
    "concepts": [
      "Exporting Flow Summaries to Pandas DataFrames",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Exporting Flow Summaries to Pandas DataFrames reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Exporting Flow Summaries to Pandas DataFrames\n\nTabulate packet flows for machine learning anomaly models.\n\n```python\nprint('pd.DataFrame(packet_records).groupby(\"src_ip\").count()')\n```",
    "workedExample": {
      "title": "Worked Example: Exporting Flow Summaries to Pandas DataFrames",
      "code": "print('pd.DataFrame(packet_records).groupby(\"src_ip\").count()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exporting Flow Summaries to Pandas DataFrames.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exporting Flow Summaries to Pandas DataFrames.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Exporting Flow Summaries to Pandas DataFrames\n# TODO: Write code below\n\n",
    "solutionCode": "print('pd.DataFrame(packet_records).groupby(\"src_ip\").count()')\n",
    "hints": [
      "Write:\nprint('pd.DataFrame(packet_records).groupby(\"src_ip\").count()')"
    ],
    "testCases": [
      {
        "id": "python-network-90-tc-1",
        "description": "Verifies correct implementation for Exporting Flow Summaries to Pandas DataFrames",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-91-dns-protocol-architecture-udp-",
    "title": "91. DNS Protocol Architecture: UDP Port 53",
    "slug": "lesson-91-dns-protocol-architecture-udp-",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Recursive resolvers, authoritative nameservers, caching.",
    "concepts": [
      "DNS Protocol Architecture: UDP Port 53",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: DNS Protocol Architecture: UDP Port 53 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### DNS Protocol Architecture: UDP Port 53\n\nRecursive resolvers, authoritative nameservers, caching.\n\n```python\nprint('DNS queries standard UDP port 53')\n```",
    "workedExample": {
      "title": "Worked Example: DNS Protocol Architecture: UDP Port 53",
      "code": "print('DNS queries standard UDP port 53')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DNS Protocol Architecture: UDP Port 53.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DNS Protocol Architecture: UDP Port 53.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DNS Protocol Architecture: UDP Port 53\n# TODO: Write code below\n\n",
    "solutionCode": "print('DNS queries standard UDP port 53')\n",
    "hints": [
      "Write:\nprint('DNS queries standard UDP port 53')"
    ],
    "testCases": [
      {
        "id": "python-network-91-tc-1",
        "description": "Verifies correct implementation for DNS Protocol Architecture: UDP Port 53",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-92-checking-for-dns-layer-in-pysh",
    "title": "92. Checking for DNS Layer in PyShark: 'DNS' in packet",
    "slug": "lesson-92-checking-for-dns-layer-in-pysh",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter specifically for domain name resolution traffic.",
    "concepts": [
      "Checking for DNS Layer in PyShark: 'DNS' in packet",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Checking for DNS Layer in PyShark: 'DNS' in packet reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Checking for DNS Layer in PyShark: 'DNS' in packet\n\nFilter specifically for domain name resolution traffic.\n\n```python\nprint('if \"DNS\" in packet: process_dns(packet.dns)')\n```",
    "workedExample": {
      "title": "Worked Example: Checking for DNS Layer in PyShark: 'DNS' in packet",
      "code": "print('if \"DNS\" in packet: process_dns(packet.dns)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checking for DNS Layer in PyShark: 'DNS' in packet.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checking for DNS Layer in PyShark: 'DNS' in packet.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Checking for DNS Layer in PyShark: 'DNS' in packet\n# TODO: Write code below\n\n",
    "solutionCode": "print('if \"DNS\" in packet: process_dns(packet.dns)')\n",
    "hints": [
      "Write:\nprint('if \"DNS\" in packet: process_dns(packet.dns)')"
    ],
    "testCases": [
      {
        "id": "python-network-92-tc-1",
        "description": "Verifies correct implementation for Checking for DNS Layer in PyShark: 'DNS' in packet",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-93-extracting-query-names-with-pa",
    "title": "93. Extracting Query Names with packet.dns.qry_name",
    "slug": "lesson-93-extracting-query-names-with-pa",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify what domain the client is attempting to resolve.",
    "concepts": [
      "Extracting Query Names with packet.dns.qry_name",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Query Names with packet.dns.qry_name reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Query Names with packet.dns.qry_name\n\nIdentify what domain the client is attempting to resolve.\n\n```python\nprint('Target domain:', 'api.devforge.academy')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Query Names with packet.dns.qry_name",
      "code": "print('Target domain:', 'api.devforge.academy')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Query Names with packet.dns.qry_name.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Query Names with packet.dns.qry_name.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Query Names with packet.dns.qry_name\n# TODO: Write code below\n\n",
    "solutionCode": "print('Target domain:', 'api.devforge.academy')\n",
    "hints": [
      "Write:\nprint('Target domain:', 'api.devforge.academy')"
    ],
    "testCases": [
      {
        "id": "python-network-93-tc-1",
        "description": "Verifies correct implementation for Extracting Query Names with packet.dns.qry_name",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-94-inspecting-query-types-a-aaaa-",
    "title": "94. Inspecting Query Types: A, AAAA, CNAME, MX, TXT",
    "slug": "lesson-94-inspecting-query-types-a-aaaa-",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify requested resource record categories.",
    "concepts": [
      "Inspecting Query Types: A, AAAA, CNAME, MX, TXT",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting Query Types: A, AAAA, CNAME, MX, TXT reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting Query Types: A, AAAA, CNAME, MX, TXT\n\nIdentify requested resource record categories.\n\n```python\nprint('packet.dns.qry_type == \"1\" (Type A - IPv4)')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Query Types: A, AAAA, CNAME, MX, TXT",
      "code": "print('packet.dns.qry_type == \"1\" (Type A - IPv4)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Query Types: A, AAAA, CNAME, MX, TXT.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Query Types: A, AAAA, CNAME, MX, TXT.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Query Types: A, AAAA, CNAME, MX, TXT\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.dns.qry_type == \"1\" (Type A - IPv4)')\n",
    "hints": [
      "Write:\nprint('packet.dns.qry_type == \"1\" (Type A - IPv4)')"
    ],
    "testCases": [
      {
        "id": "python-network-94-tc-1",
        "description": "Verifies correct implementation for Inspecting Query Types: A, AAAA, CNAME, MX, TXT",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-95-extracting-resolved-ip-address",
    "title": "95. Extracting Resolved IP Addresses (dns.a and dns.aaaa)",
    "slug": "lesson-95-extracting-resolved-ip-address",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect IP answers returned by the DNS server.",
    "concepts": [
      "Extracting Resolved IP Addresses (dns.a and dns.aaaa)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Resolved IP Addresses (dns.a and dns.aaaa) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Resolved IP Addresses (dns.a and dns.aaaa)\n\nInspect IP answers returned by the DNS server.\n\n```python\nprint('Resolved Answer:', '142.250.190.46')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Resolved IP Addresses (dns.a and dns.aaaa)",
      "code": "print('Resolved Answer:', '142.250.190.46')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Resolved IP Addresses (dns.a and dns.aaaa).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Resolved IP Addresses (dns.a and dns.aaaa).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Resolved IP Addresses (dns.a and dns.aaaa)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Resolved Answer:', '142.250.190.46')\n",
    "hints": [
      "Write:\nprint('Resolved Answer:', '142.250.190.46')"
    ],
    "testCases": [
      {
        "id": "python-network-95-tc-1",
        "description": "Verifies correct implementation for Extracting Resolved IP Addresses (dns.a and dns.aaaa)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-96-dns-response-codes-rcode-noerr",
    "title": "96. DNS Response Codes (RCODE): NoError vs NXDomain",
    "slug": "lesson-96-dns-response-codes-rcode-noerr",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Detect nonexistent domain resolution queries.",
    "concepts": [
      "DNS Response Codes (RCODE): NoError vs NXDomain",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: DNS Response Codes (RCODE): NoError vs NXDomain reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### DNS Response Codes (RCODE): NoError vs NXDomain\n\nDetect nonexistent domain resolution queries.\n\n```python\nprint('rcode 3 indicates NXDomain (Non-Existent Domain)')\n```",
    "workedExample": {
      "title": "Worked Example: DNS Response Codes (RCODE): NoError vs NXDomain",
      "code": "print('rcode 3 indicates NXDomain (Non-Existent Domain)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DNS Response Codes (RCODE): NoError vs NXDomain.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DNS Response Codes (RCODE): NoError vs NXDomain.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DNS Response Codes (RCODE): NoError vs NXDomain\n# TODO: Write code below\n\n",
    "solutionCode": "print('rcode 3 indicates NXDomain (Non-Existent Domain)')\n",
    "hints": [
      "Write:\nprint('rcode 3 indicates NXDomain (Non-Existent Domain)')"
    ],
    "testCases": [
      {
        "id": "python-network-96-tc-1",
        "description": "Verifies correct implementation for DNS Response Codes (RCODE): NoError vs NXDomain",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-97-detecting-domain-generation-al",
    "title": "97. Detecting Domain Generation Algorithms (DGA)",
    "slug": "lesson-97-detecting-domain-generation-al",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot malware communication via high-entropy domain queries.",
    "concepts": [
      "Detecting Domain Generation Algorithms (DGA)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Domain Generation Algorithms (DGA) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Domain Generation Algorithms (DGA)\n\nSpot malware communication via high-entropy domain queries.\n\n```python\nprint('Detect random strings like xk81j3kals90.com with entropy metrics')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Domain Generation Algorithms (DGA)",
      "code": "print('Detect random strings like xk81j3kals90.com with entropy metrics')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Domain Generation Algorithms (DGA).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Domain Generation Algorithms (DGA).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Domain Generation Algorithms (DGA)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Detect random strings like xk81j3kals90.com with entropy metrics')\n",
    "hints": [
      "Write:\nprint('Detect random strings like xk81j3kals90.com with entropy metrics')"
    ],
    "testCases": [
      {
        "id": "python-network-97-tc-1",
        "description": "Verifies correct implementation for Detecting Domain Generation Algorithms (DGA)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-98-detecting-dns-tunneling-and-da",
    "title": "98. Detecting DNS Tunneling and Data Exfiltration",
    "slug": "lesson-98-detecting-dns-tunneling-and-da",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot encoded data inside subdomains (e.g., base64.attacker.com).",
    "concepts": [
      "Detecting DNS Tunneling and Data Exfiltration",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting DNS Tunneling and Data Exfiltration reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting DNS Tunneling and Data Exfiltration\n\nSpot encoded data inside subdomains (e.g., base64.attacker.com).\n\n```python\nprint('Abnormally long subdomains with high TXT record volume')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting DNS Tunneling and Data Exfiltration",
      "code": "print('Abnormally long subdomains with high TXT record volume')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting DNS Tunneling and Data Exfiltration.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting DNS Tunneling and Data Exfiltration.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting DNS Tunneling and Data Exfiltration\n# TODO: Write code below\n\n",
    "solutionCode": "print('Abnormally long subdomains with high TXT record volume')\n",
    "hints": [
      "Write:\nprint('Abnormally long subdomains with high TXT record volume')"
    ],
    "testCases": [
      {
        "id": "python-network-98-tc-1",
        "description": "Verifies correct implementation for Detecting DNS Tunneling and Data Exfiltration",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-99-dns-cache-poisoning-indicators",
    "title": "99. DNS Cache Poisoning Indicators",
    "slug": "lesson-99-dns-cache-poisoning-indicators",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Mismatched transaction IDs and unsolicited DNS answers.",
    "concepts": [
      "DNS Cache Poisoning Indicators",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: DNS Cache Poisoning Indicators reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### DNS Cache Poisoning Indicators\n\nMismatched transaction IDs and unsolicited DNS answers.\n\n```python\nprint('packet.dns.id verification against outstanding request table')\n```",
    "workedExample": {
      "title": "Worked Example: DNS Cache Poisoning Indicators",
      "code": "print('packet.dns.id verification against outstanding request table')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DNS Cache Poisoning Indicators.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DNS Cache Poisoning Indicators.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DNS Cache Poisoning Indicators\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.dns.id verification against outstanding request table')\n",
    "hints": [
      "Write:\nprint('packet.dns.id verification against outstanding request table')"
    ],
    "testCases": [
      {
        "id": "python-network-99-tc-1",
        "description": "Verifies correct implementation for DNS Cache Poisoning Indicators",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-100-fast-flux-dns-detection",
    "title": "100. Fast-Flux DNS Detection",
    "slug": "lesson-100-fast-flux-dns-detection",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Domains rapidly cycling through hundreds of IP answers.",
    "concepts": [
      "Fast-Flux DNS Detection",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Fast-Flux DNS Detection reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Fast-Flux DNS Detection\n\nDomains rapidly cycling through hundreds of IP answers.\n\n```python\nprint('Count unique IPs returned for identical query within short window')\n```",
    "workedExample": {
      "title": "Worked Example: Fast-Flux DNS Detection",
      "code": "print('Count unique IPs returned for identical query within short window')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Fast-Flux DNS Detection.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Fast-Flux DNS Detection.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Fast-Flux DNS Detection\n# TODO: Write code below\n\n",
    "solutionCode": "print('Count unique IPs returned for identical query within short window')\n",
    "hints": [
      "Write:\nprint('Count unique IPs returned for identical query within short window')"
    ],
    "testCases": [
      {
        "id": "python-network-100-tc-1",
        "description": "Verifies correct implementation for Fast-Flux DNS Detection",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-101-dns-response-time-latency-trac",
    "title": "101. DNS Response Time Latency Tracking",
    "slug": "lesson-101-dns-response-time-latency-trac",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Measure time delta between Query and Response.",
    "concepts": [
      "DNS Response Time Latency Tracking",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: DNS Response Time Latency Tracking reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### DNS Response Time Latency Tracking\n\nMeasure time delta between Query and Response.\n\n```python\nprint('packet.dns.time measures resolver latency in seconds')\n```",
    "workedExample": {
      "title": "Worked Example: DNS Response Time Latency Tracking",
      "code": "print('packet.dns.time measures resolver latency in seconds')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DNS Response Time Latency Tracking.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DNS Response Time Latency Tracking.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DNS Response Time Latency Tracking\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.dns.time measures resolver latency in seconds')\n",
    "hints": [
      "Write:\nprint('packet.dns.time measures resolver latency in seconds')"
    ],
    "testCases": [
      {
        "id": "python-network-101-tc-1",
        "description": "Verifies correct implementation for DNS Response Time Latency Tracking",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-102-analyzing-dynamic-dns-ddns-que",
    "title": "102. Analyzing Dynamic DNS (DDNS) Queries",
    "slug": "lesson-102-analyzing-dynamic-dns-ddns-que",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify malicious traffic contacting No-IP, DuckDNS, etc.",
    "concepts": [
      "Analyzing Dynamic DNS (DDNS) Queries",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Analyzing Dynamic DNS (DDNS) Queries reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Analyzing Dynamic DNS (DDNS) Queries\n\nIdentify malicious traffic contacting No-IP, DuckDNS, etc.\n\n```python\nprint('Flag queries directed to known Dynamic DNS provider zones')\n```",
    "workedExample": {
      "title": "Worked Example: Analyzing Dynamic DNS (DDNS) Queries",
      "code": "print('Flag queries directed to known Dynamic DNS provider zones')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Analyzing Dynamic DNS (DDNS) Queries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Analyzing Dynamic DNS (DDNS) Queries.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Analyzing Dynamic DNS (DDNS) Queries\n# TODO: Write code below\n\n",
    "solutionCode": "print('Flag queries directed to known Dynamic DNS provider zones')\n",
    "hints": [
      "Write:\nprint('Flag queries directed to known Dynamic DNS provider zones')"
    ],
    "testCases": [
      {
        "id": "python-network-102-tc-1",
        "description": "Verifies correct implementation for Analyzing Dynamic DNS (DDNS) Queries",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-103-detecting-dns-rebinding-attack",
    "title": "103. Detecting DNS Rebinding Attacks",
    "slug": "lesson-103-detecting-dns-rebinding-attack",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot internal private IP resolutions (127.0.0.1, 192.168.x).",
    "concepts": [
      "Detecting DNS Rebinding Attacks",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting DNS Rebinding Attacks reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting DNS Rebinding Attacks\n\nSpot internal private IP resolutions (127.0.0.1, 192.168.x).\n\n```python\nprint('Public domain resolving to 127.0.0.1 or 169.254.169.254')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting DNS Rebinding Attacks",
      "code": "print('Public domain resolving to 127.0.0.1 or 169.254.169.254')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting DNS Rebinding Attacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting DNS Rebinding Attacks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting DNS Rebinding Attacks\n# TODO: Write code below\n\n",
    "solutionCode": "print('Public domain resolving to 127.0.0.1 or 169.254.169.254')\n",
    "hints": [
      "Write:\nprint('Public domain resolving to 127.0.0.1 or 169.254.169.254')"
    ],
    "testCases": [
      {
        "id": "python-network-103-tc-1",
        "description": "Verifies correct implementation for Detecting DNS Rebinding Attacks",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-104-dns-over-https-doh-and-dns-ove",
    "title": "104. DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact",
    "slug": "lesson-104-dns-over-https-doh-and-dns-ove",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why encrypted DNS shifts analysis to port 853 and SNI.",
    "concepts": [
      "DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact\n\nWhy encrypted DNS shifts analysis to port 853 and SNI.\n\n```python\nprint('DoH conceals DNS queries inside standard HTTPS port 443 traffic')\n```",
    "workedExample": {
      "title": "Worked Example: DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact",
      "code": "print('DoH conceals DNS queries inside standard HTTPS port 443 traffic')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact\n# TODO: Write code below\n\n",
    "solutionCode": "print('DoH conceals DNS queries inside standard HTTPS port 443 traffic')\n",
    "hints": [
      "Write:\nprint('DoH conceals DNS queries inside standard HTTPS port 443 traffic')"
    ],
    "testCases": [
      {
        "id": "python-network-104-tc-1",
        "description": "Verifies correct implementation for DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) Impact",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-105-exporting-dns-audit-logs-to-js",
    "title": "105. Exporting DNS Audit Logs to JSON",
    "slug": "lesson-105-exporting-dns-audit-logs-to-js",
    "language": "python",
    "category": "Module 7: DNS Traffic Inspection & Query Analysis",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Generate forensic audit records of all domain resolutions.",
    "concepts": [
      "Exporting DNS Audit Logs to JSON",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Exporting DNS Audit Logs to JSON reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Exporting DNS Audit Logs to JSON\n\nGenerate forensic audit records of all domain resolutions.\n\n```python\nprint('json.dumps({\"timestamp\": t, \"query\": q, \"ip\": ip})')\n```",
    "workedExample": {
      "title": "Worked Example: Exporting DNS Audit Logs to JSON",
      "code": "print('json.dumps({\"timestamp\": t, \"query\": q, \"ip\": ip})')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Exporting DNS Audit Logs to JSON.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Exporting DNS Audit Logs to JSON.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Exporting DNS Audit Logs to JSON\n# TODO: Write code below\n\n",
    "solutionCode": "print('json.dumps({\"timestamp\": t, \"query\": q, \"ip\": ip})')\n",
    "hints": [
      "Write:\nprint('json.dumps({\"timestamp\": t, \"query\": q, \"ip\": ip})')"
    ],
    "testCases": [
      {
        "id": "python-network-105-tc-1",
        "description": "Verifies correct implementation for Exporting DNS Audit Logs to JSON",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-106-inspecting-unencrypted-http-tr",
    "title": "106. Inspecting Unencrypted HTTP Traffic (Port 80/8080)",
    "slug": "lesson-106-inspecting-unencrypted-http-tr",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Analyze cleartext web communications.",
    "concepts": [
      "Inspecting Unencrypted HTTP Traffic (Port 80/8080)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting Unencrypted HTTP Traffic (Port 80/8080) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting Unencrypted HTTP Traffic (Port 80/8080)\n\nAnalyze cleartext web communications.\n\n```python\nprint('if \"HTTP\" in packet: inspect_http(packet.http)')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Unencrypted HTTP Traffic (Port 80/8080)",
      "code": "print('if \"HTTP\" in packet: inspect_http(packet.http)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Unencrypted HTTP Traffic (Port 80/8080).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Unencrypted HTTP Traffic (Port 80/8080).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Unencrypted HTTP Traffic (Port 80/8080)\n# TODO: Write code below\n\n",
    "solutionCode": "print('if \"HTTP\" in packet: inspect_http(packet.http)')\n",
    "hints": [
      "Write:\nprint('if \"HTTP\" in packet: inspect_http(packet.http)')"
    ],
    "testCases": [
      {
        "id": "python-network-106-tc-1",
        "description": "Verifies correct implementation for Inspecting Unencrypted HTTP Traffic (Port 80/8080)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-107-extracting-http-methods-get-po",
    "title": "107. Extracting HTTP Methods: GET, POST, PUT, DELETE",
    "slug": "lesson-107-extracting-http-methods-get-po",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify the requested client action.",
    "concepts": [
      "Extracting HTTP Methods: GET, POST, PUT, DELETE",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting HTTP Methods: GET, POST, PUT, DELETE reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting HTTP Methods: GET, POST, PUT, DELETE\n\nIdentify the requested client action.\n\n```python\nprint('Method:', 'POST')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting HTTP Methods: GET, POST, PUT, DELETE",
      "code": "print('Method:', 'POST')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting HTTP Methods: GET, POST, PUT, DELETE.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting HTTP Methods: GET, POST, PUT, DELETE.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting HTTP Methods: GET, POST, PUT, DELETE\n# TODO: Write code below\n\n",
    "solutionCode": "print('Method:', 'POST')\n",
    "hints": [
      "Write:\nprint('Method:', 'POST')"
    ],
    "testCases": [
      {
        "id": "python-network-107-tc-1",
        "description": "Verifies correct implementation for Extracting HTTP Methods: GET, POST, PUT, DELETE",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-108-extracting-request-uris-and-fu",
    "title": "108. Extracting Request URIs and Full URLs",
    "slug": "lesson-108-extracting-request-uris-and-fu",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect target endpoint paths and query string parameters.",
    "concepts": [
      "Extracting Request URIs and Full URLs",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Request URIs and Full URLs reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Request URIs and Full URLs\n\nInspect target endpoint paths and query string parameters.\n\n```python\nprint('URI:', '/api/v1/auth/login?redirect=dashboard')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Request URIs and Full URLs",
      "code": "print('URI:', '/api/v1/auth/login?redirect=dashboard')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Request URIs and Full URLs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Request URIs and Full URLs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Request URIs and Full URLs\n# TODO: Write code below\n\n",
    "solutionCode": "print('URI:', '/api/v1/auth/login?redirect=dashboard')\n",
    "hints": [
      "Write:\nprint('URI:', '/api/v1/auth/login?redirect=dashboard')"
    ],
    "testCases": [
      {
        "id": "python-network-108-tc-1",
        "description": "Verifies correct implementation for Extracting Request URIs and Full URLs",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-109-inspecting-user-agent-headers",
    "title": "109. Inspecting User-Agent Headers",
    "slug": "lesson-109-inspecting-user-agent-headers",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify client operating systems, browsers, or automated bot scripts.",
    "concepts": [
      "Inspecting User-Agent Headers",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting User-Agent Headers reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting User-Agent Headers\n\nIdentify client operating systems, browsers, or automated bot scripts.\n\n```python\nprint('User-Agent:', 'python-requests/2.31.0')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting User-Agent Headers",
      "code": "print('User-Agent:', 'python-requests/2.31.0')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting User-Agent Headers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting User-Agent Headers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting User-Agent Headers\n# TODO: Write code below\n\n",
    "solutionCode": "print('User-Agent:', 'python-requests/2.31.0')\n",
    "hints": [
      "Write:\nprint('User-Agent:', 'python-requests/2.31.0')"
    ],
    "testCases": [
      {
        "id": "python-network-109-tc-1",
        "description": "Verifies correct implementation for Inspecting User-Agent Headers",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-110-extracting-host-headers-and-vi",
    "title": "110. Extracting Host Headers and Virtual Hosts",
    "slug": "lesson-110-extracting-host-headers-and-vi",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify target web server domain names.",
    "concepts": [
      "Extracting Host Headers and Virtual Hosts",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Host Headers and Virtual Hosts reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Host Headers and Virtual Hosts\n\nIdentify target web server domain names.\n\n```python\nprint('Host:', 'api.internal.corp')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Host Headers and Virtual Hosts",
      "code": "print('Host:', 'api.internal.corp')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Host Headers and Virtual Hosts.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Host Headers and Virtual Hosts.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Host Headers and Virtual Hosts\n# TODO: Write code below\n\n",
    "solutionCode": "print('Host:', 'api.internal.corp')\n",
    "hints": [
      "Write:\nprint('Host:', 'api.internal.corp')"
    ],
    "testCases": [
      {
        "id": "python-network-110-tc-1",
        "description": "Verifies correct implementation for Extracting Host Headers and Virtual Hosts",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-111-analyzing-http-response-codes-",
    "title": "111. Analyzing HTTP Response Codes (200, 301, 401, 403, 500)",
    "slug": "lesson-111-analyzing-http-response-codes-",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Monitor service availability and unauthorized access attempts.",
    "concepts": [
      "Analyzing HTTP Response Codes (200, 301, 401, 403, 500)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Analyzing HTTP Response Codes (200, 301, 401, 403, 500) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Analyzing HTTP Response Codes (200, 301, 401, 403, 500)\n\nMonitor service availability and unauthorized access attempts.\n\n```python\nprint('Status Code:', '401 Unauthorized')\n```",
    "workedExample": {
      "title": "Worked Example: Analyzing HTTP Response Codes (200, 301, 401, 403, 500)",
      "code": "print('Status Code:', '401 Unauthorized')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Analyzing HTTP Response Codes (200, 301, 401, 403, 500).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Analyzing HTTP Response Codes (200, 301, 401, 403, 500).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Analyzing HTTP Response Codes (200, 301, 401, 403, 500)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Status Code:', '401 Unauthorized')\n",
    "hints": [
      "Write:\nprint('Status Code:', '401 Unauthorized')"
    ],
    "testCases": [
      {
        "id": "python-network-111-tc-1",
        "description": "Verifies correct implementation for Analyzing HTTP Response Codes (200, 301, 401, 403, 500)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-112-detecting-sql-injection-patter",
    "title": "112. Detecting SQL Injection Patterns in Request URIs",
    "slug": "lesson-112-detecting-sql-injection-patter",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Spot SQL keywords (UNION, SELECT, OR 1=1) in queries.",
    "concepts": [
      "Detecting SQL Injection Patterns in Request URIs",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting SQL Injection Patterns in Request URIs reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting SQL Injection Patterns in Request URIs\n\nSpot SQL keywords (UNION, SELECT, OR 1=1) in queries.\n\n```python\nprint('Detect URI containing \\\"UNION SELECT\\\" or \\\"--\\\"')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting SQL Injection Patterns in Request URIs",
      "code": "print('Detect URI containing \\\"UNION SELECT\\\" or \\\"--\\\"')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting SQL Injection Patterns in Request URIs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting SQL Injection Patterns in Request URIs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting SQL Injection Patterns in Request URIs\n# TODO: Write code below\n\n",
    "solutionCode": "print('Detect URI containing \\\"UNION SELECT\\\" or \\\"--\\\"')\n",
    "hints": [
      "Write:\nprint('Detect URI containing \\\"UNION SELECT\\\" or \\\"--\\\"')"
    ],
    "testCases": [
      {
        "id": "python-network-112-tc-1",
        "description": "Verifies correct implementation for Detecting SQL Injection Patterns in Request URIs",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-113-detecting-cross-site-scripting",
    "title": "113. Detecting Cross-Site Scripting (XSS) Payloads",
    "slug": "lesson-113-detecting-cross-site-scripting",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Search for <script>, onerror=, and javascript: directives.",
    "concepts": [
      "Detecting Cross-Site Scripting (XSS) Payloads",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Cross-Site Scripting (XSS) Payloads reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Cross-Site Scripting (XSS) Payloads\n\nSearch for <script>, onerror=, and javascript: directives.\n\n```python\nprint('Alert on <script> tags injected into HTTP parameters')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Cross-Site Scripting (XSS) Payloads",
      "code": "print('Alert on <script> tags injected into HTTP parameters')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Cross-Site Scripting (XSS) Payloads.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Cross-Site Scripting (XSS) Payloads.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Cross-Site Scripting (XSS) Payloads\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert on <script> tags injected into HTTP parameters')\n",
    "hints": [
      "Write:\nprint('Alert on <script> tags injected into HTTP parameters')"
    ],
    "testCases": [
      {
        "id": "python-network-113-tc-1",
        "description": "Verifies correct implementation for Detecting Cross-Site Scripting (XSS) Payloads",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-114-detecting-path-traversal-attac",
    "title": "114. Detecting Path Traversal Attacks (../..)",
    "slug": "lesson-114-detecting-path-traversal-attac",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify attempts to read /etc/passwd or system files.",
    "concepts": [
      "Detecting Path Traversal Attacks (../..)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Path Traversal Attacks (../..) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Path Traversal Attacks (../..)\n\nIdentify attempts to read /etc/passwd or system files.\n\n```python\nprint('Alert on \\\"../..\\\" sequences in request URIs')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Path Traversal Attacks (../..)",
      "code": "print('Alert on \\\"../..\\\" sequences in request URIs')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Path Traversal Attacks (../..).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Path Traversal Attacks (../..).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Path Traversal Attacks (../..)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert on \\\"../..\\\" sequences in request URIs')\n",
    "hints": [
      "Write:\nprint('Alert on \\\"../..\\\" sequences in request URIs')"
    ],
    "testCases": [
      {
        "id": "python-network-114-tc-1",
        "description": "Verifies correct implementation for Detecting Path Traversal Attacks (../..)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-115-extracting-cleartext-credentia",
    "title": "115. Extracting Cleartext Credentials (Basic Auth)",
    "slug": "lesson-115-extracting-cleartext-credentia",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decode base64 encoded Authorization headers.",
    "concepts": [
      "Extracting Cleartext Credentials (Basic Auth)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Cleartext Credentials (Basic Auth) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Cleartext Credentials (Basic Auth)\n\nDecode base64 encoded Authorization headers.\n\n```python\nimport base64\nprint(base64.b64decode(b'YWRtaW46cGFzc3dvcmQ=').decode())\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Cleartext Credentials (Basic Auth)",
      "code": "import base64\nprint(base64.b64decode(b'YWRtaW46cGFzc3dvcmQ=').decode())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Cleartext Credentials (Basic Auth).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Cleartext Credentials (Basic Auth).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Cleartext Credentials (Basic Auth)\n# TODO: Write code below\n\n",
    "solutionCode": "import base64\nprint(base64.b64decode(b'YWRtaW46cGFzc3dvcmQ=').decode())\n",
    "hints": [
      "Write:\nimport base64\nprint(base64.b64decode(b'YWRtaW46cGFzc3dvcmQ=').decode())"
    ],
    "testCases": [
      {
        "id": "python-network-115-tc-1",
        "description": "Verifies correct implementation for Extracting Cleartext Credentials (Basic Auth)",
        "testFn": "code.includes('b64decode')"
      }
    ]
  },
  {
    "id": "python-network-116-extracting-cookie-and-session-",
    "title": "116. Extracting Cookie and Session Headers",
    "slug": "lesson-116-extracting-cookie-and-session-",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Audit session tokens and security flags (Secure, HttpOnly).",
    "concepts": [
      "Extracting Cookie and Session Headers",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Cookie and Session Headers reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Cookie and Session Headers\n\nAudit session tokens and security flags (Secure, HttpOnly).\n\n```python\nprint('Cookie: session_id=xyz; HttpOnly; Secure')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Cookie and Session Headers",
      "code": "print('Cookie: session_id=xyz; HttpOnly; Secure')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Cookie and Session Headers.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Cookie and Session Headers.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Cookie and Session Headers\n# TODO: Write code below\n\n",
    "solutionCode": "print('Cookie: session_id=xyz; HttpOnly; Secure')\n",
    "hints": [
      "Write:\nprint('Cookie: session_id=xyz; HttpOnly; Secure')"
    ],
    "testCases": [
      {
        "id": "python-network-116-tc-1",
        "description": "Verifies correct implementation for Extracting Cookie and Session Headers",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-117-extracting-uploaded-files-and-",
    "title": "117. Extracting Uploaded Files and MIME Multi-Part Data",
    "slug": "lesson-117-extracting-uploaded-files-and-",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Reconstruct files sent via multipart/form-data POST.",
    "concepts": [
      "Extracting Uploaded Files and MIME Multi-Part Data",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Uploaded Files and MIME Multi-Part Data reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Uploaded Files and MIME Multi-Part Data\n\nReconstruct files sent via multipart/form-data POST.\n\n```python\nprint('Extract file boundaries and payload byte chunks')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Uploaded Files and MIME Multi-Part Data",
      "code": "print('Extract file boundaries and payload byte chunks')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Uploaded Files and MIME Multi-Part Data.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Uploaded Files and MIME Multi-Part Data.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Uploaded Files and MIME Multi-Part Data\n# TODO: Write code below\n\n",
    "solutionCode": "print('Extract file boundaries and payload byte chunks')\n",
    "hints": [
      "Write:\nprint('Extract file boundaries and payload byte chunks')"
    ],
    "testCases": [
      {
        "id": "python-network-117-tc-1",
        "description": "Verifies correct implementation for Extracting Uploaded Files and MIME Multi-Part Data",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-118-http-content-type-and-payload-",
    "title": "118. HTTP Content-Type and Payload Compression (gzip)",
    "slug": "lesson-118-http-content-type-and-payload-",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Decompress gzip/deflate response payloads.",
    "concepts": [
      "HTTP Content-Type and Payload Compression (gzip)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: HTTP Content-Type and Payload Compression (gzip) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### HTTP Content-Type and Payload Compression (gzip)\n\nDecompress gzip/deflate response payloads.\n\n```python\nprint('Content-Encoding: gzip requires zlib.decompress()')\n```",
    "workedExample": {
      "title": "Worked Example: HTTP Content-Type and Payload Compression (gzip)",
      "code": "print('Content-Encoding: gzip requires zlib.decompress()')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for HTTP Content-Type and Payload Compression (gzip).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of HTTP Content-Type and Payload Compression (gzip).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement HTTP Content-Type and Payload Compression (gzip)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Content-Encoding: gzip requires zlib.decompress()')\n",
    "hints": [
      "Write:\nprint('Content-Encoding: gzip requires zlib.decompress()')"
    ],
    "testCases": [
      {
        "id": "python-network-118-tc-1",
        "description": "Verifies correct implementation for HTTP Content-Type and Payload Compression (gzip)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-119-detecting-automated-web-scrape",
    "title": "119. Detecting Automated Web Scrapers and DirBuster Scans",
    "slug": "lesson-119-detecting-automated-web-scrape",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flag rapid sequential 404 responses from a single IP.",
    "concepts": [
      "Detecting Automated Web Scrapers and DirBuster Scans",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Automated Web Scrapers and DirBuster Scans reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Automated Web Scrapers and DirBuster Scans\n\nFlag rapid sequential 404 responses from a single IP.\n\n```python\nprint('50+ 404 errors within 5 seconds indicates directory brute-force')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Automated Web Scrapers and DirBuster Scans",
      "code": "print('50+ 404 errors within 5 seconds indicates directory brute-force')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Automated Web Scrapers and DirBuster Scans.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Automated Web Scrapers and DirBuster Scans.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Automated Web Scrapers and DirBuster Scans\n# TODO: Write code below\n\n",
    "solutionCode": "print('50+ 404 errors within 5 seconds indicates directory brute-force')\n",
    "hints": [
      "Write:\nprint('50+ 404 errors within 5 seconds indicates directory brute-force')"
    ],
    "testCases": [
      {
        "id": "python-network-119-tc-1",
        "description": "Verifies correct implementation for Detecting Automated Web Scrapers and DirBuster Scans",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-120-building-an-http-access-log-an",
    "title": "120. Building an HTTP Access Log Analyzer in Python",
    "slug": "lesson-120-building-an-http-access-log-an",
    "language": "python",
    "category": "Module 8: Application Layer Inspection (HTTP & REST)",
    "difficulty": "Advanced",
    "tier": 4,
    "tierName": "Advanced",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Produce Apache/Nginx formatted access logs from PCAP streams.",
    "concepts": [
      "Building an HTTP Access Log Analyzer in Python",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Building an HTTP Access Log Analyzer in Python reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Building an HTTP Access Log Analyzer in Python\n\nProduce Apache/Nginx formatted access logs from PCAP streams.\n\n```python\nprint('Generate [IP] - [Time] \"METHOD URI HTTP/1.1\" STATUS BYTES')\n```",
    "workedExample": {
      "title": "Worked Example: Building an HTTP Access Log Analyzer in Python",
      "code": "print('Generate [IP] - [Time] \"METHOD URI HTTP/1.1\" STATUS BYTES')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building an HTTP Access Log Analyzer in Python.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building an HTTP Access Log Analyzer in Python.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Building an HTTP Access Log Analyzer in Python\n# TODO: Write code below\n\n",
    "solutionCode": "print('Generate [IP] - [Time] \"METHOD URI HTTP/1.1\" STATUS BYTES')\n",
    "hints": [
      "Write:\nprint('Generate [IP] - [Time] \"METHOD URI HTTP/1.1\" STATUS BYTES')"
    ],
    "testCases": [
      {
        "id": "python-network-120-tc-1",
        "description": "Verifies correct implementation for Building an HTTP Access Log Analyzer in Python",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-121-tls-ssl-encryption-basics-symm",
    "title": "121. TLS/SSL Encryption Basics: Symmetric vs Asymmetric",
    "slug": "lesson-121-tls-ssl-encryption-basics-symm",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Why packet payloads become opaque after the handshake.",
    "concepts": [
      "TLS/SSL Encryption Basics: Symmetric vs Asymmetric",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: TLS/SSL Encryption Basics: Symmetric vs Asymmetric reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### TLS/SSL Encryption Basics: Symmetric vs Asymmetric\n\nWhy packet payloads become opaque after the handshake.\n\n```python\nprint('TLS encrypts application data; metadata remains in handshake')\n```",
    "workedExample": {
      "title": "Worked Example: TLS/SSL Encryption Basics: Symmetric vs Asymmetric",
      "code": "print('TLS encrypts application data; metadata remains in handshake')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for TLS/SSL Encryption Basics: Symmetric vs Asymmetric.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of TLS/SSL Encryption Basics: Symmetric vs Asymmetric.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement TLS/SSL Encryption Basics: Symmetric vs Asymmetric\n# TODO: Write code below\n\n",
    "solutionCode": "print('TLS encrypts application data; metadata remains in handshake')\n",
    "hints": [
      "Write:\nprint('TLS encrypts application data; metadata remains in handshake')"
    ],
    "testCases": [
      {
        "id": "python-network-121-tc-1",
        "description": "Verifies correct implementation for TLS/SSL Encryption Basics: Symmetric vs Asymmetric",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-122-checking-for-tls-layer-in-pysh",
    "title": "122. Checking for TLS Layer in PyShark ('TLS' in packet)",
    "slug": "lesson-122-checking-for-tls-layer-in-pysh",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Filter encrypted traffic streams.",
    "concepts": [
      "Checking for TLS Layer in PyShark ('TLS' in packet)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Checking for TLS Layer in PyShark ('TLS' in packet) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Checking for TLS Layer in PyShark ('TLS' in packet)\n\nFilter encrypted traffic streams.\n\n```python\nprint('if \"TLS\" in packet: analyze_tls(packet.tls)')\n```",
    "workedExample": {
      "title": "Worked Example: Checking for TLS Layer in PyShark ('TLS' in packet)",
      "code": "print('if \"TLS\" in packet: analyze_tls(packet.tls)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Checking for TLS Layer in PyShark ('TLS' in packet).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Checking for TLS Layer in PyShark ('TLS' in packet).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Checking for TLS Layer in PyShark ('TLS' in packet)\n# TODO: Write code below\n\n",
    "solutionCode": "print('if \"TLS\" in packet: analyze_tls(packet.tls)')\n",
    "hints": [
      "Write:\nprint('if \"TLS\" in packet: analyze_tls(packet.tls)')"
    ],
    "testCases": [
      {
        "id": "python-network-122-tc-1",
        "description": "Verifies correct implementation for Checking for TLS Layer in PyShark ('TLS' in packet)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-123-the-tls-handshake-flow-client-",
    "title": "123. The TLS Handshake Flow (Client Hello, Server Hello)",
    "slug": "lesson-123-the-tls-handshake-flow-client-",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Negotiate cipher suites, protocol versions, and session keys.",
    "concepts": [
      "The TLS Handshake Flow (Client Hello, Server Hello)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: The TLS Handshake Flow (Client Hello, Server Hello) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### The TLS Handshake Flow (Client Hello, Server Hello)\n\nNegotiate cipher suites, protocol versions, and session keys.\n\n```python\nprint('Client Hello -> Server Hello -> Certificate -> Key Exchange')\n```",
    "workedExample": {
      "title": "Worked Example: The TLS Handshake Flow (Client Hello, Server Hello)",
      "code": "print('Client Hello -> Server Hello -> Certificate -> Key Exchange')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for The TLS Handshake Flow (Client Hello, Server Hello).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of The TLS Handshake Flow (Client Hello, Server Hello).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement The TLS Handshake Flow (Client Hello, Server Hello)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Client Hello -> Server Hello -> Certificate -> Key Exchange')\n",
    "hints": [
      "Write:\nprint('Client Hello -> Server Hello -> Certificate -> Key Exchange')"
    ],
    "testCases": [
      {
        "id": "python-network-123-tc-1",
        "description": "Verifies correct implementation for The TLS Handshake Flow (Client Hello, Server Hello)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-124-extracting-server-name-indicat",
    "title": "124. Extracting Server Name Indication (SNI)",
    "slug": "lesson-124-extracting-server-name-indicat",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify target domain names in encrypted HTTPS sessions without decryption.",
    "concepts": [
      "Extracting Server Name Indication (SNI)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting Server Name Indication (SNI) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting Server Name Indication (SNI)\n\nIdentify target domain names in encrypted HTTPS sessions without decryption.\n\n```python\nprint('packet.tls.handshake_extensions_server_name')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting Server Name Indication (SNI)",
      "code": "print('packet.tls.handshake_extensions_server_name')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting Server Name Indication (SNI).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting Server Name Indication (SNI).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting Server Name Indication (SNI)\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.tls.handshake_extensions_server_name')\n",
    "hints": [
      "Write:\nprint('packet.tls.handshake_extensions_server_name')"
    ],
    "testCases": [
      {
        "id": "python-network-124-tc-1",
        "description": "Verifies correct implementation for Extracting Server Name Indication (SNI)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-125-inspecting-supported-tls-versi",
    "title": "125. Inspecting Supported TLS Versions (TLS 1.2 vs 1.3)",
    "slug": "lesson-125-inspecting-supported-tls-versi",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Detect outdated, insecure protocol versions (SSLv3, TLS 1.0, 1.1).",
    "concepts": [
      "Inspecting Supported TLS Versions (TLS 1.2 vs 1.3)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting Supported TLS Versions (TLS 1.2 vs 1.3) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting Supported TLS Versions (TLS 1.2 vs 1.3)\n\nDetect outdated, insecure protocol versions (SSLv3, TLS 1.0, 1.1).\n\n```python\nprint('Flag deprecated protocols: TLS 1.0 / 1.1')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Supported TLS Versions (TLS 1.2 vs 1.3)",
      "code": "print('Flag deprecated protocols: TLS 1.0 / 1.1')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Supported TLS Versions (TLS 1.2 vs 1.3).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Supported TLS Versions (TLS 1.2 vs 1.3).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Supported TLS Versions (TLS 1.2 vs 1.3)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Flag deprecated protocols: TLS 1.0 / 1.1')\n",
    "hints": [
      "Write:\nprint('Flag deprecated protocols: TLS 1.0 / 1.1')"
    ],
    "testCases": [
      {
        "id": "python-network-125-tc-1",
        "description": "Verifies correct implementation for Inspecting Supported TLS Versions (TLS 1.2 vs 1.3)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-126-inspecting-cipher-suites-offer",
    "title": "126. Inspecting Cipher Suites Offered by Client",
    "slug": "lesson-126-inspecting-cipher-suites-offer",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Detect weak cryptographic ciphers (RC4, DES, MD5, NULL).",
    "concepts": [
      "Inspecting Cipher Suites Offered by Client",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Inspecting Cipher Suites Offered by Client reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Inspecting Cipher Suites Offered by Client\n\nDetect weak cryptographic ciphers (RC4, DES, MD5, NULL).\n\n```python\nprint('packet.tls.handshake_ciphersuite list analysis')\n```",
    "workedExample": {
      "title": "Worked Example: Inspecting Cipher Suites Offered by Client",
      "code": "print('packet.tls.handshake_ciphersuite list analysis')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Inspecting Cipher Suites Offered by Client.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Inspecting Cipher Suites Offered by Client.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Inspecting Cipher Suites Offered by Client\n# TODO: Write code below\n\n",
    "solutionCode": "print('packet.tls.handshake_ciphersuite list analysis')\n",
    "hints": [
      "Write:\nprint('packet.tls.handshake_ciphersuite list analysis')"
    ],
    "testCases": [
      {
        "id": "python-network-126-tc-1",
        "description": "Verifies correct implementation for Inspecting Cipher Suites Offered by Client",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-127-ja3-and-ja3s-fingerprinting-ov",
    "title": "127. JA3 and JA3S Fingerprinting Overview",
    "slug": "lesson-127-ja3-and-ja3s-fingerprinting-ov",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Fingerprint client software regardless of IP/User-Agent spoofing.",
    "concepts": [
      "JA3 and JA3S Fingerprinting Overview",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: JA3 and JA3S Fingerprinting Overview reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### JA3 and JA3S Fingerprinting Overview\n\nFingerprint client software regardless of IP/User-Agent spoofing.\n\n```python\nprint('JA3 hashes client SSL parameters: version, ciphers, extensions')\n```",
    "workedExample": {
      "title": "Worked Example: JA3 and JA3S Fingerprinting Overview",
      "code": "print('JA3 hashes client SSL parameters: version, ciphers, extensions')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for JA3 and JA3S Fingerprinting Overview.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of JA3 and JA3S Fingerprinting Overview.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement JA3 and JA3S Fingerprinting Overview\n# TODO: Write code below\n\n",
    "solutionCode": "print('JA3 hashes client SSL parameters: version, ciphers, extensions')\n",
    "hints": [
      "Write:\nprint('JA3 hashes client SSL parameters: version, ciphers, extensions')"
    ],
    "testCases": [
      {
        "id": "python-network-127-tc-1",
        "description": "Verifies correct implementation for JA3 and JA3S Fingerprinting Overview",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-128-generating-ja3-fingerprints-wi",
    "title": "128. Generating JA3 Fingerprints with Python",
    "slug": "lesson-128-generating-ja3-fingerprints-wi",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Compute MD5 signature of Client Hello parameters.",
    "concepts": [
      "Generating JA3 Fingerprints with Python",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Generating JA3 Fingerprints with Python reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Generating JA3 Fingerprints with Python\n\nCompute MD5 signature of Client Hello parameters.\n\n```python\nimport hashlib\nprint('JA3 Hash:', hashlib.md5(b'771,4865-4866,0-23,29-23,0').hexdigest())\n```",
    "workedExample": {
      "title": "Worked Example: Generating JA3 Fingerprints with Python",
      "code": "import hashlib\nprint('JA3 Hash:', hashlib.md5(b'771,4865-4866,0-23,29-23,0').hexdigest())",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Generating JA3 Fingerprints with Python.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Generating JA3 Fingerprints with Python.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Generating JA3 Fingerprints with Python\n# TODO: Write code below\n\n",
    "solutionCode": "import hashlib\nprint('JA3 Hash:', hashlib.md5(b'771,4865-4866,0-23,29-23,0').hexdigest())\n",
    "hints": [
      "Write:\nimport hashlib\nprint('JA3 Hash:', hashlib.md5(b'771,4865-4866,0-23,29-23,0').hexdigest())"
    ],
    "testCases": [
      {
        "id": "python-network-128-tc-1",
        "description": "Verifies correct implementation for Generating JA3 Fingerprints with Python",
        "testFn": "code.includes('md5')"
      }
    ]
  },
  {
    "id": "python-network-129-matching-ja3-hashes-against-th",
    "title": "129. Matching JA3 Hashes Against Threat Intelligence Feeds",
    "slug": "lesson-129-matching-ja3-hashes-against-th",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify malware families (TrickBot, Emotet) by signature.",
    "concepts": [
      "Matching JA3 Hashes Against Threat Intelligence Feeds",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Matching JA3 Hashes Against Threat Intelligence Feeds reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Matching JA3 Hashes Against Threat Intelligence Feeds\n\nIdentify malware families (TrickBot, Emotet) by signature.\n\n```python\nprint('Match calculated JA3 against known Cobalt Strike beacons')\n```",
    "workedExample": {
      "title": "Worked Example: Matching JA3 Hashes Against Threat Intelligence Feeds",
      "code": "print('Match calculated JA3 against known Cobalt Strike beacons')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Matching JA3 Hashes Against Threat Intelligence Feeds.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Matching JA3 Hashes Against Threat Intelligence Feeds.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Matching JA3 Hashes Against Threat Intelligence Feeds\n# TODO: Write code below\n\n",
    "solutionCode": "print('Match calculated JA3 against known Cobalt Strike beacons')\n",
    "hints": [
      "Write:\nprint('Match calculated JA3 against known Cobalt Strike beacons')"
    ],
    "testCases": [
      {
        "id": "python-network-129-tc-1",
        "description": "Verifies correct implementation for Matching JA3 Hashes Against Threat Intelligence Feeds",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-130-extracting-x-509-server-certif",
    "title": "130. Extracting X.509 Server Certificates from Packets",
    "slug": "lesson-130-extracting-x-509-server-certif",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Inspect Issuer, Subject, and Validity period.",
    "concepts": [
      "Extracting X.509 Server Certificates from Packets",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting X.509 Server Certificates from Packets reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting X.509 Server Certificates from Packets\n\nInspect Issuer, Subject, and Validity period.\n\n```python\nprint('Inspect x509af certificate payload in Server Hello')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting X.509 Server Certificates from Packets",
      "code": "print('Inspect x509af certificate payload in Server Hello')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting X.509 Server Certificates from Packets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting X.509 Server Certificates from Packets.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting X.509 Server Certificates from Packets\n# TODO: Write code below\n\n",
    "solutionCode": "print('Inspect x509af certificate payload in Server Hello')\n",
    "hints": [
      "Write:\nprint('Inspect x509af certificate payload in Server Hello')"
    ],
    "testCases": [
      {
        "id": "python-network-130-tc-1",
        "description": "Verifies correct implementation for Extracting X.509 Server Certificates from Packets",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-131-detecting-self-signed-and-expi",
    "title": "131. Detecting Self-Signed and Expired Certificates",
    "slug": "lesson-131-detecting-self-signed-and-expi",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flag potential Man-in-the-Middle (MitM) proxy attacks.",
    "concepts": [
      "Detecting Self-Signed and Expired Certificates",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Self-Signed and Expired Certificates reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Self-Signed and Expired Certificates\n\nFlag potential Man-in-the-Middle (MitM) proxy attacks.\n\n```python\nprint('Alert on untrusted root CA or expired certificate timestamps')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Self-Signed and Expired Certificates",
      "code": "print('Alert on untrusted root CA or expired certificate timestamps')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Self-Signed and Expired Certificates.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Self-Signed and Expired Certificates.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Self-Signed and Expired Certificates\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert on untrusted root CA or expired certificate timestamps')\n",
    "hints": [
      "Write:\nprint('Alert on untrusted root CA or expired certificate timestamps')"
    ],
    "testCases": [
      {
        "id": "python-network-131-tc-1",
        "description": "Verifies correct implementation for Detecting Self-Signed and Expired Certificates",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-132-analyzing-session-resumption-a",
    "title": "132. Analyzing Session Resumption and Session Tickets",
    "slug": "lesson-132-analyzing-session-resumption-a",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Track return visits using session IDs and TLS tickets.",
    "concepts": [
      "Analyzing Session Resumption and Session Tickets",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Analyzing Session Resumption and Session Tickets reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Analyzing Session Resumption and Session Tickets\n\nTrack return visits using session IDs and TLS tickets.\n\n```python\nprint('Session resumption bypasses full public-key handshake')\n```",
    "workedExample": {
      "title": "Worked Example: Analyzing Session Resumption and Session Tickets",
      "code": "print('Session resumption bypasses full public-key handshake')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Analyzing Session Resumption and Session Tickets.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Analyzing Session Resumption and Session Tickets.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Analyzing Session Resumption and Session Tickets\n# TODO: Write code below\n\n",
    "solutionCode": "print('Session resumption bypasses full public-key handshake')\n",
    "hints": [
      "Write:\nprint('Session resumption bypasses full public-key handshake')"
    ],
    "testCases": [
      {
        "id": "python-network-132-tc-1",
        "description": "Verifies correct implementation for Analyzing Session Resumption and Session Tickets",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-133-alpn-application-layer-protoco",
    "title": "133. ALPN (Application-Layer Protocol Negotiation)",
    "slug": "lesson-133-alpn-application-layer-protoco",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Observe protocol upgrades to HTTP/2 (h2) or HTTP/3 (h3).",
    "concepts": [
      "ALPN (Application-Layer Protocol Negotiation)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: ALPN (Application-Layer Protocol Negotiation) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### ALPN (Application-Layer Protocol Negotiation)\n\nObserve protocol upgrades to HTTP/2 (h2) or HTTP/3 (h3).\n\n```python\nprint('ALPN negotiated protocol: h2 (HTTP/2)')\n```",
    "workedExample": {
      "title": "Worked Example: ALPN (Application-Layer Protocol Negotiation)",
      "code": "print('ALPN negotiated protocol: h2 (HTTP/2)')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for ALPN (Application-Layer Protocol Negotiation).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of ALPN (Application-Layer Protocol Negotiation).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement ALPN (Application-Layer Protocol Negotiation)\n# TODO: Write code below\n\n",
    "solutionCode": "print('ALPN negotiated protocol: h2 (HTTP/2)')\n",
    "hints": [
      "Write:\nprint('ALPN negotiated protocol: h2 (HTTP/2)')"
    ],
    "testCases": [
      {
        "id": "python-network-133-tc-1",
        "description": "Verifies correct implementation for ALPN (Application-Layer Protocol Negotiation)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-134-decrypting-tls-traffic-with-pr",
    "title": "134. Decrypting TLS Traffic with Pre-Master Secret Keylogs",
    "slug": "lesson-134-decrypting-tls-traffic-with-pr",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Using SSLKEYLOGFILE with PyShark for forensic inspection.",
    "concepts": [
      "Decrypting TLS Traffic with Pre-Master Secret Keylogs",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Decrypting TLS Traffic with Pre-Master Secret Keylogs reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Decrypting TLS Traffic with Pre-Master Secret Keylogs\n\nUsing SSLKEYLOGFILE with PyShark for forensic inspection.\n\n```python\nprint('pyshark.FileCapture(override_prefs={\"tls.keylog_file\": \"keys.txt\"})')\n```",
    "workedExample": {
      "title": "Worked Example: Decrypting TLS Traffic with Pre-Master Secret Keylogs",
      "code": "print('pyshark.FileCapture(override_prefs={\"tls.keylog_file\": \"keys.txt\"})')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Decrypting TLS Traffic with Pre-Master Secret Keylogs.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Decrypting TLS Traffic with Pre-Master Secret Keylogs.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Decrypting TLS Traffic with Pre-Master Secret Keylogs\n# TODO: Write code below\n\n",
    "solutionCode": "print('pyshark.FileCapture(override_prefs={\"tls.keylog_file\": \"keys.txt\"})')\n",
    "hints": [
      "Write:\nprint('pyshark.FileCapture(override_prefs={\"tls.keylog_file\": \"keys.txt\"})')"
    ],
    "testCases": [
      {
        "id": "python-network-134-tc-1",
        "description": "Verifies correct implementation for Decrypting TLS Traffic with Pre-Master Secret Keylogs",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-135-detecting-suspicious-non-stand",
    "title": "135. Detecting Suspicious Non-Standard Ports Running TLS",
    "slug": "lesson-135-detecting-suspicious-non-stand",
    "language": "python",
    "category": "Module 9: TLS/SSL Handshake Forensics & SNI Extraction",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify C2 backdoors tunneling TLS over uncommon ports.",
    "concepts": [
      "Detecting Suspicious Non-Standard Ports Running TLS",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Suspicious Non-Standard Ports Running TLS reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Suspicious Non-Standard Ports Running TLS\n\nIdentify C2 backdoors tunneling TLS over uncommon ports.\n\n```python\nprint('Alert on TLS traffic running on ports other than 443/8443')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Suspicious Non-Standard Ports Running TLS",
      "code": "print('Alert on TLS traffic running on ports other than 443/8443')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Suspicious Non-Standard Ports Running TLS.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Suspicious Non-Standard Ports Running TLS.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Suspicious Non-Standard Ports Running TLS\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert on TLS traffic running on ports other than 443/8443')\n",
    "hints": [
      "Write:\nprint('Alert on TLS traffic running on ports other than 443/8443')"
    ],
    "testCases": [
      {
        "id": "python-network-135-tc-1",
        "description": "Verifies correct implementation for Detecting Suspicious Non-Standard Ports Running TLS",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-136-building-a-real-time-port-scan",
    "title": "136. Building a Real-Time Port Scan Detector",
    "slug": "lesson-136-building-a-real-time-port-scan",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Track SYN requests across diverse ports per second.",
    "concepts": [
      "Building a Real-Time Port Scan Detector",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Building a Real-Time Port Scan Detector reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Building a Real-Time Port Scan Detector\n\nTrack SYN requests across diverse ports per second.\n\n```python\nprint('Alert: IP scanned 50+ ports in 2 seconds')\n```",
    "workedExample": {
      "title": "Worked Example: Building a Real-Time Port Scan Detector",
      "code": "print('Alert: IP scanned 50+ ports in 2 seconds')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building a Real-Time Port Scan Detector.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building a Real-Time Port Scan Detector.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Building a Real-Time Port Scan Detector\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert: IP scanned 50+ ports in 2 seconds')\n",
    "hints": [
      "Write:\nprint('Alert: IP scanned 50+ ports in 2 seconds')"
    ],
    "testCases": [
      {
        "id": "python-network-136-tc-1",
        "description": "Verifies correct implementation for Building a Real-Time Port Scan Detector",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-137-detecting-arp-spoofing-and-poi",
    "title": "137. Detecting ARP Spoofing and Poisoning Attacks",
    "slug": "lesson-137-detecting-arp-spoofing-and-poi",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flag multiple MAC addresses claiming identical IP addresses.",
    "concepts": [
      "Detecting ARP Spoofing and Poisoning Attacks",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting ARP Spoofing and Poisoning Attacks reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting ARP Spoofing and Poisoning Attacks\n\nFlag multiple MAC addresses claiming identical IP addresses.\n\n```python\nprint('Alert: IP 192.168.1.1 claimed by conflicting MAC addresses')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting ARP Spoofing and Poisoning Attacks",
      "code": "print('Alert: IP 192.168.1.1 claimed by conflicting MAC addresses')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting ARP Spoofing and Poisoning Attacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting ARP Spoofing and Poisoning Attacks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting ARP Spoofing and Poisoning Attacks\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert: IP 192.168.1.1 claimed by conflicting MAC addresses')\n",
    "hints": [
      "Write:\nprint('Alert: IP 192.168.1.1 claimed by conflicting MAC addresses')"
    ],
    "testCases": [
      {
        "id": "python-network-137-tc-1",
        "description": "Verifies correct implementation for Detecting ARP Spoofing and Poisoning Attacks",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-138-detecting-dhcp-rogue-servers-o",
    "title": "138. Detecting DHCP Rogue Servers on LAN",
    "slug": "lesson-138-detecting-dhcp-rogue-servers-o",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify unauthorized DHCPOFFER replies.",
    "concepts": [
      "Detecting DHCP Rogue Servers on LAN",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting DHCP Rogue Servers on LAN reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting DHCP Rogue Servers on LAN\n\nIdentify unauthorized DHCPOFFER replies.\n\n```python\nprint('Alert on DHCPOFFER originating from unapproved MAC')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting DHCP Rogue Servers on LAN",
      "code": "print('Alert on DHCPOFFER originating from unapproved MAC')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting DHCP Rogue Servers on LAN.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting DHCP Rogue Servers on LAN.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting DHCP Rogue Servers on LAN\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert on DHCPOFFER originating from unapproved MAC')\n",
    "hints": [
      "Write:\nprint('Alert on DHCPOFFER originating from unapproved MAC')"
    ],
    "testCases": [
      {
        "id": "python-network-138-tc-1",
        "description": "Verifies correct implementation for Detecting DHCP Rogue Servers on LAN",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-139-detecting-data-exfiltration-ov",
    "title": "139. Detecting Data Exfiltration over ICMP (Ping Tunnels)",
    "slug": "lesson-139-detecting-data-exfiltration-ov",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Flag oversized ICMP Echo Request payloads.",
    "concepts": [
      "Detecting Data Exfiltration over ICMP (Ping Tunnels)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Data Exfiltration over ICMP (Ping Tunnels) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Data Exfiltration over ICMP (Ping Tunnels)\n\nFlag oversized ICMP Echo Request payloads.\n\n```python\nprint('Alert: ICMP Echo Request with 1024-byte payload')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Data Exfiltration over ICMP (Ping Tunnels)",
      "code": "print('Alert: ICMP Echo Request with 1024-byte payload')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Data Exfiltration over ICMP (Ping Tunnels).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Data Exfiltration over ICMP (Ping Tunnels).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Data Exfiltration over ICMP (Ping Tunnels)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert: ICMP Echo Request with 1024-byte payload')\n",
    "hints": [
      "Write:\nprint('Alert: ICMP Echo Request with 1024-byte payload')"
    ],
    "testCases": [
      {
        "id": "python-network-139-tc-1",
        "description": "Verifies correct implementation for Detecting Data Exfiltration over ICMP (Ping Tunnels)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-140-detecting-beaconing-behavior-p",
    "title": "140. Detecting Beaconing Behavior (Periodic C2 Callbacks)",
    "slug": "lesson-140-detecting-beaconing-behavior-p",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Identify regular heartbeats using inter-arrival time standard deviation.",
    "concepts": [
      "Detecting Beaconing Behavior (Periodic C2 Callbacks)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Beaconing Behavior (Periodic C2 Callbacks) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Beaconing Behavior (Periodic C2 Callbacks)\n\nIdentify regular heartbeats using inter-arrival time standard deviation.\n\n```python\nprint('Standard deviation of connection intervals < 1.0s indicates beacon')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Beaconing Behavior (Periodic C2 Callbacks)",
      "code": "print('Standard deviation of connection intervals < 1.0s indicates beacon')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Beaconing Behavior (Periodic C2 Callbacks).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Beaconing Behavior (Periodic C2 Callbacks).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Beaconing Behavior (Periodic C2 Callbacks)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Standard deviation of connection intervals < 1.0s indicates beacon')\n",
    "hints": [
      "Write:\nprint('Standard deviation of connection intervals < 1.0s indicates beacon')"
    ],
    "testCases": [
      {
        "id": "python-network-140-tc-1",
        "description": "Verifies correct implementation for Detecting Beaconing Behavior (Periodic C2 Callbacks)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-141-extracting-file-payloads-from-",
    "title": "141. Extracting File Payloads from Network Streams",
    "slug": "lesson-141-extracting-file-payloads-from-",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Rebuild EXE, PDF, or ZIP binaries carved from TCP packets.",
    "concepts": [
      "Extracting File Payloads from Network Streams",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Extracting File Payloads from Network Streams reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Extracting File Payloads from Network Streams\n\nRebuild EXE, PDF, or ZIP binaries carved from TCP packets.\n\n```python\nprint('Carve files using magic headers: %PDF-1., MZ, PK\\x03\\x04')\n```",
    "workedExample": {
      "title": "Worked Example: Extracting File Payloads from Network Streams",
      "code": "print('Carve files using magic headers: %PDF-1., MZ, PK\\x03\\x04')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Extracting File Payloads from Network Streams.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Extracting File Payloads from Network Streams.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Extracting File Payloads from Network Streams\n# TODO: Write code below\n\n",
    "solutionCode": "print('Carve files using magic headers: %PDF-1., MZ, PK\\x03\\x04')\n",
    "hints": [
      "Write:\nprint('Carve files using magic headers: %PDF-1., MZ, PK\\x03\\x04')"
    ],
    "testCases": [
      {
        "id": "python-network-141-tc-1",
        "description": "Verifies correct implementation for Extracting File Payloads from Network Streams",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-142-calculating-file-hashes-md5-sh",
    "title": "142. Calculating File Hashes (MD5, SHA256) of Extracted Binaries",
    "slug": "lesson-142-calculating-file-hashes-md5-sh",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Query VirusTotal for carved payload reputations.",
    "concepts": [
      "Calculating File Hashes (MD5, SHA256) of Extracted Binaries",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Calculating File Hashes (MD5, SHA256) of Extracted Binaries reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Calculating File Hashes (MD5, SHA256) of Extracted Binaries\n\nQuery VirusTotal for carved payload reputations.\n\n```python\nimport hashlib\nprint('Calculate sha256 of carved file payload')\n```",
    "workedExample": {
      "title": "Worked Example: Calculating File Hashes (MD5, SHA256) of Extracted Binaries",
      "code": "import hashlib\nprint('Calculate sha256 of carved file payload')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Calculating File Hashes (MD5, SHA256) of Extracted Binaries.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Calculating File Hashes (MD5, SHA256) of Extracted Binaries.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Calculating File Hashes (MD5, SHA256) of Extracted Binaries\n# TODO: Write code below\n\n",
    "solutionCode": "import hashlib\nprint('Calculate sha256 of carved file payload')\n",
    "hints": [
      "Write:\nimport hashlib\nprint('Calculate sha256 of carved file payload')"
    ],
    "testCases": [
      {
        "id": "python-network-142-tc-1",
        "description": "Verifies correct implementation for Calculating File Hashes (MD5, SHA256) of Extracted Binaries",
        "testFn": "code.includes('hashlib')"
      }
    ]
  },
  {
    "id": "python-network-143-detecting-lateral-movement-via",
    "title": "143. Detecting Lateral Movement via SMB / DCE-RPC Traffic",
    "slug": "lesson-143-detecting-lateral-movement-via",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Monitor Windows network share access (psexec, PsExec.exe).",
    "concepts": [
      "Detecting Lateral Movement via SMB / DCE-RPC Traffic",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Lateral Movement via SMB / DCE-RPC Traffic reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Lateral Movement via SMB / DCE-RPC Traffic\n\nMonitor Windows network share access (psexec, PsExec.exe).\n\n```python\nprint('Inspect SMB2 protocol tree connect to IPC$ and ADMIN$')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Lateral Movement via SMB / DCE-RPC Traffic",
      "code": "print('Inspect SMB2 protocol tree connect to IPC$ and ADMIN$')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Lateral Movement via SMB / DCE-RPC Traffic.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Lateral Movement via SMB / DCE-RPC Traffic.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Lateral Movement via SMB / DCE-RPC Traffic\n# TODO: Write code below\n\n",
    "solutionCode": "print('Inspect SMB2 protocol tree connect to IPC$ and ADMIN$')\n",
    "hints": [
      "Write:\nprint('Inspect SMB2 protocol tree connect to IPC$ and ADMIN$')"
    ],
    "testCases": [
      {
        "id": "python-network-143-tc-1",
        "description": "Verifies correct implementation for Detecting Lateral Movement via SMB / DCE-RPC Traffic",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-144-detecting-brute-force-password",
    "title": "144. Detecting Brute-Force Password Guessing Attacks",
    "slug": "lesson-144-detecting-brute-force-password",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Monitor failed login bursts over SSH, RDP, or HTTP POST.",
    "concepts": [
      "Detecting Brute-Force Password Guessing Attacks",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Detecting Brute-Force Password Guessing Attacks reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Detecting Brute-Force Password Guessing Attacks\n\nMonitor failed login bursts over SSH, RDP, or HTTP POST.\n\n```python\nprint('Alert on 10+ failed SSH auth attempts within 60 seconds')\n```",
    "workedExample": {
      "title": "Worked Example: Detecting Brute-Force Password Guessing Attacks",
      "code": "print('Alert on 10+ failed SSH auth attempts within 60 seconds')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Detecting Brute-Force Password Guessing Attacks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Detecting Brute-Force Password Guessing Attacks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Detecting Brute-Force Password Guessing Attacks\n# TODO: Write code below\n\n",
    "solutionCode": "print('Alert on 10+ failed SSH auth attempts within 60 seconds')\n",
    "hints": [
      "Write:\nprint('Alert on 10+ failed SSH auth attempts within 60 seconds')"
    ],
    "testCases": [
      {
        "id": "python-network-144-tc-1",
        "description": "Verifies correct implementation for Detecting Brute-Force Password Guessing Attacks",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-145-geoip-enrichment-with-maxmind-",
    "title": "145. GeoIP Enrichment with MaxMind GeoLite2",
    "slug": "lesson-145-geoip-enrichment-with-maxmind-",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Map source IP addresses to geographic country coordinates.",
    "concepts": [
      "GeoIP Enrichment with MaxMind GeoLite2",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: GeoIP Enrichment with MaxMind GeoLite2 reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### GeoIP Enrichment with MaxMind GeoLite2\n\nMap source IP addresses to geographic country coordinates.\n\n```python\nprint('Lookup IP geolocation coordinates for threat visualization')\n```",
    "workedExample": {
      "title": "Worked Example: GeoIP Enrichment with MaxMind GeoLite2",
      "code": "print('Lookup IP geolocation coordinates for threat visualization')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for GeoIP Enrichment with MaxMind GeoLite2.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of GeoIP Enrichment with MaxMind GeoLite2.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement GeoIP Enrichment with MaxMind GeoLite2\n# TODO: Write code below\n\n",
    "solutionCode": "print('Lookup IP geolocation coordinates for threat visualization')\n",
    "hints": [
      "Write:\nprint('Lookup IP geolocation coordinates for threat visualization')"
    ],
    "testCases": [
      {
        "id": "python-network-145-tc-1",
        "description": "Verifies correct implementation for GeoIP Enrichment with MaxMind GeoLite2",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-146-building-automated-pcap-triage",
    "title": "146. Building Automated PCAP Triage Reports",
    "slug": "lesson-146-building-automated-pcap-triage",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Output high-level executive summaries of packet captures.",
    "concepts": [
      "Building Automated PCAP Triage Reports",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Building Automated PCAP Triage Reports reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Building Automated PCAP Triage Reports\n\nOutput high-level executive summaries of packet captures.\n\n```python\nprint('Generate report: Total Packets, Top Talkers, Protocols, Anomalies')\n```",
    "workedExample": {
      "title": "Worked Example: Building Automated PCAP Triage Reports",
      "code": "print('Generate report: Total Packets, Top Talkers, Protocols, Anomalies')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Building Automated PCAP Triage Reports.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Building Automated PCAP Triage Reports.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Building Automated PCAP Triage Reports\n# TODO: Write code below\n\n",
    "solutionCode": "print('Generate report: Total Packets, Top Talkers, Protocols, Anomalies')\n",
    "hints": [
      "Write:\nprint('Generate report: Total Packets, Top Talkers, Protocols, Anomalies')"
    ],
    "testCases": [
      {
        "id": "python-network-146-tc-1",
        "description": "Verifies correct implementation for Building Automated PCAP Triage Reports",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-147-integrating-pyshark-with-elk-s",
    "title": "147. Integrating PyShark with ELK Stack (Elasticsearch)",
    "slug": "lesson-147-integrating-pyshark-with-elk-s",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Stream parsed packet events into Elasticsearch / OpenSearch.",
    "concepts": [
      "Integrating PyShark with ELK Stack (Elasticsearch)",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Integrating PyShark with ELK Stack (Elasticsearch) reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Integrating PyShark with ELK Stack (Elasticsearch)\n\nStream parsed packet events into Elasticsearch / OpenSearch.\n\n```python\nprint('Format packet JSON document and post to Elasticsearch index')\n```",
    "workedExample": {
      "title": "Worked Example: Integrating PyShark with ELK Stack (Elasticsearch)",
      "code": "print('Format packet JSON document and post to Elasticsearch index')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Integrating PyShark with ELK Stack (Elasticsearch).",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Integrating PyShark with ELK Stack (Elasticsearch).",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Integrating PyShark with ELK Stack (Elasticsearch)\n# TODO: Write code below\n\n",
    "solutionCode": "print('Format packet JSON document and post to Elasticsearch index')\n",
    "hints": [
      "Write:\nprint('Format packet JSON document and post to Elasticsearch index')"
    ],
    "testCases": [
      {
        "id": "python-network-147-tc-1",
        "description": "Verifies correct implementation for Integrating PyShark with ELK Stack (Elasticsearch)",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-148-streaming-alerts-to-discord-sl",
    "title": "148. Streaming Alerts to Discord / Slack Webhooks",
    "slug": "lesson-148-streaming-alerts-to-discord-sl",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Trigger incident response notifications upon anomaly detection.",
    "concepts": [
      "Streaming Alerts to Discord / Slack Webhooks",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Streaming Alerts to Discord / Slack Webhooks reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Streaming Alerts to Discord / Slack Webhooks\n\nTrigger incident response notifications upon anomaly detection.\n\n```python\nprint('Send webhook: Alert high-severity port scan detected')\n```",
    "workedExample": {
      "title": "Worked Example: Streaming Alerts to Discord / Slack Webhooks",
      "code": "print('Send webhook: Alert high-severity port scan detected')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Streaming Alerts to Discord / Slack Webhooks.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Streaming Alerts to Discord / Slack Webhooks.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Streaming Alerts to Discord / Slack Webhooks\n# TODO: Write code below\n\n",
    "solutionCode": "print('Send webhook: Alert high-severity port scan detected')\n",
    "hints": [
      "Write:\nprint('Send webhook: Alert high-severity port scan detected')"
    ],
    "testCases": [
      {
        "id": "python-network-148-tc-1",
        "description": "Verifies correct implementation for Streaming Alerts to Discord / Slack Webhooks",
        "testFn": "logs.length > 0"
      }
    ]
  },
  {
    "id": "python-network-149-performance-tuning-pyshark-mul",
    "title": "149. Performance Tuning: PyShark Multiprocessing",
    "slug": "lesson-149-performance-tuning-pyshark-mul",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Distribute massive PCAP files across multiple CPU cores.",
    "concepts": [
      "Performance Tuning: PyShark Multiprocessing",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Performance Tuning: PyShark Multiprocessing reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Performance Tuning: PyShark Multiprocessing\n\nDistribute massive PCAP files across multiple CPU cores.\n\n```python\nfrom multiprocessing import Pool\nprint('Process multi-gigabyte PCAP chunks in parallel')\n```",
    "workedExample": {
      "title": "Worked Example: Performance Tuning: PyShark Multiprocessing",
      "code": "from multiprocessing import Pool\nprint('Process multi-gigabyte PCAP chunks in parallel')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Performance Tuning: PyShark Multiprocessing.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Performance Tuning: PyShark Multiprocessing.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Performance Tuning: PyShark Multiprocessing\n# TODO: Write code below\n\n",
    "solutionCode": "from multiprocessing import Pool\nprint('Process multi-gigabyte PCAP chunks in parallel')\n",
    "hints": [
      "Write:\nfrom multiprocessing import Pool\nprint('Process multi-gigabyte PCAP chunks in parallel')"
    ],
    "testCases": [
      {
        "id": "python-network-149-tc-1",
        "description": "Verifies correct implementation for Performance Tuning: PyShark Multiprocessing",
        "testFn": "code.includes('multiprocessing')"
      }
    ]
  },
  {
    "id": "python-network-150-network-security-capstone-auto",
    "title": "150. Network Security Capstone: Autonomous Threat Hunting Engine",
    "slug": "lesson-150-network-security-capstone-auto",
    "language": "python",
    "category": "Module 10: Security Forensics, Threat Hunting & Anomaly Scripts",
    "difficulty": "Advanced",
    "tier": 5,
    "tierName": "Masterclass",
    "estimatedMinutes": 4,
    "xp": 20,
    "description": "Complete pipeline: capture, filter, JA3 fingerprinting, and threat alert.",
    "concepts": [
      "Network Security Capstone: Autonomous Threat Hunting Engine",
      "Python: Network Security & PyShark (150 Topics)"
    ],
    "analogy": "Like inspecting mail envelopes and postal stamps: Network Security Capstone: Autonomous Threat Hunting Engine reveals exactly who sent what across the wire.",
    "explanationMarkdown": "### Network Security Capstone: Autonomous Threat Hunting Engine\n\nComplete pipeline: capture, filter, JA3 fingerprinting, and threat alert.\n\n```python\nprint('Capstone Complete: Autonomous Network Defense Engine Deployed!')\n```",
    "workedExample": {
      "title": "Worked Example: Network Security Capstone: Autonomous Threat Hunting Engine",
      "code": "print('Capstone Complete: Autonomous Network Defense Engine Deployed!')",
      "explanation": "\u2022 Demonstrates proper syntax and idiomatic usage for Network Security Capstone: Autonomous Threat Hunting Engine.",
      "expectedOutput": "Executed successfully"
    },
    "exerciseSteps": [
      "Review the concept of Network Security Capstone: Autonomous Threat Hunting Engine.",
      "Type the exercise solution into the editor.",
      "Click 'Check Answer' to verify your solution."
    ],
    "initialCode": "# Step 1: Implement Network Security Capstone: Autonomous Threat Hunting Engine\n# TODO: Write code below\n\n",
    "solutionCode": "print('Capstone Complete: Autonomous Network Defense Engine Deployed!')\n",
    "hints": [
      "Write:\nprint('Capstone Complete: Autonomous Network Defense Engine Deployed!')"
    ],
    "testCases": [
      {
        "id": "python-network-150-tc-1",
        "description": "Verifies correct implementation for Network Security Capstone: Autonomous Threat Hunting Engine",
        "testFn": "logs.length > 0"
      }
    ]
  }
]
};
