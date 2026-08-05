const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Stack", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

// headline metrics, all pulled straight from real work
const counterItems = [
  { value: 2, suffix: "+", label: "years building production backends" },
  { value: 31, suffix: "%", label: "more throughput after I retuned the Kafka consumers" },
  { value: 200, suffix: "ms", label: "peak response, down from a sluggish 1.2s" },
  { value: 33, suffix: "%", label: "fewer tickets a human ever had to touch" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
];

// how I actually work, minus the buzzwords
const abilities = [
  {
    icon: "🧩",
    title: "I own the whole thing",
    desc: "I don't write the endpoint and wander off. I stay for the data model, the deploy pipeline, and the dashboards that tell me it's genuinely working at 3am.",
  },
  {
    icon: "⚡",
    title: "Traffic spikes don't scare me",
    desc: "Redis caches, Kafka consumers, async pipelines, services that scale sideways instead of falling over. I plan for the busy Tuesday, not just the happy-path demo.",
  },
  {
    icon: "🎯",
    title: "Slow counts as a bug",
    desc: "Fast is a feature and I treat it like one. Better queries, smarter indexes, and caching that knows when to let go have turned plenty of second-long waits into sub-200ms ones.",
  },
];

// colourful logo strip for the skills section
const techStackImgs = [
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "FastAPI", imgPath: "/images/logos/fastapi.png" },
  { name: "PostgreSQL", imgPath: "/images/logos/postgresql.png" },
  { name: "Redis", imgPath: "/images/logos/redis.png" },
  { name: "Docker", imgPath: "/images/logos/docker.png" },
  { name: "Kafka", imgPath: "/images/logos/kafka.png" },
  { name: "AWS", imgPath: "/images/logos/aws.png" },
];

// skills grouped by where they live in the stack, each layer with its own colour
const techLayers = [
  {
    tag: "01",
    layer: "Language & core",
    accent: "#f5b544",
    items: ["Python", "SQL", "Bash", "Git", "Linux", "Asyncio", "Concurrency", "OOP", "Data Structures", "Algorithms"],
  },
  {
    tag: "02",
    layer: "APIs & services",
    accent: "#2dd4bf",
    items: ["FastAPI", "Pydantic", "REST", "OpenAPI", "gRPC", "Protocol Buffers", "WebSockets", "SQLAlchemy", "Uvicorn", "JSON"],
  },
  {
    tag: "03",
    layer: "Data & storage",
    accent: "#5b9bd5",
    items: ["PostgreSQL", "PostGIS", "TimescaleDB", "Redis", "Amazon S3", "H3 Spatial Indexing"],
  },
  {
    tag: "04",
    layer: "Messaging & distributed",
    accent: "#a78bfa",
    items: ["Kafka", "Redis Streams", "MQTT", "Event-Driven Architecture", "Pub/Sub"],
  },
  {
    tag: "05",
    layer: "Cloud & DevOps",
    accent: "#fb923c",
    items: ["AWS Lambda", "Amazon EKS", "Docker", "Kubernetes", "Helm", "GitHub Actions", "CI/CD", "Trivy"],
  },
  {
    tag: "06",
    layer: "Testing & observability",
    accent: "#34d399",
    items: ["pytest", "Locust", "Postman", "OpenTelemetry", "Prometheus", "Grafana", "OAuth2", "JWT", "RBAC"],
  },
];

