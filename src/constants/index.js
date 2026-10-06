const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Stack", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

// headline metrics, all pulled straight from real work
const counterItems = [
  { value: 2, suffix: "K+", label: "background jobs a day across independently scalable workers" },
  { value: 30, suffix: "s", label: "end-to-end workflow latency, down from roughly 5 minutes" },
  { value: 40, suffix: "%", label: "fewer failed and duplicate jobs after retries and idempotency" },
  { value: 10, suffix: "K", label: "random seeds replayed byte-identical to pin down consistency bugs" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
];

// how I actually work, minus the buzzwords
const abilities = [
  {
    icon: "🧩",
    title: "I own the whole thing",
    desc: "I don't write the endpoint and wander off. I stay for the data model, the queue, the deploy, and the traces that tell me it's holding up at 3am.",
  },
  {
    icon: "🛡️",
    title: "Built to take a beating",
    desc: "Idempotent tasks, retries, timeouts, honest failure states. I even write harnesses that inject faults and replay thousands of seeds, because 'it worked once' isn't a guarantee.",
  },
  {
    icon: "⚡",
    title: "Slow counts as a bug",
    desc: "Fast is a feature and I treat it like one. Indexing, batching, and caching that knows when to let go have taken 5-minute workflows down to 30 seconds.",
  },
];

// colourful logo strip for the skills section
const techStackImgs = [
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "FastAPI", imgPath: "/images/logos/fastapi.png" },
  { name: "PostgreSQL", imgPath: "/images/logos/postgresql.png" },
  { name: "Redis", imgPath: "/images/logos/redis.png" },
  { name: "Docker", imgPath: "/images/logos/docker.png" },
  { name: "AWS", imgPath: "/images/logos/aws.png" },
];

// skills grouped by where they live in the stack, each layer with its own colour
const techLayers = [
  {
    tag: "01",
    layer: "Languages",
    accent: "#f5b544",
    items: ["Python", "Rust", "SQL"],
  },
  {
    tag: "02",
    layer: "Backend & distributed",
    accent: "#2dd4bf",
    items: ["FastAPI", "REST APIs", "Celery", "Redis", "MQTT", "asyncio", "Pydantic"],
  },
  {
    tag: "03",
    layer: "Data & storage",
    accent: "#5b9bd5",
    items: ["PostgreSQL", "TimescaleDB", "ChromaDB", "Amazon S3"],
  },
  {
    tag: "04",
    layer: "Cloud & infrastructure",
    accent: "#fb923c",
    items: ["AWS ECS", "RDS", "S3", "CloudWatch", "Docker", "Kubernetes", "Linux"],
  },
  {
    tag: "05",
    layer: "DevOps & observability",
    accent: "#34d399",
    items: ["Git", "GitHub Actions", "CI/CD", "Pytest", "OpenTelemetry", "Distributed Tracing"],
  },
  {
    tag: "06",
    layer: "Systems & correctness",
    accent: "#a78bfa",
    items: ["Wasmtime", "WASM", "Raft", "Deterministic Simulation", "Fault Injection", "Epoch Scheduling"],
  },
];

const techStackIcons = [];

// PROJECTS, straight from the resume. Not linked out on purpose.
const projects = [
  {
    id: "proj-01",
    name: "DETERMINA: Deterministic Simulation Testing",
    org: "University of Massachusetts Amherst",
    stack: "Rust · Raft · Simulation",
    blurb:
      "A time machine for distributed bugs. It runs a Raft-style replicated log inside a fully deterministic simulator, so a failure that shows up on seed 7,431 replays exactly the same way every single time.",
    highlights: [
      "Reproduces byte-identical execution traces across 10,000 random seeds, so nothing is ever a flaky one-off you can't chase down.",
      "Caught all 30 seeded consistency violations, turning 'it probably works' into something you can actually prove.",
    ],
    tags: ["Rust", "Raft", "Deterministic Simulation", "Distributed Systems"],
    metric: "10K · seeds",
  },
  {
    id: "proj-02",
    name: "BULKHEAD: Multi-Tenant WASM Isolation",
    org: "University of Massachusetts Amherst",
    stack: "Wasmtime · WASM · Scheduling",
    blurb:
      "A bouncer for noisy neighbors. It runs lots of tenants' WebAssembly on one host and makes sure no single one can hog the CPU or drag everybody else down with it.",
    highlights: [
      "Multi-tenant Wasmtime control plane with epoch-based fair scheduling that survived 200 resource-exhaustion tests without a single host failure.",
      "Kept CPU allocation within 9.2% of the configured weights, so every tenant actually gets the share it was promised.",
    ],
    tags: ["Rust", "Wasmtime", "WASM", "Scheduling", "Isolation"],
    metric: "0 · host failures",
  },
];

