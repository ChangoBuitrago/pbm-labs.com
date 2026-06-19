export type ClientEngagement = {
  name: string;
  industry: string;
  summary: string;
  services: readonly string[];
};

export type ExpertiseArea = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "PBM Labs",
  legalName: "PBM Labs LLC",
  domain: "pbm-labs.com",
  description:
    "Enterprise technology consulting and custom software development — identity infrastructure, IoT platforms, and cryptographic validation for B2B teams.",
  purpose:
    "Technology consulting and software development services (Servicios de consultoría tecnológica y desarrollo de software).",
  address: {
    line1: "PBM Labs",
    line2: "1309 Coffeen Avenue STE 1200",
    city: "Sheridan",
    state: "WY",
    zip: "82801",
    country: "United States",
  },
  email: "hello@pbm-labs.com",
  productName: "PBM Validation API",
  about: {
    headline: "Engineering partner for enterprise infrastructure",
    paragraphs: [
      "PBM Labs is a technology consulting firm focused on custom software development, security architecture, and production-grade platform engineering. We work with enterprise and growth-stage organizations that need reliable systems — not slide decks.",
      "Our team has delivered backend platforms, identity infrastructure, IoT integrations, and cryptographic validation tooling for organizations in energy, enterprise software, and regulated industries. Engagements are remote-first, milestone-driven, and scoped to measurable engineering outcomes.",
      "Alongside client work, we develop internal software products — including the PBM Validation API — to automate data integrity checks in high-stakes corporate workflows.",
    ],
  },
  expertise: [
    {
      title: "Identity & Trust Infrastructure",
      description:
        "SDK design, verifiable credential systems, cryptographic signing workflows, and enterprise identity integration for web and mobile platforms.",
    },
    {
      title: "IoT & Energy Platforms",
      description:
        "Backend services, device integration, and market-facing applications for grid operators, energy retailers, and distributed resource management.",
    },
    {
      title: "Full-Stack Product Engineering",
      description:
        "End-to-end delivery of APIs, admin tooling, and customer-facing applications with an emphasis on maintainability, security, and clear documentation.",
    },
    {
      title: "Security & Data Validation",
      description:
        "DKIM and metadata verification, zero-knowledge processing patterns, business-logic audits, and compliance-oriented engineering for B2B workflows.",
    },
  ] satisfies readonly ExpertiseArea[],
  clients: [
    {
      name: "Energy Web",
      industry: "Energy & Grid Infrastructure",
      summary:
        "Backend and IoT platform engineering for open-source grid flexibility software — including EW Flex asset registration, market integration, and operator-facing services deployed with utilities in Europe and Australia.",
      services: [
        "Backend development",
        "IoT integration",
        "Market platform APIs",
      ],
    },
    {
      name: "The Hashgraph Group",
      industry: "Enterprise Identity",
      summary:
        "Lead product engineering for enterprise identity infrastructure — protocol standards, developer SDK suites (DID, Verifiable Credentials), and production tooling for ecosystem partners.",
      services: [
        "Product engineering",
        "SDK development",
        "Protocol architecture",
      ],
    },
    {
      name: "Managination",
      industry: "Enterprise Software",
      summary:
        "Senior full-stack engineering for identity verification networks, enterprise access systems, and cross-platform integration layers delivered as contract engagements.",
      services: [
        "Full-stack development",
        "Credential verification systems",
        "Platform integration",
      ],
    },
    {
      name: "Wattwatchers",
      industry: "Energy IoT",
      summary:
        "Frontend and backend development for real-time energy monitoring — the mydata.energy mobile platform, cloud APIs, and device management tooling for smart grid deployments.",
      services: [
        "Mobile & web frontend",
        "Python backend APIs",
        "Cloud infrastructure",
      ],
    },
  ] satisfies readonly ClientEngagement[],
  engagementModel: [
    {
      step: "01",
      title: "Discovery",
      description:
        "Technical assessment of existing systems, integration points, security requirements, and delivery constraints.",
    },
    {
      step: "02",
      title: "Engineering",
      description:
        "Iterative delivery of production-ready software, infrastructure, tests, and technical documentation.",
    },
    {
      step: "03",
      title: "Handoff",
      description:
        "Deployment support, knowledge transfer, and optional ongoing advisory for operational teams.",
    },
  ],
} as const;
