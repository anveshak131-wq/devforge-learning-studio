import { GuidedProject } from '../../types';

export const K8S_POD_RESILIENCE_PROJECT: GuidedProject = {
  id: 'project-k8s-pod-resilience',
  title: 'Resilient Multi-Container Pod Specification',
  slug: 'k8s-pod-resilience',
  language: 'cloud',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Write production-ready Kubernetes manifests with liveness probes, readiness checks, and resource constraints.',
  description: 'Learn the foundational building blocks of cloud-native systems. You will author declarative Kubernetes pod and deployment specifications implementing sidecar logging containers, HTTP liveness and readiness health probes, and strict CPU/memory requests and limits to prevent noisy-neighbor cluster starvation.',
  previewType: 'console',
  whatYouWillBuild: [
    'A multi-container Pod manifest with an app server and sidecar log forwarder',
    'HTTP-based Liveness and Readiness Probes preventing traffic routing to unready pods',
    'Resource requests and limits (CPU and Memory) enforcing cluster scheduling bounds',
    'Shared emptyDir volume mounting between containers'
  ],
  skillsLearned: [
    'Kubernetes API specifications (v1/apps/v1)',
    'Pod lifecycle management & self-healing health probes',
    'Sidecar container design pattern',
    'Cluster resource quota management'
  ],
  milestones: [
    {
      id: 'k8s-pod-m1',
      stepNumber: 1,
      title: 'Milestone 1: Pod Manifest with Sidecar & Shared Volume',
      instructionMarkdown: `
### Milestone 1: Multi-Container Pod Specification
Write a valid YAML Kubernetes Pod manifest named \`microservice-pod\`:
- \`apiVersion: v1\`, \`kind: Pod\`
- Metadata includes \`name: microservice-pod\` and label \`app: payment-api\`.
- Under \`spec.containers\`:
  1. Main container \`web-app\`: uses image \`nginx:1.25\`, mounts volume \`shared-logs\` at \`/var/log/nginx\`.
  2. Sidecar container \`log-shipper\`: uses image \`busybox:latest\`, mounts same volume \`shared-logs\` at \`/logs\`.
- Defines an \`emptyDir: {}\` volume named \`shared-logs\`.
      `,
      starterCode: `apiVersion: v1
kind: Pod
metadata:
  name: microservice-pod
  labels:
    app: payment-api
spec:
  volumes:
    # Define shared emptyDir volume here
  containers:
    - name: web-app
      image: nginx:1.25
      # Mount shared-logs at /var/log/nginx
    - name: log-shipper
      image: busybox:latest
      # Mount shared-logs at /logs
`,
      solutionCode: `apiVersion: v1
kind: Pod
metadata:
  name: microservice-pod
  labels:
    app: payment-api
spec:
  volumes:
    - name: shared-logs
      emptyDir: {}
  containers:
    - name: web-app
      image: nginx:1.25
      volumeMounts:
        - name: shared-logs
          mountPath: /var/log/nginx
    - name: log-shipper
      image: busybox:latest
      volumeMounts:
        - name: shared-logs
          mountPath: /logs
`,
      hints: [
        'Volumes are defined under spec.volumes, mounts are defined under spec.containers[].volumeMounts.',
        'Use emptyDir: {} for ephemeral shared pod storage.'
      ],
      testCases: [
        {
          id: 'k8s-pod-tc1',
          description: 'Pod manifest defines web-app, log-shipper, and shared-logs emptyDir volume',
          testFn: `(() => {
            return code.includes('kind: Pod') && code.includes('web-app') && code.includes('log-shipper') && code.includes('emptyDir');
          })()`,
          expectedMessage: 'Manifest must specify Pod kind with web-app, log-shipper, and emptyDir volume'
        }
      ]
    },
    {
      id: 'k8s-pod-m2',
      stepNumber: 2,
      title: 'Milestone 2: Self-Healing Probes & Resource Guardrails',
      instructionMarkdown: `
### Milestone 2: Probes & Resource Limits
Enhance the \`web-app\` container with production safeguards:
- **Liveness Probe**:
  - \`httpGet\` targeting \`path: /healthz\` on \`port: 80\`.
  - \`initialDelaySeconds: 15\`, \`periodSeconds: 10\`.
- **Readiness Probe**:
  - \`httpGet\` targeting \`path: /ready\` on \`port: 80\`.
  - \`initialDelaySeconds: 5\`, \`periodSeconds: 5\`.
- **Resources**:
  - \`requests\`: \`cpu: "100m"\`, \`memory: "128Mi"\`.
  - \`limits\`: \`cpu: "500m"\`, \`memory: "512Mi"\`.
      `,
      starterCode: `apiVersion: v1
kind: Pod
metadata:
  name: microservice-pod
spec:
  containers:
    - name: web-app
      image: nginx:1.25
      # Add livenessProbe, readinessProbe, and resources
`,
      solutionCode: `apiVersion: v1
kind: Pod
metadata:
  name: microservice-pod
spec:
  containers:
    - name: web-app
      image: nginx:1.25
      livenessProbe:
        httpGet:
          path: /healthz
          port: 80
        initialDelaySeconds: 15
        periodSeconds: 10
      readinessProbe:
        httpGet:
          path: /ready
          port: 80
        initialDelaySeconds: 5
        periodSeconds: 5
      resources:
        requests:
          cpu: "100m"
          memory: "128Mi"
        limits:
          cpu: "500m"
          memory: "512Mi"
`,
      hints: [
        'livenessProbe and readinessProbe use httpGet with path and port.',
        'Define requests and limits under resources: { requests: ..., limits: ... }.'
      ],
      testCases: [
        {
          id: 'k8s-pod-m2-tc1',
          description: 'web-app configures livenessProbe, readinessProbe, and CPU/memory limits',
          testFn: `(() => {
            return code.includes('livenessProbe') && code.includes('readinessProbe') && code.includes('resources') && code.includes('limits');
          })()`,
          expectedMessage: 'Must configure livenessProbe, readinessProbe, and resource limits'
        }
      ]
    }
  ]
};

