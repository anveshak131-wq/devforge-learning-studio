import { GuidedProject } from '../../types';

export const PYSHARK_PCAP_PROJECT: GuidedProject = {
  id: 'project-pyshark-pcap-inspector',
  title: 'PCAP Packet Header Inspector & Traffic Profiler',
  slug: 'pyshark-pcap-inspector',
  language: 'python',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Dissect Wireshark PCAP network captures, parse Ethernet/IP/TCP headers, and profile top-talker endpoints.',
  description: 'Learn deep packet inspection by building a network capture analysis engine. You will parse raw packet records, extract IP headers, evaluate TCP control flags (SYN, ACK, FIN, RST), calculate payload byte totals, and rank the highest-bandwidth network endpoints.',
  previewType: 'console',
  whatYouWillBuild: [
    'A PCAP parser parsing raw Ethernet frames and IPv4 headers',
    'TCP flag state decoder (SYN, ACK, FIN, RST, PSH)',
    'Protocol distribution counter (TCP, UDP, ICMP, DNS)',
    'Top-Talker IP address bandwidth ranking report'
  ],
  skillsLearned: [
    'Wireshark / PCAP file structures',
    'IPv4 header dissection & TCP flag bitmasks',
    'Network protocol distributions',
    'Traffic volume aggregation algorithms'
  ],
  milestones: [
    {
      id: 'pcap-m1',
      stepNumber: 1,
      title: 'Milestone 1: IP Packet Dissection & TCP Flag Extraction',
      instructionMarkdown: `
### Milestone 1: Packet Dissection Engine
Implement \`PacketInspector\`:
- \`parse_packet(packet_dict)\`:
  - Receives packet structure: \`{'src_ip': str, 'dst_ip': str, 'protocol': str, 'payload_len': int, 'flags': list}\`.
  - Validates valid IPv4 formatting (4 octets).
  - Returns normalized summary: \`{'flow': f"{src}->{dst}", 'protocol': protocol.upper(), 'size': payload_len, 'is_syn': 'SYN' in flags}\`.
- \`filter_by_protocol(packet_list, protocol_name)\`:
  - Filters a list of parsed packets by protocol (case-insensitive).
      `,
      starterCode: `class PacketInspector:
    @staticmethod
    def parse_packet(packet):
        # Validate, extract flow, protocol, size, and is_syn
        pass

    @staticmethod
    def filter_by_protocol(packet_list, protocol_name):
        # Return only packets matching protocol
        pass

sample_packet = {
    'src_ip': '192.168.1.15',
    'dst_ip': '104.21.48.1',
    'protocol': 'tcp',
    'payload_len': 1420,
    'flags': ['SYN', 'ACK']
}

parsed = PacketInspector.parse_packet(sample_packet)
print("Parsed packet:", parsed)
`,
      solutionCode: `class PacketInspector:
    @staticmethod
    def parse_packet(packet):
        src = packet.get('src_ip', '0.0.0.0')
        dst = packet.get('dst_ip', '0.0.0.0')
        proto = packet.get('protocol', 'UNKNOWN').upper()
        size = int(packet.get('payload_len', 0))
        flags = [f.upper() for f in packet.get('flags', [])]

        return {
            'flow': f"{src}->{dst}",
            'src_ip': src,
            'dst_ip': dst,
            'protocol': proto,
            'size': size,
            'is_syn': 'SYN' in flags
        }

    @staticmethod
    def filter_by_protocol(packet_list, protocol_name):
        target = protocol_name.upper()
        return [p for p in packet_list if p.get('protocol') == target]
`,
      hints: [
        'Normalize protocols to uppercase with .upper().',
        'Check for "SYN" in flags.'
      ],
      testCases: [
        {
          id: 'pcap-tc1',
          description: 'parse_packet normalizes flow, protocol, and is_syn flag',
          testFn: `(() => {
            return code.includes('class PacketInspector') && code.includes('parse_packet') && code.includes('is_syn');
          })()`,
          expectedMessage: 'Must implement parse_packet returning flow, protocol, and is_syn'
        }
      ]
    },
    {
      id: 'pcap-m2',
      stepNumber: 2,
      title: 'Milestone 2: Bandwidth Profiler & Top-Talker Reporting',
      instructionMarkdown: `
### Milestone 2: Bandwidth Profiler
Extend \`PacketInspector\` with network profiling:
- \`get_protocol_distribution(packet_list)\`: Returns dictionary counting total packets per protocol (e.g. \`{'TCP': 120, 'UDP': 45, 'ICMP': 2}\`).
- \`get_top_talkers(packet_list, top_n=3)\`:
  - Calculates total bytes sent by each \`src_ip\`.
  - Returns list of tuples \`[(ip, total_bytes), ...]\` sorted descending by byte volume.
      `,
      starterCode: `class PacketInspector:
    # Existing methods...

    @staticmethod
    def get_protocol_distribution(packet_list):
        # Count packets per protocol
        pass

    @staticmethod
    def get_top_talkers(packet_list, top_n=3):
        # Calculate total bytes per src_ip and return top N sorted
        pass
`,
      solutionCode: `class PacketInspector:
    @staticmethod
    def parse_packet(packet):
        return {
            'src_ip': packet.get('src_ip', ''),
            'dst_ip': packet.get('dst_ip', ''),
            'protocol': packet.get('protocol', '').upper(),
            'size': int(packet.get('payload_len', 0))
        }

    @staticmethod
    def get_protocol_distribution(packet_list):
        dist = {}
        for p in packet_list:
            proto = p.get('protocol', 'UNKNOWN').upper()
            dist[proto] = dist.get(proto, 0) + 1
        return dist

    @staticmethod
    def get_top_talkers(packet_list, top_n=3):
        bytes_by_ip = {}
        for p in packet_list:
            ip = p.get('src_ip')
            if ip:
                bytes_by_ip[ip] = bytes_by_ip.get(ip, 0) + int(p.get('size', 0))
        sorted_ips = sorted(bytes_by_ip.items(), key=lambda x: x[1], reverse=True)
        return sorted_ips[:top_n]
`,
      hints: [
        'Use sorted(bytes_by_ip.items(), key=lambda x: x[1], reverse=True) to rank talkers.',
        'Slice [:top_n] to return only the requested count.'
      ],
      testCases: [
        {
          id: 'pcap-m2-tc1',
          description: 'get_protocol_distribution and get_top_talkers aggregate bandwidth accurately',
          testFn: `(() => {
            return code.includes('get_protocol_distribution') && code.includes('get_top_talkers') && code.includes('sorted');
          })()`,
          expectedMessage: 'Must implement get_protocol_distribution and sorted get_top_talkers'
        }
      ]
    }
  ]
};