// EXPERIENCE + EDUCATION, from the resume. `logo` renders a real logo or a coloured monogram.
const expCards = [
  {
    node: "svc://refyx-ai",
    logo: { initials: "R", color: "#9a1b2f", img: "/images/logos/refyx.webp" },
    review:
      "My current role, building backend services and the AI infrastructure around them: FastAPI APIs, retrieval pipelines, and LLM-driven workflows designed to run reliably in production rather than only in a prototype.",
    title: "AI & Automation Developer",
    company: "Refyx AI",
    date: "Oct 2026 → Present",
    status: "running",
    responsibilities: [
      "Building backend services and AI-driven workflows that bring together FastAPI, PostgreSQL, external APIs, LLMs, and retrieval pipelines for both internal tools and client-facing apps.",
    ],
  },
  {
    node: "svc://umass-cics",
    logo: { initials: "UM", color: "#9a1b2f", img: "/images/logos/umass.png" },
    review:
      "A distributed telemetry project: collecting high-frequency data from a fleet of edge devices over MQTT, then making the full inference path observable and understanding how it behaved under failure.",
    title: "Research Assistant",
    company: "UMass Amherst CICS",
    date: "Jun 2026 → Oct 2026",
    status: "shipped",
    responsibilities: [
      "Built a Python/MQTT telemetry pipeline across 6 to 8 distributed edge devices, orchestrating containerized workloads with Kubernetes and storing time-series data in TimescaleDB and PostgreSQL.",
      "Instrumented the distributed inference path with OpenTelemetry and ran 30+ controlled fault-injection experiments to watch how latency, dropped connections, and recovery rippled across service dependencies.",
    ],
  },
  {
    node: "svc://jeta-software",
    logo: { initials: "JE", color: "#4f86c6", img: "/images/logos/jeta.png" },
    review:
      "Two years owning a workflow-processing platform end to end. I made long-running jobs reliable, moved heavy processing off the request path, and brought end-to-end latency from five minutes down to thirty seconds.",
    title: "Software Engineer",
    company: "JETA Software",
    date: "May 2022 → Jun 2024",
    status: "shipped",
    responsibilities: [
      "Built Python/FastAPI services for a workflow-processing platform, exposing REST APIs to submit, track, and retrieve long-running jobs backed by durable PostgreSQL state.",
      "Moved compute-heavy work off the HTTP path with Celery and Redis, running more than 2,000 jobs a day across workers I could scale independently.",
      "Added idempotent task handling, retry policies, timeouts, and explicit failure states, cutting failed and duplicate processing by around 40%.",
      "Sped up the hot database and processing paths with indexing, query batching, pagination, and selective caching, dropping end-to-end latency from roughly 5 minutes to 30 seconds.",
      "Shipped containerized API and worker services on AWS ECS with RDS and S3, wired Pytest into GitHub Actions, and added CloudWatch logging that cut production debugging time by about 35%.",
    ],
  },
  {
    node: "svc://varcons-tech",
    logo: { initials: "VT", color: "#8b5cf6", img: "/images/logos/varcons.jpg" },
    review:
      "An internship building the ingestion backend for a media-monitoring platform: roughly 30,000 news and social records a day, validated, de-duplicated, and normalized before anything reached the database.",
    title: "Software Engineering Intern",
    company: "Varcons Technologies",
    date: "Mar 2022 → May 2022",
    status: "shipped",
    responsibilities: [
      "Built a Python/FastAPI ingestion backend for a media-monitoring platform, pulling in news and social APIs and normalizing about 30,000 content records a day into one shared PostgreSQL model.",
      "Added scheduled ingestion, schema validation, deduplication, retry handling, and Pytest coverage, cutting duplicate records by roughly 30% even when upstream payloads showed up broken or twice.",
    ],
  },
  {
    node: "edu://umass-amherst",
    logo: { initials: "UM", color: "#9a1b2f", img: "/images/logos/umass.png" },
    review:
      "The theory underneath all of it: distributed computing, fault tolerance, and the software engineering that keeps the whole thing honest.",
    title: "M.S. Computer Science",
    company: "University of Massachusetts Amherst",
    date: "Aug 2024 → May 2026",
    status: "graduated",
    responsibilities: [
      "Focused on backend systems, distributed computing, and software engineering.",
      "Where DETERMINA and BULKHEAD came from: coursework and research in consensus, fault tolerance, and real-time data systems.",
    ],
  },
];