export const K8S_HELM_HPA_PROJECT: GuidedProject = {
  id: 'project-k8s-helm-hpa',
  title: 'Configurable Helm Chart & Horizontal Autoscaler (HPA)',
  slug: 'k8s-helm-hpa',
  language: 'cloud',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Package multi-environment Kubernetes applications with reusable Helm charts and dynamic HPA auto-scaling.',
  description: 'Enterprise Kubernetes operations rely on Helm to parameterize deployments across development, staging, and production clusters. You will author a reusable Helm chart with values.yaml overrides, Go templating syntax, and configure a HorizontalPodAutoscaler (HPA) to scale workloads from 2 to 10 replicas under traffic bursts.',
  previewType: 'console',
  whatYouWillBuild: [
    'A parameterized Helm chart with Chart.yaml and values.yaml',
    'Go template expressions for dynamic labels, replica counts, and container ports',
    'A HorizontalPodAutoscaler (autoscaling/v2) manifest tracking CPU and Memory targets',
    'Environment value overrides for production scaling'
  ],
  skillsLearned: [
    'Helm Chart architecture & templating logic',
    'Horizontal Pod Autoscaling (HPA v2)',
    'Dynamic metric target thresholds (CPU & Memory)',
    'Multi-environment release packaging'
  ],
  milestones: [
    {
      id: 'k8s-helm-m1',
      stepNumber: 1,
      title: 'Milestone 1: Reusable Helm Deployment Template',
      instructionMarkdown: `
### Milestone 1: Helm Deployment Template
Write a Helm deployment template \`templates/deployment.yaml\`:
- Uses \`{{ .Values.replicaCount }}\` for \`spec.replicas\`.
- Dynamic image string: \`image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"\`.
- Container port bound to \`{{ .Values.service.port }}\`.
- Standard labels using \`{{ .Release.Name }}\`.
      `,
      starterCode: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}-app
spec:
  # Configure replicas from .Values
  replicas: 
  template:
    spec:
      containers:
        - name: app
          # Inject image repository and tag from .Values
          image: 
`,
      solutionCode: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}-app
  labels:
    app.kubernetes.io/name: {{ .Chart.Name }}
    app.kubernetes.io/instance: {{ .Release.Name }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ .Release.Name }}
  template:
    metadata:
      labels:
        app: {{ .Release.Name }}
    spec:
      containers:
        - name: app
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          ports:
            - containerPort: {{ .Values.service.port }}
`,
      hints: [
        'Use double curly braces {{ .Values.replicaCount }} for template substitution.',
        'Wrap image string in quotes: "{{ .Values.image.repository }}:{{ .Values.image.tag }}".'
      ],
      testCases: [
        {
          id: 'k8s-helm-tc1',
          description: 'Deployment template uses Helm values for replicaCount and image',
          testFn: `(() => {
            return code.includes('.Values.replicaCount') && code.includes('.Values.image.repository') && code.includes('.Release.Name');
          })()`,
          expectedMessage: 'Template must interpolate .Values.replicaCount and .Values.image.repository'
        }
      ]
    },
    {
      id: 'k8s-helm-m2',
      stepNumber: 2,
      title: 'Milestone 2: HorizontalPodAutoscaler (HPA v2) Policy',
      instructionMarkdown: `
### Milestone 2: HPA v2 Autoscaling Manifest
Write an HPA manifest (\`autoscaling/v2\`) for the deployment:
- \`metadata.name: order-service-hpa\`
- \`spec.scaleTargetRef\`: targets \`kind: Deployment\`, \`name: order-service\`, \`apiVersion: apps/v1\`.
- \`minReplicas: 2\`, \`maxReplicas: 10\`.
- \`metrics\`:
  - Resource \`cpu\`: \`type: Resource\`, target \`type: Utilization\`, \`averageUtilization: 75\`.
  - Resource \`memory\`: target \`type: Utilization\`, \`averageUtilization: 80\`.
      `,
      starterCode: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: order-service-hpa
spec:
  # Define scaleTargetRef, minReplicas, maxReplicas, and metrics
`,
      solutionCode: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: order-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 75
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
`,
      hints: [
        'Target deployment under scaleTargetRef.',
        'Set averageUtilization for CPU to 75 and Memory to 80.'
      ],
      testCases: [
        {
          id: 'k8s-helm-m2-tc1',
          description: 'HPA v2 targets order-service with min 2, max 10, and CPU/memory utilization',
          testFn: `(() => {
            return code.includes('HorizontalPodAutoscaler') && code.includes('scaleTargetRef') && code.includes('minReplicas: 2') && code.includes('maxReplicas: 10');
          })()`,
          expectedMessage: 'Must configure HPA v2 with scaleTargetRef and replica bounds'
        }
      ]
    }
  ]
};