const techStackIcons = [
  { name: "Python", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "FastAPI / REST APIs", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "PostgreSQL / Redis", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "AWS (Lambda, S3)", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Git / GitHub", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

// PROJECTS, straight from the resume. Not linked out on purpose.
const projects = [
  {
    id: "proj-01",
    name: "Distributed Airspace Deconfliction Service",
    org: "University of Massachusetts Amherst",
    stack: "FastAPI · gRPC · PostGIS · H3",
    blurb:
      "Basically air traffic control for drones. It hands out exclusive claims on chunks of sky so two aircraft never get cleared for the same spot at the same second.",
    highlights: [
      "Partition-tolerant service using lease-based mutual exclusion over H3-indexed airspace volumes, holding 40 decisions per second per node at p99 under 180ms.",
      "A Jepsen-inspired fault-injection harness that threw 50+ partition, node-failure, and delayed-message scenarios at it. Zero conflicting grants, from 1-second leases all the way up to 300.",
    ],
    tags: ["FastAPI", "gRPC", "PostgreSQL/PostGIS", "H3", "Distributed Systems"],
    metric: "p99 · <180ms",
  },
  {
    id: "proj-02",
    name: "FHIR Prior-Authorization Conformance Harness",
    org: "University of Massachusetts Amherst",
    stack: "FHIR R4 · X12 278 · Python",
    blurb:
      "Healthcare systems are supposed to agree on what a prior-auth request means. This little referee checks whether they actually do, and quietly calls out the ones that don't.",
    highlights: [
      "A differential testing system that runs synthetic patient bundles through FHIR R4 CRD, DTR, and PAS workflows and compares them against optional X12 278 representations.",
      "Caught 3 distinct classes of semantic divergence and hit 80% precision on a 200-pair, rubric-labeled test set built from X12 definitions and payer guides.",
    ],
    tags: ["FHIR R4", "X12 278", "Differential Testing", "Python"],
    metric: "80% · precision",
  },
];

// EXPERIENCE + EDUCATION, from the resume. `logo` renders a coloured monogram.
const expCards = [
  {
    node: "svc://umass-cics",
    logo: { initials: "UM", color: "#9a1b2f", img: "/images/logos/umass.png" },
    review:
      "Sensors talk fast and wait for nobody. I built the thing that catches every word, checks it's real, files it away, and fans it out to browsers before anyone notices a delay.",
    title: "Student Researcher",
    company: "UMass Amherst CICS",
    date: "Jun 2026 → Present",
    status: "running",
    responsibilities: [
      "Built an async Python (asyncio) ingestion pipeline over MQTT and Mosquitto that validates high-frequency sensor events before they land as telemetry in TimescaleDB hypertables.",
      "Wrote a FastAPI WebSocket fan-out service backed by Redis Streams that pushes events to a crowd of browser clients at once, holding sub-second delivery even under sustained Locust load tests.",
      "Added schema and packet-sequence checks, then wired OpenTelemetry metrics into Prometheus and Grafana so malformed, missing, or out-of-order events actually get noticed instead of silently rotting.",
    ],
  },
  {
    node: "svc://jeta-software",
    logo: { initials: "JE", color: "#4f86c6", img: "/images/logos/jeta.png" },
    review:
      "Two years as the person the backend belonged to. I made the APIs quicker, the deploys less scary, and taught a chatbot to field the questions everyone was tired of answering.",
    title: "Software Developer",
    company: "JETA Software",
    date: "May 2022 → Jun 2024",
    status: "shipped",
    responsibilities: [
      "Built FastAPI and PostgreSQL REST APIs for inventory and order workflows, then tuned the query plans and composite indexes until core endpoints fell from 850ms to under 500ms.",
      "Containerized the services with Docker and shipped them to Amazon EKS with Helm, readiness probes, rolling updates, and GitHub Actions, which dragged our release cycle from 3 days down to under 6 hours.",
      "Added a Redis caching layer with TTLs and explicit invalidation for the hot endpoints, cutting peak response from 1.2s to under 200ms without ever handing anyone stale data.",
      "Wrote async Python consumers for Kafka on AWS Lambda with idempotency, retry safeguards, and batch tuning, pushing throughput up 31% right when transaction volume was peaking.",
      "Built a LangChain support chatbot on the OpenAI API with conversation state, structured prompts, and a graceful human handoff, which cut the chats needing a real person by 33%.",
    ],
  },
  {
    node: "svc://varcons-tech",
    logo: { initials: "VT", color: "#8b5cf6", img: "/images/logos/varcons.jpg" },
    review:
      "My first real taste of data engineering: taking a slow, manual, six-hour chore nobody enjoyed and turning it into a pipeline that just quietly runs itself.",
    title: "Software Developer Intern",
    company: "Varcons Technologies",
    date: "Mar 2022 → May 2022",
    status: "shipped",
    responsibilities: [
      "Built scheduled Python and SQL pipelines to pull, validate, and reshape clinical records from a pile of mismatched source systems, shrinking a recurring 6-hour manual job to under an hour.",
      "Consolidated patient and appointment data into one normalized PostgreSQL schema with real constraints and indexes, which made cross-team reporting about 18% more consistent.",
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
      "Coursework and research in event-driven architecture, fault tolerance, and real-time data systems, most of which quietly ended up in the projects above.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.svg" },
  { name: "logo2", imgPath: "/images/logo2.svg" },
  { name: "logo3", imgPath: "/images/logo3.svg" },
];

// awards + selections from undergrad at JSS Academy of Technical Education
const achievements = [
  {
    tag: "award://ncait-2024",
    icon: "🏆",
    accent: "#f5b544",
    title: "Best Paper Award, NCAIT 2024",
    place: "JSS Academy of Technical Education",
    desc: '"Retrieval-Augmented Generation: A Survey" was picked as the best paper in its track at the 10th National Conference on Advancements in Information Technology.',
  },
  {
    tag: "select://kscst-spp-47",
    icon: "🎖️",
    accent: "#2dd4bf",
    title: "State-Level Selection, KSCST 47th SPP",
    place: "Karnataka State Council for Science & Technology",
    desc: "VidTalk, our video-engagement project, was chosen for the state-level exhibition at the 47th Student Project Programme, held at Sharnbasva University, Kalaburagi.",
  },
];

const testimonials = [
  {
    name: "Sanjay Pooniya",
    mentions: "Engineering Manager",
    review:
      "Sanjana was our only backend engineer for over two years, and honestly she carried it. She nearly halved our API latency and shipped a support bot that took a third of the load off the humans. She just takes ownership and runs.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Vineet Saddi",
    mentions: "Grad-school peer at UMass",
    review:
      "One of the sharpest engineers in our cohort. Sanjana doesn't just write code, she thinks the whole system through first. Her backends are clean, well-tested, and clearly built by someone who expects them to last.",
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