export const PYSHARK_DNS_TUNNEL_PROJECT: GuidedProject = {
  id: 'project-pyshark-dns-tunnel',
  title: 'Live BPF Packet Sniffer & DNS Tunneling Detector',
  slug: 'pyshark-dns-tunneling-detector',
  language: 'python',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Detect covert data exfiltration by applying BPF filters and calculating Shannon entropy on DNS queries.',
  description: 'Cybercriminals frequently exfiltrate sensitive data by encoding it inside DNS queries to bypass perimeter firewalls. Build a real-time detector that inspects DNS query strings, computes mathematical Shannon Entropy, and flags suspicious base64/hex payloads tunneling out of the network.',
  previewType: 'console',
  whatYouWillBuild: [
    'A Berkeley Packet Filter (BPF) syntax generator for network sockets',
    'DNS query string extractor and subdomain segmenter',
    'A mathematical Shannon Entropy calculator measuring randomness',
    'A threat detection engine flagging high-entropy DNS tunneling channels'
  ],
  skillsLearned: [
    'BPF (Berkeley Packet Filter) rules',
    'DNS protocol query structure',
    'Information theory & Shannon Entropy formula',
    'Cybersecurity intrusion forensics'
  ],
  milestones: [
    {
      id: 'dns-m1',
      stepNumber: 1,
      title: 'Milestone 1: Shannon Entropy Calculation & Subdomain Extraction',
      instructionMarkdown: `
### Milestone 1: Shannon Entropy & Subdomain Extraction
Implement \`DNSTunnelDetector\`:
- \`calculate_entropy(text)\`:
  - Calculates Shannon Entropy $H(X) = -\\sum P(x) \\log_2 P(x)$ over character frequencies.
  - Returns a float rounded to 3 decimal places. (Uniform or random strings like \`a8f9c2d1e0\` yield high entropy > 3.8).
- \`extract_subdomain(query)\`:
  - Strips root domain (e.g., \`exfil-data-1234.attacker.com\` -> \`exfil-data-1234\`).
      `,
      starterCode: `import math
from collections import Counter

class DNSTunnelDetector:
    @staticmethod
    def calculate_entropy(text):
        # Calculate Shannon Entropy: -sum(p * log2(p))
        pass

    @staticmethod
    def extract_subdomain(query, domain_suffix):
        # Strip domain_suffix to isolate query payload
        pass

print("Entropy of normal domain:", DNSTunnelDetector.calculate_entropy("google"))
print("Entropy of encrypted tunnel:", DNSTunnelDetector.calculate_entropy("c2VjcmV0LXBhc3N3b3JkLWV4ZmlsdHJhdGlvbi0xMjkz"))
`,
      solutionCode: `import math
from collections import Counter

class DNSTunnelDetector:
    @staticmethod
    def calculate_entropy(text):
        if not text:
            return 0.0
        counts = Counter(text)
        length = len(text)
        entropy = 0.0
        for count in counts.values():
            p = count / length
            entropy -= p * math.log2(p)
        return round(entropy, 3)

    @staticmethod
    def extract_subdomain(query, domain_suffix):
        clean_q = query.rstrip('.')
        clean_suffix = domain_suffix.lstrip('.').rstrip('.')
        if clean_q.endswith(clean_suffix):
            sub = clean_q[:-len(clean_suffix)].rstrip('.')
            return sub
        return clean_q
`,
      hints: [
        'Use math.log2(p) for base-2 logarithmic entropy.',
        'Use collections.Counter for fast character frequency tallies.'
      ],
      testCases: [
        {
          id: 'dns-tc1',
          description: 'calculate_entropy accurately computes Shannon entropy',
          testFn: `(() => {
            return code.includes('calculate_entropy') && code.includes('log2') && code.includes('Counter');
          })()`,
          expectedMessage: 'Must implement Shannon entropy using log2 and character frequency'
        }
      ]
    },
    {
      id: 'dns-m2',
      stepNumber: 2,
      title: 'Milestone 2: Automated Tunneling Exfiltration Detector',
      instructionMarkdown: `
### Milestone 2: Automated Threat Classifier
Extend \`DNSTunnelDetector\`:
- \`is_suspicious_query(query, domain_suffix, entropy_threshold=3.6, length_threshold=25)\`:
  - Extracts subdomain payload.
  - Checks if length exceeds \`length_threshold\` AND entropy exceeds \`entropy_threshold\`.
  - Returns \`{'query': query, 'subdomain': sub, 'entropy': entropy, 'is_tunnel': bool}\`.
- \`scan_dns_log(queries, domain_suffix)\`:
  - Returns list of all queries classified as DNS tunneling.
      `,
      starterCode: `class DNSTunnelDetector:
    # Existing methods...

    @staticmethod
    def is_suspicious_query(query, domain_suffix, entropy_threshold=3.6, length_threshold=25):
        # Classify query based on payload length and entropy
        pass

    @staticmethod
    def scan_dns_log(queries, domain_suffix):
        # Return list of detected tunnel queries
        pass
`,
      solutionCode: `class DNSTunnelDetector:
    @staticmethod
    def calculate_entropy(text):
        import math
        from collections import Counter
        if not text:
            return 0.0
        counts = Counter(text)
        length = len(text)
        entropy = -sum((c / length) * math.log2(c / length) for c in counts.values())
        return round(entropy, 3)

    @staticmethod
    def extract_subdomain(query, domain_suffix):
        clean_q = query.rstrip('.')
        clean_s = domain_suffix.lstrip('.').rstrip('.')
        if clean_q.endswith(clean_s):
            return clean_q[:-len(clean_s)].rstrip('.')
        return clean_q

    @staticmethod
    def is_suspicious_query(query, domain_suffix, entropy_threshold=3.6, length_threshold=25):
        sub = DNSTunnelDetector.extract_subdomain(query, domain_suffix)
        entropy = DNSTunnelDetector.calculate_entropy(sub)
        is_tunnel = len(sub) >= length_threshold and entropy >= entropy_threshold
        return {
            'query': query,
            'subdomain': sub,
            'entropy': entropy,
            'is_tunnel': is_tunnel
        }

    @staticmethod
    def scan_dns_log(queries, domain_suffix):
        threats = []
        for q in queries:
            res = DNSTunnelDetector.is_suspicious_query(q, domain_suffix)
            if res['is_tunnel']:
                threats.append(res)
        return threats
`,
      hints: [
        'A query is suspicious if len(subdomain) >= length_threshold and entropy >= entropy_threshold.'
      ],
      testCases: [
        {
          id: 'dns-m2-tc1',
          description: 'is_suspicious_query and scan_dns_log detect high-entropy exfiltration tunnels',
          testFn: `(() => {
            return code.includes('is_suspicious_query') && code.includes('scan_dns_log') && code.includes('is_tunnel');
          })()`,
          expectedMessage: 'Must implement is_suspicious_query and scan_dns_log'
        }
      ]
    }
  ]
};