const expLogos = [];

// research + awards from JSS Academy of Technical Education
const achievements = [
  {
    tag: "award://ncait-2024",
    icon: "🏆",
    accent: "#f5b544",
    title: "Best Paper, NCAIT 2024",
    place: "JSS Academy of Technical Education",
    desc: "Co-authored a survey on Retrieval-Augmented Generation that took Best Paper at the 10th National Conference on Advancements in Information Technology.",
  },
  {
    tag: "select://kscst-vidtalk",
    icon: "🎖️",
    accent: "#2dd4bf",
    title: "KSCST State-Level Selection",
    place: "Karnataka State Council for Science & Technology",
    desc: "VidTalk, which I later grew into a multimodal video-question-answering system (speech, OCR, captioning, retrieval, ChromaDB), earned KSCST sponsorship and a spot at the state-level exhibition.",
  },
];

const testimonials = [
  {
    name: "Sanjay Pooniya",
    mentions: "Engineering Manager",
    review:
      "Sanjana owned a big chunk of our platform for two years, and honestly she carried it. She took a five-minute workflow down to thirty seconds and made our job processing genuinely reliable. She just takes ownership and runs.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Vineet Saddi",
    mentions: "Grad-school peer at UMass",
    review:
      "One of the sharpest engineers in our cohort. Sanjana doesn't just write code, she thinks the whole system through first, down to what happens when the network misbehaves. Her stuff is clean, well-tested, and built to last.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Anushka Roy",
    mentions: "Former teammate",
    review:
      "Sanjana picked up our entire backend stack scarily fast and was always the one catching the edge case nobody else spotted. Easy to work with, and genuinely into building things that hold up.",
    imgPath: "/images/client3.png",
  },
];

// the human threads that keep running when I'm off the clock
const beyondItems = [
  {
    tag: "proc://trails",
    title: "Hiking",
    desc: "I like trails with a mean elevation profile. Turns out I love a latency graph for the same reason: watching a rough climb finally pay off.",
    emoji: "🥾",
  },
  {
    tag: "proc://oven",
    title: "Baking",
    desc: "Precise inputs, a warm environment, a repeatable process. Baking is basically deploying to production, except the rollback is just eating the evidence.",
    emoji: "🥐",
  },
  {
    tag: "proc://environment-forum",
    title: "International Environment Forum",
    desc: "A member since September 2021. It's where I think about the much bigger system all of us are running on, and how to keep it from crashing.",
    emoji: "🌍",
  },
];

const socialImgs = [
  { name: "linkedin", imgPath: "/images/linkedin.png", url: "https://www.linkedin.com/in/sanjana-gurrappagaru/" },
  { name: "github", imgPath: "/images/github.png", url: "https://github.com/sanjana459" },
];

export {
  abilities,
  logoIconsList,
  counterItems,
  projects,
  expCards,
  expLogos,
  achievements,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  techLayers,
  beyondItems,
  navLinks,
};