export const K8S_GITOPS_CANARY_PROJECT: GuidedProject = {
  id: 'project-k8s-gitops-canary',
  title: 'GitOps Canary Release & Rollback Controller',
  slug: 'k8s-gitops-canary',
  language: 'cloud',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Architect a zero-downtime canary deployment controller with progressive traffic splitting and automated rollback.',
  description: 'Avoid high-risk all-at-once releases. Build an enterprise GitOps Canary release system modeled after Argo Rollouts and Flagger. You will configure split service routing (90% stable, 10% canary traffic), continuous HTTP error-rate telemetry health checks, and instant rollback triggers if 5xx failure rates breach 1%.',
  previewType: 'console',
  whatYouWillBuild: [
    'A dual Stable and Canary Deployment architecture with separate version tags',
    'NGINX Ingress annotations for weighted traffic splitting (canary-weight: "10")',
    'An automated health metric evaluation controller script',
    'Instant rollback automation resetting ingress routing on threshold breach'
  ],
  skillsLearned: [
    'Canary deployment release engineering',
    'NGINX Ingress canary routing annotations',
    'Automated telemetry thresholds & SLO validation',
    'Zero-downtime release automation'
  ],
  milestones: [
    {
      id: 'k8s-canary-m1',
      stepNumber: 1,
      title: 'Milestone 1: Canary Ingress Traffic Splitting',
      instructionMarkdown: `
### Milestone 1: Canary Ingress Annotations
Write an NGINX Ingress manifest for a canary rollout:
- Primary Ingress routes to \`service: checkout-stable\` on port 80.
- Canary Ingress (\`name: checkout-canary-ingress\`):
  - Ingress annotations:
    - \`nginx.ingress.kubernetes.io/canary: "true"\`
    - \`nginx.ingress.kubernetes.io/canary-weight: "10"\`
  - Routes traffic to \`service: checkout-canary\` on port 80.
      `,
      starterCode: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: checkout-canary-ingress
  annotations:
    # Add canary and canary-weight annotations
spec:
  rules:
    - host: checkout.devforge.io
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: checkout-canary
                port:
                  number: 80
`,
      solutionCode: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: checkout-canary-ingress
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "10"
spec:
  rules:
    - host: checkout.devforge.io
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: checkout-canary
                port:
                  number: 80
`,
      hints: [
        'Set nginx.ingress.kubernetes.io/canary: "true" to activate canary mode.',
        'Use canary-weight: "10" to send 10% of traffic to the canary service.'
      ],
      testCases: [
        {
          id: 'k8s-canary-tc1',
          description: 'Ingress specifies canary: "true" and canary-weight: "10"',
          testFn: `(() => {
            return code.includes('nginx.ingress.kubernetes.io/canary: "true"') && code.includes('canary-weight: "10"');
          })()`,
          expectedMessage: 'Ingress must include NGINX canary annotations'
        }
      ]
    }
  ]
};