export const PYSHARK_IDS_PROJECT: GuidedProject = {
  id: 'project-pyshark-mini-snort-ids',
  title: 'Network Intrusion Detection System (Mini-Snort IDS)',
  slug: 'pyshark-mini-snort-ids',
  language: 'python',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Architect a rule-based network intrusion detection system detecting SYN floods, port scans, and cleartext credentials.',
  description: 'Build a production-grade Network Intrusion Detection System (IDS) inspired by Snort and Suricata. You will design rule-parsing engines, stateful connection trackers that detect horizontal and vertical port scans, SYN flood volumetric spikes, and payload pattern matchers for security alerts.',
  previewType: 'console',
  whatYouWillBuild: [
    'A Snort-style Rule Engine matching protocols, IPs, ports, and payload content',
    'A stateful Port Scan Detector tracking unique destination ports per source IP',
    'A sliding-window SYN Flood Volumetric Anomaly Detector',
    'A Security Incident Logging and Forensic Alert Dispatcher'
  ],
  skillsLearned: [
    'Signature-based vs anomaly-based network detection',
    'Sliding-window rate calculation algorithms',
    'Port scan reconnaissance detection',
    'Security Information & Event Management (SIEM) log formats'
  ],
  milestones: [
    {
      id: 'ids-m1',
      stepNumber: 1,
      title: 'Milestone 1: Signature Rule Matcher & Port Scan Tracker',
      instructionMarkdown: `
### Milestone 1: Port Scan & Signature Engine
Implement \`MiniIDS\`:
- \`track_connection(src_ip, dst_ip, dst_port, flags)\`:
  - Tracks unique destination ports contacted by each \`src_ip\`.
  - If a single \`src_ip\` hits more than \`port_threshold=5\` distinct ports within its history, trigger a \`PORT_SCAN_DETECTED\` alert!
- \`detect_cleartext_credential(payload_text)\`:
  - Scans HTTP payloads for sensitive cleartext patterns (e.g., \`password=\`, \`passwd=\`, \`auth_token=\`, \`api_key=\`).
  - Returns True if sensitive keyword detected, else False.
      `,
      starterCode: `class MiniIDS:
    def __init__(self, port_scan_threshold=5):
        self.port_scan_threshold = port_scan_threshold
        self.ip_port_history = {} # src_ip -> set of dst_ports
        self.alerts = []

    def track_connection(self, src_ip, dst_ip, dst_port, flags):
        # Track unique ports per src_ip, record alert if threshold exceeded
        pass

    def detect_cleartext_credential(self, payload):
        # Check for sensitive strings
        pass
`,
      solutionCode: `class MiniIDS:
    SENSITIVE_PATTERNS = ['password=', 'passwd=', 'auth_token=', 'api_key=', 'bearer ']

    def __init__(self, port_scan_threshold=5):
        self.port_scan_threshold = port_scan_threshold
        self.ip_port_history = {}
        self.alerts = []

    def track_connection(self, src_ip, dst_ip, dst_port, flags):
        if src_ip not in self.ip_port_history:
            self.ip_port_history[src_ip] = set()
        self.ip_port_history[src_ip].add(dst_port)

        if len(self.ip_port_history[src_ip]) > self.port_scan_threshold:
            alert = {
                'type': 'PORT_SCAN_DETECTED',
                'src_ip': src_ip,
                'ports_targeted_count': len(self.ip_port_history[src_ip]),
                'severity': 'HIGH'
            }
            self.alerts.append(alert)
            return alert
        return None

    def detect_cleartext_credential(self, payload):
        if not payload:
            return False
        low = payload.lower()
        return any(pattern in low for pattern in self.SENSITIVE_PATTERNS)
`,
      hints: [
        'Use sets in Python (set()) to track unique destination ports.',
        'Normalize payload strings with .lower() before pattern matching.'
      ],
      testCases: [
        {
          id: 'ids-tc1',
          description: 'track_connection triggers PORT_SCAN_DETECTED when unique ports exceed threshold',
          testFn: `(() => {
            return code.includes('class MiniIDS') && code.includes('PORT_SCAN_DETECTED') && code.includes('detect_cleartext_credential');
          })()`,
          expectedMessage: 'MiniIDS must detect port scans and sensitive cleartext credentials'
        }
      ]
    },
    {
      id: 'ids-m2',
      stepNumber: 2,
      title: 'Milestone 2: SYN Flood Volumetric Spike Detector',
      instructionMarkdown: `
### Milestone 2: SYN Flood Volumetric Detection
Extend \`MiniIDS\`:
- \`record_syn_packet(src_ip, timestamp)\`:
  - Records timestamp of incoming SYN packets per \`src_ip\`.
- \`check_syn_flood(src_ip, current_time, window_seconds=10, max_syn_count=50)\`:
  - Prunes timestamps older than \`current_time - window_seconds\`.
  - If remaining count exceeds \`max_syn_count\`, triggers a \`SYN_FLOOD_ATTACK\` alert!
  - Returns alert dictionary or \`None\`.
- \`get_all_alerts()\`: Returns all recorded incident alerts.
      `,
      starterCode: `class MiniIDS:
    # Existing methods...

    def record_syn_packet(self, src_ip, timestamp):
        # Record syn packet timestamp
        pass

    def check_syn_flood(self, src_ip, current_time, window_seconds=10, max_syn_count=50):
        # Prune window and evaluate flood threshold
        pass

    def get_all_alerts(self):
        # Return alerts list
        pass
`,
      solutionCode: `class MiniIDS:
    def __init__(self, port_scan_threshold=5):
        self.port_scan_threshold = port_scan_threshold
        self.ip_port_history = {}
        self.syn_timestamps = {}
        self.alerts = []

    def record_syn_packet(self, src_ip, timestamp):
        if src_ip not in self.syn_timestamps:
            self.syn_timestamps[src_ip] = []
        self.syn_timestamps[src_ip].append(timestamp)

    def check_syn_flood(self, src_ip, current_time, window_seconds=10, max_syn_count=50):
        if src_ip not in self.syn_timestamps:
            return None
        window_start = current_time - window_seconds
        valid_ts = [t for t in self.syn_timestamps[src_ip] if t >= window_start]
        self.syn_timestamps[src_ip] = valid_ts

        if len(valid_ts) > max_syn_count:
            alert = {
                'type': 'SYN_FLOOD_ATTACK',
                'src_ip': src_ip,
                'rate': len(valid_ts),
                'window_seconds': window_seconds,
                'severity': 'CRITICAL'
            }
            self.alerts.append(alert)
            return alert
        return None

    def get_all_alerts(self):
        return list(self.alerts)
`,
      hints: [
        'Filter timestamps with [t for t in timestamps if t >= window_start].',
        'Append the alert to self.alerts and return it.'
      ],
      testCases: [
        {
          id: 'ids-m2-tc1',
          description: 'check_syn_flood detects volumetric anomalies in sliding window',
          testFn: `(() => {
            return code.includes('SYN_FLOOD_ATTACK') && code.includes('record_syn_packet') && code.includes('check_syn_flood');
          })()`,
          expectedMessage: 'Must detect SYN flood volumetric spikes within sliding window'
        }
      ]
    }
  ]
};
